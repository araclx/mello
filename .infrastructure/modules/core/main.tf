resource "digitalocean_vpc" "this" {
  name     = var.vpc_name
  region   = var.region
  ip_range = var.cidr
}

resource "digitalocean_kubernetes_cluster" "this" {
  name    = var.cluster_name
  region  = var.region
  version = var.k8s_version

  vpc_uuid = digitalocean_vpc.this.id

  node_pool {
    name       = var.pool_name
    size       = var.pool_size
    node_count = var.pool_node_count

    tags = var.pool_tags
  }

  tags = var.cluster_tags
}

resource "digitalocean_loadbalancer" "this" {
  // count = var.pool_node_count >= 2 ? 1 : 0 
  count = var.enable_lb ? 1 : 0


  name     = var.lb_name
  region   = var.region
  vpc_uuid = digitalocean_vpc.this.id

  redirect_http_to_https = var.redirect_http_https

  forwarding_rule {
    entry_port     = var.lb_entry_port
    entry_protocol = var.lb_entry_protocol

    target_port     = var.lb_target_port
    target_protocol = var.lb_target_protocol

  }

  sticky_sessions {
    type               = var.lb_sticky_session_type
    cookie_name        = var.lb_cookie_name
    cookie_ttl_seconds = var.lb_cookie_ttl_seconds
  }

  healthcheck {
    port     = var.lb_healthcheck_port
    protocol = var.lb_healthcheck_protocol
    path     = var.lb_healthcheck_path
  }

  droplet_ids = digitalocean_kubernetes_cluster.this.node_pool[0].nodes[*].droplet_id
}

resource "local_file" "this" {
  content  = digitalocean_kubernetes_cluster.this.kube_config[0].raw_config
  filename = "../../kubeconfigs/${var.env}/kubeconfig_mello-${var.env}"
}

// Firewall
resource "digitalocean_firewall" "this" {
  name = var.firewall_name

  droplet_ids = digitalocean_kubernetes_cluster.this.node_pool[0].nodes[*].droplet_id
  tags = var.firewall_tags
  inbound_rule {
    protocol                  = var.firewall_inbound_protocol_r1
    port_range                = var.firewall_inbound_ports_r1
    source_load_balancer_uids = digitalocean_loadbalancer.this[*].id
  }
}
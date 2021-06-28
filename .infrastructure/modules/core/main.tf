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

resource "local_file" "this" {
  content  = digitalocean_kubernetes_cluster.this.kube_config[0].raw_config
  filename = "/var/kubeconfigs/mello/config_mello-${var.env}"
}

// Firewall
resource "digitalocean_firewall" "this" {
  name = var.firewall_name

  droplet_ids = digitalocean_kubernetes_cluster.this.node_pool[0].nodes[*].droplet_id
  tags        = var.firewall_tags
  inbound_rule {
    protocol                  = var.firewall_inbound_protocol_r1
    port_range                = var.firewall_inbound_ports_r1
    source_load_balancer_uids = digitalocean_loadbalancer.*.id
  }
}
include {
  path = find_in_parent_folders()
}

terraform {
  source = "../../../modules//core"
}

inputs = {
  region = "fra1"
  env    = "stage"

  // VPC
  vpc_name = "mello-vpc-stage"
  cidr     = "192.168.10.0/24"

  // Kubernetes
  cluster_name = "mello-cluster-stage"
  k8s_version  = "1.20.7-do.0"
  cluster_tags = ["mello", "stage"]

  // Node pool
  pool_name       = "mello-pool-stage"
  pool_size       = "s-1vcpu-2gb"
  pool_node_count = 1
  pool_tags       = ["mello", "stage"]

  // Loadbalancer
  enable_lb           = true
  lb_name             = "mello-lb-stage"
  redirect_http_https = false

  lb_entry_port     = 3600
  lb_entry_protocol = "tcp"

  lb_target_port     = 3600
  lb_target_protocol = "tcp"

  lb_sticky_session_type = "none"

  lb_healthcheck_port     = 3600
  lb_healthcheck_protocol = "tcp"

  // Firewall
  firewall_name                = "firewall-mello-stage"
  firewall_tags                = ["mello", "stage"]
  firewall_inbound_protocol_r1 = "tcp"
  firewall_inbound_ports_r1    = "3600"
}
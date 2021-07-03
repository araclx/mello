include {
  path = find_in_parent_folders()
}

generate "provider" {
  path      = "provider_do.tf"
  if_exists = "overwrite"
  contents  = <<EOF
variable "do_token" {
  description = "Provide DO token in environment variable: TF_VAR_do_token=<token> "
  sensitive = true
}

provider "digitalocean" {
  token = var.do_token
}
EOF
}

terraform {
  source = "../../../modules//core"
}

inputs = {
  region = "fra1"

  // VPC
  vpc_name = "mello-stage"
  cidr     = "192.168.50.0/24"

  // Kubernetes
  cluster_name = "mello-cluster-stage"
  k8s_version  = "1.21.2-do.2"
  cluster_tags = ["mello", "stage"]

  // Node pool
  pool_name       = "mello-pool-stage"
  pool_size       = "s-2vcpu-2gb"
  pool_node_count = 1
  pool_tags       = ["mello", "stage"]

  // Firewall
  firewall_name                = "firewall-mello-stage"
  firewall_tags                = ["mello", "stage"]
  firewall_inbound_protocol_r1 = "tcp"
  firewall_inbound_ports_r1    = "3600"
}
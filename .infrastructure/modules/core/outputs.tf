# VPC
output "vpc_id" {
  value = digitalocean_vpc.this.id
}

output "vpc_urn" {
  value = digitalocean_vpc.this.urn
}

output "vpc_default" {
  value = digitalocean_vpc.this.default
}

output "vpc_created_at" {
  value = digitalocean_vpc.this.created_at
}

# Kubernetes Cluster
output "k8s_cluster_id" {
  value = digitalocean_kubernetes_cluster.this.id
}

output "k8s_cluster_urn" {
  value = digitalocean_kubernetes_cluster.this.urn
}

output "k8s_cluster_subnet" {
  value = digitalocean_kubernetes_cluster.this.cluster_subnet
}

output "k8s_cluster_service_subnet" {
  value = digitalocean_kubernetes_cluster.this.service_subnet
}

output "k8s_cluster_public_ip" {
  value = digitalocean_kubernetes_cluster.this.ipv4_address
}

output "k8s_cluster_endpoint" {
  value = digitalocean_kubernetes_cluster.this.endpoint
}

output "k8s_cluster_status" {
  value = digitalocean_kubernetes_cluster.this.status
}

output "k8s_cluster_created_at" {
  value = digitalocean_kubernetes_cluster.this.created_at
}

output "k8s_cluster_updated_at" {
  value = digitalocean_kubernetes_cluster.this.updated_at
}

output "k8s_cluster_auto_upgrade" {
  value = digitalocean_kubernetes_cluster.this.auto_upgrade
}

output "k8s_cluster_node_pool_id" {
  value = digitalocean_kubernetes_cluster.this.node_pool[0].id
}

output "k8s_cluster_actual_node_count" {
  value = digitalocean_kubernetes_cluster.this.node_pool[0].actual_node_count
}

output "k8s_cluster_nodes" {
  value = digitalocean_kubernetes_cluster.this.node_pool[0].nodes
}

output "k8s_cluster_node_name" {
  value = digitalocean_kubernetes_cluster.this.node_pool[0].name
}

output "k8s_cluster_nodes_status" {

  value = [digitalocean_kubernetes_cluster.this.node_pool[0].nodes[*].status]
}
output "k8s_cluster_nodes_droplet_id" {
  value = [digitalocean_kubernetes_cluster.this.node_pool[0].nodes[*].droplet_id]
}

output "k8s_cluster_nodes_created_at" {
  value = [digitalocean_kubernetes_cluster.this.node_pool[0].nodes[*].created_at]
}

output "k8s_cluster_nodes_updated_at" {
  value = [digitalocean_kubernetes_cluster.this.node_pool[0].nodes[*].updated_at]
}

output "k8s_cluster_nodes_taint_key" {
  value = [digitalocean_kubernetes_cluster.this.node_pool[0].taint[*].key]
}

output "k8s_cluster_nodes_taint_value" {
  value = [digitalocean_kubernetes_cluster.this.node_pool[0].taint[*].value]
}

output "k8s_cluster_nodes_taint_effect" {
  value = [digitalocean_kubernetes_cluster.this.node_pool[0].taint[*].effect]
}

# Loadbalancer
output "loadbalancer_id" {
  value = digitalocean_loadbalancer.this[*].id
}

output "loadbalancer_urn" {
  value = digitalocean_loadbalancer.this[*].urn
}

output "loadbalancer_ip" {
  value = digitalocean_loadbalancer.this[*].ip
}

# Firewall
output "firewall_id" {
  value = digitalocean_firewall.this.id
}

output "firewall_name" {
  value = digitalocean_firewall.this.name
}

output "firewall_status" {
  value = digitalocean_firewall.this.status
}

output "firewall_created_at" {
  value = digitalocean_firewall.this.created_at
}

output "firewall_pending_changes" {
  value = digitalocean_firewall.this.pending_changes
}

output "firewall_droplet_ids" {
  value = digitalocean_firewall.this.droplet_ids
}

output "firewall_tags" {
  value = digitalocean_firewall.this.tags
}

output "firewall_inbound_rules" {
  value = digitalocean_firewall.this.inbound_rule
}

output "firewall_outbound_rules" {
  value = digitalocean_firewall.this.outbound_rule
}
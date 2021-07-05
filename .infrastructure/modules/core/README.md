## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_digitalocean"></a> [digitalocean](#requirement\_digitalocean) | 2.10.1 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_digitalocean"></a> [digitalocean](#provider\_digitalocean) | 2.10.1 |
| <a name="provider_local"></a> [local](#provider\_local) | n/a |
| <a name="provider_null"></a> [null](#provider\_null) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [digitalocean_firewall.this](https://registry.terraform.io/providers/digitalocean/digitalocean/2.10.1/docs/resources/firewall) | resource |
| [digitalocean_kubernetes_cluster.this](https://registry.terraform.io/providers/digitalocean/digitalocean/2.10.1/docs/resources/kubernetes_cluster) | resource |
| [digitalocean_vpc.this](https://registry.terraform.io/providers/digitalocean/digitalocean/2.10.1/docs/resources/vpc) | resource |
| [local_file.this](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/file) | resource |
| [null_resource.set_kubeconfig_env](https://registry.terraform.io/providers/hashicorp/null/latest/docs/resources/resource) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_ci_context_uuid"></a> [ci\_context\_uuid](#input\_ci\_context\_uuid) | Provide context (e.g. MELLO-CI) uuid in environment variable: TF\_VAR\_ci\_context\_uuid=<token> | `string` | `""` | no |
| <a name="input_ci_token"></a> [ci\_token](#input\_ci\_token) | Provide CircleCI api token in environment variable: TF\_VAR\_ci\_token=<token> | `string` | `""` | no |
| <a name="input_cidr"></a> [cidr](#input\_cidr) | IP range for VPC | `string` | `"192.168.10.0/24"` | no |
| <a name="input_cluster_name"></a> [cluster\_name](#input\_cluster\_name) | Kubernetes | `string` | `""` | no |
| <a name="input_cluster_tags"></a> [cluster\_tags](#input\_cluster\_tags) | n/a | `list(string)` | <pre>[<br>  ""<br>]</pre> | no |
| <a name="input_env"></a> [env](#input\_env) | n/a | `string` | `"stage"` | no |
| <a name="input_firewall_inbound_ports_r1"></a> [firewall\_inbound\_ports\_r1](#input\_firewall\_inbound\_ports\_r1) | n/a | `string` | `"1-65535"` | no |
| <a name="input_firewall_inbound_protocol_r1"></a> [firewall\_inbound\_protocol\_r1](#input\_firewall\_inbound\_protocol\_r1) | n/a | `string` | `"tcp"` | no |
| <a name="input_firewall_name"></a> [firewall\_name](#input\_firewall\_name) | Firewall | `string` | `null` | no |
| <a name="input_firewall_tags"></a> [firewall\_tags](#input\_firewall\_tags) | n/a | `list(string)` | <pre>[<br>  ""<br>]</pre> | no |
| <a name="input_k8s_version"></a> [k8s\_version](#input\_k8s\_version) | n/a | `string` | `""` | no |
| <a name="input_pool_name"></a> [pool\_name](#input\_pool\_name) | Node pool | `string` | `""` | no |
| <a name="input_pool_node_count"></a> [pool\_node\_count](#input\_pool\_node\_count) | n/a | `number` | `1` | no |
| <a name="input_pool_size"></a> [pool\_size](#input\_pool\_size) | n/a | `string` | `"s-1vcpu-2gb"` | no |
| <a name="input_pool_tags"></a> [pool\_tags](#input\_pool\_tags) | n/a | `list(string)` | <pre>[<br>  ""<br>]</pre> | no |
| <a name="input_region"></a> [region](#input\_region) | n/a | `string` | `""` | no |
| <a name="input_vpc_name"></a> [vpc\_name](#input\_vpc\_name) | VPC | `string` | `""` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_firewall_created_at"></a> [firewall\_created\_at](#output\_firewall\_created\_at) | n/a |
| <a name="output_firewall_droplet_ids"></a> [firewall\_droplet\_ids](#output\_firewall\_droplet\_ids) | n/a |
| <a name="output_firewall_id"></a> [firewall\_id](#output\_firewall\_id) | Firewall |
| <a name="output_firewall_inbound_rules"></a> [firewall\_inbound\_rules](#output\_firewall\_inbound\_rules) | n/a |
| <a name="output_firewall_name"></a> [firewall\_name](#output\_firewall\_name) | n/a |
| <a name="output_firewall_outbound_rules"></a> [firewall\_outbound\_rules](#output\_firewall\_outbound\_rules) | n/a |
| <a name="output_firewall_pending_changes"></a> [firewall\_pending\_changes](#output\_firewall\_pending\_changes) | n/a |
| <a name="output_firewall_status"></a> [firewall\_status](#output\_firewall\_status) | n/a |
| <a name="output_firewall_tags"></a> [firewall\_tags](#output\_firewall\_tags) | n/a |
| <a name="output_k8s_cluster_actual_node_count"></a> [k8s\_cluster\_actual\_node\_count](#output\_k8s\_cluster\_actual\_node\_count) | n/a |
| <a name="output_k8s_cluster_auto_upgrade"></a> [k8s\_cluster\_auto\_upgrade](#output\_k8s\_cluster\_auto\_upgrade) | n/a |
| <a name="output_k8s_cluster_created_at"></a> [k8s\_cluster\_created\_at](#output\_k8s\_cluster\_created\_at) | n/a |
| <a name="output_k8s_cluster_endpoint"></a> [k8s\_cluster\_endpoint](#output\_k8s\_cluster\_endpoint) | n/a |
| <a name="output_k8s_cluster_id"></a> [k8s\_cluster\_id](#output\_k8s\_cluster\_id) | Kubernetes Cluster |
| <a name="output_k8s_cluster_node_name"></a> [k8s\_cluster\_node\_name](#output\_k8s\_cluster\_node\_name) | n/a |
| <a name="output_k8s_cluster_node_pool_id"></a> [k8s\_cluster\_node\_pool\_id](#output\_k8s\_cluster\_node\_pool\_id) | n/a |
| <a name="output_k8s_cluster_nodes"></a> [k8s\_cluster\_nodes](#output\_k8s\_cluster\_nodes) | n/a |
| <a name="output_k8s_cluster_nodes_created_at"></a> [k8s\_cluster\_nodes\_created\_at](#output\_k8s\_cluster\_nodes\_created\_at) | n/a |
| <a name="output_k8s_cluster_nodes_droplet_id"></a> [k8s\_cluster\_nodes\_droplet\_id](#output\_k8s\_cluster\_nodes\_droplet\_id) | n/a |
| <a name="output_k8s_cluster_nodes_status"></a> [k8s\_cluster\_nodes\_status](#output\_k8s\_cluster\_nodes\_status) | n/a |
| <a name="output_k8s_cluster_nodes_taint_effect"></a> [k8s\_cluster\_nodes\_taint\_effect](#output\_k8s\_cluster\_nodes\_taint\_effect) | n/a |
| <a name="output_k8s_cluster_nodes_taint_key"></a> [k8s\_cluster\_nodes\_taint\_key](#output\_k8s\_cluster\_nodes\_taint\_key) | n/a |
| <a name="output_k8s_cluster_nodes_taint_value"></a> [k8s\_cluster\_nodes\_taint\_value](#output\_k8s\_cluster\_nodes\_taint\_value) | n/a |
| <a name="output_k8s_cluster_nodes_updated_at"></a> [k8s\_cluster\_nodes\_updated\_at](#output\_k8s\_cluster\_nodes\_updated\_at) | n/a |
| <a name="output_k8s_cluster_public_ip"></a> [k8s\_cluster\_public\_ip](#output\_k8s\_cluster\_public\_ip) | n/a |
| <a name="output_k8s_cluster_service_subnet"></a> [k8s\_cluster\_service\_subnet](#output\_k8s\_cluster\_service\_subnet) | n/a |
| <a name="output_k8s_cluster_status"></a> [k8s\_cluster\_status](#output\_k8s\_cluster\_status) | n/a |
| <a name="output_k8s_cluster_subnet"></a> [k8s\_cluster\_subnet](#output\_k8s\_cluster\_subnet) | n/a |
| <a name="output_k8s_cluster_updated_at"></a> [k8s\_cluster\_updated\_at](#output\_k8s\_cluster\_updated\_at) | n/a |
| <a name="output_k8s_cluster_urn"></a> [k8s\_cluster\_urn](#output\_k8s\_cluster\_urn) | n/a |
| <a name="output_vpc_created_at"></a> [vpc\_created\_at](#output\_vpc\_created\_at) | n/a |
| <a name="output_vpc_default"></a> [vpc\_default](#output\_vpc\_default) | n/a |
| <a name="output_vpc_id"></a> [vpc\_id](#output\_vpc\_id) | VPC |
| <a name="output_vpc_urn"></a> [vpc\_urn](#output\_vpc\_urn) | n/a |

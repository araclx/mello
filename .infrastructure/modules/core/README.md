## Requirements

| Name                                                                              | Version |
| --------------------------------------------------------------------------------- | ------- |
| <a name="requirement_digitalocean"></a> [digitalocean](#requirement_digitalocean) | 2.10.1  |

## Providers

| Name                                                                        | Version |
| --------------------------------------------------------------------------- | ------- |
| <a name="provider_digitalocean"></a> [digitalocean](#provider_digitalocean) | 2.10.1  |
| <a name="provider_local"></a> [local](#provider_local)                      | n/a     |
| <a name="provider_null"></a> [null](#provider_null)                         | n/a     |

## Modules

No modules.

## Resources

| Name                                                                                                                                               | Type     |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| [digitalocean_firewall.this](https://registry.terraform.io/providers/digitalocean/digitalocean/2.10.1/docs/resources/firewall)                     | resource |
| [digitalocean_kubernetes_cluster.this](https://registry.terraform.io/providers/digitalocean/digitalocean/2.10.1/docs/resources/kubernetes_cluster) | resource |
| [digitalocean_vpc.this](https://registry.terraform.io/providers/digitalocean/digitalocean/2.10.1/docs/resources/vpc)                               | resource |
| [local_file.this](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/file)                                              | resource |
| [null_resource.set_kubeconfig_env](https://registry.terraform.io/providers/hashicorp/null/latest/docs/resources/resource)                          | resource |

## Inputs

| Name                                                                                                                  | Description                                                                                  | Type           | Default                  | Required |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------- | ------------------------ | :------: |
| <a name="input_ci_context_uuid"></a> [ci_context_uuid](#input_ci_context_uuid)                                        | Provide context (e.g. MELLO-CI) uuid in environment variable: TF_VAR_ci_context_uuid=<token> | `string`       | `""`                     |    no    |
| <a name="input_ci_token"></a> [ci_token](#input_ci_token)                                                             | Provide CircleCI api token in environment variable: TF_VAR_ci_token=<token>                  | `string`       | `""`                     |    no    |
| <a name="input_cidr"></a> [cidr](#input_cidr)                                                                         | IP range for VPC                                                                             | `string`       | `"192.168.10.0/24"`      |    no    |
| <a name="input_cluster_name"></a> [cluster_name](#input_cluster_name)                                                 | Kubernetes                                                                                   | `string`       | `""`                     |    no    |
| <a name="input_cluster_tags"></a> [cluster_tags](#input_cluster_tags)                                                 | n/a                                                                                          | `list(string)` | <pre>[<br> ""<br>]</pre> |    no    |
| <a name="input_env"></a> [env](#input_env)                                                                            | n/a                                                                                          | `string`       | `"stage"`                |    no    |
| <a name="input_firewall_inbound_ports_r1"></a> [firewall_inbound_ports_r1](#input_firewall_inbound_ports_r1)          | n/a                                                                                          | `string`       | `"1-65535"`              |    no    |
| <a name="input_firewall_inbound_protocol_r1"></a> [firewall_inbound_protocol_r1](#input_firewall_inbound_protocol_r1) | n/a                                                                                          | `string`       | `"tcp"`                  |    no    |
| <a name="input_firewall_name"></a> [firewall_name](#input_firewall_name)                                              | Firewall                                                                                     | `string`       | `null`                   |    no    |
| <a name="input_firewall_tags"></a> [firewall_tags](#input_firewall_tags)                                              | n/a                                                                                          | `list(string)` | <pre>[<br> ""<br>]</pre> |    no    |
| <a name="input_k8s_version"></a> [k8s_version](#input_k8s_version)                                                    | n/a                                                                                          | `string`       | `""`                     |    no    |
| <a name="input_pool_name"></a> [pool_name](#input_pool_name)                                                          | Node pool                                                                                    | `string`       | `""`                     |    no    |
| <a name="input_pool_node_count"></a> [pool_node_count](#input_pool_node_count)                                        | n/a                                                                                          | `number`       | `1`                      |    no    |
| <a name="input_pool_size"></a> [pool_size](#input_pool_size)                                                          | n/a                                                                                          | `string`       | `"s-1vcpu-2gb"`          |    no    |
| <a name="input_pool_tags"></a> [pool_tags](#input_pool_tags)                                                          | n/a                                                                                          | `list(string)` | <pre>[<br> ""<br>]</pre> |    no    |
| <a name="input_region"></a> [region](#input_region)                                                                   | n/a                                                                                          | `string`       | `""`                     |    no    |
| <a name="input_vpc_name"></a> [vpc_name](#input_vpc_name)                                                             | VPC                                                                                          | `string`       | `""`                     |    no    |

## Outputs

| Name                                                                                                                          | Description        |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| <a name="output_firewall_created_at"></a> [firewall_created_at](#output_firewall_created_at)                                  | n/a                |
| <a name="output_firewall_droplet_ids"></a> [firewall_droplet_ids](#output_firewall_droplet_ids)                               | n/a                |
| <a name="output_firewall_id"></a> [firewall_id](#output_firewall_id)                                                          | Firewall           |
| <a name="output_firewall_inbound_rules"></a> [firewall_inbound_rules](#output_firewall_inbound_rules)                         | n/a                |
| <a name="output_firewall_name"></a> [firewall_name](#output_firewall_name)                                                    | n/a                |
| <a name="output_firewall_outbound_rules"></a> [firewall_outbound_rules](#output_firewall_outbound_rules)                      | n/a                |
| <a name="output_firewall_pending_changes"></a> [firewall_pending_changes](#output_firewall_pending_changes)                   | n/a                |
| <a name="output_firewall_status"></a> [firewall_status](#output_firewall_status)                                              | n/a                |
| <a name="output_firewall_tags"></a> [firewall_tags](#output_firewall_tags)                                                    | n/a                |
| <a name="output_k8s_cluster_actual_node_count"></a> [k8s_cluster_actual_node_count](#output_k8s_cluster_actual_node_count)    | n/a                |
| <a name="output_k8s_cluster_auto_upgrade"></a> [k8s_cluster_auto_upgrade](#output_k8s_cluster_auto_upgrade)                   | n/a                |
| <a name="output_k8s_cluster_created_at"></a> [k8s_cluster_created_at](#output_k8s_cluster_created_at)                         | n/a                |
| <a name="output_k8s_cluster_endpoint"></a> [k8s_cluster_endpoint](#output_k8s_cluster_endpoint)                               | n/a                |
| <a name="output_k8s_cluster_id"></a> [k8s_cluster_id](#output_k8s_cluster_id)                                                 | Kubernetes Cluster |
| <a name="output_k8s_cluster_node_name"></a> [k8s_cluster_node_name](#output_k8s_cluster_node_name)                            | n/a                |
| <a name="output_k8s_cluster_node_pool_id"></a> [k8s_cluster_node_pool_id](#output_k8s_cluster_node_pool_id)                   | n/a                |
| <a name="output_k8s_cluster_nodes"></a> [k8s_cluster_nodes](#output_k8s_cluster_nodes)                                        | n/a                |
| <a name="output_k8s_cluster_nodes_created_at"></a> [k8s_cluster_nodes_created_at](#output_k8s_cluster_nodes_created_at)       | n/a                |
| <a name="output_k8s_cluster_nodes_droplet_id"></a> [k8s_cluster_nodes_droplet_id](#output_k8s_cluster_nodes_droplet_id)       | n/a                |
| <a name="output_k8s_cluster_nodes_status"></a> [k8s_cluster_nodes_status](#output_k8s_cluster_nodes_status)                   | n/a                |
| <a name="output_k8s_cluster_nodes_taint_effect"></a> [k8s_cluster_nodes_taint_effect](#output_k8s_cluster_nodes_taint_effect) | n/a                |
| <a name="output_k8s_cluster_nodes_taint_key"></a> [k8s_cluster_nodes_taint_key](#output_k8s_cluster_nodes_taint_key)          | n/a                |
| <a name="output_k8s_cluster_nodes_taint_value"></a> [k8s_cluster_nodes_taint_value](#output_k8s_cluster_nodes_taint_value)    | n/a                |
| <a name="output_k8s_cluster_nodes_updated_at"></a> [k8s_cluster_nodes_updated_at](#output_k8s_cluster_nodes_updated_at)       | n/a                |
| <a name="output_k8s_cluster_public_ip"></a> [k8s_cluster_public_ip](#output_k8s_cluster_public_ip)                            | n/a                |
| <a name="output_k8s_cluster_service_subnet"></a> [k8s_cluster_service_subnet](#output_k8s_cluster_service_subnet)             | n/a                |
| <a name="output_k8s_cluster_status"></a> [k8s_cluster_status](#output_k8s_cluster_status)                                     | n/a                |
| <a name="output_k8s_cluster_subnet"></a> [k8s_cluster_subnet](#output_k8s_cluster_subnet)                                     | n/a                |
| <a name="output_k8s_cluster_updated_at"></a> [k8s_cluster_updated_at](#output_k8s_cluster_updated_at)                         | n/a                |
| <a name="output_k8s_cluster_urn"></a> [k8s_cluster_urn](#output_k8s_cluster_urn)                                              | n/a                |
| <a name="output_vpc_created_at"></a> [vpc_created_at](#output_vpc_created_at)                                                 | n/a                |
| <a name="output_vpc_default"></a> [vpc_default](#output_vpc_default)                                                          | n/a                |
| <a name="output_vpc_id"></a> [vpc_id](#output_vpc_id)                                                                         | VPC                |
| <a name="output_vpc_urn"></a> [vpc_urn](#output_vpc_urn)                                                                      | n/a                |

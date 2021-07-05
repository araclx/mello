## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_digitalocean"></a> [digitalocean](#requirement\_digitalocean) | 2.10.1 |
| <a name="requirement_kubectl"></a> [kubectl](#requirement\_kubectl) | 1.11.1 |
| <a name="requirement_kubernetes"></a> [kubernetes](#requirement\_kubernetes) | >= 2.0.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_kubectl"></a> [kubectl](#provider\_kubectl) | 1.11.1 |
| <a name="provider_kubernetes"></a> [kubernetes](#provider\_kubernetes) | >= 2.0.0 |
| <a name="provider_null"></a> [null](#provider\_null) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [kubectl_manifest.minio_tenant](https://registry.terraform.io/providers/gavinbunney/kubectl/1.11.1/docs/resources/manifest) | resource |
| [kubernetes_namespace.minio_operator](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/namespace) | resource |
| [null_resource.minio_operator](https://registry.terraform.io/providers/hashicorp/null/latest/docs/resources/resource) | resource |
| [kubectl_file_documents.minio_tenant](https://registry.terraform.io/providers/gavinbunney/kubectl/1.11.1/docs/data-sources/file_documents) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_env"></a> [env](#input\_env) | n/a | `string` | `"staging"` | no |
| <a name="input_minio_version"></a> [minio\_version](#input\_minio\_version) | Minio | `string` | `"4.1.2"` | no |
| <a name="input_node_name"></a> [node\_name](#input\_node\_name) | n/a | `string` | `""` | no |

## Outputs

No outputs.

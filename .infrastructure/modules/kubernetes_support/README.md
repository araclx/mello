## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_digitalocean"></a> [digitalocean](#requirement\_digitalocean) | 2.10.1 |
| <a name="requirement_helm"></a> [helm](#requirement\_helm) | 2.2.0 |
| <a name="requirement_kubectl"></a> [kubectl](#requirement\_kubectl) | 1.11.1 |
| <a name="requirement_kubernetes"></a> [kubernetes](#requirement\_kubernetes) | >= 2.0.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_helm"></a> [helm](#provider\_helm) | 2.2.0 |
| <a name="provider_kubectl"></a> [kubectl](#provider\_kubectl) | 1.11.1 |
| <a name="provider_kubernetes"></a> [kubernetes](#provider\_kubernetes) | >= 2.0.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [helm_release.certmanager](https://registry.terraform.io/providers/hashicorp/helm/2.2.0/docs/resources/release) | resource |
| [helm_release.consul](https://registry.terraform.io/providers/hashicorp/helm/2.2.0/docs/resources/release) | resource |
| [helm_release.traefik](https://registry.terraform.io/providers/hashicorp/helm/2.2.0/docs/resources/release) | resource |
| [kubectl_manifest.certificate_prod](https://registry.terraform.io/providers/gavinbunney/kubectl/1.11.1/docs/resources/manifest) | resource |
| [kubectl_manifest.certificate_stage](https://registry.terraform.io/providers/gavinbunney/kubectl/1.11.1/docs/resources/manifest) | resource |
| [kubernetes_namespace.certmanager](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/namespace) | resource |
| [kubernetes_namespace.consul](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/namespace) | resource |
| [kubernetes_namespace.mello](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/namespace) | resource |
| [kubernetes_namespace.traefik](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/namespace) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_certmanager_version"></a> [certmanager\_version](#input\_certmanager\_version) | Cert-manager | `string` | `"1.4.0"` | no |
| <a name="input_consul_version"></a> [consul\_version](#input\_consul\_version) | Consul | `string` | `"0.31.1"` | no |
| <a name="input_env"></a> [env](#input\_env) | n/a | `string` | `"staging"` | no |
| <a name="input_traefik_version"></a> [traefik\_version](#input\_traefik\_version) | Traefik | `string` | `"9.19.2"` | no |

## Outputs

No outputs.

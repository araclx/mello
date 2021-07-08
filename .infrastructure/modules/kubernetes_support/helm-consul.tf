resource "helm_release" "consul" {
  name = "mello-${var.env}"

  repository = "https://helm.releases.hashicorp.com"
  chart      = "consul"
  version    = var.consul_version
  namespace  = "consul"

  values = [
    "${file("${path.module}/values/consul-values-${var.env}.yaml")}"
  ]
}
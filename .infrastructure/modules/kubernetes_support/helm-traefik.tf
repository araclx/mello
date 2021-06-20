resource "helm_release" "traefik" {
  name       = "traefik-${var.env}"
  repository = "https://helm.traefik.io/traefik"
  chart      = "traefik"
  version    = var.traefik_version
  namespace  = "traefik-system"

  values = [
    "${file("${path.module}/values/traefik-values-${var.env}.yaml")}"
  ]
}

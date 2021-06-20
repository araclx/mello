resource "helm_release" "certmanager" {
  name = "certmanager-${var.env}"

  repository = "https://charts.jetstack.io"
  chart      = "cert-manager"
  version    = var.certmanager_version
  namespace  = "certmanager"

  values = [
    "${file("${path.module}/values/certmanager-values-${var.env}.yaml")}"
  ]
}


resource "kubectl_manifest" "certificate_stage" {
  count     = var.env == "stage" ? 1 : 0
  yaml_body = <<YAML
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: selfsigned
spec:
  selfSigned: {}

---
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: m3llo.co
  namespace: mello
spec:
  dnsNames:
    - m3llo.co
  secretName: m3llo.co
  issuerRef:
    name: selfsigned
    kind: ClusterIssuer
YAML
  depends_on = [
    helm_release.certmanager
  ]
}

resource "kubectl_manifest" "certificate_prod" {
  count     = var.env == "prod" ? 1 : 0
  yaml_body = <<YAML
---
apiVersion: cert-manager.io/v1
kind: Issuer
metadata:
  name: ca-issuer
spec:
  ca:
    secretName: ca-key-pair
YAML
  depends_on = [
    helm_release.certmanager
  ]
}
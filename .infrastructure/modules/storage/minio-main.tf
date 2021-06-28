resource "kubernetes_namespace" "minio_operator" {
  metadata {
    annotations = {
      vendor     = "Araclx Inc."
      maintainer = "Julian Dobrosielski <julian.dobrosielski@araclx.com>"
    }

    labels = {
      Environment = var.env
    }

    name = "minio-operator"
  }
}

# requires installed kubectl
resource "null_resource" "minio_operator" {
  provisioner "local-exec" {
    command = "kubectl --kubeconfig /var/kubeconfigs/mello/config_mello-${var.env} apply -k github.com/minio/operator/\\?ref\\=v${var.minio_version}"
  }
}

data "kubectl_file_documents" "minio_tenant" {
    content = file("${path.module}/tenants/${var.env}-tenant.yaml")
}

resource "kubectl_manifest" "minio_tenant" {
  count = length(data.kubectl_file_documents.minio_tenant.documents)
  yaml_body = element(data.kubectl_file_documents.minio_tenant.documents, count.index)

  depends_on = [
    null_resource.minio_operator
  ]
}
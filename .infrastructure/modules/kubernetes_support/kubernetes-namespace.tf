resource "kubernetes_namespace" "consul" {
  metadata {
    annotations = {
      vendor     = "Araclx Inc."
      maintainer = "Julian Dobrosielski <julian.dobrosielski@araclx.com>"
    }

    labels = {
      Environment = var.env
    }

    name = "consul"
  }
}

resource "kubernetes_namespace" "traefik" {
  metadata {
    annotations = {
      vendor     = "Araclx Inc."
      maintainer = "Julian Dobrosielski <julian.dobrosielski@araclx.com>"
    }

    labels = {
      Environment = var.env
    }

    name = "traefik-system"
  }
}

resource "kubernetes_namespace" "certmanager" {
  metadata {
    annotations = {
      vendor     = "Araclx Inc."
      maintainer = "Julian Dobrosielski <julian.dobrosielski@araclx.com>"
    }

    labels = {
      Environment = var.env
    }

    name = "certmanager"
  }
}

resource "kubernetes_namespace" "mello" {
  metadata {
    annotations = {
      vendor     = "Araclx Inc."
      maintainer = "Julian Dobrosielski <julian.dobrosielski@araclx.com>"
    }

    labels = {
      Environment = var.env
    }

    name = "mello"
  }
}
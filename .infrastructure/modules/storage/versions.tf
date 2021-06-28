terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.0.0"
    }

    kubectl = {
      source  = "gavinbunney/kubectl"
      version = "1.11.1"
    }
  }
}
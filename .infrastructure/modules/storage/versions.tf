terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "2.10.1"
    }
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
dependencies {
  paths = ["../core"]
}

include {
  path = find_in_parent_folders()
}

generate "remote_state" {
  path      = "backend.tf"
  if_exists = "overwrite_terragrunt"
  contents = <<EOF
terraform {
  backend "remote" {
    organization = "muertix"

    workspaces {
      name = "mello-stage-k8s-support"
    }
  }
}
EOF
}

generate "provider" {
  path      = "provider.tf"
  if_exists = "overwrite"
  contents  = <<EOF
variable "do_token" {
  description = "Provide DO token in environment variable: TF_VAR_do_token=<token> "
  sensitive = true
}

provider "digitalocean" {
  token = var.do_token
}

provider "kubernetes" {
  config_path = "/var/kubeconfigs/mello/config_mello-staging"
}

provider "helm" {
  kubernetes {
    config_path = "/var/kubeconfigs/mello/config_mello-staging"
  }
}

provider "kubectl" {
  config_path = "/var/kubeconfigs/mello/config_mello-staging"
}
EOF
}

terraform {
  source = "../../../modules//kubernetes_support"
}

inputs = {
  # Default values for charts version
}
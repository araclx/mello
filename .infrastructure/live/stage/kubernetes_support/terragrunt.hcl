dependencies {
  paths = ["../core"]
}

include {
  path = find_in_parent_folders()
}

generate "provider" {
  path      = "provider.tf"
  if_exists = "overwrite"
  contents  = <<EOF
provider "kubernetes" {
  config_path = "/var/kubeconfigs/mello/config_mello-stage"
}

provider "helm" {
  kubernetes {
    config_path = "/var/kubeconfigs/mello/config_mello-stage"
  }
}

provider "kubectl" {
  config_path = "/var/kubeconfigs/mello/config_mello-stage"
}
EOF
}

terraform {
  source = "../../../modules//kubernetes_support"
}

inputs = {
  # Default values for charts version
}
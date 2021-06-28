dependencies {
  paths = ["../core", "../kubernetes_support"]
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

provider "kubectl" {
  config_path = "/var/kubeconfigs/mello/config_mello-stage"
}
EOF
}

terraform {
  source = "../../../modules//storage"
}

inputs = {
  # Default version for minio
}
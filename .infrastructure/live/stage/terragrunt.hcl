generate "remote_state" {
  path      = "backend.tf"
  if_exists = "overwrite_terragrunt"
  contents = <<EOF
terraform {
  backend "remote" {
    organization = "muertix"

    workspaces {
      name = "mello-stage"
    }
  }
}
EOF
}
inputs = {
    env = "stage"
}
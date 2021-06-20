variable "env" {
  type    = string
  default = "stage"

  validation {
    condition     = contains(["stage", "prod"], var.env)
    error_message = "Values can only be \"stage\", \"prod\"."
  }
}

# Consul
variable "consul_version" {
  type    = string
  default = "0.31.1"
}

# Traefik
variable "traefik_version" {
  type    = string
  default = "9.19.2"
}

# Cert-manager
variable "certmanager_version" {
  type    = string
  default = "1.4.0"
}
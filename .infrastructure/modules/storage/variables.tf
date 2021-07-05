variable "env" {
  type    = string
  default = "staging"

  validation {
    condition     = contains(["staging", "production"], var.env)
    error_message = "Values can only be \"staging\", \"production\"."
  }
}

# Minio
variable "minio_version" {
  type = string
  default = "4.1.2"
}

variable "node_name" {
  type = string
  default = ""
}
variable "env" {
  type    = string
  default = "stage"

  validation {
    condition     = contains(["stage", "prod"], var.env)
    error_message = "Values can only be \"stage\", \"prod\"."
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
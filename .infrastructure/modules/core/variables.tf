variable "region" {
  type    = string
  default = ""

  validation {
    condition     = contains(["nyc1", "nyc2", "nyc3", "ams2", "ams3", "sfo1", "sfo2", "sfo3", "sgp1", "lon1", "fra1", "tor1", "blr1"], var.region)
    error_message = "Values can only be \"nyc1\", \"nyc2\", \"nyc3\", \"ams2\", \"ams3\", \"sfo1\", \"sfo2\", \"sfo3\", \"sgp1\", \"lon1\", \"fra1\", \"tor1\", \"blr1\"."
  }
}

variable "env" {
  type    = string
  default = "staging"

  validation {
    condition     = contains(["staging", "production"], var.env)
    error_message = "Values can only be \"staging\", \"production\"."
  }
}

# VPC
variable "vpc_name" {
  type    = string
  default = ""
}

variable "cidr" {
  type        = string
  default     = "192.168.10.0/24"
  description = "IP range for VPC"
}

# Kubernetes
variable "cluster_name" {
  type    = string
  default = ""
}

variable "k8s_version" {
  type    = string
  default = ""
}

variable "cluster_tags" {
  type    = list(string)
  default = [""]
}
# Node pool
variable "pool_name" {
  type    = string
  default = ""
}

variable "pool_size" {
  type    = string
  default = "s-1vcpu-2gb"
}

variable "pool_node_count" {
  type    = number
  default = 1
}

variable "pool_tags" {
  type    = list(string)
  default = [""]
}

// Firewall
variable "firewall_name" {
  type    = string
  default = null
}

variable "firewall_tags" {
  type    = list(string)
  default = [""]
}

variable "firewall_inbound_protocol_r1" {
  type    = string
  default = "tcp"

  validation {
    condition     = contains(["tcp", "udp", "icmp"], var.firewall_inbound_protocol_r1)
    error_message = "Values can be only \"tcp\", \"udp\", \"icmp\"."
  }
}

variable "firewall_inbound_ports_r1" {
  type    = string
  default = "1-65535"
}

// CI
variable "ci_token" {
  type        = string
  description = "Provide CircleCI api token in environment variable: TF_VAR_ci_token=<token>"
  default     = ""
  sensitive   = true
}

variable "ci_context_uuid" {
  type        = string
  description = "Provide context (e.g. MELLO-CI) uuid in environment variable: TF_VAR_ci_context_uuid=<token>"
  default     = ""
  sensitive   = true
}
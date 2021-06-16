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
  default = "stage"

  validation {
    condition     = contains(["stage", "prod"], var.env)
    error_message = "Values can only be \"stage\", \"prod\"."
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



# Load Balancer
variable "enable_lb" {
  type    = bool
  default = false
}
variable "lb_name" {
  type    = string
  default = ""
}

variable "redirect_http_https" {
  type    = bool
  default = false
}


variable "lb_entry_port" {
  type    = number
  default = 80
}

variable "lb_entry_protocol" {
  type    = string
  default = "http"

  validation {
    condition     = contains(["http", "https", "http2", "tcp"], var.lb_entry_protocol)
    error_message = "Values can be only \"http\", \"https\", \"http2\", \"tcp\"."
  }
}

variable "lb_target_port" {
  type    = number
  default = 80
}

variable "lb_target_protocol" {
  type    = string
  default = "http"

  validation {
    condition     = contains(["http", "https", "http2", "tcp"], var.lb_target_protocol)
    error_message = "Values can be only \"http\", \"https\", \"http2\", \"tcp\"."
  }
}

variable "lb_sticky_session_type" {
  type    = string
  default = "none"

  validation {
    condition     = contains(["none", "cookies"], var.lb_sticky_session_type)
    error_message = "Values can be only \"none\", \"cookies\"."
  }
}

variable "lb_cookie_name" {
  type    = string
  default = null
}

variable "lb_cookie_ttl_seconds" {
  type    = number
  default = null
}

variable "lb_healthcheck_protocol" {
  type    = string
  default = "http"

  validation {
    condition     = contains(["http", "https", "tcp"], var.lb_healthcheck_protocol)
    error_message = "Values can be only \"http\", \"https\", \"tcp\"."
  }
}

variable "lb_healthcheck_port" {
  type    = number
  default = 80
}

variable "lb_healthcheck_path" {
  type    = string
  default = null
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
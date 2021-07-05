To working properly set these variables as environment variables for each env(e.g. stage):
- TF_VAR_do_token=*\<token\>*
- TF_VAR_ci_token=*\<token\>*
- TF_VAR_ci_context_uuid=*\<token\>*

Required workspaces in TFC(run 'terraform login' in CLI):
- (e.g. mello-stage-core)
- mello-*\<env\>*-core
- mello-*\<env\>*-k8s-support
- mello-*\<env\>*-storage

Kubernetes 'kubeconfig' will be placed in '/var/kubeconfigs/mello/config_mello-*\<env\>*'

Traefik service for 'stage env' is configured as NodePort with droplet IP e.g. ***\<droplet_ip\>***:***\<NodePort\>***

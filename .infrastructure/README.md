To working properly set these variables as environment variables for each env(e.g. stage):

-  TF_VAR_do_token=_\<token\>_
-  TF_VAR_ci_token=_\<token\>_
-  TF_VAR_ci_context_uuid=_\<token\>_

Required workspaces in TFC(run 'terraform login' in CLI):

-  (e.g. mello-stage-core)
-  mello-_\<env\>_-core
-  mello-_\<env\>_-k8s-support
-  mello-_\<env\>_-storage

Kubernetes 'kubeconfig' will be placed in '/var/kubeconfigs/mello/config_mello-_\<env\>_'

Traefik service for 'stage env' is configured as NodePort with droplet IP e.g. **_\<droplet_ip\>_**:**_\<NodePort\>_**

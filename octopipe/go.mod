module octopipe

go 1.14

require (
	github.com/Masterminds/goutils v1.1.0 // indirect
	github.com/Masterminds/semver v1.5.0 // indirect
	github.com/Masterminds/sprig v2.22.0+incompatible // indirect
	github.com/argoproj/gitops-engine v0.2.1-0.20210129183711-c5b7114c501f
	github.com/aws/aws-sdk-go v1.35.24
	github.com/cyphar/filepath-securejoin v0.2.2 // indirect
	github.com/fsnotify/fsnotify v1.4.9 // indirect
	github.com/gin-gonic/gin v1.6.3
	github.com/go-sql-driver/mysql v1.5.0 // indirect
	github.com/gobwas/glob v0.2.3 // indirect
	github.com/google/go-github/v33 v33.0.0 // indirect
	github.com/google/uuid v1.1.2
	github.com/huandu/xstrings v1.3.2 // indirect
	github.com/imdario/mergo v0.3.9
	github.com/joho/godotenv v1.3.0
	github.com/mitchellh/copystructure v1.0.0 // indirect
	github.com/sirupsen/logrus v1.6.0
	github.com/stretchr/testify v1.6.1
	github.com/tidwall/sjson v1.1.1
	golang.org/x/sync v0.0.0-20201207232520-09787c993a3a
	golang.org/x/time v0.0.0-20200630173020-3af7569d3a1e
	gopkg.in/resty.v1 v1.12.0
	helm.sh/helm/v3 v3.2.4
	k8s.io/api v0.20.1
	k8s.io/apiextensions-apiserver v0.20.1
	k8s.io/apimachinery v0.20.1
	k8s.io/client-go v11.0.1-0.20190816222228-6d55c1b1f1ca+incompatible
	k8s.io/code-generator v0.20.1
	k8s.io/component-base v0.20.1
	k8s.io/helm v2.16.9+incompatible
	k8s.io/klog v1.0.0
	k8s.io/kube-openapi v0.0.0-20201113171705-d219536bb9fd
	k8s.io/kubectl v0.20.1
	k8s.io/kubernetes v1.20.1
	k8s.io/utils v0.0.0-20201110183641-67b214c5f920
	sigs.k8s.io/aws-iam-authenticator v0.5.0
)

replace (
	k8s.io/api => k8s.io/api v0.20.1
	k8s.io/apiextensions-apiserver => k8s.io/apiextensions-apiserver v0.20.1
	k8s.io/apimachinery => k8s.io/apimachinery v0.20.1
	k8s.io/apiserver => k8s.io/apiserver v0.20.1
	k8s.io/cli-runtime => k8s.io/cli-runtime v0.20.1
	k8s.io/client-go => k8s.io/client-go v0.20.1
	k8s.io/cloud-provider => k8s.io/cloud-provider v0.20.1
	k8s.io/cluster-bootstrap => k8s.io/cluster-bootstrap v0.20.1
	k8s.io/code-generator => k8s.io/code-generator v0.20.1
	k8s.io/component-base => k8s.io/component-base v0.20.1
	k8s.io/component-helpers => k8s.io/component-helpers v0.20.1
	k8s.io/controller-manager => k8s.io/controller-manager v0.20.1
	k8s.io/cri-api => k8s.io/cri-api v0.20.1
	k8s.io/csi-translation-lib => k8s.io/csi-translation-lib v0.20.1
	k8s.io/kube-aggregator => k8s.io/kube-aggregator v0.20.1
	k8s.io/kube-controller-manager => k8s.io/kube-controller-manager v0.20.1
	k8s.io/kube-proxy => k8s.io/kube-proxy v0.20.1
	k8s.io/kube-scheduler => k8s.io/kube-scheduler v0.20.1
	k8s.io/kubectl => k8s.io/kubectl v0.20.1
	k8s.io/kubelet => k8s.io/kubelet v0.20.1
	k8s.io/legacy-cloud-providers => k8s.io/legacy-cloud-providers v0.20.1
	k8s.io/metrics => k8s.io/metrics v0.20.1
	k8s.io/mount-utils => k8s.io/mount-utils v0.20.1
	k8s.io/sample-apiserver => k8s.io/sample-apiserver v0.20.1
)

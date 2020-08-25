(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(2),r=n(6),a=(n(0),n(89)),i={title:"Development & Debugging"},l={unversionedId:"apps/develop",id:"apps/develop",isDocsHomePage:!1,title:"Development & Debugging",description:"One of the shortcomings of Kubernetes is that it can be difficult to know what's going on within the cluster. It sometimes feels like a blackbox, with limited tools in seeing what's in there. And if your app is failing in production, how do you replicate the setup to reproduce the error locally?",source:"@site/docs/apps/develop.md",permalink:"/docs/apps/develop",editUrl:"https://github.com/k11n/konstellation/edit/master/website/docs/apps/develop.md",sidebar:"default",previous:{title:"Config & Environment",permalink:"/docs/apps/configuration"},next:{title:"Microservices",permalink:"/docs/apps/services"}},s=[{value:"Logging",id:"logging",children:[]},{value:"Proxy",id:"proxy",children:[]},{value:"Running locally",id:"running-locally",children:[]},{value:"Inspecting the container",id:"inspecting-the-container",children:[]}],p={rightToc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"One of the shortcomings of Kubernetes is that it can be difficult to know what's going on within the cluster. It sometimes feels like a blackbox, with limited tools in seeing what's in there. And if your app is failing in production, how do you replicate the setup to reproduce the error locally?"),Object(a.b)("p",null,"Konstellation simplifies the debugging & development process by giving you an app-centric tools to obtain visibility."),Object(a.b)("h2",{id:"logging"},"Logging"),Object(a.b)("p",null,"Apps should ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://12factor.net/logs"}),"write logs to stdout"),", in JSON. It should not have to worry about the underlying storage of logs, or be concerned with uploading logs to another service. Konstellation works with Kubernetes logging to perform standard log operations."),Object(a.b)("p",null,"To pull app logs from production, or to tail the logs, you would run the ",Object(a.b)("inlineCode",{parentName:"p"},"kon app logs <yourapp>")," command. It will guide you through the process of picking a pod to inspect."),Object(a.b)("p",null,"By default, it'll print the last 100 lines of logs from your container. To follow logs, run ",Object(a.b)("inlineCode",{parentName:"p"},"kon app logs -f <yourapp>"),"."),Object(a.b)("p",null,"For more advanced log management, you could use third party solutions that integrate with Kubernetes, such as ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.fluentd.org/container-deployment/kubernetes"}),"Fluentd"),", ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.datadoghq.com/integrations/kubernetes/"}),"Datadog"),", or ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://sematext.com/docs/agents/sematext-agent/kubernetes/installation/"}),"Sematext"),", to name a few."),Object(a.b)("h2",{id:"proxy"},"Proxy"),Object(a.b)("p",null,"When apps are running inside Kubernetes, they are typically behind various security groups and inaccessible from developer machines. It's helpful to be able to load the responses manually to inspect it. Kubernetes has a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/extend-kubernetes/http-proxy-access-api/"}),"built-in proxy")," that can map of a cluster address to localhost."),Object(a.b)("p",null,"Konstellation integrates with the proxy and makes it easier to reach your apps. ",Object(a.b)("inlineCode",{parentName:"p"},"launch proxy")," command would open a new proxy to a specific app, mapping it to the app's usual port onto localhost."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"% kon launch proxy --app myapp\nProxy to production.apiserver: started on http://localhost:9000\n")),Object(a.b)("p",null,"You can also proxy to non-Konstellation services, by passing in ",Object(a.b)("inlineCode",{parentName:"p"},"--service")," and ",Object(a.b)("inlineCode",{parentName:"p"},"--namespace")," flags."),Object(a.b)("h2",{id:"running-locally"},"Running locally"),Object(a.b)("p",null,"When you need to replicate the in-cluster setup to run an app locally, Konstellation provides a shortcut in doing so."),Object(a.b)("p",null,"It has a ",Object(a.b)("inlineCode",{parentName:"p"},"local")," mode that replicates the in-cluster config for the app. To use this, run ",Object(a.b)("inlineCode",{parentName:"p"},"kon app local [--target target] <yourapp>")),Object(a.b)("p",null,"If a target is not passed in, it'll use the first target defined."),Object(a.b)("p",null,"When running locally, the same environment variables will be set for the configuration and hostnames of service dependencies. For service dependencies, proxies will be created on localhost that would allow you to connect to services running inside of the Kubernetes cluster. This is extremely useful in an microservices environment since you could avoid replicating the entire setup in order to test a single service."),Object(a.b)("h2",{id:"inspecting-the-container"},"Inspecting the container"),Object(a.b)("p",null,"You can get shell access to any instances of an app with ",Object(a.b)("inlineCode",{parentName:"p"},"kon app shell <yourapp>"),"."),Object(a.b)("p",null,"In order for this to work, you need to have a shell installed on the docker image. By default Konstellation will launch ",Object(a.b)("inlineCode",{parentName:"p"},"/bin/sh"),". To override the shell, run ",Object(a.b)("inlineCode",{parentName:"p"},"kon app shell --shell <path-to-shell> <yourapp>")))}c.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=o,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(h,l(l({ref:t},p),{},{components:n})):r.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
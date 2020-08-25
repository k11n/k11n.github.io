(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),r=(n(0),n(89)),o={title:"Config & Environment"},c={unversionedId:"apps/configuration",id:"apps/configuration",isDocsHomePage:!1,title:"Config & Environment",description:"App configs are used to define variables that an application requires. In Konstellation, they are kept separate from the main app manifest. Configs are stored as a custom resource in Konstellation and passed to apps as environment variables.",source:"@site/docs/apps/configuration.md",permalink:"/docs/apps/configuration",editUrl:"https://github.com/k11n/konstellation/edit/master/website/docs/apps/configuration.md",sidebar:"default",previous:{title:"The Basics",permalink:"/docs/apps/basics"},next:{title:"Development & Debugging",permalink:"/docs/apps/develop"}},p=[{value:"App config",id:"app-config",children:[]},{value:"Shared config",id:"shared-config",children:[]},{value:"Target specific overrides",id:"target-specific-overrides",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"App configs are used to define variables that an application requires. In Konstellation, they are kept separate from the main app manifest. Configs are stored as a custom resource in Konstellation and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://12factor.net/config"}),"passed to apps as environment variables"),"."),Object(r.b)("p",null,"The interface for configurations is an YAML file. You can create or edit them in an editor to be saved to Kubernetes with ",Object(r.b)("inlineCode",{parentName:"p"},"kon config edit"),". Any changes to a config that an app relies on will automatically create a new release. This means that releases are versioned by configs in addition to build changes. This is important since a bad config update could botch a deployment."),Object(r.b)("p",null,"There are two kinds of configs: config for a single app, or shared configs. They serve different purposes and can be used together."),Object(r.b)("p",null,"To see the configs that are available on the current cluster, use ",Object(r.b)("inlineCode",{parentName:"p"},"kon config list"),"."),Object(r.b)("h3",{id:"app-config"},"App config"),Object(r.b)("p",null,"App config is a config that's usable by a single app. When you create an app config, it's made available automatically to the app as environment variables. For more complex config structures, a copy of the config yaml is also set as env var ",Object(r.b)("inlineCode",{parentName:"p"},"APP_CONFIG"),"."),Object(r.b)("p",null,'For example, create a config for "myapp" with: ',Object(r.b)("inlineCode",{parentName:"p"},"kon config edit --app myapp"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="myapp.yaml"',title:'"myapp.yaml"'}),"title: My website title\npublished_at: 1590564232\nnavigation:\n  sidebar:\n    - hello\n    - world\n  topnav:\n    - link1\n    - link2\n")),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"myapp")," is ran, it'll will automatically receive these environment variables:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"env"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"TITLE"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'"My website title"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"PUBLISHED_AT"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'"1590564232"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"APP_CONFIG"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"a copy of the config in YAML")))),Object(r.b)("p",null,"Note that keys have been converted to upper case, and any dashes ",Object(r.b)("inlineCode",{parentName:"p"},"-")," that you might have in the key names are converted to underscores ",Object(r.b)("inlineCode",{parentName:"p"},"_"),"."),Object(r.b)("p",null,"Because the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," field is not a simple scalar value, Konstellation does not attempt to convert it to an env var. Instead, the entire config file is available in the ",Object(r.b)("inlineCode",{parentName:"p"},"APP_CONFIG")," variable."),Object(r.b)("h3",{id:"shared-config"},"Shared config"),Object(r.b)("p",null,"While app configs are great way to set app specific configurations, it could lead to duplication when the same configuration is required by multiple apps. For example, you may want to store connection to databases that multiple apps require. Editing each app config would be a massive duplication of effort."),Object(r.b)("p",null,"Shared configs is the way to accomplish this. Shared configs are given names, and can be referenced by multiple apps. Below is an example of creating a shared config and using it in my app. Create a shared config with ",Object(r.b)("inlineCode",{parentName:"p"},"kon config edit --name db-connection")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db-connection.yaml"',title:'"db-connection.yaml"'}),"engine: mysql\nhost: mysql.host.com\nuser: username\n")),Object(r.b)("p",null,"Once the config file is created, you can then reference it in the ",Object(r.b)("inlineCode",{parentName:"p"},"configs")," field in the manifest. ",Object(r.b)("inlineCode",{parentName:"p"},"kon app edit <myapp>")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="App.yaml"',title:'"App.yaml"'}),"apiVersion: k11n.dev/v1alpha1\nkind: App\nmetadata:\n  name: myapp\nspec:\n  image: repo/myapp\n  configs:\n    - db-connection\n  targets:\n    - name: production\n")),Object(r.b)("p",null,"Save the app.yaml file and a new release will be created that passes it a new environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"DB_CONNECTION"),", with the value being set to the contents of the db config in YAML."),Object(r.b)("h3",{id:"target-specific-overrides"},"Target specific overrides"),Object(r.b)("p",null,"In certain cases, it's desirable to have certain config attributes to differ between the different environments. For example, you may have a staging database and a production one. Konstellation offers a away to define target specific overrides."),Object(r.b)("p",null,"When you edit a config by passing in a ",Object(r.b)("inlineCode",{parentName:"p"},"--target")," flag, it will create an override file where those values only apply to that specific target. At run time, all of the values you've defined for the target would be merged into the base config."),Object(r.b)("p",null,"To see the final config values that a specific release of an app will receive, use the ",Object(r.b)("inlineCode",{parentName:"p"},"kon config show")," command."))}s.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),f=a,u=b["".concat(o,".").concat(f)]||b[f]||d[f]||r;return n?i.a.createElement(u,c(c({ref:t},l),{},{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
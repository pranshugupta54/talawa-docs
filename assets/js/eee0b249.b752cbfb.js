"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=i,h=c["".concat(u,".").concat(g)]||c[g]||d[g]||l;return a?n.createElement(h,r(r({ref:t},s),{},{components:a})):n.createElement(h,r({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={id:"plugin-architecture",title:"Plugin Architecture"},r="Plugin Architecture",o={unversionedId:"developers/talawa-admin/plugins/plugin-architecture",id:"developers/talawa-admin/plugins/plugin-architecture",title:"Plugin Architecture",description:"Plugin Architecture provides talawa projects an ability to control latent Talawa Mobile App features from the Talawa Admin Web Portal.",source:"@site/docs/developers/talawa-admin/plugins/plugin-architecture.md",sourceDirName:"developers/talawa-admin/plugins",slug:"/developers/talawa-admin/plugins/plugin-architecture",permalink:"/docs/developers/talawa-admin/plugins/plugin-architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"plugin-architecture",title:"Plugin Architecture"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/developers/talawa-admin/talawa-admin-introduction"},next:{title:"Plugin Implementation",permalink:"/docs/developers/talawa-admin/plugins/implementing-plugins"}},u={},p=[{value:"Plugin",id:"plugin",level:2},{value:"High Level Overview of Plugin Architecture",id:"high-level-overview-of-plugin-architecture",level:2},{value:"Talawa Admin",id:"talawa-admin",level:3},{value:"Example",id:"example",level:4},{value:"Talawa API",id:"talawa-api",level:3},{value:"Talawa",id:"talawa",level:3},{value:"Plugin Store",id:"plugin-store",level:2},{value:"Installing and Uninstalling Plugins",id:"installing-and-uninstalling-plugins",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(c,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugin-architecture"},"Plugin Architecture"),(0,i.kt)("p",null,"Plugin Architecture provides talawa projects an ability to control latent ",(0,i.kt)("a",{parentName:"p",href:"https://docs.talawa.io/docs/talawa/talawa-introduction"},"Talawa Mobile App")," features from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.talawa.io/docs/talawa-admin/talawa-admin-introduction"},"Talawa Admin")," Web Portal."),(0,i.kt)("h2",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"A Plugin is a feature in Talawa Mobile App that is controlled by the Admins of that organization. By having the control admins can decide the accessibility of that feature for the organization members."),(0,i.kt)("p",null,"Programmatically the logic of this Plugin is stored in the mobile app but it's inaccessible to the users until the admin of the organization installs that plugin."),(0,i.kt)("p",null,"You first have to be register the Plugins from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin store")," in order to install them from the Talawa Admin."),(0,i.kt)("h2",{id:"high-level-overview-of-plugin-architecture"},"High Level Overview of Plugin Architecture"),(0,i.kt)("p",null,"Let's discuss the role of the different apps to make the plugin architecture work."),(0,i.kt)("h3",{id:"talawa-admin"},"Talawa Admin"),(0,i.kt)("p",null,"Admin Provides ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin Store")," where has the following functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ability to install or uninstall the plugins."),(0,i.kt)("li",{parentName:"ul"},"Ability to Toggle list of installed and available plugins."),(0,i.kt)("li",{parentName:"ul"},"Ability to Search the plugin using SearchBar (provided on the right) .")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin Store Sample Image",src:a(9606).Z,width:"1358",height:"625"})),(0,i.kt)("h3",{id:"talawa-api"},"Talawa API"),(0,i.kt)("p",null,"It is a nodeJS API that is used to interface with the database containing list of the plugins with their different attributes."),(0,i.kt)("p",null,"A sample Plugin Model can have the below properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Plugin : {\n    pluginName: String, // plugin name\n    pluginCreatedBy: String, // name of the creator\n    pluginDesc : String, // description\n    pluginInstallStatus : Boolean, // TRUE if installed otherwise FALSE\n    installedOrgs : [ID] // a list containing ID of the organization who have installed the plugin\n}\n")),(0,i.kt)("h3",{id:"talawa"},"Talawa"),(0,i.kt)("p",null,"Plugin in the mobile App are mainly focused for the features on the navbar.but other functionalities can also be implemented as plugins using the ",(0,i.kt)("inlineCode",{parentName:"p"},"TalawaPluginProvider")," Flutter Widget.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Talawa Mobile App ",src:a(8731).Z,width:"418",height:"627"})),(0,i.kt)("h2",{id:"plugin-store"},"Plugin Store"),(0,i.kt)("h2",{id:"installing-and-uninstalling-plugins"},"Installing and Uninstalling Plugins"),(0,i.kt)("p",null,"The Following video showcases process of installing the plugin. We are uninstalling ",(0,i.kt)("inlineCode",{parentName:"p"},"Events")," feature from the talawa app."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Admin portal and talwa app must be of same organizations")),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lrf9LApT37U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0},9606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/store-8a3d8d142e699b82286da665bb0dc8b7.PNG"},8731:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/talawa-115af7c974ebc0d4f23e600c5f703d43.PNG"}}]);
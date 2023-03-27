"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,m=c["".concat(o,".").concat(u)]||c[u]||f[u]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[c]="string"==typeof e?e:i,r[1]=d;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const l={},r=void 0,d={unversionedId:"talawa-api/interfaces/models_File.Interface_File",id:"talawa-api/interfaces/models_File.Interface_File",title:"models_File.Interface_File",description:"talawa-api / Exports / models/File / Interface\\File",source:"@site/docs/talawa-api/interfaces/models_File.Interface_File.md",sourceDirName:"talawa-api/interfaces",slug:"/talawa-api/interfaces/models_File.Interface_File",permalink:"/docs/talawa-api/interfaces/models_File.Interface_File",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api/interfaces/models_File.Interface_File.md",tags:[],version:"current",frontMatter:{}},o={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"_id",id:"_id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"contentType",id:"contenttype",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"createdAt",id:"createdat",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"secret",id:"secret",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"size",id:"size",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"url",id:"url",level:3},{value:"Defined in",id:"defined-in-7",level:4}],p={toc:s},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/talawa-api/"},"talawa-api")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules"},"Exports")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules/models_File"},"models/File")," / Interface","_","File"),(0,i.kt)("h1",{id:"interface-interface_file"},"Interface: Interface","_","File"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules/models_File"},"models/File"),".Interface_File"),(0,i.kt)("p",null,"This is an interface representing a document for a file in the database(MongoDB)."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/talawa-api/interfaces/models_File.Interface_File#_id"},"_","id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/talawa-api/interfaces/models_File.Interface_File#contenttype"},"contentType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/talawa-api/interfaces/models_File.Interface_File#createdat"},"createdAt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/talawa-api/interfaces/models_File.Interface_File#name"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/talawa-api/interfaces/models_File.Interface_File#secret"},"secret")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/talawa-api/interfaces/models_File.Interface_File#size"},"size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/talawa-api/interfaces/models_File.Interface_File#status"},"status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/talawa-api/interfaces/models_File.Interface_File#url"},"url"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"_id"},"_","id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectId")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/models/File.ts:7"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contenttype"},"contentType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"contentType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/models/File.ts:13"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createdat"},"createdAt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"createdAt"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/models/File.ts:12"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/models/File.ts:8"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"secret"},"secret"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"secret"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/models/File.ts:11"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"size"},"size"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"size"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"src/models/File.ts:10"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"status"},"status"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"status"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,"src/models/File.ts:14"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"url"},"url"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"url"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,"src/models/File.ts:9"))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[83626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46092:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=r(67294),o=r(3905);const l={id:"field-error",title:"FieldError",hide_table_of_contents:!1},s=void 0,i={unversionedId:"schema/interfaces/field-error",id:"schema/interfaces/field-error",title:"FieldError",description:"No description",source:"@site/docs/schema/interfaces/field-error.mdx",sourceDirName:"schema/interfaces",slug:"/schema/interfaces/field-error",permalink:"/docs/schema/interfaces/field-error",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/interfaces/field-error.mdx",tags:[],version:"current",frontMatter:{id:"field-error",title:"FieldError",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Error",permalink:"/docs/schema/interfaces/error"},next:{title:"Mutations",permalink:"/docs/category/mutations"}},c={},d=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FieldError.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fielderrorbmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FieldError.<b>path</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fielderrorbpathbcodestring--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:s=!1}=e;const[i,c]=(0,n.useState)(s);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&l)},y={Bullet:d,SpecifiedBy:m,Badge:p,toc:u,Details:f},g="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface FieldError {\n  message: String!\n  path: [String!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fielderrorbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FieldError.",(0,o.kt)("b",null,"message"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fielderrorbpathbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FieldError.",(0,o.kt)("b",null,"path"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/invalid-cursor"},(0,o.kt)("inlineCode",{parentName:"a"},"InvalidCursor"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/maximum-length-error"},(0,o.kt)("inlineCode",{parentName:"a"},"MaximumLengthError"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/maximum-value-error"},(0,o.kt)("inlineCode",{parentName:"a"},"MaximumValueError"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/minimum-length-error"},(0,o.kt)("inlineCode",{parentName:"a"},"MinimumLengthError"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/minimum-value-error"},(0,o.kt)("inlineCode",{parentName:"a"},"MinimumValueError"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);
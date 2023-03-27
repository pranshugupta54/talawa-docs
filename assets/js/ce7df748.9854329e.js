"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35415:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"members-registration",title:"Registration"},i=void 0,s={unversionedId:"features/members/members-registration",id:"features/members/members-registration",title:"Registration",description:"This section is a work in progress.",source:"@site/docs/features/members/registration.md",sourceDirName:"features/members",slug:"/features/members/members-registration",permalink:"/docs/features/members/members-registration",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/features/members/registration.md",tags:[],version:"current",frontMatter:{id:"members-registration",title:"Registration"},sidebar:"docs",previous:{title:"Pre-Approvals",permalink:"/docs/features/members/members-preapprovals"},next:{title:"Access Banning",permalink:"/docs/features/members/members-banning"}},l={},p=[{value:"Code: MEM-004",id:"code-mem-004",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,a.kt)("h2",{id:"code-mem-004"},"Code: MEM-004"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Authored by")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"Xavier Bryson")," ")," ",(0,a.kt)("em",{parentName:"p"},". Last updated on")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"14/03/21")," ")),(0,a.kt)("p",null,"This feature aims to ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"enable member access")," ")," by ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"allowing members to register for an organization with the use of a unique identifier.")," ")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"We need a unique way of tracking users :"))),(0,a.kt)("p",null,"Members within the organization need a unique identifier for their devices/accounts."),(0,a.kt)("h3",{id:"goals"},"Goals"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SMS OTP")," : to avoid costs within the application, this feature will be omitted as a paid third-party service is required ."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Email Registration:")," A common issue faced by users is that access to their emails is non-existent as they do not own one, or it is done so on a need to basis.")),(0,a.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Xavier Bryson (Feature Lead)"),": provide clarity on feature changes and assumptions.")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("h3",{id:"use-cases"},"Use Cases"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"New users want to:")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Register for an account within a given organisation")," : where an organisation is public or once access has been granted to them by the organization admin")),(0,a.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,a.kt)("p",null,"TBD"),(0,a.kt)("h3",{id:"user-experience"},"User Experience"),(0,a.kt)("p",null,"TBD"),(0,a.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"future-work"},"Future Work"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,a.kt)("p",null,"N/A"))}c.isMDXComponent=!0}}]);
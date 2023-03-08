"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[8502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return r?a.createElement(k,l(l({ref:t},m),{},{components:r})):a.createElement(k,l({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={id:"members-preapprovals",title:"Pre-Approvals"},l=void 0,i={unversionedId:"features/members/members-preapprovals",id:"features/members/members-preapprovals",title:"Pre-Approvals",description:"This section is a work in progress.",source:"@site/docs/features/members/preapprovals.md",sourceDirName:"features/members",slug:"/features/members/members-preapprovals",permalink:"/docs/features/members/members-preapprovals",draft:!1,tags:[],version:"current",frontMatter:{id:"members-preapprovals",title:"Pre-Approvals"},sidebar:"someSidebar",previous:{title:"Roles",permalink:"/docs/features/members/members-roles"},next:{title:"Registration",permalink:"/docs/features/members/members-registration"}},s={},p=[{value:"Code: MEM-003",id:"code-mem-003",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Solution 1:",id:"solution-1",level:4},{value:"Solution 2:",id:"solution-2",level:4},{value:"Solution 3:",id:"solution-3",level:4},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,n.kt)("h2",{id:"code-mem-003"},"Code: MEM-003"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Authored by")," ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"Xavier Bryson")," ")," ",(0,n.kt)("em",{parentName:"p"},". Last updated on")," ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"14/03/21")," ")),(0,n.kt)("p",null,"This feature aims to ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"provide more security within the signup process")," ")," by ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"incorporating a method for validating new users registering for an organization within the app")," "),"."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("h3",{id:"problem"},"Problem"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Anyone is able to sign up for an organization within the application:"))),(0,n.kt)("p",null,"We need a method for administrators to pre-approve users. Additionally, we need to assume that users may not have access to email and that text message service integration will not be immediately available."),(0,n.kt)("h3",{id:"goals"},"Goals"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Allow for a secure method of approving new members to an organization within the app")," :\nEnable the admin to oversee the registration and/or approval of members to an organization. The process should be seamless and intuitive to both users (Admin ","&"," Members) of the application.")),(0,n.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Xavier Bryson (Feature Lead)"),": Make decision on final solution.")),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("h3",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"TBD."),(0,n.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A pre-approved list of phone numbers.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"QR code approvals by admins or their lieutenants through the app")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"One time password/token given to the user generated by admins"),(0,n.kt)("p",{parentName:"li"},"Note: Ideally the QR code should contain all the organizations API login information so that it doesn","'","t need to be re-keyed."))),(0,n.kt)("h3",{id:"user-experience"},"User Experience"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NB:")," Only one of the solutions outlined below should be implemented"),(0,n.kt)("h4",{id:"solution-1"},"Solution 1:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Admins will have access to a list of registered numbers from the admin dashboard."),(0,n.kt)("li",{parentName:"ol"},"Admins will be able to select a number from the list and approve/deny access."),(0,n.kt)("li",{parentName:"ol"},"Members will receive an email/ in app notification once granted access.")),(0,n.kt)("h4",{id:"solution-2"},"Solution 2:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Admins will have access to a screen containing a unique QR code."),(0,n.kt)("li",{parentName:"ol"},"Admins will have the ability to regenerate the QR code (to be discussed)"),(0,n.kt)("li",{parentName:"ol"},"Member","'","s will have access to a QR code scanner upon opening the app.")),(0,n.kt)("h4",{id:"solution-3"},"Solution 3:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Admins will have access to a list of registered numbers.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Admins will be able to select a number from the list and generate a unique token/password for a member.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Admins will have access to a share button for sending the token/password to a member","'","s email/whatsapp/phone number.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Member","'","s will be required to enter the info from the previous step after registering for an organization."),(0,n.kt)("center",null," OR "),(0,n.kt)("p",{parentName:"li"},"Member","'","s will be required to enter the provided token while registering for an organization."))),(0,n.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h3",{id:"future-work"},"Future Work"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,n.kt)("p",null,"N/A"))}d.isMDXComponent=!0}}]);
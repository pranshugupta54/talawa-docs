"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[5063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},s=void 0,l={unversionedId:"talawa-api/modules/resolvers_Query_usersConnection",id:"talawa-api/modules/resolvers_Query_usersConnection",title:"resolvers_Query_usersConnection",description:"talawa-api / Exports / resolvers/Query/usersConnection",source:"@site/docs/talawa-api/modules/resolvers_Query_usersConnection.md",sourceDirName:"talawa-api/modules",slug:"/talawa-api/modules/resolvers_Query_usersConnection",permalink:"/docs/talawa-api/modules/resolvers_Query_usersConnection",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api/modules/resolvers_Query_usersConnection.md",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"usersConnection",id:"usersconnection",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/"},"talawa-api")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules"},"Exports")," / resolvers/Query/usersConnection"),(0,a.kt)("h1",{id:"module-resolversqueryusersconnection"},"Module: resolvers/Query/usersConnection"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/talawa-api/modules/resolvers_Query_usersConnection#usersconnection"},"usersConnection"))),(0,a.kt)("h2",{id:"variables-1"},"Variables"),(0,a.kt)("h3",{id:"usersconnection"},"usersConnection"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"usersConnection"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules/types_generatedGraphQLTypes#queryresolvers"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryResolvers")),"[",(0,a.kt)("inlineCode",{parentName:"p"},'"usersConnection"'),"]"),(0,a.kt)("p",null,"This query will fetch all the users in a specified order to paginate from the database."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,"An object that contains relevant data to execute the query."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Connection in graphQL means pagination,\nlearn more about Connection ",(0,a.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"here"),"."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"src/resolvers/Query/usersConnection.ts:16"))}d.isMDXComponent=!0}}]);
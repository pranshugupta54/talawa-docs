"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[7330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),v=n,y=c["".concat(i,".").concat(v)]||c[v]||d[v]||s;return r?a.createElement(y,o(o({ref:t},u),{},{components:r})):a.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=v;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const s={},o=void 0,l={unversionedId:"talawa-api/modules/resolvers_Query_tasksByEvent",id:"talawa-api/modules/resolvers_Query_tasksByEvent",title:"resolvers_Query_tasksByEvent",description:"talawa-api / Exports / resolvers/Query/tasksByEvent",source:"@site/docs/talawa-api/modules/resolvers_Query_tasksByEvent.md",sourceDirName:"talawa-api/modules",slug:"/talawa-api/modules/resolvers_Query_tasksByEvent",permalink:"/docs/talawa-api/modules/resolvers_Query_tasksByEvent",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api/modules/resolvers_Query_tasksByEvent.md",tags:[],version:"current",frontMatter:{}},i={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"tasksByEvent",id:"tasksbyevent",level:3},{value:"Defined in",id:"defined-in",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api/"},"talawa-api")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules"},"Exports")," / resolvers/Query/tasksByEvent"),(0,n.kt)("h1",{id:"module-resolversquerytasksbyevent"},"Module: resolvers/Query/tasksByEvent"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api/modules/resolvers_Query_tasksByEvent#tasksbyevent"},"tasksByEvent"))),(0,n.kt)("h2",{id:"variables-1"},"Variables"),(0,n.kt)("h3",{id:"tasksbyevent"},"tasksByEvent"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"tasksByEvent"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules/types_generatedGraphQLTypes#queryresolvers"},(0,n.kt)("inlineCode",{parentName:"a"},"QueryResolvers")),"[",(0,n.kt)("inlineCode",{parentName:"p"},'"tasksByEvent"'),"]"),(0,n.kt)("p",null,"This query will fetch the list of tasks for an Event in specified order from database."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,"An object that contains ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," of an Event and ",(0,n.kt)("inlineCode",{parentName:"p"},"orderBy"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"The query function uses ",(0,n.kt)("inlineCode",{parentName:"p"},"getSort()")," function to sort the data in specified."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,"src/resolvers/Query/tasksByEvent.ts:11"))}d.isMDXComponent=!0}}]);
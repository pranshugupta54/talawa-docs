"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"event-signup",title:"Signup and Subscription"},i=void 0,s={unversionedId:"features/events/event-signup",id:"features/events/event-signup",title:"Signup and Subscription",description:"This section is a work in progress.",source:"@site/docs/features/events/signup.md",sourceDirName:"features/events",slug:"/features/events/event-signup",permalink:"/docs/features/events/event-signup",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/features/events/signup.md",tags:[],version:"current",frontMatter:{id:"event-signup",title:"Signup and Subscription"},sidebar:"docs",previous:{title:"Create Events",permalink:"/docs/features/events/event-create-events"},next:{title:"Event Grouping",permalink:"/docs/features/events/event-grouping"}},l={},p=[{value:"Code: EVT-001",id:"code-evt-001",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,a.kt)("h2",{id:"code-evt-001"},"Code: EVT-001"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Authored by")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"Shannika Jackson")," ")," ",(0,a.kt)("em",{parentName:"p"},"Last updated on")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"March 13, 2021")," ")),(0,a.kt)("p",null,"This feature aims to ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"streamline member event subscription")," ")," by ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"simplifying how members elect to join/ subscribe to events")," "),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Currently the user cannot subscribe to or sign up as an attendee of an event :"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"All events in the organization are presented ungrouped to the user"),(0,a.kt)("li",{parentName:"ol"},"The user cannot subscribe/ sign up for an event")))),(0,a.kt)("h3",{id:"goals"},"Goals"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Provide streamlined display of events:")," This should eventually facilitate the development of other event-type specific features")),(0,a.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,a.kt)("p",null,"The following are aspects of this feature which have been considered but are outside of the scope for the current project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Invite non-app users to events :")," Prompting them to install the app and join the organization and subscribe for the event."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"View assigned tasks from the event screen/page:")," User is able to select an event and see all tasks assigned to them for that event"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Volunteer for tasks under an event :")," From the events screen/page the user is able to volunteer for the listed tasks under the event")),(0,a.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,a.kt)("p",null,"The following are the primary roles foreseen in the development of this feature"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Feature Lead")," : will review proposed solutions, acceptance and close feature .")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("h3",{id:"use-cases"},"Use Cases"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Members want to:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Subscribe to Events")," : enabling them to receive notifications, view updates and be marked as an attendee to this event."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Admins want to")," :",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"View attendee list for events")," : once a member subscribes for an event, they are listed as an attendee and can be viewed as an attendee from the admin portal."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"View the number of subscribers/ attendees for events:")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Coordinators want to")," :",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"View attendee/ subscription lists for events:")," allowing them to assign these members to tasks under the event.")))),(0,a.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,a.kt)("h3",{id:"user-experience"},"User Experience"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the events tab on the main menu a user should see all events for the organization"),(0,a.kt)("li",{parentName:"ol"},"The user should select an event and be presented with the option to subscribe/ attend organization"),(0,a.kt)("li",{parentName:"ol"},"The member is then listed as an attendee of the event")),(0,a.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,a.kt)("p",null,"NA"),(0,a.kt)("h3",{id:"future-work"},"Future Work"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Items mentioned in the Out of scope section will form the basis for future work to be done on this feature")),(0,a.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,a.kt)("p",null,"TBD"))}c.isMDXComponent=!0}}]);
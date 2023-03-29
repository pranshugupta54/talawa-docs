"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[189],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=o,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9826:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),o=(a(7294),a(3905));const i={id:"core-concepts",title:"Core Concepts"},r=void 0,l={unversionedId:"introduction/core-concepts",id:"introduction/core-concepts",title:"Core Concepts",description:"To use and contribute to Talawa effectively, you'll need to understand these important concepts.",source:"@site/docs/introduction/concepts.md",sourceDirName:"introduction",slug:"/introduction/core-concepts",permalink:"/docs/introduction/core-concepts",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/introduction/concepts.md",tags:[],version:"current",frontMatter:{id:"core-concepts",title:"Core Concepts"},sidebar:"docs",previous:{title:"About Us",permalink:"/docs/introduction/about"},next:{title:"Our Repositories",permalink:"/docs/introduction/our-repositories"}},s={},m=[{value:"Community\u200b",id:"community",level:2},{value:"Organizations",id:"organizations",level:3},{value:"People in Communities",id:"people-in-communities",level:3},{value:"Non-Administrators",id:"non-administrators",level:4},{value:"Administrators",id:"administrators",level:4},{value:"Talawa Application Users",id:"talawa-application-users",level:2},{value:"Events",id:"events",level:2},{value:"Event Terminologies",id:"event-terminologies",level:3},{value:"Event Features",id:"event-features",level:3},{value:"Event Creation",id:"event-creation",level:4},{value:"Event Checkins",id:"event-checkins",level:4},{value:"Event Group Chats",id:"event-group-chats",level:4},{value:"Event Roles",id:"event-roles",level:4},{value:"Newsfeed",id:"newsfeed",level:2},{value:"Mobile App Newsfeed",id:"mobile-app-newsfeed",level:3},{value:"Admin Panel Newsfeed",id:"admin-panel-newsfeed",level:3},{value:"Multi-Tenancy / Cloud",id:"multi-tenancy--cloud",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use and contribute to Talawa effectively, you'll need to understand these important concepts."),(0,o.kt)("h2",{id:"community"},"Community\u200b"),(0,o.kt)("p",null,"Communities are groups of people who participate either directly or indirectly with an installation of the suite of Talawa apps. Each instance of the Talawa API only manages a single community."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Example"),": A community could be a club that has members across an entire country, state or city.")),(0,o.kt)("p",null,"Communities can have multiple organizations in them."),(0,o.kt)("h3",{id:"organizations"},"Organizations"),(0,o.kt)("p",null,"Groups of people in a community that have some unique commonality."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Example"),": A national club could create a Talawa community that covers a country, then each organization could cover the club's followers in each city.")),(0,o.kt)("p",null,"Organizations act as hubs of volunteer activity."),(0,o.kt)("h3",{id:"people-in-communities"},"People in Communities"),(0,o.kt)("p",null,"There are many types of people who use Talawa either directly, or indirectly:"),(0,o.kt)("h4",{id:"non-administrators"},"Non-Administrators"),(0,o.kt)("p",null,"The main purpose of Talawa is to foster closer cooperation between communities of people working together for a common social cause. In Talawa, most would be either users or members."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Users"),": These are people who indirectly use Talawa.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"For example: People who may attend an event tracked in Talawa and have their information entered into the system as part of the attendance process."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Members"),": These are people who directly use Talawa either with the mobile app, or as an administrator with Talawa Admin.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Members may register their Talawa mobile app with an organization within a community once the appropriate approvals have been given.")))),(0,o.kt)("p",null,"The use of Talawa by users and members is managed by administrators."),(0,o.kt)("h4",{id:"administrators"},"Administrators"),(0,o.kt)("p",null,"Say for example that a chain of non-profit community centers with branches in multiple neighborhoods decides to use Talawa. They have a large membership across the region but, each member tends to use only their local community center. From time to time members move into new neighborhoods where they decide to switch their membership to their new local branch."),(0,o.kt)("p",null,"The VP of community relations would want to be the Super Admin as they would be able to add new branches as they were established. The VP would then delegate the management of community relations to each branch manager who would then become an Admin for their local membership."),(0,o.kt)("p",null,"The VP doesn\u2019t want the branch managers to manage the members who have joined other branches, just the branch they are running."),(0,o.kt)("p",null,"It is for this reason that we have two types of administrators. Admins and Super Admins."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Admin"),": These are members who use Talawa Admin to manage the people in an organization. This would also include calendars and the organization's news feed. Admins can:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Only manage a single organization and cannot access any data from other organizations. Expanding this capability is a long term goal."),(0,o.kt)("li",{parentName:"ol"},"Promote Users and Members to Admin status for their organization only"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Super Admin"),": These are members who use Talawa Admin to manage all organizations in a community. Super Admins:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Can promote Users and Members to Admin or Super Admin status."),(0,o.kt)("li",{parentName:"ol"},"Have access to all the privileges that an Admin may have over the Admin's organization.")))),(0,o.kt)("p",null,"Like other people, an administrator may or may not have joined an organization in the mobile app."),(0,o.kt)("h2",{id:"talawa-application-users"},"Talawa Application Users"),(0,o.kt)("p",null,"The Talawa applications are used by different groups of people."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Talawa"),": All people associated with an organization. There are no administrative functions incorporated in the mobile app."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Talawa-Admin"),": Only Admins and Super Admins use this web portal. No other users have access.")),(0,o.kt)("p",null,"Talawa-API supports the users of Talawa and Talawa-Admin."),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"Event management is a major Talawa component."),(0,o.kt)("h3",{id:"event-terminologies"},"Event Terminologies"),(0,o.kt)("p",null,"Here are some important terminologies used in Talawa event management:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Open Event"),": Events that are open to everyone"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Registrable Event"),": An open event that requires the additional step of event registration. These events would typically have limited capacity and therefore would require members to register beforehand."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Closed Events"),": These are events that are by invitation only.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Private events"),": Closed events that only show up in the mobile app calendars of invitees")))),(0,o.kt)("h3",{id:"event-features"},"Event Features"),(0,o.kt)("p",null,"Events have many features as you can see below."),(0,o.kt)("h4",{id:"event-creation"},"Event Creation"),(0,o.kt)("p",null,"Events can:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"be created either in the mobile app or Talawa Admin;"),(0,o.kt)("li",{parentName:"ol"},"only be edited by the event organizers and admins")),(0,o.kt)("h4",{id:"event-checkins"},"Event Checkins"),(0,o.kt)("p",null,"Checkins are a way of tracking attendance to all types of events. They have many valuable uses such as the ability to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"add users to the organization if they turn up to an event;"),(0,o.kt)("li",{parentName:"ol"},"convert users to members when they attend an event.")),(0,o.kt)("h4",{id:"event-group-chats"},"Event Group Chats"),(0,o.kt)("p",null,"Talawa includes the ability of members invited or registered to an event to automatically be added to a group chat for that event. This allows greater coordination and community spirit in the organization's groups."),(0,o.kt)("h4",{id:"event-roles"},"Event Roles"),(0,o.kt)("p",null,"Talawa includes the ability of members attending events to be assigned tasks/roles that can be tracked in their app by all attendees. This helps in event management."),(0,o.kt)("h2",{id:"newsfeed"},"Newsfeed"),(0,o.kt)("p",null,"The Talawa newsfeed helps to make the Communities a more cohesive entity."),(0,o.kt)("h3",{id:"mobile-app-newsfeed"},"Mobile App Newsfeed"),(0,o.kt)("p",null,"The newsfeed on the Talawa Mobile App is a stream of commentary from the App's users. This may include various combinations of text, video, images and links that Members may want to share."),(0,o.kt)("p",null,"Talawa Mobile App users only get news on their newsfeed for the organization that they are currently actively using."),(0,o.kt)("p",null,"Members using the app can add posts containing text, images or video to the newsfeed. They can also add hashtags to their posts. People seeing the hashtags will be able to click on them to automatically filter their feed by one or more hashtags."),(0,o.kt)("h3",{id:"admin-panel-newsfeed"},"Admin Panel Newsfeed"),(0,o.kt)("p",null,"Administrators will use Talawa Admin to administer an organization's newsfeed. At a minimum they will get a filtered version of the feed that only includes exceptional content that requires attention. This includes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pinned Posts"),": The management of pinned posts that they use to alert all members of the organization of some activity. These posts are ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-api/issues/1096"},"always visible at the top of the newsfeed"),". Pinned posts can only be created by Admins."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Reported Posts"),": Mobile App users may want Admins to take action on posts that don't match the organization's values. Admins can use the newsfeed to manage these reports."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Plugin Posts"),": The Admin panel may have plugins that need to access the newsfeed. For example these could include the insertion of advertising from local companies.")),(0,o.kt)("h2",{id:"multi-tenancy--cloud"},"Multi-Tenancy / Cloud"),(0,o.kt)("p",null,"Under the current model:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Each Talawa-API instance manages the people within a Community."),(0,o.kt)("li",{parentName:"ol"},"Communities are managed by Super Admins."),(0,o.kt)("li",{parentName:"ol"},"Organizations within a community are managed by Admins.")),(0,o.kt)("p",null,"For Talawa to be launched as a Cloud service there will need to be a way to create a portal that can manage multiple instances of Talawa-API. These community instances could be running on the same or differing servers."),(0,o.kt)("p",null,"This creates challenges for the API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How do we shard the data for the instances? For example: Do all the cloud communities use a single database or should there be some other type of split and why?"),(0,o.kt)("li",{parentName:"ul"},"What database modifications will be required to track the communities under management?"),(0,o.kt)("li",{parentName:"ul"},"How do you move data from one cloud cluster of instances managed by one portal, to another cluster managed by a different portal?")),(0,o.kt)("p",null,"It also creates challenges for the web admin portal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What level of access should the cloud admin have?"),(0,o.kt)("li",{parentName:"ul"},"What features can the cloud admin enable or disable across all communities?"),(0,o.kt)("li",{parentName:"ul"},"How do you move administration from one cloud cluster of instances managed by one portal, to another cluster managed by a different portal?")),(0,o.kt)("p",null,"Answering these questions and implementing a solution will be important for the Talawa projects."))}c.isMDXComponent=!0}}]);
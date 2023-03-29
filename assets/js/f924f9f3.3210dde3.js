"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[7384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const l={id:"talawa-lint",title:"Talawa Lint Ecosystem"},r=void 0,o={unversionedId:"developers/talawa/talawa-lint",id:"developers/talawa/talawa-lint",title:"Talawa Lint Ecosystem",description:"Talawa Lint",source:"@site/docs/developers/talawa/talawa-lint.md",sourceDirName:"developers/talawa",slug:"/developers/talawa/talawa-lint",permalink:"/docs/developers/talawa/talawa-lint",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa/talawa-lint.md",tags:[],version:"current",frontMatter:{id:"talawa-lint",title:"Talawa Lint Ecosystem"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/developers/talawa/talawa-introduction"},next:{title:"Talawa API",permalink:"/docs/category/talawa-api"}},s={},d=[{value:"Talawa Lint",id:"talawa-lint",level:2},{value:"Proper Installation",id:"proper-installation",level:3},{value:"Usage",id:"usage",level:3},{value:"In IDE",id:"in-ide",level:4},{value:"Command line",id:"command-line",level:4},{value:"Logs",id:"logs",level:4},{value:"Talawa Lint Rules",id:"talawa-lint-rules",level:2},{value:"talawa_api_doc",id:"talawa_api_doc",level:3},{value:"talawa_good_doc_comments",id:"talawa_good_doc_comments",level:3},{value:"For non function/method/getter/setter (classes, enums, variables etc)",id:"for-non-functionmethodgettersetter-classes-enums-variables-etc",level:4},{value:"Single line",id:"single-line",level:5},{value:"Multi line",id:"multi-line",level:5},{value:"For function/method/getter/setter",id:"for-functionmethodgettersetter",level:4},{value:"No parameter and void return",id:"no-parameter-and-void-return",level:5},{value:"Has parameter(s) and void return",id:"has-parameters-and-void-return",level:5},{value:"No parameter and non-void return",id:"no-parameter-and-non-void-return",level:5},{value:"Has parameter(s) and non-void return",id:"has-parameters-and-non-void-return",level:5}],p={toc:d},u="wrapper";function m(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"talawa-lint"},"Talawa Lint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"talawa_lint")," is Talawa's custom lint rule set that we enforced to ensure\nproper documentation for our codebase. It is a mini package that lives as a\nsub-directory in ",(0,i.kt)("inlineCode",{parentName:"p"},"talawa")," package."),(0,i.kt)("h3",{id:"proper-installation"},"Proper Installation"),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"talawa_lint")," is a package in itself, it has its own dependencies which\nshould be installed. To do so, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"talawa")," directory, then:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd talawa_lint\nflutter pub get\ncd ..\nflutter pub get\n")),(0,i.kt)("p",null,"This will install all the required dependencies properly.\nSometimes (highly unlikely), you may get ",(0,i.kt)("inlineCode",{parentName:"p"},"Conflicting plugin version")," error. In that\ncase you will need to clean your dev environment of ",(0,i.kt)("inlineCode",{parentName:"p"},"talawa")," and reinstall packages.\nTo do so, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"talawa")," directory, then:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"flutter clean\ncd talawa_lint\nflutter clean\nflutter pub get\ncd ..\nflutter pub get\n")),(0,i.kt)("p",null,"This should resolve the conflicting issues."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"If the installation was successful, you will be able to get lint warnings/errors right\nin your IDE, as well as analyze your files from command line."),(0,i.kt)("h4",{id:"in-ide"},"In IDE"),(0,i.kt)("p",null,"With proper installation, you will get lint warnings if either your fields don't have any\ndocumentation, or the documentation is not in the right format. Something like this"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lint warning example",src:n(5689).Z,width:"1038",height:"276"})),(0,i.kt)("h4",{id:"command-line"},"Command line"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter pub run custom_lint")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"talawa")," root directory to analyze all of the files\nfor custom lint rules."),(0,i.kt)("h4",{id:"logs"},"Logs"),(0,i.kt)("p",null,"Logs are generated for our custom lint analysis in the file named ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_lint.log"),". This file\nexists under both ",(0,i.kt)("inlineCode",{parentName:"p"},"talawa")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"talawa_lint")," directories. You can find any error related to\n",(0,i.kt)("inlineCode",{parentName:"p"},"talawa_lint")," integration in these logs. This comes handy while troubleshooting."),(0,i.kt)("h2",{id:"talawa-lint-rules"},"Talawa Lint Rules"),(0,i.kt)("p",null,"For now, we enforce two custom lint rules to our codebase, which should be strictly followed\nby each file and their fields (classes, methods, attributes, getters, setters, top level variables,\nfunctions, enums.......).",(0,i.kt)("br",null),"\nThe rules being."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"talawa_api_doc")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"talawa_good_doc_comments"))),(0,i.kt)("h3",{id:"talawa_api_doc"},"talawa_api_doc"),(0,i.kt)("p",null,"This lint rule checks for presence of documentation comment for any field. You will get a warning\nas shown here"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"No Lint warning example",src:n(8268).Z,width:"675",height:"208"})),(0,i.kt)("p",null,"Note that a documentation comment is different from a normal comment as in normal comment starts\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"//")," whereas doc comment starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"///"),"."),(0,i.kt)("h3",{id:"talawa_good_doc_comments"},"talawa_good_doc_comments"),(0,i.kt)("p",null,"This is where the fun lies. This lint rule checks if the documentation provided for a field is in\nthe format that we expect. The format being:"),(0,i.kt)("h4",{id:"for-non-functionmethodgettersetter-classes-enums-variables-etc"},"For non function/method/getter/setter (classes, enums, variables etc)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First line of documentation must be a complete line ending with end punctuation (",(0,i.kt)("inlineCode",{parentName:"li"},"."),", ",(0,i.kt)("inlineCode",{parentName:"li"},"!"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"?"),")"),(0,i.kt)("li",{parentName:"ol"},"If you think that there should be more to the documentation, leave the second line empty and write\nfurther documentation in paragraph fashion from the next line.")),(0,i.kt)("p",null,"Examples of valid documentation include:"),(0,i.kt)("h5",{id:"single-line"},"Single line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/// This is my class and it does stuff.\nclass MyClass {}\n")),(0,i.kt)("h5",{id:"multi-line"},"Multi line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/// This is my class and it does stuff.\n///\n/// The stuff includes playing pong with\n/// my chip-8 emulator.\nclass MyClass {}\n")),(0,i.kt)("h4",{id:"for-functionmethodgettersetter"},"For function/method/getter/setter"),(0,i.kt)("p",null,"Same rules as for non functions/methods...... as described above, in conjunction with two other\nsections for ",(0,i.kt)("inlineCode",{parentName:"p"},"params:")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"returns:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Follow same rules as described in the above section."),(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"/// params:")," block. This marks the beginning of ",(0,i.kt)("inlineCode",{parentName:"li"},"params")," section where you describe all the parameters\nthat this function takes from the next line. The format being",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/// * `param_name`:")," followed by its description starting in the same line."),(0,i.kt)("li",{parentName:"ul"},"The description can be multi line and requires no extra formatting."),(0,i.kt)("li",{parentName:"ul"},"If the function takes no parameters, ",(0,i.kt)("inlineCode",{parentName:"li"},"/// params:")," should be followed by ",(0,i.kt)("inlineCode",{parentName:"li"},"/// None")," in the next line."))),(0,i.kt)("li",{parentName:"ol"},"After documenting all of the parameters, add ",(0,i.kt)("inlineCode",{parentName:"li"},"/// returns:")," block."),(0,i.kt)("li",{parentName:"ol"},"Followed by returns:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"/// * `return_type`:")," followed by its description starting in the same line."),(0,i.kt)("li",{parentName:"ul"},"The description can be multi line and requires no extra formatting."),(0,i.kt)("li",{parentName:"ul"},"If the function returns void, ",(0,i.kt)("inlineCode",{parentName:"li"},"/// returns:")," should be followed by ",(0,i.kt)("inlineCode",{parentName:"li"},"/// None")," in the next line.\nNote that ",(0,i.kt)("inlineCode",{parentName:"li"},"Future<void>")," is different from void. ",(0,i.kt)("inlineCode",{parentName:"li"},"/// None")," is strictly used only for ",(0,i.kt)("inlineCode",{parentName:"li"},"void")," type.")))),(0,i.kt)("p",null,"Examples of valid documentation include:"),(0,i.kt)("h5",{id:"no-parameter-and-void-return"},"No parameter and void return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/// My fun.\n///\n/// Other description.\n///\n/// params:\n/// None\n///\n/// returns:\n/// None\nvoid fun () {}\n")),(0,i.kt)("h5",{id:"has-parameters-and-void-return"},"Has parameter(s) and void return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/// My fun.\n///\n/// Other description.\n///\n/// params:\n/// * `name`: description\n/// * `age`: description\n///\n/// returns:\n/// None\nvoid fun (String? name, int age) {}\n")),(0,i.kt)("h5",{id:"no-parameter-and-non-void-return"},"No parameter and non-void return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/// My fun.\n///\n/// Other description.\n///\n/// params:\n/// None\n///\n/// returns:\n/// * `int`: Answer of life.\nint fun () {\n    return 42;\n}\n")),(0,i.kt)("h5",{id:"has-parameters-and-non-void-return"},"Has parameter(s) and non-void return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/// My fun.\n///\n/// Other description.\n///\n/// params:\n/// * `name`: description\n/// * `age`: description\n///\n/// returns:\n/// * `int`: Answer of life.\nint fun (String? name, int age) {\n    return 42;\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"params:")," block expects the ",(0,i.kt)("strong",{parentName:"li"},"name")," of the parameter and ",(0,i.kt)("strong",{parentName:"li"},"not its type"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"returns:")," block expects the ",(0,i.kt)("strong",{parentName:"li"},"type")," of the parameter and ",(0,i.kt)("strong",{parentName:"li"},"not its name"),"."))))}m.isMDXComponent=!0},5689:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lint_warning_ex-05ac61e7a3b0086ecf3cbbf18dd1538e.png"},8268:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/no_lint_ex-292c46f76e4689999713772998e83702.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{116:function(t,e,n){"use strict";var r=u("start"),i=u("end");function o(t){return{start:r(t),end:i(t)}}function u(t){return e.displayName=t,e;function e(e){var n=e&&e.position&&e.position[t]||{};return{line:n.line||null,column:n.column||null,offset:isNaN(n.offset)?null:n.offset}}}t.exports=o,o.start=r,o.end=i},117:function(t,e,n){"use strict";t.exports=function(t,e,n){var r=e&&e.type,i=o.call(t.handlers,r)?t.handlers[r]:t.unknownHandler;if(!r)throw new Error("Expected node, got `"+e+"`");return("function"==typeof i?i:u)(t,e,n)};var r=n(36),i=n(34),o={}.hasOwnProperty;function u(t,e){return function(t){var e=t.data||{};if(o.call(e,"hName")||o.call(e,"hProperties")||o.call(e,"hChildren"))return!1;return"value"in t}(e)?t.augment(e,r("text",e.value)):t(e,"div",i(t,e))}},118:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"hr")}},119:function(t,e,n){"use strict";t.exports=function(t,e){var n,o,u={},s=e.ordered?"ol":"ul",a=-1;"number"==typeof e.start&&1!==e.start&&(u.start=e.start);n=i(t,e),o=n.length;for(;++a<o;)if(n[a].properties.className&&-1!==n[a].properties.className.indexOf("task-list-item")){u.className=["contains-task-list"];break}return t(e,s,u,r(n,!0))};var r=n(48),i=n(34)},120:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.footnoteOrder,i=String(e.identifier);-1===n.indexOf(i)&&n.push(i);return t(e.position,"sup",{id:"fnref-"+i},[t(e,"a",{href:"#fn-"+i,className:["footnote-ref"]},[r("text",e.label||i)])])};var r=n(36)},121:function(t,e,n){"use strict";t.exports=function(t,e){var n,o,u,s=e.referenceType,a="]";"collapsed"===s?a+="[]":"full"===s&&(a+="["+(e.label||e.identifier)+"]");if("imageReference"===e.type)return r("text","!["+e.alt+a);n=i(t,e),(o=n[0])&&"text"===o.type?o.value="["+o.value:n.unshift(r("text","["));(u=n[n.length-1])&&"text"===u.type?u.value+=a:n.push(r("text",a));return n};var r=n(36),i=n(34)},277:function(t,e,n){"use strict";var r=n(278);t.exports=function(t,e){t&&!t.process&&(e=t,t=null);return t?function(t,e){return function(n,i,o){t.run(r(n,e),i,(function(t){o(t)}))}}(t,e):function(t){return function(e){return r(e,t)}}(e)}},278:function(t,e,n){"use strict";t.exports=n(279)},279:function(t,e,n){"use strict";t.exports=function(t,e){var n=function(t,e){var n=e||{},r=n.allowDangerousHTML,a={};return p.dangerous=r,p.definition=s(t,n),p.footnoteById=a,p.footnoteOrder=[],p.augment=c,p.handlers=Object.assign({},l,n.handlers),p.unknownHandler=n.unknownHandler,i(t,"footnoteDefinition",(function(t){var e=String(t.identifier).toUpperCase();f.call(a,e)||(a[e]=t)})),p;function c(t,e){var n,r;return t&&"data"in t&&(n=t.data,"element"===e.type&&n.hName&&(e.tagName=n.hName),"element"===e.type&&n.hProperties&&(e.properties=Object.assign({},e.properties,n.hProperties)),e.children&&n.hChildren&&(e.children=n.hChildren)),r=t&&t.position?t:{position:t},u(r)||(e.position={start:o.start(r),end:o.end(r)}),e}function p(t,e,n,r){return null==r&&"object"==typeof n&&"length"in n&&(r=n,n={}),c(t,{type:"element",tagName:e,properties:n||{},children:r||[]})}}(t,e),p=a(n,t),d=c(n);d&&(p.children=p.children.concat(r("text","\n"),d));return p};var r=n(36),i=n(53),o=n(116),u=n(280),s=n(281),a=n(117),c=n(282),l=n(283),f={}.hasOwnProperty},280:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t?t:{}}t.exports=function(t){var e=r(r(t).position),n=r(e.start),i=r(e.end);return!(n.line&&n.column&&i.line&&i.column)}},281:function(t,e,n){"use strict";var r=n(53);t.exports=function(t,e){return function(t){return function(e){var n=e&&o(e);return n&&i.call(t,n)?t[n]:null}}(function(t,e){var n={};if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return r(t,"definition",e&&e.commonmark?function(t){var e=o(t.identifier);i.call(n,e)||(n[e]=t)}:function(t){n[o(t.identifier)]=t}),n}(t,e))};var i={}.hasOwnProperty;function o(t){return t.toUpperCase()}},282:function(t,e,n){"use strict";t.exports=function(t){var e,n,u,s,a=t.footnoteById,c=t.footnoteOrder,l=c.length,f=-1,p=[];for(;++f<l;)(e=a[c[f].toUpperCase()])&&(u=e.children.concat(),s=u[u.length-1],n={type:"link",url:"#fnref-"+e.identifier,data:{hProperties:{className:["footnote-backref"]}},children:[{type:"text",value:"↩"}]},s&&"paragraph"===s.type||(s={type:"paragraph",children:[]},u.push(s)),s.children.push(n),p.push({type:"listItem",data:{hProperties:{id:"fn-"+e.identifier}},children:u,position:e.position}));if(0===p.length)return null;return t(null,"div",{className:["footnotes"]},o([r(t),i(t,{type:"list",ordered:!0,children:p})],!0))};var r=n(118),i=n(119),o=n(48)},283:function(t,e,n){"use strict";function r(){return null}t.exports={blockquote:n(284),break:n(285),code:n(286),delete:n(288),emphasis:n(289),footnoteReference:n(120),footnote:n(290),heading:n(291),html:n(292),imageReference:n(293),image:n(294),inlineCode:n(295),linkReference:n(296),link:n(297),listItem:n(298),list:n(119),paragraph:n(299),root:n(300),strong:n(301),table:n(302),text:n(303),thematicBreak:n(118),toml:r,yaml:r,definition:r,footnoteDefinition:r}},284:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"blockquote",r(i(t,e),!0))};var r=n(48),i=n(34)},285:function(t,e,n){"use strict";t.exports=function(t,e){return[t(e,"br"),r("text","\n")]};var r=n(36)},286:function(t,e,n){"use strict";t.exports=function(t,e){var n=e.value?r(e.value+"\n"):"",o=e.lang&&e.lang.match(/^[^ \t]+(?=[ \t]|$)/),u={};o&&(u.className=["language-"+o]);return t(e.position,"pre",[t(e,"code",u,[i("text",n)])])};var r=n(287),i=n(36)},287:function(t,e,n){"use strict";t.exports=function(t,e){var n,i,o="string"==typeof t,u=o&&t.length,s=0,a=-1,c=-1,l=e||4,f=[];if(!o)throw new Error("detab expected string");for(;++a<u;)9===(n=t.charCodeAt(a))?(c+=i=l-(c+1)%l,f.push(t.slice(s,a)+r(" ",i)),s=a+1):10===n||13===n?c=-1:c++;return f.push(t.slice(s)),f.join("")};var r=n(35)},288:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"del",r(t,e))};var r=n(34)},289:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"em",r(t,e))};var r=n(34)},290:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.footnoteById,i=t.footnoteOrder,o=1;for(;o in n;)o++;return o=String(o),i.push(o),n[o]={type:"footnoteDefinition",identifier:o,children:[{type:"paragraph",children:e.children}],position:e.position},r(t,{type:"footnoteReference",identifier:o,position:e.position})};var r=n(120)},291:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"h"+e.depth,r(t,e))};var r=n(34)},292:function(t,e,n){"use strict";t.exports=function(t,e){return t.dangerous?t.augment(e,r("raw",e.value)):null};var r=n(36)},293:function(t,e,n){"use strict";t.exports=function(t,e){var n,o=t.definition(e.identifier);if(!o)return i(t,e);n={src:r(o.url||""),alt:e.alt},null!==o.title&&void 0!==o.title&&(n.title=o.title);return t(e,"img",n)};var r=n(56),i=n(121)},294:function(t,e,n){"use strict";var r=n(56);t.exports=function(t,e){var n={src:r(e.url),alt:e.alt};null!==e.title&&void 0!==e.title&&(n.title=e.title);return t(e,"img",n)}},295:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"code",[i("text",r(e.value))])};var r=n(61),i=n(36)},296:function(t,e,n){"use strict";t.exports=function(t,e){var n,u=t.definition(e.identifier);if(!u)return i(t,e);n={href:r(u.url||"")},null!==u.title&&void 0!==u.title&&(n.title=u.title);return t(e,"a",n,o(t,e))};var r=n(56),i=n(121),o=n(34)},297:function(t,e,n){"use strict";var r=n(56),i=n(34);t.exports=function(t,e){var n={href:r(e.url)};null!==e.title&&void 0!==e.title&&(n.title=e.title);return t(e,"a",n,i(t,e))}},298:function(t,e,n){"use strict";t.exports=function(t,e,n){var s,a,c,l,f,p=e.children[0],d=o(t,e),h=n?function(t){var e=t.spread,n=t.children,r=n.length,i=-1;for(;!e&&++i<r;)e=u(n[i]);return e}(n):u(e),v={};if(h)s=d;else for(s=[],l=d.length,c=-1;++c<l;)"p"===(f=d[c]).tagName?s=s.concat(f.children):s.push(f);"boolean"==typeof e.checked&&(!h||p&&"paragraph"===p.type||s.unshift(t(null,"p",[])),0!==(a=h?s[0].children:s).length&&a.unshift(r("text"," ")),a.unshift(t(null,"input",{type:"checkbox",checked:e.checked,disabled:!0})),v.className=["task-list-item"]);h&&0!==s.length&&(s=i(s,!0));return t(e,"li",v,s)};var r=n(36),i=n(48),o=n(34);function u(t){var e=t.spread;return null==e?t.children.length>1:e}},299:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"p",r(t,e))};var r=n(34)},300:function(t,e,n){"use strict";t.exports=function(t,e){return t.augment(e,r("root",i(o(t,e))))};var r=n(36),i=n(48),o=n(34)},301:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"strong",r(t,e))};var r=n(34)},302:function(t,e,n){"use strict";t.exports=function(t,e){var n,u,s,a,c,l=e.children,f=l.length,p=e.align,d=p.length,h=[];for(;f--;){for(u=l[f].children,a=0===f?"th":"td",n=d,s=[];n--;)c=u[n],s[n]=t(c,a,{align:p[n]},c?o(t,c):[]);h[f]=t(l[f],"tr",i(s,!0))}return t(e,"table",i([t(h[0].position,"thead",i([h[0]],!0)),t({start:r.start(h[1]),end:r.end(h[h.length-1])},"tbody",i(h.slice(1),!0))],!0))};var r=n(116),i=n(48),o=n(34)},303:function(t,e,n){"use strict";t.exports=function(t,e){return t.augment(e,r("text",i(e.value)))};var r=n(36),i=n(304)},304:function(t,e,n){"use strict";t.exports=function(t){return String(t).replace(r,"\n")};var r=/[ \t]*\n+[ \t]*/g},34:function(t,e,n){"use strict";t.exports=function(t,e){var n,i,o=e.children||[],u=o.length,s=[],a=-1;for(;++a<u;)(n=r(t,o[a],e))&&(a&&"break"===o[a-1].type&&(n.value&&(n.value=n.value.replace(/^\s+/,"")),(i=n.children&&n.children[0])&&i.value&&(i.value=i.value.replace(/^\s+/,""))),s=s.concat(n));return s};var r=n(117)},36:function(t,e,n){"use strict";t.exports=function(t,e,n){var r;null!=n||"object"==typeof e&&!Array.isArray(e)||(n=e,e={});r=Object.assign({type:String(t)},e),Array.isArray(n)?r.children=n:null!=n&&(r.value=String(n));return r}},48:function(t,e,n){"use strict";t.exports=function(t,e){var n=[],i=-1,o=t.length;e&&n.push(r("text","\n"));for(;++i<o;)i&&n.push(r("text","\n")),n.push(t[i]);e&&0!==t.length&&n.push(r("text","\n"));return n};var r=n(36)},56:function(t,e,n){"use strict";var r={};function i(t,e,n){var o,u,s,a,c,l="";for("string"!=typeof e&&(n=e,e=i.defaultChars),void 0===n&&(n=!0),c=function(t){var e,n,i=r[t];if(i)return i;for(i=r[t]=[],e=0;e<128;e++)n=String.fromCharCode(e),/^[0-9a-z]$/i.test(n)?i.push(n):i.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<t.length;e++)i[t.charCodeAt(e)]=t[e];return i}(e),o=0,u=t.length;o<u;o++)if(s=t.charCodeAt(o),n&&37===s&&o+2<u&&/^[0-9a-f]{2}$/i.test(t.slice(o+1,o+3)))l+=t.slice(o,o+3),o+=2;else if(s<128)l+=c[s];else if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&o+1<u&&(a=t.charCodeAt(o+1))>=56320&&a<=57343){l+=encodeURIComponent(t[o]+t[o+1]),o++;continue}l+="%EF%BF%BD"}else l+=encodeURIComponent(t[o]);return l}i.defaultChars=";/?:@&=+$,-_.!~*'()#",i.componentChars="-_.!~*'()",t.exports=i}}]);
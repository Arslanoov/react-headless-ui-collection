import*as e from"react";import n,{useState as t,useEffect as c,createContext as a,useContext as o}from"react";var i="".concat("ruc","-carousel"),l=function(e){for(var a=e.width,o=void 0===a?500:a,l=e.height,r=void 0===l?150:l,d=e.autoplay,u=void 0!==d&&d,s=e.autoplayTimeout,m=void 0===s?3e3:s,v=e.onChange,_=void 0===v?function(){}:v,f=e.children,h=t(0),p=h[0],E=h[1],N=(null==f?void 0:f.length)||1,b=[],g=function(e){b.push(n.createElement("div",{className:"".concat(i,"__pagination-item ").concat(p===e&&i+"__pagination-item_current"),onClick:function(){return function(e){_(e),E(e)}(e)},key:e}))},y=0;y<N;y++)g(y);return c((function(){if(u){var e=setInterval((function(){return E((function(e){return(e+1)%N}))}),m);return function(){return clearInterval(e)}}}),[u,m,N]),n.createElement("div",{className:"".concat(i,"__container"),style:{width:o,height:r}},n.createElement("div",{className:"".concat(i,"__items")},f.map((function(e,t){return n.createElement("div",{key:t,style:{left:"".concat((t-p)*o,"px")}},e)}))),n.createElement("div",{className:"".concat(i,"__pagination")},b))},r=a((function(){})),d="".concat("ruc","-collapse"),u=function(e){var t=e.children,c=e.defaultActiveIndex,a=void 0===c?[]:c,o=e.onChange,i=void 0===o?function(){}:o;return n.createElement("div",{className:"".concat(d,"__container")},n.createElement(r.Provider,{value:i},n.Children.map(t,(function(e,t){return n.cloneElement(e,{isDefaultActive:a.includes(t),index:t})}))))};u.Panel=function(e){var c=e.index,a=void 0===c?-1:c,i=e.children,l=e.header,u=void 0===l?"":l,s=e.disabled,m=void 0!==s&&s,v=e.isDefaultActive,_=void 0!==v&&v,f=e.icon,h=void 0===f?"->":f,p=t(_),E=p[0],N=p[1],b=o(r);return n.createElement("div",{className:"".concat(d,"__panel")},n.createElement("h3",{className:"\n          ".concat(d,"__panel-header\n          ").concat(m?d+"__panel-header_disabled":"","\n        "),onClick:function(){m||(b(a,!E),N((function(e){return!e})))}},n.createElement("div",{className:"".concat(d,"__panel-icon")},h),u),n.createElement("div",{className:"\n          ".concat(d,"__panel-content\n          ").concat(E?d+"__panel-content_active":"","\n        ")},i))};var s="".concat("ruc","-table"),m=function(e){var t=e.columns,c=void 0===t?[]:t,a=e.data,o=void 0===a?[]:a,i=e.className,l=void 0===i?"":i,r=c.map((function(e){return n.createElement("th",{className:"".concat(s,"__columns-item ").concat(s,"__column"),key:e.key},e.title)}));return n.createElement("table",{className:"".concat(s," ").concat(l)},n.createElement("thead",null,n.createElement("tr",{className:"".concat(s,"__columns")},r)),n.createElement("tbody",null,o.map((function(e){return n.createElement("tr",{className:"".concat(s,"__row"),key:e.key},c.map((function(t){return n.createElement("td",{className:"".concat(s,"__row-item ").concat(s,"__item"),key:t.key},e[t.index])})))}))))},v="".concat("ruc","-modal"),_=function(e){var t=e.visible,a=void 0!==t&&t,o=e.className,i=void 0===o?"":o,l=e.children;return c((function(){var e,n;a?null===(e=null===document||void 0===document?void 0:document.body)||void 0===e||e.classList.add("".concat("ruc","-scroll")):null===(n=null===document||void 0===document?void 0:document.body)||void 0===n||n.classList.remove("".concat("ruc","-scroll"))}),[a]),n.createElement("div",{className:"".concat(v," ").concat(a?v+"_visible":""," ").concat(i),role:"dialog","aria-modal":"true"},l)},f="".concat("ruc","-cb"),h=function(e){var t=e.name,c=e.label,a=void 0===c?"":c,o=e.className,i=void 0===o?"":o,l=e.checked,r=void 0!==l&&l,d=e.disabled,u=void 0!==d&&d,s=e.onChange,m=void 0===s?function(){}:s;return n.createElement("div",{className:f},n.createElement("span",{className:"".concat(f,"__label")},a),n.createElement("label",{className:"\n          ".concat(f,"__container\n          ").concat(r?f+"__container_checked":"","\n          ").concat(u?f+"__container_disabled":"","\n          ").concat(i,"\n        "),htmlFor:t},n.createElement("input",{type:"checkbox",id:t,checked:r,disabled:u,className:"".concat(f,"__checkbox"),onChange:function(e){return!u&&m(e.target.checked)}})))},p="".concat("ruc","-input"),E=function(e){var t=e.type,c=e.name,a=e.label,o=void 0===a?null:a,i=e.value,l=void 0===i?"":i,r=e.onChange,d=void 0===r?function(){}:r,u=e.onError,s=void 0===u?function(){}:u,m=e.readonly,v=void 0!==m&&m,_=e.rules,f=void 0===_?[]:_;return n.createElement("div",{className:"".concat(p,"__container")},o&&n.createElement("label",{className:"".concat(p,"__label"),htmlFor:c},o),n.createElement("input",{id:c,className:"".concat(p,"__input"),type:t,value:l,onChange:function(e){return function(e){var n=[];f.forEach((function(t){var a=t(e,c);a&&n.push(a)})),n.length>0?s(n):d(e)}(e.target.value)},disabled:v}))},N=a({onChange:function(){},name:"",value:"",disabled:!1}),b="".concat("ruc","-radio"),g=function(e){var t=e.name,c=e.value,a=e.onChange,o=e.children,i=e.disabled,l=void 0!==i&&i;return n.createElement("div",{className:"".concat(b)},n.createElement(N.Provider,{value:{onChange:a,name:t,value:c,disabled:l}},o))};g.Item=function(e){var t=e.value,c=e.children,a=e.disabled,i=void 0!==a&&a,l=o(N),r=l.onChange,d=l.name,u=l.value,s=l.disabled,m=function(){return!i&&!s&&r(t)};return n.createElement("div",{className:"".concat(b,"__item-container")},n.createElement("label",{className:"".concat(b,"__item ").concat(t===u?b+"__item_checked":"")},n.createElement("input",{className:"".concat(b,"__item-radio"),type:"radio",name:d,value:t,checked:t===u,onChange:m})),n.createElement("span",{onClick:m,className:"".concat(b,"__item-label")},c))};var y="".concat("ruc","-rate"),k=function(){return n.createElement("div",null,"⋆")},C=function(e){for(var c=e.defaultValue,a=void 0===c?5:c,o=e.onChange,i=void 0===o?function(){}:o,l=e.readOnly,r=void 0!==l&&l,d=e.customIcon,u=void 0===d?function(){return n.createElement(k,null)}:d,s=e.className,m=void 0===s?"":s,v=t(a),_=v[0],f=v[1],h=[],p=function(e){h.push(n.createElement("div",{onClick:function(){return!r&&function(e){f(e),i(e)}(e)},className:"".concat(y,"__item ").concat(e>_?y+"__item_disabled":""),key:e},u(e,e<=_)))},E=0;E<5;E++)p(E);return n.createElement("div",{className:"".concat(y,"__items ").concat(r?y+"__items_disabled":""," ").concat(m)},h)},w=a({onSelect:function(){},width:150,height:35}),x="".concat("ruc","-select"),I=function(e){var c=e.width,a=void 0===c?150:c,o=e.height,i=void 0===o?35:o,l=e.onChange,r=void 0===l?function(){}:l,d=e.disabled,u=void 0!==d&&d,s=e.placeholder,m=void 0===s?null:s,v=e.defaultValue,_=void 0===v?null:v,f=e.className,h=void 0===f?"":f,p=e.children,E=t(_),N=E[0],b=E[1],g=t(!1),y=g[0],k=g[1],C=function(){return k((function(e){return!e}))};return n.createElement("div",{className:"".concat(x,"__container")},n.createElement("div",{onClick:function(){return!u&&C()},className:"\n          ".concat(x,"__preview\n          ").concat(u?x+"__preview_disabled":"","\n          ").concat(h,"\n        ")},N||m),n.createElement(w.Provider,{value:{onSelect:function(e){!u&&e&&(b(e),r(e),C())},width:a,height:i}},n.createElement("div",{className:"".concat(x,"__items ").concat(y?"":x+"__items_hidden")},n.Children.map(p,(function(e,t){return n.cloneElement(e,{index:t})})))))};I.Option=function(e){var t=e.children,c=e.value,a=void 0===c?null:c,i=e.index,l=void 0===i?0:i,r=e.className,d=void 0===r?"":r,u=e.disabled,s=void 0!==u&&u,m=o(w),v=m.onSelect,_=m.width,f=m.height;return n.createElement("div",{className:"\n        ".concat(x,"__item\n        ").concat(s&&x+"__item_disabled","\n        ").concat(d,"\n      "),style:{width:_,height:f,top:l*f},onClick:function(){return!s&&v(a)}},t)};var z="".concat("ruc","-upload"),S=function(e){var t=e.label,c=void 0===t?"Upload":t,a=e.disabled,o=void 0!==a&&a,i=e.onUpload,l=void 0===i?function(){}:i,r=e.onError,d=void 0===r?function(){}:r,u=e.maxSize,s=void 0===u?null:u,m=e.formats,v=void 0===m?null:m,_=e.multiple,f=void 0!==_&&_;return n.createElement("label",{className:z},n.createElement("input",{onChange:function(e){return!o&&function(e){var n={maxSize:!1,format:!1,required:!1};if(e){if(Array.from(e).forEach((function(e){null!==s&&e.size/1024>s&&(n.maxSize=!0),null===v||v.includes(e.type)||(n.format=!0)})),!Object.values(n).includes(!0))return void l(f?e:e[0])}else n.required=!0;d(n)}(e.target.files)},className:"".concat(z,"__input"),multiple:f,disabled:o,"data-testid":"input",type:"file"}),c)},T="".concat("ruc","-grid"),j=Object.freeze({__proto__:null,Row:function(e){var t=e.className,c=void 0===t?"":t,a=e.justify,o=void 0===a?"flex-start":a,i=e.align,l=void 0===i?"flex-start":i,r=e.children;return n.createElement("div",{className:"".concat(T,"__row ").concat(c),style:{justifyContent:o,alignItems:l}},r)},Col:function(e){var t=e.span,c=void 0===t?12:t,a=e.children,o=Math.max(Math.min(c,12),0);return n.createElement("div",{className:"".concat(T,"__col ").concat(T,"__col-").concat(o)},a)}}),A="".concat("ruc","-bc"),L=function(n){var t=n.className,c=void 0===t?"":t,a=n.separator,o=n.children,i=o.map((function(n,t){return e.createElement(e.Fragment,{key:n.key},n,t!==o.length-1&&("string"==typeof a?e.createElement("div",{className:"".concat(A,"__separator")},a):a))}));return e.createElement("div",{className:"".concat(A,"__items ").concat(c)},i)};L.Item=function(n){var t=n.className,c=void 0===t?"":t,a=n.children;return e.createElement("div",{className:"".concat(A,"__item ").concat(c)},a)};function O(){var e=t(!1),n=e[0],a=e[1];return c((function(){var e,n,t,c=(e=function(){a(document.body.scrollTop>20||document.documentElement.scrollTop>20)},n=200,t=null,function(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];null!==t&&(clearTimeout(t),t=null),t=setTimeout((function(){return e.apply(void 0,c)}),n)});return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[a]),[function(){return null===window||void 0===window?void 0:window.scrollTo({top:0,behavior:"smooth"})},n]}var P="".concat("ruc","-backtop"),F=function(e){var t=e.children,c=void 0===t?n.createElement("div",null,"top"):t,a=O(),o=a[0],i=a[1];return n.createElement("div",{onClick:o,className:P,style:{opacity:i?"1":"0",zIndex:i?"100":"-10"}},c)};export{F as BackTop,L as Breadcrumb,l as Carousel,h as Checkbox,u as Collapse,j as Grid,E as Input,_ as Modal,g as Radio,C as Rating,I as Select,m as Table,S as Upload};
//# sourceMappingURL=index.es.js.map

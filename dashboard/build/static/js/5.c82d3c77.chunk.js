(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{738:function(e,t){},855:function(e,t){},856:function(e,t){},857:function(e,t){},858:function(e,t){},859:function(e,t){},861:function(e,t,n){},875:function(e,t,n){"use strict";n.r(t);var c=n(174),o=n(1),i=n(712),a=n(680),r=n.n(a),s=n(10);function u(e){var t=Object(o.useState)(null),n=Object(c.a)(t,2),a=n[0],u=n[1],f=Object(o.useState)(1),j=Object(c.a)(f,2),h=j[0],d=j[1];function b(e){d((function(t){return t+e}))}var l=e.pdf;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.a,{file:l,options:{workerSrc:"/pdf.worker.js"},loading:Object(s.jsx)(r.a,{loading:!0,size:35}),onLoadSuccess:function(e){var t=e.numPages;u(t),d(1)},children:Object(s.jsx)(i.b,{pageNumber:h})}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Page ",h||(a?1:"--")," of ",a||"--"]}),Object(s.jsx)("button",{type:"button",disabled:h<=1,onClick:function(){b(-1)},children:"Pr\xe9c\xe9dent"}),Object(s.jsx)("button",{type:"button",disabled:h>=a,onClick:function(){b(1)},children:"Suivant"})]})]})}i.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(i.c.version,"/pdf.worker.js");n(861),t.default=function(e){var t=e.match,n=Object(o.useState)(!0),i=Object(c.a)(n,2),a=i[0],f=i[1],j=Object(o.useState)({}),h=Object(c.a)(j,2),d=h[0],b=h[1];Object(o.useEffect)((function(){m(!0),fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/file/info?id=").concat(t.params.id)).then((function(e){return e.json()})).then((function(e){return fetch("".concat("http://admin.geotechmap.ueh.edu.ht","/api/file/getfile"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({nomFichier:e.nom,hashNomFichier:e.hashNomFichier,hashBase64:e.hashPdf})}).then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){console.error("Error:",e),m(!1),f(!1)})),e})).then((function(){return m(!1)})).catch((function(e){console.log(e),m(!1)}))}),[]);var l=Object(o.useState)(!1),p=Object(c.a)(l,2),O=p[0],m=p[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(r.a,{loading:O,size:50}),Object(s.jsx)(u,{pdf:"data:application/pdf;base64,".concat(d.base64File)}),!1===a?Object(s.jsx)("h6",{children:"Document non disponible pour le moment"}):""]})}}}]);
//# sourceMappingURL=5.c82d3c77.chunk.js.map
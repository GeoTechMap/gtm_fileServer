(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{683:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var s=c(41),n=c(174),a=c(175),r=(c(1),c(68)),i=c(682),o=c(10),l=function(e){var t=e.label,c=e.type,l=e.options,j=Object(a.a)(e,["label","type","options"]),d=Object(i.d)(j),u=Object(n.a)(d,2),b=u[0],h=u[1];return Object(o.jsxs)("div",{className:"mb-2",children:[Object(o.jsx)("label",{htmlFor:b.name,children:t}),"textarea"===c?Object(o.jsx)("textarea",Object(s.a)(Object(s.a)({className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid"),placeholder:"Veuillez entrer la description...",rows:"6"},b),j)):"select"===c?Object(o.jsxs)(r.N,Object(s.a)(Object(s.a)(Object(s.a)({name:t,className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},b),j),{},{children:[Object(o.jsx)("option",{value:0,children:"Choisir"}),l.map((function(e,t){return Object(o.jsx)("option",{value:e.id,children:e.nom},t)}))]})):"selectString"===c?Object(o.jsxs)(r.N,Object(s.a)(Object(s.a)(Object(s.a)({name:t,className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},b),j),{},{children:[Object(o.jsx)("option",{value:0,children:"Choisir"}),l.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))]})):Object(o.jsx)("input",Object(s.a)(Object(s.a)({className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},b),j)),Object(o.jsx)(i.a,{component:"div",name:b.name,style:{position:"absolute",color:"red",fontSize:".6rem"}})]})}},870:function(e,t,c){"use strict";c.r(t);var s=c(174),n=c(1),a=c.n(n),r=c(682),i=c(683),o=c(691),l=c(68),j=c(45),d=c(680),u=c.n(d),b=(c(390),c(10));t.default=function(e){var t=e.match,c=Object(n.useState)(!1),d=Object(s.a)(c,2),h=d[0],m=d[1],p=Object(n.useState)(!1),O=Object(s.a)(p,2),x=O[0],f=O[1];Object(n.useEffect)((function(){t.params.id&&fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/type_essais/")+t.params.id).then((function(e){return e.json()})).then((function(e){return v(e.typeEssaiDto)}))}),[t.params.id]);var g=Object(n.useState)(null),y=Object(s.a)(g,2),w=y[0],v=y[1],C=a.a.useState({isActive:!1,status:"",message:""}),N=Object(s.a)(C,2),S=N[0],k=(N[1],o.b({nom:o.c().max(45,"Maximum 45 caract\xe8res").required("Champs obligatoire"),sigle:o.c().max(45,"Maximum 45 caract\xe8res"),codeCouleur:o.c().max(6,"Maximum 6 caract\xe8res"),description:o.c().max(255,"Maximum 255 caract\xe8res")})),z=Object(n.useState)("Echec du processus. Veuillez essayer ult\xe9rieurement !"),E=Object(s.a)(z,2),A=E[0],V=E[1],M=Object(n.useState)(!1),B=Object(s.a)(M,2),F=B[0],T=B[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(r.c,{initialValues:w||{nom:"",sigle:"",codeCouleur:"0077FF",description:""},enableReinitialize:!0,validationSchema:k,onSubmit:function(e){T(!0);var c={method:t.params.id?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j.a.getToken()),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(e)};t.params.id?fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/type_essais/")+t.params.id,c).then((function(e){return e.json()})).then((function(e){return"success"!==e.message&&(console.log(e.message),V(e.message),f(!0),T(!1)),e})).then((function(){return m(!0)})).then((function(){return T(!1)})).catch((function(e){console.log(e),f(!0),T(!1)})):fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/type_essais/"),c).then((function(e){return e.json()})).then((function(e){return"success"!==e.message&&(console.log(e.message),V(e.message),f(!0),T(!1)),e})).then((function(){return m(!0)})).then((function(){return T(!1)})).catch((function(e){console.log(e),f(!0),T(!1)})),setTimeout((function(){m(!1),f(!1)}),3e3)},children:function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)(r.b,{children:[S.isActive?Object(b.jsx)(l.a,{color:"info",closeButton:!0,children:S.message}):"",Object(b.jsxs)(l.M,{children:[Object(b.jsx)(l.l,{xs:"12",sm:"6",children:Object(b.jsxs)(l.g,{children:[Object(b.jsxs)(l.k,{children:["Informations sur le type de d'essai   ",t.params.id]}),Object(b.jsxs)(l.h,{children:[Object(b.jsxs)(l.x,{children:[Object(b.jsx)(i.a,{label:"Nom*:",name:"nom",type:"text",placeholder:"Entrer le nom du type d'essai...",autoComplete:"nom"}),Object(b.jsx)(l.y,{className:"help-block",children:"Veillez entrer le nom du type d'essai"})]}),Object(b.jsxs)(l.x,{children:[Object(b.jsx)(i.a,{label:"Sigle:",name:"sigle",type:"text",placeholder:"Entrer l'abbr\xe9viation du type d'essai..",autoComplete:"sigle"}),Object(b.jsx)(l.y,{className:"help-block",children:"Veillez entrer l'abbr\xe9viation du type d'essai"})]})]})]})}),Object(b.jsx)(l.l,{xs:"12",sm:"6",children:Object(b.jsxs)(l.g,{children:[Object(b.jsxs)(l.k,{children:["Informations sur le type d'essai   ",t.params.id]}),Object(b.jsxs)(l.h,{children:[Object(b.jsxs)(l.x,{children:[Object(b.jsx)(i.a,{label:"Code couleur:",name:"codeCouleur",type:"text",placeholder:"Exemple: 0077FF",autoComplete:"codeCouleur"}),Object(b.jsxs)(l.y,{className:"help-block",children:["Veillez entrer le code de couleur du marqueur en hexad\xe9cimal",Object(b.jsx)("a",{href:"https://www.rapidtables.com/web/color/RGB_Color.html",target:"_blank",children:"(aide)"})]})]}),Object(b.jsxs)(l.x,{children:[Object(b.jsx)(i.a,{label:"Description:",type:"textarea",name:"description",placeholder:"Entrer la description de t\xe9l\xe9phone...",autoComplete:"description"}),Object(b.jsx)(l.y,{className:"help-block",children:"Veillez entrer la description de l'institution"})]})]}),Object(b.jsxs)(l.i,{children:[Object(b.jsxs)("button",{className:"btn btn-dark mt-3",type:"submit",disabled:F,children:[t.params.id?"Modifier":"Enregistrer",Object(b.jsx)(u.a,{loading:F,size:15})]}),Object(b.jsx)("button",{className:"btn btn-danger mt-3 ml-3",type:"reset",children:"R\xe9initialiser"})]})]})})]})]})})}}),Object(b.jsx)(l.l,{sm:"12",lg:"6",children:Object(b.jsx)(l.ab,{position:"top-right",children:Object(b.jsxs)(l.X,{show:h,autohide:4e3,fade:!0,children:[Object(b.jsx)(l.Z,{closeButton:!0,children:Object(b.jsx)(l.b,{className:"mr-1",color:"success",children:"SUCC\xc8S"})}),Object(b.jsx)(l.Y,{color:"success",children:"Op\xe9ration r\xe9ussie !"})]})})}),Object(b.jsx)(l.l,{sm:"12",lg:"6",children:Object(b.jsx)(l.ab,{position:"top-right",children:Object(b.jsxs)(l.X,{show:x,autohide:4e3,fade:!0,children:[Object(b.jsx)(l.Z,{closeButton:!0,children:Object(b.jsx)(l.b,{className:"mr-1",color:"danger",children:"ECHEC"})}),Object(b.jsx)(l.Y,{color:"danger",children:A})]})})})]})}}}]);
//# sourceMappingURL=13.3ee13f6c.chunk.js.map
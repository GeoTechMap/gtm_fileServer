(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{683:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(41),a=c(174),s=c(175),o=(c(1),c(68)),r=c(682),i=c(10),l=function(e){var t=e.label,c=e.type,l=e.options,j=Object(s.a)(e,["label","type","options"]),u=Object(r.d)(j),d=Object(a.a)(u,2),b=d[0],h=d[1];return Object(i.jsxs)("div",{className:"mb-2",children:[Object(i.jsx)("label",{htmlFor:b.name,children:t}),"textarea"===c?Object(i.jsx)("textarea",Object(n.a)(Object(n.a)({className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid"),placeholder:"Veuillez entrer la description...",rows:"6"},b),j)):"select"===c?Object(i.jsxs)(o.N,Object(n.a)(Object(n.a)(Object(n.a)({name:t,className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},b),j),{},{children:[Object(i.jsx)("option",{value:0,children:"Choisir"}),l.map((function(e,t){return Object(i.jsx)("option",{value:e.id,children:e.nom},t)}))]})):"selectString"===c?Object(i.jsxs)(o.N,Object(n.a)(Object(n.a)(Object(n.a)({name:t,className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},b),j),{},{children:[Object(i.jsx)("option",{value:0,children:"Choisir"}),l.map((function(e,t){return Object(i.jsx)("option",{value:e,children:e},t)}))]})):"date"===c?Object(i.jsx)("input",Object(n.a)(Object(n.a)({type:"date",className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},b),j)):Object(i.jsx)("input",Object(n.a)(Object(n.a)({className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},b),j)),Object(i.jsx)(r.a,{component:"div",name:b.name,style:{position:"absolute",color:"red",fontSize:".6rem"}})]})}},869:function(e,t,c){"use strict";c.r(t);var n=c(174),a=c(1),s=c.n(a),o=c(682),r=c(683),i=c(691),l=c(68),j=c(45),u=c(680),d=c.n(u),b=c(10);t.default=function(e){var t=e.match,c=Object(a.useState)(!1),u=Object(n.a)(c,2),h=u[0],O=u[1],m=Object(a.useState)(!1),p=Object(n.a)(m,2),x=p[0],f=p[1];Object(a.useEffect)((function(){t.params.id&&fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/faqs/")+t.params.id).then((function(e){return e.json()})).then((function(e){return N(e.faqDto)}))}),[t.params.id]);var v=Object(a.useState)(null),g=Object(n.a)(v,2),w=g[0],N=g[1],y=s.a.useState({isActive:!1,status:"",message:""}),S=Object(n.a)(y,2),q=S[0],C=(S[1],i.b({question:i.c().max(250,"Maximum 250 caract\xe8res").required("Champs obligatire"),response:i.c()})),z=Object(a.useState)(!1),k=Object(n.a)(z,2),E=k[0],V=k[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(o.c,{initialValues:w||{question:"",response:""},enableReinitialize:!0,validationSchema:C,onSubmit:function(e){V(!0);var c={method:t.params.id?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j.a.getToken())},body:JSON.stringify(e)};t.params.id?fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/faqs/")+t.params.id,c).then((function(e){return e.json()})).then((function(){return O(!0)})).then((function(){return V(!1)})).catch((function(e){console.log(e),f(!0),V(!1)})):fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/faqs/"),c).then((function(e){return e.json()})).then((function(){return O(!0)})).then((function(){return V(!1)})).catch((function(e){console.log(e),f(!0),V(!1)})),setTimeout((function(){O(!1),f(!1)}),3e3)},children:function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.b,{children:[q.isActive?Object(b.jsx)(l.a,{color:"info",closeButton:!0,children:q.message}):"",Object(b.jsx)(l.M,{children:Object(b.jsx)(l.l,{xs:"12",sm:"6",children:Object(b.jsxs)(l.g,{children:[Object(b.jsx)(l.k,{children:"FAQS"}),Object(b.jsxs)(l.h,{children:[Object(b.jsxs)(l.x,{children:[Object(b.jsx)(r.a,{label:"Question*:",name:"question",type:"text",placeholder:"Entrer la question...",autoComplete:"question",defaultValue:"Normal"}),Object(b.jsx)(l.y,{className:"help-block",children:"Veuillez entrer la question"})]}),Object(b.jsxs)(l.x,{children:[Object(b.jsx)(r.a,{label:"Reponse:",name:"response",type:"text",placeholder:"Entrer la reponse...",autoComplete:"response",defaultValue:"Normal"}),Object(b.jsx)(l.y,{className:"help-block",children:"Veuillez entrer la reponse"})]})]}),Object(b.jsxs)(l.i,{children:[Object(b.jsxs)("button",{className:"btn btn-dark mt-3",type:"submit",disabled:E,children:[t.params.id?"Modifier":"Enregistrer",Object(b.jsx)(d.a,{loading:E,size:15})]}),Object(b.jsx)("button",{className:"btn btn-danger mt-3 ml-3",type:"reset",children:"R\xe9initialiser"})]})]})})})]})})}}),Object(b.jsx)(l.l,{sm:"12",lg:"6",children:Object(b.jsx)(l.ab,{position:"top-right",children:Object(b.jsxs)(l.X,{show:h,autohide:4e3,fade:!0,children:[Object(b.jsx)(l.Z,{closeButton:!0,children:Object(b.jsx)(l.b,{className:"mr-1",color:"success",children:"SUCC\xc8S"})}),Object(b.jsx)(l.Y,{color:"success",children:"Op\xe9ration r\xe9ussie !"})]})})}),Object(b.jsx)(l.l,{sm:"12",lg:"6",children:Object(b.jsx)(l.ab,{position:"top-right",children:Object(b.jsxs)(l.X,{show:x,autohide:4e3,fade:!0,children:[Object(b.jsx)(l.Z,{closeButton:!0,children:Object(b.jsx)(l.b,{className:"mr-1",color:"danger",children:"ECHEC"})}),Object(b.jsx)(l.Y,{color:"danger",children:"Echec de l'op\xe9ration. Veuillez essayer plus tard !"})]})})})]})}}}]);
//# sourceMappingURL=11.62e5fd50.chunk.js.map
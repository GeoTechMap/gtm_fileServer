(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{683:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i(41),a=i(174),c=i(175),s=(i(1),i(68)),r=i(682),l=i(10),o=function(e){var t=e.label,i=e.type,o=e.options,u=Object(c.a)(e,["label","type","options"]),m=Object(r.d)(u),j=Object(a.a)(m,2),h=j[0],d=j[1];return Object(l.jsxs)("div",{className:"mb-2",children:[Object(l.jsx)("label",{htmlFor:h.name,children:t}),"textarea"===i?Object(l.jsx)("textarea",Object(n.a)(Object(n.a)({className:"form-control shadow-none ".concat(d.touched&&d.error&&"is-invalid"),placeholder:"Veuillez entrer la description...",rows:"6"},h),u)):"select"===i?Object(l.jsxs)(s.N,Object(n.a)(Object(n.a)(Object(n.a)({name:t,className:"form-control shadow-none ".concat(d.touched&&d.error&&"is-invalid")},h),u),{},{children:[Object(l.jsx)("option",{value:0,children:"Choisir"}),o.map((function(e,t){return Object(l.jsx)("option",{value:e.id,children:e.nom},t)}))]})):"selectString"===i?Object(l.jsxs)(s.N,Object(n.a)(Object(n.a)(Object(n.a)({name:t,className:"form-control shadow-none ".concat(d.touched&&d.error&&"is-invalid")},h),u),{},{children:[Object(l.jsx)("option",{value:0,children:"Choisir"}),o.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))]})):Object(l.jsx)("input",Object(n.a)(Object(n.a)({className:"form-control shadow-none ".concat(d.touched&&d.error&&"is-invalid")},h),u)),Object(l.jsx)(r.a,{component:"div",name:h.name,style:{position:"absolute",color:"red",fontSize:".6rem"}})]})}},867:function(e,t,i){"use strict";i.r(t);var n=i(174),a=i(1),c=i.n(a),s=i(682),r=i(683),l=i(691),o=i(68),u=i(45),m=i(680),j=i.n(m),h=i(10);t.default=function(e){var t=e.match,i=Object(a.useState)(!1),m=Object(n.a)(i,2),d=m[0],b=m[1],p=Object(a.useState)(!1),O=Object(n.a)(p,2),x=O[0],f=O[1];Object(a.useEffect)((function(){fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/keycloakusers/")).then((function(e){return e.json()})).then((function(e){return v(e),e})),fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/institutions/")).then((function(e){return e.json()})).then((function(e){return k(e),e})),t.params.id&&fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/utilisateurs/")+t.params.id).then((function(e){return e.json()})).then((function(e){return D({nom:e.utilisateurDto.nom,prenom:e.utilisateurDto.prenom,username:e.utilisateurDto.username,email:e.utilisateurDto.email,adresse:e.utilisateurDto.adresse,telephone:e.utilisateurDto.telephone,institution:e.utilisateurDto.institution.id})}))}),[t.params.id]);var g=Object(a.useState)([]),w=Object(n.a)(g,2),y=w[0],v=w[1],N=Object(a.useState)([]),C=Object(n.a)(N,2),S=C[0],k=C[1],z=Object(a.useState)(null),E=Object(n.a)(z,2),V=E[0],D=E[1],M=c.a.useState({isActive:!1,status:"",message:""}),T=Object(n.a)(M,2),q=T[0],A=(T[1],Object(a.useState)()),B=Object(n.a)(A,2),F=(B[0],B[1],l.b({nom:l.c().max(100,"Maximum 100 caract\xe8res").min(3,"3 caract\xe8res au minimum").required("Champs obligatire"),prenom:l.c().max(45,"Maximum 45 caract\xe8res").min(3,"3 caract\xe8res au minimum"),adresse:l.c().max(45,"Maximum 45 caract\xe8res").min(3,"3 caract\xe8res au minimum").required("Champs obligatire"),telephone:l.c().max(15,"Maximum 15 caract\xe8res").min(3,"3 caract\xe8res au minimum").required("Champs obligatire"),email:l.c().email("Email invalide").required("Champs obligatire"),username:l.c().max(45,"Maximum 45 caract\xe8res").min(1,"Faire un choix").required("Champs obligatoire"),institution:l.a().min(1,"Faire un choix").required("Champs obligatoire")})),I=Object(a.useState)(!1),J=Object(n.a)(I,2),P=J[0],R=J[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(s.c,{initialValues:V||{nom:"",prenom:"",username:"",email:"",adresse:"",telephone:"",institution:""},enableReinitialize:!0,validationSchema:F,onSubmit:function(e){R(!0);var i={method:t.params.id?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u.a.getToken())},body:JSON.stringify({id:t.params.id?V.id:null,nom:e.nom,idKeycloak:"plplp",prenom:e.prenom,adresse:e.adresse,telephone:e.telephone,email:e.email,username:e.username,institution:{id:e.institution}})};t.params.id?fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/utilisateurs/")+t.params.id,i).then((function(e){return e.json()})).then((function(){return b(!0)})).then((function(){return R(!1)})).catch((function(e){console.log(e),f(!0),R(!1)})):fetch("".concat("http://www.geotechmap.ueh.edu.ht","/api/utilisateurs/"),i).then((function(e){return e.json()})).then((function(){return b(!0)})).then((function(){return R(!1)})).then((function(){return setTimeout((function(){window.location.reload()}),3e3)})).catch((function(e){console.log(e),f(!0),R(!1)})),setTimeout((function(){b(!1),f(!1)}),3e3)},children:function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)(s.b,{children:[q.isActive?Object(h.jsx)(o.a,{color:"info",closeButton:!0,children:q.message}):"",Object(h.jsxs)(o.M,{children:[Object(h.jsx)(o.l,{xs:"12",sm:"6",children:Object(h.jsxs)(o.g,{children:[Object(h.jsxs)(o.k,{children:["Informations sur l'utilisateur   ",t.params.id]}),Object(h.jsxs)(o.h,{children:[Object(h.jsxs)(o.x,{children:[Object(h.jsx)(r.a,{label:"Nom*:",name:"nom",type:"text",placeholder:"Entrer le nom de l'utilisateur...",autoComplete:"nom"}),Object(h.jsx)(o.y,{className:"help-block",children:"Veuillez entrer le nom de l'utilisateur"})]}),Object(h.jsxs)(o.x,{children:[Object(h.jsx)(r.a,{label:"Pr\xe9nom:",name:"prenom",type:"text",placeholder:"Entrer le pr\xe9nom de l'utilisateur...",autoComplete:"sigle"}),Object(h.jsx)(o.y,{className:"help-block",children:"Veuillez entrer le pr\xe9nom de l'utilisateur"})]}),Object(h.jsxs)(o.x,{children:[Object(h.jsx)(r.a,{label:"Adresse*:",name:"adresse",type:"text",placeholder:"Entrer l'adresse de l'institution..",autoComplete:"adresse"}),Object(h.jsx)(o.y,{className:"help-block",children:"Veuillez entrer l'adresse de l'utilisateur"})]}),Object(h.jsxs)(o.x,{children:[Object(h.jsx)(r.a,{label:"T\xe9l\xe9phone:",name:"telephone",type:"text",placeholder:"Entrer un num\xe9ro de t\xe9l\xe9phone...",autoComplete:"telephone1"}),Object(h.jsx)(o.y,{className:"help-block",children:"Veuillez entrer le num\xe9ro de t\xe9l\xe9phone de l'utilisateur"})]})]})]})}),Object(h.jsx)(o.l,{xs:"12",sm:"6",children:Object(h.jsxs)(o.g,{children:[Object(h.jsxs)(o.k,{children:["Informations sur l'utilisateur   ",t.params.id]}),Object(h.jsxs)(o.h,{children:[Object(h.jsxs)(o.x,{children:[Object(h.jsx)(r.a,{label:"Email*:",name:"email",type:"text",placeholder:"Enter l'email de l'utilisateur...",autoComplete:"email"}),Object(h.jsx)(o.y,{className:"help-block",children:"Veuillez entrer l'email de l'utilisateur"})]}),Object(h.jsxs)(o.x,{children:[Object(h.jsx)(r.a,{label:"Nom d'utilisateur*:",name:"username",type:"selectString",options:y}),Object(h.jsx)(o.y,{className:"help-block",children:"Veuillez choisir le nom d'utilisateur"})]}),Object(h.jsxs)(o.x,{children:[Object(h.jsx)(r.a,{label:"Institution*:",name:"institution",type:"select",options:S,placeholder:"Entrer l'institution"}),Object(h.jsx)(o.y,{className:"help-block",children:"Veuillez entrer l'institution"})]})]}),Object(h.jsxs)(o.i,{children:[Object(h.jsxs)("button",{className:"btn btn-dark mt-3",type:"submit",disabled:P,children:[t.params.id?"Modifier":"Enregistrer",Object(h.jsx)(j.a,{loading:P,size:15})]}),Object(h.jsx)("button",{className:"btn btn-danger mt-3 ml-3",type:"reset",children:"R\xe9initialiser"})]})]})})]})]})})}}),Object(h.jsx)(o.l,{sm:"12",lg:"6",children:Object(h.jsx)(o.ab,{position:"top-right",children:Object(h.jsxs)(o.X,{show:d,autohide:4e3,fade:!0,children:[Object(h.jsx)(o.Z,{closeButton:!0,children:Object(h.jsx)(o.b,{className:"mr-1",color:"success",children:"SUCC\xc8S"})}),Object(h.jsx)(o.Y,{color:"success",children:"Op\xe9ration r\xe9ussie !"})]})})}),Object(h.jsx)(o.l,{sm:"12",lg:"6",children:Object(h.jsx)(o.ab,{position:"top-right",children:Object(h.jsxs)(o.X,{show:x,autohide:4e3,fade:!0,children:[Object(h.jsx)(o.Z,{closeButton:!0,children:Object(h.jsx)(o.b,{className:"mr-1",color:"danger",children:"ECHEC"})}),Object(h.jsx)(o.Y,{color:"success",children:"Echec de l'op\xe9ration. Veuillez essayer plus tard !"})]})})})]})}}}]);
//# sourceMappingURL=14.f608e86a.chunk.js.map
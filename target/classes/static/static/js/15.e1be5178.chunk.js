(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{690:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i(40),c=i(173),a=i(174),s=(i(1),i(67)),o=i(689),r=i(10),l=function(e){var t=e.label,i=e.type,l=e.options,d=Object(a.a)(e,["label","type","options"]),u=Object(o.d)(d),m=Object(c.a)(u,2),j=m[0],h=m[1];return Object(r.jsxs)("div",{className:"mb-2",children:[Object(r.jsx)("label",{htmlFor:j.name,children:t}),"textarea"===i?Object(r.jsx)("textarea",Object(n.a)(Object(n.a)({className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid"),placeholder:"Veuillez entrer la description...",rows:"6"},j),d)):"select"===i?Object(r.jsxs)(s.N,Object(n.a)(Object(n.a)(Object(n.a)({name:t,className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},j),d),{},{children:[Object(r.jsx)("option",{value:0,children:"Choisir"}),l.map((function(e,t){return Object(r.jsx)("option",{value:e.id,children:e.nom},t)}))]})):"selectString"===i?Object(r.jsxs)(s.N,Object(n.a)(Object(n.a)(Object(n.a)({name:t,className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},j),d),{},{children:[Object(r.jsx)("option",{value:0,children:"Choisir"}),l.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},t)}))]})):Object(r.jsx)("input",Object(n.a)(Object(n.a)({className:"form-control shadow-none ".concat(h.touched&&h.error&&"is-invalid")},j),d)),Object(r.jsx)(o.a,{component:"div",name:j.name,style:{position:"absolute",color:"red",fontSize:".6rem"}})]})}},906:function(e,t,i){"use strict";i.r(t);var n=i(40),c=i(173),a=i(1),s=i.n(a),o=i(689),r=i(690),l=i(711),d=i(67),u=i(44),m=i(682),j=i.n(m),h=i(176),p=i(10);t.default=function(e){var t=e.match,i=Object(a.useState)(!1),m=Object(c.a)(i,2),b=m[0],O=m[1],f=Object(a.useState)(!1),x=Object(c.a)(f,2),E=x[0],S=x[1],C=Object(a.useContext)(h.a),y=Object(c.a)(C,2),N=y[0];y[1];Object(a.useEffect)((function(){fetch("".concat("http://ec2-18-218-81-138.us-east-2.compute.amazonaws.com:8080","/api/type_essais/")).then((function(e){return e.json()})).then((function(e){return X(e),e})),ne([{id:"Artibonite",nom:"Artibonite"},{id:"Centre",nom:"Centre"},{id:"Grand'Anse",nom:"Grand'Anse"},{id:"Nippes",nom:"Nippes"},{id:"Nord",nom:"Nord"},{id:"Nord-Est",nom:"Nord-Est"},{id:"Nord-Ouest",nom:"Nord-Ouest"},{id:"Ouest",nom:"Ouest"},{id:"Sud-Est",nom:"Sud-Est"},{id:"Sud",nom:"Sud"}]),$([{id:N.connectedUser?N.connectedUser.institution.id:null,nom:N.connectedUser?N.connectedUser.institution.nom:null}]),t.params.id&&fetch("".concat("http://ec2-18-218-81-138.us-east-2.compute.amazonaws.com:8080","/api/essais/")+t.params.id).then((function(e){return e.json()})).then((function(e){return B({id:e.id,typeEssai:e.typeEssai.id,institution:e.institution.id,latitude:e.position.latitude,longitude:e.position.longitude,altitude:e.position.altitude,departement:e.position.departement,commune:e.position.commune,sectionCommunale:e.position.sectionCommunale,commentaire:e.commentaire,code:e.code,dateRealisation:e.dateRealisation,motsCles:e.motsCles,pdf:"",idPosition:e.position.id,idFichier:e.fichier.id,nomFichier:e.fichier.nom}),e})).then((function(e){return I(e.fichier.hashNomFichier),e})).then((function(e){return T(Object(n.a)(Object(n.a)({},R),{},{file:{id:e.fichier.id,name:e.fichier.nom,type:e.fichier.format,size:e.fichier.capacite}})),e})).then((function(e){return fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://ec2-18-218-81-138.us-east-2.compute.amazonaws.com:8080"}).FILE_SERVER_URL,"/api/file/getfile"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({nomFichier:e.fichier.nom,hashNomFichier:e.fichier.hashNomFichier,hashBase64:e.fichier.hashPdf})}).then((function(e){return e.json()})).then((function(e){return z(Object(n.a)(Object(n.a)({},P),{},{pdf:e.base64File})),e})).then((function(t){T({file:{id:e.fichier.id,name:e.fichier.nom,type:e.fichier.format,size:e.fichier.capacite}})})).then((function(){return me(!0)})).catch((function(e){console.error("Error:",e)})),e}))}),[t.params.id,P,R,N]);var g=Object(a.useState)({file:null}),_=Object(c.a)(g,2),R=_[0],T=_[1],v=Object(a.useState)(),A=Object(c.a)(v,2),F=A[0],P=void 0===F?{typeEssai:{id:null},institution:{id:null},position:{id:null},fichier:{id:null},motsCles:"",code:"",pdf:""}:F,z=A[1],w=Object(a.useRef)(P);Object(a.useEffect)((function(){w.current=P}),[P]);var L=Object(a.useState)({typeEssai:"",institution:"",latitude:"",longitude:"",altitude:"",departement:"",commune:"",sectionCommunale:"",commentaire:"",code:"",dateRealisation:"",motsCles:"",pdf:""}),D=Object(c.a)(L,2),U=D[0],V=(D[1],Object(a.useState)("")),k=Object(c.a)(V,2),H=k[0],I=k[1],M=Object(a.useState)(null),K=Object(c.a)(M,2),W=K[0],B=K[1],J=Object(a.useState)([]),q=Object(c.a)(J,2),G=q[0],X=q[1],Y=Object(a.useState)([]),Z=Object(c.a)(Y,2),Q=Z[0],$=Z[1],ee=Object(a.useState)([]),te=Object(c.a)(ee,2),ie=te[0],ne=te[1],ce=s.a.useState({isActive:!1,status:"",message:""}),ae=Object(c.a)(ce,2),se=ae[0],oe=(ae[1],l.b({typeEssai:l.a().max(99999999,"Maximum 45 caract\xe8res").min(1,"Faire un choix").required("Champs obligatoire"),institution:l.a().max(99999999,"Maximum 45 caract\xe8res").min(1,"Faire un choix").required("Champs obligatoire"),latitude:l.a("Entrer un nombre").min(17.5,"Latitude situ\xe9 en dehors d'Ha\xefti").max(21,"Latitude situ\xe9 en dehors d'Ha\xefti").required("Champs obligatoire"),longitude:l.a("Entrer un nombre").min(-75,"Latitude situ\xe9 en dehors d'Ha\xefti").max(-71.5,"Latitude situ\xe9 en dehors d'Ha\xefti").required("Champs obligatoire"),altitude:l.a("Entrer un nombre").max(99999999,"Maximum 255 caract\xe8res").required("Champs obligatoire"),commentaire:l.c().max(255,"Maximum 255 caract\xe8res"),code:l.c().max(255,"Maximum 255 caract\xe8res"),dateRealisation:l.c().max(20,"Maximum 20 caract\xe8res"),motsCles:l.c().max(255,"Maximum 255 caract\xe8res"),departement:l.c().max(255,"Maximum 255 caract\xe8res").required("Champs obligatoire")})),re=function(e){var t=e.currentTarget.files[0];T({file:e.target.files[0]}),function(e,t){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){t(i.result)},i.onerror=function(e){console.log("Error: ",e)}}(t,(function(e){z(Object(n.a)(Object(n.a)({},P),{},{pdf:e.substr(e.indexOf(",")+1)}))})),me(!0)},le=Object(a.useState)(!1),de=Object(c.a)(le,2),ue=de[0],me=de[1],je=Object(a.useState)(!1),he=Object(c.a)(je,2),pe=he[0],be=he[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(o.c,{initialValues:W||U,enableReinitialize:!0,validationSchema:oe,onSubmit:function(e){if(be(!0),ue){new Promise((function(e,t){e()})).then((function(){return new Promise((function(i,n){z({id:t.params.id?W.id:null,typeEssai:{id:e.typeEssai},institution:{id:e.institution},position:{id:t.params.id?W.idPosition:null,latitude:e.latitude,longitude:e.longitude,altitude:e.altitude,departement:e.departement},fichier:{id:t.params.id?W.idFichier:null,nom:R.file.name,format:R.file.type,capacite:R.file.size},commentaire:e.commentaire,code:e.code,dateRealisation:e.dateRealisation,motsCles:e.motsCles.concat(" "+e.departement).concat(" "+G.filter((function(t){return t.id==e.typeEssai}))[0].nom).concat(" "+Q.filter((function(t){return t.id==e.institution}))[0].nom).toLowerCase().split(" ").filter((function(e,t,i){return t==i.indexOf(e)})).join(" "),pdf:P.pdf,nomFichierASuprimmer:H}),z((function(e){return e})),i()}))})).then((function(){return new Promise((function(e,i){var n={method:t.params.id?"PUT":"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(u.a.getToken())},body:JSON.stringify(w.current)};console.log(w.current),t.params.id?fetch("".concat("http://ec2-18-218-81-138.us-east-2.compute.amazonaws.com:8080","/api/essais/")+t.params.id,n).then((function(e){return e.json()})).then((function(e){fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://ec2-18-218-81-138.us-east-2.compute.amazonaws.com:8080"}).FILE_SERVER_URL,"/api/file"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({hashNomFichier:e.essaiDto.fichier.hashNomFichier,nomFichierASuprimmer:H,base64:P.pdf})})})).then((function(){return O(!0)})).then((function(){return be(!1)})).catch((function(e){console.log(e),S(!0),be(!1)})):fetch("".concat("http://ec2-18-218-81-138.us-east-2.compute.amazonaws.com:8080","/api/essais"),n).then((function(e){return e.json()})).then((function(e){fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://ec2-18-218-81-138.us-east-2.compute.amazonaws.com:8080"}).FILE_SERVER_URL,"/api/file"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({hashNomFichier:e.essaiDto.fichier.hashNomFichier,nomFichierASuprimmer:"",base64:P.pdf})})})).then((function(){return O(!0)})).then((function(){return be(!1)})).catch((function(e){console.log(e),S(!0),be(!1)})),e()}))})),setTimeout((function(){O(!1),S(!1)}),3e3)}else console.log("no document")},children:function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)(o.b,{children:[se.isActive?Object(p.jsx)(d.a,{color:"info",closeButton:!0,children:se.message}):"",Object(p.jsxs)(d.M,{children:[Object(p.jsx)(d.l,{xs:"12",sm:"6",children:Object(p.jsxs)(d.g,{children:[Object(p.jsxs)(d.k,{children:["Informations sur l'essai   ",t.params.id]}),Object(p.jsxs)(d.h,{children:[Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"Type d'essai*:",name:"typeEssai",type:"select",options:G,placeholder:"Entrer le type d'essai..."}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer le type d'essai"})]}),Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"Institution*:",name:"institution",type:"select",options:Q,placeholder:"Entrer l'institution"}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer l'institution"})]}),Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"Latitude*:",name:"latitude",type:"text",placeholder:"Entrer la latitude",autoComplete:"latitude"}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer la latitude (ex: 18.54)"})]}),Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"Longitude*:",name:"longitude",type:"text",placeholder:"Entrer la longitude",autoComplete:"longitude"}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer la longitude (ex: -72.68)"})]}),Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"Altitude*:",name:"altitude",type:"text",placeholder:"Entrer l'altitude",autoComplete:"altitude"}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer l'altitude (ex: 45)"})]}),Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"D\xe9partement*:",name:"departement",type:"select",options:ie,placeholder:"Entrer le d\xe9partement de l'essai..."}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer le d\xe9partement de l'essai"})]})]})]})}),Object(p.jsx)(d.l,{xs:"12",sm:"6",children:Object(p.jsxs)(d.g,{children:[Object(p.jsxs)(d.k,{children:["Informations sur l'essai   ",t.params.id]}),Object(p.jsxs)(d.h,{children:[Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"Date de r\xe9alisation: (jj/mm/aaaa)",name:"dateRealisation",type:"text",placeholder:"Entrer la date de r\xe9alisation de l'essai",autoComplete:"dateRealisation"}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer la date de r\xe9alisation de l'essai (format: Jour/Mois/Ann\xe9e)"})]}),Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"Code de l'essai:",name:"code",type:"text",placeholder:"Entrer le code de l'essai",autoComplete:"code"}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer le code de l'essai"})]}),Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"Mots cl\xe9s:",name:"motsCles",type:"textarea",placeholder:"Entrer les mots cl\xe9s",autoComplete:"motsCles"}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer les mots cl\xe9s"})]}),Object(p.jsxs)(d.x,{children:[Object(p.jsx)(r.a,{label:"Commentaires:",name:"commentaire",type:"textarea",placeholder:"Entrer les commentaires",autoComplete:"commentaire"}),Object(p.jsx)(d.y,{className:"help-block",children:"Veuillez entrer un commentaire"})]}),Object(p.jsx)(d.x,{row:!0,children:Object(p.jsxs)(d.l,{xs:"12",md:"12",children:[Object(p.jsx)("input",{id:"custom-file-input",type:"file",accept:"application/pdf",onChange:function(e){return re(e)}}),Object(p.jsx)(d.J,{htmlFor:"custom-file-input",variant:"custom-file",children:R.file?R.file.name:"Choisir un fichier..."})]})}),W||ue?"":Object(p.jsx)(d.x,{row:!0,children:Object(p.jsx)(d.l,{xs:"12",md:"12",children:Object(p.jsx)(d.y,{className:"help-block",children:Object(p.jsx)("span",{style:{color:"red"},children:"Choisir un PDF*"})})})})]}),W?Object(p.jsx)(d.x,{row:!0,children:Object(p.jsx)(d.l,{xs:"12",md:"12",children:Object(p.jsxs)(d.y,{className:"help-block",children:[" Ancien PDF:  ",W?W.nomFichier:""]})})}):"",Object(p.jsxs)(d.i,{children:[Object(p.jsxs)("button",{className:"btn btn-dark mt-3",type:"submit",disabled:pe,children:[t.params.id?"Modifier":"Enregistrer",Object(p.jsx)(j.a,{loading:pe,size:15})]}),Object(p.jsx)("button",{className:"btn btn-danger mt-3 ml-3",type:"reset",children:"R\xe9initialiser"})]})]})})]})]})})}}),Object(p.jsx)(d.l,{sm:"12",lg:"6",children:Object(p.jsx)(d.ab,{position:"top-right",children:Object(p.jsxs)(d.X,{show:b,autohide:4e3,fade:!0,children:[Object(p.jsx)(d.Z,{closeButton:!0,children:Object(p.jsx)(d.b,{className:"mr-1",color:"success",children:"SUCC\xc8S"})}),Object(p.jsx)(d.Y,{color:"success",children:"Op\xe9ration r\xe9ussie !"})]})})}),Object(p.jsx)(d.l,{sm:"12",lg:"6",children:Object(p.jsx)(d.ab,{position:"top-right",children:Object(p.jsxs)(d.X,{show:E,autohide:4e3,fade:!0,children:[Object(p.jsx)(d.Z,{closeButton:!0,children:Object(p.jsx)(d.b,{className:"mr-1",color:"danger",children:"ECHEC"})}),Object(p.jsx)(d.Y,{color:"success",children:"Echec de l'op\xe9ration. Veuillez essayer plus tard !"})]})})})]})}}}]);
//# sourceMappingURL=15.e1be5178.chunk.js.map
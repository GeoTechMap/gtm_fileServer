(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{874:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(41),r=a(24),i=a(68),o=s.a.lazy((function(){return Promise.all([a.e(7),a.e(21)]).then(a.bind(null,876))})),l=s.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(14)]).then(a.bind(null,867))})),d=s.a.lazy((function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,877))})),m=s.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(12)]).then(a.bind(null,868))})),b=s.a.lazy((function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,878))})),j=s.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(11)]).then(a.bind(null,869))})),u=s.a.lazy((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,879))})),h=s.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(13)]).then(a.bind(null,870))})),p=s.a.lazy((function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,871))})),x=s.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(10)]).then(a.bind(null,872))})),O=[{path:"/",exact:!0,name:"Accueil",component:o,roles:["ADMIN","OPERATEUR"]},{path:"/dashboard",name:"Dashboard",component:o,roles:["ADMIN","OPERATEUR"]},{path:"/utilisateurs/create",exact:!0,name:"Ajouter",component:l,roles:["ADMIN"]},{path:"/utilisateurs",exact:!0,name:"Utilisateurs",component:d,roles:["ADMIN"]},{path:"/utilisateurs/edit/:id",exact:!0,name:"Modifier",component:l,roles:["ADMIN"]},{path:"/institutions/create",exact:!0,name:"Ajouter",component:m,roles:["ADMIN"]},{path:"/institutions",exact:!0,name:"Institutions",component:b,roles:["ADMIN"]},{path:"/institutions/edit/:id",exact:!0,name:"Modifier",component:m,roles:["ADMIN"]},{path:"/faqs/create",exact:!0,name:"Ajouter",component:j,roles:["OPERATEUR"]},{path:"/faqs",exact:!0,name:"faqs",component:u,roles:["OPERATEUR"]},{path:"/faqs/edit/:id",exact:!0,name:"Modifier",component:j,roles:["OPERATEUR"]},{path:"/test_types/create",exact:!0,name:"Ajouter",component:h,roles:["ADMIN"]},{path:"/test_types",exact:!0,name:"Types de d'essais ",component:p,roles:["ADMIN"]},{path:"/test_types/edit/:id",exact:!0,name:"Modifier",component:h,roles:["ADMIN"]},{path:"/tests/create",exact:!0,name:"Ajouter",component:x,roles:["OPERATEUR"]},{path:"/tests",exact:!0,name:"Essais ",component:s.a.lazy((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,880))})),roles:["OPERATEUR"]},{path:"/tests/edit/:id",exact:!0,name:"Modifier",component:x,roles:["OPERATEUR"]},{path:"/pdf/:id",exact:!0,name:"R\xe9sultat",component:s.a.lazy((function(){return Promise.all([a.e(0),a.e(6),a.e(5)]).then(a.bind(null,875))})),roles:["ADMIN","OPERATEUR"]}],f=a(45),N=a(10),v=Object(N.jsx)("div",{className:"pt-3 text-center",children:Object(N.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),A=function(){return Object(N.jsx)("main",{className:"c-main",children:Object(N.jsx)(i.n,{fluid:!0,children:Object(N.jsx)(n.Suspense,{fallback:v,children:Object(N.jsxs)(r.d,{children:[O.map((function(e,t){return e.component&&Object(N.jsx)(r.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return f.a.hasRole(e.roles)?Object(N.jsx)(i.u,{children:Object(N.jsx)(e.component,Object(c.a)({},t))}):Object(N.jsx)(r.a,{from:"/",to:"/dashboard"})}},t)})),Object(N.jsx)(r.a,{from:"/",to:"/404"})]})})})})},g=s.a.memo(A),R=function(){return Object(N.jsxs)(i.v,{fixed:!1,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("a",{href:"https://www.geotechmap.ht",target:"_blank",rel:"noopener noreferrer",children:"GeoTechMap"}),Object(N.jsx)("span",{className:"ml-1",children:"\xa9 2021 URG\xe9o."})]}),Object(N.jsxs)("div",{className:"mfs-auto",children:[Object(N.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(N.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:"CoreUI for React"})]})]})},y=s.a.memo(R),I=a(178),S=a(54),P=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.changeState.sidebarShow}));return Object(N.jsxs)(i.z,{withSubheader:!0,children:[Object(N.jsx)(i.bb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:a})}}),Object(N.jsx)(i.bb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:a})}}),Object(N.jsx)(i.A,{className:"d-md-down-none mr-auto"}),Object(N.jsxs)(i.A,{className:"px-3",children:[Object(N.jsx)(i.B,{className:"px-3",children:Object(N.jsx)(i.C,{children:f.a.getUsername()})}),Object(N.jsx)(w,{})]}),Object(N.jsx)(i.W,{className:"px-3 justify-content-between",children:Object(N.jsx)(i.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:O})})]})},w=function(){return Object(N.jsxs)(i.q,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(N.jsx)(i.t,{className:"c-header-nav-link",caret:!1,children:Object(N.jsx)("div",{className:"c-avatar",children:Object(N.jsx)(i.D,{src:"avatars/9.png",className:"c-avatar-img",alt:"user image"})})}),Object(N.jsx)(i.s,{className:"pt-0",placement:"bottom-end",children:Object(N.jsxs)(i.r,{onClick:function(){return f.a.doLogout()},children:[Object(N.jsx)(S.a,{name:"cil-lock-locked",className:"mfe-2"}),Object(N.jsx)("h6",{children:"D\xe9connexion"})]})})]})},C=a.p+"static/media/target.28c898ac.svg",E={admin:[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(N.jsx)(S.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavTitle",_children:["Menu"]},{_tag:"CSidebarNavItem",name:"Utilisateurs",to:"/utilisateurs",icon:"cil-user"},{_tag:"CSidebarNavItem",name:"Institutions",to:"/institutions",icon:"cil-home"},{_tag:"CSidebarNavItem",name:"Types d'essai",to:"/test_types",icon:"cil-pencil"},{_tag:"CSidebarNavItem",name:"Faqs",to:"/faqs",icon:"cil-map"}],operateur:[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(N.jsx)(S.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavTitle",_children:["Menu"]},{_tag:"CSidebarNavItem",name:"Essais",to:"/tests",icon:"cil-map"},{_tag:"CSidebarNavItem",name:"Faqs",to:"/faqs",icon:"cil-map"}]},M=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.changeState.sidebarShow}));return Object(N.jsxs)(i.O,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(N.jsxs)(i.P,{className:"d-md-down-none",style:{color:"black"},to:"/",children:[Object(N.jsx)("h4",{children:"Ge"}),Object(N.jsx)("img",{src:C,width:"30",height:"30",alt:"logo",style:{marginRight:"-5px"}}),Object(N.jsx)("h4",{children:"TechMap"})]}),Object(N.jsx)(i.R,{children:Object(N.jsx)(i.o,{items:f.a.hasRole(["ADMIN"])?E.admin:f.a.hasRole(["OPERATEUR"])?E.operateur:[],components:{CSidebarNavDivider:i.S,CSidebarNavDropdown:i.T,CSidebarNavItem:i.U,CSidebarNavTitle:i.V}})}),Object(N.jsx)(i.Q,{className:"c-d-md-down-none"})]})},D=s.a.memo(M);t.default=function(){return Object(N.jsxs)("div",{className:"c-app c-default-layout",children:[Object(N.jsx)(D,{}),Object(N.jsxs)("div",{className:"c-wrapper",children:[Object(N.jsx)(P,{}),Object(N.jsx)("div",{className:"c-body",children:Object(N.jsx)(g,{})}),Object(N.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=20.bd29b0c1.chunk.js.map
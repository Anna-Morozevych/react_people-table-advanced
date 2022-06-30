(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{21:function(e,t,r){},23:function(e,t,r){},25:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var n=r(15),c=r.n(n),a=r(8),s=r(0),o=r.n(s),l=r(3),i=(r(21),r(22),r(23),r(1)),d=function(){return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)(a.c,{to:"/",className:"header__link",children:"Home Page"}),Object(i.jsx)(a.c,{to:"/people",className:"header__link",children:"People Page"})]})},j=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},u=function(){return Object(i.jsx)("h1",{children:"Page not found"})},b=r(7),m=o.a.createContext({people:[],setPeople:function(){}}),h=function(e){var t=e.children,r=Object(s.useState)([]),n=Object(b.a)(r,2),c=n[0],a=n[1];Object(s.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);var o={people:c,setPeople:a};return Object(i.jsx)(m.Provider,{value:o,children:t})},O=r(13),p=r.n(O),x=(r(25),function(e){var t=e.person,r=Object(l.e)();return Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:{pathname:"/people/".concat(t.slug),search:r.search},style:{textDecoration:"none",color:"m"===t.sex?"blue":"red"},children:t.name})})}),f=function(e){var t=e.person,r=e.people,n=Object(l.g)().slug,c=r.find((function(e){return e.name===t.motherName})),a=r.find((function(e){return e.name===t.fatherName}));return Object(i.jsxs)("tr",{style:{backgroundColor:n===t.slug?"#bbff8f":""},children:[Object(i.jsx)(x,{person:t}),Object(i.jsx)("td",{children:t.sex}),Object(i.jsx)("td",{children:t.born}),Object(i.jsx)("td",{children:t.died}),c?Object(i.jsx)(x,{person:c}):Object(i.jsx)("td",{style:{fontWeight:"bold"},children:t.motherName}),a?Object(i.jsx)(x,{person:a}):Object(i.jsx)("td",{style:{fontWeight:"bold"},children:t.fatherName})]})},v=function(e){var t=e.people,r=Object(a.d)(),n=Object(b.a)(r,2),c=n[0],s=n[1],o=c.get("sortOrder")||"",l=c.get("query")||"",d=c.get("sortBy")||"",j=function(e){var t,r=null===(t=e.currentTarget.textContent)||void 0===t?void 0:t.toLowerCase();r&&""===o&&s({query:l,sortBy:r,sortOrder:"asc"}),r&&"desc"===o&&s({query:l,sortBy:r,sortOrder:"asc"}),r&&"asc"===o&&s({query:l,sortBy:r,sortOrder:"desc"})};return Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:p()("table__sort",{"table__sort--asc":"asc"===o&&"name"===d,"table__sort--desc":"desc"===o&&"name"===d}),onClick:j,children:"Name"}),Object(i.jsx)("th",{className:p()("table__sort",{"table__sort--asc":"asc"===o&&"sex"===d,"table__sort--desc":"desc"===o&&"sex"===d}),onClick:j,children:"Sex"}),Object(i.jsx)("th",{className:p()("table__sort",{"table__sort--asc":"asc"===o&&"born"===d,"table__sort--desc":"desc"===o&&"born"===d}),onClick:j,children:"Born"}),Object(i.jsx)("th",{className:p()("table__sort",{"table__sort--asc":"asc"===o&&"died"===d,"table__sort--desc":"desc"===o&&"died"===d}),onClick:j,children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(f,{person:e,people:t},e.name)}))})]})},N=function(){var e=Object(s.useContext)(m).people,t=Object(a.d)(),r=Object(b.a)(t,2),n=r[0],c=r[1],o=n.get("query")||"",d=n.get("sortOrder")||"",j=n.get("sortBy")||"",u=Object(l.f)(),h=function(){return o.toLowerCase()?e.filter((function(e){var t,r;return e.name.toLowerCase().includes(o)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(o))||(null===(r=e.fatherName)||void 0===r?void 0:r.toLowerCase().includes(o))})):e};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"filter-add",children:Object(i.jsx)("input",{className:"input",type:"text",placeholder:"Please enter a name",value:o,onChange:function(e){var t=e.target.value.toLowerCase();c(t||j||d?{query:t,sortBy:j,sortOrder:d}:{})}})}),Object(i.jsx)("div",{className:"filter-add",children:Object(i.jsx)("button",{onClick:function(){return u("/people/new")},type:"button",className:"button is-dark button-add",children:"Add person"})}),Object(i.jsx)(v,{people:function(){switch(j){case"name":case"sex":return h().sort((function(e,t){return"asc"===d?e[j].localeCompare(t[j]):t[j].localeCompare(e[j])}));case"born":case"died":return h().sort((function(e,t){return"asc"===d?+e[j]-+t[j]:+t[j]-+e[j]}));default:return h()}}()})]})},g=r(2),_=r(4),y=r(16),q=function(){var e,t,r,n,c,a,o=Object(s.useContext)(m),d=o.people,j=o.setPeople,u=Object(l.f)(),b=Object(y.a)({mode:"all"}),h=b.register,O=b.formState.errors,p=b.handleSubmit,x=b.reset,f=+(0,b.watch)("born");return Object(i.jsxs)("form",{className:"form",onSubmit:p((function(e){var t=e,r="".concat(t.name.toLowerCase(),"-").concat(t.born);t.slug=r,j([].concat(Object(_.a)(d),[t])),x(),u("/people")})),children:[Object(i.jsx)("input",Object(g.a)({className:"input",type:"text",placeholder:"Name"},h("name",{required:"Name is a required field"}))),Object(i.jsx)("div",{className:"error",children:(null===O||void 0===O?void 0:O.name)&&Object(i.jsx)("p",{children:null===O||void 0===O||null===(e=O.name)||void 0===e?void 0:e.message})}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{className:"radio",children:[Object(i.jsx)("input",Object(g.a)({type:"radio",value:"m"},h("sex",{required:"Sex is a required field"})))," Male "]}),Object(i.jsxs)("label",{className:"radio",children:[Object(i.jsx)("input",Object(g.a)({type:"radio",value:"f"},h("sex",{required:"Sex is a required field"})))," Female "]})]}),Object(i.jsx)("div",{className:"error",children:(null===O||void 0===O?void 0:O.sex)&&Object(i.jsx)("p",{children:null===O||void 0===O||null===(t=O.sex)||void 0===t?void 0:t.message})}),Object(i.jsx)("input",Object(g.a)({className:"input",type:"number",placeholder:"Born"},h("born",{required:"Born is a required field",min:{value:1400,message:"The range of years from 1400 to 2022"}}))),Object(i.jsx)("div",{className:"error",children:(null===O||void 0===O?void 0:O.born)&&Object(i.jsx)("p",{children:null===O||void 0===O||null===(r=O.born)||void 0===r?void 0:r.message})}),Object(i.jsx)("input",Object(g.a)({className:"input",type:"number",placeholder:"Died"},h("died",{required:"Died is a required field",min:{value:f,message:'The year must be greater than or equal to the "Born" field'},max:{value:2022,message:"The range of years from 1400 to 2022"}}))),Object(i.jsx)("div",{className:"error",children:(null===O||void 0===O?void 0:O.died)&&Object(i.jsx)("p",{children:null===O||void 0===O||null===(n=O.died)||void 0===n?void 0:n.message})}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",Object(g.a)(Object(g.a)({className:"form-select"},h("motherName",{required:"Mother name is a required field"})),{},{children:[Object(i.jsx)("option",{value:"",children:"Mother name"}),function(){var e=d.filter((function(e){return"f"===e.sex})),t=d.filter((function(e){return e.motherName})).filter((function(t){var r=e.find((function(e){return e.name===t.motherName}));return!(null!==r&&void 0!==r&&r.name)})),r=e.map((function(e){return e.name})),n=t.map((function(e){return e.motherName}));return[].concat(Object(_.a)(r),Object(_.a)(n))}().map((function(e,t){return Object(i.jsx)("option",{children:e},+t)}))]}))}),Object(i.jsx)("div",{className:"error",children:(null===O||void 0===O?void 0:O.motherName)&&Object(i.jsx)("p",{children:null===O||void 0===O||null===(c=O.motherName)||void 0===c?void 0:c.message})}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",Object(g.a)(Object(g.a)({className:"form-select"},h("fatherName",{required:"Father name is a required field"})),{},{children:[Object(i.jsx)("option",{value:"",children:"Father name"}),function(){var e=d.filter((function(e){return"m"===e.sex})),t=d.filter((function(e){return e.fatherName})).filter((function(t){var r=e.find((function(e){return e.name===t.fatherName}));return!(null!==r&&void 0!==r&&r.name)})),r=e.map((function(e){return e.name})),n=t.map((function(e){return e.fatherName}));return[].concat(Object(_.a)(r),Object(_.a)(n))}().map((function(e,t){return Object(i.jsx)("option",{children:e},+t)}))]}))}),Object(i.jsx)("div",{className:"error",children:(null===O||void 0===O?void 0:O.fatherName)&&Object(i.jsx)("p",{children:null===O||void 0===O||null===(a=O.fatherName)||void 0===a?void 0:a.message})}),Object(i.jsx)("input",{className:"submit",type:"submit",value:"Submit"})]})},C=function(){return Object(i.jsx)(h,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",element:Object(i.jsx)(j,{})}),Object(i.jsx)(l.a,{path:"/people",element:Object(i.jsx)(N,{})}),Object(i.jsx)(l.a,{path:"/people/:slug",element:Object(i.jsx)(N,{})}),Object(i.jsx)(l.a,{path:"/people/new",element:Object(i.jsx)(q,{})}),Object(i.jsx)(l.a,{path:"*",element:Object(i.jsx)(u,{})})]})]})})};c.a.render(Object(i.jsx)(a.a,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f7e8cc2a.chunk.js.map
(this["webpackJsonpreact-okr"]=this["webpackJsonpreact-okr"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(10),r=c.n(i),s=(c(16),c(11)),o=c(2),l="Select Category",j=c(3),d=c.n(j),b=c.p+"static/media/arrow.b9b01c5f.svg",u=c(0),h=function(e){var t=e.title,c=e.children,n=void 0===c?[]:c,i=Object(a.useState)(!0),r=Object(o.a)(i,2),s=r[0],l=r[1];return Object(u.jsxs)("div",{className:d.a.objective,children:[Object(u.jsxs)("div",{onClick:function(e){l((function(e){return!e}))},className:d.a.parent,children:[Object(u.jsx)("img",{src:b,alt:s?"close ":"open ",className:s?d.a.open:""}),Object(u.jsx)("div",{className:d.a.title,children:t})]}),s&&Object(u.jsx)("div",{className:d.a.child,children:n.map((function(e){return Object(u.jsx)("div",{className:d.a.role,children:e.title},e.id)}))})]})},O=c(9),p=c(5),f=c.n(p),v=c(8),_=c.n(v),m=function(){return Object(u.jsx)("div",{className:_.a.loading,children:Object(u.jsx)("img",{className:_.a.loader,alt:"Loading ...",src:"https://assets-global.website-files.com/5d8e324474cf44070af9c56b/5dad13bc06d077b3a3e6a832_favicon.png"})})},g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(!0),r=Object(o.a)(i,2),j=r[0],d=r[1],b=Object(a.useState)([]),p=Object(o.a)(b,2),v=p[0],_=p[1],g=Object(a.useState)(""),x=Object(o.a)(g,2),N=x[0],k=x[1];Object(a.useEffect)((function(){fetch("https://okrcentral.github.io/sample-okrs/db.json").then((function(e){return e.json()})).then((function(e){d(!1);var t=function(e){for(var t={},c={},a=[],n=[],i=1,r=0,s=Object(O.a)(e);r<s.length;r++){var o=s[r],j=o.id,d=o.category,b=o.parent_objective_id;c[d]=d,""===b?(o.children=[],t[j]=o):t[b]&&t[b].children.push(o)}for(var u=0,h=Object.keys(t);u<h.length;u++){var p=h[u];a.push(t[p])}for(var f=0,v=Object.keys(c);f<v.length;f++){var _={id:i,name:v[f]};n.push(_),i++}return n.length>0&&(n=[{id:0,name:l}].concat(Object(O.a)(n))),[a,n]}(e.data),c=Object(o.a)(t,2),a=c[0],i=c[1];n(a),_(i),i.length>0&&k(i[0].name)})).catch((function(){alert("Something went wrong, please try again!!")}))}),[]);return Object(u.jsxs)("div",{className:f.a.app,children:[v.length>0&&Object(u.jsx)("header",{className:f.a.header,children:Object(u.jsx)("div",{className:f.a.filter,children:Object(u.jsx)("select",{name:"selectFilters",value:N,onChange:function(e){var t=e.target.value;k(t)},children:v.map((function(e){var t=e.id,c=e.name;return Object(u.jsx)("option",{className:f.a.option,value:c,children:c},t)}))})})}),Object(u.jsx)("main",{children:j?Object(u.jsx)(m,{}):Object(u.jsx)(u.Fragment,{children:(N===l?c:c.filter((function(e){return e.category===N}))).map((function(e){return Object(u.jsx)(h,Object(s.a)({},e),e.id)}))})})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))},3:function(e,t,c){e.exports={objective:"Objective_objective__nd4BC",parent:"Objective_parent__29JOp",open:"Objective_open__3BPXT",title:"Objective_title__NyrIh",child:"Objective_child__14YbK",role:"Objective_role__2hON4"}},5:function(e,t,c){e.exports={app:"App_app__1v308",filter:"App_filter__1slqY"}},8:function(e,t,c){e.exports={loading:"Loading_loading__2yynj",loader:"Loading_loader__3lmjU",flickerAnimation:"Loading_flickerAnimation__1fL6Z"}}},[[18,1,2]]]);
//# sourceMappingURL=main.1f97361e.chunk.js.map
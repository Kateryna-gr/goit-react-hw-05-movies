"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[851],{851:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,i,s,c=r(861),u=r(439),a=r(757),o=r.n(a),l=r(791),d=r(87),p=r(597),h=r(689),x=r(168),f=r(867),v=r(705),b=(0,f.ZP)(v.gN)(t||(t=(0,x.Z)(["\n  width: 300px;\n  margin: 10px 16px;\n  //   margin-left: 16px;\n  border: 2px solid #c3acc1;\n  border-radius: 5px;\n\n  &:focus {\n    border: 2px solid #7c5979;\n  }\n\n  :focus-visible {\n    border: 2px solid #7c5979;\n  }\n"]))),m=f.ZP.button(i||(i=(0,x.Z)(["\n  width: 80px;\n  height: 26px;\n  margin-top: 10px;\n  cursor: pointer;\n  background-color: #f5edf5;\n  border: 1px solid #7c5979;\n  border-radius: 5px;\n"]))),g=f.ZP.li(s||(s=(0,x.Z)(["\n  list-style: square;\n  margin-bottom: 12px;\n  color: #7c5979;\n\n  :link {\n    color: #212121;\n  }\n\n  :visited {\n    color: #9b8099;\n  }\n\n  :hover {\n    font-weight: 700;\n    color: #7c5979;\n  }\n"]))),j=r(184),k=function(n){var e=n.searchedMovies,r=(0,h.TH)();if(0!==e.length)return(0,j.jsx)("div",{children:(0,j.jsx)("ul",{children:e.map((function(n){return(0,j.jsx)(g,{children:(0,j.jsx)(d.rU,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}))})})},Z=function(n){var e,r=n.changeQuery,t=(0,d.lr)(),i=(0,u.Z)(t,2),s=i[0],c=i[1],a=null!==(e=s.get("search"))&&void 0!==e?e:"";return(0,j.jsx)(v.J9,{initialValues:{input:""},onSubmit:function(n){var e;e=n.input,c({search:e})},children:(0,j.jsxs)(v.l0,{children:[(0,j.jsxs)(v.gN,{as:"label",children:["Search film:",(0,j.jsx)(b,{type:"input",name:"input",value:a,onInput:r})]}),(0,j.jsx)(m,{type:"submit",children:"Search"})]})})};function w(){var n,e=(0,d.lr)(),r=(0,u.Z)(e,2),t=r[0],i=r[1],s=null!==(n=t.get("search"))&&void 0!==n?n:"",a=(0,l.useState)(!1),h=(0,u.Z)(a,2),x=h[0],f=h[1],v=(0,l.useState)([]),b=(0,u.Z)(v,2),m=b[0],g=b[1];return(0,l.useEffect)((function(){function n(){return(n=(0,c.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,f(!1),n.next=6,(0,p.LI)(s);case 6:if(0!==(e=n.sent).results.length){n.next=10;break}return f(!0),n.abrupt("return");case 10:g(e.results),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),f(!0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])})))).apply(this,arguments)}g([]),function(){n.apply(this,arguments)}()}),[s]),(0,j.jsxs)("div",{children:[(0,j.jsx)(Z,{changeQuery:function(n){t.set("search",n.target.value),i(t)}}),x&&(0,j.jsx)("div",{children:"Films not found!"}),m.length>0&&(0,j.jsx)(k,{searchedMovies:m})]})}}}]);
//# sourceMappingURL=851.83d908ad.chunk.js.map
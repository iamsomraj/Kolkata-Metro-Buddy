(this["webpackJsonpmetro-app"]=this["webpackJsonpmetro-app"]||[]).push([[0],{134:function(e,t,c){"use strict";c.r(t);var n=c(154),r=c(0),a=c(36),s=c.n(a),j=c(159),i=c(84),l=c(62),o=c.n(l),b=c(80),d=c(3),O=c(147),h=c(136),x=c(157),u=c(149),p=c(150),g=c(151),m=c(39),f=c(152),y=c(161),C=c(88),S=c(146),v=c(81),k=c.n(v),w=c(155),I=c(144),N=c(145),B=c(160),F=c(2),M=function(e){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(w.a,{onClose:e.onClose,isCentered:!0,isOpen:e.isOpen,motionPreset:"slideInBottom",children:[Object(F.jsx)(w.g,{}),Object(F.jsxs)(w.d,{children:[Object(F.jsxs)(w.f,{children:["Card # ",e.cardNumber]}),Object(F.jsx)(w.c,{}),Object(F.jsx)(w.b,{children:e.response&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(I.a,{align:"center",justify:"center",children:[Object(F.jsx)(I.c,{children:"Card Balance"}),Object(F.jsxs)(I.d,{children:["\u20b9 ",e.response.balance.toFixed(2)]}),Object(F.jsxs)(I.b,{children:[e.response.lastUsedInGateOn," -"," ",e.response.validUpto]})]}),Object(F.jsxs)(N.a,{variant:"simple",children:[Object(F.jsx)(N.b,{children:"Card Information"}),Object(F.jsx)(N.g,{children:Object(F.jsxs)(N.h,{children:[Object(F.jsx)(N.f,{children:"Description"}),Object(F.jsx)(N.f,{children:"Value"})]})}),Object(F.jsxs)(N.c,{children:[Object(F.jsxs)(N.h,{children:[Object(F.jsx)(N.d,{children:"starting location"}),Object(F.jsx)(N.d,{children:e.response.startLocation})]}),Object(F.jsxs)(N.h,{children:[Object(F.jsx)(N.d,{children:"ending location"}),Object(F.jsx)(N.d,{children:e.response.endLocation})]}),Object(F.jsxs)(N.h,{children:[Object(F.jsx)(N.d,{children:"card last used at"}),Object(F.jsx)(N.d,{children:e.response.lastUsedInGateAtStn})]})]}),Object(F.jsx)(N.e,{children:Object(F.jsxs)(N.h,{children:[Object(F.jsx)(N.f,{children:"Description"}),Object(F.jsx)(N.f,{children:"Value"})]})})]}),Object(F.jsxs)(B.a,{status:"warning",children:[Object(F.jsx)(B.b,{}),"Current card information may vary. Please check at station for latest information."]})]})}),Object(F.jsx)(w.e,{children:Object(F.jsx)(C.a,{colorScheme:"blue",mr:3,onClick:e.onModalClose,children:"Close"})})]})]})})},J=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(d.a)(a,2),j=s[0],i=s[1],l=Object(r.useState)(null),v=Object(d.a)(l,2),w=v[0],I=v[1],N=Object(r.useState)(!1),B=Object(d.a)(N,2),J=B[0],z=B[1],A=Object(r.useState)(!1),D=Object(d.a)(A,2),E=D[0],G=D[1],L=function(){z(!1)},P=function(){var e=Object(b.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!j){e.next=11;break}return localStorage.setItem("cardNumber",JSON.stringify(c)),G(!0),"https://somrajproxy.herokuapp.com/",e.next=7,k.a.get("https://somrajproxy.herokuapp.com/https://mtp.indianrailways.gov.in/KolkataMetroPG/CardBalanceAction.jsp",{params:{cardNumber:c,reCardNumber:c}});case 7:n=e.sent,I(n.data),z(!0),G(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){!function(){var e=localStorage.getItem("cardNumber")?JSON.parse(localStorage.getItem("cardNumber")):null;n(e),i(e&&9===e.trim().length&&isFinite(parseInt(e)))}()}),[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(O.a,{align:"center",justify:"center",bg:Object(h.c)("gray.50","gray.800"),children:Object(F.jsxs)(x.a,{spacing:8,mx:"auto",maxW:"lg",py:12,px:6,children:[Object(F.jsx)(x.a,{align:"center",children:Object(F.jsxs)(u.a,{fontSize:"4xl",children:["See Your"," ",Object(F.jsx)(p.a,{as:"span",color:"green.400",children:"Balance"})]})}),Object(F.jsx)(g.a,{rounded:"lg",bg:Object(h.c)("white","gray.700"),boxShadow:"lg",p:8,children:Object(F.jsxs)(x.a,{spacing:4,children:[Object(F.jsxs)(m.a,{children:[Object(F.jsx)(f.a,{children:"Card Number"}),Object(F.jsx)(y.a,{type:"text",isInvalid:!j,value:c,placeholder:"Enter Card Number",onChange:function(e){n(e.target.value),i(9===e.target.value.trim().length&&isFinite(parseInt(e.target.value)))}})]}),Object(F.jsx)(x.a,{spacing:10,children:Object(F.jsx)(C.a,{type:"submit",disabled:!j||E,onClick:P,bg:"blue.400",color:"white",_hover:{bg:"blue.500"},children:E?Object(F.jsx)(S.a,{}):"Check Balance"})})]})})]})}),w&&Object(F.jsx)(M,{isOpen:J,onModalClose:function(){L()},onClose:L,cardNumber:c,response:w})]})},z=c(156),A=c(83),D=c(153),E=c(63),G=function(e){var t=Object(h.b)().toggleColorMode,c=Object(h.c)("dark","light"),n=Object(h.c)(E.a,E.b);return Object(F.jsx)(D.a,Object(A.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(F.jsx)(n,{}),"aria-label":"Switch to ".concat(c," mode")},e))},L=function(e){return Object(F.jsx)(g.a,{children:Object(F.jsxs)(O.a,{bg:Object(h.c)("white","gray.800"),color:Object(h.c)("gray.600","white"),minH:"60px",py:{base:2},px:{base:4},borderBottom:1,borderStyle:"solid",borderColor:Object(h.c)("gray.200","gray.900"),align:"center",children:[Object(F.jsx)(p.a,{textAlign:Object(z.a)({base:"center",md:"left"}),fontFamily:"heading",color:Object(h.c)("gray.800","white"),children:"Kolkata Metro Buddy"}),Object(F.jsx)(G,{justifySelf:"flex-end"})]})})},P=function(){return Object(F.jsxs)(j.a,{theme:i.theme,children:[Object(F.jsx)(L,{}),Object(F.jsx)(J,{})]})};s.a.render(Object(F.jsxs)(r.StrictMode,{children:[Object(F.jsx)(n.a,{}),Object(F.jsx)(P,{})]}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.1313a62b.chunk.js.map
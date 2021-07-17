(this["webpackJsonpmetro-app"]=this["webpackJsonpmetro-app"]||[]).push([[0],{134:function(e,t,c){"use strict";c.r(t);var n=c(154),r=c(0),s=c(36),a=c.n(s),j=c(159),i=c(83),l=c(62),o=c.n(l),b=c(79),d=c(3),O=c(147),h=c(136),x=c(157),u=c(149),g=c(150),p=c(151),m=c(39),f=c(152),y=c(160),C=c(87),S=c(80),v=c.n(S),w=c(155),k=c(144),I=c(145),N=c(146),B=c(2),F=function(e){return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(w.a,{onClose:e.onClose,isCentered:!0,isOpen:e.isOpen,motionPreset:"slideInBottom",children:[Object(B.jsx)(w.g,{}),Object(B.jsxs)(w.d,{children:[Object(B.jsxs)(w.f,{children:["Card # ",e.cardNumber]}),Object(B.jsx)(w.c,{}),Object(B.jsxs)(w.b,{children:[!e.response&&Object(B.jsx)(k.a,{}),e.response&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(I.a,{align:"center",justify:"center",children:[Object(B.jsx)(I.c,{children:"Card Balance"}),Object(B.jsxs)(I.d,{children:["\u20b9 ",e.response.balance.toFixed(2)]}),Object(B.jsxs)(I.b,{children:[e.response.lastUsedInGateOn," -"," ",e.response.validUpto]})]}),Object(B.jsxs)(N.a,{variant:"simple",children:[Object(B.jsx)(N.b,{children:"Card Information"}),Object(B.jsx)(N.g,{children:Object(B.jsxs)(N.h,{children:[Object(B.jsx)(N.f,{children:"Description"}),Object(B.jsx)(N.f,{children:"Value"})]})}),Object(B.jsxs)(N.c,{children:[Object(B.jsxs)(N.h,{children:[Object(B.jsx)(N.d,{children:"starting location"}),Object(B.jsx)(N.d,{children:e.response.startLocation})]}),Object(B.jsxs)(N.h,{children:[Object(B.jsx)(N.d,{children:"ending location"}),Object(B.jsx)(N.d,{children:e.response.endLocation})]}),Object(B.jsxs)(N.h,{children:[Object(B.jsx)(N.d,{children:"card last used at"}),Object(B.jsx)(N.d,{children:e.response.lastUsedInGateAtStn})]})]}),Object(B.jsx)(N.e,{children:Object(B.jsxs)(N.h,{children:[Object(B.jsx)(N.f,{children:"Description"}),Object(B.jsx)(N.f,{children:"Value"})]})})]})]})]}),Object(B.jsx)(w.e,{children:Object(B.jsx)(C.a,{colorScheme:"blue",mr:3,onClick:e.onModalClose,children:"Close"})})]})]})})},M=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(!1),a=Object(d.a)(s,2),j=a[0],i=a[1],l=Object(r.useState)(null),S=Object(d.a)(l,2),w=S[0],k=S[1],I=Object(r.useState)(!1),N=Object(d.a)(I,2),M=N[0],J=N[1],z=function(){J(!1)},A=function(){var e=Object(b.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!j){e.next=8;break}return localStorage.setItem("cardNumber",JSON.stringify(c)),e.next=5,v.a.get("https://mtp.indianrailways.gov.in/KolkataMetroPG/CardBalanceAction.jsp",{params:{cardNumber:c,reCardNumber:c}});case 5:n=e.sent,k(n.data),J(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){!function(){var e=localStorage.getItem("cardNumber")?JSON.parse(localStorage.getItem("cardNumber")):null;n(e),i(e&&9===e.trim().length&&isFinite(parseInt(e)))}()}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(O.a,{align:"center",justify:"center",bg:Object(h.c)("gray.50","gray.800"),children:Object(B.jsxs)(x.a,{spacing:8,mx:"auto",maxW:"lg",py:12,px:6,children:[Object(B.jsx)(x.a,{align:"center",children:Object(B.jsxs)(u.a,{fontSize:"4xl",children:["See Your "," ",Object(B.jsx)(g.a,{as:"span",color:"green.400",children:"Balance"})]})}),Object(B.jsx)(p.a,{rounded:"lg",bg:Object(h.c)("white","gray.700"),boxShadow:"lg",p:8,children:Object(B.jsxs)(x.a,{spacing:4,children:[Object(B.jsxs)(m.a,{children:[Object(B.jsx)(f.a,{children:"Card Number"}),Object(B.jsx)(y.a,{type:"text",isInvalid:!j,value:c,placeholder:"Enter Card Number",onChange:function(e){n(e.target.value),i(9===e.target.value.trim().length&&isFinite(parseInt(e.target.value)))}})]}),Object(B.jsx)(x.a,{spacing:10,children:Object(B.jsx)(C.a,{type:"submit",disabled:!j,onClick:A,bg:"blue.400",color:"white",_hover:{bg:"blue.500"},children:"Check Balance"})})]})})]})}),w&&Object(B.jsx)(F,{isOpen:M,onModalClose:function(){z()},onClose:z,cardNumber:c,response:w})]})},J=c(156),z=c(82),A=c(153),D=c(63),E=function(e){var t=Object(h.b)().toggleColorMode,c=Object(h.c)("dark","light"),n=Object(h.c)(D.a,D.b);return Object(B.jsx)(A.a,Object(z.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(B.jsx)(n,{}),"aria-label":"Switch to ".concat(c," mode")},e))},G=function(e){return Object(B.jsx)(p.a,{children:Object(B.jsxs)(O.a,{bg:Object(h.c)("white","gray.800"),color:Object(h.c)("gray.600","white"),minH:"60px",py:{base:2},px:{base:4},borderBottom:1,borderStyle:"solid",borderColor:Object(h.c)("gray.200","gray.900"),align:"center",children:[Object(B.jsx)(g.a,{textAlign:Object(J.a)({base:"center",md:"left"}),fontFamily:"heading",color:Object(h.c)("gray.800","white"),children:"Kolkata Metro Buddy"}),Object(B.jsx)(E,{justifySelf:"flex-end"})]})})},L=function(){return Object(B.jsxs)(j.a,{theme:i.theme,children:[Object(B.jsx)(G,{}),Object(B.jsx)(M,{})]})};a.a.render(Object(B.jsxs)(r.StrictMode,{children:[Object(B.jsx)(n.a,{}),Object(B.jsx)(L,{})]}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.6b15c67e.chunk.js.map
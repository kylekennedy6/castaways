(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{101:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(8),u=n(26),i=n(11),l=(n(95),function(e){return r.a.createElement("h2",null,e.tickerText)}),s=n(66),o=function(e){var t=Object(a.useContext)(i.a);return r.a.createElement("li",{className:"transcript-item"},r.a.createElement(u.a,{className:"transcript__content"},r.a.createElement(c.b,{to:"/users/".concat(t.username,"/transcripts/").concat(e.id,"/exchanges")},r.a.createElement("div",{className:"transcript-item__info"},r.a.createElement(l,e.ticker),r.a.createElement("h3",null,e.fiscalQuarter,e.fiscalYear),r.a.createElement("h4",null,"Filter Rating: ",e.programmaticRating),e.userTradeSubmission&&r.a.createElement("h4",null,e.userTradeSubmission.direction," on ",Object(s.c)(e.userTradeSubmission.entranceDate))))))};n(96),t.a=function(e){return 0===e.items.length?r.a.createElement(u.a,{className:"empty-list-card-center"},r.a.createElement("h2",null,"No transcripts found.")):r.a.createElement("ul",{className:"transcripts-list"},e.items.map((function(e){return r.a.createElement(o,{key:e.id,id:e.id,ticker:e.ticker,fiscalQuarter:e.fiscalQuarter,fiscalYear:e.fiscalYear,eventDate:e.eventDate,projectedReportDate:e.projectedReportDate,programmaticRating:e.programmaticRating,userTradeSubmission:e.userTradeSubmission})})))}},315:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),c=n(15),u=n(2),i=n(0),l=n.n(i),s=n(101),o=n(92),m=n(25),f=n(16),E=n(24),d=n(11);t.default=function(){var e=Object(i.useContext)(d.a),t=Object(i.useState)(),n=Object(u.a)(t,2),a=n[0],p=n[1],v=Object(E.a)(),h=v.isLoading,g=v.error,b=v.sendRequest,N=v.clearError;return Object(i.useEffect)((function(){(function(){var t=Object(c.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b("".concat("https://stocksleuth.herokuapp.com/api","/transcripts/").concat(e.username,"/unread"),"GET",null,{Authorization:"Bearer "+e.token});case 3:n=t.sent,p(n.transcripts),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[b,e.token,e.username]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-container"},l.a.createElement(o.a,null),l.a.createElement("div",{className:"content-container"},l.a.createElement(m.a,{error:g,onClear:N}),h&&l.a.createElement("div",{className:"center"},l.a.createElement(f.a,null)),!h&&a&&l.a.createElement(s.a,{items:a}))))}},66:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a),c=function(e){return new Date(e).toLocaleDateString([],{year:"numeric",month:"numeric",day:"numeric"})},u=function(){for(var e=new Date(Date.now()).getFullYear(),t=e+2,n=[],a=e-2;a<t;a++)n.push(a.toString());return n},i=function(){for(var e=[],t=0;t<9;t++)e.push(r.a.createElement("option",{value:t},t));return e},l=function(){for(var e=[],t=0;t<4;t++)e.push(r.a.createElement("option",{value:t},t));return e},s=function(){return["Very Bearish","Bearish","Neutral","Bullish","Very Bullish"].map((function(e){return r.a.createElement("option",{value:e},e)}))},o=function(){return["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-","E+","E","E-","F"].map((function(e){return r.a.createElement("option",{value:e},e)}))},m=function(){return["Consensus Decrease on NE","Consensus Increase on NE","Cut Guidance on NE","Raise Guidance on NE"].map((function(e){return r.a.createElement("option",{value:e},e)}))},f=function(){return["Short","Long","Bi-Directional"].map((function(e){return r.a.createElement("option",{value:e},e)}))}},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},92:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(11),u=(n(83),function(e){var t=Object(a.useContext)(c.a);return r.a.createElement("header",{className:"user-title"},r.a.createElement("h3",null,t.username,"'s ",function(){var e=window.location.href;return e.includes("unread")?"Unread Transcripts":e.includes("tier-one")?"Tier One Transcripts":e.includes("tier-two")?"Tier Two Transcripts":e.includes("upcoming")?"Upcoming Trades":e.includes("archives")?"Archives":void 0}()))}),i=n(2),l=(n(84),function(e){return r.a.createElement("header",{className:"user-header"},e.children)}),s=n(8),o=(n(85),function(e){var t=Object(a.useContext)(c.a);return r.a.createElement("ul",{className:"user-nav-links"},r.a.createElement("li",null,r.a.createElement(s.c,{to:"/users/".concat(t.username,"/upcoming-trades"),exact:!0},"Upcoming Trades")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/users/".concat(t.username,"/unread"),exact:!0},"Unread Transcripts")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/users/".concat(t.username,"/tier-one"),exact:!0},"Tier 1")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/users/".concat(t.username,"/tier-two"),exact:!0},"Tier 2")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/users/".concat(t.username,"/archives"),exact:!0},"Archives")))}),m=n(7),f=n.n(m),E=(n(86),function(e){var t=r.a.createElement("aside",{className:"user-dropdown"},e.children);return f.a.createPortal(t,document.getElementById("dropdown-hook"))}),d=n(18),p=(n(87),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],u=n[1];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(d.a,{onClick:function(){u(!1)}}),c&&r.a.createElement(E,null,r.a.createElement("nav",{className:"user-navigation__drawer-nav"},r.a.createElement(o,null))),r.a.createElement(l,null,r.a.createElement("button",{className:"user-navigation__menu-btn",onClick:function(){u(!0)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("nav",{className:"user-navigation__header-nav"},r.a.createElement(o,null))))});n(88),t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title-header-container"},r.a.createElement(u,null),r.a.createElement(p,null)))}},95:function(e,t,n){},96:function(e,t,n){}}]);
//# sourceMappingURL=13.f3cdad1a.chunk.js.map
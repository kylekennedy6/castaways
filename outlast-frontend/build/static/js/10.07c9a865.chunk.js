(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[10],{328:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),c=a(15),s=a(2),o=a(0),i=a.n(o),l=a(9),u=a(69),m=a(17),p=a(25),E=a(16),d=a(24),v=a(66),f=a(11),h=(a(68),function(){var e=Object(o.useContext)(f.a),t=Object(l.h)().transcriptId,a=Object(d.a)(),n=a.isLoading,u=a.error,h=a.sendRequest,b=a.clearError,g=Object(o.useState)(0),O=Object(s.a)(g,2),R=O[0],j=O[1],T=Object(o.useState)(0),P=Object(s.a)(T,2),S=P[0],k=P[1],y=Object(o.useState)(0),C=Object(s.a)(y,2),N=C[0],w=C[1],x=Object(o.useState)(0),L=Object(s.a)(x,2),_=L[0],A=L[1],B=Object(l.g)(),Y=function(){var a=Object(c.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,h("https://stocksleuth.herokuapp.com/api/tendencies","POST",JSON.stringify({beatsPastTwoYears:R,missesPastTwoYears:S,sameEventRaisesPastThree:N,sameEventCutsPastThree:_,transcript:t,creator:e.userId}),{Authorization:"Bearer "+e.token,"Content-Type":"application/json"});case 4:B.push("/"),B.push("/users/".concat(e.username,"/transcripts/").concat(t,"/tendencies")),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{error:u,onClear:b}),i.a.createElement("form",{className:"create-form",onSubmit:Y},i.a.createElement("h2",null,"Historical Tendencies:"),n&&i.a.createElement(E.a,{asOverlay:!0}),i.a.createElement("div",{className:"form-container"},i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Recent Beat/Miss History:"),i.a.createElement("label",null,"# of Beats Past Two Years:",i.a.createElement("select",{value:R,onChange:function(e){j(e.target.value)}},Object(v.a)())),i.a.createElement("label",null,"# of Misses Past Two Years:",i.a.createElement("select",{value:S,onChange:function(e){k(e.target.value)}},Object(v.a)()))),i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Recent Raise/Cut History:"),i.a.createElement("label",null,"# of Same Event Raises Past Three Years:",i.a.createElement("select",{value:N,onChange:function(e){w(e.target.value)}},Object(v.e)())),i.a.createElement("label",null,"# of Same Event Cuts Past Three Years:",i.a.createElement("select",{value:_,onChange:function(e){A(e.target.value)}},Object(v.e)())))),i.a.createElement("div",{className:"analysis-form__button"},i.a.createElement(m.a,{type:"submit"},"Submit"))))}),b=(a(82),function(e){var t=Object(o.useContext)(f.a),a=Object(l.h)().transcriptId,n=Object(d.a)(),u=n.isLoading,h=n.error,b=n.sendRequest,g=n.clearError,O=Object(o.useState)(e.beatsPastTwoYears),R=Object(s.a)(O,2),j=R[0],T=R[1],P=Object(o.useState)(e.missesPastTwoYears),S=Object(s.a)(P,2),k=S[0],y=S[1],C=Object(o.useState)(e.sameEventRaisesPastThree),N=Object(s.a)(C,2),w=N[0],x=N[1],L=Object(o.useState)(e.sameEventCutsPastThree),_=Object(s.a)(L,2),A=_[0],B=_[1],Y=Object(l.g)(),I=function(){var n=Object(c.a)(r.a.mark((function n(c){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,n.next=4,b("".concat("https://stocksleuth.herokuapp.com/api","/tendencies/").concat(e._id),"PATCH",JSON.stringify({beatsPastTwoYears:j,missesPastTwoYears:k,sameEventRaisesPastThree:w,sameEventCutsPastThree:A,tendenciesId:e._id,creator:t.userId}),{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 4:Y.push("/"),Y.push("/users/".concat(t.username,"/transcripts/").concat(a,"/tendencies")),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{error:h,onClear:g}),i.a.createElement("form",{className:"create-form",onSubmit:I},i.a.createElement("h2",null,"Update Historical Tendencies:"),u&&i.a.createElement(E.a,{asOverlay:!0}),i.a.createElement("div",{className:"form-container"},i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Recent Beat/Miss History:"),i.a.createElement("label",null,"# of Beats Past Two Years:",i.a.createElement("select",{value:j,onChange:function(e){T(e.target.value)}},Object(v.a)())),i.a.createElement("label",null,"# of Misses Past Two Years:",i.a.createElement("select",{value:k,onChange:function(e){y(e.target.value)}},Object(v.a)()))),i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Recent Raise/Cut History:"),i.a.createElement("label",null,"# of Same Event Raises Past Three Years:",i.a.createElement("select",{value:w,onChange:function(e){x(e.target.value)}},Object(v.e)())),i.a.createElement("label",null,"# of Same Event Cuts Past Three Years:",i.a.createElement("select",{value:A,onChange:function(e){B(e.target.value)}},Object(v.e)())))),i.a.createElement("div",{className:"analysis-form__button"},i.a.createElement(m.a,{type:"submit"},"Update"))))}),g=function(e){return e._id?i.a.createElement(b,e):i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null))};t.default=function(){var e=Object(o.useContext)(f.a),t=Object(l.h)().transcriptId,a=Object(o.useState)(),n=Object(s.a)(a,2),m=n[0],v=n[1],h=Object(d.a)(),b=h.isLoading,O=h.error,R=h.sendRequest,j=h.clearError;return Object(o.useEffect)((function(){(function(){var a=Object(c.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R("".concat("https://stocksleuth.herokuapp.com/api","/tendencies/").concat(e.username,"/").concat(t),"GET",null,{Authorization:"Bearer "+e.token});case 3:n=a.sent,v(n.tendencies),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}})()()}),[R,e.token,e.username,t]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"main-container"},i.a.createElement(u.a,null),i.a.createElement("div",{className:"content-container"},i.a.createElement(p.a,{error:O,onClear:j}),b&&i.a.createElement("div",{className:"center"},i.a.createElement(E.a,null)),!b&&i.a.createElement(g,m))))}},61:function(e,t,a){},66:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"h",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"g",(function(){return l})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n),c=function(e){return new Date(e).toLocaleDateString([],{year:"numeric",month:"numeric",day:"numeric"})},s=function(){for(var e=new Date(Date.now()).getFullYear(),t=e+2,a=[],n=e-2;n<t;n++)a.push(n.toString());return a},o=function(){for(var e=[],t=0;t<9;t++)e.push(r.a.createElement("option",{value:t},t));return e},i=function(){for(var e=[],t=0;t<4;t++)e.push(r.a.createElement("option",{value:t},t));return e},l=function(){return["Very Bearish","Bearish","Neutral","Bullish","Very Bullish"].map((function(e){return r.a.createElement("option",{value:e},e)}))},u=function(){return["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-","E+","E","E-","F"].map((function(e){return r.a.createElement("option",{value:e},e)}))},m=function(){return["Consensus Decrease on NE","Consensus Increase on NE","Cut Guidance on NE","Raise Guidance on NE"].map((function(e){return r.a.createElement("option",{value:e},e)}))},p=function(){return["Short","Long","Bi-Directional"].map((function(e){return r.a.createElement("option",{value:e},e)}))}},68:function(e,t,a){},69:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(12),s=a.n(c),o=a(15),i=a(2),l=a(9),u=a(25),m=a(16),p=a(24),E=a(11),d=(a(71),a(17)),v=(a(61),function(){var e=Object(n.useContext)(E.a),t=Object(l.h)().transcriptId,a=Object(p.a)(),c=a.isLoading,v=a.error,f=a.sendRequest,h=a.clearError,b=Object(n.useState)("Unrated"),g=Object(i.a)(b,2),O=g[0],R=g[1],j=window.location.href.split(3e3)[1],T=Object(l.g)(),P=function(){var a=Object(o.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,f("https://stocksleuth.herokuapp.com/api/transcriptRatings","POST",JSON.stringify({rating:O,transcript:t,creator:e.userId}),{Authorization:"Bearer "+e.token,"Content-Type":"application/json"});case 4:T.push("/"),T.push(j),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:v,onClear:h}),r.a.createElement("form",{className:"rating-form",onSubmit:P},c&&r.a.createElement(m.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("label",{className:"transcript-rating__label"},"Transcript Rating:",r.a.createElement("select",{value:O,onChange:function(e){R(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Empty"},"Empty"),r.a.createElement("option",{value:"Weak"},"Weak"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier Two"},"(Pre-Report): Short - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier Two"},"(Pre-Report): Long - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier One"},"(Pre-Report): Short - Tier One"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier One"},"(Pre-Report): Long - Tier One"),r.a.createElement("option",{value:"(Post-Report): Short - Success"},"(Post-Report): Short - Success"),r.a.createElement("option",{value:"(Post-Report): Long - Success"},"(Post-Report): Long - Success"),r.a.createElement("option",{value:"(Post-Report): Short - Misinterpreted"},"(Post-Report): Short - Misinterpreted Evidence"),r.a.createElement("option",{value:"(Post-Report): Long - Misinterpreted"},"(Post-Report): Long - Misinterpreted Evidence"),r.a.createElement("option",{value:"(Post-Report): Short - Adverse Reaction"},"(Post-Report): Short - Adverse Reaction"),r.a.createElement("option",{value:"(Post-Report): Long - Adverse Reaction"},"(Post-Report): Long - Adverse Reaction")))),r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("div",{className:"transcript-rating-form__button"},r.a.createElement(d.a,{type:"submit"},"Update Transcript Rating"))))))}),f=function(e){var t=Object(n.useContext)(E.a),a=Object(p.a)(),c=a.isLoading,l=a.error,v=a.sendRequest,f=a.clearError,h=Object(n.useState)(e.rating),b=Object(i.a)(h,2),g=b[0],O=b[1],R=function(){var a=Object(o.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,v("".concat("https://stocksleuth.herokuapp.com/api","/transcriptRatings/").concat(e._id),"PATCH",JSON.stringify({rating:g,transcriptRatingId:e._id,creator:t.userId}),{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 4:a.next=8;break;case 6:a.prev=6,a.t0=a.catch(1);case 8:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:l,onClear:f}),r.a.createElement("form",{className:"rating-form",onSubmit:R},c&&r.a.createElement(m.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("label",{className:"transcript-rating__label"},"Transcript Rating:",r.a.createElement("select",{value:g,onChange:function(e){O(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Empty"},"Empty"),r.a.createElement("option",{value:"Weak"},"Weak"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier Two"},"(Pre-Report): Short - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier Two"},"(Pre-Report): Long - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier One"},"(Pre-Report): Short - Tier One"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier One"},"(Pre-Report): Long - Tier One"),r.a.createElement("option",{value:"(Post-Report): Short - Success"},"(Post-Report): Short - Success"),r.a.createElement("option",{value:"(Post-Report): Long - Success"},"(Post-Report): Long - Success"),r.a.createElement("option",{value:"(Post-Report): Short - Misinterpreted"},"(Post-Report): Short - Misinterpreted"),r.a.createElement("option",{value:"(Post-Report): Long - Misinterpreted"},"(Post-Report): Long - Misinterpreted"),r.a.createElement("option",{value:"(Post-Report): Short - Adverse Reaction"},"(Post-Report): Short - Adverse Reaction"),r.a.createElement("option",{value:"(Post-Report): Long - Adverse Reaction"},"(Post-Report): Long - Adverse Reaction")))),r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("div",{className:"transcript-rating-form__button"},r.a.createElement(d.a,{type:"submit"},"Update Transcript Rating"))))))},h=function(){var e=Object(n.useContext)(E.a),t=Object(l.h)().transcriptId,a=Object(n.useState)(),c=Object(i.a)(a,2),d=c[0],h=c[1],b=Object(p.a)(),g=b.isLoading,O=b.error,R=b.sendRequest,j=b.clearError;return Object(n.useEffect)((function(){(function(){var a=Object(o.a)(s.a.mark((function a(){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R("".concat("https://stocksleuth.herokuapp.com/api","/transcriptRatings/").concat(e.username,"/").concat(t),"GET",null,{Authorization:"Bearer "+e.token});case 3:n=a.sent,h(n.transcriptRating),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}})()()}),[R,e.token,e.username,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:O,onClear:j}),g&&r.a.createElement("div",{className:"center"},r.a.createElement(m.a,null)),r.a.createElement("header",{className:"rating-header"},!g&&d&&!d._id&&r.a.createElement(v,null),!g&&d&&d._id&&r.a.createElement(f,d)))},b=function(){var e=Object(n.useContext)(E.a),t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],d=a[1],v=Object(p.a)(),f=v.isLoading,b=v.error,g=v.sendRequest,O=v.clearError,R=Object(l.h)().transcriptId;return Object(n.useEffect)((function(){(function(){var t=Object(o.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g("".concat("https://stocksleuth.herokuapp.com/api","/transcripts/").concat(R),"GET",null,{Authorization:"Bearer "+e.token});case 3:a=t.sent,d(a.transcript),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[g,e.token,e.username,R]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:b,onClear:O}),f&&r.a.createElement("div",{className:"center"},r.a.createElement(m.a,null)),!f&&c&&r.a.createElement("header",{className:"transcript-title"},r.a.createElement("h2",null,c.ticker.tickerText," ",c.fiscalQuarter," ",c.fiscalYear,": ",function(){var e=window.location.href;return e.includes("exchanges")?"Highly-Rated QA":e.includes("opening-statements")?"Highly-Rated OS":e.includes("full-transcript")?"Full Transcript":e.includes("primary-evidence")?"Upcoming Trades":e.includes("guidance-versus-consensus")?"Guidance vs. Consensus":e.includes("past-events")?"Past Events":e.includes("tendencies")?"Tendencies":e.includes("sentiment")?"Sentiment":e.includes("trade-submission")?"Trade Submission":e.includes("reaction-evaluation")?"Reaction Evaluation":void 0}())),r.a.createElement(h,null))},g=(a(72),function(e){return r.a.createElement("header",{className:"transcript-header"},e.children)}),O=a(8),R=(a(73),function(e){var t=Object(n.useContext)(E.a),a=Object(l.h)().transcriptId;return r.a.createElement("ul",{className:"transcript-nav-links"},r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/exchanges"),exact:!0},"QA")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/opening-statements"),exact:!0},"OS")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/full-transcript"),exact:!0},"Full Transcript")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/guidance-versus-consensus"),exact:!0},"Guidance vs. Consensus")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/past-events"),exact:!0},"Past Events")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/tendencies"),exact:!0},"Tendencies")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/sentiment"),exact:!0},"Sentiment")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/trade-submission"),exact:!0},"Trade Submission")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/reaction-evaluation"),exact:!0},"Reaction Evaluation")))}),j=a(7),T=a.n(j),P=(a(74),function(e){var t=r.a.createElement("aside",{className:"transcript-dropdown"},e.children);return T.a.createPortal(t,document.getElementById("dropdown-hook"))}),S=a(18),k=(a(75),function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],s=a[1];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(S.a,{onClick:function(){s(!1)}}),c&&r.a.createElement(P,null,r.a.createElement("nav",{className:"transcript-navigation__drawer-nav"},r.a.createElement(R,null))),r.a.createElement(g,null,r.a.createElement("button",{className:"transcript-navigation__menu-btn",onClick:function(){s(!0)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("nav",{className:"transcript-navigation__header-nav"},r.a.createElement(R,null))))});a(76),t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"transcript-home-title-container"},r.a.createElement(b,null),r.a.createElement(k,null)))}},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},82:function(e,t,a){}}]);
//# sourceMappingURL=10.07c9a865.chunk.js.map
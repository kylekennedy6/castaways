(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],{141:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(26),i=(a(200),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"answer-item"},r.a.createElement("h4",null,"A: ",e.executive),r.a.createElement("p",null,e.answer)))}),o=(a(201),function(e){return 0===e.items.length?r.a.createElement("div",{className:"answer-container"},r.a.createElement(c.a,null,r.a.createElement("h2",null,"No answers found for this exchange."))):r.a.createElement("div",{className:"answer-container"},e.items.map((function(e){return r.a.createElement(i,{key:e.executive,executive:e.executive,answer:e.answer})})))}),l=(a(202),a(203),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"question-item"},r.a.createElement("h4",null,"Q: ",e.analyst),r.a.createElement("p",null,e.questionText)))}),s=a(12),u=a.n(s),m=a(15),p=a(2),v=a(9),E=a(17),d=a(25),g=a(16),h=a(11),f=a(24),b=(a(61),function(e){var t=Object(n.useContext)(h.a),a=Object(v.h)().transcriptId,c=Object(f.a)(),i=c.isLoading,o=c.error,l=c.sendRequest,s=c.clearError,b=Object(n.useState)("Unrated"),R=Object(p.a)(b,2),y=R[0],O=R[1],k=Object(n.useState)("Unrated"),N=Object(p.a)(k,2),x=N[0],P=N[1],S=Object(n.useState)("Unrated"),j=Object(p.a)(S,2),T=j[0],C=j[1],L=Object(n.useState)(!1),w=Object(p.a)(L,2),A=w[0],G=w[1],_=Object(n.useState)(!1),U=Object(p.a)(_,2),F=U[0],q=U[1],I=Object(v.g)(),H=function(){var n=Object(m.a)(u.a.mark((function n(r){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,n.next=4,l("https://stocksleuth.herokuapp.com/api/exchangeRatings","POST",JSON.stringify({contextRating:y,questionRating:x,overallRating:T,primaryEvidence:A,contraryEvidence:F,exchange:e.id,creator:t.userId}),{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 4:I.push("/"),I.push("/users/".concat(t.username,"/transcripts/").concat(a,"/exchanges")),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{error:o,onClear:s}),r.a.createElement("form",{className:"rating-form",onSubmit:H},i&&r.a.createElement(g.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"ratings-side-by-side-container"},r.a.createElement("label",null,"Context Rating:",r.a.createElement("select",{value:y,onChange:function(e){O(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Off-Topic"},"Off-Topic"),r.a.createElement("option",{value:"Future-Looking"},"Future-Looking"),r.a.createElement("option",{value:"Secondary Guidance"},"Secondary Guidance"),r.a.createElement("option",{value:"Primary Guidance"},"Primary Guidance"))),r.a.createElement("label",null,"Question Rating:",r.a.createElement("select",{value:x,onChange:function(e){P(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Neutral"},"Neutral"),r.a.createElement("option",{value:"Concern"},"Concern"),r.a.createElement("option",{value:"Optimism"},"Optimism"),r.a.createElement("option",{value:"Negative Skepticism"},"Negative Skepticism"),r.a.createElement("option",{value:"Positive Skepticism"},"Positive Skepticism"))),r.a.createElement("label",null,"Overall Rating:",r.a.createElement("select",{value:T,onChange:function(e){C(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"No Hypothesis"},"No Hypothesis"),r.a.createElement("option",{value:"Concern About Near-Term Performance"},"Concern About Near-Term Performance"),r.a.createElement("option",{value:"Optimism About Near-Term Performance"},"Optimism About Near-Term Performance"),r.a.createElement("option",{value:"Possibly Aggressive Guidance"},"Possibly Aggressive Guidance"),r.a.createElement("option",{value:"Possibly Conservative Guidance"},"Possibly Conservative Guidance"),r.a.createElement("option",{value:"Likely Aggressive Guidance"},"Likely Aggressive Guidance"),r.a.createElement("option",{value:"Likely Conservative Guidance"},"Likely Conservative Guidance"),r.a.createElement("option",{value:"Likely Guidance Cut on Next Event"},"Likely Guidance Cut on Next Event"),r.a.createElement("option",{value:"Likely Guidance Raise on Next Event"},"Likely Guidance Raise on Next Event")))),r.a.createElement("div",{className:"ratings-side-by-side-container"},r.a.createElement("label",null,"Primary Evidence (Y/N):",r.a.createElement("input",{name:"primaryEvidence",type:"checkbox",onChange:function(e){G(!A)},checked:A})),r.a.createElement("label",null,"Contrary Evidence (Y/N)?:",r.a.createElement("input",{name:"contraryEvidence",type:"checkbox",onChange:function(e){q(e.target.checked)},checked:F})),r.a.createElement("div",{className:"rating-form__button"},r.a.createElement(E.a,{type:"submit"},"Update Ratings"))))))}),R=function(e){var t=Object(n.useContext)(h.a),a=Object(f.a)(),c=a.isLoading,i=a.error,o=a.sendRequest,l=a.clearError,s=Object(n.useState)(e.contextRating),v=Object(p.a)(s,2),b=v[0],R=v[1],y=Object(n.useState)(e.questionRating),O=Object(p.a)(y,2),k=O[0],N=O[1],x=Object(n.useState)(e.overallRating),P=Object(p.a)(x,2),S=P[0],j=P[1],T=Object(n.useState)(e.primaryEvidence),C=Object(p.a)(T,2),L=C[0],w=C[1],A=Object(n.useState)(e.contraryEvidence),G=Object(p.a)(A,2),_=G[0],U=G[1],F=function(){var a=Object(m.a)(u.a.mark((function a(n){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,o("".concat("https://stocksleuth.herokuapp.com/api","/exchangeRatings/").concat(e._id),"PATCH",JSON.stringify({contextRating:b,questionRating:k,overallRating:S,primaryEvidence:L,contraryEvidence:_,exchangeRatingId:e._id,creator:t.userId}),{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 4:a.next=8;break;case 6:a.prev=6,a.t0=a.catch(1);case 8:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{error:i,onClear:l}),r.a.createElement("form",{className:"rating-form rating-form-title",onSubmit:F},c&&r.a.createElement(g.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"ratings-side-by-side-container"},r.a.createElement("label",null,"Context Rating:",r.a.createElement("select",{value:b,onChange:function(e){R(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Off-Topic"},"Off-Topic"),r.a.createElement("option",{value:"Future-Looking"},"Future-Looking"),r.a.createElement("option",{value:"Secondary Guidance"},"Secondary Guidance"),r.a.createElement("option",{value:"Primary Guidance"},"Primary Guidance"))),r.a.createElement("label",null,"Question Rating:",r.a.createElement("select",{value:k,onChange:function(e){N(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Neutral"},"Neutral"),r.a.createElement("option",{value:"Concern"},"Concern"),r.a.createElement("option",{value:"Optimism"},"Optimism"),r.a.createElement("option",{value:"Negative Skepticism"},"Negative Skepticism"),r.a.createElement("option",{value:"Positive Skepticism"},"Positive Skepticism"))),r.a.createElement("label",null,"Overall Rating:",r.a.createElement("select",{value:S,onChange:function(e){j(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"No Hypothesis"},"No Hypothesis"),r.a.createElement("option",{value:"Concern About Near-Term Performance"},"Concern About Near-Term Performance"),r.a.createElement("option",{value:"Optimism About Near-Term Performance"},"Optimism About Near-Term Performance"),r.a.createElement("option",{value:"Possibly Aggressive Guidance"},"Possibly Aggressive Guidance"),r.a.createElement("option",{value:"Possibly Conservative Guidance"},"Possibly Conservative Guidance"),r.a.createElement("option",{value:"Likely Aggressive Guidance"},"Likely Aggressive Guidance"),r.a.createElement("option",{value:"Likely Conservative Guidance"},"Likely Conservative Guidance"),r.a.createElement("option",{value:"Likely Guidance Cut on Next Event"},"Likely Guidance Cut on Next Event"),r.a.createElement("option",{value:"Likely Guidance Raise on Next Event"},"Likely Guidance Raise on Next Event")))),r.a.createElement("div",{className:"ratings-side-by-side-container"},r.a.createElement("label",null,"Primary Evidence (Y/N):",r.a.createElement("input",{name:"primaryEvidence",type:"checkbox",onChange:function(e){w(e.target.checked)},checked:L})),r.a.createElement("label",null,"Contrary Evidence (Y/N)?:",r.a.createElement("input",{name:"contraryEvidence",type:"checkbox",onChange:function(e){U(e.target.checked)},checked:_})),r.a.createElement("div",{className:"rating-form__button"},r.a.createElement(E.a,{type:"submit"},"Update Ratings"))))))},y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"exchange-item"},r.a.createElement(c.a,{className:"exchange-item__content"},r.a.createElement("h3",null,"QA",e.number," (Programmatic Rating: ",e.programmaticRating,")"),r.a.createElement(l,e),r.a.createElement(o,{items:e.answers}),!e.exchangeRating&&r.a.createElement(b,e),e.exchangeRating&&r.a.createElement(R,e.exchangeRating))))};a(204),t.a=function(e){return 0===e.items.length?r.a.createElement(c.a,{className:"empty-list-card"},r.a.createElement("h2",null,"No exchanges found.")):r.a.createElement("ul",{className:"exchange-list"},e.items.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,number:e.number,analyst:e.analyst,questionText:e.questionText,answers:e.answers,exchangeRating:e.userExchangeRating,programmaticRating:e.programmaticRating})})))}},200:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},61:function(e,t,a){},69:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=a(15),l=a(2),s=a(9),u=a(25),m=a(16),p=a(24),v=a(11),E=(a(71),a(17)),d=(a(61),function(){var e=Object(n.useContext)(v.a),t=Object(s.h)().transcriptId,a=Object(p.a)(),c=a.isLoading,d=a.error,g=a.sendRequest,h=a.clearError,f=Object(n.useState)("Unrated"),b=Object(l.a)(f,2),R=b[0],y=b[1],O=window.location.href.split(3e3)[1],k=Object(s.g)(),N=function(){var a=Object(o.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,g("https://stocksleuth.herokuapp.com/api/transcriptRatings","POST",JSON.stringify({rating:R,transcript:t,creator:e.userId}),{Authorization:"Bearer "+e.token,"Content-Type":"application/json"});case 4:k.push("/"),k.push(O),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:d,onClear:h}),r.a.createElement("form",{className:"rating-form",onSubmit:N},c&&r.a.createElement(m.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("label",{className:"transcript-rating__label"},"Transcript Rating:",r.a.createElement("select",{value:R,onChange:function(e){y(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Empty"},"Empty"),r.a.createElement("option",{value:"Weak"},"Weak"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier Two"},"(Pre-Report): Short - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier Two"},"(Pre-Report): Long - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier One"},"(Pre-Report): Short - Tier One"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier One"},"(Pre-Report): Long - Tier One"),r.a.createElement("option",{value:"(Post-Report): Short - Success"},"(Post-Report): Short - Success"),r.a.createElement("option",{value:"(Post-Report): Long - Success"},"(Post-Report): Long - Success"),r.a.createElement("option",{value:"(Post-Report): Short - Misinterpreted"},"(Post-Report): Short - Misinterpreted Evidence"),r.a.createElement("option",{value:"(Post-Report): Long - Misinterpreted"},"(Post-Report): Long - Misinterpreted Evidence"),r.a.createElement("option",{value:"(Post-Report): Short - Adverse Reaction"},"(Post-Report): Short - Adverse Reaction"),r.a.createElement("option",{value:"(Post-Report): Long - Adverse Reaction"},"(Post-Report): Long - Adverse Reaction")))),r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("div",{className:"transcript-rating-form__button"},r.a.createElement(E.a,{type:"submit"},"Update Transcript Rating"))))))}),g=function(e){var t=Object(n.useContext)(v.a),a=Object(p.a)(),c=a.isLoading,s=a.error,d=a.sendRequest,g=a.clearError,h=Object(n.useState)(e.rating),f=Object(l.a)(h,2),b=f[0],R=f[1],y=function(){var a=Object(o.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,d("".concat("https://stocksleuth.herokuapp.com/api","/transcriptRatings/").concat(e._id),"PATCH",JSON.stringify({rating:b,transcriptRatingId:e._id,creator:t.userId}),{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 4:a.next=8;break;case 6:a.prev=6,a.t0=a.catch(1);case 8:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:s,onClear:g}),r.a.createElement("form",{className:"rating-form",onSubmit:y},c&&r.a.createElement(m.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("label",{className:"transcript-rating__label"},"Transcript Rating:",r.a.createElement("select",{value:b,onChange:function(e){R(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Empty"},"Empty"),r.a.createElement("option",{value:"Weak"},"Weak"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier Two"},"(Pre-Report): Short - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier Two"},"(Pre-Report): Long - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier One"},"(Pre-Report): Short - Tier One"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier One"},"(Pre-Report): Long - Tier One"),r.a.createElement("option",{value:"(Post-Report): Short - Success"},"(Post-Report): Short - Success"),r.a.createElement("option",{value:"(Post-Report): Long - Success"},"(Post-Report): Long - Success"),r.a.createElement("option",{value:"(Post-Report): Short - Misinterpreted"},"(Post-Report): Short - Misinterpreted"),r.a.createElement("option",{value:"(Post-Report): Long - Misinterpreted"},"(Post-Report): Long - Misinterpreted"),r.a.createElement("option",{value:"(Post-Report): Short - Adverse Reaction"},"(Post-Report): Short - Adverse Reaction"),r.a.createElement("option",{value:"(Post-Report): Long - Adverse Reaction"},"(Post-Report): Long - Adverse Reaction")))),r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("div",{className:"transcript-rating-form__button"},r.a.createElement(E.a,{type:"submit"},"Update Transcript Rating"))))))},h=function(){var e=Object(n.useContext)(v.a),t=Object(s.h)().transcriptId,a=Object(n.useState)(),c=Object(l.a)(a,2),E=c[0],h=c[1],f=Object(p.a)(),b=f.isLoading,R=f.error,y=f.sendRequest,O=f.clearError;return Object(n.useEffect)((function(){(function(){var a=Object(o.a)(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y("".concat("https://stocksleuth.herokuapp.com/api","/transcriptRatings/").concat(e.username,"/").concat(t),"GET",null,{Authorization:"Bearer "+e.token});case 3:n=a.sent,h(n.transcriptRating),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}})()()}),[y,e.token,e.username,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:R,onClear:O}),b&&r.a.createElement("div",{className:"center"},r.a.createElement(m.a,null)),r.a.createElement("header",{className:"rating-header"},!b&&E&&!E._id&&r.a.createElement(d,null),!b&&E&&E._id&&r.a.createElement(g,E)))},f=function(){var e=Object(n.useContext)(v.a),t=Object(n.useState)(),a=Object(l.a)(t,2),c=a[0],E=a[1],d=Object(p.a)(),g=d.isLoading,f=d.error,b=d.sendRequest,R=d.clearError,y=Object(s.h)().transcriptId;return Object(n.useEffect)((function(){(function(){var t=Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b("".concat("https://stocksleuth.herokuapp.com/api","/transcripts/").concat(y),"GET",null,{Authorization:"Bearer "+e.token});case 3:a=t.sent,E(a.transcript),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[b,e.token,e.username,y]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:f,onClear:R}),g&&r.a.createElement("div",{className:"center"},r.a.createElement(m.a,null)),!g&&c&&r.a.createElement("header",{className:"transcript-title"},r.a.createElement("h2",null,c.ticker.tickerText," ",c.fiscalQuarter," ",c.fiscalYear,": ",function(){var e=window.location.href;return e.includes("exchanges")?"Highly-Rated QA":e.includes("opening-statements")?"Highly-Rated OS":e.includes("full-transcript")?"Full Transcript":e.includes("primary-evidence")?"Upcoming Trades":e.includes("guidance-versus-consensus")?"Guidance vs. Consensus":e.includes("past-events")?"Past Events":e.includes("tendencies")?"Tendencies":e.includes("sentiment")?"Sentiment":e.includes("trade-submission")?"Trade Submission":e.includes("reaction-evaluation")?"Reaction Evaluation":void 0}())),r.a.createElement(h,null))},b=(a(72),function(e){return r.a.createElement("header",{className:"transcript-header"},e.children)}),R=a(8),y=(a(73),function(e){var t=Object(n.useContext)(v.a),a=Object(s.h)().transcriptId;return r.a.createElement("ul",{className:"transcript-nav-links"},r.a.createElement("li",null,r.a.createElement(R.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/exchanges"),exact:!0},"QA")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/opening-statements"),exact:!0},"OS")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/full-transcript"),exact:!0},"Full Transcript")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/guidance-versus-consensus"),exact:!0},"Guidance vs. Consensus")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/past-events"),exact:!0},"Past Events")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/tendencies"),exact:!0},"Tendencies")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/sentiment"),exact:!0},"Sentiment")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/trade-submission"),exact:!0},"Trade Submission")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/reaction-evaluation"),exact:!0},"Reaction Evaluation")))}),O=a(7),k=a.n(O),N=(a(74),function(e){var t=r.a.createElement("aside",{className:"transcript-dropdown"},e.children);return k.a.createPortal(t,document.getElementById("dropdown-hook"))}),x=a(18),P=(a(75),function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(x.a,{onClick:function(){i(!1)}}),c&&r.a.createElement(N,null,r.a.createElement("nav",{className:"transcript-navigation__drawer-nav"},r.a.createElement(y,null))),r.a.createElement(b,null,r.a.createElement("button",{className:"transcript-navigation__menu-btn",onClick:function(){i(!0)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("nav",{className:"transcript-navigation__header-nav"},r.a.createElement(y,null))))});a(76),t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"transcript-home-title-container"},r.a.createElement(f,null),r.a.createElement(P,null)))}},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){}}]);
//# sourceMappingURL=1.9b2ae1a6.chunk.js.map
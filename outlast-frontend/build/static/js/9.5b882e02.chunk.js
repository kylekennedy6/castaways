(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{327:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),c=a(15),l=a(2),s=a(0),i=a.n(s),o=a(9),u=a(69),m=a(21),p=a(17),d=a(25),h=a(16),E=a(66),v=a(14),b=a(27),g=a(24),f=a(11),O=(a(68),function(){var e=Object(s.useContext)(f.a),t=Object(o.h)().transcriptId,a=Object(g.a)(),n=a.isLoading,u=a.error,O=a.sendRequest,j=a.clearError,R=Object(s.useState)(),S=Object(l.a)(R,2),k=S[0],y=S[1];Object(s.useEffect)((function(){(function(){var a=Object(c.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O("".concat("https://stocksleuth.herokuapp.com/api","/transcripts/").concat(t),"GET",null,{Authorization:"Bearer "+e.token});case 3:n=a.sent,y(n.transcript),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}})()()}),[O,e.token,e.username,t]);var P=Object(s.useState)("Neutral"),C=Object(l.a)(P,2),T=C[0],x=C[1],w=Object(s.useState)("Neutral"),N=Object(l.a)(w,2),I=N[0],F=N[1],B=Object(s.useState)("C"),L=Object(l.a)(B,2),A=L[0],_=L[1],M=Object(s.useState)("C"),V=Object(l.a)(M,2),D=V[0],G=V[1],q=Object(s.useState)("C"),z=Object(l.a)(q,2),U=z[0],J=z[1],Q=Object(s.useState)("C"),H=Object(l.a)(Q,2),W=H[0],Y=H[1],K=Object(s.useState)("C"),X=Object(l.a)(K,2),Z=X[0],$=X[1],ee=Object(b.a)({shortFloat:{value:0,isValid:!0},shortSharesChangePastMonth:{value:0,isValid:!0},ownedByInsiders:{value:0,isValid:!0}},!1),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],re=Object(o.g)(),ce=function(){var a=Object(c.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,O("https://stocksleuth.herokuapp.com/api/sentiment","POST",JSON.stringify({shortFloat:ae.inputs.shortFloat.value,shortSharesChangePastMonth:ae.inputs.shortSharesChangePastMonth.value,quantRating:T,sellSideRating:I,revisionsRating:A,valueRating:D,growthRating:U,profitabilityRating:W,momentumRating:Z,ownedByInsiders:ae.inputs.ownedByInsiders.value,transcript:t,creator:e.userId}),{Authorization:"Bearer "+e.token,"Content-Type":"application/json"});case 4:re.push("/"),re.push("/users/".concat(e.username,"/transcripts/").concat(t,"/sentiment")),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{error:u,onClear:j}),i.a.createElement("form",{className:"create-form",onSubmit:ce},i.a.createElement("h2",null,"Add Sentiment Data:"),n&&i.a.createElement(h.a,{asOverlay:!0}),!n&&k&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",{className:"sa-link"},i.a.createElement("a",{href:"https://seekingalpha.com/symbol/".concat(k.ticker.tickerText,"/ratings/quant-ratings")},"SeekingAlpha Ratings and Grades")),i.a.createElement("h4",{className:"sa-link"},i.a.createElement("a",{href:"https://finance.yahoo.com/quote/".concat(k.ticker.tickerText,"/key-statistics?p=").concat(k.ticker.tickerText)},"YahooFinance Short Float/Insider Info")),i.a.createElement("div",{className:"form-container"},i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Ratings: "),i.a.createElement("label",null,"Quant Rating:",i.a.createElement("select",{value:T,onChange:function(e){x(e.target.value)}},Object(E.g)())),i.a.createElement("label",null,"Sell-Side Rating:",i.a.createElement("select",{value:I,onChange:function(e){F(e.target.value)}},Object(E.g)()))),i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Grades: "),i.a.createElement("label",null,"Revisions Rating:",i.a.createElement("select",{value:A,onChange:function(e){_(e.target.value)}},Object(E.f)())),i.a.createElement("label",null,"Value Rating:",i.a.createElement("select",{value:D,onChange:function(e){G(e.target.value)}},Object(E.f)())),i.a.createElement("label",null,"Growth Rating:",i.a.createElement("select",{value:U,onChange:function(e){J(e.target.value)}},Object(E.f)())),i.a.createElement("label",null,"Profitability Rating:",i.a.createElement("select",{value:W,onChange:function(e){Y(e.target.value)}},Object(E.f)())),i.a.createElement("label",null,"Momentum Rating:",i.a.createElement("select",{value:Z,onChange:function(e){$(e.target.value)}},Object(E.f)()))),i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Other:"),i.a.createElement(m.a,{id:"shortFloat",element:"input",type:"number",label:"Short Float (%):",validators:[Object(v.b)()],errorText:"Please enter a valid decimal.",onInput:ne}),i.a.createElement(m.a,{id:"shortSharesChangePastMonth",element:"input",type:"number",label:"Shares Sold Short Change Past Month (%):",validators:[Object(v.b)()],errorText:"Please enter a valid decimal.",onInput:ne}),i.a.createElement(m.a,{id:"ownedByInsiders",element:"input",type:"number",label:"Owned By Insiders (%):",validators:[Object(v.b)()],errorText:"Please enter a valid decimal.",onInput:ne}))),i.a.createElement("div",{className:"analysis-form__button"},i.a.createElement(p.a,{type:"submit",disabled:!ae.isValid},"Submit")))))}),j=(a(82),function(e){var t=Object(s.useContext)(f.a),a=Object(o.h)().transcriptId,n=Object(g.a)(),u=n.isLoading,O=n.error,j=n.sendRequest,R=n.clearError,S=Object(s.useState)(),k=Object(l.a)(S,2),y=k[0],P=k[1];Object(s.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("".concat("https://stocksleuth.herokuapp.com/api","/transcripts/").concat(a),"GET",null,{Authorization:"Bearer "+t.token});case 3:n=e.sent,P(n.transcript),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[j,t.token,t.username,a]);var C=Object(s.useState)(e.quantRating),T=Object(l.a)(C,2),x=T[0],w=T[1],N=Object(s.useState)(e.sellSideRating),I=Object(l.a)(N,2),F=I[0],B=I[1],L=Object(s.useState)(e.revisionsRating),A=Object(l.a)(L,2),_=A[0],M=A[1],V=Object(s.useState)(e.valueRating),D=Object(l.a)(V,2),G=D[0],q=D[1],z=Object(s.useState)(e.growthRating),U=Object(l.a)(z,2),J=U[0],Q=U[1],H=Object(s.useState)(e.profitabilityRating),W=Object(l.a)(H,2),Y=W[0],K=W[1],X=Object(s.useState)(e.momentumRating),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(b.a)({shortFloat:{value:0,isValid:!0},shortSharesChangePastMonth:{value:0,isValid:!0},ownedByInsiders:{value:0,isValid:!0}},!1),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],ce=Object(o.g)(),le=function(){var n=Object(c.a)(r.a.mark((function n(c){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,n.next=4,j("".concat("https://stocksleuth.herokuapp.com/api","/sentiment/").concat(e._id),"PATCH",JSON.stringify({shortFloat:ne.inputs.shortFloat.value,shortSharesChangePastMonth:ne.inputs.shortSharesChangePastMonth.value,quantRating:x,sellSideRating:F,revisionsRating:_,valueRating:G,growthRating:J,profitabilityRating:Y,momentumRating:$,ownedByInsiders:ne.inputs.ownedByInsiders.value,transcript:a,sentimentId:e._id,creator:t.userId}),{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 4:ce.push("/"),ce.push("/users/".concat(t.username,"/transcripts/").concat(a,"/sentiment")),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{error:O,onClear:R}),i.a.createElement("form",{className:"create-form",onSubmit:le},i.a.createElement("h2",null,"Sentiment Data:"),u&&i.a.createElement(h.a,{asOverlay:!0}),!u&&y&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",{className:"sa-link"},i.a.createElement("a",{href:"https://seekingalpha.com/symbol/".concat(y.ticker.tickerText,"/ratings/quant-ratings")},"SeekingAlpha Ratings and Grades")),i.a.createElement("h4",{className:"sa-link"},i.a.createElement("a",{href:"https://finance.yahoo.com/quote/".concat(y.ticker.tickerText,"/key-statistics?p=").concat(y.ticker.tickerText)},"YahooFinance Short Float/Insider Info")),i.a.createElement("div",{className:"form-container"},i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Ratings: "),i.a.createElement("label",null,"Quant Rating:",i.a.createElement("select",{value:x,onChange:function(e){w(e.target.value)}},Object(E.g)())),i.a.createElement("label",null,"Sell-Side Rating:",i.a.createElement("select",{value:F,onChange:function(e){B(e.target.value)}},Object(E.g)()))),i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Grades: "),i.a.createElement("label",null,"Revisions Rating:",i.a.createElement("select",{value:_,onChange:function(e){M(e.target.value)}},Object(E.f)())),i.a.createElement("label",null,"Value Rating:",i.a.createElement("select",{value:G,onChange:function(e){q(e.target.value)}},Object(E.f)())),i.a.createElement("label",null,"Growth Rating:",i.a.createElement("select",{value:J,onChange:function(e){Q(e.target.value)}},Object(E.f)())),i.a.createElement("label",null,"Profitability Rating:",i.a.createElement("select",{value:Y,onChange:function(e){K(e.target.value)}},Object(E.f)())),i.a.createElement("label",null,"Momentum Rating:",i.a.createElement("select",{value:$,onChange:function(e){ee(e.target.value)}},Object(E.f)()))),i.a.createElement("div",{className:"side-by-side-container"},i.a.createElement("h3",null,"Other:"),i.a.createElement(m.a,{id:"shortFloat",element:"input",type:"number",label:"Short Float (%):",validators:[Object(v.b)()],errorText:"Please enter a valid decimal.",onInput:re,initialValue:e.shortFloat,initialValid:!0}),i.a.createElement(m.a,{id:"shortSharesChangePastMonth",element:"input",type:"number",label:"Shares Sold Short Change Past Month (%):",validators:[Object(v.b)()],errorText:"Please enter a valid decimal.",onInput:re,initialValue:e.shortSharesChangePastMonth,initialValid:!0}),i.a.createElement(m.a,{id:"ownedByInsiders",element:"input",type:"number",label:"Owned By Insiders (%):",validators:[Object(v.b)()],errorText:"Please enter a valid decimal.",onInput:re,initialValue:e.ownedByInsiders,initialValid:!0}))),i.a.createElement("div",{className:"analysis-form__button"},i.a.createElement(p.a,{type:"submit",disabled:!ne.isValid},"Update")))))}),R=function(e){return e._id?i.a.createElement(j,e):i.a.createElement(i.a.Fragment,null,i.a.createElement(O,null))};t.default=function(){var e=Object(s.useContext)(f.a),t=Object(o.h)().transcriptId,a=Object(s.useState)(),n=Object(l.a)(a,2),m=n[0],p=n[1],E=Object(g.a)(),v=E.isLoading,b=E.error,O=E.sendRequest,j=E.clearError;return Object(s.useEffect)((function(){(function(){var a=Object(c.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O("".concat("https://stocksleuth.herokuapp.com/api","/sentiment/").concat(e.username,"/").concat(t),"GET",null,{Authorization:"Bearer "+e.token});case 3:n=a.sent,p(n.sentiment),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}})()()}),[O,e.token,e.username,t]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"main-container"},i.a.createElement(u.a,null),i.a.createElement("div",{className:"content-container"},i.a.createElement(d.a,{error:b,onClear:j}),v&&i.a.createElement("div",{className:"center"},i.a.createElement(h.a,null)),!v&&i.a.createElement(R,m))))}},61:function(e,t,a){},66:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"h",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"g",(function(){return o})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n),c=function(e){return new Date(e).toLocaleDateString([],{year:"numeric",month:"numeric",day:"numeric"})},l=function(){for(var e=new Date(Date.now()).getFullYear(),t=e+2,a=[],n=e-2;n<t;n++)a.push(n.toString());return a},s=function(){for(var e=[],t=0;t<9;t++)e.push(r.a.createElement("option",{value:t},t));return e},i=function(){for(var e=[],t=0;t<4;t++)e.push(r.a.createElement("option",{value:t},t));return e},o=function(){return["Very Bearish","Bearish","Neutral","Bullish","Very Bullish"].map((function(e){return r.a.createElement("option",{value:e},e)}))},u=function(){return["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-","E+","E","E-","F"].map((function(e){return r.a.createElement("option",{value:e},e)}))},m=function(){return["Consensus Decrease on NE","Consensus Increase on NE","Cut Guidance on NE","Raise Guidance on NE"].map((function(e){return r.a.createElement("option",{value:e},e)}))},p=function(){return["Short","Long","Bi-Directional"].map((function(e){return r.a.createElement("option",{value:e},e)}))}},68:function(e,t,a){},69:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(12),l=a.n(c),s=a(15),i=a(2),o=a(9),u=a(25),m=a(16),p=a(24),d=a(11),h=(a(71),a(17)),E=(a(61),function(){var e=Object(n.useContext)(d.a),t=Object(o.h)().transcriptId,a=Object(p.a)(),c=a.isLoading,E=a.error,v=a.sendRequest,b=a.clearError,g=Object(n.useState)("Unrated"),f=Object(i.a)(g,2),O=f[0],j=f[1],R=window.location.href.split(3e3)[1],S=Object(o.g)(),k=function(){var a=Object(s.a)(l.a.mark((function a(n){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,v("https://stocksleuth.herokuapp.com/api/transcriptRatings","POST",JSON.stringify({rating:O,transcript:t,creator:e.userId}),{Authorization:"Bearer "+e.token,"Content-Type":"application/json"});case 4:S.push("/"),S.push(R),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:E,onClear:b}),r.a.createElement("form",{className:"rating-form",onSubmit:k},c&&r.a.createElement(m.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("label",{className:"transcript-rating__label"},"Transcript Rating:",r.a.createElement("select",{value:O,onChange:function(e){j(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Empty"},"Empty"),r.a.createElement("option",{value:"Weak"},"Weak"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier Two"},"(Pre-Report): Short - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier Two"},"(Pre-Report): Long - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier One"},"(Pre-Report): Short - Tier One"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier One"},"(Pre-Report): Long - Tier One"),r.a.createElement("option",{value:"(Post-Report): Short - Success"},"(Post-Report): Short - Success"),r.a.createElement("option",{value:"(Post-Report): Long - Success"},"(Post-Report): Long - Success"),r.a.createElement("option",{value:"(Post-Report): Short - Misinterpreted"},"(Post-Report): Short - Misinterpreted Evidence"),r.a.createElement("option",{value:"(Post-Report): Long - Misinterpreted"},"(Post-Report): Long - Misinterpreted Evidence"),r.a.createElement("option",{value:"(Post-Report): Short - Adverse Reaction"},"(Post-Report): Short - Adverse Reaction"),r.a.createElement("option",{value:"(Post-Report): Long - Adverse Reaction"},"(Post-Report): Long - Adverse Reaction")))),r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("div",{className:"transcript-rating-form__button"},r.a.createElement(h.a,{type:"submit"},"Update Transcript Rating"))))))}),v=function(e){var t=Object(n.useContext)(d.a),a=Object(p.a)(),c=a.isLoading,o=a.error,E=a.sendRequest,v=a.clearError,b=Object(n.useState)(e.rating),g=Object(i.a)(b,2),f=g[0],O=g[1],j=function(){var a=Object(s.a)(l.a.mark((function a(n){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,E("".concat("https://stocksleuth.herokuapp.com/api","/transcriptRatings/").concat(e._id),"PATCH",JSON.stringify({rating:f,transcriptRatingId:e._id,creator:t.userId}),{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 4:a.next=8;break;case 6:a.prev=6,a.t0=a.catch(1);case 8:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:o,onClear:v}),r.a.createElement("form",{className:"rating-form",onSubmit:j},c&&r.a.createElement(m.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("label",{className:"transcript-rating__label"},"Transcript Rating:",r.a.createElement("select",{value:f,onChange:function(e){O(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Empty"},"Empty"),r.a.createElement("option",{value:"Weak"},"Weak"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier Two"},"(Pre-Report): Short - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier Two"},"(Pre-Report): Long - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier One"},"(Pre-Report): Short - Tier One"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier One"},"(Pre-Report): Long - Tier One"),r.a.createElement("option",{value:"(Post-Report): Short - Success"},"(Post-Report): Short - Success"),r.a.createElement("option",{value:"(Post-Report): Long - Success"},"(Post-Report): Long - Success"),r.a.createElement("option",{value:"(Post-Report): Short - Misinterpreted"},"(Post-Report): Short - Misinterpreted"),r.a.createElement("option",{value:"(Post-Report): Long - Misinterpreted"},"(Post-Report): Long - Misinterpreted"),r.a.createElement("option",{value:"(Post-Report): Short - Adverse Reaction"},"(Post-Report): Short - Adverse Reaction"),r.a.createElement("option",{value:"(Post-Report): Long - Adverse Reaction"},"(Post-Report): Long - Adverse Reaction")))),r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("div",{className:"transcript-rating-form__button"},r.a.createElement(h.a,{type:"submit"},"Update Transcript Rating"))))))},b=function(){var e=Object(n.useContext)(d.a),t=Object(o.h)().transcriptId,a=Object(n.useState)(),c=Object(i.a)(a,2),h=c[0],b=c[1],g=Object(p.a)(),f=g.isLoading,O=g.error,j=g.sendRequest,R=g.clearError;return Object(n.useEffect)((function(){(function(){var a=Object(s.a)(l.a.mark((function a(){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j("".concat("https://stocksleuth.herokuapp.com/api","/transcriptRatings/").concat(e.username,"/").concat(t),"GET",null,{Authorization:"Bearer "+e.token});case 3:n=a.sent,b(n.transcriptRating),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}})()()}),[j,e.token,e.username,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:O,onClear:R}),f&&r.a.createElement("div",{className:"center"},r.a.createElement(m.a,null)),r.a.createElement("header",{className:"rating-header"},!f&&h&&!h._id&&r.a.createElement(E,null),!f&&h&&h._id&&r.a.createElement(v,h)))},g=function(){var e=Object(n.useContext)(d.a),t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],h=a[1],E=Object(p.a)(),v=E.isLoading,g=E.error,f=E.sendRequest,O=E.clearError,j=Object(o.h)().transcriptId;return Object(n.useEffect)((function(){(function(){var t=Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f("".concat("https://stocksleuth.herokuapp.com/api","/transcripts/").concat(j),"GET",null,{Authorization:"Bearer "+e.token});case 3:a=t.sent,h(a.transcript),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[f,e.token,e.username,j]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:g,onClear:O}),v&&r.a.createElement("div",{className:"center"},r.a.createElement(m.a,null)),!v&&c&&r.a.createElement("header",{className:"transcript-title"},r.a.createElement("h2",null,c.ticker.tickerText," ",c.fiscalQuarter," ",c.fiscalYear,": ",function(){var e=window.location.href;return e.includes("exchanges")?"Highly-Rated QA":e.includes("opening-statements")?"Highly-Rated OS":e.includes("full-transcript")?"Full Transcript":e.includes("primary-evidence")?"Upcoming Trades":e.includes("guidance-versus-consensus")?"Guidance vs. Consensus":e.includes("past-events")?"Past Events":e.includes("tendencies")?"Tendencies":e.includes("sentiment")?"Sentiment":e.includes("trade-submission")?"Trade Submission":e.includes("reaction-evaluation")?"Reaction Evaluation":void 0}())),r.a.createElement(b,null))},f=(a(72),function(e){return r.a.createElement("header",{className:"transcript-header"},e.children)}),O=a(8),j=(a(73),function(e){var t=Object(n.useContext)(d.a),a=Object(o.h)().transcriptId;return r.a.createElement("ul",{className:"transcript-nav-links"},r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/exchanges"),exact:!0},"QA")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/opening-statements"),exact:!0},"OS")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/full-transcript"),exact:!0},"Full Transcript")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/guidance-versus-consensus"),exact:!0},"Guidance vs. Consensus")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/past-events"),exact:!0},"Past Events")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/tendencies"),exact:!0},"Tendencies")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/sentiment"),exact:!0},"Sentiment")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/trade-submission"),exact:!0},"Trade Submission")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/reaction-evaluation"),exact:!0},"Reaction Evaluation")))}),R=a(7),S=a.n(R),k=(a(74),function(e){var t=r.a.createElement("aside",{className:"transcript-dropdown"},e.children);return S.a.createPortal(t,document.getElementById("dropdown-hook"))}),y=a(18),P=(a(75),function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(y.a,{onClick:function(){l(!1)}}),c&&r.a.createElement(k,null,r.a.createElement("nav",{className:"transcript-navigation__drawer-nav"},r.a.createElement(j,null))),r.a.createElement(f,null,r.a.createElement("button",{className:"transcript-navigation__menu-btn",onClick:function(){l(!0)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("nav",{className:"transcript-navigation__header-nav"},r.a.createElement(j,null))))});a(76),t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"transcript-home-title-container"},r.a.createElement(g,null),r.a.createElement(P,null)))}},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},82:function(e,t,a){}}]);
//# sourceMappingURL=9.5b882e02.chunk.js.map
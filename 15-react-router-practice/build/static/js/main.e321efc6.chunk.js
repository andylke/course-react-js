(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,n){"use strict";var c=n(27),r=n.n(c),s=n(0);t.a=function(){return Object(s.jsx)("div",{className:r.a.spinner})}},function(e,t,n){"use strict";var c=n(14),r=n(6),s=n(12),a=n(17),o=n(1);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useReducer)(i,{status:t?"pending":null,data:null,error:null}),u=Object(a.a)(n,2),j=u[0],d=u[1],l=Object(o.useCallback)(function(){var t=Object(s.a)(Object(r.a)().mark((function t(n){var c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,d({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(c.a)({sendRequest:l},j)}},function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h}));var c=n(6),r=n(14),s=n(12),a="https://react-http-ba022-default-rtdb.asia-southeast1.firebasedatabase.app";function o(){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(Object(c.a)().mark((function e(){var t,n,s,o,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(o in s=[],n)i=Object(r.a)({id:o},n[o]),s.push(i);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(Object(c.a)().mark((function e(t){var n,s,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not fetch quote.");case 8:return o=Object(r.a)({id:t},s),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(Object(c.a)().mark((function e(t){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(Object(c.a)().mark((function e(t){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(Object(c.a)().mark((function e(t){var n,s,o,i,u;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not get comments.");case 8:for(i in o=[],s)u=Object(r.a)({id:i},s[i]),o.push(u);return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},,,,function(e,t,n){e.exports={header:"MainNavigation_header__IF5CJ",logo:"MainNavigation_logo__1NGEm",nav:"MainNavigation_nav__tjv_3",active:"MainNavigation_active__1AEkq"}},,,function(e,t,n){e.exports={form:"NewCommentForm_form__3DnYg",loading:"NewCommentForm_loading__1_-xa",control:"NewCommentForm_control__1iC90",actions:"NewCommentForm_actions__3lgPO"}},,,,function(e,t,n){e.exports={list:"QuoteList_list__3PTZR",sorting:"QuoteList_sorting__3xsPS"}},,function(e,t,n){e.exports={item:"QuoteItem_item__3PECZ"}},,,function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__3OPmP"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__2aBDu"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__2do4b"}},function(e,t,n){e.exports={comments:"Comments_comments__PXvGQ"}},function(e,t,n){e.exports={item:"CommentItem_item__3fT94"}},function(e,t,n){e.exports={comments:"CommentsList_comments__1gH40"}},function(e,t,n){e.exports={main:"Layout_main__2G-8u"}},,,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(23),r=n.n(c),s=n(4),a=(n(42),n(1)),o=n.n(a),i=n(2),u=n(24),j=n.n(u),d=n(0),l=function(e){return Object(d.jsxs)("li",{className:j.a.item,children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{children:Object(d.jsx)("p",{children:e.text})}),Object(d.jsx)("figcaption",{children:e.author})]}),Object(d.jsx)(s.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},b=n(22),m=n.n(b),h=function(e){var t,n,c=Object(i.h)(),r=Object(i.i)(),s="asc"===new URLSearchParams(r.search).get("sort"),o=(t=e.quotes,n=s,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)("div",{className:m.a.sorting,children:Object(d.jsxs)("button",{onClick:function(){c.push({pathname:r.pathname,search:"?sort=".concat(s?"desc":"asc")})},children:["Sort ",s?"Descending":"Ascending"]})}),Object(d.jsx)("ul",{className:m.a.list,children:o.map((function(e){return Object(d.jsx)(l,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=n(9),O=n(28),p=n.n(O),f=function(){return Object(d.jsxs)("div",{className:p.a.noquotes,children:[Object(d.jsx)("p",{children:"No quotes found!"}),Object(d.jsx)(s.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},v=n(10),_=n(11),g=function(){var e=Object(v.a)(_.d,!0),t=e.sendRequest,n=e.status,c=e.data,r=e.error;return Object(a.useEffect)((function(){t()}),[t]),"pending"===n?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(x.a,{})}):r?Object(d.jsx)("p",{className:"centered focused",children:r}):"completed"!==n||c&&0!==c.length?Object(d.jsx)(h,{quotes:c}):Object(d.jsx)(f,{})},N=n(29),q=n.n(N),w=function(e){return Object(d.jsxs)("figure",{className:q.a.quote,children:[Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("figcaption",{children:e.author})]})},C=n(17),k=n(30),y=n.n(k),S=n(18),E=n.n(S),R=function(e){var t=Object(a.useRef)(),n=Object(v.a)(_.a),c=n.sendRequest,r=n.status,s=n.error,o=e.onAddedComment;Object(a.useEffect)((function(){"completed"!==r||s||o()}),[r,s,o]);var i=function(n){n.preventDefault();var r=t.current.value;c({commentData:{text:r},quoteId:e.quoteId})};return Object(d.jsxs)("form",{className:E.a.form,onSubmit:i,children:["pending"===r&&Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(x.a,{})}),Object(d.jsxs)("div",{className:E.a.control,onSubmit:i,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(d.jsx)("div",{className:E.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})})]})},I=n(31),F=n.n(I),P=function(e){return Object(d.jsx)("li",{className:F.a.item,children:Object(d.jsx)("p",{children:e.text})})},D=n(32),Q=n.n(D),A=function(e){return Object(d.jsx)("ul",{className:Q.a.comments,children:e.comments.map((function(e){return Object(d.jsx)(P,{text:e.text},e.id)}))})},L=function(){var e=Object(a.useState)(!1),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(i.j)().quoteId,s=Object(v.a)(_.c),o=s.sendRequest,u=s.status,j=s.data;Object(a.useEffect)((function(){o(r)}),[r,o]);var l,b=Object(a.useCallback)((function(){o(r)}),[o,r]);return"pending"===u&&(l=Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(x.a,{})})),"completed"===u&&j&&j.length>0&&(l=Object(d.jsx)(A,{comments:j})),"completed"!==u||j&&0!==j.length||(l=Object(d.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(d.jsxs)("section",{className:y.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!n&&Object(d.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(d.jsx)(R,{quoteId:r,onAddedComment:b}),l]})},M=function(){var e=Object(i.k)(),t=Object(i.j)().quoteId,n=Object(v.a)(_.e,!0),c=n.sendRequest,r=n.status,o=n.data,u=n.error;return Object(a.useEffect)((function(){c(t)}),[c,t]),"pending"===r?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(x.a,{})}):u?Object(d.jsx)("p",{className:"centered",children:u}):o.text?Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(w,{text:o.text,author:o.author}),Object(d.jsx)(i.c,{path:e.path,exact:!0,children:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(s.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(d.jsx)(i.c,{path:"".concat(e.path,"/comments"),children:Object(d.jsx)(L,{})})]}):Object(d.jsx)("p",{children:"No quote found!"})},T=function(){return Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)("p",{children:"Page not found!"})})},J=n(33),G=n.n(J),U=n(15),B=n.n(U),H=function(){return Object(d.jsxs)("header",{className:B.a.header,children:[Object(d.jsx)("div",{className:B.a.logo,children:"Great Quotes"}),Object(d.jsx)("nav",{className:B.a.nav,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{to:"/quotes",activeClassName:B.a.active,children:"All Quotes"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{to:"/new-quote",activeClassName:B.a.active,children:"Add a Quote"})})]})})]})},Y=function(e){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(H,{}),Object(d.jsx)("main",{className:G.a.main,children:e.children})]})},Z=o.a.lazy((function(){return n.e(3).then(n.bind(null,54))}));var z=function(){return Object(d.jsx)(Y,{children:Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(x.a,{})}),children:Object(d.jsxs)(i.e,{children:[Object(d.jsx)(i.c,{path:"/",exact:!0,children:Object(d.jsx)(i.b,{to:"/quotes"})}),Object(d.jsx)(i.c,{path:"/quotes",exact:!0,children:Object(d.jsx)(g,{})}),Object(d.jsx)(i.c,{path:"/quotes/:quoteId",children:Object(d.jsx)(M,{})}),Object(d.jsx)(i.c,{path:"/new-quote",children:Object(d.jsx)(Z,{})}),Object(d.jsx)(i.c,{path:"*",children:Object(d.jsx)(T,{})})]})})})};r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(s.a,{children:Object(d.jsx)(z,{})}))}],[[51,1,2]]]);
//# sourceMappingURL=main.e321efc6.chunk.js.map
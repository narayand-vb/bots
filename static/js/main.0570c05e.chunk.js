(this.webpackJsonpbot=this.webpackJsonpbot||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);c(0);var n=c(12),a=c.n(n),s=(c(24),c(25),c(26),c(9)),r=c(5),i=c(1),o=function(){var e=Object(r.c)((function(e){return e.products.bots})),t=Object(r.b)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("p",{className:"dash-heading",children:"Select the Best Algo Suited for your needs"}),e.map((function(e){var c=e.id,n="/bots-details/"+c;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"dash-container",children:[Object(i.jsx)("p",{className:"botName fWeight-1000",children:e.bot}),Object(i.jsxs)("div",{className:"indexValue-container value",children:[Object(i.jsx)("p",{children:"index value"}),Object(i.jsx)("p",{className:"fWeight-1000",children:e.index_value})]}),Object(i.jsxs)("div",{className:"cagr-container value",children:[Object(i.jsx)("p",{children:"CAGR"}),Object(i.jsx)("p",{className:"fWeight-1000 cgmr-value",children:e.cagr})]}),Object(i.jsxs)("div",{className:"dash-buttons",children:[Object(i.jsx)(s.b,{className:"link-seemore",exact:!0,to:n,children:"View Algo"}),Object(i.jsx)("button",{className:"dash-buybtn btn",onClick:function(){return function(e){t({type:"cartInc",id:e})}(c)},children:"Buy"})]})]})})}))]})})},l=(c(37),function(){var e=Object(r.c)((function(e){return e.inCart}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar",children:Object(i.jsxs)("div",{className:"menu ",children:[Object(i.jsx)(s.c,{activeClassName:"dashboard",exact:!0,to:"/bots",children:"Dashboard"}),Object(i.jsxs)(s.c,{activeClassName:"cart",exact:!0,to:"/cart",children:["cart - ",e]})]})})})}),d=(c(38),c(39),c(3)),j=function(){var e=Object(d.f)().id,t=Object(r.c)((function(e){return e.products.bots})),c=Object(r.b)();return Object(i.jsx)(i.Fragment,{children:t.filter((function(t){return t.id==e})).map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container details-container",children:Object(i.jsxs)("div",{className:"dash-container",children:[Object(i.jsxs)("div",{className:"bot-des botName",children:[Object(i.jsx)("p",{className:" fWeight-1000",children:e.bot}),Object(i.jsx)("p",{children:e.description})]}),Object(i.jsxs)("div",{className:"indexValue-container value",children:[Object(i.jsx)("p",{children:"index value"}),Object(i.jsx)("p",{className:"fWeight-1000",children:e.index_value})]}),Object(i.jsxs)("div",{className:"cagr-container value",children:[Object(i.jsx)("p",{children:"CAGR"}),Object(i.jsx)("p",{className:"fWeight-1000 cgmr-value",children:e.cagr})]}),Object(i.jsxs)("div",{className:"details-btn",children:[Object(i.jsx)("p",{className:"moderate-icon-container",children:"MODERATE RISK "}),Object(i.jsx)("i",{class:"bi bi-thermometer-half moderate-icon"}),Object(i.jsx)("button",{className:"details-buy btn",onClick:function(){return function(e){c({type:"cartInc",id:e})}(e.id)},children:"Buy"})]})]})})})}))})},b=(c(40),function(){var e=Object(r.c)((function(e){return e.products.bots})),t=Object(r.c)((function(e){return e.cart})),c=Object(r.b)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container",children:t.map((function(t){return e.filter((function(e){if(e.id===t)return e}))})).map((function(e,t){var n=e[0].id;return console.log(n),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"dash-container",children:[Object(i.jsx)("p",{className:"botName fWeight-1000",children:e[0].bot}),Object(i.jsxs)("div",{className:"indexValue-container value",children:[Object(i.jsx)("p",{children:"index value"}),Object(i.jsx)("p",{className:"fWeight-1000",children:e[0].index_value})]}),Object(i.jsxs)("div",{className:"cagr-container value",children:[Object(i.jsx)("p",{children:"CAGR"}),Object(i.jsx)("p",{className:"fWeight-1000 cgmr-value",children:e[0].cagr})]}),Object(i.jsx)("button",{className:"del-btn btn",onClick:function(){return function(e){c({type:"cartDel",index:e})}(t)},children:"Delete"})]})})}))})})});var u=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{exact:!0,path:"/",component:o}),Object(i.jsx)(d.a,{exact:!0,path:"/bots",component:o}),Object(i.jsx)(d.a,{exact:!0,path:"/bots-details/:id",component:j}),Object(i.jsx)(d.a,{exact:!0,path:"/cart",component:b})]})]})},h=c(18),x=c(19),O={bots:[{id:1,bot:"Hot Bot",description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",index_value:289.34,cagr:34},{id:2,bot:"Cool Bot",description:"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",index_value:439.34,cagr:28},{id:3,bot:"Options Bot",description:"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",index_value:139.34,cagr:42}]},m={inCart:0,cart:[],products:O};console.log(m);var p=Object(x.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"cartInc":return{inCart:e.inCart+1,products:O,cart:[].concat(Object(h.a)(e.cart),[t.id])};case"cartDel":return{inCart:e.inCart-1,products:O,cart:e.cart.filter((function(e,c){return c!==t.index}))};default:return e}})),f=p;a.a.render(Object(i.jsx)(s.a,{children:Object(i.jsx)(r.a,{store:f,children:Object(i.jsx)(u,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0570c05e.chunk.js.map
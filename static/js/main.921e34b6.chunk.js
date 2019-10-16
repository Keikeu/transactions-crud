(this["webpackJsonptransactions-crud"]=this["webpackJsonptransactions-crud"]||[]).push([[0],{24:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a(2),o=a(5),l=a(23),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TRANSACTION":return[{id:t.id,name:t.name,amount:t.amount}].concat(Object(l.a)(e));case"DELETE_TRANSACTION":return e.filter((function(e){return e.id!==t.id}));default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4.29,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONVERSION":return t.value;default:return e}},u=Object(o.b)({transactions:s,conversion:m}),d=(a(33),0),v=a(9),E=a(10),h=a(14),f=a(11),N=a(15);a(34),a(35);var _=function(e){return r.a.createElement("div",{className:"Input "+e.size},e.title&&r.a.createElement("div",{className:"Input__Title"},e.title),r.a.createElement("input",{className:"Input__Box--"+e.variant,name:e.name,type:e.type,min:e.min,step:e.step,value:e.value,placeholder:e.placeholder,onChange:e.onChange,onBlur:e.onBlur}),e.adornment&&r.a.createElement("div",{className:"Input__Adornment--"+e.variant},e.adornment),e.error&&r.a.createElement("p",{className:"Input__Error"},e.error))},p=function(e){function t(){return Object(v.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(E.a)(t,[{key:"validate",value:function(e){return!e.match(/^\d+[,.]\d{3,}/)}},{key:"render",value:function(){var e=this,t=this.props,a=t.conversion,n=t.onSetConversion;return r.a.createElement("div",{className:"CurrencyConverter"},r.a.createElement("span",{className:"Label"}," 1 EUR \xa0 = "),r.a.createElement(_,{variant:"filled",type:"number",min:"0",step:"0.01",size:"medium",value:a,adornment:"PLN",onChange:function(t){e.validate(t.target.value)&&n(t.target.value)},onBlur:function(e){var t=String(e.target.value);t.match(/^[,.][0-9]$/)?n("0"+t+"0"):t.match(/^[,.][0-9]{2}$/)?n("0"+t):t.match(/^[0-9]+[,.][0-9]$/)?n(t+"0"):t.match(/^[0-9]+$/)?n(t+".00"):0===t.length&&n("0.00")}}))}}]),t}(r.a.Component),b=Object(i.b)((function(e){return{conversion:e.conversion}}),(function(e){return{onSetConversion:function(t){return e(function(e){return{type:"SET_CONVERSION",value:e}}(t))}}}))(p),C=a(22),g=a(6);a(36),a(37);var y=function(e){return r.a.createElement("div",{className:"Card "+e.display},e.children)};a(38);var O=function(e){return r.a.createElement("div",{className:"Button",onClick:function(){e.onClick("hejka",9.33)}},e.children)},T=function(e){function t(e){var a,n=e.onAddTransaction;return Object(v.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this))).state={name:"",amount:"",nameError:"",amountError:""},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.validate=a.validate.bind(Object(g.a)(a)),a.onAddTransaction=n,a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target;"amount"===a.name&&String(a.value).match(/^\d+[,.]\d{3,}/)||this.setState(Object(C.a)({},a.name,"name"===a.name?a.value:parseFloat(a.value)),(function(){(t.state.nameError||t.state.amountError)&&t.validate()}))}},{key:"validate",value:function(){var e=!0;return""===this.state.name?(this.setState({nameError:"Please enter a value"}),e=!1):this.setState({nameError:""}),""===this.state.amount||isNaN(this.state.amount)?(this.setState({amountError:"Please enter a value"}),e=!1):"0.00"===this.state.amount||0===this.state.amount||this.state.amount<0?(this.setState({amountError:"Value has to be greater than zero"}),e=!1):this.setState({amountError:""}),e}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"Form"},r.a.createElement(y,{display:"flex"},r.a.createElement(_,{title:"transaction name",name:"name",variant:"outlined",size:"large",type:"text",value:this.state.name,placeholder:"",onChange:this.handleChange,error:this.state.nameError}),r.a.createElement(_,{title:"amount",name:"amount",variant:"outlined",size:"small",type:"number",min:"0",step:"0.01",value:this.state.amount||0===this.state.amount?this.state.amount:"",placeholder:"0,00",adornment:"EUR",onChange:this.handleChange,error:this.state.amountError}),r.a.createElement(O,{onClick:function(){e.validate()&&e.onAddTransaction(e.state.name,e.state.amount)}},"Add Transaction")))}}]),t}(r.a.Component),I=Object(i.b)(null,(function(e){return{onAddTransaction:function(t,a){return e(function(e,t){return{type:"ADD_TRANSACTION",id:d++,name:e,amount:t}}(t,a))}}}))(T),S=(a(39),a(40),a(12)),j=a(13);var A=function(e){var t=e.conversion,a=e.item,n=e.onClick;return r.a.createElement("li",{className:"ListItem"},r.a.createElement("div",{className:"ListItem__Col"},a.name),r.a.createElement("div",{className:"ListItem__Col"},a.amount.toFixed(2)),r.a.createElement("div",{className:"ListItem__Col"},(a.amount*t).toFixed(2)),r.a.createElement("div",{className:"ListItem__Col",onClick:n,title:"Delete transaction"},r.a.createElement(S.a,{icon:j.b})))};var k=function(e){var t=e.conversion,a=e.transactions,n=e.onDeleteTransaction,c=a.reduce((function(e,t){return e+t.amount}),0);return a.length?r.a.createElement("div",null,r.a.createElement("h3",{className:"ListTitle"},"Transactions"),r.a.createElement(y,{display:"block"},r.a.createElement("ul",{className:"List"},r.a.createElement("li",{className:"List__Header"},r.a.createElement("div",{className:"Header__Item"},"Name"),r.a.createElement("div",{className:"Header__Item"},"Value (EUR)"),r.a.createElement("div",{className:"Header__Item"},"Value (PLN)"),r.a.createElement("div",{className:"Header__Item"})),a.map((function(e,a){return r.a.createElement(A,{key:a,item:e,conversion:t,onClick:function(){n(e.id)}})})),r.a.createElement("li",{className:"List__Footer"},r.a.createElement("div",{className:"Footer__Item"},"Total"),r.a.createElement("div",{className:"Footer__Item"},c.toFixed(2)),r.a.createElement("div",{className:"Footer__Item"},(c*t).toFixed(2)),r.a.createElement("div",{className:"Footer__Item"}))))):r.a.createElement("div",{className:"EmptyState"},r.a.createElement(S.a,{className:"EmptyState__Icon",icon:j.a}),r.a.createElement("h2",{className:"EmptyState__Header"},"No transactions"),r.a.createElement("p",{className:"EmptyState__Paragraph"},"Create a new transaction by using the form above"))},L=Object(i.b)((function(e){return{transactions:e.transactions,conversion:e.conversion}}),(function(e){return{onDeleteTransaction:function(t){return e(function(e){return{type:"DELETE_TRANSACTION",id:e}}(t))}}}))(k);a(46);var x=function(e){var t=e.conversion,a=e.transactions,n=Math.max.apply(Math,a.map((function(e){return e.amount})));return a.length?r.a.createElement(y,{display:"inline-block"},r.a.createElement("h4",{className:"Max__Title"},"Highest Transaction"),r.a.createElement("div",{className:"Max__Amount--EUR"},n.toFixed(2)," EUR"),r.a.createElement("div",{className:"Max__Amount--PLN"},(n*t).toFixed(2)," PLN")):null},F=Object(i.b)((function(e){return{transactions:e.transactions,conversion:e.conversion}}),null)(x),R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"Header"},r.a.createElement("div",null,r.a.createElement("h1",{className:"Header__Title"},"Transactions Management"),r.a.createElement("small",{className:"Header__Subtitle"},"This is a placeholder text")),r.a.createElement(b,null)),r.a.createElement(I,null),r.a.createElement(L,null),r.a.createElement(F,null))},H=(a(47),Object(o.c)(u));Object(c.render)(r.a.createElement(i.a,{store:H},r.a.createElement(R,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.921e34b6.chunk.js.map
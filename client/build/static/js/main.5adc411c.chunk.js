/*! For license information please see main.5adc411c.chunk.js.LICENSE.txt */
(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{41:function(e,t,n){e.exports=n.p+"static/media/spinner.ab497855.gif"},64:function(e,t,n){e.exports=n(74)},69:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(56),c=n.n(o),i=(n(69),n(7)),l=n(11),u=n(5),s=n(59),m=n(85),d=n(87),f=n(84),p=n(57),h=n(6),v=n(89);function g(e,t,n){return new Promise((function(r,a){var o,c,i,l=window.indexedDB.open("shop-shop",1);l.onupgradeneeded=function(e){var t=l.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},l.onerror=function(e){console.log("There was an error")},l.onsuccess=function(a){switch(o=l.result,c=o.transaction(e,"readwrite"),i=c.objectStore(e),o.onerror=function(e){console.log("error",e)},t){case"put":i.put(n),r(n);break;case"get":var u=i.getAll();u.onsuccess=function(){r(u.result)};break;case"delete":i.delete(n._id);break;default:console.log("No valid method")}c.oncomplete=function(){o.close()}}}))}var y=n(60),E=n(14),b=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(i.a)(Object(i.a)({},e),{},{products:Object(E.a)(t.products)});case"UPDATE_CATEGORIES":return Object(i.a)(Object(i.a)({},e),{},{categories:Object(E.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(E.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(E.a)(e.cart),Object(E.a)(t.products))});default:return e;case"REMOVE_FROM_CART":var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:n.length>0,cart:n});case"UPDATE_CART_QUANTITY":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen})}};var w=["value"],O=Object(r.createContext)(),_=O.Provider,j=function(e){e.value;var t,n=Object(y.a)(e,w),o=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(r.useReducer)(b,t)),c=Object(h.a)(o,2),i=c[0],l=c[1];return console.log(i),a.a.createElement(_,Object.assign({value:[i,l]},n))},x=function(){return Object(r.useContext)(O)};var N,T,k,L,C=function(e){var t=x(),n=Object(h.a)(t,2),r=n[0],o=n[1],c=e.image,u=e.name,s=e._id,m=e.price,d=e.quantity,f=r.cart;return a.a.createElement("div",{className:"card px-1 py-1"},a.a.createElement(l.b,{to:"/products/".concat(s)},a.a.createElement("img",{alt:u,src:"/images/".concat(c)}),a.a.createElement("p",null,u)),a.a.createElement("div",null,a.a.createElement("div",null,d," ",function(e,t){return 1===t?e:e+"s"}("item",d)," in stock"),a.a.createElement("span",null,"$",m)),a.a.createElement("button",{onClick:function(){var t=f.find((function(e){return e._id===s}));o(t?{type:"UPDATE_CART_QUANTITY",_id:s,purchaseQuantity:parseInt(t.purchaseQuantity)+1}:{type:"ADD_TO_CART",product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})})}},"Add to cart"))},A=n(24),S=n(86),P=Object(S.a)(N||(N=Object(A.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),R=(Object(S.a)(T||(T=Object(A.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(S.a)(k||(k=Object(A.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),D=Object(S.a)(L||(L=Object(A.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),U=n(41),F=n.n(U);var I=function(){var e=x(),t=Object(h.a)(e,2),n=t[0],o=t[1],c=n.currentCategory,i=Object(v.a)(P),l=i.loading,u=i.data;return Object(r.useEffect)((function(){u?(o({type:"UPDATE_PRODUCTS",products:u.products}),u.products.forEach((function(e){g("products","put",e)}))):l||g("products","get").then((function(e){o({type:"UPDATE_PRODUCTS",products:e})}))}),[u,l,o]),a.a.createElement("div",{className:"my-2"},a.a.createElement("h2",null,"Our Products:"),n.products.length?a.a.createElement("div",{className:"flex-row"},(c?n.products.filter((function(e){return e.category._id===c})):n.products).map((function(e){return a.a.createElement(C,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):a.a.createElement("h3",null,"You haven't added any products yet!"),l?a.a.createElement("img",{src:F.a,alt:"loading"}):null)};var G=function(e){e.setCategory;var t=x(),n=Object(h.a)(t,2),o=n[0],c=n[1],i=o.categories,l=Object(v.a)(R),u=l.loading,s=l.data;return Object(r.useEffect)((function(){s?(c({type:"UPDATE_CATEGORIES",categories:s.categories}),s.categories.forEach((function(e){g("categories","put",e)}))):u||g("categories","get").then((function(e){c({type:"UPDATE_CATEGORIES",categories:e})}))}),[s,u,c]),a.a.createElement("div",null,a.a.createElement("h2",null,"Choose a Category:"),i.map((function(e){return a.a.createElement("button",{key:e._id,onClick:function(){var t;t=e._id,c({type:"UPDATE_CURRENT_CATEGORY",currentCategory:t})}},e.name)})))},$=function(e){var t=e.item,n=x(),r=Object(h.a)(n,2)[1];return a.a.createElement("div",{className:"flex-row"},a.a.createElement("div",null,a.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),a.a.createElement("div",null,a.a.createElement("div",null,t.name,", $",t.price),a.a.createElement("div",null,a.a.createElement("span",null,"Qty:"),a.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;r("0"===n?{type:"REMOVE_FROM_CART",_id:t._id}:{type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(n)})}}),a.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){r({type:"REMOVE_FROM_CART",_id:e._id})}(t)}},"\ud83d\uddd1\ufe0f"))))},Q=n(30),Y=n(31),M=n(47),q=n.n(M),W=new(function(){function e(){Object(Q.a)(this,e)}return Object(Y.a)(e,[{key:"getProfile",value:function(){return q()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return q()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),B=(n(73),function(){var e=x(),t=Object(h.a)(e,2),n=t[0],r=t[1];function o(){r({type:"TOGGLE_CART"})}return n.cartOpen?a.a.createElement("div",{className:"cart"},a.a.createElement("div",{className:"close",onClick:o},"[close]"),a.a.createElement("h2",null,"Shopping Cart"),n.cart.length?a.a.createElement("div",null,n.cart.map((function(e){return a.a.createElement($,{key:e._id,item:e})})),a.a.createElement("div",{className:"flex-row space-between"},a.a.createElement("strong",null,"Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),W.loggedIn()?a.a.createElement("button",null,"Checkout"):a.a.createElement("span",null,"(log in to check out)"))):a.a.createElement("h3",null,a.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):a.a.createElement("div",{className:"cart-closed",onClick:o},a.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))}),H=function(){return a.a.createElement("div",{className:"container"},a.a.createElement(G,null),a.a.createElement(I,null),a.a.createElement(B,null))};var V=function(){var e=x(),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(u.k)().id,s=Object(r.useState)({}),m=Object(h.a)(s,2),d=m[0],f=m[1],p=Object(v.a)(P),y=p.loading,E=p.data,b=n.products,w=n.cart;return Object(r.useEffect)((function(){b.length?f(b.find((function(e){return e._id===c}))):E?(o({type:"UPDATE_PRODUCTS",products:E.products}),E.products.forEach((function(e){g("products","put",e)}))):y||g("products","get").then((function(e){o({type:"UPDATE_PRODUCTS",products:e})}))}),[b,E,y,o,c]),a.a.createElement(a.a.Fragment,null,d?a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),a.a.createElement("h2",null,d.name),a.a.createElement("p",null,d.description),a.a.createElement("p",null,a.a.createElement("strong",null,"Price:"),"$",d.price," ",a.a.createElement("button",{onClick:function(){var e=w.find((function(e){return e._id===c}));o(e?{type:"UPDATE_CART_QUANTITY",_id:c,purchaseQuantity:parseInt(e.purchaseQuantity)+1}:{type:"ADD_TO_CART",product:Object(i.a)(Object(i.a)({},d),{},{purchaseQuantity:1})})}},"Add to Cart"),a.a.createElement("button",{disabled:!w.find((function(e){return e._id===d._id})),onClick:function(){o({type:"REMOVE_FROM_CART",_id:d._id})}},"Remove from Cart")),a.a.createElement("img",{src:"/images/".concat(d.image),alt:d.name})):null,y?a.a.createElement("img",{src:F.a,alt:"loading"}):null,a.a.createElement(B,null))};var J,z,K,X=function(e){var t=e.children;return a.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},Z=function(){return a.a.createElement("div",null,a.a.createElement(X,null,a.a.createElement("h1",null,"404 Page Not Found"),a.a.createElement("h1",null,a.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},ee=n(13),te=n(15),ne=n(82),re=Object(S.a)(J||(J=Object(A.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ae=(Object(S.a)(z||(z=Object(A.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(S.a)(K||(K=Object(A.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))));function oe(){oe=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(N){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new _(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return x()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=b(c,n);if(i){if(i===s)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var s={};function m(){}function d(){}function f(){}var p={};i(p,a,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(j([])));v&&v!==t&&n.call(v,a)&&(p=v);var g=f.prototype=m.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(a,o){function c(){return new t((function(r,c){!function r(a,o,c,i){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(m).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,i)}))}i(l.arg)}(a,o,r,c)}))}return r=r?r.then(c,c):c()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=f,i(g,"constructor",f),i(f,"constructor",d),d.displayName=i(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},y(g),i(g,c,"Generator"),i(g,a,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var ce=function(e){var t=Object(r.useState)({email:"",password:""}),n=Object(h.a)(t,2),o=n[0],c=n[1],u=Object(ne.a)(re),s=Object(h.a)(u,2),m=s[0],d=s[1].error,f=function(){var e=Object(te.a)(oe().mark((function e(t){var n,r;return oe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({variables:{email:o.email,password:o.password}});case 4:n=e.sent,r=n.data.login.token,W.login(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,n=t.name,r=t.value;c(Object(i.a)(Object(i.a)({},o),{},Object(ee.a)({},n,r)))};return a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/signup"},"\u2190 Go to Signup"),a.a.createElement("h2",null,"Login"),a.a.createElement("form",{onSubmit:f},a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"email"},"Email address:"),a.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"pwd"},"Password:"),a.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),d?a.a.createElement("div",null,a.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,a.a.createElement("div",{className:"flex-row flex-end"},a.a.createElement("button",{type:"submit"},"Submit"))))};function ie(){ie=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(N){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new _(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return x()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=b(c,n);if(i){if(i===s)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var s={};function m(){}function d(){}function f(){}var p={};i(p,a,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(j([])));v&&v!==t&&n.call(v,a)&&(p=v);var g=f.prototype=m.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(a,o){function c(){return new t((function(r,c){!function r(a,o,c,i){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(m).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,i)}))}i(l.arg)}(a,o,r,c)}))}return r=r?r.then(c,c):c()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=f,i(g,"constructor",f),i(f,"constructor",d),d.displayName=i(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},y(g),i(g,c,"Generator"),i(g,a,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var le=function(e){var t=Object(r.useState)({email:"",password:""}),n=Object(h.a)(t,2),o=n[0],c=n[1],u=Object(ne.a)(ae),s=Object(h.a)(u,1)[0],m=function(){var e=Object(te.a)(ie().mark((function e(t){var n,r;return ie().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:o.email,password:o.password,firstName:o.firstName,lastName:o.lastName}});case 3:n=e.sent,r=n.data.addUser.token,W.login(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,r=t.value;c(Object(i.a)(Object(i.a)({},o),{},Object(ee.a)({},n,r)))};return a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/login"},"\u2190 Go to Login"),a.a.createElement("h2",null,"Signup"),a.a.createElement("form",{onSubmit:m},a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"firstName"},"First Name:"),a.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),a.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"email"},"Email:"),a.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"pwd"},"Password:"),a.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),a.a.createElement("div",{className:"flex-row flex-end"},a.a.createElement("button",{type:"submit"},"Submit"))))};var ue=function(){return a.a.createElement("header",{className:"flex-row px-1"},a.a.createElement("h1",null,a.a.createElement(l.b,{to:"/"},a.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),a.a.createElement("nav",null,W.loggedIn()?a.a.createElement("ul",{className:"flex-row"},a.a.createElement("li",{className:"mx-1"},a.a.createElement(l.b,{to:"/orderHistory"},"Order History")),a.a.createElement("li",{className:"mx-1"},a.a.createElement("a",{href:"/",onClick:function(){return W.logout()}},"Logout"))):a.a.createElement("ul",{className:"flex-row"},a.a.createElement("li",{className:"mx-1"},a.a.createElement(l.b,{to:"/signup"},"Signup")),a.a.createElement("li",{className:"mx-1"},a.a.createElement(l.b,{to:"/login"},"Login")))))};var se=function(){var e,t=Object(v.a)(D).data;return t&&(e=t.user),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),e?a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return a.a.createElement("div",{key:e._id,className:"my-2"},a.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),a.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var n=e._id,r=e.image,o=e.name,c=e.price;return a.a.createElement("div",{key:t,className:"card px-1 py-1"},a.a.createElement(l.b,{to:"/products/".concat(n)},a.a.createElement("img",{alt:o,src:"/images/".concat(r)}),a.a.createElement("p",null,o)),a.a.createElement("div",null,a.a.createElement("span",null,"$",c)))}))))}))):null))},me=Object(s.a)({uri:"/graphql"}),de=Object(p.a)((function(e,t){var n=t.headers,r=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},n),{},{authorization:r?"Bearer ".concat(r):""})}})),fe=new m.a({link:de.concat(me),cache:new d.a});var pe=function(){return a.a.createElement(f.a,{client:fe},a.a.createElement(l.a,null,a.a.createElement("div",null,a.a.createElement(j,null,a.a.createElement(ue,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",element:a.a.createElement(H,null)}),a.a.createElement(u.a,{path:"/login",element:a.a.createElement(ce,null)}),a.a.createElement(u.a,{path:"/signup",element:a.a.createElement(le,null)}),a.a.createElement(u.a,{path:"/orderHistory",element:a.a.createElement(se,null)}),a.a.createElement(u.a,{path:"/products/:id",element:a.a.createElement(V,null)}),a.a.createElement(u.a,{path:"*",element:a.a.createElement(Z,null)}))))))},he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(pe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");he?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(t,e)}))}}()}},[[64,1,2]]]);
//# sourceMappingURL=main.5adc411c.chunk.js.map
(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],[,,,,,,,,,,,function(e,t,r){},,,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(11);var n=r(1),c=r.n(n),a=r(6),l=r.n(a),u=r(2),i=r(4),o=function(e){return parseFloat(e.replace(",","."))},s=function(e){return String(parseFloat(e.toFixed(e>1?3:6))).replace(".",",")},d=Object(i.b)({name:"calculator",initialState:{currentValue:0,displayValue:0,result:0,operation:null,waiting:!0,ready:!0,dotAllowed:!0},reducers:{pressNumber:function(e,t){e.ready&&(e.operation=null,e.result=0,e.ready=!1),e.waiting||0==e.currentValue?(","==t.payload?(e.currentValue="0,",e.dotAllowed=!1):e.currentValue=t.payload,e.displayValue=e.currentValue,e.waiting=!1):(","==t.payload&&(e.dotAllowed=!1),e.currentValue=e.currentValue+t.payload,e.displayValue=e.currentValue)},plus:function(e){if(e.currentValue||e.result)if(e.ready&&(e.ready=!1),e.operation)if(e.waiting)e.operation="+",e.currentValue=null;else{switch(e.operation){case"+":e.result=e.result+o(e.currentValue);break;case"-":e.result=e.result-o(e.currentValue);break;case"x":e.result=e.result*o(e.currentValue);break;case"/":e.result=e.result/o(e.currentValue)}e.displayValue=s(e.result),e.operation="+",e.waiting=!0,e.dotAllowed=!0}else e.operation="+",e.result=o(e.currentValue),e.currentValue=null,e.waiting=!0,e.dotAllowed=!0},minus:function(e){if(e.currentValue||e.result)if(e.ready&&(e.ready=!1),e.operation)if(e.waiting)e.operation="-",e.currentValue=null;else{switch(e.operation){case"+":e.result=e.result+o(e.currentValue);break;case"-":e.result=e.result-o(e.currentValue);break;case"x":e.result=e.result*o(e.currentValue);break;case"/":e.result=e.result/o(e.currentValue)}e.displayValue=s(e.result),e.operation="-",e.waiting=!0,e.dotAllowed=!0}else e.operation="-",e.result=o(e.currentValue),e.currentValue=null,e.waiting=!0,e.dotAllowed=!0},multi:function(e){if(e.currentValue||e.result)if(e.ready&&(e.ready=!1),e.operation)if(e.waiting)e.operation="x",e.currentValue=null;else{switch(e.operation){case"+":e.result=e.result+o(e.currentValue);break;case"-":e.result=e.result-o(e.currentValue);break;case"x":e.result=e.result*o(e.currentValue);break;case"/":e.result=e.result/o(e.currentValue)}e.displayValue=s(e.result),e.operation="x",e.waiting=!0,e.dotAllowed=!0}else e.operation="x",e.result=o(e.currentValue),e.currentValue=null,e.waiting=!0,e.dotAllowed=!0},degree:function(e){if(e.currentValue||e.result)if(e.ready&&(e.ready=!1),e.operation)if(e.waiting)e.operation="/",e.currentValue=null;else{switch(e.operation){case"+":e.result=e.result+o(e.currentValue);break;case"-":e.result=e.result-o(e.currentValue);break;case"x":e.result=e.result*o(e.currentValue);break;case"/":e.result=e.result/o(e.currentValue)}e.displayValue=s(e.result),e.operation="/",e.waiting=!0,e.dotAllowed=!0}else e.operation="/",e.result=o(e.currentValue),e.currentValue=null,e.waiting=!0,e.dotAllowed=!0},define:function(e){if(e.currentValue){if(e.operation){switch(e.operation){case"+":e.result=e.result+o(e.currentValue);break;case"-":e.result=e.result-o(e.currentValue);break;case"x":e.result=e.result*o(e.currentValue);break;case"/":e.result=e.result/o(e.currentValue)}e.displayValue=s(e.result),e.waiting=!0,e.dotAllowed=!0}}else e.operation=null,e.displayValue=0,e.result=0,e.waiting=!0;e.ready=!0}}}),b=function(e){return e.calculator.displayValue},j=function(e){return e.calculator.dotAllowed},p=function(e){return e.calculator.operation},f=d.actions,O=f.pressNumber,m=f.plus,h=f.minus,x=f.multi,v=f.degree,w=f.define,V=d.reducer,g=Object(i.b)({name:"construction",initialState:{constructionMode:!0,layout:[],grabbed:null},reducers:{switchMode:function(e){e.constructionMode=!e.constructionMode},removeElement:function(e,t){e.layout.splice(t.payload,1)},addElement:function(e,t){e.layout.splice(t.payload,0,e.grabbed)},grab:function(e,t){e.grabbed=t.payload}}}),y=function(e){return e.construction.constructionMode},k=function(e){return e.construction.layout},_=function(e){return e.construction.grabbed},N=g.actions,C=N.switchMode,D=N.removeElement,A=N.addElement,M=N.grab,S=g.reducer,E=Object(i.a)({reducer:{calculator:V,construction:S}}),L=(r(22),r(5)),B=(r(23),r(3)),F=r.n(B),H=r(0),J=function(e){var t=e.children,r=e.index,c=e.setOver,a=e.over,l=e.dropable,i=e.constructor,o=Object(u.b)(),s=Object(n.useState)(!1),d=Object(L.a)(s,2),b=d[0],j=d[1];return Object(H.jsxs)("div",{className:F()("calculator__item",{droparea:b||!t}),onDoubleClick:function(){return i&&void o(D(r))},onDragEnter:function(){return l&&(j(!0),void(c&&c(r)))},onDragOver:function(e){return e.preventDefault()},onDragLeave:function(){return l&&(j(!1),void(c&&a===r&&c(null)))},onDrop:function(){return l&&(o(A(r)),j(!1),void(c&&c(null)))},children:[(!t||b)&&Object(H.jsxs)("div",{className:F()("droparea__field",{"droparea__field--targeted":b}),children:[Object(H.jsx)("img",{draggable:!1,src:"/DnD.svg",alt:"Drop Here"}),Object(H.jsx)("span",{children:"Drug and drop"}),Object(H.jsx)("p",{children:"Drug and drop"})]}),t]})},T=r(9),Z=(r(25),r(26),function(){var e=Object(u.c)(p),t=Object(u.c)(b);return t.length>16&&(t="That's too Huge!"),Object(H.jsxs)("div",{className:"display",children:[Object(H.jsx)("div",{className:F()("display__value",{"display__value--smallText":t.length>8}),children:t}),e&&Object(H.jsx)("div",{className:"display__operation",children:e})]})}),I=(r(27),["9","8","7","6","5","4","3","2","1",",","0"]),R=function(){var e=Object(u.b)(),t=Object(u.c)(j),r=Object(u.c)(y);return Object(H.jsx)("div",{className:F()("numbers",{"edit-mode":r}),children:I.map((function(r){return Object(H.jsx)("div",{className:"numbers__item",onClick:function(){return n=r,void((t||","!==n)&&e(O(n)));var n},children:r})}))})},X=(r(28),function(){var e=Object(u.b)(),t=Object(u.c)(y),r=function(t){e(t())};return Object(H.jsxs)("div",{className:F()("operators",{"edit-mode":t}),children:[Object(H.jsx)("div",{className:"operators__item",onClick:function(){return r(v)},children:"/"}),Object(H.jsx)("div",{className:"operators__item",onClick:function(){return r(x)},children:"X"}),Object(H.jsx)("div",{className:"operators__item",onClick:function(){return r(h)},children:"-"}),Object(H.jsx)("div",{className:"operators__item",onClick:function(){return r(m)},children:"+"})]})}),q=(r(29),function(){var e=Object(u.b)(),t=Object(u.c)(y);return Object(H.jsx)("div",{className:F()("resultButton",{"edit-mode":t}),onClick:function(){return e(w())},children:"="})}),z=[{name:"display",component:Object(H.jsx)(Z,{})},{name:"operators",component:Object(H.jsx)(X,{})},{name:"numbers",component:Object(H.jsx)(R,{})},{name:"result",component:Object(H.jsx)(q,{})}],G=function(e){var t=e.name,r=e.component,c=e.used,a=Object(u.b)(),l=Object(n.useState)(null),i=Object(L.a)(l,2),o=i[0],s=i[1],d=function(e){a(M(e)),s(e)};return Object(H.jsx)("div",{className:F()("kit__item",{"kit__item--used":c||o}),draggable:!c,onDragStart:function(e){return d(t)},onDragEnd:function(e){return d(null)},children:r})},K=function(){var e=Object(u.c)(k);return Object(H.jsx)("div",{className:"kit",children:z.map((function(t){return Object(H.jsx)(G,Object(T.a)(Object(T.a)({},t),{},{used:e.includes(t.name)}))}))})},P=function(){var e=Object(u.c)(k),t=Object(u.c)(y),r=Object(u.c)(_),c=Object(n.useState)(null),a=Object(L.a)(c,2),l=a[0],i=a[1];return Object(H.jsxs)("div",{className:"calculator",children:["display"==r&&Object(H.jsx)(J,{index:0,dropable:!0}),e.map((function(e,n){return Object(H.jsx)(J,{index:n,setOver:i,over:l,dropable:!("display"===r||"display"===e),constructor:t,children:z.find((function(t){return t.name==e})).component},n)})),e.length<4&&t&&"display"!==r&&null===l&&Object(H.jsx)(J,{index:e.length,dropable:!0})]})},Q=(r(30),function(){var e=Object(u.c)(y),t=Object(u.b)(),r=function(){return t(C())};return Object(H.jsxs)("div",{className:"switcher",children:[Object(H.jsxs)("div",{className:F()("switcher__button",{"switcher__button--active":!e}),onClick:e&&r,children:[Object(H.jsxs)("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(H.jsx)("path",{d:"M10.7678 8.76777C11.2366 8.29893 11.5 7.66304 11.5 7C11.5 6.33696 11.2366 5.70107 10.7678 5.23223C10.2989 4.76339 9.66304 4.5 9 4.5C8.33696 4.5 7.70107 4.76339 7.23223 5.23223C6.76339 5.70107 6.5 6.33696 6.5 7C6.5 7.66304 6.76339 8.29893 7.23223 8.76777C7.70107 9.23661 8.33696 9.5 9 9.5C9.66304 9.5 10.2989 9.23661 10.7678 8.76777Z",stroke:"#4D5562","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(H.jsx)("path",{d:"M1.04834 6.99999C2.11001 3.61916 5.26917 1.16666 9.00001 1.16666C12.7317 1.16666 15.89 3.61916 16.9517 6.99999C15.89 10.3808 12.7317 12.8333 9.00001 12.8333C5.26917 12.8333 2.11001 10.3808 1.04834 6.99999Z",stroke:"#4D5562","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),"Runtime"]}),Object(H.jsxs)("div",{className:F()("switcher__button",{"switcher__button--active":e}),onClick:!e&&r,children:[Object(H.jsx)("svg",{width:"14",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(H.jsx)("path",{d:"M4.5 8.33334L1.16666 5.00001L4.5 1.66668M9.5 1.66668L12.8333 5.00001L9.5 8.33334",stroke:"#4D5562","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),"Constructor"]})]})});var U=function(){var e=Object(u.c)(y);return Object(H.jsx)("div",{className:"App",children:Object(H.jsxs)("div",{className:"container",children:[e&&Object(H.jsx)(K,{}),Object(H.jsxs)("div",{className:"main",children:[Object(H.jsx)(Q,{}),Object(H.jsx)(P,{})]})]})})};l.a.render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(u.a,{store:E,children:Object(H.jsx)(U,{})})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.93f26262.chunk.js.map
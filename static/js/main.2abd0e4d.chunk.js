(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={buttonStyle:"button_buttonStyle__SK42o",button:"button_button__XQ_0_"}},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),u=n(7),r=n.n(u),l=(n(18),n(19),n(0));var o=function(e){return 0!==e.twoValue?Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"-15px",color:e.value||e.twoValue===e.maxValue?"red":"",fontSize:"4rem"},children:[Object(l.jsx)("span",{children:e.value}),"+",Object(l.jsx)("span",{children:e.twoValue})]}):Object(l.jsx)("div",{style:{marginTop:"-15px",color:e.value===e.maxValue?"red":"",fontSize:"5rem"},children:e.value})},s=n(4),i=n.n(s),j=n(3),b=n(2),d={value:0,twoValue:0,maxValue:5,count:!0},O=function(e){return{type:"CHOW_DISPLAY_OR_SET",count:e}},v=n(5),x=n.n(v),V=function(e){var t=function(t){e.onChangeStartValue(t.currentTarget.valueAsNumber)},n=function(t){e.onChangeMaxValue(t.currentTarget.valueAsNumber)},a={color:"red",borderColor:"red",backgroundColor:"rgb(255, 198, 198)"};return e.value>=e.maxValue?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:x.a.divStyle,children:["start value:",Object(l.jsx)("input",{style:a,type:"number",onChange:t})]}),Object(l.jsxs)("div",{className:x.a.divStyle,children:["max value:",Object(l.jsx)("input",{style:a,type:"number",onChange:n})]})]}):Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:x.a.divStyle,children:["start value:",Object(l.jsx)("input",{type:"number",onChange:t})]}),Object(l.jsxs)("div",{className:x.a.divStyle,children:["max value:",Object(l.jsx)("input",{type:"number",onChange:n})]})]})},_=Object(j.b)((function(e){return{value:e.counter.value,maxValue:e.counter.maxValue}}),(function(e){return{onChangeStartValue:function(t){e(function(e){return{type:"CHANGE_START_VALUE",startValue:e}}(t))},onChangeMaxValue:function(t){e(function(e){return{type:"CHANGE_MAX_VALUE",maxValue:e}}(t))}}}))(V),m=n(12),p=n.n(m),f=function(e){return Object(l.jsx)("button",{className:p.a.buttonStyle,disabled:e.disabled,style:e.style,onClick:e.onClickHandler,children:e.name})},h=function(){var e=Object(j.d)((function(e){return e.counter})),t=Object(j.c)(),n={opacity:e.value>=e.maxValue?"0.5":""};return Object(l.jsx)("div",{children:Object(l.jsx)(f,{name:"inc",onClickHandler:function(){t({type:"INC_VALUE"}),t(O(!0))},value:e.value,maxValue:e.maxValue,disabled:e.value>=e.maxValue,style:n})})},y=function(){var e=Object(j.d)((function(e){return e.counter})),t=Object(j.c)();return Object(l.jsx)("div",{children:Object(l.jsx)(f,{name:"reset",onClickHandler:function(){t({type:"RESET_VALUE"}),t({type:"RESET_TWO_VALUE"}),t(O(!0))},value:e.value})})},E=function(){var e=Object(j.d)((function(e){return e.counter})),t=Object(j.c)();return Object(l.jsx)("div",{children:Object(l.jsx)(f,{name:"dec",onClickHandler:function(){t({type:"DEC_VALUE"}),t(O(!0))},value:e.value,maxValue:e.maxValue})})},S=n(6),A=n.n(S),C=function(e){var t=Object(j.c)(),n={opacity:e.twoValue>=e.maxValue?"0.5":""};return Object(l.jsxs)("div",{className:A.a.buttons,children:[Object(l.jsx)("div",{className:A.a.button,children:Object(l.jsx)(f,{name:"+",onClickHandler:function(){t({type:"PLUS_VALUE"})},disabled:e.twoValue===e.maxValue,style:n})}),Object(l.jsx)("div",{className:A.a.button,children:Object(l.jsx)(f,{name:"-",onClickHandler:function(){t({type:"MINUS_VALUE"})}})}),Object(l.jsx)("div",{className:A.a.button,children:Object(l.jsx)(f,{name:"set",onClickHandler:function(){t({type:"VALUE_PLUS_TWOVALUE"}),t({type:"RESET_TWO_VALUE"})},disabled:e.twoValue===e.maxValue,style:n})})]})};var L=function(){var e=Object(j.d)((function(e){return e.counter.value})),t=Object(j.d)((function(e){return e.counter.twoValue})),n=Object(j.d)((function(e){return e.counter.count})),a=Object(j.d)((function(e){return e.counter.maxValue})),c=Object(j.c)();return console.log(e),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:i.a.display,children:[Object(l.jsx)("h2",{children:a}),Object(l.jsx)("div",{className:i.a.partition}),n?Object(l.jsx)(o,{twoValue:t,value:e,maxValue:a}):Object(l.jsx)(_,{})]}),Object(l.jsxs)("div",{className:i.a.buttons,children:[Object(l.jsx)("div",{className:i.a.button,children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{className:i.a.button,children:Object(l.jsx)(E,{})}),Object(l.jsx)("div",{className:i.a.button,children:Object(l.jsx)(y,{})}),Object(l.jsx)("div",{className:i.a.button,children:Object(l.jsx)(f,{name:"sett",value:e,onClickHandler:function(){!0===n?(c(O(!1)),c({type:"RESET_VALUE"})):c(O(!0))}})}),Object(l.jsx)(C,{value:e,twoValue:t,maxValue:a})]})]})};var N=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)(L,{})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,u=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),u(e),r(e)}))},g=n(8),T=n(13),w=Object(g.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INC_VALUE":return Object(b.a)(Object(b.a)({},e),{},{value:e.value+1});case"DEC_VALUE":return Object(b.a)(Object(b.a)({},e),{},{value:e.value-1});case"RESET_VALUE":return Object(b.a)(Object(b.a)({},e),{},{value:e.value=0});case"CHANGE_MAX_VALUE":return Object(b.a)(Object(b.a)({},e),{},{maxValue:e.maxValue=t.maxValue});case"CHANGE_START_VALUE":return Object(b.a)(Object(b.a)({},e),{},{value:e.value=t.startValue});case"CHOW_DISPLAY_OR_SET":return Object(b.a)(Object(b.a)({},e),{},{count:e.count=t.count});case"VALUE_PLUS_TWOVALUE":return Object(b.a)(Object(b.a)({},e),{},{value:e.value+e.twoValue});case"VALUE_MINUS_TWOVALUE":return Object(b.a)(Object(b.a)({},e),{},{value:e.value-e.twoValue});case"RESET_TWO_VALUE":return Object(b.a)(Object(b.a)({},e),{},{twoValue:e.twoValue=0});case"PLUS_VALUE":return Object(b.a)(Object(b.a)({},e),{},{twoValue:e.twoValue+1});case"MINUS_VALUE":return Object(b.a)(Object(b.a)({},e),{},{twoValue:e.twoValue-1});default:return e}}}),H=Object(g.c)(w,function(){try{var e=localStorage.getItem("app-state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Object(g.a)(T.a));H.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("app-state",t)}catch(n){}}({counter:H.getState().counter})})),r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j.a,{store:H,children:Object(l.jsx)(N,{})})}),document.getElementById("root")),U()},4:function(e,t,n){e.exports={display:"counter_display__1aaER",partition:"counter_partition__1HgY8",buttons:"counter_buttons__AHnYj",button:"counter_button__3VvW0"}},5:function(e,t,n){e.exports={divStyle:"setting_divStyle__1J_5P"}},6:function(e,t,n){e.exports={buttons:"Calculator_buttons__OY5Zo",button:"Calculator_button__1XDPu"}}},[[24,1,2]]]);
//# sourceMappingURL=main.2abd0e4d.chunk.js.map
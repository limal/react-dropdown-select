(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,t,o){"use strict";o.r(t);o(187),o(39);var n=o(157),r=o(7),c=o(0),l=o.n(c),a=o(159),i=o(161),s=(o(167),o(168),o(160),o(169)),b=o(158),d=function(e){var t=e.options,o=e.title;return Object(r.b)(l.a.Fragment,null,Object(r.b)("h2",null,o," | ",Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/Basic.js"},"Source")),Object(r.b)(b.a,{options:t,values:[],onChange:function(e){return console.log("%c > onChange "+o+" ","background: #555; color: tomato",e)}}))};d.propTypes={};var p=d,u=function(e){var t=e.options,o=e.title;return Object(r.b)(l.a.Fragment,null,Object(r.b)("h2",null,o," | ",Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/Multi.js"},"Source")),Object(r.b)(b.a,{multi:!0,options:t,values:[],onChange:function(e){return console.log("%c > onChange "+o+" ","background: #555; color: tomato",e)}}))};u.propTypes={};var m=u,j=function(e){var t=e.options,o=e.title;return Object(r.b)(l.a.Fragment,null,Object(r.b)("h2",null,o," | ",Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/OpenOnTop.js"},"Source")),Object(r.b)(b.a,{multi:!0,dropdownPosition:!0,options:t,values:[],onChange:function(e){return console.log("%c > onChange "+o+" ","background: #555; color: tomato",e)}}))};j.propTypes={};var g=j,h=function(e){var t=e.options,o=e.title;return Object(r.b)(l.a.Fragment,null,Object(r.b)("h2",null,o," | ",Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/Styled.js"},"Source")),Object(r.b)(f,{multi:!0,options:t,values:[t[0]],color:"#333",dropdownGap:0,onChange:function(e){return console.log("%c > onChange "+o+" ","background: #555; color: tomato",e)}}))};h.propTypes={};var f=Object(n.a)(b.a,{target:"ecrspk80"})({name:"rufrgp",styles:"background:#333;border:#333 !important;color:#fff;.react-dropdown-select-clear,.react-dropdown-select-dropdown-handle{color:#fff;}.react-dropdown-select-option{border:1px solid #fff;}.react-dropdown-select-item{color:#333;}.react-dropdown-select-input{color:#fff;}.react-dropdown-select-dropdown{position:absolute;left:0;border:none;width:500px;padding:0;display:flex;flex-direction:column;border-radius:2px;max-height:300px;overflow:auto;z-index:9;background:#333;box-shadow:none;color:#fff !important;}.react-dropdown-select-item{color:#fff;border-bottom:1px solid #333;}.react-dropdown-select-item.react-dropdown-select-item-selected,.react-dropdown-select-item.react-dropdown-select-item-active{border-bottom:1px solid #333;}.react-dropdown-select-item.react-dropdown-select-item-disabled{background:#777;color:#ccc;}"}),O=h,x=function(e){var t=e.options,o=e.title;return Object(r.b)(l.a.Fragment,null,Object(r.b)("h2",null,o," | ",Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/ItemRenderer.js"},"Source")),Object(r.b)(b.a,{multi:!0,options:t,values:[],itemRenderer:function(e,t,o,n,c){return Object(r.b)(v,null,e.disabled?Object(r.b)("div",{"aria-disabled":!0},e.label):Object(r.b)("div",{onClick:function(){return c.addItem(e)}},Object(r.b)("input",{type:"checkbox",checked:c.isSelected(e)})," ",e.label))},onChange:function(e){return console.log("%c > onChange "+o+" ","background: #555; color: tomato",e)}}))};x.propTypes={};var v=Object(n.a)("div",{target:"erwdqlg0"})({name:"e37idf",styles:"padding:10px;color:#555;border-radius:3px;margin:3px;cursor:pointer;> div{display:flex;align-items:center;}input{margin-right:10px;}:hover{background:#f2f2f2;}"}),w=x,y=(o(82),o(164),o(81),o(60),o(9)),k=o.n(y),C=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).options=function(){return options.map(function(e){return{label:e.username,value:e.email}})},t.customContentRenderer=function(e,t){return Object(r.b)("div",{style:{cursor:"pointer"}},t.values.length," of ",e.options.length," selected")},t.customDropdownRenderer=function(e,t,o){var n=new RegExp(t.search,"i");return Object(r.b)("div",null,Object(r.b)(T,{color:e.color},Object(r.b)(I,null,Object(r.b)("div",null,"Search and select:"),o.areAllSelected()?Object(r.b)(D,{className:"clear",onClick:o.clearAll},"Clear all"):Object(r.b)(D,{onClick:o.selectAll},"Select all")),Object(r.b)("input",{type:"text",value:t.search,onChange:o.setSearch,placeholder:"Type anything"})),Object(r.b)(F,null,e.options.filter(function(t){return n.test(t[e.searchBy]||t[e.labelField])}).map(function(n){return!e.keepSelectedInList&&o.isSelected(n)?null:Object(r.b)(R,{disabled:n.disabled,key:n[e.valueField],onClick:n.disabled?null:function(){return o.addItem(n)}},Object(r.b)("input",{type:"checkbox",onChange:function(){return o.addItem(n)},checked:-1!==t.values.indexOf(n)}),Object(r.b)(A,null,n[e.labelField]))})))},t}return k()(t,e),t.prototype.render=function(){var e=this;return Object(r.b)("div",null,Object(r.b)("h2",null,this.props.title," | ",Object(r.b)("a",{href:"https://github.com/sanusart/react-dropdown-select/tree/master/docs/src/examples/CustomContentAndDropdown.js"},"Source")),Object(r.b)(S,{placeholder:"Select",multi:!0,contentRenderer:this.customContentRenderer,dropdownRenderer:this.customDropdownRenderer,onChange:function(t){return console.log("%c > onChange "+e.props.title+" ","background: #555; color: tomato",t)},options:this.props.options,values:[]}))},t}(l.a.Component),S=Object(n.a)(b.a,{target:"e1tcox1a0"})({name:"1em8odr",styles:".react-dropdown-select-dropdown{overflow:initial;}"}),T=Object(n.a)("div",{target:"e1tcox1a1"})({name:"rpx32j",styles:"display:flex;flex-direction:column;input{margin:10px 10px 0;line-height:30px;padding:0px 20px;border:1px solid #ccc;border-radius:3px;:focus{outline:none;border:1px solid deepskyblue;}}"}),F=Object(n.a)("div",{target:"e1tcox1a2"})({name:"1nyg2bj",styles:"overflow:auto;min-height:10px;max-height:200px;"}),R=Object(n.a)("div",{target:"e1tcox1a3"})("display:flex;margin:10px;align-items:baseline;",function(e){return e.disabled&&"text-decoration: line-through;"},""),A=Object(n.a)("div",{target:"e1tcox1a4"})({name:"1kvddv4",styles:"margin:5px 10px;"}),I=Object(n.a)("div",{target:"e1tcox1a5"})({name:"mn36he",styles:"display:flex;justify-content:space-between;& div{margin:10px 0 0 10px;font-weight:600;}"}),D=Object(n.a)("button",{target:"e1tcox1a6"})({name:"16ox0su",styles:"background:none;border:1px solid #555;color:#555;border-radius:3px;margin:10px 10px 0;padding:3px 5px;font-size:10px;text-transform:uppercase;cursor:pointer;outline:none;&.clear{color:tomato;border:1px solid tomato;}:hover{border:1px solid deepskyblue;color:deepskyblue;}"});C.propTypes={};var B=C,q=s.a.map(function(e){return Object.assign({},e,{label:e.name,value:e.email})}),z=function(){return Object(r.b)("div",{className:"container px2 sm-px3"},Object(r.b)(a.a,{page:"examples",title:"Examples"}),Object(r.b)(E,null,Object(r.b)(p,{options:q,title:"Basic"})),Object(r.b)(E,null,Object(r.b)(m,{options:q,title:"Multi"})),Object(r.b)(E,null,Object(r.b)(g,{options:q,title:"Open on top"})),Object(r.b)(E,null,Object(r.b)(O,{options:q,title:"Styled"})),Object(r.b)(E,null,Object(r.b)(w,{options:q,title:"Item custom renderer"})),Object(r.b)(E,null,Object(r.b)(B,{options:q,title:"Custom Content And Dropdown renderers"})),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(i.a,null))};z.propTypes={};var E=Object(n.a)("div",{target:"eq64h260"})({name:"1w7i78a",styles:"max-width:500px;margin:0 auto;h2{font-weight:300;}"});t.default=z},187:function(e,t,o){var n=o(29).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||o(21)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-examples-js-09e8eea39eee380f5bf3.js.map

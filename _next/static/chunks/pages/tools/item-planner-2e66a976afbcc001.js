(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2731],{9983:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/item-planner",function(){return c(1844)}])},1844:function(l,c,a){"use strict";a.r(c),a.d(c,{"default":function(){return _}});var m=a(5893),n=a(7713),o=a(7294),d=a(5949),p=a(480),q=a(6242),r=a(4267),s=a(417),t=a(6447),u=a(1594),v=a(5861),e=a(1903),f=a(5071),w=a(6998),x=a(3133),y=a(3321),z=a(7410),A=a(4674),B=a(4895),C=a(4282),D=a(6540),E=a(8364),b=a(5934),F=a(5231);function G(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function H(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function I(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){H(d,a,c[a])})}return d}function J(a,c){if(a){if("string"==typeof a)return G(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return G(a,c)}}function g(){var a,b,c=(a=["\n  width: 40px;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return g=function(){return c},c}var K=b.Z.img(g()),L=function(b){var c=b.itemName,a=b.owners;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v.Z,{fontWeight:"bold",variant:"h5",children:(0,x.cleanUnderscore)(c)}),(0,m.jsx)(t.Z,{children:(0,m.jsx)(t.Z,{direction:"row",children:(null==a?void 0:a.length)>0?null==a?void 0:a.map(function(a,b){return(0,m.jsx)("div",{children:(0,m.jsx)(v.Z,{children:a})},b+""+a)}):(0,m.jsx)(v.Z,{children:"None"})})})]})},M=function(a){var b,k=a.inventoryItems,c=a.itemsList,g=void 0===c?[]:c,d=a.copies,l=void 0===d?1:d,e=a.showEquips,h=void 0===e||e,f=a.showFinishedItems,i=void 0===f||f,j=(0,o.useMemo)(function(){var a,b,c;return a=g,b=h,c=i,null==a?void 0:a.reduce(function(d,a){if(!b&&(null==a?void 0:a.type)==="Equip")return d;var e,f=(0,z.AN)(k,null==a?void 0:a.itemName),g=f.amount,h=f.owner;return!c&&g>=(null==a?void 0:a.itemQuantity)?d:I({},d,H({},null==a?void 0:a.subType,((function(a){if(Array.isArray(a))return G(a)})(e=(null==d?void 0:d[null==a?void 0:a.subType])||[])||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(e)||J(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([I({},a,{quantityOwned:g,owner:h})])))},{})},[g,h,i]);return(0,m.jsx)(t.Z,{flexWrap:"wrap",direction:"row",gap:4,children:null===(b=Object.entries(j))|| void 0===b?void 0:b.map(function(f,g){var a,b,c=(b=2,function(a){if(Array.isArray(a))return a}(a=f)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||J(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],e=c[1];return(0,m.jsx)(q.Z,{children:(0,m.jsxs)(r.Z,{children:[(0,m.jsx)("span",{className:"title",children:(0,x.cleanUnderscore)((0,x.pascalCase)(d))}),(0,m.jsx)(t.Z,{flexWrap:"wrap",direction:"row",gap:3,children:null==e?void 0:e.map(function(a,f){var b=a.itemName,c=a.itemQuantity,g=a.rawName,j=a.type;if(!h&&"Equip"===j)return null;var e=(0,z.AN)(k,b),d=e.amount,n=e.owner;return!i&&d>=c?null:(0,m.jsxs)(t.Z,{gap:1,alignItems:"center",children:[(0,m.jsx)(F.Z,{title:(0,m.jsx)(L,{itemName:b,owners:n}),children:(0,m.jsx)(K,{src:"".concat(x.prefix,"data/").concat(g,".png"),alt:""})}),(0,m.jsxs)(v.Z,{color:d>=parseInt(c)*l?"success.light":"",children:[(0,x.kFormatter)(d,2),"/",(0,x.kFormatter)(parseInt(c)*l,2)]})]},b+""+f)})})]})},d+""+g)})})},N=a(2962);function O(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function P(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function Q(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){P(d,a,c[a])})}return d}function R(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function S(a){return function(a){if(Array.isArray(a))return O(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||T(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(a,c){if(a){if("string"==typeof a)return O(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return O(a,c)}}function h(){var a=R(["\n  width: 50px;\n"]);return h=function(){return a},a}function i(){var a=R(["\n  padding: 15px;\n  margin-top: 15px;\n  margin-bottom: 25px;\n\n  .item-wrapper {\n    width: 105px;\n    height: 102px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .title {\n    font-size: 20px;\n    font-weight: bold;\n    display: inline-block;\n    margin-bottom: 10px;\n  }\n\n  .preview {\n    min-height: 77px;\n    min-width: 77px;\n  }\n\n  .controls {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex-wrap: wrap;\n    @media (max-width: 800px) {\n      padding: 10px;\n    }\n  }\n\n  .items-wrapper {\n    margin-top: 15px;\n\n    .items {\n      margin-top: 10px;\n      display: flex;\n      flex-wrap: wrap;\n      gap: 15px;\n    }\n  }\n\n  .content {\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    column-gap: 50px;\n  }\n\n  .crafts-container {\n    margin-top: 15px;\n  }\n"]);return i=function(){return a},a}function j(){var a=R(["\n  ","\n  && label.Mui-focused {\n    color: rgba(255, 255, 255, 0.7);\n  }\n"]);return j=function(){return a},a}function k(){var a=R(["\n  && {\n    color: white;\n  }\n"]);return k=function(){return a},a}var U=(0,d.D)({trim:!0}),V={rawName:"EquipmentTransparent108"},W=function(a){var c=a.name,b=a.items;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v.Z,{fontWeight:"bold",variant:"h5",children:(0,x.cleanUnderscore)(c)}),(0,m.jsx)(t.Z,{direction:"row",gap:1,flexWrap:"wrap",children:null==b?void 0:b.map(function(a,c){var b=a.rawName,d=a.itemQuantity;return(0,m.jsxs)(t.Z,{alignItems:"center",children:[(0,m.jsx)(X,{src:"".concat(x.prefix,"data/").concat(b,".png"),alt:""}),(0,m.jsx)(v.Z,{children:d})]},b+""+c)})})]})},X=b.Z.img(h()),Y=b.Z.div(i()),Z=(0,b.Z)(e.Z)(j(),function(b){var a=b.width;return a?"width:".concat(a,";"):""}),$=(0,b.Z)(f.Z)(k()),_=function(a){var b,a=null!==a?a:function(a){throw a}(new TypeError("Cannot destructure undefined")),c=(0,o.useContext)(w.I),e=c.state,J=c.lastUpdated,R=c.dispatch,f=e.planner,g=void 0===f?{sections:[]}:f,K=(0,o.useState)(Object.keys(n.crafts)),T=K[0],h=(0,o.useState)({"0":""}),X=h[0],_=h[1],i=(0,o.useState)([]),aa=i[0],ab=i[1],j=(0,o.useState)([]),ac=j[0],ad=j[1],k=(0,o.useState)([V]),ae=k[0],af=k[1],l=(0,o.useState)(!1),L=l[0],ag=l[1],v=(0,o.useState)(!1),O=v[0],ah=v[1],G=(0,o.useState)(!1),d=G[0],ai=G[1],H=(0,o.useState)(1),aj=H[0],ak=H[1],I=(0,o.useState)({}),al=I[0],am=I[1];(0,o.useEffect)(function(){var a,b,c,d=S((null==e?void 0:null===(a=e.characters)|| void 0===a?void 0:a.reduce(function(a,b){var c=b.inventory;return S(a).concat(S(c))},[]))||[]).concat(S((null==e?void 0:null===(b=e.account)|| void 0===b?void 0:b.storage)||[]));ad(d),ab(d),af(null==g?void 0:null===(c=g.sections)|| void 0===c?void 0:c.map(function(){return V}))},[e,J]),(0,o.useEffect)(function(){(null==aa?void 0:aa.length)&&ad(d?S(aa).concat(S(an)):aa)},[d]);var an=(0,o.useMemo)(function(){return d?null==e?void 0:e.characters.reduce(function(b,a){var c=a.tools,d=a.equipment,e=a.food;return S(b).concat(S(c),S(d),S(e))},[]).filter(function(a){return"Blank"!==a.rawName}).map(function(a){return(null==a?void 0:a.amount)?a:Q({},a,{amount:1})}):[]},[d]),ao=function(a,b){var c=ae.map(function(c,d){return d===b?a?n.crafts[a]:V:c});_(Q({},X,P({},"".concat(b),a))),af(c)},ap=function(d,a,i){var c,e,b=null==g?void 0:null===(c=g.sections)|| void 0===c?void 0:c[d],f=n.crafts[null==a?void 0:a.itemName];if(f){e=as(null==b?void 0:b.items,f,!1,!1,i);var h=Array.isArray(a)?a:(0,z.F6)(a);R({type:"planner",data:{sections:ar(d,{materials:null==h?void 0:h.reduce(function(a,b){return as(a,b,!0,!1,i)},null==b?void 0:b.materials),items:e})}})}},aq=function(c,a,h){if((null==a?void 0:a.rawName)!==V.rawName){var d,e,b=null==g?void 0:null===(d=g.sections)|| void 0===d?void 0:d[c];e=as(null==b?void 0:b.items,a,!1,!0,h);var f=Array.isArray(n.crafts[null==a?void 0:a.itemName])?n.crafts[null==a?void 0:a.itemName]:(0,z.F6)(n.crafts[null==a?void 0:a.itemName]);R({type:"planner",data:{sections:ar(c,{materials:null==f?void 0:f.reduce(function(a,b){return as(a,b,!0,!0,h)},null==b?void 0:b.materials),items:e})}}),_(Q({},X,P({},c,""))),ak(1)}},ar=function(b,c){var a;return null==g?void 0:null===(a=g.sections)|| void 0===a?void 0:a.map(function(a,d){return b===d?c:a})},as=function(a,b,f){var c=!(arguments.length>3)|| void 0===arguments[3]||arguments[3],d=arguments.length>4?arguments[4]:void 0,e=null==a?void 0:a.find(function(a){return(null==b?void 0:b.itemName)===(null==a?void 0:a.itemName)});return e?null==a?void 0:a.reduce(function(f,a){if((null==b?void 0:b.itemName)!==(null==a?void 0:a.itemName))return S(f).concat([a]);var g=d?d*(null==b?void 0:b.itemQuantity):null==a?void 0:a.itemQuantity;return!c&&(null==e?void 0:e.itemQuantity)-g<=0?f:S(f).concat([Q({},e,{itemQuantity:c?(null==e?void 0:e.itemQuantity)+g:(null==e?void 0:e.itemQuantity)-g})])},[]):c?S(a||[]).concat([Q({},b,{itemQuantity:(null==b?void 0:b.itemQuantity)*d})]):a},at=function(a){var b=g.sections.filter(function(c,b){return b!==a});_(Q({},X,P({},a,""))),R({type:"planner",data:{sections:b}})};return(0,m.jsxs)(Y,{children:[(0,m.jsx)(N.PB,{title:"Idleon Toolbox | Item Planner",description:"Useful tool to keep track of your crafting projects by tracking existing and missing materials"}),(0,m.jsxs)("div",{children:[(0,m.jsx)(F.Z,{title:"This will reset all sections and items",children:(0,m.jsxs)(y.Z,{onClick:function(){_({"0":""}),af([V]),R({type:"planner",data:{sections:[{items:[],materials:[]}]}})},children:[(0,m.jsx)(C.Z,{})," Reset All"]})}),(0,m.jsxs)(y.Z,{onClick:function(){R({type:"planner",data:{sections:S(null==g?void 0:g.sections).concat([{items:[],materials:[]}])}})},children:[(0,m.jsx)(D.Z,{})," Add new section"]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(p.Z,{control:(0,m.jsx)($,{checked:L,onChange:function(){return ag(!L)},name:"Show equips",color:"default"}),label:"Show equips"}),(0,m.jsx)(p.Z,{control:(0,m.jsx)($,{checked:O,onChange:function(){return ah(!O)},name:"Show Finished Items",color:"default"}),label:"Show Finished Items"}),(0,m.jsx)(p.Z,{control:(0,m.jsx)($,{checked:d,onChange:function(){return ai(!d)},name:"Include Equipped Items",color:"default"}),label:"Include Equipped Items"})]}),null==g?void 0:null===(b=g.sections)|| void 0===b?void 0:b.map(function(d,a){var b,c,e=d.items,f=d.materials;return(0,m.jsx)(q.Z,{sx:{my:2},variant:"outlined",children:(0,m.jsxs)(r.Z,{children:[(null==g?void 0:null===(b=g.sections)|| void 0===b?void 0:b.length)>1&&(0,m.jsxs)(y.Z,{onClick:function(){return at(a)},children:[(0,m.jsx)(B.Z,{})," Remove Section"]}),(0,m.jsxs)("div",{className:"controls",children:[(0,m.jsx)("div",{className:"preview",children:(null==ae?void 0:ae[a])?(0,m.jsx)("img",{src:"".concat(x.prefix,"data/").concat(null==ae?void 0:null===(c=ae[a])|| void 0===c?void 0:c.rawName,".png"),alt:""}):null}),(0,m.jsx)(s.Z,{id:"item-locator",value:null==X?void 0:X[a],onChange:function(c,b){return ao(b,a)},autoComplete:!0,options:[null==X?void 0:X[a]].concat(S(T)),filterSelectedOptions:!0,filterOptions:U,getOptionLabel:function(a){return a?null==a?void 0:a.replace(/_/g," "):""},renderOption:function(c,a){var b;return a?(0,m.jsxs)(t.Z,Q({gap:2},c,{direction:"row",children:[(0,m.jsx)("img",{width:24,height:24,src:"".concat(x.prefix,"data/").concat(null===n.crafts|| void 0===n.crafts?void 0:null===(b=n.crafts[a])|| void 0===b?void 0:b.rawName,".png"),alt:""}),null==a?void 0:a.replace(/_/g," ")]})):(0,m.jsx)("span",{style:{height:0}},"empty")},style:{width:300},renderInput:function(a){return(0,m.jsx)(Z,Q({},a,{label:"Item Name",variant:"outlined"}))}}),(0,m.jsx)(Z,{value:aj,width:"100px",inputProps:{min:1},onChange:function(b){var a;return ak(null==b?void 0:null===(a=b.target)|| void 0===a?void 0:a.value)},type:"number",label:"Item Count",variant:"outlined"}),(0,m.jsx)(y.Z,{color:"primary",variant:"contained",onClick:function(){return aq(a,null==ae?void 0:ae[a],aj)},title:"Add Item",children:"Add"})]}),(0,m.jsxs)("div",{className:"content",children:[(0,m.jsxs)("div",{className:"items-wrapper",children:[(0,m.jsx)("span",{className:"title",children:"Tracked Items"}),(0,m.jsx)("div",{className:"items",children:null==e?void 0:e.map(function(b,c){return(0,m.jsxs)("div",{className:"item-wrapper",onMouseEnter:function(){return am(Q({},al,P({},"".concat(a,"-").concat(c),!0)))},onMouseLeave:function(){return am(Q({},al,P({},"".concat(a,"-").concat(c),!1)))},children:[(0,m.jsx)(u.Z,{badgeContent:(0,x.numberWithCommas)(null==b?void 0:b.itemQuantity),max:1e4,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:(0,m.jsx)(F.Z,{title:(0,m.jsx)(W,{name:null==b?void 0:b.itemName,items:(0,z.F6)(b)}),children:(0,m.jsx)("img",{src:"".concat(x.prefix,"data/").concat(null==b?void 0:b.rawName,".png"),alt:""},(null==b?void 0:b.rawName)+" "+c)})}),(null==al?void 0:al["".concat(a,"-").concat(c)])?(0,m.jsxs)("div",{className:"buttons",children:[(0,m.jsx)(A.Z,{type:"bottom",size:"small",onClick:function(){return aq(a,Q({},b,{itemQuantity:1}),1)},children:(0,m.jsx)(D.Z,{})}),(0,m.jsx)(A.Z,{type:"bottom",size:"small",onClick:function(){return ap(a,b,1)},children:(0,m.jsx)(B.Z,{})}),(0,m.jsx)(A.Z,{size:"small",onClick:function(){return ap(a,b,null==b?void 0:b.itemQuantity)},children:(0,m.jsx)(E.Z,{})})]}):null]},a+""+(null==b?void 0:b.itemName)+c)})})]}),(0,m.jsxs)("div",{className:"crafts-container",children:[(0,m.jsx)("span",{className:"title",children:"Required Materials"}),(null==ac?void 0:ac.length)>0?(0,m.jsx)(M,{itemsList:f,inventoryItems:ac,showEquips:L,showFinishedItems:O}):null]})]})]})},"section-".concat(a))})]})}}},function(a){a.O(0,[417,144,9774,2888,179],function(){return a(a.s=9983)}),_N_E=a.O()}])
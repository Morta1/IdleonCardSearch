(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4495],{491:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/item-browser",function(){return c(6220)}])},8677:function(e,b,a){"use strict";var f=a(5893),c=a(5934),g=a(3133),h=a(6447),i=a(5861),j=a(7720),k=a(1820);function d(){var a,b,c=(a=["\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var l=c.Z.img(d());b.Z=function(a){var c,b=a.Type,n=a.description,o=(a.lvReqToEquip,a.Class,a.rawName),d=a.displayName,p=a.Defence,q=a.Speed,r=a.Weapon_Power,s=a.Reach,t=a.STR,u=a.AGI,v=a.WIS,w=a.LUK,m=a.UQ1txt,x=a.UQ1val,y=a.UQ2txt,z=a.UQ2val,A=a.Upgrade_Slots_Left,C=a.desc_line1,D=a.desc_line2,E=a.desc_line3,F=a.desc_line4,G=a.desc_line5,H=a.desc_line6,I=a.desc_line7,J=a.desc_line8,K=a.Amount,L=a.Cooldown,e=a.capacity,B=[C,D,E,F,G,H,I,J].filter(function(a){return"Filler"!==a}).join(" ").replace(/\[/,K).replace(/]/,L);return d&&"Empty"!==d&&"Locked"!==d&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h.Z,{gap:1,direction:"row",alignItems:"center",children:[(0,f.jsx)(l,{src:"".concat(g.prefix,"data/").concat(o,".png"),alt:d}),(0,f.jsx)(i.Z,{fontWeight:"bold",variant:"subtitle1",children:(0,g.cleanUnderscore)(d)})]}),(0,f.jsx)(j.Z,{flexItem:!0,sx:{my:2},color:"black"}),(null==b?void 0:b.includes("INVENTORY"))||(null==b?void 0:b.includes("CARRY"))?(0,f.jsxs)(h.Z,{children:[b?(0,f.jsx)(k.uQ,{title:"Type",value:(0,g.cleanUnderscore)(b)}):null,e?(0,f.jsx)(k.uQ,{title:(null==b?void 0:b.includes("CARRY"))?"Capacity":"Description",value:"+".concat((0,g.cleanUnderscore)(e)," slots")}):null]}):(0,f.jsxs)(h.Z,{children:[b?(0,f.jsx)(k.uQ,{title:"Type",value:(0,g.cleanUnderscore)(b)}):null,e?(0,f.jsx)(k.uQ,{title:"Description",value:"+".concat((0,g.cleanUnderscore)(e)," slots")}):null,n?(0,f.jsx)(k.uQ,{value:(0,g.cleanUnderscore)(n)}):null,B.length>0?(0,f.jsx)(k.uQ,{value:(0,g.cleanUnderscore)(B)}):null,q?(0,f.jsx)(k.uQ,{title:"Speed",value:q}):null,r?(0,f.jsx)(k.uQ,{title:(c=(m||o).toLowerCase())?c.includes("mining")?"Mining Power":c.includes("fishin")?"Fishing Power":c.includes("choppin")?"Choppin Power":c.includes("catch")?"Catching Power":"Weapon Power":"Weapon Power",value:r}):null,t?(0,f.jsx)(k.uQ,{title:"STR",value:t}):null,u?(0,f.jsx)(k.uQ,{title:"AGI",value:u}):null,v?(0,f.jsx)(k.uQ,{title:"WIS",value:v}):null,w?(0,f.jsx)(k.uQ,{title:"LUK",value:w}):null,p?(0,f.jsx)(k.uQ,{title:"Defence",value:p}):null,s?(0,f.jsx)(k.uQ,{title:"Reach",value:s}):null,m&&x?(0,f.jsx)(k.uQ,{title:"Misc",value:(0,g.cleanUnderscore)("+".concat(x).concat(m))}):null,y&&z?(0,f.jsx)(k.uQ,{title:"Misc",value:(0,g.cleanUnderscore)("+".concat(z).concat(y))}):null,A>0?(0,f.jsx)(k.uQ,{title:"Upgrade Slots Left",value:A}):null]})]})}},1820:function(k,c,a){"use strict";a.d(c,{M5:function(){return j},uQ:function(){return u},j8:function(){return v},iy:function(){return w},u3:function(){return B},Wd:function(){return C},Gr:function(){return D}});var l=a(5893),d=a(7294),m=a(3133),n=a(6447),o=a(5861),e=a(1594),b=a(5934),p=a(5231),q=a(49);function r(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function s(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){r(d,a,c[a])})}return d}function t(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function f(){var a=t(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return f=function(){return a},a}function g(){var a=t(["\n  height: 20px;\n  object-fit: contain;\n"]);return g=function(){return a},a}function h(){var a=t(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return h=function(){return a},a}function i(){var a=t(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return i=function(){return a},a}var j=(0,d.forwardRef)(function(a,b){var c=a.stat,d=a.icon,e=a.img,f=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["img"]);return(0,l.jsxs)(n.Z,s({alignItems:"center"},f,{ref:b,style:{position:"relative",width:"fit-content"},children:[(0,l.jsx)("img",s({},e,{src:"".concat(m.prefix,"data/").concat(d,".png"),alt:""})),(0,l.jsx)(o.Z,{variant:"body1",component:"span",children:c})]}))});j.displayName="IconWithText";var u=function(a){var b=a.title,c=a.value,d=a.boldTitle;return(0,l.jsxs)(n.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[b?(0,l.jsxs)(o.Z,{fontWeight:d?"bold":500,component:"span",children:[b,":\xa0"]}):null,(0,l.jsx)(o.Z,{fontSize:15,component:"span",children:c})]})},v=(0,b.Z)(e.Z)(f()),w=function(a){var e=a.cardName,c=a.stars,f=a.cardIndex,g=a.name,b=a.variant,h=a.rawName,d=a.amount,i=a.nextLevelReq,j="cardSet"===b?"".concat(m.prefix,"data/").concat(h,".png"):"".concat(m.prefix,"data/2Cards").concat(f,".png");return(0,l.jsxs)(l.Fragment,{children:[c>0?(0,l.jsx)(A,{src:"".concat(m.prefix,"data/CardEquipBorder").concat(c,".png"),alt:""}):null,(0,l.jsx)(p.Z,{title:(0,l.jsx)(x,s({},a,{cardName:"cardSet"===b?g:e,nextLevelReq:i,amount:d})),children:(0,l.jsx)(z,{isCardSet:"cardSet"===b,amount:d,src:j,alt:""})})]})},x=function(a){var f=a.displayName,g=a.effect,b=a.bonus,h=a.stars,c=a.showInfo,d=a.nextLevelReq,i=a.amount,e=b;return c&&(e=(0,q.BZ)({bonus:b,stars:h})),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{fontWeight:"bold",variant:"h6",children:(0,m.cleanUnderscore)(f)}),(0,l.jsx)(o.Z,{children:(0,m.cleanUnderscore)(g.replace("{",e))}),c?(0,l.jsx)(n.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5].map(function(c,a){return(0,l.jsxs)(n.Z,{alignItems:"center",justifyContent:"space-between",children:[0===a?(0,l.jsx)(o.Z,{children:"Base"}):(0,l.jsx)(y,{src:"".concat(m.prefix,"etc/Star").concat(a,".png"),alt:""}),(0,l.jsx)(o.Z,{children:b*(a+1)})]},"".concat(f,"-").concat(a))})}):null,d>0?(0,l.jsxs)(n.Z,{children:["Progress: ",i," / ",d]}):null]})},y=b.Z.img(g()),z=b.Z.img(h(),function(a){var b=a.amount,c=a.isCardSet;return b||c?1:.5}),A=b.Z.img(i()),B=function(a){var b=a.level,c=a.funcX,d=a.x1,e=a.x2,f=a.funcY,g=a.y1,h=a.y2,i=a.description,j=a.name,k=a.talentId,p=b>0?(0,m.growth)(c,b,d,e):0,q=b>0?(0,m.growth)(f,b,g,h):0;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,l.jsx)("img",{src:"".concat(m.prefix,"data/UISkillIcon").concat(k,".png"),alt:""}),(0,l.jsx)(o.Z,{fontWeight:"bold",variant:"h6",children:(0,m.cleanUnderscore)(j)})]}),(0,l.jsx)(o.Z,{children:(0,m.cleanUnderscore)(i).replace("{",p).replace("}",q)})]})},C=function(a){var b=a.players,c=a.characters;return(0,l.jsx)(n.Z,{gap:1,direction:"row",children:b.map(function(d){var a,b=d.index;return(0,l.jsx)(p.Z,{title:null==c?void 0:null===(a=c[b])|| void 0===a?void 0:a.name,children:(0,l.jsx)("img",{src:"".concat(m.prefix,"data/headBIG.png"),alt:""})},name+"-head-"+b)})})},D=function(a){var b=a.name;return(0,l.jsxs)(o.Z,{variant:"h3",children:["Your account is missing data for ",b]})}},6220:function(h,b,a){"use strict";a.r(b);var i=a(5893),j=a(7294),k=a(7713),l=a(7410),d=a(5949),m=a(5861),n=a(417),o=a(6447),p=a(6242),q=a(4267),e=a(1903),r=a(3133),c=a(5934),s=a(8677),t=a(6998),u=a(2962);function v(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function w(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function x(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){w(d,a,c[a])})}return d}function y(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function z(a){return function(a){if(Array.isArray(a))return v(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||A(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(a,c){if(a){if("string"==typeof a)return v(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return v(a,c)}}function f(){var a=y(["\n  padding-left: 10px;\n  margin-top: 25px;\n\n  .main-header {\n    font-size: 22px;\n    font-weight: bold;\n  }\n\n  .sub-header {\n    margin-top: 15px;\n    margin-bottom: 2em;\n  }\n\n  .results {\n    margin-top: 15px;\n    padding-left: 15px;\n    display: grid;\n    grid-template-columns: repeat(2, 250px);\n\n    & .owner-name {\n      display: inline-block;\n      width: 150px;\n    }\n\n    & .amount {\n      color: #54c34d;\n    }\n  }\n"]);return f=function(){return a},a}function g(){var a=y(["\n  && label.Mui-focused {\n    color: rgba(255, 255, 255, 0.7);\n  }\n"]);return g=function(){return a},a}var B=(0,d.D)({trim:!0,limit:250}),C=c.Z.div(f()),D=(0,c.Z)(e.Z)(g());b.default=function(b){var c,d,b=null!==b?b:function(a){throw a}(new TypeError("Cannot destructure undefined")),y=(0,j.useContext)(t.I).state,g=(0,j.useState)(""),a=g[0],A=g[1],h=(0,j.useState)(),E=h[0],F=h[1],v=(0,j.useState)(),e=v[0],G=v[1],w=(0,j.useState)(),f=w[0],H=w[1];return(0,j.useEffect)(function(){var a,b=z(null==y?void 0:y.characters.reduce(function(a,b){var c=b.inventory;return z(a).concat(z(c))},[])).concat(z(null==y?void 0:null===(a=y.account)|| void 0===a?void 0:a.storage));G(k.itemsArray),F(b)},[]),(0,j.useEffect)(function(){a?H((0,l.QU)(E,null==a?void 0:a.displayName)):H([])},[a]),(0,i.jsxs)(C,{children:[(0,i.jsx)(u.PB,{title:"Idleon Toolbox | Item Browser",description:"Browse all of your existing items with a handy search"}),(0,i.jsx)(m.Z,{my:2,variant:"h2",children:"Item Browser"}),(0,i.jsx)(m.Z,{variant:"subtitle1",children:"Browse all items in your account!"}),(0,i.jsx)(m.Z,{mb:4,variant:"subtitle1",children:"The amount of items you own will be displayed below the item's display"}),(null==e?void 0:e.length)>0?(0,i.jsx)(n.Z,{id:"item-browser",value:a,onChange:function(b,a){A(a)},autoComplete:!0,options:[a].concat(z(e)),filterSelectedOptions:!0,filterOptions:B,getOptionLabel:function(a){var b;return(null==a?void 0:a.displayName)?null==a?void 0:null===(b=a.displayName)|| void 0===b?void 0:b.replace(/_/g," "):""},renderOption:function(a,b){var c;return(0,j.createElement)(o.Z,x({},a,{key:a.id,gap:2,direction:"row",children:[(0,i.jsx)("img",{width:24,height:24,src:"".concat(r.prefix,"data/").concat(null==b?void 0:b.rawName,".png"),alt:""},"img-".concat(a.id)),(0,i.jsx)(m.Z,{children:null==b?void 0:null===(c=b.displayName)|| void 0===c?void 0:c.replace(/_/g," ")},"text-".concat(a.id))]}))},style:{width:300},renderInput:function(a){return(0,i.jsx)(D,x({},a,{label:"Item Name",variant:"outlined",helperText:"Start to write to narrow down the results (max of 250 items)"}))}}):null,a?(0,i.jsx)(p.Z,{sx:{my:2,width:"fit-content"},children:(0,i.jsx)(q.Z,{children:(0,i.jsx)(s.Z,x({style:{marginTop:15}},a))})}):null,f&&(null===(c=Object.keys(f))|| void 0===c?void 0:c.length)>0?(0,i.jsx)(p.Z,{sx:{my:2,width:"fit-content"},children:(0,i.jsx)(q.Z,{children:null===(d=Object.keys(f))|| void 0===d?void 0:d.map(function(a,d){var b,c;return(0,i.jsxs)(o.Z,{direction:"row",gap:2,children:[(0,i.jsx)("span",{className:"owner-name",children:a}),(null==f?void 0:null===(b=f[a])|| void 0===b?void 0:b.amount)?(0,i.jsxs)(m.Z,{color:"success.light",className:"amount",children:["(",(0,r.kFormatter)(null==f?void 0:null===(c=f[a])|| void 0===c?void 0:c.amount),")"]}):""]},a+d)})})}):null]})}}},function(a){a.O(0,[9030,417,9774,2888,179],function(){return a(a.s=491)}),_N_E=a.O()}])
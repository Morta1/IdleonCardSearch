(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2985],{6242:function(h,b,a){"use strict";a.d(b,{Z:function(){return t}});var i=a(7462),j=a(3366),c=a(7294),k=a(6010),l=a(4780),d=a(948),m=a(1657),e=a(5113),n=a(4867),f=a(1588);function o(a){return(0,n.Z)("MuiCard",a)}(0,f.Z)("MuiCard",["root"]);var p=a(5893);const q=["className","raised"],r=a=>{const{classes:b}=a;return(0,l.Z)({root:["root"]},o,b)},s=(0,d.ZP)(e.Z,{name:"MuiCard",slot:"Root",overridesResolver:(b,a)=>a.root})(()=>({overflow:"hidden"})),g=c.forwardRef(function(d,e){const a=(0,m.Z)({props:d,name:"MuiCard"}),{className:f,raised:b=!1}=a,g=(0,j.Z)(a,q),c=(0,i.Z)({},a,{raised:b}),h=r(c);return(0,p.jsx)(s,(0,i.Z)({className:(0,k.Z)(h.root,f),elevation:b?8:void 0,ref:e,ownerState:c},g))});var t=g},4267:function(g,b,a){"use strict";a.d(b,{Z:function(){return s}});var h=a(7462),i=a(3366),c=a(7294),j=a(6010),k=a(4780),d=a(948),l=a(1657),m=a(4867),e=a(1588);function n(a){return(0,m.Z)("MuiCardContent",a)}(0,e.Z)("MuiCardContent",["root"]);var o=a(5893);const p=["className","component"],q=a=>{const{classes:b}=a;return(0,k.Z)({root:["root"]},n,b)},r=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(b,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=c.forwardRef(function(d,e){const a=(0,l.Z)({props:d,name:"MuiCardContent"}),{className:f,component:b="div"}=a,g=(0,i.Z)(a,p),c=(0,h.Z)({},a,{component:b}),k=q(c);return(0,o.jsx)(r,(0,h.Z)({as:b,className:(0,j.Z)(k.root,f),ownerState:c,ref:e},g))});var s=f},3032:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-3/atom-collider",function(){return c(8542)}])},8542:function(d,b,a){"use strict";a.r(b);var e=a(5893),f=a(7294),g=a(819),h=a(5861),i=a(6447),j=a(6242),k=a(4267),l=a(7720),m=a(3133),c=a(9601),n=a.n(c);b.default=function(a){var b,a=null!==a?a:function(a){throw a}(new TypeError("Cannot destructure undefined")),d=(0,f.useContext)(g.I).state,c=(null==d?void 0:null===(b=d.account)|| void 0===b?void 0:b.atoms)||{},o=c.atoms,p=c.particles,q=c.stampReducer;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.Z,{variant:"h2",textAlign:"center",mb:3,children:"Atoms"}),(0,e.jsxs)(i.Z,{direction:"row",gap:2,children:[(0,e.jsx)(j.Z,{sx:{my:2,width:"fit-content"},children:(0,e.jsx)(k.Z,{children:(0,e.jsxs)(i.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,e.jsx)("img",{src:"".concat(m.prefix,"etc/Particle.png"),alt:"",style:{objectFit:"contain"}}),(0,e.jsx)(h.Z,{children:p})]})})}),(0,e.jsx)(j.Z,{sx:{my:2,width:"fit-content"},children:(0,e.jsx)(k.Z,{children:(0,e.jsxs)(i.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,e.jsx)("img",{src:"".concat(m.prefix,"data/Atom0.png"),alt:"",style:{objectFit:"contain",width:45}}),(0,e.jsxs)(h.Z,{children:[q,"% reduction"]})]})})})]}),(0,e.jsx)(i.Z,{direction:"row",gap:2,flexWrap:"wrap",children:null==o?void 0:o.map(function(a,d){var f=a.name,g=a.desc,b=a.level,c=a.rawName,o=a.baseBonus,p=a.cost,q=a.bonus;if(!(d>=10)){var r=(0,m.cleanUnderscore)(g).replace(/{/g,"".concat(o*b)).replace(/[>}]/,(0,m.notateNumber)(q,"Big")).replace("<",b);return(0,e.jsx)(j.Z,{children:(0,e.jsx)(k.Z,{sx:{width:250},children:(0,e.jsxs)(i.Z,{children:[(0,e.jsxs)(i.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,e.jsx)("img",{src:"".concat(m.prefix,"data/").concat(c,".png"),alt:"",width:64,height:64,style:{objectFit:"contain"}}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(h.Z,{children:(0,m.cleanUnderscore)(f)}),(0,e.jsxs)(h.Z,{children:["Lv. ",b," / ",20]}),(0,e.jsxs)(h.Z,{children:["Cost: ",(0,m.notateNumber)(p,"Big")]})]})]}),(0,e.jsx)(l.Z,{sx:{my:2}}),(0,e.jsx)(h.Z,{variant:"body1",component:"div",children:n()([{regex:/Total bonus.*/,fn:function(a,b){return(0,e.jsx)("div",{style:{marginTop:15},children:b[0]},a)}}])(r)})]})})},c)}})})]})}},9601:function(a){"use strict";a.exports=function(a){var b=0;function c(d,a){if(!d.fn||"function"!=typeof d.fn)return a;if(!d.regex||!(d.regex instanceof RegExp))return a;if("string"==typeof a){for(var g=d.regex,e=null,f=[];null!==(e=g.exec(a));){var h=e.index,i=e[0];f.push(a.substring(0,h)),f.push(d.fn(++b,e)),a=a.substring(h+i.length,a.length+1),g.lastIndex=0}return f.push(a),f}return Array.isArray(a)?a.map(function(a){return c(d,a)}):a}return function(b){return a&&Array.isArray(a)&&a.length&&a.forEach(function(a){return b=c(a,b)}),b}}}},function(a){a.O(0,[9774,2888,179],function(){return a(a.s=3032)}),_N_E=a.O()}])
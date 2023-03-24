(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5257],{6242:function(h,b,a){"use strict";a.d(b,{Z:function(){return t}});var i=a(7462),j=a(3366),c=a(7294),k=a(6010),l=a(4780),d=a(948),m=a(1657),e=a(5113),n=a(4867),f=a(1588);function o(a){return(0,n.Z)("MuiCard",a)}(0,f.Z)("MuiCard",["root"]);var p=a(5893);const q=["className","raised"],r=a=>{const{classes:b}=a;return(0,l.Z)({root:["root"]},o,b)},s=(0,d.ZP)(e.Z,{name:"MuiCard",slot:"Root",overridesResolver:(b,a)=>a.root})(()=>({overflow:"hidden"})),g=c.forwardRef(function(d,e){const a=(0,m.Z)({props:d,name:"MuiCard"}),{className:f,raised:b=!1}=a,g=(0,j.Z)(a,q),c=(0,i.Z)({},a,{raised:b}),h=r(c);return(0,p.jsx)(s,(0,i.Z)({className:(0,k.Z)(h.root,f),elevation:b?8:void 0,ref:e,ownerState:c},g))});var t=g},4267:function(g,b,a){"use strict";a.d(b,{Z:function(){return s}});var h=a(7462),i=a(3366),c=a(7294),j=a(6010),k=a(4780),d=a(948),l=a(1657),m=a(4867),e=a(1588);function n(a){return(0,m.Z)("MuiCardContent",a)}(0,e.Z)("MuiCardContent",["root"]);var o=a(5893);const p=["className","component"],q=a=>{const{classes:b}=a;return(0,k.Z)({root:["root"]},n,b)},r=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(b,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=c.forwardRef(function(d,e){const a=(0,l.Z)({props:d,name:"MuiCardContent"}),{className:f,component:b="div"}=a,g=(0,i.Z)(a,p),c=(0,h.Z)({},a,{component:b}),k=q(c);return(0,o.jsx)(r,(0,h.Z)({as:b,className:(0,j.Z)(k.root,f),ownerState:c,ref:e},g))});var s=f},3802:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-3/towers",function(){return c(3243)}])},3243:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(7294),i=a(6998),j=a(5861),k=a(6447),l=a(6242),m=a(4267),n=a(3133),c=a(5934),o=a(3681);function p(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function d(){var a=p(["\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n"]);return d=function(){return a},a}function e(){var a=p(["\n  width: 35px;\n  height: 35px;\n  object-fit: contain;\n"]);return e=function(){return a},a}var q=c.Z.img(d()),r=c.Z.img(e());b.default=function(){var a,b,c,d=(0,h.useContext)(i.I).state,e=(0,h.useMemo)(function(){var a,b,c;return null==d?void 0:null===(a=d.account)|| void 0===a?void 0:null===(b=a.towers)|| void 0===b?void 0:null===(c=b.data)|| void 0===c?void 0:c.find(function(a){return 5===a.index})},[d]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j.Z,{variant:"h2",mb:3,children:"Towers"}),(0,g.jsx)(k.Z,{direction:"row",flexWrap:"wrap",gap:3,children:null==d?void 0:null===(a=d.account)|| void 0===a?void 0:null===(b=a.towers)|| void 0===b?void 0:null===(c=b.data)|| void 0===c?void 0:c.map(function(a,z){var s,A,B,C,D,t=a.name,u=a.progress,b=a.level,c=a.maxLevel,v=a.bonusInc,E=a.itemReq,w=a.inProgress,x=(s=E,A=b,B=c,C=v,D=e,s.map(function(a){var b=a.rawName,c=a.name,d=a.amount,f=Math.min(.1,.1*Math.floor((D.level+999)/1e3)),g=Math.max(0,D.level-1),e=Math.max(.2,1-(f+g*D.costInc[0]/100));return b.includes("Refinery")?{rawName:b,name:c,amount:Math.floor(e*d*(A+1))}:{rawName:b,name:c,amount:Math.floor(e*d*Math.pow(C+.03-(C+.03-1.05)*A/(B/2+A),A))}})),y=(0,o.ZX)(null==d?void 0:null===(F=d.account)|| void 0===F?void 0:F.towers,b,v,null==a?void 0:a.index);if((null==a?void 0:a.index)>=9&&(null==a?void 0:a.index)<=17){var F,h,i,p,f=null==d?void 0:null===(h=d.account)|| void 0===h?void 0:null===(i=h.atoms)|| void 0===i?void 0:null===(p=i.atoms)|| void 0===p?void 0:p.find(function(a){return"Carbon_-_Wizard_Maximizer"===a.name});c+=(null==f?void 0:f.level)*(null==f?void 0:f.baseBonus)}return(0,g.jsx)(l.Z,{sx:{border:w?"1px solid":"",borderColor:w?u<y?"success.light":"warning.light":"",width:{xs:"100%",md:450},height:{md:160}},children:(0,g.jsx)(m.Z,{children:(0,g.jsxs)(k.Z,{direction:"row",sx:{gap:{xs:2,sm:3}},flexWrap:"wrap",children:[(0,g.jsxs)(k.Z,{alignItems:"center",sx:{width:105,textAlign:"center"},children:[(0,g.jsx)(j.Z,{children:(0,n.cleanUnderscore)(t)}),(0,g.jsx)(q,{src:"".concat(n.prefix,"data/ConTower").concat(null==a?void 0:a.index,".png"),alt:""}),(0,g.jsxs)(j.Z,{children:["Lv. ",b," / ",c]})]}),(0,g.jsxs)(k.Z,{sx:{width:100},children:[(0,g.jsx)(j.Z,{mb:2,children:"Progress"}),b===c?(0,g.jsx)(j.Z,{color:"success.light",children:"MAXED"}):(0,g.jsxs)(j.Z,{children:[(0,n.notateNumber)(u,"Big")," / ",(0,n.notateNumber)(y,"Big")]})]}),b===c?null:(0,g.jsxs)(k.Z,{children:[(0,g.jsx)(j.Z,{mb:2,children:"Cost"}),(0,g.jsx)(k.Z,{direction:"row",gap:1,children:null==x?void 0:x.map(function(a,c){var b=a.rawName,d=a.amount;return(0,g.jsxs)(k.Z,{alignItems:"center",children:[(0,g.jsx)(r,{src:"".concat(n.prefix,"data/").concat(b,".png"),alt:""}),(0,g.jsx)(j.Z,{children:d})]},"".concat(t,"-").concat(b,"-").concat(c))})})]})]})})},"".concat(t,"-").concat(z))})})]})}}},function(a){a.O(0,[9774,2888,179],function(){return a(a.s=3802)}),_N_E=a.O()}])
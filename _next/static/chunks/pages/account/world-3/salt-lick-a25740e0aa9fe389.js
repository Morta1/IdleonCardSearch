(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1518],{66242:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(87462),l=n(63366),o=n(67294),s=n(86010),a=n(94780),i=n(90948),c=n(71657),u=n(90629),d=n(1588),f=n(34867);function getCardUtilityClass(e){return(0,f.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var C=n(85893);let v=["className","raised"],useUtilityClasses=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"]},getCardUtilityClass,t)},x=(0,i.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:a=!1}=n,i=(0,l.Z)(n,v),u=(0,r.Z)({},n,{raised:a}),d=useUtilityClasses(u);return(0,C.jsx)(x,(0,r.Z)({className:(0,s.Z)(d.root,o),elevation:a?8:void 0,ref:t,ownerState:u},i))});var m=Z},44267:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(87462),l=n(63366),o=n(67294),s=n(86010),a=n(94780),i=n(90948),c=n(71657),u=n(1588),d=n(34867);function getCardContentUtilityClass(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var f=n(85893);let C=["className","component"],useUtilityClasses=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"]},getCardContentUtilityClass,t)},v=(0,i.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),x=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:a="div"}=n,i=(0,l.Z)(n,C),u=(0,r.Z)({},n,{component:a}),d=useUtilityClasses(u);return(0,f.jsx)(v,(0,r.Z)({as:a,className:(0,s.Z)(d.root,o),ownerState:u,ref:t},i))});var Z=x},238:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-3/salt-lick",function(){return n(16766)}])},16766:function(e,t,n){"use strict";n.r(t);var r=n(82729),l=n(85893),o=n(67294),s=n(51626),a=n(1356),i=n(15861),c=n(51233),u=n(66242),d=n(44267),f=n(61599),C=n(2962);function _templateObject(){let e=(0,r._)(["\n  width: 30px;\n"]);return _templateObject=function(){return e},e}let v=f.Z.img(_templateObject());t.default=()=>{let{state:e}=(0,o.useContext)(s.I),{saltLick:t=[]}=null==e?void 0:e.account,calcBonusCost=e=>{var t;return Math.floor((null==e?void 0:e.baseCost)*Math.pow(null==e?void 0:e.increment,null!==(t=null==e?void 0:e.level)&&void 0!==t?t:0))},calcCostToMax=e=>{let t=0;for(let n=null==e?void 0:e.level;n<(null==e?void 0:e.maxLevel);n++)t+=calcBonusCost({...e,level:n});return null!=t?t:0},calcBonus=e=>{var t;return(0,a.round)(e.baseBonus*(null!==(t=e.level)&&void 0!==t?t:0))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(C.PB,{title:"Idleon Toolbox | Salt Lick",description:"Keep track of your salt lick levels and upgrades"}),(0,l.jsx)(i.Z,{variant:"h2",textAlign:"center",mb:3,children:"Salt Lick"}),(0,l.jsx)(c.Z,{alignItems:"center",gap:3,children:null==t?void 0:t.map((e,t)=>{let{desc:n,name:r,level:o,maxLevel:s,rawName:f,totalAmount:C}=e,x=calcBonusCost(e),Z=calcCostToMax(e),m=calcBonus(e);return(0,l.jsx)(u.Z,{sx:{width:{xs:"100%",md:630}},children:(0,l.jsx)(d.Z,{children:(0,l.jsxs)(c.Z,{sx:{flexDirection:{xs:"column",md:"row"}},justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[(0,l.jsxs)(c.Z,{gap:1,sx:{width:{md:350}},children:[(0,l.jsx)(i.Z,{children:(0,a.cleanUnderscore)(n.replace("{",m))}),(0,l.jsxs)(i.Z,{children:["Lv. ",o,"/",s]})]}),(0,l.jsxs)(c.Z,{justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(v,{src:"".concat(a.prefix,"data/").concat(f,".png"),alt:""}),Z>0?(0,l.jsxs)(i.Z,{children:[(0,a.kFormatter)(C,2)," / ",(0,a.kFormatter)(x,2)]}):(0,l.jsx)(i.Z,{sx:{alignSelf:"center",color:"success.main"},children:"MAXED"})]}),Z>0?(0,l.jsxs)(c.Z,{justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(v,{src:"".concat(a.prefix,"data/").concat(f,".png"),alt:""}),(0,l.jsx)(i.Z,{children:(0,a.kFormatter)(Z,2)})]}):null]})})},r+" "+t)})})]})}},82729:function(e,t,n){"use strict";function _tagged_template_literal(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return _tagged_template_literal}})}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=238)}),_N_E=e.O()}]);
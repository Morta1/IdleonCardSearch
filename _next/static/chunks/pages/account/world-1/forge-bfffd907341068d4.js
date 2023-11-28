(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9378],{66242:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var o=n(87462),r=n(63366),i=n(67294),l=n(86010),a=n(94780),s=n(90948),c=n(71657),u=n(90629),d=n(1588),m=n(34867);function getCardUtilityClass(t){return(0,m.Z)("MuiCard",t)}(0,d.Z)("MuiCard",["root"]);var v=n(85893);let p=["className","raised"],useUtilityClasses=t=>{let{classes:e}=t;return(0,a.Z)({root:["root"]},getCardUtilityClass,e)},x=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),f=i.forwardRef(function(t,e){let n=(0,c.Z)({props:t,name:"MuiCard"}),{className:i,raised:a=!1}=n,s=(0,r.Z)(n,p),u=(0,o.Z)({},n,{raised:a}),d=useUtilityClasses(u);return(0,v.jsx)(x,(0,o.Z)({className:(0,l.Z)(d.root,i),elevation:a?8:void 0,ref:e,ownerState:u},s))});var h=f},44267:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var o=n(87462),r=n(63366),i=n(67294),l=n(86010),a=n(94780),s=n(90948),c=n(71657),u=n(1588),d=n(34867);function getCardContentUtilityClass(t){return(0,d.Z)("MuiCardContent",t)}(0,u.Z)("MuiCardContent",["root"]);var m=n(85893);let v=["className","component"],useUtilityClasses=t=>{let{classes:e}=t;return(0,a.Z)({root:["root"]},getCardContentUtilityClass,e)},p=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),x=i.forwardRef(function(t,e){let n=(0,c.Z)({props:t,name:"MuiCardContent"}),{className:i,component:a="div"}=n,s=(0,r.Z)(n,v),u=(0,o.Z)({},n,{component:a}),d=useUtilityClasses(u);return(0,m.jsx)(p,(0,o.Z)({as:a,className:(0,l.Z)(d.root,i),ownerState:u,ref:e},s))});var f=x},33913:function(t,e,n){"use strict";n.d(e,{Z:function(){return isPast}});var o=n(19013),r=n(13882);function isPast(t){return(0,r.Z)(1,arguments),(0,o.Z)(t).getTime()<Date.now()}},76585:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-1/forge",function(){return n(98310)}])},57404:function(t,e,n){"use strict";var o=n(82729),r=n(85893),i=n(42168),l=n(61599),a=n(15861),s=n(51233);function _templateObject(){let t=(0,o._)(["\n  width: 23px;\n  height: 27px;\n  object-fit: contain;\n"]);return _templateObject=function(){return t},t}let c=l.Z.img(_templateObject());e.Z=t=>{let{centered:e=!0,style:n={},money:o,title:l="Total Money",maxCoins:u=5}=t;return(0,r.jsxs)("div",{style:n,children:[l?(0,r.jsx)(a.Z,{style:{textAlign:"center"},children:l}):null,(0,r.jsx)(s.Z,{flexWrap:"wrap",justifyContent:e?"center":"flex-start",direction:"row",gap:2.3,children:null==o?void 0:o.map((t,e)=>{let[n,o]=t;return e<u&&Number(o)>0?(0,r.jsxs)(s.Z,{justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(c,{src:"".concat(i.prefix,"data/Coins").concat(n,".png"),alt:""}),(0,r.jsx)(a.Z,{variant:"body1",component:"span",className:"coin-value",children:Number(o)})]},o+""+n):null})})]})}},68575:function(t,e,n){"use strict";var o=n(85893),r=n(67294),i=n(98396),l=n(11703),a=n(40044);e.Z=t=>{let{tabs:e,children:n,onTabChange:s}=t,[c,u]=(0,r.useState)(0),d=(0,i.Z)(t=>t.breakpoints.down("md"),{noSsr:!0}),m=Array.isArray(n)?n:[n];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{centered:!d||d&&e.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:d&&e.length>4?"scrollable":"standard",value:c,onChange:(t,e)=>{u(e),s&&s(e)},children:null==e?void 0:e.map((t,e)=>(0,o.jsx)(a.Z,{label:t},"".concat(t,"-").concat(e)))}),s?n:null==m?void 0:m.map((t,e)=>e===c?t:null)]})}},9137:function(t,e,n){"use strict";var o=n(85893),r=n(67294),i=n(60970),l=n(33913),a=n(42168),s=n(15861);let c=(0,r.forwardRef)((t,e)=>{let{date:n,startDate:c,lastUpdated:u,stopAtZero:d,type:m,pause:v,staticTime:p,placeholder:x,loop:f,variant:h="inherit",...Z}=t,[g,C]=(0,r.useState)();(0,r.useEffect)(()=>{if(n){if(p){if(!isFinite(n))return;return C({...(0,a.getDuration)(new Date().getTime(),n)})}let t=new Date,e=t.getTime()-(null!=u?u:0),o=(0,l.Z)(n);C({...(0,a.getDuration)(null==t?void 0:t.getTime(),n+e*("countdown"===m?-1:1)),overtime:"countdown"===m&&o})}},[n,u]);let tickUp=()=>{let{days:t,hours:e,minutes:n,seconds:o}=g;60===(o+=1)&&(o=0,60===(n+=1)&&(n=0,24===(e+=1)&&(t+=1))),C({...g,days:t,hours:e,minutes:n,seconds:o})},tickDown=()=>{let{days:t,hours:e,minutes:n,seconds:o}=g;if(0===t&&0===e&&0===n&&0===o){if(d)return;if(f)return C({...(0,a.getDuration)(new Date().getTime(),c)})}-1==(o-=1)&&(o=59,-1==(n-=1)&&(n=59,-1==(e-=1)&&(e=0,t-=1))),C({...g,days:t,hours:e,minutes:n,seconds:o})};(0,i.Z)(()=>{if(!g)return null;"countdown"!==m||(null==g?void 0:g.overtime)?tickUp():tickDown()},v||p?null:1e3);let wrapNumber=t=>{let e=String(t);return(null==e?void 0:e.length)===1?"0".concat(t):t};return g?((null==g?void 0:g.overtime)||v)&&x?(0,o.jsx)(s.Z,{...Z,ref:e,children:x}):(0,o.jsxs)(s.Z,{...Z,ref:e,variant:h,sx:{color:"".concat((null==g?void 0:g.overtime)&&!f?"#f91d1d":"")},component:"span",children:[(null==g?void 0:g.days)?wrapNumber(null==g?void 0:g.days)+"d:":"",wrapNumber(null==g?void 0:g.hours)+"h:",wrapNumber(null==g?void 0:g.minutes)+"m",(null==g?void 0:g.days)?"":":",(null==g?void 0:g.days)?"":wrapNumber(null==g?void 0:g.seconds)+"s"]}):null});e.Z=c},98310:function(t,e,n){"use strict";n.r(e);var o=n(85893),r=n(23513),i=n(67294),l=n(98396),a=n(15861),s=n(86886),c=n(66242),u=n(44267),d=n(51233),m=n(42168),v=n(57404),p=n(2962),x=n(68575),f=n(9137),h=n(87357);let Z={width:72,alignItems:"center"},Column=t=>{let{style:e={},name:n,value:r}=t;return(0,o.jsxs)("div",{style:e,children:[(0,o.jsx)(a.Z,{children:n}),(0,o.jsx)(a.Z,{component:"div",children:r})]})};e.default=()=>{var t,e,n,g,C,j;let{state:w}=(0,i.useContext)(r.I),y=(0,l.Z)(t=>t.breakpoints.down("md"),{noSsr:!0}),getCost=(t,e)=>e?t<5?Math.round(50*Math.pow(2.5,Math.pow(t,.51))):Math.round(400*Math.pow(e,t-5)):Math.round(200*Math.pow(5.4,Math.pow(t,.83))),getCostToMax=(t,e,n,o)=>{let r=0;for(let i=o?1:t;i<e;i++)r+=getCost(i,n);return null!=r?r:0};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.PB,{title:"Idleon Toolbox | Forge",description:"Keep track of your forge production"}),(0,o.jsx)(a.Z,{mt:2,mb:2,variant:"h2",children:"Forge"}),(0,o.jsxs)(x.Z,{tabs:["Slots","Upgrades"],children:[(0,o.jsx)(s.ZP,{container:!0,gap:2,children:null==w?void 0:null===(n=w.account)||void 0===n?void 0:null===(e=n.forge)||void 0===e?void 0:null===(t=e.list)||void 0===t?void 0:t.map((t,e)=>{var n;let{ore:r,barrel:i,bar:l,isBrimestone:v}=t,p=null!==(n=null==r?void 0:r.timeTillEmpty)&&void 0!==n?n:0,x=[r,i,l],g=x.every(t=>{let{rawName:e}=t;return"Blank"===e});return(0,o.jsx)(s.ZP,{item:!0,children:(0,o.jsx)(c.Z,{sx:{position:"relative",borderColor:v?"#9b689bbf":"none"},variant:"outlined",children:(0,o.jsx)(u.Z,{children:(0,o.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[null==x?void 0:x.map((t,e)=>{let{rawName:n,quantity:r}=t;return(0,o.jsxs)(d.Z,{sx:Z,children:[(0,o.jsx)("img",{style:{width:y?36:"auto",opacity:g?0:1},src:"".concat(m.prefix,"data/").concat(g?"CopperBar":n,".png"),alt:""}),r>0?(0,o.jsx)(a.Z,{variant:"body1",component:"span",children:r}):(0,o.jsx)(a.Z,{variant:"body1",component:"span",children:"\xa0"})]},"".concat(n,"-").concat(e))}),(0,o.jsxs)(h.Z,{children:[(0,o.jsx)(a.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Time till empty"}),(0,o.jsx)(f.Z,{type:"countdown",lastUpdated:null==w?void 0:w.lastUpdated,date:new Date().getTime()+p})]})]})})},"".concat(r,"-").concat(i,"-").concat(l,"-").concat(e))},"".concat(r,"-").concat(i,"-").concat(l,"-").concat(e))})}),(0,o.jsx)(d.Z,{gap:3,children:null==w?void 0:null===(j=w.account)||void 0===j?void 0:null===(C=j.forge)||void 0===C?void 0:null===(g=C.upgrades)||void 0===g?void 0:g.map((t,e)=>{let{level:n,maxLevel:r,description:i,costMulti:l}=t,s=getCost(n,l),p=getCostToMax(n,r,l),x=getCostToMax(n,r,l,!0);return(0,o.jsx)(c.Z,{sx:{width:"fit-content"},children:(0,o.jsx)(u.Z,{children:(0,o.jsxs)(d.Z,{direction:"row",gap:3,flexWrap:"wrap",children:[(0,o.jsx)(Column,{name:"Lv.",value:"".concat(n," / ").concat(r)}),(0,o.jsx)(Column,{style:{width:300},name:"Description",value:i}),(0,o.jsx)(Column,{style:{width:120},name:"Cost",value:n<r?(0,o.jsx)(v.Z,{centered:!1,title:"",maxCoins:3,money:(0,m.getCoinsArray)(s)}):(0,o.jsx)(a.Z,{color:"success.light",children:"Maxed"})}),(0,o.jsx)(Column,{style:{minWidth:120,alignItems:"flex-start"},name:n<r?"Cost to max":"Total cost",value:(0,o.jsx)(v.Z,{centered:!1,title:"",maxCoins:3,money:(0,m.getCoinsArray)(n<r?p:x)})})]})})},"".concat(n,"-").concat(e))})})]})]})}}},function(t){t.O(0,[6886,9774,2888,179],function(){return t(t.s=76585)}),_N_E=t.O()}]);
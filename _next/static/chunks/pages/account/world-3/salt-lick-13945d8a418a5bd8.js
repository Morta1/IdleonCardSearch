(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1518],{13505:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-3/salt-lick",function(){return t(94095)}])},94095:function(e,n,t){"use strict";t.r(n);var l=t(82729),c=t(85893),r=t(67294),s=t(21480),o=t(30925),a=t(15861),i=t(51233),u=t(66242),d=t(44267),x=t(61599),h=t(2962);function _templateObject(){let e=(0,l._)(["\n  width: 30px;\n"]);return _templateObject=function(){return e},e}let p=x.Z.img(_templateObject());n.default=()=>{let{state:e}=(0,r.useContext)(s.I),{saltLick:n=[]}=null==e?void 0:e.account,calcBonusCost=e=>{var n;return Math.floor((null==e?void 0:e.baseCost)*Math.pow(null==e?void 0:e.increment,null!==(n=null==e?void 0:e.level)&&void 0!==n?n:0))},calcCostToMax=e=>{let n=0;for(let t=null==e?void 0:e.level;t<(null==e?void 0:e.maxLevel);t++)n+=calcBonusCost({...e,level:t});return null!=n?n:0},calcBonus=e=>{var n;return(0,o.round)(e.baseBonus*(null!==(n=e.level)&&void 0!==n?n:0))};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(h.PB,{title:"Salt Lick | Idleon Toolbox",description:"Keep track of your salt lick levels and upgrades"}),(0,c.jsx)(a.Z,{variant:"h2",textAlign:"center",mb:3,children:"Salt Lick"}),(0,c.jsx)(i.Z,{alignItems:"center",gap:3,children:null==n?void 0:n.map((e,n)=>{let{desc:t,name:l,level:r,maxLevel:s,rawName:x,totalAmount:h}=e,j=calcBonusCost(e),f=calcCostToMax(e),m=calcBonus(e);return(0,c.jsx)(u.Z,{sx:{width:{xs:"100%",md:630},outline:r>=s?"1px solid":"",outlineColor:e=>r>=s?e.palette.success.light:""},children:(0,c.jsx)(d.Z,{children:(0,c.jsxs)(i.Z,{sx:{flexDirection:{xs:"column",md:"row"}},justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[(0,c.jsxs)(i.Z,{gap:1,sx:{width:{md:350}},children:[(0,c.jsx)(a.Z,{children:(0,o.cleanUnderscore)(t.replace("{",m))}),(0,c.jsxs)(a.Z,{children:["Lv. ",r,"/",s]})]}),(0,c.jsxs)(i.Z,{justifyContent:"center",alignItems:"center",children:[(0,c.jsx)(p,{src:"".concat(o.prefix,"data/").concat(x,".png"),alt:""}),f>0?(0,c.jsxs)(a.Z,{children:[(0,o.kFormatter)(h,2)," / ",(0,o.kFormatter)(j,2)]}):(0,c.jsx)(a.Z,{sx:{alignSelf:"center",color:"success.main"},children:"Maxed"})]}),f>0?(0,c.jsxs)(i.Z,{justifyContent:"center",alignItems:"center",children:[(0,c.jsx)(p,{src:"".concat(o.prefix,"data/").concat(x,".png"),alt:""}),(0,c.jsx)(a.Z,{children:(0,o.kFormatter)(f,2)})]}):null]})})},l+" "+n)})})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=13505)}),_N_E=e.O()}]);
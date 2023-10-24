(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9876],{87789:function(n,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-3/construction",function(){return t(42021)}])},42021:function(n,l,t){"use strict";t.r(l);var o=t(82729),e=t(85893),i=t(15861),r=t(51233),a=t(33454),d=t(96420),u=t(87357),c=t(66242),s=t(44267),v=t(67294),x=t(1356),p=t(51626),h=t(61599),j=t(70478),m=t(83321),g=t(56868),b=t(74721),f=t(23795),Z=t(2962);function _templateObject(){let n=(0,o._)(["\n  position: relative;\n  background-image: url(",');\n  background-repeat: no-repeat;\n  width: 43px;\n\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    z-index: -1;\n    ',"\n\n    width: 44px;\n    height: 41px;\n    top: 1px;\n    left: -1px;\n  }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,o._)(["\n  width: 43px;\n  height: 42px;\n"]);return _templateObject1=function(){return n},n}function _templateObject2(){let n=(0,o._)(["\n  width: 43px;\n  height: 42px;\n"]);return _templateObject2=function(){return n},n}let _={fontSize:12,fontWeight:400,position:"absolute",top:0,left:0,backgroundColor:"black"},Total=n=>{let{title:l,value:t}=n;return(0,e.jsx)(c.Z,{children:(0,e.jsx)(s.Z,{children:(0,e.jsxs)(r.Z,{children:[(0,e.jsx)(i.Z,{children:l}),(0,e.jsx)(i.Z,{children:t})]})})})},CogTooltip=n=>{var l;let{character:t,index:o,currentAmount:r,requiredAmount:a,cog:d}=n;return(0,e.jsxs)(e.Fragment,{children:[t?(0,e.jsx)(i.Z,{sx:{fontWeight:"bold"},children:t}):null,r<a?(0,e.jsxs)(i.Z,{children:[(0,x.kFormatter)(r,2)," / ",(0,x.kFormatter)(a,2)," (",(0,x.kFormatter)(r/a*100,2),"%)"]}):null,null===(l=Object.values(null==d?void 0:d.stats))||void 0===l?void 0:l.map((n,l)=>{let{name:t,value:o}=n;return t?(0,e.jsxs)("div",{children:[(0,x.kFormatter)(o,2),(0,x.cleanUnderscore)(t)]},"".concat(t,"-").concat(l)):null}),"index: ",o]})},k=h.Z.div(_templateObject(),()=>"".concat(x.prefix,"data/CogSq0.png"),n=>{let{filled:l}=n;return 0===l||100===l?"":"background: linear-gradient(to top, #9de060 ".concat(l,"%, transparent 0%);")}),y=h.Z.img(_templateObject1()),C=h.Z.img(_templateObject2());l.default=()=>{var n,l,t,o,c,s,h,w,F;let{state:T}=(0,v.useContext)(p.I),[O,E]=(0,v.useState)("build"),handleCopy=async n=>{try{await navigator.clipboard.writeText(n)}catch(n){console.error(n)}};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Z.PB,{title:"Idleon Toolbox | Construction",description:"Keep track of your construction board, cogs information and more"}),(0,e.jsx)(i.Z,{variant:"h2",textAlign:"center",mb:3,children:"Construction"}),(0,e.jsxs)(r.Z,{alignItems:"center",children:[(0,e.jsxs)(a.Z,{value:O,exclusive:!0,onChange:(n,l)=>(null==l?void 0:l.length)?E(l):null,children:[(0,e.jsx)(d.Z,{value:"build",children:"Build"}),(0,e.jsx)(d.Z,{value:"buildPercent",children:"Build %"}),(0,e.jsx)(d.Z,{value:"exp",children:"Exp"}),(0,e.jsx)(d.Z,{value:"flaggy",children:"Flaggy"}),(0,e.jsx)(d.Z,{value:"classExp",children:"Class Exp"})]}),(0,e.jsxs)(r.Z,{my:1,children:[(0,e.jsxs)(r.Z,{my:1,gap:1,direction:"row",alignItems:"center",justifyContent:"center",children:[(0,e.jsxs)(i.Z,{variant:"h6",textAlign:"center",children:["Cogstruction"," "]}),(0,e.jsx)(j.Z,{followCursor:!1,title:(0,e.jsxs)(e.Fragment,{children:["You can export your data and use it in"," ",(0,e.jsx)(f.Z,{target:"_blank",underline:"always",color:"info.dark",href:"https://github.com/automorphis/Cogstruction",rel:"noreferrer",children:"Cogstruction"})]}),children:(0,e.jsx)(b.Z,{})})]}),(0,e.jsxs)(r.Z,{direction:"row",gap:2,children:[(0,e.jsx)(m.Z,{variant:"contained",color:"primary",sx:{textTransform:"unset"},onClick:()=>{var n,l,t;return handleCopy(null==T?void 0:null===(t=T.account)||void 0===t?void 0:null===(l=t.construction)||void 0===l?void 0:null===(n=l.cogstruction)||void 0===n?void 0:n.cogData)},startIcon:(0,e.jsx)(g.Z,{}),children:"Cogstruction Data"}),(0,e.jsx)(m.Z,{variant:"contained",color:"primary",sx:{textTransform:"unset"},onClick:()=>{var n,l,t;return handleCopy(null==T?void 0:null===(t=T.account)||void 0===t?void 0:null===(l=t.construction)||void 0===l?void 0:null===(n=l.cogstruction)||void 0===n?void 0:n.empties)},startIcon:(0,e.jsx)(g.Z,{}),children:"Cogstruction Empties"})]})]}),(0,e.jsxs)(r.Z,{direction:"row",my:2,gap:2,children:[(0,e.jsx)(Total,{title:"Total Build Speed",value:"".concat((0,x.notateNumber)(null==T?void 0:null===(l=T.account)||void 0===l?void 0:null===(n=l.construction)||void 0===n?void 0:n.totalBuildRate),"/HR")}),(0,e.jsx)(Total,{title:"Player XP Bonus",value:"".concat((0,x.notateNumber)(null==T?void 0:null===(o=T.account)||void 0===o?void 0:null===(t=o.construction)||void 0===t?void 0:t.totalExpRate),"%")}),(0,e.jsx)(Total,{title:"Flaggy Rate",value:"".concat((0,x.notateNumber)(null==T?void 0:null===(s=T.account)||void 0===s?void 0:null===(c=s.construction)||void 0===c?void 0:c.totalFlaggyRate),"/HR")})]}),(0,e.jsx)(u.Z,{mt:3,sx:{display:"grid",gridTemplateColumns:{xs:"repeat(8, minmax(43px, 1fr))",md:"repeat(12, minmax(43px, 1fr))"}},children:null==T?void 0:null===(F=T.account)||void 0===F?void 0:null===(w=F.construction)||void 0===w?void 0:null===(h=w.board)||void 0===h?void 0:h.map((n,l)=>{var t,o,r,a,d,c,s,v,p,h,m,g,b,f,Z,w,F,T,E,P,N;let{currentAmount:B,requiredAmount:I,flagPlaced:R,cog:S}=n,X=B/I*100;return(0,e.jsx)(u.Z,{children:(0,e.jsx)(j.Z,{title:(0,e.jsx)(CogTooltip,{...n,index:l,character:(null==S?void 0:null===(t=S.name)||void 0===t?void 0:t.includes("Player"))?null==S?void 0:null===(o=S.name)||void 0===o?void 0:o.split("Player_")[1]:""}),children:(0,e.jsxs)(k,{filled:X,rest:100-X,children:[R?(0,e.jsx)(y,{src:"".concat(x.prefix,"data/CogFLflag.png"),alt:""}):null,(null==S?void 0:S.name)&&!R?(0,e.jsx)(C,{src:"".concat(x.prefix,"data/").concat((null==S?void 0:null===(r=S.name)||void 0===r?void 0:r.includes("Player"))?"headBIG":null==S?void 0:S.name,".png"),alt:""}):null,"build"!==O||R?null:(0,e.jsx)(i.Z,{sx:_,children:null!==(w=(0,x.kFormatter)(null==S?void 0:null===(d=S.stats)||void 0===d?void 0:null===(a=d.a)||void 0===a?void 0:a.value))&&void 0!==w?w:null}),"buildPercent"!==O||R?null:(0,e.jsx)(i.Z,{sx:_,children:null!==(F=(0,x.kFormatter)(null==S?void 0:null===(s=S.stats)||void 0===s?void 0:null===(c=s.e)||void 0===c?void 0:c.value))&&void 0!==F?F:null}),"exp"!==O||R?null:(0,e.jsx)(i.Z,{sx:_,children:null!==(E=null!==(T=(0,x.kFormatter)(null==S?void 0:null===(p=S.stats)||void 0===p?void 0:null===(v=p.b)||void 0===v?void 0:v.value))&&void 0!==T?T:(0,x.kFormatter)(null==S?void 0:null===(m=S.stats)||void 0===m?void 0:null===(h=m.d)||void 0===h?void 0:h.value))&&void 0!==E?E:null}),"flaggy"!==O||R?null:(0,e.jsx)(i.Z,{sx:_,children:null!==(P=(0,x.kFormatter)(null==S?void 0:null===(b=S.stats)||void 0===b?void 0:null===(g=b.c)||void 0===g?void 0:g.value))&&void 0!==P?P:null}),"classExp"!==O||R?null:(0,e.jsx)(i.Z,{sx:_,children:null!==(N=(0,x.kFormatter)(null==S?void 0:null===(Z=S.stats)||void 0===Z?void 0:null===(f=Z.j)||void 0===f?void 0:f.value))&&void 0!==N?N:null})]})})},l)})})]})]})}}},function(n){n.O(0,[1388,9774,2888,179],function(){return n(n.s=87789)}),_N_E=n.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4490],{27242:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-2/cauldrons",function(){return l(31169)}])},91921:function(e,n,l){"use strict";var t=l(82729),i=l(85893),r=l(30925),o=l(61599),s=l(23972),c=l(51233);function _templateObject(){let e=(0,t._)(["\n  width: 23px;\n  height: 27px;\n  object-fit: contain;\n"]);return _templateObject=function(){return e},e}let a=o.Z.img(_templateObject());n.Z=e=>{let{variant:n="vertical",centered:l=!0,style:t={},money:o,title:d="Total Money",maxCoins:u=5}=e;return(0,i.jsxs)("div",{style:t,children:[d?(0,i.jsx)(s.Z,{style:{textAlign:l?"center":"left"},children:d}):null,(0,i.jsx)(c.Z,{flexWrap:"wrap",justifyContent:l?"center":"flex-start",direction:"row",gap:"vertical"===n?2.3:1,children:null==o?void 0:o.map((e,l)=>{let[t,o]=e;return l<u&&Number(o)>=0?(0,i.jsxs)(c.Z,{direction:"vertical"===n?"column":"row",gap:"vertical"===n?0:.5,justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(a,{src:"".concat(r.prefix,"data/Coins").concat(t,".png"),alt:""}),(0,i.jsx)(s.Z,{variant:"body1",component:"span",className:"coin-value",children:Number(o)})]},o+""+t):null})})]})}},89309:function(e,n,l){"use strict";var t=l(85893),i=l(87357),r=l(81458),o=l(23972);l(67294),n.Z=e=>{let{percent:n,bgColor:l,label:s=!0,sx:c,boxSx:a={},pre:d}=e;return(0,t.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",...a},children:[d,(0,t.jsx)(i.Z,{sx:{width:"100%",mr:s?1:0},children:(0,t.jsx)(r.Z,{sx:{width:"100%",height:10,borderRadius:5,"& .MuiLinearProgress-bar":{backgroundColor:l||""},...c},variant:"determinate",value:n>100?100:n})}),s?(0,t.jsx)(i.Z,{children:(0,t.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(n),"%")})}):null]})}},64885:function(e,n,l){"use strict";l.d(n,{Gr:function(){return MissingData},M5:function(){return v},Wd:function(){return PlayersList},Ye:function(){return CardTitleAndValue},iy:function(){return CardAndBorder},j8:function(){return m},tq:function(){return Breakdown},u3:function(){return TalentTooltip},uQ:function(){return TitleAndValue},wD:function(){return CenteredStack}});var t=l(82729),i=l(85893),r=l(67294),o=l(30925),s=l(51233),c=l(23972),a=l(49425),d=l(66242),u=l(44267),x=l(67720),p=l(61599),h=l(2511),j=l(54685);function _templateObject(){let e=(0,t._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,t._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,t._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,t._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return _templateObject3=function(){return e},e}let v=(0,r.forwardRef)((e,n)=>{let{stat:l,icon:t,img:r,title:a="",...d}=e;return(0,i.jsx)(h.Z,{title:a,children:(0,i.jsxs)(s.Z,{alignItems:"center",...d,ref:n,style:{position:"relative",width:"fit-content"},children:[(0,i.jsx)("img",{...r,src:"".concat(o.prefix,"data/").concat(t,".png"),alt:""}),(0,i.jsx)(c.Z,{variant:"body1",component:"span",children:l})]})})});v.displayName="IconWithText";let TitleAndValue=e=>{let{title:n,value:l,boldTitle:t,titleStyle:r={},valueStyle:o={}}=e;return(0,i.jsxs)(s.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[n?(0,i.jsxs)(c.Z,{sx:r,fontWeight:t?"bold":500,component:"span",children:[n,":\xa0"]}):null,(0,i.jsx)(c.Z,{fontSize:15,component:"span",sx:o,children:l})]})},m=(0,p.Z)(a.Z)(_templateObject()),CardAndBorder=e=>{let{cardName:n,stars:l,cardIndex:t,name:r,variant:s,rawName:c,amount:a,nextLevelReq:d}=e,u="cardSet"===s?"".concat(o.prefix,"data/").concat(c,".png"):"".concat(o.prefix,"data/2Cards").concat(t,".png");return(0,i.jsxs)(i.Fragment,{children:[l>0?(0,i.jsx)(b,{src:"".concat(o.prefix,"data/CardEquipBorder").concat(l,".png"),alt:""}):null,(0,i.jsx)(h.Z,{title:(0,i.jsx)(CardTooltip,{...e,cardName:"cardSet"===s?r:n,nextLevelReq:d,amount:a}),children:(0,i.jsx)(g,{isCardSet:"cardSet"===s,amount:a,src:u,alt:""})})]})},CardTooltip=e=>{let{displayName:n,effect:l,bonus:t,stars:r,showInfo:a,nextLevelReq:d,amount:u}=e,x=t;return a&&(x=(0,j.BZ)({bonus:t,stars:r})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(n)}),(0,i.jsx)(c.Z,{children:(0,o.cleanUnderscore)(l.replace("{",x))}),a?(0,i.jsx)(s.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,l)=>(0,i.jsxs)(s.Z,{alignItems:"center",justifyContent:"space-between",children:[0===l?(0,i.jsx)(c.Z,{children:"Base"}):(0,i.jsx)(Z,{src:"".concat(o.prefix,"etc/Star").concat(l,".png"),alt:""}),(0,i.jsx)(c.Z,{children:t*(l+1)})]},"".concat(n,"-").concat(l)))}):null,u>=d?(0,i.jsxs)(s.Z,{children:["You've collected ",(0,o.numberWithCommas)(u)," cards"]}):d>0?(0,i.jsxs)(s.Z,{children:["Progress: ",(0,o.numberWithCommas)(u)," / ",(0,o.numberWithCommas)(d)]}):null]})},Z=p.Z.img(_templateObject1()),g=p.Z.img(_templateObject2(),e=>{let{amount:n,isCardSet:l}=e;return n||l?1:.5}),b=p.Z.img(_templateObject3()),TalentTooltip=e=>{let{level:n,funcX:l,x1:t,x2:r,funcY:a,y1:d,y2:u,description:x,name:p,talentId:h}=e,j=n>0?(0,o.growth)(l,n,t,r):0,v=n>0?(0,o.growth)(a,n,d,u):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)("img",{src:"".concat(o.prefix,"data/UISkillIcon").concat(h,".png"),alt:""}),(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(p)})]}),(0,i.jsx)(c.Z,{children:(0,o.cleanUnderscore)(x).replace("{",j).replace("}",v)})]})},PlayersList=e=>{let{players:n,characters:l}=e;return(0,i.jsx)(s.Z,{gap:1,direction:"row",children:n.map(e=>{var n,t;let{index:r}=e;return(0,i.jsx)(h.Z,{title:null==l?void 0:null===(n=l[r])||void 0===n?void 0:n.name,children:(0,i.jsx)("img",{style:{width:24,height:24},src:"".concat(o.prefix,"data/ClassIcons").concat(null==l?void 0:null===(t=l[r])||void 0===t?void 0:t.classIndex,".png"),alt:""})},name+"-head-"+r)})})},MissingData=e=>{let{name:n}=e;return(0,i.jsxs)(c.Z,{variant:"h3",children:["Your account is missing data for ",n]})},CardTitleAndValue=e=>{let{variant:n,raised:l,cardSx:t,imgOnly:r,imgStyle:a,title:x,value:p,children:j,icon:v,tooltipTitle:m,stackProps:Z}=e;return(0,i.jsx)(h.Z,{title:m||"",children:(0,i.jsx)(d.Z,{variant:n,raised:l,sx:{my:{xs:0,md:3},width:"fit-content",...t},children:(0,i.jsx)(u.Z,{children:(0,i.jsxs)(s.Z,{sx:{display:Z?"flex":"block",...Z||{}},children:[(0,i.jsx)(c.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:x}),p||r?v?(0,i.jsxs)(s.Z,{direction:"row",gap:2,alignItems:"center",children:[(0,i.jsx)("img",{style:{objectFit:"contain",...a},src:"".concat(o.prefix).concat(v),alt:""}),p?(0,i.jsx)(c.Z,{children:p}):null]}):(0,i.jsx)(c.Z,{children:p}):j]})})})})},Breakdown=e=>{let{breakdown:n,titleStyle:l={},notation:t="Big"}=e;return(0,i.jsx)(i.Fragment,{children:null==n?void 0:n.map((e,n)=>{let{name:r,value:s,title:a}=e;return a?(0,i.jsx)(c.Z,{sx:{fontWeight:500},children:a},"".concat(r,"-").concat(n)):r?(0,i.jsx)(TitleAndValue,{titleStyle:{width:120,...l},title:r,value:isNaN(s)?s:(0,o.notateNumber)(s,t)},"".concat(r,"-").concat(n)):(0,i.jsx)(x.Z,{sx:{my:1,bgcolor:"black"}},"".concat(r,"-").concat(n))})})},CenteredStack=e=>{let{direction:n="row",children:l}=e;return(0,i.jsx)(s.Z,{gap:1,direction:n,alignItems:"center",children:l})}},31169:function(e,n,l){"use strict";l.r(n);var t=l(85893),i=l(23972),r=l(51233),o=l(66242),s=l(44267),c=l(21023),a=l(67294),d=l(21480),u=l(89309),x=l(30925),p=l(49946),h=l(64885),j=l(87357),v=l(2962),m=l(91921),Z=l(88054);let g=[p.Z.palette.warning.light,p.Z.palette.success.light,"#b452ec","#ecec31"],b=["#61d5e8","#34c6fd","#2073ff","#3e2027"],CostTooltip=e=>{let{children:n,shouldDisplay:l,cost:o,costToMax:s}=e;return l?(0,t.jsx)(c.Z,{dark:!0,title:(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(i.Z,{variant:"body1",children:"Cost"}),(0,t.jsx)(m.Z,{title:"",maxCoins:3,money:(0,x.getCoinsArray)(o)}),(0,t.jsx)(i.Z,{variant:"body1",mt:2,children:"Cost To Max"}),(0,t.jsx)(m.Z,{title:"",maxCoins:3,money:(0,x.getCoinsArray)(s)})]}),children:n}):n},Section=e=>{let{title:n,value:l,maxLevel:r}=e;return(0,t.jsx)(o.Z,{sx:{outline:l>=r?"1px solid":"",outlineColor:e=>l>=r?e.palette.success.light:""},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{children:n}),(0,t.jsxs)(i.Z,{children:["Lv. ",l]})]})})};n.default=()=>{var e,n,l,c,p,m,f,w,C,y,D;let{state:T}=(0,a.useContext)(d.I),{alchemy:_}=(null==T?void 0:T.account)||{};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.PB,{title:"Cauldrons | Idleon Toolbox",description:"Cauldrons progression and stats"}),(0,t.jsx)(i.Z,{variant:"h4",mb:3,children:"Brewing"}),(0,t.jsx)(r.Z,{direction:"row",flexWrap:"wrap",gap:2,children:null===(e=Object.entries((null==_?void 0:_.cauldrons)||{}))||void 0===e?void 0:e.map((e,n)=>{var l;let[c,a]=e;return(0,t.jsx)(o.Z,{sx:{width:{md:450}},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(r.Z,{direction:"row",gap:1,children:[(0,t.jsx)(i.Z,{color:g[n],children:c.capitalize()}),(0,t.jsx)(h.Wd,{players:a.players,characters:null==T?void 0:T.characters})]}),(0,t.jsx)(u.Z,{bgColor:g[n],percent:a.progress/a.req*100}),(0,t.jsxs)(i.Z,{children:[(0,x.notateNumber)(a.progress,"Big")," / ",(0,x.notateNumber)(a.req,"Big")]}),(0,t.jsx)(r.Z,{mt:1,direction:"row",flexWrap:"wrap",gap:2,children:null===(l=Object.entries(a.boosts||{}))||void 0===l?void 0:l.map((e,l)=>{let[r,{level:a,progress:d,req:p}]=e;return(0,t.jsx)(o.Z,{sx:{width:200,outline:a>=Z.mD.brewing?"1px solid":"",outlineColor:e=>a>=Z.mD.brewing?e.palette.success.light:""},variant:"outlined",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{component:"span",sx:{display:"inline-block",width:50,mr:1},children:r.capitalize()}),(0,t.jsxs)(i.Z,{component:"span",children:["Lv. ",a," / ",Z.mD.brewing]}),(0,t.jsx)(u.Z,{bgColor:g[n],percent:d/p*100}),(0,t.jsxs)(i.Z,{children:[(0,x.notateNumber)(d,"Big")," / ",(0,x.notateNumber)(p,"Big")]})]})},"".concat(c,"-").concat(n,"-").concat(l))})})]})},"".concat(c,"-").concat(n))})}),(0,t.jsx)(i.Z,{my:3,variant:"h4",mb:3,children:"Pay 2 Win"}),(0,t.jsx)(i.Z,{my:3,variant:"h5",mb:3,children:"Liquids"}),(0,t.jsx)(r.Z,{direction:"row",flexWrap:"wrap",gap:2,children:null==_?void 0:null===(n=_.p2w.liquids)||void 0===n?void 0:n.map((e,n)=>{var l,c;let{name:a,regen:d,capacity:p,players:j}=e,{maxLiquid:v,decantCap:m,decantRate:g}=null==_?void 0:null===(l=_.liquidCauldrons)||void 0===l?void 0:l[n],f=null==_?void 0:null===(c=_.liquids)||void 0===c?void 0:c[n];return(0,t.jsx)(o.Z,{children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(r.Z,{mb:1,direction:"row",alignItems:"center",gap:2,children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/aJarL").concat(n,".png"),alt:""}),(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(i.Z,{component:"span",sx:{display:"inline-block",mr:1},children:a.capitalize()}),(0,t.jsx)(h.Wd,{players:j,characters:null==T?void 0:T.characters})]})]}),(0,t.jsxs)(i.Z,{variant:"caption",children:[Math.round(f)," / ",v]}),(0,t.jsx)(u.Z,{bgColor:null==b?void 0:b[n],pre:(0,t.jsx)("img",{src:"".concat(x.prefix,"data/Liquid").concat(n+1,"_x1.png"),alt:""}),percent:f/v*100}),(0,t.jsxs)(r.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[(0,t.jsx)(o.Z,{variant:"outlined",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(i.Z,{children:["Cap Lv.",null==m?void 0:m.level]}),(0,t.jsxs)(i.Z,{children:[(0,x.notateNumber)(null==m?void 0:m.progress),"/",(0,x.notateNumber)(null==m?void 0:m.req)]})]})}),(0,t.jsx)(o.Z,{variant:"outlined",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(i.Z,{children:["Rate Lv.",null==g?void 0:g.level]}),(0,t.jsxs)(i.Z,{children:[(0,x.notateNumber)(null==g?void 0:g.progress),"/",(0,x.notateNumber)(null==g?void 0:g.req)]})]})}),(0,t.jsx)(CostTooltip,{shouldDisplay:(null==d?void 0:d.level)<Z.mD.liquidsRegen,cost:null==d?void 0:d.cost,costToMax:null==d?void 0:d.costToMax,children:(0,t.jsx)(o.Z,{variant:"outlined",sx:{outline:(null==d?void 0:d.level)>=Z.mD.liquidsRegen?"1px solid":"",outlineColor:e=>(null==d?void 0:d.level)>=Z.mD.liquidsRegen?e.palette.success.light:""},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{children:"Regen"}),(0,t.jsxs)(i.Z,{children:["Lv. ",null==d?void 0:d.level," / ",Z.mD.liquidsRegen]})]})})}),(0,t.jsx)(CostTooltip,{shouldDisplay:(null==p?void 0:p.level)<Z.mD.liquidsRegen,cost:null==p?void 0:p.cost,costToMax:null==p?void 0:p.costToMax,children:(0,t.jsx)(o.Z,{variant:"outlined",sx:{outline:(null==p?void 0:p.level)>=Z.mD.liquidsCapacity?"1px solid":"",outlineColor:e=>(null==p?void 0:p.level)>=Z.mD.liquidsCapacity?e.palette.success.light:""},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{children:"Capacity"}),(0,t.jsxs)(i.Z,{children:["Lv. ",null==p?void 0:p.level," / ",Z.mD.liquidsCapacity]})]})})})]})]})},"".concat(a,"-").concat(n))})}),(0,t.jsx)(i.Z,{my:3,variant:"h5",mb:3,children:"Cauldrons"}),(0,t.jsx)(r.Z,{direction:"row",flexWrap:"wrap",gap:2,children:null==_?void 0:null===(l=_.p2w.cauldrons)||void 0===l?void 0:l.map((e,n)=>{let{name:l,speed:c,newBubble:a,boostReq:d}=e;return(0,t.jsx)(o.Z,{sx:{width:{md:485}},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(r.Z,{mb:1,direction:"row",alignItems:"center",gap:2,children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/aJarB").concat(n,".png"),alt:""}),(0,t.jsx)(i.Z,{component:"span",sx:{display:"inline-block",mr:1},children:l.capitalize()})]}),(0,t.jsxs)(r.Z,{direction:"row",gap:1,flexWrap:"wrap",children:[(0,t.jsx)(CostTooltip,{shouldDisplay:(null==c?void 0:c.level)<Z.mD.cauldronsSpeed,cost:null==c?void 0:c.cost,costToMax:null==c?void 0:c.costToMax,children:(0,t.jsx)(o.Z,{variant:"outlined",sx:{outline:(null==c?void 0:c.level)>=Z.mD.cauldronsSpeed?"1px solid":"",outlineColor:e=>(null==c?void 0:c.level)>=Z.mD.cauldronsSpeed?e.palette.success.light:""},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{children:"Speed"}),(0,t.jsxs)(i.Z,{children:["Lv. ",null==c?void 0:c.level," / ",Z.mD.cauldronsSpeed]})]})})}),(0,t.jsx)(CostTooltip,{shouldDisplay:(null==a?void 0:a.level)<Z.mD.cauldronsNewBubble,cost:null==a?void 0:a.cost,costToMax:null==a?void 0:a.costToMax,children:(0,t.jsx)(o.Z,{variant:"outlined",sx:{outline:(null==a?void 0:a.level)>=Z.mD.cauldronsNewBubble?"1px solid":"",outlineColor:e=>(null==a?void 0:a.level)>=Z.mD.cauldronsNewBubble?e.palette.success.light:""},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{children:"New Bubble Chance"}),(0,t.jsxs)(i.Z,{children:["Lv. ",null==a?void 0:a.level," / ",Z.mD.cauldronsNewBubble]})]})})}),(0,t.jsx)(CostTooltip,{shouldDisplay:(null==d?void 0:d.level)<Z.mD.cauldronsBoostReq,cost:null==d?void 0:d.cost,costToMax:null==d?void 0:d.costToMax,children:(0,t.jsx)(o.Z,{variant:"outlined",sx:{outline:(null==d?void 0:d.level)>=Z.mD.cauldronsBoostReq?"1px solid":"",outlineColor:e=>(null==d?void 0:d.level)>=Z.mD.cauldronsBoostReq?e.palette.success.light:""},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{children:"Boost Req"}),(0,t.jsxs)(i.Z,{children:["Lv. ",null==d?void 0:d.level," / ",Z.mD.cauldronsBoostReq]})]})})})]})]})},"".concat(l,"-").concat(n))})}),(0,t.jsxs)(r.Z,{direction:"row",gap:3,children:[(0,t.jsxs)(j.Z,{children:[(0,t.jsx)(i.Z,{my:3,variant:"h5",mb:3,children:"Player"}),(0,t.jsxs)(r.Z,{direction:"row",gap:1,flexWrap:"wrap",children:[(0,t.jsx)(Section,{title:"Alch speed",value:null==_?void 0:null===(p=_.p2w)||void 0===p?void 0:null===(c=p.player)||void 0===c?void 0:c.speed}),(0,t.jsx)(Section,{title:"Extra Exp",value:null==_?void 0:null===(f=_.p2w)||void 0===f?void 0:null===(m=f.player)||void 0===m?void 0:m.extraExp})]})]}),(0,t.jsxs)(j.Z,{children:[(0,t.jsx)(i.Z,{my:3,variant:"h5",mb:3,children:"Vials"}),(0,t.jsxs)(r.Z,{direction:"row",gap:1,flexWrap:"wrap",children:[(0,t.jsx)(Section,{title:"Attempts",maxLevel:Z.mD.vialsAttempts,value:null==_?void 0:null===(C=_.p2w)||void 0===C?void 0:null===(w=C.vials)||void 0===w?void 0:w.attempts}),(0,t.jsx)(Section,{title:"RNG",maxLevel:Z.mD.vialsRng,value:null==_?void 0:null===(D=_.p2w)||void 0===D?void 0:null===(y=D.vials)||void 0===y?void 0:y.rng})]})]})]})]})}}},function(e){e.O(0,[3992,9774,2888,179],function(){return e(e.s=27242)}),_N_E=e.O()}]);
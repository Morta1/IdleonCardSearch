(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6778],{13163:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-2/old-bubbles",function(){return n(58609)}])},30509:function(e,l,n){"use strict";var t=n(85893),i=n(67294),o=n(98396),a=n(11703),r=n(40044);l.Z=e=>{let{tabs:l,children:n,onTabChange:c,forceScroll:d}=e,[s,u]=(0,i.useState)(0),v=(0,o.Z)(e=>e.breakpoints.down("md"),{noSsr:!0}),h=Array.isArray(n)?n:[n];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{centered:!v||v&&l.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:v&&l.length>4||d?"scrollable":"standard",value:s,onChange:(e,l)=>{u(l),c&&c(l)},children:null==l?void 0:l.map((e,l)=>(0,t.jsx)(r.Z,{wrapped:!0,label:e},"".concat(e,"-").concat(l)))}),c?n:null==h?void 0:h.map((e,l)=>l===s?e:null)]})}},64885:function(e,l,n){"use strict";n.d(l,{Gr:function(){return MissingData},M5:function(){return g},Wd:function(){return PlayersList},Ye:function(){return CardTitleAndValue},iy:function(){return CardAndBorder},j8:function(){return j},tq:function(){return Breakdown},u3:function(){return TalentTooltip},uQ:function(){return TitleAndValue},wD:function(){return CenteredStack}});var t=n(82729),i=n(85893),o=n(67294),a=n(30925),r=n(51233),c=n(23972),d=n(49425),s=n(66242),u=n(44267),v=n(67720),h=n(61599),x=n(2511),b=n(54685);function _templateObject(){let e=(0,t._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,t._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,t._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,t._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return _templateObject3=function(){return e},e}let g=(0,o.forwardRef)((e,l)=>{let{stat:n,icon:t,img:o,title:d="",...s}=e;return(0,i.jsx)(x.Z,{title:d,children:(0,i.jsxs)(r.Z,{alignItems:"center",...s,ref:l,style:{position:"relative",width:"fit-content"},children:[(0,i.jsx)("img",{...o,src:"".concat(a.prefix,"data/").concat(t,".png"),alt:""}),(0,i.jsx)(c.Z,{variant:"body1",component:"span",children:n})]})})});g.displayName="IconWithText";let TitleAndValue=e=>{let{title:l,value:n,boldTitle:t,titleStyle:o={},valueStyle:a={}}=e;return(0,i.jsxs)(r.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[l?(0,i.jsxs)(c.Z,{sx:o,fontWeight:t?"bold":500,component:"span",children:[l,":\xa0"]}):null,(0,i.jsx)(c.Z,{fontSize:15,component:"span",sx:a,children:n})]})},j=(0,h.Z)(d.Z)(_templateObject()),CardAndBorder=e=>{let{cardName:l,stars:n,cardIndex:t,name:o,variant:r,rawName:c,amount:d,nextLevelReq:s}=e,u="cardSet"===r?"".concat(a.prefix,"data/").concat(c,".png"):"".concat(a.prefix,"data/2Cards").concat(t,".png");return(0,i.jsxs)(i.Fragment,{children:[n>0?(0,i.jsx)(f,{src:"".concat(a.prefix,"data/CardEquipBorder").concat(n,".png"),alt:""}):null,(0,i.jsx)(x.Z,{title:(0,i.jsx)(CardTooltip,{...e,cardName:"cardSet"===r?o:l,nextLevelReq:s,amount:d}),children:(0,i.jsx)(p,{isCardSet:"cardSet"===r,amount:d,src:u,alt:""})})]})},CardTooltip=e=>{let{displayName:l,effect:n,bonus:t,stars:o,showInfo:d,nextLevelReq:s,amount:u}=e,v=t;return d&&(v=(0,b.BZ)({bonus:t,stars:o})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,a.cleanUnderscore)(l)}),(0,i.jsx)(c.Z,{children:(0,a.cleanUnderscore)(n.replace("{",v))}),d?(0,i.jsx)(r.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,n)=>(0,i.jsxs)(r.Z,{alignItems:"center",justifyContent:"space-between",children:[0===n?(0,i.jsx)(c.Z,{children:"Base"}):(0,i.jsx)(m,{src:"".concat(a.prefix,"etc/Star").concat(n,".png"),alt:""}),(0,i.jsx)(c.Z,{children:t*(n+1)})]},"".concat(l,"-").concat(n)))}):null,u>=s?(0,i.jsxs)(r.Z,{children:["You've collected ",(0,a.numberWithCommas)(u)," cards"]}):s>0?(0,i.jsxs)(r.Z,{children:["Progress: ",(0,a.numberWithCommas)(u)," / ",(0,a.numberWithCommas)(s)]}):null]})},m=h.Z.img(_templateObject1()),p=h.Z.img(_templateObject2(),e=>{let{amount:l,isCardSet:n}=e;return l||n?1:.5}),f=h.Z.img(_templateObject3()),TalentTooltip=e=>{let{level:l,funcX:n,x1:t,x2:o,funcY:d,y1:s,y2:u,description:v,name:h,talentId:x}=e,b=l>0?(0,a.growth)(n,l,t,o):0,g=l>0?(0,a.growth)(d,l,s,u):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)("img",{src:"".concat(a.prefix,"data/UISkillIcon").concat(x,".png"),alt:""}),(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,a.cleanUnderscore)(h)})]}),(0,i.jsx)(c.Z,{children:(0,a.cleanUnderscore)(v).replace("{",b).replace("}",g)})]})},PlayersList=e=>{let{players:l,characters:n}=e;return(0,i.jsx)(r.Z,{gap:1,direction:"row",children:l.map(e=>{var l,t;let{index:o}=e;return(0,i.jsx)(x.Z,{title:null==n?void 0:null===(l=n[o])||void 0===l?void 0:l.name,children:(0,i.jsx)("img",{style:{width:24,height:24},src:"".concat(a.prefix,"data/ClassIcons").concat(null==n?void 0:null===(t=n[o])||void 0===t?void 0:t.classIndex,".png"),alt:""})},name+"-head-"+o)})})},MissingData=e=>{let{name:l}=e;return(0,i.jsxs)(c.Z,{variant:"h3",children:["Your account is missing data for ",l]})},CardTitleAndValue=e=>{let{variant:l,raised:n,cardSx:t,imgOnly:o,imgStyle:d,title:v,value:h,children:b,icon:g,tooltipTitle:j,stackProps:m}=e;return(0,i.jsx)(x.Z,{title:j||"",children:(0,i.jsx)(s.Z,{variant:l,raised:n,sx:{my:{xs:0,md:3},width:"fit-content",...t},children:(0,i.jsx)(u.Z,{children:(0,i.jsxs)(r.Z,{sx:{display:m?"flex":"block",...m||{}},children:[(0,i.jsx)(c.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:v}),h||o?g?(0,i.jsxs)(r.Z,{direction:"row",gap:2,alignItems:"center",children:[(0,i.jsx)("img",{style:{objectFit:"contain",...d},src:"".concat(a.prefix).concat(g),alt:""}),h?(0,i.jsx)(c.Z,{children:h}):null]}):(0,i.jsx)(c.Z,{children:h}):b]})})})})},Breakdown=e=>{let{breakdown:l,titleStyle:n={},notation:t="Big"}=e;return(0,i.jsx)(i.Fragment,{children:null==l?void 0:l.map((e,l)=>{let{name:o,value:r,title:d}=e;return d?(0,i.jsx)(c.Z,{sx:{fontWeight:500},children:d},"".concat(o,"-").concat(l)):o?(0,i.jsx)(TitleAndValue,{titleStyle:{width:120,...n},title:o,value:isNaN(r)?r:(0,a.notateNumber)(r,t)},"".concat(o,"-").concat(l)):(0,i.jsx)(v.Z,{sx:{my:1,bgcolor:"black"}},"".concat(o,"-").concat(l))})})},CenteredStack=e=>{let{direction:l="row",children:n}=e;return(0,i.jsx)(r.Z,{gap:1,direction:l,alignItems:"center",children:n})}},58609:function(e,l,n){"use strict";n.r(l);var t=n(82729),i=n(85893),o=n(67720),a=n(51233),r=n(50135),c=n(94054),d=n(47312),s=n(153),u=n(50480),v=n(69368),h=n(23972),x=n(66242),b=n(44267),g=n(21023),j=n(67294),m=n(21480),p=n(61599),f=n(30925),Z=n(2511),w=n(91296),y=n.n(w);n(16727);var C=n(2962),B=n(88054),_=n(87357),M=n(30509),I=n(64885),k=n(74721),O=n(57354),S=n(23795),T=n(11163),N=n(18972);function _templateObject(){let e=(0,t._)(["\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,t._)(["\n  width: 32px;\n  height: 32px;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,t._)(["\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}let L=[0,25,43.75,57.81,68.36,76.27,82.2,86.65,90],AdditionalInfo=e=>{let{tooltip:l,bubbleMaxBonus:n,goalBonus:t,effectHardCapPercent:o,itemReq:r,thresholdObj:c,accumulatedCost:d,index:s,level:u,cauldron:v,account:x,bubble:b,goalLevel:j}=e;return(0,i.jsxs)(a.Z,{mt:1.5,direction:"row",justifyContent:"center",gap:3,flexWrap:"wrap",children:[l?(0,i.jsx)(BubbleTooltip,{...b,goalLevel:j}):null,(0,i.jsxs)(a.Z,{gap:n&&(null==c?void 0:c.thresholdMissingLevels)>0?0:2,justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(Z.Z,{title:"Bubble's effect",children:(0,i.jsx)(P,{src:"".concat(f.prefix,"data/SignStar3b.png"),alt:""})}),(0,i.jsx)(Z.Z,{title:n?"".concat(t," is ").concat((0,f.notateNumber)(o),"% of possible hard cap effect of ").concat(n):"",children:(0,i.jsxs)(h.Z,{variant:n&&(null==c?void 0:c.thresholdMissingLevels)>0?"caption":"",children:[t," ",n?"(".concat((0,f.notateNumber)(o),"%)"):""]})}),n&&(null==c?void 0:c.thresholdMissingLevels)>0?(0,i.jsx)(Z.Z,{title:n?"You need ".concat(null==c?void 0:c.thresholdMissingLevels," levels to reach your threshold"):"",children:(0,i.jsxs)(h.Z,{variant:"caption",children:["Missing ",null==c?void 0:c.thresholdMissingLevels," levels"]})}):null]}),null==r?void 0:r.map((e,l)=>{var n,t,o,r,c,b,j,m,p,w;let y,{rawName:C,name:_,baseCost:M}=e;if("Blank"===C||"ERROR"===C)return null;let{singleLevelCost:I,total:k}=d(s,u,M,null==_?void 0:_.includes("Liquid"),v),O=["sail","bits"].find(e=>C.toLowerCase().includes(e))?"".concat(C,"_x1"):C,S=I>1e8&&!(null==_?void 0:_.includes("Liquid"))&&!(null==_?void 0:_.includes("Bits"))&&(0,B.a2)(s,I);if(C.includes("Liquid")){let e={Liquid1:0,Liquid2:1,Liquid3:2,Liquid4:3};y=null==x?void 0:null===(r=x.alchemy)||void 0===r?void 0:null===(o=r.liquids)||void 0===o?void 0:o[null==e?void 0:e[C]]}else y=C.includes("Bits")?null==x?void 0:null===(c=x.gaming)||void 0===c?void 0:c.bits:C.includes("Sail")?null==x?void 0:null===(m=x.sailing)||void 0===m?void 0:null===(j=m.lootPile)||void 0===j?void 0:null===(b=j.find(e=>{let{rawName:l}=e;return l===C.replace("SailTr","SailT")}))||void 0===b?void 0:b.amount:null==x?void 0:null===(w=x.storage)||void 0===w?void 0:null===(p=w.find(e=>{let{rawName:l}=e;return l===C}))||void 0===p?void 0:p.amount;return(0,i.jsxs)(a.Z,{direction:"row",gap:3,children:[S?(0,i.jsxs)(a.Z,{gap:2,alignItems:"center",children:[(0,i.jsx)(g.Z,{title:(0,i.jsxs)(h.Z,{color:(null==x?void 0:null===(n=x.atoms)||void 0===n?void 0:n.particles)>S?"success.light":"",children:[Math.floor(null==x?void 0:null===(t=x.atoms)||void 0===t?void 0:t.particles)," / ",S]}),children:(0,i.jsx)(W,{src:"".concat(f.prefix,"etc/Particle.png"),alt:""})}),(0,i.jsx)(Z.Z,{title:S,children:(0,i.jsx)(h.Z,{children:(0,f.notateNumber)(S,"Big")})})]}):null,(0,i.jsxs)(a.Z,{gap:2,justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(Z.Z,{title:(0,f.cleanUnderscore)(_),children:(0,i.jsx)(W,{src:"".concat(f.prefix,"data/").concat(O,".png"),alt:""})}),(0,i.jsx)(g.Z,{title:(0,i.jsxs)(h.Z,{color:y>=k?"success.light":"",children:[(0,f.notateNumber)(y,"Big")," / ",(0,f.notateNumber)(k,"Big")]}),children:(0,i.jsx)(h.Z,{children:(0,f.notateNumber)(k,"Big")})})]})]},"".concat(C,"-").concat(_,"-").concat(l))})]})},Nblb=e=>{let{title:l,bubbles:n,lithium:t,accumulatedCost:o,account:r}=e;return(0,i.jsxs)(a.Z,{justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(h.Z,{children:l}),t?(0,i.jsx)(h.Z,{variant:"caption",children:"* 15% chance to be upgraded by lithium (atom collider)"}):null,(0,i.jsx)(a.Z,{direction:"row",flexWrap:"wrap",gap:1,children:null==n?void 0:n.map((e,l)=>{var n,c,d,s,u,v,x,b,j;let{rawName:m,bubbleName:p,level:w,itemReq:y,index:C,cauldron:_}=e,{singleLevelCost:M,total:I}=o(C,w,null==y?void 0:null===(n=y[0])||void 0===n?void 0:n.baseCost,null==y?void 0:null===(d=y[0])||void 0===d?void 0:null===(c=d.name)||void 0===c?void 0:c.includes("Liquid"),_),k=M>1e8&&!(null==y?void 0:null===(u=y[0])||void 0===u?void 0:null===(s=u.name)||void 0===s?void 0:s.includes("Liquid"))&&!(null==y?void 0:null===(x=y[0])||void 0===x?void 0:null===(v=x.name)||void 0===v?void 0:v.includes("Bits"))&&(0,B.a2)(C,M);return(0,i.jsxs)(a.Z,{alignItems:"center",children:[(0,i.jsx)(Z.Z,{title:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{sx:{fontWeight:"bold"},children:(0,f.pascalCase)((0,f.cleanUnderscore)(p))}),(0,i.jsx)(a.Z,{direction:"row",justifyContent:"center",gap:1,children:null==y?void 0:y.map((e,l)=>{let{rawName:n}=e;if("Blank"===n||"ERROR"===n||n.includes("Liquid"))return null;let t=["sail","bits"].find(e=>n.toLowerCase().includes(e))?"".concat(n,"_x1"):n;return(0,i.jsxs)(a.Z,{alignItems:"center",direction:"row",gap:1,children:[(0,i.jsxs)(a.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,i.jsx)(W,{src:"".concat(f.prefix,"data/").concat(t,".png"),alt:""}),(0,i.jsx)(h.Z,{children:(0,f.notateNumber)(I,"Big")})]}),k>0?(0,i.jsxs)(a.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,i.jsx)(a.Z,{sx:{width:32,height:32},alignItems:"center",justifyContent:"center",children:(0,i.jsx)("img",{width:18,height:18,src:"".concat(f.prefix,"etc/Particle.png"),alt:""})}),(0,i.jsx)(h.Z,{children:k})]}):null]},"req"+n+l)})})]}),children:(0,i.jsx)("img",{style:{opacity:t?.8:1},width:42,height:42,src:"".concat(f.prefix,"data/").concat(m,".png"),alt:""})}),(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",gap:.5,children:[k>0?(0,i.jsx)(g.Z,{title:(0,i.jsxs)(h.Z,{color:(null==r?void 0:null===(b=r.atoms)||void 0===b?void 0:b.particles)>k?"success.light":"",children:[Math.floor(null==r?void 0:null===(j=r.atoms)||void 0===j?void 0:j.particles)," / ",k]}),children:(0,i.jsx)("img",{width:18,height:18,src:"".concat(f.prefix,"etc/Particle.png"),alt:""})}):null,(0,i.jsx)(h.Z,{variant:"body1",children:w})]})]},"".concat(m,"-").concat(l,"-").concat(t,"-nblb"))})})]})},P=p.Z.img(_templateObject()),W=p.Z.img(_templateObject1()),A=p.Z.img(_templateObject2(),e=>{let{level:l}=e;return 0===l?.5:1}),BubbleTooltip=e=>{let{goalLevel:l,bubbleName:n,desc:t,func:o,x1:a,x2:r,level:c}=e,d=(0,f.growth)(o,c,a,r,!0),s=(0,f.growth)(o,l,a,r,!0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{fontWeight:"bold",variant:"h6",children:(0,f.cleanUnderscore)(n)}),(0,i.jsx)(h.Z,{variant:"body1",children:(0,f.cleanUnderscore)(t.replace(/{/,d))}),c!==l?(0,i.jsxs)(h.Z,{sx:{color:c>0?"multi":""},variant:"body1",children:["Goal: +",s]}):null]})},FutureBubblesTooltip=()=>{let e=Array(15).fill(25).map((e,l)=>(0,B.AK)(e+l)).toChunks(5);return(0,i.jsx)(a.Z,{gap:2,children:e.map((e,l)=>(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(h.Z,{sx:{fontWeight:"bold"},children:["World ",6+l]}),(0,i.jsx)(a.Z,{children:e.map((e,n)=>{let t=26+5*l+n;return(0,i.jsxs)(h.Z,{children:[t," - ",(0,f.notateNumber)(e)]},e)})})]},l))})};l.default=()=>{var e,l,n,t,g,p,w,P;let W=(0,T.useRouter)(),{state:q}=(0,j.useContext)(m.I),[E,F]=(0,j.useState)(!1),[U,R]=(0,j.useState)(!1),[z,D]=(0,j.useState)("0"),[V,Y]=(0,j.useState)(75),[G,H]=(0,j.useState)(0),[X,K]=(0,j.useState)(),[Q,J]=(0,j.useState)(),$=(0,j.useMemo)(()=>{var e,l,n,t;return null==q?void 0:null===(t=q.account)||void 0===t?void 0:null===(n=t.lab)||void 0===n?void 0:null===(l=n.labBonuses)||void 0===l?void 0:null===(e=l.find(e=>"My_1st_Chemistry_Set"===e.name))||void 0===e?void 0:e.active},[null==q?void 0:null===(e=q.account)||void 0===e?void 0:e.lab.vials]);(0,j.useEffect)(()=>{var e,l,n,t,i,o;let a=localStorage.getItem("effThreshold");a&&Y(parseInt(a));let r=null===(e=Object.keys(null==q?void 0:null===(n=q.account)||void 0===n?void 0:null===(l=n.alchemy)||void 0===l?void 0:l.bubbles))||void 0===e?void 0:e[G];K(null==q?void 0:null===(o=q.account)||void 0===o?void 0:null===(i=o.alchemy)||void 0===i?void 0:null===(t=i.bubbles)||void 0===t?void 0:t[r])},[]);let ee=y()((e,l,n)=>{let{value:t}=e.target;J({...Q,[l]:{...(null==Q?void 0:Q[l])||{},[n]:t?parseInt(t):0}})},100),calcBubbleMatCost=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];let l=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,t=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,o=(arguments.length>6&&arguments[6],arguments.length>7&&arguments[7],arguments.length>8?arguments[8]:void 0),a=arguments.length>9?arguments[9]:void 0,r=arguments.length>10?arguments[10]:void 0,c=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0;if(t)return n+Math.floor(l/20);{var s,u,v,h;let t=Math.max(.1,1-Math.round(10*(0,f.growth)("decay",i,90,100,!1))/10/100),x=(0,B.iu)(null==q?void 0:null===(u=q.account)||void 0===u?void 0:null===(s=u.alchemy)||void 0===s?void 0:s.vials,"AlchBubbleCost"),b=(0,B.om)(null==q?void 0:null===(h=q.account)||void 0===h?void 0:null===(v=h.alchemy)||void 0===v?void 0:v.bubbles,"kazam","UNDEVELOPED_COSTS",!1),g=Math.max(.05,1-(0,f.growth)("decay",o,40,12,!1)/100*(0,f.growth)("decayMulti",a,2,50,!1)*(0,f.growth)("decayMulti",d,1.4,30,!1));return Math.min((e<15?n*Math.pow(1.35-.3*l/(50+l),l):n*Math.pow(1.37-.28*l/(60+l),l))*g*t*Math.max(.05,1-(x+b)/100)*Math.max(.1,Math.pow(.75,r))*Math.max(.9,1-.1*c),1e9)}},calculateMaterialCost=(e,l,n,t,i)=>{var o,a,r,c,d,s,u,v,h,x,b,g,j,m,p,f,Z,w,y,C,B,_,M,I,k,O,S,T,N,L,P;let W=(null==q?void 0:null===(s=q.account)||void 0===s?void 0:null===(d=s.alchemy)||void 0===d?void 0:null===(c=d.cauldrons)||void 0===c?void 0:null===(r=c[t])||void 0===r?void 0:null===(a=r.boosts)||void 0===a?void 0:null===(o=a.cost)||void 0===o?void 0:o.level)||0,A=(null==q?void 0:null===(x=q.account)||void 0===x?void 0:null===(h=x.alchemy)||void 0===h?void 0:null===(v=h.bubbles)||void 0===v?void 0:null===(u=v.kazam)||void 0===u?void 0:u[6].level)||0,F=(null==q?void 0:null===(m=q.account)||void 0===m?void 0:null===(j=m.alchemy)||void 0===j?void 0:null===(g=j.vials)||void 0===g?void 0:null===(b=g[9])||void 0===b?void 0:b.level)||0,U="kazam"!==t&&(null==q?void 0:null===(y=q.account)||void 0===y?void 0:null===(w=y.alchemy)||void 0===w?void 0:null===(Z=w.bubbles)||void 0===Z?void 0:null===(f=Z[t])||void 0===f?void 0:null===(p=f[16])||void 0===p?void 0:p.level)||0,R=(null==q?void 0:null===(I=q.account)||void 0===I?void 0:null===(M=I.alchemy)||void 0===M?void 0:null===(_=M.bubbles)||void 0===_?void 0:null===(B=_[t])||void 0===B?void 0:null===(C=B[14])||void 0===C?void 0:C.level)||0,D=E&&"kazam"!==t&&(null==q?void 0:null===(N=q.account)||void 0===N?void 0:null===(T=N.alchemy)||void 0===T?void 0:null===(S=T.bubbles)||void 0===S?void 0:null===(O=S[t])||void 0===O?void 0:null===(k=O[1])||void 0===k?void 0:k.level)||0,V=z||0,Y=null==q?void 0:null===(P=q.account)||void 0===P?void 0:null===(L=P.achievements[108])||void 0===L?void 0:L.completed;return calcBubbleMatCost(i,$?2:1,e,l,n,W,A,F,R,D,V,Y,U)},getAccumulatedBubbleCost=(e,l,n,t,i)=>{var o,a;let r=(null!==(a=null==Q?void 0:null===(o=Q[i])||void 0===o?void 0:o[e])&&void 0!==a?a:0)-l;if(r<=0){let o=calculateMaterialCost(l,n,t,i,e);return{singleLevelCost:o,total:o}}let c=Array(r||0).fill(1),d=0,s=c.reduce((o,a,r)=>{let c=calculateMaterialCost(l+(0===r?1:r),n,t,i,e);return t||(d=c),o+c},calculateMaterialCost(l,n,t,i,e));return{total:s,singleLevelCost:d}},el=(0,j.useCallback)((e,l,n,t,i)=>getAccumulatedBubbleCost(e,l,n,t,i),[Q,z,E]),en=(0,j.useMemo)(()=>(0,B.GG)(null==q?void 0:q.account),[null==q?void 0:q.account]),getMaxBonus=(e,l)=>{if(!(null==e?void 0:e.includes("decay")))return null;let n=l;return"decayMulti"===e&&(n+=1),n};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C.PB,{title:"Bubbles | Idleon Toolbox",description:"Keep track of your bubbles level and requirements with a handy calculator"}),(0,i.jsxs)(_.Z,{sx:{width:"fit-content",margin:"24px auto"},children:[(0,i.jsx)(Nblb,{title:"Next bubble upgrades",bubbles:null==en?void 0:en.normal,accumulatedCost:el,account:null==q?void 0:q.account}),(0,i.jsx)(o.Z,{sx:{my:2}}),(0,i.jsx)(Nblb,{lithium:!0,bubbles:null==en?void 0:en.atomBubbles,accumulatedCost:el,account:null==q?void 0:q.account})]}),(0,i.jsxs)(a.Z,{direction:"row",justifyContent:"center",mt:2,gap:2,flexWrap:"wrap",children:[(0,i.jsx)(I.Ye,{cardSx:{height:"fit-content"},title:"Efficiency Threshold",stackProps:!0,children:(0,i.jsx)(r.Z,{sx:{width:150},label:"",value:V,type:"number",inputProps:{min:0,max:100},onChange:e=>{let{target:l}=e;localStorage.setItem("effThreshold",l.value),Y(l.value)}})}),(0,i.jsxs)(I.Ye,{cardSx:{height:"fit-content"},title:"",stackProps:!0,children:[(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(d.Z,{id:"bargain-tag-select-input",children:"Bargain Tag"}),(0,i.jsx)(s.Z,{labelId:"bargain-tag-select",id:"bargain-tag-select",value:z,label:"Bargain Tag",onChange:e=>D(e.target.value),children:L.map((e,l)=>(0,i.jsxs)(N.Z,{value:l,children:[e,"%"]},"option"+e))})]}),(0,i.jsx)(u.Z,{control:(0,i.jsx)(v.Z,{checked:U,onChange:()=>R(!U)}),name:"Condense view",label:"Condense view"}),(null===(l=Object.keys(null==q?void 0:null===(t=q.account)||void 0===t?void 0:null===(n=t.alchemy)||void 0===n?void 0:n.bubbles))||void 0===l?void 0:l[G])!=="kazam"?(0,i.jsx)(u.Z,{control:(0,i.jsx)(v.Z,{checked:E,onChange:()=>F(!E)}),name:"classDiscount",label:"Class Discount"}):null]}),(0,i.jsxs)(I.Ye,{cardSx:{height:"fit-content"},title:"Misc",stackProps:{gap:1},children:[(0,i.jsx)(S.Z,{underline:"hover",sx:{cursor:"pointer"},onClick:()=>W.push({pathname:"bubbles"}),children:(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)(O.Z,{}),(0,i.jsx)(h.Z,{children:"New Bubbles Page"})]})}),(0,i.jsxs)(h.Z,{children:["Particle Upgrades: ",(null==q?void 0:null===(p=q.account)||void 0===p?void 0:null===(g=p.accountOptions)||void 0===g?void 0:g[135])||"0"]}),(0,i.jsxs)(a.Z,{direction:"row",gap:1,children:[(0,i.jsx)(h.Z,{children:"Future Bubbles"}),null==X?void 0:X.length,(0,i.jsx)(Z.Z,{title:(0,i.jsx)(FutureBubblesTooltip,{}),children:(0,i.jsx)(k.Z,{})})]})]})]}),(0,i.jsx)(M.Z,{tabs:Object.keys(null==q?void 0:null===(P=q.account)||void 0===P?void 0:null===(w=P.alchemy)||void 0===w?void 0:w.bubbles),onTabChange:e=>{var l,n,t,i,o,a;H(e);let r=null===(l=Object.keys(null==q?void 0:null===(t=q.account)||void 0===t?void 0:null===(n=t.alchemy)||void 0===n?void 0:n.bubbles))||void 0===l?void 0:l[e];K(null==q?void 0:null===(a=q.account)||void 0===a?void 0:null===(o=a.alchemy)||void 0===o?void 0:null===(i=o.bubbles)||void 0===i?void 0:i[r]),3===e&&F(!1)},children:(0,i.jsx)(a.Z,{direction:"row",flexWrap:"wrap",gap:3,justifyContent:"center",children:null==X?void 0:X.map((e,l)=>{var n,t,o;let c;if(l>29)return null;let{level:d,itemReq:s,rawName:u,bubbleName:v,func:g,x1:m,x2:p,cauldron:w}=e,y=(null==Q?void 0:null===(n=Q[w])||void 0===n?void 0:n[l])?(null==Q?void 0:null===(t=Q[w])||void 0===t?void 0:t[l])<d?d:null==Q?void 0:null===(o=Q[w])||void 0===o?void 0:o[l]:d,C=(0,f.growth)(g,y,m,p,!0),B=getMaxBonus(g,m),_=y/(y+p)*100;if(B){let e=V/(100-V)*p;c={thresholdMissingLevels:e-y,thresholdBonus:(0,f.growth)(g,e,m,p,!0),effectHardCapPercent:e/(e+p)*100}}return(0,i.jsx)(j.Fragment,{children:(0,i.jsx)(x.Z,{sx:{width:U?100:330,border:B&&(_>=V||(null==c?void 0:c.thresholdMissingLevels)>0)?"1px solid":"",borderColor:_>=V?"info.light":"error.main"},children:(0,i.jsxs)(b.Z,{children:[(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-around",gap:2,children:[(0,i.jsxs)(a.Z,{alignItems:"center",children:[(0,i.jsx)(Z.Z,{dark:U,title:U?(0,i.jsx)(AdditionalInfo,{tooltip:!0,bubbleMaxBonus:B,goalBonus:C,cauldron:w,effectHardCapPercent:_,itemReq:s,thresholdObj:c,accumulatedCost:el,account:null==q?void 0:q.account,level:d,index:l,bubble:e,goalLevel:y}):(0,i.jsx)(BubbleTooltip,{...e,goalLevel:y}),children:(0,i.jsx)(A,{width:48,height:48,level:d,src:"".concat(f.prefix,"data/").concat(u,".png"),alt:""})}),(0,i.jsxs)(a.Z,{alignItems:"center",justifyContent:"center",children:[(0,i.jsxs)(h.Z,{variant:"caption",children:["Lv. ",d]}),U?null:(0,i.jsx)(h.Z,{variant:"caption",children:(0,f.cleanUnderscore)(v)})]})]}),U?null:(0,i.jsx)(r.Z,{type:"number",sx:{width:90},defaultValue:y,onChange:e=>ee(e,w,l),label:"Goal",variant:"outlined",inputProps:{min:d||0}})]}),U?null:(0,i.jsx)(AdditionalInfo,{bubbleMaxBonus:B,goalBonus:C,cauldron:w,thresholdObj:c,effectHardCapPercent:_,itemReq:s,accumulatedCost:el,account:null==q?void 0:q.account,level:d,index:l})]})})},u+""+v+l)})})})]})}}},function(e){e.O(0,[3980,3795,9774,2888,179],function(){return e(e.s=13163)}),_N_E=e.O()}]);
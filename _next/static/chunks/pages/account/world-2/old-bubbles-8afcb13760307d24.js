(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6778],{74721:function(e,n,t){"use strict";var l=t(64836);n.Z=void 0;var i=l(t(64938)),o=t(85893),r=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");n.Z=r},91296:function(e,n,t){var l=0/0,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,s="object"==typeof self&&self&&self.Object===Object&&self,u=d||s||Function("return this")(),v=Object.prototype.toString,h=Math.max,x=Math.min,now=function(){return u.Date.now()};function debounce(e,n,t){var l,i,o,r,a,c,d=0,s=!1,u=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function invokeFunc(n){var t=l,o=i;return l=i=void 0,d=n,r=e.apply(o,t)}function leadingEdge(e){return d=e,a=setTimeout(timerExpired,n),s?invokeFunc(e):r}function remainingWait(e){var t=e-c,l=e-d,i=n-t;return u?x(i,o-l):i}function shouldInvoke(e){var t=e-c,l=e-d;return void 0===c||t>=n||t<0||u&&l>=o}function timerExpired(){var e=now();if(shouldInvoke(e))return trailingEdge(e);a=setTimeout(timerExpired,remainingWait(e))}function trailingEdge(e){return(a=void 0,v&&l)?invokeFunc(e):(l=i=void 0,r)}function cancel(){void 0!==a&&clearTimeout(a),d=0,l=c=i=a=void 0}function flush(){return void 0===a?r:trailingEdge(now())}function debounced(){var e=now(),t=shouldInvoke(e);if(l=arguments,i=this,c=e,t){if(void 0===a)return leadingEdge(c);if(u)return a=setTimeout(timerExpired,n),invokeFunc(c)}return void 0===a&&(a=setTimeout(timerExpired,n)),r}return n=toNumber(n)||0,isObject(t)&&(s=!!t.leading,o=(u="maxWait"in t)?h(toNumber(t.maxWait)||0,n):o,v="trailing"in t?!!t.trailing:v),debounced.cancel=cancel,debounced.flush=flush,debounced}function isObject(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&"[object Symbol]"==v.call(e)}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return l;if(isObject(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=isObject(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var t=r.test(e);return t||a.test(e)?c(e.slice(2),t?2:8):o.test(e)?l:+e}e.exports=debounce},13163:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-2/old-bubbles",function(){return t(58609)}])},30509:function(e,n,t){"use strict";var l=t(85893),i=t(67294),o=t(98396),r=t(11703),a=t(40044),c=t(30925),d=t(87357);n.Z=e=>{let{tabs:n,icons:t,children:s,onTabChange:u,forceScroll:v,orientation:h="horizontal",iconsOnly:x}=e,[m,b]=(0,i.useState)(0),p=(0,o.Z)(e=>e.breakpoints.down("md"),{noSsr:!0}),g=Array.isArray(s)?s:[s];return(0,l.jsxs)(d.Z,{sx:"vertical"===h?{flexGrow:1,display:"flex"}:{},children:[(0,l.jsx)(r.Z,{centered:!p||p&&n.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:p&&n.length>4||v?"scrollable":"standard",value:m,onChange:(e,n)=>{b(n),u&&u(n)},children:null==n?void 0:n.map((e,n)=>(0,l.jsx)(a.Z,{iconPosition:"start",icon:(null==t?void 0:t[n])?(0,l.jsx)("img",{src:"".concat(c.prefix).concat(null==t?void 0:t[n],".png")}):null,wrapped:!0,label:x?"":e,sx:{minWidth:62}},"".concat(e,"-").concat(n)))}),u?s:null==g?void 0:g.map((e,n)=>n===m?e:null)]})}},64885:function(e,n,t){"use strict";t.d(n,{Gr:function(){return MissingData},M5:function(){return b},Wd:function(){return PlayersList},Ye:function(){return CardTitleAndValue},iy:function(){return CardAndBorder},j8:function(){return p},tq:function(){return Breakdown},u3:function(){return TalentTooltip},uQ:function(){return TitleAndValue},wD:function(){return CenteredStack}});var l=t(82729),i=t(85893),o=t(67294),r=t(30925),a=t(51233),c=t(23972),d=t(49425),s=t(66242),u=t(44267),v=t(67720),h=t(61599),x=t(2511),m=t(54685);function _templateObject(){let e=(0,l._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,l._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,l._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,l._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return _templateObject3=function(){return e},e}let b=(0,o.forwardRef)((e,n)=>{let{stat:t,icon:l,img:o,title:d="",...s}=e;return(0,i.jsx)(x.Z,{title:d,children:(0,i.jsxs)(a.Z,{alignItems:"center",...s,ref:n,style:{position:"relative",width:"fit-content"},children:[(0,i.jsx)("img",{...o,src:"".concat(r.prefix,"data/").concat(l,".png"),alt:""}),(0,i.jsx)(c.Z,{variant:"body1",component:"span",children:t})]})})});b.displayName="IconWithText";let TitleAndValue=e=>{let{title:n,value:t,boldTitle:l,titleStyle:o={},valueStyle:r={}}=e;return(0,i.jsxs)(a.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[n?(0,i.jsxs)(c.Z,{sx:o,fontWeight:l?"bold":500,component:"span",children:[n,":\xa0"]}):null,(0,i.jsx)(c.Z,{fontSize:15,component:"span",sx:r,children:t})]})},p=(0,h.Z)(d.Z)(_templateObject()),CardAndBorder=e=>{let{cardName:n,stars:t,cardIndex:l,name:o,variant:a,rawName:c,amount:d,nextLevelReq:s}=e,u="cardSet"===a?"".concat(r.prefix,"data/").concat(c,".png"):"".concat(r.prefix,"data/2Cards").concat(l,".png");return(0,i.jsxs)(i.Fragment,{children:[t>0?(0,i.jsx)(f,{src:"".concat(r.prefix,"data/CardEquipBorder").concat(t,".png"),alt:""}):null,(0,i.jsx)(x.Z,{title:(0,i.jsx)(CardTooltip,{...e,cardName:"cardSet"===a?o:n,nextLevelReq:s,amount:d}),children:(0,i.jsx)(j,{isCardSet:"cardSet"===a,amount:d,src:u,alt:""})})]})},CardTooltip=e=>{let{displayName:n,effect:t,bonus:l,stars:o,showInfo:d,nextLevelReq:s,amount:u}=e,v=l;return d&&(v=(0,m.BZ)({bonus:l,stars:o})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,r.cleanUnderscore)(n)}),(0,i.jsx)(c.Z,{children:(0,r.cleanUnderscore)(t.replace("{",v))}),d?(0,i.jsx)(a.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,t)=>(0,i.jsxs)(a.Z,{alignItems:"center",justifyContent:"space-between",children:[0===t?(0,i.jsx)(c.Z,{children:"Base"}):(0,i.jsx)(g,{src:"".concat(r.prefix,"etc/Star").concat(t,".png"),alt:""}),(0,i.jsx)(c.Z,{children:l*(t+1)})]},"".concat(n,"-").concat(t)))}):null,u>=s?(0,i.jsxs)(a.Z,{children:["You've collected ",(0,r.numberWithCommas)(u)," cards"]}):s>0?(0,i.jsxs)(a.Z,{children:["Progress: ",(0,r.numberWithCommas)(u)," / ",(0,r.numberWithCommas)(s)]}):null]})},g=h.Z.img(_templateObject1()),j=h.Z.img(_templateObject2(),e=>{let{amount:n,isCardSet:t}=e;return n||t?1:.5}),f=h.Z.img(_templateObject3()),TalentTooltip=e=>{let{level:n,funcX:t,x1:l,x2:o,funcY:d,y1:s,y2:u,description:v,name:h,talentId:x}=e,m=n>0?(0,r.growth)(t,n,l,o):0,b=n>0?(0,r.growth)(d,n,s,u):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)("img",{src:"".concat(r.prefix,"data/UISkillIcon").concat(x,".png"),alt:""}),(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,r.cleanUnderscore)(h)})]}),(0,i.jsx)(c.Z,{children:(0,r.cleanUnderscore)(v).replace("{",m).replace("}",b)})]})},PlayersList=e=>{let{players:n,characters:t}=e;return(0,i.jsx)(a.Z,{gap:1,direction:"row",children:n.map(e=>{var n,l;let{index:o}=e;return(0,i.jsx)(x.Z,{title:null==t?void 0:null===(n=t[o])||void 0===n?void 0:n.name,children:(0,i.jsx)("img",{style:{width:24,height:24},src:"".concat(r.prefix,"data/ClassIcons").concat(null==t?void 0:null===(l=t[o])||void 0===l?void 0:l.classIndex,".png"),alt:""})},name+"-head-"+o)})})},MissingData=e=>{let{name:n}=e;return(0,i.jsxs)(c.Z,{variant:"h3",children:["Your account is missing data for ",n]})},CardTitleAndValue=e=>{let{variant:n,raised:t,cardSx:l,imgOnly:o,imgStyle:d,title:v,value:h,children:m,icon:b,tooltipTitle:p,stackProps:g,contentPadding:j}=e;return(0,i.jsx)(x.Z,{title:p||"",children:(0,i.jsx)(s.Z,{variant:n,raised:t,sx:{my:{xs:0,md:3},width:"fit-content",...l},children:(0,i.jsx)(u.Z,{sx:{"&:last-child":j?{p:j}:{}},children:(0,i.jsxs)(a.Z,{sx:{display:g?"flex":"block",...g||{}},children:[v?(0,i.jsx)(c.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:v}):null,h||o?b?(0,i.jsxs)(a.Z,{direction:"row",gap:2,alignItems:"center",children:[(0,i.jsx)("img",{style:{objectFit:"contain",...d},src:"".concat(r.prefix).concat(b),alt:""}),h?(0,i.jsx)(c.Z,{children:h}):null]}):(0,i.jsx)(c.Z,{children:h}):m]})})})})},Breakdown=e=>{let{breakdown:n,titleStyle:t={},notation:l="Big"}=e;return(0,i.jsx)(i.Fragment,{children:null==n?void 0:n.map((e,n)=>{let{name:o,value:a,title:d}=e;return d?(0,i.jsx)(c.Z,{sx:{fontWeight:500},children:d},"".concat(o,"-").concat(n)):o?(0,i.jsx)(TitleAndValue,{titleStyle:{width:120,...t},title:o,value:isNaN(a)?a:(0,r.notateNumber)(a,l)},"".concat(o,"-").concat(n)):(0,i.jsx)(v.Z,{sx:{my:1,bgcolor:"black"}},"".concat(o,"-").concat(n))})})},CenteredStack=e=>{let{direction:n="row",children:t}=e;return(0,i.jsx)(a.Z,{gap:1,direction:n,alignItems:"center",children:t})}},58609:function(e,n,t){"use strict";t.r(n);var l=t(82729),i=t(85893),o=t(67720),r=t(51233),a=t(50480),c=t(69368),d=t(50135),s=t(94054),u=t(47312),v=t(18360),h=t(23972),x=t(66242),m=t(44267),b=t(21023),p=t(67294),g=t(21480),j=t(61599),f=t(30925),Z=t(2511),y=t(91296),w=t.n(y),C=t(2962),B=t(88054),O=t(87357),M=t(30509),_=t(64885),k=t(74721),I=t(57354),S=t(23795),T=t(11163),W=t(18972);function _templateObject(){let e=(0,l._)(["\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,l._)(["\n  width: 32px;\n  height: 32px;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,l._)(["\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}let N=[0,25,43.75,57.81,68.36,76.27,82.2,86.65,90],AdditionalInfo=e=>{let{tooltip:n,bubbleMaxBonus:t,goalBonus:l,effectHardCapPercent:o,itemReq:a,thresholdObj:c,accumulatedCost:d,index:s,level:u,cauldron:v,account:x,bubble:m,goalLevel:p}=e;return(0,i.jsxs)(r.Z,{mt:1.5,direction:"row",justifyContent:"center",gap:3,flexWrap:"wrap",children:[n?(0,i.jsx)(BubbleTooltip,{...m,goalLevel:p}):null,(0,i.jsxs)(r.Z,{gap:t&&(null==c?void 0:c.thresholdMissingLevels)>0?0:2,justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(Z.Z,{title:"Bubble's effect",children:(0,i.jsx)(L,{src:"".concat(f.prefix,"data/SignStar3b.png"),alt:""})}),(0,i.jsx)(Z.Z,{title:t?"".concat(l," is ").concat((0,f.notateNumber)(o),"% of possible hard cap effect of ").concat(t):"",children:(0,i.jsxs)(h.Z,{variant:t&&(null==c?void 0:c.thresholdMissingLevels)>0?"caption":"",children:[l," ",t?"(".concat((0,f.notateNumber)(o),"%)"):""]})}),t&&(null==c?void 0:c.thresholdMissingLevels)>0?(0,i.jsx)(Z.Z,{title:t?"You need ".concat(null==c?void 0:c.thresholdMissingLevels," levels to reach your threshold"):"",children:(0,i.jsxs)(h.Z,{variant:"caption",children:["Missing ",null==c?void 0:c.thresholdMissingLevels," levels"]})}):null]}),null==a?void 0:a.map((e,n)=>{var t,l,o,a,c,m,p,g,j,y,w,C,O,M;let _,{rawName:k,name:I,baseCost:S}=e;if("Blank"===k||"ERROR"===k)return null;let{singleLevelCost:T,total:W}=d(s,u,S,null==I?void 0:I.includes("Liquid"),v),N=["sail","bits","w6item"].find(e=>k.toLowerCase().includes(e))?"".concat(k,"_x1"):k,L=T>1e8&&!(null==I?void 0:I.includes("Liquid"))&&!(null==I?void 0:I.includes("Bits"))&&(0,B.a2)(s,T);if(k.includes("Liquid")){let e={Liquid1:0,Liquid2:1,Liquid3:2,Liquid4:3};_=null==x?void 0:null===(a=x.alchemy)||void 0===a?void 0:null===(o=a.liquids)||void 0===o?void 0:o[null==e?void 0:e[k]]}else if(k.includes("Bits"))_=null==x?void 0:null===(c=x.gaming)||void 0===c?void 0:c.bits;else if(k.includes("Sail"))_=null==x?void 0:null===(g=x.sailing)||void 0===g?void 0:null===(p=g.lootPile)||void 0===p?void 0:null===(m=p.find(e=>{let{rawName:n}=e;return n===k.replace("SailTr","SailT")}))||void 0===m?void 0:m.amount;else if(k.includes("W6item")){let e={W6item1:4,W6item2:30,W6item3:46,W6item4:72,W6item5:99},n={W6item6:0,W6item7:1,W6item8:2,W6item9:3,W6item10:4};(null==e?void 0:e[k])?_=null==x?void 0:null===(y=x.farming)||void 0===y?void 0:null===(j=y.crop)||void 0===j?void 0:j[null==e?void 0:e[k]]:(null==n?void 0:n.hasOwnProperty(k))&&(_=null==x?void 0:null===(C=x.summoning)||void 0===C?void 0:null===(w=C.essences)||void 0===w?void 0:w[null==n?void 0:n[k]])}else _=null==x?void 0:null===(M=x.storage)||void 0===M?void 0:null===(O=M.find(e=>{let{rawName:n}=e;return n===k}))||void 0===O?void 0:O.amount;return(0,i.jsxs)(r.Z,{direction:"row",gap:3,children:[L?(0,i.jsxs)(r.Z,{gap:2,alignItems:"center",children:[(0,i.jsx)(b.Z,{title:(0,i.jsxs)(h.Z,{color:(null==x?void 0:null===(t=x.atoms)||void 0===t?void 0:t.particles)>L?"success.light":"",children:[Math.floor(null==x?void 0:null===(l=x.atoms)||void 0===l?void 0:l.particles)," / ",L]}),children:(0,i.jsx)(E,{src:"".concat(f.prefix,"etc/Particle.png"),alt:""})}),(0,i.jsx)(Z.Z,{title:L,children:(0,i.jsx)(h.Z,{children:(0,f.notateNumber)(L,"Big")})})]}):null,(0,i.jsxs)(r.Z,{gap:2,justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(Z.Z,{title:(0,f.cleanUnderscore)(I),children:(0,i.jsx)(E,{src:"".concat(f.prefix,"data/").concat(N,".png"),alt:""})}),(0,i.jsx)(b.Z,{title:(0,i.jsxs)(h.Z,{color:_>=W?"success.light":"",children:[(0,f.notateNumber)(_,"Big")," / ",(0,f.notateNumber)(W,"Big")]}),children:(0,i.jsx)(h.Z,{children:(0,f.notateNumber)(W,"Big")})})]})]},"".concat(k,"-").concat(I,"-").concat(n))})]})},Nblb=e=>{let{title:n,bubbles:t,lithium:l,accumulatedCost:o,account:a}=e;return(0,i.jsxs)(r.Z,{justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(h.Z,{children:n}),l?(0,i.jsx)(h.Z,{variant:"caption",children:"* 15% chance to be upgraded by lithium (atom collider)"}):null,(0,i.jsx)(r.Z,{direction:"row",flexWrap:"wrap",gap:1,children:null==t?void 0:t.map((e,n)=>{var t,c,d,s,u,v,x,m,p;let{rawName:g,bubbleName:j,level:y,itemReq:w,index:C,cauldron:O}=e,{singleLevelCost:M,total:_}=o(C,y,null==w?void 0:null===(t=w[0])||void 0===t?void 0:t.baseCost,null==w?void 0:null===(d=w[0])||void 0===d?void 0:null===(c=d.name)||void 0===c?void 0:c.includes("Liquid"),O),k=M>1e8&&!(null==w?void 0:null===(u=w[0])||void 0===u?void 0:null===(s=u.name)||void 0===s?void 0:s.includes("Liquid"))&&!(null==w?void 0:null===(x=w[0])||void 0===x?void 0:null===(v=x.name)||void 0===v?void 0:v.includes("Bits"))&&(0,B.a2)(C,M);return(0,i.jsxs)(r.Z,{alignItems:"center",children:[(0,i.jsx)(Z.Z,{title:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{sx:{fontWeight:"bold"},children:(0,f.pascalCase)((0,f.cleanUnderscore)(j))}),(0,i.jsx)(r.Z,{direction:"row",justifyContent:"center",gap:1,children:null==w?void 0:w.map((e,n)=>{let{rawName:t}=e;if("Blank"===t||"ERROR"===t||t.includes("Liquid"))return null;let l=["sail","bits"].find(e=>t.toLowerCase().includes(e))?"".concat(t,"_x1"):t;return(0,i.jsxs)(r.Z,{alignItems:"center",direction:"row",gap:1,children:[(0,i.jsxs)(r.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,i.jsx)(E,{src:"".concat(f.prefix,"data/").concat(l,".png"),alt:""}),(0,i.jsx)(h.Z,{children:(0,f.notateNumber)(_,"Big")})]}),k>0?(0,i.jsxs)(r.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,i.jsx)(r.Z,{sx:{width:32,height:32},alignItems:"center",justifyContent:"center",children:(0,i.jsx)("img",{width:18,height:18,src:"".concat(f.prefix,"etc/Particle.png"),alt:""})}),(0,i.jsx)(h.Z,{children:k})]}):null]},"req"+t+n)})})]}),children:(0,i.jsx)("img",{style:{opacity:l?.8:1},width:42,height:42,src:"".concat(f.prefix,"data/").concat(g,".png"),alt:""})}),(0,i.jsxs)(r.Z,{direction:"row",alignItems:"center",gap:.5,children:[k>0?(0,i.jsx)(b.Z,{title:(0,i.jsxs)(h.Z,{color:(null==a?void 0:null===(m=a.atoms)||void 0===m?void 0:m.particles)>k?"success.light":"",children:[Math.floor(null==a?void 0:null===(p=a.atoms)||void 0===p?void 0:p.particles)," / ",k]}),children:(0,i.jsx)("img",{width:18,height:18,src:"".concat(f.prefix,"etc/Particle.png"),alt:""})}):null,(0,i.jsx)(h.Z,{variant:"body1",children:y})]})]},"".concat(g,"-").concat(n,"-").concat(l,"-nblb"))})})]})},L=j.Z.img(_templateObject()),E=j.Z.img(_templateObject1()),P=j.Z.img(_templateObject2(),e=>{let{level:n}=e;return 0===n?.5:1}),BubbleTooltip=e=>{let{goalLevel:n,bubbleName:t,desc:l,func:o,x1:r,x2:a,level:c}=e,d=(0,f.growth)(o,c,r,a,!0),s=(0,f.growth)(o,n,r,a,!0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{fontWeight:"bold",variant:"h6",children:(0,f.cleanUnderscore)(t)}),(0,i.jsx)(h.Z,{variant:"body1",children:(0,f.cleanUnderscore)(l.replace(/{/,d))}),c!==n?(0,i.jsxs)(h.Z,{sx:{color:c>0?"multi":""},variant:"body1",children:["Goal: +",s]}):null]})},FutureBubblesTooltip=()=>{let e=Array(15).fill(25).map((e,n)=>(0,B.AK)(e+n)).toChunks(5);return(0,i.jsx)(r.Z,{gap:2,children:e.map((e,n)=>(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(h.Z,{sx:{fontWeight:"bold"},children:["World ",6+n]}),(0,i.jsx)(r.Z,{children:e.map((e,t)=>{let l=26+5*n+t;return(0,i.jsxs)(h.Z,{children:[l," - ",(0,f.notateNumber)(e)]},e)})})]},n))})};n.default=()=>{var e,n,t,l,b,j,y,L;let E=(0,T.useRouter)(),{state:A}=(0,p.useContext)(g.I),[q,F]=(0,p.useState)(!1),[z,U]=(0,p.useState)(!1),[R,D]=(0,p.useState)("0"),[V,Y]=(0,p.useState)(75),[G,H]=(0,p.useState)(0),[$,X]=(0,p.useState)(!1),[K,Q]=(0,p.useState)(),[J,ee]=(0,p.useState)(),en=(0,p.useMemo)(()=>{var e,n,t,l;return null==A?void 0:null===(l=A.account)||void 0===l?void 0:null===(t=l.lab)||void 0===t?void 0:null===(n=t.labBonuses)||void 0===n?void 0:null===(e=n.find(e=>"My_1st_Chemistry_Set"===e.name))||void 0===e?void 0:e.active},[null==A?void 0:null===(e=A.account)||void 0===e?void 0:e.lab.vials]);(0,p.useEffect)(()=>{var e,n,t,l,i,o;let r=localStorage.getItem("effThreshold");r&&Y(parseInt(r));let a=null===(e=Object.keys(null==A?void 0:null===(t=A.account)||void 0===t?void 0:null===(n=t.alchemy)||void 0===n?void 0:n.bubbles))||void 0===e?void 0:e[G];Q(null==A?void 0:null===(o=A.account)||void 0===o?void 0:null===(i=o.alchemy)||void 0===i?void 0:null===(l=i.bubbles)||void 0===l?void 0:l[a])},[]);let et=w()((e,n,t)=>{let{value:l}=e.target;ee({...J,[n]:{...(null==J?void 0:J[n])||{},[t]:l?parseInt(l):0}})},100),calcBubbleMatCost=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];let n=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,o=(arguments.length>6&&arguments[6],arguments.length>7&&arguments[7],arguments.length>8?arguments[8]:void 0),r=arguments.length>9?arguments[9]:void 0,a=arguments.length>10?arguments[10]:void 0,c=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0;if(l)return t+Math.floor(n/20);{var s,u,v,h;let l=Math.max(.1,1-Math.round(10*(0,f.growth)("decay",i,90,100,!1))/10/100),x=(0,B.iu)(null==A?void 0:null===(u=A.account)||void 0===u?void 0:null===(s=u.alchemy)||void 0===s?void 0:s.vials,"AlchBubbleCost"),m=(0,B.om)(null==A?void 0:null===(h=A.account)||void 0===h?void 0:null===(v=h.alchemy)||void 0===v?void 0:v.bubbles,"kazam","UNDEVELOPED_COSTS",!1),b=Math.max(.05,1-(0,f.growth)("decay",o,40,12,!1)/100*(0,f.growth)("decayMulti",r,2,50,!1)*(0,f.growth)("decayMulti",d,1.4,30,!1));return Math.min((e<15?t*Math.pow(1.35-.3*n/(50+n),n):t*Math.pow(1.37-.28*n/(60+n),n))*b*l*Math.max(.05,1-(x+m)/100)*Math.max(.1,Math.pow(.75,a))*Math.max(.9,1-.1*c),1e9)}},calculateMaterialCost=(e,n,t,l,i)=>{var o,r,a,c,d,s,u,v,h,x,m,b,p,g,j,f,Z,y,w,C,B,O,M,_,k,I,S,T,W,N,L;let E=(null==A?void 0:null===(s=A.account)||void 0===s?void 0:null===(d=s.alchemy)||void 0===d?void 0:null===(c=d.cauldrons)||void 0===c?void 0:null===(a=c[l])||void 0===a?void 0:null===(r=a.boosts)||void 0===r?void 0:null===(o=r.cost)||void 0===o?void 0:o.level)||0,P=(null==A?void 0:null===(x=A.account)||void 0===x?void 0:null===(h=x.alchemy)||void 0===h?void 0:null===(v=h.bubbles)||void 0===v?void 0:null===(u=v.kazam)||void 0===u?void 0:u[6].level)||0,F=(null==A?void 0:null===(g=A.account)||void 0===g?void 0:null===(p=g.alchemy)||void 0===p?void 0:null===(b=p.vials)||void 0===b?void 0:null===(m=b[9])||void 0===m?void 0:m.level)||0,z="kazam"!==l&&(null==A?void 0:null===(w=A.account)||void 0===w?void 0:null===(y=w.alchemy)||void 0===y?void 0:null===(Z=y.bubbles)||void 0===Z?void 0:null===(f=Z[l])||void 0===f?void 0:null===(j=f[16])||void 0===j?void 0:j.level)||0,U=(null==A?void 0:null===(_=A.account)||void 0===_?void 0:null===(M=_.alchemy)||void 0===M?void 0:null===(O=M.bubbles)||void 0===O?void 0:null===(B=O[l])||void 0===B?void 0:null===(C=B[14])||void 0===C?void 0:C.level)||0,D=q&&"kazam"!==l&&(null==A?void 0:null===(W=A.account)||void 0===W?void 0:null===(T=W.alchemy)||void 0===T?void 0:null===(S=T.bubbles)||void 0===S?void 0:null===(I=S[l])||void 0===I?void 0:null===(k=I[1])||void 0===k?void 0:k.level)||0,V=R||0,Y=null==A?void 0:null===(L=A.account)||void 0===L?void 0:null===(N=L.achievements[108])||void 0===N?void 0:N.completed;return calcBubbleMatCost(i,en?2:1,e,n,t,E,P,F,U,D,V,Y,z)},getAccumulatedBubbleCost=(e,n,t,l,i)=>{var o,r;let a=(null!==(r=null==J?void 0:null===(o=J[i])||void 0===o?void 0:o[e])&&void 0!==r?r:0)-n;if(a<=0){let o=calculateMaterialCost(n,t,l,i,e);return{singleLevelCost:o,total:o}}let c=Array(a||0).fill(1),d=0,s=c.reduce((o,r,a)=>{let c=calculateMaterialCost(n+(0===a?1:a),t,l,i,e);return l||(d=c),o+c},calculateMaterialCost(n,t,l,i,e));return{total:s,singleLevelCost:d}},el=(0,p.useCallback)((e,n,t,l,i)=>getAccumulatedBubbleCost(e,n,t,l,i),[J,R,q]),ei=(0,p.useMemo)(()=>(0,B.GG)(null==A?void 0:A.account),[null==A?void 0:A.account]),getMaxBonus=(e,n)=>{if(!(null==e?void 0:e.includes("decay")))return null;let t=n;return"decayMulti"===e&&(t+=1),t};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C.PB,{title:"Bubbles | Idleon Toolbox",description:"Keep track of your bubbles level and requirements with a handy calculator"}),(0,i.jsxs)(O.Z,{sx:{width:"fit-content",margin:"24px auto"},children:[(0,i.jsx)(Nblb,{title:"Next bubble upgrades",bubbles:null==ei?void 0:ei.normal,accumulatedCost:el,account:null==A?void 0:A.account}),(0,i.jsx)(o.Z,{sx:{my:2}}),(0,i.jsx)(Nblb,{lithium:!0,bubbles:null==ei?void 0:ei.atomBubbles,accumulatedCost:el,account:null==A?void 0:A.account})]}),(0,i.jsxs)(r.Z,{direction:"row",justifyContent:"center",mt:2,gap:2,flexWrap:"wrap",children:[(0,i.jsxs)(_.Ye,{cardSx:{height:"fit-content"},title:"Efficiency Threshold",stackProps:!0,children:[(0,i.jsx)(a.Z,{control:(0,i.jsx)(c.Z,{sx:{my:0},size:"small",checked:$,onChange:()=>X(!$)}),name:"classDiscount",label:"Hide past threshold"}),(0,i.jsx)(d.Z,{sx:{width:150},label:"",value:V,type:"number",inputProps:{min:0,max:100},onChange:e=>{let{target:n}=e;localStorage.setItem("effThreshold",n.value),Y(n.value)}})]}),(0,i.jsxs)(_.Ye,{cardSx:{height:"fit-content"},title:"",stackProps:!0,children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(u.Z,{id:"bargain-tag-select-input",children:"Bargain Tag"}),(0,i.jsx)(v.Z,{labelId:"bargain-tag-select",id:"bargain-tag-select",value:R,label:"Bargain Tag",onChange:e=>D(e.target.value),children:N.map((e,n)=>(0,i.jsxs)(W.Z,{value:n,children:[e,"%"]},"option"+e))})]}),(0,i.jsx)(a.Z,{control:(0,i.jsx)(c.Z,{checked:z,onChange:()=>U(!z)}),name:"Condense view",label:"Condense view"}),(null===(n=Object.keys(null==A?void 0:null===(l=A.account)||void 0===l?void 0:null===(t=l.alchemy)||void 0===t?void 0:t.bubbles))||void 0===n?void 0:n[G])!=="kazam"?(0,i.jsx)(a.Z,{control:(0,i.jsx)(c.Z,{checked:q,onChange:()=>F(!q)}),name:"classDiscount",label:"Class Discount"}):null]}),(0,i.jsxs)(_.Ye,{cardSx:{height:"fit-content"},title:"Misc",stackProps:{gap:1},children:[(0,i.jsx)(S.Z,{underline:"hover",sx:{cursor:"pointer"},onClick:()=>E.push({pathname:"bubbles"}),children:(0,i.jsxs)(r.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)(I.Z,{}),(0,i.jsx)(h.Z,{children:"New Bubbles Page"})]})}),(0,i.jsxs)(h.Z,{children:["Particle Upgrades: ",(null==A?void 0:null===(j=A.account)||void 0===j?void 0:null===(b=j.accountOptions)||void 0===b?void 0:b[135])||"0"]}),(0,i.jsxs)(r.Z,{direction:"row",gap:1,children:[(0,i.jsx)(h.Z,{children:"Future Bubbles"}),null==K?void 0:K.length,(0,i.jsx)(Z.Z,{title:(0,i.jsx)(FutureBubblesTooltip,{}),children:(0,i.jsx)(k.Z,{})})]})]})]}),(0,i.jsx)(M.Z,{tabs:Object.keys(null==A?void 0:null===(L=A.account)||void 0===L?void 0:null===(y=L.alchemy)||void 0===y?void 0:y.bubbles),onTabChange:e=>{var n,t,l,i,o,r;H(e);let a=null===(n=Object.keys(null==A?void 0:null===(l=A.account)||void 0===l?void 0:null===(t=l.alchemy)||void 0===t?void 0:t.bubbles))||void 0===n?void 0:n[e];Q(null==A?void 0:null===(r=A.account)||void 0===r?void 0:null===(o=r.alchemy)||void 0===o?void 0:null===(i=o.bubbles)||void 0===i?void 0:i[a]),3===e&&F(!1)},children:(0,i.jsx)(r.Z,{direction:"row",flexWrap:"wrap",gap:3,justifyContent:"center",children:null==K?void 0:K.map((e,n)=>{var t,l,o;let a;if(n>29)return null;let{level:c,itemReq:s,rawName:u,bubbleName:v,func:b,x1:g,x2:j,cauldron:y}=e,w=(null==J?void 0:null===(t=J[y])||void 0===t?void 0:t[n])?(null==J?void 0:null===(l=J[y])||void 0===l?void 0:l[n])<c?c:null==J?void 0:null===(o=J[y])||void 0===o?void 0:o[n]:c,C=(0,f.growth)(b,w,g,j,!0),B=getMaxBonus(b,g),O=w/(w+j)*100;if(B){let e=V/(100-V)*j;a={thresholdMissingLevels:e-w,thresholdBonus:(0,f.growth)(b,e,g,j,!0),effectHardCapPercent:e/(e+j)*100}}return(!B||(null==a?void 0:a.thresholdMissingLevels)<=0)&&$?null:(0,i.jsx)(p.Fragment,{children:(0,i.jsx)(x.Z,{sx:{width:z?100:330,border:B&&(O>=V||(null==a?void 0:a.thresholdMissingLevels)>0)?"1px solid":"",borderColor:O>=V?"info.light":"error.main"},children:(0,i.jsxs)(m.Z,{children:[(0,i.jsxs)(r.Z,{direction:"row",alignItems:"center",justifyContent:"space-around",gap:2,children:[(0,i.jsxs)(r.Z,{alignItems:"center",children:[(0,i.jsx)(Z.Z,{dark:z,title:z?(0,i.jsx)(AdditionalInfo,{tooltip:!0,bubbleMaxBonus:B,goalBonus:C,cauldron:y,effectHardCapPercent:O,itemReq:s,thresholdObj:a,accumulatedCost:el,account:null==A?void 0:A.account,level:c,index:n,bubble:e,goalLevel:w}):(0,i.jsx)(BubbleTooltip,{...e,goalLevel:w}),children:(0,i.jsx)(P,{width:48,height:48,level:c,src:"".concat(f.prefix,"data/").concat(u,".png"),alt:""})}),(0,i.jsxs)(r.Z,{alignItems:"center",justifyContent:"center",children:[(0,i.jsxs)(h.Z,{variant:"caption",children:["Lv. ",c]}),z?null:(0,i.jsx)(h.Z,{variant:"caption",children:(0,f.cleanUnderscore)(v)})]})]}),z?null:(0,i.jsx)(d.Z,{type:"number",sx:{width:90},defaultValue:w,onChange:e=>et(e,y,n),label:"Goal",variant:"outlined",inputProps:{min:c||0}})]}),z?null:(0,i.jsx)(AdditionalInfo,{bubbleMaxBonus:B,goalBonus:C,cauldron:y,thresholdObj:a,effectHardCapPercent:O,itemReq:s,accumulatedCost:el,account:null==A?void 0:A.account,level:c,index:n})]})})},u+""+v+n)})})})]})}}},function(e){e.O(0,[3980,9774,2888,179],function(){return e(e.s=13163)}),_N_E=e.O()}]);
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="475afb3e-80e6-42a8-94f6-533175ebc1c3",e._sentryDebugIdIdentifier="sentry-dbid-475afb3e-80e6-42a8-94f6-533175ebc1c3")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7811],{71534:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-1/old-stamps",function(){return n(78852)}])},35433:function(e,t,n){"use strict";var a=n(82729),l=n(85893),r=n(65298),s=n(61599),o=n(23972),i=n(51233);function _templateObject(){let e=(0,a._)(["\n  width: 23px;\n  height: 27px;\n  object-fit: contain;\n"]);return _templateObject=function(){return e},e}let c=s.Z.img(_templateObject());t.Z=e=>{let{variant:t="vertical",centered:n=!0,style:a={},money:s,title:d="Total Money",maxCoins:u=5}=e;return(0,l.jsxs)("div",{style:a,"data-sentry-component":"CoinDisplay","data-sentry-source-file":"CoinDisplay.jsx",children:[d?(0,l.jsx)(o.Z,{style:{textAlign:n?"center":"left"},children:d}):null,(0,l.jsx)(i.Z,{flexWrap:"wrap",justifyContent:n?"center":"flex-start",direction:"row",gap:"vertical"===t?2.3:1,"data-sentry-element":"Stack","data-sentry-source-file":"CoinDisplay.jsx",children:null==s?void 0:s.map((e,n)=>{let[a,s]=e;return n<u&&Number(s)>=0?(0,l.jsxs)(i.Z,{direction:"vertical"===t?"column":"row",gap:"vertical"===t?0:.5,justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(c,{src:"".concat(r.prefix,"data/Coins").concat(a,".png"),alt:""}),(0,l.jsx)(o.Z,{variant:"body1",component:"span",className:"coin-value",children:Number(s)})]},s+""+a):null})})]})}},63521:function(e,t,n){"use strict";var a=n(85893),l=n(67294),r=n(98396),s=n(11703),o=n(40044),i=n(65298),c=n(87357),d=n(11163);t.Z=e=>{var t;let{tabs:n,components:u,icons:m,children:p,onTabChange:x,forceScroll:y,orientation:h="horizontal",iconsOnly:j,queryKey:f="t",clearOnChange:v=[],disableQuery:g=!1}=e,b=(0,r.Z)(e=>e.breakpoints.down("md"),{noSsr:!0}),Z=(0,d.useRouter)(),[w,C]=(0,l.useState)(0),_=Z.query[f],S=n.findIndex(e=>e===_),T=g?w:S>=0?S:0;(0,l.useEffect)(()=>{g||_||Z.replace({pathname:Z.pathname,query:{...Z.query,[f]:n[T]}},void 0,{shallow:!0})},[_,f,n,T,Z,g]);let k=Array.isArray(p)?p:[p];return(0,a.jsxs)(c.Z,{sx:"vertical"===h?{flexGrow:1,display:"flex"}:{},"data-sentry-element":"Box","data-sentry-component":"Tabber","data-sentry-source-file":"Tabber.jsx",children:[(0,a.jsx)(s.Z,{centered:!b||b&&n.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:b&&n.length>=4||y?"scrollable":"standard",value:T,onChange:(e,t)=>{if(g)C(t);else{let e={...Z.query,[f]:n[t]};v.forEach(t=>delete e[t]),Z.push({pathname:Z.pathname,query:e},void 0,{shallow:!0})}x&&x(t)},"data-sentry-element":"Tabs","data-sentry-source-file":"Tabber.jsx",children:null===(t=null!=u?u:n)||void 0===t?void 0:t.map((e,t)=>(0,a.jsx)(o.Z,{iconPosition:"start",icon:(null==m?void 0:m[t])?(0,a.jsx)("img",{src:"".concat(i.prefix).concat(null==m?void 0:m[t],".png")}):null,wrapped:!0,label:j?"":e,sx:{minWidth:62}},"".concat(null==e?void 0:e[t],"-").concat(t)))}),x?p:null==k?void 0:k.map((e,t)=>t===T?e:null)]})}},27496:function(e,t,n){"use strict";n.d(t,{Gr:function(){return MissingData},M5:function(){return h},Wd:function(){return PlayersList},Ye:function(){return CardTitleAndValue},iy:function(){return CardAndBorder},j8:function(){return j},tq:function(){return Breakdown},u3:function(){return TalentTooltip},uQ:function(){return TitleAndValue},wD:function(){return CenteredStack}});var a=n(82729),l=n(85893),r=n(67294),s=n(65298),o=n(51233),i=n(23972),c=n(49425),d=n(66242),u=n(44267),m=n(67720),p=n(61599),x=n(74612),y=n(9751);function _templateObject(){let e=(0,a._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,a._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,a._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,a._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return _templateObject3=function(){return e},e}let h=(0,r.forwardRef)((e,t)=>{let{stat:n,icon:a,img:r,title:c="",...d}=e;return(0,l.jsx)(x.Z,{title:c,children:(0,l.jsxs)(o.Z,{alignItems:"center",...d,ref:t,style:{position:"relative",width:"fit-content"},children:[(0,l.jsx)("img",{...r,src:"".concat(s.prefix,"data/").concat(a,".png"),alt:""}),(0,l.jsx)(i.Z,{variant:"body1",component:"span",children:n})]})})});h.displayName="IconWithText";let TitleAndValue=e=>{let{title:t,value:n,boldTitle:a,titleStyle:r={},valueStyle:s={}}=e;return(0,l.jsxs)(o.Z,{direction:"row",flexWrap:"wrap",alignItems:"center","data-sentry-element":"Stack","data-sentry-component":"TitleAndValue","data-sentry-source-file":"styles.jsx",children:[t?(0,l.jsxs)(i.Z,{sx:r,fontWeight:a?"bold":500,component:"span",children:[t,":\xa0"]}):null,(0,l.jsx)(i.Z,{fontSize:15,component:"span",sx:s,"data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:n})]})},j=(0,p.Z)(c.Z)(_templateObject()),CardAndBorder=e=>{let{cardName:t,stars:n,cardIndex:a,name:r,variant:o,rawName:i,amount:c,nextLevelReq:d}=e,u="cardSet"===o?"".concat(s.prefix,"data/").concat(i,".png"):"".concat(s.prefix,"data/2Cards").concat(a,".png");return(0,l.jsxs)(l.Fragment,{children:[n>0?(0,l.jsx)(g,{src:"".concat(s.prefix,"data/CardEquipBorder").concat(n,".png"),alt:""}):null,(0,l.jsx)(x.Z,{title:(0,l.jsx)(CardTooltip,{...e,cardName:"cardSet"===o?r:t,nextLevelReq:d,amount:c}),"data-sentry-element":"Tooltip","data-sentry-source-file":"styles.jsx",children:(0,l.jsx)(v,{isCardSet:"cardSet"===o,amount:c,src:u,alt:"","data-sentry-element":"CardIcon","data-sentry-source-file":"styles.jsx"})})]})},CardTooltip=e=>{let{displayName:t,effect:n,bonus:a,stars:r,showInfo:c,nextLevelReq:d,amount:u}=e,m=a;return c&&(m=(0,y.BZ)({bonus:a,stars:r})),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{fontWeight:"bold",variant:"h6","data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:(0,s.cleanUnderscore)(t)}),(0,l.jsx)(i.Z,{"data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:(0,s.cleanUnderscore)(n.replace("{",m))}),c?(0,l.jsx)(o.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,n)=>(0,l.jsxs)(o.Z,{alignItems:"center",justifyContent:"space-between",children:[0===n?(0,l.jsx)(i.Z,{children:"Base"}):(0,l.jsx)(f,{src:"".concat(s.prefix,"etc/Star").concat(n,".png"),alt:""}),(0,l.jsx)(i.Z,{children:a*(n+1)})]},"".concat(t,"-").concat(n)))}):null,u>=d?(0,l.jsxs)(o.Z,{children:["You've collected ",(0,s.numberWithCommas)(u)," cards"]}):d>0?(0,l.jsxs)(o.Z,{children:["Progress: ",(0,s.numberWithCommas)(u)," / ",(0,s.numberWithCommas)(d)]}):null]})},f=p.Z.img(_templateObject1()),v=p.Z.img(_templateObject2(),e=>{let{amount:t,isCardSet:n}=e;return t||n?1:.5}),g=p.Z.img(_templateObject3()),TalentTooltip=e=>{let{level:t,funcX:n,x1:a,x2:r,funcY:c,y1:d,y2:u,description:m,name:p,talentId:x}=e,y=t>0?(0,s.growth)(n,t,a,r):0,h=t>0?(0,s.growth)(c,t,d,u):0;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.Z,{direction:"row",alignItems:"center",gap:1,"data-sentry-element":"Stack","data-sentry-source-file":"styles.jsx",children:[(0,l.jsx)("img",{src:"".concat(s.prefix,"data/UISkillIcon").concat(x,".png"),alt:""}),(0,l.jsx)(i.Z,{fontWeight:"bold",variant:"h6","data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:(0,s.cleanUnderscore)(p)})]}),(0,l.jsx)(i.Z,{"data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:(0,s.cleanUnderscore)(m).replace("{",y).replace("}",h)})]})},PlayersList=e=>{let{players:t,characters:n}=e;return(0,l.jsx)(o.Z,{gap:1,direction:"row","data-sentry-element":"Stack","data-sentry-component":"PlayersList","data-sentry-source-file":"styles.jsx",children:t.map(e=>{var t,a;let{index:r}=e;return(0,l.jsx)(x.Z,{title:null==n?void 0:null===(t=n[r])||void 0===t?void 0:t.name,children:(0,l.jsx)("img",{style:{width:24,height:24},src:"".concat(s.prefix,"data/ClassIcons").concat(null==n?void 0:null===(a=n[r])||void 0===a?void 0:a.classIndex,".png"),alt:""})},name+"-head-"+r)})})},MissingData=e=>{let{name:t}=e;return(0,l.jsxs)(i.Z,{variant:"h3","data-sentry-element":"Typography","data-sentry-component":"MissingData","data-sentry-source-file":"styles.jsx",children:["Your account is missing data for ",t]})},CardTitleAndValue=e=>{let{variant:t,raised:n,cardSx:a,imgOnly:r,imgStyle:c,title:m,value:p,children:y,icon:h,tooltipTitle:j,stackProps:f,contentPadding:v}=e;return(0,l.jsx)(x.Z,{title:j||"","data-sentry-element":"Tooltip","data-sentry-component":"CardTitleAndValue","data-sentry-source-file":"styles.jsx",children:(0,l.jsx)(d.Z,{variant:t,raised:n,sx:{my:{xs:0,md:3},width:"fit-content",...a},"data-sentry-element":"Card","data-sentry-source-file":"styles.jsx",children:(0,l.jsx)(u.Z,{sx:{"&:last-child":v?{p:v}:{}},"data-sentry-element":"CardContent","data-sentry-source-file":"styles.jsx",children:(0,l.jsxs)(o.Z,{sx:{display:f?"flex":"block",...f||{}},"data-sentry-element":"Stack","data-sentry-source-file":"styles.jsx",children:[m?(0,l.jsx)(i.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,component:"span",children:m}):null,p||r?h?(0,l.jsxs)(o.Z,{direction:"row",gap:2,alignItems:"center",children:[(0,l.jsx)("img",{style:{objectFit:"contain",...c},src:"".concat(s.prefix).concat(h),alt:""}),p?(0,l.jsx)(i.Z,{children:p}):null]}):(0,l.jsx)(i.Z,{children:p}):y]})})})})},Breakdown=e=>{let{breakdown:t,titleStyle:n={},notation:a="Big"}=e;return(0,l.jsx)(l.Fragment,{children:null==t?void 0:t.map((e,t)=>{let{name:r,value:o,title:c}=e;return c?(0,l.jsx)(i.Z,{sx:{fontWeight:500},children:c},"".concat(r,"-").concat(t)):r?(0,l.jsx)(TitleAndValue,{titleStyle:{width:120,...n},title:r,value:isNaN(o)?o:(0,s.notateNumber)(o,a)},"".concat(r,"-").concat(t)):(0,l.jsx)(m.Z,{sx:{my:1,bgcolor:"black"}},"".concat(r,"-").concat(t))})})},CenteredStack=e=>{let{direction:t="row",children:n}=e;return(0,l.jsx)(o.Z,{gap:1,direction:t,alignItems:"center","data-sentry-element":"Stack","data-sentry-component":"CenteredStack","data-sentry-source-file":"styles.jsx",children:n})}},78852:function(e,t,n){"use strict";n.r(t);var a=n(82729),l=n(85893),r=n(23972),s=n(51233),o=n(50480),i=n(45843),c=n(69368),d=n(50135),u=n(66242),m=n(44267),p=n(67294),x=n(58437),y=n(65298),h=n(61599),j=n(86255),f=n(35433),v=n(74612),g=n(91296),b=n.n(g),Z=n(2962),w=n(59404),C=n(34500),_=n(94978),S=n(29529),T=n(63521),k=n(27496),I=n(15409),O=n(57354),N=n(23795),B=n(11163);function _templateObject(){let e=(0,a._)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transform: translate(10%, -50%);\n  position: absolute;\n  top: 0;\n  right: 0;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,a._)(["\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,a._)(["\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,a._)(["\n  width: 32px;\n  height: 32px;\n  opacity: ",";\n"]);return _templateObject3=function(){return e},e}let Info=e=>{var t;let{itemRequirements:n,goalBonus:a,bestCharacter:o,stampName:i}=e,{rawName:c,materialCost:d,isMaterialCost:u,goldCost:m}=n;return(0,l.jsxs)(s.Z,{gap:1,mt:i?0:2,"data-sentry-element":"Stack","data-sentry-component":"Info","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsx)(r.Z,{"data-sentry-element":"Typography","data-sentry-source-file":"old-stamps.jsx",children:(0,y.cleanUnderscore)(i)}),I.tO[i]?(0,l.jsx)(r.Z,{mt:1,children:"(Unobtainable)"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.Z,{gap:2,justifyContent:"center",direction:"row",alignItems:"center",children:[(0,l.jsx)(A,{src:"".concat(y.prefix,"data/SignStar3b.png"),alt:""}),(0,l.jsx)(r.Z,{children:isNaN(a)?0:a}),(0,l.jsx)(v.Z,{title:"Best to craft with ".concat(null!==(t=null==o?void 0:o.character)&&void 0!==t?t:"Nobody"," (Capacity: ").concat(isNaN(null==o?void 0:o.maxCapacity)?0:(0,y.notateNumber)(null==o?void 0:o.maxCapacity,"Big"),")"),children:(0,l.jsxs)(s.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,l.jsx)(W,{hide:!d||!u,src:"".concat(y.prefix,"data/").concat(c,".png"),alt:""}),d?(0,y.notateNumber)(d,"Big"):null]})})]}),(0,l.jsx)(f.Z,{title:"",money:(0,y.getCoinsArray)(m)})]})]})},StampFullDetails=e=>{let{itemRequirements:t,goalBonus:n,bestCharacter:a,stampName:r}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(Info,{itemRequirements:t,goalBonus:n,bestCharacter:a,stampName:r,"data-sentry-element":"Info","data-sentry-source-file":"old-stamps.jsx"})})},M=h.Z.div(_templateObject()),A=h.Z.img(_templateObject1()),StampTooltip=e=>{let{level:t,goalLevel:n,displayName:a,effect:s,multiplier:o=1,goalBonus:i,bonus:c}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{variant:"h5","data-sentry-element":"Typography","data-sentry-source-file":"old-stamps.jsx",children:(0,y.cleanUnderscore)(a)}),(0,l.jsxs)(r.Z,{sx:{color:t>0&&o>1?"multi":""},variant:"body1","data-sentry-element":"Typography","data-sentry-source-file":"old-stamps.jsx",children:["+",(0,y.cleanUnderscore)(s.replace(/\+{/,c))]}),I.tO[a]?(0,l.jsx)(r.Z,{mt:1,children:"(Unobtainable)"}):null,t!==n?(0,l.jsxs)(r.Z,{mt:1,sx:{color:t>0&&o>1?"multi":""},variant:"body1",children:["Goal: +",(0,y.cleanUnderscore)(s.replace(/\+{/,i))]}):null]})},F=h.Z.img(_templateObject2(),e=>{let{level:t}=e;return 0===t?.5:1}),W=h.Z.img(_templateObject3(),e=>{let{hide:t}=e;return t?.5:1});t.default=()=>{var e,t,n,a,h,f,g;let A=(0,B.useRouter)(),{state:W}=(0,p.useContext)(x.I),q=(0,w.RB)(null==W?void 0:null===(e=W.account)||void 0===e?void 0:e.rift,"Stamp_Mastery")?null==W?void 0:null===(n=W.account)||void 0===n?void 0:null===(t=n.accountOptions)||void 0===t?void 0:t[154]:0,E=null==W?void 0:null===(h=W.account)||void 0===h?void 0:null===(a=h.atoms)||void 0===a?void 0:a.stampReducer,[P,V]=(0,p.useState)(0),[D,G]=(0,p.useState)({}),[L,R]=(0,p.useState)(E),[U,Y]=(0,p.useState)(!1),[z,X]=(0,p.useState)(!1),[K,Q]=(0,p.useState)(!1),getStamps=()=>{var e,t,n,a;let l=null===(e=Object.keys(null==W?void 0:null===(t=W.account)||void 0===t?void 0:t.stamps))||void 0===e?void 0:e[P];return null==W?void 0:null===(a=W.account)||void 0===a?void 0:null===(n=a.stamps)||void 0===n?void 0:n[l]},H=(0,p.useMemo)(()=>getStamps(),[P]),getAccumulatedCost=(e,t,n,a)=>{var l,r,s;let o=(null!==(l=null==D?void 0:D[e])&&void 0!==l?l:t)-t,i="gold"===n?calculateGoldCost:calculateMaterialCost;if(o<=0){let e=i(t,a);return"material"===n?(null==a?void 0:null===(s=a.itemReq)||void 0===s?void 0:null===(r=s.rawName)||void 0===r?void 0:r.includes("Equipment"))?Math.max(1,Math.floor(e)):Math.floor(e):e}let c=Array(o||0).fill(1).map((e,t)=>t+1),d=c.reduce((e,l)=>{if("material"===n&&(t+l)%(null==a?void 0:a.reqItemMultiplicationLevel)==0||"gold"===n){let n=i(t+l,a);return e+n}return e},i(t,a));return"material"===n?Math.floor(d):d},J=(0,p.useCallback)((e,t,n,a)=>getAccumulatedCost(e,t,n,a),[D,L,U]),$=(0,p.useCallback)((e,t,n)=>(0,S.tc)(e,t,n),[W]),calculateMaterialCost=(e,t)=>{var n,a,l,r,s;let{reqItemMultiplicationLevel:o,baseMatCost:i,powMatBase:c}=t,d=(0,j.YG)(null==W?void 0:null===(a=W.account)||void 0===a?void 0:null===(n=a.alchemy)||void 0===n?void 0:n.vials,"material_cost_for_stamps"),u=(0,j.Vq)(null==W?void 0:null===(s=W.account)||void 0===s?void 0:null===(r=s.alchemy)||void 0===r?void 0:null===(l=r.p2w)||void 0===l?void 0:l.sigils,"ENVELOPE_PILE"),m=Math.max(.1,1-(L!==E?L:E)/100);return i*(U?.05:1)*m*(1/(1+u/100))*Math.pow(c,Math.pow(Math.round(e/o)-1,.8))*Math.max(.1,1-d/100)||0},calculateGoldCost=(e,t)=>{var n,a,l,r;let{reqItemMultiplicationLevel:s,baseCoinCost:o,powCoinBase:i}=t,c=(0,j.YG)(null==W?void 0:null===(a=W.account)||void 0===a?void 0:null===(n=a.alchemy)||void 0===n?void 0:n.vials,"material_cost_for_stamps"),d=null==W?void 0:null===(r=W.account)||void 0===r?void 0:null===(l=r.bribes)||void 0===l?void 0:l[0],u=(null==d?void 0:d.done)?o*(1-(null==d?void 0:d.value)/100):o;return Math.floor(u*Math.pow(i-e/(e+5*s)*.25,e*(10/s))*Math.max(.1,1-c/100))},ee=b()((e,t)=>{let{value:n}=e.target;G({...D,[t]:n?parseInt(n):0})},100);return(0,l.jsxs)("div",{"data-sentry-component":"Stamps","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsx)(Z.PB,{title:"Stamps | Idleon Toolbox",description:"Keep track of your stamps levels and requirements","data-sentry-element":"NextSeo","data-sentry-source-file":"old-stamps.jsx"}),(0,l.jsx)(r.Z,{textAlign:"center",component:"div",variant:"caption","data-sentry-element":"Typography","data-sentry-source-file":"old-stamps.jsx",children:"* Green border means you have enough material, money and space to craft"}),(0,l.jsxs)(s.Z,{direction:"row",gap:3,justifyContent:"center",flexWrap:"wrap","data-sentry-element":"Stack","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsx)(k.Ye,{title:"Gilded Stamp","data-sentry-element":"CardTitleAndValue","data-sentry-source-file":"old-stamps.jsx",children:(0,l.jsxs)(s.Z,{alignItems:"center",gap:2,"data-sentry-element":"Stack","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsxs)(s.Z,{alignItems:"center",direction:"row",gap:2,"data-sentry-element":"Stack","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsx)("img",{src:"".concat(y.prefix,"data/GildedStamp.png"),alt:""}),(0,l.jsxs)(s.Z,{"data-sentry-element":"Stack","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsxs)(r.Z,{"data-sentry-element":"Typography","data-sentry-source-file":"old-stamps.jsx",children:["Owned: ",q]}),(0,l.jsxs)(r.Z,{"data-sentry-element":"Typography","data-sentry-source-file":"old-stamps.jsx",children:["Chance: ",(0,I.bL)(null==W?void 0:null===(f=W.account)||void 0===f?void 0:f.stamps)/100,"%"]})]})]}),(0,l.jsx)(o.Z,{control:(0,l.jsx)(i.Z,{checked:U,onChange:()=>Y(!U)}),label:"Gilded Stamp","data-sentry-element":"FormControlLabel","data-sentry-source-file":"old-stamps.jsx"})]})}),(0,l.jsx)(k.Ye,{title:"Stamp Reducer","data-sentry-element":"CardTitleAndValue","data-sentry-source-file":"old-stamps.jsx",children:(0,l.jsxs)(s.Z,{alignItems:"center",direction:"row",gap:2,"data-sentry-element":"Stack","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsx)("img",{src:"".concat(y.prefix,"data/Atom0.png"),height:36,alt:""}),null!=E?E:0,"%"]})}),(0,l.jsx)(k.Ye,{title:"Options","data-sentry-element":"CardTitleAndValue","data-sentry-source-file":"old-stamps.jsx",children:(0,l.jsxs)(s.Z,{sx:{mx:2},flexWrap:"wrap","data-sentry-element":"Stack","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsx)(N.Z,{underline:"hover",sx:{cursor:"pointer"},onClick:()=>A.push({pathname:"stamps"}),"data-sentry-element":"Link","data-sentry-source-file":"old-stamps.jsx",children:(0,l.jsxs)(s.Z,{direction:"row",alignItems:"center",gap:1,"data-sentry-element":"Stack","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsx)(O.Z,{"data-sentry-element":"ArrowRightAltIcon","data-sentry-source-file":"old-stamps.jsx"}),(0,l.jsx)(r.Z,{"data-sentry-element":"Typography","data-sentry-source-file":"old-stamps.jsx",children:"New Stamps Page"})]})}),(0,l.jsx)(o.Z,{control:(0,l.jsx)(c.Z,{name:"mini",checked:K,size:"small",onChange:()=>Q(!K)}),label:"Condense view","data-sentry-element":"FormControlLabel","data-sentry-source-file":"old-stamps.jsx"})]})}),(0,l.jsx)(k.Ye,{"data-sentry-element":"CardTitleAndValue","data-sentry-source-file":"old-stamps.jsx",children:(0,l.jsxs)(s.Z,{sx:{mx:2},flexWrap:"wrap","data-sentry-element":"Stack","data-sentry-source-file":"old-stamps.jsx",children:[(0,l.jsx)(o.Z,{control:(0,l.jsx)(c.Z,{name:"mini",checked:z,onChange:()=>X(!z),size:"small"}),label:"Subtract green stacks","data-sentry-element":"FormControlLabel","data-sentry-source-file":"old-stamps.jsx"}),(0,l.jsx)(d.Z,{label:"Stamp Reducer",value:L,onChange:e=>R(e.target.value),type:"number",InputProps:{inputProps:{min:0,max:90}},"data-sentry-element":"TextField","data-sentry-source-file":"old-stamps.jsx"})]})})]}),(0,l.jsx)(T.Z,{tabs:Object.keys(null==W?void 0:null===(g=W.account)||void 0===g?void 0:g.stamps),onTabChange:e=>{V(e)},"data-sentry-element":"Tabber","data-sentry-source-file":"old-stamps.jsx",children:(0,l.jsx)(s.Z,{direction:"row",flexWrap:"wrap",justifyContent:"center",gap:3,"data-sentry-element":"Stack","data-sentry-source-file":"old-stamps.jsx",children:null==H?void 0:H.map((e,t)=>{var n,a,o,i,c,x,h,j;let f,g,b,Z;let{displayName:w,rawName:S,level:T,itemReq:k,multiplier:O=1,func:N,x1:B,x2:A,reqItemMultiplicationLevel:q}=e,E=(null==D?void 0:D[t])?(null==D?void 0:D[t])<T?T:null==D?void 0:D[t]:T,V=(0,y.growth)(N,E,B,A,!0)*O,{rawName:G}=k,L=(0,C.F6)(_.crafts[null===_.items||void 0===_.items?void 0:null===(n=_.items[G])||void 0===n?void 0:n.displayName]),R=J(t,T,"material",e),U=J(t,T,"gold",e),Y=E%q==0;U&&(g=(null==W?void 0:null===(c=W.account)||void 0===c?void 0:null===(i=c.currencies)||void 0===i?void 0:i.rawMoney)>=U),(null==L?void 0:L.length)>0?f=null==L?void 0:L.every(e=>{var t,n,a;let{rawName:l,type:r,itemQuantity:s}=e;if("Equip"===r)return!0;let o=null==W?void 0:null===(a=W.account)||void 0===a?void 0:null===(n=a.storage)||void 0===n?void 0:null===(t=n.filter(e=>{let{rawName:t}=e;return t===l}))||void 0===t?void 0:t.amount;return(o=z?o-1e7:o)>=s*R}):(Z=null==W?void 0:null===(j=W.account)||void 0===j?void 0:null===(h=j.storage)||void 0===h?void 0:null===(x=h.find(e=>{let{rawName:t}=e;return t===G}))||void 0===x?void 0:x.amount,f=(Z=z?Z-1e7:Z)>=R);let X={...k,materials:L,materialCost:R,goldCost:U,isMaterialCost:Y,hasMaterials:f,hasMoney:g},Q=$(null===_.items||void 0===_.items?void 0:_.items[null==k?void 0:k.rawName],null==W?void 0:W.characters,null==W?void 0:W.account);b=(null==Q?void 0:Q.maxCapacity)>=(null==X?void 0:X.materialCost);let H="Blank"===w,et=(0,I.fE)(null==W?void 0:W.account,null===(a=Object.keys((null==W?void 0:null===(o=W.account)||void 0===o?void 0:o.stamps)||{}))||void 0===a?void 0:a[P],S,Q);return(0,l.jsx)(p.Fragment,{children:(0,l.jsx)(u.Z,{sx:{overflow:"visible",position:"relative",width:K?150:230,border:f&&g&&b&&T>0?"1px solid #81c784":""},children:(0,l.jsxs)(m.Z,{sx:{"&:last-child":{paddingBottom:4,...K&&{p:0}}},children:[T>0?(0,l.jsxs)(M,{children:[f?null:(0,l.jsx)(v.Z,{title:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.Z,{children:["Not enough ",(0,y.cleanUnderscore)(null==k?void 0:k.name)]}),(0,l.jsxs)(r.Z,{children:["You have ",(0,y.notateNumber)(null!=Z?Z:0,"Big"),", you need ",(0,y.notateNumber)(Math.abs((null!=Z?Z:0)-(null==X?void 0:X.materialCost)),"Big")," more"]})]}),children:(0,l.jsx)("img",{width:24,height:24,src:"".concat(y.prefix,"data/").concat(null==k?void 0:k.rawName,".png"),alt:""})}),g?null:(0,l.jsx)(v.Z,{title:"Not enough coins",children:(0,l.jsx)("img",{width:20,height:20,src:"".concat(y.prefix,"data/Coins5.png"),alt:""})}),b?null:(0,l.jsx)(v.Z,{title:"Not enough capacity",children:(0,l.jsx)("img",{width:24,height:24,style:{objectFit:"contain"},src:"".concat(y.prefix,"etc/Character.png"),alt:""})})]}):null,(0,l.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-around",gap:2,children:[(0,l.jsxs)(s.Z,{alignItems:"center",children:[(0,l.jsx)(v.Z,{dark:K,title:K?H?"":(0,l.jsx)(StampFullDetails,{itemRequirements:X,stampName:w,goalBonus:V,bestCharacter:Q}):(0,l.jsx)(StampTooltip,{...e,goalLevel:E,goalBonus:V,bonus:et}),children:(0,l.jsx)(F,{width:48,height:48,level:T,src:"".concat(y.prefix,"data/").concat(S,".png"),alt:""})}),(0,l.jsxs)(r.Z,{variant:"body1",children:["Lv. ",T]})]}),K?null:(0,l.jsx)(d.Z,{type:"number",sx:{width:90},defaultValue:E,onChange:e=>ee(e,t),label:"Goal",variant:"outlined",inputProps:{min:T||0}})]}),!K&&(0,l.jsx)(Info,{itemRequirements:X,goalBonus:V,bestCharacter:Q})]})})},S+""+w+t)})})})]})}}},function(e){e.O(0,[3980,4107,9774,2888,179],function(){return e(e.s=71534)}),_N_E=e.O()}]);
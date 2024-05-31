(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3349],{73595:function(e,r,n){"use strict";var t=n(64836);r.Z=void 0;var a=t(n(64938)),o=n(85893),i=(0,a.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");r.Z=i},49425:function(e,r,n){"use strict";n.d(r,{Z:function(){return b}});var t=n(63366),a=n(87462),o=n(67294),i=n(86010),l=n(2097),c=n(94780);function useBadge(e){let{badgeContent:r,invisible:n=!1,max:t=99,showZero:a=!1}=e,o=(0,l.Z)({badgeContent:r,max:t}),i=n;!1!==n||0!==r||a||(i=!0);let{badgeContent:c,max:s=t}=i?o:e,d=c&&Number(c)>s?`${s}+`:c;return{badgeContent:c,invisible:i,max:s,displayValue:d}}var s=n(90631),d=n(90948),u=n(71657),g=n(98216),p=n(1588),h=n(34867);function getBadgeUtilityClass(e){return(0,h.Z)("MuiBadge",e)}let v=(0,p.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);var m=n(85893);let x=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],useUtilityClasses=e=>{let{color:r,anchorOrigin:n,invisible:t,overlap:a,variant:o,classes:i={}}=e,l={root:["root"],badge:["badge",o,t&&"invisible",`anchorOrigin${(0,g.Z)(n.vertical)}${(0,g.Z)(n.horizontal)}`,`anchorOrigin${(0,g.Z)(n.vertical)}${(0,g.Z)(n.horizontal)}${(0,g.Z)(a)}`,`overlap${(0,g.Z)(a)}`,"default"!==r&&`color${(0,g.Z)(r)}`]};return(0,c.Z)(l,getBadgeUtilityClass,i)},f=(0,d.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,r)=>r.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),j=(0,d.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[r.badge,r[n.variant],r[`anchorOrigin${(0,g.Z)(n.anchorOrigin.vertical)}${(0,g.Z)(n.anchorOrigin.horizontal)}${(0,g.Z)(n.overlap)}`],"default"!==n.color&&r[`color${(0,g.Z)(n.color)}`],n.invisible&&r.invisible]}})(({theme:e,ownerState:r})=>(0,a.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},"default"!==r.color&&{backgroundColor:(e.vars||e).palette[r.color].main,color:(e.vars||e).palette[r.color].contrastText},"dot"===r.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${v.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${v.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${v.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${v.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${v.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${v.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${v.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${v.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},r.invisible&&{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})})),Z=o.forwardRef(function(e,r){var n,o,c,d,g,p;let h=(0,u.Z)({props:e,name:"MuiBadge"}),{anchorOrigin:v={vertical:"top",horizontal:"right"},className:Z,component:b,components:w={},componentsProps:O={},children:M,overlap:C="rectangular",color:y="default",invisible:k=!1,max:_=99,badgeContent:T,slots:S,slotProps:B,showZero:F=!1,variant:I="standard"}=h,P=(0,t.Z)(h,x),{badgeContent:R,invisible:N,max:U,displayValue:W}=useBadge({max:_,invisible:k,badgeContent:T,showZero:F}),E=(0,l.Z)({anchorOrigin:v,color:y,overlap:C,variant:I,badgeContent:T}),D=N||null==R&&"dot"!==I,{color:z=y,overlap:L=C,anchorOrigin:$=v,variant:q=I}=D?E:h,G="dot"!==q?W:void 0,A=(0,a.Z)({},h,{badgeContent:R,invisible:D,max:U,displayValue:G,showZero:F,anchorOrigin:$,color:z,overlap:L,variant:q}),V=useUtilityClasses(A),Y=null!=(n=null!=(o=null==S?void 0:S.root)?o:w.Root)?n:f,H=null!=(c=null!=(d=null==S?void 0:S.badge)?d:w.Badge)?c:j,X=null!=(g=null==B?void 0:B.root)?g:O.root,Q=null!=(p=null==B?void 0:B.badge)?p:O.badge,J=(0,s.Z)({elementType:Y,externalSlotProps:X,externalForwardedProps:P,additionalProps:{ref:r,as:b},ownerState:A,className:(0,i.Z)(null==X?void 0:X.className,V.root,Z)}),K=(0,s.Z)({elementType:H,externalSlotProps:Q,ownerState:A,className:(0,i.Z)(V.badge,null==Q?void 0:Q.className)});return(0,m.jsxs)(Y,(0,a.Z)({},J,{children:[M,(0,m.jsx)(H,(0,a.Z)({},K,{children:G}))]}))});var b=Z},2097:function(e,r,n){"use strict";var t=n(67294);r.Z=e=>{let r=t.useRef({});return t.useEffect(()=>{r.current=e}),r.current}},45591:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-6/farming",function(){return n(94712)}])},30509:function(e,r,n){"use strict";var t=n(85893),a=n(67294),o=n(98396),i=n(11703),l=n(40044);r.Z=e=>{let{tabs:r,children:n,onTabChange:c,forceScroll:s}=e,[d,u]=(0,a.useState)(0),g=(0,o.Z)(e=>e.breakpoints.down("md"),{noSsr:!0}),p=Array.isArray(n)?n:[n];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{centered:!g||g&&r.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:g&&r.length>4||s?"scrollable":"standard",value:d,onChange:(e,r)=>{u(r),c&&c(r)},children:null==r?void 0:r.map((e,r)=>(0,t.jsx)(l.Z,{wrapped:!0,label:e},"".concat(e,"-").concat(r)))}),c?n:null==p?void 0:p.map((e,r)=>r===d?e:null)]})}},57005:function(e,r,n){"use strict";var t=n(85893),a=n(67294),o=n(71924),i=n(33913),l=n(30925),c=n(23972);let s=(0,a.forwardRef)((e,r)=>{let{date:n,startDate:s,lastUpdated:d,stopAtZero:u,type:g,pause:p,staticTime:h,placeholder:v,loop:m,variant:x="inherit",...f}=e,[j,Z]=(0,a.useState)();(0,a.useEffect)(()=>{if(n){if(h){if(!isFinite(n))return;return Z({...(0,l.getDuration)(new Date().getTime(),n)})}let e=new Date,r=e.getTime()-(null!=d?d:0),t=(0,i.Z)(n);Z({...(0,l.getDuration)(null==e?void 0:e.getTime(),n+r*("countdown"===g?-1:1)),overtime:"countdown"===g&&t})}},[n,d]);let tickUp=()=>{let{days:e,hours:r,minutes:n,seconds:t}=j;60===(t+=1)&&(t=0,60===(n+=1)&&(n=0,24===(r+=1)&&(e+=1))),Z({...j,days:e,hours:r,minutes:n,seconds:t})},tickDown=()=>{let{days:e,hours:r,minutes:n,seconds:t}=j;if(0===e&&0===r&&0===n&&0===t){if(u)return;if(m)return Z({...(0,l.getDuration)(new Date().getTime(),s)})}-1==(t-=1)&&(t=59,-1==(n-=1)&&(n=59,-1==(r-=1)&&(r=0,e-=1))),Z({...j,days:e,hours:r,minutes:n,seconds:t})};(0,o.Z)(()=>{if(!j)return null;"countdown"!==g||(null==j?void 0:j.overtime)?tickUp():tickDown()},p||h?null:1e3);let wrapNumber=e=>{let r=String(e);return(null==r?void 0:r.length)===1?"0".concat(e):e};return j?((null==j?void 0:j.overtime)||p)&&v?(0,t.jsx)(c.Z,{...f,ref:r,children:v}):(0,t.jsxs)(c.Z,{...f,ref:r,variant:x,sx:{color:"".concat((null==j?void 0:j.overtime)&&!m?"#f91d1d":"")},component:"span",children:[(null==j?void 0:j.days)?wrapNumber(null==j?void 0:j.days)+"d:":"",wrapNumber(null==j?void 0:j.hours)+"h:",wrapNumber(null==j?void 0:j.minutes)+"m",(null==j?void 0:j.days)?"":":",(null==j?void 0:j.days)?"":wrapNumber(null==j?void 0:j.seconds)+"s"]}):null});r.Z=s},64885:function(e,r,n){"use strict";n.d(r,{Gr:function(){return MissingData},M5:function(){return m},Wd:function(){return PlayersList},Ye:function(){return CardTitleAndValue},iy:function(){return CardAndBorder},j8:function(){return x},tq:function(){return Breakdown},u3:function(){return TalentTooltip},uQ:function(){return TitleAndValue},wD:function(){return CenteredStack}});var t=n(82729),a=n(85893),o=n(67294),i=n(30925),l=n(51233),c=n(23972),s=n(49425),d=n(66242),u=n(44267),g=n(67720),p=n(61599),h=n(2511),v=n(54685);function _templateObject(){let e=(0,t._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,t._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,t._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,t._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return _templateObject3=function(){return e},e}let m=(0,o.forwardRef)((e,r)=>{let{stat:n,icon:t,img:o,title:s="",...d}=e;return(0,a.jsx)(h.Z,{title:s,children:(0,a.jsxs)(l.Z,{alignItems:"center",...d,ref:r,style:{position:"relative",width:"fit-content"},children:[(0,a.jsx)("img",{...o,src:"".concat(i.prefix,"data/").concat(t,".png"),alt:""}),(0,a.jsx)(c.Z,{variant:"body1",component:"span",children:n})]})})});m.displayName="IconWithText";let TitleAndValue=e=>{let{title:r,value:n,boldTitle:t,titleStyle:o={},valueStyle:i={}}=e;return(0,a.jsxs)(l.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[r?(0,a.jsxs)(c.Z,{sx:o,fontWeight:t?"bold":500,component:"span",children:[r,":\xa0"]}):null,(0,a.jsx)(c.Z,{fontSize:15,component:"span",sx:i,children:n})]})},x=(0,p.Z)(s.Z)(_templateObject()),CardAndBorder=e=>{let{cardName:r,stars:n,cardIndex:t,name:o,variant:l,rawName:c,amount:s,nextLevelReq:d}=e,u="cardSet"===l?"".concat(i.prefix,"data/").concat(c,".png"):"".concat(i.prefix,"data/2Cards").concat(t,".png");return(0,a.jsxs)(a.Fragment,{children:[n>0?(0,a.jsx)(Z,{src:"".concat(i.prefix,"data/CardEquipBorder").concat(n,".png"),alt:""}):null,(0,a.jsx)(h.Z,{title:(0,a.jsx)(CardTooltip,{...e,cardName:"cardSet"===l?o:r,nextLevelReq:d,amount:s}),children:(0,a.jsx)(j,{isCardSet:"cardSet"===l,amount:s,src:u,alt:""})})]})},CardTooltip=e=>{let{displayName:r,effect:n,bonus:t,stars:o,showInfo:s,nextLevelReq:d,amount:u}=e,g=t;return s&&(g=(0,v.BZ)({bonus:t,stars:o})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,i.cleanUnderscore)(r)}),(0,a.jsx)(c.Z,{children:(0,i.cleanUnderscore)(n.replace("{",g))}),s?(0,a.jsx)(l.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,n)=>(0,a.jsxs)(l.Z,{alignItems:"center",justifyContent:"space-between",children:[0===n?(0,a.jsx)(c.Z,{children:"Base"}):(0,a.jsx)(f,{src:"".concat(i.prefix,"etc/Star").concat(n,".png"),alt:""}),(0,a.jsx)(c.Z,{children:t*(n+1)})]},"".concat(r,"-").concat(n)))}):null,u>=d?(0,a.jsxs)(l.Z,{children:["You've collected ",(0,i.numberWithCommas)(u)," cards"]}):d>0?(0,a.jsxs)(l.Z,{children:["Progress: ",(0,i.numberWithCommas)(u)," / ",(0,i.numberWithCommas)(d)]}):null]})},f=p.Z.img(_templateObject1()),j=p.Z.img(_templateObject2(),e=>{let{amount:r,isCardSet:n}=e;return r||n?1:.5}),Z=p.Z.img(_templateObject3()),TalentTooltip=e=>{let{level:r,funcX:n,x1:t,x2:o,funcY:s,y1:d,y2:u,description:g,name:p,talentId:h}=e,v=r>0?(0,i.growth)(n,r,t,o):0,m=r>0?(0,i.growth)(s,r,d,u):0;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,a.jsx)("img",{src:"".concat(i.prefix,"data/UISkillIcon").concat(h,".png"),alt:""}),(0,a.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,i.cleanUnderscore)(p)})]}),(0,a.jsx)(c.Z,{children:(0,i.cleanUnderscore)(g).replace("{",v).replace("}",m)})]})},PlayersList=e=>{let{players:r,characters:n}=e;return(0,a.jsx)(l.Z,{gap:1,direction:"row",children:r.map(e=>{var r,t;let{index:o}=e;return(0,a.jsx)(h.Z,{title:null==n?void 0:null===(r=n[o])||void 0===r?void 0:r.name,children:(0,a.jsx)("img",{style:{width:24,height:24},src:"".concat(i.prefix,"data/ClassIcons").concat(null==n?void 0:null===(t=n[o])||void 0===t?void 0:t.classIndex,".png"),alt:""})},name+"-head-"+o)})})},MissingData=e=>{let{name:r}=e;return(0,a.jsxs)(c.Z,{variant:"h3",children:["Your account is missing data for ",r]})},CardTitleAndValue=e=>{let{variant:r,raised:n,cardSx:t,imgOnly:o,imgStyle:s,title:g,value:p,children:v,icon:m,tooltipTitle:x,stackProps:f}=e;return(0,a.jsx)(h.Z,{title:x||"",children:(0,a.jsx)(d.Z,{variant:r,raised:n,sx:{my:{xs:0,md:3},width:"fit-content",...t},children:(0,a.jsx)(u.Z,{children:(0,a.jsxs)(l.Z,{sx:{display:f?"flex":"block",...f||{}},children:[(0,a.jsx)(c.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:g}),p||o?m?(0,a.jsxs)(l.Z,{direction:"row",gap:2,alignItems:"center",children:[(0,a.jsx)("img",{style:{objectFit:"contain",...s},src:"".concat(i.prefix).concat(m),alt:""}),p?(0,a.jsx)(c.Z,{children:p}):null]}):(0,a.jsx)(c.Z,{children:p}):v]})})})})},Breakdown=e=>{let{breakdown:r,titleStyle:n={},notation:t="Big"}=e;return(0,a.jsx)(a.Fragment,{children:null==r?void 0:r.map((e,r)=>{let{name:o,value:l,title:s}=e;return s?(0,a.jsx)(c.Z,{sx:{fontWeight:500},children:s},"".concat(o,"-").concat(r)):o?(0,a.jsx)(TitleAndValue,{titleStyle:{width:120,...n},title:o,value:isNaN(l)?l:(0,i.notateNumber)(l,t)},"".concat(o,"-").concat(r)):(0,a.jsx)(g.Z,{sx:{my:1,bgcolor:"black"}},"".concat(o,"-").concat(r))})})},CenteredStack=e=>{let{direction:r="row",children:n}=e;return(0,a.jsx)(l.Z,{gap:1,direction:r,alignItems:"center",children:n})}},94712:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return world_6_farming}});var t=n(85893),a=n(51233),o=n(23972),i=n(2962),l=n(67294),c=n(30509),s=n(66242),d=n(44267),u=n(67720),g=n(30925);let UpgradeReq=e=>{let{icon:r,owned:n,cost:i}=e;return(0,t.jsxs)(a.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)("img",{src:"".concat(g.prefix,"data/").concat(r,".png"),alt:""}),(0,t.jsxs)(o.Z,{children:[n>0?(0,g.notateNumber)(n):0," / ",(0,g.notateNumber)(Math.floor(i))]})]})};var farming_Market=e=>{let{market:r,crop:n}=e;return(0,t.jsx)(a.Z,{direction:"row",flexWrap:"wrap",gap:2,children:null==r?void 0:r.map((e,r)=>{let{name:i,level:l,maxLvl:c,bonus:p,value:h,costToMax:v,type:m,cost:x,nextUpgrades:f}=e;return(0,t.jsx)(s.Z,{sx:{width:250},children:(0,t.jsxs)(d.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,t.jsxs)(a.Z,{direction:"row",gap:2,alignItems:"center",children:[(0,t.jsx)(o.Z,{children:(0,g.cleanUnderscore)(i.toLowerCase().capitalizeAll())}),(0,t.jsxs)(o.Z,{variant:"caption",children:[l," / ",c]})]}),(0,t.jsx)(o.Z,{variant:"caption",color:r<8?"warning.light":"secondary.main",children:r<8?"Day market":"Night Market"}),(0,t.jsx)(o.Z,{mt:2,children:(0,g.cleanUnderscore)(p.replace(/{|}/,h))}),l<c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{mt:1,children:[(0,t.jsx)(o.Z,{variant:"caption",children:"Next requirement"}),(0,t.jsx)(UpgradeReq,{icon:r<8?"FarmCrop".concat(m):"FarmCropBean",owned:n[r<8?m:"beans"],cost:x}),(0,t.jsx)(u.Z,{sx:{mt:2}})]}),(0,t.jsxs)(a.Z,{mt:2,children:[(0,t.jsx)(o.Z,{variant:"caption",children:"Future requirements"}),f.map((e,a)=>{let{type:o,cost:i}=e;if(o===m&&i===x||r>8&&a>0)return null;o=r<8?o:"beans";let l=r<8?"FarmCrop".concat(o):"FarmCropBean";return(0,t.jsx)(UpgradeReq,{icon:l,owned:n[o],cost:i},"extra"+a)})]})]}):(0,t.jsx)(o.Z,{color:"success.light",children:"Maxed out"}),v>0?(0,t.jsxs)(o.Z,{sx:{mt:"auto"},variant:"caption",children:["Cost to max: ",(0,g.notateNumber)(v,"Big")]}):null]})},"upgrade"+r)})})},p=n(21480),h=n(57005),v=n(73595),m=n(77115),x=n(64885),farming_Plot=e=>{let{plot:r,lastUpdated:n}=e,i=(0,m.YA)(r);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.Ye,{title:"Totals",children:(0,t.jsx)(a.Z,{direction:"row",gap:1,flexWrap:"wrap",children:Object.entries(i||{}).map(e=>{let[r,n]=e;return(0,t.jsx)(s.Z,{variant:"outlined",children:(0,t.jsx)(d.Z,{children:(0,t.jsxs)(a.Z,{direction:"row",gap:1,children:[(0,t.jsx)(o.Z,{children:n}),(0,t.jsx)("img",{width:20,height:20,src:"".concat(g.prefix,"data/").concat(r),alt:""})]})})},r)})})}),(0,t.jsx)(a.Z,{direction:"row",flexWrap:"wrap",gap:2,children:null==r?void 0:r.map((e,r)=>{let{seedType:i,progress:l,growthReq:c,growthRate:u,cropType:p,cropQuantity:m,cropProgress:x,cropRawName:f,seedRawName:j,nextOGChance:Z,isLocked:b,currentOG:w,ogMulti:O,timeLeft:M}=e;return Z=(Z=Math.min(100,100*Z))>=10?Math.round(Z):Math.round(10*Z)/10,(0,t.jsx)(s.Z,{sx:{width:200},children:(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(a.Z,{direction:"row",alignItems:"center",gap:2,children:[(0,t.jsx)("img",{src:"".concat(g.prefix,"etc/").concat(j),alt:""}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(a.Z,{direction:"row",gap:1,children:[(0,t.jsx)(o.Z,{children:m}),(0,t.jsx)("img",{width:20,height:20,src:"".concat(g.prefix,"data/").concat(f),alt:""})]}),(0,t.jsxs)(o.Z,{variant:"caption",children:["Floor ",Math.floor(r/9+1)]})]}),b?(0,t.jsx)(v.Z,{sx:{ml:"auto"}}):null]}),(0,t.jsxs)(o.Z,{mt:2,children:["Current OG: ",w," (x",O,")"]}),(0,t.jsxs)(o.Z,{children:["Next OG: ",Z,"%"]}),(0,t.jsx)(h.Z,{type:"countdown",lastUpdated:n,date:new Date().getTime()+1e3*M})]})},"plot-"+r)})})]})},f=n(21023),j=n(70473),farming_Crop=e=>{let{crop:r}=e;return(0,t.jsx)(a.Z,{direction:"row",flexWrap:"wrap",gap:2,children:j.seedInfo.map(e=>{let{name:n,seedId:i,cropIdMin:l,cropIdMax:c}=e,u=(0,g.createRange)(l,c);return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(a.Z,{mb:1,direction:"row",gap:1,alignItems:"center",children:[(0,t.jsx)("img",{width:20,height:20,src:"".concat(g.prefix,"etc/Seed_").concat(i,".png"),alt:""}),(0,t.jsx)(o.Z,{variant:"h5",children:n.toLowerCase().capitalize()})]}),(0,t.jsx)(a.Z,{direction:"row",flexWrap:"wrap",gap:1,children:u.map(e=>(0,t.jsx)(s.Z,{sx:{width:90,opacity:(null==r?void 0:r[e])>=0?1:.5},children:(0,t.jsx)(d.Z,{sx:{"&:last-child":{p:1}},children:(0,t.jsx)(f.Z,{title:null==r?void 0:r[e],children:(0,t.jsxs)(a.Z,{direction:"row",gap:1,justifyContent:"center",alignItems:"center",children:[(0,t.jsx)("img",{width:20,height:20,src:"".concat(g.prefix,"data/FarmCrop").concat(e,".png"),alt:""}),(null==r?void 0:r[e])>=0?(0,g.notateNumber)(null==r?void 0:r[e]):0]})})})},"crop"+e))})]},n)})})},world_6_farming=()=>{var e;let{state:r}=(0,l.useContext)(p.I),{market:n,plot:s,crop:d,cropDepot:u={},instaGrow:h,beanTrade:v}=(null==r?void 0:null===(e=r.account)||void 0===e?void 0:e.farming)||{};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.PB,{title:"Farming | Idleon Toolbox",description:"Keep track of your garden with all its bonuses"}),(0,t.jsxs)(a.Z,{direction:"row",gap:1,children:[(0,t.jsx)(x.Ye,{title:"Bean Trade",value:Math.round(v),icon:"data/Quest80_x1.png",imgStyle:{width:24}}),(0,t.jsx)(x.Ye,{title:"Insta Grow",value:h})]}),(0,t.jsx)(o.Z,{variant:"h5",children:"Crop depot"}),(0,t.jsx)(a.Z,{direction:"row",gap:1,flexWrap:"wrap",children:Object.entries(u).map((e,r)=>{let[n,{name:a,value:o}]=e,i="gamingEvo"===n||"cookingSpeed"===n,l="critters"===n,c=(0,g.notateNumber)(o,i?"MultiplierInfo":"Big");return(0,t.jsx)(x.Ye,{title:a,value:"".concat(l?"+":"").concat(c).concat(l?"":i?"x":"%"),icon:"etc/Pen_".concat(r,".png")},n)})}),(0,t.jsxs)(c.Z,{tabs:["Plot","Market","Crop"],children:[(0,t.jsx)(farming_Plot,{plot:s,crop:d,lastUpdated:null==r?void 0:r.lastUpdated}),(0,t.jsx)(farming_Market,{market:n,crop:d}),(0,t.jsx)(farming_Crop,{crop:d})]})]})}},77115:function(e,r,n){"use strict";n.d(r,{UA:function(){return getFarming},YA:function(){return getTotalCrop},nT:function(){return updateFarming}});var t=n(30925),a=n(70473),o=n(8616),i=n(96707),l=n(88054),c=n(15893),s=n(13339),d=n(9339);let getFarming=(e,r)=>{let n=(0,t.tryToParse)(null==e?void 0:e.FarmUpg),a=(0,t.tryToParse)(null==e?void 0:e.FarmPlot),o=(0,t.tryToParse)(null==e?void 0:e.FarmCrop);return parseFarming(n,a,o,r)},parseFarming=(e,r,n,t)=>{var i,l;let c=null==t?void 0:null===(i=t.gemShopPurchases)||void 0===i?void 0:i.find((e,r)=>139===r),s=null==e?void 0:e.slice(2,a.marketInfo.length+2),u=null==e?void 0:e[1],g=null==e?void 0:e[19],p=null===a.marketInfo||void 0===a.marketInfo?void 0:a.marketInfo.map((e,r)=>{var n;let{cropId:t,cropIdIncrement:a,cost:o,costExponent:i,bonusPerLvl:l,maxLvl:c,bonus:d}=e,u=null!==(n=null==s?void 0:s[r])&&void 0!==n?n:0;return{...e,level:u,type:getCropType({index:r,cropId:t,cropIdIncrement:a,level:u}),cost:o*Math.pow(i,u),nextUpgrades:getNextUpgradesReq({index:r,cropId:t,cropIdIncrement:a,level:u,cost:o,costExponent:i}),costToMax:calcCostToMax({level:u,maxLvl:c,cost:o,costExponent:i}),value:d.includes("}")?1+u*l/100:u*l}}),h=null==r?void 0:r.map(e=>{var r;let[n,t,o,i,l,c,s]=e,d=Math.round((null===a.seedInfo||void 0===a.seedInfo?void 0:null===(r=a.seedInfo[n])||void 0===r?void 0:r.cropIdMin)+o);return{seedType:n,cropType:d,cropQuantity:l,cropProgress:s,progress:t,growthReq:14400*Math.pow(1.5,n),isLocked:i,currentOG:c,cropRawName:"FarmCrop".concat(d,".png"),seedRawName:"Seed_".concat(n,".png")}}),v=getMarketBonus(p,"LAND_PLOTS"),m=Object.entries(n||{}).reduce((e,r)=>{var n,t;let[o,i]=r,l=a.seedInfo.find(e=>parseFloat(o)>=e.cropIdMin&&parseFloat(o)<=e.cropIdMax);return e+parseFloat(i)*Math.pow(2.5,null!==(n=null==l?void 0:l.seedId)&&void 0!==n?n:0)*Math.pow(1.08,o-(null!==(t=null==l?void 0:l.cropIdMin)&&void 0!==t?t:0))},0),x=null!==(l=(0,o.x5)(t,"Deal_Sweetening"))&&void 0!==l?l:0,f=getMarketBonus(p,"MORE_BEENZ"),j=(0,d.k6)(null==t?void 0:t.achievements,363);return{plot:h,crop:{...n,beans:u},market:p,cropsFound:Object.keys(n||{}).length,cropsOnVine:Math.floor(1+(v+20*c)/100),instaGrow:g,beanTrade:Math.pow(m,.5)*(1+f/100)*(1+(25*x+5*j)/100)}},getCropsWithStockEqualOrGreaterThan=(e,r)=>{var n;return null===(n=Object.values(e))||void 0===n?void 0:n.filter(e=>e>=r).length},getMarketUpgradeBonusValue=(e,r,n)=>{let t=e.find((e,r)=>r===n);if(!t)return 0;switch(n){case 7:case 13:return 0;case 9:return getMarketUpgradeBonusValue(e,r,15)*Math.pow(1+t.level*t.bonusPerLvl/100,getCropsWithStockEqualOrGreaterThan(r,200));case 11:return 1+t.level*t.bonusPerLvl/100;case 10:return getMarketUpgradeBonusValue(e,r,15)*(1+t.level*t.bonusPerLvl*getCropsWithStockEqualOrGreaterThan(r,1e3)/100);case 12:return getMarketUpgradeBonusValue(e,r,15)*(1+t.level*t.bonusPerLvl*getCropsWithStockEqualOrGreaterThan(r,2500)/100);case 14:return getMarketUpgradeBonusValue(e,r,15)*(1+t.level*t.bonusPerLvl*getCropsWithStockEqualOrGreaterThan(r,1e4)/100);case 15:return 1+t.level*t.bonusPerLvl*getCropsWithStockEqualOrGreaterThan(r,1e5)/100;default:return t.bonus.includes("}")?1+t.level*t.bonusPerLvl/100:t.level*t.bonusPerLvl}},updateFarming=(e,r)=>{var n,t,a,c;let u=null==r?void 0:null===(t=r.farming)||void 0===t?void 0:null===(n=t.market)||void 0===n?void 0:n.map((e,n)=>{var t,a;return console.log(e.name,n),{...e,value:getMarketUpgradeBonusValue(null==r?void 0:null===(t=r.farming)||void 0===t?void 0:t.market,null==r?void 0:null===(a=r.farming)||void 0===a?void 0:a.crop,n)}}),g=null==r?void 0:null===(c=r.farming)||void 0===c?void 0:null===(a=c.plot)||void 0===a?void 0:a.map(n=>{var t,a;let c=getMarketBonus(null==r?void 0:null===(t=r.farming)||void 0===t?void 0:t.market,"OG_FERTILIZER"),g=(0,o.vq)(r,"Taffy_Disc"),p=(0,i.o9)(null==e?void 0:e[0],r,"OG_Chance"),h=(0,d.k6)(null==r?void 0:r.achievements,365),v=Math.pow(.4,(null==n?void 0:n.currentOG)+1)*Math.max(1,c)*(1+g/100)*(1+p/100)*(1+15*h/100),m=getMarketBonus(u,"NUTRITIOUS_SOIL"),x=getMarketBonus(u,"SPEED_GMO"),f=(0,l.iu)(null==r?void 0:null===(a=r.alchemy)||void 0===a?void 0:a.vials,"6FarmSpd"),j=(0,s.R)(r,"<x Farming SPD"),Z=Math.max(1,x)*(1+(m+f)/100)*(1+j/100),b=((null==n?void 0:n.growthReq)-(null==n?void 0:n.cropProgress))/Z,w=Math.min(1e9,Math.max(1,Math.pow(2,null==n?void 0:n.currentOG)));return{...n,nextOGChance:v,growthRate:Z,ogMulti:w,timeLeft:b}});return{...(null==r?void 0:r.farming)||{},plot:g,cropDepot:getCropDepotBonuses(r),market:u}},getNextUpgradesReq=e=>{let{index:r,cropId:n,cropIdIncrement:t,level:a,cost:o,costExponent:i,isUnique:l=!0}=e,c=new Map,s=0;for(;c.size<4;){let e=getCropType({index:r,cropId:n,cropIdIncrement:t,level:a+s}),d=o*Math.pow(i,a+s);c.has(e)&&l?c.set(e,c.get(e)+d):c.set(e,d),s++}return Array.from(c.entries()).map(e=>{let[r,n]=e;return{type:r,cost:n}})},getCropType=e=>{let{index:r,cropId:n,cropIdIncrement:t,level:a}=e;return 0===r?Math.floor(n+t*(a+(2*Math.floor(a/3)+Math.floor(a/4)))):Math.floor(n+t*a)},getCropDepotBonuses=e=>{var r,n,t,a,i,l,s,d,u;let g=(0,c.c9)(null==e?void 0:null===(r=e.lab)||void 0===r?void 0:r.labBonuses,17),p=(0,c.c9)(null==e?void 0:e.lab.labBonuses,8),h=(0,c.pc)(null==e?void 0:null===(n=e.lab)||void 0===n?void 0:n.jewels,20,p),v={damage:{name:"DMG",value:0},gamingEvo:{name:"Gaming Evo",value:0},jadeCoin:{name:"Jade Coin",value:0},cookingSpeed:{name:"Meal Spd",value:0},cash:{name:"Cash",value:0},shiny:{name:"Pet Rate",value:0},critters:{name:"Critters",value:0}};return(0,o.x5)(e,"Reinforced_Science_Pencil")&&(v.damage.value=20*Math.round(null==e?void 0:null===(t=e.farming)||void 0===t?void 0:t.cropsFound)*(1+(g+h)/100)),(0,o.x5)(e,"Science_Pen")&&(v.gamingEvo.value=Math.pow(1.02,Math.round(null==e?void 0:null===(a=e.farming)||void 0===a?void 0:a.cropsFound))*(1+(g+h)/100)),(0,o.x5)(e,"Science_Marker")&&(v.jadeCoin.value=8*Math.round(null==e?void 0:null===(i=e.farming)||void 0===i?void 0:i.cropsFound)*(1+(g+h)/100)),(0,o.x5)(e,"Science_Featherpen")&&(v.cookingSpeed.value=Math.pow(1.1,Math.round(null==e?void 0:null===(l=e.farming)||void 0===l?void 0:l.cropsFound))*(1+(g+h)/100)),(0,o.x5)(e,"Science_Environmentally_Sourced_Pencil")&&(v.cash.value=15*Math.round(null==e?void 0:null===(s=e.farming)||void 0===s?void 0:s.cropsFound)*(1+(g+h)/100)),(0,o.x5)(e,"Science_Crayon")&&(v.shiny.value=7*Math.round(null==e?void 0:null===(d=e.farming)||void 0===d?void 0:d.cropsFound)*(1+(g+h)/100)),(0,o.x5)(e,"Science_Paintbrush")&&(v.critters.value=.1*Math.round(null==e?void 0:null===(u=e.farming)||void 0===u?void 0:u.cropsFound)*(1+(g+h)/100)),v},getMarketBonus=(e,r)=>{var n,t;return null!==(t=null===(n=null==e?void 0:e.find(e=>{let{name:n}=e;return n===r}))||void 0===n?void 0:n.value)&&void 0!==t?t:0},calcCostToMax=e=>{let{level:r,maxLvl:n,cost:t,costExponent:a}=e,o=0;for(let e=r;e<n;e++)o+=t*Math.pow(a,e);return null!=o?o:0},getTotalCrop=e=>null==e?void 0:e.reduce((e,r)=>{let{seedType:n,cropQuantity:t,cropRawName:a,ogMulti:o}=r;return -1===n?e:{...e,[a]:((null==e?void 0:e[a])||0)+t*o}},{})}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=45591)}),_N_E=e.O()}]);
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a41f0cdc-7ad9-4fed-af44-6ab5942ecbdf",e._sentryDebugIdIdentifier="sentry-dbid-a41f0cdc-7ad9-4fed-af44-6ab5942ecbdf")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5411],{2097:function(e,t,n){"use strict";var a=n(67294);t.Z=e=>{let t=a.useRef({});return a.useEffect(()=>{t.current=e}),t.current}},11622:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-5/slab",function(){return n(31611)}])},27496:function(e,t,n){"use strict";n.d(t,{Gr:function(){return MissingData},M5:function(){return j},Wd:function(){return PlayersList},Ye:function(){return CardTitleAndValue},iy:function(){return CardAndBorder},j8:function(){return p},tq:function(){return Breakdown},u3:function(){return TalentTooltip},uQ:function(){return TitleAndValue},wD:function(){return CenteredStack}});var a=n(82729),r=n(85893),l=n(67294),s=n(65298),o=n(51233),i=n(23972),c=n(49425),d=n(66242),u=n(44267),x=n(67720),m=n(61599),y=n(74612),f=n(9751);function _templateObject(){let e=(0,a._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,a._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,a._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,a._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return _templateObject3=function(){return e},e}let j=(0,l.forwardRef)((e,t)=>{let{stat:n,icon:a,img:l,title:c="",...d}=e;return(0,r.jsx)(y.Z,{title:c,children:(0,r.jsxs)(o.Z,{alignItems:"center",...d,ref:t,style:{position:"relative",width:"fit-content"},children:[(0,r.jsx)("img",{...l,src:"".concat(s.prefix,"data/").concat(a,".png"),alt:""}),(0,r.jsx)(i.Z,{variant:"body1",component:"span",children:n})]})})});j.displayName="IconWithText";let TitleAndValue=e=>{let{title:t,value:n,boldTitle:a,titleStyle:l={},valueStyle:s={}}=e;return(0,r.jsxs)(o.Z,{direction:"row",flexWrap:"wrap",alignItems:"center","data-sentry-element":"Stack","data-sentry-component":"TitleAndValue","data-sentry-source-file":"styles.jsx",children:[t?(0,r.jsxs)(i.Z,{sx:l,fontWeight:a?"bold":500,component:"span",children:[t,":\xa0"]}):null,(0,r.jsx)(i.Z,{fontSize:15,component:"span",sx:s,"data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:n})]})},p=(0,m.Z)(c.Z)(_templateObject()),CardAndBorder=e=>{let{cardName:t,stars:n,cardIndex:a,name:l,variant:o,rawName:i,amount:c,nextLevelReq:d}=e,u="cardSet"===o?"".concat(s.prefix,"data/").concat(i,".png"):"".concat(s.prefix,"data/2Cards").concat(a,".png");return(0,r.jsxs)(r.Fragment,{children:[n>0?(0,r.jsx)(g,{src:"".concat(s.prefix,"data/CardEquipBorder").concat(n,".png"),alt:""}):null,(0,r.jsx)(y.Z,{title:(0,r.jsx)(CardTooltip,{...e,cardName:"cardSet"===o?l:t,nextLevelReq:d,amount:c}),"data-sentry-element":"Tooltip","data-sentry-source-file":"styles.jsx",children:(0,r.jsx)(h,{isCardSet:"cardSet"===o,amount:c,src:u,alt:"","data-sentry-element":"CardIcon","data-sentry-source-file":"styles.jsx"})})]})},CardTooltip=e=>{let{displayName:t,effect:n,bonus:a,stars:l,showInfo:c,nextLevelReq:d,amount:u}=e,x=a;return c&&(x=(0,f.BZ)({bonus:a,stars:l})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{fontWeight:"bold",variant:"h6","data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:(0,s.cleanUnderscore)(t)}),(0,r.jsx)(i.Z,{"data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:(0,s.cleanUnderscore)(n.replace("{",x))}),c?(0,r.jsx)(o.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,n)=>(0,r.jsxs)(o.Z,{alignItems:"center",justifyContent:"space-between",children:[0===n?(0,r.jsx)(i.Z,{children:"Base"}):(0,r.jsx)(b,{src:"".concat(s.prefix,"etc/Star").concat(n,".png"),alt:""}),(0,r.jsx)(i.Z,{children:a*(n+1)})]},"".concat(t,"-").concat(n)))}):null,u>=d?(0,r.jsxs)(o.Z,{children:["You've collected ",(0,s.numberWithCommas)(u)," cards"]}):d>0?(0,r.jsxs)(o.Z,{children:["Progress: ",(0,s.numberWithCommas)(u)," / ",(0,s.numberWithCommas)(d)]}):null]})},b=m.Z.img(_templateObject1()),h=m.Z.img(_templateObject2(),e=>{let{amount:t,isCardSet:n}=e;return t||n?1:.5}),g=m.Z.img(_templateObject3()),TalentTooltip=e=>{let{level:t,funcX:n,x1:a,x2:l,funcY:c,y1:d,y2:u,description:x,name:m,talentId:y}=e,f=t>0?(0,s.growth)(n,t,a,l):0,j=t>0?(0,s.growth)(c,t,d,u):0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",gap:1,"data-sentry-element":"Stack","data-sentry-source-file":"styles.jsx",children:[(0,r.jsx)("img",{src:"".concat(s.prefix,"data/UISkillIcon").concat(y,".png"),alt:""}),(0,r.jsx)(i.Z,{fontWeight:"bold",variant:"h6","data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:(0,s.cleanUnderscore)(m)})]}),(0,r.jsx)(i.Z,{"data-sentry-element":"Typography","data-sentry-source-file":"styles.jsx",children:(0,s.cleanUnderscore)(x).replace("{",f).replace("}",j)})]})},PlayersList=e=>{let{players:t,characters:n}=e;return(0,r.jsx)(o.Z,{gap:1,direction:"row","data-sentry-element":"Stack","data-sentry-component":"PlayersList","data-sentry-source-file":"styles.jsx",children:t.map(e=>{var t,a;let{index:l}=e;return(0,r.jsx)(y.Z,{title:null==n?void 0:null===(t=n[l])||void 0===t?void 0:t.name,children:(0,r.jsx)("img",{style:{width:24,height:24},src:"".concat(s.prefix,"data/ClassIcons").concat(null==n?void 0:null===(a=n[l])||void 0===a?void 0:a.classIndex,".png"),alt:""})},name+"-head-"+l)})})},MissingData=e=>{let{name:t}=e;return(0,r.jsxs)(i.Z,{variant:"h3","data-sentry-element":"Typography","data-sentry-component":"MissingData","data-sentry-source-file":"styles.jsx",children:["Your account is missing data for ",t]})},CardTitleAndValue=e=>{let{variant:t,raised:n,cardSx:a,imgOnly:l,imgStyle:c,title:x,value:m,children:f,icon:j,tooltipTitle:p,stackProps:b,contentPadding:h}=e;return(0,r.jsx)(y.Z,{title:p||"","data-sentry-element":"Tooltip","data-sentry-component":"CardTitleAndValue","data-sentry-source-file":"styles.jsx",children:(0,r.jsx)(d.Z,{variant:t,raised:n,sx:{my:{xs:0,md:3},width:"fit-content",...a},"data-sentry-element":"Card","data-sentry-source-file":"styles.jsx",children:(0,r.jsx)(u.Z,{sx:{"&:last-child":h?{p:h}:{}},"data-sentry-element":"CardContent","data-sentry-source-file":"styles.jsx",children:(0,r.jsxs)(o.Z,{sx:{display:b?"flex":"block",...b||{}},"data-sentry-element":"Stack","data-sentry-source-file":"styles.jsx",children:[x?(0,r.jsx)(i.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,component:"span",children:x}):null,m||l?j?(0,r.jsxs)(o.Z,{direction:"row",gap:2,alignItems:"center",children:[(0,r.jsx)("img",{style:{objectFit:"contain",...c},src:"".concat(s.prefix).concat(j),alt:""}),m?(0,r.jsx)(i.Z,{children:m}):null]}):(0,r.jsx)(i.Z,{children:m}):f]})})})})},Breakdown=e=>{let{breakdown:t,titleStyle:n={},notation:a="Big"}=e;return(0,r.jsx)(r.Fragment,{children:null==t?void 0:t.map((e,t)=>{let{name:l,value:o,title:c}=e;return c?(0,r.jsx)(i.Z,{sx:{fontWeight:500},children:c},"".concat(l,"-").concat(t)):l?(0,r.jsx)(TitleAndValue,{titleStyle:{width:120,...n},title:l,value:isNaN(o)?o:(0,s.notateNumber)(o,a)},"".concat(l,"-").concat(t)):(0,r.jsx)(x.Z,{sx:{my:1,bgcolor:"black"}},"".concat(l,"-").concat(t))})})},CenteredStack=e=>{let{direction:t="row",children:n}=e;return(0,r.jsx)(o.Z,{gap:1,direction:t,alignItems:"center","data-sentry-element":"Stack","data-sentry-component":"CenteredStack","data-sentry-source-file":"styles.jsx",children:n})}},31611:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(58437),l=n(67294),s=n(51233),o=n(87357),i=n(94054),c=n(40476),d=n(72890),u=n(50480),x=n(36872),m=n(65298),y=n(74612),f=n(2962),j=n(25675),p=n.n(j),b=n(27496);let h=(0,l.forwardRef)((e,t)=>{let{src:n,fallback:r,alt:s,size:o}=e,[i,c]=(0,l.useState)(!1);return(0,a.jsx)(p(),{...e,ref:t,src:i?r:n,alt:s,width:o,height:o,onError:()=>c(!0)})});t.default=l.memo(()=>{var e,t,n,j,p,g;let{state:v}=(0,l.useContext)(r.I),[Z,w]=(0,l.useState)("missing"),shouldDisplayItem=(e,t)=>{if("all"===t||"looted"===t&&(null==e?void 0:e.obtained)||"missing"===t&&!(null==e?void 0:e.obtained)&&!(null==e?void 0:e.unobtainable)||"rotation"===t&&(null==e?void 0:e.onRotation)||"unobtainable"===t&&(null==e?void 0:e.unobtainable))return!0},C=(0,l.useMemo)(()=>{var e,t,n;return null==v?void 0:null===(n=v.account)||void 0===n?void 0:null===(t=n.looty)||void 0===t?void 0:null===(e=t.slabItems)||void 0===e?void 0:e.filter(e=>shouldDisplayItem(e,Z))},[Z]);return(0,a.jsxs)(s.Z,{"data-sentry-element":"Stack","data-sentry-component":"Slab","data-sentry-source-file":"slab.jsx",children:[(0,a.jsx)(f.PB,{title:"Slab | Idleon Toolbox",description:"The Slab consists of a list of items within the game","data-sentry-element":"NextSeo","data-sentry-source-file":"slab.jsx"}),(0,a.jsxs)(s.Z,{direction:"row",gap:3,"data-sentry-element":"Stack","data-sentry-source-file":"slab.jsx",children:[(0,a.jsx)(b.Ye,{title:"Looted items",value:"".concat(null==v?void 0:null===(t=v.account)||void 0===t?void 0:null===(e=t.looty)||void 0===e?void 0:e.lootedItems," / ").concat(null==v?void 0:null===(j=v.account)||void 0===j?void 0:null===(n=j.looty)||void 0===n?void 0:n.totalItems),"data-sentry-element":"CardTitleAndValue","data-sentry-source-file":"slab.jsx"}),(0,a.jsx)(b.Ye,{title:"Missing items",value:null==v?void 0:null===(g=v.account)||void 0===g?void 0:null===(p=g.looty)||void 0===p?void 0:p.missingItems,"data-sentry-element":"CardTitleAndValue","data-sentry-source-file":"slab.jsx"})]}),(0,a.jsx)(o.Z,{sx:{mb:3},"data-sentry-element":"Box","data-sentry-source-file":"slab.jsx",children:(0,a.jsxs)(i.Z,{"data-sentry-element":"FormControl","data-sentry-source-file":"slab.jsx",children:[(0,a.jsx)(c.Z,{id:"demo-radio-buttons-group-label","data-sentry-element":"FormLabel","data-sentry-source-file":"slab.jsx",children:"Display"}),(0,a.jsxs)(d.Z,{row:!0,"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"missing",name:"radio-buttons-group",onChange:e=>w(e.target.value),"data-sentry-element":"RadioGroup","data-sentry-source-file":"slab.jsx",children:[(0,a.jsx)(u.Z,{value:"missing",control:(0,a.jsx)(x.Z,{}),label:"Missing items","data-sentry-element":"FormControlLabel","data-sentry-source-file":"slab.jsx"}),(0,a.jsx)(u.Z,{value:"looted",control:(0,a.jsx)(x.Z,{}),label:"Looted items","data-sentry-element":"FormControlLabel","data-sentry-source-file":"slab.jsx"}),(0,a.jsx)(u.Z,{value:"all",control:(0,a.jsx)(x.Z,{}),label:"All items","data-sentry-element":"FormControlLabel","data-sentry-source-file":"slab.jsx"}),(0,a.jsx)(u.Z,{value:"rotation",control:(0,a.jsx)(x.Z,{}),label:"GemShop rotation","data-sentry-element":"FormControlLabel","data-sentry-source-file":"slab.jsx"}),(0,a.jsx)(u.Z,{value:"unobtainable",control:(0,a.jsx)(x.Z,{}),label:"Unobtainable","data-sentry-element":"FormControlLabel","data-sentry-source-file":"slab.jsx"})]})]})}),(0,a.jsx)(s.Z,{direction:"row",gap:1,flexWrap:"wrap","data-sentry-element":"Stack","data-sentry-source-file":"slab.jsx",children:null==C?void 0:C.map((e,t)=>{let{name:n,rawName:r}=e;return(0,a.jsx)(y.Z,{title:(0,m.cleanUnderscore)(n),children:(0,a.jsx)(h,{src:"".concat(m.prefix,"data/").concat(r,".png"),fallback:"".concat(m.prefix,"data/").concat(r,"_x1.png"),size:50,alt:r})},"".concat(r,"-").concat(t))})})]})})}},function(e){e.O(0,[8356,5675,9774,2888,179],function(){return e(e.s=11622)}),_N_E=e.O()}]);
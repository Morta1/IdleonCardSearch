(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4898],{63343:function(n,t,e){"use strict";var r=e(64836);t.Z=void 0;var i=r(e(64938)),a=e(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=o},87109:function(n,t,e){"use strict";e.d(t,{Z:function(){return S}});var r,i=e(63366),a=e(87462),o=e(67294),l=e(86010),s=e(94780),d=e(98216),c=e(15861),u=e(47167),p=e(74423),v=e(90948),h=e(1588),x=e(34867);function f(n){return(0,x.Z)("MuiInputAdornment",n)}let m=(0,h.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g=e(71657),j=e(85893);let Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=n=>{let{classes:t,disablePointerEvents:e,hiddenLabel:r,position:i,size:a,variant:o}=n,l={root:["root",e&&"disablePointerEvents",i&&`position${(0,d.Z)(i)}`,o,r&&"hiddenLabel",a&&`size${(0,d.Z)(a)}`]};return(0,s.Z)(l,f,t)},w=(0,v.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(n,t)=>{let{ownerState:e}=n;return[t.root,t[`position${(0,d.Z)(e.position)}`],!0===e.disablePointerEvents&&t.disablePointerEvents,t[e.variant]]}})(({theme:n,ownerState:t})=>(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&{[`&.${m.positionStart}&:not(.${m.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),C=o.forwardRef(function(n,t){let e=(0,g.Z)({props:n,name:"MuiInputAdornment"}),{children:s,className:d,component:v="div",disablePointerEvents:h=!1,disableTypography:x=!1,position:f,variant:m}=e,C=(0,i.Z)(e,Z),S=(0,p.Z)()||{},y=m;m&&S.variant,S&&!y&&(y=S.variant);let _=(0,a.Z)({},e,{hiddenLabel:S.hiddenLabel,size:S.size,disablePointerEvents:h,position:f,variant:y}),E=b(_);return(0,j.jsx)(u.Z.Provider,{value:null,children:(0,j.jsx)(w,(0,a.Z)({as:v,ownerState:_,className:(0,l.Z)(E.root,d),ref:t},C,{children:"string"!=typeof s||x?(0,j.jsxs)(o.Fragment,{children:["start"===f?r||(r=(0,j.jsx)("span",{className:"notranslate",children:"​"})):null,s]}):(0,j.jsx)(c.Z,{color:"text.secondary",children:s})}))})});var S=C},33182:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/card-search",function(){return e(73237)}])},25164:function(n,t,e){"use strict";e.d(t,{Gr:function(){return P},M5:function(){return j},Wd:function(){return B},Ye:function(){return k},iy:function(){return w},j8:function(){return b},u3:function(){return E},uQ:function(){return Z},wD:function(){return I}});var r=e(82729),i=e(85893),a=e(67294),o=e(39574),l=e(51233),s=e(15861),d=e(49425),c=e(66242),u=e(44267),p=e(61599),v=e(51053),h=e(60510);function x(){let n=(0,r._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return x=function(){return n},n}function f(){let n=(0,r._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return f=function(){return n},n}function m(){let n=(0,r._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return m=function(){return n},n}function g(){let n=(0,r._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return g=function(){return n},n}let j=(0,a.forwardRef)((n,t)=>{let{stat:e,icon:r}=n,{img:a,...d}=n;return(0,i.jsxs)(l.Z,{alignItems:"center",...d,ref:t,style:{position:"relative",width:"fit-content"},children:[(0,i.jsx)("img",{...a,src:"".concat(o.prefix,"data/").concat(r,".png"),alt:""}),(0,i.jsx)(s.Z,{variant:"body1",component:"span",children:e})]})});j.displayName="IconWithText";let Z=n=>{let{title:t,value:e,boldTitle:r,titleStyle:a={}}=n;return(0,i.jsxs)(l.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[t?(0,i.jsxs)(s.Z,{style:a,fontWeight:r?"bold":500,component:"span",children:[t,":\xa0"]}):null,(0,i.jsx)(s.Z,{fontSize:15,component:"span",children:e})]})},b=(0,p.Z)(d.Z)(x()),w=n=>{let{cardName:t,stars:e,cardIndex:r,name:a,variant:l,rawName:s,amount:d,nextLevelReq:c}=n,u="cardSet"===l?"".concat(o.prefix,"data/").concat(s,".png"):"".concat(o.prefix,"data/2Cards").concat(r,".png");return(0,i.jsxs)(i.Fragment,{children:[e>0?(0,i.jsx)(_,{src:"".concat(o.prefix,"data/CardEquipBorder").concat(e,".png"),alt:""}):null,(0,i.jsx)(v.Z,{title:(0,i.jsx)(C,{...n,cardName:"cardSet"===l?a:t,nextLevelReq:c,amount:d}),children:(0,i.jsx)(y,{isCardSet:"cardSet"===l,amount:d,src:u,alt:""})})]})},C=n=>{let{displayName:t,effect:e,bonus:r,stars:a,showInfo:d,nextLevelReq:c,amount:u}=n,p=r;return d&&(p=(0,h.BZ)({bonus:r,stars:a})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(t)}),(0,i.jsx)(s.Z,{children:(0,o.cleanUnderscore)(e.replace("{",p))}),d?(0,i.jsx)(l.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((n,e)=>(0,i.jsxs)(l.Z,{alignItems:"center",justifyContent:"space-between",children:[0===e?(0,i.jsx)(s.Z,{children:"Base"}):(0,i.jsx)(S,{src:"".concat(o.prefix,"etc/Star").concat(e,".png"),alt:""}),(0,i.jsx)(s.Z,{children:r*(e+1)})]},"".concat(t,"-").concat(e)))}):null,u>=c?(0,i.jsxs)(l.Z,{children:["You've collected ",(0,o.numberWithCommas)(u)," cards"]}):c>0?(0,i.jsxs)(l.Z,{children:["Progress: ",(0,o.numberWithCommas)(u)," / ",(0,o.numberWithCommas)(c)]}):null]})},S=p.Z.img(f()),y=p.Z.img(m(),n=>{let{amount:t,isCardSet:e}=n;return t||e?1:.5}),_=p.Z.img(g()),E=n=>{let{level:t,funcX:e,x1:r,x2:a,funcY:d,y1:c,y2:u,description:p,name:v,talentId:h}=n,x=t>0?(0,o.growth)(e,t,r,a):0,f=t>0?(0,o.growth)(d,t,c,u):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)("img",{src:"".concat(o.prefix,"data/UISkillIcon").concat(h,".png"),alt:""}),(0,i.jsx)(s.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(v)})]}),(0,i.jsx)(s.Z,{children:(0,o.cleanUnderscore)(p).replace("{",x).replace("}",f)})]})},B=n=>{let{players:t,characters:e}=n;return(0,i.jsx)(l.Z,{gap:1,direction:"row",children:t.map(n=>{var t;let{index:r}=n;return(0,i.jsx)(v.Z,{title:null==e?void 0:null===(t=e[r])||void 0===t?void 0:t.name,children:(0,i.jsx)("img",{src:"".concat(o.prefix,"data/headBIG.png"),alt:""})},name+"-head-"+r)})})},P=n=>{let{name:t}=n;return(0,i.jsxs)(s.Z,{variant:"h3",children:["Your account is missing data for ",t]})},k=n=>{let{cardSx:t,title:e,value:r,children:a}=n;return(0,i.jsx)(c.Z,{sx:{my:{xs:0,md:3},width:"fit-content",...t},children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(s.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:e}),r?(0,i.jsx)(s.Z,{children:r}):a]})})},I=n=>{let{direction:t="row",children:e}=n;return(0,i.jsx)(l.Z,{gap:1,direction:t,alignItems:"center",children:e})}},73237:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return _}});var r=e(82729),i=e(85893),a=e(67294),o=e(98396),l=e(51233),s=e(87918),d=e(15861),c=e(87357),u=e(61903),p=e(87109),v=e(39574),h=e(72032),x=e(63343),f=e(61599),m=e(41422),g=e(25164),j=e(2962),Z=e(13250);function b(){let n=(0,r._)(["\n  && label.Mui-focused {\n    color: rgba(255, 255, 255, 0.7);\n  }\n\n  & .MuiInput-underline:after {\n    border-bottom-color: green;\n  }\n"]);return b=function(){return n},n}function w(){let n=(0,r._)(["\n  cursor: pointer;\n"]);return w=function(){return n},n}function C(){let n=(0,r._)(["\n  color: white;\n\n  .chips {\n    margin: 20px 0;\n\n    .chip {\n      margin-right: 10px;\n      margin-top: 8px;\n    }\n  }\n\n  .cards {\n    min-height: 600px;\n\n    .category-wrapper {\n\n\n    }\n\n    .card-banner {\n      margin: 10px;\n      display: block;\n    }\n\n    .not-found {\n      margin: 20px;\n      font-size: 30px;\n    }\n\n    .image-wrapper {\n      display: inline-block;\n    }\n  }\n"]);return C=function(){return n},n}let S=["Card Sets","Blunder_Hills","Yum_Yum_Desert","Easy_Resources","Medium_Resources","Frostbite_Tundra","Hard_Resources","Hyperion_Nebula","Smolderin'_Plateau","Dungeons","Bosses","Events"],y={choppin:[h.stats.BaseWIS,h.stats.SkillAFKgainrate],catching:[h.stats.BaseAGI,h.stats.SkillAFKgainrate],mining:[h.stats.BaseSTR,h.stats.SkillAFKgainrate,h.stats.BaseHP,h.stats.BoostFoodEffect],fishing:[h.stats.BaseSTR,h.stats.SkillAFKgainrate,h.stats.BaseHP,h.stats.BoostFoodEffect],trapping:[h.stats.BaseAGI,h.stats.SkillAFKgainrate,h.stats.ShinyCritterChance],damage:[h.stats.WeaponPower,h.stats.CriticalChance],"drop rate":[h.stats.BaseLUK],"card drop":[h.stats.BaseLUK,h.stats.TotalDropRate],"monster exp":[h.stats.EXPfrommonsters],dungeon:[h.stats.BlockChance,h.stats.RNGitemrarity,h.stats["tostartwithRNGorb(Passive)"]],worship:[h.stats.StartingPtsinWorship,h.stats.ChargeRate,h.stats.MaxCharge,h.stats.SkillEXP]};function _(){var n;let{state:t}=(0,a.useContext)(m.I),[e,r]=(0,a.useState)(""),u=(0,o.Z)("(min-width: 1600px)",{noSsr:!0}),p=(0,o.Z)("(min-width: 850px)",{noSsr:!0}),f=(n,t)=>{var e;let r=null===(e=Object.entries(n))||void 0===e?void 0:e.reduce((n,t)=>{let[,e]=t,{category:r}=e;return{...n,[r]:[...(null==n?void 0:n[r])||[],e]}},{}),i=Object.entries(t).map(n=>{let[,t]=n;return t},[]);return{...r,"Card Sets":i}},b=(0,a.useMemo)(()=>f(h.cards,h.cardSets),[h.cards]),[w,C]=(0,a.useState)(b);return(0,a.useEffect)(()=>{let n=Object.keys(b).reduce((n,t)=>{let r=b[t],i=r.filter(n=>{var t,r;let{effect:i}=n,a=i.replace(/[+%{]+_/,"").replace(/_/g," "),o=null===(t=null==a?void 0:a.toLowerCase())||void 0===t?void 0:t.includes(e.toLowerCase()),l=null===(r=y[e.toLowerCase()])||void 0===r?void 0:r.includes((0,v.cleanUnderscore)(a));return o||l});return{...n,[t]:i}},{});C(n)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.PB,{title:"Idleon Toolbox | Card Search",description:"Card search and filter by various tags e.g. Choppin, Catching, Worship, Attack etc"}),(0,i.jsxs)(l.Z,{direction:"row",gap:2,justifyContent:"space-between",children:[(0,i.jsx)(l.Z,{sx:{maxWidth:p||u?"78%":"100%"},children:(0,i.jsxs)(P,{children:[(0,i.jsx)(E,{InputProps:{endAdornment:(0,i.jsx)(B,{onClick:()=>r(""),position:"end",children:(0,i.jsx)(x.Z,{})})},label:"Enter Card stat..",type:"text",value:e,onChange:n=>{let{target:t}=n;return r(null==t?void 0:t.value)}}),(0,i.jsx)(l.Z,{direction:"row",my:2,gap:1,flexWrap:"wrap",children:["Show All","Afk","Choppin","Mining","Fishing","Catching","Trapping","Worship","Accuracy","Card Drop","Drop Rate","Monster Exp","Skill Exp","Defence","Damage","Dungeon","STR","AGI","WIS","LUK"].map((n,t)=>(0,i.jsx)(s.Z,{sx:{borderRadius:"8px",height:24,minWidth:60,maxWidth:150,border:"1px solid gray"},size:"small",variant:"outlined",label:n,onClick:()=>{r("Show All"===n?"":n)}},n+""+t))}),(0,i.jsx)("div",{className:"cards",children:(null===(n=Object.keys(w))||void 0===n?void 0:n.length)>0?S.map((n,e)=>{let r=w[n];if(!r||(null==r?void 0:r.length)===0)return null;let o="Card Sets"===n;return(0,i.jsxs)(a.Fragment,{children:[o?(0,i.jsx)(d.Z,{my:1,variant:"h4",children:"Card Sets"}):(0,i.jsx)("img",{src:"".concat(v.prefix,"etc/").concat(n,"_Card_Header.png"),style:{margin:"15px 0 10px 0"},alt:""}),(0,i.jsx)(l.Z,{direction:"row",flexWrap:"wrap",gap:2,sx:{maxWidth:600},children:r.map((n,e)=>{var r,a;let{displayName:l}=n,{stars:s,amount:d,nextLevelReq:c}=(null==t?void 0:null===(r=t.account)||void 0===r?void 0:null===(a=r.cards)||void 0===a?void 0:a[l])||{};return(0,i.jsx)("div",{style:{position:"relative"},children:(0,i.jsx)(g.iy,{nextLevelReq:c,amount:d,variant:o?"cardSet":"",showInfo:!0,...n,...o?{}:{stars:s}})},l+""+e)})})]},n+""+e)}):(0,i.jsx)("div",{className:"not-found",children:"Please try another phrase"})})]})}),u||p?(0,i.jsxs)(c.Z,{sx:{backgroundColor:v.isProd?"":"#d73333",width:u?300:p?160:0,height:600},children:[u?(0,i.jsx)(Z.a,{client:"ca-pub-1842647313167572",slot:"8677007036"}):null,p&&!u?(0,i.jsx)(Z.a,{client:"ca-pub-1842647313167572",slot:"3679847131"}):null]}):null]})]})}let E=(0,f.Z)(u.Z)(b()),B=(0,f.Z)(p.Z)(w()),P=f.Z.main(C())},60510:function(n,t,e){"use strict";e.d(t,{BZ:function(){return p},OK:function(){return u},V3:function(){return v},Xt:function(){return c},vm:function(){return a}});var r=e(72032),i=e(39574);let a=(n,t)=>{var e;let r=(null==n?void 0:null===(e=n.Cards)||void 0===e?void 0:e[0])||(0,i.tryToParse)(null==n?void 0:n.Cards0),a=(0,i.tryToParse)(null==n?void 0:n.Rift)||(null==n?void 0:n.Rift);return s(r,a,t)},o=(n,t,e,r)=>{let i=0;for(let a=0;a<4+ +r;a++)"Boss3B"===e?t>1.5*Math.pow(a+1+Math.floor(a/3),2)&&(i=a+2):t>n*Math.pow(a+1+(Math.floor(a/3)+16*Math.floor(a/4)),2)&&(i=a+2);return i>0?i-1:i},l=(n,t,e)=>t>=5?0:n*Math.pow(t+1+(Math.floor((t+1)/4)+16*Math.floor((t+1)/5)),2)-e+1,s=(n,t,e)=>{let[i]=t||[],a=i>=45;return Object.entries(n).reduce((n,t)=>{var i,s;let[d,c]=t,u=null===r.cards||void 0===r.cards?void 0:r.cards[d],p=(null==e?void 0:null===(i=e.accountOptions)||void 0===i?void 0:i[155])||"",v=(null===(s=null==p?void 0:p.toString())||void 0===s?void 0:s.split(","))||[],h=(null==v?void 0:v.includes(d))?5:o(null==u?void 0:u.perTier,c,d,a);return u?{...n,[null==u?void 0:u.displayName]:{...u,amount:c,stars:h,nextLevelReq:c+l(null==u?void 0:u.perTier,h,c)}}:n},{})},d=(n,t)=>n&&t?t/(null==n?void 0:n.bonus)-1:null,c=(n,t)=>{var e;let r=null==n?void 0:null===(e=n.equippedCards)||void 0===e?void 0:e.find(n=>{let{cardIndex:e}=n;return e===t});return r?p(r):0},u=(n,t)=>{var e;return null===(e=Object.values(n))||void 0===e?void 0:e.reduce((n,e)=>{var r;return(null==e?void 0:null===(r=e.effect)||void 0===r?void 0:r.includes(t))?n+p(e):n},0)},p=n=>{var t,e,r;return n?(null==n?void 0:n.bonus)*((null!==(t=null==n?void 0:n.stars)&&void 0!==t?t:-1)+1)*(null!==(e=null==n?void 0:n.chipBoost)&&void 0!==e?e:1):0},v=(n,t)=>{var e,i,a,o;if(!(null==n?void 0:n.CSetEq)&&!(null==n?void 0:n.CardEquip))return{};let l=null==n?void 0:n.CSetEq,s=null==n?void 0:null===(e=n.CardEquip)||void 0===e?void 0:e.map(n=>{var e,i,a;return{cardName:null===r.cards||void 0===r.cards?void 0:null===(e=r.cards[n])||void 0===e?void 0:e.displayName,...(null==t?void 0:null===(i=t.cards)||void 0===i?void 0:i[null===r.cards||void 0===r.cards?void 0:null===(a=r.cards[n])||void 0===a?void 0:a.displayName])||{}}}).filter((n,t)=>t<8),c=r.cardSets[null===(i=Object.keys(l))||void 0===i?void 0:i[0]]||{};return{cardSet:{...c,bonus:null===(a=Object.values(l))||void 0===a?void 0:a[0],stars:d(c,null===(o=Object.values(l))||void 0===o?void 0:o[0])},equippedCards:s}}}},function(n){n.O(0,[1220,9774,2888,179],function(){return n(n.s=33182)}),_N_E=n.O()}]);
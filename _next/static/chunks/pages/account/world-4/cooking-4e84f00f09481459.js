(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7851],{82169:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-4/cooking",function(){return l(81131)}])},86554:function(e,n,l){"use strict";var t=l(85893),i=l(87357),r=l(81458),o=l(15861);l(67294),n.Z=e=>{let{percent:n,bgColor:l,label:s=!0,sx:a,boxSx:c={},pre:d}=e;return(0,t.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",...c},children:[d,(0,t.jsx)(i.Z,{sx:{width:"100%",mr:1},children:(0,t.jsx)(r.Z,{sx:{width:"100%",height:10,borderRadius:5,"& .MuiLinearProgress-bar":{backgroundColor:l||""},...a},variant:"determinate",value:n>100?100:n})}),s?(0,t.jsx)(i.Z,{children:(0,t.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(n),"%")})}):null]})}},33583:function(e,n,l){"use strict";var t=l(85893),i=l(67294),r=l(98396),o=l(11703),s=l(40044);n.Z=e=>{let{tabs:n,children:l,onTabChange:a}=e,[c,d]=(0,i.useState)(0),u=(0,r.Z)(e=>e.breakpoints.down("md"),{noSsr:!0}),x=Array.isArray(l)?l:[l];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Z,{centered:!u||u&&n.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:u&&n.length>4?"scrollable":"standard",value:c,onChange:(e,n)=>{d(n),a&&a(n)},children:null==n?void 0:n.map((e,n)=>(0,t.jsx)(s.Z,{label:e},"".concat(e,"-").concat(n)))}),a?l:null==x?void 0:x.map((e,n)=>n===c?e:null)]})}},33948:function(e,n,l){"use strict";var t=l(85893),i=l(67294),r=l(96986),o=l(33913),s=l(39574),a=l(15861);let c=(0,i.forwardRef)((e,n)=>{let{date:l,startDate:c,lastUpdated:d,stopAtZero:u,type:x,pause:v,staticTime:h,placeholder:m,loop:p,variant:j="inherit",...g}=e,[Z,f]=(0,i.useState)();(0,i.useEffect)(()=>{if(l){if(h){if(!isFinite(l))return;return f({...(0,s.getDuration)(new Date().getTime(),l)})}let e=new Date,n=e.getTime()-(null!=d?d:0),t=(0,o.Z)(l);f({...(0,s.getDuration)(null==e?void 0:e.getTime(),l+n*("countdown"===x?-1:1)),overtime:"countdown"===x&&t})}},[l,d]);let b=()=>{let{days:e,hours:n,minutes:l,seconds:t}=Z;60===(t+=1)&&(t=0,60===(l+=1)&&(l=0,24===(n+=1)&&(e+=1))),f({...Z,days:e,hours:n,minutes:l,seconds:t})},w=()=>{let{days:e,hours:n,minutes:l,seconds:t}=Z;if(0===e&&0===n&&0===l&&0===t){if(u)return;if(p)return f({...(0,s.getDuration)(new Date().getTime(),c)})}-1==(t-=1)&&(t=59,-1==(l-=1)&&(l=59,-1==(n-=1)&&(n=0,e-=1))),f({...Z,days:e,hours:n,minutes:l,seconds:t})};(0,r.Z)(()=>{if(!Z)return null;"countdown"!==x||(null==Z?void 0:Z.overtime)?b():w()},v||h?null:1e3);let N=e=>{let n=String(e);return(null==n?void 0:n.length)===1?"0".concat(e):e};return Z?((null==Z?void 0:Z.overtime)||v)&&m?(0,t.jsx)(a.Z,{...g,ref:n,children:m}):(0,t.jsxs)(a.Z,{...g,ref:n,variant:j,sx:{color:"".concat((null==Z?void 0:Z.overtime)&&!p?"#f91d1d":"")},component:"span",children:[(null==Z?void 0:Z.days)?N(null==Z?void 0:Z.days)+"d:":"",N(null==Z?void 0:Z.hours)+"h:",N(null==Z?void 0:Z.minutes)+"m",(null==Z?void 0:Z.days)?"":":",(null==Z?void 0:Z.days)?"":N(null==Z?void 0:Z.seconds)+"s"]}):null});n.Z=c},81131:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return O}});var t=l(85893),i=l(15861),r=l(67294),o=l(41422),s=l(82729),a=l(66242),c=l(44267),d=l(51233),u=l(67720),x=l(39574),v=l(51053),h=l(33948),m=l(21994),p=l(61599),j=l(86554),g=l(9798);function Z(){let e=(0,s._)(["\n  object-fit: contain;\n  width: 32px;\n"]);return Z=function(){return e},e}function f(){let e=(0,s._)(["\n  object-fit: contain;\n  margin-top: -20px;\n  filter: ();\n  opacity: ","\n"]);return f=function(){return e},e}let b=e=>{var n;let{meal:l,lab:r,totalMealSpeed:o,achievements:s}=e,a=(0,m.Qo)(11,l,o,s),c=(0,m.sV)(null==l?void 0:l.level,s),d=(11-(null==l?void 0:l.level))*c,u=(null==l?void 0:l.amount)>=c?"0":(0,m.Kn)(c-(null==l?void 0:l.amount),null==l?void 0:l.cookReq,o),v=(0,g.c9)(r.labBonuses,8),p=(0,g.pc)(null==r?void 0:r.jewels,16,v),j=(1+(p+(null==l?void 0:l.shinyMulti))/100)*(null==l?void 0:l.level)*(null==l?void 0:l.baseStat);return(0,t.jsxs)(t.Fragment,{children:[(null==l?void 0:l.level)>=11||c===d?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{sx:{textAlign:"center"},children:["Next Level in: ",(0,t.jsx)(h.Z,{date:new Date().getTime()+36e5*u,staticTime:!0})]}),(0,t.jsxs)(i.Z,{children:["(",(0,x.notateNumber)(null==l?void 0:l.amount,"Big")," / ",(0,x.notateNumber)(c,"Big"),")"]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{children:["Next Level in: ",(0,t.jsx)(h.Z,{date:new Date().getTime()+36e5*u,staticTime:!0})]}),(0,t.jsxs)(i.Z,{children:["Diamond plate in: ",(0,t.jsx)(h.Z,{date:new Date().getTime()+36e5*a,staticTime:!0})," "]}),(0,t.jsxs)(i.Z,{children:["(",(0,x.notateNumber)(null==l?void 0:l.amount,"Big")," / ",(0,x.notateNumber)(d,"Big"),")"]})]}),(0,t.jsx)(i.Z,{fontSize:15,fontWeight:"bold",children:(0,x.cleanUnderscore)(null==l?void 0:null===(n=l.effect)||void 0===n?void 0:n.replace("{",(0,x.kFormatter)(j)))})]})},w=p.Z.img(Z()),N=p.Z.img(f(),e=>{let{missing:n}=e;return n?.5:1});var y=e=>{var n,l;let{spices:o,kitchens:s,meals:p,totalMealSpeed:g,lastUpdated:Z,achievements:f,lab:y}=e,k=e=>null==e?void 0:e.reduce((e,n)=>{var l,t,i;let r=(null==n?void 0:n.status)===2;if(!r)return e;let{meal:o}=n;return{...e,[null==o?void 0:o.rawName]:{total:(null!==(i=null===(l=e[null==o?void 0:o.rawName])||void 0===l?void 0:l.total)&&void 0!==i?i:0)+(null==n?void 0:n.mealSpeed)/(null==n?void 0:null===(t=n.meal)||void 0===t?void 0:t.cookReq),...o}}},{}),C=(0,r.useMemo)(()=>k(s),[s]),B=e=>{if(!e)return 0;let n=e[e.length-1];return(null==n?void 0:n.index)<(null==p?void 0:p.length)?2*(null==n?void 0:n.cookReq):1e10},S=(e,n)=>Math.floor(2*e+n);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{sx:{width:"fit-content"},children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)(i.Z,{children:["Claims: ",null==o?void 0:o.numberOfClaims," / ",m.Cz]})})}),(0,t.jsx)(d.Z,{my:2,direction:"row",gap:2,flexWrap:"wrap",children:null==o?void 0:null===(n=o.available)||void 0===n?void 0:n.map((e,n)=>{var l;return e?(0,t.jsx)(a.Z,{elevation:4,children:(0,t.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,t.jsx)(v.Z,{title:null==e?void 0:e.name,children:(0,t.jsx)(w,{src:"".concat(x.prefix,"data/").concat(null==e?void 0:e.rawName,".png"),alt:""})}),(0,t.jsx)(v.Z,{title:parseInt(null==e?void 0:e.amount),children:(0,t.jsx)(i.Z,{children:(0,x.notateNumber)(parseInt(null==e?void 0:e.amount),"Big")})}),(0,t.jsxs)(i.Z,{sx:{color:"grey.400"},children:["(",(0,x.notateNumber)(parseInt(null!==(l=null==e?void 0:e.toClaim)&&void 0!==l?l:0),"Big"),")"]})]})},"".concat(null==e?void 0:e.rawName,"-").concat(n)):null})}),(0,t.jsx)(i.Z,{variant:"h4",textAlign:"center",mb:3,children:"Totals"}),(0,t.jsxs)(d.Z,{sx:{height:160},my:2,direction:"row",alignItems:"center",justifyContent:"center",gap:2,children:[null===(l=Object.entries(C||{}))||void 0===l?void 0:l.map((e,n)=>{let[l,i]=e,{total:r}=i;return(0,t.jsx)(a.Z,{children:(0,t.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,t.jsx)(v.Z,{placement:"top",title:(0,t.jsx)(b,{achievements:f,totalMealSpeed:g,meal:i,lab:y}),children:(0,t.jsx)(N,{src:"".concat(x.prefix,"data/").concat(l,".png"),alt:""})}),(0,t.jsxs)("div",{children:[(0,x.notateNumber)(r,"Big"),"/hr"]}),(0,t.jsx)(b,{achievements:f,totalMealSpeed:g,meal:i,lab:y})]})},"".concat(l,"-").concat(n,"-").concat(r))}),(0,t.jsx)(a.Z,{children:(0,t.jsx)(c.Z,{sx:{height:"100%"},children:(0,t.jsxs)(d.Z,{alignItems:"center",gap:2,justifyContent:"center",children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"etc/Kitchen.png"),alt:""}),(0,t.jsx)(i.Z,{children:"Total Speed"}),(0,t.jsxs)(i.Z,{children:[(0,x.notateNumber)(g,"Big"),"/hr"]})]})})})]}),(0,t.jsx)(d.Z,{direction:"row",sx:{mt:4},justifyContent:"center",gap:3,flexWrap:"wrap",children:null==s?void 0:s.map((e,n)=>{var l,r,o,s,k,C,T,M;if(!e)return null;let I=(null==e?void 0:e.status)>=3,F=B(null==e?void 0:e.possibleMeals),L=Math.round((null==e?void 0:e.currentProgress)/F*100),D=(F-(null==e?void 0:e.currentProgress))/e.fireSpeed,[_,W,E]=[0,1,2].map(e=>S(n,e));return(0,t.jsx)(a.Z,{sx:{width:{xs:350,sm:400}},children:(0,t.jsxs)(c.Z,{sx:{padding:4},children:[(0,t.jsxs)(d.Z,{direction:"row",justifyContent:"center",children:[(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(i.Z,{sx:{color:"success.light"},children:["Speed (",null==e?void 0:e.speedLv,")"]}),(0,t.jsxs)(i.Z,{children:[null!==(C=(0,x.notateNumber)(null==e?void 0:e.mealSpeed,"Big"))&&void 0!==C?C:0,"/hr"]}),(0,t.jsxs)(d.Z,{mt:2,alignItems:"center",children:[(0,t.jsx)(v.Z,{title:m.zp[_],children:(0,t.jsx)(w,{src:"".concat(x.prefix,"data/CookingSpice").concat(_,".png"),alt:""})}),(0,t.jsx)(i.Z,{children:(0,x.notateNumber)(null==e?void 0:e.speedCost,"Big")})]})]}),(0,t.jsx)(u.Z,{sx:{mx:2,backgroundColor:"white"},orientation:"vertical",flexItem:!0}),(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(i.Z,{sx:{color:"error.light"},children:["Fire (",null==e?void 0:e.fireLv,")"]}),(0,t.jsxs)(i.Z,{children:[null!==(T=(0,x.notateNumber)(null==e?void 0:e.fireSpeed,"Big"))&&void 0!==T?T:0,"/hr"]}),(0,t.jsxs)(d.Z,{mt:2,alignItems:"center",children:[(0,t.jsx)(v.Z,{title:m.zp[W],children:(0,t.jsx)(w,{src:"".concat(x.prefix,"data/CookingSpice").concat(W,".png"),alt:""})}),(0,t.jsx)(i.Z,{children:(0,x.notateNumber)(null==e?void 0:e.fireCost,"Big")})]})]}),(0,t.jsx)(u.Z,{sx:{mx:2,backgroundColor:"white"},orientation:"vertical",flexItem:!0}),(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(i.Z,{sx:{color:"info.light"},children:["Luck (",null==e?void 0:e.luckLv,")"]}),(0,t.jsxs)(i.Z,{children:[null!==(M=null==e?void 0:e.mealLuck.toFixed(2))&&void 0!==M?M:0,"x"]}),(0,t.jsxs)(d.Z,{mt:2,alignItems:"center",children:[(0,t.jsx)(v.Z,{title:E>=20?"Unknown":m.zp[E],children:(0,t.jsx)(w,{src:"".concat(x.prefix,"data/").concat(E>=20?"CookingSpiceNA":"CookingSpice".concat(E),".png"),alt:""})}),(0,t.jsx)(i.Z,{children:(0,x.notateNumber)(null==e?void 0:e.luckCost,"Big")})]})]})]}),I?(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(d.Z,{mt:4,mb:1,direction:"row",justifyContent:"center",alignItems:"center",gap:2,children:[(0,t.jsx)(i.Z,{variant:"body1",children:"Spices: "}),null==e?void 0:null===(l=e.spices)||void 0===l?void 0:l.map((e,n)=>-1===e?null:(0,t.jsx)(w,{src:"".concat(x.prefix,"data/CookingSpice").concat(e,".png"),alt:""},"".concat(e,"-").concat(n)))]}),(null==e?void 0:null===(r=e.possibleMeals)||void 0===r?void 0:r.length)>0?(0,t.jsx)(d.Z,{direction:"row",justifyContent:"center",flexWrap:"wrap",alignItems:"center",rowGap:1.5,children:null==e?void 0:null===(o=e.possibleMeals)||void 0===o?void 0:o.map((e,n)=>{var l;return(0,t.jsx)(N,{missing:(null==p?void 0:null===(l=p[null==e?void 0:e.index])||void 0===l?void 0:l.level)===0,src:"".concat(x.prefix,"data/").concat(null==e?void 0:e.rawName,".png"),alt:""},"possible-".concat(null==e?void 0:e.rawName,"-").concat(n))})}):null,(0,t.jsx)(v.Z,{title:"".concat(L,"%"),children:(0,t.jsx)(j.Z,{percent:L})}),(0,t.jsxs)(d.Z,{direction:"row",gap:3,mt:1,children:[(0,t.jsxs)(i.Z,{variant:"body1",component:"span",children:[(0,x.notateNumber)(null==e?void 0:e.currentProgress,"Big")," / ",(0,x.notateNumber)(F,"Big")]}),(0,t.jsx)(h.Z,{placeholder:(0,t.jsx)(i.Z,{sx:{color:"success.light"},children:"Ready"}),type:"countdown",date:new Date().getTime()+36e5*D,lastUpdated:Z})]})]}):(0,t.jsxs)(d.Z,{mt:2,justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(v.Z,{placement:"top",title:(0,t.jsx)(b,{achievements:f,totalMealSpeed:g,lab:y,meal:null==e?void 0:e.meal}),children:(0,t.jsx)(N,{src:"".concat(x.prefix,"data/").concat(null==e?void 0:null===(s=e.meal)||void 0===s?void 0:s.rawName,".png"),alt:""})}),(0,t.jsxs)("div",{children:[(0,x.notateNumber)((null==e?void 0:e.mealSpeed)/(null==e?void 0:null===(k=e.meal)||void 0===k?void 0:k.cookReq),2),"/hr"]})]})]})},"kitchen-".concat(n))})})]})},k=l(33454),C=l(96420),B=l(61903),S=l(87357),T=l(74721),M=l(93619),I=l(18972),F=l(64529);function L(){let e=(0,s._)(["\n  width: 82px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: -20px;\n\n  & img:nth-of-type(1) {\n    margin-top: -30px;\n  }\n\n  & img {\n    margin-left: -30px;\n  }\n"]);return L=function(){return e},e}function D(){let e=(0,s._)(["\n  & {\n    display: flex;\n    align-items: center;\n  }\n"]);return D=function(){return e},e}let _=[-1,0,11,30,40,50,60],W=e=>Math.ceil(36e5*e/864e5),E=e=>{let{level:n,baseStat:l,multiplier:r,effect:o,achievements:s}=e,a=(0,m.sV)(n+1,s);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{fontWeight:"bold",children:["Next level bonus:\xa0",(0,t.jsx)(i.Z,{component:"span",sx:{fontWeight:400},children:(0,x.cleanUnderscore)(null==o?void 0:o.replace("{",(0,x.kFormatter)((n+1)*l*r)))})]}),(0,t.jsx)(S.Z,{children:(0,t.jsxs)(i.Z,{fontWeight:"bold",children:["Next level req:\xa0",(0,t.jsx)(i.Z,{component:"span",sx:{fontWeight:400},children:(0,x.numberWithCommas)(parseInt(a))})]})})]})},A=p.Z.div(L()),R=(0,p.Z)(i.Z)(D());var z=e=>{var n,l;let{characters:o,meals:s,totalMealSpeed:u,achievements:p,artifacts:j,lab:Z}=e,[f,b]=r.useState(()=>[]),[w,N]=(0,r.useState)(),[y,S]=(0,r.useState)([]),[L,D]=(0,r.useState)(30),[z,P]=(0,r.useState)(u),[U,O]=(0,r.useState)(_[0]),K=(0,g.c9)(Z.labBonuses,8),q=(0,g.pc)(null==Z?void 0:Z.jewels,16,K),V=(null===(n=null===(l=Z.jewels)||void 0===l?void 0:l.slice(0,3))||void 0===n?void 0:n.every(e=>{let{active:n}=e;return n}))?2:1,X=(0,g.pc)(Z.jewels,0,K)*V,G=()=>{let e=null==o?void 0:o.filter(e=>(null==e?void 0:e.class)==="Blood_Berserker");return e.reduce((e,n)=>{var l;let{talents:t}=n,i=null==t?void 0:null===(l=t[3])||void 0===l?void 0:l.orderedTalents.find(e=>(null==e?void 0:e.name)==="OVERFLOWING_LADLE"),r=(null==i?void 0:i.level)>(null==i?void 0:i.maxLevel)?null==i?void 0:i.level:null==i?void 0:i.maxLevel,o=(0,x.growth)(null==i?void 0:i.funcX,r,null==i?void 0:i.x1,null==i?void 0:i.x2,!1);return o>e?o:e},0)},Q=(0,r.useMemo)(()=>G(),[o]),H=(e,n)=>null==e?void 0:e.map(e=>{if(!e)return null;let{amount:l,level:t,cookReq:i}=e,r=(0,m.sV)(t,p),o=l>=r?"0":(0,m.Kn)(r-l,i,z);n&&(o/=1+Q/100);let s=_.map(o=>{if(0===o||-1===o){let e=l>=r?"0":(0,m.Kn)(r-l,i,z);return{bpCost:r,bpLevel:o,timeToBp:n?e/(1+Q/100):e}}let s=(o-t)*r,a=(0,m.Qo)(o,e,z,p);return n&&(a/=1+Q/100),{bpCost:s,timeToBp:a,bpLevel:o}});return{...e,levelCost:r,timeTillNextLevel:o,breakpointTimes:s}}),Y=(0,r.useMemo)(()=>H(s),[s,z]);(0,r.useEffect)(()=>{let e=(0,F.YS)(j,"Causticolumn");e&&D(30+(null==e?void 0:e.bonus))},[j]),(0,r.useEffect)(()=>{let e=Y;_.forEach((n,l)=>{if(U===n){let t=[...Y];e=J(t,l,n)}}),f.includes("overflow")&&(e=H(e||s,Q)),f.includes("hide")&&(e=e.filter(e=>(null==e?void 0:e.level)<L)),f.includes("amethystRhinestone")&&0===X?P(4.5*u):P(u);let n=$(e);S(n),N(e)},[f,s,L,U,z]);let J=function(e,n){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=[...Y];return t.sort((e,t)=>{var i,r,o,s;if(0!==l){if(e.level>=l)return 1;if(t.level>=l)return -1}let a=null==e?void 0:null===(i=e.breakpointTimes)||void 0===i?void 0:null===(r=i[n])||void 0===r?void 0:r.timeToBp,c=null==t?void 0:null===(o=t.breakpointTimes)||void 0===o?void 0:null===(s=o[n])||void 0===s?void 0:s.timeToBp;return a-c}),t},$=e=>{let n=e.filter(e=>((null==e?void 0:e.stat)==="Mcook"||(null==e?void 0:e.stat)==="KitchenEff")&&(null==e?void 0:e.level)<L);return(n=n.map(e=>{let{level:n,baseStat:l,shinyMulti:t,timeTillNextLevel:i}=e,r=(1+(q+t)/100)*n*l,o=(1+(q+t)/100)*(n+1)*l;return{...e,currentLevelBonus:(0,x.notateNumber)(r),nextLevelBonus:(0,x.notateNumber)(o),bonusDiff:o-r,diff:(o-r)/i}})).sort((e,n)=>n.diff-e.diff),n};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(k.Z,{sx:{my:2,flexWrap:"wrap"},value:f,onChange:(e,n)=>{b(n)},children:[(0,t.jsx)(C.Z,{value:"minimized",children:"Minimized"}),(0,t.jsx)(C.Z,{value:"hide",children:"Hide capped"}),(0,t.jsx)(C.Z,{value:"overflow",children:(0,t.jsxs)(d.Z,{direction:"row",gap:1,children:[(0,t.jsx)(i.Z,{children:"Overflowing Ladle"}),(0,t.jsx)(v.Z,{title:"Blood Berserker Talent: Ladles gives ".concat((0,x.kFormatter)(Q,2),"% more afk time"),children:(0,t.jsx)(T.Z,{})})]})}),(0,t.jsx)(C.Z,{value:"amethystRhinestone",children:(0,t.jsxs)(d.Z,{direction:"row",gap:1,children:[(0,t.jsx)(i.Z,{children:"Amethyst Rhinestone"}),(0,t.jsx)(v.Z,{title:"Apply additional 4.5 multi bonus",children:(0,t.jsx)(T.Z,{})})]})})]}),(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:3,children:[(0,t.jsx)(B.Z,{sx:{width:150},label:"Sort by",select:!0,value:U,onChange:e=>{O(e.target.value)},children:null==_?void 0:_.map(e=>(0,t.jsx)(I.Z,{value:e,children:-1===e?"Order":0===e?"Time":"Time to ".concat(e)},e))}),null==_?void 0:_.map(e=>0===e||-1===e?null:U!==e||(null==w?void 0:w.some(n=>{let{level:l,amount:t}=n;return t>0&&l<e}))?null:(0,t.jsx)(i.Z,{sx:{color:"#ffa726"},children:"All meals are higher than level 30 !"},"breakpoint-max"+e))]}),(0,t.jsxs)(d.Z,{my:2,children:[(0,t.jsx)(i.Z,{my:1,variant:"h5",children:"Best meal speed contribution"}),(0,t.jsx)(d.Z,{gap:2,direction:"row",flexWrap:"wrap",children:y.map((e,n)=>{let{currentLevelBonus:l,nextLevelBonus:r,level:o,name:s,rawName:u,bonusDiff:m,timeTillNextLevel:p}=e;return(0,t.jsx)(a.Z,{sx:{width:340},children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[(0,t.jsxs)(A,{children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/").concat(u,".png"),alt:""}),o>0?(0,t.jsx)("img",{className:"plate",src:"".concat(x.prefix,"data/CookingPlate").concat(o-1,".png"),alt:""}):null]}),(0,t.jsxs)(d.Z,{gap:1,children:[(0,t.jsxs)(R,{children:[(0,x.cleanUnderscore)(s)," (Lv. ",o," ",(0,t.jsx)(M.Z,{fontSize:"small"})," ",o+1,")"]}),(0,t.jsxs)(R,{children:[l,"% ",(0,t.jsx)(M.Z,{fontSize:"small"})," ",r,"% (",(0,x.kFormatter)(m),")"]}),(0,t.jsxs)(i.Z,{component:"span",children:["Next level: ",36e5*p<9007199254740992?(0,t.jsx)(h.Z,{date:new Date().getTime()+36e5*p,staticTime:!0}):"".concat(W(p)," days")]}),(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/Ladle.png"),alt:"",width:32,height:32}),(0,t.jsx)(v.Z,{title:(0,x.numberWithCommas)(parseFloat(p).toFixed(2)),children:(0,t.jsx)("span",{children:(0,x.notateNumber)(Math.ceil(p),"Big")})})]})]})]})})},"".concat(s,"-").concat(n))})})]}),(0,t.jsx)(i.Z,{my:1,variant:"h5",children:"Meals"}),(0,t.jsx)(d.Z,{direction:"row",flexWrap:"wrap",gap:2,children:null==w?void 0:w.map((e,n)=>{if(!e)return null;let{name:l,amount:r,rawName:o,effect:s,level:u,baseStat:m,multiplier:j,shinyMulti:g,breakpointTimes:Z}=e,b=(1+(q+g)/100)*u*m;return(0,t.jsx)(a.Z,{sx:{width:300,opacity:0===u?.5:1},children:(0,t.jsxs)(c.Z,{children:[(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[(0,t.jsx)(v.Z,{title:(0,t.jsx)(E,{achievements:p,...e}),children:(0,t.jsxs)(A,{children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/").concat(o,".png"),alt:""}),u>0?(0,t.jsx)("img",{className:"plate",src:"".concat(x.prefix,"data/CookingPlate").concat(u-1,".png"),alt:""}):null]})}),(0,t.jsxs)(i.Z,{children:[(0,x.cleanUnderscore)(l)," (Lv. ",u,")"]})]}),(0,t.jsxs)(d.Z,{mt:2,gap:1,children:[(0,t.jsx)(i.Z,{sx:{color:j>1?"info.light":""},children:(0,x.cleanUnderscore)(null==s?void 0:s.replace("{",(0,x.kFormatter)(b)))}),f.includes("minimized")?null:null==Z?void 0:Z.map(e=>{let{bpLevel:n,bpCost:o,timeToBp:s}=e,a=36e5*s;return u>0&&(U===n||-1===U&&1===n)?(0,t.jsxs)(d.Z,{gap:1,flexWrap:"wrap",children:[r>=o||u>=L?(0,t.jsx)(i.Z,{color:"success.light",children:"MAXED"}):(0,t.jsxs)(i.Z,{sx:{color:r>=o?"success.light":u>0?"error.light":""},children:["Progress: ",(0,t.jsx)(v.Z,{title:parseFloat(r),children:(0,t.jsx)("span",{children:(0,x.notateNumber)(Math.floor(r),"Big")})})," / ",(0,t.jsx)(v.Z,{title:parseFloat(o),children:(0,t.jsx)("span",{children:(0,x.notateNumber)(Math.ceil(o),"Big")})})]}),(0,t.jsxs)(d.Z,{direction:"row",gap:1,flexWrap:"wrap",children:[(0,t.jsx)(i.Z,{children:"Next milestone: "}),a<9007199254740992?(0,t.jsx)(h.Z,{date:new Date().getTime()+36e5*s,staticTime:!0}):"".concat((0,x.notateNumber)(W(s),"Big")," days")]}),(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/Ladle.png"),alt:"",width:32,height:32}),(0,t.jsx)(v.Z,{title:(0,x.numberWithCommas)(parseFloat(s).toFixed(2)),children:(0,t.jsx)("span",{children:(0,x.notateNumber)(Math.ceil(s),"Big")})})]})]},l+n):null})]})]})},"".concat(l,"-").concat(n))})})]})},P=l(2962),U=l(33583),O=()=>{var e,n;let{state:l}=(0,r.useContext)(o.I),{cooking:s,achievements:a,sailing:c}=(null==l?void 0:l.account)||{},d=(0,r.useMemo)(()=>{var e;return null==s?void 0:null===(e=s.kitchens)||void 0===e?void 0:e.reduce((e,n)=>e+n.mealSpeed,0)},[s]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.PB,{title:"Idleon Toolbox | Cooking",description:"Keep track of your kitchens and meals progression"}),(0,t.jsx)(i.Z,{variant:"h2",textAlign:"center",mb:3,children:"Cooking"}),(0,t.jsxs)(U.Z,{tabs:["Kitchens","Meals"],children:[(0,t.jsx)(y,{...s,achievements:a,lastUpdated:null==l?void 0:l.lastUpdated,totalMealSpeed:d,lab:null==l?void 0:null===(e=l.account)||void 0===e?void 0:e.lab}),(0,t.jsx)(z,{characters:null==l?void 0:l.characters,...s,lab:null==l?void 0:null===(n=l.account)||void 0===n?void 0:n.lab,achievements:a,totalMealSpeed:d,artifacts:null==c?void 0:c.artifacts})]})]})}}},function(e){e.O(0,[1244,2471,9774,2888,179],function(){return e(e.s=82169)}),_N_E=e.O()}]);
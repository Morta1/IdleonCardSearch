(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7851],{82169:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-4/cooking",function(){return n(27798)}])},83014:function(e,l,n){"use strict";var t=n(85893),i=n(87357),r=n(81458),o=n(15861);n(67294),l.Z=e=>{let{percent:l,bgColor:n,label:a=!0,sx:s,boxSx:c={},pre:d}=e;return(0,t.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",...c},children:[d,(0,t.jsx)(i.Z,{sx:{width:"100%",mr:1},children:(0,t.jsx)(r.Z,{sx:{width:"100%",height:10,borderRadius:5,"& .MuiLinearProgress-bar":{backgroundColor:n||""},...s},variant:"determinate",value:l>100?100:l})}),a?(0,t.jsx)(i.Z,{children:(0,t.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(l),"%")})}):null]})}},68575:function(e,l,n){"use strict";var t=n(85893),i=n(67294),r=n(98396),o=n(11703),a=n(40044);l.Z=e=>{let{tabs:l,children:n,onTabChange:s}=e,[c,d]=(0,i.useState)(0),u=(0,r.Z)(e=>e.breakpoints.down("md"),{noSsr:!0}),x=Array.isArray(n)?n:[n];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Z,{centered:!u||u&&l.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:u&&l.length>4?"scrollable":"standard",value:c,onChange:(e,l)=>{d(l),s&&s(l)},children:null==l?void 0:l.map((e,l)=>(0,t.jsx)(a.Z,{label:e},"".concat(e,"-").concat(l)))}),s?n:null==x?void 0:x.map((e,l)=>l===c?e:null)]})}},9137:function(e,l,n){"use strict";var t=n(85893),i=n(67294),r=n(60970),o=n(33913),a=n(30925),s=n(15861);let c=(0,i.forwardRef)((e,l)=>{let{date:n,startDate:c,lastUpdated:d,stopAtZero:u,type:x,pause:v,staticTime:m,placeholder:h,loop:p,variant:j="inherit",...g}=e,[f,Z]=(0,i.useState)();(0,i.useEffect)(()=>{if(n){if(m){if(!isFinite(n))return;return Z({...(0,a.getDuration)(new Date().getTime(),n)})}let e=new Date,l=e.getTime()-(null!=d?d:0),t=(0,o.Z)(n);Z({...(0,a.getDuration)(null==e?void 0:e.getTime(),n+l*("countdown"===x?-1:1)),overtime:"countdown"===x&&t})}},[n,d]);let tickUp=()=>{let{days:e,hours:l,minutes:n,seconds:t}=f;60===(t+=1)&&(t=0,60===(n+=1)&&(n=0,24===(l+=1)&&(e+=1))),Z({...f,days:e,hours:l,minutes:n,seconds:t})},tickDown=()=>{let{days:e,hours:l,minutes:n,seconds:t}=f;if(0===e&&0===l&&0===n&&0===t){if(u)return;if(p)return Z({...(0,a.getDuration)(new Date().getTime(),c)})}-1==(t-=1)&&(t=59,-1==(n-=1)&&(n=59,-1==(l-=1)&&(l=0,e-=1))),Z({...f,days:e,hours:l,minutes:n,seconds:t})};(0,r.Z)(()=>{if(!f)return null;"countdown"!==x||(null==f?void 0:f.overtime)?tickUp():tickDown()},v||m?null:1e3);let wrapNumber=e=>{let l=String(e);return(null==l?void 0:l.length)===1?"0".concat(e):e};return f?((null==f?void 0:f.overtime)||v)&&h?(0,t.jsx)(s.Z,{...g,ref:l,children:h}):(0,t.jsxs)(s.Z,{...g,ref:l,variant:j,sx:{color:"".concat((null==f?void 0:f.overtime)&&!p?"#f91d1d":"")},component:"span",children:[(null==f?void 0:f.days)?wrapNumber(null==f?void 0:f.days)+"d:":"",wrapNumber(null==f?void 0:f.hours)+"h:",wrapNumber(null==f?void 0:f.minutes)+"m",(null==f?void 0:f.days)?"":":",(null==f?void 0:f.days)?"":wrapNumber(null==f?void 0:f.seconds)+"s"]}):null});l.Z=c},27798:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return world_4_cooking}});var t=n(85893),i=n(15861),r=n(67294),o=n(23513),a=n(82729),s=n(66242),c=n(44267),d=n(51233),u=n(67720),x=n(30925),v=n(5072),m=n(9137),h=n(89260),p=n(61599),j=n(83014),g=n(15893);function _templateObject(){let e=(0,a._)(["\n  object-fit: contain;\n  width: 32px;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,a._)(["\n  object-fit: contain;\n  margin-top: -20px;\n  filter: ();\n  opacity: ","\n"]);return _templateObject1=function(){return e},e}let MealTooltip=e=>{var l;let{meal:n,lab:r,totalMealSpeed:o,achievements:a,equinoxUpgrades:s}=e,c=(0,h.Qo)(11,n,o,a,s),d=(0,h.sV)(null==n?void 0:n.level,a,s),u=(11-(null==n?void 0:n.level))*d,v=(null==n?void 0:n.amount)>=d?"0":(0,h.Kn)(d-(null==n?void 0:n.amount),null==n?void 0:n.cookReq,o),p=(0,g.c9)(r.labBonuses,8),j=(0,g.pc)(null==r?void 0:r.jewels,16,p),f=(1+(j+(null==n?void 0:n.shinyMulti))/100)*(null==n?void 0:n.level)*(null==n?void 0:n.baseStat);return(0,t.jsxs)(t.Fragment,{children:[(null==n?void 0:n.level)>=11||d===u?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{sx:{textAlign:"center"},children:["Next Level in: ",(0,t.jsx)(m.Z,{date:new Date().getTime()+36e5*v,staticTime:!0})]}),(0,t.jsxs)(i.Z,{children:["(",(0,x.notateNumber)(null==n?void 0:n.amount,"Big")," / ",(0,x.notateNumber)(d,"Big"),")"]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{children:["Next Level in: ",(0,t.jsx)(m.Z,{date:new Date().getTime()+36e5*v,staticTime:!0})]}),(0,t.jsxs)(i.Z,{children:["Diamond plate in: ",(0,t.jsx)(m.Z,{date:new Date().getTime()+36e5*c,staticTime:!0})," "]}),(0,t.jsxs)(i.Z,{children:["(",(0,x.notateNumber)(null==n?void 0:n.amount,"Big")," / ",(0,x.notateNumber)(u,"Big"),")"]})]}),(0,t.jsx)(i.Z,{fontSize:15,fontWeight:"bold",children:(0,x.cleanUnderscore)(null==n?void 0:null===(l=n.effect)||void 0===l?void 0:l.replace("{",(0,x.kFormatter)(f)))})]})},f=p.Z.img(_templateObject()),Z=p.Z.img(_templateObject1(),e=>{let{missing:l}=e;return l?.5:1});var World4_Kitchens=e=>{var l,n;let{spices:o,kitchens:a,meals:p,totalMealSpeed:g,lastUpdated:b,achievements:w,lab:M,equinoxUpgrades:N}=e,calcTotals=e=>null==e?void 0:e.reduce((e,l)=>{var n,t,i;let r=(null==l?void 0:l.status)===2;if(!r)return e;let{meal:o}=l;return{...e,[null==o?void 0:o.rawName]:{total:(null!==(i=null===(n=e[null==o?void 0:o.rawName])||void 0===n?void 0:n.total)&&void 0!==i?i:0)+(null==l?void 0:l.mealSpeed)/(null==l?void 0:null===(t=l.meal)||void 0===t?void 0:t.cookReq),...o}}},{}),y=(0,r.useMemo)(()=>calcTotals(a),[a]),getRecipeTime=e=>{if(!e)return 0;let l=e[e.length-1];return(null==l?void 0:l.index)<(null==p?void 0:p.length)?2*(null==l?void 0:l.cookReq):1e10},getSpiceForUpgrade=(e,l)=>Math.floor(2*e+l);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{sx:{width:"fit-content"},children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)(i.Z,{children:["Claims: ",null==o?void 0:o.numberOfClaims," / ",h.Cz]})})}),(0,t.jsx)(d.Z,{my:2,direction:"row",gap:2,flexWrap:"wrap",children:null==o?void 0:null===(l=o.available)||void 0===l?void 0:l.map((e,l)=>{var n;return e?(0,t.jsx)(s.Z,{elevation:4,children:(0,t.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,t.jsx)(v.Z,{title:null==e?void 0:e.name,children:(0,t.jsx)(f,{src:"".concat(x.prefix,"data/").concat(null==e?void 0:e.rawName,".png"),alt:""})}),(0,t.jsx)(v.Z,{title:parseInt(null==e?void 0:e.amount),children:(0,t.jsx)(i.Z,{children:(0,x.notateNumber)(parseInt(null==e?void 0:e.amount),"Big")})}),(0,t.jsxs)(i.Z,{sx:{color:"grey.400"},children:["(",(0,x.notateNumber)(parseInt(null!==(n=null==e?void 0:e.toClaim)&&void 0!==n?n:0),"Big"),")"]})]})},"".concat(null==e?void 0:e.rawName,"-").concat(l)):null})}),(0,t.jsx)(i.Z,{variant:"h4",textAlign:"center",mb:3,children:"Totals"}),(0,t.jsxs)(d.Z,{sx:{height:160},my:2,direction:"row",alignItems:"center",justifyContent:"center",gap:2,children:[null===(n=Object.entries(y||{}))||void 0===n?void 0:n.map((e,l)=>{let[n,i]=e,{total:r}=i;return(0,t.jsx)(s.Z,{children:(0,t.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,t.jsx)(v.Z,{placement:"top",title:(0,t.jsx)(MealTooltip,{achievements:w,totalMealSpeed:g,meal:i,lab:M,equinoxUpgrades:N}),children:(0,t.jsx)(Z,{src:"".concat(x.prefix,"data/").concat(n,".png"),alt:""})}),(0,t.jsxs)("div",{children:[(0,x.notateNumber)(r,"Big"),"/hr"]}),(0,t.jsx)(MealTooltip,{achievements:w,totalMealSpeed:g,meal:i,lab:M,equinoxUpgrades:N})]})},"".concat(n,"-").concat(l,"-").concat(r))}),(0,t.jsx)(s.Z,{children:(0,t.jsx)(c.Z,{sx:{height:"100%"},children:(0,t.jsxs)(d.Z,{alignItems:"center",gap:2,justifyContent:"center",children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"etc/Kitchen.png"),alt:""}),(0,t.jsx)(i.Z,{children:"Total Speed"}),(0,t.jsxs)(i.Z,{children:[(0,x.notateNumber)(g,"Big"),"/hr"]})]})})})]}),(0,t.jsx)(d.Z,{direction:"row",sx:{mt:4},justifyContent:"center",gap:3,flexWrap:"wrap",children:null==a?void 0:a.map((e,l)=>{var n,r,o,a,y,k,S,C;if(!e)return null;let T=(null==e?void 0:e.status)>=3,_=getRecipeTime(null==e?void 0:e.possibleMeals),B=Math.round((null==e?void 0:e.currentProgress)/_*100),I=(_-(null==e?void 0:e.currentProgress))/e.fireSpeed,[L,F,D]=[0,1,2].map(e=>getSpiceForUpgrade(l,e));return(0,t.jsx)(s.Z,{sx:{width:{xs:350,sm:400}},children:(0,t.jsxs)(c.Z,{sx:{padding:4},children:[(0,t.jsxs)(d.Z,{direction:"row",justifyContent:"center",children:[(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(i.Z,{sx:{color:"success.light"},children:["Speed (",null==e?void 0:e.speedLv,")"]}),(0,t.jsxs)(i.Z,{children:[null!==(k=(0,x.notateNumber)(null==e?void 0:e.mealSpeed,"Big"))&&void 0!==k?k:0,"/hr"]}),(0,t.jsxs)(d.Z,{mt:2,alignItems:"center",children:[(0,t.jsx)(v.Z,{title:h.zp[L],children:(0,t.jsx)(f,{src:"".concat(x.prefix,"data/CookingSpice").concat(L,".png"),alt:""})}),(0,t.jsx)(i.Z,{children:(0,x.notateNumber)(null==e?void 0:e.speedCost,"Big")})]})]}),(0,t.jsx)(u.Z,{sx:{mx:2,backgroundColor:"white"},orientation:"vertical",flexItem:!0}),(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(i.Z,{sx:{color:"error.light"},children:["Fire (",null==e?void 0:e.fireLv,")"]}),(0,t.jsxs)(i.Z,{children:[null!==(S=(0,x.notateNumber)(null==e?void 0:e.fireSpeed,"Big"))&&void 0!==S?S:0,"/hr"]}),(0,t.jsxs)(d.Z,{mt:2,alignItems:"center",children:[(0,t.jsx)(v.Z,{title:h.zp[F],children:(0,t.jsx)(f,{src:"".concat(x.prefix,"data/CookingSpice").concat(F,".png"),alt:""})}),(0,t.jsx)(i.Z,{children:(0,x.notateNumber)(null==e?void 0:e.fireCost,"Big")})]})]}),(0,t.jsx)(u.Z,{sx:{mx:2,backgroundColor:"white"},orientation:"vertical",flexItem:!0}),(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(i.Z,{sx:{color:"info.light"},children:["Luck (",null==e?void 0:e.luckLv,")"]}),(0,t.jsxs)(i.Z,{children:[null!==(C=null==e?void 0:e.mealLuck.toFixed(2))&&void 0!==C?C:0,"x"]}),(0,t.jsxs)(d.Z,{mt:2,alignItems:"center",children:[(0,t.jsx)(v.Z,{title:D>=20?"Unknown":h.zp[D],children:(0,t.jsx)(f,{src:"".concat(x.prefix,"data/").concat(D>=20?"CookingSpiceNA":"CookingSpice".concat(D),".png"),alt:""})}),(0,t.jsx)(i.Z,{children:(0,x.notateNumber)(null==e?void 0:e.luckCost,"Big")})]})]})]}),T?(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(d.Z,{mt:4,mb:1,direction:"row",justifyContent:"center",alignItems:"center",gap:2,children:[(0,t.jsx)(i.Z,{variant:"body1",children:"Spices: "}),null==e?void 0:null===(n=e.spices)||void 0===n?void 0:n.map((e,l)=>-1===e?null:(0,t.jsx)(f,{src:"".concat(x.prefix,"data/CookingSpice").concat(e,".png"),alt:""},"".concat(e,"-").concat(l)))]}),(null==e?void 0:null===(r=e.possibleMeals)||void 0===r?void 0:r.length)>0?(0,t.jsx)(d.Z,{direction:"row",justifyContent:"center",flexWrap:"wrap",alignItems:"center",rowGap:1.5,children:null==e?void 0:null===(o=e.possibleMeals)||void 0===o?void 0:o.map((e,l)=>{var n;return(0,t.jsx)(Z,{missing:(null==p?void 0:null===(n=p[null==e?void 0:e.index])||void 0===n?void 0:n.level)===0,src:"".concat(x.prefix,"data/").concat(null==e?void 0:e.rawName,".png"),alt:""},"possible-".concat(null==e?void 0:e.rawName,"-").concat(l))})}):null,(0,t.jsx)(v.Z,{title:"".concat(B,"%"),children:(0,t.jsx)(j.Z,{percent:B})}),(0,t.jsxs)(d.Z,{direction:"row",gap:3,mt:1,children:[(0,t.jsxs)(i.Z,{variant:"body1",component:"span",children:[(0,x.notateNumber)(null==e?void 0:e.currentProgress,"Big")," / ",(0,x.notateNumber)(_,"Big")]}),(0,t.jsx)(m.Z,{placeholder:(0,t.jsx)(i.Z,{sx:{color:"success.light"},children:"Ready"}),type:"countdown",date:new Date().getTime()+36e5*I,lastUpdated:b})]})]}):(0,t.jsxs)(d.Z,{mt:2,justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(v.Z,{placement:"top",title:(0,t.jsx)(MealTooltip,{achievements:w,totalMealSpeed:g,lab:M,meal:null==e?void 0:e.meal,equinoxUpgrades:N}),children:(0,t.jsx)(Z,{src:"".concat(x.prefix,"data/").concat(null==e?void 0:null===(a=e.meal)||void 0===a?void 0:a.rawName,".png"),alt:""})}),(0,t.jsxs)("div",{children:[(0,x.notateNumber)((null==e?void 0:e.mealSpeed)/(null==e?void 0:null===(y=e.meal)||void 0===y?void 0:y.cookReq),2),"/hr"]})]})]})},"kitchen-".concat(l))})})]})},b=n(33454),w=n(96420),M=n(50135),N=n(87357),y=n(74721),k=n(93619),S=n(18972),C=n(16727);function Meals_templateObject(){let e=(0,a._)(["\n  width: 82px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: -20px;\n\n  & img:nth-of-type(1) {\n    margin-top: -30px;\n  }\n\n  & img {\n    margin-left: -30px;\n  }\n"]);return Meals_templateObject=function(){return e},e}function Meals_templateObject1(){let e=(0,a._)(["\n  & {\n    display: flex;\n    align-items: center;\n  }\n"]);return Meals_templateObject1=function(){return e},e}let T=[-1,0,11,30,40,50,60],getTimeAsDays=e=>Math.ceil(36e5*e/864e5),Meals_MealTooltip=e=>{let{level:l,baseStat:n,multiplier:r,effect:o,achievements:a,equinoxUpgrades:s}=e,c=(0,h.sV)(l+1,a,s);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{fontWeight:"bold",children:["Next Level Bonus:\xa0",(0,t.jsx)(i.Z,{component:"span",sx:{fontWeight:400},children:(0,x.cleanUnderscore)(null==o?void 0:o.replace("{",(0,x.kFormatter)((l+1)*n*r)))})]}),(0,t.jsx)(N.Z,{children:(0,t.jsxs)(i.Z,{fontWeight:"bold",children:["Next Level Req:\xa0",(0,t.jsx)(i.Z,{component:"span",sx:{fontWeight:400},children:(0,x.numberWithCommas)(parseInt(c))})]})})]})},_=p.Z.div(Meals_templateObject()),B=(0,p.Z)(i.Z)(Meals_templateObject1());var World4_Meals=e=>{var l,n,o;let{characters:a,meals:u,totalMealSpeed:p,achievements:j,artifacts:f,lab:Z,equinoxUpgrades:N}=e,[I,L]=r.useState(()=>[]),[F,D]=(0,r.useState)(),[O,W]=(0,r.useState)([]),[U,R]=(0,r.useState)(30),[q,A]=(0,r.useState)(p),[E,P]=(0,r.useState)(T[0]),[z,K]=(0,r.useState)(null===(l=N.find(e=>{let{name:l}=e;return"Food_Lust"===l}))||void 0===l?void 0:l.bonus),[V,H]=(0,r.useState)(N),X=(0,g.c9)(Z.labBonuses,8),G=(0,g.pc)(null==Z?void 0:Z.jewels,16,X),Q=(null===(o=Z.jewels)||void 0===o?void 0:null===(n=o.slice(0,3))||void 0===n?void 0:n.every(e=>{let{active:l}=e;return l}))?2:1,Y=(0,g.pc)(Z.jewels,0,X)*Q,getHighestOverflowingLadle=()=>{let e=null==a?void 0:a.filter(e=>(null==e?void 0:e.class)==="Blood_Berserker");return e.reduce((e,l)=>{var n;let{talents:t}=l,i=null==t?void 0:null===(n=t[3])||void 0===n?void 0:n.orderedTalents.find(e=>(null==e?void 0:e.name)==="OVERFLOWING_LADLE"),r=(null==i?void 0:i.level)>(null==i?void 0:i.maxLevel)?null==i?void 0:i.level:null==i?void 0:i.maxLevel,o=(0,x.growth)(null==i?void 0:i.funcX,r,null==i?void 0:i.x1,null==i?void 0:i.x2,!1);return o>e?o:e},0)},J=(0,r.useMemo)(()=>getHighestOverflowingLadle(),[a]),calcMeals=(e,l)=>null==e?void 0:e.map(e=>{if(!e)return null;let{amount:n,level:t,cookReq:i}=e,r=(0,h.sV)(t,j,V),o=n>=r?"0":(0,h.Kn)(r-n,i,q);l&&(o/=1+J/100);let a=T.map(o=>{if(0===o||-1===o){let e=n>=r?"0":(0,h.Kn)(r-n,i,q);return{bpCost:r,bpLevel:o,timeToBp:l?e/(1+J/100):e}}let a=(o-t)*r,s=(0,h.Qo)(o,e,q,j,V);return l&&(s/=1+J/100),{bpCost:a,timeToBp:s,bpLevel:o}});return{...e,levelCost:r,timeTillNextLevel:o,breakpointTimes:a}}),$=(0,r.useMemo)(()=>calcMeals(u),[u,q,V]);(0,r.useEffect)(()=>{let e=null==N?void 0:N.map(e=>(null==e?void 0:e.name)==="Food_Lust"?{...e,bonus:parseInt(z)}:e);H(e)},[z]),(0,r.useEffect)(()=>{let e=(0,C.YS)(f,"Causticolumn");e&&R(30+(null==e?void 0:e.bonus))},[f]),(0,r.useEffect)(()=>{let e=$;T.forEach((l,n)=>{if(E===l){let t=[...$];e=sortMealsBy(t,n,l)}}),I.includes("overflow")&&(e=calcMeals(e||u,J)),I.includes("hide")&&(e=e.filter(e=>(null==e?void 0:e.level)<U)),I.includes("amethystRhinestone")&&0===Y?A(4.5*p):A(p);let l=getBestMealsSpeedContribute(e);W(l),D(e)},[I,u,U,E,q,V]);let sortMealsBy=function(e,l){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=[...$];return t.sort((e,t)=>{var i,r,o,a;if(0!==n){if(e.level>=n)return 1;if(t.level>=n)return -1}let s=null==e?void 0:null===(r=e.breakpointTimes)||void 0===r?void 0:null===(i=r[l])||void 0===i?void 0:i.timeToBp,c=null==t?void 0:null===(a=t.breakpointTimes)||void 0===a?void 0:null===(o=a[l])||void 0===o?void 0:o.timeToBp;return s-c}),t},getBestMealsSpeedContribute=e=>{let l=e.filter(e=>((null==e?void 0:e.stat)==="Mcook"||(null==e?void 0:e.stat)==="KitchenEff")&&(null==e?void 0:e.level)<U);return(l=l.map(e=>{let{level:l,baseStat:n,shinyMulti:t,timeTillNextLevel:i}=e,r=(1+(G+t)/100)*l*n,o=(1+(G+t)/100)*(l+1)*n;return{...e,currentLevelBonus:(0,x.notateNumber)(r,"MultiplierInfo"),nextLevelBonus:(0,x.notateNumber)(o,"MultiplierInfo"),bonusDiff:o-r,diff:(o-r)/i}})).sort((e,l)=>l.diff-e.diff),l};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.Z,{sx:{my:2,flexWrap:"wrap"},value:I,onChange:(e,l)=>{L(l)},children:[(0,t.jsx)(w.Z,{value:"minimized",children:"Minimized"}),(0,t.jsx)(w.Z,{value:"hide",children:"Hide Capped"}),(0,t.jsx)(w.Z,{value:"overflow",children:(0,t.jsxs)(d.Z,{direction:"row",gap:1,children:[(0,t.jsx)(i.Z,{children:"Overflowing Ladle"}),(0,t.jsx)(v.Z,{title:"Blood Berserker Talent: Ladles gives ".concat((0,x.kFormatter)(J,2),"% more afk time"),children:(0,t.jsx)(y.Z,{})})]})}),(0,t.jsx)(w.Z,{value:"amethystRhinestone",children:(0,t.jsxs)(d.Z,{direction:"row",gap:1,children:[(0,t.jsx)(i.Z,{children:"Amethyst Rhinestone"}),(0,t.jsx)(v.Z,{title:"Apply additional 4.5 multi bonus",children:(0,t.jsx)(y.Z,{})})]})})]}),(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:3,children:[(0,t.jsx)(M.Z,{sx:{width:150},label:"Sort by",select:!0,value:E,onChange:e=>{P(e.target.value)},children:null==T?void 0:T.map(e=>(0,t.jsx)(S.Z,{value:e,children:-1===e?"Order":0===e?"Time":"Time to ".concat(e)},e))}),null==T?void 0:T.map(e=>0===e||-1===e?null:E!==e||(null==F?void 0:F.some(l=>{let{level:n,amount:t}=l;return t>0&&n<e}))?null:(0,t.jsxs)(i.Z,{sx:{color:"#ffa726"},children:["All meals are higher than level ",e,"!"]},"breakpoint-max"+e)),(0,t.jsx)(M.Z,{label:"Food lust bosses",type:"number",value:z,inputProps:{min:0,max:14},sx:{width:130},onChange:e=>{let{target:l}=e;return K(l.value)}})]}),(0,t.jsxs)(d.Z,{my:2,children:[(0,t.jsx)(i.Z,{my:1,variant:"h5",children:"Best Meal Speed Contribution"}),(0,t.jsx)(d.Z,{gap:2,direction:"row",flexWrap:"wrap",children:O.map((e,l)=>{let{currentLevelBonus:n,nextLevelBonus:r,level:o,name:a,rawName:u,bonusDiff:h,timeTillNextLevel:p}=e;return(0,t.jsx)(s.Z,{sx:{width:340},children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[(0,t.jsxs)(_,{children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/").concat(u,".png"),alt:""}),o>0?(0,t.jsx)("img",{className:"plate",src:"".concat(x.prefix,"data/CookingPlate").concat(o-1,".png"),alt:""}):null]}),(0,t.jsxs)(d.Z,{gap:1,children:[(0,t.jsxs)(B,{children:[(0,x.cleanUnderscore)(a)," (Lv. ",o," ",(0,t.jsx)(k.Z,{fontSize:"small"})," ",o+1,")"]}),(0,t.jsxs)(B,{children:[n,"% ",(0,t.jsx)(k.Z,{fontSize:"small"})," ",r,"% (",(0,x.notateNumber)(h,"MultiplierInfo"),")"]}),(0,t.jsxs)(i.Z,{component:"span",children:["Next Level: ",36e5*p<9007199254740992?(0,t.jsx)(m.Z,{date:new Date().getTime()+36e5*p,staticTime:!0}):"".concat(getTimeAsDays(p)," days")]}),(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/Ladle.png"),alt:"",width:32,height:32}),(0,t.jsx)(v.Z,{title:(0,x.numberWithCommas)(parseFloat(p).toFixed(2)),children:(0,t.jsx)("span",{children:(0,x.notateNumber)(Math.ceil(p),"Big")})})]})]})]})})},"".concat(a,"-").concat(l))})})]}),(0,t.jsx)(i.Z,{my:1,variant:"h5",children:"Meals"}),(0,t.jsx)(d.Z,{direction:"row",flexWrap:"wrap",gap:2,children:null==F?void 0:F.map((e,l)=>{if(!e)return null;let{name:n,amount:r,rawName:o,effect:a,level:u,baseStat:h,multiplier:p,shinyMulti:g,breakpointTimes:f}=e,Z=(1+(G+g)/100)*u*h;return(0,t.jsx)(s.Z,{sx:{width:300,opacity:0===u?.5:1},children:(0,t.jsxs)(c.Z,{children:[(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[(0,t.jsx)(v.Z,{title:(0,t.jsx)(Meals_MealTooltip,{achievements:j,equinoxUpgrades:V,...e}),children:(0,t.jsxs)(_,{children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/").concat(o,".png"),alt:""}),u>0?(0,t.jsx)("img",{className:"plate",src:"".concat(x.prefix,"data/CookingPlate").concat(u-1,".png"),alt:""}):null]})}),(0,t.jsxs)(i.Z,{children:[(0,x.cleanUnderscore)(n)," (Lv. ",u,")"]})]}),(0,t.jsxs)(d.Z,{mt:2,gap:1,children:[(0,t.jsx)(i.Z,{sx:{color:p>1?"info.light":""},children:(0,x.cleanUnderscore)(null==a?void 0:a.replace("{",(0,x.notateNumber)(Z,"MultiplierInfo")))}),I.includes("minimized")?null:null==f?void 0:f.map(e=>{let{bpLevel:l,bpCost:o,timeToBp:a}=e,s=36e5*a;return u>0&&(E===l||-1===E&&1===l)?(0,t.jsxs)(d.Z,{gap:1,flexWrap:"wrap",children:[u>=U?(0,t.jsx)(i.Z,{color:"success.light",children:"Maxed"}):(0,t.jsxs)(i.Z,{sx:{color:r>=o?"success.light":u>0?"error.light":""},children:["Progress: ",(0,t.jsx)(v.Z,{title:parseFloat(r),children:(0,t.jsx)("span",{children:(0,x.notateNumber)(Math.floor(r),"Big")})})," / ",(0,t.jsx)(v.Z,{title:parseFloat(o),children:(0,t.jsx)("span",{children:(0,x.notateNumber)(Math.ceil(o),"Big")})})]}),(0,t.jsxs)(d.Z,{direction:"row",gap:1,flexWrap:"wrap",children:[(0,t.jsx)(i.Z,{children:"Next Milestone: "}),s<9007199254740992?(0,t.jsx)(m.Z,{date:new Date().getTime()+36e5*a,staticTime:!0}):"".concat((0,x.notateNumber)(getTimeAsDays(a),"Big")," days")]}),(0,t.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)("img",{src:"".concat(x.prefix,"data/Ladle.png"),alt:"",width:32,height:32}),(0,t.jsx)(v.Z,{title:(0,x.numberWithCommas)(parseFloat(a).toFixed(2)),children:(0,t.jsx)("span",{children:(0,x.notateNumber)(Math.ceil(a),"Big")})})]})]},n+l):null})]})]})},"".concat(n,"-").concat(l))})})]})},I=n(2962),L=n(68575),world_4_cooking=()=>{var e,l,n,a,s,c;let{state:d}=(0,r.useContext)(o.I),{cooking:u,achievements:x,sailing:v}=(null==d?void 0:d.account)||{},m=(0,r.useMemo)(()=>{var e;return null==u?void 0:null===(e=u.kitchens)||void 0===e?void 0:e.reduce((e,l)=>e+(3===l.status?0:l.mealSpeed),0)},[u]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.PB,{title:"Idleon Toolbox | Cooking",description:"Keep track of your kitchens and meals progression"}),(0,t.jsx)(i.Z,{variant:"h2",textAlign:"center",mb:3,children:"Cooking"}),(0,t.jsxs)(L.Z,{tabs:["Kitchens","Meals"],children:[(0,t.jsx)(World4_Kitchens,{...u,achievements:x,lastUpdated:null==d?void 0:d.lastUpdated,totalMealSpeed:m,lab:null==d?void 0:null===(e=d.account)||void 0===e?void 0:e.lab,equinoxUpgrades:null==d?void 0:null===(n=d.account)||void 0===n?void 0:null===(l=n.equinox)||void 0===l?void 0:l.upgrades}),(0,t.jsx)(World4_Meals,{characters:null==d?void 0:d.characters,...u,lab:null==d?void 0:null===(a=d.account)||void 0===a?void 0:a.lab,achievements:x,totalMealSpeed:m,artifacts:null==v?void 0:v.artifacts,equinoxUpgrades:null==d?void 0:null===(c=d.account)||void 0===c?void 0:null===(s=c.equinox)||void 0===s?void 0:s.upgrades})]})]})}}},function(e){e.O(0,[8972,7896,8054,9774,2888,179],function(){return e(e.s=82169)}),_N_E=e.O()}]);
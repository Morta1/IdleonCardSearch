(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5632],{30622:function(t,n,e){"use strict";var r=e(64836);n.Z=void 0;var i=r(e(64938)),l=e(85893),a=(0,i.default)((0,l.jsx)("path",{d:"M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"}),"CompareArrows");n.Z=a},74721:function(t,n,e){"use strict";var r=e(64836);n.Z=void 0;var i=r(e(64938)),l=e(85893),a=(0,i.default)((0,l.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");n.Z=a},33913:function(t,n,e){"use strict";e.d(n,{Z:function(){return isPast}});var r=e(19013),i=e(13882);function isPast(t){return(0,i.Z)(1,arguments),(0,r.Z)(t).getTime()<Date.now()}},505:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-5/sailing",function(){return e(6254)}])},16372:function(t,n,e){"use strict";var r=e(85893),i=e(51233),l=e(40929),a=e(61436),s=e(30925),c=e(30622);n.Z=t=>{let{rawName:n,date:e,lootItemCost:o,moneyValue:d}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{direction:"row",alignItems:"center",justifyContent:"center",gap:1,children:(0,a.Z)(new Date(e))?(0,l.Z)(new Date(e),"dd/MM/yyyy HH:mm:ss"):null}),(0,r.jsxs)(i.Z,{direction:"row",alignItems:"center",gap:1,justifyContent:"center",children:[(0,r.jsxs)(i.Z,{direction:"row",gap:1,children:[(0,r.jsx)("img",{src:"".concat(s.prefix,"data/").concat(n,".png"),alt:""}),(0,s.notateNumber)(o)]}),(0,r.jsx)(c.Z,{}),(0,r.jsxs)(i.Z,{direction:"row",gap:1,children:[(0,r.jsx)("img",{src:"".concat(s.prefix,"data/SailT0.png"),alt:""}),(0,s.notateNumber)(d)]})]})]})}},68575:function(t,n,e){"use strict";var r=e(85893),i=e(67294),l=e(98396),a=e(11703),s=e(40044);n.Z=t=>{let{tabs:n,children:e,onTabChange:c}=t,[o,d]=(0,i.useState)(0),u=(0,l.Z)(t=>t.breakpoints.down("md"),{noSsr:!0}),x=Array.isArray(e)?e:[e];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{centered:!u||u&&n.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:u&&n.length>4?"scrollable":"standard",value:o,onChange:(t,n)=>{d(n),c&&c(n)},children:null==n?void 0:n.map((t,n)=>(0,r.jsx)(s.Z,{label:t},"".concat(t,"-").concat(n)))}),c?e:null==x?void 0:x.map((t,n)=>n===o?t:null)]})}},9137:function(t,n,e){"use strict";var r=e(85893),i=e(67294),l=e(60970),a=e(33913),s=e(30925),c=e(15861);let o=(0,i.forwardRef)((t,n)=>{let{date:e,startDate:o,lastUpdated:d,stopAtZero:u,type:x,pause:h,staticTime:p,placeholder:j,loop:g,variant:v="inherit",...m}=t,[f,Z]=(0,i.useState)();(0,i.useEffect)(()=>{if(e){if(p){if(!isFinite(e))return;return Z({...(0,s.getDuration)(new Date().getTime(),e)})}let t=new Date,n=t.getTime()-(null!=d?d:0),r=(0,a.Z)(e);Z({...(0,s.getDuration)(null==t?void 0:t.getTime(),e+n*("countdown"===x?-1:1)),overtime:"countdown"===x&&r})}},[e,d]);let tickUp=()=>{let{days:t,hours:n,minutes:e,seconds:r}=f;60===(r+=1)&&(r=0,60===(e+=1)&&(e=0,24===(n+=1)&&(t+=1))),Z({...f,days:t,hours:n,minutes:e,seconds:r})},tickDown=()=>{let{days:t,hours:n,minutes:e,seconds:r}=f;if(0===t&&0===n&&0===e&&0===r){if(u)return;if(g)return Z({...(0,s.getDuration)(new Date().getTime(),o)})}-1==(r-=1)&&(r=59,-1==(e-=1)&&(e=59,-1==(n-=1)&&(n=0,t-=1))),Z({...f,days:t,hours:n,minutes:e,seconds:r})};(0,l.Z)(()=>{if(!f)return null;"countdown"!==x||(null==f?void 0:f.overtime)?tickUp():tickDown()},h||p?null:1e3);let wrapNumber=t=>{let n=String(t);return(null==n?void 0:n.length)===1?"0".concat(t):t};return f?((null==f?void 0:f.overtime)||h)&&j?(0,r.jsx)(c.Z,{...m,ref:n,children:j}):(0,r.jsxs)(c.Z,{...m,ref:n,variant:v,sx:{color:"".concat((null==f?void 0:f.overtime)&&!g?"#f91d1d":"")},component:"span",children:[(null==f?void 0:f.days)?wrapNumber(null==f?void 0:f.days)+"d:":"",wrapNumber(null==f?void 0:f.hours)+"h:",wrapNumber(null==f?void 0:f.minutes)+"m",(null==f?void 0:f.days)?"":":",(null==f?void 0:f.days)?"":wrapNumber(null==f?void 0:f.seconds)+"s"]}):null});n.Z=o},86736:function(t,n,e){"use strict";e.d(n,{Gr:function(){return MissingData},M5:function(){return j},Wd:function(){return PlayersList},Ye:function(){return CardTitleAndValue},iy:function(){return CardAndBorder},j8:function(){return g},u3:function(){return TalentTooltip},uQ:function(){return TitleAndValue},wD:function(){return CenteredStack}});var r=e(82729),i=e(85893),l=e(67294),a=e(30925),s=e(51233),c=e(15861),o=e(49425),d=e(66242),u=e(44267),x=e(61599),h=e(5072),p=e(54685);function _templateObject(){let t=(0,r._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,r._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return t},t}function _templateObject2(){let t=(0,r._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return _templateObject2=function(){return t},t}function _templateObject3(){let t=(0,r._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return _templateObject3=function(){return t},t}let j=(0,l.forwardRef)((t,n)=>{let{stat:e,icon:r}=t,{img:l,...o}=t;return(0,i.jsxs)(s.Z,{alignItems:"center",...o,ref:n,style:{position:"relative",width:"fit-content"},children:[(0,i.jsx)("img",{...l,src:"".concat(a.prefix,"data/").concat(r,".png"),alt:""}),(0,i.jsx)(c.Z,{variant:"body1",component:"span",children:e})]})});j.displayName="IconWithText";let TitleAndValue=t=>{let{title:n,value:e,boldTitle:r,titleStyle:l={},valueStyle:a={}}=t;return(0,i.jsxs)(s.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[n?(0,i.jsxs)(c.Z,{style:l,fontWeight:r?"bold":500,component:"span",children:[n,":\xa0"]}):null,(0,i.jsx)(c.Z,{fontSize:15,component:"span",sx:a,children:e})]})},g=(0,x.Z)(o.Z)(_templateObject()),CardAndBorder=t=>{let{cardName:n,stars:e,cardIndex:r,name:l,variant:s,rawName:c,amount:o,nextLevelReq:d}=t,u="cardSet"===s?"".concat(a.prefix,"data/").concat(c,".png"):"".concat(a.prefix,"data/2Cards").concat(r,".png");return(0,i.jsxs)(i.Fragment,{children:[e>0?(0,i.jsx)(f,{src:"".concat(a.prefix,"data/CardEquipBorder").concat(e,".png"),alt:""}):null,(0,i.jsx)(h.Z,{title:(0,i.jsx)(CardTooltip,{...t,cardName:"cardSet"===s?l:n,nextLevelReq:d,amount:o}),children:(0,i.jsx)(m,{isCardSet:"cardSet"===s,amount:o,src:u,alt:""})})]})},CardTooltip=t=>{let{displayName:n,effect:e,bonus:r,stars:l,showInfo:o,nextLevelReq:d,amount:u}=t,x=r;return o&&(x=(0,p.BZ)({bonus:r,stars:l})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,a.cleanUnderscore)(n)}),(0,i.jsx)(c.Z,{children:(0,a.cleanUnderscore)(e.replace("{",x))}),o?(0,i.jsx)(s.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((t,e)=>(0,i.jsxs)(s.Z,{alignItems:"center",justifyContent:"space-between",children:[0===e?(0,i.jsx)(c.Z,{children:"Base"}):(0,i.jsx)(v,{src:"".concat(a.prefix,"etc/Star").concat(e,".png"),alt:""}),(0,i.jsx)(c.Z,{children:r*(e+1)})]},"".concat(n,"-").concat(e)))}):null,u>=d?(0,i.jsxs)(s.Z,{children:["You've collected ",(0,a.numberWithCommas)(u)," cards"]}):d>0?(0,i.jsxs)(s.Z,{children:["Progress: ",(0,a.numberWithCommas)(u)," / ",(0,a.numberWithCommas)(d)]}):null]})},v=x.Z.img(_templateObject1()),m=x.Z.img(_templateObject2(),t=>{let{amount:n,isCardSet:e}=t;return n||e?1:.5}),f=x.Z.img(_templateObject3()),TalentTooltip=t=>{let{level:n,funcX:e,x1:r,x2:l,funcY:o,y1:d,y2:u,description:x,name:h,talentId:p}=t,j=n>0?(0,a.growth)(e,n,r,l):0,g=n>0?(0,a.growth)(o,n,d,u):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)("img",{src:"".concat(a.prefix,"data/UISkillIcon").concat(p,".png"),alt:""}),(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,a.cleanUnderscore)(h)})]}),(0,i.jsx)(c.Z,{children:(0,a.cleanUnderscore)(x).replace("{",j).replace("}",g)})]})},PlayersList=t=>{let{players:n,characters:e}=t;return(0,i.jsx)(s.Z,{gap:1,direction:"row",children:n.map(t=>{var n;let{index:r}=t;return(0,i.jsx)(h.Z,{title:null==e?void 0:null===(n=e[r])||void 0===n?void 0:n.name,children:(0,i.jsx)("img",{src:"".concat(a.prefix,"data/headBIG.png"),alt:""})},name+"-head-"+r)})})},MissingData=t=>{let{name:n}=t;return(0,i.jsxs)(c.Z,{variant:"h3",children:["Your account is missing data for ",n]})},CardTitleAndValue=t=>{let{cardSx:n,title:e,value:r,children:l,icon:o}=t;return(0,i.jsx)(d.Z,{sx:{my:{xs:0,md:3},width:"fit-content",...n},children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(c.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:e}),r?o?(0,i.jsxs)(s.Z,{direction:"row",gap:2,children:[(0,i.jsx)("img",{style:{objectFit:"contain"},src:"".concat(a.prefix).concat(o),alt:""}),(0,i.jsx)(c.Z,{children:r})]}):(0,i.jsx)(c.Z,{children:r}):l]})})},CenteredStack=t=>{let{direction:n="row",children:e}=t;return(0,i.jsx)(s.Z,{gap:1,direction:n,alignItems:"center",children:e})}},6254:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return sailing}});var r=e(85893),i=e(67294),l=e(23513),a=e(15861),s=e(51233),c=e(82729),o=e(66242),d=e(44267),u=e(67720),x=e(30925),h=e(61599),p=e(74721),j=e(5072),g=e(86736),v=e(75934),m=e.n(v);function _templateObject(){let t=(0,c._)(["\n  object-fit: contain;\n"]);return _templateObject=function(){return t},t}let getTooltip=(t,n)=>{let e={Crystal_Steak:(0,r.jsx)(StatsTooltip,{additionalData:n}),Socrates:(0,r.jsx)(AllStatsTooltip,{additionalData:n})};return e[t]||(0,r.jsx)(r.Fragment,{})},StatsTooltip=t=>{let{additionalData:n}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{sx:{fontWeight:"bold"},mb:1,variant:"subtitle1",children:"Total Damage"}),null==n?void 0:n.map((t,n)=>{let{name:e,bonus:i}=t;return(0,r.jsx)(g.uQ,{boldTitle:!0,title:e,value:"".concat(i,"%")},"stat-".concat(e,"-").concat(n))})]})},AllStatsTooltip=t=>{let{additionalData:n}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{sx:{fontWeight:"bold"},mb:1,variant:"subtitle1",children:"All stats (STR/AGI/WIS/LUK)"}),null==n?void 0:n.map((t,n)=>{let{name:e,strength:i,agility:l,wisdom:a,luck:s}=t;return(0,r.jsx)(g.uQ,{boldTitle:!0,title:e,value:"".concat(i,"/").concat(l,"/").concat(a,"/").concat(s)},"all-stat-".concat(e,"-").concat(n))})]})},f=h.Z.img(_templateObject());var Sailing_Artifacts=t=>{let{artifacts:n}=t;return(0,r.jsx)(s.Z,{direction:"row",gap:2,flexWrap:"wrap",children:null==n?void 0:n.map((t,n)=>{let{name:e,description:i,ancientFormDescription:l,eldritchFormDescription:c,rawName:h,acquired:g,additionalData:v}=t;return(0,r.jsx)(o.Z,{variant:g?"elevation":"outlined",children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(s.Z,{sx:{width:200},children:[(0,r.jsxs)(s.Z,{direction:"row",gap:1,children:[(0,r.jsx)(f,{src:"".concat(x.prefix,"data/").concat(h,".png"),alt:""}),(0,r.jsx)(a.Z,{children:(0,x.cleanUnderscore)(e)})]}),(0,r.jsx)(u.Z,{sx:{my:2}}),(0,r.jsxs)(s.Z,{flexWrap:"wrap",children:[(0,r.jsx)(a.Z,{sx:{minHeight:150},component:"div",children:m()([{regex:/Total bonus.*/gi,fn:(t,n)=>(0,r.jsx)("div",{style:{marginTop:15},children:n[0]},t)}])((0,x.cleanUnderscore)(i))}),Array.isArray(v)?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(j.Z,{title:getTooltip(e,v),children:(0,r.jsx)(p.Z,{})})}):(0,r.jsxs)(a.Z,{children:[v,"\xa0"]}),(0,r.jsx)(u.Z,{flexItem:!0,color:"gold",sx:{my:2}}),(0,r.jsx)(a.Z,{sx:{opacity:2===g||3===g?1:.5,color:3===g?"#ffa092":2===g?"gold":"white"},children:(0,x.cleanUnderscore)(2===g?l:3===g?c:"")})]})]})})},e+n)})})},Sailing_LootPile=t=>{let{lootPile:n}=t;return(0,r.jsx)(s.Z,{gap:2,direction:"row",flexWrap:"wrap",children:null==n?void 0:n.map(t=>{let{rawName:n,amount:e}=t;return(0,r.jsx)(o.Z,{children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(s.Z,{direction:"row",gap:1,sx:{width:100},children:[(0,r.jsx)("img",{src:"".concat(x.prefix,"data/").concat(n,".png"),alt:""}),(0,r.jsx)(a.Z,{children:(0,x.kFormatter)(e)})]})})},n)})})};let ArtifactInfoTooltip=t=>{let{name:n,description:e}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{sx:{fontWeight:"bold"},variant:"subtitle1",children:(0,x.cleanUnderscore)(n)}),(0,r.jsx)(g.uQ,{boldTitle:!0,title:"Bonus",value:(0,x.cleanUnderscore)(e)})]})};var Sailing_Chests=t=>{let{chests:n}=t;return 0===n.length?(0,r.jsx)(s.Z,{justifyContent:"center",direction:"row",children:(0,r.jsx)(a.Z,{variant:"h4",children:"You have no chests!"})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Z,{direction:"row",flexWrap:"wrap",gap:2,my:2,children:null==n?void 0:n.map((t,n)=>{let{island:e,artifactChance:i,ancientChance:l,eldritchChance:c,rawName:h,done:p,acquired:g,possibleArtifacts:v,islandIndex:m,treasure:f}=t;return(0,r.jsx)(o.Z,{sx:{width:300},children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)("img",{style:{objectFit:"contain",width:50},src:"".concat(x.prefix,"data/").concat(h,".png"),alt:""}),(0,r.jsx)(s.Z,{children:p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{children:"No more artifacts!"}),(0,r.jsx)(a.Z,{children:"\xa0"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{children:["Artifact Chance ",i,"%"]}),(0,r.jsxs)(a.Z,{color:"warning.light",children:["Ancient Chance ",l,"%"]}),(0,r.jsxs)(a.Z,{color:"error.light",children:["Eldritch Chance ",c,"%"]})]})})]}),(0,r.jsx)(u.Z,{sx:{my:1}}),(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(a.Z,{children:["Island: ",(0,x.cleanUnderscore)(null==e?void 0:e.name)]}),(0,r.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)("img",{style:{objectFit:"contain",width:25},src:"".concat(x.prefix,"data/SailT").concat(2*m+1,".png"),alt:""}),(0,r.jsx)(a.Z,{children:(0,x.notateNumber)(f,"Big")})]}),(0,r.jsx)(u.Z,{sx:{my:1}}),p?null:(0,r.jsx)(s.Z,{direction:"row",flexWrap:"wrap",gap:1,alignItems:"center",children:null==v?void 0:v.map(t=>(0,r.jsx)(j.Z,{title:(0,r.jsx)(ArtifactInfoTooltip,{...t}),children:(0,r.jsx)(s.Z,{sx:{border:"1px solid",borderColor:(null==t?void 0:t.acquired)===2?"warning.light":(null==t?void 0:t.acquired)===3?"error.light":"",p:1},alignItems:"center",children:(0,r.jsx)("img",{src:"".concat(x.prefix,"data/").concat(null==t?void 0:t.rawName,".png"),width:24,height:24,alt:""})})},null==t?void 0:t.rawName))})]})]})})},"".concat(h,"-").concat(n))})})})},Z=e(9137),Sailing_Captain=t=>{var n,e;let{lootPile:i,shop:l,captainsOnBoats:c,firstBonusDescription:h,secondBonusDescription:p,firstBonus:j,secondBonus:g,level:v,exp:m,expReq:f,firstBonusIndex:Z,secondBonusIndex:w,captainIndex:b,captainType:y,cost:C}=t;return(0,r.jsx)(o.Z,{children:(0,r.jsx)(d.Z,{sx:{width:250,minHeight:l?120:220},children:y>=0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,r.jsxs)(s.Z,{gap:1,children:[(0,r.jsx)("img",{style:{width:25,height:25,objectFit:"contain"},src:"".concat(x.prefix,"etc/Sailing_Skill_").concat(Z,".png"),alt:""}),w>=0?(0,r.jsx)("img",{style:{width:25,height:25,objectFit:"contain"},src:"".concat(x.prefix,"etc/Sailing_Skill_").concat(w,".png"),alt:""}):(0,r.jsx)(r.Fragment,{children:"\xa0"})]}),(0,r.jsx)("img",{style:{width:40,height:50,objectFit:"contain"},src:"".concat(x.prefix,"etc/Captain_").concat(y,".png"),alt:""}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{children:b}),(0,r.jsxs)(a.Z,{variant:"caption",children:["Boat ",(null==c?void 0:c[b])+1]})]})]}),(0,r.jsx)(u.Z,{sx:{my:1}}),(0,r.jsxs)(s.Z,{children:[l?(0,r.jsxs)(s.Z,{sx:{my:1},gap:1,direction:"row",children:[(0,r.jsx)("img",{style:{width:25,objectFit:"contain"},src:"".concat(x.prefix,"data/SailT0.png"),alt:""}),(0,r.jsxs)(a.Z,{color:(null==i?void 0:null===(n=i[0])||void 0===n?void 0:n.amount)>=C?"success.light":"error.light",component:"span",children:[(0,x.notateNumber)(null==i?void 0:null===(e=i[0])||void 0===e?void 0:e.amount,"Big"),"/",(0,x.notateNumber)(C,"Big")]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{children:["Lv.",v]}),(0,r.jsxs)(a.Z,{children:["Exp: ",m," / ",f]})]}),(0,r.jsx)(u.Z,{sx:{my:1},flexItem:!0}),(0,r.jsxs)(a.Z,{variant:"caption",children:[(0,x.cleanUnderscore)(h)," (",j/v,")"]}),g>0?(0,r.jsxs)(a.Z,{variant:"caption",children:[(0,x.cleanUnderscore)(p)," (",g/v,")"]}):null]})]}):(0,r.jsx)(s.Z,{alignItems:"center",justifyContent:"center",children:(0,r.jsx)(a.Z,{children:"EMPTY"})})})})};function BoatsAndCaptains_templateObject(){let t=(0,c._)(["\n  position: relative;\n\n  & > span {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n  }\n"]);return BoatsAndCaptains_templateObject=function(){return t},t}let w=h.Z.div(BoatsAndCaptains_templateObject());var Sailing_BoatsAndCaptains=t=>{var n;let{boats:e,captains:l,lootPile:c,captainsOnBoats:h,shopCaptains:p,lastUpdated:j}=t,getShipsOverview=()=>null==e?void 0:e.reduce((t,n)=>{var e;let{island:r,islandIndex:i}=n;return{...t,[null==r?void 0:r.name]:{islandIndex:i,boats:[...(null==t?void 0:null===(e=t[null==r?void 0:r.name])||void 0===e?void 0:e.boats)||[],n]}}},{}),g=(0,i.useMemo)(()=>getShipsOverview(),[e]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{my:3,variant:"h3",children:"Overview"}),(0,r.jsx)(s.Z,{mt:1,direction:"row",flexWrap:"wrap",gap:3,children:null===(n=Object.entries(g||{}))||void 0===n?void 0:n.map(t=>{var n;let[e,{islandIndex:i,boats:l}]=t;return(0,r.jsx)(o.Z,{children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(s.Z,{direction:"row",gap:1,children:[(0,r.jsx)("img",{style:{width:25,objectFit:"contain"},src:"".concat(x.prefix,"data/SailT").concat(2*i+1,".png"),alt:""}),(0,r.jsx)(a.Z,{children:(0,x.cleanUnderscore)(e)})]}),(0,r.jsx)(a.Z,{sx:{textAlign:"center"},children:null==l?void 0:null===(n=l.map(t=>{let{captainMappedIndex:n}=t;return n}))||void 0===n?void 0:n.join(", ")})]},e)})},"overview"+i+(null==l?void 0:l.length))})}),(0,r.jsx)(a.Z,{my:3,variant:"h3",children:"Boats"}),(0,r.jsx)(s.Z,{mt:1,direction:"row",flexWrap:"wrap",gap:1,children:null==e?void 0:e.map((t,n)=>{let{rawName:e,level:i,artifactChance:l,eldritchChance:c,loot:h,speed:p,lootLevel:g,speedLevel:v,boatIndex:m,captainIndex:f,captainMappedIndex:b,island:y,distanceTraveled:C,timeLeft:S,resources:_}=t;return(0,r.jsx)(o.Z,{children:(0,r.jsxs)(d.Z,{sx:{width:250},children:[(0,r.jsxs)(s.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,r.jsxs)(w,{children:[(0,r.jsx)("img",{style:{width:50,objectFit:"contain"},src:"".concat(x.prefix,"etc/").concat(e,".png"),alt:""}),(0,r.jsx)(a.Z,{component:"span",children:m+1})]}),(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(a.Z,{children:["Lv. ",i]}),(0,r.jsxs)(a.Z,{variant:"caption",children:["Captain ",b]}),(0,r.jsxs)(a.Z,{variant:"caption",children:["Island - ",(0,x.cleanUnderscore)(null==y?void 0:y.name)]}),(0,r.jsx)(Z.Z,{variant:"body1",type:"countdown",lastUpdated:j,date:new Date().getTime()+S})]})]}),(0,r.jsx)(u.Z,{sx:{my:1}}),(0,r.jsxs)(a.Z,{children:["Loot Value: ",(0,x.notateNumber)(h.value,"Big")]}),(0,r.jsxs)(a.Z,{variant:"caption",children:["Next level: ",(0,x.notateNumber)(h.nextLevelValue,"Big")]}),(0,r.jsxs)(a.Z,{children:["Speed Value: ",(0,x.notateNumber)(p.raw,"Big")]}),(0,r.jsxs)(a.Z,{variant:"caption",children:["Next level: ",(0,x.notateNumber)(p.nextLevelValue,"Big")]}),(0,r.jsx)(u.Z,{sx:{my:1}}),(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(a.Z,{variant:"caption",children:["Base loot: ",g]}),(0,r.jsxs)(a.Z,{variant:"caption",children:["Base speed: ",v]})]}),(null==_?void 0:_.length)>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{sx:{my:1}}),(0,r.jsx)(s.Z,{children:null==_?void 0:_.map((t,n)=>{let{required:e,amount:i,rawName:l}=t;return(0,r.jsxs)(s.Z,{direction:"row",children:[(0,r.jsx)("img",{style:{width:25,objectFit:"contain"},src:"".concat(x.prefix,"data/").concat(l,".png"),alt:""}),(0,r.jsxs)(a.Z,{color:i>=e?"success.light":"error.light",children:[(0,x.notateNumber)(i,"Big")," / ",(0,x.notateNumber)(e)]})]},"".concat(l,"-").concat(n))})})," "]}):null,(0,r.jsx)(u.Z,{sx:{my:1}}),(0,r.jsxs)(a.Z,{children:["Artifact Odds: ",l,"x"]})]})},"".concat(e,"-").concat(n))})}),(0,r.jsx)(a.Z,{my:3,variant:"h3",children:"Captains shop"}),(0,r.jsx)(s.Z,{mt:1,direction:"row",flexWrap:"wrap",gap:1,children:null==p?void 0:p.map((t,n)=>(0,r.jsx)(Sailing_Captain,{shop:!0,...t,lootPile:c,captainsOnBoats:h},n))}),(0,r.jsx)(a.Z,{my:3,variant:"h3",children:"Captains"}),(0,r.jsx)(s.Z,{mt:1,direction:"row",flexWrap:"wrap",gap:1,children:null==l?void 0:l.map((t,n)=>(0,r.jsx)(Sailing_Captain,{...t,captainsOnBoats:h},n))})]})},b=e(2962),y=e(16372),Sailing_Trades=t=>{let{trades:n}=t;return(0,r.jsx)(s.Z,{direction:"row",gap:2,flexWrap:"wrap",children:null==n?void 0:n.map((t,n)=>{let{rawName:e}=t;return(0,r.jsx)(o.Z,{sx:{width:250},children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(y.Z,{...t})})},e+n)})})},C=e(68575),sailing=()=>{var t,n;let{state:e}=(0,i.useContext)(l.I),{artifacts:c,lootPile:o,maxChests:d,captains:u,boats:h,chests:p,captainsOnBoats:j,trades:v,shopCaptains:m}=(null==e?void 0:null===(t=e.account)||void 0===t?void 0:t.sailing)||{};return(null==e?void 0:null===(n=e.account)||void 0===n?void 0:n.sailing)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.PB,{title:"Idleon Toolbox | Sailing",description:"Keep track of your artiacts, boats and captains and their bonuses"}),(0,r.jsx)(a.Z,{variant:"h2",textAlign:"center",mb:3,children:"Sailing"}),(0,r.jsxs)(s.Z,{mb:2,direction:"row",gap:1,children:[(0,r.jsx)(g.Ye,{title:"Chests",children:(0,r.jsxs)(s.Z,{direction:"row",gap:2,children:[(0,r.jsx)("img",{style:{width:50,objectFit:"contain"},src:"".concat(x.prefix,"npcs/Chesty.gif"),alt:""}),(0,r.jsxs)(a.Z,{children:[(null==p?void 0:p.length)||0," / ",d]})]})}),(0,r.jsx)(g.Ye,{title:"Captains",children:(0,r.jsxs)(s.Z,{direction:"row",gap:2,children:[(0,r.jsx)("img",{style:{width:28,objectFit:"contain"},src:"".concat(x.prefix,"npcs/Captain.gif"),alt:""}),(0,r.jsx)(a.Z,{children:null==u?void 0:u.length})]})}),(0,r.jsx)(g.Ye,{title:"Boats",children:(0,r.jsxs)(s.Z,{direction:"row",gap:2,children:[(0,r.jsx)("img",{style:{width:42,objectFit:"contain"},src:"".concat(x.prefix,"npcs/Boat.gif"),alt:""}),(0,r.jsx)(a.Z,{children:null==h?void 0:h.length})]})})]}),(0,r.jsxs)(C.Z,{tabs:["Artifacts","Trades","Boats and Captains","Loot Pile","Chests"],children:[(0,r.jsx)(Sailing_Artifacts,{artifacts:c}),(0,r.jsx)(Sailing_Trades,{trades:v,lastUpdated:null==e?void 0:e.lastUpdated}),(0,r.jsx)(Sailing_BoatsAndCaptains,{boats:h,captains:u,lootPile:o,captainsOnBoats:j,shopCaptains:m,lastUpdated:null==e?void 0:e.lastUpdated}),(0,r.jsx)(Sailing_LootPile,{lootPile:o}),(0,r.jsx)(Sailing_Chests,{chests:p})]})]}):(0,r.jsx)(g.Gr,{name:"sailing"})}},54685:function(t,n,e){"use strict";e.d(n,{BZ:function(){return calcCardBonus},OK:function(){return getCardBonusByEffect},V3:function(){return getPlayerCards},Xt:function(){return getEquippedCardBonus},vm:function(){return getCards}});var r=e(70473),i=e(30925);let getCards=(t,n)=>{var e;let r=(null==t?void 0:null===(e=t.Cards)||void 0===e?void 0:e[0])||(0,i.tryToParse)(null==t?void 0:t.Cards0),l=(0,i.tryToParse)(null==t?void 0:t.Rift)||(null==t?void 0:t.Rift);return parseCards(r,l,n)},calculateStars=(t,n,e,r)=>{let i=0;for(let l=0;l<4+ +r;l++)"Boss3B"===e?n>1.5*Math.pow(l+1+Math.floor(l/3),2)&&(i=l+2):n>t*Math.pow(l+1+(Math.floor(l/3)+16*Math.floor(l/4)),2)&&(i=l+2);return i>0?i-1:i},calculateAmountToNextLevel=(t,n,e)=>n>=5?0:t*Math.pow(n+1+(Math.floor((n+1)/4)+16*Math.floor((n+1)/5)),2)-e+1,parseCards=(t,n,e)=>{let[i]=n||[],l=i>=45;return Object.entries(t).reduce((t,n)=>{var i,a;let[s,c]=n,o=null===r.cards||void 0===r.cards?void 0:r.cards[s],d=(null==e?void 0:null===(i=e.accountOptions)||void 0===i?void 0:i[155])||"",u=(null==d?void 0:null===(a=d.toString())||void 0===a?void 0:a.split(","))||[],x=(null==u?void 0:u.includes(s))?5:calculateStars(null==o?void 0:o.perTier,c,s,l);return o?{...t,[null==o?void 0:o.displayName]:{...o,amount:c,stars:x,nextLevelReq:c+calculateAmountToNextLevel(null==o?void 0:o.perTier,x,c)}}:t},{})},calculateCardSetStars=(t,n)=>t&&n?n/(null==t?void 0:t.bonus)-1:null,getEquippedCardBonus=(t,n)=>{var e;let r=null==t?void 0:null===(e=t.equippedCards)||void 0===e?void 0:e.find(t=>{let{cardIndex:e}=t;return e===n});return r?calcCardBonus(r):0},getCardBonusByEffect=(t,n)=>{var e;return null===(e=Object.values(t))||void 0===e?void 0:e.reduce((t,e)=>{var r;return(null==e?void 0:null===(r=e.effect)||void 0===r?void 0:r.includes(n))?t+calcCardBonus(e):t},0)},calcCardBonus=t=>{var n,e,r;return t?(null==t?void 0:t.bonus)*((null!==(n=null==t?void 0:t.stars)&&void 0!==n?n:-1)+1)*(null!==(e=null==t?void 0:t.chipBoost)&&void 0!==e?e:1):0},getPlayerCards=(t,n)=>{var e,i,l,a;if(!(null==t?void 0:t.CSetEq)&&!(null==t?void 0:t.CardEquip))return{};let s=null==t?void 0:t.CSetEq,c=null==t?void 0:null===(e=t.CardEquip)||void 0===e?void 0:e.map(t=>{var e,i,l;return{cardName:null===r.cards||void 0===r.cards?void 0:null===(e=r.cards[t])||void 0===e?void 0:e.displayName,...(null==n?void 0:null===(l=n.cards)||void 0===l?void 0:l[null===r.cards||void 0===r.cards?void 0:null===(i=r.cards[t])||void 0===i?void 0:i.displayName])||{}}}).filter((t,n)=>n<8),o=r.cardSets[null===(i=Object.keys(s))||void 0===i?void 0:i[0]]||{};return{cardSet:{...o,bonus:null===(l=Object.values(s))||void 0===l?void 0:l[0],stars:calculateCardSetStars(o,null===(a=Object.values(s))||void 0===a?void 0:a[0])},equippedCards:c}}},75934:function(t){"use strict";t.exports=function(t){var n=0;return function(e){return t&&Array.isArray(t)&&t.length&&t.forEach(function(t){return e=function processInputWithRegex(t,e){if(!t.fn||"function"!=typeof t.fn||!t.regex||!(t.regex instanceof RegExp))return e;if("string"==typeof e){for(var r=t.regex,i=null,l=[];null!==(i=r.exec(e));){var a=i.index,s=i[0];l.push(e.substring(0,a)),l.push(t.fn(++n,i)),e=e.substring(a+s.length,e.length+1),r.lastIndex=0}return l.push(e),l}return Array.isArray(e)?e.map(function(n){return processInputWithRegex(t,n)}):e}(t,e)}),e}}}},function(t){t.O(0,[5127,9774,2888,179],function(){return t(t.s=505)}),_N_E=t.O()}]);
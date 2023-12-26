(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7603],{74721:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var i=r(t(64938)),c=t(85893),a=(0,i.default)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");n.Z=a},20466:function(e,n,t){"use strict";t.d(n,{Z:function(){return getDay}});var r=t(19013),i=t(13882);function getDay(e){return(0,i.Z)(1,arguments),(0,r.Z)(e).getDay()}},33913:function(e,n,t){"use strict";t.d(n,{Z:function(){return isPast}});var r=t(19013),i=t(13882);function isPast(e){return(0,i.Z)(1,arguments),(0,r.Z)(e).getTime()<Date.now()}},49352:function(e,n,t){"use strict";t.d(n,{Z:function(){return isThursday}});var r=t(19013),i=t(13882);function isThursday(e){return(0,i.Z)(1,arguments),4===(0,r.Z)(e).getDay()}},85148:function(e,n,t){"use strict";t.d(n,{Z:function(){return nextThursday}});var r=t(77349),i=t(20466),c=t(13882);function nextThursday(e){return(0,c.Z)(1,arguments),function(e,n){(0,c.Z)(2,arguments);var t=4-(0,i.Z)(e);return t<=0&&(t+=7),(0,r.Z)(e,t)}(e,4)}},23284:function(e,n,t){"use strict";t.d(n,{Z:function(){return previousThursday}});var r=t(13882),i=t(20466),c=t(7069);function previousThursday(e){return(0,r.Z)(1,arguments),function(e,n){(0,r.Z)(2,arguments);var t=(0,i.Z)(e)-4;return t<=0&&(t+=7),(0,c.Z)(e,t)}(e,4)}},28366:function(e,n,t){"use strict";t.d(n,{Z:function(){return startOfToday}});var r=t(69119);function startOfToday(){return(0,r.Z)(Date.now())}},32154:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-5/gaming",function(){return t(85613)}])},68575:function(e,n,t){"use strict";var r=t(85893),i=t(67294),c=t(98396),a=t(11703),s=t(40044);n.Z=e=>{let{tabs:n,children:t,onTabChange:l}=e,[o,d]=(0,i.useState)(0),u=(0,c.Z)(e=>e.breakpoints.down("md"),{noSsr:!0}),x=Array.isArray(t)?t:[t];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{centered:!u||u&&n.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:u&&n.length>4?"scrollable":"standard",value:o,onChange:(e,n)=>{d(n),l&&l(n)},children:null==n?void 0:n.map((e,n)=>(0,r.jsx)(s.Z,{label:e},"".concat(e,"-").concat(n)))}),l?t:null==x?void 0:x.map((e,n)=>n===o?e:null)]})}},9137:function(e,n,t){"use strict";var r=t(85893),i=t(67294),c=t(60970),a=t(33913),s=t(30925),l=t(15861);let o=(0,i.forwardRef)((e,n)=>{let{date:t,startDate:o,lastUpdated:d,stopAtZero:u,type:x,pause:h,staticTime:m,placeholder:p,loop:j,variant:g="inherit",...Z}=e,[f,v]=(0,i.useState)();(0,i.useEffect)(()=>{if(t){if(m){if(!isFinite(t))return;return v({...(0,s.getDuration)(new Date().getTime(),t)})}let e=new Date,n=e.getTime()-(null!=d?d:0),r=(0,a.Z)(t);v({...(0,s.getDuration)(null==e?void 0:e.getTime(),t+n*("countdown"===x?-1:1)),overtime:"countdown"===x&&r})}},[t,d]);let tickUp=()=>{let{days:e,hours:n,minutes:t,seconds:r}=f;60===(r+=1)&&(r=0,60===(t+=1)&&(t=0,24===(n+=1)&&(e+=1))),v({...f,days:e,hours:n,minutes:t,seconds:r})},tickDown=()=>{let{days:e,hours:n,minutes:t,seconds:r}=f;if(0===e&&0===n&&0===t&&0===r){if(u)return;if(j)return v({...(0,s.getDuration)(new Date().getTime(),o)})}-1==(r-=1)&&(r=59,-1==(t-=1)&&(t=59,-1==(n-=1)&&(n=0,e-=1))),v({...f,days:e,hours:n,minutes:t,seconds:r})};(0,c.Z)(()=>{if(!f)return null;"countdown"!==x||(null==f?void 0:f.overtime)?tickUp():tickDown()},h||m?null:1e3);let wrapNumber=e=>{let n=String(e);return(null==n?void 0:n.length)===1?"0".concat(e):e};return f?((null==f?void 0:f.overtime)||h)&&p?(0,r.jsx)(l.Z,{...Z,ref:n,children:p}):(0,r.jsxs)(l.Z,{...Z,ref:n,variant:g,sx:{color:"".concat((null==f?void 0:f.overtime)&&!j?"#f91d1d":"")},component:"span",children:[(null==f?void 0:f.days)?wrapNumber(null==f?void 0:f.days)+"d:":"",wrapNumber(null==f?void 0:f.hours)+"h:",wrapNumber(null==f?void 0:f.minutes)+"m",(null==f?void 0:f.days)?"":":",(null==f?void 0:f.days)?"":wrapNumber(null==f?void 0:f.seconds)+"s"]}):null});n.Z=o},86736:function(e,n,t){"use strict";t.d(n,{Gr:function(){return MissingData},M5:function(){return p},Wd:function(){return PlayersList},Ye:function(){return CardTitleAndValue},iy:function(){return CardAndBorder},j8:function(){return j},u3:function(){return TalentTooltip},uQ:function(){return TitleAndValue},wD:function(){return CenteredStack}});var r=t(82729),i=t(85893),c=t(67294),a=t(30925),s=t(51233),l=t(15861),o=t(49425),d=t(66242),u=t(44267),x=t(61599),h=t(5072),m=t(54685);function _templateObject(){let e=(0,r._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return _templateObject3=function(){return e},e}let p=(0,c.forwardRef)((e,n)=>{let{stat:t,icon:r}=e,{img:c,...o}=e;return(0,i.jsxs)(s.Z,{alignItems:"center",...o,ref:n,style:{position:"relative",width:"fit-content"},children:[(0,i.jsx)("img",{...c,src:"".concat(a.prefix,"data/").concat(r,".png"),alt:""}),(0,i.jsx)(l.Z,{variant:"body1",component:"span",children:t})]})});p.displayName="IconWithText";let TitleAndValue=e=>{let{title:n,value:t,boldTitle:r,titleStyle:c={},valueStyle:a={}}=e;return(0,i.jsxs)(s.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[n?(0,i.jsxs)(l.Z,{style:c,fontWeight:r?"bold":500,component:"span",children:[n,":\xa0"]}):null,(0,i.jsx)(l.Z,{fontSize:15,component:"span",sx:a,children:t})]})},j=(0,x.Z)(o.Z)(_templateObject()),CardAndBorder=e=>{let{cardName:n,stars:t,cardIndex:r,name:c,variant:s,rawName:l,amount:o,nextLevelReq:d}=e,u="cardSet"===s?"".concat(a.prefix,"data/").concat(l,".png"):"".concat(a.prefix,"data/2Cards").concat(r,".png");return(0,i.jsxs)(i.Fragment,{children:[t>0?(0,i.jsx)(f,{src:"".concat(a.prefix,"data/CardEquipBorder").concat(t,".png"),alt:""}):null,(0,i.jsx)(h.Z,{title:(0,i.jsx)(CardTooltip,{...e,cardName:"cardSet"===s?c:n,nextLevelReq:d,amount:o}),children:(0,i.jsx)(Z,{isCardSet:"cardSet"===s,amount:o,src:u,alt:""})})]})},CardTooltip=e=>{let{displayName:n,effect:t,bonus:r,stars:c,showInfo:o,nextLevelReq:d,amount:u}=e,x=r;return o&&(x=(0,m.BZ)({bonus:r,stars:c})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{fontWeight:"bold",variant:"h6",children:(0,a.cleanUnderscore)(n)}),(0,i.jsx)(l.Z,{children:(0,a.cleanUnderscore)(t.replace("{",x))}),o?(0,i.jsx)(s.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,t)=>(0,i.jsxs)(s.Z,{alignItems:"center",justifyContent:"space-between",children:[0===t?(0,i.jsx)(l.Z,{children:"Base"}):(0,i.jsx)(g,{src:"".concat(a.prefix,"etc/Star").concat(t,".png"),alt:""}),(0,i.jsx)(l.Z,{children:r*(t+1)})]},"".concat(n,"-").concat(t)))}):null,u>=d?(0,i.jsxs)(s.Z,{children:["You've collected ",(0,a.numberWithCommas)(u)," cards"]}):d>0?(0,i.jsxs)(s.Z,{children:["Progress: ",(0,a.numberWithCommas)(u)," / ",(0,a.numberWithCommas)(d)]}):null]})},g=x.Z.img(_templateObject1()),Z=x.Z.img(_templateObject2(),e=>{let{amount:n,isCardSet:t}=e;return n||t?1:.5}),f=x.Z.img(_templateObject3()),TalentTooltip=e=>{let{level:n,funcX:t,x1:r,x2:c,funcY:o,y1:d,y2:u,description:x,name:h,talentId:m}=e,p=n>0?(0,a.growth)(t,n,r,c):0,j=n>0?(0,a.growth)(o,n,d,u):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)("img",{src:"".concat(a.prefix,"data/UISkillIcon").concat(m,".png"),alt:""}),(0,i.jsx)(l.Z,{fontWeight:"bold",variant:"h6",children:(0,a.cleanUnderscore)(h)})]}),(0,i.jsx)(l.Z,{children:(0,a.cleanUnderscore)(x).replace("{",p).replace("}",j)})]})},PlayersList=e=>{let{players:n,characters:t}=e;return(0,i.jsx)(s.Z,{gap:1,direction:"row",children:n.map(e=>{var n;let{index:r}=e;return(0,i.jsx)(h.Z,{title:null==t?void 0:null===(n=t[r])||void 0===n?void 0:n.name,children:(0,i.jsx)("img",{src:"".concat(a.prefix,"data/headBIG.png"),alt:""})},name+"-head-"+r)})})},MissingData=e=>{let{name:n}=e;return(0,i.jsxs)(l.Z,{variant:"h3",children:["Your account is missing data for ",n]})},CardTitleAndValue=e=>{let{variant:n,raised:t,cardSx:r,title:c,value:o,children:x,icon:h}=e;return(0,i.jsx)(d.Z,{variant:n,raised:t,sx:{my:{xs:0,md:3},width:"fit-content",...r},children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(l.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:c}),o?h?(0,i.jsxs)(s.Z,{direction:"row",gap:2,children:[(0,i.jsx)("img",{style:{objectFit:"contain"},src:"".concat(a.prefix).concat(h),alt:""}),(0,i.jsx)(l.Z,{children:o})]}):(0,i.jsx)(l.Z,{children:o}):x]})})},CenteredStack=e=>{let{direction:n="row",children:t}=e;return(0,i.jsx)(s.Z,{gap:1,direction:n,alignItems:"center",children:t})}},85613:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return world_5_gaming}});var r=t(85893),i=t(67294),c=t(23513),a=t(15861),s=t(86736),l=t(2962),o=t(51233),d=t(66242),u=t(44267),x=t(30925),h=t(68575),m=t(82729),p=t(20385),j=t(67720),g=t(9137),Z=t(5072),f=t(74721),v=t(61599);function _templateObject(){let e=(0,m._)(["\n  width: 50px;\n"]);return _templateObject=function(){return e},e}let Snail=e=>{let{snailLevel:n,snailEncouragement:t}=e,i=Math.min(1,(1-.1*Math.pow(n,.72))*(1+100*t/(25+t)/100)),c=Math.max(0,(Math.pow(n+1,.07)-1)/(1+300*t/(100+t)/100)),s=c*(1-i),l=1/i,d=1-Math.pow(1-i,1/s),u=(0,p.h$)(n,.9);return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(j.Z,{sx:{my:1}}),(0,r.jsxs)(a.Z,{children:["Level: ",n]}),(0,r.jsxs)(a.Z,{children:["Encouragement: ",t]}),(0,r.jsxs)(a.Z,{children:["Success chance: ",(0,x.notateNumber)(100*i,"MultiplierInfo"),"%"]}),(0,r.jsxs)(a.Z,{children:["Reset chance: ",(0,x.notateNumber)(100*c,"MultiplierInfo"),"%"]}),(0,r.jsxs)(a.Z,{children:["Real Reset chance: ",(0,x.notateNumber)(100*s,"MultiplierInfo"),"%"]}),(0,r.jsxs)(a.Z,{children:["Avg # attempts: ",(0,x.notateNumber)(l,"MultiplierInfo")]}),(0,r.jsxs)(a.Z,{children:["Chance to Succeed Before Reset: ",(0,x.notateNumber)(d,"MultiplierInfo")]}),(0,r.jsxs)(a.Z,{children:["Enc. needed for 90% success chance: ",u]})]})},Nuggets=e=>{var n;let{account:t,goldNuggets:i,nuggetsBreakpoints:c,lastShovelClicked:s,lastUpdated:l,maxNuggetValue:d}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{mt:1,direction:"row",gap:1,children:[(0,r.jsx)(g.Z,{date:new Date().getTime()-1e3*s,lastUpdated:l}),(0,r.jsx)(Z.Z,{title:(0,r.jsx)(ResourcePerTime,{breakpoints:c}),children:(0,r.jsx)(f.Z,{})})]}),(0,r.jsxs)(a.Z,{children:["# of nuggets: ",i]}),(0,r.jsxs)(a.Z,{children:["Rolls possible: ",(0,x.notateNumber)(d/1584.89),"-",(0,x.notateNumber)(d)]}),(0,r.jsxs)(a.Z,{children:["Nuggets since upgrade: ",null==t?void 0:null===(n=t.accountOptions)||void 0===n?void 0:n[192]]})]})},Acorns=e=>{let{lastAcornClicked:n,lastUpdated:t,acornsBreakpoints:i,acorns:c}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{mt:1,direction:"row",gap:1,children:[(0,r.jsx)(g.Z,{date:new Date().getTime()-1e3*n,lastUpdated:t}),(0,r.jsx)(Z.Z,{title:(0,r.jsx)(ResourcePerTime,{breakpoints:i}),children:(0,r.jsx)(f.Z,{})})]}),(0,r.jsxs)(a.Z,{children:["# of acorns: ",c]})]})},AcornShop=e=>{let{acornShop:n}=e;return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(j.Z,{sx:{my:2}}),(0,r.jsx)(a.Z,{children:"Acorn Shop"}),(0,r.jsx)(o.Z,{direction:"row",gap:3,children:null==n?void 0:n.map((e,n)=>{let{cost:t,bonus:i,description:c}=e;return(0,r.jsx)(o.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{children:c}),(0,r.jsxs)(a.Z,{children:["Cost: ",t]})]})},"corn-"+n)})})]})},ResourcePerTime=e=>{let{breakpoints:n}=e;return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{sx:{fontWeight:"bold"},children:"Breakpoints"}),null==n?void 0:n.map((e,n)=>{let{time:t,amount:i}=e,c=Math.round(t/3600%1*60);return(0,r.jsxs)(o.Z,{direction:"row",gap:2,children:[(0,r.jsxs)(a.Z,{sx:{width:100},children:["".concat(Math.floor(t/3600),"h"),c>0?":".concat(c,"m"):""]}),(0,r.jsx)(a.Z,{children:i})]},"bp-".concat(n))})]})},b=v.Z.img(_templateObject());var Gaming_Imports=e=>{let{account:n,lastUpdated:t}=e,{bits:i,snailLevel:c,snailEncouragement:s,availableSprouts:l,availableDrops:h,sproutsCapacity:m,fertilizerUpgrades:p,imports:g,lastShovelClicked:Z,goldNuggets:f,lastAcornClicked:v,acorns:w,nuggetsBreakpoints:_,acornsBreakpoints:y,envelopes:I,bestNugget:S}=(null==n?void 0:n.gaming)||{};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{variant:"h3",my:3,children:"Imports"}),(0,r.jsx)(o.Z,{mt:2,direction:"row",flexWrap:"wrap",gap:2,children:null==g?void 0:g.map((e,i)=>{let{boxName:l,boxDescription:h,name:m,description:p,majorBonus:g,minorBonus:I,cost:T,rawName:N,saveSprinklerChance:C,acquired:B,acornShop:U,maxNuggetValue:k,level:D}=e;return(0,r.jsx)(d.Z,{sx:{width:380},variant:B?"elevation":"outlined",children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(o.Z,{sx:{minHeight:200},children:[(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",gap:2,children:[(0,r.jsx)(b,{src:"".concat(x.prefix,"data/").concat(N,".png"),alt:""}),(0,r.jsxs)(a.Z,{children:[(0,x.cleanUnderscore)(m)," (",(0,x.cleanUnderscore)(l),")"]})]}),(0,r.jsx)(j.Z,{sx:{my:2}}),g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{children:[" ",(0,x.cleanUnderscore)(g.split("|").join(" "))]}),(0,r.jsx)(j.Z,{sx:{my:2}})," "]}):null,(0,r.jsx)(a.Z,{children:(0,x.cleanUnderscore)(I)}),(0,r.jsxs)(o.Z,{mt:1,direction:"row",gap:1,alignItems:"center",children:[(0,r.jsx)("img",{src:"".concat(x.prefix,"etc/Bits_").concat((0,x.getBitIndex)(T),".png"),alt:"",style:{objectFit:"contain"}}),(0,r.jsx)(a.Z,{children:(0,x.notateNumber)(T,"bits")})]}),B&&(1===i||2===i)?(0,r.jsx)(j.Z,{sx:{my:2}}):null,B&&1===i?(0,r.jsx)(Nuggets,{account:n,bestNugget:S,lastUpdated:t,goldNuggets:f,lastShovelClicked:Z,maxNuggetValue:k,nuggetsBreakpoints:_}):null,B&&2===i?(0,r.jsx)(Acorns,{acorns:w,lastUpdated:t,acornsBreakpoints:y,lastAcornClicked:v}):null,B&&7===i?(0,r.jsx)(Snail,{snailLevel:c,snailEncouragement:s}):null,C?(0,r.jsxs)(a.Z,{children:["Save sprinkler chance: ",C,"%"]}):null,U?(0,r.jsx)(AcornShop,{acornShop:U}):null,(0,r.jsx)(j.Z,{sx:{my:2}})]}),(0,r.jsxs)(o.Z,{mt:"auto",children:[(0,r.jsx)(a.Z,{mb:1,variant:"body2",children:"Box info"}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{variant:"caption",children:(0,x.cleanUnderscore)(h)}),(0,r.jsx)(a.Z,{mt:1,variant:"caption",children:(0,x.cleanUnderscore)(p)})]})]})]})},m)})})]})};let BreakpointsTooltip=e=>{let{breakpoints:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{variant:"body1",sx:{fontWeight:"bold"},children:"DNA"}),null==n?void 0:n.map((e,n)=>{let{value:t,chance:i}=e;return(0,r.jsx)(s.uQ,{title:t,value:"".concat(i,"%")},"".concat(name,"-").concat(n))})]})};var Gaming_Mutations=e=>{let{account:n}=e,{mutations:t,unlockedMutations:i,dna:c,mutationCost:l,newMutationChance:h,mutationChanceBreakpoints:m}=null==n?void 0:n.gaming;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{direction:"row",gap:3,flexWrap:"wrap",children:[(0,r.jsx)(s.Ye,{title:"DNA",children:(0,r.jsxs)(o.Z,{direction:"row",gap:2,children:[(0,r.jsx)("img",{style:{objectFit:"contain"},src:"".concat(x.prefix,"etc/DNA.png"),alt:""}),(0,r.jsxs)(a.Z,{children:[c," ~ ",h,"% chance"]}),(0,r.jsx)(Z.Z,{title:(0,r.jsx)(BreakpointsTooltip,{breakpoints:m}),children:(0,r.jsx)(f.Z,{})})]})}),(0,r.jsx)(s.Ye,{title:"Mutation cost",value:(0,x.notateNumber)(l,"bits"),icon:"etc/Bits_".concat((0,x.getBitIndex)(l),".png")})]}),(0,r.jsx)(o.Z,{direction:"row",flexWrap:"wrap",gap:3,children:null==t?void 0:t.map((e,n)=>{let{name:t,description:c}=e;return(0,r.jsx)(d.Z,{sx:{width:250,border:n<i?"1px solid":"",borderColor:n<i?"success.main":""},children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(o.Z,{direction:"row",gap:2,alignItems:"center",children:[(0,r.jsx)("img",{style:{width:48,height:48,objectFit:"contain"},src:"".concat(x.prefix,"etc/Mutation_").concat(n,".png")}),(0,r.jsx)(a.Z,{variant:"body1",children:t})]}),(0,r.jsx)(a.Z,{mt:2,variant:"body2",children:(0,x.cleanUnderscore)(c.replaceAll("|"," "))})]})},t)})})]})};let ImgCard=e=>{let{title:n,imgSrc:t,value:i}=e;return(0,r.jsx)(s.Ye,{title:n,children:(0,r.jsxs)(o.Z,{direction:"row",gap:2,children:[(0,r.jsx)("img",{src:"".concat(x.prefix).concat(t,".png"),alt:""}),(0,r.jsx)(a.Z,{children:i})]})})};var Gaming_General=e=>{let{account:n,lastUpdated:t}=e,{bits:i,availableSprouts:c,availableDrops:s,sproutsCapacity:l,fertilizerUpgrades:m,envelopes:p,bestNugget:j}=null==n?void 0:n.gaming;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{direction:"row",gap:2,flexWrap:"wrap",children:[(0,r.jsx)(ImgCard,{title:"Bits",imgSrc:"etc/Bits_".concat((0,x.getBitIndex)(i)),value:(0,x.notateNumber)(i,"bits")}),(0,r.jsx)(ImgCard,{title:"Sprouts",imgSrc:"etc/Sprouts",value:"".concat(c," / ").concat(null!=l?l:0)}),(0,r.jsx)(ImgCard,{title:"Best nugget",imgSrc:"etc/GamingNugget",value:(0,x.numberWithCommas)(parseInt(j))}),(0,r.jsx)(ImgCard,{title:"Drops",imgSrc:"etc/GamingDrop",value:s}),(0,r.jsx)(ImgCard,{title:"Envelopes",imgSrc:"etc/GamingEnvelope",value:p})]}),(0,r.jsx)(o.Z,{mt:2,mb:3,direction:"row",flexWrap:"wrap",gap:2,children:null==m?void 0:m.map(e=>{let{name:n,level:t,description:i,cost:c}=e;return(0,r.jsx)(d.Z,{sx:{width:250},children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(o.Z,{direction:"row",gap:2,children:[(0,r.jsx)(a.Z,{sx:{width:120},children:(0,x.cleanUnderscore)(n)}),(0,r.jsxs)(a.Z,{children:["Lv. ",t]})]}),(0,r.jsx)(a.Z,{mt:1,children:(0,x.cleanUnderscore)(i)}),(0,r.jsxs)(o.Z,{mt:1,direction:"row",gap:1,alignItems:"center",children:[(0,r.jsx)("img",{src:"".concat(x.prefix,"etc/Bits_").concat((0,x.getBitIndex)(c),".png"),alt:"",style:{objectFit:"contain"}}),(0,r.jsx)(a.Z,{children:c})]})]})},n)})}),(0,r.jsxs)(h.Z,{tabs:["Imports","Mutations"],children:[(0,r.jsx)(Gaming_Imports,{account:n,lastUpdated:t}),(0,r.jsx)(Gaming_Mutations,{account:n,lastUpdated:t})]})]})},Gaming_Superbits=e=>{let{superbits:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{gap:1,direction:"row",flexWrap:"wrap",children:null==n?void 0:n.map((e,n)=>{var t;let{name:i,description:c,unlocked:s,bonus:l,totalBonus:o,additionalInfo:h}=e;return(0,r.jsx)(d.Z,{sx:{width:300,border:s?"1px solid #81c784":"",opacity:s?1:.5},children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(a.Z,{children:(0,x.cleanUnderscore)(i.capitalize())}),(0,r.jsx)(a.Z,{sx:{mt:2},children:(0,x.cleanUnderscore)(null==c?void 0:null===(t=c.replace("}",l))||void 0===t?void 0:t.replace("{",(0,x.notateNumber)(o)))}),h?(0,r.jsx)(a.Z,{sx:{mt:2},children:(0,x.cleanUnderscore)(h)}):null]})},i+"".concat(n))})})})},world_5_gaming=()=>{var e,n;let{state:t}=(0,i.useContext)(c.I),{superbitsUpgrades:o}=(null==t?void 0:null===(e=t.account)||void 0===e?void 0:e.gaming)||{};return(null==t?void 0:null===(n=t.account)||void 0===n?void 0:n.gaming)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.PB,{title:"Idleon Toolbox | Gaming",description:"Keep track of your gaming upgrades including dirty shovel and autumn squirrel timers"}),(0,r.jsx)(a.Z,{variant:"h2",textAlign:"center",mb:3,children:"Gaming"}),(0,r.jsxs)(h.Z,{tabs:["General","Superbits"],children:[(0,r.jsx)(Gaming_General,{account:null==t?void 0:t.account,lastUpdated:null==t?void 0:t.lastUpdated}),(0,r.jsx)(Gaming_Superbits,{superbits:o})]})]}):(0,r.jsx)(s.Gr,{name:"gaming"})}}},function(e){e.O(0,[5127,7896,8054,9774,2888,179],function(){return e(e.s=32154)}),_N_E=e.O()}]);
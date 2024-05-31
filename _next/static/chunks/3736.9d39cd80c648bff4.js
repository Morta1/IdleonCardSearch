"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3736],{83736:function(l,o,e){e.d(o,{parseData:function(){return parseData}});var i=e(56552),n=e(54685),t=e(74805),a=e(1972),u=e(74861),r=e(64569);let d={0:"dewdrop",1:"sandstone",2:"chillsnap",3:"astro",4:"molten",5:"whimsical"},s={0:"chopping",1:"fishing",2:"catching",3:"mining"},getHighscores=(l,o)=>{var e,i,n,t,a;let u=(null==l?void 0:null===(e=l.FamilyValuesMap)||void 0===e?void 0:e.ColosseumHighscores)||(null==l?void 0:l.FamValColosseumHighscores),r=(null==l?void 0:null===(i=l.FamilyValuesMap)||void 0===i?void 0:i.MinigameHiscores)||(null==l?void 0:l.FamValMinigameHiscores);return{coloHighscores:parseColosseum(u),minigameHighscores:parseMinigame(r).concat([{name:"pen pals",score:(null==o?void 0:null===(n=o.accountOptions)||void 0===n?void 0:n[99])||0},{name:"poing",score:null==o?void 0:null===(t=o.gaming)||void 0===t?void 0:t.poingHighscore},{name:"hoops",score:(null==o?void 0:null===(a=o.accountOptions)||void 0===a?void 0:a[242])||0}])}},parseColosseum=l=>l.slice(1).filter((l,o)=>d[o]).map((l,o)=>({name:d[o],score:parseFloat(l)})),parseMinigame=l=>l.filter((l,o)=>s[o]).map((l,o)=>({name:s[o],score:l})),calcColoTotalScore=l=>null==l?void 0:l.reduce((l,o)=>{let{score:e}=o;return l+e},0),calcMinigameTotalScore=l=>null==l?void 0:l.reduce((l,o,e)=>{let{score:i}=o;return l+(e<5?i:0)},0);var v=e(30925);let getGemShop=l=>{let o=(0,v.tryToParse)(null==l?void 0:l.GemItemsPurchased)||(null==l?void 0:l.GemItemsPurchased);return parseGemShop(o)},parseGemShop=l=>l;var c=e(25081),p=e(88054),m=e(23515),h=e(29129),g=e(96707),f=e(15815),M=e(70473);let getForge=(l,o)=>{let e=null==l?void 0:l.ForgeItemOrder,i=(null==l?void 0:l.ForgeItemQuantity)||(null==l?void 0:l.ForgeItemQty),n=(null==l?void 0:l.FurnaceLevels)||(null==l?void 0:l.ForgeLV);return parseForge(e,i,n,o)},y=[{name:"New Forge Slot",maxLevel:16,description:"extra slots to smelt ores",costMulti:void 0},{name:"Ore Capacity Boost",maxLevel:50,description:"Increases max ores per slot",costMulti:1.41},{name:"Forge Speed",maxLevel:90,description:"Ores are turned into bars faster",costMulti:1.2},{name:"Forge EXP Gain",maxLevel:85,description:"Increased EXP gain from using the forge",costMulti:1.21},{name:"Bar Bonanza",maxLevel:75,description:"Increased chance to make an extra bar",costMulti:1.25},{name:"Puff Puff Go",maxLevel:60,description:"Increased chance for a card drop while afk",costMulti:1.33}],parseForge=(l,o,e,i)=>{var n,t,a,u;let r=null==y?void 0:y.map((l,o)=>({...l,level:e[o]})),d=null!==(t=null==i?void 0:null===(n=i.gemShopPurchases)||void 0===n?void 0:n.find((l,o)=>104===o))&&void 0!==t?t:0,s=[],v=0;for(let e=0;e<(null==l?void 0:l.length);e+=3){let[i,n,t]=null==l?void 0:l.slice(e,e+3),[c,p,m]=o.slice(e,e+3),h=null===M.items||void 0===M.items?void 0:M.items[n],g=null===M.items||void 0===M.items?void 0:M.items[i],f=v<d,y=Math.round(100+5*(null==r?void 0:null===(a=r[2])||void 0===a?void 0:a.level)),k=getSpeed(y,h,f),b=Math.round(c/(null==g?void 0:g.Amount))*((null==g?void 0:g.Cooldown)/(4*k));s=[...s,{isBrimestone:f,ore:{...g,name:null==g?void 0:g.displayName,rawName:i,amount:c,quantity:c,timeTillEmpty:1e3*b,owner:"forge"},barrel:{...h,name:null==h?void 0:h.displayName,rawName:n,amount:p,quantity:p,owner:"forge"},bar:{...null===M.items||void 0===M.items?void 0:M.items[t],name:null===M.items||void 0===M.items?void 0:null===(u=M.items[t])||void 0===u?void 0:u.displayName,rawName:t,amount:m,quantity:m,owner:"forge"}}],v++}return{list:s,upgrades:r}},getSpeed=(l,o,e)=>{let i=Math.round(l)/100;return i*=(null==o?void 0:o.Effect)==="SpeedForge"?null==o?void 0:o.Amount:1,e&&(i*=1.5),.25*i};var k=e(47212),b=e(9339),T=e(72664);let getTasks=l=>{var o;let e=(null==l?void 0:l.Tasks)||[(0,v.tryToParse)(null==l?void 0:l.TaskZZ0),(0,v.tryToParse)(null==l?void 0:l.TaskZZ1),(0,v.tryToParse)(null==l?void 0:l.TaskZZ2),(0,v.tryToParse)(null==l?void 0:l.TaskZZ3),(0,v.tryToParse)(null==l?void 0:l.TaskZZ4),(0,v.tryToParse)(null==l?void 0:l.TaskZZ5),(0,v.tryToParse)(null==l?void 0:l.TaskZZ6)],i=null===M.tasks||void 0===M.tasks?void 0:null===(o=M.tasks.map((l,o)=>null==l?void 0:l.map((l,i)=>{var n,t,a,u,r,d;let s=null==e?void 0:null===(t=e[0])||void 0===t?void 0:null===(n=t[o])||void 0===n?void 0:n[i],v=null==e?void 0:null===(u=e[1])||void 0===u?void 0:null===(a=u[o])||void 0===a?void 0:a[i],c=l;if(8===i){let l=null==e?void 0:null===(r=e[5])||void 0===r?void 0:r[o];c=null===M.tasks||void 0===M.tasks?void 0:null===(d=M.tasks[o])||void 0===d?void 0:d[8+l]}return{...c,stat:s,level:v,meritReward:Math.round(1+Math.floor(v/5))}})))||void 0===o?void 0:o.map(l=>null==l?void 0:l.slice(0,9)),n=null===M.merits||void 0===M.merits?void 0:M.merits.map((l,o)=>null==l?void 0:l.map((l,i)=>{var n,t;let a=null==e?void 0:null===(t=e[2])||void 0===t?void 0:null===(n=t[o])||void 0===n?void 0:n[i];return{...l,level:a}}));return{tasks:parseTasks(e),tasksDescriptions:i,meritsDescriptions:n}},parseTasks=l=>l,calcTotalTasks=l=>{var o;return null==l?void 0:null===(o=l[1])||void 0===o?void 0:o.reduce((l,o)=>{let e=o.reduce((l,o)=>l+o,0);return l+e},0)};var O=e(71345),S=e(10924),w=e(32387),x=e(11028),C=e(89260),P=e(15893),E=e(64605),L=e(73592),F=e(70508),B=e(19225),I=e(74629),_=e(5432),N=e(19834),D=e(16727),R=e(20385),G=e(95331),A=e(67896),q=e(4056),j=e(78713),U=e(72973),H=e(15265),Z=e(8616),V=e(77115),W=e(13339),z=e(30796),Q=e(88344);let getTome=(l,o,e,i)=>{let n=M.ninjaExtraInfo[32].split(" "),t=M.ninjaExtraInfo[33].split(" "),a=calcTomeQuantity(o,e,l),u=0,r=M.tomeData.map((l,e)=>{let i=n.indexOf(e.toString()),t=50*i+(10*Math.max(0,i-30)+10*Math.max(0,i-50))+500,r=(null==a?void 0:a[e])||0,d=calcPointsPercent(l,r),s=Math.ceil(d*(null==l?void 0:l.x3));return u+=(null==o?void 0:o.accountLevel)>t?s:0,{...l,tomeLvReq:t,index:i,quantity:(null==a?void 0:a[e])||0,points:s,color:.4>d?"#ffc277":.75>d?"#d6dbe0":.999>d?"gold":"#56ccff"}}),d=t.map((l,e)=>({name:l.replace("+{%",""),bonus:getTomeBonus(o,u,e)}));r.sort((l,o)=>l.index-o.index);let s=(null==i?void 0:i.TomePct)||[],v=s.reduce((l,o,e)=>u>o?e:l,-1);return{tome:r,bonuses:d,totalPoints:u,tops:s,top:v}},getTomeBonus=(l,o,e)=>{var i,n,t,a,u;let r=(0,p.om)(null==l?void 0:null===(i=l.alchemy)||void 0===i?void 0:i.bubbles,"power","TOME_STRENGTH"),d=(0,p.om)(null==l?void 0:null===(n=l.alchemy)||void 0===n?void 0:n.bubbles,"quicc","TOME_AGILITY"),s=(0,p.om)(null==l?void 0:null===(t=l.alchemy)||void 0===t?void 0:t.bubbles,"high-iq","TOME_WISDOM"),v=(o-5e3)/2e3;return 0===e?10*Math.pow(Math.floor(o/100),.7):1===e?1===(null==l?void 0:null===(a=l.accountOptions)||void 0===a?void 0:a[196])?4*Math.pow(Math.floor(Math.max(0,o-4e3)/100),.7):0:2===e?1===(null==l?void 0:null===(u=l.accountOptions)||void 0===u?void 0:u[197])?2*Math.pow(Math.floor(Math.max(0,o-8e3)/100),.7):0:3===e?r*v:4===e?d*v:5===e?s*v:0},calcPointsPercent=(l,o)=>0===(null==l?void 0:l.x2)?0>o?0:Math.pow(1.7*o/(o+(null==l?void 0:l.x1)),.7):1===(null==l?void 0:l.x2)?2.4*(0,v.lavaLog)(o)/(2*(0,v.lavaLog)(o)+(null==l?void 0:l.x1)):2===(null==l?void 0:l.x2)?Math.min(1,o/(null==l?void 0:l.x1)):3!==(null==l?void 0:l.x2)?0:o>5*(null==l?void 0:l.x1)?0:Math.pow(1.2*(6*(null==l?void 0:l.x1)-o)/(7*(null==l?void 0:l.x1)-o),5),calcTomeQuantity=(l,o)=>{var e,i,t,r,d,s,v,c,h,g,M,y,k,T,O,w,x,P,E,L,F,B,N,R,A,q,j,U,H,V,W,X,Y,J,K,$,ll,lo,le,li,ln,lt,la,lu,lr,ld,ls,lv,lc,lp,lm,lh,lg,lf,lM,ly,lk,lb,lT,lO,lS,lw,lx,lC,lP,lE,lL,lF,lB,lI,l_;let lN=[];return lN.push((0,a.bL)(null==l?void 0:l.stamps)),lN.push((0,u.ni)(null==l?void 0:l.statues)),lN.push((0,n.QN)(null==l?void 0:l.cards)),lN.push((0,z.gq)(o)),lN.push((0,S.vZ)(o)),lN.push(null==l?void 0:l.accountLevel),lN.push(calcTotalTasks(null==l?void 0:l.tasks)),lN.push((0,b.fC)(null==l?void 0:l.achievements)),lN.push(null===(e=l.accountOptions)||void 0===e?void 0:e[198]),lN.push(null===(i=l.accountOptions)||void 0===i?void 0:i[208]),lN.push((0,Q.lV)(null==l?void 0:l.looty)),lN.push(Object.entries(null==l?void 0:l.totalSkillsLevels).reduce((l,o)=>{let[e,{level:i}]=o;return"character"!==e?l+i:l},0)),lN.push(null===(t=l.accountOptions)||void 0===t?void 0:t[201]),lN.push(null==l?void 0:null===(s=l.tasks)||void 0===s?void 0:null===(d=s[0])||void 0===d?void 0:null===(r=d[0])||void 0===r?void 0:r[2]),lN.push(null===(v=l.accountOptions)||void 0===v?void 0:v[172]),lN.push((0,z.Es)(o,l)),lN.push(1/(null===(c=l.accountOptions)||void 0===c?void 0:c[202])),lN.push(null==l?void 0:null===(h=l.dungeons)||void 0===h?void 0:h.rank),lN.push(null===(g=l.accountOptions)||void 0===g?void 0:g[200]),lN.push(null==l?void 0:l.rawConstellationsDone),lN.push(null===(M=l.accountOptions)||void 0===M?void 0:M[203]),lN.push((0,Q.ZT)(null==l?void 0:l.looty)),lN.push((0,p.e5)(null==l?void 0:null===(y=l.alchemy)||void 0===y?void 0:y.bubbles)),lN.push((0,p.k_)(null==l?void 0:null===(k=l.alchemy)||void 0===k?void 0:k.vials)),lN.push((0,p.It)(null==l?void 0:null===(O=l.alchemy)||void 0===O?void 0:null===(T=O.p2w)||void 0===T?void 0:T.sigils)),lN.push(null===(w=l.accountOptions)||void 0===w?void 0:w[199]),lN.push((null==l?void 0:null===(x=l.currencies)||void 0===x?void 0:x.DeliveryBoxComplete)+(null==l?void 0:null===(P=l.currencies)||void 0===P?void 0:P.DeliveryBoxStreak)+(null==l?void 0:null===(E=l.currencies)||void 0===E?void 0:E.DeliveryBoxMisc)),lN.push(null===(L=l.accountOptions)||void 0===L?void 0:L[204]),lN.push(null===(F=l.accountOptions)||void 0===F?void 0:F[205]),lN.push(null===(B=l.accountOptions)||void 0===B?void 0:B[206]),lN.push(1e3-(null===(N=l.accountOptions)||void 0===N?void 0:N[207])),lN.push(null===(R=l.accountOptions)||void 0===R?void 0:R[211]),lN.push(null===(A=l.accountOptions)||void 0===A?void 0:A[212]),lN.push(null===(q=l.accountOptions)||void 0===q?void 0:q[213]),lN.push(null===(j=l.accountOptions)||void 0===j?void 0:j[214]),lN.push(null===(U=l.accountOptions)||void 0===U?void 0:U[215]),lN.push(null===(H=l.accountOptions)||void 0===H?void 0:H[209]),lN.push(null==l?void 0:null===(V=l.towers)||void 0===V?void 0:V.totalWaves),lN.push((0,I.sr)(null==l?void 0:l.deathNote)),lN.push(null==l?void 0:null===(W=l.equinox)||void 0===W?void 0:W.completedClouds),lN.push(null==l?void 0:null===(X=l.refinery)||void 0===X?void 0:X.totalLevels),lN.push((0,G.Bm)(null==l?void 0:null===(Y=l.atoms)||void 0===Y?void 0:Y.atoms)),lN.push(null==l?void 0:null===(J=l.towers)||void 0===J?void 0:J.totalLevels),lN.push((0,m.cR)(null==l?void 0:l.storage,"Critter11A")),lN.push(null===(K=l.accountOptions)||void 0===K?void 0:K[224]),lN.push(null===($=l.rift)||void 0===$?void 0:$.currentRift),lN.push((0,_.sd)(null==l?void 0:l.breeding)),lN.push(1e3-(null===(ll=l.accountOptions)||void 0===ll?void 0:ll[220])),lN.push((0,C.eA)(null==l?void 0:null===(lo=l.cooking)||void 0===lo?void 0:lo.kitchens)),lN.push(null==l?void 0:null===(le=l.breeding)||void 0===le?void 0:le.totalShinyLevels),lN.push((0,C.QR)(null==l?void 0:null===(li=l.cooking)||void 0===li?void 0:li.meals)),lN.push(null==l?void 0:null===(ln=l.breeding)||void 0===ln?void 0:ln.totalBreedabilityLv),lN.push(null==l?void 0:null===(lt=l.lab)||void 0===lt?void 0:lt.totalRawChips),lN.push(calcColoTotalScore(null==l?void 0:null===(la=l.highscores)||void 0===la?void 0:la.coloHighscores)),lN.push(null===(lu=l.accountOptions)||void 0===lu?void 0:lu[217]),lN.push((0,u.$M)(l)),lN.push(1e3-(null===(lr=l.accountOptions)||void 0===lr?void 0:lr[218])),lN.push((0,D.NW)(null==l?void 0:null===(ld=l.sailing)||void 0===ld?void 0:ld.boats)),lN.push(null==l?void 0:null===(ls=l.divinity)||void 0===ls?void 0:ls.godRank),lN.push(null==l?void 0:null===(lv=l.gaming)||void 0===lv?void 0:lv.totalPlantsPicked),lN.push((0,D.JR)(null==l?void 0:null===(lc=l.sailing)||void 0===lc?void 0:lc.artifacts)),lN.push(null==l?void 0:null===(lh=l.sailing)||void 0===lh?void 0:null===(lm=lh.lootPile)||void 0===lm?void 0:null===(lp=lm[0])||void 0===lp?void 0:lp.amount),lN.push(Math.max(...(null==l?void 0:null===(lf=l.sailing)||void 0===lf?void 0:null===(lg=lf.captains)||void 0===lg?void 0:lg.map(l=>{let{level:o}=l;return o}))||[])),lN.push(Math.max(null==l?void 0:null===(lM=l.gaming)||void 0===lM?void 0:lM.snailLevel,null===(ly=l.accountOptions)||void 0===ly?void 0:ly[210])),lN.push(null==l?void 0:null===(lk=l.gaming)||void 0===lk?void 0:lk.bestNugget),lN.push(null==l?void 0:null===(lT=l.looty)||void 0===lT?void 0:null===(lb=lT.lootyRaw)||void 0===lb?void 0:lb.length),lN.push(null==l?void 0:null===(lO=l.gaming)||void 0===lO?void 0:lO.bits),lN.push(Math.pow(2,null===(lS=l.accountOptions)||void 0===lS?void 0:lS[219])),lN.push(null==l?void 0:null===(lw=l.farming)||void 0===lw?void 0:lw.cropsFound),lN.push((0,Z.$8)(null==l?void 0:null===(lx=l.sneaking)||void 0===lx?void 0:lx.beanstalkData)),lN.push(null==l?void 0:null===(lC=l.summoning)||void 0===lC?void 0:lC.totalUpgradesLevels),lN.push(0),lN.push(null==l?void 0:null===(lP=l.sneaking)||void 0===lP?void 0:lP.unlockedFloors),lN.push(null==l?void 0:null===(lE=l.summoning)||void 0===lE?void 0:lE.familiarsOwned),lN.push(null==l?void 0:null===(lL=l.sneaking)||void 0===lL?void 0:lL.totalJadeEmporiumUnlocked),lN.push(calcMinigameTotalScore(null==l?void 0:null===(lF=l.highscores)||void 0===lF?void 0:lF.minigameHighscores)),lN.push((0,f.vR)(null==l?void 0:l.prayers)),lN.push(0),lN.push(null===(lB=l.accountOptions)||void 0===lB?void 0:lB[221]),lN.push(null===(lI=l.accountOptions)||void 0===lI?void 0:lI[222]),lN.push(null===(l_=l.arcade)||void 0===l_?void 0:l_.totalUpgradeLevels),lN},parseData=(l,o,e,i,n)=>{let t,a;try{console.info("%cStart Parsing","color:orange");let u=serializeData(l,o,e,i,n),r=serializeData(l,o,e,i,n,u);return t=null==r?void 0:r.accountData,a=null==r?void 0:r.charactersData,console.info("data",{account:t,characters:a}),console.info("%cParsed successfully","color: green"),{account:t,characters:a}}catch(l){console.error("Error while parsing data",l),void 0!==window.gtag&&window.gtag("event","error",{event_category:"error",event_label:"engagement",value:JSON.stringify(l)})}},serializeData=(l,o,e,d,s,y)=>{var z,Q,X,Y,J,K,$,ll,lo,le,li,ln,lt,la;let lu=(null==y?void 0:y.accountData)||{},lr=(null==y?void 0:y.charactersData)||[],ld=(0,i.ql)(l,o);lu.companions=(0,S.Rf)(e),lu.bundles=(0,S.kU)(l),lu.serverVars=s,lu.accountOptions=(null==l?void 0:l.OptionsListAccount)||(0,v.tryToParse)(null==l?void 0:l.OptLacc),lu.bribes=(0,h.t)(l),lu.timeAway=(0,v.tryToParse)(null==l?void 0:l.TimeAway)||(null==l?void 0:l.TimeAway),lu.alchemy=(0,p.p4)(l,lu,ld),lu.equippedBubbles=(0,p.Tw)(l,null===(z=lu.alchemy)||void 0===z?void 0:z.bubbles,ld),lu.storage=(0,m.cF)(l),lu.saltLick=(0,w.U)(l,lu.storage),lu.dungeons=(0,x.MR)(l,lu.accountOptions),lu.prayers=(0,f.hn)(l,lu.storage),lu.cards=(0,n.vm)(l,lu),lu.gemShopPurchases=getGemShop(l),lu.guild=(0,E.Sk)(l,d),lu.currencies=(0,S.DE)(lu,l),lu.stamps=(0,a.t2)(l,lu),lu.obols=(0,t.dR)(l),lu.looty=(0,S.NQ)(l);let{tasks:ls,tasksDescriptions:lv,meritsDescriptions:lc}=getTasks(l);lu.tasks=ls,lu.tasksDescriptions=lv,lu.meritsDescriptions=lc,lu.breeding=(0,_.N5)(l,lu),lu.cooking=(0,C.Tt)(l,lu),lu.divinity=(0,N.y0)(l,ld,lu),lu.postOfficeShipments=(0,q.NU)(l),lu.sneaking=(0,Z.JL)(l,s,ld,lu),lu.farming=(0,V.UA)(l,lu),lu.summoning=(0,W.a)(l,lu,ld),lu.lab=(0,P.Cs)(l,ld,lu),lu.towers=(0,k.d4)(l),lu.shrines=(0,r.Xz)(l,lu),lu.statues=(0,u.Xl)(l,ld),lu.achievements=(0,b.jy)(l),lu.lab.connectedPlayers=null===(Q=lu.lab.connectedPlayers)||void 0===Q?void 0:Q.map(l=>{var o,e;return{...l,isDivinityConnected:(null==lu?void 0:null===(e=lu.divinity)||void 0===e?void 0:null===(o=e.linkedDeities)||void 0===o?void 0:o[null==l?void 0:l.playerId])===4||(0,P.p8)(l,4)}}),lu.rift=(0,A.wE)(l),lu.arcade=(0,O.z)(l,lu,s);let lp=(0,P.c9)(lu.lab.labBonuses,7);lu.stamps=(0,a.Md)(lu.stamps,lp),lu.alchemy.vials=(0,p.B9)(lu),lu.equinox=(0,U.B)(l,lu);let lm=(0,P.c9)(lu.lab.labBonuses,8),lh=(0,P.pc)(lu.lab.jewels,16,lm);lu.cooking.meals=(0,C.wR)(lu.cooking.meals,lh);let lg=null==ld?void 0:ld.map(l=>{var o,e,i;let n=null==l?void 0:l.PersonalValuesMap;return{level:null!==(e=null==n?void 0:null===(o=n.StatList)||void 0===o?void 0:o[4])&&void 0!==e?e:0,class:null!==(i=null===M.classes||void 0===M.classes?void 0:M.classes[null==l?void 0:l.CharacterClass])&&void 0!==i?i:""}});lu.starSigns=(0,g.kz)(l);let{constellations:lf,rawConstellationsDone:lM}=(0,g.tp)(l);lu.constellations=lf,lu.rawConstellationsDone=lM,lu.charactersLevels=lg,lr=ld.map(o=>(0,i.SD)(o,lg,{...lu},l)),lu.farming=(0,V.nT)(lr,lu),lu.lab=(0,P.Cs)(l,ld,lu,lr),lu.alchemy.vials=(0,p.B9)(lu),X=[1,2,3,4,5,6],lu.finishedWorlds=void 0===X?void 0:X.reduce((l,o)=>({...l,["World".concat(o)]:!!(0,B.jZ)(lr,o)}),{}),lu.statues=(0,u.hE)(lu,lr);let ly=null==lr?void 0:lr.map(l=>{let{name:o,skillsInfo:e}=l;return{name:o,skillsInfo:e}});lu.totalSkillsLevels=(0,S.B4)(ly),lu.construction=(0,k.VR)(l,lu),lu.atoms=(0,G.nK)(l,lu);let lk=(0,D.yN)(l,lr,lu);lu.alchemy.p2w.sigils=(0,p.RG)(lu.alchemy.p2w.sigils,lk),lu.alchemy.liquidCauldrons=(0,p.jd)(lu),lu.gaming=(0,R.gm)(l,lr,lu,s),lu.atoms=(0,G.nK)(l,lu),lu.sailing=(0,D.x0)(l,lk,lr,lu,s,lg);let lb=(0,S.tS)(ly);lr=lr.map(l=>({...l,skillsInfo:lb[null==l?void 0:l.name]})),lu.accountLevel=null==lr?void 0:lr.reduce((l,o)=>{let{level:e}=o;return l+e},0),lu.highscores=getHighscores(l,lu),lu.shopStock=(0,c.u6)(l),lu.forge=getForge(l,lu),lu.refinery=(0,T.wt)(l,lu.storage,lu.tasks),lu.printer=(0,L.h)(l,lr,lu),lu.traps=(0,F.aQ)(ld),lu.quests=(0,B.zz)(lr),lu.islands=(0,j.P)(lu),lu.deathNote=(0,I.WA)(l,lr,lu),lu.killroy=(0,S.VS)(l,lr,lu,s),lu.anvil=lr.map(l=>{let{anvil:o}=l;return o});let lT=parseFloat(null==l?void 0:l.MoneyBANK),lO=null==lr?void 0:lr.reduce((l,o)=>l+parseFloat((null==o?void 0:o.money)?null==o?void 0:o.money:0),0),lS=lT+lO;lu.talentPoints=null==l?void 0:l.CYTalentPoints,lu.currencies.rawMoney=lS,lu.currencies.money=(0,v.getCoinsArray)(lS),lu.currencies.gems=null==l?void 0:l.GemsOwned,lu.currencies.KeysAll=(0,S.Ix)(null==lu?void 0:null===(Y=lu.currencies)||void 0===Y?void 0:Y.KeysAll,lr,lu),lu.currencies.ColosseumTickets=(0,S.cg)(null==lu?void 0:null===(J=lu.currencies)||void 0===J?void 0:J.ColosseumTickets,lr,lu),lu.currencies.penPals=null!==(la=null===(K=lu.accountOptions)||void 0===K?void 0:K[99])&&void 0!==la?la:0,lu.cooking.kitchens=(0,C.vu)(l,lr,lu),lu.libraryTimes=(0,S.W9)(l,lr,lu),lu.breeding=(0,_.XM)(l,lu),lu.divinity&&(lu.divinity.deities=(0,N.wl)(lu)),lr=null==lr?void 0:lr.map(l=>{let{carryCapBags:o}=l;return l.carryCapBags=null==o?void 0:o.map(o=>{let e=(0,S.HA)(null==o?void 0:o.Class),i=(0,S.z3)(e,l,lu);return{...o,capacityPerSlot:null==i?void 0:i.value,breakdown:null==i?void 0:i.breakdown,maxCapacity:(null==i?void 0:i.value)*(null==l?void 0:l.inventorySlots)}}),l.constructionSpeed=(0,i.x6)(l,lu),l.constructionExpPerHour=(0,i.NA)(l,lu),l}),lu.stamps=(0,a.bW)(lu,lr),lu.shrinesExpBonus=(0,r.n)(lr,lu),lu.msaTotalizer=(0,H.CU)(lu);let lw=Math.floor((null==lu?void 0:null===(lo=lu.deathNote)||void 0===lo?void 0:null===(ll=lo[0])||void 0===ll?void 0:null===($=ll.mobs)||void 0===$?void 0:$[0].kills)/1e6),lx=(null===(li=lu.lab.labBonuses)||void 0===li?void 0:null===(le=li[13])||void 0===le?void 0:le.active)?1.5*lw:0,lC=lw*(null===(lt=lu.lab.labBonuses)||void 0===lt?void 0:null===(ln=lt[9])||void 0===ln?void 0:ln.bonusOn);return lu.lab.labBonuses=(0,P.ww)(lu.lab.labBonuses,lC+lx,9),lu.totems=(0,H.Ew)(l),lu.tome=getTome(l,lu,lr,s),{accountData:lu,charactersData:lr}}},25081:function(l,o,e){e.d(o,{gN:function(){return getRawShopItems},u6:function(){return getShops}});var i=e(30925),n=e(70473);let getShops=l=>{let o=(null==l?void 0:l.ShopStock)||(0,i.tryToParse)(null==l?void 0:l.ShopStock);return parseShops(o)},parseShops=l=>l.reduce((l,o,e)=>{var i;let a=null===(i=Object.values(o))||void 0===i?void 0:i.reduce((l,o,i)=>{var a,u,r,d;let s=null==t?void 0:null===(a=t[e])||void 0===a?void 0:a[i],v=parseInt(o)||0;return v>0&&s?[...l,{amount:o,...null===(r=n.shops[e])||void 0===r?void 0:null===(u=r.items)||void 0===u?void 0:u[i],shopName:null===(d=n.shops[e])||void 0===d?void 0:d.name}]:l},[]);return[...l,a]},[]),getRawShopItems=()=>{var l;return null===(l=Object.entries(n.shops))||void 0===l?void 0:l.reduce((l,o)=>{var e;let[i,{items:n}]=o,a=null==n?void 0:null===(e=n.filter((l,o)=>{var e;return null==t?void 0:null===(e=t[i])||void 0===e?void 0:e[o]}))||void 0===e?void 0:e.map(l=>{let{rawName:o}=l;return o});return[...l,...a]},[]).toSimpleObject()},t={0:[3,8,13,14,17,23].toSimpleObject(),1:[2,8,9,13].toSimpleObject(),2:[0,1,2,3,4,5,6,7,8,9,10,18,19].toSimpleObject(),3:[12].toSimpleObject(),4:[0,1,2,8,9,10,19,22].toSimpleObject(),5:[2,3,4,8,9,10,11].toSimpleObject(),6:[0,1,2,3,4,5].toSimpleObject(),7:[0,1,2,3,4,5,6,7].toSimpleObject()}},70508:function(l,o,e){e.d(o,{aQ:function(){return getTraps},oH:function(){return getTrapsBonuses},q6:function(){return calcTotalCritters}});var i=e(70473),n=e(88054),t=e(30796);let getTraps=l=>parseTraps(l),parseTraps=l=>l.map(l=>{let o=(null==l?void 0:l.PldTraps)||[];return o.reduce((l,o)=>{var e;let[n,,t,a,u,r,d,s]=o;if(-1===n||"-1"===n)return l;let v=i.traps[r].find(l=>l.trapTime===d),c=d-t;return a?[...l,{name:null===(e=i.items[a])||void 0===e?void 0:e.displayName,rawName:a,crittersQuantity:u,trapType:r,trapExp:s,timeLeft:new Date().getTime()+1e3*c,trapData:v}]:l},[])}),calcTotalCritters=(l,o)=>{var e;let{critter:i,exp:n}=o;return null==l?void 0:null===(e=l.traps)||void 0===e?void 0:e.reduce((l,o)=>(o.reduce((o,e)=>{var t,a,u,r;let{crittersQuantity:d,trapExp:s,rawName:v}=e;l={...l,[v]:{critters:(null!==(u=null==l?void 0:null===(t=l[v])||void 0===t?void 0:t.critters)&&void 0!==u?u:0)+d*i,exp:(null!==(r=null==l?void 0:null===(a=l[v])||void 0===a?void 0:a.exp)&&void 0!==r?r:0)+s*n}}},{}),l),{})},getTrapsBonuses=(l,o)=>{let e=null==o?void 0:o.map((e,i)=>calcCrittersBonus({currentCharacterIndex:i,account:l,characters:o,isExp:!1})),i=null==o?void 0:o.map((e,i)=>calcCrittersBonus({currentCharacterIndex:i,account:l,characters:o,isExp:!0}));return{max:{critter:Math.max(...e||[1]),exp:Math.max(...i||[1])},min:{critter:Math.min(...e||[1]),exp:Math.min(...i||[1])}}},calcCrittersBonus=l=>{var o,e,i;let{currentCharacterIndex:a,account:u,characters:r,isExp:d}=l,s=d?0:(0,n.iu)(null==u?void 0:null===(o=u.alchemy)||void 0===o?void 0:o.vials,"TrapOvision");if((0,t.gW)(null==r?void 0:null===(e=r[a])||void 0===e?void 0:e.class,"Hunter")){let l=(0,t.L1)(r,2,"Hunter","EAGLE_EYE",d);s+=d?Math.max(40,Math.min((0,t._X)(null==l?void 0:l.talents,2,"EAGLE_EYE",d),99)):Math.max(50,(0,t._X)(null==l?void 0:l.talents,2,"EAGLE_EYE"))}else{let l=0;for(let o=0;o<(null==r?void 0:r.length);o++)if((0,t.gW)(null==r?void 0:null===(i=r[o])||void 0===i?void 0:i.class,"Hunter")){let o=(0,t.L1)(r,2,"Hunter","EAGLE_EYE",d,!0);l=Math.max(l,(0,t._X)(null==o?void 0:o.talents,2,"EAGLE_EYE",d,!0))}else l=Math.max(l,d?40:50);s+=l}return isNaN(s)?1:s/100}},77115:function(l,o,e){e.d(o,{UA:function(){return getFarming},YA:function(){return getTotalCrop},nT:function(){return updateFarming}});var i=e(30925),n=e(70473),t=e(8616),a=e(96707),u=e(88054),r=e(15893),d=e(13339),s=e(9339);let getFarming=(l,o)=>{let e=(0,i.tryToParse)(null==l?void 0:l.FarmUpg),n=(0,i.tryToParse)(null==l?void 0:l.FarmPlot),t=(0,i.tryToParse)(null==l?void 0:l.FarmCrop);return parseFarming(e,n,t,o)},parseFarming=(l,o,e,i)=>{var a,u;let r=null==i?void 0:null===(a=i.gemShopPurchases)||void 0===a?void 0:a.find((l,o)=>139===o),d=null==l?void 0:l.slice(2,n.marketInfo.length+2),v=null==l?void 0:l[1],c=null==l?void 0:l[19],p=null===n.marketInfo||void 0===n.marketInfo?void 0:n.marketInfo.map((l,o)=>{var e;let{cropId:i,cropIdIncrement:n,cost:t,costExponent:a,bonusPerLvl:u,maxLvl:r,bonus:s}=l,v=null!==(e=null==d?void 0:d[o])&&void 0!==e?e:0;return{...l,level:v,type:getCropType({index:o,cropId:i,cropIdIncrement:n,level:v}),cost:t*Math.pow(a,v),nextUpgrades:getNextUpgradesReq({index:o,cropId:i,cropIdIncrement:n,level:v,cost:t,costExponent:a}),costToMax:calcCostToMax({level:v,maxLvl:r,cost:t,costExponent:a}),value:s.includes("}")?1+v*u/100:v*u}}),m=null==o?void 0:o.map(l=>{var o;let[e,i,t,a,u,r,d]=l,s=Math.round((null===n.seedInfo||void 0===n.seedInfo?void 0:null===(o=n.seedInfo[e])||void 0===o?void 0:o.cropIdMin)+t);return{seedType:e,cropType:s,cropQuantity:u,cropProgress:d,progress:i,growthReq:14400*Math.pow(1.5,e),isLocked:a,currentOG:r,cropRawName:"FarmCrop".concat(s,".png"),seedRawName:"Seed_".concat(e,".png")}}),h=getMarketBonus(p,"LAND_PLOTS"),g=Object.entries(e||{}).reduce((l,o)=>{var e,i;let[t,a]=o,u=n.seedInfo.find(l=>parseFloat(t)>=l.cropIdMin&&parseFloat(t)<=l.cropIdMax);return l+parseFloat(a)*Math.pow(2.5,null!==(e=null==u?void 0:u.seedId)&&void 0!==e?e:0)*Math.pow(1.08,t-(null!==(i=null==u?void 0:u.cropIdMin)&&void 0!==i?i:0))},0),f=null!==(u=(0,t.x5)(i,"Deal_Sweetening"))&&void 0!==u?u:0,M=getMarketBonus(p,"MORE_BEENZ"),y=(0,s.k6)(null==i?void 0:i.achievements,363);return{plot:m,crop:{...e,beans:v},market:p,cropsFound:Object.keys(e||{}).length,cropsOnVine:Math.floor(1+(h+20*r)/100),instaGrow:c,beanTrade:Math.pow(g,.5)*(1+M/100)*(1+(25*f+5*y)/100)}},getCropsWithStockEqualOrGreaterThan=(l,o)=>{var e;return null===(e=Object.values(l))||void 0===e?void 0:e.filter(l=>l>=o).length},getMarketUpgradeBonusValue=(l,o,e)=>{let i=l.find((l,o)=>o===e);if(!i)return 0;switch(e){case 7:case 13:return 0;case 9:return getMarketUpgradeBonusValue(l,o,15)*Math.pow(1+i.level*i.bonusPerLvl/100,getCropsWithStockEqualOrGreaterThan(o,200));case 11:return 1+i.level*i.bonusPerLvl/100;case 10:return getMarketUpgradeBonusValue(l,o,15)*(1+i.level*i.bonusPerLvl*getCropsWithStockEqualOrGreaterThan(o,1e3)/100);case 12:return getMarketUpgradeBonusValue(l,o,15)*(1+i.level*i.bonusPerLvl*getCropsWithStockEqualOrGreaterThan(o,2500)/100);case 14:return getMarketUpgradeBonusValue(l,o,15)*(1+i.level*i.bonusPerLvl*getCropsWithStockEqualOrGreaterThan(o,1e4)/100);case 15:return 1+i.level*i.bonusPerLvl*getCropsWithStockEqualOrGreaterThan(o,1e5)/100;default:return i.bonus.includes("}")?1+i.level*i.bonusPerLvl/100:i.level*i.bonusPerLvl}},updateFarming=(l,o)=>{var e,i,n,r;let v=null==o?void 0:null===(i=o.farming)||void 0===i?void 0:null===(e=i.market)||void 0===e?void 0:e.map((l,e)=>{var i,n;return console.log(l.name,e),{...l,value:getMarketUpgradeBonusValue(null==o?void 0:null===(i=o.farming)||void 0===i?void 0:i.market,null==o?void 0:null===(n=o.farming)||void 0===n?void 0:n.crop,e)}}),c=null==o?void 0:null===(r=o.farming)||void 0===r?void 0:null===(n=r.plot)||void 0===n?void 0:n.map(e=>{var i,n;let r=getMarketBonus(null==o?void 0:null===(i=o.farming)||void 0===i?void 0:i.market,"OG_FERTILIZER"),c=(0,t.vq)(o,"Taffy_Disc"),p=(0,a.o9)(null==l?void 0:l[0],o,"OG_Chance"),m=(0,s.k6)(null==o?void 0:o.achievements,365),h=Math.pow(.4,(null==e?void 0:e.currentOG)+1)*Math.max(1,r)*(1+c/100)*(1+p/100)*(1+15*m/100),g=getMarketBonus(v,"NUTRITIOUS_SOIL"),f=getMarketBonus(v,"SPEED_GMO"),M=(0,u.iu)(null==o?void 0:null===(n=o.alchemy)||void 0===n?void 0:n.vials,"6FarmSpd"),y=(0,d.R)(o,"<x Farming SPD"),k=Math.max(1,f)*(1+(g+M)/100)*(1+y/100),b=((null==e?void 0:e.growthReq)-(null==e?void 0:e.cropProgress))/k,T=Math.min(1e9,Math.max(1,Math.pow(2,null==e?void 0:e.currentOG)));return{...e,nextOGChance:h,growthRate:k,ogMulti:T,timeLeft:b}});return{...(null==o?void 0:o.farming)||{},plot:c,cropDepot:getCropDepotBonuses(o),market:v}},getNextUpgradesReq=l=>{let{index:o,cropId:e,cropIdIncrement:i,level:n,cost:t,costExponent:a,isUnique:u=!0}=l,r=new Map,d=0;for(;r.size<4;){let l=getCropType({index:o,cropId:e,cropIdIncrement:i,level:n+d}),s=t*Math.pow(a,n+d);r.has(l)&&u?r.set(l,r.get(l)+s):r.set(l,s),d++}return Array.from(r.entries()).map(l=>{let[o,e]=l;return{type:o,cost:e}})},getCropType=l=>{let{index:o,cropId:e,cropIdIncrement:i,level:n}=l;return 0===o?Math.floor(e+i*(n+(2*Math.floor(n/3)+Math.floor(n/4)))):Math.floor(e+i*n)},getCropDepotBonuses=l=>{var o,e,i,n,a,u,d,s,v;let c=(0,r.c9)(null==l?void 0:null===(o=l.lab)||void 0===o?void 0:o.labBonuses,17),p=(0,r.c9)(null==l?void 0:l.lab.labBonuses,8),m=(0,r.pc)(null==l?void 0:null===(e=l.lab)||void 0===e?void 0:e.jewels,20,p),h={damage:{name:"DMG",value:0},gamingEvo:{name:"Gaming Evo",value:0},jadeCoin:{name:"Jade Coin",value:0},cookingSpeed:{name:"Meal Spd",value:0},cash:{name:"Cash",value:0},shiny:{name:"Pet Rate",value:0},critters:{name:"Critters",value:0}};return(0,t.x5)(l,"Reinforced_Science_Pencil")&&(h.damage.value=20*Math.round(null==l?void 0:null===(i=l.farming)||void 0===i?void 0:i.cropsFound)*(1+(c+m)/100)),(0,t.x5)(l,"Science_Pen")&&(h.gamingEvo.value=Math.pow(1.02,Math.round(null==l?void 0:null===(n=l.farming)||void 0===n?void 0:n.cropsFound))*(1+(c+m)/100)),(0,t.x5)(l,"Science_Marker")&&(h.jadeCoin.value=8*Math.round(null==l?void 0:null===(a=l.farming)||void 0===a?void 0:a.cropsFound)*(1+(c+m)/100)),(0,t.x5)(l,"Science_Featherpen")&&(h.cookingSpeed.value=Math.pow(1.1,Math.round(null==l?void 0:null===(u=l.farming)||void 0===u?void 0:u.cropsFound))*(1+(c+m)/100)),(0,t.x5)(l,"Science_Environmentally_Sourced_Pencil")&&(h.cash.value=15*Math.round(null==l?void 0:null===(d=l.farming)||void 0===d?void 0:d.cropsFound)*(1+(c+m)/100)),(0,t.x5)(l,"Science_Crayon")&&(h.shiny.value=7*Math.round(null==l?void 0:null===(s=l.farming)||void 0===s?void 0:s.cropsFound)*(1+(c+m)/100)),(0,t.x5)(l,"Science_Paintbrush")&&(h.critters.value=.1*Math.round(null==l?void 0:null===(v=l.farming)||void 0===v?void 0:v.cropsFound)*(1+(c+m)/100)),h},getMarketBonus=(l,o)=>{var e,i;return null!==(i=null===(e=null==l?void 0:l.find(l=>{let{name:e}=l;return e===o}))||void 0===e?void 0:e.value)&&void 0!==i?i:0},calcCostToMax=l=>{let{level:o,maxLvl:e,cost:i,costExponent:n}=l,t=0;for(let l=o;l<e;l++)t+=i*Math.pow(n,l);return null!=t?t:0},getTotalCrop=l=>null==l?void 0:l.reduce((l,o)=>{let{seedType:e,cropQuantity:i,cropRawName:n,ogMulti:t}=o;return -1===e?l:{...l,[n]:((null==l?void 0:l[n])||0)+i*t}},{})}}]);
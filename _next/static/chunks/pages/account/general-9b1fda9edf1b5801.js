(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9511],{2404:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/general",function(){return c(3349)}])},3349:function(c,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return H}});var d=a(5893),e=a(6886),f=a(7720),g=a(6447),h=a(9290),i=a(8801),j=a(1820),k=a(5231),l=function(a){var b,e=a.money,h=a.WorldTeleports,l=a.ObolFragments,c=a.ColosseumTickets,m=a.SilverPens,n=a.gems,f=a.KeysAll,o=a.minigamePlays;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z,{className:"box",money:void 0===e?[]:e}),(0,d.jsxs)(g.Z,{mt:2,flexWrap:"wrap",gap:1,justifyContent:"center",direction:"row",children:[(0,d.jsx)(j.M5,{stat:h,icon:"rtt0"}),(0,d.jsx)(j.M5,{stat:l,icon:"ObolFrag"}),(0,d.jsx)(k.Z,{title:(0,d.jsx)(g.Z,{gap:2,children:null==c?void 0:null===(b=c.allTickets)|| void 0===b?void 0:b.map(function(a,f){var b=a.rawName,c=(a.amount,a.totalAmount),h=a.amountPerDay,e=a.daysSincePickup;return(0,d.jsxs)(g.Z,{direction:"row",gap:1,children:[(0,d.jsx)(g.Z,{children:(0,d.jsx)(j.M5,{stat:"",icon:b,img:{style:{width:72,height:72,objectFit:"contain"}}})}),(0,d.jsxs)(g.Z,{children:[(0,d.jsx)(j.uQ,{title:"Tickets per day",value:h}),(0,d.jsx)(j.uQ,{title:"Days since pickup",value:isNaN(e)?0:e}),(0,d.jsx)(j.uQ,{title:"Total Keys",value:isNaN(c)?0:c})]})]},"".concat(b,"-").concat(f))})}),children:(0,d.jsx)(j.M5,{stat:c.totalAmount,icon:"TixCol"})}),(0,d.jsx)(j.M5,{stat:m,icon:"SilverPen"}),(0,d.jsx)(j.M5,{stat:n,icon:"PremiumGem"}),(0,d.jsx)(j.M5,{stat:o,img:{style:{width:72,height:72,objectFit:"contain"}},icon:"MGp"}),null==f?void 0:f.map(function(a,f){var b=a.rawName,h=a.amount,c=a.totalAmount,i=a.amountPerDay,e=a.daysSincePickup;return(0,d.jsx)(k.Z,{title:(0,d.jsxs)(g.Z,{children:[(0,d.jsx)(j.uQ,{title:"Keys per day",value:i}),(0,d.jsx)(j.uQ,{title:"Days since pickup",value:isNaN(e)?0:e}),(0,d.jsx)(j.uQ,{title:"Total Keys",value:isNaN(c)?0:c})]}),children:(0,d.jsx)(j.M5,{stat:h,icon:b})},"".concat(b,"-").concat(f))})]})]})},m=a(5861),n=a(3133),o=a(5862);function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var q=function(a){var f=a.name,g=a.description,b=a.shrineLevel,c=a.progress,e=Math.floor(20*(b-1)+6*b*Math.pow(1.63,b-1));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(m.Z,{fontWeight:"bold",variant:"h5",children:[(0,n.cleanUnderscore)(f)," Lv.",b]}),(0,d.jsx)(m.Z,{variant:"body1",children:g}),(0,d.jsx)(m.Z,{fontWeight:"bold",children:"Progress:"}),(0,d.jsx)(o.Z,{percent:c/e*100,label:!1}),(0,d.jsxs)(m.Z,{variant:"body1",children:[(0,n.numberWithCommas)(parseInt(c))," / ",(0,n.numberWithCommas)(parseInt(e))]})]})},r=function(b){var a=b.shrines;return(0,d.jsx)(g.Z,{justifyContent:"center",direction:"row",flexWrap:"wrap",gap:2,children:null==a?void 0:a.map(function(a,c){var e=a.name,f=a.rawName,g=a.shrineLevel,b=a.desc,h=a.bonus,i=(0,n.cleanUnderscore)(null==b?void 0:b.replace("{",(0,n.kFormatter)(h,2)));return(0,d.jsx)(k.Z,{title:(0,d.jsx)(q,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){p(d,a,c[a])})}return d}({},a,{description:i})),children:(0,d.jsx)(j.M5,{stat:g,icon:f})},e+c)})})},s=a(8216);function t(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var u=function(a){var c=a.effect,g=a.bonus,h=a.name,b=a.level,e=a.progress,f=Math.round(Math.pow(b,1.17)*Math.pow(1.35,b/10)+1),i=(0,n.cleanUnderscore)((0,n.pascalCase)(null==c?void 0:c.replace(/(%?)(@)/,"$2$1_").replace("@",Math.round(b*g))));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.Z,{fontWeight:"bold",variant:"h5",children:(0,s.Z)((0,n.cleanUnderscore)(h.toLowerCase()))}),(0,d.jsx)(m.Z,{variant:"body1",children:i}),(0,d.jsx)(o.Z,{percent:e/f*100,label:!1}),(0,d.jsxs)(m.Z,{variant:"body2",children:[Math.floor(e)," / ",f]})]})},v=function(b){var a=b.statues;return(0,d.jsx)(g.Z,{flexWrap:"wrap",direction:"row",justifyContent:"center",gap:2,children:null==a?void 0:a.map(function(a,b){var c=a.name,e=a.rawName,f=a.level;return(0,d.jsx)("div",{children:(0,d.jsx)(k.Z,{title:(0,d.jsx)(u,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){t(d,a,c[a])})}return d}({},a)),children:(0,d.jsx)(j.M5,{stat:f,icon:e})})},c+b)})})},w=a(6242),x=a(4267),y=a(7294),z=function(a){var c=a.title,b=a.highscore;return(0,d.jsxs)(g.Z,{gap:1.5,justifyContent:"center",children:[(0,d.jsx)(m.Z,{variant:"h5",children:c}),(0,d.jsx)(w.Z,{children:(0,d.jsx)(x.Z,{children:null==b?void 0:b.map(function(a,b){var e=(null==a?void 0:a.score)?null==a?void 0:a.score:a,c=(null==a?void 0:a.minigame)||"".concat(b+1);return(0,d.jsxs)("div",{children:[c?(0,d.jsxs)(m.Z,{variant:"body1",component:"span",children:[c.capitalize(),": "]}):null,(0,d.jsx)(m.Z,{variant:"body1",component:"span",children:(0,n.numberWithCommas)(parseInt(e))})]},"".concat(b,"-").concat(b))})})})]})},A=function(a){var e=a.text,f=a.icon,b=a.stat,c=a.formatting,h="k"===(void 0===c?"commas":c)?(0,n.kFormatter)(b):(0,n.numberWithCommas)(b);return(0,d.jsxs)(g.Z,{direction:"row",alignItems:"center",gap:1.5,children:[(0,d.jsx)("img",{style:{width:40},src:"".concat(n.prefix,"data/").concat(f,".png"),alt:""}),(0,d.jsxs)(m.Z,{variant:"body1",component:"span",children:[e," :"]}),(0,d.jsx)(m.Z,{variant:"body1",component:"span",children:h})]})},B=function(t){var b,c,e,f,h,i,j,k,l,n,o,p,q,r,s,a=t.account,z=function(b){var a;return b?null===(a=Object.values(b))|| void 0===a?void 0:a.reduce(function(b,a){return b+(null==a?void 0:a.reduce(function(a,b){return a+b.level},0))},0):0},B=function(b){var a;return b?null===(a=Object.values(b))|| void 0===a?void 0:a.reduce(function(b,a){return b+(null==a?void 0:a.reduce(function(a,b){return a+b.level},0))},0):0},C=function(b){var a;return b?null===(a=Object.values(b))|| void 0===a?void 0:a.reduce(function(a,b){return a+b.level},0):0},D=function(b){var a;return b?null===(a=Object.values(b))|| void 0===a?void 0:a.reduce(function(a,b){return a+b.shrineLevel},0):0},u=(0,y.useMemo)(function(){var b;return z(null==a?void 0:null===(b=a.alchemy)|| void 0===b?void 0:b.bubbles)},[a]),v=(0,y.useMemo)(function(){return B(null==a?void 0:a.stamps)},[a]),w=(0,y.useMemo)(function(){return C(null==a?void 0:a.statues)},[a]),x=(0,y.useMemo)(function(){return D(null==a?void 0:a.shrines)},[a]);return(0,d.jsxs)(g.Z,{children:[(0,d.jsx)(m.Z,{variant:"h5",children:"Totals"}),(0,d.jsx)(A,{text:"Total Bubbles",icon:"aBrewOptionA0",stat:u}),(0,d.jsx)(A,{text:"Total Stamps",icon:"StampA34",stat:v}),(0,d.jsx)(A,{text:"Total Statues",icon:"EquipmentStatues1",stat:w}),(0,d.jsx)(A,{text:"Total Shrines",icon:"UISkillIcon639",stat:x}),(0,d.jsx)(A,{text:"Highest Damage",icon:"StampA8",stat:null==a?void 0:null===(b=a.tasks)|| void 0===b?void 0:null===(c=b[0])|| void 0===c?void 0:null===(e=c[1])|| void 0===e?void 0:e[0],formatting:"k"}),(0,d.jsx)(A,{text:"PO Orders",icon:"DeliveryBox",stat:null==a?void 0:null===(f=a.tasks)|| void 0===f?void 0:null===(h=f[0])|| void 0===h?void 0:null===(i=h[1])|| void 0===i?void 0:i[5]}),(0,d.jsx)(A,{text:"Monsters Killed",icon:"UISkillIcon110",stat:null==a?void 0:null===(j=a.tasks)|| void 0===j?void 0:null===(k=j[0])|| void 0===k?void 0:null===(l=k[0])|| void 0===l?void 0:l[0]}),(0,d.jsx)(A,{text:"Refined Salts",icon:"TaskSc6",stat:null==a?void 0:null===(n=a.tasks)|| void 0===n?void 0:null===(o=n[0])|| void 0===o?void 0:null===(p=o[2])|| void 0===p?void 0:p[0]}),(0,d.jsx)(A,{text:"Total Mats Printed",icon:"PrintSlot",stat:null==a?void 0:null===(q=a.tasks)|| void 0===q?void 0:null===(r=q[0])|| void 0===r?void 0:null===(s=r[2])|| void 0===s?void 0:s[3],formatting:"k"})]})},C=a(819),D=a(134),E=function(b){var h=b.libraryTimes,i=b.lastUpdated,a=h||{},j=a.bookCount,c=a.next,e=a.breakpoints;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(g.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,d.jsx)("img",{src:"".concat(n.prefix,"data/Libz.png"),alt:""}),(0,d.jsx)("h3",{children:"Library"})]}),(0,d.jsxs)("h4",{children:["Book count: ",j]}),(0,d.jsxs)(g.Z,{direction:"row",gap:1,alignItems:"center",children:[(0,d.jsx)(m.Z,{sx:{width:100},children:"Next book in: "})," ",c>0?(0,d.jsx)(D.Z,{type:"countdown",lastUpdated:i,date:new Date().getTime()+1e3*c}):(0,d.jsx)(m.Z,{variant:"caption",children:"Wait for game update"})]}),null==e?void 0:e.map(function(b,c){var e=b.breakpoint,a=b.time;return a>0?(0,d.jsxs)(y.Fragment,{children:[(0,d.jsx)(f.Z,{sx:{my:1}}),(0,d.jsxs)(g.Z,{direction:"row",gap:1,children:[(0,d.jsxs)(m.Z,{sx:{width:100},children:[e," books in: "]})," ",a>0?(0,d.jsx)(D.Z,{type:"countdown",lastUpdated:i,date:new Date().getTime()+1e3*a}):(0,d.jsx)(m.Z,{variant:"caption",children:"Wait for game update"})]})]},"book-timer"+c):null})]})};function F(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var G={marginTop:4,display:{xs:"flex",sm:"none"}},H=function(){var b,c,i,j,k,m,n,o,p,a=(0,y.useContext)(C.I).state;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(e.ZP,{container:!0,justifyContent:"center",gap:5,columns:{md:8,lg:12,xl:16},children:[(0,d.jsxs)(e.ZP,{item:!0,xs:12,sm:12,md:5,children:[(0,d.jsx)(h.Z,{obols:null==a?void 0:null===(b=a.account)|| void 0===b?void 0:b.obols,type:"account"}),(0,d.jsx)(f.Z,{sx:G})]}),(0,d.jsxs)(e.ZP,{item:!0,xs:3,children:[(0,d.jsx)(l,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){F(d,a,c[a])})}return d}({},(null==a?void 0:null===(c=a.account)|| void 0===c?void 0:c.currencies)||{})),(0,d.jsx)(f.Z,{sx:G})]}),(0,d.jsxs)(e.ZP,{item:!0,xs:3,children:[(0,d.jsx)(r,{shrines:null==a?void 0:null===(i=a.account)|| void 0===i?void 0:i.shrines}),(0,d.jsx)(f.Z,{sx:G})]}),(0,d.jsxs)(e.ZP,{item:!0,xs:3,children:[(0,d.jsx)(E,{libraryTimes:null==a?void 0:null===(j=a.account)|| void 0===j?void 0:j.libraryTimes,lastUpdated:null==a?void 0:a.lastUpdated}),(0,d.jsx)(f.Z,{sx:G})]}),(0,d.jsxs)(e.ZP,{item:!0,xs:3,children:[(0,d.jsx)(v,{statues:null==a?void 0:null===(k=a.account)|| void 0===k?void 0:k.statues}),(0,d.jsx)(f.Z,{sx:G})]}),(0,d.jsx)(e.ZP,{item:!0,xs:3,children:(0,d.jsxs)(g.Z,{gap:1.5,children:[(0,d.jsx)(z,{title:"Colosseum Highscores",highscore:null==a?void 0:null===(m=a.account)|| void 0===m?void 0:null===(n=m.highscores)|| void 0===n?void 0:n.coloHighscores}),(0,d.jsx)(f.Z,{sx:G}),(0,d.jsx)(z,{title:"Minigames Highscores",highscore:null==a?void 0:null===(o=a.account)|| void 0===o?void 0:null===(p=o.highscores)|| void 0===p?void 0:p.minigameHighscores}),(0,d.jsx)(f.Z,{sx:G})]})}),(0,d.jsx)(e.ZP,{item:!0,xs:3,children:(0,d.jsx)(B,{account:null==a?void 0:a.account})})]})})}}},function(a){a.O(0,[9030,2986,5625,9774,2888,179],function(){return a(a.s=2404)}),_N_E=a.O()}])
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3832],{20466:function(l,n,e){e.d(n,{Z:function(){return o}});var i=e(19013),t=e(13882);function o(l){return(0,t.Z)(1,arguments),(0,i.Z)(l).getDay()}},33913:function(l,n,e){e.d(n,{Z:function(){return o}});var i=e(19013),t=e(13882);function o(l){return(0,t.Z)(1,arguments),(0,i.Z)(l).getTime()<Date.now()}},49352:function(l,n,e){e.d(n,{Z:function(){return o}});var i=e(19013),t=e(13882);function o(l){return(0,t.Z)(1,arguments),4===(0,i.Z)(l).getDay()}},85148:function(l,n,e){e.d(n,{Z:function(){return u}});var i=e(77349),t=e(20466),o=e(13882);function u(l){return(0,o.Z)(1,arguments),function(l,n){(0,o.Z)(2,arguments);var e=4-(0,t.Z)(l);return e<=0&&(e+=7),(0,i.Z)(l,e)}(l,4)}},23284:function(l,n,e){e.d(n,{Z:function(){return u}});var i=e(13882),t=e(20466),o=e(7069);function u(l){return(0,i.Z)(1,arguments),function(l,n){(0,i.Z)(2,arguments);var e=(0,t.Z)(l)-4;return e<=0&&(e+=7),(0,o.Z)(l,e)}(l,4)}},28366:function(l,n,e){e.d(n,{Z:function(){return t}});var i=e(69119);function t(){return(0,i.Z)(Date.now())}},24051:function(l,n,e){e.d(n,{J:function(){return s},h:function(){return a}});var i=e(39574),t=e(44891),o=e(64529),u=e(84310),r=e(91909),d=e(12458),v=e(47315);let a=(l,n,e)=>{let t=(0,i.tryToParse)(null==l?void 0:l.Print)||(null==l?void 0:l.Printer),o=(0,i.tryToParse)(null==l?void 0:l.PrinterXtra)||(null==l?void 0:l.PrinterXtra);return c(t,o,n,e)},c=(l,n,e,d)=>{var v,a,c,s,f,m,p;let h=(0,t.s8)(d,e,3),b=(0,o.YS)(null==d?void 0:null===(v=d.sailing)||void 0===v?void 0:v.artifacts,"Gold_Relic"),Z=(null==b?void 0:b.acquired)===3?null==b?void 0:b.eldritchMultiplier:(null==b?void 0:b.acquired)===2?null==b?void 0:b.ancientMultiplier:0,y=null===(a=null==d?void 0:null===(c=d.lab)||void 0===c?void 0:null===(s=c.labBonuses)||void 0===s?void 0:s.find(l=>"Wired_In"===l.name))||void 0===a?void 0:a.active,S=null==d?void 0:null===(f=d.lab)||void 0===f?void 0:f.connectedPlayers,O=null==d?void 0:null===(m=d.accountOptions)||void 0===m?void 0:m[125],g=null==d?void 0:null===(p=d.accountOptions)||void 0===p?void 0:p[138],j=null==e?void 0:e.filter(l=>(null==l?void 0:l.class)==="Divine_Knight"),k=null==j?void 0:j.reduce((l,n)=>{let{talents:e}=n,i=(0,u._X)(e,3,"KING_OF_THE_REMEMBERED",!1,!0);return i>l?i:l},0),P=(0,r.fi)(null==d?void 0:d.totalSkillsLevels,null==d?void 0:d.rift,3),_=l.slice(5,l.length);return e.map((l,e)=>{let t=_.slice(14*e,14*e+14);if(n){let l=null==n?void 0:n.slice(10*e,10*e+10);t.splice(-4,0,l),t=t.flat()}return t.reduce((l,n,o,u)=>{if(o%2==0){let n=u.slice(o,o+2).map((l,n)=>l),r=n[1],d=null==S?void 0:S.find(l=>{let{playerId:n}=l;return n===e}),v=(1+O*(2+Z)/100)*(1+k*(0,i.lavaLog)(g)/100)*(1+P/100),a=y&&d?h.includes(e)?6*v:2*v:h.includes(e)?3*v:v;r*=a;let c=[{name:"Lab",value:d&&y?2:0},{name:"Harriep God",value:h.includes(e)?3:0},{name:"Skill Mastery",value:1+P/100},{name:"Divine Knight",value:1+k*(0,i.lavaLog)(g)/100},{name:"Gold Relic",value:1+O*(2+Z)/100}];return[...l,{item:n[0],value:n[1],active:o>=t.length-4,boostedValue:r,breakdown:c}]}return l},[])})},s=(l,n)=>{var e,i,t;let{printer:o,storage:u}=l||{},r=(0,v.Xp)(null==l?void 0:null===(e=l.accountOptions)||void 0===e?void 0:e[133]),a=null==o?void 0:o.reduce((l,n)=>(n.forEach(n=>{let{boostedValue:e,item:i,active:t}=n;if("Blank"!==i&&t){if(null==l?void 0:l[i]){var o;l[i]={...l[i],boostedValue:e+(null===(o=l[i])||void 0===o?void 0:o.boostedValue)}}else{let n=(0,d.ju)(u,i,!0,!0);l[i]={boostedValue:e,atomable:n>=r,storageItem:n}}}}),l),{});a=f(a,r,n);let c=null===(i=Object.entries(a))||void 0===i?void 0:i.reduce((l,n)=>{let[,e]=n;return l+(null!==(t=null==e?void 0:e.atoms)&&void 0!==t?t:0)},0);return{...a,atom:{boostedValue:c,atoms:c}}},f=function(){var l;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;return null===(l=Object.entries(n))||void 0===l?void 0:l.reduce((l,n)=>{let t,o,[u,r]=n,{boostedValue:d,atomable:v,storageItem:a}=r;if(null==i?void 0:i.checked)o=v;else{let l=d>=e&&!v,n=d>e-a&&!v;t=l?d-e:n?d-(e-a):d,o=l||n||v}return l[u]={...r,...o?{atoms:t/1e7}:{}},l},{})}},9336:function(l,n,e){e.d(n,{B:function(){return d},w:function(){return u}});var i=e(39574),t=e(72032),o=e(12458);let u=(l,n,e)=>{let t=(0,i.tryToParse)(null==l?void 0:l.Refinery)||(null==l?void 0:l.Refinery);return r(t,n,e)},r=(l,n,e)=>{var i,u,r,d,v,a;let c=null==l?void 0:l[1],s=null==l?void 0:l[2],f=null==c?void 0:c.reduce((l,n,e)=>{var i;return"Blank"!==n?[...l,{rawName:n,name:null===(i=t.items[n])||void 0===i?void 0:i.displayName,amount:null==s?void 0:s[e],owner:"refinery"}]:l},[]),m=[...n,...f],p=null===(i=t.randomList[18])||void 0===i?void 0:i.split(" "),h=null==e?void 0:null===(u=e[2])||void 0===u?void 0:null===(r=u[2])||void 0===r?void 0:r[6],b=null==l?void 0:l.slice(3,3+(null==l?void 0:null===(d=l[0])||void 0===d?void 0:d[0])),Z=null==b?void 0:b.reduce((l,n,e)=>{let i="Refinery".concat(e+1),[u,r,,d,v]=n,{saltName:a,cost:c}=null===t.refinery||void 0===t.refinery?void 0:t.refinery[i],s=null==c?void 0:c.map(l=>{let n=(0,o.ju)(m,null==l?void 0:l.name,!0);return{...l,totalAmount:n}});return[...l,{saltName:a,cost:s,rawName:i,powerCap:parseFloat(Math.max(null==p?void 0:p[Math.min(r,(null==p?void 0:p.length)-2)],25)),refined:u,rank:r,active:d,autoRefinePercentage:v}]},[]);return{salts:Z,refinerySaltTaskLevel:h,timePastCombustion:null==l?void 0:null===(v=l[0])||void 0===v?void 0:v[1],timePastSynthesis:null==l?void 0:null===(a=l[0])||void 0===a?void 0:a[2],totalLevels:null==Z?void 0:Z.reduce((l,n)=>{let{rank:e}=n;return l+e},0)}},d=(l,n,e,i)=>null==e?void 0:e.filter(e=>{var t;let{rawName:o,quantity:u,totalAmount:r}=e;return r<Math.floor(Math.pow(n,(null==o?void 0:o.includes("Refinery"))&&l<=(null==i?void 0:null===(t=i.refinery)||void 0===t?void 0:t.refinerySaltTaskLevel)?1.3:1.5))*u})},85417:function(l,n,e){e.d(n,{gN:function(){return r},u6:function(){return o}});var i=e(39574),t=e(72032);let o=l=>{let n=(null==l?void 0:l.ShopStock)||(0,i.tryToParse)(null==l?void 0:l.ShopStock);return u(n)},u=l=>l.reduce((l,n,e)=>{var i;let o=null===(i=Object.values(n))||void 0===i?void 0:i.reduce((l,n,i)=>{var o,u,r,v;let a=null==d?void 0:null===(o=d[e])||void 0===o?void 0:o[i],c=parseInt(n)||0;return c>0&&a?[...l,{amount:n,...null===(u=t.shops[e])||void 0===u?void 0:null===(r=u.items)||void 0===r?void 0:r[i],shopName:null===(v=t.shops[e])||void 0===v?void 0:v.name}]:l},[]);return[...l,o]},[]),r=()=>{var l;return null===(l=Object.entries(t.shops))||void 0===l?void 0:l.reduce((l,n)=>{var e;let[i,{items:t}]=n,o=null===(e=null==t?void 0:t.filter((l,n)=>{var e;return null==d?void 0:null===(e=d[i])||void 0===e?void 0:e[n]}))||void 0===e?void 0:e.map(l=>{let{rawName:n}=l;return n});return[...l,...o]},[]).toSimpleObject()},d={0:[8,14,17].toSimpleObject(),1:[2,8,9].toSimpleObject(),2:[0,1,2,3,8,9,10].toSimpleObject(),3:[].toSimpleObject(),4:[0,1,2,8,9,10,22].toSimpleObject(),5:[2,3,4,8,9,10,11].toSimpleObject(),6:[0,1,2,3,4,5].toSimpleObject()}}}]);
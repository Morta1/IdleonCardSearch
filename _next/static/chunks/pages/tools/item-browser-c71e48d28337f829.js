(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4495],{42761:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(64938)),o=n(85893),l=(0,r.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=l},87109:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i,r=n(63366),o=n(87462),l=n(67294),a=n(86010),s=n(94780),u=n(98216),c=n(15861),d=n(47167),m=n(74423),p=n(90948),v=n(1588),h=n(34867);function getInputAdornmentUtilityClass(e){return(0,h.Z)("MuiInputAdornment",e)}let f=(0,v.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var b=n(71657),x=n(85893);let j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],useUtilityClasses=e=>{let{classes:t,disablePointerEvents:n,hiddenLabel:i,position:r,size:o,variant:l}=e,a={root:["root",n&&"disablePointerEvents",r&&`position${(0,u.Z)(r)}`,l,i&&"hiddenLabel",o&&`size${(0,u.Z)(o)}`]};return(0,s.Z)(a,getInputAdornmentUtilityClass,t)},g=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`position${(0,u.Z)(n.position)}`],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})(({theme:e,ownerState:t})=>(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),Z=l.forwardRef(function(e,t){let n=(0,b.Z)({props:e,name:"MuiInputAdornment"}),{children:s,className:u,component:p="div",disablePointerEvents:v=!1,disableTypography:h=!1,position:f,variant:Z}=n,y=(0,r.Z)(n,j),w=(0,m.Z)()||{},O=Z;Z&&w.variant,w&&!O&&(O=w.variant);let E=(0,o.Z)({},n,{hiddenLabel:w.hiddenLabel,size:w.size,disablePointerEvents:v,position:f,variant:O}),_=useUtilityClasses(E);return(0,x.jsx)(d.Z.Provider,{value:null,children:(0,x.jsx)(g,(0,o.Z)({as:p,ownerState:E,className:(0,a.Z)(_.root,u),ref:t},y,{children:"string"!=typeof s||h?(0,x.jsxs)(l.Fragment,{children:["start"===f?i||(i=(0,x.jsx)("span",{className:"notranslate",children:"​"})):null,s]}):(0,x.jsx)(c.Z,{color:"text.secondary",children:s})}))})});var y=Z},91296:function(e,t,n){var i=0/0,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,d=u||c||Function("return this")(),m=Object.prototype.toString,p=Math.max,v=Math.min,now=function(){return d.Date.now()};function debounce(e,t,n){var i,r,o,l,a,s,u=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function invokeFunc(t){var n=i,o=r;return i=r=void 0,u=t,l=e.apply(o,n)}function leadingEdge(e){return u=e,a=setTimeout(timerExpired,t),c?invokeFunc(e):l}function remainingWait(e){var n=e-s,i=e-u,r=t-n;return d?v(r,o-i):r}function shouldInvoke(e){var n=e-s,i=e-u;return void 0===s||n>=t||n<0||d&&i>=o}function timerExpired(){var e=now();if(shouldInvoke(e))return trailingEdge(e);a=setTimeout(timerExpired,remainingWait(e))}function trailingEdge(e){return(a=void 0,m&&i)?invokeFunc(e):(i=r=void 0,l)}function cancel(){void 0!==a&&clearTimeout(a),u=0,i=s=r=a=void 0}function flush(){return void 0===a?l:trailingEdge(now())}function debounced(){var e=now(),n=shouldInvoke(e);if(i=arguments,r=this,s=e,n){if(void 0===a)return leadingEdge(s);if(d)return a=setTimeout(timerExpired,t),invokeFunc(s)}return void 0===a&&(a=setTimeout(timerExpired,t)),l}return t=toNumber(t)||0,isObject(n)&&(c=!!n.leading,o=(d="maxWait"in n)?p(toNumber(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),debounced.cancel=cancel,debounced.flush=flush,debounced}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&"[object Symbol]"==m.call(e)}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return i;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=l.test(e);return n||a.test(e)?s(e.slice(2),n?2:8):o.test(e)?i:+e}e.exports=debounce},472:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/item-browser",function(){return n(23225)}])},23225:function(e,t,n){"use strict";n.r(t);var i=n(82729),r=n(85893),o=n(67294),l=n(70473),a=n(88344),s=n(21785),u=n(15861),c=n(51233),d=n(94054),m=n(40476),p=n(72890),v=n(50480),h=n(36872),f=n(417),b=n(50135),x=n(87109),j=n(66242),g=n(44267),Z=n(87357),y=n(69368),w=n(30925),O=n(61599),E=n(99758),_=n(21480),I=n(2962),k=n(93946),N=n(42761),S=n(91296),T=n.n(S),C=n(2511);function _templateObject(){let e=(0,i._)(["\n\n  .main-header {\n    font-size: 22px;\n    font-weight: bold;\n  }\n\n  .sub-header {\n    margin-top: 15px;\n    margin-bottom: 2em;\n  }\n\n  .results {\n    margin-top: 15px;\n    padding-left: 15px;\n    display: grid;\n    grid-template-columns: repeat(2, 250px);\n\n    & .owner-name {\n      display: inline-block;\n      width: 150px;\n    }\n\n    & .amount {\n      color: #54c34d;\n    }\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,i._)(["\n  && label.Mui-focused {\n    color: rgba(255, 255, 255, 0.7);\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,i._)(["\n  && {\n    color: white;\n  }\n"]);return _templateObject2=function(){return e},e}let P=(0,s.D)({trim:!0,limit:250}),A=O.Z.div(_templateObject()),L=(0,O.Z)(b.Z)(_templateObject1()),M=(0,O.Z)(y.Z)(_templateObject2());t.default=e=>{var t,n;let{}=e,{state:i}=(0,o.useContext)(_.I),[s,y]=(0,o.useState)(""),[O,S]=(0,o.useState)(),[$,F]=(0,o.useState)(),[z,B]=(0,o.useState)(),[U,W]=(0,o.useState)("name"),[R,D]=(0,o.useState)(!1),q=(0,o.useMemo)(()=>(0,a.tP)(null==i?void 0:i.characters,R),[R]),X=(0,o.useMemo)(()=>(0,a.Nx)(null==i?void 0:i.characters,null==i?void 0:i.account),[null==i?void 0:i.characters,null==i?void 0:i.account]),G=Object.values(z||{}).reduce((e,t)=>{let{amount:n}=t;return e+n},0);(0,o.useEffect)(()=>{F(l.itemsArray),(null==i?void 0:i.characters)||(null==i?void 0:i.account)?S(R?[...X||[],...q||[]]:X):S(l.itemsArray)},[i,R]),(0,o.useEffect)(()=>{if(s&&"name"===U){let e=(0,a.QU)(O,null==s?void 0:s.displayName);B(e)}else if(s&&"description"===U){let e=(0,a.wA)(O,s);B(e)}else B([])},[s,R,O]),(0,o.useEffect)(()=>{y("")},[U]);let H=T()(e=>{y(e.target.value)},100);return(0,r.jsxs)(A,{children:[(0,r.jsx)(I.PB,{title:"Item Browser | Idleon Toolbox",description:"Browse all of your existing items with a handy search"}),(0,r.jsx)(u.Z,{my:2,variant:"h2",children:"Item Browser"}),(0,r.jsx)(u.Z,{variant:"subtitle1",children:"Browse all items in your account!"}),(0,r.jsx)(u.Z,{mb:4,variant:"subtitle1",children:"The amount of items you own will be displayed below the item's display"}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(m.Z,{id:"demo-radio-buttons-group-label",children:"Search by"}),(0,r.jsxs)(p.Z,{row:!0,"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"name",name:"radio-buttons-group",onChange:e=>W(e.target.value),children:[(0,r.jsx)(v.Z,{value:"name",control:(0,r.jsx)(h.Z,{}),label:"Item Name"}),(0,r.jsx)(v.Z,{value:"description",control:(0,r.jsx)(h.Z,{}),label:"Item Description"})]})]})}),(0,r.jsxs)(c.Z,{direction:"row",alignItems:"center",gap:2,children:["name"===U&&(null==$?void 0:$.length)>0?(0,r.jsx)(f.Z,{id:"item-browser",value:s,onChange:(e,t)=>{y(t)},autoComplete:!0,options:[s,...$],filterSelectedOptions:!0,filterOptions:P,getOptionLabel:e=>{var t;return(null==e?void 0:e.displayName)?null==e?void 0:null===(t=e.displayName)||void 0===t?void 0:t.replace(/_/g," "):""},renderOption:(e,t)=>{var n;return(0,o.createElement)(c.Z,{...e,key:e.id,gap:2,direction:"row",children:[(0,r.jsx)("img",{width:24,height:24,src:"".concat(w.prefix,"data/").concat(null==t?void 0:t.rawName,".png"),alt:""},"img-".concat(e.id)),(0,r.jsx)(u.Z,{children:null==t?void 0:null===(n=t.displayName)||void 0===n?void 0:n.replace(/_/g," ")},"text-".concat(e.id))]})},style:{width:300},renderInput:e=>(0,r.jsx)(L,{...e,label:"Item Name",variant:"outlined"})}):null,"description"===U?(0,r.jsx)(b.Z,{sx:{mt:1},placeholder:"Type anything",onChange:e=>H(e),InputProps:{endAdornment:(0,r.jsx)(x.Z,{position:"end",children:(0,r.jsx)(k.Z,{children:(0,r.jsx)(N.Z,{})})})}}):null,(0,r.jsx)(v.Z,{control:(0,r.jsx)(M,{checked:R,onChange:()=>D(!R),name:"Include Equipped Items",color:"default"}),label:"Include Equipped Items"})]}),"name"===U?(0,r.jsx)(u.Z,{component:"div",variant:"caption",sx:{width:300,mt:1},children:"Start to write to narrow down the results (max of 250 items)"}):null,s&&"name"===U?(0,r.jsx)(j.Z,{sx:{my:2,width:"fit-content"},children:(0,r.jsx)(g.Z,{children:(0,r.jsx)(E.Z,{style:{marginTop:15},...s})})}):null,s&&"description"===U?(0,r.jsx)(c.Z,{direction:"row",gap:3,flexWrap:"wrap",flexShrink:0,flexGrow:0,children:Array.isArray(z)&&(null==z?void 0:z.map((e,t)=>{var n;return(0,r.jsx)(Z.Z,{sx:{width:200,height:"fit-content"},children:(0,r.jsx)(C.Z,{title:null==e?void 0:null===(n=e.owners)||void 0===n?void 0:n.join(", "),children:(0,r.jsx)(j.Z,{sx:{my:2},children:(0,r.jsx)(g.Z,{children:(0,r.jsx)(E.Z,{style:{marginTop:15},...e})})})})},(null==e?void 0:e.rawName)+t)}))}):null,"name"===U&&z&&(null===(t=Object.keys(z))||void 0===t?void 0:t.length)>0?(0,r.jsx)(j.Z,{sx:{my:2,width:"fit-content"},children:(0,r.jsxs)(g.Z,{children:[null===(n=Object.keys(z))||void 0===n?void 0:n.map((e,t)=>{var n,i;return(0,r.jsxs)(c.Z,{direction:"row",gap:2,children:[(0,r.jsx)("span",{className:"owner-name",children:e}),(null==z?void 0:null===(n=z[e])||void 0===n?void 0:n.amount)?(0,r.jsxs)(u.Z,{color:"success.light",className:"amount",children:["(",(0,w.kFormatter)(null==z?void 0:null===(i=z[e])||void 0===i?void 0:i.amount),")"]}):""]},e+t)}),Object.keys(z).length>1?(0,r.jsxs)(u.Z,{children:["Total:",(0,r.jsxs)(u.Z,{component:"span",color:"success.light",mt:1,children:[" ",(0,w.kFormatter)(G)]})]}):null]})}):null]})}}},function(e){e.O(0,[417,8356,9758,9774,2888,179],function(){return e(e.s=472)}),_N_E=e.O()}]);
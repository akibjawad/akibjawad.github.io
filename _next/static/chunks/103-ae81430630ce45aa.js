"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{5619:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(2265);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:u="",children:d,iconNode:c,...f}=e;return(0,n.createElement)("svg",{ref:t,...a,width:i,height:i,stroke:r,strokeWidth:s?24*Number(l)/Number(i):l,className:o("lucide",u),...f},[...c.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),s=((e,t)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:s,...u}=r;return(0,n.createElement)(l,{ref:a,iconNode:t,className:o("lucide-".concat(i(e)),s),...u})});return r.displayName="".concat(e),r})("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},7648:function(e,t,r){r.d(t,{default:function(){return i.a}});var n=r(2972),i=r.n(n)},5878:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let n=r(7043),i=r(3099),o=r(7437),a=i._(r(2265)),l=n._(r(4887)),s=n._(r(8293)),u=r(5346),d=r(128),c=r(2589);r(1765);let f=r(5523),p=n._(r(5084)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/akibjawad.github.io/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:y,onLoadRef:w,onLoadingCompleteRef:b,setBlurComplete:x,setShowAltText:_,sizesInput:j,onLoad:S,onError:C,...E}=e;return(0,o.jsx)("img",{...E,...g(f),loading:m,width:s,height:l,decoding:u,"data-nimg":y?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,p,w,b,x,v,j))},[r,p,w,b,x,C,v,j,t]),onLoad:e=>{h(e.currentTarget,p,w,b,x,v,j)},onError:e=>{_(!0),"empty"!==p&&x(!0),C&&C(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:s}=e,h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let[w,b]=(0,a.useState)(!1),[x,_]=(0,a.useState)(!1),{props:j,meta:S}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:w,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:b,setShowAltText:_,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1436:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(7043)._(r(2265)).default.createContext({})},3964:function(e,t){function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},5346:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(1765);let n=r(6496),i=r(128);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:g,width:v,height:y,fill:w=!1,style:b,overrideSrc:x,onLoad:_,onLoadingComplete:j,placeholder:S="empty",blurDataURL:C,fetchPriority:E,decoding:P="async",layout:M,objectFit:O,objectPosition:k,lazyBoundary:I,lazyRoot:R,...z}=e,{imgConf:A,showAltText:L,blurComplete:N,defaultLoader:D}=t,W=A||i.imageConfigDefault;if("allSizes"in W)l=W;else{let e=[...W.deviceSizes,...W.imageSizes].sort((e,t)=>e-t),t=W.deviceSizes.sort((e,t)=>e-t);l={...W,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=z.loader||D;delete z.loader,delete z.srcSet;let U="__next_img_default"in T;if(U){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r,...n}=t;return e(n)}}if(M){"fill"===M&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!c&&(c=t)}let B="",F=a(v),G=a(y);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,B=e.src,!w){if(F||G){if(F&&!G){let t=F/e.width;G=Math.round(e.height*t)}else if(!F&&G){let t=G/e.height;F=Math.round(e.width*t)}}else F=e.width,G=e.height}}let V=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,V=!1),l.unoptimized&&(f=!0),U&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let q=a(g),H=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:k}:{},L?{}:{color:"transparent"},b),$=N||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:G,blurWidth:s,blurHeight:u,blurDataURL:C||"",objectFit:H.objectFit})+'")':'url("'+S+'")',Y=$?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:l,src:d,unoptimized:f,width:F,quality:q,sizes:c,loader:T});return{props:{...z,loading:V?"lazy":m,fetchPriority:E,width:F,height:G,decoding:P,className:h,style:{...H,...Y},sizes:J.sizes,srcSet:J.srcSet,src:x||J.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:w}}}},8293:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return c}});let n=r(7043),i=r(3099),o=r(7437),a=i._(r(2265)),l=n._(r(7421)),s=r(1436),u=r(8701),d=r(3964);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1765);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let h=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6496:function(e,t){function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2589:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(7043)._(r(2265)),i=r(128),o=n.default.createContext(i.imageConfigDefault)},128:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},5084:function(e,t){function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},7421:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(2265),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4930:function(e,t,r){r.d(t,{Ee:function(){return b},NY:function(){return x},fC:function(){return w}});var n=r(2265),i=r(3966),o=r(6606),a=r(1188),l=r(6840),s=r(7437),u="Avatar",[d,c]=(0,i.b)(u),[f,p]=d(u),m=n.forwardRef((e,t)=>{let{__scopeAvatar:r,...i}=e,[o,a]=n.useState("idle");return(0,s.jsx)(f,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:a,children:(0,s.jsx)(l.WV.span,{...i,ref:t})})});m.displayName=u;var h="AvatarImage",g=n.forwardRef((e,t)=>{let{__scopeAvatar:r,src:i,onLoadingStatusChange:u=()=>{},...d}=e,c=p(h,r),f=function(e,t){let[r,i]=n.useState("idle");return(0,a.b)(()=>{if(!e){i("error");return}let r=!0,n=new window.Image,o=e=>()=>{r&&i(e)};return i("loading"),n.onload=o("loaded"),n.onerror=o("error"),n.src=e,t&&(n.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(i,d.referrerPolicy),m=(0,o.W)(e=>{u(e),c.onImageLoadingStatusChange(e)});return(0,a.b)(()=>{"idle"!==f&&m(f)},[f,m]),"loaded"===f?(0,s.jsx)(l.WV.img,{...d,ref:t,src:i}):null});g.displayName=h;var v="AvatarFallback",y=n.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:i,...o}=e,a=p(v,r),[u,d]=n.useState(void 0===i);return n.useEffect(()=>{if(void 0!==i){let e=window.setTimeout(()=>d(!0),i);return()=>window.clearTimeout(e)}},[i]),u&&"loaded"!==a.imageLoadingStatus?(0,s.jsx)(l.WV.span,{...o,ref:t}):null});y.displayName=v;var w=m,b=g,x=y},8614:function(e,t,r){r.d(t,{M:function(){return v}});var n=r(7437),i=r(2265),o=r(4252),a=r(3576),l=r(5750);class s extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:r}=e,o=(0,i.useId)(),a=(0,i.useRef)(null),u=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,i.useContext)(l._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:i}=u.current;if(r||!a.current||!e||!t)return;a.current.dataset.motionPopId=o;let l=document.createElement("style");return d&&(l.nonce=d),document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(n,"px !important;\n            left: ").concat(i,"px !important;\n          }\n        ")),()=>{document.head.removeChild(l)}},[r]),(0,n.jsx)(s,{isPresent:r,childRef:a,sizeRef:u,children:i.cloneElement(t,{ref:a})})}let d=e=>{let{children:t,initial:r,isPresent:l,onExitComplete:s,custom:d,presenceAffectsLayout:f,mode:p}=e,m=(0,a.h)(c),h=(0,i.useId)(),g=(0,i.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;s&&s()},[m,s]),v=(0,i.useMemo)(()=>({id:h,initial:r,isPresent:l,custom:d,onExitComplete:g,register:e=>(m.set(e,!1),()=>m.delete(e))}),f?[Math.random(),g]:[l,g]);return(0,i.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[l]),i.useEffect(()=>{l||m.size||!s||s()},[l]),"popLayout"===p&&(t=(0,n.jsx)(u,{isPresent:l,children:t})),(0,n.jsx)(o.O.Provider,{value:v,children:t})};function c(){return new Map}var f=r(8881),p=r(3223);let m=e=>e.key||"";function h(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}var g=r(1534);let v=e=>{let{children:t,exitBeforeEnter:r,custom:o,initial:l=!0,onExitComplete:s,presenceAffectsLayout:u=!0,mode:c="sync"}=e;(0,p.k)(!r,"Replace exitBeforeEnter with mode='wait'");let v=(0,i.useMemo)(()=>h(t),[t]),y=v.map(m),w=(0,i.useRef)(!0),b=(0,i.useRef)(v),x=(0,a.h)(()=>new Map),[_,j]=(0,i.useState)(v),[S,C]=(0,i.useState)(v);(0,g.L)(()=>{w.current=!1,b.current=v;for(let e=0;e<S.length;e++){let t=m(S[e]);y.includes(t)?x.delete(t):!0!==x.get(t)&&x.set(t,!1)}},[S,y.length,y.join("-")]);let E=[];if(v!==_){let e=[...v];for(let t=0;t<S.length;t++){let r=S[t],n=m(r);y.includes(n)||(e.splice(t,0,r),E.push(r))}"wait"===c&&E.length&&(e=E),C(h(e)),j(v);return}let{forceRender:P}=(0,i.useContext)(f.p);return(0,n.jsx)(n.Fragment,{children:S.map(e=>{let t=m(e),r=v===S||y.includes(t);return(0,n.jsx)(d,{isPresent:r,initial:(!w.current||!!l)&&void 0,custom:r?void 0:o,presenceAffectsLayout:u,mode:c,onExitComplete:r?void 0:()=>{if(!x.has(t))return;x.set(t,!0);let e=!0;x.forEach(t=>{t||(e=!1)}),e&&(null==P||P(),C(b.current),s&&s())},children:e},t)})})}},4922:function(e,t,r){r.d(t,{Y:function(){return o}});var n=r(2265);r(3223);let i={some:0,all:1};function o(e,{root:t,margin:r,amount:o,once:a=!1}={}){let[l,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!e.current||a&&l)return;let n={root:t&&t.current||void 0,margin:r,amount:o};return function(e,t,{root:r,margin:n,amount:o="some"}={}){var a;let l=("string"==typeof(a=e)?a=document.querySelectorAll(a):a instanceof Element&&(a=[a]),Array.from(a||[])),s=new WeakMap,u=new IntersectionObserver(e=>{e.forEach(e=>{let r=s.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e);"function"==typeof r?s.set(e.target,r):u.unobserve(e.target)}else r&&(r(e),s.delete(e.target))}})},{root:r,rootMargin:n,threshold:"number"==typeof o?o:i[o]});return l.forEach(e=>u.observe(e)),()=>u.disconnect()}(e.current,()=>(s(!0),a?void 0:()=>s(!1)),n)},[t,e,r,a,o]),l}}}]);
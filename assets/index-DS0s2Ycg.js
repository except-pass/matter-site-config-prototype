(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function my(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ku={exports:{}},Ar={},Qu={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),py=Symbol.for("react.portal"),fy=Symbol.for("react.fragment"),yy=Symbol.for("react.strict_mode"),gy=Symbol.for("react.profiler"),by=Symbol.for("react.provider"),hy=Symbol.for("react.context"),xy=Symbol.for("react.forward_ref"),_y=Symbol.for("react.suspense"),vy=Symbol.for("react.memo"),wy=Symbol.for("react.lazy"),pd=Symbol.iterator;function Cy(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var Yu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ju=Object.assign,Xu={};function Fl(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Yu}Fl.prototype.isReactComponent={};Fl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zu(){}Zu.prototype=Fl.prototype;function ac(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Yu}var ic=ac.prototype=new Zu;ic.constructor=ac;Ju(ic,Fl.prototype);ic.isPureReactComponent=!0;var fd=Array.isArray,em=Object.prototype.hasOwnProperty,rc={current:null},tm={key:!0,ref:!0,__self:!0,__source:!0};function nm(e,t,n){var l,a={},i=null,r=null;if(t!=null)for(l in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(i=""+t.key),t)em.call(t,l)&&!tm.hasOwnProperty(l)&&(a[l]=t[l]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(l in s=e.defaultProps,s)a[l]===void 0&&(a[l]=s[l]);return{$$typeof:Xa,type:e,key:i,ref:r,props:a,_owner:rc.current}}function Sy(e,t){return{$$typeof:Xa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xa}function Ly(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yd=/\/+/g;function vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ly(""+e.key):t.toString(36)}function Oi(e,t,n,l,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Xa:case py:r=!0}}if(r)return r=e,a=a(r),e=l===""?"."+vo(r,0):l,fd(a)?(n="",e!=null&&(n=e.replace(yd,"$&/")+"/"),Oi(a,t,n,"",function(d){return d})):a!=null&&(oc(a)&&(a=Sy(a,n+(!a.key||r&&r.key===a.key?"":(""+a.key).replace(yd,"$&/")+"/")+e)),t.push(a)),1;if(r=0,l=l===""?".":l+":",fd(e))for(var s=0;s<e.length;s++){i=e[s];var c=l+vo(i,s);r+=Oi(i,t,n,c,a)}else if(c=Cy(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=l+vo(i,s++),r+=Oi(i,t,n,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function di(e,t,n){if(e==null)return e;var l=[],a=0;return Oi(e,l,"","",function(i){return t.call(n,i,a++)}),l}function ky(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Fi={transition:null},Dy={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Fi,ReactCurrentOwner:rc};function lm(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:di,forEach:function(e,t,n){di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return di(e,function(){t++}),t},toArray:function(e){return di(e,function(t){return t})||[]},only:function(e){if(!oc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=Fl;oe.Fragment=fy;oe.Profiler=gy;oe.PureComponent=ac;oe.StrictMode=yy;oe.Suspense=_y;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;oe.act=lm;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=Ju({},e.props),a=e.key,i=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,r=rc.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)em.call(t,c)&&!tm.hasOwnProperty(c)&&(l[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];l.children=s}return{$$typeof:Xa,type:e.type,key:a,ref:i,props:l,_owner:r}};oe.createContext=function(e){return e={$$typeof:hy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:by,_context:e},e.Consumer=e};oe.createElement=nm;oe.createFactory=function(e){var t=nm.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:xy,render:e}};oe.isValidElement=oc;oe.lazy=function(e){return{$$typeof:wy,_payload:{_status:-1,_result:e},_init:ky}};oe.memo=function(e,t){return{$$typeof:vy,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=Fi.transition;Fi.transition={};try{e()}finally{Fi.transition=t}};oe.unstable_act=lm;oe.useCallback=function(e,t){return Je.current.useCallback(e,t)};oe.useContext=function(e){return Je.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};oe.useEffect=function(e,t){return Je.current.useEffect(e,t)};oe.useId=function(){return Je.current.useId()};oe.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return Je.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};oe.useRef=function(e){return Je.current.useRef(e)};oe.useState=function(e){return Je.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return Je.current.useTransition()};oe.version="18.3.1";Qu.exports=oe;var A=Qu.exports;const $=my(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=A,Ey=Symbol.for("react.element"),Py=Symbol.for("react.fragment"),Ny=Object.prototype.hasOwnProperty,Ay=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vy={key:!0,ref:!0,__self:!0,__source:!0};function am(e,t,n){var l,a={},i=null,r=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(r=t.ref);for(l in t)Ny.call(t,l)&&!Vy.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)a[l]===void 0&&(a[l]=t[l]);return{$$typeof:Ey,type:e,key:i,ref:r,props:a,_owner:Ay.current}}Ar.Fragment=Py;Ar.jsx=am;Ar.jsxs=am;Ku.exports=Ar;var o=Ku.exports,ns={},im={exports:{}},dt={},rm={exports:{}},om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(G,j){var I=G.length;G.push(j);e:for(;0<I;){var Q=I-1>>>1,ee=G[Q];if(0<a(ee,j))G[Q]=j,G[I]=ee,I=Q;else break e}}function n(G){return G.length===0?null:G[0]}function l(G){if(G.length===0)return null;var j=G[0],I=G.pop();if(I!==j){G[0]=I;e:for(var Q=0,ee=G.length,ce=ee>>>1;Q<ce;){var ne=2*(Q+1)-1,te=G[ne],de=ne+1,De=G[de];if(0>a(te,I))de<ee&&0>a(De,te)?(G[Q]=De,G[de]=I,Q=de):(G[Q]=te,G[ne]=I,Q=ne);else if(de<ee&&0>a(De,I))G[Q]=De,G[de]=I,Q=de;else break e}}return j}function a(G,j){var I=G.sortIndex-j.sortIndex;return I!==0?I:G.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,s=r.now();e.unstable_now=function(){return r.now()-s}}var c=[],d=[],u=1,m=null,p=3,f=!1,v=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(G){for(var j=n(d);j!==null;){if(j.callback===null)l(d);else if(j.startTime<=G)l(d),j.sortIndex=j.expirationTime,t(c,j);else break;j=n(d)}}function C(G){if(b=!1,h(G),!v)if(n(c)!==null)v=!0,Z(k);else{var j=n(d);j!==null&&ae(C,j.startTime-G)}}function k(G,j){v=!1,b&&(b=!1,g(L),L=-1),f=!0;var I=p;try{for(h(j),m=n(c);m!==null&&(!(m.expirationTime>j)||G&&!M());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,p=m.priorityLevel;var ee=Q(m.expirationTime<=j);j=e.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(c)&&l(c),h(j)}else l(c);m=n(c)}if(m!==null)var ce=!0;else{var ne=n(d);ne!==null&&ae(C,ne.startTime-j),ce=!1}return ce}finally{m=null,p=I,f=!1}}var P=!1,w=null,L=-1,U=5,R=-1;function M(){return!(e.unstable_now()-R<U)}function E(){if(w!==null){var G=e.unstable_now();R=G;var j=!0;try{j=w(!0,G)}finally{j?F():(P=!1,w=null)}}else P=!1}var F;if(typeof y=="function")F=function(){y(E)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,B=le.port2;le.port1.onmessage=E,F=function(){B.postMessage(null)}}else F=function(){_(E,0)};function Z(G){w=G,P||(P=!0,F())}function ae(G,j){L=_(function(){G(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,Z(k))},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(G){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var I=p;p=j;try{return G()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(G,j){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var I=p;p=G;try{return j()}finally{p=I}},e.unstable_scheduleCallback=function(G,j,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,G){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=I+ee,G={id:u++,callback:j,priorityLevel:G,startTime:I,expirationTime:ee,sortIndex:-1},I>Q?(G.sortIndex=I,t(d,G),n(c)===null&&G===n(d)&&(b?(g(L),L=-1):b=!0,ae(C,I-Q))):(G.sortIndex=ee,t(c,G),v||f||(v=!0,Z(k))),G},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(G){var j=p;return function(){var I=p;p=j;try{return G.apply(this,arguments)}finally{p=I}}}})(om);rm.exports=om;var Ry=rm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=A,ct=Ry;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sm=new Set,Aa={};function Qn(e,t){Al(e,t),Al(e+"Capture",t)}function Al(e,t){for(Aa[e]=t,e=0;e<t.length;e++)sm.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ls=Object.prototype.hasOwnProperty,My=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gd={},bd={};function Gy(e){return ls.call(bd,e)?!0:ls.call(gd,e)?!1:My.test(e)?bd[e]=!0:(gd[e]=!0,!1)}function jy(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function By(e,t,n,l){if(t===null||typeof t>"u"||jy(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,l,a,i,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=r}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var sc=/[\-:]([a-z])/g;function cc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sc,cc);je[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sc,cc);je[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sc,cc);je[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function dc(e,t,n,l){var a=je.hasOwnProperty(t)?je[t]:null;(a!==null?a.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(By(t,n,a,l)&&(n=null),l||a===null?Gy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,l=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var Jt=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ui=Symbol.for("react.element"),sl=Symbol.for("react.portal"),cl=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),cm=Symbol.for("react.provider"),dm=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),is=Symbol.for("react.suspense"),rs=Symbol.for("react.suspense_list"),pc=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),um=Symbol.for("react.offscreen"),hd=Symbol.iterator;function ta(e){return e===null||typeof e!="object"?null:(e=hd&&e[hd]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,wo;function pa(e){if(wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||""}return`
`+wo+e}var Co=!1;function So(e,t){if(!e||Co)return"";Co=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var l=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){l=d}e.call(t.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=l.stack.split(`
`),r=a.length-1,s=i.length-1;1<=r&&0<=s&&a[r]!==i[s];)s--;for(;1<=r&&0<=s;r--,s--)if(a[r]!==i[s]){if(r!==1||s!==1)do if(r--,s--,0>s||a[r]!==i[s]){var c=`
`+a[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=r&&0<=s);break}}}finally{Co=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pa(e):""}function Oy(e){switch(e.tag){case 5:return pa(e.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return e=So(e.type,!1),e;case 11:return e=So(e.type.render,!1),e;case 1:return e=So(e.type,!0),e;default:return""}}function os(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cl:return"Fragment";case sl:return"Portal";case as:return"Profiler";case uc:return"StrictMode";case is:return"Suspense";case rs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dm:return(e.displayName||"Context")+".Consumer";case cm:return(e._context.displayName||"Context")+".Provider";case mc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pc:return t=e.displayName||null,t!==null?t:os(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return os(e(t))}catch{}}return null}function Fy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return os(t);case 8:return t===uc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qy(e){var t=mm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=qy(e))}function pm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=mm(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ss(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xd(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fm(e,t){t=t.checked,t!=null&&dc(e,"checked",t,!1)}function cs(e,t){fm(e,t);var n=xn(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ds(e,t.type,n):t.hasOwnProperty("defaultValue")&&ds(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _d(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ds(e,t,n){(t!=="number"||nr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fa=Array.isArray;function Sl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(fa(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function ym(e,t){var n=xn(t.value),l=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function wd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,bm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uy=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(e){Uy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),va[t]=va[e]})});function hm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||va.hasOwnProperty(e)&&va[e]?(""+t).trim():t+"px"}function xm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,a=hm(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,a):e[n]=a}}var Wy=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,t){if(t){if(Wy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ys=null;function fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gs=null,Ll=null,kl=null;function Cd(e){if(e=ti(e)){if(typeof gs!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Gr(t),gs(e.stateNode,e.type,t))}}function _m(e){Ll?kl?kl.push(e):kl=[e]:Ll=e}function vm(){if(Ll){var e=Ll,t=kl;if(kl=Ll=null,Cd(e),t)for(e=0;e<t.length;e++)Cd(t[e])}}function wm(e,t){return e(t)}function Cm(){}var Lo=!1;function Sm(e,t,n){if(Lo)return e(t,n);Lo=!0;try{return wm(e,t,n)}finally{Lo=!1,(Ll!==null||kl!==null)&&(Cm(),vm())}}function Ra(e,t){var n=e.stateNode;if(n===null)return null;var l=Gr(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var bs=!1;if(zt)try{var na={};Object.defineProperty(na,"passive",{get:function(){bs=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{bs=!1}function $y(e,t,n,l,a,i,r,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var wa=!1,lr=null,ar=!1,hs=null,Hy={onError:function(e){wa=!0,lr=e}};function zy(e,t,n,l,a,i,r,s,c){wa=!1,lr=null,$y.apply(Hy,arguments)}function Ky(e,t,n,l,a,i,r,s,c){if(zy.apply(this,arguments),wa){if(wa){var d=lr;wa=!1,lr=null}else throw Error(O(198));ar||(ar=!0,hs=d)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sd(e){if(Yn(e)!==e)throw Error(O(188))}function Qy(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Sd(a),e;if(i===l)return Sd(a),t;i=i.sibling}throw Error(O(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,s=a.child;s;){if(s===n){r=!0,n=a,l=i;break}if(s===l){r=!0,l=a,n=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===n){r=!0,n=i,l=a;break}if(s===l){r=!0,l=i,n=a;break}s=s.sibling}if(!r)throw Error(O(189))}}if(n.alternate!==l)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function km(e){return e=Qy(e),e!==null?Dm(e):null}function Dm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dm(e);if(t!==null)return t;e=e.sibling}return null}var Tm=ct.unstable_scheduleCallback,Ld=ct.unstable_cancelCallback,Yy=ct.unstable_shouldYield,Jy=ct.unstable_requestPaint,Te=ct.unstable_now,Xy=ct.unstable_getCurrentPriorityLevel,yc=ct.unstable_ImmediatePriority,Em=ct.unstable_UserBlockingPriority,ir=ct.unstable_NormalPriority,Zy=ct.unstable_LowPriority,Pm=ct.unstable_IdlePriority,Vr=null,It=null;function eg(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Vr,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:lg,tg=Math.log,ng=Math.LN2;function lg(e){return e>>>=0,e===0?32:31-(tg(e)/ng|0)|0}var fi=64,yi=4194304;function ya(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rr(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,a=e.suspendedLanes,i=e.pingedLanes,r=n&268435455;if(r!==0){var s=r&~a;s!==0?l=ya(s):(i&=r,i!==0&&(l=ya(i)))}else r=n&~a,r!==0?l=ya(r):i!==0&&(l=ya(i));if(l===0)return 0;if(t!==0&&t!==l&&!(t&a)&&(a=l&-l,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(l&4&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-kt(t),a=1<<n,l|=e[n],t&=~a;return l}function ag(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ig(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var r=31-kt(i),s=1<<r,c=a[r];c===-1?(!(s&n)||s&l)&&(a[r]=ag(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nm(){var e=fi;return fi<<=1,!(fi&4194240)&&(fi=64),e}function ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Za(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function rg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-kt(n),i=1<<a;t[a]=0,l[a]=-1,e[a]=-1,n&=~i}}function gc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-kt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}var ue=0;function Am(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vm,bc,Rm,Im,Mm,_s=!1,gi=[],dn=null,un=null,mn=null,Ia=new Map,Ma=new Map,rn=[],og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kd(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(t.pointerId)}}function la(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ti(t),t!==null&&bc(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function sg(e,t,n,l,a){switch(t){case"focusin":return dn=la(dn,e,t,n,l,a),!0;case"dragenter":return un=la(un,e,t,n,l,a),!0;case"mouseover":return mn=la(mn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Ia.set(i,la(Ia.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Ma.set(i,la(Ma.get(i)||null,e,t,n,l,a)),!0}return!1}function Gm(e){var t=In(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Lm(n),t!==null){e.blockedOn=t,Mm(e.priority,function(){Rm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);ys=l,n.target.dispatchEvent(l),ys=null}else return t=ti(n),t!==null&&bc(t),e.blockedOn=n,!1;t.shift()}return!0}function Dd(e,t,n){qi(e)&&n.delete(t)}function cg(){_s=!1,dn!==null&&qi(dn)&&(dn=null),un!==null&&qi(un)&&(un=null),mn!==null&&qi(mn)&&(mn=null),Ia.forEach(Dd),Ma.forEach(Dd)}function aa(e,t){e.blockedOn===t&&(e.blockedOn=null,_s||(_s=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,cg)))}function Ga(e){function t(a){return aa(a,e)}if(0<gi.length){aa(gi[0],e);for(var n=1;n<gi.length;n++){var l=gi[n];l.blockedOn===e&&(l.blockedOn=null)}}for(dn!==null&&aa(dn,e),un!==null&&aa(un,e),mn!==null&&aa(mn,e),Ia.forEach(t),Ma.forEach(t),n=0;n<rn.length;n++)l=rn[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Gm(n),n.blockedOn===null&&rn.shift()}var Dl=Jt.ReactCurrentBatchConfig,or=!0;function dg(e,t,n,l){var a=ue,i=Dl.transition;Dl.transition=null;try{ue=1,hc(e,t,n,l)}finally{ue=a,Dl.transition=i}}function ug(e,t,n,l){var a=ue,i=Dl.transition;Dl.transition=null;try{ue=4,hc(e,t,n,l)}finally{ue=a,Dl.transition=i}}function hc(e,t,n,l){if(or){var a=vs(e,t,n,l);if(a===null)Mo(e,t,l,sr,n),kd(e,l);else if(sg(a,e,t,n,l))l.stopPropagation();else if(kd(e,l),t&4&&-1<og.indexOf(e)){for(;a!==null;){var i=ti(a);if(i!==null&&Vm(i),i=vs(e,t,n,l),i===null&&Mo(e,t,l,sr,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Mo(e,t,l,null,n)}}var sr=null;function vs(e,t,n,l){if(sr=null,e=fc(l),e=In(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sr=e,null}function jm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xy()){case yc:return 1;case Em:return 4;case ir:case Zy:return 16;case Pm:return 536870912;default:return 16}default:return 16}}var sn=null,xc=null,Ui=null;function Bm(){if(Ui)return Ui;var e,t=xc,n=t.length,l,a="value"in sn?sn.value:sn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return Ui=a.slice(e,1<l?1-l:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function Td(){return!1}function ut(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bi:Td,this.isPropagationStopped=Td,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var ql={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=ut(ql),ei=Le({},ql,{view:0,detail:0}),mg=ut(ei),Do,To,ia,Rr=Le({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(Do=e.screenX-ia.screenX,To=e.screenY-ia.screenY):To=Do=0,ia=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:To}}),Ed=ut(Rr),pg=Le({},Rr,{dataTransfer:0}),fg=ut(pg),yg=Le({},ei,{relatedTarget:0}),Eo=ut(yg),gg=Le({},ql,{animationName:0,elapsedTime:0,pseudoElement:0}),bg=ut(gg),hg=Le({},ql,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xg=ut(hg),_g=Le({},ql,{data:0}),Pd=ut(_g),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cg[e])?!!t[e]:!1}function vc(){return Sg}var Lg=Le({},ei,{key:function(e){if(e.key){var t=vg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kg=ut(Lg),Dg=Le({},Rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=ut(Dg),Tg=Le({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),Eg=ut(Tg),Pg=Le({},ql,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=ut(Pg),Ag=Le({},Rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vg=ut(Ag),Rg=[9,13,27,32],wc=zt&&"CompositionEvent"in window,Ca=null;zt&&"documentMode"in document&&(Ca=document.documentMode);var Ig=zt&&"TextEvent"in window&&!Ca,Om=zt&&(!wc||Ca&&8<Ca&&11>=Ca),Ad=" ",Vd=!1;function Fm(e,t){switch(e){case"keyup":return Rg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function Mg(e,t){switch(e){case"compositionend":return qm(t);case"keypress":return t.which!==32?null:(Vd=!0,Ad);case"textInput":return e=t.data,e===Ad&&Vd?null:e;default:return null}}function Gg(e,t){if(dl)return e==="compositionend"||!wc&&Fm(e,t)?(e=Bm(),Ui=xc=sn=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Om&&t.locale!=="ko"?null:t.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jg[e.type]:t==="textarea"}function Um(e,t,n,l){_m(l),t=cr(t,"onChange"),0<t.length&&(n=new _c("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Sa=null,ja=null;function Bg(e){ep(e,0)}function Ir(e){var t=pl(e);if(pm(t))return e}function Og(e,t){if(e==="change")return t}var Wm=!1;if(zt){var Po;if(zt){var No="oninput"in document;if(!No){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),No=typeof Id.oninput=="function"}Po=No}else Po=!1;Wm=Po&&(!document.documentMode||9<document.documentMode)}function Md(){Sa&&(Sa.detachEvent("onpropertychange",$m),ja=Sa=null)}function $m(e){if(e.propertyName==="value"&&Ir(ja)){var t=[];Um(t,ja,e,fc(e)),Sm(Bg,t)}}function Fg(e,t,n){e==="focusin"?(Md(),Sa=t,ja=n,Sa.attachEvent("onpropertychange",$m)):e==="focusout"&&Md()}function qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ir(ja)}function Ug(e,t){if(e==="click")return Ir(t)}function Wg(e,t){if(e==="input"||e==="change")return Ir(t)}function $g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:$g;function Ba(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!ls.call(t,a)||!Tt(e[a],t[a]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jd(e,t){var n=Gd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gd(n)}}function Hm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zm(){for(var e=window,t=nr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nr(e.document)}return t}function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hg(e){var t=zm(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(l!==null&&Cc(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(l.start,a);l=l.end===void 0?i:Math.min(l.end,a),!e.extend&&i>l&&(a=l,l=i,i=a),a=jd(n,i);var r=jd(n,l);a&&r&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>l?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zg=zt&&"documentMode"in document&&11>=document.documentMode,ul=null,ws=null,La=null,Cs=!1;function Bd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cs||ul==null||ul!==nr(l)||(l=ul,"selectionStart"in l&&Cc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),La&&Ba(La,l)||(La=l,l=cr(ws,"onSelect"),0<l.length&&(t=new _c("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=ul)))}function hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ml={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionend:hi("Transition","TransitionEnd")},Ao={},Km={};zt&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete ml.animationend.animation,delete ml.animationiteration.animation,delete ml.animationstart.animation),"TransitionEvent"in window||delete ml.transitionend.transition);function Mr(e){if(Ao[e])return Ao[e];if(!ml[e])return e;var t=ml[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Km)return Ao[e]=t[n];return e}var Qm=Mr("animationend"),Ym=Mr("animationiteration"),Jm=Mr("animationstart"),Xm=Mr("transitionend"),Zm=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){Zm.set(e,t),Qn(t,[e])}for(var Vo=0;Vo<Od.length;Vo++){var Ro=Od[Vo],Kg=Ro.toLowerCase(),Qg=Ro[0].toUpperCase()+Ro.slice(1);wn(Kg,"on"+Qg)}wn(Qm,"onAnimationEnd");wn(Ym,"onAnimationIteration");wn(Jm,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Xm,"onTransitionEnd");Al("onMouseEnter",["mouseout","mouseover"]);Al("onMouseLeave",["mouseout","mouseover"]);Al("onPointerEnter",["pointerout","pointerover"]);Al("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Fd(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,Ky(l,t,void 0,e),e.currentTarget=null}function ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var s=l[r],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==i&&a.isPropagationStopped())break e;Fd(a,s,d),i=c}else for(r=0;r<l.length;r++){if(s=l[r],c=s.instance,d=s.currentTarget,s=s.listener,c!==i&&a.isPropagationStopped())break e;Fd(a,s,d),i=c}}}if(ar)throw e=hs,ar=!1,hs=null,e}function be(e,t){var n=t[Ts];n===void 0&&(n=t[Ts]=new Set);var l=e+"__bubble";n.has(l)||(tp(t,e,2,!1),n.add(l))}function Io(e,t,n){var l=0;t&&(l|=4),tp(n,e,l,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Oa(e){if(!e[xi]){e[xi]=!0,sm.forEach(function(n){n!=="selectionchange"&&(Yg.has(n)||Io(n,!1,e),Io(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,Io("selectionchange",!1,t))}}function tp(e,t,n,l){switch(jm(t)){case 1:var a=dg;break;case 4:a=ug;break;default:a=hc}n=a.bind(null,t,n,e),a=void 0,!bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Mo(e,t,n,l,a){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var s=l.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(r===4)for(r=l.return;r!==null;){var c=r.tag;if((c===3||c===4)&&(c=r.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;r=r.return}for(;s!==null;){if(r=In(s),r===null)return;if(c=r.tag,c===5||c===6){l=i=r;continue e}s=s.parentNode}}l=l.return}Sm(function(){var d=i,u=fc(n),m=[];e:{var p=Zm.get(e);if(p!==void 0){var f=_c,v=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":f=kg;break;case"focusin":v="focus",f=Eo;break;case"focusout":v="blur",f=Eo;break;case"beforeblur":case"afterblur":f=Eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Eg;break;case Qm:case Ym:case Jm:f=bg;break;case Xm:f=Ng;break;case"scroll":f=mg;break;case"wheel":f=Vg;break;case"copy":case"cut":case"paste":f=xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Nd}var b=(t&4)!==0,_=!b&&e==="scroll",g=b?p!==null?p+"Capture":null:p;b=[];for(var y=d,h;y!==null;){h=y;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,g!==null&&(C=Ra(y,g),C!=null&&b.push(Fa(y,C,h)))),_)break;y=y.return}0<b.length&&(p=new f(p,v,null,n,u),m.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==ys&&(v=n.relatedTarget||n.fromElement)&&(In(v)||v[Kt]))break e;if((f||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=d,v=v?In(v):null,v!==null&&(_=Yn(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=d),f!==v)){if(b=Ed,C="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(b=Nd,C="onPointerLeave",g="onPointerEnter",y="pointer"),_=f==null?p:pl(f),h=v==null?p:pl(v),p=new b(C,y+"leave",f,n,u),p.target=_,p.relatedTarget=h,C=null,In(u)===d&&(b=new b(g,y+"enter",v,n,u),b.target=h,b.relatedTarget=_,C=b),_=C,f&&v)t:{for(b=f,g=v,y=0,h=b;h;h=al(h))y++;for(h=0,C=g;C;C=al(C))h++;for(;0<y-h;)b=al(b),y--;for(;0<h-y;)g=al(g),h--;for(;y--;){if(b===g||g!==null&&b===g.alternate)break t;b=al(b),g=al(g)}b=null}else b=null;f!==null&&qd(m,p,f,b,!1),v!==null&&_!==null&&qd(m,_,v,b,!0)}}e:{if(p=d?pl(d):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var k=Og;else if(Rd(p))if(Wm)k=Wg;else{k=qg;var P=Fg}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Ug);if(k&&(k=k(e,d))){Um(m,k,n,u);break e}P&&P(e,p,d),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&ds(p,"number",p.value)}switch(P=d?pl(d):window,e){case"focusin":(Rd(P)||P.contentEditable==="true")&&(ul=P,ws=d,La=null);break;case"focusout":La=ws=ul=null;break;case"mousedown":Cs=!0;break;case"contextmenu":case"mouseup":case"dragend":Cs=!1,Bd(m,n,u);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":Bd(m,n,u)}var w;if(wc)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else dl?Fm(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Om&&n.locale!=="ko"&&(dl||L!=="onCompositionStart"?L==="onCompositionEnd"&&dl&&(w=Bm()):(sn=u,xc="value"in sn?sn.value:sn.textContent,dl=!0)),P=cr(d,L),0<P.length&&(L=new Pd(L,e,null,n,u),m.push({event:L,listeners:P}),w?L.data=w:(w=qm(n),w!==null&&(L.data=w)))),(w=Ig?Mg(e,n):Gg(e,n))&&(d=cr(d,"onBeforeInput"),0<d.length&&(u=new Pd("onBeforeInput","beforeinput",null,n,u),m.push({event:u,listeners:d}),u.data=w))}ep(m,t)})}function Fa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cr(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ra(e,n),i!=null&&l.unshift(Fa(e,i,a)),i=Ra(e,t),i!=null&&l.push(Fa(e,i,a))),e=e.return}return l}function al(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qd(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===l)break;s.tag===5&&d!==null&&(s=d,a?(c=Ra(n,i),c!=null&&r.unshift(Fa(n,c,s))):a||(c=Ra(n,i),c!=null&&r.push(Fa(n,c,s)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Jg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(Jg,`
`).replace(Xg,"")}function _i(e,t,n){if(t=Ud(t),Ud(e)!==t&&n)throw Error(O(425))}function dr(){}var Ss=null,Ls=null;function ks(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ds=typeof setTimeout=="function"?setTimeout:void 0,Zg=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(e){return Wd.resolve(null).then(e).catch(tb)}:Ds;function tb(e){setTimeout(function(){throw e})}function Go(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(l===0){e.removeChild(a),Ga(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=a}while(n);Ga(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ul=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Ul,qa="__reactProps$"+Ul,Kt="__reactContainer$"+Ul,Ts="__reactEvents$"+Ul,nb="__reactListeners$"+Ul,lb="__reactHandles$"+Ul;function In(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$d(e);e!==null;){if(n=e[Rt])return n;e=$d(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[Rt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pl(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Gr(e){return e[qa]||null}var Es=[],fl=-1;function Cn(e){return{current:e}}function he(e){0>fl||(e.current=Es[fl],Es[fl]=null,fl--)}function fe(e,t){fl++,Es[fl]=e.current,e.current=t}var _n={},$e=Cn(_n),nt=Cn(!1),Un=_n;function Vl(e,t){var n=e.type.contextTypes;if(!n)return _n;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function lt(e){return e=e.childContextTypes,e!=null}function ur(){he(nt),he($e)}function Hd(e,t,n){if($e.current!==_n)throw Error(O(168));fe($e,t),fe(nt,n)}function np(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var a in l)if(!(a in t))throw Error(O(108,Fy(e)||"Unknown",a));return Le({},n,l)}function mr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,Un=$e.current,fe($e,e),fe(nt,nt.current),!0}function zd(e,t,n){var l=e.stateNode;if(!l)throw Error(O(169));n?(e=np(e,t,Un),l.__reactInternalMemoizedMergedChildContext=e,he(nt),he($e),fe($e,e)):he(nt),fe(nt,n)}var Ft=null,jr=!1,jo=!1;function lp(e){Ft===null?Ft=[e]:Ft.push(e)}function ab(e){jr=!0,lp(e)}function Sn(){if(!jo&&Ft!==null){jo=!0;var e=0,t=ue;try{var n=Ft;for(ue=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}Ft=null,jr=!1}catch(a){throw Ft!==null&&(Ft=Ft.slice(e+1)),Tm(yc,Sn),a}finally{ue=t,jo=!1}}return null}var yl=[],gl=0,pr=null,fr=0,mt=[],pt=0,Wn=null,qt=1,Ut="";function An(e,t){yl[gl++]=fr,yl[gl++]=pr,pr=e,fr=t}function ap(e,t,n){mt[pt++]=qt,mt[pt++]=Ut,mt[pt++]=Wn,Wn=e;var l=qt;e=Ut;var a=32-kt(l)-1;l&=~(1<<a),n+=1;var i=32-kt(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,qt=1<<32-kt(t)+a|n<<a|l,Ut=i+e}else qt=1<<i|n<<a|l,Ut=e}function Sc(e){e.return!==null&&(An(e,1),ap(e,1,0))}function Lc(e){for(;e===pr;)pr=yl[--gl],yl[gl]=null,fr=yl[--gl],yl[gl]=null;for(;e===Wn;)Wn=mt[--pt],mt[pt]=null,Ut=mt[--pt],mt[pt]=null,qt=mt[--pt],mt[pt]=null}var st=null,ot=null,xe=!1,Lt=null;function ip(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,ot=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:qt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,ot=null,!0):!1;default:return!1}}function Ps(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ns(e){if(xe){var t=ot;if(t){var n=t;if(!Kd(e,t)){if(Ps(e))throw Error(O(418));t=pn(n.nextSibling);var l=st;t&&Kd(e,t)?ip(l,n):(e.flags=e.flags&-4097|2,xe=!1,st=e)}}else{if(Ps(e))throw Error(O(418));e.flags=e.flags&-4097|2,xe=!1,st=e}}}function Qd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function vi(e){if(e!==st)return!1;if(!xe)return Qd(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ks(e.type,e.memoizedProps)),t&&(t=ot)){if(Ps(e))throw rp(),Error(O(418));for(;t;)ip(e,t),t=pn(t.nextSibling)}if(Qd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=st?pn(e.stateNode.nextSibling):null;return!0}function rp(){for(var e=ot;e;)e=pn(e.nextSibling)}function Rl(){ot=st=null,xe=!1}function kc(e){Lt===null?Lt=[e]:Lt.push(e)}var ib=Jt.ReactCurrentBatchConfig;function ra(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var l=n.stateNode}if(!l)throw Error(O(147,e));var a=l,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(r){var s=a.refs;r===null?delete s[i]:s[i]=r},t._stringRef=i,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function wi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yd(e){var t=e._init;return t(e._payload)}function op(e){function t(g,y){if(e){var h=g.deletions;h===null?(g.deletions=[y],g.flags|=16):h.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function l(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function a(g,y){return g=bn(g,y),g.index=0,g.sibling=null,g}function i(g,y,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<y?(g.flags|=2,y):h):(g.flags|=2,y)):(g.flags|=1048576,y)}function r(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,y,h,C){return y===null||y.tag!==6?(y=$o(h,g.mode,C),y.return=g,y):(y=a(y,h),y.return=g,y)}function c(g,y,h,C){var k=h.type;return k===cl?u(g,y,h.props.children,C,h.key):y!==null&&(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&Yd(k)===y.type)?(C=a(y,h.props),C.ref=ra(g,y,h),C.return=g,C):(C=Ji(h.type,h.key,h.props,null,g.mode,C),C.ref=ra(g,y,h),C.return=g,C)}function d(g,y,h,C){return y===null||y.tag!==4||y.stateNode.containerInfo!==h.containerInfo||y.stateNode.implementation!==h.implementation?(y=Ho(h,g.mode,C),y.return=g,y):(y=a(y,h.children||[]),y.return=g,y)}function u(g,y,h,C,k){return y===null||y.tag!==7?(y=qn(h,g.mode,C,k),y.return=g,y):(y=a(y,h),y.return=g,y)}function m(g,y,h){if(typeof y=="string"&&y!==""||typeof y=="number")return y=$o(""+y,g.mode,h),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ui:return h=Ji(y.type,y.key,y.props,null,g.mode,h),h.ref=ra(g,null,y),h.return=g,h;case sl:return y=Ho(y,g.mode,h),y.return=g,y;case nn:var C=y._init;return m(g,C(y._payload),h)}if(fa(y)||ta(y))return y=qn(y,g.mode,h,null),y.return=g,y;wi(g,y)}return null}function p(g,y,h,C){var k=y!==null?y.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:s(g,y,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ui:return h.key===k?c(g,y,h,C):null;case sl:return h.key===k?d(g,y,h,C):null;case nn:return k=h._init,p(g,y,k(h._payload),C)}if(fa(h)||ta(h))return k!==null?null:u(g,y,h,C,null);wi(g,h)}return null}function f(g,y,h,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(h)||null,s(y,g,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ui:return g=g.get(C.key===null?h:C.key)||null,c(y,g,C,k);case sl:return g=g.get(C.key===null?h:C.key)||null,d(y,g,C,k);case nn:var P=C._init;return f(g,y,h,P(C._payload),k)}if(fa(C)||ta(C))return g=g.get(h)||null,u(y,g,C,k,null);wi(y,C)}return null}function v(g,y,h,C){for(var k=null,P=null,w=y,L=y=0,U=null;w!==null&&L<h.length;L++){w.index>L?(U=w,w=null):U=w.sibling;var R=p(g,w,h[L],C);if(R===null){w===null&&(w=U);break}e&&w&&R.alternate===null&&t(g,w),y=i(R,y,L),P===null?k=R:P.sibling=R,P=R,w=U}if(L===h.length)return n(g,w),xe&&An(g,L),k;if(w===null){for(;L<h.length;L++)w=m(g,h[L],C),w!==null&&(y=i(w,y,L),P===null?k=w:P.sibling=w,P=w);return xe&&An(g,L),k}for(w=l(g,w);L<h.length;L++)U=f(w,g,L,h[L],C),U!==null&&(e&&U.alternate!==null&&w.delete(U.key===null?L:U.key),y=i(U,y,L),P===null?k=U:P.sibling=U,P=U);return e&&w.forEach(function(M){return t(g,M)}),xe&&An(g,L),k}function b(g,y,h,C){var k=ta(h);if(typeof k!="function")throw Error(O(150));if(h=k.call(h),h==null)throw Error(O(151));for(var P=k=null,w=y,L=y=0,U=null,R=h.next();w!==null&&!R.done;L++,R=h.next()){w.index>L?(U=w,w=null):U=w.sibling;var M=p(g,w,R.value,C);if(M===null){w===null&&(w=U);break}e&&w&&M.alternate===null&&t(g,w),y=i(M,y,L),P===null?k=M:P.sibling=M,P=M,w=U}if(R.done)return n(g,w),xe&&An(g,L),k;if(w===null){for(;!R.done;L++,R=h.next())R=m(g,R.value,C),R!==null&&(y=i(R,y,L),P===null?k=R:P.sibling=R,P=R);return xe&&An(g,L),k}for(w=l(g,w);!R.done;L++,R=h.next())R=f(w,g,L,R.value,C),R!==null&&(e&&R.alternate!==null&&w.delete(R.key===null?L:R.key),y=i(R,y,L),P===null?k=R:P.sibling=R,P=R);return e&&w.forEach(function(E){return t(g,E)}),xe&&An(g,L),k}function _(g,y,h,C){if(typeof h=="object"&&h!==null&&h.type===cl&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ui:e:{for(var k=h.key,P=y;P!==null;){if(P.key===k){if(k=h.type,k===cl){if(P.tag===7){n(g,P.sibling),y=a(P,h.props.children),y.return=g,g=y;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&Yd(k)===P.type){n(g,P.sibling),y=a(P,h.props),y.ref=ra(g,P,h),y.return=g,g=y;break e}n(g,P);break}else t(g,P);P=P.sibling}h.type===cl?(y=qn(h.props.children,g.mode,C,h.key),y.return=g,g=y):(C=Ji(h.type,h.key,h.props,null,g.mode,C),C.ref=ra(g,y,h),C.return=g,g=C)}return r(g);case sl:e:{for(P=h.key;y!==null;){if(y.key===P)if(y.tag===4&&y.stateNode.containerInfo===h.containerInfo&&y.stateNode.implementation===h.implementation){n(g,y.sibling),y=a(y,h.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=Ho(h,g.mode,C),y.return=g,g=y}return r(g);case nn:return P=h._init,_(g,y,P(h._payload),C)}if(fa(h))return v(g,y,h,C);if(ta(h))return b(g,y,h,C);wi(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,y!==null&&y.tag===6?(n(g,y.sibling),y=a(y,h),y.return=g,g=y):(n(g,y),y=$o(h,g.mode,C),y.return=g,g=y),r(g)):n(g,y)}return _}var Il=op(!0),sp=op(!1),yr=Cn(null),gr=null,bl=null,Dc=null;function Tc(){Dc=bl=gr=null}function Ec(e){var t=yr.current;he(yr),e._currentValue=t}function As(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Tl(e,t){gr=e,Dc=bl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(Dc!==e)if(e={context:e,memoizedValue:t,next:null},bl===null){if(gr===null)throw Error(O(308));bl=e,gr.dependencies={lanes:0,firstContext:e}}else bl=bl.next=e;return t}var Mn=null;function Pc(e){Mn===null?Mn=[e]:Mn.push(e)}function cp(e,t,n,l){var a=t.interleaved;return a===null?(n.next=n,Pc(t)):(n.next=a.next,a.next=n),t.interleaved=n,Qt(e,l)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function Nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,se&2){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,Qt(e,n)}return a=l.interleaved,a===null?(t.next=t,Pc(l)):(t.next=a.next,a.next=t),l.interleaved=t,Qt(e,n)}function $i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,gc(e,n)}}function Jd(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function br(e,t,n,l){var a=e.updateQueue;ln=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,d=c.next;c.next=null,r===null?i=d:r.next=d,r=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==r&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=c))}if(i!==null){var m=a.baseState;r=0,u=d=c=null,s=i;do{var p=s.lane,f=s.eventTime;if((l&p)===p){u!==null&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,b=s;switch(p=t,f=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){m=v.call(f,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,p=typeof v=="function"?v.call(f,m,p):v,p==null)break e;m=Le({},m,p);break e;case 2:ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=f,c=m):u=u.next=f,r|=p;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;p=s,s=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(u===null&&(c=m),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do r|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Hn|=r,e.lanes=r,e.memoizedState=m}}function Xd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],a=l.callback;if(a!==null){if(l.callback=null,l=n,typeof a!="function")throw Error(O(191,a));a.call(l)}}}var ni={},Mt=Cn(ni),Ua=Cn(ni),Wa=Cn(ni);function Gn(e){if(e===ni)throw Error(O(174));return e}function Ac(e,t){switch(fe(Wa,t),fe(Ua,e),fe(Mt,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ms(t,e)}he(Mt),fe(Mt,t)}function Ml(){he(Mt),he(Ua),he(Wa)}function up(e){Gn(Wa.current);var t=Gn(Mt.current),n=ms(t,e.type);t!==n&&(fe(Ua,e),fe(Mt,n))}function Vc(e){Ua.current===e&&(he(Mt),he(Ua))}var ve=Cn(0);function hr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bo=[];function Rc(){for(var e=0;e<Bo.length;e++)Bo[e]._workInProgressVersionPrimary=null;Bo.length=0}var Hi=Jt.ReactCurrentDispatcher,Oo=Jt.ReactCurrentBatchConfig,$n=0,Ce=null,Ne=null,Re=null,xr=!1,ka=!1,$a=0,rb=0;function Oe(){throw Error(O(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Mc(e,t,n,l,a,i){if($n=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?db:ub,e=n(l,a),ka){i=0;do{if(ka=!1,$a=0,25<=i)throw Error(O(301));i+=1,Re=Ne=null,t.updateQueue=null,Hi.current=mb,e=n(l,a)}while(ka)}if(Hi.current=_r,t=Ne!==null&&Ne.next!==null,$n=0,Re=Ne=Ce=null,xr=!1,t)throw Error(O(300));return e}function Gc(){var e=$a!==0;return $a=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Ce.memoizedState=Re=e:Re=Re.next=e,Re}function ht(){if(Ne===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Re===null?Ce.memoizedState:Re.next;if(t!==null)Re=t,Ne=e;else{if(e===null)throw Error(O(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Re===null?Ce.memoizedState=Re=e:Re=Re.next=e}return Re}function Ha(e,t){return typeof t=="function"?t(e):t}function Fo(e){var t=ht(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var l=Ne,a=l.baseQueue,i=n.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}l.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,l=l.baseState;var s=r=null,c=null,d=i;do{var u=d.lane;if(($n&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var m={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=m,r=l):c=c.next=m,Ce.lanes|=u,Hn|=u}d=d.next}while(d!==null&&d!==i);c===null?r=l:c.next=s,Tt(l,t.memoizedState)||(tt=!0),t.memoizedState=l,t.baseState=r,t.baseQueue=c,n.lastRenderedState=l}if(e=n.interleaved,e!==null){a=e;do i=a.lane,Ce.lanes|=i,Hn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qo(e){var t=ht(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);Tt(i,t.memoizedState)||(tt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function mp(){}function pp(e,t){var n=Ce,l=ht(),a=t(),i=!Tt(l.memoizedState,a);if(i&&(l.memoizedState=a,tt=!0),l=l.queue,jc(gp.bind(null,n,l,e),[e]),l.getSnapshot!==t||i||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,za(9,yp.bind(null,n,l,a,t),void 0,null),Ie===null)throw Error(O(349));$n&30||fp(n,t,a)}return a}function fp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yp(e,t,n,l){t.value=n,t.getSnapshot=l,bp(t)&&hp(e)}function gp(e,t,n){return n(function(){bp(t)&&hp(e)})}function bp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function hp(e){var t=Qt(e,1);t!==null&&Dt(t,e,1,-1)}function Zd(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:e},t.queue=e,e=e.dispatch=cb.bind(null,Ce,e),[t.memoizedState,e]}function za(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function xp(){return ht().memoizedState}function zi(e,t,n,l){var a=Vt();Ce.flags|=e,a.memoizedState=za(1|t,n,void 0,l===void 0?null:l)}function Br(e,t,n,l){var a=ht();l=l===void 0?null:l;var i=void 0;if(Ne!==null){var r=Ne.memoizedState;if(i=r.destroy,l!==null&&Ic(l,r.deps)){a.memoizedState=za(t,n,i,l);return}}Ce.flags|=e,a.memoizedState=za(1|t,n,i,l)}function eu(e,t){return zi(8390656,8,e,t)}function jc(e,t){return Br(2048,8,e,t)}function _p(e,t){return Br(4,2,e,t)}function vp(e,t){return Br(4,4,e,t)}function wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cp(e,t,n){return n=n!=null?n.concat([e]):null,Br(4,4,wp.bind(null,t,e),n)}function Bc(){}function Sp(e,t){var n=ht();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Ic(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Lp(e,t){var n=ht();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Ic(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function kp(e,t,n){return $n&21?(Tt(n,t)||(n=Nm(),Ce.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function ob(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var l=Oo.transition;Oo.transition={};try{e(!1),t()}finally{ue=n,Oo.transition=l}}function Dp(){return ht().memoizedState}function sb(e,t,n){var l=gn(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},Tp(e))Ep(t,n);else if(n=cp(e,t,n,l),n!==null){var a=Ye();Dt(n,e,l,a),Pp(n,t,l)}}function cb(e,t,n){var l=gn(e),a={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tp(e))Ep(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,s=i(r,n);if(a.hasEagerState=!0,a.eagerState=s,Tt(s,r)){var c=t.interleaved;c===null?(a.next=a,Pc(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=cp(e,t,a,l),n!==null&&(a=Ye(),Dt(n,e,l,a),Pp(n,t,l))}}function Tp(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Ep(e,t){ka=xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pp(e,t,n){if(n&4194240){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,gc(e,n)}}var _r={readContext:bt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},db={readContext:bt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=Vt();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=sb.bind(null,Ce,e),[l.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:Zd,useDebugValue:Bc,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=Zd(!1),t=e[0];return e=ob.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=Ce,a=Vt();if(xe){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Ie===null)throw Error(O(349));$n&30||fp(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,eu(gp.bind(null,l,i,e),[e]),l.flags|=2048,za(9,yp.bind(null,l,i,n,t),void 0,null),n},useId:function(){var e=Vt(),t=Ie.identifierPrefix;if(xe){var n=Ut,l=qt;n=(l&~(1<<32-kt(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=$a++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ub={readContext:bt,useCallback:Sp,useContext:bt,useEffect:jc,useImperativeHandle:Cp,useInsertionEffect:_p,useLayoutEffect:vp,useMemo:Lp,useReducer:Fo,useRef:xp,useState:function(){return Fo(Ha)},useDebugValue:Bc,useDeferredValue:function(e){var t=ht();return kp(t,Ne.memoizedState,e)},useTransition:function(){var e=Fo(Ha)[0],t=ht().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:pp,useId:Dp,unstable_isNewReconciler:!1},mb={readContext:bt,useCallback:Sp,useContext:bt,useEffect:jc,useImperativeHandle:Cp,useInsertionEffect:_p,useLayoutEffect:vp,useMemo:Lp,useReducer:qo,useRef:xp,useState:function(){return qo(Ha)},useDebugValue:Bc,useDeferredValue:function(e){var t=ht();return Ne===null?t.memoizedState=e:kp(t,Ne.memoizedState,e)},useTransition:function(){var e=qo(Ha)[0],t=ht().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:pp,useId:Dp,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vs(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Or={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Ye(),a=gn(e),i=$t(l,a);i.payload=t,n!=null&&(i.callback=n),t=fn(e,i,a),t!==null&&(Dt(t,e,a,l),$i(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Ye(),a=gn(e),i=$t(l,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=fn(e,i,a),t!==null&&(Dt(t,e,a,l),$i(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),l=gn(e),a=$t(n,l);a.tag=2,t!=null&&(a.callback=t),t=fn(e,a,l),t!==null&&(Dt(t,e,l,n),$i(t,e,l))}};function tu(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!Ba(n,l)||!Ba(a,i):!0}function Np(e,t,n){var l=!1,a=_n,i=t.contextType;return typeof i=="object"&&i!==null?i=bt(i):(a=lt(t)?Un:$e.current,l=t.contextTypes,i=(l=l!=null)?Vl(e,a):_n),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Or,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function nu(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Or.enqueueReplaceState(t,t.state,null)}function Rs(e,t,n,l){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Nc(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=bt(i):(i=lt(t)?Un:$e.current,a.context=Vl(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vs(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Or.enqueueReplaceState(a,a.state,null),br(e,n,a,l),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Gl(e,t){try{var n="",l=t;do n+=Oy(l),l=l.return;while(l);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Uo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pb=typeof WeakMap=="function"?WeakMap:Map;function Ap(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){wr||(wr=!0,$s=l),Is(e,t)},n}function Vp(e,t,n){n=$t(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var a=t.value;n.payload=function(){return l(a)},n.callback=function(){Is(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Is(e,t),typeof l!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function lu(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new pb;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(a.add(n),e=Db.bind(null,e,t,n),t.then(e,e))}function au(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function iu(e,t,n,l,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var fb=Jt.ReactCurrentOwner,tt=!1;function Ke(e,t,n,l){t.child=e===null?sp(t,null,n,l):Il(t,e.child,n,l)}function ru(e,t,n,l,a){n=n.render;var i=t.ref;return Tl(t,a),l=Mc(e,t,n,l,i,a),n=Gc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(xe&&n&&Sc(t),t.flags|=1,Ke(e,t,l,a),t.child)}function ou(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!zc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rp(e,t,i,l,a)):(e=Ji(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(r,l)&&e.ref===t.ref)return Yt(e,t,a)}return t.flags|=1,e=bn(i,l),e.ref=t.ref,e.return=t,t.child=e}function Rp(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(Ba(i,l)&&e.ref===t.ref)if(tt=!1,t.pendingProps=l=i,(e.lanes&a)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,Yt(e,t,a)}return Ms(e,t,n,l,a)}function Ip(e,t,n){var l=t.pendingProps,a=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(xl,it),it|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(xl,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=i!==null?i.baseLanes:n,fe(xl,it),it|=l}else i!==null?(l=i.baseLanes|n,t.memoizedState=null):l=n,fe(xl,it),it|=l;return Ke(e,t,a,n),t.child}function Mp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ms(e,t,n,l,a){var i=lt(n)?Un:$e.current;return i=Vl(t,i),Tl(t,a),n=Mc(e,t,n,l,i,a),l=Gc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(xe&&l&&Sc(t),t.flags|=1,Ke(e,t,n,a),t.child)}function su(e,t,n,l,a){if(lt(n)){var i=!0;mr(t)}else i=!1;if(Tl(t,a),t.stateNode===null)Ki(e,t),Np(t,n,l),Rs(t,n,l,a),l=!0;else if(e===null){var r=t.stateNode,s=t.memoizedProps;r.props=s;var c=r.context,d=n.contextType;typeof d=="object"&&d!==null?d=bt(d):(d=lt(n)?Un:$e.current,d=Vl(t,d));var u=n.getDerivedStateFromProps,m=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function";m||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==l||c!==d)&&nu(t,r,l,d),ln=!1;var p=t.memoizedState;r.state=p,br(t,l,r,a),c=t.memoizedState,s!==l||p!==c||nt.current||ln?(typeof u=="function"&&(Vs(t,n,u,l),c=t.memoizedState),(s=ln||tu(t,n,s,l,p,c,d))?(m||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=c),r.props=l,r.state=c,r.context=d,l=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,dp(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ct(t.type,s),r.props=d,m=t.pendingProps,p=r.context,c=n.contextType,typeof c=="object"&&c!==null?c=bt(c):(c=lt(n)?Un:$e.current,c=Vl(t,c));var f=n.getDerivedStateFromProps;(u=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==m||p!==c)&&nu(t,r,l,c),ln=!1,p=t.memoizedState,r.state=p,br(t,l,r,a);var v=t.memoizedState;s!==m||p!==v||nt.current||ln?(typeof f=="function"&&(Vs(t,n,f,l),v=t.memoizedState),(d=ln||tu(t,n,d,l,p,v,c)||!1)?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,v,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,v,c)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),r.props=l,r.state=v,r.context=c,l=d):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),l=!1)}return Gs(e,t,n,l,i,a)}function Gs(e,t,n,l,a,i){Mp(e,t);var r=(t.flags&128)!==0;if(!l&&!r)return a&&zd(t,n,!1),Yt(e,t,i);l=t.stateNode,fb.current=t;var s=r&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&r?(t.child=Il(t,e.child,null,i),t.child=Il(t,null,s,i)):Ke(e,t,s,i),t.memoizedState=l.state,a&&zd(t,n,!0),t.child}function Gp(e){var t=e.stateNode;t.pendingContext?Hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hd(e,t.context,!1),Ac(e,t.containerInfo)}function cu(e,t,n,l,a){return Rl(),kc(a),t.flags|=256,Ke(e,t,n,l),t.child}var js={dehydrated:null,treeContext:null,retryLane:0};function Bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function jp(e,t,n){var l=t.pendingProps,a=ve.current,i=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),fe(ve,a&1),e===null)return Ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=l.children,e=l.fallback,i?(l=t.mode,i=t.child,r={mode:"hidden",children:r},!(l&1)&&i!==null?(i.childLanes=0,i.pendingProps=r):i=Ur(r,l,0,null),e=qn(e,l,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Bs(n),t.memoizedState=js,e):Oc(t,r));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return yb(e,t,r,l,s,a,n);if(i){i=l.fallback,r=t.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:l.children};return!(r&1)&&t.child!==a?(l=t.child,l.childLanes=0,l.pendingProps=c,t.deletions=null):(l=bn(a,c),l.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=bn(s,i):(i=qn(i,r,n,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,r=e.child.memoizedState,r=r===null?Bs(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},i.memoizedState=r,i.childLanes=e.childLanes&~n,t.memoizedState=js,l}return i=e.child,e=i.sibling,l=bn(i,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function Oc(e,t){return t=Ur({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ci(e,t,n,l){return l!==null&&kc(l),Il(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yb(e,t,n,l,a,i,r){if(n)return t.flags&256?(t.flags&=-257,l=Uo(Error(O(422))),Ci(e,t,r,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=l.fallback,a=t.mode,l=Ur({mode:"visible",children:l.children},a,0,null),i=qn(i,a,r,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,t.mode&1&&Il(t,e.child,null,r),t.child.memoizedState=Bs(r),t.memoizedState=js,i);if(!(t.mode&1))return Ci(e,t,r,null);if(a.data==="$!"){if(l=a.nextSibling&&a.nextSibling.dataset,l)var s=l.dgst;return l=s,i=Error(O(419)),l=Uo(i,l,void 0),Ci(e,t,r,l)}if(s=(r&e.childLanes)!==0,tt||s){if(l=Ie,l!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(l.suspendedLanes|r)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Qt(e,a),Dt(l,e,a,-1))}return Hc(),l=Uo(Error(O(421))),Ci(e,t,r,l)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Tb.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ot=pn(a.nextSibling),st=t,xe=!0,Lt=null,e!==null&&(mt[pt++]=qt,mt[pt++]=Ut,mt[pt++]=Wn,qt=e.id,Ut=e.overflow,Wn=t),t=Oc(t,l.children),t.flags|=4096,t)}function du(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),As(e.return,t,n)}function Wo(e,t,n,l,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=a)}function Bp(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;if(Ke(e,t,l.children,n),l=ve.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&du(e,n,t);else if(e.tag===19)du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(fe(ve,l),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&hr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Wo(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&hr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Wo(t,!0,n,null,i);break;case"together":Wo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gb(e,t,n){switch(t.tag){case 3:Gp(t),Rl();break;case 5:up(t);break;case 1:lt(t.type)&&mr(t);break;case 4:Ac(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,a=t.memoizedProps.value;fe(yr,l._currentValue),l._currentValue=a;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(fe(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?jp(e,t,n):(fe(ve,ve.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);fe(ve,ve.current&1);break;case 19:if(l=(n&t.childLanes)!==0,e.flags&128){if(l)return Bp(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),fe(ve,ve.current),l)break;return null;case 22:case 23:return t.lanes=0,Ip(e,t,n)}return Yt(e,t,n)}var Op,Os,Fp,qp;Op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Os=function(){};Fp=function(e,t,n,l){var a=e.memoizedProps;if(a!==l){e=t.stateNode,Gn(Mt.current);var i=null;switch(n){case"input":a=ss(e,a),l=ss(e,l),i=[];break;case"select":a=Le({},a,{value:void 0}),l=Le({},l,{value:void 0}),i=[];break;case"textarea":a=us(e,a),l=us(e,l),i=[];break;default:typeof a.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=dr)}ps(n,l);var r;n=null;for(d in a)if(!l.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var s=a[d];for(r in s)s.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Aa.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in l){var c=l[d];if(s=a!=null?a[d]:void 0,l.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(r in s)!s.hasOwnProperty(r)||c&&c.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in c)c.hasOwnProperty(r)&&s[r]!==c[r]&&(n||(n={}),n[r]=c[r])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&be("scroll",e),i||s===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};qp=function(e,t,n,l){n!==l&&(t.flags|=4)};function oa(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&14680064,l|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function bb(e,t,n){var l=t.pendingProps;switch(Lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return lt(t.type)&&ur(),Fe(t),null;case 3:return l=t.stateNode,Ml(),he(nt),he($e),Rc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(Ks(Lt),Lt=null))),Os(e,t),Fe(t),null;case 5:Vc(t);var a=Gn(Wa.current);if(n=t.type,e!==null&&t.stateNode!=null)Fp(e,t,n,l,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(O(166));return Fe(t),null}if(e=Gn(Mt.current),vi(t)){l=t.stateNode,n=t.type;var i=t.memoizedProps;switch(l[Rt]=t,l[qa]=i,e=(t.mode&1)!==0,n){case"dialog":be("cancel",l),be("close",l);break;case"iframe":case"object":case"embed":be("load",l);break;case"video":case"audio":for(a=0;a<ga.length;a++)be(ga[a],l);break;case"source":be("error",l);break;case"img":case"image":case"link":be("error",l),be("load",l);break;case"details":be("toggle",l);break;case"input":xd(l,i),be("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!i.multiple},be("invalid",l);break;case"textarea":vd(l,i),be("invalid",l)}ps(n,i),a=null;for(var r in i)if(i.hasOwnProperty(r)){var s=i[r];r==="children"?typeof s=="string"?l.textContent!==s&&(i.suppressHydrationWarning!==!0&&_i(l.textContent,s,e),a=["children",s]):typeof s=="number"&&l.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&_i(l.textContent,s,e),a=["children",""+s]):Aa.hasOwnProperty(r)&&s!=null&&r==="onScroll"&&be("scroll",l)}switch(n){case"input":mi(l),_d(l,i,!0);break;case"textarea":mi(l),wd(l);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(l.onclick=dr)}l=a,t.updateQueue=l,l!==null&&(t.flags|=4)}else{r=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=r.createElement(n,{is:l.is}):(e=r.createElement(n),n==="select"&&(r=e,l.multiple?r.multiple=!0:l.size&&(r.size=l.size))):e=r.createElementNS(e,n),e[Rt]=t,e[qa]=l,Op(e,t,!1,!1),t.stateNode=e;e:{switch(r=fs(n,l),n){case"dialog":be("cancel",e),be("close",e),a=l;break;case"iframe":case"object":case"embed":be("load",e),a=l;break;case"video":case"audio":for(a=0;a<ga.length;a++)be(ga[a],e);a=l;break;case"source":be("error",e),a=l;break;case"img":case"image":case"link":be("error",e),be("load",e),a=l;break;case"details":be("toggle",e),a=l;break;case"input":xd(e,l),a=ss(e,l),be("invalid",e);break;case"option":a=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},a=Le({},l,{value:void 0}),be("invalid",e);break;case"textarea":vd(e,l),a=us(e,l),be("invalid",e);break;default:a=l}ps(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?xm(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bm(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Va(e,c):typeof c=="number"&&Va(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Aa.hasOwnProperty(i)?c!=null&&i==="onScroll"&&be("scroll",e):c!=null&&dc(e,i,c,r))}switch(n){case"input":mi(e),_d(e,l,!1);break;case"textarea":mi(e),wd(e);break;case"option":l.value!=null&&e.setAttribute("value",""+xn(l.value));break;case"select":e.multiple=!!l.multiple,i=l.value,i!=null?Sl(e,!!l.multiple,i,!1):l.defaultValue!=null&&Sl(e,!!l.multiple,l.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=dr)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)qp(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(O(166));if(n=Gn(Wa.current),Gn(Mt.current),vi(t)){if(l=t.stateNode,n=t.memoizedProps,l[Rt]=t,(i=l.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:_i(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(l.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[Rt]=t,t.stateNode=l}return Fe(t),null;case 13:if(he(ve),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&ot!==null&&t.mode&1&&!(t.flags&128))rp(),Rl(),t.flags|=98560,i=!1;else if(i=vi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(O(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(O(317));i[Rt]=t}else Rl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),i=!1}else Lt!==null&&(Ks(Lt),Lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ae===0&&(Ae=3):Hc())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Ml(),Os(e,t),e===null&&Oa(t.stateNode.containerInfo),Fe(t),null;case 10:return Ec(t.type._context),Fe(t),null;case 17:return lt(t.type)&&ur(),Fe(t),null;case 19:if(he(ve),i=t.memoizedState,i===null)return Fe(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)oa(i,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=hr(e),r!==null){for(t.flags|=128,oa(i,!1),l=r.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)i=n,e=l,i.flags&=14680066,r=i.alternate,r===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=r.childLanes,i.lanes=r.lanes,i.child=r.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=r.memoizedProps,i.memoizedState=r.memoizedState,i.updateQueue=r.updateQueue,i.type=r.type,e=r.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(ve,ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Te()>jl&&(t.flags|=128,l=!0,oa(i,!1),t.lanes=4194304)}else{if(!l)if(e=hr(r),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!xe)return Fe(t),null}else 2*Te()-i.renderingStartTime>jl&&n!==1073741824&&(t.flags|=128,l=!0,oa(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(n=i.last,n!==null?n.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Te(),t.sibling=null,n=ve.current,fe(ve,l?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return $c(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?it&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function hb(e,t){switch(Lc(t),t.tag){case 1:return lt(t.type)&&ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ml(),he(nt),he($e),Rc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vc(t),null;case 13:if(he(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ve),null;case 4:return Ml(),null;case 10:return Ec(t.type._context),null;case 22:case 23:return $c(),null;case 24:return null;default:return null}}var Si=!1,Ue=!1,xb=typeof WeakSet=="function"?WeakSet:Set,z=null;function hl(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){ke(e,t,l)}else n.current=null}function Fs(e,t,n){try{n()}catch(l){ke(e,t,l)}}var uu=!1;function _b(e,t){if(Ss=or,e=zm(),Cc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,s=-1,c=-1,d=0,u=0,m=e,p=null;t:for(;;){for(var f;m!==n||a!==0&&m.nodeType!==3||(s=r+a),m!==i||l!==0&&m.nodeType!==3||(c=r+l),m.nodeType===3&&(r+=m.nodeValue.length),(f=m.firstChild)!==null;)p=m,m=f;for(;;){if(m===e)break t;if(p===n&&++d===a&&(s=r),p===i&&++u===l&&(c=r),(f=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=f}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ls={focusedElem:e,selectionRange:n},or=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,_=v.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ct(t.type,b),_);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(C){ke(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=uu,uu=!1,v}function Da(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var a=l=l.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Fs(t,n,i)}a=a.next}while(a!==l)}}function Fr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function qs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Up(e){var t=e.alternate;t!==null&&(e.alternate=null,Up(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[qa],delete t[Ts],delete t[nb],delete t[lb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wp(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dr));else if(l!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}function Ws(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}var Me=null,St=!1;function en(e,t,n){for(n=n.child;n!==null;)$p(e,t,n),n=n.sibling}function $p(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Vr,n)}catch{}switch(n.tag){case 5:Ue||hl(n,t);case 6:var l=Me,a=St;Me=null,en(e,t,n),Me=l,St=a,Me!==null&&(St?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(St?(e=Me,n=n.stateNode,e.nodeType===8?Go(e.parentNode,n):e.nodeType===1&&Go(e,n),Ga(e)):Go(Me,n.stateNode));break;case 4:l=Me,a=St,Me=n.stateNode.containerInfo,St=!0,en(e,t,n),Me=l,St=a;break;case 0:case 11:case 14:case 15:if(!Ue&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){a=l=l.next;do{var i=a,r=i.destroy;i=i.tag,r!==void 0&&(i&2||i&4)&&Fs(n,t,r),a=a.next}while(a!==l)}en(e,t,n);break;case 1:if(!Ue&&(hl(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(s){ke(n,t,s)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Ue=(l=Ue)||n.memoizedState!==null,en(e,t,n),Ue=l):en(e,t,n);break;default:en(e,t,n)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xb),t.forEach(function(l){var a=Eb.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];try{var i=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,St=!1;break e;case 3:Me=s.stateNode.containerInfo,St=!0;break e;case 4:Me=s.stateNode.containerInfo,St=!0;break e}s=s.return}if(Me===null)throw Error(O(160));$p(i,r,a),Me=null,St=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){ke(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hp(t,e),t=t.sibling}function Hp(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),Nt(e),l&4){try{Da(3,e,e.return),Fr(3,e)}catch(b){ke(e,e.return,b)}try{Da(5,e,e.return)}catch(b){ke(e,e.return,b)}}break;case 1:vt(t,e),Nt(e),l&512&&n!==null&&hl(n,n.return);break;case 5:if(vt(t,e),Nt(e),l&512&&n!==null&&hl(n,n.return),e.flags&32){var a=e.stateNode;try{Va(a,"")}catch(b){ke(e,e.return,b)}}if(l&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,r=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&fm(a,i),fs(s,r);var d=fs(s,i);for(r=0;r<c.length;r+=2){var u=c[r],m=c[r+1];u==="style"?xm(a,m):u==="dangerouslySetInnerHTML"?bm(a,m):u==="children"?Va(a,m):dc(a,u,m,d)}switch(s){case"input":cs(a,i);break;case"textarea":ym(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var f=i.value;f!=null?Sl(a,!!i.multiple,f,!1):p!==!!i.multiple&&(i.defaultValue!=null?Sl(a,!!i.multiple,i.defaultValue,!0):Sl(a,!!i.multiple,i.multiple?[]:"",!1))}a[qa]=i}catch(b){ke(e,e.return,b)}}break;case 6:if(vt(t,e),Nt(e),l&4){if(e.stateNode===null)throw Error(O(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(b){ke(e,e.return,b)}}break;case 3:if(vt(t,e),Nt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(b){ke(e,e.return,b)}break;case 4:vt(t,e),Nt(e);break;case 13:vt(t,e),Nt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Uc=Te())),l&4&&pu(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(d=Ue)||u,vt(t,e),Ue=d):vt(t,e),Nt(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(z=e,u=e.child;u!==null;){for(m=z=u;z!==null;){switch(p=z,f=p.child,p.tag){case 0:case 11:case 14:case 15:Da(4,p,p.return);break;case 1:hl(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){l=p,n=p.return;try{t=l,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){ke(l,n,b)}}break;case 5:hl(p,p.return);break;case 22:if(p.memoizedState!==null){yu(m);continue}}f!==null?(f.return=p,z=f):yu(m)}u=u.sibling}e:for(u=null,m=e;;){if(m.tag===5){if(u===null){u=m;try{a=m.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,c=m.memoizedProps.style,r=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=hm("display",r))}catch(b){ke(e,e.return,b)}}}else if(m.tag===6){if(u===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(b){ke(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;u===m&&(u=null),m=m.return}u===m&&(u=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:vt(t,e),Nt(e),l&4&&pu(e);break;case 21:break;default:vt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wp(n)){var l=n;break e}n=n.return}throw Error(O(160))}switch(l.tag){case 5:var a=l.stateNode;l.flags&32&&(Va(a,""),l.flags&=-33);var i=mu(e);Ws(e,i,a);break;case 3:case 4:var r=l.stateNode.containerInfo,s=mu(e);Us(e,s,r);break;default:throw Error(O(161))}}catch(c){ke(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vb(e,t,n){z=e,zp(e)}function zp(e,t,n){for(var l=(e.mode&1)!==0;z!==null;){var a=z,i=a.child;if(a.tag===22&&l){var r=a.memoizedState!==null||Si;if(!r){var s=a.alternate,c=s!==null&&s.memoizedState!==null||Ue;s=Si;var d=Ue;if(Si=r,(Ue=c)&&!d)for(z=a;z!==null;)r=z,c=r.child,r.tag===22&&r.memoizedState!==null?gu(a):c!==null?(c.return=r,z=c):gu(a);for(;i!==null;)z=i,zp(i),i=i.sibling;z=a,Si=s,Ue=d}fu(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,z=i):fu(e)}}function fu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Fr(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!Ue)if(n===null)l.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);l.componentDidUpdate(a,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xd(t,i,l);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xd(t,r,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var m=u.dehydrated;m!==null&&Ga(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ue||t.flags&512&&qs(t)}catch(p){ke(t,t.return,p)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function yu(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function gu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fr(4,t)}catch(c){ke(t,n,c)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var a=t.return;try{l.componentDidMount()}catch(c){ke(t,a,c)}}var i=t.return;try{qs(t)}catch(c){ke(t,i,c)}break;case 5:var r=t.return;try{qs(t)}catch(c){ke(t,r,c)}}}catch(c){ke(t,t.return,c)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var wb=Math.ceil,vr=Jt.ReactCurrentDispatcher,Fc=Jt.ReactCurrentOwner,yt=Jt.ReactCurrentBatchConfig,se=0,Ie=null,Ee=null,Ge=0,it=0,xl=Cn(0),Ae=0,Ka=null,Hn=0,qr=0,qc=0,Ta=null,Ze=null,Uc=0,jl=1/0,Ot=null,wr=!1,$s=null,yn=null,Li=!1,cn=null,Cr=0,Ea=0,Hs=null,Qi=-1,Yi=0;function Ye(){return se&6?Te():Qi!==-1?Qi:Qi=Te()}function gn(e){return e.mode&1?se&2&&Ge!==0?Ge&-Ge:ib.transition!==null?(Yi===0&&(Yi=Nm()),Yi):(e=ue,e!==0||(e=window.event,e=e===void 0?16:jm(e.type)),e):1}function Dt(e,t,n,l){if(50<Ea)throw Ea=0,Hs=null,Error(O(185));Za(e,n,l),(!(se&2)||e!==Ie)&&(e===Ie&&(!(se&2)&&(qr|=n),Ae===4&&on(e,Ge)),at(e,l),n===1&&se===0&&!(t.mode&1)&&(jl=Te()+500,jr&&Sn()))}function at(e,t){var n=e.callbackNode;ig(e,t);var l=rr(e,e===Ie?Ge:0);if(l===0)n!==null&&Ld(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&Ld(n),t===1)e.tag===0?ab(bu.bind(null,e)):lp(bu.bind(null,e)),eb(function(){!(se&6)&&Sn()}),n=null;else{switch(Am(l)){case 1:n=yc;break;case 4:n=Em;break;case 16:n=ir;break;case 536870912:n=Pm;break;default:n=ir}n=tf(n,Kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kp(e,t){if(Qi=-1,Yi=0,se&6)throw Error(O(327));var n=e.callbackNode;if(El()&&e.callbackNode!==n)return null;var l=rr(e,e===Ie?Ge:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=Sr(e,l);else{t=l;var a=se;se|=2;var i=Yp();(Ie!==e||Ge!==t)&&(Ot=null,jl=Te()+500,Fn(e,t));do try{Lb();break}catch(s){Qp(e,s)}while(!0);Tc(),vr.current=i,se=a,Ee!==null?t=0:(Ie=null,Ge=0,t=Ae)}if(t!==0){if(t===2&&(a=xs(e),a!==0&&(l=a,t=zs(e,a))),t===1)throw n=Ka,Fn(e,0),on(e,l),at(e,Te()),n;if(t===6)on(e,l);else{if(a=e.current.alternate,!(l&30)&&!Cb(a)&&(t=Sr(e,l),t===2&&(i=xs(e),i!==0&&(l=i,t=zs(e,i))),t===1))throw n=Ka,Fn(e,0),on(e,l),at(e,Te()),n;switch(e.finishedWork=a,e.finishedLanes=l,t){case 0:case 1:throw Error(O(345));case 2:Vn(e,Ze,Ot);break;case 3:if(on(e,l),(l&130023424)===l&&(t=Uc+500-Te(),10<t)){if(rr(e,0)!==0)break;if(a=e.suspendedLanes,(a&l)!==l){Ye(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ds(Vn.bind(null,e,Ze,Ot),t);break}Vn(e,Ze,Ot);break;case 4:if(on(e,l),(l&4194240)===l)break;for(t=e.eventTimes,a=-1;0<l;){var r=31-kt(l);i=1<<r,r=t[r],r>a&&(a=r),l&=~i}if(l=a,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*wb(l/1960))-l,10<l){e.timeoutHandle=Ds(Vn.bind(null,e,Ze,Ot),l);break}Vn(e,Ze,Ot);break;case 5:Vn(e,Ze,Ot);break;default:throw Error(O(329))}}}return at(e,Te()),e.callbackNode===n?Kp.bind(null,e):null}function zs(e,t){var n=Ta;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=Sr(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Ks(t)),e}function Ks(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Cb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!Tt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~qc,t&=~qr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),l=1<<n;e[n]=-1,t&=~l}}function bu(e){if(se&6)throw Error(O(327));El();var t=rr(e,0);if(!(t&1))return at(e,Te()),null;var n=Sr(e,t);if(e.tag!==0&&n===2){var l=xs(e);l!==0&&(t=l,n=zs(e,l))}if(n===1)throw n=Ka,Fn(e,0),on(e,t),at(e,Te()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,Ze,Ot),at(e,Te()),null}function Wc(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(jl=Te()+500,jr&&Sn())}}function zn(e){cn!==null&&cn.tag===0&&!(se&6)&&El();var t=se;se|=1;var n=yt.transition,l=ue;try{if(yt.transition=null,ue=1,e)return e()}finally{ue=l,yt.transition=n,se=t,!(se&6)&&Sn()}}function $c(){it=xl.current,he(xl)}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zg(n)),Ee!==null)for(n=Ee.return;n!==null;){var l=n;switch(Lc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ur();break;case 3:Ml(),he(nt),he($e),Rc();break;case 5:Vc(l);break;case 4:Ml();break;case 13:he(ve);break;case 19:he(ve);break;case 10:Ec(l.type._context);break;case 22:case 23:$c()}n=n.return}if(Ie=e,Ee=e=bn(e.current,null),Ge=it=t,Ae=0,Ka=null,qc=qr=Hn=0,Ze=Ta=null,Mn!==null){for(t=0;t<Mn.length;t++)if(n=Mn[t],l=n.interleaved,l!==null){n.interleaved=null;var a=l.next,i=n.pending;if(i!==null){var r=i.next;i.next=a,l.next=r}n.pending=l}Mn=null}return e}function Qp(e,t){do{var n=Ee;try{if(Tc(),Hi.current=_r,xr){for(var l=Ce.memoizedState;l!==null;){var a=l.queue;a!==null&&(a.pending=null),l=l.next}xr=!1}if($n=0,Re=Ne=Ce=null,ka=!1,$a=0,Fc.current=null,n===null||n.return===null){Ae=1,Ka=t,Ee=null;break}e:{var i=e,r=n.return,s=n,c=t;if(t=Ge,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=s,m=u.tag;if(!(u.mode&1)&&(m===0||m===11||m===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=au(r);if(f!==null){f.flags&=-257,iu(f,r,s,i,t),f.mode&1&&lu(i,d,t),t=f,c=d;var v=t.updateQueue;if(v===null){var b=new Set;b.add(c),t.updateQueue=b}else v.add(c);break e}else{if(!(t&1)){lu(i,d,t),Hc();break e}c=Error(O(426))}}else if(xe&&s.mode&1){var _=au(r);if(_!==null){!(_.flags&65536)&&(_.flags|=256),iu(_,r,s,i,t),kc(Gl(c,s));break e}}i=c=Gl(c,s),Ae!==4&&(Ae=2),Ta===null?Ta=[i]:Ta.push(i),i=r;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Ap(i,c,t);Jd(i,g);break e;case 1:s=c;var y=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yn===null||!yn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=Vp(i,s,t);Jd(i,C);break e}}i=i.return}while(i!==null)}Xp(n)}catch(k){t=k,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function Yp(){var e=vr.current;return vr.current=_r,e===null?_r:e}function Hc(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ie===null||!(Hn&268435455)&&!(qr&268435455)||on(Ie,Ge)}function Sr(e,t){var n=se;se|=2;var l=Yp();(Ie!==e||Ge!==t)&&(Ot=null,Fn(e,t));do try{Sb();break}catch(a){Qp(e,a)}while(!0);if(Tc(),se=n,vr.current=l,Ee!==null)throw Error(O(261));return Ie=null,Ge=0,Ae}function Sb(){for(;Ee!==null;)Jp(Ee)}function Lb(){for(;Ee!==null&&!Yy();)Jp(Ee)}function Jp(e){var t=ef(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?Xp(e):Ee=t,Fc.current=null}function Xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hb(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ee=null;return}}else if(n=bb(n,t,it),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ae===0&&(Ae=5)}function Vn(e,t,n){var l=ue,a=yt.transition;try{yt.transition=null,ue=1,kb(e,t,n,l)}finally{yt.transition=a,ue=l}return null}function kb(e,t,n,l){do El();while(cn!==null);if(se&6)throw Error(O(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(rg(e,i),e===Ie&&(Ee=Ie=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,tf(ir,function(){return El(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=yt.transition,yt.transition=null;var r=ue;ue=1;var s=se;se|=4,Fc.current=null,_b(e,n),Hp(n,e),Hg(Ls),or=!!Ss,Ls=Ss=null,e.current=n,vb(n),Jy(),se=s,ue=r,yt.transition=i}else e.current=n;if(Li&&(Li=!1,cn=e,Cr=a),i=e.pendingLanes,i===0&&(yn=null),eg(n.stateNode),at(e,Te()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],l(a.value,{componentStack:a.stack,digest:a.digest});if(wr)throw wr=!1,e=$s,$s=null,e;return Cr&1&&e.tag!==0&&El(),i=e.pendingLanes,i&1?e===Hs?Ea++:(Ea=0,Hs=e):Ea=0,Sn(),null}function El(){if(cn!==null){var e=Am(Cr),t=yt.transition,n=ue;try{if(yt.transition=null,ue=16>e?16:e,cn===null)var l=!1;else{if(e=cn,cn=null,Cr=0,se&6)throw Error(O(331));var a=se;for(se|=4,z=e.current;z!==null;){var i=z,r=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(z=d;z!==null;){var u=z;switch(u.tag){case 0:case 11:case 15:Da(8,u,i)}var m=u.child;if(m!==null)m.return=u,z=m;else for(;z!==null;){u=z;var p=u.sibling,f=u.return;if(Up(u),u===d){z=null;break}if(p!==null){p.return=f,z=p;break}z=f}}}var v=i.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}z=i}}if(i.subtreeFlags&2064&&r!==null)r.return=i,z=r;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Da(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,z=g;break e}z=i.return}}var y=e.current;for(z=y;z!==null;){r=z;var h=r.child;if(r.subtreeFlags&2064&&h!==null)h.return=r,z=h;else e:for(r=y;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fr(9,s)}}catch(k){ke(s,s.return,k)}if(s===r){z=null;break e}var C=s.sibling;if(C!==null){C.return=s.return,z=C;break e}z=s.return}}if(se=a,Sn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Vr,e)}catch{}l=!0}return l}finally{ue=n,yt.transition=t}}return!1}function hu(e,t,n){t=Gl(n,t),t=Ap(e,t,1),e=fn(e,t,1),t=Ye(),e!==null&&(Za(e,1,t),at(e,t))}function ke(e,t,n){if(e.tag===3)hu(e,e,n);else for(;t!==null;){if(t.tag===3){hu(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yn===null||!yn.has(l))){e=Gl(n,e),e=Vp(t,e,1),t=fn(t,e,1),e=Ye(),t!==null&&(Za(t,1,e),at(t,e));break}}t=t.return}}function Db(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Ge&n)===n&&(Ae===4||Ae===3&&(Ge&130023424)===Ge&&500>Te()-Uc?Fn(e,0):qc|=n),at(e,t)}function Zp(e,t){t===0&&(e.mode&1?(t=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):t=1);var n=Ye();e=Qt(e,t),e!==null&&(Za(e,t,n),at(e,n))}function Tb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zp(e,n)}function Eb(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(O(314))}l!==null&&l.delete(t),Zp(e,n)}var ef;ef=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,gb(e,t,n);tt=!!(e.flags&131072)}else tt=!1,xe&&t.flags&1048576&&ap(t,fr,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Ki(e,t),e=t.pendingProps;var a=Vl(t,$e.current);Tl(t,n),a=Mc(null,t,l,e,a,n);var i=Gc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(l)?(i=!0,mr(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Nc(t),a.updater=Or,t.stateNode=a,a._reactInternals=t,Rs(t,l,e,n),t=Gs(null,t,l,!0,i,n)):(t.tag=0,xe&&i&&Sc(t),Ke(null,t,a,n),t=t.child),t;case 16:l=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,a=l._init,l=a(l._payload),t.type=l,a=t.tag=Nb(l),e=Ct(l,e),a){case 0:t=Ms(null,t,l,e,n);break e;case 1:t=su(null,t,l,e,n);break e;case 11:t=ru(null,t,l,e,n);break e;case 14:t=ou(null,t,l,Ct(l.type,e),n);break e}throw Error(O(306,l,""))}return t;case 0:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Ct(l,a),Ms(e,t,l,a,n);case 1:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Ct(l,a),su(e,t,l,a,n);case 3:e:{if(Gp(t),e===null)throw Error(O(387));l=t.pendingProps,i=t.memoizedState,a=i.element,dp(e,t),br(t,l,null,n);var r=t.memoizedState;if(l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Gl(Error(O(423)),t),t=cu(e,t,l,n,a);break e}else if(l!==a){a=Gl(Error(O(424)),t),t=cu(e,t,l,n,a);break e}else for(ot=pn(t.stateNode.containerInfo.firstChild),st=t,xe=!0,Lt=null,n=sp(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rl(),l===a){t=Yt(e,t,n);break e}Ke(e,t,l,n)}t=t.child}return t;case 5:return up(t),e===null&&Ns(t),l=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,r=a.children,ks(l,a)?r=null:i!==null&&ks(l,i)&&(t.flags|=32),Mp(e,t),Ke(e,t,r,n),t.child;case 6:return e===null&&Ns(t),null;case 13:return jp(e,t,n);case 4:return Ac(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Il(t,null,l,n):Ke(e,t,l,n),t.child;case 11:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Ct(l,a),ru(e,t,l,a,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,a=t.pendingProps,i=t.memoizedProps,r=a.value,fe(yr,l._currentValue),l._currentValue=r,i!==null)if(Tt(i.value,r)){if(i.children===a.children&&!nt.current){t=Yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){r=i.child;for(var c=s.firstContext;c!==null;){if(c.context===l){if(i.tag===1){c=$t(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),As(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)r=i.type===t.type?null:i.child;else if(i.tag===18){if(r=i.return,r===null)throw Error(O(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),As(r,n,t),r=i.sibling}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}Ke(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,l=t.pendingProps.children,Tl(t,n),a=bt(a),l=l(a),t.flags|=1,Ke(e,t,l,n),t.child;case 14:return l=t.type,a=Ct(l,t.pendingProps),a=Ct(l.type,a),ou(e,t,l,a,n);case 15:return Rp(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Ct(l,a),Ki(e,t),t.tag=1,lt(l)?(e=!0,mr(t)):e=!1,Tl(t,n),Np(t,l,a),Rs(t,l,a,n),Gs(null,t,l,!0,e,n);case 19:return Bp(e,t,n);case 22:return Ip(e,t,n)}throw Error(O(156,t.tag))};function tf(e,t){return Tm(e,t)}function Pb(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,l){return new Pb(e,t,n,l)}function zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nb(e){if(typeof e=="function")return zc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mc)return 11;if(e===pc)return 14}return 2}function bn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ji(e,t,n,l,a,i){var r=2;if(l=e,typeof e=="function")zc(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case cl:return qn(n.children,a,i,t);case uc:r=8,a|=8;break;case as:return e=ft(12,n,t,a|2),e.elementType=as,e.lanes=i,e;case is:return e=ft(13,n,t,a),e.elementType=is,e.lanes=i,e;case rs:return e=ft(19,n,t,a),e.elementType=rs,e.lanes=i,e;case um:return Ur(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cm:r=10;break e;case dm:r=9;break e;case mc:r=11;break e;case pc:r=14;break e;case nn:r=16,l=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=ft(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function qn(e,t,n,l){return e=ft(7,e,l,t),e.lanes=n,e}function Ur(e,t,n,l){return e=ft(22,e,l,t),e.elementType=um,e.lanes=n,e.stateNode={isHidden:!1},e}function $o(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function Ho(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ab(e,t,n,l,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=l,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Kc(e,t,n,l,a,i,r,s,c){return e=new Ab(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ft(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(i),e}function Vb(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sl,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function nf(e){if(!e)return _n;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(lt(n))return np(e,n,t)}return t}function lf(e,t,n,l,a,i,r,s,c){return e=Kc(n,l,!0,e,a,i,r,s,c),e.context=nf(null),n=e.current,l=Ye(),a=gn(n),i=$t(l,a),i.callback=t??null,fn(n,i,a),e.current.lanes=a,Za(e,a,l),at(e,l),e}function Wr(e,t,n,l){var a=t.current,i=Ye(),r=gn(a);return n=nf(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(i,r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=fn(a,t,r),e!==null&&(Dt(e,a,r,i),$i(e,a,r)),r}function Lr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qc(e,t){xu(e,t),(e=e.alternate)&&xu(e,t)}function Rb(){return null}var af=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}$r.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Wr(e,t,null,null)};$r.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){Wr(null,e,null,null)}),t[Kt]=null}};function $r(e){this._internalRoot=e}$r.prototype.unstable_scheduleHydration=function(e){if(e){var t=Im();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Gm(e)}};function Jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _u(){}function Ib(e,t,n,l,a){if(a){if(typeof l=="function"){var i=l;l=function(){var d=Lr(r);i.call(d)}}var r=lf(t,l,e,0,null,!1,!1,"",_u);return e._reactRootContainer=r,e[Kt]=r.current,Oa(e.nodeType===8?e.parentNode:e),zn(),r}for(;a=e.lastChild;)e.removeChild(a);if(typeof l=="function"){var s=l;l=function(){var d=Lr(c);s.call(d)}}var c=Kc(e,0,!1,null,null,!1,!1,"",_u);return e._reactRootContainer=c,e[Kt]=c.current,Oa(e.nodeType===8?e.parentNode:e),zn(function(){Wr(t,c,n,l)}),c}function zr(e,t,n,l,a){var i=n._reactRootContainer;if(i){var r=i;if(typeof a=="function"){var s=a;a=function(){var c=Lr(r);s.call(c)}}Wr(t,r,e,a)}else r=Ib(n,t,e,a,l);return Lr(r)}Vm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ya(t.pendingLanes);n!==0&&(gc(t,n|1),at(t,Te()),!(se&6)&&(jl=Te()+500,Sn()))}break;case 13:zn(function(){var l=Qt(e,1);if(l!==null){var a=Ye();Dt(l,e,1,a)}}),Qc(e,1)}};bc=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Ye();Dt(t,e,134217728,n)}Qc(e,134217728)}};Rm=function(e){if(e.tag===13){var t=gn(e),n=Qt(e,t);if(n!==null){var l=Ye();Dt(n,e,t,l)}Qc(e,t)}};Im=function(){return ue};Mm=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};gs=function(e,t,n){switch(t){case"input":if(cs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=Gr(l);if(!a)throw Error(O(90));pm(l),cs(l,a)}}}break;case"textarea":ym(e,n);break;case"select":t=n.value,t!=null&&Sl(e,!!n.multiple,t,!1)}};wm=Wc;Cm=zn;var Mb={usingClientEntryPoint:!1,Events:[ti,pl,Gr,_m,vm,Wc]},sa={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gb={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=km(e),e===null?null:e.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||Rb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{Vr=ki.inject(Gb),It=ki}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mb;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jc(t))throw Error(O(200));return Vb(e,t,null,n)};dt.createRoot=function(e,t){if(!Jc(e))throw Error(O(299));var n=!1,l="",a=af;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Kc(e,1,!1,null,null,n,!1,l,a),e[Kt]=t.current,Oa(e.nodeType===8?e.parentNode:e),new Yc(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=km(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return zn(e)};dt.hydrate=function(e,t,n){if(!Hr(t))throw Error(O(200));return zr(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Jc(e))throw Error(O(405));var l=n!=null&&n.hydratedSources||null,a=!1,i="",r=af;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=lf(t,null,e,1,n??null,a,!1,i,r),e[Kt]=t.current,Oa(e),l)for(e=0;e<l.length;e++)n=l[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new $r(t)};dt.render=function(e,t,n){if(!Hr(t))throw Error(O(200));return zr(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!Hr(e))throw Error(O(40));return e._reactRootContainer?(zn(function(){zr(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};dt.unstable_batchedUpdates=Wc;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!Hr(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return zr(e,t,n,!1,l)};dt.version="18.3.1-next-f1338f8080-20240426";function rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf)}catch(e){console.error(e)}}rf(),im.exports=dt;var jb=im.exports,vu=jb;ns.createRoot=vu.createRoot,ns.hydrateRoot=vu.hydrateRoot;const Di=[{id:"envy-04237218B0",label:"⭐ Envy - 04237218B0",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237218B0"},modbusSlaveId:1},{id:"envy-04237219C3",label:"Envy - 04237219C3",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237219C3"},modbusSlaveId:2}],Bb=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Dry Contact Reuse",help:"Selects how the inverter's dry contact relay is reused. It can be configured for various control functions such as grid export limitation, smart load control, or dark start.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Dry Contact Reuse",arg:"DryContactReuse",dtype:"enum",description:"",longdescription:"",meanings:{0:"None",1:"Rapid Shutdown (RSD)",2:"Black Start",3:"Smart Load",4:"Non-critical Load"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.DryContactReuse"}]}],section_id:"inverter.basic"},{sectionTitle:"Current Transformer (CT) Settings",subsections:[{title:null,visibility:"advanced",collapsedByDefault:!0,points:[{title:"Meter Measurement Source",help:"The inverter can either read CTs directly, or read a stand-alone electric meter.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Meter Type",arg:"MeterType",dtype:"enum",description:"",longdescription:"",meanings:{0:"Meter",1:"CTs"}}],protocol:{modbus:{address:1,register_type:3,size:1}},command_id:"Modbus.MeterType"}],subsection_id:"measurement-advanced"}],section_id:"inverter.measurement"},{sectionTitle:"PV",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"PV Sell to Grid",help:"You may disable solar power export to the utility grid. This setting supports NEM3 compatibility.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"PV Sell to Grid",arg:"PVSellToGrid",dtype:"bitfield16",description:"",longdescription:"",meanings:{7:"Enable export of PV power to the grid"}}],protocol:{modbus:{address:3,register_type:3,size:1}},command_id:"Modbus.PVSellToGrid"}]}]}],theme_id:"inverter"},{themeName:"Battery",sections:[{sectionTitle:"Battery Scheduling",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Discharge only Control Style",help:"Selects how 'discharge only' is controlled. 'Discharge only' can stop when a voltage limit is reached or when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"DischargeOnlyControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{4:"Enable SOC control (disable for voltage control)"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.DischargeOnlyControlStyle"},{title:"Discharge only Stop Voltage",help:"Sets the battery voltage at which discharge only will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Discharge only Stop Voltage",arg:"DischargeOnlyStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:202,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischargeOnlyStopVoltage"}]}]},{sectionTitle:"Grid Charge",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Grid Charge Control Style",help:"Selects how grid charging is controlled. Charging can follow a time schedule, stop when a voltage limit is reached, or stop when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"GridChargeControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{1:"Charge based on time",2:"Stop charging at voltage limit",3:"Stop charging at SOC limit"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.GridChargeControlStyle"},{title:"Grid Charging Start Voltage",help:"Sets the battery voltage at which grid charging will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Start Voltage",arg:"GridChargingStartVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:158,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStartVoltage"},{title:"Grid Charging Stop Voltage",help:"Sets the maximum battery voltage during grid charging. Once this voltage is reached, the inverter will stop charging from the grid to protect the battery and prevent overvoltage.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Stop Voltage",arg:"GridChargingStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:159,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStopVoltage"}]}]},{sectionTitle:"Battery Base",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Max Charge Current",help:"Instead of using the presets, you may set the charge current directly in amps.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Charge Current (A)",arg:"ChargeCurr",dtype:"Number",description:"",longdescription:"",unit:"A",range:{min:0}}],protocol:{modbus:{address:101,register_type:3,size:1}},command_id:"Modbus.ChargeCurr"},{title:"Battery Voltage Correction",help:"Recalibrate the battery voltage reading.  Enter the actual ground-truth voltage of the battery here.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Battery Voltage Correction",arg:"BatteryVoltageCorrection",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:999,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischgCurr"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Generator Charge Mode",help:"Selects how the generator charges the battery. When enabled, the generator will charge the battery automatically based on voltage or SOC.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Mode",arg:"GenChg",dtype:"enum",description:"",longdescription:"",meanings:{0:"Based on SOC",1:"Based on Voltage"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.GenChg"},{title:"Generator Charge Start Voltage",help:"Sets the battery voltage at which the generator begins charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Start Voltage",arg:"GenChgStartVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:194,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgStartVolt"},{title:"Generator Charge End Voltage",help:"Sets the battery voltage at which the generator stops charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge End Voltage",arg:"GenChgEndVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:195,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgEndVolt"}]}]}]}],Ob={themes:Bb},Fb=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"System Time",help:"Date and time the inverter will use to run schedules",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Year",arg:"Year",dtype:"Number",description:"",longdescription:"",range:{min:0,max:99},telemetry:{model:"40104",block:"fixed",point:"Year"}},{name:"Mon",arg:"Mon",dtype:"Number",description:"",longdescription:"",range:{min:1,max:12},telemetry:{model:"40104",block:"fixed",point:"Month"}},{name:"Day",arg:"Day",dtype:"Number",description:"",longdescription:"",range:{min:1,max:31},telemetry:{model:"40104",block:"fixed",point:"Day"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"Hour"}},{name:"Min",arg:"Min",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Minute"}},{name:"Sec",arg:"Sec",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Second"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"SystemTime"}},command_id:"Basic.SystemTime",widget:"datetime"},{title:"Grid Interaction",help:"Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Off-grid",1:"Grid-tied"},friendly_meanings:{0:"Off-Grid.  There is no available power grid",1:"Grid-Tied. Grid power is available."},telemetry:{model:"40104",block:"fixed",point:"OperatingMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"OperatingMode"}},command_id:"Basic.OperatingMode"},{title:"Operating Mode",help:"Select how solar power is prioritized. Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed). Export first: PV powers the home, then exports to grid, and charges the battery last. Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed). If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Self used mode",1:"Feed-in priority mode",2:"Back-up mode"},friendly_meanings:{0:"Self-consumption",1:"Export first",2:"Backup power"},telemetry:{model:"40104",block:"fixed",point:"WorkMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"WorkMode"}},command_id:"Basic.WorkMode"},{title:"Ignore Grid-Loss Warning",help:"When enabled, the inverter will not treat the absence of grid power as an alarm. Use this mode for permanently off-grid systems where grid connection is unavailable.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid-Loss Behavior",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Treat as Alarm",1:"Ignore (Off-Grid Mode)"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"GridLossWarningClear"}},command_id:"Basic.GridLossWarningClear"},{title:"Power Status",help:"Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"Other"},friendly_meanings:{0:"Standby",1:"Running"},telemetry:{model:"40104",block:"fixed",point:"PowerControl"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerStatus"}},command_id:"Basic.PowerStatus"},{title:"Reset to Factory Defaults",help:"Restores all inverter configuration parameters to their original factory values. Use with caution â€” this cannot be undone.",element_type:"service",access:"INVOKE",readOnly:!1,entries:[],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"AllToDefault"}},command_id:"Basic.AllToDefault",invokeButtonText:"Reset Now"},{title:"Inverter Power Control",help:`Turns the inverter output on or off.\r
\r
â€¢ **Standby:** AC output is disabled, but control circuits remain powered.\r
â€¢ **Power On:** Enables AC output and normal inverter operation.`,element_type:"service",access:"INVOKE",readOnly:!1,entries:[{name:"Power State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"PowerOn"},friendly_meanings:{0:"Standby",1:"Power On"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerControl"}},command_id:"Basic.PowerControl",showInvokeButton:!1,showHistory:!0,showRefresh:!0,showSetButton:!0}]}],section_id:"inverter.basic"},{sectionTitle:"Power Limits",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Limit Power Output",help:"Shows whether power output limiting is currently active. When not limited, the inverter can deliver its full available power (subject only to natural hardware limits). When limited, an external or configured cap is applied to restrict inverter output to the specified Power Limit.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not limited - full output",1:"Limit output power"},telemetry:{model:"40104",block:"fixed",point:"LimitActivePowerStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LimitActivePower",Element:"LimitActivePowerStatus"}},command_id:"LimitActivePower.LimitActivePowerStatus"},{title:"Power Limit",help:"The inverter's present active-power output limit as a percentage of its rated capacity. If power limiting is active, the inverter will limit its output power to this percentage of its rated capacity.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Power Limit",arg:"Power",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ActivePowerPercent"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LimitActivePower",Element:"ActivePowerPercent"}},command_id:"LimitActivePower.ActivePowerPercent"}]}]},{sectionTitle:"Selling Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Allow Selling Power to Grid",help:"Allows the inverter to sell/export power back to the utility grid. Enable this only if local regulations and interconnect agreements permit grid export.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not allowed",1:"Allowed"},telemetry:{model:"40104",block:"fixed",point:"FeedInGridStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FeedInGrid",Element:"FeedInGridStatus"}},command_id:"FeedInGrid.FeedInGridStatus"},{title:"Max Power Sold to Grid",help:"Sets the maximum power the inverter is allowed to sell/export to the grid. Use this to meet utility export limits or site commissioning requirements.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power",arg:"Power",dtype:"Number",description:"",longdescription:"",unit:"kW",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"FeedInGridMaxPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FeedInGrid",Element:"FeedInGridMaxPower"}},command_id:"FeedInGrid.FeedInGridMaxPower"},{title:"Prevent Grid Export: Strict Mode",help:"Keeps power export at or near zero by adjusting inverter output in real time. When enabled, the inverter supplies only local (on-site) loads and will not send power back to the grid. This mode is required when grid export is not allowed. Ensure the CTs are installed on the grid connection point and  not on the inverter's load side, so the inverter can correctly detect and prevent export.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Fast Zero Export",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable strict mode",1:"Enable strict mode"},telemetry:{model:"40104",block:"fixed",point:"FastzeroExportstatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FeedInGrid",Element:"FastzeroExportstatus"}},command_id:"FeedInGrid.FastZeroExportStatus"}]}]},{sectionTitle:"Parallel",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Parallel unit ID",help:"The Unit ID (also known as the unit ID, slave ID, or node ID) for this inverter. The primary inverter should use address 1, and any secondary inverters should use 2 or higher. This sets the modbus address that inverters use to communicate with each other. Each inverter that communicates on the same Modbus communication line must have a unique address, but addresses do not need to be globally unique across separate, unconnected systems.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Address",arg:"Addr",dtype:"Number",description:"",longdescription:"",range:{min:1,max:255},telemetry:{model:"40104",block:"fixed",point:"ModbusAddr"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ModbusAddr"}},command_id:"Parallel.ModbusAddr"},{title:"System Type",help:`Defines how this inverter participates in a multi-inverter or multi-phase system.\r
\r
â€¢ No Parallel: Single inverter system.\r
â€¢ Single-phase Parallel (Master / Secondary): Multiple inverters on one phase.\r
â€¢ Three-phase Parallel (Master): Multiple inverters forming R/S/T phases.`,element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Parallel Role / Topology",arg:"Type",dtype:"enum",description:"",longdescription:"",meanings:{0:"no parallel (single one)",1:"Single-phase parallel(Master)",2:"Secondary",3:"Three phase parallel(Master)"},friendly_meanings:{0:"No Parallel (Single Inverter)",1:"Single-Phase Parallel (Master)",2:"Single-Phase Parallel (Secondary)",3:"Three-Phase Parallel (Master)"},telemetry:{model:"40104",block:"fixed",point:"SystemType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"SystemType"}},command_id:"Parallel.SystemType"},{title:"Assigned Phase",help:"Selects which output phase this inverter is responsible for in a three-phase system. R, S, and T correspond to L1, L2, and L3.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Phase",arg:"Phase",dtype:"enum",description:"",longdescription:"",meanings:{0:"R",1:"S",2:"T"},friendly_meanings:{0:"R",1:"S",2:"T"},telemetry:{model:"40104",block:"fixed",point:"ComposedPhase"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ComposedPhase"}},command_id:"Parallel.ComposedPhase"},{title:"Clear Detected Phases",help:"Clears the detected phases for this inverter.",element_type:"attribute",access:"W",readOnly:!1,entries:[{name:"Phase",arg:"Phase",dtype:"enum",description:"",longdescription:"",meanings:{0:"Clear"},friendly_meanings:{0:"Clear"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ClearDetectedPhases"}},command_id:"Parallel.ClearDetectedPhases"},{title:"Detected Grid Phases",help:"The output phase this inverter is responsible for in a three-phase system. R, S, and T correspond to L1, L2, and L3.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Phase",arg:"Phase",dtype:"enum",description:"",longdescription:"",meanings:{0:"None",1:"R",2:"S",3:"T"},friendly_meanings:{0:"None",1:"R",2:"S",3:"T"},telemetry:{model:"40104",block:"fixed",point:"DetectedGridPhases"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"DetectedGridPhases"}},command_id:"Parallel.DetectedGridPhases"},{title:"Share Battery",help:"Allows inverters in a parallel group to use a common battery bank instead of keeping batteries isolated per inverter.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Installation Method",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inverters have Separate Batteries",1:"Inverters Share a Common Battery Bank"},telemetry:{model:"40104",block:"fixed",point:"ShareBatteryStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ShareBatteryStatus"}},command_id:"Parallel.ShareBatteryStatus"},{title:"Inverters in parallel",help:"Total number of inverters detected in this parallel system.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Num",arg:"Num",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ParallelNum"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ParallelNum"}},command_id:"Parallel.ParallelNum"},{title:"Inverter Role",help:"Reports whether this inverter is acting as Primary (sometimes called the Master) or Secondary in the current parallel configuration.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Role",arg:"Role",dtype:"enum",description:"",longdescription:"",meanings:{0:"Master",1:"Slave"},friendly_meanings:{0:"Primary",1:"Secondary"},telemetry:{model:"40104",block:"fixed",point:"Role"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"Role"}},command_id:"Parallel.Role"},{title:"Reported Phase",help:"Reports which phase (R / S / T) this inverter is currently serving in the parallel system.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Phase",arg:"Phase",dtype:"enum",description:"",longdescription:"",meanings:{0:"R",1:"S",2:"T"},friendly_meanings:{0:"R",1:"S",2:"T"},telemetry:{model:"40104",block:"fixed",point:"ParallelPhase"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ParallelPhase"}},command_id:"Parallel.ParallelPhase"}]}]},{sectionTitle:"Current Transformer (CT) Settings",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"CT Ratio",help:"Select the current transformer (CT) ratio used for metering electric current on the grid port connection. This must match the CT hardware rating so that current and power readings are accurate.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"CT Ratio",arg:"Direction",dtype:"enum",description:"",longdescription:"",meanings:{0:"1/1000",1:"1/2000",2:"1/3000",3:"1/4000",4:"1/6000"},friendly_meanings:{0:"1/1000",1:"1/2000",2:"1/3000",3:"1/4000",4:"1/6000"},telemetry:{model:"40104",block:"fixed",point:"CTSampleRatio"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Measurement",Element:"CTSampleRatio"}},command_id:"Measurement.CTSampleRatio"},{title:"CT Direction",help:"Sets the CT installation direction. You may choose to reverse this if your inverter is reading import when power is actually flowing out to the grid (export) or vice versa.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Direction",arg:"Direction",dtype:"enum",description:"",longdescription:"",meanings:{0:"Normal",1:"Reversed"},friendly_meanings:{0:"Normal",1:"Reversed"},telemetry:{model:"40104",block:"fixed",point:"CTDirection"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Measurement",Element:"CTDirection"}},command_id:"Measurement.CTDirection"}],subsection_id:"ct-settings"}],section_id:"inverter.measurement"}],theme_id:"inverter"},{themeName:"Battery",sections:[{sectionTitle:"Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Type",help:"Specifies the chemistry or general type of connected battery. Choose **No Battery** for standalone PV or grid-tie operation, **Lead-acid** for flooded or AGM batteries, or **Lithium-ion** for managed BMS packs.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Type",arg:"Type",dtype:"enum",description:"",longdescription:"",meanings:{0:"NoBattery",1:"Lead-acid",2:"Lithom-ion"},friendly_meanings:{0:"No Battery",1:"Lead-acid",2:"Lithium-ion"},telemetry:{model:"40104",block:"fixed",point:"BatteryType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"BatteryType"}},command_id:"BatteryBase.BatteryType"},{title:"Battery Brand",help:"Selects the manufacturer profile for the connected battery. This may pre-configure recommended voltage and SOC limits for optimal operation.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Brand",arg:"Brand",dtype:"enum",description:"",longdescription:"",meanings:{0:"Fortress"},friendly_meanings:{0:"Fortress"},telemetry:{model:"40104",block:"fixed",point:"BatteryBrand"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"BatteryBrand"}},command_id:"BatteryBase.BatteryBrand"},{title:"Absorb Voltage",help:"Sets the voltage used during the absorb (bulk-to-float transition) phase. Increasing this value raises the upper charge threshold for lead-acid batteries.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage",arg:"Volt",dtype:"Number",description:"",longdescription:"",unit:"Vdc",telemetry:{model:"40104",block:"fixed",point:"AbsorbVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"AbsorbVoltage"}},command_id:"BatteryBase.AbsorbVoltage"},{title:"Float Voltage",help:"Defines the voltage maintained once the battery is fully charged. This helps prevent overcharging while keeping the battery topped off.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage",arg:"Volt",dtype:"Number",description:"",longdescription:"",unit:"Vdc",telemetry:{model:"40104",block:"fixed",point:"FloatVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"FloatVoltage"}},command_id:"BatteryBase.FloatVoltage"},{title:"Start Derating Voltage",help:"Voltage threshold where the inverter begins reducing charge or discharge current to protect the battery as it approaches full or low state.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage",arg:"Volt",dtype:"Number",description:"",longdescription:"",unit:"Vdc",telemetry:{model:"40104",block:"fixed",point:"VbatStartDerating"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"VbatStartDerating"}},command_id:"BatteryBase.VbatStartDerating"},{title:"Battery Control Type",help:`Determines how the inverter regulates both charging and discharging.\r
\r
SOC: Uses battery state of charge thresholds to start and stop charge/discharge.\r
\r
Volt: Uses DC voltage limits instead.`,element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"ChargeCtrlType",dtype:"enum",description:"",longdescription:"",meanings:{0:"SOC",1:"Volt"},friendly_meanings:{0:"SOC",1:"Volt"},telemetry:{model:"40104",block:"fixed",point:"ChaDisChaCtrlType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChaDisChaCtrlType"}},command_id:"BatteryBase.ChaDisChaCtrlType"},{title:"Charge Limit (SOC)",help:"Sets the maximum state of charge (SOC) the battery will be charged to. Once the battery reaches this level, charging stops to prevent overcharging and extend lifespan.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ChargeLimitSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChargeLimitSoc"}},command_id:"BatteryBase.ChargeLimitSoc"},{title:"Max Battery Current",help:"Sets the maximum charging and discharging current allowed for the connected inverter. Choose the preset that matches your inverter model to automatically apply the correct limits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Charge Preset",arg:"MaxChargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxChargingCurrent"}},{name:"Max Discharge Preset",arg:"MaxDischargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxDischargingCurrent"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"MaxChaDisChaCurrent"}},command_id:"BatteryBase.MaxChaDisChaCurrent"},{title:"On-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to while grid power is available. Below this level, the inverter will stop discharging and switch to grid power to protect battery capacity.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 21-90%.  Must be higher than the Off-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OnGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OnGridCutOffSoc"}},command_id:"BatteryBase.OnGridCutOffSoc"},{title:"Off-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to when operating off-grid. Once the battery reaches this level, the inverter stops discharging to prevent deep discharge and maintain battery health.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 20-89%.  Must be lower than the On-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OffGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OffGridCutOffSoc"}},command_id:"BatteryBase.OffGridCutOffSoc"}]}]},{sectionTitle:"Battery Backup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Backup Mode",help:"Enables or disables battery-backup operation. When enabled, the inverter reserves part of the battery capacity to power critical loads during a grid outage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Backup Mode",1:"Enable Backup Mode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryBackupMode"}},command_id:"BatteryBackup.BatteryBackupMode"},{title:"Battery Reserve SOC",help:"While Battery Backup Mode is enabled, the battery will stop discharging once it reaches this level. When Backup Mode is disabled, normal operation applies and discharge will continue down to the On-Grid or Off-Grid Battery Cutoff SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryReserveSOC"}},command_id:"BatteryBackup.BatteryReserveSOC"}]}]},{sectionTitle:"Battery Scheduling",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Scheduling",help:"This is a special scheduling mode designed for certain time-of-use (TOU) utility rates or other custom situations. In most circumstances, we recomment allowing your system to  manage charging and discharging automatically without setting a schedule.  You don't need to set a schedule unless you have a specific reason to charge or discharge at exact times.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Scheduling",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Scheduling",1:"Enable the 'PV Charge Only' and 'Discharge Only' scheduling modes"},telemetry:{model:"40104",block:"fixed",point:"BatteryScheduling"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryScheduling",Element:"BatteryScheduling"}},command_id:"BatteryScheduling.BatteryScheduling"}]},{title:"PV Charge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Battery Charge Power During 'PV Charge Only' Periods",help:"Sets the maximum charging power during scheduled Time-of-Use (TOU) charge periods in kW. Set this limit to control the power level at which the battery will charge from the grid during PV charge only periods",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",unit:"kW",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pChgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUMaximumChargingPower"}},command_id:"BatteryTOUCharge.TOUMaximumChargingPower"},{title:"Schedule Window 1 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan1"}},command_id:"BatteryTOUCharge.TOUChargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan2"}},command_id:"BatteryTOUCharge.TOUChargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan3"}},command_id:"BatteryTOUCharge.TOUChargingPlan3",widget:"timerange"}]},{title:"Discharge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Inverter Output Power During 'Discharge Only' Periods",help:"Sets the maximum discharging power during scheduled Time-of-Use (TOU) discharge periods in kW. Limit this to control how much battery power is exported to loads or grid during those windows.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pDischgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUMaximumDischargingPower"}},command_id:"BatteryTOUDischarge.TOUMaximumDischargingPower"},{title:"TOU Discharge Stop SOC",help:"Sets the minimum state of charge (SOC) that the battery will discharge to during 'Discharge Only' operation. Once this level is reached, discharging stops to preserve reserve capacity for later use or backup.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"socDischgEndT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"DischargingStopSoc"}},command_id:"BatteryTOUDischarge.DischargingStopSoc"},{title:"Schedule Window 1 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan1"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan2"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan3"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan3",widget:"timerange"}]}]},{sectionTitle:"Grid Charge",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Allow Battery Charging from Grid",help:"Enables the battery to charge from the utility grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid Charge",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Do not charge the battery from grid power",1:"Allowed"},telemetry:{model:"40104",block:"fixed",point:"ACChargeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeStatus"}},command_id:"ACCharge.ACChargeStatus"},{title:"Grid Charge Power Limit",help:"Sets the maximum power the inverter will draw from the grid for charging. This cap applies when Grid Charge is enabled (and within any configured time windows).",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Grid Charge Power (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ACChargePower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargePower"}},command_id:"ACCharge.ACChargePower"},{title:"Grid Charge Control Type",help:"Select whether grid charging follows a time schedule or SOC/voltage thresholds.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"Type",dtype:"enum",description:"",longdescription:"",unit:"%",meanings:{0:"according to time",1:"according to SOC/Volt"},friendly_meanings:{0:"By Time Schedule",1:"By SOC/Voltage"},telemetry:{model:"40104",block:"fixed",point:"ACChargeType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeType"}},command_id:"ACCharge.ACChargeType"},{title:"Grid Charge SOC Range",help:"Defines when grid charging starts and stops based on battery state of charge (SOC). Charging starts when SOC falls below Start SOC and stops when it reaches Stop SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"ACChgStartSOC"},protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}}},{name:"SOC",arg:"StopSOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:90},telemetry:{model:"40104",block:"fixed",point:"ACChgStopSOC"},greater_than:"StartSOC",protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStopSOC"}}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}},command_id:"ACCharge.ACChgSOCRange"},{title:"Grid Charge Windows",help:"During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Window 1 Start Hour",arg:"StartTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Hour"}},{name:"Window 1 Start Minute",arg:"StartTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Minute"}},{name:"Window 1 End Hour",arg:"EndTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Hour"}},{name:"Window 1 End Minute",arg:"EndTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Minute"}},{name:"Window 2 Start Hour",arg:"StartTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Hour"}},{name:"Window 2 Start Minute",arg:"StartTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Minute"}},{name:"Window 2 End Hour",arg:"EndTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Hour"}},{name:"Window 2 End Minute",arg:"EndTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Minute"}},{name:"Window 3 Start Hour",arg:"StartTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Hour"}},{name:"Window 3 Start Minute",arg:"StartTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Minute"}},{name:"Window 3 End Hour",arg:"EndTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Hour"}},{name:"Window 3 End Minute",arg:"EndTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargingPlan"}},command_id:"ACCharge.ACChargingPlan",widget:"timerange-multi"}]}]}]},{themeName:"Grid",sections:[{sectionTitle:"Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Grid Parameters",help:"This setting changes the conditions under which the inverter will connect or disconnect from the utility grid. Different areas have different rules about when this equipment is allowed to disconnect and when it must ride through. Choose the code required by the local utility or AHJ.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Code",arg:"Code",dtype:"enum",description:"",longdescription:"",meanings:{0:"Default(UL-240-18)",1:"California(Rule 21)",2:"Hawaii(Rule 14)",3:"Puerto Rico LUMA",4:"KIUC"},friendly_meanings:{0:"Default UL-1741 / IEEE 1547",1:"California (Rule 21)",2:"Hawaii (Rule 14)",3:"Puerto Rico (LUMA)",4:"KIUC"},telemetry:{model:"40104",block:"fixed",point:"GridRegulation"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridRegulation"}},command_id:"GridBase.GridRegulation"},{title:"Grid Type",help:"Choose wiring configuration of the site.  This helps configure the system to match the power service at the site.  Note the voltage you enter here must match the EPS Voltage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Service Type",arg:"Type",dtype:"enum",description:"",longdescription:"",meanings:{0:"Split240V/120V",1:"3phase208V/120V",2:"Single240V",3:"Single230V",4:"Split200V/100V"},friendly_meanings:{0:"Split 240V / 120V",1:"3-Phase 208V / 120V",2:"Single 240V",3:"Single 230V",4:"Split 200V / 100V"},telemetry:{model:"40104",block:"fixed",point:"GridType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridType"}},command_id:"GridBase.GridType"},{title:"Grid Frequency",help:"Sets the nominal grid frequency for the installation. Use 60 Hz for North America and most split-phase installs; use 50 Hz for regions that operate at 230 V single-phase.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Frequency (Hz)",arg:"Freq",dtype:"enum",description:"",longdescription:"",meanings:{0:"50",1:"60"},friendly_meanings:{0:"50 Hz",1:"60 Hz"},telemetry:{model:"40104",block:"fixed",point:"GridFreq"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridFreq"}},command_id:"GridBase.GridFreq"}]},{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"UL Compliance Report",help:`Some jurisdictions require proof that your inverter's grid settings match local utility rules (for example, California Rule 21 or Puerto Rico LUMA requirements).

This report pulls the device's active grid parameters and formats them into a UL-style compliance summary you can share with the AHJ or utility.
`,element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Voltage Ride-Through Windows",arg:"VoltageRideThrough",dtype:"String",description:"Derived from Grid Protection voltage limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Frequency Ride-Through Windows",arg:"FrequencyRideThrough",dtype:"String",description:"Derived from Grid Protection frequency limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Volt-VAR Profile",arg:"VoltVarProfile",dtype:"String",description:"Captures the active Volt-VAR curve (e.g., UL 1741 SA default profile).",longdescription:""},{name:"Freq-Watt Profile",arg:"FreqWattProfile",dtype:"String",description:"Captures the active droop coefficients applied to frequency-active power response.",longdescription:""}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Reports",Element:"ULComplianceReport"}},command_id:"CGI.ULComplianceReport",widget:"ul-compliance-report",showInvokeButton:!1,showHistory:!1,showRefresh:!1,showSetButton:!1}]}]},{sectionTitle:"Grid Protection",subsections:[{title:"Grid Protection Parameters",visibility:"default",collapsedByDefault:!0,points:[{title:"Grid Voltage Limits (Stage 1)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1"}},command_id:"GridProtection.GridVoltLimit1"},{title:"Grid Voltage Limits (Stage 2)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2"}},command_id:"GridProtection.GridVoltLimit2"},{title:"Grid Voltage Limits (Stage 3)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3"}},command_id:"GridProtection.GridVoltLimit3"},{title:"Grid Frequency Limits (Stage 1)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1"}},command_id:"GridProtection.GridFreqLimit1"},{title:"Grid Frequency Limits (Stage 2)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2"}},command_id:"GridProtection.GridFreqLimit2"},{title:"Grid Frequency Limits (Stage 3)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3"}},command_id:"GridProtection.GridFreqLimit3"},{title:"Grid Voltage Trip Time",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1Time"}},command_id:"GridProtection.GridVoltLimit1Time"},{title:"Grid Voltage Trip Time (Stage 2)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2Time"}},command_id:"GridProtection.GridVoltLimit2Time"},{title:"Grid Voltage Trip Time (Stage 3)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3Time"}},command_id:"GridProtection.GridVoltLimit3Time"},{title:"Grid Frequency Trip Time (Stage 1)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1Time"}},command_id:"GridProtection.GridFreqLimit1Time"},{title:"Grid Frequency Trip Time (Stage 2)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2Time"}},command_id:"GridProtection.GridFreqLimit2Time"},{title:"Grid Frequency Trip Time (Stage 3)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3Time"}},command_id:"GridProtection.GridFreqLimit3Time"}]}]},{sectionTitle:"Grid Connection",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Permit to Operate",help:"Shows whether the inverter is permitted to operate in grid-connected mode.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Permit Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not Permitted",1:"Permitted"},telemetry:{model:"40104",block:"fixed",point:"PermitServiceStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"PermitServiceStatus"}},command_id:"GridConnection.PermitServiceStatus"},{title:"Ramp Rate",help:"How quickly inverter output is allowed to increase.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Ramp Rate (%/sec)",arg:"Rate",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"RampRate"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"RampRate"}},command_id:"GridConnection.RampRate"},{title:"Applicable Grid Voltage Range",help:"Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Vac)",arg:"ApplicableVoltageLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageLow"}},{name:"Upper Limit (Vac)",arg:"ApplicableVoltageHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableVoltage"}},command_id:"GridConnection.ApplicableVoltage"},{title:"Applicable Grid Frequency Range",help:"Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Hz)",arg:"ApplicableFrequencyLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyLow"}},{name:"Upper Limit (Hz)",arg:"ApplicableFrequencyHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableFrequency"}},command_id:"GridConnection.ApplicableFrequency"},{title:"Connection Delay Times",help:"Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Connection Delay (s)",arg:"ConnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConnectionDelayTime"}},{name:"Reconnection Delay (s)",arg:"ReconnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReconnectionDelayTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"DelayTime"}},command_id:"GridConnection.DelayTime"}]}]},{sectionTitle:"Grid Support",subsections:[{title:"Constant Power Factor",visibility:"default",collapsedByDefault:!0,points:[{title:"Power Factor Mode",help:"Shows whether constant power-factor control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive â€” No PF control",1:"Active â€” Constant PF"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactorModeStatus"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactorModeStatus"},{title:"Power Factor Setpoint",help:"The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorExcited"}},{name:"Power Factor (PF)",arg:"PowerFactor",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactor"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactor"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactor"}]},{title:"Constant Reactive Power",visibility:"default",collapsedByDefault:!0,points:[{title:"Reactive Power Mode",help:"Shows whether constant reactive-power control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeExcited"}},{name:"Status",arg:"Status",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no reactive power control",1:"Active - reactive power control"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ConstantReactivePowerModeStatus"}},command_id:"ConstantReactivePowerMode.ConstantReactivePowerModeStatus"},{title:"Reactive Power Setpoint",help:"Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Reactive Power (%)",arg:"Power",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReactivePowerPercentCMD"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ReactivePowerPercentCMD"}},command_id:"ConstantReactivePowerMode.ReactivePowerPercentCMD"}]},{title:"Volt-VAR (Voltage-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-VAR Mode",help:"Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-VAR control",1:"Active - Volt-VAR control"},telemetry:{model:"40104",block:"fixed",point:"VoltageReactivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VoltageReactivePowerMode"}},command_id:"VoltageReactivePowerMode.VoltageReactivePowerMode"},{title:"Autonomous Vref Adjustment",help:"Indicates whether the inverter autonomously adjusts its reference voltage (Vref).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Autonomous Adjustment",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"AutonomousVrefAdjustment"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"AutonomousVrefAdjustment"}},command_id:"VoltageReactivePowerMode.AutonomousVrefAdjustment"},{title:"Reference Voltage (Vref)",help:"Voltage reference used for Volt-VAR calculations.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Vref",arg:"Verf",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Verf"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Verf"}},command_id:"VoltageReactivePowerMode.Verf"},{title:"Vref Adjustment Time Constant",help:"Time constant applied when adjusting Vref.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Time Constant",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VrefAdjustmentTimeConstant"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VrefAdjustmentTimeConstant"}},command_id:"VoltageReactivePowerMode.VrefAdjustmentTimeConstant"},{title:"Volt-VAR Voltage Breakpoints",help:"Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"V1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV1"}},{name:"V2 (Voltage Point 2)",arg:"V2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV2"}},{name:"V3 (Voltage Point 3)",arg:"V3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV3"}},{name:"V4 (Voltage Point 4)",arg:"V4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"UnderOverVoltage"}},command_id:"VoltageReactivePowerMode.UnderOverVoltage"},{title:"Reactive Power Setpoint Q1",help:"Reactive power at voltage point V1 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q1 (Reactive Setpoint 1)",arg:"Q1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q1"}},command_id:"VoltageReactivePowerMode.Q1"},{title:"Reactive Power Setpoint Q2",help:"Reactive power at voltage point V2 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q2 (Reactive Setpoint 2)",arg:"Q2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q2"}},command_id:"VoltageReactivePowerMode.Q2"},{title:"Reactive Power Setpoint Q3",help:"Reactive power at voltage point V3 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q3 (Reactive Setpoint 3)",arg:"Q3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q3"}},command_id:"VoltageReactivePowerMode.Q3"},{title:"Reactive Power Setpoint Q4",help:"Reactive power at voltage point V4 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q4 (Reactive Setpoint 4)",arg:"Q4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q4"}},command_id:"VoltageReactivePowerMode.Q4"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-VAR changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VqOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageReactivePowerMode.OpenLoopResponseTime"}]},{title:"P-Q Mode (Active-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"P-Q Mode Status",help:"Shows whether Active/Reactive Power (P-Q) control mode is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no P-Q control",1:"Active - P-Q control"},telemetry:{model:"40104",block:"fixed",point:"PQModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"PQModeStatus"}},command_id:"ActivePowerReactivePowerMode.PQModeStatus"},{title:"P-Q Curve Points",help:"Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P1 Setpoint",arg:"P1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP1"}},{name:"P2 Setpoint",arg:"P2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP2"}},{name:"P3 Setpoint",arg:"P3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"P_QP"}},command_id:"ActivePowerReactivePowerMode.P_QP"}]},{title:"Volt-Watt (Voltage-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-Watt Mode",help:"Shows whether Volt-Watt (voltage-active power) control is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-Watt control",1:"Active - Volt-Watt control"},telemetry:{model:"40104",block:"fixed",point:"VoltageActivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltageActivePowerMode"}},command_id:"VoltageActivePowerMode.VoltageActivePowerMode"},{title:"Volt-Watt Voltage Breakpoints",help:"Voltage points that define the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"VoltWattV1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV1"}},{name:"V2 (Voltage Point 2)",arg:"VoltWattV2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattV"}},command_id:"VoltageActivePowerMode.VoltWattV"},{title:"Volt-Watt Power Setpoint",help:"Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P2 Setpoint",arg:"VoltWattP2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattP2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattP2"}},command_id:"VoltageActivePowerMode.VoltWattP2"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-Watt changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"VoltWattOpenLoopResponseTime",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageActivePowerMode.OpenLoopResponseTime"}]},{title:"Freq-Watt (Frequency-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Frequency-Active Power Mode",help:"Indicates whether frequency-power (Freq-Watt) control is currently enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"FrequencyActivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"FrequencyActivePowerModeStatus"}},command_id:"FrequencyActivePowerMode.FrequencyActivePowerModeStatus"},{title:"Open-Loop Response Time",help:"Response time applied to open-loop frequency-power adjustments.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"FreqWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"FrequencyActivePowerMode.OpenLoopResponseTime"},{title:"Over-Frequency Droop: Deadband",help:"Over Frequency Droop dbOF â€” Deadband around nominal frequency before active power reduction begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",unit:"Hz",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_dbOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_dbOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_dbOF"},{title:"Over-Frequency Droop: Gain (k)",help:"Over Frequency Droop kOF â€” Slope (gain k) of active power reduction versus frequency rise above nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_kOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_kOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_kOF"},{title:"Under-Frequency Droop: Deadband",help:"Under Frequency Droop dbUF â€” Deadband around nominal frequency before active power increase/response begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_dbUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_dbUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_dbUF"},{title:"Under-Frequency Droop: Gain (k)",help:"Under Frequency Droop kUF â€” Slope (gain k) of active power response versus frequency drop below nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_kUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_kUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_kUF"}]}]}]},{themeName:"Backup Power",sections:[{sectionTitle:"Backup Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Off-Grid Output",help:"Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"OffGridOutput"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"OffGridOutput"}},command_id:"BackupPower.OffGridOutput"},{title:"Backup (EPS) Output Voltage",help:"Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage (Vac)",arg:"Voltage",dtype:"enum",description:"",longdescription:"",unit:"Vac",meanings:{0:"208",1:"220",2:"230",3:"240",4:"277"},friendly_meanings:{0:"208 V",1:"220 V",2:"230 V",3:"240 V",4:"277 V"},telemetry:{model:"40104",block:"fixed",point:"EPSVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"EPSVoltage"}},command_id:"BackupPower.EPSVoltage"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Port Connection",help:"If using a generator, select which port it's connected to: eeither the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.  In Microgrid Mode, the inverter treats the generator as the primary AC source rather than the utility grid.  When microgrid mode is active, all charging and operating limits come from the Generator settings—not the Grid Charge limits. Remember to install CTs on any power wires attached to the grid port.  This includes a generator that is configured in microgrid mode.  ",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Generator connected to",arg:"Port",dtype:"enum",description:"",longdescription:"",meanings:{0:"GeneratorPort",1:"GridPort"},friendly_meanings:{0:"GEN port. Also pick this option if you are not using generator.",1:"Grid port - also called microgrid mode"},telemetry:{model:"40104",block:"fixed",point:"LinkedPort"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"LinkedPort"}},command_id:"Generator.LinkedPort"},{title:"Battery Charge Current Limit",help:"Sets the maximum DC current the inverter will send to the battery when charging from the generator.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Charge Current (Adc)",arg:"Current",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"BatteryChargeCurrentLimit"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"BatteryChargeCurrentLimit"}},command_id:"Generator.BatteryChargeCurrentLimit"},{title:"Generator Rated Power",help:"Specify the generator's continuous rated output power.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Rated Power (kW)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"GeneratorRatedPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorRatedPower"}},command_id:"Generator.GeneratorRatedPower"},{title:"Generator Cool-Down Time",help:"Sets the time the generator continues running after charging stops to allow for safe cooling.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Cool-Down Time (min)",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GeneratorCoolDownTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorCoolDownTime"}},command_id:"Generator.GeneratorCoolDownTime"},{title:"Generator Start/Stop SOC",help:"Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"Generator starts when battery drops to this level",longdescription:"",unit:"%",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socGenStart"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"Generator stops when battery charges to this level",longdescription:"",unit:"%",range:{min:5,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socGenEnd"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorSOC"}},command_id:"Generator.GeneratorSOC"},{title:"Generator Contactor Status",help:"Indicates the current state of the generator control contactor.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Contactor State",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"OFF",1:"ON"},friendly_meanings:{0:"Closed / On",1:"Open / Off"},telemetry:{model:"40101",block:"fixed",point:"genDryContactState"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GenDryContact"}},command_id:"Generator.GenDryContact"},{title:"Battery Quick Charge with Generator",help:"Start the generator to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Stop quick charge",1:"Start quick charge"},telemetry:{model:"40104",block:"fixed",point:"StartGeneratorExercise"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"StartGeneratorExercise"}},command_id:"Generator.StartGeneratorExercise"},{title:"Generator Boost",help:"Enables dynamic adjustment of generator charging power for faster battery recovery when needed.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"GeneratorBoost"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorBoost"}},command_id:"Generator.GeneratorBoost"}]},{title:"Generator Exercise",visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Exercise Schedule",help:"Configure a recurring schedule for generator exercise runs. Select the day of the week and time when the generator should run automatically.",element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Day of Week",arg:"DayOfWeek",dtype:"enum",description:"",longdescription:"",meanings:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23}},{name:"Minute",arg:"Minute",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59}}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Plan",Element:"GeneratorExercise"}},command_id:"CGI.GeneratorExercise",widget:"generator-exercise",showRefresh:!0,showSetButton:!0}]}]}]},{themeName:"AC Coupled PV",sections:[{sectionTitle:"AC Coupled PV",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"AC Coupled PV",help:"Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"AC Coupled PV Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"ACCoupledPV"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCoupledPV"}},command_id:"ACCoupledPV.ACCoupledPV"},{title:"AC Coupled PV Start/Stop SOC",help:"Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"AC Coupled PV begins charging when SOC drops to this level",longdescription:"",unit:"%",range:{min:0,max:100},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOn"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"AC Coupled PV stops charging when SOC reaches this level",longdescription:"",unit:"%",range:{min:0,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOff"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCouplePVSOC"}},command_id:"ACCoupledPV.ACCouplePVSOC"}]}]}]},{themeName:"Smart Load",sections:[{sectionTitle:"Smart Load",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Use Smart Load",help:"Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disabled",1:"Enabled"},telemetry:{model:"40104",block:"fixed",point:"SmartLoad"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoad"}},command_id:"LoadShedding.SmartLoad"},{title:"Smart Load On-Grid Behavior",help:"Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"On-Grid Always-On Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Follow normal rules",1:"Always On When Grid Present"},telemetry:{model:"40104",block:"fixed",point:"OnGridAlwaysOn"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"OnGridAlwaysOn"}},command_id:"LoadShedding.OnGridAlwaysOn"},{title:"Smart Load Start Power",help:"Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"PV Power Above (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"StartPVPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"StartPVPower"}},command_id:"LoadShedding.StartPVPower"},{title:"Smart Load SOC Limits",help:"Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start When Battery SOC Is Above (%)",arg:"OnSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},less_than:"OffSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOnSoc"}},{name:"Stop When Battery SOC Is Below (%)",arg:"OffSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},greater_than:"OnSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoadSOC"}},command_id:"LoadShedding.SmartLoadSOC"}]}]}]}],qb={themes:Fb};function Ub(e,t){const n=[],l=new Map;return t.themes.forEach(a=>{const i=a.themeName||a.theme_id||"",r={...a,sections:a.sections.map(s=>({...s,subsections:[...s.subsections]}))};l.set(i,r),n.push(r)}),e.themes.forEach(a=>{const i=a.themeName||a.theme_id||"";let r=l.get(i);if(!r){r={...a,sections:a.sections.map(s=>({...s,subsections:[...s.subsections]}))},l.set(i,r),n.push(r);return}a.sections.forEach(s=>{const c=s.section_id||s.sectionTitle||"";let d=r.sections.find(u=>(u.section_id||u.sectionTitle)===c);d?d.subsections.push(...s.subsections):r.sections.push({...s,subsections:[...s.subsections]})})}),{themes:n}}const Wb=Ub(Ob,qb),Pa=new Map,$b="1.0.0",Kr=100,Qr=e=>new Promise(t=>setTimeout(t,e));function Hb(e,t,n){var l,a;if(e.value!==void 0)return e.dtype==="Number"&&e.value!==""?Number(e.value):e.value;switch(e.dtype){case"Number":{const i=e.range;if(!i)return 0;const r=i.max-i.min;return e.less_than?Math.round(i.min+r*.3):e.greater_than?Math.round(i.min+r*.7):e.arg==="Year"?new Date().getFullYear()%100:e.arg==="Mon"?new Date().getMonth()+1:e.arg==="Day"?new Date().getDate():e.arg==="Hour"?new Date().getHours():e.arg==="Min"?new Date().getMinutes():e.arg==="Sec"?new Date().getSeconds():Math.round(i.min+r*.5)}case"enum":{const i=Object.keys(e.meanings??{})[0];return i?((l=e.friendly_meanings)==null?void 0:l[i])??((a=e.meanings)==null?void 0:a[i])??"":""}case"String":return e.arg==="Name"?"Inverter 1":"";default:if(e.dtype&&e.dtype.startsWith("bitfield")){const i={};return e.meanings&&Object.keys(e.meanings).forEach(r=>{i[r]=Math.random()>.7}),i}return""}}function zb(e){const t={};return e.widget==="generator-exercise"?e.entries.forEach(n=>{t[n.arg]=""}):e.entries.forEach((n,l)=>{t[n.arg]=Hb(n,l,e.entries)}),{pointId:e.command_id,entries:t,lastRead:new Date().toISOString(),success:!0}}function Kb(e){e.themes.forEach(t=>{t.sections.forEach(n=>{n.subsections.forEach(l=>{l.points.forEach(a=>{Pa.has(a.command_id)||Pa.set(a.command_id,zb(a))})})})})}async function Qb(e={}){await Qr(Kr);const t=[{pageName:"Inverter Configuration",themes:Wb.themes}];t.forEach(l=>Kb(l));let n=t;return e.pageId&&(n=t.filter(l=>l.pageName.toLowerCase().replace(/\s+/g,"-")===e.pageId)),{pages:n,lastModified:new Date().toISOString(),version:$b}}async function Yb(e){return await Qr(Kr),{isOnline:!0,timestamp:new Date().toISOString()}}async function Jb(e){return await Qr(Kr),{items:[{gateway_sn:"GW001234567890",equipments:[{id:"envy-04237218B0",sn:"04237218B0",md:"FP-ENVY-Inverter",md_name:"Fortress Power ENVY Inverter",site_id:e.site_id,is_primary:!0,product_type:"Inverter",sub_product_type:"Hybrid",software_version:"1.2.3",arm_sub_product_type:"ARM-V1",arm_software_version:"1.2.3",dsp_sub_product_type:"DSP-V1",dsp_software_version:"2.3.4",firmwares:[{name:"ARM",version:"1.2.3"},{name:"DSP",version:"2.3.4"}]}]},{gateway_sn:"GW002234567890",equipments:[{id:"envy-04237219C3",sn:"04237219C3",md:"FP-ENVY-Inverter",md_name:"Fortress Power ENVY Inverter",site_id:e.site_id,is_primary:!1,product_type:"Inverter",sub_product_type:"Hybrid",software_version:"1.2.3",arm_sub_product_type:"ARM-V1",arm_software_version:"1.2.3",dsp_sub_product_type:"DSP-V1",dsp_software_version:"2.3.4",firmwares:[{name:"ARM",version:"1.2.3"},{name:"DSP",version:"2.3.4"}]}]}],success:!0,message:"Equipment retrieved successfully",request_id:e.request_id,code:200}}async function Ti(e){var t,n,l;await Qr(Kr);try{const{payload:a}=e;if(!a||!a.method)return{success:!1,error:"Invalid payload: missing method",timestamp:new Date().toISOString()};switch(a.method){case"Read":{const i=(t=a.data)==null?void 0:t.Elements;if(!i||i.length===0)return{success:!1,error:"No elements specified for read operation",timestamp:new Date().toISOString()};const r=i[0],s=`${r.Cluster}.${r.Element}`;return{success:!0,data:Pa.get(s)||{entries:{}},timestamp:new Date().toISOString()}}case"Write":{const i=(n=a.data)==null?void 0:n.Elements;if(!i||i.length===0)return{success:!1,error:"No elements specified for write operation",timestamp:new Date().toISOString()};const r=i[0],s=`${r.Cluster}.${r.Element}`;let c=Pa.get(s);return c&&(c={...c,entries:{...c.entries,...r.arguments},lastRead:new Date().toISOString()},Pa.set(s,c)),{success:!0,data:c,timestamp:new Date().toISOString()}}case"Invoke":{const i=(l=a.data)==null?void 0:l.Elements;return!i||i.length===0?{success:!1,error:"No elements specified for invoke operation",timestamp:new Date().toISOString()}:{success:!0,data:{status:"Command executed successfully"},timestamp:new Date().toISOString()}}default:return{success:!1,error:`Unknown method: ${a.method}`,timestamp:new Date().toISOString()}}}catch(a){return{success:!1,error:a instanceof Error?a.message:"Unknown error",timestamp:new Date().toISOString()}}}function wu(e,t){if(!e.protocol)throw new Error(`Point ${e.command_id} has no protocol definition`);if(e.protocol.matter)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.cgi)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:[{MEP:e.protocol.cgi.MEP,Cluster:e.protocol.cgi.Cluster,Element:e.protocol.cgi.Element}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.modbus){const l=e.protocol.modbus.register_type===3?3:4;return{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Read",timeout:5,data:{type:"RTU",uartPort:1,slaveId:1,address:e.protocol.modbus.address,function:l,registerNumber:e.protocol.modbus.size}}}throw new Error(`Unsupported protocol for point ${e.command_id}`)}function Xb(e,t,n){var l;if(!e.protocol)throw new Error(`Point ${e.command_id} has no protocol definition`);if(e.protocol.matter){const a=e.element_type==="Service"||e.access==="Invoke"?"Invoke":"Write";return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:a,data:{Elements:[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}}}else if(e.protocol.cgi){const a=e.element_type==="Service"||e.access==="Invoke"||e.element_type==="custom"?"Invoke":"Write";return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:a,data:{Elements:[{MEP:e.protocol.cgi.MEP,Cluster:e.protocol.cgi.Cluster,Element:e.protocol.cgi.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}}}else if(e.protocol.modbus){const a=e.protocol.modbus.size>1?16:6,i=(l=e.entries[0])==null?void 0:l.arg;let r=i?n[i]:0;return typeof r=="number"?r=Math.round(r):typeof r=="string"&&(r=parseInt(r,10)||0),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:1,address:e.protocol.modbus.address,function:a,value:r}}}throw new Error(`Unsupported protocol for point ${e.command_id}`)}function Zb(e,t,n){var l;if(!e.protocol)throw new Error(`Point ${e.command_id} has no protocol definition`);if(e.protocol.matter)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Invoke",data:{Elements:[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.cgi)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Invoke",data:{Elements:[{MEP:e.protocol.cgi.MEP,Cluster:e.protocol.cgi.Cluster,Element:e.protocol.cgi.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.modbus){const a=e.protocol.modbus.size>1?16:6,i=(l=e.entries[0])==null?void 0:l.arg;let r=i&&n?n[i]:0;return typeof r=="number"?r=Math.round(r):typeof r=="string"&&(r=parseInt(r,10)||0),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:1,address:e.protocol.modbus.address,function:a,value:r}}}throw new Error(`Unsupported protocol for point ${e.command_id}`)}function eh(e){const[t,n]=A.useState([]),[l,a]=A.useState({}),[i,r]=A.useState(!0),[s,c]=A.useState(null),[d,u]=A.useState(null),[m,p]=A.useState(null);return A.useEffect(()=>{(async()=>{try{r(!0),c(null);const v=await Qb({equipmentId:e}),b=v.pages.map((g,y)=>({id:g.pageName.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),label:g.pageName,filename:`page-${y}.json`,data:g})),_=b.reduce((g,y)=>(g[y.id]=y.data,g),{});n(b),a(_),u(v.version),p(v.lastModified)}catch(v){console.error("Error loading site configuration:",v),c(v instanceof Error?v.message:"Failed to load site configuration")}finally{r(!1)}})()},[e]),{pageRegistry:t,pageLookup:l,isLoading:i,loadError:s,configVersion:d,lastModified:m}}function th(){const[e,t]=A.useState("");return A.useEffect(()=>{const n=()=>{const l=document.querySelectorAll('[id^="theme-"]');let a="";l.forEach(i=>{const r=i.getBoundingClientRect();r.top<=window.innerHeight*.3&&r.bottom>0&&(a=i.id)}),a&&a!==e&&t(a)};return n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[e]),e}function nh(){const[e,t]=A.useState(""),n=A.useCallback((l,a)=>{var r,s,c,d;if(!a.trim())return{matches:!0,helpTextMatch:!1};const i=a.toLowerCase();if((r=l.title)!=null&&r.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!1};if((s=l.help)!=null&&s.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!0};for(const u of l.entries){if((c=u.name)!=null&&c.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!1};if(u.friendly_meanings){for(const m of Object.values(u.friendly_meanings))if(m.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!1}}if((d=u.description)!=null&&d.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!1}}return{matches:!1,helpTextMatch:!1}},[]);return{searchQuery:e,setSearchQuery:t,pointMatchesSearch:n}}function ba(){const[e,t]=A.useState(!1),[n,l]=A.useState(null),a=A.useCallback(s=>{s!==void 0&&l(s),t(!0)},[]),i=A.useCallback(()=>{t(!1)},[]),r=A.useCallback(()=>{t(s=>!s)},[]);return{isOpen:e,data:n,open:a,close:i,toggle:r,setData:l}}function of(e=1){const[t,n]=A.useState(new Map),[l,a]=A.useState(!0),[i,r]=A.useState(null);return A.useEffect(()=>{(async()=>{try{a(!0),r(null);const m=await Jb({site_id:e,request_id:`req-${Date.now()}`});if(!m.success){r(m.message);return}const p=new Map;m.items.forEach(f=>{f.equipments.forEach(v=>{p.set(v.sn,{equipment:v,gatewaySn:f.gateway_sn})})}),n(p)}catch(m){console.error("Error fetching equipment mappings:",m),r(m instanceof Error?m.message:"Failed to fetch equipment mappings")}finally{a(!1)}})()},[e]),{mappings:t,isLoading:l,error:i,getMapping:u=>t.get(u),getGatewaySn:u=>{var m;return(m=t.get(u))==null?void 0:m.gatewaySn},isPrimary:u=>{var m;return((m=t.get(u))==null?void 0:m.equipment.is_primary)??!1}}}const Cu={isOnline:null,statusTimestamp:null,error:null,isLoading:!1};function lh(e){const[{isOnline:t,statusTimestamp:n,error:l,isLoading:a},i]=A.useState(Cu),[r,s]=A.useState(0),c=A.useCallback(()=>{s(d=>d+1)},[]);return A.useEffect(()=>{if(!e){i(Cu);return}let d=!1;return(async()=>{i(m=>({...m,isLoading:!0,error:null}));try{const m=await Yb({gatewaySn:e});if(d)return;i({isOnline:m.isOnline,statusTimestamp:m.timestamp,error:null,isLoading:!1})}catch(m){if(d)return;i({isOnline:null,statusTimestamp:null,error:m instanceof Error?m.message:"Failed to fetch gateway status",isLoading:!1})}})(),()=>{d=!0}},[e,r]),{isOnline:t,statusTimestamp:n,error:l,isLoading:a,refresh:c}}function ah({themes:e,activeSection:t,selectedEquipmentId:n,onEquipmentChange:l,equipmentOptions:a}){return o.jsxs("aside",{className:"w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-[11px] text-slate-500 uppercase font-medium mb-1 block",children:"Equipment"}),o.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800",value:n,onChange:i=>l(i.target.value),children:a.map(i=>o.jsx("option",{value:i.id,children:i.label},i.id))})]}),o.jsxs("nav",{className:"text-sm text-slate-800",children:[o.jsx("div",{className:"text-emerald-600 font-semibold mb-2",children:"Navigation"}),o.jsxs("div",{className:"flex flex-col gap-3",children:[e.map((i,r)=>{const s=`theme-${r}`,c=t===s||t.startsWith(`${s}-section`);return o.jsxs("div",{children:[o.jsxs("div",{className:"relative",children:[c&&o.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r"}),o.jsx("button",{className:`font-semibold text-xs uppercase tracking-wide mb-1 px-2 hover:text-emerald-600 transition-colors w-full text-left ${c?"text-emerald-600":"text-slate-900"}`,onClick:()=>{var d;(d=document.getElementById(s))==null||d.scrollIntoView({behavior:"smooth",block:"start"})},children:i.themeName})]}),o.jsx("ul",{className:"pl-2 flex flex-col gap-1 text-slate-700",children:i.sections.map((d,u)=>{const m=`${s}-section-${u}`,p=t===m;return o.jsxs("li",{className:"relative",children:[p&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),o.jsx("button",{className:`px-2 py-1 hover:bg-slate-50 rounded text-xs w-full text-left transition-colors ${p?"text-blue-600 font-medium bg-blue-50":"text-slate-700"}`,onClick:()=>{var f;(f=document.getElementById(m))==null||f.scrollIntoView({behavior:"smooth",block:"start"})},children:d.sectionTitle})]},`${d.sectionTitle}-${u}`)})})]},`${i.themeName}-${r}`)}),!e.length&&o.jsx("div",{className:"text-xs text-slate-500",children:"No themes defined."})]})]})]})}function ih({searchQuery:e,onSearchChange:t,lastUpdatedLabel:n,onRefresh:l,gatewayStatus:a}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-xs text-slate-500",children:["Last Updated At: ",n]}),o.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6",children:[o.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[o.jsx("div",{className:"text-xl font-semibold text-slate-900 leading-tight",children:"Site Configuration"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("div",{className:"relative flex-1 max-w-md",children:[o.jsx("input",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800",placeholder:"Search…",value:e,onChange:i=>t(i.target.value)}),e&&o.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",onClick:()=>t(""),title:"Clear search",children:"✕"})]}),o.jsxs("button",{className:"text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1",onClick:l,children:[o.jsx("span",{children:"⟳"}),o.jsx("span",{children:"Refresh"})]})]})]}),o.jsx(rh,{status:a})]})]})}function rh({status:e}){const t=(e==null?void 0:e.isOnline)??null,n=(e==null?void 0:e.isLoading)??!1,l=n?"bg-amber-400 animate-pulse":t===!0?"bg-green-500":t===!1?"bg-red-500":"bg-slate-300";let a="Unknown";return n?a="Checking…":t===!0?a="Online":t===!1&&(a="Offline"),o.jsxs("div",{className:"flex flex-col items-end gap-1 text-right self-start min-w-[180px]",children:[o.jsx("div",{className:"text-[11px] uppercase tracking-wide text-slate-500",children:"Gateway Status"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:`h-3 w-3 rounded-full border border-slate-300 ${l}`,"aria-label":`Gateway ${a}`,role:"status"}),o.jsx("span",{className:"text-sm font-semibold text-slate-900",children:a})]}),(e==null?void 0:e.gatewaySn)&&o.jsxs("div",{className:"text-xs text-slate-500 leading-tight",children:["SN: ",e.gatewaySn]}),!n&&(e==null?void 0:e.error)&&o.jsx("div",{className:"text-xs text-red-500 leading-tight",children:e.error}),(e==null?void 0:e.lastChecked)&&!n&&o.jsxs("div",{className:"text-[11px] text-slate-400",children:["Checked ",new Date(e.lastChecked).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}function oh(e){const t={};if(e.widget==="generator-exercise")return e.entries.forEach(a=>{a.dtype,t[a.arg]=""}),t;const n=e.entries.filter(a=>a.dtype==="Number"&&a.range!==void 0),l=n.length>=2;return e.entries.forEach((a,i)=>{var r,s;if(a.value!==void 0){t[a.arg]=a.dtype==="Number"&&a.value!==""?Number(a.value):a.value;return}if(a.dtype==="Number"){const c=a.range;if(!c){t[a.arg]=0;return}if(l){const d=c.max-c.min,u=i/Math.max(n.length-1,1);a.less_than?t[a.arg]=Math.round(c.min+d*.3):a.greater_than?t[a.arg]=Math.round(c.min+d*.7):t[a.arg]=Math.round(c.min+d*u)}else t[a.arg]=c.min;return}if(a.dtype==="enum"){const c=Object.keys(a.meanings??{})[0];if(c){const d=((r=a.friendly_meanings)==null?void 0:r[c])??((s=a.meanings)==null?void 0:s[c])??"";t[a.arg]=d}else t[a.arg]="";return}if(a.dtype&&a.dtype.startsWith("bitfield")){const c={};a.meanings&&Object.keys(a.meanings).forEach(d=>{c[d]=!1}),t[a.arg]=c;return}t[a.arg]=""}),t}function sh(e,t){const{getGatewaySn:n,isPrimary:l,isLoading:a}=of(),[i,r]=A.useState(oh(e)),[s,c]=A.useState(!1),[d,u]=A.useState(null),[m,p]=A.useState(null);A.useEffect(()=>{if(a)return;(async()=>{if(!(((typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service")&&e.showRefresh!==!0))try{c(!0),u(null);const C=t.thingId.SN,k=n(C)||"GW001234567890",P=wu(e,t.id),w=await Ti({gatewaySn:k,payload:P});if(w.success&&w.data){const L=w.data;L.success?(r(L.entries),p(L.lastRead)):u(L.error||"Failed to read point")}else u(w.error||"Failed to read point")}catch(C){console.error("Error fetching initial value:",C),u(C instanceof Error?C.message:"Failed to fetch initial value")}finally{c(!1)}})()},[e.command_id,t.id,a]);const f=A.useCallback((g,y)=>{r(h=>({...h,[g]:y}))},[]),v=A.useCallback(async()=>{try{c(!0),u(null);const g=t.thingId.SN,y=n(g)||"GW001234567890",h=wu(e,t.id),C=await Ti({gatewaySn:y,payload:h});if(C.success&&C.data){const k=C.data;return k.success?(r(k.entries),p(k.lastRead),{success:!0,payload:h,gatewaySn:y}):(u(k.error||"Failed to read point"),{success:!1,error:k.error})}else return u(C.error||"Failed to read point"),{success:!1,error:C.error}}catch(g){const y=g instanceof Error?g.message:"Failed to refresh";return u(y),{success:!1,error:y}}finally{c(!1)}},[e.command_id,t.id]),b=A.useCallback(async()=>{var g;try{c(!0),u(null);const y=t.thingId.SN,h=((g=e.protocol)==null?void 0:g.modbus)!==void 0,C=!l(y);if(h&&C){const U="Writing to Modbus commands on non-primary inverters is not currently supported";return u(U),{success:!1,error:U}}const k={...i};e.entries.forEach(U=>{if(U.dtype!=="enum"||!U.meanings)return;const R=k[U.arg];if(R==null||R==="")return;const M=Object.entries(U.meanings).find(([E,F])=>{var B;const le=((B=U.friendly_meanings)==null?void 0:B[E])??F;return R===le||R===F});M&&(k[U.arg]=M[1])});const P=n(y)||"GW001234567890",w=Xb(e,t.id,k),L=await Ti({gatewaySn:P,payload:w});if(L.success){if(L.data){const U=L.data;U.entries&&(r(U.entries),p(U.lastRead))}return{success:!0,payload:w,gatewaySn:P}}else return u(L.error||"Failed to write point"),{success:!1,error:L.error}}catch(y){const h=y instanceof Error?y.message:"Failed to write";return u(h),{success:!1,error:h}}finally{c(!1)}},[e.command_id,t.id,i]),_=A.useCallback(async()=>{try{c(!0),u(null);const g=t.thingId.SN,y=n(g)||"GW001234567890",h={...i};e.entries.forEach(P=>{if(P.dtype!=="enum"||!P.meanings)return;const w=h[P.arg];if(w==null||w==="")return;const L=Object.entries(P.meanings).find(([U,R])=>{var E;const M=((E=P.friendly_meanings)==null?void 0:E[U])??R;return w===M||w===R});L&&(h[P.arg]=L[1])});const C=Zb(e,t.id,h),k=await Ti({gatewaySn:y,payload:C});return k.success?{success:!0,payload:C,result:k.data,gatewaySn:y}:(u(k.error||"Failed to invoke command"),{success:!1,error:k.error})}catch(g){const y=g instanceof Error?g.message:"Failed to invoke";return u(y),{success:!1,error:y}}finally{c(!1)}},[e.command_id,t.id,i]);return{formState:i,setFormState:r,handleFieldChange:f,handleRefresh:v,handleSet:b,handleInvoke:_,isLoading:s||a,error:d,lastRead:m}}const ch=({onClick:e})=>o.jsx("button",{type:"button",onClick:e,className:"text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer",children:"i"}),dh=()=>o.jsx("span",{className:"text-base leading-none",children:"⟳"}),uh=()=>o.jsx("span",{className:"text-base leading-none",children:"🕐"}),mh=()=>o.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-500 border border-slate-300 font-medium",children:"Read Only"});function ph({point:e,readOnly:t,helpTextMatch:n=!1,shouldShowHistory:l,shouldShowRefresh:a,shouldShowSetButton:i,setButtonAppearance:r,onHelpClick:s,onHistoryClick:c,onRefreshClick:d,onSetClick:u}){return o.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-3",children:[o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx("div",{className:"text-slate-800 text-sm font-semibold leading-tight",children:e.title}),e.help&&o.jsxs("div",{className:"mt-0.5 relative",children:[o.jsx(ch,{onClick:s}),n&&o.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"})]}),t&&o.jsx(mh,{})]}),o.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l&&o.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"View historical data",onClick:c,children:o.jsx(uh,{})}),a&&o.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"Refresh from device",onClick:d,children:o.jsx(dh,{})}),i&&o.jsx("button",{className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${r}`,disabled:t,onClick:u,children:"Set"})]})]})}function fh({point:e,formState:t,readOnly:n,onChange:l}){const a=e.entries.find(s=>s.arg==="Sec"),i=()=>{const s=t.Hour??0,c=t.Min??0,d=(t.Year??0)+2e3,u=String(t.Mon??1).padStart(2,"0"),m=String(t.Day??1).padStart(2,"0"),p=String(s).padStart(2,"0"),f=String(c).padStart(2,"0");return`${d}-${u}-${m}T${p}:${f}`},r=s=>{const c=new Date(s),d=c.getHours(),u=c.getMinutes();l("Year",c.getFullYear()-2e3),l("Mon",c.getMonth()+1),l("Day",c.getDate()),l("Hour",d),l("Min",u),a&&l("Sec",0)};return o.jsx("div",{className:"flex flex-col gap-2",children:o.jsx("input",{type:"datetime-local",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:i(),onChange:s=>r(s.target.value)})})}const ha="00:00";function kr({label:e,value:t,readOnly:n,onChange:l,onClear:a}){const i=!n&&t!==ha;return o.jsxs("div",{className:"w-[150px] flex-shrink-0 flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:e}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:t,onChange:r=>l(r.target.value)}),i&&o.jsx("button",{type:"button",className:"absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700",onClick:a,"aria-label":`Clear ${e.toLowerCase()}`,children:"✕"})]})]})}function sf({point:e,formState:t,readOnly:n,onChange:l}){const a=e.entries.find(b=>b.arg.includes("StartHour")||b.arg.includes("Start_hour")||b.arg.includes("StartTime_h")),i=e.entries.find(b=>b.arg.includes("StartMin")||b.arg.includes("Start_minute")||b.arg.includes("StartTime_m")),r=e.entries.find(b=>b.arg.includes("EndHour")||b.arg.includes("End_hour")||b.arg.includes("EndTime_h")),s=e.entries.find(b=>b.arg.includes("EndMin")||b.arg.includes("End_minute")||b.arg.includes("EndTime_m")),c=()=>{if(a&&i){const b=String(t[a.arg]??0).padStart(2,"0"),_=String(t[i.arg]??0).padStart(2,"0");return`${b}:${_}`}return ha},d=()=>{if(r&&s){const b=String(t[r.arg]??0).padStart(2,"0"),_=String(t[s.arg]??0).padStart(2,"0");return`${b}:${_}`}return ha},u=b=>{const[_,g]=b.split(":"),y=parseInt(_,10),h=parseInt(g,10);a&&i&&(l(a.arg,y),l(i.arg,h))},m=b=>{const[_,g]=b.split(":"),y=parseInt(_,10),h=parseInt(g,10);r&&s&&(l(r.arg,y),l(s.arg,h))},p=()=>{n||(u(ha),m(ha))},f=c(),v=d();return o.jsxs("div",{className:"flex items-end gap-4",children:[o.jsx(kr,{label:"Start Time",value:f,readOnly:n,onChange:u,onClear:p}),o.jsx(kr,{label:"End Time",value:v,readOnly:n,onChange:m,onClear:p})]})}function yh({point:e,formState:t,readOnly:n,onChange:l}){const a=new Map;e.entries.forEach(d=>{const u=d.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);if(!u)return;const[,m,p,f]=u,v=parseInt(p,10);a.has(v)||a.set(v,{id:v});const b=a.get(v),_=f.toLowerCase();m.toLowerCase()==="starttime"?_==="h"?b.startHourArg=d.arg:b.startMinArg=d.arg:_==="h"?b.endHourArg=d.arg:b.endMinArg=d.arg});const i=Array.from(a.values()).sort((d,u)=>d.id-u.id);if(i.length===0)return o.jsx(sf,{point:e,formState:t,readOnly:n,onChange:l});const r=(d,u)=>{const m=d!==void 0?t[d]:0,p=u!==void 0?t[u]:0,f=typeof m=="number"?m:parseInt(m??0,10)||0,v=typeof p=="number"?p:parseInt(p??0,10)||0;return`${String(f).padStart(2,"0")}:${String(v).padStart(2,"0")}`},s=(d,u,m)=>{const[p,f]=m.split(":"),v=parseInt(p,10),b=parseInt(f,10);u==="start"?(d.startHourArg&&l(d.startHourArg,v),d.startMinArg&&l(d.startMinArg,b)):(d.endHourArg&&l(d.endHourArg,v),d.endMinArg&&l(d.endMinArg,b))},c=d=>{n||(d.startHourArg&&l(d.startHourArg,0),d.startMinArg&&l(d.startMinArg,0),d.endHourArg&&l(d.endHourArg,0),d.endMinArg&&l(d.endMinArg,0))};return o.jsx("div",{className:"flex flex-col gap-4",children:i.map(d=>{const u=r(d.startHourArg,d.startMinArg),m=r(d.endHourArg,d.endMinArg),p=()=>c(d);return o.jsxs("div",{className:"flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3",children:[o.jsxs("div",{className:"text-xs font-semibold uppercase text-slate-600",children:["Grid Charge Window ",d.id]}),o.jsxs("div",{className:"flex items-end gap-4",children:[o.jsx(kr,{label:"Start Time",value:u,readOnly:n,onChange:f=>s(d,"start",f),onClear:p}),o.jsx(kr,{label:"End Time",value:m,readOnly:n,onChange:f=>s(d,"end",f),onClear:p})]})]},d.id)})})}function gh({formState:e,readOnly:t,onChange:n}){const l=e.DayOfWeek!==""?e.DayOfWeek:null,a=e.Hour!==""?e.Hour:null,i=e.Minute!==""?e.Minute:null,r=()=>a===null||i===null?"":`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`,s=u=>{if(!u){n("Hour",""),n("Minute","");return}const[m,p]=u.split(":");n("Hour",parseInt(m,10)),n("Minute",parseInt(p,10))},c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let d="No schedule configured";return l!==null&&a!==null&&i!==null&&(d=`Every ${c[l]} at ${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Day of Week"}),o.jsxs("select",{className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:l!==null?l:"",onChange:u=>n("DayOfWeek",u.target.value===""?"":Number(u.target.value)),children:[o.jsx("option",{value:"",children:"Select day..."}),c.map((u,m)=>o.jsx("option",{value:m,children:u},m))]})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Time"}),o.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:r(),onChange:u=>s(u.target.value)})]})]}),o.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-3",children:[o.jsx("div",{className:"text-xs text-slate-600 font-medium mb-1",children:"Schedule Preview"}),o.jsx("div",{className:"text-sm text-slate-800",children:d})]})]})}function bh({point:e,equipment:t,readOnly:n}){const[l,a]=A.useState(!1),[i,r]=A.useState(null),s=A.useMemo(()=>{var d;return(d=e.entries)!=null&&d.length?e.entries.map(u=>{const m=u.name||u.arg,p=u.description||u.longdescription||"Value reported by inverter firmware";return`${m}: ${p}`}):["Voltage Ride-Through Windows: IEEE 1547 Category B","Frequency Ride-Through Windows: IEEE 1547 Category B","Volt-VAR Curve: UL 1741 SA Default Profile","Frequency-Watt Behavior: Droop Enabled, 5% Slope","Anti-Islanding Method: Active (Sandia)"]},[e.entries]),c=()=>{if(!(n||l)){r(null),a(!0);try{const d=new Date,u=d.toISOString().replace(/[:.]/g,"-"),m=d.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),f=["Fortress Power Envy Inverter","UL Compliance Report","This is just a placeholder report for testing purposes.  Dont base the real implementation on this.","".padEnd(20,"="),`Generated: ${m}`,`Device: ${t.label}`,"","Purpose","This report captures the active grid settings configured on the inverter so they can be shared with AHJs, utilities, or inspectors who require UL 1741 / IEEE 1547 conformance evidence.","","Key Grid Parameters",...s.map(g=>`• ${g}`),"","Statements of Compliance","- Grid support functions follow UL 1741 SA requirements for exporting inverters.","- Trip settings align with local utility specifications (for example, California Rule 21, Puerto Rico LUMA).","- Anti-islanding protections remain enabled and tested per UL procedures.","","Notes","This summary reflects the values active on the device at the time of export. Re-run the report after making configuration changes to maintain an auditable paper trail."].join(`
`),v=new Blob([f],{type:"text/plain"}),b=URL.createObjectURL(v),_=document.createElement("a");_.href=b,_.download=`ul-compliance-${t.id}-${u}.txt`,_.click(),URL.revokeObjectURL(b)}catch(d){console.error("Failed to generate UL Compliance report",d),r("Unable to generate the report. Please try again.")}finally{a(!1)}}};return o.jsxs("div",{className:"flex flex-col gap-3",children:[i&&o.jsx("div",{className:"rounded border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600",children:i}),o.jsx("button",{type:"button",className:`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition ${n||l?"border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`,disabled:n||l,onClick:c,children:l?"Preparing Report…":"Download UL Compliance Report"}),o.jsx("div",{className:"text-xs text-slate-500",children:"The downloaded text file includes device metadata, ride-through windows, and other grid-support functions so you can keep documentation for AHJ or utility reviews."})]})}function hh({entries:e,formState:t,readOnly:n,onChange:l}){var b;const[a,i]=A.useState(null),r=A.useRef(null),s=[{bg:"bg-emerald-500",text:"text-emerald-600",border:"border-emerald-500"},{bg:"bg-rose-500",text:"text-rose-600",border:"border-rose-500"},{bg:"bg-blue-500",text:"text-blue-600",border:"border-blue-500"},{bg:"bg-purple-500",text:"text-purple-600",border:"border-purple-500"},{bg:"bg-orange-500",text:"text-orange-600",border:"border-orange-500"},{bg:"bg-pink-500",text:"text-pink-600",border:"border-pink-500"},{bg:"bg-indigo-500",text:"text-indigo-600",border:"border-indigo-500"},{bg:"bg-teal-500",text:"text-teal-600",border:"border-teal-500"},{bg:"bg-cyan-500",text:"text-cyan-600",border:"border-cyan-500"},{bg:"bg-amber-500",text:"text-amber-600",border:"border-amber-500"},{bg:"bg-lime-500",text:"text-lime-600",border:"border-lime-500"},{bg:"bg-fuchsia-500",text:"text-fuchsia-600",border:"border-fuchsia-500"}],c=(b=e[0])==null?void 0:b.range;if(!c)return null;const{min:d,max:u}=c,m=_=>{let g=d,y=u;if(_.greater_than){const h=t[_.greater_than];typeof h=="number"&&(g=Math.max(g,h+1))}if(_.less_than){const h=t[_.less_than];typeof h=="number"&&(y=Math.min(y,h-1))}return{min:g,max:y}},p=(_,g)=>{const y=m(_),h=Math.max(y.min,Math.min(y.max,g));l(_.arg,h)},f=(_,g)=>{if(n)return;g.preventDefault(),i(_);const y=r.current;if(!y)return;const h=k=>{const P=y.getBoundingClientRect(),w=k.clientX-P.left,L=Math.max(0,Math.min(100,w/P.width*100)),U=Math.round(d+L/100*(u-d));p(e[_],U)},C=()=>{i(null),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",C)},v=e.length>=8?"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4":"grid-cols-2";return o.jsxs("div",{className:"flex flex-col gap-3 text-sm",children:[o.jsx("div",{className:`grid ${v} gap-3`,children:e.map((_,g)=>{const y=s[g%s.length],h=t[_.arg]??d,C=m(_);return o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsxs("div",{className:`text-[11px] uppercase font-semibold flex items-center gap-1.5 ${y.text}`,children:[o.jsx("span",{className:`w-2 h-2 rounded-full ${y.bg}`}),o.jsx("span",{children:_.name??""}),_.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase ml-auto",children:_.unit})]}),o.jsx("input",{type:"number",className:`w-full rounded border ${y.border} bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500`,disabled:n,value:h,min:C.min,max:C.max,onChange:k=>{const P=k.target.value===""?C.min:Number(k.target.value);p(_,P)}})]},_.arg)})}),o.jsxs("div",{className:"relative w-full pt-2 pb-3",children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-2",children:[o.jsx("span",{children:d}),o.jsx("span",{children:u})]}),o.jsxs("div",{className:"relative overflow-hidden",ref:r,children:[o.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full -translate-y-1/2"}),o.jsx("div",{className:"relative overflow-hidden",style:{height:"24px"},children:e.map((_,g)=>{const y=s[g%s.length],h=t[_.arg]??d,C=(h-d)/(u-d)*100,k=e.length-g,P=a===g?100:k;return o.jsx("div",{children:o.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 ${n?"cursor-not-allowed":"cursor-grab active:cursor-grabbing"}`,style:{left:`${C}%`,transform:"translate(-50%, -50%)",width:"40px",height:"24px",zIndex:P},onMouseDown:w=>f(g,w),children:o.jsx("div",{className:`absolute top-1/2 left-1/2 w-5 h-5 rounded-full ${y.bg} border-2 border-white shadow-lg pointer-events-none transition-shadow`,style:{transform:"translate(-50%, -50%)",zIndex:1,boxShadow:a===g?"0 0 0 3px rgba(0,0,0,0.1)":void 0},title:_.name?`${_.name}: ${h}`:String(h)})})},_.arg)})})]})]})]})}function xh({entry:e,value:t,onChange:n,readOnly:l,point:a}){var v,b,_,g,y,h,C;const i="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",r=e.dtype==="enum"||e.dtype&&e.dtype.startsWith("bitfield")?"col-span-full flex flex-col gap-1 text-sm":"flex flex-col gap-1 text-sm";if(e.dtype&&e.dtype.startsWith("bitfield")&&e.meanings){const k=t||{},P=w=>{const L={...k,[w]:!k[w]};n(L)};return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name??""}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("div",{className:"flex flex-col gap-2 py-1",children:Object.entries(e.meanings).map(([w,L])=>o.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:k[w]||!1,onChange:()=>P(w)}),o.jsx("span",{className:"text-sm text-slate-800",children:L})]},w))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}if(e.dtype==="enum"&&e.meanings){const k=Object.entries(e.meanings).map(([L,U])=>{var M;const R=((M=e.friendly_meanings)==null?void 0:M[L])??U;return{wireVal:L,friendly:R}});if(k.length<=3)return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("div",{className:"flex flex-col gap-2 py-1",children:k.map(L=>o.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx("input",{type:"radio",name:e.arg,className:"w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:t===L.friendly,onChange:()=>n(L.friendly)}),o.jsx("span",{className:"text-sm text-slate-800",children:L.friendly})]},L.wireVal))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]});const P=k.reduce((L,U)=>U.friendly.length>L.length?U.friendly:L,""),w=Math.min(Math.max(P.length*8.5+50,220),480);return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name??""}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",style:{minWidth:`${w}px`,maxWidth:"100%"},disabled:l,value:t??"",onChange:L=>n(L.target.value),children:k.map(L=>o.jsx("option",{value:L.friendly,children:L.friendly},L.wireVal))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}const s=e.dtype==="Number",c=s&&e.range!==void 0,d=((v=a==null?void 0:a.protocol)==null?void 0:v.modbus)!==void 0,u=(_=(b=a==null?void 0:a.protocol)==null?void 0:b.modbus)==null?void 0:_.scale_factor,m=d&&u!==void 0&&s,p=m&&t!==null&&t!==void 0&&t!==""?Number(t)*u:t,f=k=>{if(s){const P=k===""?"":Number(k);if(m&&P!==""){const w=Math.round(P/u);n(w)}else n(P)}else n(k)};return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("input",{type:s?"number":"text",className:c?"w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500":i,disabled:l,value:p??"",min:(g=e.range)==null?void 0:g.min,max:(y=e.range)==null?void 0:y.max,onChange:k=>f(k.target.value)}),c&&o.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.min}),o.jsx("input",{type:"range",className:"flex-1",disabled:l,value:p??e.range.min,min:(h=e.range)==null?void 0:h.min,max:(C=e.range)==null?void 0:C.max,onChange:k=>{const P=Number(k.target.value);if(m){const w=Math.round(P/u);n(w)}else n(P)}}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.max})]})]}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug",children:e.longdescription})]})}function _h({point:e,formState:t,readOnly:n,isInvoke:l,setButtonAppearance:a,onChange:i,onInvokeClick:r,equipment:s}){const c=e.entries.filter(u=>u.dtype==="Number"&&u.range!==void 0),d=!e.widget&&c.length>=2&&c.length===e.entries.length;return o.jsxs(o.Fragment,{children:[e.widget==="datetime"?o.jsx(fh,{point:e,formState:t,readOnly:n,onChange:i}):e.widget==="timerange-multi"?o.jsx(yh,{point:e,formState:t,readOnly:n,onChange:i}):e.widget==="timerange"?o.jsx(sf,{point:e,formState:t,readOnly:n,onChange:i}):e.widget==="generator-exercise"?o.jsx(gh,{formState:t,readOnly:n,onChange:i}):e.widget==="ul-compliance-report"?o.jsx(bh,{point:e,equipment:s,readOnly:n}):d?o.jsx(hh,{entries:c,formState:t,readOnly:n,onChange:i}):o.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4",children:e.entries.map(u=>o.jsx(xh,{entry:u,value:t[u.arg],readOnly:n,point:e,onChange:m=>i(u.arg,m)},u.arg))}),l&&e.widget!=="generator-exercise"&&e.widget!=="ul-compliance-report"&&e.showInvokeButton!==!1&&o.jsx("div",{className:"mt-4 flex items-center gap-2",children:o.jsx("button",{type:"button",className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${a}`,disabled:n,onClick:r,children:e.invokeButtonText||"Invoke"})})]})}const vh={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl"};function Yr({isOpen:e,onClose:t,title:n,icon:l,children:a,showFooter:i=!0,footerContent:r,maxWidth:s="lg"}){if(A.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&t()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[e,t]),!e)return null;const c=o.jsx("div",{className:"flex justify-end p-4 border-t border-slate-200 bg-slate-50",children:o.jsx("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",onClick:t,children:"Close"})});return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4",onClick:t,children:o.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${vh[s]} border border-slate-300 overflow-hidden`,onClick:d=>d.stopPropagation(),children:[o.jsxs("div",{className:"flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[l,o.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:n})]}),o.jsx("button",{type:"button",className:"text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1",onClick:t,children:"✕"})]}),o.jsx("div",{className:"p-5 max-h-[60vh] overflow-y-auto",children:a}),i&&(r||c)]})})}function wh({title:e,content:t,isOpen:n,onClose:l}){const a=r=>r.split(/(\*\*[^*]+\*\*)/g).map((c,d)=>c.startsWith("**")&&c.endsWith("**")?o.jsx("strong",{className:"font-semibold text-slate-900",children:c.slice(2,-2)},d):o.jsx("span",{children:c},d)),i=o.jsx("div",{className:"text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium",children:"i"});return o.jsx(Yr,{isOpen:n,onClose:l,title:e,icon:i,children:o.jsx("div",{className:"text-sm text-slate-700 leading-relaxed whitespace-pre-wrap",children:a(t)})})}function Ch({point:e,isOpen:t,onClose:n}){const l=[];e.entries.forEach(i=>{var r,s;if((r=i.telemetry)!=null&&r.model&&((s=i.telemetry)!=null&&s.point)){const c=`${i.telemetry.model}.${i.telemetry.point}`;l.includes(c)||l.push(c)}});const a=o.jsx("span",{className:"text-slate-500 text-xl",children:"🕐"});return o.jsxs(Yr,{isOpen:t,onClose:n,title:"Historical Data",icon:a,children:[o.jsx("div",{className:"text-sm text-slate-700 leading-relaxed mb-4",children:"In the real UI, this button would link you to the historical data page showing the last 24 hours of data for the following telemetry points:"}),l.length>0?o.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4",children:[o.jsx("div",{className:"text-xs font-semibold text-slate-600 uppercase mb-2",children:"Telemetry Points"}),o.jsx("div",{className:"flex flex-col gap-2",children:l.map((i,r)=>o.jsx("div",{className:"font-mono text-sm text-emerald-600 bg-white border border-emerald-200 rounded px-3 py-2",children:i},r))})]}):o.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800",children:"No telemetry points configured for this setting."})]})}function Su({isOpen:e,onClose:t,title:n,payload:l,gatewaySn:a,type:i="set"}){const r=i==="refresh"?o.jsx("span",{children:"⟳"}):o.jsx("span",{children:"📤"});return o.jsxs(Yr,{isOpen:e,onClose:t,title:n,icon:r,maxWidth:"xl",children:[a&&o.jsxs("div",{className:"text-sm text-slate-700 mb-3 bg-blue-50 border border-blue-200 rounded-lg p-3",children:[o.jsx("span",{className:"font-semibold",children:"Gateway:"})," ",a]}),o.jsx("div",{className:"text-sm text-slate-700 mb-3",children:"This is a preview of the command that would be sent:"}),o.jsx("pre",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800",children:JSON.stringify(l,null,2)})]})}function Lu({point:e,helpTextMatch:t=!1,equipment:n}){var U,R,M,E;const{formState:l,handleFieldChange:a,handleRefresh:i,handleSet:r,handleInvoke:s}=sh(e,n),c=ba(),d=ba(),u=ba(),m=ba(),p=()=>c.open(),f=()=>d.open(),v=async()=>{const F=await i();F!=null&&F.payload&&m.open({payload:F.payload,gatewaySn:F.gatewaySn})},b=async()=>{const F=await r();F!=null&&F.payload&&u.open({payload:F.payload,gatewaySn:F.gatewaySn})},_=async()=>{const F=await s();F!=null&&F.payload&&u.open({payload:F.payload,gatewaySn:F.gatewaySn})},y=(typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service",h=e.readOnly||e.access==="R",C=h?"border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-400 bg-white text-slate-700 hover:bg-slate-50",k=e.entries.some(F=>{var le,B;return((le=F.telemetry)==null?void 0:le.model)&&((B=F.telemetry)==null?void 0:B.point)}),P=e.showHistory!==void 0?e.showHistory:k&&!y,w=y?e.showRefresh===!0:e.showRefresh!==!1,L=e.showSetButton!==void 0?e.showSetButton:!y;return o.jsxs("div",{className:"rounded-xl border border-slate-300 bg-white p-4 shadow-sm",children:[o.jsx(ph,{point:e,readOnly:h,helpTextMatch:t,shouldShowHistory:P,shouldShowRefresh:w,shouldShowSetButton:L,setButtonAppearance:C,onHelpClick:p,onHistoryClick:f,onRefreshClick:v,onSetClick:b}),o.jsx(_h,{point:e,formState:l,readOnly:h,isInvoke:y,setButtonAppearance:C,onChange:a,onInvokeClick:_,equipment:n}),o.jsx(wh,{title:e.title,content:e.help||"",isOpen:c.isOpen,onClose:c.close}),o.jsx(Ch,{point:e,isOpen:d.isOpen,onClose:d.close}),o.jsx(Su,{title:"Command Preview",payload:(U=u.data)==null?void 0:U.payload,gatewaySn:(R=u.data)==null?void 0:R.gatewaySn,isOpen:u.isOpen,onClose:u.close}),o.jsx(Su,{title:"Read Command Preview",payload:(M=m.data)==null?void 0:M.payload,gatewaySn:(E=m.data)==null?void 0:E.gatewaySn,isOpen:m.isOpen,onClose:m.close,type:"refresh"})]})}function Sh({subsection:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){const[a,i]=A.useState(!e.collapsedByDefault),r=e.points.map(c=>({point:c,searchResult:n(c,t)})).filter(({searchResult:c})=>c.matches);if(r.length===0)return null;const s=t.trim()?!0:a;return e.collapsedByDefault?o.jsxs("div",{className:"border border-slate-300 bg-white rounded-xl shadow-sm mb-8",children:[o.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-2 text-left",onClick:()=>i(c=>!c),children:[o.jsx("span",{className:"text-slate-800 text-sm font-semibold uppercase tracking-wide",children:e.title||"Advanced"}),o.jsx("span",{className:"text-slate-500 text-xs",children:s?"▾":"▸"})]}),s&&o.jsx("div",{className:"p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:c,searchResult:d})=>o.jsx(Lu,{point:c,helpTextMatch:d.helpTextMatch,equipment:l},c.command_id))})]}):o.jsxs("div",{className:"mb-6",children:[e.title&&o.jsx("div",{className:"text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2",children:o.jsx("span",{children:e.title})}),o.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:c,searchResult:d})=>o.jsx(Lu,{point:c,helpTextMatch:d.helpTextMatch,equipment:l},c.command_id))})]})}function Lh({section:e,sectionId:t,searchQuery:n,pointMatchesSearch:l,equipment:a}){const[i,r]=A.useState(!0),s=e.subsections.some(c=>c.points.some(d=>l(d,n).matches));return n.trim()&&!s?null:o.jsxs("section",{className:"bg-white/0",id:t,children:[o.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors",onClick:()=>r(!i),children:[o.jsx("span",{children:e.sectionTitle}),o.jsx("span",{className:"text-slate-500 text-sm",children:i?"▾":"▸"})]}),i&&o.jsx("div",{children:e.subsections.map((c,d)=>o.jsx(Sh,{subsection:c,searchQuery:n,pointMatchesSearch:l,equipment:a},d))})]})}const ku=[{bg:"bg-brand-green/10",border:"border-brand-green/30",text:"text-slate-900",hover:"hover:bg-brand-green/20"},{bg:"bg-brand-teal/10",border:"border-brand-teal/30",text:"text-slate-900",hover:"hover:bg-brand-teal/20"},{bg:"bg-brand-emerald/10",border:"border-brand-emerald/30",text:"text-slate-900",hover:"hover:bg-brand-emerald/20"},{bg:"bg-brand-cyan/10",border:"border-brand-cyan/30",text:"text-slate-900",hover:"hover:bg-brand-cyan/20"},{bg:"bg-brand-mint/10",border:"border-brand-mint/30",text:"text-slate-900",hover:"hover:bg-brand-mint/20"},{bg:"bg-brand-forest/10",border:"border-brand-forest/30",text:"text-slate-900",hover:"hover:bg-brand-forest/20"},{bg:"bg-brand-sage/10",border:"border-brand-sage/30",text:"text-slate-900",hover:"hover:bg-brand-sage/20"}];function kh({theme:e,themeId:t,themeIndex:n,searchQuery:l,pointMatchesSearch:a,equipment:i}){const[r,s]=A.useState(!0),c=ku[n%ku.length],d=e.sections.some(u=>u.subsections.some(m=>m.points.some(p=>a(p,l).matches)));return l.trim()&&!d?null:o.jsxs("div",{className:"bg-white/0",id:t,children:[o.jsxs("button",{className:`w-full flex items-center justify-between ${c.bg} ${c.text} text-2xl font-bold mb-6 border-b ${c.border} pb-3 px-4 py-2 rounded-lg ${c.hover} transition-all`,onClick:()=>s(!r),children:[o.jsx("span",{children:e.themeName}),o.jsx("span",{className:"text-slate-500 text-lg",children:r?"▾":"▸"})]}),r&&o.jsx("div",{className:"flex flex-col gap-10",children:e.sections.map((u,m)=>{const p=`${t}-section-${m}`;return o.jsx(Lh,{section:u,sectionId:p,searchQuery:l,pointMatchesSearch:a,equipment:i},`${u.sectionTitle}-${m}`)})})]})}function Dh({themes:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){return o.jsxs("div",{className:"flex flex-col gap-16",children:[e.map((a,i)=>{const r=`theme-${i}`;return o.jsx(kh,{theme:a,themeId:r,themeIndex:i,searchQuery:t,pointMatchesSearch:n,equipment:l},`${a.themeName}-${i}`)}),!e.length&&o.jsx("div",{className:"text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60",children:"This page does not define any themes yet."})]})}function Th({isOpen:e,onClose:t}){const n=o.jsx("span",{className:"text-base text-slate-600",role:"img","aria-label":"refresh",children:"⟳"});return o.jsx(Yr,{isOpen:e,onClose:t,title:"Refresh Site Values",icon:n,maxWidth:"md",children:o.jsxs("div",{className:"text-sm text-slate-700 space-y-3",children:[o.jsx("p",{children:"This button does not make any network calls in the prototype."}),o.jsxs("p",{children:["In a real implementation this action should call"," ",o.jsx("code",{className:"mx-1 rounded bg-slate-100 px-1 py-0.5 text-xs",children:"GetPointValues"})," ","with"," ",o.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"force_refresh=true"})," ","to retrieve the freshest point data."]})]})})}function Eh(e){var n,l,a,i,r,s,c;if(!e)return;if(!Array.isArray(e.themes)){console.error("[SchemaTest] page.themes is missing or not an array");return}e.themes.forEach((d,u)=>{if(!Array.isArray(d.sections)){console.error(`[SchemaTest] theme ${u} (${d.themeName}) has no sections array`);return}d.sections.forEach((m,p)=>{Array.isArray(m.subsections)||console.error(`[SchemaTest] theme ${u} / section ${p} (${m.sectionTitle}) has no subsections array`)}),d.sections.forEach((m,p)=>{var f;(f=m.subsections)==null||f.forEach((v,b)=>{if(!Array.isArray(v.points)){console.error(`[SchemaTest] theme ${u} / section ${p} / subsection ${b} (${v.title}) has no points array`);return}v.points.forEach((_,g)=>{if(!Array.isArray(_.entries)){console.error(`[SchemaTest] theme ${u} / section ${p} / subsection ${b} / point ${g} (${_.title}) has no entries array`);return}_.entries.forEach((y,h)=>{const C=["enum","String","Number"],k=y.dtype&&typeof y.dtype=="string"&&y.dtype.startsWith("bitfield");!C.includes(y.dtype)&&!k&&console.error(`[SchemaTest] entry ${y.name??h} in point ${_.title} has unsupported dtype ${y.dtype}`)})})})})});const t=((c=(s=(r=(i=(a=(l=(n=e.themes)==null?void 0:n[0])==null?void 0:l.sections)==null?void 0:a[0])==null?void 0:i.subsections)==null?void 0:r[0])==null?void 0:s.points)==null?void 0:c[0])||null;t&&(t.command_id||console.error("[SchemaTest] firstPoint.command_id missing"),t.protocol||console.error("[SchemaTest] firstPoint.protocol missing"))}function Ph(){var L,U,R;const[e,t]=A.useState(((L=Di[0])==null?void 0:L.id)??""),{pageRegistry:n,pageLookup:l,isLoading:a,loadError:i,lastModified:r}=eh(e),s=((U=n[0])==null?void 0:U.id)??"",[c]=A.useState(s),d=th(),{searchQuery:u,setSearchQuery:m,pointMatchesSearch:p}=nh(),f=ba(),v=A.useMemo(()=>r?new Date(r).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}):"Never",[r]),b=c&&l[c]||s&&l[s]||null,_=A.useMemo(()=>Di.find(M=>M.id===e)||Di[0],[e]),{getGatewaySn:g,isLoading:y}=of(),h=(R=_==null?void 0:_.thingId)==null?void 0:R.SN,C=h?g(h):void 0,k=lh(C),P={gatewaySn:C,isOnline:C?k.isOnline:null,isLoading:y||!!C&&k.isLoading,lastChecked:k.statusTimestamp,error:k.error||(!y&&h&&!C?"Gateway mapping unavailable":null)};if(A.useEffect(()=>{Eh(b)},[b]),a)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsx("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:"Loading theme file..."})});if(i)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700",children:[o.jsx("div",{className:"font-semibold mb-2",children:"Error loading site configuration"}),o.jsx("div",{children:i})]})});if(!b)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:["No pages found in ",o.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"src/themes"}),". Add a JSON page file to get started."]})});const w=b.themes??[];return o.jsxs("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:[o.jsxs("div",{className:"max-w-[1400px] mx-auto flex gap-4",children:[o.jsx(ah,{themes:w,activeSection:d,selectedEquipmentId:e,onEquipmentChange:t,equipmentOptions:Di}),o.jsxs("main",{className:"flex-1 flex flex-col gap-6",children:[o.jsx(ih,{searchQuery:u,onSearchChange:m,lastUpdatedLabel:v,onRefresh:()=>f.open(),gatewayStatus:P}),o.jsx(Dh,{themes:w,searchQuery:u,pointMatchesSearch:p,equipment:_})]})]}),o.jsx(Th,{isOpen:f.isOpen,onClose:f.close})]})}const Xc=Symbol.for("yaml.alias"),Qs=Symbol.for("yaml.document"),hn=Symbol.for("yaml.map"),cf=Symbol.for("yaml.pair"),jt=Symbol.for("yaml.scalar"),Wl=Symbol.for("yaml.seq"),xt=Symbol.for("yaml.node.type"),Ln=e=>!!e&&typeof e=="object"&&e[xt]===Xc,Jn=e=>!!e&&typeof e=="object"&&e[xt]===Qs,$l=e=>!!e&&typeof e=="object"&&e[xt]===hn,_e=e=>!!e&&typeof e=="object"&&e[xt]===cf,pe=e=>!!e&&typeof e=="object"&&e[xt]===jt,Hl=e=>!!e&&typeof e=="object"&&e[xt]===Wl;function we(e){if(e&&typeof e=="object")switch(e[xt]){case hn:case Wl:return!0}return!1}function Se(e){if(e&&typeof e=="object")switch(e[xt]){case Xc:case hn:case jt:case Wl:return!0}return!1}const df=e=>(pe(e)||we(e))&&!!e.anchor,et=Symbol("break visit"),uf=Symbol("skip children"),Gt=Symbol("remove node");function Xn(e,t){const n=mf(t);Jn(e)?_l(null,e.contents,n,Object.freeze([e]))===Gt&&(e.contents=null):_l(null,e,n,Object.freeze([]))}Xn.BREAK=et;Xn.SKIP=uf;Xn.REMOVE=Gt;function _l(e,t,n,l){const a=pf(e,t,n,l);if(Se(a)||_e(a))return ff(e,l,a),_l(e,a,n,l);if(typeof a!="symbol"){if(we(t)){l=Object.freeze(l.concat(t));for(let i=0;i<t.items.length;++i){const r=_l(i,t.items[i],n,l);if(typeof r=="number")i=r-1;else{if(r===et)return et;r===Gt&&(t.items.splice(i,1),i-=1)}}}else if(_e(t)){l=Object.freeze(l.concat(t));const i=_l("key",t.key,n,l);if(i===et)return et;i===Gt&&(t.key=null);const r=_l("value",t.value,n,l);if(r===et)return et;r===Gt&&(t.value=null)}}return a}async function Jr(e,t){const n=mf(t);Jn(e)?await vl(null,e.contents,n,Object.freeze([e]))===Gt&&(e.contents=null):await vl(null,e,n,Object.freeze([]))}Jr.BREAK=et;Jr.SKIP=uf;Jr.REMOVE=Gt;async function vl(e,t,n,l){const a=await pf(e,t,n,l);if(Se(a)||_e(a))return ff(e,l,a),vl(e,a,n,l);if(typeof a!="symbol"){if(we(t)){l=Object.freeze(l.concat(t));for(let i=0;i<t.items.length;++i){const r=await vl(i,t.items[i],n,l);if(typeof r=="number")i=r-1;else{if(r===et)return et;r===Gt&&(t.items.splice(i,1),i-=1)}}}else if(_e(t)){l=Object.freeze(l.concat(t));const i=await vl("key",t.key,n,l);if(i===et)return et;i===Gt&&(t.key=null);const r=await vl("value",t.value,n,l);if(r===et)return et;r===Gt&&(t.value=null)}}return a}function mf(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function pf(e,t,n,l){var a,i,r,s,c;if(typeof n=="function")return n(e,t,l);if($l(t))return(a=n.Map)==null?void 0:a.call(n,e,t,l);if(Hl(t))return(i=n.Seq)==null?void 0:i.call(n,e,t,l);if(_e(t))return(r=n.Pair)==null?void 0:r.call(n,e,t,l);if(pe(t))return(s=n.Scalar)==null?void 0:s.call(n,e,t,l);if(Ln(t))return(c=n.Alias)==null?void 0:c.call(n,e,t,l)}function ff(e,t,n){const l=t[t.length-1];if(we(l))l.items[e]=n;else if(_e(l))e==="key"?l.key=n:l.value=n;else if(Jn(l))l.contents=n;else{const a=Ln(l)?"alias":"scalar";throw new Error(`Cannot replace node with ${a} parent`)}}const Nh={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Ah=e=>e.replace(/[!,[\]{}]/g,t=>Nh[t]);class Qe{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Qe.defaultYaml,t),this.tags=Object.assign({},Qe.defaultTags,n)}clone(){const t=new Qe(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new Qe(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Qe.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Qe.defaultTags);break}return t}add(t,n){this.atNextDocument&&(this.yaml={explicit:Qe.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Qe.defaultTags),this.atNextDocument=!1);const l=t.trim().split(/[ \t]+/),a=l.shift();switch(a){case"%TAG":{if(l.length!==2&&(n(0,"%TAG directive should contain exactly two parts"),l.length<2))return!1;const[i,r]=l;return this.tags[i]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,l.length!==1)return n(0,"%YAML directive should contain exactly one part"),!1;const[i]=l;if(i==="1.1"||i==="1.2")return this.yaml.version=i,!0;{const r=/^\d+\.\d+$/.test(i);return n(6,`Unsupported YAML version ${i}`,r),!1}}default:return n(0,`Unknown directive ${a}`,!0),!1}}tagName(t,n){if(t==="!")return"!";if(t[0]!=="!")return n(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const r=t.slice(2,-1);return r==="!"||r==="!!"?(n(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&n("Verbatim tags must end with a >"),r)}const[,l,a]=t.match(/^(.*!)([^!]*)$/s);a||n(`The ${t} tag has no suffix`);const i=this.tags[l];if(i)try{return i+decodeURIComponent(a)}catch(r){return n(String(r)),null}return l==="!"?t:(n(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[n,l]of Object.entries(this.tags))if(t.startsWith(l))return n+Ah(t.substring(l.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const n=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],l=Object.entries(this.tags);let a;if(t&&l.length>0&&Se(t.contents)){const i={};Xn(t.contents,(r,s)=>{Se(s)&&s.tag&&(i[s.tag]=!0)}),a=Object.keys(i)}else a=[];for(const[i,r]of l)i==="!!"&&r==="tag:yaml.org,2002:"||(!t||a.some(s=>s.startsWith(r)))&&n.push(`%TAG ${i} ${r}`);return n.join(`
`)}}Qe.defaultYaml={explicit:!1,version:"1.2"};Qe.defaultTags={"!!":"tag:yaml.org,2002:"};function yf(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const n=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(n)}return!0}function gf(e){const t=new Set;return Xn(e,{Value(n,l){l.anchor&&t.add(l.anchor)}}),t}function bf(e,t){for(let n=1;;++n){const l=`${e}${n}`;if(!t.has(l))return l}}function Vh(e,t){const n=[],l=new Map;let a=null;return{onAnchor:i=>{n.push(i),a??(a=gf(e));const r=bf(t,a);return a.add(r),r},setAnchors:()=>{for(const i of n){const r=l.get(i);if(typeof r=="object"&&r.anchor&&(pe(r.node)||we(r.node)))r.node.anchor=r.anchor;else{const s=new Error("Failed to resolve repeated object (this should not happen)");throw s.source=i,s}}},sourceObjects:l}}function wl(e,t,n,l){if(l&&typeof l=="object")if(Array.isArray(l))for(let a=0,i=l.length;a<i;++a){const r=l[a],s=wl(e,l,String(a),r);s===void 0?delete l[a]:s!==r&&(l[a]=s)}else if(l instanceof Map)for(const a of Array.from(l.keys())){const i=l.get(a),r=wl(e,l,a,i);r===void 0?l.delete(a):r!==i&&l.set(a,r)}else if(l instanceof Set)for(const a of Array.from(l)){const i=wl(e,l,a,a);i===void 0?l.delete(a):i!==a&&(l.delete(a),l.add(i))}else for(const[a,i]of Object.entries(l)){const r=wl(e,l,a,i);r===void 0?delete l[a]:r!==i&&(l[a]=r)}return e.call(t,n,l)}function gt(e,t,n){if(Array.isArray(e))return e.map((l,a)=>gt(l,String(a),n));if(e&&typeof e.toJSON=="function"){if(!n||!df(e))return e.toJSON(t,n);const l={aliasCount:0,count:1,res:void 0};n.anchors.set(e,l),n.onCreate=i=>{l.res=i,delete n.onCreate};const a=e.toJSON(t,n);return n.onCreate&&n.onCreate(a),a}return typeof e=="bigint"&&!(n!=null&&n.keep)?Number(e):e}class Zc{constructor(t){Object.defineProperty(this,xt,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}toJS(t,{mapAsMap:n,maxAliasCount:l,onAnchor:a,reviver:i}={}){if(!Jn(t))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:t,keep:!0,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof l=="number"?l:100},s=gt(this,"",r);if(typeof a=="function")for(const{count:c,res:d}of r.anchors.values())a(d,c);return typeof i=="function"?wl(i,{"":s},"",s):s}}class Xr extends Zc{constructor(t){super(Xc),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t,n){let l;n!=null&&n.aliasResolveCache?l=n.aliasResolveCache:(l=[],Xn(t,{Node:(i,r)=>{(Ln(r)||df(r))&&l.push(r)}}),n&&(n.aliasResolveCache=l));let a;for(const i of l){if(i===this)break;i.anchor===this.source&&(a=i)}return a}toJSON(t,n){if(!n)return{source:this.source};const{anchors:l,doc:a,maxAliasCount:i}=n,r=this.resolve(a,n);if(!r){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let s=l.get(r);if(s||(gt(r,null,n),s=l.get(r)),!s||s.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(i>=0&&(s.count+=1,s.aliasCount===0&&(s.aliasCount=Xi(a,r,l)),s.count*s.aliasCount>i)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return s.res}toString(t,n,l){const a=`*${this.source}`;if(t){if(yf(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(t.implicitKey)return`${a} `}return a}}function Xi(e,t,n){if(Ln(t)){const l=t.resolve(e),a=n&&l&&n.get(l);return a?a.count*a.aliasCount:0}else if(we(t)){let l=0;for(const a of t.items){const i=Xi(e,a,n);i>l&&(l=i)}return l}else if(_e(t)){const l=Xi(e,t.key,n),a=Xi(e,t.value,n);return Math.max(l,a)}return 1}const hf=e=>!e||typeof e!="function"&&typeof e!="object";class ie extends Zc{constructor(t){super(jt),this.value=t}toJSON(t,n){return n!=null&&n.keep?this.value:gt(this.value,t,n)}toString(){return String(this.value)}}ie.BLOCK_FOLDED="BLOCK_FOLDED";ie.BLOCK_LITERAL="BLOCK_LITERAL";ie.PLAIN="PLAIN";ie.QUOTE_DOUBLE="QUOTE_DOUBLE";ie.QUOTE_SINGLE="QUOTE_SINGLE";const Rh="tag:yaml.org,2002:";function Ih(e,t,n){if(t){const l=n.filter(i=>i.tag===t),a=l.find(i=>!i.format)??l[0];if(!a)throw new Error(`Tag ${t} not found`);return a}return n.find(l=>{var a;return((a=l.identify)==null?void 0:a.call(l,e))&&!l.format})}function Qa(e,t,n){var m,p,f;if(Jn(e)&&(e=e.contents),Se(e))return e;if(_e(e)){const v=(p=(m=n.schema[hn]).createNode)==null?void 0:p.call(m,n.schema,null,n);return v.items.push(e),v}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:l,onAnchor:a,onTagObj:i,schema:r,sourceObjects:s}=n;let c;if(l&&e&&typeof e=="object"){if(c=s.get(e),c)return c.anchor??(c.anchor=a(e)),new Xr(c.anchor);c={anchor:null,node:null},s.set(e,c)}t!=null&&t.startsWith("!!")&&(t=Rh+t.slice(2));let d=Ih(e,t,r.tags);if(!d){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const v=new ie(e);return c&&(c.node=v),v}d=e instanceof Map?r[hn]:Symbol.iterator in Object(e)?r[Wl]:r[hn]}i&&(i(d),delete n.onTagObj);const u=d!=null&&d.createNode?d.createNode(n.schema,e,n):typeof((f=d==null?void 0:d.nodeClass)==null?void 0:f.from)=="function"?d.nodeClass.from(n.schema,e,n):new ie(e);return t?u.tag=t:d.default||(u.tag=d.tag),c&&(c.node=u),u}function Dr(e,t,n){let l=n;for(let a=t.length-1;a>=0;--a){const i=t[a];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const r=[];r[i]=l,l=r}else l=new Map([[i,l]])}return Qa(l,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const xa=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class xf extends Zc{constructor(t,n){super(t),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}clone(t){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(n.schema=t),n.items=n.items.map(l=>Se(l)||_e(l)?l.clone(t):l),this.range&&(n.range=this.range.slice()),n}addIn(t,n){if(xa(t))this.add(n);else{const[l,...a]=t,i=this.get(l,!0);if(we(i))i.addIn(a,n);else if(i===void 0&&this.schema)this.set(l,Dr(this.schema,a,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${a}`)}}deleteIn(t){const[n,...l]=t;if(l.length===0)return this.delete(n);const a=this.get(n,!0);if(we(a))return a.deleteIn(l);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${l}`)}getIn(t,n){const[l,...a]=t,i=this.get(l,!0);return a.length===0?!n&&pe(i)?i.value:i:we(i)?i.getIn(a,n):void 0}hasAllNullValues(t){return this.items.every(n=>{if(!_e(n))return!1;const l=n.value;return l==null||t&&pe(l)&&l.value==null&&!l.commentBefore&&!l.comment&&!l.tag})}hasIn(t){const[n,...l]=t;if(l.length===0)return this.has(n);const a=this.get(n,!0);return we(a)?a.hasIn(l):!1}setIn(t,n){const[l,...a]=t;if(a.length===0)this.set(l,n);else{const i=this.get(l,!0);if(we(i))i.setIn(a,n);else if(i===void 0&&this.schema)this.set(l,Dr(this.schema,a,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${a}`)}}}const Mh=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function Wt(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const jn=(e,t,n)=>e.endsWith(`
`)?Wt(n,t):n.includes(`
`)?`
`+Wt(n,t):(e.endsWith(" ")?"":" ")+n,_f="flow",Ys="block",Zi="quoted";function Zr(e,t,n="flow",{indentAtStart:l,lineWidth:a=80,minContentWidth:i=20,onFold:r,onOverflow:s}={}){if(!a||a<0)return e;a<i&&(i=0);const c=Math.max(1+i,1+a-t.length);if(e.length<=c)return e;const d=[],u={};let m=a-t.length;typeof l=="number"&&(l>a-Math.max(2,i)?d.push(0):m=a-l);let p,f,v=!1,b=-1,_=-1,g=-1;n===Ys&&(b=Du(e,b,t.length),b!==-1&&(m=b+c));for(let h;h=e[b+=1];){if(n===Zi&&h==="\\"){switch(_=b,e[b+1]){case"x":b+=3;break;case"u":b+=5;break;case"U":b+=9;break;default:b+=1}g=b}if(h===`
`)n===Ys&&(b=Du(e,b,t.length)),m=b+t.length+c,p=void 0;else{if(h===" "&&f&&f!==" "&&f!==`
`&&f!=="	"){const C=e[b+1];C&&C!==" "&&C!==`
`&&C!=="	"&&(p=b)}if(b>=m)if(p)d.push(p),m=p+c,p=void 0;else if(n===Zi){for(;f===" "||f==="	";)f=h,h=e[b+=1],v=!0;const C=b>g+1?b-2:_-1;if(u[C])return e;d.push(C),u[C]=!0,m=C+c,p=void 0}else v=!0}f=h}if(v&&s&&s(),d.length===0)return e;r&&r();let y=e.slice(0,d[0]);for(let h=0;h<d.length;++h){const C=d[h],k=d[h+1]||e.length;C===0?y=`
${t}${e.slice(0,k)}`:(n===Zi&&u[C]&&(y+=`${e[C]}\\`),y+=`
${t}${e.slice(C+1,k)}`)}return y}function Du(e,t,n){let l=t,a=t+1,i=e[a];for(;i===" "||i==="	";)if(t<a+n)i=e[++t];else{do i=e[++t];while(i&&i!==`
`);l=t,a=t+1,i=e[a]}return l}const eo=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),to=e=>/^(%|---|\.\.\.)/m.test(e);function Gh(e,t,n){if(!t||t<0)return!1;const l=t-n,a=e.length;if(a<=l)return!1;for(let i=0,r=0;i<a;++i)if(e[i]===`
`){if(i-r>l)return!0;if(r=i+1,a-r<=l)return!1}return!0}function Na(e,t){const n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;const{implicitKey:l}=t,a=t.options.doubleQuotedMinMultiLineLength,i=t.indent||(to(e)?"  ":"");let r="",s=0;for(let c=0,d=n[c];d;d=n[++c])if(d===" "&&n[c+1]==="\\"&&n[c+2]==="n"&&(r+=n.slice(s,c)+"\\ ",c+=1,s=c,d="\\"),d==="\\")switch(n[c+1]){case"u":{r+=n.slice(s,c);const u=n.substr(c+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=n.substr(c,6)}c+=5,s=c+1}break;case"n":if(l||n[c+2]==='"'||n.length<a)c+=1;else{for(r+=n.slice(s,c)+`

`;n[c+2]==="\\"&&n[c+3]==="n"&&n[c+4]!=='"';)r+=`
`,c+=2;r+=i,n[c+2]===" "&&(r+="\\"),c+=1,s=c+1}break;default:c+=1}return r=s?r+n.slice(s):n,l?r:Zr(r,i,Zi,eo(t,!1))}function Js(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Na(e,t);const n=t.indent||(to(e)?"  ":""),l="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return t.implicitKey?l:Zr(l,n,_f,eo(t,!1))}function Cl(e,t){const{singleQuote:n}=t.options;let l;if(n===!1)l=Na;else{const a=e.includes('"'),i=e.includes("'");a&&!i?l=Js:i&&!a?l=Na:l=n?Js:Na}return l(e,t)}let Xs;try{Xs=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Xs=/\n+(?!\n|$)/g}function er({comment:e,type:t,value:n},l,a,i){const{blockQuote:r,commentString:s,lineWidth:c}=l.options;if(!r||/\n[\t ]+$/.test(n))return Cl(n,l);const d=l.indent||(l.forceBlockIndent||to(n)?"  ":""),u=r==="literal"?!0:r==="folded"||t===ie.BLOCK_FOLDED?!1:t===ie.BLOCK_LITERAL?!0:!Gh(n,c,d.length);if(!n)return u?`|
`:`>
`;let m,p;for(p=n.length;p>0;--p){const k=n[p-1];if(k!==`
`&&k!=="	"&&k!==" ")break}let f=n.substring(p);const v=f.indexOf(`
`);v===-1?m="-":n===f||v!==f.length-1?(m="+",i&&i()):m="",f&&(n=n.slice(0,-f.length),f[f.length-1]===`
`&&(f=f.slice(0,-1)),f=f.replace(Xs,`$&${d}`));let b=!1,_,g=-1;for(_=0;_<n.length;++_){const k=n[_];if(k===" ")b=!0;else if(k===`
`)g=_;else break}let y=n.substring(0,g<_?g+1:_);y&&(n=n.substring(y.length),y=y.replace(/\n+/g,`$&${d}`));let C=(b?d?"2":"1":"")+m;if(e&&(C+=" "+s(e.replace(/ ?[\r\n]+/g," ")),a&&a()),!u){const k=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${d}`);let P=!1;const w=eo(l,!0);r!=="folded"&&t!==ie.BLOCK_FOLDED&&(w.onOverflow=()=>{P=!0});const L=Zr(`${y}${k}${f}`,d,Ys,w);if(!P)return`>${C}
${d}${L}`}return n=n.replace(/\n+/g,`$&${d}`),`|${C}
${d}${y}${n}${f}`}function jh(e,t,n,l){const{type:a,value:i}=e,{actualString:r,implicitKey:s,indent:c,indentStep:d,inFlow:u}=t;if(s&&i.includes(`
`)||u&&/[[\]{},]/.test(i))return Cl(i,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return s||u||!i.includes(`
`)?Cl(i,t):er(e,t,n,l);if(!s&&!u&&a!==ie.PLAIN&&i.includes(`
`))return er(e,t,n,l);if(to(i)){if(c==="")return t.forceBlockIndent=!0,er(e,t,n,l);if(s&&c===d)return Cl(i,t)}const m=i.replace(/\n+/g,`$&
${c}`);if(r){const p=b=>{var _;return b.default&&b.tag!=="tag:yaml.org,2002:str"&&((_=b.test)==null?void 0:_.test(m))},{compat:f,tags:v}=t.doc.schema;if(v.some(p)||f!=null&&f.some(p))return Cl(i,t)}return s?m:Zr(m,c,_f,eo(t,!1))}function li(e,t,n,l){const{implicitKey:a,inFlow:i}=t,r=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:s}=e;s!==ie.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(s=ie.QUOTE_DOUBLE);const c=u=>{switch(u){case ie.BLOCK_FOLDED:case ie.BLOCK_LITERAL:return a||i?Cl(r.value,t):er(r,t,n,l);case ie.QUOTE_DOUBLE:return Na(r.value,t);case ie.QUOTE_SINGLE:return Js(r.value,t);case ie.PLAIN:return jh(r,t,n,l);default:return null}};let d=c(s);if(d===null){const{defaultKeyType:u,defaultStringType:m}=t.options,p=a&&u||m;if(d=c(p),d===null)throw new Error(`Unsupported default string type ${p}`)}return d}function vf(e,t){const n=Object.assign({blockQuote:!0,commentString:Mh,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let l;switch(n.collectionStyle){case"block":l=!1;break;case"flow":l=!0;break;default:l=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?" ":"",indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",inFlow:l,options:n}}function Bh(e,t){var a;if(t.tag){const i=e.filter(r=>r.tag===t.tag);if(i.length>0)return i.find(r=>r.format===t.format)??i[0]}let n,l;if(pe(t)){l=t.value;let i=e.filter(r=>{var s;return(s=r.identify)==null?void 0:s.call(r,l)});if(i.length>1){const r=i.filter(s=>s.test);r.length>0&&(i=r)}n=i.find(r=>r.format===t.format)??i.find(r=>!r.format)}else l=t,n=e.find(i=>i.nodeClass&&l instanceof i.nodeClass);if(!n){const i=((a=l==null?void 0:l.constructor)==null?void 0:a.name)??(l===null?"null":typeof l);throw new Error(`Tag not resolved for ${i} value`)}return n}function Oh(e,t,{anchors:n,doc:l}){if(!l.directives)return"";const a=[],i=(pe(e)||we(e))&&e.anchor;i&&yf(i)&&(n.add(i),a.push(`&${i}`));const r=e.tag??(t.default?null:t.tag);return r&&a.push(l.directives.tagString(r)),a.join(" ")}function Bl(e,t,n,l){var c;if(_e(e))return e.toString(t,n,l);if(Ln(e)){if(t.doc.directives)return e.toString(t);if((c=t.resolvedAliases)!=null&&c.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let a;const i=Se(e)?e:t.doc.createNode(e,{onTagObj:d=>a=d});a??(a=Bh(t.doc.schema.tags,i));const r=Oh(i,a,t);r.length>0&&(t.indentAtStart=(t.indentAtStart??0)+r.length+1);const s=typeof a.stringify=="function"?a.stringify(i,t,n,l):pe(i)?li(i,t,n,l):i.toString(t,n,l);return r?pe(i)||s[0]==="{"||s[0]==="["?`${r} ${s}`:`${r}
${t.indent}${s}`:s}function Fh({key:e,value:t},n,l,a){const{allNullValues:i,doc:r,indent:s,indentStep:c,options:{commentString:d,indentSeq:u,simpleKeys:m}}=n;let p=Se(e)&&e.comment||null;if(m){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(we(e)||!Se(e)&&typeof e=="object"){const w="With simple keys, collection cannot be used as a key value";throw new Error(w)}}let f=!m&&(!e||p&&t==null&&!n.inFlow||we(e)||(pe(e)?e.type===ie.BLOCK_FOLDED||e.type===ie.BLOCK_LITERAL:typeof e=="object"));n=Object.assign({},n,{allNullValues:!1,implicitKey:!f&&(m||!i),indent:s+c});let v=!1,b=!1,_=Bl(e,n,()=>v=!0,()=>b=!0);if(!f&&!n.inFlow&&_.length>1024){if(m)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(n.inFlow){if(i||t==null)return v&&l&&l(),_===""?"?":f?`? ${_}`:_}else if(i&&!m||t==null&&f)return _=`? ${_}`,p&&!v?_+=jn(_,n.indent,d(p)):b&&a&&a(),_;v&&(p=null),f?(p&&(_+=jn(_,n.indent,d(p))),_=`? ${_}
${s}:`):(_=`${_}:`,p&&(_+=jn(_,n.indent,d(p))));let g,y,h;Se(t)?(g=!!t.spaceBefore,y=t.commentBefore,h=t.comment):(g=!1,y=null,h=null,t&&typeof t=="object"&&(t=r.createNode(t))),n.implicitKey=!1,!f&&!p&&pe(t)&&(n.indentAtStart=_.length+1),b=!1,!u&&c.length>=2&&!n.inFlow&&!f&&Hl(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let C=!1;const k=Bl(t,n,()=>C=!0,()=>b=!0);let P=" ";if(p||g||y){if(P=g?`
`:"",y){const w=d(y);P+=`
${Wt(w,n.indent)}`}k===""&&!n.inFlow?P===`
`&&(P=`

`):P+=`
${n.indent}`}else if(!f&&we(t)){const w=k[0],L=k.indexOf(`
`),U=L!==-1,R=n.inFlow??t.flow??t.items.length===0;if(U||!R){let M=!1;if(U&&(w==="&"||w==="!")){let E=k.indexOf(" ");w==="&"&&E!==-1&&E<L&&k[E+1]==="!"&&(E=k.indexOf(" ",E+1)),(E===-1||L<E)&&(M=!0)}M||(P=`
${n.indent}`)}}else(k===""||k[0]===`
`)&&(P="");return _+=P+k,n.inFlow?C&&l&&l():h&&!C?_+=jn(_,n.indent,d(h)):b&&a&&a(),_}function wf(e,t){(e==="debug"||e==="warn")&&console.warn(t)}const Ei="<<",Ht={identify:e=>e===Ei||typeof e=="symbol"&&e.description===Ei,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new ie(Symbol(Ei)),{addToJSMap:Cf}),stringify:()=>Ei},qh=(e,t)=>(Ht.identify(t)||pe(t)&&(!t.type||t.type===ie.PLAIN)&&Ht.identify(t.value))&&(e==null?void 0:e.doc.schema.tags.some(n=>n.tag===Ht.tag&&n.default));function Cf(e,t,n){if(n=e&&Ln(n)?n.resolve(e.doc):n,Hl(n))for(const l of n.items)zo(e,t,l);else if(Array.isArray(n))for(const l of n)zo(e,t,l);else zo(e,t,n)}function zo(e,t,n){const l=e&&Ln(n)?n.resolve(e.doc):n;if(!$l(l))throw new Error("Merge sources must be maps or map aliases");const a=l.toJSON(null,e,Map);for(const[i,r]of a)t instanceof Map?t.has(i)||t.set(i,r):t instanceof Set?t.add(i):Object.prototype.hasOwnProperty.call(t,i)||Object.defineProperty(t,i,{value:r,writable:!0,enumerable:!0,configurable:!0});return t}function Sf(e,t,{key:n,value:l}){if(Se(n)&&n.addToJSMap)n.addToJSMap(e,t,l);else if(qh(e,n))Cf(e,t,l);else{const a=gt(n,"",e);if(t instanceof Map)t.set(a,gt(l,a,e));else if(t instanceof Set)t.add(a);else{const i=Uh(n,a,e),r=gt(l,i,e);i in t?Object.defineProperty(t,i,{value:r,writable:!0,enumerable:!0,configurable:!0}):t[i]=r}}return t}function Uh(e,t,n){if(t===null)return"";if(typeof t!="object")return String(t);if(Se(e)&&(n!=null&&n.doc)){const l=vf(n.doc,{});l.anchors=new Set;for(const i of n.anchors.keys())l.anchors.add(i.anchor);l.inFlow=!0,l.inStringifyKey=!0;const a=e.toString(l);if(!n.mapKeyWarned){let i=JSON.stringify(a);i.length>40&&(i=i.substring(0,36)+'..."'),wf(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return a}return JSON.stringify(t)}function ed(e,t,n){const l=Qa(e,void 0,n),a=Qa(t,void 0,n);return new We(l,a)}class We{constructor(t,n=null){Object.defineProperty(this,xt,{value:cf}),this.key=t,this.value=n}clone(t){let{key:n,value:l}=this;return Se(n)&&(n=n.clone(t)),Se(l)&&(l=l.clone(t)),new We(n,l)}toJSON(t,n){const l=n!=null&&n.mapAsMap?new Map:{};return Sf(n,l,this)}toString(t,n,l){return t!=null&&t.doc?Fh(this,t,n,l):JSON.stringify(this)}}function Lf(e,t,n){return(t.inFlow??e.flow?$h:Wh)(e,t,n)}function Wh({comment:e,items:t},n,{blockItemPrefix:l,flowChars:a,itemIndent:i,onChompKeep:r,onComment:s}){const{indent:c,options:{commentString:d}}=n,u=Object.assign({},n,{indent:i,type:null});let m=!1;const p=[];for(let v=0;v<t.length;++v){const b=t[v];let _=null;if(Se(b))!m&&b.spaceBefore&&p.push(""),Tr(n,p,b.commentBefore,m),b.comment&&(_=b.comment);else if(_e(b)){const y=Se(b.key)?b.key:null;y&&(!m&&y.spaceBefore&&p.push(""),Tr(n,p,y.commentBefore,m))}m=!1;let g=Bl(b,u,()=>_=null,()=>m=!0);_&&(g+=jn(g,i,d(_))),m&&_&&(m=!1),p.push(l+g)}let f;if(p.length===0)f=a.start+a.end;else{f=p[0];for(let v=1;v<p.length;++v){const b=p[v];f+=b?`
${c}${b}`:`
`}}return e?(f+=`
`+Wt(d(e),c),s&&s()):m&&r&&r(),f}function $h({items:e},t,{flowChars:n,itemIndent:l}){const{indent:a,indentStep:i,flowCollectionPadding:r,options:{commentString:s}}=t;l+=i;const c=Object.assign({},t,{indent:l,inFlow:!0,type:null});let d=!1,u=0;const m=[];for(let v=0;v<e.length;++v){const b=e[v];let _=null;if(Se(b))b.spaceBefore&&m.push(""),Tr(t,m,b.commentBefore,!1),b.comment&&(_=b.comment);else if(_e(b)){const y=Se(b.key)?b.key:null;y&&(y.spaceBefore&&m.push(""),Tr(t,m,y.commentBefore,!1),y.comment&&(d=!0));const h=Se(b.value)?b.value:null;h?(h.comment&&(_=h.comment),h.commentBefore&&(d=!0)):b.value==null&&(y!=null&&y.comment)&&(_=y.comment)}_&&(d=!0);let g=Bl(b,c,()=>_=null);v<e.length-1&&(g+=","),_&&(g+=jn(g,l,s(_))),!d&&(m.length>u||g.includes(`
`))&&(d=!0),m.push(g),u=m.length}const{start:p,end:f}=n;if(m.length===0)return p+f;if(!d){const v=m.reduce((b,_)=>b+_.length+2,2);d=t.options.lineWidth>0&&v>t.options.lineWidth}if(d){let v=p;for(const b of m)v+=b?`
${i}${a}${b}`:`
`;return`${v}
${a}${f}`}else return`${p}${r}${m.join(" ")}${r}${f}`}function Tr({indent:e,options:{commentString:t}},n,l,a){if(l&&a&&(l=l.replace(/^\n+/,"")),l){const i=Wt(t(l),e);n.push(i.trimStart())}}function Bn(e,t){const n=pe(t)?t.value:t;for(const l of e)if(_e(l)&&(l.key===t||l.key===n||pe(l.key)&&l.key.value===n))return l}class rt extends xf{static get tagName(){return"tag:yaml.org,2002:map"}constructor(t){super(hn,t),this.items=[]}static from(t,n,l){const{keepUndefined:a,replacer:i}=l,r=new this(t),s=(c,d)=>{if(typeof i=="function")d=i.call(n,c,d);else if(Array.isArray(i)&&!i.includes(c))return;(d!==void 0||a)&&r.items.push(ed(c,d,l))};if(n instanceof Map)for(const[c,d]of n)s(c,d);else if(n&&typeof n=="object")for(const c of Object.keys(n))s(c,n[c]);return typeof t.sortMapEntries=="function"&&r.items.sort(t.sortMapEntries),r}add(t,n){var r;let l;_e(t)?l=t:!t||typeof t!="object"||!("key"in t)?l=new We(t,t==null?void 0:t.value):l=new We(t.key,t.value);const a=Bn(this.items,l.key),i=(r=this.schema)==null?void 0:r.sortMapEntries;if(a){if(!n)throw new Error(`Key ${l.key} already set`);pe(a.value)&&hf(l.value)?a.value.value=l.value:a.value=l.value}else if(i){const s=this.items.findIndex(c=>i(l,c)<0);s===-1?this.items.push(l):this.items.splice(s,0,l)}else this.items.push(l)}delete(t){const n=Bn(this.items,t);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(t,n){const l=Bn(this.items,t),a=l==null?void 0:l.value;return(!n&&pe(a)?a.value:a)??void 0}has(t){return!!Bn(this.items,t)}set(t,n){this.add(new We(t,n),!0)}toJSON(t,n,l){const a=l?new l:n!=null&&n.mapAsMap?new Map:{};n!=null&&n.onCreate&&n.onCreate(a);for(const i of this.items)Sf(n,a,i);return a}toString(t,n,l){if(!t)return JSON.stringify(this);for(const a of this.items)if(!_e(a))throw new Error(`Map items must all be pairs; found ${JSON.stringify(a)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),Lf(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:l,onComment:n})}}const zl={collection:"map",default:!0,nodeClass:rt,tag:"tag:yaml.org,2002:map",resolve(e,t){return $l(e)||t("Expected a mapping for this tag"),e},createNode:(e,t,n)=>rt.from(e,t,n)};class vn extends xf{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(t){super(Wl,t),this.items=[]}add(t){this.items.push(t)}delete(t){const n=Pi(t);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(t,n){const l=Pi(t);if(typeof l!="number")return;const a=this.items[l];return!n&&pe(a)?a.value:a}has(t){const n=Pi(t);return typeof n=="number"&&n<this.items.length}set(t,n){const l=Pi(t);if(typeof l!="number")throw new Error(`Expected a valid index, not ${t}.`);const a=this.items[l];pe(a)&&hf(n)?a.value=n:this.items[l]=n}toJSON(t,n){const l=[];n!=null&&n.onCreate&&n.onCreate(l);let a=0;for(const i of this.items)l.push(gt(i,String(a++),n));return l}toString(t,n,l){return t?Lf(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:l,onComment:n}):JSON.stringify(this)}static from(t,n,l){const{replacer:a}=l,i=new this(t);if(n&&Symbol.iterator in Object(n)){let r=0;for(let s of n){if(typeof a=="function"){const c=n instanceof Set?s:String(r++);s=a.call(n,c,s)}i.items.push(Qa(s,void 0,l))}}return i}}function Pi(e){let t=pe(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}const Kl={collection:"seq",default:!0,nodeClass:vn,tag:"tag:yaml.org,2002:seq",resolve(e,t){return Hl(e)||t("Expected a sequence for this tag"),e},createNode:(e,t,n)=>vn.from(e,t,n)},no={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,n,l){return t=Object.assign({actualString:!0},t),li(e,t,n,l)}},lo={identify:e=>e==null,createNode:()=>new ie(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new ie(null),stringify:({source:e},t)=>typeof e=="string"&&lo.test.test(e)?e:t.options.nullStr},td={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new ie(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},n){if(e&&td.test.test(e)){const l=e[0]==="t"||e[0]==="T";if(t===l)return e}return t?n.options.trueStr:n.options.falseStr}};function Et({format:e,minFractionDigits:t,tag:n,value:l}){if(typeof l=="bigint")return String(l);const a=typeof l=="number"?l:Number(l);if(!isFinite(a))return isNaN(a)?".nan":a<0?"-.inf":".inf";let i=JSON.stringify(l);if(!e&&t&&(!n||n==="tag:yaml.org,2002:float")&&/^\d/.test(i)){let r=i.indexOf(".");r<0&&(r=i.length,i+=".");let s=t-(i.length-r-1);for(;s-- >0;)i+="0"}return i}const kf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Et},Df={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Et(e)}},Tf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new ie(parseFloat(e)),n=e.indexOf(".");return n!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-n-1),t},stringify:Et},ao=e=>typeof e=="bigint"||Number.isInteger(e),nd=(e,t,n,{intAsBigInt:l})=>l?BigInt(e):parseInt(e.substring(t),n);function Ef(e,t,n){const{value:l}=e;return ao(l)&&l>=0?n+l.toString(t):Et(e)}const Pf={identify:e=>ao(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,n)=>nd(e,2,8,n),stringify:e=>Ef(e,8,"0o")},Nf={identify:ao,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>nd(e,0,10,n),stringify:Et},Af={identify:e=>ao(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>nd(e,2,16,n),stringify:e=>Ef(e,16,"0x")},Hh=[zl,Kl,no,lo,td,Pf,Nf,Af,kf,Df,Tf];function Tu(e){return typeof e=="bigint"||Number.isInteger(e)}const Ni=({value:e})=>JSON.stringify(e),zh=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Ni},{identify:e=>e==null,createNode:()=>new ie(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ni},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:Ni},{identify:Tu,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>Tu(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Ni}],Kh={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},Qh=[zl,Kl].concat(zh,Kh),ld={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof atob=="function"){const n=atob(e.replace(/[\n\r]/g,"")),l=new Uint8Array(n.length);for(let a=0;a<n.length;++a)l[a]=n.charCodeAt(a);return l}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:n},l,a,i){if(!n)return"";const r=n;let s;if(typeof btoa=="function"){let c="";for(let d=0;d<r.length;++d)c+=String.fromCharCode(r[d]);s=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t??(t=ie.BLOCK_LITERAL),t!==ie.QUOTE_DOUBLE){const c=Math.max(l.options.lineWidth-l.indent.length,l.options.minContentWidth),d=Math.ceil(s.length/c),u=new Array(d);for(let m=0,p=0;m<d;++m,p+=c)u[m]=s.substr(p,c);s=u.join(t===ie.BLOCK_LITERAL?`
`:" ")}return li({comment:e,type:t,value:s},l,a,i)}};function Vf(e,t){if(Hl(e))for(let n=0;n<e.items.length;++n){let l=e.items[n];if(!_e(l)){if($l(l)){l.items.length>1&&t("Each pair must have its own sequence indicator");const a=l.items[0]||new We(new ie(null));if(l.commentBefore&&(a.key.commentBefore=a.key.commentBefore?`${l.commentBefore}
${a.key.commentBefore}`:l.commentBefore),l.comment){const i=a.value??a.key;i.comment=i.comment?`${l.comment}
${i.comment}`:l.comment}l=a}e.items[n]=_e(l)?l:new We(l)}}else t("Expected a sequence for this tag");return e}function Rf(e,t,n){const{replacer:l}=n,a=new vn(e);a.tag="tag:yaml.org,2002:pairs";let i=0;if(t&&Symbol.iterator in Object(t))for(let r of t){typeof l=="function"&&(r=l.call(t,String(i++),r));let s,c;if(Array.isArray(r))if(r.length===2)s=r[0],c=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const d=Object.keys(r);if(d.length===1)s=d[0],c=r[s];else throw new TypeError(`Expected tuple with one key, not ${d.length} keys`)}else s=r;a.items.push(ed(s,c,n))}return a}const ad={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Vf,createNode:Rf};class Pl extends vn{constructor(){super(),this.add=rt.prototype.add.bind(this),this.delete=rt.prototype.delete.bind(this),this.get=rt.prototype.get.bind(this),this.has=rt.prototype.has.bind(this),this.set=rt.prototype.set.bind(this),this.tag=Pl.tag}toJSON(t,n){if(!n)return super.toJSON(t);const l=new Map;n!=null&&n.onCreate&&n.onCreate(l);for(const a of this.items){let i,r;if(_e(a)?(i=gt(a.key,"",n),r=gt(a.value,i,n)):i=gt(a,"",n),l.has(i))throw new Error("Ordered maps must not include duplicate keys");l.set(i,r)}return l}static from(t,n,l){const a=Rf(t,n,l),i=new this;return i.items=a.items,i}}Pl.tag="tag:yaml.org,2002:omap";const id={collection:"seq",identify:e=>e instanceof Map,nodeClass:Pl,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const n=Vf(e,t),l=[];for(const{key:a}of n.items)pe(a)&&(l.includes(a.value)?t(`Ordered maps must not include duplicate keys: ${a.value}`):l.push(a.value));return Object.assign(new Pl,n)},createNode:(e,t,n)=>Pl.from(e,t,n)};function If({value:e,source:t},n){return t&&(e?Mf:Gf).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}const Mf={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new ie(!0),stringify:If},Gf={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new ie(!1),stringify:If},Yh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Et},Jh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Et(e)}},Xh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new ie(parseFloat(e.replace(/_/g,""))),n=e.indexOf(".");if(n!==-1){const l=e.substring(n+1).replace(/_/g,"");l[l.length-1]==="0"&&(t.minFractionDigits=l.length)}return t},stringify:Et},ai=e=>typeof e=="bigint"||Number.isInteger(e);function io(e,t,n,{intAsBigInt:l}){const a=e[0];if((a==="-"||a==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),l){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const r=BigInt(e);return a==="-"?BigInt(-1)*r:r}const i=parseInt(e,n);return a==="-"?-1*i:i}function rd(e,t,n){const{value:l}=e;if(ai(l)){const a=l.toString(t);return l<0?"-"+n+a.substr(1):n+a}return Et(e)}const Zh={identify:ai,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>io(e,2,2,n),stringify:e=>rd(e,2,"0b")},e0={identify:ai,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>io(e,1,8,n),stringify:e=>rd(e,8,"0")},t0={identify:ai,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>io(e,0,10,n),stringify:Et},n0={identify:ai,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>io(e,2,16,n),stringify:e=>rd(e,16,"0x")};class Nl extends rt{constructor(t){super(t),this.tag=Nl.tag}add(t){let n;_e(t)?n=t:t&&typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?n=new We(t.key,null):n=new We(t,null),Bn(this.items,n.key)||this.items.push(n)}get(t,n){const l=Bn(this.items,t);return!n&&_e(l)?pe(l.key)?l.key.value:l.key:l}set(t,n){if(typeof n!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);const l=Bn(this.items,t);l&&!n?this.items.splice(this.items.indexOf(l),1):!l&&n&&this.items.push(new We(t))}toJSON(t,n){return super.toJSON(t,n,Set)}toString(t,n,l){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),n,l);throw new Error("Set items must all have null values")}static from(t,n,l){const{replacer:a}=l,i=new this(t);if(n&&Symbol.iterator in Object(n))for(let r of n)typeof a=="function"&&(r=a.call(n,r,r)),i.items.push(ed(r,null,l));return i}}Nl.tag="tag:yaml.org,2002:set";const od={collection:"map",identify:e=>e instanceof Set,nodeClass:Nl,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,n)=>Nl.from(e,t,n),resolve(e,t){if($l(e)){if(e.hasAllNullValues(!0))return Object.assign(new Nl,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function sd(e,t){const n=e[0],l=n==="-"||n==="+"?e.substring(1):e,a=r=>t?BigInt(r):Number(r),i=l.replace(/_/g,"").split(":").reduce((r,s)=>r*a(60)+a(s),a(0));return n==="-"?a(-1)*i:i}function jf(e){let{value:t}=e,n=r=>r;if(typeof t=="bigint")n=r=>BigInt(r);else if(isNaN(t)||!isFinite(t))return Et(e);let l="";t<0&&(l="-",t*=n(-1));const a=n(60),i=[t%a];return t<60?i.unshift(0):(t=(t-i[0])/a,i.unshift(t%a),t>=60&&(t=(t-i[0])/a,i.unshift(t))),l+i.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Bf={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>sd(e,n),stringify:jf},Of={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>sd(e,!1),stringify:jf},ro={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(ro.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,n,l,a,i,r,s]=t.map(Number),c=t[7]?Number((t[7]+"00").substr(1,3)):0;let d=Date.UTC(n,l-1,a,i||0,r||0,s||0,c);const u=t[8];if(u&&u!=="Z"){let m=sd(u,!1);Math.abs(m)<30&&(m*=60),d-=6e4*m}return new Date(d)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Eu=[zl,Kl,no,lo,Mf,Gf,Zh,e0,t0,n0,Yh,Jh,Xh,ld,Ht,id,ad,od,Bf,Of,ro],Pu=new Map([["core",Hh],["failsafe",[zl,Kl,no]],["json",Qh],["yaml11",Eu],["yaml-1.1",Eu]]),Nu={binary:ld,bool:td,float:Tf,floatExp:Df,floatNaN:kf,floatTime:Of,int:Nf,intHex:Af,intOct:Pf,intTime:Bf,map:zl,merge:Ht,null:lo,omap:id,pairs:ad,seq:Kl,set:od,timestamp:ro},l0={"tag:yaml.org,2002:binary":ld,"tag:yaml.org,2002:merge":Ht,"tag:yaml.org,2002:omap":id,"tag:yaml.org,2002:pairs":ad,"tag:yaml.org,2002:set":od,"tag:yaml.org,2002:timestamp":ro};function Ko(e,t,n){const l=Pu.get(t);if(l&&!e)return n&&!l.includes(Ht)?l.concat(Ht):l.slice();let a=l;if(!a)if(Array.isArray(e))a=[];else{const i=Array.from(Pu.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${i} or define customTags array`)}if(Array.isArray(e))for(const i of e)a=a.concat(i);else typeof e=="function"&&(a=e(a.slice()));return n&&(a=a.concat(Ht)),a.reduce((i,r)=>{const s=typeof r=="string"?Nu[r]:r;if(!s){const c=JSON.stringify(r),d=Object.keys(Nu).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${d}`)}return i.includes(s)||i.push(s),i},[])}const a0=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class oo{constructor({compat:t,customTags:n,merge:l,resolveKnownTags:a,schema:i,sortMapEntries:r,toStringDefaults:s}){this.compat=Array.isArray(t)?Ko(t,"compat"):t?Ko(null,t):null,this.name=typeof i=="string"&&i||"core",this.knownTags=a?l0:{},this.tags=Ko(n,this.name,l),this.toStringOptions=s??null,Object.defineProperty(this,hn,{value:zl}),Object.defineProperty(this,jt,{value:no}),Object.defineProperty(this,Wl,{value:Kl}),this.sortMapEntries=typeof r=="function"?r:r===!0?a0:null}clone(){const t=Object.create(oo.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function i0(e,t){var c;const n=[];let l=t.directives===!0;if(t.directives!==!1&&e.directives){const d=e.directives.toString(e);d?(n.push(d),l=!0):e.directives.docStart&&(l=!0)}l&&n.push("---");const a=vf(e,t),{commentString:i}=a.options;if(e.commentBefore){n.length!==1&&n.unshift("");const d=i(e.commentBefore);n.unshift(Wt(d,""))}let r=!1,s=null;if(e.contents){if(Se(e.contents)){if(e.contents.spaceBefore&&l&&n.push(""),e.contents.commentBefore){const m=i(e.contents.commentBefore);n.push(Wt(m,""))}a.forceBlockIndent=!!e.comment,s=e.contents.comment}const d=s?void 0:()=>r=!0;let u=Bl(e.contents,a,()=>s=null,d);s&&(u+=jn(u,"",i(s))),(u[0]==="|"||u[0]===">")&&n[n.length-1]==="---"?n[n.length-1]=`--- ${u}`:n.push(u)}else n.push(Bl(e.contents,a));if((c=e.directives)!=null&&c.docEnd)if(e.comment){const d=i(e.comment);d.includes(`
`)?(n.push("..."),n.push(Wt(d,""))):n.push(`... ${d}`)}else n.push("...");else{let d=e.comment;d&&r&&(d=d.replace(/^\n+/,"")),d&&((!r||s)&&n[n.length-1]!==""&&n.push(""),n.push(Wt(i(d),"")))}return n.join(`
`)+`
`}class Ql{constructor(t,n,l){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,xt,{value:Qs});let a=null;typeof n=="function"||Array.isArray(n)?a=n:l===void 0&&n&&(l=n,n=void 0);const i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},l);this.options=i;let{version:r}=i;l!=null&&l._directives?(this.directives=l._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new Qe({version:r}),this.setSchema(r,l),this.contents=t===void 0?null:this.createNode(t,a,l)}clone(){const t=Object.create(Ql.prototype,{[xt]:{value:Qs}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=Se(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){il(this.contents)&&this.contents.add(t)}addIn(t,n){il(this.contents)&&this.contents.addIn(t,n)}createAlias(t,n){if(!t.anchor){const l=gf(this);t.anchor=!n||l.has(n)?bf(n||"a",l):n}return new Xr(t.anchor)}createNode(t,n,l){let a;if(typeof n=="function")t=n.call({"":t},"",t),a=n;else if(Array.isArray(n)){const _=y=>typeof y=="number"||y instanceof String||y instanceof Number,g=n.filter(_).map(String);g.length>0&&(n=n.concat(g)),a=n}else l===void 0&&n&&(l=n,n=void 0);const{aliasDuplicateObjects:i,anchorPrefix:r,flow:s,keepUndefined:c,onTagObj:d,tag:u}=l??{},{onAnchor:m,setAnchors:p,sourceObjects:f}=Vh(this,r||"a"),v={aliasDuplicateObjects:i??!0,keepUndefined:c??!1,onAnchor:m,onTagObj:d,replacer:a,schema:this.schema,sourceObjects:f},b=Qa(t,u,v);return s&&we(b)&&(b.flow=!0),p(),b}createPair(t,n,l={}){const a=this.createNode(t,null,l),i=this.createNode(n,null,l);return new We(a,i)}delete(t){return il(this.contents)?this.contents.delete(t):!1}deleteIn(t){return xa(t)?this.contents==null?!1:(this.contents=null,!0):il(this.contents)?this.contents.deleteIn(t):!1}get(t,n){return we(this.contents)?this.contents.get(t,n):void 0}getIn(t,n){return xa(t)?!n&&pe(this.contents)?this.contents.value:this.contents:we(this.contents)?this.contents.getIn(t,n):void 0}has(t){return we(this.contents)?this.contents.has(t):!1}hasIn(t){return xa(t)?this.contents!==void 0:we(this.contents)?this.contents.hasIn(t):!1}set(t,n){this.contents==null?this.contents=Dr(this.schema,[t],n):il(this.contents)&&this.contents.set(t,n)}setIn(t,n){xa(t)?this.contents=n:this.contents==null?this.contents=Dr(this.schema,Array.from(t),n):il(this.contents)&&this.contents.setIn(t,n)}setSchema(t,n={}){typeof t=="number"&&(t=String(t));let l;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Qe({version:"1.1"}),l={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new Qe({version:t}),l={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,l=null;break;default:{const a=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${a}`)}}if(n.schema instanceof Object)this.schema=n.schema;else if(l)this.schema=new oo(Object.assign(l,n));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:n,mapAsMap:l,maxAliasCount:a,onAnchor:i,reviver:r}={}){const s={anchors:new Map,doc:this,keep:!t,mapAsMap:l===!0,mapKeyWarned:!1,maxAliasCount:typeof a=="number"?a:100},c=gt(this.contents,n??"",s);if(typeof i=="function")for(const{count:d,res:u}of s.anchors.values())i(u,d);return typeof r=="function"?wl(r,{"":c},"",c):c}toJSON(t,n){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:n})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const n=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${n}`)}return i0(this,t)}}function il(e){if(we(e))return!0;throw new Error("Expected a YAML collection as document contents")}class cd extends Error{constructor(t,n,l,a){super(),this.name=t,this.code=l,this.message=a,this.pos=n}}class On extends cd{constructor(t,n,l){super("YAMLParseError",t,n,l)}}class Ff extends cd{constructor(t,n,l){super("YAMLWarning",t,n,l)}}const Er=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(s=>t.linePos(s));const{line:l,col:a}=n.linePos[0];n.message+=` at line ${l}, column ${a}`;let i=a-1,r=e.substring(t.lineStarts[l-1],t.lineStarts[l]).replace(/[\n\r]+$/,"");if(i>=60&&r.length>80){const s=Math.min(i-39,r.length-79);r="…"+r.substring(s),i-=s-1}if(r.length>80&&(r=r.substring(0,79)+"…"),l>1&&/^ *$/.test(r.substring(0,i))){let s=e.substring(t.lineStarts[l-2],t.lineStarts[l-1]);s.length>80&&(s=s.substring(0,79)+`…
`),r=s+r}if(/[^ ]/.test(r)){let s=1;const c=n.linePos[1];c&&c.line===l&&c.col>a&&(s=Math.max(1,Math.min(c.col-a,80-i)));const d=" ".repeat(i)+"^".repeat(s);n.message+=`:

${r}
${d}
`}};function Ol(e,{flow:t,indicator:n,next:l,offset:a,onError:i,parentIndent:r,startOnNewline:s}){let c=!1,d=s,u=s,m="",p="",f=!1,v=!1,b=null,_=null,g=null,y=null,h=null,C=null,k=null;for(const L of e)switch(v&&(L.type!=="space"&&L.type!=="newline"&&L.type!=="comma"&&i(L.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),v=!1),b&&(d&&L.type!=="comment"&&L.type!=="newline"&&i(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),b=null),L.type){case"space":!t&&(n!=="doc-start"||(l==null?void 0:l.type)!=="flow-collection")&&L.source.includes("	")&&(b=L),u=!0;break;case"comment":{u||i(L,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const U=L.source.substring(1)||" ";m?m+=p+U:m=U,p="",d=!1;break}case"newline":d?m?m+=L.source:(!C||n!=="seq-item-ind")&&(c=!0):p+=L.source,d=!0,f=!0,(_||g)&&(y=L),u=!0;break;case"anchor":_&&i(L,"MULTIPLE_ANCHORS","A node can have at most one anchor"),L.source.endsWith(":")&&i(L.offset+L.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=L,k??(k=L.offset),d=!1,u=!1,v=!0;break;case"tag":{g&&i(L,"MULTIPLE_TAGS","A node can have at most one tag"),g=L,k??(k=L.offset),d=!1,u=!1,v=!0;break}case n:(_||g)&&i(L,"BAD_PROP_ORDER",`Anchors and tags must be after the ${L.source} indicator`),C&&i(L,"UNEXPECTED_TOKEN",`Unexpected ${L.source} in ${t??"collection"}`),C=L,d=n==="seq-item-ind"||n==="explicit-key-ind",u=!1;break;case"comma":if(t){h&&i(L,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),h=L,d=!1,u=!1;break}default:i(L,"UNEXPECTED_TOKEN",`Unexpected ${L.type} token`),d=!1,u=!1}const P=e[e.length-1],w=P?P.offset+P.source.length:a;return v&&l&&l.type!=="space"&&l.type!=="newline"&&l.type!=="comma"&&(l.type!=="scalar"||l.source!=="")&&i(l.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),b&&(d&&b.indent<=r||(l==null?void 0:l.type)==="block-map"||(l==null?void 0:l.type)==="block-seq")&&i(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:h,found:C,spaceBefore:c,comment:m,hasNewline:f,anchor:_,tag:g,newlineAfterProp:y,end:w,start:k??w}}function Ya(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const n of t.start)if(n.type==="newline")return!0;if(t.sep){for(const n of t.sep)if(n.type==="newline")return!0}if(Ya(t.key)||Ya(t.value))return!0}return!1;default:return!0}}function Zs(e,t,n){if((t==null?void 0:t.type)==="flow-collection"){const l=t.end[0];l.indent===e&&(l.source==="]"||l.source==="}")&&Ya(t)&&n(l,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function qf(e,t,n){const{uniqueKeys:l}=e.options;if(l===!1)return!1;const a=typeof l=="function"?l:(i,r)=>i===r||pe(i)&&pe(r)&&i.value===r.value;return t.some(i=>a(i.key,n))}const Au="All mapping items must start at the same column";function r0({composeNode:e,composeEmptyNode:t},n,l,a,i){var u;const r=(i==null?void 0:i.nodeClass)??rt,s=new r(n.schema);n.atRoot&&(n.atRoot=!1);let c=l.offset,d=null;for(const m of l.items){const{start:p,key:f,sep:v,value:b}=m,_=Ol(p,{indicator:"explicit-key-ind",next:f??(v==null?void 0:v[0]),offset:c,onError:a,parentIndent:l.indent,startOnNewline:!0}),g=!_.found;if(g){if(f&&(f.type==="block-seq"?a(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==l.indent&&a(c,"BAD_INDENT",Au)),!_.anchor&&!_.tag&&!v){d=_.end,_.comment&&(s.comment?s.comment+=`
`+_.comment:s.comment=_.comment);continue}(_.newlineAfterProp||Ya(f))&&a(f??p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=_.found)==null?void 0:u.indent)!==l.indent&&a(c,"BAD_INDENT",Au);n.atKey=!0;const y=_.end,h=f?e(n,f,_,a):t(n,y,p,null,_,a);n.schema.compat&&Zs(l.indent,f,a),n.atKey=!1,qf(n,s.items,h)&&a(y,"DUPLICATE_KEY","Map keys must be unique");const C=Ol(v??[],{indicator:"map-value-ind",next:b,offset:h.range[2],onError:a,parentIndent:l.indent,startOnNewline:!f||f.type==="block-scalar"});if(c=C.end,C.found){g&&((b==null?void 0:b.type)==="block-map"&&!C.hasNewline&&a(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),n.options.strict&&_.start<C.found.offset-1024&&a(h.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const k=b?e(n,b,C,a):t(n,c,v,null,C,a);n.schema.compat&&Zs(l.indent,b,a),c=k.range[2];const P=new We(h,k);n.options.keepSourceTokens&&(P.srcToken=m),s.items.push(P)}else{g&&a(h.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),C.comment&&(h.comment?h.comment+=`
`+C.comment:h.comment=C.comment);const k=new We(h);n.options.keepSourceTokens&&(k.srcToken=m),s.items.push(k)}}return d&&d<c&&a(d,"IMPOSSIBLE","Map comment with trailing content"),s.range=[l.offset,c,d??c],s}function o0({composeNode:e,composeEmptyNode:t},n,l,a,i){const r=(i==null?void 0:i.nodeClass)??vn,s=new r(n.schema);n.atRoot&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let c=l.offset,d=null;for(const{start:u,value:m}of l.items){const p=Ol(u,{indicator:"seq-item-ind",next:m,offset:c,onError:a,parentIndent:l.indent,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||m)m&&m.type==="block-seq"?a(p.end,"BAD_INDENT","All sequence items must start at the same column"):a(c,"MISSING_CHAR","Sequence item without - indicator");else{d=p.end,p.comment&&(s.comment=p.comment);continue}const f=m?e(n,m,p,a):t(n,p.end,u,null,p,a);n.schema.compat&&Zs(l.indent,m,a),c=f.range[2],s.items.push(f)}return s.range=[l.offset,c,d??c],s}function ii(e,t,n,l){let a="";if(e){let i=!1,r="";for(const s of e){const{source:c,type:d}=s;switch(d){case"space":i=!0;break;case"comment":{n&&!i&&l(s,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=c.substring(1)||" ";a?a+=r+u:a=u,r="";break}case"newline":a&&(r+=c),i=!0;break;default:l(s,"UNEXPECTED_TOKEN",`Unexpected ${d} at node end`)}t+=c.length}}return{comment:a,offset:t}}const Qo="Block collections are not allowed within flow collections",Yo=e=>e&&(e.type==="block-map"||e.type==="block-seq");function s0({composeNode:e,composeEmptyNode:t},n,l,a,i){const r=l.start.source==="{",s=r?"flow map":"flow sequence",c=(i==null?void 0:i.nodeClass)??(r?rt:vn),d=new c(n.schema);d.flow=!0;const u=n.atRoot;u&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let m=l.offset+l.start.source.length;for(let _=0;_<l.items.length;++_){const g=l.items[_],{start:y,key:h,sep:C,value:k}=g,P=Ol(y,{flow:s,indicator:"explicit-key-ind",next:h??(C==null?void 0:C[0]),offset:m,onError:a,parentIndent:l.indent,startOnNewline:!1});if(!P.found){if(!P.anchor&&!P.tag&&!C&&!k){_===0&&P.comma?a(P.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`):_<l.items.length-1&&a(P.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${s}`),P.comment&&(d.comment?d.comment+=`
`+P.comment:d.comment=P.comment),m=P.end;continue}!r&&n.options.strict&&Ya(h)&&a(h,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)P.comma&&a(P.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`);else if(P.comma||a(P.start,"MISSING_CHAR",`Missing , between ${s} items`),P.comment){let w="";e:for(const L of y)switch(L.type){case"comma":case"space":break;case"comment":w=L.source.substring(1);break e;default:break e}if(w){let L=d.items[d.items.length-1];_e(L)&&(L=L.value??L.key),L.comment?L.comment+=`
`+w:L.comment=w,P.comment=P.comment.substring(w.length+1)}}if(!r&&!C&&!P.found){const w=k?e(n,k,P,a):t(n,P.end,C,null,P,a);d.items.push(w),m=w.range[2],Yo(k)&&a(w.range,"BLOCK_IN_FLOW",Qo)}else{n.atKey=!0;const w=P.end,L=h?e(n,h,P,a):t(n,w,y,null,P,a);Yo(h)&&a(L.range,"BLOCK_IN_FLOW",Qo),n.atKey=!1;const U=Ol(C??[],{flow:s,indicator:"map-value-ind",next:k,offset:L.range[2],onError:a,parentIndent:l.indent,startOnNewline:!1});if(U.found){if(!r&&!P.found&&n.options.strict){if(C)for(const E of C){if(E===U.found)break;if(E.type==="newline"){a(E,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}P.start<U.found.offset-1024&&a(U.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else k&&("source"in k&&k.source&&k.source[0]===":"?a(k,"MISSING_CHAR",`Missing space after : in ${s}`):a(U.start,"MISSING_CHAR",`Missing , or : between ${s} items`));const R=k?e(n,k,U,a):U.found?t(n,U.end,C,null,U,a):null;R?Yo(k)&&a(R.range,"BLOCK_IN_FLOW",Qo):U.comment&&(L.comment?L.comment+=`
`+U.comment:L.comment=U.comment);const M=new We(L,R);if(n.options.keepSourceTokens&&(M.srcToken=g),r){const E=d;qf(n,E.items,L)&&a(w,"DUPLICATE_KEY","Map keys must be unique"),E.items.push(M)}else{const E=new rt(n.schema);E.flow=!0,E.items.push(M);const F=(R??L).range;E.range=[L.range[0],F[1],F[2]],d.items.push(E)}m=R?R.range[2]:U.end}}const p=r?"}":"]",[f,...v]=l.end;let b=m;if(f&&f.source===p)b=f.offset+f.source.length;else{const _=s[0].toUpperCase()+s.substring(1),g=u?`${_} must end with a ${p}`:`${_} in block collection must be sufficiently indented and end with a ${p}`;a(m,u?"MISSING_CHAR":"BAD_INDENT",g),f&&f.source.length!==1&&v.unshift(f)}if(v.length>0){const _=ii(v,b,n.options.strict,a);_.comment&&(d.comment?d.comment+=`
`+_.comment:d.comment=_.comment),d.range=[l.offset,b,_.offset]}else d.range=[l.offset,b,b];return d}function Jo(e,t,n,l,a,i){const r=n.type==="block-map"?r0(e,t,n,l,i):n.type==="block-seq"?o0(e,t,n,l,i):s0(e,t,n,l,i),s=r.constructor;return a==="!"||a===s.tagName?(r.tag=s.tagName,r):(a&&(r.tag=a),r)}function c0(e,t,n,l,a){var p;const i=l.tag,r=i?t.directives.tagName(i.source,f=>a(i,"TAG_RESOLVE_FAILED",f)):null;if(n.type==="block-seq"){const{anchor:f,newlineAfterProp:v}=l,b=f&&i?f.offset>i.offset?f:i:f??i;b&&(!v||v.offset<b.offset)&&a(b,"MISSING_CHAR","Missing newline after block sequence props")}const s=n.type==="block-map"?"map":n.type==="block-seq"?"seq":n.start.source==="{"?"map":"seq";if(!i||!r||r==="!"||r===rt.tagName&&s==="map"||r===vn.tagName&&s==="seq")return Jo(e,t,n,a,r);let c=t.schema.tags.find(f=>f.tag===r&&f.collection===s);if(!c){const f=t.schema.knownTags[r];if(f&&f.collection===s)t.schema.tags.push(Object.assign({},f,{default:!1})),c=f;else return f?a(i,"BAD_COLLECTION_TYPE",`${f.tag} used for ${s} collection, but expects ${f.collection??"scalar"}`,!0):a(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),Jo(e,t,n,a,r)}const d=Jo(e,t,n,a,r,c),u=((p=c.resolve)==null?void 0:p.call(c,d,f=>a(i,"TAG_RESOLVE_FAILED",f),t.options))??d,m=Se(u)?u:new ie(u);return m.range=d.range,m.tag=r,c!=null&&c.format&&(m.format=c.format),m}function Uf(e,t,n){const l=t.offset,a=d0(t,e.options.strict,n);if(!a)return{value:"",type:null,comment:"",range:[l,l,l]};const i=a.mode===">"?ie.BLOCK_FOLDED:ie.BLOCK_LITERAL,r=t.source?u0(t.source):[];let s=r.length;for(let b=r.length-1;b>=0;--b){const _=r[b][1];if(_===""||_==="\r")s=b;else break}if(s===0){const b=a.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let _=l+a.length;return t.source&&(_+=t.source.length),{value:b,type:i,comment:a.comment,range:[l,_,_]}}let c=t.indent+a.indent,d=t.offset+a.length,u=0;for(let b=0;b<s;++b){const[_,g]=r[b];if(g===""||g==="\r")a.indent===0&&_.length>c&&(c=_.length);else{_.length<c&&n(d+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),a.indent===0&&(c=_.length),u=b,c===0&&!e.atRoot&&n(d,"BAD_INDENT","Block scalar values in collections must be indented");break}d+=_.length+g.length+1}for(let b=r.length-1;b>=s;--b)r[b][0].length>c&&(s=b+1);let m="",p="",f=!1;for(let b=0;b<u;++b)m+=r[b][0].slice(c)+`
`;for(let b=u;b<s;++b){let[_,g]=r[b];d+=_.length+g.length+1;const y=g[g.length-1]==="\r";if(y&&(g=g.slice(0,-1)),g&&_.length<c){const C=`Block scalar lines must not be less indented than their ${a.indent?"explicit indentation indicator":"first line"}`;n(d-g.length-(y?2:1),"BAD_INDENT",C),_=""}i===ie.BLOCK_LITERAL?(m+=p+_.slice(c)+g,p=`
`):_.length>c||g[0]==="	"?(p===" "?p=`
`:!f&&p===`
`&&(p=`

`),m+=p+_.slice(c)+g,p=`
`,f=!0):g===""?p===`
`?m+=`
`:p=`
`:(m+=p+g,p=" ",f=!1)}switch(a.chomp){case"-":break;case"+":for(let b=s;b<r.length;++b)m+=`
`+r[b][0].slice(c);m[m.length-1]!==`
`&&(m+=`
`);break;default:m+=`
`}const v=l+a.length+t.source.length;return{value:m,type:i,comment:a.comment,range:[l,v,v]}}function d0({offset:e,props:t},n,l){if(t[0].type!=="block-scalar-header")return l(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:a}=t[0],i=a[0];let r=0,s="",c=-1;for(let p=1;p<a.length;++p){const f=a[p];if(!s&&(f==="-"||f==="+"))s=f;else{const v=Number(f);!r&&v?r=v:c===-1&&(c=e+p)}}c!==-1&&l(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${a}`);let d=!1,u="",m=a.length;for(let p=1;p<t.length;++p){const f=t[p];switch(f.type){case"space":d=!0;case"newline":m+=f.source.length;break;case"comment":n&&!d&&l(f,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),m+=f.source.length,u=f.source.substring(1);break;case"error":l(f,"UNEXPECTED_TOKEN",f.message),m+=f.source.length;break;default:{const v=`Unexpected token in block scalar header: ${f.type}`;l(f,"UNEXPECTED_TOKEN",v);const b=f.source;b&&typeof b=="string"&&(m+=b.length)}}}return{mode:i,indent:r,chomp:s,comment:u,length:m}}function u0(e){const t=e.split(/\n( *)/),n=t[0],l=n.match(/^( *)/),i=[l!=null&&l[1]?[l[1],n.slice(l[1].length)]:["",n]];for(let r=1;r<t.length;r+=2)i.push([t[r],t[r+1]]);return i}function Wf(e,t,n){const{offset:l,type:a,source:i,end:r}=e;let s,c;const d=(p,f,v)=>n(l+p,f,v);switch(a){case"scalar":s=ie.PLAIN,c=m0(i,d);break;case"single-quoted-scalar":s=ie.QUOTE_SINGLE,c=p0(i,d);break;case"double-quoted-scalar":s=ie.QUOTE_DOUBLE,c=f0(i,d);break;default:return n(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${a}`),{value:"",type:null,comment:"",range:[l,l+i.length,l+i.length]}}const u=l+i.length,m=ii(r,u,t,n);return{value:c,type:s,comment:m.comment,range:[l,u,m.offset]}}function m0(e,t){let n="";switch(e[0]){case"	":n="a tab character";break;case",":n="flow indicator character ,";break;case"%":n="directive indicator character %";break;case"|":case">":{n=`block scalar indicator ${e[0]}`;break}case"@":case"`":{n=`reserved character ${e[0]}`;break}}return n&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${n}`),$f(e)}function p0(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),$f(e.slice(1,-1)).replace(/''/g,"'")}function $f(e){let t,n;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),n=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let l=t.exec(e);if(!l)return e;let a=l[1],i=" ",r=t.lastIndex;for(n.lastIndex=r;l=n.exec(e);)l[1]===""?i===`
`?a+=i:i=`
`:(a+=i+l[1],i=" "),r=n.lastIndex;const s=/[ \t]*(.*)/sy;return s.lastIndex=r,l=s.exec(e),a+i+((l==null?void 0:l[1])??"")}function f0(e,t){let n="";for(let l=1;l<e.length-1;++l){const a=e[l];if(!(a==="\r"&&e[l+1]===`
`))if(a===`
`){const{fold:i,offset:r}=y0(e,l);n+=i,l=r}else if(a==="\\"){let i=e[++l];const r=g0[i];if(r)n+=r;else if(i===`
`)for(i=e[l+1];i===" "||i==="	";)i=e[++l+1];else if(i==="\r"&&e[l+1]===`
`)for(i=e[++l+1];i===" "||i==="	";)i=e[++l+1];else if(i==="x"||i==="u"||i==="U"){const s={x:2,u:4,U:8}[i];n+=b0(e,l+1,s,t),l+=s}else{const s=e.substr(l-1,2);t(l-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),n+=s}}else if(a===" "||a==="	"){const i=l;let r=e[l+1];for(;r===" "||r==="	";)r=e[++l+1];r!==`
`&&!(r==="\r"&&e[l+2]===`
`)&&(n+=l>i?e.slice(i,l+1):a)}else n+=a}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),n}function y0(e,t){let n="",l=e[t+1];for(;(l===" "||l==="	"||l===`
`||l==="\r")&&!(l==="\r"&&e[t+2]!==`
`);)l===`
`&&(n+=`
`),t+=1,l=e[t+1];return n||(n=" "),{fold:n,offset:t}}const g0={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function b0(e,t,n,l){const a=e.substr(t,n),r=a.length===n&&/^[0-9a-fA-F]+$/.test(a)?parseInt(a,16):NaN;if(isNaN(r)){const s=e.substr(t-2,n+2);return l(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),s}return String.fromCodePoint(r)}function Hf(e,t,n,l){const{value:a,type:i,comment:r,range:s}=t.type==="block-scalar"?Uf(e,t,l):Wf(t,e.options.strict,l),c=n?e.directives.tagName(n.source,m=>l(n,"TAG_RESOLVE_FAILED",m)):null;let d;e.options.stringKeys&&e.atKey?d=e.schema[jt]:c?d=h0(e.schema,a,c,n,l):t.type==="scalar"?d=x0(e,a,t,l):d=e.schema[jt];let u;try{const m=d.resolve(a,p=>l(n??t,"TAG_RESOLVE_FAILED",p),e.options);u=pe(m)?m:new ie(m)}catch(m){const p=m instanceof Error?m.message:String(m);l(n??t,"TAG_RESOLVE_FAILED",p),u=new ie(a)}return u.range=s,u.source=a,i&&(u.type=i),c&&(u.tag=c),d.format&&(u.format=d.format),r&&(u.comment=r),u}function h0(e,t,n,l,a){var s;if(n==="!")return e[jt];const i=[];for(const c of e.tags)if(!c.collection&&c.tag===n)if(c.default&&c.test)i.push(c);else return c;for(const c of i)if((s=c.test)!=null&&s.test(t))return c;const r=e.knownTags[n];return r&&!r.collection?(e.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(a(l,"TAG_RESOLVE_FAILED",`Unresolved tag: ${n}`,n!=="tag:yaml.org,2002:str"),e[jt])}function x0({atKey:e,directives:t,schema:n},l,a,i){const r=n.tags.find(s=>{var c;return(s.default===!0||e&&s.default==="key")&&((c=s.test)==null?void 0:c.test(l))})||n[jt];if(n.compat){const s=n.compat.find(c=>{var d;return c.default&&((d=c.test)==null?void 0:d.test(l))})??n[jt];if(r.tag!==s.tag){const c=t.tagString(r.tag),d=t.tagString(s.tag),u=`Value may be parsed as either ${c} or ${d}`;i(a,"TAG_RESOLVE_FAILED",u,!0)}}return r}function _0(e,t,n){if(t){n??(n=t.length);for(let l=n-1;l>=0;--l){let a=t[l];switch(a.type){case"space":case"comment":case"newline":e-=a.source.length;continue}for(a=t[++l];(a==null?void 0:a.type)==="space";)e+=a.source.length,a=t[++l];break}}return e}const v0={composeNode:zf,composeEmptyNode:dd};function zf(e,t,n,l){const a=e.atKey,{spaceBefore:i,comment:r,anchor:s,tag:c}=n;let d,u=!0;switch(t.type){case"alias":d=w0(e,t,l),(s||c)&&l(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":d=Hf(e,t,c,l),s&&(d.anchor=s.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":d=c0(v0,e,t,n,l),s&&(d.anchor=s.source.substring(1));break;default:{const m=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;l(t,"UNEXPECTED_TOKEN",m),d=dd(e,t.offset,void 0,null,n,l),u=!1}}return s&&d.anchor===""&&l(s,"BAD_ALIAS","Anchor cannot be an empty string"),a&&e.options.stringKeys&&(!pe(d)||typeof d.value!="string"||d.tag&&d.tag!=="tag:yaml.org,2002:str")&&l(c??t,"NON_STRING_KEY","With stringKeys, all keys must be strings"),i&&(d.spaceBefore=!0),r&&(t.type==="scalar"&&t.source===""?d.comment=r:d.commentBefore=r),e.options.keepSourceTokens&&u&&(d.srcToken=t),d}function dd(e,t,n,l,{spaceBefore:a,comment:i,anchor:r,tag:s,end:c},d){const u={type:"scalar",offset:_0(t,n,l),indent:-1,source:""},m=Hf(e,u,s,d);return r&&(m.anchor=r.source.substring(1),m.anchor===""&&d(r,"BAD_ALIAS","Anchor cannot be an empty string")),a&&(m.spaceBefore=!0),i&&(m.comment=i,m.range[2]=c),m}function w0({options:e},{offset:t,source:n,end:l},a){const i=new Xr(n.substring(1));i.source===""&&a(t,"BAD_ALIAS","Alias cannot be an empty string"),i.source.endsWith(":")&&a(t+n.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=t+n.length,s=ii(l,r,e.strict,a);return i.range=[t,r,s.offset],s.comment&&(i.comment=s.comment),i}function C0(e,t,{offset:n,start:l,value:a,end:i},r){const s=Object.assign({_directives:t},e),c=new Ql(void 0,s),d={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},u=Ol(l,{indicator:"doc-start",next:a??(i==null?void 0:i[0]),offset:n,onError:r,parentIndent:0,startOnNewline:!0});u.found&&(c.directives.docStart=!0,a&&(a.type==="block-map"||a.type==="block-seq")&&!u.hasNewline&&r(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=a?zf(d,a,u,r):dd(d,u.end,l,null,u,r);const m=c.contents.range[2],p=ii(i,m,!1,r);return p.comment&&(c.comment=p.comment),c.range=[n,m,p.offset],c}function ca(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:n}=e;return[t,t+(typeof n=="string"?n.length:1)]}function Vu(e){var a;let t="",n=!1,l=!1;for(let i=0;i<e.length;++i){const r=e[i];switch(r[0]){case"#":t+=(t===""?"":l?`

`:`
`)+(r.substring(1)||" "),n=!0,l=!1;break;case"%":((a=e[i+1])==null?void 0:a[0])!=="#"&&(i+=1),n=!1;break;default:n||(l=!0),n=!1}}return{comment:t,afterEmptyLine:l}}class ud{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(n,l,a,i)=>{const r=ca(n);i?this.warnings.push(new Ff(r,l,a)):this.errors.push(new On(r,l,a))},this.directives=new Qe({version:t.version||"1.2"}),this.options=t}decorate(t,n){const{comment:l,afterEmptyLine:a}=Vu(this.prelude);if(l){const i=t.contents;if(n)t.comment=t.comment?`${t.comment}
${l}`:l;else if(a||t.directives.docStart||!i)t.commentBefore=l;else if(we(i)&&!i.flow&&i.items.length>0){let r=i.items[0];_e(r)&&(r=r.key);const s=r.commentBefore;r.commentBefore=s?`${l}
${s}`:l}else{const r=i.commentBefore;i.commentBefore=r?`${l}
${r}`:l}}n?(Array.prototype.push.apply(t.errors,this.errors),Array.prototype.push.apply(t.warnings,this.warnings)):(t.errors=this.errors,t.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Vu(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,n=!1,l=-1){for(const a of t)yield*this.next(a);yield*this.end(n,l)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(n,l,a)=>{const i=ca(t);i[0]+=n,this.onError(i,"BAD_DIRECTIVE",l,a)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const n=C0(this.options,this.directives,t,this.onError);this.atDirectives&&!n.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(n,!1),this.doc&&(yield this.doc),this.doc=n,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const n=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,l=new On(ca(t),"UNEXPECTED_TOKEN",n);this.atDirectives||!this.doc?this.errors.push(l):this.doc.errors.push(l);break}case"doc-end":{if(!this.doc){const l="Unexpected doc-end without preceding document";this.errors.push(new On(ca(t),"UNEXPECTED_TOKEN",l));break}this.doc.directives.docEnd=!0;const n=ii(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),n.comment){const l=this.doc.comment;this.doc.comment=l?`${l}
${n.comment}`:n.comment}this.doc.range[2]=n.offset;break}default:this.errors.push(new On(ca(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,n=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const l=Object.assign({_directives:this.directives},this.options),a=new Ql(void 0,l);this.atDirectives&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),a.range=[0,n,n],this.decorate(a,!1),yield a}}}function S0(e,t=!0,n){if(e){const l=(a,i,r)=>{const s=typeof a=="number"?a:Array.isArray(a)?a[0]:a.offset;if(n)n(s,i,r);else throw new On([s,s+1],i,r)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Wf(e,t,l);case"block-scalar":return Uf({options:{strict:t}},e,l)}}return null}function L0(e,t){const{implicitKey:n=!1,indent:l,inFlow:a=!1,offset:i=-1,type:r="PLAIN"}=t,s=li({type:r,value:e},{implicitKey:n,indent:l>0?" ".repeat(l):"",inFlow:a,options:{blockQuote:!0,lineWidth:-1}}),c=t.end??[{type:"newline",offset:-1,indent:l,source:`
`}];switch(s[0]){case"|":case">":{const d=s.indexOf(`
`),u=s.substring(0,d),m=s.substring(d+1)+`
`,p=[{type:"block-scalar-header",offset:i,indent:l,source:u}];return Kf(p,c)||p.push({type:"newline",offset:-1,indent:l,source:`
`}),{type:"block-scalar",offset:i,indent:l,props:p,source:m}}case'"':return{type:"double-quoted-scalar",offset:i,indent:l,source:s,end:c};case"'":return{type:"single-quoted-scalar",offset:i,indent:l,source:s,end:c};default:return{type:"scalar",offset:i,indent:l,source:s,end:c}}}function k0(e,t,n={}){let{afterKey:l=!1,implicitKey:a=!1,inFlow:i=!1,type:r}=n,s="indent"in e?e.indent:null;if(l&&typeof s=="number"&&(s+=2),!r)switch(e.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{const d=e.props[0];if(d.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r=d.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}const c=li({type:r,value:t},{implicitKey:a||s===null,indent:s!==null&&s>0?" ".repeat(s):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":D0(e,c);break;case'"':Xo(e,c,"double-quoted-scalar");break;case"'":Xo(e,c,"single-quoted-scalar");break;default:Xo(e,c,"scalar")}}function D0(e,t){const n=t.indexOf(`
`),l=t.substring(0,n),a=t.substring(n+1)+`
`;if(e.type==="block-scalar"){const i=e.props[0];if(i.type!=="block-scalar-header")throw new Error("Invalid block scalar header");i.source=l,e.source=a}else{const{offset:i}=e,r="indent"in e?e.indent:-1,s=[{type:"block-scalar-header",offset:i,indent:r,source:l}];Kf(s,"end"in e?e.end:void 0)||s.push({type:"newline",offset:-1,indent:r,source:`
`});for(const c of Object.keys(e))c!=="type"&&c!=="offset"&&delete e[c];Object.assign(e,{type:"block-scalar",indent:r,props:s,source:a})}}function Kf(e,t){if(t)for(const n of t)switch(n.type){case"space":case"comment":e.push(n);break;case"newline":return e.push(n),!0}return!1}function Xo(e,t,n){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=n,e.source=t;break;case"block-scalar":{const l=e.props.slice(1);let a=t.length;e.props[0].type==="block-scalar-header"&&(a-=e.props[0].source.length);for(const i of l)i.offset+=a;delete e.props,Object.assign(e,{type:n,source:t,end:l});break}case"block-map":case"block-seq":{const a={type:"newline",offset:e.offset+t.length,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:n,source:t,end:[a]});break}default:{const l="indent"in e?e.indent:-1,a="end"in e&&Array.isArray(e.end)?e.end.filter(i=>i.type==="space"||i.type==="comment"||i.type==="newline"):[];for(const i of Object.keys(e))i!=="type"&&i!=="offset"&&delete e[i];Object.assign(e,{type:n,indent:l,source:t,end:a})}}}const T0=e=>"type"in e?Pr(e):tr(e);function Pr(e){switch(e.type){case"block-scalar":{let t="";for(const n of e.props)t+=Pr(n);return t+e.source}case"block-map":case"block-seq":{let t="";for(const n of e.items)t+=tr(n);return t}case"flow-collection":{let t=e.start.source;for(const n of e.items)t+=tr(n);for(const n of e.end)t+=n.source;return t}case"document":{let t=tr(e);if(e.end)for(const n of e.end)t+=n.source;return t}default:{let t=e.source;if("end"in e&&e.end)for(const n of e.end)t+=n.source;return t}}}function tr({start:e,key:t,sep:n,value:l}){let a="";for(const i of e)a+=i.source;if(t&&(a+=Pr(t)),n)for(const i of n)a+=i.source;return l&&(a+=Pr(l)),a}const ec=Symbol("break visit"),E0=Symbol("skip children"),Qf=Symbol("remove item");function Kn(e,t){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),Yf(Object.freeze([]),e,t)}Kn.BREAK=ec;Kn.SKIP=E0;Kn.REMOVE=Qf;Kn.itemAtPath=(e,t)=>{let n=e;for(const[l,a]of t){const i=n==null?void 0:n[l];if(i&&"items"in i)n=i.items[a];else return}return n};Kn.parentCollection=(e,t)=>{const n=Kn.itemAtPath(e,t.slice(0,-1)),l=t[t.length-1][0],a=n==null?void 0:n[l];if(a&&"items"in a)return a;throw new Error("Parent collection not found")};function Yf(e,t,n){let l=n(t,e);if(typeof l=="symbol")return l;for(const a of["key","value"]){const i=t[a];if(i&&"items"in i){for(let r=0;r<i.items.length;++r){const s=Yf(Object.freeze(e.concat([[a,r]])),i.items[r],n);if(typeof s=="number")r=s-1;else{if(s===ec)return ec;s===Qf&&(i.items.splice(r,1),r-=1)}}typeof l=="function"&&a==="key"&&(l=l(t,e))}}return typeof l=="function"?l(t,e):l}const so="\uFEFF",co="",uo="",Ja="",P0=e=>!!e&&"items"in e,N0=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function A0(e){switch(e){case so:return"<BOM>";case co:return"<DOC>";case uo:return"<FLOW_END>";case Ja:return"<SCALAR>";default:return JSON.stringify(e)}}function Jf(e){switch(e){case so:return"byte-order-mark";case co:return"doc-mode";case uo:return"flow-error-end";case Ja:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const V0=Object.freeze(Object.defineProperty({__proto__:null,BOM:so,DOCUMENT:co,FLOW_END:uo,SCALAR:Ja,createScalarToken:L0,isCollection:P0,isScalar:N0,prettyToken:A0,resolveAsScalar:S0,setScalarValue:k0,stringify:T0,tokenType:Jf,visit:Kn},Symbol.toStringTag,{value:"Module"}));function wt(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Ru=new Set("0123456789ABCDEFabcdef"),R0=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Ai=new Set(",[]{}"),I0=new Set(` ,[]{}
\r	`),Zo=e=>!e||I0.has(e);class Xf{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,n=!1){if(t){if(typeof t!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null}this.atEnd=!n;let l=this.next??"stream";for(;l&&(n||this.hasChars(1));)l=yield*this.parseNext(l)}atLineEnd(){let t=this.pos,n=this.buffer[t];for(;n===" "||n==="	";)n=this.buffer[++t];return!n||n==="#"||n===`
`?!0:n==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let n=this.buffer[t];if(this.indentNext>0){let l=0;for(;n===" ";)n=this.buffer[++l+t];if(n==="\r"){const a=this.buffer[l+t+1];if(a===`
`||!a&&!this.atEnd)return t+l+1}return n===`
`||l>=this.indentNext||!n&&!this.atEnd?t+l:-1}if(n==="-"||n==="."){const l=this.buffer.substr(t,3);if((l==="---"||l==="...")&&wt(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===so&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let n=t.length,l=t.indexOf("#");for(;l!==-1;){const i=t[l-1];if(i===" "||i==="	"){n=l-1;break}else l=t.indexOf("#",l+1)}for(;;){const i=t[n-1];if(i===" "||i==="	")n-=1;else break}const a=(yield*this.pushCount(n))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-a),this.pushNewline(),"stream"}if(this.atLineEnd()){const n=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-n),yield*this.pushNewline(),"stream"}return yield co,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const n=this.peek(3);if((n==="---"||n==="...")&&wt(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,n==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!wt(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,n]=this.peek(2);if(!n&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&wt(n)){const l=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=l,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let n=yield*this.pushIndicators();switch(t[n]){case"#":yield*this.pushCount(t.length-n);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Zo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return n+=yield*this.parseBlockScalarHeader(),n+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-n),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,n,l=-1;do t=yield*this.pushNewline(),t>0?(n=yield*this.pushSpaces(!1),this.indentValue=l=n):n=0,n+=yield*this.pushSpaces(!0);while(t+n>0);const a=this.getLine();if(a===null)return this.setNext("flow");if((l!==-1&&l<this.indentNext&&a[0]!=="#"||l===0&&(a.startsWith("---")||a.startsWith("..."))&&wt(a[3]))&&!(l===this.indentNext-1&&this.flowLevel===1&&(a[0]==="]"||a[0]==="}")))return this.flowLevel=0,yield uo,yield*this.parseLineStart();let i=0;for(;a[i]===",";)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),a[i]){case void 0:return"flow";case"#":return yield*this.pushCount(a.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Zo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||wt(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let n=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;n!==-1&&this.buffer[n+1]==="'";)n=this.buffer.indexOf("'",n+2);else for(;n!==-1;){let i=0;for(;this.buffer[n-1-i]==="\\";)i+=1;if(i%2===0)break;n=this.buffer.indexOf('"',n+1)}const l=this.buffer.substring(0,n);let a=l.indexOf(`
`,this.pos);if(a!==-1){for(;a!==-1;){const i=this.continueScalar(a+1);if(i===-1)break;a=l.indexOf(`
`,i)}a!==-1&&(n=a-(l[a-1]==="\r"?2:1))}if(n===-1){if(!this.atEnd)return this.setNext("quoted-scalar");n=this.buffer.length}return yield*this.pushToIndex(n+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const n=this.buffer[++t];if(n==="+")this.blockScalarKeep=!0;else if(n>"0"&&n<="9")this.blockScalarIndent=Number(n)-1;else if(n!=="-")break}return yield*this.pushUntil(n=>wt(n)||n==="#")}*parseBlockScalar(){let t=this.pos-1,n=0,l;e:for(let i=this.pos;l=this.buffer[i];++i)switch(l){case" ":n+=1;break;case`
`:t=i,n=0;break;case"\r":{const r=this.buffer[i+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!l&&!this.atEnd)return this.setNext("block-scalar");if(n>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=n:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const i=this.continueScalar(t+1);if(i===-1)break;t=this.buffer.indexOf(`
`,i)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let a=t+1;for(l=this.buffer[a];l===" ";)l=this.buffer[++a];if(l==="	"){for(;l==="	"||l===" "||l==="\r"||l===`
`;)l=this.buffer[++a];t=a-1}else if(!this.blockScalarKeep)do{let i=t-1,r=this.buffer[i];r==="\r"&&(r=this.buffer[--i]);const s=i;for(;r===" ";)r=this.buffer[--i];if(r===`
`&&i>=this.pos&&i+1+n>s)t=i;else break}while(!0);return yield Ja,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let n=this.pos-1,l=this.pos-1,a;for(;a=this.buffer[++l];)if(a===":"){const i=this.buffer[l+1];if(wt(i)||t&&Ai.has(i))break;n=l}else if(wt(a)){let i=this.buffer[l+1];if(a==="\r"&&(i===`
`?(l+=1,a=`
`,i=this.buffer[l+1]):n=l),i==="#"||t&&Ai.has(i))break;if(a===`
`){const r=this.continueScalar(l+1);if(r===-1)break;l=Math.max(l,r-2)}}else{if(t&&Ai.has(a))break;n=l}return!a&&!this.atEnd?this.setNext("plain-scalar"):(yield Ja,yield*this.pushToIndex(n+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,n){const l=this.buffer.slice(this.pos,t);return l?(yield l,this.pos+=l.length,l.length):(n&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Zo))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(wt(n)||t&&Ai.has(n))return t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,n=this.buffer[t];for(;!wt(n)&&n!==">";)n=this.buffer[++t];return yield*this.pushToIndex(n===">"?t+1:t,!1)}else{let t=this.pos+1,n=this.buffer[t];for(;n;)if(R0.has(n))n=this.buffer[++t];else if(n==="%"&&Ru.has(this.buffer[t+1])&&Ru.has(this.buffer[t+2]))n=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let n=this.pos-1,l;do l=this.buffer[++n];while(l===" "||t&&l==="	");const a=n-this.pos;return a>0&&(yield this.buffer.substr(this.pos,a),this.pos=n),a}*pushUntil(t){let n=this.pos,l=this.buffer[n];for(;!t(l);)l=this.buffer[++n];return yield*this.pushToIndex(n,!1)}}class Zf{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let n=0,l=this.lineStarts.length;for(;n<l;){const i=n+l>>1;this.lineStarts[i]<t?n=i+1:l=i}if(this.lineStarts[n]===t)return{line:n+1,col:1};if(n===0)return{line:0,col:t};const a=this.lineStarts[n-1];return{line:n,col:t-a+1}}}}function an(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function Iu(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function ey(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Vi(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function rl(e){var n;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((n=e[++t])==null?void 0:n.type)==="space";);return e.splice(t,e.length)}function Mu(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!an(t.start,"explicit-key-ind")&&!an(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,ey(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class md{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Xf,this.onNewLine=t}*parse(t,n=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const l of this.lexer.lex(t,n))yield*this.next(l);n||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const n=Jf(t);if(n)if(n==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=n,yield*this.step(),n){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const l=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:l,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(!t||t.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const n=t??this.stack.pop();if(!n)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield n;else{const l=this.peek(1);switch(n.type==="block-scalar"?n.indent="indent"in l?l.indent:0:n.type==="flow-collection"&&l.type==="document"&&(n.indent=0),n.type==="flow-collection"&&Mu(n),l.type){case"document":l.value=n;break;case"block-scalar":l.props.push(n);break;case"block-map":{const a=l.items[l.items.length-1];if(a.value){l.items.push({start:[],key:n,sep:[]}),this.onKeyLine=!0;return}else if(a.sep)a.value=n;else{Object.assign(a,{key:n,sep:[]}),this.onKeyLine=!a.explicitKey;return}break}case"block-seq":{const a=l.items[l.items.length-1];a.value?l.items.push({start:[],value:n}):a.value=n;break}case"flow-collection":{const a=l.items[l.items.length-1];!a||a.value?l.items.push({start:[],key:n,sep:[]}):a.sep?a.value=n:Object.assign(a,{key:n,sep:[]});return}default:yield*this.pop(),yield*this.pop(n)}if((l.type==="document"||l.type==="block-map"||l.type==="block-seq")&&(n.type==="block-map"||n.type==="block-seq")){const a=n.items[n.items.length-1];a&&!a.sep&&!a.value&&a.start.length>0&&Iu(a.start)===-1&&(n.indent===0||a.start.every(i=>i.type!=="comment"||i.indent<n.indent))&&(l.type==="document"?l.end=a.start:l.items.push({start:a.start}),n.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{Iu(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const n=this.startBlockValue(t);n?this.stack.push(n):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const n=Vi(this.peek(2)),l=rl(n);let a;t.end?(a=t.end,a.push(this.sourceToken),delete t.end):a=[this.sourceToken];const i={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:l,key:t,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,n.value){const a="end"in n.value?n.value.end:void 0,i=Array.isArray(a)?a[a.length-1]:void 0;(i==null?void 0:i.type)==="comment"?a==null||a.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else if(n.sep)n.sep.push(this.sourceToken);else{if(this.atIndentedComment(n.start,t.indent)){const a=t.items[t.items.length-2],i=(l=a==null?void 0:a.value)==null?void 0:l.end;if(Array.isArray(i)){Array.prototype.push.apply(i,n.start),i.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const a=!this.onKeyLine&&this.indent===t.indent,i=a&&(n.sep||n.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(i&&n.sep&&!n.value){const s=[];for(let c=0;c<n.sep.length;++c){const d=n.sep[c];switch(d.type){case"newline":s.push(c);break;case"space":break;case"comment":d.indent>t.indent&&(s.length=0);break;default:s.length=0}}s.length>=2&&(r=n.sep.splice(s[1]))}switch(this.type){case"anchor":case"tag":i||n.value?(r.push(this.sourceToken),t.items.push({start:r}),this.onKeyLine=!0):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"explicit-key-ind":!n.sep&&!n.explicitKey?(n.start.push(this.sourceToken),n.explicitKey=!0):i||n.value?(r.push(this.sourceToken),t.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(n.explicitKey)if(n.sep)if(n.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(an(n.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(ey(n.key)&&!an(n.sep,"newline")){const s=rl(n.start),c=n.key,d=n.sep;d.push(this.sourceToken),delete n.key,delete n.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:c,sep:d}]})}else r.length>0?n.sep=n.sep.concat(r,this.sourceToken):n.sep.push(this.sourceToken);else if(an(n.start,"newline"))Object.assign(n,{key:null,sep:[this.sourceToken]});else{const s=rl(n.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]})}else n.sep?n.value||i?t.items.push({start:r,key:null,sep:[this.sourceToken]}):an(n.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);i||n.value?(t.items.push({start:r,key:s,sep:[]}),this.onKeyLine=!0):n.sep?this.stack.push(s):(Object.assign(n,{key:s,sep:[]}),this.onKeyLine=!0);return}default:{const s=this.startBlockValue(t);if(s){if(s.type==="block-seq"){if(!n.explicitKey&&n.sep&&!an(n.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else a&&t.items.push({start:r});this.stack.push(s);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(n.value){const a="end"in n.value?n.value.end:void 0,i=Array.isArray(a)?a[a.length-1]:void 0;(i==null?void 0:i.type)==="comment"?a==null||a.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(n.start,t.indent)){const a=t.items[t.items.length-2],i=(l=a==null?void 0:a.value)==null?void 0:l.end;if(Array.isArray(i)){Array.prototype.push.apply(i,n.start),i.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return;case"anchor":case"tag":if(n.value||this.indent<=t.indent)break;n.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;n.value||an(n.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return}if(this.indent>t.indent){const a=this.startBlockValue(t);if(a){this.stack.push(a);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const n=t.items[t.items.length-1];if(this.type==="flow-error-end"){let l;do yield*this.pop(),l=this.peek(1);while(l&&l.type==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!n||n.sep?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return;case"map-value-ind":!n||n.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!n||n.value?t.items.push({start:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);!n||n.value?t.items.push({start:[],key:a,sep:[]}):n.sep?this.stack.push(a):Object.assign(n,{key:a,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const l=this.startBlockValue(t);l?this.stack.push(l):(yield*this.pop(),yield*this.step())}else{const l=this.peek(2);if(l.type==="block-map"&&(this.type==="map-value-ind"&&l.indent===t.indent||this.type==="newline"&&!l.items[l.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&l.type!=="flow-collection"){const a=Vi(l),i=rl(a);Mu(t);const r=t.end.splice(1,t.end.length);r.push(this.sourceToken);const s={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:i,key:t,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const n=Vi(t),l=rl(n);return l.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const n=Vi(t),l=rl(n);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,n){return this.type!=="comment"||this.indent<=n?!1:t.every(l=>l.type==="newline"||l.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function ty(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new Zf||null,prettyErrors:t}}function M0(e,t={}){const{lineCounter:n,prettyErrors:l}=ty(t),a=new md(n==null?void 0:n.addNewLine),i=new ud(t),r=Array.from(i.compose(a.parse(e)));if(l&&n)for(const s of r)s.errors.forEach(Er(e,n)),s.warnings.forEach(Er(e,n));return r.length>0?r:Object.assign([],{empty:!0},i.streamInfo())}function ny(e,t={}){const{lineCounter:n,prettyErrors:l}=ty(t),a=new md(n==null?void 0:n.addNewLine),i=new ud(t);let r=null;for(const s of i.compose(a.parse(e),!0,e.length))if(!r)r=s;else if(r.options.logLevel!=="silent"){r.errors.push(new On(s.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return l&&n&&(r.errors.forEach(Er(e,n)),r.warnings.forEach(Er(e,n))),r}function G0(e,t,n){let l;typeof t=="function"?l=t:n===void 0&&t&&typeof t=="object"&&(n=t);const a=ny(e,n);if(!a)return null;if(a.warnings.forEach(i=>wf(a.options.logLevel,i)),a.errors.length>0){if(a.options.logLevel!=="silent")throw a.errors[0];a.errors=[]}return a.toJS(Object.assign({reviver:l},n))}function j0(e,t,n){let l=null;if(typeof t=="function"||Array.isArray(t)?l=t:n===void 0&&t&&(n=t),typeof n=="string"&&(n=n.length),typeof n=="number"){const a=Math.round(n);n=a<1?void 0:a>8?{indent:8}:{indent:a}}if(e===void 0){const{keepUndefined:a}=n??t??{};if(!a)return}return Jn(e)&&!l?e.toString(n):new Ql(e,l,n).toString(n)}const ly=Object.freeze(Object.defineProperty({__proto__:null,Alias:Xr,CST:V0,Composer:ud,Document:Ql,Lexer:Xf,LineCounter:Zf,Pair:We,Parser:md,Scalar:ie,Schema:oo,YAMLError:cd,YAMLMap:rt,YAMLParseError:On,YAMLSeq:vn,YAMLWarning:Ff,isAlias:Ln,isCollection:we,isDocument:Jn,isMap:$l,isNode:Se,isPair:_e,isScalar:pe,isSeq:Hl,parse:G0,parseAllDocuments:M0,parseDocument:ny,stringify:j0,visit:Xn,visitAsync:Jr},Symbol.toStringTag,{value:"Module"})),B0=`protocols:
  - model: 40100
    point: ID
    block: fixed
    entry:
      name: ID
      description: ID
      longdescription: "ID Data code: 40100.ID"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40100
    point: L
    block: fixed
    entry:
      name: L
      description: L
      longdescription: "L Data code: 40100.L"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40100
    point: siteID
    block: fixed
    entry:
      name: siteID
      description: site ID
      longdescription: "site ID Data code: 40100.siteID"
      dtype: uint32
      unit: N/A
      category: Site information
      meanings: {}
  - model: 40100
    point: reserved1
    block: fixed
    entry:
      name: reserved1
      description: Reserved
      longdescription: "Reserved Data code: 40100.reserved1"
      dtype: string
      unit: N/A
      category: Site information
      meanings: {}
  - model: 40100
    point: Mn
    block: fixed
    entry:
      name: Mn
      description: Equipment manufacturer
      longdescription: "Equipment manufacturer Data code: 40100.Mn"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
    labels: []
  - model: 40100
    point: Md
    block: fixed
    entry:
      name: Md
      description: Device model identifier
      longdescription: "Identifies the specific hardware model of the inverter as
        reported by the power conversion system (PCS). Used for tracking
        firmware compatibility and diagnostic reference. Data code: 40100.Md"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
  - model: 40100
    point: SN
    block: fixed
    entry:
      name: SN
      description: Device serial number
      longdescription: "Unique serial number assigned to this inverter at
        manufacturing. Used to identify the physical unit for service Data code:
        40100.SN"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
    labels: []
  - model: 40100
    point: vNom
    block: fixed
    entry:
      name: vNom
      description: Nominal AC voltage
      longdescription: "Rated AC output voltage of the inverter under standard
        conditions. Indicates the design voltage of the grid interface. Data
        code: 40100.vNom"
      dtype: uint16
      unit: V
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Unit
        label_text: Volt
  - model: 40100
    point: fNom
    block: fixed
    entry:
      name: fNom
      description: Nominal AC frequency
      longdescription: "Rated output frequency of the inverter when synchronized to
        the grid. Defines the system's base frequency for grid operation. Data
        code: 40100.fNom"
      dtype: uint16
      unit: Hz
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Unit
        label_text: Freq
  - model: 40100
    point: pNom
    block: fixed
    entry:
      name: pNom
      description: Nominal active power
      longdescription: "Rated continuous active power output of the inverter at
        nominal operating conditions. Indicates maximum sustained real power
        delivery capability. Data code: 40100.pNom"
      dtype: uint32
      unit: W
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Unit
        label_text: Power
  - model: 40100
    point: sNom
    block: fixed
    entry:
      name: sNom
      description: Nominal apparent power
      longdescription: "Rated continuous apparent power capacity (combined real and
        reactive components). Defines total output capability at rated voltage
        and frequency. Data code: 40100.sNom"
      dtype: uint32
      unit: VA
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Unit
        label_text: Power
  - model: 40100
    point: hwVer
    block: fixed
    entry:
      name: hwVer
      description: Hardware version
      longdescription: "Indicates the inverter hardware revision. Useful for verifying
        component compatibility, field updates, and service documentation. Data
        code: 40100.hwVer"
      dtype: uint16
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
  - model: 40100
    point: verDspMaster
    block: fixed
    entry:
      name: verDspMaster
      description: Master DSP firmware version
      longdescription: "Firmware version of the main digital signal processor
        controlling inverter power conversion. Used for compatibility tracking
        and diagnostic support. Data code: 40100.verDspMaster"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Feature
        label_text: Firmware
  - model: 40100
    point: verDspSlave
    block: fixed
    entry:
      name: verDspSlave
      description: Slave DSP firmware version
      longdescription: "Firmware version of the secondary DSP module responsible for
        parallel or auxiliary control functions. Used for synchronization and
        troubleshooting. Data code: 40100.verDspSlave"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Feature
        label_text: Firmware
  - model: 40100
    point: verArmEms
    block: fixed
    entry:
      name: verArmEms
      description: EMS ARM firmware version
      longdescription: "Firmware version of the embedded ARM processor managing energy
        management system (EMS) logic. Typically governs site-level control,
        communications, and grid interaction. Data code: 40100.verArmEms"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Feature
        label_text: Firmware
  - model: 40100
    point: verAFCI
    block: fixed
    entry:
      name: verAFCI
      description: AFCI module firmware version
      longdescription: "Firmware version of the Arc-Fault Circuit Interrupter (AFCI)
        safety module. Confirms AFCI functionality and safety compliance level.
        Data code: 40100.verAFCI"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Feature
        label_text: Firmware
  - model: 40100
    point: verLCD1
    block: fixed
    entry:
      name: verLCD1
      description: LCD 1 firmware version
      longdescription: "Firmware version of the primary LCD interface board, used to
        display system status and settings. Data code: 40100.verLCD1"
      dtype: uint16
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Feature
        label_text: Firmware
  - model: 40100
    point: verLCD2
    block: fixed
    entry:
      name: verLCD2
      description: LCD 2 firmware version
      longdescription: "Firmware version of the secondary LCD interface or expansion
        display module.  Data code: 40100.verLCD2"
      dtype: uint16
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Feature
        label_text: Firmware
  - model: 40100
    point: verProto
    block: fixed
    entry:
      name: verProto
      description: Protocol software version
      longdescription: "Version of the communication protocol firmware that defines
        inverter data and command interface behavior. Data code: 40100.verProto"
      dtype: uint16
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
  - model: 40100
    point: verSafety
    block: fixed
    entry:
      name: verSafety
      description: Safety version
      longdescription: "Version identifier for inverter safety control software. Used
        to confirm compliance with regulatory safety standards. Data code:
        40100.verSafety"
      dtype: uint16
      unit: N/A
      category: PCS information
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Nameplate
  - model: 40100
    point: reserved2
    block: fixed
    entry:
      name: reserved2
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40100.reserved2"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
  - model: 40100
    point: nMppt
    block: fixed
    entry:
      name: nMppt
      description: MPPT number
      longdescription: "Number of independent Maximum Power Point Tracking (MPPT)
        channels available on the inverter. Each channel can independently
        optimize PV string voltage and current. Data code: 40100.nMppt"
      dtype: uint16
      unit: N/A
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Nameplate
  - model: 40100
    point: reserved3
    block: fixed
    entry:
      name: reserved3
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40100.reserved3"
      dtype: string
      unit: N/A
      category: DC-PV
      meanings: {}
  - model: 40100
    point: nGridPhase
    block: fixed
    entry:
      name: nGridPhase
      description: Grid phase configuration
      longdescription: "Configuration type for interconnection. Data code: 40100.nGridPhase"
      dtype: enum16
      unit: N/A
      category: Grid
      meanings:
        "1": single phase
        "2": split phase
        "3": three phases
      friendly_meanings:
        "1": Single phase
        "2": Split phase
        "3": Three phase
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Nameplate
      - label_family: Type of Data
        label_text: Status
  - model: 40100
    point: reserved4
    block: fixed
    entry:
      name: reserved4
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40100.reserved4"
      dtype: string
      unit: N/A
      category: Grid
      meanings: {}
  - model: 40100
    point: V_SF
    block: fixed
    entry:
      name: V_SF
      description: Voltage scale factor
      longdescription: "Scaling factor applied to voltage-related measurements. Used
        internally to convert raw data to engineering units. Data code:
        40100.V_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40100
    point: Hz_SF
    block: fixed
    entry:
      name: Hz_SF
      description: Frequency scale factor
      longdescription: "Scaling factor applied to frequency measurements. Used
        internally for frequency data normalization. Data code: 40100.Hz_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40100
    point: VA1_SF
    block: fixed
    entry:
      name: VA1_SF
      description: Apparent power scale factor
      longdescription: "Scaling factor applied to apparent power measurements. Used to
        convert raw register values to display units. Data code: 40100.VA1_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40100
    point: W1_SF
    block: fixed
    entry:
      name: W1_SF
      description: Active power scale factor
      longdescription: "Scaling factor applied to active power measurements. Used for
        engineering unit conversion. Data code: 40100.W1_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40100
    point: reserved5
    block: fixed
    entry:
      name: reserved5
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40100.reserved5"
      dtype: string
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: ID
    block: fixed
    entry:
      name: ID
      description: Model identifier
      longdescription: "Unique identifier for this SunSpec model block within the
        inverter’s data map. Used internally for addressing. Data code:
        40101.ID"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40101
    point: L
    block: fixed
    entry:
      name: L
      description: Model length
      longdescription: "Specifies the number of registers used by this model block.
        Primarily used by integrators for protocol mapping and diagnostics. Data
        code: 40101.L"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40101
    point: siteID
    block: fixed
    entry:
      name: siteID
      description: Site identifier
      longdescription: "Unique identifier assigned to the installation site. Used for
        associating telemetry data with a specific system or location. Data
        code: 40101.siteID"
      dtype: uint32
      unit: N/A
      category: Site information
      meanings: {}
  - model: 40101
    point: reserved1
    block: fixed
    entry:
      name: reserved1
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40101.reserved1"
      dtype: string
      unit: N/A
      category: Site information
      meanings: {}
  - model: 40101
    point: SN
    block: fixed
    entry:
      name: SN
      description: Device serial number
      longdescription: "Unique serial number assigned to this inverter. Used for
        service tracking, firmware management, and telemetry association. Data
        code: 40101.SN"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
    labels: []
  - model: 40101
    point: reserved2
    block: fixed
    entry:
      name: reserved2
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40101.reserved2"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
  - model: 40101
    point: pvStat
    block: fixed
    entry:
      name: pvStat
      description: PV status
      longdescription: "Indicates whether the photovoltaic input subsystem is
        operating normally or has detected a fault. Data code: 40101.pvStat"
      dtype: enum16
      unit: N/A
      category: DC-PV
      meanings:
        "0": Normal
        "1": Failure
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: pPvTotal
    block: fixed
    entry:
      name: pPvTotal
      description: PV total input power
      longdescription: "Total combined DC input power from all PV strings. Represents
        total DC solar generation by the inverter. Data code: 40101.pPvTotal"
      dtype: uint32
      unit: W
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pMppt1
    block: fixed
    entry:
      name: pMppt1
      description: MPPT1 power
      longdescription: "Instantaneous DC power measured at the first Maximum Power
        Point Tracking (MPPT) channel. Data code: 40101.pMppt1"
      dtype: uint32
      unit: W
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: iMppt1
    block: fixed
    entry:
      name: iMppt1
      description: MPPT1 current
      longdescription: "Input current flowing into MPPT channel 1 from the connected
        PV string. Data code: 40101.iMppt1"
      dtype: uint16
      unit: A
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vMppt1
    block: fixed
    entry:
      name: vMppt1
      description: MPPT1 voltage
      longdescription: "Input voltage measured at MPPT channel 1 terminals. Data code:
        40101.vMppt1"
      dtype: uint16
      unit: V
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pMppt2
    block: fixed
    entry:
      name: pMppt2
      description: MPPT2 power
      longdescription: "Instantaneous DC power measured at the second MPPT channel.
        Data code: 40101.pMppt2"
      dtype: uint32
      unit: W
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: iMppt2
    block: fixed
    entry:
      name: iMppt2
      description: MPPT2 current
      longdescription: "Input current flowing into MPPT channel 2 from the connected
        PV string. Data code: 40101.iMppt2"
      dtype: uint16
      unit: A
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vMppt2
    block: fixed
    entry:
      name: vMppt2
      description: MPPT2 voltage
      longdescription: "Input voltage measured at MPPT channel 2 terminals. Data code:
        40101.vMppt2"
      dtype: uint16
      unit: V
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pMppt3
    block: fixed
    entry:
      name: pMppt3
      description: MPPT3 power
      longdescription: "Instantaneous DC power measured at the third MPPT channel.
        Data code: 40101.pMppt3"
      dtype: uint32
      unit: W
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: iMppt3
    block: fixed
    entry:
      name: iMppt3
      description: MPPT3 current
      longdescription: "Input current flowing into MPPT channel 3 from the connected
        PV string. Data code: 40101.iMppt3"
      dtype: uint16
      unit: A
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vMppt3
    block: fixed
    entry:
      name: vMppt3
      description: MPPT3 voltage
      longdescription: "Input voltage measured at MPPT channel 3 terminals. Data code:
        40101.vMppt3"
      dtype: uint16
      unit: V
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pMppt4
    block: fixed
    entry:
      name: pMppt4
      description: MPPT4 power
      longdescription: "Instantaneous DC power measured at the fourth MPPT channel.
        Data code: 40101.pMppt4"
      dtype: uint32
      unit: W
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: iMppt4
    block: fixed
    entry:
      name: iMppt4
      description: MPPT4 current
      longdescription: "Input current flowing into MPPT channel 4 from the connected
        PV string. Data code: 40101.iMppt4"
      dtype: uint16
      unit: A
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vMppt4
    block: fixed
    entry:
      name: vMppt4
      description: MPPT4 voltage
      longdescription: "Input voltage measured at MPPT channel 4 terminals. Data code:
        40101.vMppt4"
      dtype: uint16
      unit: V
      category: DC-PV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: reserved3
    block: fixed
    entry:
      name: reserved3
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40101.reserved3"
      dtype: string
      unit: N/A
      category: DC-PV
      meanings: {}
  - model: 40101
    point: capBat
    block: fixed
    entry:
      name: capBat
      description: Battery capacity
      longdescription: "Nameplate battery capacity expressed in amp-hours for the
        installed pack. Use to validate configuration and estimate runtime. This
        value is read from the inverter. Data code: 40101.capBat"
      dtype: uint16
      unit: Ah
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: socBat
    block: fixed
    entry:
      name: socBat
      description: Battery state of charge
      longdescription: "Current battery state of charge as a percentage. This value is
        read from the inverter. Data code: 40101.socBat"
      dtype: uint16
      unit: "%"
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: "%"
  - model: 40101
    point: sohBat
    block: fixed
    entry:
      name: sohBat
      description: Battery state of health
      longdescription: "Average state of health across all battery modules. Indicates
        long-term capacity retention relative to new. This value is read from
        the inverter. Data code: 40101.sohBat"
      dtype: uint16
      unit: "%"
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: "%"
  - model: 40101
    point: batChgDischMode
    block: fixed
    entry:
      name: batChgDischMode
      description: Battery charge/discharge mode
      longdescription: "Current battery operating state, reflecting whether the pack
        is charging, discharging, holding, or at an end-of-range condition. This
        value is read from the inverter. Data code: 40101.batChgDischMode"
      dtype: enum16
      unit: N/A
      category: Battery
      meanings:
        "1": Charging
        "2": Discharging
        "3": Empty
        "4": Full
        "5": Off
        "6": Holding
      friendly_meanings:
        "1": "Charging; 2: Discharging; 3: Empty; 4: Full; 5: Off; 6: Holding"
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: pBatChg
    block: fixed
    entry:
      name: pBatChg
      description: Battery charge power
      longdescription: "Positive real power flowing **into** the battery (charging).
        Useful for verifying charge limits and schedules. This value is read
        from the inverter. Data code: 40101.pBatChg"
      dtype: uint32
      unit: W
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pBatDischg
    block: fixed
    entry:
      name: pBatDischg
      description: Battery discharge power
      longdescription: "Positive real power flowing **out of** the battery
        (discharging). Useful for load support and export control. This value is
        read from the inverter. Data code: 40101.pBatDischg"
      dtype: uint32
      unit: W
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: iBat
    block: fixed
    entry:
      name: iBat
      description: Battery current
      longdescription: "Instantaneous DC current at the battery terminals. Sign may
        indicate direction depending on implementation. This value is read from
        the inverter. Data code: 40101.iBat"
      dtype: int32
      unit: A
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vBat
    block: fixed
    entry:
      name: vBat
      description: Battery voltage
      longdescription: "Instantaneous DC voltage at the battery terminals. Use with
        current to validate power and cable sizing. This value is read from the
        inverter. Data code: 40101.vBat"
      dtype: uint16
      unit: V
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vBatCellMax
    block: fixed
    entry:
      name: vBatCellMax
      description: Battery maximum cell voltage
      longdescription: "Highest measured single-cell voltage across the pack. Useful
        for balancing and protection checks. This value is read from the
        inverter. Data code: 40101.vBatCellMax"
      dtype: uint16
      unit: V
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vBatCellMin
    block: fixed
    entry:
      name: vBatCellMin
      description: Battery minimum cell voltage
      longdescription: "Lowest measured single-cell voltage across the pack. Useful
        for diagnosing imbalance and aging. This value is read from the
        inverter. Data code: 40101.vBatCellMin"
      dtype: uint16
      unit: V
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: locBatCellVoltMax
    block: fixed
    entry:
      name: locBatCellVoltMax
      description: Module index of max cell voltage
      longdescription: "Index (smallest module number) of the module containing the
        highest cell voltage. Aids pinpointing imbalance. This value is read
        from the inverter. Data code: 40101.locBatCellVoltMax"
      dtype: uint32
      unit: N/A
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: locBatCellVoltMin
    block: fixed
    entry:
      name: locBatCellVoltMin
      description: Module index of min cell voltage
      longdescription: "Index (smallest module number) of the module containing the
        lowest cell voltage. Aids pinpointing weak cells. This value is read
        from the inverter. Data code: 40101.locBatCellVoltMin"
      dtype: uint32
      unit: N/A
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: tempBat
    block: fixed
    entry:
      name: tempBat
      description: Battery temperature
      longdescription: "Measured temperature representative of the battery pack
        environment. Used for thermal limits and performance. This value is read
        from the inverter. Data code: 40101.tempBat"
      dtype: int16
      unit: C
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: tempBatCellAvg
    block: fixed
    entry:
      name: tempBatCellAvg
      description: Battery average cell temperature
      longdescription: "Average temperature across cells/modules. Useful for trend and
        thermal management. This value is read from the inverter. Data code:
        40101.tempBatCellAvg"
      dtype: int16
      unit: C
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: tempBatCellMax
    block: fixed
    entry:
      name: tempBatCellMax
      description: Battery maximum cell temperature
      longdescription: "Highest measured cell/module temperature. Check against
        derating and protection thresholds. This value is read from the
        inverter. Data code: 40101.tempBatCellMax"
      dtype: int16
      unit: C
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: tempBatCellMin
    block: fixed
    entry:
      name: tempBatCellMin
      description: Battery minimum cell temperature
      longdescription: "Lowest measured cell/module temperature. Helps detect sensor
        faults or cold spots. This value is read from the inverter. Data code:
        40101.tempBatCellMin"
      dtype: int16
      unit: C
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: locBatCellTempMax
    block: fixed
    entry:
      name: locBatCellTempMax
      description: Module index of max cell temperature
      longdescription: "Index (smallest module number) of the module with the highest
        cell temperature for targeted inspection. This value is read from the
        inverter. Data code: 40101.locBatCellTempMax"
      dtype: uint32
      unit: N/A
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: locBatCellTempMin
    block: fixed
    entry:
      name: locBatCellTempMin
      description: Module index of min cell temperature
      longdescription: "Index (smallest module number) of the module with the lowest
        cell temperature for targeted inspection. This value is read from the
        inverter. Data code: 40101.locBatCellTempMin"
      dtype: uint32
      unit: N/A
      category: Battery
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: bmsReqForceChg
    block: fixed
    entry:
      name: bmsReqForceChg
      description: Forced charging (BMS request)
      longdescription: "BMS request flag indicating whether a forced charge is
        commanded due to protection or balancing needs. This value is read from
        the inverter. Data code: 40101.bmsReqForceChg"
      dtype: enum16
      unit: N/A
      category: Battery
      meanings:
        "0": "BMS Force charge: OFF"
        "1": "BMS Force charge: ON"
      friendly_meanings:
        "0": "Off; 1: On"
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: reserved4
    block: fixed
    entry:
      name: reserved4
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40101.reserved4"
      dtype: string
      unit: N/A
      category: Battery
      meanings: {}
  - model: 40101
    point: W
    block: fixed
    entry:
      name: W
      description: Inverter Power
      longdescription: "Net active (real) power at the inverter AC output. Data code: 40101.W"
      dtype: int32
      unit: W
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: Var
    block: fixed
    entry:
      name: Var
      description: Reactive power total
      longdescription: "Total reactive power at the inverter AC output for power
        factor and VAR support analysis. Data code: 40101.Var"
      dtype: int32
      unit: Var
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: VA
    block: fixed
    entry:
      name: VA
      description: Apparent power total
      longdescription: "Total apparent power at the inverter AC output (vector sum of
        real and reactive components). Data code: 40101.VA"
      dtype: uint32
      unit: VA
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: PF
    block: fixed
    entry:
      name: PF
      description: Power factor
      longdescription: "Instantaneous power factor of the inverter AC output. Unitless
        ratio of real to apparent power. Data code: 40101.PF"
      dtype: int16
      unit: N/A
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: A
    block: fixed
    entry:
      name: A
      description: Total AC current
      longdescription: "Sum of RMS currents across active phases at the inverter
        output. Data code: 40101.A"
      dtype: int32
      unit: A
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: LLV
    block: fixed
    entry:
      name: LLV
      description: Inverter Output Voltage
      longdescription: "Line-to-line RMS voltage at the inverter output (average of
        active phases). Data code: 40101.LLV"
      dtype: uint16
      unit: V
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: LNV
    block: fixed
    entry:
      name: LNV
      description: Inverter Output Voltage L-N
      longdescription: "Line-to-neutral RMS voltage at the inverter output. Data code:
        40101.LNV"
      dtype: uint16
      unit: V
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: Hz
    block: fixed
    entry:
      name: Hz
      description: AC frequency
      longdescription: "Output frequency of the inverter when operating. Useful for
        grid sync and backup mode checks. Data code: 40101.Hz"
      dtype: uint32
      unit: Hz
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Freq
  - model: 40101
    point: WL1
    block: fixed
    entry:
      name: WL1
      description: Active power L1
      longdescription: "Real power on phase L1 at the inverter output. Data code: 40101.WL1"
      dtype: int32
      unit: W
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: VarL1
    block: fixed
    entry:
      name: VarL1
      description: Reactive power L1
      longdescription: "Reactive power on phase L1 at the inverter output. Data code:
        40101.VarL1"
      dtype: int32
      unit: Var
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: VAL1
    block: fixed
    entry:
      name: VAL1
      description: Apparent power L1
      longdescription: "Apparent power on phase L1 at the inverter output. Data code:
        40101.VAL1"
      dtype: uint32
      unit: VA
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: PFL1
    block: fixed
    entry:
      name: PFL1
      description: Power factor L1
      longdescription: "Phase L1 power factor (unitless). Data code: 40101.PFL1"
      dtype: int16
      unit: N/A
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: AL1
    block: fixed
    entry:
      name: AL1
      description: Current L1
      longdescription: "RMS current on phase L1 at the inverter output. Data code: 40101.AL1"
      dtype: int32
      unit: A
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: VL1L2
    block: fixed
    entry:
      name: VL1L2
      description: Voltage L1-L2
      longdescription: "Line-to-line voltage between phases L1 and L2. Data code: 40101.VL1L2"
      dtype: uint16
      unit: V
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: VL1
    block: fixed
    entry:
      name: VL1
      description: Voltage L1-N
      longdescription: "Line-to-neutral voltage on phase L1. Data code: 40101.VL1"
      dtype: uint16
      unit: V
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: WL2
    block: fixed
    entry:
      name: WL2
      description: Active power L2
      longdescription: "Real power on phase L2 at the inverter output. Data code: 40101.WL2"
      dtype: int32
      unit: W
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: VarL2
    block: fixed
    entry:
      name: VarL2
      description: Reactive power L2
      longdescription: "Reactive power on phase L2 at the inverter output. Data code:
        40101.VarL2"
      dtype: int32
      unit: Var
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: VAL2
    block: fixed
    entry:
      name: VAL2
      description: Apparent power L2
      longdescription: "Apparent power on phase L2 at the inverter output. Data code:
        40101.VAL2"
      dtype: uint32
      unit: VA
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: PFL2
    block: fixed
    entry:
      name: PFL2
      description: Power factor L2
      longdescription: "Phase L2 power factor (unitless). Data code: 40101.PFL2"
      dtype: int16
      unit: N/A
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: AL2
    block: fixed
    entry:
      name: AL2
      description: Current L2
      longdescription: "RMS current on phase L2 at the inverter output. Data code: 40101.AL2"
      dtype: int32
      unit: A
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: VL2L3
    block: fixed
    entry:
      name: VL2L3
      description: Voltage L2-L3
      longdescription: "Line-to-line voltage between phases L2 and L3. Data code: 40101.VL2L3"
      dtype: uint16
      unit: V
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: VL2
    block: fixed
    entry:
      name: VL2
      description: Voltage L2-N
      longdescription: "Line-to-neutral voltage on phase L2. Data code: 40101.VL2"
      dtype: uint16
      unit: V
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: WL3
    block: fixed
    entry:
      name: WL3
      description: Active power L3
      longdescription: "Real power on phase L3 at the inverter output. Data code: 40101.WL3"
      dtype: int32
      unit: W
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: VarL3
    block: fixed
    entry:
      name: VarL3
      description: Reactive power L3
      longdescription: "Reactive power on phase L3 at the inverter output. Data code:
        40101.VarL3"
      dtype: int32
      unit: Var
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: VAL3
    block: fixed
    entry:
      name: VAL3
      description: Apparent power L3
      longdescription: "Apparent power on phase L3 at the inverter output. Data code:
        40101.VAL3"
      dtype: uint32
      unit: VA
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: PFL3
    block: fixed
    entry:
      name: PFL3
      description: Power factor L3
      longdescription: "Phase L3 power factor (unitless). Data code: 40101.PFL3"
      dtype: int16
      unit: N/A
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: AL3
    block: fixed
    entry:
      name: AL3
      description: Current L3
      longdescription: "RMS current on phase L3 at the inverter output. Data code: 40101.AL3"
      dtype: int32
      unit: A
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: VL3L1
    block: fixed
    entry:
      name: VL3L1
      description: Voltage L3-L1
      longdescription: "Line-to-line voltage between phases L3 and L1. Data code: 40101.VL3L1"
      dtype: uint16
      unit: V
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: VL3
    block: fixed
    entry:
      name: VL3
      description: Voltage L3-N
      longdescription: "Line-to-neutral voltage on phase L3. Data code: 40101.VL3"
      dtype: uint16
      unit: V
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: Prec
    block: fixed
    entry:
      name: Prec
      description: AC charging rectification power
      longdescription: "Power consumed by the rectifier stage during AC charging of
        the battery (if applicable). Data code: 40101.Prec"
      dtype: int32
      unit: W
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: tempAmb
    block: fixed
    entry:
      name: tempAmb
      description: Ambient temperature
      longdescription: "Ambient temperature measured near the inverter enclosure.
        Useful for site condition assessment. Data code: 40101.tempAmb"
      dtype: int16
      unit: C
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: tempInt
    block: fixed
    entry:
      name: tempInt
      description: Internal temperature
      longdescription: "Internal inverter temperature. Used for thermal protection and
        derating analysis. Data code: 40101.tempInt"
      dtype: int16
      unit: C
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: tempLLC
    block: fixed
    entry:
      name: tempLLC
      description: LLC circuit temperature
      longdescription: "Temperature of the LLC (resonant) stage or equivalent
        converter section. Monitor for stress and cooling adequacy. Data code:
        40101.tempLLC"
      dtype: int16
      unit: C
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: tempInv
    block: fixed
    entry:
      name: tempInv
      description: Inverter circuit temperature
      longdescription: "Temperature of the inverter power stage heat sink or
        IGBTs/MOSFETs. Data code: 40101.tempInv"
      dtype: int16
      unit: C
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Temp
  - model: 40101
    point: reserved5
    block: fixed
    entry:
      name: reserved5
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40101.reserved5"
      dtype: string
      unit: N/A
      category: Inverter
      meanings: {}
  - model: 40101
    point: gridStat
    block: fixed
    entry:
      name: gridStat
      description: Grid status
      longdescription: "Status of the utility/grid input as detected by the inverter
        protection and sync logic. Data code: 40101.gridStat"
      dtype: enum16
      unit: N/A
      category: Grid
      meanings:
        "0": Normal
        "1": Failure
      friendly_meanings:
        "0": Normal
        "1": Grid Abnormal or Unavailable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: pGridImpTot
    block: fixed
    entry:
      name: pGridImpTot
      description: Power imported from grid
      longdescription: "Total real power imported from the grid (consumed by the
        site). Data code: 40101.pGridImpTot"
      dtype: uint32
      unit: W
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pGridExpTot
    block: fixed
    entry:
      name: pGridExpTot
      description: Power exported to grid
      longdescription: "Total real power exported to the grid from PV and battery
        discharge. Data code: 40101.pGridExpTot"
      dtype: uint32
      unit: W
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qGridTot
    block: fixed
    entry:
      name: qGridTot
      description: Grid reactive power
      longdescription: "Total reactive power at the point of common coupling for the
        grid connection. Data code: 40101.qGridTot"
      dtype: int32
      unit: Var
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sGridTot
    block: fixed
    entry:
      name: sGridTot
      description: Grid apparent power
      longdescription: "Total apparent power at the grid connection point. Data code:
        40101.sGridTot"
      dtype: uint32
      unit: VA
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfGridTot
    block: fixed
    entry:
      name: pfGridTot
      description: Grid power factor
      longdescription: "Overall power factor measured at the grid connection point.
        Data code: 40101.pfGridTot"
      dtype: int16
      unit: N/A
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iGridTot
    block: fixed
    entry:
      name: iGridTot
      description: Grid current
      longdescription: "Sum of RMS currents across active grid phases at the metering
        point. Data code: 40101.iGridTot"
      dtype: int32
      unit: A
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vGridLL
    block: fixed
    entry:
      name: vGridLL
      description: Grid Voltage
      longdescription: "Line-to-line voltage measured at the grid connection. Data
        code: 40101.vGridLL"
      dtype: uint16
      unit: V
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vGridLN
    block: fixed
    entry:
      name: vGridLN
      description: Grid Voltage L-N
      longdescription: "Line-to-neutral voltage measured at the grid connection. Data
        code: 40101.vGridLN"
      dtype: uint16
      unit: V
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: fGrid
    block: fixed
    entry:
      name: fGrid
      description: Grid frequency
      longdescription: "Measured utility frequency at the point of interconnection.
        Data code: 40101.fGrid"
      dtype: uint16
      unit: Hz
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Freq
  - model: 40101
    point: pGridL1
    block: fixed
    entry:
      name: pGridL1
      description: Grid active power L1
      longdescription: "Real power on grid phase L1 (import/export sign per
        implementation). Data code: 40101.pGridL1"
      dtype: int32
      unit: W
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qGridL1
    block: fixed
    entry:
      name: qGridL1
      description: Grid reactive power L1
      longdescription: "Reactive power on grid phase L1. Data code: 40101.qGridL1"
      dtype: int32
      unit: Var
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sGridL1
    block: fixed
    entry:
      name: sGridL1
      description: Grid apparent power L1
      longdescription: "Apparent power on grid phase L1. Data code: 40101.sGridL1"
      dtype: uint32
      unit: VA
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfGridL1
    block: fixed
    entry:
      name: pfGridL1
      description: Grid power factor L1
      longdescription: "Power factor on grid phase L1 (unitless). Data code: 40101.pfGridL1"
      dtype: int16
      unit: N/A
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iGridL1
    block: fixed
    entry:
      name: iGridL1
      description: Grid current L1
      longdescription: "RMS current on grid phase L1. Data code: 40101.iGridL1"
      dtype: int32
      unit: A
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vGridL12
    block: fixed
    entry:
      name: vGridL12
      description: Grid voltage L1-L2
      longdescription: "Line-to-line voltage between grid phases L1 and L2. Data code:
        40101.vGridL12"
      dtype: uint16
      unit: V
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vGridL1N
    block: fixed
    entry:
      name: vGridL1N
      description: Grid voltage L1-N
      longdescription: "Line-to-neutral voltage on grid phase L1. Data code: 40101.vGridL1N"
      dtype: uint16
      unit: V
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pGridL2
    block: fixed
    entry:
      name: pGridL2
      description: Grid active power L2
      longdescription: "Real power on grid phase L2. Data code: 40101.pGridL2"
      dtype: int32
      unit: W
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qGridL2
    block: fixed
    entry:
      name: qGridL2
      description: Grid reactive power L2
      longdescription: "Reactive power on grid phase L2. Data code: 40101.qGridL2"
      dtype: int32
      unit: Var
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sGridL2
    block: fixed
    entry:
      name: sGridL2
      description: Grid apparent power L2
      longdescription: "Apparent power on grid phase L2. Data code: 40101.sGridL2"
      dtype: uint32
      unit: VA
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfGridL2
    block: fixed
    entry:
      name: pfGridL2
      description: Grid power factor L2
      longdescription: "Power factor on grid phase L2 (unitless). Data code: 40101.pfGridL2"
      dtype: int16
      unit: N/A
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iGridL2
    block: fixed
    entry:
      name: iGridL2
      description: Grid current L2
      longdescription: "RMS current on grid phase L2. Data code: 40101.iGridL2"
      dtype: int32
      unit: A
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vGridL23
    block: fixed
    entry:
      name: vGridL23
      description: Grid voltage L2-L3
      longdescription: "Line-to-line voltage between grid phases L2 and L3. Data code:
        40101.vGridL23"
      dtype: uint16
      unit: V
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vGridL2N
    block: fixed
    entry:
      name: vGridL2N
      description: Grid voltage L2-N
      longdescription: "Line-to-neutral voltage on grid phase L2. Data code: 40101.vGridL2N"
      dtype: uint16
      unit: V
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pGridL3
    block: fixed
    entry:
      name: pGridL3
      description: Grid active power L3
      longdescription: "Real power on grid phase L3. Data code: 40101.pGridL3"
      dtype: int32
      unit: W
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qGridL3
    block: fixed
    entry:
      name: qGridL3
      description: Grid reactive power L3
      longdescription: "Reactive power on grid phase L3. Data code: 40101.qGridL3"
      dtype: int32
      unit: Var
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sGridL3
    block: fixed
    entry:
      name: sGridL3
      description: Grid apparent power L3
      longdescription: "Apparent power on grid phase L3. Data code: 40101.sGridL3"
      dtype: uint32
      unit: VA
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfGridL3
    block: fixed
    entry:
      name: pfGridL3
      description: Grid power factor L3
      longdescription: "Power factor on grid phase L3 (unitless). Data code: 40101.pfGridL3"
      dtype: int16
      unit: N/A
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iGridL3
    block: fixed
    entry:
      name: iGridL3
      description: Grid current L3
      longdescription: "RMS current on grid phase L3. Data code: 40101.iGridL3"
      dtype: int32
      unit: A
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vGridL31
    block: fixed
    entry:
      name: vGridL31
      description: Grid voltage L3-L1
      longdescription: "Line-to-line voltage between grid phases L3 and L1. Data code:
        40101.vGridL31"
      dtype: uint16
      unit: V
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vGridL3N
    block: fixed
    entry:
      name: vGridL3N
      description: Grid voltage L3-N
      longdescription: "Line-to-neutral voltage on grid phase L3. Data code: 40101.vGridL3N"
      dtype: uint16
      unit: V
      category: Grid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: reserved6
    block: fixed
    entry:
      name: reserved6
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40101.reserved6"
      dtype: string
      unit: N/A
      category: Grid
      meanings: {}
  - model: 40101
    point: bkupRelayStat
    block: fixed
    entry:
      name: bkupRelayStat
      description: Backup relay status
      longdescription: "Indicates whether the backup/output isolation relay is open or
        closed. Data code: 40101.bkupRelayStat"
      dtype: enum16
      unit: N/A
      category: Backup
      meanings:
        "0": Open(Off)
        "1": Close(On)
      friendly_meanings:
        "0": "Open (Off); 1: Close (On)"
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: pBkupTot
    block: fixed
    entry:
      name: pBkupTot
      description: Backup active power
      longdescription: "Total real power delivered to backup loads/output. Data code:
        40101.pBkupTot"
      dtype: uint32
      unit: W
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qBkupTot
    block: fixed
    entry:
      name: qBkupTot
      description: Backup reactive power
      longdescription: "Total reactive power on the backup output. Data code: 40101.qBkupTot"
      dtype: int32
      unit: Var
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sBkupTot
    block: fixed
    entry:
      name: sBkupTot
      description: Backup apparent power
      longdescription: "Total apparent power on the backup output. Data code: 40101.sBkupTot"
      dtype: uint32
      unit: VA
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfBkupTot
    block: fixed
    entry:
      name: pfBkupTot
      description: Backup power factor
      longdescription: "Overall power factor measured on the backup output. Data code:
        40101.pfBkupTot"
      dtype: int16
      unit: N/A
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iBkupTot
    block: fixed
    entry:
      name: iBkupTot
      description: Backup current
      longdescription: "Sum of RMS currents across backup phases. Data code: 40101.iBkupTot"
      dtype: uint32
      unit: A
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vBkupLL
    block: fixed
    entry:
      name: vBkupLL
      description: Voltage backup LL
      longdescription: "Line-to-line voltage measured on the backup output. Data code:
        40101.vBkupLL"
      dtype: uint16
      unit: V
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vBkupLN
    block: fixed
    entry:
      name: vBkupLN
      description: Voltage backup LN
      longdescription: "Line-to-neutral voltage measured on the backup output. Data
        code: 40101.vBkupLN"
      dtype: uint16
      unit: V
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: fBkup
    block: fixed
    entry:
      name: fBkup
      description: Backup frequency
      longdescription: "Measured frequency on the backup output when islanded or
        supported. Data code: 40101.fBkup"
      dtype: uint16
      unit: Hz
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Freq
  - model: 40101
    point: pBkupL1
    block: fixed
    entry:
      name: pBkupL1
      description: Backup active power L1
      longdescription: "Real power on backup phase L1. Data code: 40101.pBkupL1"
      dtype: uint32
      unit: W
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qBkupL1
    block: fixed
    entry:
      name: qBkupL1
      description: Backup reactive power L1
      longdescription: "Reactive power on backup phase L1. Data code: 40101.qBkupL1"
      dtype: int32
      unit: Var
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sBkupL1
    block: fixed
    entry:
      name: sBkupL1
      description: Backup apparent power L1
      longdescription: "Apparent power on backup phase L1. Data code: 40101.sBkupL1"
      dtype: uint32
      unit: VA
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfBkupL1
    block: fixed
    entry:
      name: pfBkupL1
      description: Backup power factor L1
      longdescription: "Power factor on backup phase L1 (unitless). Data code: 40101.pfBkupL1"
      dtype: int16
      unit: N/A
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iBkupL1
    block: fixed
    entry:
      name: iBkupL1
      description: Backup current L1
      longdescription: "RMS current on backup phase L1. Data code: 40101.iBkupL1"
      dtype: uint32
      unit: A
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vBkupL12
    block: fixed
    entry:
      name: vBkupL12
      description: Backup voltage L1-L2
      longdescription: "Line-to-line voltage between backup phases L1 and L2. Data
        code: 40101.vBkupL12"
      dtype: uint16
      unit: V
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vBkupL1N
    block: fixed
    entry:
      name: vBkupL1N
      description: Backup voltage L1-N
      longdescription: "Line-to-neutral voltage on backup phase L1. Data code: 40101.vBkupL1N"
      dtype: uint16
      unit: V
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pBkupL2
    block: fixed
    entry:
      name: pBkupL2
      description: Backup active power L2
      longdescription: "Real power on backup phase L2. Data code: 40101.pBkupL2"
      dtype: uint32
      unit: W
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qBkupL2
    block: fixed
    entry:
      name: qBkupL2
      description: Backup reactive power L2
      longdescription: "Reactive power on backup phase L2. Data code: 40101.qBkupL2"
      dtype: int32
      unit: Var
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sBkupL2
    block: fixed
    entry:
      name: sBkupL2
      description: Backup apparent power L2
      longdescription: "Apparent power on backup phase L2. Data code: 40101.sBkupL2"
      dtype: uint32
      unit: VA
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfBkupL2
    block: fixed
    entry:
      name: pfBkupL2
      description: Backup power factor L2
      longdescription: "Power factor on backup phase L2 (unitless). Data code: 40101.pfBkupL2"
      dtype: int16
      unit: N/A
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iBkupL2
    block: fixed
    entry:
      name: iBkupL2
      description: Backup current L2
      longdescription: "RMS current on backup phase L2. Data code: 40101.iBkupL2"
      dtype: uint32
      unit: A
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vBkupL23
    block: fixed
    entry:
      name: vBkupL23
      description: Backup voltage L2-L3
      longdescription: "Line-to-line voltage between backup phases L2 and L3. Data
        code: 40101.vBkupL23"
      dtype: uint16
      unit: V
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vBkupL2N
    block: fixed
    entry:
      name: vBkupL2N
      description: Backup voltage L2-N
      longdescription: "Line-to-neutral voltage on backup phase L2. Data code: 40101.vBkupL2N"
      dtype: uint16
      unit: V
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pBkupL3
    block: fixed
    entry:
      name: pBkupL3
      description: Backup active power L3
      longdescription: "Real power on backup phase L3. Data code: 40101.pBkupL3"
      dtype: uint32
      unit: W
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qBkupL3
    block: fixed
    entry:
      name: qBkupL3
      description: Backup reactive power L3
      longdescription: "Reactive power on backup phase L3. Data code: 40101.qBkupL3"
      dtype: int32
      unit: Var
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sBkupL3
    block: fixed
    entry:
      name: sBkupL3
      description: Backup apparent power L3
      longdescription: "Apparent power on backup phase L3. Data code: 40101.sBkupL3"
      dtype: uint32
      unit: VA
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfBkupL3
    block: fixed
    entry:
      name: pfBkupL3
      description: Backup power factor L3
      longdescription: "Power factor on backup phase L3 (unitless). Data code: 40101.pfBkupL3"
      dtype: int16
      unit: N/A
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iBkupL3
    block: fixed
    entry:
      name: iBkupL3
      description: Backup current L3
      longdescription: "RMS current on backup phase L3. Data code: 40101.iBkupL3"
      dtype: uint32
      unit: A
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vBkupL31
    block: fixed
    entry:
      name: vBkupL31
      description: Backup voltage L3-L1
      longdescription: "Line-to-line voltage between backup phases L3 and L1. Data
        code: 40101.vBkupL31"
      dtype: uint16
      unit: V
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vBkupL3N
    block: fixed
    entry:
      name: vBkupL3N
      description: Backup voltage L3-N
      longdescription: "Line-to-neutral voltage on backup phase L3. Data code: 40101.vBkupL3N"
      dtype: uint16
      unit: V
      category: Backup
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: reserved7
    block: fixed
    entry:
      name: reserved7
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40101.reserved7"
      dtype: string
      unit: N/A
      category: Backup
      meanings: {}
  - model: 40101
    point: pLoad
    block: fixed
    entry:
      name: pLoad
      description: Load active power
      longdescription: "Total real power consumed by connected loads. Data code: 40101.pLoad"
      dtype: uint32
      unit: W
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qLoadTot
    block: fixed
    entry:
      name: qLoadTot
      description: Load reactive power
      longdescription: "Total reactive power drawn by the loads. Data code: 40101.qLoadTot"
      dtype: int32
      unit: Var
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sLoadTot
    block: fixed
    entry:
      name: sLoadTot
      description: Load apparent power
      longdescription: "Vector sum of real and reactive load power. Indicates total
        kVA capacity demanded by the loads. Data code: 40101.sLoadTot"
      dtype: uint32
      unit: VA
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfLoadTot
    block: fixed
    entry:
      name: pfLoadTot
      description: Load power factor
      longdescription: "Overall power factor of the loads (unitless). Data code:
        40101.pfLoadTot"
      dtype: int16
      unit: N/A
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iLoadTot
    block: fixed
    entry:
      name: iLoadTot
      description: Load current
      longdescription: "Sum of RMS currents across active load phases.  Data code:
        40101.iLoadTot"
      dtype: uint32
      unit: A
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vLoadLL
    block: fixed
    entry:
      name: vLoadLL
      description: Voltage load LL
      longdescription: "Line-to-line RMS voltage measured at the load connection. Data
        code: 40101.vLoadLL"
      dtype: uint16
      unit: V
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vLoadLN
    block: fixed
    entry:
      name: vLoadLN
      description: Voltage load LN
      longdescription: "Line-to-neutral RMS voltage measured at the load connection.
        Data code: 40101.vLoadLN"
      dtype: uint16
      unit: V
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: fLoad
    block: fixed
    entry:
      name: fLoad
      description: Load frequency
      longdescription: "Measured AC frequency at the load connection point. Data code:
        40101.fLoad"
      dtype: uint16
      unit: Hz
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Freq
  - model: 40101
    point: pLoadL1
    block: fixed
    entry:
      name: pLoadL1
      description: Load active power L1
      longdescription: "Real power consumed by loads on phase L1. Data code: 40101.pLoadL1"
      dtype: uint32
      unit: W
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qLoadL1
    block: fixed
    entry:
      name: qLoadL1
      description: Load reactive power L1
      longdescription: "Reactive power on phase L1 of the load. Data code: 40101.qLoadL1"
      dtype: int32
      unit: Var
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sLoadL1
    block: fixed
    entry:
      name: sLoadL1
      description: Load apparent power L1
      longdescription: "Apparent power on phase L1 of the load. Data code: 40101.sLoadL1"
      dtype: uint32
      unit: VA
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfLoadL1
    block: fixed
    entry:
      name: pfLoadL1
      description: Load power factor L1
      longdescription: "Phase L1 load power factor (unitless). Data code: 40101.pfLoadL1"
      dtype: int16
      unit: N/A
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iLoadL1
    block: fixed
    entry:
      name: iLoadL1
      description: Load current L1
      longdescription: "RMS current of the load on phase L1. Data code: 40101.iLoadL1"
      dtype: uint32
      unit: A
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vLoadL12
    block: fixed
    entry:
      name: vLoadL12
      description: Load voltage L1-L2
      longdescription: "Line-to-line voltage between L1 and L2 at the load. Data code:
        40101.vLoadL12"
      dtype: uint16
      unit: V
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vLoadL1N
    block: fixed
    entry:
      name: vLoadL1N
      description: Load voltage L1-N
      longdescription: "Line-to-neutral voltage on L1 at the load. Data code: 40101.vLoadL1N"
      dtype: uint16
      unit: V
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pLoadL2
    block: fixed
    entry:
      name: pLoadL2
      description: Load active power L2
      longdescription: "Real power consumed by loads on phase L2. Data code: 40101.pLoadL2"
      dtype: uint32
      unit: W
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qLoadL2
    block: fixed
    entry:
      name: qLoadL2
      description: Load reactive power L2
      longdescription: "Reactive power on phase L2 of the load. Data code: 40101.qLoadL2"
      dtype: int32
      unit: Var
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sLoadL2
    block: fixed
    entry:
      name: sLoadL2
      description: Load apparent power L2
      longdescription: "Apparent power on phase L2 of the load. Data code: 40101.sLoadL2"
      dtype: uint32
      unit: VA
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfLoadL2
    block: fixed
    entry:
      name: pfLoadL2
      description: Load power factor L2
      longdescription: "Phase L2 load power factor (unitless). Data code: 40101.pfLoadL2"
      dtype: int16
      unit: N/A
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iLoadL2
    block: fixed
    entry:
      name: iLoadL2
      description: Load current L2
      longdescription: "RMS current of the load on phase L2. Data code: 40101.iLoadL2"
      dtype: uint32
      unit: A
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vLoadL23
    block: fixed
    entry:
      name: vLoadL23
      description: Load voltage L2-L3
      longdescription: "Line-to-line voltage between L2 and L3 at the load. Data code:
        40101.vLoadL23"
      dtype: uint16
      unit: V
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vLoadL2N
    block: fixed
    entry:
      name: vLoadL2N
      description: Load voltage L2-N
      longdescription: "Line-to-neutral voltage on L2 at the load. Data code: 40101.vLoadL2N"
      dtype: uint16
      unit: V
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pLoadL3
    block: fixed
    entry:
      name: pLoadL3
      description: Load active power L3
      longdescription: "Real power consumed by loads on phase L3. Data code: 40101.pLoadL3"
      dtype: uint32
      unit: W
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qLoadL3
    block: fixed
    entry:
      name: qLoadL3
      description: Load reactive power L3
      longdescription: "Reactive power on phase L3 of the load. Data code: 40101.qLoadL3"
      dtype: int32
      unit: Var
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sLoadL3
    block: fixed
    entry:
      name: sLoadL3
      description: Load apparent power L3
      longdescription: "Apparent power on phase L3 of the load. Data code: 40101.sLoadL3"
      dtype: uint32
      unit: VA
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfLoadL3
    block: fixed
    entry:
      name: pfLoadL3
      description: Load power factor L3
      longdescription: "Phase L3 load power factor (unitless). Data code: 40101.pfLoadL3"
      dtype: int16
      unit: N/A
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iLoadL3
    block: fixed
    entry:
      name: iLoadL3
      description: Load current L3
      longdescription: "RMS current of the load on phase L3. Data code: 40101.iLoadL3"
      dtype: uint32
      unit: A
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vLoadL31
    block: fixed
    entry:
      name: vLoadL31
      description: Load voltage L3-L1
      longdescription: "Line-to-line voltage between L3 and L1 at the load. Data code:
        40101.vLoadL31"
      dtype: uint16
      unit: V
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vLoadL3N
    block: fixed
    entry:
      name: vLoadL3N
      description: Load voltage L3-N
      longdescription: "Line-to-neutral voltage on L3 at the load. Data code: 40101.vLoadL3N"
      dtype: uint16
      unit: V
      category: Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: reserved8
    block: fixed
    entry:
      name: reserved8
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40101.reserved8"
      dtype: string
      unit: N/A
      category: Load
      meanings: {}
  - model: 40101
    point: genDryContactState
    block: fixed
    entry:
      name: genDryContactState
      description: Generator Contactor Status
      longdescription: "Value from Site Configuration Generator/Generator. Indicates
        the current state of the generator control contactor. Data code:
        40101.genDryContactState"
      dtype: enum16
      unit: N/A
      category: Generator
      meanings:
        "0": Open(Off)
        "1": Close(On)
      friendly_meanings:
        "0": Open (Off)
        "1": Close (On)
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: genRelayStat
    block: fixed
    entry:
      name: genRelayStat
      description: Generator relay status
      longdescription: "State of the generator start/transfer relay as controlled by
        the inverter. Data code: 40101.genRelayStat"
      dtype: enum16
      unit: N/A
      category: Generator
      meanings:
        "0": Open(Off)
        "1": Close(On)
      friendly_meanings:
        "0": "Open (Off); 1: Close (On)"
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: pGenTot
    block: fixed
    entry:
      name: pGenTot
      description: Generator active power
      longdescription: "Total real power delivered from the generator to the system.
        Data code: 40101.pGenTot"
      dtype: int32
      unit: W
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qGenTot
    block: fixed
    entry:
      name: qGenTot
      description: Generator reactive power
      longdescription: "Total reactive power measured on the generator connection.
        Data code: 40101.qGenTot"
      dtype: int32
      unit: Var
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sGenTot
    block: fixed
    entry:
      name: sGenTot
      description: Generator apparent power
      longdescription: "Total apparent power at the generator connection. Data code:
        40101.sGenTot"
      dtype: uint32
      unit: VA
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfGenTot
    block: fixed
    entry:
      name: pfGenTot
      description: Generator power factor
      longdescription: "Overall generator power factor (unitless). Data code: 40101.pfGenTot"
      dtype: int16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iGenTot
    block: fixed
    entry:
      name: iGenTot
      description: Generator current
      longdescription: "Sum of RMS currents across generator phases. Data code: 40101.iGenTot"
      dtype: int32
      unit: A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vGenLL
    block: fixed
    entry:
      name: vGenLL
      description: Voltage generator LL
      longdescription: "Line-to-line RMS voltage at the generator connection. Data
        code: 40101.vGenLL"
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vGenLN
    block: fixed
    entry:
      name: vGenLN
      description: Voltage generator LN
      longdescription: "Line-to-neutral RMS voltage at the generator connection. Data
        code: 40101.vGenLN"
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: fGen
    block: fixed
    entry:
      name: fGen
      description: Generator frequency
      longdescription: "Measured frequency of the generator output. Data code: 40101.fGen"
      dtype: uint16
      unit: Hz
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Freq
  - model: 40101
    point: pGenL1
    block: fixed
    entry:
      name: pGenL1
      description: Generator active power L1
      longdescription: "Real power on generator phase L1. Data code: 40101.pGenL1"
      dtype: int32
      unit: W
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qGenL1
    block: fixed
    entry:
      name: qGenL1
      description: Generator reactive power L1
      longdescription: "Reactive power on generator phase L1. Data code: 40101.qGenL1"
      dtype: int32
      unit: Var
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sGenL1
    block: fixed
    entry:
      name: sGenL1
      description: Generator apparent power L1
      longdescription: "Apparent power on generator phase L1. Data code: 40101.sGenL1"
      dtype: uint32
      unit: VA
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfGenL1
    block: fixed
    entry:
      name: pfGenL1
      description: Generator power factor L1
      longdescription: "Phase L1 generator power factor (unitless). Data code: 40101.pfGenL1"
      dtype: int16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iGenL1
    block: fixed
    entry:
      name: iGenL1
      description: Generator current L1
      longdescription: "RMS current on generator phase L1. Data code: 40101.iGenL1"
      dtype: int32
      unit: A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vGenL12
    block: fixed
    entry:
      name: vGenL12
      description: Generator voltage L1-L2
      longdescription: "Line-to-line voltage between generator phases L1 and L2. Data
        code: 40101.vGenL12"
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vGenL1N
    block: fixed
    entry:
      name: vGenL1N
      description: Generator voltage L1-N
      longdescription: "Line-to-neutral voltage on generator phase L1. Data code: 40101.vGenL1N"
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pGenL2
    block: fixed
    entry:
      name: pGenL2
      description: Generator active power L2
      longdescription: "Real power on generator phase L2. Data code: 40101.pGenL2"
      dtype: int32
      unit: W
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qGenL2
    block: fixed
    entry:
      name: qGenL2
      description: Generator reactive power L2
      longdescription: "Reactive power on generator phase L2. Data code: 40101.qGenL2"
      dtype: int32
      unit: Var
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sGenL2
    block: fixed
    entry:
      name: sGenL2
      description: Generator apparent power L2
      longdescription: "Apparent power on generator phase L2. Data code: 40101.sGenL2"
      dtype: uint32
      unit: VA
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfGenL2
    block: fixed
    entry:
      name: pfGenL2
      description: Generator power factor L2
      longdescription: "Phase L2 generator power factor (unitless). Data code: 40101.pfGenL2"
      dtype: int16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iGenL2
    block: fixed
    entry:
      name: iGenL2
      description: Generator current L2
      longdescription: "RMS current on generator phase L2. Data code: 40101.iGenL2"
      dtype: int32
      unit: A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vGenL23
    block: fixed
    entry:
      name: vGenL23
      description: Generator voltage L2-L3
      longdescription: "Line-to-line voltage between generator phases L2 and L3. Data
        code: 40101.vGenL23"
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vGenL2N
    block: fixed
    entry:
      name: vGenL2N
      description: Generator voltage L2-N
      longdescription: "Line-to-neutral voltage on generator phase L2. Data code: 40101.vGenL2N"
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pGenL3
    block: fixed
    entry:
      name: pGenL3
      description: Generator active power L3
      longdescription: "Real power on generator phase L3. Data code: 40101.pGenL3"
      dtype: int32
      unit: W
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qGenL3
    block: fixed
    entry:
      name: qGenL3
      description: Generator reactive power L3
      longdescription: "Reactive power on generator phase L3. Data code: 40101.qGenL3"
      dtype: int32
      unit: Var
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sGenL3
    block: fixed
    entry:
      name: sGenL3
      description: Generator apparent power L3
      longdescription: "Apparent power on generator phase L3. Data code: 40101.sGenL3"
      dtype: uint32
      unit: VA
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfGenL3
    block: fixed
    entry:
      name: pfGenL3
      description: Generator power factor L3
      longdescription: "Phase L3 generator power factor (unitless). Data code: 40101.pfGenL3"
      dtype: int16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iGenL3
    block: fixed
    entry:
      name: iGenL3
      description: Generator current L3
      longdescription: "RMS current on generator phase L3. Data code: 40101.iGenL3"
      dtype: int32
      unit: A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vGenL31
    block: fixed
    entry:
      name: vGenL31
      description: Generator voltage L3-L1
      longdescription: "Line-to-line voltage between generator phases L3 and L1. Data
        code: 40101.vGenL31"
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vGenL3N
    block: fixed
    entry:
      name: vGenL3N
      description: Generator voltage L3-N
      longdescription: "Line-to-neutral voltage on generator phase L3. Data code: 40101.vGenL3N"
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: genActFlg
    block: fixed
    entry:
      name: genActFlg
      description: Generator Input Active
      longdescription: 'Indicates whether the generator input is active. The generator
        is "Activated" when the port is configured as a generator and voltage
        greater than 100 Vac is detected; otherwise it is, “Not active.” Data
        code: 40101.genActFlg'
      dtype: enum16
      unit: N/A
      category: Generator
      meanings:
        "0": Not activated
        "1": Activated
      friendly_meanings:
        "0": Not Active
        "1": Activated
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: reserved9
    block: fixed
    entry:
      name: reserved9
      description: Reserved
      longdescription: "Reserved register. No current function. Data code: 40101.reserved9"
      dtype: string
      unit: N/A
      category: Generator
      meanings: {}
  - model: 40101
    point: pAcCplTot
    block: fixed
    entry:
      name: pAcCplTot
      description: AC couple active power
      longdescription: "Total real power measured for AC-coupled input. Data code:
        40101.pAcCplTot"
      dtype: int32
      unit: W
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Standard
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Level of Detail
        label_text: Extended
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qAcCplTot
    block: fixed
    entry:
      name: qAcCplTot
      description: AC couple reactive power
      longdescription: "Total reactive power measured for AC-coupled input. Data code:
        40101.qAcCplTot"
      dtype: int32
      unit: Var
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sAcCplTot
    block: fixed
    entry:
      name: sAcCplTot
      description: AC couple apparent power
      longdescription: "Total apparent power measured for AC-coupled input. Data code:
        40101.sAcCplTot"
      dtype: uint32
      unit: VA
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfAcCplTot
    block: fixed
    entry:
      name: pfAcCplTot
      description: AC couple power factor
      longdescription: "Overall power factor for AC-coupled input. Data code: 40101.pfAcCplTot"
      dtype: int16
      unit: N/A
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iAcCplTot
    block: fixed
    entry:
      name: iAcCplTot
      description: AC couple current
      longdescription: "Sum of RMS currents across AC-coupled phases. Data code:
        40101.iAcCplTot"
      dtype: int32
      unit: A
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vAcCplLL
    block: fixed
    entry:
      name: vAcCplLL
      description: AC couple voltage LL
      longdescription: "Line-to-line RMS voltage at the AC-coupled input. Data code:
        40101.vAcCplLL"
      dtype: uint16
      unit: V
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vAcCplLN
    block: fixed
    entry:
      name: vAcCplLN
      description: AC couple voltage LN
      longdescription: "Line-to-neutral RMS voltage at the AC-coupled input. Data
        code: 40101.vAcCplLN"
      dtype: uint16
      unit: V
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: fAcCpl
    block: fixed
    entry:
      name: fAcCpl
      description: AC couple frequency
      longdescription: "Measured AC frequency at the AC-coupled input. Data code: 40101.fAcCpl"
      dtype: uint16
      unit: Hz
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Freq
  - model: 40101
    point: pAcCplL1
    block: fixed
    entry:
      name: pAcCplL1
      description: AC couple active power L1
      longdescription: "Real power on AC-coupled phase L1. Data code: 40101.pAcCplL1"
      dtype: int32
      unit: W
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qAcCplL1
    block: fixed
    entry:
      name: qAcCplL1
      description: AC couple reactive power L1
      longdescription: "Reactive power on AC-coupled phase L1. Data code: 40101.qAcCplL1"
      dtype: int32
      unit: Var
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sAcCplL1
    block: fixed
    entry:
      name: sAcCplL1
      description: AC couple apparent power L1
      longdescription: "Apparent power on AC-coupled phase L1. Data code: 40101.sAcCplL1"
      dtype: uint32
      unit: VA
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfAcCplL1
    block: fixed
    entry:
      name: pfAcCplL1
      description: AC couple power factor L1
      longdescription: "Power factor on AC-coupled phase L1. Data code: 40101.pfAcCplL1"
      dtype: int16
      unit: N/A
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iAcCplL1
    block: fixed
    entry:
      name: iAcCplL1
      description: AC couple current L1
      longdescription: "RMS current on AC-coupled phase L1. Data code: 40101.iAcCplL1"
      dtype: int32
      unit: A
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vAcCplL12
    block: fixed
    entry:
      name: vAcCplL12
      description: AC couple voltage L1-L2
      longdescription: "Line-to-line voltage between L1 and L2 at the AC-coupled
        input. Data code: 40101.vAcCplL12"
      dtype: uint16
      unit: V
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vAcCplL1N
    block: fixed
    entry:
      name: vAcCplL1N
      description: AC couple voltage L1-N
      longdescription: "Line-to-neutral voltage on phase L1 at the AC-coupled input.
        Data code: 40101.vAcCplL1N"
      dtype: uint16
      unit: V
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pAcCplL2
    block: fixed
    entry:
      name: pAcCplL2
      description: AC couple active power L2
      longdescription: "Real power on AC-coupled phase L2. Data code: 40101.pAcCplL2"
      dtype: int32
      unit: W
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qAcCplL2
    block: fixed
    entry:
      name: qAcCplL2
      description: AC couple reactive power L2
      longdescription: "Reactive power on AC-coupled phase L2. Data code: 40101.qAcCplL2"
      dtype: int32
      unit: Var
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sAcCplL2
    block: fixed
    entry:
      name: sAcCplL2
      description: AC couple apparent power L2
      longdescription: "Apparent power on AC-coupled phase L2. Data code: 40101.sAcCplL2"
      dtype: uint32
      unit: VA
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfAcCplL2
    block: fixed
    entry:
      name: pfAcCplL2
      description: AC couple power factor L2
      longdescription: "Power factor on AC-coupled phase L2. Data code: 40101.pfAcCplL2"
      dtype: int16
      unit: N/A
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iAcCplL2
    block: fixed
    entry:
      name: iAcCplL2
      description: AC couple current L2
      longdescription: "RMS current on AC-coupled phase L2. Data code: 40101.iAcCplL2"
      dtype: int32
      unit: A
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vAcCplL23
    block: fixed
    entry:
      name: vAcCplL23
      description: AC couple voltage L2-L3
      longdescription: "Line-to-line voltage between L2 and L3 at the AC-coupled
        input. Data code: 40101.vAcCplL23"
      dtype: uint16
      unit: V
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vAcCplL2N
    block: fixed
    entry:
      name: vAcCplL2N
      description: AC couple voltage L2-N
      longdescription: "Line-to-neutral voltage on phase L2 at the AC-coupled input.
        Data code: 40101.vAcCplL2N"
      dtype: uint16
      unit: V
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pAcCplL3
    block: fixed
    entry:
      name: pAcCplL3
      description: AC couple active power L3
      longdescription: "Real power on AC-coupled phase L3. Data code: 40101.pAcCplL3"
      dtype: int32
      unit: W
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qAcCplL3
    block: fixed
    entry:
      name: qAcCplL3
      description: AC couple reactive power L3
      longdescription: "Reactive power on AC-coupled phase L3. Data code: 40101.qAcCplL3"
      dtype: int32
      unit: Var
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sAcCplL3
    block: fixed
    entry:
      name: sAcCplL3
      description: AC couple apparent power L3
      longdescription: "Apparent power on AC-coupled phase L3. Data code: 40101.sAcCplL3"
      dtype: uint32
      unit: VA
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfAcCplL3
    block: fixed
    entry:
      name: pfAcCplL3
      description: AC couple power factor L3
      longdescription: "Power factor on AC-coupled phase L3. Data code: 40101.pfAcCplL3"
      dtype: int16
      unit: N/A
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iAcCplL3
    block: fixed
    entry:
      name: iAcCplL3
      description: AC couple current L3
      longdescription: "RMS current on AC-coupled phase L3. Data code: 40101.iAcCplL3"
      dtype: int32
      unit: A
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vAcCplL31
    block: fixed
    entry:
      name: vAcCplL31
      description: AC couple voltage L3-L1
      longdescription: "Line-to-line voltage between L3 and L1 at the AC-coupled
        input. Data code: 40101.vAcCplL31"
      dtype: uint16
      unit: V
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vAcCplL3N
    block: fixed
    entry:
      name: vAcCplL3N
      description: AC couple voltage L3-N
      longdescription: "Line-to-neutral voltage on phase L3 at the AC-coupled input.
        Data code: 40101.vAcCplL3N"
      dtype: uint16
      unit: V
      category: AC Couple
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: acCplActFlg
    block: fixed
    entry:
      name: acCplActFlg
      description: AC Couple active flag
      longdescription: "Indicates whether AC-coupled functionality is enabled. Data
        code: 40101.acCplActFlg"
      dtype: enum16
      unit: N/A
      category: AC Couple
      meanings:
        "0": Not activated
        "1": Activated
      friendly_meanings:
        "0": "Not activated; 1: Activated"
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: reserved10
    block: fixed
    entry:
      name: reserved10
      description: Reserved
      longdescription: "Reserved register. Data code: 40101.reserved10"
      dtype: string
      unit: N/A
      category: AC Couple
      meanings: {}
  - model: 40101
    point: pSmartloadTot
    block: fixed
    entry:
      name: pSmartloadTot
      description: Smart load active power
      longdescription: "Total real power measured for smart load. Data code:
        40101.pSmartloadTot"
      dtype: int32
      unit: W
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qSmartloadTot
    block: fixed
    entry:
      name: qSmartloadTot
      description: Smart load reactive power
      longdescription: "Total reactive power measured for smart load. Data code:
        40101.qSmartloadTot"
      dtype: int32
      unit: Var
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sSmartloadTot
    block: fixed
    entry:
      name: sSmartloadTot
      description: Smart load apparent power
      longdescription: "Total apparent power measured for smart load. Data code:
        40101.sSmartloadTot"
      dtype: uint32
      unit: VA
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfSmartloadTot
    block: fixed
    entry:
      name: pfSmartloadTot
      description: Smart load power factor
      longdescription: "Overall power factor for smart load. Data code: 40101.pfSmartloadTot"
      dtype: int16
      unit: N/A
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iSmartloadTot
    block: fixed
    entry:
      name: iSmartloadTot
      description: Smart load current
      longdescription: "Sum of RMS currents across smart-load phases. Data code:
        40101.iSmartloadTot"
      dtype: int32
      unit: A
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vSmartloadLL
    block: fixed
    entry:
      name: vSmartloadLL
      description: Smart load voltage LL
      longdescription: "Line-to-line RMS voltage at the smart-load connection. Data
        code: 40101.vSmartloadLL"
      dtype: uint16
      unit: V
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vSmartloadLN
    block: fixed
    entry:
      name: vSmartloadLN
      description: Smart load voltage LN
      longdescription: "Line-to-neutral RMS voltage at the smart-load connection. Data
        code: 40101.vSmartloadLN"
      dtype: uint16
      unit: V
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: fSmartload
    block: fixed
    entry:
      name: fSmartload
      description: Smart load frequency
      longdescription: "Measured AC frequency at the smart-load connection. Data code:
        40101.fSmartload"
      dtype: uint16
      unit: Hz
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Freq
  - model: 40101
    point: pSmartloadL1
    block: fixed
    entry:
      name: pSmartloadL1
      description: Smart load active power L1
      longdescription: "Real power on smart-load phase L1. Data code: 40101.pSmartloadL1"
      dtype: int32
      unit: W
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qSmartloadL1
    block: fixed
    entry:
      name: qSmartloadL1
      description: Smart load reactive power L1
      longdescription: "Reactive power on smart-load phase L1. Data code: 40101.qSmartloadL1"
      dtype: int32
      unit: Var
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sSmartloadL1
    block: fixed
    entry:
      name: sSmartloadL1
      description: Smart load apparent power L1
      longdescription: "Apparent power on smart-load phase L1. Data code: 40101.sSmartloadL1"
      dtype: uint32
      unit: VA
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfSmartloadL1
    block: fixed
    entry:
      name: pfSmartloadL1
      description: Smart load power factor L1
      longdescription: "Power factor on smart-load phase L1. Data code: 40101.pfSmartloadL1"
      dtype: int16
      unit: N/A
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iSmartloadL1
    block: fixed
    entry:
      name: iSmartloadL1
      description: Smart load current L1
      longdescription: "RMS current on smart-load phase L1. Data code: 40101.iSmartloadL1"
      dtype: int32
      unit: A
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vSmartloadL12
    block: fixed
    entry:
      name: vSmartloadL12
      description: Smart load voltage L1-L2
      longdescription: "Line-to-line voltage between L1 and L2 at the smart-load
        connection. Data code: 40101.vSmartloadL12"
      dtype: uint16
      unit: V
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vSmartloadL1N
    block: fixed
    entry:
      name: vSmartloadL1N
      description: Smart load voltage L1-N
      longdescription: "Line-to-neutral voltage on phase L1 at the smart-load
        connection. Data code: 40101.vSmartloadL1N"
      dtype: uint16
      unit: V
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pSmartloadL2
    block: fixed
    entry:
      name: pSmartloadL2
      description: Smart load active power L2
      longdescription: "Real power on smart-load phase L2. Data code: 40101.pSmartloadL2"
      dtype: int32
      unit: W
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qSmartloadL2
    block: fixed
    entry:
      name: qSmartloadL2
      description: Smart load reactive power L2
      longdescription: "Reactive power on smart-load phase L2. Data code: 40101.qSmartloadL2"
      dtype: int32
      unit: Var
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sSmartloadL2
    block: fixed
    entry:
      name: sSmartloadL2
      description: Smart load apparent power L2
      longdescription: "Apparent power on smart-load phase L2. Data code: 40101.sSmartloadL2"
      dtype: uint32
      unit: VA
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfSmartloadL2
    block: fixed
    entry:
      name: pfSmartloadL2
      description: Smart load power factor L2
      longdescription: "Power factor on smart-load phase L2. Data code: 40101.pfSmartloadL2"
      dtype: int16
      unit: N/A
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iSmartloadL2
    block: fixed
    entry:
      name: iSmartloadL2
      description: Smart load current L2
      longdescription: "RMS current on smart-load phase L2. Data code: 40101.iSmartloadL2"
      dtype: int32
      unit: A
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vSmartloadL23
    block: fixed
    entry:
      name: vSmartloadL23
      description: Smart load voltage L2-L3
      longdescription: "Line-to-line voltage between L2 and L3 at the smart-load
        connection. Data code: 40101.vSmartloadL23"
      dtype: uint16
      unit: V
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vSmartloadL2N
    block: fixed
    entry:
      name: vSmartloadL2N
      description: Smart load voltage L2-N
      longdescription: "Line-to-neutral voltage on phase L2 at the smart-load
        connection. Data code: 40101.vSmartloadL2N"
      dtype: uint16
      unit: V
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: pSmartloadL3
    block: fixed
    entry:
      name: pSmartloadL3
      description: Smart load active power L3
      longdescription: "Real power on smart-load phase L3. Data code: 40101.pSmartloadL3"
      dtype: int32
      unit: W
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: qSmartloadL3
    block: fixed
    entry:
      name: qSmartloadL3
      description: Smart load reactive power L3
      longdescription: "Reactive power on smart-load phase L3. Data code: 40101.qSmartloadL3"
      dtype: int32
      unit: Var
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: sSmartloadL3
    block: fixed
    entry:
      name: sSmartloadL3
      description: Smart load apparent power L3
      longdescription: "Apparent power on smart-load phase L3. Data code: 40101.sSmartloadL3"
      dtype: uint32
      unit: VA
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Power
  - model: 40101
    point: pfSmartloadL3
    block: fixed
    entry:
      name: pfSmartloadL3
      description: Smart load power factor L3
      longdescription: "Power factor on smart-load phase L3. Data code: 40101.pfSmartloadL3"
      dtype: int16
      unit: N/A
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
  - model: 40101
    point: iSmartloadL3
    block: fixed
    entry:
      name: iSmartloadL3
      description: Smart load current L3
      longdescription: "RMS current on smart-load phase L3. Data code: 40101.iSmartloadL3"
      dtype: int32
      unit: A
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Current
  - model: 40101
    point: vSmartloadL31
    block: fixed
    entry:
      name: vSmartloadL31
      description: Smart load voltage L3-L1
      longdescription: "Line-to-line voltage between L3 and L1 at the smart-load
        connection. Data code: 40101.vSmartloadL31"
      dtype: uint16
      unit: V
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: vSmartloadL3N
    block: fixed
    entry:
      name: vSmartloadL3N
      description: Smart load voltage L3-N
      longdescription: "Line-to-neutral voltage on phase L3 at the smart-load
        connection. Data code: 40101.vSmartloadL3N"
      dtype: uint16
      unit: V
      category: Smart Load
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Volt
  - model: 40101
    point: smartloadActFlg
    block: fixed
    entry:
      name: smartloadActFlg
      description: Smart load active flag
      longdescription: "Indicates whether smart-load functionality is enabled. Data
        code: 40101.smartloadActFlg"
      dtype: enum16
      unit: N/A
      category: Smart Load
      meanings:
        "0": Not activated
        "1": Activated
      friendly_meanings:
        "0": "Not activated; 1: Activated"
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Type of Data
        label_text: Status
  - model: 40101
    point: reserved11
    block: fixed
    entry:
      name: reserved11
      description: Reserved
      longdescription: "Reserved register. Data code: 40101.reserved11"
      dtype: string
      unit: N/A
      category: Smart Load
      meanings: {}
  - model: 40101
    point: A_SF
    block: fixed
    entry:
      name: A_SF
      description: A_SF
      longdescription: "Current scale factor register. Data code: 40101.A_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: V_SF
    block: fixed
    entry:
      name: V_SF
      description: V_SF
      longdescription: "Voltage scale factor register. Data code: 40101.V_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: Vcell_SF
    block: fixed
    entry:
      name: Vcell_SF
      description: Vcell_SF
      longdescription: "Cell-voltage scale factor register. Data code: 40101.Vcell_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: Hz_SF
    block: fixed
    entry:
      name: Hz_SF
      description: Hz_SF
      longdescription: "Frequency scale factor register. Data code: 40101.Hz_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: W_SF
    block: fixed
    entry:
      name: W_SF
      description: W_SF
      longdescription: "Active-power scale factor register. Data code: 40101.W_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: PF_SF
    block: fixed
    entry:
      name: PF_SF
      description: PF_SF
      longdescription: "Power-factor scale factor register. Data code: 40101.PF_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: VA_SF
    block: fixed
    entry:
      name: VA_SF
      description: VA_SF
      longdescription: "Apparent-power scale factor register. Data code: 40101.VA_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: Var_SF
    block: fixed
    entry:
      name: Var_SF
      description: Var_SF
      longdescription: "Reactive-power scale factor register. Data code: 40101.Var_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: Tmp_SF
    block: fixed
    entry:
      name: Tmp_SF
      description: Tmp_SF
      longdescription: "Temperature scale factor register. Data code: 40101.Tmp_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: Pct_SF
    block: fixed
    entry:
      name: Pct_SF
      description: Pct_SF
      longdescription: "Percent scale factor register. Data code: 40101.Pct_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: Ah_SF
    block: fixed
    entry:
      name: Ah_SF
      description: Ah_SF
      longdescription: "Amp-hour scale factor register. Data code: 40101.Ah_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40101
    point: reserved12
    block: fixed
    entry:
      name: reserved12
      description: Reserved
      longdescription: "Reserved register. Data code: 40101.reserved12"
      dtype: string
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40102
    point: ID
    block: fixed
    entry:
      name: ID
      description: Device ID
      longdescription: "Unique identifier for this data block. Data code: 40102.ID"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40102
    point: L
    block: fixed
    entry:
      name: L
      description: Register Length
      longdescription: "Number of registers in this block. Data code: 40102.L"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40102
    point: siteID
    block: fixed
    entry:
      name: siteID
      description: Site Identifier
      longdescription: "Unique identifier for the installation site. Data code: 40102.siteID"
      dtype: uint32
      unit: N/A
      category: Site information
      meanings: {}
  - model: 40102
    point: reserved1
    block: fixed
    entry:
      name: reserved1
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved1"
      dtype: string
      unit: N/A
      category: Site information
      meanings: {}
  - model: 40102
    point: SN
    block: fixed
    entry:
      name: SN
      description: Device Serial Number
      longdescription: "Unique serial number of the inverter or system controller.
        Data code: 40102.SN"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
  - model: 40102
    point: reserved2
    block: fixed
    entry:
      name: reserved2
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved2"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
  - model: 40102
    point: ePvTdy
    block: fixed
    entry:
      name: ePvTdy
      description: PV Energy Today
      longdescription: "Total photovoltaic energy generated today. Data code: 40102.ePvTdy"
      dtype: uint32
      unit: Wh
      category: DC-PV  Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: ePvTot
    block: fixed
    entry:
      name: ePvTot
      description: PV Energy Total
      longdescription: "Cumulative photovoltaic energy generated since installation.
        Data code: 40102.ePvTot"
      dtype: uint32
      unit: Wh
      category: DC-PV  Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: ePv1Tot
    block: fixed
    entry:
      name: ePv1Tot
      description: PV1 Energy Total
      longdescription: "Total lifetime energy produced by PV string 1. Data code: 40102.ePv1Tot"
      dtype: uint32
      unit: Wh
      category: DC-PV  Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: ePv1Tdy
    block: fixed
    entry:
      name: ePv1Tdy
      description: PV1 Energy Today
      longdescription: "Energy generated today by PV string 1. Data code: 40102.ePv1Tdy"
      dtype: uint32
      unit: Wh
      category: DC-PV  Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: ePv2Tot
    block: fixed
    entry:
      name: ePv2Tot
      description: PV2 Energy Total
      longdescription: "Total lifetime energy produced by PV string 2. Data code: 40102.ePv2Tot"
      dtype: uint32
      unit: Wh
      category: DC-PV  Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: ePv2Tdy
    block: fixed
    entry:
      name: ePv2Tdy
      description: PV2 Energy Today
      longdescription: "Energy generated today by PV string 2. Data code: 40102.ePv2Tdy"
      dtype: uint32
      unit: Wh
      category: DC-PV  Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: ePv3Tot
    block: fixed
    entry:
      name: ePv3Tot
      description: PV3 Energy Total
      longdescription: "Total lifetime energy produced by PV string 3. Data code: 40102.ePv3Tot"
      dtype: uint32
      unit: Wh
      category: DC-PV  Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: ePv3Tdy
    block: fixed
    entry:
      name: ePv3Tdy
      description: PV3 Energy Today
      longdescription: "Energy generated today by PV string 3. Data code: 40102.ePv3Tdy"
      dtype: uint32
      unit: Wh
      category: DC-PV  Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: reserved3
    block: fixed
    entry:
      name: reserved3
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved3"
      dtype: string
      unit: N/A
      category: DC-PV  Energy
      meanings: {}
  - model: 40102
    point: eBatChgTdy
    block: fixed
    entry:
      name: eBatChgTdy
      description: Battery Charge Energy Today
      longdescription: "Energy charged into the battery today. This value is read from
        the inverter. Data code: 40102.eBatChgTdy"
      dtype: uint32
      unit: Wh
      category: Battery Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBatChgTot
    block: fixed
    entry:
      name: eBatChgTot
      description: Battery Charge Energy Total
      longdescription: "Total lifetime energy charged into the battery. This value is
        read from the inverter. Data code: 40102.eBatChgTot"
      dtype: uint32
      unit: Wh
      category: Battery Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBatDischgTdy
    block: fixed
    entry:
      name: eBatDischgTdy
      description: Battery Discharge Energy Today
      longdescription: "Energy discharged from the battery today. This value is read
        from the inverter. Data code: 40102.eBatDischgTdy"
      dtype: uint32
      unit: Wh
      category: Battery Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBatDischgTot
    block: fixed
    entry:
      name: eBatDischgTot
      description: Battery Discharge Energy Total
      longdescription: "Total lifetime energy discharged from the battery. This value
        is read from the inverter. Data code: 40102.eBatDischgTot"
      dtype: uint32
      unit: Wh
      category: Battery Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: reserved4
    block: fixed
    entry:
      name: reserved4
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved4"
      dtype: string
      unit: N/A
      category: Battery Energy
      meanings: {}
  - model: 40102
    point: eInvTdy
    block: fixed
    entry:
      name: eInvTdy
      description: Inverter Output Energy Today
      longdescription: "Energy output from the inverter today. Data code: 40102.eInvTdy"
      dtype: uint16
      unit: Wh
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eInvTot
    block: fixed
    entry:
      name: eInvTot
      description: Inverter Output Energy Total
      longdescription: "Total lifetime energy output from the inverter. Data code:
        40102.eInvTot"
      dtype: uint32
      unit: Wh
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eRecTdy
    block: fixed
    entry:
      name: eRecTdy
      description: Rectifier Energy Today
      longdescription: "Energy recovered or rectified today. Data code: 40102.eRecTdy"
      dtype: uint16
      unit: Wh
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eRecTot
    block: fixed
    entry:
      name: eRecTot
      description: Rectifier Energy Total
      longdescription: "Total lifetime recovered or rectified energy. Data code: 40102.eRecTot"
      dtype: uint32
      unit: Wh
      category: Inverter
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eGridImpTot
    block: fixed
    entry:
      name: eGridImpTot
      description: Grid Import Energy Total
      longdescription: "Total energy imported from the grid. Data code: 40102.eGridImpTot"
      dtype: uint32
      unit: Wh
      category: Grid Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eGridExpTot
    block: fixed
    entry:
      name: eGridExpTot
      description: Grid Export Energy Total
      longdescription: "Total energy exported to the grid. Data code: 40102.eGridExpTot"
      dtype: uint32
      unit: Wh
      category: Grid Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
      - label_family: Feature
        label_text: Selling Power
  - model: 40102
    point: eGridImpTdy
    block: fixed
    entry:
      name: eGridImpTdy
      description: Grid Import Energy Today
      longdescription: "Energy imported from the grid today. Data code: 40102.eGridImpTdy"
      dtype: uint32
      unit: Wh
      category: Grid Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eGridExpTdy
    block: fixed
    entry:
      name: eGridExpTdy
      description: Grid Export Energy Today
      longdescription: "Energy exported to the grid today. Data code: 40102.eGridExpTdy"
      dtype: uint32
      unit: Wh
      category: Grid Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
      - label_family: Feature
        label_text: Selling Power
  - model: 40102
    point: reserved5
    block: fixed
    entry:
      name: reserved5
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved5"
      dtype: string
      unit: N/A
      category: Grid Energy
      meanings: {}
  - model: 40102
    point: eBkupTdy
    block: fixed
    entry:
      name: eBkupTdy
      description: Backup Energy Today
      longdescription: "Energy supplied to backup loads today. Data code: 40102.eBkupTdy"
      dtype: uint32
      unit: Wh
      category: Backup Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBkupTot
    block: fixed
    entry:
      name: eBkupTot
      description: Backup Energy Total
      longdescription: "Cumulative energy supplied to backup loads. Data code: 40102.eBkupTot"
      dtype: uint32
      unit: Wh
      category: Backup Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBkupL1Tdy
    block: fixed
    entry:
      name: eBkupL1Tdy
      description: Backup L1 Energy Today
      longdescription: "Energy supplied to backup load phase L1 today. Data code:
        40102.eBkupL1Tdy"
      dtype: uint32
      unit: Wh
      category: Backup Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBkupL2Tdy
    block: fixed
    entry:
      name: eBkupL2Tdy
      description: Backup L2 Energy Today
      longdescription: "Energy supplied to backup load phase L2 today. Data code:
        40102.eBkupL2Tdy"
      dtype: uint32
      unit: Wh
      category: Backup Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBkupL3Tdy
    block: fixed
    entry:
      name: eBkupL3Tdy
      description: Backup L3 Energy Today
      longdescription: "Energy supplied to backup load phase L3 today. Data code:
        40102.eBkupL3Tdy"
      dtype: uint32
      unit: Wh
      category: Backup Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBkupL1Tot
    block: fixed
    entry:
      name: eBkupL1Tot
      description: Backup L1 Energy Total
      longdescription: "Cumulative energy supplied to backup load phase L1. Data code:
        40102.eBkupL1Tot"
      dtype: uint32
      unit: Wh
      category: Backup Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBkupL2Tot
    block: fixed
    entry:
      name: eBkupL2Tot
      description: Backup L2 Energy Total
      longdescription: "Cumulative energy supplied to backup load phase L2. Data code:
        40102.eBkupL2Tot"
      dtype: uint32
      unit: Wh
      category: Backup Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eBkupL3Tot
    block: fixed
    entry:
      name: eBkupL3Tot
      description: Backup L3 Energy Total
      longdescription: "Cumulative energy supplied to backup load phase L3. Data code:
        40102.eBkupL3Tot"
      dtype: uint32
      unit: Wh
      category: Backup Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: reserved6
    block: fixed
    entry:
      name: reserved6
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved6"
      dtype: string
      unit: N/A
      category: Backup Energy
      meanings: {}
  - model: 40102
    point: eLoadTot
    block: fixed
    entry:
      name: eLoadTot
      description: Load Energy Total
      longdescription: "Cumulative total energy consumed by loads. Data code: 40102.eLoadTot"
      dtype: uint32
      unit: Wh
      category: load Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eLoadTdy
    block: fixed
    entry:
      name: eLoadTdy
      description: Load Energy Today
      longdescription: "Total energy consumed by loads today. Data code: 40102.eLoadTdy"
      dtype: uint32
      unit: Wh
      category: load Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Building Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: reserved7
    block: fixed
    entry:
      name: reserved7
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved7"
      dtype: string
      unit: N/A
      category: load Energy
      meanings: {}
  - model: 40102
    point: eGenTdy
    block: fixed
    entry:
      name: eGenTdy
      description: Generator Energy Today
      longdescription: "Energy supplied by the generator today. Data code: 40102.eGenTdy"
      dtype: uint32
      unit: Wh
      category: Generator Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eGenTot
    block: fixed
    entry:
      name: eGenTot
      description: Generator Energy Total
      longdescription: "Cumulative total energy supplied by the generator. Data code:
        40102.eGenTot"
      dtype: uint32
      unit: Wh
      category: Generator Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: reserved8
    block: fixed
    entry:
      name: reserved8
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved8"
      dtype: string
      unit: N/A
      category: Generator Energy
      meanings: {}
  - model: 40102
    point: eAcCplTdy
    block: fixed
    entry:
      name: eAcCplTdy
      description: AC Couple PV Energy Today
      longdescription: "Energy received from AC-coupled sources today. Data code:
        40102.eAcCplTdy"
      dtype: uint32
      unit: Wh
      category: AC Couple Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eAcCplTot
    block: fixed
    entry:
      name: eAcCplTot
      description: AC Couple PV Energy Total
      longdescription: "Cumulative energy received from AC-coupled sources. Data code:
        40102.eAcCplTot"
      dtype: uint32
      unit: Wh
      category: AC Couple Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: reserved9
    block: fixed
    entry:
      name: reserved9
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved9"
      dtype: string
      unit: N/A
      category: AC Couple Energy
      meanings: {}
  - model: 40102
    point: eSmartloadTdy
    block: fixed
    entry:
      name: eSmartloadTdy
      description: Smart Load Energy Today
      longdescription: "Energy supplied to smart load circuits today. Data code:
        40102.eSmartloadTdy"
      dtype: uint32
      unit: Wh
      category: SmartLoad Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: eSmartloadTot
    block: fixed
    entry:
      name: eSmartloadTot
      description: Smart Load Energy Total
      longdescription: "Cumulative energy supplied to smart load circuits. Data code:
        40102.eSmartloadTot"
      dtype: uint32
      unit: Wh
      category: SmartLoad Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Readings
      - label_family: Unit
        label_text: Energy
  - model: 40102
    point: reserved10
    block: fixed
    entry:
      name: reserved10
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved10"
      dtype: string
      unit: N/A
      category: SmartLoad Energy
      meanings: {}
  - model: 40102
    point: Wh1_SF
    block: fixed
    entry:
      name: Wh1_SF
      description: Energy Scale Factor 1
      longdescription: "Scale factor for Wh energy values (block 1). Data code: 40102.Wh1_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40102
    point: Wh2_SF
    block: fixed
    entry:
      name: Wh2_SF
      description: Energy Scale Factor 2
      longdescription: "Scale factor for Wh energy values (block 2). Data code: 40102.Wh2_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40102
    point: Wh3_SF
    block: fixed
    entry:
      name: Wh3_SF
      description: Energy Scale Factor 3
      longdescription: "Scale factor for Wh energy values (block 3). Data code: 40102.Wh3_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40102
    point: Time_SF
    block: fixed
    entry:
      name: Time_SF
      description: Time Scale Factor
      longdescription: "Scale factor applied to time-based registers. Data code: 40102.Time_SF"
      dtype: sunssf
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40102
    point: reserved11
    block: fixed
    entry:
      name: reserved11
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40102.reserved11"
      dtype: string
      unit: N/A
      category: Scale Factors
      meanings: {}
  - model: 40103
    point: ID
    block: fixed
    entry:
      name: ID
      description: Device ID
      longdescription: "Unique identifier for this data block. Data code: 40103.ID"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40103
    point: L
    block: fixed
    entry:
      name: L
      description: Register Length
      longdescription: "Number of registers in this block. Data code: 40103.L"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40103
    point: siteID
    block: fixed
    entry:
      name: siteID
      description: Site Identifier
      longdescription: "Unique identifier for the installation site. Data code: 40103.siteID"
      dtype: uint32
      unit: N/A
      category: Site information
      meanings: {}
  - model: 40103
    point: reserved1
    block: fixed
    entry:
      name: reserved1
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved1"
      dtype: string
      unit: N/A
      category: Site information
      meanings: {}
  - model: 40103
    point: SN
    block: fixed
    entry:
      name: SN
      description: Device Serial Number
      longdescription: "Unique serial number of the inverter or system controller.
        Data code: 40103.SN"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
  - model: 40103
    point: reserved2
    block: fixed
    entry:
      name: reserved2
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved2"
      dtype: string
      unit: N/A
      category: PCS information
      meanings: {}
  - model: 40103
    point: pcsWarning
    block: fixed
    entry:
      name: pcsWarning
      description: PCS Warning Flags
      longdescription: "Warning conditions related to the power conversion system.
        Data code: 40103.pcsWarning"
      dtype: bitfield32
      unit: N/A
      category: PCS Alerts
      meanings:
        "0": Fan abnormal
        "1": LCD communication fault
        "2": Auto test failure
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: pcsFault
    block: fixed
    entry:
      name: pcsFault
      description: PCS Fault Flags
      longdescription: "Fault conditions reported by the power conversion system. Data
        code: 40103.pcsFault"
      dtype: bitfield32
      unit: N/A
      category: PCS Alerts
      meanings:
        "0": Soft-start abnormal
        "1": DC bus short circuit
        "2": DC link unbalance/undervoltage
        "3": DC link overvoltage
        "4": DCDC abnormal
        "5": Inverter over temperature
        "6": Hardware over-current protection
        "7": Inverter relay abnormal
        "8": Internal power supply abnormal
        "9": Software version incompatibility
        "10": Internal DSP communication lost
        "11": Internal communication loss EMS to master DSP
        "12": Internal storage error
        "13": M3 Microprocessor TX failure
        "14": M3 Microprocessor RX failure
        "15": M8 Microprocessor TX failure
        "16": M8 Microprocessor RX failure
        "17": US/European Model detection error
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: reserved3
    block: fixed
    entry:
      name: reserved3
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved3"
      dtype: string
      unit: N/A
      category: PCS Alerts
      meanings: {}
  - model: 40103
    point: pcsParaWarning
    block: fixed
    entry:
      name: pcsParaWarning
      description: PCS Parallel Warning Flags
      longdescription: "Warnings related to parallel inverter operation. Data code:
        40103.pcsParaWarning"
      dtype: bitfield32
      unit: N/A
      category: PCS Parallel Alerts
      meanings:
        "0": Parallel battery abnormal
        "1": Parallel grid abnormal
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Alarms/Faults
      - label_family: Feature
        label_text: Parallel
  - model: 40103
    point: PCSParaFault
    block: fixed
    entry:
      name: PCSParaFault
      description: PCS Parallel Fault Flags
      longdescription: "Faults related to multi-unit inverter operation. Data code:
        40103.PCSParaFault"
      dtype: bitfield32
      unit: N/A
      category: PCS Parallel Alerts
      meanings:
        "0": Parallel ID warning
        "1": Parallel inverter sync signal abnormal
        "2": Parallel inverter general config abnormal
        "3": Parallel inverter power-rating mismatch
        "4": Parallel inverter phase config abnormal
        "5": Parallel inverter phase loss
        "6": Primary inverter communication loss
        "7": No primary inverter detected
        "8": Multiple primary inverters detected
        "9": Parallel communication error
        "10": Grid rule different in Parallel
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Alarms/Faults
      - label_family: Feature
        label_text: Parallel
  - model: 40103
    point: reserved4
    block: fixed
    entry:
      name: reserved4
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved4"
      dtype: string
      unit: N/A
      category: PCS Parallel Alerts
      meanings: {}
  - model: 40103
    point: dcPvWarning
    block: fixed
    entry:
      name: dcPvWarning
      description: PV DC Warning Flags
      longdescription: "Warning conditions related to PV input circuits. Data code:
        40103.dcPvWarning"
      dtype: bitfield32
      unit: N/A
      category: DC-PV  Alerts
      meanings:
        "0": PV polarity reverse
        "1": PV MPPT short circuit detected
        "2": AFCI communication loss
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: dcPvFault
    block: fixed
    entry:
      name: dcPvFault
      description: PV DC Fault Flags
      longdescription: "Fault conditions related to PV input circuits. Data code:
        40103.dcPvFault"
      dtype: bitfield32
      unit: N/A
      category: DC-PV  Alerts
      meanings:
        "0": GFCI sensor abnormal
        "1": PV leakage current abnormal
        "2": PV insulation fault (ISO)
        "3": Arc-fault detected
        "4": PV boost abnormal
        "5": PV over-voltage
        "6": PV MPPT Multiple short circuits detected
        "7": GFCI module fault
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-DC
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: reserved5
    block: fixed
    entry:
      name: reserved5
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved5"
      dtype: string
      unit: N/A
      category: DC-PV  Alerts
      meanings: {}
  - model: 40103
    point: batWarning
    block: fixed
    entry:
      name: batWarning
      description: Battery Warning Flags
      longdescription: "Battery-related warning conditions detected by inverter or
        BMS. Data code: 40103.batWarning"
      dtype: bitfield32
      unit: N/A
      category: Battery  Alerts
      meanings:
        "0": No battery detected
        "1": Battery charge/discharge fault
        "2": BMS communication fault
        "3": Battery discharge over-current
        "4": Battery over-temperature
        "5": Battery under-temperature
        "6": Battery  Reversed
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: batFault
    block: fixed
    entry:
      name: batFault
      description: Battery Fault Flags
      longdescription: "Battery-related fault conditions that stop charge or
        discharge. Data code: 40103.batFault"
      dtype: bitfield32
      unit: N/A
      category: Battery  Alerts
      meanings:
        "0": Battery over-voltage
        "1": Battery under-voltage
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: reserved6
    block: fixed
    entry:
      name: reserved6
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved6"
      dtype: string
      unit: N/A
      category: Battery  Alerts
      meanings: {}
  - model: 40103
    point: gridWarning
    block: fixed
    entry:
      name: gridWarning
      description: Grid Warning Flags
      longdescription: "Warnings related to AC grid quality or presence. Data code:
        40103.gridWarning"
      dtype: bitfield32
      unit: N/A
      category: Grid Alerts
      meanings:
        "0": No grid detected
        "1": Grid abnormal
        "2": VAC abnormal
        "3": Grid over-voltage
        "4": Grid under-voltage
        "5": Grid frequency fault
        "6": Grid over-frequency
        "7": Grid under-frequency
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: gridFault
    block: fixed
    entry:
      name: gridFault
      description: Grid Fault Flags
      longdescription: "Fault conditions detected in AC grid interface. Data code:
        40103.gridFault"
      dtype: bitfield32
      unit: N/A
      category: Grid Alerts
      meanings:
        "0": Inverter DC-bias over-current
        "1": AC moving-average voltage high
        "2": Grid neutral abnormal
        "3": DSP-MCU grid-voltage fault
        "4": DC-bus UV sampling fault
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: reserved7
    block: fixed
    entry:
      name: reserved7
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved7"
      dtype: string
      unit: N/A
      category: Grid Alerts
      meanings: {}
  - model: 40103
    point: meterWarning
    block: fixed
    entry:
      name: meterWarning
      description: Meter Warning Flags
      longdescription: "Meter-related warnings such as connection or polarity issues.
        Data code: 40103.meterWarning"
      dtype: bitfield32
      unit: N/A
      category: Meter Alerts
      meanings:
        "0": Meter lost
        "1": Meter reversed
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Alarms/Faults
      - label_family: Feature
        label_text: Meter
  - model: 40103
    point: reserved8
    block: fixed
    entry:
      name: reserved8
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved8"
      dtype: string
      unit: N/A
      category: Meter Alerts
      meanings: {}
  - model: 40103
    point: bkupFault
    block: fixed
    entry:
      name: bkupFault
      description: Backup Fault Flags
      longdescription: "Fault conditions on the backup output circuit. Data code:
        40103.bkupFault"
      dtype: bitfield32
      unit: N/A
      category: Backup  Alerts
      meanings:
        "0": Backup DC-Bias Over-voltage
        "1": Backup output voltage abnormal
        "2": Backup off-grid over-voltage
        "3": Backup short circuit
        "4": Backup overload
        "6": Backup AC Backfeed (Reverse Power Flow)
        "7": Backup and grid port miswired / cross-connection
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: reserved9
    block: fixed
    entry:
      name: reserved9
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved9"
      dtype: string
      unit: N/A
      category: Backup  Alerts
      meanings: {}
  - model: 40103
    point: Reserved10
    block: fixed
    entry:
      name: Reserved10
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.Reserved10"
      dtype: string
      unit: N/A
      category: load  Alerts
      meanings: {}
  - model: 40103
    point: genFault
    block: fixed
    entry:
      name: genFault
      description: Generator Fault Flags
      longdescription: "Fault conditions detected at the generator port. Data code:
        40103.genFault"
      dtype: bitfield32
      unit: N/A
      category: Generator Alerts
      meanings:
        "0": Generator voltage abnormal
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: reserved11
    block: fixed
    entry:
      name: reserved11
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved11"
      dtype: string
      unit: N/A
      category: Generator Alerts
      meanings: {}
  - model: 40103
    point: rsdWarning
    block: fixed
    entry:
      name: rsdWarning
      description: RSD Warning Flags
      longdescription: "Rapid shutdown (RSD) warnings or active state. Data code:
        40103.rsdWarning"
      dtype: bitfield32
      unit: N/A
      category: RSD Alerts
      meanings:
        "0": RSD active
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: RSD
      - label_family: Type of Data
        label_text: Alarms/Faults
  - model: 40103
    point: reserved12
    block: fixed
    entry:
      name: reserved12
      description: Reserved
      longdescription: "Reserved for future use. Data code: 40103.reserved12"
      dtype: string
      unit: N/A
      category: RSD Alerts
      meanings: {}
  - model: 40104
    point: ID
    block: fixed
    entry:
      name: ID
      description: ID
      longdescription: "ID Data code: 40104.ID"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40104
    point: L
    block: fixed
    entry:
      name: L
      description: L
      longdescription: "L Data code: 40104.L"
      dtype: uint16
      unit: N/A
      category: General
      meanings: {}
  - model: 40104
    point: SiteID
    block: fixed
    entry:
      name: SiteID
      description: SiteID
      longdescription: "SiteID Data code: 40104.SiteID"
      dtype: uint32
      unit: uint32
      category: Site
      meanings: {}
  - model: 40104
    point: reserved1
    block: fixed
    entry:
      name: reserved1
      description: reserved1
      longdescription: "Reserved Data code: 40104.reserved1"
      dtype: string
      unit: string
      category: Site
      meanings: {}
  - model: 40104
    point: SN
    block: fixed
    entry:
      name: SN
      description: SN
      longdescription: "Device Serial number Data code: 40104.SN"
      dtype: string
      unit: string
      category: PCS
      meanings: {}
  - model: 40104
    point: reserved2
    block: fixed
    entry:
      name: reserved2
      description: reserved2
      longdescription: "Reserved Data code: 40104.reserved2"
      dtype: string
      unit: string
      category: PCS
      meanings: {}
  - model: 40104
    point: Year
    block: fixed
    entry:
      name: Year
      description: System Time Year
      longdescription: "Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules Data code: 40104.Year"
      dtype: uint16
      unit: N/A
      category: Basic
      meanings: {}
      friendly_meanings:
        Date: Year
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Basic Setup
  - model: 40104
    point: Month
    block: fixed
    entry:
      name: Month
      description: System Time Mon
      longdescription: "Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules Data code: 40104.Month"
      dtype: uint16
      unit: N/A
      category: Basic
      meanings: {}
      friendly_meanings:
        Date: Month
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Basic Setup
  - model: 40104
    point: Day
    block: fixed
    entry:
      name: Day
      description: System Time Day
      longdescription: "Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules Data code: 40104.Day"
      dtype: uint16
      unit: N/A
      category: Basic
      meanings: {}
      friendly_meanings:
        Date: Day
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Basic Setup
  - model: 40104
    point: Hour
    block: fixed
    entry:
      name: Hour
      description: System Time Hour
      longdescription: "Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules Data code: 40104.Hour"
      dtype: uint16
      unit: N/A
      category: Basic
      meanings: {}
      friendly_meanings:
        Date: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Basic Setup
  - model: 40104
    point: Minute
    block: fixed
    entry:
      name: Minute
      description: System Time Min
      longdescription: "Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules Data code: 40104.Minute"
      dtype: uint16
      unit: N/A
      category: Basic
      meanings: {}
      friendly_meanings:
        Date: Minute
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Basic Setup
  - model: 40104
    point: Second
    block: fixed
    entry:
      name: Second
      description: System Time Sec
      longdescription: "Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules Data code: 40104.Second"
      dtype: uint16
      unit: N/A
      category: Basic
      meanings: {}
      friendly_meanings:
        Date: Second
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Basic Setup
  - model: 40104
    point: OperatingMode
    block: fixed
    entry:
      name: OperatingMode
      description: Grid Interaction
      longdescription: "Value from Site Configuration Inverter/Basic Setup. Select
        whether the inverter operates independently of the grid, or is connected
        to the grid. If off-grid, you should also ignore grid-loss warnings.
        Data code: 40104.OperatingMode"
      dtype: enum16
      unit: N/A
      category: Basic
      meanings:
        "0": Grid-tied
        "1": Off-grid
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Basic Setup
  - model: 40104
    point: WorkMode
    block: fixed
    entry:
      name: WorkMode
      description: Operating Mode
      longdescription: >-
        Value from Site Configuration Inverter/Basic Setup. Select how solar
        power is prioritized.


        - Self-consumption: PV powers the home first, then charges the battery,
        and exports last (if allowed).


        - Export first: PV powers the home, then exports to grid, and charges
        the battery last.


        - Backup power: PV charges the battery first to build reserve, then
        powers the home, and exports last (if allowed).


        If a battery schedule is running (PV Charge Only, Discharge Only, or
        Grid Charge), the inverter will follow that schedule during those times
        instead of this operating mode. When the scheduled period ends, the
        inverter will return to the selected operating mode.
         Data code: 40104.WorkMode
      dtype: enum16
      unit: N/A
      category: Basic
      meanings:
        "0": Self used mode
        "1": Feed-in priority mode
        "2": Back-up mode
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Basic Setup
  - model: 40104
    point: PowerControl
    block: fixed
    entry:
      name: PowerControl
      description: Power Status
      longdescription: "Value from Site Configuration Inverter/Basic Setup. Put the
        inverter into standby mode to stop operation or make configuration
        changes. While in standby, the inverter will not generate PV power or
        charge/discharge the battery. If grid power is available, it be used to
        supply the loads. If the grid is unavailable, the building will not have
        power. Data code: 40104.PowerControl"
      dtype: enum16
      unit: N/A
      category: Basic
      meanings:
        "0": Standby
        "1": PowerOn
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Basic Setup
  - model: 40104
    point: pvPowPriority
    block: fixed
    entry:
      name: pvPowPriority
      description: pvPowPriority
      longdescription: "PV Power Priority Data code: 40104.pvPowPriority"
      dtype: enum16
      unit: N/A
      category: Basic
      meanings:
        "0": Load EVCharger, Battery, Grid
        "1": Load EVCharger, Grid, Battery
        "2": Battery, Load EVCharger, Grid
        "3": Load EVCharger, Battery
  - model: 40104
    point: powSrcPriority
    block: fixed
    entry:
      name: powSrcPriority
      description: powSrcPriority
      longdescription: "Power Source Priority Data code: 40104.powSrcPriority"
      dtype: enum16
      unit: N/A
      category: Basic
      meanings:
        "0": PV, Battery, Grid, Generator
        "1": PV, Grid, Battery,Generator
        "2": PV, Battery, Generator
  - model: 40104
    point: reserved3
    block: fixed
    entry:
      name: reserved3
      description: reserved3
      longdescription: "Reserved Data code: 40104.reserved3"
      dtype: string
      unit: string
      category: Basic
      meanings: {}
  - model: 40104
    point: CTSampleRatio
    block: fixed
    entry:
      name: CTSampleRatio
      description: CT Ratio
      longdescription: "Value from Site Configuration Inverter/Current Transformer
        (CT) Settings. Select the current transformer (CT) ratio used for
        metering electric current on the grid port connection. This must match
        the CT hardware rating so that current and power readings are accurate.
        Data code: 40104.CTSampleRatio"
      dtype: enum16
      unit: N/A
      category: Measurement
      meanings:
        "0": Unknown
        "1": "1000 : 1"
        "2": "2000 : 1"
        "3": "2500 : 1"
        "4": "3000 : 1"
        "5": "4000 : 1"
        "6": "5000 : 1"
        "7": "6000 : 1"
        "8": "10000 : 1"
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: CT
  - model: 40104
    point: CTDirection
    block: fixed
    entry:
      name: CTDirection
      description: CT Direction
      longdescription: "Value from Site Configuration Inverter/Current Transformer
        (CT) Settings. Sets the CT installation direction. You may choose to
        reverse this if your inverter is reading import when power is actually
        flowing out to the grid (export) or vice versa. Data code:
        40104.CTDirection"
      dtype: enum16
      unit: N/A
      category: Measurement
      meanings:
        "0": Grid to inverter
        "1": Inverter to grid
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: CT
  - model: 40104
    point: reserved4
    block: fixed
    entry:
      name: reserved4
      description: reserved4
      longdescription: "Reserved Data code: 40104.reserved4"
      dtype: string
      unit: string
      category: Measurement
      meanings: {}
  - model: 40104
    point: BatteryType
    block: fixed
    entry:
      name: BatteryType
      description: Battery Type
      longdescription: "Value from Site Configuration Battery/Setup. Specifies the
        chemistry or general type of connected battery. Choose **No Battery**
        for standalone PV or grid-tie operation, **Lead-acid** for flooded or
        AGM batteries, or **Lithium-ion** for managed BMS packs. This value is
        set on the inverter. Data code: 40104.BatteryType"
      dtype: enum16
      unit: N/A
      category: BatteryBase
      meanings:
        "1": Lead-Acid battery
        "2": Lithium-ion
        "3": Unavailable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: BatteryBrand
    block: fixed
    entry:
      name: BatteryBrand
      description: Battery Brand
      longdescription: "Value from Site Configuration Battery/Setup. Selects the
        manufacturer profile for the connected battery. This may pre-configure
        recommended voltage and SOC limits for optimal operation. This value is
        set on the inverter. Data code: 40104.BatteryBrand"
      dtype: enum16
      unit: N/A
      category: BatteryBase
      meanings:
        "0": Unavailable
        "1": FortressPower
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: AbsorbVoltage
    block: fixed
    entry:
      name: AbsorbVoltage
      description: Absorb Voltage
      longdescription: "Value from Site Configuration Battery/Setup. Sets the voltage
        used during the absorb (bulk-to-float transition) phase. Increasing this
        value raises the upper charge threshold for lead-acid batteries. This
        value is set on the inverter. Data code: 40104.AbsorbVoltage"
      dtype: uint16
      unit: N/A
      category: BatteryBase
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: FloatVoltage
    block: fixed
    entry:
      name: FloatVoltage
      description: Float Voltage
      longdescription: "Value from Site Configuration Battery/Setup. Defines the
        voltage maintained once the battery is fully charged. This helps prevent
        overcharging while keeping the battery topped off. This value is set on
        the inverter. Data code: 40104.FloatVoltage"
      dtype: uint16
      unit: N/A
      category: BatteryBase
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: VbatStartDerating
    block: fixed
    entry:
      name: VbatStartDerating
      description: Start Derating Voltage
      longdescription: "Value from Site Configuration Battery/Setup. Voltage threshold
        where the inverter begins reducing charge or discharge current to
        protect the battery as it approaches full or low state. This value is
        set on the inverter. Data code: 40104.VbatStartDerating"
      dtype: uint16
      unit: N/A
      category: BatteryBase
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: ChaDisChaCtrlType
    block: fixed
    entry:
      name: ChaDisChaCtrlType
      description: Battery Control Type
      longdescription: >-
        Value from Site Configuration Battery/Setup. Determines how the inverter
        regulates both charging and discharging.


        SOC: Uses battery state of charge thresholds to start and stop
        charge/discharge.


        Volt: Uses DC voltage limits instead. This value is set on the inverter.
        Data code: 40104.ChaDisChaCtrlType
      dtype: enum16
      unit: N/A
      category: BatteryBase
      meanings:
        "0": SOC(%),
        "1": Battery voltage (V)
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: ChargeLimitSoc
    block: fixed
    entry:
      name: ChargeLimitSoc
      description: Charge Limit (SOC)
      longdescription: "Value from Site Configuration Battery/Setup. Sets the maximum
        state of charge (SOC) the battery will be charged to. Once the battery
        reaches this level, charging stops to prevent overcharging and extend
        lifespan. This value is set on the inverter. Data code:
        40104.ChargeLimitSoc"
      dtype: uint16
      unit: "%"
      category: BatteryBase
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: MaxChargingCurrent
    block: fixed
    entry:
      name: MaxChargingCurrent
      description: Max Battery Current Max Charge Preset
      longdescription: "Value from Site Configuration Battery/Setup. Sets the maximum
        charging and discharging current allowed for the connected inverter.
        Choose the preset that matches your inverter model to automatically
        apply the correct limits. This value is set on the inverter. Data code:
        40104.MaxChargingCurrent"
      dtype: uint16
      unit: A
      category: BatteryBase
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: OnGridCutOffSoc
    block: fixed
    entry:
      name: OnGridCutOffSoc
      description: On-Grid Battery Cutoff SOC
      longdescription: "Value from Site Configuration Battery/Setup. Sets the minimum
        state of charge (SOC) the battery will discharge to while grid power is
        available. Below this level, the inverter will stop discharging and
        switch to grid power to protect battery capacity. This value is set on
        the inverter. Data code: 40104.OnGridCutOffSoc"
      dtype: uint16
      unit: "%"
      category: BatteryBase
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: OffGridCutOffSoc
    block: fixed
    entry:
      name: OffGridCutOffSoc
      description: Off-Grid Battery Cutoff SOC
      longdescription: "Value from Site Configuration Battery/Setup. Sets the minimum
        state of charge (SOC) the battery will discharge to when operating
        off-grid. Once the battery reaches this level, the inverter stops
        discharging to prevent deep discharge and maintain battery health. This
        value is set on the inverter. Data code: 40104.OffGridCutOffSoc"
      dtype: uint16
      unit: "%"
      category: BatteryBase
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: reserved5
    block: fixed
    entry:
      name: reserved5
      description: reserved5
      longdescription: "Reserved Data code: 40104.reserved5"
      dtype: string
      unit: string
      category: BatteryBase
      meanings: {}
  - model: 40104
    point: BatteryScheduling
    block: fixed
    entry:
      name: BatteryScheduling
      description: Battery Scheduling
      longdescription: "Value from Site Configuration Battery/Battery Scheduling. This
        is a special scheduling mode designed for certain time-of-use (TOU)
        utility rates or other custom situations. In most circumstances, we
        recomment allowing your system to  manage charging and discharging
        automatically without setting a schedule.  You don't need to set a
        schedule unless you have a specific reason to charge or discharge at
        exact times. This value is set on the inverter. Data code:
        40104.BatteryScheduling"
      dtype: enum16
      unit: N/A
      category: BatteryScheduling
      meanings:
        "0": disable
        "1": enable
        "2": Inconsistency
      friendly_meanings:
        "0": Disabled
        "1": Enabled
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: pChgT1
    block: fixed
    entry:
      name: pChgT1
      description: Max Battery Charge Power During 'PV Charge Only' Periods
      longdescription: "Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. Sets the maximum charging power during scheduled
        Time-of-Use (TOU) charge periods in kW. Set this limit to control the
        power level at which the battery will charge from the grid during PV
        charge only periods This value is set on the inverter. Data code:
        40104.pChgT1"
      dtype: uint32
      unit: W
      category: BatteryTOUCharge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: Power
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: socChgEndT1
    block: fixed
    entry:
      name: socChgEndT1
      description: socChgEndT1
      longdescription: "Charge end SOC in time 1 This value is set on the inverter.
        Data code: 40104.socChgEndT1"
      dtype: uint16
      unit: "%"
      category: BatteryTOUCharge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: socChgEndT2
    block: fixed
    entry:
      name: socChgEndT2
      description: socChgEndT2
      longdescription: "Charge end SOC in time 2 This value is set on the inverter.
        Data code: 40104.socChgEndT2"
      dtype: uint16
      unit: "%"
      category: BatteryTOUCharge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: socChgEndT3
    block: fixed
    entry:
      name: socChgEndT3
      description: socChgEndT3
      longdescription: "Charge end SOC in time 3 This value is set on the inverter.
        Data code: 40104.socChgEndT3"
      dtype: uint16
      unit: "%"
      category: BatteryTOUCharge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: chgST1
    block: fixed
    entry:
      name: chgST1
      description: Schedule Window 1 for PV Charge Only Start Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter. Data code: 40104.chgST1"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: chgET1
    block: fixed
    entry:
      name: chgET1
      description: Schedule Window 1 for PV Charge Only End Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter. Data code: 40104.chgET1"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: chgST2
    block: fixed
    entry:
      name: chgST2
      description: Schedule Window 2 for PV Charge Only Start Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter. Data code: 40104.chgST2"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: chgET2
    block: fixed
    entry:
      name: chgET2
      description: Schedule Window 2 for PV Charge Only End Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter. Data code: 40104.chgET2"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: chgST3
    block: fixed
    entry:
      name: chgST3
      description: Schedule Window 3 for PV Charge Only Start Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter. Data code: 40104.chgST3"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: chgET3
    block: fixed
    entry:
      name: chgET3
      description: Schedule Window 3 for PV Charge Only End Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter. Data code: 40104.chgET3"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: reserved7
    block: fixed
    entry:
      name: reserved7
      description: reserved7
      longdescription: "Reserved Data code: 40104.reserved7"
      dtype: string
      unit: string
      category: BatteryTOUCharge
      meanings: {}
  - model: 40104
    point: pDischgT1
    block: fixed
    entry:
      name: pDischgT1
      description: Max Inverter Power During 'Discharge Only' Periods
      longdescription: "Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. Sets the maximum discharging power during
        scheduled Time-of-Use (TOU) discharge periods in kW. Limit this to
        control how much battery power is exported to loads or grid during those
        windows. This value is set on the inverter. Data code: 40104.pDischgT1"
      dtype: uint32
      unit: kW
      category: BatteryTOUDischarge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: socDischgEndT1
    block: fixed
    entry:
      name: socDischgEndT1
      description: TOU Discharge Stop SOC
      longdescription: "Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. Sets the minimum state of charge (SOC) that
        the battery will discharge to during 'Discharge Only' operation. Once
        this level is reached, discharging stops to preserve reserve capacity
        for later use or backup. This value is set on the inverter. Data code:
        40104.socDischgEndT1"
      dtype: uint16
      unit: "%"
      category: BatteryTOUDischarge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: socDischgEndT2
    block: fixed
    entry:
      name: socDischgEndT2
      description: socDischgEndT2
      longdescription: "Discharge end SOC in time 2 This value is set on the inverter.
        Data code: 40104.socDischgEndT2"
      dtype: uint16
      unit: "%"
      category: BatteryTOUDischarge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: socDischgEndT3
    block: fixed
    entry:
      name: socDischgEndT3
      description: socDischgEndT3
      longdescription: "Discharge end SOC in time 3 This value is set on the inverter.
        Data code: 40104.socDischgEndT3"
      dtype: uint16
      unit: "%"
      category: BatteryTOUDischarge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: dischgST1
    block: fixed
    entry:
      name: dischgST1
      description: Schedule Window 1 for Discharge Only Start Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter. Data code: 40104.dischgST1"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUDischarge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: dischgET1
    block: fixed
    entry:
      name: dischgET1
      description: Schedule Window 1 for Discharge Only End Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter. Data code: 40104.dischgET1"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUDischarge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: dischgST2
    block: fixed
    entry:
      name: dischgST2
      description: Schedule Window 2 for Discharge Only Start Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter. Data code: 40104.dischgST2"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUDischarge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: dischgET2
    block: fixed
    entry:
      name: dischgET2
      description: Schedule Window 2 for Discharge Only End Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter. Data code: 40104.dischgET2"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUDischarge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: dischgST3
    block: fixed
    entry:
      name: dischgST3
      description: Schedule Window 3 for Discharge Only Start Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter. Data code: 40104.dischgST3"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUDischarge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: dischgET3
    block: fixed
    entry:
      name: dischgET3
      description: Schedule Window 3 for Discharge Only End Minute (0-59)
      longdescription: "Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter. Data code: 40104.dischgET3"
      dtype: bitsplit
      unit: bitsplit
      category: BatteryTOUDischarge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Battery Scheduling
  - model: 40104
    point: reserved8
    block: fixed
    entry:
      name: reserved8
      description: reserved8
      longdescription: "Reserved Data code: 40104.reserved8"
      dtype: string
      unit: string
      category: BatteryTOUDischarge
      meanings: {}
  - model: 40104
    point: GridRegulation
    block: fixed
    entry:
      name: GridRegulation
      description: Grid Parameters
      longdescription: "Value from Site Configuration Grid/Setup. This setting changes
        the conditions under which the inverter will connect or disconnect from
        the utility grid. Different areas have different rules about when this
        equipment is allowed to disconnect and when it must ride through. Choose
        the code required by the local utility or AHJ. Data code:
        40104.GridRegulation"
      dtype: enum16
      unit: N/A
      category: GridBase
      meanings:
        "0": Default(UL-240-18)
        "1": California(Rule 21)
        "2": Hawaii(Rule 14)
        "3": Puerto Rico LUMA
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: GridType
    block: fixed
    entry:
      name: GridType
      description: Grid Type
      longdescription: "Value from Site Configuration Grid/Setup. Choose wiring
        configuration of the site.  This helps configure the system to match the
        power service at the site.  Note the voltage you enter here must match
        the EPS Voltage. Data code: 40104.GridType"
      dtype: enum16
      unit: N/A
      category: GridBase
      meanings:
        "0": Split240V/120V
        "1": 3phase 208V/120V
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: GridFreq
    block: fixed
    entry:
      name: GridFreq
      description: Grid Frequency
      longdescription: "Value from Site Configuration Grid/Setup. Sets the nominal
        grid frequency for the installation. Use 60 Hz for North America and
        most split-phase installs; use 50 Hz for regions that operate at 230 V
        single-phase. Data code: 40104.GridFreq"
      dtype: uint16
      unit: N/A
      category: GridBase
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Setup
  - model: 40104
    point: reserved9
    block: fixed
    entry:
      name: reserved9
      description: reserved9
      longdescription: "Reserved Data code: 40104.reserved9"
      dtype: string
      unit: string
      category: GridBase
      meanings: {}
  - model: 40104
    point: PermitServiceStatus
    block: fixed
    entry:
      name: PermitServiceStatus
      description: Permit to Operate
      longdescription: "Value from Site Configuration Grid/Grid Connection. Shows
        whether the inverter is permitted to operate in grid-connected mode.
        Data code: 40104.PermitServiceStatus"
      dtype: enum16
      unit: N/A
      category: GridConnection
      meanings:
        "0": disable,
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Connection
  - model: 40104
    point: RampRate
    block: fixed
    entry:
      name: RampRate
      description: Ramp Rate
      longdescription: "Value from Site Configuration Grid/Grid Connection. How
        quickly inverter output is allowed to increase. Data code:
        40104.RampRate"
      dtype: uint16
      unit: N/A
      category: GridConnection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Connection
  - model: 40104
    point: ApplicableVoltageLow
    block: fixed
    entry:
      name: ApplicableVoltageLow
      description: Applicable Grid Voltage Range Lower Limit (Vac)
      longdescription: "Value from Site Configuration Grid/Grid Connection. Voltage
        window within which grid connection is permitted. Outside this range the
        inverter will not connect or will disconnect. Data code:
        40104.ApplicableVoltageLow"
      dtype: uint16
      unit: N/A
      category: GridConnection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Connection
  - model: 40104
    point: ApplicableVoltageHigh
    block: fixed
    entry:
      name: ApplicableVoltageHigh
      description: Applicable Grid Voltage Range Upper Limit (Vac)
      longdescription: "Value from Site Configuration Grid/Grid Connection. Voltage
        window within which grid connection is permitted. Outside this range the
        inverter will not connect or will disconnect. Data code:
        40104.ApplicableVoltageHigh"
      dtype: uint16
      unit: N/A
      category: GridConnection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Connection
  - model: 40104
    point: ApplicableFrequencyLow
    block: fixed
    entry:
      name: ApplicableFrequencyLow
      description: Applicable Grid Frequency Range Lower Limit (Hz)
      longdescription: "Value from Site Configuration Grid/Grid Connection. Frequency
        window within which grid connection is permitted. Outside this range the
        inverter will not connect or will disconnect. Data code:
        40104.ApplicableFrequencyLow"
      dtype: uint16
      unit: N/A
      category: GridConnection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Connection
  - model: 40104
    point: ApplicableFrequencyHigh
    block: fixed
    entry:
      name: ApplicableFrequencyHigh
      description: Applicable Grid Frequency Range Upper Limit (Hz)
      longdescription: "Value from Site Configuration Grid/Grid Connection. Frequency
        window within which grid connection is permitted. Outside this range the
        inverter will not connect or will disconnect. Data code:
        40104.ApplicableFrequencyHigh"
      dtype: uint16
      unit: N/A
      category: GridConnection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Connection
  - model: 40104
    point: ConnectionDelayTime
    block: fixed
    entry:
      name: ConnectionDelayTime
      description: Connection Delay Times Connection Delay (s)
      longdescription: "Value from Site Configuration Grid/Grid Connection. Delays
        applied before initial grid connection and after a grid disturbance
        clears (reconnection). These timers help meet interconnection
        standards.  The connection delay is how long the inverter will wait
        after first being powered on.  Reconnection delay is how long the
        inverter will wait after a grid disturbance or outage clears. Data code:
        40104.ConnectionDelayTime"
      dtype: uint16
      unit: N/A
      category: GridConnection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Connection
  - model: 40104
    point: ReconnectionDelayTime
    block: fixed
    entry:
      name: ReconnectionDelayTime
      description: Connection Delay Times Reconnection Delay (s)
      longdescription: "Value from Site Configuration Grid/Grid Connection. Delays
        applied before initial grid connection and after a grid disturbance
        clears (reconnection). These timers help meet interconnection
        standards.  The connection delay is how long the inverter will wait
        after first being powered on.  Reconnection delay is how long the
        inverter will wait after a grid disturbance or outage clears. Data code:
        40104.ReconnectionDelayTime"
      dtype: uint16
      unit: N/A
      category: GridConnection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Connection
  - model: 40104
    point: reserved10
    block: fixed
    entry:
      name: reserved10
      description: reserved10
      longdescription: "Reserved Data code: 40104.reserved10"
      dtype: string
      unit: string
      category: GridConnection
      meanings: {}
  - model: 40104
    point: GridVoltLimit1Low
    block: fixed
    entry:
      name: GridVoltLimit1Low
      description: Grid Voltage Limits (Stage 1) Lower Limit (Vac)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid. Data code:
        40104.GridVoltLimit1Low"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit1LowTime
    block: fixed
    entry:
      name: GridVoltLimit1LowTime
      description: Grid Voltage Trip Time Low Voltage Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 1) before the
        inverter disconnects from the grid. Data code:
        40104.GridVoltLimit1LowTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit1High
    block: fixed
    entry:
      name: GridVoltLimit1High
      description: Grid Voltage Limits (Stage 1) Upper Limit (Vac)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid. Data code:
        40104.GridVoltLimit1High"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit1HighTime
    block: fixed
    entry:
      name: GridVoltLimit1HighTime
      description: Grid Voltage Trip Time High Voltage Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 1) before the
        inverter disconnects from the grid. Data code:
        40104.GridVoltLimit1HighTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit2Low
    block: fixed
    entry:
      name: GridVoltLimit2Low
      description: Grid Voltage Limits (Stage 2) Lower Limit (Vac)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid. Data code:
        40104.GridVoltLimit2Low"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit2LowTime
    block: fixed
    entry:
      name: GridVoltLimit2LowTime
      description: Grid Voltage Trip Time (Stage 2) Low Voltage Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 2) before the
        inverter disconnects from the grid. Data code:
        40104.GridVoltLimit2LowTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit2High
    block: fixed
    entry:
      name: GridVoltLimit2High
      description: Grid Voltage Limits (Stage 2) Upper Limit (Vac)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid. Data code:
        40104.GridVoltLimit2High"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit2HighTime
    block: fixed
    entry:
      name: GridVoltLimit2HighTime
      description: Grid Voltage Trip Time (Stage 2) High Voltage Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 2) before the
        inverter disconnects from the grid. Data code:
        40104.GridVoltLimit2HighTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit3Low
    block: fixed
    entry:
      name: GridVoltLimit3Low
      description: Grid Voltage Limits (Stage 3) Lower Limit (Vac)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid. Data code:
        40104.GridVoltLimit3Low"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit3LowTime
    block: fixed
    entry:
      name: GridVoltLimit3LowTime
      description: Grid Voltage Trip Time (Stage 3) Low Voltage Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 3) before the
        inverter disconnects from the grid. Data code:
        40104.GridVoltLimit3LowTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit3High
    block: fixed
    entry:
      name: GridVoltLimit3High
      description: Grid Voltage Limits (Stage 3) Upper Limit (Vac)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid. Data code:
        40104.GridVoltLimit3High"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridVoltLimit3HighTime
    block: fixed
    entry:
      name: GridVoltLimit3HighTime
      description: Grid Voltage Trip Time (Stage 3) High Voltage Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 3) before the
        inverter disconnects from the grid. Data code:
        40104.GridVoltLimit3HighTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit1Low
    block: fixed
    entry:
      name: GridFreqLimit1Low
      description: Grid Frequency Limits (Stage 1) Lower Limit (Hz)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards. Data code: 40104.GridFreqLimit1Low"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit1LowTime
    block: fixed
    entry:
      name: GridFreqLimit1LowTime
      description: Grid Frequency Trip Time (Stage 1) Low Frequency Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 1) before the
        inverter disconnects from the grid. Data code:
        40104.GridFreqLimit1LowTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit1High
    block: fixed
    entry:
      name: GridFreqLimit1High
      description: Grid Frequency Limits (Stage 1) Upper Limit (Hz)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards. Data code: 40104.GridFreqLimit1High"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit1HighTime
    block: fixed
    entry:
      name: GridFreqLimit1HighTime
      description: Grid Frequency Trip Time (Stage 1) High Frequency Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 1) before the
        inverter disconnects from the grid. Data code:
        40104.GridFreqLimit1HighTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit2Low
    block: fixed
    entry:
      name: GridFreqLimit2Low
      description: Grid Frequency Limits (Stage 2) Lower Limit (Hz)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards. Data code: 40104.GridFreqLimit2Low"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit2LowTime
    block: fixed
    entry:
      name: GridFreqLimit2LowTime
      description: Grid Frequency Trip Time (Stage 2) Low Frequency Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 2) before the
        inverter disconnects from the grid. Data code:
        40104.GridFreqLimit2LowTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit2High
    block: fixed
    entry:
      name: GridFreqLimit2High
      description: Grid Frequency Limits (Stage 2) Upper Limit (Hz)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards. Data code: 40104.GridFreqLimit2High"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit2HighTime
    block: fixed
    entry:
      name: GridFreqLimit2HighTime
      description: Grid Frequency Trip Time (Stage 2) High Frequency Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 2) before the
        inverter disconnects from the grid. Data code:
        40104.GridFreqLimit2HighTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit3Low
    block: fixed
    entry:
      name: GridFreqLimit3Low
      description: Grid Frequency Limits (Stage 3) Lower Limit (Hz)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards. Data code: 40104.GridFreqLimit3Low"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit3LowTime
    block: fixed
    entry:
      name: GridFreqLimit3LowTime
      description: Grid Frequency Trip Time (Stage 3) Low Frequency Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 3) before the
        inverter disconnects from the grid. Data code:
        40104.GridFreqLimit3LowTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit3High
    block: fixed
    entry:
      name: GridFreqLimit3High
      description: Grid Frequency Limits (Stage 3) Upper Limit (Hz)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards. Data code: 40104.GridFreqLimit3High"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: GridFreqLimit3HighTime
    block: fixed
    entry:
      name: GridFreqLimit3HighTime
      description: Grid Frequency Trip Time (Stage 3) High Frequency Trip Delay (ms)
      longdescription: "Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 3) before the
        inverter disconnects from the grid. Data code:
        40104.GridFreqLimit3HighTime"
      dtype: uint16
      unit: N/A
      category: GridProtection
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Protection
  - model: 40104
    point: reserved11
    block: fixed
    entry:
      name: reserved11
      description: reserved11
      longdescription: "Reserved Data code: 40104.reserved11"
      dtype: string
      unit: string
      category: GridProtection
      meanings: {}
  - model: 40104
    point: ConstantPowerFactorModeStatus
    block: fixed
    entry:
      name: ConstantPowerFactorModeStatus
      description: Power Factor Mode
      longdescription: "Value from Site Configuration Grid/Grid Support/Constant Power
        Factor. Shows whether constant power-factor control is active. Data
        code: 40104.ConstantPowerFactorModeStatus"
      dtype: enum16
      unit: N/A
      category: ConstantPowerFactorMode
      meanings:
        "0": disable
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: ConstantPowerFactorExcited
    block: fixed
    entry:
      name: ConstantPowerFactorExcited
      description: Power Factor Setpoint Excitation
      longdescription: "Value from Site Configuration Grid/Grid Support/Constant Power
        Factor. The target power factor and excitation. Under-excited = lagging
        (absorbing vars); Over-excited = leading (supplying vars). Data code:
        40104.ConstantPowerFactorExcited"
      dtype: enum16
      unit: N/A
      category: ConstantPowerFactorMode
      meanings:
        "0": Under-excited
        "1": Over-excited
        "2": Unknown
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: ConstantPowerFactor
    block: fixed
    entry:
      name: ConstantPowerFactor
      description: Power Factor Setpoint Power Factor (PF)
      longdescription: "Value from Site Configuration Grid/Grid Support/Constant Power
        Factor. The target power factor and excitation. Under-excited = lagging
        (absorbing vars); Over-excited = leading (supplying vars). Data code:
        40104.ConstantPowerFactor"
      dtype: int16
      unit: N/A
      category: ConstantPowerFactorMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: reserved12
    block: fixed
    entry:
      name: reserved12
      description: reserved12
      longdescription: "Reserved Data code: 40104.reserved12"
      dtype: string
      unit: string
      category: ConstantPowerFactorMode
      meanings: {}
  - model: 40104
    point: ConstantReactivePowerModeStatus
    block: fixed
    entry:
      name: ConstantReactivePowerModeStatus
      description: Reactive Power Mode Status
      longdescription: "Value from Site Configuration Grid/Grid Support/Constant
        Reactive Power. Shows whether constant reactive-power control is active.
        Data code: 40104.ConstantReactivePowerModeStatus"
      dtype: enum16
      unit: N/A
      category: ConstantReactivePowerMode
      meanings:
        "0": disable
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: ConstantReactivePowerModeExcited
    block: fixed
    entry:
      name: ConstantReactivePowerModeExcited
      description: Reactive Power Mode Excitation
      longdescription: "Value from Site Configuration Grid/Grid Support/Constant
        Reactive Power. Shows whether constant reactive-power control is active.
        Data code: 40104.ConstantReactivePowerModeExcited"
      dtype: enum16
      unit: N/A
      category: ConstantReactivePowerMode
      meanings:
        "0": Under-excited
        "1": Over-excited
        "2": Unknown
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: ReactivePowerPercentCMD
    block: fixed
    entry:
      name: ReactivePowerPercentCMD
      description: Reactive Power Setpoint
      longdescription: "Value from Site Configuration Grid/Grid Support/Constant
        Reactive Power. Displays the reactive-power target as a percentage of
        rated power (vars). Excitation determines whether vars are supplied
        (leading) or absorbed (lagging). Data code:
        40104.ReactivePowerPercentCMD"
      dtype: uint16
      unit: N/A
      category: ConstantReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: reserved13
    block: fixed
    entry:
      name: reserved13
      description: reserved13
      longdescription: "Reserved Data code: 40104.reserved13"
      dtype: string
      unit: string
      category: ConstantReactivePowerMode
      meanings: {}
  - model: 40104
    point: VoltageReactivePowerMode
    block: fixed
    entry:
      name: VoltageReactivePowerMode
      description: Volt-VAR Mode
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Shows whether Volt-VAR (voltage-reactive
        power) control is active. This value is read-only and reflects the
        current configuration or utility command. Data code:
        40104.VoltageReactivePowerMode"
      dtype: enum16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings:
        "0": disable
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: AutonomousVrefAdjustment
    block: fixed
    entry:
      name: AutonomousVrefAdjustment
      description: Autonomous Vref Adjustment
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Indicates whether the inverter autonomously
        adjusts its reference voltage (Vref). Data code:
        40104.AutonomousVrefAdjustment"
      dtype: enum16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings:
        "0": disable
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: Verf
    block: fixed
    entry:
      name: Verf
      description: Reference Voltage (Vref)
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage reference used for Volt-VAR
        calculations. Data code: 40104.Verf"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: VrefAdjustmentTimeConstant
    block: fixed
    entry:
      name: VrefAdjustmentTimeConstant
      description: Vref Adjustment Time Constant
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Time constant applied when adjusting Vref.
        Data code: 40104.VrefAdjustmentTimeConstant"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: UnderOverV1
    block: fixed
    entry:
      name: UnderOverV1
      description: Volt-VAR Voltage Breakpoints V1 (Voltage Point 1)
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage points (V1-V4) that define the
        Volt-VAR curve breakpoints. Data code: 40104.UnderOverV1"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: UnderOverV2
    block: fixed
    entry:
      name: UnderOverV2
      description: Volt-VAR Voltage Breakpoints V2 (Voltage Point 2)
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage points (V1-V4) that define the
        Volt-VAR curve breakpoints. Data code: 40104.UnderOverV2"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: UnderOverV3
    block: fixed
    entry:
      name: UnderOverV3
      description: Volt-VAR Voltage Breakpoints V3 (Voltage Point 3)
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage points (V1-V4) that define the
        Volt-VAR curve breakpoints. Data code: 40104.UnderOverV3"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: UnderOverV4
    block: fixed
    entry:
      name: UnderOverV4
      description: Volt-VAR Voltage Breakpoints V4 (Voltage Point 4)
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage points (V1-V4) that define the
        Volt-VAR curve breakpoints. Data code: 40104.UnderOverV4"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: Q1
    block: fixed
    entry:
      name: Q1
      description: Reactive Power Setpoint Q1
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Reactive power at voltage point V1 on the
        Volt-VAR curve. Data code: 40104.Q1"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: Q2
    block: fixed
    entry:
      name: Q2
      description: Reactive Power Setpoint Q2
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Reactive power at voltage point V2 on the
        Volt-VAR curve. Data code: 40104.Q2"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: Q3
    block: fixed
    entry:
      name: Q3
      description: Reactive Power Setpoint Q3
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Reactive power at voltage point V3 on the
        Volt-VAR curve. Data code: 40104.Q3"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: Q4
    block: fixed
    entry:
      name: Q4
      description: Reactive Power Setpoint Q4
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Reactive power at voltage point V4 on the
        Volt-VAR curve. Data code: 40104.Q4"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: VqOpenLoopResponseTime
    block: fixed
    entry:
      name: VqOpenLoopResponseTime
      description: Volt-VAR Open-Loop Response Time
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Response time used for open-loop Volt-VAR
        changes. Data code: 40104.VqOpenLoopResponseTime"
      dtype: uint16
      unit: N/A
      category: VoltageReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: reserved14
    block: fixed
    entry:
      name: reserved14
      description: reserved14
      longdescription: "Reserved Data code: 40104.reserved14"
      dtype: string
      unit: string
      category: VoltageReactivePowerMode
      meanings: {}
  - model: 40104
    point: PQModeStatus
    block: fixed
    entry:
      name: PQModeStatus
      description: P-Q Mode Status
      longdescription: "Value from Site Configuration Grid/Grid Support/P-Q Mode
        (Active-Reactive Power). Shows whether Active/Reactive Power (P-Q)
        control mode is enabled. Data code: 40104.PQModeStatus"
      dtype: enum16
      unit: N/A
      category: ActivePowerReactivePowerMode
      meanings:
        "0": disable
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: PQP1
    block: fixed
    entry:
      name: PQP1
      description: P-Q Curve Points P1 Setpoint
      longdescription: "Value from Site Configuration Grid/Grid Support/P-Q Mode
        (Active-Reactive Power). Breakpoint setpoints for the Active/Reactive
        Power (P-Q) characteristic. Data code: 40104.PQP1"
      dtype: uint16
      unit: N/A
      category: ActivePowerReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: PQP2
    block: fixed
    entry:
      name: PQP2
      description: P-Q Curve Points P2 Setpoint
      longdescription: "Value from Site Configuration Grid/Grid Support/P-Q Mode
        (Active-Reactive Power). Breakpoint setpoints for the Active/Reactive
        Power (P-Q) characteristic. Data code: 40104.PQP2"
      dtype: uint16
      unit: N/A
      category: ActivePowerReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: PQP3
    block: fixed
    entry:
      name: PQP3
      description: P-Q Curve Points P3 Setpoint
      longdescription: "Value from Site Configuration Grid/Grid Support/P-Q Mode
        (Active-Reactive Power). Breakpoint setpoints for the Active/Reactive
        Power (P-Q) characteristic. Data code: 40104.PQP3"
      dtype: uint16
      unit: N/A
      category: ActivePowerReactivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: reserved15
    block: fixed
    entry:
      name: reserved15
      description: reserved15
      longdescription: "Reserved Data code: 40104.reserved15"
      dtype: string
      unit: string
      category: ActivePowerReactivePowerMode
      meanings: {}
  - model: 40104
    point: VoltageActivePowerMode
    block: fixed
    entry:
      name: VoltageActivePowerMode
      description: Volt-Watt Mode
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Shows whether Volt-Watt (voltage-active power)
        control is enabled. Data code: 40104.VoltageActivePowerMode"
      dtype: enum16
      unit: N/A
      category: VoltageActivePowerMode
      meanings:
        "0": disable
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: VoltWattV1
    block: fixed
    entry:
      name: VoltWattV1
      description: Volt-Watt Voltage Breakpoints V1 (Voltage Point 1)
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Voltage points that define the Volt-Watt curve.
        Data code: 40104.VoltWattV1"
      dtype: uint16
      unit: N/A
      category: VoltageActivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: VoltWattV2
    block: fixed
    entry:
      name: VoltWattV2
      description: Volt-Watt Voltage Breakpoints V2 (Voltage Point 2)
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Voltage points that define the Volt-Watt curve.
        Data code: 40104.VoltWattV2"
      dtype: uint16
      unit: N/A
      category: VoltageActivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: VoltWattP2
    block: fixed
    entry:
      name: VoltWattP2
      description: Volt-Watt Power Setpoint
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Power setpoint at voltage breakpoint V2 on the
        Volt-Watt curve. Data code: 40104.VoltWattP2"
      dtype: uint16
      unit: N/A
      category: VoltageActivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: VoltWattOpenLoopResponseTime
    block: fixed
    entry:
      name: VoltWattOpenLoopResponseTime
      description: Volt-Watt Open-Loop Response Time
      longdescription: "Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Response time used for open-loop Volt-Watt
        changes. Data code: 40104.VoltWattOpenLoopResponseTime"
      dtype: uint16
      unit: N/A
      category: VoltageActivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: reserved16
    block: fixed
    entry:
      name: reserved16
      description: reserved16
      longdescription: "Reserved Data code: 40104.reserved16"
      dtype: string
      unit: string
      category: VoltageActivePowerMode
      meanings: {}
  - model: 40104
    point: FrequencyActivePowerModeStatus
    block: fixed
    entry:
      name: FrequencyActivePowerModeStatus
      description: Frequency-Active Power Mode
      longdescription: "Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Indicates whether frequency-power (Freq-Watt)
        control is currently enabled. Data code:
        40104.FrequencyActivePowerModeStatus"
      dtype: enum16
      unit: N/A
      category: FrequencyActivePowerMode
      meanings:
        "0": disable
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: FreqWattOpenLoopResponseTime
    block: fixed
    entry:
      name: FreqWattOpenLoopResponseTime
      description: Open-Loop Response Time
      longdescription: "Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Response time applied to open-loop
        frequency-power adjustments. Data code:
        40104.FreqWattOpenLoopResponseTime"
      dtype: uint16
      unit: N/A
      category: FrequencyActivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: OverFrequencyDroop_dbOF
    block: fixed
    entry:
      name: OverFrequencyDroop_dbOF
      description: "Over-Frequency Droop: Deadband"
      longdescription: "Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Over Frequency Droop dbOF â€” Deadband around
        nominal frequency before active power reduction begins. Data code:
        40104.OverFrequencyDroop_dbOF"
      dtype: uint16
      unit: N/A
      category: FrequencyActivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: OverFrequencyDroop_kOF
    block: fixed
    entry:
      name: OverFrequencyDroop_kOF
      description: "Over-Frequency Droop: Gain (k)"
      longdescription: "Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Over Frequency Droop kOF â€” Slope (gain k) of
        active power reduction versus frequency rise above nominal. Data code:
        40104.OverFrequencyDroop_kOF"
      dtype: uint16
      unit: N/A
      category: FrequencyActivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: UnderFrequencyDroop_dbUF
    block: fixed
    entry:
      name: UnderFrequencyDroop_dbUF
      description: "Under-Frequency Droop: Deadband"
      longdescription: "Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Under Frequency Droop dbUF â€” Deadband around
        nominal frequency before active power increase/response begins. Data
        code: 40104.UnderFrequencyDroop_dbUF"
      dtype: uint16
      unit: N/A
      category: FrequencyActivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: UnderFrequencyDroop_kUF
    block: fixed
    entry:
      name: UnderFrequencyDroop_kUF
      description: "Under-Frequency Droop: Gain (k)"
      longdescription: "Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Under Frequency Droop kUF â€” Slope (gain k)
        of active power response versus frequency drop below nominal. Data code:
        40104.UnderFrequencyDroop_kUF"
      dtype: uint16
      unit: N/A
      category: FrequencyActivePowerMode
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Grid
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Support
  - model: 40104
    point: reserved17
    block: fixed
    entry:
      name: reserved17
      description: reserved17
      longdescription: "Reserved Data code: 40104.reserved17"
      dtype: string
      unit: string
      category: FrequencyActivePowerMode
      meanings: {}
  - model: 40104
    point: LimitActivePowerStatus
    block: fixed
    entry:
      name: LimitActivePowerStatus
      description: Limit Power Output
      longdescription: "Value from Site Configuration Inverter/Power Limits. Shows
        whether power output limiting is currently active. When not limited, the
        inverter can deliver its full available power (subject only to natural
        hardware limits). When limited, an external or configured cap is applied
        to restrict inverter output to the specified Power Limit. Data code:
        40104.LimitActivePowerStatus"
      dtype: enum16
      unit: N/A
      category: LimitActivePower
      meanings:
        "0": disable
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Unit
        label_text: Power
      - label_family: Feature
        label_text: Power Limits
  - model: 40104
    point: ActivePowerPercent
    block: fixed
    entry:
      name: ActivePowerPercent
      description: Power Limit
      longdescription: "Value from Site Configuration Inverter/Power Limits. The
        inverter's present active-power output limit as a percentage of its
        rated capacity. If power limiting is active, the inverter will limit its
        output power to this percentage of its rated capacity. Data code:
        40104.ActivePowerPercent"
      dtype: uint16
      unit: "%"
      category: LimitActivePower
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: Power
      - label_family: Feature
        label_text: Power Limits
  - model: 40104
    point: reserved18
    block: fixed
    entry:
      name: reserved18
      description: reserved18
      longdescription: "Reserved Data code: 40104.reserved18"
      dtype: string
      unit: string
      category: LimitActivePower
      meanings: {}
  - model: 40104
    point: FeedInGridStatus
    block: fixed
    entry:
      name: FeedInGridStatus
      description: Allow Selling Power to Grid
      longdescription: "Value from Site Configuration Inverter/Selling Power. Allows
        the inverter to sell/export power back to the utility grid. Enable this
        only if local regulations and interconnect agreements permit grid
        export. Data code: 40104.FeedInGridStatus"
      dtype: enum16
      unit: N/A
      category: FeedInGrid
      meanings:
        "0": disable,
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Selling Power
  - model: 40104
    point: FeedInGridMaxPower
    block: fixed
    entry:
      name: FeedInGridMaxPower
      description: Max Power Sold to Grid
      longdescription: "Value from Site Configuration Inverter/Selling Power. Sets the
        maximum power the inverter is allowed to sell/export to the grid. Use
        this to meet utility export limits or site commissioning requirements.
        Data code: 40104.FeedInGridMaxPower"
      dtype: uint32
      unit: W
      category: FeedInGrid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: Power
      - label_family: Feature
        label_text: Selling Power
  - model: 40104
    point: FastzeroExportstatus
    block: fixed
    entry:
      name: FastzeroExportstatus
      description: "Prevent Grid Export: Strict Mode"
      longdescription: "Value from Site Configuration Inverter/Selling Power. Keeps
        power export at or near zero by adjusting inverter output in real time.
        When enabled, the inverter supplies only local (on-site) loads and will
        not send power back to the grid. This mode is required when grid export
        is not allowed. Ensure the CTs are installed on the grid connection
        point and  not on the inverter's load side, so the inverter can
        correctly detect and prevent export. Data code:
        40104.FastzeroExportstatus"
      dtype: enum16
      unit: N/A
      category: FeedInGrid
      meanings:
        "0": disable,
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Selling Power
  - model: 40104
    point: FeedInGridPowerMaxSetValue
    block: fixed
    entry:
      name: FeedInGridPowerMaxSetValue
      description: FeedInGridPowerMaxSetValue
      longdescription: "FeedInGridPowerMaxSetValue Data code: 40104.FeedInGridPowerMaxSetValue"
      dtype: uint16
      unit: W
      category: FeedInGrid
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: Power
  - model: 40104
    point: reserved19
    block: fixed
    entry:
      name: reserved19
      description: reserved19
      longdescription: "Reserved Data code: 40104.reserved19"
      dtype: string
      unit: string
      category: FeedInGrid
      meanings: {}
  - model: 40104
    point: ACChargeStatus
    block: fixed
    entry:
      name: ACChargeStatus
      description: Allow Battery Charging from Grid
      longdescription: "Value from Site Configuration Battery/Grid Charge. Enables the
        battery to charge from the utility grid. This value is set on the
        inverter. Data code: 40104.ACChargeStatus"
      dtype: enum16
      unit: N/A
      category: ACCharge
      meanings:
        "0": disable
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: ACChargePower
    block: fixed
    entry:
      name: ACChargePower
      description: Grid Charge Power Limit
      longdescription: "Value from Site Configuration Battery/Grid Charge. Sets the
        maximum power the inverter will draw from the grid for charging. This
        cap applies when Grid Charge is enabled (and within any configured time
        windows). This value is set on the inverter. Data code:
        40104.ACChargePower"
      dtype: uint16
      unit: W
      category: ACCharge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: Power
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: ACChargeType
    block: fixed
    entry:
      name: ACChargeType
      description: Grid Charge Control Type
      longdescription: "Value from Site Configuration Battery/Grid Charge. Select
        whether grid charging follows a time schedule or SOC/voltage thresholds.
        This value is set on the inverter. Data code: 40104.ACChargeType"
      dtype: enum16
      unit: N/A
      category: ACCharge
      meanings:
        "0": according to time
        "1": according to SOC/Volt
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: ACChgStartSOC
    block: fixed
    entry:
      name: ACChgStartSOC
      description: Grid Charge SOC Range Start SOC
      longdescription: "Value from Site Configuration Battery/Grid Charge. Defines
        when grid charging starts and stops based on battery state of charge
        (SOC). Charging starts when SOC falls below Start SOC and stops when it
        reaches Stop SOC. This value is set on the inverter. Data code:
        40104.ACChgStartSOC"
      dtype: uint16
      unit: "%"
      category: ACCharge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: ACChgStopSOC
    block: fixed
    entry:
      name: ACChgStopSOC
      description: Grid Charge SOC Range SOC
      longdescription: "Value from Site Configuration Battery/Grid Charge. Defines
        when grid charging starts and stops based on battery state of charge
        (SOC). Charging starts when SOC falls below Start SOC and stops when it
        reaches Stop SOC. This value is set on the inverter. Data code:
        40104.ACChgStopSOC"
      dtype: uint16
      unit: "%"
      category: ACCharge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: acChgST1
    block: fixed
    entry:
      name: acChgST1
      description: Grid Charge Windows Window 1 Start Minute
      longdescription: "Value from Site Configuration Battery/Grid Charge. During
        these times, your battery will continue to charge from solar power
        normally, but will also use additional power from the grid to charge the
        battery. This value is set on the inverter. Data code: 40104.acChgST1"
      dtype: bitsplit
      unit: bitsplit
      category: ACCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: acChgET1
    block: fixed
    entry:
      name: acChgET1
      description: Grid Charge Windows Window 1 End Minute
      longdescription: "Value from Site Configuration Battery/Grid Charge. During
        these times, your battery will continue to charge from solar power
        normally, but will also use additional power from the grid to charge the
        battery. This value is set on the inverter. Data code: 40104.acChgET1"
      dtype: bitsplit
      unit: bitsplit
      category: ACCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: acChgST2
    block: fixed
    entry:
      name: acChgST2
      description: Grid Charge Windows Window 2 Start Minute
      longdescription: "Value from Site Configuration Battery/Grid Charge. During
        these times, your battery will continue to charge from solar power
        normally, but will also use additional power from the grid to charge the
        battery. This value is set on the inverter. Data code: 40104.acChgST2"
      dtype: bitsplit
      unit: bitsplit
      category: ACCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: acChgET2
    block: fixed
    entry:
      name: acChgET2
      description: Grid Charge Windows Window 2 End Minute
      longdescription: "Value from Site Configuration Battery/Grid Charge. During
        these times, your battery will continue to charge from solar power
        normally, but will also use additional power from the grid to charge the
        battery. This value is set on the inverter. Data code: 40104.acChgET2"
      dtype: bitsplit
      unit: bitsplit
      category: ACCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: acChgST3
    block: fixed
    entry:
      name: acChgST3
      description: Grid Charge Windows Window 3 Start Minute
      longdescription: "Value from Site Configuration Battery/Grid Charge. During
        these times, your battery will continue to charge from solar power
        normally, but will also use additional power from the grid to charge the
        battery. This value is set on the inverter. Data code: 40104.acChgST3"
      dtype: bitsplit
      unit: bitsplit
      category: ACCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: acChgET3
    block: fixed
    entry:
      name: acChgET3
      description: Grid Charge Windows Window 3 End Minute
      longdescription: "Value from Site Configuration Battery/Grid Charge. During
        these times, your battery will continue to charge from solar power
        normally, but will also use additional power from the grid to charge the
        battery. This value is set on the inverter. Data code: 40104.acChgET3"
      dtype: bitsplit
      unit: bitsplit
      category: ACCharge
      meanings:
        0-7: Minute
        8-15: Hour
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Battery
      - label_family: Component
        label_text: Battery
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Grid Charge
  - model: 40104
    point: ACChargePowerMaxSetValue
    block: fixed
    entry:
      name: ACChargePowerMaxSetValue
      description: ACChargePowerMaxSetValue
      longdescription: "ACChargePowerMaxSetValue Data code: 40104.ACChargePowerMaxSetValue"
      dtype: uint16
      unit: N/A
      category: ACCharge
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
  - model: 40104
    point: reserved20
    block: fixed
    entry:
      name: reserved20
      description: reserved20
      longdescription: "Reserved Data code: 40104.reserved20"
      dtype: string
      unit: string
      category: ACCharge
      meanings: {}
  - model: 40104
    point: OffGridOutput
    block: fixed
    entry:
      name: OffGridOutput
      description: Off-Grid Output
      longdescription: "Value from Site Configuration Backup Power/Backup Power.
        Controls whether the inverter provides AC output when operating without
        the utility grid. Disable to prevent output in off-grid mode. Data code:
        40104.OffGridOutput"
      dtype: enum16
      unit: N/A
      category: BackupPower
      meanings:
        "0": disable,
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
  - model: 40104
    point: EPSVoltage
    block: fixed
    entry:
      name: EPSVoltage
      description: Backup (EPS) Output Voltage
      longdescription: "Value from Site Configuration Backup Power/Backup Power.
        Selects the AC output voltage when operating in backup (EPS) mode. Match
        this to your local service voltage for proper compatibility with
        connected loads. Data code: 40104.EPSVoltage"
      dtype: uint16
      unit: N/A
      category: BackupPower
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Backup Power
      - label_family: Component
        label_text: Backup Power
      - label_family: Type of Data
        label_text: Settings
  - model: 40104
    point: reserved21
    block: fixed
    entry:
      name: reserved21
      description: reserved21
      longdescription: "Reserved Data code: 40104.reserved21"
      dtype: string
      unit: string
      category: BackupPower
      meanings: {}
  - model: 40104
    point: LinkedPort
    block: fixed
    entry:
      name: LinkedPort
      description: Generator Port Connection
      longdescription: "Value from Site Configuration Generator/Generator. If using a
        generator, select which port it's connected to â€” either the GEN port
        or the Grid Input port (sometimes called microgrid mode). If no
        generator is installed, leave this setting on GEN port. Data code:
        40104.LinkedPort"
      dtype: enum16
      unit: N/A
      category: Generator
      meanings:
        "0": MicroGridDisalbe
        "1": MicroGridEnalbe
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
  - model: 40104
    point: BatteryChargeCurrentLimit
    block: fixed
    entry:
      name: BatteryChargeCurrentLimit
      description: Battery Charge Current Limit
      longdescription: "Value from Site Configuration Generator/Generator. Sets the
        maximum DC current the inverter will send to the battery when charging
        from the generator. Data code: 40104.BatteryChargeCurrentLimit"
      dtype: uint32
      unit: uint32
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Settings
  - model: 40104
    point: GeneratorRatedPower
    block: fixed
    entry:
      name: GeneratorRatedPower
      description: Generator Rated Power
      longdescription: "Value from Site Configuration Generator/Generator. Specify the
        generator's continuous rated output power. Data code:
        40104.GeneratorRatedPower"
      dtype: uint16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Settings
  - model: 40104
    point: GeneratorCoolDownTime
    block: fixed
    entry:
      name: GeneratorCoolDownTime
      description: Generator Cool-Down Time
      longdescription: "Value from Site Configuration Generator/Generator. Sets the
        time the generator continues running after charging stops to allow for
        safe cooling. Data code: 40104.GeneratorCoolDownTime"
      dtype: uint16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Settings
  - model: 40104
    point: socGenStart
    block: fixed
    entry:
      name: socGenStart
      description: Generator Start/Stop SOC Start SOC
      longdescription: "Value from Site Configuration Generator/Generator. Configures
        the battery state of charge thresholds for automatic generator control.
        The generator will start when battery SOC drops to StartSOC and stop
        when it reaches StopSOC. Data code: 40104.socGenStart"
      dtype: uint16
      unit: "%"
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
  - model: 40104
    point: socGenEnd
    block: fixed
    entry:
      name: socGenEnd
      description: Generator Start/Stop SOC Stop SOC
      longdescription: "Value from Site Configuration Generator/Generator. Configures
        the battery state of charge thresholds for automatic generator control.
        The generator will start when battery SOC drops to StartSOC and stop
        when it reaches StopSOC. Data code: 40104.socGenEnd"
      dtype: uint16
      unit: "%"
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
  - model: 40104
    point: GeneratorBoost
    block: fixed
    entry:
      name: GeneratorBoost
      description: Generator Boost
      longdescription: "Value from Site Configuration Generator/Generator. Enables
        dynamic adjustment of generator charging power for faster battery
        recovery when needed. Data code: 40104.GeneratorBoost"
      dtype: enum16
      unit: N/A
      category: Generator
      meanings:
        "0": Disable
        "1": Enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
  - model: 40104
    point: StartGeneratorExercise
    block: fixed
    entry:
      name: StartGeneratorExercise
      description: Battery Quick Charge with Generator
      longdescription: "Value from Site Configuration Generator/Generator. Start the
        generator to charge the battery. Data code:
        40104.StartGeneratorExercise"
      dtype: enum16
      unit: N/A
      category: Generator
      meanings:
        "0": Disable
        "1": Enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Generator
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
  - model: 40104
    point: reserved22
    block: fixed
    entry:
      name: reserved22
      description: reserved22
      longdescription: "Reserved Data code: 40104.reserved22"
      dtype: string
      unit: string
      category: Generator
      meanings: {}
  - model: 40104
    point: ACCoupledPV
    block: fixed
    entry:
      name: ACCoupledPV
      description: AC Coupled PV
      longdescription: "Value from Site Configuration AC Coupled PV/AC Coupled PV.
        Enable this option when connecting a grid-tied solar inverter (AC
        Coupled PV) to the system. Disable when no AC Coupled PV is present.
        Data code: 40104.ACCoupledPV"
      dtype: enum16
      unit: N/A
      category: ACCoupledPV
      meanings:
        "0": Disable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
  - model: 40104
    point: socAcCplOn
    block: fixed
    entry:
      name: socAcCplOn
      description: AC Coupled PV Start SOC
      longdescription: "Value from Site Configuration AC Coupled PV/AC Coupled PV.
        Defines the battery state-of-charge thresholds that control when the
        inverter allows AC Coupled PV charging to start and stop. Data code:
        40104.socAcCplOn"
      dtype: uint16
      unit: "%"
      category: ACCoupledPV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
  - model: 40104
    point: socAcCplOff
    block: fixed
    entry:
      name: socAcCplOff
      description: AC Coupled PV Stop SOC
      longdescription: "Value from Site Configuration AC Coupled PV/AC Coupled PV.
        Defines the battery state-of-charge thresholds that control when the
        inverter allows AC Coupled PV charging to start and stop. Data code:
        40104.socAcCplOff"
      dtype: uint16
      unit: "%"
      category: ACCoupledPV
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: PV-AC Couple
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
  - model: 40104
    point: reserved23
    block: fixed
    entry:
      name: reserved23
      description: reserved23
      longdescription: "Reserved Data code: 40104.reserved23"
      dtype: string
      unit: string
      category: ACCoupledPV
      meanings: {}
  - model: 40104
    point: SmartLoad
    block: fixed
    entry:
      name: SmartLoad
      description: Use Smart Load
      longdescription: "Value from Site Configuration Smart Load/Smart Load. Powers
        non-essential loads only when excess solar or battery energy is
        available. Enable this to automatically use surplus energy for optional
        circuits. Data code: 40104.SmartLoad"
      dtype: enum16
      unit: N/A
      category: LoadShedding
      meanings:
        "0": Disable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
  - model: 40104
    point: OnGridAlwaysOn
    block: fixed
    entry:
      name: OnGridAlwaysOn
      description: Smart Load On-Grid Behavior
      longdescription: "Value from Site Configuration Smart Load/Smart Load.
        Determines Smart Load behavior while the system is connected to the
        grid. When enabled, the Smart Load remains powered even if normal
        control conditions are not met. (AKA: **On-Grid Always On**.) Data code:
        40104.OnGridAlwaysOn"
      dtype: enum16
      unit: N/A
      category: LoadShedding
      meanings:
        "0": disable,
        "1": enable
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
  - model: 40104
    point: StartPVPower
    block: fixed
    entry:
      name: StartPVPower
      description: Smart Load Start Power
      longdescription: "Value from Site Configuration Smart Load/Smart Load. Defines
        when the Smart Load turns on. The Smart Load port is energized once PV
        power exceeds this threshold **and** the battery SOC is above the start
        limit. Data code: 40104.StartPVPower"
      dtype: uint32
      unit: uint32
      category: LoadShedding
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Settings
  - model: 40104
    point: SmartLoadOnSoc
    block: fixed
    entry:
      name: SmartLoadOnSoc
      description: Smart Load Start SOC
      longdescription: "Value from Site Configuration Smart Load/Smart Load. Defines
        the battery state-of-charge limits that control the Smart Load. The
        Smart Load turns on when SOC rises above the start limit **and** PV
        power exceeds the start power limit.  Smart load turns off when SOC
        falls below the stop limit. Data code: 40104.SmartLoadOnSoc"
      dtype: uint16
      unit: "%"
      category: LoadShedding
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
  - model: 40104
    point: SmartLoadOffSoc
    block: fixed
    entry:
      name: SmartLoadOffSoc
      description: Smart Load Stopp SOC
      longdescription: "Value from Site Configuration Smart Load/Smart Load. Defines
        the battery state-of-charge limits that control the Smart Load. The
        Smart Load turns on when SOC rises above the start limit **and** PV
        power exceeds the start power limit.  Smart load turns off when SOC
        falls below the stop limit. Data code: 40104.SmartLoadOffSoc"
      dtype: uint16
      unit: "%"
      category: LoadShedding
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: Smart Load
      - label_family: Component
        label_text: Smart Load
      - label_family: Type of Data
        label_text: Settings
      - label_family: Unit
        label_text: "%"
  - model: 40104
    point: reserved24
    block: fixed
    entry:
      name: reserved24
      description: reserved24
      longdescription: "Reserved Data code: 40104.reserved24"
      dtype: string
      unit: string
      category: LoadShedding
      meanings: {}
  - model: 40104
    point: ModbusAddr
    block: fixed
    entry:
      name: ModbusAddr
      description: Parallel unit ID
      longdescription: "Value from Site Configuration Inverter/Parallel. The Unit ID
        (also known as the unit ID, slave ID, or node ID) for this inverter. The
        primary inverter should use address 1, and any secondary inverters
        should use 2 or higher. This sets the modbus address that inverters use
        to communicate with each other. Each inverter that communicates on the
        same Modbus communication line must have a unique address, but addresses
        do not need to be globally unique across separate, unconnected systems.
        Data code: 40104.ModbusAddr"
      dtype: uint16
      unit: N/A
      category: Parallel
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Parallel
  - model: 40104
    point: SystemType
    block: fixed
    entry:
      name: SystemType
      description: System Type
      longdescription: >-
        Value from Site Configuration Inverter/Parallel. Defines how this
        inverter participates in a multi-inverter or multi-phase system. - No
        Parallel: Single inverter system.

        - Single-phase Parallel (Master / Secondary): Multiple inverters on one
        phase.

        - Three-phase Parallel (Master): Multiple inverters forming R/S/T
        phases. Data code: 40104.SystemType
      dtype: enum16
      unit: N/A
      category: Parallel
      meanings:
        "0": no parallel (single one)
        "2": Secondary
        "3": Three phase parallel(Master)
        "4": 2*208(Master)
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Parallel
  - model: 40104
    point: ComposedPhase
    block: fixed
    entry:
      name: ComposedPhase
      description: Assigned Phase
      longdescription: "Value from Site Configuration Inverter/Parallel. Selects which
        output phase this inverter is responsible for in a three-phase system.
        R, S, and T correspond to L1, L2, and L3. Data code:
        40104.ComposedPhase"
      dtype: enum16
      unit: N/A
      category: Parallel
      meanings:
        "1": R
        "2": S
        "3": T
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Parallel
  - model: 40104
    point: DetectedGridPhases
    block: fixed
    entry:
      name: DetectedGridPhases
      description: Detected Grid Phases
      longdescription: "Value from Site Configuration Inverter/Parallel. Attribute in
        Parallel cluster Data code: 40104.DetectedGridPhases"
      dtype: enum16
      unit: N/A
      category: Parallel
      meanings:
        "0": None
        "1": R
        "2": S
        "3": T
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Parallel
  - model: 40104
    point: ShareBatteryStatus
    block: fixed
    entry:
      name: ShareBatteryStatus
      description: Share Battery
      longdescription: "Value from Site Configuration Inverter/Parallel. Allows
        inverters in a parallel group to use a common battery bank instead of
        keeping batteries isolated per inverter. Data code:
        40104.ShareBatteryStatus"
      dtype: enum16
      unit: N/A
      category: Parallel
      meanings:
        "0": Battery connect parallel
        "1": Battery connect independence
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Parallel
  - model: 40104
    point: ParallelNum
    block: fixed
    entry:
      name: ParallelNum
      description: Inverters in parallel
      longdescription: "Value from Site Configuration Inverter/Parallel. Total number
        of inverters detected in this parallel system. Data code:
        40104.ParallelNum"
      dtype: uint16
      unit: N/A
      category: Parallel
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Feature
        label_text: Parallel
  - model: 40104
    point: Role
    block: fixed
    entry:
      name: Role
      description: Inverter Role
      longdescription: "Value from Site Configuration Inverter/Parallel. Reports
        whether this inverter is acting as Primary (sometimes called the Master)
        or Secondary in the current parallel configuration. Data code:
        40104.Role"
      dtype: enum16
      unit: N/A
      category: Parallel
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Parallel
  - model: 40104
    point: ParallelPhase
    block: fixed
    entry:
      name: ParallelPhase
      description: Reported Phase
      longdescription: "Value from Site Configuration Inverter/Parallel. Reports which
        phase (R / S / T) this inverter is currently serving in the parallel
        system. Data code: 40104.ParallelPhase"
      dtype: enum16
      unit: N/A
      category: Parallel
      meanings:
        "1": R
        "2": S
        "3": T
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Inverter
      - label_family: Component
        label_text: AC Side
      - label_family: Type of Data
        label_text: Settings
      - label_family: Type of Data
        label_text: Status
      - label_family: Feature
        label_text: Parallel
  - model: 40104
    point: reserved25
    block: fixed
    entry:
      name: reserved25
      description: reserved25
      longdescription: "Reserved Data code: 40104.reserved25"
      dtype: string
      unit: string
      category: Parallel
      meanings: {}
  - model: 40104
    point: A_SF
    block: fixed
    entry:
      name: A_SF
      description: A_SF
      longdescription: "A_SF Data code: 40104.A_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: V_SF
    block: fixed
    entry:
      name: V_SF
      description: V_SF
      longdescription: "V_SF Data code: 40104.V_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: W_SF
    block: fixed
    entry:
      name: W_SF
      description: W_SF
      longdescription: "W_SF Data code: 40104.W_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: KW_SF
    block: fixed
    entry:
      name: KW_SF
      description: KW_SF
      longdescription: "KW_SF Data code: 40104.KW_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: PF_SF
    block: fixed
    entry:
      name: PF_SF
      description: PF_SF
      longdescription: "PF_SF Data code: 40104.PF_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Hz1_SF
    block: fixed
    entry:
      name: Hz1_SF
      description: Hz1_SF
      longdescription: "Hz1_SF Data code: 40104.Hz1_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Hz2_SF
    block: fixed
    entry:
      name: Hz2_SF
      description: Hz2_SF
      longdescription: "Hz2_SF Data code: 40104.Hz2_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Time_SF
    block: fixed
    entry:
      name: Time_SF
      description: Time_SF
      longdescription: "Time_SF Data code: 40104.Time_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Time1_SF
    block: fixed
    entry:
      name: Time1_SF
      description: Time1_SF
      longdescription: "Time1_SF Data code: 40104.Time1_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Time2_SF
    block: fixed
    entry:
      name: Time2_SF
      description: Time2_SF
      longdescription: "Time2_SF Data code: 40104.Time2_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Resistance_SF
    block: fixed
    entry:
      name: Resistance_SF
      description: Resistance_SF
      longdescription: "Resistance_SF Data code: 40104.Resistance_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Ah_SF
    block: fixed
    entry:
      name: Ah_SF
      description: Ah_SF
      longdescription: "Ah_SF Data code: 40104.Ah_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Droop1_SF
    block: fixed
    entry:
      name: Droop1_SF
      description: Droop1_SF
      longdescription: "Droop1_SF Data code: 40104.Droop1_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Droop2_SF
    block: fixed
    entry:
      name: Droop2_SF
      description: Droop2_SF
      longdescription: "Droop2_SF Data code: 40104.Droop2_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Percentage1_SF
    block: fixed
    entry:
      name: Percentage1_SF
      description: Percentage1_SF
      longdescription: "Percentage1_SF Data code: 40104.Percentage1_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Percentage2_SF
    block: fixed
    entry:
      name: Percentage2_SF
      description: Percentage2_SF
      longdescription: "Percentage2_SF Data code: 40104.Percentage2_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: Percentage3_SF
    block: fixed
    entry:
      name: Percentage3_SF
      description: Percentage3_SF
      longdescription: "Percentage3_SF Data code: 40104.Percentage3_SF"
      dtype: sunssf
      unit: sunssf
      category: Scale Factors
      meanings: {}
  - model: 40104
    point: reserved26
    block: fixed
    entry:
      name: reserved26
      description: reserved26
      longdescription: "Reserved Data code: 40104.reserved26"
      dtype: string
      unit: string
      category: Scale Factors
      meanings: {}
`,O0=`protocols:
    - model: lifecycle_events
      point: is_online
      block: fixed
      entry:
        name: is_online
        description: Online Status
        longdescription: Indicates whether the device is online and accessible.
        dtype: enum16
        unit: N/A
        category: General
        meanings:
            0: Offline
            1: Online
      labels:
      - label_family: Equipment
        label_text: Gateway
      - label_family: Feature
        label_text: Online Status
      - label_family: Type of Data
        label_text: Status
      - label_family: Type of Data
        label_text: Readings
      - label_family: Level of Detail
        label_text: Standard
    - model: lifecycle_events
      point: client_initiated
      block: fixed
      entry:
        name: client_initiated
        description: Client Initiated
        longdescription: Whether the disconnection was initiated by the device (only relevant for offline events)
        dtype: enum16
        unit: N/A
        category: Lifecycle
        meanings:
            0: No
            1: Yes
      labels:
      - label_family: Equipment
        label_text: Gateway
      - label_family: Feature
        label_text: Online Status
      - label_family: Type of Data
        label_text: Status
      - label_family: Type of Data
        label_text: Readings
      - label_family: Level of Detail
        label_text: Complete            
    - model: lifecycle_events
      point: ip
      block: fixed
      entry:
        name: ip
        description: IP Address
        longdescription: IP address from which the device connected (only present for online events)
        dtype: string
        unit: N/A
        category: General
    - model: lifecycle_events
      point: offline_reason
      block: fixed
      entry:
        name: offline_reason
        description: Offline Reason
        longdescription: Reason for disconnection (only present for offline events)
        dtype: string
        unit: N/A
        category: Lifecycle
        `,F0=`# Label Help Text
# This file provides help text for all label families and their label values
# Used to display tooltips and modal help in the UI

label_families:
  Equipment:
    help: "Identifies the equipment that the telemetry point belongs to."
    labels:
      Inverter:
        help: "Points related to the inverter's operation, including power conversion, voltage, frequency, and operational status."
      Battery:
        help: "Points related to battery system operation, including state of charge, voltage, current, temperature, and charging/discharging status."
      Generator:
        help: "Points related to generator operation, including generator status, power output, and control parameters."
      Gateway:
        help: "The gateway is the device such as the Fortress Guardian that connects the system to the internet."
  Component:
    help: "Identifies the physical component or subsystem that the telemetry point measures or relates to."
    labels:
      Inverter:
        help: "Points related to the inverter's operation, including power conversion, voltage, frequency, and operational status."
      Battery:
        help: "Points related to battery system operation, including state of charge, voltage, current, temperature, and charging/discharging status."
      PV:
        help: "Points related to photovoltaic (solar) panel systems, including DC and AC coupled PV measurements."
      Grid:
        help: "Points related to the electrical grid connection, including grid voltage, frequency, power import/export, and grid status."
      Building Load:
        help: "Points related to the building's electrical load consumption, including total load, per-phase load, and load characteristics."
      Generator:
        help: "Points related to backup generator operation, including generator status, power output, and control parameters."
      Backup Power:
        help: "Points related to backup power systems and emergency power supply functionality."
      Smart Load:
        help: "Points related to smart load management, including controllable loads and load scheduling."
      RSD:
        help: "Points related to Rapid Shutdown (RSD) functionality for solar systems."
      Gateway:
        help: "The gateway is the device such as the Fortress Guardian that connects the system to the internet."

  Feature:
    help: "Identifies the feature or functional area that the telemetry point supports or configures."
    labels:
      "Basic Setup":
        help: "Points related to fundamental system configuration and basic operational parameters."
      "Battery Scheduling":
        help: "Points related to battery charge/discharge scheduling, time-of-use settings, and battery management strategies."
      "Grid Charge":
        help: "Points related to charging the battery from the grid, including charge schedules and grid charge control."
      "Grid Connection":
        help: "Points related to grid connection status, synchronization, and connection/disconnection controls."
      "Grid Protection":
        help: "Points related to grid protection functions, including over/under voltage, frequency protection, and anti-islanding."
      "Grid Support":
        help: "Points related to grid support functions such as frequency response, voltage regulation, and reactive power control."
      "Power Limits":
        help: "Points related to power limit settings, including maximum charge/discharge power, grid export limits, and power curtailment."
      "Selling Power":
        help: "Points related to selling power back to the grid, including export limits, sell schedules, and net metering settings."
      "PV-DC":
        help: "Points related to DC-coupled photovoltaic systems, including MPPT (Maximum Power Point Tracking) data and DC string measurements."
      "PV-AC Couple":
        help: "Points related to AC-coupled photovoltaic systems, where solar inverters connect to the AC side of the system."
      Firmware:
        help: "Points related to firmware version information, software updates, and system identification."
      Setup:
        help: "Points related to system setup, configuration, and installation parameters."
      Meter:
        help: "Points related to energy metering, including consumption meters, production meters, and net metering."
      CT:
        help: "Points related to current transformer (CT) measurements and CT calibration settings."
      Parallel:
        help: "Points related to parallel inverter operation, including multi-unit coordination and parallel system status."
      "Smart Load":
        help: "Points related to smart load control, including load scheduling, priority settings, and load management."
      "Backup Power":
        help: "Points related to backup power operation, including backup mode settings and backup power availability."

  Type of Data:
    help: "Categorizes the type of information the telemetry point provides."
    labels:
      Readings:
        help: "Measured values reported by the equipment on-site, including voltage, current, power, and temperature."
      Settings:
        help: "Configuration parameters and set points that control system behavior, along with their history. These values can be adjusted on the Site Configuration page."
      Nameplate:
        help: "Information from equipment nameplates, such as maximum rated power output or nominal frequency."
      Alarms/Faults:
        help: "System alarms and faults that alert you to abnormal conditions, including hardware protection events, communication losses, configuration errors, or electrical issues."
      Status:
        help: "Operating states reported by the system, including mode selections, on/off indicators, and other values that show how the equipment is currently running."


  Level of Detail:
    help: "Indicates the level of detail or complexity of the telemetry point."
    labels:
      Standard:
        help: "Shows the key data needed for a quick picture of power flows and overall system operation."
      Extended:
        help: "Includes everything in Essential plus additional electrical details—voltage, current, frequency—as well as recent alarms and commonly adjusted settings."
      Complete:
        help: "Displays the complete set of available data points, including all technical readings and the full history of settings and events."

  Unit:
    help: "Indicates the unit of measurement for numeric telemetry values."
    labels:
      Power:
        help: "Power measurements in watts (W) or kilowatts (kW). Represents electrical power consumption or generation.  Includes both real and reactive power."
      Energy:
        help: "Energy measurements in watt-hours (Wh) or kilowatt-hours (kWh). Represents cumulative energy over time."
      Volt:
        help: "Voltage measurements in volts (V). Represents electrical potential difference. Includes DC, AC line-to-line, and AC line-to-neutral voltages."
      Current:
        help: "Current measurements in amperes (A)."
      Freq:
        help: "Frequency measurements in hertz (Hz)."
      Temp:
        help: "Temperature measurements in degrees Celsius (°C) or Fahrenheit (°F)."
      "%":
        help: "Percentage values (%), commonly used for state of charge, efficiency, power factor, and other ratio-based measurements."
`;function q0({selectedInverters:e,onChange:t,availableInverters:n=["001","002","003"],getFullSerialNumber:l}){const[a,i]=$.useState(!1),r=$.useRef(null),s=e.size===n.length,c=s?"All Inverters":Array.from(e).sort().map(m=>l(m)).join(", ");$.useEffect(()=>{const m=p=>{r.current&&!r.current.contains(p.target)&&i(!1)};if(a)return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[a]);const d=()=>{t(s?new Set(["001"]):new Set(n))},u=m=>{const p=new Set(e);p.has(m)?(p.delete(m),p.size===0&&p.add("001")):p.add(m),t(p)};return o.jsxs("div",{className:"relative",ref:r,children:[o.jsxs("button",{type:"button",onClick:()=>i(!a),className:"text-xs border border-blue-300 rounded px-2 py-1 bg-white text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1",children:[o.jsx("span",{children:c}),o.jsx("svg",{className:`h-3 w-3 transition-transform ${a?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),a&&o.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]",children:o.jsxs("div",{className:"py-1",children:[o.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:s,onChange:d,className:"h-3 w-3"}),o.jsx("span",{className:"text-xs text-gray-700",children:"All Inverters"})]}),n.map(m=>o.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:e.has(m),onChange:()=>u(m),className:"h-3 w-3"}),o.jsx("span",{className:"text-xs text-gray-700",children:l(m)})]},m))]})})]})}const Gu=[{bg:"bg-purple-500",border:"border-purple-600"},{bg:"bg-green-500",border:"border-green-600"},{bg:"bg-teal-500",border:"border-teal-600"},{bg:"bg-blue-500",border:"border-blue-600"},{bg:"bg-pink-500",border:"border-pink-600"},{bg:"bg-orange-500",border:"border-orange-600"},{bg:"bg-indigo-500",border:"border-indigo-600"},{bg:"bg-red-500",border:"border-red-600"}],ju=["text-purple-500","text-green-500","text-teal-500","text-blue-500","text-pink-500","text-orange-500","text-indigo-500","text-red-500"],Bu=[{bg50:"bg-purple-50",bg100:"bg-purple-100",border200:"border-purple-200",border400:"border-purple-400",bg500:"bg-purple-500/80",text600:"text-purple-600",text700:"text-purple-700",ring:"focus:ring-purple-500"},{bg50:"bg-green-50",bg100:"bg-green-100",border200:"border-green-200",border400:"border-green-400",bg500:"bg-green-500/80",text600:"text-green-600",text700:"text-green-700",ring:"focus:ring-green-500"},{bg50:"bg-teal-50",bg100:"bg-teal-100",border200:"border-teal-200",border400:"border-teal-400",bg500:"bg-teal-500/80",text600:"text-teal-600",text700:"text-teal-700",ring:"focus:ring-teal-500"},{bg50:"bg-blue-50",bg100:"bg-blue-100",border200:"border-blue-200",border400:"border-blue-400",bg500:"bg-blue-500/80",text600:"text-blue-600",text700:"text-blue-700",ring:"focus:ring-blue-500"},{bg50:"bg-pink-50",bg100:"bg-pink-100",border200:"border-pink-200",border400:"border-pink-400",bg500:"bg-pink-500/80",text600:"text-pink-600",text700:"text-pink-700",ring:"focus:ring-pink-500"},{bg50:"bg-orange-50",bg100:"bg-orange-100",border200:"border-orange-200",border400:"border-orange-400",bg500:"bg-orange-500/80",text600:"text-orange-600",text700:"text-orange-700",ring:"focus:ring-orange-500"},{bg50:"bg-indigo-50",bg100:"bg-indigo-100",border200:"border-indigo-200",border400:"border-indigo-400",bg500:"bg-indigo-500/80",text600:"text-indigo-600",text700:"text-indigo-700",ring:"focus:ring-indigo-500"},{bg50:"bg-red-50",bg100:"bg-red-100",border200:"border-red-200",border400:"border-red-400",bg500:"bg-red-500/80",text600:"text-red-600",text700:"text-red-700",ring:"focus:ring-red-500"}],U0=36,tn={width:1e3,height:360},W0=["001","002","003"],ay=e=>{const t=parseInt(e,10);return(1e9+t*1e4+t).toString().padStart(10,"0")};function iy(e){let t=0;for(let n=0;n<e.length;n+=1)t=t*31+e.charCodeAt(n)>>>0;return()=>(t=t*1664525+1013904223>>>0,t/2**32)}function $0(e){const t=[];for(let a=0;a<e;a+=1){const i=720+a*10,r=Math.floor(i/60)%24,s=i%60;t.push(`${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`)}return t}function H0(e,t=U0){const n=iy(`line-${e}`),l=[];let a=n()*60+20;for(let i=0;i<t;i+=1){const r=n()-.5,s=4+n()*8,c=a+r*s;a=l.length?l[l.length-1]*.7+c*.3:c,a=Math.max(0,Math.min(140,a)),l.push(Number(a.toFixed(2)))}return l}function z0(e){if(!e.meaningKeys.length)return null;const t=e.meaningKeys,n=iy(e.pointKey),l=t.filter((u,m)=>n()>.35||m===0);l.length===0&&l.push(t[0]);const a=12,i=$0(a),s=(typeof e.dtype=="string"?e.dtype.toLowerCase():"").startsWith("bitfield"),c=Array.from({length:a},()=>new Set);if(s)for(let u=0;u<a;u+=1){let m=!1;l.forEach((p,f)=>{n()>.55&&(c[u].add(p),m=!0),!m&&f===l.length-1&&n()>.7&&(c[u].add(p),m=!0)})}else{let u=0;for(;u<a&&l.length;){const m=Math.floor(n()*l.length),p=l[m],f=1+Math.floor(n()*3);if(n()>.2)for(let v=0;v<f&&u+v<a;v+=1)c[u+v].add(p);u+=f}}const d=t.map(u=>{var _,g;const m=String(u),p=(_=e.friendlyMeanings)==null?void 0:_[m],f=(g=e.meanings)==null?void 0:g[m],v=(p??f??m).trim()||`Value ${m}`,b=c.map(y=>y.has(u));return{meaningKey:u,label:v,activeSlots:b}});return{id:e.pointKey,title:e.name,subtitle:`SN ${e.shortSN}`,timeLabels:i,rows:d,colorIndex:e.colorIndex}}function K0(e,t,n){const l=String(t||"").trim();if(!l)return!1;const a=l.toLowerCase(),i=Array.isArray(e.labels)?e.labels:[];if(i.length===0)return!1;for(const r of i)if(!(!r||typeof r!="object")&&!(!r.label_family||typeof r.label_family!="string"))try{const s=n(r.label_family,r.label_text);if(s&&typeof s=="string"&&s.length>0&&s.toLowerCase().includes(a))return!0}catch{continue}return!1}function ry({levelName:e,levelData:t,selected:n,toggle:l,showHelp:a,onUpdateInverters:i,groupsExpanded:r,pointHelpEnabled:s,onTogglePointHelp:c,onOpenChartTutorial:d,depth:u=0,query:m,parentPath:p="",hierarchy:f=[],getLabelColor:v,getLabelHelp:b}){const _=p?`${p}-${e.replace(/\s+/g,"-")}`:e.replace(/\s+/g,"-"),g=`group-${_}-${u}`,y=Array.isArray(t),h=f[u]||"";if(!t)return null;const C=w=>{const L=`${w.model}:${w.point}`,U=w.entry.description||L,R=w.entry.longdescription||U,M=typeof w.entry.dtype=="string"?w.entry.dtype.toLowerCase():"",E=M.includes("enum")||M.startsWith("bitfield"),F=w.entry.unit&&w.entry.unit!=="N/A"?` (${w.entry.unit})`:"",le=n.has(L),B=le?n.get(L)||new Set(["001"]):new Set,Z=Array.isArray(w.labels)?w.labels:[],ae=a||s.has(L),G=K0(w,m,b);return o.jsxs("div",{id:`point-${L.replace(/:/g,"-")}`,"data-point-key":L,className:"rounded-md px-2 py-1 hover:bg-gray-50 transition-colors",children:[o.jsx("div",{className:"flex items-start gap-2 flex-wrap",children:o.jsxs("label",{className:"flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0",children:[o.jsx("input",{type:"checkbox",checked:le,onChange:j=>{j.stopPropagation(),l(L)},onClick:j=>{j.stopPropagation()},className:"h-4 w-4 flex-shrink-0"}),o.jsxs("span",{className:"text-sm flex items-center gap-1",children:[o.jsxs("span",{children:[U,F]}),E&&o.jsx("span",{className:"text-base leading-none cursor-pointer hover:opacity-70",title:"Selecting this point shows named modes or states as colored bars instead of a line chart. Click to learn more.","aria-label":"Categorical visualization - click to learn more",onClick:j=>{j.preventDefault(),j.stopPropagation(),d==null||d()},children:"📊"})]}),o.jsxs("div",{className:"relative ml-1 flex-shrink-0",children:[o.jsx("span",{className:`cursor-pointer ${ae?"text-blue-600 hover:text-blue-700":"text-gray-400 hover:text-gray-600"}`,title:R,"aria-label":"Help",onClick:j=>{j.preventDefault(),j.stopPropagation(),c(L)},onMouseDown:j=>{j.preventDefault(),j.stopPropagation()},children:"ⓘ"}),G&&o.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse","aria-hidden":"true"},`red-dot-${L}`)]}),le&&o.jsxs("div",{className:"ml-auto flex items-center gap-1 flex-shrink-0",onClick:j=>j.stopPropagation(),children:[o.jsx("span",{className:"text-xs text-gray-600",children:"Inverter SN:"}),o.jsx(q0,{selectedInverters:B,onChange:j=>i(L,j),getFullSerialNumber:ay})]}),ae&&Z.length>0&&o.jsx("div",{className:"ml-2 flex flex-wrap gap-1 w-full",children:Z.map((j,I)=>{const Q=v(j.label_family,j.label_text),ce=b(j.label_family,j.label_text)||`${j.label_family}: ${j.label_text}`;return o.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${Q.bg} ${Q.text} ${Q.border}`,title:ce,children:j.label_text},I)})})]})}),ae&&o.jsx("div",{className:"pl-6 text-xs text-gray-500 whitespace-pre-wrap",children:R})]},L)};if(y){const w=t;return o.jsx("div",{className:"ml-2 space-y-1",children:w.map(C)})}if(!(t instanceof Map))return console.error("LabelGroup: levelData is neither array nor Map",{levelName:e,depth:u,levelData:t,type:typeof t}),null;const k=t,P=u===0;return o.jsxs("details",{id:g,className:`group border-b py-2 ${P?"":"ml-2 border-l pl-2"}`,open:r,children:[o.jsxs("summary",{className:`cursor-pointer list-none ${P?"font-semibold":"font-medium text-gray-700"} flex items-center justify-between`,children:[o.jsxs("div",{className:"flex items-center flex-1 min-w-0",children:[o.jsx("span",{className:"mr-1",children:"▾"}),o.jsx("span",{className:"truncate",children:e})]}),h&&o.jsx("span",{className:"ml-2 px-2 py-0.5 text-[10px] font-normal uppercase tracking-wide text-gray-500 bg-gray-100 rounded-full flex-shrink-0 cursor-help",title:b(h)||h,children:h})]}),o.jsx("div",{className:"mt-2 ml-1 space-y-2",children:[...k.entries()].map(([w,L])=>w===""?Array.isArray(L)?o.jsx("div",{className:"ml-2 space-y-1",children:L.map(C)},""):null:o.jsx(ry,{levelName:w,levelData:L,selected:n,toggle:l,showHelp:a,onUpdateInverters:i,groupsExpanded:r,pointHelpEnabled:s,onTogglePointHelp:c,onOpenChartTutorial:d,depth:u+1,query:m,parentPath:_,hierarchy:f,getLabelColor:v,getLabelHelp:b},w))})]})}function oy({family:e,labels:t,onClose:n,getLabelHelp:l}){const a=l(e),i=[...t].sort();return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:n,children:o.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsxs("h2",{className:"text-xl font-semibold text-gray-800",children:[e," Labels"]}),o.jsx("button",{onClick:n,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),a&&o.jsxs("div",{className:"mb-4 rounded-lg bg-blue-50 p-3 text-sm text-gray-700",children:[o.jsxs("strong",{className:"font-semibold",children:["About ",e,":"]})," ",a]}),o.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:o.jsx("div",{className:"space-y-4",children:i.map(r=>{const s=l(e,r);return o.jsxs("div",{className:"border-b border-gray-200 pb-3 last:border-b-0",children:[o.jsx("div",{className:"mb-1 font-medium text-gray-800",children:r}),s?o.jsx("div",{className:"text-sm text-gray-600",children:s}):o.jsx("div",{className:"text-sm italic text-gray-400",children:"No help text available"})]},r)})})})]})})}function Q0({onClose:e}){return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:o.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"How do filters work?"}),o.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"space-y-4 text-gray-700",children:[o.jsx("p",{children:"Use filters to quickly jump to the part of the system you're interested in—like just battery settings, inverter readings, or grid-related features—without needing to scroll through the full list."}),o.jsx("p",{children:"Select any combination of filters—such as component, type of data, unit, or feature—and the list will update instantly to show only points that match your selection. You can choose multiple filters at once to get more specific."}),o.jsx("p",{children:"As you refine the list, filters that no longer apply will dim, show a count of zero, and become unavailable, helping you see which combinations still have matching points."})]})]})})}function Y0({allLabels:e,selectedLabels:t,onToggleLabel:n,onClearFilters:l,protocols:a,detailLevel:i,filterStructure:r,getLabelColor:s,getLabelHelp:c}){const[d,u]=$.useState(200),[m,p]=$.useState(!1),[f,v]=$.useState(null),[b,_]=$.useState(!1),[g,y]=$.useState(!1),h=$.useRef(null),C=$.useRef(null),k=$.useMemo(()=>{const E=[];return["Equipment","Component","Type of Data","Unit"].forEach(le=>{e.has(le)&&E.push(le)}),e.forEach((le,B)=>{B!=="Level of Detail"&&!E.includes(B)&&E.push(B)}),E},[e]),P=E=>Array.from(t).filter(F=>F.startsWith(`${E}:`)).map(F=>F.split(":",2)[1]),w=E=>{if(r!=="sequential")return!1;const F=k.indexOf(E);if(F===0)return!1;const le=k[F-1];return P(le).length===0},L=$.useCallback((E,F)=>{const le=`${E}:${F}`,B=new Set;t.forEach(G=>{const[j]=G.split(":",2);j!==E&&B.add(G)}),B.add(le);const Z=new Map;B.forEach(G=>{const[j,I]=G.split(":",2);Z.has(j)||Z.set(j,new Set),Z.get(j).add(I)});const ae=(()=>{switch(i){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();return a.filter(G=>{const j=Array.isArray(G.labels)?G.labels:[],I=j.filter(ee=>ee.label_family==="Level of Detail").map(ee=>ee.label_text);if(I.length>0&&!I.some(ce=>ae.includes(ce)))return!1;const Q=new Map;j.forEach(ee=>{Q.has(ee.label_family)||Q.set(ee.label_family,new Set),Q.get(ee.label_family).add(ee.label_text)});for(const[ee,ce]of Z.entries()){const ne=Q.get(ee);if(!ne||![...ce].some(de=>ne.has(de)))return!1}return!0}).length},[t,a,i]),U=E=>{E.preventDefault(),p(!0)};$.useEffect(()=>{if(!m)return;const E=le=>{if(h.current){const B=h.current.getBoundingClientRect(),Z=le.clientY-B.top;Z>=100&&Z<=600&&u(Z)}},F=()=>{p(!1)};return document.addEventListener("mousemove",E),document.addEventListener("mouseup",F),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",F)}},[m]);const R=Array.from(t).map(E=>{const[F,le]=E.split(":",2);return{family:F,text:le}}).filter(({family:E})=>E!=="Level of Detail"),M=new Map(e);return M.delete("Level of Detail"),o.jsxs("div",{ref:h,className:"mb-3 rounded-lg border bg-gray-50 p-2",children:[o.jsxs("details",{ref:C,className:"group",open:g,onToggle:E=>y(E.target.open),children:[o.jsxs("summary",{className:"cursor-pointer list-none",children:[o.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 flex-wrap",children:[o.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[o.jsx("svg",{className:"h-4 w-4 text-gray-600 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),o.jsx("span",{className:"flex-shrink-0",children:"Filters"}),R.length>0&&o.jsxs("span",{className:"text-gray-500",children:["(",R.length," active)"]})]}),!g&&o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[M.size>0&&o.jsx("button",{onClick:E=>{E.stopPropagation(),C.current&&(C.current.open=!0,y(!0))},className:"rounded border border-gray-300 bg-white px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex-shrink-0",children:"+ Add Filter"}),o.jsx("button",{onClick:E=>{E.preventDefault(),E.stopPropagation(),_(!0)},className:"flex-shrink-0 text-xs text-blue-600 hover:text-blue-700 underline transition-colors",children:"How do I use filters?"})]})]}),!g&&R.length>0&&o.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 min-w-0 mt-1",children:[R.map(({family:E,text:F})=>{const le=s(E,F);return o.jsxs("span",{className:`rounded border px-1.5 py-0.5 text-xs ${le.bg} ${le.text} ${le.border} border-2 font-semibold flex-shrink-0 flex items-center gap-1`,children:[o.jsx("span",{children:F}),o.jsx("button",{onClick:B=>{B.stopPropagation(),n(E,F)},className:"hover:opacity-70 transition-opacity flex-shrink-0",title:`Remove ${E}: ${F} filter`,"aria-label":`Remove ${E}: ${F} filter`,children:o.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},`${E}:${F}`)}),o.jsx("button",{onClick:E=>{E.stopPropagation(),l()},className:"flex-shrink-0 text-xs text-gray-500 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:"Clear all"})]})]}),o.jsxs("div",{className:"mb-2 flex items-center justify-between gap-2 flex-wrap",children:[o.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[g&&R.length>0&&o.jsx("div",{className:"flex flex-wrap items-center gap-1.5 min-w-0",children:R.map(({family:E,text:F})=>{const le=s(E,F);return o.jsxs("span",{className:`rounded border px-1.5 py-0.5 text-xs ${le.bg} ${le.text} ${le.border} border-2 font-semibold flex-shrink-0 flex items-center gap-1`,children:[o.jsx("span",{children:F}),o.jsx("button",{onClick:B=>{B.stopPropagation(),n(E,F)},className:"hover:opacity-70 transition-opacity flex-shrink-0",title:`Remove ${E}: ${F} filter`,"aria-label":`Remove ${E}: ${F} filter`,children:o.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},`${E}:${F}`)})}),g&&R.length>0&&o.jsx("button",{onClick:E=>{E.stopPropagation(),l()},className:"flex-shrink-0 text-xs text-gray-500 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:"Clear all"})]}),g&&o.jsx("button",{onClick:E=>{E.preventDefault(),E.stopPropagation(),_(!0)},className:"flex-shrink-0 text-xs text-blue-600 hover:text-blue-700 underline transition-colors",children:"How do I use filters?"})]}),o.jsx("div",{className:"space-y-0.5 overflow-auto mt-2",style:{height:`${d}px`},children:r==="sequential"?o.jsx(o.Fragment,{children:k.map((E,F)=>{const le=M.get(E);if(!le)return null;const B=P(E),Z=w(E),ae=B.length>0,G=!Z,j=c(E),I=s(E,"");return Z&&!ae?null:o.jsxs("div",{children:[F>0&&o.jsx("div",{className:"border-t border-gray-200 my-1"}),o.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-1 px-1 rounded bg-gray-50/30",children:[o.jsxs("button",{onClick:()=>v(E),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${ae?`${I.bg} ${I.text} ${I.border} border-2`:Z?"bg-slate-50 text-slate-400 border-slate-200 border":`${I.bg} ${I.text} ${I.border} border`}`,title:j||`View help for ${E} labels`,"aria-label":`Help for ${E}`,children:[o.jsx("span",{className:"truncate",children:E}),o.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${I.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...le].sort().map(Q=>{const ee=`${E}:${Q}`,ce=B.includes(Q),ne=G?L(E,Q):0,te=!G||!ce&&ne===0,de=s(E,Q),De=c(E,Q);return o.jsxs("button",{onClick:()=>{te||n(E,Q)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${te?"opacity-40 cursor-not-allowed bg-white":ce?`${de.bg} ${de.text} ${de.border} border-2 font-semibold`:`bg-white ${de.text} ${de.border} hover:opacity-80 cursor-pointer`}`,style:!ce&&!te?{borderColor:"currentColor"}:void 0,title:Z?"Pick something above to unlock this step":te?"No points available with this combination of filters":De||`${E}: ${Q}`,"aria-disabled":te,tabIndex:te?-1:0,children:[o.jsx("span",{children:Q}),!ce&&G&&o.jsxs("span",{className:`ml-1 ${te?"text-gray-400":"text-gray-500"}`,children:["(",ne,")"]})]},ee)})})]})]},E)})}):o.jsx(o.Fragment,{children:k.map((E,F)=>{const le=M.get(E);if(!le)return null;const B=c(E),Z=s(E,""),ae=Array.from(le).some(G=>t.has(`${E}:${G}`));return o.jsxs("div",{children:[F>0&&o.jsx("div",{className:"border-t border-gray-200 my-1"}),o.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-1 px-1 rounded bg-gray-50/30",children:[o.jsxs("button",{onClick:()=>v(E),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${ae?`${Z.bg} ${Z.text} ${Z.border} border-2`:`${Z.bg} ${Z.text} ${Z.border} border`}`,title:B||`View help for ${E} labels`,"aria-label":`Help for ${E}`,children:[o.jsx("span",{className:"truncate",children:E}),o.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${Z.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...le].sort().map(G=>{const j=`${E}:${G}`,I=t.has(j),Q=L(E,G),ee=!I&&Q===0,ce=s(E,G),ne=c(E,G);return o.jsxs("button",{onClick:()=>{ee||n(E,G)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${ee?"opacity-40 cursor-not-allowed bg-white":I?`${ce.bg} ${ce.text} ${ce.border} border-2 font-semibold`:`bg-white ${ce.text} ${ce.border} hover:opacity-80 cursor-pointer`}`,style:!I&&!ee?{borderColor:"currentColor"}:void 0,title:ee?"No points available with this combination of filters":ne||`${E}: ${G}`,"aria-disabled":ee,tabIndex:ee?-1:0,children:[o.jsx("span",{children:G}),!I&&o.jsxs("span",{className:`ml-1 ${ee?"text-gray-400":"text-gray-500"}`,children:["(",Q,")"]})]},j)})})]})]},E)})})}),o.jsx("div",{onMouseDown:U,className:"mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors",title:"Drag to resize"})]}),f&&o.jsx(oy,{family:f,labels:e.get(f)||new Set,onClose:()=>v(null),getLabelHelp:c}),b&&o.jsx(Q0,{onClose:()=>_(!1)})]})}function J0({series:e,crosshairX:t,onCrosshairChange:n}){if(e.length===0)return null;const l=e.flatMap(d=>d.values),a=Math.min(...l,0),r=Math.max(...l,1)-a||1,s=d=>{if(!n)return;const u=d.currentTarget.getBoundingClientRect(),m=(d.clientX-u.left)/u.width*100;n(Math.max(0,Math.min(100,m)))},c=()=>{n&&n(null)};return o.jsx("div",{className:"h-full w-full relative",onMouseMove:s,onMouseLeave:c,children:o.jsxs("svg",{viewBox:`0 0 ${tn.width} ${tn.height}`,preserveAspectRatio:"none",className:"h-full w-full",children:[e.map(({entry:d,values:u})=>{if(u.length<2)return null;const m=u.map((p,f)=>{const v=f/(u.length-1)*tn.width,b=(p-a)/r,_=tn.height-b*tn.height;return`${f===0?"M":"L"}${v.toFixed(2)},${_.toFixed(2)}`}).join(" ");return o.jsx("path",{d:m,fill:"none",stroke:"currentColor",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round",className:`${ju[d.colorIndex%ju.length]} drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]`,opacity:.95},d.pointKey)}),t!=null&&o.jsx("line",{x1:t/100*tn.width,y1:0,x2:t/100*tn.width,y2:tn.height,stroke:"#374151",strokeWidth:1.5,strokeDasharray:"4 2",opacity:.7,pointerEvents:"none"})]})})}function X0({data:e,onRemove:t,crosshairX:n,onCrosshairChange:l,onDragStart:a,onDragEnd:i,isDragActive:r}){const[s,c]=$.useState(!0),d=s?e.rows.filter(v=>v.activeSlots.some(Boolean)):e.rows,u=e.rows.length-d.length,m=Bu[e.colorIndex%Bu.length],p=v=>{if(!l)return;const b=v.currentTarget.getBoundingClientRect(),_=(v.clientX-b.left)/b.width*100;l(Math.max(0,Math.min(100,_)))},f=()=>{l&&l(null)};return o.jsxs("div",{draggable:!0,onDragStart:v=>{v.stopPropagation(),a&&a();const b=v.currentTarget.cloneNode(!0);b.style.position="absolute",b.style.top="-1000px",document.body.appendChild(b),v.dataTransfer.setDragImage(b,0,0),setTimeout(()=>document.body.removeChild(b),0)},onDragEnd:v=>{v.stopPropagation(),i&&i()},className:`rounded-lg border ${m.border200} bg-white shadow-sm ${r?"cursor-grab active:cursor-grabbing":""}`,children:[o.jsxs("div",{className:`flex items-center justify-between gap-2 border-b ${m.border200} ${m.bg50} px-4 py-1.5`,children:[o.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.jsx("span",{className:`font-semibold ${m.text700}`,children:e.title}),o.jsx("span",{className:m.text600,children:e.subtitle})]}),o.jsxs("div",{className:`flex items-center gap-3 text-xs ${m.text700}`,children:[o.jsxs("label",{className:"flex items-center gap-1.5 font-medium",children:[o.jsx("input",{type:"checkbox",checked:s,onChange:v=>c(v.target.checked),className:`h-3 w-3 rounded ${m.border400} ${m.text600} ${m.ring}`}),"Hide empty bars"]}),o.jsxs("span",{className:`text-[11px] ${m.text600}`,children:[u," values hidden"]}),t&&o.jsx("button",{type:"button",onClick:v=>{v.stopPropagation(),t()},className:"text-[11px] px-2 py-1 rounded border border-transparent text-gray-500 hover:text-red-600 hover:border-red-200 transition-colors",title:"Remove this point","aria-label":"Remove categorical point",children:"×"})]})]}),o.jsxs("div",{className:"px-4 py-3 relative",onMouseMove:p,onMouseLeave:f,children:[o.jsx("div",{className:"space-y-1",children:d.length===0?o.jsx("div",{className:"text-xs text-gray-500 italic",children:'No categorical data is visible. Disable "Hide empty bars" to view all meanings.'}):d.map(v=>o.jsxs("div",{className:"flex flex-col",children:[o.jsx("div",{className:"text-[10px] font-medium text-gray-600 mb-0.5",children:v.label}),o.jsx("div",{className:`relative h-3 rounded ${m.bg100} overflow-hidden`,children:o.jsx("div",{className:"absolute inset-0 flex",children:v.activeSlots.map((b,_)=>o.jsx("div",{className:`flex-1 ${_<v.activeSlots.length-1?`border-r ${m.border200}`:""} ${b?m.bg500:"bg-transparent"}`},`${v.meaningKey}-${_}`))})})]},v.meaningKey))}),n!=null&&o.jsx("div",{className:"absolute top-0 bottom-0 w-px bg-gray-700 pointer-events-none opacity-70",style:{left:`calc(1rem + ${n}%)`}})]})]})}function Z0({selectedPoints:e,protocols:t,onUpdateInverters:n,onScrollToPoint:l,onRemoveInverter:a,onSelectPointsToggle:i,selectPointsOpen:r,onDeleteChart:s,onShowTutorial:c,crosshairX:d,onCrosshairChange:u,onDragStart:m,onDragEnd:p,isDragActive:f,isDropTarget:v}){const[b,_]=$.useState(new Set),g=Array.from(e.entries()).map(([B,Z])=>{const[ae,G]=B.split(":"),j=t.find(Q=>Q.model===ae&&Q.point===G),I=j&&(j.entry.description||j.entry.name)||G;return{key:B,name:I,inverters:Z}}).filter(B=>B.name),y=g.flatMap(({key:B,name:Z,inverters:ae})=>{var me,Ve,Xt,kn,Bt,Dn;const[G,j]=B.split(":"),I=t.find(He=>He.model===G&&He.point===j),Q=(me=I==null?void 0:I.entry)!=null&&me.unit&&I.entry.unit!=="N/A"?I.entry.unit:"N/A",ee=((Ve=I==null?void 0:I.entry)==null?void 0:Ve.longdescription)||((Xt=I==null?void 0:I.entry)==null?void 0:Xt.description)||"",ce=(kn=I==null?void 0:I.entry)==null?void 0:kn.dtype,ne=(Bt=I==null?void 0:I.entry)==null?void 0:Bt.meanings,te=(Dn=I==null?void 0:I.entry)==null?void 0:Dn.friendly_meanings,de=new Set;ne&&Object.keys(ne).forEach(He=>de.add(String(He))),te&&Object.keys(te).forEach(He=>de.add(String(He)));const De=Array.from(de),_t=De.length>0;return Array.from(ae).sort().map((He,Zn)=>{const el=ay(He);return{key:B,pointKey:`${B}:${He}`,name:Z,shortSN:He,fullSN:el,unit:Q,model:G,point:j,longDescription:ee,colorIndex:(g.findIndex(Yl=>Yl.key===B)*W0.length+Zn)%Gu.length,dtype:ce,meanings:ne,friendlyMeanings:te,meaningKeys:De,isCategorical:_t}})}),h=y.filter(B=>!b.has(B.pointKey)),C=h.filter(B=>B.isCategorical),k=h.filter(B=>!B.isCategorical),P=y.filter(B=>!B.isCategorical),w=$.useMemo(()=>C.map(B=>z0(B)).filter(B=>B!==null),[C]),L=k.length>0,U=$.useMemo(()=>k.map(B=>({entry:B,values:H0(B.pointKey)})),[k]),R=B=>{_(Z=>{const ae=new Set(Z);return ae.has(B)?ae.delete(B):ae.add(B),ae})},M=B=>{const Z=P.map(j=>j.pointKey),G=Z.filter(j=>!b.has(j)).length===1&&!b.has(B);_(G?new Set:new Set(Z.filter(j=>j!==B)))},E=(B,Z,ae)=>{ae.stopPropagation(),a==null||a(B,Z)},le=!(!L&&w.length>0&&e.size>0);return o.jsxs("div",{className:"w-full h-full flex flex-col relative",children:[o.jsxs("div",{className:"absolute top-4 right-4 z-20 flex items-center gap-2",children:[i&&o.jsxs("button",{onClick:()=>i(!r),className:"text-xs px-3 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center gap-2 shadow-sm",title:r?"Hide Add Points":"Show Add Points","data-role":"sidebar-toggle",children:[o.jsx("span",{children:"Add Points"}),o.jsx("svg",{className:`h-4 w-4 text-gray-600 transition-transform ${r?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s&&o.jsx("button",{onClick:B=>{B.stopPropagation(),s()},className:"text-xs px-2 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center justify-center text-gray-600 hover:text-gray-800 opacity-80 hover:opacity-100 shadow-sm",title:"Delete chart",children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"p-4 flex flex-col h-full",children:[o.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[le&&o.jsxs("div",{className:"relative flex-1 min-h-[320px] rounded-2xl border border-gray-300 bg-gradient-to-b from-white via-white to-gray-50 shadow-inner overflow-hidden",children:[o.jsxs("div",{className:"absolute left-0 top-0 bottom-10 w-12 border-r border-gray-200 flex flex-col items-center justify-between py-4 text-gray-600",children:[o.jsx("span",{className:"text-[10px] uppercase tracking-widest leading-none transform -rotate-90",children:"Value"}),o.jsx("div",{className:"flex flex-col items-center gap-3 text-gray-400",children:[0,1,2,3,4].map(B=>o.jsx("div",{className:"w-3 h-px bg-gray-400/70"},B))}),o.jsx("span",{className:"text-[10px]",children:"0"})]}),o.jsxs("div",{className:"absolute left-12 right-6 bottom-6 h-10 border-t border-gray-200 flex items-center justify-between px-2 text-gray-500",children:[o.jsx("span",{className:"text-[11px]",children:"0"}),o.jsx("div",{className:"flex gap-2",children:[0,1,2,3,4].map(B=>o.jsx("div",{className:"h-3 w-px bg-gray-400/60"},B))}),o.jsx("span",{className:"text-[11px] uppercase tracking-widest",children:"Time"})]}),o.jsx("div",{className:`absolute top-6 bottom-16 left-12 right-6 rounded-xl bg-white/40 backdrop-blur-sm ${e.size===0?"cursor-pointer":"cursor-default"}`,onClick:B=>{B.target.closest("button")||e.size===0&&i&&i(!0)},children:e.size===0?o.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-gray-500",children:[o.jsx("div",{className:"text-base font-medium text-gray-700",children:"No points selected"}),o.jsx("div",{children:"Click anywhere in this area to select points"}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:["New to charts?"," ",o.jsx("button",{onClick:B=>{B.stopPropagation(),c==null||c()},className:"text-blue-600 hover:text-blue-700 underline",children:"View quick tutorial"})]})]}):y.length===0?o.jsx("div",{className:"flex h-full items-center justify-center text-sm text-gray-400",children:"Select points to display charts"}):L?o.jsxs("div",{className:"relative h-full w-full",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 grid grid-rows-4 opacity-30",children:[0,1,2,3].map(B=>o.jsx("div",{className:"border-b border-dashed border-gray-300"},B))}),o.jsx(J0,{series:U,crosshairX:d,onCrosshairChange:u})]}):o.jsx("div",{className:"flex h-full items-center justify-center px-6 text-center text-sm text-gray-500",children:"All selected points are hidden. Use the legend controls to show a series."})})]}),w.length>0&&o.jsx("div",{className:`${le?"":"pt-2"}`,"data-categorical-stack":!0,children:o.jsx("div",{className:"space-y-4",children:w.map(B=>{const Z=()=>{const I=B.id.split(":"),Q=I.pop()??"",ee=I.join(":");a==null||a(ee,Q)},G=B.id.split(":").slice(0,-1).join(":"),j=e.get(G)||new Set;return o.jsx(X0,{data:B,onRemove:Z,crosshairX:d,onCrosshairChange:u,onDragStart:()=>{m&&m(G,j)},onDragEnd:p,isDragActive:f},`${B.id}:${B.subtitle}`)})})})]}),P.length>0&&o.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:P.map(({pointKey:B,name:Z,shortSN:ae,fullSN:G,colorIndex:j,key:I,unit:Q,point:ee,longDescription:ce})=>{const ne=Gu[j],te=b.has(B),de=["Click to toggle visibility (double-click to show only this)","",`This is the point "${Z}" (${ee}) as read by inverter ${G}.`];ce&&de.push("",ce);const De=de.join(`
`),_t=e.get(I)||new Set;return o.jsxs("div",{draggable:!0,onDragStart:me=>{me.stopPropagation(),m&&m(I,_t);const Ve=me.currentTarget.cloneNode(!0);Ve.style.position="absolute",Ve.style.top="-1000px",document.body.appendChild(Ve),me.dataTransfer.setDragImage(Ve,0,0),setTimeout(()=>document.body.removeChild(Ve),0)},onDragEnd:me=>{me.stopPropagation(),p&&p()},className:`flex items-center gap-2 text-xs group hover:bg-gray-50 rounded px-2 py-1 border border-gray-200 bg-white transition-colors flex-shrink-0 ${f?"cursor-grab active:cursor-grabbing":"cursor-pointer"}`,title:De,children:[o.jsx("div",{className:`w-3 h-3 rounded-sm flex-shrink-0 ${ne.bg} ${ne.border} border cursor-pointer`,onClick:()=>R(B),onDoubleClick:me=>{me.stopPropagation(),M(B)}}),o.jsx("span",{className:`font-medium text-gray-600 cursor-pointer ${te?"opacity-50 line-through":""}`,onClick:()=>R(B),onDoubleClick:me=>{me.stopPropagation(),M(B)},children:Z}),o.jsxs("span",{className:"text-gray-400",children:["(SN ",ae,")"]}),Q!=="N/A"&&o.jsxs("span",{className:"text-gray-400",children:["[",Q,"]"]}),o.jsx("button",{onClick:me=>{me.stopPropagation(),R(B)},onDoubleClick:me=>{me.stopPropagation(),M(B)},className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:te?"Show in chart (double-click to show only this)":"Hide in chart (double-click to show only this)",children:te?o.jsxs("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})}),o.jsx("button",{onClick:me=>E(I,ae,me),className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:"Remove this data point from the chart",children:o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},B)})})]})]})}const ex="/matter-site-config-prototype/assets/adding_points-CERP4QNM.png",tx="/matter-site-config-prototype/assets/resizing_chart-BHR8TqZN.png",nx="/matter-site-config-prototype/assets/create_additional_charts-CshHgktp.png",lx="/matter-site-config-prototype/assets/moving_points_between_charts-C3gFhIkG.png",ax="/matter-site-config-prototype/assets/remove_chart-DXjixanx.png",ix="/matter-site-config-prototype/assets/browse_and_find_points-Dwpkv5sf.png",rx="/matter-site-config-prototype/assets/selecting_devices-Cv4bL765.png",ox="/matter-site-config-prototype/assets/troubleshooting_points-C4zPrx4-.png",sx="/matter-site-config-prototype/assets/lines_vs_status-HMYx_HFm.png",sy=({isOpen:e,onClose:t,initialStep:n=0})=>{const[l,a]=A.useState(n);$.useEffect(()=>{e&&a(n)},[e,n]);const i=()=>{a(0),t()};$.useEffect(()=>{const u=m=>{m.key==="Escape"&&e&&i()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e]);const r=[{title:"1. Adding Points to a Chart",image:ex,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"You can add data points to any chart in two ways:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Click anywhere inside an empty chart area"}),o.jsx("br",{}),o.jsx("span",{className:"text-sm text-slate-600",children:"This opens the point selector immediately."})]}),o.jsxs("li",{children:[o.jsx("strong",{children:'Use the "Add Points" menu'})," in the top-right corner of the chart."]})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"You can add as many points as you need—measurements or status values from any device at the site."})]})},{title:"2. Resizing a Chart",image:tx,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"To change the size of a chart:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:["Grab the ",o.jsx("strong",{children:"handle on the right edge"})," to make it wider."]}),o.jsxs("li",{children:["Grab the ",o.jsx("strong",{children:"handle on the bottom edge"})," to make it taller."]}),o.jsx("li",{children:"Drag both to resize the chart in both directions."})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"Resize charts to give more room to important points."})]})},{title:"3. Creating Additional Charts",image:nx,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["Click the ",o.jsx("strong",{children:'"+" button'})," below any chart to create a new one."]}),o.jsx("p",{className:"mb-3",children:"Each chart can have:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-1",children:[o.jsx("li",{children:"its own set of points"}),o.jsx("li",{children:"its own size"}),o.jsx("li",{children:"its own layout"})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"Use multiple charts to compare different devices or mix measurements and status views."})]})},{title:"4. Removing a Chart",image:ax,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["To delete a chart, click the ",o.jsx("strong",{children:'"X"'})," in the upper-right corner of the chart frame."]}),o.jsxs("p",{className:"text-sm text-slate-600",children:["Removing a chart does ",o.jsx("strong",{children:"not"})," delete any data points—you can always create a new chart and add them again."]})]})},{title:"5. Browsing and Finding Data Points",image:ix,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["Use the ",o.jsx("strong",{children:"Add Points"})," panel to find the data you want:"]}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsx("li",{children:"Scroll through the list"}),o.jsx("li",{children:"Search by name"}),o.jsxs("li",{children:["Use filters to narrow results by ",o.jsx("strong",{children:"component"}),", ",o.jsx("strong",{children:"type of data"}),", ",o.jsx("strong",{children:"unit"}),", or ",o.jsx("strong",{children:"feature"})]})]}),o.jsxs("p",{className:"text-sm text-slate-600",children:["If you need more advanced or technical points, increase the ",o.jsx("strong",{children:"Detail Level"})," slider."]})]})},{title:"6. Selecting Devices for Each Point",image:rx,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"Many sites have multiple units of the same equipment (e.g., several inverters)."}),o.jsx("p",{className:"mb-3",children:"For each point you select, choose whether it applies to:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-1",children:[o.jsx("li",{children:o.jsx("strong",{children:"One device"})}),o.jsx("li",{children:o.jsx("strong",{children:"A selected group of devices"})}),o.jsx("li",{children:o.jsx("strong",{children:"All devices of that type"})})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"You can add the same point for different devices in any combination."})]})},{title:"7. Troubleshooting Point Discovery",image:ox,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"If you don't see the point you expect:"}),o.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[o.jsx("li",{children:"Broaden your filters"}),o.jsxs("li",{children:["Adjust the ",o.jsx("strong",{children:"Detail Level"})]}),o.jsx("li",{children:"Search for part of the name"}),o.jsx("li",{children:"Make sure the correct device type is selected"})]})]})},{title:"8. Understanding Line vs. Status Charts",image:sx,content:o.jsxs("div",{children:[o.jsxs("div",{className:"mb-4",children:[o.jsx("h4",{className:"font-semibold mb-2",children:"Line charts"}),o.jsx("p",{className:"text-sm mb-2",children:"Show measurements—numbers that rise and fall over time, such as:"}),o.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-600 space-y-1",children:[o.jsx("li",{children:"Power"}),o.jsx("li",{children:"Voltage"}),o.jsx("li",{children:"Current"}),o.jsx("li",{children:"Temperature"})]}),o.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"These appear as a smooth line across the graph."})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold mb-2",children:"Status charts"}),o.jsxs("p",{className:"text-sm mb-2",children:["Data points that will be plotted as a status chart are designated with the 📊 icon.",o.jsx("br",{}),"These show what ",o.jsx("em",{children:"state"})," the equipment was in over time, such as:"]}),o.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-600 space-y-1",children:[o.jsx("li",{children:"Normal"}),o.jsx("li",{children:"Failure"}),o.jsx("li",{children:"On / Off"}),o.jsx("li",{children:"Operating modes"})]}),o.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"Status points appear as colored bars instead of a line, showing when each state was active."})]})]})},{title:"9. Moving Points Between Charts",image:lx,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"You can reorganize your charts by dragging items from one chart to another."}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Drag a legend entry"})," to move a line-chart point."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Drag a status row"})," to move a state-based point."]}),o.jsx("li",{children:"Drop onto any chart (even an empty one) to place it there."})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"This makes it easy to group related data or separate concerns across multiple charts."})]})}],s=()=>{l<r.length-1&&a(l+1)},c=()=>{l>0&&a(l-1)};if(!e)return null;const d=r[l];return o.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[o.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),o.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-200",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-2xl",children:"📘"}),o.jsx("h2",{className:"text-xl font-semibold text-slate-900",children:"Chart Tutorial"})]}),o.jsx("button",{onClick:i,className:"text-slate-400 hover:text-slate-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-6 h-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-slate-900 mb-4",children:d.title}),o.jsx("div",{className:"mb-4 rounded-lg overflow-hidden border border-slate-200 flex justify-center bg-slate-50",children:o.jsx("img",{src:d.image,alt:d.title,className:"max-w-full h-auto max-h-80 object-contain"})}),o.jsx("div",{className:"text-slate-700",children:d.content})]}),o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-slate-200",children:[o.jsxs("div",{className:"text-sm text-slate-600",children:["Step ",l+1," of ",r.length]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{onClick:c,disabled:l===0,className:"px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Previous"}),l<r.length-1?o.jsx("button",{onClick:s,className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",children:"Next"}):o.jsx("button",{onClick:i,className:"px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-colors",children:"Finish"})]})]})]})]})},tc=16,nc=16,Ri=12,Ii=12,Nr=({onAdd:e,ariaLabel:t})=>o.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),e()},className:"relative z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-base font-semibold text-gray-600 opacity-70 shadow-sm transition-all duration-150 ease-out hover:bg-white group-hover:scale-105 group-hover:opacity-100 group-focus-within:opacity-100 focus:scale-105 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300","aria-label":t,children:o.jsx("span",{className:"leading-none",children:"+"})}),Ou=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:a,onAutoFit:i,percentAbove:r,isActive:s=!1,buttonSegments:c})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof i=="function"&&typeof r=="number",u=typeof l=="function",m=d||u,p=f=>{f.key==="Enter"||f.key===" "?(f.preventDefault(),e()):f.key==="ArrowUp"&&d&&n?(f.preventDefault(),n(Ri)):f.key==="ArrowDown"&&d&&n?(f.preventDefault(),n(-Ri)):f.key==="ArrowUp"&&u&&a?(f.preventDefault(),a(Ri)):f.key==="ArrowDown"&&u&&a&&(f.preventDefault(),a(-Ri))};return o.jsxs("div",{role:"separator","aria-orientation":"horizontal",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts"}:u?{"aria-label":"Resize row height","aria-valuetext":`${Math.round(r??100)}%`}:{"aria-label":"Add chart below","aria-disabled":!0},tabIndex:0,onKeyDown:p,onClick:f=>{m||f.target.closest("button")||(f.preventDefault(),e())},onDoubleClick:f=>{f.target.closest("button")||(f.preventDefault(),d&&i?i():e())},onMouseDown:f=>{f.target.closest("button")||f.button===0&&(f.preventDefault(),d&&t?t(f.clientY):u&&l&&l(f.clientY))},className:`group relative flex items-center justify-center ${m?"cursor-row-resize":"cursor-pointer"} select-none outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${s?"ring-2 ring-blue-300/60":""}`,style:{height:tc,paddingLeft:"0.5rem",paddingRight:"0.5rem"},children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center px-4",children:o.jsx("div",{className:`flex-1 h-1 rounded-full transition-colors duration-150 ${s?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`})}),o.jsx("div",{className:`${c&&c.length>0?"grid w-full":"flex w-full"} items-center justify-center`,style:c&&c.length>0?{gridTemplateColumns:c.map(f=>f.size?`${f.size}px`:"1fr").join(" ")}:void 0,children:c&&c.length>0?c.map(f=>o.jsx("div",{className:"flex justify-center py-0.5",children:o.jsx(Nr,{onAdd:f.onAdd,ariaLabel:"Add chart below"})},f.key)):o.jsx(Nr,{onAdd:e,ariaLabel:"Add chart below"})})]})},Mi=({onResizeStart:e,isActive:t=!1})=>o.jsx("div",{className:"relative w-full h-full flex items-center justify-center",style:{pointerEvents:"auto"},children:o.jsx("div",{className:`w-3 h-3 rounded-full cursor-nwse-resize transition-all ${t?"bg-blue-500 scale-125":"bg-gray-400 hover:bg-gray-500"}`,onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),e(n.clientX,n.clientY)},title:"Drag to resize both dimensions",role:"separator","aria-label":"Resize corner"})}),Fu=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:a,onAutoFit:i,percentLeft:r,isActive:s=!1,buttonSegments:c})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof i=="function"&&typeof r=="number",u=typeof l=="function",m=d||u,p=f=>{f.key==="Enter"||f.key===" "?(f.preventDefault(),e()):f.key==="ArrowRight"&&d&&n?(f.preventDefault(),n(Ii)):f.key==="ArrowLeft"&&d&&n?(f.preventDefault(),n(-Ii)):f.key==="ArrowRight"&&u&&a?(f.preventDefault(),a(Ii)):f.key==="ArrowLeft"&&u&&a&&(f.preventDefault(),a(-Ii))};return o.jsxs("div",{role:"separator","aria-orientation":"vertical",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts horizontally"}:u?{"aria-label":"Resize column width"}:{"aria-label":"Add chart to the right","aria-disabled":!0},tabIndex:0,onKeyDown:p,onClick:f=>{m||f.target.closest("button")||(f.preventDefault(),e())},onDoubleClick:f=>{f.target.closest("button")||(f.preventDefault(),m&&i?i():e())},onMouseDown:f=>{f.target.closest("button")||f.button===0&&(f.preventDefault(),d&&t?t(f.clientX):u&&l&&l(f.clientX))},className:`group relative flex h-full w-full ${m?"cursor-col-resize":"cursor-pointer"} select-none flex-col items-center justify-center outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${s?"ring-2 ring-blue-300/60":""}`,style:{width:nc,paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 flex flex-col justify-center py-4",children:o.jsx("div",{className:`mx-auto w-1 rounded-full transition-colors duration-150 ${s?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`,style:{flex:1}})}),o.jsx("div",{className:`${c&&c.length>0?"grid h-full":"flex"} w-full flex-1 flex-col items-center justify-center`,style:c&&c.length>0?{gridTemplateRows:c.map(f=>f.size?`${f.size}px`:"1fr").join(" ")}:void 0,children:c&&c.length>0?c.map(f=>o.jsx("div",{className:"flex items-center justify-center px-0.5",children:o.jsx(Nr,{onAdd:f.onAdd,ariaLabel:"Add chart to the right"})},f.key)):o.jsx(Nr,{onAdd:e,ariaLabel:"Add chart to the right"})})]})},da=280,Gi=360,En=520,ua=780,cy=["001"],qu=[{id:"chart-0",row:0,col:0,points:["40101:pPvTotal","40101:pGridImpTot","40101:pGridExpTot","40101:pBatChg","40101:pBatDischg"]},{id:"chart-1",row:0,col:1,points:["lifecycle_events:is_online","40101:gridStat"]},{id:"chart-2",row:1,col:0,points:["40101:socBat"]},{id:"chart-3",row:1,col:1,points:[]}],cx=e=>new Map(e.map(t=>[t,new Set(cy)]));function dx({protocols:e,onUpdateInverters:t,onScrollToPoint:n,onRemoveInverter:l,onSelectPointsToggle:a,selectPointsOpen:i,callbacksRef:r,onActiveChartSelectedPointsChange:s,onActiveChartPositionChange:c}){const[d,u]=A.useState(()=>qu.map(({id:x,row:S,col:D,points:T})=>({id:x,row:S,col:D,selectedPoints:cx(T)}))),[m,p]=A.useState(qu.length),[f,v]=A.useState("chart-0"),[b,_]=A.useState(()=>new Map([[0,ua],[1,ua]])),[g,y]=A.useState(()=>new Map([[0,En],[1,En]])),[h,C]=A.useState(null),[k,P]=A.useState(null),[w,L]=A.useState(null),[U,R]=A.useState(!1),M=$.useRef(null),E=$.useRef(null),F=$.useRef(null),[le,B]=A.useState(null),Z=$.useRef(null),ae=$.useRef(new Map),[G,j]=A.useState(null),[I,Q]=A.useState(null),[ee,ce]=A.useState(null);$.useEffect(()=>{const x=d.find(S=>S.id===f);x&&s(new Map(x.selectedPoints))},[d,f,s]),$.useEffect(()=>{const x=()=>{const S=ae.current.get(f);if(S){const D=S.getBoundingClientRect();c(D)}else c(null)};return x(),window.addEventListener("scroll",x,!0),window.addEventListener("resize",x),()=>{window.removeEventListener("scroll",x,!0),window.removeEventListener("resize",x)}},[f,d,b,g,c]),$.useLayoutEffect(()=>{r.current={getActiveChartSelectedPoints:()=>{const x=d.find(S=>S.id===f);return x?new Map(x.selectedPoints):new Map},togglePointForActiveChart:x=>{console.log("togglePointForActiveChart called, activeChartId:",f),u(S=>S.map(T=>{if(T.id===f){const N=new Map(T.selectedPoints);if(console.log("Current selected points:",N.size),N.has(x))N.delete(x),console.log("Deleted point, new size:",N.size);else{const q=new Set(["001"]);N.set(x,q),console.log("Added point, new size:",N.size)}return{...T,selectedPoints:N}}return T}))},updateInvertersForActiveChart:(x,S)=>{console.log("updateInvertersForActiveChart called, activeChartId:",f,"inverters:",S),u(D=>D.map(N=>{if(N.id===f){const q=new Map(N.selectedPoints);return S.size===0?q.delete(x):q.set(x,S),console.log("Updated chart, selected points size:",q.size),{...N,selectedPoints:q}}return N}))},getChartGridState:()=>({charts:d.map(x=>({...x,selectedPoints:new Map(x.selectedPoints)})),rowHeights:new Map(g),columnWidths:new Map(b),nextChartId:m,activeChartId:f}),setChartGridState:x=>{u(x.charts.map(S=>({...S,selectedPoints:new Map(S.selectedPoints)}))),y(new Map(x.rowHeights)),_(new Map(x.columnWidths)),p(x.nextChartId),x.activeChartId&&v(x.activeChartId)}}},[d,f,r,g,b,m]),$.useEffect(()=>{if(typeof ResizeObserver>"u")return;const x=new ResizeObserver(S=>{const D=new Map;S.forEach(T=>{const N=T.target,q=N.getAttribute("data-chart-id");if(!q)return;const W=d.find(re=>re.id===q);if(!W)return;const X=N.querySelector("[data-categorical-stack]"),H=X?X.scrollHeight:0;if(H<=0)return;const K=Math.max(En+H+24,da);D.set(W.row,Math.max(K,D.get(W.row)??0))}),D.size!==0&&y(T=>{let N=!1;const q=new Map(T);return D.forEach((W,X)=>{const H=q.get(X)??En;W>H+1&&(q.set(X,W),N=!0)}),N?q:T})});return ae.current.forEach(S=>x.observe(S)),()=>{x.disconnect()}},[d,y]);const ne=$.useCallback(x=>g.get(x)??En,[g]),te=$.useCallback(x=>b.get(x)??ua,[b]),de=$.useCallback((x,S)=>{const D=Math.max(da,S);y(T=>{const N=new Map(T);return N.set(x,D),N})},[]),De=$.useCallback((x,S)=>{const D=Math.max(Gi,S);_(T=>{const N=new Map(T);return N.set(x,D),N})},[]),_t=$.useCallback(x=>{Z.current!==null&&window.clearTimeout(Z.current),B(x),Z.current=window.setTimeout(()=>{B(null),Z.current=null},400)},[]);$.useEffect(()=>()=>{Z.current!==null&&window.clearTimeout(Z.current)},[]);const me=$.useCallback((x,S,D,T)=>{if(T<=da*2){const H=T/2;y(K=>{const re=new Map(K);return re.set(x,H),re.set(S,T-H),re});return}const N=da,q=T-da,W=Math.min(Math.max(D,N),q),X=T-W;y(H=>{const K=new Map(H);return K.set(x,W),K.set(S,X),K})},[]),Ve=$.useCallback((x,S,D,T)=>{if(T<=Gi*2){const H=T/2;_(K=>{const re=new Map(K);return re.set(x,H),re.set(S,T-H),re});return}const N=Gi,q=T-Gi,W=Math.min(Math.max(D,N),q),X=T-W;_(H=>{const K=new Map(H);return K.set(x,W),K.set(S,X),K})},[]),Xt=(x,S,D)=>{if(S===void 0)return;const T=ne(x),N=ne(S);M.current={mode:"between",startY:D,aboveRow:x,belowRow:S,initialAbove:T,initialBelow:N,total:T+N},C(x)},kn=(x,S)=>{M.current={mode:"edge",startY:S,row:x,initialHeight:ne(x)},C(x)};$.useEffect(()=>{if(h===null||!M.current)return;const x=M.current,S=T=>{const N=T.clientY-x.startY;if(x.mode==="between"){const q=x.initialAbove+N;me(x.aboveRow,x.belowRow,q,x.total)}else de(x.row,x.initialHeight+N)},D=()=>{C(null),M.current=null};return document.addEventListener("mousemove",S),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",D)}},[h,me,de]);const Bt=(x,S,D)=>{if(S===void 0)return;const T=te(x),N=te(S);E.current={mode:"between",startX:D,leftCol:x,rightCol:S,initialLeft:T,initialRight:N,total:T+N},P(x)},Dn=(x,S)=>{E.current={mode:"edge",startX:S,col:x,initialWidth:te(x)},P(x)};$.useEffect(()=>{if(k===null||!E.current)return;const x=E.current,S=T=>{const N=T.clientX-x.startX;if(x.mode==="between"){const q=x.initialLeft+N;Ve(x.leftCol,x.rightCol,q,x.total)}else De(x.col,x.initialWidth+N)},D=()=>{P(null),E.current=null};return document.addEventListener("mousemove",S),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",D)}},[k,Ve,De]);const He=(x,S,D,T,N,q)=>{const W=ne(x),X=ne(S),H=te(D),K=te(T);F.current={startX:N,startY:q,aboveRow:x,belowRow:S,leftCol:D,rightCol:T,initialAboveHeight:W,initialBelowHeight:X,initialLeftWidth:H,initialRightWidth:K,totalHeight:W+X,totalWidth:H+K},L({row:x,col:D})},Zn=(x,S,D,T,N,q)=>{if(x==="row"){const W=S,X=T,H=D;F.current={startX:N,startY:q,aboveRow:W,belowRow:X,leftCol:H,rightCol:H,initialAboveHeight:ne(W),initialBelowHeight:ne(X),initialLeftWidth:te(H),initialRightWidth:0,totalHeight:ne(W)+ne(X),totalWidth:0},L({row:W,col:H})}else{const W=S,X=D,H=T;F.current={startX:N,startY:q,aboveRow:W,belowRow:W,leftCol:X,rightCol:H,initialAboveHeight:ne(W),initialBelowHeight:0,initialLeftWidth:te(X),initialRightWidth:te(H),totalHeight:0,totalWidth:te(X)+te(H)},L({row:W,col:X})}},el=(x,S,D,T)=>{F.current={startX:D,startY:T,aboveRow:x,belowRow:x,leftCol:S,rightCol:S,initialAboveHeight:ne(x),initialBelowHeight:0,initialLeftWidth:te(S),initialRightWidth:0,totalHeight:0,totalWidth:0},L({row:x,col:S})};$.useEffect(()=>{if(w===null||!F.current)return;const x=F.current,S=T=>{const N=T.clientX-x.startX,q=T.clientY-x.startY;if(x.totalHeight>0){const W=x.initialAboveHeight+q;me(x.aboveRow,x.belowRow,W,x.totalHeight)}else de(x.aboveRow,x.initialAboveHeight+q);if(x.totalWidth>0){const W=x.initialLeftWidth+N;Ve(x.leftCol,x.rightCol,W,x.totalWidth)}else De(x.leftCol,x.initialLeftWidth+N)},D=()=>{L(null),F.current=null};return document.addEventListener("mousemove",S),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",D)}},[w,me,Ve,de,De]);const Yl=(x,S,D)=>{const T=ne(x),N=ne(S),q=T+N;me(x,S,T+D,q)},ri=(x,S)=>{const D=ne(x),T=ne(S),N=D+T,q=N/2;me(x,S,q,N)},Jl=(x,S)=>{const D=ne(x);de(x,D+S)},po=(x,S,D)=>{const T=te(x),N=te(S),q=T+N;Ve(x,S,T+D,q)},Xl=(x,S)=>{const D=te(x),T=te(S),N=D+T,q=N/2;Ve(x,S,q,N)},Tn=(x,S)=>{const D=te(x);De(x,D+S)},oi=(x,S)=>{const D=d.find(H=>H.id===x);if(!D)return;let T=D.row,N=D.col;const q=(H,K)=>d.some(re=>re.row===H&&re.col===K);switch(S){case"top":if(T=D.row-1,q(T,D.col)){const H=new Set(d.map(J=>J.row)),K=Array.from(H).sort((J,Pe)=>J-Pe);let re=!1;for(const J of K)if(J<D.row&&!q(J,D.col)){T=J,re=!0;break}re||(u(J=>J.map(Pe=>Pe.row<D.row?{...Pe,row:Pe.row-1}:Pe)),T=D.row-1)}break;case"bottom":if(T=D.row+1,q(T,D.col)){const H=new Set(d.map(J=>J.row)),K=Array.from(H).sort((J,Pe)=>J-Pe);let re=!1;for(const J of K)if(J>D.row&&!q(J,D.col)){T=J,re=!0;break}if(!re){let J=T;for(;q(J,D.col);)J++;T=J}}break;case"left":if(N=D.col-1,q(D.row,N)){const H=new Set(d.map(J=>J.col)),K=Array.from(H).sort((J,Pe)=>J-Pe);let re=!1;for(const J of K)if(J<D.col&&!q(D.row,J)){N=J,re=!0;break}re||(u(J=>J.map(Pe=>Pe.col<D.col?{...Pe,col:Pe.col-1}:Pe)),N=D.col-1)}break;case"right":if(N=D.col+1,q(D.row,N)){const H=new Set(d.map(J=>J.col)),K=Array.from(H).sort((J,Pe)=>J-Pe);let re=!1;for(const J of K)if(J>D.col&&!q(D.row,J)){N=J,re=!0;break}if(!re){let J=N;for(;q(D.row,J);)J++;N=J}}break}const W=`chart-${m}`,X={id:W,selectedPoints:new Map,row:T,col:N};b.has(N)||_(H=>new Map(H).set(N,ua)),g.has(T)||y(H=>new Map(H).set(T,En)),u(H=>[...H,X]),p(H=>H+1),v(W),_t(W)},tl=(x,S)=>{const D=d.filter(N=>N.row===x);if(D.length===0)return;let T;typeof S=="number"&&(T=D.find(N=>N.col===S)),T||(T=D.find(N=>N.id===f)??D[0]),oi(T.id,"bottom")},nl=(x,S)=>{const D=d.filter(N=>N.col===x);if(D.length===0)return;let T;typeof S=="number"&&(T=D.find(N=>N.row===S)),T||(T=D.find(N=>N.id===f)??D[0]),oi(T.id,"right")},fo=x=>{u(S=>{const D=S.filter(K=>K.id!==x);if(D.length===0)return v("chart-0"),_(new Map([[0,ua]])),y(new Map([[0,En]])),[{id:"chart-0",selectedPoints:new Map,row:0,col:0}];x===f&&v(D[0].id);const T=new Set(D.map(K=>K.row)),N=new Set(D.map(K=>K.col)),q=Array.from(T).sort((K,re)=>K-re),W=Array.from(N).sort((K,re)=>K-re),X=new Map(q.map((K,re)=>[K,re])),H=new Map(W.map((K,re)=>[K,re]));return D.map(K=>({...K,row:X.get(K.row)??K.row,col:H.get(K.col)??K.col}))})},yo=(x,S,D)=>{u(T=>T.map(N=>N.id===x?{...N,selectedPoints:new Map(N.selectedPoints).set(S,D)}:N)),t(x,S,D)},go=(x,S,D)=>{u(T=>T.map(N=>{if(N.id===x){const q=new Map(N.selectedPoints),W=q.get(S);if(W){const X=new Set(W);return X.delete(D),X.size===0?q.delete(S):q.set(S,X),{...N,selectedPoints:q}}}return N})),l(x,S,D)},bo=(x,S,D)=>{Q({type:"legend",pointKey:S,sourceChartId:x,inverters:D})},Pt=()=>{Q(null),ce(null)},ho=(x,S)=>{I&&(x.preventDefault(),x.stopPropagation(),ce(S))},xo=(x,S)=>{const D=x.relatedTarget,T=ae.current.get(S);T&&!T.contains(D)&&ce(null)},_o=(x,S)=>{if(x.preventDefault(),x.stopPropagation(),!I)return;const{pointKey:D,sourceChartId:T,inverters:N}=I;if(T===S){Pt();return}u(q=>q.map(W=>{if(W.id===T){const X=new Map(W.selectedPoints);return X.delete(D),{...W,selectedPoints:X}}else if(W.id===S){const X=new Map(W.selectedPoints);return X.set(D,new Set(N)),{...W,selectedPoints:X}}return W})),Pt()},Be=Math.min(...d.map(x=>x.row),0),ze=Math.min(...d.map(x=>x.col),0),Zl=d.map(x=>({...x,row:x.row-Be,col:x.col-ze})),ll=$.useMemo(()=>{const x=new Map;return d.forEach(S=>{x.set(`${S.row}:${S.col}`,S)}),x},[d]),ye=Array.from(new Set(Zl.map(x=>x.row))).sort((x,S)=>x-S),ge=Array.from(new Set(Zl.map(x=>x.col))).sort((x,S)=>x-S),si=new Map,Zt=[];ye.forEach((x,S)=>{si.set(x,S);const D=x+Be;Zt.push(`${ne(D)}px`),S<ye.length-1&&Zt.push(`${tc}px`)}),ye.length>0&&Zt.push(`${tc}px`);const ci=Zt.length>0?Zt.join(" "):"1fr",ea=new Map,V=[];ge.forEach((x,S)=>{ea.set(x,S);const D=x+ze;V.push(`${te(D)}px`),S<ge.length-1&&V.push(`${nc}px`)}),ge.length>0&&V.push(`${nc}px`);const Y=V.length>0?V.join(" "):"1fr";return o.jsxs("div",{className:"w-full h-full overflow-auto",children:[o.jsxs("div",{className:"grid p-4",style:{gridTemplateRows:ci,gridTemplateColumns:Y,rowGap:0,columnGap:0},children:[Zl.map(x=>{const S=ee===x.id,D=x.selectedPoints.size===0;return o.jsx("div",{ref:T=>{T?ae.current.set(x.id,T):ae.current.delete(x.id)},className:`relative border rounded-lg bg-white shadow-sm overflow-visible transition-all cursor-pointer ${f===x.id?"border-blue-500 border-2 ring-2 ring-blue-200":"border-gray-300"} ${le===x.id?"animate-chart-expand":""} ${S?"ring-4 ring-green-300 border-green-500":""} ${D&&I?"bg-green-50":""}`,style:{gridRow:(si.get(x.row)??0)*2+1,gridColumn:(ea.get(x.col)??0)*2+1},"data-chart-id":x.id,onClick:T=>{T.target.closest("button")||v(x.id)},onDragOver:T=>ho(T,x.id),onDragLeave:T=>xo(T,x.id),onDrop:T=>_o(T,x.id),children:o.jsx("div",{className:"chart-content h-full flex flex-col",children:o.jsx(Z0,{selectedPoints:x.selectedPoints,protocols:e,onUpdateInverters:(T,N)=>yo(x.id,T,N),onScrollToPoint:n,onRemoveInverter:(T,N)=>go(x.id,T,N),onSelectPointsToggle:a,selectPointsOpen:i,onDeleteChart:()=>fo(x.id),onShowTutorial:()=>R(!0),crosshairX:G,onCrosshairChange:j,onDragStart:(T,N)=>bo(x.id,T,N),onDragEnd:Pt,isDragActive:I!==null,isDropTarget:S})})},x.id)}),ge.slice(0,-1).map((x,S)=>{const D=x+ze,N=ge[S+1]+ze,q=te(D),W=te(N),X=q+W||1,H=ye.reduce((K,re)=>{const J=re+Be;return ll.has(`${J}:${D}`)&&K.push({key:`col-btn-${J}-${D}`,onAdd:()=>nl(D,J),size:ne(J)}),K},[]);return o.jsx("div",{style:{gridRow:"1 / -1",gridColumn:S*2+2,alignSelf:"stretch",justifySelf:"center"},children:o.jsx(Fu,{onAdd:()=>nl(D),onResizeStart:K=>Bt(D,N,K),onKeyboardNudge:K=>po(D,N,K),onAutoFit:()=>Xl(D,N),percentLeft:q/X*100,isActive:k===D,buttonSegments:H})},`col-divider-${D}`)}),ge.length>0&&(()=>{const S=ge[ge.length-1]+ze,D=ye.reduce((T,N)=>{const q=N+Be;return ll.has(`${q}:${S}`)&&T.push({key:`terminal-col-btn-${q}-${S}`,onAdd:()=>nl(S,q),size:ne(q)}),T},[]);return o.jsx("div",{style:{gridRow:"1 / -1",gridColumn:ge.length*2,alignSelf:"stretch",justifySelf:"center"},children:o.jsx(Fu,{onAdd:()=>nl(S),onEdgeResizeStart:T=>Dn(S,T),onEdgeKeyboardNudge:T=>Tn(S,T),isActive:k===S,buttonSegments:D})},`col-divider-${S}-terminal`)})(),ye.slice(0,-1).map((x,S)=>{const D=ye[S+1],T=x+Be,N=D+Be,q=ne(T),W=ne(N),X=q+W||1,H=ge.reduce((K,re)=>{const J=re+ze;return ll.has(`${T}:${J}`)&&K.push({key:`row-btn-${T}-${J}`,onAdd:()=>tl(T,J),size:te(J)}),K},[]);return o.jsx("div",{style:{gridColumn:"1 / -1",gridRow:S*2+2,alignSelf:"center",justifySelf:"stretch"},children:o.jsx(Ou,{onAdd:()=>tl(T),onResizeStart:K=>Xt(T,N,K),onKeyboardNudge:K=>Yl(T,N,K),onAutoFit:()=>ri(T,N),percentAbove:q/X*100,isActive:h===T,buttonSegments:H})},`divider-${T}`)}),ye.length>0&&(()=>{const S=ye[ye.length-1]+Be,D=ge.reduce((T,N)=>{const q=N+ze;return ll.has(`${S}:${q}`)&&T.push({key:`terminal-row-btn-${S}-${q}`,onAdd:()=>tl(S,q),size:te(q)}),T},[]);return o.jsx("div",{style:{gridColumn:"1 / -1",gridRow:ye.length*2,alignSelf:"center",justifySelf:"stretch"},children:o.jsx(Ou,{onAdd:()=>tl(S),onEdgeResizeStart:T=>kn(S,T),onEdgeKeyboardNudge:T=>Jl(S,T),isActive:h===S,buttonSegments:D})},`divider-${S}-terminal`)})(),ye.slice(0,-1).flatMap((x,S)=>{const D=x+Be,N=ye[S+1]+Be;return ge.slice(0,-1).map((q,W)=>{const X=q+ze,K=ge[W+1]+ze;return o.jsx("div",{style:{gridRow:S*2+2,gridColumn:W*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Mi,{onResizeStart:(re,J)=>He(D,N,X,K,re,J),isActive:(w==null?void 0:w.row)===D&&(w==null?void 0:w.col)===X})},`corner-${D}-${X}`)})}),ye.slice(0,-1).map((x,S)=>{const D=x+Be,N=ye[S+1]+Be;if(ge.length>0){const W=ge[ge.length-1]+ze;return o.jsx("div",{style:{gridRow:S*2+2,gridColumn:ge.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Mi,{onResizeStart:(X,H)=>Zn("row",D,N,W,X,H),isActive:(w==null?void 0:w.row)===D&&(w==null?void 0:w.col)===W})},`corner-edge-row-${D}-${W}`)}return null}),ge.slice(0,-1).map((x,S)=>{const D=x+ze,N=ge[S+1]+ze;if(ye.length>0){const W=ye[ye.length-1]+Be;return o.jsx("div",{style:{gridRow:ye.length*2,gridColumn:S*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Mi,{onResizeStart:(X,H)=>Zn("col",W,D,N,X,H),isActive:(w==null?void 0:w.row)===W&&(w==null?void 0:w.col)===D})},`corner-edge-col-${W}-${D}`)}return null}),ye.length>0&&ge.length>0&&(()=>{const S=ye[ye.length-1]+Be,T=ge[ge.length-1]+ze;return o.jsx("div",{style:{gridRow:ye.length*2,gridColumn:ge.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Mi,{onResizeStart:(N,q)=>el(S,T,N,q),isActive:(w==null?void 0:w.row)===S&&(w==null?void 0:w.col)===T})},`corner-terminal-${S}-${T}`)})()]}),o.jsx(sy,{isOpen:U,onClose:()=>R(!1)})]})}function ux({value:e,onChange:t}){return o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:o.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),o.jsx("input",{className:"w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring",placeholder:"search",value:e,onChange:n=>t(n.target.value)})]})}function Uu({value:e,onChange:t,getLabelHelp:n}){const l=["Standard","Extended","Complete"],a=l.indexOf(e),i=a>=0?a:0,[r,s]=$.useState(!1),c=p=>{const f=parseInt(p.target.value,10);t(l[f])},d=i/(l.length-1)*100,u=n("Level of Detail"),m=new Set(l);return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xs font-semibold text-gray-700",children:"Detail Level"}),o.jsx("button",{onClick:()=>s(!0),className:"text-blue-500 hover:text-blue-700",title:u||"Level of Detail help",children:o.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{className:"flex flex-col items-center gap-0.5",children:[o.jsxs("div",{className:"relative w-40 flex items-center",children:[o.jsx("input",{type:"range",min:"0",max:l.length-1,step:"1",value:i,onChange:c,className:"w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, #10b981 0%, #10b981 ${d}%, #e5e7eb ${d}%, #e5e7eb 100%)`}}),o.jsx("style",{children:`
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #10b981;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
              }
              input[type="range"]::-moz-range-thumb {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #10b981;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
              }
            `})]}),o.jsx("div",{className:"relative w-40 flex justify-between text-xs",children:l.map((p,f)=>o.jsx("button",{type:"button",onClick:()=>t(p),className:`cursor-pointer hover:opacity-70 transition-opacity ${f===i?"font-semibold text-gray-900":"text-gray-500"}`,children:p},p))})]})]}),r&&o.jsx(oy,{family:"Level of Detail",labels:m,onClose:()=>s(!1),getLabelHelp:n})]})}function mx({onClose:e}){return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:o.jsxs("div",{className:"relative max-w-lg rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:"Group By"}),o.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[o.jsx("p",{children:"Reorder or add levels to control how points are grouped in the list."}),o.jsx("p",{children:"For example, grouping by Component → Feature will show each component first, with its features listed underneath."}),o.jsx("p",{className:"text-gray-600",children:"You can add or remove levels using the + button and × button next to each level."})]})]})})}function px({availableFamilies:e,hierarchy:t,onChange:n,scrollContainerRef:l,getLabelColor:a}){const[i,r]=$.useState(!1),[s,c]=$.useState(!0),d=$.useRef(null),u=$.useRef(0),m=(b,_)=>{const g=[...t];_===""?g.splice(b,1):g[b]=_,n(g)},p=()=>{n([...t,""])},f=b=>{const _=[...t];_.splice(b,1),n(_)},v=b=>{const _=t.filter((g,y)=>y!==b&&t[y]);return e.filter(g=>!_.includes(g))};return $.useEffect(()=>{const b=l==null?void 0:l.current;if(!b)return;const _=()=>{const g=b.scrollTop;g>u.current&&g>50?s&&d.current&&(d.current.open=!1,c(!1)):g<50&&!s&&d.current&&(d.current.open=!0,c(!0)),u.current=g};return b.addEventListener("scroll",_,{passive:!0}),()=>{b.removeEventListener("scroll",_)}},[s,l]),o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"mb-3 rounded-lg border bg-gray-50 p-2 transition-all duration-300",children:o.jsxs("details",{ref:d,className:"group",open:s,onToggle:b=>c(b.target.open),children:[o.jsx("summary",{className:"cursor-pointer list-none",children:o.jsxs("div",{className:"flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[o.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"}),o.jsx("span",{className:"flex-shrink-0",children:"Group by"}),t.filter(b=>b).length>0&&o.jsx("div",{className:"flex items-center gap-1 ml-1 min-w-0",children:t.map((b,_)=>{if(!b)return null;const g=a(b,"");return o.jsxs($.Fragment,{children:[o.jsx("span",{className:`rounded px-2 py-0.5 text-xs font-semibold flex-shrink-0 ${_===0?"bg-blue-100 text-blue-700":_===1?"bg-green-100 text-green-700":`${g.bg} ${g.text}`}`,children:b}),_<t.length-1&&t[_+1]&&o.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"})]},_)})})]}),o.jsxs("button",{onClick:b=>{b.preventDefault(),b.stopPropagation(),r(!0)},className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline flex-shrink-0",children:[o.jsx("span",{children:"What does this do?"}),o.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]})]})}),o.jsx("div",{className:"mt-2",children:o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[t.map((b,_)=>o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsxs("label",{className:"text-gray-600",children:["Level ",_+1,":"]}),o.jsxs("select",{value:b||"",onChange:g=>m(_,g.target.value),className:"rounded border px-2 py-1 text-xs",children:[o.jsx("option",{value:"",children:"(None)"}),v(_).map(g=>o.jsx("option",{value:g,children:g},g))]}),t.length>1&&o.jsx("button",{onClick:()=>f(_),className:"rounded border bg-white px-1.5 py-0.5 text-xs text-red-600 hover:bg-red-50",title:"Remove level",children:"×"})]},_)),o.jsx("button",{onClick:p,className:"rounded border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",title:"Add hierarchy level",children:"+"}),t.length===0&&o.jsx("div",{className:"text-gray-500 italic",children:"No hierarchy levels configured"})]})})]})}),i&&o.jsx(mx,{onClose:()=>r(!1)})]})}const fx=({onNew:e,onSave:t,onSaveAs:n,onImport:l,onExport:a,onManage:i,disabled:r=!1,hasUnsavedChanges:s=!1})=>{const[c,d]=A.useState(!1),u=A.useRef(null);A.useEffect(()=>{const p=f=>{u.current&&!u.current.contains(f.target)&&d(!1)};return c&&document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[c]),A.useEffect(()=>{const p=f=>{f.key==="Escape"&&c&&d(!1)};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[c]);const m=p=>{d(!1),p()};return o.jsxs("div",{className:"relative",ref:u,children:[o.jsxs("button",{onClick:()=>d(!c),disabled:r,className:`
          px-3 py-1.5 text-sm font-medium rounded-md
          flex items-center gap-2
          ${r?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}
          transition-colors duration-150
        `,children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),"Workspace",s&&o.jsx("span",{className:"w-2 h-2 bg-orange-500 rounded-full",title:"Unsaved changes"})]}),c&&o.jsx("div",{className:"absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50",children:o.jsxs("div",{className:"py-1",children:[o.jsxs("button",{onClick:()=>m(e),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"New Workspace"]}),o.jsx("hr",{className:"my-1 border-gray-200"}),o.jsxs("button",{onClick:()=>m(t),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})}),"Save",s&&o.jsx("span",{className:"ml-auto text-xs text-orange-600",children:"●"})]}),o.jsxs("button",{onClick:()=>m(n),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"Save As..."]}),o.jsx("hr",{className:"my-1 border-gray-200"}),o.jsxs("button",{onClick:()=>m(l),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),"Import from a file..."]}),o.jsxs("button",{onClick:()=>m(a),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-12"})}),"Export to a file..."]}),o.jsx("hr",{className:"my-1 border-gray-200"}),o.jsxs("button",{onClick:()=>m(i),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Manage Workspaces..."]})]})})]})},yx=({currentWorkspace:e,recentWorkspaces:t,onSwitch:n,onManage:l,disabled:a=!1,hasUnsavedChanges:i=!1})=>{const[r,s]=A.useState(!1),c=A.useRef(null);A.useEffect(()=>{const m=p=>{c.current&&!c.current.contains(p.target)&&s(!1)};return r&&document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[r]),A.useEffect(()=>{const m=p=>{p.key==="Escape"&&r&&s(!1)};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[r]);const d=m=>{s(!1),n(m)},u=()=>{s(!1),l()};return o.jsxs("div",{className:"relative",ref:c,children:[o.jsxs("button",{onClick:()=>s(!r),disabled:a,className:`
          px-3 py-1.5 text-sm font-medium rounded-md
          flex items-center gap-2 min-w-[180px]
          ${a?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}
          transition-colors duration-150
        `,children:[o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})}),o.jsx("span",{className:"flex-1 truncate text-left",children:(e==null?void 0:e.name)||"No Workspace"}),i&&o.jsx("span",{className:"w-2 h-2 bg-orange-500 rounded-full flex-shrink-0",title:"Unsaved changes"}),o.jsx("svg",{className:`w-4 h-4 flex-shrink-0 transition-transform ${r?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r&&o.jsx("div",{className:"absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto",children:o.jsxs("div",{className:"py-1",children:[o.jsx("div",{className:"px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Recent Workspaces"}),t.length===0?o.jsx("div",{className:"px-4 py-3 text-sm text-gray-500 italic",children:"No workspaces available"}):t.map(m=>o.jsx("button",{onClick:()=>d(m.id),className:`
                    w-full text-left px-4 py-2 text-sm
                    hover:bg-gray-100 transition-colors
                    ${m.id===(e==null?void 0:e.id)?"bg-blue-50 text-blue-700 font-medium":"text-gray-700"}
                  `,children:o.jsxs("div",{className:"flex items-center gap-2",children:[m.id===(e==null?void 0:e.id)&&o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"truncate",children:m.name}),m.type==="builtin"&&o.jsx("span",{className:"px-2 py-0.5 text-xs font-medium bg-purple-600 text-white rounded flex-shrink-0",children:"Built-in"})]}),o.jsxs("div",{className:"text-xs text-gray-500 mt-0.5",children:[m.chartCount," ",m.chartCount===1?"chart":"charts"]})]})]})},m.id)),o.jsx("hr",{className:"my-1 border-gray-200"}),o.jsxs("button",{onClick:u,className:"w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 flex items-center gap-2 font-medium",children:[o.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Manage Workspaces"]})]})})]})},gx=({isOpen:e,title:t,message:n,confirmLabel:l="Confirm",cancelLabel:a="Cancel",confirmVariant:i="primary",onConfirm:r,onCancel:s})=>{if(A.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&s()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,s]),!e)return null;const c=i==="danger"?"bg-red-600 hover:bg-red-700 text-white":"bg-blue-600 hover:bg-blue-700 text-white";return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsx("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full",children:o.jsxs("div",{className:"p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:t}),o.jsx("p",{className:"text-gray-600 mb-6",children:n}),o.jsxs("div",{className:"flex justify-end gap-3",children:[o.jsx("button",{onClick:s,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",children:a}),o.jsx("button",{onClick:r,className:`px-4 py-2 text-sm font-medium rounded-md transition-colors ${c}`,children:l})]})]})})})},bx=({isOpen:e,workspaces:t,currentWorkspaceId:n,onClose:l,onSwitch:a,onRename:i,onDuplicate:r,onDelete:s,onExport:c,onSetDefault:d})=>{const[u,m]=A.useState(null),[p,f]=A.useState(""),[v,b]=A.useState(null);if(A.useEffect(()=>{e||(m(null),f(""))},[e]),A.useEffect(()=>{const w=L=>{L.key==="Escape"&&e&&!v&&l()};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[e,v,l]),!e)return null;const _=[...t].sort((w,L)=>w.id===n?-1:L.id===n?1:new Date(L.updatedAt).getTime()-new Date(w.updatedAt).getTime()),g=w=>{m(w.id),f(w.name)},y=()=>{u&&p.trim()&&(i(u,p.trim()),m(null),f(""))},h=()=>{m(null),f("")},C=w=>{b({workspaceId:w.id,workspaceName:w.name})},k=()=>{v&&(s(v.workspaceId),b(null))},P=w=>{const L=new Date(w),R=new Date().getTime()-L.getTime(),M=Math.floor(R/6e4),E=Math.floor(R/36e5),F=Math.floor(R/864e5);return M<1?"Just now":M<60?`${M}m ago`:E<24?`${E}h ago`:F<7?`${F}d ago`:L.toLocaleDateString()};return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Manage Workspaces"}),o.jsx("button",{onClick:l,className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:_.length===0?o.jsxs("div",{className:"text-center py-12",children:[o.jsx("svg",{className:"w-16 h-16 mx-auto text-gray-300 mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})}),o.jsx("p",{className:"text-gray-500",children:"No workspaces available"})]}):o.jsx("div",{className:"space-y-2",children:_.map(w=>o.jsx("div",{className:`
                      border rounded-lg p-4 transition-all
                      ${w.id===n?"border-blue-500 bg-blue-50":w.type==="builtin"?"border-purple-200 bg-purple-50 hover:border-purple-300":"border-gray-200 hover:border-gray-300 bg-white"}
                    `,children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsxs("div",{className:"flex-1 min-w-0",children:[u===w.id?o.jsx("input",{type:"text",value:p,onChange:L=>f(L.target.value),onKeyDown:L=>{L.key==="Enter"&&y(),L.key==="Escape"&&h()},className:"w-full px-2 py-1 border border-blue-500 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none",autoFocus:!0}):o.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[o.jsx("h3",{className:"text-lg font-medium text-gray-900 truncate",children:w.name}),w.type==="builtin"&&o.jsx("span",{className:"px-2 py-0.5 text-xs font-medium bg-purple-600 text-white rounded",children:"Built-in"}),w.isDefault&&o.jsx("span",{className:"px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded",children:"Default"}),w.id===n&&o.jsx("span",{className:"px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded",children:"Current"})]}),o.jsxs("div",{className:"flex items-center gap-4 mt-1 text-sm text-gray-500",children:[o.jsxs("span",{children:[w.chartCount," ",w.chartCount===1?"chart":"charts"]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["Updated ",P(w.updatedAt)]})]})]}),o.jsx("div",{className:"flex items-center gap-2",children:u===w.id?o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:y,className:"p-2 text-green-600 hover:bg-green-50 rounded transition-colors",title:"Save",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),o.jsx("button",{onClick:h,className:"p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors",title:"Cancel",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}):o.jsxs(o.Fragment,{children:[w.id!==n&&o.jsx("button",{onClick:()=>a(w.id),className:"p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors",title:"Switch to this workspace",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})})}),!w.isDefault&&o.jsx("button",{onClick:()=>d(w.id),className:"p-2 text-yellow-600 hover:bg-yellow-50 rounded transition-colors",title:"Set as default workspace",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})}),o.jsx("button",{onClick:()=>w.type!=="builtin"&&g(w),disabled:w.type==="builtin",className:`p-2 rounded transition-colors ${w.type==="builtin"?"text-gray-400 cursor-not-allowed":"text-gray-600 hover:bg-gray-100"}`,title:w.type==="builtin"?"Built-in workspaces cannot be renamed":"Rename",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),o.jsx("button",{onClick:()=>r(w.id),className:"p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors",title:"Duplicate",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})})}),o.jsx("button",{onClick:()=>c(w.id),className:"p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors",title:"Export to a file...",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-12"})})}),o.jsx("button",{onClick:()=>w.type!=="builtin"&&C(w),disabled:w.type==="builtin",className:`p-2 rounded transition-colors ${w.type==="builtin"?"text-gray-400 cursor-not-allowed":"text-red-600 hover:bg-red-50"}`,title:w.type==="builtin"?"Built-in workspaces cannot be deleted":"Delete",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})})]})},w.id))})}),o.jsx("div",{className:"p-4 border-t border-gray-200 bg-gray-50",children:o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsxs("p",{className:"text-sm text-gray-600",children:[_.length," ",_.length===1?"workspace":"workspaces"]}),o.jsx("button",{onClick:l,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",children:"Close"})]})})]})}),o.jsx(gx,{isOpen:v!==null,title:"Delete Workspace",message:`Are you sure you want to delete "${v==null?void 0:v.workspaceName}"? This action cannot be undone.`,confirmLabel:"Delete",cancelLabel:"Cancel",confirmVariant:"danger",onConfirm:k,onCancel:()=>b(null)})]})},hx=({isOpen:e,currentName:t,onSave:n,onCancel:l})=>{const[a,i]=A.useState(""),[r,s]=A.useState("");if(A.useEffect(()=>{e&&(i(`${t} (Copy)`),s(""))},[e,t]),A.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&l()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,l]),!e)return null;const c=()=>{const d=a.trim();if(!d){s("Workspace name is required");return}n(d)};return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsx("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full",children:o.jsxs("div",{className:"p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Save Workspace As"}),o.jsx("div",{className:"space-y-4",children:o.jsxs("div",{children:[o.jsx("label",{htmlFor:"workspace-name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Workspace Name *"}),o.jsx("input",{id:"workspace-name",type:"text",value:a,onChange:d=>{i(d.target.value),s("")},onKeyDown:d=>{d.key==="Enter"&&c()},className:`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${r?"border-red-500":"border-gray-300"}`,placeholder:"Enter workspace name",autoFocus:!0}),r&&o.jsx("p",{className:"mt-1 text-sm text-red-600",children:r})]})}),o.jsxs("div",{className:"flex justify-end gap-3 mt-6",children:[o.jsx("button",{onClick:l,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",children:"Cancel"}),o.jsx("button",{onClick:c,className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors",children:"Save"})]})]})})})},xx=({isOpen:e,workspaceName:t,onSave:n,onDiscard:l,onCancel:a})=>(A.useEffect(()=>{const i=r=>{r.key==="Escape"&&e&&a()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,a]),e?o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsx("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full",children:o.jsxs("div",{className:"p-6",children:[o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"flex-shrink-0",children:o.jsx("svg",{className:"w-6 h-6 text-orange-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Unsaved Changes"}),o.jsxs("p",{className:"text-gray-600 mb-4",children:['You have unsaved changes in "',t,'". What would you like to do?']})]})]}),o.jsxs("div",{className:"flex flex-col gap-2 mt-6",children:[o.jsx("button",{onClick:n,className:"w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors",children:"Save Changes"}),o.jsx("button",{onClick:l,className:"w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",children:"Discard Changes"}),o.jsx("button",{onClick:a,className:"w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white rounded-md hover:bg-gray-100 transition-colors",children:"Cancel"})]})]})})}):null);class ol extends Error{constructor(t,n,l){super(t),this.code=n,this.details=l,this.name="WorkspaceApiError"}}var Rn=(e=>(e.NOT_FOUND="NOT_FOUND",e.UNAUTHORIZED="UNAUTHORIZED",e.VALIDATION_ERROR="VALIDATION_ERROR",e.CONFLICT="CONFLICT",e.SERVER_ERROR="SERVER_ERROR",e.NETWORK_ERROR="NETWORK_ERROR",e))(Rn||{});const dy="historicalData_workspaces",uy="historicalData_workspaceCounter",qe=new Map;let mo=0;const Wu=100,Pn=e=>new Promise(t=>setTimeout(t,e));function _a(){try{const e=Array.from(qe.values());localStorage.setItem(dy,JSON.stringify(e)),localStorage.setItem(uy,String(mo))}catch(e){console.error("[MOCK] Failed to save workspaces to localStorage:",e)}}function _x(){try{const e=localStorage.getItem(dy),t=localStorage.getItem(uy);if(e){const n=JSON.parse(e);qe.clear(),n.forEach(l=>{qe.set(l.id,l)})}t&&(mo=parseInt(t,10))}catch(e){console.error("[MOCK] Failed to load workspaces from localStorage:",e)}}function vx(){if(_x(),qe.size===0){const e={id:"ws-builtin-power-flows",name:"Power Flows",type:"builtin",isDefault:!0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),data:{charts:[{id:"chart-0",row:0,col:0,selectedPoints:{"40101:pPvTotal":["001"],"40101:pGridImpTot":["001"],"40101:pGridExpTot":["001"],"40101:pBatChg":["001"],"40101:pBatDischg":["001"]}},{id:"chart-1",row:0,col:1,selectedPoints:{"lifecycle_events:is_online":["001"],"40101:gridStat":["001"]}},{id:"chart-2",row:1,col:0,selectedPoints:{"40101:socBat":["001"]}},{id:"chart-3",row:1,col:1,selectedPoints:{}}],rowHeights:{0:520,1:520},columnWidths:{0:780,1:780},nextChartId:4,activeChartId:"chart-0"}};qe.set(e.id,e),mo=1,_a()}}vx();class wx{async getWorkspaces(t){await Pn(Wu);let n=Array.from(qe.values());return t.limit&&t.limit>0&&(n=n.slice(0,t.limit)),{workspaces:n.map(a=>({id:a.id,name:a.name,type:a.type,isDefault:a.isDefault,createdAt:a.createdAt,updatedAt:a.updatedAt,chartCount:a.data.charts.length}))}}async getWorkspace(t){await Pn(Wu);const n=qe.get(t.id);if(!n)throw new ol(`Workspace not found: ${t.id}`,Rn.NOT_FOUND);return{workspace:n}}async createWorkspace(t){await Pn(150);const n=new Date().toISOString(),l={id:`ws-${mo++}`,name:t.name,type:"user",isDefault:t.isDefault??!1,createdAt:n,updatedAt:n,data:t.data};return qe.set(l.id,l),_a(),{workspace:l}}async updateWorkspace(t){await Pn(150);const n=qe.get(t.id);if(!n)throw new ol(`Workspace not found: ${t.id}`,Rn.NOT_FOUND);if(n.type==="builtin")throw new ol("Cannot modify built-in workspaces",Rn.VALIDATION_ERROR);const l=new Date().toISOString(),a={...n,name:t.name??n.name,data:t.data??n.data,updatedAt:l};return qe.set(t.id,a),_a(),{workspace:a}}async deleteWorkspace(t){await Pn(100);const n=qe.get(t.id);if(!n)throw new ol(`Workspace not found: ${t.id}`,Rn.NOT_FOUND);if(n.type==="builtin")throw new ol("Cannot delete built-in workspaces",Rn.VALIDATION_ERROR);return qe.delete(t.id),_a(),{success:!0}}async setDefaultWorkspace(t){await Pn(100);const n=qe.get(t.id);if(!n)throw new ol(`Workspace not found: ${t.id}`,Rn.NOT_FOUND);return qe.forEach(l=>{l.isDefault=!1}),n.isDefault=!0,qe.set(n.id,n),_a(),{success:!0}}async getDefaultWorkspace(){return await Pn(100),{workspace:Array.from(qe.values()).find(n=>n.isDefault)??null}}}const Cx=new wx,At=Cx;function Sx(e){return e.map(t=>({id:t.id,row:t.row,col:t.col,selectedPoints:Object.fromEntries(Array.from(t.selectedPoints.entries()).map(([n,l])=>[n,Array.from(l)]))}))}function ji(e,t,n,l,a){return{charts:Sx(e),rowHeights:Object.fromEntries(t),columnWidths:Object.fromEntries(n),nextChartId:l,activeChartId:a}}function Lx(e,t){const n=JSON.stringify({version:"1.0",name:e,exportedAt:new Date().toISOString(),data:t},null,2),l=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(l),i=document.createElement("a");i.href=a,i.download=`${e.replace(/\s+/g,"_")}_workspace.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(a)}function kx(e){return new Promise((t,n)=>{const l=new FileReader;l.onload=a=>{var i;try{const r=(i=a.target)==null?void 0:i.result,s=JSON.parse(r);if(!s.data||!s.data.charts||!s.data.rowHeights||!s.data.columnWidths)throw new Error("Invalid workspace file structure");if(typeof s.data.nextChartId!="number")throw new Error("Invalid workspace file: missing nextChartId");t({name:s.name||"Imported Workspace",data:s.data})}catch(r){n(new Error(`Failed to parse workspace file: ${r instanceof Error?r.message:"Unknown error"}`))}},l.onerror=()=>{n(new Error("Failed to read file"))},l.readAsText(e)})}function Dx(e,t){return JSON.stringify(e)!==JSON.stringify(t)}function Bi(e){return JSON.parse(JSON.stringify(e))}function Tx(e){const[t,n]=A.useState(null),[l,a]=A.useState([]),[i,r]=A.useState(!1),[s,c]=A.useState(!1),[d,u]=A.useState(null),m=A.useRef(null),p=A.useCallback(async()=>{try{c(!0),u(null);const R=await At.getWorkspaces({});a(R.workspaces)}catch(R){const M=R instanceof Error?R.message:"Failed to load workspaces";u(M),console.error("Failed to load workspaces:",R)}finally{c(!1)}},[]),f=A.useCallback(async R=>{try{c(!0),u(null);const M=await At.getWorkspace({id:R});n(M.workspace),m.current=Bi(M.workspace.data),r(!1),e!=null&&e.onWorkspaceLoaded&&e.onWorkspaceLoaded(M.workspace.data)}catch(M){const E=M instanceof Error?M.message:"Failed to load workspace";u(E),console.error("Failed to load workspace:",M)}finally{c(!1)}},[e]),v=A.useCallback(async(R,M)=>{try{c(!0),u(null);const E=await At.createWorkspace({name:R,data:M});return n(E.workspace),m.current=Bi(E.workspace.data),r(!1),await p(),E.workspace}catch(E){const F=E instanceof Error?E.message:"Failed to create workspace";throw u(F),console.error("Failed to create workspace:",E),E}finally{c(!1)}},[p]),b=A.useCallback(async()=>{if(!t)throw new Error("No workspace is currently loaded");try{c(!0),u(null);const R=await At.updateWorkspace({id:t.id,data:t.data});n(R.workspace),m.current=Bi(R.workspace.data),r(!1),await p()}catch(R){const M=R instanceof Error?R.message:"Failed to save workspace";throw u(M),console.error("Failed to save workspace:",R),R}finally{c(!1)}},[t,p]),_=A.useCallback(R=>{if(!t)return;const M={...t,data:R};n(M),m.current&&r(Dx(m.current,R))},[t]),g=A.useCallback(async(R,M)=>{try{c(!0),u(null);const E=await At.updateWorkspace({id:R,name:M});(t==null?void 0:t.id)===R&&n(E.workspace),await p()}catch(E){const F=E instanceof Error?E.message:"Failed to rename workspace";throw u(F),console.error("Failed to rename workspace:",E),E}finally{c(!1)}},[t,p]),y=A.useCallback(async R=>{try{c(!0),u(null);const E=(await At.getWorkspace({id:R})).workspace;return await v(`${E.name} (Copy)`,E.data)}catch(M){const E=M instanceof Error?M.message:"Failed to duplicate workspace";throw u(E),console.error("Failed to duplicate workspace:",M),M}finally{c(!1)}},[v]),h=A.useCallback(async R=>{try{c(!0),u(null),await At.deleteWorkspace({id:R}),(t==null?void 0:t.id)===R&&(n(null),m.current=null,r(!1)),await p()}catch(M){const E=M instanceof Error?M.message:"Failed to delete workspace";throw u(E),console.error("Failed to delete workspace:",M),M}finally{c(!1)}},[t,p]),C=A.useCallback(async R=>{try{c(!0),u(null);const M=await At.getWorkspace({id:R});Lx(M.workspace.name,M.workspace.data)}catch(M){const E=M instanceof Error?M.message:"Failed to export workspace";throw u(E),console.error("Failed to export workspace:",M),M}finally{c(!1)}},[]),k=A.useCallback(async R=>{try{c(!0),u(null);const{name:M,data:E}=await kx(R);return await v(M,E)}catch(M){const E=M instanceof Error?M.message:"Failed to import workspace";throw u(E),console.error("Failed to import workspace:",M),M}finally{c(!1)}},[v]),P=A.useCallback(async R=>{try{c(!0),u(null),await At.setDefaultWorkspace({id:R}),await p()}catch(M){const E=M instanceof Error?M.message:"Failed to set default workspace";throw u(E),console.error("Failed to set default workspace:",M),M}finally{c(!1)}},[p]),w=A.useCallback(()=>{t&&(m.current=Bi(t.data),r(!1))},[t]);return A.useEffect(()=>{p()},[p]),A.useEffect(()=>{t||(async()=>{try{const M=await At.getDefaultWorkspace();M&&M.workspace&&await f(M.workspace.id)}catch(M){console.error("Failed to load default workspace:",M)}})()},[]),[{currentWorkspace:t,workspaces:l,isDirty:i,isLoading:s,error:d},{loadWorkspaces:p,loadWorkspace:f,createNewWorkspace:v,saveCurrentWorkspace:b,updateCurrentWorkspace:_,renameWorkspace:g,duplicateWorkspace:y,deleteWorkspace:h,exportWorkspace:C,importWorkspace:k,setDefaultWorkspace:P,markClean:w}]}function Ex(e){return e==null?"":typeof e=="number"?String(Math.trunc(e)):String(e).trim()}function Px(e){return e==null?"":String(e).trim()}function $u(e,t){try{const n=ly.parse(e);return((n==null?void 0:n.protocols)??[]).map(a=>{var c;if(!a.entry)return null;const i=Px(a.point??a.entry.name),r=Ex(a.model);if(!i||!r)return null;const s=Array.isArray(a.labels)?a.labels:Array.isArray((c=a.entry)==null?void 0:c.labels)?a.entry.labels:[];return{block:String(a.block??"fixed"),entry:a.entry,model:r,point:i,labels:s}}).filter(a=>!!a)}catch(n){return console.error(`Failed to parse ${t}`,n),[]}}function Nx(){const e=$u(B0,"ss40k_inverter.yaml"),t=$u(O0,"lifecycle_events.yaml");return[...e,...t]}const Nn=Nx();let lc=null;try{lc=ly.parse(F0)}catch(e){console.error("Failed to parse label_help.yaml",e)}function ma(e,t){if(!lc)return null;const n=lc.label_families[e];if(!n)return null;if(t){const l=n.labels[t];return(l==null?void 0:l.help)||null}return n.help||null}function Ax(e,t){const n=new Map;return e.forEach(l=>{const a=Array.isArray(l.labels)?l.labels:[];if(a.length===0)return;if(t.length===0){const s=a[0];if(s){const c=s.label_text;n.has(c)||n.set(c,[]),n.get(c).push(l)}return}let i=n,r=-1;if(!(i instanceof Map)){console.error("groupByLabelHierarchy: currentMap is not a Map",i);return}for(let s=0;s<t.length;s++){const c=t[s];a.find(u=>u.label_family===c)&&(r=s)}if(r!==-1)for(let s=0;s<=r;s++){if(!(i instanceof Map)){console.error("groupByLabelHierarchy: currentMap became non-Map at level",s,i);return}const c=t[s],d=a.find(m=>m.label_family===c);if(!d)continue;const u=d.label_text;if(s===r){i.has(u)||i.set(u,new Map);const m=i.get(u);if(Array.isArray(m)){const v=m,b=new Map;b.set("",v),i.set(u,b)}const p=i.get(u);if(!(p instanceof Map)){console.error("Expected Map for finalMap but got:",typeof p,p);return}p.has("")||p.set("",[]);const f=p.get("");if(!Array.isArray(f)){console.error("Expected array for itemsList but got:",typeof f,f);return}f.push(l)}else{if(!i.has(u))i.set(u,new Map);else{const p=i.get(u);if(Array.isArray(p)){const f=p,v=new Map;v.set("",f),i.set(u,v)}}const m=i.get(u);if(!(m instanceof Map)){console.error("Expected Map for nestedMap but got:",typeof m,m,"at level",s,"key",u);return}i=m}}}),n}function Vx(e){const t=new Map;return e.forEach(n=>{(Array.isArray(n.labels)?n.labels:[]).forEach(a=>{t.has(a.label_family)||t.set(a.label_family,new Set),t.get(a.label_family).add(a.label_text)})}),t}const es=[{bg:"bg-blue-100",text:"text-blue-800",border:"border-blue-300"},{bg:"bg-green-100",text:"text-green-800",border:"border-green-300"},{bg:"bg-purple-100",text:"text-purple-800",border:"border-purple-300"},{bg:"bg-yellow-100",text:"text-yellow-800",border:"border-yellow-300"},{bg:"bg-pink-100",text:"text-pink-800",border:"border-pink-300"},{bg:"bg-indigo-100",text:"text-indigo-800",border:"border-indigo-300"},{bg:"bg-red-100",text:"text-red-800",border:"border-red-300"},{bg:"bg-teal-100",text:"text-teal-800",border:"border-teal-300"},{bg:"bg-orange-100",text:"text-orange-800",border:"border-orange-300"},{bg:"bg-cyan-100",text:"text-cyan-800",border:"border-cyan-300"},{bg:"bg-violet-100",text:"text-violet-800",border:"border-violet-300"},{bg:"bg-amber-100",text:"text-amber-800",border:"border-amber-300"},{bg:"bg-lime-100",text:"text-lime-800",border:"border-lime-300"},{bg:"bg-emerald-100",text:"text-emerald-800",border:"border-emerald-300"},{bg:"bg-sky-100",text:"text-sky-800",border:"border-sky-300"},{bg:"bg-rose-100",text:"text-rose-800",border:"border-rose-300"},{bg:"bg-fuchsia-100",text:"text-fuchsia-800",border:"border-fuchsia-300"},{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"},{bg:"bg-stone-100",text:"text-stone-800",border:"border-stone-300"},{bg:"bg-zinc-100",text:"text-zinc-800",border:"border-zinc-300"}],Hu=new Map([["component",0],["feature",1],["detail_level",2],["level of detail",2],["info",3],["unit",4]]);function ts(e,t){const n=e.toLowerCase();if(Hu.has(n)){const i=Hu.get(n);return es[i]}const l=n.split("").reduce((i,r)=>(i<<5)-i+r.charCodeAt(0),0),a=4+Math.abs(l)%(es.length-4);return es[a]}function Rx({show:e,onToggle:t}){return o.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 text-sm",children:[o.jsx("input",{type:"checkbox",className:"h-4 w-4",checked:e,onChange:n=>t(n.target.checked)}),"Show help text"]})}function Ix(){var Zt,ci,ea;const[e,t]=A.useState(""),n=$.useRef(null),[l,a]=$.useState(new Map),[i,r]=$.useState(null),[s,c]=$.useState(new Set(cy)),[d,u]=Tx({onWorkspaceLoaded:A.useCallback(V=>{if(n.current){const Y={charts:V.charts.map(x=>({...x,selectedPoints:new Map(Object.entries(x.selectedPoints).map(([S,D])=>[S,new Set(D)]))})),rowHeights:new Map(Object.entries(V.rowHeights).map(([x,S])=>[Number(x),S])),columnWidths:new Map(Object.entries(V.columnWidths).map(([x,S])=>[Number(x),S])),nextChartId:V.nextChartId,activeChartId:V.activeChartId};n.current.setChartGridState(Y)}},[n])}),[m,p]=A.useState(!1),[f,v]=A.useState(!1),[b,_]=A.useState(!1),[g,y]=A.useState(null),[h,C]=A.useState(null),k=$.useRef(null),P=$.useMemo(()=>{if(!i)return{top:"1rem",left:"1rem",showArrow:!1,arrowOnLeft:!0};const V=800,Y=8,x=window.innerWidth;let S=i.right+Y,D=!0;return S+V>x-20&&(S=i.left-V-Y,D=!1,S<20&&(S=20,D=!0)),{top:`${i.top}px`,left:`${S}px`,showArrow:!0,arrowOnLeft:D}},[i]),[w,L]=A.useState(!1),[U,R]=A.useState(new Set),[M,E]=A.useState(()=>new Set),[F,le]=A.useState("Standard"),[B,Z]=A.useState(["Equipment","Component","Type of Data"]),[ae,G]=A.useState(!0),j=$.useRef(null),I=$.useRef(null),[Q,ee]=$.useState(""),[ce,ne]=$.useState(!0),[te,de]=$.useState(!0),[De,_t]=$.useState(!1),[me,Ve]=$.useState(!1),[Xt,kn]=$.useState("sequential"),Bt=$.useRef(0),Dn=$.useRef(0),He=$.useRef(!0);$.useEffect(()=>{if(!I.current)return;const V=()=>{if(!I.current)return;const S=I.current,D=S.scrollTop;if(Date.now()-Dn.current<500){Bt.current=D;return}if(He.current){He.current=!1,Bt.current=D;return}D>Bt.current&&D>100?te||de(!0):D<50&&te&&de(!1),Bt.current=D;const N=S.querySelectorAll('[id^="group-"]');let q="";N.forEach(W=>{const X=W.getBoundingClientRect(),H=S.getBoundingClientRect();X.top-H.top<=H.height*.3&&X.bottom>H.top&&(q=W.id)}),q&&q!==Q&&ee(q)},Y=setTimeout(V,100),x=I.current;return x.addEventListener("scroll",V),()=>{clearTimeout(Y),x.removeEventListener("scroll",V)}},[Q,te]),$.useEffect(()=>{const V=Y=>{Y.key==="Escape"&&(De?_t(!1):ae&&G(!1))};return document.addEventListener("keydown",V),()=>{document.removeEventListener("keydown",V)}},[ae,De]),$.useEffect(()=>{if(!ae)return;const V=Y=>{const x=Y.target;x&&(j.current&&j.current.contains(x)||x.closest('[data-role="sidebar-toggle"]')||G(!1))};return document.addEventListener("mousedown",V),document.addEventListener("touchstart",V,{passive:!0}),()=>{document.removeEventListener("mousedown",V),document.removeEventListener("touchstart",V)}},[ae]);const Zn=V=>{ae?el(V):(G(!0),setTimeout(()=>{el(V)},300))},el=V=>{if(!I.current)return;const Y=I.current.querySelector(`[data-point-key="${V}"]`);Y&&(Y.scrollIntoView({behavior:"smooth",block:"center"}),Y.classList.add("bg-blue-100"),setTimeout(()=>{Y.classList.remove("bg-blue-100")},1e3))},Yl=()=>new Set(s),ri=V=>{c(new Set(V))},Jl=A.useMemo(()=>Vx(Nn),[]),po=A.useMemo(()=>[...Jl.keys()].sort(),[Jl]),Xl=A.useMemo(()=>{let V=Nn;if(V=V.filter(x=>(Array.isArray(x.labels)?x.labels:[]).length>0),e){const x=e.toLowerCase();V=V.filter(S=>(S.entry.description||"").toLowerCase().includes(x)||(S.entry.longdescription||"").toLowerCase().includes(x)||(S.entry.name||"").toLowerCase().includes(x)?!0:(Array.isArray(S.labels)?S.labels:[]).some(N=>{const q=ma(N.label_family,N.label_text);return q&&q.toLowerCase().includes(x)}))}const Y=(()=>{switch(F){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();if(V=V.filter(x=>{const D=(Array.isArray(x.labels)?x.labels:[]).filter(T=>T.label_family==="Level of Detail").map(T=>T.label_text);return D.length===0?!0:D.some(T=>Y.includes(T))}),M.size>0){const x=new Map;M.forEach(S=>{const[D,T]=S.split(":",2);x.has(D)||x.set(D,new Set),x.get(D).add(T)}),V=V.filter(S=>{const D=Array.isArray(S.labels)?S.labels:[];if(D.length===0)return!1;const T=new Map;D.forEach(N=>{T.has(N.label_family)||T.set(N.label_family,new Set),T.get(N.label_family).add(N.label_text)});for(const[N,q]of x.entries()){const W=T.get(N);if(!W||![...q].some(H=>W.has(H)))return!1}return!0})}return V},[e,M,F]),Tn=A.useMemo(()=>Ax(Xl,B),[Xl,B]);$.useEffect(()=>{ee(""),I.current&&setTimeout(()=>{const V=I.current;V&&V.dispatchEvent(new Event("scroll"))},150)},[Tn]);const oi=V=>{if(console.log("toggle called for key:",V),!n.current){console.warn("ChartGrid callbacks not available yet");return}const Y=n.current.getActiveChartSelectedPoints(),x=Y.has(V);if(console.log("isCurrentlySelected:",x,"activeSelected size:",Y.size),x)console.log("Removing point:",V),n.current.togglePointForActiveChart(V);else{const S=Yl();console.log("Adding point:",V,"with inverters:",S),n.current.updateInvertersForActiveChart(V,S),ri(S)}},tl=(V,Y)=>{ri(Y),n.current&&n.current.updateInvertersForActiveChart(V,Y)},nl=(V,Y)=>{E(x=>{const S=new Set(x),D=`${V}:${Y}`;return S.has(D)?S.delete(D):S.add(D),S})},fo=()=>E(new Set),yo=V=>{R(Y=>{const x=new Set(Y);return x.has(V)?x.delete(V):x.add(V),x})},go=Xl.length,bo=A.useMemo(()=>Nn.filter(V=>(Array.isArray(V.labels)?V.labels:[]).length>0).length,[]);A.useEffect(()=>{try{console.assert(Nn.length>0,"Expected sample data");const V=Nn.find(Y=>Y.entry.name==="pNom");V&&console.assert(V.entry.unit==="W","pNom should have unit W")}catch(V){console.warn("Self-test failed:",V)}},[]);const Pt=A.useCallback(()=>{const V={id:"chart-0",row:0,col:0,selectedPoints:new Map};n.current&&n.current.setChartGridState({charts:[V],rowHeights:new Map([[0,520]]),columnWidths:new Map([[0,780]]),nextChartId:1,activeChartId:"chart-0"});const Y=ji([V],new Map([[0,520]]),new Map([[0,780]]),1,"chart-0");u.createNewWorkspace("Untitled Workspace",Y).then(()=>{}).catch(x=>{console.error("Failed to create workspace:",x)})},[n,u]),ho=A.useCallback(()=>{d.isDirty?(C("new"),_(!0)):Pt()},[d.isDirty,Pt]),xo=A.useCallback(async()=>{if(!d.currentWorkspace){v(!0);return}if(d.currentWorkspace.name==="Untitled Workspace"){v(!0);return}if(d.currentWorkspace.type==="builtin"){v(!0);return}try{if(n.current){const V=n.current.getChartGridState(),Y=ji(V.charts,V.rowHeights,V.columnWidths,V.nextChartId,V.activeChartId);u.updateCurrentWorkspace(Y)}await u.saveCurrentWorkspace()}catch(V){console.error("Failed to save workspace:",V)}},[d.currentWorkspace,u,n]),_o=A.useCallback(V=>{let Y=ji([],new Map,new Map,0);if(n.current){const x=n.current.getChartGridState();Y=ji(x.charts,x.rowHeights,x.columnWidths,x.nextChartId,x.activeChartId)}u.createNewWorkspace(V,Y).then(()=>{v(!1)}).catch(x=>{console.error("Failed to save workspace:",x)})},[u,n]),Be=A.useCallback(V=>{d.isDirty?(y(V),_(!0)):u.loadWorkspace(V)},[d.isDirty,u]),ze=A.useCallback(()=>{var V;d.isDirty?(C("import"),_(!0)):(V=k.current)==null||V.click()},[d.isDirty]),Zl=A.useCallback(async V=>{var x;const Y=(x=V.target.files)==null?void 0:x[0];if(Y){try{const S=await u.importWorkspace(Y);await u.loadWorkspace(S.id)}catch(S){console.error("Failed to import workspace:",S)}k.current&&(k.current.value="")}},[u]),ll=A.useCallback(()=>{d.currentWorkspace&&u.exportWorkspace(d.currentWorkspace.id)},[d.currentWorkspace,u]),ye=A.useCallback(async()=>{var V;try{await u.saveCurrentWorkspace(),_(!1),g?(u.loadWorkspace(g),y(null)):h==="new"?(Pt(),C(null)):h==="import"&&((V=k.current)==null||V.click(),C(null))}catch(Y){console.error("Failed to save workspace:",Y)}},[u,g,h,Pt]),ge=A.useCallback(()=>{var V;_(!1),u.markClean(),g?(u.loadWorkspace(g),y(null)):h==="new"?(Pt(),C(null)):h==="import"&&((V=k.current)==null||V.click(),C(null))},[u,g,h,Pt]),si=A.useCallback(()=>{_(!1),y(null),C(null)},[]);return o.jsxs("div",{className:"h-full bg-slate-100 p-4 md:p-6",children:[o.jsxs("div",{className:"mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative overflow-hidden flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("h1",{className:"text-lg font-semibold text-gray-900",children:"Historical Data"}),o.jsx(fx,{onNew:ho,onSave:xo,onSaveAs:()=>v(!0),onImport:ze,onExport:ll,onManage:()=>p(!0),hasUnsavedChanges:d.isDirty}),o.jsx(yx,{currentWorkspace:d.currentWorkspace?{id:d.currentWorkspace.id,name:d.currentWorkspace.name,type:d.currentWorkspace.type,isDefault:d.currentWorkspace.isDefault,createdAt:d.currentWorkspace.createdAt,updatedAt:d.currentWorkspace.updatedAt,chartCount:d.currentWorkspace.data.charts.length}:null,recentWorkspaces:d.workspaces.slice(0,5),onSwitch:Be,onManage:()=>p(!0),hasUnsavedChanges:d.isDirty})]}),o.jsx("div",{className:"flex items-center gap-3",children:d.error&&o.jsx("span",{className:"text-sm text-red-600",children:d.error})})]}),o.jsx("div",{className:"flex-1 min-h-0 relative",children:o.jsx(dx,{protocols:Nn,onUpdateInverters:()=>{},onScrollToPoint:Zn,onRemoveInverter:()=>{},onSelectPointsToggle:G,selectPointsOpen:ae,callbacksRef:n,onActiveChartSelectedPointsChange:a,onActiveChartPositionChange:r})}),o.jsxs("div",{ref:j,className:`fixed bg-white border-2 border-blue-400 shadow-xl transition-all duration-300 z-50 rounded-lg flex flex-row ${ae?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-4 pointer-events-none"}`,style:{top:P.top,left:P.left,width:"800px",height:ae?"calc(100vh - 8rem)":"0",maxHeight:"calc(100vh - 8rem)",overflow:"hidden"},children:[ae&&P.showArrow&&o.jsx("div",{className:`absolute top-4 w-0 h-0 ${P.arrowOnLeft?"left-0":"right-0"}`,style:{borderTop:"8px solid transparent",borderBottom:"8px solid transparent",...P.arrowOnLeft?{borderRight:"8px solid rgb(96, 165, 250)",transform:"translateX(-8px)"}:{borderLeft:"8px solid rgb(96, 165, 250)",transform:"translateX(8px)"}}}),o.jsxs("div",{className:"h-full flex flex-row w-full min-h-0",children:[o.jsx("div",{className:"w-40 border-r border-gray-200 flex-shrink-0 overflow-y-auto",children:o.jsxs("nav",{className:"p-3 text-sm text-gray-800",children:[o.jsx("div",{className:"text-emerald-600 font-semibold mb-2 text-xs",children:"Navigation"}),o.jsx("div",{className:"flex flex-col gap-0.5",children:Tn.size>0&&[...Tn.entries()].filter(([V])=>V!=="(Unlabeled)").map(([V,Y])=>{const x=`group-${V.replace(/\s+/g,"-")}-0`,S=Q===x,D=[];return Y instanceof Map&&D.push(...[...Y.entries()].filter(([T])=>T!=="(Unlabeled)")),o.jsxs("div",{children:[o.jsxs("div",{className:"relative",children:[S&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),o.jsx("button",{className:`px-2 py-1 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors font-medium ${S?"text-blue-600 bg-blue-50":"text-gray-800"}`,onClick:()=>{const T=document.getElementById(x);if(T&&I.current){const N=I.current.getBoundingClientRect(),q=T.getBoundingClientRect(),W=I.current.scrollTop,X=q.top-N.top+W;I.current.scrollTo({top:X-10,behavior:"smooth"})}},children:V})]}),D.length>0&&o.jsx("div",{className:"ml-2 mt-0.5 space-y-0.5",children:D.map(([T])=>{const W=`group-${`${V.replace(/\s+/g,"-")}-${T.replace(/\s+/g,"-")}`}-1`,X=Q===W;return o.jsxs("div",{className:"relative",children:[X&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-0.5 bg-blue-400 rounded-r"}),o.jsx("button",{className:`px-2 py-0.5 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors ${X?"text-blue-600 bg-blue-50":"text-gray-600"}`,onClick:()=>{const H=document.getElementById(W);if(H&&I.current){const K=I.current.getBoundingClientRect(),re=H.getBoundingClientRect(),J=I.current.scrollTop,Pe=re.top-K.top+J;I.current.scrollTo({top:Pe-10,behavior:"smooth"})}},children:T})]},T)})})]},V)})})]})}),o.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[o.jsx("div",{className:"border-b border-gray-200",children:o.jsxs("button",{onClick:()=>{Dn.current=Date.now(),de(!te)},className:"w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-colors",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:`h-4 w-4 text-gray-500 transition-transform ${te?"":"rotate-90"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),o.jsx("div",{className:"text-lg font-semibold",children:"Add Points"})]}),o.jsxs("div",{className:"text-sm text-gray-600 flex items-center gap-2",children:[o.jsxs("span",{children:["Available: ",go.toLocaleString()," of ",bo.toLocaleString()]}),o.jsxs("button",{onClick:V=>{V.stopPropagation(),_t(!0)},className:"px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",title:"Configure preferences",children:[o.jsxs("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Preferences"]})]})]})}),o.jsx("div",{className:`transition-all duration-300 overflow-hidden ${te?"max-h-0":"max-h-[1000px]"}`,children:o.jsxs("div",{className:"p-4",children:[o.jsx(Y0,{allLabels:Jl,selectedLabels:M,onToggleLabel:nl,onClearFilters:fo,protocols:Nn,detailLevel:F,filterStructure:Xt,getLabelColor:ts,getLabelHelp:ma}),o.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[o.jsx("div",{className:"flex-1",children:o.jsx(ux,{value:e,onChange:t})}),o.jsx(Rx,{show:w,onToggle:L})]}),o.jsxs("div",{className:"mt-2 flex items-center gap-4",children:[o.jsxs("button",{onClick:()=>{ne(!0),I.current&&I.current.querySelectorAll("details").forEach(Y=>{Y.open=!0})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[o.jsx("span",{children:"⤵"}),o.jsx("span",{children:"Expand all"})]}),o.jsxs("button",{onClick:()=>{ne(!1),I.current&&I.current.querySelectorAll("details").forEach(Y=>{Y.open=!1})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[o.jsx("span",{children:"⤴"}),o.jsx("span",{children:"Collapse all"})]}),o.jsx(Uu,{value:F,onChange:le,getLabelHelp:ma})]})]})}),o.jsx("div",{className:"flex-1 overflow-y-auto px-4 pb-4 pr-1",ref:I,"data-scroll-container":!0,children:Tn.size===0?o.jsxs("div",{className:"py-4 text-center text-sm text-gray-500",children:["No points match the current filters.",o.jsx("br",{}),o.jsx("b",{children:"Increase the Detail Level"})," or ",o.jsx("b",{children:"remove filters"})," to see more data points."]}):[...Tn.entries()].filter(([V])=>V!=="(Unlabeled)").map(([V,Y])=>o.jsx(ry,{levelName:V,levelData:Y,selected:l,toggle:oi,showHelp:w,onUpdateInverters:tl,groupsExpanded:ce,pointHelpEnabled:U,onTogglePointHelp:yo,onOpenChartTutorial:()=>Ve(!0),depth:0,query:e,hierarchy:B,getLabelColor:ts,getLabelHelp:ma},V))}),o.jsxs("div",{className:"border-t border-gray-200 bg-white/80 px-4 py-3",children:[o.jsx("p",{className:"text-xs text-gray-600 mb-2",children:F!=="Complete"?"Didn't find what you were looking for? Increase the Detail Level, remove filters, or clear your search terms to see more data points.":"Didn't find what you were looking for? Try removing filters or clearing your search terms to see more data points."}),o.jsx(Uu,{value:F,onChange:le,getLabelHelp:ma})]})]})]})]})]}),De&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",onClick:()=>_t(!1),children:o.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden",onClick:V=>V.stopPropagation(),children:[o.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[o.jsxs("h2",{className:"text-lg font-semibold text-gray-800 flex items-center gap-2",children:[o.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Preferences"]}),o.jsx("button",{onClick:()=>_t(!1),className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"p-4 overflow-y-auto max-h-[calc(80vh-140px)] space-y-6",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-800",children:"Filter Structure"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",children:[o.jsx("input",{type:"radio",name:"filterStructure",value:"sequential",checked:Xt==="sequential",onChange:V=>kn(V.target.value),className:"mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-medium text-gray-900",children:"Sequential"}),o.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Filters unlock in order. Start by selecting equipment, then component options unlock, followed by type of data, and finally unit filters. Each level requires at least one selection before the next unlocks. This guided approach helps narrow down options step-by-step."})]})]}),o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",children:[o.jsx("input",{type:"radio",name:"filterStructure",value:"freeform",checked:Xt==="freeform",onChange:V=>kn(V.target.value),className:"mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-medium text-gray-900",children:"Freeform"}),o.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Select filters in any order you prefer. All filter categories are available simultaneously, allowing flexible combinations. Filters within a category use OR logic (any match), while filters across categories use AND logic (all must match)."})]})]})]})]}),o.jsxs("div",{className:"space-y-3 pt-6 border-t border-gray-200",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-800",children:"Sort Order"}),o.jsx(px,{availableFamilies:po,hierarchy:B,onChange:Z,scrollContainerRef:I,getLabelColor:ts})]})]}),o.jsx("div",{className:"flex items-center justify-end gap-2 p-4 border-t border-gray-200",children:o.jsx("button",{onClick:()=>_t(!1),className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",children:"Done"})})]})}),o.jsx(sy,{isOpen:me,onClose:()=>Ve(!1),initialStep:7}),o.jsx(bx,{isOpen:m,workspaces:d.workspaces,currentWorkspaceId:((Zt=d.currentWorkspace)==null?void 0:Zt.id)||null,onClose:()=>p(!1),onSwitch:V=>{p(!1),Be(V)},onRename:u.renameWorkspace,onDuplicate:V=>{u.duplicateWorkspace(V).catch(Y=>console.error("Failed to duplicate workspace:",Y))},onDelete:V=>{u.deleteWorkspace(V).catch(Y=>console.error("Failed to delete workspace:",Y))},onExport:u.exportWorkspace,onSetDefault:V=>{u.setDefaultWorkspace(V).catch(Y=>console.error("Failed to set default workspace:",Y))}}),o.jsx(hx,{isOpen:f,currentName:((ci=d.currentWorkspace)==null?void 0:ci.name)||"New Workspace",onSave:_o,onCancel:()=>v(!1)}),o.jsx(xx,{isOpen:b,workspaceName:((ea=d.currentWorkspace)==null?void 0:ea.name)||"Current Workspace",onSave:ye,onDiscard:ge,onCancel:si}),o.jsx("input",{ref:k,type:"file",accept:".json",onChange:Zl,style:{display:"none"}})]})}const zu="matter-app-active-view";function Mx(){const[e,t]=A.useState(()=>{const n=localStorage.getItem(zu);return n==="site-config"||n==="historical-data"?n:"site-config"});return A.useEffect(()=>{localStorage.setItem(zu,e)},[e]),o.jsxs("div",{className:"flex h-screen bg-slate-100",children:[o.jsxs("aside",{className:"w-64 bg-white border-r border-slate-300 flex flex-col shadow-sm",children:[o.jsx("div",{className:"p-4 border-b border-slate-300",children:o.jsx("h1",{className:"text-lg font-semibold text-slate-800",children:"Matter App"})}),o.jsxs("nav",{className:"flex-1 p-3",children:[o.jsx("button",{onClick:()=>t("site-config"),className:`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${e==="site-config"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xl",children:"⚙️"}),o.jsx("span",{children:"Site Config"})]})}),o.jsx("button",{onClick:()=>t("historical-data"),className:`w-full text-left px-4 py-3 rounded-lg transition-colors ${e==="historical-data"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xl",children:"📊"}),o.jsx("span",{children:"Historical Data"})]})})]}),o.jsx("div",{className:"p-4 border-t border-slate-300 text-xs text-slate-500",children:o.jsxs("div",{children:["Active: ",e==="site-config"?"Site Config":"Historical Data"]})})]}),o.jsxs("main",{className:"flex-1 overflow-auto",children:[e==="site-config"&&o.jsx(Ph,{}),e==="historical-data"&&o.jsx(Ix,{})]})]})}ns.createRoot(document.getElementById("root")).render(o.jsx($.StrictMode,{children:o.jsx(Mx,{})}));

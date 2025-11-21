(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function xy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ju={exports:{}},Ir={},Xu={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=Symbol.for("react.element"),_y=Symbol.for("react.portal"),vy=Symbol.for("react.fragment"),wy=Symbol.for("react.strict_mode"),Cy=Symbol.for("react.profiler"),Sy=Symbol.for("react.provider"),Ly=Symbol.for("react.context"),ky=Symbol.for("react.forward_ref"),Dy=Symbol.for("react.suspense"),Ty=Symbol.for("react.memo"),Ey=Symbol.for("react.lazy"),yd=Symbol.iterator;function Py(e){return e===null||typeof e!="object"?null:(e=yd&&e[yd]||e["@@iterator"],typeof e=="function"?e:null)}var Zu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},em=Object.assign,tm={};function Fl(e,t,n){this.props=e,this.context=t,this.refs=tm,this.updater=n||Zu}Fl.prototype.isReactComponent={};Fl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nm(){}nm.prototype=Fl.prototype;function rc(e,t,n){this.props=e,this.context=t,this.refs=tm,this.updater=n||Zu}var oc=rc.prototype=new nm;oc.constructor=rc;em(oc,Fl.prototype);oc.isPureReactComponent=!0;var gd=Array.isArray,lm=Object.prototype.hasOwnProperty,sc={current:null},am={key:!0,ref:!0,__self:!0,__source:!0};function im(e,t,n){var l,a={},i=null,r=null;if(t!=null)for(l in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(i=""+t.key),t)lm.call(t,l)&&!am.hasOwnProperty(l)&&(a[l]=t[l]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(l in s=e.defaultProps,s)a[l]===void 0&&(a[l]=s[l]);return{$$typeof:Za,type:e,key:i,ref:r,props:a,_owner:sc.current}}function Ny(e,t){return{$$typeof:Za,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Za}function Ay(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bd=/\/+/g;function wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ay(""+e.key):t.toString(36)}function Oi(e,t,n,l,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Za:case _y:r=!0}}if(r)return r=e,a=a(r),e=l===""?"."+wo(r,0):l,gd(a)?(n="",e!=null&&(n=e.replace(bd,"$&/")+"/"),Oi(a,t,n,"",function(d){return d})):a!=null&&(cc(a)&&(a=Ny(a,n+(!a.key||r&&r.key===a.key?"":(""+a.key).replace(bd,"$&/")+"/")+e)),t.push(a)),1;if(r=0,l=l===""?".":l+":",gd(e))for(var s=0;s<e.length;s++){i=e[s];var c=l+wo(i,s);r+=Oi(i,t,n,c,a)}else if(c=Py(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=l+wo(i,s++),r+=Oi(i,t,n,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function di(e,t,n){if(e==null)return e;var l=[],a=0;return Oi(e,l,"","",function(i){return t.call(n,i,a++)}),l}function Vy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},Fi={transition:null},Iy={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Fi,ReactCurrentOwner:sc};function rm(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:di,forEach:function(e,t,n){di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return di(e,function(){t++}),t},toArray:function(e){return di(e,function(t){return t})||[]},only:function(e){if(!cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Fl;re.Fragment=vy;re.Profiler=Cy;re.PureComponent=rc;re.StrictMode=wy;re.Suspense=Dy;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;re.act=rm;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=em({},e.props),a=e.key,i=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,r=sc.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)lm.call(t,c)&&!am.hasOwnProperty(c)&&(l[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];l.children=s}return{$$typeof:Za,type:e.type,key:a,ref:i,props:l,_owner:r}};re.createContext=function(e){return e={$$typeof:Ly,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sy,_context:e},e.Consumer=e};re.createElement=im;re.createFactory=function(e){var t=im.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:ky,render:e}};re.isValidElement=cc;re.lazy=function(e){return{$$typeof:Ey,_payload:{_status:-1,_result:e},_init:Vy}};re.memo=function(e,t){return{$$typeof:Ty,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Fi.transition;Fi.transition={};try{e()}finally{Fi.transition=t}};re.unstable_act=rm;re.useCallback=function(e,t){return Ye.current.useCallback(e,t)};re.useContext=function(e){return Ye.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};re.useEffect=function(e,t){return Ye.current.useEffect(e,t)};re.useId=function(){return Ye.current.useId()};re.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return Ye.current.useMemo(e,t)};re.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};re.useRef=function(e){return Ye.current.useRef(e)};re.useState=function(e){return Ye.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return Ye.current.useTransition()};re.version="18.3.1";Xu.exports=re;var A=Xu.exports;const z=xy(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry=A,My=Symbol.for("react.element"),Gy=Symbol.for("react.fragment"),jy=Object.prototype.hasOwnProperty,By=Ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oy={key:!0,ref:!0,__self:!0,__source:!0};function om(e,t,n){var l,a={},i=null,r=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(r=t.ref);for(l in t)jy.call(t,l)&&!Oy.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)a[l]===void 0&&(a[l]=t[l]);return{$$typeof:My,type:e,key:i,ref:r,props:a,_owner:By.current}}Ir.Fragment=Gy;Ir.jsx=om;Ir.jsxs=om;Ju.exports=Ir;var o=Ju.exports,ls={},sm={exports:{}},ct={},cm={exports:{}},dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,G){var j=R.length;R.push(G);e:for(;0<j;){var W=j-1>>>1,Z=R[W];if(0<a(Z,G))R[W]=G,R[j]=Z,j=W;else break e}}function n(R){return R.length===0?null:R[0]}function l(R){if(R.length===0)return null;var G=R[0],j=R.pop();if(j!==G){R[0]=j;e:for(var W=0,Z=R.length,se=Z>>>1;W<se;){var te=2*(W+1)-1,ne=R[te],oe=te+1,ke=R[oe];if(0>a(ne,j))oe<Z&&0>a(ke,ne)?(R[W]=ke,R[oe]=j,W=oe):(R[W]=ne,R[te]=j,W=te);else if(oe<Z&&0>a(ke,j))R[W]=ke,R[oe]=j,W=oe;else break e}}return G}function a(R,G){var j=R.sortIndex-G.sortIndex;return j!==0?j:R.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,s=r.now();e.unstable_now=function(){return r.now()-s}}var c=[],d=[],u=1,m=null,p=3,f=!1,v=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var G=n(d);G!==null;){if(G.callback===null)l(d);else if(G.startTime<=R)l(d),G.sortIndex=G.expirationTime,t(c,G);else break;G=n(d)}}function S(R){if(b=!1,h(R),!v)if(n(c)!==null)v=!0,X(k);else{var G=n(d);G!==null&&ie(S,G.startTime-R)}}function k(R,G){v=!1,b&&(b=!1,g(L),L=-1),f=!0;var j=p;try{for(h(G),m=n(c);m!==null&&(!(m.expirationTime>G)||R&&!M());){var W=m.callback;if(typeof W=="function"){m.callback=null,p=m.priorityLevel;var Z=W(m.expirationTime<=G);G=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(c)&&l(c),h(G)}else l(c);m=n(c)}if(m!==null)var se=!0;else{var te=n(d);te!==null&&ie(S,te.startTime-G),se=!1}return se}finally{m=null,p=j,f=!1}}var P=!1,w=null,L=-1,U=5,I=-1;function M(){return!(e.unstable_now()-I<U)}function E(){if(w!==null){var R=e.unstable_now();I=R;var G=!0;try{G=w(!0,R)}finally{G?q():(P=!1,w=null)}}else P=!1}var q;if(typeof y=="function")q=function(){y(E)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,B=ee.port2;ee.port1.onmessage=E,q=function(){B.postMessage(null)}}else q=function(){_(E,0)};function X(R){w=R,P||(P=!0,q())}function ie(R,G){L=_(function(){R(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,X(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var j=p;p=G;try{return R()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=p;p=R;try{return G()}finally{p=j}},e.unstable_scheduleCallback=function(R,G,j){var W=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?W+j:W):j=W,R){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=j+Z,R={id:u++,callback:G,priorityLevel:R,startTime:j,expirationTime:Z,sortIndex:-1},j>W?(R.sortIndex=j,t(d,R),n(c)===null&&R===n(d)&&(b?(g(L),L=-1):b=!0,ie(S,j-W))):(R.sortIndex=Z,t(c,R),v||f||(v=!0,X(k))),R},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(R){var G=p;return function(){var j=p;p=G;try{return R.apply(this,arguments)}finally{p=j}}}})(dm);cm.exports=dm;var Fy=cm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=A,st=Fy;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var um=new Set,Aa={};function Yn(e,t){Al(e,t),Al(e+"Capture",t)}function Al(e,t){for(Aa[e]=t,e=0;e<t.length;e++)um.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),as=Object.prototype.hasOwnProperty,Uy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hd={},xd={};function Wy(e){return as.call(xd,e)?!0:as.call(hd,e)?!1:Uy.test(e)?xd[e]=!0:(hd[e]=!0,!1)}function $y(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hy(e,t,n,l){if(t===null||typeof t>"u"||$y(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,l,a,i,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=r}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var dc=/[\-:]([a-z])/g;function uc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dc,uc);Ge[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dc,uc);Ge[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dc,uc);Ge[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function mc(e,t,n,l){var a=Ge.hasOwnProperty(t)?Ge[t]:null;(a!==null?a.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hy(t,n,a,l)&&(n=null),l||a===null?Wy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,l=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var Qt=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ui=Symbol.for("react.element"),sl=Symbol.for("react.portal"),cl=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),is=Symbol.for("react.profiler"),mm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),yc=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),fm=Symbol.for("react.offscreen"),_d=Symbol.iterator;function na(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Co;function fa(e){if(Co===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Co=t&&t[1]||""}return`
`+Co+e}var So=!1;function Lo(e,t){if(!e||So)return"";So=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var l=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){l=d}e.call(t.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=l.stack.split(`
`),r=a.length-1,s=i.length-1;1<=r&&0<=s&&a[r]!==i[s];)s--;for(;1<=r&&0<=s;r--,s--)if(a[r]!==i[s]){if(r!==1||s!==1)do if(r--,s--,0>s||a[r]!==i[s]){var c=`
`+a[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=r&&0<=s);break}}}finally{So=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fa(e):""}function zy(e){switch(e.tag){case 5:return fa(e.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return e=Lo(e.type,!1),e;case 11:return e=Lo(e.type.render,!1),e;case 1:return e=Lo(e.type,!0),e;default:return""}}function ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cl:return"Fragment";case sl:return"Portal";case is:return"Profiler";case pc:return"StrictMode";case rs:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pm:return(e.displayName||"Context")+".Consumer";case mm:return(e._context.displayName||"Context")+".Provider";case fc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yc:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}function Ky(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ss(t);case 8:return t===pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qy(e){var t=ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=Qy(e))}function gm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=ym(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cs(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vd(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bm(e,t){t=t.checked,t!=null&&mc(e,"checked",t,!1)}function ds(e,t){bm(e,t);var n=xn(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?us(e,t.type,n):t.hasOwnProperty("defaultValue")&&us(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function us(e,t,n){(t!=="number"||lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ya=Array.isArray;function Sl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ms(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(ya(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function hm(e,t){var n=xn(t.value),l=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function Sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ps(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,_m=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yy=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(e){Yy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),va[t]=va[e]})});function vm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||va.hasOwnProperty(e)&&va[e]?(""+t).trim():t+"px"}function wm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,a=vm(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,a):e[n]=a}}var Jy=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fs(e,t){if(t){if(Jy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gs=null;function gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,Ll=null,kl=null;function Ld(e){if(e=ni(e)){if(typeof bs!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Br(t),bs(e.stateNode,e.type,t))}}function Cm(e){Ll?kl?kl.push(e):kl=[e]:Ll=e}function Sm(){if(Ll){var e=Ll,t=kl;if(kl=Ll=null,Ld(e),t)for(e=0;e<t.length;e++)Ld(t[e])}}function Lm(e,t){return e(t)}function km(){}var ko=!1;function Dm(e,t,n){if(ko)return e(t,n);ko=!0;try{return Lm(e,t,n)}finally{ko=!1,(Ll!==null||kl!==null)&&(km(),Sm())}}function Ia(e,t){var n=e.stateNode;if(n===null)return null;var l=Br(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var hs=!1;if($t)try{var la={};Object.defineProperty(la,"passive",{get:function(){hs=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{hs=!1}function Xy(e,t,n,l,a,i,r,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var wa=!1,ar=null,ir=!1,xs=null,Zy={onError:function(e){wa=!0,ar=e}};function eg(e,t,n,l,a,i,r,s,c){wa=!1,ar=null,Xy.apply(Zy,arguments)}function tg(e,t,n,l,a,i,r,s,c){if(eg.apply(this,arguments),wa){if(wa){var d=ar;wa=!1,ar=null}else throw Error(F(198));ir||(ir=!0,xs=d)}}function Jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kd(e){if(Jn(e)!==e)throw Error(F(188))}function ng(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return kd(a),e;if(i===l)return kd(a),t;i=i.sibling}throw Error(F(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,s=a.child;s;){if(s===n){r=!0,n=a,l=i;break}if(s===l){r=!0,l=a,n=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===n){r=!0,n=i,l=a;break}if(s===l){r=!0,l=i,n=a;break}s=s.sibling}if(!r)throw Error(F(189))}}if(n.alternate!==l)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Em(e){return e=ng(e),e!==null?Pm(e):null}function Pm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pm(e);if(t!==null)return t;e=e.sibling}return null}var Nm=st.unstable_scheduleCallback,Dd=st.unstable_cancelCallback,lg=st.unstable_shouldYield,ag=st.unstable_requestPaint,De=st.unstable_now,ig=st.unstable_getCurrentPriorityLevel,bc=st.unstable_ImmediatePriority,Am=st.unstable_UserBlockingPriority,rr=st.unstable_NormalPriority,rg=st.unstable_LowPriority,Vm=st.unstable_IdlePriority,Rr=null,At=null;function og(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Rr,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:dg,sg=Math.log,cg=Math.LN2;function dg(e){return e>>>=0,e===0?32:31-(sg(e)/cg|0)|0}var fi=64,yi=4194304;function ga(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function or(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,a=e.suspendedLanes,i=e.pingedLanes,r=n&268435455;if(r!==0){var s=r&~a;s!==0?l=ga(s):(i&=r,i!==0&&(l=ga(i)))}else r=n&~a,r!==0?l=ga(r):i!==0&&(l=ga(i));if(l===0)return 0;if(t!==0&&t!==l&&!(t&a)&&(a=l&-l,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(l&4&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-St(t),a=1<<n,l|=e[n],t&=~a;return l}function ug(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mg(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var r=31-St(i),s=1<<r,c=a[r];c===-1?(!(s&n)||s&l)&&(a[r]=ug(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function _s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Im(){var e=fi;return fi<<=1,!(fi&4194240)&&(fi=64),e}function Do(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=n}function pg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-St(n),i=1<<a;t[a]=0,l[a]=-1,e[a]=-1,n&=~i}}function hc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-St(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}var ue=0;function Rm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mm,xc,Gm,jm,Bm,vs=!1,gi=[],dn=null,un=null,mn=null,Ra=new Map,Ma=new Map,rn=[],fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(t.pointerId)}}function aa(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ni(t),t!==null&&xc(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function yg(e,t,n,l,a){switch(t){case"focusin":return dn=aa(dn,e,t,n,l,a),!0;case"dragenter":return un=aa(un,e,t,n,l,a),!0;case"mouseover":return mn=aa(mn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Ra.set(i,aa(Ra.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Ma.set(i,aa(Ma.get(i)||null,e,t,n,l,a)),!0}return!1}function Om(e){var t=Mn(e.target);if(t!==null){var n=Jn(t);if(n!==null){if(t=n.tag,t===13){if(t=Tm(n),t!==null){e.blockedOn=t,Bm(e.priority,function(){Gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);gs=l,n.target.dispatchEvent(l),gs=null}else return t=ni(n),t!==null&&xc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ed(e,t,n){qi(e)&&n.delete(t)}function gg(){vs=!1,dn!==null&&qi(dn)&&(dn=null),un!==null&&qi(un)&&(un=null),mn!==null&&qi(mn)&&(mn=null),Ra.forEach(Ed),Ma.forEach(Ed)}function ia(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,gg)))}function Ga(e){function t(a){return ia(a,e)}if(0<gi.length){ia(gi[0],e);for(var n=1;n<gi.length;n++){var l=gi[n];l.blockedOn===e&&(l.blockedOn=null)}}for(dn!==null&&ia(dn,e),un!==null&&ia(un,e),mn!==null&&ia(mn,e),Ra.forEach(t),Ma.forEach(t),n=0;n<rn.length;n++)l=rn[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&rn.shift()}var Dl=Qt.ReactCurrentBatchConfig,sr=!0;function bg(e,t,n,l){var a=ue,i=Dl.transition;Dl.transition=null;try{ue=1,_c(e,t,n,l)}finally{ue=a,Dl.transition=i}}function hg(e,t,n,l){var a=ue,i=Dl.transition;Dl.transition=null;try{ue=4,_c(e,t,n,l)}finally{ue=a,Dl.transition=i}}function _c(e,t,n,l){if(sr){var a=ws(e,t,n,l);if(a===null)Go(e,t,l,cr,n),Td(e,l);else if(yg(a,e,t,n,l))l.stopPropagation();else if(Td(e,l),t&4&&-1<fg.indexOf(e)){for(;a!==null;){var i=ni(a);if(i!==null&&Mm(i),i=ws(e,t,n,l),i===null&&Go(e,t,l,cr,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Go(e,t,l,null,n)}}var cr=null;function ws(e,t,n,l){if(cr=null,e=gc(l),e=Mn(e),e!==null)if(t=Jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cr=e,null}function Fm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ig()){case bc:return 1;case Am:return 4;case rr:case rg:return 16;case Vm:return 536870912;default:return 16}default:return 16}}var sn=null,vc=null,Ui=null;function qm(){if(Ui)return Ui;var e,t=vc,n=t.length,l,a="value"in sn?sn.value:sn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return Ui=a.slice(e,1<l?1-l:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function Pd(){return!1}function dt(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bi:Pd,this.isPropagationStopped=Pd,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var ql={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=dt(ql),ti=Se({},ql,{view:0,detail:0}),xg=dt(ti),To,Eo,ra,Mr=Se({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ra&&(ra&&e.type==="mousemove"?(To=e.screenX-ra.screenX,Eo=e.screenY-ra.screenY):Eo=To=0,ra=e),To)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),Nd=dt(Mr),_g=Se({},Mr,{dataTransfer:0}),vg=dt(_g),wg=Se({},ti,{relatedTarget:0}),Po=dt(wg),Cg=Se({},ql,{animationName:0,elapsedTime:0,pseudoElement:0}),Sg=dt(Cg),Lg=Se({},ql,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kg=dt(Lg),Dg=Se({},ql,{data:0}),Ad=dt(Dg),Tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pg[e])?!!t[e]:!1}function Cc(){return Ng}var Ag=Se({},ti,{key:function(e){if(e.key){var t=Tg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Eg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vg=dt(Ag),Ig=Se({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=dt(Ig),Rg=Se({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),Mg=dt(Rg),Gg=Se({},ql,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=dt(Gg),Bg=Se({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Og=dt(Bg),Fg=[9,13,27,32],Sc=$t&&"CompositionEvent"in window,Ca=null;$t&&"documentMode"in document&&(Ca=document.documentMode);var qg=$t&&"TextEvent"in window&&!Ca,Um=$t&&(!Sc||Ca&&8<Ca&&11>=Ca),Id=" ",Rd=!1;function Wm(e,t){switch(e){case"keyup":return Fg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function Ug(e,t){switch(e){case"compositionend":return $m(t);case"keypress":return t.which!==32?null:(Rd=!0,Id);case"textInput":return e=t.data,e===Id&&Rd?null:e;default:return null}}function Wg(e,t){if(dl)return e==="compositionend"||!Sc&&Wm(e,t)?(e=qm(),Ui=vc=sn=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Um&&t.locale!=="ko"?null:t.data;default:return null}}var $g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$g[e.type]:t==="textarea"}function Hm(e,t,n,l){Cm(l),t=dr(t,"onChange"),0<t.length&&(n=new wc("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Sa=null,ja=null;function Hg(e){lp(e,0)}function Gr(e){var t=pl(e);if(gm(t))return e}function zg(e,t){if(e==="change")return t}var zm=!1;if($t){var No;if($t){var Ao="oninput"in document;if(!Ao){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Ao=typeof Gd.oninput=="function"}No=Ao}else No=!1;zm=No&&(!document.documentMode||9<document.documentMode)}function jd(){Sa&&(Sa.detachEvent("onpropertychange",Km),ja=Sa=null)}function Km(e){if(e.propertyName==="value"&&Gr(ja)){var t=[];Hm(t,ja,e,gc(e)),Dm(Hg,t)}}function Kg(e,t,n){e==="focusin"?(jd(),Sa=t,ja=n,Sa.attachEvent("onpropertychange",Km)):e==="focusout"&&jd()}function Qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gr(ja)}function Yg(e,t){if(e==="click")return Gr(t)}function Jg(e,t){if(e==="input"||e==="change")return Gr(t)}function Xg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Xg;function Ba(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!as.call(t,a)||!kt(e[a],t[a]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Od(e,t){var n=Bd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bd(n)}}function Qm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ym(){for(var e=window,t=lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lr(e.document)}return t}function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zg(e){var t=Ym(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qm(n.ownerDocument.documentElement,n)){if(l!==null&&Lc(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(l.start,a);l=l.end===void 0?i:Math.min(l.end,a),!e.extend&&i>l&&(a=l,l=i,i=a),a=Od(n,i);var r=Od(n,l);a&&r&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>l?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eb=$t&&"documentMode"in document&&11>=document.documentMode,ul=null,Cs=null,La=null,Ss=!1;function Fd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ss||ul==null||ul!==lr(l)||(l=ul,"selectionStart"in l&&Lc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),La&&Ba(La,l)||(La=l,l=dr(Cs,"onSelect"),0<l.length&&(t=new wc("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=ul)))}function hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ml={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionend:hi("Transition","TransitionEnd")},Vo={},Jm={};$t&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete ml.animationend.animation,delete ml.animationiteration.animation,delete ml.animationstart.animation),"TransitionEvent"in window||delete ml.transitionend.transition);function jr(e){if(Vo[e])return Vo[e];if(!ml[e])return e;var t=ml[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jm)return Vo[e]=t[n];return e}var Xm=jr("animationend"),Zm=jr("animationiteration"),ep=jr("animationstart"),tp=jr("transitionend"),np=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){np.set(e,t),Yn(t,[e])}for(var Io=0;Io<qd.length;Io++){var Ro=qd[Io],tb=Ro.toLowerCase(),nb=Ro[0].toUpperCase()+Ro.slice(1);wn(tb,"on"+nb)}wn(Xm,"onAnimationEnd");wn(Zm,"onAnimationIteration");wn(ep,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(tp,"onTransitionEnd");Al("onMouseEnter",["mouseout","mouseover"]);Al("onMouseLeave",["mouseout","mouseover"]);Al("onPointerEnter",["pointerout","pointerover"]);Al("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function Ud(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,tg(l,t,void 0,e),e.currentTarget=null}function lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var s=l[r],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==i&&a.isPropagationStopped())break e;Ud(a,s,d),i=c}else for(r=0;r<l.length;r++){if(s=l[r],c=s.instance,d=s.currentTarget,s=s.listener,c!==i&&a.isPropagationStopped())break e;Ud(a,s,d),i=c}}}if(ir)throw e=xs,ir=!1,xs=null,e}function ge(e,t){var n=t[Es];n===void 0&&(n=t[Es]=new Set);var l=e+"__bubble";n.has(l)||(ap(t,e,2,!1),n.add(l))}function Mo(e,t,n){var l=0;t&&(l|=4),ap(n,e,l,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Oa(e){if(!e[xi]){e[xi]=!0,um.forEach(function(n){n!=="selectionchange"&&(lb.has(n)||Mo(n,!1,e),Mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,Mo("selectionchange",!1,t))}}function ap(e,t,n,l){switch(Fm(t)){case 1:var a=bg;break;case 4:a=hg;break;default:a=_c}n=a.bind(null,t,n,e),a=void 0,!hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Go(e,t,n,l,a){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var s=l.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(r===4)for(r=l.return;r!==null;){var c=r.tag;if((c===3||c===4)&&(c=r.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;r=r.return}for(;s!==null;){if(r=Mn(s),r===null)return;if(c=r.tag,c===5||c===6){l=i=r;continue e}s=s.parentNode}}l=l.return}Dm(function(){var d=i,u=gc(n),m=[];e:{var p=np.get(e);if(p!==void 0){var f=wc,v=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":f=Vg;break;case"focusin":v="focus",f=Po;break;case"focusout":v="blur",f=Po;break;case"beforeblur":case"afterblur":f=Po;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Mg;break;case Xm:case Zm:case ep:f=Sg;break;case tp:f=jg;break;case"scroll":f=xg;break;case"wheel":f=Og;break;case"copy":case"cut":case"paste":f=kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Vd}var b=(t&4)!==0,_=!b&&e==="scroll",g=b?p!==null?p+"Capture":null:p;b=[];for(var y=d,h;y!==null;){h=y;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=Ia(y,g),S!=null&&b.push(Fa(y,S,h)))),_)break;y=y.return}0<b.length&&(p=new f(p,v,null,n,u),m.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==gs&&(v=n.relatedTarget||n.fromElement)&&(Mn(v)||v[Ht]))break e;if((f||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=d,v=v?Mn(v):null,v!==null&&(_=Jn(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=d),f!==v)){if(b=Nd,S="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(b=Vd,S="onPointerLeave",g="onPointerEnter",y="pointer"),_=f==null?p:pl(f),h=v==null?p:pl(v),p=new b(S,y+"leave",f,n,u),p.target=_,p.relatedTarget=h,S=null,Mn(u)===d&&(b=new b(g,y+"enter",v,n,u),b.target=h,b.relatedTarget=_,S=b),_=S,f&&v)t:{for(b=f,g=v,y=0,h=b;h;h=al(h))y++;for(h=0,S=g;S;S=al(S))h++;for(;0<y-h;)b=al(b),y--;for(;0<h-y;)g=al(g),h--;for(;y--;){if(b===g||g!==null&&b===g.alternate)break t;b=al(b),g=al(g)}b=null}else b=null;f!==null&&Wd(m,p,f,b,!1),v!==null&&_!==null&&Wd(m,_,v,b,!0)}}e:{if(p=d?pl(d):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var k=zg;else if(Md(p))if(zm)k=Jg;else{k=Qg;var P=Kg}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Yg);if(k&&(k=k(e,d))){Hm(m,k,n,u);break e}P&&P(e,p,d),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&us(p,"number",p.value)}switch(P=d?pl(d):window,e){case"focusin":(Md(P)||P.contentEditable==="true")&&(ul=P,Cs=d,La=null);break;case"focusout":La=Cs=ul=null;break;case"mousedown":Ss=!0;break;case"contextmenu":case"mouseup":case"dragend":Ss=!1,Fd(m,n,u);break;case"selectionchange":if(eb)break;case"keydown":case"keyup":Fd(m,n,u)}var w;if(Sc)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else dl?Wm(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Um&&n.locale!=="ko"&&(dl||L!=="onCompositionStart"?L==="onCompositionEnd"&&dl&&(w=qm()):(sn=u,vc="value"in sn?sn.value:sn.textContent,dl=!0)),P=dr(d,L),0<P.length&&(L=new Ad(L,e,null,n,u),m.push({event:L,listeners:P}),w?L.data=w:(w=$m(n),w!==null&&(L.data=w)))),(w=qg?Ug(e,n):Wg(e,n))&&(d=dr(d,"onBeforeInput"),0<d.length&&(u=new Ad("onBeforeInput","beforeinput",null,n,u),m.push({event:u,listeners:d}),u.data=w))}lp(m,t)})}function Fa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dr(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ia(e,n),i!=null&&l.unshift(Fa(e,i,a)),i=Ia(e,t),i!=null&&l.push(Fa(e,i,a))),e=e.return}return l}function al(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wd(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===l)break;s.tag===5&&d!==null&&(s=d,a?(c=Ia(n,i),c!=null&&r.unshift(Fa(n,c,s))):a||(c=Ia(n,i),c!=null&&r.push(Fa(n,c,s)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var ab=/\r\n?/g,ib=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(ab,`
`).replace(ib,"")}function _i(e,t,n){if(t=$d(t),$d(e)!==t&&n)throw Error(F(425))}function ur(){}var Ls=null,ks=null;function Ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ts=typeof setTimeout=="function"?setTimeout:void 0,rb=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,ob=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(sb)}:Ts;function sb(e){setTimeout(function(){throw e})}function jo(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(l===0){e.removeChild(a),Ga(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=a}while(n);Ga(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ul=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Ul,qa="__reactProps$"+Ul,Ht="__reactContainer$"+Ul,Es="__reactEvents$"+Ul,cb="__reactListeners$"+Ul,db="__reactHandles$"+Ul;function Mn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zd(e);e!==null;){if(n=e[Nt])return n;e=zd(e)}return t}e=n,n=e.parentNode}return null}function ni(e){return e=e[Nt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pl(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Br(e){return e[qa]||null}var Ps=[],fl=-1;function Cn(e){return{current:e}}function be(e){0>fl||(e.current=Ps[fl],Ps[fl]=null,fl--)}function pe(e,t){fl++,Ps[fl]=e.current,e.current=t}var _n={},We=Cn(_n),tt=Cn(!1),Wn=_n;function Vl(e,t){var n=e.type.contextTypes;if(!n)return _n;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function nt(e){return e=e.childContextTypes,e!=null}function mr(){be(tt),be(We)}function Kd(e,t,n){if(We.current!==_n)throw Error(F(168));pe(We,t),pe(tt,n)}function ip(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var a in l)if(!(a in t))throw Error(F(108,Ky(e)||"Unknown",a));return Se({},n,l)}function pr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,Wn=We.current,pe(We,e),pe(tt,tt.current),!0}function Qd(e,t,n){var l=e.stateNode;if(!l)throw Error(F(169));n?(e=ip(e,t,Wn),l.__reactInternalMemoizedMergedChildContext=e,be(tt),be(We),pe(We,e)):be(tt),pe(tt,n)}var Bt=null,Or=!1,Bo=!1;function rp(e){Bt===null?Bt=[e]:Bt.push(e)}function ub(e){Or=!0,rp(e)}function Sn(){if(!Bo&&Bt!==null){Bo=!0;var e=0,t=ue;try{var n=Bt;for(ue=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}Bt=null,Or=!1}catch(a){throw Bt!==null&&(Bt=Bt.slice(e+1)),Nm(bc,Sn),a}finally{ue=t,Bo=!1}}return null}var yl=[],gl=0,fr=null,yr=0,ut=[],mt=0,$n=null,Ot=1,Ft="";function Vn(e,t){yl[gl++]=yr,yl[gl++]=fr,fr=e,yr=t}function op(e,t,n){ut[mt++]=Ot,ut[mt++]=Ft,ut[mt++]=$n,$n=e;var l=Ot;e=Ft;var a=32-St(l)-1;l&=~(1<<a),n+=1;var i=32-St(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,Ot=1<<32-St(t)+a|n<<a|l,Ft=i+e}else Ot=1<<i|n<<a|l,Ft=e}function kc(e){e.return!==null&&(Vn(e,1),op(e,1,0))}function Dc(e){for(;e===fr;)fr=yl[--gl],yl[gl]=null,yr=yl[--gl],yl[gl]=null;for(;e===$n;)$n=ut[--mt],ut[mt]=null,Ft=ut[--mt],ut[mt]=null,Ot=ut[--mt],ut[mt]=null}var ot=null,rt=null,he=!1,Ct=null;function sp(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,rt=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:Ot,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,rt=null,!0):!1;default:return!1}}function Ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function As(e){if(he){var t=rt;if(t){var n=t;if(!Yd(e,t)){if(Ns(e))throw Error(F(418));t=pn(n.nextSibling);var l=ot;t&&Yd(e,t)?sp(l,n):(e.flags=e.flags&-4097|2,he=!1,ot=e)}}else{if(Ns(e))throw Error(F(418));e.flags=e.flags&-4097|2,he=!1,ot=e}}}function Jd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function vi(e){if(e!==ot)return!1;if(!he)return Jd(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ds(e.type,e.memoizedProps)),t&&(t=rt)){if(Ns(e))throw cp(),Error(F(418));for(;t;)sp(e,t),t=pn(t.nextSibling)}if(Jd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=ot?pn(e.stateNode.nextSibling):null;return!0}function cp(){for(var e=rt;e;)e=pn(e.nextSibling)}function Il(){rt=ot=null,he=!1}function Tc(e){Ct===null?Ct=[e]:Ct.push(e)}var mb=Qt.ReactCurrentBatchConfig;function oa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var l=n.stateNode}if(!l)throw Error(F(147,e));var a=l,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(r){var s=a.refs;r===null?delete s[i]:s[i]=r},t._stringRef=i,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function wi(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xd(e){var t=e._init;return t(e._payload)}function dp(e){function t(g,y){if(e){var h=g.deletions;h===null?(g.deletions=[y],g.flags|=16):h.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function l(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function a(g,y){return g=bn(g,y),g.index=0,g.sibling=null,g}function i(g,y,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<y?(g.flags|=2,y):h):(g.flags|=2,y)):(g.flags|=1048576,y)}function r(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,y,h,S){return y===null||y.tag!==6?(y=Ho(h,g.mode,S),y.return=g,y):(y=a(y,h),y.return=g,y)}function c(g,y,h,S){var k=h.type;return k===cl?u(g,y,h.props.children,S,h.key):y!==null&&(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&Xd(k)===y.type)?(S=a(y,h.props),S.ref=oa(g,y,h),S.return=g,S):(S=Ji(h.type,h.key,h.props,null,g.mode,S),S.ref=oa(g,y,h),S.return=g,S)}function d(g,y,h,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==h.containerInfo||y.stateNode.implementation!==h.implementation?(y=zo(h,g.mode,S),y.return=g,y):(y=a(y,h.children||[]),y.return=g,y)}function u(g,y,h,S,k){return y===null||y.tag!==7?(y=Un(h,g.mode,S,k),y.return=g,y):(y=a(y,h),y.return=g,y)}function m(g,y,h){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ho(""+y,g.mode,h),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ui:return h=Ji(y.type,y.key,y.props,null,g.mode,h),h.ref=oa(g,null,y),h.return=g,h;case sl:return y=zo(y,g.mode,h),y.return=g,y;case nn:var S=y._init;return m(g,S(y._payload),h)}if(ya(y)||na(y))return y=Un(y,g.mode,h,null),y.return=g,y;wi(g,y)}return null}function p(g,y,h,S){var k=y!==null?y.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:s(g,y,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ui:return h.key===k?c(g,y,h,S):null;case sl:return h.key===k?d(g,y,h,S):null;case nn:return k=h._init,p(g,y,k(h._payload),S)}if(ya(h)||na(h))return k!==null?null:u(g,y,h,S,null);wi(g,h)}return null}function f(g,y,h,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,s(y,g,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ui:return g=g.get(S.key===null?h:S.key)||null,c(y,g,S,k);case sl:return g=g.get(S.key===null?h:S.key)||null,d(y,g,S,k);case nn:var P=S._init;return f(g,y,h,P(S._payload),k)}if(ya(S)||na(S))return g=g.get(h)||null,u(y,g,S,k,null);wi(y,S)}return null}function v(g,y,h,S){for(var k=null,P=null,w=y,L=y=0,U=null;w!==null&&L<h.length;L++){w.index>L?(U=w,w=null):U=w.sibling;var I=p(g,w,h[L],S);if(I===null){w===null&&(w=U);break}e&&w&&I.alternate===null&&t(g,w),y=i(I,y,L),P===null?k=I:P.sibling=I,P=I,w=U}if(L===h.length)return n(g,w),he&&Vn(g,L),k;if(w===null){for(;L<h.length;L++)w=m(g,h[L],S),w!==null&&(y=i(w,y,L),P===null?k=w:P.sibling=w,P=w);return he&&Vn(g,L),k}for(w=l(g,w);L<h.length;L++)U=f(w,g,L,h[L],S),U!==null&&(e&&U.alternate!==null&&w.delete(U.key===null?L:U.key),y=i(U,y,L),P===null?k=U:P.sibling=U,P=U);return e&&w.forEach(function(M){return t(g,M)}),he&&Vn(g,L),k}function b(g,y,h,S){var k=na(h);if(typeof k!="function")throw Error(F(150));if(h=k.call(h),h==null)throw Error(F(151));for(var P=k=null,w=y,L=y=0,U=null,I=h.next();w!==null&&!I.done;L++,I=h.next()){w.index>L?(U=w,w=null):U=w.sibling;var M=p(g,w,I.value,S);if(M===null){w===null&&(w=U);break}e&&w&&M.alternate===null&&t(g,w),y=i(M,y,L),P===null?k=M:P.sibling=M,P=M,w=U}if(I.done)return n(g,w),he&&Vn(g,L),k;if(w===null){for(;!I.done;L++,I=h.next())I=m(g,I.value,S),I!==null&&(y=i(I,y,L),P===null?k=I:P.sibling=I,P=I);return he&&Vn(g,L),k}for(w=l(g,w);!I.done;L++,I=h.next())I=f(w,g,L,I.value,S),I!==null&&(e&&I.alternate!==null&&w.delete(I.key===null?L:I.key),y=i(I,y,L),P===null?k=I:P.sibling=I,P=I);return e&&w.forEach(function(E){return t(g,E)}),he&&Vn(g,L),k}function _(g,y,h,S){if(typeof h=="object"&&h!==null&&h.type===cl&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ui:e:{for(var k=h.key,P=y;P!==null;){if(P.key===k){if(k=h.type,k===cl){if(P.tag===7){n(g,P.sibling),y=a(P,h.props.children),y.return=g,g=y;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&Xd(k)===P.type){n(g,P.sibling),y=a(P,h.props),y.ref=oa(g,P,h),y.return=g,g=y;break e}n(g,P);break}else t(g,P);P=P.sibling}h.type===cl?(y=Un(h.props.children,g.mode,S,h.key),y.return=g,g=y):(S=Ji(h.type,h.key,h.props,null,g.mode,S),S.ref=oa(g,y,h),S.return=g,g=S)}return r(g);case sl:e:{for(P=h.key;y!==null;){if(y.key===P)if(y.tag===4&&y.stateNode.containerInfo===h.containerInfo&&y.stateNode.implementation===h.implementation){n(g,y.sibling),y=a(y,h.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=zo(h,g.mode,S),y.return=g,g=y}return r(g);case nn:return P=h._init,_(g,y,P(h._payload),S)}if(ya(h))return v(g,y,h,S);if(na(h))return b(g,y,h,S);wi(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,y!==null&&y.tag===6?(n(g,y.sibling),y=a(y,h),y.return=g,g=y):(n(g,y),y=Ho(h,g.mode,S),y.return=g,g=y),r(g)):n(g,y)}return _}var Rl=dp(!0),up=dp(!1),gr=Cn(null),br=null,bl=null,Ec=null;function Pc(){Ec=bl=br=null}function Nc(e){var t=gr.current;be(gr),e._currentValue=t}function Vs(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Tl(e,t){br=e,Ec=bl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},bl===null){if(br===null)throw Error(F(308));bl=e,br.dependencies={lanes:0,firstContext:e}}else bl=bl.next=e;return t}var Gn=null;function Ac(e){Gn===null?Gn=[e]:Gn.push(e)}function mp(e,t,n,l){var a=t.interleaved;return a===null?(n.next=n,Ac(t)):(n.next=a.next,a.next=n),t.interleaved=n,zt(e,l)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function Vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,ce&2){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,zt(e,n)}return a=l.interleaved,a===null?(t.next=t,Ac(l)):(t.next=a.next,a.next=t),l.interleaved=t,zt(e,n)}function $i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,hc(e,n)}}function Zd(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hr(e,t,n,l){var a=e.updateQueue;ln=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,d=c.next;c.next=null,r===null?i=d:r.next=d,r=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==r&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=c))}if(i!==null){var m=a.baseState;r=0,u=d=c=null,s=i;do{var p=s.lane,f=s.eventTime;if((l&p)===p){u!==null&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,b=s;switch(p=t,f=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){m=v.call(f,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,p=typeof v=="function"?v.call(f,m,p):v,p==null)break e;m=Se({},m,p);break e;case 2:ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=f,c=m):u=u.next=f,r|=p;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;p=s,s=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(u===null&&(c=m),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do r|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);zn|=r,e.lanes=r,e.memoizedState=m}}function eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],a=l.callback;if(a!==null){if(l.callback=null,l=n,typeof a!="function")throw Error(F(191,a));a.call(l)}}}var li={},Vt=Cn(li),Ua=Cn(li),Wa=Cn(li);function jn(e){if(e===li)throw Error(F(174));return e}function Ic(e,t){switch(pe(Wa,t),pe(Ua,e),pe(Vt,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ps(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ps(t,e)}be(Vt),pe(Vt,t)}function Ml(){be(Vt),be(Ua),be(Wa)}function fp(e){jn(Wa.current);var t=jn(Vt.current),n=ps(t,e.type);t!==n&&(pe(Ua,e),pe(Vt,n))}function Rc(e){Ua.current===e&&(be(Vt),be(Ua))}var _e=Cn(0);function xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oo=[];function Mc(){for(var e=0;e<Oo.length;e++)Oo[e]._workInProgressVersionPrimary=null;Oo.length=0}var Hi=Qt.ReactCurrentDispatcher,Fo=Qt.ReactCurrentBatchConfig,Hn=0,we=null,Pe=null,Ae=null,_r=!1,ka=!1,$a=0,pb=0;function Be(){throw Error(F(321))}function Gc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function jc(e,t,n,l,a,i){if(Hn=i,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?bb:hb,e=n(l,a),ka){i=0;do{if(ka=!1,$a=0,25<=i)throw Error(F(301));i+=1,Ae=Pe=null,t.updateQueue=null,Hi.current=xb,e=n(l,a)}while(ka)}if(Hi.current=vr,t=Pe!==null&&Pe.next!==null,Hn=0,Ae=Pe=we=null,_r=!1,t)throw Error(F(300));return e}function Bc(){var e=$a!==0;return $a=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?we.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function bt(){if(Pe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Ae===null?we.memoizedState:Ae.next;if(t!==null)Ae=t,Pe=e;else{if(e===null)throw Error(F(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ae===null?we.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Ha(e,t){return typeof t=="function"?t(e):t}function qo(e){var t=bt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var l=Pe,a=l.baseQueue,i=n.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}l.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,l=l.baseState;var s=r=null,c=null,d=i;do{var u=d.lane;if((Hn&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var m={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=m,r=l):c=c.next=m,we.lanes|=u,zn|=u}d=d.next}while(d!==null&&d!==i);c===null?r=l:c.next=s,kt(l,t.memoizedState)||(et=!0),t.memoizedState=l,t.baseState=r,t.baseQueue=c,n.lastRenderedState=l}if(e=n.interleaved,e!==null){a=e;do i=a.lane,we.lanes|=i,zn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Uo(e){var t=bt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);kt(i,t.memoizedState)||(et=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function yp(){}function gp(e,t){var n=we,l=bt(),a=t(),i=!kt(l.memoizedState,a);if(i&&(l.memoizedState=a,et=!0),l=l.queue,Oc(xp.bind(null,n,l,e),[e]),l.getSnapshot!==t||i||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,za(9,hp.bind(null,n,l,a,t),void 0,null),Ve===null)throw Error(F(349));Hn&30||bp(n,t,a)}return a}function bp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hp(e,t,n,l){t.value=n,t.getSnapshot=l,_p(t)&&vp(e)}function xp(e,t,n){return n(function(){_p(t)&&vp(e)})}function _p(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function vp(e){var t=zt(e,1);t!==null&&Lt(t,e,1,-1)}function tu(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:e},t.queue=e,e=e.dispatch=gb.bind(null,we,e),[t.memoizedState,e]}function za(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function wp(){return bt().memoizedState}function zi(e,t,n,l){var a=Pt();we.flags|=e,a.memoizedState=za(1|t,n,void 0,l===void 0?null:l)}function Fr(e,t,n,l){var a=bt();l=l===void 0?null:l;var i=void 0;if(Pe!==null){var r=Pe.memoizedState;if(i=r.destroy,l!==null&&Gc(l,r.deps)){a.memoizedState=za(t,n,i,l);return}}we.flags|=e,a.memoizedState=za(1|t,n,i,l)}function nu(e,t){return zi(8390656,8,e,t)}function Oc(e,t){return Fr(2048,8,e,t)}function Cp(e,t){return Fr(4,2,e,t)}function Sp(e,t){return Fr(4,4,e,t)}function Lp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,Fr(4,4,Lp.bind(null,t,e),n)}function Fc(){}function Dp(e,t){var n=bt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Gc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Tp(e,t){var n=bt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Gc(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function Ep(e,t,n){return Hn&21?(kt(n,t)||(n=Im(),we.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function fb(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var l=Fo.transition;Fo.transition={};try{e(!1),t()}finally{ue=n,Fo.transition=l}}function Pp(){return bt().memoizedState}function yb(e,t,n){var l=gn(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},Np(e))Ap(t,n);else if(n=mp(e,t,n,l),n!==null){var a=Qe();Lt(n,e,l,a),Vp(n,t,l)}}function gb(e,t,n){var l=gn(e),a={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(Np(e))Ap(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,s=i(r,n);if(a.hasEagerState=!0,a.eagerState=s,kt(s,r)){var c=t.interleaved;c===null?(a.next=a,Ac(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=mp(e,t,a,l),n!==null&&(a=Qe(),Lt(n,e,l,a),Vp(n,t,l))}}function Np(e){var t=e.alternate;return e===we||t!==null&&t===we}function Ap(e,t){ka=_r=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vp(e,t,n){if(n&4194240){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,hc(e,n)}}var vr={readContext:gt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},bb={readContext:gt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,Lp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=Pt();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=yb.bind(null,we,e),[l.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:Fc,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=fb.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=we,a=Pt();if(he){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Ve===null)throw Error(F(349));Hn&30||bp(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,nu(xp.bind(null,l,i,e),[e]),l.flags|=2048,za(9,hp.bind(null,l,i,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Ve.identifierPrefix;if(he){var n=Ft,l=Ot;n=(l&~(1<<32-St(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=$a++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hb={readContext:gt,useCallback:Dp,useContext:gt,useEffect:Oc,useImperativeHandle:kp,useInsertionEffect:Cp,useLayoutEffect:Sp,useMemo:Tp,useReducer:qo,useRef:wp,useState:function(){return qo(Ha)},useDebugValue:Fc,useDeferredValue:function(e){var t=bt();return Ep(t,Pe.memoizedState,e)},useTransition:function(){var e=qo(Ha)[0],t=bt().memoizedState;return[e,t]},useMutableSource:yp,useSyncExternalStore:gp,useId:Pp,unstable_isNewReconciler:!1},xb={readContext:gt,useCallback:Dp,useContext:gt,useEffect:Oc,useImperativeHandle:kp,useInsertionEffect:Cp,useLayoutEffect:Sp,useMemo:Tp,useReducer:Uo,useRef:wp,useState:function(){return Uo(Ha)},useDebugValue:Fc,useDeferredValue:function(e){var t=bt();return Pe===null?t.memoizedState=e:Ep(t,Pe.memoizedState,e)},useTransition:function(){var e=Uo(Ha)[0],t=bt().memoizedState;return[e,t]},useMutableSource:yp,useSyncExternalStore:gp,useId:Pp,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Is(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qr={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Qe(),a=gn(e),i=Ut(l,a);i.payload=t,n!=null&&(i.callback=n),t=fn(e,i,a),t!==null&&(Lt(t,e,a,l),$i(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Qe(),a=gn(e),i=Ut(l,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=fn(e,i,a),t!==null&&(Lt(t,e,a,l),$i(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),l=gn(e),a=Ut(n,l);a.tag=2,t!=null&&(a.callback=t),t=fn(e,a,l),t!==null&&(Lt(t,e,l,n),$i(t,e,l))}};function lu(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!Ba(n,l)||!Ba(a,i):!0}function Ip(e,t,n){var l=!1,a=_n,i=t.contextType;return typeof i=="object"&&i!==null?i=gt(i):(a=nt(t)?Wn:We.current,l=t.contextTypes,i=(l=l!=null)?Vl(e,a):_n),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qr,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function au(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&qr.enqueueReplaceState(t,t.state,null)}function Rs(e,t,n,l){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Vc(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=gt(i):(i=nt(t)?Wn:We.current,a.context=Vl(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Is(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&qr.enqueueReplaceState(a,a.state,null),hr(e,n,a,l),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Gl(e,t){try{var n="",l=t;do n+=zy(l),l=l.return;while(l);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _b=typeof WeakMap=="function"?WeakMap:Map;function Rp(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){Cr||(Cr=!0,Hs=l),Ms(e,t)},n}function Mp(e,t,n){n=Ut(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var a=t.value;n.payload=function(){return l(a)},n.callback=function(){Ms(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ms(e,t),typeof l!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function iu(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new _b;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(a.add(n),e=Ib.bind(null,e,t,n),t.then(e,e))}function ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ou(e,t,n,l,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var vb=Qt.ReactCurrentOwner,et=!1;function ze(e,t,n,l){t.child=e===null?up(t,null,n,l):Rl(t,e.child,n,l)}function su(e,t,n,l,a){n=n.render;var i=t.ref;return Tl(t,a),l=jc(e,t,n,l,i,a),n=Bc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Kt(e,t,a)):(he&&n&&kc(t),t.flags|=1,ze(e,t,l,a),t.child)}function cu(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!Qc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Gp(e,t,i,l,a)):(e=Ji(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(r,l)&&e.ref===t.ref)return Kt(e,t,a)}return t.flags|=1,e=bn(i,l),e.ref=t.ref,e.return=t,t.child=e}function Gp(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(Ba(i,l)&&e.ref===t.ref)if(et=!1,t.pendingProps=l=i,(e.lanes&a)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,Kt(e,t,a)}return Gs(e,t,n,l,a)}function jp(e,t,n){var l=t.pendingProps,a=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(xl,at),at|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(xl,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=i!==null?i.baseLanes:n,pe(xl,at),at|=l}else i!==null?(l=i.baseLanes|n,t.memoizedState=null):l=n,pe(xl,at),at|=l;return ze(e,t,a,n),t.child}function Bp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,l,a){var i=nt(n)?Wn:We.current;return i=Vl(t,i),Tl(t,a),n=jc(e,t,n,l,i,a),l=Bc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Kt(e,t,a)):(he&&l&&kc(t),t.flags|=1,ze(e,t,n,a),t.child)}function du(e,t,n,l,a){if(nt(n)){var i=!0;pr(t)}else i=!1;if(Tl(t,a),t.stateNode===null)Ki(e,t),Ip(t,n,l),Rs(t,n,l,a),l=!0;else if(e===null){var r=t.stateNode,s=t.memoizedProps;r.props=s;var c=r.context,d=n.contextType;typeof d=="object"&&d!==null?d=gt(d):(d=nt(n)?Wn:We.current,d=Vl(t,d));var u=n.getDerivedStateFromProps,m=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function";m||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==l||c!==d)&&au(t,r,l,d),ln=!1;var p=t.memoizedState;r.state=p,hr(t,l,r,a),c=t.memoizedState,s!==l||p!==c||tt.current||ln?(typeof u=="function"&&(Is(t,n,u,l),c=t.memoizedState),(s=ln||lu(t,n,s,l,p,c,d))?(m||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=c),r.props=l,r.state=c,r.context=d,l=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,pp(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:vt(t.type,s),r.props=d,m=t.pendingProps,p=r.context,c=n.contextType,typeof c=="object"&&c!==null?c=gt(c):(c=nt(n)?Wn:We.current,c=Vl(t,c));var f=n.getDerivedStateFromProps;(u=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==m||p!==c)&&au(t,r,l,c),ln=!1,p=t.memoizedState,r.state=p,hr(t,l,r,a);var v=t.memoizedState;s!==m||p!==v||tt.current||ln?(typeof f=="function"&&(Is(t,n,f,l),v=t.memoizedState),(d=ln||lu(t,n,d,l,p,v,c)||!1)?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,v,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,v,c)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),r.props=l,r.state=v,r.context=c,l=d):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),l=!1)}return js(e,t,n,l,i,a)}function js(e,t,n,l,a,i){Bp(e,t);var r=(t.flags&128)!==0;if(!l&&!r)return a&&Qd(t,n,!1),Kt(e,t,i);l=t.stateNode,vb.current=t;var s=r&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&r?(t.child=Rl(t,e.child,null,i),t.child=Rl(t,null,s,i)):ze(e,t,s,i),t.memoizedState=l.state,a&&Qd(t,n,!0),t.child}function Op(e){var t=e.stateNode;t.pendingContext?Kd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kd(e,t.context,!1),Ic(e,t.containerInfo)}function uu(e,t,n,l,a){return Il(),Tc(a),t.flags|=256,ze(e,t,n,l),t.child}var Bs={dehydrated:null,treeContext:null,retryLane:0};function Os(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fp(e,t,n){var l=t.pendingProps,a=_e.current,i=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),pe(_e,a&1),e===null)return As(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=l.children,e=l.fallback,i?(l=t.mode,i=t.child,r={mode:"hidden",children:r},!(l&1)&&i!==null?(i.childLanes=0,i.pendingProps=r):i=$r(r,l,0,null),e=Un(e,l,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Os(n),t.memoizedState=Bs,e):qc(t,r));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return wb(e,t,r,l,s,a,n);if(i){i=l.fallback,r=t.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:l.children};return!(r&1)&&t.child!==a?(l=t.child,l.childLanes=0,l.pendingProps=c,t.deletions=null):(l=bn(a,c),l.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=bn(s,i):(i=Un(i,r,n,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,r=e.child.memoizedState,r=r===null?Os(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},i.memoizedState=r,i.childLanes=e.childLanes&~n,t.memoizedState=Bs,l}return i=e.child,e=i.sibling,l=bn(i,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function qc(e,t){return t=$r({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ci(e,t,n,l){return l!==null&&Tc(l),Rl(t,e.child,null,n),e=qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wb(e,t,n,l,a,i,r){if(n)return t.flags&256?(t.flags&=-257,l=Wo(Error(F(422))),Ci(e,t,r,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=l.fallback,a=t.mode,l=$r({mode:"visible",children:l.children},a,0,null),i=Un(i,a,r,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,t.mode&1&&Rl(t,e.child,null,r),t.child.memoizedState=Os(r),t.memoizedState=Bs,i);if(!(t.mode&1))return Ci(e,t,r,null);if(a.data==="$!"){if(l=a.nextSibling&&a.nextSibling.dataset,l)var s=l.dgst;return l=s,i=Error(F(419)),l=Wo(i,l,void 0),Ci(e,t,r,l)}if(s=(r&e.childLanes)!==0,et||s){if(l=Ve,l!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(l.suspendedLanes|r)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,zt(e,a),Lt(l,e,a,-1))}return Kc(),l=Wo(Error(F(421))),Ci(e,t,r,l)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Rb.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,rt=pn(a.nextSibling),ot=t,he=!0,Ct=null,e!==null&&(ut[mt++]=Ot,ut[mt++]=Ft,ut[mt++]=$n,Ot=e.id,Ft=e.overflow,$n=t),t=qc(t,l.children),t.flags|=4096,t)}function mu(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Vs(e.return,t,n)}function $o(e,t,n,l,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=a)}function qp(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;if(ze(e,t,l.children,n),l=_e.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,n,t);else if(e.tag===19)mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(pe(_e,l),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&xr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$o(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&xr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$o(t,!0,n,null,i);break;case"together":$o(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cb(e,t,n){switch(t.tag){case 3:Op(t),Il();break;case 5:fp(t);break;case 1:nt(t.type)&&pr(t);break;case 4:Ic(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,a=t.memoizedProps.value;pe(gr,l._currentValue),l._currentValue=a;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(pe(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?Fp(e,t,n):(pe(_e,_e.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);pe(_e,_e.current&1);break;case 19:if(l=(n&t.childLanes)!==0,e.flags&128){if(l)return qp(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),pe(_e,_e.current),l)break;return null;case 22:case 23:return t.lanes=0,jp(e,t,n)}return Kt(e,t,n)}var Up,Fs,Wp,$p;Up=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fs=function(){};Wp=function(e,t,n,l){var a=e.memoizedProps;if(a!==l){e=t.stateNode,jn(Vt.current);var i=null;switch(n){case"input":a=cs(e,a),l=cs(e,l),i=[];break;case"select":a=Se({},a,{value:void 0}),l=Se({},l,{value:void 0}),i=[];break;case"textarea":a=ms(e,a),l=ms(e,l),i=[];break;default:typeof a.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=ur)}fs(n,l);var r;n=null;for(d in a)if(!l.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var s=a[d];for(r in s)s.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Aa.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in l){var c=l[d];if(s=a!=null?a[d]:void 0,l.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(r in s)!s.hasOwnProperty(r)||c&&c.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in c)c.hasOwnProperty(r)&&s[r]!==c[r]&&(n||(n={}),n[r]=c[r])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ge("scroll",e),i||s===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};$p=function(e,t,n,l){n!==l&&(t.flags|=4)};function sa(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&14680064,l|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Sb(e,t,n){var l=t.pendingProps;switch(Dc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return nt(t.type)&&mr(),Oe(t),null;case 3:return l=t.stateNode,Ml(),be(tt),be(We),Mc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ct!==null&&(Qs(Ct),Ct=null))),Fs(e,t),Oe(t),null;case 5:Rc(t);var a=jn(Wa.current);if(n=t.type,e!==null&&t.stateNode!=null)Wp(e,t,n,l,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(F(166));return Oe(t),null}if(e=jn(Vt.current),vi(t)){l=t.stateNode,n=t.type;var i=t.memoizedProps;switch(l[Nt]=t,l[qa]=i,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",l),ge("close",l);break;case"iframe":case"object":case"embed":ge("load",l);break;case"video":case"audio":for(a=0;a<ba.length;a++)ge(ba[a],l);break;case"source":ge("error",l);break;case"img":case"image":case"link":ge("error",l),ge("load",l);break;case"details":ge("toggle",l);break;case"input":vd(l,i),ge("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!i.multiple},ge("invalid",l);break;case"textarea":Cd(l,i),ge("invalid",l)}fs(n,i),a=null;for(var r in i)if(i.hasOwnProperty(r)){var s=i[r];r==="children"?typeof s=="string"?l.textContent!==s&&(i.suppressHydrationWarning!==!0&&_i(l.textContent,s,e),a=["children",s]):typeof s=="number"&&l.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&_i(l.textContent,s,e),a=["children",""+s]):Aa.hasOwnProperty(r)&&s!=null&&r==="onScroll"&&ge("scroll",l)}switch(n){case"input":mi(l),wd(l,i,!0);break;case"textarea":mi(l),Sd(l);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(l.onclick=ur)}l=a,t.updateQueue=l,l!==null&&(t.flags|=4)}else{r=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=r.createElement(n,{is:l.is}):(e=r.createElement(n),n==="select"&&(r=e,l.multiple?r.multiple=!0:l.size&&(r.size=l.size))):e=r.createElementNS(e,n),e[Nt]=t,e[qa]=l,Up(e,t,!1,!1),t.stateNode=e;e:{switch(r=ys(n,l),n){case"dialog":ge("cancel",e),ge("close",e),a=l;break;case"iframe":case"object":case"embed":ge("load",e),a=l;break;case"video":case"audio":for(a=0;a<ba.length;a++)ge(ba[a],e);a=l;break;case"source":ge("error",e),a=l;break;case"img":case"image":case"link":ge("error",e),ge("load",e),a=l;break;case"details":ge("toggle",e),a=l;break;case"input":vd(e,l),a=cs(e,l),ge("invalid",e);break;case"option":a=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},a=Se({},l,{value:void 0}),ge("invalid",e);break;case"textarea":Cd(e,l),a=ms(e,l),ge("invalid",e);break;default:a=l}fs(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?wm(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_m(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Va(e,c):typeof c=="number"&&Va(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Aa.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ge("scroll",e):c!=null&&mc(e,i,c,r))}switch(n){case"input":mi(e),wd(e,l,!1);break;case"textarea":mi(e),Sd(e);break;case"option":l.value!=null&&e.setAttribute("value",""+xn(l.value));break;case"select":e.multiple=!!l.multiple,i=l.value,i!=null?Sl(e,!!l.multiple,i,!1):l.defaultValue!=null&&Sl(e,!!l.multiple,l.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ur)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)$p(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(F(166));if(n=jn(Wa.current),jn(Vt.current),vi(t)){if(l=t.stateNode,n=t.memoizedProps,l[Nt]=t,(i=l.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:_i(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(l.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[Nt]=t,t.stateNode=l}return Oe(t),null;case 13:if(be(_e),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&rt!==null&&t.mode&1&&!(t.flags&128))cp(),Il(),t.flags|=98560,i=!1;else if(i=vi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(F(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Nt]=t}else Il(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else Ct!==null&&(Qs(Ct),Ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Ne===0&&(Ne=3):Kc())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Ml(),Fs(e,t),e===null&&Oa(t.stateNode.containerInfo),Oe(t),null;case 10:return Nc(t.type._context),Oe(t),null;case 17:return nt(t.type)&&mr(),Oe(t),null;case 19:if(be(_e),i=t.memoizedState,i===null)return Oe(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)sa(i,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=xr(e),r!==null){for(t.flags|=128,sa(i,!1),l=r.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)i=n,e=l,i.flags&=14680066,r=i.alternate,r===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=r.childLanes,i.lanes=r.lanes,i.child=r.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=r.memoizedProps,i.memoizedState=r.memoizedState,i.updateQueue=r.updateQueue,i.type=r.type,e=r.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(_e,_e.current&1|2),t.child}e=e.sibling}i.tail!==null&&De()>jl&&(t.flags|=128,l=!0,sa(i,!1),t.lanes=4194304)}else{if(!l)if(e=xr(r),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!he)return Oe(t),null}else 2*De()-i.renderingStartTime>jl&&n!==1073741824&&(t.flags|=128,l=!0,sa(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(n=i.last,n!==null?n.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=De(),t.sibling=null,n=_e.current,pe(_e,l?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return zc(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?at&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function Lb(e,t){switch(Dc(t),t.tag){case 1:return nt(t.type)&&mr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ml(),be(tt),be(We),Mc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rc(t),null;case 13:if(be(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Il()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(_e),null;case 4:return Ml(),null;case 10:return Nc(t.type._context),null;case 22:case 23:return zc(),null;case 24:return null;default:return null}}var Si=!1,qe=!1,kb=typeof WeakSet=="function"?WeakSet:Set,Q=null;function hl(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){Le(e,t,l)}else n.current=null}function qs(e,t,n){try{n()}catch(l){Le(e,t,l)}}var pu=!1;function Db(e,t){if(Ls=sr,e=Ym(),Lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,s=-1,c=-1,d=0,u=0,m=e,p=null;t:for(;;){for(var f;m!==n||a!==0&&m.nodeType!==3||(s=r+a),m!==i||l!==0&&m.nodeType!==3||(c=r+l),m.nodeType===3&&(r+=m.nodeValue.length),(f=m.firstChild)!==null;)p=m,m=f;for(;;){if(m===e)break t;if(p===n&&++d===a&&(s=r),p===i&&++u===l&&(c=r),(f=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=f}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},sr=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,_=v.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:vt(t.type,b),_);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(S){Le(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return v=pu,pu=!1,v}function Da(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var a=l=l.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&qs(t,n,i)}a=a.next}while(a!==l)}}function Ur(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function Us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hp(e){var t=e.alternate;t!==null&&(e.alternate=null,Hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[qa],delete t[Es],delete t[cb],delete t[db])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zp(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ws(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ur));else if(l!==4&&(e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}function $s(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}var Re=null,wt=!1;function en(e,t,n){for(n=n.child;n!==null;)Kp(e,t,n),n=n.sibling}function Kp(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Rr,n)}catch{}switch(n.tag){case 5:qe||hl(n,t);case 6:var l=Re,a=wt;Re=null,en(e,t,n),Re=l,wt=a,Re!==null&&(wt?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(wt?(e=Re,n=n.stateNode,e.nodeType===8?jo(e.parentNode,n):e.nodeType===1&&jo(e,n),Ga(e)):jo(Re,n.stateNode));break;case 4:l=Re,a=wt,Re=n.stateNode.containerInfo,wt=!0,en(e,t,n),Re=l,wt=a;break;case 0:case 11:case 14:case 15:if(!qe&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){a=l=l.next;do{var i=a,r=i.destroy;i=i.tag,r!==void 0&&(i&2||i&4)&&qs(n,t,r),a=a.next}while(a!==l)}en(e,t,n);break;case 1:if(!qe&&(hl(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(s){Le(n,t,s)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(qe=(l=qe)||n.memoizedState!==null,en(e,t,n),qe=l):en(e,t,n);break;default:en(e,t,n)}}function yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kb),t.forEach(function(l){var a=Mb.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];try{var i=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 5:Re=s.stateNode,wt=!1;break e;case 3:Re=s.stateNode.containerInfo,wt=!0;break e;case 4:Re=s.stateNode.containerInfo,wt=!0;break e}s=s.return}if(Re===null)throw Error(F(160));Kp(i,r,a),Re=null,wt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){Le(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qp(t,e),t=t.sibling}function Qp(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Tt(e),l&4){try{Da(3,e,e.return),Ur(3,e)}catch(b){Le(e,e.return,b)}try{Da(5,e,e.return)}catch(b){Le(e,e.return,b)}}break;case 1:xt(t,e),Tt(e),l&512&&n!==null&&hl(n,n.return);break;case 5:if(xt(t,e),Tt(e),l&512&&n!==null&&hl(n,n.return),e.flags&32){var a=e.stateNode;try{Va(a,"")}catch(b){Le(e,e.return,b)}}if(l&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,r=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&bm(a,i),ys(s,r);var d=ys(s,i);for(r=0;r<c.length;r+=2){var u=c[r],m=c[r+1];u==="style"?wm(a,m):u==="dangerouslySetInnerHTML"?_m(a,m):u==="children"?Va(a,m):mc(a,u,m,d)}switch(s){case"input":ds(a,i);break;case"textarea":hm(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var f=i.value;f!=null?Sl(a,!!i.multiple,f,!1):p!==!!i.multiple&&(i.defaultValue!=null?Sl(a,!!i.multiple,i.defaultValue,!0):Sl(a,!!i.multiple,i.multiple?[]:"",!1))}a[qa]=i}catch(b){Le(e,e.return,b)}}break;case 6:if(xt(t,e),Tt(e),l&4){if(e.stateNode===null)throw Error(F(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(b){Le(e,e.return,b)}}break;case 3:if(xt(t,e),Tt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(b){Le(e,e.return,b)}break;case 4:xt(t,e),Tt(e);break;case 13:xt(t,e),Tt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||($c=De())),l&4&&yu(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(d=qe)||u,xt(t,e),qe=d):xt(t,e),Tt(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(Q=e,u=e.child;u!==null;){for(m=Q=u;Q!==null;){switch(p=Q,f=p.child,p.tag){case 0:case 11:case 14:case 15:Da(4,p,p.return);break;case 1:hl(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){l=p,n=p.return;try{t=l,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){Le(l,n,b)}}break;case 5:hl(p,p.return);break;case 22:if(p.memoizedState!==null){bu(m);continue}}f!==null?(f.return=p,Q=f):bu(m)}u=u.sibling}e:for(u=null,m=e;;){if(m.tag===5){if(u===null){u=m;try{a=m.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,c=m.memoizedProps.style,r=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=vm("display",r))}catch(b){Le(e,e.return,b)}}}else if(m.tag===6){if(u===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(b){Le(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;u===m&&(u=null),m=m.return}u===m&&(u=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:xt(t,e),Tt(e),l&4&&yu(e);break;case 21:break;default:xt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zp(n)){var l=n;break e}n=n.return}throw Error(F(160))}switch(l.tag){case 5:var a=l.stateNode;l.flags&32&&(Va(a,""),l.flags&=-33);var i=fu(e);$s(e,i,a);break;case 3:case 4:var r=l.stateNode.containerInfo,s=fu(e);Ws(e,s,r);break;default:throw Error(F(161))}}catch(c){Le(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tb(e,t,n){Q=e,Yp(e)}function Yp(e,t,n){for(var l=(e.mode&1)!==0;Q!==null;){var a=Q,i=a.child;if(a.tag===22&&l){var r=a.memoizedState!==null||Si;if(!r){var s=a.alternate,c=s!==null&&s.memoizedState!==null||qe;s=Si;var d=qe;if(Si=r,(qe=c)&&!d)for(Q=a;Q!==null;)r=Q,c=r.child,r.tag===22&&r.memoizedState!==null?hu(a):c!==null?(c.return=r,Q=c):hu(a);for(;i!==null;)Q=i,Yp(i),i=i.sibling;Q=a,Si=s,qe=d}gu(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,Q=i):gu(e)}}function gu(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||Ur(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!qe)if(n===null)l.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);l.componentDidUpdate(a,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&eu(t,i,l);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eu(t,r,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var m=u.dehydrated;m!==null&&Ga(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}qe||t.flags&512&&Us(t)}catch(p){Le(t,t.return,p)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function bu(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function hu(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ur(4,t)}catch(c){Le(t,n,c)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var a=t.return;try{l.componentDidMount()}catch(c){Le(t,a,c)}}var i=t.return;try{Us(t)}catch(c){Le(t,i,c)}break;case 5:var r=t.return;try{Us(t)}catch(c){Le(t,r,c)}}}catch(c){Le(t,t.return,c)}if(t===e){Q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Q=s;break}Q=t.return}}var Eb=Math.ceil,wr=Qt.ReactCurrentDispatcher,Uc=Qt.ReactCurrentOwner,ft=Qt.ReactCurrentBatchConfig,ce=0,Ve=null,Te=null,Me=0,at=0,xl=Cn(0),Ne=0,Ka=null,zn=0,Wr=0,Wc=0,Ta=null,Xe=null,$c=0,jl=1/0,jt=null,Cr=!1,Hs=null,yn=null,Li=!1,cn=null,Sr=0,Ea=0,zs=null,Qi=-1,Yi=0;function Qe(){return ce&6?De():Qi!==-1?Qi:Qi=De()}function gn(e){return e.mode&1?ce&2&&Me!==0?Me&-Me:mb.transition!==null?(Yi===0&&(Yi=Im()),Yi):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Fm(e.type)),e):1}function Lt(e,t,n,l){if(50<Ea)throw Ea=0,zs=null,Error(F(185));ei(e,n,l),(!(ce&2)||e!==Ve)&&(e===Ve&&(!(ce&2)&&(Wr|=n),Ne===4&&on(e,Me)),lt(e,l),n===1&&ce===0&&!(t.mode&1)&&(jl=De()+500,Or&&Sn()))}function lt(e,t){var n=e.callbackNode;mg(e,t);var l=or(e,e===Ve?Me:0);if(l===0)n!==null&&Dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&Dd(n),t===1)e.tag===0?ub(xu.bind(null,e)):rp(xu.bind(null,e)),ob(function(){!(ce&6)&&Sn()}),n=null;else{switch(Rm(l)){case 1:n=bc;break;case 4:n=Am;break;case 16:n=rr;break;case 536870912:n=Vm;break;default:n=rr}n=af(n,Jp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jp(e,t){if(Qi=-1,Yi=0,ce&6)throw Error(F(327));var n=e.callbackNode;if(El()&&e.callbackNode!==n)return null;var l=or(e,e===Ve?Me:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=Lr(e,l);else{t=l;var a=ce;ce|=2;var i=Zp();(Ve!==e||Me!==t)&&(jt=null,jl=De()+500,qn(e,t));do try{Ab();break}catch(s){Xp(e,s)}while(!0);Pc(),wr.current=i,ce=a,Te!==null?t=0:(Ve=null,Me=0,t=Ne)}if(t!==0){if(t===2&&(a=_s(e),a!==0&&(l=a,t=Ks(e,a))),t===1)throw n=Ka,qn(e,0),on(e,l),lt(e,De()),n;if(t===6)on(e,l);else{if(a=e.current.alternate,!(l&30)&&!Pb(a)&&(t=Lr(e,l),t===2&&(i=_s(e),i!==0&&(l=i,t=Ks(e,i))),t===1))throw n=Ka,qn(e,0),on(e,l),lt(e,De()),n;switch(e.finishedWork=a,e.finishedLanes=l,t){case 0:case 1:throw Error(F(345));case 2:In(e,Xe,jt);break;case 3:if(on(e,l),(l&130023424)===l&&(t=$c+500-De(),10<t)){if(or(e,0)!==0)break;if(a=e.suspendedLanes,(a&l)!==l){Qe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ts(In.bind(null,e,Xe,jt),t);break}In(e,Xe,jt);break;case 4:if(on(e,l),(l&4194240)===l)break;for(t=e.eventTimes,a=-1;0<l;){var r=31-St(l);i=1<<r,r=t[r],r>a&&(a=r),l&=~i}if(l=a,l=De()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Eb(l/1960))-l,10<l){e.timeoutHandle=Ts(In.bind(null,e,Xe,jt),l);break}In(e,Xe,jt);break;case 5:In(e,Xe,jt);break;default:throw Error(F(329))}}}return lt(e,De()),e.callbackNode===n?Jp.bind(null,e):null}function Ks(e,t){var n=Ta;return e.current.memoizedState.isDehydrated&&(qn(e,t).flags|=256),e=Lr(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&Qs(t)),e}function Qs(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Pb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!kt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~Wc,t&=~Wr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-St(t),l=1<<n;e[n]=-1,t&=~l}}function xu(e){if(ce&6)throw Error(F(327));El();var t=or(e,0);if(!(t&1))return lt(e,De()),null;var n=Lr(e,t);if(e.tag!==0&&n===2){var l=_s(e);l!==0&&(t=l,n=Ks(e,l))}if(n===1)throw n=Ka,qn(e,0),on(e,t),lt(e,De()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,In(e,Xe,jt),lt(e,De()),null}function Hc(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(jl=De()+500,Or&&Sn())}}function Kn(e){cn!==null&&cn.tag===0&&!(ce&6)&&El();var t=ce;ce|=1;var n=ft.transition,l=ue;try{if(ft.transition=null,ue=1,e)return e()}finally{ue=l,ft.transition=n,ce=t,!(ce&6)&&Sn()}}function zc(){at=xl.current,be(xl)}function qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rb(n)),Te!==null)for(n=Te.return;n!==null;){var l=n;switch(Dc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&mr();break;case 3:Ml(),be(tt),be(We),Mc();break;case 5:Rc(l);break;case 4:Ml();break;case 13:be(_e);break;case 19:be(_e);break;case 10:Nc(l.type._context);break;case 22:case 23:zc()}n=n.return}if(Ve=e,Te=e=bn(e.current,null),Me=at=t,Ne=0,Ka=null,Wc=Wr=zn=0,Xe=Ta=null,Gn!==null){for(t=0;t<Gn.length;t++)if(n=Gn[t],l=n.interleaved,l!==null){n.interleaved=null;var a=l.next,i=n.pending;if(i!==null){var r=i.next;i.next=a,l.next=r}n.pending=l}Gn=null}return e}function Xp(e,t){do{var n=Te;try{if(Pc(),Hi.current=vr,_r){for(var l=we.memoizedState;l!==null;){var a=l.queue;a!==null&&(a.pending=null),l=l.next}_r=!1}if(Hn=0,Ae=Pe=we=null,ka=!1,$a=0,Uc.current=null,n===null||n.return===null){Ne=1,Ka=t,Te=null;break}e:{var i=e,r=n.return,s=n,c=t;if(t=Me,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=s,m=u.tag;if(!(u.mode&1)&&(m===0||m===11||m===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=ru(r);if(f!==null){f.flags&=-257,ou(f,r,s,i,t),f.mode&1&&iu(i,d,t),t=f,c=d;var v=t.updateQueue;if(v===null){var b=new Set;b.add(c),t.updateQueue=b}else v.add(c);break e}else{if(!(t&1)){iu(i,d,t),Kc();break e}c=Error(F(426))}}else if(he&&s.mode&1){var _=ru(r);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ou(_,r,s,i,t),Tc(Gl(c,s));break e}}i=c=Gl(c,s),Ne!==4&&(Ne=2),Ta===null?Ta=[i]:Ta.push(i),i=r;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Rp(i,c,t);Zd(i,g);break e;case 1:s=c;var y=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yn===null||!yn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Mp(i,s,t);Zd(i,S);break e}}i=i.return}while(i!==null)}tf(n)}catch(k){t=k,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Zp(){var e=wr.current;return wr.current=vr,e===null?vr:e}function Kc(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ve===null||!(zn&268435455)&&!(Wr&268435455)||on(Ve,Me)}function Lr(e,t){var n=ce;ce|=2;var l=Zp();(Ve!==e||Me!==t)&&(jt=null,qn(e,t));do try{Nb();break}catch(a){Xp(e,a)}while(!0);if(Pc(),ce=n,wr.current=l,Te!==null)throw Error(F(261));return Ve=null,Me=0,Ne}function Nb(){for(;Te!==null;)ef(Te)}function Ab(){for(;Te!==null&&!lg();)ef(Te)}function ef(e){var t=lf(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?tf(e):Te=t,Uc.current=null}function tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lb(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Te=null;return}}else if(n=Sb(n,t,at),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ne===0&&(Ne=5)}function In(e,t,n){var l=ue,a=ft.transition;try{ft.transition=null,ue=1,Vb(e,t,n,l)}finally{ft.transition=a,ue=l}return null}function Vb(e,t,n,l){do El();while(cn!==null);if(ce&6)throw Error(F(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(pg(e,i),e===Ve&&(Te=Ve=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,af(rr,function(){return El(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ft.transition,ft.transition=null;var r=ue;ue=1;var s=ce;ce|=4,Uc.current=null,Db(e,n),Qp(n,e),Zg(ks),sr=!!Ls,ks=Ls=null,e.current=n,Tb(n),ag(),ce=s,ue=r,ft.transition=i}else e.current=n;if(Li&&(Li=!1,cn=e,Sr=a),i=e.pendingLanes,i===0&&(yn=null),og(n.stateNode),lt(e,De()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],l(a.value,{componentStack:a.stack,digest:a.digest});if(Cr)throw Cr=!1,e=Hs,Hs=null,e;return Sr&1&&e.tag!==0&&El(),i=e.pendingLanes,i&1?e===zs?Ea++:(Ea=0,zs=e):Ea=0,Sn(),null}function El(){if(cn!==null){var e=Rm(Sr),t=ft.transition,n=ue;try{if(ft.transition=null,ue=16>e?16:e,cn===null)var l=!1;else{if(e=cn,cn=null,Sr=0,ce&6)throw Error(F(331));var a=ce;for(ce|=4,Q=e.current;Q!==null;){var i=Q,r=i.child;if(Q.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(Q=d;Q!==null;){var u=Q;switch(u.tag){case 0:case 11:case 15:Da(8,u,i)}var m=u.child;if(m!==null)m.return=u,Q=m;else for(;Q!==null;){u=Q;var p=u.sibling,f=u.return;if(Hp(u),u===d){Q=null;break}if(p!==null){p.return=f,Q=p;break}Q=f}}}var v=i.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}Q=i}}if(i.subtreeFlags&2064&&r!==null)r.return=i,Q=r;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Da(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,Q=g;break e}Q=i.return}}var y=e.current;for(Q=y;Q!==null;){r=Q;var h=r.child;if(r.subtreeFlags&2064&&h!==null)h.return=r,Q=h;else e:for(r=y;Q!==null;){if(s=Q,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ur(9,s)}}catch(k){Le(s,s.return,k)}if(s===r){Q=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,Q=S;break e}Q=s.return}}if(ce=a,Sn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Rr,e)}catch{}l=!0}return l}finally{ue=n,ft.transition=t}}return!1}function _u(e,t,n){t=Gl(n,t),t=Rp(e,t,1),e=fn(e,t,1),t=Qe(),e!==null&&(ei(e,1,t),lt(e,t))}function Le(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yn===null||!yn.has(l))){e=Gl(n,e),e=Mp(t,e,1),t=fn(t,e,1),e=Qe(),t!==null&&(ei(t,1,e),lt(t,e));break}}t=t.return}}function Ib(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Me&n)===n&&(Ne===4||Ne===3&&(Me&130023424)===Me&&500>De()-$c?qn(e,0):Wc|=n),lt(e,t)}function nf(e,t){t===0&&(e.mode&1?(t=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):t=1);var n=Qe();e=zt(e,t),e!==null&&(ei(e,t,n),lt(e,n))}function Rb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nf(e,n)}function Mb(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(F(314))}l!==null&&l.delete(t),nf(e,n)}var lf;lf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,Cb(e,t,n);et=!!(e.flags&131072)}else et=!1,he&&t.flags&1048576&&op(t,yr,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Ki(e,t),e=t.pendingProps;var a=Vl(t,We.current);Tl(t,n),a=jc(null,t,l,e,a,n);var i=Bc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(l)?(i=!0,pr(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Vc(t),a.updater=qr,t.stateNode=a,a._reactInternals=t,Rs(t,l,e,n),t=js(null,t,l,!0,i,n)):(t.tag=0,he&&i&&kc(t),ze(null,t,a,n),t=t.child),t;case 16:l=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,a=l._init,l=a(l._payload),t.type=l,a=t.tag=jb(l),e=vt(l,e),a){case 0:t=Gs(null,t,l,e,n);break e;case 1:t=du(null,t,l,e,n);break e;case 11:t=su(null,t,l,e,n);break e;case 14:t=cu(null,t,l,vt(l.type,e),n);break e}throw Error(F(306,l,""))}return t;case 0:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:vt(l,a),Gs(e,t,l,a,n);case 1:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:vt(l,a),du(e,t,l,a,n);case 3:e:{if(Op(t),e===null)throw Error(F(387));l=t.pendingProps,i=t.memoizedState,a=i.element,pp(e,t),hr(t,l,null,n);var r=t.memoizedState;if(l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Gl(Error(F(423)),t),t=uu(e,t,l,n,a);break e}else if(l!==a){a=Gl(Error(F(424)),t),t=uu(e,t,l,n,a);break e}else for(rt=pn(t.stateNode.containerInfo.firstChild),ot=t,he=!0,Ct=null,n=up(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Il(),l===a){t=Kt(e,t,n);break e}ze(e,t,l,n)}t=t.child}return t;case 5:return fp(t),e===null&&As(t),l=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,r=a.children,Ds(l,a)?r=null:i!==null&&Ds(l,i)&&(t.flags|=32),Bp(e,t),ze(e,t,r,n),t.child;case 6:return e===null&&As(t),null;case 13:return Fp(e,t,n);case 4:return Ic(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Rl(t,null,l,n):ze(e,t,l,n),t.child;case 11:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:vt(l,a),su(e,t,l,a,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,a=t.pendingProps,i=t.memoizedProps,r=a.value,pe(gr,l._currentValue),l._currentValue=r,i!==null)if(kt(i.value,r)){if(i.children===a.children&&!tt.current){t=Kt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){r=i.child;for(var c=s.firstContext;c!==null;){if(c.context===l){if(i.tag===1){c=Ut(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Vs(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)r=i.type===t.type?null:i.child;else if(i.tag===18){if(r=i.return,r===null)throw Error(F(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Vs(r,n,t),r=i.sibling}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}ze(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,l=t.pendingProps.children,Tl(t,n),a=gt(a),l=l(a),t.flags|=1,ze(e,t,l,n),t.child;case 14:return l=t.type,a=vt(l,t.pendingProps),a=vt(l.type,a),cu(e,t,l,a,n);case 15:return Gp(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:vt(l,a),Ki(e,t),t.tag=1,nt(l)?(e=!0,pr(t)):e=!1,Tl(t,n),Ip(t,l,a),Rs(t,l,a,n),js(null,t,l,!0,e,n);case 19:return qp(e,t,n);case 22:return jp(e,t,n)}throw Error(F(156,t.tag))};function af(e,t){return Nm(e,t)}function Gb(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,l){return new Gb(e,t,n,l)}function Qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jb(e){if(typeof e=="function")return Qc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fc)return 11;if(e===yc)return 14}return 2}function bn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ji(e,t,n,l,a,i){var r=2;if(l=e,typeof e=="function")Qc(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case cl:return Un(n.children,a,i,t);case pc:r=8,a|=8;break;case is:return e=pt(12,n,t,a|2),e.elementType=is,e.lanes=i,e;case rs:return e=pt(13,n,t,a),e.elementType=rs,e.lanes=i,e;case os:return e=pt(19,n,t,a),e.elementType=os,e.lanes=i,e;case fm:return $r(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mm:r=10;break e;case pm:r=9;break e;case fc:r=11;break e;case yc:r=14;break e;case nn:r=16,l=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=pt(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function Un(e,t,n,l){return e=pt(7,e,l,t),e.lanes=n,e}function $r(e,t,n,l){return e=pt(22,e,l,t),e.elementType=fm,e.lanes=n,e.stateNode={isHidden:!1},e}function Ho(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function zo(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bb(e,t,n,l,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=l,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Yc(e,t,n,l,a,i,r,s,c){return e=new Bb(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=pt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(i),e}function Ob(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sl,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function rf(e){if(!e)return _n;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(nt(n))return ip(e,n,t)}return t}function of(e,t,n,l,a,i,r,s,c){return e=Yc(n,l,!0,e,a,i,r,s,c),e.context=rf(null),n=e.current,l=Qe(),a=gn(n),i=Ut(l,a),i.callback=t??null,fn(n,i,a),e.current.lanes=a,ei(e,a,l),lt(e,l),e}function Hr(e,t,n,l){var a=t.current,i=Qe(),r=gn(a);return n=rf(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(i,r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=fn(a,t,r),e!==null&&(Lt(e,a,r,i),$i(e,a,r)),r}function kr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jc(e,t){vu(e,t),(e=e.alternate)&&vu(e,t)}function Fb(){return null}var sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}zr.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Hr(e,t,null,null)};zr.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){Hr(null,e,null,null)}),t[Ht]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=jm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Om(e)}};function Zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function qb(e,t,n,l,a){if(a){if(typeof l=="function"){var i=l;l=function(){var d=kr(r);i.call(d)}}var r=of(t,l,e,0,null,!1,!1,"",wu);return e._reactRootContainer=r,e[Ht]=r.current,Oa(e.nodeType===8?e.parentNode:e),Kn(),r}for(;a=e.lastChild;)e.removeChild(a);if(typeof l=="function"){var s=l;l=function(){var d=kr(c);s.call(d)}}var c=Yc(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=c,e[Ht]=c.current,Oa(e.nodeType===8?e.parentNode:e),Kn(function(){Hr(t,c,n,l)}),c}function Qr(e,t,n,l,a){var i=n._reactRootContainer;if(i){var r=i;if(typeof a=="function"){var s=a;a=function(){var c=kr(r);s.call(c)}}Hr(t,r,e,a)}else r=qb(n,t,e,a,l);return kr(r)}Mm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ga(t.pendingLanes);n!==0&&(hc(t,n|1),lt(t,De()),!(ce&6)&&(jl=De()+500,Sn()))}break;case 13:Kn(function(){var l=zt(e,1);if(l!==null){var a=Qe();Lt(l,e,1,a)}}),Jc(e,1)}};xc=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Qe();Lt(t,e,134217728,n)}Jc(e,134217728)}};Gm=function(e){if(e.tag===13){var t=gn(e),n=zt(e,t);if(n!==null){var l=Qe();Lt(n,e,t,l)}Jc(e,t)}};jm=function(){return ue};Bm=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};bs=function(e,t,n){switch(t){case"input":if(ds(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=Br(l);if(!a)throw Error(F(90));gm(l),ds(l,a)}}}break;case"textarea":hm(e,n);break;case"select":t=n.value,t!=null&&Sl(e,!!n.multiple,t,!1)}};Lm=Hc;km=Kn;var Ub={usingClientEntryPoint:!1,Events:[ni,pl,Br,Cm,Sm,Hc]},ca={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wb={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Em(e),e===null?null:e.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Fb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{Rr=ki.inject(Wb),At=ki}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ub;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zc(t))throw Error(F(200));return Ob(e,t,null,n)};ct.createRoot=function(e,t){if(!Zc(e))throw Error(F(299));var n=!1,l="",a=sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Yc(e,1,!1,null,null,n,!1,l,a),e[Ht]=t.current,Oa(e.nodeType===8?e.parentNode:e),new Xc(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Em(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Kn(e)};ct.hydrate=function(e,t,n){if(!Kr(t))throw Error(F(200));return Qr(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!Zc(e))throw Error(F(405));var l=n!=null&&n.hydratedSources||null,a=!1,i="",r=sf;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=of(t,null,e,1,n??null,a,!1,i,r),e[Ht]=t.current,Oa(e),l)for(e=0;e<l.length;e++)n=l[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new zr(t)};ct.render=function(e,t,n){if(!Kr(t))throw Error(F(200));return Qr(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Kr(e))throw Error(F(40));return e._reactRootContainer?(Kn(function(){Qr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};ct.unstable_batchedUpdates=Hc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!Kr(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Qr(e,t,n,!1,l)};ct.version="18.3.1-next-f1338f8080-20240426";function cf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cf)}catch(e){console.error(e)}}cf(),sm.exports=ct;var $b=sm.exports,Cu=$b;ls.createRoot=Cu.createRoot,ls.hydrateRoot=Cu.hydrateRoot;const Di=[{id:"envy-04237218B0",label:"⭐ Envy - 04237218B0",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237218B0"},modbusSlaveId:1},{id:"envy-04237219C3",label:"Envy - 04237219C3",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237219C3"},modbusSlaveId:2}],Hb=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Dry Contact Reuse",help:"Selects how the inverter's dry contact relay is reused. It can be configured for various control functions such as grid export limitation, smart load control, or dark start.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Dry Contact Reuse",arg:"DryContactReuse",dtype:"enum",description:"",longdescription:"",meanings:{0:"None",1:"Rapid Shutdown (RSD)",2:"Black Start",3:"Smart Load",4:"Non-critical Load"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.DryContactReuse"}]}],section_id:"inverter.basic"},{sectionTitle:"Current Transformer (CT) Settings",subsections:[{title:null,visibility:"advanced",collapsedByDefault:!0,points:[{title:"Meter Measurement Source",help:"The inverter can either read CTs directly, or read a stand-alone electric meter.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Meter Type",arg:"MeterType",dtype:"enum",description:"",longdescription:"",meanings:{0:"Meter",1:"CTs"}}],protocol:{modbus:{address:1,register_type:3,size:1}},command_id:"Modbus.MeterType"}],subsection_id:"measurement-advanced"}],section_id:"inverter.measurement"},{sectionTitle:"PV",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"PV Sell to Grid",help:"You may disable solar power export to the utility grid. This setting supports NEM3 compatibility.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"PV Sell to Grid",arg:"PVSellToGrid",dtype:"bitfield16",description:"",longdescription:"",meanings:{7:"Enable export of PV power to the grid"}}],protocol:{modbus:{address:3,register_type:3,size:1}},command_id:"Modbus.PVSellToGrid"}]}]}],theme_id:"inverter"},{themeName:"Battery",sections:[{sectionTitle:"Battery Scheduling",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Discharge only Control Style",help:"Selects how 'discharge only' is controlled. 'Discharge only' can stop when a voltage limit is reached or when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"DischargeOnlyControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{4:"Enable SOC control (disable for voltage control)"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.DischargeOnlyControlStyle"},{title:"Discharge only Stop Voltage",help:"Sets the battery voltage at which discharge only will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Discharge only Stop Voltage",arg:"DischargeOnlyStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:202,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischargeOnlyStopVoltage"}]}]},{sectionTitle:"Grid Charge",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Grid Charge Control Style",help:"Selects how grid charging is controlled. Charging can follow a time schedule, stop when a voltage limit is reached, or stop when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"GridChargeControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{1:"Charge based on time",2:"Stop charging at voltage limit",3:"Stop charging at SOC limit"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.GridChargeControlStyle"},{title:"Grid Charging Start Voltage",help:"Sets the battery voltage at which grid charging will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Start Voltage",arg:"GridChargingStartVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:158,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStartVoltage"},{title:"Grid Charging Stop Voltage",help:"Sets the maximum battery voltage during grid charging. Once this voltage is reached, the inverter will stop charging from the grid to protect the battery and prevent overvoltage.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Stop Voltage",arg:"GridChargingStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:159,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStopVoltage"}]}]},{sectionTitle:"Battery Base",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Max Charge Current",help:"Instead of using the presets, you may set the charge current directly in amps.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Charge Current (A)",arg:"ChargeCurr",dtype:"Number",description:"",longdescription:"",unit:"A",range:{min:0}}],protocol:{modbus:{address:101,register_type:3,size:1}},command_id:"Modbus.ChargeCurr"},{title:"Battery Voltage Correction",help:"Recalibrate the battery voltage reading.  Enter the actual ground-truth voltage of the battery here.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Battery Voltage Correction",arg:"BatteryVoltageCorrection",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:999,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischgCurr"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Generator Charge Mode",help:"Selects how the generator charges the battery. When enabled, the generator will charge the battery automatically based on voltage or SOC.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Mode",arg:"GenChg",dtype:"enum",description:"",longdescription:"",meanings:{0:"Based on SOC",1:"Based on Voltage"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.GenChg"},{title:"Generator Charge Start Voltage",help:"Sets the battery voltage at which the generator begins charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Start Voltage",arg:"GenChgStartVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:194,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgStartVolt"},{title:"Generator Charge End Voltage",help:"Sets the battery voltage at which the generator stops charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge End Voltage",arg:"GenChgEndVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:195,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgEndVolt"}]}]}]}],zb={themes:Hb},Kb=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"System Time",help:"Date and time the inverter will use to run schedules",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Year",arg:"Year",dtype:"Number",description:"",longdescription:"",range:{min:0,max:99},telemetry:{model:"40104",block:"fixed",point:"Year"}},{name:"Mon",arg:"Mon",dtype:"Number",description:"",longdescription:"",range:{min:1,max:12},telemetry:{model:"40104",block:"fixed",point:"Month"}},{name:"Day",arg:"Day",dtype:"Number",description:"",longdescription:"",range:{min:1,max:31},telemetry:{model:"40104",block:"fixed",point:"Day"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"Hour"}},{name:"Min",arg:"Min",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Minute"}},{name:"Sec",arg:"Sec",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Second"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"SystemTime"}},command_id:"Basic.SystemTime",widget:"datetime"},{title:"Grid Interaction",help:"Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Off-grid",1:"Grid-tied"},friendly_meanings:{0:"Off-Grid.  There is no available power grid",1:"Grid-Tied. Grid power is available."},telemetry:{model:"40104",block:"fixed",point:"OperatingMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"OperatingMode"}},command_id:"Basic.OperatingMode"},{title:"Operating Mode",help:"Select how solar power is prioritized. Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed). Export first: PV powers the home, then exports to grid, and charges the battery last. Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed). If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Self used mode",1:"Feed-in priority mode",2:"Back-up mode"},friendly_meanings:{0:"Self-consumption",1:"Export first",2:"Backup power"},telemetry:{model:"40104",block:"fixed",point:"WorkMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"WorkMode"}},command_id:"Basic.WorkMode"},{title:"Ignore Grid-Loss Warning",help:"When enabled, the inverter will not treat the absence of grid power as an alarm. Use this mode for permanently off-grid systems where grid connection is unavailable.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid-Loss Behavior",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Treat as Alarm",1:"Ignore (Off-Grid Mode)"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"GridLossWarningClear"}},command_id:"Basic.GridLossWarningClear"},{title:"Power Status",help:"Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"Other"},friendly_meanings:{0:"Standby",1:"Running"},telemetry:{model:"40104",block:"fixed",point:"PowerControl"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerStatus"}},command_id:"Basic.PowerStatus"},{title:"Reset to Factory Defaults",help:"Restores all inverter configuration parameters to their original factory values. Use with caution â€” this cannot be undone.",element_type:"service",access:"INVOKE",readOnly:!1,entries:[],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"AllToDefault"}},command_id:"Basic.AllToDefault",invokeButtonText:"Reset Now"},{title:"Inverter Power Control",help:`Turns the inverter output on or off.\r
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
`,element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Voltage Ride-Through Windows",arg:"VoltageRideThrough",dtype:"String",description:"Derived from Grid Protection voltage limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Frequency Ride-Through Windows",arg:"FrequencyRideThrough",dtype:"String",description:"Derived from Grid Protection frequency limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Volt-VAR Profile",arg:"VoltVarProfile",dtype:"String",description:"Captures the active Volt-VAR curve (e.g., UL 1741 SA default profile).",longdescription:""},{name:"Freq-Watt Profile",arg:"FreqWattProfile",dtype:"String",description:"Captures the active droop coefficients applied to frequency-active power response.",longdescription:""}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Reports",Element:"ULComplianceReport"}},command_id:"CGI.ULComplianceReport",widget:"ul-compliance-report",showInvokeButton:!1,showHistory:!1,showRefresh:!1,showSetButton:!1}]}]},{sectionTitle:"Grid Protection",subsections:[{title:"Grid Protection Parameters",visibility:"default",collapsedByDefault:!0,points:[{title:"Grid Voltage Limits (Stage 1)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1"}},command_id:"GridProtection.GridVoltLimit1"},{title:"Grid Voltage Limits (Stage 2)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2"}},command_id:"GridProtection.GridVoltLimit2"},{title:"Grid Voltage Limits (Stage 3)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3"}},command_id:"GridProtection.GridVoltLimit3"},{title:"Grid Frequency Limits (Stage 1)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1"}},command_id:"GridProtection.GridFreqLimit1"},{title:"Grid Frequency Limits (Stage 2)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2"}},command_id:"GridProtection.GridFreqLimit2"},{title:"Grid Frequency Limits (Stage 3)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3"}},command_id:"GridProtection.GridFreqLimit3"},{title:"Grid Voltage Trip Time",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1Time"}},command_id:"GridProtection.GridVoltLimit1Time"},{title:"Grid Voltage Trip Time (Stage 2)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2Time"}},command_id:"GridProtection.GridVoltLimit2Time"},{title:"Grid Voltage Trip Time (Stage 3)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3Time"}},command_id:"GridProtection.GridVoltLimit3Time"},{title:"Grid Frequency Trip Time (Stage 1)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1Time"}},command_id:"GridProtection.GridFreqLimit1Time"},{title:"Grid Frequency Trip Time (Stage 2)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2Time"}},command_id:"GridProtection.GridFreqLimit2Time"},{title:"Grid Frequency Trip Time (Stage 3)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3Time"}},command_id:"GridProtection.GridFreqLimit3Time"}]}]},{sectionTitle:"Grid Connection",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Permit to Operate",help:"Shows whether the inverter is permitted to operate in grid-connected mode.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Permit Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not Permitted",1:"Permitted"},telemetry:{model:"40104",block:"fixed",point:"PermitServiceStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"PermitServiceStatus"}},command_id:"GridConnection.PermitServiceStatus"},{title:"Ramp Rate",help:"How quickly inverter output is allowed to increase.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Ramp Rate (%/sec)",arg:"Rate",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"RampRate"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"RampRate"}},command_id:"GridConnection.RampRate"},{title:"Applicable Grid Voltage Range",help:"Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Vac)",arg:"ApplicableVoltageLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageLow"}},{name:"Upper Limit (Vac)",arg:"ApplicableVoltageHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableVoltage"}},command_id:"GridConnection.ApplicableVoltage"},{title:"Applicable Grid Frequency Range",help:"Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Hz)",arg:"ApplicableFrequencyLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyLow"}},{name:"Upper Limit (Hz)",arg:"ApplicableFrequencyHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableFrequency"}},command_id:"GridConnection.ApplicableFrequency"},{title:"Connection Delay Times",help:"Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Connection Delay (s)",arg:"ConnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConnectionDelayTime"}},{name:"Reconnection Delay (s)",arg:"ReconnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReconnectionDelayTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"DelayTime"}},command_id:"GridConnection.DelayTime"}]}]},{sectionTitle:"Grid Support",subsections:[{title:"Constant Power Factor",visibility:"default",collapsedByDefault:!0,points:[{title:"Power Factor Mode",help:"Shows whether constant power-factor control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive â€” No PF control",1:"Active â€” Constant PF"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactorModeStatus"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactorModeStatus"},{title:"Power Factor Setpoint",help:"The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorExcited"}},{name:"Power Factor (PF)",arg:"PowerFactor",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactor"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactor"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactor"}]},{title:"Constant Reactive Power",visibility:"default",collapsedByDefault:!0,points:[{title:"Reactive Power Mode",help:"Shows whether constant reactive-power control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeExcited"}},{name:"Status",arg:"Status",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no reactive power control",1:"Active - reactive power control"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ConstantReactivePowerModeStatus"}},command_id:"ConstantReactivePowerMode.ConstantReactivePowerModeStatus"},{title:"Reactive Power Setpoint",help:"Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Reactive Power (%)",arg:"Power",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReactivePowerPercentCMD"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ReactivePowerPercentCMD"}},command_id:"ConstantReactivePowerMode.ReactivePowerPercentCMD"}]},{title:"Volt-VAR (Voltage-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-VAR Mode",help:"Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-VAR control",1:"Active - Volt-VAR control"},telemetry:{model:"40104",block:"fixed",point:"VoltageReactivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VoltageReactivePowerMode"}},command_id:"VoltageReactivePowerMode.VoltageReactivePowerMode"},{title:"Autonomous Vref Adjustment",help:"Indicates whether the inverter autonomously adjusts its reference voltage (Vref).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Autonomous Adjustment",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"AutonomousVrefAdjustment"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"AutonomousVrefAdjustment"}},command_id:"VoltageReactivePowerMode.AutonomousVrefAdjustment"},{title:"Reference Voltage (Vref)",help:"Voltage reference used for Volt-VAR calculations.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Vref",arg:"Verf",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Verf"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Verf"}},command_id:"VoltageReactivePowerMode.Verf"},{title:"Vref Adjustment Time Constant",help:"Time constant applied when adjusting Vref.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Time Constant",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VrefAdjustmentTimeConstant"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VrefAdjustmentTimeConstant"}},command_id:"VoltageReactivePowerMode.VrefAdjustmentTimeConstant"},{title:"Volt-VAR Voltage Breakpoints",help:"Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"V1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV1"}},{name:"V2 (Voltage Point 2)",arg:"V2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV2"}},{name:"V3 (Voltage Point 3)",arg:"V3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV3"}},{name:"V4 (Voltage Point 4)",arg:"V4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"UnderOverVoltage"}},command_id:"VoltageReactivePowerMode.UnderOverVoltage"},{title:"Reactive Power Setpoint Q1",help:"Reactive power at voltage point V1 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q1 (Reactive Setpoint 1)",arg:"Q1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q1"}},command_id:"VoltageReactivePowerMode.Q1"},{title:"Reactive Power Setpoint Q2",help:"Reactive power at voltage point V2 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q2 (Reactive Setpoint 2)",arg:"Q2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q2"}},command_id:"VoltageReactivePowerMode.Q2"},{title:"Reactive Power Setpoint Q3",help:"Reactive power at voltage point V3 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q3 (Reactive Setpoint 3)",arg:"Q3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q3"}},command_id:"VoltageReactivePowerMode.Q3"},{title:"Reactive Power Setpoint Q4",help:"Reactive power at voltage point V4 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q4 (Reactive Setpoint 4)",arg:"Q4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q4"}},command_id:"VoltageReactivePowerMode.Q4"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-VAR changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VqOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageReactivePowerMode.OpenLoopResponseTime"}]},{title:"P-Q Mode (Active-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"P-Q Mode Status",help:"Shows whether Active/Reactive Power (P-Q) control mode is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no P-Q control",1:"Active - P-Q control"},telemetry:{model:"40104",block:"fixed",point:"PQModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"PQModeStatus"}},command_id:"ActivePowerReactivePowerMode.PQModeStatus"},{title:"P-Q Curve Points",help:"Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P1 Setpoint",arg:"P1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP1"}},{name:"P2 Setpoint",arg:"P2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP2"}},{name:"P3 Setpoint",arg:"P3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"P_QP"}},command_id:"ActivePowerReactivePowerMode.P_QP"}]},{title:"Volt-Watt (Voltage-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-Watt Mode",help:"Shows whether Volt-Watt (voltage-active power) control is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-Watt control",1:"Active - Volt-Watt control"},telemetry:{model:"40104",block:"fixed",point:"VoltageActivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltageActivePowerMode"}},command_id:"VoltageActivePowerMode.VoltageActivePowerMode"},{title:"Volt-Watt Voltage Breakpoints",help:"Voltage points that define the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"VoltWattV1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV1"}},{name:"V2 (Voltage Point 2)",arg:"VoltWattV2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattV"}},command_id:"VoltageActivePowerMode.VoltWattV"},{title:"Volt-Watt Power Setpoint",help:"Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P2 Setpoint",arg:"VoltWattP2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattP2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattP2"}},command_id:"VoltageActivePowerMode.VoltWattP2"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-Watt changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"VoltWattOpenLoopResponseTime",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageActivePowerMode.OpenLoopResponseTime"}]},{title:"Freq-Watt (Frequency-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Frequency-Active Power Mode",help:"Indicates whether frequency-power (Freq-Watt) control is currently enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"FrequencyActivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"FrequencyActivePowerModeStatus"}},command_id:"FrequencyActivePowerMode.FrequencyActivePowerModeStatus"},{title:"Open-Loop Response Time",help:"Response time applied to open-loop frequency-power adjustments.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"FreqWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"FrequencyActivePowerMode.OpenLoopResponseTime"},{title:"Over-Frequency Droop: Deadband",help:"Over Frequency Droop dbOF â€” Deadband around nominal frequency before active power reduction begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",unit:"Hz",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_dbOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_dbOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_dbOF"},{title:"Over-Frequency Droop: Gain (k)",help:"Over Frequency Droop kOF â€” Slope (gain k) of active power reduction versus frequency rise above nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_kOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_kOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_kOF"},{title:"Under-Frequency Droop: Deadband",help:"Under Frequency Droop dbUF â€” Deadband around nominal frequency before active power increase/response begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_dbUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_dbUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_dbUF"},{title:"Under-Frequency Droop: Gain (k)",help:"Under Frequency Droop kUF â€” Slope (gain k) of active power response versus frequency drop below nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_kUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_kUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_kUF"}]}]}]},{themeName:"Backup Power",sections:[{sectionTitle:"Backup Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Off-Grid Output",help:"Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"OffGridOutput"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"OffGridOutput"}},command_id:"BackupPower.OffGridOutput"},{title:"Backup (EPS) Output Voltage",help:"Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage (Vac)",arg:"Voltage",dtype:"enum",description:"",longdescription:"",unit:"Vac",meanings:{0:"208",1:"220",2:"230",3:"240",4:"277"},friendly_meanings:{0:"208 V",1:"220 V",2:"230 V",3:"240 V",4:"277 V"},telemetry:{model:"40104",block:"fixed",point:"EPSVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"EPSVoltage"}},command_id:"BackupPower.EPSVoltage"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Port Connection",help:"If using a generator, select which port it's connected to: eeither the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.  In Microgrid Mode, the inverter treats the generator as the primary AC source rather than the utility grid.  When microgrid mode is active, all charging and operating limits come from the Generator settings—not the Grid Charge limits. Remember to install CTs on any power wires attached to the grid port.  This includes a generator that is configured in microgrid mode.  ",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Generator connected to",arg:"Port",dtype:"enum",description:"",longdescription:"",meanings:{0:"GeneratorPort",1:"GridPort"},friendly_meanings:{0:"GEN port. Also pick this option if you are not using generator.",1:"Grid port - also called microgrid mode"},telemetry:{model:"40104",block:"fixed",point:"LinkedPort"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"LinkedPort"}},command_id:"Generator.LinkedPort"},{title:"Battery Charge Current Limit",help:"Sets the maximum DC current the inverter will send to the battery when charging from the generator.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Charge Current (Adc)",arg:"Current",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"BatteryChargeCurrentLimit"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"BatteryChargeCurrentLimit"}},command_id:"Generator.BatteryChargeCurrentLimit"},{title:"Generator Rated Power",help:"Specify the generator's continuous rated output power.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Rated Power (kW)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"GeneratorRatedPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorRatedPower"}},command_id:"Generator.GeneratorRatedPower"},{title:"Generator Cool-Down Time",help:"Sets the time the generator continues running after charging stops to allow for safe cooling.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Cool-Down Time (min)",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GeneratorCoolDownTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorCoolDownTime"}},command_id:"Generator.GeneratorCoolDownTime"},{title:"Generator Start/Stop SOC",help:"Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"Generator starts when battery drops to this level",longdescription:"",unit:"%",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socGenStart"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"Generator stops when battery charges to this level",longdescription:"",unit:"%",range:{min:5,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socGenEnd"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorSOC"}},command_id:"Generator.GeneratorSOC"},{title:"Generator Contactor Status",help:"Indicates the current state of the generator control contactor.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Contactor State",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"OFF",1:"ON"},friendly_meanings:{0:"Closed / On",1:"Open / Off"},telemetry:{model:"40101",block:"fixed",point:"genDryContactState"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GenDryContact"}},command_id:"Generator.GenDryContact"},{title:"Battery Quick Charge with Generator",help:"Start the generator to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Stop quick charge",1:"Start quick charge"},telemetry:{model:"40104",block:"fixed",point:"StartGeneratorExercise"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"StartGeneratorExercise"}},command_id:"Generator.StartGeneratorExercise"},{title:"Generator Boost",help:"Enables dynamic adjustment of generator charging power for faster battery recovery when needed.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"GeneratorBoost"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorBoost"}},command_id:"Generator.GeneratorBoost"}]},{title:"Generator Exercise",visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Exercise Schedule",help:"Configure a recurring schedule for generator exercise runs. Select the day of the week and time when the generator should run automatically.",element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Day of Week",arg:"DayOfWeek",dtype:"enum",description:"",longdescription:"",meanings:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23}},{name:"Minute",arg:"Minute",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59}}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Plan",Element:"GeneratorExercise"}},command_id:"CGI.GeneratorExercise",widget:"generator-exercise",showRefresh:!0,showSetButton:!0}]}]}]},{themeName:"AC Coupled PV",sections:[{sectionTitle:"AC Coupled PV",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"AC Coupled PV",help:"Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"AC Coupled PV Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"ACCoupledPV"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCoupledPV"}},command_id:"ACCoupledPV.ACCoupledPV"},{title:"AC Coupled PV Start/Stop SOC",help:"Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"AC Coupled PV begins charging when SOC drops to this level",longdescription:"",unit:"%",range:{min:0,max:100},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOn"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"AC Coupled PV stops charging when SOC reaches this level",longdescription:"",unit:"%",range:{min:0,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOff"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCouplePVSOC"}},command_id:"ACCoupledPV.ACCouplePVSOC"}]}]}]},{themeName:"Smart Load",sections:[{sectionTitle:"Smart Load",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Use Smart Load",help:"Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disabled",1:"Enabled"},telemetry:{model:"40104",block:"fixed",point:"SmartLoad"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoad"}},command_id:"LoadShedding.SmartLoad"},{title:"Smart Load On-Grid Behavior",help:"Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"On-Grid Always-On Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Follow normal rules",1:"Always On When Grid Present"},telemetry:{model:"40104",block:"fixed",point:"OnGridAlwaysOn"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"OnGridAlwaysOn"}},command_id:"LoadShedding.OnGridAlwaysOn"},{title:"Smart Load Start Power",help:"Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"PV Power Above (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"StartPVPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"StartPVPower"}},command_id:"LoadShedding.StartPVPower"},{title:"Smart Load SOC Limits",help:"Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start When Battery SOC Is Above (%)",arg:"OnSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},less_than:"OffSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOnSoc"}},{name:"Stop When Battery SOC Is Below (%)",arg:"OffSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},greater_than:"OnSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoadSOC"}},command_id:"LoadShedding.SmartLoadSOC"}]}]}]}],Qb={themes:Kb};function Yb(e,t){const n=[],l=new Map;return t.themes.forEach(a=>{const i=a.themeName||a.theme_id||"",r={...a,sections:a.sections.map(s=>({...s,subsections:[...s.subsections]}))};l.set(i,r),n.push(r)}),e.themes.forEach(a=>{const i=a.themeName||a.theme_id||"";let r=l.get(i);if(!r){r={...a,sections:a.sections.map(s=>({...s,subsections:[...s.subsections]}))},l.set(i,r),n.push(r);return}a.sections.forEach(s=>{const c=s.section_id||s.sectionTitle||"";let d=r.sections.find(u=>(u.section_id||u.sectionTitle)===c);d?d.subsections.push(...s.subsections):r.sections.push({...s,subsections:[...s.subsections]})})}),{themes:n}}const Jb=Yb(zb,Qb),Pa=new Map,Xb="1.0.0",Yr=100,Jr=e=>new Promise(t=>setTimeout(t,e));function Zb(e,t,n){var l,a;if(e.value!==void 0)return e.dtype==="Number"&&e.value!==""?Number(e.value):e.value;switch(e.dtype){case"Number":{const i=e.range;if(!i)return 0;const r=i.max-i.min;return e.less_than?Math.round(i.min+r*.3):e.greater_than?Math.round(i.min+r*.7):e.arg==="Year"?new Date().getFullYear()%100:e.arg==="Mon"?new Date().getMonth()+1:e.arg==="Day"?new Date().getDate():e.arg==="Hour"?new Date().getHours():e.arg==="Min"?new Date().getMinutes():e.arg==="Sec"?new Date().getSeconds():Math.round(i.min+r*.5)}case"enum":{const i=Object.keys(e.meanings??{})[0];return i?((l=e.friendly_meanings)==null?void 0:l[i])??((a=e.meanings)==null?void 0:a[i])??"":""}case"String":return e.arg==="Name"?"Inverter 1":"";default:if(e.dtype&&e.dtype.startsWith("bitfield")){const i={};return e.meanings&&Object.keys(e.meanings).forEach(r=>{i[r]=Math.random()>.7}),i}return""}}function eh(e){const t={};return e.widget==="generator-exercise"?e.entries.forEach(n=>{t[n.arg]=""}):e.entries.forEach((n,l)=>{t[n.arg]=Zb(n,l,e.entries)}),{pointId:e.command_id,entries:t,lastRead:new Date().toISOString(),success:!0}}function th(e){e.themes.forEach(t=>{t.sections.forEach(n=>{n.subsections.forEach(l=>{l.points.forEach(a=>{Pa.has(a.command_id)||Pa.set(a.command_id,eh(a))})})})})}async function nh(e={}){await Jr(Yr);const t=[{pageName:"Inverter Configuration",themes:Jb.themes}];t.forEach(l=>th(l));let n=t;return e.pageId&&(n=t.filter(l=>l.pageName.toLowerCase().replace(/\s+/g,"-")===e.pageId)),{pages:n,lastModified:new Date().toISOString(),version:Xb}}async function lh(e){return await Jr(Yr),{isOnline:!0,timestamp:new Date().toISOString()}}async function ah(e){return await Jr(Yr),{items:[{gateway_sn:"GW001234567890",equipments:[{id:"envy-04237218B0",sn:"04237218B0",md:"FP-ENVY-Inverter",md_name:"Fortress Power ENVY Inverter",site_id:e.site_id,is_primary:!0,product_type:"Inverter",sub_product_type:"Hybrid",software_version:"1.2.3",arm_sub_product_type:"ARM-V1",arm_software_version:"1.2.3",dsp_sub_product_type:"DSP-V1",dsp_software_version:"2.3.4",firmwares:[{name:"ARM",version:"1.2.3"},{name:"DSP",version:"2.3.4"}]}]},{gateway_sn:"GW002234567890",equipments:[{id:"envy-04237219C3",sn:"04237219C3",md:"FP-ENVY-Inverter",md_name:"Fortress Power ENVY Inverter",site_id:e.site_id,is_primary:!1,product_type:"Inverter",sub_product_type:"Hybrid",software_version:"1.2.3",arm_sub_product_type:"ARM-V1",arm_software_version:"1.2.3",dsp_sub_product_type:"DSP-V1",dsp_software_version:"2.3.4",firmwares:[{name:"ARM",version:"1.2.3"},{name:"DSP",version:"2.3.4"}]}]}],success:!0,message:"Equipment retrieved successfully",request_id:e.request_id,code:200}}async function Ti(e){var t,n,l;await Jr(Yr);try{const{payload:a}=e;if(!a||!a.method)return{success:!1,error:"Invalid payload: missing method",timestamp:new Date().toISOString()};switch(a.method){case"Read":{const i=(t=a.data)==null?void 0:t.Elements;if(!i||i.length===0)return{success:!1,error:"No elements specified for read operation",timestamp:new Date().toISOString()};const r=i[0],s=`${r.Cluster}.${r.Element}`;return{success:!0,data:Pa.get(s)||{entries:{}},timestamp:new Date().toISOString()}}case"Write":{const i=(n=a.data)==null?void 0:n.Elements;if(!i||i.length===0)return{success:!1,error:"No elements specified for write operation",timestamp:new Date().toISOString()};const r=i[0],s=`${r.Cluster}.${r.Element}`;let c=Pa.get(s);return c&&(c={...c,entries:{...c.entries,...r.arguments},lastRead:new Date().toISOString()},Pa.set(s,c)),{success:!0,data:c,timestamp:new Date().toISOString()}}case"Invoke":{const i=(l=a.data)==null?void 0:l.Elements;return!i||i.length===0?{success:!1,error:"No elements specified for invoke operation",timestamp:new Date().toISOString()}:{success:!0,data:{status:"Command executed successfully"},timestamp:new Date().toISOString()}}default:return{success:!1,error:`Unknown method: ${a.method}`,timestamp:new Date().toISOString()}}}catch(a){return{success:!1,error:a instanceof Error?a.message:"Unknown error",timestamp:new Date().toISOString()}}}function Su(e,t){if(!e.protocol)throw new Error(`Point ${e.command_id} has no protocol definition`);if(e.protocol.matter)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.cgi)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:[{MEP:e.protocol.cgi.MEP,Cluster:e.protocol.cgi.Cluster,Element:e.protocol.cgi.Element}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.modbus){const l=e.protocol.modbus.register_type===3?3:4;return{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Read",timeout:5,data:{type:"RTU",uartPort:1,slaveId:1,address:e.protocol.modbus.address,function:l,registerNumber:e.protocol.modbus.size}}}throw new Error(`Unsupported protocol for point ${e.command_id}`)}function ih(e,t,n){var l;if(!e.protocol)throw new Error(`Point ${e.command_id} has no protocol definition`);if(e.protocol.matter){const a=e.element_type==="Service"||e.access==="Invoke"?"Invoke":"Write";return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:a,data:{Elements:[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}}}else if(e.protocol.cgi){const a=e.element_type==="Service"||e.access==="Invoke"||e.element_type==="custom"?"Invoke":"Write";return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:a,data:{Elements:[{MEP:e.protocol.cgi.MEP,Cluster:e.protocol.cgi.Cluster,Element:e.protocol.cgi.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}}}else if(e.protocol.modbus){const a=e.protocol.modbus.size>1?16:6,i=(l=e.entries[0])==null?void 0:l.arg;let r=i?n[i]:0;return typeof r=="number"?r=Math.round(r):typeof r=="string"&&(r=parseInt(r,10)||0),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:1,address:e.protocol.modbus.address,function:a,value:r}}}throw new Error(`Unsupported protocol for point ${e.command_id}`)}function rh(e,t,n){var l;if(!e.protocol)throw new Error(`Point ${e.command_id} has no protocol definition`);if(e.protocol.matter)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Invoke",data:{Elements:[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.cgi)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Invoke",data:{Elements:[{MEP:e.protocol.cgi.MEP,Cluster:e.protocol.cgi.Cluster,Element:e.protocol.cgi.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.modbus){const a=e.protocol.modbus.size>1?16:6,i=(l=e.entries[0])==null?void 0:l.arg;let r=i&&n?n[i]:0;return typeof r=="number"?r=Math.round(r):typeof r=="string"&&(r=parseInt(r,10)||0),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:1,address:e.protocol.modbus.address,function:a,value:r}}}throw new Error(`Unsupported protocol for point ${e.command_id}`)}function oh(e){const[t,n]=A.useState([]),[l,a]=A.useState({}),[i,r]=A.useState(!0),[s,c]=A.useState(null),[d,u]=A.useState(null),[m,p]=A.useState(null);return A.useEffect(()=>{(async()=>{try{r(!0),c(null);const v=await nh({equipmentId:e}),b=v.pages.map((g,y)=>({id:g.pageName.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),label:g.pageName,filename:`page-${y}.json`,data:g})),_=b.reduce((g,y)=>(g[y.id]=y.data,g),{});n(b),a(_),u(v.version),p(v.lastModified)}catch(v){console.error("Error loading site configuration:",v),c(v instanceof Error?v.message:"Failed to load site configuration")}finally{r(!1)}})()},[e]),{pageRegistry:t,pageLookup:l,isLoading:i,loadError:s,configVersion:d,lastModified:m}}function sh(){const[e,t]=A.useState("");return A.useEffect(()=>{const n=()=>{const l=document.querySelectorAll('[id^="theme-"]');let a="";l.forEach(i=>{const r=i.getBoundingClientRect();r.top<=window.innerHeight*.3&&r.bottom>0&&(a=i.id)}),a&&a!==e&&t(a)};return n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[e]),e}function ch(){const[e,t]=A.useState(""),n=A.useCallback((l,a)=>{var r,s,c,d;if(!a.trim())return{matches:!0,helpTextMatch:!1};const i=a.toLowerCase();if((r=l.title)!=null&&r.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!1};if((s=l.help)!=null&&s.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!0};for(const u of l.entries){if((c=u.name)!=null&&c.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!1};if(u.friendly_meanings){for(const m of Object.values(u.friendly_meanings))if(m.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!1}}if((d=u.description)!=null&&d.toLowerCase().includes(i))return{matches:!0,helpTextMatch:!1}}return{matches:!1,helpTextMatch:!1}},[]);return{searchQuery:e,setSearchQuery:t,pointMatchesSearch:n}}function ha(){const[e,t]=A.useState(!1),[n,l]=A.useState(null),a=A.useCallback(s=>{s!==void 0&&l(s),t(!0)},[]),i=A.useCallback(()=>{t(!1)},[]),r=A.useCallback(()=>{t(s=>!s)},[]);return{isOpen:e,data:n,open:a,close:i,toggle:r,setData:l}}function df(e=1){const[t,n]=A.useState(new Map),[l,a]=A.useState(!0),[i,r]=A.useState(null);return A.useEffect(()=>{(async()=>{try{a(!0),r(null);const m=await ah({site_id:e,request_id:`req-${Date.now()}`});if(!m.success){r(m.message);return}const p=new Map;m.items.forEach(f=>{f.equipments.forEach(v=>{p.set(v.sn,{equipment:v,gatewaySn:f.gateway_sn})})}),n(p)}catch(m){console.error("Error fetching equipment mappings:",m),r(m instanceof Error?m.message:"Failed to fetch equipment mappings")}finally{a(!1)}})()},[e]),{mappings:t,isLoading:l,error:i,getMapping:u=>t.get(u),getGatewaySn:u=>{var m;return(m=t.get(u))==null?void 0:m.gatewaySn},isPrimary:u=>{var m;return((m=t.get(u))==null?void 0:m.equipment.is_primary)??!1}}}const Lu={isOnline:null,statusTimestamp:null,error:null,isLoading:!1};function dh(e){const[{isOnline:t,statusTimestamp:n,error:l,isLoading:a},i]=A.useState(Lu),[r,s]=A.useState(0),c=A.useCallback(()=>{s(d=>d+1)},[]);return A.useEffect(()=>{if(!e){i(Lu);return}let d=!1;return(async()=>{i(m=>({...m,isLoading:!0,error:null}));try{const m=await lh({gatewaySn:e});if(d)return;i({isOnline:m.isOnline,statusTimestamp:m.timestamp,error:null,isLoading:!1})}catch(m){if(d)return;i({isOnline:null,statusTimestamp:null,error:m instanceof Error?m.message:"Failed to fetch gateway status",isLoading:!1})}})(),()=>{d=!0}},[e,r]),{isOnline:t,statusTimestamp:n,error:l,isLoading:a,refresh:c}}function uh({themes:e,activeSection:t,selectedEquipmentId:n,onEquipmentChange:l,equipmentOptions:a}){return o.jsxs("aside",{className:"w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-[11px] text-slate-500 uppercase font-medium mb-1 block",children:"Equipment"}),o.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800",value:n,onChange:i=>l(i.target.value),children:a.map(i=>o.jsx("option",{value:i.id,children:i.label},i.id))})]}),o.jsxs("nav",{className:"text-sm text-slate-800",children:[o.jsx("div",{className:"text-emerald-600 font-semibold mb-2",children:"Navigation"}),o.jsxs("div",{className:"flex flex-col gap-3",children:[e.map((i,r)=>{const s=`theme-${r}`,c=t===s||t.startsWith(`${s}-section`);return o.jsxs("div",{children:[o.jsxs("div",{className:"relative",children:[c&&o.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r"}),o.jsx("button",{className:`font-semibold text-xs uppercase tracking-wide mb-1 px-2 hover:text-emerald-600 transition-colors w-full text-left ${c?"text-emerald-600":"text-slate-900"}`,onClick:()=>{var d;(d=document.getElementById(s))==null||d.scrollIntoView({behavior:"smooth",block:"start"})},children:i.themeName})]}),o.jsx("ul",{className:"pl-2 flex flex-col gap-1 text-slate-700",children:i.sections.map((d,u)=>{const m=`${s}-section-${u}`,p=t===m;return o.jsxs("li",{className:"relative",children:[p&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),o.jsx("button",{className:`px-2 py-1 hover:bg-slate-50 rounded text-xs w-full text-left transition-colors ${p?"text-blue-600 font-medium bg-blue-50":"text-slate-700"}`,onClick:()=>{var f;(f=document.getElementById(m))==null||f.scrollIntoView({behavior:"smooth",block:"start"})},children:d.sectionTitle})]},`${d.sectionTitle}-${u}`)})})]},`${i.themeName}-${r}`)}),!e.length&&o.jsx("div",{className:"text-xs text-slate-500",children:"No themes defined."})]})]})]})}function mh({searchQuery:e,onSearchChange:t,lastUpdatedLabel:n,onRefresh:l,gatewayStatus:a}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-xs text-slate-500",children:["Last Updated At: ",n]}),o.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6",children:[o.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[o.jsx("div",{className:"text-xl font-semibold text-slate-900 leading-tight",children:"Site Configuration"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("div",{className:"relative flex-1 max-w-md",children:[o.jsx("input",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800",placeholder:"Search…",value:e,onChange:i=>t(i.target.value)}),e&&o.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",onClick:()=>t(""),title:"Clear search",children:"✕"})]}),o.jsxs("button",{className:"text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1",onClick:l,children:[o.jsx("span",{children:"⟳"}),o.jsx("span",{children:"Refresh"})]})]})]}),o.jsx(ph,{status:a})]})]})}function ph({status:e}){const t=(e==null?void 0:e.isOnline)??null,n=(e==null?void 0:e.isLoading)??!1,l=n?"bg-amber-400 animate-pulse":t===!0?"bg-green-500":t===!1?"bg-red-500":"bg-slate-300";let a="Unknown";return n?a="Checking…":t===!0?a="Online":t===!1&&(a="Offline"),o.jsxs("div",{className:"flex flex-col items-end gap-1 text-right self-start min-w-[180px]",children:[o.jsx("div",{className:"text-[11px] uppercase tracking-wide text-slate-500",children:"Gateway Status"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:`h-3 w-3 rounded-full border border-slate-300 ${l}`,"aria-label":`Gateway ${a}`,role:"status"}),o.jsx("span",{className:"text-sm font-semibold text-slate-900",children:a})]}),(e==null?void 0:e.gatewaySn)&&o.jsxs("div",{className:"text-xs text-slate-500 leading-tight",children:["SN: ",e.gatewaySn]}),!n&&(e==null?void 0:e.error)&&o.jsx("div",{className:"text-xs text-red-500 leading-tight",children:e.error}),(e==null?void 0:e.lastChecked)&&!n&&o.jsxs("div",{className:"text-[11px] text-slate-400",children:["Checked ",new Date(e.lastChecked).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}function fh(e){const t={};if(e.widget==="generator-exercise")return e.entries.forEach(a=>{a.dtype,t[a.arg]=""}),t;const n=e.entries.filter(a=>a.dtype==="Number"&&a.range!==void 0),l=n.length>=2;return e.entries.forEach((a,i)=>{var r,s;if(a.value!==void 0){t[a.arg]=a.dtype==="Number"&&a.value!==""?Number(a.value):a.value;return}if(a.dtype==="Number"){const c=a.range;if(!c){t[a.arg]=0;return}if(l){const d=c.max-c.min,u=i/Math.max(n.length-1,1);a.less_than?t[a.arg]=Math.round(c.min+d*.3):a.greater_than?t[a.arg]=Math.round(c.min+d*.7):t[a.arg]=Math.round(c.min+d*u)}else t[a.arg]=c.min;return}if(a.dtype==="enum"){const c=Object.keys(a.meanings??{})[0];if(c){const d=((r=a.friendly_meanings)==null?void 0:r[c])??((s=a.meanings)==null?void 0:s[c])??"";t[a.arg]=d}else t[a.arg]="";return}if(a.dtype&&a.dtype.startsWith("bitfield")){const c={};a.meanings&&Object.keys(a.meanings).forEach(d=>{c[d]=!1}),t[a.arg]=c;return}t[a.arg]=""}),t}function yh(e,t){const{getGatewaySn:n,isPrimary:l,isLoading:a}=df(),[i,r]=A.useState(fh(e)),[s,c]=A.useState(!1),[d,u]=A.useState(null),[m,p]=A.useState(null);A.useEffect(()=>{if(a)return;(async()=>{if(!(((typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service")&&e.showRefresh!==!0))try{c(!0),u(null);const S=t.thingId.SN,k=n(S)||"GW001234567890",P=Su(e,t.id),w=await Ti({gatewaySn:k,payload:P});if(w.success&&w.data){const L=w.data;L.success?(r(L.entries),p(L.lastRead)):u(L.error||"Failed to read point")}else u(w.error||"Failed to read point")}catch(S){console.error("Error fetching initial value:",S),u(S instanceof Error?S.message:"Failed to fetch initial value")}finally{c(!1)}})()},[e.command_id,t.id,a]);const f=A.useCallback((g,y)=>{r(h=>({...h,[g]:y}))},[]),v=A.useCallback(async()=>{try{c(!0),u(null);const g=t.thingId.SN,y=n(g)||"GW001234567890",h=Su(e,t.id),S=await Ti({gatewaySn:y,payload:h});if(S.success&&S.data){const k=S.data;return k.success?(r(k.entries),p(k.lastRead),{success:!0,payload:h,gatewaySn:y}):(u(k.error||"Failed to read point"),{success:!1,error:k.error})}else return u(S.error||"Failed to read point"),{success:!1,error:S.error}}catch(g){const y=g instanceof Error?g.message:"Failed to refresh";return u(y),{success:!1,error:y}}finally{c(!1)}},[e.command_id,t.id]),b=A.useCallback(async()=>{var g;try{c(!0),u(null);const y=t.thingId.SN,h=((g=e.protocol)==null?void 0:g.modbus)!==void 0,S=!l(y);if(h&&S){const U="Writing to Modbus commands on non-primary inverters is not currently supported";return u(U),{success:!1,error:U}}const k={...i};e.entries.forEach(U=>{if(U.dtype!=="enum"||!U.meanings)return;const I=k[U.arg];if(I==null||I==="")return;const M=Object.entries(U.meanings).find(([E,q])=>{var B;const ee=((B=U.friendly_meanings)==null?void 0:B[E])??q;return I===ee||I===q});M&&(k[U.arg]=M[1])});const P=n(y)||"GW001234567890",w=ih(e,t.id,k),L=await Ti({gatewaySn:P,payload:w});if(L.success){if(L.data){const U=L.data;U.entries&&(r(U.entries),p(U.lastRead))}return{success:!0,payload:w,gatewaySn:P}}else return u(L.error||"Failed to write point"),{success:!1,error:L.error}}catch(y){const h=y instanceof Error?y.message:"Failed to write";return u(h),{success:!1,error:h}}finally{c(!1)}},[e.command_id,t.id,i]),_=A.useCallback(async()=>{try{c(!0),u(null);const g=t.thingId.SN,y=n(g)||"GW001234567890",h={...i};e.entries.forEach(P=>{if(P.dtype!=="enum"||!P.meanings)return;const w=h[P.arg];if(w==null||w==="")return;const L=Object.entries(P.meanings).find(([U,I])=>{var E;const M=((E=P.friendly_meanings)==null?void 0:E[U])??I;return w===M||w===I});L&&(h[P.arg]=L[1])});const S=rh(e,t.id,h),k=await Ti({gatewaySn:y,payload:S});return k.success?{success:!0,payload:S,result:k.data,gatewaySn:y}:(u(k.error||"Failed to invoke command"),{success:!1,error:k.error})}catch(g){const y=g instanceof Error?g.message:"Failed to invoke";return u(y),{success:!1,error:y}}finally{c(!1)}},[e.command_id,t.id,i]);return{formState:i,setFormState:r,handleFieldChange:f,handleRefresh:v,handleSet:b,handleInvoke:_,isLoading:s||a,error:d,lastRead:m}}const gh=({onClick:e})=>o.jsx("button",{type:"button",onClick:e,className:"text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer",children:"i"}),bh=()=>o.jsx("span",{className:"text-base leading-none",children:"⟳"}),hh=()=>o.jsx("span",{className:"text-base leading-none",children:"🕐"}),xh=()=>o.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-500 border border-slate-300 font-medium",children:"Read Only"});function _h({point:e,readOnly:t,helpTextMatch:n=!1,shouldShowHistory:l,shouldShowRefresh:a,shouldShowSetButton:i,setButtonAppearance:r,onHelpClick:s,onHistoryClick:c,onRefreshClick:d,onSetClick:u}){return o.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-3",children:[o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx("div",{className:"text-slate-800 text-sm font-semibold leading-tight",children:e.title}),e.help&&o.jsxs("div",{className:"mt-0.5 relative",children:[o.jsx(gh,{onClick:s}),n&&o.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"})]}),t&&o.jsx(xh,{})]}),o.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l&&o.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"View historical data",onClick:c,children:o.jsx(hh,{})}),a&&o.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"Refresh from device",onClick:d,children:o.jsx(bh,{})}),i&&o.jsx("button",{className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${r}`,disabled:t,onClick:u,children:"Set"})]})]})}function vh({point:e,formState:t,readOnly:n,onChange:l}){const a=e.entries.find(s=>s.arg==="Sec"),i=()=>{const s=t.Hour??0,c=t.Min??0,d=(t.Year??0)+2e3,u=String(t.Mon??1).padStart(2,"0"),m=String(t.Day??1).padStart(2,"0"),p=String(s).padStart(2,"0"),f=String(c).padStart(2,"0");return`${d}-${u}-${m}T${p}:${f}`},r=s=>{const c=new Date(s),d=c.getHours(),u=c.getMinutes();l("Year",c.getFullYear()-2e3),l("Mon",c.getMonth()+1),l("Day",c.getDate()),l("Hour",d),l("Min",u),a&&l("Sec",0)};return o.jsx("div",{className:"flex flex-col gap-2",children:o.jsx("input",{type:"datetime-local",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:i(),onChange:s=>r(s.target.value)})})}const xa="00:00";function Dr({label:e,value:t,readOnly:n,onChange:l,onClear:a}){const i=!n&&t!==xa;return o.jsxs("div",{className:"w-[150px] flex-shrink-0 flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:e}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:t,onChange:r=>l(r.target.value)}),i&&o.jsx("button",{type:"button",className:"absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700",onClick:a,"aria-label":`Clear ${e.toLowerCase()}`,children:"✕"})]})]})}function uf({point:e,formState:t,readOnly:n,onChange:l}){const a=e.entries.find(b=>b.arg.includes("StartHour")||b.arg.includes("Start_hour")||b.arg.includes("StartTime_h")),i=e.entries.find(b=>b.arg.includes("StartMin")||b.arg.includes("Start_minute")||b.arg.includes("StartTime_m")),r=e.entries.find(b=>b.arg.includes("EndHour")||b.arg.includes("End_hour")||b.arg.includes("EndTime_h")),s=e.entries.find(b=>b.arg.includes("EndMin")||b.arg.includes("End_minute")||b.arg.includes("EndTime_m")),c=()=>{if(a&&i){const b=String(t[a.arg]??0).padStart(2,"0"),_=String(t[i.arg]??0).padStart(2,"0");return`${b}:${_}`}return xa},d=()=>{if(r&&s){const b=String(t[r.arg]??0).padStart(2,"0"),_=String(t[s.arg]??0).padStart(2,"0");return`${b}:${_}`}return xa},u=b=>{const[_,g]=b.split(":"),y=parseInt(_,10),h=parseInt(g,10);a&&i&&(l(a.arg,y),l(i.arg,h))},m=b=>{const[_,g]=b.split(":"),y=parseInt(_,10),h=parseInt(g,10);r&&s&&(l(r.arg,y),l(s.arg,h))},p=()=>{n||(u(xa),m(xa))},f=c(),v=d();return o.jsxs("div",{className:"flex items-end gap-4",children:[o.jsx(Dr,{label:"Start Time",value:f,readOnly:n,onChange:u,onClear:p}),o.jsx(Dr,{label:"End Time",value:v,readOnly:n,onChange:m,onClear:p})]})}function wh({point:e,formState:t,readOnly:n,onChange:l}){const a=new Map;e.entries.forEach(d=>{const u=d.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);if(!u)return;const[,m,p,f]=u,v=parseInt(p,10);a.has(v)||a.set(v,{id:v});const b=a.get(v),_=f.toLowerCase();m.toLowerCase()==="starttime"?_==="h"?b.startHourArg=d.arg:b.startMinArg=d.arg:_==="h"?b.endHourArg=d.arg:b.endMinArg=d.arg});const i=Array.from(a.values()).sort((d,u)=>d.id-u.id);if(i.length===0)return o.jsx(uf,{point:e,formState:t,readOnly:n,onChange:l});const r=(d,u)=>{const m=d!==void 0?t[d]:0,p=u!==void 0?t[u]:0,f=typeof m=="number"?m:parseInt(m??0,10)||0,v=typeof p=="number"?p:parseInt(p??0,10)||0;return`${String(f).padStart(2,"0")}:${String(v).padStart(2,"0")}`},s=(d,u,m)=>{const[p,f]=m.split(":"),v=parseInt(p,10),b=parseInt(f,10);u==="start"?(d.startHourArg&&l(d.startHourArg,v),d.startMinArg&&l(d.startMinArg,b)):(d.endHourArg&&l(d.endHourArg,v),d.endMinArg&&l(d.endMinArg,b))},c=d=>{n||(d.startHourArg&&l(d.startHourArg,0),d.startMinArg&&l(d.startMinArg,0),d.endHourArg&&l(d.endHourArg,0),d.endMinArg&&l(d.endMinArg,0))};return o.jsx("div",{className:"flex flex-col gap-4",children:i.map(d=>{const u=r(d.startHourArg,d.startMinArg),m=r(d.endHourArg,d.endMinArg),p=()=>c(d);return o.jsxs("div",{className:"flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3",children:[o.jsxs("div",{className:"text-xs font-semibold uppercase text-slate-600",children:["Grid Charge Window ",d.id]}),o.jsxs("div",{className:"flex items-end gap-4",children:[o.jsx(Dr,{label:"Start Time",value:u,readOnly:n,onChange:f=>s(d,"start",f),onClear:p}),o.jsx(Dr,{label:"End Time",value:m,readOnly:n,onChange:f=>s(d,"end",f),onClear:p})]})]},d.id)})})}function Ch({formState:e,readOnly:t,onChange:n}){const l=e.DayOfWeek!==""?e.DayOfWeek:null,a=e.Hour!==""?e.Hour:null,i=e.Minute!==""?e.Minute:null,r=()=>a===null||i===null?"":`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`,s=u=>{if(!u){n("Hour",""),n("Minute","");return}const[m,p]=u.split(":");n("Hour",parseInt(m,10)),n("Minute",parseInt(p,10))},c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let d="No schedule configured";return l!==null&&a!==null&&i!==null&&(d=`Every ${c[l]} at ${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Day of Week"}),o.jsxs("select",{className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:l!==null?l:"",onChange:u=>n("DayOfWeek",u.target.value===""?"":Number(u.target.value)),children:[o.jsx("option",{value:"",children:"Select day..."}),c.map((u,m)=>o.jsx("option",{value:m,children:u},m))]})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Time"}),o.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:r(),onChange:u=>s(u.target.value)})]})]}),o.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-3",children:[o.jsx("div",{className:"text-xs text-slate-600 font-medium mb-1",children:"Schedule Preview"}),o.jsx("div",{className:"text-sm text-slate-800",children:d})]})]})}function Sh({point:e,equipment:t,readOnly:n}){const[l,a]=A.useState(!1),[i,r]=A.useState(null),s=A.useMemo(()=>{var d;return(d=e.entries)!=null&&d.length?e.entries.map(u=>{const m=u.name||u.arg,p=u.description||u.longdescription||"Value reported by inverter firmware";return`${m}: ${p}`}):["Voltage Ride-Through Windows: IEEE 1547 Category B","Frequency Ride-Through Windows: IEEE 1547 Category B","Volt-VAR Curve: UL 1741 SA Default Profile","Frequency-Watt Behavior: Droop Enabled, 5% Slope","Anti-Islanding Method: Active (Sandia)"]},[e.entries]),c=()=>{if(!(n||l)){r(null),a(!0);try{const d=new Date,u=d.toISOString().replace(/[:.]/g,"-"),m=d.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),f=["Fortress Power Envy Inverter","UL Compliance Report","This is just a placeholder report for testing purposes.  Dont base the real implementation on this.","".padEnd(20,"="),`Generated: ${m}`,`Device: ${t.label}`,"","Purpose","This report captures the active grid settings configured on the inverter so they can be shared with AHJs, utilities, or inspectors who require UL 1741 / IEEE 1547 conformance evidence.","","Key Grid Parameters",...s.map(g=>`• ${g}`),"","Statements of Compliance","- Grid support functions follow UL 1741 SA requirements for exporting inverters.","- Trip settings align with local utility specifications (for example, California Rule 21, Puerto Rico LUMA).","- Anti-islanding protections remain enabled and tested per UL procedures.","","Notes","This summary reflects the values active on the device at the time of export. Re-run the report after making configuration changes to maintain an auditable paper trail."].join(`
`),v=new Blob([f],{type:"text/plain"}),b=URL.createObjectURL(v),_=document.createElement("a");_.href=b,_.download=`ul-compliance-${t.id}-${u}.txt`,_.click(),URL.revokeObjectURL(b)}catch(d){console.error("Failed to generate UL Compliance report",d),r("Unable to generate the report. Please try again.")}finally{a(!1)}}};return o.jsxs("div",{className:"flex flex-col gap-3",children:[i&&o.jsx("div",{className:"rounded border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600",children:i}),o.jsx("button",{type:"button",className:`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition ${n||l?"border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`,disabled:n||l,onClick:c,children:l?"Preparing Report…":"Download UL Compliance Report"}),o.jsx("div",{className:"text-xs text-slate-500",children:"The downloaded text file includes device metadata, ride-through windows, and other grid-support functions so you can keep documentation for AHJ or utility reviews."})]})}function Lh({entries:e,formState:t,readOnly:n,onChange:l}){var b;const[a,i]=A.useState(null),r=A.useRef(null),s=[{bg:"bg-emerald-500",text:"text-emerald-600",border:"border-emerald-500"},{bg:"bg-rose-500",text:"text-rose-600",border:"border-rose-500"},{bg:"bg-blue-500",text:"text-blue-600",border:"border-blue-500"},{bg:"bg-purple-500",text:"text-purple-600",border:"border-purple-500"},{bg:"bg-orange-500",text:"text-orange-600",border:"border-orange-500"},{bg:"bg-pink-500",text:"text-pink-600",border:"border-pink-500"},{bg:"bg-indigo-500",text:"text-indigo-600",border:"border-indigo-500"},{bg:"bg-teal-500",text:"text-teal-600",border:"border-teal-500"},{bg:"bg-cyan-500",text:"text-cyan-600",border:"border-cyan-500"},{bg:"bg-amber-500",text:"text-amber-600",border:"border-amber-500"},{bg:"bg-lime-500",text:"text-lime-600",border:"border-lime-500"},{bg:"bg-fuchsia-500",text:"text-fuchsia-600",border:"border-fuchsia-500"}],c=(b=e[0])==null?void 0:b.range;if(!c)return null;const{min:d,max:u}=c,m=_=>{let g=d,y=u;if(_.greater_than){const h=t[_.greater_than];typeof h=="number"&&(g=Math.max(g,h+1))}if(_.less_than){const h=t[_.less_than];typeof h=="number"&&(y=Math.min(y,h-1))}return{min:g,max:y}},p=(_,g)=>{const y=m(_),h=Math.max(y.min,Math.min(y.max,g));l(_.arg,h)},f=(_,g)=>{if(n)return;g.preventDefault(),i(_);const y=r.current;if(!y)return;const h=k=>{const P=y.getBoundingClientRect(),w=k.clientX-P.left,L=Math.max(0,Math.min(100,w/P.width*100)),U=Math.round(d+L/100*(u-d));p(e[_],U)},S=()=>{i(null),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",S)},v=e.length>=8?"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4":"grid-cols-2";return o.jsxs("div",{className:"flex flex-col gap-3 text-sm",children:[o.jsx("div",{className:`grid ${v} gap-3`,children:e.map((_,g)=>{const y=s[g%s.length],h=t[_.arg]??d,S=m(_);return o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsxs("div",{className:`text-[11px] uppercase font-semibold flex items-center gap-1.5 ${y.text}`,children:[o.jsx("span",{className:`w-2 h-2 rounded-full ${y.bg}`}),o.jsx("span",{children:_.name??""}),_.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase ml-auto",children:_.unit})]}),o.jsx("input",{type:"number",className:`w-full rounded border ${y.border} bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500`,disabled:n,value:h,min:S.min,max:S.max,onChange:k=>{const P=k.target.value===""?S.min:Number(k.target.value);p(_,P)}})]},_.arg)})}),o.jsxs("div",{className:"relative w-full pt-2 pb-3",children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-2",children:[o.jsx("span",{children:d}),o.jsx("span",{children:u})]}),o.jsxs("div",{className:"relative overflow-hidden",ref:r,children:[o.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full -translate-y-1/2"}),o.jsx("div",{className:"relative overflow-hidden",style:{height:"24px"},children:e.map((_,g)=>{const y=s[g%s.length],h=t[_.arg]??d,S=(h-d)/(u-d)*100,k=e.length-g,P=a===g?100:k;return o.jsx("div",{children:o.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 ${n?"cursor-not-allowed":"cursor-grab active:cursor-grabbing"}`,style:{left:`${S}%`,transform:"translate(-50%, -50%)",width:"40px",height:"24px",zIndex:P},onMouseDown:w=>f(g,w),children:o.jsx("div",{className:`absolute top-1/2 left-1/2 w-5 h-5 rounded-full ${y.bg} border-2 border-white shadow-lg pointer-events-none transition-shadow`,style:{transform:"translate(-50%, -50%)",zIndex:1,boxShadow:a===g?"0 0 0 3px rgba(0,0,0,0.1)":void 0},title:_.name?`${_.name}: ${h}`:String(h)})})},_.arg)})})]})]})]})}function kh({entry:e,value:t,onChange:n,readOnly:l,point:a}){var v,b,_,g,y,h,S;const i="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",r=e.dtype==="enum"||e.dtype&&e.dtype.startsWith("bitfield")?"col-span-full flex flex-col gap-1 text-sm":"flex flex-col gap-1 text-sm";if(e.dtype&&e.dtype.startsWith("bitfield")&&e.meanings){const k=t||{},P=w=>{const L={...k,[w]:!k[w]};n(L)};return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name??""}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("div",{className:"flex flex-col gap-2 py-1",children:Object.entries(e.meanings).map(([w,L])=>o.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:k[w]||!1,onChange:()=>P(w)}),o.jsx("span",{className:"text-sm text-slate-800",children:L})]},w))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}if(e.dtype==="enum"&&e.meanings){const k=Object.entries(e.meanings).map(([L,U])=>{var M;const I=((M=e.friendly_meanings)==null?void 0:M[L])??U;return{wireVal:L,friendly:I}});if(k.length<=3)return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("div",{className:"flex flex-col gap-2 py-1",children:k.map(L=>o.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx("input",{type:"radio",name:e.arg,className:"w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:t===L.friendly,onChange:()=>n(L.friendly)}),o.jsx("span",{className:"text-sm text-slate-800",children:L.friendly})]},L.wireVal))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]});const P=k.reduce((L,U)=>U.friendly.length>L.length?U.friendly:L,""),w=Math.min(Math.max(P.length*8.5+50,220),480);return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name??""}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",style:{minWidth:`${w}px`,maxWidth:"100%"},disabled:l,value:t??"",onChange:L=>n(L.target.value),children:k.map(L=>o.jsx("option",{value:L.friendly,children:L.friendly},L.wireVal))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}const s=e.dtype==="Number",c=s&&e.range!==void 0,d=((v=a==null?void 0:a.protocol)==null?void 0:v.modbus)!==void 0,u=(_=(b=a==null?void 0:a.protocol)==null?void 0:b.modbus)==null?void 0:_.scale_factor,m=d&&u!==void 0&&s,p=m&&t!==null&&t!==void 0&&t!==""?Number(t)*u:t,f=k=>{if(s){const P=k===""?"":Number(k);if(m&&P!==""){const w=Math.round(P/u);n(w)}else n(P)}else n(k)};return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("input",{type:s?"number":"text",className:c?"w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500":i,disabled:l,value:p??"",min:(g=e.range)==null?void 0:g.min,max:(y=e.range)==null?void 0:y.max,onChange:k=>f(k.target.value)}),c&&o.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.min}),o.jsx("input",{type:"range",className:"flex-1",disabled:l,value:p??e.range.min,min:(h=e.range)==null?void 0:h.min,max:(S=e.range)==null?void 0:S.max,onChange:k=>{const P=Number(k.target.value);if(m){const w=Math.round(P/u);n(w)}else n(P)}}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.max})]})]}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug",children:e.longdescription})]})}function Dh({point:e,formState:t,readOnly:n,isInvoke:l,setButtonAppearance:a,onChange:i,onInvokeClick:r,equipment:s}){const c=e.entries.filter(u=>u.dtype==="Number"&&u.range!==void 0),d=!e.widget&&c.length>=2&&c.length===e.entries.length;return o.jsxs(o.Fragment,{children:[e.widget==="datetime"?o.jsx(vh,{point:e,formState:t,readOnly:n,onChange:i}):e.widget==="timerange-multi"?o.jsx(wh,{point:e,formState:t,readOnly:n,onChange:i}):e.widget==="timerange"?o.jsx(uf,{point:e,formState:t,readOnly:n,onChange:i}):e.widget==="generator-exercise"?o.jsx(Ch,{formState:t,readOnly:n,onChange:i}):e.widget==="ul-compliance-report"?o.jsx(Sh,{point:e,equipment:s,readOnly:n}):d?o.jsx(Lh,{entries:c,formState:t,readOnly:n,onChange:i}):o.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4",children:e.entries.map(u=>o.jsx(kh,{entry:u,value:t[u.arg],readOnly:n,point:e,onChange:m=>i(u.arg,m)},u.arg))}),l&&e.widget!=="generator-exercise"&&e.widget!=="ul-compliance-report"&&e.showInvokeButton!==!1&&o.jsx("div",{className:"mt-4 flex items-center gap-2",children:o.jsx("button",{type:"button",className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${a}`,disabled:n,onClick:r,children:e.invokeButtonText||"Invoke"})})]})}const Th={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl"};function Xr({isOpen:e,onClose:t,title:n,icon:l,children:a,showFooter:i=!0,footerContent:r,maxWidth:s="lg"}){if(A.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&t()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[e,t]),!e)return null;const c=o.jsx("div",{className:"flex justify-end p-4 border-t border-slate-200 bg-slate-50",children:o.jsx("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",onClick:t,children:"Close"})});return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4",onClick:t,children:o.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${Th[s]} border border-slate-300 overflow-hidden`,onClick:d=>d.stopPropagation(),children:[o.jsxs("div",{className:"flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[l,o.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:n})]}),o.jsx("button",{type:"button",className:"text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1",onClick:t,children:"✕"})]}),o.jsx("div",{className:"p-5 max-h-[60vh] overflow-y-auto",children:a}),i&&(r||c)]})})}function Eh({title:e,content:t,isOpen:n,onClose:l}){const a=r=>r.split(/(\*\*[^*]+\*\*)/g).map((c,d)=>c.startsWith("**")&&c.endsWith("**")?o.jsx("strong",{className:"font-semibold text-slate-900",children:c.slice(2,-2)},d):o.jsx("span",{children:c},d)),i=o.jsx("div",{className:"text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium",children:"i"});return o.jsx(Xr,{isOpen:n,onClose:l,title:e,icon:i,children:o.jsx("div",{className:"text-sm text-slate-700 leading-relaxed whitespace-pre-wrap",children:a(t)})})}function Ph({point:e,isOpen:t,onClose:n}){const l=[];e.entries.forEach(i=>{var r,s;if((r=i.telemetry)!=null&&r.model&&((s=i.telemetry)!=null&&s.point)){const c=`${i.telemetry.model}.${i.telemetry.point}`;l.includes(c)||l.push(c)}});const a=o.jsx("span",{className:"text-slate-500 text-xl",children:"🕐"});return o.jsxs(Xr,{isOpen:t,onClose:n,title:"Historical Data",icon:a,children:[o.jsx("div",{className:"text-sm text-slate-700 leading-relaxed mb-4",children:"In the real UI, this button would link you to the historical data page showing the last 24 hours of data for the following telemetry points:"}),l.length>0?o.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4",children:[o.jsx("div",{className:"text-xs font-semibold text-slate-600 uppercase mb-2",children:"Telemetry Points"}),o.jsx("div",{className:"flex flex-col gap-2",children:l.map((i,r)=>o.jsx("div",{className:"font-mono text-sm text-emerald-600 bg-white border border-emerald-200 rounded px-3 py-2",children:i},r))})]}):o.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800",children:"No telemetry points configured for this setting."})]})}function ku({isOpen:e,onClose:t,title:n,payload:l,gatewaySn:a,type:i="set"}){const r=i==="refresh"?o.jsx("span",{children:"⟳"}):o.jsx("span",{children:"📤"});return o.jsxs(Xr,{isOpen:e,onClose:t,title:n,icon:r,maxWidth:"xl",children:[a&&o.jsxs("div",{className:"text-sm text-slate-700 mb-3 bg-blue-50 border border-blue-200 rounded-lg p-3",children:[o.jsx("span",{className:"font-semibold",children:"Gateway:"})," ",a]}),o.jsx("div",{className:"text-sm text-slate-700 mb-3",children:"This is a preview of the command that would be sent:"}),o.jsx("pre",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800",children:JSON.stringify(l,null,2)})]})}function Du({point:e,helpTextMatch:t=!1,equipment:n}){var U,I,M,E;const{formState:l,handleFieldChange:a,handleRefresh:i,handleSet:r,handleInvoke:s}=yh(e,n),c=ha(),d=ha(),u=ha(),m=ha(),p=()=>c.open(),f=()=>d.open(),v=async()=>{const q=await i();q!=null&&q.payload&&m.open({payload:q.payload,gatewaySn:q.gatewaySn})},b=async()=>{const q=await r();q!=null&&q.payload&&u.open({payload:q.payload,gatewaySn:q.gatewaySn})},_=async()=>{const q=await s();q!=null&&q.payload&&u.open({payload:q.payload,gatewaySn:q.gatewaySn})},y=(typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service",h=e.readOnly||e.access==="R",S=h?"border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-400 bg-white text-slate-700 hover:bg-slate-50",k=e.entries.some(q=>{var ee,B;return((ee=q.telemetry)==null?void 0:ee.model)&&((B=q.telemetry)==null?void 0:B.point)}),P=e.showHistory!==void 0?e.showHistory:k&&!y,w=y?e.showRefresh===!0:e.showRefresh!==!1,L=e.showSetButton!==void 0?e.showSetButton:!y;return o.jsxs("div",{className:"rounded-xl border border-slate-300 bg-white p-4 shadow-sm",children:[o.jsx(_h,{point:e,readOnly:h,helpTextMatch:t,shouldShowHistory:P,shouldShowRefresh:w,shouldShowSetButton:L,setButtonAppearance:S,onHelpClick:p,onHistoryClick:f,onRefreshClick:v,onSetClick:b}),o.jsx(Dh,{point:e,formState:l,readOnly:h,isInvoke:y,setButtonAppearance:S,onChange:a,onInvokeClick:_,equipment:n}),o.jsx(Eh,{title:e.title,content:e.help||"",isOpen:c.isOpen,onClose:c.close}),o.jsx(Ph,{point:e,isOpen:d.isOpen,onClose:d.close}),o.jsx(ku,{title:"Command Preview",payload:(U=u.data)==null?void 0:U.payload,gatewaySn:(I=u.data)==null?void 0:I.gatewaySn,isOpen:u.isOpen,onClose:u.close}),o.jsx(ku,{title:"Read Command Preview",payload:(M=m.data)==null?void 0:M.payload,gatewaySn:(E=m.data)==null?void 0:E.gatewaySn,isOpen:m.isOpen,onClose:m.close,type:"refresh"})]})}function Nh({subsection:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){const[a,i]=A.useState(!e.collapsedByDefault),r=e.points.map(c=>({point:c,searchResult:n(c,t)})).filter(({searchResult:c})=>c.matches);if(r.length===0)return null;const s=t.trim()?!0:a;return e.collapsedByDefault?o.jsxs("div",{className:"border border-slate-300 bg-white rounded-xl shadow-sm mb-8",children:[o.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-2 text-left",onClick:()=>i(c=>!c),children:[o.jsx("span",{className:"text-slate-800 text-sm font-semibold uppercase tracking-wide",children:e.title||"Advanced"}),o.jsx("span",{className:"text-slate-500 text-xs",children:s?"▾":"▸"})]}),s&&o.jsx("div",{className:"p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:c,searchResult:d})=>o.jsx(Du,{point:c,helpTextMatch:d.helpTextMatch,equipment:l},c.command_id))})]}):o.jsxs("div",{className:"mb-6",children:[e.title&&o.jsx("div",{className:"text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2",children:o.jsx("span",{children:e.title})}),o.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:c,searchResult:d})=>o.jsx(Du,{point:c,helpTextMatch:d.helpTextMatch,equipment:l},c.command_id))})]})}function Ah({section:e,sectionId:t,searchQuery:n,pointMatchesSearch:l,equipment:a}){const[i,r]=A.useState(!0),s=e.subsections.some(c=>c.points.some(d=>l(d,n).matches));return n.trim()&&!s?null:o.jsxs("section",{className:"bg-white/0",id:t,children:[o.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors",onClick:()=>r(!i),children:[o.jsx("span",{children:e.sectionTitle}),o.jsx("span",{className:"text-slate-500 text-sm",children:i?"▾":"▸"})]}),i&&o.jsx("div",{children:e.subsections.map((c,d)=>o.jsx(Nh,{subsection:c,searchQuery:n,pointMatchesSearch:l,equipment:a},d))})]})}const Tu=[{bg:"bg-brand-green/10",border:"border-brand-green/30",text:"text-slate-900",hover:"hover:bg-brand-green/20"},{bg:"bg-brand-teal/10",border:"border-brand-teal/30",text:"text-slate-900",hover:"hover:bg-brand-teal/20"},{bg:"bg-brand-emerald/10",border:"border-brand-emerald/30",text:"text-slate-900",hover:"hover:bg-brand-emerald/20"},{bg:"bg-brand-cyan/10",border:"border-brand-cyan/30",text:"text-slate-900",hover:"hover:bg-brand-cyan/20"},{bg:"bg-brand-mint/10",border:"border-brand-mint/30",text:"text-slate-900",hover:"hover:bg-brand-mint/20"},{bg:"bg-brand-forest/10",border:"border-brand-forest/30",text:"text-slate-900",hover:"hover:bg-brand-forest/20"},{bg:"bg-brand-sage/10",border:"border-brand-sage/30",text:"text-slate-900",hover:"hover:bg-brand-sage/20"}];function Vh({theme:e,themeId:t,themeIndex:n,searchQuery:l,pointMatchesSearch:a,equipment:i}){const[r,s]=A.useState(!0),c=Tu[n%Tu.length],d=e.sections.some(u=>u.subsections.some(m=>m.points.some(p=>a(p,l).matches)));return l.trim()&&!d?null:o.jsxs("div",{className:"bg-white/0",id:t,children:[o.jsxs("button",{className:`w-full flex items-center justify-between ${c.bg} ${c.text} text-2xl font-bold mb-6 border-b ${c.border} pb-3 px-4 py-2 rounded-lg ${c.hover} transition-all`,onClick:()=>s(!r),children:[o.jsx("span",{children:e.themeName}),o.jsx("span",{className:"text-slate-500 text-lg",children:r?"▾":"▸"})]}),r&&o.jsx("div",{className:"flex flex-col gap-10",children:e.sections.map((u,m)=>{const p=`${t}-section-${m}`;return o.jsx(Ah,{section:u,sectionId:p,searchQuery:l,pointMatchesSearch:a,equipment:i},`${u.sectionTitle}-${m}`)})})]})}function Ih({themes:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){return o.jsxs("div",{className:"flex flex-col gap-16",children:[e.map((a,i)=>{const r=`theme-${i}`;return o.jsx(Vh,{theme:a,themeId:r,themeIndex:i,searchQuery:t,pointMatchesSearch:n,equipment:l},`${a.themeName}-${i}`)}),!e.length&&o.jsx("div",{className:"text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60",children:"This page does not define any themes yet."})]})}function Rh({isOpen:e,onClose:t}){const n=o.jsx("span",{className:"text-base text-slate-600",role:"img","aria-label":"refresh",children:"⟳"});return o.jsx(Xr,{isOpen:e,onClose:t,title:"Refresh Site Values",icon:n,maxWidth:"md",children:o.jsxs("div",{className:"text-sm text-slate-700 space-y-3",children:[o.jsx("p",{children:"This button does not make any network calls in the prototype."}),o.jsxs("p",{children:["In a real implementation this action should call"," ",o.jsx("code",{className:"mx-1 rounded bg-slate-100 px-1 py-0.5 text-xs",children:"GetPointValues"})," ","with"," ",o.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"force_refresh=true"})," ","to retrieve the freshest point data."]})]})})}function Mh(e){var n,l,a,i,r,s,c;if(!e)return;if(!Array.isArray(e.themes)){console.error("[SchemaTest] page.themes is missing or not an array");return}e.themes.forEach((d,u)=>{if(!Array.isArray(d.sections)){console.error(`[SchemaTest] theme ${u} (${d.themeName}) has no sections array`);return}d.sections.forEach((m,p)=>{Array.isArray(m.subsections)||console.error(`[SchemaTest] theme ${u} / section ${p} (${m.sectionTitle}) has no subsections array`)}),d.sections.forEach((m,p)=>{var f;(f=m.subsections)==null||f.forEach((v,b)=>{if(!Array.isArray(v.points)){console.error(`[SchemaTest] theme ${u} / section ${p} / subsection ${b} (${v.title}) has no points array`);return}v.points.forEach((_,g)=>{if(!Array.isArray(_.entries)){console.error(`[SchemaTest] theme ${u} / section ${p} / subsection ${b} / point ${g} (${_.title}) has no entries array`);return}_.entries.forEach((y,h)=>{const S=["enum","String","Number"],k=y.dtype&&typeof y.dtype=="string"&&y.dtype.startsWith("bitfield");!S.includes(y.dtype)&&!k&&console.error(`[SchemaTest] entry ${y.name??h} in point ${_.title} has unsupported dtype ${y.dtype}`)})})})})});const t=((c=(s=(r=(i=(a=(l=(n=e.themes)==null?void 0:n[0])==null?void 0:l.sections)==null?void 0:a[0])==null?void 0:i.subsections)==null?void 0:r[0])==null?void 0:s.points)==null?void 0:c[0])||null;t&&(t.command_id||console.error("[SchemaTest] firstPoint.command_id missing"),t.protocol||console.error("[SchemaTest] firstPoint.protocol missing"))}function Gh(){var L,U,I;const[e,t]=A.useState(((L=Di[0])==null?void 0:L.id)??""),{pageRegistry:n,pageLookup:l,isLoading:a,loadError:i,lastModified:r}=oh(e),s=((U=n[0])==null?void 0:U.id)??"",[c]=A.useState(s),d=sh(),{searchQuery:u,setSearchQuery:m,pointMatchesSearch:p}=ch(),f=ha(),v=A.useMemo(()=>r?new Date(r).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}):"Never",[r]),b=c&&l[c]||s&&l[s]||null,_=A.useMemo(()=>Di.find(M=>M.id===e)||Di[0],[e]),{getGatewaySn:g,isLoading:y}=df(),h=(I=_==null?void 0:_.thingId)==null?void 0:I.SN,S=h?g(h):void 0,k=dh(S),P={gatewaySn:S,isOnline:S?k.isOnline:null,isLoading:y||!!S&&k.isLoading,lastChecked:k.statusTimestamp,error:k.error||(!y&&h&&!S?"Gateway mapping unavailable":null)};if(A.useEffect(()=>{Mh(b)},[b]),a)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsx("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:"Loading theme file..."})});if(i)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700",children:[o.jsx("div",{className:"font-semibold mb-2",children:"Error loading site configuration"}),o.jsx("div",{children:i})]})});if(!b)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:["No pages found in ",o.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"src/themes"}),". Add a JSON page file to get started."]})});const w=b.themes??[];return o.jsxs("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:[o.jsxs("div",{className:"max-w-[1400px] mx-auto flex gap-4",children:[o.jsx(uh,{themes:w,activeSection:d,selectedEquipmentId:e,onEquipmentChange:t,equipmentOptions:Di}),o.jsxs("main",{className:"flex-1 flex flex-col gap-6",children:[o.jsx(mh,{searchQuery:u,onSearchChange:m,lastUpdatedLabel:v,onRefresh:()=>f.open(),gatewayStatus:P}),o.jsx(Ih,{themes:w,searchQuery:u,pointMatchesSearch:p,equipment:_})]})]}),o.jsx(Rh,{isOpen:f.isOpen,onClose:f.close})]})}const ed=Symbol.for("yaml.alias"),Ys=Symbol.for("yaml.document"),hn=Symbol.for("yaml.map"),mf=Symbol.for("yaml.pair"),Rt=Symbol.for("yaml.scalar"),Wl=Symbol.for("yaml.seq"),ht=Symbol.for("yaml.node.type"),Ln=e=>!!e&&typeof e=="object"&&e[ht]===ed,Xn=e=>!!e&&typeof e=="object"&&e[ht]===Ys,$l=e=>!!e&&typeof e=="object"&&e[ht]===hn,xe=e=>!!e&&typeof e=="object"&&e[ht]===mf,me=e=>!!e&&typeof e=="object"&&e[ht]===Rt,Hl=e=>!!e&&typeof e=="object"&&e[ht]===Wl;function ve(e){if(e&&typeof e=="object")switch(e[ht]){case hn:case Wl:return!0}return!1}function Ce(e){if(e&&typeof e=="object")switch(e[ht]){case ed:case hn:case Rt:case Wl:return!0}return!1}const pf=e=>(me(e)||ve(e))&&!!e.anchor,Ze=Symbol("break visit"),ff=Symbol("skip children"),It=Symbol("remove node");function Zn(e,t){const n=yf(t);Xn(e)?_l(null,e.contents,n,Object.freeze([e]))===It&&(e.contents=null):_l(null,e,n,Object.freeze([]))}Zn.BREAK=Ze;Zn.SKIP=ff;Zn.REMOVE=It;function _l(e,t,n,l){const a=gf(e,t,n,l);if(Ce(a)||xe(a))return bf(e,l,a),_l(e,a,n,l);if(typeof a!="symbol"){if(ve(t)){l=Object.freeze(l.concat(t));for(let i=0;i<t.items.length;++i){const r=_l(i,t.items[i],n,l);if(typeof r=="number")i=r-1;else{if(r===Ze)return Ze;r===It&&(t.items.splice(i,1),i-=1)}}}else if(xe(t)){l=Object.freeze(l.concat(t));const i=_l("key",t.key,n,l);if(i===Ze)return Ze;i===It&&(t.key=null);const r=_l("value",t.value,n,l);if(r===Ze)return Ze;r===It&&(t.value=null)}}return a}async function Zr(e,t){const n=yf(t);Xn(e)?await vl(null,e.contents,n,Object.freeze([e]))===It&&(e.contents=null):await vl(null,e,n,Object.freeze([]))}Zr.BREAK=Ze;Zr.SKIP=ff;Zr.REMOVE=It;async function vl(e,t,n,l){const a=await gf(e,t,n,l);if(Ce(a)||xe(a))return bf(e,l,a),vl(e,a,n,l);if(typeof a!="symbol"){if(ve(t)){l=Object.freeze(l.concat(t));for(let i=0;i<t.items.length;++i){const r=await vl(i,t.items[i],n,l);if(typeof r=="number")i=r-1;else{if(r===Ze)return Ze;r===It&&(t.items.splice(i,1),i-=1)}}}else if(xe(t)){l=Object.freeze(l.concat(t));const i=await vl("key",t.key,n,l);if(i===Ze)return Ze;i===It&&(t.key=null);const r=await vl("value",t.value,n,l);if(r===Ze)return Ze;r===It&&(t.value=null)}}return a}function yf(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function gf(e,t,n,l){var a,i,r,s,c;if(typeof n=="function")return n(e,t,l);if($l(t))return(a=n.Map)==null?void 0:a.call(n,e,t,l);if(Hl(t))return(i=n.Seq)==null?void 0:i.call(n,e,t,l);if(xe(t))return(r=n.Pair)==null?void 0:r.call(n,e,t,l);if(me(t))return(s=n.Scalar)==null?void 0:s.call(n,e,t,l);if(Ln(t))return(c=n.Alias)==null?void 0:c.call(n,e,t,l)}function bf(e,t,n){const l=t[t.length-1];if(ve(l))l.items[e]=n;else if(xe(l))e==="key"?l.key=n:l.value=n;else if(Xn(l))l.contents=n;else{const a=Ln(l)?"alias":"scalar";throw new Error(`Cannot replace node with ${a} parent`)}}const jh={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Bh=e=>e.replace(/[!,[\]{}]/g,t=>jh[t]);class Ke{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Ke.defaultYaml,t),this.tags=Object.assign({},Ke.defaultTags,n)}clone(){const t=new Ke(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new Ke(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Ke.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Ke.defaultTags);break}return t}add(t,n){this.atNextDocument&&(this.yaml={explicit:Ke.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Ke.defaultTags),this.atNextDocument=!1);const l=t.trim().split(/[ \t]+/),a=l.shift();switch(a){case"%TAG":{if(l.length!==2&&(n(0,"%TAG directive should contain exactly two parts"),l.length<2))return!1;const[i,r]=l;return this.tags[i]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,l.length!==1)return n(0,"%YAML directive should contain exactly one part"),!1;const[i]=l;if(i==="1.1"||i==="1.2")return this.yaml.version=i,!0;{const r=/^\d+\.\d+$/.test(i);return n(6,`Unsupported YAML version ${i}`,r),!1}}default:return n(0,`Unknown directive ${a}`,!0),!1}}tagName(t,n){if(t==="!")return"!";if(t[0]!=="!")return n(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const r=t.slice(2,-1);return r==="!"||r==="!!"?(n(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&n("Verbatim tags must end with a >"),r)}const[,l,a]=t.match(/^(.*!)([^!]*)$/s);a||n(`The ${t} tag has no suffix`);const i=this.tags[l];if(i)try{return i+decodeURIComponent(a)}catch(r){return n(String(r)),null}return l==="!"?t:(n(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[n,l]of Object.entries(this.tags))if(t.startsWith(l))return n+Bh(t.substring(l.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const n=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],l=Object.entries(this.tags);let a;if(t&&l.length>0&&Ce(t.contents)){const i={};Zn(t.contents,(r,s)=>{Ce(s)&&s.tag&&(i[s.tag]=!0)}),a=Object.keys(i)}else a=[];for(const[i,r]of l)i==="!!"&&r==="tag:yaml.org,2002:"||(!t||a.some(s=>s.startsWith(r)))&&n.push(`%TAG ${i} ${r}`);return n.join(`
`)}}Ke.defaultYaml={explicit:!1,version:"1.2"};Ke.defaultTags={"!!":"tag:yaml.org,2002:"};function hf(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const n=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(n)}return!0}function xf(e){const t=new Set;return Zn(e,{Value(n,l){l.anchor&&t.add(l.anchor)}}),t}function _f(e,t){for(let n=1;;++n){const l=`${e}${n}`;if(!t.has(l))return l}}function Oh(e,t){const n=[],l=new Map;let a=null;return{onAnchor:i=>{n.push(i),a??(a=xf(e));const r=_f(t,a);return a.add(r),r},setAnchors:()=>{for(const i of n){const r=l.get(i);if(typeof r=="object"&&r.anchor&&(me(r.node)||ve(r.node)))r.node.anchor=r.anchor;else{const s=new Error("Failed to resolve repeated object (this should not happen)");throw s.source=i,s}}},sourceObjects:l}}function wl(e,t,n,l){if(l&&typeof l=="object")if(Array.isArray(l))for(let a=0,i=l.length;a<i;++a){const r=l[a],s=wl(e,l,String(a),r);s===void 0?delete l[a]:s!==r&&(l[a]=s)}else if(l instanceof Map)for(const a of Array.from(l.keys())){const i=l.get(a),r=wl(e,l,a,i);r===void 0?l.delete(a):r!==i&&l.set(a,r)}else if(l instanceof Set)for(const a of Array.from(l)){const i=wl(e,l,a,a);i===void 0?l.delete(a):i!==a&&(l.delete(a),l.add(i))}else for(const[a,i]of Object.entries(l)){const r=wl(e,l,a,i);r===void 0?delete l[a]:r!==i&&(l[a]=r)}return e.call(t,n,l)}function yt(e,t,n){if(Array.isArray(e))return e.map((l,a)=>yt(l,String(a),n));if(e&&typeof e.toJSON=="function"){if(!n||!pf(e))return e.toJSON(t,n);const l={aliasCount:0,count:1,res:void 0};n.anchors.set(e,l),n.onCreate=i=>{l.res=i,delete n.onCreate};const a=e.toJSON(t,n);return n.onCreate&&n.onCreate(a),a}return typeof e=="bigint"&&!(n!=null&&n.keep)?Number(e):e}class td{constructor(t){Object.defineProperty(this,ht,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}toJS(t,{mapAsMap:n,maxAliasCount:l,onAnchor:a,reviver:i}={}){if(!Xn(t))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:t,keep:!0,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof l=="number"?l:100},s=yt(this,"",r);if(typeof a=="function")for(const{count:c,res:d}of r.anchors.values())a(d,c);return typeof i=="function"?wl(i,{"":s},"",s):s}}class eo extends td{constructor(t){super(ed),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t,n){let l;n!=null&&n.aliasResolveCache?l=n.aliasResolveCache:(l=[],Zn(t,{Node:(i,r)=>{(Ln(r)||pf(r))&&l.push(r)}}),n&&(n.aliasResolveCache=l));let a;for(const i of l){if(i===this)break;i.anchor===this.source&&(a=i)}return a}toJSON(t,n){if(!n)return{source:this.source};const{anchors:l,doc:a,maxAliasCount:i}=n,r=this.resolve(a,n);if(!r){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let s=l.get(r);if(s||(yt(r,null,n),s=l.get(r)),!s||s.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(i>=0&&(s.count+=1,s.aliasCount===0&&(s.aliasCount=Xi(a,r,l)),s.count*s.aliasCount>i)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return s.res}toString(t,n,l){const a=`*${this.source}`;if(t){if(hf(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(t.implicitKey)return`${a} `}return a}}function Xi(e,t,n){if(Ln(t)){const l=t.resolve(e),a=n&&l&&n.get(l);return a?a.count*a.aliasCount:0}else if(ve(t)){let l=0;for(const a of t.items){const i=Xi(e,a,n);i>l&&(l=i)}return l}else if(xe(t)){const l=Xi(e,t.key,n),a=Xi(e,t.value,n);return Math.max(l,a)}return 1}const vf=e=>!e||typeof e!="function"&&typeof e!="object";class le extends td{constructor(t){super(Rt),this.value=t}toJSON(t,n){return n!=null&&n.keep?this.value:yt(this.value,t,n)}toString(){return String(this.value)}}le.BLOCK_FOLDED="BLOCK_FOLDED";le.BLOCK_LITERAL="BLOCK_LITERAL";le.PLAIN="PLAIN";le.QUOTE_DOUBLE="QUOTE_DOUBLE";le.QUOTE_SINGLE="QUOTE_SINGLE";const Fh="tag:yaml.org,2002:";function qh(e,t,n){if(t){const l=n.filter(i=>i.tag===t),a=l.find(i=>!i.format)??l[0];if(!a)throw new Error(`Tag ${t} not found`);return a}return n.find(l=>{var a;return((a=l.identify)==null?void 0:a.call(l,e))&&!l.format})}function Qa(e,t,n){var m,p,f;if(Xn(e)&&(e=e.contents),Ce(e))return e;if(xe(e)){const v=(p=(m=n.schema[hn]).createNode)==null?void 0:p.call(m,n.schema,null,n);return v.items.push(e),v}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:l,onAnchor:a,onTagObj:i,schema:r,sourceObjects:s}=n;let c;if(l&&e&&typeof e=="object"){if(c=s.get(e),c)return c.anchor??(c.anchor=a(e)),new eo(c.anchor);c={anchor:null,node:null},s.set(e,c)}t!=null&&t.startsWith("!!")&&(t=Fh+t.slice(2));let d=qh(e,t,r.tags);if(!d){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const v=new le(e);return c&&(c.node=v),v}d=e instanceof Map?r[hn]:Symbol.iterator in Object(e)?r[Wl]:r[hn]}i&&(i(d),delete n.onTagObj);const u=d!=null&&d.createNode?d.createNode(n.schema,e,n):typeof((f=d==null?void 0:d.nodeClass)==null?void 0:f.from)=="function"?d.nodeClass.from(n.schema,e,n):new le(e);return t?u.tag=t:d.default||(u.tag=d.tag),c&&(c.node=u),u}function Tr(e,t,n){let l=n;for(let a=t.length-1;a>=0;--a){const i=t[a];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const r=[];r[i]=l,l=r}else l=new Map([[i,l]])}return Qa(l,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const _a=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class wf extends td{constructor(t,n){super(t),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}clone(t){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(n.schema=t),n.items=n.items.map(l=>Ce(l)||xe(l)?l.clone(t):l),this.range&&(n.range=this.range.slice()),n}addIn(t,n){if(_a(t))this.add(n);else{const[l,...a]=t,i=this.get(l,!0);if(ve(i))i.addIn(a,n);else if(i===void 0&&this.schema)this.set(l,Tr(this.schema,a,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${a}`)}}deleteIn(t){const[n,...l]=t;if(l.length===0)return this.delete(n);const a=this.get(n,!0);if(ve(a))return a.deleteIn(l);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${l}`)}getIn(t,n){const[l,...a]=t,i=this.get(l,!0);return a.length===0?!n&&me(i)?i.value:i:ve(i)?i.getIn(a,n):void 0}hasAllNullValues(t){return this.items.every(n=>{if(!xe(n))return!1;const l=n.value;return l==null||t&&me(l)&&l.value==null&&!l.commentBefore&&!l.comment&&!l.tag})}hasIn(t){const[n,...l]=t;if(l.length===0)return this.has(n);const a=this.get(n,!0);return ve(a)?a.hasIn(l):!1}setIn(t,n){const[l,...a]=t;if(a.length===0)this.set(l,n);else{const i=this.get(l,!0);if(ve(i))i.setIn(a,n);else if(i===void 0&&this.schema)this.set(l,Tr(this.schema,a,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${a}`)}}}const Uh=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function qt(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const Bn=(e,t,n)=>e.endsWith(`
`)?qt(n,t):n.includes(`
`)?`
`+qt(n,t):(e.endsWith(" ")?"":" ")+n,Cf="flow",Js="block",Zi="quoted";function to(e,t,n="flow",{indentAtStart:l,lineWidth:a=80,minContentWidth:i=20,onFold:r,onOverflow:s}={}){if(!a||a<0)return e;a<i&&(i=0);const c=Math.max(1+i,1+a-t.length);if(e.length<=c)return e;const d=[],u={};let m=a-t.length;typeof l=="number"&&(l>a-Math.max(2,i)?d.push(0):m=a-l);let p,f,v=!1,b=-1,_=-1,g=-1;n===Js&&(b=Eu(e,b,t.length),b!==-1&&(m=b+c));for(let h;h=e[b+=1];){if(n===Zi&&h==="\\"){switch(_=b,e[b+1]){case"x":b+=3;break;case"u":b+=5;break;case"U":b+=9;break;default:b+=1}g=b}if(h===`
`)n===Js&&(b=Eu(e,b,t.length)),m=b+t.length+c,p=void 0;else{if(h===" "&&f&&f!==" "&&f!==`
`&&f!=="	"){const S=e[b+1];S&&S!==" "&&S!==`
`&&S!=="	"&&(p=b)}if(b>=m)if(p)d.push(p),m=p+c,p=void 0;else if(n===Zi){for(;f===" "||f==="	";)f=h,h=e[b+=1],v=!0;const S=b>g+1?b-2:_-1;if(u[S])return e;d.push(S),u[S]=!0,m=S+c,p=void 0}else v=!0}f=h}if(v&&s&&s(),d.length===0)return e;r&&r();let y=e.slice(0,d[0]);for(let h=0;h<d.length;++h){const S=d[h],k=d[h+1]||e.length;S===0?y=`
${t}${e.slice(0,k)}`:(n===Zi&&u[S]&&(y+=`${e[S]}\\`),y+=`
${t}${e.slice(S+1,k)}`)}return y}function Eu(e,t,n){let l=t,a=t+1,i=e[a];for(;i===" "||i==="	";)if(t<a+n)i=e[++t];else{do i=e[++t];while(i&&i!==`
`);l=t,a=t+1,i=e[a]}return l}const no=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),lo=e=>/^(%|---|\.\.\.)/m.test(e);function Wh(e,t,n){if(!t||t<0)return!1;const l=t-n,a=e.length;if(a<=l)return!1;for(let i=0,r=0;i<a;++i)if(e[i]===`
`){if(i-r>l)return!0;if(r=i+1,a-r<=l)return!1}return!0}function Na(e,t){const n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;const{implicitKey:l}=t,a=t.options.doubleQuotedMinMultiLineLength,i=t.indent||(lo(e)?"  ":"");let r="",s=0;for(let c=0,d=n[c];d;d=n[++c])if(d===" "&&n[c+1]==="\\"&&n[c+2]==="n"&&(r+=n.slice(s,c)+"\\ ",c+=1,s=c,d="\\"),d==="\\")switch(n[c+1]){case"u":{r+=n.slice(s,c);const u=n.substr(c+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=n.substr(c,6)}c+=5,s=c+1}break;case"n":if(l||n[c+2]==='"'||n.length<a)c+=1;else{for(r+=n.slice(s,c)+`

`;n[c+2]==="\\"&&n[c+3]==="n"&&n[c+4]!=='"';)r+=`
`,c+=2;r+=i,n[c+2]===" "&&(r+="\\"),c+=1,s=c+1}break;default:c+=1}return r=s?r+n.slice(s):n,l?r:to(r,i,Zi,no(t,!1))}function Xs(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Na(e,t);const n=t.indent||(lo(e)?"  ":""),l="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return t.implicitKey?l:to(l,n,Cf,no(t,!1))}function Cl(e,t){const{singleQuote:n}=t.options;let l;if(n===!1)l=Na;else{const a=e.includes('"'),i=e.includes("'");a&&!i?l=Xs:i&&!a?l=Na:l=n?Xs:Na}return l(e,t)}let Zs;try{Zs=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Zs=/\n+(?!\n|$)/g}function er({comment:e,type:t,value:n},l,a,i){const{blockQuote:r,commentString:s,lineWidth:c}=l.options;if(!r||/\n[\t ]+$/.test(n))return Cl(n,l);const d=l.indent||(l.forceBlockIndent||lo(n)?"  ":""),u=r==="literal"?!0:r==="folded"||t===le.BLOCK_FOLDED?!1:t===le.BLOCK_LITERAL?!0:!Wh(n,c,d.length);if(!n)return u?`|
`:`>
`;let m,p;for(p=n.length;p>0;--p){const k=n[p-1];if(k!==`
`&&k!=="	"&&k!==" ")break}let f=n.substring(p);const v=f.indexOf(`
`);v===-1?m="-":n===f||v!==f.length-1?(m="+",i&&i()):m="",f&&(n=n.slice(0,-f.length),f[f.length-1]===`
`&&(f=f.slice(0,-1)),f=f.replace(Zs,`$&${d}`));let b=!1,_,g=-1;for(_=0;_<n.length;++_){const k=n[_];if(k===" ")b=!0;else if(k===`
`)g=_;else break}let y=n.substring(0,g<_?g+1:_);y&&(n=n.substring(y.length),y=y.replace(/\n+/g,`$&${d}`));let S=(b?d?"2":"1":"")+m;if(e&&(S+=" "+s(e.replace(/ ?[\r\n]+/g," ")),a&&a()),!u){const k=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${d}`);let P=!1;const w=no(l,!0);r!=="folded"&&t!==le.BLOCK_FOLDED&&(w.onOverflow=()=>{P=!0});const L=to(`${y}${k}${f}`,d,Js,w);if(!P)return`>${S}
${d}${L}`}return n=n.replace(/\n+/g,`$&${d}`),`|${S}
${d}${y}${n}${f}`}function $h(e,t,n,l){const{type:a,value:i}=e,{actualString:r,implicitKey:s,indent:c,indentStep:d,inFlow:u}=t;if(s&&i.includes(`
`)||u&&/[[\]{},]/.test(i))return Cl(i,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return s||u||!i.includes(`
`)?Cl(i,t):er(e,t,n,l);if(!s&&!u&&a!==le.PLAIN&&i.includes(`
`))return er(e,t,n,l);if(lo(i)){if(c==="")return t.forceBlockIndent=!0,er(e,t,n,l);if(s&&c===d)return Cl(i,t)}const m=i.replace(/\n+/g,`$&
${c}`);if(r){const p=b=>{var _;return b.default&&b.tag!=="tag:yaml.org,2002:str"&&((_=b.test)==null?void 0:_.test(m))},{compat:f,tags:v}=t.doc.schema;if(v.some(p)||f!=null&&f.some(p))return Cl(i,t)}return s?m:to(m,c,Cf,no(t,!1))}function ai(e,t,n,l){const{implicitKey:a,inFlow:i}=t,r=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:s}=e;s!==le.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(s=le.QUOTE_DOUBLE);const c=u=>{switch(u){case le.BLOCK_FOLDED:case le.BLOCK_LITERAL:return a||i?Cl(r.value,t):er(r,t,n,l);case le.QUOTE_DOUBLE:return Na(r.value,t);case le.QUOTE_SINGLE:return Xs(r.value,t);case le.PLAIN:return $h(r,t,n,l);default:return null}};let d=c(s);if(d===null){const{defaultKeyType:u,defaultStringType:m}=t.options,p=a&&u||m;if(d=c(p),d===null)throw new Error(`Unsupported default string type ${p}`)}return d}function Sf(e,t){const n=Object.assign({blockQuote:!0,commentString:Uh,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let l;switch(n.collectionStyle){case"block":l=!1;break;case"flow":l=!0;break;default:l=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?" ":"",indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",inFlow:l,options:n}}function Hh(e,t){var a;if(t.tag){const i=e.filter(r=>r.tag===t.tag);if(i.length>0)return i.find(r=>r.format===t.format)??i[0]}let n,l;if(me(t)){l=t.value;let i=e.filter(r=>{var s;return(s=r.identify)==null?void 0:s.call(r,l)});if(i.length>1){const r=i.filter(s=>s.test);r.length>0&&(i=r)}n=i.find(r=>r.format===t.format)??i.find(r=>!r.format)}else l=t,n=e.find(i=>i.nodeClass&&l instanceof i.nodeClass);if(!n){const i=((a=l==null?void 0:l.constructor)==null?void 0:a.name)??(l===null?"null":typeof l);throw new Error(`Tag not resolved for ${i} value`)}return n}function zh(e,t,{anchors:n,doc:l}){if(!l.directives)return"";const a=[],i=(me(e)||ve(e))&&e.anchor;i&&hf(i)&&(n.add(i),a.push(`&${i}`));const r=e.tag??(t.default?null:t.tag);return r&&a.push(l.directives.tagString(r)),a.join(" ")}function Bl(e,t,n,l){var c;if(xe(e))return e.toString(t,n,l);if(Ln(e)){if(t.doc.directives)return e.toString(t);if((c=t.resolvedAliases)!=null&&c.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let a;const i=Ce(e)?e:t.doc.createNode(e,{onTagObj:d=>a=d});a??(a=Hh(t.doc.schema.tags,i));const r=zh(i,a,t);r.length>0&&(t.indentAtStart=(t.indentAtStart??0)+r.length+1);const s=typeof a.stringify=="function"?a.stringify(i,t,n,l):me(i)?ai(i,t,n,l):i.toString(t,n,l);return r?me(i)||s[0]==="{"||s[0]==="["?`${r} ${s}`:`${r}
${t.indent}${s}`:s}function Kh({key:e,value:t},n,l,a){const{allNullValues:i,doc:r,indent:s,indentStep:c,options:{commentString:d,indentSeq:u,simpleKeys:m}}=n;let p=Ce(e)&&e.comment||null;if(m){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(ve(e)||!Ce(e)&&typeof e=="object"){const w="With simple keys, collection cannot be used as a key value";throw new Error(w)}}let f=!m&&(!e||p&&t==null&&!n.inFlow||ve(e)||(me(e)?e.type===le.BLOCK_FOLDED||e.type===le.BLOCK_LITERAL:typeof e=="object"));n=Object.assign({},n,{allNullValues:!1,implicitKey:!f&&(m||!i),indent:s+c});let v=!1,b=!1,_=Bl(e,n,()=>v=!0,()=>b=!0);if(!f&&!n.inFlow&&_.length>1024){if(m)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(n.inFlow){if(i||t==null)return v&&l&&l(),_===""?"?":f?`? ${_}`:_}else if(i&&!m||t==null&&f)return _=`? ${_}`,p&&!v?_+=Bn(_,n.indent,d(p)):b&&a&&a(),_;v&&(p=null),f?(p&&(_+=Bn(_,n.indent,d(p))),_=`? ${_}
${s}:`):(_=`${_}:`,p&&(_+=Bn(_,n.indent,d(p))));let g,y,h;Ce(t)?(g=!!t.spaceBefore,y=t.commentBefore,h=t.comment):(g=!1,y=null,h=null,t&&typeof t=="object"&&(t=r.createNode(t))),n.implicitKey=!1,!f&&!p&&me(t)&&(n.indentAtStart=_.length+1),b=!1,!u&&c.length>=2&&!n.inFlow&&!f&&Hl(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let S=!1;const k=Bl(t,n,()=>S=!0,()=>b=!0);let P=" ";if(p||g||y){if(P=g?`
`:"",y){const w=d(y);P+=`
${qt(w,n.indent)}`}k===""&&!n.inFlow?P===`
`&&(P=`

`):P+=`
${n.indent}`}else if(!f&&ve(t)){const w=k[0],L=k.indexOf(`
`),U=L!==-1,I=n.inFlow??t.flow??t.items.length===0;if(U||!I){let M=!1;if(U&&(w==="&"||w==="!")){let E=k.indexOf(" ");w==="&"&&E!==-1&&E<L&&k[E+1]==="!"&&(E=k.indexOf(" ",E+1)),(E===-1||L<E)&&(M=!0)}M||(P=`
${n.indent}`)}}else(k===""||k[0]===`
`)&&(P="");return _+=P+k,n.inFlow?S&&l&&l():h&&!S?_+=Bn(_,n.indent,d(h)):b&&a&&a(),_}function Lf(e,t){(e==="debug"||e==="warn")&&console.warn(t)}const Ei="<<",Wt={identify:e=>e===Ei||typeof e=="symbol"&&e.description===Ei,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new le(Symbol(Ei)),{addToJSMap:kf}),stringify:()=>Ei},Qh=(e,t)=>(Wt.identify(t)||me(t)&&(!t.type||t.type===le.PLAIN)&&Wt.identify(t.value))&&(e==null?void 0:e.doc.schema.tags.some(n=>n.tag===Wt.tag&&n.default));function kf(e,t,n){if(n=e&&Ln(n)?n.resolve(e.doc):n,Hl(n))for(const l of n.items)Ko(e,t,l);else if(Array.isArray(n))for(const l of n)Ko(e,t,l);else Ko(e,t,n)}function Ko(e,t,n){const l=e&&Ln(n)?n.resolve(e.doc):n;if(!$l(l))throw new Error("Merge sources must be maps or map aliases");const a=l.toJSON(null,e,Map);for(const[i,r]of a)t instanceof Map?t.has(i)||t.set(i,r):t instanceof Set?t.add(i):Object.prototype.hasOwnProperty.call(t,i)||Object.defineProperty(t,i,{value:r,writable:!0,enumerable:!0,configurable:!0});return t}function Df(e,t,{key:n,value:l}){if(Ce(n)&&n.addToJSMap)n.addToJSMap(e,t,l);else if(Qh(e,n))kf(e,t,l);else{const a=yt(n,"",e);if(t instanceof Map)t.set(a,yt(l,a,e));else if(t instanceof Set)t.add(a);else{const i=Yh(n,a,e),r=yt(l,i,e);i in t?Object.defineProperty(t,i,{value:r,writable:!0,enumerable:!0,configurable:!0}):t[i]=r}}return t}function Yh(e,t,n){if(t===null)return"";if(typeof t!="object")return String(t);if(Ce(e)&&(n!=null&&n.doc)){const l=Sf(n.doc,{});l.anchors=new Set;for(const i of n.anchors.keys())l.anchors.add(i.anchor);l.inFlow=!0,l.inStringifyKey=!0;const a=e.toString(l);if(!n.mapKeyWarned){let i=JSON.stringify(a);i.length>40&&(i=i.substring(0,36)+'..."'),Lf(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return a}return JSON.stringify(t)}function nd(e,t,n){const l=Qa(e,void 0,n),a=Qa(t,void 0,n);return new Ue(l,a)}class Ue{constructor(t,n=null){Object.defineProperty(this,ht,{value:mf}),this.key=t,this.value=n}clone(t){let{key:n,value:l}=this;return Ce(n)&&(n=n.clone(t)),Ce(l)&&(l=l.clone(t)),new Ue(n,l)}toJSON(t,n){const l=n!=null&&n.mapAsMap?new Map:{};return Df(n,l,this)}toString(t,n,l){return t!=null&&t.doc?Kh(this,t,n,l):JSON.stringify(this)}}function Tf(e,t,n){return(t.inFlow??e.flow?Xh:Jh)(e,t,n)}function Jh({comment:e,items:t},n,{blockItemPrefix:l,flowChars:a,itemIndent:i,onChompKeep:r,onComment:s}){const{indent:c,options:{commentString:d}}=n,u=Object.assign({},n,{indent:i,type:null});let m=!1;const p=[];for(let v=0;v<t.length;++v){const b=t[v];let _=null;if(Ce(b))!m&&b.spaceBefore&&p.push(""),Er(n,p,b.commentBefore,m),b.comment&&(_=b.comment);else if(xe(b)){const y=Ce(b.key)?b.key:null;y&&(!m&&y.spaceBefore&&p.push(""),Er(n,p,y.commentBefore,m))}m=!1;let g=Bl(b,u,()=>_=null,()=>m=!0);_&&(g+=Bn(g,i,d(_))),m&&_&&(m=!1),p.push(l+g)}let f;if(p.length===0)f=a.start+a.end;else{f=p[0];for(let v=1;v<p.length;++v){const b=p[v];f+=b?`
${c}${b}`:`
`}}return e?(f+=`
`+qt(d(e),c),s&&s()):m&&r&&r(),f}function Xh({items:e},t,{flowChars:n,itemIndent:l}){const{indent:a,indentStep:i,flowCollectionPadding:r,options:{commentString:s}}=t;l+=i;const c=Object.assign({},t,{indent:l,inFlow:!0,type:null});let d=!1,u=0;const m=[];for(let v=0;v<e.length;++v){const b=e[v];let _=null;if(Ce(b))b.spaceBefore&&m.push(""),Er(t,m,b.commentBefore,!1),b.comment&&(_=b.comment);else if(xe(b)){const y=Ce(b.key)?b.key:null;y&&(y.spaceBefore&&m.push(""),Er(t,m,y.commentBefore,!1),y.comment&&(d=!0));const h=Ce(b.value)?b.value:null;h?(h.comment&&(_=h.comment),h.commentBefore&&(d=!0)):b.value==null&&(y!=null&&y.comment)&&(_=y.comment)}_&&(d=!0);let g=Bl(b,c,()=>_=null);v<e.length-1&&(g+=","),_&&(g+=Bn(g,l,s(_))),!d&&(m.length>u||g.includes(`
`))&&(d=!0),m.push(g),u=m.length}const{start:p,end:f}=n;if(m.length===0)return p+f;if(!d){const v=m.reduce((b,_)=>b+_.length+2,2);d=t.options.lineWidth>0&&v>t.options.lineWidth}if(d){let v=p;for(const b of m)v+=b?`
${i}${a}${b}`:`
`;return`${v}
${a}${f}`}else return`${p}${r}${m.join(" ")}${r}${f}`}function Er({indent:e,options:{commentString:t}},n,l,a){if(l&&a&&(l=l.replace(/^\n+/,"")),l){const i=qt(t(l),e);n.push(i.trimStart())}}function On(e,t){const n=me(t)?t.value:t;for(const l of e)if(xe(l)&&(l.key===t||l.key===n||me(l.key)&&l.key.value===n))return l}class it extends wf{static get tagName(){return"tag:yaml.org,2002:map"}constructor(t){super(hn,t),this.items=[]}static from(t,n,l){const{keepUndefined:a,replacer:i}=l,r=new this(t),s=(c,d)=>{if(typeof i=="function")d=i.call(n,c,d);else if(Array.isArray(i)&&!i.includes(c))return;(d!==void 0||a)&&r.items.push(nd(c,d,l))};if(n instanceof Map)for(const[c,d]of n)s(c,d);else if(n&&typeof n=="object")for(const c of Object.keys(n))s(c,n[c]);return typeof t.sortMapEntries=="function"&&r.items.sort(t.sortMapEntries),r}add(t,n){var r;let l;xe(t)?l=t:!t||typeof t!="object"||!("key"in t)?l=new Ue(t,t==null?void 0:t.value):l=new Ue(t.key,t.value);const a=On(this.items,l.key),i=(r=this.schema)==null?void 0:r.sortMapEntries;if(a){if(!n)throw new Error(`Key ${l.key} already set`);me(a.value)&&vf(l.value)?a.value.value=l.value:a.value=l.value}else if(i){const s=this.items.findIndex(c=>i(l,c)<0);s===-1?this.items.push(l):this.items.splice(s,0,l)}else this.items.push(l)}delete(t){const n=On(this.items,t);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(t,n){const l=On(this.items,t),a=l==null?void 0:l.value;return(!n&&me(a)?a.value:a)??void 0}has(t){return!!On(this.items,t)}set(t,n){this.add(new Ue(t,n),!0)}toJSON(t,n,l){const a=l?new l:n!=null&&n.mapAsMap?new Map:{};n!=null&&n.onCreate&&n.onCreate(a);for(const i of this.items)Df(n,a,i);return a}toString(t,n,l){if(!t)return JSON.stringify(this);for(const a of this.items)if(!xe(a))throw new Error(`Map items must all be pairs; found ${JSON.stringify(a)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),Tf(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:l,onComment:n})}}const zl={collection:"map",default:!0,nodeClass:it,tag:"tag:yaml.org,2002:map",resolve(e,t){return $l(e)||t("Expected a mapping for this tag"),e},createNode:(e,t,n)=>it.from(e,t,n)};class vn extends wf{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(t){super(Wl,t),this.items=[]}add(t){this.items.push(t)}delete(t){const n=Pi(t);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(t,n){const l=Pi(t);if(typeof l!="number")return;const a=this.items[l];return!n&&me(a)?a.value:a}has(t){const n=Pi(t);return typeof n=="number"&&n<this.items.length}set(t,n){const l=Pi(t);if(typeof l!="number")throw new Error(`Expected a valid index, not ${t}.`);const a=this.items[l];me(a)&&vf(n)?a.value=n:this.items[l]=n}toJSON(t,n){const l=[];n!=null&&n.onCreate&&n.onCreate(l);let a=0;for(const i of this.items)l.push(yt(i,String(a++),n));return l}toString(t,n,l){return t?Tf(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:l,onComment:n}):JSON.stringify(this)}static from(t,n,l){const{replacer:a}=l,i=new this(t);if(n&&Symbol.iterator in Object(n)){let r=0;for(let s of n){if(typeof a=="function"){const c=n instanceof Set?s:String(r++);s=a.call(n,c,s)}i.items.push(Qa(s,void 0,l))}}return i}}function Pi(e){let t=me(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}const Kl={collection:"seq",default:!0,nodeClass:vn,tag:"tag:yaml.org,2002:seq",resolve(e,t){return Hl(e)||t("Expected a sequence for this tag"),e},createNode:(e,t,n)=>vn.from(e,t,n)},ao={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,n,l){return t=Object.assign({actualString:!0},t),ai(e,t,n,l)}},io={identify:e=>e==null,createNode:()=>new le(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new le(null),stringify:({source:e},t)=>typeof e=="string"&&io.test.test(e)?e:t.options.nullStr},ld={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new le(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},n){if(e&&ld.test.test(e)){const l=e[0]==="t"||e[0]==="T";if(t===l)return e}return t?n.options.trueStr:n.options.falseStr}};function Dt({format:e,minFractionDigits:t,tag:n,value:l}){if(typeof l=="bigint")return String(l);const a=typeof l=="number"?l:Number(l);if(!isFinite(a))return isNaN(a)?".nan":a<0?"-.inf":".inf";let i=JSON.stringify(l);if(!e&&t&&(!n||n==="tag:yaml.org,2002:float")&&/^\d/.test(i)){let r=i.indexOf(".");r<0&&(r=i.length,i+=".");let s=t-(i.length-r-1);for(;s-- >0;)i+="0"}return i}const Ef={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Dt},Pf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Dt(e)}},Nf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new le(parseFloat(e)),n=e.indexOf(".");return n!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-n-1),t},stringify:Dt},ro=e=>typeof e=="bigint"||Number.isInteger(e),ad=(e,t,n,{intAsBigInt:l})=>l?BigInt(e):parseInt(e.substring(t),n);function Af(e,t,n){const{value:l}=e;return ro(l)&&l>=0?n+l.toString(t):Dt(e)}const Vf={identify:e=>ro(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,n)=>ad(e,2,8,n),stringify:e=>Af(e,8,"0o")},If={identify:ro,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>ad(e,0,10,n),stringify:Dt},Rf={identify:e=>ro(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>ad(e,2,16,n),stringify:e=>Af(e,16,"0x")},Zh=[zl,Kl,ao,io,ld,Vf,If,Rf,Ef,Pf,Nf];function Pu(e){return typeof e=="bigint"||Number.isInteger(e)}const Ni=({value:e})=>JSON.stringify(e),e0=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Ni},{identify:e=>e==null,createNode:()=>new le(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ni},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:Ni},{identify:Pu,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>Pu(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Ni}],t0={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},n0=[zl,Kl].concat(e0,t0),id={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof atob=="function"){const n=atob(e.replace(/[\n\r]/g,"")),l=new Uint8Array(n.length);for(let a=0;a<n.length;++a)l[a]=n.charCodeAt(a);return l}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:n},l,a,i){if(!n)return"";const r=n;let s;if(typeof btoa=="function"){let c="";for(let d=0;d<r.length;++d)c+=String.fromCharCode(r[d]);s=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t??(t=le.BLOCK_LITERAL),t!==le.QUOTE_DOUBLE){const c=Math.max(l.options.lineWidth-l.indent.length,l.options.minContentWidth),d=Math.ceil(s.length/c),u=new Array(d);for(let m=0,p=0;m<d;++m,p+=c)u[m]=s.substr(p,c);s=u.join(t===le.BLOCK_LITERAL?`
`:" ")}return ai({comment:e,type:t,value:s},l,a,i)}};function Mf(e,t){if(Hl(e))for(let n=0;n<e.items.length;++n){let l=e.items[n];if(!xe(l)){if($l(l)){l.items.length>1&&t("Each pair must have its own sequence indicator");const a=l.items[0]||new Ue(new le(null));if(l.commentBefore&&(a.key.commentBefore=a.key.commentBefore?`${l.commentBefore}
${a.key.commentBefore}`:l.commentBefore),l.comment){const i=a.value??a.key;i.comment=i.comment?`${l.comment}
${i.comment}`:l.comment}l=a}e.items[n]=xe(l)?l:new Ue(l)}}else t("Expected a sequence for this tag");return e}function Gf(e,t,n){const{replacer:l}=n,a=new vn(e);a.tag="tag:yaml.org,2002:pairs";let i=0;if(t&&Symbol.iterator in Object(t))for(let r of t){typeof l=="function"&&(r=l.call(t,String(i++),r));let s,c;if(Array.isArray(r))if(r.length===2)s=r[0],c=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const d=Object.keys(r);if(d.length===1)s=d[0],c=r[s];else throw new TypeError(`Expected tuple with one key, not ${d.length} keys`)}else s=r;a.items.push(nd(s,c,n))}return a}const rd={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Mf,createNode:Gf};class Pl extends vn{constructor(){super(),this.add=it.prototype.add.bind(this),this.delete=it.prototype.delete.bind(this),this.get=it.prototype.get.bind(this),this.has=it.prototype.has.bind(this),this.set=it.prototype.set.bind(this),this.tag=Pl.tag}toJSON(t,n){if(!n)return super.toJSON(t);const l=new Map;n!=null&&n.onCreate&&n.onCreate(l);for(const a of this.items){let i,r;if(xe(a)?(i=yt(a.key,"",n),r=yt(a.value,i,n)):i=yt(a,"",n),l.has(i))throw new Error("Ordered maps must not include duplicate keys");l.set(i,r)}return l}static from(t,n,l){const a=Gf(t,n,l),i=new this;return i.items=a.items,i}}Pl.tag="tag:yaml.org,2002:omap";const od={collection:"seq",identify:e=>e instanceof Map,nodeClass:Pl,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const n=Mf(e,t),l=[];for(const{key:a}of n.items)me(a)&&(l.includes(a.value)?t(`Ordered maps must not include duplicate keys: ${a.value}`):l.push(a.value));return Object.assign(new Pl,n)},createNode:(e,t,n)=>Pl.from(e,t,n)};function jf({value:e,source:t},n){return t&&(e?Bf:Of).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}const Bf={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new le(!0),stringify:jf},Of={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new le(!1),stringify:jf},l0={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Dt},a0={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Dt(e)}},i0={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new le(parseFloat(e.replace(/_/g,""))),n=e.indexOf(".");if(n!==-1){const l=e.substring(n+1).replace(/_/g,"");l[l.length-1]==="0"&&(t.minFractionDigits=l.length)}return t},stringify:Dt},ii=e=>typeof e=="bigint"||Number.isInteger(e);function oo(e,t,n,{intAsBigInt:l}){const a=e[0];if((a==="-"||a==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),l){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const r=BigInt(e);return a==="-"?BigInt(-1)*r:r}const i=parseInt(e,n);return a==="-"?-1*i:i}function sd(e,t,n){const{value:l}=e;if(ii(l)){const a=l.toString(t);return l<0?"-"+n+a.substr(1):n+a}return Dt(e)}const r0={identify:ii,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>oo(e,2,2,n),stringify:e=>sd(e,2,"0b")},o0={identify:ii,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>oo(e,1,8,n),stringify:e=>sd(e,8,"0")},s0={identify:ii,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>oo(e,0,10,n),stringify:Dt},c0={identify:ii,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>oo(e,2,16,n),stringify:e=>sd(e,16,"0x")};class Nl extends it{constructor(t){super(t),this.tag=Nl.tag}add(t){let n;xe(t)?n=t:t&&typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?n=new Ue(t.key,null):n=new Ue(t,null),On(this.items,n.key)||this.items.push(n)}get(t,n){const l=On(this.items,t);return!n&&xe(l)?me(l.key)?l.key.value:l.key:l}set(t,n){if(typeof n!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);const l=On(this.items,t);l&&!n?this.items.splice(this.items.indexOf(l),1):!l&&n&&this.items.push(new Ue(t))}toJSON(t,n){return super.toJSON(t,n,Set)}toString(t,n,l){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),n,l);throw new Error("Set items must all have null values")}static from(t,n,l){const{replacer:a}=l,i=new this(t);if(n&&Symbol.iterator in Object(n))for(let r of n)typeof a=="function"&&(r=a.call(n,r,r)),i.items.push(nd(r,null,l));return i}}Nl.tag="tag:yaml.org,2002:set";const cd={collection:"map",identify:e=>e instanceof Set,nodeClass:Nl,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,n)=>Nl.from(e,t,n),resolve(e,t){if($l(e)){if(e.hasAllNullValues(!0))return Object.assign(new Nl,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function dd(e,t){const n=e[0],l=n==="-"||n==="+"?e.substring(1):e,a=r=>t?BigInt(r):Number(r),i=l.replace(/_/g,"").split(":").reduce((r,s)=>r*a(60)+a(s),a(0));return n==="-"?a(-1)*i:i}function Ff(e){let{value:t}=e,n=r=>r;if(typeof t=="bigint")n=r=>BigInt(r);else if(isNaN(t)||!isFinite(t))return Dt(e);let l="";t<0&&(l="-",t*=n(-1));const a=n(60),i=[t%a];return t<60?i.unshift(0):(t=(t-i[0])/a,i.unshift(t%a),t>=60&&(t=(t-i[0])/a,i.unshift(t))),l+i.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const qf={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>dd(e,n),stringify:Ff},Uf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>dd(e,!1),stringify:Ff},so={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(so.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,n,l,a,i,r,s]=t.map(Number),c=t[7]?Number((t[7]+"00").substr(1,3)):0;let d=Date.UTC(n,l-1,a,i||0,r||0,s||0,c);const u=t[8];if(u&&u!=="Z"){let m=dd(u,!1);Math.abs(m)<30&&(m*=60),d-=6e4*m}return new Date(d)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Nu=[zl,Kl,ao,io,Bf,Of,r0,o0,s0,c0,l0,a0,i0,id,Wt,od,rd,cd,qf,Uf,so],Au=new Map([["core",Zh],["failsafe",[zl,Kl,ao]],["json",n0],["yaml11",Nu],["yaml-1.1",Nu]]),Vu={binary:id,bool:ld,float:Nf,floatExp:Pf,floatNaN:Ef,floatTime:Uf,int:If,intHex:Rf,intOct:Vf,intTime:qf,map:zl,merge:Wt,null:io,omap:od,pairs:rd,seq:Kl,set:cd,timestamp:so},d0={"tag:yaml.org,2002:binary":id,"tag:yaml.org,2002:merge":Wt,"tag:yaml.org,2002:omap":od,"tag:yaml.org,2002:pairs":rd,"tag:yaml.org,2002:set":cd,"tag:yaml.org,2002:timestamp":so};function Qo(e,t,n){const l=Au.get(t);if(l&&!e)return n&&!l.includes(Wt)?l.concat(Wt):l.slice();let a=l;if(!a)if(Array.isArray(e))a=[];else{const i=Array.from(Au.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${i} or define customTags array`)}if(Array.isArray(e))for(const i of e)a=a.concat(i);else typeof e=="function"&&(a=e(a.slice()));return n&&(a=a.concat(Wt)),a.reduce((i,r)=>{const s=typeof r=="string"?Vu[r]:r;if(!s){const c=JSON.stringify(r),d=Object.keys(Vu).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${d}`)}return i.includes(s)||i.push(s),i},[])}const u0=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class co{constructor({compat:t,customTags:n,merge:l,resolveKnownTags:a,schema:i,sortMapEntries:r,toStringDefaults:s}){this.compat=Array.isArray(t)?Qo(t,"compat"):t?Qo(null,t):null,this.name=typeof i=="string"&&i||"core",this.knownTags=a?d0:{},this.tags=Qo(n,this.name,l),this.toStringOptions=s??null,Object.defineProperty(this,hn,{value:zl}),Object.defineProperty(this,Rt,{value:ao}),Object.defineProperty(this,Wl,{value:Kl}),this.sortMapEntries=typeof r=="function"?r:r===!0?u0:null}clone(){const t=Object.create(co.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function m0(e,t){var c;const n=[];let l=t.directives===!0;if(t.directives!==!1&&e.directives){const d=e.directives.toString(e);d?(n.push(d),l=!0):e.directives.docStart&&(l=!0)}l&&n.push("---");const a=Sf(e,t),{commentString:i}=a.options;if(e.commentBefore){n.length!==1&&n.unshift("");const d=i(e.commentBefore);n.unshift(qt(d,""))}let r=!1,s=null;if(e.contents){if(Ce(e.contents)){if(e.contents.spaceBefore&&l&&n.push(""),e.contents.commentBefore){const m=i(e.contents.commentBefore);n.push(qt(m,""))}a.forceBlockIndent=!!e.comment,s=e.contents.comment}const d=s?void 0:()=>r=!0;let u=Bl(e.contents,a,()=>s=null,d);s&&(u+=Bn(u,"",i(s))),(u[0]==="|"||u[0]===">")&&n[n.length-1]==="---"?n[n.length-1]=`--- ${u}`:n.push(u)}else n.push(Bl(e.contents,a));if((c=e.directives)!=null&&c.docEnd)if(e.comment){const d=i(e.comment);d.includes(`
`)?(n.push("..."),n.push(qt(d,""))):n.push(`... ${d}`)}else n.push("...");else{let d=e.comment;d&&r&&(d=d.replace(/^\n+/,"")),d&&((!r||s)&&n[n.length-1]!==""&&n.push(""),n.push(qt(i(d),"")))}return n.join(`
`)+`
`}class Ql{constructor(t,n,l){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ht,{value:Ys});let a=null;typeof n=="function"||Array.isArray(n)?a=n:l===void 0&&n&&(l=n,n=void 0);const i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},l);this.options=i;let{version:r}=i;l!=null&&l._directives?(this.directives=l._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new Ke({version:r}),this.setSchema(r,l),this.contents=t===void 0?null:this.createNode(t,a,l)}clone(){const t=Object.create(Ql.prototype,{[ht]:{value:Ys}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=Ce(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){il(this.contents)&&this.contents.add(t)}addIn(t,n){il(this.contents)&&this.contents.addIn(t,n)}createAlias(t,n){if(!t.anchor){const l=xf(this);t.anchor=!n||l.has(n)?_f(n||"a",l):n}return new eo(t.anchor)}createNode(t,n,l){let a;if(typeof n=="function")t=n.call({"":t},"",t),a=n;else if(Array.isArray(n)){const _=y=>typeof y=="number"||y instanceof String||y instanceof Number,g=n.filter(_).map(String);g.length>0&&(n=n.concat(g)),a=n}else l===void 0&&n&&(l=n,n=void 0);const{aliasDuplicateObjects:i,anchorPrefix:r,flow:s,keepUndefined:c,onTagObj:d,tag:u}=l??{},{onAnchor:m,setAnchors:p,sourceObjects:f}=Oh(this,r||"a"),v={aliasDuplicateObjects:i??!0,keepUndefined:c??!1,onAnchor:m,onTagObj:d,replacer:a,schema:this.schema,sourceObjects:f},b=Qa(t,u,v);return s&&ve(b)&&(b.flow=!0),p(),b}createPair(t,n,l={}){const a=this.createNode(t,null,l),i=this.createNode(n,null,l);return new Ue(a,i)}delete(t){return il(this.contents)?this.contents.delete(t):!1}deleteIn(t){return _a(t)?this.contents==null?!1:(this.contents=null,!0):il(this.contents)?this.contents.deleteIn(t):!1}get(t,n){return ve(this.contents)?this.contents.get(t,n):void 0}getIn(t,n){return _a(t)?!n&&me(this.contents)?this.contents.value:this.contents:ve(this.contents)?this.contents.getIn(t,n):void 0}has(t){return ve(this.contents)?this.contents.has(t):!1}hasIn(t){return _a(t)?this.contents!==void 0:ve(this.contents)?this.contents.hasIn(t):!1}set(t,n){this.contents==null?this.contents=Tr(this.schema,[t],n):il(this.contents)&&this.contents.set(t,n)}setIn(t,n){_a(t)?this.contents=n:this.contents==null?this.contents=Tr(this.schema,Array.from(t),n):il(this.contents)&&this.contents.setIn(t,n)}setSchema(t,n={}){typeof t=="number"&&(t=String(t));let l;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Ke({version:"1.1"}),l={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new Ke({version:t}),l={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,l=null;break;default:{const a=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${a}`)}}if(n.schema instanceof Object)this.schema=n.schema;else if(l)this.schema=new co(Object.assign(l,n));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:n,mapAsMap:l,maxAliasCount:a,onAnchor:i,reviver:r}={}){const s={anchors:new Map,doc:this,keep:!t,mapAsMap:l===!0,mapKeyWarned:!1,maxAliasCount:typeof a=="number"?a:100},c=yt(this.contents,n??"",s);if(typeof i=="function")for(const{count:d,res:u}of s.anchors.values())i(u,d);return typeof r=="function"?wl(r,{"":c},"",c):c}toJSON(t,n){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:n})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const n=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${n}`)}return m0(this,t)}}function il(e){if(ve(e))return!0;throw new Error("Expected a YAML collection as document contents")}class ud extends Error{constructor(t,n,l,a){super(),this.name=t,this.code=l,this.message=a,this.pos=n}}class Fn extends ud{constructor(t,n,l){super("YAMLParseError",t,n,l)}}class Wf extends ud{constructor(t,n,l){super("YAMLWarning",t,n,l)}}const Pr=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(s=>t.linePos(s));const{line:l,col:a}=n.linePos[0];n.message+=` at line ${l}, column ${a}`;let i=a-1,r=e.substring(t.lineStarts[l-1],t.lineStarts[l]).replace(/[\n\r]+$/,"");if(i>=60&&r.length>80){const s=Math.min(i-39,r.length-79);r="…"+r.substring(s),i-=s-1}if(r.length>80&&(r=r.substring(0,79)+"…"),l>1&&/^ *$/.test(r.substring(0,i))){let s=e.substring(t.lineStarts[l-2],t.lineStarts[l-1]);s.length>80&&(s=s.substring(0,79)+`…
`),r=s+r}if(/[^ ]/.test(r)){let s=1;const c=n.linePos[1];c&&c.line===l&&c.col>a&&(s=Math.max(1,Math.min(c.col-a,80-i)));const d=" ".repeat(i)+"^".repeat(s);n.message+=`:

${r}
${d}
`}};function Ol(e,{flow:t,indicator:n,next:l,offset:a,onError:i,parentIndent:r,startOnNewline:s}){let c=!1,d=s,u=s,m="",p="",f=!1,v=!1,b=null,_=null,g=null,y=null,h=null,S=null,k=null;for(const L of e)switch(v&&(L.type!=="space"&&L.type!=="newline"&&L.type!=="comma"&&i(L.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),v=!1),b&&(d&&L.type!=="comment"&&L.type!=="newline"&&i(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),b=null),L.type){case"space":!t&&(n!=="doc-start"||(l==null?void 0:l.type)!=="flow-collection")&&L.source.includes("	")&&(b=L),u=!0;break;case"comment":{u||i(L,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const U=L.source.substring(1)||" ";m?m+=p+U:m=U,p="",d=!1;break}case"newline":d?m?m+=L.source:(!S||n!=="seq-item-ind")&&(c=!0):p+=L.source,d=!0,f=!0,(_||g)&&(y=L),u=!0;break;case"anchor":_&&i(L,"MULTIPLE_ANCHORS","A node can have at most one anchor"),L.source.endsWith(":")&&i(L.offset+L.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=L,k??(k=L.offset),d=!1,u=!1,v=!0;break;case"tag":{g&&i(L,"MULTIPLE_TAGS","A node can have at most one tag"),g=L,k??(k=L.offset),d=!1,u=!1,v=!0;break}case n:(_||g)&&i(L,"BAD_PROP_ORDER",`Anchors and tags must be after the ${L.source} indicator`),S&&i(L,"UNEXPECTED_TOKEN",`Unexpected ${L.source} in ${t??"collection"}`),S=L,d=n==="seq-item-ind"||n==="explicit-key-ind",u=!1;break;case"comma":if(t){h&&i(L,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),h=L,d=!1,u=!1;break}default:i(L,"UNEXPECTED_TOKEN",`Unexpected ${L.type} token`),d=!1,u=!1}const P=e[e.length-1],w=P?P.offset+P.source.length:a;return v&&l&&l.type!=="space"&&l.type!=="newline"&&l.type!=="comma"&&(l.type!=="scalar"||l.source!=="")&&i(l.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),b&&(d&&b.indent<=r||(l==null?void 0:l.type)==="block-map"||(l==null?void 0:l.type)==="block-seq")&&i(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:h,found:S,spaceBefore:c,comment:m,hasNewline:f,anchor:_,tag:g,newlineAfterProp:y,end:w,start:k??w}}function Ya(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const n of t.start)if(n.type==="newline")return!0;if(t.sep){for(const n of t.sep)if(n.type==="newline")return!0}if(Ya(t.key)||Ya(t.value))return!0}return!1;default:return!0}}function ec(e,t,n){if((t==null?void 0:t.type)==="flow-collection"){const l=t.end[0];l.indent===e&&(l.source==="]"||l.source==="}")&&Ya(t)&&n(l,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function $f(e,t,n){const{uniqueKeys:l}=e.options;if(l===!1)return!1;const a=typeof l=="function"?l:(i,r)=>i===r||me(i)&&me(r)&&i.value===r.value;return t.some(i=>a(i.key,n))}const Iu="All mapping items must start at the same column";function p0({composeNode:e,composeEmptyNode:t},n,l,a,i){var u;const r=(i==null?void 0:i.nodeClass)??it,s=new r(n.schema);n.atRoot&&(n.atRoot=!1);let c=l.offset,d=null;for(const m of l.items){const{start:p,key:f,sep:v,value:b}=m,_=Ol(p,{indicator:"explicit-key-ind",next:f??(v==null?void 0:v[0]),offset:c,onError:a,parentIndent:l.indent,startOnNewline:!0}),g=!_.found;if(g){if(f&&(f.type==="block-seq"?a(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==l.indent&&a(c,"BAD_INDENT",Iu)),!_.anchor&&!_.tag&&!v){d=_.end,_.comment&&(s.comment?s.comment+=`
`+_.comment:s.comment=_.comment);continue}(_.newlineAfterProp||Ya(f))&&a(f??p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=_.found)==null?void 0:u.indent)!==l.indent&&a(c,"BAD_INDENT",Iu);n.atKey=!0;const y=_.end,h=f?e(n,f,_,a):t(n,y,p,null,_,a);n.schema.compat&&ec(l.indent,f,a),n.atKey=!1,$f(n,s.items,h)&&a(y,"DUPLICATE_KEY","Map keys must be unique");const S=Ol(v??[],{indicator:"map-value-ind",next:b,offset:h.range[2],onError:a,parentIndent:l.indent,startOnNewline:!f||f.type==="block-scalar"});if(c=S.end,S.found){g&&((b==null?void 0:b.type)==="block-map"&&!S.hasNewline&&a(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),n.options.strict&&_.start<S.found.offset-1024&&a(h.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const k=b?e(n,b,S,a):t(n,c,v,null,S,a);n.schema.compat&&ec(l.indent,b,a),c=k.range[2];const P=new Ue(h,k);n.options.keepSourceTokens&&(P.srcToken=m),s.items.push(P)}else{g&&a(h.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),S.comment&&(h.comment?h.comment+=`
`+S.comment:h.comment=S.comment);const k=new Ue(h);n.options.keepSourceTokens&&(k.srcToken=m),s.items.push(k)}}return d&&d<c&&a(d,"IMPOSSIBLE","Map comment with trailing content"),s.range=[l.offset,c,d??c],s}function f0({composeNode:e,composeEmptyNode:t},n,l,a,i){const r=(i==null?void 0:i.nodeClass)??vn,s=new r(n.schema);n.atRoot&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let c=l.offset,d=null;for(const{start:u,value:m}of l.items){const p=Ol(u,{indicator:"seq-item-ind",next:m,offset:c,onError:a,parentIndent:l.indent,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||m)m&&m.type==="block-seq"?a(p.end,"BAD_INDENT","All sequence items must start at the same column"):a(c,"MISSING_CHAR","Sequence item without - indicator");else{d=p.end,p.comment&&(s.comment=p.comment);continue}const f=m?e(n,m,p,a):t(n,p.end,u,null,p,a);n.schema.compat&&ec(l.indent,m,a),c=f.range[2],s.items.push(f)}return s.range=[l.offset,c,d??c],s}function ri(e,t,n,l){let a="";if(e){let i=!1,r="";for(const s of e){const{source:c,type:d}=s;switch(d){case"space":i=!0;break;case"comment":{n&&!i&&l(s,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=c.substring(1)||" ";a?a+=r+u:a=u,r="";break}case"newline":a&&(r+=c),i=!0;break;default:l(s,"UNEXPECTED_TOKEN",`Unexpected ${d} at node end`)}t+=c.length}}return{comment:a,offset:t}}const Yo="Block collections are not allowed within flow collections",Jo=e=>e&&(e.type==="block-map"||e.type==="block-seq");function y0({composeNode:e,composeEmptyNode:t},n,l,a,i){const r=l.start.source==="{",s=r?"flow map":"flow sequence",c=(i==null?void 0:i.nodeClass)??(r?it:vn),d=new c(n.schema);d.flow=!0;const u=n.atRoot;u&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let m=l.offset+l.start.source.length;for(let _=0;_<l.items.length;++_){const g=l.items[_],{start:y,key:h,sep:S,value:k}=g,P=Ol(y,{flow:s,indicator:"explicit-key-ind",next:h??(S==null?void 0:S[0]),offset:m,onError:a,parentIndent:l.indent,startOnNewline:!1});if(!P.found){if(!P.anchor&&!P.tag&&!S&&!k){_===0&&P.comma?a(P.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`):_<l.items.length-1&&a(P.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${s}`),P.comment&&(d.comment?d.comment+=`
`+P.comment:d.comment=P.comment),m=P.end;continue}!r&&n.options.strict&&Ya(h)&&a(h,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)P.comma&&a(P.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`);else if(P.comma||a(P.start,"MISSING_CHAR",`Missing , between ${s} items`),P.comment){let w="";e:for(const L of y)switch(L.type){case"comma":case"space":break;case"comment":w=L.source.substring(1);break e;default:break e}if(w){let L=d.items[d.items.length-1];xe(L)&&(L=L.value??L.key),L.comment?L.comment+=`
`+w:L.comment=w,P.comment=P.comment.substring(w.length+1)}}if(!r&&!S&&!P.found){const w=k?e(n,k,P,a):t(n,P.end,S,null,P,a);d.items.push(w),m=w.range[2],Jo(k)&&a(w.range,"BLOCK_IN_FLOW",Yo)}else{n.atKey=!0;const w=P.end,L=h?e(n,h,P,a):t(n,w,y,null,P,a);Jo(h)&&a(L.range,"BLOCK_IN_FLOW",Yo),n.atKey=!1;const U=Ol(S??[],{flow:s,indicator:"map-value-ind",next:k,offset:L.range[2],onError:a,parentIndent:l.indent,startOnNewline:!1});if(U.found){if(!r&&!P.found&&n.options.strict){if(S)for(const E of S){if(E===U.found)break;if(E.type==="newline"){a(E,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}P.start<U.found.offset-1024&&a(U.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else k&&("source"in k&&k.source&&k.source[0]===":"?a(k,"MISSING_CHAR",`Missing space after : in ${s}`):a(U.start,"MISSING_CHAR",`Missing , or : between ${s} items`));const I=k?e(n,k,U,a):U.found?t(n,U.end,S,null,U,a):null;I?Jo(k)&&a(I.range,"BLOCK_IN_FLOW",Yo):U.comment&&(L.comment?L.comment+=`
`+U.comment:L.comment=U.comment);const M=new Ue(L,I);if(n.options.keepSourceTokens&&(M.srcToken=g),r){const E=d;$f(n,E.items,L)&&a(w,"DUPLICATE_KEY","Map keys must be unique"),E.items.push(M)}else{const E=new it(n.schema);E.flow=!0,E.items.push(M);const q=(I??L).range;E.range=[L.range[0],q[1],q[2]],d.items.push(E)}m=I?I.range[2]:U.end}}const p=r?"}":"]",[f,...v]=l.end;let b=m;if(f&&f.source===p)b=f.offset+f.source.length;else{const _=s[0].toUpperCase()+s.substring(1),g=u?`${_} must end with a ${p}`:`${_} in block collection must be sufficiently indented and end with a ${p}`;a(m,u?"MISSING_CHAR":"BAD_INDENT",g),f&&f.source.length!==1&&v.unshift(f)}if(v.length>0){const _=ri(v,b,n.options.strict,a);_.comment&&(d.comment?d.comment+=`
`+_.comment:d.comment=_.comment),d.range=[l.offset,b,_.offset]}else d.range=[l.offset,b,b];return d}function Xo(e,t,n,l,a,i){const r=n.type==="block-map"?p0(e,t,n,l,i):n.type==="block-seq"?f0(e,t,n,l,i):y0(e,t,n,l,i),s=r.constructor;return a==="!"||a===s.tagName?(r.tag=s.tagName,r):(a&&(r.tag=a),r)}function g0(e,t,n,l,a){var p;const i=l.tag,r=i?t.directives.tagName(i.source,f=>a(i,"TAG_RESOLVE_FAILED",f)):null;if(n.type==="block-seq"){const{anchor:f,newlineAfterProp:v}=l,b=f&&i?f.offset>i.offset?f:i:f??i;b&&(!v||v.offset<b.offset)&&a(b,"MISSING_CHAR","Missing newline after block sequence props")}const s=n.type==="block-map"?"map":n.type==="block-seq"?"seq":n.start.source==="{"?"map":"seq";if(!i||!r||r==="!"||r===it.tagName&&s==="map"||r===vn.tagName&&s==="seq")return Xo(e,t,n,a,r);let c=t.schema.tags.find(f=>f.tag===r&&f.collection===s);if(!c){const f=t.schema.knownTags[r];if(f&&f.collection===s)t.schema.tags.push(Object.assign({},f,{default:!1})),c=f;else return f?a(i,"BAD_COLLECTION_TYPE",`${f.tag} used for ${s} collection, but expects ${f.collection??"scalar"}`,!0):a(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),Xo(e,t,n,a,r)}const d=Xo(e,t,n,a,r,c),u=((p=c.resolve)==null?void 0:p.call(c,d,f=>a(i,"TAG_RESOLVE_FAILED",f),t.options))??d,m=Ce(u)?u:new le(u);return m.range=d.range,m.tag=r,c!=null&&c.format&&(m.format=c.format),m}function Hf(e,t,n){const l=t.offset,a=b0(t,e.options.strict,n);if(!a)return{value:"",type:null,comment:"",range:[l,l,l]};const i=a.mode===">"?le.BLOCK_FOLDED:le.BLOCK_LITERAL,r=t.source?h0(t.source):[];let s=r.length;for(let b=r.length-1;b>=0;--b){const _=r[b][1];if(_===""||_==="\r")s=b;else break}if(s===0){const b=a.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let _=l+a.length;return t.source&&(_+=t.source.length),{value:b,type:i,comment:a.comment,range:[l,_,_]}}let c=t.indent+a.indent,d=t.offset+a.length,u=0;for(let b=0;b<s;++b){const[_,g]=r[b];if(g===""||g==="\r")a.indent===0&&_.length>c&&(c=_.length);else{_.length<c&&n(d+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),a.indent===0&&(c=_.length),u=b,c===0&&!e.atRoot&&n(d,"BAD_INDENT","Block scalar values in collections must be indented");break}d+=_.length+g.length+1}for(let b=r.length-1;b>=s;--b)r[b][0].length>c&&(s=b+1);let m="",p="",f=!1;for(let b=0;b<u;++b)m+=r[b][0].slice(c)+`
`;for(let b=u;b<s;++b){let[_,g]=r[b];d+=_.length+g.length+1;const y=g[g.length-1]==="\r";if(y&&(g=g.slice(0,-1)),g&&_.length<c){const S=`Block scalar lines must not be less indented than their ${a.indent?"explicit indentation indicator":"first line"}`;n(d-g.length-(y?2:1),"BAD_INDENT",S),_=""}i===le.BLOCK_LITERAL?(m+=p+_.slice(c)+g,p=`
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
`}const v=l+a.length+t.source.length;return{value:m,type:i,comment:a.comment,range:[l,v,v]}}function b0({offset:e,props:t},n,l){if(t[0].type!=="block-scalar-header")return l(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:a}=t[0],i=a[0];let r=0,s="",c=-1;for(let p=1;p<a.length;++p){const f=a[p];if(!s&&(f==="-"||f==="+"))s=f;else{const v=Number(f);!r&&v?r=v:c===-1&&(c=e+p)}}c!==-1&&l(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${a}`);let d=!1,u="",m=a.length;for(let p=1;p<t.length;++p){const f=t[p];switch(f.type){case"space":d=!0;case"newline":m+=f.source.length;break;case"comment":n&&!d&&l(f,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),m+=f.source.length,u=f.source.substring(1);break;case"error":l(f,"UNEXPECTED_TOKEN",f.message),m+=f.source.length;break;default:{const v=`Unexpected token in block scalar header: ${f.type}`;l(f,"UNEXPECTED_TOKEN",v);const b=f.source;b&&typeof b=="string"&&(m+=b.length)}}}return{mode:i,indent:r,chomp:s,comment:u,length:m}}function h0(e){const t=e.split(/\n( *)/),n=t[0],l=n.match(/^( *)/),i=[l!=null&&l[1]?[l[1],n.slice(l[1].length)]:["",n]];for(let r=1;r<t.length;r+=2)i.push([t[r],t[r+1]]);return i}function zf(e,t,n){const{offset:l,type:a,source:i,end:r}=e;let s,c;const d=(p,f,v)=>n(l+p,f,v);switch(a){case"scalar":s=le.PLAIN,c=x0(i,d);break;case"single-quoted-scalar":s=le.QUOTE_SINGLE,c=_0(i,d);break;case"double-quoted-scalar":s=le.QUOTE_DOUBLE,c=v0(i,d);break;default:return n(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${a}`),{value:"",type:null,comment:"",range:[l,l+i.length,l+i.length]}}const u=l+i.length,m=ri(r,u,t,n);return{value:c,type:s,comment:m.comment,range:[l,u,m.offset]}}function x0(e,t){let n="";switch(e[0]){case"	":n="a tab character";break;case",":n="flow indicator character ,";break;case"%":n="directive indicator character %";break;case"|":case">":{n=`block scalar indicator ${e[0]}`;break}case"@":case"`":{n=`reserved character ${e[0]}`;break}}return n&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${n}`),Kf(e)}function _0(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),Kf(e.slice(1,-1)).replace(/''/g,"'")}function Kf(e){let t,n;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),n=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let l=t.exec(e);if(!l)return e;let a=l[1],i=" ",r=t.lastIndex;for(n.lastIndex=r;l=n.exec(e);)l[1]===""?i===`
`?a+=i:i=`
`:(a+=i+l[1],i=" "),r=n.lastIndex;const s=/[ \t]*(.*)/sy;return s.lastIndex=r,l=s.exec(e),a+i+((l==null?void 0:l[1])??"")}function v0(e,t){let n="";for(let l=1;l<e.length-1;++l){const a=e[l];if(!(a==="\r"&&e[l+1]===`
`))if(a===`
`){const{fold:i,offset:r}=w0(e,l);n+=i,l=r}else if(a==="\\"){let i=e[++l];const r=C0[i];if(r)n+=r;else if(i===`
`)for(i=e[l+1];i===" "||i==="	";)i=e[++l+1];else if(i==="\r"&&e[l+1]===`
`)for(i=e[++l+1];i===" "||i==="	";)i=e[++l+1];else if(i==="x"||i==="u"||i==="U"){const s={x:2,u:4,U:8}[i];n+=S0(e,l+1,s,t),l+=s}else{const s=e.substr(l-1,2);t(l-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),n+=s}}else if(a===" "||a==="	"){const i=l;let r=e[l+1];for(;r===" "||r==="	";)r=e[++l+1];r!==`
`&&!(r==="\r"&&e[l+2]===`
`)&&(n+=l>i?e.slice(i,l+1):a)}else n+=a}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),n}function w0(e,t){let n="",l=e[t+1];for(;(l===" "||l==="	"||l===`
`||l==="\r")&&!(l==="\r"&&e[t+2]!==`
`);)l===`
`&&(n+=`
`),t+=1,l=e[t+1];return n||(n=" "),{fold:n,offset:t}}const C0={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function S0(e,t,n,l){const a=e.substr(t,n),r=a.length===n&&/^[0-9a-fA-F]+$/.test(a)?parseInt(a,16):NaN;if(isNaN(r)){const s=e.substr(t-2,n+2);return l(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),s}return String.fromCodePoint(r)}function Qf(e,t,n,l){const{value:a,type:i,comment:r,range:s}=t.type==="block-scalar"?Hf(e,t,l):zf(t,e.options.strict,l),c=n?e.directives.tagName(n.source,m=>l(n,"TAG_RESOLVE_FAILED",m)):null;let d;e.options.stringKeys&&e.atKey?d=e.schema[Rt]:c?d=L0(e.schema,a,c,n,l):t.type==="scalar"?d=k0(e,a,t,l):d=e.schema[Rt];let u;try{const m=d.resolve(a,p=>l(n??t,"TAG_RESOLVE_FAILED",p),e.options);u=me(m)?m:new le(m)}catch(m){const p=m instanceof Error?m.message:String(m);l(n??t,"TAG_RESOLVE_FAILED",p),u=new le(a)}return u.range=s,u.source=a,i&&(u.type=i),c&&(u.tag=c),d.format&&(u.format=d.format),r&&(u.comment=r),u}function L0(e,t,n,l,a){var s;if(n==="!")return e[Rt];const i=[];for(const c of e.tags)if(!c.collection&&c.tag===n)if(c.default&&c.test)i.push(c);else return c;for(const c of i)if((s=c.test)!=null&&s.test(t))return c;const r=e.knownTags[n];return r&&!r.collection?(e.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(a(l,"TAG_RESOLVE_FAILED",`Unresolved tag: ${n}`,n!=="tag:yaml.org,2002:str"),e[Rt])}function k0({atKey:e,directives:t,schema:n},l,a,i){const r=n.tags.find(s=>{var c;return(s.default===!0||e&&s.default==="key")&&((c=s.test)==null?void 0:c.test(l))})||n[Rt];if(n.compat){const s=n.compat.find(c=>{var d;return c.default&&((d=c.test)==null?void 0:d.test(l))})??n[Rt];if(r.tag!==s.tag){const c=t.tagString(r.tag),d=t.tagString(s.tag),u=`Value may be parsed as either ${c} or ${d}`;i(a,"TAG_RESOLVE_FAILED",u,!0)}}return r}function D0(e,t,n){if(t){n??(n=t.length);for(let l=n-1;l>=0;--l){let a=t[l];switch(a.type){case"space":case"comment":case"newline":e-=a.source.length;continue}for(a=t[++l];(a==null?void 0:a.type)==="space";)e+=a.source.length,a=t[++l];break}}return e}const T0={composeNode:Yf,composeEmptyNode:md};function Yf(e,t,n,l){const a=e.atKey,{spaceBefore:i,comment:r,anchor:s,tag:c}=n;let d,u=!0;switch(t.type){case"alias":d=E0(e,t,l),(s||c)&&l(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":d=Qf(e,t,c,l),s&&(d.anchor=s.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":d=g0(T0,e,t,n,l),s&&(d.anchor=s.source.substring(1));break;default:{const m=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;l(t,"UNEXPECTED_TOKEN",m),d=md(e,t.offset,void 0,null,n,l),u=!1}}return s&&d.anchor===""&&l(s,"BAD_ALIAS","Anchor cannot be an empty string"),a&&e.options.stringKeys&&(!me(d)||typeof d.value!="string"||d.tag&&d.tag!=="tag:yaml.org,2002:str")&&l(c??t,"NON_STRING_KEY","With stringKeys, all keys must be strings"),i&&(d.spaceBefore=!0),r&&(t.type==="scalar"&&t.source===""?d.comment=r:d.commentBefore=r),e.options.keepSourceTokens&&u&&(d.srcToken=t),d}function md(e,t,n,l,{spaceBefore:a,comment:i,anchor:r,tag:s,end:c},d){const u={type:"scalar",offset:D0(t,n,l),indent:-1,source:""},m=Qf(e,u,s,d);return r&&(m.anchor=r.source.substring(1),m.anchor===""&&d(r,"BAD_ALIAS","Anchor cannot be an empty string")),a&&(m.spaceBefore=!0),i&&(m.comment=i,m.range[2]=c),m}function E0({options:e},{offset:t,source:n,end:l},a){const i=new eo(n.substring(1));i.source===""&&a(t,"BAD_ALIAS","Alias cannot be an empty string"),i.source.endsWith(":")&&a(t+n.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=t+n.length,s=ri(l,r,e.strict,a);return i.range=[t,r,s.offset],s.comment&&(i.comment=s.comment),i}function P0(e,t,{offset:n,start:l,value:a,end:i},r){const s=Object.assign({_directives:t},e),c=new Ql(void 0,s),d={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},u=Ol(l,{indicator:"doc-start",next:a??(i==null?void 0:i[0]),offset:n,onError:r,parentIndent:0,startOnNewline:!0});u.found&&(c.directives.docStart=!0,a&&(a.type==="block-map"||a.type==="block-seq")&&!u.hasNewline&&r(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=a?Yf(d,a,u,r):md(d,u.end,l,null,u,r);const m=c.contents.range[2],p=ri(i,m,!1,r);return p.comment&&(c.comment=p.comment),c.range=[n,m,p.offset],c}function da(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:n}=e;return[t,t+(typeof n=="string"?n.length:1)]}function Ru(e){var a;let t="",n=!1,l=!1;for(let i=0;i<e.length;++i){const r=e[i];switch(r[0]){case"#":t+=(t===""?"":l?`

`:`
`)+(r.substring(1)||" "),n=!0,l=!1;break;case"%":((a=e[i+1])==null?void 0:a[0])!=="#"&&(i+=1),n=!1;break;default:n||(l=!0),n=!1}}return{comment:t,afterEmptyLine:l}}class pd{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(n,l,a,i)=>{const r=da(n);i?this.warnings.push(new Wf(r,l,a)):this.errors.push(new Fn(r,l,a))},this.directives=new Ke({version:t.version||"1.2"}),this.options=t}decorate(t,n){const{comment:l,afterEmptyLine:a}=Ru(this.prelude);if(l){const i=t.contents;if(n)t.comment=t.comment?`${t.comment}
${l}`:l;else if(a||t.directives.docStart||!i)t.commentBefore=l;else if(ve(i)&&!i.flow&&i.items.length>0){let r=i.items[0];xe(r)&&(r=r.key);const s=r.commentBefore;r.commentBefore=s?`${l}
${s}`:l}else{const r=i.commentBefore;i.commentBefore=r?`${l}
${r}`:l}}n?(Array.prototype.push.apply(t.errors,this.errors),Array.prototype.push.apply(t.warnings,this.warnings)):(t.errors=this.errors,t.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Ru(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,n=!1,l=-1){for(const a of t)yield*this.next(a);yield*this.end(n,l)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(n,l,a)=>{const i=da(t);i[0]+=n,this.onError(i,"BAD_DIRECTIVE",l,a)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const n=P0(this.options,this.directives,t,this.onError);this.atDirectives&&!n.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(n,!1),this.doc&&(yield this.doc),this.doc=n,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const n=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,l=new Fn(da(t),"UNEXPECTED_TOKEN",n);this.atDirectives||!this.doc?this.errors.push(l):this.doc.errors.push(l);break}case"doc-end":{if(!this.doc){const l="Unexpected doc-end without preceding document";this.errors.push(new Fn(da(t),"UNEXPECTED_TOKEN",l));break}this.doc.directives.docEnd=!0;const n=ri(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),n.comment){const l=this.doc.comment;this.doc.comment=l?`${l}
${n.comment}`:n.comment}this.doc.range[2]=n.offset;break}default:this.errors.push(new Fn(da(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,n=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const l=Object.assign({_directives:this.directives},this.options),a=new Ql(void 0,l);this.atDirectives&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),a.range=[0,n,n],this.decorate(a,!1),yield a}}}function N0(e,t=!0,n){if(e){const l=(a,i,r)=>{const s=typeof a=="number"?a:Array.isArray(a)?a[0]:a.offset;if(n)n(s,i,r);else throw new Fn([s,s+1],i,r)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return zf(e,t,l);case"block-scalar":return Hf({options:{strict:t}},e,l)}}return null}function A0(e,t){const{implicitKey:n=!1,indent:l,inFlow:a=!1,offset:i=-1,type:r="PLAIN"}=t,s=ai({type:r,value:e},{implicitKey:n,indent:l>0?" ".repeat(l):"",inFlow:a,options:{blockQuote:!0,lineWidth:-1}}),c=t.end??[{type:"newline",offset:-1,indent:l,source:`
`}];switch(s[0]){case"|":case">":{const d=s.indexOf(`
`),u=s.substring(0,d),m=s.substring(d+1)+`
`,p=[{type:"block-scalar-header",offset:i,indent:l,source:u}];return Jf(p,c)||p.push({type:"newline",offset:-1,indent:l,source:`
`}),{type:"block-scalar",offset:i,indent:l,props:p,source:m}}case'"':return{type:"double-quoted-scalar",offset:i,indent:l,source:s,end:c};case"'":return{type:"single-quoted-scalar",offset:i,indent:l,source:s,end:c};default:return{type:"scalar",offset:i,indent:l,source:s,end:c}}}function V0(e,t,n={}){let{afterKey:l=!1,implicitKey:a=!1,inFlow:i=!1,type:r}=n,s="indent"in e?e.indent:null;if(l&&typeof s=="number"&&(s+=2),!r)switch(e.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{const d=e.props[0];if(d.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r=d.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}const c=ai({type:r,value:t},{implicitKey:a||s===null,indent:s!==null&&s>0?" ".repeat(s):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":I0(e,c);break;case'"':Zo(e,c,"double-quoted-scalar");break;case"'":Zo(e,c,"single-quoted-scalar");break;default:Zo(e,c,"scalar")}}function I0(e,t){const n=t.indexOf(`
`),l=t.substring(0,n),a=t.substring(n+1)+`
`;if(e.type==="block-scalar"){const i=e.props[0];if(i.type!=="block-scalar-header")throw new Error("Invalid block scalar header");i.source=l,e.source=a}else{const{offset:i}=e,r="indent"in e?e.indent:-1,s=[{type:"block-scalar-header",offset:i,indent:r,source:l}];Jf(s,"end"in e?e.end:void 0)||s.push({type:"newline",offset:-1,indent:r,source:`
`});for(const c of Object.keys(e))c!=="type"&&c!=="offset"&&delete e[c];Object.assign(e,{type:"block-scalar",indent:r,props:s,source:a})}}function Jf(e,t){if(t)for(const n of t)switch(n.type){case"space":case"comment":e.push(n);break;case"newline":return e.push(n),!0}return!1}function Zo(e,t,n){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=n,e.source=t;break;case"block-scalar":{const l=e.props.slice(1);let a=t.length;e.props[0].type==="block-scalar-header"&&(a-=e.props[0].source.length);for(const i of l)i.offset+=a;delete e.props,Object.assign(e,{type:n,source:t,end:l});break}case"block-map":case"block-seq":{const a={type:"newline",offset:e.offset+t.length,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:n,source:t,end:[a]});break}default:{const l="indent"in e?e.indent:-1,a="end"in e&&Array.isArray(e.end)?e.end.filter(i=>i.type==="space"||i.type==="comment"||i.type==="newline"):[];for(const i of Object.keys(e))i!=="type"&&i!=="offset"&&delete e[i];Object.assign(e,{type:n,indent:l,source:t,end:a})}}}const R0=e=>"type"in e?Nr(e):tr(e);function Nr(e){switch(e.type){case"block-scalar":{let t="";for(const n of e.props)t+=Nr(n);return t+e.source}case"block-map":case"block-seq":{let t="";for(const n of e.items)t+=tr(n);return t}case"flow-collection":{let t=e.start.source;for(const n of e.items)t+=tr(n);for(const n of e.end)t+=n.source;return t}case"document":{let t=tr(e);if(e.end)for(const n of e.end)t+=n.source;return t}default:{let t=e.source;if("end"in e&&e.end)for(const n of e.end)t+=n.source;return t}}}function tr({start:e,key:t,sep:n,value:l}){let a="";for(const i of e)a+=i.source;if(t&&(a+=Nr(t)),n)for(const i of n)a+=i.source;return l&&(a+=Nr(l)),a}const tc=Symbol("break visit"),M0=Symbol("skip children"),Xf=Symbol("remove item");function Qn(e,t){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),Zf(Object.freeze([]),e,t)}Qn.BREAK=tc;Qn.SKIP=M0;Qn.REMOVE=Xf;Qn.itemAtPath=(e,t)=>{let n=e;for(const[l,a]of t){const i=n==null?void 0:n[l];if(i&&"items"in i)n=i.items[a];else return}return n};Qn.parentCollection=(e,t)=>{const n=Qn.itemAtPath(e,t.slice(0,-1)),l=t[t.length-1][0],a=n==null?void 0:n[l];if(a&&"items"in a)return a;throw new Error("Parent collection not found")};function Zf(e,t,n){let l=n(t,e);if(typeof l=="symbol")return l;for(const a of["key","value"]){const i=t[a];if(i&&"items"in i){for(let r=0;r<i.items.length;++r){const s=Zf(Object.freeze(e.concat([[a,r]])),i.items[r],n);if(typeof s=="number")r=s-1;else{if(s===tc)return tc;s===Xf&&(i.items.splice(r,1),r-=1)}}typeof l=="function"&&a==="key"&&(l=l(t,e))}}return typeof l=="function"?l(t,e):l}const uo="\uFEFF",mo="",po="",Ja="",G0=e=>!!e&&"items"in e,j0=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function B0(e){switch(e){case uo:return"<BOM>";case mo:return"<DOC>";case po:return"<FLOW_END>";case Ja:return"<SCALAR>";default:return JSON.stringify(e)}}function ey(e){switch(e){case uo:return"byte-order-mark";case mo:return"doc-mode";case po:return"flow-error-end";case Ja:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const O0=Object.freeze(Object.defineProperty({__proto__:null,BOM:uo,DOCUMENT:mo,FLOW_END:po,SCALAR:Ja,createScalarToken:A0,isCollection:G0,isScalar:j0,prettyToken:B0,resolveAsScalar:N0,setScalarValue:V0,stringify:R0,tokenType:ey,visit:Qn},Symbol.toStringTag,{value:"Module"}));function _t(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Mu=new Set("0123456789ABCDEFabcdef"),F0=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Ai=new Set(",[]{}"),q0=new Set(` ,[]{}
\r	`),es=e=>!e||q0.has(e);class ty{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,n=!1){if(t){if(typeof t!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null}this.atEnd=!n;let l=this.next??"stream";for(;l&&(n||this.hasChars(1));)l=yield*this.parseNext(l)}atLineEnd(){let t=this.pos,n=this.buffer[t];for(;n===" "||n==="	";)n=this.buffer[++t];return!n||n==="#"||n===`
`?!0:n==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let n=this.buffer[t];if(this.indentNext>0){let l=0;for(;n===" ";)n=this.buffer[++l+t];if(n==="\r"){const a=this.buffer[l+t+1];if(a===`
`||!a&&!this.atEnd)return t+l+1}return n===`
`||l>=this.indentNext||!n&&!this.atEnd?t+l:-1}if(n==="-"||n==="."){const l=this.buffer.substr(t,3);if((l==="---"||l==="...")&&_t(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===uo&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let n=t.length,l=t.indexOf("#");for(;l!==-1;){const i=t[l-1];if(i===" "||i==="	"){n=l-1;break}else l=t.indexOf("#",l+1)}for(;;){const i=t[n-1];if(i===" "||i==="	")n-=1;else break}const a=(yield*this.pushCount(n))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-a),this.pushNewline(),"stream"}if(this.atLineEnd()){const n=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-n),yield*this.pushNewline(),"stream"}return yield mo,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const n=this.peek(3);if((n==="---"||n==="...")&&_t(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,n==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!_t(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,n]=this.peek(2);if(!n&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&_t(n)){const l=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=l,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let n=yield*this.pushIndicators();switch(t[n]){case"#":yield*this.pushCount(t.length-n);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(es),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return n+=yield*this.parseBlockScalarHeader(),n+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-n),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,n,l=-1;do t=yield*this.pushNewline(),t>0?(n=yield*this.pushSpaces(!1),this.indentValue=l=n):n=0,n+=yield*this.pushSpaces(!0);while(t+n>0);const a=this.getLine();if(a===null)return this.setNext("flow");if((l!==-1&&l<this.indentNext&&a[0]!=="#"||l===0&&(a.startsWith("---")||a.startsWith("..."))&&_t(a[3]))&&!(l===this.indentNext-1&&this.flowLevel===1&&(a[0]==="]"||a[0]==="}")))return this.flowLevel=0,yield po,yield*this.parseLineStart();let i=0;for(;a[i]===",";)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),a[i]){case void 0:return"flow";case"#":return yield*this.pushCount(a.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(es),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||_t(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let n=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;n!==-1&&this.buffer[n+1]==="'";)n=this.buffer.indexOf("'",n+2);else for(;n!==-1;){let i=0;for(;this.buffer[n-1-i]==="\\";)i+=1;if(i%2===0)break;n=this.buffer.indexOf('"',n+1)}const l=this.buffer.substring(0,n);let a=l.indexOf(`
`,this.pos);if(a!==-1){for(;a!==-1;){const i=this.continueScalar(a+1);if(i===-1)break;a=l.indexOf(`
`,i)}a!==-1&&(n=a-(l[a-1]==="\r"?2:1))}if(n===-1){if(!this.atEnd)return this.setNext("quoted-scalar");n=this.buffer.length}return yield*this.pushToIndex(n+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const n=this.buffer[++t];if(n==="+")this.blockScalarKeep=!0;else if(n>"0"&&n<="9")this.blockScalarIndent=Number(n)-1;else if(n!=="-")break}return yield*this.pushUntil(n=>_t(n)||n==="#")}*parseBlockScalar(){let t=this.pos-1,n=0,l;e:for(let i=this.pos;l=this.buffer[i];++i)switch(l){case" ":n+=1;break;case`
`:t=i,n=0;break;case"\r":{const r=this.buffer[i+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!l&&!this.atEnd)return this.setNext("block-scalar");if(n>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=n:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const i=this.continueScalar(t+1);if(i===-1)break;t=this.buffer.indexOf(`
`,i)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let a=t+1;for(l=this.buffer[a];l===" ";)l=this.buffer[++a];if(l==="	"){for(;l==="	"||l===" "||l==="\r"||l===`
`;)l=this.buffer[++a];t=a-1}else if(!this.blockScalarKeep)do{let i=t-1,r=this.buffer[i];r==="\r"&&(r=this.buffer[--i]);const s=i;for(;r===" ";)r=this.buffer[--i];if(r===`
`&&i>=this.pos&&i+1+n>s)t=i;else break}while(!0);return yield Ja,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let n=this.pos-1,l=this.pos-1,a;for(;a=this.buffer[++l];)if(a===":"){const i=this.buffer[l+1];if(_t(i)||t&&Ai.has(i))break;n=l}else if(_t(a)){let i=this.buffer[l+1];if(a==="\r"&&(i===`
`?(l+=1,a=`
`,i=this.buffer[l+1]):n=l),i==="#"||t&&Ai.has(i))break;if(a===`
`){const r=this.continueScalar(l+1);if(r===-1)break;l=Math.max(l,r-2)}}else{if(t&&Ai.has(a))break;n=l}return!a&&!this.atEnd?this.setNext("plain-scalar"):(yield Ja,yield*this.pushToIndex(n+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,n){const l=this.buffer.slice(this.pos,t);return l?(yield l,this.pos+=l.length,l.length):(n&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(es))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(_t(n)||t&&Ai.has(n))return t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,n=this.buffer[t];for(;!_t(n)&&n!==">";)n=this.buffer[++t];return yield*this.pushToIndex(n===">"?t+1:t,!1)}else{let t=this.pos+1,n=this.buffer[t];for(;n;)if(F0.has(n))n=this.buffer[++t];else if(n==="%"&&Mu.has(this.buffer[t+1])&&Mu.has(this.buffer[t+2]))n=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let n=this.pos-1,l;do l=this.buffer[++n];while(l===" "||t&&l==="	");const a=n-this.pos;return a>0&&(yield this.buffer.substr(this.pos,a),this.pos=n),a}*pushUntil(t){let n=this.pos,l=this.buffer[n];for(;!t(l);)l=this.buffer[++n];return yield*this.pushToIndex(n,!1)}}class ny{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let n=0,l=this.lineStarts.length;for(;n<l;){const i=n+l>>1;this.lineStarts[i]<t?n=i+1:l=i}if(this.lineStarts[n]===t)return{line:n+1,col:1};if(n===0)return{line:0,col:t};const a=this.lineStarts[n-1];return{line:n,col:t-a+1}}}}function an(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function Gu(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function ly(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Vi(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function rl(e){var n;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((n=e[++t])==null?void 0:n.type)==="space";);return e.splice(t,e.length)}function ju(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!an(t.start,"explicit-key-ind")&&!an(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,ly(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class fd{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new ty,this.onNewLine=t}*parse(t,n=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const l of this.lexer.lex(t,n))yield*this.next(l);n||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const n=ey(t);if(n)if(n==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=n,yield*this.step(),n){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const l=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:l,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(!t||t.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const n=t??this.stack.pop();if(!n)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield n;else{const l=this.peek(1);switch(n.type==="block-scalar"?n.indent="indent"in l?l.indent:0:n.type==="flow-collection"&&l.type==="document"&&(n.indent=0),n.type==="flow-collection"&&ju(n),l.type){case"document":l.value=n;break;case"block-scalar":l.props.push(n);break;case"block-map":{const a=l.items[l.items.length-1];if(a.value){l.items.push({start:[],key:n,sep:[]}),this.onKeyLine=!0;return}else if(a.sep)a.value=n;else{Object.assign(a,{key:n,sep:[]}),this.onKeyLine=!a.explicitKey;return}break}case"block-seq":{const a=l.items[l.items.length-1];a.value?l.items.push({start:[],value:n}):a.value=n;break}case"flow-collection":{const a=l.items[l.items.length-1];!a||a.value?l.items.push({start:[],key:n,sep:[]}):a.sep?a.value=n:Object.assign(a,{key:n,sep:[]});return}default:yield*this.pop(),yield*this.pop(n)}if((l.type==="document"||l.type==="block-map"||l.type==="block-seq")&&(n.type==="block-map"||n.type==="block-seq")){const a=n.items[n.items.length-1];a&&!a.sep&&!a.value&&a.start.length>0&&Gu(a.start)===-1&&(n.indent===0||a.start.every(i=>i.type!=="comment"||i.indent<n.indent))&&(l.type==="document"?l.end=a.start:l.items.push({start:a.start}),n.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{Gu(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const n=this.startBlockValue(t);n?this.stack.push(n):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const n=Vi(this.peek(2)),l=rl(n);let a;t.end?(a=t.end,a.push(this.sourceToken),delete t.end):a=[this.sourceToken];const i={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:l,key:t,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,n.value){const a="end"in n.value?n.value.end:void 0,i=Array.isArray(a)?a[a.length-1]:void 0;(i==null?void 0:i.type)==="comment"?a==null||a.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else if(n.sep)n.sep.push(this.sourceToken);else{if(this.atIndentedComment(n.start,t.indent)){const a=t.items[t.items.length-2],i=(l=a==null?void 0:a.value)==null?void 0:l.end;if(Array.isArray(i)){Array.prototype.push.apply(i,n.start),i.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const a=!this.onKeyLine&&this.indent===t.indent,i=a&&(n.sep||n.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(i&&n.sep&&!n.value){const s=[];for(let c=0;c<n.sep.length;++c){const d=n.sep[c];switch(d.type){case"newline":s.push(c);break;case"space":break;case"comment":d.indent>t.indent&&(s.length=0);break;default:s.length=0}}s.length>=2&&(r=n.sep.splice(s[1]))}switch(this.type){case"anchor":case"tag":i||n.value?(r.push(this.sourceToken),t.items.push({start:r}),this.onKeyLine=!0):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"explicit-key-ind":!n.sep&&!n.explicitKey?(n.start.push(this.sourceToken),n.explicitKey=!0):i||n.value?(r.push(this.sourceToken),t.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(n.explicitKey)if(n.sep)if(n.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(an(n.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(ly(n.key)&&!an(n.sep,"newline")){const s=rl(n.start),c=n.key,d=n.sep;d.push(this.sourceToken),delete n.key,delete n.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:c,sep:d}]})}else r.length>0?n.sep=n.sep.concat(r,this.sourceToken):n.sep.push(this.sourceToken);else if(an(n.start,"newline"))Object.assign(n,{key:null,sep:[this.sourceToken]});else{const s=rl(n.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]})}else n.sep?n.value||i?t.items.push({start:r,key:null,sep:[this.sourceToken]}):an(n.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);i||n.value?(t.items.push({start:r,key:s,sep:[]}),this.onKeyLine=!0):n.sep?this.stack.push(s):(Object.assign(n,{key:s,sep:[]}),this.onKeyLine=!0);return}default:{const s=this.startBlockValue(t);if(s){if(s.type==="block-seq"){if(!n.explicitKey&&n.sep&&!an(n.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else a&&t.items.push({start:r});this.stack.push(s);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(n.value){const a="end"in n.value?n.value.end:void 0,i=Array.isArray(a)?a[a.length-1]:void 0;(i==null?void 0:i.type)==="comment"?a==null||a.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(n.start,t.indent)){const a=t.items[t.items.length-2],i=(l=a==null?void 0:a.value)==null?void 0:l.end;if(Array.isArray(i)){Array.prototype.push.apply(i,n.start),i.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return;case"anchor":case"tag":if(n.value||this.indent<=t.indent)break;n.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;n.value||an(n.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return}if(this.indent>t.indent){const a=this.startBlockValue(t);if(a){this.stack.push(a);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const n=t.items[t.items.length-1];if(this.type==="flow-error-end"){let l;do yield*this.pop(),l=this.peek(1);while(l&&l.type==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!n||n.sep?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return;case"map-value-ind":!n||n.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!n||n.value?t.items.push({start:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);!n||n.value?t.items.push({start:[],key:a,sep:[]}):n.sep?this.stack.push(a):Object.assign(n,{key:a,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const l=this.startBlockValue(t);l?this.stack.push(l):(yield*this.pop(),yield*this.step())}else{const l=this.peek(2);if(l.type==="block-map"&&(this.type==="map-value-ind"&&l.indent===t.indent||this.type==="newline"&&!l.items[l.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&l.type!=="flow-collection"){const a=Vi(l),i=rl(a);ju(t);const r=t.end.splice(1,t.end.length);r.push(this.sourceToken);const s={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:i,key:t,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const n=Vi(t),l=rl(n);return l.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const n=Vi(t),l=rl(n);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,n){return this.type!=="comment"||this.indent<=n?!1:t.every(l=>l.type==="newline"||l.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function ay(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new ny||null,prettyErrors:t}}function U0(e,t={}){const{lineCounter:n,prettyErrors:l}=ay(t),a=new fd(n==null?void 0:n.addNewLine),i=new pd(t),r=Array.from(i.compose(a.parse(e)));if(l&&n)for(const s of r)s.errors.forEach(Pr(e,n)),s.warnings.forEach(Pr(e,n));return r.length>0?r:Object.assign([],{empty:!0},i.streamInfo())}function iy(e,t={}){const{lineCounter:n,prettyErrors:l}=ay(t),a=new fd(n==null?void 0:n.addNewLine),i=new pd(t);let r=null;for(const s of i.compose(a.parse(e),!0,e.length))if(!r)r=s;else if(r.options.logLevel!=="silent"){r.errors.push(new Fn(s.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return l&&n&&(r.errors.forEach(Pr(e,n)),r.warnings.forEach(Pr(e,n))),r}function W0(e,t,n){let l;typeof t=="function"?l=t:n===void 0&&t&&typeof t=="object"&&(n=t);const a=iy(e,n);if(!a)return null;if(a.warnings.forEach(i=>Lf(a.options.logLevel,i)),a.errors.length>0){if(a.options.logLevel!=="silent")throw a.errors[0];a.errors=[]}return a.toJS(Object.assign({reviver:l},n))}function $0(e,t,n){let l=null;if(typeof t=="function"||Array.isArray(t)?l=t:n===void 0&&t&&(n=t),typeof n=="string"&&(n=n.length),typeof n=="number"){const a=Math.round(n);n=a<1?void 0:a>8?{indent:8}:{indent:a}}if(e===void 0){const{keepUndefined:a}=n??t??{};if(!a)return}return Xn(e)&&!l?e.toString(n):new Ql(e,l,n).toString(n)}const ry=Object.freeze(Object.defineProperty({__proto__:null,Alias:eo,CST:O0,Composer:pd,Document:Ql,Lexer:ty,LineCounter:ny,Pair:Ue,Parser:fd,Scalar:le,Schema:co,YAMLError:ud,YAMLMap:it,YAMLParseError:Fn,YAMLSeq:vn,YAMLWarning:Wf,isAlias:Ln,isCollection:ve,isDocument:Xn,isMap:$l,isNode:Ce,isPair:xe,isScalar:me,isSeq:Hl,parse:W0,parseAllDocuments:U0,parseDocument:iy,stringify:$0,visit:Zn,visitAsync:Zr},Symbol.toStringTag,{value:"Module"})),H0=`protocols:
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
`,z0=`protocols:
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
        `,K0=`# Label Help Text
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
`;function Q0({selectedInverters:e,onChange:t,availableInverters:n=["001","002","003"],getFullSerialNumber:l}){const[a,i]=z.useState(!1),r=z.useRef(null),s=e.size===n.length,c=s?"All Inverters":Array.from(e).sort().map(m=>l(m)).join(", ");z.useEffect(()=>{const m=p=>{r.current&&!r.current.contains(p.target)&&i(!1)};if(a)return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[a]);const d=()=>{t(s?new Set(["001"]):new Set(n))},u=m=>{const p=new Set(e);p.has(m)?(p.delete(m),p.size===0&&p.add("001")):p.add(m),t(p)};return o.jsxs("div",{className:"relative",ref:r,children:[o.jsxs("button",{type:"button",onClick:()=>i(!a),className:"text-xs border border-blue-300 rounded px-2 py-1 bg-white text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1",children:[o.jsx("span",{children:c}),o.jsx("svg",{className:`h-3 w-3 transition-transform ${a?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),a&&o.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]",children:o.jsxs("div",{className:"py-1",children:[o.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:s,onChange:d,className:"h-3 w-3"}),o.jsx("span",{className:"text-xs text-gray-700",children:"All Inverters"})]}),n.map(m=>o.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:e.has(m),onChange:()=>u(m),className:"h-3 w-3"}),o.jsx("span",{className:"text-xs text-gray-700",children:l(m)})]},m))]})})]})}const Bu=[{bg:"bg-purple-500",border:"border-purple-600"},{bg:"bg-green-500",border:"border-green-600"},{bg:"bg-teal-500",border:"border-teal-600"},{bg:"bg-blue-500",border:"border-blue-600"},{bg:"bg-pink-500",border:"border-pink-600"},{bg:"bg-orange-500",border:"border-orange-600"},{bg:"bg-indigo-500",border:"border-indigo-600"},{bg:"bg-red-500",border:"border-red-600"}],Ou=["text-purple-500","text-green-500","text-teal-500","text-blue-500","text-pink-500","text-orange-500","text-indigo-500","text-red-500"],Fu=[{bg50:"bg-purple-50",bg100:"bg-purple-100",border200:"border-purple-200",border400:"border-purple-400",bg500:"bg-purple-500/80",text600:"text-purple-600",text700:"text-purple-700",ring:"focus:ring-purple-500"},{bg50:"bg-green-50",bg100:"bg-green-100",border200:"border-green-200",border400:"border-green-400",bg500:"bg-green-500/80",text600:"text-green-600",text700:"text-green-700",ring:"focus:ring-green-500"},{bg50:"bg-teal-50",bg100:"bg-teal-100",border200:"border-teal-200",border400:"border-teal-400",bg500:"bg-teal-500/80",text600:"text-teal-600",text700:"text-teal-700",ring:"focus:ring-teal-500"},{bg50:"bg-blue-50",bg100:"bg-blue-100",border200:"border-blue-200",border400:"border-blue-400",bg500:"bg-blue-500/80",text600:"text-blue-600",text700:"text-blue-700",ring:"focus:ring-blue-500"},{bg50:"bg-pink-50",bg100:"bg-pink-100",border200:"border-pink-200",border400:"border-pink-400",bg500:"bg-pink-500/80",text600:"text-pink-600",text700:"text-pink-700",ring:"focus:ring-pink-500"},{bg50:"bg-orange-50",bg100:"bg-orange-100",border200:"border-orange-200",border400:"border-orange-400",bg500:"bg-orange-500/80",text600:"text-orange-600",text700:"text-orange-700",ring:"focus:ring-orange-500"},{bg50:"bg-indigo-50",bg100:"bg-indigo-100",border200:"border-indigo-200",border400:"border-indigo-400",bg500:"bg-indigo-500/80",text600:"text-indigo-600",text700:"text-indigo-700",ring:"focus:ring-indigo-500"},{bg50:"bg-red-50",bg100:"bg-red-100",border200:"border-red-200",border400:"border-red-400",bg500:"bg-red-500/80",text600:"text-red-600",text700:"text-red-700",ring:"focus:ring-red-500"}],Y0=36,tn={width:1e3,height:360},oy=["001","002","003"],sy=e=>{const t=parseInt(e,10);return(1e9+t*1e4+t).toString().padStart(10,"0")};function cy(e){let t=0;for(let n=0;n<e.length;n+=1)t=t*31+e.charCodeAt(n)>>>0;return()=>(t=t*1664525+1013904223>>>0,t/2**32)}function J0(e){const t=[];for(let a=0;a<e;a+=1){const i=720+a*10,r=Math.floor(i/60)%24,s=i%60;t.push(`${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`)}return t}function X0(e,t=Y0){const n=cy(`line-${e}`),l=[];let a=n()*60+20;for(let i=0;i<t;i+=1){const r=n()-.5,s=4+n()*8,c=a+r*s;a=l.length?l[l.length-1]*.7+c*.3:c,a=Math.max(0,Math.min(140,a)),l.push(Number(a.toFixed(2)))}return l}function Z0(e){if(!e.meaningKeys.length)return null;const t=e.meaningKeys,n=cy(e.pointKey),l=t.filter((u,m)=>n()>.35||m===0);l.length===0&&l.push(t[0]);const a=12,i=J0(a),s=(typeof e.dtype=="string"?e.dtype.toLowerCase():"").startsWith("bitfield"),c=Array.from({length:a},()=>new Set);if(s)for(let u=0;u<a;u+=1){let m=!1;l.forEach((p,f)=>{n()>.55&&(c[u].add(p),m=!0),!m&&f===l.length-1&&n()>.7&&(c[u].add(p),m=!0)})}else{let u=0;for(;u<a&&l.length;){const m=Math.floor(n()*l.length),p=l[m],f=1+Math.floor(n()*3);if(n()>.2)for(let v=0;v<f&&u+v<a;v+=1)c[u+v].add(p);u+=f}}const d=t.map(u=>{var _,g;const m=String(u),p=(_=e.friendlyMeanings)==null?void 0:_[m],f=(g=e.meanings)==null?void 0:g[m],v=(p??f??m).trim()||`Value ${m}`,b=c.map(y=>y.has(u));return{meaningKey:u,label:v,activeSlots:b}});return{id:e.pointKey,title:e.name,subtitle:`SN ${e.shortSN}`,timeLabels:i,rows:d,colorIndex:e.colorIndex}}function ex(e,t,n){const l=String(t||"").trim();if(!l)return!1;const a=l.toLowerCase(),i=Array.isArray(e.labels)?e.labels:[];if(i.length===0)return!1;for(const r of i)if(!(!r||typeof r!="object")&&!(!r.label_family||typeof r.label_family!="string"))try{const s=n(r.label_family,r.label_text);if(s&&typeof s=="string"&&s.length>0&&s.toLowerCase().includes(a))return!0}catch{continue}return!1}function dy({levelName:e,levelData:t,selected:n,toggle:l,showHelp:a,onUpdateInverters:i,groupsExpanded:r,pointHelpEnabled:s,onTogglePointHelp:c,onOpenChartTutorial:d,depth:u=0,query:m,parentPath:p="",hierarchy:f=[],getLabelColor:v,getLabelHelp:b}){const _=p?`${p}-${e.replace(/\s+/g,"-")}`:e.replace(/\s+/g,"-"),g=`group-${_}-${u}`,y=Array.isArray(t),h=f[u]||"";if(!t)return null;const S=w=>{const L=`${w.model}:${w.point}`,U=w.entry.description||L,I=w.entry.longdescription||U,M=typeof w.entry.dtype=="string"?w.entry.dtype.toLowerCase():"",E=M.includes("enum")||M.startsWith("bitfield"),q=w.entry.unit&&w.entry.unit!=="N/A"?` (${w.entry.unit})`:"",ee=n.has(L),B=ee?n.get(L)||new Set(["001"]):new Set,X=Array.isArray(w.labels)?w.labels:[],ie=a||s.has(L),R=ex(w,m,b);return o.jsxs("div",{id:`point-${L.replace(/:/g,"-")}`,"data-point-key":L,className:"rounded-md px-2 py-1 hover:bg-gray-50 transition-colors",children:[o.jsx("div",{className:"flex items-start gap-2 flex-wrap",children:o.jsxs("label",{className:"flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0",children:[o.jsx("input",{type:"checkbox",checked:ee,onChange:G=>{G.stopPropagation(),l(L)},onClick:G=>{G.stopPropagation()},className:"h-4 w-4 flex-shrink-0"}),o.jsxs("span",{className:"text-sm flex items-center gap-1",children:[o.jsxs("span",{children:[U,q]}),E&&o.jsx("span",{className:"text-base leading-none cursor-pointer hover:opacity-70",title:"Selecting this point shows named modes or states as colored bars instead of a line chart. Click to learn more.","aria-label":"Categorical visualization - click to learn more",onClick:G=>{G.preventDefault(),G.stopPropagation(),d==null||d()},children:"📊"})]}),o.jsxs("div",{className:"relative ml-1 flex-shrink-0",children:[o.jsx("span",{className:`cursor-pointer ${ie?"text-blue-600 hover:text-blue-700":"text-gray-400 hover:text-gray-600"}`,title:I,"aria-label":"Help",onClick:G=>{G.preventDefault(),G.stopPropagation(),c(L)},onMouseDown:G=>{G.preventDefault(),G.stopPropagation()},children:"ⓘ"}),R&&o.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse","aria-hidden":"true"},`red-dot-${L}`)]}),ee&&o.jsxs("div",{className:"ml-auto flex items-center gap-1 flex-shrink-0",onClick:G=>G.stopPropagation(),children:[o.jsx("span",{className:"text-xs text-gray-600",children:"Inverter SN:"}),o.jsx(Q0,{selectedInverters:B,onChange:G=>i(L,G),getFullSerialNumber:sy})]}),ie&&X.length>0&&o.jsx("div",{className:"ml-2 flex flex-wrap gap-1 w-full",children:X.map((G,j)=>{const W=v(G.label_family,G.label_text),se=b(G.label_family,G.label_text)||`${G.label_family}: ${G.label_text}`;return o.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${W.bg} ${W.text} ${W.border}`,title:se,children:G.label_text},j)})})]})}),ie&&o.jsx("div",{className:"pl-6 text-xs text-gray-500 whitespace-pre-wrap",children:I})]},L)};if(y){const w=t;return o.jsx("div",{className:"ml-2 space-y-1",children:w.map(S)})}if(!(t instanceof Map))return console.error("LabelGroup: levelData is neither array nor Map",{levelName:e,depth:u,levelData:t,type:typeof t}),null;const k=t,P=u===0;return o.jsxs("details",{id:g,className:`group border-b py-2 ${P?"":"ml-2 border-l pl-2"}`,open:r,children:[o.jsxs("summary",{className:`cursor-pointer list-none ${P?"font-semibold":"font-medium text-gray-700"} flex items-center justify-between`,children:[o.jsxs("div",{className:"flex items-center flex-1 min-w-0",children:[o.jsx("span",{className:"mr-1",children:"▾"}),o.jsx("span",{className:"truncate",children:e})]}),h&&o.jsx("span",{className:"ml-2 px-2 py-0.5 text-[10px] font-normal uppercase tracking-wide text-gray-500 bg-gray-100 rounded-full flex-shrink-0 cursor-help",title:b(h)||h,children:h})]}),o.jsx("div",{className:"mt-2 ml-1 space-y-2",children:[...k.entries()].map(([w,L])=>w===""?Array.isArray(L)?o.jsx("div",{className:"ml-2 space-y-1",children:L.map(S)},""):null:o.jsx(dy,{levelName:w,levelData:L,selected:n,toggle:l,showHelp:a,onUpdateInverters:i,groupsExpanded:r,pointHelpEnabled:s,onTogglePointHelp:c,onOpenChartTutorial:d,depth:u+1,query:m,parentPath:_,hierarchy:f,getLabelColor:v,getLabelHelp:b},w))})]})}function uy({family:e,labels:t,onClose:n,getLabelHelp:l}){const a=l(e),i=[...t].sort();return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:n,children:o.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsxs("h2",{className:"text-xl font-semibold text-gray-800",children:[e," Labels"]}),o.jsx("button",{onClick:n,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),a&&o.jsxs("div",{className:"mb-4 rounded-lg bg-blue-50 p-3 text-sm text-gray-700",children:[o.jsxs("strong",{className:"font-semibold",children:["About ",e,":"]})," ",a]}),o.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:o.jsx("div",{className:"space-y-4",children:i.map(r=>{const s=l(e,r);return o.jsxs("div",{className:"border-b border-gray-200 pb-3 last:border-b-0",children:[o.jsx("div",{className:"mb-1 font-medium text-gray-800",children:r}),s?o.jsx("div",{className:"text-sm text-gray-600",children:s}):o.jsx("div",{className:"text-sm italic text-gray-400",children:"No help text available"})]},r)})})})]})})}function tx({onClose:e}){return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:o.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"How do filters work?"}),o.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"space-y-4 text-gray-700",children:[o.jsx("p",{children:"Use filters to quickly jump to the part of the system you're interested in—like just battery settings, inverter readings, or grid-related features—without needing to scroll through the full list."}),o.jsx("p",{children:"Select any combination of filters—such as component, type of data, unit, or feature—and the list will update instantly to show only points that match your selection. You can choose multiple filters at once to get more specific."}),o.jsx("p",{children:"As you refine the list, filters that no longer apply will dim, show a count of zero, and become unavailable, helping you see which combinations still have matching points."})]})]})})}function nx({allLabels:e,selectedLabels:t,onToggleLabel:n,onClearFilters:l,protocols:a,detailLevel:i,filterStructure:r,getLabelColor:s,getLabelHelp:c}){const[d,u]=z.useState(200),[m,p]=z.useState(!1),[f,v]=z.useState(null),[b,_]=z.useState(!1),[g,y]=z.useState(!1),h=z.useRef(null),S=z.useRef(null),k=z.useMemo(()=>{const E=[];return["Equipment","Component","Type of Data","Unit"].forEach(ee=>{e.has(ee)&&E.push(ee)}),e.forEach((ee,B)=>{B!=="Level of Detail"&&!E.includes(B)&&E.push(B)}),E},[e]),P=E=>Array.from(t).filter(q=>q.startsWith(`${E}:`)).map(q=>q.split(":",2)[1]),w=E=>{if(r!=="sequential")return!1;const q=k.indexOf(E);if(q===0)return!1;const ee=k[q-1];return P(ee).length===0},L=z.useCallback((E,q)=>{const ee=`${E}:${q}`,B=new Set;t.forEach(R=>{const[G]=R.split(":",2);G!==E&&B.add(R)}),B.add(ee);const X=new Map;B.forEach(R=>{const[G,j]=R.split(":",2);X.has(G)||X.set(G,new Set),X.get(G).add(j)});const ie=(()=>{switch(i){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();return a.filter(R=>{const G=Array.isArray(R.labels)?R.labels:[],j=G.filter(Z=>Z.label_family==="Level of Detail").map(Z=>Z.label_text);if(j.length>0&&!j.some(se=>ie.includes(se)))return!1;const W=new Map;G.forEach(Z=>{W.has(Z.label_family)||W.set(Z.label_family,new Set),W.get(Z.label_family).add(Z.label_text)});for(const[Z,se]of X.entries()){const te=W.get(Z);if(!te||![...se].some(oe=>te.has(oe)))return!1}return!0}).length},[t,a,i]),U=E=>{E.preventDefault(),p(!0)};z.useEffect(()=>{if(!m)return;const E=ee=>{if(h.current){const B=h.current.getBoundingClientRect(),X=ee.clientY-B.top;X>=100&&X<=600&&u(X)}},q=()=>{p(!1)};return document.addEventListener("mousemove",E),document.addEventListener("mouseup",q),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",q)}},[m]);const I=Array.from(t).map(E=>{const[q,ee]=E.split(":",2);return{family:q,text:ee}}).filter(({family:E})=>E!=="Level of Detail"),M=new Map(e);return M.delete("Level of Detail"),o.jsxs("div",{ref:h,className:"mb-3 rounded-lg border bg-gray-50 p-2",children:[o.jsxs("details",{ref:S,className:"group",open:g,onToggle:E=>y(E.target.open),children:[o.jsxs("summary",{className:"cursor-pointer list-none",children:[o.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 flex-wrap",children:[o.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[o.jsx("svg",{className:"h-4 w-4 text-gray-600 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),o.jsx("span",{className:"flex-shrink-0",children:"Filters"}),I.length>0&&o.jsxs("span",{className:"text-gray-500",children:["(",I.length," active)"]})]}),!g&&o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[M.size>0&&o.jsx("button",{onClick:E=>{E.stopPropagation(),S.current&&(S.current.open=!0,y(!0))},className:"rounded border border-gray-300 bg-white px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex-shrink-0",children:"+ Add Filter"}),o.jsx("button",{onClick:E=>{E.preventDefault(),E.stopPropagation(),_(!0)},className:"flex-shrink-0 text-xs text-blue-600 hover:text-blue-700 underline transition-colors",children:"How do I use filters?"})]})]}),!g&&I.length>0&&o.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 min-w-0 mt-1",children:[I.map(({family:E,text:q})=>{const ee=s(E,q);return o.jsxs("span",{className:`rounded border px-1.5 py-0.5 text-xs ${ee.bg} ${ee.text} ${ee.border} border-2 font-semibold flex-shrink-0 flex items-center gap-1`,children:[o.jsx("span",{children:q}),o.jsx("button",{onClick:B=>{B.stopPropagation(),n(E,q)},className:"hover:opacity-70 transition-opacity flex-shrink-0",title:`Remove ${E}: ${q} filter`,"aria-label":`Remove ${E}: ${q} filter`,children:o.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},`${E}:${q}`)}),o.jsx("button",{onClick:E=>{E.stopPropagation(),l()},className:"flex-shrink-0 text-xs text-gray-500 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:"Clear all"})]})]}),o.jsxs("div",{className:"mb-2 flex items-center justify-between gap-2 flex-wrap",children:[o.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[g&&I.length>0&&o.jsx("div",{className:"flex flex-wrap items-center gap-1.5 min-w-0",children:I.map(({family:E,text:q})=>{const ee=s(E,q);return o.jsxs("span",{className:`rounded border px-1.5 py-0.5 text-xs ${ee.bg} ${ee.text} ${ee.border} border-2 font-semibold flex-shrink-0 flex items-center gap-1`,children:[o.jsx("span",{children:q}),o.jsx("button",{onClick:B=>{B.stopPropagation(),n(E,q)},className:"hover:opacity-70 transition-opacity flex-shrink-0",title:`Remove ${E}: ${q} filter`,"aria-label":`Remove ${E}: ${q} filter`,children:o.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},`${E}:${q}`)})}),g&&I.length>0&&o.jsx("button",{onClick:E=>{E.stopPropagation(),l()},className:"flex-shrink-0 text-xs text-gray-500 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:"Clear all"})]}),g&&o.jsx("button",{onClick:E=>{E.preventDefault(),E.stopPropagation(),_(!0)},className:"flex-shrink-0 text-xs text-blue-600 hover:text-blue-700 underline transition-colors",children:"How do I use filters?"})]}),o.jsx("div",{className:"space-y-0.5 overflow-auto mt-2",style:{height:`${d}px`},children:r==="sequential"?o.jsx(o.Fragment,{children:k.map((E,q)=>{const ee=M.get(E);if(!ee)return null;const B=P(E),X=w(E),ie=B.length>0,R=!X,G=c(E),j=s(E,"");return X&&!ie?null:o.jsxs("div",{children:[q>0&&o.jsx("div",{className:"border-t border-gray-200 my-1"}),o.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-1 px-1 rounded bg-gray-50/30",children:[o.jsxs("button",{onClick:()=>v(E),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${ie?`${j.bg} ${j.text} ${j.border} border-2`:X?"bg-slate-50 text-slate-400 border-slate-200 border":`${j.bg} ${j.text} ${j.border} border`}`,title:G||`View help for ${E} labels`,"aria-label":`Help for ${E}`,children:[o.jsx("span",{className:"truncate",children:E}),o.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${j.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...ee].sort().map(W=>{const Z=`${E}:${W}`,se=B.includes(W),te=R?L(E,W):0,ne=!R||!se&&te===0,oe=s(E,W),ke=c(E,W);return o.jsxs("button",{onClick:()=>{ne||n(E,W)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${ne?"opacity-40 cursor-not-allowed bg-white":se?`${oe.bg} ${oe.text} ${oe.border} border-2 font-semibold`:`bg-white ${oe.text} ${oe.border} hover:opacity-80 cursor-pointer`}`,style:!se&&!ne?{borderColor:"currentColor"}:void 0,title:X?"Pick something above to unlock this step":ne?"No points available with this combination of filters":ke||`${E}: ${W}`,"aria-disabled":ne,tabIndex:ne?-1:0,children:[o.jsx("span",{children:W}),!se&&R&&o.jsxs("span",{className:`ml-1 ${ne?"text-gray-400":"text-gray-500"}`,children:["(",te,")"]})]},Z)})})]})]},E)})}):o.jsx(o.Fragment,{children:k.map((E,q)=>{const ee=M.get(E);if(!ee)return null;const B=c(E),X=s(E,""),ie=Array.from(ee).some(R=>t.has(`${E}:${R}`));return o.jsxs("div",{children:[q>0&&o.jsx("div",{className:"border-t border-gray-200 my-1"}),o.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-1 px-1 rounded bg-gray-50/30",children:[o.jsxs("button",{onClick:()=>v(E),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${ie?`${X.bg} ${X.text} ${X.border} border-2`:`${X.bg} ${X.text} ${X.border} border`}`,title:B||`View help for ${E} labels`,"aria-label":`Help for ${E}`,children:[o.jsx("span",{className:"truncate",children:E}),o.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${X.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...ee].sort().map(R=>{const G=`${E}:${R}`,j=t.has(G),W=L(E,R),Z=!j&&W===0,se=s(E,R),te=c(E,R);return o.jsxs("button",{onClick:()=>{Z||n(E,R)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${Z?"opacity-40 cursor-not-allowed bg-white":j?`${se.bg} ${se.text} ${se.border} border-2 font-semibold`:`bg-white ${se.text} ${se.border} hover:opacity-80 cursor-pointer`}`,style:!j&&!Z?{borderColor:"currentColor"}:void 0,title:Z?"No points available with this combination of filters":te||`${E}: ${R}`,"aria-disabled":Z,tabIndex:Z?-1:0,children:[o.jsx("span",{children:R}),!j&&o.jsxs("span",{className:`ml-1 ${Z?"text-gray-400":"text-gray-500"}`,children:["(",W,")"]})]},G)})})]})]},E)})})}),o.jsx("div",{onMouseDown:U,className:"mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors",title:"Drag to resize"})]}),f&&o.jsx(uy,{family:f,labels:e.get(f)||new Set,onClose:()=>v(null),getLabelHelp:c}),b&&o.jsx(tx,{onClose:()=>_(!1)})]})}function lx({series:e,crosshairX:t,onCrosshairChange:n}){if(e.length===0)return null;const l=e.flatMap(d=>d.values),a=Math.min(...l,0),r=Math.max(...l,1)-a||1,s=d=>{if(!n)return;const u=d.currentTarget.getBoundingClientRect(),m=(d.clientX-u.left)/u.width*100;n(Math.max(0,Math.min(100,m)))},c=()=>{n&&n(null)};return o.jsx("div",{className:"h-full w-full relative",onMouseMove:s,onMouseLeave:c,children:o.jsxs("svg",{viewBox:`0 0 ${tn.width} ${tn.height}`,preserveAspectRatio:"none",className:"h-full w-full",children:[e.map(({entry:d,values:u})=>{if(u.length<2)return null;const m=u.map((p,f)=>{const v=f/(u.length-1)*tn.width,b=(p-a)/r,_=tn.height-b*tn.height;return`${f===0?"M":"L"}${v.toFixed(2)},${_.toFixed(2)}`}).join(" ");return o.jsx("path",{d:m,fill:"none",stroke:"currentColor",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round",className:`${Ou[d.colorIndex%Ou.length]} drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]`,opacity:.95},d.pointKey)}),t!=null&&o.jsx("line",{x1:t/100*tn.width,y1:0,x2:t/100*tn.width,y2:tn.height,stroke:"#374151",strokeWidth:1.5,strokeDasharray:"4 2",opacity:.7,pointerEvents:"none"})]})})}function ax({data:e,onRemove:t,crosshairX:n,onCrosshairChange:l,onDragStart:a,onDragEnd:i,isDragActive:r}){const[s,c]=z.useState(!0),d=s?e.rows.filter(v=>v.activeSlots.some(Boolean)):e.rows,u=e.rows.length-d.length,m=Fu[e.colorIndex%Fu.length],p=v=>{if(!l)return;const b=v.currentTarget.getBoundingClientRect(),_=(v.clientX-b.left)/b.width*100;l(Math.max(0,Math.min(100,_)))},f=()=>{l&&l(null)};return o.jsxs("div",{draggable:!0,onDragStart:v=>{v.stopPropagation(),a&&a();const b=v.currentTarget.cloneNode(!0);b.style.position="absolute",b.style.top="-1000px",document.body.appendChild(b),v.dataTransfer.setDragImage(b,0,0),setTimeout(()=>document.body.removeChild(b),0)},onDragEnd:v=>{v.stopPropagation(),i&&i()},className:`rounded-lg border ${m.border200} bg-white shadow-sm ${r?"cursor-grab active:cursor-grabbing":""}`,children:[o.jsxs("div",{className:`flex items-center justify-between gap-2 border-b ${m.border200} ${m.bg50} px-4 py-1.5`,children:[o.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.jsx("span",{className:`font-semibold ${m.text700}`,children:e.title}),o.jsx("span",{className:m.text600,children:e.subtitle})]}),o.jsxs("div",{className:`flex items-center gap-3 text-xs ${m.text700}`,children:[o.jsxs("label",{className:"flex items-center gap-1.5 font-medium",children:[o.jsx("input",{type:"checkbox",checked:s,onChange:v=>c(v.target.checked),className:`h-3 w-3 rounded ${m.border400} ${m.text600} ${m.ring}`}),"Hide empty bars"]}),o.jsxs("span",{className:`text-[11px] ${m.text600}`,children:[u," values hidden"]}),t&&o.jsx("button",{type:"button",onClick:v=>{v.stopPropagation(),t()},className:"text-[11px] px-2 py-1 rounded border border-transparent text-gray-500 hover:text-red-600 hover:border-red-200 transition-colors",title:"Remove this point","aria-label":"Remove categorical point",children:"×"})]})]}),o.jsxs("div",{className:"px-4 py-3 relative",onMouseMove:p,onMouseLeave:f,children:[o.jsx("div",{className:"space-y-1",children:d.length===0?o.jsx("div",{className:"text-xs text-gray-500 italic",children:'No categorical data is visible. Disable "Hide empty bars" to view all meanings.'}):d.map(v=>o.jsxs("div",{className:"flex flex-col",children:[o.jsx("div",{className:"text-[10px] font-medium text-gray-600 mb-0.5",children:v.label}),o.jsx("div",{className:`relative h-3 rounded ${m.bg100} overflow-hidden`,children:o.jsx("div",{className:"absolute inset-0 flex",children:v.activeSlots.map((b,_)=>o.jsx("div",{className:`flex-1 ${_<v.activeSlots.length-1?`border-r ${m.border200}`:""} ${b?m.bg500:"bg-transparent"}`},`${v.meaningKey}-${_}`))})})]},v.meaningKey))}),n!=null&&o.jsx("div",{className:"absolute top-0 bottom-0 w-px bg-gray-700 pointer-events-none opacity-70",style:{left:`calc(1rem + ${n}%)`}})]})]})}function ix({selectedPoints:e,protocols:t,onUpdateInverters:n,onScrollToPoint:l,onRemoveInverter:a,onSelectPointsToggle:i,selectPointsOpen:r,onDeleteChart:s,onShowTutorial:c,crosshairX:d,onCrosshairChange:u,onDragStart:m,onDragEnd:p,isDragActive:f,isDropTarget:v}){const[b,_]=z.useState(new Set),g=Array.from(e.entries()).map(([B,X])=>{const[ie,R]=B.split(":"),G=t.find(W=>W.model===ie&&W.point===R),j=G&&(G.entry.description||G.entry.name)||R;return{key:B,name:j,inverters:X}}).filter(B=>B.name),y=g.flatMap(({key:B,name:X,inverters:ie})=>{var de,Ie,kn,Yt,Dn,Gt;const[R,G]=B.split(":"),j=t.find($e=>$e.model===R&&$e.point===G),W=(de=j==null?void 0:j.entry)!=null&&de.unit&&j.entry.unit!=="N/A"?j.entry.unit:"N/A",Z=((Ie=j==null?void 0:j.entry)==null?void 0:Ie.longdescription)||((kn=j==null?void 0:j.entry)==null?void 0:kn.description)||"",se=(Yt=j==null?void 0:j.entry)==null?void 0:Yt.dtype,te=(Dn=j==null?void 0:j.entry)==null?void 0:Dn.meanings,ne=(Gt=j==null?void 0:j.entry)==null?void 0:Gt.friendly_meanings,oe=new Set;te&&Object.keys(te).forEach($e=>oe.add(String($e))),ne&&Object.keys(ne).forEach($e=>oe.add(String($e)));const ke=Array.from(oe),Mt=ke.length>0;return Array.from(ie).sort().map(($e,Tn)=>{const Yl=sy($e);return{key:B,pointKey:`${B}:${$e}`,name:X,shortSN:$e,fullSN:Yl,unit:W,model:R,point:G,longDescription:Z,colorIndex:(g.findIndex(el=>el.key===B)*oy.length+Tn)%Bu.length,dtype:se,meanings:te,friendlyMeanings:ne,meaningKeys:ke,isCategorical:Mt}})}),h=y.filter(B=>!b.has(B.pointKey)),S=h.filter(B=>B.isCategorical),k=h.filter(B=>!B.isCategorical),P=y.filter(B=>!B.isCategorical),w=z.useMemo(()=>S.map(B=>Z0(B)).filter(B=>B!==null),[S]),L=k.length>0,U=z.useMemo(()=>k.map(B=>({entry:B,values:X0(B.pointKey)})),[k]),I=B=>{_(X=>{const ie=new Set(X);return ie.has(B)?ie.delete(B):ie.add(B),ie})},M=B=>{const X=P.map(G=>G.pointKey),R=X.filter(G=>!b.has(G)).length===1&&!b.has(B);_(R?new Set:new Set(X.filter(G=>G!==B)))},E=(B,X,ie)=>{ie.stopPropagation(),a==null||a(B,X)},ee=!(!L&&w.length>0&&e.size>0);return o.jsxs("div",{className:"w-full h-full flex flex-col relative",children:[o.jsxs("div",{className:"absolute top-4 right-4 z-20 flex items-center gap-2",children:[i&&o.jsxs("button",{onClick:()=>i(!r),className:"text-xs px-3 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center gap-2 shadow-sm",title:r?"Hide Add Points":"Show Add Points","data-role":"sidebar-toggle",children:[o.jsx("span",{children:"Add Points"}),o.jsx("svg",{className:`h-4 w-4 text-gray-600 transition-transform ${r?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s&&o.jsx("button",{onClick:B=>{B.stopPropagation(),s()},className:"text-xs px-2 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center justify-center text-gray-600 hover:text-gray-800 opacity-80 hover:opacity-100 shadow-sm",title:"Delete chart",children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"p-4 flex flex-col h-full",children:[o.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[ee&&o.jsxs("div",{className:"relative flex-1 min-h-[320px] rounded-2xl border border-gray-300 bg-gradient-to-b from-white via-white to-gray-50 shadow-inner overflow-hidden",children:[o.jsxs("div",{className:"absolute left-0 top-0 bottom-10 w-12 border-r border-gray-200 flex flex-col items-center justify-between py-4 text-gray-600",children:[o.jsx("span",{className:"text-[10px] uppercase tracking-widest leading-none transform -rotate-90",children:"Value"}),o.jsx("div",{className:"flex flex-col items-center gap-3 text-gray-400",children:[0,1,2,3,4].map(B=>o.jsx("div",{className:"w-3 h-px bg-gray-400/70"},B))}),o.jsx("span",{className:"text-[10px]",children:"0"})]}),o.jsxs("div",{className:"absolute left-12 right-6 bottom-6 h-10 border-t border-gray-200 flex items-center justify-between px-2 text-gray-500",children:[o.jsx("span",{className:"text-[11px]",children:"0"}),o.jsx("div",{className:"flex gap-2",children:[0,1,2,3,4].map(B=>o.jsx("div",{className:"h-3 w-px bg-gray-400/60"},B))}),o.jsx("span",{className:"text-[11px] uppercase tracking-widest",children:"Time"})]}),o.jsx("div",{className:`absolute top-6 bottom-16 left-12 right-6 rounded-xl bg-white/40 backdrop-blur-sm ${e.size===0?"cursor-pointer":"cursor-default"}`,onClick:B=>{B.target.closest("button")||e.size===0&&i&&i(!0)},children:e.size===0?o.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-gray-500",children:[o.jsx("div",{className:"text-base font-medium text-gray-700",children:"No points selected"}),o.jsx("div",{children:"Click anywhere in this area to select points"}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:["New to charts?"," ",o.jsx("button",{onClick:B=>{B.stopPropagation(),c==null||c()},className:"text-blue-600 hover:text-blue-700 underline",children:"View quick tutorial"})]})]}):y.length===0?o.jsx("div",{className:"flex h-full items-center justify-center text-sm text-gray-400",children:"Select points to display charts"}):L?o.jsxs("div",{className:"relative h-full w-full",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 grid grid-rows-4 opacity-30",children:[0,1,2,3].map(B=>o.jsx("div",{className:"border-b border-dashed border-gray-300"},B))}),o.jsx(lx,{series:U,crosshairX:d,onCrosshairChange:u})]}):o.jsx("div",{className:"flex h-full items-center justify-center px-6 text-center text-sm text-gray-500",children:"All selected points are hidden. Use the legend controls to show a series."})})]}),w.length>0&&o.jsx("div",{className:`${ee?"":"pt-2"}`,"data-categorical-stack":!0,children:o.jsx("div",{className:"space-y-4",children:w.map(B=>{const X=()=>{const j=B.id.split(":"),W=j.pop()??"",Z=j.join(":");a==null||a(Z,W)},R=B.id.split(":").slice(0,-1).join(":"),G=e.get(R)||new Set;return o.jsx(ax,{data:B,onRemove:X,crosshairX:d,onCrosshairChange:u,onDragStart:()=>{m&&m(R,G)},onDragEnd:p,isDragActive:f},`${B.id}:${B.subtitle}`)})})})]}),P.length>0&&o.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:P.map(({pointKey:B,name:X,shortSN:ie,fullSN:R,colorIndex:G,key:j,unit:W,point:Z,longDescription:se})=>{const te=Bu[G],ne=b.has(B),oe=["Click to toggle visibility (double-click to show only this)","",`This is the point "${X}" (${Z}) as read by inverter ${R}.`];se&&oe.push("",se);const ke=oe.join(`
`),Mt=e.get(j)||new Set;return o.jsxs("div",{draggable:!0,onDragStart:de=>{de.stopPropagation(),m&&m(j,Mt);const Ie=de.currentTarget.cloneNode(!0);Ie.style.position="absolute",Ie.style.top="-1000px",document.body.appendChild(Ie),de.dataTransfer.setDragImage(Ie,0,0),setTimeout(()=>document.body.removeChild(Ie),0)},onDragEnd:de=>{de.stopPropagation(),p&&p()},className:`flex items-center gap-2 text-xs group hover:bg-gray-50 rounded px-2 py-1 border border-gray-200 bg-white transition-colors flex-shrink-0 ${f?"cursor-grab active:cursor-grabbing":"cursor-pointer"}`,title:ke,children:[o.jsx("div",{className:`w-3 h-3 rounded-sm flex-shrink-0 ${te.bg} ${te.border} border cursor-pointer`,onClick:()=>I(B),onDoubleClick:de=>{de.stopPropagation(),M(B)}}),o.jsx("span",{className:`font-medium text-gray-600 cursor-pointer ${ne?"opacity-50 line-through":""}`,onClick:()=>I(B),onDoubleClick:de=>{de.stopPropagation(),M(B)},children:X}),o.jsxs("span",{className:"text-gray-400",children:["(SN ",ie,")"]}),W!=="N/A"&&o.jsxs("span",{className:"text-gray-400",children:["[",W,"]"]}),o.jsx("button",{onClick:de=>{de.stopPropagation(),I(B)},onDoubleClick:de=>{de.stopPropagation(),M(B)},className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:ne?"Show in chart (double-click to show only this)":"Hide in chart (double-click to show only this)",children:ne?o.jsxs("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})}),o.jsx("button",{onClick:de=>E(j,ie,de),className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:"Remove this data point from the chart",children:o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},B)})})]})]})}const rx="/matter-site-config-prototype/assets/adding_points-CERP4QNM.png",ox="/matter-site-config-prototype/assets/resizing_chart-BHR8TqZN.png",sx="/matter-site-config-prototype/assets/create_additional_charts-CshHgktp.png",cx="/matter-site-config-prototype/assets/moving_points_between_charts-C3gFhIkG.png",dx="/matter-site-config-prototype/assets/remove_chart-DXjixanx.png",ux="/matter-site-config-prototype/assets/browse_and_find_points-Dwpkv5sf.png",mx="/matter-site-config-prototype/assets/selecting_devices-Cv4bL765.png",px="/matter-site-config-prototype/assets/troubleshooting_points-C4zPrx4-.png",fx="/matter-site-config-prototype/assets/lines_vs_status-HMYx_HFm.png",my=({isOpen:e,onClose:t,initialStep:n=0})=>{const[l,a]=A.useState(n);z.useEffect(()=>{e&&a(n)},[e,n]);const i=()=>{a(0),t()};z.useEffect(()=>{const u=m=>{m.key==="Escape"&&e&&i()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e]);const r=[{title:"1. Adding Points to a Chart",image:rx,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"You can add data points to any chart in two ways:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Click anywhere inside an empty chart area"}),o.jsx("br",{}),o.jsx("span",{className:"text-sm text-slate-600",children:"This opens the point selector immediately."})]}),o.jsxs("li",{children:[o.jsx("strong",{children:'Use the "Add Points" menu'})," in the top-right corner of the chart."]})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"You can add as many points as you need—measurements or status values from any device at the site."})]})},{title:"2. Resizing a Chart",image:ox,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"To change the size of a chart:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:["Grab the ",o.jsx("strong",{children:"handle on the right edge"})," to make it wider."]}),o.jsxs("li",{children:["Grab the ",o.jsx("strong",{children:"handle on the bottom edge"})," to make it taller."]}),o.jsx("li",{children:"Drag both to resize the chart in both directions."})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"Resize charts to give more room to important points."})]})},{title:"3. Creating Additional Charts",image:sx,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["Click the ",o.jsx("strong",{children:'"+" button'})," below any chart to create a new one."]}),o.jsx("p",{className:"mb-3",children:"Each chart can have:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-1",children:[o.jsx("li",{children:"its own set of points"}),o.jsx("li",{children:"its own size"}),o.jsx("li",{children:"its own layout"})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"Use multiple charts to compare different devices or mix measurements and status views."})]})},{title:"4. Removing a Chart",image:dx,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["To delete a chart, click the ",o.jsx("strong",{children:'"X"'})," in the upper-right corner of the chart frame."]}),o.jsxs("p",{className:"text-sm text-slate-600",children:["Removing a chart does ",o.jsx("strong",{children:"not"})," delete any data points—you can always create a new chart and add them again."]})]})},{title:"5. Browsing and Finding Data Points",image:ux,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["Use the ",o.jsx("strong",{children:"Add Points"})," panel to find the data you want:"]}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsx("li",{children:"Scroll through the list"}),o.jsx("li",{children:"Search by name"}),o.jsxs("li",{children:["Use filters to narrow results by ",o.jsx("strong",{children:"component"}),", ",o.jsx("strong",{children:"type of data"}),", ",o.jsx("strong",{children:"unit"}),", or ",o.jsx("strong",{children:"feature"})]})]}),o.jsxs("p",{className:"text-sm text-slate-600",children:["If you need more advanced or technical points, increase the ",o.jsx("strong",{children:"Detail Level"})," slider."]})]})},{title:"6. Selecting Devices for Each Point",image:mx,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"Many sites have multiple units of the same equipment (e.g., several inverters)."}),o.jsx("p",{className:"mb-3",children:"For each point you select, choose whether it applies to:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-1",children:[o.jsx("li",{children:o.jsx("strong",{children:"One device"})}),o.jsx("li",{children:o.jsx("strong",{children:"A selected group of devices"})}),o.jsx("li",{children:o.jsx("strong",{children:"All devices of that type"})})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"You can add the same point for different devices in any combination."})]})},{title:"7. Troubleshooting Point Discovery",image:px,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"If you don't see the point you expect:"}),o.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[o.jsx("li",{children:"Broaden your filters"}),o.jsxs("li",{children:["Adjust the ",o.jsx("strong",{children:"Detail Level"})]}),o.jsx("li",{children:"Search for part of the name"}),o.jsx("li",{children:"Make sure the correct device type is selected"})]})]})},{title:"8. Understanding Line vs. Status Charts",image:fx,content:o.jsxs("div",{children:[o.jsxs("div",{className:"mb-4",children:[o.jsx("h4",{className:"font-semibold mb-2",children:"Line charts"}),o.jsx("p",{className:"text-sm mb-2",children:"Show measurements—numbers that rise and fall over time, such as:"}),o.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-600 space-y-1",children:[o.jsx("li",{children:"Power"}),o.jsx("li",{children:"Voltage"}),o.jsx("li",{children:"Current"}),o.jsx("li",{children:"Temperature"})]}),o.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"These appear as a smooth line across the graph."})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold mb-2",children:"Status charts"}),o.jsxs("p",{className:"text-sm mb-2",children:["Data points that will be plotted as a status chart are designated with the 📊 icon.",o.jsx("br",{}),"These show what ",o.jsx("em",{children:"state"})," the equipment was in over time, such as:"]}),o.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-600 space-y-1",children:[o.jsx("li",{children:"Normal"}),o.jsx("li",{children:"Failure"}),o.jsx("li",{children:"On / Off"}),o.jsx("li",{children:"Operating modes"})]}),o.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"Status points appear as colored bars instead of a line, showing when each state was active."})]})]})},{title:"9. Moving Points Between Charts",image:cx,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"You can reorganize your charts by dragging items from one chart to another."}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Drag a legend entry"})," to move a line-chart point."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Drag a status row"})," to move a state-based point."]}),o.jsx("li",{children:"Drop onto any chart (even an empty one) to place it there."})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"This makes it easy to group related data or separate concerns across multiple charts."})]})}],s=()=>{l<r.length-1&&a(l+1)},c=()=>{l>0&&a(l-1)};if(!e)return null;const d=r[l];return o.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[o.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),o.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-200",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-2xl",children:"📘"}),o.jsx("h2",{className:"text-xl font-semibold text-slate-900",children:"Chart Tutorial"})]}),o.jsx("button",{onClick:i,className:"text-slate-400 hover:text-slate-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-6 h-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-slate-900 mb-4",children:d.title}),o.jsx("div",{className:"mb-4 rounded-lg overflow-hidden border border-slate-200 flex justify-center bg-slate-50",children:o.jsx("img",{src:d.image,alt:d.title,className:"max-w-full h-auto max-h-80 object-contain"})}),o.jsx("div",{className:"text-slate-700",children:d.content})]}),o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-slate-200",children:[o.jsxs("div",{className:"text-sm text-slate-600",children:["Step ",l+1," of ",r.length]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{onClick:c,disabled:l===0,className:"px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Previous"}),l<r.length-1?o.jsx("button",{onClick:s,className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",children:"Next"}):o.jsx("button",{onClick:i,className:"px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-colors",children:"Finish"})]})]})]})]})},nc=16,lc=16,Ii=12,Ri=12,Ar=({onAdd:e,ariaLabel:t})=>o.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),e()},className:"relative z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-base font-semibold text-gray-600 opacity-70 shadow-sm transition-all duration-150 ease-out hover:bg-white group-hover:scale-105 group-hover:opacity-100 group-focus-within:opacity-100 focus:scale-105 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300","aria-label":t,children:o.jsx("span",{className:"leading-none",children:"+"})}),qu=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:a,onAutoFit:i,percentAbove:r,isActive:s=!1,buttonSegments:c})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof i=="function"&&typeof r=="number",u=typeof l=="function",m=d||u,p=f=>{f.key==="Enter"||f.key===" "?(f.preventDefault(),e()):f.key==="ArrowUp"&&d&&n?(f.preventDefault(),n(Ii)):f.key==="ArrowDown"&&d&&n?(f.preventDefault(),n(-Ii)):f.key==="ArrowUp"&&u&&a?(f.preventDefault(),a(Ii)):f.key==="ArrowDown"&&u&&a&&(f.preventDefault(),a(-Ii))};return o.jsxs("div",{role:"separator","aria-orientation":"horizontal",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts"}:u?{"aria-label":"Resize row height","aria-valuetext":`${Math.round(r??100)}%`}:{"aria-label":"Add chart below","aria-disabled":!0},tabIndex:0,onKeyDown:p,onClick:f=>{m||f.target.closest("button")||(f.preventDefault(),e())},onDoubleClick:f=>{f.target.closest("button")||(f.preventDefault(),d&&i?i():e())},onMouseDown:f=>{f.target.closest("button")||f.button===0&&(f.preventDefault(),d&&t?t(f.clientY):u&&l&&l(f.clientY))},className:`group relative flex items-center justify-center ${m?"cursor-row-resize":"cursor-pointer"} select-none outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${s?"ring-2 ring-blue-300/60":""}`,style:{height:nc,paddingLeft:"0.5rem",paddingRight:"0.5rem"},children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center px-4",children:o.jsx("div",{className:`flex-1 h-1 rounded-full transition-colors duration-150 ${s?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`})}),o.jsx("div",{className:`${c&&c.length>0?"grid w-full":"flex w-full"} items-center justify-center`,style:c&&c.length>0?{gridTemplateColumns:c.map(f=>f.size?`${f.size}px`:"1fr").join(" ")}:void 0,children:c&&c.length>0?c.map(f=>o.jsx("div",{className:"flex justify-center py-0.5",children:o.jsx(Ar,{onAdd:f.onAdd,ariaLabel:"Add chart below"})},f.key)):o.jsx(Ar,{onAdd:e,ariaLabel:"Add chart below"})})]})},Mi=({onResizeStart:e,isActive:t=!1})=>o.jsx("div",{className:"relative w-full h-full flex items-center justify-center",style:{pointerEvents:"auto"},children:o.jsx("div",{className:`w-3 h-3 rounded-full cursor-nwse-resize transition-all ${t?"bg-blue-500 scale-125":"bg-gray-400 hover:bg-gray-500"}`,onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),e(n.clientX,n.clientY)},title:"Drag to resize both dimensions",role:"separator","aria-label":"Resize corner"})}),Uu=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:a,onAutoFit:i,percentLeft:r,isActive:s=!1,buttonSegments:c})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof i=="function"&&typeof r=="number",u=typeof l=="function",m=d||u,p=f=>{f.key==="Enter"||f.key===" "?(f.preventDefault(),e()):f.key==="ArrowRight"&&d&&n?(f.preventDefault(),n(Ri)):f.key==="ArrowLeft"&&d&&n?(f.preventDefault(),n(-Ri)):f.key==="ArrowRight"&&u&&a?(f.preventDefault(),a(Ri)):f.key==="ArrowLeft"&&u&&a&&(f.preventDefault(),a(-Ri))};return o.jsxs("div",{role:"separator","aria-orientation":"vertical",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts horizontally"}:u?{"aria-label":"Resize column width"}:{"aria-label":"Add chart to the right","aria-disabled":!0},tabIndex:0,onKeyDown:p,onClick:f=>{m||f.target.closest("button")||(f.preventDefault(),e())},onDoubleClick:f=>{f.target.closest("button")||(f.preventDefault(),m&&i?i():e())},onMouseDown:f=>{f.target.closest("button")||f.button===0&&(f.preventDefault(),d&&t?t(f.clientX):u&&l&&l(f.clientX))},className:`group relative flex h-full w-full ${m?"cursor-col-resize":"cursor-pointer"} select-none flex-col items-center justify-center outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${s?"ring-2 ring-blue-300/60":""}`,style:{width:lc,paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 flex flex-col justify-center py-4",children:o.jsx("div",{className:`mx-auto w-1 rounded-full transition-colors duration-150 ${s?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`,style:{flex:1}})}),o.jsx("div",{className:`${c&&c.length>0?"grid h-full":"flex"} w-full flex-1 flex-col items-center justify-center`,style:c&&c.length>0?{gridTemplateRows:c.map(f=>f.size?`${f.size}px`:"1fr").join(" ")}:void 0,children:c&&c.length>0?c.map(f=>o.jsx("div",{className:"flex items-center justify-center px-0.5",children:o.jsx(Ar,{onAdd:f.onAdd,ariaLabel:"Add chart to the right"})},f.key)):o.jsx(Ar,{onAdd:e,ariaLabel:"Add chart to the right"})})]})},ua=280,Gi=360,Pn=520,ma=780,py=["001"],Wu=[{id:"chart-0",row:0,col:0,points:["40101:pPvTotal","40101:pGridImpTot","40101:pGridExpTot","40101:pBatChg","40101:pBatDischg"]},{id:"chart-1",row:0,col:1,points:["lifecycle_events:is_online","40101:gridStat"]},{id:"chart-2",row:1,col:0,points:["40101:socBat"]},{id:"chart-3",row:1,col:1,points:[]}],yx=e=>new Map(e.map(t=>[t,new Set(py)]));function gx({protocols:e,onUpdateInverters:t,onScrollToPoint:n,onRemoveInverter:l,onSelectPointsToggle:a,selectPointsOpen:i,callbacksRef:r,onActiveChartSelectedPointsChange:s,onActiveChartPositionChange:c}){const[d,u]=A.useState(()=>Wu.map(({id:x,row:C,col:D,points:T})=>({id:x,row:C,col:D,selectedPoints:yx(T)}))),[m,p]=A.useState(Wu.length),[f,v]=A.useState("chart-0"),[b,_]=A.useState(()=>new Map([[0,ma],[1,ma]])),[g,y]=A.useState(()=>new Map([[0,Pn],[1,Pn]])),[h,S]=A.useState(null),[k,P]=A.useState(null),[w,L]=A.useState(null),[U,I]=A.useState(!1),M=z.useRef(null),E=z.useRef(null),q=z.useRef(null),[ee,B]=A.useState(null),X=z.useRef(null),ie=z.useRef(new Map),[R,G]=A.useState(null),[j,W]=A.useState(null),[Z,se]=A.useState(null);z.useEffect(()=>{const x=d.find(C=>C.id===f);x&&s(new Map(x.selectedPoints))},[d,f,s]),z.useEffect(()=>{const x=()=>{const C=ie.current.get(f);if(C){const D=C.getBoundingClientRect();c(D)}else c(null)};return x(),window.addEventListener("scroll",x,!0),window.addEventListener("resize",x),()=>{window.removeEventListener("scroll",x,!0),window.removeEventListener("resize",x)}},[f,d,b,g,c]),z.useLayoutEffect(()=>{r.current={getActiveChartSelectedPoints:()=>{const x=d.find(C=>C.id===f);return x?new Map(x.selectedPoints):new Map},togglePointForActiveChart:x=>{console.log("togglePointForActiveChart called, activeChartId:",f),u(C=>C.map(T=>{if(T.id===f){const N=new Map(T.selectedPoints);if(console.log("Current selected points:",N.size),N.has(x))N.delete(x),console.log("Deleted point, new size:",N.size);else{const O=new Set(["001"]);N.set(x,O),console.log("Added point, new size:",N.size)}return{...T,selectedPoints:N}}return T}))},updateInvertersForActiveChart:(x,C)=>{console.log("updateInvertersForActiveChart called, activeChartId:",f,"inverters:",C),u(D=>D.map(N=>{if(N.id===f){const O=new Map(N.selectedPoints);return C.size===0?O.delete(x):O.set(x,C),console.log("Updated chart, selected points size:",O.size),{...N,selectedPoints:O}}return N}))},getChartGridState:()=>({charts:d.map(x=>({...x,selectedPoints:new Map(x.selectedPoints)})),rowHeights:new Map(g),columnWidths:new Map(b),nextChartId:m,activeChartId:f}),setChartGridState:x=>{u(x.charts.map(C=>({...C,selectedPoints:new Map(C.selectedPoints)}))),y(new Map(x.rowHeights)),_(new Map(x.columnWidths)),p(x.nextChartId),x.activeChartId&&v(x.activeChartId)}}},[d,f,r,g,b,m]),z.useEffect(()=>{if(typeof ResizeObserver>"u")return;const x=new ResizeObserver(C=>{const D=new Map;C.forEach(T=>{const N=T.target,O=N.getAttribute("data-chart-id");if(!O)return;const $=d.find(ae=>ae.id===O);if(!$)return;const Y=N.querySelector("[data-categorical-stack]"),K=Y?Y.scrollHeight:0;if(K<=0)return;const H=Math.max(Pn+K+24,ua);D.set($.row,Math.max(H,D.get($.row)??0))}),D.size!==0&&y(T=>{let N=!1;const O=new Map(T);return D.forEach(($,Y)=>{const K=O.get(Y)??Pn;$>K+1&&(O.set(Y,$),N=!0)}),N?O:T})});return ie.current.forEach(C=>x.observe(C)),()=>{x.disconnect()}},[d,y]);const te=z.useCallback(x=>g.get(x)??Pn,[g]),ne=z.useCallback(x=>b.get(x)??ma,[b]),oe=z.useCallback((x,C)=>{const D=Math.max(ua,C);y(T=>{const N=new Map(T);return N.set(x,D),N})},[]),ke=z.useCallback((x,C)=>{const D=Math.max(Gi,C);_(T=>{const N=new Map(T);return N.set(x,D),N})},[]),Mt=z.useCallback(x=>{X.current!==null&&window.clearTimeout(X.current),B(x),X.current=window.setTimeout(()=>{B(null),X.current=null},400)},[]);z.useEffect(()=>()=>{X.current!==null&&window.clearTimeout(X.current)},[]);const de=z.useCallback((x,C,D,T)=>{if(T<=ua*2){const K=T/2;y(H=>{const ae=new Map(H);return ae.set(x,K),ae.set(C,T-K),ae});return}const N=ua,O=T-ua,$=Math.min(Math.max(D,N),O),Y=T-$;y(K=>{const H=new Map(K);return H.set(x,$),H.set(C,Y),H})},[]),Ie=z.useCallback((x,C,D,T)=>{if(T<=Gi*2){const K=T/2;_(H=>{const ae=new Map(H);return ae.set(x,K),ae.set(C,T-K),ae});return}const N=Gi,O=T-Gi,$=Math.min(Math.max(D,N),O),Y=T-$;_(K=>{const H=new Map(K);return H.set(x,$),H.set(C,Y),H})},[]),kn=(x,C,D)=>{if(C===void 0)return;const T=te(x),N=te(C);M.current={mode:"between",startY:D,aboveRow:x,belowRow:C,initialAbove:T,initialBelow:N,total:T+N},S(x)},Yt=(x,C)=>{M.current={mode:"edge",startY:C,row:x,initialHeight:te(x)},S(x)};z.useEffect(()=>{if(h===null||!M.current)return;const x=M.current,C=T=>{const N=T.clientY-x.startY;if(x.mode==="between"){const O=x.initialAbove+N;de(x.aboveRow,x.belowRow,O,x.total)}else oe(x.row,x.initialHeight+N)},D=()=>{S(null),M.current=null};return document.addEventListener("mousemove",C),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",D)}},[h,de,oe]);const Dn=(x,C,D)=>{if(C===void 0)return;const T=ne(x),N=ne(C);E.current={mode:"between",startX:D,leftCol:x,rightCol:C,initialLeft:T,initialRight:N,total:T+N},P(x)},Gt=(x,C)=>{E.current={mode:"edge",startX:C,col:x,initialWidth:ne(x)},P(x)};z.useEffect(()=>{if(k===null||!E.current)return;const x=E.current,C=T=>{const N=T.clientX-x.startX;if(x.mode==="between"){const O=x.initialLeft+N;Ie(x.leftCol,x.rightCol,O,x.total)}else ke(x.col,x.initialWidth+N)},D=()=>{P(null),E.current=null};return document.addEventListener("mousemove",C),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",D)}},[k,Ie,ke]);const $e=(x,C,D,T,N,O)=>{const $=te(x),Y=te(C),K=ne(D),H=ne(T);q.current={startX:N,startY:O,aboveRow:x,belowRow:C,leftCol:D,rightCol:T,initialAboveHeight:$,initialBelowHeight:Y,initialLeftWidth:K,initialRightWidth:H,totalHeight:$+Y,totalWidth:K+H},L({row:x,col:D})},Tn=(x,C,D,T,N,O)=>{if(x==="row"){const $=C,Y=T,K=D;q.current={startX:N,startY:O,aboveRow:$,belowRow:Y,leftCol:K,rightCol:K,initialAboveHeight:te($),initialBelowHeight:te(Y),initialLeftWidth:ne(K),initialRightWidth:0,totalHeight:te($)+te(Y),totalWidth:0},L({row:$,col:K})}else{const $=C,Y=D,K=T;q.current={startX:N,startY:O,aboveRow:$,belowRow:$,leftCol:Y,rightCol:K,initialAboveHeight:te($),initialBelowHeight:0,initialLeftWidth:ne(Y),initialRightWidth:ne(K),totalHeight:0,totalWidth:ne(Y)+ne(K)},L({row:$,col:Y})}},Yl=(x,C,D,T)=>{q.current={startX:D,startY:T,aboveRow:x,belowRow:x,leftCol:C,rightCol:C,initialAboveHeight:te(x),initialBelowHeight:0,initialLeftWidth:ne(C),initialRightWidth:0,totalHeight:0,totalWidth:0},L({row:x,col:C})};z.useEffect(()=>{if(w===null||!q.current)return;const x=q.current,C=T=>{const N=T.clientX-x.startX,O=T.clientY-x.startY;if(x.totalHeight>0){const $=x.initialAboveHeight+O;de(x.aboveRow,x.belowRow,$,x.totalHeight)}else oe(x.aboveRow,x.initialAboveHeight+O);if(x.totalWidth>0){const $=x.initialLeftWidth+N;Ie(x.leftCol,x.rightCol,$,x.totalWidth)}else ke(x.leftCol,x.initialLeftWidth+N)},D=()=>{L(null),q.current=null};return document.addEventListener("mousemove",C),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",D)}},[w,de,Ie,oe,ke]);const el=(x,C,D)=>{const T=te(x),N=te(C),O=T+N;de(x,C,T+D,O)},fo=(x,C)=>{const D=te(x),T=te(C),N=D+T,O=N/2;de(x,C,O,N)},oi=(x,C)=>{const D=te(x);oe(x,D+C)},Jl=(x,C,D)=>{const T=ne(x),N=ne(C),O=T+N;Ie(x,C,T+D,O)},yo=(x,C)=>{const D=ne(x),T=ne(C),N=D+T,O=N/2;Ie(x,C,O,N)},Xl=(x,C)=>{const D=ne(x);ke(x,D+C)},Jt=(x,C)=>{const D=d.find(K=>K.id===x);if(!D)return;let T=D.row,N=D.col;const O=(K,H)=>d.some(ae=>ae.row===K&&ae.col===H);switch(C){case"top":if(T=D.row-1,O(T,D.col)){const K=new Set(d.map(J=>J.row)),H=Array.from(K).sort((J,Ee)=>J-Ee);let ae=!1;for(const J of H)if(J<D.row&&!O(J,D.col)){T=J,ae=!0;break}ae||(u(J=>J.map(Ee=>Ee.row<D.row?{...Ee,row:Ee.row-1}:Ee)),T=D.row-1)}break;case"bottom":if(T=D.row+1,O(T,D.col)){const K=new Set(d.map(J=>J.row)),H=Array.from(K).sort((J,Ee)=>J-Ee);let ae=!1;for(const J of H)if(J>D.row&&!O(J,D.col)){T=J,ae=!0;break}if(!ae){let J=T;for(;O(J,D.col);)J++;T=J}}break;case"left":if(N=D.col-1,O(D.row,N)){const K=new Set(d.map(J=>J.col)),H=Array.from(K).sort((J,Ee)=>J-Ee);let ae=!1;for(const J of H)if(J<D.col&&!O(D.row,J)){N=J,ae=!0;break}ae||(u(J=>J.map(Ee=>Ee.col<D.col?{...Ee,col:Ee.col-1}:Ee)),N=D.col-1)}break;case"right":if(N=D.col+1,O(D.row,N)){const K=new Set(d.map(J=>J.col)),H=Array.from(K).sort((J,Ee)=>J-Ee);let ae=!1;for(const J of H)if(J>D.col&&!O(D.row,J)){N=J,ae=!0;break}if(!ae){let J=N;for(;O(D.row,J);)J++;N=J}}break}const $=`chart-${m}`,Y={id:$,selectedPoints:new Map,row:T,col:N};b.has(N)||_(K=>new Map(K).set(N,ma)),g.has(T)||y(K=>new Map(K).set(T,Pn)),u(K=>[...K,Y]),p(K=>K+1),v($),Mt($)},tl=(x,C)=>{const D=d.filter(N=>N.row===x);if(D.length===0)return;let T;typeof C=="number"&&(T=D.find(N=>N.col===C)),T||(T=D.find(N=>N.id===f)??D[0]),Jt(T.id,"bottom")},nl=(x,C)=>{const D=d.filter(N=>N.col===x);if(D.length===0)return;let T;typeof C=="number"&&(T=D.find(N=>N.row===C)),T||(T=D.find(N=>N.id===f)??D[0]),Jt(T.id,"right")},go=x=>{u(C=>{const D=C.filter(H=>H.id!==x);if(D.length===0)return v("chart-0"),_(new Map([[0,ma]])),y(new Map([[0,Pn]])),[{id:"chart-0",selectedPoints:new Map,row:0,col:0}];x===f&&v(D[0].id);const T=new Set(D.map(H=>H.row)),N=new Set(D.map(H=>H.col)),O=Array.from(T).sort((H,ae)=>H-ae),$=Array.from(N).sort((H,ae)=>H-ae),Y=new Map(O.map((H,ae)=>[H,ae])),K=new Map($.map((H,ae)=>[H,ae]));return D.map(H=>({...H,row:Y.get(H.row)??H.row,col:K.get(H.col)??H.col}))})},bo=(x,C,D)=>{u(T=>T.map(N=>N.id===x?{...N,selectedPoints:new Map(N.selectedPoints).set(C,D)}:N)),t(x,C,D)},ho=(x,C,D)=>{u(T=>T.map(N=>{if(N.id===x){const O=new Map(N.selectedPoints),$=O.get(C);if($){const Y=new Set($);return Y.delete(D),Y.size===0?O.delete(C):O.set(C,Y),{...N,selectedPoints:O}}}return N})),l(x,C,D)},xo=(x,C,D)=>{W({type:"legend",pointKey:C,sourceChartId:x,inverters:D})},Zl=()=>{W(null),se(null)},Xt=(x,C)=>{j&&(x.preventDefault(),x.stopPropagation(),se(C))},_o=(x,C)=>{const D=x.relatedTarget,T=ie.current.get(C);T&&!T.contains(D)&&se(null)},vo=(x,C)=>{if(x.preventDefault(),x.stopPropagation(),!j)return;const{pointKey:D,sourceChartId:T,inverters:N}=j;if(T===C){Zl();return}u(O=>O.map($=>{if($.id===T){const Y=new Map($.selectedPoints);return Y.delete(D),{...$,selectedPoints:Y}}else if($.id===C){const Y=new Map($.selectedPoints);return Y.set(D,new Set(N)),{...$,selectedPoints:Y}}return $})),Zl()},He=Math.min(...d.map(x=>x.row),0),je=Math.min(...d.map(x=>x.col),0),ea=d.map(x=>({...x,row:x.row-He,col:x.col-je})),ll=z.useMemo(()=>{const x=new Map;return d.forEach(C=>{x.set(`${C.row}:${C.col}`,C)}),x},[d]),fe=Array.from(new Set(ea.map(x=>x.row))).sort((x,C)=>x-C),ye=Array.from(new Set(ea.map(x=>x.col))).sort((x,C)=>x-C),si=new Map,En=[];fe.forEach((x,C)=>{si.set(x,C);const D=x+He;En.push(`${te(D)}px`),C<fe.length-1&&En.push(`${nc}px`)}),fe.length>0&&En.push(`${nc}px`);const ci=En.length>0?En.join(" "):"1fr",ta=new Map,Zt=[];ye.forEach((x,C)=>{ta.set(x,C);const D=x+je;Zt.push(`${ne(D)}px`),C<ye.length-1&&Zt.push(`${lc}px`)}),ye.length>0&&Zt.push(`${lc}px`);const V=Zt.length>0?Zt.join(" "):"1fr";return o.jsxs("div",{className:"w-full h-full overflow-auto",children:[o.jsxs("div",{className:"grid p-4",style:{gridTemplateRows:ci,gridTemplateColumns:V,rowGap:0,columnGap:0},children:[ea.map(x=>{const C=Z===x.id,D=x.selectedPoints.size===0;return o.jsx("div",{ref:T=>{T?ie.current.set(x.id,T):ie.current.delete(x.id)},className:`relative border rounded-lg bg-white shadow-sm overflow-visible transition-all cursor-pointer ${f===x.id?"border-blue-500 border-2 ring-2 ring-blue-200":"border-gray-300"} ${ee===x.id?"animate-chart-expand":""} ${C?"ring-4 ring-green-300 border-green-500":""} ${D&&j?"bg-green-50":""}`,style:{gridRow:(si.get(x.row)??0)*2+1,gridColumn:(ta.get(x.col)??0)*2+1},"data-chart-id":x.id,onClick:T=>{T.target.closest("button")||v(x.id)},onDragOver:T=>Xt(T,x.id),onDragLeave:T=>_o(T,x.id),onDrop:T=>vo(T,x.id),children:o.jsx("div",{className:"chart-content h-full flex flex-col",children:o.jsx(ix,{selectedPoints:x.selectedPoints,protocols:e,onUpdateInverters:(T,N)=>bo(x.id,T,N),onScrollToPoint:n,onRemoveInverter:(T,N)=>ho(x.id,T,N),onSelectPointsToggle:a,selectPointsOpen:i,onDeleteChart:()=>go(x.id),onShowTutorial:()=>I(!0),crosshairX:R,onCrosshairChange:G,onDragStart:(T,N)=>xo(x.id,T,N),onDragEnd:Zl,isDragActive:j!==null,isDropTarget:C})})},x.id)}),ye.slice(0,-1).map((x,C)=>{const D=x+je,N=ye[C+1]+je,O=ne(D),$=ne(N),Y=O+$||1,K=fe.reduce((H,ae)=>{const J=ae+He;return ll.has(`${J}:${D}`)&&H.push({key:`col-btn-${J}-${D}`,onAdd:()=>nl(D,J),size:te(J)}),H},[]);return o.jsx("div",{style:{gridRow:"1 / -1",gridColumn:C*2+2,alignSelf:"stretch",justifySelf:"center"},children:o.jsx(Uu,{onAdd:()=>nl(D),onResizeStart:H=>Dn(D,N,H),onKeyboardNudge:H=>Jl(D,N,H),onAutoFit:()=>yo(D,N),percentLeft:O/Y*100,isActive:k===D,buttonSegments:K})},`col-divider-${D}`)}),ye.length>0&&(()=>{const C=ye[ye.length-1]+je,D=fe.reduce((T,N)=>{const O=N+He;return ll.has(`${O}:${C}`)&&T.push({key:`terminal-col-btn-${O}-${C}`,onAdd:()=>nl(C,O),size:te(O)}),T},[]);return o.jsx("div",{style:{gridRow:"1 / -1",gridColumn:ye.length*2,alignSelf:"stretch",justifySelf:"center"},children:o.jsx(Uu,{onAdd:()=>nl(C),onEdgeResizeStart:T=>Gt(C,T),onEdgeKeyboardNudge:T=>Xl(C,T),isActive:k===C,buttonSegments:D})},`col-divider-${C}-terminal`)})(),fe.slice(0,-1).map((x,C)=>{const D=fe[C+1],T=x+He,N=D+He,O=te(T),$=te(N),Y=O+$||1,K=ye.reduce((H,ae)=>{const J=ae+je;return ll.has(`${T}:${J}`)&&H.push({key:`row-btn-${T}-${J}`,onAdd:()=>tl(T,J),size:ne(J)}),H},[]);return o.jsx("div",{style:{gridColumn:"1 / -1",gridRow:C*2+2,alignSelf:"center",justifySelf:"stretch"},children:o.jsx(qu,{onAdd:()=>tl(T),onResizeStart:H=>kn(T,N,H),onKeyboardNudge:H=>el(T,N,H),onAutoFit:()=>fo(T,N),percentAbove:O/Y*100,isActive:h===T,buttonSegments:K})},`divider-${T}`)}),fe.length>0&&(()=>{const C=fe[fe.length-1]+He,D=ye.reduce((T,N)=>{const O=N+je;return ll.has(`${C}:${O}`)&&T.push({key:`terminal-row-btn-${C}-${O}`,onAdd:()=>tl(C,O),size:ne(O)}),T},[]);return o.jsx("div",{style:{gridColumn:"1 / -1",gridRow:fe.length*2,alignSelf:"center",justifySelf:"stretch"},children:o.jsx(qu,{onAdd:()=>tl(C),onEdgeResizeStart:T=>Yt(C,T),onEdgeKeyboardNudge:T=>oi(C,T),isActive:h===C,buttonSegments:D})},`divider-${C}-terminal`)})(),fe.slice(0,-1).flatMap((x,C)=>{const D=x+He,N=fe[C+1]+He;return ye.slice(0,-1).map((O,$)=>{const Y=O+je,H=ye[$+1]+je;return o.jsx("div",{style:{gridRow:C*2+2,gridColumn:$*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Mi,{onResizeStart:(ae,J)=>$e(D,N,Y,H,ae,J),isActive:(w==null?void 0:w.row)===D&&(w==null?void 0:w.col)===Y})},`corner-${D}-${Y}`)})}),fe.slice(0,-1).map((x,C)=>{const D=x+He,N=fe[C+1]+He;if(ye.length>0){const $=ye[ye.length-1]+je;return o.jsx("div",{style:{gridRow:C*2+2,gridColumn:ye.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Mi,{onResizeStart:(Y,K)=>Tn("row",D,N,$,Y,K),isActive:(w==null?void 0:w.row)===D&&(w==null?void 0:w.col)===$})},`corner-edge-row-${D}-${$}`)}return null}),ye.slice(0,-1).map((x,C)=>{const D=x+je,N=ye[C+1]+je;if(fe.length>0){const $=fe[fe.length-1]+He;return o.jsx("div",{style:{gridRow:fe.length*2,gridColumn:C*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Mi,{onResizeStart:(Y,K)=>Tn("col",$,D,N,Y,K),isActive:(w==null?void 0:w.row)===$&&(w==null?void 0:w.col)===D})},`corner-edge-col-${$}-${D}`)}return null}),fe.length>0&&ye.length>0&&(()=>{const C=fe[fe.length-1]+He,T=ye[ye.length-1]+je;return o.jsx("div",{style:{gridRow:fe.length*2,gridColumn:ye.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Mi,{onResizeStart:(N,O)=>Yl(C,T,N,O),isActive:(w==null?void 0:w.row)===C&&(w==null?void 0:w.col)===T})},`corner-terminal-${C}-${T}`)})()]}),o.jsx(my,{isOpen:U,onClose:()=>I(!1)})]})}function bx({value:e,onChange:t}){return o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:o.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),o.jsx("input",{className:"w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring",placeholder:"search",value:e,onChange:n=>t(n.target.value)})]})}function $u({value:e,onChange:t,getLabelHelp:n}){const l=["Standard","Extended","Complete"],a=l.indexOf(e),i=a>=0?a:0,[r,s]=z.useState(!1),c=p=>{const f=parseInt(p.target.value,10);t(l[f])},d=i/(l.length-1)*100,u=n("Level of Detail"),m=new Set(l);return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xs font-semibold text-gray-700",children:"Detail Level"}),o.jsx("button",{onClick:()=>s(!0),className:"text-blue-500 hover:text-blue-700",title:u||"Level of Detail help",children:o.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{className:"flex flex-col items-center gap-0.5",children:[o.jsxs("div",{className:"relative w-40 flex items-center",children:[o.jsx("input",{type:"range",min:"0",max:l.length-1,step:"1",value:i,onChange:c,className:"w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, #10b981 0%, #10b981 ${d}%, #e5e7eb ${d}%, #e5e7eb 100%)`}}),o.jsx("style",{children:`
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
            `})]}),o.jsx("div",{className:"relative w-40 flex justify-between text-xs",children:l.map((p,f)=>o.jsx("button",{type:"button",onClick:()=>t(p),className:`cursor-pointer hover:opacity-70 transition-opacity ${f===i?"font-semibold text-gray-900":"text-gray-500"}`,children:p},p))})]})]}),r&&o.jsx(uy,{family:"Level of Detail",labels:m,onClose:()=>s(!1),getLabelHelp:n})]})}function hx({onClose:e}){return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:o.jsxs("div",{className:"relative max-w-lg rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:"Group By"}),o.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[o.jsx("p",{children:"Reorder or add levels to control how points are grouped in the list."}),o.jsx("p",{children:"For example, grouping by Component → Feature will show each component first, with its features listed underneath."}),o.jsx("p",{className:"text-gray-600",children:"You can add or remove levels using the + button and × button next to each level."})]})]})})}function xx({availableFamilies:e,hierarchy:t,onChange:n,scrollContainerRef:l,getLabelColor:a}){const[i,r]=z.useState(!1),[s,c]=z.useState(!0),d=z.useRef(null),u=z.useRef(0),m=(b,_)=>{const g=[...t];_===""?g.splice(b,1):g[b]=_,n(g)},p=()=>{n([...t,""])},f=b=>{const _=[...t];_.splice(b,1),n(_)},v=b=>{const _=t.filter((g,y)=>y!==b&&t[y]);return e.filter(g=>!_.includes(g))};return z.useEffect(()=>{const b=l==null?void 0:l.current;if(!b)return;const _=()=>{const g=b.scrollTop;g>u.current&&g>50?s&&d.current&&(d.current.open=!1,c(!1)):g<50&&!s&&d.current&&(d.current.open=!0,c(!0)),u.current=g};return b.addEventListener("scroll",_,{passive:!0}),()=>{b.removeEventListener("scroll",_)}},[s,l]),o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"mb-3 rounded-lg border bg-gray-50 p-2 transition-all duration-300",children:o.jsxs("details",{ref:d,className:"group",open:s,onToggle:b=>c(b.target.open),children:[o.jsx("summary",{className:"cursor-pointer list-none",children:o.jsxs("div",{className:"flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[o.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"}),o.jsx("span",{className:"flex-shrink-0",children:"Group by"}),t.filter(b=>b).length>0&&o.jsx("div",{className:"flex items-center gap-1 ml-1 min-w-0",children:t.map((b,_)=>{if(!b)return null;const g=a(b,"");return o.jsxs(z.Fragment,{children:[o.jsx("span",{className:`rounded px-2 py-0.5 text-xs font-semibold flex-shrink-0 ${_===0?"bg-blue-100 text-blue-700":_===1?"bg-green-100 text-green-700":`${g.bg} ${g.text}`}`,children:b}),_<t.length-1&&t[_+1]&&o.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"})]},_)})})]}),o.jsxs("button",{onClick:b=>{b.preventDefault(),b.stopPropagation(),r(!0)},className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline flex-shrink-0",children:[o.jsx("span",{children:"What does this do?"}),o.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]})]})}),o.jsx("div",{className:"mt-2",children:o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[t.map((b,_)=>o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsxs("label",{className:"text-gray-600",children:["Level ",_+1,":"]}),o.jsxs("select",{value:b||"",onChange:g=>m(_,g.target.value),className:"rounded border px-2 py-1 text-xs",children:[o.jsx("option",{value:"",children:"(None)"}),v(_).map(g=>o.jsx("option",{value:g,children:g},g))]}),t.length>1&&o.jsx("button",{onClick:()=>f(_),className:"rounded border bg-white px-1.5 py-0.5 text-xs text-red-600 hover:bg-red-50",title:"Remove level",children:"×"})]},_)),o.jsx("button",{onClick:p,className:"rounded border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",title:"Add hierarchy level",children:"+"}),t.length===0&&o.jsx("div",{className:"text-gray-500 italic",children:"No hierarchy levels configured"})]})})]})}),i&&o.jsx(hx,{onClose:()=>r(!1)})]})}const _x=({onNew:e,onSave:t,onSaveAs:n,onImport:l,onExport:a,onManage:i,disabled:r=!1,hasUnsavedChanges:s=!1})=>{const[c,d]=A.useState(!1),u=A.useRef(null);A.useEffect(()=>{const p=f=>{u.current&&!u.current.contains(f.target)&&d(!1)};return c&&document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[c]),A.useEffect(()=>{const p=f=>{f.key==="Escape"&&c&&d(!1)};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[c]);const m=p=>{d(!1),p()};return o.jsxs("div",{className:"relative",ref:u,children:[o.jsxs("button",{onClick:()=>d(!c),disabled:r,className:`
          px-3 py-1.5 text-sm font-medium rounded-md
          flex items-center gap-2
          ${r?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}
          transition-colors duration-150
        `,children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),"Workspace",s&&o.jsx("span",{className:"w-2 h-2 bg-orange-500 rounded-full",title:"Unsaved changes"})]}),c&&o.jsx("div",{className:"absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50",children:o.jsxs("div",{className:"py-1",children:[o.jsxs("button",{onClick:()=>m(e),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"New Workspace"]}),o.jsx("hr",{className:"my-1 border-gray-200"}),o.jsxs("button",{onClick:()=>m(t),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})}),"Save",s&&o.jsx("span",{className:"ml-auto text-xs text-orange-600",children:"●"})]}),o.jsxs("button",{onClick:()=>m(n),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"Save As..."]}),o.jsx("hr",{className:"my-1 border-gray-200"}),o.jsxs("button",{onClick:()=>m(l),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),"Import from a file..."]}),o.jsxs("button",{onClick:()=>m(a),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-12"})}),"Export to a file..."]}),o.jsx("hr",{className:"my-1 border-gray-200"}),o.jsxs("button",{onClick:()=>m(i),className:"w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",children:[o.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Manage Workspaces..."]})]})})]})},vx=({currentWorkspace:e,recentWorkspaces:t,onSwitch:n,onManage:l,disabled:a=!1,hasUnsavedChanges:i=!1})=>{const[r,s]=A.useState(!1),c=A.useRef(null);A.useEffect(()=>{const m=p=>{c.current&&!c.current.contains(p.target)&&s(!1)};return r&&document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[r]),A.useEffect(()=>{const m=p=>{p.key==="Escape"&&r&&s(!1)};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[r]);const d=m=>{s(!1),n(m)},u=()=>{s(!1),l()};return o.jsxs("div",{className:"relative",ref:c,children:[o.jsxs("button",{onClick:()=>s(!r),disabled:a,className:`
          px-3 py-1.5 text-sm font-medium rounded-md
          flex items-center gap-2 min-w-[180px]
          ${a?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}
          transition-colors duration-150
        `,children:[o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})}),o.jsx("span",{className:"flex-1 truncate text-left",children:(e==null?void 0:e.name)||"No Workspace"}),i&&o.jsx("span",{className:"w-2 h-2 bg-orange-500 rounded-full flex-shrink-0",title:"Unsaved changes"}),o.jsx("svg",{className:`w-4 h-4 flex-shrink-0 transition-transform ${r?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r&&o.jsx("div",{className:"absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto",children:o.jsxs("div",{className:"py-1",children:[o.jsx("div",{className:"px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Recent Workspaces"}),t.length===0?o.jsx("div",{className:"px-4 py-3 text-sm text-gray-500 italic",children:"No workspaces available"}):t.map(m=>o.jsx("button",{onClick:()=>d(m.id),className:`
                    w-full text-left px-4 py-2 text-sm
                    hover:bg-gray-100 transition-colors
                    ${m.id===(e==null?void 0:e.id)?"bg-blue-50 text-blue-700 font-medium":"text-gray-700"}
                  `,children:o.jsxs("div",{className:"flex items-center gap-2",children:[m.id===(e==null?void 0:e.id)&&o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"truncate",children:m.name}),m.type==="builtin"&&o.jsx("span",{className:"px-2 py-0.5 text-xs font-medium bg-purple-600 text-white rounded flex-shrink-0",children:"Built-in"})]}),o.jsxs("div",{className:"text-xs text-gray-500 mt-0.5",children:[m.chartCount," ",m.chartCount===1?"chart":"charts"]})]})]})},m.id)),o.jsx("hr",{className:"my-1 border-gray-200"}),o.jsxs("button",{onClick:u,className:"w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 flex items-center gap-2 font-medium",children:[o.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Manage Workspaces"]})]})})]})},wx=({isOpen:e,title:t,message:n,confirmLabel:l="Confirm",cancelLabel:a="Cancel",confirmVariant:i="primary",onConfirm:r,onCancel:s})=>{if(A.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&s()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,s]),!e)return null;const c=i==="danger"?"bg-red-600 hover:bg-red-700 text-white":"bg-blue-600 hover:bg-blue-700 text-white";return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsx("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full",children:o.jsxs("div",{className:"p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:t}),o.jsx("p",{className:"text-gray-600 mb-6",children:n}),o.jsxs("div",{className:"flex justify-end gap-3",children:[o.jsx("button",{onClick:s,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",children:a}),o.jsx("button",{onClick:r,className:`px-4 py-2 text-sm font-medium rounded-md transition-colors ${c}`,children:l})]})]})})})},Cx=({isOpen:e,workspaces:t,currentWorkspaceId:n,onClose:l,onSwitch:a,onRename:i,onDuplicate:r,onDelete:s,onExport:c,onSetDefault:d})=>{const[u,m]=A.useState(null),[p,f]=A.useState(""),[v,b]=A.useState(null);if(A.useEffect(()=>{e||(m(null),f(""))},[e]),A.useEffect(()=>{const w=L=>{L.key==="Escape"&&e&&!v&&l()};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[e,v,l]),!e)return null;const _=[...t].sort((w,L)=>w.id===n?-1:L.id===n?1:new Date(L.updatedAt).getTime()-new Date(w.updatedAt).getTime()),g=w=>{m(w.id),f(w.name)},y=()=>{u&&p.trim()&&(i(u,p.trim()),m(null),f(""))},h=()=>{m(null),f("")},S=w=>{b({workspaceId:w.id,workspaceName:w.name})},k=()=>{v&&(s(v.workspaceId),b(null))},P=w=>{const L=new Date(w),I=new Date().getTime()-L.getTime(),M=Math.floor(I/6e4),E=Math.floor(I/36e5),q=Math.floor(I/864e5);return M<1?"Just now":M<60?`${M}m ago`:E<24?`${E}h ago`:q<7?`${q}d ago`:L.toLocaleDateString()};return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Manage Workspaces"}),o.jsx("button",{onClick:l,className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:_.length===0?o.jsxs("div",{className:"text-center py-12",children:[o.jsx("svg",{className:"w-16 h-16 mx-auto text-gray-300 mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})}),o.jsx("p",{className:"text-gray-500",children:"No workspaces available"})]}):o.jsx("div",{className:"space-y-2",children:_.map(w=>o.jsx("div",{className:`
                      border rounded-lg p-4 transition-all
                      ${w.id===n?"border-blue-500 bg-blue-50":w.type==="builtin"?"border-purple-200 bg-purple-50 hover:border-purple-300":"border-gray-200 hover:border-gray-300 bg-white"}
                    `,children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsxs("div",{className:"flex-1 min-w-0",children:[u===w.id?o.jsx("input",{type:"text",value:p,onChange:L=>f(L.target.value),onKeyDown:L=>{L.key==="Enter"&&y(),L.key==="Escape"&&h()},className:"w-full px-2 py-1 border border-blue-500 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none",autoFocus:!0}):o.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[o.jsx("h3",{className:"text-lg font-medium text-gray-900 truncate",children:w.name}),w.type==="builtin"&&o.jsx("span",{className:"px-2 py-0.5 text-xs font-medium bg-purple-600 text-white rounded",children:"Built-in"}),w.isDefault&&o.jsx("span",{className:"px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded",children:"Default"}),w.id===n&&o.jsx("span",{className:"px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded",children:"Current"})]}),o.jsxs("div",{className:"flex items-center gap-4 mt-1 text-sm text-gray-500",children:[o.jsxs("span",{children:[w.chartCount," ",w.chartCount===1?"chart":"charts"]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["Updated ",P(w.updatedAt)]})]})]}),o.jsx("div",{className:"flex items-center gap-2",children:u===w.id?o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:y,className:"p-2 text-green-600 hover:bg-green-50 rounded transition-colors",title:"Save",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),o.jsx("button",{onClick:h,className:"p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors",title:"Cancel",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}):o.jsxs(o.Fragment,{children:[w.id!==n&&o.jsx("button",{onClick:()=>a(w.id),className:"p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors",title:"Switch to this workspace",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})})}),!w.isDefault&&o.jsx("button",{onClick:()=>d(w.id),className:"p-2 text-yellow-600 hover:bg-yellow-50 rounded transition-colors",title:"Set as default workspace",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})}),o.jsx("button",{onClick:()=>w.type!=="builtin"&&g(w),disabled:w.type==="builtin",className:`p-2 rounded transition-colors ${w.type==="builtin"?"text-gray-400 cursor-not-allowed":"text-gray-600 hover:bg-gray-100"}`,title:w.type==="builtin"?"Built-in workspaces cannot be renamed":"Rename",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),o.jsx("button",{onClick:()=>r(w.id),className:"p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors",title:"Duplicate",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})})}),o.jsx("button",{onClick:()=>c(w.id),className:"p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors",title:"Export to a file...",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-12"})})}),o.jsx("button",{onClick:()=>w.type!=="builtin"&&S(w),disabled:w.type==="builtin",className:`p-2 rounded transition-colors ${w.type==="builtin"?"text-gray-400 cursor-not-allowed":"text-red-600 hover:bg-red-50"}`,title:w.type==="builtin"?"Built-in workspaces cannot be deleted":"Delete",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})})]})},w.id))})}),o.jsx("div",{className:"p-4 border-t border-gray-200 bg-gray-50",children:o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsxs("p",{className:"text-sm text-gray-600",children:[_.length," ",_.length===1?"workspace":"workspaces"]}),o.jsx("button",{onClick:l,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",children:"Close"})]})})]})}),o.jsx(wx,{isOpen:v!==null,title:"Delete Workspace",message:`Are you sure you want to delete "${v==null?void 0:v.workspaceName}"? This action cannot be undone.`,confirmLabel:"Delete",cancelLabel:"Cancel",confirmVariant:"danger",onConfirm:k,onCancel:()=>b(null)})]})},Sx=({isOpen:e,currentName:t,onSave:n,onCancel:l})=>{const[a,i]=A.useState(""),[r,s]=A.useState("");if(A.useEffect(()=>{e&&(i(`${t} (Copy)`),s(""))},[e,t]),A.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&l()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,l]),!e)return null;const c=()=>{const d=a.trim();if(!d){s("Workspace name is required");return}n(d)};return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsx("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full",children:o.jsxs("div",{className:"p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Save Workspace As"}),o.jsx("div",{className:"space-y-4",children:o.jsxs("div",{children:[o.jsx("label",{htmlFor:"workspace-name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Workspace Name *"}),o.jsx("input",{id:"workspace-name",type:"text",value:a,onChange:d=>{i(d.target.value),s("")},onKeyDown:d=>{d.key==="Enter"&&c()},className:`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${r?"border-red-500":"border-gray-300"}`,placeholder:"Enter workspace name",autoFocus:!0}),r&&o.jsx("p",{className:"mt-1 text-sm text-red-600",children:r})]})}),o.jsxs("div",{className:"flex justify-end gap-3 mt-6",children:[o.jsx("button",{onClick:l,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",children:"Cancel"}),o.jsx("button",{onClick:c,className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors",children:"Save"})]})]})})})},Lx=({isOpen:e,workspaceName:t,onSave:n,onDiscard:l,onCancel:a})=>(A.useEffect(()=>{const i=r=>{r.key==="Escape"&&e&&a()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,a]),e?o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsx("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full",children:o.jsxs("div",{className:"p-6",children:[o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"flex-shrink-0",children:o.jsx("svg",{className:"w-6 h-6 text-orange-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Unsaved Changes"}),o.jsxs("p",{className:"text-gray-600 mb-4",children:['You have unsaved changes in "',t,'". What would you like to do?']})]})]}),o.jsxs("div",{className:"flex flex-col gap-2 mt-6",children:[o.jsx("button",{onClick:n,className:"w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors",children:"Save Changes"}),o.jsx("button",{onClick:l,className:"w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",children:"Discard Changes"}),o.jsx("button",{onClick:a,className:"w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white rounded-md hover:bg-gray-100 transition-colors",children:"Cancel"})]})]})})}):null),kx="1.0",Dx="ws-builtin-battery-details",Tx="Battery Details",Ex="builtin",Px={charts:[{id:"chart-0",row:0,col:0,selectedPoints:{"40101:socBat":["first"],"40101:pBatChg":["first"],"40101:pBatDischg":["first"],"40101:iBat":["first"],"40101:vBat":["first"]}},{id:"chart-4",row:0,col:1,selectedPoints:{"40101:locBatCellVoltMax":["first"],"40101:vBatCellMax":["first"],"40101:vBatCellMin":["first"],"40101:locBatCellVoltMin":["first"]}},{id:"chart-5",row:1,col:0,selectedPoints:{"40104:ACChargeStatus":["first"],"40101:bmsReqForceChg":["first"]}},{id:"chart-6",row:0,col:2,selectedPoints:{"40101:tempBatCellMax":["first"],"40101:locBatCellTempMax":["first"],"40101:tempBatCellMin":["first"],"40101:locBatCellTempMin":["first"]}}],rowHeights:{0:968,1:824},columnWidths:{0:780,1:780,2:780},nextChartId:7,activeChartId:"chart-6"},Nx={version:kx,id:Dx,name:Tx,type:Ex,data:Px},Ax="1.0",Vx="ws-builtin-generator-details",Ix="Generator details",Rx="builtin",Mx={charts:[{id:"chart-0",row:0,col:0,selectedPoints:{"40101:pGenTot":["first"],"40101:iGenTot":["first"],"40101:pBatChg":["first"],"40101:pBkupTot":["first"],"40101:pLoad":["first"]}},{id:"chart-1",row:1,col:0,selectedPoints:{"40101:genRelayStat":["first"],"40101:genDryContactState":["first"],"40103:genFault":["first"]}},{id:"chart-2",row:0,col:1,selectedPoints:{"40101:vGenLL":["first"],"40101:vGenLN":["first"]}},{id:"chart-3",row:1,col:1,selectedPoints:{"40104:socGenEnd":["first"],"40104:socGenStart":["first"],"40101:socBat":["first"]}}],rowHeights:{0:894,1:902},columnWidths:{0:780,1:780},nextChartId:4,activeChartId:"chart-3"},Gx={version:Ax,id:Vx,name:Ix,type:Rx,data:Mx},jx="1.0",Bx="ws-builtin-power-flows",Ox="Power Flows",Fx="builtin",qx={charts:[{id:"chart-0",row:0,col:0,selectedPoints:{"40101:pPvTotal":["first"],"40101:pGridImpTot":["first"],"40101:pGridExpTot":["first"],"40101:pBatChg":["first"],"40101:pBatDischg":["first"]}},{id:"chart-1",row:0,col:1,selectedPoints:{"40101:pPvTotal":["first"],"40101:pLoad":["first"]}},{id:"chart-2",row:1,col:0,selectedPoints:{"40101:pGridImpTot":["first"],"40101:pGridExpTot":["first"]}},{id:"chart-3",row:1,col:1,selectedPoints:{"40101:pBatChg":["first"],"40101:pBatDischg":["first"]}}],rowHeights:{0:520,1:520},columnWidths:{0:780,1:780},nextChartId:4,activeChartId:"chart-0"},Ux={version:jx,id:Bx,name:Ox,type:Fx,data:qx},Wx="1.0",$x="ws-builtin-solar",Hx="Solar",zx="builtin",Kx={charts:[{id:"chart-0",row:0,col:0,selectedPoints:{"40101:pPvTotal":["first"],"40102:ePvTdy":["first"],"40101:pMppt1":["first"],"40101:pMppt2":["first"],"40101:pMppt3":["first"],"40101:pMppt4":["first"]}},{id:"chart-4",row:0,col:1,selectedPoints:{"40101:iMppt2":["first"],"40101:iMppt1":["first"],"40101:vMppt1":["first"],"40101:vMppt2":["first"],"40101:iMppt3":["first"],"40101:vMppt3":["first"],"40101:iMppt4":["first"],"40101:vMppt4":["first"]}},{id:"chart-5",row:1,col:0,selectedPoints:{"40103:dcPvFault":["first"],"40103:dcPvWarning":["first"]}}],rowHeights:{0:948,1:956},columnWidths:{0:780,1:780},nextChartId:6,activeChartId:"chart-5"},Qx={version:Wx,id:$x,name:Hx,type:zx,data:Kx};class ol extends Error{constructor(t,n,l){super(t),this.code=n,this.details=l,this.name="WorkspaceApiError"}}var Rn=(e=>(e.NOT_FOUND="NOT_FOUND",e.UNAUTHORIZED="UNAUTHORIZED",e.VALIDATION_ERROR="VALIDATION_ERROR",e.CONFLICT="CONFLICT",e.SERVER_ERROR="SERVER_ERROR",e.NETWORK_ERROR="NETWORK_ERROR",e))(Rn||{});const fy="historicalData_userSettings";function yy(){try{const e=localStorage.getItem(fy);if(e)return JSON.parse(e)}catch(e){console.error("Failed to load user settings:",e)}return{}}function Yx(e){try{localStorage.setItem(fy,JSON.stringify(e))}catch(t){console.error("Failed to save user settings:",t)}}function Vr(){return yy().defaultWorkspaceId}function ac(e){const t=yy();t.defaultWorkspaceId=e,Yx(t)}const Jx=Object.assign({"../workspace/builtIns/battery-details.json":Nx,"../workspace/builtIns/generator-details.json":Gx,"../workspace/builtIns/power-flows.json":Ux,"../workspace/builtIns/solar.json":Qx}),gy="historicalData_workspaces",by="historicalData_workspaceCounter",Fe=new Map;let Xa=0;const Hu=100,Nn=e=>new Promise(t=>setTimeout(t,e));function nr(){try{const e=Array.from(Fe.values());localStorage.setItem(gy,JSON.stringify(e)),localStorage.setItem(by,String(Xa))}catch(e){console.error("[MOCK] Failed to save workspaces to localStorage:",e)}}function Xx(){try{const e=localStorage.getItem(gy),t=localStorage.getItem(by);if(e){const n=JSON.parse(e);Fe.clear(),n.forEach(l=>{Fe.set(l.id,l)})}t&&(Xa=parseInt(t,10))}catch(e){console.error("[MOCK] Failed to load workspaces from localStorage:",e)}}function Zx(e){const t=new Date().toISOString();return{id:e.id,name:e.name,type:e.type,createdAt:t,updatedAt:t,data:e.data}}function e_(){var n;Xx();const e=Object.values(Jx);let t=!1;if(e.forEach(l=>{if(!Fe.has(l.id)){const a=Zx(l);Fe.set(a.id,a),t=!0}}),Fe.size===e.length&&!Vr()){const l=e.find(i=>i.id==="ws-builtin-power-flows"),a=(l==null?void 0:l.id)||((n=e[0])==null?void 0:n.id);a&&ac(a)}(t||Fe.size===e.length)&&(Xa=Math.max(Xa,1),nr())}e_();class t_{async getWorkspaces(t){await Nn(Hu);let n=Array.from(Fe.values());t.limit&&t.limit>0&&(n=n.slice(0,t.limit));const l=Vr();return{workspaces:n.map(i=>({id:i.id,name:i.name,type:i.type,isDefault:i.id===l,createdAt:i.createdAt,updatedAt:i.updatedAt,chartCount:i.data.charts.length}))}}async getWorkspace(t){await Nn(Hu);const n=Fe.get(t.id);if(!n)throw new ol(`Workspace not found: ${t.id}`,Rn.NOT_FOUND);return{workspace:n}}async createWorkspace(t){await Nn(150);const n=new Date().toISOString(),l={id:`ws-${Xa++}`,name:t.name,type:"user",createdAt:n,updatedAt:n,data:t.data};return Fe.set(l.id,l),t.isDefault&&ac(l.id),nr(),{workspace:l}}async updateWorkspace(t){await Nn(150);const n=Fe.get(t.id);if(!n)throw new ol(`Workspace not found: ${t.id}`,Rn.NOT_FOUND);if(n.type==="builtin")throw new ol("Cannot modify built-in workspaces",Rn.VALIDATION_ERROR);const l=new Date().toISOString(),a={...n,name:t.name??n.name,data:t.data??n.data,updatedAt:l};return Fe.set(t.id,a),nr(),{workspace:a}}async deleteWorkspace(t){await Nn(100);const n=Fe.get(t.id);if(!n)throw new ol(`Workspace not found: ${t.id}`,Rn.NOT_FOUND);if(n.type==="builtin")throw new ol("Cannot delete built-in workspaces",Rn.VALIDATION_ERROR);return Fe.delete(t.id),nr(),{success:!0}}async setDefaultWorkspace(t){if(await Nn(100),!Fe.get(t.id))throw new ol(`Workspace not found: ${t.id}`,Rn.NOT_FOUND);return ac(t.id),{success:!0}}async getDefaultWorkspace(){await Nn(100);const t=Vr();return{workspace:(t?Fe.get(t):void 0)??null}}}const n_=new t_,Et=n_;function l_(e,t){return e.map(n=>({id:n.id,row:n.row,col:n.col,selectedPoints:Object.fromEntries(Array.from(n.selectedPoints.entries()).map(([l,a])=>{var r;const i=Array.from(a);if(t&&t.length>0){const s=t.map(u=>u.id),c=(r=t.find(u=>u.isPrimary))==null?void 0:r.id,d=d_(i,s,c);if(d)return[l,[d]]}return[l,i]}))}))}function a_(e,t){const n=new Set;for(const l of e)switch(l){case"all":t.forEach(i=>n.add(i.id));break;case"first":t.length>0&&n.add(t[0].id);break;case"primary":const a=t.find(i=>i.isPrimary);a&&n.add(a.id);break}return Array.from(n)}function zu(e){return e==="first"||e==="primary"||e==="all"}function i_(e,t){return e.map(n=>({id:n.id,row:n.row,col:n.col,selectedPoints:new Map(Object.entries(n.selectedPoints).map(([l,a])=>{if(Array.isArray(a)&&a.some(zu)&&t){const r=a.filter(zu),s=a_(r,t);return[l,new Set(s)]}else return[l,new Set(a)]}))}))}function ji(e,t,n,l,a,i){return{charts:l_(e,i),rowHeights:Object.fromEntries(t),columnWidths:Object.fromEntries(n),nextChartId:l,activeChartId:a}}function r_(e){if(!u_(e))return"Invalid workspace structure";const t=[];for(let n=0;n<e.charts.length;n++){const l=e.charts[n];for(const[a,i]of Object.entries(l.selectedPoints)){if(!Array.isArray(i))return`Chart ${n+1}: Invalid format for point '${a}'`;const r=i.filter(s=>!c_(s));r.length>0&&t.push({chartNum:n+1,pointId:a,values:r})}}if(t.length>0)return`Cannot save as workspace. The following points have invalid equipment selection:

${t.map(({chartNum:l,pointId:a,values:i})=>`  - Chart ${l}, Point '${a}': ${i.map(r=>`'${r}'`).join(", ")}`).join(`
`)}

You can select either 'primary', 'first', or 'all'. Please update these points to use one of these valid options.`}function o_(e,t){const n=r_(t);if(n)return{success:!1,error:n};const l=JSON.stringify({version:"1.0",name:e,exportedAt:new Date().toISOString(),data:t},null,2),a=new Blob([l],{type:"application/json"}),i=URL.createObjectURL(a),r=document.createElement("a");return r.href=i,r.download=`${e.replace(/\s+/g,"_")}_workspace.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i),{success:!0}}function s_(e){return new Promise((t,n)=>{const l=new FileReader;l.onload=a=>{var i;try{const r=(i=a.target)==null?void 0:i.result,s=JSON.parse(r);if(!s.data||!s.data.charts||!s.data.rowHeights||!s.data.columnWidths)throw new Error("Invalid workspace file structure");if(typeof s.data.nextChartId!="number")throw new Error("Invalid workspace file: missing nextChartId");t({name:s.name||"Imported Workspace",data:s.data})}catch(r){n(new Error(`Failed to parse workspace file: ${r instanceof Error?r.message:"Unknown error"}`))}},l.onerror=()=>{n(new Error("Failed to read file"))},l.readAsText(e)})}function c_(e){return e==="primary"||e==="first"||e==="all"}function d_(e,t,n){if(e.length!==0){if(e.length===t.length){const l=[...e].sort(),a=[...t].sort();if(l.every((i,r)=>i===a[r]))return"all"}if(n&&e.length===1&&e[0]===n)return"primary";if(e.length===1&&t.length>0&&e[0]===t[0])return"first"}}function u_(e){if(!e||typeof e!="object"||!Array.isArray(e.charts)||typeof e.rowHeights!="object"||typeof e.columnWidths!="object"||typeof e.nextChartId!="number")return!1;for(const t of e.charts){if(typeof t.id!="string"||typeof t.row!="number"||typeof t.col!="number"||typeof t.selectedPoints!="object"||t.selectedPoints===null)return!1;for(const n of Object.values(t.selectedPoints))if(!Array.isArray(n))return!1}return!0}function m_(e,t){return JSON.stringify(e)!==JSON.stringify(t)}function Bi(e){return JSON.parse(JSON.stringify(e))}function p_(e){const[t,n]=A.useState(null),[l,a]=A.useState([]),[i,r]=A.useState(!1),[s,c]=A.useState(!1),[d,u]=A.useState(null),m=A.useRef(null),p=A.useCallback(async()=>{try{c(!0),u(null);const I=await Et.getWorkspaces({});a(I.workspaces)}catch(I){const M=I instanceof Error?I.message:"Failed to load workspaces";u(M),console.error("Failed to load workspaces:",I)}finally{c(!1)}},[]),f=A.useCallback(async I=>{try{c(!0),u(null);const M=await Et.getWorkspace({id:I});n(M.workspace),m.current=Bi(M.workspace.data),r(!1),e!=null&&e.onWorkspaceLoaded&&e.onWorkspaceLoaded(M.workspace.data)}catch(M){const E=M instanceof Error?M.message:"Failed to load workspace";u(E),console.error("Failed to load workspace:",M)}finally{c(!1)}},[e]),v=A.useCallback(async(I,M)=>{try{c(!0),u(null);const E=await Et.createWorkspace({name:I,data:M});return n(E.workspace),m.current=Bi(E.workspace.data),r(!1),await p(),E.workspace}catch(E){const q=E instanceof Error?E.message:"Failed to create workspace";throw u(q),console.error("Failed to create workspace:",E),E}finally{c(!1)}},[p]),b=A.useCallback(async I=>{if(!t)throw new Error("No workspace is currently loaded");const M=I||t.data;try{c(!0),u(null);const E=await Et.updateWorkspace({id:t.id,data:M});n(E.workspace),m.current=Bi(E.workspace.data),r(!1),await p()}catch(E){const q=E instanceof Error?E.message:"Failed to save workspace";throw u(q),console.error("Failed to save workspace:",E),E}finally{c(!1)}},[t,p]),_=A.useCallback(I=>{if(!t)return;const M={...t,data:I};n(M),m.current&&r(m_(m.current,I))},[t]),g=A.useCallback(async(I,M)=>{try{c(!0),u(null);const E=await Et.updateWorkspace({id:I,name:M});(t==null?void 0:t.id)===I&&n(E.workspace),await p()}catch(E){const q=E instanceof Error?E.message:"Failed to rename workspace";throw u(q),console.error("Failed to rename workspace:",E),E}finally{c(!1)}},[t,p]),y=A.useCallback(async I=>{try{c(!0),u(null);const E=(await Et.getWorkspace({id:I})).workspace;return await v(`${E.name} (Copy)`,E.data)}catch(M){const E=M instanceof Error?M.message:"Failed to duplicate workspace";throw u(E),console.error("Failed to duplicate workspace:",M),M}finally{c(!1)}},[v]),h=A.useCallback(async I=>{try{c(!0),u(null),await Et.deleteWorkspace({id:I}),(t==null?void 0:t.id)===I&&(n(null),m.current=null,r(!1)),await p()}catch(M){const E=M instanceof Error?M.message:"Failed to delete workspace";throw u(E),console.error("Failed to delete workspace:",M),M}finally{c(!1)}},[t,p]),S=A.useCallback(async I=>{try{c(!0),u(null);const M=await Et.getWorkspace({id:I}),E=o_(M.workspace.name,M.workspace.data);if(!E.success)throw new Error(E.error||"Failed to export workspace")}catch(M){const E=M instanceof Error?M.message:"Failed to export workspace";throw u(E),console.error("Failed to export workspace:",M),M}finally{c(!1)}},[]),k=A.useCallback(async I=>{try{c(!0),u(null);const{name:M,data:E}=await s_(I);return await v(M,E)}catch(M){const E=M instanceof Error?M.message:"Failed to import workspace";throw u(E),console.error("Failed to import workspace:",M),M}finally{c(!1)}},[v]),P=A.useCallback(async I=>{try{c(!0),u(null),await Et.setDefaultWorkspace({id:I}),await p()}catch(M){const E=M instanceof Error?M.message:"Failed to set default workspace";throw u(E),console.error("Failed to set default workspace:",M),M}finally{c(!1)}},[p]),w=A.useCallback(()=>{t&&(m.current=Bi(t.data),r(!1))},[t]);return A.useEffect(()=>{p()},[p]),A.useEffect(()=>{t||(async()=>{try{const M=await Et.getDefaultWorkspace();M&&M.workspace&&await f(M.workspace.id)}catch(M){console.error("Failed to load default workspace:",M)}})()},[]),[{currentWorkspace:t,workspaces:l,isDirty:i,isLoading:s,error:d},{loadWorkspaces:p,loadWorkspace:f,createNewWorkspace:v,saveCurrentWorkspace:b,updateCurrentWorkspace:_,renameWorkspace:g,duplicateWorkspace:y,deleteWorkspace:h,exportWorkspace:S,importWorkspace:k,setDefaultWorkspace:P,markClean:w}]}function f_(e){return e==null?"":typeof e=="number"?String(Math.trunc(e)):String(e).trim()}function y_(e){return e==null?"":String(e).trim()}function Ku(e,t){try{const n=ry.parse(e);return((n==null?void 0:n.protocols)??[]).map(a=>{var c;if(!a.entry)return null;const i=y_(a.point??a.entry.name),r=f_(a.model);if(!i||!r)return null;const s=Array.isArray(a.labels)?a.labels:Array.isArray((c=a.entry)==null?void 0:c.labels)?a.entry.labels:[];return{block:String(a.block??"fixed"),entry:a.entry,model:r,point:i,labels:s}}).filter(a=>!!a)}catch(n){return console.error(`Failed to parse ${t}`,n),[]}}function g_(){const e=Ku(H0,"ss40k_inverter.yaml"),t=Ku(z0,"lifecycle_events.yaml");return[...e,...t]}const An=g_();let ic=null;try{ic=ry.parse(K0)}catch(e){console.error("Failed to parse label_help.yaml",e)}function pa(e,t){if(!ic)return null;const n=ic.label_families[e];if(!n)return null;if(t){const l=n.labels[t];return(l==null?void 0:l.help)||null}return n.help||null}function b_(e,t){const n=new Map;return e.forEach(l=>{const a=Array.isArray(l.labels)?l.labels:[];if(a.length===0)return;if(t.length===0){const s=a[0];if(s){const c=s.label_text;n.has(c)||n.set(c,[]),n.get(c).push(l)}return}let i=n,r=-1;if(!(i instanceof Map)){console.error("groupByLabelHierarchy: currentMap is not a Map",i);return}for(let s=0;s<t.length;s++){const c=t[s];a.find(u=>u.label_family===c)&&(r=s)}if(r!==-1)for(let s=0;s<=r;s++){if(!(i instanceof Map)){console.error("groupByLabelHierarchy: currentMap became non-Map at level",s,i);return}const c=t[s],d=a.find(m=>m.label_family===c);if(!d)continue;const u=d.label_text;if(s===r){i.has(u)||i.set(u,new Map);const m=i.get(u);if(Array.isArray(m)){const v=m,b=new Map;b.set("",v),i.set(u,b)}const p=i.get(u);if(!(p instanceof Map)){console.error("Expected Map for finalMap but got:",typeof p,p);return}p.has("")||p.set("",[]);const f=p.get("");if(!Array.isArray(f)){console.error("Expected array for itemsList but got:",typeof f,f);return}f.push(l)}else{if(!i.has(u))i.set(u,new Map);else{const p=i.get(u);if(Array.isArray(p)){const f=p,v=new Map;v.set("",f),i.set(u,v)}}const m=i.get(u);if(!(m instanceof Map)){console.error("Expected Map for nestedMap but got:",typeof m,m,"at level",s,"key",u);return}i=m}}}),n}function h_(e){const t=new Map;return e.forEach(n=>{(Array.isArray(n.labels)?n.labels:[]).forEach(a=>{t.has(a.label_family)||t.set(a.label_family,new Set),t.get(a.label_family).add(a.label_text)})}),t}const ts=[{bg:"bg-blue-100",text:"text-blue-800",border:"border-blue-300"},{bg:"bg-green-100",text:"text-green-800",border:"border-green-300"},{bg:"bg-purple-100",text:"text-purple-800",border:"border-purple-300"},{bg:"bg-yellow-100",text:"text-yellow-800",border:"border-yellow-300"},{bg:"bg-pink-100",text:"text-pink-800",border:"border-pink-300"},{bg:"bg-indigo-100",text:"text-indigo-800",border:"border-indigo-300"},{bg:"bg-red-100",text:"text-red-800",border:"border-red-300"},{bg:"bg-teal-100",text:"text-teal-800",border:"border-teal-300"},{bg:"bg-orange-100",text:"text-orange-800",border:"border-orange-300"},{bg:"bg-cyan-100",text:"text-cyan-800",border:"border-cyan-300"},{bg:"bg-violet-100",text:"text-violet-800",border:"border-violet-300"},{bg:"bg-amber-100",text:"text-amber-800",border:"border-amber-300"},{bg:"bg-lime-100",text:"text-lime-800",border:"border-lime-300"},{bg:"bg-emerald-100",text:"text-emerald-800",border:"border-emerald-300"},{bg:"bg-sky-100",text:"text-sky-800",border:"border-sky-300"},{bg:"bg-rose-100",text:"text-rose-800",border:"border-rose-300"},{bg:"bg-fuchsia-100",text:"text-fuchsia-800",border:"border-fuchsia-300"},{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"},{bg:"bg-stone-100",text:"text-stone-800",border:"border-stone-300"},{bg:"bg-zinc-100",text:"text-zinc-800",border:"border-zinc-300"}],Qu=new Map([["component",0],["feature",1],["detail_level",2],["level of detail",2],["info",3],["unit",4]]);function ns(e,t){const n=e.toLowerCase();if(Qu.has(n)){const i=Qu.get(n);return ts[i]}const l=n.split("").reduce((i,r)=>(i<<5)-i+r.charCodeAt(0),0),a=4+Math.abs(l)%(ts.length-4);return ts[a]}function x_({show:e,onToggle:t}){return o.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 text-sm",children:[o.jsx("input",{type:"checkbox",className:"h-4 w-4",checked:e,onChange:n=>t(n.target.checked)}),"Show help text"]})}function __(){var ci,ta,Zt;const[e,t]=A.useState(""),n=z.useRef(null),[l,a]=z.useState(new Map),[i,r]=z.useState(null),[s,c]=z.useState(new Set(py)),d=A.useMemo(()=>oy.map((V,x)=>({id:V,isPrimary:x===0})),[]),[u,m]=p_({onWorkspaceLoaded:A.useCallback(V=>{if(n.current){const C={charts:i_(V.charts,d),rowHeights:new Map(Object.entries(V.rowHeights).map(([D,T])=>[Number(D),T])),columnWidths:new Map(Object.entries(V.columnWidths).map(([D,T])=>[Number(D),T])),nextChartId:V.nextChartId,activeChartId:V.activeChartId};n.current.setChartGridState(C)}},[n,d])}),[p,f]=A.useState(!1),[v,b]=A.useState(!1),[_,g]=A.useState(!1),[y,h]=A.useState(null),[S,k]=A.useState(null),P=z.useRef(null),w=z.useMemo(()=>{if(!i)return{top:"1rem",left:"1rem",showArrow:!1,arrowOnLeft:!0};const V=800,x=8,C=window.innerWidth;let D=i.right+x,T=!0;return D+V>C-20&&(D=i.left-V-x,T=!1,D<20&&(D=20,T=!0)),{top:`${i.top}px`,left:`${D}px`,showArrow:!0,arrowOnLeft:T}},[i]),[L,U]=A.useState(!1),[I,M]=A.useState(new Set),[E,q]=A.useState(()=>new Set),[ee,B]=A.useState("Standard"),[X,ie]=A.useState(["Equipment","Component","Type of Data"]),[R,G]=A.useState(!0),j=z.useRef(null),W=z.useRef(null),[Z,se]=z.useState(""),[te,ne]=z.useState(!0),[oe,ke]=z.useState(!0),[Mt,de]=z.useState(!1),[Ie,kn]=z.useState(!1),[Yt,Dn]=z.useState("sequential"),Gt=z.useRef(0),$e=z.useRef(0),Tn=z.useRef(!0);z.useEffect(()=>{if(!W.current)return;const V=()=>{if(!W.current)return;const D=W.current,T=D.scrollTop;if(Date.now()-$e.current<500){Gt.current=T;return}if(Tn.current){Tn.current=!1,Gt.current=T;return}T>Gt.current&&T>100?oe||ke(!0):T<50&&oe&&ke(!1),Gt.current=T;const O=D.querySelectorAll('[id^="group-"]');let $="";O.forEach(Y=>{const K=Y.getBoundingClientRect(),H=D.getBoundingClientRect();K.top-H.top<=H.height*.3&&K.bottom>H.top&&($=Y.id)}),$&&$!==Z&&se($)},x=setTimeout(V,100),C=W.current;return C.addEventListener("scroll",V),()=>{clearTimeout(x),C.removeEventListener("scroll",V)}},[Z,oe]),z.useEffect(()=>{const V=x=>{x.key==="Escape"&&(Mt?de(!1):R&&G(!1))};return document.addEventListener("keydown",V),()=>{document.removeEventListener("keydown",V)}},[R,Mt]),z.useEffect(()=>{if(!R)return;const V=x=>{const C=x.target;C&&(j.current&&j.current.contains(C)||C.closest('[data-role="sidebar-toggle"]')||G(!1))};return document.addEventListener("mousedown",V),document.addEventListener("touchstart",V,{passive:!0}),()=>{document.removeEventListener("mousedown",V),document.removeEventListener("touchstart",V)}},[R]);const Yl=V=>{R?el(V):(G(!0),setTimeout(()=>{el(V)},300))},el=V=>{if(!W.current)return;const x=W.current.querySelector(`[data-point-key="${V}"]`);x&&(x.scrollIntoView({behavior:"smooth",block:"center"}),x.classList.add("bg-blue-100"),setTimeout(()=>{x.classList.remove("bg-blue-100")},1e3))},fo=()=>new Set(s),oi=V=>{c(new Set(V))},Jl=A.useMemo(()=>h_(An),[]),yo=A.useMemo(()=>[...Jl.keys()].sort(),[Jl]),Xl=A.useMemo(()=>{let V=An;if(V=V.filter(C=>(Array.isArray(C.labels)?C.labels:[]).length>0),e){const C=e.toLowerCase();V=V.filter(D=>(D.entry.description||"").toLowerCase().includes(C)||(D.entry.longdescription||"").toLowerCase().includes(C)||(D.entry.name||"").toLowerCase().includes(C)?!0:(Array.isArray(D.labels)?D.labels:[]).some(O=>{const $=pa(O.label_family,O.label_text);return $&&$.toLowerCase().includes(C)}))}const x=(()=>{switch(ee){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();if(V=V.filter(C=>{const T=(Array.isArray(C.labels)?C.labels:[]).filter(N=>N.label_family==="Level of Detail").map(N=>N.label_text);return T.length===0?!0:T.some(N=>x.includes(N))}),E.size>0){const C=new Map;E.forEach(D=>{const[T,N]=D.split(":",2);C.has(T)||C.set(T,new Set),C.get(T).add(N)}),V=V.filter(D=>{const T=Array.isArray(D.labels)?D.labels:[];if(T.length===0)return!1;const N=new Map;T.forEach(O=>{N.has(O.label_family)||N.set(O.label_family,new Set),N.get(O.label_family).add(O.label_text)});for(const[O,$]of C.entries()){const Y=N.get(O);if(!Y||![...$].some(H=>Y.has(H)))return!1}return!0})}return V},[e,E,ee]),Jt=A.useMemo(()=>b_(Xl,X),[Xl,X]);z.useEffect(()=>{se(""),W.current&&setTimeout(()=>{const V=W.current;V&&V.dispatchEvent(new Event("scroll"))},150)},[Jt]);const tl=V=>{if(console.log("toggle called for key:",V),!n.current){console.warn("ChartGrid callbacks not available yet");return}const x=n.current.getActiveChartSelectedPoints(),C=x.has(V);if(console.log("isCurrentlySelected:",C,"activeSelected size:",x.size),C)console.log("Removing point:",V),n.current.togglePointForActiveChart(V);else{const D=fo();console.log("Adding point:",V,"with inverters:",D),n.current.updateInvertersForActiveChart(V,D),oi(D)}},nl=(V,x)=>{oi(x),n.current&&n.current.updateInvertersForActiveChart(V,x)},go=(V,x)=>{q(C=>{const D=new Set(C),T=`${V}:${x}`;return D.has(T)?D.delete(T):D.add(T),D})},bo=()=>q(new Set),ho=V=>{M(x=>{const C=new Set(x);return C.has(V)?C.delete(V):C.add(V),C})},xo=Xl.length,Zl=A.useMemo(()=>An.filter(V=>(Array.isArray(V.labels)?V.labels:[]).length>0).length,[]);A.useEffect(()=>{try{console.assert(An.length>0,"Expected sample data");const V=An.find(x=>x.entry.name==="pNom");V&&console.assert(V.entry.unit==="W","pNom should have unit W")}catch(V){console.warn("Self-test failed:",V)}},[]);const Xt=A.useCallback(()=>{const V={id:"chart-0",row:0,col:0,selectedPoints:new Map};n.current&&n.current.setChartGridState({charts:[V],rowHeights:new Map([[0,520]]),columnWidths:new Map([[0,780]]),nextChartId:1,activeChartId:"chart-0"});const x=ji([V],new Map([[0,520]]),new Map([[0,780]]),1,"chart-0",d);m.createNewWorkspace("Untitled Workspace",x).then(()=>{}).catch(C=>{console.error("Failed to create workspace:",C)})},[n,m]),_o=A.useCallback(()=>{u.isDirty?(k("new"),g(!0)):Xt()},[u.isDirty,Xt]),vo=A.useCallback(async()=>{if(!u.currentWorkspace){b(!0);return}if(u.currentWorkspace.name==="Untitled Workspace"){b(!0);return}if(u.currentWorkspace.type==="builtin"){b(!0);return}try{if(n.current){const V=n.current.getChartGridState(),x=ji(V.charts,V.rowHeights,V.columnWidths,V.nextChartId,V.activeChartId,d);m.updateCurrentWorkspace(x),await m.saveCurrentWorkspace(x)}else await m.saveCurrentWorkspace()}catch(V){console.error("Failed to save workspace:",V)}},[u.currentWorkspace,m,n,d]),He=A.useCallback(V=>{let x=ji([],new Map,new Map,0,void 0,d);if(n.current){const C=n.current.getChartGridState();x=ji(C.charts,C.rowHeights,C.columnWidths,C.nextChartId,C.activeChartId,d)}m.createNewWorkspace(V,x).then(()=>{b(!1)}).catch(C=>{console.error("Failed to save workspace:",C)})},[m,n,d]),je=A.useCallback(V=>{u.isDirty?(h(V),g(!0)):m.loadWorkspace(V)},[u.isDirty,m]),ea=A.useCallback(()=>{var V;u.isDirty?(k("import"),g(!0)):(V=P.current)==null||V.click()},[u.isDirty]),ll=A.useCallback(async V=>{var C;const x=(C=V.target.files)==null?void 0:C[0];if(x){try{const D=await m.importWorkspace(x);await m.loadWorkspace(D.id)}catch(D){console.error("Failed to import workspace:",D)}P.current&&(P.current.value="")}},[m]),fe=A.useCallback(()=>{u.currentWorkspace&&m.exportWorkspace(u.currentWorkspace.id)},[u.currentWorkspace,m]),ye=A.useCallback(async()=>{var V;try{await m.saveCurrentWorkspace(),g(!1),y?(m.loadWorkspace(y),h(null)):S==="new"?(Xt(),k(null)):S==="import"&&((V=P.current)==null||V.click(),k(null))}catch(x){console.error("Failed to save workspace:",x)}},[m,y,S,Xt]),si=A.useCallback(()=>{var V;g(!1),m.markClean(),y?(m.loadWorkspace(y),h(null)):S==="new"?(Xt(),k(null)):S==="import"&&((V=P.current)==null||V.click(),k(null))},[m,y,S,Xt]),En=A.useCallback(()=>{g(!1),h(null),k(null)},[]);return o.jsxs("div",{className:"h-full bg-slate-100 p-4 md:p-6",children:[o.jsxs("div",{className:"mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative overflow-hidden flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("h1",{className:"text-lg font-semibold text-gray-900",children:"Historical Data"}),o.jsx(_x,{onNew:_o,onSave:vo,onSaveAs:()=>b(!0),onImport:ea,onExport:fe,onManage:()=>f(!0),hasUnsavedChanges:u.isDirty}),o.jsx(vx,{currentWorkspace:u.currentWorkspace?{id:u.currentWorkspace.id,name:u.currentWorkspace.name,type:u.currentWorkspace.type,isDefault:u.currentWorkspace.id===Vr(),createdAt:u.currentWorkspace.createdAt,updatedAt:u.currentWorkspace.updatedAt,chartCount:u.currentWorkspace.data.charts.length}:null,recentWorkspaces:u.workspaces.slice(0,5),onSwitch:je,onManage:()=>f(!0),hasUnsavedChanges:u.isDirty})]}),o.jsx("div",{className:"flex items-center gap-3",children:u.error&&o.jsx("span",{className:"text-sm text-red-600",children:u.error})})]}),o.jsx("div",{className:"flex-1 min-h-0 relative",children:o.jsx(gx,{protocols:An,onUpdateInverters:()=>{},onScrollToPoint:Yl,onRemoveInverter:()=>{},onSelectPointsToggle:G,selectPointsOpen:R,callbacksRef:n,onActiveChartSelectedPointsChange:a,onActiveChartPositionChange:r})}),o.jsxs("div",{ref:j,className:`fixed bg-white border-2 border-blue-400 shadow-xl transition-all duration-300 z-50 rounded-lg flex flex-row ${R?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-4 pointer-events-none"}`,style:{top:w.top,left:w.left,width:"800px",height:R?"calc(100vh - 8rem)":"0",maxHeight:"calc(100vh - 8rem)",overflow:"hidden"},children:[R&&w.showArrow&&o.jsx("div",{className:`absolute top-4 w-0 h-0 ${w.arrowOnLeft?"left-0":"right-0"}`,style:{borderTop:"8px solid transparent",borderBottom:"8px solid transparent",...w.arrowOnLeft?{borderRight:"8px solid rgb(96, 165, 250)",transform:"translateX(-8px)"}:{borderLeft:"8px solid rgb(96, 165, 250)",transform:"translateX(8px)"}}}),o.jsxs("div",{className:"h-full flex flex-row w-full min-h-0",children:[o.jsx("div",{className:"w-40 border-r border-gray-200 flex-shrink-0 overflow-y-auto",children:o.jsxs("nav",{className:"p-3 text-sm text-gray-800",children:[o.jsx("div",{className:"text-emerald-600 font-semibold mb-2 text-xs",children:"Navigation"}),o.jsx("div",{className:"flex flex-col gap-0.5",children:Jt.size>0&&[...Jt.entries()].filter(([V])=>V!=="(Unlabeled)").map(([V,x])=>{const C=`group-${V.replace(/\s+/g,"-")}-0`,D=Z===C,T=[];return x instanceof Map&&T.push(...[...x.entries()].filter(([N])=>N!=="(Unlabeled)")),o.jsxs("div",{children:[o.jsxs("div",{className:"relative",children:[D&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),o.jsx("button",{className:`px-2 py-1 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors font-medium ${D?"text-blue-600 bg-blue-50":"text-gray-800"}`,onClick:()=>{const N=document.getElementById(C);if(N&&W.current){const O=W.current.getBoundingClientRect(),$=N.getBoundingClientRect(),Y=W.current.scrollTop,K=$.top-O.top+Y;W.current.scrollTo({top:K-10,behavior:"smooth"})}},children:V})]}),T.length>0&&o.jsx("div",{className:"ml-2 mt-0.5 space-y-0.5",children:T.map(([N])=>{const Y=`group-${`${V.replace(/\s+/g,"-")}-${N.replace(/\s+/g,"-")}`}-1`,K=Z===Y;return o.jsxs("div",{className:"relative",children:[K&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-0.5 bg-blue-400 rounded-r"}),o.jsx("button",{className:`px-2 py-0.5 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors ${K?"text-blue-600 bg-blue-50":"text-gray-600"}`,onClick:()=>{const H=document.getElementById(Y);if(H&&W.current){const ae=W.current.getBoundingClientRect(),J=H.getBoundingClientRect(),Ee=W.current.scrollTop,hy=J.top-ae.top+Ee;W.current.scrollTo({top:hy-10,behavior:"smooth"})}},children:N})]},N)})})]},V)})})]})}),o.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[o.jsx("div",{className:"border-b border-gray-200",children:o.jsxs("div",{onClick:()=>{$e.current=Date.now(),ke(!oe)},className:"w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:`h-4 w-4 text-gray-500 transition-transform ${oe?"":"rotate-90"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),o.jsx("div",{className:"text-lg font-semibold",children:"Add Points"})]}),o.jsxs("div",{className:"text-sm text-gray-600 flex items-center gap-2",children:[o.jsxs("span",{children:["Available: ",xo.toLocaleString()," of ",Zl.toLocaleString()]}),o.jsxs("button",{onClick:V=>{V.stopPropagation(),de(!0)},className:"px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",title:"Configure preferences",children:[o.jsxs("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Preferences"]})]})]})}),o.jsx("div",{className:`transition-all duration-300 overflow-hidden ${oe?"max-h-0":"max-h-[1000px]"}`,children:o.jsxs("div",{className:"p-4",children:[o.jsx(nx,{allLabels:Jl,selectedLabels:E,onToggleLabel:go,onClearFilters:bo,protocols:An,detailLevel:ee,filterStructure:Yt,getLabelColor:ns,getLabelHelp:pa}),o.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[o.jsx("div",{className:"flex-1",children:o.jsx(bx,{value:e,onChange:t})}),o.jsx(x_,{show:L,onToggle:U})]}),o.jsxs("div",{className:"mt-2 flex items-center gap-4",children:[o.jsxs("button",{onClick:()=>{ne(!0),W.current&&W.current.querySelectorAll("details").forEach(x=>{x.open=!0})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[o.jsx("span",{children:"⤵"}),o.jsx("span",{children:"Expand all"})]}),o.jsxs("button",{onClick:()=>{ne(!1),W.current&&W.current.querySelectorAll("details").forEach(x=>{x.open=!1})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[o.jsx("span",{children:"⤴"}),o.jsx("span",{children:"Collapse all"})]}),o.jsx($u,{value:ee,onChange:B,getLabelHelp:pa})]})]})}),o.jsx("div",{className:"flex-1 overflow-y-auto px-4 pb-4 pr-1",ref:W,"data-scroll-container":!0,children:Jt.size===0?o.jsxs("div",{className:"py-4 text-center text-sm text-gray-500",children:["No points match the current filters.",o.jsx("br",{}),o.jsx("b",{children:"Increase the Detail Level"})," or ",o.jsx("b",{children:"remove filters"})," to see more data points."]}):[...Jt.entries()].filter(([V])=>V!=="(Unlabeled)").map(([V,x])=>o.jsx(dy,{levelName:V,levelData:x,selected:l,toggle:tl,showHelp:L,onUpdateInverters:nl,groupsExpanded:te,pointHelpEnabled:I,onTogglePointHelp:ho,onOpenChartTutorial:()=>kn(!0),depth:0,query:e,hierarchy:X,getLabelColor:ns,getLabelHelp:pa},V))}),o.jsxs("div",{className:"border-t border-gray-200 bg-white/80 px-4 py-3",children:[o.jsx("p",{className:"text-xs text-gray-600 mb-2",children:ee!=="Complete"?"Didn't find what you were looking for? Increase the Detail Level, remove filters, or clear your search terms to see more data points.":"Didn't find what you were looking for? Try removing filters or clearing your search terms to see more data points."}),o.jsx($u,{value:ee,onChange:B,getLabelHelp:pa})]})]})]})]})]}),Mt&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",onClick:()=>de(!1),children:o.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden",onClick:V=>V.stopPropagation(),children:[o.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[o.jsxs("h2",{className:"text-lg font-semibold text-gray-800 flex items-center gap-2",children:[o.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Preferences"]}),o.jsx("button",{onClick:()=>de(!1),className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"p-4 overflow-y-auto max-h-[calc(80vh-140px)] space-y-6",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-800",children:"Filter Structure"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",children:[o.jsx("input",{type:"radio",name:"filterStructure",value:"sequential",checked:Yt==="sequential",onChange:V=>Dn(V.target.value),className:"mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-medium text-gray-900",children:"Sequential"}),o.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Filters unlock in order. Start by selecting equipment, then component options unlock, followed by type of data, and finally unit filters. Each level requires at least one selection before the next unlocks. This guided approach helps narrow down options step-by-step."})]})]}),o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",children:[o.jsx("input",{type:"radio",name:"filterStructure",value:"freeform",checked:Yt==="freeform",onChange:V=>Dn(V.target.value),className:"mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-medium text-gray-900",children:"Freeform"}),o.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Select filters in any order you prefer. All filter categories are available simultaneously, allowing flexible combinations. Filters within a category use OR logic (any match), while filters across categories use AND logic (all must match)."})]})]})]})]}),o.jsxs("div",{className:"space-y-3 pt-6 border-t border-gray-200",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-800",children:"Sort Order"}),o.jsx(xx,{availableFamilies:yo,hierarchy:X,onChange:ie,scrollContainerRef:W,getLabelColor:ns})]})]}),o.jsx("div",{className:"flex items-center justify-end gap-2 p-4 border-t border-gray-200",children:o.jsx("button",{onClick:()=>de(!1),className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",children:"Done"})})]})}),o.jsx(my,{isOpen:Ie,onClose:()=>kn(!1),initialStep:7}),o.jsx(Cx,{isOpen:p,workspaces:u.workspaces,currentWorkspaceId:((ci=u.currentWorkspace)==null?void 0:ci.id)||null,onClose:()=>f(!1),onSwitch:V=>{f(!1),je(V)},onRename:m.renameWorkspace,onDuplicate:V=>{m.duplicateWorkspace(V).catch(x=>console.error("Failed to duplicate workspace:",x))},onDelete:V=>{m.deleteWorkspace(V).catch(x=>console.error("Failed to delete workspace:",x))},onExport:m.exportWorkspace,onSetDefault:V=>{m.setDefaultWorkspace(V).catch(x=>console.error("Failed to set default workspace:",x))}}),o.jsx(Sx,{isOpen:v,currentName:((ta=u.currentWorkspace)==null?void 0:ta.name)||"New Workspace",onSave:He,onCancel:()=>b(!1)}),o.jsx(Lx,{isOpen:_,workspaceName:((Zt=u.currentWorkspace)==null?void 0:Zt.name)||"Current Workspace",onSave:ye,onDiscard:si,onCancel:En}),o.jsx("input",{ref:P,type:"file",accept:".json",onChange:ll,style:{display:"none"}})]})}const Yu="matter-app-active-view";function v_(){const[e,t]=A.useState(()=>{const n=localStorage.getItem(Yu);return n==="site-config"||n==="historical-data"?n:"site-config"});return A.useEffect(()=>{localStorage.setItem(Yu,e)},[e]),o.jsxs("div",{className:"flex h-screen bg-slate-100",children:[o.jsxs("aside",{className:"w-64 bg-white border-r border-slate-300 flex flex-col shadow-sm",children:[o.jsx("div",{className:"p-4 border-b border-slate-300",children:o.jsx("h1",{className:"text-lg font-semibold text-slate-800",children:"Matter App"})}),o.jsxs("nav",{className:"flex-1 p-3",children:[o.jsx("button",{onClick:()=>t("site-config"),className:`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${e==="site-config"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xl",children:"⚙️"}),o.jsx("span",{children:"Site Config"})]})}),o.jsx("button",{onClick:()=>t("historical-data"),className:`w-full text-left px-4 py-3 rounded-lg transition-colors ${e==="historical-data"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xl",children:"📊"}),o.jsx("span",{children:"Historical Data"})]})})]}),o.jsx("div",{className:"p-4 border-t border-slate-300 text-xs text-slate-500",children:o.jsxs("div",{children:["Active: ",e==="site-config"?"Site Config":"Historical Data"]})})]}),o.jsxs("main",{className:"flex-1 overflow-auto",children:[e==="site-config"&&o.jsx(Gh,{}),e==="historical-data"&&o.jsx(__,{})]})]})}ls.createRoot(document.getElementById("root")).render(o.jsx(z.StrictMode,{children:o.jsx(v_,{})}));

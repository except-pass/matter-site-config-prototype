(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function ey(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vu={exports:{}},wr={},Ru={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),ty=Symbol.for("react.portal"),ny=Symbol.for("react.fragment"),ly=Symbol.for("react.strict_mode"),iy=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),ry=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),sy=Symbol.for("react.suspense"),cy=Symbol.for("react.memo"),dy=Symbol.for("react.lazy"),Zc=Symbol.iterator;function uy(e){return e===null||typeof e!="object"?null:(e=Zc&&e[Zc]||e["@@iterator"],typeof e=="function"?e:null)}var Iu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gu=Object.assign,Mu={};function Bl(e,t,n){this.props=e,this.context=t,this.refs=Mu,this.updater=n||Iu}Bl.prototype.isReactComponent={};Bl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bu(){}Bu.prototype=Bl.prototype;function qs(e,t,n){this.props=e,this.context=t,this.refs=Mu,this.updater=n||Iu}var Us=qs.prototype=new Bu;Us.constructor=qs;Gu(Us,Bl.prototype);Us.isPureReactComponent=!0;var ed=Array.isArray,Ou=Object.prototype.hasOwnProperty,$s={current:null},ju={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var l,i={},a=null,r=null;if(t!=null)for(l in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(a=""+t.key),t)Ou.call(t,l)&&!ju.hasOwnProperty(l)&&(i[l]=t[l]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(l in s=e.defaultProps,s)i[l]===void 0&&(i[l]=s[l]);return{$$typeof:Hi,type:e,key:a,ref:r,props:i,_owner:$s.current}}function my(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function py(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var td=/\/+/g;function io(e,t){return typeof e=="object"&&e!==null&&e.key!=null?py(""+e.key):t.toString(36)}function Pa(e,t,n,l,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Hi:case ty:r=!0}}if(r)return r=e,i=i(r),e=l===""?"."+io(r,0):l,ed(i)?(n="",e!=null&&(n=e.replace(td,"$&/")+"/"),Pa(i,t,n,"",function(d){return d})):i!=null&&(Ws(i)&&(i=my(i,n+(!i.key||r&&r.key===i.key?"":(""+i.key).replace(td,"$&/")+"/")+e)),t.push(i)),1;if(r=0,l=l===""?".":l+":",ed(e))for(var s=0;s<e.length;s++){a=e[s];var c=l+io(a,s);r+=Pa(a,t,n,c,i)}else if(c=uy(e),typeof c=="function")for(e=c.call(e),s=0;!(a=e.next()).done;)a=a.value,c=l+io(a,s++),r+=Pa(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function na(e,t,n){if(e==null)return e;var l=[],i=0;return Pa(e,l,"","",function(a){return t.call(n,a,i++)}),l}function fy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},Na={transition:null},yy={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Na,ReactCurrentOwner:$s};function qu(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:na,forEach:function(e,t,n){na(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return na(e,function(){t++}),t},toArray:function(e){return na(e,function(t){return t})||[]},only:function(e){if(!Ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Bl;se.Fragment=ny;se.Profiler=iy;se.PureComponent=qs;se.StrictMode=ly;se.Suspense=sy;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;se.act=qu;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=Gu({},e.props),i=e.key,a=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,r=$s.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ou.call(t,c)&&!ju.hasOwnProperty(c)&&(l[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];l.children=s}return{$$typeof:Hi,type:e.type,key:i,ref:a,props:l,_owner:r}};se.createContext=function(e){return e={$$typeof:ry,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ay,_context:e},e.Consumer=e};se.createElement=Fu;se.createFactory=function(e){var t=Fu.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:oy,render:e}};se.isValidElement=Ws;se.lazy=function(e){return{$$typeof:dy,_payload:{_status:-1,_result:e},_init:fy}};se.memo=function(e,t){return{$$typeof:cy,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=Na.transition;Na.transition={};try{e()}finally{Na.transition=t}};se.unstable_act=qu;se.useCallback=function(e,t){return et.current.useCallback(e,t)};se.useContext=function(e){return et.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return et.current.useDeferredValue(e)};se.useEffect=function(e,t){return et.current.useEffect(e,t)};se.useId=function(){return et.current.useId()};se.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return et.current.useMemo(e,t)};se.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};se.useRef=function(e){return et.current.useRef(e)};se.useState=function(e){return et.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return et.current.useTransition()};se.version="18.3.1";Ru.exports=se;var F=Ru.exports;const U=ey(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=F,by=Symbol.for("react.element"),hy=Symbol.for("react.fragment"),_y=Object.prototype.hasOwnProperty,xy=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vy={key:!0,ref:!0,__self:!0,__source:!0};function Uu(e,t,n){var l,i={},a=null,r=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(r=t.ref);for(l in t)_y.call(t,l)&&!vy.hasOwnProperty(l)&&(i[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)i[l]===void 0&&(i[l]=t[l]);return{$$typeof:by,type:e,key:a,ref:r,props:i,_owner:xy.current}}wr.Fragment=hy;wr.jsx=Uu;wr.jsxs=Uu;Vu.exports=wr;var o=Vu.exports,jo={},$u={exports:{}},bt={},Wu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,V){var R=A.length;A.push(V);e:for(;0<R;){var z=R-1>>>1,J=A[z];if(0<i(J,V))A[z]=V,A[R]=J,R=z;else break e}}function n(A){return A.length===0?null:A[0]}function l(A){if(A.length===0)return null;var V=A[0],R=A.pop();if(R!==V){A[0]=R;e:for(var z=0,J=A.length,de=J>>>1;z<de;){var ee=2*(z+1)-1,te=A[ee],me=ee+1,Ve=A[me];if(0>i(te,R))me<J&&0>i(Ve,te)?(A[z]=Ve,A[me]=R,z=me):(A[z]=te,A[ee]=R,z=ee);else if(me<J&&0>i(Ve,R))A[z]=Ve,A[me]=R,z=me;else break e}}return V}function i(A,V){var R=A.sortIndex-V.sortIndex;return R!==0?R:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var r=Date,s=r.now();e.unstable_now=function(){return r.now()-s}}var c=[],d=[],u=1,m=null,f=3,p=!1,x=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(A){for(var V=n(d);V!==null;){if(V.callback===null)l(d);else if(V.startTime<=A)l(d),V.sortIndex=V.expirationTime,t(c,V);else break;V=n(d)}}function v(A){if(b=!1,h(A),!x)if(n(c)!==null)x=!0,X(L);else{var V=n(d);V!==null&&ae(v,V.startTime-A)}}function L(A,V){x=!1,b&&(b=!1,g(S),S=-1),p=!0;var R=f;try{for(h(V),m=n(c);m!==null&&(!(m.expirationTime>V)||A&&!Y());){var z=m.callback;if(typeof z=="function"){m.callback=null,f=m.priorityLevel;var J=z(m.expirationTime<=V);V=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(c)&&l(c),h(V)}else l(c);m=n(c)}if(m!==null)var de=!0;else{var ee=n(d);ee!==null&&ae(v,ee.startTime-V),de=!1}return de}finally{m=null,f=R,p=!1}}var T=!1,C=null,S=-1,B=5,O=-1;function Y(){return!(e.unstable_now()-O<B)}function N(){if(C!==null){var A=e.unstable_now();O=A;var V=!0;try{V=C(!0,A)}finally{V?q():(T=!1,C=null)}}else T=!1}var q;if(typeof y=="function")q=function(){y(N)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,I=le.port2;le.port1.onmessage=N,q=function(){I.postMessage(null)}}else q=function(){_(N,0)};function X(A){C=A,T||(T=!0,q())}function ae(A,V){S=_(function(){A(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||p||(x=!0,X(L))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var R=f;f=V;try{return A()}finally{f=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var R=f;f=A;try{return V()}finally{f=R}},e.unstable_scheduleCallback=function(A,V,R){var z=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?z+R:z):R=z,A){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,A={id:u++,callback:V,priorityLevel:A,startTime:R,expirationTime:J,sortIndex:-1},R>z?(A.sortIndex=R,t(d,A),n(c)===null&&A===n(d)&&(b?(g(S),S=-1):b=!0,ae(v,R-z))):(A.sortIndex=J,t(c,A),x||p||(x=!0,X(L))),A},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(A){var V=f;return function(){var R=f;f=V;try{return A.apply(this,arguments)}finally{f=R}}}})(Hu);Wu.exports=Hu;var wy=Wu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy=F,gt=wy;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zu=new Set,ki={};function zn(e,t){El(e,t),El(e+"Capture",t)}function El(e,t){for(ki[e]=t,e=0;e<t.length;e++)zu.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fo=Object.prototype.hasOwnProperty,Sy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},ld={};function Ly(e){return Fo.call(ld,e)?!0:Fo.call(nd,e)?!1:Sy.test(e)?ld[e]=!0:(nd[e]=!0,!1)}function ky(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ty(e,t,n,l){if(t===null||typeof t>"u"||ky(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,l,i,a,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=r}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];qe[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hs=/[\-:]([a-z])/g;function zs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hs,zs);qe[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hs,zs);qe[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hs,zs);qe[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ks(e,t,n,l){var i=qe.hasOwnProperty(t)?qe[t]:null;(i!==null?i.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ty(t,n,i,l)&&(n=null),l||i===null?Ly(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,l=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var nn=Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),al=Symbol.for("react.portal"),rl=Symbol.for("react.fragment"),Qs=Symbol.for("react.strict_mode"),qo=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Uo=Symbol.for("react.suspense"),$o=Symbol.for("react.suspense_list"),Xs=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),id=Symbol.iterator;function Yl(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,ao;function si(e){if(ao===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ao=t&&t[1]||""}return`
`+ao+e}var ro=!1;function oo(e,t){if(!e||ro)return"";ro=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var l=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){l=d}e.call(t.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=l.stack.split(`
`),r=i.length-1,s=a.length-1;1<=r&&0<=s&&i[r]!==a[s];)s--;for(;1<=r&&0<=s;r--,s--)if(i[r]!==a[s]){if(r!==1||s!==1)do if(r--,s--,0>s||i[r]!==a[s]){var c=`
`+i[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=r&&0<=s);break}}}finally{ro=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?si(e):""}function Dy(e){switch(e.tag){case 5:return si(e.type);case 16:return si("Lazy");case 13:return si("Suspense");case 19:return si("SuspenseList");case 0:case 2:case 15:return e=oo(e.type,!1),e;case 11:return e=oo(e.type.render,!1),e;case 1:return e=oo(e.type,!0),e;default:return""}}function Wo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rl:return"Fragment";case al:return"Portal";case qo:return"Profiler";case Qs:return"StrictMode";case Uo:return"Suspense";case $o:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Ku:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xs:return t=e.displayName||null,t!==null?t:Wo(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Wo(e(t))}catch{}}return null}function Ey(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wo(t);case 8:return t===Qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Py(e){var t=Xu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){l=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ia(e){e._valueTracker||(e._valueTracker=Py(e))}function Ju(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Xu(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ho(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ad(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zu(e,t){t=t.checked,t!=null&&Ks(e,"checked",t,!1)}function zo(e,t){Zu(e,t);var n=wn(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ko(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ko(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ko(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function vl(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function od(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(ci(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function em(e,t){var n=wn(t.value),l=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var aa,nm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=aa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ny=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(e){Ny.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yi[t]=yi[e]})});function lm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yi.hasOwnProperty(e)&&yi[e]?(""+t).trim():t+"px"}function im(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,i=lm(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,i):e[n]=i}}var Ay=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(e,t){if(t){if(Ay[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function Jo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zo=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var es=null,wl=null,Cl=null;function cd(e){if(e=Qi(e)){if(typeof es!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Tr(t),es(e.stateNode,e.type,t))}}function am(e){wl?Cl?Cl.push(e):Cl=[e]:wl=e}function rm(){if(wl){var e=wl,t=Cl;if(Cl=wl=null,cd(e),t)for(e=0;e<t.length;e++)cd(t[e])}}function om(e,t){return e(t)}function sm(){}var so=!1;function cm(e,t,n){if(so)return e(t,n);so=!0;try{return om(e,t,n)}finally{so=!1,(wl!==null||Cl!==null)&&(sm(),rm())}}function Di(e,t){var n=e.stateNode;if(n===null)return null;var l=Tr(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var ts=!1;if(Jt)try{var Xl={};Object.defineProperty(Xl,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{ts=!1}function Vy(e,t,n,l,i,a,r,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var gi=!1,za=null,Ka=!1,ns=null,Ry={onError:function(e){gi=!0,za=e}};function Iy(e,t,n,l,i,a,r,s,c){gi=!1,za=null,Vy.apply(Ry,arguments)}function Gy(e,t,n,l,i,a,r,s,c){if(Iy.apply(this,arguments),gi){if(gi){var d=za;gi=!1,za=null}else throw Error(G(198));Ka||(Ka=!0,ns=d)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dd(e){if(Kn(e)!==e)throw Error(G(188))}function My(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return dd(i),e;if(a===l)return dd(i),t;a=a.sibling}throw Error(G(188))}if(n.return!==l.return)n=i,l=a;else{for(var r=!1,s=i.child;s;){if(s===n){r=!0,n=i,l=a;break}if(s===l){r=!0,l=i,n=a;break}s=s.sibling}if(!r){for(s=a.child;s;){if(s===n){r=!0,n=a,l=i;break}if(s===l){r=!0,l=a,n=i;break}s=s.sibling}if(!r)throw Error(G(189))}}if(n.alternate!==l)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function um(e){return e=My(e),e!==null?mm(e):null}function mm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mm(e);if(t!==null)return t;e=e.sibling}return null}var pm=gt.unstable_scheduleCallback,ud=gt.unstable_cancelCallback,By=gt.unstable_shouldYield,Oy=gt.unstable_requestPaint,Ne=gt.unstable_now,jy=gt.unstable_getCurrentPriorityLevel,Zs=gt.unstable_ImmediatePriority,fm=gt.unstable_UserBlockingPriority,Qa=gt.unstable_NormalPriority,Fy=gt.unstable_LowPriority,ym=gt.unstable_IdlePriority,Cr=null,jt=null;function qy(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Cr,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:Wy,Uy=Math.log,$y=Math.LN2;function Wy(e){return e>>>=0,e===0?32:31-(Uy(e)/$y|0)|0}var ra=64,oa=4194304;function di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ya(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,a=e.pingedLanes,r=n&268435455;if(r!==0){var s=r&~i;s!==0?l=di(s):(a&=r,a!==0&&(l=di(a)))}else r=n&~i,r!==0?l=di(r):a!==0&&(l=di(a));if(l===0)return 0;if(t!==0&&t!==l&&!(t&i)&&(i=l&-l,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(l&4&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-At(t),i=1<<n,l|=e[n],t&=~i;return l}function Hy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zy(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var r=31-At(a),s=1<<r,c=i[r];c===-1?(!(s&n)||s&l)&&(i[r]=Hy(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gm(){var e=ra;return ra<<=1,!(ra&4194240)&&(ra=64),e}function co(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function Ky(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-At(n),a=1<<i;t[i]=0,l[i]=-1,e[i]=-1,n&=~a}}function ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-At(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}var ye=0;function bm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hm,tc,_m,xm,vm,is=!1,sa=[],pn=null,fn=null,yn=null,Ei=new Map,Pi=new Map,cn=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function Jl(e,t,n,l,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Qi(t),t!==null&&tc(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yy(e,t,n,l,i){switch(t){case"focusin":return pn=Jl(pn,e,t,n,l,i),!0;case"dragenter":return fn=Jl(fn,e,t,n,l,i),!0;case"mouseover":return yn=Jl(yn,e,t,n,l,i),!0;case"pointerover":var a=i.pointerId;return Ei.set(a,Jl(Ei.get(a)||null,e,t,n,l,i)),!0;case"gotpointercapture":return a=i.pointerId,Pi.set(a,Jl(Pi.get(a)||null,e,t,n,l,i)),!0}return!1}function wm(e){var t=Vn(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=dm(n),t!==null){e.blockedOn=t,vm(e.priority,function(){_m(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Aa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=as(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Zo=l,n.target.dispatchEvent(l),Zo=null}else return t=Qi(n),t!==null&&tc(t),e.blockedOn=n,!1;t.shift()}return!0}function pd(e,t,n){Aa(e)&&n.delete(t)}function Xy(){is=!1,pn!==null&&Aa(pn)&&(pn=null),fn!==null&&Aa(fn)&&(fn=null),yn!==null&&Aa(yn)&&(yn=null),Ei.forEach(pd),Pi.forEach(pd)}function Zl(e,t){e.blockedOn===t&&(e.blockedOn=null,is||(is=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Xy)))}function Ni(e){function t(i){return Zl(i,e)}if(0<sa.length){Zl(sa[0],e);for(var n=1;n<sa.length;n++){var l=sa[n];l.blockedOn===e&&(l.blockedOn=null)}}for(pn!==null&&Zl(pn,e),fn!==null&&Zl(fn,e),yn!==null&&Zl(yn,e),Ei.forEach(t),Pi.forEach(t),n=0;n<cn.length;n++)l=cn[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)wm(n),n.blockedOn===null&&cn.shift()}var Sl=nn.ReactCurrentBatchConfig,Xa=!0;function Jy(e,t,n,l){var i=ye,a=Sl.transition;Sl.transition=null;try{ye=1,nc(e,t,n,l)}finally{ye=i,Sl.transition=a}}function Zy(e,t,n,l){var i=ye,a=Sl.transition;Sl.transition=null;try{ye=4,nc(e,t,n,l)}finally{ye=i,Sl.transition=a}}function nc(e,t,n,l){if(Xa){var i=as(e,t,n,l);if(i===null)xo(e,t,l,Ja,n),md(e,l);else if(Yy(i,e,t,n,l))l.stopPropagation();else if(md(e,l),t&4&&-1<Qy.indexOf(e)){for(;i!==null;){var a=Qi(i);if(a!==null&&hm(a),a=as(e,t,n,l),a===null&&xo(e,t,l,Ja,n),a===i)break;i=a}i!==null&&l.stopPropagation()}else xo(e,t,l,null,n)}}var Ja=null;function as(e,t,n,l){if(Ja=null,e=Js(l),e=Vn(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ja=e,null}function Cm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jy()){case Zs:return 1;case fm:return 4;case Qa:case Fy:return 16;case ym:return 536870912;default:return 16}default:return 16}}var un=null,lc=null,Va=null;function Sm(){if(Va)return Va;var e,t=lc,n=t.length,l,i="value"in un?un.value:un.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===i[a-l];l++);return Va=i.slice(e,1<l?1-l:void 0)}function Ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ca(){return!0}function fd(){return!1}function ht(e){function t(n,l,i,a,r){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ca:fd,this.isPropagationStopped=fd,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),t}var Ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=ht(Ol),Ki=Ee({},Ol,{view:0,detail:0}),eg=ht(Ki),uo,mo,ei,Sr=Ee({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(uo=e.screenX-ei.screenX,mo=e.screenY-ei.screenY):mo=uo=0,ei=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:mo}}),yd=ht(Sr),tg=Ee({},Sr,{dataTransfer:0}),ng=ht(tg),lg=Ee({},Ki,{relatedTarget:0}),po=ht(lg),ig=Ee({},Ol,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=ht(ig),rg=Ee({},Ol,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),og=ht(rg),sg=Ee({},Ol,{data:0}),gd=ht(sg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ug[e])?!!t[e]:!1}function ac(){return mg}var pg=Ee({},Ki,{key:function(e){if(e.key){var t=cg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(e){return e.type==="keypress"?Ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fg=ht(pg),yg=Ee({},Sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=ht(yg),gg=Ee({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),bg=ht(gg),hg=Ee({},Ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=ht(hg),xg=Ee({},Sr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=ht(xg),wg=[9,13,27,32],rc=Jt&&"CompositionEvent"in window,bi=null;Jt&&"documentMode"in document&&(bi=document.documentMode);var Cg=Jt&&"TextEvent"in window&&!bi,Lm=Jt&&(!rc||bi&&8<bi&&11>=bi),hd=" ",_d=!1;function km(e,t){switch(e){case"keyup":return wg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function Sg(e,t){switch(e){case"compositionend":return Tm(t);case"keypress":return t.which!==32?null:(_d=!0,hd);case"textInput":return e=t.data,e===hd&&_d?null:e;default:return null}}function Lg(e,t){if(ol)return e==="compositionend"||!rc&&km(e,t)?(e=Sm(),Va=lc=un=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lm&&t.locale!=="ko"?null:t.data;default:return null}}var kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kg[e.type]:t==="textarea"}function Dm(e,t,n,l){am(l),t=Za(t,"onChange"),0<t.length&&(n=new ic("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var hi=null,Ai=null;function Tg(e){Om(e,0)}function Lr(e){var t=dl(e);if(Ju(t))return e}function Dg(e,t){if(e==="change")return t}var Em=!1;if(Jt){var fo;if(Jt){var yo="oninput"in document;if(!yo){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),yo=typeof vd.oninput=="function"}fo=yo}else fo=!1;Em=fo&&(!document.documentMode||9<document.documentMode)}function wd(){hi&&(hi.detachEvent("onpropertychange",Pm),Ai=hi=null)}function Pm(e){if(e.propertyName==="value"&&Lr(Ai)){var t=[];Dm(t,Ai,e,Js(e)),cm(Tg,t)}}function Eg(e,t,n){e==="focusin"?(wd(),hi=t,Ai=n,hi.attachEvent("onpropertychange",Pm)):e==="focusout"&&wd()}function Pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lr(Ai)}function Ng(e,t){if(e==="click")return Lr(t)}function Ag(e,t){if(e==="input"||e==="change")return Lr(t)}function Vg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Vg;function Vi(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!Fo.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sd(e,t){var n=Cd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function Nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Am(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ha(e.document)}return t}function oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rg(e){var t=Am(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nm(n.ownerDocument.documentElement,n)){if(l!==null&&oc(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(l.start,i);l=l.end===void 0?a:Math.min(l.end,i),!e.extend&&a>l&&(i=l,l=a,a=i),i=Sd(n,a);var r=Sd(n,l);i&&r&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>l?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ig=Jt&&"documentMode"in document&&11>=document.documentMode,sl=null,rs=null,_i=null,os=!1;function Ld(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||sl==null||sl!==Ha(l)||(l=sl,"selectionStart"in l&&oc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_i&&Vi(_i,l)||(_i=l,l=Za(rs,"onSelect"),0<l.length&&(t=new ic("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=sl)))}function da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cl={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},go={},Vm={};Jt&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function kr(e){if(go[e])return go[e];if(!cl[e])return e;var t=cl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vm)return go[e]=t[n];return e}var Rm=kr("animationend"),Im=kr("animationiteration"),Gm=kr("animationstart"),Mm=kr("transitionend"),Bm=new Map,kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){Bm.set(e,t),zn(t,[e])}for(var bo=0;bo<kd.length;bo++){var ho=kd[bo],Gg=ho.toLowerCase(),Mg=ho[0].toUpperCase()+ho.slice(1);Ln(Gg,"on"+Mg)}Ln(Rm,"onAnimationEnd");Ln(Im,"onAnimationIteration");Ln(Gm,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(Mm,"onTransitionEnd");El("onMouseEnter",["mouseout","mouseover"]);El("onMouseLeave",["mouseout","mouseover"]);El("onPointerEnter",["pointerout","pointerover"]);El("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function Td(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,Gy(l,t,void 0,e),e.currentTarget=null}function Om(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var a=void 0;if(t)for(var r=l.length-1;0<=r;r--){var s=l[r],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break e;Td(i,s,d),a=c}else for(r=0;r<l.length;r++){if(s=l[r],c=s.instance,d=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break e;Td(i,s,d),a=c}}}if(Ka)throw e=ns,Ka=!1,ns=null,e}function _e(e,t){var n=t[ms];n===void 0&&(n=t[ms]=new Set);var l=e+"__bubble";n.has(l)||(jm(t,e,2,!1),n.add(l))}function _o(e,t,n){var l=0;t&&(l|=4),jm(n,e,l,t)}var ua="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[ua]){e[ua]=!0,zu.forEach(function(n){n!=="selectionchange"&&(Bg.has(n)||_o(n,!1,e),_o(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ua]||(t[ua]=!0,_o("selectionchange",!1,t))}}function jm(e,t,n,l){switch(Cm(t)){case 1:var i=Jy;break;case 4:i=Zy;break;default:i=nc}n=i.bind(null,t,n,e),i=void 0,!ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xo(e,t,n,l,i){var a=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var s=l.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(r===4)for(r=l.return;r!==null;){var c=r.tag;if((c===3||c===4)&&(c=r.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;r=r.return}for(;s!==null;){if(r=Vn(s),r===null)return;if(c=r.tag,c===5||c===6){l=a=r;continue e}s=s.parentNode}}l=l.return}cm(function(){var d=a,u=Js(n),m=[];e:{var f=Bm.get(e);if(f!==void 0){var p=ic,x=e;switch(e){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":p=fg;break;case"focusin":x="focus",p=po;break;case"focusout":x="blur",p=po;break;case"beforeblur":case"afterblur":p=po;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bg;break;case Rm:case Im:case Gm:p=ag;break;case Mm:p=_g;break;case"scroll":p=eg;break;case"wheel":p=vg;break;case"copy":case"cut":case"paste":p=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bd}var b=(t&4)!==0,_=!b&&e==="scroll",g=b?f!==null?f+"Capture":null:f;b=[];for(var y=d,h;y!==null;){h=y;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,g!==null&&(v=Di(y,g),v!=null&&b.push(Ii(y,v,h)))),_)break;y=y.return}0<b.length&&(f=new p(f,x,null,n,u),m.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Zo&&(x=n.relatedTarget||n.fromElement)&&(Vn(x)||x[Zt]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=d,x=x?Vn(x):null,x!==null&&(_=Kn(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=d),p!==x)){if(b=yd,v="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(b=bd,v="onPointerLeave",g="onPointerEnter",y="pointer"),_=p==null?f:dl(p),h=x==null?f:dl(x),f=new b(v,y+"leave",p,n,u),f.target=_,f.relatedTarget=h,v=null,Vn(u)===d&&(b=new b(g,y+"enter",x,n,u),b.target=h,b.relatedTarget=_,v=b),_=v,p&&x)t:{for(b=p,g=x,y=0,h=b;h;h=nl(h))y++;for(h=0,v=g;v;v=nl(v))h++;for(;0<y-h;)b=nl(b),y--;for(;0<h-y;)g=nl(g),h--;for(;y--;){if(b===g||g!==null&&b===g.alternate)break t;b=nl(b),g=nl(g)}b=null}else b=null;p!==null&&Dd(m,f,p,b,!1),x!==null&&_!==null&&Dd(m,_,x,b,!0)}}e:{if(f=d?dl(d):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var L=Dg;else if(xd(f))if(Em)L=Ag;else{L=Pg;var T=Eg}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=Ng);if(L&&(L=L(e,d))){Dm(m,L,n,u);break e}T&&T(e,f,d),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Ko(f,"number",f.value)}switch(T=d?dl(d):window,e){case"focusin":(xd(T)||T.contentEditable==="true")&&(sl=T,rs=d,_i=null);break;case"focusout":_i=rs=sl=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,Ld(m,n,u);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":Ld(m,n,u)}var C;if(rc)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ol?km(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Lm&&n.locale!=="ko"&&(ol||S!=="onCompositionStart"?S==="onCompositionEnd"&&ol&&(C=Sm()):(un=u,lc="value"in un?un.value:un.textContent,ol=!0)),T=Za(d,S),0<T.length&&(S=new gd(S,e,null,n,u),m.push({event:S,listeners:T}),C?S.data=C:(C=Tm(n),C!==null&&(S.data=C)))),(C=Cg?Sg(e,n):Lg(e,n))&&(d=Za(d,"onBeforeInput"),0<d.length&&(u=new gd("onBeforeInput","beforeinput",null,n,u),m.push({event:u,listeners:d}),u.data=C))}Om(m,t)})}function Ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Za(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Di(e,n),a!=null&&l.unshift(Ii(e,a,i)),a=Di(e,t),a!=null&&l.push(Ii(e,a,i))),e=e.return}return l}function nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dd(e,t,n,l,i){for(var a=t._reactName,r=[];n!==null&&n!==l;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===l)break;s.tag===5&&d!==null&&(s=d,i?(c=Di(n,a),c!=null&&r.unshift(Ii(n,c,s))):i||(c=Di(n,a),c!=null&&r.push(Ii(n,c,s)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Og=/\r\n?/g,jg=/\u0000|\uFFFD/g;function Ed(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(jg,"")}function ma(e,t,n){if(t=Ed(t),Ed(e)!==t&&n)throw Error(G(425))}function er(){}var ss=null,cs=null;function ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var us=typeof setTimeout=="function"?setTimeout:void 0,Fg=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(e){return Pd.resolve(null).then(e).catch(Ug)}:us;function Ug(e){setTimeout(function(){throw e})}function vo(e,t){var n=t,l=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(l===0){e.removeChild(i),Ni(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=i}while(n);Ni(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jl=Math.random().toString(36).slice(2),Ot="__reactFiber$"+jl,Gi="__reactProps$"+jl,Zt="__reactContainer$"+jl,ms="__reactEvents$"+jl,$g="__reactListeners$"+jl,Wg="__reactHandles$"+jl;function Vn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nd(e);e!==null;){if(n=e[Ot])return n;e=Nd(e)}return t}e=n,n=e.parentNode}return null}function Qi(e){return e=e[Ot]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dl(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Tr(e){return e[Gi]||null}var ps=[],ul=-1;function kn(e){return{current:e}}function xe(e){0>ul||(e.current=ps[ul],ps[ul]=null,ul--)}function be(e,t){ul++,ps[ul]=e.current,e.current=t}var Cn={},Ke=kn(Cn),rt=kn(!1),Fn=Cn;function Pl(e,t){var n=e.type.contextTypes;if(!n)return Cn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function tr(){xe(rt),xe(Ke)}function Ad(e,t,n){if(Ke.current!==Cn)throw Error(G(168));be(Ke,t),be(rt,n)}function Fm(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var i in l)if(!(i in t))throw Error(G(108,Ey(e)||"Unknown",i));return Ee({},n,l)}function nr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Fn=Ke.current,be(Ke,e),be(rt,rt.current),!0}function Vd(e,t,n){var l=e.stateNode;if(!l)throw Error(G(169));n?(e=Fm(e,t,Fn),l.__reactInternalMemoizedMergedChildContext=e,xe(rt),xe(Ke),be(Ke,e)):xe(rt),be(rt,n)}var Ht=null,Dr=!1,wo=!1;function qm(e){Ht===null?Ht=[e]:Ht.push(e)}function Hg(e){Dr=!0,qm(e)}function Tn(){if(!wo&&Ht!==null){wo=!0;var e=0,t=ye;try{var n=Ht;for(ye=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}Ht=null,Dr=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),pm(Zs,Tn),i}finally{ye=t,wo=!1}}return null}var ml=[],pl=0,lr=null,ir=0,_t=[],xt=0,qn=null,zt=1,Kt="";function Nn(e,t){ml[pl++]=ir,ml[pl++]=lr,lr=e,ir=t}function Um(e,t,n){_t[xt++]=zt,_t[xt++]=Kt,_t[xt++]=qn,qn=e;var l=zt;e=Kt;var i=32-At(l)-1;l&=~(1<<i),n+=1;var a=32-At(t)+i;if(30<a){var r=i-i%5;a=(l&(1<<r)-1).toString(32),l>>=r,i-=r,zt=1<<32-At(t)+i|n<<i|l,Kt=a+e}else zt=1<<a|n<<i|l,Kt=e}function sc(e){e.return!==null&&(Nn(e,1),Um(e,1,0))}function cc(e){for(;e===lr;)lr=ml[--pl],ml[pl]=null,ir=ml[--pl],ml[pl]=null;for(;e===qn;)qn=_t[--xt],_t[xt]=null,Kt=_t[--xt],_t[xt]=null,zt=_t[--xt],_t[xt]=null}var yt=null,ft=null,ve=!1,Nt=null;function $m(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,ft=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:zt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,ft=null,!0):!1;default:return!1}}function fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ys(e){if(ve){var t=ft;if(t){var n=t;if(!Rd(e,t)){if(fs(e))throw Error(G(418));t=gn(n.nextSibling);var l=yt;t&&Rd(e,t)?$m(l,n):(e.flags=e.flags&-4097|2,ve=!1,yt=e)}}else{if(fs(e))throw Error(G(418));e.flags=e.flags&-4097|2,ve=!1,yt=e}}}function Id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function pa(e){if(e!==yt)return!1;if(!ve)return Id(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ds(e.type,e.memoizedProps)),t&&(t=ft)){if(fs(e))throw Wm(),Error(G(418));for(;t;)$m(e,t),t=gn(t.nextSibling)}if(Id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=yt?gn(e.stateNode.nextSibling):null;return!0}function Wm(){for(var e=ft;e;)e=gn(e.nextSibling)}function Nl(){ft=yt=null,ve=!1}function dc(e){Nt===null?Nt=[e]:Nt.push(e)}var zg=nn.ReactCurrentBatchConfig;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var l=n.stateNode}if(!l)throw Error(G(147,e));var i=l,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(r){var s=i.refs;r===null?delete s[a]:s[a]=r},t._stringRef=a,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function fa(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gd(e){var t=e._init;return t(e._payload)}function Hm(e){function t(g,y){if(e){var h=g.deletions;h===null?(g.deletions=[y],g.flags|=16):h.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function l(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=xn(g,y),g.index=0,g.sibling=null,g}function a(g,y,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<y?(g.flags|=2,y):h):(g.flags|=2,y)):(g.flags|=1048576,y)}function r(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,y,h,v){return y===null||y.tag!==6?(y=Eo(h,g.mode,v),y.return=g,y):(y=i(y,h),y.return=g,y)}function c(g,y,h,v){var L=h.type;return L===rl?u(g,y,h.props.children,v,h.key):y!==null&&(y.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===rn&&Gd(L)===y.type)?(v=i(y,h.props),v.ref=ti(g,y,h),v.return=g,v):(v=Fa(h.type,h.key,h.props,null,g.mode,v),v.ref=ti(g,y,h),v.return=g,v)}function d(g,y,h,v){return y===null||y.tag!==4||y.stateNode.containerInfo!==h.containerInfo||y.stateNode.implementation!==h.implementation?(y=Po(h,g.mode,v),y.return=g,y):(y=i(y,h.children||[]),y.return=g,y)}function u(g,y,h,v,L){return y===null||y.tag!==7?(y=jn(h,g.mode,v,L),y.return=g,y):(y=i(y,h),y.return=g,y)}function m(g,y,h){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Eo(""+y,g.mode,h),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case la:return h=Fa(y.type,y.key,y.props,null,g.mode,h),h.ref=ti(g,null,y),h.return=g,h;case al:return y=Po(y,g.mode,h),y.return=g,y;case rn:var v=y._init;return m(g,v(y._payload),h)}if(ci(y)||Yl(y))return y=jn(y,g.mode,h,null),y.return=g,y;fa(g,y)}return null}function f(g,y,h,v){var L=y!==null?y.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return L!==null?null:s(g,y,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case la:return h.key===L?c(g,y,h,v):null;case al:return h.key===L?d(g,y,h,v):null;case rn:return L=h._init,f(g,y,L(h._payload),v)}if(ci(h)||Yl(h))return L!==null?null:u(g,y,h,v,null);fa(g,h)}return null}function p(g,y,h,v,L){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(h)||null,s(y,g,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case la:return g=g.get(v.key===null?h:v.key)||null,c(y,g,v,L);case al:return g=g.get(v.key===null?h:v.key)||null,d(y,g,v,L);case rn:var T=v._init;return p(g,y,h,T(v._payload),L)}if(ci(v)||Yl(v))return g=g.get(h)||null,u(y,g,v,L,null);fa(y,v)}return null}function x(g,y,h,v){for(var L=null,T=null,C=y,S=y=0,B=null;C!==null&&S<h.length;S++){C.index>S?(B=C,C=null):B=C.sibling;var O=f(g,C,h[S],v);if(O===null){C===null&&(C=B);break}e&&C&&O.alternate===null&&t(g,C),y=a(O,y,S),T===null?L=O:T.sibling=O,T=O,C=B}if(S===h.length)return n(g,C),ve&&Nn(g,S),L;if(C===null){for(;S<h.length;S++)C=m(g,h[S],v),C!==null&&(y=a(C,y,S),T===null?L=C:T.sibling=C,T=C);return ve&&Nn(g,S),L}for(C=l(g,C);S<h.length;S++)B=p(C,g,S,h[S],v),B!==null&&(e&&B.alternate!==null&&C.delete(B.key===null?S:B.key),y=a(B,y,S),T===null?L=B:T.sibling=B,T=B);return e&&C.forEach(function(Y){return t(g,Y)}),ve&&Nn(g,S),L}function b(g,y,h,v){var L=Yl(h);if(typeof L!="function")throw Error(G(150));if(h=L.call(h),h==null)throw Error(G(151));for(var T=L=null,C=y,S=y=0,B=null,O=h.next();C!==null&&!O.done;S++,O=h.next()){C.index>S?(B=C,C=null):B=C.sibling;var Y=f(g,C,O.value,v);if(Y===null){C===null&&(C=B);break}e&&C&&Y.alternate===null&&t(g,C),y=a(Y,y,S),T===null?L=Y:T.sibling=Y,T=Y,C=B}if(O.done)return n(g,C),ve&&Nn(g,S),L;if(C===null){for(;!O.done;S++,O=h.next())O=m(g,O.value,v),O!==null&&(y=a(O,y,S),T===null?L=O:T.sibling=O,T=O);return ve&&Nn(g,S),L}for(C=l(g,C);!O.done;S++,O=h.next())O=p(C,g,S,O.value,v),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?S:O.key),y=a(O,y,S),T===null?L=O:T.sibling=O,T=O);return e&&C.forEach(function(N){return t(g,N)}),ve&&Nn(g,S),L}function _(g,y,h,v){if(typeof h=="object"&&h!==null&&h.type===rl&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case la:e:{for(var L=h.key,T=y;T!==null;){if(T.key===L){if(L=h.type,L===rl){if(T.tag===7){n(g,T.sibling),y=i(T,h.props.children),y.return=g,g=y;break e}}else if(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===rn&&Gd(L)===T.type){n(g,T.sibling),y=i(T,h.props),y.ref=ti(g,T,h),y.return=g,g=y;break e}n(g,T);break}else t(g,T);T=T.sibling}h.type===rl?(y=jn(h.props.children,g.mode,v,h.key),y.return=g,g=y):(v=Fa(h.type,h.key,h.props,null,g.mode,v),v.ref=ti(g,y,h),v.return=g,g=v)}return r(g);case al:e:{for(T=h.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===h.containerInfo&&y.stateNode.implementation===h.implementation){n(g,y.sibling),y=i(y,h.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=Po(h,g.mode,v),y.return=g,g=y}return r(g);case rn:return T=h._init,_(g,y,T(h._payload),v)}if(ci(h))return x(g,y,h,v);if(Yl(h))return b(g,y,h,v);fa(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,y!==null&&y.tag===6?(n(g,y.sibling),y=i(y,h),y.return=g,g=y):(n(g,y),y=Eo(h,g.mode,v),y.return=g,g=y),r(g)):n(g,y)}return _}var Al=Hm(!0),zm=Hm(!1),ar=kn(null),rr=null,fl=null,uc=null;function mc(){uc=fl=rr=null}function pc(e){var t=ar.current;xe(ar),e._currentValue=t}function gs(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Ll(e,t){rr=e,uc=fl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(uc!==e)if(e={context:e,memoizedValue:t,next:null},fl===null){if(rr===null)throw Error(G(308));fl=e,rr.dependencies={lanes:0,firstContext:e}}else fl=fl.next=e;return t}var Rn=null;function fc(e){Rn===null?Rn=[e]:Rn.push(e)}function Km(e,t,n,l){var i=t.interleaved;return i===null?(n.next=n,fc(t)):(n.next=i.next,i.next=n),t.interleaved=n,en(e,l)}function en(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,ue&2){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,en(e,n)}return i=l.interleaved,i===null?(t.next=t,fc(l)):(t.next=i.next,i.next=t),l.interleaved=t,en(e,n)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ec(e,n)}}function Md(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function or(e,t,n,l){var i=e.updateQueue;on=!1;var a=i.firstBaseUpdate,r=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,d=c.next;c.next=null,r===null?a=d:r.next=d,r=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==r&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=c))}if(a!==null){var m=i.baseState;r=0,u=d=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((l&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,b=s;switch(f=t,p=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){m=x.call(p,m,f);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,f=typeof x=="function"?x.call(p,m,f):x,f==null)break e;m=Ee({},m,f);break e;case 2:on=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=p,c=m):u=u.next=p,r|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(c=m),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do r|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);$n|=r,e.lanes=r,e.memoizedState=m}}function Bd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],i=l.callback;if(i!==null){if(l.callback=null,l=n,typeof i!="function")throw Error(G(191,i));i.call(l)}}}var Yi={},Ft=kn(Yi),Mi=kn(Yi),Bi=kn(Yi);function In(e){if(e===Yi)throw Error(G(174));return e}function gc(e,t){switch(be(Bi,t),be(Mi,e),be(Ft,Yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yo(t,e)}xe(Ft),be(Ft,t)}function Vl(){xe(Ft),xe(Mi),xe(Bi)}function Ym(e){In(Bi.current);var t=In(Ft.current),n=Yo(t,e.type);t!==n&&(be(Mi,e),be(Ft,n))}function bc(e){Mi.current===e&&(xe(Ft),xe(Mi))}var Le=kn(0);function sr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Co=[];function hc(){for(var e=0;e<Co.length;e++)Co[e]._workInProgressVersionPrimary=null;Co.length=0}var Ga=nn.ReactCurrentDispatcher,So=nn.ReactCurrentBatchConfig,Un=0,Te=null,Re=null,Ge=null,cr=!1,xi=!1,Oi=0,Kg=0;function $e(){throw Error(G(321))}function _c(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function xc(e,t,n,l,i,a){if(Un=a,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ga.current=e===null||e.memoizedState===null?Jg:Zg,e=n(l,i),xi){a=0;do{if(xi=!1,Oi=0,25<=a)throw Error(G(301));a+=1,Ge=Re=null,t.updateQueue=null,Ga.current=eb,e=n(l,i)}while(xi)}if(Ga.current=dr,t=Re!==null&&Re.next!==null,Un=0,Ge=Re=Te=null,cr=!1,t)throw Error(G(300));return e}function vc(){var e=Oi!==0;return Oi=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Te.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Lt(){if(Re===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ge===null?Te.memoizedState:Ge.next;if(t!==null)Ge=t,Re=e;else{if(e===null)throw Error(G(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ge===null?Te.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function ji(e,t){return typeof t=="function"?t(e):t}function Lo(e){var t=Lt(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var l=Re,i=l.baseQueue,a=n.pending;if(a!==null){if(i!==null){var r=i.next;i.next=a.next,a.next=r}l.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,l=l.baseState;var s=r=null,c=null,d=a;do{var u=d.lane;if((Un&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var m={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=m,r=l):c=c.next=m,Te.lanes|=u,$n|=u}d=d.next}while(d!==null&&d!==a);c===null?r=l:c.next=s,Rt(l,t.memoizedState)||(at=!0),t.memoizedState=l,t.baseState=r,t.baseQueue=c,n.lastRenderedState=l}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Te.lanes|=a,$n|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=Lt(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var r=i=i.next;do a=e(a,r.action),r=r.next;while(r!==i);Rt(a,t.memoizedState)||(at=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,l]}function Xm(){}function Jm(e,t){var n=Te,l=Lt(),i=t(),a=!Rt(l.memoizedState,i);if(a&&(l.memoizedState=i,at=!0),l=l.queue,wc(tp.bind(null,n,l,e),[e]),l.getSnapshot!==t||a||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Fi(9,ep.bind(null,n,l,i,t),void 0,null),Me===null)throw Error(G(349));Un&30||Zm(n,t,i)}return i}function Zm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ep(e,t,n,l){t.value=n,t.getSnapshot=l,np(t)&&lp(e)}function tp(e,t,n){return n(function(){np(t)&&lp(e)})}function np(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function lp(e){var t=en(e,1);t!==null&&Vt(t,e,1,-1)}function Od(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t.queue=e,e=e.dispatch=Xg.bind(null,Te,e),[t.memoizedState,e]}function Fi(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function ip(){return Lt().memoizedState}function Ma(e,t,n,l){var i=Bt();Te.flags|=e,i.memoizedState=Fi(1|t,n,void 0,l===void 0?null:l)}function Er(e,t,n,l){var i=Lt();l=l===void 0?null:l;var a=void 0;if(Re!==null){var r=Re.memoizedState;if(a=r.destroy,l!==null&&_c(l,r.deps)){i.memoizedState=Fi(t,n,a,l);return}}Te.flags|=e,i.memoizedState=Fi(1|t,n,a,l)}function jd(e,t){return Ma(8390656,8,e,t)}function wc(e,t){return Er(2048,8,e,t)}function ap(e,t){return Er(4,2,e,t)}function rp(e,t){return Er(4,4,e,t)}function op(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sp(e,t,n){return n=n!=null?n.concat([e]):null,Er(4,4,op.bind(null,t,e),n)}function Cc(){}function cp(e,t){var n=Lt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&_c(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function dp(e,t){var n=Lt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&_c(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function up(e,t,n){return Un&21?(Rt(n,t)||(n=gm(),Te.lanes|=n,$n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function Qg(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var l=So.transition;So.transition={};try{e(!1),t()}finally{ye=n,So.transition=l}}function mp(){return Lt().memoizedState}function Yg(e,t,n){var l=_n(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},pp(e))fp(t,n);else if(n=Km(e,t,n,l),n!==null){var i=Ze();Vt(n,e,l,i),yp(n,t,l)}}function Xg(e,t,n){var l=_n(e),i={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(pp(e))fp(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,s=a(r,n);if(i.hasEagerState=!0,i.eagerState=s,Rt(s,r)){var c=t.interleaved;c===null?(i.next=i,fc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Km(e,t,i,l),n!==null&&(i=Ze(),Vt(n,e,l,i),yp(n,t,l))}}function pp(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function fp(e,t){xi=cr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yp(e,t,n){if(n&4194240){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ec(e,n)}}var dr={readContext:St,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},Jg={readContext:St,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:jd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ma(4194308,4,op.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ma(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=Bt();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Yg.bind(null,Te,e),[l.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:Od,useDebugValue:Cc,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=Od(!1),t=e[0];return e=Qg.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=Te,i=Bt();if(ve){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),Me===null)throw Error(G(349));Un&30||Zm(l,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,jd(tp.bind(null,l,a,e),[e]),l.flags|=2048,Fi(9,ep.bind(null,l,a,n,t),void 0,null),n},useId:function(){var e=Bt(),t=Me.identifierPrefix;if(ve){var n=Kt,l=zt;n=(l&~(1<<32-At(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zg={readContext:St,useCallback:cp,useContext:St,useEffect:wc,useImperativeHandle:sp,useInsertionEffect:ap,useLayoutEffect:rp,useMemo:dp,useReducer:Lo,useRef:ip,useState:function(){return Lo(ji)},useDebugValue:Cc,useDeferredValue:function(e){var t=Lt();return up(t,Re.memoizedState,e)},useTransition:function(){var e=Lo(ji)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Xm,useSyncExternalStore:Jm,useId:mp,unstable_isNewReconciler:!1},eb={readContext:St,useCallback:cp,useContext:St,useEffect:wc,useImperativeHandle:sp,useInsertionEffect:ap,useLayoutEffect:rp,useMemo:dp,useReducer:ko,useRef:ip,useState:function(){return ko(ji)},useDebugValue:Cc,useDeferredValue:function(e){var t=Lt();return Re===null?t.memoizedState=e:up(t,Re.memoizedState,e)},useTransition:function(){var e=ko(ji)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Xm,useSyncExternalStore:Jm,useId:mp,unstable_isNewReconciler:!1};function Et(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bs(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pr={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Ze(),i=_n(e),a=Yt(l,i);a.payload=t,n!=null&&(a.callback=n),t=bn(e,a,i),t!==null&&(Vt(t,e,i,l),Ia(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Ze(),i=_n(e),a=Yt(l,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=bn(e,a,i),t!==null&&(Vt(t,e,i,l),Ia(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),l=_n(e),i=Yt(n,l);i.tag=2,t!=null&&(i.callback=t),t=bn(e,i,l),t!==null&&(Vt(t,e,l,n),Ia(t,e,l))}};function Fd(e,t,n,l,i,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,r):t.prototype&&t.prototype.isPureReactComponent?!Vi(n,l)||!Vi(i,a):!0}function gp(e,t,n){var l=!1,i=Cn,a=t.contextType;return typeof a=="object"&&a!==null?a=St(a):(i=ot(t)?Fn:Ke.current,l=t.contextTypes,a=(l=l!=null)?Pl(e,i):Cn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pr,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function qd(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Pr.enqueueReplaceState(t,t.state,null)}function hs(e,t,n,l){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=St(a):(a=ot(t)?Fn:Ke.current,i.context=Pl(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(bs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pr.enqueueReplaceState(i,i.state,null),or(e,n,i,l),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rl(e,t){try{var n="",l=t;do n+=Dy(l),l=l.return;while(l);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function To(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _s(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tb=typeof WeakMap=="function"?WeakMap:Map;function bp(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){mr||(mr=!0,Es=l),_s(e,t)},n}function hp(e,t,n){n=Yt(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=t.value;n.payload=function(){return l(i)},n.callback=function(){_s(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){_s(e,t),typeof l!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function Ud(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new tb;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(i.add(n),e=yb.bind(null,e,t,n),t.then(e,e))}function $d(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wd(e,t,n,l,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var nb=nn.ReactCurrentOwner,at=!1;function Xe(e,t,n,l){t.child=e===null?zm(t,null,n,l):Al(t,e.child,n,l)}function Hd(e,t,n,l,i){n=n.render;var a=t.ref;return Ll(t,i),l=xc(e,t,n,l,a,i),n=vc(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tn(e,t,i)):(ve&&n&&sc(t),t.flags|=1,Xe(e,t,l,i),t.child)}function zd(e,t,n,l,i){if(e===null){var a=n.type;return typeof a=="function"&&!Nc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,_p(e,t,a,l,i)):(e=Fa(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(r,l)&&e.ref===t.ref)return tn(e,t,i)}return t.flags|=1,e=xn(a,l),e.ref=t.ref,e.return=t,t.child=e}function _p(e,t,n,l,i){if(e!==null){var a=e.memoizedProps;if(Vi(a,l)&&e.ref===t.ref)if(at=!1,t.pendingProps=l=a,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,tn(e,t,i)}return xs(e,t,n,l,i)}function xp(e,t,n){var l=t.pendingProps,i=l.children,a=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(gl,mt),mt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(gl,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=a!==null?a.baseLanes:n,be(gl,mt),mt|=l}else a!==null?(l=a.baseLanes|n,t.memoizedState=null):l=n,be(gl,mt),mt|=l;return Xe(e,t,i,n),t.child}function vp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xs(e,t,n,l,i){var a=ot(n)?Fn:Ke.current;return a=Pl(t,a),Ll(t,i),n=xc(e,t,n,l,a,i),l=vc(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tn(e,t,i)):(ve&&l&&sc(t),t.flags|=1,Xe(e,t,n,i),t.child)}function Kd(e,t,n,l,i){if(ot(n)){var a=!0;nr(t)}else a=!1;if(Ll(t,i),t.stateNode===null)Ba(e,t),gp(t,n,l),hs(t,n,l,i),l=!0;else if(e===null){var r=t.stateNode,s=t.memoizedProps;r.props=s;var c=r.context,d=n.contextType;typeof d=="object"&&d!==null?d=St(d):(d=ot(n)?Fn:Ke.current,d=Pl(t,d));var u=n.getDerivedStateFromProps,m=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function";m||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==l||c!==d)&&qd(t,r,l,d),on=!1;var f=t.memoizedState;r.state=f,or(t,l,r,i),c=t.memoizedState,s!==l||f!==c||rt.current||on?(typeof u=="function"&&(bs(t,n,u,l),c=t.memoizedState),(s=on||Fd(t,n,s,l,f,c,d))?(m||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=c),r.props=l,r.state=c,r.context=d,l=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,Qm(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Et(t.type,s),r.props=d,m=t.pendingProps,f=r.context,c=n.contextType,typeof c=="object"&&c!==null?c=St(c):(c=ot(n)?Fn:Ke.current,c=Pl(t,c));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==m||f!==c)&&qd(t,r,l,c),on=!1,f=t.memoizedState,r.state=f,or(t,l,r,i);var x=t.memoizedState;s!==m||f!==x||rt.current||on?(typeof p=="function"&&(bs(t,n,p,l),x=t.memoizedState),(d=on||Fd(t,n,d,l,f,x,c)||!1)?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,x,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,x,c)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=x),r.props=l,r.state=x,r.context=c,l=d):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return vs(e,t,n,l,a,i)}function vs(e,t,n,l,i,a){vp(e,t);var r=(t.flags&128)!==0;if(!l&&!r)return i&&Vd(t,n,!1),tn(e,t,a);l=t.stateNode,nb.current=t;var s=r&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&r?(t.child=Al(t,e.child,null,a),t.child=Al(t,null,s,a)):Xe(e,t,s,a),t.memoizedState=l.state,i&&Vd(t,n,!0),t.child}function wp(e){var t=e.stateNode;t.pendingContext?Ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ad(e,t.context,!1),gc(e,t.containerInfo)}function Qd(e,t,n,l,i){return Nl(),dc(i),t.flags|=256,Xe(e,t,n,l),t.child}var ws={dehydrated:null,treeContext:null,retryLane:0};function Cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cp(e,t,n){var l=t.pendingProps,i=Le.current,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Le,i&1),e===null)return ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=l.children,e=l.fallback,a?(l=t.mode,a=t.child,r={mode:"hidden",children:r},!(l&1)&&a!==null?(a.childLanes=0,a.pendingProps=r):a=Vr(r,l,0,null),e=jn(e,l,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Cs(n),t.memoizedState=ws,e):Sc(t,r));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return lb(e,t,r,l,s,i,n);if(a){a=l.fallback,r=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:l.children};return!(r&1)&&t.child!==i?(l=t.child,l.childLanes=0,l.pendingProps=c,t.deletions=null):(l=xn(i,c),l.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=xn(s,a):(a=jn(a,r,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,r=e.child.memoizedState,r=r===null?Cs(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},a.memoizedState=r,a.childLanes=e.childLanes&~n,t.memoizedState=ws,l}return a=e.child,e=a.sibling,l=xn(a,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function Sc(e,t){return t=Vr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ya(e,t,n,l){return l!==null&&dc(l),Al(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lb(e,t,n,l,i,a,r){if(n)return t.flags&256?(t.flags&=-257,l=To(Error(G(422))),ya(e,t,r,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=l.fallback,i=t.mode,l=Vr({mode:"visible",children:l.children},i,0,null),a=jn(a,i,r,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,t.mode&1&&Al(t,e.child,null,r),t.child.memoizedState=Cs(r),t.memoizedState=ws,a);if(!(t.mode&1))return ya(e,t,r,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var s=l.dgst;return l=s,a=Error(G(419)),l=To(a,l,void 0),ya(e,t,r,l)}if(s=(r&e.childLanes)!==0,at||s){if(l=Me,l!==null){switch(r&-r){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|r)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,en(e,i),Vt(l,e,i,-1))}return Pc(),l=To(Error(G(421))),ya(e,t,r,l)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gb.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ft=gn(i.nextSibling),yt=t,ve=!0,Nt=null,e!==null&&(_t[xt++]=zt,_t[xt++]=Kt,_t[xt++]=qn,zt=e.id,Kt=e.overflow,qn=t),t=Sc(t,l.children),t.flags|=4096,t)}function Yd(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),gs(e.return,t,n)}function Do(e,t,n,l,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=l,a.tail=n,a.tailMode=i)}function Sp(e,t,n){var l=t.pendingProps,i=l.revealOrder,a=l.tail;if(Xe(e,t,l.children,n),l=Le.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yd(e,n,t);else if(e.tag===19)Yd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(be(Le,l),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&sr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Do(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&sr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Do(t,!0,n,null,a);break;case"together":Do(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ba(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ib(e,t,n){switch(t.tag){case 3:wp(t),Nl();break;case 5:Ym(t);break;case 1:ot(t.type)&&nr(t);break;case 4:gc(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,i=t.memoizedProps.value;be(ar,l._currentValue),l._currentValue=i;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(be(Le,Le.current&1),t.flags|=128,null):n&t.child.childLanes?Cp(e,t,n):(be(Le,Le.current&1),e=tn(e,t,n),e!==null?e.sibling:null);be(Le,Le.current&1);break;case 19:if(l=(n&t.childLanes)!==0,e.flags&128){if(l)return Sp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Le,Le.current),l)break;return null;case 22:case 23:return t.lanes=0,xp(e,t,n)}return tn(e,t,n)}var Lp,Ss,kp,Tp;Lp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ss=function(){};kp=function(e,t,n,l){var i=e.memoizedProps;if(i!==l){e=t.stateNode,In(Ft.current);var a=null;switch(n){case"input":i=Ho(e,i),l=Ho(e,l),a=[];break;case"select":i=Ee({},i,{value:void 0}),l=Ee({},l,{value:void 0}),a=[];break;case"textarea":i=Qo(e,i),l=Qo(e,l),a=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=er)}Xo(n,l);var r;n=null;for(d in i)if(!l.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(r in s)s.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ki.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in l){var c=l[d];if(s=i!=null?i[d]:void 0,l.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(r in s)!s.hasOwnProperty(r)||c&&c.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in c)c.hasOwnProperty(r)&&s[r]!==c[r]&&(n||(n={}),n[r]=c[r])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ki.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&_e("scroll",e),a||s===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Tp=function(e,t,n,l){n!==l&&(t.flags|=4)};function ni(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function ab(e,t,n){var l=t.pendingProps;switch(cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return ot(t.type)&&tr(),We(t),null;case 3:return l=t.stateNode,Vl(),xe(rt),xe(Ke),hc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(As(Nt),Nt=null))),Ss(e,t),We(t),null;case 5:bc(t);var i=In(Bi.current);if(n=t.type,e!==null&&t.stateNode!=null)kp(e,t,n,l,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(G(166));return We(t),null}if(e=In(Ft.current),pa(t)){l=t.stateNode,n=t.type;var a=t.memoizedProps;switch(l[Ot]=t,l[Gi]=a,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",l),_e("close",l);break;case"iframe":case"object":case"embed":_e("load",l);break;case"video":case"audio":for(i=0;i<ui.length;i++)_e(ui[i],l);break;case"source":_e("error",l);break;case"img":case"image":case"link":_e("error",l),_e("load",l);break;case"details":_e("toggle",l);break;case"input":ad(l,a),_e("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!a.multiple},_e("invalid",l);break;case"textarea":od(l,a),_e("invalid",l)}Xo(n,a),i=null;for(var r in a)if(a.hasOwnProperty(r)){var s=a[r];r==="children"?typeof s=="string"?l.textContent!==s&&(a.suppressHydrationWarning!==!0&&ma(l.textContent,s,e),i=["children",s]):typeof s=="number"&&l.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ma(l.textContent,s,e),i=["children",""+s]):ki.hasOwnProperty(r)&&s!=null&&r==="onScroll"&&_e("scroll",l)}switch(n){case"input":ia(l),rd(l,a,!0);break;case"textarea":ia(l),sd(l);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(l.onclick=er)}l=i,t.updateQueue=l,l!==null&&(t.flags|=4)}else{r=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=r.createElement(n,{is:l.is}):(e=r.createElement(n),n==="select"&&(r=e,l.multiple?r.multiple=!0:l.size&&(r.size=l.size))):e=r.createElementNS(e,n),e[Ot]=t,e[Gi]=l,Lp(e,t,!1,!1),t.stateNode=e;e:{switch(r=Jo(n,l),n){case"dialog":_e("cancel",e),_e("close",e),i=l;break;case"iframe":case"object":case"embed":_e("load",e),i=l;break;case"video":case"audio":for(i=0;i<ui.length;i++)_e(ui[i],e);i=l;break;case"source":_e("error",e),i=l;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=l;break;case"details":_e("toggle",e),i=l;break;case"input":ad(e,l),i=Ho(e,l),_e("invalid",e);break;case"option":i=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},i=Ee({},l,{value:void 0}),_e("invalid",e);break;case"textarea":od(e,l),i=Qo(e,l),_e("invalid",e);break;default:i=l}Xo(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="style"?im(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&nm(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ti(e,c):typeof c=="number"&&Ti(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ki.hasOwnProperty(a)?c!=null&&a==="onScroll"&&_e("scroll",e):c!=null&&Ks(e,a,c,r))}switch(n){case"input":ia(e),rd(e,l,!1);break;case"textarea":ia(e),sd(e);break;case"option":l.value!=null&&e.setAttribute("value",""+wn(l.value));break;case"select":e.multiple=!!l.multiple,a=l.value,a!=null?vl(e,!!l.multiple,a,!1):l.defaultValue!=null&&vl(e,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=er)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Tp(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(G(166));if(n=In(Bi.current),In(Ft.current),pa(t)){if(l=t.stateNode,n=t.memoizedProps,l[Ot]=t,(a=l.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:ma(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ma(l.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[Ot]=t,t.stateNode=l}return We(t),null;case 13:if(xe(Le),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&ft!==null&&t.mode&1&&!(t.flags&128))Wm(),Nl(),t.flags|=98560,a=!1;else if(a=pa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(G(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(G(317));a[Ot]=t}else Nl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),a=!1}else Nt!==null&&(As(Nt),Nt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||Le.current&1?Ie===0&&(Ie=3):Pc())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Vl(),Ss(e,t),e===null&&Ri(t.stateNode.containerInfo),We(t),null;case 10:return pc(t.type._context),We(t),null;case 17:return ot(t.type)&&tr(),We(t),null;case 19:if(xe(Le),a=t.memoizedState,a===null)return We(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)ni(a,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=sr(e),r!==null){for(t.flags|=128,ni(a,!1),l=r.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)a=n,e=l,a.flags&=14680066,r=a.alternate,r===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,a.type=r.type,e=r.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Le,Le.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ne()>Il&&(t.flags|=128,l=!0,ni(a,!1),t.lanes=4194304)}else{if(!l)if(e=sr(r),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!ve)return We(t),null}else 2*Ne()-a.renderingStartTime>Il&&n!==1073741824&&(t.flags|=128,l=!0,ni(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(n=a.last,n!==null?n.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ne(),t.sibling=null,n=Le.current,be(Le,l?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Ec(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?mt&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function rb(e,t){switch(cc(t),t.tag){case 1:return ot(t.type)&&tr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vl(),xe(rt),xe(Ke),hc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bc(t),null;case 13:if(xe(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Nl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Le),null;case 4:return Vl(),null;case 10:return pc(t.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var ga=!1,He=!1,ob=typeof WeakSet=="function"?WeakSet:Set,$=null;function yl(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){Pe(e,t,l)}else n.current=null}function Ls(e,t,n){try{n()}catch(l){Pe(e,t,l)}}var Xd=!1;function sb(e,t){if(ss=Xa,e=Am(),oc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,s=-1,c=-1,d=0,u=0,m=e,f=null;t:for(;;){for(var p;m!==n||i!==0&&m.nodeType!==3||(s=r+i),m!==a||l!==0&&m.nodeType!==3||(c=r+l),m.nodeType===3&&(r+=m.nodeValue.length),(p=m.firstChild)!==null;)f=m,m=p;for(;;){if(m===e)break t;if(f===n&&++d===i&&(s=r),f===a&&++u===l&&(c=r),(p=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=p}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(cs={focusedElem:e,selectionRange:n},Xa=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,_=x.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:Et(t.type,b),_);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(v){Pe(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return x=Xd,Xd=!1,x}function vi(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ls(t,n,a)}i=i.next}while(i!==l)}}function Nr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function ks(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dp(e){var t=e.alternate;t!==null&&(e.alternate=null,Dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Gi],delete t[ms],delete t[$g],delete t[Wg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ep(e){return e.tag===5||e.tag===3||e.tag===4}function Jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=er));else if(l!==4&&(e=e.child,e!==null))for(Ts(e,t,n),e=e.sibling;e!==null;)Ts(e,t,n),e=e.sibling}function Ds(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ds(e,t,n),e=e.sibling;e!==null;)Ds(e,t,n),e=e.sibling}var je=null,Pt=!1;function ln(e,t,n){for(n=n.child;n!==null;)Pp(e,t,n),n=n.sibling}function Pp(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Cr,n)}catch{}switch(n.tag){case 5:He||yl(n,t);case 6:var l=je,i=Pt;je=null,ln(e,t,n),je=l,Pt=i,je!==null&&(Pt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Pt?(e=je,n=n.stateNode,e.nodeType===8?vo(e.parentNode,n):e.nodeType===1&&vo(e,n),Ni(e)):vo(je,n.stateNode));break;case 4:l=je,i=Pt,je=n.stateNode.containerInfo,Pt=!0,ln(e,t,n),je=l,Pt=i;break;case 0:case 11:case 14:case 15:if(!He&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var a=i,r=a.destroy;a=a.tag,r!==void 0&&(a&2||a&4)&&Ls(n,t,r),i=i.next}while(i!==l)}ln(e,t,n);break;case 1:if(!He&&(yl(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(s){Pe(n,t,s)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(He=(l=He)||n.memoizedState!==null,ln(e,t,n),He=l):ln(e,t,n);break;default:ln(e,t,n)}}function Zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ob),t.forEach(function(l){var i=bb.bind(null,e,l);n.has(l)||(n.add(l),l.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l];try{var a=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 5:je=s.stateNode,Pt=!1;break e;case 3:je=s.stateNode.containerInfo,Pt=!0;break e;case 4:je=s.stateNode.containerInfo,Pt=!0;break e}s=s.return}if(je===null)throw Error(G(160));Pp(a,r,i),je=null,Pt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Pe(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Np(t,e),t=t.sibling}function Np(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Mt(e),l&4){try{vi(3,e,e.return),Nr(3,e)}catch(b){Pe(e,e.return,b)}try{vi(5,e,e.return)}catch(b){Pe(e,e.return,b)}}break;case 1:Tt(t,e),Mt(e),l&512&&n!==null&&yl(n,n.return);break;case 5:if(Tt(t,e),Mt(e),l&512&&n!==null&&yl(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(b){Pe(e,e.return,b)}}if(l&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,r=n!==null?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Zu(i,a),Jo(s,r);var d=Jo(s,a);for(r=0;r<c.length;r+=2){var u=c[r],m=c[r+1];u==="style"?im(i,m):u==="dangerouslySetInnerHTML"?nm(i,m):u==="children"?Ti(i,m):Ks(i,u,m,d)}switch(s){case"input":zo(i,a);break;case"textarea":em(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?vl(i,!!a.multiple,p,!1):f!==!!a.multiple&&(a.defaultValue!=null?vl(i,!!a.multiple,a.defaultValue,!0):vl(i,!!a.multiple,a.multiple?[]:"",!1))}i[Gi]=a}catch(b){Pe(e,e.return,b)}}break;case 6:if(Tt(t,e),Mt(e),l&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(b){Pe(e,e.return,b)}}break;case 3:if(Tt(t,e),Mt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(b){Pe(e,e.return,b)}break;case 4:Tt(t,e),Mt(e);break;case 13:Tt(t,e),Mt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Tc=Ne())),l&4&&Zd(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(He=(d=He)||u,Tt(t,e),He=d):Tt(t,e),Mt(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for($=e,u=e.child;u!==null;){for(m=$=u;$!==null;){switch(f=$,p=f.child,f.tag){case 0:case 11:case 14:case 15:vi(4,f,f.return);break;case 1:yl(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){l=f,n=f.return;try{t=l,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){Pe(l,n,b)}}break;case 5:yl(f,f.return);break;case 22:if(f.memoizedState!==null){tu(m);continue}}p!==null?(p.return=f,$=p):tu(m)}u=u.sibling}e:for(u=null,m=e;;){if(m.tag===5){if(u===null){u=m;try{i=m.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=m.stateNode,c=m.memoizedProps.style,r=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=lm("display",r))}catch(b){Pe(e,e.return,b)}}}else if(m.tag===6){if(u===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(b){Pe(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;u===m&&(u=null),m=m.return}u===m&&(u=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Tt(t,e),Mt(e),l&4&&Zd(e);break;case 21:break;default:Tt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ep(n)){var l=n;break e}n=n.return}throw Error(G(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(Ti(i,""),l.flags&=-33);var a=Jd(e);Ds(e,a,i);break;case 3:case 4:var r=l.stateNode.containerInfo,s=Jd(e);Ts(e,s,r);break;default:throw Error(G(161))}}catch(c){Pe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cb(e,t,n){$=e,Ap(e)}function Ap(e,t,n){for(var l=(e.mode&1)!==0;$!==null;){var i=$,a=i.child;if(i.tag===22&&l){var r=i.memoizedState!==null||ga;if(!r){var s=i.alternate,c=s!==null&&s.memoizedState!==null||He;s=ga;var d=He;if(ga=r,(He=c)&&!d)for($=i;$!==null;)r=$,c=r.child,r.tag===22&&r.memoizedState!==null?nu(i):c!==null?(c.return=r,$=c):nu(i);for(;a!==null;)$=a,Ap(a),a=a.sibling;$=i,ga=s,He=d}eu(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,$=a):eu(e)}}function eu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||Nr(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!He)if(n===null)l.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);l.componentDidUpdate(i,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bd(t,a,l);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bd(t,r,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var m=u.dehydrated;m!==null&&Ni(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}He||t.flags&512&&ks(t)}catch(f){Pe(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function tu(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function nu(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nr(4,t)}catch(c){Pe(t,n,c)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var i=t.return;try{l.componentDidMount()}catch(c){Pe(t,i,c)}}var a=t.return;try{ks(t)}catch(c){Pe(t,a,c)}break;case 5:var r=t.return;try{ks(t)}catch(c){Pe(t,r,c)}}}catch(c){Pe(t,t.return,c)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var db=Math.ceil,ur=nn.ReactCurrentDispatcher,Lc=nn.ReactCurrentOwner,wt=nn.ReactCurrentBatchConfig,ue=0,Me=null,Ae=null,Fe=0,mt=0,gl=kn(0),Ie=0,qi=null,$n=0,Ar=0,kc=0,wi=null,lt=null,Tc=0,Il=1/0,Wt=null,mr=!1,Es=null,hn=null,ba=!1,mn=null,pr=0,Ci=0,Ps=null,Oa=-1,ja=0;function Ze(){return ue&6?Ne():Oa!==-1?Oa:Oa=Ne()}function _n(e){return e.mode&1?ue&2&&Fe!==0?Fe&-Fe:zg.transition!==null?(ja===0&&(ja=gm()),ja):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Cm(e.type)),e):1}function Vt(e,t,n,l){if(50<Ci)throw Ci=0,Ps=null,Error(G(185));zi(e,n,l),(!(ue&2)||e!==Me)&&(e===Me&&(!(ue&2)&&(Ar|=n),Ie===4&&dn(e,Fe)),st(e,l),n===1&&ue===0&&!(t.mode&1)&&(Il=Ne()+500,Dr&&Tn()))}function st(e,t){var n=e.callbackNode;zy(e,t);var l=Ya(e,e===Me?Fe:0);if(l===0)n!==null&&ud(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&ud(n),t===1)e.tag===0?Hg(lu.bind(null,e)):qm(lu.bind(null,e)),qg(function(){!(ue&6)&&Tn()}),n=null;else{switch(bm(l)){case 1:n=Zs;break;case 4:n=fm;break;case 16:n=Qa;break;case 536870912:n=ym;break;default:n=Qa}n=jp(n,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vp(e,t){if(Oa=-1,ja=0,ue&6)throw Error(G(327));var n=e.callbackNode;if(kl()&&e.callbackNode!==n)return null;var l=Ya(e,e===Me?Fe:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=fr(e,l);else{t=l;var i=ue;ue|=2;var a=Ip();(Me!==e||Fe!==t)&&(Wt=null,Il=Ne()+500,On(e,t));do try{pb();break}catch(s){Rp(e,s)}while(!0);mc(),ur.current=a,ue=i,Ae!==null?t=0:(Me=null,Fe=0,t=Ie)}if(t!==0){if(t===2&&(i=ls(e),i!==0&&(l=i,t=Ns(e,i))),t===1)throw n=qi,On(e,0),dn(e,l),st(e,Ne()),n;if(t===6)dn(e,l);else{if(i=e.current.alternate,!(l&30)&&!ub(i)&&(t=fr(e,l),t===2&&(a=ls(e),a!==0&&(l=a,t=Ns(e,a))),t===1))throw n=qi,On(e,0),dn(e,l),st(e,Ne()),n;switch(e.finishedWork=i,e.finishedLanes=l,t){case 0:case 1:throw Error(G(345));case 2:An(e,lt,Wt);break;case 3:if(dn(e,l),(l&130023424)===l&&(t=Tc+500-Ne(),10<t)){if(Ya(e,0)!==0)break;if(i=e.suspendedLanes,(i&l)!==l){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=us(An.bind(null,e,lt,Wt),t);break}An(e,lt,Wt);break;case 4:if(dn(e,l),(l&4194240)===l)break;for(t=e.eventTimes,i=-1;0<l;){var r=31-At(l);a=1<<r,r=t[r],r>i&&(i=r),l&=~a}if(l=i,l=Ne()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*db(l/1960))-l,10<l){e.timeoutHandle=us(An.bind(null,e,lt,Wt),l);break}An(e,lt,Wt);break;case 5:An(e,lt,Wt);break;default:throw Error(G(329))}}}return st(e,Ne()),e.callbackNode===n?Vp.bind(null,e):null}function Ns(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=fr(e,t),e!==2&&(t=lt,lt=n,t!==null&&As(t)),e}function As(e){lt===null?lt=e:lt.push.apply(lt,e)}function ub(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var i=n[l],a=i.getSnapshot;i=i.value;try{if(!Rt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~kc,t&=~Ar,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),l=1<<n;e[n]=-1,t&=~l}}function lu(e){if(ue&6)throw Error(G(327));kl();var t=Ya(e,0);if(!(t&1))return st(e,Ne()),null;var n=fr(e,t);if(e.tag!==0&&n===2){var l=ls(e);l!==0&&(t=l,n=Ns(e,l))}if(n===1)throw n=qi,On(e,0),dn(e,t),st(e,Ne()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,lt,Wt),st(e,Ne()),null}function Dc(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(Il=Ne()+500,Dr&&Tn())}}function Wn(e){mn!==null&&mn.tag===0&&!(ue&6)&&kl();var t=ue;ue|=1;var n=wt.transition,l=ye;try{if(wt.transition=null,ye=1,e)return e()}finally{ye=l,wt.transition=n,ue=t,!(ue&6)&&Tn()}}function Ec(){mt=gl.current,xe(gl)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fg(n)),Ae!==null)for(n=Ae.return;n!==null;){var l=n;switch(cc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&tr();break;case 3:Vl(),xe(rt),xe(Ke),hc();break;case 5:bc(l);break;case 4:Vl();break;case 13:xe(Le);break;case 19:xe(Le);break;case 10:pc(l.type._context);break;case 22:case 23:Ec()}n=n.return}if(Me=e,Ae=e=xn(e.current,null),Fe=mt=t,Ie=0,qi=null,kc=Ar=$n=0,lt=wi=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],l=n.interleaved,l!==null){n.interleaved=null;var i=l.next,a=n.pending;if(a!==null){var r=a.next;a.next=i,l.next=r}n.pending=l}Rn=null}return e}function Rp(e,t){do{var n=Ae;try{if(mc(),Ga.current=dr,cr){for(var l=Te.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}cr=!1}if(Un=0,Ge=Re=Te=null,xi=!1,Oi=0,Lc.current=null,n===null||n.return===null){Ie=1,qi=t,Ae=null;break}e:{var a=e,r=n.return,s=n,c=t;if(t=Fe,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=s,m=u.tag;if(!(u.mode&1)&&(m===0||m===11||m===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=$d(r);if(p!==null){p.flags&=-257,Wd(p,r,s,a,t),p.mode&1&&Ud(a,d,t),t=p,c=d;var x=t.updateQueue;if(x===null){var b=new Set;b.add(c),t.updateQueue=b}else x.add(c);break e}else{if(!(t&1)){Ud(a,d,t),Pc();break e}c=Error(G(426))}}else if(ve&&s.mode&1){var _=$d(r);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Wd(_,r,s,a,t),dc(Rl(c,s));break e}}a=c=Rl(c,s),Ie!==4&&(Ie=2),wi===null?wi=[a]:wi.push(a),a=r;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=bp(a,c,t);Md(a,g);break e;case 1:s=c;var y=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof y.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(hn===null||!hn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var v=hp(a,s,t);Md(a,v);break e}}a=a.return}while(a!==null)}Mp(n)}catch(L){t=L,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function Ip(){var e=ur.current;return ur.current=dr,e===null?dr:e}function Pc(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Me===null||!($n&268435455)&&!(Ar&268435455)||dn(Me,Fe)}function fr(e,t){var n=ue;ue|=2;var l=Ip();(Me!==e||Fe!==t)&&(Wt=null,On(e,t));do try{mb();break}catch(i){Rp(e,i)}while(!0);if(mc(),ue=n,ur.current=l,Ae!==null)throw Error(G(261));return Me=null,Fe=0,Ie}function mb(){for(;Ae!==null;)Gp(Ae)}function pb(){for(;Ae!==null&&!By();)Gp(Ae)}function Gp(e){var t=Op(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?Mp(e):Ae=t,Lc.current=null}function Mp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rb(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ae=null;return}}else if(n=ab(n,t,mt),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ie===0&&(Ie=5)}function An(e,t,n){var l=ye,i=wt.transition;try{wt.transition=null,ye=1,fb(e,t,n,l)}finally{wt.transition=i,ye=l}return null}function fb(e,t,n,l){do kl();while(mn!==null);if(ue&6)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Ky(e,a),e===Me&&(Ae=Me=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,jp(Qa,function(){return kl(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=wt.transition,wt.transition=null;var r=ye;ye=1;var s=ue;ue|=4,Lc.current=null,sb(e,n),Np(n,e),Rg(cs),Xa=!!ss,cs=ss=null,e.current=n,cb(n),Oy(),ue=s,ye=r,wt.transition=a}else e.current=n;if(ba&&(ba=!1,mn=e,pr=i),a=e.pendingLanes,a===0&&(hn=null),qy(n.stateNode),st(e,Ne()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],l(i.value,{componentStack:i.stack,digest:i.digest});if(mr)throw mr=!1,e=Es,Es=null,e;return pr&1&&e.tag!==0&&kl(),a=e.pendingLanes,a&1?e===Ps?Ci++:(Ci=0,Ps=e):Ci=0,Tn(),null}function kl(){if(mn!==null){var e=bm(pr),t=wt.transition,n=ye;try{if(wt.transition=null,ye=16>e?16:e,mn===null)var l=!1;else{if(e=mn,mn=null,pr=0,ue&6)throw Error(G(331));var i=ue;for(ue|=4,$=e.current;$!==null;){var a=$,r=a.child;if($.flags&16){var s=a.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for($=d;$!==null;){var u=$;switch(u.tag){case 0:case 11:case 15:vi(8,u,a)}var m=u.child;if(m!==null)m.return=u,$=m;else for(;$!==null;){u=$;var f=u.sibling,p=u.return;if(Dp(u),u===d){$=null;break}if(f!==null){f.return=p,$=f;break}$=p}}}var x=a.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}$=a}}if(a.subtreeFlags&2064&&r!==null)r.return=a,$=r;else e:for(;$!==null;){if(a=$,a.flags&2048)switch(a.tag){case 0:case 11:case 15:vi(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,$=g;break e}$=a.return}}var y=e.current;for($=y;$!==null;){r=$;var h=r.child;if(r.subtreeFlags&2064&&h!==null)h.return=r,$=h;else e:for(r=y;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Nr(9,s)}}catch(L){Pe(s,s.return,L)}if(s===r){$=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}if(ue=i,Tn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Cr,e)}catch{}l=!0}return l}finally{ye=n,wt.transition=t}}return!1}function iu(e,t,n){t=Rl(n,t),t=bp(e,t,1),e=bn(e,t,1),t=Ze(),e!==null&&(zi(e,1,t),st(e,t))}function Pe(e,t,n){if(e.tag===3)iu(e,e,n);else for(;t!==null;){if(t.tag===3){iu(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(hn===null||!hn.has(l))){e=Rl(n,e),e=hp(t,e,1),t=bn(t,e,1),e=Ze(),t!==null&&(zi(t,1,e),st(t,e));break}}t=t.return}}function yb(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Fe&n)===n&&(Ie===4||Ie===3&&(Fe&130023424)===Fe&&500>Ne()-Tc?On(e,0):kc|=n),st(e,t)}function Bp(e,t){t===0&&(e.mode&1?(t=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):t=1);var n=Ze();e=en(e,t),e!==null&&(zi(e,t,n),st(e,n))}function gb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bp(e,n)}function bb(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(G(314))}l!==null&&l.delete(t),Bp(e,n)}var Op;Op=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,ib(e,t,n);at=!!(e.flags&131072)}else at=!1,ve&&t.flags&1048576&&Um(t,ir,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Ba(e,t),e=t.pendingProps;var i=Pl(t,Ke.current);Ll(t,n),i=xc(null,t,l,e,i,n);var a=vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(l)?(a=!0,nr(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yc(t),i.updater=Pr,t.stateNode=i,i._reactInternals=t,hs(t,l,e,n),t=vs(null,t,l,!0,a,n)):(t.tag=0,ve&&a&&sc(t),Xe(null,t,i,n),t=t.child),t;case 16:l=t.elementType;e:{switch(Ba(e,t),e=t.pendingProps,i=l._init,l=i(l._payload),t.type=l,i=t.tag=_b(l),e=Et(l,e),i){case 0:t=xs(null,t,l,e,n);break e;case 1:t=Kd(null,t,l,e,n);break e;case 11:t=Hd(null,t,l,e,n);break e;case 14:t=zd(null,t,l,Et(l.type,e),n);break e}throw Error(G(306,l,""))}return t;case 0:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:Et(l,i),xs(e,t,l,i,n);case 1:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:Et(l,i),Kd(e,t,l,i,n);case 3:e:{if(wp(t),e===null)throw Error(G(387));l=t.pendingProps,a=t.memoizedState,i=a.element,Qm(e,t),or(t,l,null,n);var r=t.memoizedState;if(l=r.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Rl(Error(G(423)),t),t=Qd(e,t,l,n,i);break e}else if(l!==i){i=Rl(Error(G(424)),t),t=Qd(e,t,l,n,i);break e}else for(ft=gn(t.stateNode.containerInfo.firstChild),yt=t,ve=!0,Nt=null,n=zm(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nl(),l===i){t=tn(e,t,n);break e}Xe(e,t,l,n)}t=t.child}return t;case 5:return Ym(t),e===null&&ys(t),l=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,r=i.children,ds(l,i)?r=null:a!==null&&ds(l,a)&&(t.flags|=32),vp(e,t),Xe(e,t,r,n),t.child;case 6:return e===null&&ys(t),null;case 13:return Cp(e,t,n);case 4:return gc(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Al(t,null,l,n):Xe(e,t,l,n),t.child;case 11:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:Et(l,i),Hd(e,t,l,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,i=t.pendingProps,a=t.memoizedProps,r=i.value,be(ar,l._currentValue),l._currentValue=r,a!==null)if(Rt(a.value,r)){if(a.children===i.children&&!rt.current){t=tn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){r=a.child;for(var c=s.firstContext;c!==null;){if(c.context===l){if(a.tag===1){c=Yt(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),gs(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(a.tag===10)r=a.type===t.type?null:a.child;else if(a.tag===18){if(r=a.return,r===null)throw Error(G(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),gs(r,n,t),r=a.sibling}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,l=t.pendingProps.children,Ll(t,n),i=St(i),l=l(i),t.flags|=1,Xe(e,t,l,n),t.child;case 14:return l=t.type,i=Et(l,t.pendingProps),i=Et(l.type,i),zd(e,t,l,i,n);case 15:return _p(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:Et(l,i),Ba(e,t),t.tag=1,ot(l)?(e=!0,nr(t)):e=!1,Ll(t,n),gp(t,l,i),hs(t,l,i,n),vs(null,t,l,!0,e,n);case 19:return Sp(e,t,n);case 22:return xp(e,t,n)}throw Error(G(156,t.tag))};function jp(e,t){return pm(e,t)}function hb(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,l){return new hb(e,t,n,l)}function Nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _b(e){if(typeof e=="function")return Nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Xs)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fa(e,t,n,l,i,a){var r=2;if(l=e,typeof e=="function")Nc(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case rl:return jn(n.children,i,a,t);case Qs:r=8,i|=8;break;case qo:return e=vt(12,n,t,i|2),e.elementType=qo,e.lanes=a,e;case Uo:return e=vt(13,n,t,i),e.elementType=Uo,e.lanes=a,e;case $o:return e=vt(19,n,t,i),e.elementType=$o,e.lanes=a,e;case Yu:return Vr(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ku:r=10;break e;case Qu:r=9;break e;case Ys:r=11;break e;case Xs:r=14;break e;case rn:r=16,l=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=vt(r,n,t,i),t.elementType=e,t.type=l,t.lanes=a,t}function jn(e,t,n,l){return e=vt(7,e,l,t),e.lanes=n,e}function Vr(e,t,n,l){return e=vt(22,e,l,t),e.elementType=Yu,e.lanes=n,e.stateNode={isHidden:!1},e}function Eo(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Po(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xb(e,t,n,l,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=co(0),this.expirationTimes=co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=co(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ac(e,t,n,l,i,a,r,s,c){return e=new xb(e,t,n,s,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=vt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(a),e}function vb(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:al,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function Fp(e){if(!e)return Cn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(ot(n))return Fm(e,n,t)}return t}function qp(e,t,n,l,i,a,r,s,c){return e=Ac(n,l,!0,e,i,a,r,s,c),e.context=Fp(null),n=e.current,l=Ze(),i=_n(n),a=Yt(l,i),a.callback=t??null,bn(n,a,i),e.current.lanes=i,zi(e,i,l),st(e,l),e}function Rr(e,t,n,l){var i=t.current,a=Ze(),r=_n(i);return n=Fp(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(a,r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=bn(i,t,r),e!==null&&(Vt(e,i,r,a),Ia(e,i,r)),r}function yr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vc(e,t){au(e,t),(e=e.alternate)&&au(e,t)}function wb(){return null}var Up=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rc(e){this._internalRoot=e}Ir.prototype.render=Rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Rr(e,t,null,null)};Ir.prototype.unmount=Rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){Rr(null,e,null,null)}),t[Zt]=null}};function Ir(e){this._internalRoot=e}Ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=xm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&wm(e)}};function Ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ru(){}function Cb(e,t,n,l,i){if(i){if(typeof l=="function"){var a=l;l=function(){var d=yr(r);a.call(d)}}var r=qp(t,l,e,0,null,!1,!1,"",ru);return e._reactRootContainer=r,e[Zt]=r.current,Ri(e.nodeType===8?e.parentNode:e),Wn(),r}for(;i=e.lastChild;)e.removeChild(i);if(typeof l=="function"){var s=l;l=function(){var d=yr(c);s.call(d)}}var c=Ac(e,0,!1,null,null,!1,!1,"",ru);return e._reactRootContainer=c,e[Zt]=c.current,Ri(e.nodeType===8?e.parentNode:e),Wn(function(){Rr(t,c,n,l)}),c}function Mr(e,t,n,l,i){var a=n._reactRootContainer;if(a){var r=a;if(typeof i=="function"){var s=i;i=function(){var c=yr(r);s.call(c)}}Rr(t,r,e,i)}else r=Cb(n,t,e,i,l);return yr(r)}hm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=di(t.pendingLanes);n!==0&&(ec(t,n|1),st(t,Ne()),!(ue&6)&&(Il=Ne()+500,Tn()))}break;case 13:Wn(function(){var l=en(e,1);if(l!==null){var i=Ze();Vt(l,e,1,i)}}),Vc(e,1)}};tc=function(e){if(e.tag===13){var t=en(e,134217728);if(t!==null){var n=Ze();Vt(t,e,134217728,n)}Vc(e,134217728)}};_m=function(e){if(e.tag===13){var t=_n(e),n=en(e,t);if(n!==null){var l=Ze();Vt(n,e,t,l)}Vc(e,t)}};xm=function(){return ye};vm=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};es=function(e,t,n){switch(t){case"input":if(zo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=Tr(l);if(!i)throw Error(G(90));Ju(l),zo(l,i)}}}break;case"textarea":em(e,n);break;case"select":t=n.value,t!=null&&vl(e,!!n.multiple,t,!1)}};om=Dc;sm=Wn;var Sb={usingClientEntryPoint:!1,Events:[Qi,dl,Tr,am,rm,Dc]},li={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lb={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=um(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||wb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{Cr=ha.inject(Lb),jt=ha}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sb;bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ic(t))throw Error(G(200));return vb(e,t,null,n)};bt.createRoot=function(e,t){if(!Ic(e))throw Error(G(299));var n=!1,l="",i=Up;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ac(e,1,!1,null,null,n,!1,l,i),e[Zt]=t.current,Ri(e.nodeType===8?e.parentNode:e),new Rc(t)};bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=um(t),e=e===null?null:e.stateNode,e};bt.flushSync=function(e){return Wn(e)};bt.hydrate=function(e,t,n){if(!Gr(t))throw Error(G(200));return Mr(null,e,t,!0,n)};bt.hydrateRoot=function(e,t,n){if(!Ic(e))throw Error(G(405));var l=n!=null&&n.hydratedSources||null,i=!1,a="",r=Up;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=qp(t,null,e,1,n??null,i,!1,a,r),e[Zt]=t.current,Ri(e),l)for(e=0;e<l.length;e++)n=l[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ir(t)};bt.render=function(e,t,n){if(!Gr(t))throw Error(G(200));return Mr(null,e,t,!1,n)};bt.unmountComponentAtNode=function(e){if(!Gr(e))throw Error(G(40));return e._reactRootContainer?(Wn(function(){Mr(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1};bt.unstable_batchedUpdates=Dc;bt.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!Gr(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Mr(e,t,n,!1,l)};bt.version="18.3.1-next-f1338f8080-20240426";function $p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($p)}catch(e){console.error(e)}}$p(),$u.exports=bt;var kb=$u.exports,ou=kb;jo.createRoot=ou.createRoot,jo.hydrateRoot=ou.hydrateRoot;const _a=[{id:"envy-04237218B0",label:"⭐ Envy - 04237218B0",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237218B0"},modbusSlaveId:1},{id:"envy-04237219C3",label:"Envy - 04237219C3",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237219C3"},modbusSlaveId:2}],Tb=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Dry Contact Reuse",help:"Selects how the inverter's dry contact relay is reused. It can be configured for various control functions such as grid export limitation, smart load control, or dark start.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Dry Contact Reuse",arg:"DryContactReuse",dtype:"enum",description:"",longdescription:"",meanings:{0:"None",1:"Rapid Shutdown (RSD)",2:"Black Start",3:"Smart Load",4:"Non-critical Load"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.DryContactReuse"}]}],section_id:"inverter.basic"},{sectionTitle:"Current Transformer (CT) Settings",subsections:[{title:null,visibility:"advanced",collapsedByDefault:!0,points:[{title:"Meter Measurement Source",help:"The inverter can either read CTs directly, or read a stand-alone electric meter.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Meter Type",arg:"MeterType",dtype:"enum",description:"",longdescription:"",meanings:{0:"Meter",1:"CTs"}}],protocol:{modbus:{address:1,register_type:3,size:1}},command_id:"Modbus.MeterType"}],subsection_id:"measurement-advanced"}],section_id:"inverter.measurement"},{sectionTitle:"PV",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"PV Sell to Grid",help:"You may disable solar power export to the utility grid. This setting supports NEM3 compatibility.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"PV Sell to Grid",arg:"PVSellToGrid",dtype:"bitfield16",description:"",longdescription:"",meanings:{7:"Enable export of PV power to the grid"}}],protocol:{modbus:{address:3,register_type:3,size:1}},command_id:"Modbus.PVSellToGrid"}]}]}],theme_id:"inverter"},{themeName:"Battery",sections:[{sectionTitle:"Battery Scheduling",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Discharge only Control Style",help:"Selects how 'discharge only' is controlled. 'Discharge only' can stop when a voltage limit is reached or when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"DischargeOnlyControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{4:"Enable SOC control (disable for voltage control)"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.DischargeOnlyControlStyle"},{title:"Discharge only Stop Voltage",help:"Sets the battery voltage at which discharge only will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Discharge only Stop Voltage",arg:"DischargeOnlyStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:202,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischargeOnlyStopVoltage"}]}]},{sectionTitle:"Grid Charge",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Grid Charge Control Style",help:"Selects how grid charging is controlled. Charging can follow a time schedule, stop when a voltage limit is reached, or stop when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"GridChargeControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{1:"Charge based on time",2:"Stop charging at voltage limit",3:"Stop charging at SOC limit"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.GridChargeControlStyle"},{title:"Grid Charging Start Voltage",help:"Sets the battery voltage at which grid charging will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Start Voltage",arg:"GridChargingStartVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:158,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStartVoltage"},{title:"Grid Charging Stop Voltage",help:"Sets the maximum battery voltage during grid charging. Once this voltage is reached, the inverter will stop charging from the grid to protect the battery and prevent overvoltage.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Stop Voltage",arg:"GridChargingStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:159,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStopVoltage"}]}]},{sectionTitle:"Battery Base",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Max Charge Current",help:"Instead of using the presets, you may set the charge current directly in amps.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Charge Current (A)",arg:"ChargeCurr",dtype:"Number",description:"",longdescription:"",unit:"A",range:{min:0}}],protocol:{modbus:{address:101,register_type:3,size:1}},command_id:"Modbus.ChargeCurr"},{title:"Battery Voltage Correction",help:"Recalibrate the battery voltage reading.  Enter the actual ground-truth voltage of the battery here.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Battery Voltage Correction",arg:"BatteryVoltageCorrection",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:999,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischgCurr"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Generator Charge Mode",help:"Selects how the generator charges the battery. When enabled, the generator will charge the battery automatically based on voltage or SOC.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Mode",arg:"GenChg",dtype:"enum",description:"",longdescription:"",meanings:{0:"Based on SOC",1:"Based on Voltage"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.GenChg"},{title:"Generator Charge Start Voltage",help:"Sets the battery voltage at which the generator begins charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Start Voltage",arg:"GenChgStartVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:194,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgStartVolt"},{title:"Generator Charge End Voltage",help:"Sets the battery voltage at which the generator stops charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge End Voltage",arg:"GenChgEndVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:195,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgEndVolt"}]}]}]}],Db={themes:Tb},Eb=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"System Time",help:"Date and time the inverter will use to run schedules",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Year",arg:"Year",dtype:"Number",description:"",longdescription:"",range:{min:0,max:99},telemetry:{model:"40104",block:"fixed",point:"Year"}},{name:"Mon",arg:"Mon",dtype:"Number",description:"",longdescription:"",range:{min:1,max:12},telemetry:{model:"40104",block:"fixed",point:"Month"}},{name:"Day",arg:"Day",dtype:"Number",description:"",longdescription:"",range:{min:1,max:31},telemetry:{model:"40104",block:"fixed",point:"Day"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"Hour"}},{name:"Min",arg:"Min",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Minute"}},{name:"Sec",arg:"Sec",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Second"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"SystemTime"}},command_id:"Basic.SystemTime",widget:"datetime"},{title:"Grid Interaction",help:"Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Off-grid",1:"Grid-tied"},friendly_meanings:{0:"Off-Grid.  There is no available power grid",1:"Grid-Tied. Grid power is available."},telemetry:{model:"40104",block:"fixed",point:"OperatingMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"OperatingMode"}},command_id:"Basic.OperatingMode"},{title:"Operating Mode",help:"Select how solar power is prioritized. Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed). Export first: PV powers the home, then exports to grid, and charges the battery last. Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed). If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Self used mode",1:"Feed-in priority mode",2:"Back-up mode"},friendly_meanings:{0:"Self-consumption",1:"Export first",2:"Backup power"},telemetry:{model:"40104",block:"fixed",point:"WorkMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"WorkMode"}},command_id:"Basic.WorkMode"},{title:"Ignore Grid-Loss Warning",help:"When enabled, the inverter will not treat the absence of grid power as an alarm. Use this mode for permanently off-grid systems where grid connection is unavailable.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid-Loss Behavior",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Treat as Alarm",1:"Ignore (Off-Grid Mode)"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"GridLossWarningClear"}},command_id:"Basic.GridLossWarningClear"},{title:"Power Status",help:"Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"Other"},friendly_meanings:{0:"Standby",1:"Running"},telemetry:{model:"40104",block:"fixed",point:"PowerControl"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerStatus"}},command_id:"Basic.PowerStatus"},{title:"Reset to Factory Defaults",help:"Restores all inverter configuration parameters to their original factory values. Use with caution â€” this cannot be undone.",element_type:"service",access:"INVOKE",readOnly:!1,entries:[],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"AllToDefault"}},command_id:"Basic.AllToDefault",invokeButtonText:"Reset Now"},{title:"Inverter Power Control",help:`Turns the inverter output on or off.\r
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
`,element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Voltage Ride-Through Windows",arg:"VoltageRideThrough",dtype:"String",description:"Derived from Grid Protection voltage limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Frequency Ride-Through Windows",arg:"FrequencyRideThrough",dtype:"String",description:"Derived from Grid Protection frequency limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Volt-VAR Profile",arg:"VoltVarProfile",dtype:"String",description:"Captures the active Volt-VAR curve (e.g., UL 1741 SA default profile).",longdescription:""},{name:"Freq-Watt Profile",arg:"FreqWattProfile",dtype:"String",description:"Captures the active droop coefficients applied to frequency-active power response.",longdescription:""}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Reports",Element:"ULComplianceReport"}},command_id:"CGI.ULComplianceReport",widget:"ul-compliance-report",showInvokeButton:!1,showHistory:!1,showRefresh:!1,showSetButton:!1}]}]},{sectionTitle:"Grid Protection",subsections:[{title:"Grid Protection Parameters",visibility:"default",collapsedByDefault:!0,points:[{title:"Grid Voltage Limits (Stage 1)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1"}},command_id:"GridProtection.GridVoltLimit1"},{title:"Grid Voltage Limits (Stage 2)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2"}},command_id:"GridProtection.GridVoltLimit2"},{title:"Grid Voltage Limits (Stage 3)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3"}},command_id:"GridProtection.GridVoltLimit3"},{title:"Grid Frequency Limits (Stage 1)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1"}},command_id:"GridProtection.GridFreqLimit1"},{title:"Grid Frequency Limits (Stage 2)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2"}},command_id:"GridProtection.GridFreqLimit2"},{title:"Grid Frequency Limits (Stage 3)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3"}},command_id:"GridProtection.GridFreqLimit3"},{title:"Grid Voltage Trip Time",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1Time"}},command_id:"GridProtection.GridVoltLimit1Time"},{title:"Grid Voltage Trip Time (Stage 2)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2Time"}},command_id:"GridProtection.GridVoltLimit2Time"},{title:"Grid Voltage Trip Time (Stage 3)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3Time"}},command_id:"GridProtection.GridVoltLimit3Time"},{title:"Grid Frequency Trip Time (Stage 1)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1Time"}},command_id:"GridProtection.GridFreqLimit1Time"},{title:"Grid Frequency Trip Time (Stage 2)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2Time"}},command_id:"GridProtection.GridFreqLimit2Time"},{title:"Grid Frequency Trip Time (Stage 3)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3Time"}},command_id:"GridProtection.GridFreqLimit3Time"}]}]},{sectionTitle:"Grid Connection",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Permit to Operate",help:"Shows whether the inverter is permitted to operate in grid-connected mode.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Permit Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not Permitted",1:"Permitted"},telemetry:{model:"40104",block:"fixed",point:"PermitServiceStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"PermitServiceStatus"}},command_id:"GridConnection.PermitServiceStatus"},{title:"Ramp Rate",help:"How quickly inverter output is allowed to increase.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Ramp Rate (%/sec)",arg:"Rate",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"RampRate"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"RampRate"}},command_id:"GridConnection.RampRate"},{title:"Applicable Grid Voltage Range",help:"Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Vac)",arg:"ApplicableVoltageLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageLow"}},{name:"Upper Limit (Vac)",arg:"ApplicableVoltageHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableVoltage"}},command_id:"GridConnection.ApplicableVoltage"},{title:"Applicable Grid Frequency Range",help:"Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Hz)",arg:"ApplicableFrequencyLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyLow"}},{name:"Upper Limit (Hz)",arg:"ApplicableFrequencyHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableFrequency"}},command_id:"GridConnection.ApplicableFrequency"},{title:"Connection Delay Times",help:"Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Connection Delay (s)",arg:"ConnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConnectionDelayTime"}},{name:"Reconnection Delay (s)",arg:"ReconnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReconnectionDelayTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"DelayTime"}},command_id:"GridConnection.DelayTime"}]}]},{sectionTitle:"Grid Support",subsections:[{title:"Constant Power Factor",visibility:"default",collapsedByDefault:!0,points:[{title:"Power Factor Mode",help:"Shows whether constant power-factor control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive â€” No PF control",1:"Active â€” Constant PF"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactorModeStatus"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactorModeStatus"},{title:"Power Factor Setpoint",help:"The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorExcited"}},{name:"Power Factor (PF)",arg:"PowerFactor",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactor"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactor"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactor"}]},{title:"Constant Reactive Power",visibility:"default",collapsedByDefault:!0,points:[{title:"Reactive Power Mode",help:"Shows whether constant reactive-power control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeExcited"}},{name:"Status",arg:"Status",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no reactive power control",1:"Active - reactive power control"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ConstantReactivePowerModeStatus"}},command_id:"ConstantReactivePowerMode.ConstantReactivePowerModeStatus"},{title:"Reactive Power Setpoint",help:"Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Reactive Power (%)",arg:"Power",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReactivePowerPercentCMD"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ReactivePowerPercentCMD"}},command_id:"ConstantReactivePowerMode.ReactivePowerPercentCMD"}]},{title:"Volt-VAR (Voltage-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-VAR Mode",help:"Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-VAR control",1:"Active - Volt-VAR control"},telemetry:{model:"40104",block:"fixed",point:"VoltageReactivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VoltageReactivePowerMode"}},command_id:"VoltageReactivePowerMode.VoltageReactivePowerMode"},{title:"Autonomous Vref Adjustment",help:"Indicates whether the inverter autonomously adjusts its reference voltage (Vref).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Autonomous Adjustment",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"AutonomousVrefAdjustment"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"AutonomousVrefAdjustment"}},command_id:"VoltageReactivePowerMode.AutonomousVrefAdjustment"},{title:"Reference Voltage (Vref)",help:"Voltage reference used for Volt-VAR calculations.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Vref",arg:"Verf",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Verf"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Verf"}},command_id:"VoltageReactivePowerMode.Verf"},{title:"Vref Adjustment Time Constant",help:"Time constant applied when adjusting Vref.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Time Constant",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VrefAdjustmentTimeConstant"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VrefAdjustmentTimeConstant"}},command_id:"VoltageReactivePowerMode.VrefAdjustmentTimeConstant"},{title:"Volt-VAR Voltage Breakpoints",help:"Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"V1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV1"}},{name:"V2 (Voltage Point 2)",arg:"V2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV2"}},{name:"V3 (Voltage Point 3)",arg:"V3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV3"}},{name:"V4 (Voltage Point 4)",arg:"V4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"UnderOverVoltage"}},command_id:"VoltageReactivePowerMode.UnderOverVoltage"},{title:"Reactive Power Setpoint Q1",help:"Reactive power at voltage point V1 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q1 (Reactive Setpoint 1)",arg:"Q1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q1"}},command_id:"VoltageReactivePowerMode.Q1"},{title:"Reactive Power Setpoint Q2",help:"Reactive power at voltage point V2 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q2 (Reactive Setpoint 2)",arg:"Q2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q2"}},command_id:"VoltageReactivePowerMode.Q2"},{title:"Reactive Power Setpoint Q3",help:"Reactive power at voltage point V3 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q3 (Reactive Setpoint 3)",arg:"Q3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q3"}},command_id:"VoltageReactivePowerMode.Q3"},{title:"Reactive Power Setpoint Q4",help:"Reactive power at voltage point V4 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q4 (Reactive Setpoint 4)",arg:"Q4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q4"}},command_id:"VoltageReactivePowerMode.Q4"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-VAR changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VqOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageReactivePowerMode.OpenLoopResponseTime"}]},{title:"P-Q Mode (Active-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"P-Q Mode Status",help:"Shows whether Active/Reactive Power (P-Q) control mode is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no P-Q control",1:"Active - P-Q control"},telemetry:{model:"40104",block:"fixed",point:"PQModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"PQModeStatus"}},command_id:"ActivePowerReactivePowerMode.PQModeStatus"},{title:"P-Q Curve Points",help:"Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P1 Setpoint",arg:"P1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP1"}},{name:"P2 Setpoint",arg:"P2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP2"}},{name:"P3 Setpoint",arg:"P3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"P_QP"}},command_id:"ActivePowerReactivePowerMode.P_QP"}]},{title:"Volt-Watt (Voltage-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-Watt Mode",help:"Shows whether Volt-Watt (voltage-active power) control is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-Watt control",1:"Active - Volt-Watt control"},telemetry:{model:"40104",block:"fixed",point:"VoltageActivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltageActivePowerMode"}},command_id:"VoltageActivePowerMode.VoltageActivePowerMode"},{title:"Volt-Watt Voltage Breakpoints",help:"Voltage points that define the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"VoltWattV1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV1"}},{name:"V2 (Voltage Point 2)",arg:"VoltWattV2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattV"}},command_id:"VoltageActivePowerMode.VoltWattV"},{title:"Volt-Watt Power Setpoint",help:"Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P2 Setpoint",arg:"VoltWattP2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattP2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattP2"}},command_id:"VoltageActivePowerMode.VoltWattP2"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-Watt changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"VoltWattOpenLoopResponseTime",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageActivePowerMode.OpenLoopResponseTime"}]},{title:"Freq-Watt (Frequency-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Frequency-Active Power Mode",help:"Indicates whether frequency-power (Freq-Watt) control is currently enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"FrequencyActivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"FrequencyActivePowerModeStatus"}},command_id:"FrequencyActivePowerMode.FrequencyActivePowerModeStatus"},{title:"Open-Loop Response Time",help:"Response time applied to open-loop frequency-power adjustments.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"FreqWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"FrequencyActivePowerMode.OpenLoopResponseTime"},{title:"Over-Frequency Droop: Deadband",help:"Over Frequency Droop dbOF â€” Deadband around nominal frequency before active power reduction begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",unit:"Hz",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_dbOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_dbOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_dbOF"},{title:"Over-Frequency Droop: Gain (k)",help:"Over Frequency Droop kOF â€” Slope (gain k) of active power reduction versus frequency rise above nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_kOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_kOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_kOF"},{title:"Under-Frequency Droop: Deadband",help:"Under Frequency Droop dbUF â€” Deadband around nominal frequency before active power increase/response begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_dbUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_dbUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_dbUF"},{title:"Under-Frequency Droop: Gain (k)",help:"Under Frequency Droop kUF â€” Slope (gain k) of active power response versus frequency drop below nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_kUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_kUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_kUF"}]}]}]},{themeName:"Backup Power",sections:[{sectionTitle:"Backup Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Off-Grid Output",help:"Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"OffGridOutput"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"OffGridOutput"}},command_id:"BackupPower.OffGridOutput"},{title:"Backup (EPS) Output Voltage",help:"Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage (Vac)",arg:"Voltage",dtype:"enum",description:"",longdescription:"",unit:"Vac",meanings:{0:"208",1:"220",2:"230",3:"240",4:"277"},friendly_meanings:{0:"208 V",1:"220 V",2:"230 V",3:"240 V",4:"277 V"},telemetry:{model:"40104",block:"fixed",point:"EPSVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"EPSVoltage"}},command_id:"BackupPower.EPSVoltage"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Port Connection",help:"If using a generator, select which port it's connected to: eeither the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.  In Microgrid Mode, the inverter treats the generator as the primary AC source rather than the utility grid.  When microgrid mode is active, all charging and operating limits come from the Generator settings—not the Grid Charge limits. Remember to install CTs on any power wires attached to the grid port.  This includes a generator that is configured in microgrid mode.  ",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Generator connected to",arg:"Port",dtype:"enum",description:"",longdescription:"",meanings:{0:"GeneratorPort",1:"GridPort"},friendly_meanings:{0:"GEN port. Also pick this option if you are not using generator.",1:"Grid port - also called microgrid mode"},telemetry:{model:"40104",block:"fixed",point:"LinkedPort"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"LinkedPort"}},command_id:"Generator.LinkedPort"},{title:"Battery Charge Current Limit",help:"Sets the maximum DC current the inverter will send to the battery when charging from the generator.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Charge Current (Adc)",arg:"Current",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"BatteryChargeCurrentLimit"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"BatteryChargeCurrentLimit"}},command_id:"Generator.BatteryChargeCurrentLimit"},{title:"Generator Rated Power",help:"Specify the generator's continuous rated output power.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Rated Power (kW)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"GeneratorRatedPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorRatedPower"}},command_id:"Generator.GeneratorRatedPower"},{title:"Generator Cool-Down Time",help:"Sets the time the generator continues running after charging stops to allow for safe cooling.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Cool-Down Time (min)",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GeneratorCoolDownTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorCoolDownTime"}},command_id:"Generator.GeneratorCoolDownTime"},{title:"Generator Start/Stop SOC",help:"Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"Generator starts when battery drops to this level",longdescription:"",unit:"%",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socGenStart"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"Generator stops when battery charges to this level",longdescription:"",unit:"%",range:{min:5,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socGenEnd"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorSOC"}},command_id:"Generator.GeneratorSOC"},{title:"Generator Contactor Status",help:"Indicates the current state of the generator control contactor.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Contactor State",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"OFF",1:"ON"},friendly_meanings:{0:"Closed / On",1:"Open / Off"},telemetry:{model:"40101",block:"fixed",point:"genDryContactState"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GenDryContact"}},command_id:"Generator.GenDryContact"},{title:"Battery Quick Charge with Generator",help:"Start the generator to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Stop quick charge",1:"Start quick charge"},telemetry:{model:"40104",block:"fixed",point:"StartGeneratorExercise"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"StartGeneratorExercise"}},command_id:"Generator.StartGeneratorExercise"},{title:"Generator Boost",help:"Enables dynamic adjustment of generator charging power for faster battery recovery when needed.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"GeneratorBoost"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorBoost"}},command_id:"Generator.GeneratorBoost"}]},{title:"Generator Exercise",visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Exercise Schedule",help:"Configure a recurring schedule for generator exercise runs. Select the day of the week and time when the generator should run automatically.",element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Day of Week",arg:"DayOfWeek",dtype:"enum",description:"",longdescription:"",meanings:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23}},{name:"Minute",arg:"Minute",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59}}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Plan",Element:"GeneratorExercise"}},command_id:"CGI.GeneratorExercise",widget:"generator-exercise",showRefresh:!0,showSetButton:!0}]}]}]},{themeName:"AC Coupled PV",sections:[{sectionTitle:"AC Coupled PV",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"AC Coupled PV",help:"Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"AC Coupled PV Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"ACCoupledPV"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCoupledPV"}},command_id:"ACCoupledPV.ACCoupledPV"},{title:"AC Coupled PV Start/Stop SOC",help:"Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"AC Coupled PV begins charging when SOC drops to this level",longdescription:"",unit:"%",range:{min:0,max:100},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOn"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"AC Coupled PV stops charging when SOC reaches this level",longdescription:"",unit:"%",range:{min:0,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOff"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCouplePVSOC"}},command_id:"ACCoupledPV.ACCouplePVSOC"}]}]}]},{themeName:"Smart Load",sections:[{sectionTitle:"Smart Load",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Use Smart Load",help:"Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disabled",1:"Enabled"},telemetry:{model:"40104",block:"fixed",point:"SmartLoad"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoad"}},command_id:"LoadShedding.SmartLoad"},{title:"Smart Load On-Grid Behavior",help:"Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"On-Grid Always-On Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Follow normal rules",1:"Always On When Grid Present"},telemetry:{model:"40104",block:"fixed",point:"OnGridAlwaysOn"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"OnGridAlwaysOn"}},command_id:"LoadShedding.OnGridAlwaysOn"},{title:"Smart Load Start Power",help:"Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"PV Power Above (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"StartPVPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"StartPVPower"}},command_id:"LoadShedding.StartPVPower"},{title:"Smart Load SOC Limits",help:"Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start When Battery SOC Is Above (%)",arg:"OnSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},less_than:"OffSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOnSoc"}},{name:"Stop When Battery SOC Is Below (%)",arg:"OffSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},greater_than:"OnSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoadSOC"}},command_id:"LoadShedding.SmartLoadSOC"}]}]}]}],Pb={themes:Eb};function Nb(e,t){const n=[],l=new Map;return t.themes.forEach(i=>{const a=i.themeName||i.theme_id||"",r={...i,sections:i.sections.map(s=>({...s,subsections:[...s.subsections]}))};l.set(a,r),n.push(r)}),e.themes.forEach(i=>{const a=i.themeName||i.theme_id||"";let r=l.get(a);if(!r){r={...i,sections:i.sections.map(s=>({...s,subsections:[...s.subsections]}))},l.set(a,r),n.push(r);return}i.sections.forEach(s=>{const c=s.section_id||s.sectionTitle||"";let d=r.sections.find(u=>(u.section_id||u.sectionTitle)===c);d?d.subsections.push(...s.subsections):r.sections.push({...s,subsections:[...s.subsections]})})}),{themes:n}}const Ab=Nb(Db,Pb),Si=new Map,Vb="1.0.0",Br=100,Or=e=>new Promise(t=>setTimeout(t,e));function Rb(e,t,n){var l,i;if(e.value!==void 0)return e.dtype==="Number"&&e.value!==""?Number(e.value):e.value;switch(e.dtype){case"Number":{const a=e.range;if(!a)return 0;const r=a.max-a.min;return e.less_than?Math.round(a.min+r*.3):e.greater_than?Math.round(a.min+r*.7):e.arg==="Year"?new Date().getFullYear()%100:e.arg==="Mon"?new Date().getMonth()+1:e.arg==="Day"?new Date().getDate():e.arg==="Hour"?new Date().getHours():e.arg==="Min"?new Date().getMinutes():e.arg==="Sec"?new Date().getSeconds():Math.round(a.min+r*.5)}case"enum":{const a=Object.keys(e.meanings??{})[0];return a?((l=e.friendly_meanings)==null?void 0:l[a])??((i=e.meanings)==null?void 0:i[a])??"":""}case"String":return e.arg==="Name"?"Inverter 1":"";default:if(e.dtype&&e.dtype.startsWith("bitfield")){const a={};return e.meanings&&Object.keys(e.meanings).forEach(r=>{a[r]=Math.random()>.7}),a}return""}}function Ib(e){const t={};return e.widget==="generator-exercise"?e.entries.forEach(n=>{t[n.arg]=""}):e.entries.forEach((n,l)=>{t[n.arg]=Rb(n,l,e.entries)}),{pointId:e.command_id,entries:t,lastRead:new Date().toISOString(),success:!0}}function Gb(e){e.themes.forEach(t=>{t.sections.forEach(n=>{n.subsections.forEach(l=>{l.points.forEach(i=>{Si.has(i.command_id)||Si.set(i.command_id,Ib(i))})})})})}async function Mb(e={}){await Or(Br);const t=[{pageName:"Inverter Configuration",themes:Ab.themes}];t.forEach(l=>Gb(l));let n=t;return e.pageId&&(n=t.filter(l=>l.pageName.toLowerCase().replace(/\s+/g,"-")===e.pageId)),{pages:n,lastModified:new Date().toISOString(),version:Vb}}async function Bb(e){return await Or(Br),{isOnline:!0,timestamp:new Date().toISOString()}}async function Ob(e){return await Or(Br),{items:[{gateway_sn:"GW001234567890",equipments:[{id:"envy-04237218B0",sn:"04237218B0",md:"FP-ENVY-Inverter",md_name:"Fortress Power ENVY Inverter",site_id:e.site_id,is_primary:!0,product_type:"Inverter",sub_product_type:"Hybrid",software_version:"1.2.3",arm_sub_product_type:"ARM-V1",arm_software_version:"1.2.3",dsp_sub_product_type:"DSP-V1",dsp_software_version:"2.3.4",firmwares:[{name:"ARM",version:"1.2.3"},{name:"DSP",version:"2.3.4"}]}]},{gateway_sn:"GW002234567890",equipments:[{id:"envy-04237219C3",sn:"04237219C3",md:"FP-ENVY-Inverter",md_name:"Fortress Power ENVY Inverter",site_id:e.site_id,is_primary:!1,product_type:"Inverter",sub_product_type:"Hybrid",software_version:"1.2.3",arm_sub_product_type:"ARM-V1",arm_software_version:"1.2.3",dsp_sub_product_type:"DSP-V1",dsp_software_version:"2.3.4",firmwares:[{name:"ARM",version:"1.2.3"},{name:"DSP",version:"2.3.4"}]}]}],success:!0,message:"Equipment retrieved successfully",request_id:e.request_id,code:200}}async function xa(e){var t,n,l;await Or(Br);try{const{payload:i}=e;if(!i||!i.method)return{success:!1,error:"Invalid payload: missing method",timestamp:new Date().toISOString()};switch(i.method){case"Read":{const a=(t=i.data)==null?void 0:t.Elements;if(!a||a.length===0)return{success:!1,error:"No elements specified for read operation",timestamp:new Date().toISOString()};const r=a[0],s=`${r.Cluster}.${r.Element}`;return{success:!0,data:Si.get(s)||{entries:{}},timestamp:new Date().toISOString()}}case"Write":{const a=(n=i.data)==null?void 0:n.Elements;if(!a||a.length===0)return{success:!1,error:"No elements specified for write operation",timestamp:new Date().toISOString()};const r=a[0],s=`${r.Cluster}.${r.Element}`;let c=Si.get(s);return c&&(c={...c,entries:{...c.entries,...r.arguments},lastRead:new Date().toISOString()},Si.set(s,c)),{success:!0,data:c,timestamp:new Date().toISOString()}}case"Invoke":{const a=(l=i.data)==null?void 0:l.Elements;return!a||a.length===0?{success:!1,error:"No elements specified for invoke operation",timestamp:new Date().toISOString()}:{success:!0,data:{status:"Command executed successfully"},timestamp:new Date().toISOString()}}default:return{success:!1,error:`Unknown method: ${i.method}`,timestamp:new Date().toISOString()}}}catch(i){return{success:!1,error:i instanceof Error?i.message:"Unknown error",timestamp:new Date().toISOString()}}}function su(e,t){if(!e.protocol)throw new Error(`Point ${e.command_id} has no protocol definition`);if(e.protocol.matter)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.cgi)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:[{MEP:e.protocol.cgi.MEP,Cluster:e.protocol.cgi.Cluster,Element:e.protocol.cgi.Element}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.modbus){const l=e.protocol.modbus.register_type===3?3:4;return{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Read",timeout:5,data:{type:"RTU",uartPort:1,slaveId:1,address:e.protocol.modbus.address,function:l,registerNumber:e.protocol.modbus.size}}}throw new Error(`Unsupported protocol for point ${e.command_id}`)}function jb(e,t,n){var l;if(!e.protocol)throw new Error(`Point ${e.command_id} has no protocol definition`);if(e.protocol.matter){const i=e.element_type==="Service"||e.access==="Invoke"?"Invoke":"Write";return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:i,data:{Elements:[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}}}else if(e.protocol.cgi){const i=e.element_type==="Service"||e.access==="Invoke"||e.element_type==="custom"?"Invoke":"Write";return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:i,data:{Elements:[{MEP:e.protocol.cgi.MEP,Cluster:e.protocol.cgi.Cluster,Element:e.protocol.cgi.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}}}else if(e.protocol.modbus){const i=e.protocol.modbus.size>1?16:6,a=(l=e.entries[0])==null?void 0:l.arg;let r=a?n[a]:0;return typeof r=="number"?r=Math.round(r):typeof r=="string"&&(r=parseInt(r,10)||0),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:1,address:e.protocol.modbus.address,function:i,value:r}}}throw new Error(`Unsupported protocol for point ${e.command_id}`)}function Fb(e,t,n){var l;if(!e.protocol)throw new Error(`Point ${e.command_id} has no protocol definition`);if(e.protocol.matter)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Invoke",data:{Elements:[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.cgi)return{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Invoke",data:{Elements:[{MEP:e.protocol.cgi.MEP,Cluster:e.protocol.cgi.Cluster,Element:e.protocol.cgi.Element,arguments:n}],thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:t}}};if(e.protocol.modbus){const i=e.protocol.modbus.size>1?16:6,a=(l=e.entries[0])==null?void 0:l.arg;let r=a&&n?n[a]:0;return typeof r=="number"?r=Math.round(r):typeof r=="string"&&(r=parseInt(r,10)||0),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:1,address:e.protocol.modbus.address,function:i,value:r}}}throw new Error(`Unsupported protocol for point ${e.command_id}`)}function qb(e){const[t,n]=F.useState([]),[l,i]=F.useState({}),[a,r]=F.useState(!0),[s,c]=F.useState(null),[d,u]=F.useState(null),[m,f]=F.useState(null);return F.useEffect(()=>{(async()=>{try{r(!0),c(null);const x=await Mb({equipmentId:e}),b=x.pages.map((g,y)=>({id:g.pageName.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),label:g.pageName,filename:`page-${y}.json`,data:g})),_=b.reduce((g,y)=>(g[y.id]=y.data,g),{});n(b),i(_),u(x.version),f(x.lastModified)}catch(x){console.error("Error loading site configuration:",x),c(x instanceof Error?x.message:"Failed to load site configuration")}finally{r(!1)}})()},[e]),{pageRegistry:t,pageLookup:l,isLoading:a,loadError:s,configVersion:d,lastModified:m}}function Ub(){const[e,t]=F.useState("");return F.useEffect(()=>{const n=()=>{const l=document.querySelectorAll('[id^="theme-"]');let i="";l.forEach(a=>{const r=a.getBoundingClientRect();r.top<=window.innerHeight*.3&&r.bottom>0&&(i=a.id)}),i&&i!==e&&t(i)};return n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[e]),e}function $b(){const[e,t]=F.useState(""),n=F.useCallback((l,i)=>{var r,s,c,d;if(!i.trim())return{matches:!0,helpTextMatch:!1};const a=i.toLowerCase();if((r=l.title)!=null&&r.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1};if((s=l.help)!=null&&s.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!0};for(const u of l.entries){if((c=u.name)!=null&&c.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1};if(u.friendly_meanings){for(const m of Object.values(u.friendly_meanings))if(m.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1}}if((d=u.description)!=null&&d.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1}}return{matches:!1,helpTextMatch:!1}},[]);return{searchQuery:e,setSearchQuery:t,pointMatchesSearch:n}}function mi(){const[e,t]=F.useState(!1),[n,l]=F.useState(null),i=F.useCallback(s=>{s!==void 0&&l(s),t(!0)},[]),a=F.useCallback(()=>{t(!1)},[]),r=F.useCallback(()=>{t(s=>!s)},[]);return{isOpen:e,data:n,open:i,close:a,toggle:r,setData:l}}function Wp(e=1){const[t,n]=F.useState(new Map),[l,i]=F.useState(!0),[a,r]=F.useState(null);return F.useEffect(()=>{(async()=>{try{i(!0),r(null);const m=await Ob({site_id:e,request_id:`req-${Date.now()}`});if(!m.success){r(m.message);return}const f=new Map;m.items.forEach(p=>{p.equipments.forEach(x=>{f.set(x.sn,{equipment:x,gatewaySn:p.gateway_sn})})}),n(f)}catch(m){console.error("Error fetching equipment mappings:",m),r(m instanceof Error?m.message:"Failed to fetch equipment mappings")}finally{i(!1)}})()},[e]),{mappings:t,isLoading:l,error:a,getMapping:u=>t.get(u),getGatewaySn:u=>{var m;return(m=t.get(u))==null?void 0:m.gatewaySn},isPrimary:u=>{var m;return((m=t.get(u))==null?void 0:m.equipment.is_primary)??!1}}}const cu={isOnline:null,statusTimestamp:null,error:null,isLoading:!1};function Wb(e){const[{isOnline:t,statusTimestamp:n,error:l,isLoading:i},a]=F.useState(cu),[r,s]=F.useState(0),c=F.useCallback(()=>{s(d=>d+1)},[]);return F.useEffect(()=>{if(!e){a(cu);return}let d=!1;return(async()=>{a(m=>({...m,isLoading:!0,error:null}));try{const m=await Bb({gatewaySn:e});if(d)return;a({isOnline:m.isOnline,statusTimestamp:m.timestamp,error:null,isLoading:!1})}catch(m){if(d)return;a({isOnline:null,statusTimestamp:null,error:m instanceof Error?m.message:"Failed to fetch gateway status",isLoading:!1})}})(),()=>{d=!0}},[e,r]),{isOnline:t,statusTimestamp:n,error:l,isLoading:i,refresh:c}}function Hb({themes:e,activeSection:t,selectedEquipmentId:n,onEquipmentChange:l,equipmentOptions:i}){return o.jsxs("aside",{className:"w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-[11px] text-slate-500 uppercase font-medium mb-1 block",children:"Equipment"}),o.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800",value:n,onChange:a=>l(a.target.value),children:i.map(a=>o.jsx("option",{value:a.id,children:a.label},a.id))})]}),o.jsxs("nav",{className:"text-sm text-slate-800",children:[o.jsx("div",{className:"text-emerald-600 font-semibold mb-2",children:"Navigation"}),o.jsxs("div",{className:"flex flex-col gap-3",children:[e.map((a,r)=>{const s=`theme-${r}`,c=t===s||t.startsWith(`${s}-section`);return o.jsxs("div",{children:[o.jsxs("div",{className:"relative",children:[c&&o.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r"}),o.jsx("button",{className:`font-semibold text-xs uppercase tracking-wide mb-1 px-2 hover:text-emerald-600 transition-colors w-full text-left ${c?"text-emerald-600":"text-slate-900"}`,onClick:()=>{var d;(d=document.getElementById(s))==null||d.scrollIntoView({behavior:"smooth",block:"start"})},children:a.themeName})]}),o.jsx("ul",{className:"pl-2 flex flex-col gap-1 text-slate-700",children:a.sections.map((d,u)=>{const m=`${s}-section-${u}`,f=t===m;return o.jsxs("li",{className:"relative",children:[f&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),o.jsx("button",{className:`px-2 py-1 hover:bg-slate-50 rounded text-xs w-full text-left transition-colors ${f?"text-blue-600 font-medium bg-blue-50":"text-slate-700"}`,onClick:()=>{var p;(p=document.getElementById(m))==null||p.scrollIntoView({behavior:"smooth",block:"start"})},children:d.sectionTitle})]},`${d.sectionTitle}-${u}`)})})]},`${a.themeName}-${r}`)}),!e.length&&o.jsx("div",{className:"text-xs text-slate-500",children:"No themes defined."})]})]})]})}function zb({searchQuery:e,onSearchChange:t,lastUpdatedLabel:n,onRefresh:l,gatewayStatus:i}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-xs text-slate-500",children:["Last Updated At: ",n]}),o.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6",children:[o.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[o.jsx("div",{className:"text-xl font-semibold text-slate-900 leading-tight",children:"Site Configuration"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("div",{className:"relative flex-1 max-w-md",children:[o.jsx("input",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800",placeholder:"Search…",value:e,onChange:a=>t(a.target.value)}),e&&o.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",onClick:()=>t(""),title:"Clear search",children:"✕"})]}),o.jsxs("button",{className:"text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1",onClick:l,children:[o.jsx("span",{children:"⟳"}),o.jsx("span",{children:"Refresh"})]})]})]}),o.jsx(Kb,{status:i})]})]})}function Kb({status:e}){const t=(e==null?void 0:e.isOnline)??null,n=(e==null?void 0:e.isLoading)??!1,l=n?"bg-amber-400 animate-pulse":t===!0?"bg-green-500":t===!1?"bg-red-500":"bg-slate-300";let i="Unknown";return n?i="Checking…":t===!0?i="Online":t===!1&&(i="Offline"),o.jsxs("div",{className:"flex flex-col items-end gap-1 text-right self-start min-w-[180px]",children:[o.jsx("div",{className:"text-[11px] uppercase tracking-wide text-slate-500",children:"Gateway Status"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:`h-3 w-3 rounded-full border border-slate-300 ${l}`,"aria-label":`Gateway ${i}`,role:"status"}),o.jsx("span",{className:"text-sm font-semibold text-slate-900",children:i})]}),(e==null?void 0:e.gatewaySn)&&o.jsxs("div",{className:"text-xs text-slate-500 leading-tight",children:["SN: ",e.gatewaySn]}),!n&&(e==null?void 0:e.error)&&o.jsx("div",{className:"text-xs text-red-500 leading-tight",children:e.error}),(e==null?void 0:e.lastChecked)&&!n&&o.jsxs("div",{className:"text-[11px] text-slate-400",children:["Checked ",new Date(e.lastChecked).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}function Qb(e){const t={};if(e.widget==="generator-exercise")return e.entries.forEach(i=>{i.dtype,t[i.arg]=""}),t;const n=e.entries.filter(i=>i.dtype==="Number"&&i.range!==void 0),l=n.length>=2;return e.entries.forEach((i,a)=>{var r,s;if(i.value!==void 0){t[i.arg]=i.dtype==="Number"&&i.value!==""?Number(i.value):i.value;return}if(i.dtype==="Number"){const c=i.range;if(!c){t[i.arg]=0;return}if(l){const d=c.max-c.min,u=a/Math.max(n.length-1,1);i.less_than?t[i.arg]=Math.round(c.min+d*.3):i.greater_than?t[i.arg]=Math.round(c.min+d*.7):t[i.arg]=Math.round(c.min+d*u)}else t[i.arg]=c.min;return}if(i.dtype==="enum"){const c=Object.keys(i.meanings??{})[0];if(c){const d=((r=i.friendly_meanings)==null?void 0:r[c])??((s=i.meanings)==null?void 0:s[c])??"";t[i.arg]=d}else t[i.arg]="";return}if(i.dtype&&i.dtype.startsWith("bitfield")){const c={};i.meanings&&Object.keys(i.meanings).forEach(d=>{c[d]=!1}),t[i.arg]=c;return}t[i.arg]=""}),t}function Yb(e,t){const{getGatewaySn:n,isPrimary:l,isLoading:i}=Wp(),[a,r]=F.useState(Qb(e)),[s,c]=F.useState(!1),[d,u]=F.useState(null),[m,f]=F.useState(null);F.useEffect(()=>{if(i)return;(async()=>{if(!(((typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service")&&e.showRefresh!==!0))try{c(!0),u(null);const v=t.thingId.SN,L=n(v)||"GW001234567890",T=su(e,t.id),C=await xa({gatewaySn:L,payload:T});if(C.success&&C.data){const S=C.data;S.success?(r(S.entries),f(S.lastRead)):u(S.error||"Failed to read point")}else u(C.error||"Failed to read point")}catch(v){console.error("Error fetching initial value:",v),u(v instanceof Error?v.message:"Failed to fetch initial value")}finally{c(!1)}})()},[e.command_id,t.id,i]);const p=F.useCallback((g,y)=>{r(h=>({...h,[g]:y}))},[]),x=F.useCallback(async()=>{try{c(!0),u(null);const g=t.thingId.SN,y=n(g)||"GW001234567890",h=su(e,t.id),v=await xa({gatewaySn:y,payload:h});if(v.success&&v.data){const L=v.data;return L.success?(r(L.entries),f(L.lastRead),{success:!0,payload:h,gatewaySn:y}):(u(L.error||"Failed to read point"),{success:!1,error:L.error})}else return u(v.error||"Failed to read point"),{success:!1,error:v.error}}catch(g){const y=g instanceof Error?g.message:"Failed to refresh";return u(y),{success:!1,error:y}}finally{c(!1)}},[e.command_id,t.id]),b=F.useCallback(async()=>{var g;try{c(!0),u(null);const y=t.thingId.SN,h=((g=e.protocol)==null?void 0:g.modbus)!==void 0,v=!l(y);if(h&&v){const B="Writing to Modbus commands on non-primary inverters is not currently supported";return u(B),{success:!1,error:B}}const L={...a};e.entries.forEach(B=>{if(B.dtype!=="enum"||!B.meanings)return;const O=L[B.arg];if(O==null||O==="")return;const Y=Object.entries(B.meanings).find(([N,q])=>{var I;const le=((I=B.friendly_meanings)==null?void 0:I[N])??q;return O===le||O===q});Y&&(L[B.arg]=Y[1])});const T=n(y)||"GW001234567890",C=jb(e,t.id,L),S=await xa({gatewaySn:T,payload:C});if(S.success){if(S.data){const B=S.data;B.entries&&(r(B.entries),f(B.lastRead))}return{success:!0,payload:C,gatewaySn:T}}else return u(S.error||"Failed to write point"),{success:!1,error:S.error}}catch(y){const h=y instanceof Error?y.message:"Failed to write";return u(h),{success:!1,error:h}}finally{c(!1)}},[e.command_id,t.id,a]),_=F.useCallback(async()=>{try{c(!0),u(null);const g=t.thingId.SN,y=n(g)||"GW001234567890",h={...a};e.entries.forEach(T=>{if(T.dtype!=="enum"||!T.meanings)return;const C=h[T.arg];if(C==null||C==="")return;const S=Object.entries(T.meanings).find(([B,O])=>{var N;const Y=((N=T.friendly_meanings)==null?void 0:N[B])??O;return C===Y||C===O});S&&(h[T.arg]=S[1])});const v=Fb(e,t.id,h),L=await xa({gatewaySn:y,payload:v});return L.success?{success:!0,payload:v,result:L.data,gatewaySn:y}:(u(L.error||"Failed to invoke command"),{success:!1,error:L.error})}catch(g){const y=g instanceof Error?g.message:"Failed to invoke";return u(y),{success:!1,error:y}}finally{c(!1)}},[e.command_id,t.id,a]);return{formState:a,setFormState:r,handleFieldChange:p,handleRefresh:x,handleSet:b,handleInvoke:_,isLoading:s||i,error:d,lastRead:m}}const Xb=({onClick:e})=>o.jsx("button",{type:"button",onClick:e,className:"text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer",children:"i"}),Jb=()=>o.jsx("span",{className:"text-base leading-none",children:"⟳"}),Zb=()=>o.jsx("span",{className:"text-base leading-none",children:"🕐"}),eh=()=>o.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-500 border border-slate-300 font-medium",children:"Read Only"});function th({point:e,readOnly:t,helpTextMatch:n=!1,shouldShowHistory:l,shouldShowRefresh:i,shouldShowSetButton:a,setButtonAppearance:r,onHelpClick:s,onHistoryClick:c,onRefreshClick:d,onSetClick:u}){return o.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-3",children:[o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx("div",{className:"text-slate-800 text-sm font-semibold leading-tight",children:e.title}),e.help&&o.jsxs("div",{className:"mt-0.5 relative",children:[o.jsx(Xb,{onClick:s}),n&&o.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"})]}),t&&o.jsx(eh,{})]}),o.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l&&o.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"View historical data",onClick:c,children:o.jsx(Zb,{})}),i&&o.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"Refresh from device",onClick:d,children:o.jsx(Jb,{})}),a&&o.jsx("button",{className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${r}`,disabled:t,onClick:u,children:"Set"})]})]})}function nh({point:e,formState:t,readOnly:n,onChange:l}){const i=e.entries.find(s=>s.arg==="Sec"),a=()=>{const s=t.Hour??0,c=t.Min??0,d=(t.Year??0)+2e3,u=String(t.Mon??1).padStart(2,"0"),m=String(t.Day??1).padStart(2,"0"),f=String(s).padStart(2,"0"),p=String(c).padStart(2,"0");return`${d}-${u}-${m}T${f}:${p}`},r=s=>{const c=new Date(s),d=c.getHours(),u=c.getMinutes();l("Year",c.getFullYear()-2e3),l("Mon",c.getMonth()+1),l("Day",c.getDate()),l("Hour",d),l("Min",u),i&&l("Sec",0)};return o.jsx("div",{className:"flex flex-col gap-2",children:o.jsx("input",{type:"datetime-local",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:a(),onChange:s=>r(s.target.value)})})}const pi="00:00";function gr({label:e,value:t,readOnly:n,onChange:l,onClear:i}){const a=!n&&t!==pi;return o.jsxs("div",{className:"w-[150px] flex-shrink-0 flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:e}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:t,onChange:r=>l(r.target.value)}),a&&o.jsx("button",{type:"button",className:"absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700",onClick:i,"aria-label":`Clear ${e.toLowerCase()}`,children:"✕"})]})]})}function Hp({point:e,formState:t,readOnly:n,onChange:l}){const i=e.entries.find(b=>b.arg.includes("StartHour")||b.arg.includes("Start_hour")||b.arg.includes("StartTime_h")),a=e.entries.find(b=>b.arg.includes("StartMin")||b.arg.includes("Start_minute")||b.arg.includes("StartTime_m")),r=e.entries.find(b=>b.arg.includes("EndHour")||b.arg.includes("End_hour")||b.arg.includes("EndTime_h")),s=e.entries.find(b=>b.arg.includes("EndMin")||b.arg.includes("End_minute")||b.arg.includes("EndTime_m")),c=()=>{if(i&&a){const b=String(t[i.arg]??0).padStart(2,"0"),_=String(t[a.arg]??0).padStart(2,"0");return`${b}:${_}`}return pi},d=()=>{if(r&&s){const b=String(t[r.arg]??0).padStart(2,"0"),_=String(t[s.arg]??0).padStart(2,"0");return`${b}:${_}`}return pi},u=b=>{const[_,g]=b.split(":"),y=parseInt(_,10),h=parseInt(g,10);i&&a&&(l(i.arg,y),l(a.arg,h))},m=b=>{const[_,g]=b.split(":"),y=parseInt(_,10),h=parseInt(g,10);r&&s&&(l(r.arg,y),l(s.arg,h))},f=()=>{n||(u(pi),m(pi))},p=c(),x=d();return o.jsxs("div",{className:"flex items-end gap-4",children:[o.jsx(gr,{label:"Start Time",value:p,readOnly:n,onChange:u,onClear:f}),o.jsx(gr,{label:"End Time",value:x,readOnly:n,onChange:m,onClear:f})]})}function lh({point:e,formState:t,readOnly:n,onChange:l}){const i=new Map;e.entries.forEach(d=>{const u=d.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);if(!u)return;const[,m,f,p]=u,x=parseInt(f,10);i.has(x)||i.set(x,{id:x});const b=i.get(x),_=p.toLowerCase();m.toLowerCase()==="starttime"?_==="h"?b.startHourArg=d.arg:b.startMinArg=d.arg:_==="h"?b.endHourArg=d.arg:b.endMinArg=d.arg});const a=Array.from(i.values()).sort((d,u)=>d.id-u.id);if(a.length===0)return o.jsx(Hp,{point:e,formState:t,readOnly:n,onChange:l});const r=(d,u)=>{const m=d!==void 0?t[d]:0,f=u!==void 0?t[u]:0,p=typeof m=="number"?m:parseInt(m??0,10)||0,x=typeof f=="number"?f:parseInt(f??0,10)||0;return`${String(p).padStart(2,"0")}:${String(x).padStart(2,"0")}`},s=(d,u,m)=>{const[f,p]=m.split(":"),x=parseInt(f,10),b=parseInt(p,10);u==="start"?(d.startHourArg&&l(d.startHourArg,x),d.startMinArg&&l(d.startMinArg,b)):(d.endHourArg&&l(d.endHourArg,x),d.endMinArg&&l(d.endMinArg,b))},c=d=>{n||(d.startHourArg&&l(d.startHourArg,0),d.startMinArg&&l(d.startMinArg,0),d.endHourArg&&l(d.endHourArg,0),d.endMinArg&&l(d.endMinArg,0))};return o.jsx("div",{className:"flex flex-col gap-4",children:a.map(d=>{const u=r(d.startHourArg,d.startMinArg),m=r(d.endHourArg,d.endMinArg),f=()=>c(d);return o.jsxs("div",{className:"flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3",children:[o.jsxs("div",{className:"text-xs font-semibold uppercase text-slate-600",children:["Grid Charge Window ",d.id]}),o.jsxs("div",{className:"flex items-end gap-4",children:[o.jsx(gr,{label:"Start Time",value:u,readOnly:n,onChange:p=>s(d,"start",p),onClear:f}),o.jsx(gr,{label:"End Time",value:m,readOnly:n,onChange:p=>s(d,"end",p),onClear:f})]})]},d.id)})})}function ih({formState:e,readOnly:t,onChange:n}){const l=e.DayOfWeek!==""?e.DayOfWeek:null,i=e.Hour!==""?e.Hour:null,a=e.Minute!==""?e.Minute:null,r=()=>i===null||a===null?"":`${String(i).padStart(2,"0")}:${String(a).padStart(2,"0")}`,s=u=>{if(!u){n("Hour",""),n("Minute","");return}const[m,f]=u.split(":");n("Hour",parseInt(m,10)),n("Minute",parseInt(f,10))},c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let d="No schedule configured";return l!==null&&i!==null&&a!==null&&(d=`Every ${c[l]} at ${String(i).padStart(2,"0")}:${String(a).padStart(2,"0")}`),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Day of Week"}),o.jsxs("select",{className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:l!==null?l:"",onChange:u=>n("DayOfWeek",u.target.value===""?"":Number(u.target.value)),children:[o.jsx("option",{value:"",children:"Select day..."}),c.map((u,m)=>o.jsx("option",{value:m,children:u},m))]})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Time"}),o.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:r(),onChange:u=>s(u.target.value)})]})]}),o.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-3",children:[o.jsx("div",{className:"text-xs text-slate-600 font-medium mb-1",children:"Schedule Preview"}),o.jsx("div",{className:"text-sm text-slate-800",children:d})]})]})}function ah({point:e,equipment:t,readOnly:n}){const[l,i]=F.useState(!1),[a,r]=F.useState(null),s=F.useMemo(()=>{var d;return(d=e.entries)!=null&&d.length?e.entries.map(u=>{const m=u.name||u.arg,f=u.description||u.longdescription||"Value reported by inverter firmware";return`${m}: ${f}`}):["Voltage Ride-Through Windows: IEEE 1547 Category B","Frequency Ride-Through Windows: IEEE 1547 Category B","Volt-VAR Curve: UL 1741 SA Default Profile","Frequency-Watt Behavior: Droop Enabled, 5% Slope","Anti-Islanding Method: Active (Sandia)"]},[e.entries]),c=()=>{if(!(n||l)){r(null),i(!0);try{const d=new Date,u=d.toISOString().replace(/[:.]/g,"-"),m=d.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),p=["Fortress Power Envy Inverter","UL Compliance Report","This is just a placeholder report for testing purposes.  Dont base the real implementation on this.","".padEnd(20,"="),`Generated: ${m}`,`Device: ${t.label}`,"","Purpose","This report captures the active grid settings configured on the inverter so they can be shared with AHJs, utilities, or inspectors who require UL 1741 / IEEE 1547 conformance evidence.","","Key Grid Parameters",...s.map(g=>`• ${g}`),"","Statements of Compliance","- Grid support functions follow UL 1741 SA requirements for exporting inverters.","- Trip settings align with local utility specifications (for example, California Rule 21, Puerto Rico LUMA).","- Anti-islanding protections remain enabled and tested per UL procedures.","","Notes","This summary reflects the values active on the device at the time of export. Re-run the report after making configuration changes to maintain an auditable paper trail."].join(`
`),x=new Blob([p],{type:"text/plain"}),b=URL.createObjectURL(x),_=document.createElement("a");_.href=b,_.download=`ul-compliance-${t.id}-${u}.txt`,_.click(),URL.revokeObjectURL(b)}catch(d){console.error("Failed to generate UL Compliance report",d),r("Unable to generate the report. Please try again.")}finally{i(!1)}}};return o.jsxs("div",{className:"flex flex-col gap-3",children:[a&&o.jsx("div",{className:"rounded border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600",children:a}),o.jsx("button",{type:"button",className:`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition ${n||l?"border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`,disabled:n||l,onClick:c,children:l?"Preparing Report…":"Download UL Compliance Report"}),o.jsx("div",{className:"text-xs text-slate-500",children:"The downloaded text file includes device metadata, ride-through windows, and other grid-support functions so you can keep documentation for AHJ or utility reviews."})]})}function rh({entries:e,formState:t,readOnly:n,onChange:l}){var b;const[i,a]=F.useState(null),r=F.useRef(null),s=[{bg:"bg-emerald-500",text:"text-emerald-600",border:"border-emerald-500"},{bg:"bg-rose-500",text:"text-rose-600",border:"border-rose-500"},{bg:"bg-blue-500",text:"text-blue-600",border:"border-blue-500"},{bg:"bg-purple-500",text:"text-purple-600",border:"border-purple-500"},{bg:"bg-orange-500",text:"text-orange-600",border:"border-orange-500"},{bg:"bg-pink-500",text:"text-pink-600",border:"border-pink-500"},{bg:"bg-indigo-500",text:"text-indigo-600",border:"border-indigo-500"},{bg:"bg-teal-500",text:"text-teal-600",border:"border-teal-500"},{bg:"bg-cyan-500",text:"text-cyan-600",border:"border-cyan-500"},{bg:"bg-amber-500",text:"text-amber-600",border:"border-amber-500"},{bg:"bg-lime-500",text:"text-lime-600",border:"border-lime-500"},{bg:"bg-fuchsia-500",text:"text-fuchsia-600",border:"border-fuchsia-500"}],c=(b=e[0])==null?void 0:b.range;if(!c)return null;const{min:d,max:u}=c,m=_=>{let g=d,y=u;if(_.greater_than){const h=t[_.greater_than];typeof h=="number"&&(g=Math.max(g,h+1))}if(_.less_than){const h=t[_.less_than];typeof h=="number"&&(y=Math.min(y,h-1))}return{min:g,max:y}},f=(_,g)=>{const y=m(_),h=Math.max(y.min,Math.min(y.max,g));l(_.arg,h)},p=(_,g)=>{if(n)return;g.preventDefault(),a(_);const y=r.current;if(!y)return;const h=L=>{const T=y.getBoundingClientRect(),C=L.clientX-T.left,S=Math.max(0,Math.min(100,C/T.width*100)),B=Math.round(d+S/100*(u-d));f(e[_],B)},v=()=>{a(null),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",v)},x=e.length>=8?"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4":"grid-cols-2";return o.jsxs("div",{className:"flex flex-col gap-3 text-sm",children:[o.jsx("div",{className:`grid ${x} gap-3`,children:e.map((_,g)=>{const y=s[g%s.length],h=t[_.arg]??d,v=m(_);return o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsxs("div",{className:`text-[11px] uppercase font-semibold flex items-center gap-1.5 ${y.text}`,children:[o.jsx("span",{className:`w-2 h-2 rounded-full ${y.bg}`}),o.jsx("span",{children:_.name??""}),_.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase ml-auto",children:_.unit})]}),o.jsx("input",{type:"number",className:`w-full rounded border ${y.border} bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500`,disabled:n,value:h,min:v.min,max:v.max,onChange:L=>{const T=L.target.value===""?v.min:Number(L.target.value);f(_,T)}})]},_.arg)})}),o.jsxs("div",{className:"relative w-full pt-2 pb-3",children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-2",children:[o.jsx("span",{children:d}),o.jsx("span",{children:u})]}),o.jsxs("div",{className:"relative overflow-hidden",ref:r,children:[o.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full -translate-y-1/2"}),o.jsx("div",{className:"relative overflow-hidden",style:{height:"24px"},children:e.map((_,g)=>{const y=s[g%s.length],h=t[_.arg]??d,v=(h-d)/(u-d)*100,L=e.length-g,T=i===g?100:L;return o.jsx("div",{children:o.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 ${n?"cursor-not-allowed":"cursor-grab active:cursor-grabbing"}`,style:{left:`${v}%`,transform:"translate(-50%, -50%)",width:"40px",height:"24px",zIndex:T},onMouseDown:C=>p(g,C),children:o.jsx("div",{className:`absolute top-1/2 left-1/2 w-5 h-5 rounded-full ${y.bg} border-2 border-white shadow-lg pointer-events-none transition-shadow`,style:{transform:"translate(-50%, -50%)",zIndex:1,boxShadow:i===g?"0 0 0 3px rgba(0,0,0,0.1)":void 0},title:_.name?`${_.name}: ${h}`:String(h)})})},_.arg)})})]})]})]})}function oh({entry:e,value:t,onChange:n,readOnly:l,point:i}){var x,b,_,g,y,h,v;const a="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",r=e.dtype==="enum"||e.dtype&&e.dtype.startsWith("bitfield")?"col-span-full flex flex-col gap-1 text-sm":"flex flex-col gap-1 text-sm";if(e.dtype&&e.dtype.startsWith("bitfield")&&e.meanings){const L=t||{},T=C=>{const S={...L,[C]:!L[C]};n(S)};return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name??""}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("div",{className:"flex flex-col gap-2 py-1",children:Object.entries(e.meanings).map(([C,S])=>o.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:L[C]||!1,onChange:()=>T(C)}),o.jsx("span",{className:"text-sm text-slate-800",children:S})]},C))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}if(e.dtype==="enum"&&e.meanings){const L=Object.entries(e.meanings).map(([S,B])=>{var Y;const O=((Y=e.friendly_meanings)==null?void 0:Y[S])??B;return{wireVal:S,friendly:O}});if(L.length<=3)return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("div",{className:"flex flex-col gap-2 py-1",children:L.map(S=>o.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx("input",{type:"radio",name:e.arg,className:"w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:t===S.friendly,onChange:()=>n(S.friendly)}),o.jsx("span",{className:"text-sm text-slate-800",children:S.friendly})]},S.wireVal))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]});const T=L.reduce((S,B)=>B.friendly.length>S.length?B.friendly:S,""),C=Math.min(Math.max(T.length*8.5+50,220),480);return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name??""}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",style:{minWidth:`${C}px`,maxWidth:"100%"},disabled:l,value:t??"",onChange:S=>n(S.target.value),children:L.map(S=>o.jsx("option",{value:S.friendly,children:S.friendly},S.wireVal))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}const s=e.dtype==="Number",c=s&&e.range!==void 0,d=((x=i==null?void 0:i.protocol)==null?void 0:x.modbus)!==void 0,u=(_=(b=i==null?void 0:i.protocol)==null?void 0:b.modbus)==null?void 0:_.scale_factor,m=d&&u!==void 0&&s,f=m&&t!==null&&t!==void 0&&t!==""?Number(t)*u:t,p=L=>{if(s){const T=L===""?"":Number(L);if(m&&T!==""){const C=Math.round(T/u);n(C)}else n(T)}else n(L)};return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("input",{type:s?"number":"text",className:c?"w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500":a,disabled:l,value:f??"",min:(g=e.range)==null?void 0:g.min,max:(y=e.range)==null?void 0:y.max,onChange:L=>p(L.target.value)}),c&&o.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.min}),o.jsx("input",{type:"range",className:"flex-1",disabled:l,value:f??e.range.min,min:(h=e.range)==null?void 0:h.min,max:(v=e.range)==null?void 0:v.max,onChange:L=>{const T=Number(L.target.value);if(m){const C=Math.round(T/u);n(C)}else n(T)}}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.max})]})]}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug",children:e.longdescription})]})}function sh({point:e,formState:t,readOnly:n,isInvoke:l,setButtonAppearance:i,onChange:a,onInvokeClick:r,equipment:s}){const c=e.entries.filter(u=>u.dtype==="Number"&&u.range!==void 0),d=!e.widget&&c.length>=2&&c.length===e.entries.length;return o.jsxs(o.Fragment,{children:[e.widget==="datetime"?o.jsx(nh,{point:e,formState:t,readOnly:n,onChange:a}):e.widget==="timerange-multi"?o.jsx(lh,{point:e,formState:t,readOnly:n,onChange:a}):e.widget==="timerange"?o.jsx(Hp,{point:e,formState:t,readOnly:n,onChange:a}):e.widget==="generator-exercise"?o.jsx(ih,{formState:t,readOnly:n,onChange:a}):e.widget==="ul-compliance-report"?o.jsx(ah,{point:e,equipment:s,readOnly:n}):d?o.jsx(rh,{entries:c,formState:t,readOnly:n,onChange:a}):o.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4",children:e.entries.map(u=>o.jsx(oh,{entry:u,value:t[u.arg],readOnly:n,point:e,onChange:m=>a(u.arg,m)},u.arg))}),l&&e.widget!=="generator-exercise"&&e.widget!=="ul-compliance-report"&&e.showInvokeButton!==!1&&o.jsx("div",{className:"mt-4 flex items-center gap-2",children:o.jsx("button",{type:"button",className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${i}`,disabled:n,onClick:r,children:e.invokeButtonText||"Invoke"})})]})}const ch={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl"};function jr({isOpen:e,onClose:t,title:n,icon:l,children:i,showFooter:a=!0,footerContent:r,maxWidth:s="lg"}){if(F.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&t()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[e,t]),!e)return null;const c=o.jsx("div",{className:"flex justify-end p-4 border-t border-slate-200 bg-slate-50",children:o.jsx("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",onClick:t,children:"Close"})});return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4",onClick:t,children:o.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${ch[s]} border border-slate-300 overflow-hidden`,onClick:d=>d.stopPropagation(),children:[o.jsxs("div",{className:"flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[l,o.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:n})]}),o.jsx("button",{type:"button",className:"text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1",onClick:t,children:"✕"})]}),o.jsx("div",{className:"p-5 max-h-[60vh] overflow-y-auto",children:i}),a&&(r||c)]})})}function dh({title:e,content:t,isOpen:n,onClose:l}){const i=r=>r.split(/(\*\*[^*]+\*\*)/g).map((c,d)=>c.startsWith("**")&&c.endsWith("**")?o.jsx("strong",{className:"font-semibold text-slate-900",children:c.slice(2,-2)},d):o.jsx("span",{children:c},d)),a=o.jsx("div",{className:"text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium",children:"i"});return o.jsx(jr,{isOpen:n,onClose:l,title:e,icon:a,children:o.jsx("div",{className:"text-sm text-slate-700 leading-relaxed whitespace-pre-wrap",children:i(t)})})}function uh({point:e,isOpen:t,onClose:n}){const l=[];e.entries.forEach(a=>{var r,s;if((r=a.telemetry)!=null&&r.model&&((s=a.telemetry)!=null&&s.point)){const c=`${a.telemetry.model}.${a.telemetry.point}`;l.includes(c)||l.push(c)}});const i=o.jsx("span",{className:"text-slate-500 text-xl",children:"🕐"});return o.jsxs(jr,{isOpen:t,onClose:n,title:"Historical Data",icon:i,children:[o.jsx("div",{className:"text-sm text-slate-700 leading-relaxed mb-4",children:"In the real UI, this button would link you to the historical data page showing the last 24 hours of data for the following telemetry points:"}),l.length>0?o.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4",children:[o.jsx("div",{className:"text-xs font-semibold text-slate-600 uppercase mb-2",children:"Telemetry Points"}),o.jsx("div",{className:"flex flex-col gap-2",children:l.map((a,r)=>o.jsx("div",{className:"font-mono text-sm text-emerald-600 bg-white border border-emerald-200 rounded px-3 py-2",children:a},r))})]}):o.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800",children:"No telemetry points configured for this setting."})]})}function du({isOpen:e,onClose:t,title:n,payload:l,gatewaySn:i,type:a="set"}){const r=a==="refresh"?o.jsx("span",{children:"⟳"}):o.jsx("span",{children:"📤"});return o.jsxs(jr,{isOpen:e,onClose:t,title:n,icon:r,maxWidth:"xl",children:[i&&o.jsxs("div",{className:"text-sm text-slate-700 mb-3 bg-blue-50 border border-blue-200 rounded-lg p-3",children:[o.jsx("span",{className:"font-semibold",children:"Gateway:"})," ",i]}),o.jsx("div",{className:"text-sm text-slate-700 mb-3",children:"This is a preview of the command that would be sent:"}),o.jsx("pre",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800",children:JSON.stringify(l,null,2)})]})}function uu({point:e,helpTextMatch:t=!1,equipment:n}){var B,O,Y,N;const{formState:l,handleFieldChange:i,handleRefresh:a,handleSet:r,handleInvoke:s}=Yb(e,n),c=mi(),d=mi(),u=mi(),m=mi(),f=()=>c.open(),p=()=>d.open(),x=async()=>{const q=await a();q!=null&&q.payload&&m.open({payload:q.payload,gatewaySn:q.gatewaySn})},b=async()=>{const q=await r();q!=null&&q.payload&&u.open({payload:q.payload,gatewaySn:q.gatewaySn})},_=async()=>{const q=await s();q!=null&&q.payload&&u.open({payload:q.payload,gatewaySn:q.gatewaySn})},y=(typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service",h=e.readOnly||e.access==="R",v=h?"border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-400 bg-white text-slate-700 hover:bg-slate-50",L=e.entries.some(q=>{var le,I;return((le=q.telemetry)==null?void 0:le.model)&&((I=q.telemetry)==null?void 0:I.point)}),T=e.showHistory!==void 0?e.showHistory:L&&!y,C=y?e.showRefresh===!0:e.showRefresh!==!1,S=e.showSetButton!==void 0?e.showSetButton:!y;return o.jsxs("div",{className:"rounded-xl border border-slate-300 bg-white p-4 shadow-sm",children:[o.jsx(th,{point:e,readOnly:h,helpTextMatch:t,shouldShowHistory:T,shouldShowRefresh:C,shouldShowSetButton:S,setButtonAppearance:v,onHelpClick:f,onHistoryClick:p,onRefreshClick:x,onSetClick:b}),o.jsx(sh,{point:e,formState:l,readOnly:h,isInvoke:y,setButtonAppearance:v,onChange:i,onInvokeClick:_,equipment:n}),o.jsx(dh,{title:e.title,content:e.help||"",isOpen:c.isOpen,onClose:c.close}),o.jsx(uh,{point:e,isOpen:d.isOpen,onClose:d.close}),o.jsx(du,{title:"Command Preview",payload:(B=u.data)==null?void 0:B.payload,gatewaySn:(O=u.data)==null?void 0:O.gatewaySn,isOpen:u.isOpen,onClose:u.close}),o.jsx(du,{title:"Read Command Preview",payload:(Y=m.data)==null?void 0:Y.payload,gatewaySn:(N=m.data)==null?void 0:N.gatewaySn,isOpen:m.isOpen,onClose:m.close,type:"refresh"})]})}function mh({subsection:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){const[i,a]=F.useState(!e.collapsedByDefault),r=e.points.map(c=>({point:c,searchResult:n(c,t)})).filter(({searchResult:c})=>c.matches);if(r.length===0)return null;const s=t.trim()?!0:i;return e.collapsedByDefault?o.jsxs("div",{className:"border border-slate-300 bg-white rounded-xl shadow-sm mb-8",children:[o.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-2 text-left",onClick:()=>a(c=>!c),children:[o.jsx("span",{className:"text-slate-800 text-sm font-semibold uppercase tracking-wide",children:e.title||"Advanced"}),o.jsx("span",{className:"text-slate-500 text-xs",children:s?"▾":"▸"})]}),s&&o.jsx("div",{className:"p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:c,searchResult:d})=>o.jsx(uu,{point:c,helpTextMatch:d.helpTextMatch,equipment:l},c.command_id))})]}):o.jsxs("div",{className:"mb-6",children:[e.title&&o.jsx("div",{className:"text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2",children:o.jsx("span",{children:e.title})}),o.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:c,searchResult:d})=>o.jsx(uu,{point:c,helpTextMatch:d.helpTextMatch,equipment:l},c.command_id))})]})}function ph({section:e,sectionId:t,searchQuery:n,pointMatchesSearch:l,equipment:i}){const[a,r]=F.useState(!0),s=e.subsections.some(c=>c.points.some(d=>l(d,n).matches));return n.trim()&&!s?null:o.jsxs("section",{className:"bg-white/0",id:t,children:[o.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors",onClick:()=>r(!a),children:[o.jsx("span",{children:e.sectionTitle}),o.jsx("span",{className:"text-slate-500 text-sm",children:a?"▾":"▸"})]}),a&&o.jsx("div",{children:e.subsections.map((c,d)=>o.jsx(mh,{subsection:c,searchQuery:n,pointMatchesSearch:l,equipment:i},d))})]})}const mu=[{bg:"bg-brand-green/10",border:"border-brand-green/30",text:"text-slate-900",hover:"hover:bg-brand-green/20"},{bg:"bg-brand-teal/10",border:"border-brand-teal/30",text:"text-slate-900",hover:"hover:bg-brand-teal/20"},{bg:"bg-brand-emerald/10",border:"border-brand-emerald/30",text:"text-slate-900",hover:"hover:bg-brand-emerald/20"},{bg:"bg-brand-cyan/10",border:"border-brand-cyan/30",text:"text-slate-900",hover:"hover:bg-brand-cyan/20"},{bg:"bg-brand-mint/10",border:"border-brand-mint/30",text:"text-slate-900",hover:"hover:bg-brand-mint/20"},{bg:"bg-brand-forest/10",border:"border-brand-forest/30",text:"text-slate-900",hover:"hover:bg-brand-forest/20"},{bg:"bg-brand-sage/10",border:"border-brand-sage/30",text:"text-slate-900",hover:"hover:bg-brand-sage/20"}];function fh({theme:e,themeId:t,themeIndex:n,searchQuery:l,pointMatchesSearch:i,equipment:a}){const[r,s]=F.useState(!0),c=mu[n%mu.length],d=e.sections.some(u=>u.subsections.some(m=>m.points.some(f=>i(f,l).matches)));return l.trim()&&!d?null:o.jsxs("div",{className:"bg-white/0",id:t,children:[o.jsxs("button",{className:`w-full flex items-center justify-between ${c.bg} ${c.text} text-2xl font-bold mb-6 border-b ${c.border} pb-3 px-4 py-2 rounded-lg ${c.hover} transition-all`,onClick:()=>s(!r),children:[o.jsx("span",{children:e.themeName}),o.jsx("span",{className:"text-slate-500 text-lg",children:r?"▾":"▸"})]}),r&&o.jsx("div",{className:"flex flex-col gap-10",children:e.sections.map((u,m)=>{const f=`${t}-section-${m}`;return o.jsx(ph,{section:u,sectionId:f,searchQuery:l,pointMatchesSearch:i,equipment:a},`${u.sectionTitle}-${m}`)})})]})}function yh({themes:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){return o.jsxs("div",{className:"flex flex-col gap-16",children:[e.map((i,a)=>{const r=`theme-${a}`;return o.jsx(fh,{theme:i,themeId:r,themeIndex:a,searchQuery:t,pointMatchesSearch:n,equipment:l},`${i.themeName}-${a}`)}),!e.length&&o.jsx("div",{className:"text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60",children:"This page does not define any themes yet."})]})}function gh({isOpen:e,onClose:t}){const n=o.jsx("span",{className:"text-base text-slate-600",role:"img","aria-label":"refresh",children:"⟳"});return o.jsx(jr,{isOpen:e,onClose:t,title:"Refresh Site Values",icon:n,maxWidth:"md",children:o.jsxs("div",{className:"text-sm text-slate-700 space-y-3",children:[o.jsx("p",{children:"This button does not make any network calls in the prototype."}),o.jsxs("p",{children:["In a real implementation this action should call"," ",o.jsx("code",{className:"mx-1 rounded bg-slate-100 px-1 py-0.5 text-xs",children:"GetPointValues"})," ","with"," ",o.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"force_refresh=true"})," ","to retrieve the freshest point data."]})]})})}function bh(e){var n,l,i,a,r,s,c;if(!e)return;if(!Array.isArray(e.themes)){console.error("[SchemaTest] page.themes is missing or not an array");return}e.themes.forEach((d,u)=>{if(!Array.isArray(d.sections)){console.error(`[SchemaTest] theme ${u} (${d.themeName}) has no sections array`);return}d.sections.forEach((m,f)=>{Array.isArray(m.subsections)||console.error(`[SchemaTest] theme ${u} / section ${f} (${m.sectionTitle}) has no subsections array`)}),d.sections.forEach((m,f)=>{var p;(p=m.subsections)==null||p.forEach((x,b)=>{if(!Array.isArray(x.points)){console.error(`[SchemaTest] theme ${u} / section ${f} / subsection ${b} (${x.title}) has no points array`);return}x.points.forEach((_,g)=>{if(!Array.isArray(_.entries)){console.error(`[SchemaTest] theme ${u} / section ${f} / subsection ${b} / point ${g} (${_.title}) has no entries array`);return}_.entries.forEach((y,h)=>{const v=["enum","String","Number"],L=y.dtype&&typeof y.dtype=="string"&&y.dtype.startsWith("bitfield");!v.includes(y.dtype)&&!L&&console.error(`[SchemaTest] entry ${y.name??h} in point ${_.title} has unsupported dtype ${y.dtype}`)})})})})});const t=((c=(s=(r=(a=(i=(l=(n=e.themes)==null?void 0:n[0])==null?void 0:l.sections)==null?void 0:i[0])==null?void 0:a.subsections)==null?void 0:r[0])==null?void 0:s.points)==null?void 0:c[0])||null;t&&(t.command_id||console.error("[SchemaTest] firstPoint.command_id missing"),t.protocol||console.error("[SchemaTest] firstPoint.protocol missing"))}function hh(){var S,B,O;const[e,t]=F.useState(((S=_a[0])==null?void 0:S.id)??""),{pageRegistry:n,pageLookup:l,isLoading:i,loadError:a,lastModified:r}=qb(e),s=((B=n[0])==null?void 0:B.id)??"",[c]=F.useState(s),d=Ub(),{searchQuery:u,setSearchQuery:m,pointMatchesSearch:f}=$b(),p=mi(),x=F.useMemo(()=>r?new Date(r).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}):"Never",[r]),b=c&&l[c]||s&&l[s]||null,_=F.useMemo(()=>_a.find(Y=>Y.id===e)||_a[0],[e]),{getGatewaySn:g,isLoading:y}=Wp(),h=(O=_==null?void 0:_.thingId)==null?void 0:O.SN,v=h?g(h):void 0,L=Wb(v),T={gatewaySn:v,isOnline:v?L.isOnline:null,isLoading:y||!!v&&L.isLoading,lastChecked:L.statusTimestamp,error:L.error||(!y&&h&&!v?"Gateway mapping unavailable":null)};if(F.useEffect(()=>{bh(b)},[b]),i)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsx("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:"Loading theme file..."})});if(a)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700",children:[o.jsx("div",{className:"font-semibold mb-2",children:"Error loading site configuration"}),o.jsx("div",{children:a})]})});if(!b)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:["No pages found in ",o.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"src/themes"}),". Add a JSON page file to get started."]})});const C=b.themes??[];return o.jsxs("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:[o.jsxs("div",{className:"max-w-[1400px] mx-auto flex gap-4",children:[o.jsx(Hb,{themes:C,activeSection:d,selectedEquipmentId:e,onEquipmentChange:t,equipmentOptions:_a}),o.jsxs("main",{className:"flex-1 flex flex-col gap-6",children:[o.jsx(zb,{searchQuery:u,onSearchChange:m,lastUpdatedLabel:x,onRefresh:()=>p.open(),gatewayStatus:T}),o.jsx(yh,{themes:C,searchQuery:u,pointMatchesSearch:f,equipment:_})]})]}),o.jsx(gh,{isOpen:p.isOpen,onClose:p.close})]})}const Gc=Symbol.for("yaml.alias"),Vs=Symbol.for("yaml.document"),vn=Symbol.for("yaml.map"),zp=Symbol.for("yaml.pair"),Ut=Symbol.for("yaml.scalar"),Fl=Symbol.for("yaml.seq"),kt=Symbol.for("yaml.node.type"),Dn=e=>!!e&&typeof e=="object"&&e[kt]===Gc,Qn=e=>!!e&&typeof e=="object"&&e[kt]===Vs,ql=e=>!!e&&typeof e=="object"&&e[kt]===vn,we=e=>!!e&&typeof e=="object"&&e[kt]===zp,ge=e=>!!e&&typeof e=="object"&&e[kt]===Ut,Ul=e=>!!e&&typeof e=="object"&&e[kt]===Fl;function ke(e){if(e&&typeof e=="object")switch(e[kt]){case vn:case Fl:return!0}return!1}function De(e){if(e&&typeof e=="object")switch(e[kt]){case Gc:case vn:case Ut:case Fl:return!0}return!1}const Kp=e=>(ge(e)||ke(e))&&!!e.anchor,it=Symbol("break visit"),Qp=Symbol("skip children"),qt=Symbol("remove node");function Yn(e,t){const n=Yp(t);Qn(e)?bl(null,e.contents,n,Object.freeze([e]))===qt&&(e.contents=null):bl(null,e,n,Object.freeze([]))}Yn.BREAK=it;Yn.SKIP=Qp;Yn.REMOVE=qt;function bl(e,t,n,l){const i=Xp(e,t,n,l);if(De(i)||we(i))return Jp(e,l,i),bl(e,i,n,l);if(typeof i!="symbol"){if(ke(t)){l=Object.freeze(l.concat(t));for(let a=0;a<t.items.length;++a){const r=bl(a,t.items[a],n,l);if(typeof r=="number")a=r-1;else{if(r===it)return it;r===qt&&(t.items.splice(a,1),a-=1)}}}else if(we(t)){l=Object.freeze(l.concat(t));const a=bl("key",t.key,n,l);if(a===it)return it;a===qt&&(t.key=null);const r=bl("value",t.value,n,l);if(r===it)return it;r===qt&&(t.value=null)}}return i}async function Fr(e,t){const n=Yp(t);Qn(e)?await hl(null,e.contents,n,Object.freeze([e]))===qt&&(e.contents=null):await hl(null,e,n,Object.freeze([]))}Fr.BREAK=it;Fr.SKIP=Qp;Fr.REMOVE=qt;async function hl(e,t,n,l){const i=await Xp(e,t,n,l);if(De(i)||we(i))return Jp(e,l,i),hl(e,i,n,l);if(typeof i!="symbol"){if(ke(t)){l=Object.freeze(l.concat(t));for(let a=0;a<t.items.length;++a){const r=await hl(a,t.items[a],n,l);if(typeof r=="number")a=r-1;else{if(r===it)return it;r===qt&&(t.items.splice(a,1),a-=1)}}}else if(we(t)){l=Object.freeze(l.concat(t));const a=await hl("key",t.key,n,l);if(a===it)return it;a===qt&&(t.key=null);const r=await hl("value",t.value,n,l);if(r===it)return it;r===qt&&(t.value=null)}}return i}function Yp(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function Xp(e,t,n,l){var i,a,r,s,c;if(typeof n=="function")return n(e,t,l);if(ql(t))return(i=n.Map)==null?void 0:i.call(n,e,t,l);if(Ul(t))return(a=n.Seq)==null?void 0:a.call(n,e,t,l);if(we(t))return(r=n.Pair)==null?void 0:r.call(n,e,t,l);if(ge(t))return(s=n.Scalar)==null?void 0:s.call(n,e,t,l);if(Dn(t))return(c=n.Alias)==null?void 0:c.call(n,e,t,l)}function Jp(e,t,n){const l=t[t.length-1];if(ke(l))l.items[e]=n;else if(we(l))e==="key"?l.key=n:l.value=n;else if(Qn(l))l.contents=n;else{const i=Dn(l)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const _h={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},xh=e=>e.replace(/[!,[\]{}]/g,t=>_h[t]);class Je{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Je.defaultYaml,t),this.tags=Object.assign({},Je.defaultTags,n)}clone(){const t=new Je(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new Je(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Je.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Je.defaultTags);break}return t}add(t,n){this.atNextDocument&&(this.yaml={explicit:Je.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Je.defaultTags),this.atNextDocument=!1);const l=t.trim().split(/[ \t]+/),i=l.shift();switch(i){case"%TAG":{if(l.length!==2&&(n(0,"%TAG directive should contain exactly two parts"),l.length<2))return!1;const[a,r]=l;return this.tags[a]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,l.length!==1)return n(0,"%YAML directive should contain exactly one part"),!1;const[a]=l;if(a==="1.1"||a==="1.2")return this.yaml.version=a,!0;{const r=/^\d+\.\d+$/.test(a);return n(6,`Unsupported YAML version ${a}`,r),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(t,n){if(t==="!")return"!";if(t[0]!=="!")return n(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const r=t.slice(2,-1);return r==="!"||r==="!!"?(n(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&n("Verbatim tags must end with a >"),r)}const[,l,i]=t.match(/^(.*!)([^!]*)$/s);i||n(`The ${t} tag has no suffix`);const a=this.tags[l];if(a)try{return a+decodeURIComponent(i)}catch(r){return n(String(r)),null}return l==="!"?t:(n(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[n,l]of Object.entries(this.tags))if(t.startsWith(l))return n+xh(t.substring(l.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const n=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],l=Object.entries(this.tags);let i;if(t&&l.length>0&&De(t.contents)){const a={};Yn(t.contents,(r,s)=>{De(s)&&s.tag&&(a[s.tag]=!0)}),i=Object.keys(a)}else i=[];for(const[a,r]of l)a==="!!"&&r==="tag:yaml.org,2002:"||(!t||i.some(s=>s.startsWith(r)))&&n.push(`%TAG ${a} ${r}`);return n.join(`
`)}}Je.defaultYaml={explicit:!1,version:"1.2"};Je.defaultTags={"!!":"tag:yaml.org,2002:"};function Zp(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const n=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(n)}return!0}function ef(e){const t=new Set;return Yn(e,{Value(n,l){l.anchor&&t.add(l.anchor)}}),t}function tf(e,t){for(let n=1;;++n){const l=`${e}${n}`;if(!t.has(l))return l}}function vh(e,t){const n=[],l=new Map;let i=null;return{onAnchor:a=>{n.push(a),i??(i=ef(e));const r=tf(t,i);return i.add(r),r},setAnchors:()=>{for(const a of n){const r=l.get(a);if(typeof r=="object"&&r.anchor&&(ge(r.node)||ke(r.node)))r.node.anchor=r.anchor;else{const s=new Error("Failed to resolve repeated object (this should not happen)");throw s.source=a,s}}},sourceObjects:l}}function _l(e,t,n,l){if(l&&typeof l=="object")if(Array.isArray(l))for(let i=0,a=l.length;i<a;++i){const r=l[i],s=_l(e,l,String(i),r);s===void 0?delete l[i]:s!==r&&(l[i]=s)}else if(l instanceof Map)for(const i of Array.from(l.keys())){const a=l.get(i),r=_l(e,l,i,a);r===void 0?l.delete(i):r!==a&&l.set(i,r)}else if(l instanceof Set)for(const i of Array.from(l)){const a=_l(e,l,i,i);a===void 0?l.delete(i):a!==i&&(l.delete(i),l.add(a))}else for(const[i,a]of Object.entries(l)){const r=_l(e,l,i,a);r===void 0?delete l[i]:r!==a&&(l[i]=r)}return e.call(t,n,l)}function Ct(e,t,n){if(Array.isArray(e))return e.map((l,i)=>Ct(l,String(i),n));if(e&&typeof e.toJSON=="function"){if(!n||!Kp(e))return e.toJSON(t,n);const l={aliasCount:0,count:1,res:void 0};n.anchors.set(e,l),n.onCreate=a=>{l.res=a,delete n.onCreate};const i=e.toJSON(t,n);return n.onCreate&&n.onCreate(i),i}return typeof e=="bigint"&&!(n!=null&&n.keep)?Number(e):e}class Mc{constructor(t){Object.defineProperty(this,kt,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}toJS(t,{mapAsMap:n,maxAliasCount:l,onAnchor:i,reviver:a}={}){if(!Qn(t))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:t,keep:!0,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof l=="number"?l:100},s=Ct(this,"",r);if(typeof i=="function")for(const{count:c,res:d}of r.anchors.values())i(d,c);return typeof a=="function"?_l(a,{"":s},"",s):s}}class qr extends Mc{constructor(t){super(Gc),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t,n){let l;n!=null&&n.aliasResolveCache?l=n.aliasResolveCache:(l=[],Yn(t,{Node:(a,r)=>{(Dn(r)||Kp(r))&&l.push(r)}}),n&&(n.aliasResolveCache=l));let i;for(const a of l){if(a===this)break;a.anchor===this.source&&(i=a)}return i}toJSON(t,n){if(!n)return{source:this.source};const{anchors:l,doc:i,maxAliasCount:a}=n,r=this.resolve(i,n);if(!r){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let s=l.get(r);if(s||(Ct(r,null,n),s=l.get(r)),!s||s.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(a>=0&&(s.count+=1,s.aliasCount===0&&(s.aliasCount=qa(i,r,l)),s.count*s.aliasCount>a)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return s.res}toString(t,n,l){const i=`*${this.source}`;if(t){if(Zp(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(t.implicitKey)return`${i} `}return i}}function qa(e,t,n){if(Dn(t)){const l=t.resolve(e),i=n&&l&&n.get(l);return i?i.count*i.aliasCount:0}else if(ke(t)){let l=0;for(const i of t.items){const a=qa(e,i,n);a>l&&(l=a)}return l}else if(we(t)){const l=qa(e,t.key,n),i=qa(e,t.value,n);return Math.max(l,i)}return 1}const nf=e=>!e||typeof e!="function"&&typeof e!="object";class ne extends Mc{constructor(t){super(Ut),this.value=t}toJSON(t,n){return n!=null&&n.keep?this.value:Ct(this.value,t,n)}toString(){return String(this.value)}}ne.BLOCK_FOLDED="BLOCK_FOLDED";ne.BLOCK_LITERAL="BLOCK_LITERAL";ne.PLAIN="PLAIN";ne.QUOTE_DOUBLE="QUOTE_DOUBLE";ne.QUOTE_SINGLE="QUOTE_SINGLE";const wh="tag:yaml.org,2002:";function Ch(e,t,n){if(t){const l=n.filter(a=>a.tag===t),i=l.find(a=>!a.format)??l[0];if(!i)throw new Error(`Tag ${t} not found`);return i}return n.find(l=>{var i;return((i=l.identify)==null?void 0:i.call(l,e))&&!l.format})}function Ui(e,t,n){var m,f,p;if(Qn(e)&&(e=e.contents),De(e))return e;if(we(e)){const x=(f=(m=n.schema[vn]).createNode)==null?void 0:f.call(m,n.schema,null,n);return x.items.push(e),x}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:l,onAnchor:i,onTagObj:a,schema:r,sourceObjects:s}=n;let c;if(l&&e&&typeof e=="object"){if(c=s.get(e),c)return c.anchor??(c.anchor=i(e)),new qr(c.anchor);c={anchor:null,node:null},s.set(e,c)}t!=null&&t.startsWith("!!")&&(t=wh+t.slice(2));let d=Ch(e,t,r.tags);if(!d){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const x=new ne(e);return c&&(c.node=x),x}d=e instanceof Map?r[vn]:Symbol.iterator in Object(e)?r[Fl]:r[vn]}a&&(a(d),delete n.onTagObj);const u=d!=null&&d.createNode?d.createNode(n.schema,e,n):typeof((p=d==null?void 0:d.nodeClass)==null?void 0:p.from)=="function"?d.nodeClass.from(n.schema,e,n):new ne(e);return t?u.tag=t:d.default||(u.tag=d.tag),c&&(c.node=u),u}function br(e,t,n){let l=n;for(let i=t.length-1;i>=0;--i){const a=t[i];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const r=[];r[a]=l,l=r}else l=new Map([[a,l]])}return Ui(l,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const fi=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class lf extends Mc{constructor(t,n){super(t),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}clone(t){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(n.schema=t),n.items=n.items.map(l=>De(l)||we(l)?l.clone(t):l),this.range&&(n.range=this.range.slice()),n}addIn(t,n){if(fi(t))this.add(n);else{const[l,...i]=t,a=this.get(l,!0);if(ke(a))a.addIn(i,n);else if(a===void 0&&this.schema)this.set(l,br(this.schema,i,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}deleteIn(t){const[n,...l]=t;if(l.length===0)return this.delete(n);const i=this.get(n,!0);if(ke(i))return i.deleteIn(l);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${l}`)}getIn(t,n){const[l,...i]=t,a=this.get(l,!0);return i.length===0?!n&&ge(a)?a.value:a:ke(a)?a.getIn(i,n):void 0}hasAllNullValues(t){return this.items.every(n=>{if(!we(n))return!1;const l=n.value;return l==null||t&&ge(l)&&l.value==null&&!l.commentBefore&&!l.comment&&!l.tag})}hasIn(t){const[n,...l]=t;if(l.length===0)return this.has(n);const i=this.get(n,!0);return ke(i)?i.hasIn(l):!1}setIn(t,n){const[l,...i]=t;if(i.length===0)this.set(l,n);else{const a=this.get(l,!0);if(ke(a))a.setIn(i,n);else if(a===void 0&&this.schema)this.set(l,br(this.schema,i,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}}const Sh=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function Qt(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const Gn=(e,t,n)=>e.endsWith(`
`)?Qt(n,t):n.includes(`
`)?`
`+Qt(n,t):(e.endsWith(" ")?"":" ")+n,af="flow",Rs="block",Ua="quoted";function Ur(e,t,n="flow",{indentAtStart:l,lineWidth:i=80,minContentWidth:a=20,onFold:r,onOverflow:s}={}){if(!i||i<0)return e;i<a&&(a=0);const c=Math.max(1+a,1+i-t.length);if(e.length<=c)return e;const d=[],u={};let m=i-t.length;typeof l=="number"&&(l>i-Math.max(2,a)?d.push(0):m=i-l);let f,p,x=!1,b=-1,_=-1,g=-1;n===Rs&&(b=pu(e,b,t.length),b!==-1&&(m=b+c));for(let h;h=e[b+=1];){if(n===Ua&&h==="\\"){switch(_=b,e[b+1]){case"x":b+=3;break;case"u":b+=5;break;case"U":b+=9;break;default:b+=1}g=b}if(h===`
`)n===Rs&&(b=pu(e,b,t.length)),m=b+t.length+c,f=void 0;else{if(h===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){const v=e[b+1];v&&v!==" "&&v!==`
`&&v!=="	"&&(f=b)}if(b>=m)if(f)d.push(f),m=f+c,f=void 0;else if(n===Ua){for(;p===" "||p==="	";)p=h,h=e[b+=1],x=!0;const v=b>g+1?b-2:_-1;if(u[v])return e;d.push(v),u[v]=!0,m=v+c,f=void 0}else x=!0}p=h}if(x&&s&&s(),d.length===0)return e;r&&r();let y=e.slice(0,d[0]);for(let h=0;h<d.length;++h){const v=d[h],L=d[h+1]||e.length;v===0?y=`
${t}${e.slice(0,L)}`:(n===Ua&&u[v]&&(y+=`${e[v]}\\`),y+=`
${t}${e.slice(v+1,L)}`)}return y}function pu(e,t,n){let l=t,i=t+1,a=e[i];for(;a===" "||a==="	";)if(t<i+n)a=e[++t];else{do a=e[++t];while(a&&a!==`
`);l=t,i=t+1,a=e[i]}return l}const $r=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Wr=e=>/^(%|---|\.\.\.)/m.test(e);function Lh(e,t,n){if(!t||t<0)return!1;const l=t-n,i=e.length;if(i<=l)return!1;for(let a=0,r=0;a<i;++a)if(e[a]===`
`){if(a-r>l)return!0;if(r=a+1,i-r<=l)return!1}return!0}function Li(e,t){const n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;const{implicitKey:l}=t,i=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(Wr(e)?"  ":"");let r="",s=0;for(let c=0,d=n[c];d;d=n[++c])if(d===" "&&n[c+1]==="\\"&&n[c+2]==="n"&&(r+=n.slice(s,c)+"\\ ",c+=1,s=c,d="\\"),d==="\\")switch(n[c+1]){case"u":{r+=n.slice(s,c);const u=n.substr(c+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=n.substr(c,6)}c+=5,s=c+1}break;case"n":if(l||n[c+2]==='"'||n.length<i)c+=1;else{for(r+=n.slice(s,c)+`

`;n[c+2]==="\\"&&n[c+3]==="n"&&n[c+4]!=='"';)r+=`
`,c+=2;r+=a,n[c+2]===" "&&(r+="\\"),c+=1,s=c+1}break;default:c+=1}return r=s?r+n.slice(s):n,l?r:Ur(r,a,Ua,$r(t,!1))}function Is(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Li(e,t);const n=t.indent||(Wr(e)?"  ":""),l="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return t.implicitKey?l:Ur(l,n,af,$r(t,!1))}function xl(e,t){const{singleQuote:n}=t.options;let l;if(n===!1)l=Li;else{const i=e.includes('"'),a=e.includes("'");i&&!a?l=Is:a&&!i?l=Li:l=n?Is:Li}return l(e,t)}let Gs;try{Gs=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Gs=/\n+(?!\n|$)/g}function $a({comment:e,type:t,value:n},l,i,a){const{blockQuote:r,commentString:s,lineWidth:c}=l.options;if(!r||/\n[\t ]+$/.test(n))return xl(n,l);const d=l.indent||(l.forceBlockIndent||Wr(n)?"  ":""),u=r==="literal"?!0:r==="folded"||t===ne.BLOCK_FOLDED?!1:t===ne.BLOCK_LITERAL?!0:!Lh(n,c,d.length);if(!n)return u?`|
`:`>
`;let m,f;for(f=n.length;f>0;--f){const L=n[f-1];if(L!==`
`&&L!=="	"&&L!==" ")break}let p=n.substring(f);const x=p.indexOf(`
`);x===-1?m="-":n===p||x!==p.length-1?(m="+",a&&a()):m="",p&&(n=n.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(Gs,`$&${d}`));let b=!1,_,g=-1;for(_=0;_<n.length;++_){const L=n[_];if(L===" ")b=!0;else if(L===`
`)g=_;else break}let y=n.substring(0,g<_?g+1:_);y&&(n=n.substring(y.length),y=y.replace(/\n+/g,`$&${d}`));let v=(b?d?"2":"1":"")+m;if(e&&(v+=" "+s(e.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){const L=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${d}`);let T=!1;const C=$r(l,!0);r!=="folded"&&t!==ne.BLOCK_FOLDED&&(C.onOverflow=()=>{T=!0});const S=Ur(`${y}${L}${p}`,d,Rs,C);if(!T)return`>${v}
${d}${S}`}return n=n.replace(/\n+/g,`$&${d}`),`|${v}
${d}${y}${n}${p}`}function kh(e,t,n,l){const{type:i,value:a}=e,{actualString:r,implicitKey:s,indent:c,indentStep:d,inFlow:u}=t;if(s&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return xl(a,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return s||u||!a.includes(`
`)?xl(a,t):$a(e,t,n,l);if(!s&&!u&&i!==ne.PLAIN&&a.includes(`
`))return $a(e,t,n,l);if(Wr(a)){if(c==="")return t.forceBlockIndent=!0,$a(e,t,n,l);if(s&&c===d)return xl(a,t)}const m=a.replace(/\n+/g,`$&
${c}`);if(r){const f=b=>{var _;return b.default&&b.tag!=="tag:yaml.org,2002:str"&&((_=b.test)==null?void 0:_.test(m))},{compat:p,tags:x}=t.doc.schema;if(x.some(f)||p!=null&&p.some(f))return xl(a,t)}return s?m:Ur(m,c,af,$r(t,!1))}function Xi(e,t,n,l){const{implicitKey:i,inFlow:a}=t,r=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:s}=e;s!==ne.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(s=ne.QUOTE_DOUBLE);const c=u=>{switch(u){case ne.BLOCK_FOLDED:case ne.BLOCK_LITERAL:return i||a?xl(r.value,t):$a(r,t,n,l);case ne.QUOTE_DOUBLE:return Li(r.value,t);case ne.QUOTE_SINGLE:return Is(r.value,t);case ne.PLAIN:return kh(r,t,n,l);default:return null}};let d=c(s);if(d===null){const{defaultKeyType:u,defaultStringType:m}=t.options,f=i&&u||m;if(d=c(f),d===null)throw new Error(`Unsupported default string type ${f}`)}return d}function rf(e,t){const n=Object.assign({blockQuote:!0,commentString:Sh,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let l;switch(n.collectionStyle){case"block":l=!1;break;case"flow":l=!0;break;default:l=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?" ":"",indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",inFlow:l,options:n}}function Th(e,t){var i;if(t.tag){const a=e.filter(r=>r.tag===t.tag);if(a.length>0)return a.find(r=>r.format===t.format)??a[0]}let n,l;if(ge(t)){l=t.value;let a=e.filter(r=>{var s;return(s=r.identify)==null?void 0:s.call(r,l)});if(a.length>1){const r=a.filter(s=>s.test);r.length>0&&(a=r)}n=a.find(r=>r.format===t.format)??a.find(r=>!r.format)}else l=t,n=e.find(a=>a.nodeClass&&l instanceof a.nodeClass);if(!n){const a=((i=l==null?void 0:l.constructor)==null?void 0:i.name)??(l===null?"null":typeof l);throw new Error(`Tag not resolved for ${a} value`)}return n}function Dh(e,t,{anchors:n,doc:l}){if(!l.directives)return"";const i=[],a=(ge(e)||ke(e))&&e.anchor;a&&Zp(a)&&(n.add(a),i.push(`&${a}`));const r=e.tag??(t.default?null:t.tag);return r&&i.push(l.directives.tagString(r)),i.join(" ")}function Gl(e,t,n,l){var c;if(we(e))return e.toString(t,n,l);if(Dn(e)){if(t.doc.directives)return e.toString(t);if((c=t.resolvedAliases)!=null&&c.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i;const a=De(e)?e:t.doc.createNode(e,{onTagObj:d=>i=d});i??(i=Th(t.doc.schema.tags,a));const r=Dh(a,i,t);r.length>0&&(t.indentAtStart=(t.indentAtStart??0)+r.length+1);const s=typeof i.stringify=="function"?i.stringify(a,t,n,l):ge(a)?Xi(a,t,n,l):a.toString(t,n,l);return r?ge(a)||s[0]==="{"||s[0]==="["?`${r} ${s}`:`${r}
${t.indent}${s}`:s}function Eh({key:e,value:t},n,l,i){const{allNullValues:a,doc:r,indent:s,indentStep:c,options:{commentString:d,indentSeq:u,simpleKeys:m}}=n;let f=De(e)&&e.comment||null;if(m){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(ke(e)||!De(e)&&typeof e=="object"){const C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let p=!m&&(!e||f&&t==null&&!n.inFlow||ke(e)||(ge(e)?e.type===ne.BLOCK_FOLDED||e.type===ne.BLOCK_LITERAL:typeof e=="object"));n=Object.assign({},n,{allNullValues:!1,implicitKey:!p&&(m||!a),indent:s+c});let x=!1,b=!1,_=Gl(e,n,()=>x=!0,()=>b=!0);if(!p&&!n.inFlow&&_.length>1024){if(m)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(n.inFlow){if(a||t==null)return x&&l&&l(),_===""?"?":p?`? ${_}`:_}else if(a&&!m||t==null&&p)return _=`? ${_}`,f&&!x?_+=Gn(_,n.indent,d(f)):b&&i&&i(),_;x&&(f=null),p?(f&&(_+=Gn(_,n.indent,d(f))),_=`? ${_}
${s}:`):(_=`${_}:`,f&&(_+=Gn(_,n.indent,d(f))));let g,y,h;De(t)?(g=!!t.spaceBefore,y=t.commentBefore,h=t.comment):(g=!1,y=null,h=null,t&&typeof t=="object"&&(t=r.createNode(t))),n.implicitKey=!1,!p&&!f&&ge(t)&&(n.indentAtStart=_.length+1),b=!1,!u&&c.length>=2&&!n.inFlow&&!p&&Ul(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let v=!1;const L=Gl(t,n,()=>v=!0,()=>b=!0);let T=" ";if(f||g||y){if(T=g?`
`:"",y){const C=d(y);T+=`
${Qt(C,n.indent)}`}L===""&&!n.inFlow?T===`
`&&(T=`

`):T+=`
${n.indent}`}else if(!p&&ke(t)){const C=L[0],S=L.indexOf(`
`),B=S!==-1,O=n.inFlow??t.flow??t.items.length===0;if(B||!O){let Y=!1;if(B&&(C==="&"||C==="!")){let N=L.indexOf(" ");C==="&"&&N!==-1&&N<S&&L[N+1]==="!"&&(N=L.indexOf(" ",N+1)),(N===-1||S<N)&&(Y=!0)}Y||(T=`
${n.indent}`)}}else(L===""||L[0]===`
`)&&(T="");return _+=T+L,n.inFlow?v&&l&&l():h&&!v?_+=Gn(_,n.indent,d(h)):b&&i&&i(),_}function of(e,t){(e==="debug"||e==="warn")&&console.warn(t)}const va="<<",Xt={identify:e=>e===va||typeof e=="symbol"&&e.description===va,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new ne(Symbol(va)),{addToJSMap:sf}),stringify:()=>va},Ph=(e,t)=>(Xt.identify(t)||ge(t)&&(!t.type||t.type===ne.PLAIN)&&Xt.identify(t.value))&&(e==null?void 0:e.doc.schema.tags.some(n=>n.tag===Xt.tag&&n.default));function sf(e,t,n){if(n=e&&Dn(n)?n.resolve(e.doc):n,Ul(n))for(const l of n.items)No(e,t,l);else if(Array.isArray(n))for(const l of n)No(e,t,l);else No(e,t,n)}function No(e,t,n){const l=e&&Dn(n)?n.resolve(e.doc):n;if(!ql(l))throw new Error("Merge sources must be maps or map aliases");const i=l.toJSON(null,e,Map);for(const[a,r]of i)t instanceof Map?t.has(a)||t.set(a,r):t instanceof Set?t.add(a):Object.prototype.hasOwnProperty.call(t,a)||Object.defineProperty(t,a,{value:r,writable:!0,enumerable:!0,configurable:!0});return t}function cf(e,t,{key:n,value:l}){if(De(n)&&n.addToJSMap)n.addToJSMap(e,t,l);else if(Ph(e,n))sf(e,t,l);else{const i=Ct(n,"",e);if(t instanceof Map)t.set(i,Ct(l,i,e));else if(t instanceof Set)t.add(i);else{const a=Nh(n,i,e),r=Ct(l,a,e);a in t?Object.defineProperty(t,a,{value:r,writable:!0,enumerable:!0,configurable:!0}):t[a]=r}}return t}function Nh(e,t,n){if(t===null)return"";if(typeof t!="object")return String(t);if(De(e)&&(n!=null&&n.doc)){const l=rf(n.doc,{});l.anchors=new Set;for(const a of n.anchors.keys())l.anchors.add(a.anchor);l.inFlow=!0,l.inStringifyKey=!0;const i=e.toString(l);if(!n.mapKeyWarned){let a=JSON.stringify(i);a.length>40&&(a=a.substring(0,36)+'..."'),of(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return i}return JSON.stringify(t)}function Bc(e,t,n){const l=Ui(e,void 0,n),i=Ui(t,void 0,n);return new ze(l,i)}class ze{constructor(t,n=null){Object.defineProperty(this,kt,{value:zp}),this.key=t,this.value=n}clone(t){let{key:n,value:l}=this;return De(n)&&(n=n.clone(t)),De(l)&&(l=l.clone(t)),new ze(n,l)}toJSON(t,n){const l=n!=null&&n.mapAsMap?new Map:{};return cf(n,l,this)}toString(t,n,l){return t!=null&&t.doc?Eh(this,t,n,l):JSON.stringify(this)}}function df(e,t,n){return(t.inFlow??e.flow?Vh:Ah)(e,t,n)}function Ah({comment:e,items:t},n,{blockItemPrefix:l,flowChars:i,itemIndent:a,onChompKeep:r,onComment:s}){const{indent:c,options:{commentString:d}}=n,u=Object.assign({},n,{indent:a,type:null});let m=!1;const f=[];for(let x=0;x<t.length;++x){const b=t[x];let _=null;if(De(b))!m&&b.spaceBefore&&f.push(""),hr(n,f,b.commentBefore,m),b.comment&&(_=b.comment);else if(we(b)){const y=De(b.key)?b.key:null;y&&(!m&&y.spaceBefore&&f.push(""),hr(n,f,y.commentBefore,m))}m=!1;let g=Gl(b,u,()=>_=null,()=>m=!0);_&&(g+=Gn(g,a,d(_))),m&&_&&(m=!1),f.push(l+g)}let p;if(f.length===0)p=i.start+i.end;else{p=f[0];for(let x=1;x<f.length;++x){const b=f[x];p+=b?`
${c}${b}`:`
`}}return e?(p+=`
`+Qt(d(e),c),s&&s()):m&&r&&r(),p}function Vh({items:e},t,{flowChars:n,itemIndent:l}){const{indent:i,indentStep:a,flowCollectionPadding:r,options:{commentString:s}}=t;l+=a;const c=Object.assign({},t,{indent:l,inFlow:!0,type:null});let d=!1,u=0;const m=[];for(let x=0;x<e.length;++x){const b=e[x];let _=null;if(De(b))b.spaceBefore&&m.push(""),hr(t,m,b.commentBefore,!1),b.comment&&(_=b.comment);else if(we(b)){const y=De(b.key)?b.key:null;y&&(y.spaceBefore&&m.push(""),hr(t,m,y.commentBefore,!1),y.comment&&(d=!0));const h=De(b.value)?b.value:null;h?(h.comment&&(_=h.comment),h.commentBefore&&(d=!0)):b.value==null&&(y!=null&&y.comment)&&(_=y.comment)}_&&(d=!0);let g=Gl(b,c,()=>_=null);x<e.length-1&&(g+=","),_&&(g+=Gn(g,l,s(_))),!d&&(m.length>u||g.includes(`
`))&&(d=!0),m.push(g),u=m.length}const{start:f,end:p}=n;if(m.length===0)return f+p;if(!d){const x=m.reduce((b,_)=>b+_.length+2,2);d=t.options.lineWidth>0&&x>t.options.lineWidth}if(d){let x=f;for(const b of m)x+=b?`
${a}${i}${b}`:`
`;return`${x}
${i}${p}`}else return`${f}${r}${m.join(" ")}${r}${p}`}function hr({indent:e,options:{commentString:t}},n,l,i){if(l&&i&&(l=l.replace(/^\n+/,"")),l){const a=Qt(t(l),e);n.push(a.trimStart())}}function Mn(e,t){const n=ge(t)?t.value:t;for(const l of e)if(we(l)&&(l.key===t||l.key===n||ge(l.key)&&l.key.value===n))return l}class pt extends lf{static get tagName(){return"tag:yaml.org,2002:map"}constructor(t){super(vn,t),this.items=[]}static from(t,n,l){const{keepUndefined:i,replacer:a}=l,r=new this(t),s=(c,d)=>{if(typeof a=="function")d=a.call(n,c,d);else if(Array.isArray(a)&&!a.includes(c))return;(d!==void 0||i)&&r.items.push(Bc(c,d,l))};if(n instanceof Map)for(const[c,d]of n)s(c,d);else if(n&&typeof n=="object")for(const c of Object.keys(n))s(c,n[c]);return typeof t.sortMapEntries=="function"&&r.items.sort(t.sortMapEntries),r}add(t,n){var r;let l;we(t)?l=t:!t||typeof t!="object"||!("key"in t)?l=new ze(t,t==null?void 0:t.value):l=new ze(t.key,t.value);const i=Mn(this.items,l.key),a=(r=this.schema)==null?void 0:r.sortMapEntries;if(i){if(!n)throw new Error(`Key ${l.key} already set`);ge(i.value)&&nf(l.value)?i.value.value=l.value:i.value=l.value}else if(a){const s=this.items.findIndex(c=>a(l,c)<0);s===-1?this.items.push(l):this.items.splice(s,0,l)}else this.items.push(l)}delete(t){const n=Mn(this.items,t);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(t,n){const l=Mn(this.items,t),i=l==null?void 0:l.value;return(!n&&ge(i)?i.value:i)??void 0}has(t){return!!Mn(this.items,t)}set(t,n){this.add(new ze(t,n),!0)}toJSON(t,n,l){const i=l?new l:n!=null&&n.mapAsMap?new Map:{};n!=null&&n.onCreate&&n.onCreate(i);for(const a of this.items)cf(n,i,a);return i}toString(t,n,l){if(!t)return JSON.stringify(this);for(const i of this.items)if(!we(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),df(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:l,onComment:n})}}const $l={collection:"map",default:!0,nodeClass:pt,tag:"tag:yaml.org,2002:map",resolve(e,t){return ql(e)||t("Expected a mapping for this tag"),e},createNode:(e,t,n)=>pt.from(e,t,n)};class Sn extends lf{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(t){super(Fl,t),this.items=[]}add(t){this.items.push(t)}delete(t){const n=wa(t);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(t,n){const l=wa(t);if(typeof l!="number")return;const i=this.items[l];return!n&&ge(i)?i.value:i}has(t){const n=wa(t);return typeof n=="number"&&n<this.items.length}set(t,n){const l=wa(t);if(typeof l!="number")throw new Error(`Expected a valid index, not ${t}.`);const i=this.items[l];ge(i)&&nf(n)?i.value=n:this.items[l]=n}toJSON(t,n){const l=[];n!=null&&n.onCreate&&n.onCreate(l);let i=0;for(const a of this.items)l.push(Ct(a,String(i++),n));return l}toString(t,n,l){return t?df(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:l,onComment:n}):JSON.stringify(this)}static from(t,n,l){const{replacer:i}=l,a=new this(t);if(n&&Symbol.iterator in Object(n)){let r=0;for(let s of n){if(typeof i=="function"){const c=n instanceof Set?s:String(r++);s=i.call(n,c,s)}a.items.push(Ui(s,void 0,l))}}return a}}function wa(e){let t=ge(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}const Wl={collection:"seq",default:!0,nodeClass:Sn,tag:"tag:yaml.org,2002:seq",resolve(e,t){return Ul(e)||t("Expected a sequence for this tag"),e},createNode:(e,t,n)=>Sn.from(e,t,n)},Hr={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,n,l){return t=Object.assign({actualString:!0},t),Xi(e,t,n,l)}},zr={identify:e=>e==null,createNode:()=>new ne(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new ne(null),stringify:({source:e},t)=>typeof e=="string"&&zr.test.test(e)?e:t.options.nullStr},Oc={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new ne(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},n){if(e&&Oc.test.test(e)){const l=e[0]==="t"||e[0]==="T";if(t===l)return e}return t?n.options.trueStr:n.options.falseStr}};function It({format:e,minFractionDigits:t,tag:n,value:l}){if(typeof l=="bigint")return String(l);const i=typeof l=="number"?l:Number(l);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let a=JSON.stringify(l);if(!e&&t&&(!n||n==="tag:yaml.org,2002:float")&&/^\d/.test(a)){let r=a.indexOf(".");r<0&&(r=a.length,a+=".");let s=t-(a.length-r-1);for(;s-- >0;)a+="0"}return a}const uf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:It},mf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():It(e)}},pf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new ne(parseFloat(e)),n=e.indexOf(".");return n!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-n-1),t},stringify:It},Kr=e=>typeof e=="bigint"||Number.isInteger(e),jc=(e,t,n,{intAsBigInt:l})=>l?BigInt(e):parseInt(e.substring(t),n);function ff(e,t,n){const{value:l}=e;return Kr(l)&&l>=0?n+l.toString(t):It(e)}const yf={identify:e=>Kr(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,n)=>jc(e,2,8,n),stringify:e=>ff(e,8,"0o")},gf={identify:Kr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>jc(e,0,10,n),stringify:It},bf={identify:e=>Kr(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>jc(e,2,16,n),stringify:e=>ff(e,16,"0x")},Rh=[$l,Wl,Hr,zr,Oc,yf,gf,bf,uf,mf,pf];function fu(e){return typeof e=="bigint"||Number.isInteger(e)}const Ca=({value:e})=>JSON.stringify(e),Ih=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Ca},{identify:e=>e==null,createNode:()=>new ne(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ca},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:Ca},{identify:fu,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>fu(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Ca}],Gh={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},Mh=[$l,Wl].concat(Ih,Gh),Fc={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof atob=="function"){const n=atob(e.replace(/[\n\r]/g,"")),l=new Uint8Array(n.length);for(let i=0;i<n.length;++i)l[i]=n.charCodeAt(i);return l}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:n},l,i,a){if(!n)return"";const r=n;let s;if(typeof btoa=="function"){let c="";for(let d=0;d<r.length;++d)c+=String.fromCharCode(r[d]);s=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t??(t=ne.BLOCK_LITERAL),t!==ne.QUOTE_DOUBLE){const c=Math.max(l.options.lineWidth-l.indent.length,l.options.minContentWidth),d=Math.ceil(s.length/c),u=new Array(d);for(let m=0,f=0;m<d;++m,f+=c)u[m]=s.substr(f,c);s=u.join(t===ne.BLOCK_LITERAL?`
`:" ")}return Xi({comment:e,type:t,value:s},l,i,a)}};function hf(e,t){if(Ul(e))for(let n=0;n<e.items.length;++n){let l=e.items[n];if(!we(l)){if(ql(l)){l.items.length>1&&t("Each pair must have its own sequence indicator");const i=l.items[0]||new ze(new ne(null));if(l.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${l.commentBefore}
${i.key.commentBefore}`:l.commentBefore),l.comment){const a=i.value??i.key;a.comment=a.comment?`${l.comment}
${a.comment}`:l.comment}l=i}e.items[n]=we(l)?l:new ze(l)}}else t("Expected a sequence for this tag");return e}function _f(e,t,n){const{replacer:l}=n,i=new Sn(e);i.tag="tag:yaml.org,2002:pairs";let a=0;if(t&&Symbol.iterator in Object(t))for(let r of t){typeof l=="function"&&(r=l.call(t,String(a++),r));let s,c;if(Array.isArray(r))if(r.length===2)s=r[0],c=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const d=Object.keys(r);if(d.length===1)s=d[0],c=r[s];else throw new TypeError(`Expected tuple with one key, not ${d.length} keys`)}else s=r;i.items.push(Bc(s,c,n))}return i}const qc={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:hf,createNode:_f};class Tl extends Sn{constructor(){super(),this.add=pt.prototype.add.bind(this),this.delete=pt.prototype.delete.bind(this),this.get=pt.prototype.get.bind(this),this.has=pt.prototype.has.bind(this),this.set=pt.prototype.set.bind(this),this.tag=Tl.tag}toJSON(t,n){if(!n)return super.toJSON(t);const l=new Map;n!=null&&n.onCreate&&n.onCreate(l);for(const i of this.items){let a,r;if(we(i)?(a=Ct(i.key,"",n),r=Ct(i.value,a,n)):a=Ct(i,"",n),l.has(a))throw new Error("Ordered maps must not include duplicate keys");l.set(a,r)}return l}static from(t,n,l){const i=_f(t,n,l),a=new this;return a.items=i.items,a}}Tl.tag="tag:yaml.org,2002:omap";const Uc={collection:"seq",identify:e=>e instanceof Map,nodeClass:Tl,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const n=hf(e,t),l=[];for(const{key:i}of n.items)ge(i)&&(l.includes(i.value)?t(`Ordered maps must not include duplicate keys: ${i.value}`):l.push(i.value));return Object.assign(new Tl,n)},createNode:(e,t,n)=>Tl.from(e,t,n)};function xf({value:e,source:t},n){return t&&(e?vf:wf).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}const vf={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new ne(!0),stringify:xf},wf={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new ne(!1),stringify:xf},Bh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:It},Oh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():It(e)}},jh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new ne(parseFloat(e.replace(/_/g,""))),n=e.indexOf(".");if(n!==-1){const l=e.substring(n+1).replace(/_/g,"");l[l.length-1]==="0"&&(t.minFractionDigits=l.length)}return t},stringify:It},Ji=e=>typeof e=="bigint"||Number.isInteger(e);function Qr(e,t,n,{intAsBigInt:l}){const i=e[0];if((i==="-"||i==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),l){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const r=BigInt(e);return i==="-"?BigInt(-1)*r:r}const a=parseInt(e,n);return i==="-"?-1*a:a}function $c(e,t,n){const{value:l}=e;if(Ji(l)){const i=l.toString(t);return l<0?"-"+n+i.substr(1):n+i}return It(e)}const Fh={identify:Ji,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>Qr(e,2,2,n),stringify:e=>$c(e,2,"0b")},qh={identify:Ji,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>Qr(e,1,8,n),stringify:e=>$c(e,8,"0")},Uh={identify:Ji,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>Qr(e,0,10,n),stringify:It},$h={identify:Ji,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>Qr(e,2,16,n),stringify:e=>$c(e,16,"0x")};class Dl extends pt{constructor(t){super(t),this.tag=Dl.tag}add(t){let n;we(t)?n=t:t&&typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?n=new ze(t.key,null):n=new ze(t,null),Mn(this.items,n.key)||this.items.push(n)}get(t,n){const l=Mn(this.items,t);return!n&&we(l)?ge(l.key)?l.key.value:l.key:l}set(t,n){if(typeof n!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);const l=Mn(this.items,t);l&&!n?this.items.splice(this.items.indexOf(l),1):!l&&n&&this.items.push(new ze(t))}toJSON(t,n){return super.toJSON(t,n,Set)}toString(t,n,l){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),n,l);throw new Error("Set items must all have null values")}static from(t,n,l){const{replacer:i}=l,a=new this(t);if(n&&Symbol.iterator in Object(n))for(let r of n)typeof i=="function"&&(r=i.call(n,r,r)),a.items.push(Bc(r,null,l));return a}}Dl.tag="tag:yaml.org,2002:set";const Wc={collection:"map",identify:e=>e instanceof Set,nodeClass:Dl,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,n)=>Dl.from(e,t,n),resolve(e,t){if(ql(e)){if(e.hasAllNullValues(!0))return Object.assign(new Dl,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function Hc(e,t){const n=e[0],l=n==="-"||n==="+"?e.substring(1):e,i=r=>t?BigInt(r):Number(r),a=l.replace(/_/g,"").split(":").reduce((r,s)=>r*i(60)+i(s),i(0));return n==="-"?i(-1)*a:a}function Cf(e){let{value:t}=e,n=r=>r;if(typeof t=="bigint")n=r=>BigInt(r);else if(isNaN(t)||!isFinite(t))return It(e);let l="";t<0&&(l="-",t*=n(-1));const i=n(60),a=[t%i];return t<60?a.unshift(0):(t=(t-a[0])/i,a.unshift(t%i),t>=60&&(t=(t-a[0])/i,a.unshift(t))),l+a.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Sf={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>Hc(e,n),stringify:Cf},Lf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Hc(e,!1),stringify:Cf},Yr={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(Yr.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,n,l,i,a,r,s]=t.map(Number),c=t[7]?Number((t[7]+"00").substr(1,3)):0;let d=Date.UTC(n,l-1,i,a||0,r||0,s||0,c);const u=t[8];if(u&&u!=="Z"){let m=Hc(u,!1);Math.abs(m)<30&&(m*=60),d-=6e4*m}return new Date(d)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},yu=[$l,Wl,Hr,zr,vf,wf,Fh,qh,Uh,$h,Bh,Oh,jh,Fc,Xt,Uc,qc,Wc,Sf,Lf,Yr],gu=new Map([["core",Rh],["failsafe",[$l,Wl,Hr]],["json",Mh],["yaml11",yu],["yaml-1.1",yu]]),bu={binary:Fc,bool:Oc,float:pf,floatExp:mf,floatNaN:uf,floatTime:Lf,int:gf,intHex:bf,intOct:yf,intTime:Sf,map:$l,merge:Xt,null:zr,omap:Uc,pairs:qc,seq:Wl,set:Wc,timestamp:Yr},Wh={"tag:yaml.org,2002:binary":Fc,"tag:yaml.org,2002:merge":Xt,"tag:yaml.org,2002:omap":Uc,"tag:yaml.org,2002:pairs":qc,"tag:yaml.org,2002:set":Wc,"tag:yaml.org,2002:timestamp":Yr};function Ao(e,t,n){const l=gu.get(t);if(l&&!e)return n&&!l.includes(Xt)?l.concat(Xt):l.slice();let i=l;if(!i)if(Array.isArray(e))i=[];else{const a=Array.from(gu.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${a} or define customTags array`)}if(Array.isArray(e))for(const a of e)i=i.concat(a);else typeof e=="function"&&(i=e(i.slice()));return n&&(i=i.concat(Xt)),i.reduce((a,r)=>{const s=typeof r=="string"?bu[r]:r;if(!s){const c=JSON.stringify(r),d=Object.keys(bu).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${d}`)}return a.includes(s)||a.push(s),a},[])}const Hh=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class Xr{constructor({compat:t,customTags:n,merge:l,resolveKnownTags:i,schema:a,sortMapEntries:r,toStringDefaults:s}){this.compat=Array.isArray(t)?Ao(t,"compat"):t?Ao(null,t):null,this.name=typeof a=="string"&&a||"core",this.knownTags=i?Wh:{},this.tags=Ao(n,this.name,l),this.toStringOptions=s??null,Object.defineProperty(this,vn,{value:$l}),Object.defineProperty(this,Ut,{value:Hr}),Object.defineProperty(this,Fl,{value:Wl}),this.sortMapEntries=typeof r=="function"?r:r===!0?Hh:null}clone(){const t=Object.create(Xr.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function zh(e,t){var c;const n=[];let l=t.directives===!0;if(t.directives!==!1&&e.directives){const d=e.directives.toString(e);d?(n.push(d),l=!0):e.directives.docStart&&(l=!0)}l&&n.push("---");const i=rf(e,t),{commentString:a}=i.options;if(e.commentBefore){n.length!==1&&n.unshift("");const d=a(e.commentBefore);n.unshift(Qt(d,""))}let r=!1,s=null;if(e.contents){if(De(e.contents)){if(e.contents.spaceBefore&&l&&n.push(""),e.contents.commentBefore){const m=a(e.contents.commentBefore);n.push(Qt(m,""))}i.forceBlockIndent=!!e.comment,s=e.contents.comment}const d=s?void 0:()=>r=!0;let u=Gl(e.contents,i,()=>s=null,d);s&&(u+=Gn(u,"",a(s))),(u[0]==="|"||u[0]===">")&&n[n.length-1]==="---"?n[n.length-1]=`--- ${u}`:n.push(u)}else n.push(Gl(e.contents,i));if((c=e.directives)!=null&&c.docEnd)if(e.comment){const d=a(e.comment);d.includes(`
`)?(n.push("..."),n.push(Qt(d,""))):n.push(`... ${d}`)}else n.push("...");else{let d=e.comment;d&&r&&(d=d.replace(/^\n+/,"")),d&&((!r||s)&&n[n.length-1]!==""&&n.push(""),n.push(Qt(a(d),"")))}return n.join(`
`)+`
`}class Hl{constructor(t,n,l){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,kt,{value:Vs});let i=null;typeof n=="function"||Array.isArray(n)?i=n:l===void 0&&n&&(l=n,n=void 0);const a=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},l);this.options=a;let{version:r}=a;l!=null&&l._directives?(this.directives=l._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new Je({version:r}),this.setSchema(r,l),this.contents=t===void 0?null:this.createNode(t,i,l)}clone(){const t=Object.create(Hl.prototype,{[kt]:{value:Vs}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=De(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){ll(this.contents)&&this.contents.add(t)}addIn(t,n){ll(this.contents)&&this.contents.addIn(t,n)}createAlias(t,n){if(!t.anchor){const l=ef(this);t.anchor=!n||l.has(n)?tf(n||"a",l):n}return new qr(t.anchor)}createNode(t,n,l){let i;if(typeof n=="function")t=n.call({"":t},"",t),i=n;else if(Array.isArray(n)){const _=y=>typeof y=="number"||y instanceof String||y instanceof Number,g=n.filter(_).map(String);g.length>0&&(n=n.concat(g)),i=n}else l===void 0&&n&&(l=n,n=void 0);const{aliasDuplicateObjects:a,anchorPrefix:r,flow:s,keepUndefined:c,onTagObj:d,tag:u}=l??{},{onAnchor:m,setAnchors:f,sourceObjects:p}=vh(this,r||"a"),x={aliasDuplicateObjects:a??!0,keepUndefined:c??!1,onAnchor:m,onTagObj:d,replacer:i,schema:this.schema,sourceObjects:p},b=Ui(t,u,x);return s&&ke(b)&&(b.flow=!0),f(),b}createPair(t,n,l={}){const i=this.createNode(t,null,l),a=this.createNode(n,null,l);return new ze(i,a)}delete(t){return ll(this.contents)?this.contents.delete(t):!1}deleteIn(t){return fi(t)?this.contents==null?!1:(this.contents=null,!0):ll(this.contents)?this.contents.deleteIn(t):!1}get(t,n){return ke(this.contents)?this.contents.get(t,n):void 0}getIn(t,n){return fi(t)?!n&&ge(this.contents)?this.contents.value:this.contents:ke(this.contents)?this.contents.getIn(t,n):void 0}has(t){return ke(this.contents)?this.contents.has(t):!1}hasIn(t){return fi(t)?this.contents!==void 0:ke(this.contents)?this.contents.hasIn(t):!1}set(t,n){this.contents==null?this.contents=br(this.schema,[t],n):ll(this.contents)&&this.contents.set(t,n)}setIn(t,n){fi(t)?this.contents=n:this.contents==null?this.contents=br(this.schema,Array.from(t),n):ll(this.contents)&&this.contents.setIn(t,n)}setSchema(t,n={}){typeof t=="number"&&(t=String(t));let l;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Je({version:"1.1"}),l={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new Je({version:t}),l={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,l=null;break;default:{const i=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(n.schema instanceof Object)this.schema=n.schema;else if(l)this.schema=new Xr(Object.assign(l,n));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:n,mapAsMap:l,maxAliasCount:i,onAnchor:a,reviver:r}={}){const s={anchors:new Map,doc:this,keep:!t,mapAsMap:l===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},c=Ct(this.contents,n??"",s);if(typeof a=="function")for(const{count:d,res:u}of s.anchors.values())a(u,d);return typeof r=="function"?_l(r,{"":c},"",c):c}toJSON(t,n){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:n})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const n=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${n}`)}return zh(this,t)}}function ll(e){if(ke(e))return!0;throw new Error("Expected a YAML collection as document contents")}class zc extends Error{constructor(t,n,l,i){super(),this.name=t,this.code=l,this.message=i,this.pos=n}}class Bn extends zc{constructor(t,n,l){super("YAMLParseError",t,n,l)}}class kf extends zc{constructor(t,n,l){super("YAMLWarning",t,n,l)}}const _r=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(s=>t.linePos(s));const{line:l,col:i}=n.linePos[0];n.message+=` at line ${l}, column ${i}`;let a=i-1,r=e.substring(t.lineStarts[l-1],t.lineStarts[l]).replace(/[\n\r]+$/,"");if(a>=60&&r.length>80){const s=Math.min(a-39,r.length-79);r="…"+r.substring(s),a-=s-1}if(r.length>80&&(r=r.substring(0,79)+"…"),l>1&&/^ *$/.test(r.substring(0,a))){let s=e.substring(t.lineStarts[l-2],t.lineStarts[l-1]);s.length>80&&(s=s.substring(0,79)+`…
`),r=s+r}if(/[^ ]/.test(r)){let s=1;const c=n.linePos[1];c&&c.line===l&&c.col>i&&(s=Math.max(1,Math.min(c.col-i,80-a)));const d=" ".repeat(a)+"^".repeat(s);n.message+=`:

${r}
${d}
`}};function Ml(e,{flow:t,indicator:n,next:l,offset:i,onError:a,parentIndent:r,startOnNewline:s}){let c=!1,d=s,u=s,m="",f="",p=!1,x=!1,b=null,_=null,g=null,y=null,h=null,v=null,L=null;for(const S of e)switch(x&&(S.type!=="space"&&S.type!=="newline"&&S.type!=="comma"&&a(S.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),b&&(d&&S.type!=="comment"&&S.type!=="newline"&&a(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),b=null),S.type){case"space":!t&&(n!=="doc-start"||(l==null?void 0:l.type)!=="flow-collection")&&S.source.includes("	")&&(b=S),u=!0;break;case"comment":{u||a(S,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const B=S.source.substring(1)||" ";m?m+=f+B:m=B,f="",d=!1;break}case"newline":d?m?m+=S.source:(!v||n!=="seq-item-ind")&&(c=!0):f+=S.source,d=!0,p=!0,(_||g)&&(y=S),u=!0;break;case"anchor":_&&a(S,"MULTIPLE_ANCHORS","A node can have at most one anchor"),S.source.endsWith(":")&&a(S.offset+S.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=S,L??(L=S.offset),d=!1,u=!1,x=!0;break;case"tag":{g&&a(S,"MULTIPLE_TAGS","A node can have at most one tag"),g=S,L??(L=S.offset),d=!1,u=!1,x=!0;break}case n:(_||g)&&a(S,"BAD_PROP_ORDER",`Anchors and tags must be after the ${S.source} indicator`),v&&a(S,"UNEXPECTED_TOKEN",`Unexpected ${S.source} in ${t??"collection"}`),v=S,d=n==="seq-item-ind"||n==="explicit-key-ind",u=!1;break;case"comma":if(t){h&&a(S,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),h=S,d=!1,u=!1;break}default:a(S,"UNEXPECTED_TOKEN",`Unexpected ${S.type} token`),d=!1,u=!1}const T=e[e.length-1],C=T?T.offset+T.source.length:i;return x&&l&&l.type!=="space"&&l.type!=="newline"&&l.type!=="comma"&&(l.type!=="scalar"||l.source!=="")&&a(l.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),b&&(d&&b.indent<=r||(l==null?void 0:l.type)==="block-map"||(l==null?void 0:l.type)==="block-seq")&&a(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:h,found:v,spaceBefore:c,comment:m,hasNewline:p,anchor:_,tag:g,newlineAfterProp:y,end:C,start:L??C}}function $i(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const n of t.start)if(n.type==="newline")return!0;if(t.sep){for(const n of t.sep)if(n.type==="newline")return!0}if($i(t.key)||$i(t.value))return!0}return!1;default:return!0}}function Ms(e,t,n){if((t==null?void 0:t.type)==="flow-collection"){const l=t.end[0];l.indent===e&&(l.source==="]"||l.source==="}")&&$i(t)&&n(l,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Tf(e,t,n){const{uniqueKeys:l}=e.options;if(l===!1)return!1;const i=typeof l=="function"?l:(a,r)=>a===r||ge(a)&&ge(r)&&a.value===r.value;return t.some(a=>i(a.key,n))}const hu="All mapping items must start at the same column";function Kh({composeNode:e,composeEmptyNode:t},n,l,i,a){var u;const r=(a==null?void 0:a.nodeClass)??pt,s=new r(n.schema);n.atRoot&&(n.atRoot=!1);let c=l.offset,d=null;for(const m of l.items){const{start:f,key:p,sep:x,value:b}=m,_=Ml(f,{indicator:"explicit-key-ind",next:p??(x==null?void 0:x[0]),offset:c,onError:i,parentIndent:l.indent,startOnNewline:!0}),g=!_.found;if(g){if(p&&(p.type==="block-seq"?i(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==l.indent&&i(c,"BAD_INDENT",hu)),!_.anchor&&!_.tag&&!x){d=_.end,_.comment&&(s.comment?s.comment+=`
`+_.comment:s.comment=_.comment);continue}(_.newlineAfterProp||$i(p))&&i(p??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=_.found)==null?void 0:u.indent)!==l.indent&&i(c,"BAD_INDENT",hu);n.atKey=!0;const y=_.end,h=p?e(n,p,_,i):t(n,y,f,null,_,i);n.schema.compat&&Ms(l.indent,p,i),n.atKey=!1,Tf(n,s.items,h)&&i(y,"DUPLICATE_KEY","Map keys must be unique");const v=Ml(x??[],{indicator:"map-value-ind",next:b,offset:h.range[2],onError:i,parentIndent:l.indent,startOnNewline:!p||p.type==="block-scalar"});if(c=v.end,v.found){g&&((b==null?void 0:b.type)==="block-map"&&!v.hasNewline&&i(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),n.options.strict&&_.start<v.found.offset-1024&&i(h.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const L=b?e(n,b,v,i):t(n,c,x,null,v,i);n.schema.compat&&Ms(l.indent,b,i),c=L.range[2];const T=new ze(h,L);n.options.keepSourceTokens&&(T.srcToken=m),s.items.push(T)}else{g&&i(h.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(h.comment?h.comment+=`
`+v.comment:h.comment=v.comment);const L=new ze(h);n.options.keepSourceTokens&&(L.srcToken=m),s.items.push(L)}}return d&&d<c&&i(d,"IMPOSSIBLE","Map comment with trailing content"),s.range=[l.offset,c,d??c],s}function Qh({composeNode:e,composeEmptyNode:t},n,l,i,a){const r=(a==null?void 0:a.nodeClass)??Sn,s=new r(n.schema);n.atRoot&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let c=l.offset,d=null;for(const{start:u,value:m}of l.items){const f=Ml(u,{indicator:"seq-item-ind",next:m,offset:c,onError:i,parentIndent:l.indent,startOnNewline:!0});if(!f.found)if(f.anchor||f.tag||m)m&&m.type==="block-seq"?i(f.end,"BAD_INDENT","All sequence items must start at the same column"):i(c,"MISSING_CHAR","Sequence item without - indicator");else{d=f.end,f.comment&&(s.comment=f.comment);continue}const p=m?e(n,m,f,i):t(n,f.end,u,null,f,i);n.schema.compat&&Ms(l.indent,m,i),c=p.range[2],s.items.push(p)}return s.range=[l.offset,c,d??c],s}function Zi(e,t,n,l){let i="";if(e){let a=!1,r="";for(const s of e){const{source:c,type:d}=s;switch(d){case"space":a=!0;break;case"comment":{n&&!a&&l(s,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=c.substring(1)||" ";i?i+=r+u:i=u,r="";break}case"newline":i&&(r+=c),a=!0;break;default:l(s,"UNEXPECTED_TOKEN",`Unexpected ${d} at node end`)}t+=c.length}}return{comment:i,offset:t}}const Vo="Block collections are not allowed within flow collections",Ro=e=>e&&(e.type==="block-map"||e.type==="block-seq");function Yh({composeNode:e,composeEmptyNode:t},n,l,i,a){const r=l.start.source==="{",s=r?"flow map":"flow sequence",c=(a==null?void 0:a.nodeClass)??(r?pt:Sn),d=new c(n.schema);d.flow=!0;const u=n.atRoot;u&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let m=l.offset+l.start.source.length;for(let _=0;_<l.items.length;++_){const g=l.items[_],{start:y,key:h,sep:v,value:L}=g,T=Ml(y,{flow:s,indicator:"explicit-key-ind",next:h??(v==null?void 0:v[0]),offset:m,onError:i,parentIndent:l.indent,startOnNewline:!1});if(!T.found){if(!T.anchor&&!T.tag&&!v&&!L){_===0&&T.comma?i(T.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`):_<l.items.length-1&&i(T.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${s}`),T.comment&&(d.comment?d.comment+=`
`+T.comment:d.comment=T.comment),m=T.end;continue}!r&&n.options.strict&&$i(h)&&i(h,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)T.comma&&i(T.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`);else if(T.comma||i(T.start,"MISSING_CHAR",`Missing , between ${s} items`),T.comment){let C="";e:for(const S of y)switch(S.type){case"comma":case"space":break;case"comment":C=S.source.substring(1);break e;default:break e}if(C){let S=d.items[d.items.length-1];we(S)&&(S=S.value??S.key),S.comment?S.comment+=`
`+C:S.comment=C,T.comment=T.comment.substring(C.length+1)}}if(!r&&!v&&!T.found){const C=L?e(n,L,T,i):t(n,T.end,v,null,T,i);d.items.push(C),m=C.range[2],Ro(L)&&i(C.range,"BLOCK_IN_FLOW",Vo)}else{n.atKey=!0;const C=T.end,S=h?e(n,h,T,i):t(n,C,y,null,T,i);Ro(h)&&i(S.range,"BLOCK_IN_FLOW",Vo),n.atKey=!1;const B=Ml(v??[],{flow:s,indicator:"map-value-ind",next:L,offset:S.range[2],onError:i,parentIndent:l.indent,startOnNewline:!1});if(B.found){if(!r&&!T.found&&n.options.strict){if(v)for(const N of v){if(N===B.found)break;if(N.type==="newline"){i(N,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}T.start<B.found.offset-1024&&i(B.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else L&&("source"in L&&L.source&&L.source[0]===":"?i(L,"MISSING_CHAR",`Missing space after : in ${s}`):i(B.start,"MISSING_CHAR",`Missing , or : between ${s} items`));const O=L?e(n,L,B,i):B.found?t(n,B.end,v,null,B,i):null;O?Ro(L)&&i(O.range,"BLOCK_IN_FLOW",Vo):B.comment&&(S.comment?S.comment+=`
`+B.comment:S.comment=B.comment);const Y=new ze(S,O);if(n.options.keepSourceTokens&&(Y.srcToken=g),r){const N=d;Tf(n,N.items,S)&&i(C,"DUPLICATE_KEY","Map keys must be unique"),N.items.push(Y)}else{const N=new pt(n.schema);N.flow=!0,N.items.push(Y);const q=(O??S).range;N.range=[S.range[0],q[1],q[2]],d.items.push(N)}m=O?O.range[2]:B.end}}const f=r?"}":"]",[p,...x]=l.end;let b=m;if(p&&p.source===f)b=p.offset+p.source.length;else{const _=s[0].toUpperCase()+s.substring(1),g=u?`${_} must end with a ${f}`:`${_} in block collection must be sufficiently indented and end with a ${f}`;i(m,u?"MISSING_CHAR":"BAD_INDENT",g),p&&p.source.length!==1&&x.unshift(p)}if(x.length>0){const _=Zi(x,b,n.options.strict,i);_.comment&&(d.comment?d.comment+=`
`+_.comment:d.comment=_.comment),d.range=[l.offset,b,_.offset]}else d.range=[l.offset,b,b];return d}function Io(e,t,n,l,i,a){const r=n.type==="block-map"?Kh(e,t,n,l,a):n.type==="block-seq"?Qh(e,t,n,l,a):Yh(e,t,n,l,a),s=r.constructor;return i==="!"||i===s.tagName?(r.tag=s.tagName,r):(i&&(r.tag=i),r)}function Xh(e,t,n,l,i){var f;const a=l.tag,r=a?t.directives.tagName(a.source,p=>i(a,"TAG_RESOLVE_FAILED",p)):null;if(n.type==="block-seq"){const{anchor:p,newlineAfterProp:x}=l,b=p&&a?p.offset>a.offset?p:a:p??a;b&&(!x||x.offset<b.offset)&&i(b,"MISSING_CHAR","Missing newline after block sequence props")}const s=n.type==="block-map"?"map":n.type==="block-seq"?"seq":n.start.source==="{"?"map":"seq";if(!a||!r||r==="!"||r===pt.tagName&&s==="map"||r===Sn.tagName&&s==="seq")return Io(e,t,n,i,r);let c=t.schema.tags.find(p=>p.tag===r&&p.collection===s);if(!c){const p=t.schema.knownTags[r];if(p&&p.collection===s)t.schema.tags.push(Object.assign({},p,{default:!1})),c=p;else return p?i(a,"BAD_COLLECTION_TYPE",`${p.tag} used for ${s} collection, but expects ${p.collection??"scalar"}`,!0):i(a,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),Io(e,t,n,i,r)}const d=Io(e,t,n,i,r,c),u=((f=c.resolve)==null?void 0:f.call(c,d,p=>i(a,"TAG_RESOLVE_FAILED",p),t.options))??d,m=De(u)?u:new ne(u);return m.range=d.range,m.tag=r,c!=null&&c.format&&(m.format=c.format),m}function Df(e,t,n){const l=t.offset,i=Jh(t,e.options.strict,n);if(!i)return{value:"",type:null,comment:"",range:[l,l,l]};const a=i.mode===">"?ne.BLOCK_FOLDED:ne.BLOCK_LITERAL,r=t.source?Zh(t.source):[];let s=r.length;for(let b=r.length-1;b>=0;--b){const _=r[b][1];if(_===""||_==="\r")s=b;else break}if(s===0){const b=i.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let _=l+i.length;return t.source&&(_+=t.source.length),{value:b,type:a,comment:i.comment,range:[l,_,_]}}let c=t.indent+i.indent,d=t.offset+i.length,u=0;for(let b=0;b<s;++b){const[_,g]=r[b];if(g===""||g==="\r")i.indent===0&&_.length>c&&(c=_.length);else{_.length<c&&n(d+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(c=_.length),u=b,c===0&&!e.atRoot&&n(d,"BAD_INDENT","Block scalar values in collections must be indented");break}d+=_.length+g.length+1}for(let b=r.length-1;b>=s;--b)r[b][0].length>c&&(s=b+1);let m="",f="",p=!1;for(let b=0;b<u;++b)m+=r[b][0].slice(c)+`
`;for(let b=u;b<s;++b){let[_,g]=r[b];d+=_.length+g.length+1;const y=g[g.length-1]==="\r";if(y&&(g=g.slice(0,-1)),g&&_.length<c){const v=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;n(d-g.length-(y?2:1),"BAD_INDENT",v),_=""}a===ne.BLOCK_LITERAL?(m+=f+_.slice(c)+g,f=`
`):_.length>c||g[0]==="	"?(f===" "?f=`
`:!p&&f===`
`&&(f=`

`),m+=f+_.slice(c)+g,f=`
`,p=!0):g===""?f===`
`?m+=`
`:f=`
`:(m+=f+g,f=" ",p=!1)}switch(i.chomp){case"-":break;case"+":for(let b=s;b<r.length;++b)m+=`
`+r[b][0].slice(c);m[m.length-1]!==`
`&&(m+=`
`);break;default:m+=`
`}const x=l+i.length+t.source.length;return{value:m,type:a,comment:i.comment,range:[l,x,x]}}function Jh({offset:e,props:t},n,l){if(t[0].type!=="block-scalar-header")return l(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=t[0],a=i[0];let r=0,s="",c=-1;for(let f=1;f<i.length;++f){const p=i[f];if(!s&&(p==="-"||p==="+"))s=p;else{const x=Number(p);!r&&x?r=x:c===-1&&(c=e+f)}}c!==-1&&l(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let d=!1,u="",m=i.length;for(let f=1;f<t.length;++f){const p=t[f];switch(p.type){case"space":d=!0;case"newline":m+=p.source.length;break;case"comment":n&&!d&&l(p,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),m+=p.source.length,u=p.source.substring(1);break;case"error":l(p,"UNEXPECTED_TOKEN",p.message),m+=p.source.length;break;default:{const x=`Unexpected token in block scalar header: ${p.type}`;l(p,"UNEXPECTED_TOKEN",x);const b=p.source;b&&typeof b=="string"&&(m+=b.length)}}}return{mode:a,indent:r,chomp:s,comment:u,length:m}}function Zh(e){const t=e.split(/\n( *)/),n=t[0],l=n.match(/^( *)/),a=[l!=null&&l[1]?[l[1],n.slice(l[1].length)]:["",n]];for(let r=1;r<t.length;r+=2)a.push([t[r],t[r+1]]);return a}function Ef(e,t,n){const{offset:l,type:i,source:a,end:r}=e;let s,c;const d=(f,p,x)=>n(l+f,p,x);switch(i){case"scalar":s=ne.PLAIN,c=e_(a,d);break;case"single-quoted-scalar":s=ne.QUOTE_SINGLE,c=t_(a,d);break;case"double-quoted-scalar":s=ne.QUOTE_DOUBLE,c=n_(a,d);break;default:return n(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[l,l+a.length,l+a.length]}}const u=l+a.length,m=Zi(r,u,t,n);return{value:c,type:s,comment:m.comment,range:[l,u,m.offset]}}function e_(e,t){let n="";switch(e[0]){case"	":n="a tab character";break;case",":n="flow indicator character ,";break;case"%":n="directive indicator character %";break;case"|":case">":{n=`block scalar indicator ${e[0]}`;break}case"@":case"`":{n=`reserved character ${e[0]}`;break}}return n&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${n}`),Pf(e)}function t_(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),Pf(e.slice(1,-1)).replace(/''/g,"'")}function Pf(e){let t,n;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),n=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let l=t.exec(e);if(!l)return e;let i=l[1],a=" ",r=t.lastIndex;for(n.lastIndex=r;l=n.exec(e);)l[1]===""?a===`
`?i+=a:a=`
`:(i+=a+l[1],a=" "),r=n.lastIndex;const s=/[ \t]*(.*)/sy;return s.lastIndex=r,l=s.exec(e),i+a+((l==null?void 0:l[1])??"")}function n_(e,t){let n="";for(let l=1;l<e.length-1;++l){const i=e[l];if(!(i==="\r"&&e[l+1]===`
`))if(i===`
`){const{fold:a,offset:r}=l_(e,l);n+=a,l=r}else if(i==="\\"){let a=e[++l];const r=i_[a];if(r)n+=r;else if(a===`
`)for(a=e[l+1];a===" "||a==="	";)a=e[++l+1];else if(a==="\r"&&e[l+1]===`
`)for(a=e[++l+1];a===" "||a==="	";)a=e[++l+1];else if(a==="x"||a==="u"||a==="U"){const s={x:2,u:4,U:8}[a];n+=a_(e,l+1,s,t),l+=s}else{const s=e.substr(l-1,2);t(l-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),n+=s}}else if(i===" "||i==="	"){const a=l;let r=e[l+1];for(;r===" "||r==="	";)r=e[++l+1];r!==`
`&&!(r==="\r"&&e[l+2]===`
`)&&(n+=l>a?e.slice(a,l+1):i)}else n+=i}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),n}function l_(e,t){let n="",l=e[t+1];for(;(l===" "||l==="	"||l===`
`||l==="\r")&&!(l==="\r"&&e[t+2]!==`
`);)l===`
`&&(n+=`
`),t+=1,l=e[t+1];return n||(n=" "),{fold:n,offset:t}}const i_={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function a_(e,t,n,l){const i=e.substr(t,n),r=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(r)){const s=e.substr(t-2,n+2);return l(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),s}return String.fromCodePoint(r)}function Nf(e,t,n,l){const{value:i,type:a,comment:r,range:s}=t.type==="block-scalar"?Df(e,t,l):Ef(t,e.options.strict,l),c=n?e.directives.tagName(n.source,m=>l(n,"TAG_RESOLVE_FAILED",m)):null;let d;e.options.stringKeys&&e.atKey?d=e.schema[Ut]:c?d=r_(e.schema,i,c,n,l):t.type==="scalar"?d=o_(e,i,t,l):d=e.schema[Ut];let u;try{const m=d.resolve(i,f=>l(n??t,"TAG_RESOLVE_FAILED",f),e.options);u=ge(m)?m:new ne(m)}catch(m){const f=m instanceof Error?m.message:String(m);l(n??t,"TAG_RESOLVE_FAILED",f),u=new ne(i)}return u.range=s,u.source=i,a&&(u.type=a),c&&(u.tag=c),d.format&&(u.format=d.format),r&&(u.comment=r),u}function r_(e,t,n,l,i){var s;if(n==="!")return e[Ut];const a=[];for(const c of e.tags)if(!c.collection&&c.tag===n)if(c.default&&c.test)a.push(c);else return c;for(const c of a)if((s=c.test)!=null&&s.test(t))return c;const r=e.knownTags[n];return r&&!r.collection?(e.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(i(l,"TAG_RESOLVE_FAILED",`Unresolved tag: ${n}`,n!=="tag:yaml.org,2002:str"),e[Ut])}function o_({atKey:e,directives:t,schema:n},l,i,a){const r=n.tags.find(s=>{var c;return(s.default===!0||e&&s.default==="key")&&((c=s.test)==null?void 0:c.test(l))})||n[Ut];if(n.compat){const s=n.compat.find(c=>{var d;return c.default&&((d=c.test)==null?void 0:d.test(l))})??n[Ut];if(r.tag!==s.tag){const c=t.tagString(r.tag),d=t.tagString(s.tag),u=`Value may be parsed as either ${c} or ${d}`;a(i,"TAG_RESOLVE_FAILED",u,!0)}}return r}function s_(e,t,n){if(t){n??(n=t.length);for(let l=n-1;l>=0;--l){let i=t[l];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=t[++l];(i==null?void 0:i.type)==="space";)e+=i.source.length,i=t[++l];break}}return e}const c_={composeNode:Af,composeEmptyNode:Kc};function Af(e,t,n,l){const i=e.atKey,{spaceBefore:a,comment:r,anchor:s,tag:c}=n;let d,u=!0;switch(t.type){case"alias":d=d_(e,t,l),(s||c)&&l(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":d=Nf(e,t,c,l),s&&(d.anchor=s.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":d=Xh(c_,e,t,n,l),s&&(d.anchor=s.source.substring(1));break;default:{const m=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;l(t,"UNEXPECTED_TOKEN",m),d=Kc(e,t.offset,void 0,null,n,l),u=!1}}return s&&d.anchor===""&&l(s,"BAD_ALIAS","Anchor cannot be an empty string"),i&&e.options.stringKeys&&(!ge(d)||typeof d.value!="string"||d.tag&&d.tag!=="tag:yaml.org,2002:str")&&l(c??t,"NON_STRING_KEY","With stringKeys, all keys must be strings"),a&&(d.spaceBefore=!0),r&&(t.type==="scalar"&&t.source===""?d.comment=r:d.commentBefore=r),e.options.keepSourceTokens&&u&&(d.srcToken=t),d}function Kc(e,t,n,l,{spaceBefore:i,comment:a,anchor:r,tag:s,end:c},d){const u={type:"scalar",offset:s_(t,n,l),indent:-1,source:""},m=Nf(e,u,s,d);return r&&(m.anchor=r.source.substring(1),m.anchor===""&&d(r,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(m.spaceBefore=!0),a&&(m.comment=a,m.range[2]=c),m}function d_({options:e},{offset:t,source:n,end:l},i){const a=new qr(n.substring(1));a.source===""&&i(t,"BAD_ALIAS","Alias cannot be an empty string"),a.source.endsWith(":")&&i(t+n.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=t+n.length,s=Zi(l,r,e.strict,i);return a.range=[t,r,s.offset],s.comment&&(a.comment=s.comment),a}function u_(e,t,{offset:n,start:l,value:i,end:a},r){const s=Object.assign({_directives:t},e),c=new Hl(void 0,s),d={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},u=Ml(l,{indicator:"doc-start",next:i??(a==null?void 0:a[0]),offset:n,onError:r,parentIndent:0,startOnNewline:!0});u.found&&(c.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&r(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=i?Af(d,i,u,r):Kc(d,u.end,l,null,u,r);const m=c.contents.range[2],f=Zi(a,m,!1,r);return f.comment&&(c.comment=f.comment),c.range=[n,m,f.offset],c}function ii(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:n}=e;return[t,t+(typeof n=="string"?n.length:1)]}function _u(e){var i;let t="",n=!1,l=!1;for(let a=0;a<e.length;++a){const r=e[a];switch(r[0]){case"#":t+=(t===""?"":l?`

`:`
`)+(r.substring(1)||" "),n=!0,l=!1;break;case"%":((i=e[a+1])==null?void 0:i[0])!=="#"&&(a+=1),n=!1;break;default:n||(l=!0),n=!1}}return{comment:t,afterEmptyLine:l}}class Qc{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(n,l,i,a)=>{const r=ii(n);a?this.warnings.push(new kf(r,l,i)):this.errors.push(new Bn(r,l,i))},this.directives=new Je({version:t.version||"1.2"}),this.options=t}decorate(t,n){const{comment:l,afterEmptyLine:i}=_u(this.prelude);if(l){const a=t.contents;if(n)t.comment=t.comment?`${t.comment}
${l}`:l;else if(i||t.directives.docStart||!a)t.commentBefore=l;else if(ke(a)&&!a.flow&&a.items.length>0){let r=a.items[0];we(r)&&(r=r.key);const s=r.commentBefore;r.commentBefore=s?`${l}
${s}`:l}else{const r=a.commentBefore;a.commentBefore=r?`${l}
${r}`:l}}n?(Array.prototype.push.apply(t.errors,this.errors),Array.prototype.push.apply(t.warnings,this.warnings)):(t.errors=this.errors,t.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:_u(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,n=!1,l=-1){for(const i of t)yield*this.next(i);yield*this.end(n,l)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(n,l,i)=>{const a=ii(t);a[0]+=n,this.onError(a,"BAD_DIRECTIVE",l,i)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const n=u_(this.options,this.directives,t,this.onError);this.atDirectives&&!n.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(n,!1),this.doc&&(yield this.doc),this.doc=n,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const n=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,l=new Bn(ii(t),"UNEXPECTED_TOKEN",n);this.atDirectives||!this.doc?this.errors.push(l):this.doc.errors.push(l);break}case"doc-end":{if(!this.doc){const l="Unexpected doc-end without preceding document";this.errors.push(new Bn(ii(t),"UNEXPECTED_TOKEN",l));break}this.doc.directives.docEnd=!0;const n=Zi(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),n.comment){const l=this.doc.comment;this.doc.comment=l?`${l}
${n.comment}`:n.comment}this.doc.range[2]=n.offset;break}default:this.errors.push(new Bn(ii(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,n=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const l=Object.assign({_directives:this.directives},this.options),i=new Hl(void 0,l);this.atDirectives&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,n,n],this.decorate(i,!1),yield i}}}function m_(e,t=!0,n){if(e){const l=(i,a,r)=>{const s=typeof i=="number"?i:Array.isArray(i)?i[0]:i.offset;if(n)n(s,a,r);else throw new Bn([s,s+1],a,r)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Ef(e,t,l);case"block-scalar":return Df({options:{strict:t}},e,l)}}return null}function p_(e,t){const{implicitKey:n=!1,indent:l,inFlow:i=!1,offset:a=-1,type:r="PLAIN"}=t,s=Xi({type:r,value:e},{implicitKey:n,indent:l>0?" ".repeat(l):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}}),c=t.end??[{type:"newline",offset:-1,indent:l,source:`
`}];switch(s[0]){case"|":case">":{const d=s.indexOf(`
`),u=s.substring(0,d),m=s.substring(d+1)+`
`,f=[{type:"block-scalar-header",offset:a,indent:l,source:u}];return Vf(f,c)||f.push({type:"newline",offset:-1,indent:l,source:`
`}),{type:"block-scalar",offset:a,indent:l,props:f,source:m}}case'"':return{type:"double-quoted-scalar",offset:a,indent:l,source:s,end:c};case"'":return{type:"single-quoted-scalar",offset:a,indent:l,source:s,end:c};default:return{type:"scalar",offset:a,indent:l,source:s,end:c}}}function f_(e,t,n={}){let{afterKey:l=!1,implicitKey:i=!1,inFlow:a=!1,type:r}=n,s="indent"in e?e.indent:null;if(l&&typeof s=="number"&&(s+=2),!r)switch(e.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{const d=e.props[0];if(d.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r=d.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}const c=Xi({type:r,value:t},{implicitKey:i||s===null,indent:s!==null&&s>0?" ".repeat(s):"",inFlow:a,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":y_(e,c);break;case'"':Go(e,c,"double-quoted-scalar");break;case"'":Go(e,c,"single-quoted-scalar");break;default:Go(e,c,"scalar")}}function y_(e,t){const n=t.indexOf(`
`),l=t.substring(0,n),i=t.substring(n+1)+`
`;if(e.type==="block-scalar"){const a=e.props[0];if(a.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a.source=l,e.source=i}else{const{offset:a}=e,r="indent"in e?e.indent:-1,s=[{type:"block-scalar-header",offset:a,indent:r,source:l}];Vf(s,"end"in e?e.end:void 0)||s.push({type:"newline",offset:-1,indent:r,source:`
`});for(const c of Object.keys(e))c!=="type"&&c!=="offset"&&delete e[c];Object.assign(e,{type:"block-scalar",indent:r,props:s,source:i})}}function Vf(e,t){if(t)for(const n of t)switch(n.type){case"space":case"comment":e.push(n);break;case"newline":return e.push(n),!0}return!1}function Go(e,t,n){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=n,e.source=t;break;case"block-scalar":{const l=e.props.slice(1);let i=t.length;e.props[0].type==="block-scalar-header"&&(i-=e.props[0].source.length);for(const a of l)a.offset+=i;delete e.props,Object.assign(e,{type:n,source:t,end:l});break}case"block-map":case"block-seq":{const i={type:"newline",offset:e.offset+t.length,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:n,source:t,end:[i]});break}default:{const l="indent"in e?e.indent:-1,i="end"in e&&Array.isArray(e.end)?e.end.filter(a=>a.type==="space"||a.type==="comment"||a.type==="newline"):[];for(const a of Object.keys(e))a!=="type"&&a!=="offset"&&delete e[a];Object.assign(e,{type:n,indent:l,source:t,end:i})}}}const g_=e=>"type"in e?xr(e):Wa(e);function xr(e){switch(e.type){case"block-scalar":{let t="";for(const n of e.props)t+=xr(n);return t+e.source}case"block-map":case"block-seq":{let t="";for(const n of e.items)t+=Wa(n);return t}case"flow-collection":{let t=e.start.source;for(const n of e.items)t+=Wa(n);for(const n of e.end)t+=n.source;return t}case"document":{let t=Wa(e);if(e.end)for(const n of e.end)t+=n.source;return t}default:{let t=e.source;if("end"in e&&e.end)for(const n of e.end)t+=n.source;return t}}}function Wa({start:e,key:t,sep:n,value:l}){let i="";for(const a of e)i+=a.source;if(t&&(i+=xr(t)),n)for(const a of n)i+=a.source;return l&&(i+=xr(l)),i}const Bs=Symbol("break visit"),b_=Symbol("skip children"),Rf=Symbol("remove item");function Hn(e,t){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),If(Object.freeze([]),e,t)}Hn.BREAK=Bs;Hn.SKIP=b_;Hn.REMOVE=Rf;Hn.itemAtPath=(e,t)=>{let n=e;for(const[l,i]of t){const a=n==null?void 0:n[l];if(a&&"items"in a)n=a.items[i];else return}return n};Hn.parentCollection=(e,t)=>{const n=Hn.itemAtPath(e,t.slice(0,-1)),l=t[t.length-1][0],i=n==null?void 0:n[l];if(i&&"items"in i)return i;throw new Error("Parent collection not found")};function If(e,t,n){let l=n(t,e);if(typeof l=="symbol")return l;for(const i of["key","value"]){const a=t[i];if(a&&"items"in a){for(let r=0;r<a.items.length;++r){const s=If(Object.freeze(e.concat([[i,r]])),a.items[r],n);if(typeof s=="number")r=s-1;else{if(s===Bs)return Bs;s===Rf&&(a.items.splice(r,1),r-=1)}}typeof l=="function"&&i==="key"&&(l=l(t,e))}}return typeof l=="function"?l(t,e):l}const Jr="\uFEFF",Zr="",eo="",Wi="",h_=e=>!!e&&"items"in e,__=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function x_(e){switch(e){case Jr:return"<BOM>";case Zr:return"<DOC>";case eo:return"<FLOW_END>";case Wi:return"<SCALAR>";default:return JSON.stringify(e)}}function Gf(e){switch(e){case Jr:return"byte-order-mark";case Zr:return"doc-mode";case eo:return"flow-error-end";case Wi:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const v_=Object.freeze(Object.defineProperty({__proto__:null,BOM:Jr,DOCUMENT:Zr,FLOW_END:eo,SCALAR:Wi,createScalarToken:p_,isCollection:h_,isScalar:__,prettyToken:x_,resolveAsScalar:m_,setScalarValue:f_,stringify:g_,tokenType:Gf,visit:Hn},Symbol.toStringTag,{value:"Module"}));function Dt(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const xu=new Set("0123456789ABCDEFabcdef"),w_=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Sa=new Set(",[]{}"),C_=new Set(` ,[]{}
\r	`),Mo=e=>!e||C_.has(e);class Mf{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,n=!1){if(t){if(typeof t!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null}this.atEnd=!n;let l=this.next??"stream";for(;l&&(n||this.hasChars(1));)l=yield*this.parseNext(l)}atLineEnd(){let t=this.pos,n=this.buffer[t];for(;n===" "||n==="	";)n=this.buffer[++t];return!n||n==="#"||n===`
`?!0:n==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let n=this.buffer[t];if(this.indentNext>0){let l=0;for(;n===" ";)n=this.buffer[++l+t];if(n==="\r"){const i=this.buffer[l+t+1];if(i===`
`||!i&&!this.atEnd)return t+l+1}return n===`
`||l>=this.indentNext||!n&&!this.atEnd?t+l:-1}if(n==="-"||n==="."){const l=this.buffer.substr(t,3);if((l==="---"||l==="...")&&Dt(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===Jr&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let n=t.length,l=t.indexOf("#");for(;l!==-1;){const a=t[l-1];if(a===" "||a==="	"){n=l-1;break}else l=t.indexOf("#",l+1)}for(;;){const a=t[n-1];if(a===" "||a==="	")n-=1;else break}const i=(yield*this.pushCount(n))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const n=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-n),yield*this.pushNewline(),"stream"}return yield Zr,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const n=this.peek(3);if((n==="---"||n==="...")&&Dt(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,n==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Dt(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,n]=this.peek(2);if(!n&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&Dt(n)){const l=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=l,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let n=yield*this.pushIndicators();switch(t[n]){case"#":yield*this.pushCount(t.length-n);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Mo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return n+=yield*this.parseBlockScalarHeader(),n+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-n),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,n,l=-1;do t=yield*this.pushNewline(),t>0?(n=yield*this.pushSpaces(!1),this.indentValue=l=n):n=0,n+=yield*this.pushSpaces(!0);while(t+n>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((l!==-1&&l<this.indentNext&&i[0]!=="#"||l===0&&(i.startsWith("---")||i.startsWith("..."))&&Dt(i[3]))&&!(l===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield eo,yield*this.parseLineStart();let a=0;for(;i[a]===",";)a+=yield*this.pushCount(1),a+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(a+=yield*this.pushIndicators(),i[a]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-a),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Mo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||Dt(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let n=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;n!==-1&&this.buffer[n+1]==="'";)n=this.buffer.indexOf("'",n+2);else for(;n!==-1;){let a=0;for(;this.buffer[n-1-a]==="\\";)a+=1;if(a%2===0)break;n=this.buffer.indexOf('"',n+1)}const l=this.buffer.substring(0,n);let i=l.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const a=this.continueScalar(i+1);if(a===-1)break;i=l.indexOf(`
`,a)}i!==-1&&(n=i-(l[i-1]==="\r"?2:1))}if(n===-1){if(!this.atEnd)return this.setNext("quoted-scalar");n=this.buffer.length}return yield*this.pushToIndex(n+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const n=this.buffer[++t];if(n==="+")this.blockScalarKeep=!0;else if(n>"0"&&n<="9")this.blockScalarIndent=Number(n)-1;else if(n!=="-")break}return yield*this.pushUntil(n=>Dt(n)||n==="#")}*parseBlockScalar(){let t=this.pos-1,n=0,l;e:for(let a=this.pos;l=this.buffer[a];++a)switch(l){case" ":n+=1;break;case`
`:t=a,n=0;break;case"\r":{const r=this.buffer[a+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!l&&!this.atEnd)return this.setNext("block-scalar");if(n>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=n:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const a=this.continueScalar(t+1);if(a===-1)break;t=this.buffer.indexOf(`
`,a)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let i=t+1;for(l=this.buffer[i];l===" ";)l=this.buffer[++i];if(l==="	"){for(;l==="	"||l===" "||l==="\r"||l===`
`;)l=this.buffer[++i];t=i-1}else if(!this.blockScalarKeep)do{let a=t-1,r=this.buffer[a];r==="\r"&&(r=this.buffer[--a]);const s=a;for(;r===" ";)r=this.buffer[--a];if(r===`
`&&a>=this.pos&&a+1+n>s)t=a;else break}while(!0);return yield Wi,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let n=this.pos-1,l=this.pos-1,i;for(;i=this.buffer[++l];)if(i===":"){const a=this.buffer[l+1];if(Dt(a)||t&&Sa.has(a))break;n=l}else if(Dt(i)){let a=this.buffer[l+1];if(i==="\r"&&(a===`
`?(l+=1,i=`
`,a=this.buffer[l+1]):n=l),a==="#"||t&&Sa.has(a))break;if(i===`
`){const r=this.continueScalar(l+1);if(r===-1)break;l=Math.max(l,r-2)}}else{if(t&&Sa.has(i))break;n=l}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Wi,yield*this.pushToIndex(n+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,n){const l=this.buffer.slice(this.pos,t);return l?(yield l,this.pos+=l.length,l.length):(n&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Mo))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(Dt(n)||t&&Sa.has(n))return t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,n=this.buffer[t];for(;!Dt(n)&&n!==">";)n=this.buffer[++t];return yield*this.pushToIndex(n===">"?t+1:t,!1)}else{let t=this.pos+1,n=this.buffer[t];for(;n;)if(w_.has(n))n=this.buffer[++t];else if(n==="%"&&xu.has(this.buffer[t+1])&&xu.has(this.buffer[t+2]))n=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let n=this.pos-1,l;do l=this.buffer[++n];while(l===" "||t&&l==="	");const i=n-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=n),i}*pushUntil(t){let n=this.pos,l=this.buffer[n];for(;!t(l);)l=this.buffer[++n];return yield*this.pushToIndex(n,!1)}}class Bf{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let n=0,l=this.lineStarts.length;for(;n<l;){const a=n+l>>1;this.lineStarts[a]<t?n=a+1:l=a}if(this.lineStarts[n]===t)return{line:n+1,col:1};if(n===0)return{line:0,col:t};const i=this.lineStarts[n-1];return{line:n,col:t-i+1}}}}function sn(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function vu(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function Of(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function La(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function il(e){var n;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((n=e[++t])==null?void 0:n.type)==="space";);return e.splice(t,e.length)}function wu(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!sn(t.start,"explicit-key-ind")&&!sn(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,Of(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class Yc{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Mf,this.onNewLine=t}*parse(t,n=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const l of this.lexer.lex(t,n))yield*this.next(l);n||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const n=Gf(t);if(n)if(n==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=n,yield*this.step(),n){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const l=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:l,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(!t||t.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const n=t??this.stack.pop();if(!n)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield n;else{const l=this.peek(1);switch(n.type==="block-scalar"?n.indent="indent"in l?l.indent:0:n.type==="flow-collection"&&l.type==="document"&&(n.indent=0),n.type==="flow-collection"&&wu(n),l.type){case"document":l.value=n;break;case"block-scalar":l.props.push(n);break;case"block-map":{const i=l.items[l.items.length-1];if(i.value){l.items.push({start:[],key:n,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=n;else{Object.assign(i,{key:n,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=l.items[l.items.length-1];i.value?l.items.push({start:[],value:n}):i.value=n;break}case"flow-collection":{const i=l.items[l.items.length-1];!i||i.value?l.items.push({start:[],key:n,sep:[]}):i.sep?i.value=n:Object.assign(i,{key:n,sep:[]});return}default:yield*this.pop(),yield*this.pop(n)}if((l.type==="document"||l.type==="block-map"||l.type==="block-seq")&&(n.type==="block-map"||n.type==="block-seq")){const i=n.items[n.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&vu(i.start)===-1&&(n.indent===0||i.start.every(a=>a.type!=="comment"||a.indent<n.indent))&&(l.type==="document"?l.end=i.start:l.items.push({start:i.start}),n.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{vu(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const n=this.startBlockValue(t);n?this.stack.push(n):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const n=La(this.peek(2)),l=il(n);let i;t.end?(i=t.end,i.push(this.sourceToken),delete t.end):i=[this.sourceToken];const a={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:l,key:t,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,n.value){const i="end"in n.value?n.value.end:void 0,a=Array.isArray(i)?i[i.length-1]:void 0;(a==null?void 0:a.type)==="comment"?i==null||i.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else if(n.sep)n.sep.push(this.sourceToken);else{if(this.atIndentedComment(n.start,t.indent)){const i=t.items[t.items.length-2],a=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(a)){Array.prototype.push.apply(a,n.start),a.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const i=!this.onKeyLine&&this.indent===t.indent,a=i&&(n.sep||n.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(a&&n.sep&&!n.value){const s=[];for(let c=0;c<n.sep.length;++c){const d=n.sep[c];switch(d.type){case"newline":s.push(c);break;case"space":break;case"comment":d.indent>t.indent&&(s.length=0);break;default:s.length=0}}s.length>=2&&(r=n.sep.splice(s[1]))}switch(this.type){case"anchor":case"tag":a||n.value?(r.push(this.sourceToken),t.items.push({start:r}),this.onKeyLine=!0):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"explicit-key-ind":!n.sep&&!n.explicitKey?(n.start.push(this.sourceToken),n.explicitKey=!0):a||n.value?(r.push(this.sourceToken),t.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(n.explicitKey)if(n.sep)if(n.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(sn(n.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(Of(n.key)&&!sn(n.sep,"newline")){const s=il(n.start),c=n.key,d=n.sep;d.push(this.sourceToken),delete n.key,delete n.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:c,sep:d}]})}else r.length>0?n.sep=n.sep.concat(r,this.sourceToken):n.sep.push(this.sourceToken);else if(sn(n.start,"newline"))Object.assign(n,{key:null,sep:[this.sourceToken]});else{const s=il(n.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]})}else n.sep?n.value||a?t.items.push({start:r,key:null,sep:[this.sourceToken]}):sn(n.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);a||n.value?(t.items.push({start:r,key:s,sep:[]}),this.onKeyLine=!0):n.sep?this.stack.push(s):(Object.assign(n,{key:s,sep:[]}),this.onKeyLine=!0);return}default:{const s=this.startBlockValue(t);if(s){if(s.type==="block-seq"){if(!n.explicitKey&&n.sep&&!sn(n.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&t.items.push({start:r});this.stack.push(s);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(n.value){const i="end"in n.value?n.value.end:void 0,a=Array.isArray(i)?i[i.length-1]:void 0;(a==null?void 0:a.type)==="comment"?i==null||i.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(n.start,t.indent)){const i=t.items[t.items.length-2],a=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(a)){Array.prototype.push.apply(a,n.start),a.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return;case"anchor":case"tag":if(n.value||this.indent<=t.indent)break;n.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;n.value||sn(n.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return}if(this.indent>t.indent){const i=this.startBlockValue(t);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const n=t.items[t.items.length-1];if(this.type==="flow-error-end"){let l;do yield*this.pop(),l=this.peek(1);while(l&&l.type==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!n||n.sep?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return;case"map-value-ind":!n||n.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!n||n.value?t.items.push({start:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!n||n.value?t.items.push({start:[],key:i,sep:[]}):n.sep?this.stack.push(i):Object.assign(n,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const l=this.startBlockValue(t);l?this.stack.push(l):(yield*this.pop(),yield*this.step())}else{const l=this.peek(2);if(l.type==="block-map"&&(this.type==="map-value-ind"&&l.indent===t.indent||this.type==="newline"&&!l.items[l.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&l.type!=="flow-collection"){const i=La(l),a=il(i);wu(t);const r=t.end.splice(1,t.end.length);r.push(this.sourceToken);const s={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:a,key:t,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const n=La(t),l=il(n);return l.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const n=La(t),l=il(n);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,n){return this.type!=="comment"||this.indent<=n?!1:t.every(l=>l.type==="newline"||l.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function jf(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new Bf||null,prettyErrors:t}}function S_(e,t={}){const{lineCounter:n,prettyErrors:l}=jf(t),i=new Yc(n==null?void 0:n.addNewLine),a=new Qc(t),r=Array.from(a.compose(i.parse(e)));if(l&&n)for(const s of r)s.errors.forEach(_r(e,n)),s.warnings.forEach(_r(e,n));return r.length>0?r:Object.assign([],{empty:!0},a.streamInfo())}function Ff(e,t={}){const{lineCounter:n,prettyErrors:l}=jf(t),i=new Yc(n==null?void 0:n.addNewLine),a=new Qc(t);let r=null;for(const s of a.compose(i.parse(e),!0,e.length))if(!r)r=s;else if(r.options.logLevel!=="silent"){r.errors.push(new Bn(s.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return l&&n&&(r.errors.forEach(_r(e,n)),r.warnings.forEach(_r(e,n))),r}function L_(e,t,n){let l;typeof t=="function"?l=t:n===void 0&&t&&typeof t=="object"&&(n=t);const i=Ff(e,n);if(!i)return null;if(i.warnings.forEach(a=>of(i.options.logLevel,a)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:l},n))}function k_(e,t,n){let l=null;if(typeof t=="function"||Array.isArray(t)?l=t:n===void 0&&t&&(n=t),typeof n=="string"&&(n=n.length),typeof n=="number"){const i=Math.round(n);n=i<1?void 0:i>8?{indent:8}:{indent:i}}if(e===void 0){const{keepUndefined:i}=n??t??{};if(!i)return}return Qn(e)&&!l?e.toString(n):new Hl(e,l,n).toString(n)}const qf=Object.freeze(Object.defineProperty({__proto__:null,Alias:qr,CST:v_,Composer:Qc,Document:Hl,Lexer:Mf,LineCounter:Bf,Pair:ze,Parser:Yc,Scalar:ne,Schema:Xr,YAMLError:zc,YAMLMap:pt,YAMLParseError:Bn,YAMLSeq:Sn,YAMLWarning:kf,isAlias:Dn,isCollection:ke,isDocument:Qn,isMap:ql,isNode:De,isPair:we,isScalar:ge,isSeq:Ul,parse:L_,parseAllDocuments:S_,parseDocument:Ff,stringify:k_,visit:Yn,visitAsync:Fr},Symbol.toStringTag,{value:"Module"})),T_=`protocols:
  - model: 40100
    point: ID
    block: fixed
    entry:
      name: ID
      description: ID
      longdescription: ID
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
      longdescription: L
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
      longdescription: site ID
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
      longdescription: Reserved
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
      longdescription: Equipment manufacturer
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
      longdescription: Identifies the specific hardware model of the inverter as
        reported by the power conversion system (PCS). Used for tracking
        firmware compatibility and diagnostic reference.
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
      longdescription: Unique serial number assigned to this inverter at
        manufacturing. Used to identify the physical unit for service
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
      longdescription: Rated AC output voltage of the inverter under standard
        conditions. Indicates the design voltage of the grid interface.
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
      longdescription: Rated output frequency of the inverter when synchronized to the
        grid. Defines the system's base frequency for grid operation.
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
      longdescription: Rated continuous active power output of the inverter at nominal
        operating conditions. Indicates maximum sustained real power delivery
        capability.
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
      longdescription: Rated continuous apparent power capacity (combined real and
        reactive components). Defines total output capability at rated voltage
        and frequency.
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
      longdescription: Indicates the inverter hardware revision. Useful for verifying
        component compatibility, field updates, and service documentation.
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
      longdescription: Firmware version of the main digital signal processor
        controlling inverter power conversion. Used for compatibility tracking
        and diagnostic support.
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
      longdescription: Firmware version of the secondary DSP module responsible for
        parallel or auxiliary control functions. Used for synchronization and
        troubleshooting.
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
      longdescription: Firmware version of the embedded ARM processor managing energy
        management system (EMS) logic. Typically governs site-level control,
        communications, and grid interaction.
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
      longdescription: Firmware version of the Arc-Fault Circuit Interrupter (AFCI)
        safety module. Confirms AFCI functionality and safety compliance level.
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
      longdescription: Firmware version of the primary LCD interface board, used to
        display system status and settings.
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
        display module. "
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
      longdescription: Version of the communication protocol firmware that defines
        inverter data and command interface behavior.
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
      longdescription: Version identifier for inverter safety control software. Used
        to confirm compliance with regulatory safety standards.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Number of independent Maximum Power Point Tracking (MPPT)
        channels available on the inverter. Each channel can independently
        optimize PV string voltage and current.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Configuration type for interconnection.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Scaling factor applied to voltage-related measurements. Used
        internally to convert raw data to engineering units.
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
      longdescription: Scaling factor applied to frequency measurements. Used
        internally for frequency data normalization.
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
      longdescription: Scaling factor applied to apparent power measurements. Used to
        convert raw register values to display units.
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
      longdescription: Scaling factor applied to active power measurements. Used for
        engineering unit conversion.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Unique identifier for this SunSpec model block within the
        inverter’s data map. Used internally for addressing.
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
      longdescription: Specifies the number of registers used by this model block.
        Primarily used by integrators for protocol mapping and diagnostics.
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
      longdescription: Unique identifier assigned to the installation site. Used for
        associating telemetry data with a specific system or location.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Unique serial number assigned to this inverter. Used for
        service tracking, firmware management, and telemetry association.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Indicates whether the photovoltaic input subsystem is operating
        normally or has detected a fault.
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
      longdescription: Total combined DC input power from all PV strings. Represents
        total DC solar generation by the inverter.
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
      longdescription: Instantaneous DC power measured at the first Maximum Power
        Point Tracking (MPPT) channel.
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
      longdescription: Input current flowing into MPPT channel 1 from the connected PV string.
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
      longdescription: Input voltage measured at MPPT channel 1 terminals.
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
      longdescription: Instantaneous DC power measured at the second MPPT channel.
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
      longdescription: Input current flowing into MPPT channel 2 from the connected PV string.
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
      longdescription: Input voltage measured at MPPT channel 2 terminals.
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
      longdescription: Instantaneous DC power measured at the third MPPT channel.
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
      longdescription: Input current flowing into MPPT channel 3 from the connected PV string.
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
      longdescription: Input voltage measured at MPPT channel 3 terminals.
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
      longdescription: Instantaneous DC power measured at the fourth MPPT channel.
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
      longdescription: Input current flowing into MPPT channel 4 from the connected PV string.
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
      longdescription: Input voltage measured at MPPT channel 4 terminals.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Nameplate battery capacity expressed in amp-hours for the
        installed pack. Use to validate configuration and estimate runtime. This
        value is read from the inverter.
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
      longdescription: Current battery state of charge as a percentage. This value is
        read from the inverter.
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
      longdescription: Average state of health across all battery modules. Indicates
        long-term capacity retention relative to new. This value is read from
        the inverter.
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
      longdescription: Current battery operating state, reflecting whether the pack is
        charging, discharging, holding, or at an end-of-range condition. This
        value is read from the inverter.
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
      longdescription: Positive real power flowing **into** the battery (charging).
        Useful for verifying charge limits and schedules. This value is read
        from the inverter.
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
      longdescription: Positive real power flowing **out of** the battery
        (discharging). Useful for load support and export control. This value is
        read from the inverter.
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
      longdescription: Instantaneous DC current at the battery terminals. Sign may
        indicate direction depending on implementation. This value is read from
        the inverter.
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
      longdescription: Instantaneous DC voltage at the battery terminals. Use with
        current to validate power and cable sizing. This value is read from the
        inverter.
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
      longdescription: Highest measured single-cell voltage across the pack. Useful
        for balancing and protection checks. This value is read from the
        inverter.
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
      longdescription: Lowest measured single-cell voltage across the pack. Useful for
        diagnosing imbalance and aging. This value is read from the inverter.
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
      longdescription: Index (smallest module number) of the module containing the
        highest cell voltage. Aids pinpointing imbalance. This value is read
        from the inverter.
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
      longdescription: Index (smallest module number) of the module containing the
        lowest cell voltage. Aids pinpointing weak cells. This value is read
        from the inverter.
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
      longdescription: Measured temperature representative of the battery pack
        environment. Used for thermal limits and performance. This value is read
        from the inverter.
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
      longdescription: Average temperature across cells/modules. Useful for trend and
        thermal management. This value is read from the inverter.
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
      longdescription: Highest measured cell/module temperature. Check against
        derating and protection thresholds. This value is read from the
        inverter.
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
      longdescription: Lowest measured cell/module temperature. Helps detect sensor
        faults or cold spots. This value is read from the inverter.
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
      longdescription: Index (smallest module number) of the module with the highest
        cell temperature for targeted inspection. This value is read from the
        inverter.
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
      longdescription: Index (smallest module number) of the module with the lowest
        cell temperature for targeted inspection. This value is read from the
        inverter.
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
      longdescription: BMS request flag indicating whether a forced charge is
        commanded due to protection or balancing needs. This value is read from
        the inverter.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Net active (real) power at the inverter AC output.
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
      longdescription: Total reactive power at the inverter AC output for power factor
        and VAR support analysis.
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
      longdescription: Total apparent power at the inverter AC output (vector sum of
        real and reactive components).
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
      longdescription: Instantaneous power factor of the inverter AC output. Unitless
        ratio of real to apparent power.
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
      longdescription: Sum of RMS currents across active phases at the inverter output.
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
      longdescription: Line-to-line RMS voltage at the inverter output (average of
        active phases).
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
      longdescription: Line-to-neutral RMS voltage at the inverter output.
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
      longdescription: Output frequency of the inverter when operating. Useful for
        grid sync and backup mode checks.
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
      longdescription: Real power on phase L1 at the inverter output.
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
      longdescription: Reactive power on phase L1 at the inverter output.
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
      longdescription: Apparent power on phase L1 at the inverter output.
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
      longdescription: Phase L1 power factor (unitless).
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
      longdescription: RMS current on phase L1 at the inverter output.
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
      longdescription: Line-to-line voltage between phases L1 and L2.
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
      longdescription: Line-to-neutral voltage on phase L1.
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
      longdescription: Real power on phase L2 at the inverter output.
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
      longdescription: Reactive power on phase L2 at the inverter output.
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
      longdescription: Apparent power on phase L2 at the inverter output.
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
      longdescription: Phase L2 power factor (unitless).
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
      longdescription: RMS current on phase L2 at the inverter output.
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
      longdescription: Line-to-line voltage between phases L2 and L3.
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
      longdescription: Line-to-neutral voltage on phase L2.
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
      longdescription: Real power on phase L3 at the inverter output.
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
      longdescription: Reactive power on phase L3 at the inverter output.
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
      longdescription: Apparent power on phase L3 at the inverter output.
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
      longdescription: Phase L3 power factor (unitless).
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
      longdescription: RMS current on phase L3 at the inverter output.
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
      longdescription: Line-to-line voltage between phases L3 and L1.
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
      longdescription: Line-to-neutral voltage on phase L3.
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
      longdescription: Power consumed by the rectifier stage during AC charging of the
        battery (if applicable).
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
      longdescription: Ambient temperature measured near the inverter enclosure.
        Useful for site condition assessment.
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
      longdescription: Internal inverter temperature. Used for thermal protection and
        derating analysis.
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
      longdescription: Temperature of the LLC (resonant) stage or equivalent converter
        section. Monitor for stress and cooling adequacy.
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
      longdescription: Temperature of the inverter power stage heat sink or IGBTs/MOSFETs.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Status of the utility/grid input as detected by the inverter
        protection and sync logic.
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
      longdescription: Total real power imported from the grid (consumed by the site).
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
      longdescription: Total real power exported to the grid from PV and battery discharge.
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
      longdescription: Total reactive power at the point of common coupling for the
        grid connection.
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
      longdescription: Total apparent power at the grid connection point.
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
      longdescription: Overall power factor measured at the grid connection point.
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
      longdescription: Sum of RMS currents across active grid phases at the metering point.
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
      longdescription: Line-to-line voltage measured at the grid connection.
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
      longdescription: Line-to-neutral voltage measured at the grid connection.
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
      longdescription: Measured utility frequency at the point of interconnection.
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
      longdescription: Real power on grid phase L1 (import/export sign per implementation).
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
      longdescription: Reactive power on grid phase L1.
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
      longdescription: Apparent power on grid phase L1.
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
      longdescription: Power factor on grid phase L1 (unitless).
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
      longdescription: RMS current on grid phase L1.
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
      longdescription: Line-to-line voltage between grid phases L1 and L2.
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
      longdescription: Line-to-neutral voltage on grid phase L1.
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
      longdescription: Real power on grid phase L2.
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
      longdescription: Reactive power on grid phase L2.
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
      longdescription: Apparent power on grid phase L2.
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
      longdescription: Power factor on grid phase L2 (unitless).
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
      longdescription: RMS current on grid phase L2.
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
      longdescription: Line-to-line voltage between grid phases L2 and L3.
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
      longdescription: Line-to-neutral voltage on grid phase L2.
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
      longdescription: Real power on grid phase L3.
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
      longdescription: Reactive power on grid phase L3.
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
      longdescription: Apparent power on grid phase L3.
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
      longdescription: Power factor on grid phase L3 (unitless).
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
      longdescription: RMS current on grid phase L3.
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
      longdescription: Line-to-line voltage between grid phases L3 and L1.
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
      longdescription: Line-to-neutral voltage on grid phase L3.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Indicates whether the backup/output isolation relay is open or closed.
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
      longdescription: Total real power delivered to backup loads/output.
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
      longdescription: Total reactive power on the backup output.
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
      longdescription: Total apparent power on the backup output.
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
      longdescription: Overall power factor measured on the backup output.
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
      longdescription: Sum of RMS currents across backup phases.
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
      longdescription: Line-to-line voltage measured on the backup output.
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
      longdescription: Line-to-neutral voltage measured on the backup output.
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
      longdescription: Measured frequency on the backup output when islanded or supported.
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
      longdescription: Real power on backup phase L1.
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
      longdescription: Reactive power on backup phase L1.
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
      longdescription: Apparent power on backup phase L1.
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
      longdescription: Power factor on backup phase L1 (unitless).
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
      longdescription: RMS current on backup phase L1.
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
      longdescription: Line-to-line voltage between backup phases L1 and L2.
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
      longdescription: Line-to-neutral voltage on backup phase L1.
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
      longdescription: Real power on backup phase L2.
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
      longdescription: Reactive power on backup phase L2.
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
      longdescription: Apparent power on backup phase L2.
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
      longdescription: Power factor on backup phase L2 (unitless).
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
      longdescription: RMS current on backup phase L2.
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
      longdescription: Line-to-line voltage between backup phases L2 and L3.
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
      longdescription: Line-to-neutral voltage on backup phase L2.
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
      longdescription: Real power on backup phase L3.
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
      longdescription: Reactive power on backup phase L3.
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
      longdescription: Apparent power on backup phase L3.
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
      longdescription: Power factor on backup phase L3 (unitless).
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
      longdescription: RMS current on backup phase L3.
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
      longdescription: Line-to-line voltage between backup phases L3 and L1.
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
      longdescription: Line-to-neutral voltage on backup phase L3.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Total real power consumed by connected loads.
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
      longdescription: Total reactive power drawn by the loads.
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
      longdescription: Vector sum of real and reactive load power. Indicates total kVA
        capacity demanded by the loads.
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
      longdescription: Overall power factor of the loads (unitless).
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
      longdescription: "Sum of RMS currents across active load phases. "
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
      longdescription: Line-to-line RMS voltage measured at the load connection.
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
      longdescription: Line-to-neutral RMS voltage measured at the load connection.
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
      longdescription: Measured AC frequency at the load connection point.
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
      longdescription: Real power consumed by loads on phase L1.
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
      longdescription: Reactive power on phase L1 of the load.
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
      longdescription: Apparent power on phase L1 of the load.
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
      longdescription: Phase L1 load power factor (unitless).
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
      longdescription: RMS current of the load on phase L1.
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
      longdescription: Line-to-line voltage between L1 and L2 at the load.
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
      longdescription: Line-to-neutral voltage on L1 at the load.
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
      longdescription: Real power consumed by loads on phase L2.
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
      longdescription: Reactive power on phase L2 of the load.
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
      longdescription: Apparent power on phase L2 of the load.
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
      longdescription: Phase L2 load power factor (unitless).
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
      longdescription: RMS current of the load on phase L2.
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
      longdescription: Line-to-line voltage between L2 and L3 at the load.
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
      longdescription: Line-to-neutral voltage on L2 at the load.
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
      longdescription: Real power consumed by loads on phase L3.
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
      longdescription: Reactive power on phase L3 of the load.
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
      longdescription: Apparent power on phase L3 of the load.
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
      longdescription: Phase L3 load power factor (unitless).
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
      longdescription: RMS current of the load on phase L3.
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
      longdescription: Line-to-line voltage between L3 and L1 at the load.
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
      longdescription: Line-to-neutral voltage on L3 at the load.
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
      longdescription: Reserved register. No current function.
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
      longdescription: Value from Site Configuration Generator/Generator. Indicates
        the current state of the generator control contactor.
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
        label_text: Generator
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
      longdescription: State of the generator start/transfer relay as controlled by
        the inverter.
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
        label_text: Generator
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
      longdescription: Total real power delivered from the generator to the system.
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
        label_text: Generator
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
      longdescription: Total reactive power measured on the generator connection.
      dtype: int32
      unit: Var
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Total apparent power at the generator connection.
      dtype: uint32
      unit: VA
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Overall generator power factor (unitless).
      dtype: int16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Sum of RMS currents across generator phases.
      dtype: int32
      unit: A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Line-to-line RMS voltage at the generator connection.
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Line-to-neutral RMS voltage at the generator connection.
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Measured frequency of the generator output.
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
        label_text: Generator
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
      longdescription: Real power on generator phase L1.
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
        label_text: Generator
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
      longdescription: Reactive power on generator phase L1.
      dtype: int32
      unit: Var
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Apparent power on generator phase L1.
      dtype: uint32
      unit: VA
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Phase L1 generator power factor (unitless).
      dtype: int16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: RMS current on generator phase L1.
      dtype: int32
      unit: A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Line-to-line voltage between generator phases L1 and L2.
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
        label_text: Generator
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
      longdescription: Line-to-neutral voltage on generator phase L1.
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Real power on generator phase L2.
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
        label_text: Generator
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
      longdescription: Reactive power on generator phase L2.
      dtype: int32
      unit: Var
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Apparent power on generator phase L2.
      dtype: uint32
      unit: VA
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Phase L2 generator power factor (unitless).
      dtype: int16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: RMS current on generator phase L2.
      dtype: int32
      unit: A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Line-to-line voltage between generator phases L2 and L3.
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Line-to-neutral voltage on generator phase L2.
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Real power on generator phase L3.
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
        label_text: Generator
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
      longdescription: Reactive power on generator phase L3.
      dtype: int32
      unit: Var
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Apparent power on generator phase L3.
      dtype: uint32
      unit: VA
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Phase L3 generator power factor (unitless).
      dtype: int16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: RMS current on generator phase L3.
      dtype: int32
      unit: A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Line-to-line voltage between generator phases L3 and L1.
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Line-to-neutral voltage on generator phase L3.
      dtype: uint16
      unit: V
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Indicates whether the generator input is active. The generator
        is "Activated" when the port is configured as a generator and voltage
        greater than 100 Vac is detected; otherwise it is, “Not active.”
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
        label_text: Generator
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
      longdescription: Reserved register. No current function.
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
      longdescription: Total real power measured for AC-coupled input.
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
      longdescription: Total reactive power measured for AC-coupled input.
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
      longdescription: Total apparent power measured for AC-coupled input.
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
      longdescription: Overall power factor for AC-coupled input.
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
      longdescription: Sum of RMS currents across AC-coupled phases.
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
      longdescription: Line-to-line RMS voltage at the AC-coupled input.
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
      longdescription: Line-to-neutral RMS voltage at the AC-coupled input.
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
      longdescription: Measured AC frequency at the AC-coupled input.
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
      longdescription: Real power on AC-coupled phase L1.
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
      longdescription: Reactive power on AC-coupled phase L1.
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
      longdescription: Apparent power on AC-coupled phase L1.
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
      longdescription: Power factor on AC-coupled phase L1.
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
      longdescription: RMS current on AC-coupled phase L1.
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
      longdescription: Line-to-line voltage between L1 and L2 at the AC-coupled input.
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
      longdescription: Line-to-neutral voltage on phase L1 at the AC-coupled input.
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
      longdescription: Real power on AC-coupled phase L2.
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
      longdescription: Reactive power on AC-coupled phase L2.
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
      longdescription: Apparent power on AC-coupled phase L2.
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
      longdescription: Power factor on AC-coupled phase L2.
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
      longdescription: RMS current on AC-coupled phase L2.
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
      longdescription: Line-to-line voltage between L2 and L3 at the AC-coupled input.
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
      longdescription: Line-to-neutral voltage on phase L2 at the AC-coupled input.
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
      longdescription: Real power on AC-coupled phase L3.
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
      longdescription: Reactive power on AC-coupled phase L3.
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
      longdescription: Apparent power on AC-coupled phase L3.
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
      longdescription: Power factor on AC-coupled phase L3.
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
      longdescription: RMS current on AC-coupled phase L3.
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
      longdescription: Line-to-line voltage between L3 and L1 at the AC-coupled input.
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
      longdescription: Line-to-neutral voltage on phase L3 at the AC-coupled input.
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
      longdescription: Indicates whether AC-coupled functionality is enabled.
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
      longdescription: Reserved register.
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
      longdescription: Total real power measured for smart load.
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
      longdescription: Total reactive power measured for smart load.
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
      longdescription: Total apparent power measured for smart load.
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
      longdescription: Overall power factor for smart load.
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
      longdescription: Sum of RMS currents across smart-load phases.
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
      longdescription: Line-to-line RMS voltage at the smart-load connection.
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
      longdescription: Line-to-neutral RMS voltage at the smart-load connection.
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
      longdescription: Measured AC frequency at the smart-load connection.
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
      longdescription: Real power on smart-load phase L1.
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
      longdescription: Reactive power on smart-load phase L1.
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
      longdescription: Apparent power on smart-load phase L1.
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
      longdescription: Power factor on smart-load phase L1.
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
      longdescription: RMS current on smart-load phase L1.
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
      longdescription: Line-to-line voltage between L1 and L2 at the smart-load connection.
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
      longdescription: Line-to-neutral voltage on phase L1 at the smart-load connection.
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
      longdescription: Real power on smart-load phase L2.
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
      longdescription: Reactive power on smart-load phase L2.
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
      longdescription: Apparent power on smart-load phase L2.
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
      longdescription: Power factor on smart-load phase L2.
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
      longdescription: RMS current on smart-load phase L2.
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
      longdescription: Line-to-line voltage between L2 and L3 at the smart-load connection.
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
      longdescription: Line-to-neutral voltage on phase L2 at the smart-load connection.
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
      longdescription: Real power on smart-load phase L3.
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
      longdescription: Reactive power on smart-load phase L3.
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
      longdescription: Apparent power on smart-load phase L3.
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
      longdescription: Power factor on smart-load phase L3.
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
      longdescription: RMS current on smart-load phase L3.
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
      longdescription: Line-to-line voltage between L3 and L1 at the smart-load connection.
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
      longdescription: Line-to-neutral voltage on phase L3 at the smart-load connection.
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
      longdescription: Indicates whether smart-load functionality is enabled.
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
      longdescription: Reserved register.
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
      longdescription: Current scale factor register.
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
      longdescription: Voltage scale factor register.
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
      longdescription: Cell-voltage scale factor register.
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
      longdescription: Frequency scale factor register.
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
      longdescription: Active-power scale factor register.
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
      longdescription: Power-factor scale factor register.
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
      longdescription: Apparent-power scale factor register.
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
      longdescription: Reactive-power scale factor register.
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
      longdescription: Temperature scale factor register.
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
      longdescription: Percent scale factor register.
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
      longdescription: Amp-hour scale factor register.
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
      longdescription: Reserved register.
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
      longdescription: Unique identifier for this data block.
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
      longdescription: Number of registers in this block.
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
      longdescription: Unique identifier for the installation site.
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
      longdescription: Reserved for future use.
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
      longdescription: Unique serial number of the inverter or system controller.
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
      longdescription: Reserved for future use.
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
      longdescription: Total photovoltaic energy generated today.
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
      longdescription: Cumulative photovoltaic energy generated since installation.
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
      longdescription: Total lifetime energy produced by PV string 1.
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
      longdescription: Energy generated today by PV string 1.
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
      longdescription: Total lifetime energy produced by PV string 2.
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
      longdescription: Energy generated today by PV string 2.
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
      longdescription: Total lifetime energy produced by PV string 3.
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
      longdescription: Energy generated today by PV string 3.
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
      longdescription: Reserved for future use.
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
      longdescription: Energy charged into the battery today. This value is read from
        the inverter.
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
      longdescription: Total lifetime energy charged into the battery. This value is
        read from the inverter.
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
      longdescription: Energy discharged from the battery today. This value is read
        from the inverter.
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
      longdescription: Total lifetime energy discharged from the battery. This value
        is read from the inverter.
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
      longdescription: Reserved for future use.
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
      longdescription: Energy output from the inverter today.
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
      longdescription: Total lifetime energy output from the inverter.
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
      longdescription: Energy recovered or rectified today.
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
      longdescription: Total lifetime recovered or rectified energy.
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
      longdescription: Total energy imported from the grid.
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
      longdescription: Total energy exported to the grid.
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
      longdescription: Energy imported from the grid today.
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
      longdescription: Energy exported to the grid today.
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
      longdescription: Reserved for future use.
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
      longdescription: Energy supplied to backup loads today.
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
      longdescription: Cumulative energy supplied to backup loads.
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
      longdescription: Energy supplied to backup load phase L1 today.
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
      longdescription: Energy supplied to backup load phase L2 today.
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
      longdescription: Energy supplied to backup load phase L3 today.
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
      longdescription: Cumulative energy supplied to backup load phase L1.
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
      longdescription: Cumulative energy supplied to backup load phase L2.
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
      longdescription: Cumulative energy supplied to backup load phase L3.
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
      longdescription: Reserved for future use.
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
      longdescription: Cumulative total energy consumed by loads.
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
      longdescription: Total energy consumed by loads today.
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
      longdescription: Reserved for future use.
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
      longdescription: Energy supplied by the generator today.
      dtype: uint32
      unit: Wh
      category: Generator Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Cumulative total energy supplied by the generator.
      dtype: uint32
      unit: Wh
      category: Generator Energy
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Reserved for future use.
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
      longdescription: Energy received from AC-coupled sources today.
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
      longdescription: Cumulative energy received from AC-coupled sources.
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
      longdescription: Reserved for future use.
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
      longdescription: Energy supplied to smart load circuits today.
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
      longdescription: Cumulative energy supplied to smart load circuits.
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
      longdescription: Reserved for future use.
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
      longdescription: Scale factor for Wh energy values (block 1).
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
      longdescription: Scale factor for Wh energy values (block 2).
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
      longdescription: Scale factor for Wh energy values (block 3).
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
      longdescription: Scale factor applied to time-based registers.
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
      longdescription: Reserved for future use.
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
      longdescription: Unique identifier for this data block.
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
      longdescription: Number of registers in this block.
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
      longdescription: Unique identifier for the installation site.
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
      longdescription: Reserved for future use.
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
      longdescription: Unique serial number of the inverter or system controller.
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
      longdescription: Reserved for future use.
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
      longdescription: Warning conditions related to the power conversion system.
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
      longdescription: Fault conditions reported by the power conversion system.
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
      longdescription: Reserved for future use.
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
      longdescription: Warnings related to parallel inverter operation.
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
      longdescription: Faults related to multi-unit inverter operation.
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
      longdescription: Reserved for future use.
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
      longdescription: Warning conditions related to PV input circuits.
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
      longdescription: Fault conditions related to PV input circuits.
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
      longdescription: Reserved for future use.
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
      longdescription: Battery-related warning conditions detected by inverter or BMS.
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
      longdescription: Battery-related fault conditions that stop charge or discharge.
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
      longdescription: Reserved for future use.
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
      longdescription: Warnings related to AC grid quality or presence.
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
      longdescription: Fault conditions detected in AC grid interface.
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
      longdescription: Reserved for future use.
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
      longdescription: Meter-related warnings such as connection or polarity issues.
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
      longdescription: Reserved for future use.
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
      longdescription: Fault conditions on the backup output circuit.
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
      longdescription: Reserved for future use.
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
      longdescription: Reserved for future use.
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
      longdescription: Fault conditions detected at the generator port.
      dtype: bitfield32
      unit: N/A
      category: Generator Alerts
      meanings:
        "0": Generator voltage abnormal
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Reserved for future use.
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
      longdescription: Rapid shutdown (RSD) warnings or active state.
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
      longdescription: Reserved for future use.
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
      longdescription: ID
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
      longdescription: L
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
      longdescription: SiteID
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
      longdescription: Reserved
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
      longdescription: Device Serial number
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules
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
      longdescription: Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules
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
      longdescription: Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules
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
      longdescription: Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules
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
      longdescription: Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules
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
      longdescription: Value from Site Configuration Inverter/Basic Setup. Date and
        time the inverter will use to run schedules
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
      longdescription: Value from Site Configuration Inverter/Basic Setup. Select
        whether the inverter operates independently of the grid, or is connected
        to the grid. If off-grid, you should also ignore grid-loss warnings.
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
      longdescription: >
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
      longdescription: Value from Site Configuration Inverter/Basic Setup. Put the
        inverter into standby mode to stop operation or make configuration
        changes. While in standby, the inverter will not generate PV power or
        charge/discharge the battery. If grid power is available, it be used to
        supply the loads. If the grid is unavailable, the building will not have
        power.
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
      longdescription: PV Power Priority
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
      longdescription: Power Source Priority
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Inverter/Current Transformer (CT)
        Settings. Select the current transformer (CT) ratio used for metering
        electric current on the grid port connection. This must match the CT
        hardware rating so that current and power readings are accurate.
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
      longdescription: Value from Site Configuration Inverter/Current Transformer (CT)
        Settings. Sets the CT installation direction. You may choose to reverse
        this if your inverter is reading import when power is actually flowing
        out to the grid (export) or vice versa.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Battery/Setup. Specifies the
        chemistry or general type of connected battery. Choose **No Battery**
        for standalone PV or grid-tie operation, **Lead-acid** for flooded or
        AGM batteries, or **Lithium-ion** for managed BMS packs. This value is
        set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Setup. Selects the
        manufacturer profile for the connected battery. This may pre-configure
        recommended voltage and SOC limits for optimal operation. This value is
        set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Setup. Sets the voltage
        used during the absorb (bulk-to-float transition) phase. Increasing this
        value raises the upper charge threshold for lead-acid batteries. This
        value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Setup. Defines the
        voltage maintained once the battery is fully charged. This helps prevent
        overcharging while keeping the battery topped off. This value is set on
        the inverter.
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
      longdescription: Value from Site Configuration Battery/Setup. Voltage threshold
        where the inverter begins reducing charge or discharge current to
        protect the battery as it approaches full or low state. This value is
        set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Setup. Sets the maximum
        state of charge (SOC) the battery will be charged to. Once the battery
        reaches this level, charging stops to prevent overcharging and extend
        lifespan. This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Setup. Sets the maximum
        charging and discharging current allowed for the connected inverter.
        Choose the preset that matches your inverter model to automatically
        apply the correct limits. This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Setup. Sets the minimum
        state of charge (SOC) the battery will discharge to while grid power is
        available. Below this level, the inverter will stop discharging and
        switch to grid power to protect battery capacity. This value is set on
        the inverter.
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
      longdescription: Value from Site Configuration Battery/Setup. Sets the minimum
        state of charge (SOC) the battery will discharge to when operating
        off-grid. Once the battery reaches this level, the inverter stops
        discharging to prevent deep discharge and maintain battery health. This
        value is set on the inverter.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Battery/Battery Scheduling. This
        is a special scheduling mode designed for certain time-of-use (TOU)
        utility rates or other custom situations. In most circumstances, we
        recomment allowing your system to  manage charging and discharging
        automatically without setting a schedule.  You don't need to set a
        schedule unless you have a specific reason to charge or discharge at
        exact times. This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. Sets the maximum charging power during scheduled
        Time-of-Use (TOU) charge periods in kW. Set this limit to control the
        power level at which the battery will charge from the grid during PV
        charge only periods This value is set on the inverter.
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
      longdescription: Charge end SOC in time 1 This value is set on the inverter.
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
      longdescription: Charge end SOC in time 2 This value is set on the inverter.
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
      longdescription: Charge end SOC in time 3 This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery Scheduling/PV
        Charge Only. During these times your battery will charge from solar
        power and not discharge to power your home unless there is a grid power
        outage This value is set on the inverter.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. Sets the maximum discharging power during
        scheduled Time-of-Use (TOU) discharge periods in kW. Limit this to
        control how much battery power is exported to loads or grid during those
        windows. This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. Sets the minimum state of charge (SOC) that
        the battery will discharge to during 'Discharge Only' operation. Once
        this level is reached, discharging stops to preserve reserve capacity
        for later use or backup. This value is set on the inverter.
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
      longdescription: Discharge end SOC in time 2 This value is set on the inverter.
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
      longdescription: Discharge end SOC in time 3 This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Battery
        Scheduling/Discharge Only. During these times, your battery will
        discharge at a steady rate and not charge from solar power.  Solar power
        will be used in your home and sold to the grid as allowed This value is
        set on the inverter.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Grid/Setup. This setting changes
        the conditions under which the inverter will connect or disconnect from
        the utility grid. Different areas have different rules about when this
        equipment is allowed to disconnect and when it must ride through. Choose
        the code required by the local utility or AHJ.
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
      longdescription: Value from Site Configuration Grid/Setup. Choose wiring
        configuration of the site.  This helps configure the system to match the
        power service at the site.  Note the voltage you enter here must match
        the EPS Voltage.
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
      longdescription: Value from Site Configuration Grid/Setup. Sets the nominal grid
        frequency for the installation. Use 60 Hz for North America and most
        split-phase installs; use 50 Hz for regions that operate at 230 V
        single-phase.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Grid/Grid Connection. Shows
        whether the inverter is permitted to operate in grid-connected mode.
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
      longdescription: Value from Site Configuration Grid/Grid Connection. How quickly
        inverter output is allowed to increase.
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
      longdescription: Value from Site Configuration Grid/Grid Connection. Voltage
        window within which grid connection is permitted. Outside this range the
        inverter will not connect or will disconnect.
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
      longdescription: Value from Site Configuration Grid/Grid Connection. Voltage
        window within which grid connection is permitted. Outside this range the
        inverter will not connect or will disconnect.
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
      longdescription: Value from Site Configuration Grid/Grid Connection. Frequency
        window within which grid connection is permitted. Outside this range the
        inverter will not connect or will disconnect.
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
      longdescription: Value from Site Configuration Grid/Grid Connection. Frequency
        window within which grid connection is permitted. Outside this range the
        inverter will not connect or will disconnect.
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
      longdescription: Value from Site Configuration Grid/Grid Connection. Delays
        applied before initial grid connection and after a grid disturbance
        clears (reconnection). These timers help meet interconnection
        standards.  The connection delay is how long the inverter will wait
        after first being powered on.  Reconnection delay is how long the
        inverter will wait after a grid disturbance or outage clears.
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
      longdescription: Value from Site Configuration Grid/Grid Connection. Delays
        applied before initial grid connection and after a grid disturbance
        clears (reconnection). These timers help meet interconnection
        standards.  The connection delay is how long the inverter will wait
        after first being powered on.  Reconnection delay is how long the
        inverter will wait after a grid disturbance or outage clears.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 1) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 1) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 2) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 2) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 3) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Voltage trip window. If grid voltage rises above
        or falls below these thresholds for longer than the threshold time
        allows, the inverter will disconnect from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid voltage must remain
        below the lower limit or above the upper limit (Stage 3) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 1) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 1) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 2) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 2) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 3) before the
        inverter disconnects from the grid.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Sets the upper and lower grid frequency
        thresholds. If grid frequency goes outside this range, the inverter will
        disconnect from the grid to protect the system and comply with grid
        safety standards.
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
      longdescription: Value from Site Configuration Grid/Grid Protection/Grid
        Protection Parameters. Defines how long the grid frequency must remain
        below the lower limit or above the upper limit (Stage 3) before the
        inverter disconnects from the grid.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Grid/Grid Support/Constant Power
        Factor. Shows whether constant power-factor control is active.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Constant Power
        Factor. The target power factor and excitation. Under-excited = lagging
        (absorbing vars); Over-excited = leading (supplying vars).
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
      longdescription: Value from Site Configuration Grid/Grid Support/Constant Power
        Factor. The target power factor and excitation. Under-excited = lagging
        (absorbing vars); Over-excited = leading (supplying vars).
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Grid/Grid Support/Constant
        Reactive Power. Shows whether constant reactive-power control is active.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Constant
        Reactive Power. Shows whether constant reactive-power control is active.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Constant
        Reactive Power. Displays the reactive-power target as a percentage of
        rated power (vars). Excitation determines whether vars are supplied
        (leading) or absorbed (lagging).
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Shows whether Volt-VAR (voltage-reactive
        power) control is active. This value is read-only and reflects the
        current configuration or utility command.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Indicates whether the inverter autonomously
        adjusts its reference voltage (Vref).
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage reference used for Volt-VAR
        calculations.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Time constant applied when adjusting Vref.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage points (V1-V4) that define the
        Volt-VAR curve breakpoints.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage points (V1-V4) that define the
        Volt-VAR curve breakpoints.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage points (V1-V4) that define the
        Volt-VAR curve breakpoints.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Voltage points (V1-V4) that define the
        Volt-VAR curve breakpoints.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Reactive power at voltage point V1 on the
        Volt-VAR curve.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Reactive power at voltage point V2 on the
        Volt-VAR curve.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Reactive power at voltage point V3 on the
        Volt-VAR curve.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Reactive power at voltage point V4 on the
        Volt-VAR curve.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR
        (Voltage-Reactive Power). Response time used for open-loop Volt-VAR
        changes.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Grid/Grid Support/P-Q Mode
        (Active-Reactive Power). Shows whether Active/Reactive Power (P-Q)
        control mode is enabled.
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
      longdescription: Value from Site Configuration Grid/Grid Support/P-Q Mode
        (Active-Reactive Power). Breakpoint setpoints for the Active/Reactive
        Power (P-Q) characteristic.
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
      longdescription: Value from Site Configuration Grid/Grid Support/P-Q Mode
        (Active-Reactive Power). Breakpoint setpoints for the Active/Reactive
        Power (P-Q) characteristic.
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
      longdescription: Value from Site Configuration Grid/Grid Support/P-Q Mode
        (Active-Reactive Power). Breakpoint setpoints for the Active/Reactive
        Power (P-Q) characteristic.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Shows whether Volt-Watt (voltage-active power)
        control is enabled.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Voltage points that define the Volt-Watt curve.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Voltage points that define the Volt-Watt curve.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Power setpoint at voltage breakpoint V2 on the
        Volt-Watt curve.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt
        (Voltage-Active Power). Response time used for open-loop Volt-Watt
        changes.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Indicates whether frequency-power (Freq-Watt)
        control is currently enabled.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Response time applied to open-loop
        frequency-power adjustments.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Over Frequency Droop dbOF â€” Deadband around
        nominal frequency before active power reduction begins.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Over Frequency Droop kOF â€” Slope (gain k) of
        active power reduction versus frequency rise above nominal.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Under Frequency Droop dbUF â€” Deadband around
        nominal frequency before active power increase/response begins.
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
      longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt
        (Frequency-Active Power). Under Frequency Droop kUF â€” Slope (gain k)
        of active power response versus frequency drop below nominal.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Inverter/Power Limits. Shows
        whether power output limiting is currently active. When not limited, the
        inverter can deliver its full available power (subject only to natural
        hardware limits). When limited, an external or configured cap is applied
        to restrict inverter output to the specified Power Limit.
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
      longdescription: Value from Site Configuration Inverter/Power Limits. The
        inverter's present active-power output limit as a percentage of its
        rated capacity. If power limiting is active, the inverter will limit its
        output power to this percentage of its rated capacity.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Inverter/Selling Power. Allows
        the inverter to sell/export power back to the utility grid. Enable this
        only if local regulations and interconnect agreements permit grid
        export.
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
      longdescription: Value from Site Configuration Inverter/Selling Power. Sets the
        maximum power the inverter is allowed to sell/export to the grid. Use
        this to meet utility export limits or site commissioning requirements.
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
      longdescription: Value from Site Configuration Inverter/Selling Power. Keeps
        power export at or near zero by adjusting inverter output in real time.
        When enabled, the inverter supplies only local (on-site) loads and will
        not send power back to the grid. This mode is required when grid export
        is not allowed. Ensure the CTs are installed on the grid connection
        point and  not on the inverter's load side, so the inverter can
        correctly detect and prevent export.
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
      longdescription: FeedInGridPowerMaxSetValue
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Battery/Grid Charge. Enables the
        battery to charge from the utility grid. This value is set on the
        inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. Sets the
        maximum power the inverter will draw from the grid for charging. This
        cap applies when Grid Charge is enabled (and within any configured time
        windows). This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. Select
        whether grid charging follows a time schedule or SOC/voltage thresholds.
        This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. Defines when
        grid charging starts and stops based on battery state of charge (SOC).
        Charging starts when SOC falls below Start SOC and stops when it reaches
        Stop SOC. This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. Defines when
        grid charging starts and stops based on battery state of charge (SOC).
        Charging starts when SOC falls below Start SOC and stops when it reaches
        Stop SOC. This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. During these
        times, your battery will continue to charge from solar power normally,
        but will also use additional power from the grid to charge the battery.
        This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. During these
        times, your battery will continue to charge from solar power normally,
        but will also use additional power from the grid to charge the battery.
        This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. During these
        times, your battery will continue to charge from solar power normally,
        but will also use additional power from the grid to charge the battery.
        This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. During these
        times, your battery will continue to charge from solar power normally,
        but will also use additional power from the grid to charge the battery.
        This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. During these
        times, your battery will continue to charge from solar power normally,
        but will also use additional power from the grid to charge the battery.
        This value is set on the inverter.
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
      longdescription: Value from Site Configuration Battery/Grid Charge. During these
        times, your battery will continue to charge from solar power normally,
        but will also use additional power from the grid to charge the battery.
        This value is set on the inverter.
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
      longdescription: ACChargePowerMaxSetValue
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Backup Power/Backup Power.
        Controls whether the inverter provides AC output when operating without
        the utility grid. Disable to prevent output in off-grid mode.
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
      longdescription: Value from Site Configuration Backup Power/Backup Power.
        Selects the AC output voltage when operating in backup (EPS) mode. Match
        this to your local service voltage for proper compatibility with
        connected loads.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Generator/Generator. If using a
        generator, select which port it's connected to â€” either the GEN port
        or the Grid Input port (sometimes called microgrid mode). If no
        generator is installed, leave this setting on GEN port.
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
        label_text: Generator
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
      longdescription: Value from Site Configuration Generator/Generator. Sets the
        maximum DC current the inverter will send to the battery when charging
        from the generator.
      dtype: uint32
      unit: uint32
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Value from Site Configuration Generator/Generator. Specify the
        generator's continuous rated output power.
      dtype: uint16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Value from Site Configuration Generator/Generator. Sets the
        time the generator continues running after charging stops to allow for
        safe cooling.
      dtype: uint16
      unit: N/A
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Value from Site Configuration Generator/Generator. Configures
        the battery state of charge thresholds for automatic generator control.
        The generator will start when battery SOC drops to StartSOC and stop
        when it reaches StopSOC.
      dtype: uint16
      unit: "%"
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Value from Site Configuration Generator/Generator. Configures
        the battery state of charge thresholds for automatic generator control.
        The generator will start when battery SOC drops to StartSOC and stop
        when it reaches StopSOC.
      dtype: uint16
      unit: "%"
      category: Generator
      meanings: {}
    labels:
      - label_family: Level of Detail
        label_text: Complete
      - label_family: Equipment
        label_text: Generator
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
      longdescription: Value from Site Configuration Generator/Generator. Enables
        dynamic adjustment of generator charging power for faster battery
        recovery when needed.
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
        label_text: Generator
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
      longdescription: Value from Site Configuration Generator/Generator. Start the
        generator to charge the battery.
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
        label_text: Generator
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration AC Coupled PV/AC Coupled PV.
        Enable this option when connecting a grid-tied solar inverter (AC
        Coupled PV) to the system. Disable when no AC Coupled PV is present.
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
      longdescription: Value from Site Configuration AC Coupled PV/AC Coupled PV.
        Defines the battery state-of-charge thresholds that control when the
        inverter allows AC Coupled PV charging to start and stop.
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
      longdescription: Value from Site Configuration AC Coupled PV/AC Coupled PV.
        Defines the battery state-of-charge thresholds that control when the
        inverter allows AC Coupled PV charging to start and stop.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Smart Load/Smart Load. Powers
        non-essential loads only when excess solar or battery energy is
        available. Enable this to automatically use surplus energy for optional
        circuits.
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
        control conditions are not met. (AKA: **On-Grid Always On**.)"
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
      longdescription: Value from Site Configuration Smart Load/Smart Load. Defines
        when the Smart Load turns on. The Smart Load port is energized once PV
        power exceeds this threshold **and** the battery SOC is above the start
        limit.
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
      longdescription: Value from Site Configuration Smart Load/Smart Load. Defines
        the battery state-of-charge limits that control the Smart Load. The
        Smart Load turns on when SOC rises above the start limit **and** PV
        power exceeds the start power limit.  Smart load turns off when SOC
        falls below the stop limit.
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
      longdescription: Value from Site Configuration Smart Load/Smart Load. Defines
        the battery state-of-charge limits that control the Smart Load. The
        Smart Load turns on when SOC rises above the start limit **and** PV
        power exceeds the start power limit.  Smart load turns off when SOC
        falls below the stop limit.
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
      longdescription: Reserved
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
      longdescription: Value from Site Configuration Inverter/Parallel. The Unit ID
        (also known as the unit ID, slave ID, or node ID) for this inverter. The
        primary inverter should use address 1, and any secondary inverters
        should use 2 or higher. This sets the modbus address that inverters use
        to communicate with each other. Each inverter that communicates on the
        same Modbus communication line must have a unique address, but addresses
        do not need to be globally unique across separate, unconnected systems.
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
        phases.
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
      longdescription: Value from Site Configuration Inverter/Parallel. Selects which
        output phase this inverter is responsible for in a three-phase system.
        R, S, and T correspond to L1, L2, and L3.
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
      longdescription: Value from Site Configuration Inverter/Parallel. Attribute in
        Parallel cluster
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
      longdescription: Value from Site Configuration Inverter/Parallel. Allows
        inverters in a parallel group to use a common battery bank instead of
        keeping batteries isolated per inverter.
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
      longdescription: Value from Site Configuration Inverter/Parallel. Total number
        of inverters detected in this parallel system.
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
      longdescription: Value from Site Configuration Inverter/Parallel. Reports
        whether this inverter is acting as Primary (sometimes called the Master)
        or Secondary in the current parallel configuration.
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
      longdescription: Value from Site Configuration Inverter/Parallel. Reports which
        phase (R / S / T) this inverter is currently serving in the parallel
        system.
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
      longdescription: Reserved
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
      longdescription: A_SF
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
      longdescription: V_SF
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
      longdescription: W_SF
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
      longdescription: KW_SF
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
      longdescription: PF_SF
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
      longdescription: Hz1_SF
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
      longdescription: Hz2_SF
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
      longdescription: Time_SF
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
      longdescription: Time1_SF
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
      longdescription: Time2_SF
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
      longdescription: Resistance_SF
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
      longdescription: Ah_SF
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
      longdescription: Droop1_SF
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
      longdescription: Droop2_SF
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
      longdescription: Percentage1_SF
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
      longdescription: Percentage2_SF
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
      longdescription: Percentage3_SF
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
      longdescription: Reserved
      dtype: string
      unit: string
      category: Scale Factors
      meanings: {}
`,D_=`protocols:
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
        `,E_=`# Label Help Text
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
`;function P_({selectedInverters:e,onChange:t,availableInverters:n=["001","002","003"],getFullSerialNumber:l}){const[i,a]=U.useState(!1),r=U.useRef(null),s=e.size===n.length,c=s?"All Inverters":Array.from(e).sort().map(m=>l(m)).join(", ");U.useEffect(()=>{const m=f=>{r.current&&!r.current.contains(f.target)&&a(!1)};if(i)return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[i]);const d=()=>{t(s?new Set(["001"]):new Set(n))},u=m=>{const f=new Set(e);f.has(m)?(f.delete(m),f.size===0&&f.add("001")):f.add(m),t(f)};return o.jsxs("div",{className:"relative",ref:r,children:[o.jsxs("button",{type:"button",onClick:()=>a(!i),className:"text-xs border border-blue-300 rounded px-2 py-1 bg-white text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1",children:[o.jsx("span",{children:c}),o.jsx("svg",{className:`h-3 w-3 transition-transform ${i?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),i&&o.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]",children:o.jsxs("div",{className:"py-1",children:[o.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:s,onChange:d,className:"h-3 w-3"}),o.jsx("span",{className:"text-xs text-gray-700",children:"All Inverters"})]}),n.map(m=>o.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:e.has(m),onChange:()=>u(m),className:"h-3 w-3"}),o.jsx("span",{className:"text-xs text-gray-700",children:l(m)})]},m))]})})]})}const Cu=[{bg:"bg-purple-500",border:"border-purple-600"},{bg:"bg-green-500",border:"border-green-600"},{bg:"bg-teal-500",border:"border-teal-600"},{bg:"bg-blue-500",border:"border-blue-600"},{bg:"bg-pink-500",border:"border-pink-600"},{bg:"bg-orange-500",border:"border-orange-600"},{bg:"bg-indigo-500",border:"border-indigo-600"},{bg:"bg-red-500",border:"border-red-600"}],Su=["text-purple-500","text-green-500","text-teal-500","text-blue-500","text-pink-500","text-orange-500","text-indigo-500","text-red-500"],Lu=[{bg50:"bg-purple-50",bg100:"bg-purple-100",border200:"border-purple-200",border400:"border-purple-400",bg500:"bg-purple-500/80",text600:"text-purple-600",text700:"text-purple-700",ring:"focus:ring-purple-500"},{bg50:"bg-green-50",bg100:"bg-green-100",border200:"border-green-200",border400:"border-green-400",bg500:"bg-green-500/80",text600:"text-green-600",text700:"text-green-700",ring:"focus:ring-green-500"},{bg50:"bg-teal-50",bg100:"bg-teal-100",border200:"border-teal-200",border400:"border-teal-400",bg500:"bg-teal-500/80",text600:"text-teal-600",text700:"text-teal-700",ring:"focus:ring-teal-500"},{bg50:"bg-blue-50",bg100:"bg-blue-100",border200:"border-blue-200",border400:"border-blue-400",bg500:"bg-blue-500/80",text600:"text-blue-600",text700:"text-blue-700",ring:"focus:ring-blue-500"},{bg50:"bg-pink-50",bg100:"bg-pink-100",border200:"border-pink-200",border400:"border-pink-400",bg500:"bg-pink-500/80",text600:"text-pink-600",text700:"text-pink-700",ring:"focus:ring-pink-500"},{bg50:"bg-orange-50",bg100:"bg-orange-100",border200:"border-orange-200",border400:"border-orange-400",bg500:"bg-orange-500/80",text600:"text-orange-600",text700:"text-orange-700",ring:"focus:ring-orange-500"},{bg50:"bg-indigo-50",bg100:"bg-indigo-100",border200:"border-indigo-200",border400:"border-indigo-400",bg500:"bg-indigo-500/80",text600:"text-indigo-600",text700:"text-indigo-700",ring:"focus:ring-indigo-500"},{bg50:"bg-red-50",bg100:"bg-red-100",border200:"border-red-200",border400:"border-red-400",bg500:"bg-red-500/80",text600:"text-red-600",text700:"text-red-700",ring:"focus:ring-red-500"}],N_=36,an={width:1e3,height:360},A_=["001","002","003"],Uf=e=>{const t=parseInt(e,10);return(1e9+t*1e4+t).toString().padStart(10,"0")};function $f(e){let t=0;for(let n=0;n<e.length;n+=1)t=t*31+e.charCodeAt(n)>>>0;return()=>(t=t*1664525+1013904223>>>0,t/2**32)}function V_(e){const t=[];for(let i=0;i<e;i+=1){const a=720+i*10,r=Math.floor(a/60)%24,s=a%60;t.push(`${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`)}return t}function R_(e,t=N_){const n=$f(`line-${e}`),l=[];let i=n()*60+20;for(let a=0;a<t;a+=1){const r=n()-.5,s=4+n()*8,c=i+r*s;i=l.length?l[l.length-1]*.7+c*.3:c,i=Math.max(0,Math.min(140,i)),l.push(Number(i.toFixed(2)))}return l}function I_(e){if(!e.meaningKeys.length)return null;const t=e.meaningKeys,n=$f(e.pointKey),l=t.filter((u,m)=>n()>.35||m===0);l.length===0&&l.push(t[0]);const i=12,a=V_(i),s=(typeof e.dtype=="string"?e.dtype.toLowerCase():"").startsWith("bitfield"),c=Array.from({length:i},()=>new Set);if(s)for(let u=0;u<i;u+=1){let m=!1;l.forEach((f,p)=>{n()>.55&&(c[u].add(f),m=!0),!m&&p===l.length-1&&n()>.7&&(c[u].add(f),m=!0)})}else{let u=0;for(;u<i&&l.length;){const m=Math.floor(n()*l.length),f=l[m],p=1+Math.floor(n()*3);if(n()>.2)for(let x=0;x<p&&u+x<i;x+=1)c[u+x].add(f);u+=p}}const d=t.map(u=>{var _,g;const m=String(u),f=(_=e.friendlyMeanings)==null?void 0:_[m],p=(g=e.meanings)==null?void 0:g[m],x=(f??p??m).trim()||`Value ${m}`,b=c.map(y=>y.has(u));return{meaningKey:u,label:x,activeSlots:b}});return{id:e.pointKey,title:e.name,subtitle:`SN ${e.shortSN}`,timeLabels:a,rows:d,colorIndex:e.colorIndex}}function G_(e,t,n){const l=String(t||"").trim();if(!l)return!1;const i=l.toLowerCase(),a=Array.isArray(e.labels)?e.labels:[];if(a.length===0)return!1;for(const r of a)if(!(!r||typeof r!="object")&&!(!r.label_family||typeof r.label_family!="string"))try{const s=n(r.label_family,r.label_text);if(s&&typeof s=="string"&&s.length>0&&s.toLowerCase().includes(i))return!0}catch{continue}return!1}function Wf({levelName:e,levelData:t,selected:n,toggle:l,showHelp:i,onUpdateInverters:a,groupsExpanded:r,pointHelpEnabled:s,onTogglePointHelp:c,onOpenChartTutorial:d,depth:u=0,query:m,parentPath:f="",hierarchy:p=[],getLabelColor:x,getLabelHelp:b}){const _=f?`${f}-${e.replace(/\s+/g,"-")}`:e.replace(/\s+/g,"-"),g=`group-${_}-${u}`,y=Array.isArray(t),h=p[u]||"";if(!t)return null;const v=C=>{const S=`${C.model}:${C.point}`,B=C.entry.description||S,O=C.entry.longdescription||B,Y=typeof C.entry.dtype=="string"?C.entry.dtype.toLowerCase():"",N=Y.includes("enum")||Y.startsWith("bitfield"),q=C.entry.unit&&C.entry.unit!=="N/A"?` (${C.entry.unit})`:"",le=n.has(S),I=le?n.get(S)||new Set(["001"]):new Set,X=Array.isArray(C.labels)?C.labels:[],ae=i||s.has(S),A=G_(C,m,b);return o.jsxs("div",{id:`point-${S.replace(/:/g,"-")}`,"data-point-key":S,className:"rounded-md px-2 py-1 hover:bg-gray-50 transition-colors",children:[o.jsx("div",{className:"flex items-start gap-2 flex-wrap",children:o.jsxs("label",{className:"flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0",children:[o.jsx("input",{type:"checkbox",checked:le,onChange:V=>{V.stopPropagation(),l(S)},onClick:V=>{V.stopPropagation()},className:"h-4 w-4 flex-shrink-0"}),o.jsxs("span",{className:"text-sm flex items-center gap-1",children:[o.jsxs("span",{children:[B,q]}),N&&o.jsx("span",{className:"text-base leading-none cursor-pointer hover:opacity-70",title:"Selecting this point shows named modes or states as colored bars instead of a line chart. Click to learn more.","aria-label":"Categorical visualization - click to learn more",onClick:V=>{V.preventDefault(),V.stopPropagation(),d==null||d()},children:"📊"})]}),o.jsxs("div",{className:"relative ml-1 flex-shrink-0",children:[o.jsx("span",{className:`cursor-pointer ${ae?"text-blue-600 hover:text-blue-700":"text-gray-400 hover:text-gray-600"}`,title:O,"aria-label":"Help",onClick:V=>{V.preventDefault(),V.stopPropagation(),c(S)},onMouseDown:V=>{V.preventDefault(),V.stopPropagation()},children:"ⓘ"}),A&&o.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse","aria-hidden":"true"},`red-dot-${S}`)]}),le&&o.jsxs("div",{className:"ml-auto flex items-center gap-1 flex-shrink-0",onClick:V=>V.stopPropagation(),children:[o.jsx("span",{className:"text-xs text-gray-600",children:"Inverter SN:"}),o.jsx(P_,{selectedInverters:I,onChange:V=>a(S,V),getFullSerialNumber:Uf})]}),ae&&X.length>0&&o.jsx("div",{className:"ml-2 flex flex-wrap gap-1 w-full",children:X.map((V,R)=>{const z=x(V.label_family,V.label_text),de=b(V.label_family,V.label_text)||`${V.label_family}: ${V.label_text}`;return o.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${z.bg} ${z.text} ${z.border}`,title:de,children:V.label_text},R)})})]})}),ae&&o.jsx("div",{className:"pl-6 text-xs text-gray-500 whitespace-pre-wrap",children:O})]},S)};if(y){const C=t;return o.jsx("div",{className:"ml-2 space-y-1",children:C.map(v)})}if(!(t instanceof Map))return console.error("LabelGroup: levelData is neither array nor Map",{levelName:e,depth:u,levelData:t,type:typeof t}),null;const L=t,T=u===0;return o.jsxs("details",{id:g,className:`group border-b py-2 ${T?"":"ml-2 border-l pl-2"}`,open:r,children:[o.jsxs("summary",{className:`cursor-pointer list-none ${T?"font-semibold":"font-medium text-gray-700"} flex items-center justify-between`,children:[o.jsxs("div",{className:"flex items-center flex-1 min-w-0",children:[o.jsx("span",{className:"mr-1",children:"▾"}),o.jsx("span",{className:"truncate",children:e})]}),h&&o.jsx("span",{className:"ml-2 px-2 py-0.5 text-[10px] font-normal uppercase tracking-wide text-gray-500 bg-gray-100 rounded-full flex-shrink-0 cursor-help",title:b(h)||h,children:h})]}),o.jsx("div",{className:"mt-2 ml-1 space-y-2",children:[...L.entries()].map(([C,S])=>C===""?Array.isArray(S)?o.jsx("div",{className:"ml-2 space-y-1",children:S.map(v)},""):null:o.jsx(Wf,{levelName:C,levelData:S,selected:n,toggle:l,showHelp:i,onUpdateInverters:a,groupsExpanded:r,pointHelpEnabled:s,onTogglePointHelp:c,onOpenChartTutorial:d,depth:u+1,query:m,parentPath:_,hierarchy:p,getLabelColor:x,getLabelHelp:b},C))})]})}function Hf({family:e,labels:t,onClose:n,getLabelHelp:l}){const i=l(e),a=[...t].sort();return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:n,children:o.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsxs("h2",{className:"text-xl font-semibold text-gray-800",children:[e," Labels"]}),o.jsx("button",{onClick:n,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),i&&o.jsxs("div",{className:"mb-4 rounded-lg bg-blue-50 p-3 text-sm text-gray-700",children:[o.jsxs("strong",{className:"font-semibold",children:["About ",e,":"]})," ",i]}),o.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:o.jsx("div",{className:"space-y-4",children:a.map(r=>{const s=l(e,r);return o.jsxs("div",{className:"border-b border-gray-200 pb-3 last:border-b-0",children:[o.jsx("div",{className:"mb-1 font-medium text-gray-800",children:r}),s?o.jsx("div",{className:"text-sm text-gray-600",children:s}):o.jsx("div",{className:"text-sm italic text-gray-400",children:"No help text available"})]},r)})})})]})})}function M_({onClose:e}){return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:o.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"How do filters work?"}),o.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"space-y-4 text-gray-700",children:[o.jsx("p",{children:"Use filters to quickly jump to the part of the system you're interested in—like just battery settings, inverter readings, or grid-related features—without needing to scroll through the full list."}),o.jsx("p",{children:"Select any combination of filters—such as component, type of data, unit, or feature—and the list will update instantly to show only points that match your selection. You can choose multiple filters at once to get more specific."}),o.jsx("p",{children:"As you refine the list, filters that no longer apply will dim, show a count of zero, and become unavailable, helping you see which combinations still have matching points."})]})]})})}function B_({allLabels:e,selectedLabels:t,onToggleLabel:n,onClearFilters:l,protocols:i,detailLevel:a,filterStructure:r,getLabelColor:s,getLabelHelp:c}){const[d,u]=U.useState(200),[m,f]=U.useState(!1),[p,x]=U.useState(null),[b,_]=U.useState(!1),[g,y]=U.useState(!0),h=U.useRef(null),v=U.useRef(null),L=U.useMemo(()=>{const N=[];return["Equipment","Component","Type of Data","Unit"].forEach(le=>{e.has(le)&&N.push(le)}),e.forEach((le,I)=>{I!=="Level of Detail"&&!N.includes(I)&&N.push(I)}),N},[e]),T=N=>Array.from(t).filter(q=>q.startsWith(`${N}:`)).map(q=>q.split(":",2)[1]),C=N=>{if(r!=="sequential")return!1;const q=L.indexOf(N);if(q===0)return!1;const le=L[q-1];return T(le).length===0},S=U.useCallback((N,q)=>{const le=`${N}:${q}`,I=new Set;t.forEach(A=>{const[V]=A.split(":",2);V!==N&&I.add(A)}),I.add(le);const X=new Map;I.forEach(A=>{const[V,R]=A.split(":",2);X.has(V)||X.set(V,new Set),X.get(V).add(R)});const ae=(()=>{switch(a){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();return i.filter(A=>{const V=Array.isArray(A.labels)?A.labels:[],R=V.filter(J=>J.label_family==="Level of Detail").map(J=>J.label_text);if(R.length>0&&!R.some(de=>ae.includes(de)))return!1;const z=new Map;V.forEach(J=>{z.has(J.label_family)||z.set(J.label_family,new Set),z.get(J.label_family).add(J.label_text)});for(const[J,de]of X.entries()){const ee=z.get(J);if(!ee||![...de].some(me=>ee.has(me)))return!1}return!0}).length},[t,i,a]),B=N=>{N.preventDefault(),f(!0)};U.useEffect(()=>{if(!m)return;const N=le=>{if(h.current){const I=h.current.getBoundingClientRect(),X=le.clientY-I.top;X>=100&&X<=600&&u(X)}},q=()=>{f(!1)};return document.addEventListener("mousemove",N),document.addEventListener("mouseup",q),()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",q)}},[m]);const O=Array.from(t).map(N=>{const[q,le]=N.split(":",2);return{family:q,text:le}}).filter(({family:N})=>N!=="Level of Detail"),Y=new Map(e);return Y.delete("Level of Detail"),o.jsxs("div",{ref:h,className:"mb-3 rounded-lg border bg-gray-50 p-2",children:[o.jsxs("details",{ref:v,className:"group",open:g,onToggle:N=>y(N.target.open),children:[o.jsx("summary",{className:"cursor-pointer list-none",children:o.jsxs("div",{className:"mb-1 flex items-center gap-2 text-xs font-semibold text-gray-700",children:[o.jsx("svg",{className:"h-4 w-4 text-gray-600 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),o.jsx("span",{className:"flex-shrink-0",children:"Filters"}),O.length>0&&o.jsxs("span",{className:"text-gray-500",children:["(",O.length," active)"]})]})}),o.jsxs("div",{className:"mb-2 flex items-center justify-between gap-2 flex-wrap",children:[o.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[!g&&Y.size>0&&o.jsx("button",{onClick:N=>{N.stopPropagation(),v.current&&(v.current.open=!0,y(!0))},className:"rounded border border-gray-300 bg-white px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex-shrink-0",children:"+ Add Filter"}),O.length>0&&o.jsx("div",{className:"flex flex-wrap items-center gap-1.5 min-w-0",children:O.map(({family:N,text:q})=>{const le=s(N,q);return o.jsxs("span",{className:`rounded border px-1.5 py-0.5 text-xs ${le.bg} ${le.text} ${le.border} border-2 font-semibold flex-shrink-0 flex items-center gap-1`,children:[o.jsx("span",{children:q}),o.jsx("button",{onClick:I=>{I.stopPropagation(),n(N,q)},className:"hover:opacity-70 transition-opacity flex-shrink-0",title:`Remove ${N}: ${q} filter`,"aria-label":`Remove ${N}: ${q} filter`,children:o.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},`${N}:${q}`)})}),O.length>0&&o.jsx("button",{onClick:N=>{N.stopPropagation(),l()},className:"flex-shrink-0 text-xs text-gray-500 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:"Clear all"})]}),o.jsx("button",{onClick:N=>{N.preventDefault(),N.stopPropagation(),_(!0)},className:"flex-shrink-0 text-xs text-blue-600 hover:text-blue-700 underline transition-colors",children:"How do I use filters?"})]}),o.jsx("div",{className:"space-y-0.5 overflow-auto mt-2",style:{height:`${d}px`},children:r==="sequential"?o.jsx(o.Fragment,{children:L.map((N,q)=>{const le=Y.get(N);if(!le)return null;const I=T(N),X=C(N),ae=I.length>0,A=!X,V=c(N),R=s(N,"");return X&&!ae?null:o.jsxs("div",{children:[q>0&&o.jsx("div",{className:"border-t border-gray-200 my-1"}),o.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-1 px-1 rounded bg-gray-50/30",children:[o.jsxs("button",{onClick:()=>x(N),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${ae?`${R.bg} ${R.text} ${R.border} border-2`:X?"bg-slate-50 text-slate-400 border-slate-200 border":`${R.bg} ${R.text} ${R.border} border`}`,title:V||`View help for ${N} labels`,"aria-label":`Help for ${N}`,children:[o.jsx("span",{className:"truncate",children:N}),o.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${R.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...le].sort().map(z=>{const J=`${N}:${z}`,de=I.includes(z),ee=A?S(N,z):0,te=!A||!de&&ee===0,me=s(N,z),Ve=c(N,z);return o.jsxs("button",{onClick:()=>{te||n(N,z)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${te?"opacity-40 cursor-not-allowed bg-white":de?`${me.bg} ${me.text} ${me.border} border-2 font-semibold`:`bg-white ${me.text} ${me.border} hover:opacity-80 cursor-pointer`}`,style:!de&&!te?{borderColor:"currentColor"}:void 0,title:X?"Pick something above to unlock this step":te?"No points available with this combination of filters":Ve||`${N}: ${z}`,"aria-disabled":te,tabIndex:te?-1:0,children:[o.jsx("span",{children:z}),!de&&A&&o.jsxs("span",{className:`ml-1 ${te?"text-gray-400":"text-gray-500"}`,children:["(",ee,")"]})]},J)})})]})]},N)})}):o.jsx(o.Fragment,{children:L.map((N,q)=>{const le=Y.get(N);if(!le)return null;const I=c(N),X=s(N,""),ae=Array.from(le).some(A=>t.has(`${N}:${A}`));return o.jsxs("div",{children:[q>0&&o.jsx("div",{className:"border-t border-gray-200 my-1"}),o.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-1 px-1 rounded bg-gray-50/30",children:[o.jsxs("button",{onClick:()=>x(N),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${ae?`${X.bg} ${X.text} ${X.border} border-2`:`${X.bg} ${X.text} ${X.border} border`}`,title:I||`View help for ${N} labels`,"aria-label":`Help for ${N}`,children:[o.jsx("span",{className:"truncate",children:N}),o.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${X.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...le].sort().map(A=>{const V=`${N}:${A}`,R=t.has(V),z=S(N,A),J=!R&&z===0,de=s(N,A),ee=c(N,A);return o.jsxs("button",{onClick:()=>{J||n(N,A)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${J?"opacity-40 cursor-not-allowed bg-white":R?`${de.bg} ${de.text} ${de.border} border-2 font-semibold`:`bg-white ${de.text} ${de.border} hover:opacity-80 cursor-pointer`}`,style:!R&&!J?{borderColor:"currentColor"}:void 0,title:J?"No points available with this combination of filters":ee||`${N}: ${A}`,"aria-disabled":J,tabIndex:J?-1:0,children:[o.jsx("span",{children:A}),!R&&o.jsxs("span",{className:`ml-1 ${J?"text-gray-400":"text-gray-500"}`,children:["(",z,")"]})]},V)})})]})]},N)})})}),o.jsx("div",{onMouseDown:B,className:"mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors",title:"Drag to resize"})]}),p&&o.jsx(Hf,{family:p,labels:e.get(p)||new Set,onClose:()=>x(null),getLabelHelp:c}),b&&o.jsx(M_,{onClose:()=>_(!1)})]})}function O_({series:e,crosshairX:t,onCrosshairChange:n}){if(e.length===0)return null;const l=e.flatMap(d=>d.values),i=Math.min(...l,0),r=Math.max(...l,1)-i||1,s=d=>{if(!n)return;const u=d.currentTarget.getBoundingClientRect(),m=(d.clientX-u.left)/u.width*100;n(Math.max(0,Math.min(100,m)))},c=()=>{n&&n(null)};return o.jsx("div",{className:"h-full w-full relative",onMouseMove:s,onMouseLeave:c,children:o.jsxs("svg",{viewBox:`0 0 ${an.width} ${an.height}`,preserveAspectRatio:"none",className:"h-full w-full",children:[e.map(({entry:d,values:u})=>{if(u.length<2)return null;const m=u.map((f,p)=>{const x=p/(u.length-1)*an.width,b=(f-i)/r,_=an.height-b*an.height;return`${p===0?"M":"L"}${x.toFixed(2)},${_.toFixed(2)}`}).join(" ");return o.jsx("path",{d:m,fill:"none",stroke:"currentColor",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round",className:`${Su[d.colorIndex%Su.length]} drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]`,opacity:.95},d.pointKey)}),t!=null&&o.jsx("line",{x1:t/100*an.width,y1:0,x2:t/100*an.width,y2:an.height,stroke:"#374151",strokeWidth:1.5,strokeDasharray:"4 2",opacity:.7,pointerEvents:"none"})]})})}function j_({data:e,onRemove:t,crosshairX:n,onCrosshairChange:l,onDragStart:i,onDragEnd:a,isDragActive:r}){const[s,c]=U.useState(!0),d=s?e.rows.filter(x=>x.activeSlots.some(Boolean)):e.rows,u=e.rows.length-d.length,m=Lu[e.colorIndex%Lu.length],f=x=>{if(!l)return;const b=x.currentTarget.getBoundingClientRect(),_=(x.clientX-b.left)/b.width*100;l(Math.max(0,Math.min(100,_)))},p=()=>{l&&l(null)};return o.jsxs("div",{draggable:!0,onDragStart:x=>{x.stopPropagation(),i&&i();const b=x.currentTarget.cloneNode(!0);b.style.position="absolute",b.style.top="-1000px",document.body.appendChild(b),x.dataTransfer.setDragImage(b,0,0),setTimeout(()=>document.body.removeChild(b),0)},onDragEnd:x=>{x.stopPropagation(),a&&a()},className:`rounded-lg border ${m.border200} bg-white shadow-sm ${r?"cursor-grab active:cursor-grabbing":""}`,children:[o.jsxs("div",{className:`flex items-center justify-between gap-2 border-b ${m.border200} ${m.bg50} px-4 py-1.5`,children:[o.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.jsx("span",{className:`font-semibold ${m.text700}`,children:e.title}),o.jsx("span",{className:m.text600,children:e.subtitle})]}),o.jsxs("div",{className:`flex items-center gap-3 text-xs ${m.text700}`,children:[o.jsxs("label",{className:"flex items-center gap-1.5 font-medium",children:[o.jsx("input",{type:"checkbox",checked:s,onChange:x=>c(x.target.checked),className:`h-3 w-3 rounded ${m.border400} ${m.text600} ${m.ring}`}),"Hide empty bars"]}),o.jsxs("span",{className:`text-[11px] ${m.text600}`,children:[u," values hidden"]}),t&&o.jsx("button",{type:"button",onClick:x=>{x.stopPropagation(),t()},className:"text-[11px] px-2 py-1 rounded border border-transparent text-gray-500 hover:text-red-600 hover:border-red-200 transition-colors",title:"Remove this point","aria-label":"Remove categorical point",children:"×"})]})]}),o.jsxs("div",{className:"px-4 py-3 relative",onMouseMove:f,onMouseLeave:p,children:[o.jsx("div",{className:"space-y-1",children:d.length===0?o.jsx("div",{className:"text-xs text-gray-500 italic",children:'No categorical data is visible. Disable "Hide empty bars" to view all meanings.'}):d.map(x=>o.jsxs("div",{className:"flex flex-col",children:[o.jsx("div",{className:"text-[10px] font-medium text-gray-600 mb-0.5",children:x.label}),o.jsx("div",{className:`relative h-3 rounded ${m.bg100} overflow-hidden`,children:o.jsx("div",{className:"absolute inset-0 flex",children:x.activeSlots.map((b,_)=>o.jsx("div",{className:`flex-1 ${_<x.activeSlots.length-1?`border-r ${m.border200}`:""} ${b?m.bg500:"bg-transparent"}`},`${x.meaningKey}-${_}`))})})]},x.meaningKey))}),n!=null&&o.jsx("div",{className:"absolute top-0 bottom-0 w-px bg-gray-700 pointer-events-none opacity-70",style:{left:`calc(1rem + ${n}%)`}})]})]})}function F_({selectedPoints:e,protocols:t,onUpdateInverters:n,onScrollToPoint:l,onRemoveInverter:i,onSelectPointsToggle:a,selectPointsOpen:r,onDeleteChart:s,onShowTutorial:c,crosshairX:d,onCrosshairChange:u,onDragStart:m,onDragEnd:f,isDragActive:p,isDropTarget:x}){const[b,_]=U.useState(new Set),g=Array.from(e.entries()).map(([I,X])=>{const[ae,A]=I.split(":"),V=t.find(z=>z.model===ae&&z.point===A),R=V&&(V.entry.description||V.entry.name)||A;return{key:I,name:R,inverters:X}}).filter(I=>I.name),y=g.flatMap(({key:I,name:X,inverters:ae})=>{var pe,Be,Xn,Jn,Zn,el;const[A,V]=I.split(":"),R=t.find(nt=>nt.model===A&&nt.point===V),z=(pe=R==null?void 0:R.entry)!=null&&pe.unit&&R.entry.unit!=="N/A"?R.entry.unit:"N/A",J=((Be=R==null?void 0:R.entry)==null?void 0:Be.longdescription)||((Xn=R==null?void 0:R.entry)==null?void 0:Xn.description)||"",de=(Jn=R==null?void 0:R.entry)==null?void 0:Jn.dtype,ee=(Zn=R==null?void 0:R.entry)==null?void 0:Zn.meanings,te=(el=R==null?void 0:R.entry)==null?void 0:el.friendly_meanings,me=new Set;ee&&Object.keys(ee).forEach(nt=>me.add(String(nt))),te&&Object.keys(te).forEach(nt=>me.add(String(nt)));const Ve=Array.from(me),$t=Ve.length>0;return Array.from(ae).sort().map((nt,tl)=>{const M=Uf(nt);return{key:I,pointKey:`${I}:${nt}`,name:X,shortSN:nt,fullSN:M,unit:z,model:A,point:V,longDescription:J,colorIndex:(g.findIndex(ie=>ie.key===I)*A_.length+tl)%Cu.length,dtype:de,meanings:ee,friendlyMeanings:te,meaningKeys:Ve,isCategorical:$t}})}),h=y.filter(I=>!b.has(I.pointKey)),v=h.filter(I=>I.isCategorical),L=h.filter(I=>!I.isCategorical),T=y.filter(I=>!I.isCategorical),C=U.useMemo(()=>v.map(I=>I_(I)).filter(I=>I!==null),[v]),S=L.length>0,B=U.useMemo(()=>L.map(I=>({entry:I,values:R_(I.pointKey)})),[L]),O=I=>{_(X=>{const ae=new Set(X);return ae.has(I)?ae.delete(I):ae.add(I),ae})},Y=I=>{const X=T.map(V=>V.pointKey),A=X.filter(V=>!b.has(V)).length===1&&!b.has(I);_(A?new Set:new Set(X.filter(V=>V!==I)))},N=(I,X,ae)=>{ae.stopPropagation(),i==null||i(I,X)},le=!(!S&&C.length>0&&e.size>0);return o.jsxs("div",{className:"w-full h-full flex flex-col relative",children:[o.jsxs("div",{className:"absolute top-4 right-4 z-20 flex items-center gap-2",children:[a&&o.jsxs("button",{onClick:()=>a(!r),className:"text-xs px-3 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center gap-2 shadow-sm",title:r?"Hide Add Points":"Show Add Points","data-role":"sidebar-toggle",children:[o.jsx("span",{children:"Add Points"}),o.jsx("svg",{className:`h-4 w-4 text-gray-600 transition-transform ${r?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s&&o.jsx("button",{onClick:I=>{I.stopPropagation(),s()},className:"text-xs px-2 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center justify-center text-gray-600 hover:text-gray-800 opacity-80 hover:opacity-100 shadow-sm",title:"Delete chart",children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"p-4 flex flex-col h-full",children:[o.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[le&&o.jsxs("div",{className:"relative flex-1 min-h-[320px] rounded-2xl border border-gray-300 bg-gradient-to-b from-white via-white to-gray-50 shadow-inner overflow-hidden",children:[o.jsxs("div",{className:"absolute left-0 top-0 bottom-10 w-12 border-r border-gray-200 flex flex-col items-center justify-between py-4 text-gray-600",children:[o.jsx("span",{className:"text-[10px] uppercase tracking-widest leading-none transform -rotate-90",children:"Value"}),o.jsx("div",{className:"flex flex-col items-center gap-3 text-gray-400",children:[0,1,2,3,4].map(I=>o.jsx("div",{className:"w-3 h-px bg-gray-400/70"},I))}),o.jsx("span",{className:"text-[10px]",children:"0"})]}),o.jsxs("div",{className:"absolute left-12 right-6 bottom-6 h-10 border-t border-gray-200 flex items-center justify-between px-2 text-gray-500",children:[o.jsx("span",{className:"text-[11px]",children:"0"}),o.jsx("div",{className:"flex gap-2",children:[0,1,2,3,4].map(I=>o.jsx("div",{className:"h-3 w-px bg-gray-400/60"},I))}),o.jsx("span",{className:"text-[11px] uppercase tracking-widest",children:"Time"})]}),o.jsx("div",{className:`absolute top-6 bottom-16 left-12 right-6 rounded-xl bg-white/40 backdrop-blur-sm ${e.size===0?"cursor-pointer":"cursor-default"}`,onClick:I=>{I.target.closest("button")||e.size===0&&a&&a(!0)},children:e.size===0?o.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-gray-500",children:[o.jsx("div",{className:"text-base font-medium text-gray-700",children:"No points selected"}),o.jsx("div",{children:"Click anywhere in this area to select points"}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:["New to charts?"," ",o.jsx("button",{onClick:I=>{I.stopPropagation(),c==null||c()},className:"text-blue-600 hover:text-blue-700 underline",children:"View quick tutorial"})]})]}):y.length===0?o.jsx("div",{className:"flex h-full items-center justify-center text-sm text-gray-400",children:"Select points to display charts"}):S?o.jsxs("div",{className:"relative h-full w-full",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 grid grid-rows-4 opacity-30",children:[0,1,2,3].map(I=>o.jsx("div",{className:"border-b border-dashed border-gray-300"},I))}),o.jsx(O_,{series:B,crosshairX:d,onCrosshairChange:u})]}):o.jsx("div",{className:"flex h-full items-center justify-center px-6 text-center text-sm text-gray-500",children:"All selected points are hidden. Use the legend controls to show a series."})})]}),C.length>0&&o.jsx("div",{className:`${le?"":"pt-2"}`,"data-categorical-stack":!0,children:o.jsx("div",{className:"space-y-4",children:C.map(I=>{const X=()=>{const R=I.id.split(":"),z=R.pop()??"",J=R.join(":");i==null||i(J,z)},A=I.id.split(":").slice(0,-1).join(":"),V=e.get(A)||new Set;return o.jsx(j_,{data:I,onRemove:X,crosshairX:d,onCrosshairChange:u,onDragStart:()=>{m&&m(A,V)},onDragEnd:f,isDragActive:p},`${I.id}:${I.subtitle}`)})})})]}),T.length>0&&o.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:T.map(({pointKey:I,name:X,shortSN:ae,fullSN:A,colorIndex:V,key:R,unit:z,point:J,longDescription:de})=>{const ee=Cu[V],te=b.has(I),me=["Click to toggle visibility (double-click to show only this)","",`This is the point "${X}" (${J}) as read by inverter ${A}.`];de&&me.push("",de);const Ve=me.join(`
`),$t=e.get(R)||new Set;return o.jsxs("div",{draggable:!0,onDragStart:pe=>{pe.stopPropagation(),m&&m(R,$t);const Be=pe.currentTarget.cloneNode(!0);Be.style.position="absolute",Be.style.top="-1000px",document.body.appendChild(Be),pe.dataTransfer.setDragImage(Be,0,0),setTimeout(()=>document.body.removeChild(Be),0)},onDragEnd:pe=>{pe.stopPropagation(),f&&f()},className:`flex items-center gap-2 text-xs group hover:bg-gray-50 rounded px-2 py-1 border border-gray-200 bg-white transition-colors flex-shrink-0 ${p?"cursor-grab active:cursor-grabbing":"cursor-pointer"}`,title:Ve,children:[o.jsx("div",{className:`w-3 h-3 rounded-sm flex-shrink-0 ${ee.bg} ${ee.border} border cursor-pointer`,onClick:()=>O(I),onDoubleClick:pe=>{pe.stopPropagation(),Y(I)}}),o.jsx("span",{className:`font-medium text-gray-600 cursor-pointer ${te?"opacity-50 line-through":""}`,onClick:()=>O(I),onDoubleClick:pe=>{pe.stopPropagation(),Y(I)},children:X}),o.jsxs("span",{className:"text-gray-400",children:["(SN ",ae,")"]}),z!=="N/A"&&o.jsxs("span",{className:"text-gray-400",children:["[",z,"]"]}),o.jsx("button",{onClick:pe=>{pe.stopPropagation(),O(I)},onDoubleClick:pe=>{pe.stopPropagation(),Y(I)},className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:te?"Show in chart (double-click to show only this)":"Hide in chart (double-click to show only this)",children:te?o.jsxs("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})}),o.jsx("button",{onClick:pe=>N(R,ae,pe),className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:"Remove this data point from the chart",children:o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},I)})})]})]})}const q_="/matter-site-config-prototype/assets/adding_points-CERP4QNM.png",U_="/matter-site-config-prototype/assets/resizing_chart-BHR8TqZN.png",$_="/matter-site-config-prototype/assets/create_additional_charts-CshHgktp.png",W_="/matter-site-config-prototype/assets/moving_points_between_charts-C3gFhIkG.png",H_="/matter-site-config-prototype/assets/remove_chart-DXjixanx.png",z_="/matter-site-config-prototype/assets/browse_and_find_points-Dwpkv5sf.png",K_="/matter-site-config-prototype/assets/selecting_devices-Cv4bL765.png",Q_="/matter-site-config-prototype/assets/troubleshooting_points-C4zPrx4-.png",Y_="/matter-site-config-prototype/assets/lines_vs_status-HMYx_HFm.png",zf=({isOpen:e,onClose:t,initialStep:n=0})=>{const[l,i]=F.useState(n);U.useEffect(()=>{e&&i(n)},[e,n]);const a=()=>{i(0),t()};U.useEffect(()=>{const u=m=>{m.key==="Escape"&&e&&a()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e]);const r=[{title:"1. Adding Points to a Chart",image:q_,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"You can add data points to any chart in two ways:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Click anywhere inside an empty chart area"}),o.jsx("br",{}),o.jsx("span",{className:"text-sm text-slate-600",children:"This opens the point selector immediately."})]}),o.jsxs("li",{children:[o.jsx("strong",{children:'Use the "Add Points" menu'})," in the top-right corner of the chart."]})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"You can add as many points as you need—measurements or status values from any device at the site."})]})},{title:"2. Resizing a Chart",image:U_,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"To change the size of a chart:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:["Grab the ",o.jsx("strong",{children:"handle on the right edge"})," to make it wider."]}),o.jsxs("li",{children:["Grab the ",o.jsx("strong",{children:"handle on the bottom edge"})," to make it taller."]}),o.jsx("li",{children:"Drag both to resize the chart in both directions."})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"Resize charts to give more room to important points."})]})},{title:"3. Creating Additional Charts",image:$_,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["Click the ",o.jsx("strong",{children:'"+" button'})," below any chart to create a new one."]}),o.jsx("p",{className:"mb-3",children:"Each chart can have:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-1",children:[o.jsx("li",{children:"its own set of points"}),o.jsx("li",{children:"its own size"}),o.jsx("li",{children:"its own layout"})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"Use multiple charts to compare different devices or mix measurements and status views."})]})},{title:"4. Removing a Chart",image:H_,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["To delete a chart, click the ",o.jsx("strong",{children:'"X"'})," in the upper-right corner of the chart frame."]}),o.jsxs("p",{className:"text-sm text-slate-600",children:["Removing a chart does ",o.jsx("strong",{children:"not"})," delete any data points—you can always create a new chart and add them again."]})]})},{title:"5. Browsing and Finding Data Points",image:z_,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["Use the ",o.jsx("strong",{children:"Add Points"})," panel to find the data you want:"]}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsx("li",{children:"Scroll through the list"}),o.jsx("li",{children:"Search by name"}),o.jsxs("li",{children:["Use filters to narrow results by ",o.jsx("strong",{children:"component"}),", ",o.jsx("strong",{children:"type of data"}),", ",o.jsx("strong",{children:"unit"}),", or ",o.jsx("strong",{children:"feature"})]})]}),o.jsxs("p",{className:"text-sm text-slate-600",children:["If you need more advanced or technical points, increase the ",o.jsx("strong",{children:"Detail Level"})," slider."]})]})},{title:"6. Selecting Devices for Each Point",image:K_,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"Many sites have multiple units of the same equipment (e.g., several inverters)."}),o.jsx("p",{className:"mb-3",children:"For each point you select, choose whether it applies to:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-1",children:[o.jsx("li",{children:o.jsx("strong",{children:"One device"})}),o.jsx("li",{children:o.jsx("strong",{children:"A selected group of devices"})}),o.jsx("li",{children:o.jsx("strong",{children:"All devices of that type"})})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"You can add the same point for different devices in any combination."})]})},{title:"7. Troubleshooting Point Discovery",image:Q_,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"If you don't see the point you expect:"}),o.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[o.jsx("li",{children:"Broaden your filters"}),o.jsxs("li",{children:["Adjust the ",o.jsx("strong",{children:"Detail Level"})]}),o.jsx("li",{children:"Search for part of the name"}),o.jsx("li",{children:"Make sure the correct device type is selected"})]})]})},{title:"8. Understanding Line vs. Status Charts",image:Y_,content:o.jsxs("div",{children:[o.jsxs("div",{className:"mb-4",children:[o.jsx("h4",{className:"font-semibold mb-2",children:"Line charts"}),o.jsx("p",{className:"text-sm mb-2",children:"Show measurements—numbers that rise and fall over time, such as:"}),o.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-600 space-y-1",children:[o.jsx("li",{children:"Power"}),o.jsx("li",{children:"Voltage"}),o.jsx("li",{children:"Current"}),o.jsx("li",{children:"Temperature"})]}),o.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"These appear as a smooth line across the graph."})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold mb-2",children:"Status charts"}),o.jsxs("p",{className:"text-sm mb-2",children:["Data points that will be plotted as a status chart are designated with the 📊 icon.",o.jsx("br",{}),"These show what ",o.jsx("em",{children:"state"})," the equipment was in over time, such as:"]}),o.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-600 space-y-1",children:[o.jsx("li",{children:"Normal"}),o.jsx("li",{children:"Failure"}),o.jsx("li",{children:"On / Off"}),o.jsx("li",{children:"Operating modes"})]}),o.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"Status points appear as colored bars instead of a line, showing when each state was active."})]})]})},{title:"9. Moving Points Between Charts",image:W_,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"You can reorganize your charts by dragging items from one chart to another."}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Drag a legend entry"})," to move a line-chart point."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Drag a status row"})," to move a state-based point."]}),o.jsx("li",{children:"Drop onto any chart (even an empty one) to place it there."})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"This makes it easy to group related data or separate concerns across multiple charts."})]})}],s=()=>{l<r.length-1&&i(l+1)},c=()=>{l>0&&i(l-1)};if(!e)return null;const d=r[l];return o.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[o.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),o.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-200",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-2xl",children:"📘"}),o.jsx("h2",{className:"text-xl font-semibold text-slate-900",children:"Chart Tutorial"})]}),o.jsx("button",{onClick:a,className:"text-slate-400 hover:text-slate-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-6 h-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-slate-900 mb-4",children:d.title}),o.jsx("div",{className:"mb-4 rounded-lg overflow-hidden border border-slate-200 flex justify-center bg-slate-50",children:o.jsx("img",{src:d.image,alt:d.title,className:"max-w-full h-auto max-h-80 object-contain"})}),o.jsx("div",{className:"text-slate-700",children:d.content})]}),o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-slate-200",children:[o.jsxs("div",{className:"text-sm text-slate-600",children:["Step ",l+1," of ",r.length]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{onClick:c,disabled:l===0,className:"px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Previous"}),l<r.length-1?o.jsx("button",{onClick:s,className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",children:"Next"}):o.jsx("button",{onClick:a,className:"px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-colors",children:"Finish"})]})]})]})]})},Os=16,js=16,ka=12,Ta=12,vr=({onAdd:e,ariaLabel:t})=>o.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),e()},className:"relative z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-base font-semibold text-gray-600 opacity-70 shadow-sm transition-all duration-150 ease-out hover:bg-white group-hover:scale-105 group-hover:opacity-100 group-focus-within:opacity-100 focus:scale-105 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300","aria-label":t,children:o.jsx("span",{className:"leading-none",children:"+"})}),ku=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:i,onAutoFit:a,percentAbove:r,isActive:s=!1,buttonSegments:c})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof a=="function"&&typeof r=="number",u=typeof l=="function",m=d||u,f=p=>{p.key==="Enter"||p.key===" "?(p.preventDefault(),e()):p.key==="ArrowUp"&&d&&n?(p.preventDefault(),n(ka)):p.key==="ArrowDown"&&d&&n?(p.preventDefault(),n(-ka)):p.key==="ArrowUp"&&u&&i?(p.preventDefault(),i(ka)):p.key==="ArrowDown"&&u&&i&&(p.preventDefault(),i(-ka))};return o.jsxs("div",{role:"separator","aria-orientation":"horizontal",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts"}:u?{"aria-label":"Resize row height","aria-valuetext":`${Math.round(r??100)}%`}:{"aria-label":"Add chart below","aria-disabled":!0},tabIndex:0,onKeyDown:f,onClick:p=>{m||p.target.closest("button")||(p.preventDefault(),e())},onDoubleClick:p=>{p.target.closest("button")||(p.preventDefault(),d&&a?a():e())},onMouseDown:p=>{p.target.closest("button")||p.button===0&&(p.preventDefault(),d&&t?t(p.clientY):u&&l&&l(p.clientY))},className:`group relative flex items-center justify-center ${m?"cursor-row-resize":"cursor-pointer"} select-none outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${s?"ring-2 ring-blue-300/60":""}`,style:{height:Os,paddingLeft:"0.5rem",paddingRight:"0.5rem"},children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center px-4",children:o.jsx("div",{className:`flex-1 h-1 rounded-full transition-colors duration-150 ${s?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`})}),o.jsx("div",{className:`${c&&c.length>0?"grid w-full":"flex w-full"} items-center justify-center`,style:c&&c.length>0?{gridTemplateColumns:c.map(p=>p.size?`${p.size}px`:"1fr").join(" ")}:void 0,children:c&&c.length>0?c.map(p=>o.jsx("div",{className:"flex justify-center py-0.5",children:o.jsx(vr,{onAdd:p.onAdd,ariaLabel:"Add chart below"})},p.key)):o.jsx(vr,{onAdd:e,ariaLabel:"Add chart below"})})]})},Da=({onResizeStart:e,isActive:t=!1})=>o.jsx("div",{className:"relative w-full h-full flex items-center justify-center",style:{pointerEvents:"auto"},children:o.jsx("div",{className:`w-3 h-3 rounded-full cursor-nwse-resize transition-all ${t?"bg-blue-500 scale-125":"bg-gray-400 hover:bg-gray-500"}`,onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),e(n.clientX,n.clientY)},title:"Drag to resize both dimensions",role:"separator","aria-label":"Resize corner"})}),Tu=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:i,onAutoFit:a,percentLeft:r,isActive:s=!1,buttonSegments:c})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof a=="function"&&typeof r=="number",u=typeof l=="function",m=d||u,f=p=>{p.key==="Enter"||p.key===" "?(p.preventDefault(),e()):p.key==="ArrowRight"&&d&&n?(p.preventDefault(),n(Ta)):p.key==="ArrowLeft"&&d&&n?(p.preventDefault(),n(-Ta)):p.key==="ArrowRight"&&u&&i?(p.preventDefault(),i(Ta)):p.key==="ArrowLeft"&&u&&i&&(p.preventDefault(),i(-Ta))};return o.jsxs("div",{role:"separator","aria-orientation":"vertical",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts horizontally"}:u?{"aria-label":"Resize column width"}:{"aria-label":"Add chart to the right","aria-disabled":!0},tabIndex:0,onKeyDown:f,onClick:p=>{m||p.target.closest("button")||(p.preventDefault(),e())},onDoubleClick:p=>{p.target.closest("button")||(p.preventDefault(),m&&a?a():e())},onMouseDown:p=>{p.target.closest("button")||p.button===0&&(p.preventDefault(),d&&t?t(p.clientX):u&&l&&l(p.clientX))},className:`group relative flex h-full w-full ${m?"cursor-col-resize":"cursor-pointer"} select-none flex-col items-center justify-center outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${s?"ring-2 ring-blue-300/60":""}`,style:{width:js,paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 flex flex-col justify-center py-4",children:o.jsx("div",{className:`mx-auto w-1 rounded-full transition-colors duration-150 ${s?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`,style:{flex:1}})}),o.jsx("div",{className:`${c&&c.length>0?"grid h-full":"flex"} w-full flex-1 flex-col items-center justify-center`,style:c&&c.length>0?{gridTemplateRows:c.map(p=>p.size?`${p.size}px`:"1fr").join(" ")}:void 0,children:c&&c.length>0?c.map(p=>o.jsx("div",{className:"flex items-center justify-center px-0.5",children:o.jsx(vr,{onAdd:p.onAdd,ariaLabel:"Add chart to the right"})},p.key)):o.jsx(vr,{onAdd:e,ariaLabel:"Add chart to the right"})})]})},ai=280,Ea=360,En=520,ri=780,Kf=["001"],Du=[{id:"chart-0",row:0,col:0,points:["40101:pPvTotal","40101:pGridImpTot","40101:pGridExpTot","40101:pBatChg","40101:pBatDischg"]},{id:"chart-1",row:0,col:1,points:["lifecycle_events:is_online","40101:gridStat"]},{id:"chart-2",row:1,col:0,points:["40101:socBat"]},{id:"chart-3",row:1,col:1,points:[]}],X_=e=>new Map(e.map(t=>[t,new Set(Kf)]));function J_({protocols:e,onUpdateInverters:t,onScrollToPoint:n,onRemoveInverter:l,onSelectPointsToggle:i,selectPointsOpen:a,callbacksRef:r,onActiveChartSelectedPointsChange:s,onActiveChartPositionChange:c}){const[d,u]=F.useState(()=>Du.map(({id:w,row:k,col:D,points:E})=>({id:w,row:k,col:D,selectedPoints:X_(E)}))),[m,f]=F.useState(Du.length),[p,x]=F.useState("chart-0"),[b,_]=F.useState(()=>new Map([[0,ri],[1,ri]])),[g,y]=F.useState(()=>new Map([[0,En],[1,En]])),[h,v]=F.useState(null),[L,T]=F.useState(null),[C,S]=F.useState(null),[B,O]=F.useState(!1),Y=U.useRef(null),N=U.useRef(null),q=U.useRef(null),[le,I]=F.useState(null),X=U.useRef(null),ae=U.useRef(new Map),[A,V]=F.useState(null),[R,z]=F.useState(null),[J,de]=F.useState(null);U.useEffect(()=>{const w=d.find(k=>k.id===p);w&&s(new Map(w.selectedPoints))},[d,p,s]),U.useEffect(()=>{const w=()=>{const k=ae.current.get(p);if(k){const D=k.getBoundingClientRect();c(D)}else c(null)};return w(),window.addEventListener("scroll",w,!0),window.addEventListener("resize",w),()=>{window.removeEventListener("scroll",w,!0),window.removeEventListener("resize",w)}},[p,d,b,g,c]),U.useLayoutEffect(()=>{r.current={getActiveChartSelectedPoints:()=>{const w=d.find(k=>k.id===p);return w?new Map(w.selectedPoints):new Map},togglePointForActiveChart:w=>{console.log("togglePointForActiveChart called, activeChartId:",p),u(k=>k.map(E=>{if(E.id===p){const P=new Map(E.selectedPoints);if(console.log("Current selected points:",P.size),P.has(w))P.delete(w),console.log("Deleted point, new size:",P.size);else{const j=new Set(["001"]);P.set(w,j),console.log("Added point, new size:",P.size)}return{...E,selectedPoints:P}}return E}))},updateInvertersForActiveChart:(w,k)=>{console.log("updateInvertersForActiveChart called, activeChartId:",p,"inverters:",k),u(D=>D.map(P=>{if(P.id===p){const j=new Map(P.selectedPoints);return k.size===0?j.delete(w):j.set(w,k),console.log("Updated chart, selected points size:",j.size),{...P,selectedPoints:j}}return P}))}}},[d,p,r]),U.useEffect(()=>{if(typeof ResizeObserver>"u")return;const w=new ResizeObserver(k=>{const D=new Map;k.forEach(E=>{const P=E.target,j=P.getAttribute("data-chart-id");if(!j)return;const H=d.find(oe=>oe.id===j);if(!H)return;const Z=P.querySelector("[data-categorical-stack]"),K=Z?Z.scrollHeight:0;if(K<=0)return;const W=Math.max(En+K+24,ai);D.set(H.row,Math.max(W,D.get(H.row)??0))}),D.size!==0&&y(E=>{let P=!1;const j=new Map(E);return D.forEach((H,Z)=>{const K=j.get(Z)??En;H>K+1&&(j.set(Z,H),P=!0)}),P?j:E})});return ae.current.forEach(k=>w.observe(k)),()=>{w.disconnect()}},[d,y]);const ee=U.useCallback(w=>g.get(w)??En,[g]),te=U.useCallback(w=>b.get(w)??ri,[b]),me=U.useCallback((w,k)=>{const D=Math.max(ai,k);y(E=>{const P=new Map(E);return P.set(w,D),P})},[]),Ve=U.useCallback((w,k)=>{const D=Math.max(Ea,k);_(E=>{const P=new Map(E);return P.set(w,D),P})},[]),$t=U.useCallback(w=>{X.current!==null&&window.clearTimeout(X.current),I(w),X.current=window.setTimeout(()=>{I(null),X.current=null},400)},[]);U.useEffect(()=>()=>{X.current!==null&&window.clearTimeout(X.current)},[]);const pe=U.useCallback((w,k,D,E)=>{if(E<=ai*2){const K=E/2;y(W=>{const oe=new Map(W);return oe.set(w,K),oe.set(k,E-K),oe});return}const P=ai,j=E-ai,H=Math.min(Math.max(D,P),j),Z=E-H;y(K=>{const W=new Map(K);return W.set(w,H),W.set(k,Z),W})},[]),Be=U.useCallback((w,k,D,E)=>{if(E<=Ea*2){const K=E/2;_(W=>{const oe=new Map(W);return oe.set(w,K),oe.set(k,E-K),oe});return}const P=Ea,j=E-Ea,H=Math.min(Math.max(D,P),j),Z=E-H;_(K=>{const W=new Map(K);return W.set(w,H),W.set(k,Z),W})},[]),Xn=(w,k,D)=>{if(k===void 0)return;const E=ee(w),P=ee(k);Y.current={mode:"between",startY:D,aboveRow:w,belowRow:k,initialAbove:E,initialBelow:P,total:E+P},v(w)},Jn=(w,k)=>{Y.current={mode:"edge",startY:k,row:w,initialHeight:ee(w)},v(w)};U.useEffect(()=>{if(h===null||!Y.current)return;const w=Y.current,k=E=>{const P=E.clientY-w.startY;if(w.mode==="between"){const j=w.initialAbove+P;pe(w.aboveRow,w.belowRow,j,w.total)}else me(w.row,w.initialHeight+P)},D=()=>{v(null),Y.current=null};return document.addEventListener("mousemove",k),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",D)}},[h,pe,me]);const Zn=(w,k,D)=>{if(k===void 0)return;const E=te(w),P=te(k);N.current={mode:"between",startX:D,leftCol:w,rightCol:k,initialLeft:E,initialRight:P,total:E+P},T(w)},el=(w,k)=>{N.current={mode:"edge",startX:k,col:w,initialWidth:te(w)},T(w)};U.useEffect(()=>{if(L===null||!N.current)return;const w=N.current,k=E=>{const P=E.clientX-w.startX;if(w.mode==="between"){const j=w.initialLeft+P;Be(w.leftCol,w.rightCol,j,w.total)}else Ve(w.col,w.initialWidth+P)},D=()=>{T(null),N.current=null};return document.addEventListener("mousemove",k),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",D)}},[L,Be,Ve]);const nt=(w,k,D,E,P,j)=>{const H=ee(w),Z=ee(k),K=te(D),W=te(E);q.current={startX:P,startY:j,aboveRow:w,belowRow:k,leftCol:D,rightCol:E,initialAboveHeight:H,initialBelowHeight:Z,initialLeftWidth:K,initialRightWidth:W,totalHeight:H+Z,totalWidth:K+W},S({row:w,col:D})},tl=(w,k,D,E,P,j)=>{if(w==="row"){const H=k,Z=E,K=D;q.current={startX:P,startY:j,aboveRow:H,belowRow:Z,leftCol:K,rightCol:K,initialAboveHeight:ee(H),initialBelowHeight:ee(Z),initialLeftWidth:te(K),initialRightWidth:0,totalHeight:ee(H)+ee(Z),totalWidth:0},S({row:H,col:K})}else{const H=k,Z=D,K=E;q.current={startX:P,startY:j,aboveRow:H,belowRow:H,leftCol:Z,rightCol:K,initialAboveHeight:ee(H),initialBelowHeight:0,initialLeftWidth:te(Z),initialRightWidth:te(K),totalHeight:0,totalWidth:te(Z)+te(K)},S({row:H,col:Z})}},M=(w,k,D,E)=>{q.current={startX:D,startY:E,aboveRow:w,belowRow:w,leftCol:k,rightCol:k,initialAboveHeight:ee(w),initialBelowHeight:0,initialLeftWidth:te(k),initialRightWidth:0,totalHeight:0,totalWidth:0},S({row:w,col:k})};U.useEffect(()=>{if(C===null||!q.current)return;const w=q.current,k=E=>{const P=E.clientX-w.startX,j=E.clientY-w.startY;if(w.totalHeight>0){const H=w.initialAboveHeight+j;pe(w.aboveRow,w.belowRow,H,w.totalHeight)}else me(w.aboveRow,w.initialAboveHeight+j);if(w.totalWidth>0){const H=w.initialLeftWidth+P;Be(w.leftCol,w.rightCol,H,w.totalWidth)}else Ve(w.leftCol,w.initialLeftWidth+P)},D=()=>{S(null),q.current=null};return document.addEventListener("mousemove",k),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",D)}},[C,pe,Be,me,Ve]);const ie=(w,k,D)=>{const E=ee(w),P=ee(k),j=E+P;pe(w,k,E+D,j)},re=(w,k)=>{const D=ee(w),E=ee(k),P=D+E,j=P/2;pe(w,k,j,P)},ce=(w,k)=>{const D=ee(w);me(w,D+k)},fe=(w,k,D)=>{const E=te(w),P=te(k),j=E+P;Be(w,k,E+D,j)},he=(w,k)=>{const D=te(w),E=te(k),P=D+E,j=P/2;Be(w,k,j,P)},Ue=(w,k)=>{const D=te(w);Ve(w,D+k)},Qe=(w,k)=>{const D=d.find(K=>K.id===w);if(!D)return;let E=D.row,P=D.col;const j=(K,W)=>d.some(oe=>oe.row===K&&oe.col===W);switch(k){case"top":if(E=D.row-1,j(E,D.col)){const K=new Set(d.map(Q=>Q.row)),W=Array.from(K).sort((Q,Oe)=>Q-Oe);let oe=!1;for(const Q of W)if(Q<D.row&&!j(Q,D.col)){E=Q,oe=!0;break}oe||(u(Q=>Q.map(Oe=>Oe.row<D.row?{...Oe,row:Oe.row-1}:Oe)),E=D.row-1)}break;case"bottom":if(E=D.row+1,j(E,D.col)){const K=new Set(d.map(Q=>Q.row)),W=Array.from(K).sort((Q,Oe)=>Q-Oe);let oe=!1;for(const Q of W)if(Q>D.row&&!j(Q,D.col)){E=Q,oe=!0;break}if(!oe){let Q=E;for(;j(Q,D.col);)Q++;E=Q}}break;case"left":if(P=D.col-1,j(D.row,P)){const K=new Set(d.map(Q=>Q.col)),W=Array.from(K).sort((Q,Oe)=>Q-Oe);let oe=!1;for(const Q of W)if(Q<D.col&&!j(D.row,Q)){P=Q,oe=!0;break}oe||(u(Q=>Q.map(Oe=>Oe.col<D.col?{...Oe,col:Oe.col-1}:Oe)),P=D.col-1)}break;case"right":if(P=D.col+1,j(D.row,P)){const K=new Set(d.map(Q=>Q.col)),W=Array.from(K).sort((Q,Oe)=>Q-Oe);let oe=!1;for(const Q of W)if(Q>D.col&&!j(D.row,Q)){P=Q,oe=!0;break}if(!oe){let Q=P;for(;j(D.row,Q);)Q++;P=Q}}break}const H=`chart-${m}`,Z={id:H,selectedPoints:new Map,row:E,col:P};b.has(P)||_(K=>new Map(K).set(P,ri)),g.has(E)||y(K=>new Map(K).set(E,En)),u(K=>[...K,Z]),f(K=>K+1),x(H),$t(H)},Ye=(w,k)=>{const D=d.filter(P=>P.row===w);if(D.length===0)return;let E;typeof k=="number"&&(E=D.find(P=>P.col===k)),E||(E=D.find(P=>P.id===p)??D[0]),Qe(E.id,"bottom")},ct=(w,k)=>{const D=d.filter(P=>P.col===w);if(D.length===0)return;let E;typeof k=="number"&&(E=D.find(P=>P.row===k)),E||(E=D.find(P=>P.id===p)??D[0]),Qe(E.id,"right")},Gt=w=>{u(k=>{const D=k.filter(W=>W.id!==w);if(D.length===0)return x("chart-0"),_(new Map([[0,ri]])),y(new Map([[0,En]])),[{id:"chart-0",selectedPoints:new Map,row:0,col:0}];w===p&&x(D[0].id);const E=new Set(D.map(W=>W.row)),P=new Set(D.map(W=>W.col)),j=Array.from(E).sort((W,oe)=>W-oe),H=Array.from(P).sort((W,oe)=>W-oe),Z=new Map(j.map((W,oe)=>[W,oe])),K=new Map(H.map((W,oe)=>[W,oe]));return D.map(W=>({...W,row:Z.get(W.row)??W.row,col:K.get(W.col)??W.col}))})},ea=(w,k,D)=>{u(E=>E.map(P=>P.id===w?{...P,selectedPoints:new Map(P.selectedPoints).set(k,D)}:P)),t(w,k,D)},to=(w,k,D)=>{u(E=>E.map(P=>{if(P.id===w){const j=new Map(P.selectedPoints),H=j.get(k);if(H){const Z=new Set(H);return Z.delete(D),Z.size===0?j.delete(k):j.set(k,Z),{...P,selectedPoints:j}}}return P})),l(w,k,D)},no=(w,k,D)=>{z({type:"legend",pointKey:k,sourceChartId:w,inverters:D})},zl=()=>{z(null),de(null)},Qf=(w,k)=>{R&&(w.preventDefault(),w.stopPropagation(),de(k))},Yf=(w,k)=>{const D=w.relatedTarget,E=ae.current.get(k);E&&!E.contains(D)&&de(null)},Xf=(w,k)=>{if(w.preventDefault(),w.stopPropagation(),!R)return;const{pointKey:D,sourceChartId:E,inverters:P}=R;if(E===k){zl();return}u(j=>j.map(H=>{if(H.id===E){const Z=new Map(H.selectedPoints);return Z.delete(D),{...H,selectedPoints:Z}}else if(H.id===k){const Z=new Map(H.selectedPoints);return Z.set(D,new Set(P)),{...H,selectedPoints:Z}}return H})),zl()},dt=Math.min(...d.map(w=>w.row),0),ut=Math.min(...d.map(w=>w.col),0),lo=d.map(w=>({...w,row:w.row-dt,col:w.col-ut})),ta=U.useMemo(()=>{const w=new Map;return d.forEach(k=>{w.set(`${k.row}:${k.col}`,k)}),w},[d]),Ce=Array.from(new Set(lo.map(w=>w.row))).sort((w,k)=>w-k),Se=Array.from(new Set(lo.map(w=>w.col))).sort((w,k)=>w-k),Xc=new Map,Kl=[];Ce.forEach((w,k)=>{Xc.set(w,k);const D=w+dt;Kl.push(`${ee(D)}px`),k<Ce.length-1&&Kl.push(`${Os}px`)}),Ce.length>0&&Kl.push(`${Os}px`);const Jf=Kl.length>0?Kl.join(" "):"1fr",Jc=new Map,Ql=[];Se.forEach((w,k)=>{Jc.set(w,k);const D=w+ut;Ql.push(`${te(D)}px`),k<Se.length-1&&Ql.push(`${js}px`)}),Se.length>0&&Ql.push(`${js}px`);const Zf=Ql.length>0?Ql.join(" "):"1fr";return o.jsxs("div",{className:"w-full h-full overflow-auto",children:[o.jsxs("div",{className:"grid p-4",style:{gridTemplateRows:Jf,gridTemplateColumns:Zf,rowGap:0,columnGap:0},children:[lo.map(w=>{const k=J===w.id,D=w.selectedPoints.size===0;return o.jsx("div",{ref:E=>{E?ae.current.set(w.id,E):ae.current.delete(w.id)},className:`relative border rounded-lg bg-white shadow-sm overflow-visible transition-all cursor-pointer ${p===w.id?"border-blue-500 border-2 ring-2 ring-blue-200":"border-gray-300"} ${le===w.id?"animate-chart-expand":""} ${k?"ring-4 ring-green-300 border-green-500":""} ${D&&R?"bg-green-50":""}`,style:{gridRow:(Xc.get(w.row)??0)*2+1,gridColumn:(Jc.get(w.col)??0)*2+1},"data-chart-id":w.id,onClick:E=>{E.target.closest("button")||x(w.id)},onDragOver:E=>Qf(E,w.id),onDragLeave:E=>Yf(E,w.id),onDrop:E=>Xf(E,w.id),children:o.jsx("div",{className:"chart-content h-full flex flex-col",children:o.jsx(F_,{selectedPoints:w.selectedPoints,protocols:e,onUpdateInverters:(E,P)=>ea(w.id,E,P),onScrollToPoint:n,onRemoveInverter:(E,P)=>to(w.id,E,P),onSelectPointsToggle:i,selectPointsOpen:a,onDeleteChart:()=>Gt(w.id),onShowTutorial:()=>O(!0),crosshairX:A,onCrosshairChange:V,onDragStart:(E,P)=>no(w.id,E,P),onDragEnd:zl,isDragActive:R!==null,isDropTarget:k})})},w.id)}),Se.slice(0,-1).map((w,k)=>{const D=w+ut,P=Se[k+1]+ut,j=te(D),H=te(P),Z=j+H||1,K=Ce.reduce((W,oe)=>{const Q=oe+dt;return ta.has(`${Q}:${D}`)&&W.push({key:`col-btn-${Q}-${D}`,onAdd:()=>ct(D,Q),size:ee(Q)}),W},[]);return o.jsx("div",{style:{gridRow:"1 / -1",gridColumn:k*2+2,alignSelf:"stretch",justifySelf:"center"},children:o.jsx(Tu,{onAdd:()=>ct(D),onResizeStart:W=>Zn(D,P,W),onKeyboardNudge:W=>fe(D,P,W),onAutoFit:()=>he(D,P),percentLeft:j/Z*100,isActive:L===D,buttonSegments:K})},`col-divider-${D}`)}),Se.length>0&&(()=>{const k=Se[Se.length-1]+ut,D=Ce.reduce((E,P)=>{const j=P+dt;return ta.has(`${j}:${k}`)&&E.push({key:`terminal-col-btn-${j}-${k}`,onAdd:()=>ct(k,j),size:ee(j)}),E},[]);return o.jsx("div",{style:{gridRow:"1 / -1",gridColumn:Se.length*2,alignSelf:"stretch",justifySelf:"center"},children:o.jsx(Tu,{onAdd:()=>ct(k),onEdgeResizeStart:E=>el(k,E),onEdgeKeyboardNudge:E=>Ue(k,E),isActive:L===k,buttonSegments:D})},`col-divider-${k}-terminal`)})(),Ce.slice(0,-1).map((w,k)=>{const D=Ce[k+1],E=w+dt,P=D+dt,j=ee(E),H=ee(P),Z=j+H||1,K=Se.reduce((W,oe)=>{const Q=oe+ut;return ta.has(`${E}:${Q}`)&&W.push({key:`row-btn-${E}-${Q}`,onAdd:()=>Ye(E,Q),size:te(Q)}),W},[]);return o.jsx("div",{style:{gridColumn:"1 / -1",gridRow:k*2+2,alignSelf:"center",justifySelf:"stretch"},children:o.jsx(ku,{onAdd:()=>Ye(E),onResizeStart:W=>Xn(E,P,W),onKeyboardNudge:W=>ie(E,P,W),onAutoFit:()=>re(E,P),percentAbove:j/Z*100,isActive:h===E,buttonSegments:K})},`divider-${E}`)}),Ce.length>0&&(()=>{const k=Ce[Ce.length-1]+dt,D=Se.reduce((E,P)=>{const j=P+ut;return ta.has(`${k}:${j}`)&&E.push({key:`terminal-row-btn-${k}-${j}`,onAdd:()=>Ye(k,j),size:te(j)}),E},[]);return o.jsx("div",{style:{gridColumn:"1 / -1",gridRow:Ce.length*2,alignSelf:"center",justifySelf:"stretch"},children:o.jsx(ku,{onAdd:()=>Ye(k),onEdgeResizeStart:E=>Jn(k,E),onEdgeKeyboardNudge:E=>ce(k,E),isActive:h===k,buttonSegments:D})},`divider-${k}-terminal`)})(),Ce.slice(0,-1).flatMap((w,k)=>{const D=w+dt,P=Ce[k+1]+dt;return Se.slice(0,-1).map((j,H)=>{const Z=j+ut,W=Se[H+1]+ut;return o.jsx("div",{style:{gridRow:k*2+2,gridColumn:H*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Da,{onResizeStart:(oe,Q)=>nt(D,P,Z,W,oe,Q),isActive:(C==null?void 0:C.row)===D&&(C==null?void 0:C.col)===Z})},`corner-${D}-${Z}`)})}),Ce.slice(0,-1).map((w,k)=>{const D=w+dt,P=Ce[k+1]+dt;if(Se.length>0){const H=Se[Se.length-1]+ut;return o.jsx("div",{style:{gridRow:k*2+2,gridColumn:Se.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Da,{onResizeStart:(Z,K)=>tl("row",D,P,H,Z,K),isActive:(C==null?void 0:C.row)===D&&(C==null?void 0:C.col)===H})},`corner-edge-row-${D}-${H}`)}return null}),Se.slice(0,-1).map((w,k)=>{const D=w+ut,P=Se[k+1]+ut;if(Ce.length>0){const H=Ce[Ce.length-1]+dt;return o.jsx("div",{style:{gridRow:Ce.length*2,gridColumn:k*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Da,{onResizeStart:(Z,K)=>tl("col",H,D,P,Z,K),isActive:(C==null?void 0:C.row)===H&&(C==null?void 0:C.col)===D})},`corner-edge-col-${H}-${D}`)}return null}),Ce.length>0&&Se.length>0&&(()=>{const k=Ce[Ce.length-1]+dt,E=Se[Se.length-1]+ut;return o.jsx("div",{style:{gridRow:Ce.length*2,gridColumn:Se.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(Da,{onResizeStart:(P,j)=>M(k,E,P,j),isActive:(C==null?void 0:C.row)===k&&(C==null?void 0:C.col)===E})},`corner-terminal-${k}-${E}`)})()]}),o.jsx(zf,{isOpen:B,onClose:()=>O(!1)})]})}function Z_({value:e,onChange:t}){return o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:o.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),o.jsx("input",{className:"w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring",placeholder:"search",value:e,onChange:n=>t(n.target.value)})]})}function Eu({value:e,onChange:t,getLabelHelp:n}){const l=["Standard","Extended","Complete"],i=l.indexOf(e),a=i>=0?i:0,[r,s]=U.useState(!1),c=f=>{const p=parseInt(f.target.value,10);t(l[p])},d=a/(l.length-1)*100,u=n("Level of Detail"),m=new Set(l);return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xs font-semibold text-gray-700",children:"Detail Level"}),o.jsx("button",{onClick:()=>s(!0),className:"text-blue-500 hover:text-blue-700",title:u||"Level of Detail help",children:o.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{className:"flex flex-col items-center gap-0.5",children:[o.jsxs("div",{className:"relative w-40 flex items-center",children:[o.jsx("input",{type:"range",min:"0",max:l.length-1,step:"1",value:a,onChange:c,className:"w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, #10b981 0%, #10b981 ${d}%, #e5e7eb ${d}%, #e5e7eb 100%)`}}),o.jsx("style",{children:`
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
            `})]}),o.jsx("div",{className:"relative w-40 flex justify-between text-xs",children:l.map((f,p)=>o.jsx("button",{type:"button",onClick:()=>t(f),className:`cursor-pointer hover:opacity-70 transition-opacity ${p===a?"font-semibold text-gray-900":"text-gray-500"}`,children:f},f))})]})]}),r&&o.jsx(Hf,{family:"Level of Detail",labels:m,onClose:()=>s(!1),getLabelHelp:n})]})}function ex({onClose:e}){return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:o.jsxs("div",{className:"relative max-w-lg rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:"Group By"}),o.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[o.jsx("p",{children:"Reorder or add levels to control how points are grouped in the list."}),o.jsx("p",{children:"For example, grouping by Component → Feature will show each component first, with its features listed underneath."}),o.jsx("p",{className:"text-gray-600",children:"You can add or remove levels using the + button and × button next to each level."})]})]})})}function tx({availableFamilies:e,hierarchy:t,onChange:n,scrollContainerRef:l,getLabelColor:i}){const[a,r]=U.useState(!1),[s,c]=U.useState(!0),d=U.useRef(null),u=U.useRef(0),m=(b,_)=>{const g=[...t];_===""?g.splice(b,1):g[b]=_,n(g)},f=()=>{n([...t,""])},p=b=>{const _=[...t];_.splice(b,1),n(_)},x=b=>{const _=t.filter((g,y)=>y!==b&&t[y]);return e.filter(g=>!_.includes(g))};return U.useEffect(()=>{const b=l==null?void 0:l.current;if(!b)return;const _=()=>{const g=b.scrollTop;g>u.current&&g>50?s&&d.current&&(d.current.open=!1,c(!1)):g<50&&!s&&d.current&&(d.current.open=!0,c(!0)),u.current=g};return b.addEventListener("scroll",_,{passive:!0}),()=>{b.removeEventListener("scroll",_)}},[s,l]),o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"mb-3 rounded-lg border bg-gray-50 p-2 transition-all duration-300",children:o.jsxs("details",{ref:d,className:"group",open:s,onToggle:b=>c(b.target.open),children:[o.jsx("summary",{className:"cursor-pointer list-none",children:o.jsxs("div",{className:"flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[o.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"}),o.jsx("span",{className:"flex-shrink-0",children:"Group by"}),t.filter(b=>b).length>0&&o.jsx("div",{className:"flex items-center gap-1 ml-1 min-w-0",children:t.map((b,_)=>{if(!b)return null;const g=i(b,"");return o.jsxs(U.Fragment,{children:[o.jsx("span",{className:`rounded px-2 py-0.5 text-xs font-semibold flex-shrink-0 ${_===0?"bg-blue-100 text-blue-700":_===1?"bg-green-100 text-green-700":`${g.bg} ${g.text}`}`,children:b}),_<t.length-1&&t[_+1]&&o.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"})]},_)})})]}),o.jsxs("button",{onClick:b=>{b.preventDefault(),b.stopPropagation(),r(!0)},className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline flex-shrink-0",children:[o.jsx("span",{children:"What does this do?"}),o.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]})]})}),o.jsx("div",{className:"mt-2",children:o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[t.map((b,_)=>o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsxs("label",{className:"text-gray-600",children:["Level ",_+1,":"]}),o.jsxs("select",{value:b||"",onChange:g=>m(_,g.target.value),className:"rounded border px-2 py-1 text-xs",children:[o.jsx("option",{value:"",children:"(None)"}),x(_).map(g=>o.jsx("option",{value:g,children:g},g))]}),t.length>1&&o.jsx("button",{onClick:()=>p(_),className:"rounded border bg-white px-1.5 py-0.5 text-xs text-red-600 hover:bg-red-50",title:"Remove level",children:"×"})]},_)),o.jsx("button",{onClick:f,className:"rounded border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",title:"Add hierarchy level",children:"+"}),t.length===0&&o.jsx("div",{className:"text-gray-500 italic",children:"No hierarchy levels configured"})]})})]})}),a&&o.jsx(ex,{onClose:()=>r(!1)})]})}function nx(e){return e==null?"":typeof e=="number"?String(Math.trunc(e)):String(e).trim()}function lx(e){return e==null?"":String(e).trim()}function Pu(e,t){try{const n=qf.parse(e);return((n==null?void 0:n.protocols)??[]).map(i=>{var c;if(!i.entry)return null;const a=lx(i.point??i.entry.name),r=nx(i.model);if(!a||!r)return null;const s=Array.isArray(i.labels)?i.labels:Array.isArray((c=i.entry)==null?void 0:c.labels)?i.entry.labels:[];return{block:String(i.block??"fixed"),entry:i.entry,model:r,point:a,labels:s}}).filter(i=>!!i)}catch(n){return console.error(`Failed to parse ${t}`,n),[]}}function ix(){const e=Pu(T_,"ss40k_inverter.yaml"),t=Pu(D_,"lifecycle_events.yaml");return[...e,...t]}const Pn=ix();let Fs=null;try{Fs=qf.parse(E_)}catch(e){console.error("Failed to parse label_help.yaml",e)}function oi(e,t){if(!Fs)return null;const n=Fs.label_families[e];if(!n)return null;if(t){const l=n.labels[t];return(l==null?void 0:l.help)||null}return n.help||null}function ax(e,t){const n=new Map;return e.forEach(l=>{const i=Array.isArray(l.labels)?l.labels:[];if(i.length===0)return;if(t.length===0){const s=i[0];if(s){const c=s.label_text;n.has(c)||n.set(c,[]),n.get(c).push(l)}return}let a=n,r=-1;if(!(a instanceof Map)){console.error("groupByLabelHierarchy: currentMap is not a Map",a);return}for(let s=0;s<t.length;s++){const c=t[s];i.find(u=>u.label_family===c)&&(r=s)}if(r!==-1)for(let s=0;s<=r;s++){if(!(a instanceof Map)){console.error("groupByLabelHierarchy: currentMap became non-Map at level",s,a);return}const c=t[s],d=i.find(m=>m.label_family===c);if(!d)continue;const u=d.label_text;if(s===r){a.has(u)||a.set(u,new Map);const m=a.get(u);if(Array.isArray(m)){const x=m,b=new Map;b.set("",x),a.set(u,b)}const f=a.get(u);if(!(f instanceof Map)){console.error("Expected Map for finalMap but got:",typeof f,f);return}f.has("")||f.set("",[]);const p=f.get("");if(!Array.isArray(p)){console.error("Expected array for itemsList but got:",typeof p,p);return}p.push(l)}else{if(!a.has(u))a.set(u,new Map);else{const f=a.get(u);if(Array.isArray(f)){const p=f,x=new Map;x.set("",p),a.set(u,x)}}const m=a.get(u);if(!(m instanceof Map)){console.error("Expected Map for nestedMap but got:",typeof m,m,"at level",s,"key",u);return}a=m}}}),n}function rx(e){const t=new Map;return e.forEach(n=>{(Array.isArray(n.labels)?n.labels:[]).forEach(i=>{t.has(i.label_family)||t.set(i.label_family,new Set),t.get(i.label_family).add(i.label_text)})}),t}const Bo=[{bg:"bg-blue-100",text:"text-blue-800",border:"border-blue-300"},{bg:"bg-green-100",text:"text-green-800",border:"border-green-300"},{bg:"bg-purple-100",text:"text-purple-800",border:"border-purple-300"},{bg:"bg-yellow-100",text:"text-yellow-800",border:"border-yellow-300"},{bg:"bg-pink-100",text:"text-pink-800",border:"border-pink-300"},{bg:"bg-indigo-100",text:"text-indigo-800",border:"border-indigo-300"},{bg:"bg-red-100",text:"text-red-800",border:"border-red-300"},{bg:"bg-teal-100",text:"text-teal-800",border:"border-teal-300"},{bg:"bg-orange-100",text:"text-orange-800",border:"border-orange-300"},{bg:"bg-cyan-100",text:"text-cyan-800",border:"border-cyan-300"},{bg:"bg-violet-100",text:"text-violet-800",border:"border-violet-300"},{bg:"bg-amber-100",text:"text-amber-800",border:"border-amber-300"},{bg:"bg-lime-100",text:"text-lime-800",border:"border-lime-300"},{bg:"bg-emerald-100",text:"text-emerald-800",border:"border-emerald-300"},{bg:"bg-sky-100",text:"text-sky-800",border:"border-sky-300"},{bg:"bg-rose-100",text:"text-rose-800",border:"border-rose-300"},{bg:"bg-fuchsia-100",text:"text-fuchsia-800",border:"border-fuchsia-300"},{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"},{bg:"bg-stone-100",text:"text-stone-800",border:"border-stone-300"},{bg:"bg-zinc-100",text:"text-zinc-800",border:"border-zinc-300"}],Nu=new Map([["component",0],["feature",1],["detail_level",2],["level of detail",2],["info",3],["unit",4]]);function Oo(e,t){const n=e.toLowerCase();if(Nu.has(n)){const a=Nu.get(n);return Bo[a]}const l=n.split("").reduce((a,r)=>(a<<5)-a+r.charCodeAt(0),0),i=4+Math.abs(l)%(Bo.length-4);return Bo[i]}function ox({show:e,onToggle:t}){return o.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 text-sm",children:[o.jsx("input",{type:"checkbox",className:"h-4 w-4",checked:e,onChange:n=>t(n.target.checked)}),"Show help text"]})}function sx(){const[e,t]=F.useState(""),n=U.useRef(null),[l,i]=U.useState(new Map),[a,r]=U.useState(null),[s,c]=U.useState(new Set(Kf)),d=U.useMemo(()=>{if(!a)return{top:"1rem",left:"1rem",showArrow:!1,arrowOnLeft:!0};const M=800,ie=8,re=window.innerWidth;let ce=a.right+ie,fe=!0;return ce+M>re-20&&(ce=a.left-M-ie,fe=!1,ce<20&&(ce=20,fe=!0)),{top:`${a.top}px`,left:`${ce}px`,showArrow:!0,arrowOnLeft:fe}},[a]),[u,m]=F.useState(!1),[f,p]=F.useState(new Set),[x,b]=F.useState(()=>new Set),[_,g]=F.useState("Standard"),[y,h]=F.useState(["Equipment","Component","Type of Data"]),[v,L]=F.useState(!0),T=U.useRef(null),C=U.useRef(null),[S,B]=U.useState(""),[O,Y]=U.useState(!0),[N,q]=U.useState(!0),[le,I]=U.useState(!1),[X,ae]=U.useState(!1),[A,V]=U.useState("sequential"),R=U.useRef(0),z=U.useRef(0);U.useEffect(()=>{if(!C.current)return;const M=()=>{if(!C.current)return;const ce=C.current,fe=ce.scrollTop;if(Date.now()-z.current<500){R.current=fe;return}fe>R.current&&fe>100?N||q(!0):fe<50&&N&&q(!1),R.current=fe;const Ue=ce.querySelectorAll('[id^="group-"]');let Qe="";Ue.forEach(Ye=>{const ct=Ye.getBoundingClientRect(),Gt=ce.getBoundingClientRect();ct.top-Gt.top<=Gt.height*.3&&ct.bottom>Gt.top&&(Qe=Ye.id)}),Qe&&Qe!==S&&B(Qe)},ie=setTimeout(M,100),re=C.current;return re.addEventListener("scroll",M),()=>{clearTimeout(ie),re.removeEventListener("scroll",M)}},[S,N]),U.useEffect(()=>{const M=ie=>{ie.key==="Escape"&&(le?I(!1):v&&L(!1))};return document.addEventListener("keydown",M),()=>{document.removeEventListener("keydown",M)}},[v,le]),U.useEffect(()=>{if(!v)return;const M=ie=>{const re=ie.target;re&&(T.current&&T.current.contains(re)||re.closest('[data-role="sidebar-toggle"]')||L(!1))};return document.addEventListener("mousedown",M),document.addEventListener("touchstart",M,{passive:!0}),()=>{document.removeEventListener("mousedown",M),document.removeEventListener("touchstart",M)}},[v]);const J=M=>{v?de(M):(L(!0),setTimeout(()=>{de(M)},300))},de=M=>{if(!C.current)return;const ie=C.current.querySelector(`[data-point-key="${M}"]`);ie&&(ie.scrollIntoView({behavior:"smooth",block:"center"}),ie.classList.add("bg-blue-100"),setTimeout(()=>{ie.classList.remove("bg-blue-100")},1e3))},ee=()=>new Set(s),te=M=>{c(new Set(M))},me=F.useMemo(()=>rx(Pn),[]),Ve=F.useMemo(()=>[...me.keys()].sort(),[me]),$t=F.useMemo(()=>{let M=Pn;if(M=M.filter(re=>(Array.isArray(re.labels)?re.labels:[]).length>0),e){const re=e.toLowerCase();M=M.filter(ce=>(ce.entry.description||"").toLowerCase().includes(re)||(ce.entry.longdescription||"").toLowerCase().includes(re)||(ce.entry.name||"").toLowerCase().includes(re)?!0:(Array.isArray(ce.labels)?ce.labels:[]).some(Ue=>{const Qe=oi(Ue.label_family,Ue.label_text);return Qe&&Qe.toLowerCase().includes(re)}))}const ie=(()=>{switch(_){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();if(M=M.filter(re=>{const fe=(Array.isArray(re.labels)?re.labels:[]).filter(he=>he.label_family==="Level of Detail").map(he=>he.label_text);return fe.length===0?!0:fe.some(he=>ie.includes(he))}),x.size>0){const re=new Map;x.forEach(ce=>{const[fe,he]=ce.split(":",2);re.has(fe)||re.set(fe,new Set),re.get(fe).add(he)}),M=M.filter(ce=>{const fe=Array.isArray(ce.labels)?ce.labels:[];if(fe.length===0)return!1;const he=new Map;fe.forEach(Ue=>{he.has(Ue.label_family)||he.set(Ue.label_family,new Set),he.get(Ue.label_family).add(Ue.label_text)});for(const[Ue,Qe]of re.entries()){const Ye=he.get(Ue);if(!Ye||![...Qe].some(Gt=>Ye.has(Gt)))return!1}return!0})}return M},[e,x,_]),pe=F.useMemo(()=>ax($t,y),[$t,y]);U.useEffect(()=>{B(""),C.current&&setTimeout(()=>{const M=C.current;M&&M.dispatchEvent(new Event("scroll"))},150)},[pe]);const Be=M=>{if(console.log("toggle called for key:",M),!n.current){console.warn("ChartGrid callbacks not available yet");return}const ie=n.current.getActiveChartSelectedPoints(),re=ie.has(M);if(console.log("isCurrentlySelected:",re,"activeSelected size:",ie.size),re)console.log("Removing point:",M),n.current.togglePointForActiveChart(M);else{const ce=ee();console.log("Adding point:",M,"with inverters:",ce),n.current.updateInvertersForActiveChart(M,ce),te(ce)}},Xn=(M,ie)=>{te(ie),n.current&&n.current.updateInvertersForActiveChart(M,ie)},Jn=(M,ie)=>{b(re=>{const ce=new Set(re),fe=`${M}:${ie}`;return ce.has(fe)?ce.delete(fe):ce.add(fe),ce})},Zn=()=>b(new Set),el=M=>{p(ie=>{const re=new Set(ie);return re.has(M)?re.delete(M):re.add(M),re})},nt=$t.length,tl=F.useMemo(()=>Pn.filter(M=>(Array.isArray(M.labels)?M.labels:[]).length>0).length,[]);return F.useEffect(()=>{try{console.assert(Pn.length>0,"Expected sample data");const M=Pn.find(ie=>ie.entry.name==="pNom");M&&console.assert(M.entry.unit==="W","pNom should have unit W")}catch(M){console.warn("Self-test failed:",M)}},[]),o.jsxs("div",{className:"h-full bg-slate-100 p-4 md:p-6",children:[o.jsxs("div",{className:"mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative overflow-hidden flex flex-col",children:[o.jsx("div",{className:"flex-1 min-h-0 relative",children:o.jsx(J_,{protocols:Pn,onUpdateInverters:()=>{},onScrollToPoint:J,onRemoveInverter:()=>{},onSelectPointsToggle:L,selectPointsOpen:v,callbacksRef:n,onActiveChartSelectedPointsChange:i,onActiveChartPositionChange:r})}),o.jsxs("div",{ref:T,className:`fixed bg-white border-2 border-blue-400 shadow-xl transition-all duration-300 z-50 rounded-lg flex flex-row ${v?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-4 pointer-events-none"}`,style:{top:d.top,left:d.left,width:"800px",height:v?"calc(100vh - 8rem)":"0",maxHeight:"calc(100vh - 8rem)",overflow:"hidden"},children:[v&&d.showArrow&&o.jsx("div",{className:`absolute top-4 w-0 h-0 ${d.arrowOnLeft?"left-0":"right-0"}`,style:{borderTop:"8px solid transparent",borderBottom:"8px solid transparent",...d.arrowOnLeft?{borderRight:"8px solid rgb(96, 165, 250)",transform:"translateX(-8px)"}:{borderLeft:"8px solid rgb(96, 165, 250)",transform:"translateX(8px)"}}}),o.jsxs("div",{className:"h-full flex flex-row w-full min-h-0",children:[o.jsx("div",{className:"w-40 border-r border-gray-200 flex-shrink-0 overflow-y-auto",children:o.jsxs("nav",{className:"p-3 text-sm text-gray-800",children:[o.jsx("div",{className:"text-emerald-600 font-semibold mb-2 text-xs",children:"Navigation"}),o.jsx("div",{className:"flex flex-col gap-0.5",children:pe.size>0&&[...pe.entries()].filter(([M])=>M!=="(Unlabeled)").map(([M,ie])=>{const re=`group-${M.replace(/\s+/g,"-")}-0`,ce=S===re,fe=[];return ie instanceof Map&&fe.push(...[...ie.entries()].filter(([he])=>he!=="(Unlabeled)")),o.jsxs("div",{children:[o.jsxs("div",{className:"relative",children:[ce&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),o.jsx("button",{className:`px-2 py-1 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors font-medium ${ce?"text-blue-600 bg-blue-50":"text-gray-800"}`,onClick:()=>{const he=document.getElementById(re);if(he&&C.current){const Ue=C.current.getBoundingClientRect(),Qe=he.getBoundingClientRect(),Ye=C.current.scrollTop,ct=Qe.top-Ue.top+Ye;C.current.scrollTo({top:ct-10,behavior:"smooth"})}},children:M})]}),fe.length>0&&o.jsx("div",{className:"ml-2 mt-0.5 space-y-0.5",children:fe.map(([he])=>{const Ye=`group-${`${M.replace(/\s+/g,"-")}-${he.replace(/\s+/g,"-")}`}-1`,ct=S===Ye;return o.jsxs("div",{className:"relative",children:[ct&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-0.5 bg-blue-400 rounded-r"}),o.jsx("button",{className:`px-2 py-0.5 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors ${ct?"text-blue-600 bg-blue-50":"text-gray-600"}`,onClick:()=>{const Gt=document.getElementById(Ye);if(Gt&&C.current){const ea=C.current.getBoundingClientRect(),to=Gt.getBoundingClientRect(),no=C.current.scrollTop,zl=to.top-ea.top+no;C.current.scrollTo({top:zl-10,behavior:"smooth"})}},children:he})]},he)})})]},M)})})]})}),o.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[o.jsx("div",{className:"border-b border-gray-200",children:o.jsxs("button",{onClick:()=>{z.current=Date.now(),q(!N)},className:"w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-colors",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:`h-4 w-4 text-gray-500 transition-transform ${N?"":"rotate-90"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),o.jsx("div",{className:"text-lg font-semibold",children:"Add Points"})]}),o.jsxs("div",{className:"text-sm text-gray-600 flex items-center gap-2",children:[o.jsxs("span",{children:["Available: ",nt.toLocaleString()," of ",tl.toLocaleString()]}),o.jsxs("button",{onClick:M=>{M.stopPropagation(),I(!0)},className:"px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",title:"Configure preferences",children:[o.jsxs("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Preferences"]})]})]})}),o.jsx("div",{className:`transition-all duration-300 overflow-hidden ${N?"max-h-0":"max-h-[1000px]"}`,children:o.jsxs("div",{className:"p-4",children:[o.jsx(B_,{allLabels:me,selectedLabels:x,onToggleLabel:Jn,onClearFilters:Zn,protocols:Pn,detailLevel:_,filterStructure:A,getLabelColor:Oo,getLabelHelp:oi}),o.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[o.jsx("div",{className:"flex-1",children:o.jsx(Z_,{value:e,onChange:t})}),o.jsx(ox,{show:u,onToggle:m})]}),o.jsxs("div",{className:"mt-2 flex items-center gap-4",children:[o.jsxs("button",{onClick:()=>{Y(!0),C.current&&C.current.querySelectorAll("details").forEach(ie=>{ie.open=!0})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[o.jsx("span",{children:"⤵"}),o.jsx("span",{children:"Expand all"})]}),o.jsxs("button",{onClick:()=>{Y(!1),C.current&&C.current.querySelectorAll("details").forEach(ie=>{ie.open=!1})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[o.jsx("span",{children:"⤴"}),o.jsx("span",{children:"Collapse all"})]}),o.jsx(Eu,{value:_,onChange:g,getLabelHelp:oi})]})]})}),o.jsx("div",{className:"flex-1 overflow-y-auto px-4 pb-4 pr-1",ref:C,"data-scroll-container":!0,children:pe.size===0?o.jsxs("div",{className:"py-4 text-center text-sm text-gray-500",children:["No points match the current filters.",o.jsx("br",{}),o.jsx("b",{children:"Increase the Detail Level"})," or ",o.jsx("b",{children:"remove filters"})," to see more data points."]}):[...pe.entries()].filter(([M])=>M!=="(Unlabeled)").map(([M,ie])=>o.jsx(Wf,{levelName:M,levelData:ie,selected:l,toggle:Be,showHelp:u,onUpdateInverters:Xn,groupsExpanded:O,pointHelpEnabled:f,onTogglePointHelp:el,onOpenChartTutorial:()=>ae(!0),depth:0,query:e,hierarchy:y,getLabelColor:Oo,getLabelHelp:oi},M))}),o.jsxs("div",{className:"border-t border-gray-200 bg-white/80 px-4 py-3",children:[o.jsx("p",{className:"text-xs text-gray-600 mb-2",children:_!=="Complete"?"Didn't find what you were looking for? Increase the Detail Level, remove filters, or clearing your search terms to see more data points.":"Didn't find what you were looking for? Try removing filters or clearing your search terms to see more data points."}),o.jsx(Eu,{value:_,onChange:g,getLabelHelp:oi})]})]})]})]})]}),le&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",onClick:()=>I(!1),children:o.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden",onClick:M=>M.stopPropagation(),children:[o.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[o.jsxs("h2",{className:"text-lg font-semibold text-gray-800 flex items-center gap-2",children:[o.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Preferences"]}),o.jsx("button",{onClick:()=>I(!1),className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"p-4 overflow-y-auto max-h-[calc(80vh-140px)] space-y-6",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-800",children:"Filter Structure"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",children:[o.jsx("input",{type:"radio",name:"filterStructure",value:"sequential",checked:A==="sequential",onChange:M=>V(M.target.value),className:"mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-medium text-gray-900",children:"Sequential"}),o.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Filters unlock in order. Start by selecting equipment, then component options unlock, followed by type of data, and finally unit filters. Each level requires at least one selection before the next unlocks. This guided approach helps narrow down options step-by-step."})]})]}),o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",children:[o.jsx("input",{type:"radio",name:"filterStructure",value:"freeform",checked:A==="freeform",onChange:M=>V(M.target.value),className:"mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-medium text-gray-900",children:"Freeform"}),o.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Select filters in any order you prefer. All filter categories are available simultaneously, allowing flexible combinations. Filters within a category use OR logic (any match), while filters across categories use AND logic (all must match)."})]})]})]})]}),o.jsxs("div",{className:"space-y-3 pt-6 border-t border-gray-200",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-800",children:"Sort Order"}),o.jsx(tx,{availableFamilies:Ve,hierarchy:y,onChange:h,scrollContainerRef:C,getLabelColor:Oo})]})]}),o.jsx("div",{className:"flex items-center justify-end gap-2 p-4 border-t border-gray-200",children:o.jsx("button",{onClick:()=>I(!1),className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",children:"Done"})})]})}),o.jsx(zf,{isOpen:X,onClose:()=>ae(!1),initialStep:7})]})}const Au="matter-app-active-view";function cx(){const[e,t]=F.useState(()=>{const n=localStorage.getItem(Au);return n==="site-config"||n==="historical-data"?n:"site-config"});return F.useEffect(()=>{localStorage.setItem(Au,e)},[e]),o.jsxs("div",{className:"flex h-screen bg-slate-100",children:[o.jsxs("aside",{className:"w-64 bg-white border-r border-slate-300 flex flex-col shadow-sm",children:[o.jsx("div",{className:"p-4 border-b border-slate-300",children:o.jsx("h1",{className:"text-lg font-semibold text-slate-800",children:"Matter App"})}),o.jsxs("nav",{className:"flex-1 p-3",children:[o.jsx("button",{onClick:()=>t("site-config"),className:`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${e==="site-config"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xl",children:"⚙️"}),o.jsx("span",{children:"Site Config"})]})}),o.jsx("button",{onClick:()=>t("historical-data"),className:`w-full text-left px-4 py-3 rounded-lg transition-colors ${e==="historical-data"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xl",children:"📊"}),o.jsx("span",{children:"Historical Data"})]})})]}),o.jsx("div",{className:"p-4 border-t border-slate-300 text-xs text-slate-500",children:o.jsxs("div",{children:["Active: ",e==="site-config"?"Site Config":"Historical Data"]})})]}),o.jsxs("main",{className:"flex-1 overflow-auto",children:[e==="site-config"&&o.jsx(hh,{}),e==="historical-data"&&o.jsx(sx,{})]})]})}jo.createRoot(document.getElementById("root")).render(o.jsx(U.StrictMode,{children:o.jsx(cx,{})}));

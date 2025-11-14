(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function qf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pu={exports:{}},xr={},Du={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ui=Symbol.for("react.element"),zf=Symbol.for("react.portal"),Kf=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Yf=Symbol.for("react.profiler"),Xf=Symbol.for("react.provider"),Jf=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),ey=Symbol.for("react.suspense"),ty=Symbol.for("react.memo"),ny=Symbol.for("react.lazy"),Yc=Symbol.iterator;function ly(e){return e===null||typeof e!="object"?null:(e=Yc&&e[Yc]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nu=Object.assign,Au={};function Bl(e,t,n){this.props=e,this.context=t,this.refs=Au,this.updater=n||Tu}Bl.prototype.isReactComponent={};Bl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Eu(){}Eu.prototype=Bl.prototype;function Os(e,t,n){this.props=e,this.context=t,this.refs=Au,this.updater=n||Tu}var Bs=Os.prototype=new Eu;Bs.constructor=Os;Nu(Bs,Bl.prototype);Bs.isPureReactComponent=!0;var Xc=Array.isArray,Vu=Object.prototype.hasOwnProperty,Is={current:null},Ru={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var l,i={},a=null,r=null;if(t!=null)for(l in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(a=""+t.key),t)Vu.call(t,l)&&!Ru.hasOwnProperty(l)&&(i[l]=t[l]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(l in s=e.defaultProps,s)i[l]===void 0&&(i[l]=s[l]);return{$$typeof:Ui,type:e,key:a,ref:r,props:i,_owner:Is.current}}function iy(e,t){return{$$typeof:Ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function js(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ui}function ay(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jc=/\/+/g;function eo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ay(""+e.key):t.toString(36)}function ka(e,t,n,l,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Ui:case zf:r=!0}}if(r)return r=e,i=i(r),e=l===""?"."+eo(r,0):l,Xc(i)?(n="",e!=null&&(n=e.replace(Jc,"$&/")+"/"),ka(i,t,n,"",function(d){return d})):i!=null&&(js(i)&&(i=iy(i,n+(!i.key||r&&r.key===i.key?"":(""+i.key).replace(Jc,"$&/")+"/")+e)),t.push(i)),1;if(r=0,l=l===""?".":l+":",Xc(e))for(var s=0;s<e.length;s++){a=e[s];var c=l+eo(a,s);r+=ka(a,t,n,c,i)}else if(c=ly(e),typeof c=="function")for(e=c.call(e),s=0;!(a=e.next()).done;)a=a.value,c=l+eo(a,s++),r+=ka(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function Xi(e,t,n){if(e==null)return e;var l=[],i=0;return ka(e,l,"","",function(a){return t.call(n,a,i++)}),l}function ry(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Pa={transition:null},oy={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Pa,ReactCurrentOwner:Is};function Gu(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Xi,forEach:function(e,t,n){Xi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xi(e,function(){t++}),t},toArray:function(e){return Xi(e,function(t){return t})||[]},only:function(e){if(!js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=Bl;oe.Fragment=Kf;oe.Profiler=Yf;oe.PureComponent=Os;oe.StrictMode=Qf;oe.Suspense=ey;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;oe.act=Gu;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=Nu({},e.props),i=e.key,a=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,r=Is.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Vu.call(t,c)&&!Ru.hasOwnProperty(c)&&(l[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];l.children=s}return{$$typeof:Ui,type:e.type,key:i,ref:a,props:l,_owner:r}};oe.createContext=function(e){return e={$$typeof:Jf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xf,_context:e},e.Consumer=e};oe.createElement=Mu;oe.createFactory=function(e){var t=Mu.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:Zf,render:e}};oe.isValidElement=js;oe.lazy=function(e){return{$$typeof:ny,_payload:{_status:-1,_result:e},_init:ry}};oe.memo=function(e,t){return{$$typeof:ty,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=Pa.transition;Pa.transition={};try{e()}finally{Pa.transition=t}};oe.unstable_act=Gu;oe.useCallback=function(e,t){return Je.current.useCallback(e,t)};oe.useContext=function(e){return Je.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};oe.useEffect=function(e,t){return Je.current.useEffect(e,t)};oe.useId=function(){return Je.current.useId()};oe.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return Je.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};oe.useRef=function(e){return Je.current.useRef(e)};oe.useState=function(e){return Je.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return Je.current.useTransition()};oe.version="18.3.1";Du.exports=oe;var $=Du.exports;const U=qf($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy=$,cy=Symbol.for("react.element"),dy=Symbol.for("react.fragment"),uy=Object.prototype.hasOwnProperty,py=sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,my={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var l,i={},a=null,r=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(r=t.ref);for(l in t)uy.call(t,l)&&!my.hasOwnProperty(l)&&(i[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)i[l]===void 0&&(i[l]=t[l]);return{$$typeof:cy,type:e,key:a,ref:r,props:i,_owner:py.current}}xr.Fragment=dy;xr.jsx=Fu;xr.jsxs=Fu;Pu.exports=xr;var o=Pu.exports,Mo={},Ou={exports:{}},yt={},Bu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,F){var V=E.length;E.push(F);e:for(;0<V;){var X=V-1>>>1,se=E[X];if(0<i(se,F))E[X]=F,E[V]=se,V=X;else break e}}function n(E){return E.length===0?null:E[0]}function l(E){if(E.length===0)return null;var F=E[0],V=E.pop();if(V!==F){E[0]=V;e:for(var X=0,se=E.length,ge=se>>>1;X<ge;){var J=2*(X+1)-1,re=E[J],_e=J+1,Ae=E[_e];if(0>i(re,V))_e<se&&0>i(Ae,re)?(E[X]=Ae,E[_e]=V,X=_e):(E[X]=re,E[J]=V,X=J);else if(_e<se&&0>i(Ae,V))E[X]=Ae,E[_e]=V,X=_e;else break e}}return F}function i(E,F){var V=E.sortIndex-F.sortIndex;return V!==0?V:E.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var r=Date,s=r.now();e.unstable_now=function(){return r.now()-s}}var c=[],d=[],u=1,p=null,f=3,m=!1,x=!1,g=!1,_=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var F=n(d);F!==null;){if(F.callback===null)l(d);else if(F.startTime<=E)l(d),F.sortIndex=F.expirationTime,t(c,F);else break;F=n(d)}}function v(E){if(g=!1,h(E),!x)if(n(c)!==null)x=!0,B(C);else{var F=n(d);F!==null&&ee(v,F.startTime-E)}}function C(E,F){x=!1,g&&(g=!1,b(L),L=-1),m=!0;var V=f;try{for(h(F),p=n(c);p!==null&&(!(p.expirationTime>F)||E&&!W());){var X=p.callback;if(typeof X=="function"){p.callback=null,f=p.priorityLevel;var se=X(p.expirationTime<=F);F=e.unstable_now(),typeof se=="function"?p.callback=se:p===n(c)&&l(c),h(F)}else l(c);p=n(c)}if(p!==null)var ge=!0;else{var J=n(d);J!==null&&ee(v,J.startTime-F),ge=!1}return ge}finally{p=null,f=V,m=!1}}var T=!1,S=null,L=-1,j=5,N=-1;function W(){return!(e.unstable_now()-N<j)}function H(){if(S!==null){var E=e.unstable_now();N=E;var F=!0;try{F=S(!0,E)}finally{F?Y():(T=!1,S=null)}}else T=!1}var Y;if(typeof y=="function")Y=function(){y(H)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,G=de.port2;de.port1.onmessage=H,Y=function(){G.postMessage(null)}}else Y=function(){_(H,0)};function B(E){S=E,T||(T=!0,Y())}function ee(E,F){L=_(function(){E(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,B(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var V=f;f=F;try{return E()}finally{f=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,F){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var V=f;f=E;try{return F()}finally{f=V}},e.unstable_scheduleCallback=function(E,F,V){var X=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?X+V:X):V=X,E){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=V+se,E={id:u++,callback:F,priorityLevel:E,startTime:V,expirationTime:se,sortIndex:-1},V>X?(E.sortIndex=V,t(d,E),n(c)===null&&E===n(d)&&(g?(b(L),L=-1):g=!0,ee(v,V-X))):(E.sortIndex=se,t(c,E),x||m||(x=!0,B(C))),E},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(E){var F=f;return function(){var V=f;f=F;try{return E.apply(this,arguments)}finally{f=V}}}})(Iu);Bu.exports=Iu;var fy=Bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy=$,ft=fy;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ju=new Set,wi={};function Kn(e,t){Nl(e,t),Nl(e+"Capture",t)}function Nl(e,t){for(wi[e]=t,e=0;e<t.length;e++)ju.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=Object.prototype.hasOwnProperty,gy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zc={},ed={};function by(e){return Go.call(ed,e)?!0:Go.call(Zc,e)?!1:gy.test(e)?ed[e]=!0:(Zc[e]=!0,!1)}function hy(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xy(e,t,n,l){if(t===null||typeof t>"u"||hy(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,l,i,a,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=r}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Us=/[\-:]([a-z])/g;function $s(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Us,$s);Ue[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Us,$s);Ue[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Us,$s);Ue[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ws(e,t,n,l){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xy(t,n,i,l)&&(n=null),l||i===null?by(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,l=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var tn=yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),rl=Symbol.for("react.portal"),ol=Symbol.for("react.fragment"),Hs=Symbol.for("react.strict_mode"),Fo=Symbol.for("react.profiler"),Uu=Symbol.for("react.provider"),$u=Symbol.for("react.context"),qs=Symbol.for("react.forward_ref"),Oo=Symbol.for("react.suspense"),Bo=Symbol.for("react.suspense_list"),zs=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Wu=Symbol.for("react.offscreen"),td=Symbol.iterator;function Yl(e){return e===null||typeof e!="object"?null:(e=td&&e[td]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,to;function ri(e){if(to===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);to=t&&t[1]||""}return`
`+to+e}var no=!1;function lo(e,t){if(!e||no)return"";no=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var l=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){l=d}e.call(t.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=l.stack.split(`
`),r=i.length-1,s=a.length-1;1<=r&&0<=s&&i[r]!==a[s];)s--;for(;1<=r&&0<=s;r--,s--)if(i[r]!==a[s]){if(r!==1||s!==1)do if(r--,s--,0>s||i[r]!==a[s]){var c=`
`+i[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=r&&0<=s);break}}}finally{no=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ri(e):""}function _y(e){switch(e.tag){case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return e=lo(e.type,!1),e;case 11:return e=lo(e.type.render,!1),e;case 1:return e=lo(e.type,!0),e;default:return""}}function Io(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ol:return"Fragment";case rl:return"Portal";case Fo:return"Profiler";case Hs:return"StrictMode";case Oo:return"Suspense";case Bo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $u:return(e.displayName||"Context")+".Consumer";case Uu:return(e._context.displayName||"Context")+".Provider";case qs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zs:return t=e.displayName||null,t!==null?t:Io(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return Io(e(t))}catch{}}return null}function vy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Io(t);case 8:return t===Hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wy(e){var t=Hu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){l=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zi(e){e._valueTracker||(e._valueTracker=wy(e))}function qu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Hu(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function $a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jo(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nd(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zu(e,t){t=t.checked,t!=null&&Ws(e,"checked",t,!1)}function Uo(e,t){zu(e,t);var n=vn(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$o(e,t.type,n):t.hasOwnProperty("defaultValue")&&$o(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ld(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $o(e,t,n){(t!=="number"||$a(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oi=Array.isArray;function wl(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function id(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(oi(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function Ku(e,t){var n=vn(t.value),l=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function ad(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ho(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ea,Yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ea.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cy=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(e){Cy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pi[t]=pi[e]})});function Xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pi.hasOwnProperty(e)&&pi[e]?(""+t).trim():t+"px"}function Ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,i=Xu(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,i):e[n]=i}}var Sy=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qo(e,t){if(t){if(Sy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function zo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ko=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,Cl=null,Sl=null;function rd(e){if(e=Hi(e)){if(typeof Qo!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Sr(t),Qo(e.stateNode,e.type,t))}}function Zu(e){Cl?Sl?Sl.push(e):Sl=[e]:Cl=e}function ep(){if(Cl){var e=Cl,t=Sl;if(Sl=Cl=null,rd(e),t)for(e=0;e<t.length;e++)rd(t[e])}}function tp(e,t){return e(t)}function np(){}var io=!1;function lp(e,t,n){if(io)return e(t,n);io=!0;try{return tp(e,t,n)}finally{io=!1,(Cl!==null||Sl!==null)&&(np(),ep())}}function Si(e,t){var n=e.stateNode;if(n===null)return null;var l=Sr(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Yo=!1;if(Xt)try{var Xl={};Object.defineProperty(Xl,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{Yo=!1}function Ly(e,t,n,l,i,a,r,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var mi=!1,Wa=null,Ha=!1,Xo=null,ky={onError:function(e){mi=!0,Wa=e}};function Py(e,t,n,l,i,a,r,s,c){mi=!1,Wa=null,Ly.apply(ky,arguments)}function Dy(e,t,n,l,i,a,r,s,c){if(Py.apply(this,arguments),mi){if(mi){var d=Wa;mi=!1,Wa=null}else throw Error(R(198));Ha||(Ha=!0,Xo=d)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ip(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function od(e){if(Qn(e)!==e)throw Error(R(188))}function Ty(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return od(i),e;if(a===l)return od(i),t;a=a.sibling}throw Error(R(188))}if(n.return!==l.return)n=i,l=a;else{for(var r=!1,s=i.child;s;){if(s===n){r=!0,n=i,l=a;break}if(s===l){r=!0,l=i,n=a;break}s=s.sibling}if(!r){for(s=a.child;s;){if(s===n){r=!0,n=a,l=i;break}if(s===l){r=!0,l=a,n=i;break}s=s.sibling}if(!r)throw Error(R(189))}}if(n.alternate!==l)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function ap(e){return e=Ty(e),e!==null?rp(e):null}function rp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rp(e);if(t!==null)return t;e=e.sibling}return null}var op=ft.unstable_scheduleCallback,sd=ft.unstable_cancelCallback,Ny=ft.unstable_shouldYield,Ay=ft.unstable_requestPaint,Ee=ft.unstable_now,Ey=ft.unstable_getCurrentPriorityLevel,Qs=ft.unstable_ImmediatePriority,sp=ft.unstable_UserBlockingPriority,qa=ft.unstable_NormalPriority,Vy=ft.unstable_LowPriority,cp=ft.unstable_IdlePriority,_r=null,It=null;function Ry(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(_r,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:Fy,My=Math.log,Gy=Math.LN2;function Fy(e){return e>>>=0,e===0?32:31-(My(e)/Gy|0)|0}var ta=64,na=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,a=e.pingedLanes,r=n&268435455;if(r!==0){var s=r&~i;s!==0?l=si(s):(a&=r,a!==0&&(l=si(a)))}else r=n&~i,r!==0?l=si(r):a!==0&&(l=si(a));if(l===0)return 0;if(t!==0&&t!==l&&!(t&i)&&(i=l&-l,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(l&4&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-Vt(t),i=1<<n,l|=e[n],t&=~i;return l}function Oy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function By(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var r=31-Vt(a),s=1<<r,c=i[r];c===-1?(!(s&n)||s&l)&&(i[r]=Oy(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dp(){var e=ta;return ta<<=1,!(ta&4194240)&&(ta=64),e}function ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=n}function Iy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Vt(n),a=1<<i;t[i]=0,l[i]=-1,e[i]=-1,n&=~a}}function Ys(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Vt(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}var pe=0;function up(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pp,Xs,mp,fp,yp,Zo=!1,la=[],pn=null,mn=null,fn=null,Li=new Map,ki=new Map,sn=[],jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(t.pointerId)}}function Jl(e,t,n,l,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Hi(t),t!==null&&Xs(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Uy(e,t,n,l,i){switch(t){case"focusin":return pn=Jl(pn,e,t,n,l,i),!0;case"dragenter":return mn=Jl(mn,e,t,n,l,i),!0;case"mouseover":return fn=Jl(fn,e,t,n,l,i),!0;case"pointerover":var a=i.pointerId;return Li.set(a,Jl(Li.get(a)||null,e,t,n,l,i)),!0;case"gotpointercapture":return a=i.pointerId,ki.set(a,Jl(ki.get(a)||null,e,t,n,l,i)),!0}return!1}function gp(e){var t=Rn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=ip(n),t!==null){e.blockedOn=t,yp(e.priority,function(){mp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Da(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Ko=l,n.target.dispatchEvent(l),Ko=null}else return t=Hi(n),t!==null&&Xs(t),e.blockedOn=n,!1;t.shift()}return!0}function dd(e,t,n){Da(e)&&n.delete(t)}function $y(){Zo=!1,pn!==null&&Da(pn)&&(pn=null),mn!==null&&Da(mn)&&(mn=null),fn!==null&&Da(fn)&&(fn=null),Li.forEach(dd),ki.forEach(dd)}function Zl(e,t){e.blockedOn===t&&(e.blockedOn=null,Zo||(Zo=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,$y)))}function Pi(e){function t(i){return Zl(i,e)}if(0<la.length){Zl(la[0],e);for(var n=1;n<la.length;n++){var l=la[n];l.blockedOn===e&&(l.blockedOn=null)}}for(pn!==null&&Zl(pn,e),mn!==null&&Zl(mn,e),fn!==null&&Zl(fn,e),Li.forEach(t),ki.forEach(t),n=0;n<sn.length;n++)l=sn[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)gp(n),n.blockedOn===null&&sn.shift()}var Ll=tn.ReactCurrentBatchConfig,Ka=!0;function Wy(e,t,n,l){var i=pe,a=Ll.transition;Ll.transition=null;try{pe=1,Js(e,t,n,l)}finally{pe=i,Ll.transition=a}}function Hy(e,t,n,l){var i=pe,a=Ll.transition;Ll.transition=null;try{pe=4,Js(e,t,n,l)}finally{pe=i,Ll.transition=a}}function Js(e,t,n,l){if(Ka){var i=es(e,t,n,l);if(i===null)go(e,t,l,Qa,n),cd(e,l);else if(Uy(i,e,t,n,l))l.stopPropagation();else if(cd(e,l),t&4&&-1<jy.indexOf(e)){for(;i!==null;){var a=Hi(i);if(a!==null&&pp(a),a=es(e,t,n,l),a===null&&go(e,t,l,Qa,n),a===i)break;i=a}i!==null&&l.stopPropagation()}else go(e,t,l,null,n)}}var Qa=null;function es(e,t,n,l){if(Qa=null,e=Ks(l),e=Rn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ip(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qa=e,null}function bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ey()){case Qs:return 1;case sp:return 4;case qa:case Vy:return 16;case cp:return 536870912;default:return 16}default:return 16}}var dn=null,Zs=null,Ta=null;function hp(){if(Ta)return Ta;var e,t=Zs,n=t.length,l,i="value"in dn?dn.value:dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===i[a-l];l++);return Ta=i.slice(e,1<l?1-l:void 0)}function Na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ia(){return!0}function ud(){return!1}function gt(e){function t(n,l,i,a,r){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ia:ud,this.isPropagationStopped=ud,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),t}var Il={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=gt(Il),Wi=Te({},Il,{view:0,detail:0}),qy=gt(Wi),ro,oo,ei,vr=Te({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(ro=e.screenX-ei.screenX,oo=e.screenY-ei.screenY):oo=ro=0,ei=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),pd=gt(vr),zy=Te({},vr,{dataTransfer:0}),Ky=gt(zy),Qy=Te({},Wi,{relatedTarget:0}),so=gt(Qy),Yy=Te({},Il,{animationName:0,elapsedTime:0,pseudoElement:0}),Xy=gt(Yy),Jy=Te({},Il,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zy=gt(Jy),eg=Te({},Il,{data:0}),md=gt(eg),tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lg[e])?!!t[e]:!1}function tc(){return ig}var ag=Te({},Wi,{key:function(e){if(e.key){var t=tg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?Na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rg=gt(ag),og=Te({},vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=gt(og),sg=Te({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),cg=gt(sg),dg=Te({},Il,{propertyName:0,elapsedTime:0,pseudoElement:0}),ug=gt(dg),pg=Te({},vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=gt(pg),fg=[9,13,27,32],nc=Xt&&"CompositionEvent"in window,fi=null;Xt&&"documentMode"in document&&(fi=document.documentMode);var yg=Xt&&"TextEvent"in window&&!fi,xp=Xt&&(!nc||fi&&8<fi&&11>=fi),yd=" ",gd=!1;function _p(e,t){switch(e){case"keyup":return fg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function gg(e,t){switch(e){case"compositionend":return vp(t);case"keypress":return t.which!==32?null:(gd=!0,yd);case"textInput":return e=t.data,e===yd&&gd?null:e;default:return null}}function bg(e,t){if(sl)return e==="compositionend"||!nc&&_p(e,t)?(e=hp(),Ta=Zs=dn=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xp&&t.locale!=="ko"?null:t.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hg[e.type]:t==="textarea"}function wp(e,t,n,l){Zu(l),t=Ya(t,"onChange"),0<t.length&&(n=new ec("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var yi=null,Di=null;function xg(e){Vp(e,0)}function wr(e){var t=ul(e);if(qu(t))return e}function _g(e,t){if(e==="change")return t}var Cp=!1;if(Xt){var co;if(Xt){var uo="oninput"in document;if(!uo){var hd=document.createElement("div");hd.setAttribute("oninput","return;"),uo=typeof hd.oninput=="function"}co=uo}else co=!1;Cp=co&&(!document.documentMode||9<document.documentMode)}function xd(){yi&&(yi.detachEvent("onpropertychange",Sp),Di=yi=null)}function Sp(e){if(e.propertyName==="value"&&wr(Di)){var t=[];wp(t,Di,e,Ks(e)),lp(xg,t)}}function vg(e,t,n){e==="focusin"?(xd(),yi=t,Di=n,yi.attachEvent("onpropertychange",Sp)):e==="focusout"&&xd()}function wg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wr(Di)}function Cg(e,t){if(e==="click")return wr(t)}function Sg(e,t){if(e==="input"||e==="change")return wr(t)}function Lg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Lg;function Ti(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!Go.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function _d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vd(e,t){var n=_d(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_d(n)}}function Lp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kp(){for(var e=window,t=$a();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$a(e.document)}return t}function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kg(e){var t=kp(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lp(n.ownerDocument.documentElement,n)){if(l!==null&&lc(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(l.start,i);l=l.end===void 0?a:Math.min(l.end,i),!e.extend&&a>l&&(i=l,l=a,a=i),i=vd(n,a);var r=vd(n,l);i&&r&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>l?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pg=Xt&&"documentMode"in document&&11>=document.documentMode,cl=null,ts=null,gi=null,ns=!1;function wd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ns||cl==null||cl!==$a(l)||(l=cl,"selectionStart"in l&&lc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),gi&&Ti(gi,l)||(gi=l,l=Ya(ts,"onSelect"),0<l.length&&(t=new ec("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=cl)))}function aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dl={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},po={},Pp={};Xt&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete dl.animationend.animation,delete dl.animationiteration.animation,delete dl.animationstart.animation),"TransitionEvent"in window||delete dl.transitionend.transition);function Cr(e){if(po[e])return po[e];if(!dl[e])return e;var t=dl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pp)return po[e]=t[n];return e}var Dp=Cr("animationend"),Tp=Cr("animationiteration"),Np=Cr("animationstart"),Ap=Cr("transitionend"),Ep=new Map,Cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){Ep.set(e,t),Kn(t,[e])}for(var mo=0;mo<Cd.length;mo++){var fo=Cd[mo],Dg=fo.toLowerCase(),Tg=fo[0].toUpperCase()+fo.slice(1);Sn(Dg,"on"+Tg)}Sn(Dp,"onAnimationEnd");Sn(Tp,"onAnimationIteration");Sn(Np,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Ap,"onTransitionEnd");Nl("onMouseEnter",["mouseout","mouseover"]);Nl("onMouseLeave",["mouseout","mouseover"]);Nl("onPointerEnter",["pointerout","pointerover"]);Nl("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Sd(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,Dy(l,t,void 0,e),e.currentTarget=null}function Vp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var a=void 0;if(t)for(var r=l.length-1;0<=r;r--){var s=l[r],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break e;Sd(i,s,d),a=c}else for(r=0;r<l.length;r++){if(s=l[r],c=s.instance,d=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break e;Sd(i,s,d),a=c}}}if(Ha)throw e=Xo,Ha=!1,Xo=null,e}function he(e,t){var n=t[os];n===void 0&&(n=t[os]=new Set);var l=e+"__bubble";n.has(l)||(Rp(t,e,2,!1),n.add(l))}function yo(e,t,n){var l=0;t&&(l|=4),Rp(n,e,l,t)}var ra="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[ra]){e[ra]=!0,ju.forEach(function(n){n!=="selectionchange"&&(Ng.has(n)||yo(n,!1,e),yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ra]||(t[ra]=!0,yo("selectionchange",!1,t))}}function Rp(e,t,n,l){switch(bp(t)){case 1:var i=Wy;break;case 4:i=Hy;break;default:i=Js}n=i.bind(null,t,n,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function go(e,t,n,l,i){var a=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var s=l.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(r===4)for(r=l.return;r!==null;){var c=r.tag;if((c===3||c===4)&&(c=r.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;r=r.return}for(;s!==null;){if(r=Rn(s),r===null)return;if(c=r.tag,c===5||c===6){l=a=r;continue e}s=s.parentNode}}l=l.return}lp(function(){var d=a,u=Ks(n),p=[];e:{var f=Ep.get(e);if(f!==void 0){var m=ec,x=e;switch(e){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":m=rg;break;case"focusin":x="focus",m=so;break;case"focusout":x="blur",m=so;break;case"beforeblur":case"afterblur":m=so;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=cg;break;case Dp:case Tp:case Np:m=Xy;break;case Ap:m=ug;break;case"scroll":m=qy;break;case"wheel":m=mg;break;case"copy":case"cut":case"paste":m=Zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fd}var g=(t&4)!==0,_=!g&&e==="scroll",b=g?f!==null?f+"Capture":null:f;g=[];for(var y=d,h;y!==null;){h=y;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,b!==null&&(v=Si(y,b),v!=null&&g.push(Ai(y,v,h)))),_)break;y=y.return}0<g.length&&(f=new m(f,x,null,n,u),p.push({event:f,listeners:g}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Ko&&(x=n.relatedTarget||n.fromElement)&&(Rn(x)||x[Jt]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=d,x=x?Rn(x):null,x!==null&&(_=Qn(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=d),m!==x)){if(g=pd,v="onMouseLeave",b="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(g=fd,v="onPointerLeave",b="onPointerEnter",y="pointer"),_=m==null?f:ul(m),h=x==null?f:ul(x),f=new g(v,y+"leave",m,n,u),f.target=_,f.relatedTarget=h,v=null,Rn(u)===d&&(g=new g(b,y+"enter",x,n,u),g.target=h,g.relatedTarget=_,v=g),_=v,m&&x)t:{for(g=m,b=x,y=0,h=g;h;h=nl(h))y++;for(h=0,v=b;v;v=nl(v))h++;for(;0<y-h;)g=nl(g),y--;for(;0<h-y;)b=nl(b),h--;for(;y--;){if(g===b||b!==null&&g===b.alternate)break t;g=nl(g),b=nl(b)}g=null}else g=null;m!==null&&Ld(p,f,m,g,!1),x!==null&&_!==null&&Ld(p,_,x,g,!0)}}e:{if(f=d?ul(d):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=_g;else if(bd(f))if(Cp)C=Sg;else{C=wg;var T=vg}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Cg);if(C&&(C=C(e,d))){wp(p,C,n,u);break e}T&&T(e,f,d),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&$o(f,"number",f.value)}switch(T=d?ul(d):window,e){case"focusin":(bd(T)||T.contentEditable==="true")&&(cl=T,ts=d,gi=null);break;case"focusout":gi=ts=cl=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,wd(p,n,u);break;case"selectionchange":if(Pg)break;case"keydown":case"keyup":wd(p,n,u)}var S;if(nc)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else sl?_p(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(xp&&n.locale!=="ko"&&(sl||L!=="onCompositionStart"?L==="onCompositionEnd"&&sl&&(S=hp()):(dn=u,Zs="value"in dn?dn.value:dn.textContent,sl=!0)),T=Ya(d,L),0<T.length&&(L=new md(L,e,null,n,u),p.push({event:L,listeners:T}),S?L.data=S:(S=vp(n),S!==null&&(L.data=S)))),(S=yg?gg(e,n):bg(e,n))&&(d=Ya(d,"onBeforeInput"),0<d.length&&(u=new md("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=S))}Vp(p,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ya(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Si(e,n),a!=null&&l.unshift(Ai(e,a,i)),a=Si(e,t),a!=null&&l.push(Ai(e,a,i))),e=e.return}return l}function nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ld(e,t,n,l,i){for(var a=t._reactName,r=[];n!==null&&n!==l;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===l)break;s.tag===5&&d!==null&&(s=d,i?(c=Si(n,a),c!=null&&r.unshift(Ai(n,c,s))):i||(c=Si(n,a),c!=null&&r.push(Ai(n,c,s)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Ag=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function kd(e){return(typeof e=="string"?e:""+e).replace(Ag,`
`).replace(Eg,"")}function oa(e,t,n){if(t=kd(t),kd(e)!==t&&n)throw Error(R(425))}function Xa(){}var ls=null,is=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rs=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(e){return Pd.resolve(null).then(e).catch(Mg)}:rs;function Mg(e){setTimeout(function(){throw e})}function bo(e,t){var n=t,l=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(l===0){e.removeChild(i),Pi(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=i}while(n);Pi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jl=Math.random().toString(36).slice(2),Bt="__reactFiber$"+jl,Ei="__reactProps$"+jl,Jt="__reactContainer$"+jl,os="__reactEvents$"+jl,Gg="__reactListeners$"+jl,Fg="__reactHandles$"+jl;function Rn(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dd(e);e!==null;){if(n=e[Bt])return n;e=Dd(e)}return t}e=n,n=e.parentNode}return null}function Hi(e){return e=e[Bt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ul(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Sr(e){return e[Ei]||null}var ss=[],pl=-1;function Ln(e){return{current:e}}function xe(e){0>pl||(e.current=ss[pl],ss[pl]=null,pl--)}function ye(e,t){pl++,ss[pl]=e.current,e.current=t}var wn={},Ke=Ln(wn),it=Ln(!1),Un=wn;function Al(e,t){var n=e.type.contextTypes;if(!n)return wn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function at(e){return e=e.childContextTypes,e!=null}function Ja(){xe(it),xe(Ke)}function Td(e,t,n){if(Ke.current!==wn)throw Error(R(168));ye(Ke,t),ye(it,n)}function Mp(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var i in l)if(!(i in t))throw Error(R(108,vy(e)||"Unknown",i));return Te({},n,l)}function Za(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Un=Ke.current,ye(Ke,e),ye(it,it.current),!0}function Nd(e,t,n){var l=e.stateNode;if(!l)throw Error(R(169));n?(e=Mp(e,t,Un),l.__reactInternalMemoizedMergedChildContext=e,xe(it),xe(Ke),ye(Ke,e)):xe(it),ye(it,n)}var Ht=null,Lr=!1,ho=!1;function Gp(e){Ht===null?Ht=[e]:Ht.push(e)}function Og(e){Lr=!0,Gp(e)}function kn(){if(!ho&&Ht!==null){ho=!0;var e=0,t=pe;try{var n=Ht;for(pe=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}Ht=null,Lr=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),op(Qs,kn),i}finally{pe=t,ho=!1}}return null}var ml=[],fl=0,er=null,tr=0,ht=[],xt=0,$n=null,qt=1,zt="";function An(e,t){ml[fl++]=tr,ml[fl++]=er,er=e,tr=t}function Fp(e,t,n){ht[xt++]=qt,ht[xt++]=zt,ht[xt++]=$n,$n=e;var l=qt;e=zt;var i=32-Vt(l)-1;l&=~(1<<i),n+=1;var a=32-Vt(t)+i;if(30<a){var r=i-i%5;a=(l&(1<<r)-1).toString(32),l>>=r,i-=r,qt=1<<32-Vt(t)+i|n<<i|l,zt=a+e}else qt=1<<a|n<<i|l,zt=e}function ic(e){e.return!==null&&(An(e,1),Fp(e,1,0))}function ac(e){for(;e===er;)er=ml[--fl],ml[fl]=null,tr=ml[--fl],ml[fl]=null;for(;e===$n;)$n=ht[--xt],ht[xt]=null,zt=ht[--xt],ht[xt]=null,qt=ht[--xt],ht[xt]=null}var mt=null,pt=null,ve=!1,At=null;function Op(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ad(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mt=e,pt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:qt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,mt=e,pt=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(ve){var t=pt;if(t){var n=t;if(!Ad(e,t)){if(cs(e))throw Error(R(418));t=yn(n.nextSibling);var l=mt;t&&Ad(e,t)?Op(l,n):(e.flags=e.flags&-4097|2,ve=!1,mt=e)}}else{if(cs(e))throw Error(R(418));e.flags=e.flags&-4097|2,ve=!1,mt=e}}}function Ed(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function sa(e){if(e!==mt)return!1;if(!ve)return Ed(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=pt)){if(cs(e))throw Bp(),Error(R(418));for(;t;)Op(e,t),t=yn(t.nextSibling)}if(Ed(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=mt?yn(e.stateNode.nextSibling):null;return!0}function Bp(){for(var e=pt;e;)e=yn(e.nextSibling)}function El(){pt=mt=null,ve=!1}function rc(e){At===null?At=[e]:At.push(e)}var Bg=tn.ReactCurrentBatchConfig;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var l=n.stateNode}if(!l)throw Error(R(147,e));var i=l,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(r){var s=i.refs;r===null?delete s[a]:s[a]=r},t._stringRef=a,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function ca(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vd(e){var t=e._init;return t(e._payload)}function Ip(e){function t(b,y){if(e){var h=b.deletions;h===null?(b.deletions=[y],b.flags|=16):h.push(y)}}function n(b,y){if(!e)return null;for(;y!==null;)t(b,y),y=y.sibling;return null}function l(b,y){for(b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function i(b,y){return b=xn(b,y),b.index=0,b.sibling=null,b}function a(b,y,h){return b.index=h,e?(h=b.alternate,h!==null?(h=h.index,h<y?(b.flags|=2,y):h):(b.flags|=2,y)):(b.flags|=1048576,y)}function r(b){return e&&b.alternate===null&&(b.flags|=2),b}function s(b,y,h,v){return y===null||y.tag!==6?(y=Lo(h,b.mode,v),y.return=b,y):(y=i(y,h),y.return=b,y)}function c(b,y,h,v){var C=h.type;return C===ol?u(b,y,h.props.children,v,h.key):y!==null&&(y.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&Vd(C)===y.type)?(v=i(y,h.props),v.ref=ti(b,y,h),v.return=b,v):(v=Fa(h.type,h.key,h.props,null,b.mode,v),v.ref=ti(b,y,h),v.return=b,v)}function d(b,y,h,v){return y===null||y.tag!==4||y.stateNode.containerInfo!==h.containerInfo||y.stateNode.implementation!==h.implementation?(y=ko(h,b.mode,v),y.return=b,y):(y=i(y,h.children||[]),y.return=b,y)}function u(b,y,h,v,C){return y===null||y.tag!==7?(y=jn(h,b.mode,v,C),y.return=b,y):(y=i(y,h),y.return=b,y)}function p(b,y,h){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Lo(""+y,b.mode,h),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ji:return h=Fa(y.type,y.key,y.props,null,b.mode,h),h.ref=ti(b,null,y),h.return=b,h;case rl:return y=ko(y,b.mode,h),y.return=b,y;case an:var v=y._init;return p(b,v(y._payload),h)}if(oi(y)||Yl(y))return y=jn(y,b.mode,h,null),y.return=b,y;ca(b,y)}return null}function f(b,y,h,v){var C=y!==null?y.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(b,y,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ji:return h.key===C?c(b,y,h,v):null;case rl:return h.key===C?d(b,y,h,v):null;case an:return C=h._init,f(b,y,C(h._payload),v)}if(oi(h)||Yl(h))return C!==null?null:u(b,y,h,v,null);ca(b,h)}return null}function m(b,y,h,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return b=b.get(h)||null,s(y,b,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ji:return b=b.get(v.key===null?h:v.key)||null,c(y,b,v,C);case rl:return b=b.get(v.key===null?h:v.key)||null,d(y,b,v,C);case an:var T=v._init;return m(b,y,h,T(v._payload),C)}if(oi(v)||Yl(v))return b=b.get(h)||null,u(y,b,v,C,null);ca(y,v)}return null}function x(b,y,h,v){for(var C=null,T=null,S=y,L=y=0,j=null;S!==null&&L<h.length;L++){S.index>L?(j=S,S=null):j=S.sibling;var N=f(b,S,h[L],v);if(N===null){S===null&&(S=j);break}e&&S&&N.alternate===null&&t(b,S),y=a(N,y,L),T===null?C=N:T.sibling=N,T=N,S=j}if(L===h.length)return n(b,S),ve&&An(b,L),C;if(S===null){for(;L<h.length;L++)S=p(b,h[L],v),S!==null&&(y=a(S,y,L),T===null?C=S:T.sibling=S,T=S);return ve&&An(b,L),C}for(S=l(b,S);L<h.length;L++)j=m(S,b,L,h[L],v),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?L:j.key),y=a(j,y,L),T===null?C=j:T.sibling=j,T=j);return e&&S.forEach(function(W){return t(b,W)}),ve&&An(b,L),C}function g(b,y,h,v){var C=Yl(h);if(typeof C!="function")throw Error(R(150));if(h=C.call(h),h==null)throw Error(R(151));for(var T=C=null,S=y,L=y=0,j=null,N=h.next();S!==null&&!N.done;L++,N=h.next()){S.index>L?(j=S,S=null):j=S.sibling;var W=f(b,S,N.value,v);if(W===null){S===null&&(S=j);break}e&&S&&W.alternate===null&&t(b,S),y=a(W,y,L),T===null?C=W:T.sibling=W,T=W,S=j}if(N.done)return n(b,S),ve&&An(b,L),C;if(S===null){for(;!N.done;L++,N=h.next())N=p(b,N.value,v),N!==null&&(y=a(N,y,L),T===null?C=N:T.sibling=N,T=N);return ve&&An(b,L),C}for(S=l(b,S);!N.done;L++,N=h.next())N=m(S,b,L,N.value,v),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?L:N.key),y=a(N,y,L),T===null?C=N:T.sibling=N,T=N);return e&&S.forEach(function(H){return t(b,H)}),ve&&An(b,L),C}function _(b,y,h,v){if(typeof h=="object"&&h!==null&&h.type===ol&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ji:e:{for(var C=h.key,T=y;T!==null;){if(T.key===C){if(C=h.type,C===ol){if(T.tag===7){n(b,T.sibling),y=i(T,h.props.children),y.return=b,b=y;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&Vd(C)===T.type){n(b,T.sibling),y=i(T,h.props),y.ref=ti(b,T,h),y.return=b,b=y;break e}n(b,T);break}else t(b,T);T=T.sibling}h.type===ol?(y=jn(h.props.children,b.mode,v,h.key),y.return=b,b=y):(v=Fa(h.type,h.key,h.props,null,b.mode,v),v.ref=ti(b,y,h),v.return=b,b=v)}return r(b);case rl:e:{for(T=h.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===h.containerInfo&&y.stateNode.implementation===h.implementation){n(b,y.sibling),y=i(y,h.children||[]),y.return=b,b=y;break e}else{n(b,y);break}else t(b,y);y=y.sibling}y=ko(h,b.mode,v),y.return=b,b=y}return r(b);case an:return T=h._init,_(b,y,T(h._payload),v)}if(oi(h))return x(b,y,h,v);if(Yl(h))return g(b,y,h,v);ca(b,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,y!==null&&y.tag===6?(n(b,y.sibling),y=i(y,h),y.return=b,b=y):(n(b,y),y=Lo(h,b.mode,v),y.return=b,b=y),r(b)):n(b,y)}return _}var Vl=Ip(!0),jp=Ip(!1),nr=Ln(null),lr=null,yl=null,oc=null;function sc(){oc=yl=lr=null}function cc(e){var t=nr.current;xe(nr),e._currentValue=t}function us(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function kl(e,t){lr=e,oc=yl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(oc!==e)if(e={context:e,memoizedValue:t,next:null},yl===null){if(lr===null)throw Error(R(308));yl=e,lr.dependencies={lanes:0,firstContext:e}}else yl=yl.next=e;return t}var Mn=null;function dc(e){Mn===null?Mn=[e]:Mn.push(e)}function Up(e,t,n,l){var i=t.interleaved;return i===null?(n.next=n,dc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Zt(e,l)}function Zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $p(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,ce&2){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,Zt(e,n)}return i=l.interleaved,i===null?(t.next=t,dc(l)):(t.next=i.next,i.next=t),l.interleaved=t,Zt(e,n)}function Aa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ys(e,n)}}function Rd(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ir(e,t,n,l){var i=e.updateQueue;rn=!1;var a=i.firstBaseUpdate,r=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,d=c.next;c.next=null,r===null?a=d:r.next=d,r=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==r&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;r=0,u=d=c=null,s=a;do{var f=s.lane,m=s.eventTime;if((l&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,g=s;switch(f=t,m=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){p=x.call(m,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,f=typeof x=="function"?x.call(m,p,f):x,f==null)break e;p=Te({},p,f);break e;case 2:rn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=m,c=p):u=u.next=m,r|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do r|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Hn|=r,e.lanes=r,e.memoizedState=p}}function Md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],i=l.callback;if(i!==null){if(l.callback=null,l=n,typeof i!="function")throw Error(R(191,i));i.call(l)}}}var qi={},jt=Ln(qi),Vi=Ln(qi),Ri=Ln(qi);function Gn(e){if(e===qi)throw Error(R(174));return e}function pc(e,t){switch(ye(Ri,t),ye(Vi,e),ye(jt,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ho(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ho(t,e)}xe(jt),ye(jt,t)}function Rl(){xe(jt),xe(Vi),xe(Ri)}function Wp(e){Gn(Ri.current);var t=Gn(jt.current),n=Ho(t,e.type);t!==n&&(ye(Vi,e),ye(jt,n))}function mc(e){Vi.current===e&&(xe(jt),xe(Vi))}var Le=Ln(0);function ar(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xo=[];function fc(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var Ea=tn.ReactCurrentDispatcher,_o=tn.ReactCurrentBatchConfig,Wn=0,Pe=null,Re=null,Ge=null,rr=!1,bi=!1,Mi=0,Ig=0;function We(){throw Error(R(321))}function yc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function gc(e,t,n,l,i,a){if(Wn=a,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ea.current=e===null||e.memoizedState===null?Wg:Hg,e=n(l,i),bi){a=0;do{if(bi=!1,Mi=0,25<=a)throw Error(R(301));a+=1,Ge=Re=null,t.updateQueue=null,Ea.current=qg,e=n(l,i)}while(bi)}if(Ea.current=or,t=Re!==null&&Re.next!==null,Wn=0,Ge=Re=Pe=null,rr=!1,t)throw Error(R(300));return e}function bc(){var e=Mi!==0;return Mi=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Pe.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function St(){if(Re===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ge===null?Pe.memoizedState:Ge.next;if(t!==null)Ge=t,Re=e;else{if(e===null)throw Error(R(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ge===null?Pe.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Gi(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=St(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var l=Re,i=l.baseQueue,a=n.pending;if(a!==null){if(i!==null){var r=i.next;i.next=a.next,a.next=r}l.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,l=l.baseState;var s=r=null,c=null,d=a;do{var u=d.lane;if((Wn&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=p,r=l):c=c.next=p,Pe.lanes|=u,Hn|=u}d=d.next}while(d!==null&&d!==a);c===null?r=l:c.next=s,Mt(l,t.memoizedState)||(lt=!0),t.memoizedState=l,t.baseState=r,t.baseQueue=c,n.lastRenderedState=l}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Pe.lanes|=a,Hn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wo(e){var t=St(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var r=i=i.next;do a=e(a,r.action),r=r.next;while(r!==i);Mt(a,t.memoizedState)||(lt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,l]}function Hp(){}function qp(e,t){var n=Pe,l=St(),i=t(),a=!Mt(l.memoizedState,i);if(a&&(l.memoizedState=i,lt=!0),l=l.queue,hc(Qp.bind(null,n,l,e),[e]),l.getSnapshot!==t||a||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Fi(9,Kp.bind(null,n,l,i,t),void 0,null),Fe===null)throw Error(R(349));Wn&30||zp(n,t,i)}return i}function zp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kp(e,t,n,l){t.value=n,t.getSnapshot=l,Yp(t)&&Xp(e)}function Qp(e,t,n){return n(function(){Yp(t)&&Xp(e)})}function Yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function Xp(e){var t=Zt(e,1);t!==null&&Rt(t,e,1,-1)}function Gd(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=$g.bind(null,Pe,e),[t.memoizedState,e]}function Fi(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function Jp(){return St().memoizedState}function Va(e,t,n,l){var i=Ot();Pe.flags|=e,i.memoizedState=Fi(1|t,n,void 0,l===void 0?null:l)}function kr(e,t,n,l){var i=St();l=l===void 0?null:l;var a=void 0;if(Re!==null){var r=Re.memoizedState;if(a=r.destroy,l!==null&&yc(l,r.deps)){i.memoizedState=Fi(t,n,a,l);return}}Pe.flags|=e,i.memoizedState=Fi(1|t,n,a,l)}function Fd(e,t){return Va(8390656,8,e,t)}function hc(e,t){return kr(2048,8,e,t)}function Zp(e,t){return kr(4,2,e,t)}function em(e,t){return kr(4,4,e,t)}function tm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nm(e,t,n){return n=n!=null?n.concat([e]):null,kr(4,4,tm.bind(null,t,e),n)}function xc(){}function lm(e,t){var n=St();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&yc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function im(e,t){var n=St();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&yc(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function am(e,t,n){return Wn&21?(Mt(n,t)||(n=dp(),Pe.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function jg(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var l=_o.transition;_o.transition={};try{e(!1),t()}finally{pe=n,_o.transition=l}}function rm(){return St().memoizedState}function Ug(e,t,n){var l=hn(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},om(e))sm(t,n);else if(n=Up(e,t,n,l),n!==null){var i=Xe();Rt(n,e,l,i),cm(n,t,l)}}function $g(e,t,n){var l=hn(e),i={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(om(e))sm(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,s=a(r,n);if(i.hasEagerState=!0,i.eagerState=s,Mt(s,r)){var c=t.interleaved;c===null?(i.next=i,dc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Up(e,t,i,l),n!==null&&(i=Xe(),Rt(n,e,l,i),cm(n,t,l))}}function om(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function sm(e,t){bi=rr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cm(e,t,n){if(n&4194240){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ys(e,n)}}var or={readContext:Ct,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Wg={readContext:Ct,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Fd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Va(4194308,4,tm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Va(4194308,4,e,t)},useInsertionEffect:function(e,t){return Va(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=Ot();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Ug.bind(null,Pe,e),[l.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:Gd,useDebugValue:xc,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=Gd(!1),t=e[0];return e=jg.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=Pe,i=Ot();if(ve){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Fe===null)throw Error(R(349));Wn&30||zp(l,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Fd(Qp.bind(null,l,a,e),[e]),l.flags|=2048,Fi(9,Kp.bind(null,l,a,n,t),void 0,null),n},useId:function(){var e=Ot(),t=Fe.identifierPrefix;if(ve){var n=zt,l=qt;n=(l&~(1<<32-Vt(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ig++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hg={readContext:Ct,useCallback:lm,useContext:Ct,useEffect:hc,useImperativeHandle:nm,useInsertionEffect:Zp,useLayoutEffect:em,useMemo:im,useReducer:vo,useRef:Jp,useState:function(){return vo(Gi)},useDebugValue:xc,useDeferredValue:function(e){var t=St();return am(t,Re.memoizedState,e)},useTransition:function(){var e=vo(Gi)[0],t=St().memoizedState;return[e,t]},useMutableSource:Hp,useSyncExternalStore:qp,useId:rm,unstable_isNewReconciler:!1},qg={readContext:Ct,useCallback:lm,useContext:Ct,useEffect:hc,useImperativeHandle:nm,useInsertionEffect:Zp,useLayoutEffect:em,useMemo:im,useReducer:wo,useRef:Jp,useState:function(){return wo(Gi)},useDebugValue:xc,useDeferredValue:function(e){var t=St();return Re===null?t.memoizedState=e:am(t,Re.memoizedState,e)},useTransition:function(){var e=wo(Gi)[0],t=St().memoizedState;return[e,t]},useMutableSource:Hp,useSyncExternalStore:qp,useId:rm,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ps(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pr={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Xe(),i=hn(e),a=Qt(l,i);a.payload=t,n!=null&&(a.callback=n),t=gn(e,a,i),t!==null&&(Rt(t,e,i,l),Aa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Xe(),i=hn(e),a=Qt(l,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=gn(e,a,i),t!==null&&(Rt(t,e,i,l),Aa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),l=hn(e),i=Qt(n,l);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,l),t!==null&&(Rt(t,e,l,n),Aa(t,e,l))}};function Od(e,t,n,l,i,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,l)||!Ti(i,a):!0}function dm(e,t,n){var l=!1,i=wn,a=t.contextType;return typeof a=="object"&&a!==null?a=Ct(a):(i=at(t)?Un:Ke.current,l=t.contextTypes,a=(l=l!=null)?Al(e,i):wn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pr,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Bd(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Pr.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,l){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},uc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ct(a):(a=at(t)?Un:Ke.current,i.context=Al(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ps(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pr.enqueueReplaceState(i,i.state,null),ir(e,n,i,l),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ml(e,t){try{var n="",l=t;do n+=_y(l),l=l.return;while(l);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Co(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zg=typeof WeakMap=="function"?WeakMap:Map;function um(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){cr||(cr=!0,Ss=l),fs(e,t)},n}function pm(e,t,n){n=Qt(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=t.value;n.payload=function(){return l(i)},n.callback=function(){fs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){fs(e,t),typeof l!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function Id(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new zg;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(i.add(n),e=ob.bind(null,e,t,n),t.then(e,e))}function jd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ud(e,t,n,l,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var Kg=tn.ReactCurrentOwner,lt=!1;function Qe(e,t,n,l){t.child=e===null?jp(t,null,n,l):Vl(t,e.child,n,l)}function $d(e,t,n,l,i){n=n.render;var a=t.ref;return kl(t,i),l=gc(e,t,n,l,a,i),n=bc(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(ve&&n&&ic(t),t.flags|=1,Qe(e,t,l,i),t.child)}function Wd(e,t,n,l,i){if(e===null){var a=n.type;return typeof a=="function"&&!Pc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,mm(e,t,a,l,i)):(e=Fa(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(r,l)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=xn(a,l),e.ref=t.ref,e.return=t,t.child=e}function mm(e,t,n,l,i){if(e!==null){var a=e.memoizedProps;if(Ti(a,l)&&e.ref===t.ref)if(lt=!1,t.pendingProps=l=a,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,en(e,t,i)}return ys(e,t,n,l,i)}function fm(e,t,n){var l=t.pendingProps,i=l.children,a=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(bl,dt),dt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(bl,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=a!==null?a.baseLanes:n,ye(bl,dt),dt|=l}else a!==null?(l=a.baseLanes|n,t.memoizedState=null):l=n,ye(bl,dt),dt|=l;return Qe(e,t,i,n),t.child}function ym(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,n,l,i){var a=at(n)?Un:Ke.current;return a=Al(t,a),kl(t,i),n=gc(e,t,n,l,a,i),l=bc(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(ve&&l&&ic(t),t.flags|=1,Qe(e,t,n,i),t.child)}function Hd(e,t,n,l,i){if(at(n)){var a=!0;Za(t)}else a=!1;if(kl(t,i),t.stateNode===null)Ra(e,t),dm(t,n,l),ms(t,n,l,i),l=!0;else if(e===null){var r=t.stateNode,s=t.memoizedProps;r.props=s;var c=r.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ct(d):(d=at(n)?Un:Ke.current,d=Al(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function";p||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==l||c!==d)&&Bd(t,r,l,d),rn=!1;var f=t.memoizedState;r.state=f,ir(t,l,r,i),c=t.memoizedState,s!==l||f!==c||it.current||rn?(typeof u=="function"&&(ps(t,n,u,l),c=t.memoizedState),(s=rn||Od(t,n,s,l,f,c,d))?(p||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=c),r.props=l,r.state=c,r.context=d,l=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,$p(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Tt(t.type,s),r.props=d,p=t.pendingProps,f=r.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ct(c):(c=at(n)?Un:Ke.current,c=Al(t,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==p||f!==c)&&Bd(t,r,l,c),rn=!1,f=t.memoizedState,r.state=f,ir(t,l,r,i);var x=t.memoizedState;s!==p||f!==x||it.current||rn?(typeof m=="function"&&(ps(t,n,m,l),x=t.memoizedState),(d=rn||Od(t,n,d,l,f,x,c)||!1)?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,x,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,x,c)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=x),r.props=l,r.state=x,r.context=c,l=d):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return gs(e,t,n,l,a,i)}function gs(e,t,n,l,i,a){ym(e,t);var r=(t.flags&128)!==0;if(!l&&!r)return i&&Nd(t,n,!1),en(e,t,a);l=t.stateNode,Kg.current=t;var s=r&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&r?(t.child=Vl(t,e.child,null,a),t.child=Vl(t,null,s,a)):Qe(e,t,s,a),t.memoizedState=l.state,i&&Nd(t,n,!0),t.child}function gm(e){var t=e.stateNode;t.pendingContext?Td(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Td(e,t.context,!1),pc(e,t.containerInfo)}function qd(e,t,n,l,i){return El(),rc(i),t.flags|=256,Qe(e,t,n,l),t.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function bm(e,t,n){var l=t.pendingProps,i=Le.current,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ye(Le,i&1),e===null)return ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=l.children,e=l.fallback,a?(l=t.mode,a=t.child,r={mode:"hidden",children:r},!(l&1)&&a!==null?(a.childLanes=0,a.pendingProps=r):a=Nr(r,l,0,null),e=jn(e,l,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=hs(n),t.memoizedState=bs,e):_c(t,r));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qg(e,t,r,l,s,i,n);if(a){a=l.fallback,r=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:l.children};return!(r&1)&&t.child!==i?(l=t.child,l.childLanes=0,l.pendingProps=c,t.deletions=null):(l=xn(i,c),l.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=xn(s,a):(a=jn(a,r,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,r=e.child.memoizedState,r=r===null?hs(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},a.memoizedState=r,a.childLanes=e.childLanes&~n,t.memoizedState=bs,l}return a=e.child,e=a.sibling,l=xn(a,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function _c(e,t){return t=Nr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function da(e,t,n,l){return l!==null&&rc(l),Vl(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qg(e,t,n,l,i,a,r){if(n)return t.flags&256?(t.flags&=-257,l=Co(Error(R(422))),da(e,t,r,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=l.fallback,i=t.mode,l=Nr({mode:"visible",children:l.children},i,0,null),a=jn(a,i,r,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,t.mode&1&&Vl(t,e.child,null,r),t.child.memoizedState=hs(r),t.memoizedState=bs,a);if(!(t.mode&1))return da(e,t,r,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var s=l.dgst;return l=s,a=Error(R(419)),l=Co(a,l,void 0),da(e,t,r,l)}if(s=(r&e.childLanes)!==0,lt||s){if(l=Fe,l!==null){switch(r&-r){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|r)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Zt(e,i),Rt(l,e,i,-1))}return kc(),l=Co(Error(R(421))),da(e,t,r,l)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sb.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,pt=yn(i.nextSibling),mt=t,ve=!0,At=null,e!==null&&(ht[xt++]=qt,ht[xt++]=zt,ht[xt++]=$n,qt=e.id,zt=e.overflow,$n=t),t=_c(t,l.children),t.flags|=4096,t)}function zd(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),us(e.return,t,n)}function So(e,t,n,l,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=l,a.tail=n,a.tailMode=i)}function hm(e,t,n){var l=t.pendingProps,i=l.revealOrder,a=l.tail;if(Qe(e,t,l.children,n),l=Le.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zd(e,n,t);else if(e.tag===19)zd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(ye(Le,l),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ar(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),So(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ar(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}So(t,!0,n,null,a);break;case"together":So(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ra(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yg(e,t,n){switch(t.tag){case 3:gm(t),El();break;case 5:Wp(t);break;case 1:at(t.type)&&Za(t);break;case 4:pc(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,i=t.memoizedProps.value;ye(nr,l._currentValue),l._currentValue=i;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(ye(Le,Le.current&1),t.flags|=128,null):n&t.child.childLanes?bm(e,t,n):(ye(Le,Le.current&1),e=en(e,t,n),e!==null?e.sibling:null);ye(Le,Le.current&1);break;case 19:if(l=(n&t.childLanes)!==0,e.flags&128){if(l)return hm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Le,Le.current),l)break;return null;case 22:case 23:return t.lanes=0,fm(e,t,n)}return en(e,t,n)}var xm,xs,_m,vm;xm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xs=function(){};_m=function(e,t,n,l){var i=e.memoizedProps;if(i!==l){e=t.stateNode,Gn(jt.current);var a=null;switch(n){case"input":i=jo(e,i),l=jo(e,l),a=[];break;case"select":i=Te({},i,{value:void 0}),l=Te({},l,{value:void 0}),a=[];break;case"textarea":i=Wo(e,i),l=Wo(e,l),a=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Xa)}qo(n,l);var r;n=null;for(d in i)if(!l.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(r in s)s.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(wi.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in l){var c=l[d];if(s=i!=null?i[d]:void 0,l.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(r in s)!s.hasOwnProperty(r)||c&&c.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in c)c.hasOwnProperty(r)&&s[r]!==c[r]&&(n||(n={}),n[r]=c[r])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(wi.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&he("scroll",e),a||s===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};vm=function(e,t,n,l){n!==l&&(t.flags|=4)};function ni(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Xg(e,t,n){var l=t.pendingProps;switch(ac(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return at(t.type)&&Ja(),He(t),null;case 3:return l=t.stateNode,Rl(),xe(it),xe(Ke),fc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(sa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,At!==null&&(Ps(At),At=null))),xs(e,t),He(t),null;case 5:mc(t);var i=Gn(Ri.current);if(n=t.type,e!==null&&t.stateNode!=null)_m(e,t,n,l,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(R(166));return He(t),null}if(e=Gn(jt.current),sa(t)){l=t.stateNode,n=t.type;var a=t.memoizedProps;switch(l[Bt]=t,l[Ei]=a,e=(t.mode&1)!==0,n){case"dialog":he("cancel",l),he("close",l);break;case"iframe":case"object":case"embed":he("load",l);break;case"video":case"audio":for(i=0;i<ci.length;i++)he(ci[i],l);break;case"source":he("error",l);break;case"img":case"image":case"link":he("error",l),he("load",l);break;case"details":he("toggle",l);break;case"input":nd(l,a),he("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!a.multiple},he("invalid",l);break;case"textarea":id(l,a),he("invalid",l)}qo(n,a),i=null;for(var r in a)if(a.hasOwnProperty(r)){var s=a[r];r==="children"?typeof s=="string"?l.textContent!==s&&(a.suppressHydrationWarning!==!0&&oa(l.textContent,s,e),i=["children",s]):typeof s=="number"&&l.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&oa(l.textContent,s,e),i=["children",""+s]):wi.hasOwnProperty(r)&&s!=null&&r==="onScroll"&&he("scroll",l)}switch(n){case"input":Zi(l),ld(l,a,!0);break;case"textarea":Zi(l),ad(l);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(l.onclick=Xa)}l=i,t.updateQueue=l,l!==null&&(t.flags|=4)}else{r=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=r.createElement(n,{is:l.is}):(e=r.createElement(n),n==="select"&&(r=e,l.multiple?r.multiple=!0:l.size&&(r.size=l.size))):e=r.createElementNS(e,n),e[Bt]=t,e[Ei]=l,xm(e,t,!1,!1),t.stateNode=e;e:{switch(r=zo(n,l),n){case"dialog":he("cancel",e),he("close",e),i=l;break;case"iframe":case"object":case"embed":he("load",e),i=l;break;case"video":case"audio":for(i=0;i<ci.length;i++)he(ci[i],e);i=l;break;case"source":he("error",e),i=l;break;case"img":case"image":case"link":he("error",e),he("load",e),i=l;break;case"details":he("toggle",e),i=l;break;case"input":nd(e,l),i=jo(e,l),he("invalid",e);break;case"option":i=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},i=Te({},l,{value:void 0}),he("invalid",e);break;case"textarea":id(e,l),i=Wo(e,l),he("invalid",e);break;default:i=l}qo(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="style"?Ju(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Yu(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ci(e,c):typeof c=="number"&&Ci(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(wi.hasOwnProperty(a)?c!=null&&a==="onScroll"&&he("scroll",e):c!=null&&Ws(e,a,c,r))}switch(n){case"input":Zi(e),ld(e,l,!1);break;case"textarea":Zi(e),ad(e);break;case"option":l.value!=null&&e.setAttribute("value",""+vn(l.value));break;case"select":e.multiple=!!l.multiple,a=l.value,a!=null?wl(e,!!l.multiple,a,!1):l.defaultValue!=null&&wl(e,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)vm(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(R(166));if(n=Gn(Ri.current),Gn(jt.current),sa(t)){if(l=t.stateNode,n=t.memoizedProps,l[Bt]=t,(a=l.nodeValue!==n)&&(e=mt,e!==null))switch(e.tag){case 3:oa(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oa(l.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[Bt]=t,t.stateNode=l}return He(t),null;case 13:if(xe(Le),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&pt!==null&&t.mode&1&&!(t.flags&128))Bp(),El(),t.flags|=98560,a=!1;else if(a=sa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(R(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[Bt]=t}else El(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),a=!1}else At!==null&&(Ps(At),At=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||Le.current&1?Me===0&&(Me=3):kc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Rl(),xs(e,t),e===null&&Ni(t.stateNode.containerInfo),He(t),null;case 10:return cc(t.type._context),He(t),null;case 17:return at(t.type)&&Ja(),He(t),null;case 19:if(xe(Le),a=t.memoizedState,a===null)return He(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)ni(a,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=ar(e),r!==null){for(t.flags|=128,ni(a,!1),l=r.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)a=n,e=l,a.flags&=14680066,r=a.alternate,r===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,a.type=r.type,e=r.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(Le,Le.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ee()>Gl&&(t.flags|=128,l=!0,ni(a,!1),t.lanes=4194304)}else{if(!l)if(e=ar(r),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!ve)return He(t),null}else 2*Ee()-a.renderingStartTime>Gl&&n!==1073741824&&(t.flags|=128,l=!0,ni(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(n=a.last,n!==null?n.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ee(),t.sibling=null,n=Le.current,ye(Le,l?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Lc(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?dt&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Jg(e,t){switch(ac(t),t.tag){case 1:return at(t.type)&&Ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rl(),xe(it),xe(Ke),fc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mc(t),null;case 13:if(xe(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));El()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Le),null;case 4:return Rl(),null;case 10:return cc(t.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var ua=!1,qe=!1,Zg=typeof WeakSet=="function"?WeakSet:Set,I=null;function gl(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){Ne(e,t,l)}else n.current=null}function _s(e,t,n){try{n()}catch(l){Ne(e,t,l)}}var Kd=!1;function eb(e,t){if(ls=Ka,e=kp(),lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,s=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(s=r+i),p!==a||l!==0&&p.nodeType!==3||(c=r+l),p.nodeType===3&&(r+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++d===i&&(s=r),f===a&&++u===l&&(c=r),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},Ka=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,_=x.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:Tt(t.type,g),_);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(v){Ne(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return x=Kd,Kd=!1,x}function hi(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&_s(t,n,a)}i=i.next}while(i!==l)}}function Dr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wm(e){var t=e.alternate;t!==null&&(e.alternate=null,wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[Ei],delete t[os],delete t[Gg],delete t[Fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cm(e){return e.tag===5||e.tag===3||e.tag===4}function Qd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xa));else if(l!==4&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function Cs(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}var Ie=null,Nt=!1;function nn(e,t,n){for(n=n.child;n!==null;)Sm(e,t,n),n=n.sibling}function Sm(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(_r,n)}catch{}switch(n.tag){case 5:qe||gl(n,t);case 6:var l=Ie,i=Nt;Ie=null,nn(e,t,n),Ie=l,Nt=i,Ie!==null&&(Nt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(Nt?(e=Ie,n=n.stateNode,e.nodeType===8?bo(e.parentNode,n):e.nodeType===1&&bo(e,n),Pi(e)):bo(Ie,n.stateNode));break;case 4:l=Ie,i=Nt,Ie=n.stateNode.containerInfo,Nt=!0,nn(e,t,n),Ie=l,Nt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var a=i,r=a.destroy;a=a.tag,r!==void 0&&(a&2||a&4)&&_s(n,t,r),i=i.next}while(i!==l)}nn(e,t,n);break;case 1:if(!qe&&(gl(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(s){Ne(n,t,s)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(qe=(l=qe)||n.memoizedState!==null,nn(e,t,n),qe=l):nn(e,t,n);break;default:nn(e,t,n)}}function Yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zg),t.forEach(function(l){var i=cb.bind(null,e,l);n.has(l)||(n.add(l),l.then(i,i))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l];try{var a=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 5:Ie=s.stateNode,Nt=!1;break e;case 3:Ie=s.stateNode.containerInfo,Nt=!0;break e;case 4:Ie=s.stateNode.containerInfo,Nt=!0;break e}s=s.return}if(Ie===null)throw Error(R(160));Sm(a,r,i),Ie=null,Nt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Ne(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lm(t,e),t=t.sibling}function Lm(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Ft(e),l&4){try{hi(3,e,e.return),Dr(3,e)}catch(g){Ne(e,e.return,g)}try{hi(5,e,e.return)}catch(g){Ne(e,e.return,g)}}break;case 1:Pt(t,e),Ft(e),l&512&&n!==null&&gl(n,n.return);break;case 5:if(Pt(t,e),Ft(e),l&512&&n!==null&&gl(n,n.return),e.flags&32){var i=e.stateNode;try{Ci(i,"")}catch(g){Ne(e,e.return,g)}}if(l&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,r=n!==null?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&zu(i,a),zo(s,r);var d=zo(s,a);for(r=0;r<c.length;r+=2){var u=c[r],p=c[r+1];u==="style"?Ju(i,p):u==="dangerouslySetInnerHTML"?Yu(i,p):u==="children"?Ci(i,p):Ws(i,u,p,d)}switch(s){case"input":Uo(i,a);break;case"textarea":Ku(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?wl(i,!!a.multiple,m,!1):f!==!!a.multiple&&(a.defaultValue!=null?wl(i,!!a.multiple,a.defaultValue,!0):wl(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ei]=a}catch(g){Ne(e,e.return,g)}}break;case 6:if(Pt(t,e),Ft(e),l&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Ne(e,e.return,g)}}break;case 3:if(Pt(t,e),Ft(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(g){Ne(e,e.return,g)}break;case 4:Pt(t,e),Ft(e);break;case 13:Pt(t,e),Ft(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Cc=Ee())),l&4&&Yd(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(d=qe)||u,Pt(t,e),qe=d):Pt(t,e),Ft(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(I=e,u=e.child;u!==null;){for(p=I=u;I!==null;){switch(f=I,m=f.child,f.tag){case 0:case 11:case 14:case 15:hi(4,f,f.return);break;case 1:gl(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){l=f,n=f.return;try{t=l,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(g){Ne(l,n,g)}}break;case 5:gl(f,f.return);break;case 22:if(f.memoizedState!==null){Jd(p);continue}}m!==null?(m.return=f,I=m):Jd(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{i=p.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,c=p.memoizedProps.style,r=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Xu("display",r))}catch(g){Ne(e,e.return,g)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(g){Ne(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pt(t,e),Ft(e),l&4&&Yd(e);break;case 21:break;default:Pt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cm(n)){var l=n;break e}n=n.return}throw Error(R(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(Ci(i,""),l.flags&=-33);var a=Qd(e);Cs(e,a,i);break;case 3:case 4:var r=l.stateNode.containerInfo,s=Qd(e);ws(e,s,r);break;default:throw Error(R(161))}}catch(c){Ne(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tb(e,t,n){I=e,km(e)}function km(e,t,n){for(var l=(e.mode&1)!==0;I!==null;){var i=I,a=i.child;if(i.tag===22&&l){var r=i.memoizedState!==null||ua;if(!r){var s=i.alternate,c=s!==null&&s.memoizedState!==null||qe;s=ua;var d=qe;if(ua=r,(qe=c)&&!d)for(I=i;I!==null;)r=I,c=r.child,r.tag===22&&r.memoizedState!==null?Zd(i):c!==null?(c.return=r,I=c):Zd(i);for(;a!==null;)I=a,km(a),a=a.sibling;I=i,ua=s,qe=d}Xd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,I=a):Xd(e)}}function Xd(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||Dr(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!qe)if(n===null)l.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);l.componentDidUpdate(i,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Md(t,a,l);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Md(t,r,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Pi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}qe||t.flags&512&&vs(t)}catch(f){Ne(t,t.return,f)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Jd(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Zd(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Dr(4,t)}catch(c){Ne(t,n,c)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var i=t.return;try{l.componentDidMount()}catch(c){Ne(t,i,c)}}var a=t.return;try{vs(t)}catch(c){Ne(t,a,c)}break;case 5:var r=t.return;try{vs(t)}catch(c){Ne(t,r,c)}}}catch(c){Ne(t,t.return,c)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var nb=Math.ceil,sr=tn.ReactCurrentDispatcher,vc=tn.ReactCurrentOwner,vt=tn.ReactCurrentBatchConfig,ce=0,Fe=null,Ve=null,je=0,dt=0,bl=Ln(0),Me=0,Oi=null,Hn=0,Tr=0,wc=0,xi=null,tt=null,Cc=0,Gl=1/0,Wt=null,cr=!1,Ss=null,bn=null,pa=!1,un=null,dr=0,_i=0,Ls=null,Ma=-1,Ga=0;function Xe(){return ce&6?Ee():Ma!==-1?Ma:Ma=Ee()}function hn(e){return e.mode&1?ce&2&&je!==0?je&-je:Bg.transition!==null?(Ga===0&&(Ga=dp()),Ga):(e=pe,e!==0||(e=window.event,e=e===void 0?16:bp(e.type)),e):1}function Rt(e,t,n,l){if(50<_i)throw _i=0,Ls=null,Error(R(185));$i(e,n,l),(!(ce&2)||e!==Fe)&&(e===Fe&&(!(ce&2)&&(Tr|=n),Me===4&&cn(e,je)),rt(e,l),n===1&&ce===0&&!(t.mode&1)&&(Gl=Ee()+500,Lr&&kn()))}function rt(e,t){var n=e.callbackNode;By(e,t);var l=za(e,e===Fe?je:0);if(l===0)n!==null&&sd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&sd(n),t===1)e.tag===0?Og(eu.bind(null,e)):Gp(eu.bind(null,e)),Rg(function(){!(ce&6)&&kn()}),n=null;else{switch(up(l)){case 1:n=Qs;break;case 4:n=sp;break;case 16:n=qa;break;case 536870912:n=cp;break;default:n=qa}n=Rm(n,Pm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pm(e,t){if(Ma=-1,Ga=0,ce&6)throw Error(R(327));var n=e.callbackNode;if(Pl()&&e.callbackNode!==n)return null;var l=za(e,e===Fe?je:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=ur(e,l);else{t=l;var i=ce;ce|=2;var a=Tm();(Fe!==e||je!==t)&&(Wt=null,Gl=Ee()+500,In(e,t));do try{ab();break}catch(s){Dm(e,s)}while(!0);sc(),sr.current=a,ce=i,Ve!==null?t=0:(Fe=null,je=0,t=Me)}if(t!==0){if(t===2&&(i=Jo(e),i!==0&&(l=i,t=ks(e,i))),t===1)throw n=Oi,In(e,0),cn(e,l),rt(e,Ee()),n;if(t===6)cn(e,l);else{if(i=e.current.alternate,!(l&30)&&!lb(i)&&(t=ur(e,l),t===2&&(a=Jo(e),a!==0&&(l=a,t=ks(e,a))),t===1))throw n=Oi,In(e,0),cn(e,l),rt(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=l,t){case 0:case 1:throw Error(R(345));case 2:En(e,tt,Wt);break;case 3:if(cn(e,l),(l&130023424)===l&&(t=Cc+500-Ee(),10<t)){if(za(e,0)!==0)break;if(i=e.suspendedLanes,(i&l)!==l){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(En.bind(null,e,tt,Wt),t);break}En(e,tt,Wt);break;case 4:if(cn(e,l),(l&4194240)===l)break;for(t=e.eventTimes,i=-1;0<l;){var r=31-Vt(l);a=1<<r,r=t[r],r>i&&(i=r),l&=~a}if(l=i,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*nb(l/1960))-l,10<l){e.timeoutHandle=rs(En.bind(null,e,tt,Wt),l);break}En(e,tt,Wt);break;case 5:En(e,tt,Wt);break;default:throw Error(R(329))}}}return rt(e,Ee()),e.callbackNode===n?Pm.bind(null,e):null}function ks(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=ur(e,t),e!==2&&(t=tt,tt=n,t!==null&&Ps(t)),e}function Ps(e){tt===null?tt=e:tt.push.apply(tt,e)}function lb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var i=n[l],a=i.getSnapshot;i=i.value;try{if(!Mt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~wc,t&=~Tr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),l=1<<n;e[n]=-1,t&=~l}}function eu(e){if(ce&6)throw Error(R(327));Pl();var t=za(e,0);if(!(t&1))return rt(e,Ee()),null;var n=ur(e,t);if(e.tag!==0&&n===2){var l=Jo(e);l!==0&&(t=l,n=ks(e,l))}if(n===1)throw n=Oi,In(e,0),cn(e,t),rt(e,Ee()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,tt,Wt),rt(e,Ee()),null}function Sc(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Gl=Ee()+500,Lr&&kn())}}function qn(e){un!==null&&un.tag===0&&!(ce&6)&&Pl();var t=ce;ce|=1;var n=vt.transition,l=pe;try{if(vt.transition=null,pe=1,e)return e()}finally{pe=l,vt.transition=n,ce=t,!(ce&6)&&kn()}}function Lc(){dt=bl.current,xe(bl)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vg(n)),Ve!==null)for(n=Ve.return;n!==null;){var l=n;switch(ac(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ja();break;case 3:Rl(),xe(it),xe(Ke),fc();break;case 5:mc(l);break;case 4:Rl();break;case 13:xe(Le);break;case 19:xe(Le);break;case 10:cc(l.type._context);break;case 22:case 23:Lc()}n=n.return}if(Fe=e,Ve=e=xn(e.current,null),je=dt=t,Me=0,Oi=null,wc=Tr=Hn=0,tt=xi=null,Mn!==null){for(t=0;t<Mn.length;t++)if(n=Mn[t],l=n.interleaved,l!==null){n.interleaved=null;var i=l.next,a=n.pending;if(a!==null){var r=a.next;a.next=i,l.next=r}n.pending=l}Mn=null}return e}function Dm(e,t){do{var n=Ve;try{if(sc(),Ea.current=or,rr){for(var l=Pe.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}rr=!1}if(Wn=0,Ge=Re=Pe=null,bi=!1,Mi=0,vc.current=null,n===null||n.return===null){Me=1,Oi=t,Ve=null;break}e:{var a=e,r=n.return,s=n,c=t;if(t=je,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=s,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=jd(r);if(m!==null){m.flags&=-257,Ud(m,r,s,a,t),m.mode&1&&Id(a,d,t),t=m,c=d;var x=t.updateQueue;if(x===null){var g=new Set;g.add(c),t.updateQueue=g}else x.add(c);break e}else{if(!(t&1)){Id(a,d,t),kc();break e}c=Error(R(426))}}else if(ve&&s.mode&1){var _=jd(r);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ud(_,r,s,a,t),rc(Ml(c,s));break e}}a=c=Ml(c,s),Me!==4&&(Me=2),xi===null?xi=[a]:xi.push(a),a=r;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var b=um(a,c,t);Rd(a,b);break e;case 1:s=c;var y=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof y.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(bn===null||!bn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var v=pm(a,s,t);Rd(a,v);break e}}a=a.return}while(a!==null)}Am(n)}catch(C){t=C,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Tm(){var e=sr.current;return sr.current=or,e===null?or:e}function kc(){(Me===0||Me===3||Me===2)&&(Me=4),Fe===null||!(Hn&268435455)&&!(Tr&268435455)||cn(Fe,je)}function ur(e,t){var n=ce;ce|=2;var l=Tm();(Fe!==e||je!==t)&&(Wt=null,In(e,t));do try{ib();break}catch(i){Dm(e,i)}while(!0);if(sc(),ce=n,sr.current=l,Ve!==null)throw Error(R(261));return Fe=null,je=0,Me}function ib(){for(;Ve!==null;)Nm(Ve)}function ab(){for(;Ve!==null&&!Ny();)Nm(Ve)}function Nm(e){var t=Vm(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Am(e):Ve=t,vc.current=null}function Am(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jg(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Ve=null;return}}else if(n=Xg(n,t,dt),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Me===0&&(Me=5)}function En(e,t,n){var l=pe,i=vt.transition;try{vt.transition=null,pe=1,rb(e,t,n,l)}finally{vt.transition=i,pe=l}return null}function rb(e,t,n,l){do Pl();while(un!==null);if(ce&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Iy(e,a),e===Fe&&(Ve=Fe=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,Rm(qa,function(){return Pl(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=vt.transition,vt.transition=null;var r=pe;pe=1;var s=ce;ce|=4,vc.current=null,eb(e,n),Lm(n,e),kg(is),Ka=!!ls,is=ls=null,e.current=n,tb(n),Ay(),ce=s,pe=r,vt.transition=a}else e.current=n;if(pa&&(pa=!1,un=e,dr=i),a=e.pendingLanes,a===0&&(bn=null),Ry(n.stateNode),rt(e,Ee()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],l(i.value,{componentStack:i.stack,digest:i.digest});if(cr)throw cr=!1,e=Ss,Ss=null,e;return dr&1&&e.tag!==0&&Pl(),a=e.pendingLanes,a&1?e===Ls?_i++:(_i=0,Ls=e):_i=0,kn(),null}function Pl(){if(un!==null){var e=up(dr),t=vt.transition,n=pe;try{if(vt.transition=null,pe=16>e?16:e,un===null)var l=!1;else{if(e=un,un=null,dr=0,ce&6)throw Error(R(331));var i=ce;for(ce|=4,I=e.current;I!==null;){var a=I,r=a.child;if(I.flags&16){var s=a.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(I=d;I!==null;){var u=I;switch(u.tag){case 0:case 11:case 15:hi(8,u,a)}var p=u.child;if(p!==null)p.return=u,I=p;else for(;I!==null;){u=I;var f=u.sibling,m=u.return;if(wm(u),u===d){I=null;break}if(f!==null){f.return=m,I=f;break}I=m}}}var x=a.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}I=a}}if(a.subtreeFlags&2064&&r!==null)r.return=a,I=r;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:hi(9,a,a.return)}var b=a.sibling;if(b!==null){b.return=a.return,I=b;break e}I=a.return}}var y=e.current;for(I=y;I!==null;){r=I;var h=r.child;if(r.subtreeFlags&2064&&h!==null)h.return=r,I=h;else e:for(r=y;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Dr(9,s)}}catch(C){Ne(s,s.return,C)}if(s===r){I=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,I=v;break e}I=s.return}}if(ce=i,kn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(_r,e)}catch{}l=!0}return l}finally{pe=n,vt.transition=t}}return!1}function tu(e,t,n){t=Ml(n,t),t=um(e,t,1),e=gn(e,t,1),t=Xe(),e!==null&&($i(e,1,t),rt(e,t))}function Ne(e,t,n){if(e.tag===3)tu(e,e,n);else for(;t!==null;){if(t.tag===3){tu(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(bn===null||!bn.has(l))){e=Ml(n,e),e=pm(t,e,1),t=gn(t,e,1),e=Xe(),t!==null&&($i(t,1,e),rt(t,e));break}}t=t.return}}function ob(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(je&n)===n&&(Me===4||Me===3&&(je&130023424)===je&&500>Ee()-Cc?In(e,0):wc|=n),rt(e,t)}function Em(e,t){t===0&&(e.mode&1?(t=na,na<<=1,!(na&130023424)&&(na=4194304)):t=1);var n=Xe();e=Zt(e,t),e!==null&&($i(e,t,n),rt(e,n))}function sb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Em(e,n)}function cb(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(R(314))}l!==null&&l.delete(t),Em(e,n)}var Vm;Vm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,Yg(e,t,n);lt=!!(e.flags&131072)}else lt=!1,ve&&t.flags&1048576&&Fp(t,tr,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Ra(e,t),e=t.pendingProps;var i=Al(t,Ke.current);kl(t,n),i=gc(null,t,l,e,i,n);var a=bc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(l)?(a=!0,Za(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uc(t),i.updater=Pr,t.stateNode=i,i._reactInternals=t,ms(t,l,e,n),t=gs(null,t,l,!0,a,n)):(t.tag=0,ve&&a&&ic(t),Qe(null,t,i,n),t=t.child),t;case 16:l=t.elementType;e:{switch(Ra(e,t),e=t.pendingProps,i=l._init,l=i(l._payload),t.type=l,i=t.tag=ub(l),e=Tt(l,e),i){case 0:t=ys(null,t,l,e,n);break e;case 1:t=Hd(null,t,l,e,n);break e;case 11:t=$d(null,t,l,e,n);break e;case 14:t=Wd(null,t,l,Tt(l.type,e),n);break e}throw Error(R(306,l,""))}return t;case 0:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:Tt(l,i),ys(e,t,l,i,n);case 1:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:Tt(l,i),Hd(e,t,l,i,n);case 3:e:{if(gm(t),e===null)throw Error(R(387));l=t.pendingProps,a=t.memoizedState,i=a.element,$p(e,t),ir(t,l,null,n);var r=t.memoizedState;if(l=r.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ml(Error(R(423)),t),t=qd(e,t,l,n,i);break e}else if(l!==i){i=Ml(Error(R(424)),t),t=qd(e,t,l,n,i);break e}else for(pt=yn(t.stateNode.containerInfo.firstChild),mt=t,ve=!0,At=null,n=jp(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(El(),l===i){t=en(e,t,n);break e}Qe(e,t,l,n)}t=t.child}return t;case 5:return Wp(t),e===null&&ds(t),l=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,r=i.children,as(l,i)?r=null:a!==null&&as(l,a)&&(t.flags|=32),ym(e,t),Qe(e,t,r,n),t.child;case 6:return e===null&&ds(t),null;case 13:return bm(e,t,n);case 4:return pc(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Vl(t,null,l,n):Qe(e,t,l,n),t.child;case 11:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:Tt(l,i),$d(e,t,l,i,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,i=t.pendingProps,a=t.memoizedProps,r=i.value,ye(nr,l._currentValue),l._currentValue=r,a!==null)if(Mt(a.value,r)){if(a.children===i.children&&!it.current){t=en(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){r=a.child;for(var c=s.firstContext;c!==null;){if(c.context===l){if(a.tag===1){c=Qt(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),us(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(a.tag===10)r=a.type===t.type?null:a.child;else if(a.tag===18){if(r=a.return,r===null)throw Error(R(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),us(r,n,t),r=a.sibling}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}Qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,l=t.pendingProps.children,kl(t,n),i=Ct(i),l=l(i),t.flags|=1,Qe(e,t,l,n),t.child;case 14:return l=t.type,i=Tt(l,t.pendingProps),i=Tt(l.type,i),Wd(e,t,l,i,n);case 15:return mm(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:Tt(l,i),Ra(e,t),t.tag=1,at(l)?(e=!0,Za(t)):e=!1,kl(t,n),dm(t,l,i),ms(t,l,i,n),gs(null,t,l,!0,e,n);case 19:return hm(e,t,n);case 22:return fm(e,t,n)}throw Error(R(156,t.tag))};function Rm(e,t){return op(e,t)}function db(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,l){return new db(e,t,n,l)}function Pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ub(e){if(typeof e=="function")return Pc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===zs)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fa(e,t,n,l,i,a){var r=2;if(l=e,typeof e=="function")Pc(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case ol:return jn(n.children,i,a,t);case Hs:r=8,i|=8;break;case Fo:return e=_t(12,n,t,i|2),e.elementType=Fo,e.lanes=a,e;case Oo:return e=_t(13,n,t,i),e.elementType=Oo,e.lanes=a,e;case Bo:return e=_t(19,n,t,i),e.elementType=Bo,e.lanes=a,e;case Wu:return Nr(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uu:r=10;break e;case $u:r=9;break e;case qs:r=11;break e;case zs:r=14;break e;case an:r=16,l=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=_t(r,n,t,i),t.elementType=e,t.type=l,t.lanes=a,t}function jn(e,t,n,l){return e=_t(7,e,l,t),e.lanes=n,e}function Nr(e,t,n,l){return e=_t(22,e,l,t),e.elementType=Wu,e.lanes=n,e.stateNode={isHidden:!1},e}function Lo(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function ko(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pb(e,t,n,l,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dc(e,t,n,l,i,a,r,s,c){return e=new pb(e,t,n,s,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=_t(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(a),e}function mb(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rl,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function Mm(e){if(!e)return wn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(at(n))return Mp(e,n,t)}return t}function Gm(e,t,n,l,i,a,r,s,c){return e=Dc(n,l,!0,e,i,a,r,s,c),e.context=Mm(null),n=e.current,l=Xe(),i=hn(n),a=Qt(l,i),a.callback=t??null,gn(n,a,i),e.current.lanes=i,$i(e,i,l),rt(e,l),e}function Ar(e,t,n,l){var i=t.current,a=Xe(),r=hn(i);return n=Mm(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(a,r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=gn(i,t,r),e!==null&&(Rt(e,i,r,a),Aa(e,i,r)),r}function pr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tc(e,t){nu(e,t),(e=e.alternate)&&nu(e,t)}function fb(){return null}var Fm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nc(e){this._internalRoot=e}Er.prototype.render=Nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Ar(e,t,null,null)};Er.prototype.unmount=Nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){Ar(null,e,null,null)}),t[Jt]=null}};function Er(e){this._internalRoot=e}Er.prototype.unstable_scheduleHydration=function(e){if(e){var t=fp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&gp(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lu(){}function yb(e,t,n,l,i){if(i){if(typeof l=="function"){var a=l;l=function(){var d=pr(r);a.call(d)}}var r=Gm(t,l,e,0,null,!1,!1,"",lu);return e._reactRootContainer=r,e[Jt]=r.current,Ni(e.nodeType===8?e.parentNode:e),qn(),r}for(;i=e.lastChild;)e.removeChild(i);if(typeof l=="function"){var s=l;l=function(){var d=pr(c);s.call(d)}}var c=Dc(e,0,!1,null,null,!1,!1,"",lu);return e._reactRootContainer=c,e[Jt]=c.current,Ni(e.nodeType===8?e.parentNode:e),qn(function(){Ar(t,c,n,l)}),c}function Rr(e,t,n,l,i){var a=n._reactRootContainer;if(a){var r=a;if(typeof i=="function"){var s=i;i=function(){var c=pr(r);s.call(c)}}Ar(t,r,e,i)}else r=yb(n,t,e,i,l);return pr(r)}pp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=si(t.pendingLanes);n!==0&&(Ys(t,n|1),rt(t,Ee()),!(ce&6)&&(Gl=Ee()+500,kn()))}break;case 13:qn(function(){var l=Zt(e,1);if(l!==null){var i=Xe();Rt(l,e,1,i)}}),Tc(e,1)}};Xs=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var n=Xe();Rt(t,e,134217728,n)}Tc(e,134217728)}};mp=function(e){if(e.tag===13){var t=hn(e),n=Zt(e,t);if(n!==null){var l=Xe();Rt(n,e,t,l)}Tc(e,t)}};fp=function(){return pe};yp=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Qo=function(e,t,n){switch(t){case"input":if(Uo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=Sr(l);if(!i)throw Error(R(90));qu(l),Uo(l,i)}}}break;case"textarea":Ku(e,n);break;case"select":t=n.value,t!=null&&wl(e,!!n.multiple,t,!1)}};tp=Sc;np=qn;var gb={usingClientEntryPoint:!1,Events:[Hi,ul,Sr,Zu,ep,Sc]},li={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bb={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ap(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||fb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{_r=ma.inject(bb),It=ma}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gb;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(t))throw Error(R(200));return mb(e,t,null,n)};yt.createRoot=function(e,t){if(!Ac(e))throw Error(R(299));var n=!1,l="",i=Fm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dc(e,1,!1,null,null,n,!1,l,i),e[Jt]=t.current,Ni(e.nodeType===8?e.parentNode:e),new Nc(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=ap(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return qn(e)};yt.hydrate=function(e,t,n){if(!Vr(t))throw Error(R(200));return Rr(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!Ac(e))throw Error(R(405));var l=n!=null&&n.hydratedSources||null,i=!1,a="",r=Fm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=Gm(t,null,e,1,n??null,i,!1,a,r),e[Jt]=t.current,Ni(e),l)for(e=0;e<l.length;e++)n=l[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Er(t)};yt.render=function(e,t,n){if(!Vr(t))throw Error(R(200));return Rr(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!Vr(e))throw Error(R(40));return e._reactRootContainer?(qn(function(){Rr(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};yt.unstable_batchedUpdates=Sc;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!Vr(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Rr(e,t,n,!1,l)};yt.version="18.3.1-next-f1338f8080-20240426";function Om(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Om)}catch(e){console.error(e)}}Om(),Ou.exports=yt;var hb=Ou.exports,iu=hb;Mo.createRoot=iu.createRoot,Mo.hydrateRoot=iu.hydrateRoot;const xb=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"System Time",help:"Date and time the inverter will use to run schedules",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Year",arg:"Year",dtype:"Number",description:"",longdescription:"",range:{min:0,max:99},telemetry:{model:"40104",block:"fixed",point:"Year"}},{name:"Mon",arg:"Mon",dtype:"Number",description:"",longdescription:"",range:{min:1,max:12},telemetry:{model:"40104",block:"fixed",point:"Month"}},{name:"Day",arg:"Day",dtype:"Number",description:"",longdescription:"",range:{min:1,max:31},telemetry:{model:"40104",block:"fixed",point:"Day"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"Hour"}},{name:"Min",arg:"Min",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Minute"}},{name:"Sec",arg:"Sec",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Second"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"SystemTime"}},command_id:"Basic.SystemTime",widget:"datetime"},{title:"Grid Interaction",help:"Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Off-grid",1:"Grid-tied"},friendly_meanings:{0:"Off-Grid.  There is no available power grid",1:"Grid-Tied. Grid power is available."},telemetry:{model:"40104",block:"fixed",point:"OperatingMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"OperatingMode"}},command_id:"Basic.OperatingMode"},{title:"Operating Mode",help:"Select how solar power is prioritized. Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed). Export first: PV powers the home, then exports to grid, and charges the battery last. Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed). If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Self used mode",1:"Feed-in priority mode",2:"Back-up mode"},friendly_meanings:{0:"Self-consumption",1:"Export first",2:"Backup power"},telemetry:{model:"40104",block:"fixed",point:"WorkMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"WorkMode"}},command_id:"Basic.WorkMode"},{title:"Ignore Grid-Loss Warning",help:"When enabled, the inverter will not treat the absence of grid power as an alarm. Use this mode for permanently off-grid systems where grid connection is unavailable.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid-Loss Behavior",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Treat as Alarm",1:"Ignore (Off-Grid Mode)"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"GridLossWarningClear"}},command_id:"Basic.GridLossWarningClear"},{title:"Power Status",help:"Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"Other"},friendly_meanings:{0:"Standby",1:"Running"},telemetry:{model:"40104",block:"fixed",point:"PowerControl"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerStatus"}},command_id:"Basic.PowerStatus"},{title:"Reset to Factory Defaults",help:"Restores all inverter configuration parameters to their original factory values. Use with caution â€” this cannot be undone.",element_type:"service",access:"INVOKE",readOnly:!1,entries:[],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"AllToDefault"}},command_id:"Basic.AllToDefault",invokeButtonText:"Reset Now"},{title:"Inverter Power Control",help:`Turns the inverter output on or off.\r
\r
â€¢ **Standby:** AC output is disabled, but control circuits remain powered.\r
â€¢ **Power On:** Enables AC output and normal inverter operation.`,element_type:"service",access:"INVOKE",readOnly:!1,entries:[{name:"Power State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"PowerOn"},friendly_meanings:{0:"Standby",1:"Power On"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerControl"}},command_id:"Basic.PowerControl",showInvokeButton:!1,showHistory:!0,showRefresh:!0,showSetButton:!0}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Dry Contact Reuse",help:"Selects how the inverter's dry contact relay is reused. It can be configured for various control functions such as grid export limitation, smart load control, or dark start.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Dry Contact Reuse",arg:"DryContactReuse",dtype:"enum",description:"",longdescription:"",meanings:{0:"None",1:"Rapid Shutdown (RSD)",2:"Black Start",3:"Smart Load",4:"Non-critical Load"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.DryContactReuse"}]}],section_id:"inverter.basic"},{sectionTitle:"Power Limits",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Limit Power Output",help:"Shows whether power output limiting is currently active. When not limited, the inverter can deliver its full available power (subject only to natural hardware limits). When limited, an external or configured cap is applied to restrict inverter output to the specified Power Limit.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not limited - full output",1:"Limit output power"},telemetry:{model:"40104",block:"fixed",point:"LimitActivePowerStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LimitActivePower",Element:"LimitActivePowerStatus"}},command_id:"LimitActivePower.LimitActivePowerStatus"},{title:"Power Limit",help:"The inverter's present active-power output limit as a percentage of its rated capacity. If power limiting is active, the inverter will limit its output power to this percentage of its rated capacity.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Power Limit",arg:"Power",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ActivePowerPercent"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LimitActivePower",Element:"ActivePowerPercent"}},command_id:"LimitActivePower.ActivePowerPercent"}]}]},{sectionTitle:"Selling Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Allow Selling Power to Grid",help:"Allows the inverter to sell/export power back to the utility grid. Enable this only if local regulations and interconnect agreements permit grid export.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not allowed",1:"Allowed"},telemetry:{model:"40104",block:"fixed",point:"FeedInGridStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FeedInGrid",Element:"FeedInGridStatus"}},command_id:"FeedInGrid.FeedInGridStatus"},{title:"Max Power Sold to Grid",help:"Sets the maximum power the inverter is allowed to sell/export to the grid. Use this to meet utility export limits or site commissioning requirements.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power",arg:"Power",dtype:"Number",description:"",longdescription:"",unit:"kW",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"FeedInGridMaxPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FeedInGrid",Element:"FeedInGridMaxPower"}},command_id:"FeedInGrid.FeedInGridMaxPower"},{title:"Prevent Grid Export: Strict Mode",help:"Keeps power export at or near zero by adjusting inverter output in real time. When enabled, the inverter supplies only local (on-site) loads and will not send power back to the grid. This mode is required when grid export is not allowed. Ensure the CTs are installed on the grid connection point and  not on the inverter's load side, so the inverter can correctly detect and prevent export.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Fast Zero Export",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable strict mode",1:"Enable strict mode"},telemetry:{model:"40104",block:"fixed",point:"FastzeroExportstatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FeedInGrid",Element:"FastzeroExportstatus"}},command_id:"FeedInGrid.FastZeroExportStatus"}]}]},{sectionTitle:"Parallel",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Parallel unit ID",help:"The Unit ID (also known as the unit ID, slave ID, or node ID) for this inverter. The primary inverter should use address 1, and any secondary inverters should use 2 or higher. This sets the modbus address that inverters use to communicate with each other. Each inverter that communicates on the same Modbus communication line must have a unique address, but addresses do not need to be globally unique across separate, unconnected systems.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Address",arg:"Addr",dtype:"Number",description:"",longdescription:"",range:{min:1,max:255},telemetry:{model:"40104",block:"fixed",point:"ModbusAddr"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ModbusAddr"}},command_id:"Parallel.ModbusAddr"},{title:"System Type",help:`Defines how this inverter participates in a multi-inverter or multi-phase system.\r
\r
â€¢ No Parallel: Single inverter system.\r
â€¢ Single-phase Parallel (Master / Secondary): Multiple inverters on one phase.\r
â€¢ Three-phase Parallel (Master): Multiple inverters forming R/S/T phases.`,element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Parallel Role / Topology",arg:"Type",dtype:"enum",description:"",longdescription:"",meanings:{0:"no parallel (single one)",1:"Single-phase parallel(Master)",2:"Secondary",3:"Three phase parallel(Master)"},friendly_meanings:{0:"No Parallel (Single Inverter)",1:"Single-Phase Parallel (Master)",2:"Single-Phase Parallel (Secondary)",3:"Three-Phase Parallel (Master)"},telemetry:{model:"40104",block:"fixed",point:"SystemType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"SystemType"}},command_id:"Parallel.SystemType"},{title:"Assigned Phase",help:"Selects which output phase this inverter is responsible for in a three-phase system. R, S, and T correspond to L1, L2, and L3.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Phase",arg:"Phase",dtype:"enum",description:"",longdescription:"",meanings:{0:"R",1:"S",2:"T"},friendly_meanings:{0:"R",1:"S",2:"T"},telemetry:{model:"40104",block:"fixed",point:"ComposedPhase"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ComposedPhase"}},command_id:"Parallel.ComposedPhase"},{title:"Clear Detected Phases",help:"Clears the detected phases for this inverter.",element_type:"attribute",access:"W",readOnly:!1,entries:[{name:"Phase",arg:"Phase",dtype:"enum",description:"",longdescription:"",meanings:{0:"Clear"},friendly_meanings:{0:"Clear"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ClearDetectedPhases"}},command_id:"Parallel.ClearDetectedPhases"},{title:"Detected Grid Phases",help:"The output phase this inverter is responsible for in a three-phase system. R, S, and T correspond to L1, L2, and L3.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Phase",arg:"Phase",dtype:"enum",description:"",longdescription:"",meanings:{0:"None",1:"R",2:"S",3:"T"},friendly_meanings:{0:"None",1:"R",2:"S",3:"T"},telemetry:{model:"40104",block:"fixed",point:"DetectedGridPhases"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"DetectedGridPhases"}},command_id:"Parallel.DetectedGridPhases"},{title:"Share Battery",help:"Allows inverters in a parallel group to use a common battery bank instead of keeping batteries isolated per inverter.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Installation Method",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inverters have Separate Batteries",1:"Inverters Share a Common Battery Bank"},telemetry:{model:"40104",block:"fixed",point:"ShareBatteryStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ShareBatteryStatus"}},command_id:"Parallel.ShareBatteryStatus"},{title:"Inverters in parallel",help:"Total number of inverters detected in this parallel system.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Num",arg:"Num",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ParallelNum"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ParallelNum"}},command_id:"Parallel.ParallelNum"},{title:"Inverter Role",help:"Reports whether this inverter is acting as Primary (sometimes called the Master) or Secondary in the current parallel configuration.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Role",arg:"Role",dtype:"enum",description:"",longdescription:"",meanings:{0:"Master",1:"Slave"},friendly_meanings:{0:"Primary",1:"Secondary"},telemetry:{model:"40104",block:"fixed",point:"Role"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"Role"}},command_id:"Parallel.Role"},{title:"Reported Phase",help:"Reports which phase (R / S / T) this inverter is currently serving in the parallel system.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Phase",arg:"Phase",dtype:"enum",description:"",longdescription:"",meanings:{0:"R",1:"S",2:"T"},friendly_meanings:{0:"R",1:"S",2:"T"},telemetry:{model:"40104",block:"fixed",point:"ParallelPhase"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Parallel",Element:"ParallelPhase"}},command_id:"Parallel.ParallelPhase"}]}]},{sectionTitle:"Current Transformer (CT) Settings",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"CT Ratio",help:"Select the current transformer (CT) ratio used for metering electric current on the grid port connection. This must match the CT hardware rating so that current and power readings are accurate.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"CT Ratio",arg:"Direction",dtype:"enum",description:"",longdescription:"",meanings:{0:"1/1000",1:"1/2000",2:"1/3000",3:"1/4000",4:"1/6000"},friendly_meanings:{0:"1/1000",1:"1/2000",2:"1/3000",3:"1/4000",4:"1/6000"},telemetry:{model:"40104",block:"fixed",point:"CTSampleRatio"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Measurement",Element:"CTSampleRatio"}},command_id:"Measurement.CTSampleRatio"},{title:"CT Direction",help:"Sets the CT installation direction. You may choose to reverse this if your inverter is reading import when power is actually flowing out to the grid (export) or vice versa.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Direction",arg:"Direction",dtype:"enum",description:"",longdescription:"",meanings:{0:"Normal",1:"Reversed"},friendly_meanings:{0:"Normal",1:"Reversed"},telemetry:{model:"40104",block:"fixed",point:"CTDirection"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Measurement",Element:"CTDirection"}},command_id:"Measurement.CTDirection"}],subsection_id:"ct-settings"},{title:null,visibility:"advanced",collapsedByDefault:!0,points:[{title:"Meter Measurement Source",help:"The inverter can either read CTs directly, or read a stand-alone electric meter.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Meter Type",arg:"MeterType",dtype:"enum",description:"",longdescription:"",meanings:{0:"Meter",1:"CTs"}}],protocol:{modbus:{address:1,register_type:3,size:1}},command_id:"Modbus.MeterType"}],subsection_id:"measurement-advanced"}],section_id:"inverter.measurement"},{sectionTitle:"PV",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"PV Sell to Grid",help:"You may disable solar power export to the utility grid. This setting supports NEM3 compatibility.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"PV Sell to Grid",arg:"PVSellToGrid",dtype:"bitfield16",description:"",longdescription:"",meanings:{7:"Enable export of PV power to the grid"}}],protocol:{modbus:{address:3,register_type:3,size:1}},command_id:"Modbus.PVSellToGrid"}]}]}],theme_id:"inverter"},{themeName:"Battery",sections:[{sectionTitle:"Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Type",help:"Specifies the chemistry or general type of connected battery. Choose **No Battery** for standalone PV or grid-tie operation, **Lead-acid** for flooded or AGM batteries, or **Lithium-ion** for managed BMS packs.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Type",arg:"Type",dtype:"enum",description:"",longdescription:"",meanings:{0:"NoBattery",1:"Lead-acid",2:"Lithom-ion"},friendly_meanings:{0:"No Battery",1:"Lead-acid",2:"Lithium-ion"},telemetry:{model:"40104",block:"fixed",point:"BatteryType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"BatteryType"}},command_id:"BatteryBase.BatteryType"},{title:"Battery Brand",help:"Selects the manufacturer profile for the connected battery. This may pre-configure recommended voltage and SOC limits for optimal operation.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Brand",arg:"Brand",dtype:"enum",description:"",longdescription:"",meanings:{0:"Fortress"},friendly_meanings:{0:"Fortress"},telemetry:{model:"40104",block:"fixed",point:"BatteryBrand"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"BatteryBrand"}},command_id:"BatteryBase.BatteryBrand"},{title:"Absorb Voltage",help:"Sets the voltage used during the absorb (bulk-to-float transition) phase. Increasing this value raises the upper charge threshold for lead-acid batteries.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage",arg:"Volt",dtype:"Number",description:"",longdescription:"",unit:"Vdc",telemetry:{model:"40104",block:"fixed",point:"AbsorbVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"AbsorbVoltage"}},command_id:"BatteryBase.AbsorbVoltage"},{title:"Float Voltage",help:"Defines the voltage maintained once the battery is fully charged. This helps prevent overcharging while keeping the battery topped off.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage",arg:"Volt",dtype:"Number",description:"",longdescription:"",unit:"Vdc",telemetry:{model:"40104",block:"fixed",point:"FloatVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"FloatVoltage"}},command_id:"BatteryBase.FloatVoltage"},{title:"Start Derating Voltage",help:"Voltage threshold where the inverter begins reducing charge or discharge current to protect the battery as it approaches full or low state.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage",arg:"Volt",dtype:"Number",description:"",longdescription:"",unit:"Vdc",telemetry:{model:"40104",block:"fixed",point:"VbatStartDerating"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"VbatStartDerating"}},command_id:"BatteryBase.VbatStartDerating"},{title:"Battery Control Type",help:`Determines how the inverter regulates both charging and discharging.\r
\r
SOC: Uses battery state of charge thresholds to start and stop charge/discharge.\r
\r
Volt: Uses DC voltage limits instead.`,element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"ChargeCtrlType",dtype:"enum",description:"",longdescription:"",meanings:{0:"SOC",1:"Volt"},friendly_meanings:{0:"SOC",1:"Volt"},telemetry:{model:"40104",block:"fixed",point:"ChaDisChaCtrlType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChaDisChaCtrlType"}},command_id:"BatteryBase.ChaDisChaCtrlType"},{title:"Charge Limit (SOC)",help:"Sets the maximum state of charge (SOC) the battery will be charged to. Once the battery reaches this level, charging stops to prevent overcharging and extend lifespan.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ChargeLimitSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChargeLimitSoc"}},command_id:"BatteryBase.ChargeLimitSoc"},{title:"Max Battery Current",help:"Sets the maximum charging and discharging current allowed for the connected inverter. Choose the preset that matches your inverter model to automatically apply the correct limits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Charge Preset",arg:"MaxChargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxChargingCurrent"}},{name:"Max Discharge Preset",arg:"MaxDischargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxDischargingCurrent"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"MaxChaDisChaCurrent"}},command_id:"BatteryBase.MaxChaDisChaCurrent"},{title:"On-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to while grid power is available. Below this level, the inverter will stop discharging and switch to grid power to protect battery capacity.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 21-90%.  Must be higher than the Off-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OnGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OnGridCutOffSoc"}},command_id:"BatteryBase.OnGridCutOffSoc"},{title:"Off-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to when operating off-grid. Once the battery reaches this level, the inverter stops discharging to prevent deep discharge and maintain battery health.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 20-89%.  Must be lower than the On-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OffGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OffGridCutOffSoc"}},command_id:"BatteryBase.OffGridCutOffSoc"}]}]},{sectionTitle:"Battery Backup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Backup Mode",help:"Enables or disables battery-backup operation. When enabled, the inverter reserves part of the battery capacity to power critical loads during a grid outage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Backup Mode",1:"Enable Backup Mode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryBackupMode"}},command_id:"BatteryBackup.BatteryBackupMode"},{title:"Battery Reserve SOC",help:"While Battery Backup Mode is enabled, the battery will stop discharging once it reaches this level. When Backup Mode is disabled, normal operation applies and discharge will continue down to the On-Grid or Off-Grid Battery Cutoff SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryReserveSOC"}},command_id:"BatteryBackup.BatteryReserveSOC"}]}]},{sectionTitle:"Battery Scheduling",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Scheduling",help:"This is a special scheduling mode designed for certain time-of-use (TOU) utility rates or other custom situations. In most circumstances, we recomment allowing your system to  manage charging and discharging automatically without setting a schedule.  You don't need to set a schedule unless you have a specific reason to charge or discharge at exact times.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Scheduling",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Scheduling",1:"Enable the 'PV Charge Only' and 'Discharge Only' scheduling modes"},telemetry:{model:"40104",block:"fixed",point:"BatteryScheduling"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryScheduling",Element:"BatteryScheduling"}},command_id:"BatteryScheduling.BatteryScheduling"}]},{title:"PV Charge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Battery Charge Power During 'PV Charge Only' Periods",help:"Sets the maximum charging power during scheduled Time-of-Use (TOU) charge periods in kW. Set this limit to control the power level at which the battery will charge from the grid during PV charge only periods",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",unit:"kW",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pChgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUMaximumChargingPower"}},command_id:"BatteryTOUCharge.TOUMaximumChargingPower"},{title:"Schedule Window 1 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan1"}},command_id:"BatteryTOUCharge.TOUChargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan2"}},command_id:"BatteryTOUCharge.TOUChargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan3"}},command_id:"BatteryTOUCharge.TOUChargingPlan3",widget:"timerange"}]},{title:"Discharge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Inverter Output Power During 'Discharge Only' Periods",help:"Sets the maximum discharging power during scheduled Time-of-Use (TOU) discharge periods in kW. Limit this to control how much battery power is exported to loads or grid during those windows.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pDischgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUMaximumDischargingPower"}},command_id:"BatteryTOUDischarge.TOUMaximumDischargingPower"},{title:"TOU Discharge Stop SOC",help:"Sets the minimum state of charge (SOC) that the battery will discharge to during 'Discharge Only' operation. Once this level is reached, discharging stops to preserve reserve capacity for later use or backup.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"socDischgEndT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"DischargingStopSoc"}},command_id:"BatteryTOUDischarge.DischargingStopSoc"},{title:"Schedule Window 1 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan1"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan2"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan3"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan3",widget:"timerange"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Discharge only Control Style",help:"Selects how 'discharge only' is controlled. 'Discharge only' can stop when a voltage limit is reached or when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"DischargeOnlyControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{4:"Enable SOC control (disable for voltage control)"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.DischargeOnlyControlStyle"},{title:"Discharge only Stop Voltage",help:"Sets the battery voltage at which discharge only will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Discharge only Stop Voltage",arg:"DischargeOnlyStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:202,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischargeOnlyStopVoltage"}]}]},{sectionTitle:"Grid Charge",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Allow Battery Charging from Grid",help:"Enables the battery to charge from the utility grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid Charge",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Do not charge the battery from grid power",1:"Allowed"},telemetry:{model:"40104",block:"fixed",point:"ACChargeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeStatus"}},command_id:"ACCharge.ACChargeStatus"},{title:"Grid Charge Power Limit",help:"Sets the maximum power the inverter will draw from the grid for charging. This cap applies when Grid Charge is enabled (and within any configured time windows).",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Grid Charge Power (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ACChargePower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargePower"}},command_id:"ACCharge.ACChargePower"},{title:"Grid Charge Control Type",help:"Select whether grid charging follows a time schedule or SOC/voltage thresholds.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"Type",dtype:"enum",description:"",longdescription:"",unit:"%",meanings:{0:"according to time",1:"according to SOC/Volt"},friendly_meanings:{0:"By Time Schedule",1:"By SOC/Voltage"},telemetry:{model:"40104",block:"fixed",point:"ACChargeType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeType"}},command_id:"ACCharge.ACChargeType"},{title:"Grid Charge SOC Range",help:"Defines when grid charging starts and stops based on battery state of charge (SOC). Charging starts when SOC falls below Start SOC and stops when it reaches Stop SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"ACChgStartSOC"},protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}}},{name:"SOC",arg:"StopSOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:90},telemetry:{model:"40104",block:"fixed",point:"ACChgStopSOC"},greater_than:"StartSOC",protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStopSOC"}}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}},command_id:"ACCharge.ACChgSOCRange"},{title:"Grid Charge Windows",help:"During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Window 1 Start Hour",arg:"StartTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Hour"}},{name:"Window 1 Start Minute",arg:"StartTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Minute"}},{name:"Window 1 End Hour",arg:"EndTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Hour"}},{name:"Window 1 End Minute",arg:"EndTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Minute"}},{name:"Window 2 Start Hour",arg:"StartTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Hour"}},{name:"Window 2 Start Minute",arg:"StartTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Minute"}},{name:"Window 2 End Hour",arg:"EndTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Hour"}},{name:"Window 2 End Minute",arg:"EndTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Minute"}},{name:"Window 3 Start Hour",arg:"StartTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Hour"}},{name:"Window 3 Start Minute",arg:"StartTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Minute"}},{name:"Window 3 End Hour",arg:"EndTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Hour"}},{name:"Window 3 End Minute",arg:"EndTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargingPlan"}},command_id:"ACCharge.ACChargingPlan",widget:"timerange-multi"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Grid Charge Control Style",help:"Selects how grid charging is controlled. Charging can follow a time schedule, stop when a voltage limit is reached, or stop when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"GridChargeControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{1:"Charge based on time",2:"Stop charging at voltage limit",3:"Stop charging at SOC limit"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.GridChargeControlStyle"},{title:"Grid Charging Start Voltage",help:"Sets the battery voltage at which grid charging will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Start Voltage",arg:"GridChargingStartVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:158,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStartVoltage"},{title:"Grid Charging Stop Voltage",help:"Sets the maximum battery voltage during grid charging. Once this voltage is reached, the inverter will stop charging from the grid to protect the battery and prevent overvoltage.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Stop Voltage",arg:"GridChargingStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:159,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStopVoltage"}]}]},{sectionTitle:"Battery Base",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Max Charge Current",help:"Instead of using the presets, you may set the charge current directly in amps.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Charge Current (A)",arg:"ChargeCurr",dtype:"Number",description:"",longdescription:"",unit:"A",range:{min:0}}],protocol:{modbus:{address:101,register_type:3,size:1}},command_id:"Modbus.ChargeCurr"},{title:"Battery Voltage Correction",help:"Recalibrate the battery voltage reading.  Enter the actual ground-truth voltage of the battery here.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Battery Voltage Correction",arg:"BatteryVoltageCorrection",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:999,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischgCurr"}]}]}]},{themeName:"Grid",sections:[{sectionTitle:"Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Grid Parameters",help:"This setting changes the conditions under which the inverter will connect or disconnect from the utility grid. Different areas have different rules about when this equipment is allowed to disconnect and when it must ride through. Choose the code required by the local utility or AHJ.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Code",arg:"Code",dtype:"enum",description:"",longdescription:"",meanings:{0:"Default(UL-240-18)",1:"California(Rule 21)",2:"Hawaii(Rule 14)",3:"Puerto Rico LUMA",4:"KIUC"},friendly_meanings:{0:"Default UL-1741 / IEEE 1547",1:"California (Rule 21)",2:"Hawaii (Rule 14)",3:"Puerto Rico (LUMA)",4:"KIUC"},telemetry:{model:"40104",block:"fixed",point:"GridRegulation"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridRegulation"}},command_id:"GridBase.GridRegulation"},{title:"Grid Type",help:"Choose wiring configuration of the site.  This helps configure the system to match the power service at the site.  Note the voltage you enter here must match the EPS Voltage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Service Type",arg:"Type",dtype:"enum",description:"",longdescription:"",meanings:{0:"Split240V/120V",1:"3phase208V/120V",2:"Single240V",3:"Single230V",4:"Split200V/100V"},friendly_meanings:{0:"Split 240V / 120V",1:"3-Phase 208V / 120V",2:"Single 240V",3:"Single 230V",4:"Split 200V / 100V"},telemetry:{model:"40104",block:"fixed",point:"GridType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridType"}},command_id:"GridBase.GridType"},{title:"Grid Frequency",help:"Sets the nominal grid frequency for the installation. Use 60 Hz for North America and most split-phase installs; use 50 Hz for regions that operate at 230 V single-phase.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Frequency (Hz)",arg:"Freq",dtype:"enum",description:"",longdescription:"",meanings:{0:"50",1:"60"},friendly_meanings:{0:"50 Hz",1:"60 Hz"},telemetry:{model:"40104",block:"fixed",point:"GridFreq"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridFreq"}},command_id:"GridBase.GridFreq"}]},{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"UL Compliance Report",help:`Some jurisdictions require proof that your inverter's grid settings match local utility rules (for example, California Rule 21 or Puerto Rico LUMA requirements).

This report pulls the device's active grid parameters and formats them into a UL-style compliance summary you can share with the AHJ or utility.
`,element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Voltage Ride-Through Windows",arg:"VoltageRideThrough",dtype:"String",description:"Derived from Grid Protection voltage limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Frequency Ride-Through Windows",arg:"FrequencyRideThrough",dtype:"String",description:"Derived from Grid Protection frequency limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Volt-VAR Profile",arg:"VoltVarProfile",dtype:"String",description:"Captures the active Volt-VAR curve (e.g., UL 1741 SA default profile).",longdescription:""},{name:"Freq-Watt Profile",arg:"FreqWattProfile",dtype:"String",description:"Captures the active droop coefficients applied to frequency-active power response.",longdescription:""}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Reports",Element:"ULComplianceReport"}},command_id:"CGI.ULComplianceReport",widget:"ul-compliance-report",showInvokeButton:!1,showHistory:!1,showRefresh:!1,showSetButton:!1}]}]},{sectionTitle:"Grid Protection",subsections:[{title:"Grid Protection Parameters",visibility:"default",collapsedByDefault:!0,points:[{title:"Grid Voltage Limits (Stage 1)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1"}},command_id:"GridProtection.GridVoltLimit1"},{title:"Grid Voltage Limits (Stage 2)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2"}},command_id:"GridProtection.GridVoltLimit2"},{title:"Grid Voltage Limits (Stage 3)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3"}},command_id:"GridProtection.GridVoltLimit3"},{title:"Grid Frequency Limits (Stage 1)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1"}},command_id:"GridProtection.GridFreqLimit1"},{title:"Grid Frequency Limits (Stage 2)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2"}},command_id:"GridProtection.GridFreqLimit2"},{title:"Grid Frequency Limits (Stage 3)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3"}},command_id:"GridProtection.GridFreqLimit3"},{title:"Grid Voltage Trip Time",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1Time"}},command_id:"GridProtection.GridVoltLimit1Time"},{title:"Grid Voltage Trip Time (Stage 2)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2Time"}},command_id:"GridProtection.GridVoltLimit2Time"},{title:"Grid Voltage Trip Time (Stage 3)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3Time"}},command_id:"GridProtection.GridVoltLimit3Time"},{title:"Grid Frequency Trip Time (Stage 1)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1Time"}},command_id:"GridProtection.GridFreqLimit1Time"},{title:"Grid Frequency Trip Time (Stage 2)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2Time"}},command_id:"GridProtection.GridFreqLimit2Time"},{title:"Grid Frequency Trip Time (Stage 3)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3Time"}},command_id:"GridProtection.GridFreqLimit3Time"}]}]},{sectionTitle:"Grid Connection",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Permit to Operate",help:"Shows whether the inverter is permitted to operate in grid-connected mode.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Permit Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not Permitted",1:"Permitted"},telemetry:{model:"40104",block:"fixed",point:"PermitServiceStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"PermitServiceStatus"}},command_id:"GridConnection.PermitServiceStatus"},{title:"Ramp Rate",help:"How quickly inverter output is allowed to increase.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Ramp Rate (%/sec)",arg:"Rate",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"RampRate"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"RampRate"}},command_id:"GridConnection.RampRate"},{title:"Applicable Grid Voltage Range",help:"Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Vac)",arg:"ApplicableVoltageLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageLow"}},{name:"Upper Limit (Vac)",arg:"ApplicableVoltageHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableVoltage"}},command_id:"GridConnection.ApplicableVoltage"},{title:"Applicable Grid Frequency Range",help:"Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Hz)",arg:"ApplicableFrequencyLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyLow"}},{name:"Upper Limit (Hz)",arg:"ApplicableFrequencyHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableFrequency"}},command_id:"GridConnection.ApplicableFrequency"},{title:"Connection Delay Times",help:"Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Connection Delay (s)",arg:"ConnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConnectionDelayTime"}},{name:"Reconnection Delay (s)",arg:"ReconnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReconnectionDelayTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"DelayTime"}},command_id:"GridConnection.DelayTime"}]}]},{sectionTitle:"Grid Support",subsections:[{title:"Constant Power Factor",visibility:"default",collapsedByDefault:!0,points:[{title:"Power Factor Mode",help:"Shows whether constant power-factor control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive â€” No PF control",1:"Active â€” Constant PF"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactorModeStatus"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactorModeStatus"},{title:"Power Factor Setpoint",help:"The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorExcited"}},{name:"Power Factor (PF)",arg:"PowerFactor",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactor"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactor"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactor"}]},{title:"Constant Reactive Power",visibility:"default",collapsedByDefault:!0,points:[{title:"Reactive Power Mode",help:"Shows whether constant reactive-power control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeExcited"}},{name:"Status",arg:"Status",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no reactive power control",1:"Active - reactive power control"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ConstantReactivePowerModeStatus"}},command_id:"ConstantReactivePowerMode.ConstantReactivePowerModeStatus"},{title:"Reactive Power Setpoint",help:"Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Reactive Power (%)",arg:"Power",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReactivePowerPercentCMD"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ReactivePowerPercentCMD"}},command_id:"ConstantReactivePowerMode.ReactivePowerPercentCMD"}]},{title:"Volt-VAR (Voltage-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-VAR Mode",help:"Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-VAR control",1:"Active - Volt-VAR control"},telemetry:{model:"40104",block:"fixed",point:"VoltageReactivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VoltageReactivePowerMode"}},command_id:"VoltageReactivePowerMode.VoltageReactivePowerMode"},{title:"Autonomous Vref Adjustment",help:"Indicates whether the inverter autonomously adjusts its reference voltage (Vref).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Autonomous Adjustment",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"AutonomousVrefAdjustment"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"AutonomousVrefAdjustment"}},command_id:"VoltageReactivePowerMode.AutonomousVrefAdjustment"},{title:"Reference Voltage (Vref)",help:"Voltage reference used for Volt-VAR calculations.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Vref",arg:"Verf",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Verf"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Verf"}},command_id:"VoltageReactivePowerMode.Verf"},{title:"Vref Adjustment Time Constant",help:"Time constant applied when adjusting Vref.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Time Constant",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VrefAdjustmentTimeConstant"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VrefAdjustmentTimeConstant"}},command_id:"VoltageReactivePowerMode.VrefAdjustmentTimeConstant"},{title:"Volt-VAR Voltage Breakpoints",help:"Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"V1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV1"}},{name:"V2 (Voltage Point 2)",arg:"V2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV2"}},{name:"V3 (Voltage Point 3)",arg:"V3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV3"}},{name:"V4 (Voltage Point 4)",arg:"V4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"UnderOverVoltage"}},command_id:"VoltageReactivePowerMode.UnderOverVoltage"},{title:"Reactive Power Setpoint Q1",help:"Reactive power at voltage point V1 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q1 (Reactive Setpoint 1)",arg:"Q1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q1"}},command_id:"VoltageReactivePowerMode.Q1"},{title:"Reactive Power Setpoint Q2",help:"Reactive power at voltage point V2 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q2 (Reactive Setpoint 2)",arg:"Q2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q2"}},command_id:"VoltageReactivePowerMode.Q2"},{title:"Reactive Power Setpoint Q3",help:"Reactive power at voltage point V3 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q3 (Reactive Setpoint 3)",arg:"Q3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q3"}},command_id:"VoltageReactivePowerMode.Q3"},{title:"Reactive Power Setpoint Q4",help:"Reactive power at voltage point V4 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q4 (Reactive Setpoint 4)",arg:"Q4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q4"}},command_id:"VoltageReactivePowerMode.Q4"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-VAR changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VqOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageReactivePowerMode.OpenLoopResponseTime"}]},{title:"P-Q Mode (Active-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"P-Q Mode Status",help:"Shows whether Active/Reactive Power (P-Q) control mode is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no P-Q control",1:"Active - P-Q control"},telemetry:{model:"40104",block:"fixed",point:"PQModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"PQModeStatus"}},command_id:"ActivePowerReactivePowerMode.PQModeStatus"},{title:"P-Q Curve Points",help:"Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P1 Setpoint",arg:"P1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP1"}},{name:"P2 Setpoint",arg:"P2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP2"}},{name:"P3 Setpoint",arg:"P3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"P_QP"}},command_id:"ActivePowerReactivePowerMode.P_QP"}]},{title:"Volt-Watt (Voltage-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-Watt Mode",help:"Shows whether Volt-Watt (voltage-active power) control is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-Watt control",1:"Active - Volt-Watt control"},telemetry:{model:"40104",block:"fixed",point:"VoltageActivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltageActivePowerMode"}},command_id:"VoltageActivePowerMode.VoltageActivePowerMode"},{title:"Volt-Watt Voltage Breakpoints",help:"Voltage points that define the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"VoltWattV1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV1"}},{name:"V2 (Voltage Point 2)",arg:"VoltWattV2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattV"}},command_id:"VoltageActivePowerMode.VoltWattV"},{title:"Volt-Watt Power Setpoint",help:"Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P2 Setpoint",arg:"VoltWattP2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattP2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattP2"}},command_id:"VoltageActivePowerMode.VoltWattP2"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-Watt changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"VoltWattOpenLoopResponseTime",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageActivePowerMode.OpenLoopResponseTime"}]},{title:"Freq-Watt (Frequency-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Frequency-Active Power Mode",help:"Indicates whether frequency-power (Freq-Watt) control is currently enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"FrequencyActivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"FrequencyActivePowerModeStatus"}},command_id:"FrequencyActivePowerMode.FrequencyActivePowerModeStatus"},{title:"Open-Loop Response Time",help:"Response time applied to open-loop frequency-power adjustments.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"FreqWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"FrequencyActivePowerMode.OpenLoopResponseTime"},{title:"Over-Frequency Droop: Deadband",help:"Over Frequency Droop dbOF â€” Deadband around nominal frequency before active power reduction begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",unit:"Hz",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_dbOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_dbOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_dbOF"},{title:"Over-Frequency Droop: Gain (k)",help:"Over Frequency Droop kOF â€” Slope (gain k) of active power reduction versus frequency rise above nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_kOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_kOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_kOF"},{title:"Under-Frequency Droop: Deadband",help:"Under Frequency Droop dbUF â€” Deadband around nominal frequency before active power increase/response begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_dbUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_dbUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_dbUF"},{title:"Under-Frequency Droop: Gain (k)",help:"Under Frequency Droop kUF â€” Slope (gain k) of active power response versus frequency drop below nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_kUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_kUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_kUF"}]}]}]},{themeName:"Backup Power",sections:[{sectionTitle:"Backup Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Off-Grid Output",help:"Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"OffGridOutput"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"OffGridOutput"}},command_id:"BackupPower.OffGridOutput"},{title:"Backup (EPS) Output Voltage",help:"Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage (Vac)",arg:"Voltage",dtype:"enum",description:"",longdescription:"",unit:"Vac",meanings:{0:"208",1:"220",2:"230",3:"240",4:"277"},friendly_meanings:{0:"208 V",1:"220 V",2:"230 V",3:"240 V",4:"277 V"},telemetry:{model:"40104",block:"fixed",point:"EPSVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"EPSVoltage"}},command_id:"BackupPower.EPSVoltage"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Port Connection",help:"If using a generator, select which port it's connected to: eeither the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.  In Microgrid Mode, the inverter treats the generator as the primary AC source rather than the utility grid.  When microgrid mode is active, all charging and operating limits come from the Generator settings—not the Grid Charge limits. Remember to install CTs on any power wires attached to the grid port.  This includes a generator that is configured in microgrid mode.  ",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Generator connected to",arg:"Port",dtype:"enum",description:"",longdescription:"",meanings:{0:"GeneratorPort",1:"GridPort"},friendly_meanings:{0:"GEN port. Also pick this option if you are not using generator.",1:"Grid port - also called microgrid mode"},telemetry:{model:"40104",block:"fixed",point:"LinkedPort"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"LinkedPort"}},command_id:"Generator.LinkedPort"},{title:"Battery Charge Current Limit",help:"Sets the maximum DC current the inverter will send to the battery when charging from the generator.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Charge Current (Adc)",arg:"Current",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"BatteryChargeCurrentLimit"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"BatteryChargeCurrentLimit"}},command_id:"Generator.BatteryChargeCurrentLimit"},{title:"Generator Rated Power",help:"Specify the generator's continuous rated output power.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Rated Power (kW)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"GeneratorRatedPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorRatedPower"}},command_id:"Generator.GeneratorRatedPower"},{title:"Generator Cool-Down Time",help:"Sets the time the generator continues running after charging stops to allow for safe cooling.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Cool-Down Time (min)",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GeneratorCoolDownTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorCoolDownTime"}},command_id:"Generator.GeneratorCoolDownTime"},{title:"Generator Start/Stop SOC",help:"Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"Generator starts when battery drops to this level",longdescription:"",unit:"%",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socGenStart"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"Generator stops when battery charges to this level",longdescription:"",unit:"%",range:{min:5,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socGenEnd"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorSOC"}},command_id:"Generator.GeneratorSOC"},{title:"Generator Contactor Status",help:"Indicates the current state of the generator control contactor.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Contactor State",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"OFF",1:"ON"},friendly_meanings:{0:"Closed / On",1:"Open / Off"},telemetry:{model:"40101",block:"fixed",point:"genDryContactState"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GenDryContact"}},command_id:"Generator.GenDryContact"},{title:"Battery Quick Charge with Generator",help:"Start the generator to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Stop quick charge",1:"Start quick charge"},telemetry:{model:"40104",block:"fixed",point:"StartGeneratorExercise"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"StartGeneratorExercise"}},command_id:"Generator.StartGeneratorExercise"},{title:"Generator Boost",help:"Enables dynamic adjustment of generator charging power for faster battery recovery when needed.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"GeneratorBoost"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorBoost"}},command_id:"Generator.GeneratorBoost"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Generator Charge Mode",help:"Selects how the generator charges the battery. When enabled, the generator will charge the battery automatically based on voltage or SOC.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Mode",arg:"GenChg",dtype:"enum",description:"",longdescription:"",meanings:{0:"Based on SOC",1:"Based on Voltage"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.GenChg"},{title:"Generator Charge Start Voltage",help:"Sets the battery voltage at which the generator begins charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Start Voltage",arg:"GenChgStartVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:194,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgStartVolt"},{title:"Generator Charge End Voltage",help:"Sets the battery voltage at which the generator stops charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge End Voltage",arg:"GenChgEndVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:195,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgEndVolt"}]},{title:"Generator Exercise",visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Exercise Schedule",help:"Configure a recurring schedule for generator exercise runs. Select the day of the week and time when the generator should run automatically.",element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Day of Week",arg:"DayOfWeek",dtype:"enum",description:"",longdescription:"",meanings:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23}},{name:"Minute",arg:"Minute",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59}}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Plan",Element:"GeneratorExercise"}},command_id:"CGI.GeneratorExercise",widget:"generator-exercise",showRefresh:!0,showSetButton:!0}]}]}]},{themeName:"AC Coupled PV",sections:[{sectionTitle:"AC Coupled PV",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"AC Coupled PV",help:"Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"AC Coupled PV Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"ACCoupledPV"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCoupledPV"}},command_id:"ACCoupledPV.ACCoupledPV"},{title:"AC Coupled PV Start/Stop SOC",help:"Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"AC Coupled PV begins charging when SOC drops to this level",longdescription:"",unit:"%",range:{min:0,max:100},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOn"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"AC Coupled PV stops charging when SOC reaches this level",longdescription:"",unit:"%",range:{min:0,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOff"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCouplePVSOC"}},command_id:"ACCoupledPV.ACCouplePVSOC"}]}]}]},{themeName:"Smart Load",sections:[{sectionTitle:"Smart Load",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Use Smart Load",help:"Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disabled",1:"Enabled"},telemetry:{model:"40104",block:"fixed",point:"SmartLoad"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoad"}},command_id:"LoadShedding.SmartLoad"},{title:"Smart Load On-Grid Behavior",help:"Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"On-Grid Always-On Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Follow normal rules",1:"Always On When Grid Present"},telemetry:{model:"40104",block:"fixed",point:"OnGridAlwaysOn"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"OnGridAlwaysOn"}},command_id:"LoadShedding.OnGridAlwaysOn"},{title:"Smart Load Start Power",help:"Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"PV Power Above (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"StartPVPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"StartPVPower"}},command_id:"LoadShedding.StartPVPower"},{title:"Smart Load SOC Limits",help:"Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start When Battery SOC Is Above (%)",arg:"OnSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},less_than:"OffSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOnSoc"}},{name:"Stop When Battery SOC Is Below (%)",arg:"OffSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},greater_than:"OnSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoadSOC"}},command_id:"LoadShedding.SmartLoadSOC"}]}]}]}],_b={themes:xb},fa=[{id:"envy-04237218B0",label:"⭐ Envy - 04237218B0",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237218B0"},modbusSlaveId:1},{id:"envy-04237219C3",label:"Envy - 04237219C3",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237219C3"},modbusSlaveId:2}],vb=void 0;function wb(e,t){const[n,l]=$.useState(e),[i,a]=$.useState(t),[r,s]=$.useState(!1),[c,d]=$.useState(null);return $.useEffect(()=>{},[]),{pageRegistry:n,pageLookup:i,isLoading:r,loadError:c,themeFile:vb}}function Cb(){const[e,t]=$.useState("");return $.useEffect(()=>{const n=()=>{const l=document.querySelectorAll('[id^="theme-"]');let i="";l.forEach(a=>{const r=a.getBoundingClientRect();r.top<=window.innerHeight*.3&&r.bottom>0&&(i=a.id)}),i&&i!==e&&t(i)};return n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[e]),e}function Sb(){const[e,t]=$.useState(""),n=$.useCallback((l,i)=>{var r,s,c,d;if(!i.trim())return{matches:!0,helpTextMatch:!1};const a=i.toLowerCase();if((r=l.title)!=null&&r.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1};if((s=l.help)!=null&&s.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!0};for(const u of l.entries){if((c=u.name)!=null&&c.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1};if(u.friendly_meanings){for(const p of Object.values(u.friendly_meanings))if(p.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1}}if((d=u.description)!=null&&d.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1}}return{matches:!1,helpTextMatch:!1}},[]);return{searchQuery:e,setSearchQuery:t,pointMatchesSearch:n}}function Lb({themes:e,activeSection:t,selectedEquipmentId:n,onEquipmentChange:l,equipmentOptions:i}){return o.jsxs("aside",{className:"w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-[11px] text-slate-500 uppercase font-medium mb-1 block",children:"Equipment"}),o.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800",value:n,onChange:a=>l(a.target.value),children:i.map(a=>o.jsx("option",{value:a.id,children:a.label},a.id))})]}),o.jsxs("nav",{className:"text-sm text-slate-800",children:[o.jsx("div",{className:"text-emerald-600 font-semibold mb-2",children:"Navigation"}),o.jsxs("div",{className:"flex flex-col gap-3",children:[e.map((a,r)=>{const s=`theme-${r}`,c=t===s||t.startsWith(`${s}-section`);return o.jsxs("div",{children:[o.jsxs("div",{className:"relative",children:[c&&o.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r"}),o.jsx("button",{className:`font-semibold text-xs uppercase tracking-wide mb-1 px-2 hover:text-emerald-600 transition-colors w-full text-left ${c?"text-emerald-600":"text-slate-900"}`,onClick:()=>{var d;(d=document.getElementById(s))==null||d.scrollIntoView({behavior:"smooth",block:"start"})},children:a.themeName})]}),o.jsx("ul",{className:"pl-2 flex flex-col gap-1 text-slate-700",children:a.sections.map((d,u)=>{const p=`${s}-section-${u}`,f=t===p;return o.jsxs("li",{className:"relative",children:[f&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),o.jsx("button",{className:`px-2 py-1 hover:bg-slate-50 rounded text-xs w-full text-left transition-colors ${f?"text-blue-600 font-medium bg-blue-50":"text-slate-700"}`,onClick:()=>{var m;(m=document.getElementById(p))==null||m.scrollIntoView({behavior:"smooth",block:"start"})},children:d.sectionTitle})]},`${d.sectionTitle}-${u}`)})})]},`${a.themeName}-${r}`)}),!e.length&&o.jsx("div",{className:"text-xs text-slate-500",children:"No themes defined."})]})]})]})}function kb({searchQuery:e,onSearchChange:t,lastUpdatedLabel:n}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-xs text-slate-500",children:["Last Updated At: ",n]}),o.jsx("div",{className:"flex flex-col md:flex-row md:items-start gap-3 md:gap-4",children:o.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[o.jsx("div",{className:"text-xl font-semibold text-slate-900 leading-tight",children:"Site Configuration"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("div",{className:"relative flex-1 max-w-md",children:[o.jsx("input",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800",placeholder:"Search…",value:e,onChange:l=>t(l.target.value)}),e&&o.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",onClick:()=>t(""),title:"Clear search",children:"✕"})]}),o.jsxs("button",{className:"text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1",children:[o.jsx("span",{children:"⟳"}),o.jsx("span",{children:"Refresh"})]})]})]})})]})}function Pb(e){const t={};if(e.widget==="generator-exercise")return e.entries.forEach(i=>{i.dtype,t[i.arg]=""}),t;const n=e.entries.filter(i=>i.dtype==="Number"&&i.range!==void 0),l=n.length>=2;return e.entries.forEach((i,a)=>{var r,s;if(i.value!==void 0){t[i.arg]=i.dtype==="Number"&&i.value!==""?Number(i.value):i.value;return}if(i.dtype==="Number"){const c=i.range;if(!c){t[i.arg]=0;return}if(l){const d=c.max-c.min,u=a/Math.max(n.length-1,1);i.less_than?t[i.arg]=Math.round(c.min+d*.3):i.greater_than?t[i.arg]=Math.round(c.min+d*.7):t[i.arg]=Math.round(c.min+d*u)}else t[i.arg]=c.min;return}if(i.dtype==="enum"){const c=Object.keys(i.meanings??{})[0];if(c){const d=((r=i.friendly_meanings)==null?void 0:r[c])??((s=i.meanings)==null?void 0:s[c])??"";t[i.arg]=d}else t[i.arg]="";return}if(i.dtype&&i.dtype.startsWith("bitfield")){const c={};i.meanings&&Object.keys(i.meanings).forEach(d=>{c[d]=!1}),t[i.arg]=c;return}t[i.arg]=""}),t}function Db(e,t){const n=e.entries.some(i=>{var a;return(a=i.protocol)==null?void 0:a.matter});let l;return n?l=e.entries.filter(i=>{var a;return(a=i.protocol)==null?void 0:a.matter}).map(i=>({MEP:i.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:i.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:i.protocol.matter.Element||e.protocol.matter.Element})):l=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:l,thingId:t}}}function Tb(e,t,n){const l=e.entries.some(a=>{var r;return(r=a.protocol)==null?void 0:r.matter});let i;return l?i=e.entries.filter(a=>{var r;return(r=a.protocol)==null?void 0:r.matter}).map(a=>({MEP:a.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:a.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:a.protocol.matter.Element||e.protocol.matter.Element,arguments:{[a.arg]:t[a.arg]}})):i=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:t}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:e.element_type==="service"||e.access==="Invoke"?"Invoke":"Write",data:{Elements:i,thingId:n}}}function Nb(e,t){const l=e.protocol.modbus.register_type===3?3:4;return{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Read",timeout:5,data:{type:"RTU",uartPort:1,slaveId:t,address:e.protocol.modbus.address,function:l,registerNumber:e.protocol.modbus.size}}}function Ab(e,t,n){var r;const l=e.protocol.modbus.size>1?16:6,i=(r=e.entries[0])==null?void 0:r.arg;let a=i?t[i]:0;return e.protocol.modbus&&typeof a=="number"&&(a=Math.round(a)),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:n,address:e.protocol.modbus.address,function:l,value:a}}}function Eb(e,t){return{version:"1.0",requestId:Date.now(),method:"Read",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,Element:e.protocol.cgi.Element,thingId:t}}}function Vb(e,t,n){const l=t.DayOfWeek!==""&&t.DayOfWeek!==null&&t.DayOfWeek!==void 0?typeof t.DayOfWeek=="number"?t.DayOfWeek:parseInt(String(t.DayOfWeek),10):0,i=t.Hour!==""&&t.Hour!==null&&t.Hour!==void 0?typeof t.Hour=="number"?t.Hour:parseInt(String(t.Hour),10):0,r=`${t.Minute!==""&&t.Minute!==null&&t.Minute!==void 0?typeof t.Minute=="number"?t.Minute:parseInt(String(t.Minute),10):0} ${i} * * ${l}`;return{version:"1.0",requestId:Date.now(),method:"Invoke",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,cronTimer:r,Element:e.protocol.cgi.Element,thingId:n}}}function Rb(e,t){const n={...t},l=e.protocol.modbus!==void 0||e.protocol.cgi!==void 0;return e.entries.forEach(i=>{if(i.dtype!=="enum"||!i.meanings)return;const a=n[i.arg];if(a==null||a==="")return;const r=Object.entries(i.meanings).find(([s,c])=>{var u;const d=((u=i.friendly_meanings)==null?void 0:u[s])??c;return a===d||a===c});r&&(n[i.arg]=l?parseInt(r[0],10):r[1])}),n}function Mb(e,t){const n={...t};return e.entries.forEach(l=>{if(!l.dtype||!l.dtype.startsWith("bitfield"))return;const i=n[l.arg]||{};let a=0;Object.entries(i).forEach(([r,s])=>{s&&(a|=1<<parseInt(r,10))}),n[l.arg]=a}),n}function Gb(e,t){var i,a;const n=t.thingId,l=t.modbusSlaveId;return e.element_type==="custom"&&e.widget==="generator-exercise"&&((i=e.protocol)!=null&&i.cgi)?Eb(e,n):(a=e.protocol)!=null&&a.matter?Db(e,n):e.protocol.modbus?Nb(e,l):{}}function Fb(e,t,n){var r,s;const l=n.thingId,i=n.modbusSlaveId;let a=Rb(e,t);return a=Mb(e,a),e.element_type==="custom"&&e.widget==="generator-exercise"&&((r=e.protocol)!=null&&r.cgi)?Vb(e,a,l):(s=e.protocol)!=null&&s.matter?Tb(e,a,l):e.protocol.modbus?Ab(e,a,i):{}}function Ob(e,t){const[n,l]=$.useState(Pb(e)),i=$.useCallback((s,c)=>{l(d=>({...d,[s]:c}))},[]),a=$.useCallback(()=>Gb(e,t),[e,t]),r=$.useCallback(()=>Fb(e,n,t),[e,n,t]);return{formState:n,setFormState:l,handleFieldChange:i,handleRefresh:a,handleSet:r}}function ya(){const[e,t]=$.useState(!1),[n,l]=$.useState(null),i=$.useCallback(s=>{s!==void 0&&l(s),t(!0)},[]),a=$.useCallback(()=>{t(!1)},[]),r=$.useCallback(()=>{t(s=>!s)},[]);return{isOpen:e,data:n,open:i,close:a,toggle:r,setData:l}}const Bb=({onClick:e})=>o.jsx("button",{type:"button",onClick:e,className:"text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer",children:"i"}),Ib=()=>o.jsx("span",{className:"text-base leading-none",children:"⟳"}),jb=()=>o.jsx("span",{className:"text-base leading-none",children:"🕐"}),Ub=()=>o.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-500 border border-slate-300 font-medium",children:"Read Only"});function $b({point:e,readOnly:t,helpTextMatch:n=!1,shouldShowHistory:l,shouldShowRefresh:i,shouldShowSetButton:a,setButtonAppearance:r,onHelpClick:s,onHistoryClick:c,onRefreshClick:d,onSetClick:u}){return o.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-3",children:[o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx("div",{className:"text-slate-800 text-sm font-semibold leading-tight",children:e.title}),e.help&&o.jsxs("div",{className:"mt-0.5 relative",children:[o.jsx(Bb,{onClick:s}),n&&o.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"})]}),t&&o.jsx(Ub,{})]}),o.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l&&o.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"View historical data",onClick:c,children:o.jsx(jb,{})}),i&&o.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"Refresh from device",onClick:d,children:o.jsx(Ib,{})}),a&&o.jsx("button",{className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${r}`,disabled:t,onClick:u,children:"Set"})]})]})}function Wb({point:e,formState:t,readOnly:n,onChange:l}){const i=e.entries.find(s=>s.arg==="Sec"),a=()=>{const s=t.Hour??0,c=t.Min??0,d=(t.Year??0)+2e3,u=String(t.Mon??1).padStart(2,"0"),p=String(t.Day??1).padStart(2,"0"),f=String(s).padStart(2,"0"),m=String(c).padStart(2,"0");return`${d}-${u}-${p}T${f}:${m}`},r=s=>{const c=new Date(s),d=c.getHours(),u=c.getMinutes();l("Year",c.getFullYear()-2e3),l("Mon",c.getMonth()+1),l("Day",c.getDate()),l("Hour",d),l("Min",u),i&&l("Sec",0)};return o.jsx("div",{className:"flex flex-col gap-2",children:o.jsx("input",{type:"datetime-local",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:a(),onChange:s=>r(s.target.value)})})}const di="00:00";function mr({label:e,value:t,readOnly:n,onChange:l,onClear:i}){const a=!n&&t!==di;return o.jsxs("div",{className:"w-[150px] flex-shrink-0 flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:e}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:t,onChange:r=>l(r.target.value)}),a&&o.jsx("button",{type:"button",className:"absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700",onClick:i,"aria-label":`Clear ${e.toLowerCase()}`,children:"✕"})]})]})}function Bm({point:e,formState:t,readOnly:n,onChange:l}){const i=e.entries.find(g=>g.arg.includes("StartHour")||g.arg.includes("Start_hour")||g.arg.includes("StartTime_h")),a=e.entries.find(g=>g.arg.includes("StartMin")||g.arg.includes("Start_minute")||g.arg.includes("StartTime_m")),r=e.entries.find(g=>g.arg.includes("EndHour")||g.arg.includes("End_hour")||g.arg.includes("EndTime_h")),s=e.entries.find(g=>g.arg.includes("EndMin")||g.arg.includes("End_minute")||g.arg.includes("EndTime_m")),c=()=>{if(i&&a){const g=String(t[i.arg]??0).padStart(2,"0"),_=String(t[a.arg]??0).padStart(2,"0");return`${g}:${_}`}return di},d=()=>{if(r&&s){const g=String(t[r.arg]??0).padStart(2,"0"),_=String(t[s.arg]??0).padStart(2,"0");return`${g}:${_}`}return di},u=g=>{const[_,b]=g.split(":"),y=parseInt(_,10),h=parseInt(b,10);i&&a&&(l(i.arg,y),l(a.arg,h))},p=g=>{const[_,b]=g.split(":"),y=parseInt(_,10),h=parseInt(b,10);r&&s&&(l(r.arg,y),l(s.arg,h))},f=()=>{n||(u(di),p(di))},m=c(),x=d();return o.jsxs("div",{className:"flex items-end gap-4",children:[o.jsx(mr,{label:"Start Time",value:m,readOnly:n,onChange:u,onClear:f}),o.jsx(mr,{label:"End Time",value:x,readOnly:n,onChange:p,onClear:f})]})}function Hb({point:e,formState:t,readOnly:n,onChange:l}){const i=new Map;e.entries.forEach(d=>{const u=d.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);if(!u)return;const[,p,f,m]=u,x=parseInt(f,10);i.has(x)||i.set(x,{id:x});const g=i.get(x),_=m.toLowerCase();p.toLowerCase()==="starttime"?_==="h"?g.startHourArg=d.arg:g.startMinArg=d.arg:_==="h"?g.endHourArg=d.arg:g.endMinArg=d.arg});const a=Array.from(i.values()).sort((d,u)=>d.id-u.id);if(a.length===0)return o.jsx(Bm,{point:e,formState:t,readOnly:n,onChange:l});const r=(d,u)=>{const p=d!==void 0?t[d]:0,f=u!==void 0?t[u]:0,m=typeof p=="number"?p:parseInt(p??0,10)||0,x=typeof f=="number"?f:parseInt(f??0,10)||0;return`${String(m).padStart(2,"0")}:${String(x).padStart(2,"0")}`},s=(d,u,p)=>{const[f,m]=p.split(":"),x=parseInt(f,10),g=parseInt(m,10);u==="start"?(d.startHourArg&&l(d.startHourArg,x),d.startMinArg&&l(d.startMinArg,g)):(d.endHourArg&&l(d.endHourArg,x),d.endMinArg&&l(d.endMinArg,g))},c=d=>{n||(d.startHourArg&&l(d.startHourArg,0),d.startMinArg&&l(d.startMinArg,0),d.endHourArg&&l(d.endHourArg,0),d.endMinArg&&l(d.endMinArg,0))};return o.jsx("div",{className:"flex flex-col gap-4",children:a.map(d=>{const u=r(d.startHourArg,d.startMinArg),p=r(d.endHourArg,d.endMinArg),f=()=>c(d);return o.jsxs("div",{className:"flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3",children:[o.jsxs("div",{className:"text-xs font-semibold uppercase text-slate-600",children:["Grid Charge Window ",d.id]}),o.jsxs("div",{className:"flex items-end gap-4",children:[o.jsx(mr,{label:"Start Time",value:u,readOnly:n,onChange:m=>s(d,"start",m),onClear:f}),o.jsx(mr,{label:"End Time",value:p,readOnly:n,onChange:m=>s(d,"end",m),onClear:f})]})]},d.id)})})}function qb({formState:e,readOnly:t,onChange:n}){const l=e.DayOfWeek!==""?e.DayOfWeek:null,i=e.Hour!==""?e.Hour:null,a=e.Minute!==""?e.Minute:null,r=()=>i===null||a===null?"":`${String(i).padStart(2,"0")}:${String(a).padStart(2,"0")}`,s=u=>{if(!u){n("Hour",""),n("Minute","");return}const[p,f]=u.split(":");n("Hour",parseInt(p,10)),n("Minute",parseInt(f,10))},c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let d="No schedule configured";return l!==null&&i!==null&&a!==null&&(d=`Every ${c[l]} at ${String(i).padStart(2,"0")}:${String(a).padStart(2,"0")}`),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Day of Week"}),o.jsxs("select",{className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:l!==null?l:"",onChange:u=>n("DayOfWeek",u.target.value===""?"":Number(u.target.value)),children:[o.jsx("option",{value:"",children:"Select day..."}),c.map((u,p)=>o.jsx("option",{value:p,children:u},p))]})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Time"}),o.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:r(),onChange:u=>s(u.target.value)})]})]}),o.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-3",children:[o.jsx("div",{className:"text-xs text-slate-600 font-medium mb-1",children:"Schedule Preview"}),o.jsx("div",{className:"text-sm text-slate-800",children:d})]})]})}function zb({point:e,equipment:t,readOnly:n}){const[l,i]=$.useState(!1),[a,r]=$.useState(null),s=$.useMemo(()=>{var d;return(d=e.entries)!=null&&d.length?e.entries.map(u=>{const p=u.name||u.arg,f=u.description||u.longdescription||"Value reported by inverter firmware";return`${p}: ${f}`}):["Voltage Ride-Through Windows: IEEE 1547 Category B","Frequency Ride-Through Windows: IEEE 1547 Category B","Volt-VAR Curve: UL 1741 SA Default Profile","Frequency-Watt Behavior: Droop Enabled, 5% Slope","Anti-Islanding Method: Active (Sandia)"]},[e.entries]),c=()=>{if(!(n||l)){r(null),i(!0);try{const d=new Date,u=d.toISOString().replace(/[:.]/g,"-"),p=d.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),m=["Fortress Power Envy Inverter","UL Compliance Report","This is just a placeholder report for testing purposes.  Dont base the real implementation on this.","".padEnd(20,"="),`Generated: ${p}`,`Device: ${t.label}`,"","Purpose","This report captures the active grid settings configured on the inverter so they can be shared with AHJs, utilities, or inspectors who require UL 1741 / IEEE 1547 conformance evidence.","","Key Grid Parameters",...s.map(b=>`• ${b}`),"","Statements of Compliance","- Grid support functions follow UL 1741 SA requirements for exporting inverters.","- Trip settings align with local utility specifications (for example, California Rule 21, Puerto Rico LUMA).","- Anti-islanding protections remain enabled and tested per UL procedures.","","Notes","This summary reflects the values active on the device at the time of export. Re-run the report after making configuration changes to maintain an auditable paper trail."].join(`
`),x=new Blob([m],{type:"text/plain"}),g=URL.createObjectURL(x),_=document.createElement("a");_.href=g,_.download=`ul-compliance-${t.id}-${u}.txt`,_.click(),URL.revokeObjectURL(g)}catch(d){console.error("Failed to generate UL Compliance report",d),r("Unable to generate the report. Please try again.")}finally{i(!1)}}};return o.jsxs("div",{className:"flex flex-col gap-3",children:[a&&o.jsx("div",{className:"rounded border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600",children:a}),o.jsx("button",{type:"button",className:`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition ${n||l?"border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`,disabled:n||l,onClick:c,children:l?"Preparing Report…":"Download UL Compliance Report"}),o.jsx("div",{className:"text-xs text-slate-500",children:"The downloaded text file includes device metadata, ride-through windows, and other grid-support functions so you can keep documentation for AHJ or utility reviews."})]})}function Kb({entries:e,formState:t,readOnly:n,onChange:l}){var g;const[i,a]=$.useState(null),r=$.useRef(null),s=[{bg:"bg-emerald-500",text:"text-emerald-600",border:"border-emerald-500"},{bg:"bg-rose-500",text:"text-rose-600",border:"border-rose-500"},{bg:"bg-blue-500",text:"text-blue-600",border:"border-blue-500"},{bg:"bg-purple-500",text:"text-purple-600",border:"border-purple-500"},{bg:"bg-orange-500",text:"text-orange-600",border:"border-orange-500"},{bg:"bg-pink-500",text:"text-pink-600",border:"border-pink-500"},{bg:"bg-indigo-500",text:"text-indigo-600",border:"border-indigo-500"},{bg:"bg-teal-500",text:"text-teal-600",border:"border-teal-500"},{bg:"bg-cyan-500",text:"text-cyan-600",border:"border-cyan-500"},{bg:"bg-amber-500",text:"text-amber-600",border:"border-amber-500"},{bg:"bg-lime-500",text:"text-lime-600",border:"border-lime-500"},{bg:"bg-fuchsia-500",text:"text-fuchsia-600",border:"border-fuchsia-500"}],c=(g=e[0])==null?void 0:g.range;if(!c)return null;const{min:d,max:u}=c,p=_=>{let b=d,y=u;if(_.greater_than){const h=t[_.greater_than];typeof h=="number"&&(b=Math.max(b,h+1))}if(_.less_than){const h=t[_.less_than];typeof h=="number"&&(y=Math.min(y,h-1))}return{min:b,max:y}},f=(_,b)=>{const y=p(_),h=Math.max(y.min,Math.min(y.max,b));l(_.arg,h)},m=(_,b)=>{if(n)return;b.preventDefault(),a(_);const y=r.current;if(!y)return;const h=C=>{const T=y.getBoundingClientRect(),S=C.clientX-T.left,L=Math.max(0,Math.min(100,S/T.width*100)),j=Math.round(d+L/100*(u-d));f(e[_],j)},v=()=>{a(null),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",v)},x=e.length>=8?"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4":"grid-cols-2";return o.jsxs("div",{className:"flex flex-col gap-3 text-sm",children:[o.jsx("div",{className:`grid ${x} gap-3`,children:e.map((_,b)=>{const y=s[b%s.length],h=t[_.arg]??d,v=p(_);return o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsxs("div",{className:`text-[11px] uppercase font-semibold flex items-center gap-1.5 ${y.text}`,children:[o.jsx("span",{className:`w-2 h-2 rounded-full ${y.bg}`}),o.jsx("span",{children:_.name??""}),_.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase ml-auto",children:_.unit})]}),o.jsx("input",{type:"number",className:`w-full rounded border ${y.border} bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500`,disabled:n,value:h,min:v.min,max:v.max,onChange:C=>{const T=C.target.value===""?v.min:Number(C.target.value);f(_,T)}})]},_.arg)})}),o.jsxs("div",{className:"relative w-full pt-2 pb-3",children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-2",children:[o.jsx("span",{children:d}),o.jsx("span",{children:u})]}),o.jsxs("div",{className:"relative overflow-hidden",ref:r,children:[o.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full -translate-y-1/2"}),o.jsx("div",{className:"relative overflow-hidden",style:{height:"24px"},children:e.map((_,b)=>{const y=s[b%s.length],h=t[_.arg]??d,v=(h-d)/(u-d)*100,C=e.length-b,T=i===b?100:C;return o.jsx("div",{children:o.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 ${n?"cursor-not-allowed":"cursor-grab active:cursor-grabbing"}`,style:{left:`${v}%`,transform:"translate(-50%, -50%)",width:"40px",height:"24px",zIndex:T},onMouseDown:S=>m(b,S),children:o.jsx("div",{className:`absolute top-1/2 left-1/2 w-5 h-5 rounded-full ${y.bg} border-2 border-white shadow-lg pointer-events-none transition-shadow`,style:{transform:"translate(-50%, -50%)",zIndex:1,boxShadow:i===b?"0 0 0 3px rgba(0,0,0,0.1)":void 0},title:_.name?`${_.name}: ${h}`:String(h)})})},_.arg)})})]})]})]})}function Qb({entry:e,value:t,onChange:n,readOnly:l,point:i}){var x,g,_,b,y,h,v;const a="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",r=e.dtype==="enum"||e.dtype&&e.dtype.startsWith("bitfield")?"col-span-full flex flex-col gap-1 text-sm":"flex flex-col gap-1 text-sm";if(e.dtype&&e.dtype.startsWith("bitfield")&&e.meanings){const C=t||{},T=S=>{const L={...C,[S]:!C[S]};n(L)};return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name??""}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("div",{className:"flex flex-col gap-2 py-1",children:Object.entries(e.meanings).map(([S,L])=>o.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:C[S]||!1,onChange:()=>T(S)}),o.jsx("span",{className:"text-sm text-slate-800",children:L})]},S))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}if(e.dtype==="enum"&&e.meanings){const C=Object.entries(e.meanings).map(([L,j])=>{var W;const N=((W=e.friendly_meanings)==null?void 0:W[L])??j;return{wireVal:L,friendly:N}});if(C.length<=3)return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("div",{className:"flex flex-col gap-2 py-1",children:C.map(L=>o.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[o.jsx("input",{type:"radio",name:e.arg,className:"w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:t===L.friendly,onChange:()=>n(L.friendly)}),o.jsx("span",{className:"text-sm text-slate-800",children:L.friendly})]},L.wireVal))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]});const T=C.reduce((L,j)=>j.friendly.length>L.length?j.friendly:L,""),S=Math.min(Math.max(T.length*8.5+50,220),480);return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name??""}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",style:{minWidth:`${S}px`,maxWidth:"100%"},disabled:l,value:t??"",onChange:L=>n(L.target.value),children:C.map(L=>o.jsx("option",{value:L.friendly,children:L.friendly},L.wireVal))}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}const s=e.dtype==="Number",c=s&&e.range!==void 0,d=((x=i==null?void 0:i.protocol)==null?void 0:x.modbus)!==void 0,u=(_=(g=i==null?void 0:i.protocol)==null?void 0:g.modbus)==null?void 0:_.scale_factor,p=d&&u!==void 0&&s,f=p&&t!==null&&t!==void 0&&t!==""?Number(t)*u:t,m=C=>{if(s){const T=C===""?"":Number(C);if(p&&T!==""){const S=Math.round(T/u);n(S)}else n(T)}else n(C)};return o.jsxs("div",{className:r,children:[o.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[o.jsx("span",{children:e.name}),e.unit&&o.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("input",{type:s?"number":"text",className:c?"w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500":a,disabled:l,value:f??"",min:(b=e.range)==null?void 0:b.min,max:(y=e.range)==null?void 0:y.max,onChange:C=>m(C.target.value)}),c&&o.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.min}),o.jsx("input",{type:"range",className:"flex-1",disabled:l,value:f??e.range.min,min:(h=e.range)==null?void 0:h.min,max:(v=e.range)==null?void 0:v.max,onChange:C=>{const T=Number(C.target.value);if(p){const S=Math.round(T/u);n(S)}else n(T)}}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.max})]})]}),e.description&&o.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&o.jsx("div",{className:"text-xs text-slate-400 leading-snug",children:e.longdescription})]})}function Yb({point:e,formState:t,readOnly:n,isInvoke:l,setButtonAppearance:i,onChange:a,onInvokeClick:r,equipment:s}){const c=e.entries.filter(u=>u.dtype==="Number"&&u.range!==void 0),d=!e.widget&&c.length>=2&&c.length===e.entries.length;return o.jsxs(o.Fragment,{children:[e.widget==="datetime"?o.jsx(Wb,{point:e,formState:t,readOnly:n,onChange:a}):e.widget==="timerange-multi"?o.jsx(Hb,{point:e,formState:t,readOnly:n,onChange:a}):e.widget==="timerange"?o.jsx(Bm,{point:e,formState:t,readOnly:n,onChange:a}):e.widget==="generator-exercise"?o.jsx(qb,{formState:t,readOnly:n,onChange:a}):e.widget==="ul-compliance-report"?o.jsx(zb,{point:e,equipment:s,readOnly:n}):d?o.jsx(Kb,{entries:c,formState:t,readOnly:n,onChange:a}):o.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4",children:e.entries.map(u=>o.jsx(Qb,{entry:u,value:t[u.arg],readOnly:n,point:e,onChange:p=>a(u.arg,p)},u.arg))}),l&&e.widget!=="generator-exercise"&&e.widget!=="ul-compliance-report"&&e.showInvokeButton!==!1&&o.jsx("div",{className:"mt-4 flex items-center gap-2",children:o.jsx("button",{type:"button",className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${i}`,disabled:n,onClick:r,children:e.invokeButtonText||"Invoke"})})]})}const Xb={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl"};function Ec({isOpen:e,onClose:t,title:n,icon:l,children:i,showFooter:a=!0,footerContent:r,maxWidth:s="lg"}){if($.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&t()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[e,t]),!e)return null;const c=o.jsx("div",{className:"flex justify-end p-4 border-t border-slate-200 bg-slate-50",children:o.jsx("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",onClick:t,children:"Close"})});return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4",onClick:t,children:o.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${Xb[s]} border border-slate-300 overflow-hidden`,onClick:d=>d.stopPropagation(),children:[o.jsxs("div",{className:"flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[l,o.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:n})]}),o.jsx("button",{type:"button",className:"text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1",onClick:t,children:"✕"})]}),o.jsx("div",{className:"p-5 max-h-[60vh] overflow-y-auto",children:i}),a&&(r||c)]})})}function Jb({title:e,content:t,isOpen:n,onClose:l}){const i=r=>r.split(/(\*\*[^*]+\*\*)/g).map((c,d)=>c.startsWith("**")&&c.endsWith("**")?o.jsx("strong",{className:"font-semibold text-slate-900",children:c.slice(2,-2)},d):o.jsx("span",{children:c},d)),a=o.jsx("div",{className:"text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium",children:"i"});return o.jsx(Ec,{isOpen:n,onClose:l,title:e,icon:a,children:o.jsx("div",{className:"text-sm text-slate-700 leading-relaxed whitespace-pre-wrap",children:i(t)})})}function Zb({point:e,isOpen:t,onClose:n}){const l=[];e.entries.forEach(a=>{var r,s;if((r=a.telemetry)!=null&&r.model&&((s=a.telemetry)!=null&&s.point)){const c=`${a.telemetry.model}.${a.telemetry.point}`;l.includes(c)||l.push(c)}});const i=o.jsx("span",{className:"text-slate-500 text-xl",children:"🕐"});return o.jsxs(Ec,{isOpen:t,onClose:n,title:"Historical Data",icon:i,children:[o.jsx("div",{className:"text-sm text-slate-700 leading-relaxed mb-4",children:"In the real UI, this button would link you to the historical data page showing the last 24 hours of data for the following telemetry points:"}),l.length>0?o.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4",children:[o.jsx("div",{className:"text-xs font-semibold text-slate-600 uppercase mb-2",children:"Telemetry Points"}),o.jsx("div",{className:"flex flex-col gap-2",children:l.map((a,r)=>o.jsx("div",{className:"font-mono text-sm text-emerald-600 bg-white border border-emerald-200 rounded px-3 py-2",children:a},r))})]}):o.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800",children:"No telemetry points configured for this setting."})]})}function au({isOpen:e,onClose:t,title:n,payload:l,type:i="set"}){const a=i==="refresh"?o.jsx("span",{children:"⟳"}):o.jsx("span",{children:"📤"});return o.jsxs(Ec,{isOpen:e,onClose:t,title:n,icon:a,maxWidth:"xl",children:[o.jsx("div",{className:"text-sm text-slate-700 mb-3",children:"This is a preview of the command that would be sent:"}),o.jsx("pre",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800",children:JSON.stringify(l,null,2)})]})}function ru({point:e,helpTextMatch:t=!1,equipment:n}){const{formState:l,handleFieldChange:i,handleRefresh:a,handleSet:r}=Ob(e,n),s=ya(),c=ya(),d=ya(),u=ya(),p=()=>s.open(),f=()=>c.open(),m=()=>{const S=a();u.open(S)},x=()=>{const S=r();d.open(S)},_=(typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service",b=e.readOnly||e.access==="R",y=b?"border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-400 bg-white text-slate-700 hover:bg-slate-50",h=e.entries.some(S=>{var L,j;return((L=S.telemetry)==null?void 0:L.model)&&((j=S.telemetry)==null?void 0:j.point)}),v=e.showHistory!==void 0?e.showHistory:h&&!_,C=_?e.showRefresh===!0:e.showRefresh!==!1,T=e.showSetButton!==void 0?e.showSetButton:!_;return o.jsxs("div",{className:"rounded-xl border border-slate-300 bg-white p-4 shadow-sm",children:[o.jsx($b,{point:e,readOnly:b,helpTextMatch:t,shouldShowHistory:v,shouldShowRefresh:C,shouldShowSetButton:T,setButtonAppearance:y,onHelpClick:p,onHistoryClick:f,onRefreshClick:m,onSetClick:x}),o.jsx(Yb,{point:e,formState:l,readOnly:b,isInvoke:_,setButtonAppearance:y,onChange:i,onInvokeClick:x,equipment:n}),o.jsx(Jb,{title:e.title,content:e.help||"",isOpen:s.isOpen,onClose:s.close}),o.jsx(Zb,{point:e,isOpen:c.isOpen,onClose:c.close}),o.jsx(au,{title:"Command Preview",payload:d.data,isOpen:d.isOpen,onClose:d.close}),o.jsx(au,{title:"Read Command Preview",payload:u.data,isOpen:u.isOpen,onClose:u.close,type:"refresh"})]})}function eh({subsection:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){const[i,a]=$.useState(!e.collapsedByDefault),r=e.points.map(c=>({point:c,searchResult:n(c,t)})).filter(({searchResult:c})=>c.matches);if(r.length===0)return null;const s=t.trim()?!0:i;return e.collapsedByDefault?o.jsxs("div",{className:"border border-slate-300 bg-white rounded-xl shadow-sm mb-8",children:[o.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-2 text-left",onClick:()=>a(c=>!c),children:[o.jsx("span",{className:"text-slate-800 text-sm font-semibold uppercase tracking-wide",children:e.title||"Advanced"}),o.jsx("span",{className:"text-slate-500 text-xs",children:s?"▾":"▸"})]}),s&&o.jsx("div",{className:"p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:c,searchResult:d})=>o.jsx(ru,{point:c,helpTextMatch:d.helpTextMatch,equipment:l},c.command_id))})]}):o.jsxs("div",{className:"mb-6",children:[e.title&&o.jsx("div",{className:"text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2",children:o.jsx("span",{children:e.title})}),o.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:c,searchResult:d})=>o.jsx(ru,{point:c,helpTextMatch:d.helpTextMatch,equipment:l},c.command_id))})]})}function th({section:e,sectionId:t,searchQuery:n,pointMatchesSearch:l,equipment:i}){const[a,r]=$.useState(!0),s=e.subsections.some(c=>c.points.some(d=>l(d,n).matches));return n.trim()&&!s?null:o.jsxs("section",{className:"bg-white/0",id:t,children:[o.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors",onClick:()=>r(!a),children:[o.jsx("span",{children:e.sectionTitle}),o.jsx("span",{className:"text-slate-500 text-sm",children:a?"▾":"▸"})]}),a&&o.jsx("div",{children:e.subsections.map((c,d)=>o.jsx(eh,{subsection:c,searchQuery:n,pointMatchesSearch:l,equipment:i},d))})]})}const ou=[{bg:"bg-brand-green/10",border:"border-brand-green/30",text:"text-slate-900",hover:"hover:bg-brand-green/20"},{bg:"bg-brand-teal/10",border:"border-brand-teal/30",text:"text-slate-900",hover:"hover:bg-brand-teal/20"},{bg:"bg-brand-emerald/10",border:"border-brand-emerald/30",text:"text-slate-900",hover:"hover:bg-brand-emerald/20"},{bg:"bg-brand-cyan/10",border:"border-brand-cyan/30",text:"text-slate-900",hover:"hover:bg-brand-cyan/20"},{bg:"bg-brand-mint/10",border:"border-brand-mint/30",text:"text-slate-900",hover:"hover:bg-brand-mint/20"},{bg:"bg-brand-forest/10",border:"border-brand-forest/30",text:"text-slate-900",hover:"hover:bg-brand-forest/20"},{bg:"bg-brand-sage/10",border:"border-brand-sage/30",text:"text-slate-900",hover:"hover:bg-brand-sage/20"}];function nh({theme:e,themeId:t,themeIndex:n,searchQuery:l,pointMatchesSearch:i,equipment:a}){const[r,s]=$.useState(!0),c=ou[n%ou.length],d=e.sections.some(u=>u.subsections.some(p=>p.points.some(f=>i(f,l).matches)));return l.trim()&&!d?null:o.jsxs("div",{className:"bg-white/0",id:t,children:[o.jsxs("button",{className:`w-full flex items-center justify-between ${c.bg} ${c.text} text-2xl font-bold mb-6 border-b ${c.border} pb-3 px-4 py-2 rounded-lg ${c.hover} transition-all`,onClick:()=>s(!r),children:[o.jsx("span",{children:e.themeName}),o.jsx("span",{className:"text-slate-500 text-lg",children:r?"▾":"▸"})]}),r&&o.jsx("div",{className:"flex flex-col gap-10",children:e.sections.map((u,p)=>{const f=`${t}-section-${p}`;return o.jsx(th,{section:u,sectionId:f,searchQuery:l,pointMatchesSearch:i,equipment:a},`${u.sectionTitle}-${p}`)})})]})}function lh({themes:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){return o.jsxs("div",{className:"flex flex-col gap-16",children:[e.map((i,a)=>{const r=`theme-${a}`;return o.jsx(nh,{theme:i,themeId:r,themeIndex:a,searchQuery:t,pointMatchesSearch:n,equipment:l},`${i.themeName}-${a}`)}),!e.length&&o.jsx("div",{className:"text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60",children:"This page does not define any themes yet."})]})}function ih(e){var n,l,i,a,r,s,c;if(!e)return;if(!Array.isArray(e.themes)){console.error("[SchemaTest] page.themes is missing or not an array");return}e.themes.forEach((d,u)=>{if(!Array.isArray(d.sections)){console.error(`[SchemaTest] theme ${u} (${d.themeName}) has no sections array`);return}d.sections.forEach((p,f)=>{Array.isArray(p.subsections)||console.error(`[SchemaTest] theme ${u} / section ${f} (${p.sectionTitle}) has no subsections array`)}),d.sections.forEach((p,f)=>{var m;(m=p.subsections)==null||m.forEach((x,g)=>{if(!Array.isArray(x.points)){console.error(`[SchemaTest] theme ${u} / section ${f} / subsection ${g} (${x.title}) has no points array`);return}x.points.forEach((_,b)=>{if(!Array.isArray(_.entries)){console.error(`[SchemaTest] theme ${u} / section ${f} / subsection ${g} / point ${b} (${_.title}) has no entries array`);return}_.entries.forEach((y,h)=>{const v=["enum","String","Number"],C=y.dtype&&typeof y.dtype=="string"&&y.dtype.startsWith("bitfield");!v.includes(y.dtype)&&!C&&console.error(`[SchemaTest] entry ${y.name??h} in point ${_.title} has unsupported dtype ${y.dtype}`)})})})})});const t=((c=(s=(r=(a=(i=(l=(n=e.themes)==null?void 0:n[0])==null?void 0:l.sections)==null?void 0:i[0])==null?void 0:a.subsections)==null?void 0:r[0])==null?void 0:s.points)==null?void 0:c[0])||null;t&&(t.command_id||console.error("[SchemaTest] firstPoint.command_id missing"),t.protocol||console.error("[SchemaTest] firstPoint.protocol missing"))}const ah=Object.assign({"./themes/demo_rebuilt.json":_b}),Im=Object.entries(ah).map(([e,t])=>{var a;const n=e.split("/").pop()??e,l=n.replace(/\.json$/i,""),i=((a=t.pageName)==null?void 0:a.trim())||l;return{id:l,label:i,filename:n,data:t}}).sort((e,t)=>e.label.localeCompare(t.label,void 0,{sensitivity:"base"})),rh=Im.reduce((e,t)=>(e[t.id]=t.data,e),{});function oh(){var y,h;const{pageRegistry:e,pageLookup:t,isLoading:n,loadError:l,themeFile:i}=wb(Im,rh),a=((y=e[0])==null?void 0:y.id)??"",[r]=$.useState(a),[s,c]=$.useState(((h=fa[0])==null?void 0:h.id)??""),d=Cb(),{searchQuery:u,setSearchQuery:p,pointMatchesSearch:f}=Sb(),m=$.useMemo(()=>new Date(Date.now()-15*60*1e3),[]),x=$.useMemo(()=>m.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),[m]),g=r&&t[r]||a&&t[a]||null,_=$.useMemo(()=>fa.find(v=>v.id===s)||fa[0],[s]);if($.useEffect(()=>{ih(g)},[g]),n)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsx("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:"Loading theme file..."})});if(l)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700",children:[o.jsx("div",{className:"font-semibold mb-2",children:"Error loading theme file"}),o.jsx("div",{children:l}),o.jsxs("div",{className:"mt-4 text-xs text-slate-500",children:["File path: ",o.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5",children:i})]})]})});if(!g)return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:["No pages found in ",o.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"src/themes"}),". Add a JSON page file to get started."]})});const b=g.themes??[];return o.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:o.jsxs("div",{className:"max-w-[1400px] mx-auto flex gap-4",children:[o.jsx(Lb,{themes:b,activeSection:d,selectedEquipmentId:s,onEquipmentChange:c,equipmentOptions:fa}),o.jsxs("main",{className:"flex-1 flex flex-col gap-6",children:[o.jsx(kb,{searchQuery:u,onSearchChange:p,lastUpdatedLabel:x}),o.jsx(lh,{themes:b,searchQuery:u,pointMatchesSearch:f,equipment:_})]})]})})}const Vc=Symbol.for("yaml.alias"),Ds=Symbol.for("yaml.document"),_n=Symbol.for("yaml.map"),jm=Symbol.for("yaml.pair"),$t=Symbol.for("yaml.scalar"),Ul=Symbol.for("yaml.seq"),Lt=Symbol.for("yaml.node.type"),Pn=e=>!!e&&typeof e=="object"&&e[Lt]===Vc,Yn=e=>!!e&&typeof e=="object"&&e[Lt]===Ds,$l=e=>!!e&&typeof e=="object"&&e[Lt]===_n,we=e=>!!e&&typeof e=="object"&&e[Lt]===jm,fe=e=>!!e&&typeof e=="object"&&e[Lt]===$t,Wl=e=>!!e&&typeof e=="object"&&e[Lt]===Ul;function ke(e){if(e&&typeof e=="object")switch(e[Lt]){case _n:case Ul:return!0}return!1}function De(e){if(e&&typeof e=="object")switch(e[Lt]){case Vc:case _n:case $t:case Ul:return!0}return!1}const Um=e=>(fe(e)||ke(e))&&!!e.anchor,nt=Symbol("break visit"),$m=Symbol("skip children"),Ut=Symbol("remove node");function Xn(e,t){const n=Wm(t);Yn(e)?hl(null,e.contents,n,Object.freeze([e]))===Ut&&(e.contents=null):hl(null,e,n,Object.freeze([]))}Xn.BREAK=nt;Xn.SKIP=$m;Xn.REMOVE=Ut;function hl(e,t,n,l){const i=Hm(e,t,n,l);if(De(i)||we(i))return qm(e,l,i),hl(e,i,n,l);if(typeof i!="symbol"){if(ke(t)){l=Object.freeze(l.concat(t));for(let a=0;a<t.items.length;++a){const r=hl(a,t.items[a],n,l);if(typeof r=="number")a=r-1;else{if(r===nt)return nt;r===Ut&&(t.items.splice(a,1),a-=1)}}}else if(we(t)){l=Object.freeze(l.concat(t));const a=hl("key",t.key,n,l);if(a===nt)return nt;a===Ut&&(t.key=null);const r=hl("value",t.value,n,l);if(r===nt)return nt;r===Ut&&(t.value=null)}}return i}async function Mr(e,t){const n=Wm(t);Yn(e)?await xl(null,e.contents,n,Object.freeze([e]))===Ut&&(e.contents=null):await xl(null,e,n,Object.freeze([]))}Mr.BREAK=nt;Mr.SKIP=$m;Mr.REMOVE=Ut;async function xl(e,t,n,l){const i=await Hm(e,t,n,l);if(De(i)||we(i))return qm(e,l,i),xl(e,i,n,l);if(typeof i!="symbol"){if(ke(t)){l=Object.freeze(l.concat(t));for(let a=0;a<t.items.length;++a){const r=await xl(a,t.items[a],n,l);if(typeof r=="number")a=r-1;else{if(r===nt)return nt;r===Ut&&(t.items.splice(a,1),a-=1)}}}else if(we(t)){l=Object.freeze(l.concat(t));const a=await xl("key",t.key,n,l);if(a===nt)return nt;a===Ut&&(t.key=null);const r=await xl("value",t.value,n,l);if(r===nt)return nt;r===Ut&&(t.value=null)}}return i}function Wm(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function Hm(e,t,n,l){var i,a,r,s,c;if(typeof n=="function")return n(e,t,l);if($l(t))return(i=n.Map)==null?void 0:i.call(n,e,t,l);if(Wl(t))return(a=n.Seq)==null?void 0:a.call(n,e,t,l);if(we(t))return(r=n.Pair)==null?void 0:r.call(n,e,t,l);if(fe(t))return(s=n.Scalar)==null?void 0:s.call(n,e,t,l);if(Pn(t))return(c=n.Alias)==null?void 0:c.call(n,e,t,l)}function qm(e,t,n){const l=t[t.length-1];if(ke(l))l.items[e]=n;else if(we(l))e==="key"?l.key=n:l.value=n;else if(Yn(l))l.contents=n;else{const i=Pn(l)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const sh={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},ch=e=>e.replace(/[!,[\]{}]/g,t=>sh[t]);class Ye{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Ye.defaultYaml,t),this.tags=Object.assign({},Ye.defaultTags,n)}clone(){const t=new Ye(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new Ye(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Ye.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Ye.defaultTags);break}return t}add(t,n){this.atNextDocument&&(this.yaml={explicit:Ye.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Ye.defaultTags),this.atNextDocument=!1);const l=t.trim().split(/[ \t]+/),i=l.shift();switch(i){case"%TAG":{if(l.length!==2&&(n(0,"%TAG directive should contain exactly two parts"),l.length<2))return!1;const[a,r]=l;return this.tags[a]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,l.length!==1)return n(0,"%YAML directive should contain exactly one part"),!1;const[a]=l;if(a==="1.1"||a==="1.2")return this.yaml.version=a,!0;{const r=/^\d+\.\d+$/.test(a);return n(6,`Unsupported YAML version ${a}`,r),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(t,n){if(t==="!")return"!";if(t[0]!=="!")return n(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const r=t.slice(2,-1);return r==="!"||r==="!!"?(n(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&n("Verbatim tags must end with a >"),r)}const[,l,i]=t.match(/^(.*!)([^!]*)$/s);i||n(`The ${t} tag has no suffix`);const a=this.tags[l];if(a)try{return a+decodeURIComponent(i)}catch(r){return n(String(r)),null}return l==="!"?t:(n(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[n,l]of Object.entries(this.tags))if(t.startsWith(l))return n+ch(t.substring(l.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const n=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],l=Object.entries(this.tags);let i;if(t&&l.length>0&&De(t.contents)){const a={};Xn(t.contents,(r,s)=>{De(s)&&s.tag&&(a[s.tag]=!0)}),i=Object.keys(a)}else i=[];for(const[a,r]of l)a==="!!"&&r==="tag:yaml.org,2002:"||(!t||i.some(s=>s.startsWith(r)))&&n.push(`%TAG ${a} ${r}`);return n.join(`
`)}}Ye.defaultYaml={explicit:!1,version:"1.2"};Ye.defaultTags={"!!":"tag:yaml.org,2002:"};function zm(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const n=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(n)}return!0}function Km(e){const t=new Set;return Xn(e,{Value(n,l){l.anchor&&t.add(l.anchor)}}),t}function Qm(e,t){for(let n=1;;++n){const l=`${e}${n}`;if(!t.has(l))return l}}function dh(e,t){const n=[],l=new Map;let i=null;return{onAnchor:a=>{n.push(a),i??(i=Km(e));const r=Qm(t,i);return i.add(r),r},setAnchors:()=>{for(const a of n){const r=l.get(a);if(typeof r=="object"&&r.anchor&&(fe(r.node)||ke(r.node)))r.node.anchor=r.anchor;else{const s=new Error("Failed to resolve repeated object (this should not happen)");throw s.source=a,s}}},sourceObjects:l}}function _l(e,t,n,l){if(l&&typeof l=="object")if(Array.isArray(l))for(let i=0,a=l.length;i<a;++i){const r=l[i],s=_l(e,l,String(i),r);s===void 0?delete l[i]:s!==r&&(l[i]=s)}else if(l instanceof Map)for(const i of Array.from(l.keys())){const a=l.get(i),r=_l(e,l,i,a);r===void 0?l.delete(i):r!==a&&l.set(i,r)}else if(l instanceof Set)for(const i of Array.from(l)){const a=_l(e,l,i,i);a===void 0?l.delete(i):a!==i&&(l.delete(i),l.add(a))}else for(const[i,a]of Object.entries(l)){const r=_l(e,l,i,a);r===void 0?delete l[i]:r!==a&&(l[i]=r)}return e.call(t,n,l)}function wt(e,t,n){if(Array.isArray(e))return e.map((l,i)=>wt(l,String(i),n));if(e&&typeof e.toJSON=="function"){if(!n||!Um(e))return e.toJSON(t,n);const l={aliasCount:0,count:1,res:void 0};n.anchors.set(e,l),n.onCreate=a=>{l.res=a,delete n.onCreate};const i=e.toJSON(t,n);return n.onCreate&&n.onCreate(i),i}return typeof e=="bigint"&&!(n!=null&&n.keep)?Number(e):e}class Rc{constructor(t){Object.defineProperty(this,Lt,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}toJS(t,{mapAsMap:n,maxAliasCount:l,onAnchor:i,reviver:a}={}){if(!Yn(t))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:t,keep:!0,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof l=="number"?l:100},s=wt(this,"",r);if(typeof i=="function")for(const{count:c,res:d}of r.anchors.values())i(d,c);return typeof a=="function"?_l(a,{"":s},"",s):s}}class Gr extends Rc{constructor(t){super(Vc),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t,n){let l;n!=null&&n.aliasResolveCache?l=n.aliasResolveCache:(l=[],Xn(t,{Node:(a,r)=>{(Pn(r)||Um(r))&&l.push(r)}}),n&&(n.aliasResolveCache=l));let i;for(const a of l){if(a===this)break;a.anchor===this.source&&(i=a)}return i}toJSON(t,n){if(!n)return{source:this.source};const{anchors:l,doc:i,maxAliasCount:a}=n,r=this.resolve(i,n);if(!r){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let s=l.get(r);if(s||(wt(r,null,n),s=l.get(r)),!s||s.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(a>=0&&(s.count+=1,s.aliasCount===0&&(s.aliasCount=Oa(i,r,l)),s.count*s.aliasCount>a)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return s.res}toString(t,n,l){const i=`*${this.source}`;if(t){if(zm(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(t.implicitKey)return`${i} `}return i}}function Oa(e,t,n){if(Pn(t)){const l=t.resolve(e),i=n&&l&&n.get(l);return i?i.count*i.aliasCount:0}else if(ke(t)){let l=0;for(const i of t.items){const a=Oa(e,i,n);a>l&&(l=a)}return l}else if(we(t)){const l=Oa(e,t.key,n),i=Oa(e,t.value,n);return Math.max(l,i)}return 1}const Ym=e=>!e||typeof e!="function"&&typeof e!="object";class te extends Rc{constructor(t){super($t),this.value=t}toJSON(t,n){return n!=null&&n.keep?this.value:wt(this.value,t,n)}toString(){return String(this.value)}}te.BLOCK_FOLDED="BLOCK_FOLDED";te.BLOCK_LITERAL="BLOCK_LITERAL";te.PLAIN="PLAIN";te.QUOTE_DOUBLE="QUOTE_DOUBLE";te.QUOTE_SINGLE="QUOTE_SINGLE";const uh="tag:yaml.org,2002:";function ph(e,t,n){if(t){const l=n.filter(a=>a.tag===t),i=l.find(a=>!a.format)??l[0];if(!i)throw new Error(`Tag ${t} not found`);return i}return n.find(l=>{var i;return((i=l.identify)==null?void 0:i.call(l,e))&&!l.format})}function Bi(e,t,n){var p,f,m;if(Yn(e)&&(e=e.contents),De(e))return e;if(we(e)){const x=(f=(p=n.schema[_n]).createNode)==null?void 0:f.call(p,n.schema,null,n);return x.items.push(e),x}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:l,onAnchor:i,onTagObj:a,schema:r,sourceObjects:s}=n;let c;if(l&&e&&typeof e=="object"){if(c=s.get(e),c)return c.anchor??(c.anchor=i(e)),new Gr(c.anchor);c={anchor:null,node:null},s.set(e,c)}t!=null&&t.startsWith("!!")&&(t=uh+t.slice(2));let d=ph(e,t,r.tags);if(!d){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const x=new te(e);return c&&(c.node=x),x}d=e instanceof Map?r[_n]:Symbol.iterator in Object(e)?r[Ul]:r[_n]}a&&(a(d),delete n.onTagObj);const u=d!=null&&d.createNode?d.createNode(n.schema,e,n):typeof((m=d==null?void 0:d.nodeClass)==null?void 0:m.from)=="function"?d.nodeClass.from(n.schema,e,n):new te(e);return t?u.tag=t:d.default||(u.tag=d.tag),c&&(c.node=u),u}function fr(e,t,n){let l=n;for(let i=t.length-1;i>=0;--i){const a=t[i];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const r=[];r[a]=l,l=r}else l=new Map([[a,l]])}return Bi(l,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const ui=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class Xm extends Rc{constructor(t,n){super(t),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}clone(t){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(n.schema=t),n.items=n.items.map(l=>De(l)||we(l)?l.clone(t):l),this.range&&(n.range=this.range.slice()),n}addIn(t,n){if(ui(t))this.add(n);else{const[l,...i]=t,a=this.get(l,!0);if(ke(a))a.addIn(i,n);else if(a===void 0&&this.schema)this.set(l,fr(this.schema,i,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}deleteIn(t){const[n,...l]=t;if(l.length===0)return this.delete(n);const i=this.get(n,!0);if(ke(i))return i.deleteIn(l);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${l}`)}getIn(t,n){const[l,...i]=t,a=this.get(l,!0);return i.length===0?!n&&fe(a)?a.value:a:ke(a)?a.getIn(i,n):void 0}hasAllNullValues(t){return this.items.every(n=>{if(!we(n))return!1;const l=n.value;return l==null||t&&fe(l)&&l.value==null&&!l.commentBefore&&!l.comment&&!l.tag})}hasIn(t){const[n,...l]=t;if(l.length===0)return this.has(n);const i=this.get(n,!0);return ke(i)?i.hasIn(l):!1}setIn(t,n){const[l,...i]=t;if(i.length===0)this.set(l,n);else{const a=this.get(l,!0);if(ke(a))a.setIn(i,n);else if(a===void 0&&this.schema)this.set(l,fr(this.schema,i,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}}const mh=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function Kt(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const Fn=(e,t,n)=>e.endsWith(`
`)?Kt(n,t):n.includes(`
`)?`
`+Kt(n,t):(e.endsWith(" ")?"":" ")+n,Jm="flow",Ts="block",Ba="quoted";function Fr(e,t,n="flow",{indentAtStart:l,lineWidth:i=80,minContentWidth:a=20,onFold:r,onOverflow:s}={}){if(!i||i<0)return e;i<a&&(a=0);const c=Math.max(1+a,1+i-t.length);if(e.length<=c)return e;const d=[],u={};let p=i-t.length;typeof l=="number"&&(l>i-Math.max(2,a)?d.push(0):p=i-l);let f,m,x=!1,g=-1,_=-1,b=-1;n===Ts&&(g=su(e,g,t.length),g!==-1&&(p=g+c));for(let h;h=e[g+=1];){if(n===Ba&&h==="\\"){switch(_=g,e[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}b=g}if(h===`
`)n===Ts&&(g=su(e,g,t.length)),p=g+t.length+c,f=void 0;else{if(h===" "&&m&&m!==" "&&m!==`
`&&m!=="	"){const v=e[g+1];v&&v!==" "&&v!==`
`&&v!=="	"&&(f=g)}if(g>=p)if(f)d.push(f),p=f+c,f=void 0;else if(n===Ba){for(;m===" "||m==="	";)m=h,h=e[g+=1],x=!0;const v=g>b+1?g-2:_-1;if(u[v])return e;d.push(v),u[v]=!0,p=v+c,f=void 0}else x=!0}m=h}if(x&&s&&s(),d.length===0)return e;r&&r();let y=e.slice(0,d[0]);for(let h=0;h<d.length;++h){const v=d[h],C=d[h+1]||e.length;v===0?y=`
${t}${e.slice(0,C)}`:(n===Ba&&u[v]&&(y+=`${e[v]}\\`),y+=`
${t}${e.slice(v+1,C)}`)}return y}function su(e,t,n){let l=t,i=t+1,a=e[i];for(;a===" "||a==="	";)if(t<i+n)a=e[++t];else{do a=e[++t];while(a&&a!==`
`);l=t,i=t+1,a=e[i]}return l}const Or=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Br=e=>/^(%|---|\.\.\.)/m.test(e);function fh(e,t,n){if(!t||t<0)return!1;const l=t-n,i=e.length;if(i<=l)return!1;for(let a=0,r=0;a<i;++a)if(e[a]===`
`){if(a-r>l)return!0;if(r=a+1,i-r<=l)return!1}return!0}function vi(e,t){const n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;const{implicitKey:l}=t,i=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(Br(e)?"  ":"");let r="",s=0;for(let c=0,d=n[c];d;d=n[++c])if(d===" "&&n[c+1]==="\\"&&n[c+2]==="n"&&(r+=n.slice(s,c)+"\\ ",c+=1,s=c,d="\\"),d==="\\")switch(n[c+1]){case"u":{r+=n.slice(s,c);const u=n.substr(c+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=n.substr(c,6)}c+=5,s=c+1}break;case"n":if(l||n[c+2]==='"'||n.length<i)c+=1;else{for(r+=n.slice(s,c)+`

`;n[c+2]==="\\"&&n[c+3]==="n"&&n[c+4]!=='"';)r+=`
`,c+=2;r+=a,n[c+2]===" "&&(r+="\\"),c+=1,s=c+1}break;default:c+=1}return r=s?r+n.slice(s):n,l?r:Fr(r,a,Ba,Or(t,!1))}function Ns(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return vi(e,t);const n=t.indent||(Br(e)?"  ":""),l="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return t.implicitKey?l:Fr(l,n,Jm,Or(t,!1))}function vl(e,t){const{singleQuote:n}=t.options;let l;if(n===!1)l=vi;else{const i=e.includes('"'),a=e.includes("'");i&&!a?l=Ns:a&&!i?l=vi:l=n?Ns:vi}return l(e,t)}let As;try{As=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{As=/\n+(?!\n|$)/g}function Ia({comment:e,type:t,value:n},l,i,a){const{blockQuote:r,commentString:s,lineWidth:c}=l.options;if(!r||/\n[\t ]+$/.test(n))return vl(n,l);const d=l.indent||(l.forceBlockIndent||Br(n)?"  ":""),u=r==="literal"?!0:r==="folded"||t===te.BLOCK_FOLDED?!1:t===te.BLOCK_LITERAL?!0:!fh(n,c,d.length);if(!n)return u?`|
`:`>
`;let p,f;for(f=n.length;f>0;--f){const C=n[f-1];if(C!==`
`&&C!=="	"&&C!==" ")break}let m=n.substring(f);const x=m.indexOf(`
`);x===-1?p="-":n===m||x!==m.length-1?(p="+",a&&a()):p="",m&&(n=n.slice(0,-m.length),m[m.length-1]===`
`&&(m=m.slice(0,-1)),m=m.replace(As,`$&${d}`));let g=!1,_,b=-1;for(_=0;_<n.length;++_){const C=n[_];if(C===" ")g=!0;else if(C===`
`)b=_;else break}let y=n.substring(0,b<_?b+1:_);y&&(n=n.substring(y.length),y=y.replace(/\n+/g,`$&${d}`));let v=(g?d?"2":"1":"")+p;if(e&&(v+=" "+s(e.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){const C=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${d}`);let T=!1;const S=Or(l,!0);r!=="folded"&&t!==te.BLOCK_FOLDED&&(S.onOverflow=()=>{T=!0});const L=Fr(`${y}${C}${m}`,d,Ts,S);if(!T)return`>${v}
${d}${L}`}return n=n.replace(/\n+/g,`$&${d}`),`|${v}
${d}${y}${n}${m}`}function yh(e,t,n,l){const{type:i,value:a}=e,{actualString:r,implicitKey:s,indent:c,indentStep:d,inFlow:u}=t;if(s&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return vl(a,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return s||u||!a.includes(`
`)?vl(a,t):Ia(e,t,n,l);if(!s&&!u&&i!==te.PLAIN&&a.includes(`
`))return Ia(e,t,n,l);if(Br(a)){if(c==="")return t.forceBlockIndent=!0,Ia(e,t,n,l);if(s&&c===d)return vl(a,t)}const p=a.replace(/\n+/g,`$&
${c}`);if(r){const f=g=>{var _;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((_=g.test)==null?void 0:_.test(p))},{compat:m,tags:x}=t.doc.schema;if(x.some(f)||m!=null&&m.some(f))return vl(a,t)}return s?p:Fr(p,c,Jm,Or(t,!1))}function zi(e,t,n,l){const{implicitKey:i,inFlow:a}=t,r=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:s}=e;s!==te.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(s=te.QUOTE_DOUBLE);const c=u=>{switch(u){case te.BLOCK_FOLDED:case te.BLOCK_LITERAL:return i||a?vl(r.value,t):Ia(r,t,n,l);case te.QUOTE_DOUBLE:return vi(r.value,t);case te.QUOTE_SINGLE:return Ns(r.value,t);case te.PLAIN:return yh(r,t,n,l);default:return null}};let d=c(s);if(d===null){const{defaultKeyType:u,defaultStringType:p}=t.options,f=i&&u||p;if(d=c(f),d===null)throw new Error(`Unsupported default string type ${f}`)}return d}function Zm(e,t){const n=Object.assign({blockQuote:!0,commentString:mh,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let l;switch(n.collectionStyle){case"block":l=!1;break;case"flow":l=!0;break;default:l=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?" ":"",indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",inFlow:l,options:n}}function gh(e,t){var i;if(t.tag){const a=e.filter(r=>r.tag===t.tag);if(a.length>0)return a.find(r=>r.format===t.format)??a[0]}let n,l;if(fe(t)){l=t.value;let a=e.filter(r=>{var s;return(s=r.identify)==null?void 0:s.call(r,l)});if(a.length>1){const r=a.filter(s=>s.test);r.length>0&&(a=r)}n=a.find(r=>r.format===t.format)??a.find(r=>!r.format)}else l=t,n=e.find(a=>a.nodeClass&&l instanceof a.nodeClass);if(!n){const a=((i=l==null?void 0:l.constructor)==null?void 0:i.name)??(l===null?"null":typeof l);throw new Error(`Tag not resolved for ${a} value`)}return n}function bh(e,t,{anchors:n,doc:l}){if(!l.directives)return"";const i=[],a=(fe(e)||ke(e))&&e.anchor;a&&zm(a)&&(n.add(a),i.push(`&${a}`));const r=e.tag??(t.default?null:t.tag);return r&&i.push(l.directives.tagString(r)),i.join(" ")}function Fl(e,t,n,l){var c;if(we(e))return e.toString(t,n,l);if(Pn(e)){if(t.doc.directives)return e.toString(t);if((c=t.resolvedAliases)!=null&&c.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i;const a=De(e)?e:t.doc.createNode(e,{onTagObj:d=>i=d});i??(i=gh(t.doc.schema.tags,a));const r=bh(a,i,t);r.length>0&&(t.indentAtStart=(t.indentAtStart??0)+r.length+1);const s=typeof i.stringify=="function"?i.stringify(a,t,n,l):fe(a)?zi(a,t,n,l):a.toString(t,n,l);return r?fe(a)||s[0]==="{"||s[0]==="["?`${r} ${s}`:`${r}
${t.indent}${s}`:s}function hh({key:e,value:t},n,l,i){const{allNullValues:a,doc:r,indent:s,indentStep:c,options:{commentString:d,indentSeq:u,simpleKeys:p}}=n;let f=De(e)&&e.comment||null;if(p){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(ke(e)||!De(e)&&typeof e=="object"){const S="With simple keys, collection cannot be used as a key value";throw new Error(S)}}let m=!p&&(!e||f&&t==null&&!n.inFlow||ke(e)||(fe(e)?e.type===te.BLOCK_FOLDED||e.type===te.BLOCK_LITERAL:typeof e=="object"));n=Object.assign({},n,{allNullValues:!1,implicitKey:!m&&(p||!a),indent:s+c});let x=!1,g=!1,_=Fl(e,n,()=>x=!0,()=>g=!0);if(!m&&!n.inFlow&&_.length>1024){if(p)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");m=!0}if(n.inFlow){if(a||t==null)return x&&l&&l(),_===""?"?":m?`? ${_}`:_}else if(a&&!p||t==null&&m)return _=`? ${_}`,f&&!x?_+=Fn(_,n.indent,d(f)):g&&i&&i(),_;x&&(f=null),m?(f&&(_+=Fn(_,n.indent,d(f))),_=`? ${_}
${s}:`):(_=`${_}:`,f&&(_+=Fn(_,n.indent,d(f))));let b,y,h;De(t)?(b=!!t.spaceBefore,y=t.commentBefore,h=t.comment):(b=!1,y=null,h=null,t&&typeof t=="object"&&(t=r.createNode(t))),n.implicitKey=!1,!m&&!f&&fe(t)&&(n.indentAtStart=_.length+1),g=!1,!u&&c.length>=2&&!n.inFlow&&!m&&Wl(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let v=!1;const C=Fl(t,n,()=>v=!0,()=>g=!0);let T=" ";if(f||b||y){if(T=b?`
`:"",y){const S=d(y);T+=`
${Kt(S,n.indent)}`}C===""&&!n.inFlow?T===`
`&&(T=`

`):T+=`
${n.indent}`}else if(!m&&ke(t)){const S=C[0],L=C.indexOf(`
`),j=L!==-1,N=n.inFlow??t.flow??t.items.length===0;if(j||!N){let W=!1;if(j&&(S==="&"||S==="!")){let H=C.indexOf(" ");S==="&"&&H!==-1&&H<L&&C[H+1]==="!"&&(H=C.indexOf(" ",H+1)),(H===-1||L<H)&&(W=!0)}W||(T=`
${n.indent}`)}}else(C===""||C[0]===`
`)&&(T="");return _+=T+C,n.inFlow?v&&l&&l():h&&!v?_+=Fn(_,n.indent,d(h)):g&&i&&i(),_}function ef(e,t){(e==="debug"||e==="warn")&&console.warn(t)}const ga="<<",Yt={identify:e=>e===ga||typeof e=="symbol"&&e.description===ga,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new te(Symbol(ga)),{addToJSMap:tf}),stringify:()=>ga},xh=(e,t)=>(Yt.identify(t)||fe(t)&&(!t.type||t.type===te.PLAIN)&&Yt.identify(t.value))&&(e==null?void 0:e.doc.schema.tags.some(n=>n.tag===Yt.tag&&n.default));function tf(e,t,n){if(n=e&&Pn(n)?n.resolve(e.doc):n,Wl(n))for(const l of n.items)Po(e,t,l);else if(Array.isArray(n))for(const l of n)Po(e,t,l);else Po(e,t,n)}function Po(e,t,n){const l=e&&Pn(n)?n.resolve(e.doc):n;if(!$l(l))throw new Error("Merge sources must be maps or map aliases");const i=l.toJSON(null,e,Map);for(const[a,r]of i)t instanceof Map?t.has(a)||t.set(a,r):t instanceof Set?t.add(a):Object.prototype.hasOwnProperty.call(t,a)||Object.defineProperty(t,a,{value:r,writable:!0,enumerable:!0,configurable:!0});return t}function nf(e,t,{key:n,value:l}){if(De(n)&&n.addToJSMap)n.addToJSMap(e,t,l);else if(xh(e,n))tf(e,t,l);else{const i=wt(n,"",e);if(t instanceof Map)t.set(i,wt(l,i,e));else if(t instanceof Set)t.add(i);else{const a=_h(n,i,e),r=wt(l,a,e);a in t?Object.defineProperty(t,a,{value:r,writable:!0,enumerable:!0,configurable:!0}):t[a]=r}}return t}function _h(e,t,n){if(t===null)return"";if(typeof t!="object")return String(t);if(De(e)&&(n!=null&&n.doc)){const l=Zm(n.doc,{});l.anchors=new Set;for(const a of n.anchors.keys())l.anchors.add(a.anchor);l.inFlow=!0,l.inStringifyKey=!0;const i=e.toString(l);if(!n.mapKeyWarned){let a=JSON.stringify(i);a.length>40&&(a=a.substring(0,36)+'..."'),ef(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return i}return JSON.stringify(t)}function Mc(e,t,n){const l=Bi(e,void 0,n),i=Bi(t,void 0,n);return new ze(l,i)}class ze{constructor(t,n=null){Object.defineProperty(this,Lt,{value:jm}),this.key=t,this.value=n}clone(t){let{key:n,value:l}=this;return De(n)&&(n=n.clone(t)),De(l)&&(l=l.clone(t)),new ze(n,l)}toJSON(t,n){const l=n!=null&&n.mapAsMap?new Map:{};return nf(n,l,this)}toString(t,n,l){return t!=null&&t.doc?hh(this,t,n,l):JSON.stringify(this)}}function lf(e,t,n){return(t.inFlow??e.flow?wh:vh)(e,t,n)}function vh({comment:e,items:t},n,{blockItemPrefix:l,flowChars:i,itemIndent:a,onChompKeep:r,onComment:s}){const{indent:c,options:{commentString:d}}=n,u=Object.assign({},n,{indent:a,type:null});let p=!1;const f=[];for(let x=0;x<t.length;++x){const g=t[x];let _=null;if(De(g))!p&&g.spaceBefore&&f.push(""),yr(n,f,g.commentBefore,p),g.comment&&(_=g.comment);else if(we(g)){const y=De(g.key)?g.key:null;y&&(!p&&y.spaceBefore&&f.push(""),yr(n,f,y.commentBefore,p))}p=!1;let b=Fl(g,u,()=>_=null,()=>p=!0);_&&(b+=Fn(b,a,d(_))),p&&_&&(p=!1),f.push(l+b)}let m;if(f.length===0)m=i.start+i.end;else{m=f[0];for(let x=1;x<f.length;++x){const g=f[x];m+=g?`
${c}${g}`:`
`}}return e?(m+=`
`+Kt(d(e),c),s&&s()):p&&r&&r(),m}function wh({items:e},t,{flowChars:n,itemIndent:l}){const{indent:i,indentStep:a,flowCollectionPadding:r,options:{commentString:s}}=t;l+=a;const c=Object.assign({},t,{indent:l,inFlow:!0,type:null});let d=!1,u=0;const p=[];for(let x=0;x<e.length;++x){const g=e[x];let _=null;if(De(g))g.spaceBefore&&p.push(""),yr(t,p,g.commentBefore,!1),g.comment&&(_=g.comment);else if(we(g)){const y=De(g.key)?g.key:null;y&&(y.spaceBefore&&p.push(""),yr(t,p,y.commentBefore,!1),y.comment&&(d=!0));const h=De(g.value)?g.value:null;h?(h.comment&&(_=h.comment),h.commentBefore&&(d=!0)):g.value==null&&(y!=null&&y.comment)&&(_=y.comment)}_&&(d=!0);let b=Fl(g,c,()=>_=null);x<e.length-1&&(b+=","),_&&(b+=Fn(b,l,s(_))),!d&&(p.length>u||b.includes(`
`))&&(d=!0),p.push(b),u=p.length}const{start:f,end:m}=n;if(p.length===0)return f+m;if(!d){const x=p.reduce((g,_)=>g+_.length+2,2);d=t.options.lineWidth>0&&x>t.options.lineWidth}if(d){let x=f;for(const g of p)x+=g?`
${a}${i}${g}`:`
`;return`${x}
${i}${m}`}else return`${f}${r}${p.join(" ")}${r}${m}`}function yr({indent:e,options:{commentString:t}},n,l,i){if(l&&i&&(l=l.replace(/^\n+/,"")),l){const a=Kt(t(l),e);n.push(a.trimStart())}}function On(e,t){const n=fe(t)?t.value:t;for(const l of e)if(we(l)&&(l.key===t||l.key===n||fe(l.key)&&l.key.value===n))return l}class ut extends Xm{static get tagName(){return"tag:yaml.org,2002:map"}constructor(t){super(_n,t),this.items=[]}static from(t,n,l){const{keepUndefined:i,replacer:a}=l,r=new this(t),s=(c,d)=>{if(typeof a=="function")d=a.call(n,c,d);else if(Array.isArray(a)&&!a.includes(c))return;(d!==void 0||i)&&r.items.push(Mc(c,d,l))};if(n instanceof Map)for(const[c,d]of n)s(c,d);else if(n&&typeof n=="object")for(const c of Object.keys(n))s(c,n[c]);return typeof t.sortMapEntries=="function"&&r.items.sort(t.sortMapEntries),r}add(t,n){var r;let l;we(t)?l=t:!t||typeof t!="object"||!("key"in t)?l=new ze(t,t==null?void 0:t.value):l=new ze(t.key,t.value);const i=On(this.items,l.key),a=(r=this.schema)==null?void 0:r.sortMapEntries;if(i){if(!n)throw new Error(`Key ${l.key} already set`);fe(i.value)&&Ym(l.value)?i.value.value=l.value:i.value=l.value}else if(a){const s=this.items.findIndex(c=>a(l,c)<0);s===-1?this.items.push(l):this.items.splice(s,0,l)}else this.items.push(l)}delete(t){const n=On(this.items,t);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(t,n){const l=On(this.items,t),i=l==null?void 0:l.value;return(!n&&fe(i)?i.value:i)??void 0}has(t){return!!On(this.items,t)}set(t,n){this.add(new ze(t,n),!0)}toJSON(t,n,l){const i=l?new l:n!=null&&n.mapAsMap?new Map:{};n!=null&&n.onCreate&&n.onCreate(i);for(const a of this.items)nf(n,i,a);return i}toString(t,n,l){if(!t)return JSON.stringify(this);for(const i of this.items)if(!we(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),lf(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:l,onComment:n})}}const Hl={collection:"map",default:!0,nodeClass:ut,tag:"tag:yaml.org,2002:map",resolve(e,t){return $l(e)||t("Expected a mapping for this tag"),e},createNode:(e,t,n)=>ut.from(e,t,n)};class Cn extends Xm{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(t){super(Ul,t),this.items=[]}add(t){this.items.push(t)}delete(t){const n=ba(t);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(t,n){const l=ba(t);if(typeof l!="number")return;const i=this.items[l];return!n&&fe(i)?i.value:i}has(t){const n=ba(t);return typeof n=="number"&&n<this.items.length}set(t,n){const l=ba(t);if(typeof l!="number")throw new Error(`Expected a valid index, not ${t}.`);const i=this.items[l];fe(i)&&Ym(n)?i.value=n:this.items[l]=n}toJSON(t,n){const l=[];n!=null&&n.onCreate&&n.onCreate(l);let i=0;for(const a of this.items)l.push(wt(a,String(i++),n));return l}toString(t,n,l){return t?lf(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:l,onComment:n}):JSON.stringify(this)}static from(t,n,l){const{replacer:i}=l,a=new this(t);if(n&&Symbol.iterator in Object(n)){let r=0;for(let s of n){if(typeof i=="function"){const c=n instanceof Set?s:String(r++);s=i.call(n,c,s)}a.items.push(Bi(s,void 0,l))}}return a}}function ba(e){let t=fe(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}const ql={collection:"seq",default:!0,nodeClass:Cn,tag:"tag:yaml.org,2002:seq",resolve(e,t){return Wl(e)||t("Expected a sequence for this tag"),e},createNode:(e,t,n)=>Cn.from(e,t,n)},Ir={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,n,l){return t=Object.assign({actualString:!0},t),zi(e,t,n,l)}},jr={identify:e=>e==null,createNode:()=>new te(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new te(null),stringify:({source:e},t)=>typeof e=="string"&&jr.test.test(e)?e:t.options.nullStr},Gc={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new te(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},n){if(e&&Gc.test.test(e)){const l=e[0]==="t"||e[0]==="T";if(t===l)return e}return t?n.options.trueStr:n.options.falseStr}};function Gt({format:e,minFractionDigits:t,tag:n,value:l}){if(typeof l=="bigint")return String(l);const i=typeof l=="number"?l:Number(l);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let a=JSON.stringify(l);if(!e&&t&&(!n||n==="tag:yaml.org,2002:float")&&/^\d/.test(a)){let r=a.indexOf(".");r<0&&(r=a.length,a+=".");let s=t-(a.length-r-1);for(;s-- >0;)a+="0"}return a}const af={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Gt},rf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Gt(e)}},of={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new te(parseFloat(e)),n=e.indexOf(".");return n!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-n-1),t},stringify:Gt},Ur=e=>typeof e=="bigint"||Number.isInteger(e),Fc=(e,t,n,{intAsBigInt:l})=>l?BigInt(e):parseInt(e.substring(t),n);function sf(e,t,n){const{value:l}=e;return Ur(l)&&l>=0?n+l.toString(t):Gt(e)}const cf={identify:e=>Ur(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,n)=>Fc(e,2,8,n),stringify:e=>sf(e,8,"0o")},df={identify:Ur,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>Fc(e,0,10,n),stringify:Gt},uf={identify:e=>Ur(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>Fc(e,2,16,n),stringify:e=>sf(e,16,"0x")},Ch=[Hl,ql,Ir,jr,Gc,cf,df,uf,af,rf,of];function cu(e){return typeof e=="bigint"||Number.isInteger(e)}const ha=({value:e})=>JSON.stringify(e),Sh=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:ha},{identify:e=>e==null,createNode:()=>new te(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:ha},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:ha},{identify:cu,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>cu(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:ha}],Lh={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},kh=[Hl,ql].concat(Sh,Lh),Oc={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof atob=="function"){const n=atob(e.replace(/[\n\r]/g,"")),l=new Uint8Array(n.length);for(let i=0;i<n.length;++i)l[i]=n.charCodeAt(i);return l}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:n},l,i,a){if(!n)return"";const r=n;let s;if(typeof btoa=="function"){let c="";for(let d=0;d<r.length;++d)c+=String.fromCharCode(r[d]);s=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t??(t=te.BLOCK_LITERAL),t!==te.QUOTE_DOUBLE){const c=Math.max(l.options.lineWidth-l.indent.length,l.options.minContentWidth),d=Math.ceil(s.length/c),u=new Array(d);for(let p=0,f=0;p<d;++p,f+=c)u[p]=s.substr(f,c);s=u.join(t===te.BLOCK_LITERAL?`
`:" ")}return zi({comment:e,type:t,value:s},l,i,a)}};function pf(e,t){if(Wl(e))for(let n=0;n<e.items.length;++n){let l=e.items[n];if(!we(l)){if($l(l)){l.items.length>1&&t("Each pair must have its own sequence indicator");const i=l.items[0]||new ze(new te(null));if(l.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${l.commentBefore}
${i.key.commentBefore}`:l.commentBefore),l.comment){const a=i.value??i.key;a.comment=a.comment?`${l.comment}
${a.comment}`:l.comment}l=i}e.items[n]=we(l)?l:new ze(l)}}else t("Expected a sequence for this tag");return e}function mf(e,t,n){const{replacer:l}=n,i=new Cn(e);i.tag="tag:yaml.org,2002:pairs";let a=0;if(t&&Symbol.iterator in Object(t))for(let r of t){typeof l=="function"&&(r=l.call(t,String(a++),r));let s,c;if(Array.isArray(r))if(r.length===2)s=r[0],c=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const d=Object.keys(r);if(d.length===1)s=d[0],c=r[s];else throw new TypeError(`Expected tuple with one key, not ${d.length} keys`)}else s=r;i.items.push(Mc(s,c,n))}return i}const Bc={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:pf,createNode:mf};class Dl extends Cn{constructor(){super(),this.add=ut.prototype.add.bind(this),this.delete=ut.prototype.delete.bind(this),this.get=ut.prototype.get.bind(this),this.has=ut.prototype.has.bind(this),this.set=ut.prototype.set.bind(this),this.tag=Dl.tag}toJSON(t,n){if(!n)return super.toJSON(t);const l=new Map;n!=null&&n.onCreate&&n.onCreate(l);for(const i of this.items){let a,r;if(we(i)?(a=wt(i.key,"",n),r=wt(i.value,a,n)):a=wt(i,"",n),l.has(a))throw new Error("Ordered maps must not include duplicate keys");l.set(a,r)}return l}static from(t,n,l){const i=mf(t,n,l),a=new this;return a.items=i.items,a}}Dl.tag="tag:yaml.org,2002:omap";const Ic={collection:"seq",identify:e=>e instanceof Map,nodeClass:Dl,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const n=pf(e,t),l=[];for(const{key:i}of n.items)fe(i)&&(l.includes(i.value)?t(`Ordered maps must not include duplicate keys: ${i.value}`):l.push(i.value));return Object.assign(new Dl,n)},createNode:(e,t,n)=>Dl.from(e,t,n)};function ff({value:e,source:t},n){return t&&(e?yf:gf).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}const yf={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new te(!0),stringify:ff},gf={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new te(!1),stringify:ff},Ph={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Gt},Dh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Gt(e)}},Th={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new te(parseFloat(e.replace(/_/g,""))),n=e.indexOf(".");if(n!==-1){const l=e.substring(n+1).replace(/_/g,"");l[l.length-1]==="0"&&(t.minFractionDigits=l.length)}return t},stringify:Gt},Ki=e=>typeof e=="bigint"||Number.isInteger(e);function $r(e,t,n,{intAsBigInt:l}){const i=e[0];if((i==="-"||i==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),l){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const r=BigInt(e);return i==="-"?BigInt(-1)*r:r}const a=parseInt(e,n);return i==="-"?-1*a:a}function jc(e,t,n){const{value:l}=e;if(Ki(l)){const i=l.toString(t);return l<0?"-"+n+i.substr(1):n+i}return Gt(e)}const Nh={identify:Ki,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>$r(e,2,2,n),stringify:e=>jc(e,2,"0b")},Ah={identify:Ki,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>$r(e,1,8,n),stringify:e=>jc(e,8,"0")},Eh={identify:Ki,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>$r(e,0,10,n),stringify:Gt},Vh={identify:Ki,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>$r(e,2,16,n),stringify:e=>jc(e,16,"0x")};class Tl extends ut{constructor(t){super(t),this.tag=Tl.tag}add(t){let n;we(t)?n=t:t&&typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?n=new ze(t.key,null):n=new ze(t,null),On(this.items,n.key)||this.items.push(n)}get(t,n){const l=On(this.items,t);return!n&&we(l)?fe(l.key)?l.key.value:l.key:l}set(t,n){if(typeof n!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);const l=On(this.items,t);l&&!n?this.items.splice(this.items.indexOf(l),1):!l&&n&&this.items.push(new ze(t))}toJSON(t,n){return super.toJSON(t,n,Set)}toString(t,n,l){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),n,l);throw new Error("Set items must all have null values")}static from(t,n,l){const{replacer:i}=l,a=new this(t);if(n&&Symbol.iterator in Object(n))for(let r of n)typeof i=="function"&&(r=i.call(n,r,r)),a.items.push(Mc(r,null,l));return a}}Tl.tag="tag:yaml.org,2002:set";const Uc={collection:"map",identify:e=>e instanceof Set,nodeClass:Tl,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,n)=>Tl.from(e,t,n),resolve(e,t){if($l(e)){if(e.hasAllNullValues(!0))return Object.assign(new Tl,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function $c(e,t){const n=e[0],l=n==="-"||n==="+"?e.substring(1):e,i=r=>t?BigInt(r):Number(r),a=l.replace(/_/g,"").split(":").reduce((r,s)=>r*i(60)+i(s),i(0));return n==="-"?i(-1)*a:a}function bf(e){let{value:t}=e,n=r=>r;if(typeof t=="bigint")n=r=>BigInt(r);else if(isNaN(t)||!isFinite(t))return Gt(e);let l="";t<0&&(l="-",t*=n(-1));const i=n(60),a=[t%i];return t<60?a.unshift(0):(t=(t-a[0])/i,a.unshift(t%i),t>=60&&(t=(t-a[0])/i,a.unshift(t))),l+a.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const hf={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>$c(e,n),stringify:bf},xf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>$c(e,!1),stringify:bf},Wr={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(Wr.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,n,l,i,a,r,s]=t.map(Number),c=t[7]?Number((t[7]+"00").substr(1,3)):0;let d=Date.UTC(n,l-1,i,a||0,r||0,s||0,c);const u=t[8];if(u&&u!=="Z"){let p=$c(u,!1);Math.abs(p)<30&&(p*=60),d-=6e4*p}return new Date(d)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},du=[Hl,ql,Ir,jr,yf,gf,Nh,Ah,Eh,Vh,Ph,Dh,Th,Oc,Yt,Ic,Bc,Uc,hf,xf,Wr],uu=new Map([["core",Ch],["failsafe",[Hl,ql,Ir]],["json",kh],["yaml11",du],["yaml-1.1",du]]),pu={binary:Oc,bool:Gc,float:of,floatExp:rf,floatNaN:af,floatTime:xf,int:df,intHex:uf,intOct:cf,intTime:hf,map:Hl,merge:Yt,null:jr,omap:Ic,pairs:Bc,seq:ql,set:Uc,timestamp:Wr},Rh={"tag:yaml.org,2002:binary":Oc,"tag:yaml.org,2002:merge":Yt,"tag:yaml.org,2002:omap":Ic,"tag:yaml.org,2002:pairs":Bc,"tag:yaml.org,2002:set":Uc,"tag:yaml.org,2002:timestamp":Wr};function Do(e,t,n){const l=uu.get(t);if(l&&!e)return n&&!l.includes(Yt)?l.concat(Yt):l.slice();let i=l;if(!i)if(Array.isArray(e))i=[];else{const a=Array.from(uu.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${a} or define customTags array`)}if(Array.isArray(e))for(const a of e)i=i.concat(a);else typeof e=="function"&&(i=e(i.slice()));return n&&(i=i.concat(Yt)),i.reduce((a,r)=>{const s=typeof r=="string"?pu[r]:r;if(!s){const c=JSON.stringify(r),d=Object.keys(pu).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${d}`)}return a.includes(s)||a.push(s),a},[])}const Mh=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class Hr{constructor({compat:t,customTags:n,merge:l,resolveKnownTags:i,schema:a,sortMapEntries:r,toStringDefaults:s}){this.compat=Array.isArray(t)?Do(t,"compat"):t?Do(null,t):null,this.name=typeof a=="string"&&a||"core",this.knownTags=i?Rh:{},this.tags=Do(n,this.name,l),this.toStringOptions=s??null,Object.defineProperty(this,_n,{value:Hl}),Object.defineProperty(this,$t,{value:Ir}),Object.defineProperty(this,Ul,{value:ql}),this.sortMapEntries=typeof r=="function"?r:r===!0?Mh:null}clone(){const t=Object.create(Hr.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function Gh(e,t){var c;const n=[];let l=t.directives===!0;if(t.directives!==!1&&e.directives){const d=e.directives.toString(e);d?(n.push(d),l=!0):e.directives.docStart&&(l=!0)}l&&n.push("---");const i=Zm(e,t),{commentString:a}=i.options;if(e.commentBefore){n.length!==1&&n.unshift("");const d=a(e.commentBefore);n.unshift(Kt(d,""))}let r=!1,s=null;if(e.contents){if(De(e.contents)){if(e.contents.spaceBefore&&l&&n.push(""),e.contents.commentBefore){const p=a(e.contents.commentBefore);n.push(Kt(p,""))}i.forceBlockIndent=!!e.comment,s=e.contents.comment}const d=s?void 0:()=>r=!0;let u=Fl(e.contents,i,()=>s=null,d);s&&(u+=Fn(u,"",a(s))),(u[0]==="|"||u[0]===">")&&n[n.length-1]==="---"?n[n.length-1]=`--- ${u}`:n.push(u)}else n.push(Fl(e.contents,i));if((c=e.directives)!=null&&c.docEnd)if(e.comment){const d=a(e.comment);d.includes(`
`)?(n.push("..."),n.push(Kt(d,""))):n.push(`... ${d}`)}else n.push("...");else{let d=e.comment;d&&r&&(d=d.replace(/^\n+/,"")),d&&((!r||s)&&n[n.length-1]!==""&&n.push(""),n.push(Kt(a(d),"")))}return n.join(`
`)+`
`}class zl{constructor(t,n,l){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Lt,{value:Ds});let i=null;typeof n=="function"||Array.isArray(n)?i=n:l===void 0&&n&&(l=n,n=void 0);const a=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},l);this.options=a;let{version:r}=a;l!=null&&l._directives?(this.directives=l._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new Ye({version:r}),this.setSchema(r,l),this.contents=t===void 0?null:this.createNode(t,i,l)}clone(){const t=Object.create(zl.prototype,{[Lt]:{value:Ds}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=De(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){ll(this.contents)&&this.contents.add(t)}addIn(t,n){ll(this.contents)&&this.contents.addIn(t,n)}createAlias(t,n){if(!t.anchor){const l=Km(this);t.anchor=!n||l.has(n)?Qm(n||"a",l):n}return new Gr(t.anchor)}createNode(t,n,l){let i;if(typeof n=="function")t=n.call({"":t},"",t),i=n;else if(Array.isArray(n)){const _=y=>typeof y=="number"||y instanceof String||y instanceof Number,b=n.filter(_).map(String);b.length>0&&(n=n.concat(b)),i=n}else l===void 0&&n&&(l=n,n=void 0);const{aliasDuplicateObjects:a,anchorPrefix:r,flow:s,keepUndefined:c,onTagObj:d,tag:u}=l??{},{onAnchor:p,setAnchors:f,sourceObjects:m}=dh(this,r||"a"),x={aliasDuplicateObjects:a??!0,keepUndefined:c??!1,onAnchor:p,onTagObj:d,replacer:i,schema:this.schema,sourceObjects:m},g=Bi(t,u,x);return s&&ke(g)&&(g.flow=!0),f(),g}createPair(t,n,l={}){const i=this.createNode(t,null,l),a=this.createNode(n,null,l);return new ze(i,a)}delete(t){return ll(this.contents)?this.contents.delete(t):!1}deleteIn(t){return ui(t)?this.contents==null?!1:(this.contents=null,!0):ll(this.contents)?this.contents.deleteIn(t):!1}get(t,n){return ke(this.contents)?this.contents.get(t,n):void 0}getIn(t,n){return ui(t)?!n&&fe(this.contents)?this.contents.value:this.contents:ke(this.contents)?this.contents.getIn(t,n):void 0}has(t){return ke(this.contents)?this.contents.has(t):!1}hasIn(t){return ui(t)?this.contents!==void 0:ke(this.contents)?this.contents.hasIn(t):!1}set(t,n){this.contents==null?this.contents=fr(this.schema,[t],n):ll(this.contents)&&this.contents.set(t,n)}setIn(t,n){ui(t)?this.contents=n:this.contents==null?this.contents=fr(this.schema,Array.from(t),n):ll(this.contents)&&this.contents.setIn(t,n)}setSchema(t,n={}){typeof t=="number"&&(t=String(t));let l;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Ye({version:"1.1"}),l={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new Ye({version:t}),l={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,l=null;break;default:{const i=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(n.schema instanceof Object)this.schema=n.schema;else if(l)this.schema=new Hr(Object.assign(l,n));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:n,mapAsMap:l,maxAliasCount:i,onAnchor:a,reviver:r}={}){const s={anchors:new Map,doc:this,keep:!t,mapAsMap:l===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},c=wt(this.contents,n??"",s);if(typeof a=="function")for(const{count:d,res:u}of s.anchors.values())a(u,d);return typeof r=="function"?_l(r,{"":c},"",c):c}toJSON(t,n){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:n})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const n=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${n}`)}return Gh(this,t)}}function ll(e){if(ke(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Wc extends Error{constructor(t,n,l,i){super(),this.name=t,this.code=l,this.message=i,this.pos=n}}class Bn extends Wc{constructor(t,n,l){super("YAMLParseError",t,n,l)}}class _f extends Wc{constructor(t,n,l){super("YAMLWarning",t,n,l)}}const gr=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(s=>t.linePos(s));const{line:l,col:i}=n.linePos[0];n.message+=` at line ${l}, column ${i}`;let a=i-1,r=e.substring(t.lineStarts[l-1],t.lineStarts[l]).replace(/[\n\r]+$/,"");if(a>=60&&r.length>80){const s=Math.min(a-39,r.length-79);r="…"+r.substring(s),a-=s-1}if(r.length>80&&(r=r.substring(0,79)+"…"),l>1&&/^ *$/.test(r.substring(0,a))){let s=e.substring(t.lineStarts[l-2],t.lineStarts[l-1]);s.length>80&&(s=s.substring(0,79)+`…
`),r=s+r}if(/[^ ]/.test(r)){let s=1;const c=n.linePos[1];c&&c.line===l&&c.col>i&&(s=Math.max(1,Math.min(c.col-i,80-a)));const d=" ".repeat(a)+"^".repeat(s);n.message+=`:

${r}
${d}
`}};function Ol(e,{flow:t,indicator:n,next:l,offset:i,onError:a,parentIndent:r,startOnNewline:s}){let c=!1,d=s,u=s,p="",f="",m=!1,x=!1,g=null,_=null,b=null,y=null,h=null,v=null,C=null;for(const L of e)switch(x&&(L.type!=="space"&&L.type!=="newline"&&L.type!=="comma"&&a(L.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),g&&(d&&L.type!=="comment"&&L.type!=="newline"&&a(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),L.type){case"space":!t&&(n!=="doc-start"||(l==null?void 0:l.type)!=="flow-collection")&&L.source.includes("	")&&(g=L),u=!0;break;case"comment":{u||a(L,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const j=L.source.substring(1)||" ";p?p+=f+j:p=j,f="",d=!1;break}case"newline":d?p?p+=L.source:(!v||n!=="seq-item-ind")&&(c=!0):f+=L.source,d=!0,m=!0,(_||b)&&(y=L),u=!0;break;case"anchor":_&&a(L,"MULTIPLE_ANCHORS","A node can have at most one anchor"),L.source.endsWith(":")&&a(L.offset+L.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=L,C??(C=L.offset),d=!1,u=!1,x=!0;break;case"tag":{b&&a(L,"MULTIPLE_TAGS","A node can have at most one tag"),b=L,C??(C=L.offset),d=!1,u=!1,x=!0;break}case n:(_||b)&&a(L,"BAD_PROP_ORDER",`Anchors and tags must be after the ${L.source} indicator`),v&&a(L,"UNEXPECTED_TOKEN",`Unexpected ${L.source} in ${t??"collection"}`),v=L,d=n==="seq-item-ind"||n==="explicit-key-ind",u=!1;break;case"comma":if(t){h&&a(L,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),h=L,d=!1,u=!1;break}default:a(L,"UNEXPECTED_TOKEN",`Unexpected ${L.type} token`),d=!1,u=!1}const T=e[e.length-1],S=T?T.offset+T.source.length:i;return x&&l&&l.type!=="space"&&l.type!=="newline"&&l.type!=="comma"&&(l.type!=="scalar"||l.source!=="")&&a(l.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(d&&g.indent<=r||(l==null?void 0:l.type)==="block-map"||(l==null?void 0:l.type)==="block-seq")&&a(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:h,found:v,spaceBefore:c,comment:p,hasNewline:m,anchor:_,tag:b,newlineAfterProp:y,end:S,start:C??S}}function Ii(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const n of t.start)if(n.type==="newline")return!0;if(t.sep){for(const n of t.sep)if(n.type==="newline")return!0}if(Ii(t.key)||Ii(t.value))return!0}return!1;default:return!0}}function Es(e,t,n){if((t==null?void 0:t.type)==="flow-collection"){const l=t.end[0];l.indent===e&&(l.source==="]"||l.source==="}")&&Ii(t)&&n(l,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function vf(e,t,n){const{uniqueKeys:l}=e.options;if(l===!1)return!1;const i=typeof l=="function"?l:(a,r)=>a===r||fe(a)&&fe(r)&&a.value===r.value;return t.some(a=>i(a.key,n))}const mu="All mapping items must start at the same column";function Fh({composeNode:e,composeEmptyNode:t},n,l,i,a){var u;const r=(a==null?void 0:a.nodeClass)??ut,s=new r(n.schema);n.atRoot&&(n.atRoot=!1);let c=l.offset,d=null;for(const p of l.items){const{start:f,key:m,sep:x,value:g}=p,_=Ol(f,{indicator:"explicit-key-ind",next:m??(x==null?void 0:x[0]),offset:c,onError:i,parentIndent:l.indent,startOnNewline:!0}),b=!_.found;if(b){if(m&&(m.type==="block-seq"?i(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in m&&m.indent!==l.indent&&i(c,"BAD_INDENT",mu)),!_.anchor&&!_.tag&&!x){d=_.end,_.comment&&(s.comment?s.comment+=`
`+_.comment:s.comment=_.comment);continue}(_.newlineAfterProp||Ii(m))&&i(m??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=_.found)==null?void 0:u.indent)!==l.indent&&i(c,"BAD_INDENT",mu);n.atKey=!0;const y=_.end,h=m?e(n,m,_,i):t(n,y,f,null,_,i);n.schema.compat&&Es(l.indent,m,i),n.atKey=!1,vf(n,s.items,h)&&i(y,"DUPLICATE_KEY","Map keys must be unique");const v=Ol(x??[],{indicator:"map-value-ind",next:g,offset:h.range[2],onError:i,parentIndent:l.indent,startOnNewline:!m||m.type==="block-scalar"});if(c=v.end,v.found){b&&((g==null?void 0:g.type)==="block-map"&&!v.hasNewline&&i(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),n.options.strict&&_.start<v.found.offset-1024&&i(h.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const C=g?e(n,g,v,i):t(n,c,x,null,v,i);n.schema.compat&&Es(l.indent,g,i),c=C.range[2];const T=new ze(h,C);n.options.keepSourceTokens&&(T.srcToken=p),s.items.push(T)}else{b&&i(h.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(h.comment?h.comment+=`
`+v.comment:h.comment=v.comment);const C=new ze(h);n.options.keepSourceTokens&&(C.srcToken=p),s.items.push(C)}}return d&&d<c&&i(d,"IMPOSSIBLE","Map comment with trailing content"),s.range=[l.offset,c,d??c],s}function Oh({composeNode:e,composeEmptyNode:t},n,l,i,a){const r=(a==null?void 0:a.nodeClass)??Cn,s=new r(n.schema);n.atRoot&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let c=l.offset,d=null;for(const{start:u,value:p}of l.items){const f=Ol(u,{indicator:"seq-item-ind",next:p,offset:c,onError:i,parentIndent:l.indent,startOnNewline:!0});if(!f.found)if(f.anchor||f.tag||p)p&&p.type==="block-seq"?i(f.end,"BAD_INDENT","All sequence items must start at the same column"):i(c,"MISSING_CHAR","Sequence item without - indicator");else{d=f.end,f.comment&&(s.comment=f.comment);continue}const m=p?e(n,p,f,i):t(n,f.end,u,null,f,i);n.schema.compat&&Es(l.indent,p,i),c=m.range[2],s.items.push(m)}return s.range=[l.offset,c,d??c],s}function Qi(e,t,n,l){let i="";if(e){let a=!1,r="";for(const s of e){const{source:c,type:d}=s;switch(d){case"space":a=!0;break;case"comment":{n&&!a&&l(s,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=c.substring(1)||" ";i?i+=r+u:i=u,r="";break}case"newline":i&&(r+=c),a=!0;break;default:l(s,"UNEXPECTED_TOKEN",`Unexpected ${d} at node end`)}t+=c.length}}return{comment:i,offset:t}}const To="Block collections are not allowed within flow collections",No=e=>e&&(e.type==="block-map"||e.type==="block-seq");function Bh({composeNode:e,composeEmptyNode:t},n,l,i,a){const r=l.start.source==="{",s=r?"flow map":"flow sequence",c=(a==null?void 0:a.nodeClass)??(r?ut:Cn),d=new c(n.schema);d.flow=!0;const u=n.atRoot;u&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let p=l.offset+l.start.source.length;for(let _=0;_<l.items.length;++_){const b=l.items[_],{start:y,key:h,sep:v,value:C}=b,T=Ol(y,{flow:s,indicator:"explicit-key-ind",next:h??(v==null?void 0:v[0]),offset:p,onError:i,parentIndent:l.indent,startOnNewline:!1});if(!T.found){if(!T.anchor&&!T.tag&&!v&&!C){_===0&&T.comma?i(T.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`):_<l.items.length-1&&i(T.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${s}`),T.comment&&(d.comment?d.comment+=`
`+T.comment:d.comment=T.comment),p=T.end;continue}!r&&n.options.strict&&Ii(h)&&i(h,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)T.comma&&i(T.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`);else if(T.comma||i(T.start,"MISSING_CHAR",`Missing , between ${s} items`),T.comment){let S="";e:for(const L of y)switch(L.type){case"comma":case"space":break;case"comment":S=L.source.substring(1);break e;default:break e}if(S){let L=d.items[d.items.length-1];we(L)&&(L=L.value??L.key),L.comment?L.comment+=`
`+S:L.comment=S,T.comment=T.comment.substring(S.length+1)}}if(!r&&!v&&!T.found){const S=C?e(n,C,T,i):t(n,T.end,v,null,T,i);d.items.push(S),p=S.range[2],No(C)&&i(S.range,"BLOCK_IN_FLOW",To)}else{n.atKey=!0;const S=T.end,L=h?e(n,h,T,i):t(n,S,y,null,T,i);No(h)&&i(L.range,"BLOCK_IN_FLOW",To),n.atKey=!1;const j=Ol(v??[],{flow:s,indicator:"map-value-ind",next:C,offset:L.range[2],onError:i,parentIndent:l.indent,startOnNewline:!1});if(j.found){if(!r&&!T.found&&n.options.strict){if(v)for(const H of v){if(H===j.found)break;if(H.type==="newline"){i(H,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}T.start<j.found.offset-1024&&i(j.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else C&&("source"in C&&C.source&&C.source[0]===":"?i(C,"MISSING_CHAR",`Missing space after : in ${s}`):i(j.start,"MISSING_CHAR",`Missing , or : between ${s} items`));const N=C?e(n,C,j,i):j.found?t(n,j.end,v,null,j,i):null;N?No(C)&&i(N.range,"BLOCK_IN_FLOW",To):j.comment&&(L.comment?L.comment+=`
`+j.comment:L.comment=j.comment);const W=new ze(L,N);if(n.options.keepSourceTokens&&(W.srcToken=b),r){const H=d;vf(n,H.items,L)&&i(S,"DUPLICATE_KEY","Map keys must be unique"),H.items.push(W)}else{const H=new ut(n.schema);H.flow=!0,H.items.push(W);const Y=(N??L).range;H.range=[L.range[0],Y[1],Y[2]],d.items.push(H)}p=N?N.range[2]:j.end}}const f=r?"}":"]",[m,...x]=l.end;let g=p;if(m&&m.source===f)g=m.offset+m.source.length;else{const _=s[0].toUpperCase()+s.substring(1),b=u?`${_} must end with a ${f}`:`${_} in block collection must be sufficiently indented and end with a ${f}`;i(p,u?"MISSING_CHAR":"BAD_INDENT",b),m&&m.source.length!==1&&x.unshift(m)}if(x.length>0){const _=Qi(x,g,n.options.strict,i);_.comment&&(d.comment?d.comment+=`
`+_.comment:d.comment=_.comment),d.range=[l.offset,g,_.offset]}else d.range=[l.offset,g,g];return d}function Ao(e,t,n,l,i,a){const r=n.type==="block-map"?Fh(e,t,n,l,a):n.type==="block-seq"?Oh(e,t,n,l,a):Bh(e,t,n,l,a),s=r.constructor;return i==="!"||i===s.tagName?(r.tag=s.tagName,r):(i&&(r.tag=i),r)}function Ih(e,t,n,l,i){var f;const a=l.tag,r=a?t.directives.tagName(a.source,m=>i(a,"TAG_RESOLVE_FAILED",m)):null;if(n.type==="block-seq"){const{anchor:m,newlineAfterProp:x}=l,g=m&&a?m.offset>a.offset?m:a:m??a;g&&(!x||x.offset<g.offset)&&i(g,"MISSING_CHAR","Missing newline after block sequence props")}const s=n.type==="block-map"?"map":n.type==="block-seq"?"seq":n.start.source==="{"?"map":"seq";if(!a||!r||r==="!"||r===ut.tagName&&s==="map"||r===Cn.tagName&&s==="seq")return Ao(e,t,n,i,r);let c=t.schema.tags.find(m=>m.tag===r&&m.collection===s);if(!c){const m=t.schema.knownTags[r];if(m&&m.collection===s)t.schema.tags.push(Object.assign({},m,{default:!1})),c=m;else return m?i(a,"BAD_COLLECTION_TYPE",`${m.tag} used for ${s} collection, but expects ${m.collection??"scalar"}`,!0):i(a,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),Ao(e,t,n,i,r)}const d=Ao(e,t,n,i,r,c),u=((f=c.resolve)==null?void 0:f.call(c,d,m=>i(a,"TAG_RESOLVE_FAILED",m),t.options))??d,p=De(u)?u:new te(u);return p.range=d.range,p.tag=r,c!=null&&c.format&&(p.format=c.format),p}function wf(e,t,n){const l=t.offset,i=jh(t,e.options.strict,n);if(!i)return{value:"",type:null,comment:"",range:[l,l,l]};const a=i.mode===">"?te.BLOCK_FOLDED:te.BLOCK_LITERAL,r=t.source?Uh(t.source):[];let s=r.length;for(let g=r.length-1;g>=0;--g){const _=r[g][1];if(_===""||_==="\r")s=g;else break}if(s===0){const g=i.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let _=l+i.length;return t.source&&(_+=t.source.length),{value:g,type:a,comment:i.comment,range:[l,_,_]}}let c=t.indent+i.indent,d=t.offset+i.length,u=0;for(let g=0;g<s;++g){const[_,b]=r[g];if(b===""||b==="\r")i.indent===0&&_.length>c&&(c=_.length);else{_.length<c&&n(d+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(c=_.length),u=g,c===0&&!e.atRoot&&n(d,"BAD_INDENT","Block scalar values in collections must be indented");break}d+=_.length+b.length+1}for(let g=r.length-1;g>=s;--g)r[g][0].length>c&&(s=g+1);let p="",f="",m=!1;for(let g=0;g<u;++g)p+=r[g][0].slice(c)+`
`;for(let g=u;g<s;++g){let[_,b]=r[g];d+=_.length+b.length+1;const y=b[b.length-1]==="\r";if(y&&(b=b.slice(0,-1)),b&&_.length<c){const v=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;n(d-b.length-(y?2:1),"BAD_INDENT",v),_=""}a===te.BLOCK_LITERAL?(p+=f+_.slice(c)+b,f=`
`):_.length>c||b[0]==="	"?(f===" "?f=`
`:!m&&f===`
`&&(f=`

`),p+=f+_.slice(c)+b,f=`
`,m=!0):b===""?f===`
`?p+=`
`:f=`
`:(p+=f+b,f=" ",m=!1)}switch(i.chomp){case"-":break;case"+":for(let g=s;g<r.length;++g)p+=`
`+r[g][0].slice(c);p[p.length-1]!==`
`&&(p+=`
`);break;default:p+=`
`}const x=l+i.length+t.source.length;return{value:p,type:a,comment:i.comment,range:[l,x,x]}}function jh({offset:e,props:t},n,l){if(t[0].type!=="block-scalar-header")return l(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=t[0],a=i[0];let r=0,s="",c=-1;for(let f=1;f<i.length;++f){const m=i[f];if(!s&&(m==="-"||m==="+"))s=m;else{const x=Number(m);!r&&x?r=x:c===-1&&(c=e+f)}}c!==-1&&l(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let d=!1,u="",p=i.length;for(let f=1;f<t.length;++f){const m=t[f];switch(m.type){case"space":d=!0;case"newline":p+=m.source.length;break;case"comment":n&&!d&&l(m,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),p+=m.source.length,u=m.source.substring(1);break;case"error":l(m,"UNEXPECTED_TOKEN",m.message),p+=m.source.length;break;default:{const x=`Unexpected token in block scalar header: ${m.type}`;l(m,"UNEXPECTED_TOKEN",x);const g=m.source;g&&typeof g=="string"&&(p+=g.length)}}}return{mode:a,indent:r,chomp:s,comment:u,length:p}}function Uh(e){const t=e.split(/\n( *)/),n=t[0],l=n.match(/^( *)/),a=[l!=null&&l[1]?[l[1],n.slice(l[1].length)]:["",n]];for(let r=1;r<t.length;r+=2)a.push([t[r],t[r+1]]);return a}function Cf(e,t,n){const{offset:l,type:i,source:a,end:r}=e;let s,c;const d=(f,m,x)=>n(l+f,m,x);switch(i){case"scalar":s=te.PLAIN,c=$h(a,d);break;case"single-quoted-scalar":s=te.QUOTE_SINGLE,c=Wh(a,d);break;case"double-quoted-scalar":s=te.QUOTE_DOUBLE,c=Hh(a,d);break;default:return n(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[l,l+a.length,l+a.length]}}const u=l+a.length,p=Qi(r,u,t,n);return{value:c,type:s,comment:p.comment,range:[l,u,p.offset]}}function $h(e,t){let n="";switch(e[0]){case"	":n="a tab character";break;case",":n="flow indicator character ,";break;case"%":n="directive indicator character %";break;case"|":case">":{n=`block scalar indicator ${e[0]}`;break}case"@":case"`":{n=`reserved character ${e[0]}`;break}}return n&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${n}`),Sf(e)}function Wh(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),Sf(e.slice(1,-1)).replace(/''/g,"'")}function Sf(e){let t,n;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),n=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let l=t.exec(e);if(!l)return e;let i=l[1],a=" ",r=t.lastIndex;for(n.lastIndex=r;l=n.exec(e);)l[1]===""?a===`
`?i+=a:a=`
`:(i+=a+l[1],a=" "),r=n.lastIndex;const s=/[ \t]*(.*)/sy;return s.lastIndex=r,l=s.exec(e),i+a+((l==null?void 0:l[1])??"")}function Hh(e,t){let n="";for(let l=1;l<e.length-1;++l){const i=e[l];if(!(i==="\r"&&e[l+1]===`
`))if(i===`
`){const{fold:a,offset:r}=qh(e,l);n+=a,l=r}else if(i==="\\"){let a=e[++l];const r=zh[a];if(r)n+=r;else if(a===`
`)for(a=e[l+1];a===" "||a==="	";)a=e[++l+1];else if(a==="\r"&&e[l+1]===`
`)for(a=e[++l+1];a===" "||a==="	";)a=e[++l+1];else if(a==="x"||a==="u"||a==="U"){const s={x:2,u:4,U:8}[a];n+=Kh(e,l+1,s,t),l+=s}else{const s=e.substr(l-1,2);t(l-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),n+=s}}else if(i===" "||i==="	"){const a=l;let r=e[l+1];for(;r===" "||r==="	";)r=e[++l+1];r!==`
`&&!(r==="\r"&&e[l+2]===`
`)&&(n+=l>a?e.slice(a,l+1):i)}else n+=i}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),n}function qh(e,t){let n="",l=e[t+1];for(;(l===" "||l==="	"||l===`
`||l==="\r")&&!(l==="\r"&&e[t+2]!==`
`);)l===`
`&&(n+=`
`),t+=1,l=e[t+1];return n||(n=" "),{fold:n,offset:t}}const zh={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Kh(e,t,n,l){const i=e.substr(t,n),r=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(r)){const s=e.substr(t-2,n+2);return l(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),s}return String.fromCodePoint(r)}function Lf(e,t,n,l){const{value:i,type:a,comment:r,range:s}=t.type==="block-scalar"?wf(e,t,l):Cf(t,e.options.strict,l),c=n?e.directives.tagName(n.source,p=>l(n,"TAG_RESOLVE_FAILED",p)):null;let d;e.options.stringKeys&&e.atKey?d=e.schema[$t]:c?d=Qh(e.schema,i,c,n,l):t.type==="scalar"?d=Yh(e,i,t,l):d=e.schema[$t];let u;try{const p=d.resolve(i,f=>l(n??t,"TAG_RESOLVE_FAILED",f),e.options);u=fe(p)?p:new te(p)}catch(p){const f=p instanceof Error?p.message:String(p);l(n??t,"TAG_RESOLVE_FAILED",f),u=new te(i)}return u.range=s,u.source=i,a&&(u.type=a),c&&(u.tag=c),d.format&&(u.format=d.format),r&&(u.comment=r),u}function Qh(e,t,n,l,i){var s;if(n==="!")return e[$t];const a=[];for(const c of e.tags)if(!c.collection&&c.tag===n)if(c.default&&c.test)a.push(c);else return c;for(const c of a)if((s=c.test)!=null&&s.test(t))return c;const r=e.knownTags[n];return r&&!r.collection?(e.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(i(l,"TAG_RESOLVE_FAILED",`Unresolved tag: ${n}`,n!=="tag:yaml.org,2002:str"),e[$t])}function Yh({atKey:e,directives:t,schema:n},l,i,a){const r=n.tags.find(s=>{var c;return(s.default===!0||e&&s.default==="key")&&((c=s.test)==null?void 0:c.test(l))})||n[$t];if(n.compat){const s=n.compat.find(c=>{var d;return c.default&&((d=c.test)==null?void 0:d.test(l))})??n[$t];if(r.tag!==s.tag){const c=t.tagString(r.tag),d=t.tagString(s.tag),u=`Value may be parsed as either ${c} or ${d}`;a(i,"TAG_RESOLVE_FAILED",u,!0)}}return r}function Xh(e,t,n){if(t){n??(n=t.length);for(let l=n-1;l>=0;--l){let i=t[l];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=t[++l];(i==null?void 0:i.type)==="space";)e+=i.source.length,i=t[++l];break}}return e}const Jh={composeNode:kf,composeEmptyNode:Hc};function kf(e,t,n,l){const i=e.atKey,{spaceBefore:a,comment:r,anchor:s,tag:c}=n;let d,u=!0;switch(t.type){case"alias":d=Zh(e,t,l),(s||c)&&l(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":d=Lf(e,t,c,l),s&&(d.anchor=s.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":d=Ih(Jh,e,t,n,l),s&&(d.anchor=s.source.substring(1));break;default:{const p=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;l(t,"UNEXPECTED_TOKEN",p),d=Hc(e,t.offset,void 0,null,n,l),u=!1}}return s&&d.anchor===""&&l(s,"BAD_ALIAS","Anchor cannot be an empty string"),i&&e.options.stringKeys&&(!fe(d)||typeof d.value!="string"||d.tag&&d.tag!=="tag:yaml.org,2002:str")&&l(c??t,"NON_STRING_KEY","With stringKeys, all keys must be strings"),a&&(d.spaceBefore=!0),r&&(t.type==="scalar"&&t.source===""?d.comment=r:d.commentBefore=r),e.options.keepSourceTokens&&u&&(d.srcToken=t),d}function Hc(e,t,n,l,{spaceBefore:i,comment:a,anchor:r,tag:s,end:c},d){const u={type:"scalar",offset:Xh(t,n,l),indent:-1,source:""},p=Lf(e,u,s,d);return r&&(p.anchor=r.source.substring(1),p.anchor===""&&d(r,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(p.spaceBefore=!0),a&&(p.comment=a,p.range[2]=c),p}function Zh({options:e},{offset:t,source:n,end:l},i){const a=new Gr(n.substring(1));a.source===""&&i(t,"BAD_ALIAS","Alias cannot be an empty string"),a.source.endsWith(":")&&i(t+n.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=t+n.length,s=Qi(l,r,e.strict,i);return a.range=[t,r,s.offset],s.comment&&(a.comment=s.comment),a}function e0(e,t,{offset:n,start:l,value:i,end:a},r){const s=Object.assign({_directives:t},e),c=new zl(void 0,s),d={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},u=Ol(l,{indicator:"doc-start",next:i??(a==null?void 0:a[0]),offset:n,onError:r,parentIndent:0,startOnNewline:!0});u.found&&(c.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&r(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=i?kf(d,i,u,r):Hc(d,u.end,l,null,u,r);const p=c.contents.range[2],f=Qi(a,p,!1,r);return f.comment&&(c.comment=f.comment),c.range=[n,p,f.offset],c}function ii(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:n}=e;return[t,t+(typeof n=="string"?n.length:1)]}function fu(e){var i;let t="",n=!1,l=!1;for(let a=0;a<e.length;++a){const r=e[a];switch(r[0]){case"#":t+=(t===""?"":l?`

`:`
`)+(r.substring(1)||" "),n=!0,l=!1;break;case"%":((i=e[a+1])==null?void 0:i[0])!=="#"&&(a+=1),n=!1;break;default:n||(l=!0),n=!1}}return{comment:t,afterEmptyLine:l}}class qc{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(n,l,i,a)=>{const r=ii(n);a?this.warnings.push(new _f(r,l,i)):this.errors.push(new Bn(r,l,i))},this.directives=new Ye({version:t.version||"1.2"}),this.options=t}decorate(t,n){const{comment:l,afterEmptyLine:i}=fu(this.prelude);if(l){const a=t.contents;if(n)t.comment=t.comment?`${t.comment}
${l}`:l;else if(i||t.directives.docStart||!a)t.commentBefore=l;else if(ke(a)&&!a.flow&&a.items.length>0){let r=a.items[0];we(r)&&(r=r.key);const s=r.commentBefore;r.commentBefore=s?`${l}
${s}`:l}else{const r=a.commentBefore;a.commentBefore=r?`${l}
${r}`:l}}n?(Array.prototype.push.apply(t.errors,this.errors),Array.prototype.push.apply(t.warnings,this.warnings)):(t.errors=this.errors,t.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:fu(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,n=!1,l=-1){for(const i of t)yield*this.next(i);yield*this.end(n,l)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(n,l,i)=>{const a=ii(t);a[0]+=n,this.onError(a,"BAD_DIRECTIVE",l,i)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const n=e0(this.options,this.directives,t,this.onError);this.atDirectives&&!n.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(n,!1),this.doc&&(yield this.doc),this.doc=n,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const n=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,l=new Bn(ii(t),"UNEXPECTED_TOKEN",n);this.atDirectives||!this.doc?this.errors.push(l):this.doc.errors.push(l);break}case"doc-end":{if(!this.doc){const l="Unexpected doc-end without preceding document";this.errors.push(new Bn(ii(t),"UNEXPECTED_TOKEN",l));break}this.doc.directives.docEnd=!0;const n=Qi(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),n.comment){const l=this.doc.comment;this.doc.comment=l?`${l}
${n.comment}`:n.comment}this.doc.range[2]=n.offset;break}default:this.errors.push(new Bn(ii(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,n=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const l=Object.assign({_directives:this.directives},this.options),i=new zl(void 0,l);this.atDirectives&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,n,n],this.decorate(i,!1),yield i}}}function t0(e,t=!0,n){if(e){const l=(i,a,r)=>{const s=typeof i=="number"?i:Array.isArray(i)?i[0]:i.offset;if(n)n(s,a,r);else throw new Bn([s,s+1],a,r)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Cf(e,t,l);case"block-scalar":return wf({options:{strict:t}},e,l)}}return null}function n0(e,t){const{implicitKey:n=!1,indent:l,inFlow:i=!1,offset:a=-1,type:r="PLAIN"}=t,s=zi({type:r,value:e},{implicitKey:n,indent:l>0?" ".repeat(l):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}}),c=t.end??[{type:"newline",offset:-1,indent:l,source:`
`}];switch(s[0]){case"|":case">":{const d=s.indexOf(`
`),u=s.substring(0,d),p=s.substring(d+1)+`
`,f=[{type:"block-scalar-header",offset:a,indent:l,source:u}];return Pf(f,c)||f.push({type:"newline",offset:-1,indent:l,source:`
`}),{type:"block-scalar",offset:a,indent:l,props:f,source:p}}case'"':return{type:"double-quoted-scalar",offset:a,indent:l,source:s,end:c};case"'":return{type:"single-quoted-scalar",offset:a,indent:l,source:s,end:c};default:return{type:"scalar",offset:a,indent:l,source:s,end:c}}}function l0(e,t,n={}){let{afterKey:l=!1,implicitKey:i=!1,inFlow:a=!1,type:r}=n,s="indent"in e?e.indent:null;if(l&&typeof s=="number"&&(s+=2),!r)switch(e.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{const d=e.props[0];if(d.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r=d.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}const c=zi({type:r,value:t},{implicitKey:i||s===null,indent:s!==null&&s>0?" ".repeat(s):"",inFlow:a,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":i0(e,c);break;case'"':Eo(e,c,"double-quoted-scalar");break;case"'":Eo(e,c,"single-quoted-scalar");break;default:Eo(e,c,"scalar")}}function i0(e,t){const n=t.indexOf(`
`),l=t.substring(0,n),i=t.substring(n+1)+`
`;if(e.type==="block-scalar"){const a=e.props[0];if(a.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a.source=l,e.source=i}else{const{offset:a}=e,r="indent"in e?e.indent:-1,s=[{type:"block-scalar-header",offset:a,indent:r,source:l}];Pf(s,"end"in e?e.end:void 0)||s.push({type:"newline",offset:-1,indent:r,source:`
`});for(const c of Object.keys(e))c!=="type"&&c!=="offset"&&delete e[c];Object.assign(e,{type:"block-scalar",indent:r,props:s,source:i})}}function Pf(e,t){if(t)for(const n of t)switch(n.type){case"space":case"comment":e.push(n);break;case"newline":return e.push(n),!0}return!1}function Eo(e,t,n){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=n,e.source=t;break;case"block-scalar":{const l=e.props.slice(1);let i=t.length;e.props[0].type==="block-scalar-header"&&(i-=e.props[0].source.length);for(const a of l)a.offset+=i;delete e.props,Object.assign(e,{type:n,source:t,end:l});break}case"block-map":case"block-seq":{const i={type:"newline",offset:e.offset+t.length,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:n,source:t,end:[i]});break}default:{const l="indent"in e?e.indent:-1,i="end"in e&&Array.isArray(e.end)?e.end.filter(a=>a.type==="space"||a.type==="comment"||a.type==="newline"):[];for(const a of Object.keys(e))a!=="type"&&a!=="offset"&&delete e[a];Object.assign(e,{type:n,indent:l,source:t,end:i})}}}const a0=e=>"type"in e?br(e):ja(e);function br(e){switch(e.type){case"block-scalar":{let t="";for(const n of e.props)t+=br(n);return t+e.source}case"block-map":case"block-seq":{let t="";for(const n of e.items)t+=ja(n);return t}case"flow-collection":{let t=e.start.source;for(const n of e.items)t+=ja(n);for(const n of e.end)t+=n.source;return t}case"document":{let t=ja(e);if(e.end)for(const n of e.end)t+=n.source;return t}default:{let t=e.source;if("end"in e&&e.end)for(const n of e.end)t+=n.source;return t}}}function ja({start:e,key:t,sep:n,value:l}){let i="";for(const a of e)i+=a.source;if(t&&(i+=br(t)),n)for(const a of n)i+=a.source;return l&&(i+=br(l)),i}const Vs=Symbol("break visit"),r0=Symbol("skip children"),Df=Symbol("remove item");function zn(e,t){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),Tf(Object.freeze([]),e,t)}zn.BREAK=Vs;zn.SKIP=r0;zn.REMOVE=Df;zn.itemAtPath=(e,t)=>{let n=e;for(const[l,i]of t){const a=n==null?void 0:n[l];if(a&&"items"in a)n=a.items[i];else return}return n};zn.parentCollection=(e,t)=>{const n=zn.itemAtPath(e,t.slice(0,-1)),l=t[t.length-1][0],i=n==null?void 0:n[l];if(i&&"items"in i)return i;throw new Error("Parent collection not found")};function Tf(e,t,n){let l=n(t,e);if(typeof l=="symbol")return l;for(const i of["key","value"]){const a=t[i];if(a&&"items"in a){for(let r=0;r<a.items.length;++r){const s=Tf(Object.freeze(e.concat([[i,r]])),a.items[r],n);if(typeof s=="number")r=s-1;else{if(s===Vs)return Vs;s===Df&&(a.items.splice(r,1),r-=1)}}typeof l=="function"&&i==="key"&&(l=l(t,e))}}return typeof l=="function"?l(t,e):l}const qr="\uFEFF",zr="",Kr="",ji="",o0=e=>!!e&&"items"in e,s0=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function c0(e){switch(e){case qr:return"<BOM>";case zr:return"<DOC>";case Kr:return"<FLOW_END>";case ji:return"<SCALAR>";default:return JSON.stringify(e)}}function Nf(e){switch(e){case qr:return"byte-order-mark";case zr:return"doc-mode";case Kr:return"flow-error-end";case ji:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const d0=Object.freeze(Object.defineProperty({__proto__:null,BOM:qr,DOCUMENT:zr,FLOW_END:Kr,SCALAR:ji,createScalarToken:n0,isCollection:o0,isScalar:s0,prettyToken:c0,resolveAsScalar:t0,setScalarValue:l0,stringify:a0,tokenType:Nf,visit:zn},Symbol.toStringTag,{value:"Module"}));function Dt(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const yu=new Set("0123456789ABCDEFabcdef"),u0=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),xa=new Set(",[]{}"),p0=new Set(` ,[]{}
\r	`),Vo=e=>!e||p0.has(e);class Af{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,n=!1){if(t){if(typeof t!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null}this.atEnd=!n;let l=this.next??"stream";for(;l&&(n||this.hasChars(1));)l=yield*this.parseNext(l)}atLineEnd(){let t=this.pos,n=this.buffer[t];for(;n===" "||n==="	";)n=this.buffer[++t];return!n||n==="#"||n===`
`?!0:n==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let n=this.buffer[t];if(this.indentNext>0){let l=0;for(;n===" ";)n=this.buffer[++l+t];if(n==="\r"){const i=this.buffer[l+t+1];if(i===`
`||!i&&!this.atEnd)return t+l+1}return n===`
`||l>=this.indentNext||!n&&!this.atEnd?t+l:-1}if(n==="-"||n==="."){const l=this.buffer.substr(t,3);if((l==="---"||l==="...")&&Dt(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===qr&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let n=t.length,l=t.indexOf("#");for(;l!==-1;){const a=t[l-1];if(a===" "||a==="	"){n=l-1;break}else l=t.indexOf("#",l+1)}for(;;){const a=t[n-1];if(a===" "||a==="	")n-=1;else break}const i=(yield*this.pushCount(n))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const n=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-n),yield*this.pushNewline(),"stream"}return yield zr,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const n=this.peek(3);if((n==="---"||n==="...")&&Dt(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,n==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Dt(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,n]=this.peek(2);if(!n&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&Dt(n)){const l=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=l,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let n=yield*this.pushIndicators();switch(t[n]){case"#":yield*this.pushCount(t.length-n);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Vo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return n+=yield*this.parseBlockScalarHeader(),n+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-n),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,n,l=-1;do t=yield*this.pushNewline(),t>0?(n=yield*this.pushSpaces(!1),this.indentValue=l=n):n=0,n+=yield*this.pushSpaces(!0);while(t+n>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((l!==-1&&l<this.indentNext&&i[0]!=="#"||l===0&&(i.startsWith("---")||i.startsWith("..."))&&Dt(i[3]))&&!(l===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield Kr,yield*this.parseLineStart();let a=0;for(;i[a]===",";)a+=yield*this.pushCount(1),a+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(a+=yield*this.pushIndicators(),i[a]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-a),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Vo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||Dt(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let n=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;n!==-1&&this.buffer[n+1]==="'";)n=this.buffer.indexOf("'",n+2);else for(;n!==-1;){let a=0;for(;this.buffer[n-1-a]==="\\";)a+=1;if(a%2===0)break;n=this.buffer.indexOf('"',n+1)}const l=this.buffer.substring(0,n);let i=l.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const a=this.continueScalar(i+1);if(a===-1)break;i=l.indexOf(`
`,a)}i!==-1&&(n=i-(l[i-1]==="\r"?2:1))}if(n===-1){if(!this.atEnd)return this.setNext("quoted-scalar");n=this.buffer.length}return yield*this.pushToIndex(n+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const n=this.buffer[++t];if(n==="+")this.blockScalarKeep=!0;else if(n>"0"&&n<="9")this.blockScalarIndent=Number(n)-1;else if(n!=="-")break}return yield*this.pushUntil(n=>Dt(n)||n==="#")}*parseBlockScalar(){let t=this.pos-1,n=0,l;e:for(let a=this.pos;l=this.buffer[a];++a)switch(l){case" ":n+=1;break;case`
`:t=a,n=0;break;case"\r":{const r=this.buffer[a+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!l&&!this.atEnd)return this.setNext("block-scalar");if(n>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=n:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const a=this.continueScalar(t+1);if(a===-1)break;t=this.buffer.indexOf(`
`,a)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let i=t+1;for(l=this.buffer[i];l===" ";)l=this.buffer[++i];if(l==="	"){for(;l==="	"||l===" "||l==="\r"||l===`
`;)l=this.buffer[++i];t=i-1}else if(!this.blockScalarKeep)do{let a=t-1,r=this.buffer[a];r==="\r"&&(r=this.buffer[--a]);const s=a;for(;r===" ";)r=this.buffer[--a];if(r===`
`&&a>=this.pos&&a+1+n>s)t=a;else break}while(!0);return yield ji,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let n=this.pos-1,l=this.pos-1,i;for(;i=this.buffer[++l];)if(i===":"){const a=this.buffer[l+1];if(Dt(a)||t&&xa.has(a))break;n=l}else if(Dt(i)){let a=this.buffer[l+1];if(i==="\r"&&(a===`
`?(l+=1,i=`
`,a=this.buffer[l+1]):n=l),a==="#"||t&&xa.has(a))break;if(i===`
`){const r=this.continueScalar(l+1);if(r===-1)break;l=Math.max(l,r-2)}}else{if(t&&xa.has(i))break;n=l}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield ji,yield*this.pushToIndex(n+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,n){const l=this.buffer.slice(this.pos,t);return l?(yield l,this.pos+=l.length,l.length):(n&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Vo))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(Dt(n)||t&&xa.has(n))return t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,n=this.buffer[t];for(;!Dt(n)&&n!==">";)n=this.buffer[++t];return yield*this.pushToIndex(n===">"?t+1:t,!1)}else{let t=this.pos+1,n=this.buffer[t];for(;n;)if(u0.has(n))n=this.buffer[++t];else if(n==="%"&&yu.has(this.buffer[t+1])&&yu.has(this.buffer[t+2]))n=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let n=this.pos-1,l;do l=this.buffer[++n];while(l===" "||t&&l==="	");const i=n-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=n),i}*pushUntil(t){let n=this.pos,l=this.buffer[n];for(;!t(l);)l=this.buffer[++n];return yield*this.pushToIndex(n,!1)}}class Ef{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let n=0,l=this.lineStarts.length;for(;n<l;){const a=n+l>>1;this.lineStarts[a]<t?n=a+1:l=a}if(this.lineStarts[n]===t)return{line:n+1,col:1};if(n===0)return{line:0,col:t};const i=this.lineStarts[n-1];return{line:n,col:t-i+1}}}}function on(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function gu(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function Vf(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function _a(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function il(e){var n;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((n=e[++t])==null?void 0:n.type)==="space";);return e.splice(t,e.length)}function bu(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!on(t.start,"explicit-key-ind")&&!on(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,Vf(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class zc{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Af,this.onNewLine=t}*parse(t,n=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const l of this.lexer.lex(t,n))yield*this.next(l);n||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const n=Nf(t);if(n)if(n==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=n,yield*this.step(),n){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const l=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:l,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(!t||t.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const n=t??this.stack.pop();if(!n)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield n;else{const l=this.peek(1);switch(n.type==="block-scalar"?n.indent="indent"in l?l.indent:0:n.type==="flow-collection"&&l.type==="document"&&(n.indent=0),n.type==="flow-collection"&&bu(n),l.type){case"document":l.value=n;break;case"block-scalar":l.props.push(n);break;case"block-map":{const i=l.items[l.items.length-1];if(i.value){l.items.push({start:[],key:n,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=n;else{Object.assign(i,{key:n,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=l.items[l.items.length-1];i.value?l.items.push({start:[],value:n}):i.value=n;break}case"flow-collection":{const i=l.items[l.items.length-1];!i||i.value?l.items.push({start:[],key:n,sep:[]}):i.sep?i.value=n:Object.assign(i,{key:n,sep:[]});return}default:yield*this.pop(),yield*this.pop(n)}if((l.type==="document"||l.type==="block-map"||l.type==="block-seq")&&(n.type==="block-map"||n.type==="block-seq")){const i=n.items[n.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&gu(i.start)===-1&&(n.indent===0||i.start.every(a=>a.type!=="comment"||a.indent<n.indent))&&(l.type==="document"?l.end=i.start:l.items.push({start:i.start}),n.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{gu(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const n=this.startBlockValue(t);n?this.stack.push(n):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const n=_a(this.peek(2)),l=il(n);let i;t.end?(i=t.end,i.push(this.sourceToken),delete t.end):i=[this.sourceToken];const a={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:l,key:t,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,n.value){const i="end"in n.value?n.value.end:void 0,a=Array.isArray(i)?i[i.length-1]:void 0;(a==null?void 0:a.type)==="comment"?i==null||i.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else if(n.sep)n.sep.push(this.sourceToken);else{if(this.atIndentedComment(n.start,t.indent)){const i=t.items[t.items.length-2],a=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(a)){Array.prototype.push.apply(a,n.start),a.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const i=!this.onKeyLine&&this.indent===t.indent,a=i&&(n.sep||n.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(a&&n.sep&&!n.value){const s=[];for(let c=0;c<n.sep.length;++c){const d=n.sep[c];switch(d.type){case"newline":s.push(c);break;case"space":break;case"comment":d.indent>t.indent&&(s.length=0);break;default:s.length=0}}s.length>=2&&(r=n.sep.splice(s[1]))}switch(this.type){case"anchor":case"tag":a||n.value?(r.push(this.sourceToken),t.items.push({start:r}),this.onKeyLine=!0):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"explicit-key-ind":!n.sep&&!n.explicitKey?(n.start.push(this.sourceToken),n.explicitKey=!0):a||n.value?(r.push(this.sourceToken),t.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(n.explicitKey)if(n.sep)if(n.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(on(n.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(Vf(n.key)&&!on(n.sep,"newline")){const s=il(n.start),c=n.key,d=n.sep;d.push(this.sourceToken),delete n.key,delete n.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:c,sep:d}]})}else r.length>0?n.sep=n.sep.concat(r,this.sourceToken):n.sep.push(this.sourceToken);else if(on(n.start,"newline"))Object.assign(n,{key:null,sep:[this.sourceToken]});else{const s=il(n.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]})}else n.sep?n.value||a?t.items.push({start:r,key:null,sep:[this.sourceToken]}):on(n.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);a||n.value?(t.items.push({start:r,key:s,sep:[]}),this.onKeyLine=!0):n.sep?this.stack.push(s):(Object.assign(n,{key:s,sep:[]}),this.onKeyLine=!0);return}default:{const s=this.startBlockValue(t);if(s){if(s.type==="block-seq"){if(!n.explicitKey&&n.sep&&!on(n.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&t.items.push({start:r});this.stack.push(s);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(n.value){const i="end"in n.value?n.value.end:void 0,a=Array.isArray(i)?i[i.length-1]:void 0;(a==null?void 0:a.type)==="comment"?i==null||i.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(n.start,t.indent)){const i=t.items[t.items.length-2],a=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(a)){Array.prototype.push.apply(a,n.start),a.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return;case"anchor":case"tag":if(n.value||this.indent<=t.indent)break;n.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;n.value||on(n.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return}if(this.indent>t.indent){const i=this.startBlockValue(t);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const n=t.items[t.items.length-1];if(this.type==="flow-error-end"){let l;do yield*this.pop(),l=this.peek(1);while(l&&l.type==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!n||n.sep?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return;case"map-value-ind":!n||n.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!n||n.value?t.items.push({start:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!n||n.value?t.items.push({start:[],key:i,sep:[]}):n.sep?this.stack.push(i):Object.assign(n,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const l=this.startBlockValue(t);l?this.stack.push(l):(yield*this.pop(),yield*this.step())}else{const l=this.peek(2);if(l.type==="block-map"&&(this.type==="map-value-ind"&&l.indent===t.indent||this.type==="newline"&&!l.items[l.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&l.type!=="flow-collection"){const i=_a(l),a=il(i);bu(t);const r=t.end.splice(1,t.end.length);r.push(this.sourceToken);const s={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:a,key:t,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const n=_a(t),l=il(n);return l.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const n=_a(t),l=il(n);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,n){return this.type!=="comment"||this.indent<=n?!1:t.every(l=>l.type==="newline"||l.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Rf(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new Ef||null,prettyErrors:t}}function m0(e,t={}){const{lineCounter:n,prettyErrors:l}=Rf(t),i=new zc(n==null?void 0:n.addNewLine),a=new qc(t),r=Array.from(a.compose(i.parse(e)));if(l&&n)for(const s of r)s.errors.forEach(gr(e,n)),s.warnings.forEach(gr(e,n));return r.length>0?r:Object.assign([],{empty:!0},a.streamInfo())}function Mf(e,t={}){const{lineCounter:n,prettyErrors:l}=Rf(t),i=new zc(n==null?void 0:n.addNewLine),a=new qc(t);let r=null;for(const s of a.compose(i.parse(e),!0,e.length))if(!r)r=s;else if(r.options.logLevel!=="silent"){r.errors.push(new Bn(s.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return l&&n&&(r.errors.forEach(gr(e,n)),r.warnings.forEach(gr(e,n))),r}function f0(e,t,n){let l;typeof t=="function"?l=t:n===void 0&&t&&typeof t=="object"&&(n=t);const i=Mf(e,n);if(!i)return null;if(i.warnings.forEach(a=>ef(i.options.logLevel,a)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:l},n))}function y0(e,t,n){let l=null;if(typeof t=="function"||Array.isArray(t)?l=t:n===void 0&&t&&(n=t),typeof n=="string"&&(n=n.length),typeof n=="number"){const i=Math.round(n);n=i<1?void 0:i>8?{indent:8}:{indent:i}}if(e===void 0){const{keepUndefined:i}=n??t??{};if(!i)return}return Yn(e)&&!l?e.toString(n):new zl(e,l,n).toString(n)}const Gf=Object.freeze(Object.defineProperty({__proto__:null,Alias:Gr,CST:d0,Composer:qc,Document:zl,Lexer:Af,LineCounter:Ef,Pair:ze,Parser:zc,Scalar:te,Schema:Hr,YAMLError:Wc,YAMLMap:ut,YAMLParseError:Bn,YAMLSeq:Cn,YAMLWarning:_f,isAlias:Pn,isCollection:ke,isDocument:Yn,isMap:$l,isNode:De,isPair:we,isScalar:fe,isSeq:Wl,parse:f0,parseAllDocuments:m0,parseDocument:Mf,stringify:y0,visit:Xn,visitAsync:Mr},Symbol.toStringTag,{value:"Module"})),g0=`protocols:
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
  labels: {}
- model: 40100
  point: Md
  block: fixed
  entry:
    name: Md
    description: Device model identifier
    longdescription: Identifies the specific hardware model of the inverter as reported by the power conversion system (PCS). Used for tracking firmware compatibility and diagnostic reference.
    dtype: string
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: SN
  block: fixed
  entry:
    name: SN
    description: Device serial number
    longdescription: Unique serial number assigned to this inverter at manufacturing. Used to identify the physical unit for service
    dtype: string
    unit: N/A
    category: PCS information
    meanings: {}
  labels: {}
- model: 40100
  point: vNom
  block: fixed
  entry:
    name: vNom
    description: Nominal AC voltage
    longdescription: Rated AC output voltage of the inverter under standard conditions. Indicates the design voltage of the grid interface.
    dtype: uint16
    unit: V
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: fNom
  block: fixed
  entry:
    name: fNom
    description: Nominal AC frequency
    longdescription: Rated output frequency of the inverter when synchronized to the grid. Defines the system's base frequency for grid operation.
    dtype: uint16
    unit: Hz
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Freq
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: pNom
  block: fixed
  entry:
    name: pNom
    description: Nominal active power
    longdescription: Rated continuous active power output of the inverter at nominal operating conditions. Indicates maximum sustained real power delivery capability.
    dtype: uint32
    unit: W
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: sNom
  block: fixed
  entry:
    name: sNom
    description: Nominal apparent power
    longdescription: Rated continuous apparent power capacity (combined real and reactive components). Defines total output capability at rated voltage and frequency.
    dtype: uint32
    unit: VA
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: hwVer
  block: fixed
  entry:
    name: hwVer
    description: Hardware version
    longdescription: Indicates the inverter hardware revision. Useful for verifying component compatibility, field updates, and service documentation.
    dtype: uint16
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: verDspMaster
  block: fixed
  entry:
    name: verDspMaster
    description: Master DSP firmware version
    longdescription: Firmware version of the main digital signal processor controlling inverter power conversion. Used for compatibility tracking and diagnostic support.
    dtype: string
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Firmware
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: verDspSlave
  block: fixed
  entry:
    name: verDspSlave
    description: Slave DSP firmware version
    longdescription: Firmware version of the secondary DSP module responsible for parallel or auxiliary control functions. Used for synchronization and troubleshooting.
    dtype: string
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Firmware
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: verArmEms
  block: fixed
  entry:
    name: verArmEms
    description: EMS ARM firmware version
    longdescription: Firmware version of the embedded ARM processor managing energy management system (EMS) logic. Typically governs site-level control, communications, and grid interaction.
    dtype: string
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Firmware
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: verAFCI
  block: fixed
  entry:
    name: verAFCI
    description: AFCI module firmware version
    longdescription: Firmware version of the Arc-Fault Circuit Interrupter (AFCI) safety module. Confirms AFCI functionality and safety compliance level.
    dtype: string
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Firmware
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: verLCD1
  block: fixed
  entry:
    name: verLCD1
    description: LCD 1 firmware version
    longdescription: Firmware version of the primary LCD interface board, used to display system status and settings.
    dtype: uint16
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Firmware
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: verLCD2
  block: fixed
  entry:
    name: verLCD2
    description: LCD 2 firmware version
    longdescription: 'Firmware version of the secondary LCD interface or expansion display module. '
    dtype: uint16
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Firmware
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: verProto
  block: fixed
  entry:
    name: verProto
    description: Protocol software version
    longdescription: Version of the communication protocol firmware that defines inverter data and command interface behavior.
    dtype: uint16
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
- model: 40100
  point: verSafety
  block: fixed
  entry:
    name: verSafety
    description: Safety version
    longdescription: Version identifier for inverter safety control software. Used to confirm compliance with regulatory safety standards.
    dtype: uint16
    unit: N/A
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Number of independent Maximum Power Point Tracking (MPPT) channels available on the inverter. Each channel can independently optimize PV string voltage and current.
    dtype: uint16
    unit: N/A
    category: DC-PV
    meanings: {}
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Level of Detail
    label_text: Complete
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
      '1': single phase
      '2': split phase
      '3': three phases
    friendly_meanings:
      1: Single phase
      2: Split phase
      3: Three phase
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Type of Data
    label_text: Nameplate
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Scaling factor applied to voltage-related measurements. Used internally to convert raw data to engineering units.
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
    longdescription: Scaling factor applied to frequency measurements. Used internally for frequency data normalization.
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
    longdescription: Scaling factor applied to apparent power measurements. Used to convert raw register values to display units.
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
    longdescription: Scaling factor applied to active power measurements. Used for engineering unit conversion.
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
    longdescription: Unique identifier for this SunSpec model block within the inverter’s data map. Used internally for addressing.
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
    longdescription: Specifies the number of registers used by this model block. Primarily used by integrators for protocol mapping and diagnostics.
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
    longdescription: Unique identifier assigned to the installation site. Used for associating telemetry data with a specific system or location.
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
    longdescription: Unique serial number assigned to this inverter. Used for service tracking, firmware management, and telemetry association.
    dtype: string
    unit: N/A
    category: PCS information
    meanings: {}
  labels: {}
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
    longdescription: Indicates whether the photovoltaic input subsystem is operating normally or has detected a fault.
    dtype: enum16
    unit: N/A
    category: DC-PV
    meanings:
      '0': Normal
      '1': Failure
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: pPvTotal
  block: fixed
  entry:
    name: pPvTotal
    description: PV total input power
    longdescription: Total combined DC input power from all PV strings. Represents total DC solar generation by the inverter.
    dtype: uint32
    unit: W
    category: DC-PV
    meanings: {}
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
- model: 40101
  point: pMppt1
  block: fixed
  entry:
    name: pMppt1
    description: MPPT1 power
    longdescription: Instantaneous DC power measured at the first Maximum Power Point Tracking (MPPT) channel.
    dtype: uint32
    unit: W
    category: DC-PV
    meanings: {}
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended    
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete  
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
    longdescription: Nameplate battery capacity expressed in amp-hours for the installed pack. Use to validate configuration and estimate runtime.
    dtype: uint16
    unit: Ah
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: socBat
  block: fixed
  entry:
    name: socBat
    description: Battery state of charge
    longdescription: Current battery state of charge as a percentage of usable capacity. Useful for dispatch logic and runtime estimates.
    dtype: uint16
    unit: '%'
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Type of Data
    label_text: Readings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
- model: 40101
  point: sohBat
  block: fixed
  entry:
    name: sohBat
    description: Battery state of health
    longdescription: Average state of health across all battery modules. Indicates long-term capacity retention relative to new.
    dtype: uint16
    unit: '%'
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Type of Data
    label_text: Readings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: batChgDischMode
  block: fixed
  entry:
    name: batChgDischMode
    description: Battery charge/discharge mode
    longdescription: Current battery operating state, reflecting whether the pack is charging, discharging, holding, or at an end-of-range condition.
    dtype: enum16
    unit: N/A
    category: Battery
    meanings:
      '1': Charging
      '2': Discharging
      '3': Empty
      '4': Full
      '5': 'Off'
      '6': Holding
    friendly_meanings:
      1: 'Charging; 2: Discharging; 3: Empty; 4: Full; 5: Off; 6: Holding'
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: pBatChg
  block: fixed
  entry:
    name: pBatChg
    description: Battery charge power
    longdescription: Positive real power flowing **into** the battery (charging). Useful for verifying charge limits and schedules.
    dtype: uint32
    unit: W
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
- model: 40101
  point: pBatDischg
  block: fixed
  entry:
    name: pBatDischg
    description: Battery discharge power
    longdescription: Positive real power flowing **out of** the battery (discharging). Useful for load support and export control.
    dtype: uint32
    unit: W
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
- model: 40101
  point: iBat
  block: fixed
  entry:
    name: iBat
    description: Battery current
    longdescription: Instantaneous DC current at the battery terminals. Sign may indicate direction depending on implementation.
    dtype: int32
    unit: A
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
- model: 40101
  point: vBat
  block: fixed
  entry:
    name: vBat
    description: Battery voltage
    longdescription: Instantaneous DC voltage at the battery terminals. Use with current to validate power and cable sizing.
    dtype: uint16
    unit: V
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
- model: 40101
  point: vBatCellMax
  block: fixed
  entry:
    name: vBatCellMax
    description: Battery maximum cell voltage
    longdescription: Highest measured single-cell voltage across the pack. Useful for balancing and protection checks.
    dtype: uint16
    unit: V
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: vBatCellMin
  block: fixed
  entry:
    name: vBatCellMin
    description: Battery minimum cell voltage
    longdescription: Lowest measured single-cell voltage across the pack. Useful for diagnosing imbalance and aging.
    dtype: uint16
    unit: V
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: locBatCellVoltMax
  block: fixed
  entry:
    name: locBatCellVoltMax
    description: Module index of max cell voltage
    longdescription: Index (smallest module number) of the module containing the highest cell voltage. Aids pinpointing imbalance.
    dtype: uint32
    unit: N/A
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: locBatCellVoltMin
  block: fixed
  entry:
    name: locBatCellVoltMin
    description: Module index of min cell voltage
    longdescription: Index (smallest module number) of the module containing the lowest cell voltage. Aids pinpointing weak cells.
    dtype: uint32
    unit: N/A
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: tempBat
  block: fixed
  entry:
    name: tempBat
    description: Battery temperature
    longdescription: Measured temperature representative of the battery pack environment. Used for thermal limits and performance.
    dtype: int16
    unit: C
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: tempBatCellAvg
  block: fixed
  entry:
    name: tempBatCellAvg
    description: Battery average cell temperature
    longdescription: Average temperature across cells/modules. Useful for trend and thermal management.
    dtype: int16
    unit: C
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: tempBatCellMax
  block: fixed
  entry:
    name: tempBatCellMax
    description: Battery maximum cell temperature
    longdescription: Highest measured cell/module temperature. Check against derating and protection thresholds.
    dtype: int16
    unit: C
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: tempBatCellMin
  block: fixed
  entry:
    name: tempBatCellMin
    description: Battery minimum cell temperature
    longdescription: Lowest measured cell/module temperature. Helps detect sensor faults or cold spots.
    dtype: int16
    unit: C
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: locBatCellTempMax
  block: fixed
  entry:
    name: locBatCellTempMax
    description: Module index of max cell temperature
    longdescription: Index (smallest module number) of the module with the highest cell temperature for targeted inspection.
    dtype: uint32
    unit: N/A
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: locBatCellTempMin
  block: fixed
  entry:
    name: locBatCellTempMin
    description: Module index of min cell temperature
    longdescription: Index (smallest module number) of the module with the lowest cell temperature for targeted inspection.
    dtype: uint32
    unit: N/A
    category: Battery
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: bmsReqForceChg
  block: fixed
  entry:
    name: bmsReqForceChg
    description: Forced charging (BMS request)
    longdescription: BMS request flag indicating whether a forced charge is commanded due to protection or balancing needs.
    dtype: enum16
    unit: N/A
    category: Battery
    meanings:
      '0': 'BMS Force charge: OFF'
      '1': 'BMS Force charge: ON'
    friendly_meanings:
      0: 'Off; 1: On'
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
- model: 40101
  point: Var
  block: fixed
  entry:
    name: Var
    description: Reactive power total
    longdescription: Total reactive power at the inverter AC output for power factor and VAR support analysis.
    dtype: int32
    unit: Var
    category: Inverter
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: VA
  block: fixed
  entry:
    name: VA
    description: Apparent power total
    longdescription: Total apparent power at the inverter AC output (vector sum of real and reactive components).
    dtype: uint32
    unit: VA
    category: Inverter
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: PF
  block: fixed
  entry:
    name: PF
    description: Power factor
    longdescription: Instantaneous power factor of the inverter AC output. Unitless ratio of real to apparent power.
    dtype: int16
    unit: N/A
    category: Inverter
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: LLV
  block: fixed
  entry:
    name: LLV
    description: Inverter Output Voltage
    longdescription: Line-to-line RMS voltage at the inverter output (average of active phases).
    dtype: uint16
    unit: V
    category: Inverter
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: Hz
  block: fixed
  entry:
    name: Hz
    description: AC frequency
    longdescription: Output frequency of the inverter when operating. Useful for grid sync and backup mode checks.
    dtype: uint32
    unit: Hz
    category: Inverter
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Freq
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: Prec
  block: fixed
  entry:
    name: Prec
    description: AC charging rectification power
    longdescription: Power consumed by the rectifier stage during AC charging of the battery (if applicable).
    dtype: int32
    unit: W
    category: Inverter
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: tempAmb
  block: fixed
  entry:
    name: tempAmb
    description: Ambient temperature
    longdescription: Ambient temperature measured near the inverter enclosure. Useful for site condition assessment.
    dtype: int16
    unit: C
    category: Inverter
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: tempInt
  block: fixed
  entry:
    name: tempInt
    description: Internal temperature
    longdescription: Internal inverter temperature. Used for thermal protection and derating analysis.
    dtype: int16
    unit: C
    category: Inverter
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: tempLLC
  block: fixed
  entry:
    name: tempLLC
    description: LLC circuit temperature
    longdescription: Temperature of the LLC (resonant) stage or equivalent converter section. Monitor for stress and cooling adequacy.
    dtype: int16
    unit: C
    category: Inverter
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Temp
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Status of the utility/grid input as detected by the inverter protection and sync logic.
    dtype: enum16
    unit: N/A
    category: Grid
    meanings:
      '0': Normal
      '1': Failure
    friendly_meanings:
      0: Normal
      1: Grid Abnormal or Unavailable
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: pGridImpTot
  block: fixed
  entry:
    name: pGridImpTot
    description: Grid active power import
    longdescription: Total real power imported from the grid (consumed by the site).
    dtype: uint32
    unit: W
    category: Grid
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
- model: 40101
  point: pGridExpTot
  block: fixed
  entry:
    name: pGridExpTot
    description: Grid active power export
    longdescription: Total real power exported to the grid from PV and battery discharge.
    dtype: uint32
    unit: W
    category: Grid
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
- model: 40101
  point: qGridTot
  block: fixed
  entry:
    name: qGridTot
    description: Grid reactive power
    longdescription: Total reactive power at the point of common coupling for the grid connection.
    dtype: int32
    unit: Var
    category: Grid
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Freq
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Open(Off)
      '1': Close(On)
    friendly_meanings:
      0: 'Open (Off); 1: Close (On)'
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Freq
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: sLoadTot
  block: fixed
  entry:
    name: sLoadTot
    description: Load apparent power
    longdescription: Vector sum of real and reactive load power. Indicates total kVA capacity demanded by the loads.
    dtype: uint32
    unit: VA
    category: Load
    meanings: {}
  labels:
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: iLoadTot
  block: fixed
  entry:
    name: iLoadTot
    description: Load current
    longdescription: 'Sum of RMS currents across active load phases. '
    dtype: uint32
    unit: A
    category: Load
    meanings: {}
  labels:
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Freq
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Generator/Generator. Indicates the current state of the generator control contactor.
    dtype: enum16
    unit: N/A
    category: Generator
    meanings:
      '0': Open(Off)
      '1': Close(On)
    friendly_meanings:
      0: Open (Off)
      1: Close (On)
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: genRelayStat
  block: fixed
  entry:
    name: genRelayStat
    description: Generator relay status
    longdescription: State of the generator start/transfer relay as controlled by the inverter.
    dtype: enum16
    unit: N/A
    category: Generator
    meanings:
      '0': Open(Off)
      '1': Close(On)
    friendly_meanings:
      0: 'Open (Off); 1: Close (On)'
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Generator
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Freq
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: genActFlg
  block: fixed
  entry:
    name: genActFlg
    description: Generator Input Active
    longdescription: Indicates whether the generator input is active. The generator is "Activated" when the port is configured as a generator and voltage greater than 100 Vac is detected; otherwise it is, “Not active.”
    dtype: enum16
    unit: N/A
    category: Generator
    meanings:
      '0': Not activated
      '1': Activated
    friendly_meanings:
      0: Not Active
      1: Activated
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
  - label_family: Level of Detail
    label_text: Extended
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Freq
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40101
  point: acCplActFlg
  block: fixed
  entry:
    name: acCplActFlg
    description: AC couple active flag
    longdescription: Indicates whether AC-coupled functionality is enabled.
    dtype: enum16
    unit: N/A
    category: AC Couple
    meanings:
      '0': Not activated
      '1': Activated
    friendly_meanings:
      0: 'Not activated; 1: Activated'
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Freq
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Current
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Not activated
      '1': Activated
    friendly_meanings:
      0: 'Not activated; 1: Activated'
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Readings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Energy charged into the battery today.
    dtype: uint32
    unit: Wh
    category: Battery Energy
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40102
  point: eBatChgTot
  block: fixed
  entry:
    name: eBatChgTot
    description: Battery Charge Energy Total
    longdescription: Total lifetime energy charged into the battery.
    dtype: uint32
    unit: Wh
    category: Battery Energy
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40102
  point: eBatDischgTdy
  block: fixed
  entry:
    name: eBatDischgTdy
    description: Battery Discharge Energy Today
    longdescription: Energy discharged from the battery today.
    dtype: uint32
    unit: Wh
    category: Battery Energy
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
- model: 40102
  point: eBatDischgTot
  block: fixed
  entry:
    name: eBatDischgTot
    description: Battery Discharge Energy Total
    longdescription: Total lifetime energy discharged from the battery.
    dtype: uint32
    unit: Wh
    category: Battery Energy
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Grid
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Building Load
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Generator
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: PV
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Energy
  - label_family: Type of Data
    label_text: Readings
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Fan abnormal
      '1': LCD communication fault
      '2': Auto test failure
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Soft-start abnormal
      '1': DC bus short circuit
      '2': DC link unbalance/undervoltage
      '3': DC link overvoltage
      '4': DCDC abnormal
      '5': Inverter over temperature
      '6': Hardware over-current protection
      '7': Inverter relay abnormal
      '8': Internal power supply abnormal
      '9': Software version incompatibility
      '10': Internal DSP communication lost
      '11': Internal communication loss EMS to master DSP
      '12': Internal storage error
      '13': M3 Microprocessor TX failure
      '14': M3 Microprocessor RX failure
      '15': M8 Microprocessor TX failure
      '16': M8 Microprocessor RX failure
      '17': US/European Model detection error
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Parallel battery abnormal
      '1': Parallel grid abnormal
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Parallel ID warning
      '1': Parallel inverter sync signal abnormal
      '2': Parallel inverter general config abnormal
      '3': Parallel inverter power-rating mismatch
      '4': Parallel inverter phase config abnormal
      '5': Parallel inverter phase loss
      '6': Primary inverter communication loss
      '7': No primary inverter detected
      '8': Multiple primary inverters detected
      '9': Parallel communication error
      '10': Grid rule different in Parallel
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': PV polarity reverse
      '1': PV MPPT short circuit detected
      '2': AFCI communication loss
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Feature
    label_text: PV-DC
  - label_family: Level of Detail
    label_text: Complete
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
      '0': GFCI sensor abnormal
      '1': PV leakage current abnormal
      '2': PV insulation fault (ISO)
      '3': Arc-fault detected
      '4': PV boost abnormal
      '5': PV over-voltage
      '6': PV MPPT Multiple short circuits detected
      '7': GFCI module fault
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Feature
    label_text: PV-DC
  - label_family: Level of Detail
    label_text: Complete
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
      '0': No battery detected
      '1': Battery charge/discharge fault
      '2': BMS communication fault
      '3': Battery discharge over-current
      '4': Battery over-temperature
      '5': Battery under-temperature
      '6': Battery  Reversed
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Battery over-voltage
      '1': Battery under-voltage
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': No grid detected
      '1': Grid abnormal
      '2': VAC abnormal
      '3': Grid over-voltage
      '4': Grid under-voltage
      '5': Grid frequency fault
      '6': Grid over-frequency
      '7': Grid under-frequency
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Inverter DC-bias over-current
      '1': AC moving-average voltage high
      '2': Grid neutral abnormal
      '3': DSP-MCU grid-voltage fault
      '4': DC-bus UV sampling fault
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Meter lost
      '1': Meter reversed
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Meter
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Backup DC-Bias Over-voltage
      '1': Backup output voltage abnormal
      '2': Backup off-grid over-voltage
      '3': Backup short circuit
      '4': Backup overload
      '6': Backup AC Backfeed (Reverse Power Flow)
      '7': Backup and grid port miswired / cross-connection
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Backup Power
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Generator voltage abnormal
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
      '0': RSD active
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: RSD
  - label_family: Type of Data
    label_text: Alarms/Faults
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Inverter/Basic Setup. Date and time the inverter will use to run schedules
    dtype: uint16
    unit: N/A
    category: Basic
    meanings: {}
    friendly_meanings:
      Date: Year
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Month
  block: fixed
  entry:
    name: Month
    description: System Time Mon
    longdescription: Value from Site Configuration Inverter/Basic Setup. Date and time the inverter will use to run schedules
    dtype: uint16
    unit: N/A
    category: Basic
    meanings: {}
    friendly_meanings:
      Date: Month
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Day
  block: fixed
  entry:
    name: Day
    description: System Time Day
    longdescription: Value from Site Configuration Inverter/Basic Setup. Date and time the inverter will use to run schedules
    dtype: uint16
    unit: N/A
    category: Basic
    meanings: {}
    friendly_meanings:
      Date: Day
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Hour
  block: fixed
  entry:
    name: Hour
    description: System Time Hour
    longdescription: Value from Site Configuration Inverter/Basic Setup. Date and time the inverter will use to run schedules
    dtype: uint16
    unit: N/A
    category: Basic
    meanings: {}
    friendly_meanings:
      Date: Hour
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Minute
  block: fixed
  entry:
    name: Minute
    description: System Time Min
    longdescription: Value from Site Configuration Inverter/Basic Setup. Date and time the inverter will use to run schedules
    dtype: uint16
    unit: N/A
    category: Basic
    meanings: {}
    friendly_meanings:
      Date: Minute
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Second
  block: fixed
  entry:
    name: Second
    description: System Time Sec
    longdescription: Value from Site Configuration Inverter/Basic Setup. Date and time the inverter will use to run schedules
    dtype: uint16
    unit: N/A
    category: Basic
    meanings: {}
    friendly_meanings:
      Date: Second
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: OperatingMode
  block: fixed
  entry:
    name: OperatingMode
    description: Grid Interaction
    longdescription: Value from Site Configuration Inverter/Basic Setup. Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.
    dtype: enum16
    unit: N/A
    category: Basic
    meanings:
      '0': Grid-tied
      '1': Off-grid
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: WorkMode
  block: fixed
  entry:
    name: WorkMode
    description: Operating Mode
    longdescription: |
      Value from Site Configuration Inverter/Basic Setup. Select how solar power is prioritized.
      
      - Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed).
      
      - Export first: PV powers the home, then exports to grid, and charges the battery last.
      
      - Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed).

      If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.
    dtype: enum16
    unit: N/A
    category: Basic
    meanings:
      '0': Self used mode
      '1': Feed-in priority mode
      '2': Back-up mode
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: PowerControl
  block: fixed
  entry:
    name: PowerControl
    description: Power Status
    longdescription: Value from Site Configuration Inverter/Basic Setup. Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.
    dtype: enum16
    unit: N/A
    category: Basic
    meanings:
      '0': Standby
      '1': PowerOn
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
      '0': Load EVCharger, Battery, Grid
      '1': Load EVCharger, Grid, Battery
      '2': Battery, Load EVCharger, Grid
      '3': Load EVCharger, Battery
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
      '0': PV, Battery, Grid, Generator
      '1': PV, Grid, Battery,Generator
      '2': PV, Battery, Generator
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
    longdescription: Value from Site Configuration Inverter/Current Transformer (CT) Settings. Select the current transformer (CT) ratio used for metering electric current on the grid port connection. This must match the CT hardware rating so that current and power readings are accurate.
    dtype: enum16
    unit: N/A
    category: Measurement
    meanings:
      '0': Unknown
      '1': '1000 : 1'
      '2': '2000 : 1'
      '3': '2500 : 1'
      '4': '3000 : 1'
      '5': '4000 : 1'
      '6': '5000 : 1'
      '7': '6000 : 1'
      '8': '10000 : 1'
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: CT
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: CTDirection
  block: fixed
  entry:
    name: CTDirection
    description: CT Direction
    longdescription: Value from Site Configuration Inverter/Current Transformer (CT) Settings. Sets the CT installation direction. You may choose to reverse this if your inverter is reading import when power is actually flowing out to the grid (export) or vice versa.
    dtype: enum16
    unit: N/A
    category: Measurement
    meanings:
      '0': Grid to inverter
      '1': Inverter to grid
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: CT
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Battery/Setup. Specifies the chemistry or general type of connected battery. Choose **No Battery** for standalone PV or grid-tie operation, **Lead-acid** for flooded or AGM batteries, or **Lithium-ion** for managed BMS packs.
    dtype: enum16
    unit: N/A
    category: BatteryBase
    meanings:
      '1': Lead-Acid battery
      '2': Lithium-ion
      '3': Unavailable
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: BatteryBrand
  block: fixed
  entry:
    name: BatteryBrand
    description: Battery Brand
    longdescription: Value from Site Configuration Battery/Setup. Selects the manufacturer profile for the connected battery. This may pre-configure recommended voltage and SOC limits for optimal operation.
    dtype: enum16
    unit: N/A
    category: BatteryBase
    meanings:
      '0': Unavailable
      '1': FortressPower
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: AbsorbVoltage
  block: fixed
  entry:
    name: AbsorbVoltage
    description: Absorb Voltage
    longdescription: Value from Site Configuration Battery/Setup. Sets the voltage used during the absorb (bulk-to-float transition) phase. Increasing this value raises the upper charge threshold for lead-acid batteries.
    dtype: uint16
    unit: N/A
    category: BatteryBase
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: FloatVoltage
  block: fixed
  entry:
    name: FloatVoltage
    description: Float Voltage
    longdescription: Value from Site Configuration Battery/Setup. Defines the voltage maintained once the battery is fully charged. This helps prevent overcharging while keeping the battery topped off.
    dtype: uint16
    unit: N/A
    category: BatteryBase
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: VbatStartDerating
  block: fixed
  entry:
    name: VbatStartDerating
    description: Start Derating Voltage
    longdescription: Value from Site Configuration Battery/Setup. Voltage threshold where the inverter begins reducing charge or discharge current to protect the battery as it approaches full or low state.
    dtype: uint16
    unit: N/A
    category: BatteryBase
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ChaDisChaCtrlType
  block: fixed
  entry:
    name: ChaDisChaCtrlType
    description: Battery Control Type
    longdescription: 'Value from Site Configuration Battery/Setup. Determines how the inverter regulates both charging and discharging.


      SOC: Uses battery state of charge thresholds to start and stop charge/discharge.


      Volt: Uses DC voltage limits instead.'
    dtype: enum16
    unit: N/A
    category: BatteryBase
    meanings:
      '0': SOC(%),
      '1': Battery voltage (V)
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ChargeLimitSoc
  block: fixed
  entry:
    name: ChargeLimitSoc
    description: Charge Limit (SOC)
    longdescription: Value from Site Configuration Battery/Setup. Sets the maximum state of charge (SOC) the battery will be charged to. Once the battery reaches this level, charging stops to prevent overcharging and extend lifespan.
    dtype: uint16
    unit: '%'
    category: BatteryBase
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: MaxChargingCurrent
  block: fixed
  entry:
    name: MaxChargingCurrent
    description: Max Battery Current Max Charge Preset
    longdescription: Value from Site Configuration Battery/Setup. Sets the maximum charging and discharging current allowed for the connected inverter. Choose the preset that matches your inverter model to automatically apply the correct limits.
    dtype: uint16
    unit: A
    category: BatteryBase
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: OnGridCutOffSoc
  block: fixed
  entry:
    name: OnGridCutOffSoc
    description: On-Grid Battery Cutoff SOC
    longdescription: Value from Site Configuration Battery/Setup. Sets the minimum state of charge (SOC) the battery will discharge to while grid power is available. Below this level, the inverter will stop discharging and switch to grid power to protect battery capacity.
    dtype: uint16
    unit: '%'
    category: BatteryBase
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: OffGridCutOffSoc
  block: fixed
  entry:
    name: OffGridCutOffSoc
    description: Off-Grid Battery Cutoff SOC
    longdescription: Value from Site Configuration Battery/Setup. Sets the minimum state of charge (SOC) the battery will discharge to when operating off-grid. Once the battery reaches this level, the inverter stops discharging to prevent deep discharge and maintain battery health.
    dtype: uint16
    unit: '%'
    category: BatteryBase
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Battery/Battery Scheduling. This is a special scheduling mode designed for certain time-of-use (TOU) utility rates or other custom situations. In most circumstances, we recomment allowing your system to  manage charging and discharging automatically without setting a schedule.  You don't need to set a schedule unless you have a specific reason to charge or discharge at exact times.
    dtype: enum16
    unit: N/A
    category: BatteryScheduling
    meanings:
      '0': disable
      '1': enable
      '2': Inconsistency
    friendly_meanings:
      0: Disabled
      1: Enabled
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: pChgT1
  block: fixed
  entry:
    name: pChgT1
    description: Max Battery Charge Power During 'PV Charge Only' Periods
    longdescription: Value from Site Configuration Battery/Battery Scheduling/PV Charge Only. Sets the maximum charging power during scheduled Time-of-Use (TOU) charge periods in kW. Set this limit to control the power level at which the battery will charge from the grid during PV charge only periods
    dtype: uint32
    unit: W
    category: BatteryTOUCharge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: Power
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socChgEndT1
  block: fixed
  entry:
    name: socChgEndT1
    description: socChgEndT1
    longdescription: Charge end SOC in time 1
    dtype: uint16
    unit: '%'
    category: BatteryTOUCharge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socChgEndT2
  block: fixed
  entry:
    name: socChgEndT2
    description: socChgEndT2
    longdescription: Charge end SOC in time 2
    dtype: uint16
    unit: '%'
    category: BatteryTOUCharge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socChgEndT3
  block: fixed
  entry:
    name: socChgEndT3
    description: socChgEndT3
    longdescription: Charge end SOC in time 3
    dtype: uint16
    unit: '%'
    category: BatteryTOUCharge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: chgST1
  block: fixed
  entry:
    name: chgST1
    description: Schedule Window 1 for PV Charge Only Start Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/PV Charge Only. During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: chgET1
  block: fixed
  entry:
    name: chgET1
    description: Schedule Window 1 for PV Charge Only End Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/PV Charge Only. During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: chgST2
  block: fixed
  entry:
    name: chgST2
    description: Schedule Window 2 for PV Charge Only Start Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/PV Charge Only. During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: chgET2
  block: fixed
  entry:
    name: chgET2
    description: Schedule Window 2 for PV Charge Only End Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/PV Charge Only. During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: chgST3
  block: fixed
  entry:
    name: chgST3
    description: Schedule Window 3 for PV Charge Only Start Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/PV Charge Only. During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: chgET3
  block: fixed
  entry:
    name: chgET3
    description: Schedule Window 3 for PV Charge Only End Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/PV Charge Only. During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Battery/Battery Scheduling/Discharge Only. Sets the maximum discharging power during scheduled Time-of-Use (TOU) discharge periods in kW. Limit this to control how much battery power is exported to loads or grid during those windows.
    dtype: uint32
    unit: kW
    category: BatteryTOUDischarge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socDischgEndT1
  block: fixed
  entry:
    name: socDischgEndT1
    description: TOU Discharge Stop SOC
    longdescription: Value from Site Configuration Battery/Battery Scheduling/Discharge Only. Sets the minimum state of charge (SOC) that the battery will discharge to during 'Discharge Only' operation. Once this level is reached, discharging stops to preserve reserve capacity for later use or backup.
    dtype: uint16
    unit: '%'
    category: BatteryTOUDischarge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socDischgEndT2
  block: fixed
  entry:
    name: socDischgEndT2
    description: socDischgEndT2
    longdescription: Discharge end SOC in time 2
    dtype: uint16
    unit: '%'
    category: BatteryTOUDischarge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socDischgEndT3
  block: fixed
  entry:
    name: socDischgEndT3
    description: socDischgEndT3
    longdescription: Discharge end SOC in time 3
    dtype: uint16
    unit: '%'
    category: BatteryTOUDischarge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: dischgST1
  block: fixed
  entry:
    name: dischgST1
    description: Schedule Window 1 for Discharge Only Start Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/Discharge Only. During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUDischarge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: dischgET1
  block: fixed
  entry:
    name: dischgET1
    description: Schedule Window 1 for Discharge Only End Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/Discharge Only. During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUDischarge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: dischgST2
  block: fixed
  entry:
    name: dischgST2
    description: Schedule Window 2 for Discharge Only Start Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/Discharge Only. During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUDischarge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: dischgET2
  block: fixed
  entry:
    name: dischgET2
    description: Schedule Window 2 for Discharge Only End Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/Discharge Only. During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUDischarge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: dischgST3
  block: fixed
  entry:
    name: dischgST3
    description: Schedule Window 3 for Discharge Only Start Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/Discharge Only. During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUDischarge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: dischgET3
  block: fixed
  entry:
    name: dischgET3
    description: Schedule Window 3 for Discharge Only End Minute (0-59)
    longdescription: Value from Site Configuration Battery/Battery Scheduling/Discharge Only. During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed
    dtype: bitsplit
    unit: bitsplit
    category: BatteryTOUDischarge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Grid/Setup. This setting changes the conditions under which the inverter will connect or disconnect from the utility grid. Different areas have different rules about when this equipment is allowed to disconnect and when it must ride through. Choose the code required by the local utility or AHJ.
    dtype: enum16
    unit: N/A
    category: GridBase
    meanings:
      '0': Default(UL-240-18)
      '1': California(Rule 21)
      '2': Hawaii(Rule 14)
      '3': Puerto Rico LUMA
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridType
  block: fixed
  entry:
    name: GridType
    description: Grid Type
    longdescription: Value from Site Configuration Grid/Setup. Choose wiring configuration of the site.  This helps configure the system to match the power service at the site.  Note the voltage you enter here must match the EPS Voltage.
    dtype: enum16
    unit: N/A
    category: GridBase
    meanings:
      '0': Split240V/120V
      '1': 3phase 208V/120V
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreq
  block: fixed
  entry:
    name: GridFreq
    description: Grid Frequency
    longdescription: Value from Site Configuration Grid/Setup. Sets the nominal grid frequency for the installation. Use 60 Hz for North America and most split-phase installs; use 50 Hz for regions that operate at 230 V single-phase.
    dtype: uint16
    unit: N/A
    category: GridBase
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Setup
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Grid/Grid Connection. Shows whether the inverter is permitted to operate in grid-connected mode.
    dtype: enum16
    unit: N/A
    category: GridConnection
    meanings:
      '0': disable,
      '1': enable
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: RampRate
  block: fixed
  entry:
    name: RampRate
    description: Ramp Rate
    longdescription: Value from Site Configuration Grid/Grid Connection. How quickly inverter output is allowed to increase.
    dtype: uint16
    unit: N/A
    category: GridConnection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ApplicableVoltageLow
  block: fixed
  entry:
    name: ApplicableVoltageLow
    description: Applicable Grid Voltage Range Lower Limit (Vac)
    longdescription: Value from Site Configuration Grid/Grid Connection. Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.
    dtype: uint16
    unit: N/A
    category: GridConnection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ApplicableVoltageHigh
  block: fixed
  entry:
    name: ApplicableVoltageHigh
    description: Applicable Grid Voltage Range Upper Limit (Vac)
    longdescription: Value from Site Configuration Grid/Grid Connection. Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.
    dtype: uint16
    unit: N/A
    category: GridConnection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ApplicableFrequencyLow
  block: fixed
  entry:
    name: ApplicableFrequencyLow
    description: Applicable Grid Frequency Range Lower Limit (Hz)
    longdescription: Value from Site Configuration Grid/Grid Connection. Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.
    dtype: uint16
    unit: N/A
    category: GridConnection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ApplicableFrequencyHigh
  block: fixed
  entry:
    name: ApplicableFrequencyHigh
    description: Applicable Grid Frequency Range Upper Limit (Hz)
    longdescription: Value from Site Configuration Grid/Grid Connection. Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.
    dtype: uint16
    unit: N/A
    category: GridConnection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ConnectionDelayTime
  block: fixed
  entry:
    name: ConnectionDelayTime
    description: Connection Delay Times Connection Delay (s)
    longdescription: Value from Site Configuration Grid/Grid Connection. Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.
    dtype: uint16
    unit: N/A
    category: GridConnection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ReconnectionDelayTime
  block: fixed
  entry:
    name: ReconnectionDelayTime
    description: Connection Delay Times Reconnection Delay (s)
    longdescription: Value from Site Configuration Grid/Grid Connection. Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.
    dtype: uint16
    unit: N/A
    category: GridConnection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit1LowTime
  block: fixed
  entry:
    name: GridVoltLimit1LowTime
    description: Grid Voltage Trip Time Low Voltage Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit1High
  block: fixed
  entry:
    name: GridVoltLimit1High
    description: Grid Voltage Limits (Stage 1) Upper Limit (Vac)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit1HighTime
  block: fixed
  entry:
    name: GridVoltLimit1HighTime
    description: Grid Voltage Trip Time High Voltage Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit2Low
  block: fixed
  entry:
    name: GridVoltLimit2Low
    description: Grid Voltage Limits (Stage 2) Lower Limit (Vac)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit2LowTime
  block: fixed
  entry:
    name: GridVoltLimit2LowTime
    description: Grid Voltage Trip Time (Stage 2) Low Voltage Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit2High
  block: fixed
  entry:
    name: GridVoltLimit2High
    description: Grid Voltage Limits (Stage 2) Upper Limit (Vac)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit2HighTime
  block: fixed
  entry:
    name: GridVoltLimit2HighTime
    description: Grid Voltage Trip Time (Stage 2) High Voltage Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit3Low
  block: fixed
  entry:
    name: GridVoltLimit3Low
    description: Grid Voltage Limits (Stage 3) Lower Limit (Vac)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit3LowTime
  block: fixed
  entry:
    name: GridVoltLimit3LowTime
    description: Grid Voltage Trip Time (Stage 3) Low Voltage Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit3High
  block: fixed
  entry:
    name: GridVoltLimit3High
    description: Grid Voltage Limits (Stage 3) Upper Limit (Vac)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridVoltLimit3HighTime
  block: fixed
  entry:
    name: GridVoltLimit3HighTime
    description: Grid Voltage Trip Time (Stage 3) High Voltage Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit1Low
  block: fixed
  entry:
    name: GridFreqLimit1Low
    description: Grid Frequency Limits (Stage 1) Lower Limit (Hz)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit1LowTime
  block: fixed
  entry:
    name: GridFreqLimit1LowTime
    description: Grid Frequency Trip Time (Stage 1) Low Frequency Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit1High
  block: fixed
  entry:
    name: GridFreqLimit1High
    description: Grid Frequency Limits (Stage 1) Upper Limit (Hz)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit1HighTime
  block: fixed
  entry:
    name: GridFreqLimit1HighTime
    description: Grid Frequency Trip Time (Stage 1) High Frequency Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit2Low
  block: fixed
  entry:
    name: GridFreqLimit2Low
    description: Grid Frequency Limits (Stage 2) Lower Limit (Hz)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit2LowTime
  block: fixed
  entry:
    name: GridFreqLimit2LowTime
    description: Grid Frequency Trip Time (Stage 2) Low Frequency Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit2High
  block: fixed
  entry:
    name: GridFreqLimit2High
    description: Grid Frequency Limits (Stage 2) Upper Limit (Hz)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit2HighTime
  block: fixed
  entry:
    name: GridFreqLimit2HighTime
    description: Grid Frequency Trip Time (Stage 2) High Frequency Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit3Low
  block: fixed
  entry:
    name: GridFreqLimit3Low
    description: Grid Frequency Limits (Stage 3) Lower Limit (Hz)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit3LowTime
  block: fixed
  entry:
    name: GridFreqLimit3LowTime
    description: Grid Frequency Trip Time (Stage 3) Low Frequency Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit3High
  block: fixed
  entry:
    name: GridFreqLimit3High
    description: Grid Frequency Limits (Stage 3) Upper Limit (Hz)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GridFreqLimit3HighTime
  block: fixed
  entry:
    name: GridFreqLimit3HighTime
    description: Grid Frequency Trip Time (Stage 3) High Frequency Trip Delay (ms)
    longdescription: Value from Site Configuration Grid/Grid Protection/Grid Protection Parameters. Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.
    dtype: uint16
    unit: N/A
    category: GridProtection
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Grid/Grid Support/Constant Power Factor. Shows whether constant power-factor control is active.
    dtype: enum16
    unit: N/A
    category: ConstantPowerFactorMode
    meanings:
      '0': disable
      '1': enable
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ConstantPowerFactorExcited
  block: fixed
  entry:
    name: ConstantPowerFactorExcited
    description: Power Factor Setpoint Excitation
    longdescription: Value from Site Configuration Grid/Grid Support/Constant Power Factor. The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).
    dtype: enum16
    unit: N/A
    category: ConstantPowerFactorMode
    meanings:
      '0': Under-excited
      '1': Over-excited
      '2': Unknown
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ConstantPowerFactor
  block: fixed
  entry:
    name: ConstantPowerFactor
    description: Power Factor Setpoint Power Factor (PF)
    longdescription: Value from Site Configuration Grid/Grid Support/Constant Power Factor. The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).
    dtype: int16
    unit: N/A
    category: ConstantPowerFactorMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Grid/Grid Support/Constant Reactive Power. Shows whether constant reactive-power control is active.
    dtype: enum16
    unit: N/A
    category: ConstantReactivePowerMode
    meanings:
      '0': disable
      '1': enable
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ConstantReactivePowerModeExcited
  block: fixed
  entry:
    name: ConstantReactivePowerModeExcited
    description: Reactive Power Mode Excitation
    longdescription: Value from Site Configuration Grid/Grid Support/Constant Reactive Power. Shows whether constant reactive-power control is active.
    dtype: enum16
    unit: N/A
    category: ConstantReactivePowerMode
    meanings:
      '0': Under-excited
      '1': Over-excited
      '2': Unknown
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ReactivePowerPercentCMD
  block: fixed
  entry:
    name: ReactivePowerPercentCMD
    description: Reactive Power Setpoint
    longdescription: Value from Site Configuration Grid/Grid Support/Constant Reactive Power. Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).
    dtype: uint16
    unit: N/A
    category: ConstantReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.
    dtype: enum16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings:
      '0': disable
      '1': enable
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: AutonomousVrefAdjustment
  block: fixed
  entry:
    name: AutonomousVrefAdjustment
    description: Autonomous Vref Adjustment
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Indicates whether the inverter autonomously adjusts its reference voltage (Vref).
    dtype: enum16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings:
      '0': disable
      '1': enable
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Verf
  block: fixed
  entry:
    name: Verf
    description: Reference Voltage (Vref)
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Voltage reference used for Volt-VAR calculations.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: VrefAdjustmentTimeConstant
  block: fixed
  entry:
    name: VrefAdjustmentTimeConstant
    description: Vref Adjustment Time Constant
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Time constant applied when adjusting Vref.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: UnderOverV1
  block: fixed
  entry:
    name: UnderOverV1
    description: Volt-VAR Voltage Breakpoints V1 (Voltage Point 1)
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: UnderOverV2
  block: fixed
  entry:
    name: UnderOverV2
    description: Volt-VAR Voltage Breakpoints V2 (Voltage Point 2)
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: UnderOverV3
  block: fixed
  entry:
    name: UnderOverV3
    description: Volt-VAR Voltage Breakpoints V3 (Voltage Point 3)
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: UnderOverV4
  block: fixed
  entry:
    name: UnderOverV4
    description: Volt-VAR Voltage Breakpoints V4 (Voltage Point 4)
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Q1
  block: fixed
  entry:
    name: Q1
    description: Reactive Power Setpoint Q1
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Reactive power at voltage point V1 on the Volt-VAR curve.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Q2
  block: fixed
  entry:
    name: Q2
    description: Reactive Power Setpoint Q2
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Reactive power at voltage point V2 on the Volt-VAR curve.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Q3
  block: fixed
  entry:
    name: Q3
    description: Reactive Power Setpoint Q3
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Reactive power at voltage point V3 on the Volt-VAR curve.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Q4
  block: fixed
  entry:
    name: Q4
    description: Reactive Power Setpoint Q4
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Reactive power at voltage point V4 on the Volt-VAR curve.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: VqOpenLoopResponseTime
  block: fixed
  entry:
    name: VqOpenLoopResponseTime
    description: Volt-VAR Open-Loop Response Time
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-VAR (Voltage-Reactive Power). Response time used for open-loop Volt-VAR changes.
    dtype: uint16
    unit: N/A
    category: VoltageReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Grid/Grid Support/P-Q Mode (Active-Reactive Power). Shows whether Active/Reactive Power (P-Q) control mode is enabled.
    dtype: enum16
    unit: N/A
    category: ActivePowerReactivePowerMode
    meanings:
      '0': disable
      '1': enable
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: PQP1
  block: fixed
  entry:
    name: PQP1
    description: P-Q Curve Points P1 Setpoint
    longdescription: Value from Site Configuration Grid/Grid Support/P-Q Mode (Active-Reactive Power). Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.
    dtype: uint16
    unit: N/A
    category: ActivePowerReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: PQP2
  block: fixed
  entry:
    name: PQP2
    description: P-Q Curve Points P2 Setpoint
    longdescription: Value from Site Configuration Grid/Grid Support/P-Q Mode (Active-Reactive Power). Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.
    dtype: uint16
    unit: N/A
    category: ActivePowerReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: PQP3
  block: fixed
  entry:
    name: PQP3
    description: P-Q Curve Points P3 Setpoint
    longdescription: Value from Site Configuration Grid/Grid Support/P-Q Mode (Active-Reactive Power). Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.
    dtype: uint16
    unit: N/A
    category: ActivePowerReactivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt (Voltage-Active Power). Shows whether Volt-Watt (voltage-active power) control is enabled.
    dtype: enum16
    unit: N/A
    category: VoltageActivePowerMode
    meanings:
      '0': disable
      '1': enable
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: VoltWattV1
  block: fixed
  entry:
    name: VoltWattV1
    description: Volt-Watt Voltage Breakpoints V1 (Voltage Point 1)
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt (Voltage-Active Power). Voltage points that define the Volt-Watt curve.
    dtype: uint16
    unit: N/A
    category: VoltageActivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: VoltWattV2
  block: fixed
  entry:
    name: VoltWattV2
    description: Volt-Watt Voltage Breakpoints V2 (Voltage Point 2)
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt (Voltage-Active Power). Voltage points that define the Volt-Watt curve.
    dtype: uint16
    unit: N/A
    category: VoltageActivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: VoltWattP2
  block: fixed
  entry:
    name: VoltWattP2
    description: Volt-Watt Power Setpoint
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt (Voltage-Active Power). Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.
    dtype: uint16
    unit: N/A
    category: VoltageActivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: VoltWattOpenLoopResponseTime
  block: fixed
  entry:
    name: VoltWattOpenLoopResponseTime
    description: Volt-Watt Open-Loop Response Time
    longdescription: Value from Site Configuration Grid/Grid Support/Volt-Watt (Voltage-Active Power). Response time used for open-loop Volt-Watt changes.
    dtype: uint16
    unit: N/A
    category: VoltageActivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt (Frequency-Active Power). Indicates whether frequency-power (Freq-Watt) control is currently enabled.
    dtype: enum16
    unit: N/A
    category: FrequencyActivePowerMode
    meanings:
      '0': disable
      '1': enable
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: FreqWattOpenLoopResponseTime
  block: fixed
  entry:
    name: FreqWattOpenLoopResponseTime
    description: Open-Loop Response Time
    longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt (Frequency-Active Power). Response time applied to open-loop frequency-power adjustments.
    dtype: uint16
    unit: N/A
    category: FrequencyActivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: OverFrequencyDroop_dbOF
  block: fixed
  entry:
    name: OverFrequencyDroop_dbOF
    description: 'Over-Frequency Droop: Deadband'
    longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt (Frequency-Active Power). Over Frequency Droop dbOF â€” Deadband around nominal frequency before active power reduction begins.
    dtype: uint16
    unit: N/A
    category: FrequencyActivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: OverFrequencyDroop_kOF
  block: fixed
  entry:
    name: OverFrequencyDroop_kOF
    description: 'Over-Frequency Droop: Gain (k)'
    longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt (Frequency-Active Power). Over Frequency Droop kOF â€” Slope (gain k) of active power reduction versus frequency rise above nominal.
    dtype: uint16
    unit: N/A
    category: FrequencyActivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: UnderFrequencyDroop_dbUF
  block: fixed
  entry:
    name: UnderFrequencyDroop_dbUF
    description: 'Under-Frequency Droop: Deadband'
    longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt (Frequency-Active Power). Under Frequency Droop dbUF â€” Deadband around nominal frequency before active power increase/response begins.
    dtype: uint16
    unit: N/A
    category: FrequencyActivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: UnderFrequencyDroop_kUF
  block: fixed
  entry:
    name: UnderFrequencyDroop_kUF
    description: 'Under-Frequency Droop: Gain (k)'
    longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt (Frequency-Active Power). Under Frequency Droop kUF â€” Slope (gain k) of active power response versus frequency drop below nominal.
    dtype: uint16
    unit: N/A
    category: FrequencyActivePowerMode
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Grid Support
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Inverter/Power Limits. Shows whether power output limiting is currently active. When not limited, the inverter can deliver its full available power (subject only to natural hardware limits). When limited, an external or configured cap is applied to restrict inverter output to the specified Power Limit.
    dtype: enum16
    unit: N/A
    category: LimitActivePower
    meanings:
      '0': disable
      '1': enable
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Power Limits
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ActivePowerPercent
  block: fixed
  entry:
    name: ActivePowerPercent
    description: Power Limit
    longdescription: Value from Site Configuration Inverter/Power Limits. The inverter's present active-power output limit as a percentage of its rated capacity. If power limiting is active, the inverter will limit its output power to this percentage of its rated capacity.
    dtype: uint16
    unit: '%'
    category: LimitActivePower
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Power Limits
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: Power
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Inverter/Selling Power. Allows the inverter to sell/export power back to the utility grid. Enable this only if local regulations and interconnect agreements permit grid export.
    dtype: enum16
    unit: N/A
    category: FeedInGrid
    meanings:
      '0': disable,
      '1': enable
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Selling Power
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: FeedInGridMaxPower
  block: fixed
  entry:
    name: FeedInGridMaxPower
    description: Max Power Sold to Grid
    longdescription: Value from Site Configuration Inverter/Selling Power. Sets the maximum power the inverter is allowed to sell/export to the grid. Use this to meet utility export limits or site commissioning requirements.
    dtype: uint32
    unit: W
    category: FeedInGrid
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Selling Power
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: Power
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: FastzeroExportstatus
  block: fixed
  entry:
    name: FastzeroExportstatus
    description: 'Prevent Grid Export: Strict Mode'
    longdescription: Value from Site Configuration Inverter/Selling Power. Keeps power export at or near zero by adjusting inverter output in real time. When enabled, the inverter supplies only local (on-site) loads and will not send power back to the grid. This mode is required when grid export is not allowed. Ensure the CTs are installed on the grid connection point and  not on the inverter's load side, so the inverter can correctly detect and prevent export.
    dtype: enum16
    unit: N/A
    category: FeedInGrid
    meanings:
      '0': disable,
      '1': enable
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Selling Power
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Unit
    label_text: Power
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Battery/Grid Charge. Enables the battery to charge from the utility grid.
    dtype: enum16
    unit: N/A
    category: ACCharge
    meanings:
      '0': disable
      '1': enable
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ACChargePower
  block: fixed
  entry:
    name: ACChargePower
    description: Grid Charge Power Limit
    longdescription: Value from Site Configuration Battery/Grid Charge. Sets the maximum power the inverter will draw from the grid for charging. This cap applies when Grid Charge is enabled (and within any configured time windows).
    dtype: uint16
    unit: W
    category: ACCharge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: Power
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ACChargeType
  block: fixed
  entry:
    name: ACChargeType
    description: Grid Charge Control Type
    longdescription: Value from Site Configuration Battery/Grid Charge. Select whether grid charging follows a time schedule or SOC/voltage thresholds.
    dtype: enum16
    unit: N/A
    category: ACCharge
    meanings:
      '0': according to time
      '1': according to SOC/Volt
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ACChgStartSOC
  block: fixed
  entry:
    name: ACChgStartSOC
    description: Grid Charge SOC Range Start SOC
    longdescription: Value from Site Configuration Battery/Grid Charge. Defines when grid charging starts and stops based on battery state of charge (SOC). Charging starts when SOC falls below Start SOC and stops when it reaches Stop SOC.
    dtype: uint16
    unit: '%'
    category: ACCharge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ACChgStopSOC
  block: fixed
  entry:
    name: ACChgStopSOC
    description: Grid Charge SOC Range SOC
    longdescription: Value from Site Configuration Battery/Grid Charge. Defines when grid charging starts and stops based on battery state of charge (SOC). Charging starts when SOC falls below Start SOC and stops when it reaches Stop SOC.
    dtype: uint16
    unit: '%'
    category: ACCharge
    meanings: {}
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: acChgST1
  block: fixed
  entry:
    name: acChgST1
    description: Grid Charge Windows Window 1 Start Minute
    longdescription: Value from Site Configuration Battery/Grid Charge. During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.
    dtype: bitsplit
    unit: bitsplit
    category: ACCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: acChgET1
  block: fixed
  entry:
    name: acChgET1
    description: Grid Charge Windows Window 1 End Minute
    longdescription: Value from Site Configuration Battery/Grid Charge. During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.
    dtype: bitsplit
    unit: bitsplit
    category: ACCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: acChgST2
  block: fixed
  entry:
    name: acChgST2
    description: Grid Charge Windows Window 2 Start Minute
    longdescription: Value from Site Configuration Battery/Grid Charge. During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.
    dtype: bitsplit
    unit: bitsplit
    category: ACCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: acChgET2
  block: fixed
  entry:
    name: acChgET2
    description: Grid Charge Windows Window 2 End Minute
    longdescription: Value from Site Configuration Battery/Grid Charge. During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.
    dtype: bitsplit
    unit: bitsplit
    category: ACCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: acChgST3
  block: fixed
  entry:
    name: acChgST3
    description: Grid Charge Windows Window 3 Start Minute
    longdescription: Value from Site Configuration Battery/Grid Charge. During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.
    dtype: bitsplit
    unit: bitsplit
    category: ACCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: acChgET3
  block: fixed
  entry:
    name: acChgET3
    description: Grid Charge Windows Window 3 End Minute
    longdescription: Value from Site Configuration Battery/Grid Charge. During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.
    dtype: bitsplit
    unit: bitsplit
    category: ACCharge
    meanings:
      0-7: Minute
      8-15: Hour
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Backup Power/Backup Power. Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.
    dtype: enum16
    unit: N/A
    category: BackupPower
    meanings:
      '0': disable,
      '1': enable
  labels:
  - label_family: Component
    label_text: Backup Power
  - label_family: Feature
    label_text: Backup Power
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: EPSVoltage
  block: fixed
  entry:
    name: EPSVoltage
    description: Backup (EPS) Output Voltage
    longdescription: Value from Site Configuration Backup Power/Backup Power. Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.
    dtype: uint16
    unit: N/A
    category: BackupPower
    meanings: {}
  labels:
  - label_family: Component
    label_text: Backup Power
  - label_family: Feature
    label_text: Backup Power
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Generator/Generator. If using a generator, select which port it's connected to â€” either the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.
    dtype: enum16
    unit: N/A
    category: Generator
    meanings:
      '0': MicroGridDisalbe
      '1': MicroGridEnalbe
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: BatteryChargeCurrentLimit
  block: fixed
  entry:
    name: BatteryChargeCurrentLimit
    description: Battery Charge Current Limit
    longdescription: Value from Site Configuration Generator/Generator. Sets the maximum DC current the inverter will send to the battery when charging from the generator.
    dtype: uint32
    unit: uint32
    category: Generator
    meanings: {}
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GeneratorRatedPower
  block: fixed
  entry:
    name: GeneratorRatedPower
    description: Generator Rated Power
    longdescription: Value from Site Configuration Generator/Generator. Specify the generator's continuous rated output power.
    dtype: uint16
    unit: N/A
    category: Generator
    meanings: {}
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GeneratorCoolDownTime
  block: fixed
  entry:
    name: GeneratorCoolDownTime
    description: Generator Cool-Down Time
    longdescription: Value from Site Configuration Generator/Generator. Sets the time the generator continues running after charging stops to allow for safe cooling.
    dtype: uint16
    unit: N/A
    category: Generator
    meanings: {}
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socGenStart
  block: fixed
  entry:
    name: socGenStart
    description: Generator Start/Stop SOC Start SOC
    longdescription: Value from Site Configuration Generator/Generator. Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.
    dtype: uint16
    unit: '%'
    category: Generator
    meanings: {}
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socGenEnd
  block: fixed
  entry:
    name: socGenEnd
    description: Generator Start/Stop SOC Stop SOC
    longdescription: Value from Site Configuration Generator/Generator. Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.
    dtype: uint16
    unit: '%'
    category: Generator
    meanings: {}
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: GeneratorBoost
  block: fixed
  entry:
    name: GeneratorBoost
    description: Generator Boost
    longdescription: Value from Site Configuration Generator/Generator. Enables dynamic adjustment of generator charging power for faster battery recovery when needed.
    dtype: enum16
    unit: N/A
    category: Generator
    meanings:
      '0': Disable
      '1': Enable
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: StartGeneratorExercise
  block: fixed
  entry:
    name: StartGeneratorExercise
    description: Battery Quick Charge with Generator
    longdescription: Value from Site Configuration Generator/Generator. Start the generator to charge the battery.
    dtype: enum16
    unit: N/A
    category: Generator
    meanings:
      '0': Disable
      '1': Enable
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration AC Coupled PV/AC Coupled PV. Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.
    dtype: enum16
    unit: N/A
    category: ACCoupledPV
    meanings:
      '0': Disable
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Type of Data
    label_text: Settings
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socAcCplOn
  block: fixed
  entry:
    name: socAcCplOn
    description: AC Coupled PV Start SOC
    longdescription: Value from Site Configuration AC Coupled PV/AC Coupled PV. Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.
    dtype: uint16
    unit: '%'
    category: ACCoupledPV
    meanings: {}
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Type of Data
    label_text: Settings
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: socAcCplOff
  block: fixed
  entry:
    name: socAcCplOff
    description: AC Coupled PV Stop SOC
    longdescription: Value from Site Configuration AC Coupled PV/AC Coupled PV. Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.
    dtype: uint16
    unit: '%'
    category: ACCoupledPV
    meanings: {}
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Type of Data
    label_text: Settings
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Smart Load/Smart Load. Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.
    dtype: enum16
    unit: N/A
    category: LoadShedding
    meanings:
      '0': Disable
  labels:
  - label_family: Component
    label_text: Smart Load
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: OnGridAlwaysOn
  block: fixed
  entry:
    name: OnGridAlwaysOn
    description: Smart Load On-Grid Behavior
    longdescription: 'Value from Site Configuration Smart Load/Smart Load. Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)'
    dtype: enum16
    unit: N/A
    category: LoadShedding
    meanings:
      '0': disable,
      '1': enable
  labels:
  - label_family: Component
    label_text: Smart Load
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: StartPVPower
  block: fixed
  entry:
    name: StartPVPower
    description: Smart Load Start Power
    longdescription: Value from Site Configuration Smart Load/Smart Load. Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.
    dtype: uint32
    unit: uint32
    category: LoadShedding
    meanings: {}
  labels:
  - label_family: Component
    label_text: Smart Load
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: SmartLoadOnSoc
  block: fixed
  entry:
    name: SmartLoadOnSoc
    description: Smart Load Start SOC
    longdescription: Value from Site Configuration Smart Load/Smart Load. Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.
    dtype: uint16
    unit: '%'
    category: LoadShedding
    meanings: {}
  labels:
  - label_family: Component
    label_text: Smart Load
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: SmartLoadOffSoc
  block: fixed
  entry:
    name: SmartLoadOffSoc
    description: Smart Load Stopp SOC
    longdescription: Value from Site Configuration Smart Load/Smart Load. Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.
    dtype: uint16
    unit: '%'
    category: LoadShedding
    meanings: {}
  labels:
  - label_family: Component
    label_text: Smart Load
  - label_family: Feature
    label_text: Smart Load
  - label_family: Type of Data
    label_text: Settings
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
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
    longdescription: Value from Site Configuration Inverter/Parallel. The Unit ID (also known as the unit ID, slave ID, or node ID) for this inverter. The primary inverter should use address 1, and any secondary inverters should use 2 or higher. This sets the modbus address that inverters use to communicate with each other. Each inverter that communicates on the same Modbus communication line must have a unique address, but addresses do not need to be globally unique across separate, unconnected systems.
    dtype: uint16
    unit: N/A
    category: Parallel
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: SystemType
  block: fixed
  entry:
    name: SystemType
    description: System Type
    longdescription: 'Value from Site Configuration Inverter/Parallel. Defines how this inverter participates in a multi-inverter or multi-phase system.
      - No Parallel: Single inverter system.

      - Single-phase Parallel (Master / Secondary): Multiple inverters on one phase.

      - Three-phase Parallel (Master): Multiple inverters forming R/S/T phases.'
    dtype: enum16
    unit: N/A
    category: Parallel
    meanings:
      '0': no parallel (single one)
      '2': Secondary
      '3': Three phase parallel(Master)
      '4': 2*208(Master)
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ComposedPhase
  block: fixed
  entry:
    name: ComposedPhase
    description: Assigned Phase
    longdescription: Value from Site Configuration Inverter/Parallel. Selects which output phase this inverter is responsible for in a three-phase system. R, S, and T correspond to L1, L2, and L3.
    dtype: enum16
    unit: N/A
    category: Parallel
    meanings:
      '1': R
      '2': S
      '3': T
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: DetectedGridPhases
  block: fixed
  entry:
    name: DetectedGridPhases
    description: Detected Grid Phases
    longdescription: Value from Site Configuration Inverter/Parallel. Attribute in Parallel cluster
    dtype: enum16
    unit: N/A
    category: Parallel
    meanings:
      '0': None
      '1': R
      '2': S
      '3': T
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ShareBatteryStatus
  block: fixed
  entry:
    name: ShareBatteryStatus
    description: Share Battery
    longdescription: Value from Site Configuration Inverter/Parallel. Allows inverters in a parallel group to use a common battery bank instead of keeping batteries isolated per inverter.
    dtype: enum16
    unit: N/A
    category: Parallel
    meanings:
      '0': Battery connect parallel
      '1': Battery connect independence
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ParallelNum
  block: fixed
  entry:
    name: ParallelNum
    description: Inverters in parallel
    longdescription: Value from Site Configuration Inverter/Parallel. Total number of inverters detected in this parallel system.
    dtype: uint16
    unit: N/A
    category: Parallel
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Settings
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: Role
  block: fixed
  entry:
    name: Role
    description: Inverter Role
    longdescription: Value from Site Configuration Inverter/Parallel. Reports whether this inverter is acting as Primary (sometimes called the Master) or Secondary in the current parallel configuration.
    dtype: enum16
    unit: N/A
    category: Parallel
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: ParallelPhase
  block: fixed
  entry:
    name: ParallelPhase
    description: Reported Phase
    longdescription: Value from Site Configuration Inverter/Parallel. Reports which phase (R / S / T) this inverter is currently serving in the parallel system.
    dtype: enum16
    unit: N/A
    category: Parallel
    meanings:
      '1': R
      '2': S
      '3': T
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Feature
    label_text: Parallel
  - label_family: Type of Data
    label_text: Settings
  - label_family: Type of Data
    label_text: Status
  - label_family: Level of Detail
    label_text: Complete
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
`,b0=`protocols:
    - model: lifecycle_events
      point: ID
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
      - label_family: Component
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
      - label_family: Component
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
        `,h0=`# Label Help Text
# This file provides help text for all label families and their label values
# Used to display tooltips and modal help in the UI

label_families:
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
      RSD:
        help: "Points related to Rapid Shutdown (RSD) functionality for solar systems, including RSD status and control."
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
`,x0="/matter-site-config-prototype/assets/adding_points-CERP4QNM.png",_0="/matter-site-config-prototype/assets/resizing_chart-BHR8TqZN.png",v0="/matter-site-config-prototype/assets/create_additional_charts-CshHgktp.png",w0="/matter-site-config-prototype/assets/moving_points_between_charts-C3gFhIkG.png",C0="/matter-site-config-prototype/assets/remove_chart-DXjixanx.png",S0="/matter-site-config-prototype/assets/browse_and_find_points-Dwpkv5sf.png",L0="/matter-site-config-prototype/assets/selecting_devices-Cv4bL765.png",k0="/matter-site-config-prototype/assets/troubleshooting_points-C4zPrx4-.png",P0="/matter-site-config-prototype/assets/lines_vs_status-HMYx_HFm.png",D0=({isOpen:e,onClose:t})=>{const[n,l]=$.useState(0),i=()=>{l(0),t()};U.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&i()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e]);const a=[{title:"1. Adding Points to a Chart",image:x0,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"You can add data points to any chart in two ways:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Click anywhere inside an empty chart area"}),o.jsx("br",{}),o.jsx("span",{className:"text-sm text-slate-600",children:"This opens the point selector immediately."})]}),o.jsxs("li",{children:[o.jsx("strong",{children:'Use the "Add Points" menu'})," in the top-right corner of the chart."]})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"You can add as many points as you need—measurements or status values from any device at the site."})]})},{title:"2. Resizing a Chart",image:_0,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"To change the size of a chart:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:["Grab the ",o.jsx("strong",{children:"handle on the right edge"})," to make it wider."]}),o.jsxs("li",{children:["Grab the ",o.jsx("strong",{children:"handle on the bottom edge"})," to make it taller."]}),o.jsx("li",{children:"Drag both to resize the chart in both directions."})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"Resize charts to give more room to important points."})]})},{title:"3. Creating Additional Charts",image:v0,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["Click the ",o.jsx("strong",{children:'"+" button'})," below any chart to create a new one."]}),o.jsx("p",{className:"mb-3",children:"Each chart can have:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-1",children:[o.jsx("li",{children:"its own set of points"}),o.jsx("li",{children:"its own size"}),o.jsx("li",{children:"its own layout"})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"Use multiple charts to compare different devices or mix measurements and status views."})]})},{title:"4. Removing a Chart",image:C0,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["To delete a chart, click the ",o.jsx("strong",{children:'"X"'})," in the upper-right corner of the chart frame."]}),o.jsxs("p",{className:"text-sm text-slate-600",children:["Removing a chart does ",o.jsx("strong",{children:"not"})," delete any data points—you can always create a new chart and add them again."]})]})},{title:"5. Browsing and Finding Data Points",image:S0,content:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-3",children:["Use the ",o.jsx("strong",{children:"Add Points"})," panel to find the data you want:"]}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsx("li",{children:"Scroll through the list"}),o.jsx("li",{children:"Search by name"}),o.jsxs("li",{children:["Use filters to narrow results by ",o.jsx("strong",{children:"component"}),", ",o.jsx("strong",{children:"type of data"}),", ",o.jsx("strong",{children:"unit"}),", or ",o.jsx("strong",{children:"feature"})]})]}),o.jsxs("p",{className:"text-sm text-slate-600",children:["If you need more advanced or technical points, increase the ",o.jsx("strong",{children:"Detail Level"})," slider."]})]})},{title:"6. Selecting Devices for Each Point",image:L0,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"Many sites have multiple units of the same equipment (e.g., several inverters)."}),o.jsx("p",{className:"mb-3",children:"For each point you select, choose whether it applies to:"}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-1",children:[o.jsx("li",{children:o.jsx("strong",{children:"One device"})}),o.jsx("li",{children:o.jsx("strong",{children:"A selected group of devices"})}),o.jsx("li",{children:o.jsx("strong",{children:"All devices of that type"})})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"You can add the same point for different devices in any combination."})]})},{title:"7. Troubleshooting Point Discovery",image:k0,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"If you don't see the point you expect:"}),o.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[o.jsx("li",{children:"Broaden your filters"}),o.jsxs("li",{children:["Adjust the ",o.jsx("strong",{children:"Detail Level"})]}),o.jsx("li",{children:"Search for part of the name"}),o.jsx("li",{children:"Make sure the correct device type is selected"})]})]})},{title:"8. Understanding Line vs. Status Charts",image:P0,content:o.jsxs("div",{children:[o.jsxs("div",{className:"mb-4",children:[o.jsx("h4",{className:"font-semibold mb-2",children:"Line charts"}),o.jsx("p",{className:"text-sm mb-2",children:"Show measurements—numbers that rise and fall over time, such as:"}),o.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-600 space-y-1",children:[o.jsx("li",{children:"Power"}),o.jsx("li",{children:"Voltage"}),o.jsx("li",{children:"Current"}),o.jsx("li",{children:"Temperature"})]}),o.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"These appear as a smooth line across the graph."})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold mb-2",children:"Status charts"}),o.jsxs("p",{className:"text-sm mb-2",children:["Show what ",o.jsx("em",{children:"state"})," the equipment was in over time, such as:"]}),o.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-600 space-y-1",children:[o.jsx("li",{children:"Normal"}),o.jsx("li",{children:"Failure"}),o.jsx("li",{children:"On / Off"}),o.jsx("li",{children:"Operating modes"})]}),o.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"Status points appear as colored bars instead of a line, showing when each state was active."})]})]})},{title:"9. Moving Points Between Charts",image:w0,content:o.jsxs("div",{children:[o.jsx("p",{className:"mb-3",children:"You can reorganize your charts by dragging items from one chart to another."}),o.jsxs("ul",{className:"list-disc pl-5 mb-3 space-y-2",children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Drag a legend entry"})," to move a line-chart point."]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Drag a status row"})," to move a state-based point."]}),o.jsx("li",{children:"Drop onto any chart (even an empty one) to place it there."})]}),o.jsx("p",{className:"text-sm text-slate-600",children:"This makes it easy to group related data or separate concerns across multiple charts."})]})}],r=()=>{n<a.length-1&&l(n+1)},s=()=>{n>0&&l(n-1)};if(!e)return null;const c=a[n];return o.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[o.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),o.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-200",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-2xl",children:"📘"}),o.jsx("h2",{className:"text-xl font-semibold text-slate-900",children:"Chart Tutorial"})]}),o.jsx("button",{onClick:i,className:"text-slate-400 hover:text-slate-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-6 h-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-slate-900 mb-4",children:c.title}),o.jsx("div",{className:"mb-4 rounded-lg overflow-hidden border border-slate-200 flex justify-center bg-slate-50",children:o.jsx("img",{src:c.image,alt:c.title,className:"max-w-full h-auto max-h-80 object-contain"})}),o.jsx("div",{className:"text-slate-700",children:c.content})]}),o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-slate-200",children:[o.jsxs("div",{className:"text-sm text-slate-600",children:["Step ",n+1," of ",a.length]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{onClick:s,disabled:n===0,className:"px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Previous"}),n<a.length-1?o.jsx("button",{onClick:r,className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",children:"Next"}):o.jsx("button",{onClick:i,className:"px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-colors",children:"Finish"})]})]})]})]})};function T0(e){return e==null?"":typeof e=="number"?String(Math.trunc(e)):String(e).trim()}function N0(e){return e==null?"":String(e).trim()}function hu(e,t){try{const n=Gf.parse(e);return((n==null?void 0:n.protocols)??[]).map(i=>{var c;if(!i.entry)return null;const a=N0(i.point??i.entry.name),r=T0(i.model);if(!a||!r)return null;const s=Array.isArray(i.labels)?i.labels:Array.isArray((c=i.entry)==null?void 0:c.labels)?i.entry.labels:[];return{block:String(i.block??"fixed"),entry:i.entry,model:r,point:a,labels:s}}).filter(i=>!!i)}catch(n){return console.error(`Failed to parse ${t}`,n),[]}}function A0(){const e=hu(g0,"ss40k_inverter.yaml"),t=hu(b0,"lifecycle_events.yaml");return[...e,...t]}const Nn=A0();let Rs=null;try{Rs=Gf.parse(h0)}catch(e){console.error("Failed to parse label_help.yaml",e)}function Et(e,t){if(!Rs)return null;const n=Rs.label_families[e];if(!n)return null;if(t){const l=n.labels[t];return(l==null?void 0:l.help)||null}return n.help||null}function E0(e,t){const n=new Map;return e.forEach(l=>{const i=Array.isArray(l.labels)?l.labels:[];if(i.length===0)return;if(t.length===0){const s=i[0];if(s){const c=s.label_text;n.has(c)||n.set(c,[]),n.get(c).push(l)}return}let a=n,r=-1;if(!(a instanceof Map)){console.error("groupByLabelHierarchy: currentMap is not a Map",a);return}for(let s=0;s<t.length;s++){const c=t[s];i.find(u=>u.label_family===c)&&(r=s)}if(r!==-1)for(let s=0;s<=r;s++){if(!(a instanceof Map)){console.error("groupByLabelHierarchy: currentMap became non-Map at level",s,a);return}const c=t[s],d=i.find(p=>p.label_family===c);if(!d)continue;const u=d.label_text;if(s===r){a.has(u)||a.set(u,new Map);const p=a.get(u);if(Array.isArray(p)){const x=p,g=new Map;g.set("",x),a.set(u,g)}const f=a.get(u);if(!(f instanceof Map)){console.error("Expected Map for finalMap but got:",typeof f,f);return}f.has("")||f.set("",[]);const m=f.get("");if(!Array.isArray(m)){console.error("Expected array for itemsList but got:",typeof m,m);return}m.push(l)}else{if(!a.has(u))a.set(u,new Map);else{const f=a.get(u);if(Array.isArray(f)){const m=f,x=new Map;x.set("",m),a.set(u,x)}}const p=a.get(u);if(!(p instanceof Map)){console.error("Expected Map for nestedMap but got:",typeof p,p,"at level",s,"key",u);return}a=p}}}),n}function V0(e){const t=new Map;return e.forEach(n=>{(Array.isArray(n.labels)?n.labels:[]).forEach(i=>{t.has(i.label_family)||t.set(i.label_family,new Set),t.get(i.label_family).add(i.label_text)})}),t}const Ro=[{bg:"bg-blue-100",text:"text-blue-800",border:"border-blue-300"},{bg:"bg-green-100",text:"text-green-800",border:"border-green-300"},{bg:"bg-purple-100",text:"text-purple-800",border:"border-purple-300"},{bg:"bg-yellow-100",text:"text-yellow-800",border:"border-yellow-300"},{bg:"bg-pink-100",text:"text-pink-800",border:"border-pink-300"},{bg:"bg-indigo-100",text:"text-indigo-800",border:"border-indigo-300"},{bg:"bg-red-100",text:"text-red-800",border:"border-red-300"},{bg:"bg-teal-100",text:"text-teal-800",border:"border-teal-300"},{bg:"bg-orange-100",text:"text-orange-800",border:"border-orange-300"},{bg:"bg-cyan-100",text:"text-cyan-800",border:"border-cyan-300"},{bg:"bg-violet-100",text:"text-violet-800",border:"border-violet-300"},{bg:"bg-amber-100",text:"text-amber-800",border:"border-amber-300"},{bg:"bg-lime-100",text:"text-lime-800",border:"border-lime-300"},{bg:"bg-emerald-100",text:"text-emerald-800",border:"border-emerald-300"},{bg:"bg-sky-100",text:"text-sky-800",border:"border-sky-300"},{bg:"bg-rose-100",text:"text-rose-800",border:"border-rose-300"},{bg:"bg-fuchsia-100",text:"text-fuchsia-800",border:"border-fuchsia-300"},{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"},{bg:"bg-stone-100",text:"text-stone-800",border:"border-stone-300"},{bg:"bg-zinc-100",text:"text-zinc-800",border:"border-zinc-300"}],xu=new Map([["component",0],["feature",1],["detail_level",2],["level of detail",2],["info",3],["unit",4]]);function Vn(e,t){const n=e.toLowerCase();if(xu.has(n)){const a=xu.get(n);return Ro[a]}const l=n.split("").reduce((a,r)=>(a<<5)-a+r.charCodeAt(0),0),i=4+Math.abs(l)%(Ro.length-4);return Ro[i]}function R0({value:e,onChange:t}){return o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:o.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),o.jsx("input",{className:"w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring",placeholder:"search",value:e,onChange:n=>t(n.target.value)})]})}function M0({show:e,onToggle:t}){return o.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 text-sm",children:[o.jsx("input",{type:"checkbox",className:"h-4 w-4",checked:e,onChange:n=>t(n.target.checked)}),"Show help text"]})}function _u({value:e,onChange:t}){const n=["Standard","Extended","Complete"],l=n.indexOf(e),i=l>=0?l:0,[a,r]=U.useState(!1),s=p=>{const f=parseInt(p.target.value,10);t(n[f])},c=i/(n.length-1)*100,d=Et("Level of Detail"),u=new Set(n);return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xs font-semibold text-gray-700",children:"Detail Level"}),o.jsx("button",{onClick:()=>r(!0),className:"text-blue-500 hover:text-blue-700",title:d||"Level of Detail help",children:o.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{className:"flex flex-col items-center gap-0.5",children:[o.jsxs("div",{className:"relative w-40 flex items-center",children:[o.jsx("input",{type:"range",min:"0",max:n.length-1,step:"1",value:i,onChange:s,className:"w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, #10b981 0%, #10b981 ${c}%, #e5e7eb ${c}%, #e5e7eb 100%)`}}),o.jsx("style",{children:`
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
            `})]}),o.jsx("div",{className:"relative w-40 flex justify-between text-xs",children:n.map((p,f)=>o.jsx("button",{type:"button",onClick:()=>t(p),className:`cursor-pointer hover:opacity-70 transition-opacity ${f===i?"font-semibold text-gray-900":"text-gray-500"}`,children:p},p))})]})]}),a&&o.jsx(Of,{family:"Level of Detail",labels:u,onClose:()=>r(!1)})]})}function G0(e,t){const n=String(t||"").trim();if(!n)return!1;const l=n.toLowerCase(),i=Array.isArray(e.labels)?e.labels:[];if(i.length===0)return!1;for(const a of i)if(!(!a||typeof a!="object")&&!(!a.label_family||typeof a.label_family!="string"))try{const r=Et(a.label_family,a.label_text);if(r&&typeof r=="string"&&r.length>0&&r.toLowerCase().includes(l))return!0}catch{continue}return!1}function Ff({levelName:e,levelData:t,selected:n,toggle:l,showHelp:i,onUpdateInverters:a,groupsExpanded:r,pointHelpEnabled:s,onTogglePointHelp:c,depth:d=0,query:u,parentPath:p="",hierarchy:f=[]}){const m=p?`${p}-${e.replace(/\s+/g,"-")}`:e.replace(/\s+/g,"-"),x=`group-${m}-${d}`,g=Array.isArray(t),_=f[d]||"";if(!t)return null;const b=v=>{const C=`${v.model}:${v.point}`,T=v.entry.description||C,S=v.entry.longdescription||T,L=typeof v.entry.dtype=="string"?v.entry.dtype.toLowerCase():"",j=L.includes("enum")||L.startsWith("bitfield"),N=v.entry.unit&&v.entry.unit!=="N/A"?` (${v.entry.unit})`:"",W=n.has(C),H=W?n.get(C)||new Set(["001"]):new Set,Y=Array.isArray(v.labels)?v.labels:[],de=i||s.has(C),G=G0(v,u);return o.jsxs("div",{id:`point-${C.replace(/:/g,"-")}`,"data-point-key":C,className:"rounded-md px-2 py-1 hover:bg-gray-50 transition-colors",children:[o.jsx("div",{className:"flex items-start gap-2 flex-wrap",children:o.jsxs("label",{className:"flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0",children:[o.jsx("input",{type:"checkbox",checked:W,onChange:B=>{B.stopPropagation(),l(C)},onClick:B=>{B.stopPropagation()},className:"h-4 w-4 flex-shrink-0"}),o.jsxs("span",{className:"text-sm flex items-center gap-1",children:[o.jsxs("span",{children:[T,N]}),j&&o.jsx("span",{className:"text-base leading-none cursor-help",title:"Selecting this point shows named modes or states as colored bars instead of a line chart.","aria-label":"Categorical visualization",children:"📊"})]}),o.jsxs("div",{className:"relative ml-1 flex-shrink-0",children:[o.jsx("span",{className:`cursor-pointer ${de?"text-blue-600 hover:text-blue-700":"text-gray-400 hover:text-gray-600"}`,title:S,"aria-label":"Help",onClick:B=>{B.preventDefault(),B.stopPropagation(),c(C)},onMouseDown:B=>{B.preventDefault(),B.stopPropagation()},children:"ⓘ"}),G&&o.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse","aria-hidden":"true"},`red-dot-${C}`)]}),W&&o.jsxs("div",{className:"ml-auto flex items-center gap-1 flex-shrink-0",onClick:B=>B.stopPropagation(),children:[o.jsx("span",{className:"text-xs text-gray-600",children:"Inverter SN:"}),o.jsx(H0,{selectedInverters:H,onChange:B=>a(C,B)})]}),de&&Y.length>0&&o.jsx("div",{className:"ml-2 flex flex-wrap gap-1 w-full",children:Y.map((B,ee)=>{const E=Vn(B.label_family,B.label_text),V=Et(B.label_family,B.label_text)||`${B.label_family}: ${B.label_text}`;return o.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${E.bg} ${E.text} ${E.border}`,title:V,children:B.label_text},ee)})})]})}),de&&o.jsx("div",{className:"pl-6 text-xs text-gray-500 whitespace-pre-wrap",children:S})]},C)};if(g){const v=t;return o.jsx("div",{className:"ml-2 space-y-1",children:v.map(b)})}if(!(t instanceof Map))return console.error("LabelGroup: levelData is neither array nor Map",{levelName:e,depth:d,levelData:t,type:typeof t}),null;const y=t,h=d===0;return o.jsxs("details",{id:x,className:`group border-b py-2 ${h?"":"ml-2 border-l pl-2"}`,open:r,children:[o.jsxs("summary",{className:`cursor-pointer list-none ${h?"font-semibold":"font-medium text-gray-700"} flex items-center justify-between`,children:[o.jsxs("div",{className:"flex items-center flex-1 min-w-0",children:[o.jsx("span",{className:"mr-1",children:"▾"}),o.jsx("span",{className:"truncate",children:e})]}),_&&o.jsx("span",{className:"ml-2 px-2 py-0.5 text-[10px] font-normal uppercase tracking-wide text-gray-500 bg-gray-100 rounded-full flex-shrink-0 cursor-help",title:Et(_)||_,children:_})]}),o.jsx("div",{className:"mt-2 ml-1 space-y-2",children:[...y.entries()].map(([v,C])=>v===""?Array.isArray(C)?o.jsx("div",{className:"ml-2 space-y-1",children:C.map(b)},""):null:o.jsx(Ff,{levelName:v,levelData:C,selected:n,toggle:l,showHelp:i,onUpdateInverters:a,groupsExpanded:r,pointHelpEnabled:s,onTogglePointHelp:c,depth:d+1,query:u,parentPath:m,hierarchy:f},v))})]})}function Of({family:e,labels:t,onClose:n}){const l=Et(e),i=[...t].sort();return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:n,children:o.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:a=>a.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsxs("h2",{className:"text-xl font-semibold text-gray-800",children:[e," Labels"]}),o.jsx("button",{onClick:n,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l&&o.jsxs("div",{className:"mb-4 rounded-lg bg-blue-50 p-3 text-sm text-gray-700",children:[o.jsxs("strong",{className:"font-semibold",children:["About ",e,":"]})," ",l]}),o.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:o.jsx("div",{className:"space-y-4",children:i.map(a=>{const r=Et(e,a);return o.jsxs("div",{className:"border-b border-gray-200 pb-3 last:border-b-0",children:[o.jsx("div",{className:"mb-1 font-medium text-gray-800",children:a}),r?o.jsx("div",{className:"text-sm text-gray-600",children:r}):o.jsx("div",{className:"text-sm italic text-gray-400",children:"No help text available"})]},a)})})})]})})}function F0({onClose:e}){return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:o.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"How do filters work?"}),o.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"space-y-4 text-gray-700",children:[o.jsx("p",{children:"Use filters to quickly jump to the part of the system you're interested in—like just battery settings, inverter readings, or grid-related features—without needing to scroll through the full list."}),o.jsx("p",{children:"Select any combination of filters—such as component, type of data, unit, or feature—and the list will update instantly to show only points that match your selection. You can choose multiple filters at once to get more specific."}),o.jsx("p",{children:"As you refine the list, filters that no longer apply will dim, show a count of zero, and become unavailable, helping you see which combinations still have matching points."})]})]})})}function O0({allLabels:e,selectedLabels:t,onToggleLabel:n,onClearFilters:l,protocols:i,detailLevel:a,filterStructure:r}){const[s,c]=U.useState(200),[d,u]=U.useState(!1),[p,f]=U.useState(null),[m,x]=U.useState(!1),[g,_]=U.useState(!1),b=U.useRef(null),y=U.useRef(null),h=U.useMemo(()=>{const N=[];return["Equipment","Component","Type of Data","Unit"].forEach(H=>{e.has(H)&&N.push(H)}),e.forEach((H,Y)=>{Y!=="Level of Detail"&&!N.includes(Y)&&N.push(Y)}),N},[e]),v=N=>Array.from(t).filter(W=>W.startsWith(`${N}:`)).map(W=>W.split(":",2)[1]),C=N=>{if(r!=="sequential")return!1;const W=h.indexOf(N);if(W===0)return!1;const H=h[W-1];return v(H).length===0},T=U.useCallback((N,W)=>{const H=`${N}:${W}`,Y=new Set;t.forEach(B=>{const[ee]=B.split(":",2);ee!==N&&Y.add(B)}),Y.add(H);const de=new Map;Y.forEach(B=>{const[ee,E]=B.split(":",2);de.has(ee)||de.set(ee,new Set),de.get(ee).add(E)});const G=(()=>{switch(a){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();return i.filter(B=>{const ee=Array.isArray(B.labels)?B.labels:[],E=ee.filter(V=>V.label_family==="Level of Detail").map(V=>V.label_text);if(E.length>0&&!E.some(X=>G.includes(X)))return!1;const F=new Map;ee.forEach(V=>{F.has(V.label_family)||F.set(V.label_family,new Set),F.get(V.label_family).add(V.label_text)});for(const[V,X]of de.entries()){const se=F.get(V);if(!se||![...X].some(J=>se.has(J)))return!1}return!0}).length},[t,i,a]),S=N=>{N.preventDefault(),u(!0)};U.useEffect(()=>{if(!d)return;const N=H=>{if(b.current){const Y=b.current.getBoundingClientRect(),de=H.clientY-Y.top;de>=100&&de<=600&&c(de)}},W=()=>{u(!1)};return document.addEventListener("mousemove",N),document.addEventListener("mouseup",W),()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",W)}},[d]);const L=Array.from(t).map(N=>{const[W,H]=N.split(":",2);return{family:W,text:H}}).filter(({family:N})=>N!=="Level of Detail"),j=new Map(e);return j.delete("Level of Detail"),o.jsxs("div",{ref:b,className:"mb-3 rounded-lg border bg-gray-50 p-2",children:[o.jsxs("details",{ref:y,className:"group",open:g,onToggle:N=>_(N.target.open),children:[o.jsx("summary",{className:"cursor-pointer list-none",children:o.jsxs("div",{className:"mb-1 flex items-center gap-2 text-xs font-semibold text-gray-700",children:[o.jsx("svg",{className:"h-4 w-4 text-gray-600 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),o.jsx("span",{className:"flex-shrink-0",children:"Filters"}),L.length>0&&o.jsxs("span",{className:"text-gray-500",children:["(",L.length," active)"]})]})}),o.jsxs("div",{className:"mb-2 flex items-center justify-between gap-2 flex-wrap",children:[o.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[!g&&j.size>0&&o.jsx("button",{onClick:N=>{N.stopPropagation(),y.current&&(y.current.open=!0,_(!0))},className:"rounded border border-gray-300 bg-white px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex-shrink-0",children:"+ Add Filter"}),L.length>0&&o.jsx("div",{className:"flex flex-wrap items-center gap-1.5 min-w-0",children:L.map(({family:N,text:W})=>{const H=Vn(N);return o.jsxs("span",{className:`rounded border px-1.5 py-0.5 text-xs ${H.bg} ${H.text} ${H.border} border-2 font-semibold flex-shrink-0 flex items-center gap-1`,children:[o.jsx("span",{children:W}),o.jsx("button",{onClick:Y=>{Y.stopPropagation(),n(N,W)},className:"hover:opacity-70 transition-opacity flex-shrink-0",title:`Remove ${N}: ${W} filter`,"aria-label":`Remove ${N}: ${W} filter`,children:o.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},`${N}:${W}`)})}),L.length>0&&o.jsx("button",{onClick:N=>{N.stopPropagation(),l()},className:"flex-shrink-0 text-xs text-gray-500 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:"Clear all"})]}),o.jsx("button",{onClick:N=>{N.preventDefault(),N.stopPropagation(),x(!0)},className:"flex-shrink-0 text-xs text-blue-600 hover:text-blue-700 underline transition-colors",children:"How do I use filters?"})]}),o.jsx("div",{className:"space-y-0.5 overflow-auto mt-2",style:{height:`${s}px`},children:r==="sequential"?o.jsx(o.Fragment,{children:h.map((N,W)=>{const H=j.get(N);if(!H)return null;const Y=v(N),de=C(N),G=Y.length>0,B=!de,ee=Et(N),E=Vn(N);return de&&!G?null:o.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-0.5",children:[o.jsxs("button",{onClick:()=>f(N),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${G?`${E.bg} ${E.text} ${E.border} border-2`:de?"bg-slate-50 text-slate-400 border-slate-200 border":`${E.bg} ${E.text} ${E.border} border`}`,title:ee||`View help for ${N} labels`,"aria-label":`Help for ${N}`,children:[o.jsx("span",{className:"truncate",children:N}),o.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${E.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...H].sort().map(F=>{const V=`${N}:${F}`,X=Y.includes(F),se=B?T(N,F):0,ge=!B||!X&&se===0,J=Vn(N),re=Et(N,F);return o.jsxs("button",{onClick:()=>{ge||n(N,F)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${ge?"opacity-40 cursor-not-allowed bg-white":X?`${J.bg} ${J.text} ${J.border} border-2 font-semibold`:`bg-white ${J.text} ${J.border} hover:opacity-80 cursor-pointer`}`,style:!X&&!ge?{borderColor:"currentColor"}:void 0,title:de?"Pick something above to unlock this step":ge?"No points available with this combination of filters":re||`${N}: ${F}`,"aria-disabled":ge,tabIndex:ge?-1:0,children:[o.jsx("span",{children:F}),!X&&B&&o.jsxs("span",{className:`ml-1 ${ge?"text-gray-400":"text-gray-500"}`,children:["(",se,")"]})]},V)})})]},N)})}):o.jsx(o.Fragment,{children:[...j.entries()].map(([N,W])=>{const H=Et(N),Y=Vn(N),de=Array.from(W).some(G=>t.has(`${N}:${G}`));return o.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-0.5",children:[o.jsxs("button",{onClick:()=>f(N),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${de?`${Y.bg} ${Y.text} ${Y.border} border-2`:`${Y.bg} ${Y.text} ${Y.border} border`}`,title:H||`View help for ${N} labels`,"aria-label":`Help for ${N}`,children:[o.jsx("span",{className:"truncate",children:N}),o.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${Y.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...W].sort().map(G=>{const B=`${N}:${G}`,ee=t.has(B),E=T(N,G),F=!ee&&E===0,V=Vn(N),X=Et(N,G);return o.jsxs("button",{onClick:()=>{F||n(N,G)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${F?"opacity-40 cursor-not-allowed bg-white":ee?`${V.bg} ${V.text} ${V.border} border-2 font-semibold`:`bg-white ${V.text} ${V.border} hover:opacity-80 cursor-pointer`}`,style:!ee&&!F?{borderColor:"currentColor"}:void 0,title:F?"No points available with this combination of filters":X||`${N}: ${G}`,"aria-disabled":F,tabIndex:F?-1:0,children:[o.jsx("span",{children:G}),!ee&&o.jsxs("span",{className:`ml-1 ${F?"text-gray-400":"text-gray-500"}`,children:["(",E,")"]})]},B)})})]},N)})})}),o.jsx("div",{onMouseDown:S,className:"mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors",title:"Drag to resize"})]}),p&&o.jsx(Of,{family:p,labels:e.get(p)||new Set,onClose:()=>f(null)}),m&&o.jsx(F0,{onClose:()=>x(!1)})]})}const Ua=["001","002","003"],Ms=e=>{const t=parseInt(e,10);return(1e9+t*1e4+t).toString().padStart(10,"0")},vu=[{bg:"bg-purple-500",border:"border-purple-600"},{bg:"bg-green-500",border:"border-green-600"},{bg:"bg-teal-500",border:"border-teal-600"},{bg:"bg-blue-500",border:"border-blue-600"},{bg:"bg-pink-500",border:"border-pink-600"},{bg:"bg-orange-500",border:"border-orange-600"},{bg:"bg-indigo-500",border:"border-indigo-600"},{bg:"bg-red-500",border:"border-red-600"}],wu=["text-purple-500","text-green-500","text-teal-500","text-blue-500","text-pink-500","text-orange-500","text-indigo-500","text-red-500"],Cu=[{bg50:"bg-purple-50",bg100:"bg-purple-100",border200:"border-purple-200",border400:"border-purple-400",bg500:"bg-purple-500/80",text600:"text-purple-600",text700:"text-purple-700",ring:"focus:ring-purple-500"},{bg50:"bg-green-50",bg100:"bg-green-100",border200:"border-green-200",border400:"border-green-400",bg500:"bg-green-500/80",text600:"text-green-600",text700:"text-green-700",ring:"focus:ring-green-500"},{bg50:"bg-teal-50",bg100:"bg-teal-100",border200:"border-teal-200",border400:"border-teal-400",bg500:"bg-teal-500/80",text600:"text-teal-600",text700:"text-teal-700",ring:"focus:ring-teal-500"},{bg50:"bg-blue-50",bg100:"bg-blue-100",border200:"border-blue-200",border400:"border-blue-400",bg500:"bg-blue-500/80",text600:"text-blue-600",text700:"text-blue-700",ring:"focus:ring-blue-500"},{bg50:"bg-pink-50",bg100:"bg-pink-100",border200:"border-pink-200",border400:"border-pink-400",bg500:"bg-pink-500/80",text600:"text-pink-600",text700:"text-pink-700",ring:"focus:ring-pink-500"},{bg50:"bg-orange-50",bg100:"bg-orange-100",border200:"border-orange-200",border400:"border-orange-400",bg500:"bg-orange-500/80",text600:"text-orange-600",text700:"text-orange-700",ring:"focus:ring-orange-500"},{bg50:"bg-indigo-50",bg100:"bg-indigo-100",border200:"border-indigo-200",border400:"border-indigo-400",bg500:"bg-indigo-500/80",text600:"text-indigo-600",text700:"text-indigo-700",ring:"focus:ring-indigo-500"},{bg50:"bg-red-50",bg100:"bg-red-100",border200:"border-red-200",border400:"border-red-400",bg500:"bg-red-500/80",text600:"text-red-600",text700:"text-red-700",ring:"focus:ring-red-500"}];function Bf(e){let t=0;for(let n=0;n<e.length;n+=1)t=t*31+e.charCodeAt(n)>>>0;return()=>(t=t*1664525+1013904223>>>0,t/2**32)}function B0(e){const t=[];for(let i=0;i<e;i+=1){const a=720+i*10,r=Math.floor(a/60)%24,s=a%60;t.push(`${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`)}return t}const I0=36,ln={width:1e3,height:360};function j0(e,t=I0){const n=Bf(`line-${e}`),l=[];let i=n()*60+20;for(let a=0;a<t;a+=1){const r=n()-.5,s=4+n()*8,c=i+r*s;i=l.length?l[l.length-1]*.7+c*.3:c,i=Math.max(0,Math.min(140,i)),l.push(Number(i.toFixed(2)))}return l}function U0({series:e,crosshairX:t,onCrosshairChange:n}){if(e.length===0)return null;const l=e.flatMap(d=>d.values),i=Math.min(...l,0),r=Math.max(...l,1)-i||1,s=d=>{if(!n)return;const u=d.currentTarget.getBoundingClientRect(),p=(d.clientX-u.left)/u.width*100;n(Math.max(0,Math.min(100,p)))},c=()=>{n&&n(null)};return o.jsx("div",{className:"h-full w-full relative",onMouseMove:s,onMouseLeave:c,children:o.jsxs("svg",{viewBox:`0 0 ${ln.width} ${ln.height}`,preserveAspectRatio:"none",className:"h-full w-full",children:[e.map(({entry:d,values:u})=>{if(u.length<2)return null;const p=u.map((f,m)=>{const x=m/(u.length-1)*ln.width,g=(f-i)/r,_=ln.height-g*ln.height;return`${m===0?"M":"L"}${x.toFixed(2)},${_.toFixed(2)}`}).join(" ");return o.jsx("path",{d:p,fill:"none",stroke:"currentColor",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round",className:`${wu[d.colorIndex%wu.length]} drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]`,opacity:.95},d.pointKey)}),t!=null&&o.jsx("line",{x1:t/100*ln.width,y1:0,x2:t/100*ln.width,y2:ln.height,stroke:"#374151",strokeWidth:1.5,strokeDasharray:"4 2",opacity:.7,pointerEvents:"none"})]})})}function $0(e){if(!e.meaningKeys.length)return null;const t=e.meaningKeys,n=Bf(e.pointKey),l=t.filter((u,p)=>n()>.35||p===0);l.length===0&&l.push(t[0]);const i=12,a=B0(i),s=(typeof e.dtype=="string"?e.dtype.toLowerCase():"").startsWith("bitfield"),c=Array.from({length:i},()=>new Set);if(s)for(let u=0;u<i;u+=1){let p=!1;l.forEach((f,m)=>{n()>.55&&(c[u].add(f),p=!0),!p&&m===l.length-1&&n()>.7&&(c[u].add(f),p=!0)})}else{let u=0;for(;u<i&&l.length;){const p=Math.floor(n()*l.length),f=l[p],m=1+Math.floor(n()*3);if(n()>.2)for(let x=0;x<m&&u+x<i;x+=1)c[u+x].add(f);u+=m}}const d=t.map(u=>{var _,b;const p=String(u),f=(_=e.friendlyMeanings)==null?void 0:_[p],m=(b=e.meanings)==null?void 0:b[p],x=(f??m??p).trim()||`Value ${p}`,g=c.map(y=>y.has(u));return{meaningKey:u,label:x,activeSlots:g}});return{id:e.pointKey,title:e.name,subtitle:`SN ${e.shortSN}`,timeLabels:a,rows:d,colorIndex:e.colorIndex}}function W0({data:e,onRemove:t,crosshairX:n,onCrosshairChange:l,onDragStart:i,onDragEnd:a,isDragActive:r}){const[s,c]=U.useState(!0),d=s?e.rows.filter(x=>x.activeSlots.some(Boolean)):e.rows,u=e.rows.length-d.length,p=Cu[e.colorIndex%Cu.length],f=x=>{if(!l)return;const g=x.currentTarget.getBoundingClientRect(),_=(x.clientX-g.left)/g.width*100;l(Math.max(0,Math.min(100,_)))},m=()=>{l&&l(null)};return o.jsxs("div",{draggable:!0,onDragStart:x=>{x.stopPropagation(),i&&i();const g=x.currentTarget.cloneNode(!0);g.style.position="absolute",g.style.top="-1000px",document.body.appendChild(g),x.dataTransfer.setDragImage(g,0,0),setTimeout(()=>document.body.removeChild(g),0)},onDragEnd:x=>{x.stopPropagation(),a&&a()},className:`rounded-lg border ${p.border200} bg-white shadow-sm ${r?"cursor-grab active:cursor-grabbing":""}`,children:[o.jsxs("div",{className:`flex items-center justify-between gap-2 border-b ${p.border200} ${p.bg50} px-4 py-1.5`,children:[o.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.jsx("span",{className:`font-semibold ${p.text700}`,children:e.title}),o.jsx("span",{className:p.text600,children:e.subtitle})]}),o.jsxs("div",{className:`flex items-center gap-3 text-xs ${p.text700}`,children:[o.jsxs("label",{className:"flex items-center gap-1.5 font-medium",children:[o.jsx("input",{type:"checkbox",checked:s,onChange:x=>c(x.target.checked),className:`h-3 w-3 rounded ${p.border400} ${p.text600} ${p.ring}`}),"Hide empty bars"]}),o.jsxs("span",{className:`text-[11px] ${p.text600}`,children:[u," values hidden"]}),t&&o.jsx("button",{type:"button",onClick:x=>{x.stopPropagation(),t()},className:"text-[11px] px-2 py-1 rounded border border-transparent text-gray-500 hover:text-red-600 hover:border-red-200 transition-colors",title:"Remove this point","aria-label":"Remove categorical point",children:"×"})]})]}),o.jsxs("div",{className:"px-4 py-3 relative",onMouseMove:f,onMouseLeave:m,children:[o.jsx("div",{className:"space-y-1",children:d.length===0?o.jsx("div",{className:"text-xs text-gray-500 italic",children:'No categorical data is visible. Disable "Hide empty bars" to view all meanings.'}):d.map(x=>o.jsxs("div",{className:"flex flex-col",children:[o.jsx("div",{className:"text-[10px] font-medium text-gray-600 mb-0.5",children:x.label}),o.jsx("div",{className:`relative h-3 rounded ${p.bg100} overflow-hidden`,children:o.jsx("div",{className:"absolute inset-0 flex",children:x.activeSlots.map((g,_)=>o.jsx("div",{className:`flex-1 ${_<x.activeSlots.length-1?`border-r ${p.border200}`:""} ${g?p.bg500:"bg-transparent"}`},`${x.meaningKey}-${_}`))})})]},x.meaningKey))}),n!=null&&o.jsx("div",{className:"absolute top-0 bottom-0 w-px bg-gray-700 pointer-events-none opacity-70",style:{left:`calc(1rem + ${n}%)`}})]})]})}function H0({selectedInverters:e,onChange:t}){const[n,l]=U.useState(!1),i=U.useRef(null),a=e.size===Ua.length,r=a?"All Inverters":Array.from(e).sort().map(d=>Ms(d)).join(", ");U.useEffect(()=>{const d=u=>{i.current&&!i.current.contains(u.target)&&l(!1)};if(n)return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[n]);const s=()=>{t(a?new Set(["001"]):new Set(Ua))},c=d=>{const u=new Set(e);u.has(d)?(u.delete(d),u.size===0&&u.add("001")):u.add(d),t(u)};return o.jsxs("div",{className:"relative",ref:i,children:[o.jsxs("button",{type:"button",onClick:()=>l(!n),className:"text-xs border border-blue-300 rounded px-2 py-1 bg-white text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1",children:[o.jsx("span",{children:r}),o.jsx("svg",{className:`h-3 w-3 transition-transform ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),n&&o.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]",children:o.jsxs("div",{className:"py-1",children:[o.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:a,onChange:s,className:"h-3 w-3"}),o.jsx("span",{className:"text-xs text-gray-700",children:"All Inverters"})]}),Ua.map(d=>o.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:e.has(d),onChange:()=>c(d),className:"h-3 w-3"}),o.jsx("span",{className:"text-xs text-gray-700",children:Ms(d)})]},d))]})})]})}function q0({selectedPoints:e,protocols:t,onUpdateInverters:n,onScrollToPoint:l,onRemoveInverter:i,onSelectPointsToggle:a,selectPointsOpen:r,onDeleteChart:s,onShowTutorial:c,crosshairX:d,onCrosshairChange:u,onDragStart:p,onDragEnd:f,isDragActive:m,isDropTarget:x}){const[g,_]=U.useState(new Set),b=Array.from(e.entries()).map(([G,B])=>{const[ee,E]=G.split(":"),F=t.find(X=>X.model===ee&&X.point===E),V=F&&(F.entry.description||F.entry.name)||E;return{key:G,name:V,inverters:B}}).filter(G=>G.name),y=b.flatMap(({key:G,name:B,inverters:ee})=>{var me,Oe,Jn,Zn,el,tl;const[E,F]=G.split(":"),V=t.find(M=>M.model===E&&M.point===F),X=(me=V==null?void 0:V.entry)!=null&&me.unit&&V.entry.unit!=="N/A"?V.entry.unit:"N/A",se=((Oe=V==null?void 0:V.entry)==null?void 0:Oe.longdescription)||((Jn=V==null?void 0:V.entry)==null?void 0:Jn.description)||"",ge=(Zn=V==null?void 0:V.entry)==null?void 0:Zn.dtype,J=(el=V==null?void 0:V.entry)==null?void 0:el.meanings,re=(tl=V==null?void 0:V.entry)==null?void 0:tl.friendly_meanings,_e=new Set;J&&Object.keys(J).forEach(M=>_e.add(String(M))),re&&Object.keys(re).forEach(M=>_e.add(String(M)));const Ae=Array.from(_e),Dn=Ae.length>0;return Array.from(ee).sort().map((M,ne)=>{const le=Ms(M);return{key:G,pointKey:`${G}:${M}`,name:B,shortSN:M,fullSN:le,unit:X,model:E,point:F,longDescription:se,colorIndex:(b.findIndex(ie=>ie.key===G)*Ua.length+ne)%vu.length,dtype:ge,meanings:J,friendlyMeanings:re,meaningKeys:Ae,isCategorical:Dn}})}),h=y.filter(G=>!g.has(G.pointKey)),v=h.filter(G=>G.isCategorical),C=h.filter(G=>!G.isCategorical),T=y.filter(G=>!G.isCategorical),S=U.useMemo(()=>v.map(G=>$0(G)).filter(G=>G!==null),[v]),L=C.length>0,j=U.useMemo(()=>C.map(G=>({entry:G,values:j0(G.pointKey)})),[C]),N=G=>{_(B=>{const ee=new Set(B);return ee.has(G)?ee.delete(G):ee.add(G),ee})},W=G=>{const B=T.map(F=>F.pointKey),E=B.filter(F=>!g.has(F)).length===1&&!g.has(G);_(E?new Set:new Set(B.filter(F=>F!==G)))},H=(G,B,ee)=>{ee.stopPropagation(),i==null||i(G,B)},de=!(!L&&S.length>0&&e.size>0);return o.jsxs("div",{className:"w-full h-full flex flex-col relative",children:[o.jsxs("div",{className:"absolute top-4 right-4 z-20 flex items-center gap-2",children:[a&&o.jsxs("button",{onClick:()=>a(!r),className:"text-xs px-3 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center gap-2 shadow-sm",title:r?"Hide Add Points":"Show Add Points","data-role":"sidebar-toggle",children:[o.jsx("span",{children:"Add Points"}),o.jsx("svg",{className:`h-4 w-4 text-gray-600 transition-transform ${r?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s&&o.jsx("button",{onClick:G=>{G.stopPropagation(),s()},className:"text-xs px-2 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center justify-center text-gray-600 hover:text-gray-800 opacity-80 hover:opacity-100 shadow-sm",title:"Delete chart",children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"p-4 flex flex-col h-full",children:[o.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[de&&o.jsxs("div",{className:"relative flex-1 min-h-[320px] rounded-2xl border border-gray-300 bg-gradient-to-b from-white via-white to-gray-50 shadow-inner overflow-hidden",children:[o.jsxs("div",{className:"absolute left-0 top-0 bottom-10 w-12 border-r border-gray-200 flex flex-col items-center justify-between py-4 text-gray-600",children:[o.jsx("span",{className:"text-[10px] uppercase tracking-widest leading-none transform -rotate-90",children:"Value"}),o.jsx("div",{className:"flex flex-col items-center gap-3 text-gray-400",children:[0,1,2,3,4].map(G=>o.jsx("div",{className:"w-3 h-px bg-gray-400/70"},G))}),o.jsx("span",{className:"text-[10px]",children:"0"})]}),o.jsxs("div",{className:"absolute left-12 right-6 bottom-6 h-10 border-t border-gray-200 flex items-center justify-between px-2 text-gray-500",children:[o.jsx("span",{className:"text-[11px]",children:"0"}),o.jsx("div",{className:"flex gap-2",children:[0,1,2,3,4].map(G=>o.jsx("div",{className:"h-3 w-px bg-gray-400/60"},G))}),o.jsx("span",{className:"text-[11px] uppercase tracking-widest",children:"Time"})]}),o.jsx("div",{className:`absolute top-6 bottom-16 left-12 right-6 rounded-xl bg-white/40 backdrop-blur-sm ${e.size===0?"cursor-pointer":"cursor-default"}`,onClick:G=>{G.target.closest("button")||e.size===0&&a&&a(!0)},children:e.size===0?o.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-gray-500",children:[o.jsx("div",{className:"text-base font-medium text-gray-700",children:"No points selected"}),o.jsx("div",{children:"Click anywhere in this area to select points"}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:["New to charts?"," ",o.jsx("button",{onClick:G=>{G.stopPropagation(),c==null||c()},className:"text-blue-600 hover:text-blue-700 underline",children:"View quick tutorial"})]})]}):y.length===0?o.jsx("div",{className:"flex h-full items-center justify-center text-sm text-gray-400",children:"Select points to display charts"}):L?o.jsxs("div",{className:"relative h-full w-full",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 grid grid-rows-4 opacity-30",children:[0,1,2,3].map(G=>o.jsx("div",{className:"border-b border-dashed border-gray-300"},G))}),o.jsx(U0,{series:j,crosshairX:d,onCrosshairChange:u})]}):o.jsx("div",{className:"flex h-full items-center justify-center px-6 text-center text-sm text-gray-500",children:"All selected points are hidden. Use the legend controls to show a series."})})]}),S.length>0&&o.jsx("div",{className:`${de?"":"pt-2"}`,"data-categorical-stack":!0,children:o.jsx("div",{className:"space-y-4",children:S.map(G=>{const B=()=>{const V=G.id.split(":"),X=V.pop()??"",se=V.join(":");i==null||i(se,X)},E=G.id.split(":").slice(0,-1).join(":"),F=e.get(E)||new Set;return o.jsx(W0,{data:G,onRemove:B,crosshairX:d,onCrosshairChange:u,onDragStart:()=>{p&&p(E,F)},onDragEnd:f,isDragActive:m},`${G.id}:${G.subtitle}`)})})})]}),T.length>0&&o.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:T.map(({pointKey:G,name:B,shortSN:ee,fullSN:E,colorIndex:F,key:V,unit:X,point:se,longDescription:ge})=>{const J=vu[F],re=g.has(G),_e=["Click to toggle visibility (double-click to show only this)","",`This is the point "${B}" (${se}) as read by inverter ${E}.`];ge&&_e.push("",ge);const Ae=_e.join(`
`),Dn=e.get(V)||new Set;return o.jsxs("div",{draggable:!0,onDragStart:me=>{me.stopPropagation(),p&&p(V,Dn);const Oe=me.currentTarget.cloneNode(!0);Oe.style.position="absolute",Oe.style.top="-1000px",document.body.appendChild(Oe),me.dataTransfer.setDragImage(Oe,0,0),setTimeout(()=>document.body.removeChild(Oe),0)},onDragEnd:me=>{me.stopPropagation(),f&&f()},className:`flex items-center gap-2 text-xs group hover:bg-gray-50 rounded px-2 py-1 border border-gray-200 bg-white transition-colors flex-shrink-0 ${m?"cursor-grab active:cursor-grabbing":"cursor-pointer"}`,title:Ae,children:[o.jsx("div",{className:`w-3 h-3 rounded-sm flex-shrink-0 ${J.bg} ${J.border} border cursor-pointer`,onClick:()=>N(G),onDoubleClick:me=>{me.stopPropagation(),W(G)}}),o.jsx("span",{className:`font-medium text-gray-600 cursor-pointer ${re?"opacity-50 line-through":""}`,onClick:()=>N(G),onDoubleClick:me=>{me.stopPropagation(),W(G)},children:B}),o.jsxs("span",{className:"text-gray-400",children:["(SN ",ee,")"]}),X!=="N/A"&&o.jsxs("span",{className:"text-gray-400",children:["[",X,"]"]}),o.jsx("button",{onClick:me=>{me.stopPropagation(),N(G)},onDoubleClick:me=>{me.stopPropagation(),W(G)},className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:re?"Show in chart (double-click to show only this)":"Hide in chart (double-click to show only this)",children:re?o.jsxs("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})}),o.jsx("button",{onClick:me=>H(V,ee,me),className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:"Remove this data point from the chart",children:o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},G)})})]})]})}function z0({onClose:e}){return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:o.jsxs("div",{className:"relative max-w-lg rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:"Group By"}),o.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:o.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[o.jsx("p",{children:"Reorder or add levels to control how points are grouped in the list."}),o.jsx("p",{children:"For example, grouping by Component → Feature will show each component first, with its features listed underneath."}),o.jsx("p",{className:"text-gray-600",children:"You can add or remove levels using the + button and × button next to each level."})]})]})})}function K0({availableFamilies:e,hierarchy:t,onChange:n,scrollContainerRef:l}){const[i,a]=U.useState(!1),[r,s]=U.useState(!0),c=U.useRef(null),d=U.useRef(0),u=(x,g)=>{const _=[...t];g===""?_.splice(x,1):_[x]=g,n(_)},p=()=>{n([...t,""])},f=x=>{const g=[...t];g.splice(x,1),n(g)},m=x=>{const g=t.filter((_,b)=>b!==x&&t[b]);return e.filter(_=>!g.includes(_))};return U.useEffect(()=>{const x=l==null?void 0:l.current;if(!x)return;const g=()=>{const _=x.scrollTop;_>d.current&&_>50?r&&c.current&&(c.current.open=!1,s(!1)):_<50&&!r&&c.current&&(c.current.open=!0,s(!0)),d.current=_};return x.addEventListener("scroll",g,{passive:!0}),()=>{x.removeEventListener("scroll",g)}},[r,l]),o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"mb-3 rounded-lg border bg-gray-50 p-2 transition-all duration-300",children:o.jsxs("details",{ref:c,className:"group",open:r,onToggle:x=>s(x.target.open),children:[o.jsx("summary",{className:"cursor-pointer list-none",children:o.jsxs("div",{className:"flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[o.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"}),o.jsx("span",{className:"flex-shrink-0",children:"Group by"}),t.filter(x=>x).length>0&&o.jsx("div",{className:"flex items-center gap-1 ml-1 min-w-0",children:t.map((x,g)=>{if(!x)return null;const _=Vn(x);return o.jsxs(U.Fragment,{children:[o.jsx("span",{className:`rounded px-2 py-0.5 text-xs font-semibold flex-shrink-0 ${g===0?"bg-blue-100 text-blue-700":g===1?"bg-green-100 text-green-700":`${_.bg} ${_.text}`}`,children:x}),g<t.length-1&&t[g+1]&&o.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"})]},g)})})]}),o.jsxs("button",{onClick:x=>{x.preventDefault(),x.stopPropagation(),a(!0)},className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline flex-shrink-0",children:[o.jsx("span",{children:"What does this do?"}),o.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]})]})}),o.jsx("div",{className:"mt-2",children:o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[t.map((x,g)=>o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsxs("label",{className:"text-gray-600",children:["Level ",g+1,":"]}),o.jsxs("select",{value:x||"",onChange:_=>u(g,_.target.value),className:"rounded border px-2 py-1 text-xs",children:[o.jsx("option",{value:"",children:"(None)"}),m(g).map(_=>o.jsx("option",{value:_,children:_},_))]}),t.length>1&&o.jsx("button",{onClick:()=>f(g),className:"rounded border bg-white px-1.5 py-0.5 text-xs text-red-600 hover:bg-red-50",title:"Remove level",children:"×"})]},g)),o.jsx("button",{onClick:p,className:"rounded border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",title:"Add hierarchy level",children:"+"}),t.length===0&&o.jsx("div",{className:"text-gray-500 italic",children:"No hierarchy levels configured"})]})})]})}),i&&o.jsx(z0,{onClose:()=>a(!1)})]})}const Gs=16,Fs=16,ai=280,va=360,wa=12,Ca=12,al=520,Sa=780,Q0=["001"],hr=({onAdd:e,ariaLabel:t})=>o.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),e()},className:"relative z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-base font-semibold text-gray-600 opacity-70 shadow-sm transition-all duration-150 ease-out hover:bg-white group-hover:scale-105 group-hover:opacity-100 group-focus-within:opacity-100 focus:scale-105 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300","aria-label":t,children:o.jsx("span",{className:"leading-none",children:"+"})}),Su=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:i,onAutoFit:a,percentAbove:r,isActive:s=!1,buttonSegments:c})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof a=="function"&&typeof r=="number",u=typeof l=="function",p=d||u,f=m=>{m.key==="Enter"||m.key===" "?(m.preventDefault(),e()):m.key==="ArrowUp"&&d&&n?(m.preventDefault(),n(wa)):m.key==="ArrowDown"&&d&&n?(m.preventDefault(),n(-wa)):m.key==="ArrowUp"&&u&&i?(m.preventDefault(),i(wa)):m.key==="ArrowDown"&&u&&i&&(m.preventDefault(),i(-wa))};return o.jsxs("div",{role:"separator","aria-orientation":"horizontal",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts"}:u?{"aria-label":"Resize row height","aria-valuetext":`${Math.round(r??100)}%`}:{"aria-label":"Add chart below","aria-disabled":!0},tabIndex:0,onKeyDown:f,onClick:m=>{p||m.target.closest("button")||(m.preventDefault(),e())},onDoubleClick:m=>{m.target.closest("button")||(m.preventDefault(),d&&a?a():e())},onMouseDown:m=>{m.target.closest("button")||m.button===0&&(m.preventDefault(),d&&t?t(m.clientY):u&&l&&l(m.clientY))},className:`group relative flex items-center justify-center ${p?"cursor-row-resize":"cursor-pointer"} select-none outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${s?"ring-2 ring-blue-300/60":""}`,style:{height:Gs,paddingLeft:"0.5rem",paddingRight:"0.5rem"},children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center px-4",children:o.jsx("div",{className:`flex-1 h-1 rounded-full transition-colors duration-150 ${s?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`})}),o.jsx("div",{className:`${c&&c.length>0?"grid w-full":"flex w-full"} items-center justify-center`,style:c&&c.length>0?{gridTemplateColumns:c.map(m=>m.size?`${m.size}px`:"1fr").join(" ")}:void 0,children:c&&c.length>0?c.map(m=>o.jsx("div",{className:"flex justify-center py-0.5",children:o.jsx(hr,{onAdd:m.onAdd,ariaLabel:"Add chart below"})},m.key)):o.jsx(hr,{onAdd:e,ariaLabel:"Add chart below"})})]})},La=({onResizeStart:e,isActive:t=!1})=>o.jsx("div",{className:"relative w-full h-full flex items-center justify-center",style:{pointerEvents:"auto"},children:o.jsx("div",{className:`w-3 h-3 rounded-full cursor-nwse-resize transition-all ${t?"bg-blue-500 scale-125":"bg-gray-400 hover:bg-gray-500"}`,onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),e(n.clientX,n.clientY)},title:"Drag to resize both dimensions",role:"separator","aria-label":"Resize corner"})}),Lu=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:i,onAutoFit:a,percentLeft:r,isActive:s=!1,buttonSegments:c})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof a=="function"&&typeof r=="number",u=typeof l=="function",p=d||u,f=m=>{m.key==="Enter"||m.key===" "?(m.preventDefault(),e()):m.key==="ArrowRight"&&d&&n?(m.preventDefault(),n(Ca)):m.key==="ArrowLeft"&&d&&n?(m.preventDefault(),n(-Ca)):m.key==="ArrowRight"&&u&&i?(m.preventDefault(),i(Ca)):m.key==="ArrowLeft"&&u&&i&&(m.preventDefault(),i(-Ca))};return o.jsxs("div",{role:"separator","aria-orientation":"vertical",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts horizontally"}:u?{"aria-label":"Resize column width"}:{"aria-label":"Add chart to the right","aria-disabled":!0},tabIndex:0,onKeyDown:f,onClick:m=>{p||m.target.closest("button")||(m.preventDefault(),e())},onDoubleClick:m=>{m.target.closest("button")||(m.preventDefault(),p&&a?a():e())},onMouseDown:m=>{m.target.closest("button")||m.button===0&&(m.preventDefault(),d&&t?t(m.clientX):u&&l&&l(m.clientX))},className:`group relative flex h-full w-full ${p?"cursor-col-resize":"cursor-pointer"} select-none flex-col items-center justify-center outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${s?"ring-2 ring-blue-300/60":""}`,style:{width:Fs,paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 flex flex-col justify-center py-4",children:o.jsx("div",{className:`mx-auto w-1 rounded-full transition-colors duration-150 ${s?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`,style:{flex:1}})}),o.jsx("div",{className:`${c&&c.length>0?"grid h-full":"flex"} w-full flex-1 flex-col items-center justify-center`,style:c&&c.length>0?{gridTemplateRows:c.map(m=>m.size?`${m.size}px`:"1fr").join(" ")}:void 0,children:c&&c.length>0?c.map(m=>o.jsx("div",{className:"flex items-center justify-center px-0.5",children:o.jsx(hr,{onAdd:m.onAdd,ariaLabel:"Add chart to the right"})},m.key)):o.jsx(hr,{onAdd:e,ariaLabel:"Add chart to the right"})})]})};function Y0({protocols:e,onUpdateInverters:t,onScrollToPoint:n,onRemoveInverter:l,onSelectPointsToggle:i,selectPointsOpen:a,callbacksRef:r,onActiveChartSelectedPointsChange:s,onActiveChartPositionChange:c}){const[d,u]=$.useState([{id:"chart-0",selectedPoints:new Map,row:0,col:0}]),[p,f]=$.useState(1),[m,x]=$.useState("chart-0"),[g,_]=$.useState(new Map([[0,Sa]])),[b,y]=$.useState(new Map([[0,al]])),[h,v]=$.useState(null),[C,T]=$.useState(null),[S,L]=$.useState(null),[j,N]=$.useState(!1),W=U.useRef(null),H=U.useRef(null),Y=U.useRef(null),[de,G]=$.useState(null),B=U.useRef(null),ee=U.useRef(new Map),[E,F]=$.useState(null),[V,X]=$.useState(null),[se,ge]=$.useState(null);U.useEffect(()=>{const w=d.find(k=>k.id===m);w&&s(new Map(w.selectedPoints))},[d,m,s]),U.useEffect(()=>{const w=()=>{const k=ee.current.get(m);if(k){const P=k.getBoundingClientRect();c(P)}else c(null)};return w(),window.addEventListener("scroll",w,!0),window.addEventListener("resize",w),()=>{window.removeEventListener("scroll",w,!0),window.removeEventListener("resize",w)}},[m,d,g,b,c]),U.useLayoutEffect(()=>{r.current={getActiveChartSelectedPoints:()=>{const w=d.find(k=>k.id===m);return w?new Map(w.selectedPoints):new Map},togglePointForActiveChart:w=>{console.log("togglePointForActiveChart called, activeChartId:",m),u(k=>k.map(D=>{if(D.id===m){const A=new Map(D.selectedPoints);if(console.log("Current selected points:",A.size),A.has(w))A.delete(w),console.log("Deleted point, new size:",A.size);else{const O=new Set(["001"]);A.set(w,O),console.log("Added point, new size:",A.size)}return{...D,selectedPoints:A}}return D}))},updateInvertersForActiveChart:(w,k)=>{console.log("updateInvertersForActiveChart called, activeChartId:",m,"inverters:",k),u(P=>P.map(A=>{if(A.id===m){const O=new Map(A.selectedPoints);return k.size===0?O.delete(w):O.set(w,k),console.log("Updated chart, selected points size:",O.size),{...A,selectedPoints:O}}return A}))}}},[d,m,r]),U.useEffect(()=>{if(typeof ResizeObserver>"u")return;const w=new ResizeObserver(k=>{const P=new Map;k.forEach(D=>{const A=D.target,O=A.getAttribute("data-chart-id");if(!O)return;const z=d.find(ae=>ae.id===O);if(!z)return;const Z=A.querySelector("[data-categorical-stack]"),K=Z?Z.scrollHeight:0;if(K<=0)return;const q=Math.max(al+K+24,ai);P.set(z.row,Math.max(q,P.get(z.row)??0))}),P.size!==0&&y(D=>{let A=!1;const O=new Map(D);return P.forEach((z,Z)=>{const K=O.get(Z)??al;z>K+1&&(O.set(Z,z),A=!0)}),A?O:D})});return ee.current.forEach(k=>w.observe(k)),()=>{w.disconnect()}},[d,y]);const J=U.useCallback(w=>b.get(w)??al,[b]),re=U.useCallback(w=>g.get(w)??Sa,[g]),_e=U.useCallback((w,k)=>{const P=Math.max(ai,k);y(D=>{const A=new Map(D);return A.set(w,P),A})},[]),Ae=U.useCallback((w,k)=>{const P=Math.max(va,k);_(D=>{const A=new Map(D);return A.set(w,P),A})},[]),Dn=U.useCallback(w=>{B.current!==null&&window.clearTimeout(B.current),G(w),B.current=window.setTimeout(()=>{G(null),B.current=null},400)},[]);U.useEffect(()=>()=>{B.current!==null&&window.clearTimeout(B.current)},[]);const me=U.useCallback((w,k,P,D)=>{if(D<=ai*2){const K=D/2;y(q=>{const ae=new Map(q);return ae.set(w,K),ae.set(k,D-K),ae});return}const A=ai,O=D-ai,z=Math.min(Math.max(P,A),O),Z=D-z;y(K=>{const q=new Map(K);return q.set(w,z),q.set(k,Z),q})},[]),Oe=U.useCallback((w,k,P,D)=>{if(D<=va*2){const K=D/2;_(q=>{const ae=new Map(q);return ae.set(w,K),ae.set(k,D-K),ae});return}const A=va,O=D-va,z=Math.min(Math.max(P,A),O),Z=D-z;_(K=>{const q=new Map(K);return q.set(w,z),q.set(k,Z),q})},[]),Jn=(w,k,P)=>{if(k===void 0)return;const D=J(w),A=J(k);W.current={mode:"between",startY:P,aboveRow:w,belowRow:k,initialAbove:D,initialBelow:A,total:D+A},v(w)},Zn=(w,k)=>{W.current={mode:"edge",startY:k,row:w,initialHeight:J(w)},v(w)};U.useEffect(()=>{if(h===null||!W.current)return;const w=W.current,k=D=>{const A=D.clientY-w.startY;if(w.mode==="between"){const O=w.initialAbove+A;me(w.aboveRow,w.belowRow,O,w.total)}else _e(w.row,w.initialHeight+A)},P=()=>{v(null),W.current=null};return document.addEventListener("mousemove",k),document.addEventListener("mouseup",P),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",P)}},[h,me,_e]);const el=(w,k,P)=>{if(k===void 0)return;const D=re(w),A=re(k);H.current={mode:"between",startX:P,leftCol:w,rightCol:k,initialLeft:D,initialRight:A,total:D+A},T(w)},tl=(w,k)=>{H.current={mode:"edge",startX:k,col:w,initialWidth:re(w)},T(w)};U.useEffect(()=>{if(C===null||!H.current)return;const w=H.current,k=D=>{const A=D.clientX-w.startX;if(w.mode==="between"){const O=w.initialLeft+A;Oe(w.leftCol,w.rightCol,O,w.total)}else Ae(w.col,w.initialWidth+A)},P=()=>{T(null),H.current=null};return document.addEventListener("mousemove",k),document.addEventListener("mouseup",P),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",P)}},[C,Oe,Ae]);const M=(w,k,P,D,A,O)=>{const z=J(w),Z=J(k),K=re(P),q=re(D);Y.current={startX:A,startY:O,aboveRow:w,belowRow:k,leftCol:P,rightCol:D,initialAboveHeight:z,initialBelowHeight:Z,initialLeftWidth:K,initialRightWidth:q,totalHeight:z+Z,totalWidth:K+q},L({row:w,col:P})},ne=(w,k,P,D,A,O)=>{if(w==="row"){const z=k,Z=D,K=P;Y.current={startX:A,startY:O,aboveRow:z,belowRow:Z,leftCol:K,rightCol:K,initialAboveHeight:J(z),initialBelowHeight:J(Z),initialLeftWidth:re(K),initialRightWidth:0,totalHeight:J(z)+J(Z),totalWidth:0},L({row:z,col:K})}else{const z=k,Z=P,K=D;Y.current={startX:A,startY:O,aboveRow:z,belowRow:z,leftCol:Z,rightCol:K,initialAboveHeight:J(z),initialBelowHeight:0,initialLeftWidth:re(Z),initialRightWidth:re(K),totalHeight:0,totalWidth:re(Z)+re(K)},L({row:z,col:Z})}},le=(w,k,P,D)=>{Y.current={startX:P,startY:D,aboveRow:w,belowRow:w,leftCol:k,rightCol:k,initialAboveHeight:J(w),initialBelowHeight:0,initialLeftWidth:re(k),initialRightWidth:0,totalHeight:0,totalWidth:0},L({row:w,col:k})};U.useEffect(()=>{if(S===null||!Y.current)return;const w=Y.current,k=D=>{const A=D.clientX-w.startX,O=D.clientY-w.startY;if(w.totalHeight>0){const z=w.initialAboveHeight+O;me(w.aboveRow,w.belowRow,z,w.totalHeight)}else _e(w.aboveRow,w.initialAboveHeight+O);if(w.totalWidth>0){const z=w.initialLeftWidth+A;Oe(w.leftCol,w.rightCol,z,w.totalWidth)}else Ae(w.leftCol,w.initialLeftWidth+A)},P=()=>{L(null),Y.current=null};return document.addEventListener("mousemove",k),document.addEventListener("mouseup",P),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",P)}},[S,me,Oe,_e,Ae]);const ie=(w,k,P)=>{const D=J(w),A=J(k),O=D+A;me(w,k,D+P,O)},ue=(w,k)=>{const P=J(w),D=J(k),A=P+D,O=A/2;me(w,k,O,A)},be=(w,k)=>{const P=J(w);_e(w,P+k)},$e=(w,k,P)=>{const D=re(w),A=re(k),O=D+A;Oe(w,k,D+P,O)},et=(w,k)=>{const P=re(w),D=re(k),A=P+D,O=A/2;Oe(w,k,O,A)},bt=(w,k)=>{const P=re(w);Ae(w,P+k)},kt=(w,k)=>{const P=d.find(K=>K.id===w);if(!P)return;let D=P.row,A=P.col;const O=(K,q)=>d.some(ae=>ae.row===K&&ae.col===q);switch(k){case"top":if(D=P.row-1,O(D,P.col)){const K=new Set(d.map(Q=>Q.row)),q=Array.from(K).sort((Q,Be)=>Q-Be);let ae=!1;for(const Q of q)if(Q<P.row&&!O(Q,P.col)){D=Q,ae=!0;break}ae||(u(Q=>Q.map(Be=>Be.row<P.row?{...Be,row:Be.row-1}:Be)),D=P.row-1)}break;case"bottom":if(D=P.row+1,O(D,P.col)){const K=new Set(d.map(Q=>Q.row)),q=Array.from(K).sort((Q,Be)=>Q-Be);let ae=!1;for(const Q of q)if(Q>P.row&&!O(Q,P.col)){D=Q,ae=!0;break}if(!ae){let Q=D;for(;O(Q,P.col);)Q++;D=Q}}break;case"left":if(A=P.col-1,O(P.row,A)){const K=new Set(d.map(Q=>Q.col)),q=Array.from(K).sort((Q,Be)=>Q-Be);let ae=!1;for(const Q of q)if(Q<P.col&&!O(P.row,Q)){A=Q,ae=!0;break}ae||(u(Q=>Q.map(Be=>Be.col<P.col?{...Be,col:Be.col-1}:Be)),A=P.col-1)}break;case"right":if(A=P.col+1,O(P.row,A)){const K=new Set(d.map(Q=>Q.col)),q=Array.from(K).sort((Q,Be)=>Q-Be);let ae=!1;for(const Q of q)if(Q>P.col&&!O(P.row,Q)){A=Q,ae=!0;break}if(!ae){let Q=A;for(;O(P.row,Q);)Q++;A=Q}}break}const z=`chart-${p}`,Z={id:z,selectedPoints:new Map,row:D,col:A};g.has(A)||_(K=>new Map(K).set(A,Sa)),b.has(D)||y(K=>new Map(K).set(D,al)),u(K=>[...K,Z]),f(K=>K+1),x(z),Dn(z)},ot=(w,k)=>{const P=d.filter(A=>A.row===w);if(P.length===0)return;let D;typeof k=="number"&&(D=P.find(A=>A.col===k)),D||(D=P.find(A=>A.id===m)??P[0]),kt(D.id,"bottom")},Tn=(w,k)=>{const P=d.filter(A=>A.col===w);if(P.length===0)return;let D;typeof k=="number"&&(D=P.find(A=>A.row===k)),D||(D=P.find(A=>A.id===m)??P[0]),kt(D.id,"right")},Qr=w=>{u(k=>{const P=k.filter(q=>q.id!==w);if(P.length===0)return x("chart-0"),_(new Map([[0,Sa]])),y(new Map([[0,al]])),[{id:"chart-0",selectedPoints:new Map,row:0,col:0}];w===m&&x(P[0].id);const D=new Set(P.map(q=>q.row)),A=new Set(P.map(q=>q.col)),O=Array.from(D).sort((q,ae)=>q-ae),z=Array.from(A).sort((q,ae)=>q-ae),Z=new Map(O.map((q,ae)=>[q,ae])),K=new Map(z.map((q,ae)=>[q,ae]));return P.map(q=>({...q,row:Z.get(q.row)??q.row,col:K.get(q.col)??q.col}))})},Yr=(w,k,P)=>{u(D=>D.map(A=>A.id===w?{...A,selectedPoints:new Map(A.selectedPoints).set(k,P)}:A)),t(w,k,P)},Xr=(w,k,P)=>{u(D=>D.map(A=>{if(A.id===w){const O=new Map(A.selectedPoints),z=O.get(k);if(z){const Z=new Set(z);return Z.delete(P),Z.size===0?O.delete(k):O.set(k,Z),{...A,selectedPoints:O}}}return A})),l(w,k,P)},If=(w,k,P)=>{X({type:"legend",pointKey:k,sourceChartId:w,inverters:P})},Jr=()=>{X(null),ge(null)},jf=(w,k)=>{V&&(w.preventDefault(),w.stopPropagation(),ge(k))},Uf=(w,k)=>{const P=w.relatedTarget,D=ee.current.get(k);D&&!D.contains(P)&&ge(null)},$f=(w,k)=>{if(w.preventDefault(),w.stopPropagation(),!V)return;const{pointKey:P,sourceChartId:D,inverters:A}=V;if(D===k){Jr();return}u(O=>O.map(z=>{if(z.id===D){const Z=new Map(z.selectedPoints);return Z.delete(P),{...z,selectedPoints:Z}}else if(z.id===k){const Z=new Map(z.selectedPoints);return Z.set(P,new Set(A)),{...z,selectedPoints:Z}}return z})),Jr()},st=Math.min(...d.map(w=>w.row),0),ct=Math.min(...d.map(w=>w.col),0),Zr=d.map(w=>({...w,row:w.row-st,col:w.col-ct})),Yi=U.useMemo(()=>{const w=new Map;return d.forEach(k=>{w.set(`${k.row}:${k.col}`,k)}),w},[d]),Ce=Array.from(new Set(Zr.map(w=>w.row))).sort((w,k)=>w-k),Se=Array.from(new Set(Zr.map(w=>w.col))).sort((w,k)=>w-k),Kc=new Map,Kl=[];Ce.forEach((w,k)=>{Kc.set(w,k);const P=w+st;Kl.push(`${J(P)}px`),k<Ce.length-1&&Kl.push(`${Gs}px`)}),Ce.length>0&&Kl.push(`${Gs}px`);const Wf=Kl.length>0?Kl.join(" "):"1fr",Qc=new Map,Ql=[];Se.forEach((w,k)=>{Qc.set(w,k);const P=w+ct;Ql.push(`${re(P)}px`),k<Se.length-1&&Ql.push(`${Fs}px`)}),Se.length>0&&Ql.push(`${Fs}px`);const Hf=Ql.length>0?Ql.join(" "):"1fr";return o.jsxs("div",{className:"w-full h-full overflow-auto",children:[o.jsxs("div",{className:"grid p-4",style:{gridTemplateRows:Wf,gridTemplateColumns:Hf,rowGap:0,columnGap:0},children:[Zr.map(w=>{const k=se===w.id,P=w.selectedPoints.size===0;return o.jsx("div",{ref:D=>{D?ee.current.set(w.id,D):ee.current.delete(w.id)},className:`relative border rounded-lg bg-white shadow-sm overflow-visible transition-all cursor-pointer ${m===w.id?"border-blue-500 border-2 ring-2 ring-blue-200":"border-gray-300"} ${de===w.id?"animate-chart-expand":""} ${k?"ring-4 ring-green-300 border-green-500":""} ${P&&V?"bg-green-50":""}`,style:{gridRow:(Kc.get(w.row)??0)*2+1,gridColumn:(Qc.get(w.col)??0)*2+1},"data-chart-id":w.id,onClick:D=>{D.target.closest("button")||x(w.id)},onDragOver:D=>jf(D,w.id),onDragLeave:D=>Uf(D,w.id),onDrop:D=>$f(D,w.id),children:o.jsx("div",{className:"chart-content h-full flex flex-col",children:o.jsx(q0,{selectedPoints:w.selectedPoints,protocols:e,onUpdateInverters:(D,A)=>Yr(w.id,D,A),onScrollToPoint:n,onRemoveInverter:(D,A)=>Xr(w.id,D,A),onSelectPointsToggle:i,selectPointsOpen:a,onDeleteChart:()=>Qr(w.id),onShowTutorial:()=>N(!0),crosshairX:E,onCrosshairChange:F,onDragStart:(D,A)=>If(w.id,D,A),onDragEnd:Jr,isDragActive:V!==null,isDropTarget:k})})},w.id)}),Se.slice(0,-1).map((w,k)=>{const P=w+ct,A=Se[k+1]+ct,O=re(P),z=re(A),Z=O+z||1,K=Ce.reduce((q,ae)=>{const Q=ae+st;return Yi.has(`${Q}:${P}`)&&q.push({key:`col-btn-${Q}-${P}`,onAdd:()=>Tn(P,Q),size:J(Q)}),q},[]);return o.jsx("div",{style:{gridRow:"1 / -1",gridColumn:k*2+2,alignSelf:"stretch",justifySelf:"center"},children:o.jsx(Lu,{onAdd:()=>Tn(P),onResizeStart:q=>el(P,A,q),onKeyboardNudge:q=>$e(P,A,q),onAutoFit:()=>et(P,A),percentLeft:O/Z*100,isActive:C===P,buttonSegments:K})},`col-divider-${P}`)}),Se.length>0&&(()=>{const k=Se[Se.length-1]+ct,P=Ce.reduce((D,A)=>{const O=A+st;return Yi.has(`${O}:${k}`)&&D.push({key:`terminal-col-btn-${O}-${k}`,onAdd:()=>Tn(k,O),size:J(O)}),D},[]);return o.jsx("div",{style:{gridRow:"1 / -1",gridColumn:Se.length*2,alignSelf:"stretch",justifySelf:"center"},children:o.jsx(Lu,{onAdd:()=>Tn(k),onEdgeResizeStart:D=>tl(k,D),onEdgeKeyboardNudge:D=>bt(k,D),isActive:C===k,buttonSegments:P})},`col-divider-${k}-terminal`)})(),Ce.slice(0,-1).map((w,k)=>{const P=Ce[k+1],D=w+st,A=P+st,O=J(D),z=J(A),Z=O+z||1,K=Se.reduce((q,ae)=>{const Q=ae+ct;return Yi.has(`${D}:${Q}`)&&q.push({key:`row-btn-${D}-${Q}`,onAdd:()=>ot(D,Q),size:re(Q)}),q},[]);return o.jsx("div",{style:{gridColumn:"1 / -1",gridRow:k*2+2,alignSelf:"center",justifySelf:"stretch"},children:o.jsx(Su,{onAdd:()=>ot(D),onResizeStart:q=>Jn(D,A,q),onKeyboardNudge:q=>ie(D,A,q),onAutoFit:()=>ue(D,A),percentAbove:O/Z*100,isActive:h===D,buttonSegments:K})},`divider-${D}`)}),Ce.length>0&&(()=>{const k=Ce[Ce.length-1]+st,P=Se.reduce((D,A)=>{const O=A+ct;return Yi.has(`${k}:${O}`)&&D.push({key:`terminal-row-btn-${k}-${O}`,onAdd:()=>ot(k,O),size:re(O)}),D},[]);return o.jsx("div",{style:{gridColumn:"1 / -1",gridRow:Ce.length*2,alignSelf:"center",justifySelf:"stretch"},children:o.jsx(Su,{onAdd:()=>ot(k),onEdgeResizeStart:D=>Zn(k,D),onEdgeKeyboardNudge:D=>be(k,D),isActive:h===k,buttonSegments:P})},`divider-${k}-terminal`)})(),Ce.slice(0,-1).flatMap((w,k)=>{const P=w+st,A=Ce[k+1]+st;return Se.slice(0,-1).map((O,z)=>{const Z=O+ct,q=Se[z+1]+ct;return o.jsx("div",{style:{gridRow:k*2+2,gridColumn:z*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(La,{onResizeStart:(ae,Q)=>M(P,A,Z,q,ae,Q),isActive:(S==null?void 0:S.row)===P&&(S==null?void 0:S.col)===Z})},`corner-${P}-${Z}`)})}),Ce.slice(0,-1).map((w,k)=>{const P=w+st,A=Ce[k+1]+st;if(Se.length>0){const z=Se[Se.length-1]+ct;return o.jsx("div",{style:{gridRow:k*2+2,gridColumn:Se.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(La,{onResizeStart:(Z,K)=>ne("row",P,A,z,Z,K),isActive:(S==null?void 0:S.row)===P&&(S==null?void 0:S.col)===z})},`corner-edge-row-${P}-${z}`)}return null}),Se.slice(0,-1).map((w,k)=>{const P=w+ct,A=Se[k+1]+ct;if(Ce.length>0){const z=Ce[Ce.length-1]+st;return o.jsx("div",{style:{gridRow:Ce.length*2,gridColumn:k*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(La,{onResizeStart:(Z,K)=>ne("col",z,P,A,Z,K),isActive:(S==null?void 0:S.row)===z&&(S==null?void 0:S.col)===P})},`corner-edge-col-${z}-${P}`)}return null}),Ce.length>0&&Se.length>0&&(()=>{const k=Ce[Ce.length-1]+st,D=Se[Se.length-1]+ct;return o.jsx("div",{style:{gridRow:Ce.length*2,gridColumn:Se.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:o.jsx(La,{onResizeStart:(A,O)=>le(k,D,A,O),isActive:(S==null?void 0:S.row)===k&&(S==null?void 0:S.col)===D})},`corner-terminal-${k}-${D}`)})()]}),o.jsx(D0,{isOpen:j,onClose:()=>N(!1)})]})}function X0(){const[e,t]=$.useState(""),n=U.useRef(null),[l,i]=U.useState(new Map),[a,r]=U.useState(null),[s,c]=U.useState(new Set(Q0)),d=U.useMemo(()=>{if(!a)return{top:"1rem",left:"1rem",showArrow:!1,arrowOnLeft:!0};const M=800,ne=8,le=window.innerWidth;let ie=a.right+ne,ue=!0;return ie+M>le-20&&(ie=a.left-M-ne,ue=!1,ie<20&&(ie=20,ue=!0)),{top:`${a.top}px`,left:`${ie}px`,showArrow:!0,arrowOnLeft:ue}},[a]),[u,p]=$.useState(!1),[f,m]=$.useState(new Set),[x,g]=$.useState(()=>new Set),[_,b]=$.useState("Standard"),[y,h]=$.useState(["Type of Data","Component","Feature"]),[v,C]=$.useState(!0),T=U.useRef(null),S=U.useRef(null),[L,j]=U.useState(""),[N,W]=U.useState(!0),[H,Y]=U.useState(!1),[de,G]=U.useState(!1),[B,ee]=U.useState("sequential"),E=U.useRef(0),F=U.useRef(0);U.useEffect(()=>{if(!S.current)return;const M=()=>{if(!S.current)return;const ie=S.current,ue=ie.scrollTop;if(Date.now()-F.current<500){E.current=ue;return}ue>E.current&&ue>100?H||Y(!0):ue<50&&H&&Y(!1),E.current=ue;const $e=ie.querySelectorAll('[id^="group-"]');let et="";$e.forEach(bt=>{const kt=bt.getBoundingClientRect(),ot=ie.getBoundingClientRect();kt.top-ot.top<=ot.height*.3&&kt.bottom>ot.top&&(et=bt.id)}),et&&et!==L&&j(et)},ne=setTimeout(M,100),le=S.current;return le.addEventListener("scroll",M),()=>{clearTimeout(ne),le.removeEventListener("scroll",M)}},[L,H]),U.useEffect(()=>{const M=ne=>{ne.key==="Escape"&&(de?G(!1):v&&C(!1))};return document.addEventListener("keydown",M),()=>{document.removeEventListener("keydown",M)}},[v,de]),U.useEffect(()=>{if(!v)return;const M=ne=>{const le=ne.target;le&&(T.current&&T.current.contains(le)||le.closest('[data-role="sidebar-toggle"]')||C(!1))};return document.addEventListener("mousedown",M),document.addEventListener("touchstart",M,{passive:!0}),()=>{document.removeEventListener("mousedown",M),document.removeEventListener("touchstart",M)}},[v]);const V=M=>{v?X(M):(C(!0),setTimeout(()=>{X(M)},300))},X=M=>{if(!S.current)return;const ne=S.current.querySelector(`[data-point-key="${M}"]`);ne&&(ne.scrollIntoView({behavior:"smooth",block:"center"}),ne.classList.add("bg-blue-100"),setTimeout(()=>{ne.classList.remove("bg-blue-100")},1e3))},se=()=>new Set(s),ge=M=>{c(new Set(M))},J=$.useMemo(()=>V0(Nn),[]),re=$.useMemo(()=>[...J.keys()].sort(),[J]),_e=$.useMemo(()=>{let M=Nn;if(M=M.filter(le=>(Array.isArray(le.labels)?le.labels:[]).length>0),e){const le=e.toLowerCase();M=M.filter(ie=>(ie.entry.description||"").toLowerCase().includes(le)||(ie.entry.longdescription||"").toLowerCase().includes(le)||(ie.entry.name||"").toLowerCase().includes(le)?!0:(Array.isArray(ie.labels)?ie.labels:[]).some($e=>{const et=Et($e.label_family,$e.label_text);return et&&et.toLowerCase().includes(le)}))}const ne=(()=>{switch(_){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();if(M=M.filter(le=>{const ue=(Array.isArray(le.labels)?le.labels:[]).filter(be=>be.label_family==="Level of Detail").map(be=>be.label_text);return ue.length===0?!0:ue.some(be=>ne.includes(be))}),x.size>0){const le=new Map;x.forEach(ie=>{const[ue,be]=ie.split(":",2);le.has(ue)||le.set(ue,new Set),le.get(ue).add(be)}),M=M.filter(ie=>{const ue=Array.isArray(ie.labels)?ie.labels:[];if(ue.length===0)return!1;const be=new Map;ue.forEach($e=>{be.has($e.label_family)||be.set($e.label_family,new Set),be.get($e.label_family).add($e.label_text)});for(const[$e,et]of le.entries()){const bt=be.get($e);if(!bt||![...et].some(ot=>bt.has(ot)))return!1}return!0})}return M},[e,x,_]),Ae=$.useMemo(()=>E0(_e,y),[_e,y]);U.useEffect(()=>{j(""),S.current&&setTimeout(()=>{const M=S.current;M&&M.dispatchEvent(new Event("scroll"))},150)},[Ae]);const Dn=M=>{if(console.log("toggle called for key:",M),!n.current){console.warn("ChartGrid callbacks not available yet");return}const ne=n.current.getActiveChartSelectedPoints(),le=ne.has(M);if(console.log("isCurrentlySelected:",le,"activeSelected size:",ne.size),le)console.log("Removing point:",M),n.current.togglePointForActiveChart(M);else{const ie=se();console.log("Adding point:",M,"with inverters:",ie),n.current.updateInvertersForActiveChart(M,ie),ge(ie)}},me=(M,ne)=>{ge(ne),n.current&&n.current.updateInvertersForActiveChart(M,ne)},Oe=(M,ne)=>{g(le=>{const ie=new Set(le),ue=`${M}:${ne}`;return ie.has(ue)?ie.delete(ue):ie.add(ue),ie})},Jn=()=>g(new Set),Zn=M=>{m(ne=>{const le=new Set(ne);return le.has(M)?le.delete(M):le.add(M),le})},el=_e.length,tl=$.useMemo(()=>Nn.filter(M=>(Array.isArray(M.labels)?M.labels:[]).length>0).length,[]);return $.useEffect(()=>{try{console.assert(Nn.length>0,"Expected sample data");const M=Nn.find(ne=>ne.entry.name==="pNom");M&&console.assert(M.entry.unit==="W","pNom should have unit W")}catch(M){console.warn("Self-test failed:",M)}},[]),o.jsxs("div",{className:"h-full bg-slate-100 p-4 md:p-6",children:[o.jsxs("div",{className:"mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative overflow-hidden flex flex-col",children:[o.jsx("div",{className:"flex-1 min-h-0 relative",children:o.jsx(Y0,{protocols:Nn,onUpdateInverters:()=>{},onScrollToPoint:V,onRemoveInverter:()=>{},onSelectPointsToggle:C,selectPointsOpen:v,callbacksRef:n,onActiveChartSelectedPointsChange:i,onActiveChartPositionChange:r})}),o.jsxs("div",{ref:T,className:`fixed bg-white border-2 border-blue-400 shadow-xl transition-all duration-300 z-50 rounded-lg flex flex-row ${v?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-4 pointer-events-none"}`,style:{top:d.top,left:d.left,width:"800px",height:v?"calc(100vh - 8rem)":"0",maxHeight:"calc(100vh - 8rem)",overflow:"hidden"},children:[v&&d.showArrow&&o.jsx("div",{className:`absolute top-4 w-0 h-0 ${d.arrowOnLeft?"left-0":"right-0"}`,style:{borderTop:"8px solid transparent",borderBottom:"8px solid transparent",...d.arrowOnLeft?{borderRight:"8px solid rgb(96, 165, 250)",transform:"translateX(-8px)"}:{borderLeft:"8px solid rgb(96, 165, 250)",transform:"translateX(8px)"}}}),o.jsxs("div",{className:"h-full flex flex-row w-full min-h-0",children:[o.jsx("div",{className:"w-40 border-r border-gray-200 flex-shrink-0 overflow-y-auto",children:o.jsxs("nav",{className:"p-3 text-sm text-gray-800",children:[o.jsx("div",{className:"text-emerald-600 font-semibold mb-2 text-xs",children:"Navigation"}),o.jsx("div",{className:"flex flex-col gap-0.5",children:Ae.size>0&&[...Ae.entries()].filter(([M])=>M!=="(Unlabeled)").map(([M,ne])=>{const le=`group-${M.replace(/\s+/g,"-")}-0`,ie=L===le,ue=[];return ne instanceof Map&&ue.push(...[...ne.entries()].filter(([be])=>be!=="(Unlabeled)")),o.jsxs("div",{children:[o.jsxs("div",{className:"relative",children:[ie&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),o.jsx("button",{className:`px-2 py-1 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors font-medium ${ie?"text-blue-600 bg-blue-50":"text-gray-800"}`,onClick:()=>{const be=document.getElementById(le);if(be&&S.current){const $e=S.current.getBoundingClientRect(),et=be.getBoundingClientRect(),bt=S.current.scrollTop,kt=et.top-$e.top+bt;S.current.scrollTo({top:kt-10,behavior:"smooth"})}},children:M})]}),ue.length>0&&o.jsx("div",{className:"ml-2 mt-0.5 space-y-0.5",children:ue.map(([be])=>{const bt=`group-${`${M.replace(/\s+/g,"-")}-${be.replace(/\s+/g,"-")}`}-1`,kt=L===bt;return o.jsxs("div",{className:"relative",children:[kt&&o.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-0.5 bg-blue-400 rounded-r"}),o.jsx("button",{className:`px-2 py-0.5 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors ${kt?"text-blue-600 bg-blue-50":"text-gray-600"}`,onClick:()=>{const ot=document.getElementById(bt);if(ot&&S.current){const Tn=S.current.getBoundingClientRect(),Qr=ot.getBoundingClientRect(),Yr=S.current.scrollTop,Xr=Qr.top-Tn.top+Yr;S.current.scrollTo({top:Xr-10,behavior:"smooth"})}},children:be})]},be)})})]},M)})})]})}),o.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[o.jsx("div",{className:"border-b border-gray-200",children:o.jsxs("button",{onClick:()=>{F.current=Date.now(),Y(!H)},className:"w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-colors",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:`h-4 w-4 text-gray-500 transition-transform ${H?"":"rotate-90"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),o.jsx("div",{className:"text-lg font-semibold",children:"Add Points"})]}),o.jsxs("div",{className:"text-sm text-gray-600 flex items-center gap-2",children:[o.jsxs("span",{children:["Available: ",el.toLocaleString()," of ",tl.toLocaleString()]}),o.jsxs("button",{onClick:M=>{M.stopPropagation(),G(!0)},className:"px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",title:"Configure preferences",children:[o.jsxs("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Preferences"]})]})]})}),o.jsx("div",{className:`transition-all duration-300 overflow-hidden ${H?"max-h-0":"max-h-[1000px]"}`,children:o.jsxs("div",{className:"p-4",children:[o.jsx(O0,{allLabels:J,selectedLabels:x,onToggleLabel:Oe,onClearFilters:Jn,protocols:Nn,detailLevel:_,filterStructure:B}),o.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[o.jsx("div",{className:"flex-1",children:o.jsx(R0,{value:e,onChange:t})}),o.jsx(M0,{show:u,onToggle:p})]}),o.jsxs("div",{className:"mt-2 flex items-center gap-4",children:[o.jsxs("button",{onClick:()=>{W(!0),S.current&&S.current.querySelectorAll("details").forEach(ne=>{ne.open=!0})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[o.jsx("span",{children:"⤵"}),o.jsx("span",{children:"Expand all"})]}),o.jsxs("button",{onClick:()=>{W(!1),S.current&&S.current.querySelectorAll("details").forEach(ne=>{ne.open=!1})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[o.jsx("span",{children:"⤴"}),o.jsx("span",{children:"Collapse all"})]}),o.jsx(_u,{value:_,onChange:b})]})]})}),o.jsx("div",{className:"flex-1 overflow-y-auto px-4 pb-4 pr-1",ref:S,"data-scroll-container":!0,children:Ae.size===0?o.jsxs("div",{className:"py-4 text-center text-sm text-gray-500",children:["No points match the current filters.",o.jsx("br",{}),o.jsx("b",{children:"Increase the Detail Level"})," or ",o.jsx("b",{children:"remove filters"})," to see more data points."]}):[...Ae.entries()].filter(([M])=>M!=="(Unlabeled)").map(([M,ne])=>o.jsx(Ff,{levelName:M,levelData:ne,selected:l,toggle:Dn,showHelp:u,onUpdateInverters:me,groupsExpanded:N,pointHelpEnabled:f,onTogglePointHelp:Zn,depth:0,query:e,hierarchy:y},M))}),o.jsxs("div",{className:"border-t border-gray-200 bg-white/80 px-4 py-3",children:[o.jsx("p",{className:"text-xs text-gray-600 mb-2",children:_!=="Complete"?"Didn't find what you were looking for? Increase the Detail Level, remove filters, or clearing your search terms to see more data points.":"Didn't find what you were looking for? Try removing filters or clearing your search terms to see more data points."}),o.jsx(_u,{value:_,onChange:b})]})]})]})]})]}),de&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",onClick:()=>G(!1),children:o.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden",onClick:M=>M.stopPropagation(),children:[o.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[o.jsxs("h2",{className:"text-lg font-semibold text-gray-800 flex items-center gap-2",children:[o.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Preferences"]}),o.jsx("button",{onClick:()=>G(!1),className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Close",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o.jsxs("div",{className:"p-4 overflow-y-auto max-h-[calc(80vh-140px)] space-y-6",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-800",children:"Filter Structure"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",children:[o.jsx("input",{type:"radio",name:"filterStructure",value:"sequential",checked:B==="sequential",onChange:M=>ee(M.target.value),className:"mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-medium text-gray-900",children:"Sequential"}),o.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Filters unlock in order. Start by selecting equipment, then component options unlock, followed by type of data, and finally unit filters. Each level requires at least one selection before the next unlocks. This guided approach helps narrow down options step-by-step."})]})]}),o.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",children:[o.jsx("input",{type:"radio",name:"filterStructure",value:"freeform",checked:B==="freeform",onChange:M=>ee(M.target.value),className:"mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"font-medium text-gray-900",children:"Freeform"}),o.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Select filters in any order you prefer. All filter categories are available simultaneously, allowing flexible combinations. Filters within a category use OR logic (any match), while filters across categories use AND logic (all must match)."})]})]})]})]}),o.jsxs("div",{className:"space-y-3 pt-6 border-t border-gray-200",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-800",children:"Sort Order"}),o.jsx(K0,{availableFamilies:re,hierarchy:y,onChange:h,scrollContainerRef:S})]})]}),o.jsx("div",{className:"flex items-center justify-end gap-2 p-4 border-t border-gray-200",children:o.jsx("button",{onClick:()=>G(!1),className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",children:"Done"})})]})})]})}const ku="matter-app-active-view";function J0(){const[e,t]=$.useState(()=>{const n=localStorage.getItem(ku);return n==="site-config"||n==="historical-data"?n:"site-config"});return $.useEffect(()=>{localStorage.setItem(ku,e)},[e]),o.jsxs("div",{className:"flex h-screen bg-slate-100",children:[o.jsxs("aside",{className:"w-64 bg-white border-r border-slate-300 flex flex-col shadow-sm",children:[o.jsx("div",{className:"p-4 border-b border-slate-300",children:o.jsx("h1",{className:"text-lg font-semibold text-slate-800",children:"Matter App"})}),o.jsxs("nav",{className:"flex-1 p-3",children:[o.jsx("button",{onClick:()=>t("site-config"),className:`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${e==="site-config"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xl",children:"⚙️"}),o.jsx("span",{children:"Site Config"})]})}),o.jsx("button",{onClick:()=>t("historical-data"),className:`w-full text-left px-4 py-3 rounded-lg transition-colors ${e==="historical-data"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xl",children:"📊"}),o.jsx("span",{children:"Historical Data"})]})})]}),o.jsx("div",{className:"p-4 border-t border-slate-300 text-xs text-slate-500",children:o.jsxs("div",{children:["Active: ",e==="site-config"?"Site Config":"Historical Data"]})})]}),o.jsxs("main",{className:"flex-1 overflow-auto",children:[e==="site-config"&&o.jsx(oh,{}),e==="historical-data"&&o.jsx(X0,{})]})]})}Mo.createRoot(document.getElementById("root")).render(o.jsx(U.StrictMode,{children:o.jsx(J0,{})}));

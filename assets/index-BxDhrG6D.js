(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Vf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hu={exports:{}},fr={},_u={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi=Symbol.for("react.element"),Rf=Symbol.for("react.portal"),Gf=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),Of=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),jf=Symbol.for("react.suspense"),Uf=Symbol.for("react.memo"),Wf=Symbol.for("react.lazy"),jd=Symbol.iterator;function $f(e){return e===null||typeof e!="object"?null:(e=jd&&e[jd]||e["@@iterator"],typeof e=="function"?e:null)}var xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vu=Object.assign,wu={};function Nl(e,t,n){this.props=e,this.context=t,this.refs=wu,this.updater=n||xu}Nl.prototype.isReactComponent={};Nl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cu(){}Cu.prototype=Nl.prototype;function Ts(e,t,n){this.props=e,this.context=t,this.refs=wu,this.updater=n||xu}var Ns=Ts.prototype=new Cu;Ns.constructor=Ts;vu(Ns,Nl.prototype);Ns.isPureReactComponent=!0;var Ud=Array.isArray,Su=Object.prototype.hasOwnProperty,As={current:null},Lu={key:!0,ref:!0,__self:!0,__source:!0};function ku(e,t,n){var l,i={},a=null,r=null;if(t!=null)for(l in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(a=""+t.key),t)Su.call(t,l)&&!Lu.hasOwnProperty(l)&&(i[l]=t[l]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),d=0;d<o;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(l in o=e.defaultProps,o)i[l]===void 0&&(i[l]=o[l]);return{$$typeof:Oi,type:e,key:a,ref:r,props:i,_owner:As.current}}function Hf(e,t){return{$$typeof:Oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Es(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oi}function qf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wd=/\/+/g;function Hr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qf(""+e.key):t.toString(36)}function va(e,t,n,l,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Oi:case Rf:r=!0}}if(r)return r=e,i=i(r),e=l===""?"."+Hr(r,0):l,Ud(i)?(n="",e!=null&&(n=e.replace(Wd,"$&/")+"/"),va(i,t,n,"",function(d){return d})):i!=null&&(Es(i)&&(i=Hf(i,n+(!i.key||r&&r.key===i.key?"":(""+i.key).replace(Wd,"$&/")+"/")+e)),t.push(i)),1;if(r=0,l=l===""?".":l+":",Ud(e))for(var o=0;o<e.length;o++){a=e[o];var s=l+Hr(a,o);r+=va(a,t,n,s,i)}else if(s=$f(e),typeof s=="function")for(e=s.call(e),o=0;!(a=e.next()).done;)a=a.value,s=l+Hr(a,o++),r+=va(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function qi(e,t,n){if(e==null)return e;var l=[],i=0;return va(e,l,"","",function(a){return t.call(n,a,i++)}),l}function zf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},wa={transition:null},Kf={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:wa,ReactCurrentOwner:As};function Pu(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:qi,forEach:function(e,t,n){qi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qi(e,function(){t++}),t},toArray:function(e){return qi(e,function(t){return t})||[]},only:function(e){if(!Es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Nl;ie.Fragment=Gf;ie.Profiler=Ff;ie.PureComponent=Ts;ie.StrictMode=Mf;ie.Suspense=jf;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kf;ie.act=Pu;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=vu({},e.props),i=e.key,a=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,r=As.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in t)Su.call(t,s)&&!Lu.hasOwnProperty(s)&&(l[s]=t[s]===void 0&&o!==void 0?o[s]:t[s])}var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){o=Array(s);for(var d=0;d<s;d++)o[d]=arguments[d+2];l.children=o}return{$$typeof:Oi,type:e.type,key:i,ref:a,props:l,_owner:r}};ie.createContext=function(e){return e={$$typeof:Bf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Of,_context:e},e.Consumer=e};ie.createElement=ku;ie.createFactory=function(e){var t=ku.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:If,render:e}};ie.isValidElement=Es;ie.lazy=function(e){return{$$typeof:Wf,_payload:{_status:-1,_result:e},_init:zf}};ie.memo=function(e,t){return{$$typeof:Uf,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=wa.transition;wa.transition={};try{e()}finally{wa.transition=t}};ie.unstable_act=Pu;ie.useCallback=function(e,t){return Qe.current.useCallback(e,t)};ie.useContext=function(e){return Qe.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};ie.useEffect=function(e,t){return Qe.current.useEffect(e,t)};ie.useId=function(){return Qe.current.useId()};ie.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return Qe.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};ie.useRef=function(e){return Qe.current.useRef(e)};ie.useState=function(e){return Qe.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return Qe.current.useTransition()};ie.version="18.3.1";_u.exports=ie;var W=_u.exports;const j=Vf(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=W,Yf=Symbol.for("react.element"),Xf=Symbol.for("react.fragment"),Jf=Object.prototype.hasOwnProperty,Zf=Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ey={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var l,i={},a=null,r=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(r=t.ref);for(l in t)Jf.call(t,l)&&!ey.hasOwnProperty(l)&&(i[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)i[l]===void 0&&(i[l]=t[l]);return{$$typeof:Yf,type:e,key:a,ref:r,props:i,_owner:Zf.current}}fr.Fragment=Xf;fr.jsx=Du;fr.jsxs=Du;hu.exports=fr;var c=hu.exports,ko={},Tu={exports:{}},ut={},Nu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,$){var Q=V.length;V.push($);e:for(;0<Q;){var J=Q-1>>>1,se=V[J];if(0<i(se,$))V[J]=$,V[Q]=se,Q=J;else break e}}function n(V){return V.length===0?null:V[0]}function l(V){if(V.length===0)return null;var $=V[0],Q=V.pop();if(Q!==$){V[0]=Q;e:for(var J=0,se=V.length,wt=se>>>1;J<wt;){var Oe=2*(J+1)-1,Xe=V[Oe],Je=Oe+1,Ct=V[Je];if(0>i(Xe,Q))Je<se&&0>i(Ct,Xe)?(V[J]=Ct,V[Je]=Q,J=Je):(V[J]=Xe,V[Oe]=Q,J=Oe);else if(Je<se&&0>i(Ct,Q))V[J]=Ct,V[Je]=Q,J=Je;else break e}}return $}function i(V,$){var Q=V.sortIndex-$.sortIndex;return Q!==0?Q:V.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var s=[],d=[],u=1,p=null,f=3,m=!1,x=!1,g=!1,_=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(V){for(var $=n(d);$!==null;){if($.callback===null)l(d);else if($.startTime<=V)l(d),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(d)}}function w(V){if(g=!1,h(V),!x)if(n(s)!==null)x=!0,F(k);else{var $=n(d);$!==null&&X(w,$.startTime-V)}}function k(V,$){x=!1,g&&(g=!1,b(v),v=-1),m=!0;var Q=f;try{for(h($),p=n(s);p!==null&&(!(p.expirationTime>$)||V&&!U());){var J=p.callback;if(typeof J=="function"){p.callback=null,f=p.priorityLevel;var se=J(p.expirationTime<=$);$=e.unstable_now(),typeof se=="function"?p.callback=se:p===n(s)&&l(s),h($)}else l(s);p=n(s)}if(p!==null)var wt=!0;else{var Oe=n(d);Oe!==null&&X(w,Oe.startTime-$),wt=!1}return wt}finally{p=null,f=Q,m=!1}}var L=!1,S=null,v=-1,A=5,R=-1;function U(){return!(e.unstable_now()-R<A)}function B(){if(S!==null){var V=e.unstable_now();R=V;var $=!0;try{$=S(!0,V)}finally{$?H():(L=!1,S=null)}}else L=!1}var H;if(typeof y=="function")H=function(){y(B)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,de=ae.port2;ae.port1.onmessage=B,H=function(){de.postMessage(null)}}else H=function(){_(B,0)};function F(V){S=V,L||(L=!0,H())}function X(V,$){v=_(function(){V(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,F(k))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(V){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var Q=f;f=$;try{return V()}finally{f=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,$){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Q=f;f=V;try{return $()}finally{f=Q}},e.unstable_scheduleCallback=function(V,$,Q){var J=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?J+Q:J):Q=J,V){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Q+se,V={id:u++,callback:$,priorityLevel:V,startTime:Q,expirationTime:se,sortIndex:-1},Q>J?(V.sortIndex=Q,t(d,V),n(s)===null&&V===n(d)&&(g?(b(v),v=-1):g=!0,X(w,Q-J))):(V.sortIndex=se,t(s,V),x||m||(x=!0,F(k))),V},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(V){var $=f;return function(){var Q=f;f=$;try{return V.apply(this,arguments)}finally{f=Q}}}})(Au);Nu.exports=Au;var ty=Nu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=W,ct=ty;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eu=new Set,hi={};function jn(e,t){vl(e,t),vl(e+"Capture",t)}function vl(e,t){for(hi[e]=t,e=0;e<t.length;e++)Eu.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=Object.prototype.hasOwnProperty,ly=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$d={},Hd={};function iy(e){return Po.call(Hd,e)?!0:Po.call($d,e)?!1:ly.test(e)?Hd[e]=!0:($d[e]=!0,!1)}function ay(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ry(e,t,n,l){if(t===null||typeof t>"u"||ay(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,l,i,a,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=r}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vs=/[\-:]([a-z])/g;function Rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vs,Rs);Fe[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vs,Rs);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vs,Rs);Fe[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gs(e,t,n,l){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ry(t,n,i,l)&&(n=null),l||i===null?iy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,l=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var Jt=ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),Do=Symbol.for("react.profiler"),Vu=Symbol.for("react.provider"),Ru=Symbol.for("react.context"),Fs=Symbol.for("react.forward_ref"),To=Symbol.for("react.suspense"),No=Symbol.for("react.suspense_list"),Os=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Gu=Symbol.for("react.offscreen"),qd=Symbol.iterator;function $l(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,qr;function ti(e){if(qr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qr=t&&t[1]||""}return`
`+qr+e}var zr=!1;function Kr(e,t){if(!e||zr)return"";zr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var l=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){l=d}e.call(t.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=l.stack.split(`
`),r=i.length-1,o=a.length-1;1<=r&&0<=o&&i[r]!==a[o];)o--;for(;1<=r&&0<=o;r--,o--)if(i[r]!==a[o]){if(r!==1||o!==1)do if(r--,o--,0>o||i[r]!==a[o]){var s=`
`+i[r].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=r&&0<=o);break}}}finally{zr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function oy(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=Kr(e.type,!1),e;case 11:return e=Kr(e.type.render,!1),e;case 1:return e=Kr(e.type,!0),e;default:return""}}function Ao(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Xn:return"Portal";case Do:return"Profiler";case Ms:return"StrictMode";case To:return"Suspense";case No:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ru:return(e.displayName||"Context")+".Consumer";case Vu:return(e._context.displayName||"Context")+".Provider";case Fs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Os:return t=e.displayName||null,t!==null?t:Ao(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return Ao(e(t))}catch{}}return null}function sy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ao(t);case 8:return t===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dy(e){var t=Mu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){l=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ki(e){e._valueTracker||(e._valueTracker=dy(e))}function Fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Mu(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eo(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zd(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ou(e,t){t=t.checked,t!=null&&Gs(e,"checked",t,!1)}function Vo(e,t){Ou(e,t);var n=bn(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ro(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ro(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ro(e,t,n){(t!=="number"||Oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function ml(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(ni(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function Bu(e,t){var n=bn(t.value),l=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function Yd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _i(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cy=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){cy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function Uu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function Wu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,i=Uu(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,i):e[n]=i}}var uy=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(uy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bo=null;function Bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Io=null,fl=null,yl=null;function Xd(e){if(e=ji(e)){if(typeof Io!="function")throw Error(E(280));var t=e.stateNode;t&&(t=_r(t),Io(e.stateNode,e.type,t))}}function $u(e){fl?yl?yl.push(e):yl=[e]:fl=e}function Hu(){if(fl){var e=fl,t=yl;if(yl=fl=null,Xd(e),t)for(e=0;e<t.length;e++)Xd(t[e])}}function qu(e,t){return e(t)}function zu(){}var Qr=!1;function Ku(e,t,n){if(Qr)return e(t,n);Qr=!0;try{return qu(e,t,n)}finally{Qr=!1,(fl!==null||yl!==null)&&(zu(),Hu())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var l=_r(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var jo=!1;if(zt)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){jo=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{jo=!1}function py(e,t,n,l,i,a,r,o,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var si=!1,Ba=null,Ia=!1,Uo=null,my={onError:function(e){si=!0,Ba=e}};function fy(e,t,n,l,i,a,r,o,s){si=!1,Ba=null,py.apply(my,arguments)}function yy(e,t,n,l,i,a,r,o,s){if(fy.apply(this,arguments),si){if(si){var d=Ba;si=!1,Ba=null}else throw Error(E(198));Ia||(Ia=!0,Uo=d)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jd(e){if(Un(e)!==e)throw Error(E(188))}function gy(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Jd(i),e;if(a===l)return Jd(i),t;a=a.sibling}throw Error(E(188))}if(n.return!==l.return)n=i,l=a;else{for(var r=!1,o=i.child;o;){if(o===n){r=!0,n=i,l=a;break}if(o===l){r=!0,l=i,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,l=i;break}if(o===l){r=!0,l=a,n=i;break}o=o.sibling}if(!r)throw Error(E(189))}}if(n.alternate!==l)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Yu(e){return e=gy(e),e!==null?Xu(e):null}function Xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xu(e);if(t!==null)return t;e=e.sibling}return null}var Ju=ct.unstable_scheduleCallback,Zd=ct.unstable_cancelCallback,by=ct.unstable_shouldYield,hy=ct.unstable_requestPaint,De=ct.unstable_now,_y=ct.unstable_getCurrentPriorityLevel,Is=ct.unstable_ImmediatePriority,Zu=ct.unstable_UserBlockingPriority,ja=ct.unstable_NormalPriority,xy=ct.unstable_LowPriority,ep=ct.unstable_IdlePriority,yr=null,Mt=null;function vy(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(yr,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Sy,wy=Math.log,Cy=Math.LN2;function Sy(e){return e>>>=0,e===0?32:31-(wy(e)/Cy|0)|0}var Yi=64,Xi=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ua(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,a=e.pingedLanes,r=n&268435455;if(r!==0){var o=r&~i;o!==0?l=li(o):(a&=r,a!==0&&(l=li(a)))}else r=n&~i,r!==0?l=li(r):a!==0&&(l=li(a));if(l===0)return 0;if(t!==0&&t!==l&&!(t&i)&&(i=l&-l,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(l&4&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-Tt(t),i=1<<n,l|=e[n],t&=~i;return l}function Ly(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ky(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var r=31-Tt(a),o=1<<r,s=i[r];s===-1?(!(o&n)||o&l)&&(i[r]=Ly(o,t)):s<=t&&(e.expiredLanes|=o),a&=~o}}function Wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tp(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function Yr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Py(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),a=1<<i;t[i]=0,l[i]=-1,e[i]=-1,n&=~a}}function js(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Tt(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}var ce=0;function np(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lp,Us,ip,ap,rp,$o=!1,Ji=[],sn=null,dn=null,cn=null,vi=new Map,wi=new Map,ln=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ec(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function ql(e,t,n,l,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ji(t),t!==null&&Us(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ty(e,t,n,l,i){switch(t){case"focusin":return sn=ql(sn,e,t,n,l,i),!0;case"dragenter":return dn=ql(dn,e,t,n,l,i),!0;case"mouseover":return cn=ql(cn,e,t,n,l,i),!0;case"pointerover":var a=i.pointerId;return vi.set(a,ql(vi.get(a)||null,e,t,n,l,i)),!0;case"gotpointercapture":return a=i.pointerId,wi.set(a,ql(wi.get(a)||null,e,t,n,l,i)),!0}return!1}function op(e){var t=Pn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=Qu(n),t!==null){e.blockedOn=t,rp(e.priority,function(){ip(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ca(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ho(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Bo=l,n.target.dispatchEvent(l),Bo=null}else return t=ji(n),t!==null&&Us(t),e.blockedOn=n,!1;t.shift()}return!0}function tc(e,t,n){Ca(e)&&n.delete(t)}function Ny(){$o=!1,sn!==null&&Ca(sn)&&(sn=null),dn!==null&&Ca(dn)&&(dn=null),cn!==null&&Ca(cn)&&(cn=null),vi.forEach(tc),wi.forEach(tc)}function zl(e,t){e.blockedOn===t&&(e.blockedOn=null,$o||($o=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,Ny)))}function Ci(e){function t(i){return zl(i,e)}if(0<Ji.length){zl(Ji[0],e);for(var n=1;n<Ji.length;n++){var l=Ji[n];l.blockedOn===e&&(l.blockedOn=null)}}for(sn!==null&&zl(sn,e),dn!==null&&zl(dn,e),cn!==null&&zl(cn,e),vi.forEach(t),wi.forEach(t),n=0;n<ln.length;n++)l=ln[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)op(n),n.blockedOn===null&&ln.shift()}var gl=Jt.ReactCurrentBatchConfig,Wa=!0;function Ay(e,t,n,l){var i=ce,a=gl.transition;gl.transition=null;try{ce=1,Ws(e,t,n,l)}finally{ce=i,gl.transition=a}}function Ey(e,t,n,l){var i=ce,a=gl.transition;gl.transition=null;try{ce=4,Ws(e,t,n,l)}finally{ce=i,gl.transition=a}}function Ws(e,t,n,l){if(Wa){var i=Ho(e,t,n,l);if(i===null)ro(e,t,l,$a,n),ec(e,l);else if(Ty(i,e,t,n,l))l.stopPropagation();else if(ec(e,l),t&4&&-1<Dy.indexOf(e)){for(;i!==null;){var a=ji(i);if(a!==null&&lp(a),a=Ho(e,t,n,l),a===null&&ro(e,t,l,$a,n),a===i)break;i=a}i!==null&&l.stopPropagation()}else ro(e,t,l,null,n)}}var $a=null;function Ho(e,t,n,l){if($a=null,e=Bs(l),e=Pn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $a=e,null}function sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_y()){case Is:return 1;case Zu:return 4;case ja:case xy:return 16;case ep:return 536870912;default:return 16}default:return 16}}var rn=null,$s=null,Sa=null;function dp(){if(Sa)return Sa;var e,t=$s,n=t.length,l,i="value"in rn?rn.value:rn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===i[a-l];l++);return Sa=i.slice(e,1<l?1-l:void 0)}function La(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function nc(){return!1}function pt(e){function t(n,l,i,a,r){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zi:nc,this.isPropagationStopped=nc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var Al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=pt(Al),Ii=Se({},Al,{view:0,detail:0}),Vy=pt(Ii),Xr,Jr,Kl,gr=Se({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kl&&(Kl&&e.type==="mousemove"?(Xr=e.screenX-Kl.screenX,Jr=e.screenY-Kl.screenY):Jr=Xr=0,Kl=e),Xr)},movementY:function(e){return"movementY"in e?e.movementY:Jr}}),lc=pt(gr),Ry=Se({},gr,{dataTransfer:0}),Gy=pt(Ry),My=Se({},Ii,{relatedTarget:0}),Zr=pt(My),Fy=Se({},Al,{animationName:0,elapsedTime:0,pseudoElement:0}),Oy=pt(Fy),By=Se({},Al,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iy=pt(By),jy=Se({},Al,{data:0}),ic=pt(jy),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$y[e])?!!t[e]:!1}function qs(){return Hy}var qy=Se({},Ii,{key:function(e){if(e.key){var t=Uy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=La(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qs,charCode:function(e){return e.type==="keypress"?La(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?La(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zy=pt(qy),Ky=Se({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=pt(Ky),Qy=Se({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qs}),Yy=pt(Qy),Xy=Se({},Al,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jy=pt(Xy),Zy=Se({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eg=pt(Zy),tg=[9,13,27,32],zs=zt&&"CompositionEvent"in window,di=null;zt&&"documentMode"in document&&(di=document.documentMode);var ng=zt&&"TextEvent"in window&&!di,cp=zt&&(!zs||di&&8<di&&11>=di),rc=" ",oc=!1;function up(e,t){switch(e){case"keyup":return tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function lg(e,t){switch(e){case"compositionend":return pp(t);case"keypress":return t.which!==32?null:(oc=!0,rc);case"textInput":return e=t.data,e===rc&&oc?null:e;default:return null}}function ig(e,t){if(Zn)return e==="compositionend"||!zs&&up(e,t)?(e=dp(),Sa=$s=rn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cp&&t.locale!=="ko"?null:t.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ag[e.type]:t==="textarea"}function mp(e,t,n,l){$u(l),t=Ha(t,"onChange"),0<t.length&&(n=new Hs("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ci=null,Si=null;function rg(e){Sp(e,0)}function br(e){var t=nl(e);if(Fu(t))return e}function og(e,t){if(e==="change")return t}var fp=!1;if(zt){var eo;if(zt){var to="oninput"in document;if(!to){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),to=typeof dc.oninput=="function"}eo=to}else eo=!1;fp=eo&&(!document.documentMode||9<document.documentMode)}function cc(){ci&&(ci.detachEvent("onpropertychange",yp),Si=ci=null)}function yp(e){if(e.propertyName==="value"&&br(Si)){var t=[];mp(t,Si,e,Bs(e)),Ku(rg,t)}}function sg(e,t,n){e==="focusin"?(cc(),ci=t,Si=n,ci.attachEvent("onpropertychange",yp)):e==="focusout"&&cc()}function dg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return br(Si)}function cg(e,t){if(e==="click")return br(t)}function ug(e,t){if(e==="input"||e==="change")return br(t)}function pg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:pg;function Li(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!Po.call(t,i)||!At(e[i],t[i]))return!1}return!0}function uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var n=uc(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uc(n)}}function gp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bp(){for(var e=window,t=Oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oa(e.document)}return t}function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mg(e){var t=bp(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gp(n.ownerDocument.documentElement,n)){if(l!==null&&Ks(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(l.start,i);l=l.end===void 0?a:Math.min(l.end,i),!e.extend&&a>l&&(i=l,l=a,a=i),i=pc(n,a);var r=pc(n,l);i&&r&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>l?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fg=zt&&"documentMode"in document&&11>=document.documentMode,el=null,qo=null,ui=null,zo=!1;function mc(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zo||el==null||el!==Oa(l)||(l=el,"selectionStart"in l&&Ks(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ui&&Li(ui,l)||(ui=l,l=Ha(qo,"onSelect"),0<l.length&&(t=new Hs("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=el)))}function ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tl={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},no={},hp={};zt&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function hr(e){if(no[e])return no[e];if(!tl[e])return e;var t=tl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hp)return no[e]=t[n];return e}var _p=hr("animationend"),xp=hr("animationiteration"),vp=hr("animationstart"),wp=hr("transitionend"),Cp=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){Cp.set(e,t),jn(t,[e])}for(var lo=0;lo<fc.length;lo++){var io=fc[lo],yg=io.toLowerCase(),gg=io[0].toUpperCase()+io.slice(1);xn(yg,"on"+gg)}xn(_p,"onAnimationEnd");xn(xp,"onAnimationIteration");xn(vp,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(wp,"onTransitionEnd");vl("onMouseEnter",["mouseout","mouseover"]);vl("onMouseLeave",["mouseout","mouseover"]);vl("onPointerEnter",["pointerout","pointerover"]);vl("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function yc(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,yy(l,t,void 0,e),e.currentTarget=null}function Sp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var a=void 0;if(t)for(var r=l.length-1;0<=r;r--){var o=l[r],s=o.instance,d=o.currentTarget;if(o=o.listener,s!==a&&i.isPropagationStopped())break e;yc(i,o,d),a=s}else for(r=0;r<l.length;r++){if(o=l[r],s=o.instance,d=o.currentTarget,o=o.listener,s!==a&&i.isPropagationStopped())break e;yc(i,o,d),a=s}}}if(Ia)throw e=Uo,Ia=!1,Uo=null,e}function ge(e,t){var n=t[Jo];n===void 0&&(n=t[Jo]=new Set);var l=e+"__bubble";n.has(l)||(Lp(t,e,2,!1),n.add(l))}function ao(e,t,n){var l=0;t&&(l|=4),Lp(n,e,l,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[ta]){e[ta]=!0,Eu.forEach(function(n){n!=="selectionchange"&&(bg.has(n)||ao(n,!1,e),ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,ao("selectionchange",!1,t))}}function Lp(e,t,n,l){switch(sp(t)){case 1:var i=Ay;break;case 4:i=Ey;break;default:i=Ws}n=i.bind(null,t,n,e),i=void 0,!jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ro(e,t,n,l,i){var a=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var o=l.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(r===4)for(r=l.return;r!==null;){var s=r.tag;if((s===3||s===4)&&(s=r.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;r=r.return}for(;o!==null;){if(r=Pn(o),r===null)return;if(s=r.tag,s===5||s===6){l=a=r;continue e}o=o.parentNode}}l=l.return}Ku(function(){var d=a,u=Bs(n),p=[];e:{var f=Cp.get(e);if(f!==void 0){var m=Hs,x=e;switch(e){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":m=zy;break;case"focusin":x="focus",m=Zr;break;case"focusout":x="blur",m=Zr;break;case"beforeblur":case"afterblur":m=Zr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Yy;break;case _p:case xp:case vp:m=Oy;break;case wp:m=Jy;break;case"scroll":m=Vy;break;case"wheel":m=eg;break;case"copy":case"cut":case"paste":m=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ac}var g=(t&4)!==0,_=!g&&e==="scroll",b=g?f!==null?f+"Capture":null:f;g=[];for(var y=d,h;y!==null;){h=y;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,b!==null&&(w=xi(y,b),w!=null&&g.push(Pi(y,w,h)))),_)break;y=y.return}0<g.length&&(f=new m(f,x,null,n,u),p.push({event:f,listeners:g}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Bo&&(x=n.relatedTarget||n.fromElement)&&(Pn(x)||x[Kt]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=d,x=x?Pn(x):null,x!==null&&(_=Un(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=d),m!==x)){if(g=lc,w="onMouseLeave",b="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(g=ac,w="onPointerLeave",b="onPointerEnter",y="pointer"),_=m==null?f:nl(m),h=x==null?f:nl(x),f=new g(w,y+"leave",m,n,u),f.target=_,f.relatedTarget=h,w=null,Pn(u)===d&&(g=new g(b,y+"enter",x,n,u),g.target=h,g.relatedTarget=_,w=g),_=w,m&&x)t:{for(g=m,b=x,y=0,h=g;h;h=zn(h))y++;for(h=0,w=b;w;w=zn(w))h++;for(;0<y-h;)g=zn(g),y--;for(;0<h-y;)b=zn(b),h--;for(;y--;){if(g===b||b!==null&&g===b.alternate)break t;g=zn(g),b=zn(b)}g=null}else g=null;m!==null&&gc(p,f,m,g,!1),x!==null&&_!==null&&gc(p,_,x,g,!0)}}e:{if(f=d?nl(d):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var k=og;else if(sc(f))if(fp)k=ug;else{k=dg;var L=sg}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=cg);if(k&&(k=k(e,d))){mp(p,k,n,u);break e}L&&L(e,f,d),e==="focusout"&&(L=f._wrapperState)&&L.controlled&&f.type==="number"&&Ro(f,"number",f.value)}switch(L=d?nl(d):window,e){case"focusin":(sc(L)||L.contentEditable==="true")&&(el=L,qo=d,ui=null);break;case"focusout":ui=qo=el=null;break;case"mousedown":zo=!0;break;case"contextmenu":case"mouseup":case"dragend":zo=!1,mc(p,n,u);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":mc(p,n,u)}var S;if(zs)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Zn?up(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(cp&&n.locale!=="ko"&&(Zn||v!=="onCompositionStart"?v==="onCompositionEnd"&&Zn&&(S=dp()):(rn=u,$s="value"in rn?rn.value:rn.textContent,Zn=!0)),L=Ha(d,v),0<L.length&&(v=new ic(v,e,null,n,u),p.push({event:v,listeners:L}),S?v.data=S:(S=pp(n),S!==null&&(v.data=S)))),(S=ng?lg(e,n):ig(e,n))&&(d=Ha(d,"onBeforeInput"),0<d.length&&(u=new ic("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=S))}Sp(p,t)})}function Pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ha(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=xi(e,n),a!=null&&l.unshift(Pi(e,a,i)),a=xi(e,t),a!=null&&l.push(Pi(e,a,i))),e=e.return}return l}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gc(e,t,n,l,i){for(var a=t._reactName,r=[];n!==null&&n!==l;){var o=n,s=o.alternate,d=o.stateNode;if(s!==null&&s===l)break;o.tag===5&&d!==null&&(o=d,i?(s=xi(n,a),s!=null&&r.unshift(Pi(n,s,o))):i||(s=xi(n,a),s!=null&&r.push(Pi(n,s,o)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var hg=/\r\n?/g,_g=/\u0000|\uFFFD/g;function bc(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(_g,"")}function na(e,t,n){if(t=bc(t),bc(e)!==t&&n)throw Error(E(425))}function qa(){}var Ko=null,Qo=null;function Yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,hc=typeof Promise=="function"?Promise:void 0,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof hc<"u"?function(e){return hc.resolve(null).then(e).catch(wg)}:Xo;function wg(e){setTimeout(function(){throw e})}function oo(e,t){var n=t,l=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(l===0){e.removeChild(i),Ci(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=i}while(n);Ci(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var El=Math.random().toString(36).slice(2),Gt="__reactFiber$"+El,Di="__reactProps$"+El,Kt="__reactContainer$"+El,Jo="__reactEvents$"+El,Cg="__reactListeners$"+El,Sg="__reactHandles$"+El;function Pn(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_c(e);e!==null;){if(n=e[Gt])return n;e=_c(e)}return t}e=n,n=e.parentNode}return null}function ji(e){return e=e[Gt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nl(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function _r(e){return e[Di]||null}var Zo=[],ll=-1;function vn(e){return{current:e}}function be(e){0>ll||(e.current=Zo[ll],Zo[ll]=null,ll--)}function me(e,t){ll++,Zo[ll]=e.current,e.current=t}var hn={},$e=vn(hn),lt=vn(!1),Gn=hn;function wl(e,t){var n=e.type.contextTypes;if(!n)return hn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function za(){be(lt),be($e)}function xc(e,t,n){if($e.current!==hn)throw Error(E(168));me($e,t),me(lt,n)}function kp(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var i in l)if(!(i in t))throw Error(E(108,sy(e)||"Unknown",i));return Se({},n,l)}function Ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Gn=$e.current,me($e,e),me(lt,lt.current),!0}function vc(e,t,n){var l=e.stateNode;if(!l)throw Error(E(169));n?(e=kp(e,t,Gn),l.__reactInternalMemoizedMergedChildContext=e,be(lt),be($e),me($e,e)):be(lt),me(lt,n)}var jt=null,xr=!1,so=!1;function Pp(e){jt===null?jt=[e]:jt.push(e)}function Lg(e){xr=!0,Pp(e)}function wn(){if(!so&&jt!==null){so=!0;var e=0,t=ce;try{var n=jt;for(ce=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}jt=null,xr=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),Ju(Is,wn),i}finally{ce=t,so=!1}}return null}var il=[],al=0,Qa=null,Ya=0,ft=[],yt=0,Mn=null,Ut=1,Wt="";function Ln(e,t){il[al++]=Ya,il[al++]=Qa,Qa=e,Ya=t}function Dp(e,t,n){ft[yt++]=Ut,ft[yt++]=Wt,ft[yt++]=Mn,Mn=e;var l=Ut;e=Wt;var i=32-Tt(l)-1;l&=~(1<<i),n+=1;var a=32-Tt(t)+i;if(30<a){var r=i-i%5;a=(l&(1<<r)-1).toString(32),l>>=r,i-=r,Ut=1<<32-Tt(t)+i|n<<i|l,Wt=a+e}else Ut=1<<a|n<<i|l,Wt=e}function Qs(e){e.return!==null&&(Ln(e,1),Dp(e,1,0))}function Ys(e){for(;e===Qa;)Qa=il[--al],il[al]=null,Ya=il[--al],il[al]=null;for(;e===Mn;)Mn=ft[--yt],ft[yt]=null,Wt=ft[--yt],ft[yt]=null,Ut=ft[--yt],ft[yt]=null}var dt=null,st=null,he=!1,Dt=null;function Tp(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,st=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mn!==null?{id:Ut,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,st=null,!0):!1;default:return!1}}function es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ts(e){if(he){var t=st;if(t){var n=t;if(!wc(e,t)){if(es(e))throw Error(E(418));t=un(n.nextSibling);var l=dt;t&&wc(e,t)?Tp(l,n):(e.flags=e.flags&-4097|2,he=!1,dt=e)}}else{if(es(e))throw Error(E(418));e.flags=e.flags&-4097|2,he=!1,dt=e}}}function Cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function la(e){if(e!==dt)return!1;if(!he)return Cc(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yo(e.type,e.memoizedProps)),t&&(t=st)){if(es(e))throw Np(),Error(E(418));for(;t;)Tp(e,t),t=un(t.nextSibling)}if(Cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=dt?un(e.stateNode.nextSibling):null;return!0}function Np(){for(var e=st;e;)e=un(e.nextSibling)}function Cl(){st=dt=null,he=!1}function Xs(e){Dt===null?Dt=[e]:Dt.push(e)}var kg=Jt.ReactCurrentBatchConfig;function Ql(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var l=n.stateNode}if(!l)throw Error(E(147,e));var i=l,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(r){var o=i.refs;r===null?delete o[a]:o[a]=r},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ia(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sc(e){var t=e._init;return t(e._payload)}function Ap(e){function t(b,y){if(e){var h=b.deletions;h===null?(b.deletions=[y],b.flags|=16):h.push(y)}}function n(b,y){if(!e)return null;for(;y!==null;)t(b,y),y=y.sibling;return null}function l(b,y){for(b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function i(b,y){return b=yn(b,y),b.index=0,b.sibling=null,b}function a(b,y,h){return b.index=h,e?(h=b.alternate,h!==null?(h=h.index,h<y?(b.flags|=2,y):h):(b.flags|=2,y)):(b.flags|=1048576,y)}function r(b){return e&&b.alternate===null&&(b.flags|=2),b}function o(b,y,h,w){return y===null||y.tag!==6?(y=go(h,b.mode,w),y.return=b,y):(y=i(y,h),y.return=b,y)}function s(b,y,h,w){var k=h.type;return k===Jn?u(b,y,h.props.children,w,h.key):y!==null&&(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===en&&Sc(k)===y.type)?(w=i(y,h.props),w.ref=Ql(b,y,h),w.return=b,w):(w=Ea(h.type,h.key,h.props,null,b.mode,w),w.ref=Ql(b,y,h),w.return=b,w)}function d(b,y,h,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==h.containerInfo||y.stateNode.implementation!==h.implementation?(y=bo(h,b.mode,w),y.return=b,y):(y=i(y,h.children||[]),y.return=b,y)}function u(b,y,h,w,k){return y===null||y.tag!==7?(y=Rn(h,b.mode,w,k),y.return=b,y):(y=i(y,h),y.return=b,y)}function p(b,y,h){if(typeof y=="string"&&y!==""||typeof y=="number")return y=go(""+y,b.mode,h),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zi:return h=Ea(y.type,y.key,y.props,null,b.mode,h),h.ref=Ql(b,null,y),h.return=b,h;case Xn:return y=bo(y,b.mode,h),y.return=b,y;case en:var w=y._init;return p(b,w(y._payload),h)}if(ni(y)||$l(y))return y=Rn(y,b.mode,h,null),y.return=b,y;ia(b,y)}return null}function f(b,y,h,w){var k=y!==null?y.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:o(b,y,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zi:return h.key===k?s(b,y,h,w):null;case Xn:return h.key===k?d(b,y,h,w):null;case en:return k=h._init,f(b,y,k(h._payload),w)}if(ni(h)||$l(h))return k!==null?null:u(b,y,h,w,null);ia(b,h)}return null}function m(b,y,h,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(h)||null,o(y,b,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zi:return b=b.get(w.key===null?h:w.key)||null,s(y,b,w,k);case Xn:return b=b.get(w.key===null?h:w.key)||null,d(y,b,w,k);case en:var L=w._init;return m(b,y,h,L(w._payload),k)}if(ni(w)||$l(w))return b=b.get(h)||null,u(y,b,w,k,null);ia(y,w)}return null}function x(b,y,h,w){for(var k=null,L=null,S=y,v=y=0,A=null;S!==null&&v<h.length;v++){S.index>v?(A=S,S=null):A=S.sibling;var R=f(b,S,h[v],w);if(R===null){S===null&&(S=A);break}e&&S&&R.alternate===null&&t(b,S),y=a(R,y,v),L===null?k=R:L.sibling=R,L=R,S=A}if(v===h.length)return n(b,S),he&&Ln(b,v),k;if(S===null){for(;v<h.length;v++)S=p(b,h[v],w),S!==null&&(y=a(S,y,v),L===null?k=S:L.sibling=S,L=S);return he&&Ln(b,v),k}for(S=l(b,S);v<h.length;v++)A=m(S,b,v,h[v],w),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?v:A.key),y=a(A,y,v),L===null?k=A:L.sibling=A,L=A);return e&&S.forEach(function(U){return t(b,U)}),he&&Ln(b,v),k}function g(b,y,h,w){var k=$l(h);if(typeof k!="function")throw Error(E(150));if(h=k.call(h),h==null)throw Error(E(151));for(var L=k=null,S=y,v=y=0,A=null,R=h.next();S!==null&&!R.done;v++,R=h.next()){S.index>v?(A=S,S=null):A=S.sibling;var U=f(b,S,R.value,w);if(U===null){S===null&&(S=A);break}e&&S&&U.alternate===null&&t(b,S),y=a(U,y,v),L===null?k=U:L.sibling=U,L=U,S=A}if(R.done)return n(b,S),he&&Ln(b,v),k;if(S===null){for(;!R.done;v++,R=h.next())R=p(b,R.value,w),R!==null&&(y=a(R,y,v),L===null?k=R:L.sibling=R,L=R);return he&&Ln(b,v),k}for(S=l(b,S);!R.done;v++,R=h.next())R=m(S,b,v,R.value,w),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?v:R.key),y=a(R,y,v),L===null?k=R:L.sibling=R,L=R);return e&&S.forEach(function(B){return t(b,B)}),he&&Ln(b,v),k}function _(b,y,h,w){if(typeof h=="object"&&h!==null&&h.type===Jn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case zi:e:{for(var k=h.key,L=y;L!==null;){if(L.key===k){if(k=h.type,k===Jn){if(L.tag===7){n(b,L.sibling),y=i(L,h.props.children),y.return=b,b=y;break e}}else if(L.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===en&&Sc(k)===L.type){n(b,L.sibling),y=i(L,h.props),y.ref=Ql(b,L,h),y.return=b,b=y;break e}n(b,L);break}else t(b,L);L=L.sibling}h.type===Jn?(y=Rn(h.props.children,b.mode,w,h.key),y.return=b,b=y):(w=Ea(h.type,h.key,h.props,null,b.mode,w),w.ref=Ql(b,y,h),w.return=b,b=w)}return r(b);case Xn:e:{for(L=h.key;y!==null;){if(y.key===L)if(y.tag===4&&y.stateNode.containerInfo===h.containerInfo&&y.stateNode.implementation===h.implementation){n(b,y.sibling),y=i(y,h.children||[]),y.return=b,b=y;break e}else{n(b,y);break}else t(b,y);y=y.sibling}y=bo(h,b.mode,w),y.return=b,b=y}return r(b);case en:return L=h._init,_(b,y,L(h._payload),w)}if(ni(h))return x(b,y,h,w);if($l(h))return g(b,y,h,w);ia(b,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,y!==null&&y.tag===6?(n(b,y.sibling),y=i(y,h),y.return=b,b=y):(n(b,y),y=go(h,b.mode,w),y.return=b,b=y),r(b)):n(b,y)}return _}var Sl=Ap(!0),Ep=Ap(!1),Xa=vn(null),Ja=null,rl=null,Js=null;function Zs(){Js=rl=Ja=null}function ed(e){var t=Xa.current;be(Xa),e._currentValue=t}function ns(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function bl(e,t){Ja=e,Js=rl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(Js!==e)if(e={context:e,memoizedValue:t,next:null},rl===null){if(Ja===null)throw Error(E(308));rl=e,Ja.dependencies={lanes:0,firstContext:e}}else rl=rl.next=e;return t}var Dn=null;function td(e){Dn===null?Dn=[e]:Dn.push(e)}function Vp(e,t,n,l){var i=t.interleaved;return i===null?(n.next=n,td(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,l)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function nd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,oe&2){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,Qt(e,n)}return i=l.interleaved,i===null?(t.next=t,td(l)):(t.next=i.next,i.next=t),l.interleaved=t,Qt(e,n)}function ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,js(e,n)}}function Lc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Za(e,t,n,l){var i=e.updateQueue;tn=!1;var a=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,d=s.next;s.next=null,r===null?a=d:r.next=d,r=s;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=d:o.next=d,u.lastBaseUpdate=s))}if(a!==null){var p=i.baseState;r=0,u=d=s=null,o=a;do{var f=o.lane,m=o.eventTime;if((l&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,g=o;switch(f=t,m=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){p=x.call(m,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,f=typeof x=="function"?x.call(m,p,f):x,f==null)break e;p=Se({},p,f);break e;case 2:tn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(d=u=m,s=p):u=u.next=m,r|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;f=o,o=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(s=p),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do r|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);On|=r,e.lanes=r,e.memoizedState=p}}function kc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],i=l.callback;if(i!==null){if(l.callback=null,l=n,typeof i!="function")throw Error(E(191,i));i.call(l)}}}var Ui={},Ft=vn(Ui),Ti=vn(Ui),Ni=vn(Ui);function Tn(e){if(e===Ui)throw Error(E(174));return e}function ld(e,t){switch(me(Ni,t),me(Ti,e),me(Ft,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mo(t,e)}be(Ft),me(Ft,t)}function Ll(){be(Ft),be(Ti),be(Ni)}function Gp(e){Tn(Ni.current);var t=Tn(Ft.current),n=Mo(t,e.type);t!==n&&(me(Ti,e),me(Ft,n))}function id(e){Ti.current===e&&(be(Ft),be(Ti))}var xe=vn(0);function er(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=[];function ad(){for(var e=0;e<co.length;e++)co[e]._workInProgressVersionPrimary=null;co.length=0}var Pa=Jt.ReactCurrentDispatcher,uo=Jt.ReactCurrentBatchConfig,Fn=0,we=null,Ne=null,Ee=null,tr=!1,pi=!1,Ai=0,Pg=0;function Ie(){throw Error(E(321))}function rd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function od(e,t,n,l,i,a){if(Fn=a,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pa.current=e===null||e.memoizedState===null?Ag:Eg,e=n(l,i),pi){a=0;do{if(pi=!1,Ai=0,25<=a)throw Error(E(301));a+=1,Ee=Ne=null,t.updateQueue=null,Pa.current=Vg,e=n(l,i)}while(pi)}if(Pa.current=nr,t=Ne!==null&&Ne.next!==null,Fn=0,Ee=Ne=we=null,tr=!1,t)throw Error(E(300));return e}function sd(){var e=Ai!==0;return Ai=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?we.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function xt(){if(Ne===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ee===null?we.memoizedState:Ee.next;if(t!==null)Ee=t,Ne=e;else{if(e===null)throw Error(E(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ee===null?we.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Ei(e,t){return typeof t=="function"?t(e):t}function po(e){var t=xt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var l=Ne,i=l.baseQueue,a=n.pending;if(a!==null){if(i!==null){var r=i.next;i.next=a.next,a.next=r}l.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,l=l.baseState;var o=r=null,s=null,d=a;do{var u=d.lane;if((Fn&u)===u)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(o=s=p,r=l):s=s.next=p,we.lanes|=u,On|=u}d=d.next}while(d!==null&&d!==a);s===null?r=l:s.next=o,At(l,t.memoizedState)||(nt=!0),t.memoizedState=l,t.baseState=r,t.baseQueue=s,n.lastRenderedState=l}if(e=n.interleaved,e!==null){i=e;do a=i.lane,we.lanes|=a,On|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mo(e){var t=xt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var r=i=i.next;do a=e(a,r.action),r=r.next;while(r!==i);At(a,t.memoizedState)||(nt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,l]}function Mp(){}function Fp(e,t){var n=we,l=xt(),i=t(),a=!At(l.memoizedState,i);if(a&&(l.memoizedState=i,nt=!0),l=l.queue,dd(Ip.bind(null,n,l,e),[e]),l.getSnapshot!==t||a||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Vi(9,Bp.bind(null,n,l,i,t),void 0,null),Ve===null)throw Error(E(349));Fn&30||Op(n,t,i)}return i}function Op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bp(e,t,n,l){t.value=n,t.getSnapshot=l,jp(t)&&Up(e)}function Ip(e,t,n){return n(function(){jp(t)&&Up(e)})}function jp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function Up(e){var t=Qt(e,1);t!==null&&Nt(t,e,1,-1)}function Pc(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:e},t.queue=e,e=e.dispatch=Ng.bind(null,we,e),[t.memoizedState,e]}function Vi(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function Wp(){return xt().memoizedState}function Da(e,t,n,l){var i=Rt();we.flags|=e,i.memoizedState=Vi(1|t,n,void 0,l===void 0?null:l)}function vr(e,t,n,l){var i=xt();l=l===void 0?null:l;var a=void 0;if(Ne!==null){var r=Ne.memoizedState;if(a=r.destroy,l!==null&&rd(l,r.deps)){i.memoizedState=Vi(t,n,a,l);return}}we.flags|=e,i.memoizedState=Vi(1|t,n,a,l)}function Dc(e,t){return Da(8390656,8,e,t)}function dd(e,t){return vr(2048,8,e,t)}function $p(e,t){return vr(4,2,e,t)}function Hp(e,t){return vr(4,4,e,t)}function qp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zp(e,t,n){return n=n!=null?n.concat([e]):null,vr(4,4,qp.bind(null,t,e),n)}function cd(){}function Kp(e,t){var n=xt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&rd(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Qp(e,t){var n=xt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&rd(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function Yp(e,t,n){return Fn&21?(At(n,t)||(n=tp(),we.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function Dg(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var l=uo.transition;uo.transition={};try{e(!1),t()}finally{ce=n,uo.transition=l}}function Xp(){return xt().memoizedState}function Tg(e,t,n){var l=fn(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},Jp(e))Zp(t,n);else if(n=Vp(e,t,n,l),n!==null){var i=Ke();Nt(n,e,l,i),em(n,t,l)}}function Ng(e,t,n){var l=fn(e),i={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jp(e))Zp(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(i.hasEagerState=!0,i.eagerState=o,At(o,r)){var s=t.interleaved;s===null?(i.next=i,td(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Vp(e,t,i,l),n!==null&&(i=Ke(),Nt(n,e,l,i),em(n,t,l))}}function Jp(e){var t=e.alternate;return e===we||t!==null&&t===we}function Zp(e,t){pi=tr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function em(e,t,n){if(n&4194240){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,js(e,n)}}var nr={readContext:_t,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Ag={readContext:_t,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Dc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Da(4194308,4,qp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Da(4194308,4,e,t)},useInsertionEffect:function(e,t){return Da(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=Rt();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Tg.bind(null,we,e),[l.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:cd,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=Dg.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=we,i=Rt();if(he){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Ve===null)throw Error(E(349));Fn&30||Op(l,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Dc(Ip.bind(null,l,a,e),[e]),l.flags|=2048,Vi(9,Bp.bind(null,l,a,n,t),void 0,null),n},useId:function(){var e=Rt(),t=Ve.identifierPrefix;if(he){var n=Wt,l=Ut;n=(l&~(1<<32-Tt(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Eg={readContext:_t,useCallback:Kp,useContext:_t,useEffect:dd,useImperativeHandle:zp,useInsertionEffect:$p,useLayoutEffect:Hp,useMemo:Qp,useReducer:po,useRef:Wp,useState:function(){return po(Ei)},useDebugValue:cd,useDeferredValue:function(e){var t=xt();return Yp(t,Ne.memoizedState,e)},useTransition:function(){var e=po(Ei)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Mp,useSyncExternalStore:Fp,useId:Xp,unstable_isNewReconciler:!1},Vg={readContext:_t,useCallback:Kp,useContext:_t,useEffect:dd,useImperativeHandle:zp,useInsertionEffect:$p,useLayoutEffect:Hp,useMemo:Qp,useReducer:mo,useRef:Wp,useState:function(){return mo(Ei)},useDebugValue:cd,useDeferredValue:function(e){var t=xt();return Ne===null?t.memoizedState=e:Yp(t,Ne.memoizedState,e)},useTransition:function(){var e=mo(Ei)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Mp,useSyncExternalStore:Fp,useId:Xp,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ls(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wr={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Ke(),i=fn(e),a=Ht(l,i);a.payload=t,n!=null&&(a.callback=n),t=pn(e,a,i),t!==null&&(Nt(t,e,i,l),ka(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Ke(),i=fn(e),a=Ht(l,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=pn(e,a,i),t!==null&&(Nt(t,e,i,l),ka(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),l=fn(e),i=Ht(n,l);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,l),t!==null&&(Nt(t,e,l,n),ka(t,e,l))}};function Tc(e,t,n,l,i,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,r):t.prototype&&t.prototype.isPureReactComponent?!Li(n,l)||!Li(i,a):!0}function tm(e,t,n){var l=!1,i=hn,a=t.contextType;return typeof a=="object"&&a!==null?a=_t(a):(i=it(t)?Gn:$e.current,l=t.contextTypes,a=(l=l!=null)?wl(e,i):hn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wr,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Nc(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&wr.enqueueReplaceState(t,t.state,null)}function is(e,t,n,l){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},nd(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=_t(a):(a=it(t)?Gn:$e.current,i.context=wl(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ls(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wr.enqueueReplaceState(i,i.state,null),Za(e,n,i,l),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function kl(e,t){try{var n="",l=t;do n+=oy(l),l=l.return;while(l);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function fo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function as(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rg=typeof WeakMap=="function"?WeakMap:Map;function nm(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){ir||(ir=!0,ys=l),as(e,t)},n}function lm(e,t,n){n=Ht(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=t.value;n.payload=function(){return l(i)},n.callback=function(){as(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){as(e,t),typeof l!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function Ac(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Rg;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(i.add(n),e=Kg.bind(null,e,t,n),t.then(e,e))}function Ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vc(e,t,n,l,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var Gg=Jt.ReactCurrentOwner,nt=!1;function qe(e,t,n,l){t.child=e===null?Ep(t,null,n,l):Sl(t,e.child,n,l)}function Rc(e,t,n,l,i){n=n.render;var a=t.ref;return bl(t,i),l=od(e,t,n,l,a,i),n=sd(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(he&&n&&Qs(t),t.flags|=1,qe(e,t,l,i),t.child)}function Gc(e,t,n,l,i){if(e===null){var a=n.type;return typeof a=="function"&&!hd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,im(e,t,a,l,i)):(e=Ea(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Li,n(r,l)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=yn(a,l),e.ref=t.ref,e.return=t,t.child=e}function im(e,t,n,l,i){if(e!==null){var a=e.memoizedProps;if(Li(a,l)&&e.ref===t.ref)if(nt=!1,t.pendingProps=l=a,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return rs(e,t,n,l,i)}function am(e,t,n){var l=t.pendingProps,i=l.children,a=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(sl,rt),rt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(sl,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=a!==null?a.baseLanes:n,me(sl,rt),rt|=l}else a!==null?(l=a.baseLanes|n,t.memoizedState=null):l=n,me(sl,rt),rt|=l;return qe(e,t,i,n),t.child}function rm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,n,l,i){var a=it(n)?Gn:$e.current;return a=wl(t,a),bl(t,i),n=od(e,t,n,l,a,i),l=sd(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(he&&l&&Qs(t),t.flags|=1,qe(e,t,n,i),t.child)}function Mc(e,t,n,l,i){if(it(n)){var a=!0;Ka(t)}else a=!1;if(bl(t,i),t.stateNode===null)Ta(e,t),tm(t,n,l),is(t,n,l,i),l=!0;else if(e===null){var r=t.stateNode,o=t.memoizedProps;r.props=o;var s=r.context,d=n.contextType;typeof d=="object"&&d!==null?d=_t(d):(d=it(n)?Gn:$e.current,d=wl(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function";p||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==l||s!==d)&&Nc(t,r,l,d),tn=!1;var f=t.memoizedState;r.state=f,Za(t,l,r,i),s=t.memoizedState,o!==l||f!==s||lt.current||tn?(typeof u=="function"&&(ls(t,n,u,l),s=t.memoizedState),(o=tn||Tc(t,n,o,l,f,s,d))?(p||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=s),r.props=l,r.state=s,r.context=d,l=o):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,Rp(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:kt(t.type,o),r.props=d,p=t.pendingProps,f=r.context,s=n.contextType,typeof s=="object"&&s!==null?s=_t(s):(s=it(n)?Gn:$e.current,s=wl(t,s));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==p||f!==s)&&Nc(t,r,l,s),tn=!1,f=t.memoizedState,r.state=f,Za(t,l,r,i);var x=t.memoizedState;o!==p||f!==x||lt.current||tn?(typeof m=="function"&&(ls(t,n,m,l),x=t.memoizedState),(d=tn||Tc(t,n,d,l,f,x,s)||!1)?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,x,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,x,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=x),r.props=l,r.state=x,r.context=s,l=d):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return os(e,t,n,l,a,i)}function os(e,t,n,l,i,a){rm(e,t);var r=(t.flags&128)!==0;if(!l&&!r)return i&&vc(t,n,!1),Yt(e,t,a);l=t.stateNode,Gg.current=t;var o=r&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&r?(t.child=Sl(t,e.child,null,a),t.child=Sl(t,null,o,a)):qe(e,t,o,a),t.memoizedState=l.state,i&&vc(t,n,!0),t.child}function om(e){var t=e.stateNode;t.pendingContext?xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xc(e,t.context,!1),ld(e,t.containerInfo)}function Fc(e,t,n,l,i){return Cl(),Xs(i),t.flags|=256,qe(e,t,n,l),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function sm(e,t,n){var l=t.pendingProps,i=xe.current,a=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(xe,i&1),e===null)return ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=l.children,e=l.fallback,a?(l=t.mode,a=t.child,r={mode:"hidden",children:r},!(l&1)&&a!==null?(a.childLanes=0,a.pendingProps=r):a=Lr(r,l,0,null),e=Rn(e,l,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ds(n),t.memoizedState=ss,e):ud(t,r));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Mg(e,t,r,l,o,i,n);if(a){a=l.fallback,r=t.mode,i=e.child,o=i.sibling;var s={mode:"hidden",children:l.children};return!(r&1)&&t.child!==i?(l=t.child,l.childLanes=0,l.pendingProps=s,t.deletions=null):(l=yn(i,s),l.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=yn(o,a):(a=Rn(a,r,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,r=e.child.memoizedState,r=r===null?ds(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},a.memoizedState=r,a.childLanes=e.childLanes&~n,t.memoizedState=ss,l}return a=e.child,e=a.sibling,l=yn(a,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function ud(e,t){return t=Lr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function aa(e,t,n,l){return l!==null&&Xs(l),Sl(t,e.child,null,n),e=ud(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mg(e,t,n,l,i,a,r){if(n)return t.flags&256?(t.flags&=-257,l=fo(Error(E(422))),aa(e,t,r,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=l.fallback,i=t.mode,l=Lr({mode:"visible",children:l.children},i,0,null),a=Rn(a,i,r,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,t.mode&1&&Sl(t,e.child,null,r),t.child.memoizedState=ds(r),t.memoizedState=ss,a);if(!(t.mode&1))return aa(e,t,r,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var o=l.dgst;return l=o,a=Error(E(419)),l=fo(a,l,void 0),aa(e,t,r,l)}if(o=(r&e.childLanes)!==0,nt||o){if(l=Ve,l!==null){switch(r&-r){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|r)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Qt(e,i),Nt(l,e,i,-1))}return bd(),l=fo(Error(E(421))),aa(e,t,r,l)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Qg.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,st=un(i.nextSibling),dt=t,he=!0,Dt=null,e!==null&&(ft[yt++]=Ut,ft[yt++]=Wt,ft[yt++]=Mn,Ut=e.id,Wt=e.overflow,Mn=t),t=ud(t,l.children),t.flags|=4096,t)}function Oc(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ns(e.return,t,n)}function yo(e,t,n,l,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=l,a.tail=n,a.tailMode=i)}function dm(e,t,n){var l=t.pendingProps,i=l.revealOrder,a=l.tail;if(qe(e,t,l.children,n),l=xe.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(me(xe,l),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&er(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yo(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&er(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yo(t,!0,n,null,a);break;case"together":yo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ta(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fg(e,t,n){switch(t.tag){case 3:om(t),Cl();break;case 5:Gp(t);break;case 1:it(t.type)&&Ka(t);break;case 4:ld(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,i=t.memoizedProps.value;me(Xa,l._currentValue),l._currentValue=i;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(me(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?sm(e,t,n):(me(xe,xe.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);me(xe,xe.current&1);break;case 19:if(l=(n&t.childLanes)!==0,e.flags&128){if(l)return dm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(xe,xe.current),l)break;return null;case 22:case 23:return t.lanes=0,am(e,t,n)}return Yt(e,t,n)}var cm,cs,um,pm;cm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cs=function(){};um=function(e,t,n,l){var i=e.memoizedProps;if(i!==l){e=t.stateNode,Tn(Ft.current);var a=null;switch(n){case"input":i=Eo(e,i),l=Eo(e,l),a=[];break;case"select":i=Se({},i,{value:void 0}),l=Se({},l,{value:void 0}),a=[];break;case"textarea":i=Go(e,i),l=Go(e,l),a=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=qa)}Fo(n,l);var r;n=null;for(d in i)if(!l.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(r in o)o.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(hi.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in l){var s=l[d];if(o=i!=null?i[d]:void 0,l.hasOwnProperty(d)&&s!==o&&(s!=null||o!=null))if(d==="style")if(o){for(r in o)!o.hasOwnProperty(r)||s&&s.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in s)s.hasOwnProperty(r)&&o[r]!==s[r]&&(n||(n={}),n[r]=s[r])}else n||(a||(a=[]),a.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(a=a||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(hi.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&ge("scroll",e),a||o===s||(a=[])):(a=a||[]).push(d,s))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};pm=function(e,t,n,l){n!==l&&(t.flags|=4)};function Yl(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Og(e,t,n){var l=t.pendingProps;switch(Ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return it(t.type)&&za(),je(t),null;case 3:return l=t.stateNode,Ll(),be(lt),be($e),ad(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(la(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(hs(Dt),Dt=null))),cs(e,t),je(t),null;case 5:id(t);var i=Tn(Ni.current);if(n=t.type,e!==null&&t.stateNode!=null)um(e,t,n,l,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(E(166));return je(t),null}if(e=Tn(Ft.current),la(t)){l=t.stateNode,n=t.type;var a=t.memoizedProps;switch(l[Gt]=t,l[Di]=a,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",l),ge("close",l);break;case"iframe":case"object":case"embed":ge("load",l);break;case"video":case"audio":for(i=0;i<ii.length;i++)ge(ii[i],l);break;case"source":ge("error",l);break;case"img":case"image":case"link":ge("error",l),ge("load",l);break;case"details":ge("toggle",l);break;case"input":zd(l,a),ge("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!a.multiple},ge("invalid",l);break;case"textarea":Qd(l,a),ge("invalid",l)}Fo(n,a),i=null;for(var r in a)if(a.hasOwnProperty(r)){var o=a[r];r==="children"?typeof o=="string"?l.textContent!==o&&(a.suppressHydrationWarning!==!0&&na(l.textContent,o,e),i=["children",o]):typeof o=="number"&&l.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&na(l.textContent,o,e),i=["children",""+o]):hi.hasOwnProperty(r)&&o!=null&&r==="onScroll"&&ge("scroll",l)}switch(n){case"input":Ki(l),Kd(l,a,!0);break;case"textarea":Ki(l),Yd(l);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(l.onclick=qa)}l=i,t.updateQueue=l,l!==null&&(t.flags|=4)}else{r=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Iu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=r.createElement(n,{is:l.is}):(e=r.createElement(n),n==="select"&&(r=e,l.multiple?r.multiple=!0:l.size&&(r.size=l.size))):e=r.createElementNS(e,n),e[Gt]=t,e[Di]=l,cm(e,t,!1,!1),t.stateNode=e;e:{switch(r=Oo(n,l),n){case"dialog":ge("cancel",e),ge("close",e),i=l;break;case"iframe":case"object":case"embed":ge("load",e),i=l;break;case"video":case"audio":for(i=0;i<ii.length;i++)ge(ii[i],e);i=l;break;case"source":ge("error",e),i=l;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=l;break;case"details":ge("toggle",e),i=l;break;case"input":zd(e,l),i=Eo(e,l),ge("invalid",e);break;case"option":i=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},i=Se({},l,{value:void 0}),ge("invalid",e);break;case"textarea":Qd(e,l),i=Go(e,l),ge("invalid",e);break;default:i=l}Fo(n,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="style"?Wu(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ju(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&_i(e,s):typeof s=="number"&&_i(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(hi.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ge("scroll",e):s!=null&&Gs(e,a,s,r))}switch(n){case"input":Ki(e),Kd(e,l,!1);break;case"textarea":Ki(e),Yd(e);break;case"option":l.value!=null&&e.setAttribute("value",""+bn(l.value));break;case"select":e.multiple=!!l.multiple,a=l.value,a!=null?ml(e,!!l.multiple,a,!1):l.defaultValue!=null&&ml(e,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qa)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)pm(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(E(166));if(n=Tn(Ni.current),Tn(Ft.current),la(t)){if(l=t.stateNode,n=t.memoizedProps,l[Gt]=t,(a=l.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:na(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&na(l.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[Gt]=t,t.stateNode=l}return je(t),null;case 13:if(be(xe),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&st!==null&&t.mode&1&&!(t.flags&128))Np(),Cl(),t.flags|=98560,a=!1;else if(a=la(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[Gt]=t}else Cl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),a=!1}else Dt!==null&&(hs(Dt),Dt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Ae===0&&(Ae=3):bd())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Ll(),cs(e,t),e===null&&ki(t.stateNode.containerInfo),je(t),null;case 10:return ed(t.type._context),je(t),null;case 17:return it(t.type)&&za(),je(t),null;case 19:if(be(xe),a=t.memoizedState,a===null)return je(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)Yl(a,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=er(e),r!==null){for(t.flags|=128,Yl(a,!1),l=r.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)a=n,e=l,a.flags&=14680066,r=a.alternate,r===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,a.type=r.type,e=r.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(xe,xe.current&1|2),t.child}e=e.sibling}a.tail!==null&&De()>Pl&&(t.flags|=128,l=!0,Yl(a,!1),t.lanes=4194304)}else{if(!l)if(e=er(r),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!he)return je(t),null}else 2*De()-a.renderingStartTime>Pl&&n!==1073741824&&(t.flags|=128,l=!0,Yl(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(n=a.last,n!==null?n.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=De(),t.sibling=null,n=xe.current,me(xe,l?n&1|2:n&1),t):(je(t),null);case 22:case 23:return gd(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?rt&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Bg(e,t){switch(Ys(t),t.tag){case 1:return it(t.type)&&za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ll(),be(lt),be($e),ad(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return id(t),null;case 13:if(be(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(xe),null;case 4:return Ll(),null;case 10:return ed(t.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var ra=!1,Ue=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,O=null;function ol(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){Pe(e,t,l)}else n.current=null}function us(e,t,n){try{n()}catch(l){Pe(e,t,l)}}var Bc=!1;function jg(e,t){if(Ko=Wa,e=bp(),Ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,o=-1,s=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(o=r+i),p!==a||l!==0&&p.nodeType!==3||(s=r+l),p.nodeType===3&&(r+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++d===i&&(o=r),f===a&&++u===l&&(s=r),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||s===-1?null:{start:o,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:e,selectionRange:n},Wa=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,_=x.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:kt(t.type,g),_);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){Pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return x=Bc,Bc=!1,x}function mi(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&us(t,n,a)}i=i.next}while(i!==l)}}function Cr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function ps(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mm(e){var t=e.alternate;t!==null&&(e.alternate=null,mm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[Di],delete t[Jo],delete t[Cg],delete t[Sg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fm(e){return e.tag===5||e.tag===3||e.tag===4}function Ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ms(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qa));else if(l!==4&&(e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}function fs(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(fs(e,t,n),e=e.sibling;e!==null;)fs(e,t,n),e=e.sibling}var Ge=null,Pt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)ym(e,t,n),n=n.sibling}function ym(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(yr,n)}catch{}switch(n.tag){case 5:Ue||ol(n,t);case 6:var l=Ge,i=Pt;Ge=null,Zt(e,t,n),Ge=l,Pt=i,Ge!==null&&(Pt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Pt?(e=Ge,n=n.stateNode,e.nodeType===8?oo(e.parentNode,n):e.nodeType===1&&oo(e,n),Ci(e)):oo(Ge,n.stateNode));break;case 4:l=Ge,i=Pt,Ge=n.stateNode.containerInfo,Pt=!0,Zt(e,t,n),Ge=l,Pt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var a=i,r=a.destroy;a=a.tag,r!==void 0&&(a&2||a&4)&&us(n,t,r),i=i.next}while(i!==l)}Zt(e,t,n);break;case 1:if(!Ue&&(ol(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(o){Pe(n,t,o)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Ue=(l=Ue)||n.memoizedState!==null,Zt(e,t,n),Ue=l):Zt(e,t,n);break;default:Zt(e,t,n)}}function jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ig),t.forEach(function(l){var i=Yg.bind(null,e,l);n.has(l)||(n.add(l),l.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l];try{var a=e,r=t,o=r;e:for(;o!==null;){switch(o.tag){case 5:Ge=o.stateNode,Pt=!1;break e;case 3:Ge=o.stateNode.containerInfo,Pt=!0;break e;case 4:Ge=o.stateNode.containerInfo,Pt=!0;break e}o=o.return}if(Ge===null)throw Error(E(160));ym(a,r,i),Ge=null,Pt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){Pe(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gm(t,e),t=t.sibling}function gm(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Vt(e),l&4){try{mi(3,e,e.return),Cr(3,e)}catch(g){Pe(e,e.return,g)}try{mi(5,e,e.return)}catch(g){Pe(e,e.return,g)}}break;case 1:St(t,e),Vt(e),l&512&&n!==null&&ol(n,n.return);break;case 5:if(St(t,e),Vt(e),l&512&&n!==null&&ol(n,n.return),e.flags&32){var i=e.stateNode;try{_i(i,"")}catch(g){Pe(e,e.return,g)}}if(l&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,r=n!==null?n.memoizedProps:a,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Ou(i,a),Oo(o,r);var d=Oo(o,a);for(r=0;r<s.length;r+=2){var u=s[r],p=s[r+1];u==="style"?Wu(i,p):u==="dangerouslySetInnerHTML"?ju(i,p):u==="children"?_i(i,p):Gs(i,u,p,d)}switch(o){case"input":Vo(i,a);break;case"textarea":Bu(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?ml(i,!!a.multiple,m,!1):f!==!!a.multiple&&(a.defaultValue!=null?ml(i,!!a.multiple,a.defaultValue,!0):ml(i,!!a.multiple,a.multiple?[]:"",!1))}i[Di]=a}catch(g){Pe(e,e.return,g)}}break;case 6:if(St(t,e),Vt(e),l&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Pe(e,e.return,g)}}break;case 3:if(St(t,e),Vt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(g){Pe(e,e.return,g)}break;case 4:St(t,e),Vt(e);break;case 13:St(t,e),Vt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(fd=De())),l&4&&jc(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(d=Ue)||u,St(t,e),Ue=d):St(t,e),Vt(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(p=O=u;O!==null;){switch(f=O,m=f.child,f.tag){case 0:case 11:case 14:case 15:mi(4,f,f.return);break;case 1:ol(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){l=f,n=f.return;try{t=l,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(g){Pe(l,n,g)}}break;case 5:ol(f,f.return);break;case 22:if(f.memoizedState!==null){Wc(p);continue}}m!==null?(m.return=f,O=m):Wc(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{i=p.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=p.stateNode,s=p.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=Uu("display",r))}catch(g){Pe(e,e.return,g)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(g){Pe(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:St(t,e),Vt(e),l&4&&jc(e);break;case 21:break;default:St(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fm(n)){var l=n;break e}n=n.return}throw Error(E(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(_i(i,""),l.flags&=-33);var a=Ic(e);fs(e,a,i);break;case 3:case 4:var r=l.stateNode.containerInfo,o=Ic(e);ms(e,o,r);break;default:throw Error(E(161))}}catch(s){Pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ug(e,t,n){O=e,bm(e)}function bm(e,t,n){for(var l=(e.mode&1)!==0;O!==null;){var i=O,a=i.child;if(i.tag===22&&l){var r=i.memoizedState!==null||ra;if(!r){var o=i.alternate,s=o!==null&&o.memoizedState!==null||Ue;o=ra;var d=Ue;if(ra=r,(Ue=s)&&!d)for(O=i;O!==null;)r=O,s=r.child,r.tag===22&&r.memoizedState!==null?$c(i):s!==null?(s.return=r,O=s):$c(i);for(;a!==null;)O=a,bm(a),a=a.sibling;O=i,ra=o,Ue=d}Uc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,O=a):Uc(e)}}function Uc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Cr(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!Ue)if(n===null)l.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);l.componentDidUpdate(i,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&kc(t,a,l);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kc(t,r,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Ci(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ue||t.flags&512&&ps(t)}catch(f){Pe(t,t.return,f)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Wc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function $c(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cr(4,t)}catch(s){Pe(t,n,s)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var i=t.return;try{l.componentDidMount()}catch(s){Pe(t,i,s)}}var a=t.return;try{ps(t)}catch(s){Pe(t,a,s)}break;case 5:var r=t.return;try{ps(t)}catch(s){Pe(t,r,s)}}}catch(s){Pe(t,t.return,s)}if(t===e){O=null;break}var o=t.sibling;if(o!==null){o.return=t.return,O=o;break}O=t.return}}var Wg=Math.ceil,lr=Jt.ReactCurrentDispatcher,pd=Jt.ReactCurrentOwner,bt=Jt.ReactCurrentBatchConfig,oe=0,Ve=null,Te=null,Me=0,rt=0,sl=vn(0),Ae=0,Ri=null,On=0,Sr=0,md=0,fi=null,et=null,fd=0,Pl=1/0,It=null,ir=!1,ys=null,mn=null,oa=!1,on=null,ar=0,yi=0,gs=null,Na=-1,Aa=0;function Ke(){return oe&6?De():Na!==-1?Na:Na=De()}function fn(e){return e.mode&1?oe&2&&Me!==0?Me&-Me:kg.transition!==null?(Aa===0&&(Aa=tp()),Aa):(e=ce,e!==0||(e=window.event,e=e===void 0?16:sp(e.type)),e):1}function Nt(e,t,n,l){if(50<yi)throw yi=0,gs=null,Error(E(185));Bi(e,n,l),(!(oe&2)||e!==Ve)&&(e===Ve&&(!(oe&2)&&(Sr|=n),Ae===4&&an(e,Me)),at(e,l),n===1&&oe===0&&!(t.mode&1)&&(Pl=De()+500,xr&&wn()))}function at(e,t){var n=e.callbackNode;ky(e,t);var l=Ua(e,e===Ve?Me:0);if(l===0)n!==null&&Zd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&Zd(n),t===1)e.tag===0?Lg(Hc.bind(null,e)):Pp(Hc.bind(null,e)),vg(function(){!(oe&6)&&wn()}),n=null;else{switch(np(l)){case 1:n=Is;break;case 4:n=Zu;break;case 16:n=ja;break;case 536870912:n=ep;break;default:n=ja}n=Lm(n,hm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hm(e,t){if(Na=-1,Aa=0,oe&6)throw Error(E(327));var n=e.callbackNode;if(hl()&&e.callbackNode!==n)return null;var l=Ua(e,e===Ve?Me:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=rr(e,l);else{t=l;var i=oe;oe|=2;var a=xm();(Ve!==e||Me!==t)&&(It=null,Pl=De()+500,Vn(e,t));do try{qg();break}catch(o){_m(e,o)}while(!0);Zs(),lr.current=a,oe=i,Te!==null?t=0:(Ve=null,Me=0,t=Ae)}if(t!==0){if(t===2&&(i=Wo(e),i!==0&&(l=i,t=bs(e,i))),t===1)throw n=Ri,Vn(e,0),an(e,l),at(e,De()),n;if(t===6)an(e,l);else{if(i=e.current.alternate,!(l&30)&&!$g(i)&&(t=rr(e,l),t===2&&(a=Wo(e),a!==0&&(l=a,t=bs(e,a))),t===1))throw n=Ri,Vn(e,0),an(e,l),at(e,De()),n;switch(e.finishedWork=i,e.finishedLanes=l,t){case 0:case 1:throw Error(E(345));case 2:kn(e,et,It);break;case 3:if(an(e,l),(l&130023424)===l&&(t=fd+500-De(),10<t)){if(Ua(e,0)!==0)break;if(i=e.suspendedLanes,(i&l)!==l){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xo(kn.bind(null,e,et,It),t);break}kn(e,et,It);break;case 4:if(an(e,l),(l&4194240)===l)break;for(t=e.eventTimes,i=-1;0<l;){var r=31-Tt(l);a=1<<r,r=t[r],r>i&&(i=r),l&=~a}if(l=i,l=De()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Wg(l/1960))-l,10<l){e.timeoutHandle=Xo(kn.bind(null,e,et,It),l);break}kn(e,et,It);break;case 5:kn(e,et,It);break;default:throw Error(E(329))}}}return at(e,De()),e.callbackNode===n?hm.bind(null,e):null}function bs(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=rr(e,t),e!==2&&(t=et,et=n,t!==null&&hs(t)),e}function hs(e){et===null?et=e:et.push.apply(et,e)}function $g(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var i=n[l],a=i.getSnapshot;i=i.value;try{if(!At(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~md,t&=~Sr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),l=1<<n;e[n]=-1,t&=~l}}function Hc(e){if(oe&6)throw Error(E(327));hl();var t=Ua(e,0);if(!(t&1))return at(e,De()),null;var n=rr(e,t);if(e.tag!==0&&n===2){var l=Wo(e);l!==0&&(t=l,n=bs(e,l))}if(n===1)throw n=Ri,Vn(e,0),an(e,t),at(e,De()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,et,It),at(e,De()),null}function yd(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Pl=De()+500,xr&&wn())}}function Bn(e){on!==null&&on.tag===0&&!(oe&6)&&hl();var t=oe;oe|=1;var n=bt.transition,l=ce;try{if(bt.transition=null,ce=1,e)return e()}finally{ce=l,bt.transition=n,oe=t,!(oe&6)&&wn()}}function gd(){rt=sl.current,be(sl)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xg(n)),Te!==null)for(n=Te.return;n!==null;){var l=n;switch(Ys(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&za();break;case 3:Ll(),be(lt),be($e),ad();break;case 5:id(l);break;case 4:Ll();break;case 13:be(xe);break;case 19:be(xe);break;case 10:ed(l.type._context);break;case 22:case 23:gd()}n=n.return}if(Ve=e,Te=e=yn(e.current,null),Me=rt=t,Ae=0,Ri=null,md=Sr=On=0,et=fi=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],l=n.interleaved,l!==null){n.interleaved=null;var i=l.next,a=n.pending;if(a!==null){var r=a.next;a.next=i,l.next=r}n.pending=l}Dn=null}return e}function _m(e,t){do{var n=Te;try{if(Zs(),Pa.current=nr,tr){for(var l=we.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}tr=!1}if(Fn=0,Ee=Ne=we=null,pi=!1,Ai=0,pd.current=null,n===null||n.return===null){Ae=1,Ri=t,Te=null;break}e:{var a=e,r=n.return,o=n,s=t;if(t=Me,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,u=o,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Ec(r);if(m!==null){m.flags&=-257,Vc(m,r,o,a,t),m.mode&1&&Ac(a,d,t),t=m,s=d;var x=t.updateQueue;if(x===null){var g=new Set;g.add(s),t.updateQueue=g}else x.add(s);break e}else{if(!(t&1)){Ac(a,d,t),bd();break e}s=Error(E(426))}}else if(he&&o.mode&1){var _=Ec(r);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Vc(_,r,o,a,t),Xs(kl(s,o));break e}}a=s=kl(s,o),Ae!==4&&(Ae=2),fi===null?fi=[a]:fi.push(a),a=r;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var b=nm(a,s,t);Lc(a,b);break e;case 1:o=s;var y=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof y.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(mn===null||!mn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=lm(a,o,t);Lc(a,w);break e}}a=a.return}while(a!==null)}wm(n)}catch(k){t=k,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function xm(){var e=lr.current;return lr.current=nr,e===null?nr:e}function bd(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ve===null||!(On&268435455)&&!(Sr&268435455)||an(Ve,Me)}function rr(e,t){var n=oe;oe|=2;var l=xm();(Ve!==e||Me!==t)&&(It=null,Vn(e,t));do try{Hg();break}catch(i){_m(e,i)}while(!0);if(Zs(),oe=n,lr.current=l,Te!==null)throw Error(E(261));return Ve=null,Me=0,Ae}function Hg(){for(;Te!==null;)vm(Te)}function qg(){for(;Te!==null&&!by();)vm(Te)}function vm(e){var t=Sm(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?wm(e):Te=t,pd.current=null}function wm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bg(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Te=null;return}}else if(n=Og(n,t,rt),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ae===0&&(Ae=5)}function kn(e,t,n){var l=ce,i=bt.transition;try{bt.transition=null,ce=1,zg(e,t,n,l)}finally{bt.transition=i,ce=l}return null}function zg(e,t,n,l){do hl();while(on!==null);if(oe&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Py(e,a),e===Ve&&(Te=Ve=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oa||(oa=!0,Lm(ja,function(){return hl(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=bt.transition,bt.transition=null;var r=ce;ce=1;var o=oe;oe|=4,pd.current=null,jg(e,n),gm(n,e),mg(Qo),Wa=!!Ko,Qo=Ko=null,e.current=n,Ug(n),hy(),oe=o,ce=r,bt.transition=a}else e.current=n;if(oa&&(oa=!1,on=e,ar=i),a=e.pendingLanes,a===0&&(mn=null),vy(n.stateNode),at(e,De()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],l(i.value,{componentStack:i.stack,digest:i.digest});if(ir)throw ir=!1,e=ys,ys=null,e;return ar&1&&e.tag!==0&&hl(),a=e.pendingLanes,a&1?e===gs?yi++:(yi=0,gs=e):yi=0,wn(),null}function hl(){if(on!==null){var e=np(ar),t=bt.transition,n=ce;try{if(bt.transition=null,ce=16>e?16:e,on===null)var l=!1;else{if(e=on,on=null,ar=0,oe&6)throw Error(E(331));var i=oe;for(oe|=4,O=e.current;O!==null;){var a=O,r=a.child;if(O.flags&16){var o=a.deletions;if(o!==null){for(var s=0;s<o.length;s++){var d=o[s];for(O=d;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:mi(8,u,a)}var p=u.child;if(p!==null)p.return=u,O=p;else for(;O!==null;){u=O;var f=u.sibling,m=u.return;if(mm(u),u===d){O=null;break}if(f!==null){f.return=m,O=f;break}O=m}}}var x=a.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}O=a}}if(a.subtreeFlags&2064&&r!==null)r.return=a,O=r;else e:for(;O!==null;){if(a=O,a.flags&2048)switch(a.tag){case 0:case 11:case 15:mi(9,a,a.return)}var b=a.sibling;if(b!==null){b.return=a.return,O=b;break e}O=a.return}}var y=e.current;for(O=y;O!==null;){r=O;var h=r.child;if(r.subtreeFlags&2064&&h!==null)h.return=r,O=h;else e:for(r=y;O!==null;){if(o=O,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Cr(9,o)}}catch(k){Pe(o,o.return,k)}if(o===r){O=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,O=w;break e}O=o.return}}if(oe=i,wn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(yr,e)}catch{}l=!0}return l}finally{ce=n,bt.transition=t}}return!1}function qc(e,t,n){t=kl(n,t),t=nm(e,t,1),e=pn(e,t,1),t=Ke(),e!==null&&(Bi(e,1,t),at(e,t))}function Pe(e,t,n){if(e.tag===3)qc(e,e,n);else for(;t!==null;){if(t.tag===3){qc(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mn===null||!mn.has(l))){e=kl(n,e),e=lm(t,e,1),t=pn(t,e,1),e=Ke(),t!==null&&(Bi(t,1,e),at(t,e));break}}t=t.return}}function Kg(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Me&n)===n&&(Ae===4||Ae===3&&(Me&130023424)===Me&&500>De()-fd?Vn(e,0):md|=n),at(e,t)}function Cm(e,t){t===0&&(e.mode&1?(t=Xi,Xi<<=1,!(Xi&130023424)&&(Xi=4194304)):t=1);var n=Ke();e=Qt(e,t),e!==null&&(Bi(e,t,n),at(e,n))}function Qg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cm(e,n)}function Yg(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(E(314))}l!==null&&l.delete(t),Cm(e,n)}var Sm;Sm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,Fg(e,t,n);nt=!!(e.flags&131072)}else nt=!1,he&&t.flags&1048576&&Dp(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Ta(e,t),e=t.pendingProps;var i=wl(t,$e.current);bl(t,n),i=od(null,t,l,e,i,n);var a=sd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(l)?(a=!0,Ka(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nd(t),i.updater=wr,t.stateNode=i,i._reactInternals=t,is(t,l,e,n),t=os(null,t,l,!0,a,n)):(t.tag=0,he&&a&&Qs(t),qe(null,t,i,n),t=t.child),t;case 16:l=t.elementType;e:{switch(Ta(e,t),e=t.pendingProps,i=l._init,l=i(l._payload),t.type=l,i=t.tag=Jg(l),e=kt(l,e),i){case 0:t=rs(null,t,l,e,n);break e;case 1:t=Mc(null,t,l,e,n);break e;case 11:t=Rc(null,t,l,e,n);break e;case 14:t=Gc(null,t,l,kt(l.type,e),n);break e}throw Error(E(306,l,""))}return t;case 0:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:kt(l,i),rs(e,t,l,i,n);case 1:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:kt(l,i),Mc(e,t,l,i,n);case 3:e:{if(om(t),e===null)throw Error(E(387));l=t.pendingProps,a=t.memoizedState,i=a.element,Rp(e,t),Za(t,l,null,n);var r=t.memoizedState;if(l=r.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=kl(Error(E(423)),t),t=Fc(e,t,l,n,i);break e}else if(l!==i){i=kl(Error(E(424)),t),t=Fc(e,t,l,n,i);break e}else for(st=un(t.stateNode.containerInfo.firstChild),dt=t,he=!0,Dt=null,n=Ep(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cl(),l===i){t=Yt(e,t,n);break e}qe(e,t,l,n)}t=t.child}return t;case 5:return Gp(t),e===null&&ts(t),l=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,r=i.children,Yo(l,i)?r=null:a!==null&&Yo(l,a)&&(t.flags|=32),rm(e,t),qe(e,t,r,n),t.child;case 6:return e===null&&ts(t),null;case 13:return sm(e,t,n);case 4:return ld(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Sl(t,null,l,n):qe(e,t,l,n),t.child;case 11:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:kt(l,i),Rc(e,t,l,i,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,i=t.pendingProps,a=t.memoizedProps,r=i.value,me(Xa,l._currentValue),l._currentValue=r,a!==null)if(At(a.value,r)){if(a.children===i.children&&!lt.current){t=Yt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){r=a.child;for(var s=o.firstContext;s!==null;){if(s.context===l){if(a.tag===1){s=Ht(-1,n&-n),s.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?s.next=s:(s.next=u.next,u.next=s),d.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ns(a.return,n,t),o.lanes|=n;break}s=s.next}}else if(a.tag===10)r=a.type===t.type?null:a.child;else if(a.tag===18){if(r=a.return,r===null)throw Error(E(341));r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),ns(r,n,t),r=a.sibling}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,l=t.pendingProps.children,bl(t,n),i=_t(i),l=l(i),t.flags|=1,qe(e,t,l,n),t.child;case 14:return l=t.type,i=kt(l,t.pendingProps),i=kt(l.type,i),Gc(e,t,l,i,n);case 15:return im(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,i=t.pendingProps,i=t.elementType===l?i:kt(l,i),Ta(e,t),t.tag=1,it(l)?(e=!0,Ka(t)):e=!1,bl(t,n),tm(t,l,i),is(t,l,i,n),os(null,t,l,!0,e,n);case 19:return dm(e,t,n);case 22:return am(e,t,n)}throw Error(E(156,t.tag))};function Lm(e,t){return Ju(e,t)}function Xg(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,l){return new Xg(e,t,n,l)}function hd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jg(e){if(typeof e=="function")return hd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fs)return 11;if(e===Os)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ea(e,t,n,l,i,a){var r=2;if(l=e,typeof e=="function")hd(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Jn:return Rn(n.children,i,a,t);case Ms:r=8,i|=8;break;case Do:return e=gt(12,n,t,i|2),e.elementType=Do,e.lanes=a,e;case To:return e=gt(13,n,t,i),e.elementType=To,e.lanes=a,e;case No:return e=gt(19,n,t,i),e.elementType=No,e.lanes=a,e;case Gu:return Lr(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vu:r=10;break e;case Ru:r=9;break e;case Fs:r=11;break e;case Os:r=14;break e;case en:r=16,l=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=gt(r,n,t,i),t.elementType=e,t.type=l,t.lanes=a,t}function Rn(e,t,n,l){return e=gt(7,e,l,t),e.lanes=n,e}function Lr(e,t,n,l){return e=gt(22,e,l,t),e.elementType=Gu,e.lanes=n,e.stateNode={isHidden:!1},e}function go(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function bo(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zg(e,t,n,l,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yr(0),this.expirationTimes=Yr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yr(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _d(e,t,n,l,i,a,r,o,s){return e=new Zg(e,t,n,o,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=gt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(a),e}function eb(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function km(e){if(!e)return hn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(it(n))return kp(e,n,t)}return t}function Pm(e,t,n,l,i,a,r,o,s){return e=_d(n,l,!0,e,i,a,r,o,s),e.context=km(null),n=e.current,l=Ke(),i=fn(n),a=Ht(l,i),a.callback=t??null,pn(n,a,i),e.current.lanes=i,Bi(e,i,l),at(e,l),e}function kr(e,t,n,l){var i=t.current,a=Ke(),r=fn(i);return n=km(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(a,r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=pn(i,t,r),e!==null&&(Nt(e,i,r,a),ka(e,i,r)),r}function or(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xd(e,t){zc(e,t),(e=e.alternate)&&zc(e,t)}function tb(){return null}var Dm=typeof reportError=="function"?reportError:function(e){console.error(e)};function vd(e){this._internalRoot=e}Pr.prototype.render=vd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));kr(e,t,null,null)};Pr.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){kr(null,e,null,null)}),t[Kt]=null}};function Pr(e){this._internalRoot=e}Pr.prototype.unstable_scheduleHydration=function(e){if(e){var t=ap();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&op(e)}};function wd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kc(){}function nb(e,t,n,l,i){if(i){if(typeof l=="function"){var a=l;l=function(){var d=or(r);a.call(d)}}var r=Pm(t,l,e,0,null,!1,!1,"",Kc);return e._reactRootContainer=r,e[Kt]=r.current,ki(e.nodeType===8?e.parentNode:e),Bn(),r}for(;i=e.lastChild;)e.removeChild(i);if(typeof l=="function"){var o=l;l=function(){var d=or(s);o.call(d)}}var s=_d(e,0,!1,null,null,!1,!1,"",Kc);return e._reactRootContainer=s,e[Kt]=s.current,ki(e.nodeType===8?e.parentNode:e),Bn(function(){kr(t,s,n,l)}),s}function Tr(e,t,n,l,i){var a=n._reactRootContainer;if(a){var r=a;if(typeof i=="function"){var o=i;i=function(){var s=or(r);o.call(s)}}kr(t,r,e,i)}else r=nb(n,t,e,i,l);return or(r)}lp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(js(t,n|1),at(t,De()),!(oe&6)&&(Pl=De()+500,wn()))}break;case 13:Bn(function(){var l=Qt(e,1);if(l!==null){var i=Ke();Nt(l,e,1,i)}}),xd(e,1)}};Us=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Ke();Nt(t,e,134217728,n)}xd(e,134217728)}};ip=function(e){if(e.tag===13){var t=fn(e),n=Qt(e,t);if(n!==null){var l=Ke();Nt(n,e,t,l)}xd(e,t)}};ap=function(){return ce};rp=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Io=function(e,t,n){switch(t){case"input":if(Vo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=_r(l);if(!i)throw Error(E(90));Fu(l),Vo(l,i)}}}break;case"textarea":Bu(e,n);break;case"select":t=n.value,t!=null&&ml(e,!!n.multiple,t,!1)}};qu=yd;zu=Bn;var lb={usingClientEntryPoint:!1,Events:[ji,nl,_r,$u,Hu,yd]},Xl={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ib={bundleType:Xl.bundleType,version:Xl.version,rendererPackageName:Xl.rendererPackageName,rendererConfig:Xl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yu(e),e===null?null:e.stateNode},findFiberByHostInstance:Xl.findFiberByHostInstance||tb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{yr=sa.inject(ib),Mt=sa}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lb;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(t))throw Error(E(200));return eb(e,t,null,n)};ut.createRoot=function(e,t){if(!wd(e))throw Error(E(299));var n=!1,l="",i=Dm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_d(e,1,!1,null,null,n,!1,l,i),e[Kt]=t.current,ki(e.nodeType===8?e.parentNode:e),new vd(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Yu(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return Bn(e)};ut.hydrate=function(e,t,n){if(!Dr(t))throw Error(E(200));return Tr(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!wd(e))throw Error(E(405));var l=n!=null&&n.hydratedSources||null,i=!1,a="",r=Dm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=Pm(t,null,e,1,n??null,i,!1,a,r),e[Kt]=t.current,ki(e),l)for(e=0;e<l.length;e++)n=l[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pr(t)};ut.render=function(e,t,n){if(!Dr(t))throw Error(E(200));return Tr(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!Dr(e))throw Error(E(40));return e._reactRootContainer?(Bn(function(){Tr(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};ut.unstable_batchedUpdates=yd;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!Dr(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Tr(e,t,n,!1,l)};ut.version="18.3.1-next-f1338f8080-20240426";function Tm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tm)}catch(e){console.error(e)}}Tm(),Tu.exports=ut;var ab=Tu.exports,Qc=ab;ko.createRoot=Qc.createRoot,ko.hydrateRoot=Qc.hydrateRoot;const rb=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"System Time",help:"Date and time the inverter will use to run schedules",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Year",arg:"Year",dtype:"Number",description:"",longdescription:"",range:{min:0,max:99},telemetry:{model:"40104",block:"fixed",point:"Year"}},{name:"Mon",arg:"Mon",dtype:"Number",description:"",longdescription:"",range:{min:1,max:12},telemetry:{model:"40104",block:"fixed",point:"Month"}},{name:"Day",arg:"Day",dtype:"Number",description:"",longdescription:"",range:{min:1,max:31},telemetry:{model:"40104",block:"fixed",point:"Day"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"Hour"}},{name:"Min",arg:"Min",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Minute"}},{name:"Sec",arg:"Sec",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Second"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"SystemTime"}},command_id:"Basic.SystemTime",widget:"datetime"},{title:"Grid Interaction",help:"Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Off-grid",1:"Grid-tied"},friendly_meanings:{0:"Off-Grid.  There is no available power grid",1:"Grid-Tied. Grid power is available."},telemetry:{model:"40104",block:"fixed",point:"OperatingMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"OperatingMode"}},command_id:"Basic.OperatingMode"},{title:"Operating Mode",help:"Select how solar power is prioritized. Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed). Export first: PV powers the home, then exports to grid, and charges the battery last. Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed). If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Self used mode",1:"Feed-in priority mode",2:"Back-up mode"},friendly_meanings:{0:"Self-consumption",1:"Export first",2:"Backup power"},telemetry:{model:"40104",block:"fixed",point:"WorkMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"WorkMode"}},command_id:"Basic.WorkMode"},{title:"Ignore Grid-Loss Warning",help:"When enabled, the inverter will not treat the absence of grid power as an alarm. Use this mode for permanently off-grid systems where grid connection is unavailable.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid-Loss Behavior",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Treat as Alarm",1:"Ignore (Off-Grid Mode)"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"GridLossWarningClear"}},command_id:"Basic.GridLossWarningClear"},{title:"Power Status",help:"Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"Other"},friendly_meanings:{0:"Standby",1:"Running"},telemetry:{model:"40104",block:"fixed",point:"PowerControl"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerStatus"}},command_id:"Basic.PowerStatus"},{title:"Reset to Factory Defaults",help:"Restores all inverter configuration parameters to their original factory values. Use with caution â€” this cannot be undone.",element_type:"service",access:"INVOKE",readOnly:!1,entries:[],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"AllToDefault"}},command_id:"Basic.AllToDefault",invokeButtonText:"Reset Now"},{title:"Inverter Power Control",help:`Turns the inverter output on or off.\r
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
`,element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Voltage Ride-Through Windows",arg:"VoltageRideThrough",dtype:"String",description:"Derived from Grid Protection voltage limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Frequency Ride-Through Windows",arg:"FrequencyRideThrough",dtype:"String",description:"Derived from Grid Protection frequency limit settings for UL 1741 / IEEE 1547 compliance.",longdescription:""},{name:"Volt-VAR Profile",arg:"VoltVarProfile",dtype:"String",description:"Captures the active Volt-VAR curve (e.g., UL 1741 SA default profile).",longdescription:""},{name:"Freq-Watt Profile",arg:"FreqWattProfile",dtype:"String",description:"Captures the active droop coefficients applied to frequency-active power response.",longdescription:""}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Reports",Element:"ULComplianceReport"}},command_id:"CGI.ULComplianceReport",widget:"ul-compliance-report",showInvokeButton:!1,showHistory:!1,showRefresh:!1,showSetButton:!1}]}]},{sectionTitle:"Grid Protection",subsections:[{title:"Grid Protection Parameters",visibility:"default",collapsedByDefault:!0,points:[{title:"Grid Voltage Limits (Stage 1)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1"}},command_id:"GridProtection.GridVoltLimit1"},{title:"Grid Voltage Limits (Stage 2)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2"}},command_id:"GridProtection.GridVoltLimit2"},{title:"Grid Voltage Limits (Stage 3)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3"}},command_id:"GridProtection.GridVoltLimit3"},{title:"Grid Frequency Limits (Stage 1)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1"}},command_id:"GridProtection.GridFreqLimit1"},{title:"Grid Frequency Limits (Stage 2)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2"}},command_id:"GridProtection.GridFreqLimit2"},{title:"Grid Frequency Limits (Stage 3)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3"}},command_id:"GridProtection.GridFreqLimit3"},{title:"Grid Voltage Trip Time",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1Time"}},command_id:"GridProtection.GridVoltLimit1Time"},{title:"Grid Voltage Trip Time (Stage 2)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2Time"}},command_id:"GridProtection.GridVoltLimit2Time"},{title:"Grid Voltage Trip Time (Stage 3)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3Time"}},command_id:"GridProtection.GridVoltLimit3Time"},{title:"Grid Frequency Trip Time (Stage 1)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1Time"}},command_id:"GridProtection.GridFreqLimit1Time"},{title:"Grid Frequency Trip Time (Stage 2)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2Time"}},command_id:"GridProtection.GridFreqLimit2Time"},{title:"Grid Frequency Trip Time (Stage 3)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3Time"}},command_id:"GridProtection.GridFreqLimit3Time"}]}]},{sectionTitle:"Grid Connection",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Permit to Operate",help:"Shows whether the inverter is permitted to operate in grid-connected mode.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Permit Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not Permitted",1:"Permitted"},telemetry:{model:"40104",block:"fixed",point:"PermitServiceStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"PermitServiceStatus"}},command_id:"GridConnection.PermitServiceStatus"},{title:"Ramp Rate",help:"How quickly inverter output is allowed to increase.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Ramp Rate (%/sec)",arg:"Rate",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"RampRate"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"RampRate"}},command_id:"GridConnection.RampRate"},{title:"Applicable Grid Voltage Range",help:"Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Vac)",arg:"ApplicableVoltageLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageLow"}},{name:"Upper Limit (Vac)",arg:"ApplicableVoltageHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableVoltage"}},command_id:"GridConnection.ApplicableVoltage"},{title:"Applicable Grid Frequency Range",help:"Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Hz)",arg:"ApplicableFrequencyLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyLow"}},{name:"Upper Limit (Hz)",arg:"ApplicableFrequencyHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableFrequency"}},command_id:"GridConnection.ApplicableFrequency"},{title:"Connection Delay Times",help:"Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Connection Delay (s)",arg:"ConnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConnectionDelayTime"}},{name:"Reconnection Delay (s)",arg:"ReconnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReconnectionDelayTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"DelayTime"}},command_id:"GridConnection.DelayTime"}]}]},{sectionTitle:"Grid Support",subsections:[{title:"Constant Power Factor",visibility:"default",collapsedByDefault:!0,points:[{title:"Power Factor Mode",help:"Shows whether constant power-factor control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive â€” No PF control",1:"Active â€” Constant PF"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactorModeStatus"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactorModeStatus"},{title:"Power Factor Setpoint",help:"The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorExcited"}},{name:"Power Factor (PF)",arg:"PowerFactor",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactor"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactor"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactor"}]},{title:"Constant Reactive Power",visibility:"default",collapsedByDefault:!0,points:[{title:"Reactive Power Mode",help:"Shows whether constant reactive-power control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeExcited"}},{name:"Status",arg:"Status",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no reactive power control",1:"Active - reactive power control"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ConstantReactivePowerModeStatus"}},command_id:"ConstantReactivePowerMode.ConstantReactivePowerModeStatus"},{title:"Reactive Power Setpoint",help:"Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Reactive Power (%)",arg:"Power",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReactivePowerPercentCMD"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ReactivePowerPercentCMD"}},command_id:"ConstantReactivePowerMode.ReactivePowerPercentCMD"}]},{title:"Volt-VAR (Voltage-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-VAR Mode",help:"Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-VAR control",1:"Active - Volt-VAR control"},telemetry:{model:"40104",block:"fixed",point:"VoltageReactivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VoltageReactivePowerMode"}},command_id:"VoltageReactivePowerMode.VoltageReactivePowerMode"},{title:"Autonomous Vref Adjustment",help:"Indicates whether the inverter autonomously adjusts its reference voltage (Vref).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Autonomous Adjustment",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"AutonomousVrefAdjustment"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"AutonomousVrefAdjustment"}},command_id:"VoltageReactivePowerMode.AutonomousVrefAdjustment"},{title:"Reference Voltage (Vref)",help:"Voltage reference used for Volt-VAR calculations.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Vref",arg:"Verf",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Verf"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Verf"}},command_id:"VoltageReactivePowerMode.Verf"},{title:"Vref Adjustment Time Constant",help:"Time constant applied when adjusting Vref.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Time Constant",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VrefAdjustmentTimeConstant"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VrefAdjustmentTimeConstant"}},command_id:"VoltageReactivePowerMode.VrefAdjustmentTimeConstant"},{title:"Volt-VAR Voltage Breakpoints",help:"Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"V1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV1"}},{name:"V2 (Voltage Point 2)",arg:"V2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV2"}},{name:"V3 (Voltage Point 3)",arg:"V3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV3"}},{name:"V4 (Voltage Point 4)",arg:"V4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"UnderOverVoltage"}},command_id:"VoltageReactivePowerMode.UnderOverVoltage"},{title:"Reactive Power Setpoint Q1",help:"Reactive power at voltage point V1 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q1 (Reactive Setpoint 1)",arg:"Q1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q1"}},command_id:"VoltageReactivePowerMode.Q1"},{title:"Reactive Power Setpoint Q2",help:"Reactive power at voltage point V2 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q2 (Reactive Setpoint 2)",arg:"Q2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q2"}},command_id:"VoltageReactivePowerMode.Q2"},{title:"Reactive Power Setpoint Q3",help:"Reactive power at voltage point V3 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q3 (Reactive Setpoint 3)",arg:"Q3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q3"}},command_id:"VoltageReactivePowerMode.Q3"},{title:"Reactive Power Setpoint Q4",help:"Reactive power at voltage point V4 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q4 (Reactive Setpoint 4)",arg:"Q4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q4"}},command_id:"VoltageReactivePowerMode.Q4"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-VAR changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VqOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageReactivePowerMode.OpenLoopResponseTime"}]},{title:"P-Q Mode (Active-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"P-Q Mode Status",help:"Shows whether Active/Reactive Power (P-Q) control mode is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no P-Q control",1:"Active - P-Q control"},telemetry:{model:"40104",block:"fixed",point:"PQModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"PQModeStatus"}},command_id:"ActivePowerReactivePowerMode.PQModeStatus"},{title:"P-Q Curve Points",help:"Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P1 Setpoint",arg:"P1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP1"}},{name:"P2 Setpoint",arg:"P2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP2"}},{name:"P3 Setpoint",arg:"P3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"P_QP"}},command_id:"ActivePowerReactivePowerMode.P_QP"}]},{title:"Volt-Watt (Voltage-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-Watt Mode",help:"Shows whether Volt-Watt (voltage-active power) control is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-Watt control",1:"Active - Volt-Watt control"},telemetry:{model:"40104",block:"fixed",point:"VoltageActivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltageActivePowerMode"}},command_id:"VoltageActivePowerMode.VoltageActivePowerMode"},{title:"Volt-Watt Voltage Breakpoints",help:"Voltage points that define the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"VoltWattV1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV1"}},{name:"V2 (Voltage Point 2)",arg:"VoltWattV2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattV"}},command_id:"VoltageActivePowerMode.VoltWattV"},{title:"Volt-Watt Power Setpoint",help:"Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P2 Setpoint",arg:"VoltWattP2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattP2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattP2"}},command_id:"VoltageActivePowerMode.VoltWattP2"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-Watt changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"VoltWattOpenLoopResponseTime",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageActivePowerMode.OpenLoopResponseTime"}]},{title:"Freq-Watt (Frequency-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Frequency-Active Power Mode",help:"Indicates whether frequency-power (Freq-Watt) control is currently enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"FrequencyActivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"FrequencyActivePowerModeStatus"}},command_id:"FrequencyActivePowerMode.FrequencyActivePowerModeStatus"},{title:"Open-Loop Response Time",help:"Response time applied to open-loop frequency-power adjustments.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"FreqWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"FrequencyActivePowerMode.OpenLoopResponseTime"},{title:"Over-Frequency Droop: Deadband",help:"Over Frequency Droop dbOF â€” Deadband around nominal frequency before active power reduction begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",unit:"Hz",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_dbOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_dbOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_dbOF"},{title:"Over-Frequency Droop: Gain (k)",help:"Over Frequency Droop kOF â€” Slope (gain k) of active power reduction versus frequency rise above nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_kOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_kOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_kOF"},{title:"Under-Frequency Droop: Deadband",help:"Under Frequency Droop dbUF â€” Deadband around nominal frequency before active power increase/response begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_dbUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_dbUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_dbUF"},{title:"Under-Frequency Droop: Gain (k)",help:"Under Frequency Droop kUF â€” Slope (gain k) of active power response versus frequency drop below nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_kUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_kUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_kUF"}]}]}]},{themeName:"Backup Power",sections:[{sectionTitle:"Backup Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Off-Grid Output",help:"Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"OffGridOutput"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"OffGridOutput"}},command_id:"BackupPower.OffGridOutput"},{title:"Backup (EPS) Output Voltage",help:"Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage (Vac)",arg:"Voltage",dtype:"enum",description:"",longdescription:"",unit:"Vac",meanings:{0:"208",1:"220",2:"230",3:"240",4:"277"},friendly_meanings:{0:"208 V",1:"220 V",2:"230 V",3:"240 V",4:"277 V"},telemetry:{model:"40104",block:"fixed",point:"EPSVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"EPSVoltage"}},command_id:"BackupPower.EPSVoltage"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Port Connection",help:"If using a generator, select which port it's connected to: eeither the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.  In Microgrid Mode, the inverter treats the generator as the primary AC source rather than the utility grid.  When microgrid mode is active, all charging and operating limits come from the Generator settings—not the Grid Charge limits. Remember to install CTs on any power wires attached to the grid port.  This includes a generator that is configured in microgrid mode.  ",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Generator connected to",arg:"Port",dtype:"enum",description:"",longdescription:"",meanings:{0:"GeneratorPort",1:"GridPort"},friendly_meanings:{0:"GEN port. Also pick this option if you are not using generator.",1:"Grid port - also called microgrid mode"},telemetry:{model:"40104",block:"fixed",point:"LinkedPort"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"LinkedPort"}},command_id:"Generator.LinkedPort"},{title:"Battery Charge Current Limit",help:"Sets the maximum DC current the inverter will send to the battery when charging from the generator.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Charge Current (Adc)",arg:"Current",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"BatteryChargeCurrentLimit"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"BatteryChargeCurrentLimit"}},command_id:"Generator.BatteryChargeCurrentLimit"},{title:"Generator Rated Power",help:"Specify the generator's continuous rated output power.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Rated Power (kW)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"GeneratorRatedPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorRatedPower"}},command_id:"Generator.GeneratorRatedPower"},{title:"Generator Cool-Down Time",help:"Sets the time the generator continues running after charging stops to allow for safe cooling.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Cool-Down Time (min)",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GeneratorCoolDownTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorCoolDownTime"}},command_id:"Generator.GeneratorCoolDownTime"},{title:"Generator Start/Stop SOC",help:"Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"Generator starts when battery drops to this level",longdescription:"",unit:"%",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socGenStart"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"Generator stops when battery charges to this level",longdescription:"",unit:"%",range:{min:5,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socGenEnd"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorSOC"}},command_id:"Generator.GeneratorSOC"},{title:"Generator Contactor Status",help:"Indicates the current state of the generator control contactor.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Contactor State",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"OFF",1:"ON"},friendly_meanings:{0:"Closed / On",1:"Open / Off"},telemetry:{model:"40101",block:"fixed",point:"genDryContactState"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GenDryContact"}},command_id:"Generator.GenDryContact"},{title:"Battery Quick Charge with Generator",help:"Start the generator to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Stop quick charge",1:"Start quick charge"},telemetry:{model:"40104",block:"fixed",point:"StartGeneratorExercise"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"StartGeneratorExercise"}},command_id:"Generator.StartGeneratorExercise"},{title:"Generator Boost",help:"Enables dynamic adjustment of generator charging power for faster battery recovery when needed.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"GeneratorBoost"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorBoost"}},command_id:"Generator.GeneratorBoost"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Generator Charge Mode",help:"Selects how the generator charges the battery. When enabled, the generator will charge the battery automatically based on voltage or SOC.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Mode",arg:"GenChg",dtype:"enum",description:"",longdescription:"",meanings:{0:"Based on SOC",1:"Based on Voltage"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.GenChg"},{title:"Generator Charge Start Voltage",help:"Sets the battery voltage at which the generator begins charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Start Voltage",arg:"GenChgStartVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:194,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgStartVolt"},{title:"Generator Charge End Voltage",help:"Sets the battery voltage at which the generator stops charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge End Voltage",arg:"GenChgEndVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:195,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgEndVolt"}]},{title:"Generator Exercise",visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Exercise Schedule",help:"Configure a recurring schedule for generator exercise runs. Select the day of the week and time when the generator should run automatically.",element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Day of Week",arg:"DayOfWeek",dtype:"enum",description:"",longdescription:"",meanings:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23}},{name:"Minute",arg:"Minute",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59}}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Plan",Element:"GeneratorExercise"}},command_id:"CGI.GeneratorExercise",widget:"generator-exercise",showRefresh:!0,showSetButton:!0}]}]}]},{themeName:"AC Coupled PV",sections:[{sectionTitle:"AC Coupled PV",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"AC Coupled PV",help:"Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"AC Coupled PV Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"ACCoupledPV"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCoupledPV"}},command_id:"ACCoupledPV.ACCoupledPV"},{title:"AC Coupled PV Start/Stop SOC",help:"Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"AC Coupled PV begins charging when SOC drops to this level",longdescription:"",unit:"%",range:{min:0,max:100},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOn"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"AC Coupled PV stops charging when SOC reaches this level",longdescription:"",unit:"%",range:{min:0,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOff"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCouplePVSOC"}},command_id:"ACCoupledPV.ACCouplePVSOC"}]}]}]},{themeName:"Smart Load",sections:[{sectionTitle:"Smart Load",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Use Smart Load",help:"Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disabled",1:"Enabled"},telemetry:{model:"40104",block:"fixed",point:"SmartLoad"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoad"}},command_id:"LoadShedding.SmartLoad"},{title:"Smart Load On-Grid Behavior",help:"Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"On-Grid Always-On Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Follow normal rules",1:"Always On When Grid Present"},telemetry:{model:"40104",block:"fixed",point:"OnGridAlwaysOn"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"OnGridAlwaysOn"}},command_id:"LoadShedding.OnGridAlwaysOn"},{title:"Smart Load Start Power",help:"Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"PV Power Above (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"StartPVPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"StartPVPower"}},command_id:"LoadShedding.StartPVPower"},{title:"Smart Load SOC Limits",help:"Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start When Battery SOC Is Above (%)",arg:"OnSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},less_than:"OffSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOnSoc"}},{name:"Stop When Battery SOC Is Below (%)",arg:"OffSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},greater_than:"OnSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoadSOC"}},command_id:"LoadShedding.SmartLoadSOC"}]}]}]}],ob={themes:rb},da=[{id:"envy-04237218B0",label:"⭐ Envy - 04237218B0",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237218B0"},modbusSlaveId:1},{id:"envy-04237219C3",label:"Envy - 04237219C3",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237219C3"},modbusSlaveId:2}],sb=void 0;function db(e,t){const[n,l]=W.useState(e),[i,a]=W.useState(t),[r,o]=W.useState(!1),[s,d]=W.useState(null);return W.useEffect(()=>{},[]),{pageRegistry:n,pageLookup:i,isLoading:r,loadError:s,themeFile:sb}}function cb(){const[e,t]=W.useState("");return W.useEffect(()=>{const n=()=>{const l=document.querySelectorAll('[id^="theme-"]');let i="";l.forEach(a=>{const r=a.getBoundingClientRect();r.top<=window.innerHeight*.3&&r.bottom>0&&(i=a.id)}),i&&i!==e&&t(i)};return n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[e]),e}function ub(){const[e,t]=W.useState(""),n=W.useCallback((l,i)=>{var r,o,s,d;if(!i.trim())return{matches:!0,helpTextMatch:!1};const a=i.toLowerCase();if((r=l.title)!=null&&r.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1};if((o=l.help)!=null&&o.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!0};for(const u of l.entries){if((s=u.name)!=null&&s.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1};if(u.friendly_meanings){for(const p of Object.values(u.friendly_meanings))if(p.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1}}if((d=u.description)!=null&&d.toLowerCase().includes(a))return{matches:!0,helpTextMatch:!1}}return{matches:!1,helpTextMatch:!1}},[]);return{searchQuery:e,setSearchQuery:t,pointMatchesSearch:n}}function pb({themes:e,activeSection:t,selectedEquipmentId:n,onEquipmentChange:l,equipmentOptions:i}){return c.jsxs("aside",{className:"w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-[11px] text-slate-500 uppercase font-medium mb-1 block",children:"Equipment"}),c.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800",value:n,onChange:a=>l(a.target.value),children:i.map(a=>c.jsx("option",{value:a.id,children:a.label},a.id))})]}),c.jsxs("nav",{className:"text-sm text-slate-800",children:[c.jsx("div",{className:"text-emerald-600 font-semibold mb-2",children:"Navigation"}),c.jsxs("div",{className:"flex flex-col gap-3",children:[e.map((a,r)=>{const o=`theme-${r}`,s=t===o||t.startsWith(`${o}-section`);return c.jsxs("div",{children:[c.jsxs("div",{className:"relative",children:[s&&c.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r"}),c.jsx("button",{className:`font-semibold text-xs uppercase tracking-wide mb-1 px-2 hover:text-emerald-600 transition-colors w-full text-left ${s?"text-emerald-600":"text-slate-900"}`,onClick:()=>{var d;(d=document.getElementById(o))==null||d.scrollIntoView({behavior:"smooth",block:"start"})},children:a.themeName})]}),c.jsx("ul",{className:"pl-2 flex flex-col gap-1 text-slate-700",children:a.sections.map((d,u)=>{const p=`${o}-section-${u}`,f=t===p;return c.jsxs("li",{className:"relative",children:[f&&c.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),c.jsx("button",{className:`px-2 py-1 hover:bg-slate-50 rounded text-xs w-full text-left transition-colors ${f?"text-blue-600 font-medium bg-blue-50":"text-slate-700"}`,onClick:()=>{var m;(m=document.getElementById(p))==null||m.scrollIntoView({behavior:"smooth",block:"start"})},children:d.sectionTitle})]},`${d.sectionTitle}-${u}`)})})]},`${a.themeName}-${r}`)}),!e.length&&c.jsx("div",{className:"text-xs text-slate-500",children:"No themes defined."})]})]})]})}function mb({searchQuery:e,onSearchChange:t,lastUpdatedLabel:n}){return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"text-xs text-slate-500",children:["Last Updated At: ",n]}),c.jsx("div",{className:"flex flex-col md:flex-row md:items-start gap-3 md:gap-4",children:c.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[c.jsx("div",{className:"text-xl font-semibold text-slate-900 leading-tight",children:"Site Configuration"}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("div",{className:"relative flex-1 max-w-md",children:[c.jsx("input",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800",placeholder:"Search…",value:e,onChange:l=>t(l.target.value)}),e&&c.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",onClick:()=>t(""),title:"Clear search",children:"✕"})]}),c.jsxs("button",{className:"text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1",children:[c.jsx("span",{children:"⟳"}),c.jsx("span",{children:"Refresh"})]})]})]})})]})}function fb(e){const t={};if(e.widget==="generator-exercise")return e.entries.forEach(i=>{i.dtype,t[i.arg]=""}),t;const n=e.entries.filter(i=>i.dtype==="Number"&&i.range!==void 0),l=n.length>=2;return e.entries.forEach((i,a)=>{var r,o;if(i.value!==void 0){t[i.arg]=i.dtype==="Number"&&i.value!==""?Number(i.value):i.value;return}if(i.dtype==="Number"){const s=i.range;if(!s){t[i.arg]=0;return}if(l){const d=s.max-s.min,u=a/Math.max(n.length-1,1);i.less_than?t[i.arg]=Math.round(s.min+d*.3):i.greater_than?t[i.arg]=Math.round(s.min+d*.7):t[i.arg]=Math.round(s.min+d*u)}else t[i.arg]=s.min;return}if(i.dtype==="enum"){const s=Object.keys(i.meanings??{})[0];if(s){const d=((r=i.friendly_meanings)==null?void 0:r[s])??((o=i.meanings)==null?void 0:o[s])??"";t[i.arg]=d}else t[i.arg]="";return}if(i.dtype&&i.dtype.startsWith("bitfield")){const s={};i.meanings&&Object.keys(i.meanings).forEach(d=>{s[d]=!1}),t[i.arg]=s;return}t[i.arg]=""}),t}function yb(e,t){const n=e.entries.some(i=>{var a;return(a=i.protocol)==null?void 0:a.matter});let l;return n?l=e.entries.filter(i=>{var a;return(a=i.protocol)==null?void 0:a.matter}).map(i=>({MEP:i.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:i.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:i.protocol.matter.Element||e.protocol.matter.Element})):l=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:l,thingId:t}}}function gb(e,t,n){const l=e.entries.some(a=>{var r;return(r=a.protocol)==null?void 0:r.matter});let i;return l?i=e.entries.filter(a=>{var r;return(r=a.protocol)==null?void 0:r.matter}).map(a=>({MEP:a.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:a.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:a.protocol.matter.Element||e.protocol.matter.Element,arguments:{[a.arg]:t[a.arg]}})):i=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:t}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:e.element_type==="service"||e.access==="Invoke"?"Invoke":"Write",data:{Elements:i,thingId:n}}}function bb(e,t){const l=e.protocol.modbus.register_type===3?3:4;return{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Read",timeout:5,data:{type:"RTU",uartPort:1,slaveId:t,address:e.protocol.modbus.address,function:l,registerNumber:e.protocol.modbus.size}}}function hb(e,t,n){var r;const l=e.protocol.modbus.size>1?16:6,i=(r=e.entries[0])==null?void 0:r.arg;let a=i?t[i]:0;return e.protocol.modbus&&typeof a=="number"&&(a=Math.round(a)),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:n,address:e.protocol.modbus.address,function:l,value:a}}}function _b(e,t){return{version:"1.0",requestId:Date.now(),method:"Read",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,Element:e.protocol.cgi.Element,thingId:t}}}function xb(e,t,n){const l=t.DayOfWeek!==""&&t.DayOfWeek!==null&&t.DayOfWeek!==void 0?typeof t.DayOfWeek=="number"?t.DayOfWeek:parseInt(String(t.DayOfWeek),10):0,i=t.Hour!==""&&t.Hour!==null&&t.Hour!==void 0?typeof t.Hour=="number"?t.Hour:parseInt(String(t.Hour),10):0,r=`${t.Minute!==""&&t.Minute!==null&&t.Minute!==void 0?typeof t.Minute=="number"?t.Minute:parseInt(String(t.Minute),10):0} ${i} * * ${l}`;return{version:"1.0",requestId:Date.now(),method:"Invoke",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,cronTimer:r,Element:e.protocol.cgi.Element,thingId:n}}}function vb(e,t){const n={...t},l=e.protocol.modbus!==void 0||e.protocol.cgi!==void 0;return e.entries.forEach(i=>{if(i.dtype!=="enum"||!i.meanings)return;const a=n[i.arg];if(a==null||a==="")return;const r=Object.entries(i.meanings).find(([o,s])=>{var u;const d=((u=i.friendly_meanings)==null?void 0:u[o])??s;return a===d||a===s});r&&(n[i.arg]=l?parseInt(r[0],10):r[1])}),n}function wb(e,t){const n={...t};return e.entries.forEach(l=>{if(!l.dtype||!l.dtype.startsWith("bitfield"))return;const i=n[l.arg]||{};let a=0;Object.entries(i).forEach(([r,o])=>{o&&(a|=1<<parseInt(r,10))}),n[l.arg]=a}),n}function Cb(e,t){var i,a;const n=t.thingId,l=t.modbusSlaveId;return e.element_type==="custom"&&e.widget==="generator-exercise"&&((i=e.protocol)!=null&&i.cgi)?_b(e,n):(a=e.protocol)!=null&&a.matter?yb(e,n):e.protocol.modbus?bb(e,l):{}}function Sb(e,t,n){var r,o;const l=n.thingId,i=n.modbusSlaveId;let a=vb(e,t);return a=wb(e,a),e.element_type==="custom"&&e.widget==="generator-exercise"&&((r=e.protocol)!=null&&r.cgi)?xb(e,a,l):(o=e.protocol)!=null&&o.matter?gb(e,a,l):e.protocol.modbus?hb(e,a,i):{}}function Lb(e,t){const[n,l]=W.useState(fb(e)),i=W.useCallback((o,s)=>{l(d=>({...d,[o]:s}))},[]),a=W.useCallback(()=>Cb(e,t),[e,t]),r=W.useCallback(()=>Sb(e,n,t),[e,n,t]);return{formState:n,setFormState:l,handleFieldChange:i,handleRefresh:a,handleSet:r}}function ca(){const[e,t]=W.useState(!1),[n,l]=W.useState(null),i=W.useCallback(o=>{o!==void 0&&l(o),t(!0)},[]),a=W.useCallback(()=>{t(!1)},[]),r=W.useCallback(()=>{t(o=>!o)},[]);return{isOpen:e,data:n,open:i,close:a,toggle:r,setData:l}}const kb=({onClick:e})=>c.jsx("button",{type:"button",onClick:e,className:"text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer",children:"i"}),Pb=()=>c.jsx("span",{className:"text-base leading-none",children:"⟳"}),Db=()=>c.jsx("span",{className:"text-base leading-none",children:"🕐"}),Tb=()=>c.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-500 border border-slate-300 font-medium",children:"Read Only"});function Nb({point:e,readOnly:t,helpTextMatch:n=!1,shouldShowHistory:l,shouldShowRefresh:i,shouldShowSetButton:a,setButtonAppearance:r,onHelpClick:o,onHistoryClick:s,onRefreshClick:d,onSetClick:u}){return c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-3",children:[c.jsxs("div",{className:"flex items-start gap-2",children:[c.jsx("div",{className:"text-slate-800 text-sm font-semibold leading-tight",children:e.title}),e.help&&c.jsxs("div",{className:"mt-0.5 relative",children:[c.jsx(kb,{onClick:o}),n&&c.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"})]}),t&&c.jsx(Tb,{})]}),c.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l&&c.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"View historical data",onClick:s,children:c.jsx(Db,{})}),i&&c.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"Refresh from device",onClick:d,children:c.jsx(Pb,{})}),a&&c.jsx("button",{className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${r}`,disabled:t,onClick:u,children:"Set"})]})]})}function Ab({point:e,formState:t,readOnly:n,onChange:l}){const i=e.entries.find(o=>o.arg==="Sec"),a=()=>{const o=t.Hour??0,s=t.Min??0,d=(t.Year??0)+2e3,u=String(t.Mon??1).padStart(2,"0"),p=String(t.Day??1).padStart(2,"0"),f=String(o).padStart(2,"0"),m=String(s).padStart(2,"0");return`${d}-${u}-${p}T${f}:${m}`},r=o=>{const s=new Date(o),d=s.getHours(),u=s.getMinutes();l("Year",s.getFullYear()-2e3),l("Mon",s.getMonth()+1),l("Day",s.getDate()),l("Hour",d),l("Min",u),i&&l("Sec",0)};return c.jsx("div",{className:"flex flex-col gap-2",children:c.jsx("input",{type:"datetime-local",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:a(),onChange:o=>r(o.target.value)})})}const ai="00:00";function sr({label:e,value:t,readOnly:n,onChange:l,onClear:i}){const a=!n&&t!==ai;return c.jsxs("div",{className:"w-[150px] flex-shrink-0 flex flex-col gap-1",children:[c.jsx("label",{className:"text-slate-600 text-xs font-medium",children:e}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:t,onChange:r=>l(r.target.value)}),a&&c.jsx("button",{type:"button",className:"absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700",onClick:i,"aria-label":`Clear ${e.toLowerCase()}`,children:"✕"})]})]})}function Nm({point:e,formState:t,readOnly:n,onChange:l}){const i=e.entries.find(g=>g.arg.includes("StartHour")||g.arg.includes("Start_hour")||g.arg.includes("StartTime_h")),a=e.entries.find(g=>g.arg.includes("StartMin")||g.arg.includes("Start_minute")||g.arg.includes("StartTime_m")),r=e.entries.find(g=>g.arg.includes("EndHour")||g.arg.includes("End_hour")||g.arg.includes("EndTime_h")),o=e.entries.find(g=>g.arg.includes("EndMin")||g.arg.includes("End_minute")||g.arg.includes("EndTime_m")),s=()=>{if(i&&a){const g=String(t[i.arg]??0).padStart(2,"0"),_=String(t[a.arg]??0).padStart(2,"0");return`${g}:${_}`}return ai},d=()=>{if(r&&o){const g=String(t[r.arg]??0).padStart(2,"0"),_=String(t[o.arg]??0).padStart(2,"0");return`${g}:${_}`}return ai},u=g=>{const[_,b]=g.split(":"),y=parseInt(_,10),h=parseInt(b,10);i&&a&&(l(i.arg,y),l(a.arg,h))},p=g=>{const[_,b]=g.split(":"),y=parseInt(_,10),h=parseInt(b,10);r&&o&&(l(r.arg,y),l(o.arg,h))},f=()=>{n||(u(ai),p(ai))},m=s(),x=d();return c.jsxs("div",{className:"flex items-end gap-4",children:[c.jsx(sr,{label:"Start Time",value:m,readOnly:n,onChange:u,onClear:f}),c.jsx(sr,{label:"End Time",value:x,readOnly:n,onChange:p,onClear:f})]})}function Eb({point:e,formState:t,readOnly:n,onChange:l}){const i=new Map;e.entries.forEach(d=>{const u=d.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);if(!u)return;const[,p,f,m]=u,x=parseInt(f,10);i.has(x)||i.set(x,{id:x});const g=i.get(x),_=m.toLowerCase();p.toLowerCase()==="starttime"?_==="h"?g.startHourArg=d.arg:g.startMinArg=d.arg:_==="h"?g.endHourArg=d.arg:g.endMinArg=d.arg});const a=Array.from(i.values()).sort((d,u)=>d.id-u.id);if(a.length===0)return c.jsx(Nm,{point:e,formState:t,readOnly:n,onChange:l});const r=(d,u)=>{const p=d!==void 0?t[d]:0,f=u!==void 0?t[u]:0,m=typeof p=="number"?p:parseInt(p??0,10)||0,x=typeof f=="number"?f:parseInt(f??0,10)||0;return`${String(m).padStart(2,"0")}:${String(x).padStart(2,"0")}`},o=(d,u,p)=>{const[f,m]=p.split(":"),x=parseInt(f,10),g=parseInt(m,10);u==="start"?(d.startHourArg&&l(d.startHourArg,x),d.startMinArg&&l(d.startMinArg,g)):(d.endHourArg&&l(d.endHourArg,x),d.endMinArg&&l(d.endMinArg,g))},s=d=>{n||(d.startHourArg&&l(d.startHourArg,0),d.startMinArg&&l(d.startMinArg,0),d.endHourArg&&l(d.endHourArg,0),d.endMinArg&&l(d.endMinArg,0))};return c.jsx("div",{className:"flex flex-col gap-4",children:a.map(d=>{const u=r(d.startHourArg,d.startMinArg),p=r(d.endHourArg,d.endMinArg),f=()=>s(d);return c.jsxs("div",{className:"flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3",children:[c.jsxs("div",{className:"text-xs font-semibold uppercase text-slate-600",children:["Grid Charge Window ",d.id]}),c.jsxs("div",{className:"flex items-end gap-4",children:[c.jsx(sr,{label:"Start Time",value:u,readOnly:n,onChange:m=>o(d,"start",m),onClear:f}),c.jsx(sr,{label:"End Time",value:p,readOnly:n,onChange:m=>o(d,"end",m),onClear:f})]})]},d.id)})})}function Vb({formState:e,readOnly:t,onChange:n}){const l=e.DayOfWeek!==""?e.DayOfWeek:null,i=e.Hour!==""?e.Hour:null,a=e.Minute!==""?e.Minute:null,r=()=>i===null||a===null?"":`${String(i).padStart(2,"0")}:${String(a).padStart(2,"0")}`,o=u=>{if(!u){n("Hour",""),n("Minute","");return}const[p,f]=u.split(":");n("Hour",parseInt(p,10)),n("Minute",parseInt(f,10))},s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let d="No schedule configured";return l!==null&&i!==null&&a!==null&&(d=`Every ${s[l]} at ${String(i).padStart(2,"0")}:${String(a).padStart(2,"0")}`),c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Day of Week"}),c.jsxs("select",{className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:l!==null?l:"",onChange:u=>n("DayOfWeek",u.target.value===""?"":Number(u.target.value)),children:[c.jsx("option",{value:"",children:"Select day..."}),s.map((u,p)=>c.jsx("option",{value:p,children:u},p))]})]}),c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Time"}),c.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:r(),onChange:u=>o(u.target.value)})]})]}),c.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-3",children:[c.jsx("div",{className:"text-xs text-slate-600 font-medium mb-1",children:"Schedule Preview"}),c.jsx("div",{className:"text-sm text-slate-800",children:d})]})]})}function Rb({point:e,equipment:t,readOnly:n}){const[l,i]=W.useState(!1),[a,r]=W.useState(null),o=W.useMemo(()=>{var d;return(d=e.entries)!=null&&d.length?e.entries.map(u=>{const p=u.name||u.arg,f=u.description||u.longdescription||"Value reported by inverter firmware";return`${p}: ${f}`}):["Voltage Ride-Through Windows: IEEE 1547 Category B","Frequency Ride-Through Windows: IEEE 1547 Category B","Volt-VAR Curve: UL 1741 SA Default Profile","Frequency-Watt Behavior: Droop Enabled, 5% Slope","Anti-Islanding Method: Active (Sandia)"]},[e.entries]),s=()=>{if(!(n||l)){r(null),i(!0);try{const d=new Date,u=d.toISOString().replace(/[:.]/g,"-"),p=d.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),m=["Fortress Power Envy Inverter","UL Compliance Report","This is just a placeholder report for testing purposes.  Dont base the real implementation on this.","".padEnd(20,"="),`Generated: ${p}`,`Device: ${t.label}`,"","Purpose","This report captures the active grid settings configured on the inverter so they can be shared with AHJs, utilities, or inspectors who require UL 1741 / IEEE 1547 conformance evidence.","","Key Grid Parameters",...o.map(b=>`• ${b}`),"","Statements of Compliance","- Grid support functions follow UL 1741 SA requirements for exporting inverters.","- Trip settings align with local utility specifications (for example, California Rule 21, Puerto Rico LUMA).","- Anti-islanding protections remain enabled and tested per UL procedures.","","Notes","This summary reflects the values active on the device at the time of export. Re-run the report after making configuration changes to maintain an auditable paper trail."].join(`
`),x=new Blob([m],{type:"text/plain"}),g=URL.createObjectURL(x),_=document.createElement("a");_.href=g,_.download=`ul-compliance-${t.id}-${u}.txt`,_.click(),URL.revokeObjectURL(g)}catch(d){console.error("Failed to generate UL Compliance report",d),r("Unable to generate the report. Please try again.")}finally{i(!1)}}};return c.jsxs("div",{className:"flex flex-col gap-3",children:[a&&c.jsx("div",{className:"rounded border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600",children:a}),c.jsx("button",{type:"button",className:`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition ${n||l?"border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`,disabled:n||l,onClick:s,children:l?"Preparing Report…":"Download UL Compliance Report"}),c.jsx("div",{className:"text-xs text-slate-500",children:"The downloaded text file includes device metadata, ride-through windows, and other grid-support functions so you can keep documentation for AHJ or utility reviews."})]})}function Gb({entries:e,formState:t,readOnly:n,onChange:l}){var g;const[i,a]=W.useState(null),r=W.useRef(null),o=[{bg:"bg-emerald-500",text:"text-emerald-600",border:"border-emerald-500"},{bg:"bg-rose-500",text:"text-rose-600",border:"border-rose-500"},{bg:"bg-blue-500",text:"text-blue-600",border:"border-blue-500"},{bg:"bg-purple-500",text:"text-purple-600",border:"border-purple-500"},{bg:"bg-orange-500",text:"text-orange-600",border:"border-orange-500"},{bg:"bg-pink-500",text:"text-pink-600",border:"border-pink-500"},{bg:"bg-indigo-500",text:"text-indigo-600",border:"border-indigo-500"},{bg:"bg-teal-500",text:"text-teal-600",border:"border-teal-500"},{bg:"bg-cyan-500",text:"text-cyan-600",border:"border-cyan-500"},{bg:"bg-amber-500",text:"text-amber-600",border:"border-amber-500"},{bg:"bg-lime-500",text:"text-lime-600",border:"border-lime-500"},{bg:"bg-fuchsia-500",text:"text-fuchsia-600",border:"border-fuchsia-500"}],s=(g=e[0])==null?void 0:g.range;if(!s)return null;const{min:d,max:u}=s,p=_=>{let b=d,y=u;if(_.greater_than){const h=t[_.greater_than];typeof h=="number"&&(b=Math.max(b,h+1))}if(_.less_than){const h=t[_.less_than];typeof h=="number"&&(y=Math.min(y,h-1))}return{min:b,max:y}},f=(_,b)=>{const y=p(_),h=Math.max(y.min,Math.min(y.max,b));l(_.arg,h)},m=(_,b)=>{if(n)return;b.preventDefault(),a(_);const y=r.current;if(!y)return;const h=k=>{const L=y.getBoundingClientRect(),S=k.clientX-L.left,v=Math.max(0,Math.min(100,S/L.width*100)),A=Math.round(d+v/100*(u-d));f(e[_],A)},w=()=>{a(null),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",w)},x=e.length>=8?"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4":"grid-cols-2";return c.jsxs("div",{className:"flex flex-col gap-3 text-sm",children:[c.jsx("div",{className:`grid ${x} gap-3`,children:e.map((_,b)=>{const y=o[b%o.length],h=t[_.arg]??d,w=p(_);return c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsxs("div",{className:`text-[11px] uppercase font-semibold flex items-center gap-1.5 ${y.text}`,children:[c.jsx("span",{className:`w-2 h-2 rounded-full ${y.bg}`}),c.jsx("span",{children:_.name??""}),_.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase ml-auto",children:_.unit})]}),c.jsx("input",{type:"number",className:`w-full rounded border ${y.border} bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500`,disabled:n,value:h,min:w.min,max:w.max,onChange:k=>{const L=k.target.value===""?w.min:Number(k.target.value);f(_,L)}})]},_.arg)})}),c.jsxs("div",{className:"relative w-full pt-2 pb-3",children:[c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-2",children:[c.jsx("span",{children:d}),c.jsx("span",{children:u})]}),c.jsxs("div",{className:"relative overflow-hidden",ref:r,children:[c.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full -translate-y-1/2"}),c.jsx("div",{className:"relative overflow-hidden",style:{height:"24px"},children:e.map((_,b)=>{const y=o[b%o.length],h=t[_.arg]??d,w=(h-d)/(u-d)*100,k=e.length-b,L=i===b?100:k;return c.jsx("div",{children:c.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 ${n?"cursor-not-allowed":"cursor-grab active:cursor-grabbing"}`,style:{left:`${w}%`,transform:"translate(-50%, -50%)",width:"40px",height:"24px",zIndex:L},onMouseDown:S=>m(b,S),children:c.jsx("div",{className:`absolute top-1/2 left-1/2 w-5 h-5 rounded-full ${y.bg} border-2 border-white shadow-lg pointer-events-none transition-shadow`,style:{transform:"translate(-50%, -50%)",zIndex:1,boxShadow:i===b?"0 0 0 3px rgba(0,0,0,0.1)":void 0},title:_.name?`${_.name}: ${h}`:String(h)})})},_.arg)})})]})]})]})}function Mb({entry:e,value:t,onChange:n,readOnly:l,point:i}){var x,g,_,b,y,h,w;const a="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",r=e.dtype==="enum"||e.dtype&&e.dtype.startsWith("bitfield")?"col-span-full flex flex-col gap-1 text-sm":"flex flex-col gap-1 text-sm";if(e.dtype&&e.dtype.startsWith("bitfield")&&e.meanings){const k=t||{},L=S=>{const v={...k,[S]:!k[S]};n(v)};return c.jsxs("div",{className:r,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name??""}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsx("div",{className:"flex flex-col gap-2 py-1",children:Object.entries(e.meanings).map(([S,v])=>c.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:k[S]||!1,onChange:()=>L(S)}),c.jsx("span",{className:"text-sm text-slate-800",children:v})]},S))}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}if(e.dtype==="enum"&&e.meanings){const k=Object.entries(e.meanings).map(([v,A])=>{var U;const R=((U=e.friendly_meanings)==null?void 0:U[v])??A;return{wireVal:v,friendly:R}});if(k.length<=3)return c.jsxs("div",{className:r,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsx("div",{className:"flex flex-col gap-2 py-1",children:k.map(v=>c.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{type:"radio",name:e.arg,className:"w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:t===v.friendly,onChange:()=>n(v.friendly)}),c.jsx("span",{className:"text-sm text-slate-800",children:v.friendly})]},v.wireVal))}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]});const L=k.reduce((v,A)=>A.friendly.length>v.length?A.friendly:v,""),S=Math.min(Math.max(L.length*8.5+50,220),480);return c.jsxs("div",{className:r,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name??""}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",style:{minWidth:`${S}px`,maxWidth:"100%"},disabled:l,value:t??"",onChange:v=>n(v.target.value),children:k.map(v=>c.jsx("option",{value:v.friendly,children:v.friendly},v.wireVal))}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}const o=e.dtype==="Number",s=o&&e.range!==void 0,d=((x=i==null?void 0:i.protocol)==null?void 0:x.modbus)!==void 0,u=(_=(g=i==null?void 0:i.protocol)==null?void 0:g.modbus)==null?void 0:_.scale_factor,p=d&&u!==void 0&&o,f=p&&t!==null&&t!==void 0&&t!==""?Number(t)*u:t,m=k=>{if(o){const L=k===""?"":Number(k);if(p&&L!==""){const S=Math.round(L/u);n(S)}else n(L)}else n(k)};return c.jsxs("div",{className:r,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("input",{type:o?"number":"text",className:s?"w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500":a,disabled:l,value:f??"",min:(b=e.range)==null?void 0:b.min,max:(y=e.range)==null?void 0:y.max,onChange:k=>m(k.target.value)}),s&&c.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[c.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.min}),c.jsx("input",{type:"range",className:"flex-1",disabled:l,value:f??e.range.min,min:(h=e.range)==null?void 0:h.min,max:(w=e.range)==null?void 0:w.max,onChange:k=>{const L=Number(k.target.value);if(p){const S=Math.round(L/u);n(S)}else n(L)}}),c.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.max})]})]}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug",children:e.longdescription})]})}function Fb({point:e,formState:t,readOnly:n,isInvoke:l,setButtonAppearance:i,onChange:a,onInvokeClick:r,equipment:o}){const s=e.entries.filter(u=>u.dtype==="Number"&&u.range!==void 0),d=!e.widget&&s.length>=2&&s.length===e.entries.length;return c.jsxs(c.Fragment,{children:[e.widget==="datetime"?c.jsx(Ab,{point:e,formState:t,readOnly:n,onChange:a}):e.widget==="timerange-multi"?c.jsx(Eb,{point:e,formState:t,readOnly:n,onChange:a}):e.widget==="timerange"?c.jsx(Nm,{point:e,formState:t,readOnly:n,onChange:a}):e.widget==="generator-exercise"?c.jsx(Vb,{formState:t,readOnly:n,onChange:a}):e.widget==="ul-compliance-report"?c.jsx(Rb,{point:e,equipment:o,readOnly:n}):d?c.jsx(Gb,{entries:s,formState:t,readOnly:n,onChange:a}):c.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4",children:e.entries.map(u=>c.jsx(Mb,{entry:u,value:t[u.arg],readOnly:n,point:e,onChange:p=>a(u.arg,p)},u.arg))}),l&&e.widget!=="generator-exercise"&&e.widget!=="ul-compliance-report"&&e.showInvokeButton!==!1&&c.jsx("div",{className:"mt-4 flex items-center gap-2",children:c.jsx("button",{type:"button",className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${i}`,disabled:n,onClick:r,children:e.invokeButtonText||"Invoke"})})]})}const Ob={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl"};function Cd({isOpen:e,onClose:t,title:n,icon:l,children:i,showFooter:a=!0,footerContent:r,maxWidth:o="lg"}){if(W.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&t()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[e,t]),!e)return null;const s=c.jsx("div",{className:"flex justify-end p-4 border-t border-slate-200 bg-slate-50",children:c.jsx("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",onClick:t,children:"Close"})});return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4",onClick:t,children:c.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${Ob[o]} border border-slate-300 overflow-hidden`,onClick:d=>d.stopPropagation(),children:[c.jsxs("div",{className:"flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[l,c.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:n})]}),c.jsx("button",{type:"button",className:"text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1",onClick:t,children:"✕"})]}),c.jsx("div",{className:"p-5 max-h-[60vh] overflow-y-auto",children:i}),a&&(r||s)]})})}function Bb({title:e,content:t,isOpen:n,onClose:l}){const i=r=>r.split(/(\*\*[^*]+\*\*)/g).map((s,d)=>s.startsWith("**")&&s.endsWith("**")?c.jsx("strong",{className:"font-semibold text-slate-900",children:s.slice(2,-2)},d):c.jsx("span",{children:s},d)),a=c.jsx("div",{className:"text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium",children:"i"});return c.jsx(Cd,{isOpen:n,onClose:l,title:e,icon:a,children:c.jsx("div",{className:"text-sm text-slate-700 leading-relaxed whitespace-pre-wrap",children:i(t)})})}function Ib({point:e,isOpen:t,onClose:n}){const l=[];e.entries.forEach(a=>{var r,o;if((r=a.telemetry)!=null&&r.model&&((o=a.telemetry)!=null&&o.point)){const s=`${a.telemetry.model}.${a.telemetry.point}`;l.includes(s)||l.push(s)}});const i=c.jsx("span",{className:"text-slate-500 text-xl",children:"🕐"});return c.jsxs(Cd,{isOpen:t,onClose:n,title:"Historical Data",icon:i,children:[c.jsx("div",{className:"text-sm text-slate-700 leading-relaxed mb-4",children:"In the real UI, this button would link you to the historical data page showing the last 24 hours of data for the following telemetry points:"}),l.length>0?c.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4",children:[c.jsx("div",{className:"text-xs font-semibold text-slate-600 uppercase mb-2",children:"Telemetry Points"}),c.jsx("div",{className:"flex flex-col gap-2",children:l.map((a,r)=>c.jsx("div",{className:"font-mono text-sm text-emerald-600 bg-white border border-emerald-200 rounded px-3 py-2",children:a},r))})]}):c.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800",children:"No telemetry points configured for this setting."})]})}function Yc({isOpen:e,onClose:t,title:n,payload:l,type:i="set"}){const a=i==="refresh"?c.jsx("span",{children:"⟳"}):c.jsx("span",{children:"📤"});return c.jsxs(Cd,{isOpen:e,onClose:t,title:n,icon:a,maxWidth:"xl",children:[c.jsx("div",{className:"text-sm text-slate-700 mb-3",children:"This is a preview of the command that would be sent:"}),c.jsx("pre",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800",children:JSON.stringify(l,null,2)})]})}function Xc({point:e,helpTextMatch:t=!1,equipment:n}){const{formState:l,handleFieldChange:i,handleRefresh:a,handleSet:r}=Lb(e,n),o=ca(),s=ca(),d=ca(),u=ca(),p=()=>o.open(),f=()=>s.open(),m=()=>{const S=a();u.open(S)},x=()=>{const S=r();d.open(S)},_=(typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service",b=e.readOnly||e.access==="R",y=b?"border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-400 bg-white text-slate-700 hover:bg-slate-50",h=e.entries.some(S=>{var v,A;return((v=S.telemetry)==null?void 0:v.model)&&((A=S.telemetry)==null?void 0:A.point)}),w=e.showHistory!==void 0?e.showHistory:h&&!_,k=_?e.showRefresh===!0:e.showRefresh!==!1,L=e.showSetButton!==void 0?e.showSetButton:!_;return c.jsxs("div",{className:"rounded-xl border border-slate-300 bg-white p-4 shadow-sm",children:[c.jsx(Nb,{point:e,readOnly:b,helpTextMatch:t,shouldShowHistory:w,shouldShowRefresh:k,shouldShowSetButton:L,setButtonAppearance:y,onHelpClick:p,onHistoryClick:f,onRefreshClick:m,onSetClick:x}),c.jsx(Fb,{point:e,formState:l,readOnly:b,isInvoke:_,setButtonAppearance:y,onChange:i,onInvokeClick:x,equipment:n}),c.jsx(Bb,{title:e.title,content:e.help||"",isOpen:o.isOpen,onClose:o.close}),c.jsx(Ib,{point:e,isOpen:s.isOpen,onClose:s.close}),c.jsx(Yc,{title:"Command Preview",payload:d.data,isOpen:d.isOpen,onClose:d.close}),c.jsx(Yc,{title:"Read Command Preview",payload:u.data,isOpen:u.isOpen,onClose:u.close,type:"refresh"})]})}function jb({subsection:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){const[i,a]=W.useState(!e.collapsedByDefault),r=e.points.map(s=>({point:s,searchResult:n(s,t)})).filter(({searchResult:s})=>s.matches);if(r.length===0)return null;const o=t.trim()?!0:i;return e.collapsedByDefault?c.jsxs("div",{className:"border border-slate-300 bg-white rounded-xl shadow-sm mb-8",children:[c.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-2 text-left",onClick:()=>a(s=>!s),children:[c.jsx("span",{className:"text-slate-800 text-sm font-semibold uppercase tracking-wide",children:e.title||"Advanced"}),c.jsx("span",{className:"text-slate-500 text-xs",children:o?"▾":"▸"})]}),o&&c.jsx("div",{className:"p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:s,searchResult:d})=>c.jsx(Xc,{point:s,helpTextMatch:d.helpTextMatch,equipment:l},s.command_id))})]}):c.jsxs("div",{className:"mb-6",children:[e.title&&c.jsx("div",{className:"text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2",children:c.jsx("span",{children:e.title})}),c.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:r.map(({point:s,searchResult:d})=>c.jsx(Xc,{point:s,helpTextMatch:d.helpTextMatch,equipment:l},s.command_id))})]})}function Ub({section:e,sectionId:t,searchQuery:n,pointMatchesSearch:l,equipment:i}){const[a,r]=W.useState(!0),o=e.subsections.some(s=>s.points.some(d=>l(d,n).matches));return n.trim()&&!o?null:c.jsxs("section",{className:"bg-white/0",id:t,children:[c.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors",onClick:()=>r(!a),children:[c.jsx("span",{children:e.sectionTitle}),c.jsx("span",{className:"text-slate-500 text-sm",children:a?"▾":"▸"})]}),a&&c.jsx("div",{children:e.subsections.map((s,d)=>c.jsx(jb,{subsection:s,searchQuery:n,pointMatchesSearch:l,equipment:i},d))})]})}const Jc=[{bg:"bg-brand-green/10",border:"border-brand-green/30",text:"text-slate-900",hover:"hover:bg-brand-green/20"},{bg:"bg-brand-teal/10",border:"border-brand-teal/30",text:"text-slate-900",hover:"hover:bg-brand-teal/20"},{bg:"bg-brand-emerald/10",border:"border-brand-emerald/30",text:"text-slate-900",hover:"hover:bg-brand-emerald/20"},{bg:"bg-brand-cyan/10",border:"border-brand-cyan/30",text:"text-slate-900",hover:"hover:bg-brand-cyan/20"},{bg:"bg-brand-mint/10",border:"border-brand-mint/30",text:"text-slate-900",hover:"hover:bg-brand-mint/20"},{bg:"bg-brand-forest/10",border:"border-brand-forest/30",text:"text-slate-900",hover:"hover:bg-brand-forest/20"},{bg:"bg-brand-sage/10",border:"border-brand-sage/30",text:"text-slate-900",hover:"hover:bg-brand-sage/20"}];function Wb({theme:e,themeId:t,themeIndex:n,searchQuery:l,pointMatchesSearch:i,equipment:a}){const[r,o]=W.useState(!0),s=Jc[n%Jc.length],d=e.sections.some(u=>u.subsections.some(p=>p.points.some(f=>i(f,l).matches)));return l.trim()&&!d?null:c.jsxs("div",{className:"bg-white/0",id:t,children:[c.jsxs("button",{className:`w-full flex items-center justify-between ${s.bg} ${s.text} text-2xl font-bold mb-6 border-b ${s.border} pb-3 px-4 py-2 rounded-lg ${s.hover} transition-all`,onClick:()=>o(!r),children:[c.jsx("span",{children:e.themeName}),c.jsx("span",{className:"text-slate-500 text-lg",children:r?"▾":"▸"})]}),r&&c.jsx("div",{className:"flex flex-col gap-10",children:e.sections.map((u,p)=>{const f=`${t}-section-${p}`;return c.jsx(Ub,{section:u,sectionId:f,searchQuery:l,pointMatchesSearch:i,equipment:a},`${u.sectionTitle}-${p}`)})})]})}function $b({themes:e,searchQuery:t,pointMatchesSearch:n,equipment:l}){return c.jsxs("div",{className:"flex flex-col gap-16",children:[e.map((i,a)=>{const r=`theme-${a}`;return c.jsx(Wb,{theme:i,themeId:r,themeIndex:a,searchQuery:t,pointMatchesSearch:n,equipment:l},`${i.themeName}-${a}`)}),!e.length&&c.jsx("div",{className:"text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60",children:"This page does not define any themes yet."})]})}function Hb(e){var n,l,i,a,r,o,s;if(!e)return;if(!Array.isArray(e.themes)){console.error("[SchemaTest] page.themes is missing or not an array");return}e.themes.forEach((d,u)=>{if(!Array.isArray(d.sections)){console.error(`[SchemaTest] theme ${u} (${d.themeName}) has no sections array`);return}d.sections.forEach((p,f)=>{Array.isArray(p.subsections)||console.error(`[SchemaTest] theme ${u} / section ${f} (${p.sectionTitle}) has no subsections array`)}),d.sections.forEach((p,f)=>{var m;(m=p.subsections)==null||m.forEach((x,g)=>{if(!Array.isArray(x.points)){console.error(`[SchemaTest] theme ${u} / section ${f} / subsection ${g} (${x.title}) has no points array`);return}x.points.forEach((_,b)=>{if(!Array.isArray(_.entries)){console.error(`[SchemaTest] theme ${u} / section ${f} / subsection ${g} / point ${b} (${_.title}) has no entries array`);return}_.entries.forEach((y,h)=>{const w=["enum","String","Number"],k=y.dtype&&typeof y.dtype=="string"&&y.dtype.startsWith("bitfield");!w.includes(y.dtype)&&!k&&console.error(`[SchemaTest] entry ${y.name??h} in point ${_.title} has unsupported dtype ${y.dtype}`)})})})})});const t=((s=(o=(r=(a=(i=(l=(n=e.themes)==null?void 0:n[0])==null?void 0:l.sections)==null?void 0:i[0])==null?void 0:a.subsections)==null?void 0:r[0])==null?void 0:o.points)==null?void 0:s[0])||null;t&&(t.command_id||console.error("[SchemaTest] firstPoint.command_id missing"),t.protocol||console.error("[SchemaTest] firstPoint.protocol missing"))}const qb=Object.assign({"./themes/demo_rebuilt.json":ob}),Am=Object.entries(qb).map(([e,t])=>{var a;const n=e.split("/").pop()??e,l=n.replace(/\.json$/i,""),i=((a=t.pageName)==null?void 0:a.trim())||l;return{id:l,label:i,filename:n,data:t}}).sort((e,t)=>e.label.localeCompare(t.label,void 0,{sensitivity:"base"})),zb=Am.reduce((e,t)=>(e[t.id]=t.data,e),{});function Kb(){var y,h;const{pageRegistry:e,pageLookup:t,isLoading:n,loadError:l,themeFile:i}=db(Am,zb),a=((y=e[0])==null?void 0:y.id)??"",[r]=W.useState(a),[o,s]=W.useState(((h=da[0])==null?void 0:h.id)??""),d=cb(),{searchQuery:u,setSearchQuery:p,pointMatchesSearch:f}=ub(),m=W.useMemo(()=>new Date(Date.now()-15*60*1e3),[]),x=W.useMemo(()=>m.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),[m]),g=r&&t[r]||a&&t[a]||null,_=W.useMemo(()=>da.find(w=>w.id===o)||da[0],[o]);if(W.useEffect(()=>{Hb(g)},[g]),n)return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsx("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:"Loading theme file..."})});if(l)return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700",children:[c.jsx("div",{className:"font-semibold mb-2",children:"Error loading theme file"}),c.jsx("div",{children:l}),c.jsxs("div",{className:"mt-4 text-xs text-slate-500",children:["File path: ",c.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5",children:i})]})]})});if(!g)return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:["No pages found in ",c.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"src/themes"}),". Add a JSON page file to get started."]})});const b=g.themes??[];return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsxs("div",{className:"max-w-[1400px] mx-auto flex gap-4",children:[c.jsx(pb,{themes:b,activeSection:d,selectedEquipmentId:o,onEquipmentChange:s,equipmentOptions:da}),c.jsxs("main",{className:"flex-1 flex flex-col gap-6",children:[c.jsx(mb,{searchQuery:u,onSearchChange:p,lastUpdatedLabel:x}),c.jsx($b,{themes:b,searchQuery:u,pointMatchesSearch:f,equipment:_})]})]})})}const Sd=Symbol.for("yaml.alias"),_s=Symbol.for("yaml.document"),gn=Symbol.for("yaml.map"),Em=Symbol.for("yaml.pair"),Bt=Symbol.for("yaml.scalar"),Vl=Symbol.for("yaml.seq"),vt=Symbol.for("yaml.node.type"),Cn=e=>!!e&&typeof e=="object"&&e[vt]===Sd,Wn=e=>!!e&&typeof e=="object"&&e[vt]===_s,Rl=e=>!!e&&typeof e=="object"&&e[vt]===gn,_e=e=>!!e&&typeof e=="object"&&e[vt]===Em,pe=e=>!!e&&typeof e=="object"&&e[vt]===Bt,Gl=e=>!!e&&typeof e=="object"&&e[vt]===Vl;function ve(e){if(e&&typeof e=="object")switch(e[vt]){case gn:case Vl:return!0}return!1}function Ce(e){if(e&&typeof e=="object")switch(e[vt]){case Sd:case gn:case Bt:case Vl:return!0}return!1}const Vm=e=>(pe(e)||ve(e))&&!!e.anchor,tt=Symbol("break visit"),Rm=Symbol("skip children"),Ot=Symbol("remove node");function $n(e,t){const n=Gm(t);Wn(e)?dl(null,e.contents,n,Object.freeze([e]))===Ot&&(e.contents=null):dl(null,e,n,Object.freeze([]))}$n.BREAK=tt;$n.SKIP=Rm;$n.REMOVE=Ot;function dl(e,t,n,l){const i=Mm(e,t,n,l);if(Ce(i)||_e(i))return Fm(e,l,i),dl(e,i,n,l);if(typeof i!="symbol"){if(ve(t)){l=Object.freeze(l.concat(t));for(let a=0;a<t.items.length;++a){const r=dl(a,t.items[a],n,l);if(typeof r=="number")a=r-1;else{if(r===tt)return tt;r===Ot&&(t.items.splice(a,1),a-=1)}}}else if(_e(t)){l=Object.freeze(l.concat(t));const a=dl("key",t.key,n,l);if(a===tt)return tt;a===Ot&&(t.key=null);const r=dl("value",t.value,n,l);if(r===tt)return tt;r===Ot&&(t.value=null)}}return i}async function Nr(e,t){const n=Gm(t);Wn(e)?await cl(null,e.contents,n,Object.freeze([e]))===Ot&&(e.contents=null):await cl(null,e,n,Object.freeze([]))}Nr.BREAK=tt;Nr.SKIP=Rm;Nr.REMOVE=Ot;async function cl(e,t,n,l){const i=await Mm(e,t,n,l);if(Ce(i)||_e(i))return Fm(e,l,i),cl(e,i,n,l);if(typeof i!="symbol"){if(ve(t)){l=Object.freeze(l.concat(t));for(let a=0;a<t.items.length;++a){const r=await cl(a,t.items[a],n,l);if(typeof r=="number")a=r-1;else{if(r===tt)return tt;r===Ot&&(t.items.splice(a,1),a-=1)}}}else if(_e(t)){l=Object.freeze(l.concat(t));const a=await cl("key",t.key,n,l);if(a===tt)return tt;a===Ot&&(t.key=null);const r=await cl("value",t.value,n,l);if(r===tt)return tt;r===Ot&&(t.value=null)}}return i}function Gm(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function Mm(e,t,n,l){var i,a,r,o,s;if(typeof n=="function")return n(e,t,l);if(Rl(t))return(i=n.Map)==null?void 0:i.call(n,e,t,l);if(Gl(t))return(a=n.Seq)==null?void 0:a.call(n,e,t,l);if(_e(t))return(r=n.Pair)==null?void 0:r.call(n,e,t,l);if(pe(t))return(o=n.Scalar)==null?void 0:o.call(n,e,t,l);if(Cn(t))return(s=n.Alias)==null?void 0:s.call(n,e,t,l)}function Fm(e,t,n){const l=t[t.length-1];if(ve(l))l.items[e]=n;else if(_e(l))e==="key"?l.key=n:l.value=n;else if(Wn(l))l.contents=n;else{const i=Cn(l)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const Qb={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Yb=e=>e.replace(/[!,[\]{}]/g,t=>Qb[t]);class ze{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},ze.defaultYaml,t),this.tags=Object.assign({},ze.defaultTags,n)}clone(){const t=new ze(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new ze(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:ze.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},ze.defaultTags);break}return t}add(t,n){this.atNextDocument&&(this.yaml={explicit:ze.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},ze.defaultTags),this.atNextDocument=!1);const l=t.trim().split(/[ \t]+/),i=l.shift();switch(i){case"%TAG":{if(l.length!==2&&(n(0,"%TAG directive should contain exactly two parts"),l.length<2))return!1;const[a,r]=l;return this.tags[a]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,l.length!==1)return n(0,"%YAML directive should contain exactly one part"),!1;const[a]=l;if(a==="1.1"||a==="1.2")return this.yaml.version=a,!0;{const r=/^\d+\.\d+$/.test(a);return n(6,`Unsupported YAML version ${a}`,r),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(t,n){if(t==="!")return"!";if(t[0]!=="!")return n(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const r=t.slice(2,-1);return r==="!"||r==="!!"?(n(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&n("Verbatim tags must end with a >"),r)}const[,l,i]=t.match(/^(.*!)([^!]*)$/s);i||n(`The ${t} tag has no suffix`);const a=this.tags[l];if(a)try{return a+decodeURIComponent(i)}catch(r){return n(String(r)),null}return l==="!"?t:(n(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[n,l]of Object.entries(this.tags))if(t.startsWith(l))return n+Yb(t.substring(l.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const n=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],l=Object.entries(this.tags);let i;if(t&&l.length>0&&Ce(t.contents)){const a={};$n(t.contents,(r,o)=>{Ce(o)&&o.tag&&(a[o.tag]=!0)}),i=Object.keys(a)}else i=[];for(const[a,r]of l)a==="!!"&&r==="tag:yaml.org,2002:"||(!t||i.some(o=>o.startsWith(r)))&&n.push(`%TAG ${a} ${r}`);return n.join(`
`)}}ze.defaultYaml={explicit:!1,version:"1.2"};ze.defaultTags={"!!":"tag:yaml.org,2002:"};function Om(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const n=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(n)}return!0}function Bm(e){const t=new Set;return $n(e,{Value(n,l){l.anchor&&t.add(l.anchor)}}),t}function Im(e,t){for(let n=1;;++n){const l=`${e}${n}`;if(!t.has(l))return l}}function Xb(e,t){const n=[],l=new Map;let i=null;return{onAnchor:a=>{n.push(a),i??(i=Bm(e));const r=Im(t,i);return i.add(r),r},setAnchors:()=>{for(const a of n){const r=l.get(a);if(typeof r=="object"&&r.anchor&&(pe(r.node)||ve(r.node)))r.node.anchor=r.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=a,o}}},sourceObjects:l}}function ul(e,t,n,l){if(l&&typeof l=="object")if(Array.isArray(l))for(let i=0,a=l.length;i<a;++i){const r=l[i],o=ul(e,l,String(i),r);o===void 0?delete l[i]:o!==r&&(l[i]=o)}else if(l instanceof Map)for(const i of Array.from(l.keys())){const a=l.get(i),r=ul(e,l,i,a);r===void 0?l.delete(i):r!==a&&l.set(i,r)}else if(l instanceof Set)for(const i of Array.from(l)){const a=ul(e,l,i,i);a===void 0?l.delete(i):a!==i&&(l.delete(i),l.add(a))}else for(const[i,a]of Object.entries(l)){const r=ul(e,l,i,a);r===void 0?delete l[i]:r!==a&&(l[i]=r)}return e.call(t,n,l)}function ht(e,t,n){if(Array.isArray(e))return e.map((l,i)=>ht(l,String(i),n));if(e&&typeof e.toJSON=="function"){if(!n||!Vm(e))return e.toJSON(t,n);const l={aliasCount:0,count:1,res:void 0};n.anchors.set(e,l),n.onCreate=a=>{l.res=a,delete n.onCreate};const i=e.toJSON(t,n);return n.onCreate&&n.onCreate(i),i}return typeof e=="bigint"&&!(n!=null&&n.keep)?Number(e):e}class Ld{constructor(t){Object.defineProperty(this,vt,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}toJS(t,{mapAsMap:n,maxAliasCount:l,onAnchor:i,reviver:a}={}){if(!Wn(t))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:t,keep:!0,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof l=="number"?l:100},o=ht(this,"",r);if(typeof i=="function")for(const{count:s,res:d}of r.anchors.values())i(d,s);return typeof a=="function"?ul(a,{"":o},"",o):o}}class Ar extends Ld{constructor(t){super(Sd),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t,n){let l;n!=null&&n.aliasResolveCache?l=n.aliasResolveCache:(l=[],$n(t,{Node:(a,r)=>{(Cn(r)||Vm(r))&&l.push(r)}}),n&&(n.aliasResolveCache=l));let i;for(const a of l){if(a===this)break;a.anchor===this.source&&(i=a)}return i}toJSON(t,n){if(!n)return{source:this.source};const{anchors:l,doc:i,maxAliasCount:a}=n,r=this.resolve(i,n);if(!r){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}let o=l.get(r);if(o||(ht(r,null,n),o=l.get(r)),!o||o.res===void 0){const s="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(s)}if(a>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Va(i,r,l)),o.count*o.aliasCount>a)){const s="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(s)}return o.res}toString(t,n,l){const i=`*${this.source}`;if(t){if(Om(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(t.implicitKey)return`${i} `}return i}}function Va(e,t,n){if(Cn(t)){const l=t.resolve(e),i=n&&l&&n.get(l);return i?i.count*i.aliasCount:0}else if(ve(t)){let l=0;for(const i of t.items){const a=Va(e,i,n);a>l&&(l=a)}return l}else if(_e(t)){const l=Va(e,t.key,n),i=Va(e,t.value,n);return Math.max(l,i)}return 1}const jm=e=>!e||typeof e!="function"&&typeof e!="object";class Y extends Ld{constructor(t){super(Bt),this.value=t}toJSON(t,n){return n!=null&&n.keep?this.value:ht(this.value,t,n)}toString(){return String(this.value)}}Y.BLOCK_FOLDED="BLOCK_FOLDED";Y.BLOCK_LITERAL="BLOCK_LITERAL";Y.PLAIN="PLAIN";Y.QUOTE_DOUBLE="QUOTE_DOUBLE";Y.QUOTE_SINGLE="QUOTE_SINGLE";const Jb="tag:yaml.org,2002:";function Zb(e,t,n){if(t){const l=n.filter(a=>a.tag===t),i=l.find(a=>!a.format)??l[0];if(!i)throw new Error(`Tag ${t} not found`);return i}return n.find(l=>{var i;return((i=l.identify)==null?void 0:i.call(l,e))&&!l.format})}function Gi(e,t,n){var p,f,m;if(Wn(e)&&(e=e.contents),Ce(e))return e;if(_e(e)){const x=(f=(p=n.schema[gn]).createNode)==null?void 0:f.call(p,n.schema,null,n);return x.items.push(e),x}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:l,onAnchor:i,onTagObj:a,schema:r,sourceObjects:o}=n;let s;if(l&&e&&typeof e=="object"){if(s=o.get(e),s)return s.anchor??(s.anchor=i(e)),new Ar(s.anchor);s={anchor:null,node:null},o.set(e,s)}t!=null&&t.startsWith("!!")&&(t=Jb+t.slice(2));let d=Zb(e,t,r.tags);if(!d){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const x=new Y(e);return s&&(s.node=x),x}d=e instanceof Map?r[gn]:Symbol.iterator in Object(e)?r[Vl]:r[gn]}a&&(a(d),delete n.onTagObj);const u=d!=null&&d.createNode?d.createNode(n.schema,e,n):typeof((m=d==null?void 0:d.nodeClass)==null?void 0:m.from)=="function"?d.nodeClass.from(n.schema,e,n):new Y(e);return t?u.tag=t:d.default||(u.tag=d.tag),s&&(s.node=u),u}function dr(e,t,n){let l=n;for(let i=t.length-1;i>=0;--i){const a=t[i];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const r=[];r[a]=l,l=r}else l=new Map([[a,l]])}return Gi(l,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const ri=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class Um extends Ld{constructor(t,n){super(t),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}clone(t){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(n.schema=t),n.items=n.items.map(l=>Ce(l)||_e(l)?l.clone(t):l),this.range&&(n.range=this.range.slice()),n}addIn(t,n){if(ri(t))this.add(n);else{const[l,...i]=t,a=this.get(l,!0);if(ve(a))a.addIn(i,n);else if(a===void 0&&this.schema)this.set(l,dr(this.schema,i,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}deleteIn(t){const[n,...l]=t;if(l.length===0)return this.delete(n);const i=this.get(n,!0);if(ve(i))return i.deleteIn(l);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${l}`)}getIn(t,n){const[l,...i]=t,a=this.get(l,!0);return i.length===0?!n&&pe(a)?a.value:a:ve(a)?a.getIn(i,n):void 0}hasAllNullValues(t){return this.items.every(n=>{if(!_e(n))return!1;const l=n.value;return l==null||t&&pe(l)&&l.value==null&&!l.commentBefore&&!l.comment&&!l.tag})}hasIn(t){const[n,...l]=t;if(l.length===0)return this.has(n);const i=this.get(n,!0);return ve(i)?i.hasIn(l):!1}setIn(t,n){const[l,...i]=t;if(i.length===0)this.set(l,n);else{const a=this.get(l,!0);if(ve(a))a.setIn(i,n);else if(a===void 0&&this.schema)this.set(l,dr(this.schema,i,n));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}}const eh=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function $t(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const Nn=(e,t,n)=>e.endsWith(`
`)?$t(n,t):n.includes(`
`)?`
`+$t(n,t):(e.endsWith(" ")?"":" ")+n,Wm="flow",xs="block",Ra="quoted";function Er(e,t,n="flow",{indentAtStart:l,lineWidth:i=80,minContentWidth:a=20,onFold:r,onOverflow:o}={}){if(!i||i<0)return e;i<a&&(a=0);const s=Math.max(1+a,1+i-t.length);if(e.length<=s)return e;const d=[],u={};let p=i-t.length;typeof l=="number"&&(l>i-Math.max(2,a)?d.push(0):p=i-l);let f,m,x=!1,g=-1,_=-1,b=-1;n===xs&&(g=Zc(e,g,t.length),g!==-1&&(p=g+s));for(let h;h=e[g+=1];){if(n===Ra&&h==="\\"){switch(_=g,e[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}b=g}if(h===`
`)n===xs&&(g=Zc(e,g,t.length)),p=g+t.length+s,f=void 0;else{if(h===" "&&m&&m!==" "&&m!==`
`&&m!=="	"){const w=e[g+1];w&&w!==" "&&w!==`
`&&w!=="	"&&(f=g)}if(g>=p)if(f)d.push(f),p=f+s,f=void 0;else if(n===Ra){for(;m===" "||m==="	";)m=h,h=e[g+=1],x=!0;const w=g>b+1?g-2:_-1;if(u[w])return e;d.push(w),u[w]=!0,p=w+s,f=void 0}else x=!0}m=h}if(x&&o&&o(),d.length===0)return e;r&&r();let y=e.slice(0,d[0]);for(let h=0;h<d.length;++h){const w=d[h],k=d[h+1]||e.length;w===0?y=`
${t}${e.slice(0,k)}`:(n===Ra&&u[w]&&(y+=`${e[w]}\\`),y+=`
${t}${e.slice(w+1,k)}`)}return y}function Zc(e,t,n){let l=t,i=t+1,a=e[i];for(;a===" "||a==="	";)if(t<i+n)a=e[++t];else{do a=e[++t];while(a&&a!==`
`);l=t,i=t+1,a=e[i]}return l}const Vr=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Rr=e=>/^(%|---|\.\.\.)/m.test(e);function th(e,t,n){if(!t||t<0)return!1;const l=t-n,i=e.length;if(i<=l)return!1;for(let a=0,r=0;a<i;++a)if(e[a]===`
`){if(a-r>l)return!0;if(r=a+1,i-r<=l)return!1}return!0}function gi(e,t){const n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;const{implicitKey:l}=t,i=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(Rr(e)?"  ":"");let r="",o=0;for(let s=0,d=n[s];d;d=n[++s])if(d===" "&&n[s+1]==="\\"&&n[s+2]==="n"&&(r+=n.slice(o,s)+"\\ ",s+=1,o=s,d="\\"),d==="\\")switch(n[s+1]){case"u":{r+=n.slice(o,s);const u=n.substr(s+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=n.substr(s,6)}s+=5,o=s+1}break;case"n":if(l||n[s+2]==='"'||n.length<i)s+=1;else{for(r+=n.slice(o,s)+`

`;n[s+2]==="\\"&&n[s+3]==="n"&&n[s+4]!=='"';)r+=`
`,s+=2;r+=a,n[s+2]===" "&&(r+="\\"),s+=1,o=s+1}break;default:s+=1}return r=o?r+n.slice(o):n,l?r:Er(r,a,Ra,Vr(t,!1))}function vs(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return gi(e,t);const n=t.indent||(Rr(e)?"  ":""),l="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return t.implicitKey?l:Er(l,n,Wm,Vr(t,!1))}function pl(e,t){const{singleQuote:n}=t.options;let l;if(n===!1)l=gi;else{const i=e.includes('"'),a=e.includes("'");i&&!a?l=vs:a&&!i?l=gi:l=n?vs:gi}return l(e,t)}let ws;try{ws=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{ws=/\n+(?!\n|$)/g}function Ga({comment:e,type:t,value:n},l,i,a){const{blockQuote:r,commentString:o,lineWidth:s}=l.options;if(!r||/\n[\t ]+$/.test(n))return pl(n,l);const d=l.indent||(l.forceBlockIndent||Rr(n)?"  ":""),u=r==="literal"?!0:r==="folded"||t===Y.BLOCK_FOLDED?!1:t===Y.BLOCK_LITERAL?!0:!th(n,s,d.length);if(!n)return u?`|
`:`>
`;let p,f;for(f=n.length;f>0;--f){const k=n[f-1];if(k!==`
`&&k!=="	"&&k!==" ")break}let m=n.substring(f);const x=m.indexOf(`
`);x===-1?p="-":n===m||x!==m.length-1?(p="+",a&&a()):p="",m&&(n=n.slice(0,-m.length),m[m.length-1]===`
`&&(m=m.slice(0,-1)),m=m.replace(ws,`$&${d}`));let g=!1,_,b=-1;for(_=0;_<n.length;++_){const k=n[_];if(k===" ")g=!0;else if(k===`
`)b=_;else break}let y=n.substring(0,b<_?b+1:_);y&&(n=n.substring(y.length),y=y.replace(/\n+/g,`$&${d}`));let w=(g?d?"2":"1":"")+p;if(e&&(w+=" "+o(e.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){const k=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${d}`);let L=!1;const S=Vr(l,!0);r!=="folded"&&t!==Y.BLOCK_FOLDED&&(S.onOverflow=()=>{L=!0});const v=Er(`${y}${k}${m}`,d,xs,S);if(!L)return`>${w}
${d}${v}`}return n=n.replace(/\n+/g,`$&${d}`),`|${w}
${d}${y}${n}${m}`}function nh(e,t,n,l){const{type:i,value:a}=e,{actualString:r,implicitKey:o,indent:s,indentStep:d,inFlow:u}=t;if(o&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return pl(a,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return o||u||!a.includes(`
`)?pl(a,t):Ga(e,t,n,l);if(!o&&!u&&i!==Y.PLAIN&&a.includes(`
`))return Ga(e,t,n,l);if(Rr(a)){if(s==="")return t.forceBlockIndent=!0,Ga(e,t,n,l);if(o&&s===d)return pl(a,t)}const p=a.replace(/\n+/g,`$&
${s}`);if(r){const f=g=>{var _;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((_=g.test)==null?void 0:_.test(p))},{compat:m,tags:x}=t.doc.schema;if(x.some(f)||m!=null&&m.some(f))return pl(a,t)}return o?p:Er(p,s,Wm,Vr(t,!1))}function Wi(e,t,n,l){const{implicitKey:i,inFlow:a}=t,r=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:o}=e;o!==Y.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(o=Y.QUOTE_DOUBLE);const s=u=>{switch(u){case Y.BLOCK_FOLDED:case Y.BLOCK_LITERAL:return i||a?pl(r.value,t):Ga(r,t,n,l);case Y.QUOTE_DOUBLE:return gi(r.value,t);case Y.QUOTE_SINGLE:return vs(r.value,t);case Y.PLAIN:return nh(r,t,n,l);default:return null}};let d=s(o);if(d===null){const{defaultKeyType:u,defaultStringType:p}=t.options,f=i&&u||p;if(d=s(f),d===null)throw new Error(`Unsupported default string type ${f}`)}return d}function $m(e,t){const n=Object.assign({blockQuote:!0,commentString:eh,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let l;switch(n.collectionStyle){case"block":l=!1;break;case"flow":l=!0;break;default:l=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?" ":"",indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",inFlow:l,options:n}}function lh(e,t){var i;if(t.tag){const a=e.filter(r=>r.tag===t.tag);if(a.length>0)return a.find(r=>r.format===t.format)??a[0]}let n,l;if(pe(t)){l=t.value;let a=e.filter(r=>{var o;return(o=r.identify)==null?void 0:o.call(r,l)});if(a.length>1){const r=a.filter(o=>o.test);r.length>0&&(a=r)}n=a.find(r=>r.format===t.format)??a.find(r=>!r.format)}else l=t,n=e.find(a=>a.nodeClass&&l instanceof a.nodeClass);if(!n){const a=((i=l==null?void 0:l.constructor)==null?void 0:i.name)??(l===null?"null":typeof l);throw new Error(`Tag not resolved for ${a} value`)}return n}function ih(e,t,{anchors:n,doc:l}){if(!l.directives)return"";const i=[],a=(pe(e)||ve(e))&&e.anchor;a&&Om(a)&&(n.add(a),i.push(`&${a}`));const r=e.tag??(t.default?null:t.tag);return r&&i.push(l.directives.tagString(r)),i.join(" ")}function Dl(e,t,n,l){var s;if(_e(e))return e.toString(t,n,l);if(Cn(e)){if(t.doc.directives)return e.toString(t);if((s=t.resolvedAliases)!=null&&s.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i;const a=Ce(e)?e:t.doc.createNode(e,{onTagObj:d=>i=d});i??(i=lh(t.doc.schema.tags,a));const r=ih(a,i,t);r.length>0&&(t.indentAtStart=(t.indentAtStart??0)+r.length+1);const o=typeof i.stringify=="function"?i.stringify(a,t,n,l):pe(a)?Wi(a,t,n,l):a.toString(t,n,l);return r?pe(a)||o[0]==="{"||o[0]==="["?`${r} ${o}`:`${r}
${t.indent}${o}`:o}function ah({key:e,value:t},n,l,i){const{allNullValues:a,doc:r,indent:o,indentStep:s,options:{commentString:d,indentSeq:u,simpleKeys:p}}=n;let f=Ce(e)&&e.comment||null;if(p){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(ve(e)||!Ce(e)&&typeof e=="object"){const S="With simple keys, collection cannot be used as a key value";throw new Error(S)}}let m=!p&&(!e||f&&t==null&&!n.inFlow||ve(e)||(pe(e)?e.type===Y.BLOCK_FOLDED||e.type===Y.BLOCK_LITERAL:typeof e=="object"));n=Object.assign({},n,{allNullValues:!1,implicitKey:!m&&(p||!a),indent:o+s});let x=!1,g=!1,_=Dl(e,n,()=>x=!0,()=>g=!0);if(!m&&!n.inFlow&&_.length>1024){if(p)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");m=!0}if(n.inFlow){if(a||t==null)return x&&l&&l(),_===""?"?":m?`? ${_}`:_}else if(a&&!p||t==null&&m)return _=`? ${_}`,f&&!x?_+=Nn(_,n.indent,d(f)):g&&i&&i(),_;x&&(f=null),m?(f&&(_+=Nn(_,n.indent,d(f))),_=`? ${_}
${o}:`):(_=`${_}:`,f&&(_+=Nn(_,n.indent,d(f))));let b,y,h;Ce(t)?(b=!!t.spaceBefore,y=t.commentBefore,h=t.comment):(b=!1,y=null,h=null,t&&typeof t=="object"&&(t=r.createNode(t))),n.implicitKey=!1,!m&&!f&&pe(t)&&(n.indentAtStart=_.length+1),g=!1,!u&&s.length>=2&&!n.inFlow&&!m&&Gl(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let w=!1;const k=Dl(t,n,()=>w=!0,()=>g=!0);let L=" ";if(f||b||y){if(L=b?`
`:"",y){const S=d(y);L+=`
${$t(S,n.indent)}`}k===""&&!n.inFlow?L===`
`&&(L=`

`):L+=`
${n.indent}`}else if(!m&&ve(t)){const S=k[0],v=k.indexOf(`
`),A=v!==-1,R=n.inFlow??t.flow??t.items.length===0;if(A||!R){let U=!1;if(A&&(S==="&"||S==="!")){let B=k.indexOf(" ");S==="&"&&B!==-1&&B<v&&k[B+1]==="!"&&(B=k.indexOf(" ",B+1)),(B===-1||v<B)&&(U=!0)}U||(L=`
${n.indent}`)}}else(k===""||k[0]===`
`)&&(L="");return _+=L+k,n.inFlow?w&&l&&l():h&&!w?_+=Nn(_,n.indent,d(h)):g&&i&&i(),_}function Hm(e,t){(e==="debug"||e==="warn")&&console.warn(t)}const ua="<<",qt={identify:e=>e===ua||typeof e=="symbol"&&e.description===ua,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Y(Symbol(ua)),{addToJSMap:qm}),stringify:()=>ua},rh=(e,t)=>(qt.identify(t)||pe(t)&&(!t.type||t.type===Y.PLAIN)&&qt.identify(t.value))&&(e==null?void 0:e.doc.schema.tags.some(n=>n.tag===qt.tag&&n.default));function qm(e,t,n){if(n=e&&Cn(n)?n.resolve(e.doc):n,Gl(n))for(const l of n.items)ho(e,t,l);else if(Array.isArray(n))for(const l of n)ho(e,t,l);else ho(e,t,n)}function ho(e,t,n){const l=e&&Cn(n)?n.resolve(e.doc):n;if(!Rl(l))throw new Error("Merge sources must be maps or map aliases");const i=l.toJSON(null,e,Map);for(const[a,r]of i)t instanceof Map?t.has(a)||t.set(a,r):t instanceof Set?t.add(a):Object.prototype.hasOwnProperty.call(t,a)||Object.defineProperty(t,a,{value:r,writable:!0,enumerable:!0,configurable:!0});return t}function zm(e,t,{key:n,value:l}){if(Ce(n)&&n.addToJSMap)n.addToJSMap(e,t,l);else if(rh(e,n))qm(e,t,l);else{const i=ht(n,"",e);if(t instanceof Map)t.set(i,ht(l,i,e));else if(t instanceof Set)t.add(i);else{const a=oh(n,i,e),r=ht(l,a,e);a in t?Object.defineProperty(t,a,{value:r,writable:!0,enumerable:!0,configurable:!0}):t[a]=r}}return t}function oh(e,t,n){if(t===null)return"";if(typeof t!="object")return String(t);if(Ce(e)&&(n!=null&&n.doc)){const l=$m(n.doc,{});l.anchors=new Set;for(const a of n.anchors.keys())l.anchors.add(a.anchor);l.inFlow=!0,l.inStringifyKey=!0;const i=e.toString(l);if(!n.mapKeyWarned){let a=JSON.stringify(i);a.length>40&&(a=a.substring(0,36)+'..."'),Hm(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return i}return JSON.stringify(t)}function kd(e,t,n){const l=Gi(e,void 0,n),i=Gi(t,void 0,n);return new We(l,i)}class We{constructor(t,n=null){Object.defineProperty(this,vt,{value:Em}),this.key=t,this.value=n}clone(t){let{key:n,value:l}=this;return Ce(n)&&(n=n.clone(t)),Ce(l)&&(l=l.clone(t)),new We(n,l)}toJSON(t,n){const l=n!=null&&n.mapAsMap?new Map:{};return zm(n,l,this)}toString(t,n,l){return t!=null&&t.doc?ah(this,t,n,l):JSON.stringify(this)}}function Km(e,t,n){return(t.inFlow??e.flow?dh:sh)(e,t,n)}function sh({comment:e,items:t},n,{blockItemPrefix:l,flowChars:i,itemIndent:a,onChompKeep:r,onComment:o}){const{indent:s,options:{commentString:d}}=n,u=Object.assign({},n,{indent:a,type:null});let p=!1;const f=[];for(let x=0;x<t.length;++x){const g=t[x];let _=null;if(Ce(g))!p&&g.spaceBefore&&f.push(""),cr(n,f,g.commentBefore,p),g.comment&&(_=g.comment);else if(_e(g)){const y=Ce(g.key)?g.key:null;y&&(!p&&y.spaceBefore&&f.push(""),cr(n,f,y.commentBefore,p))}p=!1;let b=Dl(g,u,()=>_=null,()=>p=!0);_&&(b+=Nn(b,a,d(_))),p&&_&&(p=!1),f.push(l+b)}let m;if(f.length===0)m=i.start+i.end;else{m=f[0];for(let x=1;x<f.length;++x){const g=f[x];m+=g?`
${s}${g}`:`
`}}return e?(m+=`
`+$t(d(e),s),o&&o()):p&&r&&r(),m}function dh({items:e},t,{flowChars:n,itemIndent:l}){const{indent:i,indentStep:a,flowCollectionPadding:r,options:{commentString:o}}=t;l+=a;const s=Object.assign({},t,{indent:l,inFlow:!0,type:null});let d=!1,u=0;const p=[];for(let x=0;x<e.length;++x){const g=e[x];let _=null;if(Ce(g))g.spaceBefore&&p.push(""),cr(t,p,g.commentBefore,!1),g.comment&&(_=g.comment);else if(_e(g)){const y=Ce(g.key)?g.key:null;y&&(y.spaceBefore&&p.push(""),cr(t,p,y.commentBefore,!1),y.comment&&(d=!0));const h=Ce(g.value)?g.value:null;h?(h.comment&&(_=h.comment),h.commentBefore&&(d=!0)):g.value==null&&(y!=null&&y.comment)&&(_=y.comment)}_&&(d=!0);let b=Dl(g,s,()=>_=null);x<e.length-1&&(b+=","),_&&(b+=Nn(b,l,o(_))),!d&&(p.length>u||b.includes(`
`))&&(d=!0),p.push(b),u=p.length}const{start:f,end:m}=n;if(p.length===0)return f+m;if(!d){const x=p.reduce((g,_)=>g+_.length+2,2);d=t.options.lineWidth>0&&x>t.options.lineWidth}if(d){let x=f;for(const g of p)x+=g?`
${a}${i}${g}`:`
`;return`${x}
${i}${m}`}else return`${f}${r}${p.join(" ")}${r}${m}`}function cr({indent:e,options:{commentString:t}},n,l,i){if(l&&i&&(l=l.replace(/^\n+/,"")),l){const a=$t(t(l),e);n.push(a.trimStart())}}function An(e,t){const n=pe(t)?t.value:t;for(const l of e)if(_e(l)&&(l.key===t||l.key===n||pe(l.key)&&l.key.value===n))return l}class ot extends Um{static get tagName(){return"tag:yaml.org,2002:map"}constructor(t){super(gn,t),this.items=[]}static from(t,n,l){const{keepUndefined:i,replacer:a}=l,r=new this(t),o=(s,d)=>{if(typeof a=="function")d=a.call(n,s,d);else if(Array.isArray(a)&&!a.includes(s))return;(d!==void 0||i)&&r.items.push(kd(s,d,l))};if(n instanceof Map)for(const[s,d]of n)o(s,d);else if(n&&typeof n=="object")for(const s of Object.keys(n))o(s,n[s]);return typeof t.sortMapEntries=="function"&&r.items.sort(t.sortMapEntries),r}add(t,n){var r;let l;_e(t)?l=t:!t||typeof t!="object"||!("key"in t)?l=new We(t,t==null?void 0:t.value):l=new We(t.key,t.value);const i=An(this.items,l.key),a=(r=this.schema)==null?void 0:r.sortMapEntries;if(i){if(!n)throw new Error(`Key ${l.key} already set`);pe(i.value)&&jm(l.value)?i.value.value=l.value:i.value=l.value}else if(a){const o=this.items.findIndex(s=>a(l,s)<0);o===-1?this.items.push(l):this.items.splice(o,0,l)}else this.items.push(l)}delete(t){const n=An(this.items,t);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(t,n){const l=An(this.items,t),i=l==null?void 0:l.value;return(!n&&pe(i)?i.value:i)??void 0}has(t){return!!An(this.items,t)}set(t,n){this.add(new We(t,n),!0)}toJSON(t,n,l){const i=l?new l:n!=null&&n.mapAsMap?new Map:{};n!=null&&n.onCreate&&n.onCreate(i);for(const a of this.items)zm(n,i,a);return i}toString(t,n,l){if(!t)return JSON.stringify(this);for(const i of this.items)if(!_e(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),Km(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:l,onComment:n})}}const Ml={collection:"map",default:!0,nodeClass:ot,tag:"tag:yaml.org,2002:map",resolve(e,t){return Rl(e)||t("Expected a mapping for this tag"),e},createNode:(e,t,n)=>ot.from(e,t,n)};class _n extends Um{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(t){super(Vl,t),this.items=[]}add(t){this.items.push(t)}delete(t){const n=pa(t);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(t,n){const l=pa(t);if(typeof l!="number")return;const i=this.items[l];return!n&&pe(i)?i.value:i}has(t){const n=pa(t);return typeof n=="number"&&n<this.items.length}set(t,n){const l=pa(t);if(typeof l!="number")throw new Error(`Expected a valid index, not ${t}.`);const i=this.items[l];pe(i)&&jm(n)?i.value=n:this.items[l]=n}toJSON(t,n){const l=[];n!=null&&n.onCreate&&n.onCreate(l);let i=0;for(const a of this.items)l.push(ht(a,String(i++),n));return l}toString(t,n,l){return t?Km(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:l,onComment:n}):JSON.stringify(this)}static from(t,n,l){const{replacer:i}=l,a=new this(t);if(n&&Symbol.iterator in Object(n)){let r=0;for(let o of n){if(typeof i=="function"){const s=n instanceof Set?o:String(r++);o=i.call(n,s,o)}a.items.push(Gi(o,void 0,l))}}return a}}function pa(e){let t=pe(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}const Fl={collection:"seq",default:!0,nodeClass:_n,tag:"tag:yaml.org,2002:seq",resolve(e,t){return Gl(e)||t("Expected a sequence for this tag"),e},createNode:(e,t,n)=>_n.from(e,t,n)},Gr={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,n,l){return t=Object.assign({actualString:!0},t),Wi(e,t,n,l)}},Mr={identify:e=>e==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Y(null),stringify:({source:e},t)=>typeof e=="string"&&Mr.test.test(e)?e:t.options.nullStr},Pd={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new Y(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},n){if(e&&Pd.test.test(e)){const l=e[0]==="t"||e[0]==="T";if(t===l)return e}return t?n.options.trueStr:n.options.falseStr}};function Et({format:e,minFractionDigits:t,tag:n,value:l}){if(typeof l=="bigint")return String(l);const i=typeof l=="number"?l:Number(l);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let a=JSON.stringify(l);if(!e&&t&&(!n||n==="tag:yaml.org,2002:float")&&/^\d/.test(a)){let r=a.indexOf(".");r<0&&(r=a.length,a+=".");let o=t-(a.length-r-1);for(;o-- >0;)a+="0"}return a}const Qm={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Et},Ym={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Et(e)}},Xm={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new Y(parseFloat(e)),n=e.indexOf(".");return n!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-n-1),t},stringify:Et},Fr=e=>typeof e=="bigint"||Number.isInteger(e),Dd=(e,t,n,{intAsBigInt:l})=>l?BigInt(e):parseInt(e.substring(t),n);function Jm(e,t,n){const{value:l}=e;return Fr(l)&&l>=0?n+l.toString(t):Et(e)}const Zm={identify:e=>Fr(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,n)=>Dd(e,2,8,n),stringify:e=>Jm(e,8,"0o")},ef={identify:Fr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>Dd(e,0,10,n),stringify:Et},tf={identify:e=>Fr(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>Dd(e,2,16,n),stringify:e=>Jm(e,16,"0x")},ch=[Ml,Fl,Gr,Mr,Pd,Zm,ef,tf,Qm,Ym,Xm];function eu(e){return typeof e=="bigint"||Number.isInteger(e)}const ma=({value:e})=>JSON.stringify(e),uh=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:ma},{identify:e=>e==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:ma},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:ma},{identify:eu,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>eu(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:ma}],ph={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},mh=[Ml,Fl].concat(uh,ph),Td={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof atob=="function"){const n=atob(e.replace(/[\n\r]/g,"")),l=new Uint8Array(n.length);for(let i=0;i<n.length;++i)l[i]=n.charCodeAt(i);return l}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:n},l,i,a){if(!n)return"";const r=n;let o;if(typeof btoa=="function"){let s="";for(let d=0;d<r.length;++d)s+=String.fromCharCode(r[d]);o=btoa(s)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t??(t=Y.BLOCK_LITERAL),t!==Y.QUOTE_DOUBLE){const s=Math.max(l.options.lineWidth-l.indent.length,l.options.minContentWidth),d=Math.ceil(o.length/s),u=new Array(d);for(let p=0,f=0;p<d;++p,f+=s)u[p]=o.substr(f,s);o=u.join(t===Y.BLOCK_LITERAL?`
`:" ")}return Wi({comment:e,type:t,value:o},l,i,a)}};function nf(e,t){if(Gl(e))for(let n=0;n<e.items.length;++n){let l=e.items[n];if(!_e(l)){if(Rl(l)){l.items.length>1&&t("Each pair must have its own sequence indicator");const i=l.items[0]||new We(new Y(null));if(l.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${l.commentBefore}
${i.key.commentBefore}`:l.commentBefore),l.comment){const a=i.value??i.key;a.comment=a.comment?`${l.comment}
${a.comment}`:l.comment}l=i}e.items[n]=_e(l)?l:new We(l)}}else t("Expected a sequence for this tag");return e}function lf(e,t,n){const{replacer:l}=n,i=new _n(e);i.tag="tag:yaml.org,2002:pairs";let a=0;if(t&&Symbol.iterator in Object(t))for(let r of t){typeof l=="function"&&(r=l.call(t,String(a++),r));let o,s;if(Array.isArray(r))if(r.length===2)o=r[0],s=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const d=Object.keys(r);if(d.length===1)o=d[0],s=r[o];else throw new TypeError(`Expected tuple with one key, not ${d.length} keys`)}else o=r;i.items.push(kd(o,s,n))}return i}const Nd={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:nf,createNode:lf};class _l extends _n{constructor(){super(),this.add=ot.prototype.add.bind(this),this.delete=ot.prototype.delete.bind(this),this.get=ot.prototype.get.bind(this),this.has=ot.prototype.has.bind(this),this.set=ot.prototype.set.bind(this),this.tag=_l.tag}toJSON(t,n){if(!n)return super.toJSON(t);const l=new Map;n!=null&&n.onCreate&&n.onCreate(l);for(const i of this.items){let a,r;if(_e(i)?(a=ht(i.key,"",n),r=ht(i.value,a,n)):a=ht(i,"",n),l.has(a))throw new Error("Ordered maps must not include duplicate keys");l.set(a,r)}return l}static from(t,n,l){const i=lf(t,n,l),a=new this;return a.items=i.items,a}}_l.tag="tag:yaml.org,2002:omap";const Ad={collection:"seq",identify:e=>e instanceof Map,nodeClass:_l,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const n=nf(e,t),l=[];for(const{key:i}of n.items)pe(i)&&(l.includes(i.value)?t(`Ordered maps must not include duplicate keys: ${i.value}`):l.push(i.value));return Object.assign(new _l,n)},createNode:(e,t,n)=>_l.from(e,t,n)};function af({value:e,source:t},n){return t&&(e?rf:of).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}const rf={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Y(!0),stringify:af},of={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Y(!1),stringify:af},fh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Et},yh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Et(e)}},gh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new Y(parseFloat(e.replace(/_/g,""))),n=e.indexOf(".");if(n!==-1){const l=e.substring(n+1).replace(/_/g,"");l[l.length-1]==="0"&&(t.minFractionDigits=l.length)}return t},stringify:Et},$i=e=>typeof e=="bigint"||Number.isInteger(e);function Or(e,t,n,{intAsBigInt:l}){const i=e[0];if((i==="-"||i==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),l){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const r=BigInt(e);return i==="-"?BigInt(-1)*r:r}const a=parseInt(e,n);return i==="-"?-1*a:a}function Ed(e,t,n){const{value:l}=e;if($i(l)){const i=l.toString(t);return l<0?"-"+n+i.substr(1):n+i}return Et(e)}const bh={identify:$i,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>Or(e,2,2,n),stringify:e=>Ed(e,2,"0b")},hh={identify:$i,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>Or(e,1,8,n),stringify:e=>Ed(e,8,"0")},_h={identify:$i,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>Or(e,0,10,n),stringify:Et},xh={identify:$i,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>Or(e,2,16,n),stringify:e=>Ed(e,16,"0x")};class xl extends ot{constructor(t){super(t),this.tag=xl.tag}add(t){let n;_e(t)?n=t:t&&typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?n=new We(t.key,null):n=new We(t,null),An(this.items,n.key)||this.items.push(n)}get(t,n){const l=An(this.items,t);return!n&&_e(l)?pe(l.key)?l.key.value:l.key:l}set(t,n){if(typeof n!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);const l=An(this.items,t);l&&!n?this.items.splice(this.items.indexOf(l),1):!l&&n&&this.items.push(new We(t))}toJSON(t,n){return super.toJSON(t,n,Set)}toString(t,n,l){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),n,l);throw new Error("Set items must all have null values")}static from(t,n,l){const{replacer:i}=l,a=new this(t);if(n&&Symbol.iterator in Object(n))for(let r of n)typeof i=="function"&&(r=i.call(n,r,r)),a.items.push(kd(r,null,l));return a}}xl.tag="tag:yaml.org,2002:set";const Vd={collection:"map",identify:e=>e instanceof Set,nodeClass:xl,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,n)=>xl.from(e,t,n),resolve(e,t){if(Rl(e)){if(e.hasAllNullValues(!0))return Object.assign(new xl,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function Rd(e,t){const n=e[0],l=n==="-"||n==="+"?e.substring(1):e,i=r=>t?BigInt(r):Number(r),a=l.replace(/_/g,"").split(":").reduce((r,o)=>r*i(60)+i(o),i(0));return n==="-"?i(-1)*a:a}function sf(e){let{value:t}=e,n=r=>r;if(typeof t=="bigint")n=r=>BigInt(r);else if(isNaN(t)||!isFinite(t))return Et(e);let l="";t<0&&(l="-",t*=n(-1));const i=n(60),a=[t%i];return t<60?a.unshift(0):(t=(t-a[0])/i,a.unshift(t%i),t>=60&&(t=(t-a[0])/i,a.unshift(t))),l+a.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const df={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>Rd(e,n),stringify:sf},cf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Rd(e,!1),stringify:sf},Br={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(Br.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,n,l,i,a,r,o]=t.map(Number),s=t[7]?Number((t[7]+"00").substr(1,3)):0;let d=Date.UTC(n,l-1,i,a||0,r||0,o||0,s);const u=t[8];if(u&&u!=="Z"){let p=Rd(u,!1);Math.abs(p)<30&&(p*=60),d-=6e4*p}return new Date(d)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},tu=[Ml,Fl,Gr,Mr,rf,of,bh,hh,_h,xh,fh,yh,gh,Td,qt,Ad,Nd,Vd,df,cf,Br],nu=new Map([["core",ch],["failsafe",[Ml,Fl,Gr]],["json",mh],["yaml11",tu],["yaml-1.1",tu]]),lu={binary:Td,bool:Pd,float:Xm,floatExp:Ym,floatNaN:Qm,floatTime:cf,int:ef,intHex:tf,intOct:Zm,intTime:df,map:Ml,merge:qt,null:Mr,omap:Ad,pairs:Nd,seq:Fl,set:Vd,timestamp:Br},vh={"tag:yaml.org,2002:binary":Td,"tag:yaml.org,2002:merge":qt,"tag:yaml.org,2002:omap":Ad,"tag:yaml.org,2002:pairs":Nd,"tag:yaml.org,2002:set":Vd,"tag:yaml.org,2002:timestamp":Br};function _o(e,t,n){const l=nu.get(t);if(l&&!e)return n&&!l.includes(qt)?l.concat(qt):l.slice();let i=l;if(!i)if(Array.isArray(e))i=[];else{const a=Array.from(nu.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${a} or define customTags array`)}if(Array.isArray(e))for(const a of e)i=i.concat(a);else typeof e=="function"&&(i=e(i.slice()));return n&&(i=i.concat(qt)),i.reduce((a,r)=>{const o=typeof r=="string"?lu[r]:r;if(!o){const s=JSON.stringify(r),d=Object.keys(lu).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${s}; use one of ${d}`)}return a.includes(o)||a.push(o),a},[])}const wh=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class Ir{constructor({compat:t,customTags:n,merge:l,resolveKnownTags:i,schema:a,sortMapEntries:r,toStringDefaults:o}){this.compat=Array.isArray(t)?_o(t,"compat"):t?_o(null,t):null,this.name=typeof a=="string"&&a||"core",this.knownTags=i?vh:{},this.tags=_o(n,this.name,l),this.toStringOptions=o??null,Object.defineProperty(this,gn,{value:Ml}),Object.defineProperty(this,Bt,{value:Gr}),Object.defineProperty(this,Vl,{value:Fl}),this.sortMapEntries=typeof r=="function"?r:r===!0?wh:null}clone(){const t=Object.create(Ir.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function Ch(e,t){var s;const n=[];let l=t.directives===!0;if(t.directives!==!1&&e.directives){const d=e.directives.toString(e);d?(n.push(d),l=!0):e.directives.docStart&&(l=!0)}l&&n.push("---");const i=$m(e,t),{commentString:a}=i.options;if(e.commentBefore){n.length!==1&&n.unshift("");const d=a(e.commentBefore);n.unshift($t(d,""))}let r=!1,o=null;if(e.contents){if(Ce(e.contents)){if(e.contents.spaceBefore&&l&&n.push(""),e.contents.commentBefore){const p=a(e.contents.commentBefore);n.push($t(p,""))}i.forceBlockIndent=!!e.comment,o=e.contents.comment}const d=o?void 0:()=>r=!0;let u=Dl(e.contents,i,()=>o=null,d);o&&(u+=Nn(u,"",a(o))),(u[0]==="|"||u[0]===">")&&n[n.length-1]==="---"?n[n.length-1]=`--- ${u}`:n.push(u)}else n.push(Dl(e.contents,i));if((s=e.directives)!=null&&s.docEnd)if(e.comment){const d=a(e.comment);d.includes(`
`)?(n.push("..."),n.push($t(d,""))):n.push(`... ${d}`)}else n.push("...");else{let d=e.comment;d&&r&&(d=d.replace(/^\n+/,"")),d&&((!r||o)&&n[n.length-1]!==""&&n.push(""),n.push($t(a(d),"")))}return n.join(`
`)+`
`}class Ol{constructor(t,n,l){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,vt,{value:_s});let i=null;typeof n=="function"||Array.isArray(n)?i=n:l===void 0&&n&&(l=n,n=void 0);const a=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},l);this.options=a;let{version:r}=a;l!=null&&l._directives?(this.directives=l._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new ze({version:r}),this.setSchema(r,l),this.contents=t===void 0?null:this.createNode(t,i,l)}clone(){const t=Object.create(Ol.prototype,{[vt]:{value:_s}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=Ce(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){Kn(this.contents)&&this.contents.add(t)}addIn(t,n){Kn(this.contents)&&this.contents.addIn(t,n)}createAlias(t,n){if(!t.anchor){const l=Bm(this);t.anchor=!n||l.has(n)?Im(n||"a",l):n}return new Ar(t.anchor)}createNode(t,n,l){let i;if(typeof n=="function")t=n.call({"":t},"",t),i=n;else if(Array.isArray(n)){const _=y=>typeof y=="number"||y instanceof String||y instanceof Number,b=n.filter(_).map(String);b.length>0&&(n=n.concat(b)),i=n}else l===void 0&&n&&(l=n,n=void 0);const{aliasDuplicateObjects:a,anchorPrefix:r,flow:o,keepUndefined:s,onTagObj:d,tag:u}=l??{},{onAnchor:p,setAnchors:f,sourceObjects:m}=Xb(this,r||"a"),x={aliasDuplicateObjects:a??!0,keepUndefined:s??!1,onAnchor:p,onTagObj:d,replacer:i,schema:this.schema,sourceObjects:m},g=Gi(t,u,x);return o&&ve(g)&&(g.flow=!0),f(),g}createPair(t,n,l={}){const i=this.createNode(t,null,l),a=this.createNode(n,null,l);return new We(i,a)}delete(t){return Kn(this.contents)?this.contents.delete(t):!1}deleteIn(t){return ri(t)?this.contents==null?!1:(this.contents=null,!0):Kn(this.contents)?this.contents.deleteIn(t):!1}get(t,n){return ve(this.contents)?this.contents.get(t,n):void 0}getIn(t,n){return ri(t)?!n&&pe(this.contents)?this.contents.value:this.contents:ve(this.contents)?this.contents.getIn(t,n):void 0}has(t){return ve(this.contents)?this.contents.has(t):!1}hasIn(t){return ri(t)?this.contents!==void 0:ve(this.contents)?this.contents.hasIn(t):!1}set(t,n){this.contents==null?this.contents=dr(this.schema,[t],n):Kn(this.contents)&&this.contents.set(t,n)}setIn(t,n){ri(t)?this.contents=n:this.contents==null?this.contents=dr(this.schema,Array.from(t),n):Kn(this.contents)&&this.contents.setIn(t,n)}setSchema(t,n={}){typeof t=="number"&&(t=String(t));let l;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new ze({version:"1.1"}),l={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new ze({version:t}),l={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,l=null;break;default:{const i=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(n.schema instanceof Object)this.schema=n.schema;else if(l)this.schema=new Ir(Object.assign(l,n));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:n,mapAsMap:l,maxAliasCount:i,onAnchor:a,reviver:r}={}){const o={anchors:new Map,doc:this,keep:!t,mapAsMap:l===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},s=ht(this.contents,n??"",o);if(typeof a=="function")for(const{count:d,res:u}of o.anchors.values())a(u,d);return typeof r=="function"?ul(r,{"":s},"",s):s}toJSON(t,n){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:n})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const n=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${n}`)}return Ch(this,t)}}function Kn(e){if(ve(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Gd extends Error{constructor(t,n,l,i){super(),this.name=t,this.code=l,this.message=i,this.pos=n}}class En extends Gd{constructor(t,n,l){super("YAMLParseError",t,n,l)}}class uf extends Gd{constructor(t,n,l){super("YAMLWarning",t,n,l)}}const ur=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(o=>t.linePos(o));const{line:l,col:i}=n.linePos[0];n.message+=` at line ${l}, column ${i}`;let a=i-1,r=e.substring(t.lineStarts[l-1],t.lineStarts[l]).replace(/[\n\r]+$/,"");if(a>=60&&r.length>80){const o=Math.min(a-39,r.length-79);r="…"+r.substring(o),a-=o-1}if(r.length>80&&(r=r.substring(0,79)+"…"),l>1&&/^ *$/.test(r.substring(0,a))){let o=e.substring(t.lineStarts[l-2],t.lineStarts[l-1]);o.length>80&&(o=o.substring(0,79)+`…
`),r=o+r}if(/[^ ]/.test(r)){let o=1;const s=n.linePos[1];s&&s.line===l&&s.col>i&&(o=Math.max(1,Math.min(s.col-i,80-a)));const d=" ".repeat(a)+"^".repeat(o);n.message+=`:

${r}
${d}
`}};function Tl(e,{flow:t,indicator:n,next:l,offset:i,onError:a,parentIndent:r,startOnNewline:o}){let s=!1,d=o,u=o,p="",f="",m=!1,x=!1,g=null,_=null,b=null,y=null,h=null,w=null,k=null;for(const v of e)switch(x&&(v.type!=="space"&&v.type!=="newline"&&v.type!=="comma"&&a(v.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),g&&(d&&v.type!=="comment"&&v.type!=="newline"&&a(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),v.type){case"space":!t&&(n!=="doc-start"||(l==null?void 0:l.type)!=="flow-collection")&&v.source.includes("	")&&(g=v),u=!0;break;case"comment":{u||a(v,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const A=v.source.substring(1)||" ";p?p+=f+A:p=A,f="",d=!1;break}case"newline":d?p?p+=v.source:(!w||n!=="seq-item-ind")&&(s=!0):f+=v.source,d=!0,m=!0,(_||b)&&(y=v),u=!0;break;case"anchor":_&&a(v,"MULTIPLE_ANCHORS","A node can have at most one anchor"),v.source.endsWith(":")&&a(v.offset+v.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=v,k??(k=v.offset),d=!1,u=!1,x=!0;break;case"tag":{b&&a(v,"MULTIPLE_TAGS","A node can have at most one tag"),b=v,k??(k=v.offset),d=!1,u=!1,x=!0;break}case n:(_||b)&&a(v,"BAD_PROP_ORDER",`Anchors and tags must be after the ${v.source} indicator`),w&&a(v,"UNEXPECTED_TOKEN",`Unexpected ${v.source} in ${t??"collection"}`),w=v,d=n==="seq-item-ind"||n==="explicit-key-ind",u=!1;break;case"comma":if(t){h&&a(v,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),h=v,d=!1,u=!1;break}default:a(v,"UNEXPECTED_TOKEN",`Unexpected ${v.type} token`),d=!1,u=!1}const L=e[e.length-1],S=L?L.offset+L.source.length:i;return x&&l&&l.type!=="space"&&l.type!=="newline"&&l.type!=="comma"&&(l.type!=="scalar"||l.source!=="")&&a(l.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(d&&g.indent<=r||(l==null?void 0:l.type)==="block-map"||(l==null?void 0:l.type)==="block-seq")&&a(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:h,found:w,spaceBefore:s,comment:p,hasNewline:m,anchor:_,tag:b,newlineAfterProp:y,end:S,start:k??S}}function Mi(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const n of t.start)if(n.type==="newline")return!0;if(t.sep){for(const n of t.sep)if(n.type==="newline")return!0}if(Mi(t.key)||Mi(t.value))return!0}return!1;default:return!0}}function Cs(e,t,n){if((t==null?void 0:t.type)==="flow-collection"){const l=t.end[0];l.indent===e&&(l.source==="]"||l.source==="}")&&Mi(t)&&n(l,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function pf(e,t,n){const{uniqueKeys:l}=e.options;if(l===!1)return!1;const i=typeof l=="function"?l:(a,r)=>a===r||pe(a)&&pe(r)&&a.value===r.value;return t.some(a=>i(a.key,n))}const iu="All mapping items must start at the same column";function Sh({composeNode:e,composeEmptyNode:t},n,l,i,a){var u;const r=(a==null?void 0:a.nodeClass)??ot,o=new r(n.schema);n.atRoot&&(n.atRoot=!1);let s=l.offset,d=null;for(const p of l.items){const{start:f,key:m,sep:x,value:g}=p,_=Tl(f,{indicator:"explicit-key-ind",next:m??(x==null?void 0:x[0]),offset:s,onError:i,parentIndent:l.indent,startOnNewline:!0}),b=!_.found;if(b){if(m&&(m.type==="block-seq"?i(s,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in m&&m.indent!==l.indent&&i(s,"BAD_INDENT",iu)),!_.anchor&&!_.tag&&!x){d=_.end,_.comment&&(o.comment?o.comment+=`
`+_.comment:o.comment=_.comment);continue}(_.newlineAfterProp||Mi(m))&&i(m??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=_.found)==null?void 0:u.indent)!==l.indent&&i(s,"BAD_INDENT",iu);n.atKey=!0;const y=_.end,h=m?e(n,m,_,i):t(n,y,f,null,_,i);n.schema.compat&&Cs(l.indent,m,i),n.atKey=!1,pf(n,o.items,h)&&i(y,"DUPLICATE_KEY","Map keys must be unique");const w=Tl(x??[],{indicator:"map-value-ind",next:g,offset:h.range[2],onError:i,parentIndent:l.indent,startOnNewline:!m||m.type==="block-scalar"});if(s=w.end,w.found){b&&((g==null?void 0:g.type)==="block-map"&&!w.hasNewline&&i(s,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),n.options.strict&&_.start<w.found.offset-1024&&i(h.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const k=g?e(n,g,w,i):t(n,s,x,null,w,i);n.schema.compat&&Cs(l.indent,g,i),s=k.range[2];const L=new We(h,k);n.options.keepSourceTokens&&(L.srcToken=p),o.items.push(L)}else{b&&i(h.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),w.comment&&(h.comment?h.comment+=`
`+w.comment:h.comment=w.comment);const k=new We(h);n.options.keepSourceTokens&&(k.srcToken=p),o.items.push(k)}}return d&&d<s&&i(d,"IMPOSSIBLE","Map comment with trailing content"),o.range=[l.offset,s,d??s],o}function Lh({composeNode:e,composeEmptyNode:t},n,l,i,a){const r=(a==null?void 0:a.nodeClass)??_n,o=new r(n.schema);n.atRoot&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let s=l.offset,d=null;for(const{start:u,value:p}of l.items){const f=Tl(u,{indicator:"seq-item-ind",next:p,offset:s,onError:i,parentIndent:l.indent,startOnNewline:!0});if(!f.found)if(f.anchor||f.tag||p)p&&p.type==="block-seq"?i(f.end,"BAD_INDENT","All sequence items must start at the same column"):i(s,"MISSING_CHAR","Sequence item without - indicator");else{d=f.end,f.comment&&(o.comment=f.comment);continue}const m=p?e(n,p,f,i):t(n,f.end,u,null,f,i);n.schema.compat&&Cs(l.indent,p,i),s=m.range[2],o.items.push(m)}return o.range=[l.offset,s,d??s],o}function Hi(e,t,n,l){let i="";if(e){let a=!1,r="";for(const o of e){const{source:s,type:d}=o;switch(d){case"space":a=!0;break;case"comment":{n&&!a&&l(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=s.substring(1)||" ";i?i+=r+u:i=u,r="";break}case"newline":i&&(r+=s),a=!0;break;default:l(o,"UNEXPECTED_TOKEN",`Unexpected ${d} at node end`)}t+=s.length}}return{comment:i,offset:t}}const xo="Block collections are not allowed within flow collections",vo=e=>e&&(e.type==="block-map"||e.type==="block-seq");function kh({composeNode:e,composeEmptyNode:t},n,l,i,a){const r=l.start.source==="{",o=r?"flow map":"flow sequence",s=(a==null?void 0:a.nodeClass)??(r?ot:_n),d=new s(n.schema);d.flow=!0;const u=n.atRoot;u&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let p=l.offset+l.start.source.length;for(let _=0;_<l.items.length;++_){const b=l.items[_],{start:y,key:h,sep:w,value:k}=b,L=Tl(y,{flow:o,indicator:"explicit-key-ind",next:h??(w==null?void 0:w[0]),offset:p,onError:i,parentIndent:l.indent,startOnNewline:!1});if(!L.found){if(!L.anchor&&!L.tag&&!w&&!k){_===0&&L.comma?i(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):_<l.items.length-1&&i(L.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),L.comment&&(d.comment?d.comment+=`
`+L.comment:d.comment=L.comment),p=L.end;continue}!r&&n.options.strict&&Mi(h)&&i(h,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)L.comma&&i(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(L.comma||i(L.start,"MISSING_CHAR",`Missing , between ${o} items`),L.comment){let S="";e:for(const v of y)switch(v.type){case"comma":case"space":break;case"comment":S=v.source.substring(1);break e;default:break e}if(S){let v=d.items[d.items.length-1];_e(v)&&(v=v.value??v.key),v.comment?v.comment+=`
`+S:v.comment=S,L.comment=L.comment.substring(S.length+1)}}if(!r&&!w&&!L.found){const S=k?e(n,k,L,i):t(n,L.end,w,null,L,i);d.items.push(S),p=S.range[2],vo(k)&&i(S.range,"BLOCK_IN_FLOW",xo)}else{n.atKey=!0;const S=L.end,v=h?e(n,h,L,i):t(n,S,y,null,L,i);vo(h)&&i(v.range,"BLOCK_IN_FLOW",xo),n.atKey=!1;const A=Tl(w??[],{flow:o,indicator:"map-value-ind",next:k,offset:v.range[2],onError:i,parentIndent:l.indent,startOnNewline:!1});if(A.found){if(!r&&!L.found&&n.options.strict){if(w)for(const B of w){if(B===A.found)break;if(B.type==="newline"){i(B,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}L.start<A.found.offset-1024&&i(A.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else k&&("source"in k&&k.source&&k.source[0]===":"?i(k,"MISSING_CHAR",`Missing space after : in ${o}`):i(A.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const R=k?e(n,k,A,i):A.found?t(n,A.end,w,null,A,i):null;R?vo(k)&&i(R.range,"BLOCK_IN_FLOW",xo):A.comment&&(v.comment?v.comment+=`
`+A.comment:v.comment=A.comment);const U=new We(v,R);if(n.options.keepSourceTokens&&(U.srcToken=b),r){const B=d;pf(n,B.items,v)&&i(S,"DUPLICATE_KEY","Map keys must be unique"),B.items.push(U)}else{const B=new ot(n.schema);B.flow=!0,B.items.push(U);const H=(R??v).range;B.range=[v.range[0],H[1],H[2]],d.items.push(B)}p=R?R.range[2]:A.end}}const f=r?"}":"]",[m,...x]=l.end;let g=p;if(m&&m.source===f)g=m.offset+m.source.length;else{const _=o[0].toUpperCase()+o.substring(1),b=u?`${_} must end with a ${f}`:`${_} in block collection must be sufficiently indented and end with a ${f}`;i(p,u?"MISSING_CHAR":"BAD_INDENT",b),m&&m.source.length!==1&&x.unshift(m)}if(x.length>0){const _=Hi(x,g,n.options.strict,i);_.comment&&(d.comment?d.comment+=`
`+_.comment:d.comment=_.comment),d.range=[l.offset,g,_.offset]}else d.range=[l.offset,g,g];return d}function wo(e,t,n,l,i,a){const r=n.type==="block-map"?Sh(e,t,n,l,a):n.type==="block-seq"?Lh(e,t,n,l,a):kh(e,t,n,l,a),o=r.constructor;return i==="!"||i===o.tagName?(r.tag=o.tagName,r):(i&&(r.tag=i),r)}function Ph(e,t,n,l,i){var f;const a=l.tag,r=a?t.directives.tagName(a.source,m=>i(a,"TAG_RESOLVE_FAILED",m)):null;if(n.type==="block-seq"){const{anchor:m,newlineAfterProp:x}=l,g=m&&a?m.offset>a.offset?m:a:m??a;g&&(!x||x.offset<g.offset)&&i(g,"MISSING_CHAR","Missing newline after block sequence props")}const o=n.type==="block-map"?"map":n.type==="block-seq"?"seq":n.start.source==="{"?"map":"seq";if(!a||!r||r==="!"||r===ot.tagName&&o==="map"||r===_n.tagName&&o==="seq")return wo(e,t,n,i,r);let s=t.schema.tags.find(m=>m.tag===r&&m.collection===o);if(!s){const m=t.schema.knownTags[r];if(m&&m.collection===o)t.schema.tags.push(Object.assign({},m,{default:!1})),s=m;else return m?i(a,"BAD_COLLECTION_TYPE",`${m.tag} used for ${o} collection, but expects ${m.collection??"scalar"}`,!0):i(a,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),wo(e,t,n,i,r)}const d=wo(e,t,n,i,r,s),u=((f=s.resolve)==null?void 0:f.call(s,d,m=>i(a,"TAG_RESOLVE_FAILED",m),t.options))??d,p=Ce(u)?u:new Y(u);return p.range=d.range,p.tag=r,s!=null&&s.format&&(p.format=s.format),p}function mf(e,t,n){const l=t.offset,i=Dh(t,e.options.strict,n);if(!i)return{value:"",type:null,comment:"",range:[l,l,l]};const a=i.mode===">"?Y.BLOCK_FOLDED:Y.BLOCK_LITERAL,r=t.source?Th(t.source):[];let o=r.length;for(let g=r.length-1;g>=0;--g){const _=r[g][1];if(_===""||_==="\r")o=g;else break}if(o===0){const g=i.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let _=l+i.length;return t.source&&(_+=t.source.length),{value:g,type:a,comment:i.comment,range:[l,_,_]}}let s=t.indent+i.indent,d=t.offset+i.length,u=0;for(let g=0;g<o;++g){const[_,b]=r[g];if(b===""||b==="\r")i.indent===0&&_.length>s&&(s=_.length);else{_.length<s&&n(d+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(s=_.length),u=g,s===0&&!e.atRoot&&n(d,"BAD_INDENT","Block scalar values in collections must be indented");break}d+=_.length+b.length+1}for(let g=r.length-1;g>=o;--g)r[g][0].length>s&&(o=g+1);let p="",f="",m=!1;for(let g=0;g<u;++g)p+=r[g][0].slice(s)+`
`;for(let g=u;g<o;++g){let[_,b]=r[g];d+=_.length+b.length+1;const y=b[b.length-1]==="\r";if(y&&(b=b.slice(0,-1)),b&&_.length<s){const w=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;n(d-b.length-(y?2:1),"BAD_INDENT",w),_=""}a===Y.BLOCK_LITERAL?(p+=f+_.slice(s)+b,f=`
`):_.length>s||b[0]==="	"?(f===" "?f=`
`:!m&&f===`
`&&(f=`

`),p+=f+_.slice(s)+b,f=`
`,m=!0):b===""?f===`
`?p+=`
`:f=`
`:(p+=f+b,f=" ",m=!1)}switch(i.chomp){case"-":break;case"+":for(let g=o;g<r.length;++g)p+=`
`+r[g][0].slice(s);p[p.length-1]!==`
`&&(p+=`
`);break;default:p+=`
`}const x=l+i.length+t.source.length;return{value:p,type:a,comment:i.comment,range:[l,x,x]}}function Dh({offset:e,props:t},n,l){if(t[0].type!=="block-scalar-header")return l(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=t[0],a=i[0];let r=0,o="",s=-1;for(let f=1;f<i.length;++f){const m=i[f];if(!o&&(m==="-"||m==="+"))o=m;else{const x=Number(m);!r&&x?r=x:s===-1&&(s=e+f)}}s!==-1&&l(s,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let d=!1,u="",p=i.length;for(let f=1;f<t.length;++f){const m=t[f];switch(m.type){case"space":d=!0;case"newline":p+=m.source.length;break;case"comment":n&&!d&&l(m,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),p+=m.source.length,u=m.source.substring(1);break;case"error":l(m,"UNEXPECTED_TOKEN",m.message),p+=m.source.length;break;default:{const x=`Unexpected token in block scalar header: ${m.type}`;l(m,"UNEXPECTED_TOKEN",x);const g=m.source;g&&typeof g=="string"&&(p+=g.length)}}}return{mode:a,indent:r,chomp:o,comment:u,length:p}}function Th(e){const t=e.split(/\n( *)/),n=t[0],l=n.match(/^( *)/),a=[l!=null&&l[1]?[l[1],n.slice(l[1].length)]:["",n]];for(let r=1;r<t.length;r+=2)a.push([t[r],t[r+1]]);return a}function ff(e,t,n){const{offset:l,type:i,source:a,end:r}=e;let o,s;const d=(f,m,x)=>n(l+f,m,x);switch(i){case"scalar":o=Y.PLAIN,s=Nh(a,d);break;case"single-quoted-scalar":o=Y.QUOTE_SINGLE,s=Ah(a,d);break;case"double-quoted-scalar":o=Y.QUOTE_DOUBLE,s=Eh(a,d);break;default:return n(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[l,l+a.length,l+a.length]}}const u=l+a.length,p=Hi(r,u,t,n);return{value:s,type:o,comment:p.comment,range:[l,u,p.offset]}}function Nh(e,t){let n="";switch(e[0]){case"	":n="a tab character";break;case",":n="flow indicator character ,";break;case"%":n="directive indicator character %";break;case"|":case">":{n=`block scalar indicator ${e[0]}`;break}case"@":case"`":{n=`reserved character ${e[0]}`;break}}return n&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${n}`),yf(e)}function Ah(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),yf(e.slice(1,-1)).replace(/''/g,"'")}function yf(e){let t,n;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),n=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let l=t.exec(e);if(!l)return e;let i=l[1],a=" ",r=t.lastIndex;for(n.lastIndex=r;l=n.exec(e);)l[1]===""?a===`
`?i+=a:a=`
`:(i+=a+l[1],a=" "),r=n.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=r,l=o.exec(e),i+a+((l==null?void 0:l[1])??"")}function Eh(e,t){let n="";for(let l=1;l<e.length-1;++l){const i=e[l];if(!(i==="\r"&&e[l+1]===`
`))if(i===`
`){const{fold:a,offset:r}=Vh(e,l);n+=a,l=r}else if(i==="\\"){let a=e[++l];const r=Rh[a];if(r)n+=r;else if(a===`
`)for(a=e[l+1];a===" "||a==="	";)a=e[++l+1];else if(a==="\r"&&e[l+1]===`
`)for(a=e[++l+1];a===" "||a==="	";)a=e[++l+1];else if(a==="x"||a==="u"||a==="U"){const o={x:2,u:4,U:8}[a];n+=Gh(e,l+1,o,t),l+=o}else{const o=e.substr(l-1,2);t(l-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),n+=o}}else if(i===" "||i==="	"){const a=l;let r=e[l+1];for(;r===" "||r==="	";)r=e[++l+1];r!==`
`&&!(r==="\r"&&e[l+2]===`
`)&&(n+=l>a?e.slice(a,l+1):i)}else n+=i}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),n}function Vh(e,t){let n="",l=e[t+1];for(;(l===" "||l==="	"||l===`
`||l==="\r")&&!(l==="\r"&&e[t+2]!==`
`);)l===`
`&&(n+=`
`),t+=1,l=e[t+1];return n||(n=" "),{fold:n,offset:t}}const Rh={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Gh(e,t,n,l){const i=e.substr(t,n),r=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(r)){const o=e.substr(t-2,n+2);return l(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(r)}function gf(e,t,n,l){const{value:i,type:a,comment:r,range:o}=t.type==="block-scalar"?mf(e,t,l):ff(t,e.options.strict,l),s=n?e.directives.tagName(n.source,p=>l(n,"TAG_RESOLVE_FAILED",p)):null;let d;e.options.stringKeys&&e.atKey?d=e.schema[Bt]:s?d=Mh(e.schema,i,s,n,l):t.type==="scalar"?d=Fh(e,i,t,l):d=e.schema[Bt];let u;try{const p=d.resolve(i,f=>l(n??t,"TAG_RESOLVE_FAILED",f),e.options);u=pe(p)?p:new Y(p)}catch(p){const f=p instanceof Error?p.message:String(p);l(n??t,"TAG_RESOLVE_FAILED",f),u=new Y(i)}return u.range=o,u.source=i,a&&(u.type=a),s&&(u.tag=s),d.format&&(u.format=d.format),r&&(u.comment=r),u}function Mh(e,t,n,l,i){var o;if(n==="!")return e[Bt];const a=[];for(const s of e.tags)if(!s.collection&&s.tag===n)if(s.default&&s.test)a.push(s);else return s;for(const s of a)if((o=s.test)!=null&&o.test(t))return s;const r=e.knownTags[n];return r&&!r.collection?(e.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(i(l,"TAG_RESOLVE_FAILED",`Unresolved tag: ${n}`,n!=="tag:yaml.org,2002:str"),e[Bt])}function Fh({atKey:e,directives:t,schema:n},l,i,a){const r=n.tags.find(o=>{var s;return(o.default===!0||e&&o.default==="key")&&((s=o.test)==null?void 0:s.test(l))})||n[Bt];if(n.compat){const o=n.compat.find(s=>{var d;return s.default&&((d=s.test)==null?void 0:d.test(l))})??n[Bt];if(r.tag!==o.tag){const s=t.tagString(r.tag),d=t.tagString(o.tag),u=`Value may be parsed as either ${s} or ${d}`;a(i,"TAG_RESOLVE_FAILED",u,!0)}}return r}function Oh(e,t,n){if(t){n??(n=t.length);for(let l=n-1;l>=0;--l){let i=t[l];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=t[++l];(i==null?void 0:i.type)==="space";)e+=i.source.length,i=t[++l];break}}return e}const Bh={composeNode:bf,composeEmptyNode:Md};function bf(e,t,n,l){const i=e.atKey,{spaceBefore:a,comment:r,anchor:o,tag:s}=n;let d,u=!0;switch(t.type){case"alias":d=Ih(e,t,l),(o||s)&&l(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":d=gf(e,t,s,l),o&&(d.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":d=Ph(Bh,e,t,n,l),o&&(d.anchor=o.source.substring(1));break;default:{const p=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;l(t,"UNEXPECTED_TOKEN",p),d=Md(e,t.offset,void 0,null,n,l),u=!1}}return o&&d.anchor===""&&l(o,"BAD_ALIAS","Anchor cannot be an empty string"),i&&e.options.stringKeys&&(!pe(d)||typeof d.value!="string"||d.tag&&d.tag!=="tag:yaml.org,2002:str")&&l(s??t,"NON_STRING_KEY","With stringKeys, all keys must be strings"),a&&(d.spaceBefore=!0),r&&(t.type==="scalar"&&t.source===""?d.comment=r:d.commentBefore=r),e.options.keepSourceTokens&&u&&(d.srcToken=t),d}function Md(e,t,n,l,{spaceBefore:i,comment:a,anchor:r,tag:o,end:s},d){const u={type:"scalar",offset:Oh(t,n,l),indent:-1,source:""},p=gf(e,u,o,d);return r&&(p.anchor=r.source.substring(1),p.anchor===""&&d(r,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(p.spaceBefore=!0),a&&(p.comment=a,p.range[2]=s),p}function Ih({options:e},{offset:t,source:n,end:l},i){const a=new Ar(n.substring(1));a.source===""&&i(t,"BAD_ALIAS","Alias cannot be an empty string"),a.source.endsWith(":")&&i(t+n.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=t+n.length,o=Hi(l,r,e.strict,i);return a.range=[t,r,o.offset],o.comment&&(a.comment=o.comment),a}function jh(e,t,{offset:n,start:l,value:i,end:a},r){const o=Object.assign({_directives:t},e),s=new Ol(void 0,o),d={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},u=Tl(l,{indicator:"doc-start",next:i??(a==null?void 0:a[0]),offset:n,onError:r,parentIndent:0,startOnNewline:!0});u.found&&(s.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&r(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),s.contents=i?bf(d,i,u,r):Md(d,u.end,l,null,u,r);const p=s.contents.range[2],f=Hi(a,p,!1,r);return f.comment&&(s.comment=f.comment),s.range=[n,p,f.offset],s}function Jl(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:n}=e;return[t,t+(typeof n=="string"?n.length:1)]}function au(e){var i;let t="",n=!1,l=!1;for(let a=0;a<e.length;++a){const r=e[a];switch(r[0]){case"#":t+=(t===""?"":l?`

`:`
`)+(r.substring(1)||" "),n=!0,l=!1;break;case"%":((i=e[a+1])==null?void 0:i[0])!=="#"&&(a+=1),n=!1;break;default:n||(l=!0),n=!1}}return{comment:t,afterEmptyLine:l}}class Fd{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(n,l,i,a)=>{const r=Jl(n);a?this.warnings.push(new uf(r,l,i)):this.errors.push(new En(r,l,i))},this.directives=new ze({version:t.version||"1.2"}),this.options=t}decorate(t,n){const{comment:l,afterEmptyLine:i}=au(this.prelude);if(l){const a=t.contents;if(n)t.comment=t.comment?`${t.comment}
${l}`:l;else if(i||t.directives.docStart||!a)t.commentBefore=l;else if(ve(a)&&!a.flow&&a.items.length>0){let r=a.items[0];_e(r)&&(r=r.key);const o=r.commentBefore;r.commentBefore=o?`${l}
${o}`:l}else{const r=a.commentBefore;a.commentBefore=r?`${l}
${r}`:l}}n?(Array.prototype.push.apply(t.errors,this.errors),Array.prototype.push.apply(t.warnings,this.warnings)):(t.errors=this.errors,t.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:au(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,n=!1,l=-1){for(const i of t)yield*this.next(i);yield*this.end(n,l)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(n,l,i)=>{const a=Jl(t);a[0]+=n,this.onError(a,"BAD_DIRECTIVE",l,i)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const n=jh(this.options,this.directives,t,this.onError);this.atDirectives&&!n.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(n,!1),this.doc&&(yield this.doc),this.doc=n,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const n=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,l=new En(Jl(t),"UNEXPECTED_TOKEN",n);this.atDirectives||!this.doc?this.errors.push(l):this.doc.errors.push(l);break}case"doc-end":{if(!this.doc){const l="Unexpected doc-end without preceding document";this.errors.push(new En(Jl(t),"UNEXPECTED_TOKEN",l));break}this.doc.directives.docEnd=!0;const n=Hi(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),n.comment){const l=this.doc.comment;this.doc.comment=l?`${l}
${n.comment}`:n.comment}this.doc.range[2]=n.offset;break}default:this.errors.push(new En(Jl(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,n=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const l=Object.assign({_directives:this.directives},this.options),i=new Ol(void 0,l);this.atDirectives&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,n,n],this.decorate(i,!1),yield i}}}function Uh(e,t=!0,n){if(e){const l=(i,a,r)=>{const o=typeof i=="number"?i:Array.isArray(i)?i[0]:i.offset;if(n)n(o,a,r);else throw new En([o,o+1],a,r)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return ff(e,t,l);case"block-scalar":return mf({options:{strict:t}},e,l)}}return null}function Wh(e,t){const{implicitKey:n=!1,indent:l,inFlow:i=!1,offset:a=-1,type:r="PLAIN"}=t,o=Wi({type:r,value:e},{implicitKey:n,indent:l>0?" ".repeat(l):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}}),s=t.end??[{type:"newline",offset:-1,indent:l,source:`
`}];switch(o[0]){case"|":case">":{const d=o.indexOf(`
`),u=o.substring(0,d),p=o.substring(d+1)+`
`,f=[{type:"block-scalar-header",offset:a,indent:l,source:u}];return hf(f,s)||f.push({type:"newline",offset:-1,indent:l,source:`
`}),{type:"block-scalar",offset:a,indent:l,props:f,source:p}}case'"':return{type:"double-quoted-scalar",offset:a,indent:l,source:o,end:s};case"'":return{type:"single-quoted-scalar",offset:a,indent:l,source:o,end:s};default:return{type:"scalar",offset:a,indent:l,source:o,end:s}}}function $h(e,t,n={}){let{afterKey:l=!1,implicitKey:i=!1,inFlow:a=!1,type:r}=n,o="indent"in e?e.indent:null;if(l&&typeof o=="number"&&(o+=2),!r)switch(e.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{const d=e.props[0];if(d.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r=d.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}const s=Wi({type:r,value:t},{implicitKey:i||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:a,options:{blockQuote:!0,lineWidth:-1}});switch(s[0]){case"|":case">":Hh(e,s);break;case'"':Co(e,s,"double-quoted-scalar");break;case"'":Co(e,s,"single-quoted-scalar");break;default:Co(e,s,"scalar")}}function Hh(e,t){const n=t.indexOf(`
`),l=t.substring(0,n),i=t.substring(n+1)+`
`;if(e.type==="block-scalar"){const a=e.props[0];if(a.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a.source=l,e.source=i}else{const{offset:a}=e,r="indent"in e?e.indent:-1,o=[{type:"block-scalar-header",offset:a,indent:r,source:l}];hf(o,"end"in e?e.end:void 0)||o.push({type:"newline",offset:-1,indent:r,source:`
`});for(const s of Object.keys(e))s!=="type"&&s!=="offset"&&delete e[s];Object.assign(e,{type:"block-scalar",indent:r,props:o,source:i})}}function hf(e,t){if(t)for(const n of t)switch(n.type){case"space":case"comment":e.push(n);break;case"newline":return e.push(n),!0}return!1}function Co(e,t,n){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=n,e.source=t;break;case"block-scalar":{const l=e.props.slice(1);let i=t.length;e.props[0].type==="block-scalar-header"&&(i-=e.props[0].source.length);for(const a of l)a.offset+=i;delete e.props,Object.assign(e,{type:n,source:t,end:l});break}case"block-map":case"block-seq":{const i={type:"newline",offset:e.offset+t.length,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:n,source:t,end:[i]});break}default:{const l="indent"in e?e.indent:-1,i="end"in e&&Array.isArray(e.end)?e.end.filter(a=>a.type==="space"||a.type==="comment"||a.type==="newline"):[];for(const a of Object.keys(e))a!=="type"&&a!=="offset"&&delete e[a];Object.assign(e,{type:n,indent:l,source:t,end:i})}}}const qh=e=>"type"in e?pr(e):Ma(e);function pr(e){switch(e.type){case"block-scalar":{let t="";for(const n of e.props)t+=pr(n);return t+e.source}case"block-map":case"block-seq":{let t="";for(const n of e.items)t+=Ma(n);return t}case"flow-collection":{let t=e.start.source;for(const n of e.items)t+=Ma(n);for(const n of e.end)t+=n.source;return t}case"document":{let t=Ma(e);if(e.end)for(const n of e.end)t+=n.source;return t}default:{let t=e.source;if("end"in e&&e.end)for(const n of e.end)t+=n.source;return t}}}function Ma({start:e,key:t,sep:n,value:l}){let i="";for(const a of e)i+=a.source;if(t&&(i+=pr(t)),n)for(const a of n)i+=a.source;return l&&(i+=pr(l)),i}const Ss=Symbol("break visit"),zh=Symbol("skip children"),_f=Symbol("remove item");function In(e,t){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),xf(Object.freeze([]),e,t)}In.BREAK=Ss;In.SKIP=zh;In.REMOVE=_f;In.itemAtPath=(e,t)=>{let n=e;for(const[l,i]of t){const a=n==null?void 0:n[l];if(a&&"items"in a)n=a.items[i];else return}return n};In.parentCollection=(e,t)=>{const n=In.itemAtPath(e,t.slice(0,-1)),l=t[t.length-1][0],i=n==null?void 0:n[l];if(i&&"items"in i)return i;throw new Error("Parent collection not found")};function xf(e,t,n){let l=n(t,e);if(typeof l=="symbol")return l;for(const i of["key","value"]){const a=t[i];if(a&&"items"in a){for(let r=0;r<a.items.length;++r){const o=xf(Object.freeze(e.concat([[i,r]])),a.items[r],n);if(typeof o=="number")r=o-1;else{if(o===Ss)return Ss;o===_f&&(a.items.splice(r,1),r-=1)}}typeof l=="function"&&i==="key"&&(l=l(t,e))}}return typeof l=="function"?l(t,e):l}const jr="\uFEFF",Ur="",Wr="",Fi="",Kh=e=>!!e&&"items"in e,Qh=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function Yh(e){switch(e){case jr:return"<BOM>";case Ur:return"<DOC>";case Wr:return"<FLOW_END>";case Fi:return"<SCALAR>";default:return JSON.stringify(e)}}function vf(e){switch(e){case jr:return"byte-order-mark";case Ur:return"doc-mode";case Wr:return"flow-error-end";case Fi:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const Xh=Object.freeze(Object.defineProperty({__proto__:null,BOM:jr,DOCUMENT:Ur,FLOW_END:Wr,SCALAR:Fi,createScalarToken:Wh,isCollection:Kh,isScalar:Qh,prettyToken:Yh,resolveAsScalar:Uh,setScalarValue:$h,stringify:qh,tokenType:vf,visit:In},Symbol.toStringTag,{value:"Module"}));function Lt(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const ru=new Set("0123456789ABCDEFabcdef"),Jh=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),fa=new Set(",[]{}"),Zh=new Set(` ,[]{}
\r	`),So=e=>!e||Zh.has(e);class wf{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,n=!1){if(t){if(typeof t!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null}this.atEnd=!n;let l=this.next??"stream";for(;l&&(n||this.hasChars(1));)l=yield*this.parseNext(l)}atLineEnd(){let t=this.pos,n=this.buffer[t];for(;n===" "||n==="	";)n=this.buffer[++t];return!n||n==="#"||n===`
`?!0:n==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let n=this.buffer[t];if(this.indentNext>0){let l=0;for(;n===" ";)n=this.buffer[++l+t];if(n==="\r"){const i=this.buffer[l+t+1];if(i===`
`||!i&&!this.atEnd)return t+l+1}return n===`
`||l>=this.indentNext||!n&&!this.atEnd?t+l:-1}if(n==="-"||n==="."){const l=this.buffer.substr(t,3);if((l==="---"||l==="...")&&Lt(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===jr&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let n=t.length,l=t.indexOf("#");for(;l!==-1;){const a=t[l-1];if(a===" "||a==="	"){n=l-1;break}else l=t.indexOf("#",l+1)}for(;;){const a=t[n-1];if(a===" "||a==="	")n-=1;else break}const i=(yield*this.pushCount(n))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const n=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-n),yield*this.pushNewline(),"stream"}return yield Ur,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const n=this.peek(3);if((n==="---"||n==="...")&&Lt(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,n==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Lt(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,n]=this.peek(2);if(!n&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&Lt(n)){const l=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=l,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let n=yield*this.pushIndicators();switch(t[n]){case"#":yield*this.pushCount(t.length-n);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(So),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return n+=yield*this.parseBlockScalarHeader(),n+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-n),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,n,l=-1;do t=yield*this.pushNewline(),t>0?(n=yield*this.pushSpaces(!1),this.indentValue=l=n):n=0,n+=yield*this.pushSpaces(!0);while(t+n>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((l!==-1&&l<this.indentNext&&i[0]!=="#"||l===0&&(i.startsWith("---")||i.startsWith("..."))&&Lt(i[3]))&&!(l===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield Wr,yield*this.parseLineStart();let a=0;for(;i[a]===",";)a+=yield*this.pushCount(1),a+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(a+=yield*this.pushIndicators(),i[a]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-a),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(So),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||Lt(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let n=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;n!==-1&&this.buffer[n+1]==="'";)n=this.buffer.indexOf("'",n+2);else for(;n!==-1;){let a=0;for(;this.buffer[n-1-a]==="\\";)a+=1;if(a%2===0)break;n=this.buffer.indexOf('"',n+1)}const l=this.buffer.substring(0,n);let i=l.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const a=this.continueScalar(i+1);if(a===-1)break;i=l.indexOf(`
`,a)}i!==-1&&(n=i-(l[i-1]==="\r"?2:1))}if(n===-1){if(!this.atEnd)return this.setNext("quoted-scalar");n=this.buffer.length}return yield*this.pushToIndex(n+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const n=this.buffer[++t];if(n==="+")this.blockScalarKeep=!0;else if(n>"0"&&n<="9")this.blockScalarIndent=Number(n)-1;else if(n!=="-")break}return yield*this.pushUntil(n=>Lt(n)||n==="#")}*parseBlockScalar(){let t=this.pos-1,n=0,l;e:for(let a=this.pos;l=this.buffer[a];++a)switch(l){case" ":n+=1;break;case`
`:t=a,n=0;break;case"\r":{const r=this.buffer[a+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!l&&!this.atEnd)return this.setNext("block-scalar");if(n>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=n:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const a=this.continueScalar(t+1);if(a===-1)break;t=this.buffer.indexOf(`
`,a)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let i=t+1;for(l=this.buffer[i];l===" ";)l=this.buffer[++i];if(l==="	"){for(;l==="	"||l===" "||l==="\r"||l===`
`;)l=this.buffer[++i];t=i-1}else if(!this.blockScalarKeep)do{let a=t-1,r=this.buffer[a];r==="\r"&&(r=this.buffer[--a]);const o=a;for(;r===" ";)r=this.buffer[--a];if(r===`
`&&a>=this.pos&&a+1+n>o)t=a;else break}while(!0);return yield Fi,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let n=this.pos-1,l=this.pos-1,i;for(;i=this.buffer[++l];)if(i===":"){const a=this.buffer[l+1];if(Lt(a)||t&&fa.has(a))break;n=l}else if(Lt(i)){let a=this.buffer[l+1];if(i==="\r"&&(a===`
`?(l+=1,i=`
`,a=this.buffer[l+1]):n=l),a==="#"||t&&fa.has(a))break;if(i===`
`){const r=this.continueScalar(l+1);if(r===-1)break;l=Math.max(l,r-2)}}else{if(t&&fa.has(i))break;n=l}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Fi,yield*this.pushToIndex(n+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,n){const l=this.buffer.slice(this.pos,t);return l?(yield l,this.pos+=l.length,l.length):(n&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(So))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(Lt(n)||t&&fa.has(n))return t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,n=this.buffer[t];for(;!Lt(n)&&n!==">";)n=this.buffer[++t];return yield*this.pushToIndex(n===">"?t+1:t,!1)}else{let t=this.pos+1,n=this.buffer[t];for(;n;)if(Jh.has(n))n=this.buffer[++t];else if(n==="%"&&ru.has(this.buffer[t+1])&&ru.has(this.buffer[t+2]))n=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let n=this.pos-1,l;do l=this.buffer[++n];while(l===" "||t&&l==="	");const i=n-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=n),i}*pushUntil(t){let n=this.pos,l=this.buffer[n];for(;!t(l);)l=this.buffer[++n];return yield*this.pushToIndex(n,!1)}}class Cf{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let n=0,l=this.lineStarts.length;for(;n<l;){const a=n+l>>1;this.lineStarts[a]<t?n=a+1:l=a}if(this.lineStarts[n]===t)return{line:n+1,col:1};if(n===0)return{line:0,col:t};const i=this.lineStarts[n-1];return{line:n,col:t-i+1}}}}function nn(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function ou(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function Sf(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function ya(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function Qn(e){var n;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((n=e[++t])==null?void 0:n.type)==="space";);return e.splice(t,e.length)}function su(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!nn(t.start,"explicit-key-ind")&&!nn(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,Sf(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class Od{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new wf,this.onNewLine=t}*parse(t,n=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const l of this.lexer.lex(t,n))yield*this.next(l);n||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const n=vf(t);if(n)if(n==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=n,yield*this.step(),n){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const l=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:l,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(!t||t.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const n=t??this.stack.pop();if(!n)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield n;else{const l=this.peek(1);switch(n.type==="block-scalar"?n.indent="indent"in l?l.indent:0:n.type==="flow-collection"&&l.type==="document"&&(n.indent=0),n.type==="flow-collection"&&su(n),l.type){case"document":l.value=n;break;case"block-scalar":l.props.push(n);break;case"block-map":{const i=l.items[l.items.length-1];if(i.value){l.items.push({start:[],key:n,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=n;else{Object.assign(i,{key:n,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=l.items[l.items.length-1];i.value?l.items.push({start:[],value:n}):i.value=n;break}case"flow-collection":{const i=l.items[l.items.length-1];!i||i.value?l.items.push({start:[],key:n,sep:[]}):i.sep?i.value=n:Object.assign(i,{key:n,sep:[]});return}default:yield*this.pop(),yield*this.pop(n)}if((l.type==="document"||l.type==="block-map"||l.type==="block-seq")&&(n.type==="block-map"||n.type==="block-seq")){const i=n.items[n.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&ou(i.start)===-1&&(n.indent===0||i.start.every(a=>a.type!=="comment"||a.indent<n.indent))&&(l.type==="document"?l.end=i.start:l.items.push({start:i.start}),n.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{ou(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const n=this.startBlockValue(t);n?this.stack.push(n):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const n=ya(this.peek(2)),l=Qn(n);let i;t.end?(i=t.end,i.push(this.sourceToken),delete t.end):i=[this.sourceToken];const a={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:l,key:t,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,n.value){const i="end"in n.value?n.value.end:void 0,a=Array.isArray(i)?i[i.length-1]:void 0;(a==null?void 0:a.type)==="comment"?i==null||i.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else if(n.sep)n.sep.push(this.sourceToken);else{if(this.atIndentedComment(n.start,t.indent)){const i=t.items[t.items.length-2],a=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(a)){Array.prototype.push.apply(a,n.start),a.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const i=!this.onKeyLine&&this.indent===t.indent,a=i&&(n.sep||n.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(a&&n.sep&&!n.value){const o=[];for(let s=0;s<n.sep.length;++s){const d=n.sep[s];switch(d.type){case"newline":o.push(s);break;case"space":break;case"comment":d.indent>t.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(r=n.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":a||n.value?(r.push(this.sourceToken),t.items.push({start:r}),this.onKeyLine=!0):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"explicit-key-ind":!n.sep&&!n.explicitKey?(n.start.push(this.sourceToken),n.explicitKey=!0):a||n.value?(r.push(this.sourceToken),t.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(n.explicitKey)if(n.sep)if(n.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(nn(n.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(Sf(n.key)&&!nn(n.sep,"newline")){const o=Qn(n.start),s=n.key,d=n.sep;d.push(this.sourceToken),delete n.key,delete n.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:s,sep:d}]})}else r.length>0?n.sep=n.sep.concat(r,this.sourceToken):n.sep.push(this.sourceToken);else if(nn(n.start,"newline"))Object.assign(n,{key:null,sep:[this.sourceToken]});else{const o=Qn(n.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else n.sep?n.value||a?t.items.push({start:r,key:null,sep:[this.sourceToken]}):nn(n.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);a||n.value?(t.items.push({start:r,key:o,sep:[]}),this.onKeyLine=!0):n.sep?this.stack.push(o):(Object.assign(n,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(t);if(o){if(o.type==="block-seq"){if(!n.explicitKey&&n.sep&&!nn(n.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&t.items.push({start:r});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var l;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(n.value){const i="end"in n.value?n.value.end:void 0,a=Array.isArray(i)?i[i.length-1]:void 0;(a==null?void 0:a.type)==="comment"?i==null||i.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(n.start,t.indent)){const i=t.items[t.items.length-2],a=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(a)){Array.prototype.push.apply(a,n.start),a.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return;case"anchor":case"tag":if(n.value||this.indent<=t.indent)break;n.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;n.value||nn(n.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return}if(this.indent>t.indent){const i=this.startBlockValue(t);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const n=t.items[t.items.length-1];if(this.type==="flow-error-end"){let l;do yield*this.pop(),l=this.peek(1);while(l&&l.type==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!n||n.sep?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return;case"map-value-ind":!n||n.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!n||n.value?t.items.push({start:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!n||n.value?t.items.push({start:[],key:i,sep:[]}):n.sep?this.stack.push(i):Object.assign(n,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const l=this.startBlockValue(t);l?this.stack.push(l):(yield*this.pop(),yield*this.step())}else{const l=this.peek(2);if(l.type==="block-map"&&(this.type==="map-value-ind"&&l.indent===t.indent||this.type==="newline"&&!l.items[l.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&l.type!=="flow-collection"){const i=ya(l),a=Qn(i);su(t);const r=t.end.splice(1,t.end.length);r.push(this.sourceToken);const o={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:a,key:t,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const n=ya(t),l=Qn(n);return l.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const n=ya(t),l=Qn(n);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,n){return this.type!=="comment"||this.indent<=n?!1:t.every(l=>l.type==="newline"||l.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Lf(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new Cf||null,prettyErrors:t}}function e0(e,t={}){const{lineCounter:n,prettyErrors:l}=Lf(t),i=new Od(n==null?void 0:n.addNewLine),a=new Fd(t),r=Array.from(a.compose(i.parse(e)));if(l&&n)for(const o of r)o.errors.forEach(ur(e,n)),o.warnings.forEach(ur(e,n));return r.length>0?r:Object.assign([],{empty:!0},a.streamInfo())}function kf(e,t={}){const{lineCounter:n,prettyErrors:l}=Lf(t),i=new Od(n==null?void 0:n.addNewLine),a=new Fd(t);let r=null;for(const o of a.compose(i.parse(e),!0,e.length))if(!r)r=o;else if(r.options.logLevel!=="silent"){r.errors.push(new En(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return l&&n&&(r.errors.forEach(ur(e,n)),r.warnings.forEach(ur(e,n))),r}function t0(e,t,n){let l;typeof t=="function"?l=t:n===void 0&&t&&typeof t=="object"&&(n=t);const i=kf(e,n);if(!i)return null;if(i.warnings.forEach(a=>Hm(i.options.logLevel,a)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:l},n))}function n0(e,t,n){let l=null;if(typeof t=="function"||Array.isArray(t)?l=t:n===void 0&&t&&(n=t),typeof n=="string"&&(n=n.length),typeof n=="number"){const i=Math.round(n);n=i<1?void 0:i>8?{indent:8}:{indent:i}}if(e===void 0){const{keepUndefined:i}=n??t??{};if(!i)return}return Wn(e)&&!l?e.toString(n):new Ol(e,l,n).toString(n)}const Pf=Object.freeze(Object.defineProperty({__proto__:null,Alias:Ar,CST:Xh,Composer:Fd,Document:Ol,Lexer:wf,LineCounter:Cf,Pair:We,Parser:Od,Scalar:Y,Schema:Ir,YAMLError:Gd,YAMLMap:ot,YAMLParseError:En,YAMLSeq:_n,YAMLWarning:uf,isAlias:Cn,isCollection:ve,isDocument:Wn,isMap:Rl,isNode:Ce,isPair:_e,isScalar:pe,isSeq:Gl,parse:t0,parseAllDocuments:e0,parseDocument:kf,stringify:n0,visit:$n,visitAsync:Nr},Symbol.toStringTag,{value:"Module"})),l0=`protocols:
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
`,i0=`protocols:
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
      - label_family: Info
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
      - label_family: Info
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
        `,a0=`# Label Help Text
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
`;function r0(e){return e==null?"":typeof e=="number"?String(Math.trunc(e)):String(e).trim()}function o0(e){return e==null?"":String(e).trim()}function du(e,t){try{const n=Pf.parse(e);return((n==null?void 0:n.protocols)??[]).map(i=>{var s;if(!i.entry)return null;const a=o0(i.point??i.entry.name),r=r0(i.model);if(!a||!r)return null;const o=Array.isArray(i.labels)?i.labels:Array.isArray((s=i.entry)==null?void 0:s.labels)?i.entry.labels:[];return{block:String(i.block??"fixed"),entry:i.entry,model:r,point:a,labels:o}}).filter(i=>!!i)}catch(n){return console.error(`Failed to parse ${t}`,n),[]}}function s0(){const e=du(l0,"ss40k_inverter.yaml"),t=du(i0,"lifecycle_events.yaml");return[...e,...t]}const Sn=s0();let Ls=null;try{Ls=Pf.parse(a0)}catch(e){console.error("Failed to parse label_help.yaml",e)}function Xt(e,t){if(!Ls)return null;const n=Ls.label_families[e];if(!n)return null;if(t){const l=n.labels[t];return(l==null?void 0:l.help)||null}return n.help||null}function d0(e,t){const n=new Map;return e.forEach(l=>{const i=Array.isArray(l.labels)?l.labels:[];if(i.length===0)return;if(t.length===0){const o=i[0];if(o){const s=o.label_text;n.has(s)||n.set(s,[]),n.get(s).push(l)}return}let a=n,r=-1;if(!(a instanceof Map)){console.error("groupByLabelHierarchy: currentMap is not a Map",a);return}for(let o=0;o<t.length;o++){const s=t[o];i.find(u=>u.label_family===s)&&(r=o)}if(r!==-1)for(let o=0;o<=r;o++){if(!(a instanceof Map)){console.error("groupByLabelHierarchy: currentMap became non-Map at level",o,a);return}const s=t[o],d=i.find(p=>p.label_family===s);if(!d)continue;const u=d.label_text;if(o===r){a.has(u)||a.set(u,new Map);const p=a.get(u);if(Array.isArray(p)){const x=p,g=new Map;g.set("",x),a.set(u,g)}const f=a.get(u);if(!(f instanceof Map)){console.error("Expected Map for finalMap but got:",typeof f,f);return}f.has("")||f.set("",[]);const m=f.get("");if(!Array.isArray(m)){console.error("Expected array for itemsList but got:",typeof m,m);return}m.push(l)}else{if(!a.has(u))a.set(u,new Map);else{const f=a.get(u);if(Array.isArray(f)){const m=f,x=new Map;x.set("",m),a.set(u,x)}}const p=a.get(u);if(!(p instanceof Map)){console.error("Expected Map for nestedMap but got:",typeof p,p,"at level",o,"key",u);return}a=p}}}),n}function c0(e){const t=new Map;return e.forEach(n=>{(Array.isArray(n.labels)?n.labels:[]).forEach(i=>{t.has(i.label_family)||t.set(i.label_family,new Set),t.get(i.label_family).add(i.label_text)})}),t}const Lo=[{bg:"bg-blue-100",text:"text-blue-800",border:"border-blue-300"},{bg:"bg-green-100",text:"text-green-800",border:"border-green-300"},{bg:"bg-purple-100",text:"text-purple-800",border:"border-purple-300"},{bg:"bg-yellow-100",text:"text-yellow-800",border:"border-yellow-300"},{bg:"bg-pink-100",text:"text-pink-800",border:"border-pink-300"},{bg:"bg-indigo-100",text:"text-indigo-800",border:"border-indigo-300"},{bg:"bg-red-100",text:"text-red-800",border:"border-red-300"},{bg:"bg-teal-100",text:"text-teal-800",border:"border-teal-300"},{bg:"bg-orange-100",text:"text-orange-800",border:"border-orange-300"},{bg:"bg-cyan-100",text:"text-cyan-800",border:"border-cyan-300"},{bg:"bg-violet-100",text:"text-violet-800",border:"border-violet-300"},{bg:"bg-amber-100",text:"text-amber-800",border:"border-amber-300"},{bg:"bg-lime-100",text:"text-lime-800",border:"border-lime-300"},{bg:"bg-emerald-100",text:"text-emerald-800",border:"border-emerald-300"},{bg:"bg-sky-100",text:"text-sky-800",border:"border-sky-300"},{bg:"bg-rose-100",text:"text-rose-800",border:"border-rose-300"},{bg:"bg-fuchsia-100",text:"text-fuchsia-800",border:"border-fuchsia-300"},{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"},{bg:"bg-stone-100",text:"text-stone-800",border:"border-stone-300"},{bg:"bg-zinc-100",text:"text-zinc-800",border:"border-zinc-300"}],cu=new Map([["component",0],["feature",1],["detail_level",2],["level of detail",2],["info",3],["unit",4]]);function bi(e,t){const n=e.toLowerCase();if(cu.has(n)){const a=cu.get(n);return Lo[a]}const l=n.split("").reduce((a,r)=>(a<<5)-a+r.charCodeAt(0),0),i=4+Math.abs(l)%(Lo.length-4);return Lo[i]}function u0({value:e,onChange:t}){return c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:c.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),c.jsx("input",{className:"w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring",placeholder:"search",value:e,onChange:n=>t(n.target.value)})]})}function p0({show:e,onToggle:t}){return c.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 text-sm",children:[c.jsx("input",{type:"checkbox",className:"h-4 w-4",checked:e,onChange:n=>t(n.target.checked)}),"Show help text"]})}function uu({value:e,onChange:t}){const n=["Standard","Extended","Complete"],l=n.indexOf(e),i=l>=0?l:0,[a,r]=j.useState(!1),o=p=>{const f=parseInt(p.target.value,10);t(n[f])},s=i/(n.length-1)*100,d=Xt("Level of Detail"),u=new Set(n);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs font-semibold text-gray-700",children:"Detail Level"}),c.jsx("button",{onClick:()=>r(!0),className:"text-blue-500 hover:text-blue-700",title:d||"Level of Detail help",children:c.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),c.jsxs("div",{className:"flex flex-col items-center gap-0.5",children:[c.jsxs("div",{className:"relative w-40 flex items-center",children:[c.jsx("input",{type:"range",min:"0",max:n.length-1,step:"1",value:i,onChange:o,className:"w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, #10b981 0%, #10b981 ${s}%, #e5e7eb ${s}%, #e5e7eb 100%)`}}),c.jsx("style",{children:`
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
            `})]}),c.jsx("div",{className:"relative w-40 flex justify-between text-xs",children:n.map((p,f)=>c.jsx("button",{type:"button",onClick:()=>t(p),className:`cursor-pointer hover:opacity-70 transition-opacity ${f===i?"font-semibold text-gray-900":"text-gray-500"}`,children:p},p))})]})]}),a&&c.jsx(Tf,{family:"Level of Detail",labels:u,onClose:()=>r(!1)})]})}function m0(e,t){const n=String(t||"").trim();if(!n)return!1;const l=n.toLowerCase(),i=Array.isArray(e.labels)?e.labels:[];if(i.length===0)return!1;for(const a of i)if(!(!a||typeof a!="object")&&!(!a.label_family||typeof a.label_family!="string"))try{const r=Xt(a.label_family,a.label_text);if(r&&typeof r=="string"&&r.length>0&&r.toLowerCase().includes(l))return!0}catch{continue}return!1}function Df({levelName:e,levelData:t,selected:n,toggle:l,showHelp:i,onUpdateInverters:a,groupsExpanded:r,pointHelpEnabled:o,onTogglePointHelp:s,depth:d=0,query:u,parentPath:p="",hierarchy:f=[]}){const m=p?`${p}-${e.replace(/\s+/g,"-")}`:e.replace(/\s+/g,"-"),x=`group-${m}-${d}`,g=Array.isArray(t),_=f[d]||"";if(!t)return null;const b=w=>{const k=`${w.model}:${w.point}`,L=w.entry.description||k,S=w.entry.longdescription||L,v=typeof w.entry.dtype=="string"?w.entry.dtype.toLowerCase():"",A=v.includes("enum")||v.startsWith("bitfield"),R=w.entry.unit&&w.entry.unit!=="N/A"?` (${w.entry.unit})`:"",U=n.has(k),B=U?n.get(k)||new Set(["001"]):new Set,H=Array.isArray(w.labels)?w.labels:[],ae=i||o.has(k),de=m0(w,u);return c.jsxs("div",{id:`point-${k.replace(/:/g,"-")}`,"data-point-key":k,className:"rounded-md px-2 py-1 hover:bg-gray-50 transition-colors",children:[c.jsx("div",{className:"flex items-start gap-2 flex-wrap",children:c.jsxs("label",{className:"flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0",children:[c.jsx("input",{type:"checkbox",checked:U,onChange:F=>{F.stopPropagation(),l(k)},onClick:F=>{F.stopPropagation()},className:"h-4 w-4 flex-shrink-0"}),c.jsxs("span",{className:"text-sm flex items-center gap-1",children:[c.jsxs("span",{children:[L,R]}),A&&c.jsx("span",{className:"text-base leading-none cursor-help",title:"Selecting this point shows named modes or states as colored bars instead of a line chart.","aria-label":"Categorical visualization",children:"📊"})]}),c.jsxs("div",{className:"relative ml-1 flex-shrink-0",children:[c.jsx("span",{className:`cursor-pointer ${ae?"text-blue-600 hover:text-blue-700":"text-gray-400 hover:text-gray-600"}`,title:S,"aria-label":"Help",onClick:F=>{F.preventDefault(),F.stopPropagation(),s(k)},onMouseDown:F=>{F.preventDefault(),F.stopPropagation()},children:"ⓘ"}),de&&c.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse","aria-hidden":"true"},`red-dot-${k}`)]}),U&&c.jsxs("div",{className:"ml-auto flex items-center gap-1 flex-shrink-0",onClick:F=>F.stopPropagation(),children:[c.jsx("span",{className:"text-xs text-gray-600",children:"Inverter SN:"}),c.jsx(w0,{selectedInverters:B,onChange:F=>a(k,F)})]}),ae&&H.length>0&&c.jsx("div",{className:"ml-2 flex flex-wrap gap-1 w-full",children:H.map((F,X)=>{const V=bi(F.label_family,F.label_text),Q=Xt(F.label_family,F.label_text)||`${F.label_family}: ${F.label_text}`;return c.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${V.bg} ${V.text} ${V.border}`,title:Q,children:F.label_text},X)})})]})}),ae&&c.jsx("div",{className:"pl-6 text-xs text-gray-500 whitespace-pre-wrap",children:S})]},k)};if(g){const w=t;return c.jsx("div",{className:"ml-2 space-y-1",children:w.map(b)})}if(!(t instanceof Map))return console.error("LabelGroup: levelData is neither array nor Map",{levelName:e,depth:d,levelData:t,type:typeof t}),null;const y=t,h=d===0;return c.jsxs("details",{id:x,className:`group border-b py-2 ${h?"":"ml-2 border-l pl-2"}`,open:r,children:[c.jsxs("summary",{className:`cursor-pointer list-none ${h?"font-semibold":"font-medium text-gray-700"} flex items-center justify-between`,children:[c.jsxs("div",{className:"flex items-center flex-1 min-w-0",children:[c.jsx("span",{className:"mr-1",children:"▾"}),c.jsx("span",{className:"truncate",children:e})]}),_&&c.jsx("span",{className:"ml-2 px-2 py-0.5 text-[10px] font-normal uppercase tracking-wide text-gray-500 bg-gray-100 rounded-full flex-shrink-0 cursor-help",title:Xt(_)||_,children:_})]}),c.jsx("div",{className:"mt-2 ml-1 space-y-2",children:[...y.entries()].map(([w,k])=>w===""?Array.isArray(k)?c.jsx("div",{className:"ml-2 space-y-1",children:k.map(b)},""):null:c.jsx(Df,{levelName:w,levelData:k,selected:n,toggle:l,showHelp:i,onUpdateInverters:a,groupsExpanded:r,pointHelpEnabled:o,onTogglePointHelp:s,depth:d+1,query:u,parentPath:m,hierarchy:f},w))})]})}function Tf({family:e,labels:t,onClose:n}){const l=Xt(e),i=[...t].sort();return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:n,children:c.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:a=>a.stopPropagation(),children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("h2",{className:"text-xl font-semibold text-gray-800",children:[e," Labels"]}),c.jsx("button",{onClick:n,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:c.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l&&c.jsxs("div",{className:"mb-4 rounded-lg bg-blue-50 p-3 text-sm text-gray-700",children:[c.jsxs("strong",{className:"font-semibold",children:["About ",e,":"]})," ",l]}),c.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:c.jsx("div",{className:"space-y-4",children:i.map(a=>{const r=Xt(e,a);return c.jsxs("div",{className:"border-b border-gray-200 pb-3 last:border-b-0",children:[c.jsx("div",{className:"mb-1 font-medium text-gray-800",children:a}),r?c.jsx("div",{className:"text-sm text-gray-600",children:r}):c.jsx("div",{className:"text-sm italic text-gray-400",children:"No help text available"})]},a)})})})]})})}function f0({onClose:e}){return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:c.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"How do filters work?"}),c.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:c.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),c.jsxs("div",{className:"space-y-4 text-gray-700",children:[c.jsx("p",{children:"Use filters to quickly jump to the part of the system you're interested in—like just battery settings, inverter readings, or grid-related features—without needing to scroll through the full list."}),c.jsx("p",{children:"Select any combination of filters—such as component, type of data, unit, or feature—and the list will update instantly to show only points that match your selection. You can choose multiple filters at once to get more specific."}),c.jsx("p",{children:"As you refine the list, filters that no longer apply will dim, show a count of zero, and become unavailable, helping you see which combinations still have matching points."})]})]})})}function y0({allLabels:e,selectedLabels:t,onToggleLabel:n,onClearFilters:l,protocols:i,detailLevel:a}){const[r,o]=j.useState(200),[s,d]=j.useState(!1),[u,p]=j.useState(null),[f,m]=j.useState(!1),[x,g]=j.useState(!1),_=j.useRef(null),b=j.useRef(null),y=j.useCallback((L,S)=>{const v=`${L}:${S}`,A=new Set;t.forEach(B=>{const[H]=B.split(":",2);H!==L&&A.add(B)}),A.add(v);const R=new Map;A.forEach(B=>{const[H,ae]=B.split(":",2);R.has(H)||R.set(H,new Set),R.get(H).add(ae)});const U=(()=>{switch(a){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();return i.filter(B=>{const H=Array.isArray(B.labels)?B.labels:[],ae=H.filter(F=>F.label_family==="Level of Detail").map(F=>F.label_text);if(ae.length>0&&!ae.some(X=>U.includes(X)))return!1;const de=new Map;H.forEach(F=>{de.has(F.label_family)||de.set(F.label_family,new Set),de.get(F.label_family).add(F.label_text)});for(const[F,X]of R.entries()){const V=de.get(F);if(!V||![...X].some(Q=>V.has(Q)))return!1}return!0}).length},[t,i,a]),h=L=>{L.preventDefault(),d(!0)};j.useEffect(()=>{if(!s)return;const L=v=>{if(_.current){const A=_.current.getBoundingClientRect(),R=v.clientY-A.top;R>=100&&R<=600&&o(R)}},S=()=>{d(!1)};return document.addEventListener("mousemove",L),document.addEventListener("mouseup",S),()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",S)}},[s]);const w=Array.from(t).map(L=>{const[S,v]=L.split(":",2);return{family:S,text:v}}).filter(({family:L})=>L!=="Level of Detail"),k=new Map(e);return k.delete("Level of Detail"),c.jsxs("div",{ref:_,className:"mb-3 rounded-lg border bg-gray-50 p-2",children:[c.jsxs("details",{ref:b,className:"group",open:x,onToggle:L=>g(L.target.open),children:[c.jsx("summary",{className:"cursor-pointer list-none",children:c.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[c.jsx("svg",{className:"h-4 w-4 text-gray-600 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),c.jsx("span",{className:"flex-shrink-0",children:"Filters"}),!x&&k.size>0&&c.jsx("button",{onClick:L=>{L.stopPropagation(),b.current&&(b.current.open=!0,g(!0))},className:"ml-2 rounded border border-gray-300 bg-white px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex-shrink-0",children:"+ Add Filter"}),w.length>0&&c.jsx("div",{className:"flex flex-wrap items-center gap-1.5 ml-2 min-w-0",children:w.map(({family:L,text:S})=>{const v=bi(L);return c.jsxs("span",{className:`rounded border px-1.5 py-0.5 text-xs ${v.bg} ${v.text} ${v.border} border-2 font-semibold flex-shrink-0 flex items-center gap-1`,children:[c.jsx("span",{children:S}),c.jsx("button",{onClick:A=>{A.stopPropagation(),n(L,S)},className:"hover:opacity-70 transition-opacity flex-shrink-0",title:`Remove ${L}: ${S} filter`,"aria-label":`Remove ${L}: ${S} filter`,children:c.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},`${L}:${S}`)})}),w.length>0&&c.jsx("button",{onClick:L=>{L.stopPropagation(),l()},className:"ml-2 flex-shrink-0 text-xs text-gray-500 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:"Clear all"})]}),c.jsx("button",{onClick:L=>{L.preventDefault(),L.stopPropagation(),m(!0)},className:"flex-shrink-0 text-xs text-blue-600 hover:text-blue-700 underline transition-colors",children:"How do I use filters?"})]})}),c.jsx("div",{className:"space-y-0.5 overflow-auto mt-2",style:{height:`${r}px`},children:[...k.entries()].map(([L,S])=>{const v=Xt(L),A=bi(L),R=Array.from(S).some(U=>t.has(`${L}:${U}`));return c.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-0.5",children:[c.jsxs("button",{onClick:()=>p(L),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${R?`${A.bg} ${A.text} ${A.border} border-2`:`${A.bg} ${A.text} ${A.border} border`}`,title:v||`View help for ${L} labels`,"aria-label":`Help for ${L}`,children:[c.jsx("span",{className:"truncate",children:L}),c.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${A.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),c.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...S].sort().map(U=>{const B=`${L}:${U}`,H=t.has(B),ae=y(L,U),de=!H&&ae===0,F=bi(L),X=Xt(L,U);return c.jsxs("button",{onClick:()=>{de||n(L,U)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${de?"opacity-40 cursor-not-allowed bg-white":H?`${F.bg} ${F.text} ${F.border} border-2 font-semibold`:`bg-white ${F.text} ${F.border} hover:opacity-80 cursor-pointer`}`,style:!H&&!de?{borderColor:"currentColor"}:void 0,title:de?"No points available with this combination of filters":X||`${L}: ${U}`,"aria-disabled":de,tabIndex:de?-1:0,children:[c.jsx("span",{children:U}),!H&&c.jsxs("span",{className:`ml-1 ${de?"text-gray-400":"text-gray-500"}`,children:["(",ae,")"]})]},B)})})]},L)})}),c.jsx("div",{onMouseDown:h,className:"mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors",title:"Drag to resize"})]}),u&&c.jsx(Tf,{family:u,labels:e.get(u)||new Set,onClose:()=>p(null)}),f&&c.jsx(f0,{onClose:()=>m(!1)})]})}const Fa=["001","002","003"],ks=e=>{const t=parseInt(e,10);return(1e9+t*1e4+t).toString().padStart(10,"0")},pu=[{bg:"bg-purple-500",border:"border-purple-600"},{bg:"bg-green-500",border:"border-green-600"},{bg:"bg-teal-500",border:"border-teal-600"},{bg:"bg-blue-500",border:"border-blue-600"},{bg:"bg-pink-500",border:"border-pink-600"},{bg:"bg-orange-500",border:"border-orange-600"},{bg:"bg-indigo-500",border:"border-indigo-600"},{bg:"bg-red-500",border:"border-red-600"}],mu=["text-purple-500","text-green-500","text-teal-500","text-blue-500","text-pink-500","text-orange-500","text-indigo-500","text-red-500"],fu=[{bg50:"bg-purple-50",bg100:"bg-purple-100",border200:"border-purple-200",border400:"border-purple-400",bg500:"bg-purple-500/80",text600:"text-purple-600",text700:"text-purple-700",ring:"focus:ring-purple-500"},{bg50:"bg-green-50",bg100:"bg-green-100",border200:"border-green-200",border400:"border-green-400",bg500:"bg-green-500/80",text600:"text-green-600",text700:"text-green-700",ring:"focus:ring-green-500"},{bg50:"bg-teal-50",bg100:"bg-teal-100",border200:"border-teal-200",border400:"border-teal-400",bg500:"bg-teal-500/80",text600:"text-teal-600",text700:"text-teal-700",ring:"focus:ring-teal-500"},{bg50:"bg-blue-50",bg100:"bg-blue-100",border200:"border-blue-200",border400:"border-blue-400",bg500:"bg-blue-500/80",text600:"text-blue-600",text700:"text-blue-700",ring:"focus:ring-blue-500"},{bg50:"bg-pink-50",bg100:"bg-pink-100",border200:"border-pink-200",border400:"border-pink-400",bg500:"bg-pink-500/80",text600:"text-pink-600",text700:"text-pink-700",ring:"focus:ring-pink-500"},{bg50:"bg-orange-50",bg100:"bg-orange-100",border200:"border-orange-200",border400:"border-orange-400",bg500:"bg-orange-500/80",text600:"text-orange-600",text700:"text-orange-700",ring:"focus:ring-orange-500"},{bg50:"bg-indigo-50",bg100:"bg-indigo-100",border200:"border-indigo-200",border400:"border-indigo-400",bg500:"bg-indigo-500/80",text600:"text-indigo-600",text700:"text-indigo-700",ring:"focus:ring-indigo-500"},{bg50:"bg-red-50",bg100:"bg-red-100",border200:"border-red-200",border400:"border-red-400",bg500:"bg-red-500/80",text600:"text-red-600",text700:"text-red-700",ring:"focus:ring-red-500"}];function Nf(e){let t=0;for(let n=0;n<e.length;n+=1)t=t*31+e.charCodeAt(n)>>>0;return()=>(t=t*1664525+1013904223>>>0,t/2**32)}function g0(e){const t=[];for(let i=0;i<e;i+=1){const a=720+i*10,r=Math.floor(a/60)%24,o=a%60;t.push(`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`)}return t}const b0=36,Zl={width:1e3,height:360};function h0(e,t=b0){const n=Nf(`line-${e}`),l=[];let i=n()*60+20;for(let a=0;a<t;a+=1){const r=n()-.5,o=4+n()*8,s=i+r*o;i=l.length?l[l.length-1]*.7+s*.3:s,i=Math.max(0,Math.min(140,i)),l.push(Number(i.toFixed(2)))}return l}function _0({series:e}){if(e.length===0)return null;const t=e.flatMap(a=>a.values),n=Math.min(...t,0),i=Math.max(...t,1)-n||1;return c.jsx("svg",{viewBox:`0 0 ${Zl.width} ${Zl.height}`,preserveAspectRatio:"none",className:"h-full w-full",children:e.map(({entry:a,values:r})=>{if(r.length<2)return null;const o=r.map((s,d)=>{const u=d/(r.length-1)*Zl.width,p=(s-n)/i,f=Zl.height-p*Zl.height;return`${d===0?"M":"L"}${u.toFixed(2)},${f.toFixed(2)}`}).join(" ");return c.jsx("path",{d:o,fill:"none",stroke:"currentColor",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round",className:`${mu[a.colorIndex%mu.length]} drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]`,opacity:.95},a.pointKey)})})}function x0(e){if(!e.meaningKeys.length)return null;const t=e.meaningKeys,n=Nf(e.pointKey),l=t.filter((u,p)=>n()>.35||p===0);l.length===0&&l.push(t[0]);const i=12,a=g0(i),o=(typeof e.dtype=="string"?e.dtype.toLowerCase():"").startsWith("bitfield"),s=Array.from({length:i},()=>new Set);if(o)for(let u=0;u<i;u+=1){let p=!1;l.forEach((f,m)=>{n()>.55&&(s[u].add(f),p=!0),!p&&m===l.length-1&&n()>.7&&(s[u].add(f),p=!0)})}else{let u=0;for(;u<i&&l.length;){const p=Math.floor(n()*l.length),f=l[p],m=1+Math.floor(n()*3);if(n()>.2)for(let x=0;x<m&&u+x<i;x+=1)s[u+x].add(f);u+=m}}const d=t.map(u=>{var _,b;const p=String(u),f=(_=e.friendlyMeanings)==null?void 0:_[p],m=(b=e.meanings)==null?void 0:b[p],x=(f??m??p).trim()||`Value ${p}`,g=s.map(y=>y.has(u));return{meaningKey:u,label:x,activeSlots:g}});return{id:e.pointKey,title:e.name,subtitle:`SN ${e.shortSN}`,timeLabels:a,rows:d,colorIndex:e.colorIndex}}function v0({data:e,onRemove:t}){const[n,l]=j.useState(!0),i=n?e.rows.filter(o=>o.activeSlots.some(Boolean)):e.rows,a=e.rows.length-i.length,r=fu[e.colorIndex%fu.length];return c.jsxs("div",{className:`rounded-lg border ${r.border200} bg-white shadow-sm`,children:[c.jsxs("div",{className:`flex items-center justify-between gap-2 border-b ${r.border200} ${r.bg50} px-4 py-1.5`,children:[c.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[c.jsx("span",{className:`font-semibold ${r.text700}`,children:e.title}),c.jsx("span",{className:r.text600,children:e.subtitle})]}),c.jsxs("div",{className:`flex items-center gap-3 text-xs ${r.text700}`,children:[c.jsxs("label",{className:"flex items-center gap-1.5 font-medium",children:[c.jsx("input",{type:"checkbox",checked:n,onChange:o=>l(o.target.checked),className:`h-3 w-3 rounded ${r.border400} ${r.text600} ${r.ring}`}),"Hide empty bars"]}),c.jsxs("span",{className:`text-[11px] ${r.text600}`,children:[a," values hidden"]}),t&&c.jsx("button",{type:"button",onClick:o=>{o.stopPropagation(),t()},className:"text-[11px] px-2 py-1 rounded border border-transparent text-gray-500 hover:text-red-600 hover:border-red-200 transition-colors",title:"Remove this point","aria-label":"Remove categorical point",children:"×"})]})]}),c.jsx("div",{className:"px-4 py-3",children:c.jsx("div",{className:"space-y-1",children:i.length===0?c.jsx("div",{className:"text-xs text-gray-500 italic",children:'No categorical data is visible. Disable "Hide empty bars" to view all meanings.'}):i.map(o=>c.jsxs("div",{className:"flex flex-col",children:[c.jsx("div",{className:"text-[10px] font-medium text-gray-600 mb-0.5",children:o.label}),c.jsx("div",{className:`relative h-3 rounded ${r.bg100} overflow-hidden`,children:c.jsx("div",{className:"absolute inset-0 flex",children:o.activeSlots.map((s,d)=>c.jsx("div",{className:`flex-1 ${d<o.activeSlots.length-1?`border-r ${r.border200}`:""} ${s?r.bg500:"bg-transparent"}`},`${o.meaningKey}-${d}`))})})]},o.meaningKey))})})]})}function w0({selectedInverters:e,onChange:t}){const[n,l]=j.useState(!1),i=j.useRef(null),a=e.size===Fa.length,r=a?"All Inverters":Array.from(e).sort().map(d=>ks(d)).join(", ");j.useEffect(()=>{const d=u=>{i.current&&!i.current.contains(u.target)&&l(!1)};if(n)return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[n]);const o=()=>{t(a?new Set(["001"]):new Set(Fa))},s=d=>{const u=new Set(e);u.has(d)?(u.delete(d),u.size===0&&u.add("001")):u.add(d),t(u)};return c.jsxs("div",{className:"relative",ref:i,children:[c.jsxs("button",{type:"button",onClick:()=>l(!n),className:"text-xs border border-blue-300 rounded px-2 py-1 bg-white text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1",children:[c.jsx("span",{children:r}),c.jsx("svg",{className:`h-3 w-3 transition-transform ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),n&&c.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]",children:c.jsxs("div",{className:"py-1",children:[c.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:a,onChange:o,className:"h-3 w-3"}),c.jsx("span",{className:"text-xs text-gray-700",children:"All Inverters"})]}),Fa.map(d=>c.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:e.has(d),onChange:()=>s(d),className:"h-3 w-3"}),c.jsx("span",{className:"text-xs text-gray-700",children:ks(d)})]},d))]})})]})}function C0({selectedPoints:e,protocols:t,onUpdateInverters:n,onScrollToPoint:l,onRemoveInverter:i,onSelectPointsToggle:a,selectPointsOpen:r,onDeleteChart:o}){const[s,d]=j.useState(new Set),u=Array.from(e.entries()).map(([v,A])=>{const[R,U]=v.split(":"),B=t.find(ae=>ae.model===R&&ae.point===U),H=B&&(B.entry.description||B.entry.name)||U;return{key:v,name:H,inverters:A}}).filter(v=>v.name),p=u.flatMap(({key:v,name:A,inverters:R})=>{var se,wt,Oe,Xe,Je,Ct;const[U,B]=v.split(":"),H=t.find(He=>He.model===U&&He.point===B),ae=(se=H==null?void 0:H.entry)!=null&&se.unit&&H.entry.unit!=="N/A"?H.entry.unit:"N/A",de=((wt=H==null?void 0:H.entry)==null?void 0:wt.longdescription)||((Oe=H==null?void 0:H.entry)==null?void 0:Oe.description)||"",F=(Xe=H==null?void 0:H.entry)==null?void 0:Xe.dtype,X=(Je=H==null?void 0:H.entry)==null?void 0:Je.meanings,V=(Ct=H==null?void 0:H.entry)==null?void 0:Ct.friendly_meanings,$=new Set;X&&Object.keys(X).forEach(He=>$.add(String(He))),V&&Object.keys(V).forEach(He=>$.add(String(He)));const Q=Array.from($),J=Q.length>0;return Array.from(R).sort().map((He,Bl)=>{const Il=ks(He);return{key:v,pointKey:`${v}:${He}`,name:A,shortSN:He,fullSN:Il,unit:ae,model:U,point:B,longDescription:de,colorIndex:(u.findIndex(jl=>jl.key===v)*Fa.length+Bl)%pu.length,dtype:F,meanings:X,friendlyMeanings:V,meaningKeys:Q,isCategorical:J}})}),f=p.filter(v=>!s.has(v.pointKey)),m=f.filter(v=>v.isCategorical),x=f.filter(v=>!v.isCategorical),g=p.filter(v=>!v.isCategorical),_=j.useMemo(()=>m.map(v=>x0(v)).filter(v=>v!==null),[m]),b=x.length>0,y=j.useMemo(()=>x.map(v=>({entry:v,values:h0(v.pointKey)})),[x]),h=v=>{d(A=>{const R=new Set(A);return R.has(v)?R.delete(v):R.add(v),R})},w=v=>{const A=g.map(B=>B.pointKey),U=A.filter(B=>!s.has(B)).length===1&&!s.has(v);d(U?new Set:new Set(A.filter(B=>B!==v)))},k=(v,A,R)=>{R.stopPropagation(),i==null||i(v,A)},S=!(!b&&_.length>0&&e.size>0);return c.jsxs("div",{className:"w-full h-full flex flex-col relative",children:[c.jsxs("div",{className:"absolute top-4 right-4 z-20 flex items-center gap-2",children:[a&&c.jsxs("button",{onClick:()=>a(!r),className:"text-xs px-3 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center gap-2 shadow-sm",title:r?"Hide Add Points":"Show Add Points","data-role":"sidebar-toggle",children:[c.jsx("span",{children:"Add Points"}),c.jsx("svg",{className:`h-4 w-4 text-gray-600 transition-transform ${r?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),o&&c.jsx("button",{onClick:v=>{v.stopPropagation(),o()},className:"text-xs px-2 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center justify-center text-gray-600 hover:text-gray-800 opacity-80 hover:opacity-100 shadow-sm",title:"Delete chart",children:c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),c.jsxs("div",{className:"p-4 flex flex-col h-full",children:[c.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[S&&c.jsxs("div",{className:"relative flex-1 min-h-[320px] rounded-2xl border border-gray-300 bg-gradient-to-b from-white via-white to-gray-50 shadow-inner overflow-hidden",children:[c.jsxs("div",{className:"absolute left-0 top-0 bottom-10 w-12 border-r border-gray-200 flex flex-col items-center justify-between py-4 text-gray-600",children:[c.jsx("span",{className:"text-[10px] uppercase tracking-widest leading-none transform -rotate-90",children:"Value"}),c.jsx("div",{className:"flex flex-col items-center gap-3 text-gray-400",children:[0,1,2,3,4].map(v=>c.jsx("div",{className:"w-3 h-px bg-gray-400/70"},v))}),c.jsx("span",{className:"text-[10px]",children:"0"})]}),c.jsxs("div",{className:"absolute left-12 right-6 bottom-6 h-10 border-t border-gray-200 flex items-center justify-between px-2 text-gray-500",children:[c.jsx("span",{className:"text-[11px]",children:"0"}),c.jsx("div",{className:"flex gap-2",children:[0,1,2,3,4].map(v=>c.jsx("div",{className:"h-3 w-px bg-gray-400/60"},v))}),c.jsx("span",{className:"text-[11px] uppercase tracking-widest",children:"Time"})]}),c.jsx("div",{className:`absolute top-6 bottom-16 left-12 right-6 rounded-xl bg-white/40 backdrop-blur-sm ${e.size===0?"cursor-pointer":"cursor-default"}`,onClick:()=>{e.size===0&&a&&a(!0)},children:e.size===0?c.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-gray-500",children:[c.jsx("div",{className:"text-base font-medium text-gray-700",children:"No points selected"}),c.jsx("div",{children:"Click anywhere in this area to select points"})]}):p.length===0?c.jsx("div",{className:"flex h-full items-center justify-center text-sm text-gray-400",children:"Select points to display charts"}):b?c.jsxs("div",{className:"relative h-full w-full",children:[c.jsx("div",{className:"pointer-events-none absolute inset-0 grid grid-rows-4 opacity-30",children:[0,1,2,3].map(v=>c.jsx("div",{className:"border-b border-dashed border-gray-300"},v))}),c.jsx(_0,{series:y})]}):c.jsx("div",{className:"flex h-full items-center justify-center px-6 text-center text-sm text-gray-500",children:"All selected points are hidden. Use the legend controls to show a series."})})]}),_.length>0&&c.jsx("div",{className:`${S?"":"pt-2"}`,"data-categorical-stack":!0,children:c.jsx("div",{className:"space-y-4",children:_.map(v=>{const A=()=>{const R=v.id.split(":"),U=R.pop()??"",B=R.join(":");i==null||i(B,U)};return c.jsx(v0,{data:v,onRemove:A},`${v.id}:${v.subtitle}`)})})})]}),g.length>0&&c.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:g.map(({pointKey:v,name:A,shortSN:R,fullSN:U,colorIndex:B,key:H,unit:ae,point:de,longDescription:F})=>{const X=pu[B],V=s.has(v),$=["Click to toggle visibility (double-click to show only this)","",`This is the point "${A}" (${de}) as read by inverter ${U}.`];F&&$.push("",F);const Q=$.join(`
`);return c.jsxs("div",{className:"flex items-center gap-2 text-xs group hover:bg-gray-50 rounded px-2 py-1 border border-gray-200 bg-white transition-colors cursor-pointer flex-shrink-0",onClick:()=>h(v),onDoubleClick:J=>{J.stopPropagation(),w(v)},title:Q,children:[c.jsx("div",{className:`w-3 h-3 rounded-sm flex-shrink-0 ${X.bg} ${X.border} border`}),c.jsx("span",{className:`font-medium text-gray-600 ${V?"opacity-50 line-through":""}`,children:A}),c.jsxs("span",{className:"text-gray-400",children:["(SN ",R,")"]}),ae!=="N/A"&&c.jsxs("span",{className:"text-gray-400",children:["[",ae,"]"]}),c.jsx("button",{onClick:J=>{J.stopPropagation(),h(v)},onDoubleClick:J=>{J.stopPropagation(),w(v)},className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:V?"Show in chart (double-click to show only this)":"Hide in chart (double-click to show only this)",children:V?c.jsxs("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):c.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})}),c.jsx("button",{onClick:J=>k(H,R,J),className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:"Remove this data point from the chart",children:c.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},v)})})]})]})}function S0({onClose:e}){return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:c.jsxs("div",{className:"relative max-w-lg rounded-lg bg-white p-6 shadow-xl",onClick:t=>t.stopPropagation(),children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:"Group By"}),c.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:c.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[c.jsx("p",{children:"Reorder or add levels to control how points are grouped in the list."}),c.jsx("p",{children:"For example, grouping by Component → Feature will show each component first, with its features listed underneath."}),c.jsx("p",{className:"text-gray-600",children:"You can add or remove levels using the + button and × button next to each level."})]})]})})}function L0({availableFamilies:e,hierarchy:t,onChange:n,scrollContainerRef:l}){const[i,a]=j.useState(!1),[r,o]=j.useState(!0),s=j.useRef(null),d=j.useRef(0),u=(x,g)=>{const _=[...t];g===""?_.splice(x,1):_[x]=g,n(_)},p=()=>{n([...t,""])},f=x=>{const g=[...t];g.splice(x,1),n(g)},m=x=>{const g=t.filter((_,b)=>b!==x&&t[b]);return e.filter(_=>!g.includes(_))};return j.useEffect(()=>{const x=l==null?void 0:l.current;if(!x)return;const g=()=>{const _=x.scrollTop;_>d.current&&_>50?r&&s.current&&(s.current.open=!1,o(!1)):_<50&&!r&&s.current&&(s.current.open=!0,o(!0)),d.current=_};return x.addEventListener("scroll",g,{passive:!0}),()=>{x.removeEventListener("scroll",g)}},[r,l]),c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"mb-3 rounded-lg border bg-gray-50 p-2 transition-all duration-300",children:c.jsxs("details",{ref:s,className:"group",open:r,onToggle:x=>o(x.target.open),children:[c.jsx("summary",{className:"cursor-pointer list-none",children:c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[c.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"}),c.jsx("span",{className:"flex-shrink-0",children:"Group by"}),t.filter(x=>x).length>0&&c.jsx("div",{className:"flex items-center gap-1 ml-1 min-w-0",children:t.map((x,g)=>{if(!x)return null;const _=bi(x);return c.jsxs(j.Fragment,{children:[c.jsx("span",{className:`rounded px-2 py-0.5 text-xs font-semibold flex-shrink-0 ${g===0?"bg-blue-100 text-blue-700":g===1?"bg-green-100 text-green-700":`${_.bg} ${_.text}`}`,children:x}),g<t.length-1&&t[g+1]&&c.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"})]},g)})})]}),c.jsxs("button",{onClick:x=>{x.preventDefault(),x.stopPropagation(),a(!0)},className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline flex-shrink-0",children:[c.jsx("span",{children:"What does this do?"}),c.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]})]})}),c.jsx("div",{className:"mt-2",children:c.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[t.map((x,g)=>c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsxs("label",{className:"text-gray-600",children:["Level ",g+1,":"]}),c.jsxs("select",{value:x||"",onChange:_=>u(g,_.target.value),className:"rounded border px-2 py-1 text-xs",children:[c.jsx("option",{value:"",children:"(None)"}),m(g).map(_=>c.jsx("option",{value:_,children:_},_))]}),t.length>1&&c.jsx("button",{onClick:()=>f(g),className:"rounded border bg-white px-1.5 py-0.5 text-xs text-red-600 hover:bg-red-50",title:"Remove level",children:"×"})]},g)),c.jsx("button",{onClick:p,className:"rounded border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",title:"Add hierarchy level",children:"+"}),t.length===0&&c.jsx("div",{className:"text-gray-500 italic",children:"No hierarchy levels configured"})]})})]})}),i&&c.jsx(S0,{onClose:()=>a(!1)})]})}const Ps=16,Ds=16,ei=280,ga=360,ba=12,ha=12,Yn=520,_a=780,k0=["001"],mr=({onAdd:e,ariaLabel:t})=>c.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),e()},className:"relative z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-base font-semibold text-gray-600 opacity-70 shadow-sm transition-all duration-150 ease-out hover:bg-white group-hover:scale-105 group-hover:opacity-100 group-focus-within:opacity-100 focus:scale-105 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300","aria-label":t,children:c.jsx("span",{className:"leading-none",children:"+"})}),yu=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:i,onAutoFit:a,percentAbove:r,isActive:o=!1,buttonSegments:s})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof a=="function"&&typeof r=="number",u=typeof l=="function",p=d||u,f=m=>{m.key==="Enter"||m.key===" "?(m.preventDefault(),e()):m.key==="ArrowUp"&&d&&n?(m.preventDefault(),n(ba)):m.key==="ArrowDown"&&d&&n?(m.preventDefault(),n(-ba)):m.key==="ArrowUp"&&u&&i?(m.preventDefault(),i(ba)):m.key==="ArrowDown"&&u&&i&&(m.preventDefault(),i(-ba))};return c.jsxs("div",{role:"separator","aria-orientation":"horizontal",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts"}:u?{"aria-label":"Resize row height","aria-valuetext":`${Math.round(r??100)}%`}:{"aria-label":"Add chart below","aria-disabled":!0},tabIndex:0,onKeyDown:f,onClick:m=>{p||m.target.closest("button")||(m.preventDefault(),e())},onDoubleClick:m=>{m.target.closest("button")||(m.preventDefault(),d&&a?a():e())},onMouseDown:m=>{m.target.closest("button")||m.button===0&&(m.preventDefault(),d&&t?t(m.clientY):u&&l&&l(m.clientY))},className:`group relative flex items-center justify-center ${p?"cursor-row-resize":"cursor-pointer"} select-none outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${o?"ring-2 ring-blue-300/60":""}`,style:{height:Ps,paddingLeft:"0.5rem",paddingRight:"0.5rem"},children:[c.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center px-4",children:c.jsx("div",{className:`flex-1 h-1 rounded-full transition-colors duration-150 ${o?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`})}),c.jsx("div",{className:`${s&&s.length>0?"grid w-full":"flex w-full"} items-center justify-center`,style:s&&s.length>0?{gridTemplateColumns:s.map(m=>m.size?`${m.size}px`:"1fr").join(" ")}:void 0,children:s&&s.length>0?s.map(m=>c.jsx("div",{className:"flex justify-center py-0.5",children:c.jsx(mr,{onAdd:m.onAdd,ariaLabel:"Add chart below"})},m.key)):c.jsx(mr,{onAdd:e,ariaLabel:"Add chart below"})})]})},xa=({onResizeStart:e,isActive:t=!1})=>c.jsx("div",{className:"relative w-full h-full flex items-center justify-center",style:{pointerEvents:"auto"},children:c.jsx("div",{className:`w-3 h-3 rounded-full cursor-nwse-resize transition-all ${t?"bg-blue-500 scale-125":"bg-gray-400 hover:bg-gray-500"}`,onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),e(n.clientX,n.clientY)},title:"Drag to resize both dimensions",role:"separator","aria-label":"Resize corner"})}),gu=({onAdd:e,onResizeStart:t,onKeyboardNudge:n,onEdgeResizeStart:l,onEdgeKeyboardNudge:i,onAutoFit:a,percentLeft:r,isActive:o=!1,buttonSegments:s})=>{const d=typeof t=="function"&&typeof n=="function"&&typeof a=="function"&&typeof r=="number",u=typeof l=="function",p=d||u,f=m=>{m.key==="Enter"||m.key===" "?(m.preventDefault(),e()):m.key==="ArrowRight"&&d&&n?(m.preventDefault(),n(ha)):m.key==="ArrowLeft"&&d&&n?(m.preventDefault(),n(-ha)):m.key==="ArrowRight"&&u&&i?(m.preventDefault(),i(ha)):m.key==="ArrowLeft"&&u&&i&&(m.preventDefault(),i(-ha))};return c.jsxs("div",{role:"separator","aria-orientation":"vertical",...d?{"aria-valuenow":Math.round(r),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts horizontally"}:u?{"aria-label":"Resize column width"}:{"aria-label":"Add chart to the right","aria-disabled":!0},tabIndex:0,onKeyDown:f,onClick:m=>{p||m.target.closest("button")||(m.preventDefault(),e())},onDoubleClick:m=>{m.target.closest("button")||(m.preventDefault(),p&&a?a():e())},onMouseDown:m=>{m.target.closest("button")||m.button===0&&(m.preventDefault(),d&&t?t(m.clientX):u&&l&&l(m.clientX))},className:`group relative flex h-full w-full ${p?"cursor-col-resize":"cursor-pointer"} select-none flex-col items-center justify-center outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${o?"ring-2 ring-blue-300/60":""}`,style:{width:Ds,paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:[c.jsx("div",{className:"pointer-events-none absolute inset-0 flex flex-col justify-center py-4",children:c.jsx("div",{className:`mx-auto w-1 rounded-full transition-colors duration-150 ${o?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`,style:{flex:1}})}),c.jsx("div",{className:`${s&&s.length>0?"grid h-full":"flex"} w-full flex-1 flex-col items-center justify-center`,style:s&&s.length>0?{gridTemplateRows:s.map(m=>m.size?`${m.size}px`:"1fr").join(" ")}:void 0,children:s&&s.length>0?s.map(m=>c.jsx("div",{className:"flex items-center justify-center px-0.5",children:c.jsx(mr,{onAdd:m.onAdd,ariaLabel:"Add chart to the right"})},m.key)):c.jsx(mr,{onAdd:e,ariaLabel:"Add chart to the right"})})]})};function P0({protocols:e,onUpdateInverters:t,onScrollToPoint:n,onRemoveInverter:l,onSelectPointsToggle:i,selectPointsOpen:a,callbacksRef:r,onActiveChartSelectedPointsChange:o,onActiveChartPositionChange:s}){const[d,u]=W.useState([{id:"chart-0",selectedPoints:new Map,row:0,col:0}]),[p,f]=W.useState(1),[m,x]=W.useState("chart-0"),[g,_]=W.useState(new Map([[0,_a]])),[b,y]=W.useState(new Map([[0,Yn]])),[h,w]=W.useState(null),[k,L]=W.useState(null),[S,v]=W.useState(null),A=j.useRef(null),R=j.useRef(null),U=j.useRef(null),[B,H]=W.useState(null),ae=j.useRef(null),de=j.useRef(new Map);j.useEffect(()=>{const C=d.find(P=>P.id===m);C&&o(new Map(C.selectedPoints))},[d,m,o]),j.useEffect(()=>{const C=()=>{const P=de.current.get(m);if(P){const D=P.getBoundingClientRect();s(D)}else s(null)};return C(),window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[m,d,g,b,s]),j.useLayoutEffect(()=>{r.current={getActiveChartSelectedPoints:()=>{const C=d.find(P=>P.id===m);return C?new Map(C.selectedPoints):new Map},togglePointForActiveChart:C=>{console.log("togglePointForActiveChart called, activeChartId:",m),u(P=>P.map(T=>{if(T.id===m){const N=new Map(T.selectedPoints);if(console.log("Current selected points:",N.size),N.has(C))N.delete(C),console.log("Deleted point, new size:",N.size);else{const M=new Set(["001"]);N.set(C,M),console.log("Added point, new size:",N.size)}return{...T,selectedPoints:N}}return T}))},updateInvertersForActiveChart:(C,P)=>{console.log("updateInvertersForActiveChart called, activeChartId:",m,"inverters:",P),u(D=>D.map(N=>{if(N.id===m){const M=new Map(N.selectedPoints);return P.size===0?M.delete(C):M.set(C,P),console.log("Updated chart, selected points size:",M.size),{...N,selectedPoints:M}}return N}))}}},[d,m,r]),j.useEffect(()=>{if(typeof ResizeObserver>"u")return;const C=new ResizeObserver(P=>{const D=new Map;P.forEach(T=>{const N=T.target,M=N.getAttribute("data-chart-id");if(!M)return;const K=d.find(ne=>ne.id===M);if(!K)return;const Z=N.querySelector("[data-categorical-stack]"),q=Z?Z.scrollHeight:0;if(q<=0)return;const I=Math.max(Yn+q+24,ei);D.set(K.row,Math.max(I,D.get(K.row)??0))}),D.size!==0&&y(T=>{let N=!1;const M=new Map(T);return D.forEach((K,Z)=>{const q=M.get(Z)??Yn;K>q+1&&(M.set(Z,K),N=!0)}),N?M:T})});return de.current.forEach(P=>C.observe(P)),()=>{C.disconnect()}},[d,y]);const F=j.useCallback(C=>b.get(C)??Yn,[b]),X=j.useCallback(C=>g.get(C)??_a,[g]),V=j.useCallback((C,P)=>{const D=Math.max(ei,P);y(T=>{const N=new Map(T);return N.set(C,D),N})},[]),$=j.useCallback((C,P)=>{const D=Math.max(ga,P);_(T=>{const N=new Map(T);return N.set(C,D),N})},[]),Q=j.useCallback(C=>{ae.current!==null&&window.clearTimeout(ae.current),H(C),ae.current=window.setTimeout(()=>{H(null),ae.current=null},400)},[]);j.useEffect(()=>()=>{ae.current!==null&&window.clearTimeout(ae.current)},[]);const J=j.useCallback((C,P,D,T)=>{if(T<=ei*2){const q=T/2;y(I=>{const ne=new Map(I);return ne.set(C,q),ne.set(P,T-q),ne});return}const N=ei,M=T-ei,K=Math.min(Math.max(D,N),M),Z=T-K;y(q=>{const I=new Map(q);return I.set(C,K),I.set(P,Z),I})},[]),se=j.useCallback((C,P,D,T)=>{if(T<=ga*2){const q=T/2;_(I=>{const ne=new Map(I);return ne.set(C,q),ne.set(P,T-q),ne});return}const N=ga,M=T-ga,K=Math.min(Math.max(D,N),M),Z=T-K;_(q=>{const I=new Map(q);return I.set(C,K),I.set(P,Z),I})},[]),wt=(C,P,D)=>{if(P===void 0)return;const T=F(C),N=F(P);A.current={mode:"between",startY:D,aboveRow:C,belowRow:P,initialAbove:T,initialBelow:N,total:T+N},w(C)},Oe=(C,P)=>{A.current={mode:"edge",startY:P,row:C,initialHeight:F(C)},w(C)};j.useEffect(()=>{if(h===null||!A.current)return;const C=A.current,P=T=>{const N=T.clientY-C.startY;if(C.mode==="between"){const M=C.initialAbove+N;J(C.aboveRow,C.belowRow,M,C.total)}else V(C.row,C.initialHeight+N)},D=()=>{w(null),A.current=null};return document.addEventListener("mousemove",P),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",D)}},[h,J,V]);const Xe=(C,P,D)=>{if(P===void 0)return;const T=X(C),N=X(P);R.current={mode:"between",startX:D,leftCol:C,rightCol:P,initialLeft:T,initialRight:N,total:T+N},L(C)},Je=(C,P)=>{R.current={mode:"edge",startX:P,col:C,initialWidth:X(C)},L(C)};j.useEffect(()=>{if(k===null||!R.current)return;const C=R.current,P=T=>{const N=T.clientX-C.startX;if(C.mode==="between"){const M=C.initialLeft+N;se(C.leftCol,C.rightCol,M,C.total)}else $(C.col,C.initialWidth+N)},D=()=>{L(null),R.current=null};return document.addEventListener("mousemove",P),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",D)}},[k,se,$]);const Ct=(C,P,D,T,N,M)=>{const K=F(C),Z=F(P),q=X(D),I=X(T);U.current={startX:N,startY:M,aboveRow:C,belowRow:P,leftCol:D,rightCol:T,initialAboveHeight:K,initialBelowHeight:Z,initialLeftWidth:q,initialRightWidth:I,totalHeight:K+Z,totalWidth:q+I},v({row:C,col:D})},He=(C,P,D,T,N,M)=>{if(C==="row"){const K=P,Z=T,q=D;U.current={startX:N,startY:M,aboveRow:K,belowRow:Z,leftCol:q,rightCol:q,initialAboveHeight:F(K),initialBelowHeight:F(Z),initialLeftWidth:X(q),initialRightWidth:0,totalHeight:F(K)+F(Z),totalWidth:0},v({row:K,col:q})}else{const K=P,Z=D,q=T;U.current={startX:N,startY:M,aboveRow:K,belowRow:K,leftCol:Z,rightCol:q,initialAboveHeight:F(K),initialBelowHeight:0,initialLeftWidth:X(Z),initialRightWidth:X(q),totalHeight:0,totalWidth:X(Z)+X(q)},v({row:K,col:Z})}},Bl=(C,P,D,T)=>{U.current={startX:D,startY:T,aboveRow:C,belowRow:C,leftCol:P,rightCol:P,initialAboveHeight:F(C),initialBelowHeight:0,initialLeftWidth:X(P),initialRightWidth:0,totalHeight:0,totalWidth:0},v({row:C,col:P})};j.useEffect(()=>{if(S===null||!U.current)return;const C=U.current,P=T=>{const N=T.clientX-C.startX,M=T.clientY-C.startY;if(C.totalHeight>0){const K=C.initialAboveHeight+M;J(C.aboveRow,C.belowRow,K,C.totalHeight)}else V(C.aboveRow,C.initialAboveHeight+M);if(C.totalWidth>0){const K=C.initialLeftWidth+N;se(C.leftCol,C.rightCol,K,C.totalWidth)}else $(C.leftCol,C.initialLeftWidth+N)},D=()=>{v(null),U.current=null};return document.addEventListener("mousemove",P),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",D)}},[S,J,se,V,$]);const Il=(C,P,D)=>{const T=F(C),N=F(P),M=T+N;J(C,P,T+D,M)},jl=(C,P)=>{const D=F(C),T=F(P),N=D+T,M=N/2;J(C,P,M,N)},$r=(C,P)=>{const D=F(C);V(C,D+P)},G=(C,P,D)=>{const T=X(C),N=X(P),M=T+N;se(C,P,T+D,M)},ee=(C,P)=>{const D=X(C),T=X(P),N=D+T,M=N/2;se(C,P,M,N)},te=(C,P)=>{const D=X(C);$(C,D+P)},le=(C,P)=>{const D=d.find(q=>q.id===C);if(!D)return;let T=D.row,N=D.col;const M=(q,I)=>d.some(ne=>ne.row===q&&ne.col===I);switch(P){case"top":if(T=D.row-1,M(T,D.col)){const q=new Set(d.map(z=>z.row)),I=Array.from(q).sort((z,Re)=>z-Re);let ne=!1;for(const z of I)if(z<D.row&&!M(z,D.col)){T=z,ne=!0;break}ne||(u(z=>z.map(Re=>Re.row<D.row?{...Re,row:Re.row-1}:Re)),T=D.row-1)}break;case"bottom":if(T=D.row+1,M(T,D.col)){const q=new Set(d.map(z=>z.row)),I=Array.from(q).sort((z,Re)=>z-Re);let ne=!1;for(const z of I)if(z>D.row&&!M(z,D.col)){T=z,ne=!0;break}if(!ne){let z=T;for(;M(z,D.col);)z++;T=z}}break;case"left":if(N=D.col-1,M(D.row,N)){const q=new Set(d.map(z=>z.col)),I=Array.from(q).sort((z,Re)=>z-Re);let ne=!1;for(const z of I)if(z<D.col&&!M(D.row,z)){N=z,ne=!0;break}ne||(u(z=>z.map(Re=>Re.col<D.col?{...Re,col:Re.col-1}:Re)),N=D.col-1)}break;case"right":if(N=D.col+1,M(D.row,N)){const q=new Set(d.map(z=>z.col)),I=Array.from(q).sort((z,Re)=>z-Re);let ne=!1;for(const z of I)if(z>D.col&&!M(D.row,z)){N=z,ne=!0;break}if(!ne){let z=N;for(;M(D.row,z);)z++;N=z}}break}const K=`chart-${p}`,Z={id:K,selectedPoints:new Map,row:T,col:N};g.has(N)||_(q=>new Map(q).set(N,_a)),b.has(T)||y(q=>new Map(q).set(T,Yn)),u(q=>[...q,Z]),f(q=>q+1),x(K),Q(K)},re=(C,P)=>{const D=d.filter(N=>N.row===C);if(D.length===0)return;let T;typeof P=="number"&&(T=D.find(N=>N.col===P)),T||(T=D.find(N=>N.id===m)??D[0]),le(T.id,"bottom")},ue=(C,P)=>{const D=d.filter(N=>N.col===C);if(D.length===0)return;let T;typeof P=="number"&&(T=D.find(N=>N.row===P)),T||(T=D.find(N=>N.id===m)??D[0]),le(T.id,"right")},Be=C=>{u(P=>{const D=P.filter(I=>I.id!==C);if(D.length===0)return x("chart-0"),_(new Map([[0,_a]])),y(new Map([[0,Yn]])),[{id:"chart-0",selectedPoints:new Map,row:0,col:0}];C===m&&x(D[0].id);const T=new Set(D.map(I=>I.row)),N=new Set(D.map(I=>I.col)),M=Array.from(T).sort((I,ne)=>I-ne),K=Array.from(N).sort((I,ne)=>I-ne),Z=new Map(M.map((I,ne)=>[I,ne])),q=new Map(K.map((I,ne)=>[I,ne]));return D.map(I=>({...I,row:Z.get(I.row)??I.row,col:q.get(I.col)??I.col}))})},Ze=(C,P,D)=>{u(T=>T.map(N=>N.id===C?{...N,selectedPoints:new Map(N.selectedPoints).set(P,D)}:N)),t(C,P,D)},mt=(C,P,D)=>{u(T=>T.map(N=>{if(N.id===C){const M=new Map(N.selectedPoints),K=M.get(P);if(K){const Z=new Set(K);return Z.delete(D),Z.size===0?M.delete(P):M.set(P,Z),{...N,selectedPoints:M}}}return N})),l(C,P,D)},Le=Math.min(...d.map(C=>C.row),0),ke=Math.min(...d.map(C=>C.col),0),Hn=d.map(C=>({...C,row:C.row-Le,col:C.col-ke})),qn=j.useMemo(()=>{const C=new Map;return d.forEach(P=>{C.set(`${P.row}:${P.col}`,P)}),C},[d]),fe=Array.from(new Set(Hn.map(C=>C.row))).sort((C,P)=>C-P),ye=Array.from(new Set(Hn.map(C=>C.col))).sort((C,P)=>C-P),Bd=new Map,Ul=[];fe.forEach((C,P)=>{Bd.set(C,P);const D=C+Le;Ul.push(`${F(D)}px`),P<fe.length-1&&Ul.push(`${Ps}px`)}),fe.length>0&&Ul.push(`${Ps}px`);const Af=Ul.length>0?Ul.join(" "):"1fr",Id=new Map,Wl=[];ye.forEach((C,P)=>{Id.set(C,P);const D=C+ke;Wl.push(`${X(D)}px`),P<ye.length-1&&Wl.push(`${Ds}px`)}),ye.length>0&&Wl.push(`${Ds}px`);const Ef=Wl.length>0?Wl.join(" "):"1fr";return c.jsx("div",{className:"w-full h-full overflow-auto",children:c.jsxs("div",{className:"grid p-4",style:{gridTemplateRows:Af,gridTemplateColumns:Ef,rowGap:0,columnGap:0},children:[Hn.map(C=>c.jsx("div",{ref:P=>{P?de.current.set(C.id,P):de.current.delete(C.id)},className:`relative border rounded-lg bg-white shadow-sm overflow-visible transition-all cursor-pointer ${m===C.id?"border-blue-500 border-2 ring-2 ring-blue-200":"border-gray-300"} ${B===C.id?"animate-chart-expand":""}`,style:{gridRow:(Bd.get(C.row)??0)*2+1,gridColumn:(Id.get(C.col)??0)*2+1},"data-chart-id":C.id,onClick:P=>{P.target.closest("button")||x(C.id)},children:c.jsx("div",{className:"chart-content h-full flex flex-col",children:c.jsx(C0,{selectedPoints:C.selectedPoints,protocols:e,onUpdateInverters:(P,D)=>Ze(C.id,P,D),onScrollToPoint:n,onRemoveInverter:(P,D)=>mt(C.id,P,D),onSelectPointsToggle:i,selectPointsOpen:a,onDeleteChart:()=>Be(C.id)})})},C.id)),ye.slice(0,-1).map((C,P)=>{const D=C+ke,N=ye[P+1]+ke,M=X(D),K=X(N),Z=M+K||1,q=fe.reduce((I,ne)=>{const z=ne+Le;return qn.has(`${z}:${D}`)&&I.push({key:`col-btn-${z}-${D}`,onAdd:()=>ue(D,z),size:F(z)}),I},[]);return c.jsx("div",{style:{gridRow:"1 / -1",gridColumn:P*2+2,alignSelf:"stretch",justifySelf:"center"},children:c.jsx(gu,{onAdd:()=>ue(D),onResizeStart:I=>Xe(D,N,I),onKeyboardNudge:I=>G(D,N,I),onAutoFit:()=>ee(D,N),percentLeft:M/Z*100,isActive:k===D,buttonSegments:q})},`col-divider-${D}`)}),ye.length>0&&(()=>{const P=ye[ye.length-1]+ke,D=fe.reduce((T,N)=>{const M=N+Le;return qn.has(`${M}:${P}`)&&T.push({key:`terminal-col-btn-${M}-${P}`,onAdd:()=>ue(P,M),size:F(M)}),T},[]);return c.jsx("div",{style:{gridRow:"1 / -1",gridColumn:ye.length*2,alignSelf:"stretch",justifySelf:"center"},children:c.jsx(gu,{onAdd:()=>ue(P),onEdgeResizeStart:T=>Je(P,T),onEdgeKeyboardNudge:T=>te(P,T),isActive:k===P,buttonSegments:D})},`col-divider-${P}-terminal`)})(),fe.slice(0,-1).map((C,P)=>{const D=fe[P+1],T=C+Le,N=D+Le,M=F(T),K=F(N),Z=M+K||1,q=ye.reduce((I,ne)=>{const z=ne+ke;return qn.has(`${T}:${z}`)&&I.push({key:`row-btn-${T}-${z}`,onAdd:()=>re(T,z),size:X(z)}),I},[]);return c.jsx("div",{style:{gridColumn:"1 / -1",gridRow:P*2+2,alignSelf:"center",justifySelf:"stretch"},children:c.jsx(yu,{onAdd:()=>re(T),onResizeStart:I=>wt(T,N,I),onKeyboardNudge:I=>Il(T,N,I),onAutoFit:()=>jl(T,N),percentAbove:M/Z*100,isActive:h===T,buttonSegments:q})},`divider-${T}`)}),fe.length>0&&(()=>{const P=fe[fe.length-1]+Le,D=ye.reduce((T,N)=>{const M=N+ke;return qn.has(`${P}:${M}`)&&T.push({key:`terminal-row-btn-${P}-${M}`,onAdd:()=>re(P,M),size:X(M)}),T},[]);return c.jsx("div",{style:{gridColumn:"1 / -1",gridRow:fe.length*2,alignSelf:"center",justifySelf:"stretch"},children:c.jsx(yu,{onAdd:()=>re(P),onEdgeResizeStart:T=>Oe(P,T),onEdgeKeyboardNudge:T=>$r(P,T),isActive:h===P,buttonSegments:D})},`divider-${P}-terminal`)})(),fe.slice(0,-1).flatMap((C,P)=>{const D=C+Le,N=fe[P+1]+Le;return ye.slice(0,-1).map((M,K)=>{const Z=M+ke,I=ye[K+1]+ke;return c.jsx("div",{style:{gridRow:P*2+2,gridColumn:K*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:c.jsx(xa,{onResizeStart:(ne,z)=>Ct(D,N,Z,I,ne,z),isActive:(S==null?void 0:S.row)===D&&(S==null?void 0:S.col)===Z})},`corner-${D}-${Z}`)})}),fe.slice(0,-1).map((C,P)=>{const D=C+Le,N=fe[P+1]+Le;if(ye.length>0){const K=ye[ye.length-1]+ke;return c.jsx("div",{style:{gridRow:P*2+2,gridColumn:ye.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:c.jsx(xa,{onResizeStart:(Z,q)=>He("row",D,N,K,Z,q),isActive:(S==null?void 0:S.row)===D&&(S==null?void 0:S.col)===K})},`corner-edge-row-${D}-${K}`)}return null}),ye.slice(0,-1).map((C,P)=>{const D=C+ke,N=ye[P+1]+ke;if(fe.length>0){const K=fe[fe.length-1]+Le;return c.jsx("div",{style:{gridRow:fe.length*2,gridColumn:P*2+2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:c.jsx(xa,{onResizeStart:(Z,q)=>He("col",K,D,N,Z,q),isActive:(S==null?void 0:S.row)===K&&(S==null?void 0:S.col)===D})},`corner-edge-col-${K}-${D}`)}return null}),fe.length>0&&ye.length>0&&(()=>{const P=fe[fe.length-1]+Le,T=ye[ye.length-1]+ke;return c.jsx("div",{style:{gridRow:fe.length*2,gridColumn:ye.length*2,width:"16px",height:"16px",zIndex:10,pointerEvents:"auto"},children:c.jsx(xa,{onResizeStart:(N,M)=>Bl(P,T,N,M),isActive:(S==null?void 0:S.row)===P&&(S==null?void 0:S.col)===T})},`corner-terminal-${P}-${T}`)})()]})})}function D0(){const[e,t]=W.useState(""),n=j.useRef(null),[l,i]=j.useState(new Map),[a,r]=j.useState(null),[o,s]=j.useState(new Set(k0)),d=j.useMemo(()=>{if(!a)return{top:"1rem",left:"1rem",showArrow:!1,arrowOnLeft:!0};const G=800,ee=8,te=window.innerWidth;let le=a.right+ee,re=!0;return le+G>te-20&&(le=a.left-G-ee,re=!1,le<20&&(le=20,re=!0)),{top:`${a.top}px`,left:`${le}px`,showArrow:!0,arrowOnLeft:re}},[a]),[u,p]=W.useState(!1),[f,m]=W.useState(new Set),[x,g]=W.useState(()=>new Set),[_,b]=W.useState("Standard"),[y,h]=W.useState(["Type of Data","Component","Feature"]),[w,k]=W.useState(!0),L=j.useRef(null),S=j.useRef(null),[v,A]=j.useState(""),[R,U]=j.useState(!0),[B,H]=j.useState(!1),[ae,de]=j.useState(!1),F=j.useRef(0),X=j.useRef(0);j.useEffect(()=>{if(!S.current)return;const G=()=>{if(!S.current)return;const le=S.current,re=le.scrollTop;if(Date.now()-X.current<500){F.current=re;return}re>F.current&&re>100?B||H(!0):re<50&&B&&H(!1),F.current=re;const Be=le.querySelectorAll('[id^="group-"]');let Ze="";Be.forEach(mt=>{const Le=mt.getBoundingClientRect(),ke=le.getBoundingClientRect();Le.top-ke.top<=ke.height*.3&&Le.bottom>ke.top&&(Ze=mt.id)}),Ze&&Ze!==v&&A(Ze)},ee=setTimeout(G,100),te=S.current;return te.addEventListener("scroll",G),()=>{clearTimeout(ee),te.removeEventListener("scroll",G)}},[v,B]),j.useEffect(()=>{const G=ee=>{ee.key==="Escape"&&(ae?de(!1):w&&k(!1))};return document.addEventListener("keydown",G),()=>{document.removeEventListener("keydown",G)}},[w,ae]),j.useEffect(()=>{if(!w)return;const G=ee=>{const te=ee.target;te&&(L.current&&L.current.contains(te)||te.closest('[data-role="sidebar-toggle"]')||k(!1))};return document.addEventListener("mousedown",G),document.addEventListener("touchstart",G,{passive:!0}),()=>{document.removeEventListener("mousedown",G),document.removeEventListener("touchstart",G)}},[w]);const V=G=>{w?$(G):(k(!0),setTimeout(()=>{$(G)},300))},$=G=>{if(!S.current)return;const ee=S.current.querySelector(`[data-point-key="${G}"]`);ee&&(ee.scrollIntoView({behavior:"smooth",block:"center"}),ee.classList.add("bg-blue-100"),setTimeout(()=>{ee.classList.remove("bg-blue-100")},1e3))},Q=()=>new Set(o),J=G=>{s(new Set(G))},se=W.useMemo(()=>c0(Sn),[]),wt=W.useMemo(()=>[...se.keys()].sort(),[se]),Oe=W.useMemo(()=>{let G=Sn;if(G=G.filter(te=>(Array.isArray(te.labels)?te.labels:[]).length>0),e){const te=e.toLowerCase();G=G.filter(le=>(le.entry.description||"").toLowerCase().includes(te)||(le.entry.longdescription||"").toLowerCase().includes(te)||(le.entry.name||"").toLowerCase().includes(te)?!0:(Array.isArray(le.labels)?le.labels:[]).some(Be=>{const Ze=Xt(Be.label_family,Be.label_text);return Ze&&Ze.toLowerCase().includes(te)}))}const ee=(()=>{switch(_){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();if(G=G.filter(te=>{const re=(Array.isArray(te.labels)?te.labels:[]).filter(ue=>ue.label_family==="Level of Detail").map(ue=>ue.label_text);return re.length===0?!0:re.some(ue=>ee.includes(ue))}),x.size>0){const te=new Map;x.forEach(le=>{const[re,ue]=le.split(":",2);te.has(re)||te.set(re,new Set),te.get(re).add(ue)}),G=G.filter(le=>{const re=Array.isArray(le.labels)?le.labels:[];if(re.length===0)return!1;const ue=new Map;re.forEach(Be=>{ue.has(Be.label_family)||ue.set(Be.label_family,new Set),ue.get(Be.label_family).add(Be.label_text)});for(const[Be,Ze]of te.entries()){const mt=ue.get(Be);if(!mt||![...Ze].some(ke=>mt.has(ke)))return!1}return!0})}return G},[e,x,_]),Xe=W.useMemo(()=>d0(Oe,y),[Oe,y]);j.useEffect(()=>{A(""),S.current&&setTimeout(()=>{const G=S.current;G&&G.dispatchEvent(new Event("scroll"))},150)},[Xe]);const Je=G=>{if(console.log("toggle called for key:",G),!n.current){console.warn("ChartGrid callbacks not available yet");return}const ee=n.current.getActiveChartSelectedPoints(),te=ee.has(G);if(console.log("isCurrentlySelected:",te,"activeSelected size:",ee.size),te)console.log("Removing point:",G),n.current.togglePointForActiveChart(G);else{const le=Q();console.log("Adding point:",G,"with inverters:",le),n.current.updateInvertersForActiveChart(G,le),J(le)}},Ct=(G,ee)=>{J(ee),n.current&&n.current.updateInvertersForActiveChart(G,ee)},He=(G,ee)=>{g(te=>{const le=new Set(te),re=`${G}:${ee}`;return le.has(re)?le.delete(re):le.add(re),le})},Bl=()=>g(new Set),Il=G=>{m(ee=>{const te=new Set(ee);return te.has(G)?te.delete(G):te.add(G),te})},jl=Oe.length,$r=W.useMemo(()=>Sn.filter(G=>(Array.isArray(G.labels)?G.labels:[]).length>0).length,[]);return W.useEffect(()=>{try{console.assert(Sn.length>0,"Expected sample data");const G=Sn.find(ee=>ee.entry.name==="pNom");G&&console.assert(G.entry.unit==="W","pNom should have unit W")}catch(G){console.warn("Self-test failed:",G)}},[]),c.jsxs("div",{className:"h-full bg-slate-100 p-4 md:p-6",children:[c.jsxs("div",{className:"mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative overflow-hidden flex flex-col",children:[c.jsx("div",{className:"flex-1 min-h-0 relative",children:c.jsx(P0,{protocols:Sn,onUpdateInverters:()=>{},onScrollToPoint:V,onRemoveInverter:()=>{},onSelectPointsToggle:k,selectPointsOpen:w,callbacksRef:n,onActiveChartSelectedPointsChange:i,onActiveChartPositionChange:r})}),c.jsxs("div",{ref:L,className:`fixed bg-white border-2 border-blue-400 shadow-xl transition-all duration-300 z-50 rounded-lg flex flex-row ${w?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-4 pointer-events-none"}`,style:{top:d.top,left:d.left,width:"800px",height:w?"calc(100vh - 8rem)":"0",maxHeight:"calc(100vh - 8rem)",overflow:"hidden"},children:[w&&d.showArrow&&c.jsx("div",{className:`absolute top-4 w-0 h-0 ${d.arrowOnLeft?"left-0":"right-0"}`,style:{borderTop:"8px solid transparent",borderBottom:"8px solid transparent",...d.arrowOnLeft?{borderRight:"8px solid rgb(96, 165, 250)",transform:"translateX(-8px)"}:{borderLeft:"8px solid rgb(96, 165, 250)",transform:"translateX(8px)"}}}),c.jsxs("div",{className:"h-full flex flex-row w-full min-h-0",children:[c.jsx("div",{className:"w-40 border-r border-gray-200 flex-shrink-0 overflow-y-auto",children:c.jsxs("nav",{className:"p-3 text-sm text-gray-800",children:[c.jsx("div",{className:"text-emerald-600 font-semibold mb-2 text-xs",children:"Navigation"}),c.jsx("div",{className:"flex flex-col gap-0.5",children:Xe.size>0&&[...Xe.entries()].filter(([G])=>G!=="(Unlabeled)").map(([G,ee])=>{const te=`group-${G.replace(/\s+/g,"-")}-0`,le=v===te,re=[];return ee instanceof Map&&re.push(...[...ee.entries()].filter(([ue])=>ue!=="(Unlabeled)")),c.jsxs("div",{children:[c.jsxs("div",{className:"relative",children:[le&&c.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),c.jsx("button",{className:`px-2 py-1 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors font-medium ${le?"text-blue-600 bg-blue-50":"text-gray-800"}`,onClick:()=>{const ue=document.getElementById(te);if(ue&&S.current){const Be=S.current.getBoundingClientRect(),Ze=ue.getBoundingClientRect(),mt=S.current.scrollTop,Le=Ze.top-Be.top+mt;S.current.scrollTo({top:Le-10,behavior:"smooth"})}},children:G})]}),re.length>0&&c.jsx("div",{className:"ml-2 mt-0.5 space-y-0.5",children:re.map(([ue])=>{const mt=`group-${`${G.replace(/\s+/g,"-")}-${ue.replace(/\s+/g,"-")}`}-1`,Le=v===mt;return c.jsxs("div",{className:"relative",children:[Le&&c.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-0.5 bg-blue-400 rounded-r"}),c.jsx("button",{className:`px-2 py-0.5 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors ${Le?"text-blue-600 bg-blue-50":"text-gray-600"}`,onClick:()=>{const ke=document.getElementById(mt);if(ke&&S.current){const Hn=S.current.getBoundingClientRect(),qn=ke.getBoundingClientRect(),fe=S.current.scrollTop,ye=qn.top-Hn.top+fe;S.current.scrollTo({top:ye-10,behavior:"smooth"})}},children:ue})]},ue)})})]},G)})})]})}),c.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[c.jsx("div",{className:"border-b border-gray-200",children:c.jsxs("button",{onClick:()=>{X.current=Date.now(),H(!B)},className:"w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-colors",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("svg",{className:`h-4 w-4 text-gray-500 transition-transform ${B?"":"rotate-90"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),c.jsx("div",{className:"text-lg font-semibold",children:"Add Points"})]}),c.jsxs("div",{className:"text-sm text-gray-600 flex items-center gap-2",children:[c.jsxs("span",{children:["Available: ",jl.toLocaleString()," of ",$r.toLocaleString()]}),c.jsx("button",{onClick:G=>{G.stopPropagation(),de(!0)},className:"px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors",title:"Configure grouping and sorting",children:"Change Sort Order ⇅"})]})]})}),c.jsx("div",{className:`transition-all duration-300 overflow-hidden ${B?"max-h-0":"max-h-[1000px]"}`,children:c.jsxs("div",{className:"p-4",children:[c.jsx(y0,{allLabels:se,selectedLabels:x,onToggleLabel:He,onClearFilters:Bl,protocols:Sn,detailLevel:_}),c.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[c.jsx("div",{className:"flex-1",children:c.jsx(u0,{value:e,onChange:t})}),c.jsx(p0,{show:u,onToggle:p})]}),c.jsxs("div",{className:"mt-2 flex items-center gap-4",children:[c.jsxs("button",{onClick:()=>{U(!0),S.current&&S.current.querySelectorAll("details").forEach(ee=>{ee.open=!0})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[c.jsx("span",{children:"⤵"}),c.jsx("span",{children:"Expand all"})]}),c.jsxs("button",{onClick:()=>{U(!1),S.current&&S.current.querySelectorAll("details").forEach(ee=>{ee.open=!1})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[c.jsx("span",{children:"⤴"}),c.jsx("span",{children:"Collapse all"})]}),c.jsx(uu,{value:_,onChange:b})]})]})}),c.jsx("div",{className:"flex-1 overflow-y-auto px-4 pb-4 pr-1",ref:S,"data-scroll-container":!0,children:Xe.size===0?c.jsxs("div",{className:"py-4 text-center text-sm text-gray-500",children:["No points match the current filters.",c.jsx("br",{}),c.jsx("b",{children:"Increase the Detail Level"})," or ",c.jsx("b",{children:"remove filters"})," to see more data points."]}):[...Xe.entries()].filter(([G])=>G!=="(Unlabeled)").map(([G,ee])=>c.jsx(Df,{levelName:G,levelData:ee,selected:l,toggle:Je,showHelp:u,onUpdateInverters:Ct,groupsExpanded:R,pointHelpEnabled:f,onTogglePointHelp:Il,depth:0,query:e,hierarchy:y},G))}),c.jsxs("div",{className:"border-t border-gray-200 bg-white/80 px-4 py-3",children:[c.jsx("p",{className:"text-xs text-gray-600 mb-2",children:_!=="Complete"?"Didn't find what you were looking for? Increase the Detail Level, remove filters, or clearing your search terms to see more data points.":"Didn't find what you were looking for? Try removing filters or clearing your search terms to see more data points."}),c.jsx(uu,{value:_,onChange:b})]})]})]})]})]}),ae&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",onClick:()=>de(!1),children:c.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden",onClick:G=>G.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:"Sort Order"}),c.jsx("button",{onClick:()=>de(!1),className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"Close",children:c.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),c.jsx("div",{className:"p-4 overflow-y-auto max-h-[calc(80vh-140px)]",children:c.jsx(L0,{availableFamilies:wt,hierarchy:y,onChange:h,scrollContainerRef:S})}),c.jsx("div",{className:"flex items-center justify-end gap-2 p-4 border-t border-gray-200",children:c.jsx("button",{onClick:()=>de(!1),className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors",children:"Done"})})]})})]})}const bu="matter-app-active-view";function T0(){const[e,t]=W.useState(()=>{const n=localStorage.getItem(bu);return n==="site-config"||n==="historical-data"?n:"site-config"});return W.useEffect(()=>{localStorage.setItem(bu,e)},[e]),c.jsxs("div",{className:"flex h-screen bg-slate-100",children:[c.jsxs("aside",{className:"w-64 bg-white border-r border-slate-300 flex flex-col shadow-sm",children:[c.jsx("div",{className:"p-4 border-b border-slate-300",children:c.jsx("h1",{className:"text-lg font-semibold text-slate-800",children:"Matter App"})}),c.jsxs("nav",{className:"flex-1 p-3",children:[c.jsx("button",{onClick:()=>t("site-config"),className:`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${e==="site-config"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xl",children:"⚙️"}),c.jsx("span",{children:"Site Config"})]})}),c.jsx("button",{onClick:()=>t("historical-data"),className:`w-full text-left px-4 py-3 rounded-lg transition-colors ${e==="historical-data"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xl",children:"📊"}),c.jsx("span",{children:"Historical Data"})]})})]}),c.jsx("div",{className:"p-4 border-t border-slate-300 text-xs text-slate-500",children:c.jsxs("div",{children:["Active: ",e==="site-config"?"Site Config":"Historical Data"]})})]}),c.jsxs("main",{className:"flex-1 overflow-auto",children:[e==="site-config"&&c.jsx(Kb,{}),e==="historical-data"&&c.jsx(D0,{})]})]})}ko.createRoot(document.getElementById("root")).render(c.jsx(j.StrictMode,{children:c.jsx(T0,{})}));

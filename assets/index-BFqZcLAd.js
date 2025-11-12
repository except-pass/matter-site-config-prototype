(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Sp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cu={exports:{}},sa={},du={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),Lp=Symbol.for("react.portal"),kp=Symbol.for("react.fragment"),Pp=Symbol.for("react.strict_mode"),Np=Symbol.for("react.profiler"),Ap=Symbol.for("react.provider"),Ip=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),Dp=Symbol.for("react.suspense"),Vp=Symbol.for("react.memo"),Tp=Symbol.for("react.lazy"),Tc=Symbol.iterator;function Mp(e){return e===null||typeof e!="object"?null:(e=Tc&&e[Tc]||e["@@iterator"],typeof e=="function"?e:null)}var uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mu=Object.assign,fu={};function Pl(e,n,t){this.props=e,this.context=n,this.refs=fu,this.updater=t||uu}Pl.prototype.isReactComponent={};Pl.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Pl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pu(){}pu.prototype=Pl.prototype;function Cs(e,n,t){this.props=e,this.context=n,this.refs=fu,this.updater=t||uu}var ws=Cs.prototype=new pu;ws.constructor=Cs;mu(ws,Pl.prototype);ws.isPureReactComponent=!0;var Mc=Array.isArray,yu=Object.prototype.hasOwnProperty,Ss={current:null},gu={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,n,t){var l,i={},r=null,a=null;if(n!=null)for(l in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(r=""+n.key),n)yu.call(n,l)&&!gu.hasOwnProperty(l)&&(i[l]=n[l]);var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(l in o=e.defaultProps,o)i[l]===void 0&&(i[l]=o[l]);return{$$typeof:Vi,type:e,key:r,ref:a,props:i,_owner:Ss.current}}function Gp(e,n){return{$$typeof:Vi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function Bp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Gc=/\/+/g;function Oa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Bp(""+e.key):n.toString(36)}function yr(e,n,t,l,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Vi:case Lp:a=!0}}if(a)return a=e,i=i(a),e=l===""?"."+Oa(a,0):l,Mc(i)?(t="",e!=null&&(t=e.replace(Gc,"$&/")+"/"),yr(i,n,t,"",function(c){return c})):i!=null&&(Ls(i)&&(i=Gp(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Gc,"$&/")+"/")+e)),n.push(i)),1;if(a=0,l=l===""?".":l+":",Mc(e))for(var o=0;o<e.length;o++){r=e[o];var s=l+Oa(r,o);a+=yr(r,n,t,s,i)}else if(s=Mp(e),typeof s=="function")for(e=s.call(e),o=0;!(r=e.next()).done;)r=r.value,s=l+Oa(r,o++),a+=yr(r,n,t,s,i);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function ji(e,n,t){if(e==null)return e;var l=[],i=0;return yr(e,l,"","",function(r){return n.call(t,r,i++)}),l}function Op(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},gr={transition:null},Fp={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:gr,ReactCurrentOwner:Ss};function hu(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:ji,forEach:function(e,n,t){ji(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ji(e,function(){n++}),n},toArray:function(e){return ji(e,function(n){return n})||[]},only:function(e){if(!Ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=Pl;J.Fragment=kp;J.Profiler=Np;J.PureComponent=Cs;J.StrictMode=Pp;J.Suspense=Dp;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;J.act=hu;J.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=mu({},e.props),i=e.key,r=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,a=Ss.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in n)yu.call(n,s)&&!gu.hasOwnProperty(s)&&(l[s]=n[s]===void 0&&o!==void 0?o[s]:n[s])}var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){o=Array(s);for(var c=0;c<s;c++)o[c]=arguments[c+2];l.children=o}return{$$typeof:Vi,type:e.type,key:i,ref:r,props:l,_owner:a}};J.createContext=function(e){return e={$$typeof:Ip,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ap,_context:e},e.Consumer=e};J.createElement=bu;J.createFactory=function(e){var n=bu.bind(null,e);return n.type=e,n};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:Ep,render:e}};J.isValidElement=Ls;J.lazy=function(e){return{$$typeof:Tp,_payload:{_status:-1,_result:e},_init:Op}};J.memo=function(e,n){return{$$typeof:Vp,type:e,compare:n===void 0?null:n}};J.startTransition=function(e){var n=gr.transition;gr.transition={};try{e()}finally{gr.transition=n}};J.unstable_act=hu;J.useCallback=function(e,n){return Re.current.useCallback(e,n)};J.useContext=function(e){return Re.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};J.useEffect=function(e,n){return Re.current.useEffect(e,n)};J.useId=function(){return Re.current.useId()};J.useImperativeHandle=function(e,n,t){return Re.current.useImperativeHandle(e,n,t)};J.useInsertionEffect=function(e,n){return Re.current.useInsertionEffect(e,n)};J.useLayoutEffect=function(e,n){return Re.current.useLayoutEffect(e,n)};J.useMemo=function(e,n){return Re.current.useMemo(e,n)};J.useReducer=function(e,n,t){return Re.current.useReducer(e,n,t)};J.useRef=function(e){return Re.current.useRef(e)};J.useState=function(e){return Re.current.useState(e)};J.useSyncExternalStore=function(e,n,t){return Re.current.useSyncExternalStore(e,n,t)};J.useTransition=function(){return Re.current.useTransition()};J.version="18.3.1";du.exports=J;var j=du.exports;const R=Sp(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=j,jp=Symbol.for("react.element"),Up=Symbol.for("react.fragment"),Wp=Object.prototype.hasOwnProperty,$p=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hp={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,n,t){var l,i={},r=null,a=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(a=n.ref);for(l in n)Wp.call(n,l)&&!Hp.hasOwnProperty(l)&&(i[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps,n)i[l]===void 0&&(i[l]=n[l]);return{$$typeof:jp,type:e,key:r,ref:a,props:i,_owner:$p.current}}sa.Fragment=Up;sa.jsx=_u;sa.jsxs=_u;cu.exports=sa;var d=cu.exports,_o={},xu={exports:{}},ln={},vu={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,O){var H=M.length;M.push(O);e:for(;0<H;){var ee=H-1>>>1,oe=M[ee];if(0<i(oe,O))M[ee]=O,M[H]=oe,H=ee;else break e}}function t(M){return M.length===0?null:M[0]}function l(M){if(M.length===0)return null;var O=M[0],H=M.pop();if(H!==O){M[0]=H;e:for(var ee=0,oe=M.length,gn=oe>>>1;ee<gn;){var We=2*(ee+1)-1,In=M[We],$e=We+1,bn=M[$e];if(0>i(In,H))$e<oe&&0>i(bn,In)?(M[ee]=bn,M[$e]=H,ee=$e):(M[ee]=In,M[We]=H,ee=We);else if($e<oe&&0>i(bn,H))M[ee]=bn,M[$e]=H,ee=$e;else break e}}return O}function i(M,O){var H=M.sortIndex-O.sortIndex;return H!==0?H:M.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var s=[],c=[],u=1,m=null,y=3,f=!1,x=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(M){for(var O=t(c);O!==null;){if(O.callback===null)l(c);else if(O.startTime<=M)l(c),O.sortIndex=O.expirationTime,n(s,O);else break;O=t(c)}}function C(M){if(b=!1,h(M),!x)if(t(s)!==null)x=!0,Ue(w);else{var O=t(c);O!==null&&Ee(C,O.startTime-M)}}function w(M,O){x=!1,b&&(b=!1,g(v),v=-1),f=!0;var H=y;try{for(h(O),m=t(s);m!==null&&(!(m.expirationTime>O)||M&&!q());){var ee=m.callback;if(typeof ee=="function"){m.callback=null,y=m.priorityLevel;var oe=ee(m.expirationTime<=O);O=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===t(s)&&l(s),h(O)}else l(s);m=t(s)}if(m!==null)var gn=!0;else{var We=t(c);We!==null&&Ee(C,We.startTime-O),gn=!1}return gn}finally{m=null,y=H,f=!1}}var L=!1,k=null,v=-1,V=5,E=-1;function q(){return!(e.unstable_now()-E<V)}function U(){if(k!==null){var M=e.unstable_now();E=M;var O=!0;try{O=k(!0,M)}finally{O?$():(L=!1,k=null)}}else L=!1}var $;if(typeof p=="function")$=function(){p(U)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,an=ie.port2;ie.port1.onmessage=U,$=function(){an.postMessage(null)}}else $=function(){_(U,0)};function Ue(M){k=M,L||(L=!0,$())}function Ee(M,O){v=_(function(){M(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||f||(x=!0,Ue(w))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(M){switch(y){case 1:case 2:case 3:var O=3;break;default:O=y}var H=y;y=O;try{return M()}finally{y=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,O){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var H=y;y=M;try{return O()}finally{y=H}},e.unstable_scheduleCallback=function(M,O,H){var ee=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ee+H:ee):H=ee,M){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=H+oe,M={id:u++,callback:O,priorityLevel:M,startTime:H,expirationTime:oe,sortIndex:-1},H>ee?(M.sortIndex=H,n(c,M),t(s)===null&&M===t(c)&&(b?(g(v),v=-1):b=!0,Ee(C,H-ee))):(M.sortIndex=oe,n(s,M),x||f||(x=!0,Ue(w))),M},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(M){var O=y;return function(){var H=y;y=O;try{return M.apply(this,arguments)}finally{y=H}}}})(Cu);vu.exports=Cu;var qp=vu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=j,tn=qp;function D(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,fi={};function Ot(e,n){bl(e,n),bl(e+"Capture",n)}function bl(e,n){for(fi[e]=n,e=0;e<n.length;e++)wu.add(n[e])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=Object.prototype.hasOwnProperty,Kp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bc={},Oc={};function Qp(e){return xo.call(Oc,e)?!0:xo.call(Bc,e)?!1:Kp.test(e)?Oc[e]=!0:(Bc[e]=!0,!1)}function Yp(e,n,t,l){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xp(e,n,t,l){if(n===null||typeof n>"u"||Yp(e,n,t,l))return!0;if(l)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function je(e,n,t,l,i,r,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=a}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ie[n]=new je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var ks=/[\-:]([a-z])/g;function Ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ks,Ps);Ie[n]=new je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ks,Ps);Ie[n]=new je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ks,Ps);Ie[n]=new je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ns(e,n,t,l){var i=Ie.hasOwnProperty(n)?Ie[n]:null;(i!==null?i.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Xp(n,t,i,l)&&(t=null),l||i===null?Qp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,l=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,l?e.setAttributeNS(l,n,t):e.setAttribute(n,t))))}var Xn=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),zt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),vo=Symbol.for("react.profiler"),Su=Symbol.for("react.provider"),Lu=Symbol.for("react.context"),Is=Symbol.for("react.forward_ref"),Co=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),Es=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),ku=Symbol.for("react.offscreen"),Fc=Symbol.iterator;function Fl(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Fa;function Yl(e){if(Fa===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Fa=n&&n[1]||""}return`
`+Fa+e}var Ra=!1;function ja(e,n){if(!e||Ra)return"";Ra=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var l=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){l=c}e.call(n.prototype)}else{try{throw Error()}catch(c){l=c}e()}}catch(c){if(c&&l&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),r=l.stack.split(`
`),a=i.length-1,o=r.length-1;1<=a&&0<=o&&i[a]!==r[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==r[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==r[o]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=o);break}}}finally{Ra=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Yl(e):""}function Jp(e){switch(e.tag){case 5:return Yl(e.type);case 16:return Yl("Lazy");case 13:return Yl("Suspense");case 19:return Yl("SuspenseList");case 0:case 2:case 15:return e=ja(e.type,!1),e;case 11:return e=ja(e.type.render,!1),e;case 1:return e=ja(e.type,!0),e;default:return""}}function So(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case zt:return"Portal";case vo:return"Profiler";case As:return"StrictMode";case Co:return"Suspense";case wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lu:return(e.displayName||"Context")+".Consumer";case Su:return(e._context.displayName||"Context")+".Provider";case Is:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Es:return n=e.displayName||null,n!==null?n:So(e.type)||"Memo";case Zn:n=e._payload,e=e._init;try{return So(e(n))}catch{}}return null}function Zp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return So(n);case 8:return n===As?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ey(e){var n=Pu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){l=""+a,r.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(a){l=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wi(e){e._valueTracker||(e._valueTracker=ey(e))}function Nu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=Pu(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lo(e,n){var t=n.checked;return be({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Rc(e,n){var t=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;t=yt(n.value!=null?n.value:t),e._wrapperState={initialChecked:l,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Au(e,n){n=n.checked,n!=null&&Ns(e,"checked",n,!1)}function ko(e,n){Au(e,n);var t=yt(n.value),l=n.type;if(t!=null)l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Po(e,n.type,t):n.hasOwnProperty("defaultValue")&&Po(e,n.type,yt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function jc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Po(e,n,t){(n!=="number"||Dr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Xl=Array.isArray;function cl(e,n,t,l){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&l&&(e[t].defaultSelected=!0)}else{for(t=""+yt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function No(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(D(91));return be({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(D(92));if(Xl(t)){if(1<t.length)throw Error(D(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:yt(t)}}function Iu(e,n){var t=yt(n.value),l=yt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),l!=null&&(e.defaultValue=""+l)}function Wc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ao(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Eu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,Du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,l,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,l,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function pi(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ny=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){ny.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ti[n]=ti[e]})});function Vu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ti.hasOwnProperty(e)&&ti[e]?(""+n).trim():n+"px"}function Tu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var l=t.indexOf("--")===0,i=Vu(t,n[t],l);t==="float"&&(t="cssFloat"),l?e.setProperty(t,i):e[t]=i}}var ty=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Io(e,n){if(n){if(ty[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(D(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(D(61))}if(n.style!=null&&typeof n.style!="object")throw Error(D(62))}}function Eo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Do=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vo=null,dl=null,ul=null;function $c(e){if(e=Gi(e)){if(typeof Vo!="function")throw Error(D(280));var n=e.stateNode;n&&(n=fa(n),Vo(e.stateNode,e.type,n))}}function Mu(e){dl?ul?ul.push(e):ul=[e]:dl=e}function Gu(){if(dl){var e=dl,n=ul;if(ul=dl=null,$c(e),n)for(e=0;e<n.length;e++)$c(n[e])}}function Bu(e,n){return e(n)}function Ou(){}var Ua=!1;function Fu(e,n,t){if(Ua)return e(n,t);Ua=!0;try{return Bu(e,n,t)}finally{Ua=!1,(dl!==null||ul!==null)&&(Ou(),Gu())}}function yi(e,n){var t=e.stateNode;if(t===null)return null;var l=fa(t);if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(D(231,n,typeof t));return t}var To=!1;if(zn)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){To=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{To=!1}function ly(e,n,t,l,i,r,a,o,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var li=!1,Vr=null,Tr=!1,Mo=null,iy={onError:function(e){li=!0,Vr=e}};function ry(e,n,t,l,i,r,a,o,s){li=!1,Vr=null,ly.apply(iy,arguments)}function ay(e,n,t,l,i,r,a,o,s){if(ry.apply(this,arguments),li){if(li){var c=Vr;li=!1,Vr=null}else throw Error(D(198));Tr||(Tr=!0,Mo=c)}}function Ft(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ru(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Hc(e){if(Ft(e)!==e)throw Error(D(188))}function oy(e){var n=e.alternate;if(!n){if(n=Ft(e),n===null)throw Error(D(188));return n!==e?null:e}for(var t=e,l=n;;){var i=t.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===t)return Hc(i),e;if(r===l)return Hc(i),n;r=r.sibling}throw Error(D(188))}if(t.return!==l.return)t=i,l=r;else{for(var a=!1,o=i.child;o;){if(o===t){a=!0,t=i,l=r;break}if(o===l){a=!0,l=i,t=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===t){a=!0,t=r,l=i;break}if(o===l){a=!0,l=r,t=i;break}o=o.sibling}if(!a)throw Error(D(189))}}if(t.alternate!==l)throw Error(D(190))}if(t.tag!==3)throw Error(D(188));return t.stateNode.current===t?e:n}function ju(e){return e=oy(e),e!==null?Uu(e):null}function Uu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Uu(e);if(n!==null)return n;e=e.sibling}return null}var Wu=tn.unstable_scheduleCallback,qc=tn.unstable_cancelCallback,sy=tn.unstable_shouldYield,cy=tn.unstable_requestPaint,xe=tn.unstable_now,dy=tn.unstable_getCurrentPriorityLevel,Vs=tn.unstable_ImmediatePriority,$u=tn.unstable_UserBlockingPriority,Mr=tn.unstable_NormalPriority,uy=tn.unstable_LowPriority,Hu=tn.unstable_IdlePriority,ca=null,Mn=null;function my(e){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(ca,e,void 0,(e.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:yy,fy=Math.log,py=Math.LN2;function yy(e){return e>>>=0,e===0?32:31-(fy(e)/py|0)|0}var Hi=64,qi=4194304;function Jl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,n){var t=e.pendingLanes;if(t===0)return 0;var l=0,i=e.suspendedLanes,r=e.pingedLanes,a=t&268435455;if(a!==0){var o=a&~i;o!==0?l=Jl(o):(r&=a,r!==0&&(l=Jl(r)))}else a=t&~i,a!==0?l=Jl(a):r!==0&&(l=Jl(r));if(l===0)return 0;if(n!==0&&n!==l&&!(n&i)&&(i=l&-l,r=n&-n,i>=r||i===16&&(r&4194240)!==0))return n;if(l&4&&(l|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)t=31-kn(n),i=1<<t,l|=e[t],n&=~i;return l}function gy(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function by(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var a=31-kn(r),o=1<<a,s=i[a];s===-1?(!(o&t)||o&l)&&(i[a]=gy(o,n)):s<=n&&(e.expiredLanes|=o),r&=~o}}function Go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qu(){var e=Hi;return Hi<<=1,!(Hi&4194240)&&(Hi=64),e}function Wa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ti(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-kn(n),e[n]=t}function hy(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-kn(t),r=1<<i;n[i]=0,l[i]=-1,e[i]=-1,t&=~r}}function Ts(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-kn(t),i=1<<l;i&n|e[l]&n&&(e[l]|=n),t&=~i}}var le=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ku,Ms,Qu,Yu,Xu,Bo=!1,zi=[],at=null,ot=null,st=null,gi=new Map,bi=new Map,tt=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zc(e,n){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":gi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(n.pointerId)}}function jl(e,n,t,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},n!==null&&(n=Gi(n),n!==null&&Ms(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function xy(e,n,t,l,i){switch(n){case"focusin":return at=jl(at,e,n,t,l,i),!0;case"dragenter":return ot=jl(ot,e,n,t,l,i),!0;case"mouseover":return st=jl(st,e,n,t,l,i),!0;case"pointerover":var r=i.pointerId;return gi.set(r,jl(gi.get(r)||null,e,n,t,l,i)),!0;case"gotpointercapture":return r=i.pointerId,bi.set(r,jl(bi.get(r)||null,e,n,t,l,i)),!0}return!1}function Ju(e){var n=St(e.target);if(n!==null){var t=Ft(n);if(t!==null){if(n=t.tag,n===13){if(n=Ru(t),n!==null){e.blockedOn=n,Xu(e.priority,function(){Qu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Oo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Do=l,t.target.dispatchEvent(l),Do=null}else return n=Gi(t),n!==null&&Ms(n),e.blockedOn=t,!1;n.shift()}return!0}function Kc(e,n,t){br(e)&&t.delete(n)}function vy(){Bo=!1,at!==null&&br(at)&&(at=null),ot!==null&&br(ot)&&(ot=null),st!==null&&br(st)&&(st=null),gi.forEach(Kc),bi.forEach(Kc)}function Ul(e,n){e.blockedOn===n&&(e.blockedOn=null,Bo||(Bo=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,vy)))}function hi(e){function n(i){return Ul(i,e)}if(0<zi.length){Ul(zi[0],e);for(var t=1;t<zi.length;t++){var l=zi[t];l.blockedOn===e&&(l.blockedOn=null)}}for(at!==null&&Ul(at,e),ot!==null&&Ul(ot,e),st!==null&&Ul(st,e),gi.forEach(n),bi.forEach(n),t=0;t<tt.length;t++)l=tt[t],l.blockedOn===e&&(l.blockedOn=null);for(;0<tt.length&&(t=tt[0],t.blockedOn===null);)Ju(t),t.blockedOn===null&&tt.shift()}var ml=Xn.ReactCurrentBatchConfig,Br=!0;function Cy(e,n,t,l){var i=le,r=ml.transition;ml.transition=null;try{le=1,Gs(e,n,t,l)}finally{le=i,ml.transition=r}}function wy(e,n,t,l){var i=le,r=ml.transition;ml.transition=null;try{le=4,Gs(e,n,t,l)}finally{le=i,ml.transition=r}}function Gs(e,n,t,l){if(Br){var i=Oo(e,n,t,l);if(i===null)Za(e,n,l,Or,t),zc(e,l);else if(xy(i,e,n,t,l))l.stopPropagation();else if(zc(e,l),n&4&&-1<_y.indexOf(e)){for(;i!==null;){var r=Gi(i);if(r!==null&&Ku(r),r=Oo(e,n,t,l),r===null&&Za(e,n,l,Or,t),r===i)break;i=r}i!==null&&l.stopPropagation()}else Za(e,n,l,null,t)}}var Or=null;function Oo(e,n,t,l){if(Or=null,e=Ds(l),e=St(e),e!==null)if(n=Ft(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ru(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Or=e,null}function Zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dy()){case Vs:return 1;case $u:return 4;case Mr:case uy:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var it=null,Bs=null,hr=null;function em(){if(hr)return hr;var e,n=Bs,t=n.length,l,i="value"in it?it.value:it.textContent,r=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(l=1;l<=a&&n[t-l]===i[r-l];l++);return hr=i.slice(e,1<l?1-l:void 0)}function _r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function Qc(){return!1}function rn(e){function n(t,l,i,r,a){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ki:Qc,this.isPropagationStopped=Qc,this}return be(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),n}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=rn(Nl),Mi=be({},Nl,{view:0,detail:0}),Sy=rn(Mi),$a,Ha,Wl,da=be({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wl&&(Wl&&e.type==="mousemove"?($a=e.screenX-Wl.screenX,Ha=e.screenY-Wl.screenY):Ha=$a=0,Wl=e),$a)},movementY:function(e){return"movementY"in e?e.movementY:Ha}}),Yc=rn(da),Ly=be({},da,{dataTransfer:0}),ky=rn(Ly),Py=be({},Mi,{relatedTarget:0}),qa=rn(Py),Ny=be({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),Ay=rn(Ny),Iy=be({},Nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ey=rn(Iy),Dy=be({},Nl,{data:0}),Xc=rn(Dy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=My[e])?!!n[e]:!1}function Fs(){return Gy}var By=be({},Mi,{key:function(e){if(e.key){var n=Vy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ty[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Oy=rn(By),Fy=be({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jc=rn(Fy),Ry=be({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),jy=rn(Ry),Uy=be({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=rn(Uy),$y=be({},da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hy=rn($y),qy=[9,13,27,32],Rs=zn&&"CompositionEvent"in window,ii=null;zn&&"documentMode"in document&&(ii=document.documentMode);var zy=zn&&"TextEvent"in window&&!ii,nm=zn&&(!Rs||ii&&8<ii&&11>=ii),Zc=" ",ed=!1;function tm(e,n){switch(e){case"keyup":return qy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Ky(e,n){switch(e){case"compositionend":return lm(n);case"keypress":return n.which!==32?null:(ed=!0,Zc);case"textInput":return e=n.data,e===Zc&&ed?null:e;default:return null}}function Qy(e,n){if(Qt)return e==="compositionend"||!Rs&&tm(e,n)?(e=em(),hr=Bs=it=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return nm&&n.locale!=="ko"?null:n.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Yy[e.type]:n==="textarea"}function im(e,n,t,l){Mu(l),n=Fr(n,"onChange"),0<n.length&&(t=new Os("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var ri=null,_i=null;function Xy(e){ym(e,0)}function ua(e){var n=Jt(e);if(Nu(n))return e}function Jy(e,n){if(e==="change")return n}var rm=!1;if(zn){var za;if(zn){var Ka="oninput"in document;if(!Ka){var td=document.createElement("div");td.setAttribute("oninput","return;"),Ka=typeof td.oninput=="function"}za=Ka}else za=!1;rm=za&&(!document.documentMode||9<document.documentMode)}function ld(){ri&&(ri.detachEvent("onpropertychange",am),_i=ri=null)}function am(e){if(e.propertyName==="value"&&ua(_i)){var n=[];im(n,_i,e,Ds(e)),Fu(Xy,n)}}function Zy(e,n,t){e==="focusin"?(ld(),ri=n,_i=t,ri.attachEvent("onpropertychange",am)):e==="focusout"&&ld()}function eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ua(_i)}function ng(e,n){if(e==="click")return ua(n)}function tg(e,n){if(e==="input"||e==="change")return ua(n)}function lg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Nn=typeof Object.is=="function"?Object.is:lg;function xi(e,n){if(Nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!xo.call(n,i)||!Nn(e[i],n[i]))return!1}return!0}function id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,n){var t=id(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=id(t)}}function om(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?om(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function sm(){for(var e=window,n=Dr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Dr(e.document)}return n}function js(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ig(e){var n=sm(),t=e.focusedElem,l=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&om(t.ownerDocument.documentElement,t)){if(l!==null&&js(t)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,r=Math.min(l.start,i);l=l.end===void 0?r:Math.min(l.end,i),!e.extend&&r>l&&(i=l,l=r,r=i),i=rd(t,r);var a=rd(t,l);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),r>l?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rg=zn&&"documentMode"in document&&11>=document.documentMode,Yt=null,Fo=null,ai=null,Ro=!1;function ad(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ro||Yt==null||Yt!==Dr(l)||(l=Yt,"selectionStart"in l&&js(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ai&&xi(ai,l)||(ai=l,l=Fr(Fo,"onSelect"),0<l.length&&(n=new Os("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=Yt)))}function Qi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xt={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},Qa={},cm={};zn&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function ma(e){if(Qa[e])return Qa[e];if(!Xt[e])return e;var n=Xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in cm)return Qa[e]=n[t];return e}var dm=ma("animationend"),um=ma("animationiteration"),mm=ma("animationstart"),fm=ma("transitionend"),pm=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,n){pm.set(e,n),Ot(n,[e])}for(var Ya=0;Ya<od.length;Ya++){var Xa=od[Ya],ag=Xa.toLowerCase(),og=Xa[0].toUpperCase()+Xa.slice(1);ht(ag,"on"+og)}ht(dm,"onAnimationEnd");ht(um,"onAnimationIteration");ht(mm,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(fm,"onTransitionEnd");bl("onMouseEnter",["mouseout","mouseover"]);bl("onMouseLeave",["mouseout","mouseover"]);bl("onPointerEnter",["pointerout","pointerover"]);bl("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zl));function sd(e,n,t){var l=e.type||"unknown-event";e.currentTarget=t,ay(l,n,void 0,e),e.currentTarget=null}function ym(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],i=l.event;l=l.listeners;e:{var r=void 0;if(n)for(var a=l.length-1;0<=a;a--){var o=l[a],s=o.instance,c=o.currentTarget;if(o=o.listener,s!==r&&i.isPropagationStopped())break e;sd(i,o,c),r=s}else for(a=0;a<l.length;a++){if(o=l[a],s=o.instance,c=o.currentTarget,o=o.listener,s!==r&&i.isPropagationStopped())break e;sd(i,o,c),r=s}}}if(Tr)throw e=Mo,Tr=!1,Mo=null,e}function ce(e,n){var t=n[Ho];t===void 0&&(t=n[Ho]=new Set);var l=e+"__bubble";t.has(l)||(gm(n,e,2,!1),t.add(l))}function Ja(e,n,t){var l=0;n&&(l|=4),gm(t,e,l,n)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function vi(e){if(!e[Yi]){e[Yi]=!0,wu.forEach(function(t){t!=="selectionchange"&&(sg.has(t)||Ja(t,!1,e),Ja(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yi]||(n[Yi]=!0,Ja("selectionchange",!1,n))}}function gm(e,n,t,l){switch(Zu(n)){case 1:var i=Cy;break;case 4:i=wy;break;default:i=Gs}t=i.bind(null,n,t,e),i=void 0,!To||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Za(e,n,t,l,i){var r=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var a=l.tag;if(a===3||a===4){var o=l.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=l.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;o!==null;){if(a=St(o),a===null)return;if(s=a.tag,s===5||s===6){l=r=a;continue e}o=o.parentNode}}l=l.return}Fu(function(){var c=r,u=Ds(t),m=[];e:{var y=pm.get(e);if(y!==void 0){var f=Os,x=e;switch(e){case"keypress":if(_r(t)===0)break e;case"keydown":case"keyup":f=Oy;break;case"focusin":x="focus",f=qa;break;case"focusout":x="blur",f=qa;break;case"beforeblur":case"afterblur":f=qa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=jy;break;case dm:case um:case mm:f=Ay;break;case fm:f=Wy;break;case"scroll":f=Sy;break;case"wheel":f=Hy;break;case"copy":case"cut":case"paste":f=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Jc}var b=(n&4)!==0,_=!b&&e==="scroll",g=b?y!==null?y+"Capture":null:y;b=[];for(var p=c,h;p!==null;){h=p;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,g!==null&&(C=yi(p,g),C!=null&&b.push(Ci(p,C,h)))),_)break;p=p.return}0<b.length&&(y=new f(y,x,null,t,u),m.push({event:y,listeners:b}))}}if(!(n&7)){e:{if(y=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",y&&t!==Do&&(x=t.relatedTarget||t.fromElement)&&(St(x)||x[Kn]))break e;if((f||y)&&(y=u.window===u?u:(y=u.ownerDocument)?y.defaultView||y.parentWindow:window,f?(x=t.relatedTarget||t.toElement,f=c,x=x?St(x):null,x!==null&&(_=Ft(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(f=null,x=c),f!==x)){if(b=Yc,C="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Jc,C="onPointerLeave",g="onPointerEnter",p="pointer"),_=f==null?y:Jt(f),h=x==null?y:Jt(x),y=new b(C,p+"leave",f,t,u),y.target=_,y.relatedTarget=h,C=null,St(u)===c&&(b=new b(g,p+"enter",x,t,u),b.target=h,b.relatedTarget=_,C=b),_=C,f&&x)n:{for(b=f,g=x,p=0,h=b;h;h=Ut(h))p++;for(h=0,C=g;C;C=Ut(C))h++;for(;0<p-h;)b=Ut(b),p--;for(;0<h-p;)g=Ut(g),h--;for(;p--;){if(b===g||g!==null&&b===g.alternate)break n;b=Ut(b),g=Ut(g)}b=null}else b=null;f!==null&&cd(m,y,f,b,!1),x!==null&&_!==null&&cd(m,_,x,b,!0)}}e:{if(y=c?Jt(c):window,f=y.nodeName&&y.nodeName.toLowerCase(),f==="select"||f==="input"&&y.type==="file")var w=Jy;else if(nd(y))if(rm)w=tg;else{w=eg;var L=Zy}else(f=y.nodeName)&&f.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(w=ng);if(w&&(w=w(e,c))){im(m,w,t,u);break e}L&&L(e,y,c),e==="focusout"&&(L=y._wrapperState)&&L.controlled&&y.type==="number"&&Po(y,"number",y.value)}switch(L=c?Jt(c):window,e){case"focusin":(nd(L)||L.contentEditable==="true")&&(Yt=L,Fo=c,ai=null);break;case"focusout":ai=Fo=Yt=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,ad(m,t,u);break;case"selectionchange":if(rg)break;case"keydown":case"keyup":ad(m,t,u)}var k;if(Rs)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Qt?tm(e,t)&&(v="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(v="onCompositionStart");v&&(nm&&t.locale!=="ko"&&(Qt||v!=="onCompositionStart"?v==="onCompositionEnd"&&Qt&&(k=em()):(it=u,Bs="value"in it?it.value:it.textContent,Qt=!0)),L=Fr(c,v),0<L.length&&(v=new Xc(v,e,null,t,u),m.push({event:v,listeners:L}),k?v.data=k:(k=lm(t),k!==null&&(v.data=k)))),(k=zy?Ky(e,t):Qy(e,t))&&(c=Fr(c,"onBeforeInput"),0<c.length&&(u=new Xc("onBeforeInput","beforeinput",null,t,u),m.push({event:u,listeners:c}),u.data=k))}ym(m,n)})}function Ci(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fr(e,n){for(var t=n+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=yi(e,t),r!=null&&l.unshift(Ci(e,r,i)),r=yi(e,n),r!=null&&l.push(Ci(e,r,i))),e=e.return}return l}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cd(e,n,t,l,i){for(var r=n._reactName,a=[];t!==null&&t!==l;){var o=t,s=o.alternate,c=o.stateNode;if(s!==null&&s===l)break;o.tag===5&&c!==null&&(o=c,i?(s=yi(t,r),s!=null&&a.unshift(Ci(t,s,o))):i||(s=yi(t,r),s!=null&&a.push(Ci(t,s,o)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var cg=/\r\n?/g,dg=/\u0000|\uFFFD/g;function dd(e){return(typeof e=="string"?e:""+e).replace(cg,`
`).replace(dg,"")}function Xi(e,n,t){if(n=dd(n),dd(e)!==n&&t)throw Error(D(425))}function Rr(){}var jo=null,Uo=null;function Wo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $o=typeof setTimeout=="function"?setTimeout:void 0,ug=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,mg=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(e){return ud.resolve(null).then(e).catch(fg)}:$o;function fg(e){setTimeout(function(){throw e})}function eo(e,n){var t=n,l=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(l===0){e.removeChild(i),hi(n);return}l--}else t!=="$"&&t!=="$?"&&t!=="$!"||l++;t=i}while(t);hi(n)}function ct(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function md(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Al=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Al,wi="__reactProps$"+Al,Kn="__reactContainer$"+Al,Ho="__reactEvents$"+Al,pg="__reactListeners$"+Al,yg="__reactHandles$"+Al;function St(e){var n=e[Tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Kn]||t[Tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=md(e);e!==null;){if(t=e[Tn])return t;e=md(e)}return n}e=t,t=e.parentNode}return null}function Gi(e){return e=e[Tn]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function fa(e){return e[wi]||null}var qo=[],Zt=-1;function _t(e){return{current:e}}function de(e){0>Zt||(e.current=qo[Zt],qo[Zt]=null,Zt--)}function ae(e,n){Zt++,qo[Zt]=e.current,e.current=n}var gt={},Ge=_t(gt),Ke=_t(!1),Dt=gt;function hl(e,n){var t=e.type.contextTypes;if(!t)return gt;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in t)i[r]=n[r];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function jr(){de(Ke),de(Ge)}function fd(e,n,t){if(Ge.current!==gt)throw Error(D(168));ae(Ge,n),ae(Ke,t)}function bm(e,n,t){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return t;l=l.getChildContext();for(var i in l)if(!(i in n))throw Error(D(108,Zp(e)||"Unknown",i));return be({},t,l)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Dt=Ge.current,ae(Ge,e),ae(Ke,Ke.current),!0}function pd(e,n,t){var l=e.stateNode;if(!l)throw Error(D(169));t?(e=bm(e,n,Dt),l.__reactInternalMemoizedMergedChildContext=e,de(Ke),de(Ge),ae(Ge,e)):de(Ke),ae(Ke,t)}var jn=null,pa=!1,no=!1;function hm(e){jn===null?jn=[e]:jn.push(e)}function gg(e){pa=!0,hm(e)}function xt(){if(!no&&jn!==null){no=!0;var e=0,n=le;try{var t=jn;for(le=1;e<t.length;e++){var l=t[e];do l=l(!0);while(l!==null)}jn=null,pa=!1}catch(i){throw jn!==null&&(jn=jn.slice(e+1)),Wu(Vs,xt),i}finally{le=n,no=!1}}return null}var el=[],nl=0,Wr=null,$r=0,sn=[],cn=0,Vt=null,Un=1,Wn="";function Ct(e,n){el[nl++]=$r,el[nl++]=Wr,Wr=e,$r=n}function _m(e,n,t){sn[cn++]=Un,sn[cn++]=Wn,sn[cn++]=Vt,Vt=e;var l=Un;e=Wn;var i=32-kn(l)-1;l&=~(1<<i),t+=1;var r=32-kn(n)+i;if(30<r){var a=i-i%5;r=(l&(1<<a)-1).toString(32),l>>=a,i-=a,Un=1<<32-kn(n)+i|t<<i|l,Wn=r+e}else Un=1<<r|t<<i|l,Wn=e}function Us(e){e.return!==null&&(Ct(e,1),_m(e,1,0))}function Ws(e){for(;e===Wr;)Wr=el[--nl],el[nl]=null,$r=el[--nl],el[nl]=null;for(;e===Vt;)Vt=sn[--cn],sn[cn]=null,Wn=sn[--cn],sn[cn]=null,Un=sn[--cn],sn[cn]=null}var nn=null,en=null,ue=!1,Ln=null;function xm(e,n){var t=dn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function yd(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,nn=e,en=ct(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,nn=e,en=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Vt!==null?{id:Un,overflow:Wn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=dn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,nn=e,en=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ko(e){if(ue){var n=en;if(n){var t=n;if(!yd(e,n)){if(zo(e))throw Error(D(418));n=ct(t.nextSibling);var l=nn;n&&yd(e,n)?xm(l,t):(e.flags=e.flags&-4097|2,ue=!1,nn=e)}}else{if(zo(e))throw Error(D(418));e.flags=e.flags&-4097|2,ue=!1,nn=e}}}function gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nn=e}function Ji(e){if(e!==nn)return!1;if(!ue)return gd(e),ue=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wo(e.type,e.memoizedProps)),n&&(n=en)){if(zo(e))throw vm(),Error(D(418));for(;n;)xm(e,n),n=ct(n.nextSibling)}if(gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){en=ct(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}en=null}}else en=nn?ct(e.stateNode.nextSibling):null;return!0}function vm(){for(var e=en;e;)e=ct(e.nextSibling)}function _l(){en=nn=null,ue=!1}function $s(e){Ln===null?Ln=[e]:Ln.push(e)}var bg=Xn.ReactCurrentBatchConfig;function $l(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(D(309));var l=t.stateNode}if(!l)throw Error(D(147,e));var i=l,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(a){var o=i.refs;a===null?delete o[r]:o[r]=a},n._stringRef=r,n)}if(typeof e!="string")throw Error(D(284));if(!t._owner)throw Error(D(290,e))}return e}function Zi(e,n){throw e=Object.prototype.toString.call(n),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function bd(e){var n=e._init;return n(e._payload)}function Cm(e){function n(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function l(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=ft(g,p),g.index=0,g.sibling=null,g}function r(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,p,h,C){return p===null||p.tag!==6?(p=so(h,g.mode,C),p.return=g,p):(p=i(p,h),p.return=g,p)}function s(g,p,h,C){var w=h.type;return w===Kt?u(g,p,h.props.children,C,h.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Zn&&bd(w)===p.type)?(C=i(p,h.props),C.ref=$l(g,p,h),C.return=g,C):(C=kr(h.type,h.key,h.props,null,g.mode,C),C.ref=$l(g,p,h),C.return=g,C)}function c(g,p,h,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=co(h,g.mode,C),p.return=g,p):(p=i(p,h.children||[]),p.return=g,p)}function u(g,p,h,C,w){return p===null||p.tag!==7?(p=Et(h,g.mode,C,w),p.return=g,p):(p=i(p,h),p.return=g,p)}function m(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=so(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ui:return h=kr(p.type,p.key,p.props,null,g.mode,h),h.ref=$l(g,null,p),h.return=g,h;case zt:return p=co(p,g.mode,h),p.return=g,p;case Zn:var C=p._init;return m(g,C(p._payload),h)}if(Xl(p)||Fl(p))return p=Et(p,g.mode,h,null),p.return=g,p;Zi(g,p)}return null}function y(g,p,h,C){var w=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:o(g,p,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:return h.key===w?s(g,p,h,C):null;case zt:return h.key===w?c(g,p,h,C):null;case Zn:return w=h._init,y(g,p,w(h._payload),C)}if(Xl(h)||Fl(h))return w!==null?null:u(g,p,h,C,null);Zi(g,h)}return null}function f(g,p,h,C,w){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(h)||null,o(p,g,""+C,w);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ui:return g=g.get(C.key===null?h:C.key)||null,s(p,g,C,w);case zt:return g=g.get(C.key===null?h:C.key)||null,c(p,g,C,w);case Zn:var L=C._init;return f(g,p,h,L(C._payload),w)}if(Xl(C)||Fl(C))return g=g.get(h)||null,u(p,g,C,w,null);Zi(p,C)}return null}function x(g,p,h,C){for(var w=null,L=null,k=p,v=p=0,V=null;k!==null&&v<h.length;v++){k.index>v?(V=k,k=null):V=k.sibling;var E=y(g,k,h[v],C);if(E===null){k===null&&(k=V);break}e&&k&&E.alternate===null&&n(g,k),p=r(E,p,v),L===null?w=E:L.sibling=E,L=E,k=V}if(v===h.length)return t(g,k),ue&&Ct(g,v),w;if(k===null){for(;v<h.length;v++)k=m(g,h[v],C),k!==null&&(p=r(k,p,v),L===null?w=k:L.sibling=k,L=k);return ue&&Ct(g,v),w}for(k=l(g,k);v<h.length;v++)V=f(k,g,v,h[v],C),V!==null&&(e&&V.alternate!==null&&k.delete(V.key===null?v:V.key),p=r(V,p,v),L===null?w=V:L.sibling=V,L=V);return e&&k.forEach(function(q){return n(g,q)}),ue&&Ct(g,v),w}function b(g,p,h,C){var w=Fl(h);if(typeof w!="function")throw Error(D(150));if(h=w.call(h),h==null)throw Error(D(151));for(var L=w=null,k=p,v=p=0,V=null,E=h.next();k!==null&&!E.done;v++,E=h.next()){k.index>v?(V=k,k=null):V=k.sibling;var q=y(g,k,E.value,C);if(q===null){k===null&&(k=V);break}e&&k&&q.alternate===null&&n(g,k),p=r(q,p,v),L===null?w=q:L.sibling=q,L=q,k=V}if(E.done)return t(g,k),ue&&Ct(g,v),w;if(k===null){for(;!E.done;v++,E=h.next())E=m(g,E.value,C),E!==null&&(p=r(E,p,v),L===null?w=E:L.sibling=E,L=E);return ue&&Ct(g,v),w}for(k=l(g,k);!E.done;v++,E=h.next())E=f(k,g,v,E.value,C),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?v:E.key),p=r(E,p,v),L===null?w=E:L.sibling=E,L=E);return e&&k.forEach(function(U){return n(g,U)}),ue&&Ct(g,v),w}function _(g,p,h,C){if(typeof h=="object"&&h!==null&&h.type===Kt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:e:{for(var w=h.key,L=p;L!==null;){if(L.key===w){if(w=h.type,w===Kt){if(L.tag===7){t(g,L.sibling),p=i(L,h.props.children),p.return=g,g=p;break e}}else if(L.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Zn&&bd(w)===L.type){t(g,L.sibling),p=i(L,h.props),p.ref=$l(g,L,h),p.return=g,g=p;break e}t(g,L);break}else n(g,L);L=L.sibling}h.type===Kt?(p=Et(h.props.children,g.mode,C,h.key),p.return=g,g=p):(C=kr(h.type,h.key,h.props,null,g.mode,C),C.ref=$l(g,p,h),C.return=g,g=C)}return a(g);case zt:e:{for(L=h.key;p!==null;){if(p.key===L)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){t(g,p.sibling),p=i(p,h.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=co(h,g.mode,C),p.return=g,g=p}return a(g);case Zn:return L=h._init,_(g,p,L(h._payload),C)}if(Xl(h))return x(g,p,h,C);if(Fl(h))return b(g,p,h,C);Zi(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(t(g,p.sibling),p=i(p,h),p.return=g,g=p):(t(g,p),p=so(h,g.mode,C),p.return=g,g=p),a(g)):t(g,p)}return _}var xl=Cm(!0),wm=Cm(!1),Hr=_t(null),qr=null,tl=null,Hs=null;function qs(){Hs=tl=qr=null}function zs(e){var n=Hr.current;de(Hr),e._currentValue=n}function Qo(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function fl(e,n){qr=e,Hs=tl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ze=!0),e.firstContext=null)}function fn(e){var n=e._currentValue;if(Hs!==e)if(e={context:e,memoizedValue:n,next:null},tl===null){if(qr===null)throw Error(D(308));tl=e,qr.dependencies={lanes:0,firstContext:e}}else tl=tl.next=e;return n}var Lt=null;function Ks(e){Lt===null?Lt=[e]:Lt.push(e)}function Sm(e,n,t,l){var i=n.interleaved;return i===null?(t.next=t,Ks(n)):(t.next=i.next,i.next=t),n.interleaved=t,Qn(e,l)}function Qn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var et=!1;function Qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lm(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dt(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,ne&2){var i=l.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n,Qn(e,t)}return i=l.interleaved,i===null?(n.next=n,Ks(l)):(n.next=i.next,i.next=n),l.interleaved=n,Qn(e,t)}function xr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Ts(e,t)}}function hd(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?i=r=a:r=r.next=a,t=t.next}while(t!==null);r===null?i=r=n:r=r.next=n}else i=r=n;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,effects:l.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function zr(e,n,t,l){var i=e.updateQueue;et=!1;var r=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,c=s.next;s.next=null,a===null?r=c:a.next=c,a=s;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=s))}if(r!==null){var m=i.baseState;a=0,u=c=s=null,o=r;do{var y=o.lane,f=o.eventTime;if((l&y)===y){u!==null&&(u=u.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,b=o;switch(y=n,f=t,b.tag){case 1:if(x=b.payload,typeof x=="function"){m=x.call(f,m,y);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,y=typeof x=="function"?x.call(f,m,y):x,y==null)break e;m=be({},m,y);break e;case 2:et=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[o]:y.push(o))}else f={eventTime:f,lane:y,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=f,s=m):u=u.next=f,a|=y;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;y=o,o=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(u===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else r===null&&(i.shared.lanes=0);Mt|=a,e.lanes=a,e.memoizedState=m}}function _d(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],i=l.callback;if(i!==null){if(l.callback=null,l=t,typeof i!="function")throw Error(D(191,i));i.call(l)}}}var Bi={},Gn=_t(Bi),Si=_t(Bi),Li=_t(Bi);function kt(e){if(e===Bi)throw Error(D(174));return e}function Ys(e,n){switch(ae(Li,n),ae(Si,e),ae(Gn,Bi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ao(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ao(n,e)}de(Gn),ae(Gn,n)}function vl(){de(Gn),de(Si),de(Li)}function km(e){kt(Li.current);var n=kt(Gn.current),t=Ao(n,e.type);n!==t&&(ae(Si,e),ae(Gn,t))}function Xs(e){Si.current===e&&(de(Gn),de(Si))}var fe=_t(0);function Kr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var to=[];function Js(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var vr=Xn.ReactCurrentDispatcher,lo=Xn.ReactCurrentBatchConfig,Tt=0,ye=null,Ce=null,Se=null,Qr=!1,oi=!1,ki=0,hg=0;function De(){throw Error(D(321))}function Zs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Nn(e[t],n[t]))return!1;return!0}function ec(e,n,t,l,i,r){if(Tt=r,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vr.current=e===null||e.memoizedState===null?Cg:wg,e=t(l,i),oi){r=0;do{if(oi=!1,ki=0,25<=r)throw Error(D(301));r+=1,Se=Ce=null,n.updateQueue=null,vr.current=Sg,e=t(l,i)}while(oi)}if(vr.current=Yr,n=Ce!==null&&Ce.next!==null,Tt=0,Se=Ce=ye=null,Qr=!1,n)throw Error(D(300));return e}function nc(){var e=ki!==0;return ki=0,e}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ye.memoizedState=Se=e:Se=Se.next=e,Se}function pn(){if(Ce===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=Se===null?ye.memoizedState:Se.next;if(n!==null)Se=n,Ce=e;else{if(e===null)throw Error(D(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Se===null?ye.memoizedState=Se=e:Se=Se.next=e}return Se}function Pi(e,n){return typeof n=="function"?n(e):n}function io(e){var n=pn(),t=n.queue;if(t===null)throw Error(D(311));t.lastRenderedReducer=e;var l=Ce,i=l.baseQueue,r=t.pending;if(r!==null){if(i!==null){var a=i.next;i.next=r.next,r.next=a}l.baseQueue=i=r,t.pending=null}if(i!==null){r=i.next,l=l.baseState;var o=a=null,s=null,c=r;do{var u=c.lane;if((Tt&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),l=c.hasEagerState?c.eagerState:e(l,c.action);else{var m={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(o=s=m,a=l):s=s.next=m,ye.lanes|=u,Mt|=u}c=c.next}while(c!==null&&c!==r);s===null?a=l:s.next=o,Nn(l,n.memoizedState)||(ze=!0),n.memoizedState=l,n.baseState=a,n.baseQueue=s,t.lastRenderedState=l}if(e=t.interleaved,e!==null){i=e;do r=i.lane,ye.lanes|=r,Mt|=r,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ro(e){var n=pn(),t=n.queue;if(t===null)throw Error(D(311));t.lastRenderedReducer=e;var l=t.dispatch,i=t.pending,r=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do r=e(r,a.action),a=a.next;while(a!==i);Nn(r,n.memoizedState)||(ze=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,l]}function Pm(){}function Nm(e,n){var t=ye,l=pn(),i=n(),r=!Nn(l.memoizedState,i);if(r&&(l.memoizedState=i,ze=!0),l=l.queue,tc(Em.bind(null,t,l,e),[e]),l.getSnapshot!==n||r||Se!==null&&Se.memoizedState.tag&1){if(t.flags|=2048,Ni(9,Im.bind(null,t,l,i,n),void 0,null),Le===null)throw Error(D(349));Tt&30||Am(t,n,i)}return i}function Am(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ye.updateQueue,n===null?(n={lastEffect:null,stores:null},ye.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Im(e,n,t,l){n.value=t,n.getSnapshot=l,Dm(n)&&Vm(e)}function Em(e,n,t){return t(function(){Dm(n)&&Vm(e)})}function Dm(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Nn(e,t)}catch{return!0}}function Vm(e){var n=Qn(e,1);n!==null&&Pn(n,e,1,-1)}function xd(e){var n=Vn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},n.queue=e,e=e.dispatch=vg.bind(null,ye,e),[n.memoizedState,e]}function Ni(e,n,t,l){return e={tag:e,create:n,destroy:t,deps:l,next:null},n=ye.updateQueue,n===null?(n={lastEffect:null,stores:null},ye.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e)),e}function Tm(){return pn().memoizedState}function Cr(e,n,t,l){var i=Vn();ye.flags|=e,i.memoizedState=Ni(1|n,t,void 0,l===void 0?null:l)}function ya(e,n,t,l){var i=pn();l=l===void 0?null:l;var r=void 0;if(Ce!==null){var a=Ce.memoizedState;if(r=a.destroy,l!==null&&Zs(l,a.deps)){i.memoizedState=Ni(n,t,r,l);return}}ye.flags|=e,i.memoizedState=Ni(1|n,t,r,l)}function vd(e,n){return Cr(8390656,8,e,n)}function tc(e,n){return ya(2048,8,e,n)}function Mm(e,n){return ya(4,2,e,n)}function Gm(e,n){return ya(4,4,e,n)}function Bm(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Om(e,n,t){return t=t!=null?t.concat([e]):null,ya(4,4,Bm.bind(null,n,e),t)}function lc(){}function Fm(e,n){var t=pn();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&Zs(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function Rm(e,n){var t=pn();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&Zs(n,l[1])?l[0]:(e=e(),t.memoizedState=[e,n],e)}function jm(e,n,t){return Tt&21?(Nn(t,n)||(t=qu(),ye.lanes|=t,Mt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=t)}function _g(e,n){var t=le;le=t!==0&&4>t?t:4,e(!0);var l=lo.transition;lo.transition={};try{e(!1),n()}finally{le=t,lo.transition=l}}function Um(){return pn().memoizedState}function xg(e,n,t){var l=mt(e);if(t={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null},Wm(e))$m(n,t);else if(t=Sm(e,n,t,l),t!==null){var i=Fe();Pn(t,e,l,i),Hm(t,n,l)}}function vg(e,n,t){var l=mt(e),i={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wm(e))$m(n,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var a=n.lastRenderedState,o=r(a,t);if(i.hasEagerState=!0,i.eagerState=o,Nn(o,a)){var s=n.interleaved;s===null?(i.next=i,Ks(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Sm(e,n,i,l),t!==null&&(i=Fe(),Pn(t,e,l,i),Hm(t,n,l))}}function Wm(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function $m(e,n){oi=Qr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hm(e,n,t){if(t&4194240){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Ts(e,t)}}var Yr={readContext:fn,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Cg={readContext:fn,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:vd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Cr(4194308,4,Bm.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Cr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Cr(4,2,e,n)},useMemo:function(e,n){var t=Vn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var l=Vn();return n=t!==void 0?t(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=xg.bind(null,ye,e),[l.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:xd,useDebugValue:lc,useDeferredValue:function(e){return Vn().memoizedState=e},useTransition:function(){var e=xd(!1),n=e[0];return e=_g.bind(null,e[1]),Vn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var l=ye,i=Vn();if(ue){if(t===void 0)throw Error(D(407));t=t()}else{if(t=n(),Le===null)throw Error(D(349));Tt&30||Am(l,n,t)}i.memoizedState=t;var r={value:t,getSnapshot:n};return i.queue=r,vd(Em.bind(null,l,r,e),[e]),l.flags|=2048,Ni(9,Im.bind(null,l,r,t,n),void 0,null),t},useId:function(){var e=Vn(),n=Le.identifierPrefix;if(ue){var t=Wn,l=Un;t=(l&~(1<<32-kn(l)-1)).toString(32)+t,n=":"+n+"R"+t,t=ki++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=hg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},wg={readContext:fn,useCallback:Fm,useContext:fn,useEffect:tc,useImperativeHandle:Om,useInsertionEffect:Mm,useLayoutEffect:Gm,useMemo:Rm,useReducer:io,useRef:Tm,useState:function(){return io(Pi)},useDebugValue:lc,useDeferredValue:function(e){var n=pn();return jm(n,Ce.memoizedState,e)},useTransition:function(){var e=io(Pi)[0],n=pn().memoizedState;return[e,n]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Um,unstable_isNewReconciler:!1},Sg={readContext:fn,useCallback:Fm,useContext:fn,useEffect:tc,useImperativeHandle:Om,useInsertionEffect:Mm,useLayoutEffect:Gm,useMemo:Rm,useReducer:ro,useRef:Tm,useState:function(){return ro(Pi)},useDebugValue:lc,useDeferredValue:function(e){var n=pn();return Ce===null?n.memoizedState=e:jm(n,Ce.memoizedState,e)},useTransition:function(){var e=ro(Pi)[0],n=pn().memoizedState;return[e,n]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Um,unstable_isNewReconciler:!1};function wn(e,n){if(e&&e.defaultProps){n=be({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Yo(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:be({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ga={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var l=Fe(),i=mt(e),r=Hn(l,i);r.payload=n,t!=null&&(r.callback=t),n=dt(e,r,i),n!==null&&(Pn(n,e,i,l),xr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=Fe(),i=mt(e),r=Hn(l,i);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=dt(e,r,i),n!==null&&(Pn(n,e,i,l),xr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Fe(),l=mt(e),i=Hn(t,l);i.tag=2,n!=null&&(i.callback=n),n=dt(e,i,l),n!==null&&(Pn(n,e,l,t),xr(n,e,l))}};function Cd(e,n,t,l,i,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,a):n.prototype&&n.prototype.isPureReactComponent?!xi(t,l)||!xi(i,r):!0}function qm(e,n,t){var l=!1,i=gt,r=n.contextType;return typeof r=="object"&&r!==null?r=fn(r):(i=Qe(n)?Dt:Ge.current,l=n.contextTypes,r=(l=l!=null)?hl(e,i):gt),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ga,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),n}function wd(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&ga.enqueueReplaceState(n,n.state,null)}function Xo(e,n,t,l){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Qs(e);var r=n.contextType;typeof r=="object"&&r!==null?i.context=fn(r):(r=Qe(n)?Dt:Ge.current,i.context=hl(e,r)),i.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Yo(e,n,r,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ga.enqueueReplaceState(i,i.state,null),zr(e,t,i,l),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Cl(e,n){try{var t="",l=n;do t+=Jp(l),l=l.return;while(l);var i=t}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:i,digest:null}}function ao(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Jo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function zm(e,n,t){t=Hn(-1,t),t.tag=3,t.payload={element:null};var l=n.value;return t.callback=function(){Jr||(Jr=!0,ss=l),Jo(e,n)},t}function Km(e,n,t){t=Hn(-1,t),t.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){Jo(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Jo(e,n),typeof l!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Sd(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new Lg;var i=new Set;l.set(n,i)}else i=l.get(n),i===void 0&&(i=new Set,l.set(n,i));i.has(t)||(i.add(t),e=Fg.bind(null,e,n,t),n.then(e,e))}function Ld(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function kd(e,n,t,l,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Hn(-1,1),n.tag=2,dt(t,n,1))),t.lanes|=1),e)}var kg=Xn.ReactCurrentOwner,ze=!1;function Be(e,n,t,l){n.child=e===null?wm(n,null,t,l):xl(n,e.child,t,l)}function Pd(e,n,t,l,i){t=t.render;var r=n.ref;return fl(n,i),l=ec(e,n,t,l,r,i),t=nc(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Yn(e,n,i)):(ue&&t&&Us(n),n.flags|=1,Be(e,n,l,i),n.child)}function Nd(e,n,t,l,i){if(e===null){var r=t.type;return typeof r=="function"&&!uc(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,Qm(e,n,r,l,i)):(e=kr(t.type,null,l,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&i)){var a=r.memoizedProps;if(t=t.compare,t=t!==null?t:xi,t(a,l)&&e.ref===n.ref)return Yn(e,n,i)}return n.flags|=1,e=ft(r,l),e.ref=n.ref,e.return=n,n.child=e}function Qm(e,n,t,l,i){if(e!==null){var r=e.memoizedProps;if(xi(r,l)&&e.ref===n.ref)if(ze=!1,n.pendingProps=l=r,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return n.lanes=e.lanes,Yn(e,n,i)}return Zo(e,n,t,l,i)}function Ym(e,n,t){var l=n.pendingProps,i=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(il,Je),Je|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ae(il,Je),Je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=r!==null?r.baseLanes:t,ae(il,Je),Je|=l}else r!==null?(l=r.baseLanes|t,n.memoizedState=null):l=t,ae(il,Je),Je|=l;return Be(e,n,i,t),n.child}function Xm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Zo(e,n,t,l,i){var r=Qe(t)?Dt:Ge.current;return r=hl(n,r),fl(n,i),t=ec(e,n,t,l,r,i),l=nc(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Yn(e,n,i)):(ue&&l&&Us(n),n.flags|=1,Be(e,n,t,i),n.child)}function Ad(e,n,t,l,i){if(Qe(t)){var r=!0;Ur(n)}else r=!1;if(fl(n,i),n.stateNode===null)wr(e,n),qm(n,t,l),Xo(n,t,l,i),l=!0;else if(e===null){var a=n.stateNode,o=n.memoizedProps;a.props=o;var s=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=fn(c):(c=Qe(t)?Dt:Ge.current,c=hl(n,c));var u=t.getDerivedStateFromProps,m=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==l||s!==c)&&wd(n,a,l,c),et=!1;var y=n.memoizedState;a.state=y,zr(n,l,a,i),s=n.memoizedState,o!==l||y!==s||Ke.current||et?(typeof u=="function"&&(Yo(n,t,u,l),s=n.memoizedState),(o=et||Cd(n,t,o,l,y,s,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=s),a.props=l,a.state=s,a.context=c,l=o):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{a=n.stateNode,Lm(e,n),o=n.memoizedProps,c=n.type===n.elementType?o:wn(n.type,o),a.props=c,m=n.pendingProps,y=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=fn(s):(s=Qe(t)?Dt:Ge.current,s=hl(n,s));var f=t.getDerivedStateFromProps;(u=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||y!==s)&&wd(n,a,l,s),et=!1,y=n.memoizedState,a.state=y,zr(n,l,a,i);var x=n.memoizedState;o!==m||y!==x||Ke.current||et?(typeof f=="function"&&(Yo(n,t,f,l),x=n.memoizedState),(c=et||Cd(n,t,c,l,y,x,s)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,x,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=x),a.props=l,a.state=x,a.context=s,l=c):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),l=!1)}return es(e,n,t,l,r,i)}function es(e,n,t,l,i,r){Xm(e,n);var a=(n.flags&128)!==0;if(!l&&!a)return i&&pd(n,t,!1),Yn(e,n,r);l=n.stateNode,kg.current=n;var o=a&&typeof t.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&a?(n.child=xl(n,e.child,null,r),n.child=xl(n,null,o,r)):Be(e,n,o,r),n.memoizedState=l.state,i&&pd(n,t,!0),n.child}function Jm(e){var n=e.stateNode;n.pendingContext?fd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&fd(e,n.context,!1),Ys(e,n.containerInfo)}function Id(e,n,t,l,i){return _l(),$s(i),n.flags|=256,Be(e,n,t,l),n.child}var ns={dehydrated:null,treeContext:null,retryLane:0};function ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zm(e,n,t){var l=n.pendingProps,i=fe.current,r=!1,a=(n.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(fe,i&1),e===null)return Ko(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=l.children,e=l.fallback,r?(l=n.mode,r=n.child,a={mode:"hidden",children:a},!(l&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=_a(a,l,0,null),e=Et(e,l,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=ts(t),n.memoizedState=ns,e):ic(n,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Pg(e,n,a,l,o,i,t);if(r){r=l.fallback,a=n.mode,i=e.child,o=i.sibling;var s={mode:"hidden",children:l.children};return!(a&1)&&n.child!==i?(l=n.child,l.childLanes=0,l.pendingProps=s,n.deletions=null):(l=ft(i,s),l.subtreeFlags=i.subtreeFlags&14680064),o!==null?r=ft(o,r):(r=Et(r,a,t,null),r.flags|=2),r.return=n,l.return=n,l.sibling=r,n.child=l,l=r,r=n.child,a=e.child.memoizedState,a=a===null?ts(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=e.childLanes&~t,n.memoizedState=ns,l}return r=e.child,e=r.sibling,l=ft(r,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=t),l.return=n,l.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=l,n.memoizedState=null,l}function ic(e,n){return n=_a({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function er(e,n,t,l){return l!==null&&$s(l),xl(n,e.child,null,t),e=ic(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pg(e,n,t,l,i,r,a){if(t)return n.flags&256?(n.flags&=-257,l=ao(Error(D(422))),er(e,n,a,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=l.fallback,i=n.mode,l=_a({mode:"visible",children:l.children},i,0,null),r=Et(r,i,a,null),r.flags|=2,l.return=n,r.return=n,l.sibling=r,n.child=l,n.mode&1&&xl(n,e.child,null,a),n.child.memoizedState=ts(a),n.memoizedState=ns,r);if(!(n.mode&1))return er(e,n,a,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var o=l.dgst;return l=o,r=Error(D(419)),l=ao(r,l,void 0),er(e,n,a,l)}if(o=(a&e.childLanes)!==0,ze||o){if(l=Le,l!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|a)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,Qn(e,i),Pn(l,e,i,-1))}return dc(),l=ao(Error(D(421))),er(e,n,a,l)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Rg.bind(null,e),i._reactRetry=n,null):(e=r.treeContext,en=ct(i.nextSibling),nn=n,ue=!0,Ln=null,e!==null&&(sn[cn++]=Un,sn[cn++]=Wn,sn[cn++]=Vt,Un=e.id,Wn=e.overflow,Vt=n),n=ic(n,l.children),n.flags|=4096,n)}function Ed(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Qo(e.return,n,t)}function oo(e,n,t,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=t,r.tailMode=i)}function ef(e,n,t){var l=n.pendingProps,i=l.revealOrder,r=l.tail;if(Be(e,n,l.children,t),l=fe.current,l&2)l=l&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,t,n);else if(e.tag===19)Ed(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(ae(fe,l),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Kr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),oo(n,!1,i,t,r);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Kr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}oo(n,!0,t,null,r);break;case"together":oo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function wr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Yn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Mt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(D(153));if(n.child!==null){for(e=n.child,t=ft(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ft(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ng(e,n,t){switch(n.tag){case 3:Jm(n),_l();break;case 5:km(n);break;case 1:Qe(n.type)&&Ur(n);break;case 4:Ys(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,i=n.memoizedProps.value;ae(Hr,l._currentValue),l._currentValue=i;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(ae(fe,fe.current&1),n.flags|=128,null):t&n.child.childLanes?Zm(e,n,t):(ae(fe,fe.current&1),e=Yn(e,n,t),e!==null?e.sibling:null);ae(fe,fe.current&1);break;case 19:if(l=(t&n.childLanes)!==0,e.flags&128){if(l)return ef(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(fe,fe.current),l)break;return null;case 22:case 23:return n.lanes=0,Ym(e,n,t)}return Yn(e,n,t)}var nf,ls,tf,lf;nf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ls=function(){};tf=function(e,n,t,l){var i=e.memoizedProps;if(i!==l){e=n.stateNode,kt(Gn.current);var r=null;switch(t){case"input":i=Lo(e,i),l=Lo(e,l),r=[];break;case"select":i=be({},i,{value:void 0}),l=be({},l,{value:void 0}),r=[];break;case"textarea":i=No(e,i),l=No(e,l),r=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Rr)}Io(t,l);var a;t=null;for(c in i)if(!l.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var o=i[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fi.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in l){var s=l[c];if(o=i!=null?i[c]:void 0,l.hasOwnProperty(c)&&s!==o&&(s!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&o[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(r||(r=[]),r.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(r=r||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(r=r||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ce("scroll",e),r||o===s||(r=[])):(r=r||[]).push(c,s))}t&&(r=r||[]).push("style",t);var c=r;(n.updateQueue=c)&&(n.flags|=4)}};lf=function(e,n,t,l){t!==l&&(n.flags|=4)};function Hl(e,n){if(!ue)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function Ag(e,n,t){var l=n.pendingProps;switch(Ws(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Qe(n.type)&&jr(),Ve(n),null;case 3:return l=n.stateNode,vl(),de(Ke),de(Ge),Js(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ji(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ln!==null&&(us(Ln),Ln=null))),ls(e,n),Ve(n),null;case 5:Xs(n);var i=kt(Li.current);if(t=n.type,e!==null&&n.stateNode!=null)tf(e,n,t,l,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(D(166));return Ve(n),null}if(e=kt(Gn.current),Ji(n)){l=n.stateNode,t=n.type;var r=n.memoizedProps;switch(l[Tn]=n,l[wi]=r,e=(n.mode&1)!==0,t){case"dialog":ce("cancel",l),ce("close",l);break;case"iframe":case"object":case"embed":ce("load",l);break;case"video":case"audio":for(i=0;i<Zl.length;i++)ce(Zl[i],l);break;case"source":ce("error",l);break;case"img":case"image":case"link":ce("error",l),ce("load",l);break;case"details":ce("toggle",l);break;case"input":Rc(l,r),ce("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!r.multiple},ce("invalid",l);break;case"textarea":Uc(l,r),ce("invalid",l)}Io(t,r),i=null;for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];a==="children"?typeof o=="string"?l.textContent!==o&&(r.suppressHydrationWarning!==!0&&Xi(l.textContent,o,e),i=["children",o]):typeof o=="number"&&l.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&Xi(l.textContent,o,e),i=["children",""+o]):fi.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ce("scroll",l)}switch(t){case"input":Wi(l),jc(l,r,!0);break;case"textarea":Wi(l),Wc(l);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(l.onclick=Rr)}l=i,n.updateQueue=l,l!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=a.createElement(t,{is:l.is}):(e=a.createElement(t),t==="select"&&(a=e,l.multiple?a.multiple=!0:l.size&&(a.size=l.size))):e=a.createElementNS(e,t),e[Tn]=n,e[wi]=l,nf(e,n,!1,!1),n.stateNode=e;e:{switch(a=Eo(t,l),t){case"dialog":ce("cancel",e),ce("close",e),i=l;break;case"iframe":case"object":case"embed":ce("load",e),i=l;break;case"video":case"audio":for(i=0;i<Zl.length;i++)ce(Zl[i],e);i=l;break;case"source":ce("error",e),i=l;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=l;break;case"details":ce("toggle",e),i=l;break;case"input":Rc(e,l),i=Lo(e,l),ce("invalid",e);break;case"option":i=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},i=be({},l,{value:void 0}),ce("invalid",e);break;case"textarea":Uc(e,l),i=No(e,l),ce("invalid",e);break;default:i=l}Io(t,i),o=i;for(r in o)if(o.hasOwnProperty(r)){var s=o[r];r==="style"?Tu(e,s):r==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Du(e,s)):r==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&pi(e,s):typeof s=="number"&&pi(e,""+s):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(fi.hasOwnProperty(r)?s!=null&&r==="onScroll"&&ce("scroll",e):s!=null&&Ns(e,r,s,a))}switch(t){case"input":Wi(e),jc(e,l,!1);break;case"textarea":Wi(e),Wc(e);break;case"option":l.value!=null&&e.setAttribute("value",""+yt(l.value));break;case"select":e.multiple=!!l.multiple,r=l.value,r!=null?cl(e,!!l.multiple,r,!1):l.defaultValue!=null&&cl(e,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Rr)}switch(t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ve(n),null;case 6:if(e&&n.stateNode!=null)lf(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(D(166));if(t=kt(Li.current),kt(Gn.current),Ji(n)){if(l=n.stateNode,t=n.memoizedProps,l[Tn]=n,(r=l.nodeValue!==t)&&(e=nn,e!==null))switch(e.tag){case 3:Xi(l.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xi(l.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else l=(t.nodeType===9?t:t.ownerDocument).createTextNode(l),l[Tn]=n,n.stateNode=l}return Ve(n),null;case 13:if(de(fe),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&en!==null&&n.mode&1&&!(n.flags&128))vm(),_l(),n.flags|=98560,r=!1;else if(r=Ji(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(D(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(D(317));r[Tn]=n}else _l(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ve(n),r=!1}else Ln!==null&&(us(Ln),Ln=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(e===null||fe.current&1?we===0&&(we=3):dc())),n.updateQueue!==null&&(n.flags|=4),Ve(n),null);case 4:return vl(),ls(e,n),e===null&&vi(n.stateNode.containerInfo),Ve(n),null;case 10:return zs(n.type._context),Ve(n),null;case 17:return Qe(n.type)&&jr(),Ve(n),null;case 19:if(de(fe),r=n.memoizedState,r===null)return Ve(n),null;if(l=(n.flags&128)!==0,a=r.rendering,a===null)if(l)Hl(r,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Kr(e),a!==null){for(n.flags|=128,Hl(r,!1),l=a.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=t,t=n.child;t!==null;)r=t,e=l,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,e=a.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ae(fe,fe.current&1|2),n.child}e=e.sibling}r.tail!==null&&xe()>wl&&(n.flags|=128,l=!0,Hl(r,!1),n.lanes=4194304)}else{if(!l)if(e=Kr(a),e!==null){if(n.flags|=128,l=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Hl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!ue)return Ve(n),null}else 2*xe()-r.renderingStartTime>wl&&t!==1073741824&&(n.flags|=128,l=!0,Hl(r,!1),n.lanes=4194304);r.isBackwards?(a.sibling=n.child,n.child=a):(t=r.last,t!==null?t.sibling=a:n.child=a,r.last=a)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=xe(),n.sibling=null,t=fe.current,ae(fe,l?t&1|2:t&1),n):(Ve(n),null);case 22:case 23:return cc(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?Je&1073741824&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),null;case 24:return null;case 25:return null}throw Error(D(156,n.tag))}function Ig(e,n){switch(Ws(n),n.tag){case 1:return Qe(n.type)&&jr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return vl(),de(Ke),de(Ge),Js(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Xs(n),null;case 13:if(de(fe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(D(340));_l()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(fe),null;case 4:return vl(),null;case 10:return zs(n.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var nr=!1,Te=!1,Eg=typeof WeakSet=="function"?WeakSet:Set,G=null;function ll(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(l){he(e,n,l)}else t.current=null}function is(e,n,t){try{t()}catch(l){he(e,n,l)}}var Dd=!1;function Dg(e,n){if(jo=Br,e=sm(),js(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var a=0,o=-1,s=-1,c=0,u=0,m=e,y=null;n:for(;;){for(var f;m!==t||i!==0&&m.nodeType!==3||(o=a+i),m!==r||l!==0&&m.nodeType!==3||(s=a+l),m.nodeType===3&&(a+=m.nodeValue.length),(f=m.firstChild)!==null;)y=m,m=f;for(;;){if(m===e)break n;if(y===t&&++c===i&&(o=a),y===r&&++u===l&&(s=a),(f=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=f}t=o===-1||s===-1?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Uo={focusedElem:e,selectionRange:t},Br=!1,G=n;G!==null;)if(n=G,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,G=e;else for(;G!==null;){n=G;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,_=x.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?b:wn(n.type,b),_);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(C){he(n,n.return,C)}if(e=n.sibling,e!==null){e.return=n.return,G=e;break}G=n.return}return x=Dd,Dd=!1,x}function si(e,n,t){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&is(n,t,r)}i=i.next}while(i!==l)}}function ba(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var l=t.create;t.destroy=l()}t=t.next}while(t!==n)}}function rs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function rf(e){var n=e.alternate;n!==null&&(e.alternate=null,rf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Tn],delete n[wi],delete n[Ho],delete n[pg],delete n[yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function af(e){return e.tag===5||e.tag===3||e.tag===4}function Vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function as(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Rr));else if(l!==4&&(e=e.child,e!==null))for(as(e,n,t),e=e.sibling;e!==null;)as(e,n,t),e=e.sibling}function os(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(os(e,n,t),e=e.sibling;e!==null;)os(e,n,t),e=e.sibling}var Ne=null,Sn=!1;function Jn(e,n,t){for(t=t.child;t!==null;)of(e,n,t),t=t.sibling}function of(e,n,t){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(ca,t)}catch{}switch(t.tag){case 5:Te||ll(t,n);case 6:var l=Ne,i=Sn;Ne=null,Jn(e,n,t),Ne=l,Sn=i,Ne!==null&&(Sn?(e=Ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ne.removeChild(t.stateNode));break;case 18:Ne!==null&&(Sn?(e=Ne,t=t.stateNode,e.nodeType===8?eo(e.parentNode,t):e.nodeType===1&&eo(e,t),hi(e)):eo(Ne,t.stateNode));break;case 4:l=Ne,i=Sn,Ne=t.stateNode.containerInfo,Sn=!0,Jn(e,n,t),Ne=l,Sn=i;break;case 0:case 11:case 14:case 15:if(!Te&&(l=t.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var r=i,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&is(t,n,a),i=i.next}while(i!==l)}Jn(e,n,t);break;case 1:if(!Te&&(ll(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=t.memoizedProps,l.state=t.memoizedState,l.componentWillUnmount()}catch(o){he(t,n,o)}Jn(e,n,t);break;case 21:Jn(e,n,t);break;case 22:t.mode&1?(Te=(l=Te)||t.memoizedState!==null,Jn(e,n,t),Te=l):Jn(e,n,t);break;default:Jn(e,n,t)}}function Td(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Eg),n.forEach(function(l){var i=jg.bind(null,e,l);t.has(l)||(t.add(l),l.then(i,i))})}}function vn(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];try{var r=e,a=n,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ne=o.stateNode,Sn=!1;break e;case 3:Ne=o.stateNode.containerInfo,Sn=!0;break e;case 4:Ne=o.stateNode.containerInfo,Sn=!0;break e}o=o.return}if(Ne===null)throw Error(D(160));of(r,a,i),Ne=null,Sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){he(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)sf(n,e),n=n.sibling}function sf(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),Dn(e),l&4){try{si(3,e,e.return),ba(3,e)}catch(b){he(e,e.return,b)}try{si(5,e,e.return)}catch(b){he(e,e.return,b)}}break;case 1:vn(n,e),Dn(e),l&512&&t!==null&&ll(t,t.return);break;case 5:if(vn(n,e),Dn(e),l&512&&t!==null&&ll(t,t.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(b){he(e,e.return,b)}}if(l&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,a=t!==null?t.memoizedProps:r,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&Au(i,r),Eo(o,a);var c=Eo(o,r);for(a=0;a<s.length;a+=2){var u=s[a],m=s[a+1];u==="style"?Tu(i,m):u==="dangerouslySetInnerHTML"?Du(i,m):u==="children"?pi(i,m):Ns(i,u,m,c)}switch(o){case"input":ko(i,r);break;case"textarea":Iu(i,r);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var f=r.value;f!=null?cl(i,!!r.multiple,f,!1):y!==!!r.multiple&&(r.defaultValue!=null?cl(i,!!r.multiple,r.defaultValue,!0):cl(i,!!r.multiple,r.multiple?[]:"",!1))}i[wi]=r}catch(b){he(e,e.return,b)}}break;case 6:if(vn(n,e),Dn(e),l&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(b){he(e,e.return,b)}}break;case 3:if(vn(n,e),Dn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{hi(n.containerInfo)}catch(b){he(e,e.return,b)}break;case 4:vn(n,e),Dn(e);break;case 13:vn(n,e),Dn(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(oc=xe())),l&4&&Td(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(Te=(c=Te)||u,vn(n,e),Te=c):vn(n,e),Dn(e),l&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(G=e,u=e.child;u!==null;){for(m=G=u;G!==null;){switch(y=G,f=y.child,y.tag){case 0:case 11:case 14:case 15:si(4,y,y.return);break;case 1:ll(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){l=y,t=y.return;try{n=l,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(b){he(l,t,b)}}break;case 5:ll(y,y.return);break;case 22:if(y.memoizedState!==null){Gd(m);continue}}f!==null?(f.return=y,G=f):Gd(m)}u=u.sibling}e:for(u=null,m=e;;){if(m.tag===5){if(u===null){u=m;try{i=m.stateNode,c?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=Vu("display",a))}catch(b){he(e,e.return,b)}}}else if(m.tag===6){if(u===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(b){he(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;u===m&&(u=null),m=m.return}u===m&&(u=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:vn(n,e),Dn(e),l&4&&Td(e);break;case 21:break;default:vn(n,e),Dn(e)}}function Dn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(af(t)){var l=t;break e}t=t.return}throw Error(D(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(pi(i,""),l.flags&=-33);var r=Vd(e);os(e,r,i);break;case 3:case 4:var a=l.stateNode.containerInfo,o=Vd(e);as(e,o,a);break;default:throw Error(D(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vg(e,n,t){G=e,cf(e)}function cf(e,n,t){for(var l=(e.mode&1)!==0;G!==null;){var i=G,r=i.child;if(i.tag===22&&l){var a=i.memoizedState!==null||nr;if(!a){var o=i.alternate,s=o!==null&&o.memoizedState!==null||Te;o=nr;var c=Te;if(nr=a,(Te=s)&&!c)for(G=i;G!==null;)a=G,s=a.child,a.tag===22&&a.memoizedState!==null?Bd(i):s!==null?(s.return=a,G=s):Bd(i);for(;r!==null;)G=r,cf(r),r=r.sibling;G=i,nr=o,Te=c}Md(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,G=r):Md(e)}}function Md(e){for(;G!==null;){var n=G;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Te||ba(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Te)if(t===null)l.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:wn(n.type,t.memoizedProps);l.componentDidUpdate(i,t.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&_d(n,r,l);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}_d(n,a,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var m=u.dehydrated;m!==null&&hi(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Te||n.flags&512&&rs(n)}catch(y){he(n,n.return,y)}}if(n===e){G=null;break}if(t=n.sibling,t!==null){t.return=n.return,G=t;break}G=n.return}}function Gd(e){for(;G!==null;){var n=G;if(n===e){G=null;break}var t=n.sibling;if(t!==null){t.return=n.return,G=t;break}G=n.return}}function Bd(e){for(;G!==null;){var n=G;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ba(4,n)}catch(s){he(n,t,s)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var i=n.return;try{l.componentDidMount()}catch(s){he(n,i,s)}}var r=n.return;try{rs(n)}catch(s){he(n,r,s)}break;case 5:var a=n.return;try{rs(n)}catch(s){he(n,a,s)}}}catch(s){he(n,n.return,s)}if(n===e){G=null;break}var o=n.sibling;if(o!==null){o.return=n.return,G=o;break}G=n.return}}var Tg=Math.ceil,Xr=Xn.ReactCurrentDispatcher,rc=Xn.ReactCurrentOwner,un=Xn.ReactCurrentBatchConfig,ne=0,Le=null,ve=null,Ae=0,Je=0,il=_t(0),we=0,Ai=null,Mt=0,ha=0,ac=0,ci=null,He=null,oc=0,wl=1/0,Rn=null,Jr=!1,ss=null,ut=null,tr=!1,rt=null,Zr=0,di=0,cs=null,Sr=-1,Lr=0;function Fe(){return ne&6?xe():Sr!==-1?Sr:Sr=xe()}function mt(e){return e.mode&1?ne&2&&Ae!==0?Ae&-Ae:bg.transition!==null?(Lr===0&&(Lr=qu()),Lr):(e=le,e!==0||(e=window.event,e=e===void 0?16:Zu(e.type)),e):1}function Pn(e,n,t,l){if(50<di)throw di=0,cs=null,Error(D(185));Ti(e,t,l),(!(ne&2)||e!==Le)&&(e===Le&&(!(ne&2)&&(ha|=t),we===4&&lt(e,Ae)),Ye(e,l),t===1&&ne===0&&!(n.mode&1)&&(wl=xe()+500,pa&&xt()))}function Ye(e,n){var t=e.callbackNode;by(e,n);var l=Gr(e,e===Le?Ae:0);if(l===0)t!==null&&qc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(t!=null&&qc(t),n===1)e.tag===0?gg(Od.bind(null,e)):hm(Od.bind(null,e)),mg(function(){!(ne&6)&&xt()}),t=null;else{switch(zu(l)){case 1:t=Vs;break;case 4:t=$u;break;case 16:t=Mr;break;case 536870912:t=Hu;break;default:t=Mr}t=bf(t,df.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function df(e,n){if(Sr=-1,Lr=0,ne&6)throw Error(D(327));var t=e.callbackNode;if(pl()&&e.callbackNode!==t)return null;var l=Gr(e,e===Le?Ae:0);if(l===0)return null;if(l&30||l&e.expiredLanes||n)n=ea(e,l);else{n=l;var i=ne;ne|=2;var r=mf();(Le!==e||Ae!==n)&&(Rn=null,wl=xe()+500,It(e,n));do try{Bg();break}catch(o){uf(e,o)}while(!0);qs(),Xr.current=r,ne=i,ve!==null?n=0:(Le=null,Ae=0,n=we)}if(n!==0){if(n===2&&(i=Go(e),i!==0&&(l=i,n=ds(e,i))),n===1)throw t=Ai,It(e,0),lt(e,l),Ye(e,xe()),t;if(n===6)lt(e,l);else{if(i=e.current.alternate,!(l&30)&&!Mg(i)&&(n=ea(e,l),n===2&&(r=Go(e),r!==0&&(l=r,n=ds(e,r))),n===1))throw t=Ai,It(e,0),lt(e,l),Ye(e,xe()),t;switch(e.finishedWork=i,e.finishedLanes=l,n){case 0:case 1:throw Error(D(345));case 2:wt(e,He,Rn);break;case 3:if(lt(e,l),(l&130023424)===l&&(n=oc+500-xe(),10<n)){if(Gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&l)!==l){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$o(wt.bind(null,e,He,Rn),n);break}wt(e,He,Rn);break;case 4:if(lt(e,l),(l&4194240)===l)break;for(n=e.eventTimes,i=-1;0<l;){var a=31-kn(l);r=1<<a,a=n[a],a>i&&(i=a),l&=~r}if(l=i,l=xe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Tg(l/1960))-l,10<l){e.timeoutHandle=$o(wt.bind(null,e,He,Rn),l);break}wt(e,He,Rn);break;case 5:wt(e,He,Rn);break;default:throw Error(D(329))}}}return Ye(e,xe()),e.callbackNode===t?df.bind(null,e):null}function ds(e,n){var t=ci;return e.current.memoizedState.isDehydrated&&(It(e,n).flags|=256),e=ea(e,n),e!==2&&(n=He,He=t,n!==null&&us(n)),e}function us(e){He===null?He=e:He.push.apply(He,e)}function Mg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var l=0;l<t.length;l++){var i=t[l],r=i.getSnapshot;i=i.value;try{if(!Nn(r(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function lt(e,n){for(n&=~ac,n&=~ha,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-kn(n),l=1<<t;e[t]=-1,n&=~l}}function Od(e){if(ne&6)throw Error(D(327));pl();var n=Gr(e,0);if(!(n&1))return Ye(e,xe()),null;var t=ea(e,n);if(e.tag!==0&&t===2){var l=Go(e);l!==0&&(n=l,t=ds(e,l))}if(t===1)throw t=Ai,It(e,0),lt(e,n),Ye(e,xe()),t;if(t===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wt(e,He,Rn),Ye(e,xe()),null}function sc(e,n){var t=ne;ne|=1;try{return e(n)}finally{ne=t,ne===0&&(wl=xe()+500,pa&&xt())}}function Gt(e){rt!==null&&rt.tag===0&&!(ne&6)&&pl();var n=ne;ne|=1;var t=un.transition,l=le;try{if(un.transition=null,le=1,e)return e()}finally{le=l,un.transition=t,ne=n,!(ne&6)&&xt()}}function cc(){Je=il.current,de(il)}function It(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ug(t)),ve!==null)for(t=ve.return;t!==null;){var l=t;switch(Ws(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&jr();break;case 3:vl(),de(Ke),de(Ge),Js();break;case 5:Xs(l);break;case 4:vl();break;case 13:de(fe);break;case 19:de(fe);break;case 10:zs(l.type._context);break;case 22:case 23:cc()}t=t.return}if(Le=e,ve=e=ft(e.current,null),Ae=Je=n,we=0,Ai=null,ac=ha=Mt=0,He=ci=null,Lt!==null){for(n=0;n<Lt.length;n++)if(t=Lt[n],l=t.interleaved,l!==null){t.interleaved=null;var i=l.next,r=t.pending;if(r!==null){var a=r.next;r.next=i,l.next=a}t.pending=l}Lt=null}return e}function uf(e,n){do{var t=ve;try{if(qs(),vr.current=Yr,Qr){for(var l=ye.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}Qr=!1}if(Tt=0,Se=Ce=ye=null,oi=!1,ki=0,rc.current=null,t===null||t.return===null){we=1,Ai=n,ve=null;break}e:{var r=e,a=t.return,o=t,s=n;if(n=Ae,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=o,m=u.tag;if(!(u.mode&1)&&(m===0||m===11||m===15)){var y=u.alternate;y?(u.updateQueue=y.updateQueue,u.memoizedState=y.memoizedState,u.lanes=y.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=Ld(a);if(f!==null){f.flags&=-257,kd(f,a,o,r,n),f.mode&1&&Sd(r,c,n),n=f,s=c;var x=n.updateQueue;if(x===null){var b=new Set;b.add(s),n.updateQueue=b}else x.add(s);break e}else{if(!(n&1)){Sd(r,c,n),dc();break e}s=Error(D(426))}}else if(ue&&o.mode&1){var _=Ld(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),kd(_,a,o,r,n),$s(Cl(s,o));break e}}r=s=Cl(s,o),we!==4&&(we=2),ci===null?ci=[r]:ci.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var g=zm(r,s,n);hd(r,g);break e;case 1:o=s;var p=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ut===null||!ut.has(h)))){r.flags|=65536,n&=-n,r.lanes|=n;var C=Km(r,o,n);hd(r,C);break e}}r=r.return}while(r!==null)}pf(t)}catch(w){n=w,ve===t&&t!==null&&(ve=t=t.return);continue}break}while(!0)}function mf(){var e=Xr.current;return Xr.current=Yr,e===null?Yr:e}function dc(){(we===0||we===3||we===2)&&(we=4),Le===null||!(Mt&268435455)&&!(ha&268435455)||lt(Le,Ae)}function ea(e,n){var t=ne;ne|=2;var l=mf();(Le!==e||Ae!==n)&&(Rn=null,It(e,n));do try{Gg();break}catch(i){uf(e,i)}while(!0);if(qs(),ne=t,Xr.current=l,ve!==null)throw Error(D(261));return Le=null,Ae=0,we}function Gg(){for(;ve!==null;)ff(ve)}function Bg(){for(;ve!==null&&!sy();)ff(ve)}function ff(e){var n=gf(e.alternate,e,Je);e.memoizedProps=e.pendingProps,n===null?pf(e):ve=n,rc.current=null}function pf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ig(t,n),t!==null){t.flags&=32767,ve=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}else if(t=Ag(t,n,Je),t!==null){ve=t;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);we===0&&(we=5)}function wt(e,n,t){var l=le,i=un.transition;try{un.transition=null,le=1,Og(e,n,t,l)}finally{un.transition=i,le=l}return null}function Og(e,n,t,l){do pl();while(rt!==null);if(ne&6)throw Error(D(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(hy(e,r),e===Le&&(ve=Le=null,Ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||tr||(tr=!0,bf(Mr,function(){return pl(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=un.transition,un.transition=null;var a=le;le=1;var o=ne;ne|=4,rc.current=null,Dg(e,t),sf(t,e),ig(Uo),Br=!!jo,Uo=jo=null,e.current=t,Vg(t),cy(),ne=o,le=a,un.transition=r}else e.current=t;if(tr&&(tr=!1,rt=e,Zr=i),r=e.pendingLanes,r===0&&(ut=null),my(t.stateNode),Ye(e,xe()),n!==null)for(l=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],l(i.value,{componentStack:i.stack,digest:i.digest});if(Jr)throw Jr=!1,e=ss,ss=null,e;return Zr&1&&e.tag!==0&&pl(),r=e.pendingLanes,r&1?e===cs?di++:(di=0,cs=e):di=0,xt(),null}function pl(){if(rt!==null){var e=zu(Zr),n=un.transition,t=le;try{if(un.transition=null,le=16>e?16:e,rt===null)var l=!1;else{if(e=rt,rt=null,Zr=0,ne&6)throw Error(D(331));var i=ne;for(ne|=4,G=e.current;G!==null;){var r=G,a=r.child;if(G.flags&16){var o=r.deletions;if(o!==null){for(var s=0;s<o.length;s++){var c=o[s];for(G=c;G!==null;){var u=G;switch(u.tag){case 0:case 11:case 15:si(8,u,r)}var m=u.child;if(m!==null)m.return=u,G=m;else for(;G!==null;){u=G;var y=u.sibling,f=u.return;if(rf(u),u===c){G=null;break}if(y!==null){y.return=f,G=y;break}G=f}}}var x=r.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}G=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,G=a;else e:for(;G!==null;){if(r=G,r.flags&2048)switch(r.tag){case 0:case 11:case 15:si(9,r,r.return)}var g=r.sibling;if(g!==null){g.return=r.return,G=g;break e}G=r.return}}var p=e.current;for(G=p;G!==null;){a=G;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,G=h;else e:for(a=p;G!==null;){if(o=G,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ba(9,o)}}catch(w){he(o,o.return,w)}if(o===a){G=null;break e}var C=o.sibling;if(C!==null){C.return=o.return,G=C;break e}G=o.return}}if(ne=i,xt(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(ca,e)}catch{}l=!0}return l}finally{le=t,un.transition=n}}return!1}function Fd(e,n,t){n=Cl(t,n),n=zm(e,n,1),e=dt(e,n,1),n=Fe(),e!==null&&(Ti(e,1,n),Ye(e,n))}function he(e,n,t){if(e.tag===3)Fd(e,e,t);else for(;n!==null;){if(n.tag===3){Fd(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ut===null||!ut.has(l))){e=Cl(t,e),e=Km(n,e,1),n=dt(n,e,1),e=Fe(),n!==null&&(Ti(n,1,e),Ye(n,e));break}}n=n.return}}function Fg(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),n=Fe(),e.pingedLanes|=e.suspendedLanes&t,Le===e&&(Ae&t)===t&&(we===4||we===3&&(Ae&130023424)===Ae&&500>xe()-oc?It(e,0):ac|=t),Ye(e,n)}function yf(e,n){n===0&&(e.mode&1?(n=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):n=1);var t=Fe();e=Qn(e,n),e!==null&&(Ti(e,n,t),Ye(e,t))}function Rg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),yf(e,t)}function jg(e,n){var t=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(D(314))}l!==null&&l.delete(n),yf(e,t)}var gf;gf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ke.current)ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ze=!1,Ng(e,n,t);ze=!!(e.flags&131072)}else ze=!1,ue&&n.flags&1048576&&_m(n,$r,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;wr(e,n),e=n.pendingProps;var i=hl(n,Ge.current);fl(n,t),i=ec(null,n,l,e,i,t);var r=nc();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Qe(l)?(r=!0,Ur(n)):r=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qs(n),i.updater=ga,n.stateNode=i,i._reactInternals=n,Xo(n,l,e,t),n=es(null,n,l,!0,r,t)):(n.tag=0,ue&&r&&Us(n),Be(null,n,i,t),n=n.child),n;case 16:l=n.elementType;e:{switch(wr(e,n),e=n.pendingProps,i=l._init,l=i(l._payload),n.type=l,i=n.tag=Wg(l),e=wn(l,e),i){case 0:n=Zo(null,n,l,e,t);break e;case 1:n=Ad(null,n,l,e,t);break e;case 11:n=Pd(null,n,l,e,t);break e;case 14:n=Nd(null,n,l,wn(l.type,e),t);break e}throw Error(D(306,l,""))}return n;case 0:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:wn(l,i),Zo(e,n,l,i,t);case 1:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:wn(l,i),Ad(e,n,l,i,t);case 3:e:{if(Jm(n),e===null)throw Error(D(387));l=n.pendingProps,r=n.memoizedState,i=r.element,Lm(e,n),zr(n,l,null,t);var a=n.memoizedState;if(l=a.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){i=Cl(Error(D(423)),n),n=Id(e,n,l,t,i);break e}else if(l!==i){i=Cl(Error(D(424)),n),n=Id(e,n,l,t,i);break e}else for(en=ct(n.stateNode.containerInfo.firstChild),nn=n,ue=!0,Ln=null,t=wm(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_l(),l===i){n=Yn(e,n,t);break e}Be(e,n,l,t)}n=n.child}return n;case 5:return km(n),e===null&&Ko(n),l=n.type,i=n.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,Wo(l,i)?a=null:r!==null&&Wo(l,r)&&(n.flags|=32),Xm(e,n),Be(e,n,a,t),n.child;case 6:return e===null&&Ko(n),null;case 13:return Zm(e,n,t);case 4:return Ys(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=xl(n,null,l,t):Be(e,n,l,t),n.child;case 11:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:wn(l,i),Pd(e,n,l,i,t);case 7:return Be(e,n,n.pendingProps,t),n.child;case 8:return Be(e,n,n.pendingProps.children,t),n.child;case 12:return Be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(l=n.type._context,i=n.pendingProps,r=n.memoizedProps,a=i.value,ae(Hr,l._currentValue),l._currentValue=a,r!==null)if(Nn(r.value,a)){if(r.children===i.children&&!Ke.current){n=Yn(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var o=r.dependencies;if(o!==null){a=r.child;for(var s=o.firstContext;s!==null;){if(s.context===l){if(r.tag===1){s=Hn(-1,t&-t),s.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),Qo(r.return,t,n),o.lanes|=t;break}s=s.next}}else if(r.tag===10)a=r.type===n.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(D(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Qo(a,t,n),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===n){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}Be(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,l=n.pendingProps.children,fl(n,t),i=fn(i),l=l(i),n.flags|=1,Be(e,n,l,t),n.child;case 14:return l=n.type,i=wn(l,n.pendingProps),i=wn(l.type,i),Nd(e,n,l,i,t);case 15:return Qm(e,n,n.type,n.pendingProps,t);case 17:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:wn(l,i),wr(e,n),n.tag=1,Qe(l)?(e=!0,Ur(n)):e=!1,fl(n,t),qm(n,l,i),Xo(n,l,i,t),es(null,n,l,!0,e,t);case 19:return ef(e,n,t);case 22:return Ym(e,n,t)}throw Error(D(156,n.tag))};function bf(e,n){return Wu(e,n)}function Ug(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,n,t,l){return new Ug(e,n,t,l)}function uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wg(e){if(typeof e=="function")return uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Is)return 11;if(e===Es)return 14}return 2}function ft(e,n){var t=e.alternate;return t===null?(t=dn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function kr(e,n,t,l,i,r){var a=2;if(l=e,typeof e=="function")uc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kt:return Et(t.children,i,r,n);case As:a=8,i|=8;break;case vo:return e=dn(12,t,n,i|2),e.elementType=vo,e.lanes=r,e;case Co:return e=dn(13,t,n,i),e.elementType=Co,e.lanes=r,e;case wo:return e=dn(19,t,n,i),e.elementType=wo,e.lanes=r,e;case ku:return _a(t,i,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Su:a=10;break e;case Lu:a=9;break e;case Is:a=11;break e;case Es:a=14;break e;case Zn:a=16,l=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return n=dn(a,t,n,i),n.elementType=e,n.type=l,n.lanes=r,n}function Et(e,n,t,l){return e=dn(7,e,l,n),e.lanes=t,e}function _a(e,n,t,l){return e=dn(22,e,l,n),e.elementType=ku,e.lanes=t,e.stateNode={isHidden:!1},e}function so(e,n,t){return e=dn(6,e,null,n),e.lanes=t,e}function co(e,n,t){return n=dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $g(e,n,t,l,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wa(0),this.expirationTimes=Wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mc(e,n,t,l,i,r,a,o,s){return e=new $g(e,n,t,o,s),n===1?(n=1,r===!0&&(n|=8)):n=0,r=dn(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:l,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qs(r),e}function Hg(e,n,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zt,key:l==null?null:""+l,children:e,containerInfo:n,implementation:t}}function hf(e){if(!e)return gt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(D(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Qe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(D(171))}if(e.tag===1){var t=e.type;if(Qe(t))return bm(e,t,n)}return n}function _f(e,n,t,l,i,r,a,o,s){return e=mc(t,l,!0,e,i,r,a,o,s),e.context=hf(null),t=e.current,l=Fe(),i=mt(t),r=Hn(l,i),r.callback=n??null,dt(t,r,i),e.current.lanes=i,Ti(e,i,l),Ye(e,l),e}function xa(e,n,t,l){var i=n.current,r=Fe(),a=mt(i);return t=hf(t),n.context===null?n.context=t:n.pendingContext=t,n=Hn(r,a),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=dt(i,n,a),e!==null&&(Pn(e,i,a,r),xr(e,i,a)),a}function na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function fc(e,n){Rd(e,n),(e=e.alternate)&&Rd(e,n)}function qg(){return null}var xf=typeof reportError=="function"?reportError:function(e){console.error(e)};function pc(e){this._internalRoot=e}va.prototype.render=pc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(D(409));xa(e,n,null,null)};va.prototype.unmount=pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gt(function(){xa(null,e,null,null)}),n[Kn]=null}};function va(e){this._internalRoot=e}va.prototype.unstable_scheduleHydration=function(e){if(e){var n=Yu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tt.length&&n!==0&&n<tt[t].priority;t++);tt.splice(t,0,e),t===0&&Ju(e)}};function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jd(){}function zg(e,n,t,l,i){if(i){if(typeof l=="function"){var r=l;l=function(){var c=na(a);r.call(c)}}var a=_f(n,l,e,0,null,!1,!1,"",jd);return e._reactRootContainer=a,e[Kn]=a.current,vi(e.nodeType===8?e.parentNode:e),Gt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof l=="function"){var o=l;l=function(){var c=na(s);o.call(c)}}var s=mc(e,0,!1,null,null,!1,!1,"",jd);return e._reactRootContainer=s,e[Kn]=s.current,vi(e.nodeType===8?e.parentNode:e),Gt(function(){xa(n,s,t,l)}),s}function wa(e,n,t,l,i){var r=t._reactRootContainer;if(r){var a=r;if(typeof i=="function"){var o=i;i=function(){var s=na(a);o.call(s)}}xa(n,a,e,i)}else a=zg(t,n,e,i,l);return na(a)}Ku=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Jl(n.pendingLanes);t!==0&&(Ts(n,t|1),Ye(n,xe()),!(ne&6)&&(wl=xe()+500,xt()))}break;case 13:Gt(function(){var l=Qn(e,1);if(l!==null){var i=Fe();Pn(l,e,1,i)}}),fc(e,1)}};Ms=function(e){if(e.tag===13){var n=Qn(e,134217728);if(n!==null){var t=Fe();Pn(n,e,134217728,t)}fc(e,134217728)}};Qu=function(e){if(e.tag===13){var n=mt(e),t=Qn(e,n);if(t!==null){var l=Fe();Pn(t,e,n,l)}fc(e,n)}};Yu=function(){return le};Xu=function(e,n){var t=le;try{return le=e,n()}finally{le=t}};Vo=function(e,n,t){switch(n){case"input":if(ko(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var i=fa(l);if(!i)throw Error(D(90));Nu(l),ko(l,i)}}}break;case"textarea":Iu(e,t);break;case"select":n=t.value,n!=null&&cl(e,!!t.multiple,n,!1)}};Bu=sc;Ou=Gt;var Kg={usingClientEntryPoint:!1,Events:[Gi,Jt,fa,Mu,Gu,sc]},ql={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qg={bundleType:ql.bundleType,version:ql.version,rendererPackageName:ql.rendererPackageName,rendererConfig:ql.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ju(e),e===null?null:e.stateNode},findFiberByHostInstance:ql.findFiberByHostInstance||qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lr.isDisabled&&lr.supportsFiber)try{ca=lr.inject(Qg),Mn=lr}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kg;ln.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(n))throw Error(D(200));return Hg(e,n,null,t)};ln.createRoot=function(e,n){if(!yc(e))throw Error(D(299));var t=!1,l="",i=xf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=mc(e,1,!1,null,null,t,!1,l,i),e[Kn]=n.current,vi(e.nodeType===8?e.parentNode:e),new pc(n)};ln.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=ju(n),e=e===null?null:e.stateNode,e};ln.flushSync=function(e){return Gt(e)};ln.hydrate=function(e,n,t){if(!Ca(n))throw Error(D(200));return wa(null,e,n,!0,t)};ln.hydrateRoot=function(e,n,t){if(!yc(e))throw Error(D(405));var l=t!=null&&t.hydratedSources||null,i=!1,r="",a=xf;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=_f(n,null,e,1,t??null,i,!1,r,a),e[Kn]=n.current,vi(e),l)for(e=0;e<l.length;e++)t=l[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new va(n)};ln.render=function(e,n,t){if(!Ca(n))throw Error(D(200));return wa(null,e,n,!1,t)};ln.unmountComponentAtNode=function(e){if(!Ca(e))throw Error(D(40));return e._reactRootContainer?(Gt(function(){wa(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};ln.unstable_batchedUpdates=sc;ln.unstable_renderSubtreeIntoContainer=function(e,n,t,l){if(!Ca(t))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return wa(e,n,t,!1,l)};ln.version="18.3.1-next-f1338f8080-20240426";function vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vf)}catch(e){console.error(e)}}vf(),xu.exports=ln;var Yg=xu.exports,Ud=Yg;_o.createRoot=Ud.createRoot,_o.hydrateRoot=Ud.hydrateRoot;const Xg=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"System Time",help:"Date and time the inverter will use to run schedules",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Year",arg:"Year",dtype:"Number",description:"",longdescription:"",range:{min:0,max:99},telemetry:{model:"40104",block:"fixed",point:"Year"}},{name:"Mon",arg:"Mon",dtype:"Number",description:"",longdescription:"",range:{min:1,max:12},telemetry:{model:"40104",block:"fixed",point:"Month"}},{name:"Day",arg:"Day",dtype:"Number",description:"",longdescription:"",range:{min:1,max:31},telemetry:{model:"40104",block:"fixed",point:"Day"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"Hour"}},{name:"Min",arg:"Min",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Minute"}},{name:"Sec",arg:"Sec",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Second"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"SystemTime"}},command_id:"Basic.SystemTime",widget:"datetime"},{title:"Grid Interaction",help:"Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Off-grid",1:"Grid-tied"},friendly_meanings:{0:"Off-Grid.  There is no available power grid",1:"Grid-Tied. Grid power is available."},telemetry:{model:"40104",block:"fixed",point:"OperatingMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"OperatingMode"}},command_id:"Basic.OperatingMode"},{title:"Operating Mode",help:"Select how solar power is prioritized. Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed). Export first: PV powers the home, then exports to grid, and charges the battery last. Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed). If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Self used mode",1:"Feed-in priority mode",2:"Back-up mode"},friendly_meanings:{0:"Self-consumption",1:"Export first",2:"Backup power"},telemetry:{model:"40104",block:"fixed",point:"WorkMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"WorkMode"}},command_id:"Basic.WorkMode"},{title:"Ignore Grid-Loss Warning",help:"When enabled, the inverter will not treat the absence of grid power as an alarm. Use this mode for permanently off-grid systems where grid connection is unavailable.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid-Loss Behavior",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Treat as Alarm",1:"Ignore (Off-Grid Mode)"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"GridLossWarningClear"}},command_id:"Basic.GridLossWarningClear"},{title:"Power Status",help:"Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"Other"},friendly_meanings:{0:"Standby",1:"Running"},telemetry:{model:"40104",block:"fixed",point:"PowerControl"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerStatus"}},command_id:"Basic.PowerStatus"},{title:"Reset to Factory Defaults",help:"Restores all inverter configuration parameters to their original factory values. Use with caution â€” this cannot be undone.",element_type:"service",access:"INVOKE",readOnly:!1,entries:[],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"AllToDefault"}},command_id:"Basic.AllToDefault",invokeButtonText:"Reset Now"},{title:"Inverter Power Control",help:`Turns the inverter output on or off.\r
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
Volt: Uses DC voltage limits instead.`,element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"ChargeCtrlType",dtype:"enum",description:"",longdescription:"",meanings:{0:"SOC",1:"Volt"},friendly_meanings:{0:"SOC",1:"Volt"},telemetry:{model:"40104",block:"fixed",point:"ChaDisChaCtrlType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChaDisChaCtrlType"}},command_id:"BatteryBase.ChaDisChaCtrlType"},{title:"Charge Limit (SOC)",help:"Sets the maximum state of charge (SOC) the battery will be charged to. Once the battery reaches this level, charging stops to prevent overcharging and extend lifespan.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ChargeLimitSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChargeLimitSoc"}},command_id:"BatteryBase.ChargeLimitSoc"},{title:"Max Battery Current",help:"Sets the maximum charging and discharging current allowed for the connected inverter. Choose the preset that matches your inverter model to automatically apply the correct limits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Charge Preset",arg:"MaxChargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxChargingCurrent"}},{name:"Max Discharge Preset",arg:"MaxDischargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxDischargingCurrent"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"MaxChaDisChaCurrent"}},command_id:"BatteryBase.MaxChaDisChaCurrent"},{title:"On-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to while grid power is available. Below this level, the inverter will stop discharging and switch to grid power to protect battery capacity.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 21-90%.  Must be higher than the Off-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OnGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OnGridCutOffSoc"}},command_id:"BatteryBase.OnGridCutOffSoc"},{title:"Off-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to when operating off-grid. Once the battery reaches this level, the inverter stops discharging to prevent deep discharge and maintain battery health.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 20-89%.  Must be lower than the On-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OffGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OffGridCutOffSoc"}},command_id:"BatteryBase.OffGridCutOffSoc"}]}]},{sectionTitle:"Battery Backup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Backup Mode",help:"Enables or disables battery-backup operation. When enabled, the inverter reserves part of the battery capacity to power critical loads during a grid outage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Backup Mode",1:"Enable Backup Mode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryBackupMode"}},command_id:"BatteryBackup.BatteryBackupMode"},{title:"Battery Reserve SOC",help:"While Battery Backup Mode is enabled, the battery will stop discharging once it reaches this level. When Backup Mode is disabled, normal operation applies and discharge will continue down to the On-Grid or Off-Grid Battery Cutoff SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryReserveSOC"}},command_id:"BatteryBackup.BatteryReserveSOC"}]}]},{sectionTitle:"Battery Scheduling",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Scheduling",help:"This is a special scheduling mode designed for certain time-of-use (TOU) utility rates or other custom situations. In most circumstances, we recomment allowing your system to  manage charging and discharging automatically without setting a schedule.  You don't need to set a schedule unless you have a specific reason to charge or discharge at exact times.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Scheduling",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Scheduling",1:"Enable the 'PV Charge Only' and 'Discharge Only' scheduling modes"},telemetry:{model:"40104",block:"fixed",point:"BatteryScheduling"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryScheduling",Element:"BatteryScheduling"}},command_id:"BatteryScheduling.BatteryScheduling"}]},{title:"PV Charge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Battery Charge Power During 'PV Charge Only' Periods",help:"Sets the maximum charging power during scheduled Time-of-Use (TOU) charge periods in kW. Set this limit to control the power level at which the battery will charge from the grid during PV charge only periods",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",unit:"kW",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pChgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUMaximumChargingPower"}},command_id:"BatteryTOUCharge.TOUMaximumChargingPower"},{title:"Schedule Window 1 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan1"}},command_id:"BatteryTOUCharge.TOUChargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan2"}},command_id:"BatteryTOUCharge.TOUChargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan3"}},command_id:"BatteryTOUCharge.TOUChargingPlan3",widget:"timerange"}]},{title:"Discharge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Inverter Output Power During 'Discharge Only' Periods",help:"Sets the maximum discharging power during scheduled Time-of-Use (TOU) discharge periods in kW. Limit this to control how much battery power is exported to loads or grid during those windows.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pDischgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUMaximumDischargingPower"}},command_id:"BatteryTOUDischarge.TOUMaximumDischargingPower"},{title:"TOU Discharge Stop SOC",help:"Sets the minimum state of charge (SOC) that the battery will discharge to during 'Discharge Only' operation. Once this level is reached, discharging stops to preserve reserve capacity for later use or backup.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"socDischgEndT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"DischargingStopSoc"}},command_id:"BatteryTOUDischarge.DischargingStopSoc"},{title:"Schedule Window 1 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan1"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan2"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan3"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan3",widget:"timerange"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Discharge only Control Style",help:"Selects how 'discharge only' is controlled. 'Discharge only' can stop when a voltage limit is reached or when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"DischargeOnlyControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{4:"Enable SOC control (disable for voltage control)"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.DischargeOnlyControlStyle"},{title:"Discharge only Stop Voltage",help:"Sets the battery voltage at which discharge only will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Discharge only Stop Voltage",arg:"DischargeOnlyStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:202,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischargeOnlyStopVoltage"}]}]},{sectionTitle:"Grid Charge",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Allow Battery Charging from Grid",help:"Enables the battery to charge from the utility grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid Charge",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Do not charge the battery from grid power",1:"Allowed"},telemetry:{model:"40104",block:"fixed",point:"ACChargeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeStatus"}},command_id:"ACCharge.ACChargeStatus"},{title:"Grid Charge Power Limit",help:"Sets the maximum power the inverter will draw from the grid for charging. This cap applies when Grid Charge is enabled (and within any configured time windows).",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Grid Charge Power (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ACChargePower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargePower"}},command_id:"ACCharge.ACChargePower"},{title:"Grid Charge Control Type",help:"Select whether grid charging follows a time schedule or SOC/voltage thresholds.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"Type",dtype:"enum",description:"",longdescription:"",unit:"%",meanings:{0:"according to time",1:"according to SOC/Volt"},friendly_meanings:{0:"By Time Schedule",1:"By SOC/Voltage"},telemetry:{model:"40104",block:"fixed",point:"ACChargeType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeType"}},command_id:"ACCharge.ACChargeType"},{title:"Grid Charge SOC Range",help:"Defines when grid charging starts and stops based on battery state of charge (SOC). Charging starts when SOC falls below Start SOC and stops when it reaches Stop SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"ACChgStartSOC"},protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}}},{name:"SOC",arg:"StopSOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:90},telemetry:{model:"40104",block:"fixed",point:"ACChgStopSOC"},greater_than:"StartSOC",protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStopSOC"}}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}},command_id:"ACCharge.ACChgSOCRange"},{title:"Grid Charge Windows",help:"During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Window 1 Start Hour",arg:"StartTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Hour"}},{name:"Window 1 Start Minute",arg:"StartTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Minute"}},{name:"Window 1 End Hour",arg:"EndTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Hour"}},{name:"Window 1 End Minute",arg:"EndTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Minute"}},{name:"Window 2 Start Hour",arg:"StartTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Hour"}},{name:"Window 2 Start Minute",arg:"StartTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Minute"}},{name:"Window 2 End Hour",arg:"EndTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Hour"}},{name:"Window 2 End Minute",arg:"EndTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Minute"}},{name:"Window 3 Start Hour",arg:"StartTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Hour"}},{name:"Window 3 Start Minute",arg:"StartTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Minute"}},{name:"Window 3 End Hour",arg:"EndTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Hour"}},{name:"Window 3 End Minute",arg:"EndTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargingPlan"}},command_id:"ACCharge.ACChargingPlan",widget:"timerange-multi"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Grid Charge Control Style",help:"Selects how grid charging is controlled. Charging can follow a time schedule, stop when a voltage limit is reached, or stop when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"GridChargeControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{1:"Charge based on time",2:"Stop charging at voltage limit",3:"Stop charging at SOC limit"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.GridChargeControlStyle"},{title:"Grid Charging Start Voltage",help:"Sets the battery voltage at which grid charging will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Start Voltage",arg:"GridChargingStartVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:158,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStartVoltage"},{title:"Grid Charging Stop Voltage",help:"Sets the maximum battery voltage during grid charging. Once this voltage is reached, the inverter will stop charging from the grid to protect the battery and prevent overvoltage.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Stop Voltage",arg:"GridChargingStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:159,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStopVoltage"}]}]},{sectionTitle:"Battery Base",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Max Charge Current",help:"Instead of using the presets, you may set the charge current directly in amps.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Charge Current (A)",arg:"ChargeCurr",dtype:"Number",description:"",longdescription:"",unit:"A",range:{min:0}}],protocol:{modbus:{address:101,register_type:3,size:1}},command_id:"Modbus.ChargeCurr"},{title:"Battery Voltage Correction",help:" ",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Battery Voltage Correction",arg:"BatteryVoltageCorrection",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:999,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischgCurr"}]}]}]},{themeName:"Grid",sections:[{sectionTitle:"Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Grid Parameters",help:"This setting changes the conditions under which the inverter will connect or disconnect from the utility grid. Different areas have different rules about when this equipment is allowed to disconnect and when it must ride through. Choose the code required by the local utility or AHJ.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Code",arg:"Code",dtype:"enum",description:"",longdescription:"",meanings:{0:"Default(UL-240-18)",1:"California(Rule 21)",2:"Hawaii(Rule 14)",3:"Puerto Rico LUMA",4:"KIUC"},friendly_meanings:{0:"Default UL-1741 / IEEE 1547",1:"California (Rule 21)",2:"Hawaii (Rule 14)",3:"Puerto Rico (LUMA)",4:"KIUC"},telemetry:{model:"40104",block:"fixed",point:"GridRegulation"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridRegulation"}},command_id:"GridBase.GridRegulation"},{title:"Grid Type",help:"Choose wiring configuration of the site.  This helps configure the system to match the power service at the site.  Note the voltage you enter here must match the EPS Voltage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Service Type",arg:"Type",dtype:"enum",description:"",longdescription:"",meanings:{0:"Split240V/120V",1:"3phase208V/120V",2:"Single240V",3:"Single230V",4:"Split200V/100V"},friendly_meanings:{0:"Split 240V / 120V",1:"3-Phase 208V / 120V",2:"Single 240V",3:"Single 230V",4:"Split 200V / 100V"},telemetry:{model:"40104",block:"fixed",point:"GridType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridType"}},command_id:"GridBase.GridType"},{title:"Grid Frequency",help:"Sets the nominal grid frequency for the installation. Use 60 Hz for North America and most split-phase installs; use 50 Hz for regions that operate at 230 V single-phase.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Frequency (Hz)",arg:"Freq",dtype:"enum",description:"",longdescription:"",meanings:{0:"50",1:"60"},friendly_meanings:{0:"50 Hz",1:"60 Hz"},telemetry:{model:"40104",block:"fixed",point:"GridFreq"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridFreq"}},command_id:"GridBase.GridFreq"}]}]},{sectionTitle:"Grid Protection",subsections:[{title:"Grid Protection Parameters",visibility:"default",collapsedByDefault:!0,points:[{title:"Grid Voltage Limits (Stage 1)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1"}},command_id:"GridProtection.GridVoltLimit1"},{title:"Grid Voltage Limits (Stage 2)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2"}},command_id:"GridProtection.GridVoltLimit2"},{title:"Grid Voltage Limits (Stage 3)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3"}},command_id:"GridProtection.GridVoltLimit3"},{title:"Grid Frequency Limits (Stage 1)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1"}},command_id:"GridProtection.GridFreqLimit1"},{title:"Grid Frequency Limits (Stage 2)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2"}},command_id:"GridProtection.GridFreqLimit2"},{title:"Grid Frequency Limits (Stage 3)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3"}},command_id:"GridProtection.GridFreqLimit3"},{title:"Grid Voltage Trip Time",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1Time"}},command_id:"GridProtection.GridVoltLimit1Time"},{title:"Grid Voltage Trip Time (Stage 2)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2Time"}},command_id:"GridProtection.GridVoltLimit2Time"},{title:"Grid Voltage Trip Time (Stage 3)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3Time"}},command_id:"GridProtection.GridVoltLimit3Time"},{title:"Grid Frequency Trip Time (Stage 1)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1Time"}},command_id:"GridProtection.GridFreqLimit1Time"},{title:"Grid Frequency Trip Time (Stage 2)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2Time"}},command_id:"GridProtection.GridFreqLimit2Time"},{title:"Grid Frequency Trip Time (Stage 3)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3Time"}},command_id:"GridProtection.GridFreqLimit3Time"}]}]},{sectionTitle:"Grid Connection",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Permit to Operate",help:"Shows whether the inverter is permitted to operate in grid-connected mode.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Permit Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not Permitted",1:"Permitted"},telemetry:{model:"40104",block:"fixed",point:"PermitServiceStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"PermitServiceStatus"}},command_id:"GridConnection.PermitServiceStatus"},{title:"Ramp Rate",help:"How quickly inverter output is allowed to increase.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Ramp Rate (%/sec)",arg:"Rate",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"RampRate"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"RampRate"}},command_id:"GridConnection.RampRate"},{title:"Applicable Grid Voltage Range",help:"Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Vac)",arg:"ApplicableVoltageLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageLow"}},{name:"Upper Limit (Vac)",arg:"ApplicableVoltageHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableVoltage"}},command_id:"GridConnection.ApplicableVoltage"},{title:"Applicable Grid Frequency Range",help:"Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Hz)",arg:"ApplicableFrequencyLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyLow"}},{name:"Upper Limit (Hz)",arg:"ApplicableFrequencyHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableFrequency"}},command_id:"GridConnection.ApplicableFrequency"},{title:"Connection Delay Times",help:"Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Connection Delay (s)",arg:"ConnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConnectionDelayTime"}},{name:"Reconnection Delay (s)",arg:"ReconnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReconnectionDelayTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"DelayTime"}},command_id:"GridConnection.DelayTime"}]}]},{sectionTitle:"Grid Support",subsections:[{title:"Constant Power Factor",visibility:"default",collapsedByDefault:!0,points:[{title:"Power Factor Mode",help:"Shows whether constant power-factor control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive â€” No PF control",1:"Active â€” Constant PF"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactorModeStatus"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactorModeStatus"},{title:"Power Factor Setpoint",help:"The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorExcited"}},{name:"Power Factor (PF)",arg:"PowerFactor",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactor"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactor"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactor"}]},{title:"Constant Reactive Power",visibility:"default",collapsedByDefault:!0,points:[{title:"Reactive Power Mode",help:"Shows whether constant reactive-power control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeExcited"}},{name:"Status",arg:"Status",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no reactive power control",1:"Active - reactive power control"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ConstantReactivePowerModeStatus"}},command_id:"ConstantReactivePowerMode.ConstantReactivePowerModeStatus"},{title:"Reactive Power Setpoint",help:"Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Reactive Power (%)",arg:"Power",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReactivePowerPercentCMD"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ReactivePowerPercentCMD"}},command_id:"ConstantReactivePowerMode.ReactivePowerPercentCMD"}]},{title:"Volt-VAR (Voltage-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-VAR Mode",help:"Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-VAR control",1:"Active - Volt-VAR control"},telemetry:{model:"40104",block:"fixed",point:"VoltageReactivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VoltageReactivePowerMode"}},command_id:"VoltageReactivePowerMode.VoltageReactivePowerMode"},{title:"Autonomous Vref Adjustment",help:"Indicates whether the inverter autonomously adjusts its reference voltage (Vref).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Autonomous Adjustment",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"AutonomousVrefAdjustment"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"AutonomousVrefAdjustment"}},command_id:"VoltageReactivePowerMode.AutonomousVrefAdjustment"},{title:"Reference Voltage (Vref)",help:"Voltage reference used for Volt-VAR calculations.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Vref",arg:"Verf",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Verf"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Verf"}},command_id:"VoltageReactivePowerMode.Verf"},{title:"Vref Adjustment Time Constant",help:"Time constant applied when adjusting Vref.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Time Constant",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VrefAdjustmentTimeConstant"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VrefAdjustmentTimeConstant"}},command_id:"VoltageReactivePowerMode.VrefAdjustmentTimeConstant"},{title:"Volt-VAR Voltage Breakpoints",help:"Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"V1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV1"}},{name:"V2 (Voltage Point 2)",arg:"V2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV2"}},{name:"V3 (Voltage Point 3)",arg:"V3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV3"}},{name:"V4 (Voltage Point 4)",arg:"V4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"UnderOverVoltage"}},command_id:"VoltageReactivePowerMode.UnderOverVoltage"},{title:"Reactive Power Setpoint Q1",help:"Reactive power at voltage point V1 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q1 (Reactive Setpoint 1)",arg:"Q1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q1"}},command_id:"VoltageReactivePowerMode.Q1"},{title:"Reactive Power Setpoint Q2",help:"Reactive power at voltage point V2 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q2 (Reactive Setpoint 2)",arg:"Q2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q2"}},command_id:"VoltageReactivePowerMode.Q2"},{title:"Reactive Power Setpoint Q3",help:"Reactive power at voltage point V3 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q3 (Reactive Setpoint 3)",arg:"Q3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q3"}},command_id:"VoltageReactivePowerMode.Q3"},{title:"Reactive Power Setpoint Q4",help:"Reactive power at voltage point V4 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q4 (Reactive Setpoint 4)",arg:"Q4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q4"}},command_id:"VoltageReactivePowerMode.Q4"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-VAR changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VqOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageReactivePowerMode.OpenLoopResponseTime"}]},{title:"P-Q Mode (Active-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"P-Q Mode Status",help:"Shows whether Active/Reactive Power (P-Q) control mode is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no P-Q control",1:"Active - P-Q control"},telemetry:{model:"40104",block:"fixed",point:"PQModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"PQModeStatus"}},command_id:"ActivePowerReactivePowerMode.PQModeStatus"},{title:"P-Q Curve Points",help:"Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P1 Setpoint",arg:"P1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP1"}},{name:"P2 Setpoint",arg:"P2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP2"}},{name:"P3 Setpoint",arg:"P3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"P_QP"}},command_id:"ActivePowerReactivePowerMode.P_QP"}]},{title:"Volt-Watt (Voltage-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-Watt Mode",help:"Shows whether Volt-Watt (voltage-active power) control is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-Watt control",1:"Active - Volt-Watt control"},telemetry:{model:"40104",block:"fixed",point:"VoltageActivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltageActivePowerMode"}},command_id:"VoltageActivePowerMode.VoltageActivePowerMode"},{title:"Volt-Watt Voltage Breakpoints",help:"Voltage points that define the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"VoltWattV1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV1"}},{name:"V2 (Voltage Point 2)",arg:"VoltWattV2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattV"}},command_id:"VoltageActivePowerMode.VoltWattV"},{title:"Volt-Watt Power Setpoint",help:"Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P2 Setpoint",arg:"VoltWattP2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattP2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattP2"}},command_id:"VoltageActivePowerMode.VoltWattP2"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-Watt changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"VoltWattOpenLoopResponseTime",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageActivePowerMode.OpenLoopResponseTime"}]},{title:"Freq-Watt (Frequency-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Frequency-Active Power Mode",help:"Indicates whether frequency-power (Freq-Watt) control is currently enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"FrequencyActivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"FrequencyActivePowerModeStatus"}},command_id:"FrequencyActivePowerMode.FrequencyActivePowerModeStatus"},{title:"Open-Loop Response Time",help:"Response time applied to open-loop frequency-power adjustments.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"FreqWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"FrequencyActivePowerMode.OpenLoopResponseTime"},{title:"Over-Frequency Droop: Deadband",help:"Over Frequency Droop dbOF â€” Deadband around nominal frequency before active power reduction begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",unit:"Hz",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_dbOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_dbOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_dbOF"},{title:"Over-Frequency Droop: Gain (k)",help:"Over Frequency Droop kOF â€” Slope (gain k) of active power reduction versus frequency rise above nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_kOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_kOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_kOF"},{title:"Under-Frequency Droop: Deadband",help:"Under Frequency Droop dbUF â€” Deadband around nominal frequency before active power increase/response begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_dbUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_dbUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_dbUF"},{title:"Under-Frequency Droop: Gain (k)",help:"Under Frequency Droop kUF â€” Slope (gain k) of active power response versus frequency drop below nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_kUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_kUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_kUF"}]}]}]},{themeName:"Backup Power",sections:[{sectionTitle:"Backup Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Off-Grid Output",help:"Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"OffGridOutput"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"OffGridOutput"}},command_id:"BackupPower.OffGridOutput"},{title:"Backup (EPS) Output Voltage",help:"Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage (Vac)",arg:"Voltage",dtype:"enum",description:"",longdescription:"",unit:"Vac",meanings:{0:"208",1:"220",2:"230",3:"240",4:"277"},friendly_meanings:{0:"208 V",1:"220 V",2:"230 V",3:"240 V",4:"277 V"},telemetry:{model:"40104",block:"fixed",point:"EPSVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"EPSVoltage"}},command_id:"BackupPower.EPSVoltage"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Port Connection",help:"If using a generator, select which port it's connected to â€” either the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Generator connected to",arg:"Port",dtype:"enum",description:"",longdescription:"",meanings:{0:"GeneratorPort",1:"GridPort"},friendly_meanings:{0:"GEN port (also select if not using generator).",1:"Grid port (aka microgrid mode)"},telemetry:{model:"40104",block:"fixed",point:"LinkedPort"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"LinkedPort"}},command_id:"Generator.LinkedPort"},{title:"Battery Charge Current Limit",help:"Sets the maximum DC current the inverter will send to the battery when charging from the generator.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Charge Current (Adc)",arg:"Current",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"BatteryChargeCurrentLimit"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"BatteryChargeCurrentLimit"}},command_id:"Generator.BatteryChargeCurrentLimit"},{title:"Generator Rated Power",help:"Specify the generator's continuous rated output power.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Rated Power (kW)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"GeneratorRatedPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorRatedPower"}},command_id:"Generator.GeneratorRatedPower"},{title:"Generator Cool-Down Time",help:"Sets the time the generator continues running after charging stops to allow for safe cooling.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Cool-Down Time (min)",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GeneratorCoolDownTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorCoolDownTime"}},command_id:"Generator.GeneratorCoolDownTime"},{title:"Generator Start/Stop SOC",help:"Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"Generator starts when battery drops to this level",longdescription:"",unit:"%",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socGenStart"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"Generator stops when battery charges to this level",longdescription:"",unit:"%",range:{min:5,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socGenEnd"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorSOC"}},command_id:"Generator.GeneratorSOC"},{title:"Generator Contactor Status",help:"Indicates the current state of the generator control contactor.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Contactor State",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"OFF",1:"ON"},friendly_meanings:{0:"Closed / On",1:"Open / Off"},telemetry:{model:"40101",block:"fixed",point:"genDryContactState"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GenDryContact"}},command_id:"Generator.GenDryContact"},{title:"Battery Quick Charge with Generator",help:"Start the generator to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Stop quick charge",1:"Start quick charge"},telemetry:{model:"40104",block:"fixed",point:"StartGeneratorExercise"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"StartGeneratorExercise"}},command_id:"Generator.StartGeneratorExercise"},{title:"Generator Boost",help:"Enables dynamic adjustment of generator charging power for faster battery recovery when needed.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"GeneratorBoost"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorBoost"}},command_id:"Generator.GeneratorBoost"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Generator Charge Mode",help:"Selects how the generator charges the battery. When enabled, the generator will charge the battery automatically based on voltage or SOC.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Mode",arg:"GenChg",dtype:"enum",description:"",longdescription:"",meanings:{0:"Based on SOC",1:"Based on Voltage"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.GenChg"},{title:"Generator Charge Start Voltage",help:"Sets the battery voltage at which the generator begins charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Start Voltage",arg:"GenChgStartVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:194,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgStartVolt"},{title:"Generator Charge End Voltage",help:"Sets the battery voltage at which the generator stops charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge End Voltage",arg:"GenChgEndVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:195,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgEndVolt"}]},{title:"Generator Exercise",visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Exercise Schedule",help:"Configure a recurring schedule for generator exercise runs. Select the day of the week and time when the generator should run automatically.",element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Day of Week",arg:"DayOfWeek",dtype:"enum",description:"",longdescription:"",meanings:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23}},{name:"Minute",arg:"Minute",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59}}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Plan",Element:"GeneratorExercise"}},command_id:"CGI.GeneratorExercise",widget:"generator-exercise",showRefresh:!0,showSetButton:!0}]}]}]},{themeName:"AC Coupled PV",sections:[{sectionTitle:"AC Coupled PV",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"AC Coupled PV",help:"Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"AC Coupled PV Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"ACCoupledPV"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCoupledPV"}},command_id:"ACCoupledPV.ACCoupledPV"},{title:"AC Coupled PV Start/Stop SOC",help:"Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"AC Coupled PV begins charging when SOC drops to this level",longdescription:"",unit:"%",range:{min:0,max:100},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOn"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"AC Coupled PV stops charging when SOC reaches this level",longdescription:"",unit:"%",range:{min:0,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOff"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCouplePVSOC"}},command_id:"ACCoupledPV.ACCouplePVSOC"}]}]}]},{themeName:"Smart Load",sections:[{sectionTitle:"Smart Load",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Use Smart Load",help:"Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disabled",1:"Enabled"},telemetry:{model:"40104",block:"fixed",point:"SmartLoad"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoad"}},command_id:"LoadShedding.SmartLoad"},{title:"Smart Load On-Grid Behavior",help:"Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"On-Grid Always-On Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Follow normal rules",1:"Always On When Grid Present"},telemetry:{model:"40104",block:"fixed",point:"OnGridAlwaysOn"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"OnGridAlwaysOn"}},command_id:"LoadShedding.OnGridAlwaysOn"},{title:"Smart Load Start Power",help:"Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"PV Power Above (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"StartPVPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"StartPVPower"}},command_id:"LoadShedding.StartPVPower"},{title:"Smart Load SOC Limits",help:"Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start When Battery SOC Is Above (%)",arg:"OnSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},less_than:"OffSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOnSoc"}},{name:"Stop When Battery SOC Is Below (%)",arg:"OffSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},greater_than:"OnSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoadSOC"}},command_id:"LoadShedding.SmartLoadSOC"}]}]}]}],Jg={themes:Xg},ir=[{id:"envy-04237218B0",label:"⭐ Envy - 04237218B0",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237218B0"},modbusSlaveId:1},{id:"envy-04237219C3",label:"Envy - 04237219C3",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237219C3"},modbusSlaveId:2}],Zg=void 0;function eb(e,n){const[t,l]=j.useState(e),[i,r]=j.useState(n),[a,o]=j.useState(!1),[s,c]=j.useState(null);return j.useEffect(()=>{},[]),{pageRegistry:t,pageLookup:i,isLoading:a,loadError:s,themeFile:Zg}}function nb(){const[e,n]=j.useState("");return j.useEffect(()=>{const t=()=>{const l=document.querySelectorAll('[id^="theme-"]');let i="";l.forEach(r=>{const a=r.getBoundingClientRect();a.top<=window.innerHeight*.3&&a.bottom>0&&(i=r.id)}),i&&i!==e&&n(i)};return t(),window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),e}function tb(){const[e,n]=j.useState(""),t=j.useCallback((l,i)=>{var a,o,s,c;if(!i.trim())return{matches:!0,helpTextMatch:!1};const r=i.toLowerCase();if((a=l.title)!=null&&a.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1};if((o=l.help)!=null&&o.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!0};for(const u of l.entries){if((s=u.name)!=null&&s.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1};if(u.friendly_meanings){for(const m of Object.values(u.friendly_meanings))if(m.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1}}if((c=u.description)!=null&&c.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1}}return{matches:!1,helpTextMatch:!1}},[]);return{searchQuery:e,setSearchQuery:n,pointMatchesSearch:t}}function lb({themes:e,activeSection:n,selectedEquipmentId:t,onEquipmentChange:l,equipmentOptions:i}){return d.jsxs("aside",{className:"w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[11px] text-slate-500 uppercase font-medium mb-1 block",children:"Equipment"}),d.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800",value:t,onChange:r=>l(r.target.value),children:i.map(r=>d.jsx("option",{value:r.id,children:r.label},r.id))})]}),d.jsxs("nav",{className:"text-sm text-slate-800",children:[d.jsx("div",{className:"text-emerald-600 font-semibold mb-2",children:"Navigation"}),d.jsxs("div",{className:"flex flex-col gap-3",children:[e.map((r,a)=>{const o=`theme-${a}`,s=n===o||n.startsWith(`${o}-section`);return d.jsxs("div",{children:[d.jsxs("div",{className:"relative",children:[s&&d.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r"}),d.jsx("button",{className:`font-semibold text-xs uppercase tracking-wide mb-1 px-2 hover:text-emerald-600 transition-colors w-full text-left ${s?"text-emerald-600":"text-slate-900"}`,onClick:()=>{var c;(c=document.getElementById(o))==null||c.scrollIntoView({behavior:"smooth",block:"start"})},children:r.themeName})]}),d.jsx("ul",{className:"pl-2 flex flex-col gap-1 text-slate-700",children:r.sections.map((c,u)=>{const m=`${o}-section-${u}`,y=n===m;return d.jsxs("li",{className:"relative",children:[y&&d.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),d.jsx("button",{className:`px-2 py-1 hover:bg-slate-50 rounded text-xs w-full text-left transition-colors ${y?"text-blue-600 font-medium bg-blue-50":"text-slate-700"}`,onClick:()=>{var f;(f=document.getElementById(m))==null||f.scrollIntoView({behavior:"smooth",block:"start"})},children:c.sectionTitle})]},`${c.sectionTitle}-${u}`)})})]},`${r.themeName}-${a}`)}),!e.length&&d.jsx("div",{className:"text-xs text-slate-500",children:"No themes defined."})]})]})]})}function ib({searchQuery:e,onSearchChange:n,lastUpdatedLabel:t}){return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-xs text-slate-500",children:["Last Updated At: ",t]}),d.jsx("div",{className:"flex flex-col md:flex-row md:items-start gap-3 md:gap-4",children:d.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[d.jsx("div",{className:"text-xl font-semibold text-slate-900 leading-tight",children:"Site Configuration"}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"relative flex-1 max-w-md",children:[d.jsx("input",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800",placeholder:"Search…",value:e,onChange:l=>n(l.target.value)}),e&&d.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",onClick:()=>n(""),title:"Clear search",children:"✕"})]}),d.jsxs("button",{className:"text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1",children:[d.jsx("span",{children:"⟳"}),d.jsx("span",{children:"Refresh"})]})]})]})})]})}function rb(e){const n={};if(e.widget==="generator-exercise")return e.entries.forEach(i=>{i.dtype,n[i.arg]=""}),n;const t=e.entries.filter(i=>i.dtype==="Number"&&i.range!==void 0),l=t.length>=2;return e.entries.forEach((i,r)=>{var a,o;if(i.value!==void 0){n[i.arg]=i.dtype==="Number"&&i.value!==""?Number(i.value):i.value;return}if(i.dtype==="Number"){const s=i.range;if(!s){n[i.arg]=0;return}if(l){const c=s.max-s.min,u=r/Math.max(t.length-1,1);i.less_than?n[i.arg]=Math.round(s.min+c*.3):i.greater_than?n[i.arg]=Math.round(s.min+c*.7):n[i.arg]=Math.round(s.min+c*u)}else n[i.arg]=s.min;return}if(i.dtype==="enum"){const s=Object.keys(i.meanings??{})[0];if(s){const c=((a=i.friendly_meanings)==null?void 0:a[s])??((o=i.meanings)==null?void 0:o[s])??"";n[i.arg]=c}else n[i.arg]="";return}if(i.dtype&&i.dtype.startsWith("bitfield")){const s={};i.meanings&&Object.keys(i.meanings).forEach(c=>{s[c]=!1}),n[i.arg]=s;return}n[i.arg]=""}),n}function ab(e,n){const t=e.entries.some(i=>{var r;return(r=i.protocol)==null?void 0:r.matter});let l;return t?l=e.entries.filter(i=>{var r;return(r=i.protocol)==null?void 0:r.matter}).map(i=>({MEP:i.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:i.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:i.protocol.matter.Element||e.protocol.matter.Element})):l=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:l,thingId:n}}}function ob(e,n,t){const l=e.entries.some(r=>{var a;return(a=r.protocol)==null?void 0:a.matter});let i;return l?i=e.entries.filter(r=>{var a;return(a=r.protocol)==null?void 0:a.matter}).map(r=>({MEP:r.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:r.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:r.protocol.matter.Element||e.protocol.matter.Element,arguments:{[r.arg]:n[r.arg]}})):i=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:n}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:e.element_type==="service"||e.access==="Invoke"?"Invoke":"Write",data:{Elements:i,thingId:t}}}function sb(e,n){const l=e.protocol.modbus.register_type===3?3:4;return{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Read",timeout:5,data:{type:"RTU",uartPort:1,slaveId:n,address:e.protocol.modbus.address,function:l,registerNumber:e.protocol.modbus.size}}}function cb(e,n,t){var a;const l=e.protocol.modbus.size>1?16:6,i=(a=e.entries[0])==null?void 0:a.arg;let r=i?n[i]:0;return e.protocol.modbus&&typeof r=="number"&&(r=Math.round(r)),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:t,address:e.protocol.modbus.address,function:l,value:r}}}function db(e,n){return{version:"1.0",requestId:Date.now(),method:"Read",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,Element:e.protocol.cgi.Element,thingId:n}}}function ub(e,n,t){const l=n.DayOfWeek!==""&&n.DayOfWeek!==null&&n.DayOfWeek!==void 0?typeof n.DayOfWeek=="number"?n.DayOfWeek:parseInt(String(n.DayOfWeek),10):0,i=n.Hour!==""&&n.Hour!==null&&n.Hour!==void 0?typeof n.Hour=="number"?n.Hour:parseInt(String(n.Hour),10):0,a=`${n.Minute!==""&&n.Minute!==null&&n.Minute!==void 0?typeof n.Minute=="number"?n.Minute:parseInt(String(n.Minute),10):0} ${i} * * ${l}`;return{version:"1.0",requestId:Date.now(),method:"Invoke",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,cronTimer:a,Element:e.protocol.cgi.Element,thingId:t}}}function mb(e,n){const t={...n},l=e.protocol.modbus!==void 0||e.protocol.cgi!==void 0;return e.entries.forEach(i=>{if(i.dtype!=="enum"||!i.meanings)return;const r=t[i.arg];if(r==null||r==="")return;const a=Object.entries(i.meanings).find(([o,s])=>{var u;const c=((u=i.friendly_meanings)==null?void 0:u[o])??s;return r===c||r===s});a&&(t[i.arg]=l?parseInt(a[0],10):a[1])}),t}function fb(e,n){const t={...n};return e.entries.forEach(l=>{if(!l.dtype||!l.dtype.startsWith("bitfield"))return;const i=t[l.arg]||{};let r=0;Object.entries(i).forEach(([a,o])=>{o&&(r|=1<<parseInt(a,10))}),t[l.arg]=r}),t}function pb(e,n){var i,r;const t=n.thingId,l=n.modbusSlaveId;return e.element_type==="custom"&&e.widget==="generator-exercise"&&((i=e.protocol)!=null&&i.cgi)?db(e,t):(r=e.protocol)!=null&&r.matter?ab(e,t):e.protocol.modbus?sb(e,l):{}}function yb(e,n,t){var a,o;const l=t.thingId,i=t.modbusSlaveId;let r=mb(e,n);return r=fb(e,r),e.element_type==="custom"&&e.widget==="generator-exercise"&&((a=e.protocol)!=null&&a.cgi)?ub(e,r,l):(o=e.protocol)!=null&&o.matter?ob(e,r,l):e.protocol.modbus?cb(e,r,i):{}}function gb(e,n){const[t,l]=j.useState(rb(e)),i=j.useCallback((o,s)=>{l(c=>({...c,[o]:s}))},[]),r=j.useCallback(()=>pb(e,n),[e,n]),a=j.useCallback(()=>yb(e,t,n),[e,t,n]);return{formState:t,setFormState:l,handleFieldChange:i,handleRefresh:r,handleSet:a}}function rr(){const[e,n]=j.useState(!1),[t,l]=j.useState(null),i=j.useCallback(o=>{o!==void 0&&l(o),n(!0)},[]),r=j.useCallback(()=>{n(!1)},[]),a=j.useCallback(()=>{n(o=>!o)},[]);return{isOpen:e,data:t,open:i,close:r,toggle:a,setData:l}}const bb=({onClick:e})=>d.jsx("button",{type:"button",onClick:e,className:"text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer",children:"i"}),hb=()=>d.jsx("span",{className:"text-base leading-none",children:"⟳"}),_b=()=>d.jsx("span",{className:"text-base leading-none",children:"🕐"}),xb=()=>d.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-500 border border-slate-300 font-medium",children:"Read Only"});function vb({point:e,readOnly:n,helpTextMatch:t=!1,shouldShowHistory:l,shouldShowRefresh:i,shouldShowSetButton:r,setButtonAppearance:a,onHelpClick:o,onHistoryClick:s,onRefreshClick:c,onSetClick:u}){return d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-3",children:[d.jsxs("div",{className:"flex items-start gap-2",children:[d.jsx("div",{className:"text-slate-800 text-sm font-semibold leading-tight",children:e.title}),e.help&&d.jsxs("div",{className:"mt-0.5 relative",children:[d.jsx(bb,{onClick:o}),t&&d.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"})]}),n&&d.jsx(xb,{})]}),d.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l&&d.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"View historical data",onClick:s,children:d.jsx(_b,{})}),i&&d.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"Refresh from device",onClick:c,children:d.jsx(hb,{})}),r&&d.jsx("button",{className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${a}`,disabled:n,onClick:u,children:"Set"})]})]})}function Cb({point:e,formState:n,readOnly:t,onChange:l}){const i=e.entries.find(o=>o.arg==="Sec"),r=()=>{const o=n.Hour??0,s=n.Min??0,c=(n.Year??0)+2e3,u=String(n.Mon??1).padStart(2,"0"),m=String(n.Day??1).padStart(2,"0"),y=String(o).padStart(2,"0"),f=String(s).padStart(2,"0");return`${c}-${u}-${m}T${y}:${f}`},a=o=>{const s=new Date(o),c=s.getHours(),u=s.getMinutes();l("Year",s.getFullYear()-2e3),l("Mon",s.getMonth()+1),l("Day",s.getDate()),l("Hour",c),l("Min",u),i&&l("Sec",0)};return d.jsx("div",{className:"flex flex-col gap-2",children:d.jsx("input",{type:"datetime-local",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:r(),onChange:o=>a(o.target.value)})})}const ei="00:00";function ta({label:e,value:n,readOnly:t,onChange:l,onClear:i}){const r=!t&&n!==ei;return d.jsxs("div",{className:"w-[150px] flex-shrink-0 flex flex-col gap-1",children:[d.jsx("label",{className:"text-slate-600 text-xs font-medium",children:e}),d.jsxs("div",{className:"relative",children:[d.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:n,onChange:a=>l(a.target.value)}),r&&d.jsx("button",{type:"button",className:"absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700",onClick:i,"aria-label":`Clear ${e.toLowerCase()}`,children:"✕"})]})]})}function Cf({point:e,formState:n,readOnly:t,onChange:l}){const i=e.entries.find(b=>b.arg.includes("StartHour")||b.arg.includes("Start_hour")||b.arg.includes("StartTime_h")),r=e.entries.find(b=>b.arg.includes("StartMin")||b.arg.includes("Start_minute")||b.arg.includes("StartTime_m")),a=e.entries.find(b=>b.arg.includes("EndHour")||b.arg.includes("End_hour")||b.arg.includes("EndTime_h")),o=e.entries.find(b=>b.arg.includes("EndMin")||b.arg.includes("End_minute")||b.arg.includes("EndTime_m")),s=()=>{if(i&&r){const b=String(n[i.arg]??0).padStart(2,"0"),_=String(n[r.arg]??0).padStart(2,"0");return`${b}:${_}`}return ei},c=()=>{if(a&&o){const b=String(n[a.arg]??0).padStart(2,"0"),_=String(n[o.arg]??0).padStart(2,"0");return`${b}:${_}`}return ei},u=b=>{const[_,g]=b.split(":"),p=parseInt(_,10),h=parseInt(g,10);i&&r&&(l(i.arg,p),l(r.arg,h))},m=b=>{const[_,g]=b.split(":"),p=parseInt(_,10),h=parseInt(g,10);a&&o&&(l(a.arg,p),l(o.arg,h))},y=()=>{t||(u(ei),m(ei))},f=s(),x=c();return d.jsxs("div",{className:"flex items-end gap-4",children:[d.jsx(ta,{label:"Start Time",value:f,readOnly:t,onChange:u,onClear:y}),d.jsx(ta,{label:"End Time",value:x,readOnly:t,onChange:m,onClear:y})]})}function wb({point:e,formState:n,readOnly:t,onChange:l}){const i=new Map;e.entries.forEach(c=>{const u=c.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);if(!u)return;const[,m,y,f]=u,x=parseInt(y,10);i.has(x)||i.set(x,{id:x});const b=i.get(x),_=f.toLowerCase();m.toLowerCase()==="starttime"?_==="h"?b.startHourArg=c.arg:b.startMinArg=c.arg:_==="h"?b.endHourArg=c.arg:b.endMinArg=c.arg});const r=Array.from(i.values()).sort((c,u)=>c.id-u.id);if(r.length===0)return d.jsx(Cf,{point:e,formState:n,readOnly:t,onChange:l});const a=(c,u)=>{const m=c!==void 0?n[c]:0,y=u!==void 0?n[u]:0,f=typeof m=="number"?m:parseInt(m??0,10)||0,x=typeof y=="number"?y:parseInt(y??0,10)||0;return`${String(f).padStart(2,"0")}:${String(x).padStart(2,"0")}`},o=(c,u,m)=>{const[y,f]=m.split(":"),x=parseInt(y,10),b=parseInt(f,10);u==="start"?(c.startHourArg&&l(c.startHourArg,x),c.startMinArg&&l(c.startMinArg,b)):(c.endHourArg&&l(c.endHourArg,x),c.endMinArg&&l(c.endMinArg,b))},s=c=>{t||(c.startHourArg&&l(c.startHourArg,0),c.startMinArg&&l(c.startMinArg,0),c.endHourArg&&l(c.endHourArg,0),c.endMinArg&&l(c.endMinArg,0))};return d.jsx("div",{className:"flex flex-col gap-4",children:r.map(c=>{const u=a(c.startHourArg,c.startMinArg),m=a(c.endHourArg,c.endMinArg),y=()=>s(c);return d.jsxs("div",{className:"flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3",children:[d.jsxs("div",{className:"text-xs font-semibold uppercase text-slate-600",children:["Grid Charge Window ",c.id]}),d.jsxs("div",{className:"flex items-end gap-4",children:[d.jsx(ta,{label:"Start Time",value:u,readOnly:t,onChange:f=>o(c,"start",f),onClear:y}),d.jsx(ta,{label:"End Time",value:m,readOnly:t,onChange:f=>o(c,"end",f),onClear:y})]})]},c.id)})})}function Sb({formState:e,readOnly:n,onChange:t}){const l=e.DayOfWeek!==""?e.DayOfWeek:null,i=e.Hour!==""?e.Hour:null,r=e.Minute!==""?e.Minute:null,a=()=>i===null||r===null?"":`${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`,o=u=>{if(!u){t("Hour",""),t("Minute","");return}const[m,y]=u.split(":");t("Hour",parseInt(m,10)),t("Minute",parseInt(y,10))},s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let c="No schedule configured";return l!==null&&i!==null&&r!==null&&(c=`Every ${s[l]} at ${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`),d.jsxs("div",{className:"flex flex-col gap-4",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{className:"flex flex-col gap-1",children:[d.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Day of Week"}),d.jsxs("select",{className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:l!==null?l:"",onChange:u=>t("DayOfWeek",u.target.value===""?"":Number(u.target.value)),children:[d.jsx("option",{value:"",children:"Select day..."}),s.map((u,m)=>d.jsx("option",{value:m,children:u},m))]})]}),d.jsxs("div",{className:"flex flex-col gap-1",children:[d.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Time"}),d.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:a(),onChange:u=>o(u.target.value)})]})]}),d.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-3",children:[d.jsx("div",{className:"text-xs text-slate-600 font-medium mb-1",children:"Schedule Preview"}),d.jsx("div",{className:"text-sm text-slate-800",children:c})]})]})}function Lb({entries:e,formState:n,readOnly:t,onChange:l}){var b;const[i,r]=j.useState(null),a=j.useRef(null),o=[{bg:"bg-emerald-500",text:"text-emerald-600",border:"border-emerald-500"},{bg:"bg-rose-500",text:"text-rose-600",border:"border-rose-500"},{bg:"bg-blue-500",text:"text-blue-600",border:"border-blue-500"},{bg:"bg-purple-500",text:"text-purple-600",border:"border-purple-500"},{bg:"bg-orange-500",text:"text-orange-600",border:"border-orange-500"},{bg:"bg-pink-500",text:"text-pink-600",border:"border-pink-500"},{bg:"bg-indigo-500",text:"text-indigo-600",border:"border-indigo-500"},{bg:"bg-teal-500",text:"text-teal-600",border:"border-teal-500"},{bg:"bg-cyan-500",text:"text-cyan-600",border:"border-cyan-500"},{bg:"bg-amber-500",text:"text-amber-600",border:"border-amber-500"},{bg:"bg-lime-500",text:"text-lime-600",border:"border-lime-500"},{bg:"bg-fuchsia-500",text:"text-fuchsia-600",border:"border-fuchsia-500"}],s=(b=e[0])==null?void 0:b.range;if(!s)return null;const{min:c,max:u}=s,m=_=>{let g=c,p=u;if(_.greater_than){const h=n[_.greater_than];typeof h=="number"&&(g=Math.max(g,h+1))}if(_.less_than){const h=n[_.less_than];typeof h=="number"&&(p=Math.min(p,h-1))}return{min:g,max:p}},y=(_,g)=>{const p=m(_),h=Math.max(p.min,Math.min(p.max,g));l(_.arg,h)},f=(_,g)=>{if(t)return;g.preventDefault(),r(_);const p=a.current;if(!p)return;const h=w=>{const L=p.getBoundingClientRect(),k=w.clientX-L.left,v=Math.max(0,Math.min(100,k/L.width*100)),V=Math.round(c+v/100*(u-c));y(e[_],V)},C=()=>{r(null),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",C)},x=e.length>=8?"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4":"grid-cols-2";return d.jsxs("div",{className:"flex flex-col gap-3 text-sm",children:[d.jsx("div",{className:`grid ${x} gap-3`,children:e.map((_,g)=>{const p=o[g%o.length],h=n[_.arg]??c,C=m(_);return d.jsxs("div",{className:"flex flex-col gap-1",children:[d.jsxs("div",{className:`text-[11px] uppercase font-semibold flex items-center gap-1.5 ${p.text}`,children:[d.jsx("span",{className:`w-2 h-2 rounded-full ${p.bg}`}),d.jsx("span",{children:_.name??""}),_.unit&&d.jsx("span",{className:"text-[10px] text-slate-400 uppercase ml-auto",children:_.unit})]}),d.jsx("input",{type:"number",className:`w-full rounded border ${p.border} bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500`,disabled:t,value:h,min:C.min,max:C.max,onChange:w=>{const L=w.target.value===""?C.min:Number(w.target.value);y(_,L)}})]},_.arg)})}),d.jsxs("div",{className:"relative w-full pt-2 pb-3",children:[d.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-2",children:[d.jsx("span",{children:c}),d.jsx("span",{children:u})]}),d.jsxs("div",{className:"relative overflow-hidden",ref:a,children:[d.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full -translate-y-1/2"}),d.jsx("div",{className:"relative overflow-hidden",style:{height:"24px"},children:e.map((_,g)=>{const p=o[g%o.length],h=n[_.arg]??c,C=(h-c)/(u-c)*100,w=e.length-g,L=i===g?100:w;return d.jsx("div",{children:d.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 ${t?"cursor-not-allowed":"cursor-grab active:cursor-grabbing"}`,style:{left:`${C}%`,transform:"translate(-50%, -50%)",width:"40px",height:"24px",zIndex:L},onMouseDown:k=>f(g,k),children:d.jsx("div",{className:`absolute top-1/2 left-1/2 w-5 h-5 rounded-full ${p.bg} border-2 border-white shadow-lg pointer-events-none transition-shadow`,style:{transform:"translate(-50%, -50%)",zIndex:1,boxShadow:i===g?"0 0 0 3px rgba(0,0,0,0.1)":void 0},title:_.name?`${_.name}: ${h}`:String(h)})})},_.arg)})})]})]})]})}function kb({entry:e,value:n,onChange:t,readOnly:l,point:i}){var x,b,_,g,p,h,C;const r="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",a=e.dtype==="enum"||e.dtype&&e.dtype.startsWith("bitfield")?"col-span-full flex flex-col gap-1 text-sm":"flex flex-col gap-1 text-sm";if(e.dtype&&e.dtype.startsWith("bitfield")&&e.meanings){const w=n||{},L=k=>{const v={...w,[k]:!w[k]};t(v)};return d.jsxs("div",{className:a,children:[d.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[d.jsx("span",{children:e.name??""}),e.unit&&d.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),d.jsx("div",{className:"flex flex-col gap-2 py-1",children:Object.entries(e.meanings).map(([k,v])=>d.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[d.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:w[k]||!1,onChange:()=>L(k)}),d.jsx("span",{className:"text-sm text-slate-800",children:v})]},k))}),e.description&&d.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&d.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}if(e.dtype==="enum"&&e.meanings){const w=Object.entries(e.meanings).map(([v,V])=>{var q;const E=((q=e.friendly_meanings)==null?void 0:q[v])??V;return{wireVal:v,friendly:E}});if(w.length<=3)return d.jsxs("div",{className:a,children:[d.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[d.jsx("span",{children:e.name}),e.unit&&d.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),d.jsx("div",{className:"flex flex-col gap-2 py-1",children:w.map(v=>d.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[d.jsx("input",{type:"radio",name:e.arg,className:"w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:n===v.friendly,onChange:()=>t(v.friendly)}),d.jsx("span",{className:"text-sm text-slate-800",children:v.friendly})]},v.wireVal))}),e.description&&d.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&d.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]});const L=w.reduce((v,V)=>V.friendly.length>v.length?V.friendly:v,""),k=Math.min(Math.max(L.length*8.5+50,220),480);return d.jsxs("div",{className:a,children:[d.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[d.jsx("span",{children:e.name??""}),e.unit&&d.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),d.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",style:{minWidth:`${k}px`,maxWidth:"100%"},disabled:l,value:n??"",onChange:v=>t(v.target.value),children:w.map(v=>d.jsx("option",{value:v.friendly,children:v.friendly},v.wireVal))}),e.description&&d.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&d.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}const o=e.dtype==="Number",s=o&&e.range!==void 0,c=((x=i==null?void 0:i.protocol)==null?void 0:x.modbus)!==void 0,u=(_=(b=i==null?void 0:i.protocol)==null?void 0:b.modbus)==null?void 0:_.scale_factor,m=c&&u!==void 0&&o,y=m&&n!==null&&n!==void 0&&n!==""?Number(n)*u:n,f=w=>{if(o){const L=w===""?"":Number(w);if(m&&L!==""){const k=Math.round(L/u);t(k)}else t(L)}else t(w)};return d.jsxs("div",{className:a,children:[d.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[d.jsx("span",{children:e.name}),e.unit&&d.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("input",{type:o?"number":"text",className:s?"w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500":r,disabled:l,value:y??"",min:(g=e.range)==null?void 0:g.min,max:(p=e.range)==null?void 0:p.max,onChange:w=>f(w.target.value)}),s&&d.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[d.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.min}),d.jsx("input",{type:"range",className:"flex-1",disabled:l,value:y??e.range.min,min:(h=e.range)==null?void 0:h.min,max:(C=e.range)==null?void 0:C.max,onChange:w=>{const L=Number(w.target.value);if(m){const k=Math.round(L/u);t(k)}else t(L)}}),d.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.max})]})]}),e.description&&d.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&d.jsx("div",{className:"text-xs text-slate-400 leading-snug",children:e.longdescription})]})}function Pb({point:e,formState:n,readOnly:t,isInvoke:l,setButtonAppearance:i,onChange:r,onInvokeClick:a}){const o=e.entries.filter(c=>c.dtype==="Number"&&c.range!==void 0),s=!e.widget&&o.length>=2&&o.length===e.entries.length;return d.jsxs(d.Fragment,{children:[e.widget==="datetime"?d.jsx(Cb,{point:e,formState:n,readOnly:t,onChange:r}):e.widget==="timerange-multi"?d.jsx(wb,{point:e,formState:n,readOnly:t,onChange:r}):e.widget==="timerange"?d.jsx(Cf,{point:e,formState:n,readOnly:t,onChange:r}):e.widget==="generator-exercise"?d.jsx(Sb,{formState:n,readOnly:t,onChange:r}):s?d.jsx(Lb,{entries:o,formState:n,readOnly:t,onChange:r}):d.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4",children:e.entries.map(c=>d.jsx(kb,{entry:c,value:n[c.arg],readOnly:t,point:e,onChange:u=>r(c.arg,u)},c.arg))}),l&&e.widget!=="generator-exercise"&&e.showInvokeButton!==!1&&d.jsx("div",{className:"mt-4 flex items-center gap-2",children:d.jsx("button",{type:"button",className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${i}`,disabled:t,onClick:a,children:e.invokeButtonText||"Invoke"})})]})}const Nb={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl"};function gc({isOpen:e,onClose:n,title:t,icon:l,children:i,showFooter:r=!0,footerContent:a,maxWidth:o="lg"}){if(j.useEffect(()=>{const c=u=>{u.key==="Escape"&&e&&n()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[e,n]),!e)return null;const s=d.jsx("div",{className:"flex justify-end p-4 border-t border-slate-200 bg-slate-50",children:d.jsx("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",onClick:n,children:"Close"})});return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4",onClick:n,children:d.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${Nb[o]} border border-slate-300 overflow-hidden`,onClick:c=>c.stopPropagation(),children:[d.jsxs("div",{className:"flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[l,d.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:t})]}),d.jsx("button",{type:"button",className:"text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1",onClick:n,children:"✕"})]}),d.jsx("div",{className:"p-5 max-h-[60vh] overflow-y-auto",children:i}),r&&(a||s)]})})}function Ab({title:e,content:n,isOpen:t,onClose:l}){const i=a=>a.split(/(\*\*[^*]+\*\*)/g).map((s,c)=>s.startsWith("**")&&s.endsWith("**")?d.jsx("strong",{className:"font-semibold text-slate-900",children:s.slice(2,-2)},c):d.jsx("span",{children:s},c)),r=d.jsx("div",{className:"text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium",children:"i"});return d.jsx(gc,{isOpen:t,onClose:l,title:e,icon:r,children:d.jsx("div",{className:"text-sm text-slate-700 leading-relaxed whitespace-pre-wrap",children:i(n)})})}function Ib({point:e,isOpen:n,onClose:t}){const l=[];e.entries.forEach(r=>{var a,o;if((a=r.telemetry)!=null&&a.model&&((o=r.telemetry)!=null&&o.point)){const s=`${r.telemetry.model}.${r.telemetry.point}`;l.includes(s)||l.push(s)}});const i=d.jsx("span",{className:"text-slate-500 text-xl",children:"🕐"});return d.jsxs(gc,{isOpen:n,onClose:t,title:"Historical Data",icon:i,children:[d.jsx("div",{className:"text-sm text-slate-700 leading-relaxed mb-4",children:"In the real UI, this button would link you to the historical data page showing the last 24 hours of data for the following telemetry points:"}),l.length>0?d.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4",children:[d.jsx("div",{className:"text-xs font-semibold text-slate-600 uppercase mb-2",children:"Telemetry Points"}),d.jsx("div",{className:"flex flex-col gap-2",children:l.map((r,a)=>d.jsx("div",{className:"font-mono text-sm text-emerald-600 bg-white border border-emerald-200 rounded px-3 py-2",children:r},a))})]}):d.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800",children:"No telemetry points configured for this setting."})]})}function Wd({isOpen:e,onClose:n,title:t,payload:l,type:i="set"}){const r=i==="refresh"?d.jsx("span",{children:"⟳"}):d.jsx("span",{children:"📤"});return d.jsxs(gc,{isOpen:e,onClose:n,title:t,icon:r,maxWidth:"xl",children:[d.jsx("div",{className:"text-sm text-slate-700 mb-3",children:"This is a preview of the command that would be sent:"}),d.jsx("pre",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800",children:JSON.stringify(l,null,2)})]})}function $d({point:e,helpTextMatch:n=!1,equipment:t}){const{formState:l,handleFieldChange:i,handleRefresh:r,handleSet:a}=gb(e,t),o=rr(),s=rr(),c=rr(),u=rr(),m=()=>o.open(),y=()=>s.open(),f=()=>{const k=r();u.open(k)},x=()=>{const k=a();c.open(k)},_=(typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service",g=e.readOnly||e.access==="R",p=g?"border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-400 bg-white text-slate-700 hover:bg-slate-50",h=e.entries.some(k=>{var v,V;return((v=k.telemetry)==null?void 0:v.model)&&((V=k.telemetry)==null?void 0:V.point)}),C=e.showHistory!==void 0?e.showHistory:h&&!_,w=_?e.showRefresh===!0:e.showRefresh!==!1,L=e.showSetButton!==void 0?e.showSetButton:!_;return d.jsxs("div",{className:"rounded-xl border border-slate-300 bg-white p-4 shadow-sm",children:[d.jsx(vb,{point:e,readOnly:g,helpTextMatch:n,shouldShowHistory:C,shouldShowRefresh:w,shouldShowSetButton:L,setButtonAppearance:p,onHelpClick:m,onHistoryClick:y,onRefreshClick:f,onSetClick:x}),d.jsx(Pb,{point:e,formState:l,readOnly:g,isInvoke:_,setButtonAppearance:p,onChange:i,onInvokeClick:x}),d.jsx(Ab,{title:e.title,content:e.help||"",isOpen:o.isOpen,onClose:o.close}),d.jsx(Ib,{point:e,isOpen:s.isOpen,onClose:s.close}),d.jsx(Wd,{title:"Command Preview",payload:c.data,isOpen:c.isOpen,onClose:c.close}),d.jsx(Wd,{title:"Read Command Preview",payload:u.data,isOpen:u.isOpen,onClose:u.close,type:"refresh"})]})}function Eb({subsection:e,searchQuery:n,pointMatchesSearch:t,equipment:l}){const[i,r]=j.useState(!e.collapsedByDefault),a=e.points.map(s=>({point:s,searchResult:t(s,n)})).filter(({searchResult:s})=>s.matches);if(a.length===0)return null;const o=n.trim()?!0:i;return e.collapsedByDefault?d.jsxs("div",{className:"border border-slate-300 bg-white rounded-xl shadow-sm mb-8",children:[d.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-2 text-left",onClick:()=>r(s=>!s),children:[d.jsx("span",{className:"text-slate-800 text-sm font-semibold uppercase tracking-wide",children:e.title||"Advanced"}),d.jsx("span",{className:"text-slate-500 text-xs",children:o?"▾":"▸"})]}),o&&d.jsx("div",{className:"p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:a.map(({point:s,searchResult:c})=>d.jsx($d,{point:s,helpTextMatch:c.helpTextMatch,equipment:l},s.command_id))})]}):d.jsxs("div",{className:"mb-6",children:[e.title&&d.jsx("div",{className:"text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2",children:d.jsx("span",{children:e.title})}),d.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:a.map(({point:s,searchResult:c})=>d.jsx($d,{point:s,helpTextMatch:c.helpTextMatch,equipment:l},s.command_id))})]})}function Db({section:e,sectionId:n,searchQuery:t,pointMatchesSearch:l,equipment:i}){const[r,a]=j.useState(!0),o=e.subsections.some(s=>s.points.some(c=>l(c,t).matches));return t.trim()&&!o?null:d.jsxs("section",{className:"bg-white/0",id:n,children:[d.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors",onClick:()=>a(!r),children:[d.jsx("span",{children:e.sectionTitle}),d.jsx("span",{className:"text-slate-500 text-sm",children:r?"▾":"▸"})]}),r&&d.jsx("div",{children:e.subsections.map((s,c)=>d.jsx(Eb,{subsection:s,searchQuery:t,pointMatchesSearch:l,equipment:i},c))})]})}function Vb({theme:e,themeId:n,searchQuery:t,pointMatchesSearch:l,equipment:i}){const[r,a]=j.useState(!0),o=e.sections.some(s=>s.subsections.some(c=>c.points.some(u=>l(u,t).matches)));return t.trim()&&!o?null:d.jsxs("div",{className:"bg-white/0",id:n,children:[d.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-2xl font-bold mb-6 border-b border-slate-300 pb-3 hover:text-emerald-600 transition-colors",onClick:()=>a(!r),children:[d.jsx("span",{children:e.themeName}),d.jsx("span",{className:"text-slate-500 text-lg",children:r?"▾":"▸"})]}),r&&d.jsx("div",{className:"flex flex-col gap-10",children:e.sections.map((s,c)=>{const u=`${n}-section-${c}`;return d.jsx(Db,{section:s,sectionId:u,searchQuery:t,pointMatchesSearch:l,equipment:i},`${s.sectionTitle}-${c}`)})})]})}function Tb({themes:e,searchQuery:n,pointMatchesSearch:t,equipment:l}){return d.jsxs("div",{className:"flex flex-col gap-16",children:[e.map((i,r)=>{const a=`theme-${r}`;return d.jsx(Vb,{theme:i,themeId:a,searchQuery:n,pointMatchesSearch:t,equipment:l},`${i.themeName}-${r}`)}),!e.length&&d.jsx("div",{className:"text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60",children:"This page does not define any themes yet."})]})}function Mb(e){var t,l,i,r,a,o,s;if(!e)return;if(!Array.isArray(e.themes)){console.error("[SchemaTest] page.themes is missing or not an array");return}e.themes.forEach((c,u)=>{if(!Array.isArray(c.sections)){console.error(`[SchemaTest] theme ${u} (${c.themeName}) has no sections array`);return}c.sections.forEach((m,y)=>{Array.isArray(m.subsections)||console.error(`[SchemaTest] theme ${u} / section ${y} (${m.sectionTitle}) has no subsections array`)}),c.sections.forEach((m,y)=>{var f;(f=m.subsections)==null||f.forEach((x,b)=>{if(!Array.isArray(x.points)){console.error(`[SchemaTest] theme ${u} / section ${y} / subsection ${b} (${x.title}) has no points array`);return}x.points.forEach((_,g)=>{if(!Array.isArray(_.entries)){console.error(`[SchemaTest] theme ${u} / section ${y} / subsection ${b} / point ${g} (${_.title}) has no entries array`);return}_.entries.forEach((p,h)=>{const C=["enum","String","Number"],w=p.dtype&&typeof p.dtype=="string"&&p.dtype.startsWith("bitfield");!C.includes(p.dtype)&&!w&&console.error(`[SchemaTest] entry ${p.name??h} in point ${_.title} has unsupported dtype ${p.dtype}`)})})})})});const n=((s=(o=(a=(r=(i=(l=(t=e.themes)==null?void 0:t[0])==null?void 0:l.sections)==null?void 0:i[0])==null?void 0:r.subsections)==null?void 0:a[0])==null?void 0:o.points)==null?void 0:s[0])||null;n&&(n.command_id||console.error("[SchemaTest] firstPoint.command_id missing"),n.protocol||console.error("[SchemaTest] firstPoint.protocol missing"))}const Gb=Object.assign({"./themes/demo_rebuilt.json":Jg}),wf=Object.entries(Gb).map(([e,n])=>{var r;const t=e.split("/").pop()??e,l=t.replace(/\.json$/i,""),i=((r=n.pageName)==null?void 0:r.trim())||l;return{id:l,label:i,filename:t,data:n}}).sort((e,n)=>e.label.localeCompare(n.label,void 0,{sensitivity:"base"})),Bb=wf.reduce((e,n)=>(e[n.id]=n.data,e),{});function Ob(){var p,h;const{pageRegistry:e,pageLookup:n,isLoading:t,loadError:l,themeFile:i}=eb(wf,Bb),r=((p=e[0])==null?void 0:p.id)??"",[a]=j.useState(r),[o,s]=j.useState(((h=ir[0])==null?void 0:h.id)??""),c=nb(),{searchQuery:u,setSearchQuery:m,pointMatchesSearch:y}=tb(),f=j.useMemo(()=>new Date(Date.now()-15*60*1e3),[]),x=j.useMemo(()=>f.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),[f]),b=a&&n[a]||r&&n[r]||null,_=j.useMemo(()=>ir.find(C=>C.id===o)||ir[0],[o]);if(j.useEffect(()=>{Mb(b)},[b]),t)return d.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:d.jsx("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:"Loading theme file..."})});if(l)return d.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:d.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700",children:[d.jsx("div",{className:"font-semibold mb-2",children:"Error loading theme file"}),d.jsx("div",{children:l}),d.jsxs("div",{className:"mt-4 text-xs text-slate-500",children:["File path: ",d.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5",children:i})]})]})});if(!b)return d.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:d.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:["No pages found in ",d.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"src/themes"}),". Add a JSON page file to get started."]})});const g=b.themes??[];return d.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:d.jsxs("div",{className:"max-w-[1400px] mx-auto flex gap-4",children:[d.jsx(lb,{themes:g,activeSection:c,selectedEquipmentId:o,onEquipmentChange:s,equipmentOptions:ir}),d.jsxs("main",{className:"flex-1 flex flex-col gap-6",children:[d.jsx(ib,{searchQuery:u,onSearchChange:m,lastUpdatedLabel:x}),d.jsx(Tb,{themes:g,searchQuery:u,pointMatchesSearch:y,equipment:_})]})]})})}const bc=Symbol.for("yaml.alias"),ms=Symbol.for("yaml.document"),pt=Symbol.for("yaml.map"),Sf=Symbol.for("yaml.pair"),On=Symbol.for("yaml.scalar"),Il=Symbol.for("yaml.seq"),yn=Symbol.for("yaml.node.type"),vt=e=>!!e&&typeof e=="object"&&e[yn]===bc,Rt=e=>!!e&&typeof e=="object"&&e[yn]===ms,El=e=>!!e&&typeof e=="object"&&e[yn]===pt,me=e=>!!e&&typeof e=="object"&&e[yn]===Sf,re=e=>!!e&&typeof e=="object"&&e[yn]===On,Dl=e=>!!e&&typeof e=="object"&&e[yn]===Il;function pe(e){if(e&&typeof e=="object")switch(e[yn]){case pt:case Il:return!0}return!1}function ge(e){if(e&&typeof e=="object")switch(e[yn]){case bc:case pt:case On:case Il:return!0}return!1}const Lf=e=>(re(e)||pe(e))&&!!e.anchor,qe=Symbol("break visit"),kf=Symbol("skip children"),Bn=Symbol("remove node");function jt(e,n){const t=Pf(n);Rt(e)?rl(null,e.contents,t,Object.freeze([e]))===Bn&&(e.contents=null):rl(null,e,t,Object.freeze([]))}jt.BREAK=qe;jt.SKIP=kf;jt.REMOVE=Bn;function rl(e,n,t,l){const i=Nf(e,n,t,l);if(ge(i)||me(i))return Af(e,l,i),rl(e,i,t,l);if(typeof i!="symbol"){if(pe(n)){l=Object.freeze(l.concat(n));for(let r=0;r<n.items.length;++r){const a=rl(r,n.items[r],t,l);if(typeof a=="number")r=a-1;else{if(a===qe)return qe;a===Bn&&(n.items.splice(r,1),r-=1)}}}else if(me(n)){l=Object.freeze(l.concat(n));const r=rl("key",n.key,t,l);if(r===qe)return qe;r===Bn&&(n.key=null);const a=rl("value",n.value,t,l);if(a===qe)return qe;a===Bn&&(n.value=null)}}return i}async function Sa(e,n){const t=Pf(n);Rt(e)?await al(null,e.contents,t,Object.freeze([e]))===Bn&&(e.contents=null):await al(null,e,t,Object.freeze([]))}Sa.BREAK=qe;Sa.SKIP=kf;Sa.REMOVE=Bn;async function al(e,n,t,l){const i=await Nf(e,n,t,l);if(ge(i)||me(i))return Af(e,l,i),al(e,i,t,l);if(typeof i!="symbol"){if(pe(n)){l=Object.freeze(l.concat(n));for(let r=0;r<n.items.length;++r){const a=await al(r,n.items[r],t,l);if(typeof a=="number")r=a-1;else{if(a===qe)return qe;a===Bn&&(n.items.splice(r,1),r-=1)}}}else if(me(n)){l=Object.freeze(l.concat(n));const r=await al("key",n.key,t,l);if(r===qe)return qe;r===Bn&&(n.key=null);const a=await al("value",n.value,t,l);if(a===qe)return qe;a===Bn&&(n.value=null)}}return i}function Pf(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function Nf(e,n,t,l){var i,r,a,o,s;if(typeof t=="function")return t(e,n,l);if(El(n))return(i=t.Map)==null?void 0:i.call(t,e,n,l);if(Dl(n))return(r=t.Seq)==null?void 0:r.call(t,e,n,l);if(me(n))return(a=t.Pair)==null?void 0:a.call(t,e,n,l);if(re(n))return(o=t.Scalar)==null?void 0:o.call(t,e,n,l);if(vt(n))return(s=t.Alias)==null?void 0:s.call(t,e,n,l)}function Af(e,n,t){const l=n[n.length-1];if(pe(l))l.items[e]=t;else if(me(l))e==="key"?l.key=t:l.value=t;else if(Rt(l))l.contents=t;else{const i=vt(l)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const Fb={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Rb=e=>e.replace(/[!,[\]{}]/g,n=>Fb[n]);class Oe{constructor(n,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Oe.defaultYaml,n),this.tags=Object.assign({},Oe.defaultTags,t)}clone(){const n=new Oe(this.yaml,this.tags);return n.docStart=this.docStart,n}atDocument(){const n=new Oe(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Oe.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Oe.defaultTags);break}return n}add(n,t){this.atNextDocument&&(this.yaml={explicit:Oe.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Oe.defaultTags),this.atNextDocument=!1);const l=n.trim().split(/[ \t]+/),i=l.shift();switch(i){case"%TAG":{if(l.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),l.length<2))return!1;const[r,a]=l;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,l.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=l;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(n,t){if(n==="!")return"!";if(n[0]!=="!")return t(`Not a valid tag: ${n}`),null;if(n[1]==="<"){const a=n.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${n} is invalid.`),null):(n[n.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,l,i]=n.match(/^(.*!)([^!]*)$/s);i||t(`The ${n} tag has no suffix`);const r=this.tags[l];if(r)try{return r+decodeURIComponent(i)}catch(a){return t(String(a)),null}return l==="!"?n:(t(`Could not resolve tag: ${n}`),null)}tagString(n){for(const[t,l]of Object.entries(this.tags))if(n.startsWith(l))return t+Rb(n.substring(l.length));return n[0]==="!"?n:`!<${n}>`}toString(n){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],l=Object.entries(this.tags);let i;if(n&&l.length>0&&ge(n.contents)){const r={};jt(n.contents,(a,o)=>{ge(o)&&o.tag&&(r[o.tag]=!0)}),i=Object.keys(r)}else i=[];for(const[r,a]of l)r==="!!"&&a==="tag:yaml.org,2002:"||(!n||i.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}Oe.defaultYaml={explicit:!1,version:"1.2"};Oe.defaultTags={"!!":"tag:yaml.org,2002:"};function If(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(t)}return!0}function Ef(e){const n=new Set;return jt(e,{Value(t,l){l.anchor&&n.add(l.anchor)}}),n}function Df(e,n){for(let t=1;;++t){const l=`${e}${t}`;if(!n.has(l))return l}}function jb(e,n){const t=[],l=new Map;let i=null;return{onAnchor:r=>{t.push(r),i??(i=Ef(e));const a=Df(n,i);return i.add(a),a},setAnchors:()=>{for(const r of t){const a=l.get(r);if(typeof a=="object"&&a.anchor&&(re(a.node)||pe(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:l}}function ol(e,n,t,l){if(l&&typeof l=="object")if(Array.isArray(l))for(let i=0,r=l.length;i<r;++i){const a=l[i],o=ol(e,l,String(i),a);o===void 0?delete l[i]:o!==a&&(l[i]=o)}else if(l instanceof Map)for(const i of Array.from(l.keys())){const r=l.get(i),a=ol(e,l,i,r);a===void 0?l.delete(i):a!==r&&l.set(i,a)}else if(l instanceof Set)for(const i of Array.from(l)){const r=ol(e,l,i,i);r===void 0?l.delete(i):r!==i&&(l.delete(i),l.add(r))}else for(const[i,r]of Object.entries(l)){const a=ol(e,l,i,r);a===void 0?delete l[i]:a!==r&&(l[i]=a)}return e.call(n,t,l)}function mn(e,n,t){if(Array.isArray(e))return e.map((l,i)=>mn(l,String(i),t));if(e&&typeof e.toJSON=="function"){if(!t||!Lf(e))return e.toJSON(n,t);const l={aliasCount:0,count:1,res:void 0};t.anchors.set(e,l),t.onCreate=r=>{l.res=r,delete t.onCreate};const i=e.toJSON(n,t);return t.onCreate&&t.onCreate(i),i}return typeof e=="bigint"&&!(t!=null&&t.keep)?Number(e):e}class hc{constructor(n){Object.defineProperty(this,yn,{value:n})}clone(){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(n.range=this.range.slice()),n}toJS(n,{mapAsMap:t,maxAliasCount:l,onAnchor:i,reviver:r}={}){if(!Rt(n))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:n,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof l=="number"?l:100},o=mn(this,"",a);if(typeof i=="function")for(const{count:s,res:c}of a.anchors.values())i(c,s);return typeof r=="function"?ol(r,{"":o},"",o):o}}class La extends hc{constructor(n){super(bc),this.source=n,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(n,t){let l;t!=null&&t.aliasResolveCache?l=t.aliasResolveCache:(l=[],jt(n,{Node:(r,a)=>{(vt(a)||Lf(a))&&l.push(a)}}),t&&(t.aliasResolveCache=l));let i;for(const r of l){if(r===this)break;r.anchor===this.source&&(i=r)}return i}toJSON(n,t){if(!t)return{source:this.source};const{anchors:l,doc:i,maxAliasCount:r}=t,a=this.resolve(i,t);if(!a){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}let o=l.get(a);if(o||(mn(a,null,t),o=l.get(a)),!o||o.res===void 0){const s="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(s)}if(r>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Pr(i,a,l)),o.count*o.aliasCount>r)){const s="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(s)}return o.res}toString(n,t,l){const i=`*${this.source}`;if(n){if(If(this.source),n.options.verifyAliasOrder&&!n.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(n.implicitKey)return`${i} `}return i}}function Pr(e,n,t){if(vt(n)){const l=n.resolve(e),i=t&&l&&t.get(l);return i?i.count*i.aliasCount:0}else if(pe(n)){let l=0;for(const i of n.items){const r=Pr(e,i,t);r>l&&(l=r)}return l}else if(me(n)){const l=Pr(e,n.key,t),i=Pr(e,n.value,t);return Math.max(l,i)}return 1}const Vf=e=>!e||typeof e!="function"&&typeof e!="object";class z extends hc{constructor(n){super(On),this.value=n}toJSON(n,t){return t!=null&&t.keep?this.value:mn(this.value,n,t)}toString(){return String(this.value)}}z.BLOCK_FOLDED="BLOCK_FOLDED";z.BLOCK_LITERAL="BLOCK_LITERAL";z.PLAIN="PLAIN";z.QUOTE_DOUBLE="QUOTE_DOUBLE";z.QUOTE_SINGLE="QUOTE_SINGLE";const Ub="tag:yaml.org,2002:";function Wb(e,n,t){if(n){const l=t.filter(r=>r.tag===n),i=l.find(r=>!r.format)??l[0];if(!i)throw new Error(`Tag ${n} not found`);return i}return t.find(l=>{var i;return((i=l.identify)==null?void 0:i.call(l,e))&&!l.format})}function Ii(e,n,t){var m,y,f;if(Rt(e)&&(e=e.contents),ge(e))return e;if(me(e)){const x=(y=(m=t.schema[pt]).createNode)==null?void 0:y.call(m,t.schema,null,t);return x.items.push(e),x}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:l,onAnchor:i,onTagObj:r,schema:a,sourceObjects:o}=t;let s;if(l&&e&&typeof e=="object"){if(s=o.get(e),s)return s.anchor??(s.anchor=i(e)),new La(s.anchor);s={anchor:null,node:null},o.set(e,s)}n!=null&&n.startsWith("!!")&&(n=Ub+n.slice(2));let c=Wb(e,n,a.tags);if(!c){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const x=new z(e);return s&&(s.node=x),x}c=e instanceof Map?a[pt]:Symbol.iterator in Object(e)?a[Il]:a[pt]}r&&(r(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,e,t):typeof((f=c==null?void 0:c.nodeClass)==null?void 0:f.from)=="function"?c.nodeClass.from(t.schema,e,t):new z(e);return n?u.tag=n:c.default||(u.tag=c.tag),s&&(s.node=u),u}function la(e,n,t){let l=t;for(let i=n.length-1;i>=0;--i){const r=n[i];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=l,l=a}else l=new Map([[r,l]])}return Ii(l,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const ni=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class Tf extends hc{constructor(n,t){super(n),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(n){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return n&&(t.schema=n),t.items=t.items.map(l=>ge(l)||me(l)?l.clone(n):l),this.range&&(t.range=this.range.slice()),t}addIn(n,t){if(ni(n))this.add(t);else{const[l,...i]=n,r=this.get(l,!0);if(pe(r))r.addIn(i,t);else if(r===void 0&&this.schema)this.set(l,la(this.schema,i,t));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}deleteIn(n){const[t,...l]=n;if(l.length===0)return this.delete(t);const i=this.get(t,!0);if(pe(i))return i.deleteIn(l);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${l}`)}getIn(n,t){const[l,...i]=n,r=this.get(l,!0);return i.length===0?!t&&re(r)?r.value:r:pe(r)?r.getIn(i,t):void 0}hasAllNullValues(n){return this.items.every(t=>{if(!me(t))return!1;const l=t.value;return l==null||n&&re(l)&&l.value==null&&!l.commentBefore&&!l.comment&&!l.tag})}hasIn(n){const[t,...l]=n;if(l.length===0)return this.has(t);const i=this.get(t,!0);return pe(i)?i.hasIn(l):!1}setIn(n,t){const[l,...i]=n;if(i.length===0)this.set(l,t);else{const r=this.get(l,!0);if(pe(r))r.setIn(i,t);else if(r===void 0&&this.schema)this.set(l,la(this.schema,i,t));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}}const $b=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function $n(e,n){return/^\n+$/.test(e)?e.substring(1):n?e.replace(/^(?! *$)/gm,n):e}const Pt=(e,n,t)=>e.endsWith(`
`)?$n(t,n):t.includes(`
`)?`
`+$n(t,n):(e.endsWith(" ")?"":" ")+t,Mf="flow",fs="block",Nr="quoted";function ka(e,n,t="flow",{indentAtStart:l,lineWidth:i=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!i||i<0)return e;i<r&&(r=0);const s=Math.max(1+r,1+i-n.length);if(e.length<=s)return e;const c=[],u={};let m=i-n.length;typeof l=="number"&&(l>i-Math.max(2,r)?c.push(0):m=i-l);let y,f,x=!1,b=-1,_=-1,g=-1;t===fs&&(b=Hd(e,b,n.length),b!==-1&&(m=b+s));for(let h;h=e[b+=1];){if(t===Nr&&h==="\\"){switch(_=b,e[b+1]){case"x":b+=3;break;case"u":b+=5;break;case"U":b+=9;break;default:b+=1}g=b}if(h===`
`)t===fs&&(b=Hd(e,b,n.length)),m=b+n.length+s,y=void 0;else{if(h===" "&&f&&f!==" "&&f!==`
`&&f!=="	"){const C=e[b+1];C&&C!==" "&&C!==`
`&&C!=="	"&&(y=b)}if(b>=m)if(y)c.push(y),m=y+s,y=void 0;else if(t===Nr){for(;f===" "||f==="	";)f=h,h=e[b+=1],x=!0;const C=b>g+1?b-2:_-1;if(u[C])return e;c.push(C),u[C]=!0,m=C+s,y=void 0}else x=!0}f=h}if(x&&o&&o(),c.length===0)return e;a&&a();let p=e.slice(0,c[0]);for(let h=0;h<c.length;++h){const C=c[h],w=c[h+1]||e.length;C===0?p=`
${n}${e.slice(0,w)}`:(t===Nr&&u[C]&&(p+=`${e[C]}\\`),p+=`
${n}${e.slice(C+1,w)}`)}return p}function Hd(e,n,t){let l=n,i=n+1,r=e[i];for(;r===" "||r==="	";)if(n<i+t)r=e[++n];else{do r=e[++n];while(r&&r!==`
`);l=n,i=n+1,r=e[i]}return l}const Pa=(e,n)=>({indentAtStart:n?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Na=e=>/^(%|---|\.\.\.)/m.test(e);function Hb(e,n,t){if(!n||n<0)return!1;const l=n-t,i=e.length;if(i<=l)return!1;for(let r=0,a=0;r<i;++r)if(e[r]===`
`){if(r-a>l)return!0;if(a=r+1,i-a<=l)return!1}return!0}function ui(e,n){const t=JSON.stringify(e);if(n.options.doubleQuotedAsJSON)return t;const{implicitKey:l}=n,i=n.options.doubleQuotedMinMultiLineLength,r=n.indent||(Na(e)?"  ":"");let a="",o=0;for(let s=0,c=t[s];c;c=t[++s])if(c===" "&&t[s+1]==="\\"&&t[s+2]==="n"&&(a+=t.slice(o,s)+"\\ ",s+=1,o=s,c="\\"),c==="\\")switch(t[s+1]){case"u":{a+=t.slice(o,s);const u=t.substr(s+2,4);switch(u){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:u.substr(0,2)==="00"?a+="\\x"+u.substr(2):a+=t.substr(s,6)}s+=5,o=s+1}break;case"n":if(l||t[s+2]==='"'||t.length<i)s+=1;else{for(a+=t.slice(o,s)+`

`;t[s+2]==="\\"&&t[s+3]==="n"&&t[s+4]!=='"';)a+=`
`,s+=2;a+=r,t[s+2]===" "&&(a+="\\"),s+=1,o=s+1}break;default:s+=1}return a=o?a+t.slice(o):t,l?a:ka(a,r,Nr,Pa(n,!1))}function ps(e,n){if(n.options.singleQuote===!1||n.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return ui(e,n);const t=n.indent||(Na(e)?"  ":""),l="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return n.implicitKey?l:ka(l,t,Mf,Pa(n,!1))}function sl(e,n){const{singleQuote:t}=n.options;let l;if(t===!1)l=ui;else{const i=e.includes('"'),r=e.includes("'");i&&!r?l=ps:r&&!i?l=ui:l=t?ps:ui}return l(e,n)}let ys;try{ys=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{ys=/\n+(?!\n|$)/g}function Ar({comment:e,type:n,value:t},l,i,r){const{blockQuote:a,commentString:o,lineWidth:s}=l.options;if(!a||/\n[\t ]+$/.test(t))return sl(t,l);const c=l.indent||(l.forceBlockIndent||Na(t)?"  ":""),u=a==="literal"?!0:a==="folded"||n===z.BLOCK_FOLDED?!1:n===z.BLOCK_LITERAL?!0:!Hb(t,s,c.length);if(!t)return u?`|
`:`>
`;let m,y;for(y=t.length;y>0;--y){const w=t[y-1];if(w!==`
`&&w!=="	"&&w!==" ")break}let f=t.substring(y);const x=f.indexOf(`
`);x===-1?m="-":t===f||x!==f.length-1?(m="+",r&&r()):m="",f&&(t=t.slice(0,-f.length),f[f.length-1]===`
`&&(f=f.slice(0,-1)),f=f.replace(ys,`$&${c}`));let b=!1,_,g=-1;for(_=0;_<t.length;++_){const w=t[_];if(w===" ")b=!0;else if(w===`
`)g=_;else break}let p=t.substring(0,g<_?g+1:_);p&&(t=t.substring(p.length),p=p.replace(/\n+/g,`$&${c}`));let C=(b?c?"2":"1":"")+m;if(e&&(C+=" "+o(e.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){const w=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let L=!1;const k=Pa(l,!0);a!=="folded"&&n!==z.BLOCK_FOLDED&&(k.onOverflow=()=>{L=!0});const v=ka(`${p}${w}${f}`,c,fs,k);if(!L)return`>${C}
${c}${v}`}return t=t.replace(/\n+/g,`$&${c}`),`|${C}
${c}${p}${t}${f}`}function qb(e,n,t,l){const{type:i,value:r}=e,{actualString:a,implicitKey:o,indent:s,indentStep:c,inFlow:u}=n;if(o&&r.includes(`
`)||u&&/[[\]{},]/.test(r))return sl(r,n);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||u||!r.includes(`
`)?sl(r,n):Ar(e,n,t,l);if(!o&&!u&&i!==z.PLAIN&&r.includes(`
`))return Ar(e,n,t,l);if(Na(r)){if(s==="")return n.forceBlockIndent=!0,Ar(e,n,t,l);if(o&&s===c)return sl(r,n)}const m=r.replace(/\n+/g,`$&
${s}`);if(a){const y=b=>{var _;return b.default&&b.tag!=="tag:yaml.org,2002:str"&&((_=b.test)==null?void 0:_.test(m))},{compat:f,tags:x}=n.doc.schema;if(x.some(y)||f!=null&&f.some(y))return sl(r,n)}return o?m:ka(m,s,Mf,Pa(n,!1))}function Oi(e,n,t,l){const{implicitKey:i,inFlow:r}=n,a=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:o}=e;o!==z.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=z.QUOTE_DOUBLE);const s=u=>{switch(u){case z.BLOCK_FOLDED:case z.BLOCK_LITERAL:return i||r?sl(a.value,n):Ar(a,n,t,l);case z.QUOTE_DOUBLE:return ui(a.value,n);case z.QUOTE_SINGLE:return ps(a.value,n);case z.PLAIN:return qb(a,n,t,l);default:return null}};let c=s(o);if(c===null){const{defaultKeyType:u,defaultStringType:m}=n.options,y=i&&u||m;if(c=s(y),c===null)throw new Error(`Unsupported default string type ${y}`)}return c}function Gf(e,n){const t=Object.assign({blockQuote:!0,commentString:$b,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,n);let l;switch(t.collectionStyle){case"block":l=!1;break;case"flow":l=!0;break;default:l=null}return{anchors:new Set,doc:e,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:l,options:t}}function zb(e,n){var i;if(n.tag){const r=e.filter(a=>a.tag===n.tag);if(r.length>0)return r.find(a=>a.format===n.format)??r[0]}let t,l;if(re(n)){l=n.value;let r=e.filter(a=>{var o;return(o=a.identify)==null?void 0:o.call(a,l)});if(r.length>1){const a=r.filter(o=>o.test);a.length>0&&(r=a)}t=r.find(a=>a.format===n.format)??r.find(a=>!a.format)}else l=n,t=e.find(r=>r.nodeClass&&l instanceof r.nodeClass);if(!t){const r=((i=l==null?void 0:l.constructor)==null?void 0:i.name)??(l===null?"null":typeof l);throw new Error(`Tag not resolved for ${r} value`)}return t}function Kb(e,n,{anchors:t,doc:l}){if(!l.directives)return"";const i=[],r=(re(e)||pe(e))&&e.anchor;r&&If(r)&&(t.add(r),i.push(`&${r}`));const a=e.tag??(n.default?null:n.tag);return a&&i.push(l.directives.tagString(a)),i.join(" ")}function Sl(e,n,t,l){var s;if(me(e))return e.toString(n,t,l);if(vt(e)){if(n.doc.directives)return e.toString(n);if((s=n.resolvedAliases)!=null&&s.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");n.resolvedAliases?n.resolvedAliases.add(e):n.resolvedAliases=new Set([e]),e=e.resolve(n.doc)}let i;const r=ge(e)?e:n.doc.createNode(e,{onTagObj:c=>i=c});i??(i=zb(n.doc.schema.tags,r));const a=Kb(r,i,n);a.length>0&&(n.indentAtStart=(n.indentAtStart??0)+a.length+1);const o=typeof i.stringify=="function"?i.stringify(r,n,t,l):re(r)?Oi(r,n,t,l):r.toString(n,t,l);return a?re(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${n.indent}${o}`:o}function Qb({key:e,value:n},t,l,i){const{allNullValues:r,doc:a,indent:o,indentStep:s,options:{commentString:c,indentSeq:u,simpleKeys:m}}=t;let y=ge(e)&&e.comment||null;if(m){if(y)throw new Error("With simple keys, key nodes cannot have comments");if(pe(e)||!ge(e)&&typeof e=="object"){const k="With simple keys, collection cannot be used as a key value";throw new Error(k)}}let f=!m&&(!e||y&&n==null&&!t.inFlow||pe(e)||(re(e)?e.type===z.BLOCK_FOLDED||e.type===z.BLOCK_LITERAL:typeof e=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!f&&(m||!r),indent:o+s});let x=!1,b=!1,_=Sl(e,t,()=>x=!0,()=>b=!0);if(!f&&!t.inFlow&&_.length>1024){if(m)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(t.inFlow){if(r||n==null)return x&&l&&l(),_===""?"?":f?`? ${_}`:_}else if(r&&!m||n==null&&f)return _=`? ${_}`,y&&!x?_+=Pt(_,t.indent,c(y)):b&&i&&i(),_;x&&(y=null),f?(y&&(_+=Pt(_,t.indent,c(y))),_=`? ${_}
${o}:`):(_=`${_}:`,y&&(_+=Pt(_,t.indent,c(y))));let g,p,h;ge(n)?(g=!!n.spaceBefore,p=n.commentBefore,h=n.comment):(g=!1,p=null,h=null,n&&typeof n=="object"&&(n=a.createNode(n))),t.implicitKey=!1,!f&&!y&&re(n)&&(t.indentAtStart=_.length+1),b=!1,!u&&s.length>=2&&!t.inFlow&&!f&&Dl(n)&&!n.flow&&!n.tag&&!n.anchor&&(t.indent=t.indent.substring(2));let C=!1;const w=Sl(n,t,()=>C=!0,()=>b=!0);let L=" ";if(y||g||p){if(L=g?`
`:"",p){const k=c(p);L+=`
${$n(k,t.indent)}`}w===""&&!t.inFlow?L===`
`&&(L=`

`):L+=`
${t.indent}`}else if(!f&&pe(n)){const k=w[0],v=w.indexOf(`
`),V=v!==-1,E=t.inFlow??n.flow??n.items.length===0;if(V||!E){let q=!1;if(V&&(k==="&"||k==="!")){let U=w.indexOf(" ");k==="&"&&U!==-1&&U<v&&w[U+1]==="!"&&(U=w.indexOf(" ",U+1)),(U===-1||v<U)&&(q=!0)}q||(L=`
${t.indent}`)}}else(w===""||w[0]===`
`)&&(L="");return _+=L+w,t.inFlow?C&&l&&l():h&&!C?_+=Pt(_,t.indent,c(h)):b&&i&&i(),_}function Bf(e,n){(e==="debug"||e==="warn")&&console.warn(n)}const ar="<<",qn={identify:e=>e===ar||typeof e=="symbol"&&e.description===ar,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new z(Symbol(ar)),{addToJSMap:Of}),stringify:()=>ar},Yb=(e,n)=>(qn.identify(n)||re(n)&&(!n.type||n.type===z.PLAIN)&&qn.identify(n.value))&&(e==null?void 0:e.doc.schema.tags.some(t=>t.tag===qn.tag&&t.default));function Of(e,n,t){if(t=e&&vt(t)?t.resolve(e.doc):t,Dl(t))for(const l of t.items)uo(e,n,l);else if(Array.isArray(t))for(const l of t)uo(e,n,l);else uo(e,n,t)}function uo(e,n,t){const l=e&&vt(t)?t.resolve(e.doc):t;if(!El(l))throw new Error("Merge sources must be maps or map aliases");const i=l.toJSON(null,e,Map);for(const[r,a]of i)n instanceof Map?n.has(r)||n.set(r,a):n instanceof Set?n.add(r):Object.prototype.hasOwnProperty.call(n,r)||Object.defineProperty(n,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return n}function Ff(e,n,{key:t,value:l}){if(ge(t)&&t.addToJSMap)t.addToJSMap(e,n,l);else if(Yb(e,t))Of(e,n,l);else{const i=mn(t,"",e);if(n instanceof Map)n.set(i,mn(l,i,e));else if(n instanceof Set)n.add(i);else{const r=Xb(t,i,e),a=mn(l,r,e);r in n?Object.defineProperty(n,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):n[r]=a}}return n}function Xb(e,n,t){if(n===null)return"";if(typeof n!="object")return String(n);if(ge(e)&&(t!=null&&t.doc)){const l=Gf(t.doc,{});l.anchors=new Set;for(const r of t.anchors.keys())l.anchors.add(r.anchor);l.inFlow=!0,l.inStringifyKey=!0;const i=e.toString(l);if(!t.mapKeyWarned){let r=JSON.stringify(i);r.length>40&&(r=r.substring(0,36)+'..."'),Bf(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(n)}function _c(e,n,t){const l=Ii(e,void 0,t),i=Ii(n,void 0,t);return new Me(l,i)}class Me{constructor(n,t=null){Object.defineProperty(this,yn,{value:Sf}),this.key=n,this.value=t}clone(n){let{key:t,value:l}=this;return ge(t)&&(t=t.clone(n)),ge(l)&&(l=l.clone(n)),new Me(t,l)}toJSON(n,t){const l=t!=null&&t.mapAsMap?new Map:{};return Ff(t,l,this)}toString(n,t,l){return n!=null&&n.doc?Qb(this,n,t,l):JSON.stringify(this)}}function Rf(e,n,t){return(n.inFlow??e.flow?Zb:Jb)(e,n,t)}function Jb({comment:e,items:n},t,{blockItemPrefix:l,flowChars:i,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:s,options:{commentString:c}}=t,u=Object.assign({},t,{indent:r,type:null});let m=!1;const y=[];for(let x=0;x<n.length;++x){const b=n[x];let _=null;if(ge(b))!m&&b.spaceBefore&&y.push(""),ia(t,y,b.commentBefore,m),b.comment&&(_=b.comment);else if(me(b)){const p=ge(b.key)?b.key:null;p&&(!m&&p.spaceBefore&&y.push(""),ia(t,y,p.commentBefore,m))}m=!1;let g=Sl(b,u,()=>_=null,()=>m=!0);_&&(g+=Pt(g,r,c(_))),m&&_&&(m=!1),y.push(l+g)}let f;if(y.length===0)f=i.start+i.end;else{f=y[0];for(let x=1;x<y.length;++x){const b=y[x];f+=b?`
${s}${b}`:`
`}}return e?(f+=`
`+$n(c(e),s),o&&o()):m&&a&&a(),f}function Zb({items:e},n,{flowChars:t,itemIndent:l}){const{indent:i,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=n;l+=r;const s=Object.assign({},n,{indent:l,inFlow:!0,type:null});let c=!1,u=0;const m=[];for(let x=0;x<e.length;++x){const b=e[x];let _=null;if(ge(b))b.spaceBefore&&m.push(""),ia(n,m,b.commentBefore,!1),b.comment&&(_=b.comment);else if(me(b)){const p=ge(b.key)?b.key:null;p&&(p.spaceBefore&&m.push(""),ia(n,m,p.commentBefore,!1),p.comment&&(c=!0));const h=ge(b.value)?b.value:null;h?(h.comment&&(_=h.comment),h.commentBefore&&(c=!0)):b.value==null&&(p!=null&&p.comment)&&(_=p.comment)}_&&(c=!0);let g=Sl(b,s,()=>_=null);x<e.length-1&&(g+=","),_&&(g+=Pt(g,l,o(_))),!c&&(m.length>u||g.includes(`
`))&&(c=!0),m.push(g),u=m.length}const{start:y,end:f}=t;if(m.length===0)return y+f;if(!c){const x=m.reduce((b,_)=>b+_.length+2,2);c=n.options.lineWidth>0&&x>n.options.lineWidth}if(c){let x=y;for(const b of m)x+=b?`
${r}${i}${b}`:`
`;return`${x}
${i}${f}`}else return`${y}${a}${m.join(" ")}${a}${f}`}function ia({indent:e,options:{commentString:n}},t,l,i){if(l&&i&&(l=l.replace(/^\n+/,"")),l){const r=$n(n(l),e);t.push(r.trimStart())}}function Nt(e,n){const t=re(n)?n.value:n;for(const l of e)if(me(l)&&(l.key===n||l.key===t||re(l.key)&&l.key.value===t))return l}class Ze extends Tf{static get tagName(){return"tag:yaml.org,2002:map"}constructor(n){super(pt,n),this.items=[]}static from(n,t,l){const{keepUndefined:i,replacer:r}=l,a=new this(n),o=(s,c)=>{if(typeof r=="function")c=r.call(t,s,c);else if(Array.isArray(r)&&!r.includes(s))return;(c!==void 0||i)&&a.items.push(_c(s,c,l))};if(t instanceof Map)for(const[s,c]of t)o(s,c);else if(t&&typeof t=="object")for(const s of Object.keys(t))o(s,t[s]);return typeof n.sortMapEntries=="function"&&a.items.sort(n.sortMapEntries),a}add(n,t){var a;let l;me(n)?l=n:!n||typeof n!="object"||!("key"in n)?l=new Me(n,n==null?void 0:n.value):l=new Me(n.key,n.value);const i=Nt(this.items,l.key),r=(a=this.schema)==null?void 0:a.sortMapEntries;if(i){if(!t)throw new Error(`Key ${l.key} already set`);re(i.value)&&Vf(l.value)?i.value.value=l.value:i.value=l.value}else if(r){const o=this.items.findIndex(s=>r(l,s)<0);o===-1?this.items.push(l):this.items.splice(o,0,l)}else this.items.push(l)}delete(n){const t=Nt(this.items,n);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(n,t){const l=Nt(this.items,n),i=l==null?void 0:l.value;return(!t&&re(i)?i.value:i)??void 0}has(n){return!!Nt(this.items,n)}set(n,t){this.add(new Me(n,t),!0)}toJSON(n,t,l){const i=l?new l:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(i);for(const r of this.items)Ff(t,i,r);return i}toString(n,t,l){if(!n)return JSON.stringify(this);for(const i of this.items)if(!me(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!n.allNullValues&&this.hasAllNullValues(!1)&&(n=Object.assign({},n,{allNullValues:!0})),Rf(this,n,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:n.indent||"",onChompKeep:l,onComment:t})}}const Vl={collection:"map",default:!0,nodeClass:Ze,tag:"tag:yaml.org,2002:map",resolve(e,n){return El(e)||n("Expected a mapping for this tag"),e},createNode:(e,n,t)=>Ze.from(e,n,t)};class bt extends Tf{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(n){super(Il,n),this.items=[]}add(n){this.items.push(n)}delete(n){const t=or(n);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(n,t){const l=or(n);if(typeof l!="number")return;const i=this.items[l];return!t&&re(i)?i.value:i}has(n){const t=or(n);return typeof t=="number"&&t<this.items.length}set(n,t){const l=or(n);if(typeof l!="number")throw new Error(`Expected a valid index, not ${n}.`);const i=this.items[l];re(i)&&Vf(t)?i.value=t:this.items[l]=t}toJSON(n,t){const l=[];t!=null&&t.onCreate&&t.onCreate(l);let i=0;for(const r of this.items)l.push(mn(r,String(i++),t));return l}toString(n,t,l){return n?Rf(this,n,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(n.indent||"")+"  ",onChompKeep:l,onComment:t}):JSON.stringify(this)}static from(n,t,l){const{replacer:i}=l,r=new this(n);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof i=="function"){const s=t instanceof Set?o:String(a++);o=i.call(t,s,o)}r.items.push(Ii(o,void 0,l))}}return r}}function or(e){let n=re(e)?e.value:e;return n&&typeof n=="string"&&(n=Number(n)),typeof n=="number"&&Number.isInteger(n)&&n>=0?n:null}const Tl={collection:"seq",default:!0,nodeClass:bt,tag:"tag:yaml.org,2002:seq",resolve(e,n){return Dl(e)||n("Expected a sequence for this tag"),e},createNode:(e,n,t)=>bt.from(e,n,t)},Aa={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,n,t,l){return n=Object.assign({actualString:!0},n),Oi(e,n,t,l)}},Ia={identify:e=>e==null,createNode:()=>new z(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new z(null),stringify:({source:e},n)=>typeof e=="string"&&Ia.test.test(e)?e:n.options.nullStr},xc={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new z(e[0]==="t"||e[0]==="T"),stringify({source:e,value:n},t){if(e&&xc.test.test(e)){const l=e[0]==="t"||e[0]==="T";if(n===l)return e}return n?t.options.trueStr:t.options.falseStr}};function An({format:e,minFractionDigits:n,tag:t,value:l}){if(typeof l=="bigint")return String(l);const i=typeof l=="number"?l:Number(l);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let r=JSON.stringify(l);if(!e&&n&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(r)){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=n-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const jf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:An},Uf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const n=Number(e.value);return isFinite(n)?n.toExponential():An(e)}},Wf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const n=new z(parseFloat(e)),t=e.indexOf(".");return t!==-1&&e[e.length-1]==="0"&&(n.minFractionDigits=e.length-t-1),n},stringify:An},Ea=e=>typeof e=="bigint"||Number.isInteger(e),vc=(e,n,t,{intAsBigInt:l})=>l?BigInt(e):parseInt(e.substring(n),t);function $f(e,n,t){const{value:l}=e;return Ea(l)&&l>=0?t+l.toString(n):An(e)}const Hf={identify:e=>Ea(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,n,t)=>vc(e,2,8,t),stringify:e=>$f(e,8,"0o")},qf={identify:Ea,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,n,t)=>vc(e,0,10,t),stringify:An},zf={identify:e=>Ea(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,n,t)=>vc(e,2,16,t),stringify:e=>$f(e,16,"0x")},eh=[Vl,Tl,Aa,Ia,xc,Hf,qf,zf,jf,Uf,Wf];function qd(e){return typeof e=="bigint"||Number.isInteger(e)}const sr=({value:e})=>JSON.stringify(e),nh=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:sr},{identify:e=>e==null,createNode:()=>new z(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:sr},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:sr},{identify:qd,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,n,{intAsBigInt:t})=>t?BigInt(e):parseInt(e,10),stringify:({value:e})=>qd(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:sr}],th={default:!0,tag:"",test:/^/,resolve(e,n){return n(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},lh=[Vl,Tl].concat(nh,th),Cc={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,n){if(typeof atob=="function"){const t=atob(e.replace(/[\n\r]/g,"")),l=new Uint8Array(t.length);for(let i=0;i<t.length;++i)l[i]=t.charCodeAt(i);return l}else return n("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:n,value:t},l,i,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let s="";for(let c=0;c<a.length;++c)s+=String.fromCharCode(a[c]);o=btoa(s)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(n??(n=z.BLOCK_LITERAL),n!==z.QUOTE_DOUBLE){const s=Math.max(l.options.lineWidth-l.indent.length,l.options.minContentWidth),c=Math.ceil(o.length/s),u=new Array(c);for(let m=0,y=0;m<c;++m,y+=s)u[m]=o.substr(y,s);o=u.join(n===z.BLOCK_LITERAL?`
`:" ")}return Oi({comment:e,type:n,value:o},l,i,r)}};function Kf(e,n){if(Dl(e))for(let t=0;t<e.items.length;++t){let l=e.items[t];if(!me(l)){if(El(l)){l.items.length>1&&n("Each pair must have its own sequence indicator");const i=l.items[0]||new Me(new z(null));if(l.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${l.commentBefore}
${i.key.commentBefore}`:l.commentBefore),l.comment){const r=i.value??i.key;r.comment=r.comment?`${l.comment}
${r.comment}`:l.comment}l=i}e.items[t]=me(l)?l:new Me(l)}}else n("Expected a sequence for this tag");return e}function Qf(e,n,t){const{replacer:l}=t,i=new bt(e);i.tag="tag:yaml.org,2002:pairs";let r=0;if(n&&Symbol.iterator in Object(n))for(let a of n){typeof l=="function"&&(a=l.call(n,String(r++),a));let o,s;if(Array.isArray(a))if(a.length===2)o=a[0],s=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const c=Object.keys(a);if(c.length===1)o=c[0],s=a[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=a;i.items.push(_c(o,s,t))}return i}const wc={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Kf,createNode:Qf};class yl extends bt{constructor(){super(),this.add=Ze.prototype.add.bind(this),this.delete=Ze.prototype.delete.bind(this),this.get=Ze.prototype.get.bind(this),this.has=Ze.prototype.has.bind(this),this.set=Ze.prototype.set.bind(this),this.tag=yl.tag}toJSON(n,t){if(!t)return super.toJSON(n);const l=new Map;t!=null&&t.onCreate&&t.onCreate(l);for(const i of this.items){let r,a;if(me(i)?(r=mn(i.key,"",t),a=mn(i.value,r,t)):r=mn(i,"",t),l.has(r))throw new Error("Ordered maps must not include duplicate keys");l.set(r,a)}return l}static from(n,t,l){const i=Qf(n,t,l),r=new this;return r.items=i.items,r}}yl.tag="tag:yaml.org,2002:omap";const Sc={collection:"seq",identify:e=>e instanceof Map,nodeClass:yl,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,n){const t=Kf(e,n),l=[];for(const{key:i}of t.items)re(i)&&(l.includes(i.value)?n(`Ordered maps must not include duplicate keys: ${i.value}`):l.push(i.value));return Object.assign(new yl,t)},createNode:(e,n,t)=>yl.from(e,n,t)};function Yf({value:e,source:n},t){return n&&(e?Xf:Jf).test.test(n)?n:e?t.options.trueStr:t.options.falseStr}const Xf={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new z(!0),stringify:Yf},Jf={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new z(!1),stringify:Yf},ih={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:An},rh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const n=Number(e.value);return isFinite(n)?n.toExponential():An(e)}},ah={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const n=new z(parseFloat(e.replace(/_/g,""))),t=e.indexOf(".");if(t!==-1){const l=e.substring(t+1).replace(/_/g,"");l[l.length-1]==="0"&&(n.minFractionDigits=l.length)}return n},stringify:An},Fi=e=>typeof e=="bigint"||Number.isInteger(e);function Da(e,n,t,{intAsBigInt:l}){const i=e[0];if((i==="-"||i==="+")&&(n+=1),e=e.substring(n).replace(/_/g,""),l){switch(t){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const a=BigInt(e);return i==="-"?BigInt(-1)*a:a}const r=parseInt(e,t);return i==="-"?-1*r:r}function Lc(e,n,t){const{value:l}=e;if(Fi(l)){const i=l.toString(n);return l<0?"-"+t+i.substr(1):t+i}return An(e)}const oh={identify:Fi,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,n,t)=>Da(e,2,2,t),stringify:e=>Lc(e,2,"0b")},sh={identify:Fi,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,n,t)=>Da(e,1,8,t),stringify:e=>Lc(e,8,"0")},ch={identify:Fi,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,n,t)=>Da(e,0,10,t),stringify:An},dh={identify:Fi,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,n,t)=>Da(e,2,16,t),stringify:e=>Lc(e,16,"0x")};class gl extends Ze{constructor(n){super(n),this.tag=gl.tag}add(n){let t;me(n)?t=n:n&&typeof n=="object"&&"key"in n&&"value"in n&&n.value===null?t=new Me(n.key,null):t=new Me(n,null),Nt(this.items,t.key)||this.items.push(t)}get(n,t){const l=Nt(this.items,n);return!t&&me(l)?re(l.key)?l.key.value:l.key:l}set(n,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const l=Nt(this.items,n);l&&!t?this.items.splice(this.items.indexOf(l),1):!l&&t&&this.items.push(new Me(n))}toJSON(n,t){return super.toJSON(n,t,Set)}toString(n,t,l){if(!n)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},n,{allNullValues:!0}),t,l);throw new Error("Set items must all have null values")}static from(n,t,l){const{replacer:i}=l,r=new this(n);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof i=="function"&&(a=i.call(t,a,a)),r.items.push(_c(a,null,l));return r}}gl.tag="tag:yaml.org,2002:set";const kc={collection:"map",identify:e=>e instanceof Set,nodeClass:gl,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,n,t)=>gl.from(e,n,t),resolve(e,n){if(El(e)){if(e.hasAllNullValues(!0))return Object.assign(new gl,e);n("Set items must all have null values")}else n("Expected a mapping for this tag");return e}};function Pc(e,n){const t=e[0],l=t==="-"||t==="+"?e.substring(1):e,i=a=>n?BigInt(a):Number(a),r=l.replace(/_/g,"").split(":").reduce((a,o)=>a*i(60)+i(o),i(0));return t==="-"?i(-1)*r:r}function Zf(e){let{value:n}=e,t=a=>a;if(typeof n=="bigint")t=a=>BigInt(a);else if(isNaN(n)||!isFinite(n))return An(e);let l="";n<0&&(l="-",n*=t(-1));const i=t(60),r=[n%i];return n<60?r.unshift(0):(n=(n-r[0])/i,r.unshift(n%i),n>=60&&(n=(n-r[0])/i,r.unshift(n))),l+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const ep={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,n,{intAsBigInt:t})=>Pc(e,t),stringify:Zf},np={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Pc(e,!1),stringify:Zf},Va={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const n=e.match(Va.test);if(!n)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,l,i,r,a,o]=n.map(Number),s=n[7]?Number((n[7]+"00").substr(1,3)):0;let c=Date.UTC(t,l-1,i,r||0,a||0,o||0,s);const u=n[8];if(u&&u!=="Z"){let m=Pc(u,!1);Math.abs(m)<30&&(m*=60),c-=6e4*m}return new Date(c)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},zd=[Vl,Tl,Aa,Ia,Xf,Jf,oh,sh,ch,dh,ih,rh,ah,Cc,qn,Sc,wc,kc,ep,np,Va],Kd=new Map([["core",eh],["failsafe",[Vl,Tl,Aa]],["json",lh],["yaml11",zd],["yaml-1.1",zd]]),Qd={binary:Cc,bool:xc,float:Wf,floatExp:Uf,floatNaN:jf,floatTime:np,int:qf,intHex:zf,intOct:Hf,intTime:ep,map:Vl,merge:qn,null:Ia,omap:Sc,pairs:wc,seq:Tl,set:kc,timestamp:Va},uh={"tag:yaml.org,2002:binary":Cc,"tag:yaml.org,2002:merge":qn,"tag:yaml.org,2002:omap":Sc,"tag:yaml.org,2002:pairs":wc,"tag:yaml.org,2002:set":kc,"tag:yaml.org,2002:timestamp":Va};function mo(e,n,t){const l=Kd.get(n);if(l&&!e)return t&&!l.includes(qn)?l.concat(qn):l.slice();let i=l;if(!i)if(Array.isArray(e))i=[];else{const r=Array.from(Kd.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${n}"; use one of ${r} or define customTags array`)}if(Array.isArray(e))for(const r of e)i=i.concat(r);else typeof e=="function"&&(i=e(i.slice()));return t&&(i=i.concat(qn)),i.reduce((r,a)=>{const o=typeof a=="string"?Qd[a]:a;if(!o){const s=JSON.stringify(a),c=Object.keys(Qd).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${s}; use one of ${c}`)}return r.includes(o)||r.push(o),r},[])}const mh=(e,n)=>e.key<n.key?-1:e.key>n.key?1:0;class Ta{constructor({compat:n,customTags:t,merge:l,resolveKnownTags:i,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(n)?mo(n,"compat"):n?mo(null,n):null,this.name=typeof r=="string"&&r||"core",this.knownTags=i?uh:{},this.tags=mo(t,this.name,l),this.toStringOptions=o??null,Object.defineProperty(this,pt,{value:Vl}),Object.defineProperty(this,On,{value:Aa}),Object.defineProperty(this,Il,{value:Tl}),this.sortMapEntries=typeof a=="function"?a:a===!0?mh:null}clone(){const n=Object.create(Ta.prototype,Object.getOwnPropertyDescriptors(this));return n.tags=this.tags.slice(),n}}function fh(e,n){var s;const t=[];let l=n.directives===!0;if(n.directives!==!1&&e.directives){const c=e.directives.toString(e);c?(t.push(c),l=!0):e.directives.docStart&&(l=!0)}l&&t.push("---");const i=Gf(e,n),{commentString:r}=i.options;if(e.commentBefore){t.length!==1&&t.unshift("");const c=r(e.commentBefore);t.unshift($n(c,""))}let a=!1,o=null;if(e.contents){if(ge(e.contents)){if(e.contents.spaceBefore&&l&&t.push(""),e.contents.commentBefore){const m=r(e.contents.commentBefore);t.push($n(m,""))}i.forceBlockIndent=!!e.comment,o=e.contents.comment}const c=o?void 0:()=>a=!0;let u=Sl(e.contents,i,()=>o=null,c);o&&(u+=Pt(u,"",r(o))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(Sl(e.contents,i));if((s=e.directives)!=null&&s.docEnd)if(e.comment){const c=r(e.comment);c.includes(`
`)?(t.push("..."),t.push($n(c,""))):t.push(`... ${c}`)}else t.push("...");else{let c=e.comment;c&&a&&(c=c.replace(/^\n+/,"")),c&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push($n(r(c),"")))}return t.join(`
`)+`
`}class Ml{constructor(n,t,l){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,yn,{value:ms});let i=null;typeof t=="function"||Array.isArray(t)?i=t:l===void 0&&t&&(l=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},l);this.options=r;let{version:a}=r;l!=null&&l._directives?(this.directives=l._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new Oe({version:a}),this.setSchema(a,l),this.contents=n===void 0?null:this.createNode(n,i,l)}clone(){const n=Object.create(Ml.prototype,{[yn]:{value:ms}});return n.commentBefore=this.commentBefore,n.comment=this.comment,n.errors=this.errors.slice(),n.warnings=this.warnings.slice(),n.options=Object.assign({},this.options),this.directives&&(n.directives=this.directives.clone()),n.schema=this.schema.clone(),n.contents=ge(this.contents)?this.contents.clone(n.schema):this.contents,this.range&&(n.range=this.range.slice()),n}add(n){Wt(this.contents)&&this.contents.add(n)}addIn(n,t){Wt(this.contents)&&this.contents.addIn(n,t)}createAlias(n,t){if(!n.anchor){const l=Ef(this);n.anchor=!t||l.has(t)?Df(t||"a",l):t}return new La(n.anchor)}createNode(n,t,l){let i;if(typeof t=="function")n=t.call({"":n},"",n),i=t;else if(Array.isArray(t)){const _=p=>typeof p=="number"||p instanceof String||p instanceof Number,g=t.filter(_).map(String);g.length>0&&(t=t.concat(g)),i=t}else l===void 0&&t&&(l=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:s,onTagObj:c,tag:u}=l??{},{onAnchor:m,setAnchors:y,sourceObjects:f}=jb(this,a||"a"),x={aliasDuplicateObjects:r??!0,keepUndefined:s??!1,onAnchor:m,onTagObj:c,replacer:i,schema:this.schema,sourceObjects:f},b=Ii(n,u,x);return o&&pe(b)&&(b.flow=!0),y(),b}createPair(n,t,l={}){const i=this.createNode(n,null,l),r=this.createNode(t,null,l);return new Me(i,r)}delete(n){return Wt(this.contents)?this.contents.delete(n):!1}deleteIn(n){return ni(n)?this.contents==null?!1:(this.contents=null,!0):Wt(this.contents)?this.contents.deleteIn(n):!1}get(n,t){return pe(this.contents)?this.contents.get(n,t):void 0}getIn(n,t){return ni(n)?!t&&re(this.contents)?this.contents.value:this.contents:pe(this.contents)?this.contents.getIn(n,t):void 0}has(n){return pe(this.contents)?this.contents.has(n):!1}hasIn(n){return ni(n)?this.contents!==void 0:pe(this.contents)?this.contents.hasIn(n):!1}set(n,t){this.contents==null?this.contents=la(this.schema,[n],t):Wt(this.contents)&&this.contents.set(n,t)}setIn(n,t){ni(n)?this.contents=t:this.contents==null?this.contents=la(this.schema,Array.from(n),t):Wt(this.contents)&&this.contents.setIn(n,t)}setSchema(n,t={}){typeof n=="number"&&(n=String(n));let l;switch(n){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Oe({version:"1.1"}),l={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=n:this.directives=new Oe({version:n}),l={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,l=null;break;default:{const i=JSON.stringify(n);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(l)this.schema=new Ta(Object.assign(l,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:n,jsonArg:t,mapAsMap:l,maxAliasCount:i,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!n,mapAsMap:l===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},s=mn(this.contents,t??"",o);if(typeof r=="function")for(const{count:c,res:u}of o.anchors.values())r(u,c);return typeof a=="function"?ol(a,{"":s},"",s):s}toJSON(n,t){return this.toJS({json:!0,jsonArg:n,mapAsMap:!1,onAnchor:t})}toString(n={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in n&&(!Number.isInteger(n.indent)||Number(n.indent)<=0)){const t=JSON.stringify(n.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return fh(this,n)}}function Wt(e){if(pe(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Nc extends Error{constructor(n,t,l,i){super(),this.name=n,this.code=l,this.message=i,this.pos=t}}class At extends Nc{constructor(n,t,l){super("YAMLParseError",n,t,l)}}class tp extends Nc{constructor(n,t,l){super("YAMLWarning",n,t,l)}}const ra=(e,n)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>n.linePos(o));const{line:l,col:i}=t.linePos[0];t.message+=` at line ${l}, column ${i}`;let r=i-1,a=e.substring(n.lineStarts[l-1],n.lineStarts[l]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),l>1&&/^ *$/.test(a.substring(0,r))){let o=e.substring(n.lineStarts[l-2],n.lineStarts[l-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const s=t.linePos[1];s&&s.line===l&&s.col>i&&(o=Math.max(1,Math.min(s.col-i,80-r)));const c=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${c}
`}};function Ll(e,{flow:n,indicator:t,next:l,offset:i,onError:r,parentIndent:a,startOnNewline:o}){let s=!1,c=o,u=o,m="",y="",f=!1,x=!1,b=null,_=null,g=null,p=null,h=null,C=null,w=null;for(const v of e)switch(x&&(v.type!=="space"&&v.type!=="newline"&&v.type!=="comma"&&r(v.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),b&&(c&&v.type!=="comment"&&v.type!=="newline"&&r(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),b=null),v.type){case"space":!n&&(t!=="doc-start"||(l==null?void 0:l.type)!=="flow-collection")&&v.source.includes("	")&&(b=v),u=!0;break;case"comment":{u||r(v,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const V=v.source.substring(1)||" ";m?m+=y+V:m=V,y="",c=!1;break}case"newline":c?m?m+=v.source:(!C||t!=="seq-item-ind")&&(s=!0):y+=v.source,c=!0,f=!0,(_||g)&&(p=v),u=!0;break;case"anchor":_&&r(v,"MULTIPLE_ANCHORS","A node can have at most one anchor"),v.source.endsWith(":")&&r(v.offset+v.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=v,w??(w=v.offset),c=!1,u=!1,x=!0;break;case"tag":{g&&r(v,"MULTIPLE_TAGS","A node can have at most one tag"),g=v,w??(w=v.offset),c=!1,u=!1,x=!0;break}case t:(_||g)&&r(v,"BAD_PROP_ORDER",`Anchors and tags must be after the ${v.source} indicator`),C&&r(v,"UNEXPECTED_TOKEN",`Unexpected ${v.source} in ${n??"collection"}`),C=v,c=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(n){h&&r(v,"UNEXPECTED_TOKEN",`Unexpected , in ${n}`),h=v,c=!1,u=!1;break}default:r(v,"UNEXPECTED_TOKEN",`Unexpected ${v.type} token`),c=!1,u=!1}const L=e[e.length-1],k=L?L.offset+L.source.length:i;return x&&l&&l.type!=="space"&&l.type!=="newline"&&l.type!=="comma"&&(l.type!=="scalar"||l.source!=="")&&r(l.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),b&&(c&&b.indent<=a||(l==null?void 0:l.type)==="block-map"||(l==null?void 0:l.type)==="block-seq")&&r(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:h,found:C,spaceBefore:s,comment:m,hasNewline:f,anchor:_,tag:g,newlineAfterProp:p,end:k,start:w??k}}function Ei(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const n of e.end)if(n.type==="newline")return!0}return!1;case"flow-collection":for(const n of e.items){for(const t of n.start)if(t.type==="newline")return!0;if(n.sep){for(const t of n.sep)if(t.type==="newline")return!0}if(Ei(n.key)||Ei(n.value))return!0}return!1;default:return!0}}function gs(e,n,t){if((n==null?void 0:n.type)==="flow-collection"){const l=n.end[0];l.indent===e&&(l.source==="]"||l.source==="}")&&Ei(n)&&t(l,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function lp(e,n,t){const{uniqueKeys:l}=e.options;if(l===!1)return!1;const i=typeof l=="function"?l:(r,a)=>r===a||re(r)&&re(a)&&r.value===a.value;return n.some(r=>i(r.key,t))}const Yd="All mapping items must start at the same column";function ph({composeNode:e,composeEmptyNode:n},t,l,i,r){var u;const a=(r==null?void 0:r.nodeClass)??Ze,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let s=l.offset,c=null;for(const m of l.items){const{start:y,key:f,sep:x,value:b}=m,_=Ll(y,{indicator:"explicit-key-ind",next:f??(x==null?void 0:x[0]),offset:s,onError:i,parentIndent:l.indent,startOnNewline:!0}),g=!_.found;if(g){if(f&&(f.type==="block-seq"?i(s,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==l.indent&&i(s,"BAD_INDENT",Yd)),!_.anchor&&!_.tag&&!x){c=_.end,_.comment&&(o.comment?o.comment+=`
`+_.comment:o.comment=_.comment);continue}(_.newlineAfterProp||Ei(f))&&i(f??y[y.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=_.found)==null?void 0:u.indent)!==l.indent&&i(s,"BAD_INDENT",Yd);t.atKey=!0;const p=_.end,h=f?e(t,f,_,i):n(t,p,y,null,_,i);t.schema.compat&&gs(l.indent,f,i),t.atKey=!1,lp(t,o.items,h)&&i(p,"DUPLICATE_KEY","Map keys must be unique");const C=Ll(x??[],{indicator:"map-value-ind",next:b,offset:h.range[2],onError:i,parentIndent:l.indent,startOnNewline:!f||f.type==="block-scalar"});if(s=C.end,C.found){g&&((b==null?void 0:b.type)==="block-map"&&!C.hasNewline&&i(s,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&_.start<C.found.offset-1024&&i(h.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const w=b?e(t,b,C,i):n(t,s,x,null,C,i);t.schema.compat&&gs(l.indent,b,i),s=w.range[2];const L=new Me(h,w);t.options.keepSourceTokens&&(L.srcToken=m),o.items.push(L)}else{g&&i(h.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),C.comment&&(h.comment?h.comment+=`
`+C.comment:h.comment=C.comment);const w=new Me(h);t.options.keepSourceTokens&&(w.srcToken=m),o.items.push(w)}}return c&&c<s&&i(c,"IMPOSSIBLE","Map comment with trailing content"),o.range=[l.offset,s,c??s],o}function yh({composeNode:e,composeEmptyNode:n},t,l,i,r){const a=(r==null?void 0:r.nodeClass)??bt,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let s=l.offset,c=null;for(const{start:u,value:m}of l.items){const y=Ll(u,{indicator:"seq-item-ind",next:m,offset:s,onError:i,parentIndent:l.indent,startOnNewline:!0});if(!y.found)if(y.anchor||y.tag||m)m&&m.type==="block-seq"?i(y.end,"BAD_INDENT","All sequence items must start at the same column"):i(s,"MISSING_CHAR","Sequence item without - indicator");else{c=y.end,y.comment&&(o.comment=y.comment);continue}const f=m?e(t,m,y,i):n(t,y.end,u,null,y,i);t.schema.compat&&gs(l.indent,m,i),s=f.range[2],o.items.push(f)}return o.range=[l.offset,s,c??s],o}function Ri(e,n,t,l){let i="";if(e){let r=!1,a="";for(const o of e){const{source:s,type:c}=o;switch(c){case"space":r=!0;break;case"comment":{t&&!r&&l(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=s.substring(1)||" ";i?i+=a+u:i=u,a="";break}case"newline":i&&(a+=s),r=!0;break;default:l(o,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}n+=s.length}}return{comment:i,offset:n}}const fo="Block collections are not allowed within flow collections",po=e=>e&&(e.type==="block-map"||e.type==="block-seq");function gh({composeNode:e,composeEmptyNode:n},t,l,i,r){const a=l.start.source==="{",o=a?"flow map":"flow sequence",s=(r==null?void 0:r.nodeClass)??(a?Ze:bt),c=new s(t.schema);c.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let m=l.offset+l.start.source.length;for(let _=0;_<l.items.length;++_){const g=l.items[_],{start:p,key:h,sep:C,value:w}=g,L=Ll(p,{flow:o,indicator:"explicit-key-ind",next:h??(C==null?void 0:C[0]),offset:m,onError:i,parentIndent:l.indent,startOnNewline:!1});if(!L.found){if(!L.anchor&&!L.tag&&!C&&!w){_===0&&L.comma?i(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):_<l.items.length-1&&i(L.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),L.comment&&(c.comment?c.comment+=`
`+L.comment:c.comment=L.comment),m=L.end;continue}!a&&t.options.strict&&Ei(h)&&i(h,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)L.comma&&i(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(L.comma||i(L.start,"MISSING_CHAR",`Missing , between ${o} items`),L.comment){let k="";e:for(const v of p)switch(v.type){case"comma":case"space":break;case"comment":k=v.source.substring(1);break e;default:break e}if(k){let v=c.items[c.items.length-1];me(v)&&(v=v.value??v.key),v.comment?v.comment+=`
`+k:v.comment=k,L.comment=L.comment.substring(k.length+1)}}if(!a&&!C&&!L.found){const k=w?e(t,w,L,i):n(t,L.end,C,null,L,i);c.items.push(k),m=k.range[2],po(w)&&i(k.range,"BLOCK_IN_FLOW",fo)}else{t.atKey=!0;const k=L.end,v=h?e(t,h,L,i):n(t,k,p,null,L,i);po(h)&&i(v.range,"BLOCK_IN_FLOW",fo),t.atKey=!1;const V=Ll(C??[],{flow:o,indicator:"map-value-ind",next:w,offset:v.range[2],onError:i,parentIndent:l.indent,startOnNewline:!1});if(V.found){if(!a&&!L.found&&t.options.strict){if(C)for(const U of C){if(U===V.found)break;if(U.type==="newline"){i(U,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}L.start<V.found.offset-1024&&i(V.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else w&&("source"in w&&w.source&&w.source[0]===":"?i(w,"MISSING_CHAR",`Missing space after : in ${o}`):i(V.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const E=w?e(t,w,V,i):V.found?n(t,V.end,C,null,V,i):null;E?po(w)&&i(E.range,"BLOCK_IN_FLOW",fo):V.comment&&(v.comment?v.comment+=`
`+V.comment:v.comment=V.comment);const q=new Me(v,E);if(t.options.keepSourceTokens&&(q.srcToken=g),a){const U=c;lp(t,U.items,v)&&i(k,"DUPLICATE_KEY","Map keys must be unique"),U.items.push(q)}else{const U=new Ze(t.schema);U.flow=!0,U.items.push(q);const $=(E??v).range;U.range=[v.range[0],$[1],$[2]],c.items.push(U)}m=E?E.range[2]:V.end}}const y=a?"}":"]",[f,...x]=l.end;let b=m;if(f&&f.source===y)b=f.offset+f.source.length;else{const _=o[0].toUpperCase()+o.substring(1),g=u?`${_} must end with a ${y}`:`${_} in block collection must be sufficiently indented and end with a ${y}`;i(m,u?"MISSING_CHAR":"BAD_INDENT",g),f&&f.source.length!==1&&x.unshift(f)}if(x.length>0){const _=Ri(x,b,t.options.strict,i);_.comment&&(c.comment?c.comment+=`
`+_.comment:c.comment=_.comment),c.range=[l.offset,b,_.offset]}else c.range=[l.offset,b,b];return c}function yo(e,n,t,l,i,r){const a=t.type==="block-map"?ph(e,n,t,l,r):t.type==="block-seq"?yh(e,n,t,l,r):gh(e,n,t,l,r),o=a.constructor;return i==="!"||i===o.tagName?(a.tag=o.tagName,a):(i&&(a.tag=i),a)}function bh(e,n,t,l,i){var y;const r=l.tag,a=r?n.directives.tagName(r.source,f=>i(r,"TAG_RESOLVE_FAILED",f)):null;if(t.type==="block-seq"){const{anchor:f,newlineAfterProp:x}=l,b=f&&r?f.offset>r.offset?f:r:f??r;b&&(!x||x.offset<b.offset)&&i(b,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===Ze.tagName&&o==="map"||a===bt.tagName&&o==="seq")return yo(e,n,t,i,a);let s=n.schema.tags.find(f=>f.tag===a&&f.collection===o);if(!s){const f=n.schema.knownTags[a];if(f&&f.collection===o)n.schema.tags.push(Object.assign({},f,{default:!1})),s=f;else return f?i(r,"BAD_COLLECTION_TYPE",`${f.tag} used for ${o} collection, but expects ${f.collection??"scalar"}`,!0):i(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),yo(e,n,t,i,a)}const c=yo(e,n,t,i,a,s),u=((y=s.resolve)==null?void 0:y.call(s,c,f=>i(r,"TAG_RESOLVE_FAILED",f),n.options))??c,m=ge(u)?u:new z(u);return m.range=c.range,m.tag=a,s!=null&&s.format&&(m.format=s.format),m}function ip(e,n,t){const l=n.offset,i=hh(n,e.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[l,l,l]};const r=i.mode===">"?z.BLOCK_FOLDED:z.BLOCK_LITERAL,a=n.source?_h(n.source):[];let o=a.length;for(let b=a.length-1;b>=0;--b){const _=a[b][1];if(_===""||_==="\r")o=b;else break}if(o===0){const b=i.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let _=l+i.length;return n.source&&(_+=n.source.length),{value:b,type:r,comment:i.comment,range:[l,_,_]}}let s=n.indent+i.indent,c=n.offset+i.length,u=0;for(let b=0;b<o;++b){const[_,g]=a[b];if(g===""||g==="\r")i.indent===0&&_.length>s&&(s=_.length);else{_.length<s&&t(c+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(s=_.length),u=b,s===0&&!e.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=_.length+g.length+1}for(let b=a.length-1;b>=o;--b)a[b][0].length>s&&(o=b+1);let m="",y="",f=!1;for(let b=0;b<u;++b)m+=a[b][0].slice(s)+`
`;for(let b=u;b<o;++b){let[_,g]=a[b];c+=_.length+g.length+1;const p=g[g.length-1]==="\r";if(p&&(g=g.slice(0,-1)),g&&_.length<s){const C=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(c-g.length-(p?2:1),"BAD_INDENT",C),_=""}r===z.BLOCK_LITERAL?(m+=y+_.slice(s)+g,y=`
`):_.length>s||g[0]==="	"?(y===" "?y=`
`:!f&&y===`
`&&(y=`

`),m+=y+_.slice(s)+g,y=`
`,f=!0):g===""?y===`
`?m+=`
`:y=`
`:(m+=y+g,y=" ",f=!1)}switch(i.chomp){case"-":break;case"+":for(let b=o;b<a.length;++b)m+=`
`+a[b][0].slice(s);m[m.length-1]!==`
`&&(m+=`
`);break;default:m+=`
`}const x=l+i.length+n.source.length;return{value:m,type:r,comment:i.comment,range:[l,x,x]}}function hh({offset:e,props:n},t,l){if(n[0].type!=="block-scalar-header")return l(n[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=n[0],r=i[0];let a=0,o="",s=-1;for(let y=1;y<i.length;++y){const f=i[y];if(!o&&(f==="-"||f==="+"))o=f;else{const x=Number(f);!a&&x?a=x:s===-1&&(s=e+y)}}s!==-1&&l(s,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let c=!1,u="",m=i.length;for(let y=1;y<n.length;++y){const f=n[y];switch(f.type){case"space":c=!0;case"newline":m+=f.source.length;break;case"comment":t&&!c&&l(f,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),m+=f.source.length,u=f.source.substring(1);break;case"error":l(f,"UNEXPECTED_TOKEN",f.message),m+=f.source.length;break;default:{const x=`Unexpected token in block scalar header: ${f.type}`;l(f,"UNEXPECTED_TOKEN",x);const b=f.source;b&&typeof b=="string"&&(m+=b.length)}}}return{mode:r,indent:a,chomp:o,comment:u,length:m}}function _h(e){const n=e.split(/\n( *)/),t=n[0],l=t.match(/^( *)/),r=[l!=null&&l[1]?[l[1],t.slice(l[1].length)]:["",t]];for(let a=1;a<n.length;a+=2)r.push([n[a],n[a+1]]);return r}function rp(e,n,t){const{offset:l,type:i,source:r,end:a}=e;let o,s;const c=(y,f,x)=>t(l+y,f,x);switch(i){case"scalar":o=z.PLAIN,s=xh(r,c);break;case"single-quoted-scalar":o=z.QUOTE_SINGLE,s=vh(r,c);break;case"double-quoted-scalar":o=z.QUOTE_DOUBLE,s=Ch(r,c);break;default:return t(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[l,l+r.length,l+r.length]}}const u=l+r.length,m=Ri(a,u,n,t);return{value:s,type:o,comment:m.comment,range:[l,u,m.offset]}}function xh(e,n){let t="";switch(e[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${e[0]}`;break}case"@":case"`":{t=`reserved character ${e[0]}`;break}}return t&&n(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),ap(e)}function vh(e,n){return(e[e.length-1]!=="'"||e.length===1)&&n(e.length,"MISSING_CHAR","Missing closing 'quote"),ap(e.slice(1,-1)).replace(/''/g,"'")}function ap(e){let n,t;try{n=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{n=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let l=n.exec(e);if(!l)return e;let i=l[1],r=" ",a=n.lastIndex;for(t.lastIndex=a;l=t.exec(e);)l[1]===""?r===`
`?i+=r:r=`
`:(i+=r+l[1],r=" "),a=t.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=a,l=o.exec(e),i+r+((l==null?void 0:l[1])??"")}function Ch(e,n){let t="";for(let l=1;l<e.length-1;++l){const i=e[l];if(!(i==="\r"&&e[l+1]===`
`))if(i===`
`){const{fold:r,offset:a}=wh(e,l);t+=r,l=a}else if(i==="\\"){let r=e[++l];const a=Sh[r];if(a)t+=a;else if(r===`
`)for(r=e[l+1];r===" "||r==="	";)r=e[++l+1];else if(r==="\r"&&e[l+1]===`
`)for(r=e[++l+1];r===" "||r==="	";)r=e[++l+1];else if(r==="x"||r==="u"||r==="U"){const o={x:2,u:4,U:8}[r];t+=Lh(e,l+1,o,n),l+=o}else{const o=e.substr(l-1,2);n(l-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(i===" "||i==="	"){const r=l;let a=e[l+1];for(;a===" "||a==="	";)a=e[++l+1];a!==`
`&&!(a==="\r"&&e[l+2]===`
`)&&(t+=l>r?e.slice(r,l+1):i)}else t+=i}return(e[e.length-1]!=='"'||e.length===1)&&n(e.length,"MISSING_CHAR",'Missing closing "quote'),t}function wh(e,n){let t="",l=e[n+1];for(;(l===" "||l==="	"||l===`
`||l==="\r")&&!(l==="\r"&&e[n+2]!==`
`);)l===`
`&&(t+=`
`),n+=1,l=e[n+1];return t||(t=" "),{fold:t,offset:n}}const Sh={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Lh(e,n,t,l){const i=e.substr(n,t),a=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(a)){const o=e.substr(n-2,t+2);return l(n-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(a)}function op(e,n,t,l){const{value:i,type:r,comment:a,range:o}=n.type==="block-scalar"?ip(e,n,l):rp(n,e.options.strict,l),s=t?e.directives.tagName(t.source,m=>l(t,"TAG_RESOLVE_FAILED",m)):null;let c;e.options.stringKeys&&e.atKey?c=e.schema[On]:s?c=kh(e.schema,i,s,t,l):n.type==="scalar"?c=Ph(e,i,n,l):c=e.schema[On];let u;try{const m=c.resolve(i,y=>l(t??n,"TAG_RESOLVE_FAILED",y),e.options);u=re(m)?m:new z(m)}catch(m){const y=m instanceof Error?m.message:String(m);l(t??n,"TAG_RESOLVE_FAILED",y),u=new z(i)}return u.range=o,u.source=i,r&&(u.type=r),s&&(u.tag=s),c.format&&(u.format=c.format),a&&(u.comment=a),u}function kh(e,n,t,l,i){var o;if(t==="!")return e[On];const r=[];for(const s of e.tags)if(!s.collection&&s.tag===t)if(s.default&&s.test)r.push(s);else return s;for(const s of r)if((o=s.test)!=null&&o.test(n))return s;const a=e.knownTags[t];return a&&!a.collection?(e.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(i(l,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),e[On])}function Ph({atKey:e,directives:n,schema:t},l,i,r){const a=t.tags.find(o=>{var s;return(o.default===!0||e&&o.default==="key")&&((s=o.test)==null?void 0:s.test(l))})||t[On];if(t.compat){const o=t.compat.find(s=>{var c;return s.default&&((c=s.test)==null?void 0:c.test(l))})??t[On];if(a.tag!==o.tag){const s=n.tagString(a.tag),c=n.tagString(o.tag),u=`Value may be parsed as either ${s} or ${c}`;r(i,"TAG_RESOLVE_FAILED",u,!0)}}return a}function Nh(e,n,t){if(n){t??(t=n.length);for(let l=t-1;l>=0;--l){let i=n[l];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=n[++l];(i==null?void 0:i.type)==="space";)e+=i.source.length,i=n[++l];break}}return e}const Ah={composeNode:sp,composeEmptyNode:Ac};function sp(e,n,t,l){const i=e.atKey,{spaceBefore:r,comment:a,anchor:o,tag:s}=t;let c,u=!0;switch(n.type){case"alias":c=Ih(e,n,l),(o||s)&&l(n,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=op(e,n,s,l),o&&(c.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=bh(Ah,e,n,t,l),o&&(c.anchor=o.source.substring(1));break;default:{const m=n.type==="error"?n.message:`Unsupported token (type: ${n.type})`;l(n,"UNEXPECTED_TOKEN",m),c=Ac(e,n.offset,void 0,null,t,l),u=!1}}return o&&c.anchor===""&&l(o,"BAD_ALIAS","Anchor cannot be an empty string"),i&&e.options.stringKeys&&(!re(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&l(s??n,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(c.spaceBefore=!0),a&&(n.type==="scalar"&&n.source===""?c.comment=a:c.commentBefore=a),e.options.keepSourceTokens&&u&&(c.srcToken=n),c}function Ac(e,n,t,l,{spaceBefore:i,comment:r,anchor:a,tag:o,end:s},c){const u={type:"scalar",offset:Nh(n,t,l),indent:-1,source:""},m=op(e,u,o,c);return a&&(m.anchor=a.source.substring(1),m.anchor===""&&c(a,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(m.spaceBefore=!0),r&&(m.comment=r,m.range[2]=s),m}function Ih({options:e},{offset:n,source:t,end:l},i){const r=new La(t.substring(1));r.source===""&&i(n,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&i(n+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=n+t.length,o=Ri(l,a,e.strict,i);return r.range=[n,a,o.offset],o.comment&&(r.comment=o.comment),r}function Eh(e,n,{offset:t,start:l,value:i,end:r},a){const o=Object.assign({_directives:n},e),s=new Ml(void 0,o),c={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},u=Ll(l,{indicator:"doc-start",next:i??(r==null?void 0:r[0]),offset:t,onError:a,parentIndent:0,startOnNewline:!0});u.found&&(s.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&a(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),s.contents=i?sp(c,i,u,a):Ac(c,u.end,l,null,u,a);const m=s.contents.range[2],y=Ri(r,m,!1,a);return y.comment&&(s.comment=y.comment),s.range=[t,m,y.offset],s}function zl(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:n,source:t}=e;return[n,n+(typeof t=="string"?t.length:1)]}function Xd(e){var i;let n="",t=!1,l=!1;for(let r=0;r<e.length;++r){const a=e[r];switch(a[0]){case"#":n+=(n===""?"":l?`

`:`
`)+(a.substring(1)||" "),t=!0,l=!1;break;case"%":((i=e[r+1])==null?void 0:i[0])!=="#"&&(r+=1),t=!1;break;default:t||(l=!0),t=!1}}return{comment:n,afterEmptyLine:l}}class Ic{constructor(n={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,l,i,r)=>{const a=zl(t);r?this.warnings.push(new tp(a,l,i)):this.errors.push(new At(a,l,i))},this.directives=new Oe({version:n.version||"1.2"}),this.options=n}decorate(n,t){const{comment:l,afterEmptyLine:i}=Xd(this.prelude);if(l){const r=n.contents;if(t)n.comment=n.comment?`${n.comment}
${l}`:l;else if(i||n.directives.docStart||!r)n.commentBefore=l;else if(pe(r)&&!r.flow&&r.items.length>0){let a=r.items[0];me(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${l}
${o}`:l}else{const a=r.commentBefore;r.commentBefore=a?`${l}
${a}`:l}}t?(Array.prototype.push.apply(n.errors,this.errors),Array.prototype.push.apply(n.warnings,this.warnings)):(n.errors=this.errors,n.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Xd(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(n,t=!1,l=-1){for(const i of n)yield*this.next(i);yield*this.end(t,l)}*next(n){switch(n.type){case"directive":this.directives.add(n.source,(t,l,i)=>{const r=zl(n);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",l,i)}),this.prelude.push(n.source),this.atDirectives=!0;break;case"document":{const t=Eh(this.options,this.directives,n,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(n,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(n.source);break;case"error":{const t=n.source?`${n.message}: ${JSON.stringify(n.source)}`:n.message,l=new At(zl(n),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(l):this.doc.errors.push(l);break}case"doc-end":{if(!this.doc){const l="Unexpected doc-end without preceding document";this.errors.push(new At(zl(n),"UNEXPECTED_TOKEN",l));break}this.doc.directives.docEnd=!0;const t=Ri(n.end,n.offset+n.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const l=this.doc.comment;this.doc.comment=l?`${l}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new At(zl(n),"UNEXPECTED_TOKEN",`Unsupported token ${n.type}`))}}*end(n=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(n){const l=Object.assign({_directives:this.directives},this.options),i=new Ml(void 0,l);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}function Dh(e,n=!0,t){if(e){const l=(i,r,a)=>{const o=typeof i=="number"?i:Array.isArray(i)?i[0]:i.offset;if(t)t(o,r,a);else throw new At([o,o+1],r,a)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return rp(e,n,l);case"block-scalar":return ip({options:{strict:n}},e,l)}}return null}function Vh(e,n){const{implicitKey:t=!1,indent:l,inFlow:i=!1,offset:r=-1,type:a="PLAIN"}=n,o=Oi({type:a,value:e},{implicitKey:t,indent:l>0?" ".repeat(l):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}}),s=n.end??[{type:"newline",offset:-1,indent:l,source:`
`}];switch(o[0]){case"|":case">":{const c=o.indexOf(`
`),u=o.substring(0,c),m=o.substring(c+1)+`
`,y=[{type:"block-scalar-header",offset:r,indent:l,source:u}];return cp(y,s)||y.push({type:"newline",offset:-1,indent:l,source:`
`}),{type:"block-scalar",offset:r,indent:l,props:y,source:m}}case'"':return{type:"double-quoted-scalar",offset:r,indent:l,source:o,end:s};case"'":return{type:"single-quoted-scalar",offset:r,indent:l,source:o,end:s};default:return{type:"scalar",offset:r,indent:l,source:o,end:s}}}function Th(e,n,t={}){let{afterKey:l=!1,implicitKey:i=!1,inFlow:r=!1,type:a}=t,o="indent"in e?e.indent:null;if(l&&typeof o=="number"&&(o+=2),!a)switch(e.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const c=e.props[0];if(c.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=c.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const s=Oi({type:a,value:n},{implicitKey:i||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(s[0]){case"|":case">":Mh(e,s);break;case'"':go(e,s,"double-quoted-scalar");break;case"'":go(e,s,"single-quoted-scalar");break;default:go(e,s,"scalar")}}function Mh(e,n){const t=n.indexOf(`
`),l=n.substring(0,t),i=n.substring(t+1)+`
`;if(e.type==="block-scalar"){const r=e.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=l,e.source=i}else{const{offset:r}=e,a="indent"in e?e.indent:-1,o=[{type:"block-scalar-header",offset:r,indent:a,source:l}];cp(o,"end"in e?e.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const s of Object.keys(e))s!=="type"&&s!=="offset"&&delete e[s];Object.assign(e,{type:"block-scalar",indent:a,props:o,source:i})}}function cp(e,n){if(n)for(const t of n)switch(t.type){case"space":case"comment":e.push(t);break;case"newline":return e.push(t),!0}return!1}function go(e,n,t){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=t,e.source=n;break;case"block-scalar":{const l=e.props.slice(1);let i=n.length;e.props[0].type==="block-scalar-header"&&(i-=e.props[0].source.length);for(const r of l)r.offset+=i;delete e.props,Object.assign(e,{type:t,source:n,end:l});break}case"block-map":case"block-seq":{const i={type:"newline",offset:e.offset+n.length,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:t,source:n,end:[i]});break}default:{const l="indent"in e?e.indent:-1,i="end"in e&&Array.isArray(e.end)?e.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(e))r!=="type"&&r!=="offset"&&delete e[r];Object.assign(e,{type:t,indent:l,source:n,end:i})}}}const Gh=e=>"type"in e?aa(e):Ir(e);function aa(e){switch(e.type){case"block-scalar":{let n="";for(const t of e.props)n+=aa(t);return n+e.source}case"block-map":case"block-seq":{let n="";for(const t of e.items)n+=Ir(t);return n}case"flow-collection":{let n=e.start.source;for(const t of e.items)n+=Ir(t);for(const t of e.end)n+=t.source;return n}case"document":{let n=Ir(e);if(e.end)for(const t of e.end)n+=t.source;return n}default:{let n=e.source;if("end"in e&&e.end)for(const t of e.end)n+=t.source;return n}}}function Ir({start:e,key:n,sep:t,value:l}){let i="";for(const r of e)i+=r.source;if(n&&(i+=aa(n)),t)for(const r of t)i+=r.source;return l&&(i+=aa(l)),i}const bs=Symbol("break visit"),Bh=Symbol("skip children"),dp=Symbol("remove item");function Bt(e,n){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),up(Object.freeze([]),e,n)}Bt.BREAK=bs;Bt.SKIP=Bh;Bt.REMOVE=dp;Bt.itemAtPath=(e,n)=>{let t=e;for(const[l,i]of n){const r=t==null?void 0:t[l];if(r&&"items"in r)t=r.items[i];else return}return t};Bt.parentCollection=(e,n)=>{const t=Bt.itemAtPath(e,n.slice(0,-1)),l=n[n.length-1][0],i=t==null?void 0:t[l];if(i&&"items"in i)return i;throw new Error("Parent collection not found")};function up(e,n,t){let l=t(n,e);if(typeof l=="symbol")return l;for(const i of["key","value"]){const r=n[i];if(r&&"items"in r){for(let a=0;a<r.items.length;++a){const o=up(Object.freeze(e.concat([[i,a]])),r.items[a],t);if(typeof o=="number")a=o-1;else{if(o===bs)return bs;o===dp&&(r.items.splice(a,1),a-=1)}}typeof l=="function"&&i==="key"&&(l=l(n,e))}}return typeof l=="function"?l(n,e):l}const Ma="\uFEFF",Ga="",Ba="",Di="",Oh=e=>!!e&&"items"in e,Fh=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function Rh(e){switch(e){case Ma:return"<BOM>";case Ga:return"<DOC>";case Ba:return"<FLOW_END>";case Di:return"<SCALAR>";default:return JSON.stringify(e)}}function mp(e){switch(e){case Ma:return"byte-order-mark";case Ga:return"doc-mode";case Ba:return"flow-error-end";case Di:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const jh=Object.freeze(Object.defineProperty({__proto__:null,BOM:Ma,DOCUMENT:Ga,FLOW_END:Ba,SCALAR:Di,createScalarToken:Vh,isCollection:Oh,isScalar:Fh,prettyToken:Rh,resolveAsScalar:Dh,setScalarValue:Th,stringify:Gh,tokenType:mp,visit:Bt},Symbol.toStringTag,{value:"Module"}));function Cn(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Jd=new Set("0123456789ABCDEFabcdef"),Uh=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),cr=new Set(",[]{}"),Wh=new Set(` ,[]{}
\r	`),bo=e=>!e||Wh.has(e);class fp{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(n,t=!1){if(n){if(typeof n!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+n:n,this.lineEndPos=null}this.atEnd=!t;let l=this.next??"stream";for(;l&&(t||this.hasChars(1));)l=yield*this.parseNext(l)}atLineEnd(){let n=this.pos,t=this.buffer[n];for(;t===" "||t==="	";)t=this.buffer[++n];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[n+1]===`
`:!1}charAt(n){return this.buffer[this.pos+n]}continueScalar(n){let t=this.buffer[n];if(this.indentNext>0){let l=0;for(;t===" ";)t=this.buffer[++l+n];if(t==="\r"){const i=this.buffer[l+n+1];if(i===`
`||!i&&!this.atEnd)return n+l+1}return t===`
`||l>=this.indentNext||!t&&!this.atEnd?n+l:-1}if(t==="-"||t==="."){const l=this.buffer.substr(n,3);if((l==="---"||l==="...")&&Cn(this.buffer[n+3]))return-1}return n}getLine(){let n=this.lineEndPos;return(typeof n!="number"||n!==-1&&n<this.pos)&&(n=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=n),n===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[n-1]==="\r"&&(n-=1),this.buffer.substring(this.pos,n))}hasChars(n){return this.pos+n<=this.buffer.length}setNext(n){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=n,null}peek(n){return this.buffer.substr(this.pos,n)}*parseNext(n){switch(n){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let n=this.getLine();if(n===null)return this.setNext("stream");if(n[0]===Ma&&(yield*this.pushCount(1),n=n.substring(1)),n[0]==="%"){let t=n.length,l=n.indexOf("#");for(;l!==-1;){const r=n[l-1];if(r===" "||r==="	"){t=l-1;break}else l=n.indexOf("#",l+1)}for(;;){const r=n[t-1];if(r===" "||r==="	")t-=1;else break}const i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(n.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(n.length-t),yield*this.pushNewline(),"stream"}return yield Ga,yield*this.parseLineStart()}*parseLineStart(){const n=this.charAt(0);if(!n&&!this.atEnd)return this.setNext("line-start");if(n==="-"||n==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Cn(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Cn(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[n,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((n==="-"||n==="?"||n===":")&&Cn(t)){const l=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=l,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const n=this.getLine();if(n===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(n[t]){case"#":yield*this.pushCount(n.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(bo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(n.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let n,t,l=-1;do n=yield*this.pushNewline(),n>0?(t=yield*this.pushSpaces(!1),this.indentValue=l=t):t=0,t+=yield*this.pushSpaces(!0);while(n+t>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((l!==-1&&l<this.indentNext&&i[0]!=="#"||l===0&&(i.startsWith("---")||i.startsWith("..."))&&Cn(i[3]))&&!(l===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield Ba,yield*this.parseLineStart();let r=0;for(;i[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),i[r]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(bo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Cn(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const n=this.charAt(0);let t=this.buffer.indexOf(n,this.pos+1);if(n==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const l=this.buffer.substring(0,t);let i=l.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const r=this.continueScalar(i+1);if(r===-1)break;i=l.indexOf(`
`,r)}i!==-1&&(t=i-(l[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let n=this.pos;for(;;){const t=this.buffer[++n];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Cn(t)||t==="#")}*parseBlockScalar(){let n=this.pos-1,t=0,l;e:for(let r=this.pos;l=this.buffer[r];++r)switch(l){case" ":t+=1;break;case`
`:n=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!l&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(n+1);if(r===-1)break;n=this.buffer.indexOf(`
`,r)}while(n!==-1);if(n===-1){if(!this.atEnd)return this.setNext("block-scalar");n=this.buffer.length}}let i=n+1;for(l=this.buffer[i];l===" ";)l=this.buffer[++i];if(l==="	"){for(;l==="	"||l===" "||l==="\r"||l===`
`;)l=this.buffer[++i];n=i-1}else if(!this.blockScalarKeep)do{let r=n-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)n=r;else break}while(!0);return yield Di,yield*this.pushToIndex(n+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const n=this.flowLevel>0;let t=this.pos-1,l=this.pos-1,i;for(;i=this.buffer[++l];)if(i===":"){const r=this.buffer[l+1];if(Cn(r)||n&&cr.has(r))break;t=l}else if(Cn(i)){let r=this.buffer[l+1];if(i==="\r"&&(r===`
`?(l+=1,i=`
`,r=this.buffer[l+1]):t=l),r==="#"||n&&cr.has(r))break;if(i===`
`){const a=this.continueScalar(l+1);if(a===-1)break;l=Math.max(l,a-2)}}else{if(n&&cr.has(i))break;t=l}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Di,yield*this.pushToIndex(t+1,!0),n?"flow":"doc")}*pushCount(n){return n>0?(yield this.buffer.substr(this.pos,n),this.pos+=n,n):0}*pushToIndex(n,t){const l=this.buffer.slice(this.pos,n);return l?(yield l,this.pos+=l.length,l.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(bo))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const n=this.flowLevel>0,t=this.charAt(1);if(Cn(t)||n&&cr.has(t))return n?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let n=this.pos+2,t=this.buffer[n];for(;!Cn(t)&&t!==">";)t=this.buffer[++n];return yield*this.pushToIndex(t===">"?n+1:n,!1)}else{let n=this.pos+1,t=this.buffer[n];for(;t;)if(Uh.has(t))t=this.buffer[++n];else if(t==="%"&&Jd.has(this.buffer[n+1])&&Jd.has(this.buffer[n+2]))t=this.buffer[n+=3];else break;return yield*this.pushToIndex(n,!1)}}*pushNewline(){const n=this.buffer[this.pos];return n===`
`?yield*this.pushCount(1):n==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(n){let t=this.pos-1,l;do l=this.buffer[++t];while(l===" "||n&&l==="	");const i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(n){let t=this.pos,l=this.buffer[t];for(;!n(l);)l=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class pp{constructor(){this.lineStarts=[],this.addNewLine=n=>this.lineStarts.push(n),this.linePos=n=>{let t=0,l=this.lineStarts.length;for(;t<l;){const r=t+l>>1;this.lineStarts[r]<n?t=r+1:l=r}if(this.lineStarts[t]===n)return{line:t+1,col:1};if(t===0)return{line:0,col:n};const i=this.lineStarts[t-1];return{line:t,col:n-i+1}}}}function nt(e,n){for(let t=0;t<e.length;++t)if(e[t].type===n)return!0;return!1}function Zd(e){for(let n=0;n<e.length;++n)switch(e[n].type){case"space":case"comment":case"newline":break;default:return n}return-1}function yp(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function dr(e){switch(e.type){case"document":return e.start;case"block-map":{const n=e.items[e.items.length-1];return n.sep??n.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function $t(e){var t;if(e.length===0)return[];let n=e.length;e:for(;--n>=0;)switch(e[n].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=e[++n])==null?void 0:t.type)==="space";);return e.splice(n,e.length)}function eu(e){if(e.start.type==="flow-seq-start")for(const n of e.items)n.sep&&!n.value&&!nt(n.start,"explicit-key-ind")&&!nt(n.sep,"map-value-ind")&&(n.key&&(n.value=n.key),delete n.key,yp(n.value)?n.value.end?Array.prototype.push.apply(n.value.end,n.sep):n.value.end=n.sep:Array.prototype.push.apply(n.start,n.sep),delete n.sep)}class Ec{constructor(n){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new fp,this.onNewLine=n}*parse(n,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const l of this.lexer.lex(n,t))yield*this.next(l);t||(yield*this.end())}*next(n){if(this.source=n,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=n.length;return}const t=mp(n);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+n.length);break;case"space":this.atNewLine&&n[0]===" "&&(this.indent+=n.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=n.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=n.length}else{const l=`Not a YAML token: ${n}`;yield*this.pop({type:"error",offset:this.offset,message:l,source:n}),this.offset+=n.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const n=this.peek(1);if(this.type==="doc-end"&&(!n||n.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!n)return yield*this.stream();switch(n.type){case"document":return yield*this.document(n);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(n);case"block-scalar":return yield*this.blockScalar(n);case"block-map":return yield*this.blockMap(n);case"block-seq":return yield*this.blockSequence(n);case"flow-collection":return yield*this.flowCollection(n);case"doc-end":return yield*this.documentEnd(n)}yield*this.pop()}peek(n){return this.stack[this.stack.length-n]}*pop(n){const t=n??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const l=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in l?l.indent:0:t.type==="flow-collection"&&l.type==="document"&&(t.indent=0),t.type==="flow-collection"&&eu(t),l.type){case"document":l.value=t;break;case"block-scalar":l.props.push(t);break;case"block-map":{const i=l.items[l.items.length-1];if(i.value){l.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=l.items[l.items.length-1];i.value?l.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=l.items[l.items.length-1];!i||i.value?l.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((l.type==="document"||l.type==="block-map"||l.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&Zd(i.start)===-1&&(t.indent===0||i.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(l.type==="document"?l.end=i.start:l.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const n={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&n.start.push(this.sourceToken),this.stack.push(n);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(n){if(n.value)return yield*this.lineEnd(n);switch(this.type){case"doc-start":{Zd(n.start)!==-1?(yield*this.pop(),yield*this.step()):n.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":n.start.push(this.sourceToken);return}const t=this.startBlockValue(n);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(n){if(this.type==="map-value-ind"){const t=dr(this.peek(2)),l=$t(t);let i;n.end?(i=n.end,i.push(this.sourceToken),delete n.end):i=[this.sourceToken];const r={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:l,key:n,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(n)}*blockScalar(n){switch(this.type){case"space":case"comment":case"newline":n.props.push(this.sourceToken);return;case"scalar":if(n.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(n){var l;const t=n.items[n.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0,r=Array.isArray(i)?i[i.length-1]:void 0;(r==null?void 0:r.type)==="comment"?i==null||i.push(this.sourceToken):n.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)n.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,n.indent)){const i=n.items[n.items.length-2],r=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),n.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=n.indent){const i=!this.onKeyLine&&this.indent===n.indent,r=i&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(r&&t.sep&&!t.value){const o=[];for(let s=0;s<t.sep.length;++s){const c=t.sep[s];switch(c.type){case"newline":o.push(s);break;case"space":break;case"comment":c.indent>n.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(a=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(a.push(this.sourceToken),n.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(a.push(this.sourceToken),n.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)n.items.push({start:[],key:null,sep:[this.sourceToken]});else if(nt(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(yp(t.key)&&!nt(t.sep,"newline")){const o=$t(t.start),s=t.key,c=t.sep;c.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:s,sep:c}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(nt(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=$t(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?n.items.push({start:a,key:null,sep:[this.sourceToken]}):nt(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);r||t.value?(n.items.push({start:a,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(n);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!nt(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&n.items.push({start:a});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(n){var l;const t=n.items[n.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0,r=Array.isArray(i)?i[i.length-1]:void 0;(r==null?void 0:r.type)==="comment"?i==null||i.push(this.sourceToken):n.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)n.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,n.indent)){const i=n.items[n.items.length-2],r=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),n.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=n.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==n.indent)break;t.value||nt(t.start,"seq-item-ind")?n.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>n.indent){const i=this.startBlockValue(n);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(n){const t=n.items[n.items.length-1];if(this.type==="flow-error-end"){let l;do yield*this.pop(),l=this.peek(1);while(l&&l.type==="flow-collection")}else if(n.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?n.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?n.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?n.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!t||t.value?n.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":n.end.push(this.sourceToken);return}const l=this.startBlockValue(n);l?this.stack.push(l):(yield*this.pop(),yield*this.step())}else{const l=this.peek(2);if(l.type==="block-map"&&(this.type==="map-value-ind"&&l.indent===n.indent||this.type==="newline"&&!l.items[l.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&l.type!=="flow-collection"){const i=dr(l),r=$t(i);eu(n);const a=n.end.splice(1,n.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:r,key:n,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(n)}}flowScalar(n){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:n,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(n){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=dr(n),l=$t(t);return l.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=dr(n),l=$t(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(n,t){return this.type!=="comment"||this.indent<=t?!1:n.every(l=>l.type==="newline"||l.type==="space")}*documentEnd(n){this.type!=="doc-mode"&&(n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(n){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function gp(e){const n=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||n&&new pp||null,prettyErrors:n}}function $h(e,n={}){const{lineCounter:t,prettyErrors:l}=gp(n),i=new Ec(t==null?void 0:t.addNewLine),r=new Ic(n),a=Array.from(r.compose(i.parse(e)));if(l&&t)for(const o of a)o.errors.forEach(ra(e,t)),o.warnings.forEach(ra(e,t));return a.length>0?a:Object.assign([],{empty:!0},r.streamInfo())}function bp(e,n={}){const{lineCounter:t,prettyErrors:l}=gp(n),i=new Ec(t==null?void 0:t.addNewLine),r=new Ic(n);let a=null;for(const o of r.compose(i.parse(e),!0,e.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new At(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return l&&t&&(a.errors.forEach(ra(e,t)),a.warnings.forEach(ra(e,t))),a}function Hh(e,n,t){let l;typeof n=="function"?l=n:t===void 0&&n&&typeof n=="object"&&(t=n);const i=bp(e,t);if(!i)return null;if(i.warnings.forEach(r=>Bf(i.options.logLevel,r)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:l},t))}function qh(e,n,t){let l=null;if(typeof n=="function"||Array.isArray(n)?l=n:t===void 0&&n&&(t=n),typeof t=="string"&&(t=t.length),typeof t=="number"){const i=Math.round(t);t=i<1?void 0:i>8?{indent:8}:{indent:i}}if(e===void 0){const{keepUndefined:i}=t??n??{};if(!i)return}return Rt(e)&&!l?e.toString(t):new Ml(e,l,t).toString(t)}const hp=Object.freeze(Object.defineProperty({__proto__:null,Alias:La,CST:jh,Composer:Ic,Document:Ml,Lexer:fp,LineCounter:pp,Pair:Me,Parser:Ec,Scalar:z,Schema:Ta,YAMLError:Nc,YAMLMap:Ze,YAMLParseError:At,YAMLSeq:bt,YAMLWarning:tp,isAlias:vt,isCollection:pe,isDocument:Rt,isMap:El,isNode:ge,isPair:me,isScalar:re,isSeq:Dl,parse:Hh,parseAllDocuments:$h,parseDocument:bp,stringify:qh,visit:jt,visitAsync:Sa},Symbol.toStringTag,{value:"Module"})),zh=`protocols:
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
  - label_family: Info
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
    description: Grid phase number
    longdescription: Number of grid phases supported by the inverter. Indicates configuration type for interconnection.
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
  - label_family: Info
    label_text: Nameplate
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
      0: 'Normal; 1: Grid Abnormal or Unavailable'
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
      0: 'Open (Off); 1: Close (On)'
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
      0: 'Not Active; 1: Activated'
  labels:
  - label_family: Component
    label_text: Generator
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  labels:
  - label_family: Info
    label_text: Sensor
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  - label_family: Info
    label_text: Sensor
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
  labels:
  - label_family: Info
    label_text: Alarms
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  - label_family: Info
    label_text: Alarms
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
  labels:
  - label_family: Info
    label_text: Config
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  labels:
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
  - label_family: Level of Detail
    label_text: Complete
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
  labels:
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
  - label_family: Level of Detail
    label_text: Complete
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
      '0': disable,
      '1': enable,
      '2': Inconsistency
  labels:
  - label_family: Component
    label_text: Battery
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
    description: Max Inverter Output Power During 'Discharge Only' Periods
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
      '0': Default(UL-240-18）
      '1': California(Rule 21）
      '2': Hawaii(Rule 14）
      '3': Puerto Rico LUMA
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Power
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: SmartLoadOnSoc
  block: fixed
  entry:
    name: SmartLoadOnSoc
    description: Smart Load SOC Limits Start When Battery SOC Is Above (%)
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
  - label_family: Level of Detail
    label_text: Complete
- model: 40104
  point: SmartLoadOffSoc
  block: fixed
  entry:
    name: SmartLoadOffSoc
    description: Smart Load SOC Limits Stop When Battery SOC Is Below (%)
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
`,Kh=`# Label Help Text
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

  Info:
    help: "Categorizes the type of information the telemetry point provides."
    labels:
      Sensor:
        help: "Real-time sensor measurements from physical devices, including voltage, current, power, temperature, and other measured values."
      Config:
        help: "Configuration parameters and settings that can be read or written to configure system behavior."
      Nameplate:
        help: "Static information from equipment nameplates, including model numbers, serial numbers, ratings, and manufacturer information."
      Alarms:
        help: "Alarm and fault information, including active alarms, fault codes, and system warnings."

  Level of Detail:
    help: "Indicates the level of detail or complexity of the telemetry point."
    labels:
      Standard:
        help: "Standard telemetry points that are commonly used and displayed by default."
      Extended:
        help: "Extended telemetry points provide additional technical details."
      Complete:
        help: "Complete telemetry points provide all available information and are used for detailed analysis and debugging."

  Unit:
    help: "Indicates the unit of measurement for numeric telemetry values."
    labels:
      Power:
        help: "Power measurements in watts (W), kilowatts (kW), or megawatts (MW). Represents electrical power consumption or generation."
      Energy:
        help: "Energy measurements in watt-hours (Wh), kilowatt-hours (kWh), or megawatt-hours (MWh). Represents cumulative energy over time."
      Volt:
        help: "Voltage measurements in volts (V). Represents electrical potential difference."
      Current:
        help: "Current measurements in amperes (A). Represents electrical current flow."
      Freq:
        help: "Frequency measurements in hertz (Hz). Typically 50 Hz or 60 Hz for AC electrical systems."
      Mode:
        help: "Values that are not numeric but represent a mode or state. Typically used for inverter operation modes such as operating mode or to enable/disable certain behaviors."
      Temp:
        help: "Temperature measurements in degrees Celsius (°C) or Fahrenheit (°F)."
      "%":
        help: "Percentage values (%), commonly used for state of charge, efficiency, power factor, and other ratio-based measurements."
`;function Qh(e){return e==null?"":typeof e=="number"?String(Math.trunc(e)):String(e).trim()}function Yh(e){return e==null?"":String(e).trim()}function Xh(){try{const e=hp.parse(zh);return((e==null?void 0:e.protocols)??[]).map(t=>{var a;if(!t.entry)return null;const l=Yh(t.point??t.entry.name),i=Qh(t.model);if(!l||!i)return null;const r=Array.isArray(t.labels)?t.labels:Array.isArray((a=t.entry)==null?void 0:a.labels)?t.entry.labels:[];return{block:String(t.block??"fixed"),entry:t.entry,model:i,point:l,labels:r}}).filter(t=>!!t)}catch(e){return console.error("Failed to parse ss40k_inverter.yaml",e),[]}}const Ht=Xh();let hs=null;try{hs=hp.parse(Kh)}catch(e){console.error("Failed to parse label_help.yaml",e)}function kl(e,n){if(!hs)return null;const t=hs.label_families[e];if(!t)return null;if(n){const l=t.labels[n];return(l==null?void 0:l.help)||null}return t.help||null}function Jh(e,n){const t=new Map;return e.forEach(l=>{const i=Array.isArray(l.labels)?l.labels:[];if(i.length===0)return;if(n.length===0){const o=i[0];if(o){const s=o.label_text;t.has(s)||t.set(s,[]),t.get(s).push(l)}return}let r=t,a=-1;if(!(r instanceof Map)){console.error("groupByLabelHierarchy: currentMap is not a Map",r);return}for(let o=0;o<n.length;o++){const s=n[o];i.find(u=>u.label_family===s)&&(a=o)}if(a!==-1)for(let o=0;o<=a;o++){if(!(r instanceof Map)){console.error("groupByLabelHierarchy: currentMap became non-Map at level",o,r);return}const s=n[o],c=i.find(m=>m.label_family===s);if(!c)continue;const u=c.label_text;if(o===a){r.has(u)||r.set(u,new Map);const m=r.get(u);if(Array.isArray(m)){const x=m,b=new Map;b.set("",x),r.set(u,b)}const y=r.get(u);if(!(y instanceof Map)){console.error("Expected Map for finalMap but got:",typeof y,y);return}y.has("")||y.set("",[]);const f=y.get("");if(!Array.isArray(f)){console.error("Expected array for itemsList but got:",typeof f,f);return}f.push(l)}else{if(!r.has(u))r.set(u,new Map);else{const y=r.get(u);if(Array.isArray(y)){const f=y,x=new Map;x.set("",f),r.set(u,x)}}const m=r.get(u);if(!(m instanceof Map)){console.error("Expected Map for nestedMap but got:",typeof m,m,"at level",o,"key",u);return}r=m}}}),t}function Zh(e){const n=new Map;return e.forEach(t=>{(Array.isArray(t.labels)?t.labels:[]).forEach(i=>{n.has(i.label_family)||n.set(i.label_family,new Set),n.get(i.label_family).add(i.label_text)})}),n}const ho=[{bg:"bg-blue-100",text:"text-blue-800",border:"border-blue-300"},{bg:"bg-green-100",text:"text-green-800",border:"border-green-300"},{bg:"bg-purple-100",text:"text-purple-800",border:"border-purple-300"},{bg:"bg-yellow-100",text:"text-yellow-800",border:"border-yellow-300"},{bg:"bg-pink-100",text:"text-pink-800",border:"border-pink-300"},{bg:"bg-indigo-100",text:"text-indigo-800",border:"border-indigo-300"},{bg:"bg-red-100",text:"text-red-800",border:"border-red-300"},{bg:"bg-teal-100",text:"text-teal-800",border:"border-teal-300"},{bg:"bg-orange-100",text:"text-orange-800",border:"border-orange-300"},{bg:"bg-cyan-100",text:"text-cyan-800",border:"border-cyan-300"},{bg:"bg-violet-100",text:"text-violet-800",border:"border-violet-300"},{bg:"bg-amber-100",text:"text-amber-800",border:"border-amber-300"},{bg:"bg-lime-100",text:"text-lime-800",border:"border-lime-300"},{bg:"bg-emerald-100",text:"text-emerald-800",border:"border-emerald-300"},{bg:"bg-sky-100",text:"text-sky-800",border:"border-sky-300"},{bg:"bg-rose-100",text:"text-rose-800",border:"border-rose-300"},{bg:"bg-fuchsia-100",text:"text-fuchsia-800",border:"border-fuchsia-300"},{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"},{bg:"bg-stone-100",text:"text-stone-800",border:"border-stone-300"},{bg:"bg-zinc-100",text:"text-zinc-800",border:"border-zinc-300"}],nu=new Map([["component",0],["feature",1],["detail_level",2],["level of detail",2],["info",3],["unit",4]]);function mi(e,n){const t=e.toLowerCase();if(nu.has(t)){const r=nu.get(t);return ho[r]}const l=t.split("").reduce((r,a)=>(r<<5)-r+a.charCodeAt(0),0),i=4+Math.abs(l)%(ho.length-4);return ho[i]}function e_({value:e,onChange:n}){return d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:d.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),d.jsx("input",{className:"w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring",placeholder:"search",value:e,onChange:t=>n(t.target.value)})]})}function n_({show:e,onToggle:n}){return d.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 text-sm",children:[d.jsx("input",{type:"checkbox",className:"h-4 w-4",checked:e,onChange:t=>n(t.target.checked)}),"Show help text"]})}function tu({value:e,onChange:n}){const t=["Standard","Extended","Complete"],l=t.indexOf(e),i=l>=0?l:0,[r,a]=R.useState(!1),o=m=>{const y=parseInt(m.target.value,10);n(t[y])},s=i/(t.length-1)*100,c=kl("Level of Detail"),u=new Set(t);return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-xs font-semibold text-gray-700",children:"Detail Level"}),d.jsx("button",{onClick:()=>a(!0),className:"text-blue-500 hover:text-blue-700",title:c||"Level of Detail help",children:d.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),d.jsxs("div",{className:"flex flex-col items-center gap-0.5",children:[d.jsxs("div",{className:"relative w-40 flex items-center",children:[d.jsx("input",{type:"range",min:"0",max:t.length-1,step:"1",value:i,onChange:o,className:"w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, #10b981 0%, #10b981 ${s}%, #e5e7eb ${s}%, #e5e7eb 100%)`}}),d.jsx("style",{children:`
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
            `})]}),d.jsx("div",{className:"relative w-40 flex justify-between text-xs",children:t.map((m,y)=>d.jsx("button",{type:"button",onClick:()=>n(m),className:`cursor-pointer hover:opacity-70 transition-opacity ${y===i?"font-semibold text-gray-900":"text-gray-500"}`,children:m},m))})]})]}),r&&d.jsx(xp,{family:"Level of Detail",labels:u,onClose:()=>a(!1)})]})}function _p({levelName:e,levelData:n,selected:t,toggle:l,showHelp:i,onUpdateInverters:r,groupsExpanded:a,pointHelpEnabled:o,onTogglePointHelp:s,depth:c=0}){const u=`group-${e.replace(/\s+/g,"-")}-${c}`,m=Array.isArray(n);if(!n)return null;const y=b=>{const _=`${b.model}:${b.point}`,g=b.entry.description||_,p=b.entry.longdescription||g,h=typeof b.entry.dtype=="string"?b.entry.dtype.toLowerCase():"",C=h.includes("enum")||h.startsWith("bitfield"),w=b.entry.unit&&b.entry.unit!=="N/A"?` (${b.entry.unit})`:"",L=t.has(_),k=L?t.get(_)||new Set(["001"]):new Set,v=Array.isArray(b.labels)?b.labels:[],V=i||o.has(_);return d.jsxs("div",{id:`point-${_.replace(/:/g,"-")}`,"data-point-key":_,className:"rounded-md px-2 py-1 hover:bg-gray-50 transition-colors",children:[d.jsx("div",{className:"flex items-start gap-2 flex-wrap",children:d.jsxs("label",{className:"flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0",children:[d.jsx("input",{type:"checkbox",checked:L,onChange:E=>{E.stopPropagation(),l(_)},onClick:E=>{E.stopPropagation()},className:"h-4 w-4 flex-shrink-0"}),d.jsxs("span",{className:"text-sm flex items-center gap-1",children:[d.jsxs("span",{children:[g,w]}),C&&d.jsx("span",{className:"text-base leading-none cursor-help",title:"Selecting this point shows named modes or states as colored bars instead of a line chart.","aria-label":"Categorical visualization",children:"📊"})]}),d.jsx("span",{className:`ml-1 cursor-pointer flex-shrink-0 ${V?"text-blue-600 hover:text-blue-700":"text-gray-400 hover:text-gray-600"}`,title:p,"aria-label":"Help",onClick:E=>{E.preventDefault(),E.stopPropagation(),s(_)},onMouseDown:E=>{E.preventDefault(),E.stopPropagation()},children:"ⓘ"}),L&&d.jsxs("div",{className:"ml-auto flex items-center gap-1 flex-shrink-0",onClick:E=>E.stopPropagation(),children:[d.jsx("span",{className:"text-xs text-gray-600",children:"Inverter SN:"}),d.jsx(c_,{selectedInverters:k,onChange:E=>r(_,E)})]}),V&&v.length>0&&d.jsx("div",{className:"ml-2 flex flex-wrap gap-1 w-full",children:v.map((E,q)=>{const U=mi(E.label_family,E.label_text),ie=kl(E.label_family,E.label_text)||`${E.label_family}: ${E.label_text}`;return d.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${U.bg} ${U.text} ${U.border}`,title:ie,children:E.label_text},q)})})]})}),V&&d.jsx("div",{className:"pl-6 text-xs text-gray-500 whitespace-pre-wrap",children:p})]},_)};if(m){const b=n;return d.jsx("div",{className:"ml-2 space-y-1",children:b.map(y)})}if(!(n instanceof Map))return console.error("LabelGroup: levelData is neither array nor Map",{levelName:e,depth:c,levelData:n,type:typeof n}),null;const f=n,x=c===0;return d.jsxs("details",{id:u,className:`group border-b py-2 ${x?"":"ml-2 border-l pl-2"}`,open:a,children:[d.jsxs("summary",{className:`cursor-pointer list-none ${x?"font-semibold":"font-medium text-gray-700"}`,children:[d.jsx("span",{className:"mr-1",children:"▾"}),e]}),d.jsx("div",{className:"mt-2 ml-1 space-y-2",children:[...f.entries()].map(([b,_])=>b===""?Array.isArray(_)?d.jsx("div",{className:"ml-2 space-y-1",children:_.map(y)},""):null:d.jsx(_p,{levelName:b,levelData:_,selected:t,toggle:l,showHelp:i,onUpdateInverters:r,groupsExpanded:a,pointHelpEnabled:o,onTogglePointHelp:s,depth:c+1},b))})]})}function xp({family:e,labels:n,onClose:t}){const l=kl(e),i=[...n].sort();return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:t,children:d.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:r=>r.stopPropagation(),children:[d.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[d.jsxs("h2",{className:"text-xl font-semibold text-gray-800",children:[e," Labels"]}),d.jsx("button",{onClick:t,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:d.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l&&d.jsxs("div",{className:"mb-4 rounded-lg bg-blue-50 p-3 text-sm text-gray-700",children:[d.jsxs("strong",{className:"font-semibold",children:["About ",e,":"]})," ",l]}),d.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:d.jsx("div",{className:"space-y-4",children:i.map(r=>{const a=kl(e,r);return d.jsxs("div",{className:"border-b border-gray-200 pb-3 last:border-b-0",children:[d.jsx("div",{className:"mb-1 font-medium text-gray-800",children:r}),a?d.jsx("div",{className:"text-sm text-gray-600",children:a}):d.jsx("div",{className:"text-sm italic text-gray-400",children:"No help text available"})]},r)})})})]})})}function t_({allLabels:e,selectedLabels:n,onToggleLabel:t,onClearFilters:l}){const[i,r]=R.useState(200),[a,o]=R.useState(!1),[s,c]=R.useState(null),[u,m]=R.useState(!1),y=R.useRef(null),f=R.useRef(null),x=g=>{g.preventDefault(),o(!0)};R.useEffect(()=>{if(!a)return;const g=h=>{if(y.current){const C=y.current.getBoundingClientRect(),w=h.clientY-C.top;w>=100&&w<=600&&r(w)}},p=()=>{o(!1)};return document.addEventListener("mousemove",g),document.addEventListener("mouseup",p),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",p)}},[a]);const b=Array.from(n).map(g=>{const[p,h]=g.split(":",2);return{family:p,text:h}}).filter(({family:g})=>g!=="Level of Detail"),_=new Map(e);return _.delete("Level of Detail"),d.jsx("div",{ref:y,className:"mb-3 rounded-lg border bg-gray-50 p-2",children:d.jsxs("details",{ref:f,className:"group",open:u,onToggle:g=>m(g.target.open),children:[d.jsx("summary",{className:"cursor-pointer list-none",children:d.jsx("div",{className:"mb-1 flex items-start justify-between gap-2",children:d.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0 flex-wrap",children:[d.jsx("svg",{className:"h-4 w-4 text-gray-600 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),d.jsx("span",{className:"flex-shrink-0",children:"Filters"}),!u&&_.size>0&&d.jsx("button",{onClick:g=>{g.stopPropagation(),f.current&&(f.current.open=!0,m(!0))},className:"ml-2 text-xs text-blue-600 hover:text-blue-700 underline flex-shrink-0",children:"More Filters"}),b.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"flex flex-wrap items-center gap-1 ml-2 min-w-0",children:b.map(({family:g,text:p})=>{const h=mi(g);return d.jsxs("span",{className:`rounded border px-1.5 py-0.5 text-xs ${h.bg} ${h.text} ${h.border} border-2 font-semibold flex-shrink-0 flex items-center gap-1`,children:[d.jsx("span",{children:p}),d.jsx("button",{onClick:C=>{C.stopPropagation(),t(g,p)},className:"hover:opacity-70 transition-opacity flex-shrink-0",title:`Remove ${g}: ${p} filter`,"aria-label":`Remove ${g}: ${p} filter`,children:d.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},`${g}:${p}`)})}),d.jsx("button",{onClick:g=>{g.stopPropagation(),l()},className:"ml-2 flex-shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:d.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})]})})}),d.jsx("div",{className:"space-y-0.5 overflow-auto mt-2",style:{height:`${i}px`},children:[..._.entries()].map(([g,p])=>{const h=kl(g),C=mi(g),w=Array.from(p).some(L=>n.has(`${g}:${L}`));return d.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-0.5",children:[d.jsxs("button",{onClick:()=>c(g),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${w?`${C.bg} ${C.text} ${C.border} border-2`:`${C.bg} ${C.text} ${C.border} border`}`,title:h||`View help for ${g} labels`,"aria-label":`Help for ${g}`,children:[d.jsx("span",{className:"truncate",children:g}),d.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${C.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),d.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...p].sort().map(L=>{const k=`${g}:${L}`,v=n.has(k),V=mi(g),E=kl(g,L);return d.jsx("button",{onClick:()=>t(g,L),className:`rounded border px-1.5 py-0.5 text-xs transition-all ${v?`${V.bg} ${V.text} ${V.border} border-2 font-semibold`:`bg-white ${V.text} ${V.border} hover:opacity-80`}`,style:v?void 0:{borderColor:"currentColor"},title:E||`${g}: ${L}`,children:L},k)})})]},g)})}),s&&d.jsx(xp,{family:s,labels:e.get(s)||new Set,onClose:()=>c(null)}),d.jsx("div",{onMouseDown:x,className:"mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors",title:"Drag to resize"})]})})}const Er=["001","002","003"],_s=e=>{const n=parseInt(e,10);return(1e9+n*1e4+n).toString().padStart(10,"0")},lu=[{bg:"bg-purple-500",border:"border-purple-600"},{bg:"bg-green-500",border:"border-green-600"},{bg:"bg-teal-500",border:"border-teal-600"},{bg:"bg-blue-500",border:"border-blue-600"},{bg:"bg-pink-500",border:"border-pink-600"},{bg:"bg-orange-500",border:"border-orange-600"},{bg:"bg-indigo-500",border:"border-indigo-600"},{bg:"bg-red-500",border:"border-red-600"}],iu=["text-purple-500","text-green-500","text-teal-500","text-blue-500","text-pink-500","text-orange-500","text-indigo-500","text-red-500"],ru=[{bg50:"bg-purple-50",bg100:"bg-purple-100",border200:"border-purple-200",border400:"border-purple-400",bg500:"bg-purple-500/80",text600:"text-purple-600",text700:"text-purple-700",ring:"focus:ring-purple-500"},{bg50:"bg-green-50",bg100:"bg-green-100",border200:"border-green-200",border400:"border-green-400",bg500:"bg-green-500/80",text600:"text-green-600",text700:"text-green-700",ring:"focus:ring-green-500"},{bg50:"bg-teal-50",bg100:"bg-teal-100",border200:"border-teal-200",border400:"border-teal-400",bg500:"bg-teal-500/80",text600:"text-teal-600",text700:"text-teal-700",ring:"focus:ring-teal-500"},{bg50:"bg-blue-50",bg100:"bg-blue-100",border200:"border-blue-200",border400:"border-blue-400",bg500:"bg-blue-500/80",text600:"text-blue-600",text700:"text-blue-700",ring:"focus:ring-blue-500"},{bg50:"bg-pink-50",bg100:"bg-pink-100",border200:"border-pink-200",border400:"border-pink-400",bg500:"bg-pink-500/80",text600:"text-pink-600",text700:"text-pink-700",ring:"focus:ring-pink-500"},{bg50:"bg-orange-50",bg100:"bg-orange-100",border200:"border-orange-200",border400:"border-orange-400",bg500:"bg-orange-500/80",text600:"text-orange-600",text700:"text-orange-700",ring:"focus:ring-orange-500"},{bg50:"bg-indigo-50",bg100:"bg-indigo-100",border200:"border-indigo-200",border400:"border-indigo-400",bg500:"bg-indigo-500/80",text600:"text-indigo-600",text700:"text-indigo-700",ring:"focus:ring-indigo-500"},{bg50:"bg-red-50",bg100:"bg-red-100",border200:"border-red-200",border400:"border-red-400",bg500:"bg-red-500/80",text600:"text-red-600",text700:"text-red-700",ring:"focus:ring-red-500"}];function vp(e){let n=0;for(let t=0;t<e.length;t+=1)n=n*31+e.charCodeAt(t)>>>0;return()=>(n=n*1664525+1013904223>>>0,n/2**32)}function l_(e){const n=[];for(let i=0;i<e;i+=1){const r=720+i*10,a=Math.floor(r/60)%24,o=r%60;n.push(`${a.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`)}return n}const i_=36,Kl={width:1e3,height:360};function r_(e,n=i_){const t=vp(`line-${e}`),l=[];let i=t()*60+20;for(let r=0;r<n;r+=1){const a=t()-.5,o=4+t()*8,s=i+a*o;i=l.length?l[l.length-1]*.7+s*.3:s,i=Math.max(0,Math.min(140,i)),l.push(Number(i.toFixed(2)))}return l}function a_({series:e}){if(e.length===0)return null;const n=e.flatMap(r=>r.values),t=Math.min(...n,0),i=Math.max(...n,1)-t||1;return d.jsx("svg",{viewBox:`0 0 ${Kl.width} ${Kl.height}`,preserveAspectRatio:"none",className:"h-full w-full",children:e.map(({entry:r,values:a})=>{if(a.length<2)return null;const o=a.map((s,c)=>{const u=c/(a.length-1)*Kl.width,m=(s-t)/i,y=Kl.height-m*Kl.height;return`${c===0?"M":"L"}${u.toFixed(2)},${y.toFixed(2)}`}).join(" ");return d.jsx("path",{d:o,fill:"none",stroke:"currentColor",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round",className:`${iu[r.colorIndex%iu.length]} drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]`,opacity:.95},r.pointKey)})})}function o_(e){if(!e.meaningKeys.length)return null;const n=e.meaningKeys,t=vp(e.pointKey),l=n.filter((u,m)=>t()>.35||m===0);l.length===0&&l.push(n[0]);const i=12,r=l_(i),o=(typeof e.dtype=="string"?e.dtype.toLowerCase():"").startsWith("bitfield"),s=Array.from({length:i},()=>new Set);if(o)for(let u=0;u<i;u+=1){let m=!1;l.forEach((y,f)=>{t()>.55&&(s[u].add(y),m=!0),!m&&f===l.length-1&&t()>.7&&(s[u].add(y),m=!0)})}else{let u=0;for(;u<i&&l.length;){const m=Math.floor(t()*l.length),y=l[m],f=1+Math.floor(t()*3);if(t()>.2)for(let x=0;x<f&&u+x<i;x+=1)s[u+x].add(y);u+=f}}const c=n.map(u=>{var _,g;const m=String(u),y=(_=e.friendlyMeanings)==null?void 0:_[m],f=(g=e.meanings)==null?void 0:g[m],x=(y??f??m).trim()||`Value ${m}`,b=s.map(p=>p.has(u));return{meaningKey:u,label:x,activeSlots:b}});return{id:e.pointKey,title:e.name,subtitle:`SN ${e.shortSN}`,timeLabels:r,rows:c,colorIndex:e.colorIndex}}function s_({data:e,onRemove:n}){const[t,l]=R.useState(!0),i=t?e.rows.filter(o=>o.activeSlots.some(Boolean)):e.rows,r=e.rows.length-i.length,a=ru[e.colorIndex%ru.length];return d.jsxs("div",{className:`rounded-lg border ${a.border200} bg-white shadow-sm`,children:[d.jsxs("div",{className:`flex items-center justify-between gap-2 border-b ${a.border200} ${a.bg50} px-4 py-1.5`,children:[d.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[d.jsx("span",{className:`font-semibold ${a.text700}`,children:e.title}),d.jsx("span",{className:a.text600,children:e.subtitle})]}),d.jsxs("div",{className:`flex items-center gap-3 text-xs ${a.text700}`,children:[d.jsxs("label",{className:"flex items-center gap-1.5 font-medium",children:[d.jsx("input",{type:"checkbox",checked:t,onChange:o=>l(o.target.checked),className:`h-3 w-3 rounded ${a.border400} ${a.text600} ${a.ring}`}),"Hide empty bars"]}),d.jsxs("span",{className:`text-[11px] ${a.text600}`,children:[r," values hidden"]}),n&&d.jsx("button",{type:"button",onClick:o=>{o.stopPropagation(),n()},className:"text-[11px] px-2 py-1 rounded border border-transparent text-gray-500 hover:text-red-600 hover:border-red-200 transition-colors",title:"Remove this point","aria-label":"Remove categorical point",children:"×"})]})]}),d.jsx("div",{className:"px-4 py-3",children:d.jsx("div",{className:"space-y-1",children:i.length===0?d.jsx("div",{className:"text-xs text-gray-500 italic",children:'No categorical data is visible. Disable "Hide empty bars" to view all meanings.'}):i.map(o=>d.jsxs("div",{className:"flex flex-col",children:[d.jsx("div",{className:"text-[10px] font-medium text-gray-600 mb-0.5",children:o.label}),d.jsx("div",{className:`relative h-3 rounded ${a.bg100} overflow-hidden`,children:d.jsx("div",{className:"absolute inset-0 flex",children:o.activeSlots.map((s,c)=>d.jsx("div",{className:`flex-1 ${c<o.activeSlots.length-1?`border-r ${a.border200}`:""} ${s?a.bg500:"bg-transparent"}`},`${o.meaningKey}-${c}`))})})]},o.meaningKey))})})]})}function c_({selectedInverters:e,onChange:n}){const[t,l]=R.useState(!1),i=R.useRef(null),r=e.size===Er.length,a=r?"All Inverters":Array.from(e).sort().map(c=>_s(c)).join(", ");R.useEffect(()=>{const c=u=>{i.current&&!i.current.contains(u.target)&&l(!1)};if(t)return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[t]);const o=()=>{n(r?new Set(["001"]):new Set(Er))},s=c=>{const u=new Set(e);u.has(c)?(u.delete(c),u.size===0&&u.add("001")):u.add(c),n(u)};return d.jsxs("div",{className:"relative",ref:i,children:[d.jsxs("button",{type:"button",onClick:()=>l(!t),className:"text-xs border border-blue-300 rounded px-2 py-1 bg-white text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1",children:[d.jsx("span",{children:a}),d.jsx("svg",{className:`h-3 w-3 transition-transform ${t?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),t&&d.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]",children:d.jsxs("div",{className:"py-1",children:[d.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[d.jsx("input",{type:"checkbox",checked:r,onChange:o,className:"h-3 w-3"}),d.jsx("span",{className:"text-xs text-gray-700",children:"All Inverters"})]}),Er.map(c=>d.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[d.jsx("input",{type:"checkbox",checked:e.has(c),onChange:()=>s(c),className:"h-3 w-3"}),d.jsx("span",{className:"text-xs text-gray-700",children:_s(c)})]},c))]})})]})}function d_({selectedPoints:e,protocols:n,onUpdateInverters:t,onScrollToPoint:l,onRemoveInverter:i,onSelectPointsToggle:r,selectPointsOpen:a,onDeleteChart:o}){const[s,c]=R.useState(new Set),u=Array.from(e.entries()).map(([v,V])=>{const[E,q]=v.split(":"),U=n.find(ie=>ie.model===E&&ie.point===q),$=U&&(U.entry.description||U.entry.name)||q;return{key:v,name:$,inverters:V}}).filter(v=>v.name),m=u.flatMap(({key:v,name:V,inverters:E})=>{var oe,gn,We,In,$e,bn;const[q,U]=v.split(":"),$=n.find(T=>T.model===q&&T.point===U),ie=(oe=$==null?void 0:$.entry)!=null&&oe.unit&&$.entry.unit!=="N/A"?$.entry.unit:"N/A",an=((gn=$==null?void 0:$.entry)==null?void 0:gn.longdescription)||((We=$==null?void 0:$.entry)==null?void 0:We.description)||"",Ue=(In=$==null?void 0:$.entry)==null?void 0:In.dtype,Ee=($e=$==null?void 0:$.entry)==null?void 0:$e.meanings,M=(bn=$==null?void 0:$.entry)==null?void 0:bn.friendly_meanings,O=new Set;Ee&&Object.keys(Ee).forEach(T=>O.add(String(T))),M&&Object.keys(M).forEach(T=>O.add(String(T)));const H=Array.from(O),ee=H.length>0;return Array.from(E).sort().map((T,Q)=>{const K=_s(T);return{key:v,pointKey:`${v}:${T}`,name:V,shortSN:T,fullSN:K,unit:ie,model:q,point:U,longDescription:an,colorIndex:(u.findIndex(X=>X.key===v)*Er.length+Q)%lu.length,dtype:Ue,meanings:Ee,friendlyMeanings:M,meaningKeys:H,isCategorical:ee}})}),y=m.filter(v=>!s.has(v.pointKey)),f=y.filter(v=>v.isCategorical),x=y.filter(v=>!v.isCategorical),b=m.filter(v=>!v.isCategorical),_=R.useMemo(()=>f.map(v=>o_(v)).filter(v=>v!==null),[f]),g=x.length>0,p=R.useMemo(()=>x.map(v=>({entry:v,values:r_(v.pointKey)})),[x]),h=v=>{c(V=>{const E=new Set(V);return E.has(v)?E.delete(v):E.add(v),E})},C=v=>{const V=b.map(U=>U.pointKey),q=V.filter(U=>!s.has(U)).length===1&&!s.has(v);c(q?new Set:new Set(V.filter(U=>U!==v)))},w=(v,V,E)=>{E.stopPropagation(),i==null||i(v,V)},k=!(!g&&_.length>0&&e.size>0);return d.jsxs("div",{className:"w-full h-full flex flex-col relative",children:[d.jsxs("div",{className:"absolute top-4 right-4 z-20 flex items-center gap-2",children:[r&&d.jsxs("button",{onClick:()=>r(!a),className:"text-xs px-3 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center gap-2 shadow-sm",title:a?"Hide Add Points":"Show Add Points","data-role":"sidebar-toggle",children:[d.jsx("span",{children:"Add Points"}),d.jsx("svg",{className:`h-4 w-4 text-gray-600 transition-transform ${a?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),o&&d.jsx("button",{onClick:v=>{v.stopPropagation(),o()},className:"text-xs px-2 py-1.5 border border-gray-300 rounded bg-white/90 backdrop-blur hover:bg-white transition-colors flex items-center justify-center text-gray-600 hover:text-gray-800 opacity-80 hover:opacity-100 shadow-sm",title:"Delete chart",children:d.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),d.jsxs("div",{className:"p-4 flex flex-col h-full",children:[d.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[k&&d.jsxs("div",{className:"relative flex-1 min-h-[320px] rounded-2xl border border-gray-300 bg-gradient-to-b from-white via-white to-gray-50 shadow-inner overflow-hidden",children:[d.jsxs("div",{className:"absolute left-0 top-0 bottom-10 w-12 border-r border-gray-200 flex flex-col items-center justify-between py-4 text-gray-600",children:[d.jsx("span",{className:"text-[10px] uppercase tracking-widest leading-none transform -rotate-90",children:"Value"}),d.jsx("div",{className:"flex flex-col items-center gap-3 text-gray-400",children:[0,1,2,3,4].map(v=>d.jsx("div",{className:"w-3 h-px bg-gray-400/70"},v))}),d.jsx("span",{className:"text-[10px]",children:"0"})]}),d.jsxs("div",{className:"absolute left-12 right-6 bottom-6 h-10 border-t border-gray-200 flex items-center justify-between px-2 text-gray-500",children:[d.jsx("span",{className:"text-[11px]",children:"0"}),d.jsx("div",{className:"flex gap-2",children:[0,1,2,3,4].map(v=>d.jsx("div",{className:"h-3 w-px bg-gray-400/60"},v))}),d.jsx("span",{className:"text-[11px] uppercase tracking-widest",children:"Time"})]}),d.jsx("div",{className:`absolute top-6 bottom-16 left-12 right-6 rounded-xl bg-white/40 backdrop-blur-sm ${e.size===0?"cursor-pointer":"cursor-default"}`,onClick:()=>{e.size===0&&r&&r(!0)},children:e.size===0?d.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-gray-500",children:[d.jsx("div",{className:"text-base font-medium text-gray-700",children:"No points selected"}),d.jsx("div",{children:"Click anywhere in this area to select points"})]}):m.length===0?d.jsx("div",{className:"flex h-full items-center justify-center text-sm text-gray-400",children:"Select points to display charts"}):g?d.jsxs("div",{className:"relative h-full w-full",children:[d.jsx("div",{className:"pointer-events-none absolute inset-0 grid grid-rows-4 opacity-30",children:[0,1,2,3].map(v=>d.jsx("div",{className:"border-b border-dashed border-gray-300"},v))}),d.jsx(a_,{series:p})]}):d.jsx("div",{className:"flex h-full items-center justify-center px-6 text-center text-sm text-gray-500",children:"All selected points are hidden. Use the legend controls to show a series."})})]}),_.length>0&&d.jsx("div",{className:`${k?"":"pt-2"}`,"data-categorical-stack":!0,children:d.jsx("div",{className:"space-y-4",children:_.map(v=>{const V=()=>{const E=v.id.split(":"),q=E.pop()??"",U=E.join(":");i==null||i(U,q)};return d.jsx(s_,{data:v,onRemove:V},`${v.id}:${v.subtitle}`)})})})]}),b.length>0&&d.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:b.map(({pointKey:v,name:V,shortSN:E,fullSN:q,colorIndex:U,key:$,unit:ie,point:an,longDescription:Ue})=>{const Ee=lu[U],M=s.has(v),O=["Click to toggle visibility (double-click to show only this)","",`This is the point "${V}" (${an}) as read by inverter ${q}.`];Ue&&O.push("",Ue);const H=O.join(`
`);return d.jsxs("div",{className:"flex items-center gap-2 text-xs group hover:bg-gray-50 rounded px-2 py-1 border border-gray-200 bg-white transition-colors cursor-pointer flex-shrink-0",onClick:()=>h(v),onDoubleClick:ee=>{ee.stopPropagation(),C(v)},title:H,children:[d.jsx("div",{className:`w-3 h-3 rounded-sm flex-shrink-0 ${Ee.bg} ${Ee.border} border`}),d.jsx("span",{className:`font-medium text-gray-600 ${M?"opacity-50 line-through":""}`,children:V}),d.jsxs("span",{className:"text-gray-400",children:["(SN ",E,")"]}),ie!=="N/A"&&d.jsxs("span",{className:"text-gray-400",children:["[",ie,"]"]}),d.jsx("button",{onClick:ee=>{ee.stopPropagation(),h(v)},onDoubleClick:ee=>{ee.stopPropagation(),C(v)},className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:M?"Show in chart (double-click to show only this)":"Hide in chart (double-click to show only this)",children:M?d.jsxs("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):d.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})}),d.jsx("button",{onClick:ee=>w($,E,ee),className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:"Remove this data point from the chart",children:d.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},v)})})]})]})}function u_({onClose:e}){return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:d.jsxs("div",{className:"relative max-w-lg rounded-lg bg-white p-6 shadow-xl",onClick:n=>n.stopPropagation(),children:[d.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:"Group By"}),d.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:d.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),d.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[d.jsx("p",{children:"Reorder or add levels to control how points are grouped in the list."}),d.jsx("p",{children:"For example, grouping by Component → Feature will show each component first, with its features listed underneath."}),d.jsx("p",{className:"text-gray-600",children:"You can add or remove levels using the + button and × button next to each level."})]})]})})}function m_({availableFamilies:e,hierarchy:n,onChange:t,scrollContainerRef:l}){const[i,r]=R.useState(!1),[a,o]=R.useState(!0),s=R.useRef(null),c=R.useRef(0),u=(x,b)=>{const _=[...n];b===""?_.splice(x,1):_[x]=b,t(_)},m=()=>{t([...n,""])},y=x=>{const b=[...n];b.splice(x,1),t(b)},f=x=>{const b=n.filter((_,g)=>g!==x&&n[g]);return e.filter(_=>!b.includes(_))};return R.useEffect(()=>{const x=l==null?void 0:l.current;if(!x)return;const b=()=>{const _=x.scrollTop;_>c.current&&_>50?a&&s.current&&(s.current.open=!1,o(!1)):_<50&&!a&&s.current&&(s.current.open=!0,o(!0)),c.current=_};return x.addEventListener("scroll",b,{passive:!0}),()=>{x.removeEventListener("scroll",b)}},[a,l]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"mb-3 rounded-lg border bg-gray-50 p-2 transition-all duration-300",children:d.jsxs("details",{ref:s,className:"group",open:a,onToggle:x=>o(x.target.open),children:[d.jsx("summary",{className:"cursor-pointer list-none",children:d.jsxs("div",{className:"flex items-center justify-between gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[d.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"}),d.jsx("span",{className:"flex-shrink-0",children:"Group by"}),n.filter(x=>x).length>0&&d.jsx("div",{className:"flex items-center gap-1 ml-1 min-w-0",children:n.map((x,b)=>{if(!x)return null;const _=mi(x);return d.jsxs(R.Fragment,{children:[d.jsx("span",{className:`rounded px-2 py-0.5 text-xs font-semibold flex-shrink-0 ${b===0?"bg-blue-100 text-blue-700":b===1?"bg-green-100 text-green-700":`${_.bg} ${_.text}`}`,children:x}),b<n.length-1&&n[b+1]&&d.jsx("span",{className:"text-gray-500 flex-shrink-0",children:">"})]},b)})})]}),d.jsxs("button",{onClick:x=>{x.preventDefault(),x.stopPropagation(),r(!0)},className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline flex-shrink-0",children:[d.jsx("span",{children:"What does this do?"}),d.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]})]})}),d.jsx("div",{className:"mt-2",children:d.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[n.map((x,b)=>d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsxs("label",{className:"text-gray-600",children:["Level ",b+1,":"]}),d.jsxs("select",{value:x||"",onChange:_=>u(b,_.target.value),className:"rounded border px-2 py-1 text-xs",children:[d.jsx("option",{value:"",children:"(None)"}),f(b).map(_=>d.jsx("option",{value:_,children:_},_))]}),n.length>1&&d.jsx("button",{onClick:()=>y(b),className:"rounded border bg-white px-1.5 py-0.5 text-xs text-red-600 hover:bg-red-50",title:"Remove level",children:"×"})]},b)),d.jsx("button",{onClick:m,className:"rounded border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",title:"Add hierarchy level",children:"+"}),n.length===0&&d.jsx("div",{className:"text-gray-500 italic",children:"No hierarchy levels configured"})]})})]})}),i&&d.jsx(u_,{onClose:()=>r(!1)})]})}const xs=16,vs=16,Ql=280,ur=360,mr=12,fr=12,qt=520,pr=780,f_=["001"],oa=({onAdd:e,ariaLabel:n})=>d.jsx("button",{type:"button",onClick:t=>{t.stopPropagation(),e()},className:"relative z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-base font-semibold text-gray-600 opacity-70 shadow-sm transition-all duration-150 ease-out hover:bg-white group-hover:scale-105 group-hover:opacity-100 group-focus-within:opacity-100 focus:scale-105 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300","aria-label":n,children:d.jsx("span",{className:"leading-none",children:"+"})}),au=({onAdd:e,onResizeStart:n,onKeyboardNudge:t,onEdgeResizeStart:l,onEdgeKeyboardNudge:i,onAutoFit:r,percentAbove:a,isActive:o=!1,buttonSegments:s})=>{const c=typeof n=="function"&&typeof t=="function"&&typeof r=="function"&&typeof a=="number",u=typeof l=="function",m=c||u,y=f=>{f.key==="Enter"||f.key===" "?(f.preventDefault(),e()):f.key==="ArrowUp"&&c&&t?(f.preventDefault(),t(mr)):f.key==="ArrowDown"&&c&&t?(f.preventDefault(),t(-mr)):f.key==="ArrowUp"&&u&&i?(f.preventDefault(),i(mr)):f.key==="ArrowDown"&&u&&i&&(f.preventDefault(),i(-mr))};return d.jsxs("div",{role:"separator","aria-orientation":"horizontal",...c?{"aria-valuenow":Math.round(a),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts"}:u?{"aria-label":"Resize row height","aria-valuetext":`${Math.round(a??100)}%`}:{"aria-label":"Add chart below","aria-disabled":!0},tabIndex:0,onKeyDown:y,onClick:f=>{m||f.target.closest("button")||(f.preventDefault(),e())},onDoubleClick:f=>{f.target.closest("button")||(f.preventDefault(),c&&r?r():e())},onMouseDown:f=>{f.target.closest("button")||f.button===0&&(f.preventDefault(),c&&n?n(f.clientY):u&&l&&l(f.clientY))},className:`group relative flex items-center justify-center ${m?"cursor-row-resize":"cursor-pointer"} select-none outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${o?"ring-2 ring-blue-300/60":""}`,style:{height:xs,paddingLeft:"0.5rem",paddingRight:"0.5rem"},children:[d.jsxs("div",{className:"pointer-events-none absolute inset-0 flex items-center px-4",children:[d.jsx("div",{className:`flex-1 h-1 rounded-full transition-colors duration-150 ${o?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`}),d.jsx("div",{className:"mx-2 flex items-center gap-1",children:[0,1,2].map(f=>d.jsx("span",{className:"h-3 w-1 rounded-full bg-gray-300/80 group-hover:bg-gray-400 group-focus-within:bg-gray-400"},f))}),d.jsx("div",{className:`flex-1 h-1 rounded-full transition-colors duration-150 ${o?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`})]}),d.jsx("div",{className:`${s&&s.length>0?"grid w-full":"flex w-full"} items-center justify-center`,style:s&&s.length>0?{gridTemplateColumns:s.map(f=>f.size?`${f.size}px`:"1fr").join(" ")}:void 0,children:s&&s.length>0?s.map(f=>d.jsx("div",{className:"flex justify-center py-0.5",children:d.jsx(oa,{onAdd:f.onAdd,ariaLabel:"Add chart below"})},f.key)):d.jsx(oa,{onAdd:e,ariaLabel:"Add chart below"})})]})},ou=({onAdd:e,onResizeStart:n,onKeyboardNudge:t,onEdgeResizeStart:l,onEdgeKeyboardNudge:i,onAutoFit:r,percentLeft:a,isActive:o=!1,buttonSegments:s})=>{const c=typeof n=="function"&&typeof t=="function"&&typeof r=="function"&&typeof a=="number",u=typeof l=="function",m=c||u,y=f=>{f.key==="Enter"||f.key===" "?(f.preventDefault(),e()):f.key==="ArrowRight"&&c&&t?(f.preventDefault(),t(fr)):f.key==="ArrowLeft"&&c&&t?(f.preventDefault(),t(-fr)):f.key==="ArrowRight"&&u&&i?(f.preventDefault(),i(fr)):f.key==="ArrowLeft"&&u&&i&&(f.preventDefault(),i(-fr))};return d.jsxs("div",{role:"separator","aria-orientation":"vertical",...c?{"aria-valuenow":Math.round(a),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Resize charts horizontally"}:u?{"aria-label":"Resize column width"}:{"aria-label":"Add chart to the right","aria-disabled":!0},tabIndex:0,onKeyDown:y,onClick:f=>{m||f.target.closest("button")||(f.preventDefault(),e())},onDoubleClick:f=>{f.target.closest("button")||(f.preventDefault(),m&&r?r():e())},onMouseDown:f=>{f.target.closest("button")||f.button===0&&(f.preventDefault(),c&&n?n(f.clientX):u&&l&&l(f.clientX))},className:`group relative flex h-full w-full ${m?"cursor-col-resize":"cursor-pointer"} select-none flex-col items-center justify-center outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-blue-300/60 ${o?"ring-2 ring-blue-300/60":""}`,style:{width:vs,paddingTop:"0.5rem",paddingBottom:"0.5rem"},children:[d.jsxs("div",{className:"pointer-events-none absolute inset-0 flex flex-col justify-center py-4",children:[d.jsx("div",{className:`mx-auto w-1 rounded-full transition-colors duration-150 ${o?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`,style:{flex:1}}),d.jsx("div",{className:"my-2 flex flex-col items-center gap-1",children:[0,1,2].map(f=>d.jsx("span",{className:"w-3 h-1 rounded-full bg-gray-300/80 group-hover:bg-gray-400 group-focus-within:bg-gray-400"},f))}),d.jsx("div",{className:`mx-auto w-1 rounded-full transition-colors duration-150 ${o?"bg-[#CBD1DB]":"bg-[#E4E6EA]"} group-hover:bg-[#CBD1DB] group-focus-within:bg-[#CBD1DB]`,style:{flex:1}})]}),d.jsx("div",{className:`${s&&s.length>0?"grid h-full":"flex"} w-full flex-1 flex-col items-center justify-center`,style:s&&s.length>0?{gridTemplateRows:s.map(f=>f.size?`${f.size}px`:"1fr").join(" ")}:void 0,children:s&&s.length>0?s.map(f=>d.jsx("div",{className:"flex items-center justify-center px-0.5",children:d.jsx(oa,{onAdd:f.onAdd,ariaLabel:"Add chart to the right"})},f.key)):d.jsx(oa,{onAdd:e,ariaLabel:"Add chart to the right"})})]})};function p_({protocols:e,onUpdateInverters:n,onScrollToPoint:t,onRemoveInverter:l,onSelectPointsToggle:i,selectPointsOpen:r,callbacksRef:a,onActiveChartSelectedPointsChange:o,onActiveChartPositionChange:s}){const[c,u]=j.useState([{id:"chart-0",selectedPoints:new Map,row:0,col:0}]),[m,y]=j.useState(1),[f,x]=j.useState("chart-0"),[b,_]=j.useState(new Map([[0,pr]])),[g,p]=j.useState(new Map([[0,qt]])),[h,C]=j.useState(null),[w,L]=j.useState(null),k=R.useRef(null),v=R.useRef(null),[V,E]=j.useState(null),q=R.useRef(null),U=R.useRef(new Map);R.useEffect(()=>{const S=c.find(P=>P.id===f);S&&o(new Map(S.selectedPoints))},[c,f,o]),R.useEffect(()=>{const S=()=>{const P=U.current.get(f);if(P){const N=P.getBoundingClientRect();s(N)}else s(null)};return S(),window.addEventListener("scroll",S,!0),window.addEventListener("resize",S),()=>{window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",S)}},[f,c,b,g,s]),R.useLayoutEffect(()=>{a.current={getActiveChartSelectedPoints:()=>{const S=c.find(P=>P.id===f);return S?new Map(S.selectedPoints):new Map},togglePointForActiveChart:S=>{console.log("togglePointForActiveChart called, activeChartId:",f),u(P=>P.map(A=>{if(A.id===f){const I=new Map(A.selectedPoints);if(console.log("Current selected points:",I.size),I.has(S))I.delete(S),console.log("Deleted point, new size:",I.size);else{const B=new Set(["001"]);I.set(S,B),console.log("Added point, new size:",I.size)}return{...A,selectedPoints:I}}return A}))},updateInvertersForActiveChart:(S,P)=>{console.log("updateInvertersForActiveChart called, activeChartId:",f,"inverters:",P),u(N=>N.map(I=>{if(I.id===f){const B=new Map(I.selectedPoints);return P.size===0?B.delete(S):B.set(S,P),console.log("Updated chart, selected points size:",B.size),{...I,selectedPoints:B}}return I}))}}},[c,f,a]),R.useEffect(()=>{if(typeof ResizeObserver>"u")return;const S=new ResizeObserver(P=>{const N=new Map;P.forEach(A=>{const I=A.target,B=I.getAttribute("data-chart-id");if(!B)return;const se=c.find(Z=>Z.id===B);if(!se)return;const _e=I.querySelector("[data-categorical-stack]"),Y=_e?_e.scrollHeight:0;if(Y<=0)return;const F=Math.max(qt+Y+24,Ql);N.set(se.row,Math.max(F,N.get(se.row)??0))}),N.size!==0&&p(A=>{let I=!1;const B=new Map(A);return N.forEach((se,_e)=>{const Y=B.get(_e)??qt;se>Y+1&&(B.set(_e,se),I=!0)}),I?B:A})});return U.current.forEach(P=>S.observe(P)),()=>{S.disconnect()}},[c,p]);const $=R.useCallback(S=>g.get(S)??qt,[g]),ie=R.useCallback(S=>b.get(S)??pr,[b]),an=R.useCallback((S,P)=>{const N=Math.max(Ql,P);p(A=>{const I=new Map(A);return I.set(S,N),I})},[]),Ue=R.useCallback((S,P)=>{const N=Math.max(ur,P);_(A=>{const I=new Map(A);return I.set(S,N),I})},[]),Ee=R.useCallback(S=>{q.current!==null&&window.clearTimeout(q.current),E(S),q.current=window.setTimeout(()=>{E(null),q.current=null},400)},[]);R.useEffect(()=>()=>{q.current!==null&&window.clearTimeout(q.current)},[]);const M=R.useCallback((S,P,N,A)=>{if(A<=Ql*2){const Y=A/2;p(F=>{const Z=new Map(F);return Z.set(S,Y),Z.set(P,A-Y),Z});return}const I=Ql,B=A-Ql,se=Math.min(Math.max(N,I),B),_e=A-se;p(Y=>{const F=new Map(Y);return F.set(S,se),F.set(P,_e),F})},[]),O=R.useCallback((S,P,N,A)=>{if(A<=ur*2){const Y=A/2;_(F=>{const Z=new Map(F);return Z.set(S,Y),Z.set(P,A-Y),Z});return}const I=ur,B=A-ur,se=Math.min(Math.max(N,I),B),_e=A-se;_(Y=>{const F=new Map(Y);return F.set(S,se),F.set(P,_e),F})},[]),H=(S,P,N)=>{if(P===void 0)return;const A=$(S),I=$(P);k.current={mode:"between",startY:N,aboveRow:S,belowRow:P,initialAbove:A,initialBelow:I,total:A+I},C(S)},ee=(S,P)=>{k.current={mode:"edge",startY:P,row:S,initialHeight:$(S)},C(S)};R.useEffect(()=>{if(h===null||!k.current)return;const S=k.current,P=A=>{const I=A.clientY-S.startY;if(S.mode==="between"){const B=S.initialAbove+I;M(S.aboveRow,S.belowRow,B,S.total)}else an(S.row,S.initialHeight+I)},N=()=>{C(null),k.current=null};return document.addEventListener("mousemove",P),document.addEventListener("mouseup",N),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",N)}},[h,M,an]);const oe=(S,P,N)=>{if(P===void 0)return;const A=ie(S),I=ie(P);v.current={mode:"between",startX:N,leftCol:S,rightCol:P,initialLeft:A,initialRight:I,total:A+I},L(S)},gn=(S,P)=>{v.current={mode:"edge",startX:P,col:S,initialWidth:ie(S)},L(S)};R.useEffect(()=>{if(w===null||!v.current)return;const S=v.current,P=A=>{const I=A.clientX-S.startX;if(S.mode==="between"){const B=S.initialLeft+I;O(S.leftCol,S.rightCol,B,S.total)}else Ue(S.col,S.initialWidth+I)},N=()=>{L(null),v.current=null};return document.addEventListener("mousemove",P),document.addEventListener("mouseup",N),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",N)}},[w,O,Ue]);const We=(S,P,N)=>{const A=$(S),I=$(P),B=A+I;M(S,P,A+N,B)},In=(S,P)=>{const N=$(S),A=$(P),I=N+A,B=I/2;M(S,P,B,I)},$e=(S,P)=>{const N=$(S);an(S,N+P)},bn=(S,P,N)=>{const A=ie(S),I=ie(P),B=A+I;O(S,P,A+N,B)},T=(S,P)=>{const N=ie(S),A=ie(P),I=N+A,B=I/2;O(S,P,B,I)},Q=(S,P)=>{const N=ie(S);Ue(S,N+P)},K=(S,P)=>{const N=c.find(Y=>Y.id===S);if(!N)return;let A=N.row,I=N.col;const B=(Y,F)=>c.some(Z=>Z.row===Y&&Z.col===F);switch(P){case"top":if(A=N.row-1,B(A,N.col)){const Y=new Set(c.map(W=>W.row)),F=Array.from(Y).sort((W,Pe)=>W-Pe);let Z=!1;for(const W of F)if(W<N.row&&!B(W,N.col)){A=W,Z=!0;break}Z||(u(W=>W.map(Pe=>Pe.row<N.row?{...Pe,row:Pe.row-1}:Pe)),A=N.row-1)}break;case"bottom":if(A=N.row+1,B(A,N.col)){const Y=new Set(c.map(W=>W.row)),F=Array.from(Y).sort((W,Pe)=>W-Pe);let Z=!1;for(const W of F)if(W>N.row&&!B(W,N.col)){A=W,Z=!0;break}if(!Z){let W=A;for(;B(W,N.col);)W++;A=W}}break;case"left":if(I=N.col-1,B(N.row,I)){const Y=new Set(c.map(W=>W.col)),F=Array.from(Y).sort((W,Pe)=>W-Pe);let Z=!1;for(const W of F)if(W<N.col&&!B(N.row,W)){I=W,Z=!0;break}Z||(u(W=>W.map(Pe=>Pe.col<N.col?{...Pe,col:Pe.col-1}:Pe)),I=N.col-1)}break;case"right":if(I=N.col+1,B(N.row,I)){const Y=new Set(c.map(W=>W.col)),F=Array.from(Y).sort((W,Pe)=>W-Pe);let Z=!1;for(const W of F)if(W>N.col&&!B(N.row,W)){I=W,Z=!0;break}if(!Z){let W=I;for(;B(N.row,W);)W++;I=W}}break}const se=`chart-${m}`,_e={id:se,selectedPoints:new Map,row:A,col:I};b.has(I)||_(Y=>new Map(Y).set(I,pr)),g.has(A)||p(Y=>new Map(Y).set(A,qt)),u(Y=>[...Y,_e]),y(Y=>Y+1),x(se),Ee(se)},X=(S,P)=>{const N=c.filter(I=>I.row===S);if(N.length===0)return;let A;typeof P=="number"&&(A=N.find(I=>I.col===P)),A||(A=N.find(I=>I.id===f)??N[0]),K(A.id,"bottom")},te=(S,P)=>{const N=c.filter(I=>I.col===S);if(N.length===0)return;let A;typeof P=="number"&&(A=N.find(I=>I.row===P)),A||(A=N.find(I=>I.id===f)??N[0]),K(A.id,"right")},ke=S=>{u(P=>{const N=P.filter(F=>F.id!==S);if(N.length===0)return x("chart-0"),_(new Map([[0,pr]])),p(new Map([[0,qt]])),[{id:"chart-0",selectedPoints:new Map,row:0,col:0}];S===f&&x(N[0].id);const A=new Set(N.map(F=>F.row)),I=new Set(N.map(F=>F.col)),B=Array.from(A).sort((F,Z)=>F-Z),se=Array.from(I).sort((F,Z)=>F-Z),_e=new Map(B.map((F,Z)=>[F,Z])),Y=new Map(se.map((F,Z)=>[F,Z]));return N.map(F=>({...F,row:_e.get(F.row)??F.row,col:Y.get(F.col)??F.col}))})},on=(S,P,N)=>{u(A=>A.map(I=>I.id===S?{...I,selectedPoints:new Map(I.selectedPoints).set(P,N)}:I)),n(S,P,N)},En=(S,P,N)=>{u(A=>A.map(I=>{if(I.id===S){const B=new Map(I.selectedPoints),se=B.get(P);if(se){const _e=new Set(se);return _e.delete(N),_e.size===0?B.delete(P):B.set(P,_e),{...I,selectedPoints:B}}}return I})),l(S,P,N)},Xe=Math.min(...c.map(S=>S.row),0),hn=Math.min(...c.map(S=>S.col),0),Fn=c.map(S=>({...S,row:S.row-Xe,col:S.col-hn})),Gl=R.useMemo(()=>{const S=new Map;return c.forEach(P=>{S.set(`${P.row}:${P.col}`,P)}),S},[c]),_n=Array.from(new Set(Fn.map(S=>S.row))).sort((S,P)=>S-P),xn=Array.from(new Set(Fn.map(S=>S.col))).sort((S,P)=>S-P),Dc=new Map,Bl=[];_n.forEach((S,P)=>{Dc.set(S,P);const N=S+Xe;Bl.push(`${$(N)}px`),P<_n.length-1&&Bl.push(`${xs}px`)}),_n.length>0&&Bl.push(`${xs}px`);const Cp=Bl.length>0?Bl.join(" "):"1fr",Vc=new Map,Ol=[];xn.forEach((S,P)=>{Vc.set(S,P);const N=S+hn;Ol.push(`${ie(N)}px`),P<xn.length-1&&Ol.push(`${vs}px`)}),xn.length>0&&Ol.push(`${vs}px`);const wp=Ol.length>0?Ol.join(" "):"1fr";return d.jsx("div",{className:"w-full h-full overflow-auto",children:d.jsxs("div",{className:"grid p-4",style:{gridTemplateRows:Cp,gridTemplateColumns:wp,rowGap:0,columnGap:0},children:[Fn.map(S=>d.jsx("div",{ref:P=>{P?U.current.set(S.id,P):U.current.delete(S.id)},className:`relative border rounded-lg bg-white shadow-sm overflow-visible transition-all cursor-pointer ${f===S.id?"border-blue-500 border-2 ring-2 ring-blue-200":"border-gray-300"} ${V===S.id?"animate-chart-expand":""}`,style:{gridRow:(Dc.get(S.row)??0)*2+1,gridColumn:(Vc.get(S.col)??0)*2+1},"data-chart-id":S.id,onClick:P=>{P.target.closest("button")||x(S.id)},children:d.jsx("div",{className:"chart-content h-full flex flex-col",children:d.jsx(d_,{selectedPoints:S.selectedPoints,protocols:e,onUpdateInverters:(P,N)=>on(S.id,P,N),onScrollToPoint:t,onRemoveInverter:(P,N)=>En(S.id,P,N),onSelectPointsToggle:i,selectPointsOpen:r,onDeleteChart:()=>ke(S.id)})})},S.id)),xn.slice(0,-1).map((S,P)=>{const N=S+hn,I=xn[P+1]+hn,B=ie(N),se=ie(I),_e=B+se||1,Y=_n.reduce((F,Z)=>{const W=Z+Xe;return Gl.has(`${W}:${N}`)&&F.push({key:`col-btn-${W}-${N}`,onAdd:()=>te(N,W),size:$(W)}),F},[]);return d.jsx("div",{style:{gridRow:"1 / -1",gridColumn:P*2+2,alignSelf:"stretch",justifySelf:"center"},children:d.jsx(ou,{onAdd:()=>te(N),onResizeStart:F=>oe(N,I,F),onKeyboardNudge:F=>bn(N,I,F),onAutoFit:()=>T(N,I),percentLeft:B/_e*100,isActive:w===N,buttonSegments:Y})},`col-divider-${N}`)}),xn.length>0&&(()=>{const P=xn[xn.length-1]+hn,N=_n.reduce((A,I)=>{const B=I+Xe;return Gl.has(`${B}:${P}`)&&A.push({key:`terminal-col-btn-${B}-${P}`,onAdd:()=>te(P,B),size:$(B)}),A},[]);return d.jsx("div",{style:{gridRow:"1 / -1",gridColumn:xn.length*2,alignSelf:"stretch",justifySelf:"center"},children:d.jsx(ou,{onAdd:()=>te(P),onEdgeResizeStart:A=>gn(P,A),onEdgeKeyboardNudge:A=>Q(P,A),isActive:w===P,buttonSegments:N})},`col-divider-${P}-terminal`)})(),_n.slice(0,-1).map((S,P)=>{const N=_n[P+1],A=S+Xe,I=N+Xe,B=$(A),se=$(I),_e=B+se||1,Y=xn.reduce((F,Z)=>{const W=Z+hn;return Gl.has(`${A}:${W}`)&&F.push({key:`row-btn-${A}-${W}`,onAdd:()=>X(A,W),size:ie(W)}),F},[]);return d.jsx("div",{style:{gridColumn:"1 / -1",gridRow:P*2+2,alignSelf:"center",justifySelf:"stretch"},children:d.jsx(au,{onAdd:()=>X(A),onResizeStart:F=>H(A,I,F),onKeyboardNudge:F=>We(A,I,F),onAutoFit:()=>In(A,I),percentAbove:B/_e*100,isActive:h===A,buttonSegments:Y})},`divider-${A}`)}),_n.length>0&&(()=>{const P=_n[_n.length-1]+Xe,N=xn.reduce((A,I)=>{const B=I+hn;return Gl.has(`${P}:${B}`)&&A.push({key:`terminal-row-btn-${P}-${B}`,onAdd:()=>X(P,B),size:ie(B)}),A},[]);return d.jsx("div",{style:{gridColumn:"1 / -1",gridRow:_n.length*2,alignSelf:"center",justifySelf:"stretch"},children:d.jsx(au,{onAdd:()=>X(P),onEdgeResizeStart:A=>ee(P,A),onEdgeKeyboardNudge:A=>$e(P,A),isActive:h===P,buttonSegments:N})},`divider-${P}-terminal`)})()]})})}function y_(){const[e,n]=j.useState(""),t=R.useRef(null),[l,i]=R.useState(new Map),[r,a]=R.useState(null),o=R.useMemo(()=>{if(!r)return{top:"1rem",left:"1rem",showArrow:!1,arrowOnLeft:!0};const T=800,Q=8,K=window.innerWidth;let X=r.right+Q,te=!0;return X+T>K-20&&(X=r.left-T-Q,te=!1,X<20&&(X=20,te=!0)),{top:`${r.top}px`,left:`${X}px`,showArrow:!0,arrowOnLeft:te}},[r]),[s,c]=j.useState(!1),[u,m]=j.useState(new Set),[y,f]=j.useState(()=>new Set),[x,b]=j.useState("Standard"),[_,g]=j.useState(["Component","Feature"]),[p,h]=j.useState(!0),C=R.useRef(null),w=R.useRef(null),[L,k]=R.useState(""),[v,V]=R.useState(!0),[E,q]=R.useState(!1),U=R.useRef(0),$=R.useRef(0);R.useEffect(()=>{if(!w.current)return;const T=()=>{if(!w.current)return;const X=w.current,te=X.scrollTop;if(Date.now()-$.current<500){U.current=te;return}te>U.current&&te>100?E||q(!0):te<50&&E&&q(!1),U.current=te;const on=X.querySelectorAll('[id^="group-"]');let En="";on.forEach(Xe=>{const hn=Xe.getBoundingClientRect(),Fn=X.getBoundingClientRect();hn.top-Fn.top<=Fn.height*.3&&hn.bottom>Fn.top&&(En=Xe.id)}),En&&En!==L&&k(En)},Q=setTimeout(T,100),K=w.current;return K.addEventListener("scroll",T),()=>{clearTimeout(Q),K.removeEventListener("scroll",T)}},[L,E]),R.useEffect(()=>{const T=Q=>{Q.key==="Escape"&&p&&h(!1)};return document.addEventListener("keydown",T),()=>{document.removeEventListener("keydown",T)}},[p]),R.useEffect(()=>{if(!p)return;const T=Q=>{const K=Q.target;K&&(C.current&&C.current.contains(K)||K.closest('[data-role="sidebar-toggle"]')||h(!1))};return document.addEventListener("mousedown",T),document.addEventListener("touchstart",T,{passive:!0}),()=>{document.removeEventListener("mousedown",T),document.removeEventListener("touchstart",T)}},[p]);const ie=T=>{p?an(T):(h(!0),setTimeout(()=>{an(T)},300))},an=T=>{if(!w.current)return;const Q=w.current.querySelector(`[data-point-key="${T}"]`);Q&&(Q.scrollIntoView({behavior:"smooth",block:"center"}),Q.classList.add("bg-blue-100"),setTimeout(()=>{Q.classList.remove("bg-blue-100")},1e3))},Ue=()=>new Set(f_),Ee=j.useMemo(()=>Zh(Ht),[]),M=j.useMemo(()=>[...Ee.keys()].sort(),[Ee]),O=j.useMemo(()=>{let T=Ht;if(T=T.filter(K=>(Array.isArray(K.labels)?K.labels:[]).length>0),e){const K=e.toLowerCase();T=T.filter(X=>(X.entry.description||"").toLowerCase().includes(K)||(X.entry.longdescription||"").toLowerCase().includes(K)||(X.entry.name||"").toLowerCase().includes(K))}const Q=(()=>{switch(x){case"Standard":return["Standard"];case"Extended":return["Standard","Extended"];case"Complete":return["Standard","Extended","Complete"];default:return["Standard","Extended","Complete"]}})();if(T=T.filter(K=>{const te=(Array.isArray(K.labels)?K.labels:[]).filter(ke=>ke.label_family==="Level of Detail").map(ke=>ke.label_text);return te.length===0?!0:te.some(ke=>Q.includes(ke))}),y.size>0){const K=new Map;y.forEach(X=>{const[te,ke]=X.split(":",2);K.has(te)||K.set(te,new Set),K.get(te).add(ke)}),T=T.filter(X=>{const te=Array.isArray(X.labels)?X.labels:[];if(te.length===0)return!1;const ke=new Map;te.forEach(on=>{ke.has(on.label_family)||ke.set(on.label_family,new Set),ke.get(on.label_family).add(on.label_text)});for(const[on,En]of K.entries()){const Xe=ke.get(on);if(!Xe||![...En].some(Fn=>Xe.has(Fn)))return!1}return!0})}return T},[e,y,x]),H=j.useMemo(()=>Jh(O,_),[O,_]);R.useEffect(()=>{k(""),w.current&&setTimeout(()=>{const T=w.current;T&&T.dispatchEvent(new Event("scroll"))},150)},[H]);const ee=T=>{if(console.log("toggle called for key:",T),!t.current){console.warn("ChartGrid callbacks not available yet");return}const Q=t.current.getActiveChartSelectedPoints(),K=Q.has(T);if(console.log("isCurrentlySelected:",K,"activeSelected size:",Q.size),K)console.log("Removing point:",T),t.current.togglePointForActiveChart(T);else{const X=Ue();console.log("Adding point:",T,"with inverters:",X),t.current.updateInvertersForActiveChart(T,X)}},oe=(T,Q)=>{t.current&&t.current.updateInvertersForActiveChart(T,Q)},gn=(T,Q)=>{f(K=>{const X=new Set(K),te=`${T}:${Q}`;return X.has(te)?X.delete(te):X.add(te),X})},We=()=>f(new Set),In=T=>{m(Q=>{const K=new Set(Q);return K.has(T)?K.delete(T):K.add(T),K})},$e=O.length,bn=j.useMemo(()=>Ht.filter(T=>(Array.isArray(T.labels)?T.labels:[]).length>0).length,[]);return j.useEffect(()=>{try{console.assert(Ht.length>0,"Expected sample data");const T=Ht.find(Q=>Q.entry.name==="pNom");T&&console.assert(T.entry.unit==="W","pNom should have unit W")}catch(T){console.warn("Self-test failed:",T)}},[]),d.jsx("div",{className:"h-full bg-slate-100 p-4 md:p-6",children:d.jsxs("div",{className:"mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative overflow-hidden flex flex-col",children:[d.jsx("div",{className:"flex-1 min-h-0 relative",children:d.jsx(p_,{protocols:Ht,onUpdateInverters:()=>{},onScrollToPoint:ie,onRemoveInverter:()=>{},onSelectPointsToggle:h,selectPointsOpen:p,callbacksRef:t,onActiveChartSelectedPointsChange:i,onActiveChartPositionChange:a})}),d.jsxs("div",{ref:C,className:`fixed bg-white border-2 border-blue-400 shadow-xl transition-all duration-300 z-50 rounded-lg flex flex-row ${p?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-4 pointer-events-none"}`,style:{top:o.top,left:o.left,width:"800px",height:p?"calc(100vh - 8rem)":"0",maxHeight:"calc(100vh - 8rem)",overflow:"hidden"},children:[p&&o.showArrow&&d.jsx("div",{className:`absolute top-4 w-0 h-0 ${o.arrowOnLeft?"left-0":"right-0"}`,style:{borderTop:"8px solid transparent",borderBottom:"8px solid transparent",...o.arrowOnLeft?{borderRight:"8px solid rgb(96, 165, 250)",transform:"translateX(-8px)"}:{borderLeft:"8px solid rgb(96, 165, 250)",transform:"translateX(8px)"}}}),d.jsxs("div",{className:"h-full flex flex-row w-full min-h-0",children:[H.size>0&&d.jsx("div",{className:"w-32 border-r border-gray-200 flex-shrink-0 overflow-y-auto",children:d.jsxs("nav",{className:"p-3 text-sm text-gray-800",children:[d.jsx("div",{className:"text-emerald-600 font-semibold mb-2 text-xs",children:"Navigation"}),d.jsx("div",{className:"flex flex-col gap-1",children:[...H.entries()].filter(([T])=>T!=="(Unlabeled)").map(([T])=>{const Q=`group-${T.replace(/\s+/g,"-")}-0`,K=L===Q;return d.jsxs("div",{className:"relative",children:[K&&d.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),d.jsx("button",{className:`px-2 py-1 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors ${K?"text-blue-600 font-medium bg-blue-50":"text-gray-700"}`,onClick:()=>{const X=document.getElementById(Q);if(X&&w.current){const te=w.current.getBoundingClientRect(),ke=X.getBoundingClientRect(),on=w.current.scrollTop,En=ke.top-te.top+on;w.current.scrollTo({top:En-10,behavior:"smooth"})}},children:T})]},T)})})]})}),d.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[d.jsx("div",{className:"border-b border-gray-200",children:d.jsxs("button",{onClick:()=>{$.current=Date.now(),q(!E)},className:"w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("svg",{className:`h-4 w-4 text-gray-500 transition-transform ${E?"":"rotate-90"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),d.jsx("div",{className:"text-lg font-semibold",children:"Add Points"})]}),d.jsx("div",{className:"text-sm text-gray-600",children:d.jsxs("span",{children:["Available: ",$e.toLocaleString()," of ",bn.toLocaleString()]})})]})}),d.jsx("div",{className:`transition-all duration-300 overflow-hidden ${E?"max-h-0":"max-h-[1000px]"}`,children:d.jsxs("div",{className:"p-4",children:[d.jsx(m_,{availableFamilies:M,hierarchy:_,onChange:g,scrollContainerRef:w}),d.jsx(t_,{allLabels:Ee,selectedLabels:y,onToggleLabel:gn,onClearFilters:We}),d.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[d.jsx("div",{className:"flex-1",children:d.jsx(e_,{value:e,onChange:n})}),d.jsx(n_,{show:s,onToggle:c})]}),d.jsxs("div",{className:"mt-2 flex items-center gap-4",children:[d.jsxs("button",{onClick:()=>{V(!0),w.current&&w.current.querySelectorAll("details").forEach(Q=>{Q.open=!0})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[d.jsx("span",{children:"⤵"}),d.jsx("span",{children:"Expand all"})]}),d.jsxs("button",{onClick:()=>{V(!1),w.current&&w.current.querySelectorAll("details").forEach(Q=>{Q.open=!1})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[d.jsx("span",{children:"⤴"}),d.jsx("span",{children:"Collapse all"})]}),d.jsx(tu,{value:x,onChange:b})]})]})}),d.jsx("div",{className:"flex-1 overflow-y-auto px-4 pb-4 pr-1",ref:w,"data-scroll-container":!0,children:H.size===0?d.jsx("div",{className:"py-4 text-center text-sm text-gray-500",children:"No points match the current filters"}):[...H.entries()].filter(([T])=>T!=="(Unlabeled)").map(([T,Q])=>d.jsx(_p,{levelName:T,levelData:Q,selected:l,toggle:ee,showHelp:s,onUpdateInverters:oe,groupsExpanded:v,pointHelpEnabled:u,onTogglePointHelp:In,depth:0},T))}),x!=="Complete"&&d.jsxs("div",{className:"border-t border-gray-200 bg-white/80 px-4 py-3",children:[d.jsx("p",{className:"text-xs text-gray-600 mb-2",children:"Didn't find what you were looking for? Increase the Detail Level to see more data points."}),d.jsx(tu,{value:x,onChange:b})]})]})]})]})]})})}const su="matter-app-active-view";function g_(){const[e,n]=j.useState(()=>{const t=localStorage.getItem(su);return t==="site-config"||t==="historical-data"?t:"site-config"});return j.useEffect(()=>{localStorage.setItem(su,e)},[e]),d.jsxs("div",{className:"flex h-screen bg-slate-100",children:[d.jsxs("aside",{className:"w-64 bg-white border-r border-slate-300 flex flex-col shadow-sm",children:[d.jsx("div",{className:"p-4 border-b border-slate-300",children:d.jsx("h1",{className:"text-lg font-semibold text-slate-800",children:"Matter App"})}),d.jsxs("nav",{className:"flex-1 p-3",children:[d.jsx("button",{onClick:()=>n("site-config"),className:`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${e==="site-config"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-xl",children:"⚙️"}),d.jsx("span",{children:"Site Config"})]})}),d.jsx("button",{onClick:()=>n("historical-data"),className:`w-full text-left px-4 py-3 rounded-lg transition-colors ${e==="historical-data"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-xl",children:"📊"}),d.jsx("span",{children:"Historical Data"})]})})]}),d.jsx("div",{className:"p-4 border-t border-slate-300 text-xs text-slate-500",children:d.jsxs("div",{children:["Active: ",e==="site-config"?"Site Config":"Historical Data"]})})]}),d.jsxs("main",{className:"flex-1 overflow-auto",children:[e==="site-config"&&d.jsx(Ob,{}),e==="historical-data"&&d.jsx(y_,{})]})]})}_o.createRoot(document.getElementById("root")).render(d.jsx(R.StrictMode,{children:d.jsx(g_,{})}));

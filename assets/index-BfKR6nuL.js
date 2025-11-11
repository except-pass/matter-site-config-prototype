(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Df(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sc={exports:{}},Ar={},Cc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Gf=Symbol.for("react.portal"),Mf=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),Bf=Symbol.for("react.provider"),Rf=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),Wf=Symbol.for("react.memo"),Hf=Symbol.for("react.lazy"),Zs=Symbol.iterator;function $f(e){return e===null||typeof e!="object"?null:(e=Zs&&e[Zs]||e["@@iterator"],typeof e=="function"?e:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kc=Object.assign,Pc={};function il(e,n,t){this.props=e,this.context=n,this.refs=Pc,this.updater=t||Lc}il.prototype.isReactComponent={};il.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};il.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ec(){}Ec.prototype=il.prototype;function Uo(e,n,t){this.props=e,this.context=n,this.refs=Pc,this.updater=t||Lc}var Wo=Uo.prototype=new Ec;Wo.constructor=Uo;kc(Wo,il.prototype);Wo.isPureReactComponent=!0;var ed=Array.isArray,Nc=Object.prototype.hasOwnProperty,Ho={current:null},Ic={key:!0,ref:!0,__self:!0,__source:!0};function Ac(e,n,t){var l,i={},r=null,a=null;if(n!=null)for(l in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(r=""+n.key),n)Nc.call(n,l)&&!Ic.hasOwnProperty(l)&&(i[l]=n[l]);var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){for(var s=Array(o),d=0;d<o;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(l in o=e.defaultProps,o)i[l]===void 0&&(i[l]=o[l]);return{$$typeof:ai,type:e,key:r,ref:a,props:i,_owner:Ho.current}}function qf(e,n){return{$$typeof:ai,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function zf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var nd=/\/+/g;function oa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?zf(""+e.key):n.toString(36)}function Bi(e,n,t,l,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ai:case Gf:a=!0}}if(a)return a=e,i=i(a),e=l===""?"."+oa(a,0):l,ed(i)?(t="",e!=null&&(t=e.replace(nd,"$&/")+"/"),Bi(i,n,t,"",function(d){return d})):i!=null&&($o(i)&&(i=qf(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(nd,"$&/")+"/")+e)),n.push(i)),1;if(a=0,l=l===""?".":l+":",ed(e))for(var o=0;o<e.length;o++){r=e[o];var s=l+oa(r,o);a+=Bi(r,n,t,s,i)}else if(s=$f(e),typeof s=="function")for(e=s.call(e),o=0;!(r=e.next()).done;)r=r.value,s=l+oa(r,o++),a+=Bi(r,n,t,s,i);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function yi(e,n,t){if(e==null)return e;var l=[],i=0;return Bi(e,l,"","",function(r){return n.call(t,r,i++)}),l}function Kf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Ri={transition:null},Qf={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Ri,ReactCurrentOwner:Ho};function Vc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:yi,forEach:function(e,n,t){yi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return yi(e,function(){n++}),n},toArray:function(e){return yi(e,function(n){return n})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=il;O.Fragment=Mf;O.Profiler=Of;O.PureComponent=Uo;O.StrictMode=Ff;O.Suspense=Uf;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qf;O.act=Vc;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=kc({},e.props),i=e.key,r=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,a=Ho.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in n)Nc.call(n,s)&&!Ic.hasOwnProperty(s)&&(l[s]=n[s]===void 0&&o!==void 0?o[s]:n[s])}var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){o=Array(s);for(var d=0;d<s;d++)o[d]=arguments[d+2];l.children=o}return{$$typeof:ai,type:e.type,key:i,ref:r,props:l,_owner:a}};O.createContext=function(e){return e={$$typeof:Rf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bf,_context:e},e.Consumer=e};O.createElement=Ac;O.createFactory=function(e){var n=Ac.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:jf,render:e}};O.isValidElement=$o;O.lazy=function(e){return{$$typeof:Hf,_payload:{_status:-1,_result:e},_init:Kf}};O.memo=function(e,n){return{$$typeof:Wf,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=Ri.transition;Ri.transition={};try{e()}finally{Ri.transition=n}};O.unstable_act=Vc;O.useCallback=function(e,n){return Le.current.useCallback(e,n)};O.useContext=function(e){return Le.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};O.useEffect=function(e,n){return Le.current.useEffect(e,n)};O.useId=function(){return Le.current.useId()};O.useImperativeHandle=function(e,n,t){return Le.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return Le.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return Le.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return Le.current.useMemo(e,n)};O.useReducer=function(e,n,t){return Le.current.useReducer(e,n,t)};O.useRef=function(e){return Le.current.useRef(e)};O.useState=function(e){return Le.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return Le.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return Le.current.useTransition()};O.version="18.3.1";Cc.exports=O;var T=Cc.exports;const te=Df(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf=T,Jf=Symbol.for("react.element"),Xf=Symbol.for("react.fragment"),Zf=Object.prototype.hasOwnProperty,ep=Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,np={key:!0,ref:!0,__self:!0,__source:!0};function Tc(e,n,t){var l,i={},r=null,a=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(a=n.ref);for(l in n)Zf.call(n,l)&&!np.hasOwnProperty(l)&&(i[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps,n)i[l]===void 0&&(i[l]=n[l]);return{$$typeof:Jf,type:e,key:r,ref:a,props:i,_owner:ep.current}}Ar.Fragment=Xf;Ar.jsx=Tc;Ar.jsxs=Tc;Sc.exports=Ar;var c=Sc.exports,ja={},Dc={exports:{}},Oe={},Gc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,G){var M=N.length;N.push(G);e:for(;0<M;){var Y=M-1>>>1,ae=N[Y];if(0<i(ae,G))N[Y]=G,N[M]=ae,M=Y;else break e}}function t(N){return N.length===0?null:N[0]}function l(N){if(N.length===0)return null;var G=N[0],M=N.pop();if(M!==G){N[0]=M;e:for(var Y=0,ae=N.length,_t=ae>>>1;Y<_t;){var fn=2*(Y+1)-1,P=N[fn],V=fn+1,F=N[V];if(0>i(P,M))V<ae&&0>i(F,P)?(N[Y]=F,N[V]=M,Y=V):(N[Y]=P,N[fn]=M,Y=fn);else if(V<ae&&0>i(F,M))N[Y]=F,N[V]=M,Y=V;else break e}}return G}function i(N,G){var M=N.sortIndex-G.sortIndex;return M!==0?M:N.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var s=[],d=[],u=1,m=null,f=3,b=!1,x=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var G=t(d);G!==null;){if(G.callback===null)l(d);else if(G.startTime<=N)l(d),G.sortIndex=G.expirationTime,n(s,G);else break;G=t(d)}}function v(N){if(y=!1,h(N),!x)if(t(s)!==null)x=!0,mn(C);else{var G=t(d);G!==null&&fl(v,G.startTime-N)}}function C(N,G){x=!1,y&&(y=!1,g(S),S=-1),b=!0;var M=f;try{for(h(G),m=t(s);m!==null&&(!(m.expirationTime>G)||N&&!R());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,f=m.priorityLevel;var ae=Y(m.expirationTime<=G);G=e.unstable_now(),typeof ae=="function"?m.callback=ae:m===t(s)&&l(s),h(G)}else l(s);m=t(s)}if(m!==null)var _t=!0;else{var fn=t(d);fn!==null&&fl(v,fn.startTime-G),_t=!1}return _t}finally{m=null,f=M,b=!1}}var w=!1,L=null,S=-1,E=5,A=-1;function R(){return!(e.unstable_now()-A<E)}function j(){if(L!==null){var N=e.unstable_now();A=N;var G=!0;try{G=L(!0,N)}finally{G?ve():(w=!1,L=null)}}else w=!1}var ve;if(typeof p=="function")ve=function(){p(j)};else if(typeof MessageChannel<"u"){var ln=new MessageChannel,Yn=ln.port2;ln.port1.onmessage=j,ve=function(){Yn.postMessage(null)}}else ve=function(){_(j,0)};function mn(N){L=N,w||(w=!0,ve())}function fl(N,G){S=_(function(){N(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,mn(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var M=f;f=G;try{return N()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=f;f=N;try{return G()}finally{f=M}},e.unstable_scheduleCallback=function(N,G,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,N={id:u++,callback:G,priorityLevel:N,startTime:M,expirationTime:ae,sortIndex:-1},M>Y?(N.sortIndex=M,n(d,N),t(s)===null&&N===t(d)&&(y?(g(S),S=-1):y=!0,fl(v,M-Y))):(N.sortIndex=ae,n(s,N),x||b||(x=!0,mn(C))),N},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(N){var G=f;return function(){var M=f;f=G;try{return N.apply(this,arguments)}finally{f=M}}}})(Mc);Gc.exports=Mc;var tp=Gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp=T,Fe=tp;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fc=new Set,Bl={};function yt(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(Bl[e]=n,e=0;e<n.length;e++)Fc.add(n[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ua=Object.prototype.hasOwnProperty,ip=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,td={},ld={};function rp(e){return Ua.call(ld,e)?!0:Ua.call(td,e)?!1:ip.test(e)?ld[e]=!0:(td[e]=!0,!1)}function ap(e,n,t,l){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function op(e,n,t,l){if(n===null||typeof n>"u"||ap(e,n,t,l))return!0;if(l)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ke(e,n,t,l,i,r,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=a}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ye[n]=new ke(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qo,zo);ye[n]=new ke(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qo,zo);ye[n]=new ke(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qo,zo);ye[n]=new ke(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,n,t,l){var i=ye.hasOwnProperty(n)?ye[n]:null;(i!==null?i.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(op(n,t,i,l)&&(t=null),l||i===null?rp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,l=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,l?e.setAttributeNS(l,n,t):e.setAttribute(n,t))))}var Ln=lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),kt=Symbol.for("react.fragment"),Qo=Symbol.for("react.strict_mode"),Wa=Symbol.for("react.profiler"),Oc=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),Yo=Symbol.for("react.forward_ref"),Ha=Symbol.for("react.suspense"),$a=Symbol.for("react.suspense_list"),Jo=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Rc=Symbol.for("react.offscreen"),id=Symbol.iterator;function pl(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,sa;function Sl(e){if(sa===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);sa=n&&n[1]||""}return`
`+sa+e}var da=!1;function ca(e,n){if(!e||da)return"";da=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var l=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){l=d}e.call(n.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),r=l.stack.split(`
`),a=i.length-1,o=r.length-1;1<=a&&0<=o&&i[a]!==r[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==r[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==r[o]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=o);break}}}finally{da=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Sl(e):""}function sp(e){switch(e.tag){case 5:return Sl(e.type);case 16:return Sl("Lazy");case 13:return Sl("Suspense");case 19:return Sl("SuspenseList");case 0:case 2:case 15:return e=ca(e.type,!1),e;case 11:return e=ca(e.type.render,!1),e;case 1:return e=ca(e.type,!0),e;default:return""}}function qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kt:return"Fragment";case Lt:return"Portal";case Wa:return"Profiler";case Qo:return"StrictMode";case Ha:return"Suspense";case $a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bc:return(e.displayName||"Context")+".Consumer";case Oc:return(e._context.displayName||"Context")+".Provider";case Yo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jo:return n=e.displayName||null,n!==null?n:qa(e.type)||"Memo";case Pn:n=e._payload,e=e._init;try{return qa(e(n))}catch{}}return null}function dp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qa(n);case 8:return n===Qo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cp(e){var n=jc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){l=""+a,r.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(a){l=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bi(e){e._valueTracker||(e._valueTracker=cp(e))}function Uc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=jc(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function za(e,n){var t=n.checked;return ne({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function rd(e,n){var t=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;t=Wn(n.value!=null?n.value:t),e._wrapperState={initialChecked:l,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wc(e,n){n=n.checked,n!=null&&Ko(e,"checked",n,!1)}function Ka(e,n){Wc(e,n);var t=Wn(n.value),l=n.type;if(t!=null)l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Qa(e,n.type,t):n.hasOwnProperty("defaultValue")&&Qa(e,n.type,Wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ad(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Qa(e,n,t){(n!=="number"||tr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Cl=Array.isArray;function jt(e,n,t,l){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Wn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ya(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return ne({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function od(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Cl(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Wn(t)}}function Hc(e,n){var t=Wn(n.value),l=Wn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),l!=null&&(e.defaultValue=""+l)}function sd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ja(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$c(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hi,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,l,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,l,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Rl(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},up=["Webkit","ms","Moz","O"];Object.keys(Nl).forEach(function(e){up.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Nl[n]=Nl[e]})});function zc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Nl.hasOwnProperty(e)&&Nl[e]?(""+n).trim():n+"px"}function Kc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var l=t.indexOf("--")===0,i=zc(t,n[t],l);t==="float"&&(t="cssFloat"),l?e.setProperty(t,i):e[t]=i}}var mp=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xa(e,n){if(n){if(mp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Za(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var no=null,Ut=null,Wt=null;function dd(e){if(e=di(e)){if(typeof no!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Mr(n),no(e.stateNode,e.type,n))}}function Qc(e){Ut?Wt?Wt.push(e):Wt=[e]:Ut=e}function Yc(){if(Ut){var e=Ut,n=Wt;if(Wt=Ut=null,dd(e),n)for(e=0;e<n.length;e++)dd(n[e])}}function Jc(e,n){return e(n)}function Xc(){}var ua=!1;function Zc(e,n,t){if(ua)return e(n,t);ua=!0;try{return Jc(e,n,t)}finally{ua=!1,(Ut!==null||Wt!==null)&&(Xc(),Yc())}}function jl(e,n){var t=e.stateNode;if(t===null)return null;var l=Mr(t);if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var to=!1;if(vn)try{var yl={};Object.defineProperty(yl,"passive",{get:function(){to=!0}}),window.addEventListener("test",yl,yl),window.removeEventListener("test",yl,yl)}catch{to=!1}function fp(e,n,t,l,i,r,a,o,s){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(u){this.onError(u)}}var Il=!1,lr=null,ir=!1,lo=null,pp={onError:function(e){Il=!0,lr=e}};function yp(e,n,t,l,i,r,a,o,s){Il=!1,lr=null,fp.apply(pp,arguments)}function gp(e,n,t,l,i,r,a,o,s){if(yp.apply(this,arguments),Il){if(Il){var d=lr;Il=!1,lr=null}else throw Error(k(198));ir||(ir=!0,lo=d)}}function gt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function eu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function cd(e){if(gt(e)!==e)throw Error(k(188))}function bp(e){var n=e.alternate;if(!n){if(n=gt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,l=n;;){var i=t.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===t)return cd(i),e;if(r===l)return cd(i),n;r=r.sibling}throw Error(k(188))}if(t.return!==l.return)t=i,l=r;else{for(var a=!1,o=i.child;o;){if(o===t){a=!0,t=i,l=r;break}if(o===l){a=!0,l=i,t=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===t){a=!0,t=r,l=i;break}if(o===l){a=!0,l=r,t=i;break}o=o.sibling}if(!a)throw Error(k(189))}}if(t.alternate!==l)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function nu(e){return e=bp(e),e!==null?tu(e):null}function tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=tu(e);if(n!==null)return n;e=e.sibling}return null}var lu=Fe.unstable_scheduleCallback,ud=Fe.unstable_cancelCallback,hp=Fe.unstable_shouldYield,_p=Fe.unstable_requestPaint,re=Fe.unstable_now,xp=Fe.unstable_getCurrentPriorityLevel,Zo=Fe.unstable_ImmediatePriority,iu=Fe.unstable_UserBlockingPriority,rr=Fe.unstable_NormalPriority,vp=Fe.unstable_LowPriority,ru=Fe.unstable_IdlePriority,Vr=null,sn=null;function wp(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Vr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Lp,Sp=Math.log,Cp=Math.LN2;function Lp(e){return e>>>=0,e===0?32:31-(Sp(e)/Cp|0)|0}var _i=64,xi=4194304;function Ll(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ar(e,n){var t=e.pendingLanes;if(t===0)return 0;var l=0,i=e.suspendedLanes,r=e.pingedLanes,a=t&268435455;if(a!==0){var o=a&~i;o!==0?l=Ll(o):(r&=a,r!==0&&(l=Ll(r)))}else a=t&~i,a!==0?l=Ll(a):r!==0&&(l=Ll(r));if(l===0)return 0;if(n!==0&&n!==l&&!(n&i)&&(i=l&-l,r=n&-n,i>=r||i===16&&(r&4194240)!==0))return n;if(l&4&&(l|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)t=31-Ze(n),i=1<<t,l|=e[t],n&=~i;return l}function kp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pp(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var a=31-Ze(r),o=1<<a,s=i[a];s===-1?(!(o&t)||o&l)&&(i[a]=kp(o,n)):s<=n&&(e.expiredLanes|=o),r&=~o}}function io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function au(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function ma(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function oi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ze(n),e[n]=t}function Ep(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ze(t),r=1<<i;n[i]=0,l[i]=-1,e[i]=-1,t&=~r}}function es(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-Ze(t),i=1<<l;i&n|e[l]&n&&(e[l]|=n),t&=~i}}var W=0;function ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var su,ns,du,cu,uu,ro=!1,vi=[],Dn=null,Gn=null,Mn=null,Ul=new Map,Wl=new Map,In=[],Np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,n){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(n.pointerId)}}function gl(e,n,t,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},n!==null&&(n=di(n),n!==null&&ns(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Ip(e,n,t,l,i){switch(n){case"focusin":return Dn=gl(Dn,e,n,t,l,i),!0;case"dragenter":return Gn=gl(Gn,e,n,t,l,i),!0;case"mouseover":return Mn=gl(Mn,e,n,t,l,i),!0;case"pointerover":var r=i.pointerId;return Ul.set(r,gl(Ul.get(r)||null,e,n,t,l,i)),!0;case"gotpointercapture":return r=i.pointerId,Wl.set(r,gl(Wl.get(r)||null,e,n,t,l,i)),!0}return!1}function mu(e){var n=nt(e.target);if(n!==null){var t=gt(n);if(t!==null){if(n=t.tag,n===13){if(n=eu(t),n!==null){e.blockedOn=n,uu(e.priority,function(){du(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ao(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);eo=l,t.target.dispatchEvent(l),eo=null}else return n=di(t),n!==null&&ns(n),e.blockedOn=t,!1;n.shift()}return!0}function fd(e,n,t){ji(e)&&t.delete(n)}function Ap(){ro=!1,Dn!==null&&ji(Dn)&&(Dn=null),Gn!==null&&ji(Gn)&&(Gn=null),Mn!==null&&ji(Mn)&&(Mn=null),Ul.forEach(fd),Wl.forEach(fd)}function bl(e,n){e.blockedOn===n&&(e.blockedOn=null,ro||(ro=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Ap)))}function Hl(e){function n(i){return bl(i,e)}if(0<vi.length){bl(vi[0],e);for(var t=1;t<vi.length;t++){var l=vi[t];l.blockedOn===e&&(l.blockedOn=null)}}for(Dn!==null&&bl(Dn,e),Gn!==null&&bl(Gn,e),Mn!==null&&bl(Mn,e),Ul.forEach(n),Wl.forEach(n),t=0;t<In.length;t++)l=In[t],l.blockedOn===e&&(l.blockedOn=null);for(;0<In.length&&(t=In[0],t.blockedOn===null);)mu(t),t.blockedOn===null&&In.shift()}var Ht=Ln.ReactCurrentBatchConfig,or=!0;function Vp(e,n,t,l){var i=W,r=Ht.transition;Ht.transition=null;try{W=1,ts(e,n,t,l)}finally{W=i,Ht.transition=r}}function Tp(e,n,t,l){var i=W,r=Ht.transition;Ht.transition=null;try{W=4,ts(e,n,t,l)}finally{W=i,Ht.transition=r}}function ts(e,n,t,l){if(or){var i=ao(e,n,t,l);if(i===null)wa(e,n,l,sr,t),md(e,l);else if(Ip(i,e,n,t,l))l.stopPropagation();else if(md(e,l),n&4&&-1<Np.indexOf(e)){for(;i!==null;){var r=di(i);if(r!==null&&su(r),r=ao(e,n,t,l),r===null&&wa(e,n,l,sr,t),r===i)break;i=r}i!==null&&l.stopPropagation()}else wa(e,n,l,null,t)}}var sr=null;function ao(e,n,t,l){if(sr=null,e=Xo(l),e=nt(e),e!==null)if(n=gt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=eu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return sr=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xp()){case Zo:return 1;case iu:return 4;case rr:case vp:return 16;case ru:return 536870912;default:return 16}default:return 16}}var Vn=null,ls=null,Ui=null;function pu(){if(Ui)return Ui;var e,n=ls,t=n.length,l,i="value"in Vn?Vn.value:Vn.textContent,r=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(l=1;l<=a&&n[t-l]===i[r-l];l++);return Ui=i.slice(e,1<l?1-l:void 0)}function Wi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function pd(){return!1}function Be(e){function n(t,l,i,r,a){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?wi:pd,this.isPropagationStopped=pd,this}return ne(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),n}var rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=Be(rl),si=ne({},rl,{view:0,detail:0}),Dp=Be(si),fa,pa,hl,Tr=ne({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hl&&(hl&&e.type==="mousemove"?(fa=e.screenX-hl.screenX,pa=e.screenY-hl.screenY):pa=fa=0,hl=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:pa}}),yd=Be(Tr),Gp=ne({},Tr,{dataTransfer:0}),Mp=Be(Gp),Fp=ne({},si,{relatedTarget:0}),ya=Be(Fp),Op=ne({},rl,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=Be(Op),Rp=ne({},rl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jp=Be(Rp),Up=ne({},rl,{data:0}),gd=Be(Up),Wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$p[e])?!!n[e]:!1}function rs(){return qp}var zp=ne({},si,{key:function(e){if(e.key){var n=Wp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=Be(zp),Qp=ne({},Tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=Be(Qp),Yp=ne({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),Jp=Be(Yp),Xp=ne({},rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=Be(Xp),ey=ne({},Tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=Be(ey),ty=[9,13,27,32],as=vn&&"CompositionEvent"in window,Al=null;vn&&"documentMode"in document&&(Al=document.documentMode);var ly=vn&&"TextEvent"in window&&!Al,yu=vn&&(!as||Al&&8<Al&&11>=Al),hd=" ",_d=!1;function gu(e,n){switch(e){case"keyup":return ty.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function iy(e,n){switch(e){case"compositionend":return bu(n);case"keypress":return n.which!==32?null:(_d=!0,hd);case"textInput":return e=n.data,e===hd&&_d?null:e;default:return null}}function ry(e,n){if(Pt)return e==="compositionend"||!as&&gu(e,n)?(e=pu(),Ui=ls=Vn=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yu&&n.locale!=="ko"?null:n.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ay[e.type]:n==="textarea"}function hu(e,n,t,l){Qc(l),n=dr(n,"onChange"),0<n.length&&(t=new is("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var Vl=null,$l=null;function oy(e){Nu(e,0)}function Dr(e){var n=It(e);if(Uc(n))return e}function sy(e,n){if(e==="change")return n}var _u=!1;if(vn){var ga;if(vn){var ba="oninput"in document;if(!ba){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),ba=typeof vd.oninput=="function"}ga=ba}else ga=!1;_u=ga&&(!document.documentMode||9<document.documentMode)}function wd(){Vl&&(Vl.detachEvent("onpropertychange",xu),$l=Vl=null)}function xu(e){if(e.propertyName==="value"&&Dr($l)){var n=[];hu(n,$l,e,Xo(e)),Zc(oy,n)}}function dy(e,n,t){e==="focusin"?(wd(),Vl=n,$l=t,Vl.attachEvent("onpropertychange",xu)):e==="focusout"&&wd()}function cy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dr($l)}function uy(e,n){if(e==="click")return Dr(n)}function my(e,n){if(e==="input"||e==="change")return Dr(n)}function fy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var nn=typeof Object.is=="function"?Object.is:fy;function ql(e,n){if(nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!Ua.call(n,i)||!nn(e[i],n[i]))return!1}return!0}function Sd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cd(e,n){var t=Sd(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Sd(t)}}function vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function wu(){for(var e=window,n=tr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=tr(e.document)}return n}function os(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function py(e){var n=wu(),t=e.focusedElem,l=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&vu(t.ownerDocument.documentElement,t)){if(l!==null&&os(t)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,r=Math.min(l.start,i);l=l.end===void 0?r:Math.min(l.end,i),!e.extend&&r>l&&(i=l,l=r,r=i),i=Cd(t,r);var a=Cd(t,l);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),r>l?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yy=vn&&"documentMode"in document&&11>=document.documentMode,Et=null,oo=null,Tl=null,so=!1;function Ld(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;so||Et==null||Et!==tr(l)||(l=Et,"selectionStart"in l&&os(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Tl&&ql(Tl,l)||(Tl=l,l=dr(oo,"onSelect"),0<l.length&&(n=new is("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=Et)))}function Si(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Nt={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},ha={},Su={};vn&&(Su=document.createElement("div").style,"AnimationEvent"in window||(delete Nt.animationend.animation,delete Nt.animationiteration.animation,delete Nt.animationstart.animation),"TransitionEvent"in window||delete Nt.transitionend.transition);function Gr(e){if(ha[e])return ha[e];if(!Nt[e])return e;var n=Nt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Su)return ha[e]=n[t];return e}var Cu=Gr("animationend"),Lu=Gr("animationiteration"),ku=Gr("animationstart"),Pu=Gr("transitionend"),Eu=new Map,kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,n){Eu.set(e,n),yt(n,[e])}for(var _a=0;_a<kd.length;_a++){var xa=kd[_a],gy=xa.toLowerCase(),by=xa[0].toUpperCase()+xa.slice(1);qn(gy,"on"+by)}qn(Cu,"onAnimationEnd");qn(Lu,"onAnimationIteration");qn(ku,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(Pu,"onTransitionEnd");Qt("onMouseEnter",["mouseout","mouseover"]);Qt("onMouseLeave",["mouseout","mouseover"]);Qt("onPointerEnter",["pointerout","pointerover"]);Qt("onPointerLeave",["pointerout","pointerover"]);yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(kl));function Pd(e,n,t){var l=e.type||"unknown-event";e.currentTarget=t,gp(l,n,void 0,e),e.currentTarget=null}function Nu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],i=l.event;l=l.listeners;e:{var r=void 0;if(n)for(var a=l.length-1;0<=a;a--){var o=l[a],s=o.instance,d=o.currentTarget;if(o=o.listener,s!==r&&i.isPropagationStopped())break e;Pd(i,o,d),r=s}else for(a=0;a<l.length;a++){if(o=l[a],s=o.instance,d=o.currentTarget,o=o.listener,s!==r&&i.isPropagationStopped())break e;Pd(i,o,d),r=s}}}if(ir)throw e=lo,ir=!1,lo=null,e}function q(e,n){var t=n[po];t===void 0&&(t=n[po]=new Set);var l=e+"__bubble";t.has(l)||(Iu(n,e,2,!1),t.add(l))}function va(e,n,t){var l=0;n&&(l|=4),Iu(t,e,l,n)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function zl(e){if(!e[Ci]){e[Ci]=!0,Fc.forEach(function(t){t!=="selectionchange"&&(hy.has(t)||va(t,!1,e),va(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ci]||(n[Ci]=!0,va("selectionchange",!1,n))}}function Iu(e,n,t,l){switch(fu(n)){case 1:var i=Vp;break;case 4:i=Tp;break;default:i=ts}t=i.bind(null,n,t,e),i=void 0,!to||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function wa(e,n,t,l,i){var r=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var a=l.tag;if(a===3||a===4){var o=l.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=l.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;o!==null;){if(a=nt(o),a===null)return;if(s=a.tag,s===5||s===6){l=r=a;continue e}o=o.parentNode}}l=l.return}Zc(function(){var d=r,u=Xo(t),m=[];e:{var f=Eu.get(e);if(f!==void 0){var b=is,x=e;switch(e){case"keypress":if(Wi(t)===0)break e;case"keydown":case"keyup":b=Kp;break;case"focusin":x="focus",b=ya;break;case"focusout":x="blur",b=ya;break;case"beforeblur":case"afterblur":b=ya;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Jp;break;case Cu:case Lu:case ku:b=Bp;break;case Pu:b=Zp;break;case"scroll":b=Dp;break;case"wheel":b=ny;break;case"copy":case"cut":case"paste":b=jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=bd}var y=(n&4)!==0,_=!y&&e==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var p=d,h;p!==null;){h=p;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,g!==null&&(v=jl(p,g),v!=null&&y.push(Kl(p,v,h)))),_)break;p=p.return}0<y.length&&(f=new b(f,x,null,t,u),m.push({event:f,listeners:y}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&t!==eo&&(x=t.relatedTarget||t.fromElement)&&(nt(x)||x[wn]))break e;if((b||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,b?(x=t.relatedTarget||t.toElement,b=d,x=x?nt(x):null,x!==null&&(_=gt(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=d),b!==x)){if(y=yd,v="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=bd,v="onPointerLeave",g="onPointerEnter",p="pointer"),_=b==null?f:It(b),h=x==null?f:It(x),f=new y(v,p+"leave",b,t,u),f.target=_,f.relatedTarget=h,v=null,nt(u)===d&&(y=new y(g,p+"enter",x,t,u),y.target=h,y.relatedTarget=_,v=y),_=v,b&&x)n:{for(y=b,g=x,p=0,h=y;h;h=vt(h))p++;for(h=0,v=g;v;v=vt(v))h++;for(;0<p-h;)y=vt(y),p--;for(;0<h-p;)g=vt(g),h--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break n;y=vt(y),g=vt(g)}y=null}else y=null;b!==null&&Ed(m,f,b,y,!1),x!==null&&_!==null&&Ed(m,_,x,y,!0)}}e:{if(f=d?It(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var C=sy;else if(xd(f))if(_u)C=my;else{C=cy;var w=dy}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=uy);if(C&&(C=C(e,d))){hu(m,C,t,u);break e}w&&w(e,f,d),e==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Qa(f,"number",f.value)}switch(w=d?It(d):window,e){case"focusin":(xd(w)||w.contentEditable==="true")&&(Et=w,oo=d,Tl=null);break;case"focusout":Tl=oo=Et=null;break;case"mousedown":so=!0;break;case"contextmenu":case"mouseup":case"dragend":so=!1,Ld(m,t,u);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":Ld(m,t,u)}var L;if(as)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Pt?gu(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(yu&&t.locale!=="ko"&&(Pt||S!=="onCompositionStart"?S==="onCompositionEnd"&&Pt&&(L=pu()):(Vn=u,ls="value"in Vn?Vn.value:Vn.textContent,Pt=!0)),w=dr(d,S),0<w.length&&(S=new gd(S,e,null,t,u),m.push({event:S,listeners:w}),L?S.data=L:(L=bu(t),L!==null&&(S.data=L)))),(L=ly?iy(e,t):ry(e,t))&&(d=dr(d,"onBeforeInput"),0<d.length&&(u=new gd("onBeforeInput","beforeinput",null,t,u),m.push({event:u,listeners:d}),u.data=L))}Nu(m,n)})}function Kl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function dr(e,n){for(var t=n+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=jl(e,t),r!=null&&l.unshift(Kl(e,r,i)),r=jl(e,n),r!=null&&l.push(Kl(e,r,i))),e=e.return}return l}function vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ed(e,n,t,l,i){for(var r=n._reactName,a=[];t!==null&&t!==l;){var o=t,s=o.alternate,d=o.stateNode;if(s!==null&&s===l)break;o.tag===5&&d!==null&&(o=d,i?(s=jl(t,r),s!=null&&a.unshift(Kl(t,s,o))):i||(s=jl(t,r),s!=null&&a.push(Kl(t,s,o)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var _y=/\r\n?/g,xy=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(_y,`
`).replace(xy,"")}function Li(e,n,t){if(n=Nd(n),Nd(e)!==n&&t)throw Error(k(425))}function cr(){}var co=null,uo=null;function mo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fo=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(e){return Id.resolve(null).then(e).catch(Sy)}:fo;function Sy(e){setTimeout(function(){throw e})}function Sa(e,n){var t=n,l=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(l===0){e.removeChild(i),Hl(n);return}l--}else t!=="$"&&t!=="$?"&&t!=="$!"||l++;t=i}while(t);Hl(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ad(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var al=Math.random().toString(36).slice(2),on="__reactFiber$"+al,Ql="__reactProps$"+al,wn="__reactContainer$"+al,po="__reactEvents$"+al,Cy="__reactListeners$"+al,Ly="__reactHandles$"+al;function nt(e){var n=e[on];if(n)return n;for(var t=e.parentNode;t;){if(n=t[wn]||t[on]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ad(e);e!==null;){if(t=e[on])return t;e=Ad(e)}return n}e=t,t=e.parentNode}return null}function di(e){return e=e[on]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function It(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Mr(e){return e[Ql]||null}var yo=[],At=-1;function zn(e){return{current:e}}function z(e){0>At||(e.current=yo[At],yo[At]=null,At--)}function $(e,n){At++,yo[At]=e.current,e.current=n}var Hn={},xe=zn(Hn),Ie=zn(!1),dt=Hn;function Yt(e,n){var t=e.type.contextTypes;if(!t)return Hn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in t)i[r]=n[r];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function ur(){z(Ie),z(xe)}function Vd(e,n,t){if(xe.current!==Hn)throw Error(k(168));$(xe,n),$(Ie,t)}function Au(e,n,t){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return t;l=l.getChildContext();for(var i in l)if(!(i in n))throw Error(k(108,dp(e)||"Unknown",i));return ne({},t,l)}function mr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,dt=xe.current,$(xe,e),$(Ie,Ie.current),!0}function Td(e,n,t){var l=e.stateNode;if(!l)throw Error(k(169));t?(e=Au(e,n,dt),l.__reactInternalMemoizedMergedChildContext=e,z(Ie),z(xe),$(xe,e)):z(Ie),$(Ie,t)}var yn=null,Fr=!1,Ca=!1;function Vu(e){yn===null?yn=[e]:yn.push(e)}function ky(e){Fr=!0,Vu(e)}function Kn(){if(!Ca&&yn!==null){Ca=!0;var e=0,n=W;try{var t=yn;for(W=1;e<t.length;e++){var l=t[e];do l=l(!0);while(l!==null)}yn=null,Fr=!1}catch(i){throw yn!==null&&(yn=yn.slice(e+1)),lu(Zo,Kn),i}finally{W=n,Ca=!1}}return null}var Vt=[],Tt=0,fr=null,pr=0,Re=[],je=0,ct=null,gn=1,bn="";function Xn(e,n){Vt[Tt++]=pr,Vt[Tt++]=fr,fr=e,pr=n}function Tu(e,n,t){Re[je++]=gn,Re[je++]=bn,Re[je++]=ct,ct=e;var l=gn;e=bn;var i=32-Ze(l)-1;l&=~(1<<i),t+=1;var r=32-Ze(n)+i;if(30<r){var a=i-i%5;r=(l&(1<<a)-1).toString(32),l>>=a,i-=a,gn=1<<32-Ze(n)+i|t<<i|l,bn=r+e}else gn=1<<r|t<<i|l,bn=e}function ss(e){e.return!==null&&(Xn(e,1),Tu(e,1,0))}function ds(e){for(;e===fr;)fr=Vt[--Tt],Vt[Tt]=null,pr=Vt[--Tt],Vt[Tt]=null;for(;e===ct;)ct=Re[--je],Re[je]=null,bn=Re[--je],Re[je]=null,gn=Re[--je],Re[je]=null}var Me=null,Ge=null,K=!1,Xe=null;function Du(e,n){var t=Ue(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Dd(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Me=e,Ge=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Me=e,Ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ct!==null?{id:gn,overflow:bn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ue(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Me=e,Ge=null,!0):!1;default:return!1}}function go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bo(e){if(K){var n=Ge;if(n){var t=n;if(!Dd(e,n)){if(go(e))throw Error(k(418));n=Fn(t.nextSibling);var l=Me;n&&Dd(e,n)?Du(l,t):(e.flags=e.flags&-4097|2,K=!1,Me=e)}}else{if(go(e))throw Error(k(418));e.flags=e.flags&-4097|2,K=!1,Me=e}}}function Gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function ki(e){if(e!==Me)return!1;if(!K)return Gd(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!mo(e.type,e.memoizedProps)),n&&(n=Ge)){if(go(e))throw Gu(),Error(k(418));for(;n;)Du(e,n),n=Fn(n.nextSibling)}if(Gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ge=Fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ge=null}}else Ge=Me?Fn(e.stateNode.nextSibling):null;return!0}function Gu(){for(var e=Ge;e;)e=Fn(e.nextSibling)}function Jt(){Ge=Me=null,K=!1}function cs(e){Xe===null?Xe=[e]:Xe.push(e)}var Py=Ln.ReactCurrentBatchConfig;function _l(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var l=t.stateNode}if(!l)throw Error(k(147,e));var i=l,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(a){var o=i.refs;a===null?delete o[r]:o[r]=a},n._stringRef=r,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Pi(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Md(e){var n=e._init;return n(e._payload)}function Mu(e){function n(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function l(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=jn(g,p),g.index=0,g.sibling=null,g}function r(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,p,h,v){return p===null||p.tag!==6?(p=Aa(h,g.mode,v),p.return=g,p):(p=i(p,h),p.return=g,p)}function s(g,p,h,v){var C=h.type;return C===kt?u(g,p,h.props.children,v,h.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pn&&Md(C)===p.type)?(v=i(p,h.props),v.ref=_l(g,p,h),v.return=g,v):(v=Yi(h.type,h.key,h.props,null,g.mode,v),v.ref=_l(g,p,h),v.return=g,v)}function d(g,p,h,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Va(h,g.mode,v),p.return=g,p):(p=i(p,h.children||[]),p.return=g,p)}function u(g,p,h,v,C){return p===null||p.tag!==7?(p=st(h,g.mode,v,C),p.return=g,p):(p=i(p,h),p.return=g,p)}function m(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Aa(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gi:return h=Yi(p.type,p.key,p.props,null,g.mode,h),h.ref=_l(g,null,p),h.return=g,h;case Lt:return p=Va(p,g.mode,h),p.return=g,p;case Pn:var v=p._init;return m(g,v(p._payload),h)}if(Cl(p)||pl(p))return p=st(p,g.mode,h,null),p.return=g,p;Pi(g,p)}return null}function f(g,p,h,v){var C=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:o(g,p,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gi:return h.key===C?s(g,p,h,v):null;case Lt:return h.key===C?d(g,p,h,v):null;case Pn:return C=h._init,f(g,p,C(h._payload),v)}if(Cl(h)||pl(h))return C!==null?null:u(g,p,h,v,null);Pi(g,h)}return null}function b(g,p,h,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(h)||null,o(p,g,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gi:return g=g.get(v.key===null?h:v.key)||null,s(p,g,v,C);case Lt:return g=g.get(v.key===null?h:v.key)||null,d(p,g,v,C);case Pn:var w=v._init;return b(g,p,h,w(v._payload),C)}if(Cl(v)||pl(v))return g=g.get(h)||null,u(p,g,v,C,null);Pi(p,v)}return null}function x(g,p,h,v){for(var C=null,w=null,L=p,S=p=0,E=null;L!==null&&S<h.length;S++){L.index>S?(E=L,L=null):E=L.sibling;var A=f(g,L,h[S],v);if(A===null){L===null&&(L=E);break}e&&L&&A.alternate===null&&n(g,L),p=r(A,p,S),w===null?C=A:w.sibling=A,w=A,L=E}if(S===h.length)return t(g,L),K&&Xn(g,S),C;if(L===null){for(;S<h.length;S++)L=m(g,h[S],v),L!==null&&(p=r(L,p,S),w===null?C=L:w.sibling=L,w=L);return K&&Xn(g,S),C}for(L=l(g,L);S<h.length;S++)E=b(L,g,S,h[S],v),E!==null&&(e&&E.alternate!==null&&L.delete(E.key===null?S:E.key),p=r(E,p,S),w===null?C=E:w.sibling=E,w=E);return e&&L.forEach(function(R){return n(g,R)}),K&&Xn(g,S),C}function y(g,p,h,v){var C=pl(h);if(typeof C!="function")throw Error(k(150));if(h=C.call(h),h==null)throw Error(k(151));for(var w=C=null,L=p,S=p=0,E=null,A=h.next();L!==null&&!A.done;S++,A=h.next()){L.index>S?(E=L,L=null):E=L.sibling;var R=f(g,L,A.value,v);if(R===null){L===null&&(L=E);break}e&&L&&R.alternate===null&&n(g,L),p=r(R,p,S),w===null?C=R:w.sibling=R,w=R,L=E}if(A.done)return t(g,L),K&&Xn(g,S),C;if(L===null){for(;!A.done;S++,A=h.next())A=m(g,A.value,v),A!==null&&(p=r(A,p,S),w===null?C=A:w.sibling=A,w=A);return K&&Xn(g,S),C}for(L=l(g,L);!A.done;S++,A=h.next())A=b(L,g,S,A.value,v),A!==null&&(e&&A.alternate!==null&&L.delete(A.key===null?S:A.key),p=r(A,p,S),w===null?C=A:w.sibling=A,w=A);return e&&L.forEach(function(j){return n(g,j)}),K&&Xn(g,S),C}function _(g,p,h,v){if(typeof h=="object"&&h!==null&&h.type===kt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case gi:e:{for(var C=h.key,w=p;w!==null;){if(w.key===C){if(C=h.type,C===kt){if(w.tag===7){t(g,w.sibling),p=i(w,h.props.children),p.return=g,g=p;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pn&&Md(C)===w.type){t(g,w.sibling),p=i(w,h.props),p.ref=_l(g,w,h),p.return=g,g=p;break e}t(g,w);break}else n(g,w);w=w.sibling}h.type===kt?(p=st(h.props.children,g.mode,v,h.key),p.return=g,g=p):(v=Yi(h.type,h.key,h.props,null,g.mode,v),v.ref=_l(g,p,h),v.return=g,g=v)}return a(g);case Lt:e:{for(w=h.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){t(g,p.sibling),p=i(p,h.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=Va(h,g.mode,v),p.return=g,g=p}return a(g);case Pn:return w=h._init,_(g,p,w(h._payload),v)}if(Cl(h))return x(g,p,h,v);if(pl(h))return y(g,p,h,v);Pi(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(t(g,p.sibling),p=i(p,h),p.return=g,g=p):(t(g,p),p=Aa(h,g.mode,v),p.return=g,g=p),a(g)):t(g,p)}return _}var Xt=Mu(!0),Fu=Mu(!1),yr=zn(null),gr=null,Dt=null,us=null;function ms(){us=Dt=gr=null}function fs(e){var n=yr.current;z(yr),e._currentValue=n}function ho(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function $t(e,n){gr=e,us=Dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ne=!0),e.firstContext=null)}function $e(e){var n=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:n,next:null},Dt===null){if(gr===null)throw Error(k(308));Dt=e,gr.dependencies={lanes:0,firstContext:e}}else Dt=Dt.next=e;return n}var tt=null;function ps(e){tt===null?tt=[e]:tt.push(e)}function Ou(e,n,t,l){var i=n.interleaved;return i===null?(t.next=t,ps(n)):(t.next=i.next,i.next=t),n.interleaved=t,Sn(e,l)}function Sn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var En=!1;function ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _n(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function On(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,B&2){var i=l.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n,Sn(e,t)}return i=l.interleaved,i===null?(n.next=n,ps(l)):(n.next=i.next,i.next=n),l.interleaved=n,Sn(e,t)}function Hi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,es(e,t)}}function Fd(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?i=r=a:r=r.next=a,t=t.next}while(t!==null);r===null?i=r=n:r=r.next=n}else i=r=n;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,effects:l.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function br(e,n,t,l){var i=e.updateQueue;En=!1;var r=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,d=s.next;s.next=null,a===null?r=d:a.next=d,a=s;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=d:o.next=d,u.lastBaseUpdate=s))}if(r!==null){var m=i.baseState;a=0,u=d=s=null,o=r;do{var f=o.lane,b=o.eventTime;if((l&f)===f){u!==null&&(u=u.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,y=o;switch(f=n,b=t,y.tag){case 1:if(x=y.payload,typeof x=="function"){m=x.call(b,m,f);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(b,m,f):x,f==null)break e;m=ne({},m,f);break e;case 2:En=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[o]:f.push(o))}else b={eventTime:b,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(d=u=b,s=m):u=u.next=b,a|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;f=o,o=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(s=m),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=u,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else r===null&&(i.shared.lanes=0);mt|=a,e.lanes=a,e.memoizedState=m}}function Od(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],i=l.callback;if(i!==null){if(l.callback=null,l=t,typeof i!="function")throw Error(k(191,i));i.call(l)}}}var ci={},dn=zn(ci),Yl=zn(ci),Jl=zn(ci);function lt(e){if(e===ci)throw Error(k(174));return e}function gs(e,n){switch($(Jl,n),$(Yl,e),$(dn,ci),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ja(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ja(n,e)}z(dn),$(dn,n)}function Zt(){z(dn),z(Yl),z(Jl)}function Ru(e){lt(Jl.current);var n=lt(dn.current),t=Ja(n,e.type);n!==t&&($(Yl,e),$(dn,t))}function bs(e){Yl.current===e&&(z(dn),z(Yl))}var J=zn(0);function hr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var La=[];function hs(){for(var e=0;e<La.length;e++)La[e]._workInProgressVersionPrimary=null;La.length=0}var $i=Ln.ReactCurrentDispatcher,ka=Ln.ReactCurrentBatchConfig,ut=0,Z=null,se=null,ce=null,_r=!1,Dl=!1,Xl=0,Ey=0;function ge(){throw Error(k(321))}function _s(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!nn(e[t],n[t]))return!1;return!0}function xs(e,n,t,l,i,r){if(ut=r,Z=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$i.current=e===null||e.memoizedState===null?Vy:Ty,e=t(l,i),Dl){r=0;do{if(Dl=!1,Xl=0,25<=r)throw Error(k(301));r+=1,ce=se=null,n.updateQueue=null,$i.current=Dy,e=t(l,i)}while(Dl)}if($i.current=xr,n=se!==null&&se.next!==null,ut=0,ce=se=Z=null,_r=!1,n)throw Error(k(300));return e}function vs(){var e=Xl!==0;return Xl=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=e:ce=ce.next=e,ce}function qe(){if(se===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var n=ce===null?Z.memoizedState:ce.next;if(n!==null)ce=n,se=e;else{if(e===null)throw Error(k(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?Z.memoizedState=ce=e:ce=ce.next=e}return ce}function Zl(e,n){return typeof n=="function"?n(e):n}function Pa(e){var n=qe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var l=se,i=l.baseQueue,r=t.pending;if(r!==null){if(i!==null){var a=i.next;i.next=r.next,r.next=a}l.baseQueue=i=r,t.pending=null}if(i!==null){r=i.next,l=l.baseState;var o=a=null,s=null,d=r;do{var u=d.lane;if((ut&u)===u)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var m={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(o=s=m,a=l):s=s.next=m,Z.lanes|=u,mt|=u}d=d.next}while(d!==null&&d!==r);s===null?a=l:s.next=o,nn(l,n.memoizedState)||(Ne=!0),n.memoizedState=l,n.baseState=a,n.baseQueue=s,t.lastRenderedState=l}if(e=t.interleaved,e!==null){i=e;do r=i.lane,Z.lanes|=r,mt|=r,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ea(e){var n=qe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var l=t.dispatch,i=t.pending,r=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do r=e(r,a.action),a=a.next;while(a!==i);nn(r,n.memoizedState)||(Ne=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,l]}function ju(){}function Uu(e,n){var t=Z,l=qe(),i=n(),r=!nn(l.memoizedState,i);if(r&&(l.memoizedState=i,Ne=!0),l=l.queue,ws($u.bind(null,t,l,e),[e]),l.getSnapshot!==n||r||ce!==null&&ce.memoizedState.tag&1){if(t.flags|=2048,ei(9,Hu.bind(null,t,l,i,n),void 0,null),ue===null)throw Error(k(349));ut&30||Wu(t,n,i)}return i}function Wu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Hu(e,n,t,l){n.value=t,n.getSnapshot=l,qu(n)&&zu(e)}function $u(e,n,t){return t(function(){qu(n)&&zu(e)})}function qu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!nn(e,t)}catch{return!0}}function zu(e){var n=Sn(e,1);n!==null&&en(n,e,1,-1)}function Bd(e){var n=an();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zl,lastRenderedState:e},n.queue=e,e=e.dispatch=Ay.bind(null,Z,e),[n.memoizedState,e]}function ei(e,n,t,l){return e={tag:e,create:n,destroy:t,deps:l,next:null},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e)),e}function Ku(){return qe().memoizedState}function qi(e,n,t,l){var i=an();Z.flags|=e,i.memoizedState=ei(1|n,t,void 0,l===void 0?null:l)}function Or(e,n,t,l){var i=qe();l=l===void 0?null:l;var r=void 0;if(se!==null){var a=se.memoizedState;if(r=a.destroy,l!==null&&_s(l,a.deps)){i.memoizedState=ei(n,t,r,l);return}}Z.flags|=e,i.memoizedState=ei(1|n,t,r,l)}function Rd(e,n){return qi(8390656,8,e,n)}function ws(e,n){return Or(2048,8,e,n)}function Qu(e,n){return Or(4,2,e,n)}function Yu(e,n){return Or(4,4,e,n)}function Ju(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xu(e,n,t){return t=t!=null?t.concat([e]):null,Or(4,4,Ju.bind(null,n,e),t)}function Ss(){}function Zu(e,n){var t=qe();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&_s(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function em(e,n){var t=qe();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&_s(n,l[1])?l[0]:(e=e(),t.memoizedState=[e,n],e)}function nm(e,n,t){return ut&21?(nn(t,n)||(t=au(),Z.lanes|=t,mt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=t)}function Ny(e,n){var t=W;W=t!==0&&4>t?t:4,e(!0);var l=ka.transition;ka.transition={};try{e(!1),n()}finally{W=t,ka.transition=l}}function tm(){return qe().memoizedState}function Iy(e,n,t){var l=Rn(e);if(t={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null},lm(e))im(n,t);else if(t=Ou(e,n,t,l),t!==null){var i=Ce();en(t,e,l,i),rm(t,n,l)}}function Ay(e,n,t){var l=Rn(e),i={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null};if(lm(e))im(n,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var a=n.lastRenderedState,o=r(a,t);if(i.hasEagerState=!0,i.eagerState=o,nn(o,a)){var s=n.interleaved;s===null?(i.next=i,ps(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Ou(e,n,i,l),t!==null&&(i=Ce(),en(t,e,l,i),rm(t,n,l))}}function lm(e){var n=e.alternate;return e===Z||n!==null&&n===Z}function im(e,n){Dl=_r=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function rm(e,n,t){if(t&4194240){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,es(e,t)}}var xr={readContext:$e,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Vy={readContext:$e,useCallback:function(e,n){return an().memoizedState=[e,n===void 0?null:n],e},useContext:$e,useEffect:Rd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,qi(4194308,4,Ju.bind(null,n,e),t)},useLayoutEffect:function(e,n){return qi(4194308,4,e,n)},useInsertionEffect:function(e,n){return qi(4,2,e,n)},useMemo:function(e,n){var t=an();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var l=an();return n=t!==void 0?t(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Iy.bind(null,Z,e),[l.memoizedState,e]},useRef:function(e){var n=an();return e={current:e},n.memoizedState=e},useState:Bd,useDebugValue:Ss,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=Bd(!1),n=e[0];return e=Ny.bind(null,e[1]),an().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var l=Z,i=an();if(K){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),ue===null)throw Error(k(349));ut&30||Wu(l,n,t)}i.memoizedState=t;var r={value:t,getSnapshot:n};return i.queue=r,Rd($u.bind(null,l,r,e),[e]),l.flags|=2048,ei(9,Hu.bind(null,l,r,t,n),void 0,null),t},useId:function(){var e=an(),n=ue.identifierPrefix;if(K){var t=bn,l=gn;t=(l&~(1<<32-Ze(l)-1)).toString(32)+t,n=":"+n+"R"+t,t=Xl++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ey++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ty={readContext:$e,useCallback:Zu,useContext:$e,useEffect:ws,useImperativeHandle:Xu,useInsertionEffect:Qu,useLayoutEffect:Yu,useMemo:em,useReducer:Pa,useRef:Ku,useState:function(){return Pa(Zl)},useDebugValue:Ss,useDeferredValue:function(e){var n=qe();return nm(n,se.memoizedState,e)},useTransition:function(){var e=Pa(Zl)[0],n=qe().memoizedState;return[e,n]},useMutableSource:ju,useSyncExternalStore:Uu,useId:tm,unstable_isNewReconciler:!1},Dy={readContext:$e,useCallback:Zu,useContext:$e,useEffect:ws,useImperativeHandle:Xu,useInsertionEffect:Qu,useLayoutEffect:Yu,useMemo:em,useReducer:Ea,useRef:Ku,useState:function(){return Ea(Zl)},useDebugValue:Ss,useDeferredValue:function(e){var n=qe();return se===null?n.memoizedState=e:nm(n,se.memoizedState,e)},useTransition:function(){var e=Ea(Zl)[0],n=qe().memoizedState;return[e,n]},useMutableSource:ju,useSyncExternalStore:Uu,useId:tm,unstable_isNewReconciler:!1};function Ye(e,n){if(e&&e.defaultProps){n=ne({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function _o(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:ne({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Br={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var l=Ce(),i=Rn(e),r=_n(l,i);r.payload=n,t!=null&&(r.callback=t),n=On(e,r,i),n!==null&&(en(n,e,i,l),Hi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=Ce(),i=Rn(e),r=_n(l,i);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=On(e,r,i),n!==null&&(en(n,e,i,l),Hi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ce(),l=Rn(e),i=_n(t,l);i.tag=2,n!=null&&(i.callback=n),n=On(e,i,l),n!==null&&(en(n,e,l,t),Hi(n,e,l))}};function jd(e,n,t,l,i,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,a):n.prototype&&n.prototype.isPureReactComponent?!ql(t,l)||!ql(i,r):!0}function am(e,n,t){var l=!1,i=Hn,r=n.contextType;return typeof r=="object"&&r!==null?r=$e(r):(i=Ae(n)?dt:xe.current,l=n.contextTypes,r=(l=l!=null)?Yt(e,i):Hn),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Br,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),n}function Ud(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&Br.enqueueReplaceState(n,n.state,null)}function xo(e,n,t,l){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ys(e);var r=n.contextType;typeof r=="object"&&r!==null?i.context=$e(r):(r=Ae(n)?dt:xe.current,i.context=Yt(e,r)),i.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(_o(e,n,r,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Br.enqueueReplaceState(i,i.state,null),br(e,t,i,l),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function el(e,n){try{var t="",l=n;do t+=sp(l),l=l.return;while(l);var i=t}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:i,digest:null}}function Na(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function vo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function om(e,n,t){t=_n(-1,t),t.tag=3,t.payload={element:null};var l=n.value;return t.callback=function(){wr||(wr=!0,Ao=l),vo(e,n)},t}function sm(e,n,t){t=_n(-1,t),t.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){vo(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){vo(e,n),typeof l!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Wd(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new Gy;var i=new Set;l.set(n,i)}else i=l.get(n),i===void 0&&(i=new Set,l.set(n,i));i.has(t)||(i.add(t),e=Qy.bind(null,e,n,t),n.then(e,e))}function Hd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function $d(e,n,t,l,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=_n(-1,1),n.tag=2,On(t,n,1))),t.lanes|=1),e)}var My=Ln.ReactCurrentOwner,Ne=!1;function we(e,n,t,l){n.child=e===null?Fu(n,null,t,l):Xt(n,e.child,t,l)}function qd(e,n,t,l,i){t=t.render;var r=n.ref;return $t(n,i),l=xs(e,n,t,l,r,i),t=vs(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Cn(e,n,i)):(K&&t&&ss(n),n.flags|=1,we(e,n,l,i),n.child)}function zd(e,n,t,l,i){if(e===null){var r=t.type;return typeof r=="function"&&!As(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,dm(e,n,r,l,i)):(e=Yi(t.type,null,l,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&i)){var a=r.memoizedProps;if(t=t.compare,t=t!==null?t:ql,t(a,l)&&e.ref===n.ref)return Cn(e,n,i)}return n.flags|=1,e=jn(r,l),e.ref=n.ref,e.return=n,n.child=e}function dm(e,n,t,l,i){if(e!==null){var r=e.memoizedProps;if(ql(r,l)&&e.ref===n.ref)if(Ne=!1,n.pendingProps=l=r,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return n.lanes=e.lanes,Cn(e,n,i)}return wo(e,n,t,l,i)}function cm(e,n,t){var l=n.pendingProps,i=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(Mt,Te),Te|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(Mt,Te),Te|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=r!==null?r.baseLanes:t,$(Mt,Te),Te|=l}else r!==null?(l=r.baseLanes|t,n.memoizedState=null):l=t,$(Mt,Te),Te|=l;return we(e,n,i,t),n.child}function um(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function wo(e,n,t,l,i){var r=Ae(t)?dt:xe.current;return r=Yt(n,r),$t(n,i),t=xs(e,n,t,l,r,i),l=vs(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Cn(e,n,i)):(K&&l&&ss(n),n.flags|=1,we(e,n,t,i),n.child)}function Kd(e,n,t,l,i){if(Ae(t)){var r=!0;mr(n)}else r=!1;if($t(n,i),n.stateNode===null)zi(e,n),am(n,t,l),xo(n,t,l,i),l=!0;else if(e===null){var a=n.stateNode,o=n.memoizedProps;a.props=o;var s=a.context,d=t.contextType;typeof d=="object"&&d!==null?d=$e(d):(d=Ae(t)?dt:xe.current,d=Yt(n,d));var u=t.getDerivedStateFromProps,m=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==l||s!==d)&&Ud(n,a,l,d),En=!1;var f=n.memoizedState;a.state=f,br(n,l,a,i),s=n.memoizedState,o!==l||f!==s||Ie.current||En?(typeof u=="function"&&(_o(n,t,u,l),s=n.memoizedState),(o=En||jd(n,t,o,l,f,s,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=s),a.props=l,a.state=s,a.context=d,l=o):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{a=n.stateNode,Bu(e,n),o=n.memoizedProps,d=n.type===n.elementType?o:Ye(n.type,o),a.props=d,m=n.pendingProps,f=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=$e(s):(s=Ae(t)?dt:xe.current,s=Yt(n,s));var b=t.getDerivedStateFromProps;(u=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||f!==s)&&Ud(n,a,l,s),En=!1,f=n.memoizedState,a.state=f,br(n,l,a,i);var x=n.memoizedState;o!==m||f!==x||Ie.current||En?(typeof b=="function"&&(_o(n,t,b,l),x=n.memoizedState),(d=En||jd(n,t,d,l,f,x,s)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,x,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=x),a.props=l,a.state=x,a.context=s,l=d):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),l=!1)}return So(e,n,t,l,r,i)}function So(e,n,t,l,i,r){um(e,n);var a=(n.flags&128)!==0;if(!l&&!a)return i&&Td(n,t,!1),Cn(e,n,r);l=n.stateNode,My.current=n;var o=a&&typeof t.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&a?(n.child=Xt(n,e.child,null,r),n.child=Xt(n,null,o,r)):we(e,n,o,r),n.memoizedState=l.state,i&&Td(n,t,!0),n.child}function mm(e){var n=e.stateNode;n.pendingContext?Vd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vd(e,n.context,!1),gs(e,n.containerInfo)}function Qd(e,n,t,l,i){return Jt(),cs(i),n.flags|=256,we(e,n,t,l),n.child}var Co={dehydrated:null,treeContext:null,retryLane:0};function Lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function fm(e,n,t){var l=n.pendingProps,i=J.current,r=!1,a=(n.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(J,i&1),e===null)return bo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=l.children,e=l.fallback,r?(l=n.mode,r=n.child,a={mode:"hidden",children:a},!(l&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=Ur(a,l,0,null),e=st(e,l,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=Lo(t),n.memoizedState=Co,e):Cs(n,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Fy(e,n,a,l,o,i,t);if(r){r=l.fallback,a=n.mode,i=e.child,o=i.sibling;var s={mode:"hidden",children:l.children};return!(a&1)&&n.child!==i?(l=n.child,l.childLanes=0,l.pendingProps=s,n.deletions=null):(l=jn(i,s),l.subtreeFlags=i.subtreeFlags&14680064),o!==null?r=jn(o,r):(r=st(r,a,t,null),r.flags|=2),r.return=n,l.return=n,l.sibling=r,n.child=l,l=r,r=n.child,a=e.child.memoizedState,a=a===null?Lo(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=e.childLanes&~t,n.memoizedState=Co,l}return r=e.child,e=r.sibling,l=jn(r,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=t),l.return=n,l.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=l,n.memoizedState=null,l}function Cs(e,n){return n=Ur({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ei(e,n,t,l){return l!==null&&cs(l),Xt(n,e.child,null,t),e=Cs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fy(e,n,t,l,i,r,a){if(t)return n.flags&256?(n.flags&=-257,l=Na(Error(k(422))),Ei(e,n,a,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=l.fallback,i=n.mode,l=Ur({mode:"visible",children:l.children},i,0,null),r=st(r,i,a,null),r.flags|=2,l.return=n,r.return=n,l.sibling=r,n.child=l,n.mode&1&&Xt(n,e.child,null,a),n.child.memoizedState=Lo(a),n.memoizedState=Co,r);if(!(n.mode&1))return Ei(e,n,a,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var o=l.dgst;return l=o,r=Error(k(419)),l=Na(r,l,void 0),Ei(e,n,a,l)}if(o=(a&e.childLanes)!==0,Ne||o){if(l=ue,l!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|a)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,Sn(e,i),en(l,e,i,-1))}return Is(),l=Na(Error(k(421))),Ei(e,n,a,l)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Yy.bind(null,e),i._reactRetry=n,null):(e=r.treeContext,Ge=Fn(i.nextSibling),Me=n,K=!0,Xe=null,e!==null&&(Re[je++]=gn,Re[je++]=bn,Re[je++]=ct,gn=e.id,bn=e.overflow,ct=n),n=Cs(n,l.children),n.flags|=4096,n)}function Yd(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),ho(e.return,n,t)}function Ia(e,n,t,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=t,r.tailMode=i)}function pm(e,n,t){var l=n.pendingProps,i=l.revealOrder,r=l.tail;if(we(e,n,l.children,t),l=J.current,l&2)l=l&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yd(e,t,n);else if(e.tag===19)Yd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if($(J,l),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&hr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ia(n,!1,i,t,r);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&hr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ia(n,!0,t,null,r);break;case"together":Ia(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),mt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Oy(e,n,t){switch(n.tag){case 3:mm(n),Jt();break;case 5:Ru(n);break;case 1:Ae(n.type)&&mr(n);break;case 4:gs(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,i=n.memoizedProps.value;$(yr,l._currentValue),l._currentValue=i;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?($(J,J.current&1),n.flags|=128,null):t&n.child.childLanes?fm(e,n,t):($(J,J.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);$(J,J.current&1);break;case 19:if(l=(t&n.childLanes)!==0,e.flags&128){if(l)return pm(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(J,J.current),l)break;return null;case 22:case 23:return n.lanes=0,cm(e,n,t)}return Cn(e,n,t)}var ym,ko,gm,bm;ym=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ko=function(){};gm=function(e,n,t,l){var i=e.memoizedProps;if(i!==l){e=n.stateNode,lt(dn.current);var r=null;switch(t){case"input":i=za(e,i),l=za(e,l),r=[];break;case"select":i=ne({},i,{value:void 0}),l=ne({},l,{value:void 0}),r=[];break;case"textarea":i=Ya(e,i),l=Ya(e,l),r=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=cr)}Xa(t,l);var a;t=null;for(d in i)if(!l.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Bl.hasOwnProperty(d)?r||(r=[]):(r=r||[]).push(d,null));for(d in l){var s=l[d];if(o=i!=null?i[d]:void 0,l.hasOwnProperty(d)&&s!==o&&(s!=null||o!=null))if(d==="style")if(o){for(a in o)!o.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&o[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(r||(r=[]),r.push(d,t)),t=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(r=r||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(r=r||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Bl.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&q("scroll",e),r||o===s||(r=[])):(r=r||[]).push(d,s))}t&&(r=r||[]).push("style",t);var d=r;(n.updateQueue=d)&&(n.flags|=4)}};bm=function(e,n,t,l){t!==l&&(n.flags|=4)};function xl(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function be(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function By(e,n,t){var l=n.pendingProps;switch(ds(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(n),null;case 1:return Ae(n.type)&&ur(),be(n),null;case 3:return l=n.stateNode,Zt(),z(Ie),z(xe),hs(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ki(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Xe!==null&&(Do(Xe),Xe=null))),ko(e,n),be(n),null;case 5:bs(n);var i=lt(Jl.current);if(t=n.type,e!==null&&n.stateNode!=null)gm(e,n,t,l,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(k(166));return be(n),null}if(e=lt(dn.current),ki(n)){l=n.stateNode,t=n.type;var r=n.memoizedProps;switch(l[on]=n,l[Ql]=r,e=(n.mode&1)!==0,t){case"dialog":q("cancel",l),q("close",l);break;case"iframe":case"object":case"embed":q("load",l);break;case"video":case"audio":for(i=0;i<kl.length;i++)q(kl[i],l);break;case"source":q("error",l);break;case"img":case"image":case"link":q("error",l),q("load",l);break;case"details":q("toggle",l);break;case"input":rd(l,r),q("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!r.multiple},q("invalid",l);break;case"textarea":od(l,r),q("invalid",l)}Xa(t,r),i=null;for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];a==="children"?typeof o=="string"?l.textContent!==o&&(r.suppressHydrationWarning!==!0&&Li(l.textContent,o,e),i=["children",o]):typeof o=="number"&&l.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&Li(l.textContent,o,e),i=["children",""+o]):Bl.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&q("scroll",l)}switch(t){case"input":bi(l),ad(l,r,!0);break;case"textarea":bi(l),sd(l);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(l.onclick=cr)}l=i,n.updateQueue=l,l!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$c(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=a.createElement(t,{is:l.is}):(e=a.createElement(t),t==="select"&&(a=e,l.multiple?a.multiple=!0:l.size&&(a.size=l.size))):e=a.createElementNS(e,t),e[on]=n,e[Ql]=l,ym(e,n,!1,!1),n.stateNode=e;e:{switch(a=Za(t,l),t){case"dialog":q("cancel",e),q("close",e),i=l;break;case"iframe":case"object":case"embed":q("load",e),i=l;break;case"video":case"audio":for(i=0;i<kl.length;i++)q(kl[i],e);i=l;break;case"source":q("error",e),i=l;break;case"img":case"image":case"link":q("error",e),q("load",e),i=l;break;case"details":q("toggle",e),i=l;break;case"input":rd(e,l),i=za(e,l),q("invalid",e);break;case"option":i=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},i=ne({},l,{value:void 0}),q("invalid",e);break;case"textarea":od(e,l),i=Ya(e,l),q("invalid",e);break;default:i=l}Xa(t,i),o=i;for(r in o)if(o.hasOwnProperty(r)){var s=o[r];r==="style"?Kc(e,s):r==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&qc(e,s)):r==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Rl(e,s):typeof s=="number"&&Rl(e,""+s):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Bl.hasOwnProperty(r)?s!=null&&r==="onScroll"&&q("scroll",e):s!=null&&Ko(e,r,s,a))}switch(t){case"input":bi(e),ad(e,l,!1);break;case"textarea":bi(e),sd(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Wn(l.value));break;case"select":e.multiple=!!l.multiple,r=l.value,r!=null?jt(e,!!l.multiple,r,!1):l.defaultValue!=null&&jt(e,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=cr)}switch(t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return be(n),null;case 6:if(e&&n.stateNode!=null)bm(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(k(166));if(t=lt(Jl.current),lt(dn.current),ki(n)){if(l=n.stateNode,t=n.memoizedProps,l[on]=n,(r=l.nodeValue!==t)&&(e=Me,e!==null))switch(e.tag){case 3:Li(l.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Li(l.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else l=(t.nodeType===9?t:t.ownerDocument).createTextNode(l),l[on]=n,n.stateNode=l}return be(n),null;case 13:if(z(J),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ge!==null&&n.mode&1&&!(n.flags&128))Gu(),Jt(),n.flags|=98560,r=!1;else if(r=ki(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(k(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(k(317));r[on]=n}else Jt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;be(n),r=!1}else Xe!==null&&(Do(Xe),Xe=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(e===null||J.current&1?de===0&&(de=3):Is())),n.updateQueue!==null&&(n.flags|=4),be(n),null);case 4:return Zt(),ko(e,n),e===null&&zl(n.stateNode.containerInfo),be(n),null;case 10:return fs(n.type._context),be(n),null;case 17:return Ae(n.type)&&ur(),be(n),null;case 19:if(z(J),r=n.memoizedState,r===null)return be(n),null;if(l=(n.flags&128)!==0,a=r.rendering,a===null)if(l)xl(r,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=hr(e),a!==null){for(n.flags|=128,xl(r,!1),l=a.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=t,t=n.child;t!==null;)r=t,e=l,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,e=a.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return $(J,J.current&1|2),n.child}e=e.sibling}r.tail!==null&&re()>nl&&(n.flags|=128,l=!0,xl(r,!1),n.lanes=4194304)}else{if(!l)if(e=hr(a),e!==null){if(n.flags|=128,l=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),xl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!K)return be(n),null}else 2*re()-r.renderingStartTime>nl&&t!==1073741824&&(n.flags|=128,l=!0,xl(r,!1),n.lanes=4194304);r.isBackwards?(a.sibling=n.child,n.child=a):(t=r.last,t!==null?t.sibling=a:n.child=a,r.last=a)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=re(),n.sibling=null,t=J.current,$(J,l?t&1|2:t&1),n):(be(n),null);case 22:case 23:return Ns(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?Te&1073741824&&(be(n),n.subtreeFlags&6&&(n.flags|=8192)):be(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Ry(e,n){switch(ds(n),n.tag){case 1:return Ae(n.type)&&ur(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zt(),z(Ie),z(xe),hs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return bs(n),null;case 13:if(z(J),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(J),null;case 4:return Zt(),null;case 10:return fs(n.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var Ni=!1,he=!1,jy=typeof WeakSet=="function"?WeakSet:Set,I=null;function Gt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(l){le(e,n,l)}else t.current=null}function Po(e,n,t){try{t()}catch(l){le(e,n,l)}}var Jd=!1;function Uy(e,n){if(co=or,e=wu(),os(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var a=0,o=-1,s=-1,d=0,u=0,m=e,f=null;n:for(;;){for(var b;m!==t||i!==0&&m.nodeType!==3||(o=a+i),m!==r||l!==0&&m.nodeType!==3||(s=a+l),m.nodeType===3&&(a+=m.nodeValue.length),(b=m.firstChild)!==null;)f=m,m=b;for(;;){if(m===e)break n;if(f===t&&++d===i&&(o=a),f===r&&++u===l&&(s=a),(b=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=b}t=o===-1||s===-1?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(uo={focusedElem:e,selectionRange:t},or=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,_=x.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?y:Ye(n.type,y),_);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){le(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return x=Jd,Jd=!1,x}function Gl(e,n,t){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&Po(n,t,r)}i=i.next}while(i!==l)}}function Rr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var l=t.create;t.destroy=l()}t=t.next}while(t!==n)}}function Eo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function hm(e){var n=e.alternate;n!==null&&(e.alternate=null,hm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[on],delete n[Ql],delete n[po],delete n[Cy],delete n[Ly])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _m(e){return e.tag===5||e.tag===3||e.tag===4}function Xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function No(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=cr));else if(l!==4&&(e=e.child,e!==null))for(No(e,n,t),e=e.sibling;e!==null;)No(e,n,t),e=e.sibling}function Io(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Io(e,n,t),e=e.sibling;e!==null;)Io(e,n,t),e=e.sibling}var fe=null,Je=!1;function kn(e,n,t){for(t=t.child;t!==null;)xm(e,n,t),t=t.sibling}function xm(e,n,t){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Vr,t)}catch{}switch(t.tag){case 5:he||Gt(t,n);case 6:var l=fe,i=Je;fe=null,kn(e,n,t),fe=l,Je=i,fe!==null&&(Je?(e=fe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):fe.removeChild(t.stateNode));break;case 18:fe!==null&&(Je?(e=fe,t=t.stateNode,e.nodeType===8?Sa(e.parentNode,t):e.nodeType===1&&Sa(e,t),Hl(e)):Sa(fe,t.stateNode));break;case 4:l=fe,i=Je,fe=t.stateNode.containerInfo,Je=!0,kn(e,n,t),fe=l,Je=i;break;case 0:case 11:case 14:case 15:if(!he&&(l=t.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var r=i,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&Po(t,n,a),i=i.next}while(i!==l)}kn(e,n,t);break;case 1:if(!he&&(Gt(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=t.memoizedProps,l.state=t.memoizedState,l.componentWillUnmount()}catch(o){le(t,n,o)}kn(e,n,t);break;case 21:kn(e,n,t);break;case 22:t.mode&1?(he=(l=he)||t.memoizedState!==null,kn(e,n,t),he=l):kn(e,n,t);break;default:kn(e,n,t)}}function Zd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new jy),n.forEach(function(l){var i=Jy.bind(null,e,l);t.has(l)||(t.add(l),l.then(i,i))})}}function Ke(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];try{var r=e,a=n,o=a;e:for(;o!==null;){switch(o.tag){case 5:fe=o.stateNode,Je=!1;break e;case 3:fe=o.stateNode.containerInfo,Je=!0;break e;case 4:fe=o.stateNode.containerInfo,Je=!0;break e}o=o.return}if(fe===null)throw Error(k(160));xm(r,a,i),fe=null,Je=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){le(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vm(n,e),n=n.sibling}function vm(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(n,e),rn(e),l&4){try{Gl(3,e,e.return),Rr(3,e)}catch(y){le(e,e.return,y)}try{Gl(5,e,e.return)}catch(y){le(e,e.return,y)}}break;case 1:Ke(n,e),rn(e),l&512&&t!==null&&Gt(t,t.return);break;case 5:if(Ke(n,e),rn(e),l&512&&t!==null&&Gt(t,t.return),e.flags&32){var i=e.stateNode;try{Rl(i,"")}catch(y){le(e,e.return,y)}}if(l&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,a=t!==null?t.memoizedProps:r,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&Wc(i,r),Za(o,a);var d=Za(o,r);for(a=0;a<s.length;a+=2){var u=s[a],m=s[a+1];u==="style"?Kc(i,m):u==="dangerouslySetInnerHTML"?qc(i,m):u==="children"?Rl(i,m):Ko(i,u,m,d)}switch(o){case"input":Ka(i,r);break;case"textarea":Hc(i,r);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var b=r.value;b!=null?jt(i,!!r.multiple,b,!1):f!==!!r.multiple&&(r.defaultValue!=null?jt(i,!!r.multiple,r.defaultValue,!0):jt(i,!!r.multiple,r.multiple?[]:"",!1))}i[Ql]=r}catch(y){le(e,e.return,y)}}break;case 6:if(Ke(n,e),rn(e),l&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(y){le(e,e.return,y)}}break;case 3:if(Ke(n,e),rn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Hl(n.containerInfo)}catch(y){le(e,e.return,y)}break;case 4:Ke(n,e),rn(e);break;case 13:Ke(n,e),rn(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(Ps=re())),l&4&&Zd(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(he=(d=he)||u,Ke(n,e),he=d):Ke(n,e),rn(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(I=e,u=e.child;u!==null;){for(m=I=u;I!==null;){switch(f=I,b=f.child,f.tag){case 0:case 11:case 14:case 15:Gl(4,f,f.return);break;case 1:Gt(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){l=f,t=f.return;try{n=l,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(y){le(l,t,y)}}break;case 5:Gt(f,f.return);break;case 22:if(f.memoizedState!==null){nc(m);continue}}b!==null?(b.return=f,I=b):nc(m)}u=u.sibling}e:for(u=null,m=e;;){if(m.tag===5){if(u===null){u=m;try{i=m.stateNode,d?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=zc("display",a))}catch(y){le(e,e.return,y)}}}else if(m.tag===6){if(u===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(y){le(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;u===m&&(u=null),m=m.return}u===m&&(u=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ke(n,e),rn(e),l&4&&Zd(e);break;case 21:break;default:Ke(n,e),rn(e)}}function rn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(_m(t)){var l=t;break e}t=t.return}throw Error(k(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(Rl(i,""),l.flags&=-33);var r=Xd(e);Io(e,r,i);break;case 3:case 4:var a=l.stateNode.containerInfo,o=Xd(e);No(e,o,a);break;default:throw Error(k(161))}}catch(s){le(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Wy(e,n,t){I=e,wm(e)}function wm(e,n,t){for(var l=(e.mode&1)!==0;I!==null;){var i=I,r=i.child;if(i.tag===22&&l){var a=i.memoizedState!==null||Ni;if(!a){var o=i.alternate,s=o!==null&&o.memoizedState!==null||he;o=Ni;var d=he;if(Ni=a,(he=s)&&!d)for(I=i;I!==null;)a=I,s=a.child,a.tag===22&&a.memoizedState!==null?tc(i):s!==null?(s.return=a,I=s):tc(i);for(;r!==null;)I=r,wm(r),r=r.sibling;I=i,Ni=o,he=d}ec(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,I=r):ec(e)}}function ec(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:he||Rr(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!he)if(t===null)l.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ye(n.type,t.memoizedProps);l.componentDidUpdate(i,t.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&Od(n,r,l);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Od(n,a,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var m=u.dehydrated;m!==null&&Hl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}he||n.flags&512&&Eo(n)}catch(f){le(n,n.return,f)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function nc(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function tc(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Rr(4,n)}catch(s){le(n,t,s)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var i=n.return;try{l.componentDidMount()}catch(s){le(n,i,s)}}var r=n.return;try{Eo(n)}catch(s){le(n,r,s)}break;case 5:var a=n.return;try{Eo(n)}catch(s){le(n,a,s)}}}catch(s){le(n,n.return,s)}if(n===e){I=null;break}var o=n.sibling;if(o!==null){o.return=n.return,I=o;break}I=n.return}}var Hy=Math.ceil,vr=Ln.ReactCurrentDispatcher,Ls=Ln.ReactCurrentOwner,We=Ln.ReactCurrentBatchConfig,B=0,ue=null,oe=null,pe=0,Te=0,Mt=zn(0),de=0,ni=null,mt=0,jr=0,ks=0,Ml=null,Pe=null,Ps=0,nl=1/0,pn=null,wr=!1,Ao=null,Bn=null,Ii=!1,Tn=null,Sr=0,Fl=0,Vo=null,Ki=-1,Qi=0;function Ce(){return B&6?re():Ki!==-1?Ki:Ki=re()}function Rn(e){return e.mode&1?B&2&&pe!==0?pe&-pe:Py.transition!==null?(Qi===0&&(Qi=au()),Qi):(e=W,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function en(e,n,t,l){if(50<Fl)throw Fl=0,Vo=null,Error(k(185));oi(e,t,l),(!(B&2)||e!==ue)&&(e===ue&&(!(B&2)&&(jr|=t),de===4&&An(e,pe)),Ve(e,l),t===1&&B===0&&!(n.mode&1)&&(nl=re()+500,Fr&&Kn()))}function Ve(e,n){var t=e.callbackNode;Pp(e,n);var l=ar(e,e===ue?pe:0);if(l===0)t!==null&&ud(t),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(t!=null&&ud(t),n===1)e.tag===0?ky(lc.bind(null,e)):Vu(lc.bind(null,e)),wy(function(){!(B&6)&&Kn()}),t=null;else{switch(ou(l)){case 1:t=Zo;break;case 4:t=iu;break;case 16:t=rr;break;case 536870912:t=ru;break;default:t=rr}t=Im(t,Sm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Sm(e,n){if(Ki=-1,Qi=0,B&6)throw Error(k(327));var t=e.callbackNode;if(qt()&&e.callbackNode!==t)return null;var l=ar(e,e===ue?pe:0);if(l===0)return null;if(l&30||l&e.expiredLanes||n)n=Cr(e,l);else{n=l;var i=B;B|=2;var r=Lm();(ue!==e||pe!==n)&&(pn=null,nl=re()+500,ot(e,n));do try{zy();break}catch(o){Cm(e,o)}while(!0);ms(),vr.current=r,B=i,oe!==null?n=0:(ue=null,pe=0,n=de)}if(n!==0){if(n===2&&(i=io(e),i!==0&&(l=i,n=To(e,i))),n===1)throw t=ni,ot(e,0),An(e,l),Ve(e,re()),t;if(n===6)An(e,l);else{if(i=e.current.alternate,!(l&30)&&!$y(i)&&(n=Cr(e,l),n===2&&(r=io(e),r!==0&&(l=r,n=To(e,r))),n===1))throw t=ni,ot(e,0),An(e,l),Ve(e,re()),t;switch(e.finishedWork=i,e.finishedLanes=l,n){case 0:case 1:throw Error(k(345));case 2:Zn(e,Pe,pn);break;case 3:if(An(e,l),(l&130023424)===l&&(n=Ps+500-re(),10<n)){if(ar(e,0)!==0)break;if(i=e.suspendedLanes,(i&l)!==l){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fo(Zn.bind(null,e,Pe,pn),n);break}Zn(e,Pe,pn);break;case 4:if(An(e,l),(l&4194240)===l)break;for(n=e.eventTimes,i=-1;0<l;){var a=31-Ze(l);r=1<<a,a=n[a],a>i&&(i=a),l&=~r}if(l=i,l=re()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Hy(l/1960))-l,10<l){e.timeoutHandle=fo(Zn.bind(null,e,Pe,pn),l);break}Zn(e,Pe,pn);break;case 5:Zn(e,Pe,pn);break;default:throw Error(k(329))}}}return Ve(e,re()),e.callbackNode===t?Sm.bind(null,e):null}function To(e,n){var t=Ml;return e.current.memoizedState.isDehydrated&&(ot(e,n).flags|=256),e=Cr(e,n),e!==2&&(n=Pe,Pe=t,n!==null&&Do(n)),e}function Do(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function $y(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var l=0;l<t.length;l++){var i=t[l],r=i.getSnapshot;i=i.value;try{if(!nn(r(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function An(e,n){for(n&=~ks,n&=~jr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ze(n),l=1<<t;e[t]=-1,n&=~l}}function lc(e){if(B&6)throw Error(k(327));qt();var n=ar(e,0);if(!(n&1))return Ve(e,re()),null;var t=Cr(e,n);if(e.tag!==0&&t===2){var l=io(e);l!==0&&(n=l,t=To(e,l))}if(t===1)throw t=ni,ot(e,0),An(e,n),Ve(e,re()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Zn(e,Pe,pn),Ve(e,re()),null}function Es(e,n){var t=B;B|=1;try{return e(n)}finally{B=t,B===0&&(nl=re()+500,Fr&&Kn())}}function ft(e){Tn!==null&&Tn.tag===0&&!(B&6)&&qt();var n=B;B|=1;var t=We.transition,l=W;try{if(We.transition=null,W=1,e)return e()}finally{W=l,We.transition=t,B=n,!(B&6)&&Kn()}}function Ns(){Te=Mt.current,z(Mt)}function ot(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,vy(t)),oe!==null)for(t=oe.return;t!==null;){var l=t;switch(ds(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ur();break;case 3:Zt(),z(Ie),z(xe),hs();break;case 5:bs(l);break;case 4:Zt();break;case 13:z(J);break;case 19:z(J);break;case 10:fs(l.type._context);break;case 22:case 23:Ns()}t=t.return}if(ue=e,oe=e=jn(e.current,null),pe=Te=n,de=0,ni=null,ks=jr=mt=0,Pe=Ml=null,tt!==null){for(n=0;n<tt.length;n++)if(t=tt[n],l=t.interleaved,l!==null){t.interleaved=null;var i=l.next,r=t.pending;if(r!==null){var a=r.next;r.next=i,l.next=a}t.pending=l}tt=null}return e}function Cm(e,n){do{var t=oe;try{if(ms(),$i.current=xr,_r){for(var l=Z.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}_r=!1}if(ut=0,ce=se=Z=null,Dl=!1,Xl=0,Ls.current=null,t===null||t.return===null){de=1,ni=n,oe=null;break}e:{var r=e,a=t.return,o=t,s=n;if(n=pe,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,u=o,m=u.tag;if(!(u.mode&1)&&(m===0||m===11||m===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=Hd(a);if(b!==null){b.flags&=-257,$d(b,a,o,r,n),b.mode&1&&Wd(r,d,n),n=b,s=d;var x=n.updateQueue;if(x===null){var y=new Set;y.add(s),n.updateQueue=y}else x.add(s);break e}else{if(!(n&1)){Wd(r,d,n),Is();break e}s=Error(k(426))}}else if(K&&o.mode&1){var _=Hd(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),$d(_,a,o,r,n),cs(el(s,o));break e}}r=s=el(s,o),de!==4&&(de=2),Ml===null?Ml=[r]:Ml.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var g=om(r,s,n);Fd(r,g);break e;case 1:o=s;var p=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Bn===null||!Bn.has(h)))){r.flags|=65536,n&=-n,r.lanes|=n;var v=sm(r,o,n);Fd(r,v);break e}}r=r.return}while(r!==null)}Pm(t)}catch(C){n=C,oe===t&&t!==null&&(oe=t=t.return);continue}break}while(!0)}function Lm(){var e=vr.current;return vr.current=xr,e===null?xr:e}function Is(){(de===0||de===3||de===2)&&(de=4),ue===null||!(mt&268435455)&&!(jr&268435455)||An(ue,pe)}function Cr(e,n){var t=B;B|=2;var l=Lm();(ue!==e||pe!==n)&&(pn=null,ot(e,n));do try{qy();break}catch(i){Cm(e,i)}while(!0);if(ms(),B=t,vr.current=l,oe!==null)throw Error(k(261));return ue=null,pe=0,de}function qy(){for(;oe!==null;)km(oe)}function zy(){for(;oe!==null&&!hp();)km(oe)}function km(e){var n=Nm(e.alternate,e,Te);e.memoizedProps=e.pendingProps,n===null?Pm(e):oe=n,Ls.current=null}function Pm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ry(t,n),t!==null){t.flags&=32767,oe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,oe=null;return}}else if(t=By(t,n,Te),t!==null){oe=t;return}if(n=n.sibling,n!==null){oe=n;return}oe=n=e}while(n!==null);de===0&&(de=5)}function Zn(e,n,t){var l=W,i=We.transition;try{We.transition=null,W=1,Ky(e,n,t,l)}finally{We.transition=i,W=l}return null}function Ky(e,n,t,l){do qt();while(Tn!==null);if(B&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(Ep(e,r),e===ue&&(oe=ue=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ii||(Ii=!0,Im(rr,function(){return qt(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=We.transition,We.transition=null;var a=W;W=1;var o=B;B|=4,Ls.current=null,Uy(e,t),vm(t,e),py(uo),or=!!co,uo=co=null,e.current=t,Wy(t),_p(),B=o,W=a,We.transition=r}else e.current=t;if(Ii&&(Ii=!1,Tn=e,Sr=i),r=e.pendingLanes,r===0&&(Bn=null),wp(t.stateNode),Ve(e,re()),n!==null)for(l=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],l(i.value,{componentStack:i.stack,digest:i.digest});if(wr)throw wr=!1,e=Ao,Ao=null,e;return Sr&1&&e.tag!==0&&qt(),r=e.pendingLanes,r&1?e===Vo?Fl++:(Fl=0,Vo=e):Fl=0,Kn(),null}function qt(){if(Tn!==null){var e=ou(Sr),n=We.transition,t=W;try{if(We.transition=null,W=16>e?16:e,Tn===null)var l=!1;else{if(e=Tn,Tn=null,Sr=0,B&6)throw Error(k(331));var i=B;for(B|=4,I=e.current;I!==null;){var r=I,a=r.child;if(I.flags&16){var o=r.deletions;if(o!==null){for(var s=0;s<o.length;s++){var d=o[s];for(I=d;I!==null;){var u=I;switch(u.tag){case 0:case 11:case 15:Gl(8,u,r)}var m=u.child;if(m!==null)m.return=u,I=m;else for(;I!==null;){u=I;var f=u.sibling,b=u.return;if(hm(u),u===d){I=null;break}if(f!==null){f.return=b,I=f;break}I=b}}}var x=r.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}I=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,I=a;else e:for(;I!==null;){if(r=I,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Gl(9,r,r.return)}var g=r.sibling;if(g!==null){g.return=r.return,I=g;break e}I=r.return}}var p=e.current;for(I=p;I!==null;){a=I;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,I=h;else e:for(a=p;I!==null;){if(o=I,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Rr(9,o)}}catch(C){le(o,o.return,C)}if(o===a){I=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,I=v;break e}I=o.return}}if(B=i,Kn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Vr,e)}catch{}l=!0}return l}finally{W=t,We.transition=n}}return!1}function ic(e,n,t){n=el(t,n),n=om(e,n,1),e=On(e,n,1),n=Ce(),e!==null&&(oi(e,1,n),Ve(e,n))}function le(e,n,t){if(e.tag===3)ic(e,e,t);else for(;n!==null;){if(n.tag===3){ic(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Bn===null||!Bn.has(l))){e=el(t,e),e=sm(n,e,1),n=On(n,e,1),e=Ce(),n!==null&&(oi(n,1,e),Ve(n,e));break}}n=n.return}}function Qy(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),n=Ce(),e.pingedLanes|=e.suspendedLanes&t,ue===e&&(pe&t)===t&&(de===4||de===3&&(pe&130023424)===pe&&500>re()-Ps?ot(e,0):ks|=t),Ve(e,n)}function Em(e,n){n===0&&(e.mode&1?(n=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):n=1);var t=Ce();e=Sn(e,n),e!==null&&(oi(e,n,t),Ve(e,t))}function Yy(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Em(e,t)}function Jy(e,n){var t=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(k(314))}l!==null&&l.delete(n),Em(e,t)}var Nm;Nm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ie.current)Ne=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ne=!1,Oy(e,n,t);Ne=!!(e.flags&131072)}else Ne=!1,K&&n.flags&1048576&&Tu(n,pr,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;zi(e,n),e=n.pendingProps;var i=Yt(n,xe.current);$t(n,t),i=xs(null,n,l,e,i,t);var r=vs();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(l)?(r=!0,mr(n)):r=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ys(n),i.updater=Br,n.stateNode=i,i._reactInternals=n,xo(n,l,e,t),n=So(null,n,l,!0,r,t)):(n.tag=0,K&&r&&ss(n),we(null,n,i,t),n=n.child),n;case 16:l=n.elementType;e:{switch(zi(e,n),e=n.pendingProps,i=l._init,l=i(l._payload),n.type=l,i=n.tag=Zy(l),e=Ye(l,e),i){case 0:n=wo(null,n,l,e,t);break e;case 1:n=Kd(null,n,l,e,t);break e;case 11:n=qd(null,n,l,e,t);break e;case 14:n=zd(null,n,l,Ye(l.type,e),t);break e}throw Error(k(306,l,""))}return n;case 0:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:Ye(l,i),wo(e,n,l,i,t);case 1:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:Ye(l,i),Kd(e,n,l,i,t);case 3:e:{if(mm(n),e===null)throw Error(k(387));l=n.pendingProps,r=n.memoizedState,i=r.element,Bu(e,n),br(n,l,null,t);var a=n.memoizedState;if(l=a.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){i=el(Error(k(423)),n),n=Qd(e,n,l,t,i);break e}else if(l!==i){i=el(Error(k(424)),n),n=Qd(e,n,l,t,i);break e}else for(Ge=Fn(n.stateNode.containerInfo.firstChild),Me=n,K=!0,Xe=null,t=Fu(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Jt(),l===i){n=Cn(e,n,t);break e}we(e,n,l,t)}n=n.child}return n;case 5:return Ru(n),e===null&&bo(n),l=n.type,i=n.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,mo(l,i)?a=null:r!==null&&mo(l,r)&&(n.flags|=32),um(e,n),we(e,n,a,t),n.child;case 6:return e===null&&bo(n),null;case 13:return fm(e,n,t);case 4:return gs(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Xt(n,null,l,t):we(e,n,l,t),n.child;case 11:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:Ye(l,i),qd(e,n,l,i,t);case 7:return we(e,n,n.pendingProps,t),n.child;case 8:return we(e,n,n.pendingProps.children,t),n.child;case 12:return we(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(l=n.type._context,i=n.pendingProps,r=n.memoizedProps,a=i.value,$(yr,l._currentValue),l._currentValue=a,r!==null)if(nn(r.value,a)){if(r.children===i.children&&!Ie.current){n=Cn(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var o=r.dependencies;if(o!==null){a=r.child;for(var s=o.firstContext;s!==null;){if(s.context===l){if(r.tag===1){s=_n(-1,t&-t),s.tag=2;var d=r.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?s.next=s:(s.next=u.next,u.next=s),d.pending=s}}r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),ho(r.return,t,n),o.lanes|=t;break}s=s.next}}else if(r.tag===10)a=r.type===n.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(k(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),ho(a,t,n),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===n){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}we(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,l=n.pendingProps.children,$t(n,t),i=$e(i),l=l(i),n.flags|=1,we(e,n,l,t),n.child;case 14:return l=n.type,i=Ye(l,n.pendingProps),i=Ye(l.type,i),zd(e,n,l,i,t);case 15:return dm(e,n,n.type,n.pendingProps,t);case 17:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:Ye(l,i),zi(e,n),n.tag=1,Ae(l)?(e=!0,mr(n)):e=!1,$t(n,t),am(n,l,i),xo(n,l,i,t),So(null,n,l,!0,e,t);case 19:return pm(e,n,t);case 22:return cm(e,n,t)}throw Error(k(156,n.tag))};function Im(e,n){return lu(e,n)}function Xy(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,n,t,l){return new Xy(e,n,t,l)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zy(e){if(typeof e=="function")return As(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yo)return 11;if(e===Jo)return 14}return 2}function jn(e,n){var t=e.alternate;return t===null?(t=Ue(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Yi(e,n,t,l,i,r){var a=2;if(l=e,typeof e=="function")As(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case kt:return st(t.children,i,r,n);case Qo:a=8,i|=8;break;case Wa:return e=Ue(12,t,n,i|2),e.elementType=Wa,e.lanes=r,e;case Ha:return e=Ue(13,t,n,i),e.elementType=Ha,e.lanes=r,e;case $a:return e=Ue(19,t,n,i),e.elementType=$a,e.lanes=r,e;case Rc:return Ur(t,i,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oc:a=10;break e;case Bc:a=9;break e;case Yo:a=11;break e;case Jo:a=14;break e;case Pn:a=16,l=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Ue(a,t,n,i),n.elementType=e,n.type=l,n.lanes=r,n}function st(e,n,t,l){return e=Ue(7,e,l,n),e.lanes=t,e}function Ur(e,n,t,l){return e=Ue(22,e,l,n),e.elementType=Rc,e.lanes=t,e.stateNode={isHidden:!1},e}function Aa(e,n,t){return e=Ue(6,e,null,n),e.lanes=t,e}function Va(e,n,t){return n=Ue(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function eg(e,n,t,l,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vs(e,n,t,l,i,r,a,o,s){return e=new eg(e,n,t,o,s),n===1?(n=1,r===!0&&(n|=8)):n=0,r=Ue(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:l,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ys(r),e}function ng(e,n,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:l==null?null:""+l,children:e,containerInfo:n,implementation:t}}function Am(e){if(!e)return Hn;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Ae(t))return Au(e,t,n)}return n}function Vm(e,n,t,l,i,r,a,o,s){return e=Vs(t,l,!0,e,i,r,a,o,s),e.context=Am(null),t=e.current,l=Ce(),i=Rn(t),r=_n(l,i),r.callback=n??null,On(t,r,i),e.current.lanes=i,oi(e,i,l),Ve(e,l),e}function Wr(e,n,t,l){var i=n.current,r=Ce(),a=Rn(i);return t=Am(t),n.context===null?n.context=t:n.pendingContext=t,n=_n(r,a),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=On(i,n,a),e!==null&&(en(e,i,a,r),Hi(e,i,a)),a}function Lr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ts(e,n){rc(e,n),(e=e.alternate)&&rc(e,n)}function tg(){return null}var Tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ds(e){this._internalRoot=e}Hr.prototype.render=Ds.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Wr(e,n,null,null)};Hr.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ft(function(){Wr(null,e,null,null)}),n[wn]=null}};function Hr(e){this._internalRoot=e}Hr.prototype.unstable_scheduleHydration=function(e){if(e){var n=cu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<In.length&&n!==0&&n<In[t].priority;t++);In.splice(t,0,e),t===0&&mu(e)}};function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ac(){}function lg(e,n,t,l,i){if(i){if(typeof l=="function"){var r=l;l=function(){var d=Lr(a);r.call(d)}}var a=Vm(n,l,e,0,null,!1,!1,"",ac);return e._reactRootContainer=a,e[wn]=a.current,zl(e.nodeType===8?e.parentNode:e),ft(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof l=="function"){var o=l;l=function(){var d=Lr(s);o.call(d)}}var s=Vs(e,0,!1,null,null,!1,!1,"",ac);return e._reactRootContainer=s,e[wn]=s.current,zl(e.nodeType===8?e.parentNode:e),ft(function(){Wr(n,s,t,l)}),s}function qr(e,n,t,l,i){var r=t._reactRootContainer;if(r){var a=r;if(typeof i=="function"){var o=i;i=function(){var s=Lr(a);o.call(s)}}Wr(n,a,e,i)}else a=lg(t,n,e,i,l);return Lr(a)}su=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ll(n.pendingLanes);t!==0&&(es(n,t|1),Ve(n,re()),!(B&6)&&(nl=re()+500,Kn()))}break;case 13:ft(function(){var l=Sn(e,1);if(l!==null){var i=Ce();en(l,e,1,i)}}),Ts(e,1)}};ns=function(e){if(e.tag===13){var n=Sn(e,134217728);if(n!==null){var t=Ce();en(n,e,134217728,t)}Ts(e,134217728)}};du=function(e){if(e.tag===13){var n=Rn(e),t=Sn(e,n);if(t!==null){var l=Ce();en(t,e,n,l)}Ts(e,n)}};cu=function(){return W};uu=function(e,n){var t=W;try{return W=e,n()}finally{W=t}};no=function(e,n,t){switch(n){case"input":if(Ka(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var i=Mr(l);if(!i)throw Error(k(90));Uc(l),Ka(l,i)}}}break;case"textarea":Hc(e,t);break;case"select":n=t.value,n!=null&&jt(e,!!t.multiple,n,!1)}};Jc=Es;Xc=ft;var ig={usingClientEntryPoint:!1,Events:[di,It,Mr,Qc,Yc,Es]},vl={findFiberByHostInstance:nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rg={bundleType:vl.bundleType,version:vl.version,rendererPackageName:vl.rendererPackageName,rendererConfig:vl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nu(e),e===null?null:e.stateNode},findFiberByHostInstance:vl.findFiberByHostInstance||tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Vr=Ai.inject(rg),sn=Ai}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ig;Oe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gs(n))throw Error(k(200));return ng(e,n,null,t)};Oe.createRoot=function(e,n){if(!Gs(e))throw Error(k(299));var t=!1,l="",i=Tm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Vs(e,1,!1,null,null,t,!1,l,i),e[wn]=n.current,zl(e.nodeType===8?e.parentNode:e),new Ds(n)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=nu(n),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return ft(e)};Oe.hydrate=function(e,n,t){if(!$r(n))throw Error(k(200));return qr(null,e,n,!0,t)};Oe.hydrateRoot=function(e,n,t){if(!Gs(e))throw Error(k(405));var l=t!=null&&t.hydratedSources||null,i=!1,r="",a=Tm;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Vm(n,null,e,1,t??null,i,!1,r,a),e[wn]=n.current,zl(e),l)for(e=0;e<l.length;e++)t=l[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Hr(n)};Oe.render=function(e,n,t){if(!$r(n))throw Error(k(200));return qr(null,e,n,!1,t)};Oe.unmountComponentAtNode=function(e){if(!$r(e))throw Error(k(40));return e._reactRootContainer?(ft(function(){qr(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};Oe.unstable_batchedUpdates=Es;Oe.unstable_renderSubtreeIntoContainer=function(e,n,t,l){if(!$r(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return qr(e,n,t,!1,l)};Oe.version="18.3.1-next-f1338f8080-20240426";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(e){console.error(e)}}Dm(),Dc.exports=Oe;var ag=Dc.exports,oc=ag;ja.createRoot=oc.createRoot,ja.hydrateRoot=oc.hydrateRoot;const og=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"System Time",help:"Date and time the inverter will use to run schedules",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Year",arg:"Year",dtype:"Number",description:"",longdescription:"",range:{min:0,max:99},telemetry:{model:"40104",block:"fixed",point:"Year"}},{name:"Mon",arg:"Mon",dtype:"Number",description:"",longdescription:"",range:{min:1,max:12},telemetry:{model:"40104",block:"fixed",point:"Month"}},{name:"Day",arg:"Day",dtype:"Number",description:"",longdescription:"",range:{min:1,max:31},telemetry:{model:"40104",block:"fixed",point:"Day"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"Hour"}},{name:"Min",arg:"Min",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Minute"}},{name:"Sec",arg:"Sec",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Second"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"SystemTime"}},command_id:"Basic.SystemTime",widget:"datetime"},{title:"Grid Interaction",help:"Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Off-grid",1:"Grid-tied"},friendly_meanings:{0:"Off-Grid.  There is no available power grid",1:"Grid-Tied. Grid power is available."},telemetry:{model:"40104",block:"fixed",point:"OperatingMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"OperatingMode"}},command_id:"Basic.OperatingMode"},{title:"Operating Mode",help:"Select how solar power is prioritized. Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed). Export first: PV powers the home, then exports to grid, and charges the battery last. Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed). If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Self used mode",1:"Feed-in priority mode",2:"Back-up mode"},friendly_meanings:{0:"Self-consumption",1:"Export first",2:"Backup power"},telemetry:{model:"40104",block:"fixed",point:"WorkMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"WorkMode"}},command_id:"Basic.WorkMode"},{title:"Ignore Grid-Loss Warning",help:"When enabled, the inverter will not treat the absence of grid power as an alarm. Use this mode for permanently off-grid systems where grid connection is unavailable.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid-Loss Behavior",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Treat as Alarm",1:"Ignore (Off-Grid Mode)"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"GridLossWarningClear"}},command_id:"Basic.GridLossWarningClear"},{title:"Power Status",help:"Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"Other"},friendly_meanings:{0:"Standby",1:"Running"},telemetry:{model:"40104",block:"fixed",point:"PowerControl"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerStatus"}},command_id:"Basic.PowerStatus"},{title:"Reset to Factory Defaults",help:"Restores all inverter configuration parameters to their original factory values. Use with caution â€” this cannot be undone.",element_type:"service",access:"INVOKE",readOnly:!1,entries:[],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"AllToDefault"}},command_id:"Basic.AllToDefault",invokeButtonText:"Reset Now"},{title:"Inverter Power Control",help:`Turns the inverter output on or off.\r
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
Volt: Uses DC voltage limits instead.`,element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"ChargeCtrlType",dtype:"enum",description:"",longdescription:"",meanings:{0:"SOC",1:"Volt"},friendly_meanings:{0:"SOC",1:"Volt"},telemetry:{model:"40104",block:"fixed",point:"ChaDisChaCtrlType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChaDisChaCtrlType"}},command_id:"BatteryBase.ChaDisChaCtrlType"},{title:"Charge Limit (SOC)",help:"Sets the maximum state of charge (SOC) the battery will be charged to. Once the battery reaches this level, charging stops to prevent overcharging and extend lifespan.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ChargeLimitSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChargeLimitSoc"}},command_id:"BatteryBase.ChargeLimitSoc"},{title:"Max Battery Current",help:"Sets the maximum charging and discharging current allowed for the connected inverter. Choose the preset that matches your inverter model to automatically apply the correct limits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Charge Preset",arg:"MaxChargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxChargingCurrent"}},{name:"Max Discharge Preset",arg:"MaxDischargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxDischargingCurrent"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"MaxChaDisChaCurrent"}},command_id:"BatteryBase.MaxChaDisChaCurrent"},{title:"On-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to while grid power is available. Below this level, the inverter will stop discharging and switch to grid power to protect battery capacity.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 21-90%.  Must be higher than the Off-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OnGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OnGridCutOffSoc"}},command_id:"BatteryBase.OnGridCutOffSoc"},{title:"Off-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to when operating off-grid. Once the battery reaches this level, the inverter stops discharging to prevent deep discharge and maintain battery health.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 20-89%.  Must be lower than the On-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OffGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OffGridCutOffSoc"}},command_id:"BatteryBase.OffGridCutOffSoc"}]}]},{sectionTitle:"Battery Backup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Backup Mode",help:"Enables or disables battery-backup operation. When enabled, the inverter reserves part of the battery capacity to power critical loads during a grid outage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Backup Mode",1:"Enable Backup Mode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryBackupMode"}},command_id:"BatteryBackup.BatteryBackupMode"},{title:"Battery Reserve SOC",help:"While Battery Backup Mode is enabled, the battery will stop discharging once it reaches this level. When Backup Mode is disabled, normal operation applies and discharge will continue down to the On-Grid or Off-Grid Battery Cutoff SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryReserveSOC"}},command_id:"BatteryBackup.BatteryReserveSOC"}]}]},{sectionTitle:"Battery Scheduling",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Scheduling",help:"This is a special scheduling mode designed for certain time-of-use (TOU) utility rates or other custom situations. In most circumstances, we recomment allowing your system to  manage charging and discharging automatically without setting a schedule.  You don't need to set a schedule unless you have a specific reason to charge or discharge at exact times.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Scheduling",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Scheduling",1:"Enable the 'PV Charge Only' and 'Discharge Only' scheduling modes"},telemetry:{model:"40104",block:"fixed",point:"BatteryScheduling"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryScheduling",Element:"BatteryScheduling"}},command_id:"BatteryScheduling.BatteryScheduling"}]},{title:"PV Charge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Battery Charge Power During 'PV Charge Only' Periods",help:"Sets the maximum charging power during scheduled Time-of-Use (TOU) charge periods in kW. Set this limit to control the power level at which the battery will charge from the grid during PV charge only periods",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",unit:"kW",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pChgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUMaximumChargingPower"}},command_id:"BatteryTOUCharge.TOUMaximumChargingPower"},{title:"Schedule Window 1 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan1"}},command_id:"BatteryTOUCharge.TOUChargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan2"}},command_id:"BatteryTOUCharge.TOUChargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan3"}},command_id:"BatteryTOUCharge.TOUChargingPlan3",widget:"timerange"}]},{title:"Discharge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Inverter Output Power During 'Discharge Only' Periods",help:"Sets the maximum discharging power during scheduled Time-of-Use (TOU) discharge periods in kW. Limit this to control how much battery power is exported to loads or grid during those windows.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pDischgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUMaximumDischargingPower"}},command_id:"BatteryTOUDischarge.TOUMaximumDischargingPower"},{title:"TOU Discharge Stop SOC",help:"Sets the minimum state of charge (SOC) that the battery will discharge to during 'Discharge Only' operation. Once this level is reached, discharging stops to preserve reserve capacity for later use or backup.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"socDischgEndT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"DischargingStopSoc"}},command_id:"BatteryTOUDischarge.DischargingStopSoc"},{title:"Schedule Window 1 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan1"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan2"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan3"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan3",widget:"timerange"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Discharge only Control Style",help:"Selects how 'discharge only' is controlled. 'Discharge only' can stop when a voltage limit is reached or when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"DischargeOnlyControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{4:"Enable SOC control (disable for voltage control)"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.DischargeOnlyControlStyle"},{title:"Discharge only Stop Voltage",help:"Sets the battery voltage at which discharge only will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Discharge only Stop Voltage",arg:"DischargeOnlyStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:202,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischargeOnlyStopVoltage"}]}]},{sectionTitle:"Grid Charge",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Allow Battery Charging from Grid",help:"Enables the battery to charge from the utility grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid Charge",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Do not charge the battery from grid power",1:"Allowed"},telemetry:{model:"40104",block:"fixed",point:"ACChargeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeStatus"}},command_id:"ACCharge.ACChargeStatus"},{title:"Grid Charge Power Limit",help:"Sets the maximum power the inverter will draw from the grid for charging. This cap applies when Grid Charge is enabled (and within any configured time windows).",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Grid Charge Power (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ACChargePower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargePower"}},command_id:"ACCharge.ACChargePower"},{title:"Grid Charge Control Type",help:"Select whether grid charging follows a time schedule or SOC/voltage thresholds.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"Type",dtype:"enum",description:"",longdescription:"",unit:"%",meanings:{0:"according to time",1:"according to SOC/Volt"},friendly_meanings:{0:"By Time Schedule",1:"By SOC/Voltage"},telemetry:{model:"40104",block:"fixed",point:"ACChargeType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeType"}},command_id:"ACCharge.ACChargeType"},{title:"Grid Charge SOC Range",help:"Defines when grid charging starts and stops based on battery state of charge (SOC). Charging starts when SOC falls below Start SOC and stops when it reaches Stop SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"ACChgStartSOC"},protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}}},{name:"SOC",arg:"StopSOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:90},telemetry:{model:"40104",block:"fixed",point:"ACChgStopSOC"},greater_than:"StartSOC",protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStopSOC"}}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}},command_id:"ACCharge.ACChgSOCRange"},{title:"Grid Charge Windows",help:"During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Window 1 Start Hour",arg:"StartTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Hour"}},{name:"Window 1 Start Minute",arg:"StartTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Minute"}},{name:"Window 1 End Hour",arg:"EndTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Hour"}},{name:"Window 1 End Minute",arg:"EndTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Minute"}},{name:"Window 2 Start Hour",arg:"StartTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Hour"}},{name:"Window 2 Start Minute",arg:"StartTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Minute"}},{name:"Window 2 End Hour",arg:"EndTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Hour"}},{name:"Window 2 End Minute",arg:"EndTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Minute"}},{name:"Window 3 Start Hour",arg:"StartTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Hour"}},{name:"Window 3 Start Minute",arg:"StartTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Minute"}},{name:"Window 3 End Hour",arg:"EndTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Hour"}},{name:"Window 3 End Minute",arg:"EndTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargingPlan"}},command_id:"ACCharge.ACChargingPlan",widget:"timerange-multi"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Grid Charge Control Style",help:"Selects how grid charging is controlled. Charging can follow a time schedule, stop when a voltage limit is reached, or stop when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"GridChargeControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{1:"Charge based on time",2:"Stop charging at voltage limit",3:"Stop charging at SOC limit"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.GridChargeControlStyle"},{title:"Grid Charging Start Voltage",help:"Sets the battery voltage at which grid charging will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Start Voltage",arg:"GridChargingStartVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:158,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStartVoltage"},{title:"Grid Charging Stop Voltage",help:"Sets the maximum battery voltage during grid charging. Once this voltage is reached, the inverter will stop charging from the grid to protect the battery and prevent overvoltage.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Stop Voltage",arg:"GridChargingStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:159,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStopVoltage"}]}]},{sectionTitle:"Battery Base",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Max Charge Current",help:"Instead of using the presets, you may set the charge current directly in amps.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Charge Current (A)",arg:"ChargeCurr",dtype:"Number",description:"",longdescription:"",unit:"A",range:{min:0}}],protocol:{modbus:{address:101,register_type:3,size:1}},command_id:"Modbus.ChargeCurr"},{title:"Battery Voltage Correction",help:" ",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Battery Voltage Correction",arg:"BatteryVoltageCorrection",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:999,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischgCurr"}]}]}]},{themeName:"Grid",sections:[{sectionTitle:"Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Grid Parameters",help:"This setting changes the conditions under which the inverter will connect or disconnect from the utility grid. Different areas have different rules about when this equipment is allowed to disconnect and when it must ride through. Choose the code required by the local utility or AHJ.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Code",arg:"Code",dtype:"enum",description:"",longdescription:"",meanings:{0:"Default(UL-240-18)",1:"California(Rule 21)",2:"Hawaii(Rule 14)",3:"Puerto Rico LUMA",4:"KIUC"},friendly_meanings:{0:"Default UL-1741 / IEEE 1547",1:"California (Rule 21)",2:"Hawaii (Rule 14)",3:"Puerto Rico (LUMA)",4:"KIUC"},telemetry:{model:"40104",block:"fixed",point:"GridRegulation"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridRegulation"}},command_id:"GridBase.GridRegulation"},{title:"Grid Type",help:"Choose wiring configuration of the site.  This helps configure the system to match the power service at the site.  Note the voltage you enter here must match the EPS Voltage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Service Type",arg:"Type",dtype:"enum",description:"",longdescription:"",meanings:{0:"Split240V/120V",1:"3phase208V/120V",2:"Single240V",3:"Single230V",4:"Split200V/100V"},friendly_meanings:{0:"Split 240V / 120V",1:"3-Phase 208V / 120V",2:"Single 240V",3:"Single 230V",4:"Split 200V / 100V"},telemetry:{model:"40104",block:"fixed",point:"GridType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridType"}},command_id:"GridBase.GridType"},{title:"Grid Frequency",help:"Sets the nominal grid frequency for the installation. Use 60 Hz for North America and most split-phase installs; use 50 Hz for regions that operate at 230 V single-phase.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Frequency (Hz)",arg:"Freq",dtype:"enum",description:"",longdescription:"",meanings:{0:"50",1:"60"},friendly_meanings:{0:"50 Hz",1:"60 Hz"},telemetry:{model:"40104",block:"fixed",point:"GridFreq"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridFreq"}},command_id:"GridBase.GridFreq"}]}]},{sectionTitle:"Grid Protection",subsections:[{title:"Grid Protection Parameters",visibility:"default",collapsedByDefault:!0,points:[{title:"Grid Voltage Limits (Stage 1)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1"}},command_id:"GridProtection.GridVoltLimit1"},{title:"Grid Voltage Limits (Stage 2)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2"}},command_id:"GridProtection.GridVoltLimit2"},{title:"Grid Voltage Limits (Stage 3)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3"}},command_id:"GridProtection.GridVoltLimit3"},{title:"Grid Frequency Limits (Stage 1)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1"}},command_id:"GridProtection.GridFreqLimit1"},{title:"Grid Frequency Limits (Stage 2)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2"}},command_id:"GridProtection.GridFreqLimit2"},{title:"Grid Frequency Limits (Stage 3)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3"}},command_id:"GridProtection.GridFreqLimit3"},{title:"Grid Voltage Trip Time",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1Time"}},command_id:"GridProtection.GridVoltLimit1Time"},{title:"Grid Voltage Trip Time (Stage 2)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2Time"}},command_id:"GridProtection.GridVoltLimit2Time"},{title:"Grid Voltage Trip Time (Stage 3)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3Time"}},command_id:"GridProtection.GridVoltLimit3Time"},{title:"Grid Frequency Trip Time (Stage 1)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1Time"}},command_id:"GridProtection.GridFreqLimit1Time"},{title:"Grid Frequency Trip Time (Stage 2)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2Time"}},command_id:"GridProtection.GridFreqLimit2Time"},{title:"Grid Frequency Trip Time (Stage 3)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3Time"}},command_id:"GridProtection.GridFreqLimit3Time"}]}]},{sectionTitle:"Grid Connection",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Permit to Operate",help:"Shows whether the inverter is permitted to operate in grid-connected mode.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Permit Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not Permitted",1:"Permitted"},telemetry:{model:"40104",block:"fixed",point:"PermitServiceStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"PermitServiceStatus"}},command_id:"GridConnection.PermitServiceStatus"},{title:"Ramp Rate",help:"How quickly inverter output is allowed to increase.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Ramp Rate (%/sec)",arg:"Rate",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"RampRate"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"RampRate"}},command_id:"GridConnection.RampRate"},{title:"Applicable Grid Voltage Range",help:"Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Vac)",arg:"ApplicableVoltageLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageLow"}},{name:"Upper Limit (Vac)",arg:"ApplicableVoltageHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableVoltage"}},command_id:"GridConnection.ApplicableVoltage"},{title:"Applicable Grid Frequency Range",help:"Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Hz)",arg:"ApplicableFrequencyLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyLow"}},{name:"Upper Limit (Hz)",arg:"ApplicableFrequencyHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableFrequency"}},command_id:"GridConnection.ApplicableFrequency"},{title:"Connection Delay Times",help:"Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Connection Delay (s)",arg:"ConnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConnectionDelayTime"}},{name:"Reconnection Delay (s)",arg:"ReconnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReconnectionDelayTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"DelayTime"}},command_id:"GridConnection.DelayTime"}]}]},{sectionTitle:"Grid Support",subsections:[{title:"Constant Power Factor",visibility:"default",collapsedByDefault:!0,points:[{title:"Power Factor Mode",help:"Shows whether constant power-factor control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive â€” No PF control",1:"Active â€” Constant PF"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactorModeStatus"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactorModeStatus"},{title:"Power Factor Setpoint",help:"The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorExcited"}},{name:"Power Factor (PF)",arg:"PowerFactor",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactor"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactor"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactor"}]},{title:"Constant Reactive Power",visibility:"default",collapsedByDefault:!0,points:[{title:"Reactive Power Mode",help:"Shows whether constant reactive-power control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeExcited"}},{name:"Status",arg:"Status",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no reactive power control",1:"Active - reactive power control"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ConstantReactivePowerModeStatus"}},command_id:"ConstantReactivePowerMode.ConstantReactivePowerModeStatus"},{title:"Reactive Power Setpoint",help:"Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Reactive Power (%)",arg:"Power",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReactivePowerPercentCMD"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ReactivePowerPercentCMD"}},command_id:"ConstantReactivePowerMode.ReactivePowerPercentCMD"}]},{title:"Volt-VAR (Voltage-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-VAR Mode",help:"Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-VAR control",1:"Active - Volt-VAR control"},telemetry:{model:"40104",block:"fixed",point:"VoltageReactivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VoltageReactivePowerMode"}},command_id:"VoltageReactivePowerMode.VoltageReactivePowerMode"},{title:"Autonomous Vref Adjustment",help:"Indicates whether the inverter autonomously adjusts its reference voltage (Vref).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Autonomous Adjustment",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"AutonomousVrefAdjustment"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"AutonomousVrefAdjustment"}},command_id:"VoltageReactivePowerMode.AutonomousVrefAdjustment"},{title:"Reference Voltage (Vref)",help:"Voltage reference used for Volt-VAR calculations.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Vref",arg:"Verf",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Verf"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Verf"}},command_id:"VoltageReactivePowerMode.Verf"},{title:"Vref Adjustment Time Constant",help:"Time constant applied when adjusting Vref.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Time Constant",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VrefAdjustmentTimeConstant"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VrefAdjustmentTimeConstant"}},command_id:"VoltageReactivePowerMode.VrefAdjustmentTimeConstant"},{title:"Volt-VAR Voltage Breakpoints",help:"Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"V1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV1"}},{name:"V2 (Voltage Point 2)",arg:"V2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV2"}},{name:"V3 (Voltage Point 3)",arg:"V3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV3"}},{name:"V4 (Voltage Point 4)",arg:"V4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"UnderOverVoltage"}},command_id:"VoltageReactivePowerMode.UnderOverVoltage"},{title:"Reactive Power Setpoint Q1",help:"Reactive power at voltage point V1 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q1 (Reactive Setpoint 1)",arg:"Q1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q1"}},command_id:"VoltageReactivePowerMode.Q1"},{title:"Reactive Power Setpoint Q2",help:"Reactive power at voltage point V2 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q2 (Reactive Setpoint 2)",arg:"Q2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q2"}},command_id:"VoltageReactivePowerMode.Q2"},{title:"Reactive Power Setpoint Q3",help:"Reactive power at voltage point V3 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q3 (Reactive Setpoint 3)",arg:"Q3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q3"}},command_id:"VoltageReactivePowerMode.Q3"},{title:"Reactive Power Setpoint Q4",help:"Reactive power at voltage point V4 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q4 (Reactive Setpoint 4)",arg:"Q4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q4"}},command_id:"VoltageReactivePowerMode.Q4"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-VAR changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VqOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageReactivePowerMode.OpenLoopResponseTime"}]},{title:"P-Q Mode (Active-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"P-Q Mode Status",help:"Shows whether Active/Reactive Power (P-Q) control mode is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no P-Q control",1:"Active - P-Q control"},telemetry:{model:"40104",block:"fixed",point:"PQModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"PQModeStatus"}},command_id:"ActivePowerReactivePowerMode.PQModeStatus"},{title:"P-Q Curve Points",help:"Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P1 Setpoint",arg:"P1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP1"}},{name:"P2 Setpoint",arg:"P2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP2"}},{name:"P3 Setpoint",arg:"P3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"P_QP"}},command_id:"ActivePowerReactivePowerMode.P_QP"}]},{title:"Volt-Watt (Voltage-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-Watt Mode",help:"Shows whether Volt-Watt (voltage-active power) control is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-Watt control",1:"Active - Volt-Watt control"},telemetry:{model:"40104",block:"fixed",point:"VoltageActivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltageActivePowerMode"}},command_id:"VoltageActivePowerMode.VoltageActivePowerMode"},{title:"Volt-Watt Voltage Breakpoints",help:"Voltage points that define the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"VoltWattV1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV1"}},{name:"V2 (Voltage Point 2)",arg:"VoltWattV2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattV"}},command_id:"VoltageActivePowerMode.VoltWattV"},{title:"Volt-Watt Power Setpoint",help:"Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P2 Setpoint",arg:"VoltWattP2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattP2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattP2"}},command_id:"VoltageActivePowerMode.VoltWattP2"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-Watt changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"VoltWattOpenLoopResponseTime",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageActivePowerMode.OpenLoopResponseTime"}]},{title:"Freq-Watt (Frequency-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Frequency-Active Power Mode",help:"Indicates whether frequency-power (Freq-Watt) control is currently enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"FrequencyActivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"FrequencyActivePowerModeStatus"}},command_id:"FrequencyActivePowerMode.FrequencyActivePowerModeStatus"},{title:"Open-Loop Response Time",help:"Response time applied to open-loop frequency-power adjustments.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"FreqWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"FrequencyActivePowerMode.OpenLoopResponseTime"},{title:"Over-Frequency Droop: Deadband",help:"Over Frequency Droop dbOF â€” Deadband around nominal frequency before active power reduction begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",unit:"Hz",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_dbOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_dbOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_dbOF"},{title:"Over-Frequency Droop: Gain (k)",help:"Over Frequency Droop kOF â€” Slope (gain k) of active power reduction versus frequency rise above nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_kOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_kOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_kOF"},{title:"Under-Frequency Droop: Deadband",help:"Under Frequency Droop dbUF â€” Deadband around nominal frequency before active power increase/response begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_dbUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_dbUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_dbUF"},{title:"Under-Frequency Droop: Gain (k)",help:"Under Frequency Droop kUF â€” Slope (gain k) of active power response versus frequency drop below nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_kUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_kUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_kUF"}]}]}]},{themeName:"Backup Power",sections:[{sectionTitle:"Backup Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Off-Grid Output",help:"Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"OffGridOutput"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"OffGridOutput"}},command_id:"BackupPower.OffGridOutput"},{title:"Backup (EPS) Output Voltage",help:"Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage (Vac)",arg:"Voltage",dtype:"enum",description:"",longdescription:"",unit:"Vac",meanings:{0:"208",1:"220",2:"230",3:"240",4:"277"},friendly_meanings:{0:"208 V",1:"220 V",2:"230 V",3:"240 V",4:"277 V"},telemetry:{model:"40104",block:"fixed",point:"EPSVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"EPSVoltage"}},command_id:"BackupPower.EPSVoltage"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Port Connection",help:"If using a generator, select which port it's connected to â€” either the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Generator connected to",arg:"Port",dtype:"enum",description:"",longdescription:"",meanings:{0:"GeneratorPort",1:"GridPort"},friendly_meanings:{0:"GEN port (also select if not using generator).",1:"Grid port (aka microgrid mode)"},telemetry:{model:"40104",block:"fixed",point:"LinkedPort"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"LinkedPort"}},command_id:"Generator.LinkedPort"},{title:"Battery Charge Current Limit",help:"Sets the maximum DC current the inverter will send to the battery when charging from the generator.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Charge Current (Adc)",arg:"Current",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"BatteryChargeCurrentLimit"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"BatteryChargeCurrentLimit"}},command_id:"Generator.BatteryChargeCurrentLimit"},{title:"Generator Rated Power",help:"Specify the generator's continuous rated output power.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Rated Power (kW)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"GeneratorRatedPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorRatedPower"}},command_id:"Generator.GeneratorRatedPower"},{title:"Generator Cool-Down Time",help:"Sets the time the generator continues running after charging stops to allow for safe cooling.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Cool-Down Time (min)",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GeneratorCoolDownTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorCoolDownTime"}},command_id:"Generator.GeneratorCoolDownTime"},{title:"Generator Start/Stop SOC",help:"Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"Generator starts when battery drops to this level",longdescription:"",unit:"%",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socGenStart"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"Generator stops when battery charges to this level",longdescription:"",unit:"%",range:{min:5,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socGenEnd"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorSOC"}},command_id:"Generator.GeneratorSOC"},{title:"Generator Contactor Status",help:"Indicates the current state of the generator control contactor.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Contactor State",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"OFF",1:"ON"},friendly_meanings:{0:"Closed / On",1:"Open / Off"},telemetry:{model:"40101",block:"fixed",point:"genDryContactState"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GenDryContact"}},command_id:"Generator.GenDryContact"},{title:"Battery Quick Charge with Generator",help:"Start the generator to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Stop quick charge",1:"Start quick charge"},telemetry:{model:"40104",block:"fixed",point:"StartGeneratorExercise"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"StartGeneratorExercise"}},command_id:"Generator.StartGeneratorExercise"},{title:"Generator Boost",help:"Enables dynamic adjustment of generator charging power for faster battery recovery when needed.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"GeneratorBoost"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorBoost"}},command_id:"Generator.GeneratorBoost"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Generator Charge Mode",help:"Selects how the generator charges the battery. When enabled, the generator will charge the battery automatically based on voltage or SOC.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Mode",arg:"GenChg",dtype:"enum",description:"",longdescription:"",meanings:{0:"Based on SOC",1:"Based on Voltage"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.GenChg"},{title:"Generator Charge Start Voltage",help:"Sets the battery voltage at which the generator begins charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Start Voltage",arg:"GenChgStartVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:194,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgStartVolt"},{title:"Generator Charge End Voltage",help:"Sets the battery voltage at which the generator stops charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge End Voltage",arg:"GenChgEndVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:195,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgEndVolt"}]},{title:"Generator Exercise",visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Exercise Schedule",help:"Configure a recurring schedule for generator exercise runs. Select the day of the week and time when the generator should run automatically.",element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Day of Week",arg:"DayOfWeek",dtype:"enum",description:"",longdescription:"",meanings:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23}},{name:"Minute",arg:"Minute",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59}}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Plan",Element:"GeneratorExercise"}},command_id:"CGI.GeneratorExercise",widget:"generator-exercise",showRefresh:!0,showSetButton:!0}]}]}]},{themeName:"AC Coupled PV",sections:[{sectionTitle:"AC Coupled PV",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"AC Coupled PV",help:"Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"AC Coupled PV Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"ACCoupledPV"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCoupledPV"}},command_id:"ACCoupledPV.ACCoupledPV"},{title:"AC Coupled PV Start/Stop SOC",help:"Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"AC Coupled PV begins charging when SOC drops to this level",longdescription:"",unit:"%",range:{min:0,max:100},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOn"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"AC Coupled PV stops charging when SOC reaches this level",longdescription:"",unit:"%",range:{min:0,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOff"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCouplePVSOC"}},command_id:"ACCoupledPV.ACCouplePVSOC"}]}]}]},{themeName:"Smart Load",sections:[{sectionTitle:"Smart Load",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Use Smart Load",help:"Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disabled",1:"Enabled"},telemetry:{model:"40104",block:"fixed",point:"SmartLoad"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoad"}},command_id:"LoadShedding.SmartLoad"},{title:"Smart Load On-Grid Behavior",help:"Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"On-Grid Always-On Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Follow normal rules",1:"Always On When Grid Present"},telemetry:{model:"40104",block:"fixed",point:"OnGridAlwaysOn"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"OnGridAlwaysOn"}},command_id:"LoadShedding.OnGridAlwaysOn"},{title:"Smart Load Start Power",help:"Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"PV Power Above (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"StartPVPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"StartPVPower"}},command_id:"LoadShedding.StartPVPower"},{title:"Smart Load SOC Limits",help:"Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start When Battery SOC Is Above (%)",arg:"OnSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},less_than:"OffSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOnSoc"}},{name:"Stop When Battery SOC Is Below (%)",arg:"OffSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},greater_than:"OnSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoadSOC"}},command_id:"LoadShedding.SmartLoadSOC"}]}]}]}],sg={themes:og},Vi=[{id:"envy-04237218B0",label:"⭐ Envy - 04237218B0",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237218B0"},modbusSlaveId:1},{id:"envy-04237219C3",label:"Envy - 04237219C3",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237219C3"},modbusSlaveId:2}],dg=void 0;function cg(e,n){const[t,l]=T.useState(e),[i,r]=T.useState(n),[a,o]=T.useState(!1),[s,d]=T.useState(null);return T.useEffect(()=>{},[]),{pageRegistry:t,pageLookup:i,isLoading:a,loadError:s,themeFile:dg}}function ug(){const[e,n]=T.useState("");return T.useEffect(()=>{const t=()=>{const l=document.querySelectorAll('[id^="theme-"]');let i="";l.forEach(r=>{const a=r.getBoundingClientRect();a.top<=window.innerHeight*.3&&a.bottom>0&&(i=r.id)}),i&&i!==e&&n(i)};return t(),window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),e}function mg(){const[e,n]=T.useState(""),t=T.useCallback((l,i)=>{var a,o,s,d;if(!i.trim())return{matches:!0,helpTextMatch:!1};const r=i.toLowerCase();if((a=l.title)!=null&&a.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1};if((o=l.help)!=null&&o.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!0};for(const u of l.entries){if((s=u.name)!=null&&s.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1};if(u.friendly_meanings){for(const m of Object.values(u.friendly_meanings))if(m.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1}}if((d=u.description)!=null&&d.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1}}return{matches:!1,helpTextMatch:!1}},[]);return{searchQuery:e,setSearchQuery:n,pointMatchesSearch:t}}function fg({themes:e,activeSection:n,selectedEquipmentId:t,onEquipmentChange:l,equipmentOptions:i}){return c.jsxs("aside",{className:"w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-[11px] text-slate-500 uppercase font-medium mb-1 block",children:"Equipment"}),c.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800",value:t,onChange:r=>l(r.target.value),children:i.map(r=>c.jsx("option",{value:r.id,children:r.label},r.id))})]}),c.jsxs("nav",{className:"text-sm text-slate-800",children:[c.jsx("div",{className:"text-emerald-600 font-semibold mb-2",children:"Navigation"}),c.jsxs("div",{className:"flex flex-col gap-3",children:[e.map((r,a)=>{const o=`theme-${a}`,s=n===o||n.startsWith(`${o}-section`);return c.jsxs("div",{children:[c.jsxs("div",{className:"relative",children:[s&&c.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r"}),c.jsx("button",{className:`font-semibold text-xs uppercase tracking-wide mb-1 px-2 hover:text-emerald-600 transition-colors w-full text-left ${s?"text-emerald-600":"text-slate-900"}`,onClick:()=>{var d;(d=document.getElementById(o))==null||d.scrollIntoView({behavior:"smooth",block:"start"})},children:r.themeName})]}),c.jsx("ul",{className:"pl-2 flex flex-col gap-1 text-slate-700",children:r.sections.map((d,u)=>{const m=`${o}-section-${u}`,f=n===m;return c.jsxs("li",{className:"relative",children:[f&&c.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),c.jsx("button",{className:`px-2 py-1 hover:bg-slate-50 rounded text-xs w-full text-left transition-colors ${f?"text-blue-600 font-medium bg-blue-50":"text-slate-700"}`,onClick:()=>{var b;(b=document.getElementById(m))==null||b.scrollIntoView({behavior:"smooth",block:"start"})},children:d.sectionTitle})]},`${d.sectionTitle}-${u}`)})})]},`${r.themeName}-${a}`)}),!e.length&&c.jsx("div",{className:"text-xs text-slate-500",children:"No themes defined."})]})]})]})}function pg({searchQuery:e,onSearchChange:n,lastUpdatedLabel:t}){return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"text-xs text-slate-500",children:["Last Updated At: ",t]}),c.jsx("div",{className:"flex flex-col md:flex-row md:items-start gap-3 md:gap-4",children:c.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[c.jsx("div",{className:"text-xl font-semibold text-slate-900 leading-tight",children:"Site Configuration"}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("div",{className:"relative flex-1 max-w-md",children:[c.jsx("input",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800",placeholder:"Search…",value:e,onChange:l=>n(l.target.value)}),e&&c.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",onClick:()=>n(""),title:"Clear search",children:"✕"})]}),c.jsxs("button",{className:"text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1",children:[c.jsx("span",{children:"⟳"}),c.jsx("span",{children:"Refresh"})]})]})]})})]})}function yg(e){const n={};if(e.widget==="generator-exercise")return e.entries.forEach(i=>{i.dtype,n[i.arg]=""}),n;const t=e.entries.filter(i=>i.dtype==="Number"&&i.range!==void 0),l=t.length>=2;return e.entries.forEach((i,r)=>{var a,o;if(i.value!==void 0){n[i.arg]=i.dtype==="Number"&&i.value!==""?Number(i.value):i.value;return}if(i.dtype==="Number"){const s=i.range;if(!s){n[i.arg]=0;return}if(l){const d=s.max-s.min,u=r/Math.max(t.length-1,1);i.less_than?n[i.arg]=Math.round(s.min+d*.3):i.greater_than?n[i.arg]=Math.round(s.min+d*.7):n[i.arg]=Math.round(s.min+d*u)}else n[i.arg]=s.min;return}if(i.dtype==="enum"){const s=Object.keys(i.meanings??{})[0];if(s){const d=((a=i.friendly_meanings)==null?void 0:a[s])??((o=i.meanings)==null?void 0:o[s])??"";n[i.arg]=d}else n[i.arg]="";return}if(i.dtype&&i.dtype.startsWith("bitfield")){const s={};i.meanings&&Object.keys(i.meanings).forEach(d=>{s[d]=!1}),n[i.arg]=s;return}n[i.arg]=""}),n}function gg(e,n){const t=e.entries.some(i=>{var r;return(r=i.protocol)==null?void 0:r.matter});let l;return t?l=e.entries.filter(i=>{var r;return(r=i.protocol)==null?void 0:r.matter}).map(i=>({MEP:i.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:i.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:i.protocol.matter.Element||e.protocol.matter.Element})):l=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:l,thingId:n}}}function bg(e,n,t){const l=e.entries.some(r=>{var a;return(a=r.protocol)==null?void 0:a.matter});let i;return l?i=e.entries.filter(r=>{var a;return(a=r.protocol)==null?void 0:a.matter}).map(r=>({MEP:r.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:r.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:r.protocol.matter.Element||e.protocol.matter.Element,arguments:{[r.arg]:n[r.arg]}})):i=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:n}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:e.element_type==="service"||e.access==="Invoke"?"Invoke":"Write",data:{Elements:i,thingId:t}}}function hg(e,n){const l=e.protocol.modbus.register_type===3?3:4;return{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Read",timeout:5,data:{type:"RTU",uartPort:1,slaveId:n,address:e.protocol.modbus.address,function:l,registerNumber:e.protocol.modbus.size}}}function _g(e,n,t){var a;const l=e.protocol.modbus.size>1?16:6,i=(a=e.entries[0])==null?void 0:a.arg;let r=i?n[i]:0;return e.protocol.modbus&&typeof r=="number"&&(r=Math.round(r)),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:t,address:e.protocol.modbus.address,function:l,value:r}}}function xg(e,n){return{version:"1.0",requestId:Date.now(),method:"Read",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,Element:e.protocol.cgi.Element,thingId:n}}}function vg(e,n,t){const l=n.DayOfWeek!==""&&n.DayOfWeek!==null&&n.DayOfWeek!==void 0?typeof n.DayOfWeek=="number"?n.DayOfWeek:parseInt(String(n.DayOfWeek),10):0,i=n.Hour!==""&&n.Hour!==null&&n.Hour!==void 0?typeof n.Hour=="number"?n.Hour:parseInt(String(n.Hour),10):0,a=`${n.Minute!==""&&n.Minute!==null&&n.Minute!==void 0?typeof n.Minute=="number"?n.Minute:parseInt(String(n.Minute),10):0} ${i} * * ${l}`;return{version:"1.0",requestId:Date.now(),method:"Invoke",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,cronTimer:a,Element:e.protocol.cgi.Element,thingId:t}}}function wg(e,n){const t={...n},l=e.protocol.modbus!==void 0||e.protocol.cgi!==void 0;return e.entries.forEach(i=>{if(i.dtype!=="enum"||!i.meanings)return;const r=t[i.arg];if(r==null||r==="")return;const a=Object.entries(i.meanings).find(([o,s])=>{var u;const d=((u=i.friendly_meanings)==null?void 0:u[o])??s;return r===d||r===s});a&&(t[i.arg]=l?parseInt(a[0],10):a[1])}),t}function Sg(e,n){const t={...n};return e.entries.forEach(l=>{if(!l.dtype||!l.dtype.startsWith("bitfield"))return;const i=t[l.arg]||{};let r=0;Object.entries(i).forEach(([a,o])=>{o&&(r|=1<<parseInt(a,10))}),t[l.arg]=r}),t}function Cg(e,n){var i,r;const t=n.thingId,l=n.modbusSlaveId;return e.element_type==="custom"&&e.widget==="generator-exercise"&&((i=e.protocol)!=null&&i.cgi)?xg(e,t):(r=e.protocol)!=null&&r.matter?gg(e,t):e.protocol.modbus?hg(e,l):{}}function Lg(e,n,t){var a,o;const l=t.thingId,i=t.modbusSlaveId;let r=wg(e,n);return r=Sg(e,r),e.element_type==="custom"&&e.widget==="generator-exercise"&&((a=e.protocol)!=null&&a.cgi)?vg(e,r,l):(o=e.protocol)!=null&&o.matter?bg(e,r,l):e.protocol.modbus?_g(e,r,i):{}}function kg(e,n){const[t,l]=T.useState(yg(e)),i=T.useCallback((o,s)=>{l(d=>({...d,[o]:s}))},[]),r=T.useCallback(()=>Cg(e,n),[e,n]),a=T.useCallback(()=>Lg(e,t,n),[e,t,n]);return{formState:t,setFormState:l,handleFieldChange:i,handleRefresh:r,handleSet:a}}function Ti(){const[e,n]=T.useState(!1),[t,l]=T.useState(null),i=T.useCallback(o=>{o!==void 0&&l(o),n(!0)},[]),r=T.useCallback(()=>{n(!1)},[]),a=T.useCallback(()=>{n(o=>!o)},[]);return{isOpen:e,data:t,open:i,close:r,toggle:a,setData:l}}const Pg=({onClick:e})=>c.jsx("button",{type:"button",onClick:e,className:"text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer",children:"i"}),Eg=()=>c.jsx("span",{className:"text-base leading-none",children:"⟳"}),Ng=()=>c.jsx("span",{className:"text-base leading-none",children:"🕐"}),Ig=()=>c.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-500 border border-slate-300 font-medium",children:"Read Only"});function Ag({point:e,readOnly:n,helpTextMatch:t=!1,shouldShowHistory:l,shouldShowRefresh:i,shouldShowSetButton:r,setButtonAppearance:a,onHelpClick:o,onHistoryClick:s,onRefreshClick:d,onSetClick:u}){return c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-3",children:[c.jsxs("div",{className:"flex items-start gap-2",children:[c.jsx("div",{className:"text-slate-800 text-sm font-semibold leading-tight",children:e.title}),e.help&&c.jsxs("div",{className:"mt-0.5 relative",children:[c.jsx(Pg,{onClick:o}),t&&c.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"})]}),n&&c.jsx(Ig,{})]}),c.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l&&c.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"View historical data",onClick:s,children:c.jsx(Ng,{})}),i&&c.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"Refresh from device",onClick:d,children:c.jsx(Eg,{})}),r&&c.jsx("button",{className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${a}`,disabled:n,onClick:u,children:"Set"})]})]})}function Vg({point:e,formState:n,readOnly:t,onChange:l}){const i=e.entries.find(o=>o.arg==="Sec"),r=()=>{const o=n.Hour??0,s=n.Min??0,d=(n.Year??0)+2e3,u=String(n.Mon??1).padStart(2,"0"),m=String(n.Day??1).padStart(2,"0"),f=String(o).padStart(2,"0"),b=String(s).padStart(2,"0");return`${d}-${u}-${m}T${f}:${b}`},a=o=>{const s=new Date(o),d=s.getHours(),u=s.getMinutes();l("Year",s.getFullYear()-2e3),l("Mon",s.getMonth()+1),l("Day",s.getDate()),l("Hour",d),l("Min",u),i&&l("Sec",0)};return c.jsx("div",{className:"flex flex-col gap-2",children:c.jsx("input",{type:"datetime-local",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:r(),onChange:o=>a(o.target.value)})})}const Pl="00:00";function kr({label:e,value:n,readOnly:t,onChange:l,onClear:i}){const r=!t&&n!==Pl;return c.jsxs("div",{className:"w-[150px] flex-shrink-0 flex flex-col gap-1",children:[c.jsx("label",{className:"text-slate-600 text-xs font-medium",children:e}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:n,onChange:a=>l(a.target.value)}),r&&c.jsx("button",{type:"button",className:"absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700",onClick:i,"aria-label":`Clear ${e.toLowerCase()}`,children:"✕"})]})]})}function Gm({point:e,formState:n,readOnly:t,onChange:l}){const i=e.entries.find(y=>y.arg.includes("StartHour")||y.arg.includes("Start_hour")||y.arg.includes("StartTime_h")),r=e.entries.find(y=>y.arg.includes("StartMin")||y.arg.includes("Start_minute")||y.arg.includes("StartTime_m")),a=e.entries.find(y=>y.arg.includes("EndHour")||y.arg.includes("End_hour")||y.arg.includes("EndTime_h")),o=e.entries.find(y=>y.arg.includes("EndMin")||y.arg.includes("End_minute")||y.arg.includes("EndTime_m")),s=()=>{if(i&&r){const y=String(n[i.arg]??0).padStart(2,"0"),_=String(n[r.arg]??0).padStart(2,"0");return`${y}:${_}`}return Pl},d=()=>{if(a&&o){const y=String(n[a.arg]??0).padStart(2,"0"),_=String(n[o.arg]??0).padStart(2,"0");return`${y}:${_}`}return Pl},u=y=>{const[_,g]=y.split(":"),p=parseInt(_,10),h=parseInt(g,10);i&&r&&(l(i.arg,p),l(r.arg,h))},m=y=>{const[_,g]=y.split(":"),p=parseInt(_,10),h=parseInt(g,10);a&&o&&(l(a.arg,p),l(o.arg,h))},f=()=>{t||(u(Pl),m(Pl))},b=s(),x=d();return c.jsxs("div",{className:"flex items-end gap-4",children:[c.jsx(kr,{label:"Start Time",value:b,readOnly:t,onChange:u,onClear:f}),c.jsx(kr,{label:"End Time",value:x,readOnly:t,onChange:m,onClear:f})]})}function Tg({point:e,formState:n,readOnly:t,onChange:l}){const i=new Map;e.entries.forEach(d=>{const u=d.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);if(!u)return;const[,m,f,b]=u,x=parseInt(f,10);i.has(x)||i.set(x,{id:x});const y=i.get(x),_=b.toLowerCase();m.toLowerCase()==="starttime"?_==="h"?y.startHourArg=d.arg:y.startMinArg=d.arg:_==="h"?y.endHourArg=d.arg:y.endMinArg=d.arg});const r=Array.from(i.values()).sort((d,u)=>d.id-u.id);if(r.length===0)return c.jsx(Gm,{point:e,formState:n,readOnly:t,onChange:l});const a=(d,u)=>{const m=d!==void 0?n[d]:0,f=u!==void 0?n[u]:0,b=typeof m=="number"?m:parseInt(m??0,10)||0,x=typeof f=="number"?f:parseInt(f??0,10)||0;return`${String(b).padStart(2,"0")}:${String(x).padStart(2,"0")}`},o=(d,u,m)=>{const[f,b]=m.split(":"),x=parseInt(f,10),y=parseInt(b,10);u==="start"?(d.startHourArg&&l(d.startHourArg,x),d.startMinArg&&l(d.startMinArg,y)):(d.endHourArg&&l(d.endHourArg,x),d.endMinArg&&l(d.endMinArg,y))},s=d=>{t||(d.startHourArg&&l(d.startHourArg,0),d.startMinArg&&l(d.startMinArg,0),d.endHourArg&&l(d.endHourArg,0),d.endMinArg&&l(d.endMinArg,0))};return c.jsx("div",{className:"flex flex-col gap-4",children:r.map(d=>{const u=a(d.startHourArg,d.startMinArg),m=a(d.endHourArg,d.endMinArg),f=()=>s(d);return c.jsxs("div",{className:"flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3",children:[c.jsxs("div",{className:"text-xs font-semibold uppercase text-slate-600",children:["Grid Charge Window ",d.id]}),c.jsxs("div",{className:"flex items-end gap-4",children:[c.jsx(kr,{label:"Start Time",value:u,readOnly:t,onChange:b=>o(d,"start",b),onClear:f}),c.jsx(kr,{label:"End Time",value:m,readOnly:t,onChange:b=>o(d,"end",b),onClear:f})]})]},d.id)})})}function Dg({formState:e,readOnly:n,onChange:t}){const l=e.DayOfWeek!==""?e.DayOfWeek:null,i=e.Hour!==""?e.Hour:null,r=e.Minute!==""?e.Minute:null,a=()=>i===null||r===null?"":`${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`,o=u=>{if(!u){t("Hour",""),t("Minute","");return}const[m,f]=u.split(":");t("Hour",parseInt(m,10)),t("Minute",parseInt(f,10))},s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let d="No schedule configured";return l!==null&&i!==null&&r!==null&&(d=`Every ${s[l]} at ${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`),c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Day of Week"}),c.jsxs("select",{className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:l!==null?l:"",onChange:u=>t("DayOfWeek",u.target.value===""?"":Number(u.target.value)),children:[c.jsx("option",{value:"",children:"Select day..."}),s.map((u,m)=>c.jsx("option",{value:m,children:u},m))]})]}),c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Time"}),c.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:a(),onChange:u=>o(u.target.value)})]})]}),c.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-3",children:[c.jsx("div",{className:"text-xs text-slate-600 font-medium mb-1",children:"Schedule Preview"}),c.jsx("div",{className:"text-sm text-slate-800",children:d})]})]})}function Gg({entries:e,formState:n,readOnly:t,onChange:l}){var y;const[i,r]=T.useState(null),a=T.useRef(null),o=[{bg:"bg-emerald-500",text:"text-emerald-600",border:"border-emerald-500"},{bg:"bg-rose-500",text:"text-rose-600",border:"border-rose-500"},{bg:"bg-blue-500",text:"text-blue-600",border:"border-blue-500"},{bg:"bg-purple-500",text:"text-purple-600",border:"border-purple-500"},{bg:"bg-orange-500",text:"text-orange-600",border:"border-orange-500"},{bg:"bg-pink-500",text:"text-pink-600",border:"border-pink-500"},{bg:"bg-indigo-500",text:"text-indigo-600",border:"border-indigo-500"},{bg:"bg-teal-500",text:"text-teal-600",border:"border-teal-500"},{bg:"bg-cyan-500",text:"text-cyan-600",border:"border-cyan-500"},{bg:"bg-amber-500",text:"text-amber-600",border:"border-amber-500"},{bg:"bg-lime-500",text:"text-lime-600",border:"border-lime-500"},{bg:"bg-fuchsia-500",text:"text-fuchsia-600",border:"border-fuchsia-500"}],s=(y=e[0])==null?void 0:y.range;if(!s)return null;const{min:d,max:u}=s,m=_=>{let g=d,p=u;if(_.greater_than){const h=n[_.greater_than];typeof h=="number"&&(g=Math.max(g,h+1))}if(_.less_than){const h=n[_.less_than];typeof h=="number"&&(p=Math.min(p,h-1))}return{min:g,max:p}},f=(_,g)=>{const p=m(_),h=Math.max(p.min,Math.min(p.max,g));l(_.arg,h)},b=(_,g)=>{if(t)return;g.preventDefault(),r(_);const p=a.current;if(!p)return;const h=C=>{const w=p.getBoundingClientRect(),L=C.clientX-w.left,S=Math.max(0,Math.min(100,L/w.width*100)),E=Math.round(d+S/100*(u-d));f(e[_],E)},v=()=>{r(null),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",v)},x=e.length>=8?"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4":"grid-cols-2";return c.jsxs("div",{className:"flex flex-col gap-3 text-sm",children:[c.jsx("div",{className:`grid ${x} gap-3`,children:e.map((_,g)=>{const p=o[g%o.length],h=n[_.arg]??d,v=m(_);return c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsxs("div",{className:`text-[11px] uppercase font-semibold flex items-center gap-1.5 ${p.text}`,children:[c.jsx("span",{className:`w-2 h-2 rounded-full ${p.bg}`}),c.jsx("span",{children:_.name??""}),_.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase ml-auto",children:_.unit})]}),c.jsx("input",{type:"number",className:`w-full rounded border ${p.border} bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500`,disabled:t,value:h,min:v.min,max:v.max,onChange:C=>{const w=C.target.value===""?v.min:Number(C.target.value);f(_,w)}})]},_.arg)})}),c.jsxs("div",{className:"relative w-full pt-2 pb-3",children:[c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-2",children:[c.jsx("span",{children:d}),c.jsx("span",{children:u})]}),c.jsxs("div",{className:"relative overflow-hidden",ref:a,children:[c.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full -translate-y-1/2"}),c.jsx("div",{className:"relative overflow-hidden",style:{height:"24px"},children:e.map((_,g)=>{const p=o[g%o.length],h=n[_.arg]??d,v=(h-d)/(u-d)*100,C=e.length-g,w=i===g?100:C;return c.jsx("div",{children:c.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 ${t?"cursor-not-allowed":"cursor-grab active:cursor-grabbing"}`,style:{left:`${v}%`,transform:"translate(-50%, -50%)",width:"40px",height:"24px",zIndex:w},onMouseDown:L=>b(g,L),children:c.jsx("div",{className:`absolute top-1/2 left-1/2 w-5 h-5 rounded-full ${p.bg} border-2 border-white shadow-lg pointer-events-none transition-shadow`,style:{transform:"translate(-50%, -50%)",zIndex:1,boxShadow:i===g?"0 0 0 3px rgba(0,0,0,0.1)":void 0},title:_.name?`${_.name}: ${h}`:String(h)})})},_.arg)})})]})]})]})}function Mg({entry:e,value:n,onChange:t,readOnly:l,point:i}){var x,y,_,g,p,h,v;const r="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",a=e.dtype==="enum"||e.dtype&&e.dtype.startsWith("bitfield")?"col-span-full flex flex-col gap-1 text-sm":"flex flex-col gap-1 text-sm";if(e.dtype&&e.dtype.startsWith("bitfield")&&e.meanings){const C=n||{},w=L=>{const S={...C,[L]:!C[L]};t(S)};return c.jsxs("div",{className:a,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name??""}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsx("div",{className:"flex flex-col gap-2 py-1",children:Object.entries(e.meanings).map(([L,S])=>c.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:C[L]||!1,onChange:()=>w(L)}),c.jsx("span",{className:"text-sm text-slate-800",children:S})]},L))}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}if(e.dtype==="enum"&&e.meanings){const C=Object.entries(e.meanings).map(([S,E])=>{var R;const A=((R=e.friendly_meanings)==null?void 0:R[S])??E;return{wireVal:S,friendly:A}});if(C.length<=3)return c.jsxs("div",{className:a,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsx("div",{className:"flex flex-col gap-2 py-1",children:C.map(S=>c.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{type:"radio",name:e.arg,className:"w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:n===S.friendly,onChange:()=>t(S.friendly)}),c.jsx("span",{className:"text-sm text-slate-800",children:S.friendly})]},S.wireVal))}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]});const w=C.reduce((S,E)=>E.friendly.length>S.length?E.friendly:S,""),L=Math.min(Math.max(w.length*8.5+50,220),480);return c.jsxs("div",{className:a,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name??""}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",style:{minWidth:`${L}px`,maxWidth:"100%"},disabled:l,value:n??"",onChange:S=>t(S.target.value),children:C.map(S=>c.jsx("option",{value:S.friendly,children:S.friendly},S.wireVal))}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}const o=e.dtype==="Number",s=o&&e.range!==void 0,d=((x=i==null?void 0:i.protocol)==null?void 0:x.modbus)!==void 0,u=(_=(y=i==null?void 0:i.protocol)==null?void 0:y.modbus)==null?void 0:_.scale_factor,m=d&&u!==void 0&&o,f=m&&n!==null&&n!==void 0&&n!==""?Number(n)*u:n,b=C=>{if(o){const w=C===""?"":Number(C);if(m&&w!==""){const L=Math.round(w/u);t(L)}else t(w)}else t(C)};return c.jsxs("div",{className:a,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("input",{type:o?"number":"text",className:s?"w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500":r,disabled:l,value:f??"",min:(g=e.range)==null?void 0:g.min,max:(p=e.range)==null?void 0:p.max,onChange:C=>b(C.target.value)}),s&&c.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[c.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.min}),c.jsx("input",{type:"range",className:"flex-1",disabled:l,value:f??e.range.min,min:(h=e.range)==null?void 0:h.min,max:(v=e.range)==null?void 0:v.max,onChange:C=>{const w=Number(C.target.value);if(m){const L=Math.round(w/u);t(L)}else t(w)}}),c.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.max})]})]}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug",children:e.longdescription})]})}function Fg({point:e,formState:n,readOnly:t,isInvoke:l,setButtonAppearance:i,onChange:r,onInvokeClick:a}){const o=e.entries.filter(d=>d.dtype==="Number"&&d.range!==void 0),s=!e.widget&&o.length>=2&&o.length===e.entries.length;return c.jsxs(c.Fragment,{children:[e.widget==="datetime"?c.jsx(Vg,{point:e,formState:n,readOnly:t,onChange:r}):e.widget==="timerange-multi"?c.jsx(Tg,{point:e,formState:n,readOnly:t,onChange:r}):e.widget==="timerange"?c.jsx(Gm,{point:e,formState:n,readOnly:t,onChange:r}):e.widget==="generator-exercise"?c.jsx(Dg,{formState:n,readOnly:t,onChange:r}):s?c.jsx(Gg,{entries:o,formState:n,readOnly:t,onChange:r}):c.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4",children:e.entries.map(d=>c.jsx(Mg,{entry:d,value:n[d.arg],readOnly:t,point:e,onChange:u=>r(d.arg,u)},d.arg))}),l&&e.widget!=="generator-exercise"&&e.showInvokeButton!==!1&&c.jsx("div",{className:"mt-4 flex items-center gap-2",children:c.jsx("button",{type:"button",className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${i}`,disabled:t,onClick:a,children:e.invokeButtonText||"Invoke"})})]})}const Og={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl"};function Ms({isOpen:e,onClose:n,title:t,icon:l,children:i,showFooter:r=!0,footerContent:a,maxWidth:o="lg"}){if(T.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&n()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[e,n]),!e)return null;const s=c.jsx("div",{className:"flex justify-end p-4 border-t border-slate-200 bg-slate-50",children:c.jsx("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",onClick:n,children:"Close"})});return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4",onClick:n,children:c.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${Og[o]} border border-slate-300 overflow-hidden`,onClick:d=>d.stopPropagation(),children:[c.jsxs("div",{className:"flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[l,c.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:t})]}),c.jsx("button",{type:"button",className:"text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1",onClick:n,children:"✕"})]}),c.jsx("div",{className:"p-5 max-h-[60vh] overflow-y-auto",children:i}),r&&(a||s)]})})}function Bg({title:e,content:n,isOpen:t,onClose:l}){const i=a=>a.split(/(\*\*[^*]+\*\*)/g).map((s,d)=>s.startsWith("**")&&s.endsWith("**")?c.jsx("strong",{className:"font-semibold text-slate-900",children:s.slice(2,-2)},d):c.jsx("span",{children:s},d)),r=c.jsx("div",{className:"text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium",children:"i"});return c.jsx(Ms,{isOpen:t,onClose:l,title:e,icon:r,children:c.jsx("div",{className:"text-sm text-slate-700 leading-relaxed whitespace-pre-wrap",children:i(n)})})}function Rg({point:e,isOpen:n,onClose:t}){const l=[];e.entries.forEach(r=>{var a,o;if((a=r.telemetry)!=null&&a.model&&((o=r.telemetry)!=null&&o.point)){const s=`${r.telemetry.model}.${r.telemetry.point}`;l.includes(s)||l.push(s)}});const i=c.jsx("span",{className:"text-slate-500 text-xl",children:"🕐"});return c.jsxs(Ms,{isOpen:n,onClose:t,title:"Historical Data",icon:i,children:[c.jsx("div",{className:"text-sm text-slate-700 leading-relaxed mb-4",children:"In the real UI, this button would link you to the historical data page showing the last 24 hours of data for the following telemetry points:"}),l.length>0?c.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4",children:[c.jsx("div",{className:"text-xs font-semibold text-slate-600 uppercase mb-2",children:"Telemetry Points"}),c.jsx("div",{className:"flex flex-col gap-2",children:l.map((r,a)=>c.jsx("div",{className:"font-mono text-sm text-emerald-600 bg-white border border-emerald-200 rounded px-3 py-2",children:r},a))})]}):c.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800",children:"No telemetry points configured for this setting."})]})}function sc({isOpen:e,onClose:n,title:t,payload:l,type:i="set"}){const r=i==="refresh"?c.jsx("span",{children:"⟳"}):c.jsx("span",{children:"📤"});return c.jsxs(Ms,{isOpen:e,onClose:n,title:t,icon:r,maxWidth:"xl",children:[c.jsx("div",{className:"text-sm text-slate-700 mb-3",children:"This is a preview of the command that would be sent:"}),c.jsx("pre",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800",children:JSON.stringify(l,null,2)})]})}function dc({point:e,helpTextMatch:n=!1,equipment:t}){const{formState:l,handleFieldChange:i,handleRefresh:r,handleSet:a}=kg(e,t),o=Ti(),s=Ti(),d=Ti(),u=Ti(),m=()=>o.open(),f=()=>s.open(),b=()=>{const L=r();u.open(L)},x=()=>{const L=a();d.open(L)},_=(typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service",g=e.readOnly||e.access==="R",p=g?"border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-400 bg-white text-slate-700 hover:bg-slate-50",h=e.entries.some(L=>{var S,E;return((S=L.telemetry)==null?void 0:S.model)&&((E=L.telemetry)==null?void 0:E.point)}),v=e.showHistory!==void 0?e.showHistory:h&&!_,C=_?e.showRefresh===!0:e.showRefresh!==!1,w=e.showSetButton!==void 0?e.showSetButton:!_;return c.jsxs("div",{className:"rounded-xl border border-slate-300 bg-white p-4 shadow-sm",children:[c.jsx(Ag,{point:e,readOnly:g,helpTextMatch:n,shouldShowHistory:v,shouldShowRefresh:C,shouldShowSetButton:w,setButtonAppearance:p,onHelpClick:m,onHistoryClick:f,onRefreshClick:b,onSetClick:x}),c.jsx(Fg,{point:e,formState:l,readOnly:g,isInvoke:_,setButtonAppearance:p,onChange:i,onInvokeClick:x}),c.jsx(Bg,{title:e.title,content:e.help||"",isOpen:o.isOpen,onClose:o.close}),c.jsx(Rg,{point:e,isOpen:s.isOpen,onClose:s.close}),c.jsx(sc,{title:"Command Preview",payload:d.data,isOpen:d.isOpen,onClose:d.close}),c.jsx(sc,{title:"Read Command Preview",payload:u.data,isOpen:u.isOpen,onClose:u.close,type:"refresh"})]})}function jg({subsection:e,searchQuery:n,pointMatchesSearch:t,equipment:l}){const[i,r]=T.useState(!e.collapsedByDefault),a=e.points.map(s=>({point:s,searchResult:t(s,n)})).filter(({searchResult:s})=>s.matches);if(a.length===0)return null;const o=n.trim()?!0:i;return e.collapsedByDefault?c.jsxs("div",{className:"border border-slate-300 bg-white rounded-xl shadow-sm mb-8",children:[c.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-2 text-left",onClick:()=>r(s=>!s),children:[c.jsx("span",{className:"text-slate-800 text-sm font-semibold uppercase tracking-wide",children:e.title||"Advanced"}),c.jsx("span",{className:"text-slate-500 text-xs",children:o?"▾":"▸"})]}),o&&c.jsx("div",{className:"p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:a.map(({point:s,searchResult:d})=>c.jsx(dc,{point:s,helpTextMatch:d.helpTextMatch,equipment:l},s.command_id))})]}):c.jsxs("div",{className:"mb-6",children:[e.title&&c.jsx("div",{className:"text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2",children:c.jsx("span",{children:e.title})}),c.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:a.map(({point:s,searchResult:d})=>c.jsx(dc,{point:s,helpTextMatch:d.helpTextMatch,equipment:l},s.command_id))})]})}function Ug({section:e,sectionId:n,searchQuery:t,pointMatchesSearch:l,equipment:i}){const[r,a]=T.useState(!0),o=e.subsections.some(s=>s.points.some(d=>l(d,t).matches));return t.trim()&&!o?null:c.jsxs("section",{className:"bg-white/0",id:n,children:[c.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors",onClick:()=>a(!r),children:[c.jsx("span",{children:e.sectionTitle}),c.jsx("span",{className:"text-slate-500 text-sm",children:r?"▾":"▸"})]}),r&&c.jsx("div",{children:e.subsections.map((s,d)=>c.jsx(jg,{subsection:s,searchQuery:t,pointMatchesSearch:l,equipment:i},d))})]})}function Wg({theme:e,themeId:n,searchQuery:t,pointMatchesSearch:l,equipment:i}){const[r,a]=T.useState(!0),o=e.sections.some(s=>s.subsections.some(d=>d.points.some(u=>l(u,t).matches)));return t.trim()&&!o?null:c.jsxs("div",{className:"bg-white/0",id:n,children:[c.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-2xl font-bold mb-6 border-b border-slate-300 pb-3 hover:text-emerald-600 transition-colors",onClick:()=>a(!r),children:[c.jsx("span",{children:e.themeName}),c.jsx("span",{className:"text-slate-500 text-lg",children:r?"▾":"▸"})]}),r&&c.jsx("div",{className:"flex flex-col gap-10",children:e.sections.map((s,d)=>{const u=`${n}-section-${d}`;return c.jsx(Ug,{section:s,sectionId:u,searchQuery:t,pointMatchesSearch:l,equipment:i},`${s.sectionTitle}-${d}`)})})]})}function Hg({themes:e,searchQuery:n,pointMatchesSearch:t,equipment:l}){return c.jsxs("div",{className:"flex flex-col gap-16",children:[e.map((i,r)=>{const a=`theme-${r}`;return c.jsx(Wg,{theme:i,themeId:a,searchQuery:n,pointMatchesSearch:t,equipment:l},`${i.themeName}-${r}`)}),!e.length&&c.jsx("div",{className:"text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60",children:"This page does not define any themes yet."})]})}function $g(e){var t,l,i,r,a,o,s;if(!e)return;if(!Array.isArray(e.themes)){console.error("[SchemaTest] page.themes is missing or not an array");return}e.themes.forEach((d,u)=>{if(!Array.isArray(d.sections)){console.error(`[SchemaTest] theme ${u} (${d.themeName}) has no sections array`);return}d.sections.forEach((m,f)=>{Array.isArray(m.subsections)||console.error(`[SchemaTest] theme ${u} / section ${f} (${m.sectionTitle}) has no subsections array`)}),d.sections.forEach((m,f)=>{var b;(b=m.subsections)==null||b.forEach((x,y)=>{if(!Array.isArray(x.points)){console.error(`[SchemaTest] theme ${u} / section ${f} / subsection ${y} (${x.title}) has no points array`);return}x.points.forEach((_,g)=>{if(!Array.isArray(_.entries)){console.error(`[SchemaTest] theme ${u} / section ${f} / subsection ${y} / point ${g} (${_.title}) has no entries array`);return}_.entries.forEach((p,h)=>{const v=["enum","String","Number"],C=p.dtype&&typeof p.dtype=="string"&&p.dtype.startsWith("bitfield");!v.includes(p.dtype)&&!C&&console.error(`[SchemaTest] entry ${p.name??h} in point ${_.title} has unsupported dtype ${p.dtype}`)})})})})});const n=((s=(o=(a=(r=(i=(l=(t=e.themes)==null?void 0:t[0])==null?void 0:l.sections)==null?void 0:i[0])==null?void 0:r.subsections)==null?void 0:a[0])==null?void 0:o.points)==null?void 0:s[0])||null;n&&(n.command_id||console.error("[SchemaTest] firstPoint.command_id missing"),n.protocol||console.error("[SchemaTest] firstPoint.protocol missing"))}const qg=Object.assign({"./themes/demo_rebuilt.json":sg}),Mm=Object.entries(qg).map(([e,n])=>{var r;const t=e.split("/").pop()??e,l=t.replace(/\.json$/i,""),i=((r=n.pageName)==null?void 0:r.trim())||l;return{id:l,label:i,filename:t,data:n}}).sort((e,n)=>e.label.localeCompare(n.label,void 0,{sensitivity:"base"})),zg=Mm.reduce((e,n)=>(e[n.id]=n.data,e),{});function Kg(){var p,h;const{pageRegistry:e,pageLookup:n,isLoading:t,loadError:l,themeFile:i}=cg(Mm,zg),r=((p=e[0])==null?void 0:p.id)??"",[a]=T.useState(r),[o,s]=T.useState(((h=Vi[0])==null?void 0:h.id)??""),d=ug(),{searchQuery:u,setSearchQuery:m,pointMatchesSearch:f}=mg(),b=T.useMemo(()=>new Date(Date.now()-15*60*1e3),[]),x=T.useMemo(()=>b.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),[b]),y=a&&n[a]||r&&n[r]||null,_=T.useMemo(()=>Vi.find(v=>v.id===o)||Vi[0],[o]);if(T.useEffect(()=>{$g(y)},[y]),t)return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsx("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:"Loading theme file..."})});if(l)return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700",children:[c.jsx("div",{className:"font-semibold mb-2",children:"Error loading theme file"}),c.jsx("div",{children:l}),c.jsxs("div",{className:"mt-4 text-xs text-slate-500",children:["File path: ",c.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5",children:i})]})]})});if(!y)return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:["No pages found in ",c.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"src/themes"}),". Add a JSON page file to get started."]})});const g=y.themes??[];return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsxs("div",{className:"max-w-[1400px] mx-auto flex gap-4",children:[c.jsx(fg,{themes:g,activeSection:d,selectedEquipmentId:o,onEquipmentChange:s,equipmentOptions:Vi}),c.jsxs("main",{className:"flex-1 flex flex-col gap-6",children:[c.jsx(pg,{searchQuery:u,onSearchChange:m,lastUpdatedLabel:x}),c.jsx(Hg,{themes:g,searchQuery:u,pointMatchesSearch:f,equipment:_})]})]})})}const Fs=Symbol.for("yaml.alias"),Go=Symbol.for("yaml.document"),Un=Symbol.for("yaml.map"),Fm=Symbol.for("yaml.pair"),un=Symbol.for("yaml.scalar"),ol=Symbol.for("yaml.seq"),ze=Symbol.for("yaml.node.type"),Qn=e=>!!e&&typeof e=="object"&&e[ze]===Fs,bt=e=>!!e&&typeof e=="object"&&e[ze]===Go,sl=e=>!!e&&typeof e=="object"&&e[ze]===Un,Q=e=>!!e&&typeof e=="object"&&e[ze]===Fm,H=e=>!!e&&typeof e=="object"&&e[ze]===un,dl=e=>!!e&&typeof e=="object"&&e[ze]===ol;function X(e){if(e&&typeof e=="object")switch(e[ze]){case Un:case ol:return!0}return!1}function ee(e){if(e&&typeof e=="object")switch(e[ze]){case Fs:case Un:case un:case ol:return!0}return!1}const Om=e=>(H(e)||X(e))&&!!e.anchor,Ee=Symbol("break visit"),Bm=Symbol("skip children"),cn=Symbol("remove node");function ht(e,n){const t=Rm(n);bt(e)?Ft(null,e.contents,t,Object.freeze([e]))===cn&&(e.contents=null):Ft(null,e,t,Object.freeze([]))}ht.BREAK=Ee;ht.SKIP=Bm;ht.REMOVE=cn;function Ft(e,n,t,l){const i=jm(e,n,t,l);if(ee(i)||Q(i))return Um(e,l,i),Ft(e,i,t,l);if(typeof i!="symbol"){if(X(n)){l=Object.freeze(l.concat(n));for(let r=0;r<n.items.length;++r){const a=Ft(r,n.items[r],t,l);if(typeof a=="number")r=a-1;else{if(a===Ee)return Ee;a===cn&&(n.items.splice(r,1),r-=1)}}}else if(Q(n)){l=Object.freeze(l.concat(n));const r=Ft("key",n.key,t,l);if(r===Ee)return Ee;r===cn&&(n.key=null);const a=Ft("value",n.value,t,l);if(a===Ee)return Ee;a===cn&&(n.value=null)}}return i}async function zr(e,n){const t=Rm(n);bt(e)?await Ot(null,e.contents,t,Object.freeze([e]))===cn&&(e.contents=null):await Ot(null,e,t,Object.freeze([]))}zr.BREAK=Ee;zr.SKIP=Bm;zr.REMOVE=cn;async function Ot(e,n,t,l){const i=await jm(e,n,t,l);if(ee(i)||Q(i))return Um(e,l,i),Ot(e,i,t,l);if(typeof i!="symbol"){if(X(n)){l=Object.freeze(l.concat(n));for(let r=0;r<n.items.length;++r){const a=await Ot(r,n.items[r],t,l);if(typeof a=="number")r=a-1;else{if(a===Ee)return Ee;a===cn&&(n.items.splice(r,1),r-=1)}}}else if(Q(n)){l=Object.freeze(l.concat(n));const r=await Ot("key",n.key,t,l);if(r===Ee)return Ee;r===cn&&(n.key=null);const a=await Ot("value",n.value,t,l);if(a===Ee)return Ee;a===cn&&(n.value=null)}}return i}function Rm(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function jm(e,n,t,l){var i,r,a,o,s;if(typeof t=="function")return t(e,n,l);if(sl(n))return(i=t.Map)==null?void 0:i.call(t,e,n,l);if(dl(n))return(r=t.Seq)==null?void 0:r.call(t,e,n,l);if(Q(n))return(a=t.Pair)==null?void 0:a.call(t,e,n,l);if(H(n))return(o=t.Scalar)==null?void 0:o.call(t,e,n,l);if(Qn(n))return(s=t.Alias)==null?void 0:s.call(t,e,n,l)}function Um(e,n,t){const l=n[n.length-1];if(X(l))l.items[e]=t;else if(Q(l))e==="key"?l.key=t:l.value=t;else if(bt(l))l.contents=t;else{const i=Qn(l)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const Qg={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Yg=e=>e.replace(/[!,[\]{}]/g,n=>Qg[n]);class Se{constructor(n,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Se.defaultYaml,n),this.tags=Object.assign({},Se.defaultTags,t)}clone(){const n=new Se(this.yaml,this.tags);return n.docStart=this.docStart,n}atDocument(){const n=new Se(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Se.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Se.defaultTags);break}return n}add(n,t){this.atNextDocument&&(this.yaml={explicit:Se.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Se.defaultTags),this.atNextDocument=!1);const l=n.trim().split(/[ \t]+/),i=l.shift();switch(i){case"%TAG":{if(l.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),l.length<2))return!1;const[r,a]=l;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,l.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=l;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(n,t){if(n==="!")return"!";if(n[0]!=="!")return t(`Not a valid tag: ${n}`),null;if(n[1]==="<"){const a=n.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${n} is invalid.`),null):(n[n.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,l,i]=n.match(/^(.*!)([^!]*)$/s);i||t(`The ${n} tag has no suffix`);const r=this.tags[l];if(r)try{return r+decodeURIComponent(i)}catch(a){return t(String(a)),null}return l==="!"?n:(t(`Could not resolve tag: ${n}`),null)}tagString(n){for(const[t,l]of Object.entries(this.tags))if(n.startsWith(l))return t+Yg(n.substring(l.length));return n[0]==="!"?n:`!<${n}>`}toString(n){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],l=Object.entries(this.tags);let i;if(n&&l.length>0&&ee(n.contents)){const r={};ht(n.contents,(a,o)=>{ee(o)&&o.tag&&(r[o.tag]=!0)}),i=Object.keys(r)}else i=[];for(const[r,a]of l)r==="!!"&&a==="tag:yaml.org,2002:"||(!n||i.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}Se.defaultYaml={explicit:!1,version:"1.2"};Se.defaultTags={"!!":"tag:yaml.org,2002:"};function Wm(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(t)}return!0}function Hm(e){const n=new Set;return ht(e,{Value(t,l){l.anchor&&n.add(l.anchor)}}),n}function $m(e,n){for(let t=1;;++t){const l=`${e}${t}`;if(!n.has(l))return l}}function Jg(e,n){const t=[],l=new Map;let i=null;return{onAnchor:r=>{t.push(r),i??(i=Hm(e));const a=$m(n,i);return i.add(a),a},setAnchors:()=>{for(const r of t){const a=l.get(r);if(typeof a=="object"&&a.anchor&&(H(a.node)||X(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:l}}function Bt(e,n,t,l){if(l&&typeof l=="object")if(Array.isArray(l))for(let i=0,r=l.length;i<r;++i){const a=l[i],o=Bt(e,l,String(i),a);o===void 0?delete l[i]:o!==a&&(l[i]=o)}else if(l instanceof Map)for(const i of Array.from(l.keys())){const r=l.get(i),a=Bt(e,l,i,r);a===void 0?l.delete(i):a!==r&&l.set(i,a)}else if(l instanceof Set)for(const i of Array.from(l)){const r=Bt(e,l,i,i);r===void 0?l.delete(i):r!==i&&(l.delete(i),l.add(r))}else for(const[i,r]of Object.entries(l)){const a=Bt(e,l,i,r);a===void 0?delete l[i]:a!==r&&(l[i]=a)}return e.call(n,t,l)}function He(e,n,t){if(Array.isArray(e))return e.map((l,i)=>He(l,String(i),t));if(e&&typeof e.toJSON=="function"){if(!t||!Om(e))return e.toJSON(n,t);const l={aliasCount:0,count:1,res:void 0};t.anchors.set(e,l),t.onCreate=r=>{l.res=r,delete t.onCreate};const i=e.toJSON(n,t);return t.onCreate&&t.onCreate(i),i}return typeof e=="bigint"&&!(t!=null&&t.keep)?Number(e):e}class Os{constructor(n){Object.defineProperty(this,ze,{value:n})}clone(){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(n.range=this.range.slice()),n}toJS(n,{mapAsMap:t,maxAliasCount:l,onAnchor:i,reviver:r}={}){if(!bt(n))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:n,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof l=="number"?l:100},o=He(this,"",a);if(typeof i=="function")for(const{count:s,res:d}of a.anchors.values())i(d,s);return typeof r=="function"?Bt(r,{"":o},"",o):o}}class Kr extends Os{constructor(n){super(Fs),this.source=n,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(n,t){let l;t!=null&&t.aliasResolveCache?l=t.aliasResolveCache:(l=[],ht(n,{Node:(r,a)=>{(Qn(a)||Om(a))&&l.push(a)}}),t&&(t.aliasResolveCache=l));let i;for(const r of l){if(r===this)break;r.anchor===this.source&&(i=r)}return i}toJSON(n,t){if(!t)return{source:this.source};const{anchors:l,doc:i,maxAliasCount:r}=t,a=this.resolve(i,t);if(!a){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}let o=l.get(a);if(o||(He(a,null,t),o=l.get(a)),!o||o.res===void 0){const s="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(s)}if(r>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Ji(i,a,l)),o.count*o.aliasCount>r)){const s="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(s)}return o.res}toString(n,t,l){const i=`*${this.source}`;if(n){if(Wm(this.source),n.options.verifyAliasOrder&&!n.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(n.implicitKey)return`${i} `}return i}}function Ji(e,n,t){if(Qn(n)){const l=n.resolve(e),i=t&&l&&t.get(l);return i?i.count*i.aliasCount:0}else if(X(n)){let l=0;for(const i of n.items){const r=Ji(e,i,t);r>l&&(l=r)}return l}else if(Q(n)){const l=Ji(e,n.key,t),i=Ji(e,n.value,t);return Math.max(l,i)}return 1}const qm=e=>!e||typeof e!="function"&&typeof e!="object";class D extends Os{constructor(n){super(un),this.value=n}toJSON(n,t){return t!=null&&t.keep?this.value:He(this.value,n,t)}toString(){return String(this.value)}}D.BLOCK_FOLDED="BLOCK_FOLDED";D.BLOCK_LITERAL="BLOCK_LITERAL";D.PLAIN="PLAIN";D.QUOTE_DOUBLE="QUOTE_DOUBLE";D.QUOTE_SINGLE="QUOTE_SINGLE";const Xg="tag:yaml.org,2002:";function Zg(e,n,t){if(n){const l=t.filter(r=>r.tag===n),i=l.find(r=>!r.format)??l[0];if(!i)throw new Error(`Tag ${n} not found`);return i}return t.find(l=>{var i;return((i=l.identify)==null?void 0:i.call(l,e))&&!l.format})}function ti(e,n,t){var m,f,b;if(bt(e)&&(e=e.contents),ee(e))return e;if(Q(e)){const x=(f=(m=t.schema[Un]).createNode)==null?void 0:f.call(m,t.schema,null,t);return x.items.push(e),x}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:l,onAnchor:i,onTagObj:r,schema:a,sourceObjects:o}=t;let s;if(l&&e&&typeof e=="object"){if(s=o.get(e),s)return s.anchor??(s.anchor=i(e)),new Kr(s.anchor);s={anchor:null,node:null},o.set(e,s)}n!=null&&n.startsWith("!!")&&(n=Xg+n.slice(2));let d=Zg(e,n,a.tags);if(!d){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const x=new D(e);return s&&(s.node=x),x}d=e instanceof Map?a[Un]:Symbol.iterator in Object(e)?a[ol]:a[Un]}r&&(r(d),delete t.onTagObj);const u=d!=null&&d.createNode?d.createNode(t.schema,e,t):typeof((b=d==null?void 0:d.nodeClass)==null?void 0:b.from)=="function"?d.nodeClass.from(t.schema,e,t):new D(e);return n?u.tag=n:d.default||(u.tag=d.tag),s&&(s.node=u),u}function Pr(e,n,t){let l=t;for(let i=n.length-1;i>=0;--i){const r=n[i];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=l,l=a}else l=new Map([[r,l]])}return ti(l,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const El=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class zm extends Os{constructor(n,t){super(n),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(n){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return n&&(t.schema=n),t.items=t.items.map(l=>ee(l)||Q(l)?l.clone(n):l),this.range&&(t.range=this.range.slice()),t}addIn(n,t){if(El(n))this.add(t);else{const[l,...i]=n,r=this.get(l,!0);if(X(r))r.addIn(i,t);else if(r===void 0&&this.schema)this.set(l,Pr(this.schema,i,t));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}deleteIn(n){const[t,...l]=n;if(l.length===0)return this.delete(t);const i=this.get(t,!0);if(X(i))return i.deleteIn(l);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${l}`)}getIn(n,t){const[l,...i]=n,r=this.get(l,!0);return i.length===0?!t&&H(r)?r.value:r:X(r)?r.getIn(i,t):void 0}hasAllNullValues(n){return this.items.every(t=>{if(!Q(t))return!1;const l=t.value;return l==null||n&&H(l)&&l.value==null&&!l.commentBefore&&!l.comment&&!l.tag})}hasIn(n){const[t,...l]=n;if(l.length===0)return this.has(t);const i=this.get(t,!0);return X(i)?i.hasIn(l):!1}setIn(n,t){const[l,...i]=n;if(i.length===0)this.set(l,t);else{const r=this.get(l,!0);if(X(r))r.setIn(i,t);else if(r===void 0&&this.schema)this.set(l,Pr(this.schema,i,t));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}}const eb=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function hn(e,n){return/^\n+$/.test(e)?e.substring(1):n?e.replace(/^(?! *$)/gm,n):e}const it=(e,n,t)=>e.endsWith(`
`)?hn(t,n):t.includes(`
`)?`
`+hn(t,n):(e.endsWith(" ")?"":" ")+t,Km="flow",Mo="block",Xi="quoted";function Qr(e,n,t="flow",{indentAtStart:l,lineWidth:i=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!i||i<0)return e;i<r&&(r=0);const s=Math.max(1+r,1+i-n.length);if(e.length<=s)return e;const d=[],u={};let m=i-n.length;typeof l=="number"&&(l>i-Math.max(2,r)?d.push(0):m=i-l);let f,b,x=!1,y=-1,_=-1,g=-1;t===Mo&&(y=cc(e,y,n.length),y!==-1&&(m=y+s));for(let h;h=e[y+=1];){if(t===Xi&&h==="\\"){switch(_=y,e[y+1]){case"x":y+=3;break;case"u":y+=5;break;case"U":y+=9;break;default:y+=1}g=y}if(h===`
`)t===Mo&&(y=cc(e,y,n.length)),m=y+n.length+s,f=void 0;else{if(h===" "&&b&&b!==" "&&b!==`
`&&b!=="	"){const v=e[y+1];v&&v!==" "&&v!==`
`&&v!=="	"&&(f=y)}if(y>=m)if(f)d.push(f),m=f+s,f=void 0;else if(t===Xi){for(;b===" "||b==="	";)b=h,h=e[y+=1],x=!0;const v=y>g+1?y-2:_-1;if(u[v])return e;d.push(v),u[v]=!0,m=v+s,f=void 0}else x=!0}b=h}if(x&&o&&o(),d.length===0)return e;a&&a();let p=e.slice(0,d[0]);for(let h=0;h<d.length;++h){const v=d[h],C=d[h+1]||e.length;v===0?p=`
${n}${e.slice(0,C)}`:(t===Xi&&u[v]&&(p+=`${e[v]}\\`),p+=`
${n}${e.slice(v+1,C)}`)}return p}function cc(e,n,t){let l=n,i=n+1,r=e[i];for(;r===" "||r==="	";)if(n<i+t)r=e[++n];else{do r=e[++n];while(r&&r!==`
`);l=n,i=n+1,r=e[i]}return l}const Yr=(e,n)=>({indentAtStart:n?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Jr=e=>/^(%|---|\.\.\.)/m.test(e);function nb(e,n,t){if(!n||n<0)return!1;const l=n-t,i=e.length;if(i<=l)return!1;for(let r=0,a=0;r<i;++r)if(e[r]===`
`){if(r-a>l)return!0;if(a=r+1,i-a<=l)return!1}return!0}function Ol(e,n){const t=JSON.stringify(e);if(n.options.doubleQuotedAsJSON)return t;const{implicitKey:l}=n,i=n.options.doubleQuotedMinMultiLineLength,r=n.indent||(Jr(e)?"  ":"");let a="",o=0;for(let s=0,d=t[s];d;d=t[++s])if(d===" "&&t[s+1]==="\\"&&t[s+2]==="n"&&(a+=t.slice(o,s)+"\\ ",s+=1,o=s,d="\\"),d==="\\")switch(t[s+1]){case"u":{a+=t.slice(o,s);const u=t.substr(s+2,4);switch(u){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:u.substr(0,2)==="00"?a+="\\x"+u.substr(2):a+=t.substr(s,6)}s+=5,o=s+1}break;case"n":if(l||t[s+2]==='"'||t.length<i)s+=1;else{for(a+=t.slice(o,s)+`

`;t[s+2]==="\\"&&t[s+3]==="n"&&t[s+4]!=='"';)a+=`
`,s+=2;a+=r,t[s+2]===" "&&(a+="\\"),s+=1,o=s+1}break;default:s+=1}return a=o?a+t.slice(o):t,l?a:Qr(a,r,Xi,Yr(n,!1))}function Fo(e,n){if(n.options.singleQuote===!1||n.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Ol(e,n);const t=n.indent||(Jr(e)?"  ":""),l="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return n.implicitKey?l:Qr(l,t,Km,Yr(n,!1))}function Rt(e,n){const{singleQuote:t}=n.options;let l;if(t===!1)l=Ol;else{const i=e.includes('"'),r=e.includes("'");i&&!r?l=Fo:r&&!i?l=Ol:l=t?Fo:Ol}return l(e,n)}let Oo;try{Oo=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Oo=/\n+(?!\n|$)/g}function Zi({comment:e,type:n,value:t},l,i,r){const{blockQuote:a,commentString:o,lineWidth:s}=l.options;if(!a||/\n[\t ]+$/.test(t))return Rt(t,l);const d=l.indent||(l.forceBlockIndent||Jr(t)?"  ":""),u=a==="literal"?!0:a==="folded"||n===D.BLOCK_FOLDED?!1:n===D.BLOCK_LITERAL?!0:!nb(t,s,d.length);if(!t)return u?`|
`:`>
`;let m,f;for(f=t.length;f>0;--f){const C=t[f-1];if(C!==`
`&&C!=="	"&&C!==" ")break}let b=t.substring(f);const x=b.indexOf(`
`);x===-1?m="-":t===b||x!==b.length-1?(m="+",r&&r()):m="",b&&(t=t.slice(0,-b.length),b[b.length-1]===`
`&&(b=b.slice(0,-1)),b=b.replace(Oo,`$&${d}`));let y=!1,_,g=-1;for(_=0;_<t.length;++_){const C=t[_];if(C===" ")y=!0;else if(C===`
`)g=_;else break}let p=t.substring(0,g<_?g+1:_);p&&(t=t.substring(p.length),p=p.replace(/\n+/g,`$&${d}`));let v=(y?d?"2":"1":"")+m;if(e&&(v+=" "+o(e.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){const C=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${d}`);let w=!1;const L=Yr(l,!0);a!=="folded"&&n!==D.BLOCK_FOLDED&&(L.onOverflow=()=>{w=!0});const S=Qr(`${p}${C}${b}`,d,Mo,L);if(!w)return`>${v}
${d}${S}`}return t=t.replace(/\n+/g,`$&${d}`),`|${v}
${d}${p}${t}${b}`}function tb(e,n,t,l){const{type:i,value:r}=e,{actualString:a,implicitKey:o,indent:s,indentStep:d,inFlow:u}=n;if(o&&r.includes(`
`)||u&&/[[\]{},]/.test(r))return Rt(r,n);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||u||!r.includes(`
`)?Rt(r,n):Zi(e,n,t,l);if(!o&&!u&&i!==D.PLAIN&&r.includes(`
`))return Zi(e,n,t,l);if(Jr(r)){if(s==="")return n.forceBlockIndent=!0,Zi(e,n,t,l);if(o&&s===d)return Rt(r,n)}const m=r.replace(/\n+/g,`$&
${s}`);if(a){const f=y=>{var _;return y.default&&y.tag!=="tag:yaml.org,2002:str"&&((_=y.test)==null?void 0:_.test(m))},{compat:b,tags:x}=n.doc.schema;if(x.some(f)||b!=null&&b.some(f))return Rt(r,n)}return o?m:Qr(m,s,Km,Yr(n,!1))}function ui(e,n,t,l){const{implicitKey:i,inFlow:r}=n,a=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:o}=e;o!==D.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=D.QUOTE_DOUBLE);const s=u=>{switch(u){case D.BLOCK_FOLDED:case D.BLOCK_LITERAL:return i||r?Rt(a.value,n):Zi(a,n,t,l);case D.QUOTE_DOUBLE:return Ol(a.value,n);case D.QUOTE_SINGLE:return Fo(a.value,n);case D.PLAIN:return tb(a,n,t,l);default:return null}};let d=s(o);if(d===null){const{defaultKeyType:u,defaultStringType:m}=n.options,f=i&&u||m;if(d=s(f),d===null)throw new Error(`Unsupported default string type ${f}`)}return d}function Qm(e,n){const t=Object.assign({blockQuote:!0,commentString:eb,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,n);let l;switch(t.collectionStyle){case"block":l=!1;break;case"flow":l=!0;break;default:l=null}return{anchors:new Set,doc:e,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:l,options:t}}function lb(e,n){var i;if(n.tag){const r=e.filter(a=>a.tag===n.tag);if(r.length>0)return r.find(a=>a.format===n.format)??r[0]}let t,l;if(H(n)){l=n.value;let r=e.filter(a=>{var o;return(o=a.identify)==null?void 0:o.call(a,l)});if(r.length>1){const a=r.filter(o=>o.test);a.length>0&&(r=a)}t=r.find(a=>a.format===n.format)??r.find(a=>!a.format)}else l=n,t=e.find(r=>r.nodeClass&&l instanceof r.nodeClass);if(!t){const r=((i=l==null?void 0:l.constructor)==null?void 0:i.name)??(l===null?"null":typeof l);throw new Error(`Tag not resolved for ${r} value`)}return t}function ib(e,n,{anchors:t,doc:l}){if(!l.directives)return"";const i=[],r=(H(e)||X(e))&&e.anchor;r&&Wm(r)&&(t.add(r),i.push(`&${r}`));const a=e.tag??(n.default?null:n.tag);return a&&i.push(l.directives.tagString(a)),i.join(" ")}function tl(e,n,t,l){var s;if(Q(e))return e.toString(n,t,l);if(Qn(e)){if(n.doc.directives)return e.toString(n);if((s=n.resolvedAliases)!=null&&s.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");n.resolvedAliases?n.resolvedAliases.add(e):n.resolvedAliases=new Set([e]),e=e.resolve(n.doc)}let i;const r=ee(e)?e:n.doc.createNode(e,{onTagObj:d=>i=d});i??(i=lb(n.doc.schema.tags,r));const a=ib(r,i,n);a.length>0&&(n.indentAtStart=(n.indentAtStart??0)+a.length+1);const o=typeof i.stringify=="function"?i.stringify(r,n,t,l):H(r)?ui(r,n,t,l):r.toString(n,t,l);return a?H(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${n.indent}${o}`:o}function rb({key:e,value:n},t,l,i){const{allNullValues:r,doc:a,indent:o,indentStep:s,options:{commentString:d,indentSeq:u,simpleKeys:m}}=t;let f=ee(e)&&e.comment||null;if(m){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(X(e)||!ee(e)&&typeof e=="object"){const L="With simple keys, collection cannot be used as a key value";throw new Error(L)}}let b=!m&&(!e||f&&n==null&&!t.inFlow||X(e)||(H(e)?e.type===D.BLOCK_FOLDED||e.type===D.BLOCK_LITERAL:typeof e=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!b&&(m||!r),indent:o+s});let x=!1,y=!1,_=tl(e,t,()=>x=!0,()=>y=!0);if(!b&&!t.inFlow&&_.length>1024){if(m)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");b=!0}if(t.inFlow){if(r||n==null)return x&&l&&l(),_===""?"?":b?`? ${_}`:_}else if(r&&!m||n==null&&b)return _=`? ${_}`,f&&!x?_+=it(_,t.indent,d(f)):y&&i&&i(),_;x&&(f=null),b?(f&&(_+=it(_,t.indent,d(f))),_=`? ${_}
${o}:`):(_=`${_}:`,f&&(_+=it(_,t.indent,d(f))));let g,p,h;ee(n)?(g=!!n.spaceBefore,p=n.commentBefore,h=n.comment):(g=!1,p=null,h=null,n&&typeof n=="object"&&(n=a.createNode(n))),t.implicitKey=!1,!b&&!f&&H(n)&&(t.indentAtStart=_.length+1),y=!1,!u&&s.length>=2&&!t.inFlow&&!b&&dl(n)&&!n.flow&&!n.tag&&!n.anchor&&(t.indent=t.indent.substring(2));let v=!1;const C=tl(n,t,()=>v=!0,()=>y=!0);let w=" ";if(f||g||p){if(w=g?`
`:"",p){const L=d(p);w+=`
${hn(L,t.indent)}`}C===""&&!t.inFlow?w===`
`&&(w=`

`):w+=`
${t.indent}`}else if(!b&&X(n)){const L=C[0],S=C.indexOf(`
`),E=S!==-1,A=t.inFlow??n.flow??n.items.length===0;if(E||!A){let R=!1;if(E&&(L==="&"||L==="!")){let j=C.indexOf(" ");L==="&"&&j!==-1&&j<S&&C[j+1]==="!"&&(j=C.indexOf(" ",j+1)),(j===-1||S<j)&&(R=!0)}R||(w=`
${t.indent}`)}}else(C===""||C[0]===`
`)&&(w="");return _+=w+C,t.inFlow?v&&l&&l():h&&!v?_+=it(_,t.indent,d(h)):y&&i&&i(),_}function Ym(e,n){(e==="debug"||e==="warn")&&console.warn(n)}const Di="<<",xn={identify:e=>e===Di||typeof e=="symbol"&&e.description===Di,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new D(Symbol(Di)),{addToJSMap:Jm}),stringify:()=>Di},ab=(e,n)=>(xn.identify(n)||H(n)&&(!n.type||n.type===D.PLAIN)&&xn.identify(n.value))&&(e==null?void 0:e.doc.schema.tags.some(t=>t.tag===xn.tag&&t.default));function Jm(e,n,t){if(t=e&&Qn(t)?t.resolve(e.doc):t,dl(t))for(const l of t.items)Ta(e,n,l);else if(Array.isArray(t))for(const l of t)Ta(e,n,l);else Ta(e,n,t)}function Ta(e,n,t){const l=e&&Qn(t)?t.resolve(e.doc):t;if(!sl(l))throw new Error("Merge sources must be maps or map aliases");const i=l.toJSON(null,e,Map);for(const[r,a]of i)n instanceof Map?n.has(r)||n.set(r,a):n instanceof Set?n.add(r):Object.prototype.hasOwnProperty.call(n,r)||Object.defineProperty(n,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return n}function Xm(e,n,{key:t,value:l}){if(ee(t)&&t.addToJSMap)t.addToJSMap(e,n,l);else if(ab(e,t))Jm(e,n,l);else{const i=He(t,"",e);if(n instanceof Map)n.set(i,He(l,i,e));else if(n instanceof Set)n.add(i);else{const r=ob(t,i,e),a=He(l,r,e);r in n?Object.defineProperty(n,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):n[r]=a}}return n}function ob(e,n,t){if(n===null)return"";if(typeof n!="object")return String(n);if(ee(e)&&(t!=null&&t.doc)){const l=Qm(t.doc,{});l.anchors=new Set;for(const r of t.anchors.keys())l.anchors.add(r.anchor);l.inFlow=!0,l.inStringifyKey=!0;const i=e.toString(l);if(!t.mapKeyWarned){let r=JSON.stringify(i);r.length>40&&(r=r.substring(0,36)+'..."'),Ym(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(n)}function Bs(e,n,t){const l=ti(e,void 0,t),i=ti(n,void 0,t);return new _e(l,i)}class _e{constructor(n,t=null){Object.defineProperty(this,ze,{value:Fm}),this.key=n,this.value=t}clone(n){let{key:t,value:l}=this;return ee(t)&&(t=t.clone(n)),ee(l)&&(l=l.clone(n)),new _e(t,l)}toJSON(n,t){const l=t!=null&&t.mapAsMap?new Map:{};return Xm(t,l,this)}toString(n,t,l){return n!=null&&n.doc?rb(this,n,t,l):JSON.stringify(this)}}function Zm(e,n,t){return(n.inFlow??e.flow?db:sb)(e,n,t)}function sb({comment:e,items:n},t,{blockItemPrefix:l,flowChars:i,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:s,options:{commentString:d}}=t,u=Object.assign({},t,{indent:r,type:null});let m=!1;const f=[];for(let x=0;x<n.length;++x){const y=n[x];let _=null;if(ee(y))!m&&y.spaceBefore&&f.push(""),Er(t,f,y.commentBefore,m),y.comment&&(_=y.comment);else if(Q(y)){const p=ee(y.key)?y.key:null;p&&(!m&&p.spaceBefore&&f.push(""),Er(t,f,p.commentBefore,m))}m=!1;let g=tl(y,u,()=>_=null,()=>m=!0);_&&(g+=it(g,r,d(_))),m&&_&&(m=!1),f.push(l+g)}let b;if(f.length===0)b=i.start+i.end;else{b=f[0];for(let x=1;x<f.length;++x){const y=f[x];b+=y?`
${s}${y}`:`
`}}return e?(b+=`
`+hn(d(e),s),o&&o()):m&&a&&a(),b}function db({items:e},n,{flowChars:t,itemIndent:l}){const{indent:i,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=n;l+=r;const s=Object.assign({},n,{indent:l,inFlow:!0,type:null});let d=!1,u=0;const m=[];for(let x=0;x<e.length;++x){const y=e[x];let _=null;if(ee(y))y.spaceBefore&&m.push(""),Er(n,m,y.commentBefore,!1),y.comment&&(_=y.comment);else if(Q(y)){const p=ee(y.key)?y.key:null;p&&(p.spaceBefore&&m.push(""),Er(n,m,p.commentBefore,!1),p.comment&&(d=!0));const h=ee(y.value)?y.value:null;h?(h.comment&&(_=h.comment),h.commentBefore&&(d=!0)):y.value==null&&(p!=null&&p.comment)&&(_=p.comment)}_&&(d=!0);let g=tl(y,s,()=>_=null);x<e.length-1&&(g+=","),_&&(g+=it(g,l,o(_))),!d&&(m.length>u||g.includes(`
`))&&(d=!0),m.push(g),u=m.length}const{start:f,end:b}=t;if(m.length===0)return f+b;if(!d){const x=m.reduce((y,_)=>y+_.length+2,2);d=n.options.lineWidth>0&&x>n.options.lineWidth}if(d){let x=f;for(const y of m)x+=y?`
${r}${i}${y}`:`
`;return`${x}
${i}${b}`}else return`${f}${a}${m.join(" ")}${a}${b}`}function Er({indent:e,options:{commentString:n}},t,l,i){if(l&&i&&(l=l.replace(/^\n+/,"")),l){const r=hn(n(l),e);t.push(r.trimStart())}}function rt(e,n){const t=H(n)?n.value:n;for(const l of e)if(Q(l)&&(l.key===n||l.key===t||H(l.key)&&l.key.value===t))return l}class De extends zm{static get tagName(){return"tag:yaml.org,2002:map"}constructor(n){super(Un,n),this.items=[]}static from(n,t,l){const{keepUndefined:i,replacer:r}=l,a=new this(n),o=(s,d)=>{if(typeof r=="function")d=r.call(t,s,d);else if(Array.isArray(r)&&!r.includes(s))return;(d!==void 0||i)&&a.items.push(Bs(s,d,l))};if(t instanceof Map)for(const[s,d]of t)o(s,d);else if(t&&typeof t=="object")for(const s of Object.keys(t))o(s,t[s]);return typeof n.sortMapEntries=="function"&&a.items.sort(n.sortMapEntries),a}add(n,t){var a;let l;Q(n)?l=n:!n||typeof n!="object"||!("key"in n)?l=new _e(n,n==null?void 0:n.value):l=new _e(n.key,n.value);const i=rt(this.items,l.key),r=(a=this.schema)==null?void 0:a.sortMapEntries;if(i){if(!t)throw new Error(`Key ${l.key} already set`);H(i.value)&&qm(l.value)?i.value.value=l.value:i.value=l.value}else if(r){const o=this.items.findIndex(s=>r(l,s)<0);o===-1?this.items.push(l):this.items.splice(o,0,l)}else this.items.push(l)}delete(n){const t=rt(this.items,n);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(n,t){const l=rt(this.items,n),i=l==null?void 0:l.value;return(!t&&H(i)?i.value:i)??void 0}has(n){return!!rt(this.items,n)}set(n,t){this.add(new _e(n,t),!0)}toJSON(n,t,l){const i=l?new l:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(i);for(const r of this.items)Xm(t,i,r);return i}toString(n,t,l){if(!n)return JSON.stringify(this);for(const i of this.items)if(!Q(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!n.allNullValues&&this.hasAllNullValues(!1)&&(n=Object.assign({},n,{allNullValues:!0})),Zm(this,n,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:n.indent||"",onChompKeep:l,onComment:t})}}const cl={collection:"map",default:!0,nodeClass:De,tag:"tag:yaml.org,2002:map",resolve(e,n){return sl(e)||n("Expected a mapping for this tag"),e},createNode:(e,n,t)=>De.from(e,n,t)};class $n extends zm{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(n){super(ol,n),this.items=[]}add(n){this.items.push(n)}delete(n){const t=Gi(n);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(n,t){const l=Gi(n);if(typeof l!="number")return;const i=this.items[l];return!t&&H(i)?i.value:i}has(n){const t=Gi(n);return typeof t=="number"&&t<this.items.length}set(n,t){const l=Gi(n);if(typeof l!="number")throw new Error(`Expected a valid index, not ${n}.`);const i=this.items[l];H(i)&&qm(t)?i.value=t:this.items[l]=t}toJSON(n,t){const l=[];t!=null&&t.onCreate&&t.onCreate(l);let i=0;for(const r of this.items)l.push(He(r,String(i++),t));return l}toString(n,t,l){return n?Zm(this,n,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(n.indent||"")+"  ",onChompKeep:l,onComment:t}):JSON.stringify(this)}static from(n,t,l){const{replacer:i}=l,r=new this(n);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof i=="function"){const s=t instanceof Set?o:String(a++);o=i.call(t,s,o)}r.items.push(ti(o,void 0,l))}}return r}}function Gi(e){let n=H(e)?e.value:e;return n&&typeof n=="string"&&(n=Number(n)),typeof n=="number"&&Number.isInteger(n)&&n>=0?n:null}const ul={collection:"seq",default:!0,nodeClass:$n,tag:"tag:yaml.org,2002:seq",resolve(e,n){return dl(e)||n("Expected a sequence for this tag"),e},createNode:(e,n,t)=>$n.from(e,n,t)},Xr={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,n,t,l){return n=Object.assign({actualString:!0},n),ui(e,n,t,l)}},Zr={identify:e=>e==null,createNode:()=>new D(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new D(null),stringify:({source:e},n)=>typeof e=="string"&&Zr.test.test(e)?e:n.options.nullStr},Rs={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new D(e[0]==="t"||e[0]==="T"),stringify({source:e,value:n},t){if(e&&Rs.test.test(e)){const l=e[0]==="t"||e[0]==="T";if(n===l)return e}return n?t.options.trueStr:t.options.falseStr}};function tn({format:e,minFractionDigits:n,tag:t,value:l}){if(typeof l=="bigint")return String(l);const i=typeof l=="number"?l:Number(l);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let r=JSON.stringify(l);if(!e&&n&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(r)){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=n-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const ef={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:tn},nf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const n=Number(e.value);return isFinite(n)?n.toExponential():tn(e)}},tf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const n=new D(parseFloat(e)),t=e.indexOf(".");return t!==-1&&e[e.length-1]==="0"&&(n.minFractionDigits=e.length-t-1),n},stringify:tn},ea=e=>typeof e=="bigint"||Number.isInteger(e),js=(e,n,t,{intAsBigInt:l})=>l?BigInt(e):parseInt(e.substring(n),t);function lf(e,n,t){const{value:l}=e;return ea(l)&&l>=0?t+l.toString(n):tn(e)}const rf={identify:e=>ea(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,n,t)=>js(e,2,8,t),stringify:e=>lf(e,8,"0o")},af={identify:ea,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,n,t)=>js(e,0,10,t),stringify:tn},of={identify:e=>ea(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,n,t)=>js(e,2,16,t),stringify:e=>lf(e,16,"0x")},cb=[cl,ul,Xr,Zr,Rs,rf,af,of,ef,nf,tf];function uc(e){return typeof e=="bigint"||Number.isInteger(e)}const Mi=({value:e})=>JSON.stringify(e),ub=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Mi},{identify:e=>e==null,createNode:()=>new D(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Mi},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:Mi},{identify:uc,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,n,{intAsBigInt:t})=>t?BigInt(e):parseInt(e,10),stringify:({value:e})=>uc(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Mi}],mb={default:!0,tag:"",test:/^/,resolve(e,n){return n(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},fb=[cl,ul].concat(ub,mb),Us={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,n){if(typeof atob=="function"){const t=atob(e.replace(/[\n\r]/g,"")),l=new Uint8Array(t.length);for(let i=0;i<t.length;++i)l[i]=t.charCodeAt(i);return l}else return n("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:n,value:t},l,i,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let s="";for(let d=0;d<a.length;++d)s+=String.fromCharCode(a[d]);o=btoa(s)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(n??(n=D.BLOCK_LITERAL),n!==D.QUOTE_DOUBLE){const s=Math.max(l.options.lineWidth-l.indent.length,l.options.minContentWidth),d=Math.ceil(o.length/s),u=new Array(d);for(let m=0,f=0;m<d;++m,f+=s)u[m]=o.substr(f,s);o=u.join(n===D.BLOCK_LITERAL?`
`:" ")}return ui({comment:e,type:n,value:o},l,i,r)}};function sf(e,n){if(dl(e))for(let t=0;t<e.items.length;++t){let l=e.items[t];if(!Q(l)){if(sl(l)){l.items.length>1&&n("Each pair must have its own sequence indicator");const i=l.items[0]||new _e(new D(null));if(l.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${l.commentBefore}
${i.key.commentBefore}`:l.commentBefore),l.comment){const r=i.value??i.key;r.comment=r.comment?`${l.comment}
${r.comment}`:l.comment}l=i}e.items[t]=Q(l)?l:new _e(l)}}else n("Expected a sequence for this tag");return e}function df(e,n,t){const{replacer:l}=t,i=new $n(e);i.tag="tag:yaml.org,2002:pairs";let r=0;if(n&&Symbol.iterator in Object(n))for(let a of n){typeof l=="function"&&(a=l.call(n,String(r++),a));let o,s;if(Array.isArray(a))if(a.length===2)o=a[0],s=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const d=Object.keys(a);if(d.length===1)o=d[0],s=a[o];else throw new TypeError(`Expected tuple with one key, not ${d.length} keys`)}else o=a;i.items.push(Bs(o,s,t))}return i}const Ws={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:sf,createNode:df};class zt extends $n{constructor(){super(),this.add=De.prototype.add.bind(this),this.delete=De.prototype.delete.bind(this),this.get=De.prototype.get.bind(this),this.has=De.prototype.has.bind(this),this.set=De.prototype.set.bind(this),this.tag=zt.tag}toJSON(n,t){if(!t)return super.toJSON(n);const l=new Map;t!=null&&t.onCreate&&t.onCreate(l);for(const i of this.items){let r,a;if(Q(i)?(r=He(i.key,"",t),a=He(i.value,r,t)):r=He(i,"",t),l.has(r))throw new Error("Ordered maps must not include duplicate keys");l.set(r,a)}return l}static from(n,t,l){const i=df(n,t,l),r=new this;return r.items=i.items,r}}zt.tag="tag:yaml.org,2002:omap";const Hs={collection:"seq",identify:e=>e instanceof Map,nodeClass:zt,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,n){const t=sf(e,n),l=[];for(const{key:i}of t.items)H(i)&&(l.includes(i.value)?n(`Ordered maps must not include duplicate keys: ${i.value}`):l.push(i.value));return Object.assign(new zt,t)},createNode:(e,n,t)=>zt.from(e,n,t)};function cf({value:e,source:n},t){return n&&(e?uf:mf).test.test(n)?n:e?t.options.trueStr:t.options.falseStr}const uf={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new D(!0),stringify:cf},mf={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new D(!1),stringify:cf},pb={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:tn},yb={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const n=Number(e.value);return isFinite(n)?n.toExponential():tn(e)}},gb={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const n=new D(parseFloat(e.replace(/_/g,""))),t=e.indexOf(".");if(t!==-1){const l=e.substring(t+1).replace(/_/g,"");l[l.length-1]==="0"&&(n.minFractionDigits=l.length)}return n},stringify:tn},mi=e=>typeof e=="bigint"||Number.isInteger(e);function na(e,n,t,{intAsBigInt:l}){const i=e[0];if((i==="-"||i==="+")&&(n+=1),e=e.substring(n).replace(/_/g,""),l){switch(t){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const a=BigInt(e);return i==="-"?BigInt(-1)*a:a}const r=parseInt(e,t);return i==="-"?-1*r:r}function $s(e,n,t){const{value:l}=e;if(mi(l)){const i=l.toString(n);return l<0?"-"+t+i.substr(1):t+i}return tn(e)}const bb={identify:mi,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,n,t)=>na(e,2,2,t),stringify:e=>$s(e,2,"0b")},hb={identify:mi,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,n,t)=>na(e,1,8,t),stringify:e=>$s(e,8,"0")},_b={identify:mi,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,n,t)=>na(e,0,10,t),stringify:tn},xb={identify:mi,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,n,t)=>na(e,2,16,t),stringify:e=>$s(e,16,"0x")};class Kt extends De{constructor(n){super(n),this.tag=Kt.tag}add(n){let t;Q(n)?t=n:n&&typeof n=="object"&&"key"in n&&"value"in n&&n.value===null?t=new _e(n.key,null):t=new _e(n,null),rt(this.items,t.key)||this.items.push(t)}get(n,t){const l=rt(this.items,n);return!t&&Q(l)?H(l.key)?l.key.value:l.key:l}set(n,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const l=rt(this.items,n);l&&!t?this.items.splice(this.items.indexOf(l),1):!l&&t&&this.items.push(new _e(n))}toJSON(n,t){return super.toJSON(n,t,Set)}toString(n,t,l){if(!n)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},n,{allNullValues:!0}),t,l);throw new Error("Set items must all have null values")}static from(n,t,l){const{replacer:i}=l,r=new this(n);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof i=="function"&&(a=i.call(t,a,a)),r.items.push(Bs(a,null,l));return r}}Kt.tag="tag:yaml.org,2002:set";const qs={collection:"map",identify:e=>e instanceof Set,nodeClass:Kt,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,n,t)=>Kt.from(e,n,t),resolve(e,n){if(sl(e)){if(e.hasAllNullValues(!0))return Object.assign(new Kt,e);n("Set items must all have null values")}else n("Expected a mapping for this tag");return e}};function zs(e,n){const t=e[0],l=t==="-"||t==="+"?e.substring(1):e,i=a=>n?BigInt(a):Number(a),r=l.replace(/_/g,"").split(":").reduce((a,o)=>a*i(60)+i(o),i(0));return t==="-"?i(-1)*r:r}function ff(e){let{value:n}=e,t=a=>a;if(typeof n=="bigint")t=a=>BigInt(a);else if(isNaN(n)||!isFinite(n))return tn(e);let l="";n<0&&(l="-",n*=t(-1));const i=t(60),r=[n%i];return n<60?r.unshift(0):(n=(n-r[0])/i,r.unshift(n%i),n>=60&&(n=(n-r[0])/i,r.unshift(n))),l+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const pf={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,n,{intAsBigInt:t})=>zs(e,t),stringify:ff},yf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>zs(e,!1),stringify:ff},ta={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const n=e.match(ta.test);if(!n)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,l,i,r,a,o]=n.map(Number),s=n[7]?Number((n[7]+"00").substr(1,3)):0;let d=Date.UTC(t,l-1,i,r||0,a||0,o||0,s);const u=n[8];if(u&&u!=="Z"){let m=zs(u,!1);Math.abs(m)<30&&(m*=60),d-=6e4*m}return new Date(d)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},mc=[cl,ul,Xr,Zr,uf,mf,bb,hb,_b,xb,pb,yb,gb,Us,xn,Hs,Ws,qs,pf,yf,ta],fc=new Map([["core",cb],["failsafe",[cl,ul,Xr]],["json",fb],["yaml11",mc],["yaml-1.1",mc]]),pc={binary:Us,bool:Rs,float:tf,floatExp:nf,floatNaN:ef,floatTime:yf,int:af,intHex:of,intOct:rf,intTime:pf,map:cl,merge:xn,null:Zr,omap:Hs,pairs:Ws,seq:ul,set:qs,timestamp:ta},vb={"tag:yaml.org,2002:binary":Us,"tag:yaml.org,2002:merge":xn,"tag:yaml.org,2002:omap":Hs,"tag:yaml.org,2002:pairs":Ws,"tag:yaml.org,2002:set":qs,"tag:yaml.org,2002:timestamp":ta};function Da(e,n,t){const l=fc.get(n);if(l&&!e)return t&&!l.includes(xn)?l.concat(xn):l.slice();let i=l;if(!i)if(Array.isArray(e))i=[];else{const r=Array.from(fc.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${n}"; use one of ${r} or define customTags array`)}if(Array.isArray(e))for(const r of e)i=i.concat(r);else typeof e=="function"&&(i=e(i.slice()));return t&&(i=i.concat(xn)),i.reduce((r,a)=>{const o=typeof a=="string"?pc[a]:a;if(!o){const s=JSON.stringify(a),d=Object.keys(pc).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${s}; use one of ${d}`)}return r.includes(o)||r.push(o),r},[])}const wb=(e,n)=>e.key<n.key?-1:e.key>n.key?1:0;class la{constructor({compat:n,customTags:t,merge:l,resolveKnownTags:i,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(n)?Da(n,"compat"):n?Da(null,n):null,this.name=typeof r=="string"&&r||"core",this.knownTags=i?vb:{},this.tags=Da(t,this.name,l),this.toStringOptions=o??null,Object.defineProperty(this,Un,{value:cl}),Object.defineProperty(this,un,{value:Xr}),Object.defineProperty(this,ol,{value:ul}),this.sortMapEntries=typeof a=="function"?a:a===!0?wb:null}clone(){const n=Object.create(la.prototype,Object.getOwnPropertyDescriptors(this));return n.tags=this.tags.slice(),n}}function Sb(e,n){var s;const t=[];let l=n.directives===!0;if(n.directives!==!1&&e.directives){const d=e.directives.toString(e);d?(t.push(d),l=!0):e.directives.docStart&&(l=!0)}l&&t.push("---");const i=Qm(e,n),{commentString:r}=i.options;if(e.commentBefore){t.length!==1&&t.unshift("");const d=r(e.commentBefore);t.unshift(hn(d,""))}let a=!1,o=null;if(e.contents){if(ee(e.contents)){if(e.contents.spaceBefore&&l&&t.push(""),e.contents.commentBefore){const m=r(e.contents.commentBefore);t.push(hn(m,""))}i.forceBlockIndent=!!e.comment,o=e.contents.comment}const d=o?void 0:()=>a=!0;let u=tl(e.contents,i,()=>o=null,d);o&&(u+=it(u,"",r(o))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(tl(e.contents,i));if((s=e.directives)!=null&&s.docEnd)if(e.comment){const d=r(e.comment);d.includes(`
`)?(t.push("..."),t.push(hn(d,""))):t.push(`... ${d}`)}else t.push("...");else{let d=e.comment;d&&a&&(d=d.replace(/^\n+/,"")),d&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(hn(r(d),"")))}return t.join(`
`)+`
`}class ml{constructor(n,t,l){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ze,{value:Go});let i=null;typeof t=="function"||Array.isArray(t)?i=t:l===void 0&&t&&(l=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},l);this.options=r;let{version:a}=r;l!=null&&l._directives?(this.directives=l._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new Se({version:a}),this.setSchema(a,l),this.contents=n===void 0?null:this.createNode(n,i,l)}clone(){const n=Object.create(ml.prototype,{[ze]:{value:Go}});return n.commentBefore=this.commentBefore,n.comment=this.comment,n.errors=this.errors.slice(),n.warnings=this.warnings.slice(),n.options=Object.assign({},this.options),this.directives&&(n.directives=this.directives.clone()),n.schema=this.schema.clone(),n.contents=ee(this.contents)?this.contents.clone(n.schema):this.contents,this.range&&(n.range=this.range.slice()),n}add(n){wt(this.contents)&&this.contents.add(n)}addIn(n,t){wt(this.contents)&&this.contents.addIn(n,t)}createAlias(n,t){if(!n.anchor){const l=Hm(this);n.anchor=!t||l.has(t)?$m(t||"a",l):t}return new Kr(n.anchor)}createNode(n,t,l){let i;if(typeof t=="function")n=t.call({"":n},"",n),i=t;else if(Array.isArray(t)){const _=p=>typeof p=="number"||p instanceof String||p instanceof Number,g=t.filter(_).map(String);g.length>0&&(t=t.concat(g)),i=t}else l===void 0&&t&&(l=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:s,onTagObj:d,tag:u}=l??{},{onAnchor:m,setAnchors:f,sourceObjects:b}=Jg(this,a||"a"),x={aliasDuplicateObjects:r??!0,keepUndefined:s??!1,onAnchor:m,onTagObj:d,replacer:i,schema:this.schema,sourceObjects:b},y=ti(n,u,x);return o&&X(y)&&(y.flow=!0),f(),y}createPair(n,t,l={}){const i=this.createNode(n,null,l),r=this.createNode(t,null,l);return new _e(i,r)}delete(n){return wt(this.contents)?this.contents.delete(n):!1}deleteIn(n){return El(n)?this.contents==null?!1:(this.contents=null,!0):wt(this.contents)?this.contents.deleteIn(n):!1}get(n,t){return X(this.contents)?this.contents.get(n,t):void 0}getIn(n,t){return El(n)?!t&&H(this.contents)?this.contents.value:this.contents:X(this.contents)?this.contents.getIn(n,t):void 0}has(n){return X(this.contents)?this.contents.has(n):!1}hasIn(n){return El(n)?this.contents!==void 0:X(this.contents)?this.contents.hasIn(n):!1}set(n,t){this.contents==null?this.contents=Pr(this.schema,[n],t):wt(this.contents)&&this.contents.set(n,t)}setIn(n,t){El(n)?this.contents=t:this.contents==null?this.contents=Pr(this.schema,Array.from(n),t):wt(this.contents)&&this.contents.setIn(n,t)}setSchema(n,t={}){typeof n=="number"&&(n=String(n));let l;switch(n){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Se({version:"1.1"}),l={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=n:this.directives=new Se({version:n}),l={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,l=null;break;default:{const i=JSON.stringify(n);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(l)this.schema=new la(Object.assign(l,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:n,jsonArg:t,mapAsMap:l,maxAliasCount:i,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!n,mapAsMap:l===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},s=He(this.contents,t??"",o);if(typeof r=="function")for(const{count:d,res:u}of o.anchors.values())r(u,d);return typeof a=="function"?Bt(a,{"":s},"",s):s}toJSON(n,t){return this.toJS({json:!0,jsonArg:n,mapAsMap:!1,onAnchor:t})}toString(n={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in n&&(!Number.isInteger(n.indent)||Number(n.indent)<=0)){const t=JSON.stringify(n.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Sb(this,n)}}function wt(e){if(X(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Ks extends Error{constructor(n,t,l,i){super(),this.name=n,this.code=l,this.message=i,this.pos=t}}class at extends Ks{constructor(n,t,l){super("YAMLParseError",n,t,l)}}class gf extends Ks{constructor(n,t,l){super("YAMLWarning",n,t,l)}}const Nr=(e,n)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>n.linePos(o));const{line:l,col:i}=t.linePos[0];t.message+=` at line ${l}, column ${i}`;let r=i-1,a=e.substring(n.lineStarts[l-1],n.lineStarts[l]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),l>1&&/^ *$/.test(a.substring(0,r))){let o=e.substring(n.lineStarts[l-2],n.lineStarts[l-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const s=t.linePos[1];s&&s.line===l&&s.col>i&&(o=Math.max(1,Math.min(s.col-i,80-r)));const d=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${d}
`}};function ll(e,{flow:n,indicator:t,next:l,offset:i,onError:r,parentIndent:a,startOnNewline:o}){let s=!1,d=o,u=o,m="",f="",b=!1,x=!1,y=null,_=null,g=null,p=null,h=null,v=null,C=null;for(const S of e)switch(x&&(S.type!=="space"&&S.type!=="newline"&&S.type!=="comma"&&r(S.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),y&&(d&&S.type!=="comment"&&S.type!=="newline"&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),y=null),S.type){case"space":!n&&(t!=="doc-start"||(l==null?void 0:l.type)!=="flow-collection")&&S.source.includes("	")&&(y=S),u=!0;break;case"comment":{u||r(S,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const E=S.source.substring(1)||" ";m?m+=f+E:m=E,f="",d=!1;break}case"newline":d?m?m+=S.source:(!v||t!=="seq-item-ind")&&(s=!0):f+=S.source,d=!0,b=!0,(_||g)&&(p=S),u=!0;break;case"anchor":_&&r(S,"MULTIPLE_ANCHORS","A node can have at most one anchor"),S.source.endsWith(":")&&r(S.offset+S.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=S,C??(C=S.offset),d=!1,u=!1,x=!0;break;case"tag":{g&&r(S,"MULTIPLE_TAGS","A node can have at most one tag"),g=S,C??(C=S.offset),d=!1,u=!1,x=!0;break}case t:(_||g)&&r(S,"BAD_PROP_ORDER",`Anchors and tags must be after the ${S.source} indicator`),v&&r(S,"UNEXPECTED_TOKEN",`Unexpected ${S.source} in ${n??"collection"}`),v=S,d=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(n){h&&r(S,"UNEXPECTED_TOKEN",`Unexpected , in ${n}`),h=S,d=!1,u=!1;break}default:r(S,"UNEXPECTED_TOKEN",`Unexpected ${S.type} token`),d=!1,u=!1}const w=e[e.length-1],L=w?w.offset+w.source.length:i;return x&&l&&l.type!=="space"&&l.type!=="newline"&&l.type!=="comma"&&(l.type!=="scalar"||l.source!=="")&&r(l.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y&&(d&&y.indent<=a||(l==null?void 0:l.type)==="block-map"||(l==null?void 0:l.type)==="block-seq")&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:h,found:v,spaceBefore:s,comment:m,hasNewline:b,anchor:_,tag:g,newlineAfterProp:p,end:L,start:C??L}}function li(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const n of e.end)if(n.type==="newline")return!0}return!1;case"flow-collection":for(const n of e.items){for(const t of n.start)if(t.type==="newline")return!0;if(n.sep){for(const t of n.sep)if(t.type==="newline")return!0}if(li(n.key)||li(n.value))return!0}return!1;default:return!0}}function Bo(e,n,t){if((n==null?void 0:n.type)==="flow-collection"){const l=n.end[0];l.indent===e&&(l.source==="]"||l.source==="}")&&li(n)&&t(l,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function bf(e,n,t){const{uniqueKeys:l}=e.options;if(l===!1)return!1;const i=typeof l=="function"?l:(r,a)=>r===a||H(r)&&H(a)&&r.value===a.value;return n.some(r=>i(r.key,t))}const yc="All mapping items must start at the same column";function Cb({composeNode:e,composeEmptyNode:n},t,l,i,r){var u;const a=(r==null?void 0:r.nodeClass)??De,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let s=l.offset,d=null;for(const m of l.items){const{start:f,key:b,sep:x,value:y}=m,_=ll(f,{indicator:"explicit-key-ind",next:b??(x==null?void 0:x[0]),offset:s,onError:i,parentIndent:l.indent,startOnNewline:!0}),g=!_.found;if(g){if(b&&(b.type==="block-seq"?i(s,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in b&&b.indent!==l.indent&&i(s,"BAD_INDENT",yc)),!_.anchor&&!_.tag&&!x){d=_.end,_.comment&&(o.comment?o.comment+=`
`+_.comment:o.comment=_.comment);continue}(_.newlineAfterProp||li(b))&&i(b??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=_.found)==null?void 0:u.indent)!==l.indent&&i(s,"BAD_INDENT",yc);t.atKey=!0;const p=_.end,h=b?e(t,b,_,i):n(t,p,f,null,_,i);t.schema.compat&&Bo(l.indent,b,i),t.atKey=!1,bf(t,o.items,h)&&i(p,"DUPLICATE_KEY","Map keys must be unique");const v=ll(x??[],{indicator:"map-value-ind",next:y,offset:h.range[2],onError:i,parentIndent:l.indent,startOnNewline:!b||b.type==="block-scalar"});if(s=v.end,v.found){g&&((y==null?void 0:y.type)==="block-map"&&!v.hasNewline&&i(s,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&_.start<v.found.offset-1024&&i(h.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const C=y?e(t,y,v,i):n(t,s,x,null,v,i);t.schema.compat&&Bo(l.indent,y,i),s=C.range[2];const w=new _e(h,C);t.options.keepSourceTokens&&(w.srcToken=m),o.items.push(w)}else{g&&i(h.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(h.comment?h.comment+=`
`+v.comment:h.comment=v.comment);const C=new _e(h);t.options.keepSourceTokens&&(C.srcToken=m),o.items.push(C)}}return d&&d<s&&i(d,"IMPOSSIBLE","Map comment with trailing content"),o.range=[l.offset,s,d??s],o}function Lb({composeNode:e,composeEmptyNode:n},t,l,i,r){const a=(r==null?void 0:r.nodeClass)??$n,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let s=l.offset,d=null;for(const{start:u,value:m}of l.items){const f=ll(u,{indicator:"seq-item-ind",next:m,offset:s,onError:i,parentIndent:l.indent,startOnNewline:!0});if(!f.found)if(f.anchor||f.tag||m)m&&m.type==="block-seq"?i(f.end,"BAD_INDENT","All sequence items must start at the same column"):i(s,"MISSING_CHAR","Sequence item without - indicator");else{d=f.end,f.comment&&(o.comment=f.comment);continue}const b=m?e(t,m,f,i):n(t,f.end,u,null,f,i);t.schema.compat&&Bo(l.indent,m,i),s=b.range[2],o.items.push(b)}return o.range=[l.offset,s,d??s],o}function fi(e,n,t,l){let i="";if(e){let r=!1,a="";for(const o of e){const{source:s,type:d}=o;switch(d){case"space":r=!0;break;case"comment":{t&&!r&&l(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=s.substring(1)||" ";i?i+=a+u:i=u,a="";break}case"newline":i&&(a+=s),r=!0;break;default:l(o,"UNEXPECTED_TOKEN",`Unexpected ${d} at node end`)}n+=s.length}}return{comment:i,offset:n}}const Ga="Block collections are not allowed within flow collections",Ma=e=>e&&(e.type==="block-map"||e.type==="block-seq");function kb({composeNode:e,composeEmptyNode:n},t,l,i,r){const a=l.start.source==="{",o=a?"flow map":"flow sequence",s=(r==null?void 0:r.nodeClass)??(a?De:$n),d=new s(t.schema);d.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let m=l.offset+l.start.source.length;for(let _=0;_<l.items.length;++_){const g=l.items[_],{start:p,key:h,sep:v,value:C}=g,w=ll(p,{flow:o,indicator:"explicit-key-ind",next:h??(v==null?void 0:v[0]),offset:m,onError:i,parentIndent:l.indent,startOnNewline:!1});if(!w.found){if(!w.anchor&&!w.tag&&!v&&!C){_===0&&w.comma?i(w.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):_<l.items.length-1&&i(w.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),w.comment&&(d.comment?d.comment+=`
`+w.comment:d.comment=w.comment),m=w.end;continue}!a&&t.options.strict&&li(h)&&i(h,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)w.comma&&i(w.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(w.comma||i(w.start,"MISSING_CHAR",`Missing , between ${o} items`),w.comment){let L="";e:for(const S of p)switch(S.type){case"comma":case"space":break;case"comment":L=S.source.substring(1);break e;default:break e}if(L){let S=d.items[d.items.length-1];Q(S)&&(S=S.value??S.key),S.comment?S.comment+=`
`+L:S.comment=L,w.comment=w.comment.substring(L.length+1)}}if(!a&&!v&&!w.found){const L=C?e(t,C,w,i):n(t,w.end,v,null,w,i);d.items.push(L),m=L.range[2],Ma(C)&&i(L.range,"BLOCK_IN_FLOW",Ga)}else{t.atKey=!0;const L=w.end,S=h?e(t,h,w,i):n(t,L,p,null,w,i);Ma(h)&&i(S.range,"BLOCK_IN_FLOW",Ga),t.atKey=!1;const E=ll(v??[],{flow:o,indicator:"map-value-ind",next:C,offset:S.range[2],onError:i,parentIndent:l.indent,startOnNewline:!1});if(E.found){if(!a&&!w.found&&t.options.strict){if(v)for(const j of v){if(j===E.found)break;if(j.type==="newline"){i(j,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}w.start<E.found.offset-1024&&i(E.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else C&&("source"in C&&C.source&&C.source[0]===":"?i(C,"MISSING_CHAR",`Missing space after : in ${o}`):i(E.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const A=C?e(t,C,E,i):E.found?n(t,E.end,v,null,E,i):null;A?Ma(C)&&i(A.range,"BLOCK_IN_FLOW",Ga):E.comment&&(S.comment?S.comment+=`
`+E.comment:S.comment=E.comment);const R=new _e(S,A);if(t.options.keepSourceTokens&&(R.srcToken=g),a){const j=d;bf(t,j.items,S)&&i(L,"DUPLICATE_KEY","Map keys must be unique"),j.items.push(R)}else{const j=new De(t.schema);j.flow=!0,j.items.push(R);const ve=(A??S).range;j.range=[S.range[0],ve[1],ve[2]],d.items.push(j)}m=A?A.range[2]:E.end}}const f=a?"}":"]",[b,...x]=l.end;let y=m;if(b&&b.source===f)y=b.offset+b.source.length;else{const _=o[0].toUpperCase()+o.substring(1),g=u?`${_} must end with a ${f}`:`${_} in block collection must be sufficiently indented and end with a ${f}`;i(m,u?"MISSING_CHAR":"BAD_INDENT",g),b&&b.source.length!==1&&x.unshift(b)}if(x.length>0){const _=fi(x,y,t.options.strict,i);_.comment&&(d.comment?d.comment+=`
`+_.comment:d.comment=_.comment),d.range=[l.offset,y,_.offset]}else d.range=[l.offset,y,y];return d}function Fa(e,n,t,l,i,r){const a=t.type==="block-map"?Cb(e,n,t,l,r):t.type==="block-seq"?Lb(e,n,t,l,r):kb(e,n,t,l,r),o=a.constructor;return i==="!"||i===o.tagName?(a.tag=o.tagName,a):(i&&(a.tag=i),a)}function Pb(e,n,t,l,i){var f;const r=l.tag,a=r?n.directives.tagName(r.source,b=>i(r,"TAG_RESOLVE_FAILED",b)):null;if(t.type==="block-seq"){const{anchor:b,newlineAfterProp:x}=l,y=b&&r?b.offset>r.offset?b:r:b??r;y&&(!x||x.offset<y.offset)&&i(y,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===De.tagName&&o==="map"||a===$n.tagName&&o==="seq")return Fa(e,n,t,i,a);let s=n.schema.tags.find(b=>b.tag===a&&b.collection===o);if(!s){const b=n.schema.knownTags[a];if(b&&b.collection===o)n.schema.tags.push(Object.assign({},b,{default:!1})),s=b;else return b?i(r,"BAD_COLLECTION_TYPE",`${b.tag} used for ${o} collection, but expects ${b.collection??"scalar"}`,!0):i(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),Fa(e,n,t,i,a)}const d=Fa(e,n,t,i,a,s),u=((f=s.resolve)==null?void 0:f.call(s,d,b=>i(r,"TAG_RESOLVE_FAILED",b),n.options))??d,m=ee(u)?u:new D(u);return m.range=d.range,m.tag=a,s!=null&&s.format&&(m.format=s.format),m}function hf(e,n,t){const l=n.offset,i=Eb(n,e.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[l,l,l]};const r=i.mode===">"?D.BLOCK_FOLDED:D.BLOCK_LITERAL,a=n.source?Nb(n.source):[];let o=a.length;for(let y=a.length-1;y>=0;--y){const _=a[y][1];if(_===""||_==="\r")o=y;else break}if(o===0){const y=i.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let _=l+i.length;return n.source&&(_+=n.source.length),{value:y,type:r,comment:i.comment,range:[l,_,_]}}let s=n.indent+i.indent,d=n.offset+i.length,u=0;for(let y=0;y<o;++y){const[_,g]=a[y];if(g===""||g==="\r")i.indent===0&&_.length>s&&(s=_.length);else{_.length<s&&t(d+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(s=_.length),u=y,s===0&&!e.atRoot&&t(d,"BAD_INDENT","Block scalar values in collections must be indented");break}d+=_.length+g.length+1}for(let y=a.length-1;y>=o;--y)a[y][0].length>s&&(o=y+1);let m="",f="",b=!1;for(let y=0;y<u;++y)m+=a[y][0].slice(s)+`
`;for(let y=u;y<o;++y){let[_,g]=a[y];d+=_.length+g.length+1;const p=g[g.length-1]==="\r";if(p&&(g=g.slice(0,-1)),g&&_.length<s){const v=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(d-g.length-(p?2:1),"BAD_INDENT",v),_=""}r===D.BLOCK_LITERAL?(m+=f+_.slice(s)+g,f=`
`):_.length>s||g[0]==="	"?(f===" "?f=`
`:!b&&f===`
`&&(f=`

`),m+=f+_.slice(s)+g,f=`
`,b=!0):g===""?f===`
`?m+=`
`:f=`
`:(m+=f+g,f=" ",b=!1)}switch(i.chomp){case"-":break;case"+":for(let y=o;y<a.length;++y)m+=`
`+a[y][0].slice(s);m[m.length-1]!==`
`&&(m+=`
`);break;default:m+=`
`}const x=l+i.length+n.source.length;return{value:m,type:r,comment:i.comment,range:[l,x,x]}}function Eb({offset:e,props:n},t,l){if(n[0].type!=="block-scalar-header")return l(n[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=n[0],r=i[0];let a=0,o="",s=-1;for(let f=1;f<i.length;++f){const b=i[f];if(!o&&(b==="-"||b==="+"))o=b;else{const x=Number(b);!a&&x?a=x:s===-1&&(s=e+f)}}s!==-1&&l(s,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let d=!1,u="",m=i.length;for(let f=1;f<n.length;++f){const b=n[f];switch(b.type){case"space":d=!0;case"newline":m+=b.source.length;break;case"comment":t&&!d&&l(b,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),m+=b.source.length,u=b.source.substring(1);break;case"error":l(b,"UNEXPECTED_TOKEN",b.message),m+=b.source.length;break;default:{const x=`Unexpected token in block scalar header: ${b.type}`;l(b,"UNEXPECTED_TOKEN",x);const y=b.source;y&&typeof y=="string"&&(m+=y.length)}}}return{mode:r,indent:a,chomp:o,comment:u,length:m}}function Nb(e){const n=e.split(/\n( *)/),t=n[0],l=t.match(/^( *)/),r=[l!=null&&l[1]?[l[1],t.slice(l[1].length)]:["",t]];for(let a=1;a<n.length;a+=2)r.push([n[a],n[a+1]]);return r}function _f(e,n,t){const{offset:l,type:i,source:r,end:a}=e;let o,s;const d=(f,b,x)=>t(l+f,b,x);switch(i){case"scalar":o=D.PLAIN,s=Ib(r,d);break;case"single-quoted-scalar":o=D.QUOTE_SINGLE,s=Ab(r,d);break;case"double-quoted-scalar":o=D.QUOTE_DOUBLE,s=Vb(r,d);break;default:return t(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[l,l+r.length,l+r.length]}}const u=l+r.length,m=fi(a,u,n,t);return{value:s,type:o,comment:m.comment,range:[l,u,m.offset]}}function Ib(e,n){let t="";switch(e[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${e[0]}`;break}case"@":case"`":{t=`reserved character ${e[0]}`;break}}return t&&n(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),xf(e)}function Ab(e,n){return(e[e.length-1]!=="'"||e.length===1)&&n(e.length,"MISSING_CHAR","Missing closing 'quote"),xf(e.slice(1,-1)).replace(/''/g,"'")}function xf(e){let n,t;try{n=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{n=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let l=n.exec(e);if(!l)return e;let i=l[1],r=" ",a=n.lastIndex;for(t.lastIndex=a;l=t.exec(e);)l[1]===""?r===`
`?i+=r:r=`
`:(i+=r+l[1],r=" "),a=t.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=a,l=o.exec(e),i+r+((l==null?void 0:l[1])??"")}function Vb(e,n){let t="";for(let l=1;l<e.length-1;++l){const i=e[l];if(!(i==="\r"&&e[l+1]===`
`))if(i===`
`){const{fold:r,offset:a}=Tb(e,l);t+=r,l=a}else if(i==="\\"){let r=e[++l];const a=Db[r];if(a)t+=a;else if(r===`
`)for(r=e[l+1];r===" "||r==="	";)r=e[++l+1];else if(r==="\r"&&e[l+1]===`
`)for(r=e[++l+1];r===" "||r==="	";)r=e[++l+1];else if(r==="x"||r==="u"||r==="U"){const o={x:2,u:4,U:8}[r];t+=Gb(e,l+1,o,n),l+=o}else{const o=e.substr(l-1,2);n(l-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(i===" "||i==="	"){const r=l;let a=e[l+1];for(;a===" "||a==="	";)a=e[++l+1];a!==`
`&&!(a==="\r"&&e[l+2]===`
`)&&(t+=l>r?e.slice(r,l+1):i)}else t+=i}return(e[e.length-1]!=='"'||e.length===1)&&n(e.length,"MISSING_CHAR",'Missing closing "quote'),t}function Tb(e,n){let t="",l=e[n+1];for(;(l===" "||l==="	"||l===`
`||l==="\r")&&!(l==="\r"&&e[n+2]!==`
`);)l===`
`&&(t+=`
`),n+=1,l=e[n+1];return t||(t=" "),{fold:t,offset:n}}const Db={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Gb(e,n,t,l){const i=e.substr(n,t),a=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(a)){const o=e.substr(n-2,t+2);return l(n-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(a)}function vf(e,n,t,l){const{value:i,type:r,comment:a,range:o}=n.type==="block-scalar"?hf(e,n,l):_f(n,e.options.strict,l),s=t?e.directives.tagName(t.source,m=>l(t,"TAG_RESOLVE_FAILED",m)):null;let d;e.options.stringKeys&&e.atKey?d=e.schema[un]:s?d=Mb(e.schema,i,s,t,l):n.type==="scalar"?d=Fb(e,i,n,l):d=e.schema[un];let u;try{const m=d.resolve(i,f=>l(t??n,"TAG_RESOLVE_FAILED",f),e.options);u=H(m)?m:new D(m)}catch(m){const f=m instanceof Error?m.message:String(m);l(t??n,"TAG_RESOLVE_FAILED",f),u=new D(i)}return u.range=o,u.source=i,r&&(u.type=r),s&&(u.tag=s),d.format&&(u.format=d.format),a&&(u.comment=a),u}function Mb(e,n,t,l,i){var o;if(t==="!")return e[un];const r=[];for(const s of e.tags)if(!s.collection&&s.tag===t)if(s.default&&s.test)r.push(s);else return s;for(const s of r)if((o=s.test)!=null&&o.test(n))return s;const a=e.knownTags[t];return a&&!a.collection?(e.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(i(l,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),e[un])}function Fb({atKey:e,directives:n,schema:t},l,i,r){const a=t.tags.find(o=>{var s;return(o.default===!0||e&&o.default==="key")&&((s=o.test)==null?void 0:s.test(l))})||t[un];if(t.compat){const o=t.compat.find(s=>{var d;return s.default&&((d=s.test)==null?void 0:d.test(l))})??t[un];if(a.tag!==o.tag){const s=n.tagString(a.tag),d=n.tagString(o.tag),u=`Value may be parsed as either ${s} or ${d}`;r(i,"TAG_RESOLVE_FAILED",u,!0)}}return a}function Ob(e,n,t){if(n){t??(t=n.length);for(let l=t-1;l>=0;--l){let i=n[l];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=n[++l];(i==null?void 0:i.type)==="space";)e+=i.source.length,i=n[++l];break}}return e}const Bb={composeNode:wf,composeEmptyNode:Qs};function wf(e,n,t,l){const i=e.atKey,{spaceBefore:r,comment:a,anchor:o,tag:s}=t;let d,u=!0;switch(n.type){case"alias":d=Rb(e,n,l),(o||s)&&l(n,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":d=vf(e,n,s,l),o&&(d.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":d=Pb(Bb,e,n,t,l),o&&(d.anchor=o.source.substring(1));break;default:{const m=n.type==="error"?n.message:`Unsupported token (type: ${n.type})`;l(n,"UNEXPECTED_TOKEN",m),d=Qs(e,n.offset,void 0,null,t,l),u=!1}}return o&&d.anchor===""&&l(o,"BAD_ALIAS","Anchor cannot be an empty string"),i&&e.options.stringKeys&&(!H(d)||typeof d.value!="string"||d.tag&&d.tag!=="tag:yaml.org,2002:str")&&l(s??n,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(d.spaceBefore=!0),a&&(n.type==="scalar"&&n.source===""?d.comment=a:d.commentBefore=a),e.options.keepSourceTokens&&u&&(d.srcToken=n),d}function Qs(e,n,t,l,{spaceBefore:i,comment:r,anchor:a,tag:o,end:s},d){const u={type:"scalar",offset:Ob(n,t,l),indent:-1,source:""},m=vf(e,u,o,d);return a&&(m.anchor=a.source.substring(1),m.anchor===""&&d(a,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(m.spaceBefore=!0),r&&(m.comment=r,m.range[2]=s),m}function Rb({options:e},{offset:n,source:t,end:l},i){const r=new Kr(t.substring(1));r.source===""&&i(n,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&i(n+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=n+t.length,o=fi(l,a,e.strict,i);return r.range=[n,a,o.offset],o.comment&&(r.comment=o.comment),r}function jb(e,n,{offset:t,start:l,value:i,end:r},a){const o=Object.assign({_directives:n},e),s=new ml(void 0,o),d={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},u=ll(l,{indicator:"doc-start",next:i??(r==null?void 0:r[0]),offset:t,onError:a,parentIndent:0,startOnNewline:!0});u.found&&(s.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&a(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),s.contents=i?wf(d,i,u,a):Qs(d,u.end,l,null,u,a);const m=s.contents.range[2],f=fi(r,m,!1,a);return f.comment&&(s.comment=f.comment),s.range=[t,m,f.offset],s}function wl(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:n,source:t}=e;return[n,n+(typeof t=="string"?t.length:1)]}function gc(e){var i;let n="",t=!1,l=!1;for(let r=0;r<e.length;++r){const a=e[r];switch(a[0]){case"#":n+=(n===""?"":l?`

`:`
`)+(a.substring(1)||" "),t=!0,l=!1;break;case"%":((i=e[r+1])==null?void 0:i[0])!=="#"&&(r+=1),t=!1;break;default:t||(l=!0),t=!1}}return{comment:n,afterEmptyLine:l}}class Ys{constructor(n={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,l,i,r)=>{const a=wl(t);r?this.warnings.push(new gf(a,l,i)):this.errors.push(new at(a,l,i))},this.directives=new Se({version:n.version||"1.2"}),this.options=n}decorate(n,t){const{comment:l,afterEmptyLine:i}=gc(this.prelude);if(l){const r=n.contents;if(t)n.comment=n.comment?`${n.comment}
${l}`:l;else if(i||n.directives.docStart||!r)n.commentBefore=l;else if(X(r)&&!r.flow&&r.items.length>0){let a=r.items[0];Q(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${l}
${o}`:l}else{const a=r.commentBefore;r.commentBefore=a?`${l}
${a}`:l}}t?(Array.prototype.push.apply(n.errors,this.errors),Array.prototype.push.apply(n.warnings,this.warnings)):(n.errors=this.errors,n.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:gc(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(n,t=!1,l=-1){for(const i of n)yield*this.next(i);yield*this.end(t,l)}*next(n){switch(n.type){case"directive":this.directives.add(n.source,(t,l,i)=>{const r=wl(n);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",l,i)}),this.prelude.push(n.source),this.atDirectives=!0;break;case"document":{const t=jb(this.options,this.directives,n,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(n,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(n.source);break;case"error":{const t=n.source?`${n.message}: ${JSON.stringify(n.source)}`:n.message,l=new at(wl(n),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(l):this.doc.errors.push(l);break}case"doc-end":{if(!this.doc){const l="Unexpected doc-end without preceding document";this.errors.push(new at(wl(n),"UNEXPECTED_TOKEN",l));break}this.doc.directives.docEnd=!0;const t=fi(n.end,n.offset+n.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const l=this.doc.comment;this.doc.comment=l?`${l}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new at(wl(n),"UNEXPECTED_TOKEN",`Unsupported token ${n.type}`))}}*end(n=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(n){const l=Object.assign({_directives:this.directives},this.options),i=new ml(void 0,l);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}function Ub(e,n=!0,t){if(e){const l=(i,r,a)=>{const o=typeof i=="number"?i:Array.isArray(i)?i[0]:i.offset;if(t)t(o,r,a);else throw new at([o,o+1],r,a)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return _f(e,n,l);case"block-scalar":return hf({options:{strict:n}},e,l)}}return null}function Wb(e,n){const{implicitKey:t=!1,indent:l,inFlow:i=!1,offset:r=-1,type:a="PLAIN"}=n,o=ui({type:a,value:e},{implicitKey:t,indent:l>0?" ".repeat(l):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}}),s=n.end??[{type:"newline",offset:-1,indent:l,source:`
`}];switch(o[0]){case"|":case">":{const d=o.indexOf(`
`),u=o.substring(0,d),m=o.substring(d+1)+`
`,f=[{type:"block-scalar-header",offset:r,indent:l,source:u}];return Sf(f,s)||f.push({type:"newline",offset:-1,indent:l,source:`
`}),{type:"block-scalar",offset:r,indent:l,props:f,source:m}}case'"':return{type:"double-quoted-scalar",offset:r,indent:l,source:o,end:s};case"'":return{type:"single-quoted-scalar",offset:r,indent:l,source:o,end:s};default:return{type:"scalar",offset:r,indent:l,source:o,end:s}}}function Hb(e,n,t={}){let{afterKey:l=!1,implicitKey:i=!1,inFlow:r=!1,type:a}=t,o="indent"in e?e.indent:null;if(l&&typeof o=="number"&&(o+=2),!a)switch(e.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const d=e.props[0];if(d.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=d.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const s=ui({type:a,value:n},{implicitKey:i||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(s[0]){case"|":case">":$b(e,s);break;case'"':Oa(e,s,"double-quoted-scalar");break;case"'":Oa(e,s,"single-quoted-scalar");break;default:Oa(e,s,"scalar")}}function $b(e,n){const t=n.indexOf(`
`),l=n.substring(0,t),i=n.substring(t+1)+`
`;if(e.type==="block-scalar"){const r=e.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=l,e.source=i}else{const{offset:r}=e,a="indent"in e?e.indent:-1,o=[{type:"block-scalar-header",offset:r,indent:a,source:l}];Sf(o,"end"in e?e.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const s of Object.keys(e))s!=="type"&&s!=="offset"&&delete e[s];Object.assign(e,{type:"block-scalar",indent:a,props:o,source:i})}}function Sf(e,n){if(n)for(const t of n)switch(t.type){case"space":case"comment":e.push(t);break;case"newline":return e.push(t),!0}return!1}function Oa(e,n,t){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=t,e.source=n;break;case"block-scalar":{const l=e.props.slice(1);let i=n.length;e.props[0].type==="block-scalar-header"&&(i-=e.props[0].source.length);for(const r of l)r.offset+=i;delete e.props,Object.assign(e,{type:t,source:n,end:l});break}case"block-map":case"block-seq":{const i={type:"newline",offset:e.offset+n.length,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:t,source:n,end:[i]});break}default:{const l="indent"in e?e.indent:-1,i="end"in e&&Array.isArray(e.end)?e.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(e))r!=="type"&&r!=="offset"&&delete e[r];Object.assign(e,{type:t,indent:l,source:n,end:i})}}}const qb=e=>"type"in e?Ir(e):er(e);function Ir(e){switch(e.type){case"block-scalar":{let n="";for(const t of e.props)n+=Ir(t);return n+e.source}case"block-map":case"block-seq":{let n="";for(const t of e.items)n+=er(t);return n}case"flow-collection":{let n=e.start.source;for(const t of e.items)n+=er(t);for(const t of e.end)n+=t.source;return n}case"document":{let n=er(e);if(e.end)for(const t of e.end)n+=t.source;return n}default:{let n=e.source;if("end"in e&&e.end)for(const t of e.end)n+=t.source;return n}}}function er({start:e,key:n,sep:t,value:l}){let i="";for(const r of e)i+=r.source;if(n&&(i+=Ir(n)),t)for(const r of t)i+=r.source;return l&&(i+=Ir(l)),i}const Ro=Symbol("break visit"),zb=Symbol("skip children"),Cf=Symbol("remove item");function pt(e,n){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),Lf(Object.freeze([]),e,n)}pt.BREAK=Ro;pt.SKIP=zb;pt.REMOVE=Cf;pt.itemAtPath=(e,n)=>{let t=e;for(const[l,i]of n){const r=t==null?void 0:t[l];if(r&&"items"in r)t=r.items[i];else return}return t};pt.parentCollection=(e,n)=>{const t=pt.itemAtPath(e,n.slice(0,-1)),l=n[n.length-1][0],i=t==null?void 0:t[l];if(i&&"items"in i)return i;throw new Error("Parent collection not found")};function Lf(e,n,t){let l=t(n,e);if(typeof l=="symbol")return l;for(const i of["key","value"]){const r=n[i];if(r&&"items"in r){for(let a=0;a<r.items.length;++a){const o=Lf(Object.freeze(e.concat([[i,a]])),r.items[a],t);if(typeof o=="number")a=o-1;else{if(o===Ro)return Ro;o===Cf&&(r.items.splice(a,1),a-=1)}}typeof l=="function"&&i==="key"&&(l=l(n,e))}}return typeof l=="function"?l(n,e):l}const ia="\uFEFF",ra="",aa="",ii="",Kb=e=>!!e&&"items"in e,Qb=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function Yb(e){switch(e){case ia:return"<BOM>";case ra:return"<DOC>";case aa:return"<FLOW_END>";case ii:return"<SCALAR>";default:return JSON.stringify(e)}}function kf(e){switch(e){case ia:return"byte-order-mark";case ra:return"doc-mode";case aa:return"flow-error-end";case ii:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const Jb=Object.freeze(Object.defineProperty({__proto__:null,BOM:ia,DOCUMENT:ra,FLOW_END:aa,SCALAR:ii,createScalarToken:Wb,isCollection:Kb,isScalar:Qb,prettyToken:Yb,resolveAsScalar:Ub,setScalarValue:Hb,stringify:qb,tokenType:kf,visit:pt},Symbol.toStringTag,{value:"Module"}));function Qe(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const bc=new Set("0123456789ABCDEFabcdef"),Xb=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Fi=new Set(",[]{}"),Zb=new Set(` ,[]{}
\r	`),Ba=e=>!e||Zb.has(e);class Pf{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(n,t=!1){if(n){if(typeof n!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+n:n,this.lineEndPos=null}this.atEnd=!t;let l=this.next??"stream";for(;l&&(t||this.hasChars(1));)l=yield*this.parseNext(l)}atLineEnd(){let n=this.pos,t=this.buffer[n];for(;t===" "||t==="	";)t=this.buffer[++n];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[n+1]===`
`:!1}charAt(n){return this.buffer[this.pos+n]}continueScalar(n){let t=this.buffer[n];if(this.indentNext>0){let l=0;for(;t===" ";)t=this.buffer[++l+n];if(t==="\r"){const i=this.buffer[l+n+1];if(i===`
`||!i&&!this.atEnd)return n+l+1}return t===`
`||l>=this.indentNext||!t&&!this.atEnd?n+l:-1}if(t==="-"||t==="."){const l=this.buffer.substr(n,3);if((l==="---"||l==="...")&&Qe(this.buffer[n+3]))return-1}return n}getLine(){let n=this.lineEndPos;return(typeof n!="number"||n!==-1&&n<this.pos)&&(n=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=n),n===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[n-1]==="\r"&&(n-=1),this.buffer.substring(this.pos,n))}hasChars(n){return this.pos+n<=this.buffer.length}setNext(n){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=n,null}peek(n){return this.buffer.substr(this.pos,n)}*parseNext(n){switch(n){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let n=this.getLine();if(n===null)return this.setNext("stream");if(n[0]===ia&&(yield*this.pushCount(1),n=n.substring(1)),n[0]==="%"){let t=n.length,l=n.indexOf("#");for(;l!==-1;){const r=n[l-1];if(r===" "||r==="	"){t=l-1;break}else l=n.indexOf("#",l+1)}for(;;){const r=n[t-1];if(r===" "||r==="	")t-=1;else break}const i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(n.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(n.length-t),yield*this.pushNewline(),"stream"}return yield ra,yield*this.parseLineStart()}*parseLineStart(){const n=this.charAt(0);if(!n&&!this.atEnd)return this.setNext("line-start");if(n==="-"||n==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Qe(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Qe(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[n,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((n==="-"||n==="?"||n===":")&&Qe(t)){const l=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=l,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const n=this.getLine();if(n===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(n[t]){case"#":yield*this.pushCount(n.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Ba),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(n.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let n,t,l=-1;do n=yield*this.pushNewline(),n>0?(t=yield*this.pushSpaces(!1),this.indentValue=l=t):t=0,t+=yield*this.pushSpaces(!0);while(n+t>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((l!==-1&&l<this.indentNext&&i[0]!=="#"||l===0&&(i.startsWith("---")||i.startsWith("..."))&&Qe(i[3]))&&!(l===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield aa,yield*this.parseLineStart();let r=0;for(;i[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),i[r]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Ba),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Qe(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const n=this.charAt(0);let t=this.buffer.indexOf(n,this.pos+1);if(n==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const l=this.buffer.substring(0,t);let i=l.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const r=this.continueScalar(i+1);if(r===-1)break;i=l.indexOf(`
`,r)}i!==-1&&(t=i-(l[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let n=this.pos;for(;;){const t=this.buffer[++n];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Qe(t)||t==="#")}*parseBlockScalar(){let n=this.pos-1,t=0,l;e:for(let r=this.pos;l=this.buffer[r];++r)switch(l){case" ":t+=1;break;case`
`:n=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!l&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(n+1);if(r===-1)break;n=this.buffer.indexOf(`
`,r)}while(n!==-1);if(n===-1){if(!this.atEnd)return this.setNext("block-scalar");n=this.buffer.length}}let i=n+1;for(l=this.buffer[i];l===" ";)l=this.buffer[++i];if(l==="	"){for(;l==="	"||l===" "||l==="\r"||l===`
`;)l=this.buffer[++i];n=i-1}else if(!this.blockScalarKeep)do{let r=n-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)n=r;else break}while(!0);return yield ii,yield*this.pushToIndex(n+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const n=this.flowLevel>0;let t=this.pos-1,l=this.pos-1,i;for(;i=this.buffer[++l];)if(i===":"){const r=this.buffer[l+1];if(Qe(r)||n&&Fi.has(r))break;t=l}else if(Qe(i)){let r=this.buffer[l+1];if(i==="\r"&&(r===`
`?(l+=1,i=`
`,r=this.buffer[l+1]):t=l),r==="#"||n&&Fi.has(r))break;if(i===`
`){const a=this.continueScalar(l+1);if(a===-1)break;l=Math.max(l,a-2)}}else{if(n&&Fi.has(i))break;t=l}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield ii,yield*this.pushToIndex(t+1,!0),n?"flow":"doc")}*pushCount(n){return n>0?(yield this.buffer.substr(this.pos,n),this.pos+=n,n):0}*pushToIndex(n,t){const l=this.buffer.slice(this.pos,n);return l?(yield l,this.pos+=l.length,l.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Ba))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const n=this.flowLevel>0,t=this.charAt(1);if(Qe(t)||n&&Fi.has(t))return n?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let n=this.pos+2,t=this.buffer[n];for(;!Qe(t)&&t!==">";)t=this.buffer[++n];return yield*this.pushToIndex(t===">"?n+1:n,!1)}else{let n=this.pos+1,t=this.buffer[n];for(;t;)if(Xb.has(t))t=this.buffer[++n];else if(t==="%"&&bc.has(this.buffer[n+1])&&bc.has(this.buffer[n+2]))t=this.buffer[n+=3];else break;return yield*this.pushToIndex(n,!1)}}*pushNewline(){const n=this.buffer[this.pos];return n===`
`?yield*this.pushCount(1):n==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(n){let t=this.pos-1,l;do l=this.buffer[++t];while(l===" "||n&&l==="	");const i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(n){let t=this.pos,l=this.buffer[t];for(;!n(l);)l=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Ef{constructor(){this.lineStarts=[],this.addNewLine=n=>this.lineStarts.push(n),this.linePos=n=>{let t=0,l=this.lineStarts.length;for(;t<l;){const r=t+l>>1;this.lineStarts[r]<n?t=r+1:l=r}if(this.lineStarts[t]===n)return{line:t+1,col:1};if(t===0)return{line:0,col:n};const i=this.lineStarts[t-1];return{line:t,col:n-i+1}}}}function Nn(e,n){for(let t=0;t<e.length;++t)if(e[t].type===n)return!0;return!1}function hc(e){for(let n=0;n<e.length;++n)switch(e[n].type){case"space":case"comment":case"newline":break;default:return n}return-1}function Nf(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Oi(e){switch(e.type){case"document":return e.start;case"block-map":{const n=e.items[e.items.length-1];return n.sep??n.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function St(e){var t;if(e.length===0)return[];let n=e.length;e:for(;--n>=0;)switch(e[n].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=e[++n])==null?void 0:t.type)==="space";);return e.splice(n,e.length)}function _c(e){if(e.start.type==="flow-seq-start")for(const n of e.items)n.sep&&!n.value&&!Nn(n.start,"explicit-key-ind")&&!Nn(n.sep,"map-value-ind")&&(n.key&&(n.value=n.key),delete n.key,Nf(n.value)?n.value.end?Array.prototype.push.apply(n.value.end,n.sep):n.value.end=n.sep:Array.prototype.push.apply(n.start,n.sep),delete n.sep)}class Js{constructor(n){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Pf,this.onNewLine=n}*parse(n,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const l of this.lexer.lex(n,t))yield*this.next(l);t||(yield*this.end())}*next(n){if(this.source=n,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=n.length;return}const t=kf(n);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+n.length);break;case"space":this.atNewLine&&n[0]===" "&&(this.indent+=n.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=n.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=n.length}else{const l=`Not a YAML token: ${n}`;yield*this.pop({type:"error",offset:this.offset,message:l,source:n}),this.offset+=n.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const n=this.peek(1);if(this.type==="doc-end"&&(!n||n.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!n)return yield*this.stream();switch(n.type){case"document":return yield*this.document(n);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(n);case"block-scalar":return yield*this.blockScalar(n);case"block-map":return yield*this.blockMap(n);case"block-seq":return yield*this.blockSequence(n);case"flow-collection":return yield*this.flowCollection(n);case"doc-end":return yield*this.documentEnd(n)}yield*this.pop()}peek(n){return this.stack[this.stack.length-n]}*pop(n){const t=n??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const l=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in l?l.indent:0:t.type==="flow-collection"&&l.type==="document"&&(t.indent=0),t.type==="flow-collection"&&_c(t),l.type){case"document":l.value=t;break;case"block-scalar":l.props.push(t);break;case"block-map":{const i=l.items[l.items.length-1];if(i.value){l.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=l.items[l.items.length-1];i.value?l.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=l.items[l.items.length-1];!i||i.value?l.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((l.type==="document"||l.type==="block-map"||l.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&hc(i.start)===-1&&(t.indent===0||i.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(l.type==="document"?l.end=i.start:l.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const n={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&n.start.push(this.sourceToken),this.stack.push(n);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(n){if(n.value)return yield*this.lineEnd(n);switch(this.type){case"doc-start":{hc(n.start)!==-1?(yield*this.pop(),yield*this.step()):n.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":n.start.push(this.sourceToken);return}const t=this.startBlockValue(n);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(n){if(this.type==="map-value-ind"){const t=Oi(this.peek(2)),l=St(t);let i;n.end?(i=n.end,i.push(this.sourceToken),delete n.end):i=[this.sourceToken];const r={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:l,key:n,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(n)}*blockScalar(n){switch(this.type){case"space":case"comment":case"newline":n.props.push(this.sourceToken);return;case"scalar":if(n.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(n){var l;const t=n.items[n.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0,r=Array.isArray(i)?i[i.length-1]:void 0;(r==null?void 0:r.type)==="comment"?i==null||i.push(this.sourceToken):n.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)n.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,n.indent)){const i=n.items[n.items.length-2],r=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),n.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=n.indent){const i=!this.onKeyLine&&this.indent===n.indent,r=i&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(r&&t.sep&&!t.value){const o=[];for(let s=0;s<t.sep.length;++s){const d=t.sep[s];switch(d.type){case"newline":o.push(s);break;case"space":break;case"comment":d.indent>n.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(a=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(a.push(this.sourceToken),n.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(a.push(this.sourceToken),n.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)n.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Nn(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(Nf(t.key)&&!Nn(t.sep,"newline")){const o=St(t.start),s=t.key,d=t.sep;d.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:s,sep:d}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(Nn(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=St(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?n.items.push({start:a,key:null,sep:[this.sourceToken]}):Nn(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);r||t.value?(n.items.push({start:a,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(n);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Nn(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&n.items.push({start:a});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(n){var l;const t=n.items[n.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0,r=Array.isArray(i)?i[i.length-1]:void 0;(r==null?void 0:r.type)==="comment"?i==null||i.push(this.sourceToken):n.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)n.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,n.indent)){const i=n.items[n.items.length-2],r=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),n.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=n.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==n.indent)break;t.value||Nn(t.start,"seq-item-ind")?n.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>n.indent){const i=this.startBlockValue(n);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(n){const t=n.items[n.items.length-1];if(this.type==="flow-error-end"){let l;do yield*this.pop(),l=this.peek(1);while(l&&l.type==="flow-collection")}else if(n.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?n.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?n.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?n.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!t||t.value?n.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":n.end.push(this.sourceToken);return}const l=this.startBlockValue(n);l?this.stack.push(l):(yield*this.pop(),yield*this.step())}else{const l=this.peek(2);if(l.type==="block-map"&&(this.type==="map-value-ind"&&l.indent===n.indent||this.type==="newline"&&!l.items[l.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&l.type!=="flow-collection"){const i=Oi(l),r=St(i);_c(n);const a=n.end.splice(1,n.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:r,key:n,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(n)}}flowScalar(n){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:n,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(n){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Oi(n),l=St(t);return l.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Oi(n),l=St(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(n,t){return this.type!=="comment"||this.indent<=t?!1:n.every(l=>l.type==="newline"||l.type==="space")}*documentEnd(n){this.type!=="doc-mode"&&(n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(n){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function If(e){const n=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||n&&new Ef||null,prettyErrors:n}}function eh(e,n={}){const{lineCounter:t,prettyErrors:l}=If(n),i=new Js(t==null?void 0:t.addNewLine),r=new Ys(n),a=Array.from(r.compose(i.parse(e)));if(l&&t)for(const o of a)o.errors.forEach(Nr(e,t)),o.warnings.forEach(Nr(e,t));return a.length>0?a:Object.assign([],{empty:!0},r.streamInfo())}function Af(e,n={}){const{lineCounter:t,prettyErrors:l}=If(n),i=new Js(t==null?void 0:t.addNewLine),r=new Ys(n);let a=null;for(const o of r.compose(i.parse(e),!0,e.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new at(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return l&&t&&(a.errors.forEach(Nr(e,t)),a.warnings.forEach(Nr(e,t))),a}function nh(e,n,t){let l;typeof n=="function"?l=n:t===void 0&&n&&typeof n=="object"&&(t=n);const i=Af(e,t);if(!i)return null;if(i.warnings.forEach(r=>Ym(i.options.logLevel,r)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:l},t))}function th(e,n,t){let l=null;if(typeof n=="function"||Array.isArray(n)?l=n:t===void 0&&n&&(t=n),typeof t=="string"&&(t=t.length),typeof t=="number"){const i=Math.round(t);t=i<1?void 0:i>8?{indent:8}:{indent:i}}if(e===void 0){const{keepUndefined:i}=t??n??{};if(!i)return}return bt(e)&&!l?e.toString(t):new ml(e,l,t).toString(t)}const Vf=Object.freeze(Object.defineProperty({__proto__:null,Alias:Kr,CST:Jb,Composer:Ys,Document:ml,Lexer:Pf,LineCounter:Ef,Pair:_e,Parser:Js,Scalar:D,Schema:la,YAMLError:Ks,YAMLMap:De,YAMLParseError:at,YAMLSeq:$n,YAMLWarning:gf,isAlias:Qn,isCollection:X,isDocument:bt,isMap:sl,isNode:ee,isPair:Q,isScalar:H,isSeq:dl,parse:nh,parseAllDocuments:eh,parseDocument:Af,stringify:th,visit:ht,visitAsync:zr},Symbol.toStringTag,{value:"Module"})),lh=`protocols:
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Nameplate
- model: 40100
  point: fNom
  block: fixed
  entry:
    name: fNom
    description: Nominal AC frequency
    longdescription: Rated output frequency of the inverter when synchronized to the grid. Defines the system’s base frequency for grid operation.
    dtype: uint16
    unit: Hz
    category: PCS information
    meanings: {}
  labels:
  - label_family: Component
    label_text: Inverter
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Freq
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Firmware
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Firmware
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Firmware
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Firmware
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Firmware
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Firmware
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Nameplate
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
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
    longdescription: Number of independent Maximum Power Point Tracking (MPPT) channels available on the inverter. Each channel can independently optimize PV string voltage and current.
    dtype: uint16
    unit: N/A
    category: DC-PV
    meanings: {}
  labels:
  - label_family: Component
    label_text: PV
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Info
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
      1: 'Single phase; 2: Split phase; 3: Three phase'
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Nameplate
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
    description: Active power total
    longdescription: Net real power at the inverter AC output (positive export/production, implementation-dependent).
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Freq
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Temp
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
- model: 40101
  point: vGridLL
  block: fixed
  entry:
    name: vGridLL
    description: Voltage grid LL
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
- model: 40101
  point: vGridLN
  block: fixed
  entry:
    name: vGridLN
    description: Voltage grid LN
    longdescription: Line-to-neutral voltage measured at the grid connection.
    dtype: uint16
    unit: V
    category: Grid
    meanings: {}
  labels:
  - label_family: Component
    label_text: Grid
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Freq
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Freq
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Freq
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Freq
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Standard
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Freq
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Freq
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Current
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Volt
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Sensor
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-DC
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Unit
    label_text: Energy
  - label_family: Info
    label_text: Sensor
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
  - label_family: Feature
    label_text: PV-DC
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
  - label_family: Feature
    label_text: PV-DC
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Meter
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: RSD
  - label_family: Info
    label_text: Alarms
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Basic Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: CT
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: CT
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Power
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Battery Scheduling
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Setup
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Connection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Protection
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Support
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Power Limits
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Power
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Power Limits
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Power
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Selling Power
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Selling Power
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Power
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Selling Power
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
    label_text: Extended
  - label_family: Unit
    label_text: Power
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Power
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Grid Charge
  - label_family: Info
    label_text: Config
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
    label_text: Extended
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Backup Power
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Info
    label_text: Config
  - label_family: Feature
    label_text: PV-AC Couple
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Smart Load
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: '%'
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Config
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
  - label_family: Level of Detail
    label_text: Extended
  - label_family: Feature
    label_text: Parallel
  - label_family: Info
    label_text: Config
  - label_family: Unit
    label_text: Mode
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
`,ih=`# Label Help Text
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
        help: "Extended telemetry points provide additional technical detail or advanced information."

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
`;function rh(e){return e==null?"":typeof e=="number"?String(Math.trunc(e)):String(e).trim()}function ah(e){return e==null?"":String(e).trim()}function oh(){try{const e=Vf.parse(lh);return((e==null?void 0:e.protocols)??[]).map(t=>{var a;if(!t.entry)return null;const l=ah(t.point??t.entry.name),i=rh(t.model);if(!l||!i)return null;const r=Array.isArray(t.labels)?t.labels:Array.isArray((a=t.entry)==null?void 0:a.labels)?t.entry.labels:[];return{block:String(t.block??"fixed"),entry:t.entry,model:i,point:l,labels:r}}).filter(t=>!!t)}catch(e){return console.error("Failed to parse ss40k_inverter.yaml",e),[]}}const Ct=oh();let jo=null;try{jo=Vf.parse(ih)}catch(e){console.error("Failed to parse label_help.yaml",e)}function ri(e,n){if(!jo)return null;const t=jo.label_families[e];if(!t)return null;if(n){const l=t.labels[n];return(l==null?void 0:l.help)||null}return t.help||null}function sh(e,n){const t=new Map;return e.forEach(l=>{const i=Array.isArray(l.labels)?l.labels:[];if(i.length===0)return;if(n.length===0){const o=i[0];if(o){const s=o.label_text;t.has(s)||t.set(s,[]),t.get(s).push(l)}return}let r=t,a=-1;if(!(r instanceof Map)){console.error("groupByLabelHierarchy: currentMap is not a Map",r);return}for(let o=0;o<n.length;o++){const s=n[o];i.find(u=>u.label_family===s)&&(a=o)}if(a!==-1)for(let o=0;o<=a;o++){if(!(r instanceof Map)){console.error("groupByLabelHierarchy: currentMap became non-Map at level",o,r);return}const s=n[o],d=i.find(m=>m.label_family===s);if(!d)continue;const u=d.label_text;if(o===a){r.has(u)||r.set(u,new Map);const m=r.get(u);if(Array.isArray(m)){const x=m,y=new Map;y.set("",x),r.set(u,y)}const f=r.get(u);if(!(f instanceof Map)){console.error("Expected Map for finalMap but got:",typeof f,f);return}f.has("")||f.set("",[]);const b=f.get("");if(!Array.isArray(b)){console.error("Expected array for itemsList but got:",typeof b,b);return}b.push(l)}else{if(!r.has(u))r.set(u,new Map);else{const f=r.get(u);if(Array.isArray(f)){const b=f,x=new Map;x.set("",b),r.set(u,x)}}const m=r.get(u);if(!(m instanceof Map)){console.error("Expected Map for nestedMap but got:",typeof m,m,"at level",o,"key",u);return}r=m}}}),t}function dh(e){const n=new Map;return e.forEach(t=>{(Array.isArray(t.labels)?t.labels:[]).forEach(i=>{n.has(i.label_family)||n.set(i.label_family,new Set),n.get(i.label_family).add(i.label_text)})}),n}const Ra=[{bg:"bg-blue-100",text:"text-blue-800",border:"border-blue-300"},{bg:"bg-green-100",text:"text-green-800",border:"border-green-300"},{bg:"bg-purple-100",text:"text-purple-800",border:"border-purple-300"},{bg:"bg-yellow-100",text:"text-yellow-800",border:"border-yellow-300"},{bg:"bg-pink-100",text:"text-pink-800",border:"border-pink-300"},{bg:"bg-indigo-100",text:"text-indigo-800",border:"border-indigo-300"},{bg:"bg-red-100",text:"text-red-800",border:"border-red-300"},{bg:"bg-teal-100",text:"text-teal-800",border:"border-teal-300"},{bg:"bg-orange-100",text:"text-orange-800",border:"border-orange-300"},{bg:"bg-cyan-100",text:"text-cyan-800",border:"border-cyan-300"},{bg:"bg-violet-100",text:"text-violet-800",border:"border-violet-300"},{bg:"bg-amber-100",text:"text-amber-800",border:"border-amber-300"},{bg:"bg-lime-100",text:"text-lime-800",border:"border-lime-300"},{bg:"bg-emerald-100",text:"text-emerald-800",border:"border-emerald-300"},{bg:"bg-sky-100",text:"text-sky-800",border:"border-sky-300"},{bg:"bg-rose-100",text:"text-rose-800",border:"border-rose-300"},{bg:"bg-fuchsia-100",text:"text-fuchsia-800",border:"border-fuchsia-300"},{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"},{bg:"bg-stone-100",text:"text-stone-800",border:"border-stone-300"},{bg:"bg-zinc-100",text:"text-zinc-800",border:"border-zinc-300"}],xc=new Map([["component",0],["feature",1],["detail_level",2],["level of detail",2],["info",3],["unit",4]]);function et(e,n){const t=e.toLowerCase();if(xc.has(t)){const r=xc.get(t);return Ra[r]}const l=t.split("").reduce((r,a)=>(r<<5)-r+a.charCodeAt(0),0),i=4+Math.abs(l)%(Ra.length-4);return Ra[i]}function ch({value:e,onChange:n}){return c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:c.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),c.jsx("input",{className:"w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring",placeholder:"search",value:e,onChange:t=>n(t.target.value)})]})}function uh({show:e,onToggle:n}){return c.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 text-sm",children:[c.jsx("input",{type:"checkbox",className:"h-4 w-4",checked:e,onChange:t=>n(t.target.checked)}),"Show help text"]})}function Tf({levelName:e,levelData:n,selected:t,toggle:l,showHelp:i,onUpdateInverters:r,groupsExpanded:a,pointHelpEnabled:o,onTogglePointHelp:s,depth:d=0}){const u=`group-${e.replace(/\s+/g,"-")}-${d}`,m=Array.isArray(n);if(!n)return null;const f=y=>{const _=`${y.model}:${y.point}`,g=y.entry.description||_,p=y.entry.longdescription||g,h=y.entry.unit&&y.entry.unit!=="N/A"?` (${y.entry.unit})`:"",v=t.has(_),C=v?t.get(_)||new Set(["001"]):new Set,w=Array.isArray(y.labels)?y.labels:[],L=i||o.has(_);return c.jsxs("div",{id:`point-${_.replace(/:/g,"-")}`,"data-point-key":_,className:"rounded-md px-2 py-1 hover:bg-gray-50 transition-colors",children:[c.jsx("div",{className:"flex items-start gap-2 flex-wrap",children:c.jsxs("label",{className:"flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0",children:[c.jsx("input",{type:"checkbox",checked:v,onChange:()=>l(_),className:"h-4 w-4 flex-shrink-0"}),c.jsxs("span",{className:"text-sm",children:[g,h]}),c.jsx("span",{className:`ml-1 cursor-pointer flex-shrink-0 ${L?"text-blue-600 hover:text-blue-700":"text-gray-400 hover:text-gray-600"}`,title:p,"aria-label":"Help",onClick:S=>{S.stopPropagation(),s(_)},children:"ⓘ"}),v&&c.jsxs("div",{className:"ml-auto flex items-center gap-1 flex-shrink-0",onClick:S=>S.stopPropagation(),children:[c.jsx("span",{className:"text-xs text-gray-600",children:"Inverter SN:"}),c.jsx(ph,{selectedInverters:C,onChange:S=>r(_,S)})]}),L&&w.length>0&&c.jsx("div",{className:"ml-2 flex flex-wrap gap-1 w-full",children:w.map((S,E)=>{const A=et(S.label_family,S.label_text),j=ri(S.label_family,S.label_text)||`${S.label_family}: ${S.label_text}`;return c.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${A.bg} ${A.text} ${A.border}`,title:j,children:S.label_text},E)})})]})}),L&&c.jsx("div",{className:"pl-6 text-xs text-gray-500 whitespace-pre-wrap",children:p})]},_)};if(m){const y=n;return c.jsx("div",{className:"ml-2 space-y-1",children:y.map(f)})}if(!(n instanceof Map))return console.error("LabelGroup: levelData is neither array nor Map",{levelName:e,depth:d,levelData:n,type:typeof n}),null;const b=n,x=d===0;return c.jsxs("details",{id:u,className:`group border-b py-2 ${x?"":"ml-2 border-l pl-2"}`,open:a,children:[c.jsxs("summary",{className:`cursor-pointer list-none ${x?"font-semibold":"font-medium text-gray-700"}`,children:[c.jsx("span",{className:"mr-1",children:"▾"}),e]}),c.jsx("div",{className:"mt-2 ml-1 space-y-2",children:[...b.entries()].map(([y,_])=>y===""?Array.isArray(_)?c.jsx("div",{className:"ml-2 space-y-1",children:_.map(f)},""):null:c.jsx(Tf,{levelName:y,levelData:_,selected:t,toggle:l,showHelp:i,onUpdateInverters:r,groupsExpanded:a,pointHelpEnabled:o,onTogglePointHelp:s,depth:d+1},y))})]})}function mh({family:e,labels:n,onClose:t}){const l=ri(e),i=[...n].sort();return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:t,children:c.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:r=>r.stopPropagation(),children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("h2",{className:"text-xl font-semibold text-gray-800",children:[e," Labels"]}),c.jsx("button",{onClick:t,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:c.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l&&c.jsxs("div",{className:"mb-4 rounded-lg bg-blue-50 p-3 text-sm text-gray-700",children:[c.jsxs("strong",{className:"font-semibold",children:["About ",e,":"]})," ",l]}),c.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:c.jsx("div",{className:"space-y-4",children:i.map(r=>{const a=ri(e,r);return c.jsxs("div",{className:"border-b border-gray-200 pb-3 last:border-b-0",children:[c.jsx("div",{className:"mb-1 font-medium text-gray-800",children:r}),a?c.jsx("div",{className:"text-sm text-gray-600",children:a}):c.jsx("div",{className:"text-sm italic text-gray-400",children:"No help text available"})]},r)})})})]})})}function fh({allLabels:e,selectedLabels:n,onToggleLabel:t,onClearFilters:l}){const[i,r]=te.useState(200),[a,o]=te.useState(!1),[s,d]=te.useState(null),[u,m]=te.useState(!1),f=te.useRef(null),b=te.useRef(null),x=w=>{w.preventDefault(),o(!0)};te.useEffect(()=>{if(!a)return;const w=S=>{if(f.current){const E=f.current.getBoundingClientRect(),A=S.clientY-E.top;A>=100&&A<=600&&r(A)}},L=()=>{o(!1)};return document.addEventListener("mousemove",w),document.addEventListener("mouseup",L),()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",L)}},[a]);const y="Level of Detail",_=e.get(y)||new Set,g=new Map(e);g.delete(y);const p=Array.from(n).map(w=>{const[L,S]=w.split(":",2);return{family:L,text:S}}).filter(({family:w})=>w!==y),h=Array.from(n).filter(w=>w.startsWith(`${y}:`)).map(w=>w.split(":",2)[1]),v=et(y),C=h.length>0;return c.jsx("div",{ref:f,className:"mb-3 rounded-lg border bg-gray-50 p-2",children:c.jsxs("details",{ref:b,className:"group",open:u,onToggle:w=>m(w.target.open),children:[c.jsx("summary",{className:"cursor-pointer list-none",children:c.jsx("div",{className:"mb-1 flex items-start justify-between gap-2",children:c.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0 flex-wrap",children:[c.jsx("svg",{className:"h-4 w-4 text-gray-600 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),c.jsx("span",{className:"flex-shrink-0",children:"Filters"}),c.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[c.jsxs("button",{onClick:w=>{w.stopPropagation(),d(y)},className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 justify-between ${C?`${v.bg} ${v.text} ${v.border} border-2`:`${v.bg} ${v.text} ${v.border} border`}`,title:"Level of Detail",children:[c.jsx("span",{className:"truncate",children:y}),c.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${v.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),c.jsx("div",{className:"flex flex-wrap items-center gap-1",children:[..._].sort().map(w=>{const L=`${y}:${w}`,S=n.has(L),E=et(y);return c.jsx("button",{onClick:A=>{A.stopPropagation(),t(y,w)},className:`rounded border px-1.5 py-0.5 text-xs transition-all ${S?`${E.bg} ${E.text} ${E.border} border-2 font-semibold`:`bg-white ${E.text} ${E.border} hover:opacity-80`}`,style:S?void 0:{borderColor:"currentColor"},title:`${y}: ${w}`,children:w},L)})})]}),!u&&g.size>0&&c.jsx("button",{onClick:w=>{w.stopPropagation(),b.current&&(b.current.open=!0,m(!0))},className:"ml-2 text-xs text-blue-600 hover:text-blue-700 underline flex-shrink-0",children:"More Filters"}),p.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"flex flex-wrap items-center gap-1 ml-2 min-w-0",children:p.map(({family:w,text:L})=>{const S=et(w);return c.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${S.bg} ${S.text} ${S.border} border-2 font-semibold flex-shrink-0`,children:L},`${w}:${L}`)})}),c.jsx("button",{onClick:w=>{w.stopPropagation(),l()},className:"ml-2 flex-shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:c.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})]})})}),c.jsx("div",{className:"space-y-0.5 overflow-auto mt-2",style:{height:`${i}px`},children:[...g.entries()].map(([w,L])=>{const S=ri(w),E=et(w),A=Array.from(L).some(R=>n.has(`${w}:${R}`));return c.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-0.5",children:[c.jsxs("button",{onClick:()=>d(w),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${A?`${E.bg} ${E.text} ${E.border} border-2`:`${E.bg} ${E.text} ${E.border} border`}`,title:S||`View help for ${w} labels`,"aria-label":`Help for ${w}`,children:[c.jsx("span",{className:"truncate",children:w}),c.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${E.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),c.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...L].sort().map(R=>{const j=`${w}:${R}`,ve=n.has(j),ln=et(w),Yn=ri(w,R);return c.jsx("button",{onClick:()=>t(w,R),className:`rounded border px-1.5 py-0.5 text-xs transition-all ${ve?`${ln.bg} ${ln.text} ${ln.border} border-2 font-semibold`:`bg-white ${ln.text} ${ln.border} hover:opacity-80`}`,style:ve?void 0:{borderColor:"currentColor"},title:Yn||`${w}: ${R}`,children:R},j)})})]},w)})}),s&&c.jsx(mh,{family:s,labels:e.get(s)||new Set,onClose:()=>d(null)}),c.jsx("div",{onMouseDown:x,className:"mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors",title:"Drag to resize"})]})})}const nr=["001","002","003"],vc=[{bg:"bg-purple-500",border:"border-purple-600"},{bg:"bg-green-500",border:"border-green-600"},{bg:"bg-teal-500",border:"border-teal-600"},{bg:"bg-blue-500",border:"border-blue-600"},{bg:"bg-pink-500",border:"border-pink-600"},{bg:"bg-orange-500",border:"border-orange-600"},{bg:"bg-indigo-500",border:"border-indigo-600"},{bg:"bg-red-500",border:"border-red-600"}];function ph({selectedInverters:e,onChange:n}){const[t,l]=te.useState(!1),i=te.useRef(null),r=e.size===nr.length,a=r?"All Inverters":Array.from(e).sort().join(", ");te.useEffect(()=>{const d=u=>{i.current&&!i.current.contains(u.target)&&l(!1)};if(t)return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[t]);const o=()=>{n(r?new Set(["001"]):new Set(nr))},s=d=>{const u=new Set(e);u.has(d)?(u.delete(d),u.size===0&&u.add("001")):u.add(d),n(u)};return c.jsxs("div",{className:"relative",ref:i,children:[c.jsxs("button",{type:"button",onClick:()=>l(!t),className:"text-xs border border-blue-300 rounded px-2 py-1 bg-white text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1",children:[c.jsx("span",{children:a}),c.jsx("svg",{className:`h-3 w-3 transition-transform ${t?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),t&&c.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]",children:c.jsxs("div",{className:"py-1",children:[c.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:r,onChange:o,className:"h-3 w-3"}),c.jsx("span",{className:"text-xs text-gray-700",children:"All Inverters"})]}),nr.map(d=>c.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:e.has(d),onChange:()=>s(d),className:"h-3 w-3"}),c.jsx("span",{className:"text-xs text-gray-700",children:d})]},d))]})})]})}function yh({selectedPoints:e,protocols:n,onUpdateInverters:t,onScrollToPoint:l,onRemoveInverter:i}){const[r,a]=te.useState(new Set),o=Array.from(e.entries()).map(([b,x])=>{const[y,_]=b.split(":"),g=n.find(h=>h.model===y&&h.point===_),p=g&&(g.entry.description||g.entry.name)||_;return{key:b,name:p,inverters:x}}).filter(b=>b.name),s=o.flatMap(({key:b,name:x,inverters:y})=>{var v;const[_,g]=b.split(":"),p=n.find(C=>C.model===_&&C.point===g),h=(v=p==null?void 0:p.entry)!=null&&v.unit&&p.entry.unit!=="N/A"?p.entry.unit:"N/A";return Array.from(y).sort().map((C,w)=>({key:b,pointKey:`${b}:${C}`,name:x,sn:C,unit:h,colorIndex:(o.findIndex(L=>L.key===b)*nr.length+w)%vc.length}))}),d=s.reduce((b,x)=>(b.has(x.unit)||b.set(x.unit,[]),b.get(x.unit).push(x),b),new Map),u=b=>{a(x=>{const y=new Set(x);return y.has(b)?y.delete(b):y.add(b),y})},m=b=>{const y=s.filter(_=>!r.has(_.pointKey)).length===1&&!r.has(b);a(y?new Set:new Set(s.filter(_=>_.pointKey!==b).map(_=>_.pointKey)))},f=(b,x,y)=>{y.stopPropagation(),i==null||i(b,x)};return c.jsxs("div",{className:"w-full h-full p-4 flex flex-col",children:[c.jsx("div",{className:"mb-2 text-sm font-semibold text-gray-700",children:"Chart"}),c.jsxs("div",{className:"relative flex-1 border border-gray-400 bg-gray-50 min-h-0",children:[c.jsxs("div",{className:"absolute left-0 top-0 bottom-0 w-8 border-r border-gray-600 flex flex-col items-center justify-between py-2",children:[c.jsx("span",{className:"text-xs text-gray-600 transform -rotate-90 whitespace-nowrap",children:"Value"}),c.jsxs("div",{className:"flex flex-col items-center gap-1",children:[c.jsx("div",{className:"w-2 h-px bg-gray-600"}),c.jsx("div",{className:"w-2 h-px bg-gray-600"}),c.jsx("div",{className:"w-2 h-px bg-gray-600"}),c.jsx("div",{className:"w-2 h-px bg-gray-600"}),c.jsx("div",{className:"w-2 h-px bg-gray-600"})]}),c.jsx("span",{className:"text-xs text-gray-600",children:"0"})]}),c.jsxs("div",{className:"absolute bottom-0 left-8 right-0 h-8 border-t border-gray-600 flex items-center justify-between px-2",children:[c.jsx("span",{className:"text-xs text-gray-600",children:"0"}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("div",{className:"h-2 w-px bg-gray-600"}),c.jsx("div",{className:"h-2 w-px bg-gray-600"}),c.jsx("div",{className:"h-2 w-px bg-gray-600"}),c.jsx("div",{className:"h-2 w-px bg-gray-600"}),c.jsx("div",{className:"h-2 w-px bg-gray-600"})]}),c.jsx("span",{className:"text-xs text-gray-600",children:"Time"})]}),c.jsx("div",{className:"absolute inset-0 left-8 bottom-8 p-4",children:s.length===0?c.jsx("div",{className:"flex items-center justify-center h-full text-sm text-gray-400",children:"Select points to display charts"}):c.jsx("div",{className:"flex items-center justify-center h-full text-sm text-gray-400",children:"Chart visualization would appear here"})})]}),s.length>0&&c.jsx("div",{className:"mt-4 flex flex-wrap gap-3",children:Array.from(d.entries()).map(([b,x])=>c.jsxs("div",{className:"bg-white border border-gray-300 rounded p-3 flex-shrink-0",children:[c.jsx("div",{className:"flex justify-end mb-2",children:c.jsx("span",{className:"text-xs text-gray-600 font-medium",children:b})}),c.jsx("div",{className:"space-y-1",children:x.map(({pointKey:y,name:_,sn:g,colorIndex:p,key:h})=>{const v=_.length>50?`${_.substring(0,47)}...`:_,C=vc[p],w=r.has(y);return c.jsxs("div",{className:"flex items-center gap-2 text-sm group hover:bg-gray-50 rounded px-1 py-0.5 -mx-1 transition-colors cursor-pointer",onClick:()=>u(y),onDoubleClick:L=>{L.stopPropagation(),m(y)},children:[c.jsx("button",{onClick:L=>{L.stopPropagation(),u(y)},onDoubleClick:L=>{L.stopPropagation(),m(y)},className:`w-3 h-3 rounded border-2 ${C.border} flex-shrink-0 flex items-center justify-center transition-colors ${w?"bg-white":C.bg} hover:opacity-80`,title:w?"Show in chart (double-click to show only this)":"Hide in chart (double-click to show only this)",children:w&&c.jsx("svg",{className:"w-2 h-2 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})}),c.jsxs("span",{className:`text-gray-700 flex-1 ${w?"opacity-50 line-through":""}`,title:"Click to toggle visibility (double-click to show only this)",children:["SN ",g," ",v]}),c.jsx("span",{className:"text-gray-400 text-xs font-mono min-w-[60px] text-right",children:"--"}),c.jsx("button",{onClick:L=>f(h,g,L),className:"opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity flex-shrink-0 ml-1",title:"Remove this inverter SN",children:c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},y)})})]},b))})]})}function gh({onClose:e}){return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:c.jsxs("div",{className:"relative max-w-lg rounded-lg bg-white p-6 shadow-xl",onClick:n=>n.stopPropagation(),children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:"Group By"}),c.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:c.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[c.jsx("p",{children:"Reorder or add levels to control how points are grouped in the list."}),c.jsx("p",{children:"For example, grouping by Component → Feature will show each component first, with its features listed underneath."}),c.jsx("p",{className:"text-gray-600",children:"You can add or remove levels using the + button and × button next to each level."})]})]})})}function bh({availableFamilies:e,hierarchy:n,onChange:t}){const[l,i]=te.useState(!1),r=(d,u)=>{const m=[...n];u===""?m.splice(d,1):m[d]=u,t(m)},a=()=>{t([...n,""])},o=d=>{const u=[...n];u.splice(d,1),t(u)},s=d=>{const u=n.filter((m,f)=>f!==d&&n[f]);return e.filter(m=>!u.includes(m))};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"mb-3 rounded-lg border bg-gray-50 p-2",children:c.jsxs("details",{className:"group",children:[c.jsx("summary",{className:"cursor-pointer list-none",children:c.jsx("div",{className:"flex items-start justify-between gap-2",children:c.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[c.jsx("span",{className:"mr-1 group-open:rotate-90 transition-transform flex-shrink-0",children:"▸"}),c.jsx("span",{className:"flex-shrink-0",children:"Group by"}),n.filter(d=>d).length>0&&c.jsx("div",{className:"flex flex-wrap items-center gap-1 ml-2 min-w-0",children:n.map((d,u)=>{if(!d)return null;const m=et(d);return c.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${m.bg} ${m.text} ${m.border} border font-semibold flex-shrink-0`,children:d},u)})})]})})}),c.jsxs("div",{className:"mt-2",children:[c.jsx("button",{onClick:()=>i(!0),className:"mb-2 text-xs text-blue-600 hover:text-blue-800 hover:underline",children:"What does this do?"}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[n.map((d,u)=>c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsxs("label",{className:"text-gray-600",children:["Level ",u+1,":"]}),c.jsxs("select",{value:d||"",onChange:m=>r(u,m.target.value),className:"rounded border px-2 py-1 text-xs",children:[c.jsx("option",{value:"",children:"(None)"}),s(u).map(m=>c.jsx("option",{value:m,children:m},m))]}),n.length>1&&c.jsx("button",{onClick:()=>o(u),className:"rounded border bg-white px-1.5 py-0.5 text-xs text-red-600 hover:bg-red-50",title:"Remove level",children:"×"})]},u)),c.jsx("button",{onClick:a,className:"rounded border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",title:"Add hierarchy level",children:"+"}),n.length===0&&c.jsx("div",{className:"text-gray-500 italic",children:"No hierarchy levels configured"})]})]})]})}),l&&c.jsx(gh,{onClose:()=>i(!1)})]})}function hh(){const[e,n]=T.useState(""),[t,l]=T.useState(()=>new Map),[i,r]=T.useState(!1),[a,o]=T.useState(new Set),[s,d]=T.useState(()=>new Set(["Level of Detail:Standard"])),[u,m]=T.useState(["Component","Feature"]),[f,b]=T.useState(!0),[x,y]=T.useState(650),[_,g]=te.useState(!1),p=te.useRef(null),h=te.useRef(null),[v,C]=te.useState(""),[w,L]=te.useState(!0);te.useEffect(()=>{if(!h.current)return;const P=()=>{if(!h.current)return;const U=h.current,ie=U.querySelectorAll('[id^="group-"]');let me="";ie.forEach(xt=>{const Jn=xt.getBoundingClientRect(),pi=U.getBoundingClientRect();Jn.top-pi.top<=pi.height*.3&&Jn.bottom>pi.top&&(me=xt.id)}),me&&me!==v&&C(me)},V=setTimeout(P,100),F=h.current;return F.addEventListener("scroll",P),()=>{clearTimeout(V),F.removeEventListener("scroll",P)}},[v]),te.useEffect(()=>{const P=V=>{V.key==="Escape"&&f&&b(!1)};return document.addEventListener("keydown",P),()=>{document.removeEventListener("keydown",P)}},[f]);const S=P=>{f?E(P):(b(!0),setTimeout(()=>{E(P)},300))},E=P=>{if(!h.current)return;const V=h.current.querySelector(`[data-point-key="${P}"]`);V&&(V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("bg-blue-100"),setTimeout(()=>{V.classList.remove("bg-blue-100")},1e3))},A=()=>{try{const P=localStorage.getItem("matter-app-last-inverter-selection");if(P){const V=JSON.parse(P);if(Array.isArray(V)&&V.length>0)return new Set(V)}}catch{}return new Set(["001"])},R=P=>{try{localStorage.setItem("matter-app-last-inverter-selection",JSON.stringify(Array.from(P)))}catch{}},j=P=>{P.preventDefault(),g(!0)};te.useEffect(()=>{if(!_)return;const P=F=>{if(p.current){const ie=p.current.getBoundingClientRect().right-F.clientX;ie>=300&&ie<=800&&y(ie)}},V=()=>{g(!1)};return document.addEventListener("mousemove",P),document.addEventListener("mouseup",V),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",V)}},[_]);const ve=T.useMemo(()=>dh(Ct),[]),ln=T.useMemo(()=>[...ve.keys()].sort(),[ve]),Yn=T.useMemo(()=>{let P=Ct;if(P=P.filter(V=>(Array.isArray(V.labels)?V.labels:[]).length>0),e){const V=e.toLowerCase();P=P.filter(F=>(F.entry.description||"").toLowerCase().includes(V)||(F.entry.longdescription||"").toLowerCase().includes(V)||(F.entry.name||"").toLowerCase().includes(V))}if(s.size>0){const V=new Map;s.forEach(F=>{const[U,ie]=F.split(":",2);V.has(U)||V.set(U,new Set),V.get(U).add(ie)}),P=P.filter(F=>{const U=Array.isArray(F.labels)?F.labels:[];if(U.length===0)return!1;const ie=new Map;U.forEach(me=>{ie.has(me.label_family)||ie.set(me.label_family,new Set),ie.get(me.label_family).add(me.label_text)});for(const[me,xt]of V.entries()){const Jn=ie.get(me);if(!Jn||![...xt].some(Xs=>Jn.has(Xs)))return!1}return!0})}return P},[e,s]),mn=T.useMemo(()=>sh(Yn,u),[Yn,u]);te.useEffect(()=>{C(""),h.current&&setTimeout(()=>{const P=h.current;P&&P.dispatchEvent(new Event("scroll"))},150)},[mn]);const fl=P=>{l(V=>{const F=new Map(V);if(F.has(P))F.delete(P);else{const U=A();F.set(P,new Set(U))}return F})},N=(P,V)=>{R(V),l(F=>{const U=new Map(F);return V.size===0?U.delete(P):U.set(P,V),U})},G=(P,V)=>{l(F=>{const U=new Map(F),ie=U.get(P);if(!ie)return U;const me=new Set(ie);return me.delete(V),me.size===0?U.delete(P):U.set(P,me),U})},M=(P,V)=>{d(F=>{const U=new Set(F),ie=`${P}:${V}`;return U.has(ie)?U.delete(ie):U.add(ie),U})},Y=()=>d(new Set),ae=P=>{o(V=>{const F=new Set(V);return F.has(P)?F.delete(P):F.add(P),F})},_t=Yn.length,fn=T.useMemo(()=>Ct.filter(P=>(Array.isArray(P.labels)?P.labels:[]).length>0).length,[]);return T.useEffect(()=>{try{console.assert(Ct.length>0,"Expected sample data");const P=Ct.find(V=>V.entry.name==="pNom");P&&console.assert(P.entry.unit==="W","pNom should have unit W")}catch(P){console.warn("Self-test failed:",P)}},[]),c.jsx("div",{className:"h-full bg-slate-100 p-4 md:p-6",children:c.jsxs("div",{className:"mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative",children:[c.jsx(yh,{selectedPoints:t,protocols:Ct,onUpdateInverters:N,onScrollToPoint:S,onRemoveInverter:G}),c.jsx("button",{onClick:()=>b(!f),className:"absolute top-4 z-30 rounded-md border border-gray-300 bg-white p-2 shadow-sm hover:bg-gray-50 transition-all duration-300",style:{right:f?`${x+16}px`:"1rem"},title:f?"Hide sidebar":"Show sidebar",children:c.jsx("svg",{className:`h-5 w-5 text-gray-600 transition-transform ${f?"":"rotate-180"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),c.jsxs("div",{ref:p,className:`absolute top-0 right-0 bottom-0 bg-white border-l border-gray-300 shadow-lg transition-transform duration-300 overflow-hidden ${f?"translate-x-0":"translate-x-full"}`,style:{width:`${x}px`,maxHeight:"100%"},children:[f&&c.jsx("div",{onMouseDown:j,className:"absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize bg-gray-300 hover:bg-gray-400 transition-colors z-10",title:"Drag to resize"}),c.jsxs("div",{className:"h-full overflow-hidden flex flex-row",style:{paddingLeft:"0.25rem"},children:[mn.size>0&&c.jsx("div",{className:"w-32 border-r border-gray-200 flex-shrink-0 overflow-y-auto",children:c.jsxs("nav",{className:"p-3 text-sm text-gray-800",children:[c.jsx("div",{className:"text-emerald-600 font-semibold mb-2 text-xs",children:"Navigation"}),c.jsx("div",{className:"flex flex-col gap-1",children:[...mn.entries()].filter(([P])=>P!=="(Unlabeled)").map(([P])=>{const V=`group-${P.replace(/\s+/g,"-")}-0`,F=v===V;return c.jsxs("div",{className:"relative",children:[F&&c.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),c.jsx("button",{className:`px-2 py-1 hover:bg-gray-50 rounded text-xs w-full text-left transition-colors ${F?"text-blue-600 font-medium bg-blue-50":"text-gray-700"}`,onClick:()=>{const U=document.getElementById(V);if(U&&h.current){const ie=h.current.getBoundingClientRect(),me=U.getBoundingClientRect(),xt=h.current.scrollTop,Jn=me.top-ie.top+xt;h.current.scrollTo({top:Jn-10,behavior:"smooth"})}},children:P})]},P)})})]})}),c.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[c.jsxs("div",{className:"p-4 flex-shrink-0",children:[c.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[c.jsx("div",{className:"text-lg font-semibold",children:"Select Points"}),c.jsx("div",{className:"text-sm",children:c.jsxs("span",{children:["Available: ",_t.toLocaleString()," of ",fn.toLocaleString()]})})]}),c.jsx(bh,{availableFamilies:ln,hierarchy:u,onChange:m}),c.jsx(fh,{allLabels:ve,selectedLabels:s,onToggleLabel:M,onClearFilters:Y}),c.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[c.jsx("div",{className:"flex-1",children:c.jsx(ch,{value:e,onChange:n})}),c.jsx(uh,{show:i,onToggle:r})]}),c.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[c.jsxs("button",{onClick:()=>{L(!0),h.current&&h.current.querySelectorAll("details").forEach(V=>{V.open=!0})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[c.jsx("span",{children:"⤵"}),c.jsx("span",{children:"Expand all"})]}),c.jsxs("button",{onClick:()=>{L(!1),h.current&&h.current.querySelectorAll("details").forEach(V=>{V.open=!1})},className:"text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-1",children:[c.jsx("span",{children:"⤴"}),c.jsx("span",{children:"Collapse all"})]})]})]}),c.jsx("div",{className:"flex-1 overflow-y-auto px-4 pb-4 pr-1",ref:h,children:mn.size===0?c.jsx("div",{className:"py-4 text-center text-sm text-gray-500",children:"No points match the current filters"}):[...mn.entries()].filter(([P])=>P!=="(Unlabeled)").map(([P,V])=>c.jsx(Tf,{levelName:P,levelData:V,selected:t,toggle:fl,showHelp:i,onUpdateInverters:N,groupsExpanded:w,pointHelpEnabled:a,onTogglePointHelp:ae,depth:0},P))})]})]})]})]})})}const wc="matter-app-active-view";function _h(){const[e,n]=T.useState(()=>{const t=localStorage.getItem(wc);return t==="site-config"||t==="historical-data"?t:"site-config"});return T.useEffect(()=>{localStorage.setItem(wc,e)},[e]),c.jsxs("div",{className:"flex h-screen bg-slate-100",children:[c.jsxs("aside",{className:"w-64 bg-white border-r border-slate-300 flex flex-col shadow-sm",children:[c.jsx("div",{className:"p-4 border-b border-slate-300",children:c.jsx("h1",{className:"text-lg font-semibold text-slate-800",children:"Matter App"})}),c.jsxs("nav",{className:"flex-1 p-3",children:[c.jsx("button",{onClick:()=>n("site-config"),className:`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${e==="site-config"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xl",children:"⚙️"}),c.jsx("span",{children:"Site Config"})]})}),c.jsx("button",{onClick:()=>n("historical-data"),className:`w-full text-left px-4 py-3 rounded-lg transition-colors ${e==="historical-data"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xl",children:"📊"}),c.jsx("span",{children:"Historical Data"})]})})]}),c.jsx("div",{className:"p-4 border-t border-slate-300 text-xs text-slate-500",children:c.jsxs("div",{children:["Active: ",e==="site-config"?"Site Config":"Historical Data"]})})]}),c.jsxs("main",{className:"flex-1 overflow-auto",children:[e==="site-config"&&c.jsx(Kg,{}),e==="historical-data"&&c.jsx(hh,{})]})]})}ja.createRoot(document.getElementById("root")).render(c.jsx(te.StrictMode,{children:c.jsx(_h,{})}));

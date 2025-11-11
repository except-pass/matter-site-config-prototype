(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function kf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gc={exports:{}},Sr={},bc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zl=Symbol.for("react.element"),Pf=Symbol.for("react.portal"),Ef=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),Af=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Gf=Symbol.for("react.memo"),Mf=Symbol.for("react.lazy"),zs=Symbol.iterator;function Ff(e){return e===null||typeof e!="object"?null:(e=zs&&e[zs]||e["@@iterator"],typeof e=="function"?e:null)}var hc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_c=Object.assign,xc={};function Zt(e,n,t){this.props=e,this.context=n,this.refs=xc,this.updater=t||hc}Zt.prototype.isReactComponent={};Zt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vc(){}vc.prototype=Zt.prototype;function Fo(e,n,t){this.props=e,this.context=n,this.refs=xc,this.updater=t||hc}var Oo=Fo.prototype=new vc;Oo.constructor=Fo;_c(Oo,Zt.prototype);Oo.isPureReactComponent=!0;var Ks=Array.isArray,wc=Object.prototype.hasOwnProperty,Bo={current:null},Sc={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,n,t){var l,i={},r=null,a=null;if(n!=null)for(l in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(r=""+n.key),n)wc.call(n,l)&&!Sc.hasOwnProperty(l)&&(i[l]=n[l]);var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){for(var s=Array(o),d=0;d<o;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(l in o=e.defaultProps,o)i[l]===void 0&&(i[l]=o[l]);return{$$typeof:Zl,type:e,key:r,ref:a,props:i,_owner:Bo.current}}function Of(e,n){return{$$typeof:Zl,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ro(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zl}function Bf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Qs=/\/+/g;function ea(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Bf(""+e.key):n.toString(36)}function Vi(e,n,t,l,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zl:case Pf:a=!0}}if(a)return a=e,i=i(a),e=l===""?"."+ea(a,0):l,Ks(i)?(t="",e!=null&&(t=e.replace(Qs,"$&/")+"/"),Vi(i,n,t,"",function(d){return d})):i!=null&&(Ro(i)&&(i=Of(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Qs,"$&/")+"/")+e)),n.push(i)),1;if(a=0,l=l===""?".":l+":",Ks(e))for(var o=0;o<e.length;o++){r=e[o];var s=l+ea(r,o);a+=Vi(r,n,t,s,i)}else if(s=Ff(e),typeof s=="function")for(e=s.call(e),o=0;!(r=e.next()).done;)r=r.value,s=l+ea(r,o++),a+=Vi(r,n,t,s,i);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function si(e,n,t){if(e==null)return e;var l=[],i=0;return Vi(e,l,"","",function(r){return n.call(t,r,i++)}),l}function Rf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Ti={transition:null},jf={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:Bo};function Lc(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:si,forEach:function(e,n,t){si(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return si(e,function(){n++}),n},toArray:function(e){return si(e,function(n){return n})||[]},only:function(e){if(!Ro(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Zt;M.Fragment=Ef;M.Profiler=If;M.PureComponent=Fo;M.StrictMode=Nf;M.Suspense=Df;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;M.act=Lc;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=_c({},e.props),i=e.key,r=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,a=Bo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in n)wc.call(n,s)&&!Sc.hasOwnProperty(s)&&(l[s]=n[s]===void 0&&o!==void 0?o[s]:n[s])}var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){o=Array(s);for(var d=0;d<s;d++)o[d]=arguments[d+2];l.children=o}return{$$typeof:Zl,type:e.type,key:i,ref:r,props:l,_owner:a}};M.createContext=function(e){return e={$$typeof:Vf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Af,_context:e},e.Consumer=e};M.createElement=Cc;M.createFactory=function(e){var n=Cc.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Tf,render:e}};M.isValidElement=Ro;M.lazy=function(e){return{$$typeof:Mf,_payload:{_status:-1,_result:e},_init:Rf}};M.memo=function(e,n){return{$$typeof:Gf,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=n}};M.unstable_act=Lc;M.useCallback=function(e,n){return ve.current.useCallback(e,n)};M.useContext=function(e){return ve.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};M.useEffect=function(e,n){return ve.current.useEffect(e,n)};M.useId=function(){return ve.current.useId()};M.useImperativeHandle=function(e,n,t){return ve.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return ve.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return ve.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return ve.current.useMemo(e,n)};M.useReducer=function(e,n,t){return ve.current.useReducer(e,n,t)};M.useRef=function(e){return ve.current.useRef(e)};M.useState=function(e){return ve.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return ve.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return ve.current.useTransition()};M.version="18.3.1";bc.exports=M;var V=bc.exports;const Ie=kf(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf=V,Wf=Symbol.for("react.element"),Hf=Symbol.for("react.fragment"),qf=Object.prototype.hasOwnProperty,$f=Uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zf={key:!0,ref:!0,__self:!0,__source:!0};function kc(e,n,t){var l,i={},r=null,a=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(a=n.ref);for(l in n)qf.call(n,l)&&!zf.hasOwnProperty(l)&&(i[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps,n)i[l]===void 0&&(i[l]=n[l]);return{$$typeof:Wf,type:e,key:r,ref:a,props:i,_owner:$f.current}}Sr.Fragment=Hf;Sr.jsx=kc;Sr.jsxs=kc;gc.exports=Sr;var c=gc.exports,Ga={},Pc={exports:{}},Ge={},Ec={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,A){var G=P.length;P.push(A);e:for(;0<G;){var $=G-1>>>1,re=P[$];if(0<i(re,A))P[$]=A,P[G]=re,G=$;else break e}}function t(P){return P.length===0?null:P[0]}function l(P){if(P.length===0)return null;var A=P[0],G=P.pop();if(G!==A){P[0]=G;e:for(var $=0,re=P.length,ft=re>>>1;$<ft;){var qn=2*($+1)-1,Zr=P[qn],$n=qn+1,oi=P[$n];if(0>i(Zr,G))$n<re&&0>i(oi,Zr)?(P[$]=oi,P[$n]=G,$=$n):(P[$]=Zr,P[qn]=G,$=qn);else if($n<re&&0>i(oi,G))P[$]=oi,P[$n]=G,$=$n;else break e}}return A}function i(P,A){var G=P.sortIndex-A.sortIndex;return G!==0?G:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var s=[],d=[],u=1,m=null,p=3,g=!1,x=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(P){for(var A=t(d);A!==null;){if(A.callback===null)l(d);else if(A.startTime<=P)l(d),A.sortIndex=A.expirationTime,n(s,A);else break;A=t(d)}}function v(P){if(b=!1,h(P),!x)if(t(s)!==null)x=!0,q(w);else{var A=t(d);A!==null&&ne(v,A.startTime-P)}}function w(P,A){x=!1,b&&(b=!1,y(S),S=-1),g=!0;var G=p;try{for(h(A),m=t(s);m!==null&&(!(m.expirationTime>A)||P&&!Q());){var $=m.callback;if(typeof $=="function"){m.callback=null,p=m.priorityLevel;var re=$(m.expirationTime<=A);A=e.unstable_now(),typeof re=="function"?m.callback=re:m===t(s)&&l(s),h(A)}else l(s);m=t(s)}if(m!==null)var ft=!0;else{var qn=t(d);qn!==null&&ne(v,qn.startTime-A),ft=!1}return ft}finally{m=null,p=G,g=!1}}var C=!1,L=null,S=-1,N=5,I=-1;function Q(){return!(e.unstable_now()-I<N)}function R(){if(L!==null){var P=e.unstable_now();I=P;var A=!0;try{A=L(!0,P)}finally{A?en():(C=!1,L=null)}}else C=!1}var en;if(typeof f=="function")en=function(){f(R)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,F=D.port2;D.port1.onmessage=R,en=function(){F.postMessage(null)}}else en=function(){_(R,0)};function q(P){L=P,C||(C=!0,en())}function ne(P,A){S=_(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,q(w))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var G=p;p=A;try{return P()}finally{p=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=p;p=P;try{return A()}finally{p=G}},e.unstable_scheduleCallback=function(P,A,G){var $=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?$+G:$):G=$,P){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=G+re,P={id:u++,callback:A,priorityLevel:P,startTime:G,expirationTime:re,sortIndex:-1},G>$?(P.sortIndex=G,n(d,P),t(s)===null&&P===t(d)&&(b?(y(S),S=-1):b=!0,ne(v,G-$))):(P.sortIndex=re,n(s,P),x||g||(x=!0,q(w))),P},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(P){var A=p;return function(){var G=p;p=A;try{return P.apply(this,arguments)}finally{p=G}}}})(Nc);Ec.exports=Nc;var Kf=Ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=V,De=Kf;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,Tl={};function dt(e,n){Wt(e,n),Wt(e+"Capture",n)}function Wt(e,n){for(Tl[e]=n,e=0;e<n.length;e++)Ic.add(n[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,Yf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ys={},Js={};function Jf(e){return Ma.call(Js,e)?!0:Ma.call(Ys,e)?!1:Yf.test(e)?Js[e]=!0:(Ys[e]=!0,!1)}function Xf(e,n,t,l){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zf(e,n,t,l){if(n===null||typeof n>"u"||Xf(e,n,t,l))return!0;if(l)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function we(e,n,t,l,i,r,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];me[n]=new we(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var jo=/[\-:]([a-z])/g;function Uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(jo,Uo);me[n]=new we(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(jo,Uo);me[n]=new we(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(jo,Uo);me[n]=new we(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wo(e,n,t,l){var i=me.hasOwnProperty(n)?me[n]:null;(i!==null?i.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Zf(n,t,i,l)&&(t=null),l||i===null?Jf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,l=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,l?e.setAttributeNS(l,n,t):e.setAttribute(n,t))))}var xn=Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),ht=Symbol.for("react.portal"),_t=Symbol.for("react.fragment"),Ho=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),Ac=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),qo=Symbol.for("react.forward_ref"),Oa=Symbol.for("react.suspense"),Ba=Symbol.for("react.suspense_list"),$o=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),Tc=Symbol.for("react.offscreen"),Xs=Symbol.iterator;function sl(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,na;function bl(e){if(na===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);na=n&&n[1]||""}return`
`+na+e}var ta=!1;function la(e,n){if(!e||ta)return"";ta=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var l=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){l=d}e.call(n.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),r=l.stack.split(`
`),a=i.length-1,o=r.length-1;1<=a&&0<=o&&i[a]!==r[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==r[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==r[o]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=o);break}}}finally{ta=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?bl(e):""}function ep(e){switch(e.tag){case 5:return bl(e.type);case 16:return bl("Lazy");case 13:return bl("Suspense");case 19:return bl("SuspenseList");case 0:case 2:case 15:return e=la(e.type,!1),e;case 11:return e=la(e.type.render,!1),e;case 1:return e=la(e.type,!0),e;default:return""}}function Ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _t:return"Fragment";case ht:return"Portal";case Fa:return"Profiler";case Ho:return"StrictMode";case Oa:return"Suspense";case Ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vc:return(e.displayName||"Context")+".Consumer";case Ac:return(e._context.displayName||"Context")+".Provider";case qo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $o:return n=e.displayName||null,n!==null?n:Ra(e.type)||"Memo";case wn:n=e._payload,e=e._init;try{return Ra(e(n))}catch{}}return null}function np(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(n);case 8:return n===Ho?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tp(e){var n=Dc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){l=""+a,r.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(a){l=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ci(e){e._valueTracker||(e._valueTracker=tp(e))}function Gc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=Dc(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,n){var t=n.checked;return ee({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Zs(e,n){var t=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;t=On(n.value!=null?n.value:t),e._wrapperState={initialChecked:l,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Mc(e,n){n=n.checked,n!=null&&Wo(e,"checked",n,!1)}function Ua(e,n){Mc(e,n);var t=On(n.value),l=n.type;if(t!=null)l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Wa(e,n.type,t):n.hasOwnProperty("defaultValue")&&Wa(e,n.type,On(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ed(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Wa(e,n,t){(n!=="number"||Ki(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var hl=Array.isArray;function Dt(e,n,t,l){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&l&&(e[t].defaultSelected=!0)}else{for(t=""+On(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ha(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return ee({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nd(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(hl(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:On(t)}}function Fc(e,n){var t=On(n.value),l=On(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),l!=null&&(e.defaultValue=""+l)}function td(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Oc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Oc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,Bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,l,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,l,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Dl(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Sl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lp=["Webkit","ms","Moz","O"];Object.keys(Sl).forEach(function(e){lp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Sl[n]=Sl[e]})});function Rc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Sl.hasOwnProperty(e)&&Sl[e]?(""+n).trim():n+"px"}function jc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var l=t.indexOf("--")===0,i=Rc(t,n[t],l);t==="float"&&(t="cssFloat"),l?e.setProperty(t,i):e[t]=i}}var ip=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(e,n){if(n){if(ip[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function za(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Gt=null,Mt=null;function ld(e){if(e=ti(e)){if(typeof Qa!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Er(n),Qa(e.stateNode,e.type,n))}}function Uc(e){Gt?Mt?Mt.push(e):Mt=[e]:Gt=e}function Wc(){if(Gt){var e=Gt,n=Mt;if(Mt=Gt=null,ld(e),n)for(e=0;e<n.length;e++)ld(n[e])}}function Hc(e,n){return e(n)}function qc(){}var ia=!1;function $c(e,n,t){if(ia)return e(n,t);ia=!0;try{return Hc(e,n,t)}finally{ia=!1,(Gt!==null||Mt!==null)&&(qc(),Wc())}}function Gl(e,n){var t=e.stateNode;if(t===null)return null;var l=Er(t);if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Ya=!1;if(gn)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){Ya=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{Ya=!1}function rp(e,n,t,l,i,r,a,o,s){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(u){this.onError(u)}}var Cl=!1,Qi=null,Yi=!1,Ja=null,ap={onError:function(e){Cl=!0,Qi=e}};function op(e,n,t,l,i,r,a,o,s){Cl=!1,Qi=null,rp.apply(ap,arguments)}function sp(e,n,t,l,i,r,a,o,s){if(op.apply(this,arguments),Cl){if(Cl){var d=Qi;Cl=!1,Qi=null}else throw Error(k(198));Yi||(Yi=!0,Ja=d)}}function ct(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function zc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function id(e){if(ct(e)!==e)throw Error(k(188))}function dp(e){var n=e.alternate;if(!n){if(n=ct(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,l=n;;){var i=t.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===t)return id(i),e;if(r===l)return id(i),n;r=r.sibling}throw Error(k(188))}if(t.return!==l.return)t=i,l=r;else{for(var a=!1,o=i.child;o;){if(o===t){a=!0,t=i,l=r;break}if(o===l){a=!0,l=i,t=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===t){a=!0,t=r,l=i;break}if(o===l){a=!0,l=r,t=i;break}o=o.sibling}if(!a)throw Error(k(189))}}if(t.alternate!==l)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Kc(e){return e=dp(e),e!==null?Qc(e):null}function Qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Qc(e);if(n!==null)return n;e=e.sibling}return null}var Yc=De.unstable_scheduleCallback,rd=De.unstable_cancelCallback,cp=De.unstable_shouldYield,up=De.unstable_requestPaint,le=De.unstable_now,mp=De.unstable_getCurrentPriorityLevel,Ko=De.unstable_ImmediatePriority,Jc=De.unstable_UserBlockingPriority,Ji=De.unstable_NormalPriority,fp=De.unstable_LowPriority,Xc=De.unstable_IdlePriority,Cr=null,rn=null;function pp(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Cr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:bp,yp=Math.log,gp=Math.LN2;function bp(e){return e>>>=0,e===0?32:31-(yp(e)/gp|0)|0}var mi=64,fi=4194304;function _l(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xi(e,n){var t=e.pendingLanes;if(t===0)return 0;var l=0,i=e.suspendedLanes,r=e.pingedLanes,a=t&268435455;if(a!==0){var o=a&~i;o!==0?l=_l(o):(r&=a,r!==0&&(l=_l(r)))}else a=t&~i,a!==0?l=_l(a):r!==0&&(l=_l(r));if(l===0)return 0;if(n!==0&&n!==l&&!(n&i)&&(i=l&-l,r=n&-n,i>=r||i===16&&(r&4194240)!==0))return n;if(l&4&&(l|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)t=31-Ye(n),i=1<<t,l|=e[t],n&=~i;return l}function hp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _p(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var a=31-Ye(r),o=1<<a,s=i[a];s===-1?(!(o&t)||o&l)&&(i[a]=hp(o,n)):s<=n&&(e.expiredLanes|=o),r&=~o}}function Xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zc(){var e=mi;return mi<<=1,!(mi&4194240)&&(mi=64),e}function ra(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ei(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ye(n),e[n]=t}function xp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ye(t),r=1<<i;n[i]=0,l[i]=-1,e[i]=-1,t&=~r}}function Qo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-Ye(t),i=1<<l;i&n|e[l]&n&&(e[l]|=n),t&=~i}}var B=0;function eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nu,Yo,tu,lu,iu,Za=!1,pi=[],Nn=null,In=null,An=null,Ml=new Map,Fl=new Map,Ln=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ad(e,n){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(n.pointerId)}}function cl(e,n,t,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},n!==null&&(n=ti(n),n!==null&&Yo(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function wp(e,n,t,l,i){switch(n){case"focusin":return Nn=cl(Nn,e,n,t,l,i),!0;case"dragenter":return In=cl(In,e,n,t,l,i),!0;case"mouseover":return An=cl(An,e,n,t,l,i),!0;case"pointerover":var r=i.pointerId;return Ml.set(r,cl(Ml.get(r)||null,e,n,t,l,i)),!0;case"gotpointercapture":return r=i.pointerId,Fl.set(r,cl(Fl.get(r)||null,e,n,t,l,i)),!0}return!1}function ru(e){var n=Qn(e.target);if(n!==null){var t=ct(n);if(t!==null){if(n=t.tag,n===13){if(n=zc(t),n!==null){e.blockedOn=n,iu(e.priority,function(){tu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=eo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Ka=l,t.target.dispatchEvent(l),Ka=null}else return n=ti(t),n!==null&&Yo(n),e.blockedOn=t,!1;n.shift()}return!0}function od(e,n,t){Di(e)&&t.delete(n)}function Sp(){Za=!1,Nn!==null&&Di(Nn)&&(Nn=null),In!==null&&Di(In)&&(In=null),An!==null&&Di(An)&&(An=null),Ml.forEach(od),Fl.forEach(od)}function ul(e,n){e.blockedOn===n&&(e.blockedOn=null,Za||(Za=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Sp)))}function Ol(e){function n(i){return ul(i,e)}if(0<pi.length){ul(pi[0],e);for(var t=1;t<pi.length;t++){var l=pi[t];l.blockedOn===e&&(l.blockedOn=null)}}for(Nn!==null&&ul(Nn,e),In!==null&&ul(In,e),An!==null&&ul(An,e),Ml.forEach(n),Fl.forEach(n),t=0;t<Ln.length;t++)l=Ln[t],l.blockedOn===e&&(l.blockedOn=null);for(;0<Ln.length&&(t=Ln[0],t.blockedOn===null);)ru(t),t.blockedOn===null&&Ln.shift()}var Ft=xn.ReactCurrentBatchConfig,Zi=!0;function Cp(e,n,t,l){var i=B,r=Ft.transition;Ft.transition=null;try{B=1,Jo(e,n,t,l)}finally{B=i,Ft.transition=r}}function Lp(e,n,t,l){var i=B,r=Ft.transition;Ft.transition=null;try{B=4,Jo(e,n,t,l)}finally{B=i,Ft.transition=r}}function Jo(e,n,t,l){if(Zi){var i=eo(e,n,t,l);if(i===null)ya(e,n,l,er,t),ad(e,l);else if(wp(i,e,n,t,l))l.stopPropagation();else if(ad(e,l),n&4&&-1<vp.indexOf(e)){for(;i!==null;){var r=ti(i);if(r!==null&&nu(r),r=eo(e,n,t,l),r===null&&ya(e,n,l,er,t),r===i)break;i=r}i!==null&&l.stopPropagation()}else ya(e,n,l,null,t)}}var er=null;function eo(e,n,t,l){if(er=null,e=zo(l),e=Qn(e),e!==null)if(n=ct(e),n===null)e=null;else if(t=n.tag,t===13){if(e=zc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return er=e,null}function au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mp()){case Ko:return 1;case Jc:return 4;case Ji:case fp:return 16;case Xc:return 536870912;default:return 16}default:return 16}}var Pn=null,Xo=null,Gi=null;function ou(){if(Gi)return Gi;var e,n=Xo,t=n.length,l,i="value"in Pn?Pn.value:Pn.textContent,r=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(l=1;l<=a&&n[t-l]===i[r-l];l++);return Gi=i.slice(e,1<l?1-l:void 0)}function Mi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function sd(){return!1}function Me(e){function n(t,l,i,r,a){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?yi:sd,this.isPropagationStopped=sd,this}return ee(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),n}var el={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Me(el),ni=ee({},el,{view:0,detail:0}),kp=Me(ni),aa,oa,ml,Lr=ee({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ml&&(ml&&e.type==="mousemove"?(aa=e.screenX-ml.screenX,oa=e.screenY-ml.screenY):oa=aa=0,ml=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:oa}}),dd=Me(Lr),Pp=ee({},Lr,{dataTransfer:0}),Ep=Me(Pp),Np=ee({},ni,{relatedTarget:0}),sa=Me(Np),Ip=ee({},el,{animationName:0,elapsedTime:0,pseudoElement:0}),Ap=Me(Ip),Vp=ee({},el,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=Me(Vp),Dp=ee({},el,{data:0}),cd=Me(Dp),Gp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Op(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fp[e])?!!n[e]:!1}function es(){return Op}var Bp=ee({},ni,{key:function(e){if(e.key){var n=Gp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=Me(Bp),jp=ee({},Lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=Me(jp),Up=ee({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),Wp=Me(Up),Hp=ee({},el,{propertyName:0,elapsedTime:0,pseudoElement:0}),qp=Me(Hp),$p=ee({},Lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zp=Me($p),Kp=[9,13,27,32],ns=gn&&"CompositionEvent"in window,Ll=null;gn&&"documentMode"in document&&(Ll=document.documentMode);var Qp=gn&&"TextEvent"in window&&!Ll,su=gn&&(!ns||Ll&&8<Ll&&11>=Ll),md=" ",fd=!1;function du(e,n){switch(e){case"keyup":return Kp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xt=!1;function Yp(e,n){switch(e){case"compositionend":return cu(n);case"keypress":return n.which!==32?null:(fd=!0,md);case"textInput":return e=n.data,e===md&&fd?null:e;default:return null}}function Jp(e,n){if(xt)return e==="compositionend"||!ns&&du(e,n)?(e=ou(),Gi=Xo=Pn=null,xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return su&&n.locale!=="ko"?null:n.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xp[e.type]:n==="textarea"}function uu(e,n,t,l){Uc(l),n=nr(n,"onChange"),0<n.length&&(t=new Zo("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var kl=null,Bl=null;function Zp(e){wu(e,0)}function kr(e){var n=St(e);if(Gc(n))return e}function ey(e,n){if(e==="change")return n}var mu=!1;if(gn){var da;if(gn){var ca="oninput"in document;if(!ca){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),ca=typeof yd.oninput=="function"}da=ca}else da=!1;mu=da&&(!document.documentMode||9<document.documentMode)}function gd(){kl&&(kl.detachEvent("onpropertychange",fu),Bl=kl=null)}function fu(e){if(e.propertyName==="value"&&kr(Bl)){var n=[];uu(n,Bl,e,zo(e)),$c(Zp,n)}}function ny(e,n,t){e==="focusin"?(gd(),kl=n,Bl=t,kl.attachEvent("onpropertychange",fu)):e==="focusout"&&gd()}function ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kr(Bl)}function ly(e,n){if(e==="click")return kr(n)}function iy(e,n){if(e==="input"||e==="change")return kr(n)}function ry(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xe=typeof Object.is=="function"?Object.is:ry;function Rl(e,n){if(Xe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!Ma.call(n,i)||!Xe(e[i],n[i]))return!1}return!0}function bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hd(e,n){var t=bd(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=bd(t)}}function pu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yu(){for(var e=window,n=Ki();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ki(e.document)}return n}function ts(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ay(e){var n=yu(),t=e.focusedElem,l=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&pu(t.ownerDocument.documentElement,t)){if(l!==null&&ts(t)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,r=Math.min(l.start,i);l=l.end===void 0?r:Math.min(l.end,i),!e.extend&&r>l&&(i=l,l=r,r=i),i=hd(t,r);var a=hd(t,l);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),r>l?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var oy=gn&&"documentMode"in document&&11>=document.documentMode,vt=null,no=null,Pl=null,to=!1;function _d(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;to||vt==null||vt!==Ki(l)||(l=vt,"selectionStart"in l&&ts(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pl&&Rl(Pl,l)||(Pl=l,l=nr(no,"onSelect"),0<l.length&&(n=new Zo("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=vt)))}function gi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var wt={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},ua={},gu={};gn&&(gu=document.createElement("div").style,"AnimationEvent"in window||(delete wt.animationend.animation,delete wt.animationiteration.animation,delete wt.animationstart.animation),"TransitionEvent"in window||delete wt.transitionend.transition);function Pr(e){if(ua[e])return ua[e];if(!wt[e])return e;var n=wt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in gu)return ua[e]=n[t];return e}var bu=Pr("animationend"),hu=Pr("animationiteration"),_u=Pr("animationstart"),xu=Pr("transitionend"),vu=new Map,xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,n){vu.set(e,n),dt(n,[e])}for(var ma=0;ma<xd.length;ma++){var fa=xd[ma],sy=fa.toLowerCase(),dy=fa[0].toUpperCase()+fa.slice(1);jn(sy,"on"+dy)}jn(bu,"onAnimationEnd");jn(hu,"onAnimationIteration");jn(_u,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(xu,"onTransitionEnd");Wt("onMouseEnter",["mouseout","mouseover"]);Wt("onMouseLeave",["mouseout","mouseover"]);Wt("onPointerEnter",["pointerout","pointerover"]);Wt("onPointerLeave",["pointerout","pointerover"]);dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(xl));function vd(e,n,t){var l=e.type||"unknown-event";e.currentTarget=t,sp(l,n,void 0,e),e.currentTarget=null}function wu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],i=l.event;l=l.listeners;e:{var r=void 0;if(n)for(var a=l.length-1;0<=a;a--){var o=l[a],s=o.instance,d=o.currentTarget;if(o=o.listener,s!==r&&i.isPropagationStopped())break e;vd(i,o,d),r=s}else for(a=0;a<l.length;a++){if(o=l[a],s=o.instance,d=o.currentTarget,o=o.listener,s!==r&&i.isPropagationStopped())break e;vd(i,o,d),r=s}}}if(Yi)throw e=Ja,Yi=!1,Ja=null,e}function W(e,n){var t=n[oo];t===void 0&&(t=n[oo]=new Set);var l=e+"__bubble";t.has(l)||(Su(n,e,2,!1),t.add(l))}function pa(e,n,t){var l=0;n&&(l|=4),Su(t,e,l,n)}var bi="_reactListening"+Math.random().toString(36).slice(2);function jl(e){if(!e[bi]){e[bi]=!0,Ic.forEach(function(t){t!=="selectionchange"&&(cy.has(t)||pa(t,!1,e),pa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[bi]||(n[bi]=!0,pa("selectionchange",!1,n))}}function Su(e,n,t,l){switch(au(n)){case 1:var i=Cp;break;case 4:i=Lp;break;default:i=Jo}t=i.bind(null,n,t,e),i=void 0,!Ya||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ya(e,n,t,l,i){var r=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var a=l.tag;if(a===3||a===4){var o=l.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=l.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Qn(o),a===null)return;if(s=a.tag,s===5||s===6){l=r=a;continue e}o=o.parentNode}}l=l.return}$c(function(){var d=r,u=zo(t),m=[];e:{var p=vu.get(e);if(p!==void 0){var g=Zo,x=e;switch(e){case"keypress":if(Mi(t)===0)break e;case"keydown":case"keyup":g=Rp;break;case"focusin":x="focus",g=sa;break;case"focusout":x="blur",g=sa;break;case"beforeblur":case"afterblur":g=sa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Wp;break;case bu:case hu:case _u:g=Ap;break;case xu:g=qp;break;case"scroll":g=kp;break;case"wheel":g=zp;break;case"copy":case"cut":case"paste":g=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ud}var b=(n&4)!==0,_=!b&&e==="scroll",y=b?p!==null?p+"Capture":null:p;b=[];for(var f=d,h;f!==null;){h=f;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,y!==null&&(v=Gl(f,y),v!=null&&b.push(Ul(f,v,h)))),_)break;f=f.return}0<b.length&&(p=new g(p,x,null,t,u),m.push({event:p,listeners:b}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&t!==Ka&&(x=t.relatedTarget||t.fromElement)&&(Qn(x)||x[bn]))break e;if((g||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=t.relatedTarget||t.toElement,g=d,x=x?Qn(x):null,x!==null&&(_=ct(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=d),g!==x)){if(b=dd,v="onMouseLeave",y="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=ud,v="onPointerLeave",y="onPointerEnter",f="pointer"),_=g==null?p:St(g),h=x==null?p:St(x),p=new b(v,f+"leave",g,t,u),p.target=_,p.relatedTarget=h,v=null,Qn(u)===d&&(b=new b(y,f+"enter",x,t,u),b.target=h,b.relatedTarget=_,v=b),_=v,g&&x)n:{for(b=g,y=x,f=0,h=b;h;h=pt(h))f++;for(h=0,v=y;v;v=pt(v))h++;for(;0<f-h;)b=pt(b),f--;for(;0<h-f;)y=pt(y),h--;for(;f--;){if(b===y||y!==null&&b===y.alternate)break n;b=pt(b),y=pt(y)}b=null}else b=null;g!==null&&wd(m,p,g,b,!1),x!==null&&_!==null&&wd(m,_,x,b,!0)}}e:{if(p=d?St(d):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var w=ey;else if(pd(p))if(mu)w=iy;else{w=ty;var C=ny}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=ly);if(w&&(w=w(e,d))){uu(m,w,t,u);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Wa(p,"number",p.value)}switch(C=d?St(d):window,e){case"focusin":(pd(C)||C.contentEditable==="true")&&(vt=C,no=d,Pl=null);break;case"focusout":Pl=no=vt=null;break;case"mousedown":to=!0;break;case"contextmenu":case"mouseup":case"dragend":to=!1,_d(m,t,u);break;case"selectionchange":if(oy)break;case"keydown":case"keyup":_d(m,t,u)}var L;if(ns)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else xt?du(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(su&&t.locale!=="ko"&&(xt||S!=="onCompositionStart"?S==="onCompositionEnd"&&xt&&(L=ou()):(Pn=u,Xo="value"in Pn?Pn.value:Pn.textContent,xt=!0)),C=nr(d,S),0<C.length&&(S=new cd(S,e,null,t,u),m.push({event:S,listeners:C}),L?S.data=L:(L=cu(t),L!==null&&(S.data=L)))),(L=Qp?Yp(e,t):Jp(e,t))&&(d=nr(d,"onBeforeInput"),0<d.length&&(u=new cd("onBeforeInput","beforeinput",null,t,u),m.push({event:u,listeners:d}),u.data=L))}wu(m,n)})}function Ul(e,n,t){return{instance:e,listener:n,currentTarget:t}}function nr(e,n){for(var t=n+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=Gl(e,t),r!=null&&l.unshift(Ul(e,r,i)),r=Gl(e,n),r!=null&&l.push(Ul(e,r,i))),e=e.return}return l}function pt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wd(e,n,t,l,i){for(var r=n._reactName,a=[];t!==null&&t!==l;){var o=t,s=o.alternate,d=o.stateNode;if(s!==null&&s===l)break;o.tag===5&&d!==null&&(o=d,i?(s=Gl(t,r),s!=null&&a.unshift(Ul(t,s,o))):i||(s=Gl(t,r),s!=null&&a.push(Ul(t,s,o)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var uy=/\r\n?/g,my=/\u0000|\uFFFD/g;function Sd(e){return(typeof e=="string"?e:""+e).replace(uy,`
`).replace(my,"")}function hi(e,n,t){if(n=Sd(n),Sd(e)!==n&&t)throw Error(k(425))}function tr(){}var lo=null,io=null;function ro(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ao=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,Cd=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof Cd<"u"?function(e){return Cd.resolve(null).then(e).catch(yy)}:ao;function yy(e){setTimeout(function(){throw e})}function ga(e,n){var t=n,l=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(l===0){e.removeChild(i),Ol(n);return}l--}else t!=="$"&&t!=="$?"&&t!=="$!"||l++;t=i}while(t);Ol(n)}function Vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ld(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var nl=Math.random().toString(36).slice(2),ln="__reactFiber$"+nl,Wl="__reactProps$"+nl,bn="__reactContainer$"+nl,oo="__reactEvents$"+nl,gy="__reactListeners$"+nl,by="__reactHandles$"+nl;function Qn(e){var n=e[ln];if(n)return n;for(var t=e.parentNode;t;){if(n=t[bn]||t[ln]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ld(e);e!==null;){if(t=e[ln])return t;e=Ld(e)}return n}e=t,t=e.parentNode}return null}function ti(e){return e=e[ln]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Er(e){return e[Wl]||null}var so=[],Ct=-1;function Un(e){return{current:e}}function H(e){0>Ct||(e.current=so[Ct],so[Ct]=null,Ct--)}function U(e,n){Ct++,so[Ct]=e.current,e.current=n}var Bn={},be=Un(Bn),ke=Un(!1),lt=Bn;function Ht(e,n){var t=e.type.contextTypes;if(!t)return Bn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in t)i[r]=n[r];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function lr(){H(ke),H(be)}function kd(e,n,t){if(be.current!==Bn)throw Error(k(168));U(be,n),U(ke,t)}function Cu(e,n,t){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return t;l=l.getChildContext();for(var i in l)if(!(i in n))throw Error(k(108,np(e)||"Unknown",i));return ee({},t,l)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,lt=be.current,U(be,e),U(ke,ke.current),!0}function Pd(e,n,t){var l=e.stateNode;if(!l)throw Error(k(169));t?(e=Cu(e,n,lt),l.__reactInternalMemoizedMergedChildContext=e,H(ke),H(be),U(be,e)):H(ke),U(ke,t)}var cn=null,Nr=!1,ba=!1;function Lu(e){cn===null?cn=[e]:cn.push(e)}function hy(e){Nr=!0,Lu(e)}function Wn(){if(!ba&&cn!==null){ba=!0;var e=0,n=B;try{var t=cn;for(B=1;e<t.length;e++){var l=t[e];do l=l(!0);while(l!==null)}cn=null,Nr=!1}catch(i){throw cn!==null&&(cn=cn.slice(e+1)),Yc(Ko,Wn),i}finally{B=n,ba=!1}}return null}var Lt=[],kt=0,rr=null,ar=0,Fe=[],Oe=0,it=null,un=1,mn="";function zn(e,n){Lt[kt++]=ar,Lt[kt++]=rr,rr=e,ar=n}function ku(e,n,t){Fe[Oe++]=un,Fe[Oe++]=mn,Fe[Oe++]=it,it=e;var l=un;e=mn;var i=32-Ye(l)-1;l&=~(1<<i),t+=1;var r=32-Ye(n)+i;if(30<r){var a=i-i%5;r=(l&(1<<a)-1).toString(32),l>>=a,i-=a,un=1<<32-Ye(n)+i|t<<i|l,mn=r+e}else un=1<<r|t<<i|l,mn=e}function ls(e){e.return!==null&&(zn(e,1),ku(e,1,0))}function is(e){for(;e===rr;)rr=Lt[--kt],Lt[kt]=null,ar=Lt[--kt],Lt[kt]=null;for(;e===it;)it=Fe[--Oe],Fe[Oe]=null,mn=Fe[--Oe],Fe[Oe]=null,un=Fe[--Oe],Fe[Oe]=null}var Te=null,Ve=null,z=!1,Qe=null;function Pu(e,n){var t=Be(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ed(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Te=e,Ve=Vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Te=e,Ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=it!==null?{id:un,overflow:mn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Be(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Te=e,Ve=null,!0):!1;default:return!1}}function co(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uo(e){if(z){var n=Ve;if(n){var t=n;if(!Ed(e,n)){if(co(e))throw Error(k(418));n=Vn(t.nextSibling);var l=Te;n&&Ed(e,n)?Pu(l,t):(e.flags=e.flags&-4097|2,z=!1,Te=e)}}else{if(co(e))throw Error(k(418));e.flags=e.flags&-4097|2,z=!1,Te=e}}}function Nd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function _i(e){if(e!==Te)return!1;if(!z)return Nd(e),z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ro(e.type,e.memoizedProps)),n&&(n=Ve)){if(co(e))throw Eu(),Error(k(418));for(;n;)Pu(e,n),n=Vn(n.nextSibling)}if(Nd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ve=Vn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ve=null}}else Ve=Te?Vn(e.stateNode.nextSibling):null;return!0}function Eu(){for(var e=Ve;e;)e=Vn(e.nextSibling)}function qt(){Ve=Te=null,z=!1}function rs(e){Qe===null?Qe=[e]:Qe.push(e)}var _y=xn.ReactCurrentBatchConfig;function fl(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var l=t.stateNode}if(!l)throw Error(k(147,e));var i=l,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(a){var o=i.refs;a===null?delete o[r]:o[r]=a},n._stringRef=r,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function xi(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Id(e){var n=e._init;return n(e._payload)}function Nu(e){function n(y,f){if(e){var h=y.deletions;h===null?(y.deletions=[f],y.flags|=16):h.push(f)}}function t(y,f){if(!e)return null;for(;f!==null;)n(y,f),f=f.sibling;return null}function l(y,f){for(y=new Map;f!==null;)f.key!==null?y.set(f.key,f):y.set(f.index,f),f=f.sibling;return y}function i(y,f){return y=Mn(y,f),y.index=0,y.sibling=null,y}function r(y,f,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<f?(y.flags|=2,f):h):(y.flags|=2,f)):(y.flags|=1048576,f)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function o(y,f,h,v){return f===null||f.tag!==6?(f=Ca(h,y.mode,v),f.return=y,f):(f=i(f,h),f.return=y,f)}function s(y,f,h,v){var w=h.type;return w===_t?u(y,f,h.props.children,v,h.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wn&&Id(w)===f.type)?(v=i(f,h.props),v.ref=fl(y,f,h),v.return=y,v):(v=Wi(h.type,h.key,h.props,null,y.mode,v),v.ref=fl(y,f,h),v.return=y,v)}function d(y,f,h,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=La(h,y.mode,v),f.return=y,f):(f=i(f,h.children||[]),f.return=y,f)}function u(y,f,h,v,w){return f===null||f.tag!==7?(f=tt(h,y.mode,v,w),f.return=y,f):(f=i(f,h),f.return=y,f)}function m(y,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ca(""+f,y.mode,h),f.return=y,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case di:return h=Wi(f.type,f.key,f.props,null,y.mode,h),h.ref=fl(y,null,f),h.return=y,h;case ht:return f=La(f,y.mode,h),f.return=y,f;case wn:var v=f._init;return m(y,v(f._payload),h)}if(hl(f)||sl(f))return f=tt(f,y.mode,h,null),f.return=y,f;xi(y,f)}return null}function p(y,f,h,v){var w=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:o(y,f,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case di:return h.key===w?s(y,f,h,v):null;case ht:return h.key===w?d(y,f,h,v):null;case wn:return w=h._init,p(y,f,w(h._payload),v)}if(hl(h)||sl(h))return w!==null?null:u(y,f,h,v,null);xi(y,h)}return null}function g(y,f,h,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return y=y.get(h)||null,o(f,y,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case di:return y=y.get(v.key===null?h:v.key)||null,s(f,y,v,w);case ht:return y=y.get(v.key===null?h:v.key)||null,d(f,y,v,w);case wn:var C=v._init;return g(y,f,h,C(v._payload),w)}if(hl(v)||sl(v))return y=y.get(h)||null,u(f,y,v,w,null);xi(f,v)}return null}function x(y,f,h,v){for(var w=null,C=null,L=f,S=f=0,N=null;L!==null&&S<h.length;S++){L.index>S?(N=L,L=null):N=L.sibling;var I=p(y,L,h[S],v);if(I===null){L===null&&(L=N);break}e&&L&&I.alternate===null&&n(y,L),f=r(I,f,S),C===null?w=I:C.sibling=I,C=I,L=N}if(S===h.length)return t(y,L),z&&zn(y,S),w;if(L===null){for(;S<h.length;S++)L=m(y,h[S],v),L!==null&&(f=r(L,f,S),C===null?w=L:C.sibling=L,C=L);return z&&zn(y,S),w}for(L=l(y,L);S<h.length;S++)N=g(L,y,S,h[S],v),N!==null&&(e&&N.alternate!==null&&L.delete(N.key===null?S:N.key),f=r(N,f,S),C===null?w=N:C.sibling=N,C=N);return e&&L.forEach(function(Q){return n(y,Q)}),z&&zn(y,S),w}function b(y,f,h,v){var w=sl(h);if(typeof w!="function")throw Error(k(150));if(h=w.call(h),h==null)throw Error(k(151));for(var C=w=null,L=f,S=f=0,N=null,I=h.next();L!==null&&!I.done;S++,I=h.next()){L.index>S?(N=L,L=null):N=L.sibling;var Q=p(y,L,I.value,v);if(Q===null){L===null&&(L=N);break}e&&L&&Q.alternate===null&&n(y,L),f=r(Q,f,S),C===null?w=Q:C.sibling=Q,C=Q,L=N}if(I.done)return t(y,L),z&&zn(y,S),w;if(L===null){for(;!I.done;S++,I=h.next())I=m(y,I.value,v),I!==null&&(f=r(I,f,S),C===null?w=I:C.sibling=I,C=I);return z&&zn(y,S),w}for(L=l(y,L);!I.done;S++,I=h.next())I=g(L,y,S,I.value,v),I!==null&&(e&&I.alternate!==null&&L.delete(I.key===null?S:I.key),f=r(I,f,S),C===null?w=I:C.sibling=I,C=I);return e&&L.forEach(function(R){return n(y,R)}),z&&zn(y,S),w}function _(y,f,h,v){if(typeof h=="object"&&h!==null&&h.type===_t&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case di:e:{for(var w=h.key,C=f;C!==null;){if(C.key===w){if(w=h.type,w===_t){if(C.tag===7){t(y,C.sibling),f=i(C,h.props.children),f.return=y,y=f;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wn&&Id(w)===C.type){t(y,C.sibling),f=i(C,h.props),f.ref=fl(y,C,h),f.return=y,y=f;break e}t(y,C);break}else n(y,C);C=C.sibling}h.type===_t?(f=tt(h.props.children,y.mode,v,h.key),f.return=y,y=f):(v=Wi(h.type,h.key,h.props,null,y.mode,v),v.ref=fl(y,f,h),v.return=y,y=v)}return a(y);case ht:e:{for(C=h.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){t(y,f.sibling),f=i(f,h.children||[]),f.return=y,y=f;break e}else{t(y,f);break}else n(y,f);f=f.sibling}f=La(h,y.mode,v),f.return=y,y=f}return a(y);case wn:return C=h._init,_(y,f,C(h._payload),v)}if(hl(h))return x(y,f,h,v);if(sl(h))return b(y,f,h,v);xi(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(t(y,f.sibling),f=i(f,h),f.return=y,y=f):(t(y,f),f=Ca(h,y.mode,v),f.return=y,y=f),a(y)):t(y,f)}return _}var $t=Nu(!0),Iu=Nu(!1),or=Un(null),sr=null,Pt=null,as=null;function os(){as=Pt=sr=null}function ss(e){var n=or.current;H(or),e._currentValue=n}function mo(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function Ot(e,n){sr=e,as=Pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Le=!0),e.firstContext=null)}function Ue(e){var n=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:n,next:null},Pt===null){if(sr===null)throw Error(k(308));Pt=e,sr.dependencies={lanes:0,firstContext:e}}else Pt=Pt.next=e;return n}var Yn=null;function ds(e){Yn===null?Yn=[e]:Yn.push(e)}function Au(e,n,t,l){var i=n.interleaved;return i===null?(t.next=t,ds(n)):(t.next=i.next,i.next=t),n.interleaved=t,hn(e,l)}function hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Sn=!1;function cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Tn(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,O&2){var i=l.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n,hn(e,t)}return i=l.interleaved,i===null?(n.next=n,ds(l)):(n.next=i.next,i.next=n),l.interleaved=n,hn(e,t)}function Fi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Qo(e,t)}}function Ad(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?i=r=a:r=r.next=a,t=t.next}while(t!==null);r===null?i=r=n:r=r.next=n}else i=r=n;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,effects:l.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function dr(e,n,t,l){var i=e.updateQueue;Sn=!1;var r=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,d=s.next;s.next=null,a===null?r=d:a.next=d,a=s;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=d:o.next=d,u.lastBaseUpdate=s))}if(r!==null){var m=i.baseState;a=0,u=d=s=null,o=r;do{var p=o.lane,g=o.eventTime;if((l&p)===p){u!==null&&(u=u.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,b=o;switch(p=n,g=t,b.tag){case 1:if(x=b.payload,typeof x=="function"){m=x.call(g,m,p);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,p=typeof x=="function"?x.call(g,m,p):x,p==null)break e;m=ee({},m,p);break e;case 2:Sn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(d=u=g,s=m):u=u.next=g,a|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(s=m),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=u,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else r===null&&(i.shared.lanes=0);at|=a,e.lanes=a,e.memoizedState=m}}function Vd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],i=l.callback;if(i!==null){if(l.callback=null,l=t,typeof i!="function")throw Error(k(191,i));i.call(l)}}}var li={},an=Un(li),Hl=Un(li),ql=Un(li);function Jn(e){if(e===li)throw Error(k(174));return e}function us(e,n){switch(U(ql,n),U(Hl,e),U(an,li),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:qa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=qa(n,e)}H(an),U(an,n)}function zt(){H(an),H(Hl),H(ql)}function Tu(e){Jn(ql.current);var n=Jn(an.current),t=qa(n,e.type);n!==t&&(U(Hl,e),U(an,t))}function ms(e){Hl.current===e&&(H(an),H(Hl))}var Y=Un(0);function cr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=[];function fs(){for(var e=0;e<ha.length;e++)ha[e]._workInProgressVersionPrimary=null;ha.length=0}var Oi=xn.ReactCurrentDispatcher,_a=xn.ReactCurrentBatchConfig,rt=0,X=null,ae=null,se=null,ur=!1,El=!1,$l=0,xy=0;function fe(){throw Error(k(321))}function ps(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Xe(e[t],n[t]))return!1;return!0}function ys(e,n,t,l,i,r){if(rt=r,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Oi.current=e===null||e.memoizedState===null?Cy:Ly,e=t(l,i),El){r=0;do{if(El=!1,$l=0,25<=r)throw Error(k(301));r+=1,se=ae=null,n.updateQueue=null,Oi.current=ky,e=t(l,i)}while(El)}if(Oi.current=mr,n=ae!==null&&ae.next!==null,rt=0,se=ae=X=null,ur=!1,n)throw Error(k(300));return e}function gs(){var e=$l!==0;return $l=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?X.memoizedState=se=e:se=se.next=e,se}function We(){if(ae===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var n=se===null?X.memoizedState:se.next;if(n!==null)se=n,ae=e;else{if(e===null)throw Error(k(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},se===null?X.memoizedState=se=e:se=se.next=e}return se}function zl(e,n){return typeof n=="function"?n(e):n}function xa(e){var n=We(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var l=ae,i=l.baseQueue,r=t.pending;if(r!==null){if(i!==null){var a=i.next;i.next=r.next,r.next=a}l.baseQueue=i=r,t.pending=null}if(i!==null){r=i.next,l=l.baseState;var o=a=null,s=null,d=r;do{var u=d.lane;if((rt&u)===u)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var m={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(o=s=m,a=l):s=s.next=m,X.lanes|=u,at|=u}d=d.next}while(d!==null&&d!==r);s===null?a=l:s.next=o,Xe(l,n.memoizedState)||(Le=!0),n.memoizedState=l,n.baseState=a,n.baseQueue=s,t.lastRenderedState=l}if(e=t.interleaved,e!==null){i=e;do r=i.lane,X.lanes|=r,at|=r,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function va(e){var n=We(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var l=t.dispatch,i=t.pending,r=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do r=e(r,a.action),a=a.next;while(a!==i);Xe(r,n.memoizedState)||(Le=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,l]}function Du(){}function Gu(e,n){var t=X,l=We(),i=n(),r=!Xe(l.memoizedState,i);if(r&&(l.memoizedState=i,Le=!0),l=l.queue,bs(Ou.bind(null,t,l,e),[e]),l.getSnapshot!==n||r||se!==null&&se.memoizedState.tag&1){if(t.flags|=2048,Kl(9,Fu.bind(null,t,l,i,n),void 0,null),de===null)throw Error(k(349));rt&30||Mu(t,n,i)}return i}function Mu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Fu(e,n,t,l){n.value=t,n.getSnapshot=l,Bu(n)&&Ru(e)}function Ou(e,n,t){return t(function(){Bu(n)&&Ru(e)})}function Bu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Xe(e,t)}catch{return!0}}function Ru(e){var n=hn(e,1);n!==null&&Je(n,e,1,-1)}function Td(e){var n=tn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zl,lastRenderedState:e},n.queue=e,e=e.dispatch=Sy.bind(null,X,e),[n.memoizedState,e]}function Kl(e,n,t,l){return e={tag:e,create:n,destroy:t,deps:l,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e)),e}function ju(){return We().memoizedState}function Bi(e,n,t,l){var i=tn();X.flags|=e,i.memoizedState=Kl(1|n,t,void 0,l===void 0?null:l)}function Ir(e,n,t,l){var i=We();l=l===void 0?null:l;var r=void 0;if(ae!==null){var a=ae.memoizedState;if(r=a.destroy,l!==null&&ps(l,a.deps)){i.memoizedState=Kl(n,t,r,l);return}}X.flags|=e,i.memoizedState=Kl(1|n,t,r,l)}function Dd(e,n){return Bi(8390656,8,e,n)}function bs(e,n){return Ir(2048,8,e,n)}function Uu(e,n){return Ir(4,2,e,n)}function Wu(e,n){return Ir(4,4,e,n)}function Hu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qu(e,n,t){return t=t!=null?t.concat([e]):null,Ir(4,4,Hu.bind(null,n,e),t)}function hs(){}function $u(e,n){var t=We();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&ps(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function zu(e,n){var t=We();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&ps(n,l[1])?l[0]:(e=e(),t.memoizedState=[e,n],e)}function Ku(e,n,t){return rt&21?(Xe(t,n)||(t=Zc(),X.lanes|=t,at|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=t)}function vy(e,n){var t=B;B=t!==0&&4>t?t:4,e(!0);var l=_a.transition;_a.transition={};try{e(!1),n()}finally{B=t,_a.transition=l}}function Qu(){return We().memoizedState}function wy(e,n,t){var l=Gn(e);if(t={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null},Yu(e))Ju(n,t);else if(t=Au(e,n,t,l),t!==null){var i=xe();Je(t,e,l,i),Xu(t,n,l)}}function Sy(e,n,t){var l=Gn(e),i={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null};if(Yu(e))Ju(n,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var a=n.lastRenderedState,o=r(a,t);if(i.hasEagerState=!0,i.eagerState=o,Xe(o,a)){var s=n.interleaved;s===null?(i.next=i,ds(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Au(e,n,i,l),t!==null&&(i=xe(),Je(t,e,l,i),Xu(t,n,l))}}function Yu(e){var n=e.alternate;return e===X||n!==null&&n===X}function Ju(e,n){El=ur=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Xu(e,n,t){if(t&4194240){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Qo(e,t)}}var mr={readContext:Ue,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Cy={readContext:Ue,useCallback:function(e,n){return tn().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:Dd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Bi(4194308,4,Hu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Bi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Bi(4,2,e,n)},useMemo:function(e,n){var t=tn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var l=tn();return n=t!==void 0?t(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=wy.bind(null,X,e),[l.memoizedState,e]},useRef:function(e){var n=tn();return e={current:e},n.memoizedState=e},useState:Td,useDebugValue:hs,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=Td(!1),n=e[0];return e=vy.bind(null,e[1]),tn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var l=X,i=tn();if(z){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),de===null)throw Error(k(349));rt&30||Mu(l,n,t)}i.memoizedState=t;var r={value:t,getSnapshot:n};return i.queue=r,Dd(Ou.bind(null,l,r,e),[e]),l.flags|=2048,Kl(9,Fu.bind(null,l,r,t,n),void 0,null),t},useId:function(){var e=tn(),n=de.identifierPrefix;if(z){var t=mn,l=un;t=(l&~(1<<32-Ye(l)-1)).toString(32)+t,n=":"+n+"R"+t,t=$l++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=xy++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ly={readContext:Ue,useCallback:$u,useContext:Ue,useEffect:bs,useImperativeHandle:qu,useInsertionEffect:Uu,useLayoutEffect:Wu,useMemo:zu,useReducer:xa,useRef:ju,useState:function(){return xa(zl)},useDebugValue:hs,useDeferredValue:function(e){var n=We();return Ku(n,ae.memoizedState,e)},useTransition:function(){var e=xa(zl)[0],n=We().memoizedState;return[e,n]},useMutableSource:Du,useSyncExternalStore:Gu,useId:Qu,unstable_isNewReconciler:!1},ky={readContext:Ue,useCallback:$u,useContext:Ue,useEffect:bs,useImperativeHandle:qu,useInsertionEffect:Uu,useLayoutEffect:Wu,useMemo:zu,useReducer:va,useRef:ju,useState:function(){return va(zl)},useDebugValue:hs,useDeferredValue:function(e){var n=We();return ae===null?n.memoizedState=e:Ku(n,ae.memoizedState,e)},useTransition:function(){var e=va(zl)[0],n=We().memoizedState;return[e,n]},useMutableSource:Du,useSyncExternalStore:Gu,useId:Qu,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=ee({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function fo(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:ee({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ar={isMounted:function(e){return(e=e._reactInternals)?ct(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var l=xe(),i=Gn(e),r=pn(l,i);r.payload=n,t!=null&&(r.callback=t),n=Tn(e,r,i),n!==null&&(Je(n,e,i,l),Fi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=xe(),i=Gn(e),r=pn(l,i);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=Tn(e,r,i),n!==null&&(Je(n,e,i,l),Fi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xe(),l=Gn(e),i=pn(t,l);i.tag=2,n!=null&&(i.callback=n),n=Tn(e,i,l),n!==null&&(Je(n,e,l,t),Fi(n,e,l))}};function Gd(e,n,t,l,i,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,a):n.prototype&&n.prototype.isPureReactComponent?!Rl(t,l)||!Rl(i,r):!0}function Zu(e,n,t){var l=!1,i=Bn,r=n.contextType;return typeof r=="object"&&r!==null?r=Ue(r):(i=Pe(n)?lt:be.current,l=n.contextTypes,r=(l=l!=null)?Ht(e,i):Bn),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ar,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),n}function Md(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&Ar.enqueueReplaceState(n,n.state,null)}function po(e,n,t,l){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},cs(e);var r=n.contextType;typeof r=="object"&&r!==null?i.context=Ue(r):(r=Pe(n)?lt:be.current,i.context=Ht(e,r)),i.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(fo(e,n,r,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ar.enqueueReplaceState(i,i.state,null),dr(e,t,i,l),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kt(e,n){try{var t="",l=n;do t+=ep(l),l=l.return;while(l);var i=t}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:i,digest:null}}function wa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function yo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Py=typeof WeakMap=="function"?WeakMap:Map;function em(e,n,t){t=pn(-1,t),t.tag=3,t.payload={element:null};var l=n.value;return t.callback=function(){pr||(pr=!0,Lo=l),yo(e,n)},t}function nm(e,n,t){t=pn(-1,t),t.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){yo(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){yo(e,n),typeof l!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Fd(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new Py;var i=new Set;l.set(n,i)}else i=l.get(n),i===void 0&&(i=new Set,l.set(n,i));i.has(t)||(i.add(t),e=jy.bind(null,e,n,t),n.then(e,e))}function Od(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Bd(e,n,t,l,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=pn(-1,1),n.tag=2,Tn(t,n,1))),t.lanes|=1),e)}var Ey=xn.ReactCurrentOwner,Le=!1;function he(e,n,t,l){n.child=e===null?Iu(n,null,t,l):$t(n,e.child,t,l)}function Rd(e,n,t,l,i){t=t.render;var r=n.ref;return Ot(n,i),l=ys(e,n,t,l,r,i),t=gs(),e!==null&&!Le?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,_n(e,n,i)):(z&&t&&ls(n),n.flags|=1,he(e,n,l,i),n.child)}function jd(e,n,t,l,i){if(e===null){var r=t.type;return typeof r=="function"&&!ks(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,tm(e,n,r,l,i)):(e=Wi(t.type,null,l,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&i)){var a=r.memoizedProps;if(t=t.compare,t=t!==null?t:Rl,t(a,l)&&e.ref===n.ref)return _n(e,n,i)}return n.flags|=1,e=Mn(r,l),e.ref=n.ref,e.return=n,n.child=e}function tm(e,n,t,l,i){if(e!==null){var r=e.memoizedProps;if(Rl(r,l)&&e.ref===n.ref)if(Le=!1,n.pendingProps=l=r,(e.lanes&i)!==0)e.flags&131072&&(Le=!0);else return n.lanes=e.lanes,_n(e,n,i)}return go(e,n,t,l,i)}function lm(e,n,t){var l=n.pendingProps,i=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Nt,Ne),Ne|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(Nt,Ne),Ne|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=r!==null?r.baseLanes:t,U(Nt,Ne),Ne|=l}else r!==null?(l=r.baseLanes|t,n.memoizedState=null):l=t,U(Nt,Ne),Ne|=l;return he(e,n,i,t),n.child}function im(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function go(e,n,t,l,i){var r=Pe(t)?lt:be.current;return r=Ht(n,r),Ot(n,i),t=ys(e,n,t,l,r,i),l=gs(),e!==null&&!Le?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,_n(e,n,i)):(z&&l&&ls(n),n.flags|=1,he(e,n,t,i),n.child)}function Ud(e,n,t,l,i){if(Pe(t)){var r=!0;ir(n)}else r=!1;if(Ot(n,i),n.stateNode===null)Ri(e,n),Zu(n,t,l),po(n,t,l,i),l=!0;else if(e===null){var a=n.stateNode,o=n.memoizedProps;a.props=o;var s=a.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ue(d):(d=Pe(t)?lt:be.current,d=Ht(n,d));var u=t.getDerivedStateFromProps,m=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==l||s!==d)&&Md(n,a,l,d),Sn=!1;var p=n.memoizedState;a.state=p,dr(n,l,a,i),s=n.memoizedState,o!==l||p!==s||ke.current||Sn?(typeof u=="function"&&(fo(n,t,u,l),s=n.memoizedState),(o=Sn||Gd(n,t,o,l,p,s,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=s),a.props=l,a.state=s,a.context=d,l=o):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{a=n.stateNode,Vu(e,n),o=n.memoizedProps,d=n.type===n.elementType?o:ze(n.type,o),a.props=d,m=n.pendingProps,p=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ue(s):(s=Pe(t)?lt:be.current,s=Ht(n,s));var g=t.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||p!==s)&&Md(n,a,l,s),Sn=!1,p=n.memoizedState,a.state=p,dr(n,l,a,i);var x=n.memoizedState;o!==m||p!==x||ke.current||Sn?(typeof g=="function"&&(fo(n,t,g,l),x=n.memoizedState),(d=Sn||Gd(n,t,d,l,p,x,s)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,x,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=x),a.props=l,a.state=x,a.context=s,l=d):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),l=!1)}return bo(e,n,t,l,r,i)}function bo(e,n,t,l,i,r){im(e,n);var a=(n.flags&128)!==0;if(!l&&!a)return i&&Pd(n,t,!1),_n(e,n,r);l=n.stateNode,Ey.current=n;var o=a&&typeof t.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&a?(n.child=$t(n,e.child,null,r),n.child=$t(n,null,o,r)):he(e,n,o,r),n.memoizedState=l.state,i&&Pd(n,t,!0),n.child}function rm(e){var n=e.stateNode;n.pendingContext?kd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&kd(e,n.context,!1),us(e,n.containerInfo)}function Wd(e,n,t,l,i){return qt(),rs(i),n.flags|=256,he(e,n,t,l),n.child}var ho={dehydrated:null,treeContext:null,retryLane:0};function _o(e){return{baseLanes:e,cachePool:null,transitions:null}}function am(e,n,t){var l=n.pendingProps,i=Y.current,r=!1,a=(n.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(Y,i&1),e===null)return uo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=l.children,e=l.fallback,r?(l=n.mode,r=n.child,a={mode:"hidden",children:a},!(l&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=Dr(a,l,0,null),e=tt(e,l,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=_o(t),n.memoizedState=ho,e):_s(n,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Ny(e,n,a,l,o,i,t);if(r){r=l.fallback,a=n.mode,i=e.child,o=i.sibling;var s={mode:"hidden",children:l.children};return!(a&1)&&n.child!==i?(l=n.child,l.childLanes=0,l.pendingProps=s,n.deletions=null):(l=Mn(i,s),l.subtreeFlags=i.subtreeFlags&14680064),o!==null?r=Mn(o,r):(r=tt(r,a,t,null),r.flags|=2),r.return=n,l.return=n,l.sibling=r,n.child=l,l=r,r=n.child,a=e.child.memoizedState,a=a===null?_o(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=e.childLanes&~t,n.memoizedState=ho,l}return r=e.child,e=r.sibling,l=Mn(r,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=t),l.return=n,l.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=l,n.memoizedState=null,l}function _s(e,n){return n=Dr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function vi(e,n,t,l){return l!==null&&rs(l),$t(n,e.child,null,t),e=_s(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ny(e,n,t,l,i,r,a){if(t)return n.flags&256?(n.flags&=-257,l=wa(Error(k(422))),vi(e,n,a,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=l.fallback,i=n.mode,l=Dr({mode:"visible",children:l.children},i,0,null),r=tt(r,i,a,null),r.flags|=2,l.return=n,r.return=n,l.sibling=r,n.child=l,n.mode&1&&$t(n,e.child,null,a),n.child.memoizedState=_o(a),n.memoizedState=ho,r);if(!(n.mode&1))return vi(e,n,a,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var o=l.dgst;return l=o,r=Error(k(419)),l=wa(r,l,void 0),vi(e,n,a,l)}if(o=(a&e.childLanes)!==0,Le||o){if(l=de,l!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|a)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,hn(e,i),Je(l,e,i,-1))}return Ls(),l=wa(Error(k(421))),vi(e,n,a,l)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Uy.bind(null,e),i._reactRetry=n,null):(e=r.treeContext,Ve=Vn(i.nextSibling),Te=n,z=!0,Qe=null,e!==null&&(Fe[Oe++]=un,Fe[Oe++]=mn,Fe[Oe++]=it,un=e.id,mn=e.overflow,it=n),n=_s(n,l.children),n.flags|=4096,n)}function Hd(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),mo(e.return,n,t)}function Sa(e,n,t,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=t,r.tailMode=i)}function om(e,n,t){var l=n.pendingProps,i=l.revealOrder,r=l.tail;if(he(e,n,l.children,t),l=Y.current,l&2)l=l&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hd(e,t,n);else if(e.tag===19)Hd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(U(Y,l),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&cr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Sa(n,!1,i,t,r);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&cr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Sa(n,!0,t,null,r);break;case"together":Sa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ri(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function _n(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),at|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Iy(e,n,t){switch(n.tag){case 3:rm(n),qt();break;case 5:Tu(n);break;case 1:Pe(n.type)&&ir(n);break;case 4:us(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,i=n.memoizedProps.value;U(or,l._currentValue),l._currentValue=i;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(U(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?am(e,n,t):(U(Y,Y.current&1),e=_n(e,n,t),e!==null?e.sibling:null);U(Y,Y.current&1);break;case 19:if(l=(t&n.childLanes)!==0,e.flags&128){if(l)return om(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Y,Y.current),l)break;return null;case 22:case 23:return n.lanes=0,lm(e,n,t)}return _n(e,n,t)}var sm,xo,dm,cm;sm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};xo=function(){};dm=function(e,n,t,l){var i=e.memoizedProps;if(i!==l){e=n.stateNode,Jn(an.current);var r=null;switch(t){case"input":i=ja(e,i),l=ja(e,l),r=[];break;case"select":i=ee({},i,{value:void 0}),l=ee({},l,{value:void 0}),r=[];break;case"textarea":i=Ha(e,i),l=Ha(e,l),r=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=tr)}$a(t,l);var a;t=null;for(d in i)if(!l.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tl.hasOwnProperty(d)?r||(r=[]):(r=r||[]).push(d,null));for(d in l){var s=l[d];if(o=i!=null?i[d]:void 0,l.hasOwnProperty(d)&&s!==o&&(s!=null||o!=null))if(d==="style")if(o){for(a in o)!o.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&o[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(r||(r=[]),r.push(d,t)),t=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(r=r||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(r=r||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tl.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&W("scroll",e),r||o===s||(r=[])):(r=r||[]).push(d,s))}t&&(r=r||[]).push("style",t);var d=r;(n.updateQueue=d)&&(n.flags|=4)}};cm=function(e,n,t,l){t!==l&&(n.flags|=4)};function pl(e,n){if(!z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function Ay(e,n,t){var l=n.pendingProps;switch(is(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return Pe(n.type)&&lr(),pe(n),null;case 3:return l=n.stateNode,zt(),H(ke),H(be),fs(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(_i(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Qe!==null&&(Eo(Qe),Qe=null))),xo(e,n),pe(n),null;case 5:ms(n);var i=Jn(ql.current);if(t=n.type,e!==null&&n.stateNode!=null)dm(e,n,t,l,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(k(166));return pe(n),null}if(e=Jn(an.current),_i(n)){l=n.stateNode,t=n.type;var r=n.memoizedProps;switch(l[ln]=n,l[Wl]=r,e=(n.mode&1)!==0,t){case"dialog":W("cancel",l),W("close",l);break;case"iframe":case"object":case"embed":W("load",l);break;case"video":case"audio":for(i=0;i<xl.length;i++)W(xl[i],l);break;case"source":W("error",l);break;case"img":case"image":case"link":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"input":Zs(l,r),W("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!r.multiple},W("invalid",l);break;case"textarea":nd(l,r),W("invalid",l)}$a(t,r),i=null;for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];a==="children"?typeof o=="string"?l.textContent!==o&&(r.suppressHydrationWarning!==!0&&hi(l.textContent,o,e),i=["children",o]):typeof o=="number"&&l.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&hi(l.textContent,o,e),i=["children",""+o]):Tl.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&W("scroll",l)}switch(t){case"input":ci(l),ed(l,r,!0);break;case"textarea":ci(l),td(l);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(l.onclick=tr)}l=i,n.updateQueue=l,l!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Oc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=a.createElement(t,{is:l.is}):(e=a.createElement(t),t==="select"&&(a=e,l.multiple?a.multiple=!0:l.size&&(a.size=l.size))):e=a.createElementNS(e,t),e[ln]=n,e[Wl]=l,sm(e,n,!1,!1),n.stateNode=e;e:{switch(a=za(t,l),t){case"dialog":W("cancel",e),W("close",e),i=l;break;case"iframe":case"object":case"embed":W("load",e),i=l;break;case"video":case"audio":for(i=0;i<xl.length;i++)W(xl[i],e);i=l;break;case"source":W("error",e),i=l;break;case"img":case"image":case"link":W("error",e),W("load",e),i=l;break;case"details":W("toggle",e),i=l;break;case"input":Zs(e,l),i=ja(e,l),W("invalid",e);break;case"option":i=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},i=ee({},l,{value:void 0}),W("invalid",e);break;case"textarea":nd(e,l),i=Ha(e,l),W("invalid",e);break;default:i=l}$a(t,i),o=i;for(r in o)if(o.hasOwnProperty(r)){var s=o[r];r==="style"?jc(e,s):r==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Bc(e,s)):r==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Dl(e,s):typeof s=="number"&&Dl(e,""+s):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Tl.hasOwnProperty(r)?s!=null&&r==="onScroll"&&W("scroll",e):s!=null&&Wo(e,r,s,a))}switch(t){case"input":ci(e),ed(e,l,!1);break;case"textarea":ci(e),td(e);break;case"option":l.value!=null&&e.setAttribute("value",""+On(l.value));break;case"select":e.multiple=!!l.multiple,r=l.value,r!=null?Dt(e,!!l.multiple,r,!1):l.defaultValue!=null&&Dt(e,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=tr)}switch(t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)cm(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(k(166));if(t=Jn(ql.current),Jn(an.current),_i(n)){if(l=n.stateNode,t=n.memoizedProps,l[ln]=n,(r=l.nodeValue!==t)&&(e=Te,e!==null))switch(e.tag){case 3:hi(l.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(l.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else l=(t.nodeType===9?t:t.ownerDocument).createTextNode(l),l[ln]=n,n.stateNode=l}return pe(n),null;case 13:if(H(Y),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&Ve!==null&&n.mode&1&&!(n.flags&128))Eu(),qt(),n.flags|=98560,r=!1;else if(r=_i(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(k(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(k(317));r[ln]=n}else qt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),r=!1}else Qe!==null&&(Eo(Qe),Qe=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?oe===0&&(oe=3):Ls())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return zt(),xo(e,n),e===null&&jl(n.stateNode.containerInfo),pe(n),null;case 10:return ss(n.type._context),pe(n),null;case 17:return Pe(n.type)&&lr(),pe(n),null;case 19:if(H(Y),r=n.memoizedState,r===null)return pe(n),null;if(l=(n.flags&128)!==0,a=r.rendering,a===null)if(l)pl(r,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=cr(e),a!==null){for(n.flags|=128,pl(r,!1),l=a.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=t,t=n.child;t!==null;)r=t,e=l,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,e=a.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(Y,Y.current&1|2),n.child}e=e.sibling}r.tail!==null&&le()>Qt&&(n.flags|=128,l=!0,pl(r,!1),n.lanes=4194304)}else{if(!l)if(e=cr(a),e!==null){if(n.flags|=128,l=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),pl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!z)return pe(n),null}else 2*le()-r.renderingStartTime>Qt&&t!==1073741824&&(n.flags|=128,l=!0,pl(r,!1),n.lanes=4194304);r.isBackwards?(a.sibling=n.child,n.child=a):(t=r.last,t!==null?t.sibling=a:n.child=a,r.last=a)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=le(),n.sibling=null,t=Y.current,U(Y,l?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return Cs(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?Ne&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Vy(e,n){switch(is(n),n.tag){case 1:return Pe(n.type)&&lr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(),H(ke),H(be),fs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ms(n),null;case 13:if(H(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));qt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(Y),null;case 4:return zt(),null;case 10:return ss(n.type._context),null;case 22:case 23:return Cs(),null;case 24:return null;default:return null}}var wi=!1,ye=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,E=null;function Et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(l){te(e,n,l)}else t.current=null}function vo(e,n,t){try{t()}catch(l){te(e,n,l)}}var qd=!1;function Dy(e,n){if(lo=Zi,e=yu(),ts(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var a=0,o=-1,s=-1,d=0,u=0,m=e,p=null;n:for(;;){for(var g;m!==t||i!==0&&m.nodeType!==3||(o=a+i),m!==r||l!==0&&m.nodeType!==3||(s=a+l),m.nodeType===3&&(a+=m.nodeValue.length),(g=m.firstChild)!==null;)p=m,m=g;for(;;){if(m===e)break n;if(p===t&&++d===i&&(o=a),p===r&&++u===l&&(s=a),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}t=o===-1||s===-1?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(io={focusedElem:e,selectionRange:t},Zi=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,_=x.memoizedState,y=n.stateNode,f=y.getSnapshotBeforeUpdate(n.elementType===n.type?b:ze(n.type,b),_);y.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){te(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return x=qd,qd=!1,x}function Nl(e,n,t){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&vo(n,t,r)}i=i.next}while(i!==l)}}function Vr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var l=t.create;t.destroy=l()}t=t.next}while(t!==n)}}function wo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function um(e){var n=e.alternate;n!==null&&(e.alternate=null,um(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ln],delete n[Wl],delete n[oo],delete n[gy],delete n[by])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mm(e){return e.tag===5||e.tag===3||e.tag===4}function $d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function So(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=tr));else if(l!==4&&(e=e.child,e!==null))for(So(e,n,t),e=e.sibling;e!==null;)So(e,n,t),e=e.sibling}function Co(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Co(e,n,t),e=e.sibling;e!==null;)Co(e,n,t),e=e.sibling}var ce=null,Ke=!1;function vn(e,n,t){for(t=t.child;t!==null;)fm(e,n,t),t=t.sibling}function fm(e,n,t){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Cr,t)}catch{}switch(t.tag){case 5:ye||Et(t,n);case 6:var l=ce,i=Ke;ce=null,vn(e,n,t),ce=l,Ke=i,ce!==null&&(Ke?(e=ce,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ce.removeChild(t.stateNode));break;case 18:ce!==null&&(Ke?(e=ce,t=t.stateNode,e.nodeType===8?ga(e.parentNode,t):e.nodeType===1&&ga(e,t),Ol(e)):ga(ce,t.stateNode));break;case 4:l=ce,i=Ke,ce=t.stateNode.containerInfo,Ke=!0,vn(e,n,t),ce=l,Ke=i;break;case 0:case 11:case 14:case 15:if(!ye&&(l=t.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var r=i,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&vo(t,n,a),i=i.next}while(i!==l)}vn(e,n,t);break;case 1:if(!ye&&(Et(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=t.memoizedProps,l.state=t.memoizedState,l.componentWillUnmount()}catch(o){te(t,n,o)}vn(e,n,t);break;case 21:vn(e,n,t);break;case 22:t.mode&1?(ye=(l=ye)||t.memoizedState!==null,vn(e,n,t),ye=l):vn(e,n,t);break;default:vn(e,n,t)}}function zd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ty),n.forEach(function(l){var i=Wy.bind(null,e,l);t.has(l)||(t.add(l),l.then(i,i))})}}function qe(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];try{var r=e,a=n,o=a;e:for(;o!==null;){switch(o.tag){case 5:ce=o.stateNode,Ke=!1;break e;case 3:ce=o.stateNode.containerInfo,Ke=!0;break e;case 4:ce=o.stateNode.containerInfo,Ke=!0;break e}o=o.return}if(ce===null)throw Error(k(160));fm(r,a,i),ce=null,Ke=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){te(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)pm(n,e),n=n.sibling}function pm(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(n,e),nn(e),l&4){try{Nl(3,e,e.return),Vr(3,e)}catch(b){te(e,e.return,b)}try{Nl(5,e,e.return)}catch(b){te(e,e.return,b)}}break;case 1:qe(n,e),nn(e),l&512&&t!==null&&Et(t,t.return);break;case 5:if(qe(n,e),nn(e),l&512&&t!==null&&Et(t,t.return),e.flags&32){var i=e.stateNode;try{Dl(i,"")}catch(b){te(e,e.return,b)}}if(l&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,a=t!==null?t.memoizedProps:r,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&Mc(i,r),za(o,a);var d=za(o,r);for(a=0;a<s.length;a+=2){var u=s[a],m=s[a+1];u==="style"?jc(i,m):u==="dangerouslySetInnerHTML"?Bc(i,m):u==="children"?Dl(i,m):Wo(i,u,m,d)}switch(o){case"input":Ua(i,r);break;case"textarea":Fc(i,r);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?Dt(i,!!r.multiple,g,!1):p!==!!r.multiple&&(r.defaultValue!=null?Dt(i,!!r.multiple,r.defaultValue,!0):Dt(i,!!r.multiple,r.multiple?[]:"",!1))}i[Wl]=r}catch(b){te(e,e.return,b)}}break;case 6:if(qe(n,e),nn(e),l&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(b){te(e,e.return,b)}}break;case 3:if(qe(n,e),nn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Ol(n.containerInfo)}catch(b){te(e,e.return,b)}break;case 4:qe(n,e),nn(e);break;case 13:qe(n,e),nn(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(ws=le())),l&4&&zd(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(d=ye)||u,qe(n,e),ye=d):qe(n,e),nn(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(E=e,u=e.child;u!==null;){for(m=E=u;E!==null;){switch(p=E,g=p.child,p.tag){case 0:case 11:case 14:case 15:Nl(4,p,p.return);break;case 1:Et(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){l=p,t=p.return;try{n=l,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(b){te(l,t,b)}}break;case 5:Et(p,p.return);break;case 22:if(p.memoizedState!==null){Qd(m);continue}}g!==null?(g.return=p,E=g):Qd(m)}u=u.sibling}e:for(u=null,m=e;;){if(m.tag===5){if(u===null){u=m;try{i=m.stateNode,d?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=Rc("display",a))}catch(b){te(e,e.return,b)}}}else if(m.tag===6){if(u===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(b){te(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;u===m&&(u=null),m=m.return}u===m&&(u=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:qe(n,e),nn(e),l&4&&zd(e);break;case 21:break;default:qe(n,e),nn(e)}}function nn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(mm(t)){var l=t;break e}t=t.return}throw Error(k(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(Dl(i,""),l.flags&=-33);var r=$d(e);Co(e,r,i);break;case 3:case 4:var a=l.stateNode.containerInfo,o=$d(e);So(e,o,a);break;default:throw Error(k(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gy(e,n,t){E=e,ym(e)}function ym(e,n,t){for(var l=(e.mode&1)!==0;E!==null;){var i=E,r=i.child;if(i.tag===22&&l){var a=i.memoizedState!==null||wi;if(!a){var o=i.alternate,s=o!==null&&o.memoizedState!==null||ye;o=wi;var d=ye;if(wi=a,(ye=s)&&!d)for(E=i;E!==null;)a=E,s=a.child,a.tag===22&&a.memoizedState!==null?Yd(i):s!==null?(s.return=a,E=s):Yd(i);for(;r!==null;)E=r,ym(r),r=r.sibling;E=i,wi=o,ye=d}Kd(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,E=r):Kd(e)}}function Kd(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||Vr(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!ye)if(t===null)l.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);l.componentDidUpdate(i,t.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&Vd(n,r,l);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Vd(n,a,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var m=u.dehydrated;m!==null&&Ol(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ye||n.flags&512&&wo(n)}catch(p){te(n,n.return,p)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function Qd(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function Yd(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Vr(4,n)}catch(s){te(n,t,s)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var i=n.return;try{l.componentDidMount()}catch(s){te(n,i,s)}}var r=n.return;try{wo(n)}catch(s){te(n,r,s)}break;case 5:var a=n.return;try{wo(n)}catch(s){te(n,a,s)}}}catch(s){te(n,n.return,s)}if(n===e){E=null;break}var o=n.sibling;if(o!==null){o.return=n.return,E=o;break}E=n.return}}var My=Math.ceil,fr=xn.ReactCurrentDispatcher,xs=xn.ReactCurrentOwner,Re=xn.ReactCurrentBatchConfig,O=0,de=null,ie=null,ue=0,Ne=0,Nt=Un(0),oe=0,Ql=null,at=0,Tr=0,vs=0,Il=null,Se=null,ws=0,Qt=1/0,dn=null,pr=!1,Lo=null,Dn=null,Si=!1,En=null,yr=0,Al=0,ko=null,ji=-1,Ui=0;function xe(){return O&6?le():ji!==-1?ji:ji=le()}function Gn(e){return e.mode&1?O&2&&ue!==0?ue&-ue:_y.transition!==null?(Ui===0&&(Ui=Zc()),Ui):(e=B,e!==0||(e=window.event,e=e===void 0?16:au(e.type)),e):1}function Je(e,n,t,l){if(50<Al)throw Al=0,ko=null,Error(k(185));ei(e,t,l),(!(O&2)||e!==de)&&(e===de&&(!(O&2)&&(Tr|=t),oe===4&&kn(e,ue)),Ee(e,l),t===1&&O===0&&!(n.mode&1)&&(Qt=le()+500,Nr&&Wn()))}function Ee(e,n){var t=e.callbackNode;_p(e,n);var l=Xi(e,e===de?ue:0);if(l===0)t!==null&&rd(t),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(t!=null&&rd(t),n===1)e.tag===0?hy(Jd.bind(null,e)):Lu(Jd.bind(null,e)),py(function(){!(O&6)&&Wn()}),t=null;else{switch(eu(l)){case 1:t=Ko;break;case 4:t=Jc;break;case 16:t=Ji;break;case 536870912:t=Xc;break;default:t=Ji}t=Sm(t,gm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function gm(e,n){if(ji=-1,Ui=0,O&6)throw Error(k(327));var t=e.callbackNode;if(Bt()&&e.callbackNode!==t)return null;var l=Xi(e,e===de?ue:0);if(l===0)return null;if(l&30||l&e.expiredLanes||n)n=gr(e,l);else{n=l;var i=O;O|=2;var r=hm();(de!==e||ue!==n)&&(dn=null,Qt=le()+500,nt(e,n));do try{By();break}catch(o){bm(e,o)}while(!0);os(),fr.current=r,O=i,ie!==null?n=0:(de=null,ue=0,n=oe)}if(n!==0){if(n===2&&(i=Xa(e),i!==0&&(l=i,n=Po(e,i))),n===1)throw t=Ql,nt(e,0),kn(e,l),Ee(e,le()),t;if(n===6)kn(e,l);else{if(i=e.current.alternate,!(l&30)&&!Fy(i)&&(n=gr(e,l),n===2&&(r=Xa(e),r!==0&&(l=r,n=Po(e,r))),n===1))throw t=Ql,nt(e,0),kn(e,l),Ee(e,le()),t;switch(e.finishedWork=i,e.finishedLanes=l,n){case 0:case 1:throw Error(k(345));case 2:Kn(e,Se,dn);break;case 3:if(kn(e,l),(l&130023424)===l&&(n=ws+500-le(),10<n)){if(Xi(e,0)!==0)break;if(i=e.suspendedLanes,(i&l)!==l){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ao(Kn.bind(null,e,Se,dn),n);break}Kn(e,Se,dn);break;case 4:if(kn(e,l),(l&4194240)===l)break;for(n=e.eventTimes,i=-1;0<l;){var a=31-Ye(l);r=1<<a,a=n[a],a>i&&(i=a),l&=~r}if(l=i,l=le()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*My(l/1960))-l,10<l){e.timeoutHandle=ao(Kn.bind(null,e,Se,dn),l);break}Kn(e,Se,dn);break;case 5:Kn(e,Se,dn);break;default:throw Error(k(329))}}}return Ee(e,le()),e.callbackNode===t?gm.bind(null,e):null}function Po(e,n){var t=Il;return e.current.memoizedState.isDehydrated&&(nt(e,n).flags|=256),e=gr(e,n),e!==2&&(n=Se,Se=t,n!==null&&Eo(n)),e}function Eo(e){Se===null?Se=e:Se.push.apply(Se,e)}function Fy(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var l=0;l<t.length;l++){var i=t[l],r=i.getSnapshot;i=i.value;try{if(!Xe(r(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function kn(e,n){for(n&=~vs,n&=~Tr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ye(n),l=1<<t;e[t]=-1,n&=~l}}function Jd(e){if(O&6)throw Error(k(327));Bt();var n=Xi(e,0);if(!(n&1))return Ee(e,le()),null;var t=gr(e,n);if(e.tag!==0&&t===2){var l=Xa(e);l!==0&&(n=l,t=Po(e,l))}if(t===1)throw t=Ql,nt(e,0),kn(e,n),Ee(e,le()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Kn(e,Se,dn),Ee(e,le()),null}function Ss(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(Qt=le()+500,Nr&&Wn())}}function ot(e){En!==null&&En.tag===0&&!(O&6)&&Bt();var n=O;O|=1;var t=Re.transition,l=B;try{if(Re.transition=null,B=1,e)return e()}finally{B=l,Re.transition=t,O=n,!(O&6)&&Wn()}}function Cs(){Ne=Nt.current,H(Nt)}function nt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,fy(t)),ie!==null)for(t=ie.return;t!==null;){var l=t;switch(is(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&lr();break;case 3:zt(),H(ke),H(be),fs();break;case 5:ms(l);break;case 4:zt();break;case 13:H(Y);break;case 19:H(Y);break;case 10:ss(l.type._context);break;case 22:case 23:Cs()}t=t.return}if(de=e,ie=e=Mn(e.current,null),ue=Ne=n,oe=0,Ql=null,vs=Tr=at=0,Se=Il=null,Yn!==null){for(n=0;n<Yn.length;n++)if(t=Yn[n],l=t.interleaved,l!==null){t.interleaved=null;var i=l.next,r=t.pending;if(r!==null){var a=r.next;r.next=i,l.next=a}t.pending=l}Yn=null}return e}function bm(e,n){do{var t=ie;try{if(os(),Oi.current=mr,ur){for(var l=X.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}ur=!1}if(rt=0,se=ae=X=null,El=!1,$l=0,xs.current=null,t===null||t.return===null){oe=1,Ql=n,ie=null;break}e:{var r=e,a=t.return,o=t,s=n;if(n=ue,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,u=o,m=u.tag;if(!(u.mode&1)&&(m===0||m===11||m===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Od(a);if(g!==null){g.flags&=-257,Bd(g,a,o,r,n),g.mode&1&&Fd(r,d,n),n=g,s=d;var x=n.updateQueue;if(x===null){var b=new Set;b.add(s),n.updateQueue=b}else x.add(s);break e}else{if(!(n&1)){Fd(r,d,n),Ls();break e}s=Error(k(426))}}else if(z&&o.mode&1){var _=Od(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Bd(_,a,o,r,n),rs(Kt(s,o));break e}}r=s=Kt(s,o),oe!==4&&(oe=2),Il===null?Il=[r]:Il.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var y=em(r,s,n);Ad(r,y);break e;case 1:o=s;var f=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dn===null||!Dn.has(h)))){r.flags|=65536,n&=-n,r.lanes|=n;var v=nm(r,o,n);Ad(r,v);break e}}r=r.return}while(r!==null)}xm(t)}catch(w){n=w,ie===t&&t!==null&&(ie=t=t.return);continue}break}while(!0)}function hm(){var e=fr.current;return fr.current=mr,e===null?mr:e}function Ls(){(oe===0||oe===3||oe===2)&&(oe=4),de===null||!(at&268435455)&&!(Tr&268435455)||kn(de,ue)}function gr(e,n){var t=O;O|=2;var l=hm();(de!==e||ue!==n)&&(dn=null,nt(e,n));do try{Oy();break}catch(i){bm(e,i)}while(!0);if(os(),O=t,fr.current=l,ie!==null)throw Error(k(261));return de=null,ue=0,oe}function Oy(){for(;ie!==null;)_m(ie)}function By(){for(;ie!==null&&!cp();)_m(ie)}function _m(e){var n=wm(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,n===null?xm(e):ie=n,xs.current=null}function xm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Vy(t,n),t!==null){t.flags&=32767,ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ie=null;return}}else if(t=Ay(t,n,Ne),t!==null){ie=t;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);oe===0&&(oe=5)}function Kn(e,n,t){var l=B,i=Re.transition;try{Re.transition=null,B=1,Ry(e,n,t,l)}finally{Re.transition=i,B=l}return null}function Ry(e,n,t,l){do Bt();while(En!==null);if(O&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(xp(e,r),e===de&&(ie=de=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Si||(Si=!0,Sm(Ji,function(){return Bt(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=Re.transition,Re.transition=null;var a=B;B=1;var o=O;O|=4,xs.current=null,Dy(e,t),pm(t,e),ay(io),Zi=!!lo,io=lo=null,e.current=t,Gy(t),up(),O=o,B=a,Re.transition=r}else e.current=t;if(Si&&(Si=!1,En=e,yr=i),r=e.pendingLanes,r===0&&(Dn=null),pp(t.stateNode),Ee(e,le()),n!==null)for(l=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],l(i.value,{componentStack:i.stack,digest:i.digest});if(pr)throw pr=!1,e=Lo,Lo=null,e;return yr&1&&e.tag!==0&&Bt(),r=e.pendingLanes,r&1?e===ko?Al++:(Al=0,ko=e):Al=0,Wn(),null}function Bt(){if(En!==null){var e=eu(yr),n=Re.transition,t=B;try{if(Re.transition=null,B=16>e?16:e,En===null)var l=!1;else{if(e=En,En=null,yr=0,O&6)throw Error(k(331));var i=O;for(O|=4,E=e.current;E!==null;){var r=E,a=r.child;if(E.flags&16){var o=r.deletions;if(o!==null){for(var s=0;s<o.length;s++){var d=o[s];for(E=d;E!==null;){var u=E;switch(u.tag){case 0:case 11:case 15:Nl(8,u,r)}var m=u.child;if(m!==null)m.return=u,E=m;else for(;E!==null;){u=E;var p=u.sibling,g=u.return;if(um(u),u===d){E=null;break}if(p!==null){p.return=g,E=p;break}E=g}}}var x=r.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}E=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,E=a;else e:for(;E!==null;){if(r=E,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Nl(9,r,r.return)}var y=r.sibling;if(y!==null){y.return=r.return,E=y;break e}E=r.return}}var f=e.current;for(E=f;E!==null;){a=E;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,E=h;else e:for(a=f;E!==null;){if(o=E,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Vr(9,o)}}catch(w){te(o,o.return,w)}if(o===a){E=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,E=v;break e}E=o.return}}if(O=i,Wn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Cr,e)}catch{}l=!0}return l}finally{B=t,Re.transition=n}}return!1}function Xd(e,n,t){n=Kt(t,n),n=em(e,n,1),e=Tn(e,n,1),n=xe(),e!==null&&(ei(e,1,n),Ee(e,n))}function te(e,n,t){if(e.tag===3)Xd(e,e,t);else for(;n!==null;){if(n.tag===3){Xd(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dn===null||!Dn.has(l))){e=Kt(t,e),e=nm(n,e,1),n=Tn(n,e,1),e=xe(),n!==null&&(ei(n,1,e),Ee(n,e));break}}n=n.return}}function jy(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),n=xe(),e.pingedLanes|=e.suspendedLanes&t,de===e&&(ue&t)===t&&(oe===4||oe===3&&(ue&130023424)===ue&&500>le()-ws?nt(e,0):vs|=t),Ee(e,n)}function vm(e,n){n===0&&(e.mode&1?(n=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):n=1);var t=xe();e=hn(e,n),e!==null&&(ei(e,n,t),Ee(e,t))}function Uy(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),vm(e,t)}function Wy(e,n){var t=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(k(314))}l!==null&&l.delete(n),vm(e,t)}var wm;wm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ke.current)Le=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Le=!1,Iy(e,n,t);Le=!!(e.flags&131072)}else Le=!1,z&&n.flags&1048576&&ku(n,ar,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ri(e,n),e=n.pendingProps;var i=Ht(n,be.current);Ot(n,t),i=ys(null,n,l,e,i,t);var r=gs();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Pe(l)?(r=!0,ir(n)):r=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cs(n),i.updater=Ar,n.stateNode=i,i._reactInternals=n,po(n,l,e,t),n=bo(null,n,l,!0,r,t)):(n.tag=0,z&&r&&ls(n),he(null,n,i,t),n=n.child),n;case 16:l=n.elementType;e:{switch(Ri(e,n),e=n.pendingProps,i=l._init,l=i(l._payload),n.type=l,i=n.tag=qy(l),e=ze(l,e),i){case 0:n=go(null,n,l,e,t);break e;case 1:n=Ud(null,n,l,e,t);break e;case 11:n=Rd(null,n,l,e,t);break e;case 14:n=jd(null,n,l,ze(l.type,e),t);break e}throw Error(k(306,l,""))}return n;case 0:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:ze(l,i),go(e,n,l,i,t);case 1:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:ze(l,i),Ud(e,n,l,i,t);case 3:e:{if(rm(n),e===null)throw Error(k(387));l=n.pendingProps,r=n.memoizedState,i=r.element,Vu(e,n),dr(n,l,null,t);var a=n.memoizedState;if(l=a.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){i=Kt(Error(k(423)),n),n=Wd(e,n,l,t,i);break e}else if(l!==i){i=Kt(Error(k(424)),n),n=Wd(e,n,l,t,i);break e}else for(Ve=Vn(n.stateNode.containerInfo.firstChild),Te=n,z=!0,Qe=null,t=Iu(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qt(),l===i){n=_n(e,n,t);break e}he(e,n,l,t)}n=n.child}return n;case 5:return Tu(n),e===null&&uo(n),l=n.type,i=n.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,ro(l,i)?a=null:r!==null&&ro(l,r)&&(n.flags|=32),im(e,n),he(e,n,a,t),n.child;case 6:return e===null&&uo(n),null;case 13:return am(e,n,t);case 4:return us(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=$t(n,null,l,t):he(e,n,l,t),n.child;case 11:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:ze(l,i),Rd(e,n,l,i,t);case 7:return he(e,n,n.pendingProps,t),n.child;case 8:return he(e,n,n.pendingProps.children,t),n.child;case 12:return he(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(l=n.type._context,i=n.pendingProps,r=n.memoizedProps,a=i.value,U(or,l._currentValue),l._currentValue=a,r!==null)if(Xe(r.value,a)){if(r.children===i.children&&!ke.current){n=_n(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var o=r.dependencies;if(o!==null){a=r.child;for(var s=o.firstContext;s!==null;){if(s.context===l){if(r.tag===1){s=pn(-1,t&-t),s.tag=2;var d=r.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?s.next=s:(s.next=u.next,u.next=s),d.pending=s}}r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),mo(r.return,t,n),o.lanes|=t;break}s=s.next}}else if(r.tag===10)a=r.type===n.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(k(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),mo(a,t,n),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===n){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}he(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,l=n.pendingProps.children,Ot(n,t),i=Ue(i),l=l(i),n.flags|=1,he(e,n,l,t),n.child;case 14:return l=n.type,i=ze(l,n.pendingProps),i=ze(l.type,i),jd(e,n,l,i,t);case 15:return tm(e,n,n.type,n.pendingProps,t);case 17:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:ze(l,i),Ri(e,n),n.tag=1,Pe(l)?(e=!0,ir(n)):e=!1,Ot(n,t),Zu(n,l,i),po(n,l,i,t),bo(null,n,l,!0,e,t);case 19:return om(e,n,t);case 22:return lm(e,n,t)}throw Error(k(156,n.tag))};function Sm(e,n){return Yc(e,n)}function Hy(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,n,t,l){return new Hy(e,n,t,l)}function ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qy(e){if(typeof e=="function")return ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qo)return 11;if(e===$o)return 14}return 2}function Mn(e,n){var t=e.alternate;return t===null?(t=Be(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wi(e,n,t,l,i,r){var a=2;if(l=e,typeof e=="function")ks(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _t:return tt(t.children,i,r,n);case Ho:a=8,i|=8;break;case Fa:return e=Be(12,t,n,i|2),e.elementType=Fa,e.lanes=r,e;case Oa:return e=Be(13,t,n,i),e.elementType=Oa,e.lanes=r,e;case Ba:return e=Be(19,t,n,i),e.elementType=Ba,e.lanes=r,e;case Tc:return Dr(t,i,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ac:a=10;break e;case Vc:a=9;break e;case qo:a=11;break e;case $o:a=14;break e;case wn:a=16,l=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Be(a,t,n,i),n.elementType=e,n.type=l,n.lanes=r,n}function tt(e,n,t,l){return e=Be(7,e,l,n),e.lanes=t,e}function Dr(e,n,t,l){return e=Be(22,e,l,n),e.elementType=Tc,e.lanes=t,e.stateNode={isHidden:!1},e}function Ca(e,n,t){return e=Be(6,e,null,n),e.lanes=t,e}function La(e,n,t){return n=Be(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $y(e,n,t,l,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ps(e,n,t,l,i,r,a,o,s){return e=new $y(e,n,t,o,s),n===1?(n=1,r===!0&&(n|=8)):n=0,r=Be(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:l,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},cs(r),e}function zy(e,n,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ht,key:l==null?null:""+l,children:e,containerInfo:n,implementation:t}}function Cm(e){if(!e)return Bn;e=e._reactInternals;e:{if(ct(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Pe(t))return Cu(e,t,n)}return n}function Lm(e,n,t,l,i,r,a,o,s){return e=Ps(t,l,!0,e,i,r,a,o,s),e.context=Cm(null),t=e.current,l=xe(),i=Gn(t),r=pn(l,i),r.callback=n??null,Tn(t,r,i),e.current.lanes=i,ei(e,i,l),Ee(e,l),e}function Gr(e,n,t,l){var i=n.current,r=xe(),a=Gn(i);return t=Cm(t),n.context===null?n.context=t:n.pendingContext=t,n=pn(r,a),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=Tn(i,n,a),e!==null&&(Je(e,i,a,r),Fi(e,i,a)),a}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Es(e,n){Zd(e,n),(e=e.alternate)&&Zd(e,n)}function Ky(){return null}var km=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ns(e){this._internalRoot=e}Mr.prototype.render=Ns.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Gr(e,n,null,null)};Mr.prototype.unmount=Ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ot(function(){Gr(null,e,null,null)}),n[bn]=null}};function Mr(e){this._internalRoot=e}Mr.prototype.unstable_scheduleHydration=function(e){if(e){var n=lu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ln.length&&n!==0&&n<Ln[t].priority;t++);Ln.splice(t,0,e),t===0&&ru(e)}};function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function Qy(e,n,t,l,i){if(i){if(typeof l=="function"){var r=l;l=function(){var d=br(a);r.call(d)}}var a=Lm(n,l,e,0,null,!1,!1,"",ec);return e._reactRootContainer=a,e[bn]=a.current,jl(e.nodeType===8?e.parentNode:e),ot(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof l=="function"){var o=l;l=function(){var d=br(s);o.call(d)}}var s=Ps(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=s,e[bn]=s.current,jl(e.nodeType===8?e.parentNode:e),ot(function(){Gr(n,s,t,l)}),s}function Or(e,n,t,l,i){var r=t._reactRootContainer;if(r){var a=r;if(typeof i=="function"){var o=i;i=function(){var s=br(a);o.call(s)}}Gr(n,a,e,i)}else a=Qy(t,n,e,i,l);return br(a)}nu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=_l(n.pendingLanes);t!==0&&(Qo(n,t|1),Ee(n,le()),!(O&6)&&(Qt=le()+500,Wn()))}break;case 13:ot(function(){var l=hn(e,1);if(l!==null){var i=xe();Je(l,e,1,i)}}),Es(e,1)}};Yo=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var t=xe();Je(n,e,134217728,t)}Es(e,134217728)}};tu=function(e){if(e.tag===13){var n=Gn(e),t=hn(e,n);if(t!==null){var l=xe();Je(t,e,n,l)}Es(e,n)}};lu=function(){return B};iu=function(e,n){var t=B;try{return B=e,n()}finally{B=t}};Qa=function(e,n,t){switch(n){case"input":if(Ua(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var i=Er(l);if(!i)throw Error(k(90));Gc(l),Ua(l,i)}}}break;case"textarea":Fc(e,t);break;case"select":n=t.value,n!=null&&Dt(e,!!t.multiple,n,!1)}};Hc=Ss;qc=ot;var Yy={usingClientEntryPoint:!1,Events:[ti,St,Er,Uc,Wc,Ss]},yl={findFiberByHostInstance:Qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jy={bundleType:yl.bundleType,version:yl.version,rendererPackageName:yl.rendererPackageName,rendererConfig:yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kc(e),e===null?null:e.stateNode},findFiberByHostInstance:yl.findFiberByHostInstance||Ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{Cr=Ci.inject(Jy),rn=Ci}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy;Ge.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Is(n))throw Error(k(200));return zy(e,n,null,t)};Ge.createRoot=function(e,n){if(!Is(e))throw Error(k(299));var t=!1,l="",i=km;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ps(e,1,!1,null,null,t,!1,l,i),e[bn]=n.current,jl(e.nodeType===8?e.parentNode:e),new Ns(n)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Kc(n),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return ot(e)};Ge.hydrate=function(e,n,t){if(!Fr(n))throw Error(k(200));return Or(null,e,n,!0,t)};Ge.hydrateRoot=function(e,n,t){if(!Is(e))throw Error(k(405));var l=t!=null&&t.hydratedSources||null,i=!1,r="",a=km;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Lm(n,null,e,1,t??null,i,!1,r,a),e[bn]=n.current,jl(e),l)for(e=0;e<l.length;e++)t=l[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Mr(n)};Ge.render=function(e,n,t){if(!Fr(n))throw Error(k(200));return Or(null,e,n,!1,t)};Ge.unmountComponentAtNode=function(e){if(!Fr(e))throw Error(k(40));return e._reactRootContainer?(ot(function(){Or(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};Ge.unstable_batchedUpdates=Ss;Ge.unstable_renderSubtreeIntoContainer=function(e,n,t,l){if(!Fr(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Or(e,n,t,!1,l)};Ge.version="18.3.1-next-f1338f8080-20240426";function Pm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pm)}catch(e){console.error(e)}}Pm(),Pc.exports=Ge;var Xy=Pc.exports,nc=Xy;Ga.createRoot=nc.createRoot,Ga.hydrateRoot=nc.hydrateRoot;const Zy=[{themeName:"Inverter",sections:[{sectionTitle:"Basic Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"System Time",help:"Date and time the inverter will use to run schedules",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Year",arg:"Year",dtype:"Number",description:"",longdescription:"",range:{min:0,max:99},telemetry:{model:"40104",block:"fixed",point:"Year"}},{name:"Mon",arg:"Mon",dtype:"Number",description:"",longdescription:"",range:{min:1,max:12},telemetry:{model:"40104",block:"fixed",point:"Month"}},{name:"Day",arg:"Day",dtype:"Number",description:"",longdescription:"",range:{min:1,max:31},telemetry:{model:"40104",block:"fixed",point:"Day"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"Hour"}},{name:"Min",arg:"Min",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Minute"}},{name:"Sec",arg:"Sec",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"Second"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"SystemTime"}},command_id:"Basic.SystemTime",widget:"datetime"},{title:"Grid Interaction",help:"Select whether the inverter operates independently of the grid, or is connected to the grid. If off-grid, you should also ignore grid-loss warnings.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Off-grid",1:"Grid-tied"},friendly_meanings:{0:"Off-Grid.  There is no available power grid",1:"Grid-Tied. Grid power is available."},telemetry:{model:"40104",block:"fixed",point:"OperatingMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"OperatingMode"}},command_id:"Basic.OperatingMode"},{title:"Operating Mode",help:"Select how solar power is prioritized. Self-consumption: PV powers the home first, then charges the battery, and exports last (if allowed). Export first: PV powers the home, then exports to grid, and charges the battery last. Backup power: PV charges the battery first to build reserve, then powers the home, and exports last (if allowed). If a battery schedule is running (PV Charge Only, Discharge Only, or Grid Charge), the inverter will follow that schedule during those times instead of this operating mode. When the scheduled period ends, the inverter will return to the selected operating mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Self used mode",1:"Feed-in priority mode",2:"Back-up mode"},friendly_meanings:{0:"Self-consumption",1:"Export first",2:"Backup power"},telemetry:{model:"40104",block:"fixed",point:"WorkMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"WorkMode"}},command_id:"Basic.WorkMode"},{title:"Ignore Grid-Loss Warning",help:"When enabled, the inverter will not treat the absence of grid power as an alarm. Use this mode for permanently off-grid systems where grid connection is unavailable.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid-Loss Behavior",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Treat as Alarm",1:"Ignore (Off-Grid Mode)"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"GridLossWarningClear"}},command_id:"Basic.GridLossWarningClear"},{title:"Power Status",help:"Put the inverter into standby mode to stop operation or make configuration changes. While in standby, the inverter will not generate PV power or charge/discharge the battery. If grid power is available, it be used to supply the loads. If the grid is unavailable, the building will not have power.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"State",arg:"State",dtype:"enum",description:"",longdescription:"",meanings:{0:"Standby",1:"Other"},friendly_meanings:{0:"Standby",1:"Running"},telemetry:{model:"40104",block:"fixed",point:"PowerControl"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"PowerStatus"}},command_id:"Basic.PowerStatus"},{title:"Reset to Factory Defaults",help:"Restores all inverter configuration parameters to their original factory values. Use with caution â€” this cannot be undone.",element_type:"service",access:"INVOKE",readOnly:!1,entries:[],protocol:{matter:{MEP:"HybridInverter",Cluster:"Basic",Element:"AllToDefault"}},command_id:"Basic.AllToDefault",invokeButtonText:"Reset Now"},{title:"Inverter Power Control",help:`Turns the inverter output on or off.\r
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
Volt: Uses DC voltage limits instead.`,element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"ChargeCtrlType",dtype:"enum",description:"",longdescription:"",meanings:{0:"SOC",1:"Volt"},friendly_meanings:{0:"SOC",1:"Volt"},telemetry:{model:"40104",block:"fixed",point:"ChaDisChaCtrlType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChaDisChaCtrlType"}},command_id:"BatteryBase.ChaDisChaCtrlType"},{title:"Charge Limit (SOC)",help:"Sets the maximum state of charge (SOC) the battery will be charged to. Once the battery reaches this level, charging stops to prevent overcharging and extend lifespan.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ChargeLimitSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"ChargeLimitSoc"}},command_id:"BatteryBase.ChargeLimitSoc"},{title:"Max Battery Current",help:"Sets the maximum charging and discharging current allowed for the connected inverter. Choose the preset that matches your inverter model to automatically apply the correct limits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Charge Preset",arg:"MaxChargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxChargingCurrent"}},{name:"Max Discharge Preset",arg:"MaxDischargingCurrent",dtype:"enum",description:"",longdescription:"",meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},friendly_meanings:{0:"Envy12K",1:"Envy10K",2:"Envy8K"},telemetry:{model:"40104",block:"fixed",point:"MaxDischargingCurrent"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"MaxChaDisChaCurrent"}},command_id:"BatteryBase.MaxChaDisChaCurrent"},{title:"On-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to while grid power is available. Below this level, the inverter will stop discharging and switch to grid power to protect battery capacity.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 21-90%.  Must be higher than the Off-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OnGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OnGridCutOffSoc"}},command_id:"BatteryBase.OnGridCutOffSoc"},{title:"Off-Grid Battery Cutoff SOC",help:"Sets the minimum state of charge (SOC) the battery will discharge to when operating off-grid. Once the battery reaches this level, the inverter stops discharging to prevent deep discharge and maintain battery health.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"Recommended: between 20-89%.  Must be lower than the On-Grid Battery Cutoff SOC.",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"OffGridCutOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBase",Element:"OffGridCutOffSoc"}},command_id:"BatteryBase.OffGridCutOffSoc"}]}]},{sectionTitle:"Battery Backup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Backup Mode",help:"Enables or disables battery-backup operation. When enabled, the inverter reserves part of the battery capacity to power critical loads during a grid outage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Backup Mode",1:"Enable Backup Mode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryBackupMode"}},command_id:"BatteryBackup.BatteryBackupMode"},{title:"Battery Reserve SOC",help:"While Battery Backup Mode is enabled, the battery will stop discharging once it reaches this level. When Backup Mode is disabled, normal operation applies and discharge will continue down to the On-Grid or Off-Grid Battery Cutoff SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryBackup",Element:"BatteryReserveSOC"}},command_id:"BatteryBackup.BatteryReserveSOC"}]}]},{sectionTitle:"Battery Scheduling",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Battery Scheduling",help:"This is a special scheduling mode designed for certain time-of-use (TOU) utility rates or other custom situations. In most circumstances, we recomment allowing your system to  manage charging and discharging automatically without setting a schedule.  You don't need to set a schedule unless you have a specific reason to charge or discharge at exact times.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Scheduling",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable Scheduling",1:"Enable the 'PV Charge Only' and 'Discharge Only' scheduling modes"},telemetry:{model:"40104",block:"fixed",point:"BatteryScheduling"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryScheduling",Element:"BatteryScheduling"}},command_id:"BatteryScheduling.BatteryScheduling"}]},{title:"PV Charge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Battery Charge Power During 'PV Charge Only' Periods",help:"Sets the maximum charging power during scheduled Time-of-Use (TOU) charge periods in kW. Set this limit to control the power level at which the battery will charge from the grid during PV charge only periods",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",unit:"kW",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pChgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUMaximumChargingPower"}},command_id:"BatteryTOUCharge.TOUMaximumChargingPower"},{title:"Schedule Window 1 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan1"}},command_id:"BatteryTOUCharge.TOUChargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan2"}},command_id:"BatteryTOUCharge.TOUChargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for PV Charge Only",help:"During these times your battery will charge from solar power and not discharge to power your home unless there is a grid power outage",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"chgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUCharge",Element:"TOUChargingPlan3"}},command_id:"BatteryTOUCharge.TOUChargingPlan3",widget:"timerange"}]},{title:"Discharge Only",visibility:"default",collapsedByDefault:!1,points:[{title:"Max Inverter Output Power During 'Discharge Only' Periods",help:"Sets the maximum discharging power during scheduled Time-of-Use (TOU) discharge periods in kW. Limit this to control how much battery power is exported to loads or grid during those windows.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Power (kW)",arg:"Power",dtype:"Number",description:"Should not exceed the inverter's rated power",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"pDischgT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUMaximumDischargingPower"}},command_id:"BatteryTOUDischarge.TOUMaximumDischargingPower"},{title:"TOU Discharge Stop SOC",help:"Sets the minimum state of charge (SOC) that the battery will discharge to during 'Discharge Only' operation. Once this level is reached, discharging stops to preserve reserve capacity for later use or backup.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"SOC",arg:"SOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"socDischgEndT1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"DischargingStopSoc"}},command_id:"BatteryTOUDischarge.DischargingStopSoc"},{title:"Schedule Window 1 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST1",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET1",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan1"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan1",widget:"timerange"},{title:"Schedule Window 2 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST2",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET2",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan2"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan2",widget:"timerange"},{title:"Schedule Window 3 for Discharge Only",help:"During these times, your battery will discharge at a steady rate and not charge from solar power.  Solar power will be used in your home and sold to the grid as allowed",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start Hour (0-23)",arg:"StartTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Hour"}},{name:"Start Minute (0-59)",arg:"StartTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgST3",bitsplit_map:"Minute"}},{name:"End Hour (0-23)",arg:"EndTime_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Hour"}},{name:"End Minute (0-59)",arg:"EndTime_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"dischgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BatteryTOUDischarge",Element:"TOUDischargingPlan3"}},command_id:"BatteryTOUDischarge.TOUDischargingPlan3",widget:"timerange"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Discharge only Control Style",help:"Selects how 'discharge only' is controlled. 'Discharge only' can stop when a voltage limit is reached or when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"DischargeOnlyControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{4:"Enable SOC control (disable for voltage control)"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.DischargeOnlyControlStyle"},{title:"Discharge only Stop Voltage",help:"Sets the battery voltage at which discharge only will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Discharge only Stop Voltage",arg:"DischargeOnlyStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:202,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischargeOnlyStopVoltage"}]}]},{sectionTitle:"Grid Charge",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Allow Battery Charging from Grid",help:"Enables the battery to charge from the utility grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Grid Charge",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Do not charge the battery from grid power",1:"Allowed"},telemetry:{model:"40104",block:"fixed",point:"ACChargeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeStatus"}},command_id:"ACCharge.ACChargeStatus"},{title:"Grid Charge Power Limit",help:"Sets the maximum power the inverter will draw from the grid for charging. This cap applies when Grid Charge is enabled (and within any configured time windows).",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Max Grid Charge Power (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"ACChargePower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargePower"}},command_id:"ACCharge.ACChargePower"},{title:"Grid Charge Control Type",help:"Select whether grid charging follows a time schedule or SOC/voltage thresholds.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Control Type",arg:"Type",dtype:"enum",description:"",longdescription:"",unit:"%",meanings:{0:"according to time",1:"according to SOC/Volt"},friendly_meanings:{0:"By Time Schedule",1:"By SOC/Voltage"},telemetry:{model:"40104",block:"fixed",point:"ACChargeType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargeType"}},command_id:"ACCharge.ACChargeType"},{title:"Grid Charge SOC Range",help:"Defines when grid charging starts and stops based on battery state of charge (SOC). Charging starts when SOC falls below Start SOC and stops when it reaches Stop SOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"ACChgStartSOC"},protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}}},{name:"SOC",arg:"StopSOC",dtype:"Number",description:"",longdescription:"",unit:"%",range:{min:0,max:90},telemetry:{model:"40104",block:"fixed",point:"ACChgStopSOC"},greater_than:"StartSOC",protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStopSOC"}}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChgStartSOC"}},command_id:"ACCharge.ACChgSOCRange"},{title:"Grid Charge Windows",help:"During these times, your battery will continue to charge from solar power normally, but will also use additional power from the grid to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Window 1 Start Hour",arg:"StartTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Hour"}},{name:"Window 1 Start Minute",arg:"StartTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST1",bitsplit_map:"Minute"}},{name:"Window 1 End Hour",arg:"EndTime1_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Hour"}},{name:"Window 1 End Minute",arg:"EndTime1_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET1",bitsplit_map:"Minute"}},{name:"Window 2 Start Hour",arg:"StartTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Hour"}},{name:"Window 2 Start Minute",arg:"StartTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST2",bitsplit_map:"Minute"}},{name:"Window 2 End Hour",arg:"EndTime2_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Hour"}},{name:"Window 2 End Minute",arg:"EndTime2_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET2",bitsplit_map:"Minute"}},{name:"Window 3 Start Hour",arg:"StartTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Hour"}},{name:"Window 3 Start Minute",arg:"StartTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgST3",bitsplit_map:"Minute"}},{name:"Window 3 End Hour",arg:"EndTime3_h",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Hour"}},{name:"Window 3 End Minute",arg:"EndTime3_m",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59},telemetry:{model:"40104",block:"fixed",point:"acChgET3",bitsplit_map:"Minute"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCharge",Element:"ACChargingPlan"}},command_id:"ACCharge.ACChargingPlan",widget:"timerange-multi"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Grid Charge Control Style",help:"Selects how grid charging is controlled. Charging can follow a time schedule, stop when a voltage limit is reached, or stop when a target state of charge (SOC) is reached.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Control Style",arg:"GridChargeControlStyle",dtype:"bitfield16",description:"",longdescription:"",meanings:{1:"Charge based on time",2:"Stop charging at voltage limit",3:"Stop charging at SOC limit"}}],protocol:{modbus:{address:120,register_type:3,size:1}},command_id:"Modbus.GridChargeControlStyle"},{title:"Grid Charging Start Voltage",help:"Sets the battery voltage at which grid charging will stop.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Start Voltage",arg:"GridChargingStartVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:158,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStartVoltage"},{title:"Grid Charging Stop Voltage",help:"Sets the maximum battery voltage during grid charging. Once this voltage is reached, the inverter will stop charging from the grid to protect the battery and prevent overvoltage.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Grid Charging Stop Voltage",arg:"GridChargingStopVoltage",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:159,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GridChargingStopVoltage"}]}]},{sectionTitle:"Battery Base",subsections:[{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Max Charge Current",help:"Instead of using the presets, you may set the charge current directly in amps.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Charge Current (A)",arg:"ChargeCurr",dtype:"Number",description:"",longdescription:"",unit:"A",range:{min:0}}],protocol:{modbus:{address:101,register_type:3,size:1}},command_id:"Modbus.ChargeCurr"},{title:"Battery Voltage Correction",help:" ",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Battery Voltage Correction",arg:"BatteryVoltageCorrection",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:999,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.DischgCurr"}]}]}]},{themeName:"Grid",sections:[{sectionTitle:"Setup",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Grid Parameters",help:"This setting changes the conditions under which the inverter will connect or disconnect from the utility grid. Different areas have different rules about when this equipment is allowed to disconnect and when it must ride through. Choose the code required by the local utility or AHJ.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Code",arg:"Code",dtype:"enum",description:"",longdescription:"",meanings:{0:"Default(UL-240-18)",1:"California(Rule 21)",2:"Hawaii(Rule 14)",3:"Puerto Rico LUMA",4:"KIUC"},friendly_meanings:{0:"Default UL-1741 / IEEE 1547",1:"California (Rule 21)",2:"Hawaii (Rule 14)",3:"Puerto Rico (LUMA)",4:"KIUC"},telemetry:{model:"40104",block:"fixed",point:"GridRegulation"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridRegulation"}},command_id:"GridBase.GridRegulation"},{title:"Grid Type",help:"Choose wiring configuration of the site.  This helps configure the system to match the power service at the site.  Note the voltage you enter here must match the EPS Voltage.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Service Type",arg:"Type",dtype:"enum",description:"",longdescription:"",meanings:{0:"Split240V/120V",1:"3phase208V/120V",2:"Single240V",3:"Single230V",4:"Split200V/100V"},friendly_meanings:{0:"Split 240V / 120V",1:"3-Phase 208V / 120V",2:"Single 240V",3:"Single 230V",4:"Split 200V / 100V"},telemetry:{model:"40104",block:"fixed",point:"GridType"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridType"}},command_id:"GridBase.GridType"},{title:"Grid Frequency",help:"Sets the nominal grid frequency for the installation. Use 60 Hz for North America and most split-phase installs; use 50 Hz for regions that operate at 230 V single-phase.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Frequency (Hz)",arg:"Freq",dtype:"enum",description:"",longdescription:"",meanings:{0:"50",1:"60"},friendly_meanings:{0:"50 Hz",1:"60 Hz"},telemetry:{model:"40104",block:"fixed",point:"GridFreq"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridBase",Element:"GridFreq"}},command_id:"GridBase.GridFreq"}]}]},{sectionTitle:"Grid Protection",subsections:[{title:"Grid Protection Parameters",visibility:"default",collapsedByDefault:!0,points:[{title:"Grid Voltage Limits (Stage 1)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1"}},command_id:"GridProtection.GridVoltLimit1"},{title:"Grid Voltage Limits (Stage 2)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2"}},command_id:"GridProtection.GridVoltLimit2"},{title:"Grid Voltage Limits (Stage 3)",help:"Voltage trip window. If grid voltage rises above or falls below these thresholds for longer than the threshold time allows, the inverter will disconnect from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Vac)",arg:"GridVoltLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3High"}},{name:"Lower Limit (Vac)",arg:"GridVoltLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3"}},command_id:"GridProtection.GridVoltLimit3"},{title:"Grid Frequency Limits (Stage 1)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1"}},command_id:"GridProtection.GridFreqLimit1"},{title:"Grid Frequency Limits (Stage 2)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2"}},command_id:"GridProtection.GridFreqLimit2"},{title:"Grid Frequency Limits (Stage 3)",help:"Sets the upper and lower grid frequency thresholds. If grid frequency goes outside this range, the inverter will disconnect from the grid to protect the system and comply with grid safety standards.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Upper Limit (Hz)",arg:"GridFreqLimitHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3High"}},{name:"Lower Limit (Hz)",arg:"GridFreqLimitLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3Low"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3"}},command_id:"GridProtection.GridFreqLimit3"},{title:"Grid Voltage Trip Time",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit1HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit1Time"}},command_id:"GridProtection.GridVoltLimit1Time"},{title:"Grid Voltage Trip Time (Stage 2)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit2HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit2Time"}},command_id:"GridProtection.GridVoltLimit2Time"},{title:"Grid Voltage Trip Time (Stage 3)",help:"Defines how long the grid voltage must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Low Voltage Trip Delay (ms)",arg:"GridVoltLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3LowTime"}},{name:"High Voltage Trip Delay (ms)",arg:"GridVoltLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridVoltLimit3HighTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridVoltLimit3Time"}},command_id:"GridProtection.GridVoltLimit3Time"},{title:"Grid Frequency Trip Time (Stage 1)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 1) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit1LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit1Time"}},command_id:"GridProtection.GridFreqLimit1Time"},{title:"Grid Frequency Trip Time (Stage 2)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 2) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit2LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit2Time"}},command_id:"GridProtection.GridFreqLimit2Time"},{title:"Grid Frequency Trip Time (Stage 3)",help:"Defines how long the grid frequency must remain below the lower limit or above the upper limit (Stage 3) before the inverter disconnects from the grid.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"High Frequency Trip Delay (ms)",arg:"GridFreqLimitHighTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3HighTime"}},{name:"Low Frequency Trip Delay (ms)",arg:"GridFreqLimitLowTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GridFreqLimit3LowTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridProtection",Element:"GridFreqLimit3Time"}},command_id:"GridProtection.GridFreqLimit3Time"}]}]},{sectionTitle:"Grid Connection",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Permit to Operate",help:"Shows whether the inverter is permitted to operate in grid-connected mode.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Permit Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Not Permitted",1:"Permitted"},telemetry:{model:"40104",block:"fixed",point:"PermitServiceStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"PermitServiceStatus"}},command_id:"GridConnection.PermitServiceStatus"},{title:"Ramp Rate",help:"How quickly inverter output is allowed to increase.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Ramp Rate (%/sec)",arg:"Rate",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"RampRate"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"RampRate"}},command_id:"GridConnection.RampRate"},{title:"Applicable Grid Voltage Range",help:"Voltage window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Vac)",arg:"ApplicableVoltageLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageLow"}},{name:"Upper Limit (Vac)",arg:"ApplicableVoltageHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableVoltageHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableVoltage"}},command_id:"GridConnection.ApplicableVoltage"},{title:"Applicable Grid Frequency Range",help:"Frequency window within which grid connection is permitted. Outside this range the inverter will not connect or will disconnect.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Lower Limit (Hz)",arg:"ApplicableFrequencyLow",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyLow"}},{name:"Upper Limit (Hz)",arg:"ApplicableFrequencyHigh",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ApplicableFrequencyHigh"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"ApplicableFrequency"}},command_id:"GridConnection.ApplicableFrequency"},{title:"Connection Delay Times",help:"Delays applied before initial grid connection and after a grid disturbance clears (reconnection). These timers help meet interconnection standards.  The connection delay is how long the inverter will wait after first being powered on.  Reconnection delay is how long the inverter will wait after a grid disturbance or outage clears.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Connection Delay (s)",arg:"ConnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConnectionDelayTime"}},{name:"Reconnection Delay (s)",arg:"ReconnectionDelayTime",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReconnectionDelayTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"GridConnection",Element:"DelayTime"}},command_id:"GridConnection.DelayTime"}]}]},{sectionTitle:"Grid Support",subsections:[{title:"Constant Power Factor",visibility:"default",collapsedByDefault:!0,points:[{title:"Power Factor Mode",help:"Shows whether constant power-factor control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Status",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive â€” No PF control",1:"Active â€” Constant PF"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactorModeStatus"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactorModeStatus"},{title:"Power Factor Setpoint",help:"The target power factor and excitation. Under-excited = lagging (absorbing vars); Over-excited = leading (supplying vars).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactorExcited"}},{name:"Power Factor (PF)",arg:"PowerFactor",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ConstantPowerFactor"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantPowerFactorMode",Element:"ConstantPowerFactor"}},command_id:"ConstantPowerFactorMode.ConstantPowerFactor"}]},{title:"Constant Reactive Power",visibility:"default",collapsedByDefault:!0,points:[{title:"Reactive Power Mode",help:"Shows whether constant reactive-power control is active.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Excitation",arg:"Excited",dtype:"enum",description:"",longdescription:"",meanings:{0:"Under-excited",1:"Over-excited"},friendly_meanings:{0:"Under-excited",1:"Over-excited"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeExcited"}},{name:"Status",arg:"Status",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no reactive power control",1:"Active - reactive power control"},telemetry:{model:"40104",block:"fixed",point:"ConstantReactivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ConstantReactivePowerModeStatus"}},command_id:"ConstantReactivePowerMode.ConstantReactivePowerModeStatus"},{title:"Reactive Power Setpoint",help:"Displays the reactive-power target as a percentage of rated power (vars). Excitation determines whether vars are supplied (leading) or absorbed (lagging).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Reactive Power (%)",arg:"Power",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"ReactivePowerPercentCMD"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ConstantReactivePowerMode",Element:"ReactivePowerPercentCMD"}},command_id:"ConstantReactivePowerMode.ReactivePowerPercentCMD"}]},{title:"Volt-VAR (Voltage-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-VAR Mode",help:"Shows whether Volt-VAR (voltage-reactive power) control is active. This value is read-only and reflects the current configuration or utility command.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-VAR control",1:"Active - Volt-VAR control"},telemetry:{model:"40104",block:"fixed",point:"VoltageReactivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VoltageReactivePowerMode"}},command_id:"VoltageReactivePowerMode.VoltageReactivePowerMode"},{title:"Autonomous Vref Adjustment",help:"Indicates whether the inverter autonomously adjusts its reference voltage (Vref).",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Autonomous Adjustment",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"AutonomousVrefAdjustment"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"AutonomousVrefAdjustment"}},command_id:"VoltageReactivePowerMode.AutonomousVrefAdjustment"},{title:"Reference Voltage (Vref)",help:"Voltage reference used for Volt-VAR calculations.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Vref",arg:"Verf",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Verf"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Verf"}},command_id:"VoltageReactivePowerMode.Verf"},{title:"Vref Adjustment Time Constant",help:"Time constant applied when adjusting Vref.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Time Constant",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VrefAdjustmentTimeConstant"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"VrefAdjustmentTimeConstant"}},command_id:"VoltageReactivePowerMode.VrefAdjustmentTimeConstant"},{title:"Volt-VAR Voltage Breakpoints",help:"Voltage points (V1-V4) that define the Volt-VAR curve breakpoints.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"V1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV1"}},{name:"V2 (Voltage Point 2)",arg:"V2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV2"}},{name:"V3 (Voltage Point 3)",arg:"V3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV3"}},{name:"V4 (Voltage Point 4)",arg:"V4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderOverV4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"UnderOverVoltage"}},command_id:"VoltageReactivePowerMode.UnderOverVoltage"},{title:"Reactive Power Setpoint Q1",help:"Reactive power at voltage point V1 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q1 (Reactive Setpoint 1)",arg:"Q1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q1"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q1"}},command_id:"VoltageReactivePowerMode.Q1"},{title:"Reactive Power Setpoint Q2",help:"Reactive power at voltage point V2 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q2 (Reactive Setpoint 2)",arg:"Q2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q2"}},command_id:"VoltageReactivePowerMode.Q2"},{title:"Reactive Power Setpoint Q3",help:"Reactive power at voltage point V3 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q3 (Reactive Setpoint 3)",arg:"Q3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q3"}},command_id:"VoltageReactivePowerMode.Q3"},{title:"Reactive Power Setpoint Q4",help:"Reactive power at voltage point V4 on the Volt-VAR curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Q4 (Reactive Setpoint 4)",arg:"Q4",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"Q4"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"Q4"}},command_id:"VoltageReactivePowerMode.Q4"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-VAR changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VqOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageReactivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageReactivePowerMode.OpenLoopResponseTime"}]},{title:"P-Q Mode (Active-Reactive Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"P-Q Mode Status",help:"Shows whether Active/Reactive Power (P-Q) control mode is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no P-Q control",1:"Active - P-Q control"},telemetry:{model:"40104",block:"fixed",point:"PQModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"PQModeStatus"}},command_id:"ActivePowerReactivePowerMode.PQModeStatus"},{title:"P-Q Curve Points",help:"Breakpoint setpoints for the Active/Reactive Power (P-Q) characteristic.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P1 Setpoint",arg:"P1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP1"}},{name:"P2 Setpoint",arg:"P2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP2"}},{name:"P3 Setpoint",arg:"P3",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"PQP3"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ActivePowerReactivePowerMode",Element:"P_QP"}},command_id:"ActivePowerReactivePowerMode.P_QP"}]},{title:"Volt-Watt (Voltage-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Volt-Watt Mode",help:"Shows whether Volt-Watt (voltage-active power) control is enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Inactive - no Volt-Watt control",1:"Active - Volt-Watt control"},telemetry:{model:"40104",block:"fixed",point:"VoltageActivePowerMode"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltageActivePowerMode"}},command_id:"VoltageActivePowerMode.VoltageActivePowerMode"},{title:"Volt-Watt Voltage Breakpoints",help:"Voltage points that define the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"V1 (Voltage Point 1)",arg:"VoltWattV1",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV1"}},{name:"V2 (Voltage Point 2)",arg:"VoltWattV2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattV2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattV"}},command_id:"VoltageActivePowerMode.VoltWattV"},{title:"Volt-Watt Power Setpoint",help:"Power setpoint at voltage breakpoint V2 on the Volt-Watt curve.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"P2 Setpoint",arg:"VoltWattP2",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattP2"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"VoltWattP2"}},command_id:"VoltageActivePowerMode.VoltWattP2"},{title:"Open-Loop Response Time",help:"Response time used for open-loop Volt-Watt changes.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"VoltWattOpenLoopResponseTime",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"VoltWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"VoltageActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"VoltageActivePowerMode.OpenLoopResponseTime"}]},{title:"Freq-Watt (Frequency-Active Power)",visibility:"default",collapsedByDefault:!0,points:[{title:"Frequency-Active Power Mode",help:"Indicates whether frequency-power (Freq-Watt) control is currently enabled.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"FrequencyActivePowerModeStatus"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"FrequencyActivePowerModeStatus"}},command_id:"FrequencyActivePowerMode.FrequencyActivePowerModeStatus"},{title:"Open-Loop Response Time",help:"Response time applied to open-loop frequency-power adjustments.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Response Time",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"FreqWattOpenLoopResponseTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OpenLoopResponseTime"}},command_id:"FrequencyActivePowerMode.OpenLoopResponseTime"},{title:"Over-Frequency Droop: Deadband",help:"Over Frequency Droop dbOF â€” Deadband around nominal frequency before active power reduction begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",unit:"Hz",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_dbOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_dbOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_dbOF"},{title:"Over-Frequency Droop: Gain (k)",help:"Over Frequency Droop kOF â€” Slope (gain k) of active power reduction versus frequency rise above nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"OverFrequencyDroop_kOF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"OverFrequencyDroop_kOF"}},command_id:"FrequencyActivePowerMode.OverFrequencyDroop_kOF"},{title:"Under-Frequency Droop: Deadband",help:"Under Frequency Droop dbUF â€” Deadband around nominal frequency before active power increase/response begins.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Deadband (Hz)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_dbUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_dbUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_dbUF"},{title:"Under-Frequency Droop: Gain (k)",help:"Under Frequency Droop kUF â€” Slope (gain k) of active power response versus frequency drop below nominal.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Gain k (slope)",arg:"Frequency",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"UnderFrequencyDroop_kUF"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"FrequencyActivePowerMode",Element:"UnderFrequencyDroop_kUF"}},command_id:"FrequencyActivePowerMode.UnderFrequencyDroop_kUF"}]}]}]},{themeName:"Backup Power",sections:[{sectionTitle:"Backup Power",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Off-Grid Output",help:"Controls whether the inverter provides AC output when operating without the utility grid. Disable to prevent output in off-grid mode.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"OffGridOutput"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"OffGridOutput"}},command_id:"BackupPower.OffGridOutput"},{title:"Backup (EPS) Output Voltage",help:"Selects the AC output voltage when operating in backup (EPS) mode. Match this to your local service voltage for proper compatibility with connected loads.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Voltage (Vac)",arg:"Voltage",dtype:"enum",description:"",longdescription:"",unit:"Vac",meanings:{0:"208",1:"220",2:"230",3:"240",4:"277"},friendly_meanings:{0:"208 V",1:"220 V",2:"230 V",3:"240 V",4:"277 V"},telemetry:{model:"40104",block:"fixed",point:"EPSVoltage"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"BackupPower",Element:"EPSVoltage"}},command_id:"BackupPower.EPSVoltage"}]}]}]},{themeName:"Generator",sections:[{sectionTitle:"Generator",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Port Connection",help:"If using a generator, select which port it's connected to â€” either the GEN port or the Grid Input port (sometimes called microgrid mode). If no generator is installed, leave this setting on GEN port.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Generator connected to",arg:"Port",dtype:"enum",description:"",longdescription:"",meanings:{0:"GeneratorPort",1:"GridPort"},friendly_meanings:{0:"GEN port (also select if not using generator).",1:"Grid port (aka microgrid mode)"},telemetry:{model:"40104",block:"fixed",point:"LinkedPort"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"LinkedPort"}},command_id:"Generator.LinkedPort"},{title:"Battery Charge Current Limit",help:"Sets the maximum DC current the inverter will send to the battery when charging from the generator.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Charge Current (Adc)",arg:"Current",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"BatteryChargeCurrentLimit"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"BatteryChargeCurrentLimit"}},command_id:"Generator.BatteryChargeCurrentLimit"},{title:"Generator Rated Power",help:"Specify the generator's continuous rated output power.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Rated Power (kW)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"GeneratorRatedPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorRatedPower"}},command_id:"Generator.GeneratorRatedPower"},{title:"Generator Cool-Down Time",help:"Sets the time the generator continues running after charging stops to allow for safe cooling.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Cool-Down Time (min)",arg:"Time",dtype:"Number",description:"",longdescription:"",telemetry:{model:"40104",block:"fixed",point:"GeneratorCoolDownTime"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorCoolDownTime"}},command_id:"Generator.GeneratorCoolDownTime"},{title:"Generator Start/Stop SOC",help:"Configures the battery state of charge thresholds for automatic generator control. The generator will start when battery SOC drops to StartSOC and stop when it reaches StopSOC.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"Generator starts when battery drops to this level",longdescription:"",unit:"%",range:{min:0,max:90},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socGenStart"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"Generator stops when battery charges to this level",longdescription:"",unit:"%",range:{min:5,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socGenEnd"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorSOC"}},command_id:"Generator.GeneratorSOC"},{title:"Generator Contactor Status",help:"Indicates the current state of the generator control contactor.",element_type:"attribute",access:"R",readOnly:!0,entries:[{name:"Contactor State",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"OFF",1:"ON"},friendly_meanings:{0:"Closed / On",1:"Open / Off"},telemetry:{model:"40101",block:"fixed",point:"genDryContactState"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GenDryContact"}},command_id:"Generator.GenDryContact"},{title:"Battery Quick Charge with Generator",help:"Start the generator to charge the battery.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Stop quick charge",1:"Start quick charge"},telemetry:{model:"40104",block:"fixed",point:"StartGeneratorExercise"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"StartGeneratorExercise"}},command_id:"Generator.StartGeneratorExercise"},{title:"Generator Boost",help:"Enables dynamic adjustment of generator charging power for faster battery recovery when needed.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:" ",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"GeneratorBoost"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"Generator",Element:"GeneratorBoost"}},command_id:"Generator.GeneratorBoost"}]},{title:"Advanced",visibility:"advanced",collapsedByDefault:!0,points:[{title:"Generator Charge Mode",help:"Selects how the generator charges the battery. When enabled, the generator will charge the battery automatically based on voltage or SOC.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Mode",arg:"GenChg",dtype:"enum",description:"",longdescription:"",meanings:{0:"Based on SOC",1:"Based on Voltage"}}],protocol:{modbus:{address:999,register_type:3,size:1}},command_id:"Modbus.GenChg"},{title:"Generator Charge Start Voltage",help:"Sets the battery voltage at which the generator begins charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge Start Voltage",arg:"GenChgStartVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:194,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgStartVolt"},{title:"Generator Charge End Voltage",help:"Sets the battery voltage at which the generator stops charging. Effective when generator charging by voltage is enabled.",element_type:"custom",access:"RW",readOnly:!1,entries:[{name:"Generator Charge End Voltage",arg:"GenChgEndVolt",dtype:"Number",description:"",longdescription:"",unit:"V",scalefactor:.1}],protocol:{modbus:{address:195,register_type:3,size:1,scale_factor:.1}},command_id:"Modbus.GenChgEndVolt"}]},{title:"Generator Exercise",visibility:"default",collapsedByDefault:!1,points:[{title:"Generator Exercise Schedule",help:"Configure a recurring schedule for generator exercise runs. Select the day of the week and time when the generator should run automatically.",element_type:"custom",access:"INVOKE",readOnly:!1,entries:[{name:"Day of Week",arg:"DayOfWeek",dtype:"enum",description:"",longdescription:"",meanings:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}},{name:"Hour",arg:"Hour",dtype:"Number",description:"",longdescription:"",range:{min:0,max:23}},{name:"Minute",arg:"Minute",dtype:"Number",description:"",longdescription:"",range:{min:0,max:59}}],protocol:{cgi:{MEP:"HybridInverter",Cluster:"Plan",Element:"GeneratorExercise"}},command_id:"CGI.GeneratorExercise",widget:"generator-exercise",showRefresh:!0,showSetButton:!0}]}]}]},{themeName:"AC Coupled PV",sections:[{sectionTitle:"AC Coupled PV",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"AC Coupled PV",help:"Enable this option when connecting a grid-tied solar inverter (AC Coupled PV) to the system. Disable when no AC Coupled PV is present.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"AC Coupled PV Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disable",1:"Enable"},telemetry:{model:"40104",block:"fixed",point:"ACCoupledPV"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCoupledPV"}},command_id:"ACCoupledPV.ACCoupledPV"},{title:"AC Coupled PV Start/Stop SOC",help:"Defines the battery state-of-charge thresholds that control when the inverter allows AC Coupled PV charging to start and stop.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start SOC",arg:"StartSOC",dtype:"Number",description:"AC Coupled PV begins charging when SOC drops to this level",longdescription:"",unit:"%",range:{min:0,max:100},less_than:"StopSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOn"}},{name:"Stop SOC",arg:"StopSOC",dtype:"Number",description:"AC Coupled PV stops charging when SOC reaches this level",longdescription:"",unit:"%",range:{min:0,max:100},greater_than:"StartSOC",telemetry:{model:"40104",block:"fixed",point:"socAcCplOff"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"ACCoupledPV",Element:"ACCouplePVSOC"}},command_id:"ACCoupledPV.ACCouplePVSOC"}]}]}]},{themeName:"Smart Load",sections:[{sectionTitle:"Smart Load",subsections:[{title:null,visibility:"default",collapsedByDefault:!1,points:[{title:"Use Smart Load",help:"Powers non-essential loads only when excess solar or battery energy is available. Enable this to automatically use surplus energy for optional circuits.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Disabled",1:"Enabled"},telemetry:{model:"40104",block:"fixed",point:"SmartLoad"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoad"}},command_id:"LoadShedding.SmartLoad"},{title:"Smart Load On-Grid Behavior",help:"Determines Smart Load behavior while the system is connected to the grid. When enabled, the Smart Load remains powered even if normal control conditions are not met. (AKA: **On-Grid Always On**.)",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"On-Grid Always-On Mode",arg:"Mode",dtype:"enum",description:"",longdescription:"",meanings:{0:"Disable",1:"Enable"},friendly_meanings:{0:"Follow normal rules",1:"Always On When Grid Present"},telemetry:{model:"40104",block:"fixed",point:"OnGridAlwaysOn"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"OnGridAlwaysOn"}},command_id:"LoadShedding.OnGridAlwaysOn"},{title:"Smart Load Start Power",help:"Defines when the Smart Load turns on. The Smart Load port is energized once PV power exceeds this threshold **and** the battery SOC is above the start limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"PV Power Above (W)",arg:"Power",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},telemetry:{model:"40104",block:"fixed",point:"StartPVPower"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"StartPVPower"}},command_id:"LoadShedding.StartPVPower"},{title:"Smart Load SOC Limits",help:"Defines the battery state-of-charge limits that control the Smart Load. The Smart Load turns on when SOC rises above the start limit **and** PV power exceeds the start power limit.  Smart load turns off when SOC falls below the stop limit.",element_type:"attribute",access:"RW",readOnly:!1,entries:[{name:"Start When Battery SOC Is Above (%)",arg:"OnSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},less_than:"OffSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOnSoc"}},{name:"Stop When Battery SOC Is Below (%)",arg:"OffSOC",dtype:"Number",description:"",longdescription:"",range:{min:0,max:100},greater_than:"OnSOC",telemetry:{model:"40104",block:"fixed",point:"SmartLoadOffSoc"}}],protocol:{matter:{MEP:"HybridInverter",Cluster:"LoadShedding",Element:"SmartLoadSOC"}},command_id:"LoadShedding.SmartLoadSOC"}]}]}]}],eg={themes:Zy},Li=[{id:"envy-04237218B0",label:"⭐ Envy - 04237218B0",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237218B0"},modbusSlaveId:1},{id:"envy-04237219C3",label:"Envy - 04237219C3",thingId:{Type:"Inverter",Mn:"fortress",Md:"FP-ENVY-Inverter",SN:"04237219C3"},modbusSlaveId:2}],ng=void 0;function tg(e,n){const[t,l]=V.useState(e),[i,r]=V.useState(n),[a,o]=V.useState(!1),[s,d]=V.useState(null);return V.useEffect(()=>{},[]),{pageRegistry:t,pageLookup:i,isLoading:a,loadError:s,themeFile:ng}}function lg(){const[e,n]=V.useState("");return V.useEffect(()=>{const t=()=>{const l=document.querySelectorAll('[id^="theme-"]');let i="";l.forEach(r=>{const a=r.getBoundingClientRect();a.top<=window.innerHeight*.3&&a.bottom>0&&(i=r.id)}),i&&i!==e&&n(i)};return t(),window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),e}function ig(){const[e,n]=V.useState(""),t=V.useCallback((l,i)=>{var a,o,s,d;if(!i.trim())return{matches:!0,helpTextMatch:!1};const r=i.toLowerCase();if((a=l.title)!=null&&a.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1};if((o=l.help)!=null&&o.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!0};for(const u of l.entries){if((s=u.name)!=null&&s.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1};if(u.friendly_meanings){for(const m of Object.values(u.friendly_meanings))if(m.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1}}if((d=u.description)!=null&&d.toLowerCase().includes(r))return{matches:!0,helpTextMatch:!1}}return{matches:!1,helpTextMatch:!1}},[]);return{searchQuery:e,setSearchQuery:n,pointMatchesSearch:t}}function rg({themes:e,activeSection:n,selectedEquipmentId:t,onEquipmentChange:l,equipmentOptions:i}){return c.jsxs("aside",{className:"w-64 shrink-0 rounded-xl border border-slate-300 bg-white shadow-sm p-4 flex flex-col gap-4 h-screen sticky top-0 overflow-y-auto",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-[11px] text-slate-500 uppercase font-medium mb-1 block",children:"Equipment"}),c.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800",value:t,onChange:r=>l(r.target.value),children:i.map(r=>c.jsx("option",{value:r.id,children:r.label},r.id))})]}),c.jsxs("nav",{className:"text-sm text-slate-800",children:[c.jsx("div",{className:"text-emerald-600 font-semibold mb-2",children:"Navigation"}),c.jsxs("div",{className:"flex flex-col gap-3",children:[e.map((r,a)=>{const o=`theme-${a}`,s=n===o||n.startsWith(`${o}-section`);return c.jsxs("div",{children:[c.jsxs("div",{className:"relative",children:[s&&c.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r"}),c.jsx("button",{className:`font-semibold text-xs uppercase tracking-wide mb-1 px-2 hover:text-emerald-600 transition-colors w-full text-left ${s?"text-emerald-600":"text-slate-900"}`,onClick:()=>{var d;(d=document.getElementById(o))==null||d.scrollIntoView({behavior:"smooth",block:"start"})},children:r.themeName})]}),c.jsx("ul",{className:"pl-2 flex flex-col gap-1 text-slate-700",children:r.sections.map((d,u)=>{const m=`${o}-section-${u}`,p=n===m;return c.jsxs("li",{className:"relative",children:[p&&c.jsx("div",{className:"absolute left-0 top-1 bottom-1 w-1 bg-blue-500 rounded-r"}),c.jsx("button",{className:`px-2 py-1 hover:bg-slate-50 rounded text-xs w-full text-left transition-colors ${p?"text-blue-600 font-medium bg-blue-50":"text-slate-700"}`,onClick:()=>{var g;(g=document.getElementById(m))==null||g.scrollIntoView({behavior:"smooth",block:"start"})},children:d.sectionTitle})]},`${d.sectionTitle}-${u}`)})})]},`${r.themeName}-${a}`)}),!e.length&&c.jsx("div",{className:"text-xs text-slate-500",children:"No themes defined."})]})]})]})}function ag({searchQuery:e,onSearchChange:n,lastUpdatedLabel:t}){return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"text-xs text-slate-500",children:["Last Updated At: ",t]}),c.jsx("div",{className:"flex flex-col md:flex-row md:items-start gap-3 md:gap-4",children:c.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[c.jsx("div",{className:"text-xl font-semibold text-slate-900 leading-tight",children:"Site Configuration"}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("div",{className:"relative flex-1 max-w-md",children:[c.jsx("input",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 pr-8 text-sm text-slate-800",placeholder:"Search…",value:e,onChange:l=>n(l.target.value)}),e&&c.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",onClick:()=>n(""),title:"Clear search",children:"✕"})]}),c.jsxs("button",{className:"text-xs border border-slate-400 rounded px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1",children:[c.jsx("span",{children:"⟳"}),c.jsx("span",{children:"Refresh"})]})]})]})})]})}function og(e){const n={};if(e.widget==="generator-exercise")return e.entries.forEach(i=>{i.dtype,n[i.arg]=""}),n;const t=e.entries.filter(i=>i.dtype==="Number"&&i.range!==void 0),l=t.length>=2;return e.entries.forEach((i,r)=>{var a,o;if(i.value!==void 0){n[i.arg]=i.dtype==="Number"&&i.value!==""?Number(i.value):i.value;return}if(i.dtype==="Number"){const s=i.range;if(!s){n[i.arg]=0;return}if(l){const d=s.max-s.min,u=r/Math.max(t.length-1,1);i.less_than?n[i.arg]=Math.round(s.min+d*.3):i.greater_than?n[i.arg]=Math.round(s.min+d*.7):n[i.arg]=Math.round(s.min+d*u)}else n[i.arg]=s.min;return}if(i.dtype==="enum"){const s=Object.keys(i.meanings??{})[0];if(s){const d=((a=i.friendly_meanings)==null?void 0:a[s])??((o=i.meanings)==null?void 0:o[s])??"";n[i.arg]=d}else n[i.arg]="";return}if(i.dtype&&i.dtype.startsWith("bitfield")){const s={};i.meanings&&Object.keys(i.meanings).forEach(d=>{s[d]=!1}),n[i.arg]=s;return}n[i.arg]=""}),n}function sg(e,n){const t=e.entries.some(i=>{var r;return(r=i.protocol)==null?void 0:r.matter});let l;return t?l=e.entries.filter(i=>{var r;return(r=i.protocol)==null?void 0:r.matter}).map(i=>({MEP:i.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:i.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:i.protocol.matter.Element||e.protocol.matter.Element})):l=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:"Read",data:{Elements:l,thingId:n}}}function dg(e,n,t){const l=e.entries.some(r=>{var a;return(a=r.protocol)==null?void 0:a.matter});let i;return l?i=e.entries.filter(r=>{var a;return(a=r.protocol)==null?void 0:a.matter}).map(r=>({MEP:r.protocol.matter.MEP||e.protocol.matter.MEP,Cluster:r.protocol.matter.Cluster||e.protocol.matter.Cluster,Element:r.protocol.matter.Element||e.protocol.matter.Element,arguments:{[r.arg]:n[r.arg]}})):i=[{MEP:e.protocol.matter.MEP,Cluster:e.protocol.matter.Cluster,Element:e.protocol.matter.Element,arguments:n}],{version:"1.0",timeout:60,requestId:Date.now(),endPoint:"Matter",method:e.element_type==="service"||e.access==="Invoke"?"Invoke":"Write",data:{Elements:i,thingId:t}}}function cg(e,n){const l=e.protocol.modbus.register_type===3?3:4;return{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Read",timeout:5,data:{type:"RTU",uartPort:1,slaveId:n,address:e.protocol.modbus.address,function:l,registerNumber:e.protocol.modbus.size}}}function ug(e,n,t){var a;const l=e.protocol.modbus.size>1?16:6,i=(a=e.entries[0])==null?void 0:a.arg;let r=i?n[i]:0;return e.protocol.modbus&&typeof r=="number"&&(r=Math.round(r)),{version:"1.0",requestId:Date.now(),endPoint:"Modbus",method:"Write",timeout:5,data:{type:"RTU",uartPort:1,slaveId:t,address:e.protocol.modbus.address,function:l,value:r}}}function mg(e,n){return{version:"1.0",requestId:Date.now(),method:"Read",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,Element:e.protocol.cgi.Element,thingId:n}}}function fg(e,n,t){const l=n.DayOfWeek!==""&&n.DayOfWeek!==null&&n.DayOfWeek!==void 0?typeof n.DayOfWeek=="number"?n.DayOfWeek:parseInt(String(n.DayOfWeek),10):0,i=n.Hour!==""&&n.Hour!==null&&n.Hour!==void 0?typeof n.Hour=="number"?n.Hour:parseInt(String(n.Hour),10):0,a=`${n.Minute!==""&&n.Minute!==null&&n.Minute!==void 0?typeof n.Minute=="number"?n.Minute:parseInt(String(n.Minute),10):0} ${i} * * ${l}`;return{version:"1.0",requestId:Date.now(),method:"Invoke",endPoint:"LuaPlugin",timeout:5,data:{Cluster:e.protocol.cgi.Cluster,MEP:e.protocol.cgi.MEP,cronTimer:a,Element:e.protocol.cgi.Element,thingId:t}}}function pg(e,n){const t={...n},l=e.protocol.modbus!==void 0||e.protocol.cgi!==void 0;return e.entries.forEach(i=>{if(i.dtype!=="enum"||!i.meanings)return;const r=t[i.arg];if(r==null||r==="")return;const a=Object.entries(i.meanings).find(([o,s])=>{var u;const d=((u=i.friendly_meanings)==null?void 0:u[o])??s;return r===d||r===s});a&&(t[i.arg]=l?parseInt(a[0],10):a[1])}),t}function yg(e,n){const t={...n};return e.entries.forEach(l=>{if(!l.dtype||!l.dtype.startsWith("bitfield"))return;const i=t[l.arg]||{};let r=0;Object.entries(i).forEach(([a,o])=>{o&&(r|=1<<parseInt(a,10))}),t[l.arg]=r}),t}function gg(e,n){var i,r;const t=n.thingId,l=n.modbusSlaveId;return e.element_type==="custom"&&e.widget==="generator-exercise"&&((i=e.protocol)!=null&&i.cgi)?mg(e,t):(r=e.protocol)!=null&&r.matter?sg(e,t):e.protocol.modbus?cg(e,l):{}}function bg(e,n,t){var a,o;const l=t.thingId,i=t.modbusSlaveId;let r=pg(e,n);return r=yg(e,r),e.element_type==="custom"&&e.widget==="generator-exercise"&&((a=e.protocol)!=null&&a.cgi)?fg(e,r,l):(o=e.protocol)!=null&&o.matter?dg(e,r,l):e.protocol.modbus?ug(e,r,i):{}}function hg(e,n){const[t,l]=V.useState(og(e)),i=V.useCallback((o,s)=>{l(d=>({...d,[o]:s}))},[]),r=V.useCallback(()=>gg(e,n),[e,n]),a=V.useCallback(()=>bg(e,t,n),[e,t,n]);return{formState:t,setFormState:l,handleFieldChange:i,handleRefresh:r,handleSet:a}}function ki(){const[e,n]=V.useState(!1),[t,l]=V.useState(null),i=V.useCallback(o=>{o!==void 0&&l(o),n(!0)},[]),r=V.useCallback(()=>{n(!1)},[]),a=V.useCallback(()=>{n(o=>!o)},[]);return{isOpen:e,data:t,open:i,close:r,toggle:a,setData:l}}const _g=({onClick:e})=>c.jsx("button",{type:"button",onClick:e,className:"text-xs text-slate-500 border border-slate-400 rounded-full w-4 h-4 flex items-center justify-center leading-none hover:bg-slate-100 hover:text-slate-700 hover:border-slate-500 transition-colors cursor-pointer",children:"i"}),xg=()=>c.jsx("span",{className:"text-base leading-none",children:"⟳"}),vg=()=>c.jsx("span",{className:"text-base leading-none",children:"🕐"}),wg=()=>c.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-500 border border-slate-300 font-medium",children:"Read Only"});function Sg({point:e,readOnly:n,helpTextMatch:t=!1,shouldShowHistory:l,shouldShowRefresh:i,shouldShowSetButton:r,setButtonAppearance:a,onHelpClick:o,onHistoryClick:s,onRefreshClick:d,onSetClick:u}){return c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-3",children:[c.jsxs("div",{className:"flex items-start gap-2",children:[c.jsx("div",{className:"text-slate-800 text-sm font-semibold leading-tight",children:e.title}),e.help&&c.jsxs("div",{className:"mt-0.5 relative",children:[c.jsx(_g,{onClick:o}),t&&c.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"})]}),n&&c.jsx(wg,{})]}),c.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l&&c.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"View historical data",onClick:s,children:c.jsx(vg,{})}),i&&c.jsx("button",{className:"flex items-center gap-1 text-slate-600 hover:text-slate-900",title:"Refresh from device",onClick:d,children:c.jsx(xg,{})}),r&&c.jsx("button",{className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${a}`,disabled:n,onClick:u,children:"Set"})]})]})}function Cg({point:e,formState:n,readOnly:t,onChange:l}){const i=e.entries.find(o=>o.arg==="Sec"),r=()=>{const o=n.Hour??0,s=n.Min??0,d=(n.Year??0)+2e3,u=String(n.Mon??1).padStart(2,"0"),m=String(n.Day??1).padStart(2,"0"),p=String(o).padStart(2,"0"),g=String(s).padStart(2,"0");return`${d}-${u}-${m}T${p}:${g}`},a=o=>{const s=new Date(o),d=s.getHours(),u=s.getMinutes();l("Year",s.getFullYear()-2e3),l("Mon",s.getMonth()+1),l("Day",s.getDate()),l("Hour",d),l("Min",u),i&&l("Sec",0)};return c.jsx("div",{className:"flex flex-col gap-2",children:c.jsx("input",{type:"datetime-local",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:r(),onChange:o=>a(o.target.value)})})}const vl="00:00";function hr({label:e,value:n,readOnly:t,onChange:l,onClear:i}){const r=!t&&n!==vl;return c.jsxs("div",{className:"w-[150px] flex-shrink-0 flex flex-col gap-1",children:[c.jsx("label",{className:"text-slate-600 text-xs font-medium",children:e}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 pr-8 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:t,value:n,onChange:a=>l(a.target.value)}),r&&c.jsx("button",{type:"button",className:"absolute inset-y-0 right-1 flex items-center px-1 text-slate-400 hover:text-slate-700",onClick:i,"aria-label":`Clear ${e.toLowerCase()}`,children:"✕"})]})]})}function Em({point:e,formState:n,readOnly:t,onChange:l}){const i=e.entries.find(b=>b.arg.includes("StartHour")||b.arg.includes("Start_hour")||b.arg.includes("StartTime_h")),r=e.entries.find(b=>b.arg.includes("StartMin")||b.arg.includes("Start_minute")||b.arg.includes("StartTime_m")),a=e.entries.find(b=>b.arg.includes("EndHour")||b.arg.includes("End_hour")||b.arg.includes("EndTime_h")),o=e.entries.find(b=>b.arg.includes("EndMin")||b.arg.includes("End_minute")||b.arg.includes("EndTime_m")),s=()=>{if(i&&r){const b=String(n[i.arg]??0).padStart(2,"0"),_=String(n[r.arg]??0).padStart(2,"0");return`${b}:${_}`}return vl},d=()=>{if(a&&o){const b=String(n[a.arg]??0).padStart(2,"0"),_=String(n[o.arg]??0).padStart(2,"0");return`${b}:${_}`}return vl},u=b=>{const[_,y]=b.split(":"),f=parseInt(_,10),h=parseInt(y,10);i&&r&&(l(i.arg,f),l(r.arg,h))},m=b=>{const[_,y]=b.split(":"),f=parseInt(_,10),h=parseInt(y,10);a&&o&&(l(a.arg,f),l(o.arg,h))},p=()=>{t||(u(vl),m(vl))},g=s(),x=d();return c.jsxs("div",{className:"flex items-end gap-4",children:[c.jsx(hr,{label:"Start Time",value:g,readOnly:t,onChange:u,onClear:p}),c.jsx(hr,{label:"End Time",value:x,readOnly:t,onChange:m,onClear:p})]})}function Lg({point:e,formState:n,readOnly:t,onChange:l}){const i=new Map;e.entries.forEach(d=>{const u=d.arg.match(/^(StartTime|EndTime)(\d+)_([hm])$/i);if(!u)return;const[,m,p,g]=u,x=parseInt(p,10);i.has(x)||i.set(x,{id:x});const b=i.get(x),_=g.toLowerCase();m.toLowerCase()==="starttime"?_==="h"?b.startHourArg=d.arg:b.startMinArg=d.arg:_==="h"?b.endHourArg=d.arg:b.endMinArg=d.arg});const r=Array.from(i.values()).sort((d,u)=>d.id-u.id);if(r.length===0)return c.jsx(Em,{point:e,formState:n,readOnly:t,onChange:l});const a=(d,u)=>{const m=d!==void 0?n[d]:0,p=u!==void 0?n[u]:0,g=typeof m=="number"?m:parseInt(m??0,10)||0,x=typeof p=="number"?p:parseInt(p??0,10)||0;return`${String(g).padStart(2,"0")}:${String(x).padStart(2,"0")}`},o=(d,u,m)=>{const[p,g]=m.split(":"),x=parseInt(p,10),b=parseInt(g,10);u==="start"?(d.startHourArg&&l(d.startHourArg,x),d.startMinArg&&l(d.startMinArg,b)):(d.endHourArg&&l(d.endHourArg,x),d.endMinArg&&l(d.endMinArg,b))},s=d=>{t||(d.startHourArg&&l(d.startHourArg,0),d.startMinArg&&l(d.startMinArg,0),d.endHourArg&&l(d.endHourArg,0),d.endMinArg&&l(d.endMinArg,0))};return c.jsx("div",{className:"flex flex-col gap-4",children:r.map(d=>{const u=a(d.startHourArg,d.startMinArg),m=a(d.endHourArg,d.endMinArg),p=()=>s(d);return c.jsxs("div",{className:"flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3",children:[c.jsxs("div",{className:"text-xs font-semibold uppercase text-slate-600",children:["Grid Charge Window ",d.id]}),c.jsxs("div",{className:"flex items-end gap-4",children:[c.jsx(hr,{label:"Start Time",value:u,readOnly:t,onChange:g=>o(d,"start",g),onClear:p}),c.jsx(hr,{label:"End Time",value:m,readOnly:t,onChange:g=>o(d,"end",g),onClear:p})]})]},d.id)})})}function kg({formState:e,readOnly:n,onChange:t}){const l=e.DayOfWeek!==""?e.DayOfWeek:null,i=e.Hour!==""?e.Hour:null,r=e.Minute!==""?e.Minute:null,a=()=>i===null||r===null?"":`${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`,o=u=>{if(!u){t("Hour",""),t("Minute","");return}const[m,p]=u.split(":");t("Hour",parseInt(m,10)),t("Minute",parseInt(p,10))},s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let d="No schedule configured";return l!==null&&i!==null&&r!==null&&(d=`Every ${s[l]} at ${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`),c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Day of Week"}),c.jsxs("select",{className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:l!==null?l:"",onChange:u=>t("DayOfWeek",u.target.value===""?"":Number(u.target.value)),children:[c.jsx("option",{value:"",children:"Select day..."}),s.map((u,m)=>c.jsx("option",{value:m,children:u},m))]})]}),c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsx("label",{className:"text-slate-600 text-xs font-medium",children:"Time"}),c.jsx("input",{type:"time",className:"w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 disabled:bg-slate-100",disabled:n,value:a(),onChange:u=>o(u.target.value)})]})]}),c.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-3",children:[c.jsx("div",{className:"text-xs text-slate-600 font-medium mb-1",children:"Schedule Preview"}),c.jsx("div",{className:"text-sm text-slate-800",children:d})]})]})}function Pg({entries:e,formState:n,readOnly:t,onChange:l}){var b;const[i,r]=V.useState(null),a=V.useRef(null),o=[{bg:"bg-emerald-500",text:"text-emerald-600",border:"border-emerald-500"},{bg:"bg-rose-500",text:"text-rose-600",border:"border-rose-500"},{bg:"bg-blue-500",text:"text-blue-600",border:"border-blue-500"},{bg:"bg-purple-500",text:"text-purple-600",border:"border-purple-500"},{bg:"bg-orange-500",text:"text-orange-600",border:"border-orange-500"},{bg:"bg-pink-500",text:"text-pink-600",border:"border-pink-500"},{bg:"bg-indigo-500",text:"text-indigo-600",border:"border-indigo-500"},{bg:"bg-teal-500",text:"text-teal-600",border:"border-teal-500"},{bg:"bg-cyan-500",text:"text-cyan-600",border:"border-cyan-500"},{bg:"bg-amber-500",text:"text-amber-600",border:"border-amber-500"},{bg:"bg-lime-500",text:"text-lime-600",border:"border-lime-500"},{bg:"bg-fuchsia-500",text:"text-fuchsia-600",border:"border-fuchsia-500"}],s=(b=e[0])==null?void 0:b.range;if(!s)return null;const{min:d,max:u}=s,m=_=>{let y=d,f=u;if(_.greater_than){const h=n[_.greater_than];typeof h=="number"&&(y=Math.max(y,h+1))}if(_.less_than){const h=n[_.less_than];typeof h=="number"&&(f=Math.min(f,h-1))}return{min:y,max:f}},p=(_,y)=>{const f=m(_),h=Math.max(f.min,Math.min(f.max,y));l(_.arg,h)},g=(_,y)=>{if(t)return;y.preventDefault(),r(_);const f=a.current;if(!f)return;const h=w=>{const C=f.getBoundingClientRect(),L=w.clientX-C.left,S=Math.max(0,Math.min(100,L/C.width*100)),N=Math.round(d+S/100*(u-d));p(e[_],N)},v=()=>{r(null),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",v)},x=e.length>=8?"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4":"grid-cols-2";return c.jsxs("div",{className:"flex flex-col gap-3 text-sm",children:[c.jsx("div",{className:`grid ${x} gap-3`,children:e.map((_,y)=>{const f=o[y%o.length],h=n[_.arg]??d,v=m(_);return c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsxs("div",{className:`text-[11px] uppercase font-semibold flex items-center gap-1.5 ${f.text}`,children:[c.jsx("span",{className:`w-2 h-2 rounded-full ${f.bg}`}),c.jsx("span",{children:_.name??""}),_.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase ml-auto",children:_.unit})]}),c.jsx("input",{type:"number",className:`w-full rounded border ${f.border} bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500`,disabled:t,value:h,min:v.min,max:v.max,onChange:w=>{const C=w.target.value===""?v.min:Number(w.target.value);p(_,C)}})]},_.arg)})}),c.jsxs("div",{className:"relative w-full pt-2 pb-3",children:[c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-2",children:[c.jsx("span",{children:d}),c.jsx("span",{children:u})]}),c.jsxs("div",{className:"relative overflow-hidden",ref:a,children:[c.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 bg-slate-200 rounded-full -translate-y-1/2"}),c.jsx("div",{className:"relative overflow-hidden",style:{height:"24px"},children:e.map((_,y)=>{const f=o[y%o.length],h=n[_.arg]??d,v=(h-d)/(u-d)*100,w=e.length-y,C=i===y?100:w;return c.jsx("div",{children:c.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 ${t?"cursor-not-allowed":"cursor-grab active:cursor-grabbing"}`,style:{left:`${v}%`,transform:"translate(-50%, -50%)",width:"40px",height:"24px",zIndex:C},onMouseDown:L=>g(y,L),children:c.jsx("div",{className:`absolute top-1/2 left-1/2 w-5 h-5 rounded-full ${f.bg} border-2 border-white shadow-lg pointer-events-none transition-shadow`,style:{transform:"translate(-50%, -50%)",zIndex:1,boxShadow:i===y?"0 0 0 3px rgba(0,0,0,0.1)":void 0},title:_.name?`${_.name}: ${h}`:String(h)})})},_.arg)})})]})]})]})}function Eg({entry:e,value:n,onChange:t,readOnly:l,point:i}){var x,b,_,y,f,h,v;const r="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",a=e.dtype==="enum"||e.dtype&&e.dtype.startsWith("bitfield")?"col-span-full flex flex-col gap-1 text-sm":"flex flex-col gap-1 text-sm";if(e.dtype&&e.dtype.startsWith("bitfield")&&e.meanings){const w=n||{},C=L=>{const S={...w,[L]:!w[L]};t(S)};return c.jsxs("div",{className:a,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name??""}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsx("div",{className:"flex flex-col gap-2 py-1",children:Object.entries(e.meanings).map(([L,S])=>c.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{type:"checkbox",className:"w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:w[L]||!1,onChange:()=>C(L)}),c.jsx("span",{className:"text-sm text-slate-800",children:S})]},L))}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}if(e.dtype==="enum"&&e.meanings){const w=Object.entries(e.meanings).map(([S,N])=>{var Q;const I=((Q=e.friendly_meanings)==null?void 0:Q[S])??N;return{wireVal:S,friendly:I}});if(w.length<=3)return c.jsxs("div",{className:a,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsx("div",{className:"flex flex-col gap-2 py-1",children:w.map(S=>c.jsxs("label",{className:`flex items-center gap-2 cursor-pointer ${l?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{type:"radio",name:e.arg,className:"w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500 disabled:cursor-not-allowed",disabled:l,checked:n===S.friendly,onChange:()=>t(S.friendly)}),c.jsx("span",{className:"text-sm text-slate-800",children:S.friendly})]},S.wireVal))}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]});const C=w.reduce((S,N)=>N.friendly.length>S.length?N.friendly:S,""),L=Math.min(Math.max(C.length*8.5+50,220),480);return c.jsxs("div",{className:a,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name??""}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsx("select",{className:"w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500",style:{minWidth:`${L}px`,maxWidth:"100%"},disabled:l,value:n??"",onChange:S=>t(S.target.value),children:w.map(S=>c.jsx("option",{value:S.friendly,children:S.friendly},S.wireVal))}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug whitespace-pre-wrap",children:e.longdescription})]})}const o=e.dtype==="Number",s=o&&e.range!==void 0,d=((x=i==null?void 0:i.protocol)==null?void 0:x.modbus)!==void 0,u=(_=(b=i==null?void 0:i.protocol)==null?void 0:b.modbus)==null?void 0:_.scale_factor,m=d&&u!==void 0&&o,p=m&&n!==null&&n!==void 0&&n!==""?Number(n)*u:n,g=w=>{if(o){const C=w===""?"":Number(w);if(m&&C!==""){const L=Math.round(C/u);t(L)}else t(C)}else t(w)};return c.jsxs("div",{className:a,children:[c.jsxs("div",{className:"text-slate-600 text-[11px] uppercase font-medium flex items-center justify-between",children:[c.jsx("span",{children:e.name}),e.unit&&c.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:e.unit})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("input",{type:o?"number":"text",className:s?"w-20 rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-800 disabled:bg-slate-100 disabled:text-slate-500":r,disabled:l,value:p??"",min:(y=e.range)==null?void 0:y.min,max:(f=e.range)==null?void 0:f.max,onChange:w=>g(w.target.value)}),s&&c.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[c.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.min}),c.jsx("input",{type:"range",className:"flex-1",disabled:l,value:p??e.range.min,min:(h=e.range)==null?void 0:h.min,max:(v=e.range)==null?void 0:v.max,onChange:w=>{const C=Number(w.target.value);if(m){const L=Math.round(C/u);t(L)}else t(C)}}),c.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:e.range.max})]})]}),e.description&&c.jsx("div",{className:"text-xs text-slate-500 leading-snug",children:e.description}),e.longdescription&&c.jsx("div",{className:"text-xs text-slate-400 leading-snug",children:e.longdescription})]})}function Ng({point:e,formState:n,readOnly:t,isInvoke:l,setButtonAppearance:i,onChange:r,onInvokeClick:a}){const o=e.entries.filter(d=>d.dtype==="Number"&&d.range!==void 0),s=!e.widget&&o.length>=2&&o.length===e.entries.length;return c.jsxs(c.Fragment,{children:[e.widget==="datetime"?c.jsx(Cg,{point:e,formState:n,readOnly:t,onChange:r}):e.widget==="timerange-multi"?c.jsx(Lg,{point:e,formState:n,readOnly:t,onChange:r}):e.widget==="timerange"?c.jsx(Em,{point:e,formState:n,readOnly:t,onChange:r}):e.widget==="generator-exercise"?c.jsx(kg,{formState:n,readOnly:t,onChange:r}):s?c.jsx(Pg,{entries:o,formState:n,readOnly:t,onChange:r}):c.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4",children:e.entries.map(d=>c.jsx(Eg,{entry:d,value:n[d.arg],readOnly:t,point:e,onChange:u=>r(d.arg,u)},d.arg))}),l&&e.widget!=="generator-exercise"&&e.showInvokeButton!==!1&&c.jsx("div",{className:"mt-4 flex items-center gap-2",children:c.jsx("button",{type:"button",className:`border text-xs font-medium rounded px-2 py-1 leading-none transition ${i}`,disabled:t,onClick:a,children:e.invokeButtonText||"Invoke"})})]})}const Ig={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl"};function As({isOpen:e,onClose:n,title:t,icon:l,children:i,showFooter:r=!0,footerContent:a,maxWidth:o="lg"}){if(V.useEffect(()=>{const d=u=>{u.key==="Escape"&&e&&n()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[e,n]),!e)return null;const s=c.jsx("div",{className:"flex justify-end p-4 border-t border-slate-200 bg-slate-50",children:c.jsx("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",onClick:n,children:"Close"})});return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4",onClick:n,children:c.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${Ig[o]} border border-slate-300 overflow-hidden`,onClick:d=>d.stopPropagation(),children:[c.jsxs("div",{className:"flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[l,c.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:t})]}),c.jsx("button",{type:"button",className:"text-slate-400 hover:text-slate-600 transition-colors text-xl leading-none -mt-1",onClick:n,children:"✕"})]}),c.jsx("div",{className:"p-5 max-h-[60vh] overflow-y-auto",children:i}),r&&(a||s)]})})}function Ag({title:e,content:n,isOpen:t,onClose:l}){const i=a=>a.split(/(\*\*[^*]+\*\*)/g).map((s,d)=>s.startsWith("**")&&s.endsWith("**")?c.jsx("strong",{className:"font-semibold text-slate-900",children:s.slice(2,-2)},d):c.jsx("span",{children:s},d)),r=c.jsx("div",{className:"text-slate-500 border border-slate-400 rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs font-medium",children:"i"});return c.jsx(As,{isOpen:t,onClose:l,title:e,icon:r,children:c.jsx("div",{className:"text-sm text-slate-700 leading-relaxed whitespace-pre-wrap",children:i(n)})})}function Vg({point:e,isOpen:n,onClose:t}){const l=[];e.entries.forEach(r=>{var a,o;if((a=r.telemetry)!=null&&a.model&&((o=r.telemetry)!=null&&o.point)){const s=`${r.telemetry.model}.${r.telemetry.point}`;l.includes(s)||l.push(s)}});const i=c.jsx("span",{className:"text-slate-500 text-xl",children:"🕐"});return c.jsxs(As,{isOpen:n,onClose:t,title:"Historical Data",icon:i,children:[c.jsx("div",{className:"text-sm text-slate-700 leading-relaxed mb-4",children:"In the real UI, this button would link you to the historical data page showing the last 24 hours of data for the following telemetry points:"}),l.length>0?c.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4",children:[c.jsx("div",{className:"text-xs font-semibold text-slate-600 uppercase mb-2",children:"Telemetry Points"}),c.jsx("div",{className:"flex flex-col gap-2",children:l.map((r,a)=>c.jsx("div",{className:"font-mono text-sm text-emerald-600 bg-white border border-emerald-200 rounded px-3 py-2",children:r},a))})]}):c.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800",children:"No telemetry points configured for this setting."})]})}function tc({isOpen:e,onClose:n,title:t,payload:l,type:i="set"}){const r=i==="refresh"?c.jsx("span",{children:"⟳"}):c.jsx("span",{children:"📤"});return c.jsxs(As,{isOpen:e,onClose:n,title:t,icon:r,maxWidth:"xl",children:[c.jsx("div",{className:"text-sm text-slate-700 mb-3",children:"This is a preview of the command that would be sent:"}),c.jsx("pre",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs font-mono overflow-x-auto text-slate-800",children:JSON.stringify(l,null,2)})]})}function lc({point:e,helpTextMatch:n=!1,equipment:t}){const{formState:l,handleFieldChange:i,handleRefresh:r,handleSet:a}=hg(e,t),o=ki(),s=ki(),d=ki(),u=ki(),m=()=>o.open(),p=()=>s.open(),g=()=>{const L=r();u.open(L)},x=()=>{const L=a();d.open(L)},_=(typeof e.access=="string"?e.access.trim().toLowerCase():"")==="invoke"||e.element_type==="service",y=e.readOnly||e.access==="R",f=y?"border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed":"border-slate-400 bg-white text-slate-700 hover:bg-slate-50",h=e.entries.some(L=>{var S,N;return((S=L.telemetry)==null?void 0:S.model)&&((N=L.telemetry)==null?void 0:N.point)}),v=e.showHistory!==void 0?e.showHistory:h&&!_,w=_?e.showRefresh===!0:e.showRefresh!==!1,C=e.showSetButton!==void 0?e.showSetButton:!_;return c.jsxs("div",{className:"rounded-xl border border-slate-300 bg-white p-4 shadow-sm",children:[c.jsx(Sg,{point:e,readOnly:y,helpTextMatch:n,shouldShowHistory:v,shouldShowRefresh:w,shouldShowSetButton:C,setButtonAppearance:f,onHelpClick:m,onHistoryClick:p,onRefreshClick:g,onSetClick:x}),c.jsx(Ng,{point:e,formState:l,readOnly:y,isInvoke:_,setButtonAppearance:f,onChange:i,onInvokeClick:x}),c.jsx(Ag,{title:e.title,content:e.help||"",isOpen:o.isOpen,onClose:o.close}),c.jsx(Vg,{point:e,isOpen:s.isOpen,onClose:s.close}),c.jsx(tc,{title:"Command Preview",payload:d.data,isOpen:d.isOpen,onClose:d.close}),c.jsx(tc,{title:"Read Command Preview",payload:u.data,isOpen:u.isOpen,onClose:u.close,type:"refresh"})]})}function Tg({subsection:e,searchQuery:n,pointMatchesSearch:t,equipment:l}){const[i,r]=V.useState(!e.collapsedByDefault),a=e.points.map(s=>({point:s,searchResult:t(s,n)})).filter(({searchResult:s})=>s.matches);if(a.length===0)return null;const o=n.trim()?!0:i;return e.collapsedByDefault?c.jsxs("div",{className:"border border-slate-300 bg-white rounded-xl shadow-sm mb-8",children:[c.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-2 text-left",onClick:()=>r(s=>!s),children:[c.jsx("span",{className:"text-slate-800 text-sm font-semibold uppercase tracking-wide",children:e.title||"Advanced"}),c.jsx("span",{className:"text-slate-500 text-xs",children:o?"▾":"▸"})]}),o&&c.jsx("div",{className:"p-4 border-t border-slate-200 grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:a.map(({point:s,searchResult:d})=>c.jsx(lc,{point:s,helpTextMatch:d.helpTextMatch,equipment:l},s.command_id))})]}):c.jsxs("div",{className:"mb-6",children:[e.title&&c.jsx("div",{className:"text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2",children:c.jsx("span",{children:e.title})}),c.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:a.map(({point:s,searchResult:d})=>c.jsx(lc,{point:s,helpTextMatch:d.helpTextMatch,equipment:l},s.command_id))})]})}function Dg({section:e,sectionId:n,searchQuery:t,pointMatchesSearch:l,equipment:i}){const[r,a]=V.useState(!0),o=e.subsections.some(s=>s.points.some(d=>l(d,t).matches));return t.trim()&&!o?null:c.jsxs("section",{className:"bg-white/0",id:n,children:[c.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-lg font-semibold mb-3 hover:text-emerald-600 transition-colors",onClick:()=>a(!r),children:[c.jsx("span",{children:e.sectionTitle}),c.jsx("span",{className:"text-slate-500 text-sm",children:r?"▾":"▸"})]}),r&&c.jsx("div",{children:e.subsections.map((s,d)=>c.jsx(Tg,{subsection:s,searchQuery:t,pointMatchesSearch:l,equipment:i},d))})]})}function Gg({theme:e,themeId:n,searchQuery:t,pointMatchesSearch:l,equipment:i}){const[r,a]=V.useState(!0),o=e.sections.some(s=>s.subsections.some(d=>d.points.some(u=>l(u,t).matches)));return t.trim()&&!o?null:c.jsxs("div",{className:"bg-white/0",id:n,children:[c.jsxs("button",{className:"w-full flex items-center justify-between text-slate-900 text-2xl font-bold mb-6 border-b border-slate-300 pb-3 hover:text-emerald-600 transition-colors",onClick:()=>a(!r),children:[c.jsx("span",{children:e.themeName}),c.jsx("span",{className:"text-slate-500 text-lg",children:r?"▾":"▸"})]}),r&&c.jsx("div",{className:"flex flex-col gap-10",children:e.sections.map((s,d)=>{const u=`${n}-section-${d}`;return c.jsx(Dg,{section:s,sectionId:u,searchQuery:t,pointMatchesSearch:l,equipment:i},`${s.sectionTitle}-${d}`)})})]})}function Mg({themes:e,searchQuery:n,pointMatchesSearch:t,equipment:l}){return c.jsxs("div",{className:"flex flex-col gap-16",children:[e.map((i,r)=>{const a=`theme-${r}`;return c.jsx(Gg,{theme:i,themeId:a,searchQuery:n,pointMatchesSearch:t,equipment:l},`${i.themeName}-${r}`)}),!e.length&&c.jsx("div",{className:"text-sm text-slate-600 border border-dashed border-slate-300 rounded-lg p-6 bg-white/60",children:"This page does not define any themes yet."})]})}function Fg(e){var t,l,i,r,a,o,s;if(!e)return;if(!Array.isArray(e.themes)){console.error("[SchemaTest] page.themes is missing or not an array");return}e.themes.forEach((d,u)=>{if(!Array.isArray(d.sections)){console.error(`[SchemaTest] theme ${u} (${d.themeName}) has no sections array`);return}d.sections.forEach((m,p)=>{Array.isArray(m.subsections)||console.error(`[SchemaTest] theme ${u} / section ${p} (${m.sectionTitle}) has no subsections array`)}),d.sections.forEach((m,p)=>{var g;(g=m.subsections)==null||g.forEach((x,b)=>{if(!Array.isArray(x.points)){console.error(`[SchemaTest] theme ${u} / section ${p} / subsection ${b} (${x.title}) has no points array`);return}x.points.forEach((_,y)=>{if(!Array.isArray(_.entries)){console.error(`[SchemaTest] theme ${u} / section ${p} / subsection ${b} / point ${y} (${_.title}) has no entries array`);return}_.entries.forEach((f,h)=>{const v=["enum","String","Number"],w=f.dtype&&typeof f.dtype=="string"&&f.dtype.startsWith("bitfield");!v.includes(f.dtype)&&!w&&console.error(`[SchemaTest] entry ${f.name??h} in point ${_.title} has unsupported dtype ${f.dtype}`)})})})})});const n=((s=(o=(a=(r=(i=(l=(t=e.themes)==null?void 0:t[0])==null?void 0:l.sections)==null?void 0:i[0])==null?void 0:r.subsections)==null?void 0:a[0])==null?void 0:o.points)==null?void 0:s[0])||null;n&&(n.command_id||console.error("[SchemaTest] firstPoint.command_id missing"),n.protocol||console.error("[SchemaTest] firstPoint.protocol missing"))}const Og=Object.assign({"./themes/demo_rebuilt.json":eg}),Nm=Object.entries(Og).map(([e,n])=>{var r;const t=e.split("/").pop()??e,l=t.replace(/\.json$/i,""),i=((r=n.pageName)==null?void 0:r.trim())||l;return{id:l,label:i,filename:t,data:n}}).sort((e,n)=>e.label.localeCompare(n.label,void 0,{sensitivity:"base"})),Bg=Nm.reduce((e,n)=>(e[n.id]=n.data,e),{});function Rg(){var f,h;const{pageRegistry:e,pageLookup:n,isLoading:t,loadError:l,themeFile:i}=tg(Nm,Bg),r=((f=e[0])==null?void 0:f.id)??"",[a]=V.useState(r),[o,s]=V.useState(((h=Li[0])==null?void 0:h.id)??""),d=lg(),{searchQuery:u,setSearchQuery:m,pointMatchesSearch:p}=ig(),g=V.useMemo(()=>new Date(Date.now()-15*60*1e3),[]),x=V.useMemo(()=>g.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),[g]),b=a&&n[a]||r&&n[r]||null,_=V.useMemo(()=>Li.find(v=>v.id===o)||Li[0],[o]);if(V.useEffect(()=>{Fg(b)},[b]),t)return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsx("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:"Loading theme file..."})});if(l)return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-red-300 rounded-xl shadow-sm p-6 text-sm text-red-700",children:[c.jsx("div",{className:"font-semibold mb-2",children:"Error loading theme file"}),c.jsx("div",{children:l}),c.jsxs("div",{className:"mt-4 text-xs text-slate-500",children:["File path: ",c.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5",children:i})]})]})});if(!b)return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsxs("div",{className:"max-w-xl mx-auto bg-white border border-slate-300 rounded-xl shadow-sm p-6 text-sm text-slate-700",children:["No pages found in ",c.jsx("code",{className:"rounded bg-slate-100 px-1 py-0.5 text-xs",children:"src/themes"}),". Add a JSON page file to get started."]})});const y=b.themes??[];return c.jsx("div",{className:"h-full bg-slate-100 text-slate-900 p-4 md:p-6",children:c.jsxs("div",{className:"max-w-[1400px] mx-auto flex gap-4",children:[c.jsx(rg,{themes:y,activeSection:d,selectedEquipmentId:o,onEquipmentChange:s,equipmentOptions:Li}),c.jsxs("main",{className:"flex-1 flex flex-col gap-6",children:[c.jsxs("div",{className:"text-xs text-slate-500",children:["Last Updated At: ",x]}),c.jsx(ag,{searchQuery:u,onSearchChange:m,lastUpdatedLabel:x}),c.jsx(Mg,{themes:y,searchQuery:u,pointMatchesSearch:p,equipment:_})]})]})})}const Vs=Symbol.for("yaml.alias"),No=Symbol.for("yaml.document"),Fn=Symbol.for("yaml.map"),Im=Symbol.for("yaml.pair"),sn=Symbol.for("yaml.scalar"),tl=Symbol.for("yaml.seq"),He=Symbol.for("yaml.node.type"),Hn=e=>!!e&&typeof e=="object"&&e[He]===Vs,ut=e=>!!e&&typeof e=="object"&&e[He]===No,ll=e=>!!e&&typeof e=="object"&&e[He]===Fn,K=e=>!!e&&typeof e=="object"&&e[He]===Im,j=e=>!!e&&typeof e=="object"&&e[He]===sn,il=e=>!!e&&typeof e=="object"&&e[He]===tl;function J(e){if(e&&typeof e=="object")switch(e[He]){case Fn:case tl:return!0}return!1}function Z(e){if(e&&typeof e=="object")switch(e[He]){case Vs:case Fn:case sn:case tl:return!0}return!1}const Am=e=>(j(e)||J(e))&&!!e.anchor,Ce=Symbol("break visit"),Vm=Symbol("skip children"),on=Symbol("remove node");function mt(e,n){const t=Tm(n);ut(e)?It(null,e.contents,t,Object.freeze([e]))===on&&(e.contents=null):It(null,e,t,Object.freeze([]))}mt.BREAK=Ce;mt.SKIP=Vm;mt.REMOVE=on;function It(e,n,t,l){const i=Dm(e,n,t,l);if(Z(i)||K(i))return Gm(e,l,i),It(e,i,t,l);if(typeof i!="symbol"){if(J(n)){l=Object.freeze(l.concat(n));for(let r=0;r<n.items.length;++r){const a=It(r,n.items[r],t,l);if(typeof a=="number")r=a-1;else{if(a===Ce)return Ce;a===on&&(n.items.splice(r,1),r-=1)}}}else if(K(n)){l=Object.freeze(l.concat(n));const r=It("key",n.key,t,l);if(r===Ce)return Ce;r===on&&(n.key=null);const a=It("value",n.value,t,l);if(a===Ce)return Ce;a===on&&(n.value=null)}}return i}async function Br(e,n){const t=Tm(n);ut(e)?await At(null,e.contents,t,Object.freeze([e]))===on&&(e.contents=null):await At(null,e,t,Object.freeze([]))}Br.BREAK=Ce;Br.SKIP=Vm;Br.REMOVE=on;async function At(e,n,t,l){const i=await Dm(e,n,t,l);if(Z(i)||K(i))return Gm(e,l,i),At(e,i,t,l);if(typeof i!="symbol"){if(J(n)){l=Object.freeze(l.concat(n));for(let r=0;r<n.items.length;++r){const a=await At(r,n.items[r],t,l);if(typeof a=="number")r=a-1;else{if(a===Ce)return Ce;a===on&&(n.items.splice(r,1),r-=1)}}}else if(K(n)){l=Object.freeze(l.concat(n));const r=await At("key",n.key,t,l);if(r===Ce)return Ce;r===on&&(n.key=null);const a=await At("value",n.value,t,l);if(a===Ce)return Ce;a===on&&(n.value=null)}}return i}function Tm(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function Dm(e,n,t,l){var i,r,a,o,s;if(typeof t=="function")return t(e,n,l);if(ll(n))return(i=t.Map)==null?void 0:i.call(t,e,n,l);if(il(n))return(r=t.Seq)==null?void 0:r.call(t,e,n,l);if(K(n))return(a=t.Pair)==null?void 0:a.call(t,e,n,l);if(j(n))return(o=t.Scalar)==null?void 0:o.call(t,e,n,l);if(Hn(n))return(s=t.Alias)==null?void 0:s.call(t,e,n,l)}function Gm(e,n,t){const l=n[n.length-1];if(J(l))l.items[e]=t;else if(K(l))e==="key"?l.key=t:l.value=t;else if(ut(l))l.contents=t;else{const i=Hn(l)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const jg={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Ug=e=>e.replace(/[!,[\]{}]/g,n=>jg[n]);class _e{constructor(n,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},_e.defaultYaml,n),this.tags=Object.assign({},_e.defaultTags,t)}clone(){const n=new _e(this.yaml,this.tags);return n.docStart=this.docStart,n}atDocument(){const n=new _e(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:_e.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},_e.defaultTags);break}return n}add(n,t){this.atNextDocument&&(this.yaml={explicit:_e.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},_e.defaultTags),this.atNextDocument=!1);const l=n.trim().split(/[ \t]+/),i=l.shift();switch(i){case"%TAG":{if(l.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),l.length<2))return!1;const[r,a]=l;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,l.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=l;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(n,t){if(n==="!")return"!";if(n[0]!=="!")return t(`Not a valid tag: ${n}`),null;if(n[1]==="<"){const a=n.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${n} is invalid.`),null):(n[n.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,l,i]=n.match(/^(.*!)([^!]*)$/s);i||t(`The ${n} tag has no suffix`);const r=this.tags[l];if(r)try{return r+decodeURIComponent(i)}catch(a){return t(String(a)),null}return l==="!"?n:(t(`Could not resolve tag: ${n}`),null)}tagString(n){for(const[t,l]of Object.entries(this.tags))if(n.startsWith(l))return t+Ug(n.substring(l.length));return n[0]==="!"?n:`!<${n}>`}toString(n){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],l=Object.entries(this.tags);let i;if(n&&l.length>0&&Z(n.contents)){const r={};mt(n.contents,(a,o)=>{Z(o)&&o.tag&&(r[o.tag]=!0)}),i=Object.keys(r)}else i=[];for(const[r,a]of l)r==="!!"&&a==="tag:yaml.org,2002:"||(!n||i.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}_e.defaultYaml={explicit:!1,version:"1.2"};_e.defaultTags={"!!":"tag:yaml.org,2002:"};function Mm(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(t)}return!0}function Fm(e){const n=new Set;return mt(e,{Value(t,l){l.anchor&&n.add(l.anchor)}}),n}function Om(e,n){for(let t=1;;++t){const l=`${e}${t}`;if(!n.has(l))return l}}function Wg(e,n){const t=[],l=new Map;let i=null;return{onAnchor:r=>{t.push(r),i??(i=Fm(e));const a=Om(n,i);return i.add(a),a},setAnchors:()=>{for(const r of t){const a=l.get(r);if(typeof a=="object"&&a.anchor&&(j(a.node)||J(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:l}}function Vt(e,n,t,l){if(l&&typeof l=="object")if(Array.isArray(l))for(let i=0,r=l.length;i<r;++i){const a=l[i],o=Vt(e,l,String(i),a);o===void 0?delete l[i]:o!==a&&(l[i]=o)}else if(l instanceof Map)for(const i of Array.from(l.keys())){const r=l.get(i),a=Vt(e,l,i,r);a===void 0?l.delete(i):a!==r&&l.set(i,a)}else if(l instanceof Set)for(const i of Array.from(l)){const r=Vt(e,l,i,i);r===void 0?l.delete(i):r!==i&&(l.delete(i),l.add(r))}else for(const[i,r]of Object.entries(l)){const a=Vt(e,l,i,r);a===void 0?delete l[i]:a!==r&&(l[i]=a)}return e.call(n,t,l)}function je(e,n,t){if(Array.isArray(e))return e.map((l,i)=>je(l,String(i),t));if(e&&typeof e.toJSON=="function"){if(!t||!Am(e))return e.toJSON(n,t);const l={aliasCount:0,count:1,res:void 0};t.anchors.set(e,l),t.onCreate=r=>{l.res=r,delete t.onCreate};const i=e.toJSON(n,t);return t.onCreate&&t.onCreate(i),i}return typeof e=="bigint"&&!(t!=null&&t.keep)?Number(e):e}class Ts{constructor(n){Object.defineProperty(this,He,{value:n})}clone(){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(n.range=this.range.slice()),n}toJS(n,{mapAsMap:t,maxAliasCount:l,onAnchor:i,reviver:r}={}){if(!ut(n))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:n,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof l=="number"?l:100},o=je(this,"",a);if(typeof i=="function")for(const{count:s,res:d}of a.anchors.values())i(d,s);return typeof r=="function"?Vt(r,{"":o},"",o):o}}class Rr extends Ts{constructor(n){super(Vs),this.source=n,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(n,t){let l;t!=null&&t.aliasResolveCache?l=t.aliasResolveCache:(l=[],mt(n,{Node:(r,a)=>{(Hn(a)||Am(a))&&l.push(a)}}),t&&(t.aliasResolveCache=l));let i;for(const r of l){if(r===this)break;r.anchor===this.source&&(i=r)}return i}toJSON(n,t){if(!t)return{source:this.source};const{anchors:l,doc:i,maxAliasCount:r}=t,a=this.resolve(i,t);if(!a){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}let o=l.get(a);if(o||(je(a,null,t),o=l.get(a)),!o||o.res===void 0){const s="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(s)}if(r>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Hi(i,a,l)),o.count*o.aliasCount>r)){const s="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(s)}return o.res}toString(n,t,l){const i=`*${this.source}`;if(n){if(Mm(this.source),n.options.verifyAliasOrder&&!n.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(n.implicitKey)return`${i} `}return i}}function Hi(e,n,t){if(Hn(n)){const l=n.resolve(e),i=t&&l&&t.get(l);return i?i.count*i.aliasCount:0}else if(J(n)){let l=0;for(const i of n.items){const r=Hi(e,i,t);r>l&&(l=r)}return l}else if(K(n)){const l=Hi(e,n.key,t),i=Hi(e,n.value,t);return Math.max(l,i)}return 1}const Bm=e=>!e||typeof e!="function"&&typeof e!="object";class T extends Ts{constructor(n){super(sn),this.value=n}toJSON(n,t){return t!=null&&t.keep?this.value:je(this.value,n,t)}toString(){return String(this.value)}}T.BLOCK_FOLDED="BLOCK_FOLDED";T.BLOCK_LITERAL="BLOCK_LITERAL";T.PLAIN="PLAIN";T.QUOTE_DOUBLE="QUOTE_DOUBLE";T.QUOTE_SINGLE="QUOTE_SINGLE";const Hg="tag:yaml.org,2002:";function qg(e,n,t){if(n){const l=t.filter(r=>r.tag===n),i=l.find(r=>!r.format)??l[0];if(!i)throw new Error(`Tag ${n} not found`);return i}return t.find(l=>{var i;return((i=l.identify)==null?void 0:i.call(l,e))&&!l.format})}function Yl(e,n,t){var m,p,g;if(ut(e)&&(e=e.contents),Z(e))return e;if(K(e)){const x=(p=(m=t.schema[Fn]).createNode)==null?void 0:p.call(m,t.schema,null,t);return x.items.push(e),x}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:l,onAnchor:i,onTagObj:r,schema:a,sourceObjects:o}=t;let s;if(l&&e&&typeof e=="object"){if(s=o.get(e),s)return s.anchor??(s.anchor=i(e)),new Rr(s.anchor);s={anchor:null,node:null},o.set(e,s)}n!=null&&n.startsWith("!!")&&(n=Hg+n.slice(2));let d=qg(e,n,a.tags);if(!d){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const x=new T(e);return s&&(s.node=x),x}d=e instanceof Map?a[Fn]:Symbol.iterator in Object(e)?a[tl]:a[Fn]}r&&(r(d),delete t.onTagObj);const u=d!=null&&d.createNode?d.createNode(t.schema,e,t):typeof((g=d==null?void 0:d.nodeClass)==null?void 0:g.from)=="function"?d.nodeClass.from(t.schema,e,t):new T(e);return n?u.tag=n:d.default||(u.tag=d.tag),s&&(s.node=u),u}function _r(e,n,t){let l=t;for(let i=n.length-1;i>=0;--i){const r=n[i];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=l,l=a}else l=new Map([[r,l]])}return Yl(l,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const wl=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class Rm extends Ts{constructor(n,t){super(n),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(n){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return n&&(t.schema=n),t.items=t.items.map(l=>Z(l)||K(l)?l.clone(n):l),this.range&&(t.range=this.range.slice()),t}addIn(n,t){if(wl(n))this.add(t);else{const[l,...i]=n,r=this.get(l,!0);if(J(r))r.addIn(i,t);else if(r===void 0&&this.schema)this.set(l,_r(this.schema,i,t));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}deleteIn(n){const[t,...l]=n;if(l.length===0)return this.delete(t);const i=this.get(t,!0);if(J(i))return i.deleteIn(l);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${l}`)}getIn(n,t){const[l,...i]=n,r=this.get(l,!0);return i.length===0?!t&&j(r)?r.value:r:J(r)?r.getIn(i,t):void 0}hasAllNullValues(n){return this.items.every(t=>{if(!K(t))return!1;const l=t.value;return l==null||n&&j(l)&&l.value==null&&!l.commentBefore&&!l.comment&&!l.tag})}hasIn(n){const[t,...l]=n;if(l.length===0)return this.has(t);const i=this.get(t,!0);return J(i)?i.hasIn(l):!1}setIn(n,t){const[l,...i]=n;if(i.length===0)this.set(l,t);else{const r=this.get(l,!0);if(J(r))r.setIn(i,t);else if(r===void 0&&this.schema)this.set(l,_r(this.schema,i,t));else throw new Error(`Expected YAML collection at ${l}. Remaining path: ${i}`)}}}const $g=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function fn(e,n){return/^\n+$/.test(e)?e.substring(1):n?e.replace(/^(?! *$)/gm,n):e}const Xn=(e,n,t)=>e.endsWith(`
`)?fn(t,n):t.includes(`
`)?`
`+fn(t,n):(e.endsWith(" ")?"":" ")+t,jm="flow",Io="block",qi="quoted";function jr(e,n,t="flow",{indentAtStart:l,lineWidth:i=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!i||i<0)return e;i<r&&(r=0);const s=Math.max(1+r,1+i-n.length);if(e.length<=s)return e;const d=[],u={};let m=i-n.length;typeof l=="number"&&(l>i-Math.max(2,r)?d.push(0):m=i-l);let p,g,x=!1,b=-1,_=-1,y=-1;t===Io&&(b=ic(e,b,n.length),b!==-1&&(m=b+s));for(let h;h=e[b+=1];){if(t===qi&&h==="\\"){switch(_=b,e[b+1]){case"x":b+=3;break;case"u":b+=5;break;case"U":b+=9;break;default:b+=1}y=b}if(h===`
`)t===Io&&(b=ic(e,b,n.length)),m=b+n.length+s,p=void 0;else{if(h===" "&&g&&g!==" "&&g!==`
`&&g!=="	"){const v=e[b+1];v&&v!==" "&&v!==`
`&&v!=="	"&&(p=b)}if(b>=m)if(p)d.push(p),m=p+s,p=void 0;else if(t===qi){for(;g===" "||g==="	";)g=h,h=e[b+=1],x=!0;const v=b>y+1?b-2:_-1;if(u[v])return e;d.push(v),u[v]=!0,m=v+s,p=void 0}else x=!0}g=h}if(x&&o&&o(),d.length===0)return e;a&&a();let f=e.slice(0,d[0]);for(let h=0;h<d.length;++h){const v=d[h],w=d[h+1]||e.length;v===0?f=`
${n}${e.slice(0,w)}`:(t===qi&&u[v]&&(f+=`${e[v]}\\`),f+=`
${n}${e.slice(v+1,w)}`)}return f}function ic(e,n,t){let l=n,i=n+1,r=e[i];for(;r===" "||r==="	";)if(n<i+t)r=e[++n];else{do r=e[++n];while(r&&r!==`
`);l=n,i=n+1,r=e[i]}return l}const Ur=(e,n)=>({indentAtStart:n?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Wr=e=>/^(%|---|\.\.\.)/m.test(e);function zg(e,n,t){if(!n||n<0)return!1;const l=n-t,i=e.length;if(i<=l)return!1;for(let r=0,a=0;r<i;++r)if(e[r]===`
`){if(r-a>l)return!0;if(a=r+1,i-a<=l)return!1}return!0}function Vl(e,n){const t=JSON.stringify(e);if(n.options.doubleQuotedAsJSON)return t;const{implicitKey:l}=n,i=n.options.doubleQuotedMinMultiLineLength,r=n.indent||(Wr(e)?"  ":"");let a="",o=0;for(let s=0,d=t[s];d;d=t[++s])if(d===" "&&t[s+1]==="\\"&&t[s+2]==="n"&&(a+=t.slice(o,s)+"\\ ",s+=1,o=s,d="\\"),d==="\\")switch(t[s+1]){case"u":{a+=t.slice(o,s);const u=t.substr(s+2,4);switch(u){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:u.substr(0,2)==="00"?a+="\\x"+u.substr(2):a+=t.substr(s,6)}s+=5,o=s+1}break;case"n":if(l||t[s+2]==='"'||t.length<i)s+=1;else{for(a+=t.slice(o,s)+`

`;t[s+2]==="\\"&&t[s+3]==="n"&&t[s+4]!=='"';)a+=`
`,s+=2;a+=r,t[s+2]===" "&&(a+="\\"),s+=1,o=s+1}break;default:s+=1}return a=o?a+t.slice(o):t,l?a:jr(a,r,qi,Ur(n,!1))}function Ao(e,n){if(n.options.singleQuote===!1||n.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Vl(e,n);const t=n.indent||(Wr(e)?"  ":""),l="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return n.implicitKey?l:jr(l,t,jm,Ur(n,!1))}function Tt(e,n){const{singleQuote:t}=n.options;let l;if(t===!1)l=Vl;else{const i=e.includes('"'),r=e.includes("'");i&&!r?l=Ao:r&&!i?l=Vl:l=t?Ao:Vl}return l(e,n)}let Vo;try{Vo=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Vo=/\n+(?!\n|$)/g}function $i({comment:e,type:n,value:t},l,i,r){const{blockQuote:a,commentString:o,lineWidth:s}=l.options;if(!a||/\n[\t ]+$/.test(t))return Tt(t,l);const d=l.indent||(l.forceBlockIndent||Wr(t)?"  ":""),u=a==="literal"?!0:a==="folded"||n===T.BLOCK_FOLDED?!1:n===T.BLOCK_LITERAL?!0:!zg(t,s,d.length);if(!t)return u?`|
`:`>
`;let m,p;for(p=t.length;p>0;--p){const w=t[p-1];if(w!==`
`&&w!=="	"&&w!==" ")break}let g=t.substring(p);const x=g.indexOf(`
`);x===-1?m="-":t===g||x!==g.length-1?(m="+",r&&r()):m="",g&&(t=t.slice(0,-g.length),g[g.length-1]===`
`&&(g=g.slice(0,-1)),g=g.replace(Vo,`$&${d}`));let b=!1,_,y=-1;for(_=0;_<t.length;++_){const w=t[_];if(w===" ")b=!0;else if(w===`
`)y=_;else break}let f=t.substring(0,y<_?y+1:_);f&&(t=t.substring(f.length),f=f.replace(/\n+/g,`$&${d}`));let v=(b?d?"2":"1":"")+m;if(e&&(v+=" "+o(e.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){const w=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${d}`);let C=!1;const L=Ur(l,!0);a!=="folded"&&n!==T.BLOCK_FOLDED&&(L.onOverflow=()=>{C=!0});const S=jr(`${f}${w}${g}`,d,Io,L);if(!C)return`>${v}
${d}${S}`}return t=t.replace(/\n+/g,`$&${d}`),`|${v}
${d}${f}${t}${g}`}function Kg(e,n,t,l){const{type:i,value:r}=e,{actualString:a,implicitKey:o,indent:s,indentStep:d,inFlow:u}=n;if(o&&r.includes(`
`)||u&&/[[\]{},]/.test(r))return Tt(r,n);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||u||!r.includes(`
`)?Tt(r,n):$i(e,n,t,l);if(!o&&!u&&i!==T.PLAIN&&r.includes(`
`))return $i(e,n,t,l);if(Wr(r)){if(s==="")return n.forceBlockIndent=!0,$i(e,n,t,l);if(o&&s===d)return Tt(r,n)}const m=r.replace(/\n+/g,`$&
${s}`);if(a){const p=b=>{var _;return b.default&&b.tag!=="tag:yaml.org,2002:str"&&((_=b.test)==null?void 0:_.test(m))},{compat:g,tags:x}=n.doc.schema;if(x.some(p)||g!=null&&g.some(p))return Tt(r,n)}return o?m:jr(m,s,jm,Ur(n,!1))}function ii(e,n,t,l){const{implicitKey:i,inFlow:r}=n,a=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:o}=e;o!==T.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=T.QUOTE_DOUBLE);const s=u=>{switch(u){case T.BLOCK_FOLDED:case T.BLOCK_LITERAL:return i||r?Tt(a.value,n):$i(a,n,t,l);case T.QUOTE_DOUBLE:return Vl(a.value,n);case T.QUOTE_SINGLE:return Ao(a.value,n);case T.PLAIN:return Kg(a,n,t,l);default:return null}};let d=s(o);if(d===null){const{defaultKeyType:u,defaultStringType:m}=n.options,p=i&&u||m;if(d=s(p),d===null)throw new Error(`Unsupported default string type ${p}`)}return d}function Um(e,n){const t=Object.assign({blockQuote:!0,commentString:$g,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,n);let l;switch(t.collectionStyle){case"block":l=!1;break;case"flow":l=!0;break;default:l=null}return{anchors:new Set,doc:e,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:l,options:t}}function Qg(e,n){var i;if(n.tag){const r=e.filter(a=>a.tag===n.tag);if(r.length>0)return r.find(a=>a.format===n.format)??r[0]}let t,l;if(j(n)){l=n.value;let r=e.filter(a=>{var o;return(o=a.identify)==null?void 0:o.call(a,l)});if(r.length>1){const a=r.filter(o=>o.test);a.length>0&&(r=a)}t=r.find(a=>a.format===n.format)??r.find(a=>!a.format)}else l=n,t=e.find(r=>r.nodeClass&&l instanceof r.nodeClass);if(!t){const r=((i=l==null?void 0:l.constructor)==null?void 0:i.name)??(l===null?"null":typeof l);throw new Error(`Tag not resolved for ${r} value`)}return t}function Yg(e,n,{anchors:t,doc:l}){if(!l.directives)return"";const i=[],r=(j(e)||J(e))&&e.anchor;r&&Mm(r)&&(t.add(r),i.push(`&${r}`));const a=e.tag??(n.default?null:n.tag);return a&&i.push(l.directives.tagString(a)),i.join(" ")}function Yt(e,n,t,l){var s;if(K(e))return e.toString(n,t,l);if(Hn(e)){if(n.doc.directives)return e.toString(n);if((s=n.resolvedAliases)!=null&&s.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");n.resolvedAliases?n.resolvedAliases.add(e):n.resolvedAliases=new Set([e]),e=e.resolve(n.doc)}let i;const r=Z(e)?e:n.doc.createNode(e,{onTagObj:d=>i=d});i??(i=Qg(n.doc.schema.tags,r));const a=Yg(r,i,n);a.length>0&&(n.indentAtStart=(n.indentAtStart??0)+a.length+1);const o=typeof i.stringify=="function"?i.stringify(r,n,t,l):j(r)?ii(r,n,t,l):r.toString(n,t,l);return a?j(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${n.indent}${o}`:o}function Jg({key:e,value:n},t,l,i){const{allNullValues:r,doc:a,indent:o,indentStep:s,options:{commentString:d,indentSeq:u,simpleKeys:m}}=t;let p=Z(e)&&e.comment||null;if(m){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(J(e)||!Z(e)&&typeof e=="object"){const L="With simple keys, collection cannot be used as a key value";throw new Error(L)}}let g=!m&&(!e||p&&n==null&&!t.inFlow||J(e)||(j(e)?e.type===T.BLOCK_FOLDED||e.type===T.BLOCK_LITERAL:typeof e=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!g&&(m||!r),indent:o+s});let x=!1,b=!1,_=Yt(e,t,()=>x=!0,()=>b=!0);if(!g&&!t.inFlow&&_.length>1024){if(m)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");g=!0}if(t.inFlow){if(r||n==null)return x&&l&&l(),_===""?"?":g?`? ${_}`:_}else if(r&&!m||n==null&&g)return _=`? ${_}`,p&&!x?_+=Xn(_,t.indent,d(p)):b&&i&&i(),_;x&&(p=null),g?(p&&(_+=Xn(_,t.indent,d(p))),_=`? ${_}
${o}:`):(_=`${_}:`,p&&(_+=Xn(_,t.indent,d(p))));let y,f,h;Z(n)?(y=!!n.spaceBefore,f=n.commentBefore,h=n.comment):(y=!1,f=null,h=null,n&&typeof n=="object"&&(n=a.createNode(n))),t.implicitKey=!1,!g&&!p&&j(n)&&(t.indentAtStart=_.length+1),b=!1,!u&&s.length>=2&&!t.inFlow&&!g&&il(n)&&!n.flow&&!n.tag&&!n.anchor&&(t.indent=t.indent.substring(2));let v=!1;const w=Yt(n,t,()=>v=!0,()=>b=!0);let C=" ";if(p||y||f){if(C=y?`
`:"",f){const L=d(f);C+=`
${fn(L,t.indent)}`}w===""&&!t.inFlow?C===`
`&&(C=`

`):C+=`
${t.indent}`}else if(!g&&J(n)){const L=w[0],S=w.indexOf(`
`),N=S!==-1,I=t.inFlow??n.flow??n.items.length===0;if(N||!I){let Q=!1;if(N&&(L==="&"||L==="!")){let R=w.indexOf(" ");L==="&"&&R!==-1&&R<S&&w[R+1]==="!"&&(R=w.indexOf(" ",R+1)),(R===-1||S<R)&&(Q=!0)}Q||(C=`
${t.indent}`)}}else(w===""||w[0]===`
`)&&(C="");return _+=C+w,t.inFlow?v&&l&&l():h&&!v?_+=Xn(_,t.indent,d(h)):b&&i&&i(),_}function Wm(e,n){(e==="debug"||e==="warn")&&console.warn(n)}const Pi="<<",yn={identify:e=>e===Pi||typeof e=="symbol"&&e.description===Pi,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new T(Symbol(Pi)),{addToJSMap:Hm}),stringify:()=>Pi},Xg=(e,n)=>(yn.identify(n)||j(n)&&(!n.type||n.type===T.PLAIN)&&yn.identify(n.value))&&(e==null?void 0:e.doc.schema.tags.some(t=>t.tag===yn.tag&&t.default));function Hm(e,n,t){if(t=e&&Hn(t)?t.resolve(e.doc):t,il(t))for(const l of t.items)ka(e,n,l);else if(Array.isArray(t))for(const l of t)ka(e,n,l);else ka(e,n,t)}function ka(e,n,t){const l=e&&Hn(t)?t.resolve(e.doc):t;if(!ll(l))throw new Error("Merge sources must be maps or map aliases");const i=l.toJSON(null,e,Map);for(const[r,a]of i)n instanceof Map?n.has(r)||n.set(r,a):n instanceof Set?n.add(r):Object.prototype.hasOwnProperty.call(n,r)||Object.defineProperty(n,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return n}function qm(e,n,{key:t,value:l}){if(Z(t)&&t.addToJSMap)t.addToJSMap(e,n,l);else if(Xg(e,t))Hm(e,n,l);else{const i=je(t,"",e);if(n instanceof Map)n.set(i,je(l,i,e));else if(n instanceof Set)n.add(i);else{const r=Zg(t,i,e),a=je(l,r,e);r in n?Object.defineProperty(n,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):n[r]=a}}return n}function Zg(e,n,t){if(n===null)return"";if(typeof n!="object")return String(n);if(Z(e)&&(t!=null&&t.doc)){const l=Um(t.doc,{});l.anchors=new Set;for(const r of t.anchors.keys())l.anchors.add(r.anchor);l.inFlow=!0,l.inStringifyKey=!0;const i=e.toString(l);if(!t.mapKeyWarned){let r=JSON.stringify(i);r.length>40&&(r=r.substring(0,36)+'..."'),Wm(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(n)}function Ds(e,n,t){const l=Yl(e,void 0,t),i=Yl(n,void 0,t);return new ge(l,i)}class ge{constructor(n,t=null){Object.defineProperty(this,He,{value:Im}),this.key=n,this.value=t}clone(n){let{key:t,value:l}=this;return Z(t)&&(t=t.clone(n)),Z(l)&&(l=l.clone(n)),new ge(t,l)}toJSON(n,t){const l=t!=null&&t.mapAsMap?new Map:{};return qm(t,l,this)}toString(n,t,l){return n!=null&&n.doc?Jg(this,n,t,l):JSON.stringify(this)}}function $m(e,n,t){return(n.inFlow??e.flow?nb:eb)(e,n,t)}function eb({comment:e,items:n},t,{blockItemPrefix:l,flowChars:i,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:s,options:{commentString:d}}=t,u=Object.assign({},t,{indent:r,type:null});let m=!1;const p=[];for(let x=0;x<n.length;++x){const b=n[x];let _=null;if(Z(b))!m&&b.spaceBefore&&p.push(""),xr(t,p,b.commentBefore,m),b.comment&&(_=b.comment);else if(K(b)){const f=Z(b.key)?b.key:null;f&&(!m&&f.spaceBefore&&p.push(""),xr(t,p,f.commentBefore,m))}m=!1;let y=Yt(b,u,()=>_=null,()=>m=!0);_&&(y+=Xn(y,r,d(_))),m&&_&&(m=!1),p.push(l+y)}let g;if(p.length===0)g=i.start+i.end;else{g=p[0];for(let x=1;x<p.length;++x){const b=p[x];g+=b?`
${s}${b}`:`
`}}return e?(g+=`
`+fn(d(e),s),o&&o()):m&&a&&a(),g}function nb({items:e},n,{flowChars:t,itemIndent:l}){const{indent:i,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=n;l+=r;const s=Object.assign({},n,{indent:l,inFlow:!0,type:null});let d=!1,u=0;const m=[];for(let x=0;x<e.length;++x){const b=e[x];let _=null;if(Z(b))b.spaceBefore&&m.push(""),xr(n,m,b.commentBefore,!1),b.comment&&(_=b.comment);else if(K(b)){const f=Z(b.key)?b.key:null;f&&(f.spaceBefore&&m.push(""),xr(n,m,f.commentBefore,!1),f.comment&&(d=!0));const h=Z(b.value)?b.value:null;h?(h.comment&&(_=h.comment),h.commentBefore&&(d=!0)):b.value==null&&(f!=null&&f.comment)&&(_=f.comment)}_&&(d=!0);let y=Yt(b,s,()=>_=null);x<e.length-1&&(y+=","),_&&(y+=Xn(y,l,o(_))),!d&&(m.length>u||y.includes(`
`))&&(d=!0),m.push(y),u=m.length}const{start:p,end:g}=t;if(m.length===0)return p+g;if(!d){const x=m.reduce((b,_)=>b+_.length+2,2);d=n.options.lineWidth>0&&x>n.options.lineWidth}if(d){let x=p;for(const b of m)x+=b?`
${r}${i}${b}`:`
`;return`${x}
${i}${g}`}else return`${p}${a}${m.join(" ")}${a}${g}`}function xr({indent:e,options:{commentString:n}},t,l,i){if(l&&i&&(l=l.replace(/^\n+/,"")),l){const r=fn(n(l),e);t.push(r.trimStart())}}function Zn(e,n){const t=j(n)?n.value:n;for(const l of e)if(K(l)&&(l.key===n||l.key===t||j(l.key)&&l.key.value===t))return l}class Ae extends Rm{static get tagName(){return"tag:yaml.org,2002:map"}constructor(n){super(Fn,n),this.items=[]}static from(n,t,l){const{keepUndefined:i,replacer:r}=l,a=new this(n),o=(s,d)=>{if(typeof r=="function")d=r.call(t,s,d);else if(Array.isArray(r)&&!r.includes(s))return;(d!==void 0||i)&&a.items.push(Ds(s,d,l))};if(t instanceof Map)for(const[s,d]of t)o(s,d);else if(t&&typeof t=="object")for(const s of Object.keys(t))o(s,t[s]);return typeof n.sortMapEntries=="function"&&a.items.sort(n.sortMapEntries),a}add(n,t){var a;let l;K(n)?l=n:!n||typeof n!="object"||!("key"in n)?l=new ge(n,n==null?void 0:n.value):l=new ge(n.key,n.value);const i=Zn(this.items,l.key),r=(a=this.schema)==null?void 0:a.sortMapEntries;if(i){if(!t)throw new Error(`Key ${l.key} already set`);j(i.value)&&Bm(l.value)?i.value.value=l.value:i.value=l.value}else if(r){const o=this.items.findIndex(s=>r(l,s)<0);o===-1?this.items.push(l):this.items.splice(o,0,l)}else this.items.push(l)}delete(n){const t=Zn(this.items,n);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(n,t){const l=Zn(this.items,n),i=l==null?void 0:l.value;return(!t&&j(i)?i.value:i)??void 0}has(n){return!!Zn(this.items,n)}set(n,t){this.add(new ge(n,t),!0)}toJSON(n,t,l){const i=l?new l:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(i);for(const r of this.items)qm(t,i,r);return i}toString(n,t,l){if(!n)return JSON.stringify(this);for(const i of this.items)if(!K(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!n.allNullValues&&this.hasAllNullValues(!1)&&(n=Object.assign({},n,{allNullValues:!0})),$m(this,n,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:n.indent||"",onChompKeep:l,onComment:t})}}const rl={collection:"map",default:!0,nodeClass:Ae,tag:"tag:yaml.org,2002:map",resolve(e,n){return ll(e)||n("Expected a mapping for this tag"),e},createNode:(e,n,t)=>Ae.from(e,n,t)};class Rn extends Rm{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(n){super(tl,n),this.items=[]}add(n){this.items.push(n)}delete(n){const t=Ei(n);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(n,t){const l=Ei(n);if(typeof l!="number")return;const i=this.items[l];return!t&&j(i)?i.value:i}has(n){const t=Ei(n);return typeof t=="number"&&t<this.items.length}set(n,t){const l=Ei(n);if(typeof l!="number")throw new Error(`Expected a valid index, not ${n}.`);const i=this.items[l];j(i)&&Bm(t)?i.value=t:this.items[l]=t}toJSON(n,t){const l=[];t!=null&&t.onCreate&&t.onCreate(l);let i=0;for(const r of this.items)l.push(je(r,String(i++),t));return l}toString(n,t,l){return n?$m(this,n,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(n.indent||"")+"  ",onChompKeep:l,onComment:t}):JSON.stringify(this)}static from(n,t,l){const{replacer:i}=l,r=new this(n);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof i=="function"){const s=t instanceof Set?o:String(a++);o=i.call(t,s,o)}r.items.push(Yl(o,void 0,l))}}return r}}function Ei(e){let n=j(e)?e.value:e;return n&&typeof n=="string"&&(n=Number(n)),typeof n=="number"&&Number.isInteger(n)&&n>=0?n:null}const al={collection:"seq",default:!0,nodeClass:Rn,tag:"tag:yaml.org,2002:seq",resolve(e,n){return il(e)||n("Expected a sequence for this tag"),e},createNode:(e,n,t)=>Rn.from(e,n,t)},Hr={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,n,t,l){return n=Object.assign({actualString:!0},n),ii(e,n,t,l)}},qr={identify:e=>e==null,createNode:()=>new T(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new T(null),stringify:({source:e},n)=>typeof e=="string"&&qr.test.test(e)?e:n.options.nullStr},Gs={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new T(e[0]==="t"||e[0]==="T"),stringify({source:e,value:n},t){if(e&&Gs.test.test(e)){const l=e[0]==="t"||e[0]==="T";if(n===l)return e}return n?t.options.trueStr:t.options.falseStr}};function Ze({format:e,minFractionDigits:n,tag:t,value:l}){if(typeof l=="bigint")return String(l);const i=typeof l=="number"?l:Number(l);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let r=JSON.stringify(l);if(!e&&n&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(r)){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=n-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const zm={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ze},Km={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const n=Number(e.value);return isFinite(n)?n.toExponential():Ze(e)}},Qm={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const n=new T(parseFloat(e)),t=e.indexOf(".");return t!==-1&&e[e.length-1]==="0"&&(n.minFractionDigits=e.length-t-1),n},stringify:Ze},$r=e=>typeof e=="bigint"||Number.isInteger(e),Ms=(e,n,t,{intAsBigInt:l})=>l?BigInt(e):parseInt(e.substring(n),t);function Ym(e,n,t){const{value:l}=e;return $r(l)&&l>=0?t+l.toString(n):Ze(e)}const Jm={identify:e=>$r(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,n,t)=>Ms(e,2,8,t),stringify:e=>Ym(e,8,"0o")},Xm={identify:$r,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,n,t)=>Ms(e,0,10,t),stringify:Ze},Zm={identify:e=>$r(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,n,t)=>Ms(e,2,16,t),stringify:e=>Ym(e,16,"0x")},tb=[rl,al,Hr,qr,Gs,Jm,Xm,Zm,zm,Km,Qm];function rc(e){return typeof e=="bigint"||Number.isInteger(e)}const Ni=({value:e})=>JSON.stringify(e),lb=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Ni},{identify:e=>e==null,createNode:()=>new T(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ni},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:Ni},{identify:rc,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,n,{intAsBigInt:t})=>t?BigInt(e):parseInt(e,10),stringify:({value:e})=>rc(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Ni}],ib={default:!0,tag:"",test:/^/,resolve(e,n){return n(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},rb=[rl,al].concat(lb,ib),Fs={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,n){if(typeof atob=="function"){const t=atob(e.replace(/[\n\r]/g,"")),l=new Uint8Array(t.length);for(let i=0;i<t.length;++i)l[i]=t.charCodeAt(i);return l}else return n("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:n,value:t},l,i,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let s="";for(let d=0;d<a.length;++d)s+=String.fromCharCode(a[d]);o=btoa(s)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(n??(n=T.BLOCK_LITERAL),n!==T.QUOTE_DOUBLE){const s=Math.max(l.options.lineWidth-l.indent.length,l.options.minContentWidth),d=Math.ceil(o.length/s),u=new Array(d);for(let m=0,p=0;m<d;++m,p+=s)u[m]=o.substr(p,s);o=u.join(n===T.BLOCK_LITERAL?`
`:" ")}return ii({comment:e,type:n,value:o},l,i,r)}};function ef(e,n){if(il(e))for(let t=0;t<e.items.length;++t){let l=e.items[t];if(!K(l)){if(ll(l)){l.items.length>1&&n("Each pair must have its own sequence indicator");const i=l.items[0]||new ge(new T(null));if(l.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${l.commentBefore}
${i.key.commentBefore}`:l.commentBefore),l.comment){const r=i.value??i.key;r.comment=r.comment?`${l.comment}
${r.comment}`:l.comment}l=i}e.items[t]=K(l)?l:new ge(l)}}else n("Expected a sequence for this tag");return e}function nf(e,n,t){const{replacer:l}=t,i=new Rn(e);i.tag="tag:yaml.org,2002:pairs";let r=0;if(n&&Symbol.iterator in Object(n))for(let a of n){typeof l=="function"&&(a=l.call(n,String(r++),a));let o,s;if(Array.isArray(a))if(a.length===2)o=a[0],s=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const d=Object.keys(a);if(d.length===1)o=d[0],s=a[o];else throw new TypeError(`Expected tuple with one key, not ${d.length} keys`)}else o=a;i.items.push(Ds(o,s,t))}return i}const Os={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:ef,createNode:nf};class Rt extends Rn{constructor(){super(),this.add=Ae.prototype.add.bind(this),this.delete=Ae.prototype.delete.bind(this),this.get=Ae.prototype.get.bind(this),this.has=Ae.prototype.has.bind(this),this.set=Ae.prototype.set.bind(this),this.tag=Rt.tag}toJSON(n,t){if(!t)return super.toJSON(n);const l=new Map;t!=null&&t.onCreate&&t.onCreate(l);for(const i of this.items){let r,a;if(K(i)?(r=je(i.key,"",t),a=je(i.value,r,t)):r=je(i,"",t),l.has(r))throw new Error("Ordered maps must not include duplicate keys");l.set(r,a)}return l}static from(n,t,l){const i=nf(n,t,l),r=new this;return r.items=i.items,r}}Rt.tag="tag:yaml.org,2002:omap";const Bs={collection:"seq",identify:e=>e instanceof Map,nodeClass:Rt,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,n){const t=ef(e,n),l=[];for(const{key:i}of t.items)j(i)&&(l.includes(i.value)?n(`Ordered maps must not include duplicate keys: ${i.value}`):l.push(i.value));return Object.assign(new Rt,t)},createNode:(e,n,t)=>Rt.from(e,n,t)};function tf({value:e,source:n},t){return n&&(e?lf:rf).test.test(n)?n:e?t.options.trueStr:t.options.falseStr}const lf={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new T(!0),stringify:tf},rf={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new T(!1),stringify:tf},ab={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ze},ob={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const n=Number(e.value);return isFinite(n)?n.toExponential():Ze(e)}},sb={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const n=new T(parseFloat(e.replace(/_/g,""))),t=e.indexOf(".");if(t!==-1){const l=e.substring(t+1).replace(/_/g,"");l[l.length-1]==="0"&&(n.minFractionDigits=l.length)}return n},stringify:Ze},ri=e=>typeof e=="bigint"||Number.isInteger(e);function zr(e,n,t,{intAsBigInt:l}){const i=e[0];if((i==="-"||i==="+")&&(n+=1),e=e.substring(n).replace(/_/g,""),l){switch(t){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const a=BigInt(e);return i==="-"?BigInt(-1)*a:a}const r=parseInt(e,t);return i==="-"?-1*r:r}function Rs(e,n,t){const{value:l}=e;if(ri(l)){const i=l.toString(n);return l<0?"-"+t+i.substr(1):t+i}return Ze(e)}const db={identify:ri,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,n,t)=>zr(e,2,2,t),stringify:e=>Rs(e,2,"0b")},cb={identify:ri,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,n,t)=>zr(e,1,8,t),stringify:e=>Rs(e,8,"0")},ub={identify:ri,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,n,t)=>zr(e,0,10,t),stringify:Ze},mb={identify:ri,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,n,t)=>zr(e,2,16,t),stringify:e=>Rs(e,16,"0x")};class jt extends Ae{constructor(n){super(n),this.tag=jt.tag}add(n){let t;K(n)?t=n:n&&typeof n=="object"&&"key"in n&&"value"in n&&n.value===null?t=new ge(n.key,null):t=new ge(n,null),Zn(this.items,t.key)||this.items.push(t)}get(n,t){const l=Zn(this.items,n);return!t&&K(l)?j(l.key)?l.key.value:l.key:l}set(n,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const l=Zn(this.items,n);l&&!t?this.items.splice(this.items.indexOf(l),1):!l&&t&&this.items.push(new ge(n))}toJSON(n,t){return super.toJSON(n,t,Set)}toString(n,t,l){if(!n)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},n,{allNullValues:!0}),t,l);throw new Error("Set items must all have null values")}static from(n,t,l){const{replacer:i}=l,r=new this(n);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof i=="function"&&(a=i.call(t,a,a)),r.items.push(Ds(a,null,l));return r}}jt.tag="tag:yaml.org,2002:set";const js={collection:"map",identify:e=>e instanceof Set,nodeClass:jt,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,n,t)=>jt.from(e,n,t),resolve(e,n){if(ll(e)){if(e.hasAllNullValues(!0))return Object.assign(new jt,e);n("Set items must all have null values")}else n("Expected a mapping for this tag");return e}};function Us(e,n){const t=e[0],l=t==="-"||t==="+"?e.substring(1):e,i=a=>n?BigInt(a):Number(a),r=l.replace(/_/g,"").split(":").reduce((a,o)=>a*i(60)+i(o),i(0));return t==="-"?i(-1)*r:r}function af(e){let{value:n}=e,t=a=>a;if(typeof n=="bigint")t=a=>BigInt(a);else if(isNaN(n)||!isFinite(n))return Ze(e);let l="";n<0&&(l="-",n*=t(-1));const i=t(60),r=[n%i];return n<60?r.unshift(0):(n=(n-r[0])/i,r.unshift(n%i),n>=60&&(n=(n-r[0])/i,r.unshift(n))),l+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const of={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,n,{intAsBigInt:t})=>Us(e,t),stringify:af},sf={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Us(e,!1),stringify:af},Kr={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const n=e.match(Kr.test);if(!n)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,l,i,r,a,o]=n.map(Number),s=n[7]?Number((n[7]+"00").substr(1,3)):0;let d=Date.UTC(t,l-1,i,r||0,a||0,o||0,s);const u=n[8];if(u&&u!=="Z"){let m=Us(u,!1);Math.abs(m)<30&&(m*=60),d-=6e4*m}return new Date(d)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},ac=[rl,al,Hr,qr,lf,rf,db,cb,ub,mb,ab,ob,sb,Fs,yn,Bs,Os,js,of,sf,Kr],oc=new Map([["core",tb],["failsafe",[rl,al,Hr]],["json",rb],["yaml11",ac],["yaml-1.1",ac]]),sc={binary:Fs,bool:Gs,float:Qm,floatExp:Km,floatNaN:zm,floatTime:sf,int:Xm,intHex:Zm,intOct:Jm,intTime:of,map:rl,merge:yn,null:qr,omap:Bs,pairs:Os,seq:al,set:js,timestamp:Kr},fb={"tag:yaml.org,2002:binary":Fs,"tag:yaml.org,2002:merge":yn,"tag:yaml.org,2002:omap":Bs,"tag:yaml.org,2002:pairs":Os,"tag:yaml.org,2002:set":js,"tag:yaml.org,2002:timestamp":Kr};function Pa(e,n,t){const l=oc.get(n);if(l&&!e)return t&&!l.includes(yn)?l.concat(yn):l.slice();let i=l;if(!i)if(Array.isArray(e))i=[];else{const r=Array.from(oc.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${n}"; use one of ${r} or define customTags array`)}if(Array.isArray(e))for(const r of e)i=i.concat(r);else typeof e=="function"&&(i=e(i.slice()));return t&&(i=i.concat(yn)),i.reduce((r,a)=>{const o=typeof a=="string"?sc[a]:a;if(!o){const s=JSON.stringify(a),d=Object.keys(sc).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${s}; use one of ${d}`)}return r.includes(o)||r.push(o),r},[])}const pb=(e,n)=>e.key<n.key?-1:e.key>n.key?1:0;class Qr{constructor({compat:n,customTags:t,merge:l,resolveKnownTags:i,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(n)?Pa(n,"compat"):n?Pa(null,n):null,this.name=typeof r=="string"&&r||"core",this.knownTags=i?fb:{},this.tags=Pa(t,this.name,l),this.toStringOptions=o??null,Object.defineProperty(this,Fn,{value:rl}),Object.defineProperty(this,sn,{value:Hr}),Object.defineProperty(this,tl,{value:al}),this.sortMapEntries=typeof a=="function"?a:a===!0?pb:null}clone(){const n=Object.create(Qr.prototype,Object.getOwnPropertyDescriptors(this));return n.tags=this.tags.slice(),n}}function yb(e,n){var s;const t=[];let l=n.directives===!0;if(n.directives!==!1&&e.directives){const d=e.directives.toString(e);d?(t.push(d),l=!0):e.directives.docStart&&(l=!0)}l&&t.push("---");const i=Um(e,n),{commentString:r}=i.options;if(e.commentBefore){t.length!==1&&t.unshift("");const d=r(e.commentBefore);t.unshift(fn(d,""))}let a=!1,o=null;if(e.contents){if(Z(e.contents)){if(e.contents.spaceBefore&&l&&t.push(""),e.contents.commentBefore){const m=r(e.contents.commentBefore);t.push(fn(m,""))}i.forceBlockIndent=!!e.comment,o=e.contents.comment}const d=o?void 0:()=>a=!0;let u=Yt(e.contents,i,()=>o=null,d);o&&(u+=Xn(u,"",r(o))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(Yt(e.contents,i));if((s=e.directives)!=null&&s.docEnd)if(e.comment){const d=r(e.comment);d.includes(`
`)?(t.push("..."),t.push(fn(d,""))):t.push(`... ${d}`)}else t.push("...");else{let d=e.comment;d&&a&&(d=d.replace(/^\n+/,"")),d&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(fn(r(d),"")))}return t.join(`
`)+`
`}class ol{constructor(n,t,l){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,He,{value:No});let i=null;typeof t=="function"||Array.isArray(t)?i=t:l===void 0&&t&&(l=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},l);this.options=r;let{version:a}=r;l!=null&&l._directives?(this.directives=l._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new _e({version:a}),this.setSchema(a,l),this.contents=n===void 0?null:this.createNode(n,i,l)}clone(){const n=Object.create(ol.prototype,{[He]:{value:No}});return n.commentBefore=this.commentBefore,n.comment=this.comment,n.errors=this.errors.slice(),n.warnings=this.warnings.slice(),n.options=Object.assign({},this.options),this.directives&&(n.directives=this.directives.clone()),n.schema=this.schema.clone(),n.contents=Z(this.contents)?this.contents.clone(n.schema):this.contents,this.range&&(n.range=this.range.slice()),n}add(n){yt(this.contents)&&this.contents.add(n)}addIn(n,t){yt(this.contents)&&this.contents.addIn(n,t)}createAlias(n,t){if(!n.anchor){const l=Fm(this);n.anchor=!t||l.has(t)?Om(t||"a",l):t}return new Rr(n.anchor)}createNode(n,t,l){let i;if(typeof t=="function")n=t.call({"":n},"",n),i=t;else if(Array.isArray(t)){const _=f=>typeof f=="number"||f instanceof String||f instanceof Number,y=t.filter(_).map(String);y.length>0&&(t=t.concat(y)),i=t}else l===void 0&&t&&(l=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:s,onTagObj:d,tag:u}=l??{},{onAnchor:m,setAnchors:p,sourceObjects:g}=Wg(this,a||"a"),x={aliasDuplicateObjects:r??!0,keepUndefined:s??!1,onAnchor:m,onTagObj:d,replacer:i,schema:this.schema,sourceObjects:g},b=Yl(n,u,x);return o&&J(b)&&(b.flow=!0),p(),b}createPair(n,t,l={}){const i=this.createNode(n,null,l),r=this.createNode(t,null,l);return new ge(i,r)}delete(n){return yt(this.contents)?this.contents.delete(n):!1}deleteIn(n){return wl(n)?this.contents==null?!1:(this.contents=null,!0):yt(this.contents)?this.contents.deleteIn(n):!1}get(n,t){return J(this.contents)?this.contents.get(n,t):void 0}getIn(n,t){return wl(n)?!t&&j(this.contents)?this.contents.value:this.contents:J(this.contents)?this.contents.getIn(n,t):void 0}has(n){return J(this.contents)?this.contents.has(n):!1}hasIn(n){return wl(n)?this.contents!==void 0:J(this.contents)?this.contents.hasIn(n):!1}set(n,t){this.contents==null?this.contents=_r(this.schema,[n],t):yt(this.contents)&&this.contents.set(n,t)}setIn(n,t){wl(n)?this.contents=t:this.contents==null?this.contents=_r(this.schema,Array.from(n),t):yt(this.contents)&&this.contents.setIn(n,t)}setSchema(n,t={}){typeof n=="number"&&(n=String(n));let l;switch(n){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new _e({version:"1.1"}),l={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=n:this.directives=new _e({version:n}),l={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,l=null;break;default:{const i=JSON.stringify(n);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(l)this.schema=new Qr(Object.assign(l,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:n,jsonArg:t,mapAsMap:l,maxAliasCount:i,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!n,mapAsMap:l===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},s=je(this.contents,t??"",o);if(typeof r=="function")for(const{count:d,res:u}of o.anchors.values())r(u,d);return typeof a=="function"?Vt(a,{"":s},"",s):s}toJSON(n,t){return this.toJS({json:!0,jsonArg:n,mapAsMap:!1,onAnchor:t})}toString(n={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in n&&(!Number.isInteger(n.indent)||Number(n.indent)<=0)){const t=JSON.stringify(n.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return yb(this,n)}}function yt(e){if(J(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Ws extends Error{constructor(n,t,l,i){super(),this.name=n,this.code=l,this.message=i,this.pos=t}}class et extends Ws{constructor(n,t,l){super("YAMLParseError",n,t,l)}}class df extends Ws{constructor(n,t,l){super("YAMLWarning",n,t,l)}}const vr=(e,n)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>n.linePos(o));const{line:l,col:i}=t.linePos[0];t.message+=` at line ${l}, column ${i}`;let r=i-1,a=e.substring(n.lineStarts[l-1],n.lineStarts[l]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),l>1&&/^ *$/.test(a.substring(0,r))){let o=e.substring(n.lineStarts[l-2],n.lineStarts[l-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const s=t.linePos[1];s&&s.line===l&&s.col>i&&(o=Math.max(1,Math.min(s.col-i,80-r)));const d=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${d}
`}};function Jt(e,{flow:n,indicator:t,next:l,offset:i,onError:r,parentIndent:a,startOnNewline:o}){let s=!1,d=o,u=o,m="",p="",g=!1,x=!1,b=null,_=null,y=null,f=null,h=null,v=null,w=null;for(const S of e)switch(x&&(S.type!=="space"&&S.type!=="newline"&&S.type!=="comma"&&r(S.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),b&&(d&&S.type!=="comment"&&S.type!=="newline"&&r(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),b=null),S.type){case"space":!n&&(t!=="doc-start"||(l==null?void 0:l.type)!=="flow-collection")&&S.source.includes("	")&&(b=S),u=!0;break;case"comment":{u||r(S,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const N=S.source.substring(1)||" ";m?m+=p+N:m=N,p="",d=!1;break}case"newline":d?m?m+=S.source:(!v||t!=="seq-item-ind")&&(s=!0):p+=S.source,d=!0,g=!0,(_||y)&&(f=S),u=!0;break;case"anchor":_&&r(S,"MULTIPLE_ANCHORS","A node can have at most one anchor"),S.source.endsWith(":")&&r(S.offset+S.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=S,w??(w=S.offset),d=!1,u=!1,x=!0;break;case"tag":{y&&r(S,"MULTIPLE_TAGS","A node can have at most one tag"),y=S,w??(w=S.offset),d=!1,u=!1,x=!0;break}case t:(_||y)&&r(S,"BAD_PROP_ORDER",`Anchors and tags must be after the ${S.source} indicator`),v&&r(S,"UNEXPECTED_TOKEN",`Unexpected ${S.source} in ${n??"collection"}`),v=S,d=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(n){h&&r(S,"UNEXPECTED_TOKEN",`Unexpected , in ${n}`),h=S,d=!1,u=!1;break}default:r(S,"UNEXPECTED_TOKEN",`Unexpected ${S.type} token`),d=!1,u=!1}const C=e[e.length-1],L=C?C.offset+C.source.length:i;return x&&l&&l.type!=="space"&&l.type!=="newline"&&l.type!=="comma"&&(l.type!=="scalar"||l.source!=="")&&r(l.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),b&&(d&&b.indent<=a||(l==null?void 0:l.type)==="block-map"||(l==null?void 0:l.type)==="block-seq")&&r(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:h,found:v,spaceBefore:s,comment:m,hasNewline:g,anchor:_,tag:y,newlineAfterProp:f,end:L,start:w??L}}function Jl(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const n of e.end)if(n.type==="newline")return!0}return!1;case"flow-collection":for(const n of e.items){for(const t of n.start)if(t.type==="newline")return!0;if(n.sep){for(const t of n.sep)if(t.type==="newline")return!0}if(Jl(n.key)||Jl(n.value))return!0}return!1;default:return!0}}function To(e,n,t){if((n==null?void 0:n.type)==="flow-collection"){const l=n.end[0];l.indent===e&&(l.source==="]"||l.source==="}")&&Jl(n)&&t(l,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function cf(e,n,t){const{uniqueKeys:l}=e.options;if(l===!1)return!1;const i=typeof l=="function"?l:(r,a)=>r===a||j(r)&&j(a)&&r.value===a.value;return n.some(r=>i(r.key,t))}const dc="All mapping items must start at the same column";function gb({composeNode:e,composeEmptyNode:n},t,l,i,r){var u;const a=(r==null?void 0:r.nodeClass)??Ae,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let s=l.offset,d=null;for(const m of l.items){const{start:p,key:g,sep:x,value:b}=m,_=Jt(p,{indicator:"explicit-key-ind",next:g??(x==null?void 0:x[0]),offset:s,onError:i,parentIndent:l.indent,startOnNewline:!0}),y=!_.found;if(y){if(g&&(g.type==="block-seq"?i(s,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in g&&g.indent!==l.indent&&i(s,"BAD_INDENT",dc)),!_.anchor&&!_.tag&&!x){d=_.end,_.comment&&(o.comment?o.comment+=`
`+_.comment:o.comment=_.comment);continue}(_.newlineAfterProp||Jl(g))&&i(g??p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=_.found)==null?void 0:u.indent)!==l.indent&&i(s,"BAD_INDENT",dc);t.atKey=!0;const f=_.end,h=g?e(t,g,_,i):n(t,f,p,null,_,i);t.schema.compat&&To(l.indent,g,i),t.atKey=!1,cf(t,o.items,h)&&i(f,"DUPLICATE_KEY","Map keys must be unique");const v=Jt(x??[],{indicator:"map-value-ind",next:b,offset:h.range[2],onError:i,parentIndent:l.indent,startOnNewline:!g||g.type==="block-scalar"});if(s=v.end,v.found){y&&((b==null?void 0:b.type)==="block-map"&&!v.hasNewline&&i(s,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&_.start<v.found.offset-1024&&i(h.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const w=b?e(t,b,v,i):n(t,s,x,null,v,i);t.schema.compat&&To(l.indent,b,i),s=w.range[2];const C=new ge(h,w);t.options.keepSourceTokens&&(C.srcToken=m),o.items.push(C)}else{y&&i(h.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(h.comment?h.comment+=`
`+v.comment:h.comment=v.comment);const w=new ge(h);t.options.keepSourceTokens&&(w.srcToken=m),o.items.push(w)}}return d&&d<s&&i(d,"IMPOSSIBLE","Map comment with trailing content"),o.range=[l.offset,s,d??s],o}function bb({composeNode:e,composeEmptyNode:n},t,l,i,r){const a=(r==null?void 0:r.nodeClass)??Rn,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let s=l.offset,d=null;for(const{start:u,value:m}of l.items){const p=Jt(u,{indicator:"seq-item-ind",next:m,offset:s,onError:i,parentIndent:l.indent,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||m)m&&m.type==="block-seq"?i(p.end,"BAD_INDENT","All sequence items must start at the same column"):i(s,"MISSING_CHAR","Sequence item without - indicator");else{d=p.end,p.comment&&(o.comment=p.comment);continue}const g=m?e(t,m,p,i):n(t,p.end,u,null,p,i);t.schema.compat&&To(l.indent,m,i),s=g.range[2],o.items.push(g)}return o.range=[l.offset,s,d??s],o}function ai(e,n,t,l){let i="";if(e){let r=!1,a="";for(const o of e){const{source:s,type:d}=o;switch(d){case"space":r=!0;break;case"comment":{t&&!r&&l(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=s.substring(1)||" ";i?i+=a+u:i=u,a="";break}case"newline":i&&(a+=s),r=!0;break;default:l(o,"UNEXPECTED_TOKEN",`Unexpected ${d} at node end`)}n+=s.length}}return{comment:i,offset:n}}const Ea="Block collections are not allowed within flow collections",Na=e=>e&&(e.type==="block-map"||e.type==="block-seq");function hb({composeNode:e,composeEmptyNode:n},t,l,i,r){const a=l.start.source==="{",o=a?"flow map":"flow sequence",s=(r==null?void 0:r.nodeClass)??(a?Ae:Rn),d=new s(t.schema);d.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let m=l.offset+l.start.source.length;for(let _=0;_<l.items.length;++_){const y=l.items[_],{start:f,key:h,sep:v,value:w}=y,C=Jt(f,{flow:o,indicator:"explicit-key-ind",next:h??(v==null?void 0:v[0]),offset:m,onError:i,parentIndent:l.indent,startOnNewline:!1});if(!C.found){if(!C.anchor&&!C.tag&&!v&&!w){_===0&&C.comma?i(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):_<l.items.length-1&&i(C.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),C.comment&&(d.comment?d.comment+=`
`+C.comment:d.comment=C.comment),m=C.end;continue}!a&&t.options.strict&&Jl(h)&&i(h,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)C.comma&&i(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(C.comma||i(C.start,"MISSING_CHAR",`Missing , between ${o} items`),C.comment){let L="";e:for(const S of f)switch(S.type){case"comma":case"space":break;case"comment":L=S.source.substring(1);break e;default:break e}if(L){let S=d.items[d.items.length-1];K(S)&&(S=S.value??S.key),S.comment?S.comment+=`
`+L:S.comment=L,C.comment=C.comment.substring(L.length+1)}}if(!a&&!v&&!C.found){const L=w?e(t,w,C,i):n(t,C.end,v,null,C,i);d.items.push(L),m=L.range[2],Na(w)&&i(L.range,"BLOCK_IN_FLOW",Ea)}else{t.atKey=!0;const L=C.end,S=h?e(t,h,C,i):n(t,L,f,null,C,i);Na(h)&&i(S.range,"BLOCK_IN_FLOW",Ea),t.atKey=!1;const N=Jt(v??[],{flow:o,indicator:"map-value-ind",next:w,offset:S.range[2],onError:i,parentIndent:l.indent,startOnNewline:!1});if(N.found){if(!a&&!C.found&&t.options.strict){if(v)for(const R of v){if(R===N.found)break;if(R.type==="newline"){i(R,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}C.start<N.found.offset-1024&&i(N.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else w&&("source"in w&&w.source&&w.source[0]===":"?i(w,"MISSING_CHAR",`Missing space after : in ${o}`):i(N.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const I=w?e(t,w,N,i):N.found?n(t,N.end,v,null,N,i):null;I?Na(w)&&i(I.range,"BLOCK_IN_FLOW",Ea):N.comment&&(S.comment?S.comment+=`
`+N.comment:S.comment=N.comment);const Q=new ge(S,I);if(t.options.keepSourceTokens&&(Q.srcToken=y),a){const R=d;cf(t,R.items,S)&&i(L,"DUPLICATE_KEY","Map keys must be unique"),R.items.push(Q)}else{const R=new Ae(t.schema);R.flow=!0,R.items.push(Q);const en=(I??S).range;R.range=[S.range[0],en[1],en[2]],d.items.push(R)}m=I?I.range[2]:N.end}}const p=a?"}":"]",[g,...x]=l.end;let b=m;if(g&&g.source===p)b=g.offset+g.source.length;else{const _=o[0].toUpperCase()+o.substring(1),y=u?`${_} must end with a ${p}`:`${_} in block collection must be sufficiently indented and end with a ${p}`;i(m,u?"MISSING_CHAR":"BAD_INDENT",y),g&&g.source.length!==1&&x.unshift(g)}if(x.length>0){const _=ai(x,b,t.options.strict,i);_.comment&&(d.comment?d.comment+=`
`+_.comment:d.comment=_.comment),d.range=[l.offset,b,_.offset]}else d.range=[l.offset,b,b];return d}function Ia(e,n,t,l,i,r){const a=t.type==="block-map"?gb(e,n,t,l,r):t.type==="block-seq"?bb(e,n,t,l,r):hb(e,n,t,l,r),o=a.constructor;return i==="!"||i===o.tagName?(a.tag=o.tagName,a):(i&&(a.tag=i),a)}function _b(e,n,t,l,i){var p;const r=l.tag,a=r?n.directives.tagName(r.source,g=>i(r,"TAG_RESOLVE_FAILED",g)):null;if(t.type==="block-seq"){const{anchor:g,newlineAfterProp:x}=l,b=g&&r?g.offset>r.offset?g:r:g??r;b&&(!x||x.offset<b.offset)&&i(b,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===Ae.tagName&&o==="map"||a===Rn.tagName&&o==="seq")return Ia(e,n,t,i,a);let s=n.schema.tags.find(g=>g.tag===a&&g.collection===o);if(!s){const g=n.schema.knownTags[a];if(g&&g.collection===o)n.schema.tags.push(Object.assign({},g,{default:!1})),s=g;else return g?i(r,"BAD_COLLECTION_TYPE",`${g.tag} used for ${o} collection, but expects ${g.collection??"scalar"}`,!0):i(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),Ia(e,n,t,i,a)}const d=Ia(e,n,t,i,a,s),u=((p=s.resolve)==null?void 0:p.call(s,d,g=>i(r,"TAG_RESOLVE_FAILED",g),n.options))??d,m=Z(u)?u:new T(u);return m.range=d.range,m.tag=a,s!=null&&s.format&&(m.format=s.format),m}function uf(e,n,t){const l=n.offset,i=xb(n,e.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[l,l,l]};const r=i.mode===">"?T.BLOCK_FOLDED:T.BLOCK_LITERAL,a=n.source?vb(n.source):[];let o=a.length;for(let b=a.length-1;b>=0;--b){const _=a[b][1];if(_===""||_==="\r")o=b;else break}if(o===0){const b=i.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let _=l+i.length;return n.source&&(_+=n.source.length),{value:b,type:r,comment:i.comment,range:[l,_,_]}}let s=n.indent+i.indent,d=n.offset+i.length,u=0;for(let b=0;b<o;++b){const[_,y]=a[b];if(y===""||y==="\r")i.indent===0&&_.length>s&&(s=_.length);else{_.length<s&&t(d+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(s=_.length),u=b,s===0&&!e.atRoot&&t(d,"BAD_INDENT","Block scalar values in collections must be indented");break}d+=_.length+y.length+1}for(let b=a.length-1;b>=o;--b)a[b][0].length>s&&(o=b+1);let m="",p="",g=!1;for(let b=0;b<u;++b)m+=a[b][0].slice(s)+`
`;for(let b=u;b<o;++b){let[_,y]=a[b];d+=_.length+y.length+1;const f=y[y.length-1]==="\r";if(f&&(y=y.slice(0,-1)),y&&_.length<s){const v=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(d-y.length-(f?2:1),"BAD_INDENT",v),_=""}r===T.BLOCK_LITERAL?(m+=p+_.slice(s)+y,p=`
`):_.length>s||y[0]==="	"?(p===" "?p=`
`:!g&&p===`
`&&(p=`

`),m+=p+_.slice(s)+y,p=`
`,g=!0):y===""?p===`
`?m+=`
`:p=`
`:(m+=p+y,p=" ",g=!1)}switch(i.chomp){case"-":break;case"+":for(let b=o;b<a.length;++b)m+=`
`+a[b][0].slice(s);m[m.length-1]!==`
`&&(m+=`
`);break;default:m+=`
`}const x=l+i.length+n.source.length;return{value:m,type:r,comment:i.comment,range:[l,x,x]}}function xb({offset:e,props:n},t,l){if(n[0].type!=="block-scalar-header")return l(n[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=n[0],r=i[0];let a=0,o="",s=-1;for(let p=1;p<i.length;++p){const g=i[p];if(!o&&(g==="-"||g==="+"))o=g;else{const x=Number(g);!a&&x?a=x:s===-1&&(s=e+p)}}s!==-1&&l(s,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let d=!1,u="",m=i.length;for(let p=1;p<n.length;++p){const g=n[p];switch(g.type){case"space":d=!0;case"newline":m+=g.source.length;break;case"comment":t&&!d&&l(g,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),m+=g.source.length,u=g.source.substring(1);break;case"error":l(g,"UNEXPECTED_TOKEN",g.message),m+=g.source.length;break;default:{const x=`Unexpected token in block scalar header: ${g.type}`;l(g,"UNEXPECTED_TOKEN",x);const b=g.source;b&&typeof b=="string"&&(m+=b.length)}}}return{mode:r,indent:a,chomp:o,comment:u,length:m}}function vb(e){const n=e.split(/\n( *)/),t=n[0],l=t.match(/^( *)/),r=[l!=null&&l[1]?[l[1],t.slice(l[1].length)]:["",t]];for(let a=1;a<n.length;a+=2)r.push([n[a],n[a+1]]);return r}function mf(e,n,t){const{offset:l,type:i,source:r,end:a}=e;let o,s;const d=(p,g,x)=>t(l+p,g,x);switch(i){case"scalar":o=T.PLAIN,s=wb(r,d);break;case"single-quoted-scalar":o=T.QUOTE_SINGLE,s=Sb(r,d);break;case"double-quoted-scalar":o=T.QUOTE_DOUBLE,s=Cb(r,d);break;default:return t(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[l,l+r.length,l+r.length]}}const u=l+r.length,m=ai(a,u,n,t);return{value:s,type:o,comment:m.comment,range:[l,u,m.offset]}}function wb(e,n){let t="";switch(e[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${e[0]}`;break}case"@":case"`":{t=`reserved character ${e[0]}`;break}}return t&&n(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),ff(e)}function Sb(e,n){return(e[e.length-1]!=="'"||e.length===1)&&n(e.length,"MISSING_CHAR","Missing closing 'quote"),ff(e.slice(1,-1)).replace(/''/g,"'")}function ff(e){let n,t;try{n=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{n=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let l=n.exec(e);if(!l)return e;let i=l[1],r=" ",a=n.lastIndex;for(t.lastIndex=a;l=t.exec(e);)l[1]===""?r===`
`?i+=r:r=`
`:(i+=r+l[1],r=" "),a=t.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=a,l=o.exec(e),i+r+((l==null?void 0:l[1])??"")}function Cb(e,n){let t="";for(let l=1;l<e.length-1;++l){const i=e[l];if(!(i==="\r"&&e[l+1]===`
`))if(i===`
`){const{fold:r,offset:a}=Lb(e,l);t+=r,l=a}else if(i==="\\"){let r=e[++l];const a=kb[r];if(a)t+=a;else if(r===`
`)for(r=e[l+1];r===" "||r==="	";)r=e[++l+1];else if(r==="\r"&&e[l+1]===`
`)for(r=e[++l+1];r===" "||r==="	";)r=e[++l+1];else if(r==="x"||r==="u"||r==="U"){const o={x:2,u:4,U:8}[r];t+=Pb(e,l+1,o,n),l+=o}else{const o=e.substr(l-1,2);n(l-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(i===" "||i==="	"){const r=l;let a=e[l+1];for(;a===" "||a==="	";)a=e[++l+1];a!==`
`&&!(a==="\r"&&e[l+2]===`
`)&&(t+=l>r?e.slice(r,l+1):i)}else t+=i}return(e[e.length-1]!=='"'||e.length===1)&&n(e.length,"MISSING_CHAR",'Missing closing "quote'),t}function Lb(e,n){let t="",l=e[n+1];for(;(l===" "||l==="	"||l===`
`||l==="\r")&&!(l==="\r"&&e[n+2]!==`
`);)l===`
`&&(t+=`
`),n+=1,l=e[n+1];return t||(t=" "),{fold:t,offset:n}}const kb={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Pb(e,n,t,l){const i=e.substr(n,t),a=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(a)){const o=e.substr(n-2,t+2);return l(n-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(a)}function pf(e,n,t,l){const{value:i,type:r,comment:a,range:o}=n.type==="block-scalar"?uf(e,n,l):mf(n,e.options.strict,l),s=t?e.directives.tagName(t.source,m=>l(t,"TAG_RESOLVE_FAILED",m)):null;let d;e.options.stringKeys&&e.atKey?d=e.schema[sn]:s?d=Eb(e.schema,i,s,t,l):n.type==="scalar"?d=Nb(e,i,n,l):d=e.schema[sn];let u;try{const m=d.resolve(i,p=>l(t??n,"TAG_RESOLVE_FAILED",p),e.options);u=j(m)?m:new T(m)}catch(m){const p=m instanceof Error?m.message:String(m);l(t??n,"TAG_RESOLVE_FAILED",p),u=new T(i)}return u.range=o,u.source=i,r&&(u.type=r),s&&(u.tag=s),d.format&&(u.format=d.format),a&&(u.comment=a),u}function Eb(e,n,t,l,i){var o;if(t==="!")return e[sn];const r=[];for(const s of e.tags)if(!s.collection&&s.tag===t)if(s.default&&s.test)r.push(s);else return s;for(const s of r)if((o=s.test)!=null&&o.test(n))return s;const a=e.knownTags[t];return a&&!a.collection?(e.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(i(l,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),e[sn])}function Nb({atKey:e,directives:n,schema:t},l,i,r){const a=t.tags.find(o=>{var s;return(o.default===!0||e&&o.default==="key")&&((s=o.test)==null?void 0:s.test(l))})||t[sn];if(t.compat){const o=t.compat.find(s=>{var d;return s.default&&((d=s.test)==null?void 0:d.test(l))})??t[sn];if(a.tag!==o.tag){const s=n.tagString(a.tag),d=n.tagString(o.tag),u=`Value may be parsed as either ${s} or ${d}`;r(i,"TAG_RESOLVE_FAILED",u,!0)}}return a}function Ib(e,n,t){if(n){t??(t=n.length);for(let l=t-1;l>=0;--l){let i=n[l];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=n[++l];(i==null?void 0:i.type)==="space";)e+=i.source.length,i=n[++l];break}}return e}const Ab={composeNode:yf,composeEmptyNode:Hs};function yf(e,n,t,l){const i=e.atKey,{spaceBefore:r,comment:a,anchor:o,tag:s}=t;let d,u=!0;switch(n.type){case"alias":d=Vb(e,n,l),(o||s)&&l(n,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":d=pf(e,n,s,l),o&&(d.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":d=_b(Ab,e,n,t,l),o&&(d.anchor=o.source.substring(1));break;default:{const m=n.type==="error"?n.message:`Unsupported token (type: ${n.type})`;l(n,"UNEXPECTED_TOKEN",m),d=Hs(e,n.offset,void 0,null,t,l),u=!1}}return o&&d.anchor===""&&l(o,"BAD_ALIAS","Anchor cannot be an empty string"),i&&e.options.stringKeys&&(!j(d)||typeof d.value!="string"||d.tag&&d.tag!=="tag:yaml.org,2002:str")&&l(s??n,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(d.spaceBefore=!0),a&&(n.type==="scalar"&&n.source===""?d.comment=a:d.commentBefore=a),e.options.keepSourceTokens&&u&&(d.srcToken=n),d}function Hs(e,n,t,l,{spaceBefore:i,comment:r,anchor:a,tag:o,end:s},d){const u={type:"scalar",offset:Ib(n,t,l),indent:-1,source:""},m=pf(e,u,o,d);return a&&(m.anchor=a.source.substring(1),m.anchor===""&&d(a,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(m.spaceBefore=!0),r&&(m.comment=r,m.range[2]=s),m}function Vb({options:e},{offset:n,source:t,end:l},i){const r=new Rr(t.substring(1));r.source===""&&i(n,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&i(n+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=n+t.length,o=ai(l,a,e.strict,i);return r.range=[n,a,o.offset],o.comment&&(r.comment=o.comment),r}function Tb(e,n,{offset:t,start:l,value:i,end:r},a){const o=Object.assign({_directives:n},e),s=new ol(void 0,o),d={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},u=Jt(l,{indicator:"doc-start",next:i??(r==null?void 0:r[0]),offset:t,onError:a,parentIndent:0,startOnNewline:!0});u.found&&(s.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&a(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),s.contents=i?yf(d,i,u,a):Hs(d,u.end,l,null,u,a);const m=s.contents.range[2],p=ai(r,m,!1,a);return p.comment&&(s.comment=p.comment),s.range=[t,m,p.offset],s}function gl(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:n,source:t}=e;return[n,n+(typeof t=="string"?t.length:1)]}function cc(e){var i;let n="",t=!1,l=!1;for(let r=0;r<e.length;++r){const a=e[r];switch(a[0]){case"#":n+=(n===""?"":l?`

`:`
`)+(a.substring(1)||" "),t=!0,l=!1;break;case"%":((i=e[r+1])==null?void 0:i[0])!=="#"&&(r+=1),t=!1;break;default:t||(l=!0),t=!1}}return{comment:n,afterEmptyLine:l}}class qs{constructor(n={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,l,i,r)=>{const a=gl(t);r?this.warnings.push(new df(a,l,i)):this.errors.push(new et(a,l,i))},this.directives=new _e({version:n.version||"1.2"}),this.options=n}decorate(n,t){const{comment:l,afterEmptyLine:i}=cc(this.prelude);if(l){const r=n.contents;if(t)n.comment=n.comment?`${n.comment}
${l}`:l;else if(i||n.directives.docStart||!r)n.commentBefore=l;else if(J(r)&&!r.flow&&r.items.length>0){let a=r.items[0];K(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${l}
${o}`:l}else{const a=r.commentBefore;r.commentBefore=a?`${l}
${a}`:l}}t?(Array.prototype.push.apply(n.errors,this.errors),Array.prototype.push.apply(n.warnings,this.warnings)):(n.errors=this.errors,n.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:cc(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(n,t=!1,l=-1){for(const i of n)yield*this.next(i);yield*this.end(t,l)}*next(n){switch(n.type){case"directive":this.directives.add(n.source,(t,l,i)=>{const r=gl(n);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",l,i)}),this.prelude.push(n.source),this.atDirectives=!0;break;case"document":{const t=Tb(this.options,this.directives,n,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(n,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(n.source);break;case"error":{const t=n.source?`${n.message}: ${JSON.stringify(n.source)}`:n.message,l=new et(gl(n),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(l):this.doc.errors.push(l);break}case"doc-end":{if(!this.doc){const l="Unexpected doc-end without preceding document";this.errors.push(new et(gl(n),"UNEXPECTED_TOKEN",l));break}this.doc.directives.docEnd=!0;const t=ai(n.end,n.offset+n.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const l=this.doc.comment;this.doc.comment=l?`${l}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new et(gl(n),"UNEXPECTED_TOKEN",`Unsupported token ${n.type}`))}}*end(n=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(n){const l=Object.assign({_directives:this.directives},this.options),i=new ol(void 0,l);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}function Db(e,n=!0,t){if(e){const l=(i,r,a)=>{const o=typeof i=="number"?i:Array.isArray(i)?i[0]:i.offset;if(t)t(o,r,a);else throw new et([o,o+1],r,a)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return mf(e,n,l);case"block-scalar":return uf({options:{strict:n}},e,l)}}return null}function Gb(e,n){const{implicitKey:t=!1,indent:l,inFlow:i=!1,offset:r=-1,type:a="PLAIN"}=n,o=ii({type:a,value:e},{implicitKey:t,indent:l>0?" ".repeat(l):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}}),s=n.end??[{type:"newline",offset:-1,indent:l,source:`
`}];switch(o[0]){case"|":case">":{const d=o.indexOf(`
`),u=o.substring(0,d),m=o.substring(d+1)+`
`,p=[{type:"block-scalar-header",offset:r,indent:l,source:u}];return gf(p,s)||p.push({type:"newline",offset:-1,indent:l,source:`
`}),{type:"block-scalar",offset:r,indent:l,props:p,source:m}}case'"':return{type:"double-quoted-scalar",offset:r,indent:l,source:o,end:s};case"'":return{type:"single-quoted-scalar",offset:r,indent:l,source:o,end:s};default:return{type:"scalar",offset:r,indent:l,source:o,end:s}}}function Mb(e,n,t={}){let{afterKey:l=!1,implicitKey:i=!1,inFlow:r=!1,type:a}=t,o="indent"in e?e.indent:null;if(l&&typeof o=="number"&&(o+=2),!a)switch(e.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const d=e.props[0];if(d.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=d.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const s=ii({type:a,value:n},{implicitKey:i||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(s[0]){case"|":case">":Fb(e,s);break;case'"':Aa(e,s,"double-quoted-scalar");break;case"'":Aa(e,s,"single-quoted-scalar");break;default:Aa(e,s,"scalar")}}function Fb(e,n){const t=n.indexOf(`
`),l=n.substring(0,t),i=n.substring(t+1)+`
`;if(e.type==="block-scalar"){const r=e.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=l,e.source=i}else{const{offset:r}=e,a="indent"in e?e.indent:-1,o=[{type:"block-scalar-header",offset:r,indent:a,source:l}];gf(o,"end"in e?e.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const s of Object.keys(e))s!=="type"&&s!=="offset"&&delete e[s];Object.assign(e,{type:"block-scalar",indent:a,props:o,source:i})}}function gf(e,n){if(n)for(const t of n)switch(t.type){case"space":case"comment":e.push(t);break;case"newline":return e.push(t),!0}return!1}function Aa(e,n,t){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=t,e.source=n;break;case"block-scalar":{const l=e.props.slice(1);let i=n.length;e.props[0].type==="block-scalar-header"&&(i-=e.props[0].source.length);for(const r of l)r.offset+=i;delete e.props,Object.assign(e,{type:t,source:n,end:l});break}case"block-map":case"block-seq":{const i={type:"newline",offset:e.offset+n.length,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:t,source:n,end:[i]});break}default:{const l="indent"in e?e.indent:-1,i="end"in e&&Array.isArray(e.end)?e.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(e))r!=="type"&&r!=="offset"&&delete e[r];Object.assign(e,{type:t,indent:l,source:n,end:i})}}}const Ob=e=>"type"in e?wr(e):zi(e);function wr(e){switch(e.type){case"block-scalar":{let n="";for(const t of e.props)n+=wr(t);return n+e.source}case"block-map":case"block-seq":{let n="";for(const t of e.items)n+=zi(t);return n}case"flow-collection":{let n=e.start.source;for(const t of e.items)n+=zi(t);for(const t of e.end)n+=t.source;return n}case"document":{let n=zi(e);if(e.end)for(const t of e.end)n+=t.source;return n}default:{let n=e.source;if("end"in e&&e.end)for(const t of e.end)n+=t.source;return n}}}function zi({start:e,key:n,sep:t,value:l}){let i="";for(const r of e)i+=r.source;if(n&&(i+=wr(n)),t)for(const r of t)i+=r.source;return l&&(i+=wr(l)),i}const Do=Symbol("break visit"),Bb=Symbol("skip children"),bf=Symbol("remove item");function st(e,n){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),hf(Object.freeze([]),e,n)}st.BREAK=Do;st.SKIP=Bb;st.REMOVE=bf;st.itemAtPath=(e,n)=>{let t=e;for(const[l,i]of n){const r=t==null?void 0:t[l];if(r&&"items"in r)t=r.items[i];else return}return t};st.parentCollection=(e,n)=>{const t=st.itemAtPath(e,n.slice(0,-1)),l=n[n.length-1][0],i=t==null?void 0:t[l];if(i&&"items"in i)return i;throw new Error("Parent collection not found")};function hf(e,n,t){let l=t(n,e);if(typeof l=="symbol")return l;for(const i of["key","value"]){const r=n[i];if(r&&"items"in r){for(let a=0;a<r.items.length;++a){const o=hf(Object.freeze(e.concat([[i,a]])),r.items[a],t);if(typeof o=="number")a=o-1;else{if(o===Do)return Do;o===bf&&(r.items.splice(a,1),a-=1)}}typeof l=="function"&&i==="key"&&(l=l(n,e))}}return typeof l=="function"?l(n,e):l}const Yr="\uFEFF",Jr="",Xr="",Xl="",Rb=e=>!!e&&"items"in e,jb=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function Ub(e){switch(e){case Yr:return"<BOM>";case Jr:return"<DOC>";case Xr:return"<FLOW_END>";case Xl:return"<SCALAR>";default:return JSON.stringify(e)}}function _f(e){switch(e){case Yr:return"byte-order-mark";case Jr:return"doc-mode";case Xr:return"flow-error-end";case Xl:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const Wb=Object.freeze(Object.defineProperty({__proto__:null,BOM:Yr,DOCUMENT:Jr,FLOW_END:Xr,SCALAR:Xl,createScalarToken:Gb,isCollection:Rb,isScalar:jb,prettyToken:Ub,resolveAsScalar:Db,setScalarValue:Mb,stringify:Ob,tokenType:_f,visit:st},Symbol.toStringTag,{value:"Module"}));function $e(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const uc=new Set("0123456789ABCDEFabcdef"),Hb=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Ii=new Set(",[]{}"),qb=new Set(` ,[]{}
\r	`),Va=e=>!e||qb.has(e);class xf{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(n,t=!1){if(n){if(typeof n!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+n:n,this.lineEndPos=null}this.atEnd=!t;let l=this.next??"stream";for(;l&&(t||this.hasChars(1));)l=yield*this.parseNext(l)}atLineEnd(){let n=this.pos,t=this.buffer[n];for(;t===" "||t==="	";)t=this.buffer[++n];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[n+1]===`
`:!1}charAt(n){return this.buffer[this.pos+n]}continueScalar(n){let t=this.buffer[n];if(this.indentNext>0){let l=0;for(;t===" ";)t=this.buffer[++l+n];if(t==="\r"){const i=this.buffer[l+n+1];if(i===`
`||!i&&!this.atEnd)return n+l+1}return t===`
`||l>=this.indentNext||!t&&!this.atEnd?n+l:-1}if(t==="-"||t==="."){const l=this.buffer.substr(n,3);if((l==="---"||l==="...")&&$e(this.buffer[n+3]))return-1}return n}getLine(){let n=this.lineEndPos;return(typeof n!="number"||n!==-1&&n<this.pos)&&(n=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=n),n===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[n-1]==="\r"&&(n-=1),this.buffer.substring(this.pos,n))}hasChars(n){return this.pos+n<=this.buffer.length}setNext(n){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=n,null}peek(n){return this.buffer.substr(this.pos,n)}*parseNext(n){switch(n){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let n=this.getLine();if(n===null)return this.setNext("stream");if(n[0]===Yr&&(yield*this.pushCount(1),n=n.substring(1)),n[0]==="%"){let t=n.length,l=n.indexOf("#");for(;l!==-1;){const r=n[l-1];if(r===" "||r==="	"){t=l-1;break}else l=n.indexOf("#",l+1)}for(;;){const r=n[t-1];if(r===" "||r==="	")t-=1;else break}const i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(n.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(n.length-t),yield*this.pushNewline(),"stream"}return yield Jr,yield*this.parseLineStart()}*parseLineStart(){const n=this.charAt(0);if(!n&&!this.atEnd)return this.setNext("line-start");if(n==="-"||n==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&$e(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!$e(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[n,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((n==="-"||n==="?"||n===":")&&$e(t)){const l=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=l,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const n=this.getLine();if(n===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(n[t]){case"#":yield*this.pushCount(n.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Va),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(n.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let n,t,l=-1;do n=yield*this.pushNewline(),n>0?(t=yield*this.pushSpaces(!1),this.indentValue=l=t):t=0,t+=yield*this.pushSpaces(!0);while(n+t>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((l!==-1&&l<this.indentNext&&i[0]!=="#"||l===0&&(i.startsWith("---")||i.startsWith("..."))&&$e(i[3]))&&!(l===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield Xr,yield*this.parseLineStart();let r=0;for(;i[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),i[r]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Va),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||$e(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const n=this.charAt(0);let t=this.buffer.indexOf(n,this.pos+1);if(n==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const l=this.buffer.substring(0,t);let i=l.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const r=this.continueScalar(i+1);if(r===-1)break;i=l.indexOf(`
`,r)}i!==-1&&(t=i-(l[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let n=this.pos;for(;;){const t=this.buffer[++n];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>$e(t)||t==="#")}*parseBlockScalar(){let n=this.pos-1,t=0,l;e:for(let r=this.pos;l=this.buffer[r];++r)switch(l){case" ":t+=1;break;case`
`:n=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!l&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(n+1);if(r===-1)break;n=this.buffer.indexOf(`
`,r)}while(n!==-1);if(n===-1){if(!this.atEnd)return this.setNext("block-scalar");n=this.buffer.length}}let i=n+1;for(l=this.buffer[i];l===" ";)l=this.buffer[++i];if(l==="	"){for(;l==="	"||l===" "||l==="\r"||l===`
`;)l=this.buffer[++i];n=i-1}else if(!this.blockScalarKeep)do{let r=n-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)n=r;else break}while(!0);return yield Xl,yield*this.pushToIndex(n+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const n=this.flowLevel>0;let t=this.pos-1,l=this.pos-1,i;for(;i=this.buffer[++l];)if(i===":"){const r=this.buffer[l+1];if($e(r)||n&&Ii.has(r))break;t=l}else if($e(i)){let r=this.buffer[l+1];if(i==="\r"&&(r===`
`?(l+=1,i=`
`,r=this.buffer[l+1]):t=l),r==="#"||n&&Ii.has(r))break;if(i===`
`){const a=this.continueScalar(l+1);if(a===-1)break;l=Math.max(l,a-2)}}else{if(n&&Ii.has(i))break;t=l}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Xl,yield*this.pushToIndex(t+1,!0),n?"flow":"doc")}*pushCount(n){return n>0?(yield this.buffer.substr(this.pos,n),this.pos+=n,n):0}*pushToIndex(n,t){const l=this.buffer.slice(this.pos,n);return l?(yield l,this.pos+=l.length,l.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Va))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const n=this.flowLevel>0,t=this.charAt(1);if($e(t)||n&&Ii.has(t))return n?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let n=this.pos+2,t=this.buffer[n];for(;!$e(t)&&t!==">";)t=this.buffer[++n];return yield*this.pushToIndex(t===">"?n+1:n,!1)}else{let n=this.pos+1,t=this.buffer[n];for(;t;)if(Hb.has(t))t=this.buffer[++n];else if(t==="%"&&uc.has(this.buffer[n+1])&&uc.has(this.buffer[n+2]))t=this.buffer[n+=3];else break;return yield*this.pushToIndex(n,!1)}}*pushNewline(){const n=this.buffer[this.pos];return n===`
`?yield*this.pushCount(1):n==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(n){let t=this.pos-1,l;do l=this.buffer[++t];while(l===" "||n&&l==="	");const i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(n){let t=this.pos,l=this.buffer[t];for(;!n(l);)l=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class vf{constructor(){this.lineStarts=[],this.addNewLine=n=>this.lineStarts.push(n),this.linePos=n=>{let t=0,l=this.lineStarts.length;for(;t<l;){const r=t+l>>1;this.lineStarts[r]<n?t=r+1:l=r}if(this.lineStarts[t]===n)return{line:t+1,col:1};if(t===0)return{line:0,col:n};const i=this.lineStarts[t-1];return{line:t,col:n-i+1}}}}function Cn(e,n){for(let t=0;t<e.length;++t)if(e[t].type===n)return!0;return!1}function mc(e){for(let n=0;n<e.length;++n)switch(e[n].type){case"space":case"comment":case"newline":break;default:return n}return-1}function wf(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Ai(e){switch(e.type){case"document":return e.start;case"block-map":{const n=e.items[e.items.length-1];return n.sep??n.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function gt(e){var t;if(e.length===0)return[];let n=e.length;e:for(;--n>=0;)switch(e[n].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=e[++n])==null?void 0:t.type)==="space";);return e.splice(n,e.length)}function fc(e){if(e.start.type==="flow-seq-start")for(const n of e.items)n.sep&&!n.value&&!Cn(n.start,"explicit-key-ind")&&!Cn(n.sep,"map-value-ind")&&(n.key&&(n.value=n.key),delete n.key,wf(n.value)?n.value.end?Array.prototype.push.apply(n.value.end,n.sep):n.value.end=n.sep:Array.prototype.push.apply(n.start,n.sep),delete n.sep)}class $s{constructor(n){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new xf,this.onNewLine=n}*parse(n,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const l of this.lexer.lex(n,t))yield*this.next(l);t||(yield*this.end())}*next(n){if(this.source=n,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=n.length;return}const t=_f(n);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+n.length);break;case"space":this.atNewLine&&n[0]===" "&&(this.indent+=n.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=n.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=n.length}else{const l=`Not a YAML token: ${n}`;yield*this.pop({type:"error",offset:this.offset,message:l,source:n}),this.offset+=n.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const n=this.peek(1);if(this.type==="doc-end"&&(!n||n.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!n)return yield*this.stream();switch(n.type){case"document":return yield*this.document(n);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(n);case"block-scalar":return yield*this.blockScalar(n);case"block-map":return yield*this.blockMap(n);case"block-seq":return yield*this.blockSequence(n);case"flow-collection":return yield*this.flowCollection(n);case"doc-end":return yield*this.documentEnd(n)}yield*this.pop()}peek(n){return this.stack[this.stack.length-n]}*pop(n){const t=n??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const l=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in l?l.indent:0:t.type==="flow-collection"&&l.type==="document"&&(t.indent=0),t.type==="flow-collection"&&fc(t),l.type){case"document":l.value=t;break;case"block-scalar":l.props.push(t);break;case"block-map":{const i=l.items[l.items.length-1];if(i.value){l.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=l.items[l.items.length-1];i.value?l.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=l.items[l.items.length-1];!i||i.value?l.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((l.type==="document"||l.type==="block-map"||l.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&mc(i.start)===-1&&(t.indent===0||i.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(l.type==="document"?l.end=i.start:l.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const n={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&n.start.push(this.sourceToken),this.stack.push(n);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(n){if(n.value)return yield*this.lineEnd(n);switch(this.type){case"doc-start":{mc(n.start)!==-1?(yield*this.pop(),yield*this.step()):n.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":n.start.push(this.sourceToken);return}const t=this.startBlockValue(n);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(n){if(this.type==="map-value-ind"){const t=Ai(this.peek(2)),l=gt(t);let i;n.end?(i=n.end,i.push(this.sourceToken),delete n.end):i=[this.sourceToken];const r={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:l,key:n,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(n)}*blockScalar(n){switch(this.type){case"space":case"comment":case"newline":n.props.push(this.sourceToken);return;case"scalar":if(n.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(n){var l;const t=n.items[n.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0,r=Array.isArray(i)?i[i.length-1]:void 0;(r==null?void 0:r.type)==="comment"?i==null||i.push(this.sourceToken):n.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)n.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,n.indent)){const i=n.items[n.items.length-2],r=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),n.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=n.indent){const i=!this.onKeyLine&&this.indent===n.indent,r=i&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(r&&t.sep&&!t.value){const o=[];for(let s=0;s<t.sep.length;++s){const d=t.sep[s];switch(d.type){case"newline":o.push(s);break;case"space":break;case"comment":d.indent>n.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(a=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(a.push(this.sourceToken),n.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(a.push(this.sourceToken),n.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)n.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Cn(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(wf(t.key)&&!Cn(t.sep,"newline")){const o=gt(t.start),s=t.key,d=t.sep;d.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:s,sep:d}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(Cn(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=gt(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?n.items.push({start:a,key:null,sep:[this.sourceToken]}):Cn(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);r||t.value?(n.items.push({start:a,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(n);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Cn(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&n.items.push({start:a});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(n){var l;const t=n.items[n.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0,r=Array.isArray(i)?i[i.length-1]:void 0;(r==null?void 0:r.type)==="comment"?i==null||i.push(this.sourceToken):n.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)n.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,n.indent)){const i=n.items[n.items.length-2],r=(l=i==null?void 0:i.value)==null?void 0:l.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),n.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=n.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==n.indent)break;t.value||Cn(t.start,"seq-item-ind")?n.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>n.indent){const i=this.startBlockValue(n);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(n){const t=n.items[n.items.length-1];if(this.type==="flow-error-end"){let l;do yield*this.pop(),l=this.peek(1);while(l&&l.type==="flow-collection")}else if(n.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?n.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?n.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?n.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!t||t.value?n.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":n.end.push(this.sourceToken);return}const l=this.startBlockValue(n);l?this.stack.push(l):(yield*this.pop(),yield*this.step())}else{const l=this.peek(2);if(l.type==="block-map"&&(this.type==="map-value-ind"&&l.indent===n.indent||this.type==="newline"&&!l.items[l.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&l.type!=="flow-collection"){const i=Ai(l),r=gt(i);fc(n);const a=n.end.splice(1,n.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:r,key:n,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(n)}}flowScalar(n){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:n,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(n){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Ai(n),l=gt(t);return l.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Ai(n),l=gt(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(n,t){return this.type!=="comment"||this.indent<=t?!1:n.every(l=>l.type==="newline"||l.type==="space")}*documentEnd(n){this.type!=="doc-mode"&&(n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(n){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Sf(e){const n=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||n&&new vf||null,prettyErrors:n}}function $b(e,n={}){const{lineCounter:t,prettyErrors:l}=Sf(n),i=new $s(t==null?void 0:t.addNewLine),r=new qs(n),a=Array.from(r.compose(i.parse(e)));if(l&&t)for(const o of a)o.errors.forEach(vr(e,t)),o.warnings.forEach(vr(e,t));return a.length>0?a:Object.assign([],{empty:!0},r.streamInfo())}function Cf(e,n={}){const{lineCounter:t,prettyErrors:l}=Sf(n),i=new $s(t==null?void 0:t.addNewLine),r=new qs(n);let a=null;for(const o of r.compose(i.parse(e),!0,e.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new et(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return l&&t&&(a.errors.forEach(vr(e,t)),a.warnings.forEach(vr(e,t))),a}function zb(e,n,t){let l;typeof n=="function"?l=n:t===void 0&&n&&typeof n=="object"&&(t=n);const i=Cf(e,t);if(!i)return null;if(i.warnings.forEach(r=>Wm(i.options.logLevel,r)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:l},t))}function Kb(e,n,t){let l=null;if(typeof n=="function"||Array.isArray(n)?l=n:t===void 0&&n&&(t=n),typeof t=="string"&&(t=t.length),typeof t=="number"){const i=Math.round(t);t=i<1?void 0:i>8?{indent:8}:{indent:i}}if(e===void 0){const{keepUndefined:i}=t??n??{};if(!i)return}return ut(e)&&!l?e.toString(t):new ol(e,l,t).toString(t)}const Lf=Object.freeze(Object.defineProperty({__proto__:null,Alias:Rr,CST:Wb,Composer:qs,Document:ol,Lexer:xf,LineCounter:vf,Pair:ge,Parser:$s,Scalar:T,Schema:Qr,YAMLError:Ws,YAMLMap:Ae,YAMLParseError:et,YAMLSeq:Rn,YAMLWarning:df,isAlias:Hn,isCollection:J,isDocument:ut,isMap:ll,isNode:Z,isPair:K,isScalar:j,isSeq:il,parse:zb,parseAllDocuments:$b,parseDocument:Cf,stringify:Kb,visit:mt,visitAsync:Br},Symbol.toStringTag,{value:"Module"})),Qb=`protocols:
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    label_text: Standard
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
    description: Voltage LL
    longdescription: Line-to-line RMS voltage at the inverter output (3ϕ systems).
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
  point: LNV
  block: fixed
  entry:
    name: LNV
    description: Voltage LN
    longdescription: Line-to-neutral RMS voltage at the inverter output.
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
    label_text: Extended
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
  point: FreqWattOpenLoopResponseTime
  block: fixed
  entry:
    name: FreqWattOpenLoopResponseTime
    description: Frequency-Watt Open-Loop Response Time
    longdescription: Value from Site Configuration Grid/Grid Support/Freq-Watt (Frequency-Active Power). Response time used for open-loop Frequency-Active Power changes.
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
`,Yb=`# Label Help Text
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
`;function Jb(e){return e==null?"":typeof e=="number"?String(Math.trunc(e)):String(e).trim()}function Xb(e){return e==null?"":String(e).trim()}function Zb(){try{const e=Lf.parse(Qb);return((e==null?void 0:e.protocols)??[]).map(t=>{var a;if(!t.entry)return null;const l=Xb(t.point??t.entry.name),i=Jb(t.model);if(!l||!i)return null;const r=Array.isArray(t.labels)?t.labels:Array.isArray((a=t.entry)==null?void 0:a.labels)?t.entry.labels:[];return{block:String(t.block??"fixed"),entry:t.entry,model:i,point:l,labels:r}}).filter(t=>!!t)}catch(e){return console.error("Failed to parse ss40k_inverter.yaml",e),[]}}const bt=Zb();let Go=null;try{Go=Lf.parse(Yb)}catch(e){console.error("Failed to parse label_help.yaml",e)}function Xt(e,n){if(!Go)return null;const t=Go.label_families[e];if(!t)return null;if(n){const l=t.labels[n];return(l==null?void 0:l.help)||null}return t.help||null}function eh(e,n){const t=new Map;return e.forEach(l=>{const i=Array.isArray(l.labels)?l.labels:[];if(i.length===0)return;if(n.length===0){const d=i[0];if(d){const u=d.label_text;t.has(u)||t.set(u,new Map);const m=t.get(u);m.has("")||m.set("",[]),m.get("").push(l)}return}const r=n[0],a=i.find(d=>d.label_family===r);if(!a)return;const o=a.label_text;t.has(o)||t.set(o,new Map);const s=t.get(o);if(n.length>1){const u=n.slice(1)[0],m=i.find(g=>g.label_family===u),p=(m==null?void 0:m.label_text)||"";s.has(p)||s.set(p,[]),s.get(p).push(l)}else s.has("")||s.set("",[]),s.get("").push(l)}),t}function nh(e){const n=new Map;return e.forEach(t=>{(Array.isArray(t.labels)?t.labels:[]).forEach(i=>{n.has(i.label_family)||n.set(i.label_family,new Set),n.get(i.label_family).add(i.label_text)})}),n}const Ta=[{bg:"bg-blue-100",text:"text-blue-800",border:"border-blue-300"},{bg:"bg-green-100",text:"text-green-800",border:"border-green-300"},{bg:"bg-purple-100",text:"text-purple-800",border:"border-purple-300"},{bg:"bg-yellow-100",text:"text-yellow-800",border:"border-yellow-300"},{bg:"bg-pink-100",text:"text-pink-800",border:"border-pink-300"},{bg:"bg-indigo-100",text:"text-indigo-800",border:"border-indigo-300"},{bg:"bg-red-100",text:"text-red-800",border:"border-red-300"},{bg:"bg-teal-100",text:"text-teal-800",border:"border-teal-300"},{bg:"bg-orange-100",text:"text-orange-800",border:"border-orange-300"},{bg:"bg-cyan-100",text:"text-cyan-800",border:"border-cyan-300"},{bg:"bg-violet-100",text:"text-violet-800",border:"border-violet-300"},{bg:"bg-amber-100",text:"text-amber-800",border:"border-amber-300"},{bg:"bg-lime-100",text:"text-lime-800",border:"border-lime-300"},{bg:"bg-emerald-100",text:"text-emerald-800",border:"border-emerald-300"},{bg:"bg-sky-100",text:"text-sky-800",border:"border-sky-300"},{bg:"bg-rose-100",text:"text-rose-800",border:"border-rose-300"},{bg:"bg-fuchsia-100",text:"text-fuchsia-800",border:"border-fuchsia-300"},{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"},{bg:"bg-stone-100",text:"text-stone-800",border:"border-stone-300"},{bg:"bg-zinc-100",text:"text-zinc-800",border:"border-zinc-300"}],pc=new Map([["component",0],["feature",1],["detail_level",2],["level of detail",2],["info",3],["unit",4]]);function Ut(e,n){const t=e.toLowerCase();if(pc.has(t)){const r=pc.get(t);return Ta[r]}const l=t.split("").reduce((r,a)=>(r<<5)-r+a.charCodeAt(0),0),i=4+Math.abs(l)%(Ta.length-4);return Ta[i]}function th({value:e,onChange:n}){return c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:c.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),c.jsx("input",{className:"w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none focus:ring",placeholder:"search",value:e,onChange:t=>n(t.target.value)})]})}function lh({show:e,onToggle:n}){return c.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 text-sm",children:[c.jsx("input",{type:"checkbox",className:"h-4 w-4",checked:e,onChange:t=>n(t.target.checked)}),"Show help text"]})}function ih({firstLevel:e,secondLevelMap:n,selected:t,toggle:l,showHelp:i,onUpdateInverters:r}){return c.jsxs("details",{className:"group border-b py-2",open:!0,children:[c.jsxs("summary",{className:"cursor-pointer list-none font-semibold",children:[c.jsx("span",{className:"mr-1",children:"▾"}),e]}),c.jsx("div",{className:"mt-2 ml-1 space-y-2",children:[...n.entries()].map(([a,o])=>a===""?c.jsx("div",{className:"ml-2 space-y-1",children:o.map(s=>{const d=`${s.model}:${s.point}`,u=s.entry.description||d,m=s.entry.longdescription||u,p=s.entry.unit&&s.entry.unit!=="N/A"?` (${s.entry.unit})`:"",g=t.has(d),x=g?t.get(d)||new Set(["001"]):new Set,b=Array.isArray(s.labels)?s.labels:[];return c.jsxs("div",{className:"rounded-md px-2 py-1 hover:bg-gray-50",children:[c.jsx("div",{className:"flex items-start gap-2 flex-wrap",children:c.jsxs("label",{className:"flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0",children:[c.jsx("input",{type:"checkbox",checked:g,onChange:()=>l(d),className:"h-4 w-4 flex-shrink-0"}),c.jsxs("span",{className:"text-sm",children:[u,p]}),g&&c.jsxs("div",{className:"ml-auto flex items-center gap-1 flex-shrink-0",onClick:_=>_.stopPropagation(),children:[c.jsx("span",{className:"text-xs text-gray-600",children:"Inverter SN:"}),c.jsx(Mo,{selectedInverters:x,onChange:_=>r(d,_)})]}),i&&b.length>0&&c.jsx("div",{className:"ml-2 flex flex-wrap gap-1 w-full",children:b.map((_,y)=>{const f=Ut(_.label_family,_.label_text),v=Xt(_.label_family,_.label_text)||`${_.label_family}: ${_.label_text}`;return c.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${f.bg} ${f.text} ${f.border}`,title:v,children:_.label_text},y)})}),!i&&c.jsx("span",{className:"ml-1 text-gray-400",title:m,"aria-label":"Help",children:"ⓘ"})]})}),i&&c.jsx("div",{className:"pl-6 text-xs text-gray-500 whitespace-pre-wrap",children:m})]},d)})},""):c.jsxs("details",{className:"ml-2 group border-l pl-2",open:!0,children:[c.jsxs("summary",{className:"cursor-pointer list-none font-medium text-gray-700",children:[c.jsx("span",{className:"mr-1",children:"▾"}),a]}),c.jsx("div",{className:"mt-1 ml-1 space-y-1",children:o.map(s=>{const d=`${s.model}:${s.point}`,u=s.entry.description||d,m=s.entry.longdescription||u,p=s.entry.unit&&s.entry.unit!=="N/A"?` (${s.entry.unit})`:"",g=t.has(d),x=g?t.get(d)||new Set(["001"]):new Set,b=Array.isArray(s.labels)?s.labels:[];return c.jsxs("div",{className:"rounded-md px-2 py-1 hover:bg-gray-50",children:[c.jsx("div",{className:"flex items-start gap-2 flex-wrap",children:c.jsxs("label",{className:"flex cursor-pointer items-center gap-2 flex-wrap flex-1 min-w-0",children:[c.jsx("input",{type:"checkbox",checked:g,onChange:()=>l(d),className:"h-4 w-4 flex-shrink-0"}),c.jsxs("span",{className:"text-sm",children:[u,p]}),g&&c.jsxs("div",{className:"ml-auto flex items-center gap-1 flex-shrink-0",onClick:_=>_.stopPropagation(),children:[c.jsx("span",{className:"text-xs text-gray-600",children:"Inverter SN:"}),c.jsx(Mo,{selectedInverters:x,onChange:_=>r(d,_)})]}),i&&b.length>0&&c.jsx("div",{className:"ml-2 flex flex-wrap gap-1 w-full",children:b.map((_,y)=>{const f=Ut(_.label_family,_.label_text),v=Xt(_.label_family,_.label_text)||`${_.label_family}: ${_.label_text}`;return c.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${f.bg} ${f.text} ${f.border}`,title:v,children:_.label_text},y)})}),!i&&c.jsx("span",{className:"ml-1 text-gray-400",title:m,"aria-label":"Help",children:"ⓘ"})]})}),i&&c.jsx("div",{className:"pl-6 text-xs text-gray-500 whitespace-pre-wrap",children:m})]},d)})})]},a))})]})}function rh({family:e,labels:n,onClose:t}){const l=Xt(e),i=[...n].sort();return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:t,children:c.jsxs("div",{className:"relative max-h-[80vh] w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl",onClick:r=>r.stopPropagation(),children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("h2",{className:"text-xl font-semibold text-gray-800",children:[e," Labels"]}),c.jsx("button",{onClick:t,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:c.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l&&c.jsxs("div",{className:"mb-4 rounded-lg bg-blue-50 p-3 text-sm text-gray-700",children:[c.jsxs("strong",{className:"font-semibold",children:["About ",e,":"]})," ",l]}),c.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:c.jsx("div",{className:"space-y-4",children:i.map(r=>{const a=Xt(e,r);return c.jsxs("div",{className:"border-b border-gray-200 pb-3 last:border-b-0",children:[c.jsx("div",{className:"mb-1 font-medium text-gray-800",children:r}),a?c.jsx("div",{className:"text-sm text-gray-600",children:a}):c.jsx("div",{className:"text-sm italic text-gray-400",children:"No help text available"})]},r)})})})]})})}function ah({allLabels:e,selectedLabels:n,onToggleLabel:t,onClearFilters:l}){const[i,r]=Ie.useState(200),[a,o]=Ie.useState(!1),[s,d]=Ie.useState(null),u=Ie.useRef(null),m=g=>{g.preventDefault(),o(!0)};Ie.useEffect(()=>{if(!a)return;const g=b=>{if(u.current){const _=u.current.getBoundingClientRect(),y=b.clientY-_.top;y>=100&&y<=600&&r(y)}},x=()=>{o(!1)};return document.addEventListener("mousemove",g),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",x)}},[a]);const p=Array.from(n).map(g=>{const[x,b]=g.split(":",2);return{family:x,text:b}});return c.jsx("div",{ref:u,className:"mb-3 rounded-lg border bg-gray-50 p-2",children:c.jsxs("details",{className:"group",children:[c.jsx("summary",{className:"cursor-pointer list-none",children:c.jsx("div",{className:"mb-1 flex items-start justify-between gap-2",children:c.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[c.jsx("svg",{className:"h-4 w-4 text-gray-600 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),c.jsx("span",{className:"flex-shrink-0",children:"Filters"}),c.jsx("span",{className:"mr-1 group-open:rotate-90 transition-transform flex-shrink-0",children:"▸"}),p.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"flex flex-wrap items-center gap-1 ml-2 min-w-0",children:p.map(({family:g,text:x})=>{const b=Ut(g);return c.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${b.bg} ${b.text} ${b.border} border-2 font-semibold flex-shrink-0`,children:x},`${g}:${x}`)})}),c.jsx("button",{onClick:g=>{g.stopPropagation(),l()},className:"ml-2 flex-shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors",title:"Clear all filters","aria-label":"Clear all filters",children:c.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})]})})}),c.jsx("div",{className:"space-y-0.5 overflow-auto mt-2",style:{height:`${i}px`},children:[...e.entries()].map(([g,x])=>{const b=Xt(g),_=Ut(g),y=Array.from(x).some(f=>n.has(`${g}:${f}`));return c.jsxs("div",{className:"flex items-center gap-1.5 text-xs py-0.5",children:[c.jsxs("button",{onClick:()=>d(g),className:`flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold transition-colors flex-shrink-0 w-28 justify-between ${y?`${_.bg} ${_.text} ${_.border} border-2`:`${_.bg} ${_.text} ${_.border} border`}`,title:b||`View help for ${g} labels`,"aria-label":`Help for ${g}`,children:[c.jsx("span",{className:"truncate",children:g}),c.jsx("svg",{className:`h-3 w-3 flex-shrink-0 ${_.text}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),c.jsx("div",{className:"flex flex-wrap items-center gap-1 flex-1",children:[...x].sort().map(f=>{const h=`${g}:${f}`,v=n.has(h),w=Ut(g),C=Xt(g,f);return c.jsx("button",{onClick:()=>t(g,f),className:`rounded border px-1.5 py-0.5 text-xs transition-all ${v?`${w.bg} ${w.text} ${w.border} border-2 font-semibold`:`bg-white ${w.text} ${w.border} hover:opacity-80`}`,style:v?void 0:{borderColor:"currentColor"},title:C||`${g}: ${f}`,children:f},h)})})]},g)})}),s&&c.jsx(rh,{family:s,labels:e.get(s)||new Set,onClose:()=>d(null)}),c.jsx("div",{onMouseDown:m,className:"mt-1 h-1 cursor-ns-resize rounded bg-gray-300 hover:bg-gray-400 transition-colors",title:"Drag to resize"})]})})}const Da=["001","002","003"];function Mo({selectedInverters:e,onChange:n}){const[t,l]=Ie.useState(!1),i=Ie.useRef(null),r=e.size===Da.length,a=r?"All Inverters":Array.from(e).sort().join(", ");Ie.useEffect(()=>{const d=u=>{i.current&&!i.current.contains(u.target)&&l(!1)};if(t)return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[t]);const o=()=>{n(r?new Set(["001"]):new Set(Da))},s=d=>{const u=new Set(e);u.has(d)?(u.delete(d),u.size===0&&u.add("001")):u.add(d),n(u)};return c.jsxs("div",{className:"relative",ref:i,children:[c.jsxs("button",{type:"button",onClick:()=>l(!t),className:"text-xs border border-blue-300 rounded px-2 py-1 bg-white text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1",children:[c.jsx("span",{children:a}),c.jsx("svg",{className:`h-3 w-3 transition-transform ${t?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),t&&c.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]",children:c.jsxs("div",{className:"py-1",children:[c.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:r,onChange:o,className:"h-3 w-3"}),c.jsx("span",{className:"text-xs text-gray-700",children:"All Inverters"})]}),Da.map(d=>c.jsxs("label",{className:"flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:e.has(d),onChange:()=>s(d),className:"h-3 w-3"}),c.jsx("span",{className:"text-xs text-gray-700",children:d})]},d))]})})]})}function oh({selectedPoints:e,protocols:n,onUpdateInverters:t}){const l=Array.from(e.entries()).map(([i,r])=>{const[a,o]=i.split(":"),s=n.find(u=>u.model===a&&u.point===o),d=s&&(s.entry.description||s.entry.name)||o;return{key:i,name:d,inverters:r}}).filter(i=>i.name);return c.jsxs("div",{className:"w-full h-full p-4",children:[c.jsx("div",{className:"mb-2 text-sm font-semibold text-gray-700",children:"Chart"}),c.jsxs("div",{className:"relative h-[500px] border border-gray-400 bg-gray-50",children:[c.jsxs("div",{className:"absolute left-0 top-0 bottom-0 w-8 border-r border-gray-600 flex flex-col items-center justify-between py-2",children:[c.jsx("span",{className:"text-xs text-gray-600 transform -rotate-90 whitespace-nowrap",children:"Value"}),c.jsxs("div",{className:"flex flex-col items-center gap-1",children:[c.jsx("div",{className:"w-2 h-px bg-gray-600"}),c.jsx("div",{className:"w-2 h-px bg-gray-600"}),c.jsx("div",{className:"w-2 h-px bg-gray-600"}),c.jsx("div",{className:"w-2 h-px bg-gray-600"}),c.jsx("div",{className:"w-2 h-px bg-gray-600"})]}),c.jsx("span",{className:"text-xs text-gray-600",children:"0"})]}),c.jsxs("div",{className:"absolute bottom-0 left-8 right-0 h-8 border-t border-gray-600 flex items-center justify-between px-2",children:[c.jsx("span",{className:"text-xs text-gray-600",children:"0"}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("div",{className:"h-2 w-px bg-gray-600"}),c.jsx("div",{className:"h-2 w-px bg-gray-600"}),c.jsx("div",{className:"h-2 w-px bg-gray-600"}),c.jsx("div",{className:"h-2 w-px bg-gray-600"}),c.jsx("div",{className:"h-2 w-px bg-gray-600"})]}),c.jsx("span",{className:"text-xs text-gray-600",children:"Time"})]}),c.jsx("div",{className:"absolute inset-0 left-8 bottom-8 p-4",children:l.length===0?c.jsx("div",{className:"flex items-center justify-center h-full text-sm text-gray-400",children:"Select points to display charts"}):c.jsx("div",{className:"space-y-3",children:l.map(({key:i,name:r,inverters:a})=>c.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded px-3 py-2 text-sm",children:c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"text-blue-800",children:c.jsx("strong",{children:r})}),c.jsx(Mo,{selectedInverters:a,onChange:o=>t(i,o)}),c.jsx("span",{className:"text-blue-600 text-xs",children:"Chart here"})]})},i))})})]})]})}function sh({onClose:e}){return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:e,children:c.jsxs("div",{className:"relative max-w-lg rounded-lg bg-white p-6 shadow-xl",onClick:n=>n.stopPropagation(),children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-800",children:"Group By"}),c.jsx("button",{onClick:e,className:"rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700","aria-label":"Close",children:c.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[c.jsx("p",{children:"Reorder or add levels to control how points are grouped in the list."}),c.jsx("p",{children:"For example, grouping by Component → Feature will show each component first, with its features listed underneath."}),c.jsx("p",{className:"text-gray-600",children:"You can add or remove levels using the + button and × button next to each level."})]})]})})}function dh({availableFamilies:e,hierarchy:n,onChange:t}){const[l,i]=Ie.useState(!1),r=(d,u)=>{const m=[...n];u===""?m.splice(d,1):m[d]=u,t(m)},a=()=>{t([...n,""])},o=d=>{const u=[...n];u.splice(d,1),t(u)},s=d=>{const u=n.filter((m,p)=>p!==d&&n[p]);return e.filter(m=>!u.includes(m))};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"mb-3 rounded-lg border bg-gray-50 p-2",children:c.jsxs("details",{className:"group",children:[c.jsx("summary",{className:"cursor-pointer list-none",children:c.jsx("div",{className:"flex items-start justify-between gap-2",children:c.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-700 flex-1 min-w-0",children:[c.jsx("span",{className:"mr-1 group-open:rotate-90 transition-transform flex-shrink-0",children:"▸"}),c.jsx("span",{className:"flex-shrink-0",children:"Group by"}),n.filter(d=>d).length>0&&c.jsx("div",{className:"flex flex-wrap items-center gap-1 ml-2 min-w-0",children:n.map((d,u)=>{if(!d)return null;const m=Ut(d);return c.jsx("span",{className:`rounded border px-1.5 py-0.5 text-xs ${m.bg} ${m.text} ${m.border} border font-semibold flex-shrink-0`,children:d},u)})})]})})}),c.jsxs("div",{className:"mt-2",children:[c.jsx("button",{onClick:()=>i(!0),className:"mb-2 text-xs text-blue-600 hover:text-blue-800 hover:underline",children:"What does this do?"}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[n.map((d,u)=>c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsxs("label",{className:"text-gray-600",children:["Level ",u+1,":"]}),c.jsxs("select",{value:d||"",onChange:m=>r(u,m.target.value),className:"rounded border px-2 py-1 text-xs",children:[c.jsx("option",{value:"",children:"(None)"}),s(u).map(m=>c.jsx("option",{value:m,children:m},m))]}),n.length>1&&c.jsx("button",{onClick:()=>o(u),className:"rounded border bg-white px-1.5 py-0.5 text-xs text-red-600 hover:bg-red-50",title:"Remove level",children:"×"})]},u)),c.jsx("button",{onClick:a,className:"rounded border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",title:"Add hierarchy level",children:"+"}),n.length===0&&c.jsx("div",{className:"text-gray-500 italic",children:"No hierarchy levels configured"})]})]})]})}),l&&c.jsx(sh,{onClose:()=>i(!1)})]})}function ch(){const[e,n]=V.useState(""),[t,l]=V.useState(()=>new Map),[i,r]=V.useState(!0),[a,o]=V.useState(()=>new Set(["Level of Detail:Standard"])),[s,d]=V.useState(["Component","Feature"]),[u,m]=V.useState(!0),[p,g]=V.useState(500),[x,b]=Ie.useState(!1),_=Ie.useRef(null),y=()=>{try{const D=localStorage.getItem("matter-app-last-inverter-selection");if(D){const F=JSON.parse(D);if(Array.isArray(F)&&F.length>0)return new Set(F)}}catch{}return new Set(["001"])},f=D=>{try{localStorage.setItem("matter-app-last-inverter-selection",JSON.stringify(Array.from(D)))}catch{}},h=D=>{D.preventDefault(),b(!0)};Ie.useEffect(()=>{if(!x)return;const D=q=>{if(_.current){const P=_.current.getBoundingClientRect().right-q.clientX;P>=300&&P<=800&&g(P)}},F=()=>{b(!1)};return document.addEventListener("mousemove",D),document.addEventListener("mouseup",F),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",F)}},[x]);const v=V.useMemo(()=>nh(bt),[]),w=V.useMemo(()=>[...v.keys()].sort(),[v]),C=V.useMemo(()=>{let D=bt;if(D=D.filter(F=>(Array.isArray(F.labels)?F.labels:[]).length>0),e){const F=e.toLowerCase();D=D.filter(q=>(q.entry.description||"").toLowerCase().includes(F)||(q.entry.longdescription||"").toLowerCase().includes(F)||(q.entry.name||"").toLowerCase().includes(F))}if(a.size>0){const F=new Map;a.forEach(q=>{const[ne,P]=q.split(":",2);F.has(ne)||F.set(ne,new Set),F.get(ne).add(P)}),D=D.filter(q=>{const ne=Array.isArray(q.labels)?q.labels:[];if(ne.length===0)return!1;const P=new Map;ne.forEach(A=>{P.has(A.label_family)||P.set(A.label_family,new Set),P.get(A.label_family).add(A.label_text)});for(const[A,G]of F.entries()){const $=P.get(A);if(!$||![...G].some(ft=>$.has(ft)))return!1}return!0})}return D},[e,a]),L=V.useMemo(()=>eh(C,s),[C,s]),S=D=>{l(F=>{const q=new Map(F);if(q.has(D))q.delete(D);else{const ne=y();q.set(D,new Set(ne))}return q})},N=(D,F)=>{f(F),l(q=>{const ne=new Map(q);return F.size===0?ne.delete(D):ne.set(D,F),ne})},I=(D,F)=>{o(q=>{const ne=new Set(q),P=`${D}:${F}`;return ne.has(P)?ne.delete(P):ne.add(P),ne})},Q=()=>o(new Set),R=C.length,en=V.useMemo(()=>bt.filter(D=>(Array.isArray(D.labels)?D.labels:[]).length>0).length,[]);return V.useEffect(()=>{try{console.assert(bt.length>0,"Expected sample data");const D=bt.find(F=>F.entry.name==="pNom");D&&console.assert(D.entry.unit==="W","pNom should have unit W")}catch(D){console.warn("Self-test failed:",D)}},[]),c.jsx("div",{className:"h-full bg-slate-100 p-4 md:p-6",children:c.jsxs("div",{className:"mx-auto w-full max-w-[95vw] h-[calc(100vh-2rem)] rounded-2xl border bg-white shadow-sm relative",children:[c.jsx(oh,{selectedPoints:t,protocols:bt,onUpdateInverters:N}),c.jsx("button",{onClick:()=>m(!u),className:"absolute top-4 z-30 rounded-md border border-gray-300 bg-white p-2 shadow-sm hover:bg-gray-50 transition-all duration-300",style:{right:u?`${p+16}px`:"1rem"},title:u?"Hide sidebar":"Show sidebar",children:c.jsx("svg",{className:`h-5 w-5 text-gray-600 transition-transform ${u?"":"rotate-180"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),c.jsxs("div",{ref:_,className:`absolute top-0 right-0 bottom-0 bg-white border-l border-gray-300 shadow-lg transition-transform duration-300 overflow-hidden ${u?"translate-x-0":"translate-x-full"}`,style:{width:`${p}px`,maxHeight:"100%"},children:[u&&c.jsx("div",{onMouseDown:h,className:"absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize bg-gray-300 hover:bg-gray-400 transition-colors z-10",title:"Drag to resize"}),c.jsxs("div",{className:"h-full overflow-hidden flex flex-col",style:{paddingLeft:"0.25rem"},children:[c.jsxs("div",{className:"p-4 flex-shrink-0",children:[c.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[c.jsx("div",{className:"text-lg font-semibold",children:"Select Points"}),c.jsx("div",{className:"text-sm",children:c.jsxs("span",{children:["Available: ",R.toLocaleString()," of ",en.toLocaleString()]})})]}),c.jsx(dh,{availableFamilies:w,hierarchy:s,onChange:d}),c.jsx(ah,{allLabels:v,selectedLabels:a,onToggleLabel:I,onClearFilters:Q}),c.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[c.jsx("div",{className:"flex-1",children:c.jsx(th,{value:e,onChange:n})}),c.jsx(lh,{show:i,onToggle:r})]})]}),c.jsx("div",{className:"flex-1 overflow-y-auto px-4 pb-4 pr-1",children:L.size===0?c.jsx("div",{className:"py-4 text-center text-sm text-gray-500",children:"No points match the current filters"}):[...L.entries()].filter(([D])=>D!=="(Unlabeled)").map(([D,F])=>c.jsx(ih,{firstLevel:D,secondLevelMap:F,selected:t,toggle:S,showHelp:i,onUpdateInverters:N},D))})]})]})]})})}const yc="matter-app-active-view";function uh(){const[e,n]=V.useState(()=>{const t=localStorage.getItem(yc);return t==="site-config"||t==="historical-data"?t:"site-config"});return V.useEffect(()=>{localStorage.setItem(yc,e)},[e]),c.jsxs("div",{className:"flex h-screen bg-slate-100",children:[c.jsxs("aside",{className:"w-64 bg-white border-r border-slate-300 flex flex-col shadow-sm",children:[c.jsx("div",{className:"p-4 border-b border-slate-300",children:c.jsx("h1",{className:"text-lg font-semibold text-slate-800",children:"Matter App"})}),c.jsxs("nav",{className:"flex-1 p-3",children:[c.jsx("button",{onClick:()=>n("site-config"),className:`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${e==="site-config"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xl",children:"⚙️"}),c.jsx("span",{children:"Site Config"})]})}),c.jsx("button",{onClick:()=>n("historical-data"),className:`w-full text-left px-4 py-3 rounded-lg transition-colors ${e==="historical-data"?"bg-blue-50 text-blue-700 font-medium border border-blue-200":"text-slate-700 hover:bg-slate-100"}`,children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xl",children:"📊"}),c.jsx("span",{children:"Historical Data"})]})})]}),c.jsx("div",{className:"p-4 border-t border-slate-300 text-xs text-slate-500",children:c.jsxs("div",{children:["Active: ",e==="site-config"?"Site Config":"Historical Data"]})})]}),c.jsxs("main",{className:"flex-1 overflow-auto",children:[e==="site-config"&&c.jsx(Rg,{}),e==="historical-data"&&c.jsx(ch,{})]})]})}Ga.createRoot(document.getElementById("root")).render(c.jsx(Ie.StrictMode,{children:c.jsx(uh,{})}));

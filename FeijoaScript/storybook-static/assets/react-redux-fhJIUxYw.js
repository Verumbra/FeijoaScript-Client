import{r as Ye,a as he,R as Je}from"./index-CoXXcpNP.js";function v(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ze=typeof Symbol=="function"&&Symbol.observable||"@@observable",we=Ze,Z=()=>Math.random().toString(36).substring(7).split("").join("."),et={INIT:`@@redux/INIT${Z()}`,REPLACE:`@@redux/REPLACE${Z()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Z()}`},K=et;function ue(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Te(e,t,r){if(typeof e!="function")throw new Error(v(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(v(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(v(1));return r(Te)(e,t)}let n=e,i=t,o=new Map,s=o,c=0,f=!1;function a(){s===o&&(s=new Map,o.forEach((h,b)=>{s.set(b,h)}))}function u(){if(f)throw new Error(v(3));return i}function l(h){if(typeof h!="function")throw new Error(v(4));if(f)throw new Error(v(5));let b=!0;a();const C=c++;return s.set(C,h),function(){if(b){if(f)throw new Error(v(6));b=!1,a(),s.delete(C),o=null}}}function p(h){if(!ue(h))throw new Error(v(7));if(typeof h.type>"u")throw new Error(v(8));if(typeof h.type!="string")throw new Error(v(17));if(f)throw new Error(v(9));try{f=!0,i=n(i,h)}finally{f=!1}return(o=s).forEach(C=>{C()}),h}function y(h){if(typeof h!="function")throw new Error(v(10));n=h,p({type:K.REPLACE})}function d(){const h=l;return{subscribe(b){if(typeof b!="object"||b===null)throw new Error(v(11));function C(){const m=b;m.next&&m.next(u())}return C(),{unsubscribe:h(C)}},[we](){return this}}}return p({type:K.INIT}),{dispatch:p,subscribe:l,getState:u,replaceReducer:y,[we]:d}}function tt(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:K.INIT})>"u")throw new Error(v(12));if(typeof r(void 0,{type:K.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(v(13))})}function rt(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(r[s]=e[s])}const n=Object.keys(r);let i;try{tt(r)}catch(o){i=o}return function(s={},c){if(i)throw i;let f=!1;const a={};for(let u=0;u<n.length;u++){const l=n[u],p=r[l],y=s[l],d=p(y,c);if(typeof d>"u")throw c&&c.type,new Error(v(14));a[l]=d,f=f||d!==y}return f=f||n.length!==Object.keys(s).length,f?a:s}}function q(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function nt(...e){return t=>(r,n)=>{const i=t(r,n);let o=()=>{throw new Error(v(15))};const s={getState:i.getState,dispatch:(f,...a)=>o(f,...a)},c=e.map(f=>f(s));return o=q(...c)(i.dispatch),{...i,dispatch:o}}}function it(e){return ue(e)&&"type"in e&&typeof e.type=="string"}var Me=Symbol.for("immer-nothing"),me=Symbol.for("immer-draftable"),x=Symbol.for("immer-state");function P(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var j=Object.getPrototypeOf;function D(e){return!!e&&!!e[x]}function k(e){var t;return e?ke(e)||Array.isArray(e)||!!e[me]||!!((t=e.constructor)!=null&&t[me])||Q(e)||Y(e):!1}var ot=Object.prototype.constructor.toString();function ke(e){if(!e||typeof e!="object")return!1;const t=j(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===ot}function H(e,t){G(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function G(e){const t=e[x];return t?t.type_:Array.isArray(e)?1:Q(e)?2:Y(e)?3:0}function re(e,t){return G(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function De(e,t,r){const n=G(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function st(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Q(e){return e instanceof Map}function Y(e){return e instanceof Set}function N(e){return e.copy_||e.base_}function ne(e,t){if(Q(e))return new Map(e);if(Y(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=ke(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[x];let i=Reflect.ownKeys(n);for(let o=0;o<i.length;o++){const s=i[o],c=n[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(j(e),n)}else{const n=j(e);if(n!==null&&r)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function fe(e,t=!1){return J(e)||D(e)||!k(e)||(G(e)>1&&(e.set=e.add=e.clear=e.delete=ct),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>fe(n,!0))),e}function ct(){P(2)}function J(e){return Object.isFrozen(e)}var ut={};function z(e){const t=ut[e];return t||P(0,e),t}var $;function Ae(){return $}function ft(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function _e(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ie(e){oe(e),e.drafts_.forEach(at),e.drafts_=null}function oe(e){e===$&&($=e.parent_)}function be(e){return $=ft($,e)}function at(e){const t=e[x];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ve(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[x].modified_&&(ie(t),P(4)),k(e)&&(e=X(t,e),t.parent_||V(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(r[x].base_,e,t.patches_,t.inversePatches_)):e=X(t,r,[]),ie(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Me?e:void 0}function X(e,t,r){if(J(t))return t;const n=t[x];if(!n)return H(t,(i,o)=>Se(e,n,t,i,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return V(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let o=i,s=!1;n.type_===3&&(o=new Set(i),i.clear(),s=!0),H(o,(c,f)=>Se(e,n,i,c,f,r,s)),V(e,i,!1),r&&e.patches_&&z("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Se(e,t,r,n,i,o,s){if(D(i)){const c=o&&t&&t.type_!==3&&!re(t.assigned_,n)?o.concat(n):void 0,f=X(e,i,c);if(De(r,n,f),D(f))e.canAutoFreeze_=!1;else return}else s&&r.add(i);if(k(i)&&!J(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;X(e,i),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&V(e,i)}}function V(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&fe(t,r)}function lt(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Ae(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=ae;r&&(i=[n],o=W);const{revoke:s,proxy:c}=Proxy.revocable(i,o);return n.draft_=c,n.revoke_=s,c}var ae={get(e,t){if(t===x)return e;const r=N(e);if(!re(r,t))return dt(e,r,t);const n=r[t];return e.finalized_||!k(n)?n:n===ee(e.base_,t)?(te(e),e.copy_[t]=ce(n,e)):n},has(e,t){return t in N(e)},ownKeys(e){return Reflect.ownKeys(N(e))},set(e,t,r){const n=Ne(N(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=ee(N(e),t),o=i==null?void 0:i[x];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(st(r,i)&&(r!==void 0||re(e.base_,t)))return!0;te(e),se(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return ee(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,te(e),se(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=N(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){P(11)},getPrototypeOf(e){return j(e.base_)},setPrototypeOf(){P(12)}},W={};H(ae,(e,t)=>{W[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});W.deleteProperty=function(e,t){return W.set.call(this,e,t,void 0)};W.set=function(e,t,r){return ae.set.call(this,e[0],t,r,e[0])};function ee(e,t){const r=e[x];return(r?N(r):e)[t]}function dt(e,t,r){var i;const n=Ne(t,r);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function Ne(e,t){if(!(t in e))return;let r=j(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=j(r)}}function se(e){e.modified_||(e.modified_=!0,e.parent_&&se(e.parent_))}function te(e){e.copy_||(e.copy_=ne(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var pt=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const s=this;return function(f=o,...a){return s.produce(f,u=>r.call(this,u,...a))}}typeof r!="function"&&P(6),n!==void 0&&typeof n!="function"&&P(7);let i;if(k(t)){const o=be(this),s=ce(t,void 0);let c=!0;try{i=r(s),c=!1}finally{c?ie(o):oe(o)}return _e(o,n),ve(i,o)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===Me&&(i=void 0),this.autoFreeze_&&fe(i,!0),n){const o=[],s=[];z("Patches").generateReplacementPatches_(t,i,o,s),n(o,s)}return i}else P(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...c)=>this.produceWithPatches(s,f=>t(f,...c));let n,i;return[this.produce(t,r,(s,c)=>{n=s,i=c}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){k(e)||P(8),D(e)&&(e=ze(e));const t=be(this),r=ce(e,void 0);return r[x].isManual_=!0,oe(t),r}finishDraft(e,t){const r=e&&e[x];(!r||!r.isManual_)&&P(9);const{scope_:n}=r;return _e(n,t),ve(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=z("Patches").applyPatches_;return D(e)?n(e,t):this.produce(e,i=>n(i,t))}};function ce(e,t){const r=Q(e)?z("MapSet").proxyMap_(e,t):Y(e)?z("MapSet").proxySet_(e,t):lt(e,t);return(t?t.scope_:Ae()).drafts_.push(r),r}function ze(e){return D(e)||P(10,e),je(e)}function je(e){if(!k(e)||J(e))return e;const t=e[x];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=ne(e,t.scope_.immer_.useStrictShallowCopy_)}else r=ne(e,!0);return H(r,(n,i)=>{De(r,n,je(i))}),t&&(t.finalized_=!1),r}var O=new pt,Ie=O.produce;O.produceWithPatches.bind(O);O.setAutoFreeze.bind(O);O.setUseStrictShallowCopy.bind(O);O.applyPatches.bind(O);O.createDraft.bind(O);O.finishDraft.bind(O);function yt(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function ht(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function wt(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var ge=e=>Array.isArray(e)?e:[e];function mt(e){const t=Array.isArray(e[0])?e[0]:e;return wt(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function _t(e,t){const r=[],{length:n}=e;for(let i=0;i<n;i++)r.push(e[i].apply(null,t));return r}var bt=class{constructor(e){this.value=e}deref(){return this.value}},vt=typeof WeakRef<"u"?WeakRef:bt,St=0,Ee=1;function L(){return{s:St,v:void 0,o:null,p:null}}function le(e,t={}){let r=L();const{resultEqualityCheck:n}=t;let i,o=0;function s(){var l;let c=r;const{length:f}=arguments;for(let p=0,y=f;p<y;p++){const d=arguments[p];if(typeof d=="function"||typeof d=="object"&&d!==null){let _=c.o;_===null&&(c.o=_=new WeakMap);const h=_.get(d);h===void 0?(c=L(),_.set(d,c)):c=h}else{let _=c.p;_===null&&(c.p=_=new Map);const h=_.get(d);h===void 0?(c=L(),_.set(d,c)):c=h}}const a=c;let u;if(c.s===Ee)u=c.v;else if(u=e.apply(null,arguments),o++,n){const p=((l=i==null?void 0:i.deref)==null?void 0:l.call(i))??i;p!=null&&n(p,u)&&(u=p,o!==0&&o--),i=typeof u=="object"&&u!==null||typeof u=="function"?new vt(u):u}return a.s=Ee,a.v=u,u}return s.clearCache=()=>{r=L(),s.resetResultsCount()},s.resultsCount=()=>o,s.resetResultsCount=()=>{o=0},s}function Fe(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...i)=>{let o=0,s=0,c,f={},a=i.pop();typeof a=="object"&&(f=a,a=i.pop()),yt(a,`createSelector expects an output function after the inputs, but received: [${typeof a}]`);const u={...r,...f},{memoize:l,memoizeOptions:p=[],argsMemoize:y=le,argsMemoizeOptions:d=[],devModeChecks:_={}}=u,h=ge(p),b=ge(d),C=mt(i),w=l(function(){return o++,a.apply(null,arguments)},...h),m=y(function(){s++;const T=_t(C,arguments);return c=w.apply(null,T),c},...b);return Object.assign(m,{resultFunc:a,memoizedResultFunc:w,dependencies:C,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>c,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:l,argsMemoize:y})};return Object.assign(n,{withTypes:()=>n}),n}var gt=Fe(le),Et=Object.assign((e,t=gt)=>{ht(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(o=>e[o]);return t(n,(...o)=>o.reduce((s,c,f)=>(s[r[f]]=c,s),{}))},{withTypes:()=>Et});function $e(e){return({dispatch:r,getState:n})=>i=>o=>typeof o=="function"?o(r,n,e):i(o)}var Ct=$e(),Rt=$e,xt=(...e)=>{const t=Fe(...e),r=Object.assign((...n)=>{const i=t(...n),o=(s,...c)=>i(D(s)?ze(s):s,...c);return Object.assign(o,i),o},{withTypes:()=>r});return r};xt(le);var Ot=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?q:q.apply(null,arguments)};function I(e,t){function r(...n){if(t){let i=t(...n);if(!i)throw new Error(E(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>it(n)&&n.type===e,r}var We=class F extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,F.prototype)}static get[Symbol.species](){return F}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new F(...t[0].concat(this)):new F(...t.concat(this))}};function Ce(e){return k(e)?Ie(e,()=>{}):e}function Re(e,t,r){if(e.has(t)){let i=e.get(t);return r.update&&(i=r.update(i,t,e),e.set(t,i)),i}if(!r.insert)throw new Error(E(10));const n=r.insert(t,e);return e.set(t,n),n}function Pt(e){return typeof e=="boolean"}var Tt=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new We;return r&&(Pt(r)?s.push(Ct):s.push(Rt(r.extraArgument))),s},Mt="RTK_autoBatch",Be=e=>t=>{setTimeout(t,e)},kt=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Be(10),Dt=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let i=!0,o=!1,s=!1;const c=new Set,f=e.type==="tick"?queueMicrotask:e.type==="raf"?kt:e.type==="callback"?e.queueNotification:Be(e.timeout),a=()=>{s=!1,o&&(o=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const l=()=>i&&u(),p=n.subscribe(l);return c.add(u),()=>{p(),c.delete(u)}},dispatch(u){var l;try{return i=!((l=u==null?void 0:u.meta)!=null&&l[Mt]),o=!i,o&&(s||(s=!0,f(a))),n.dispatch(u)}finally{i=!0}}})},At=e=>function(r){const{autoBatch:n=!0}=r??{};let i=new We(e);return n&&i.push(Dt(typeof n=="object"?n:void 0)),i},Nt=!0;function Cr(e){const t=Tt(),{reducer:r=void 0,middleware:n,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let c;if(typeof r=="function")c=r;else if(ue(r))c=rt(r);else throw new Error(E(1));let f;typeof n=="function"?f=n(t):f=t();let a=q;i&&(a=Ot({trace:!Nt,...typeof i=="object"&&i}));const u=nt(...f),l=At(u);let p=typeof s=="function"?s(l):l();const y=a(...p);return Te(c,o,y)}function Le(e){const t={},r=[];let n;const i={addCase(o,s){const c=typeof o=="string"?o:o.type;if(!c)throw new Error(E(28));if(c in t)throw new Error(E(29));return t[c]=s,i},addMatcher(o,s){return r.push({matcher:o,reducer:s}),i},addDefaultCase(o){return n=o,i}};return e(i),[t,r,n]}function zt(e){return typeof e=="function"}function jt(e,t){let[r,n,i]=Le(t),o;if(zt(e))o=()=>Ce(e());else{const c=Ce(e);o=()=>c}function s(c=o(),f){let a=[r[f.type],...n.filter(({matcher:u})=>u(f)).map(({reducer:u})=>u)];return a.filter(u=>!!u).length===0&&(a=[i]),a.reduce((u,l)=>{if(l)if(D(u)){const y=l(u,f);return y===void 0?u:y}else{if(k(u))return Ie(u,p=>l(p,f));{const p=l(u,f);if(p===void 0){if(u===null)return u;throw new Error(E(9))}return p}}return u},c)}return s.getInitialState=o,s}var It="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Ft=(e=21)=>{let t="",r=e;for(;r--;)t+=It[Math.random()*64|0];return t},$t=Symbol.for("rtk-slice-createasyncthunk");function Wt(e,t){return`${e}/${t}`}function Bt({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[$t];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(E(11));typeof process<"u";const c=(typeof i.reducers=="function"?i.reducers(Kt()):i.reducers)||{},f=Object.keys(c),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(w,m){const S=typeof w=="string"?w:w.type;if(!S)throw new Error(E(12));if(S in a.sliceCaseReducersByType)throw new Error(E(13));return a.sliceCaseReducersByType[S]=m,u},addMatcher(w,m){return a.sliceMatchers.push({matcher:w,reducer:m}),u},exposeAction(w,m){return a.actionCreators[w]=m,u},exposeCaseReducer(w,m){return a.sliceCaseReducersByName[w]=m,u}};f.forEach(w=>{const m=c[w],S={reducerName:w,type:Wt(o,w),createNotation:typeof i.reducers=="function"};Ht(m)?Vt(S,m,u,t):qt(S,m,u)});function l(){const[w={},m=[],S=void 0]=typeof i.extraReducers=="function"?Le(i.extraReducers):[i.extraReducers],T={...w,...a.sliceCaseReducersByType};return jt(i.initialState,M=>{for(let g in T)M.addCase(g,T[g]);for(let g of a.sliceMatchers)M.addMatcher(g.matcher,g.reducer);for(let g of m)M.addMatcher(g.matcher,g.reducer);S&&M.addDefaultCase(S)})}const p=w=>w,y=new Map;let d;function _(w,m){return d||(d=l()),d(w,m)}function h(){return d||(d=l()),d.getInitialState()}function b(w,m=!1){function S(M){let g=M[w];return typeof g>"u"&&m&&(g=h()),g}function T(M=p){const g=Re(y,m,{insert:()=>new WeakMap});return Re(g,M,{insert:()=>{const ye={};for(const[Ge,Qe]of Object.entries(i.selectors??{}))ye[Ge]=Lt(Qe,M,h,m);return ye}})}return{reducerPath:w,getSelectors:T,get selectors(){return T(S)},selectSlice:S}}const C={name:o,reducer:_,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:h,...b(s),injectInto(w,{reducerPath:m,...S}={}){const T=m??s;return w.inject({reducerPath:T,reducer:_},S),{...C,...b(T,!0)}}};return C}}function Lt(e,t,r,n){function i(o,...s){let c=t(o);return typeof c>"u"&&n&&(c=r()),e(c,...s)}return i.unwrapped=e,i}var Ut=Bt();function Kt(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function qt({type:e,reducerName:t,createNotation:r},n,i){let o,s;if("reducer"in n){if(r&&!Xt(n))throw new Error(E(17));o=n.reducer,s=n.prepare}else o=n;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?I(e,s):I(e))}function Ht(e){return e._reducerDefinitionType==="asyncThunk"}function Xt(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Vt({type:e,reducerName:t},r,n,i){if(!i)throw new Error(E(18));const{payloadCreator:o,fulfilled:s,pending:c,rejected:f,settled:a,options:u}=r,l=i(e,o,u);n.exposeAction(t,l),s&&n.addCase(l.fulfilled,s),c&&n.addCase(l.pending,c),f&&n.addCase(l.rejected,f),a&&n.addMatcher(l.settled,a),n.exposeCaseReducer(t,{fulfilled:s||U,pending:c||U,rejected:f||U,settled:a||U})}function U(){}var Gt=(e,t)=>{if(typeof e!="function")throw new Error(E(32))},de="listenerMiddleware",Qt=e=>{let{type:t,actionCreator:r,matcher:n,predicate:i,effect:o}=e;if(t)i=I(t).match;else if(r)t=r.type,i=r.match;else if(n)i=n;else if(!i)throw new Error(E(21));return Gt(o),{predicate:i,type:t,effect:o}},Yt=Object.assign(e=>{const{type:t,predicate:r,effect:n}=Qt(e);return{id:Ft(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(E(22))}}},{withTypes:()=>Yt}),Jt=Object.assign(I(`${de}/add`),{withTypes:()=>Jt});I(`${de}/removeAll`);var Zt=Object.assign(I(`${de}/remove`),{withTypes:()=>Zt});function E(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const er={page:"HOME"},Ue=Ut({name:"current-view",initialState:er,reducers:{setPage:(e,t)=>{e.page=t.payload}}}),{setPage:Rr}=Ue.actions,xr=Ue.reducer;var Ke={exports:{}},qe={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=Ye;function tr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rr=typeof Object.is=="function"?Object.is:tr,nr=B.useSyncExternalStore,ir=B.useRef,or=B.useEffect,sr=B.useMemo,cr=B.useDebugValue;qe.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var o=ir(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=sr(function(){function f(y){if(!a){if(a=!0,u=y,y=n(y),i!==void 0&&s.hasValue){var d=s.value;if(i(d,y))return l=d}return l=y}if(d=l,rr(u,y))return d;var _=n(y);return i!==void 0&&i(d,_)?d:(u=y,l=_)}var a=!1,u,l,p=r===void 0?null:r;return[function(){return f(t())},p===null?void 0:function(){return f(p())}]},[t,r,n,i]);var c=nr(e,o[0],o[1]);return or(function(){s.hasValue=!0,s.value=c},[c]),cr(c),c};Ke.exports=qe;var ur=Ke.exports,R="default"in he?Je:he,xe=Symbol.for("react-redux-context"),Oe=typeof globalThis<"u"?globalThis:{};function fr(){if(!R.createContext)return{};const e=Oe[xe]??(Oe[xe]=new Map);let t=e.get(R.createContext);return t||(t=R.createContext(null),e.set(R.createContext,t)),t}var A=fr(),ar=()=>{throw new Error("uSES not initialized!")};function pe(e=A){return function(){return R.useContext(e)}}var He=pe(),Xe=ar,lr=e=>{Xe=e},dr=(e,t)=>e===t;function pr(e=A){const t=e===A?He:pe(e),r=(n,i={})=>{const{equalityFn:o=dr,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:c,subscription:f,getServerState:a,stabilityCheck:u,identityFunctionCheck:l}=t();R.useRef(!0);const p=R.useCallback({[n.name](d){return n(d)}}[n.name],[n,u,s.stabilityCheck]),y=Xe(f.addNestedSub,c.getState,a||c.getState,p,o);return R.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}var Or=pr();function yr(e){e()}function hr(){let e=null,t=null;return{clear(){e=null,t=null},notify(){yr(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const i=t={callback:r,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!n||e===null||(n=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Pe={notify(){},get:()=>[]};function wr(e,t){let r,n=Pe,i=0,o=!1;function s(_){u();const h=n.subscribe(_);let b=!1;return()=>{b||(b=!0,h(),l())}}function c(){n.notify()}function f(){d.onStateChange&&d.onStateChange()}function a(){return o}function u(){i++,r||(r=e.subscribe(f),n=hr())}function l(){i--,r&&i===0&&(r(),r=void 0,n.clear(),n=Pe)}function p(){o||(o=!0,u())}function y(){o&&(o=!1,l())}const d={addNestedSub:s,notifyNestedSubs:c,handleChangeWrapper:f,isSubscribed:a,trySubscribe:p,tryUnsubscribe:y,getListeners:()=>n};return d}var mr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_r=typeof navigator<"u"&&navigator.product==="ReactNative",br=mr||_r?R.useLayoutEffect:R.useEffect;function vr({store:e,context:t,children:r,serverState:n,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=R.useMemo(()=>{const a=wr(e);return{store:e,subscription:a,getServerState:n?()=>n:void 0,stabilityCheck:i,identityFunctionCheck:o}},[e,n,i,o]),c=R.useMemo(()=>e.getState(),[e]);br(()=>{const{subscription:a}=s;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),c!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[s,c]);const f=t||A;return R.createElement(f.Provider,{value:s},r)}var Pr=vr;function Ve(e=A){const t=e===A?He:pe(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var Sr=Ve();function gr(e=A){const t=e===A?Sr:Ve(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Tr=gr();lr(ur.useSyncExternalStoreWithSelector);export{Pr as P,Cr as a,Or as b,Ut as c,Rr as s,Tr as u,xr as v};

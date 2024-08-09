import{r as Qe,a as he,R as Ye}from"./index-CoXXcpNP.js";function v(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Je=typeof Symbol=="function"&&Symbol.observable||"@@observable",we=Je,Z=()=>Math.random().toString(36).substring(7).split("").join("."),Ze={INIT:`@@redux/INIT${Z()}`,REPLACE:`@@redux/REPLACE${Z()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Z()}`},K=Ze;function ue(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Te(e,t,r){if(typeof e!="function")throw new Error(v(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(v(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(v(1));return r(Te)(e,t)}let n=e,o=t,i=new Map,s=i,c=0,f=!1;function a(){s===i&&(s=new Map,i.forEach((h,b)=>{s.set(b,h)}))}function u(){if(f)throw new Error(v(3));return o}function l(h){if(typeof h!="function")throw new Error(v(4));if(f)throw new Error(v(5));let b=!0;a();const E=c++;return s.set(E,h),function(){if(b){if(f)throw new Error(v(6));b=!1,a(),s.delete(E),i=null}}}function p(h){if(!ue(h))throw new Error(v(7));if(typeof h.type>"u")throw new Error(v(8));if(typeof h.type!="string")throw new Error(v(17));if(f)throw new Error(v(9));try{f=!0,o=n(o,h)}finally{f=!1}return(i=s).forEach(E=>{E()}),h}function y(h){if(typeof h!="function")throw new Error(v(10));n=h,p({type:K.REPLACE})}function d(){const h=l;return{subscribe(b){if(typeof b!="object"||b===null)throw new Error(v(11));function E(){const m=b;m.next&&m.next(u())}return E(),{unsubscribe:h(E)}},[we](){return this}}}return p({type:K.INIT}),{dispatch:p,subscribe:l,getState:u,replaceReducer:y,[we]:d}}function et(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:K.INIT})>"u")throw new Error(v(12));if(typeof r(void 0,{type:K.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(v(13))})}function tt(e){const t=Object.keys(e),r={};for(let i=0;i<t.length;i++){const s=t[i];typeof e[s]=="function"&&(r[s]=e[s])}const n=Object.keys(r);let o;try{et(r)}catch(i){o=i}return function(s={},c){if(o)throw o;let f=!1;const a={};for(let u=0;u<n.length;u++){const l=n[u],p=r[l],y=s[l],d=p(y,c);if(typeof d>"u")throw c&&c.type,new Error(v(14));a[l]=d,f=f||d!==y}return f=f||n.length!==Object.keys(s).length,f?a:s}}function q(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function rt(...e){return t=>(r,n)=>{const o=t(r,n);let i=()=>{throw new Error(v(15))};const s={getState:o.getState,dispatch:(f,...a)=>i(f,...a)},c=e.map(f=>f(s));return i=q(...c)(o.dispatch),{...o,dispatch:i}}}function nt(e){return ue(e)&&"type"in e&&typeof e.type=="string"}var Me=Symbol.for("immer-nothing"),me=Symbol.for("immer-draftable"),x=Symbol.for("immer-state");function P(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var j=Object.getPrototypeOf;function D(e){return!!e&&!!e[x]}function k(e){var t;return e?ke(e)||Array.isArray(e)||!!e[me]||!!((t=e.constructor)!=null&&t[me])||Q(e)||Y(e):!1}var ot=Object.prototype.constructor.toString();function ke(e){if(!e||typeof e!="object")return!1;const t=j(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===ot}function H(e,t){G(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function G(e){const t=e[x];return t?t.type_:Array.isArray(e)?1:Q(e)?2:Y(e)?3:0}function re(e,t){return G(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function De(e,t,r){const n=G(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function it(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Q(e){return e instanceof Map}function Y(e){return e instanceof Set}function N(e){return e.copy_||e.base_}function ne(e,t){if(Q(e))return new Map(e);if(Y(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=ke(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[x];let o=Reflect.ownKeys(n);for(let i=0;i<o.length;i++){const s=o[i],c=n[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(j(e),n)}else{const n=j(e);if(n!==null&&r)return{...e};const o=Object.create(n);return Object.assign(o,e)}}function fe(e,t=!1){return J(e)||D(e)||!k(e)||(G(e)>1&&(e.set=e.add=e.clear=e.delete=st),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>fe(n,!0))),e}function st(){P(2)}function J(e){return Object.isFrozen(e)}var ct={};function z(e){const t=ct[e];return t||P(0,e),t}var $;function Ae(){return $}function ut(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function _e(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function oe(e){ie(e),e.drafts_.forEach(ft),e.drafts_=null}function ie(e){e===$&&($=e.parent_)}function be(e){return $=ut($,e)}function ft(e){const t=e[x];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ve(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[x].modified_&&(oe(t),P(4)),k(e)&&(e=X(t,e),t.parent_||V(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(r[x].base_,e,t.patches_,t.inversePatches_)):e=X(t,r,[]),oe(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Me?e:void 0}function X(e,t,r){if(J(t))return t;const n=t[x];if(!n)return H(t,(o,i)=>Se(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return V(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let i=o,s=!1;n.type_===3&&(i=new Set(o),o.clear(),s=!0),H(i,(c,f)=>Se(e,n,o,c,f,r,s)),V(e,o,!1),r&&e.patches_&&z("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Se(e,t,r,n,o,i,s){if(D(o)){const c=i&&t&&t.type_!==3&&!re(t.assigned_,n)?i.concat(n):void 0,f=X(e,o,c);if(De(r,n,f),D(f))e.canAutoFreeze_=!1;else return}else s&&r.add(o);if(k(o)&&!J(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;X(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&V(e,o)}}function V(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&fe(t,r)}function at(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Ae(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=ae;r&&(o=[n],i=W);const{revoke:s,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=s,c}var ae={get(e,t){if(t===x)return e;const r=N(e);if(!re(r,t))return lt(e,r,t);const n=r[t];return e.finalized_||!k(n)?n:n===ee(e.base_,t)?(te(e),e.copy_[t]=ce(n,e)):n},has(e,t){return t in N(e)},ownKeys(e){return Reflect.ownKeys(N(e))},set(e,t,r){const n=Ne(N(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=ee(N(e),t),i=o==null?void 0:o[x];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(it(r,o)&&(r!==void 0||re(e.base_,t)))return!0;te(e),se(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return ee(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,te(e),se(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=N(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){P(11)},getPrototypeOf(e){return j(e.base_)},setPrototypeOf(){P(12)}},W={};H(ae,(e,t)=>{W[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});W.deleteProperty=function(e,t){return W.set.call(this,e,t,void 0)};W.set=function(e,t,r){return ae.set.call(this,e[0],t,r,e[0])};function ee(e,t){const r=e[x];return(r?N(r):e)[t]}function lt(e,t,r){var o;const n=Ne(t,r);return n?"value"in n?n.value:(o=n.get)==null?void 0:o.call(e.draft_):void 0}function Ne(e,t){if(!(t in e))return;let r=j(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=j(r)}}function se(e){e.modified_||(e.modified_=!0,e.parent_&&se(e.parent_))}function te(e){e.copy_||(e.copy_=ne(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var dt=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const i=r;r=t;const s=this;return function(f=i,...a){return s.produce(f,u=>r.call(this,u,...a))}}typeof r!="function"&&P(6),n!==void 0&&typeof n!="function"&&P(7);let o;if(k(t)){const i=be(this),s=ce(t,void 0);let c=!0;try{o=r(s),c=!1}finally{c?oe(i):ie(i)}return _e(i,n),ve(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===Me&&(o=void 0),this.autoFreeze_&&fe(o,!0),n){const i=[],s=[];z("Patches").generateReplacementPatches_(t,o,i,s),n(i,s)}return o}else P(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...c)=>this.produceWithPatches(s,f=>t(f,...c));let n,o;return[this.produce(t,r,(s,c)=>{n=s,o=c}),n,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){k(e)||P(8),D(e)&&(e=ze(e));const t=be(this),r=ce(e,void 0);return r[x].isManual_=!0,ie(t),r}finishDraft(e,t){const r=e&&e[x];(!r||!r.isManual_)&&P(9);const{scope_:n}=r;return _e(n,t),ve(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=z("Patches").applyPatches_;return D(e)?n(e,t):this.produce(e,o=>n(o,t))}};function ce(e,t){const r=Q(e)?z("MapSet").proxyMap_(e,t):Y(e)?z("MapSet").proxySet_(e,t):at(e,t);return(t?t.scope_:Ae()).drafts_.push(r),r}function ze(e){return D(e)||P(10,e),je(e)}function je(e){if(!k(e)||J(e))return e;const t=e[x];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=ne(e,t.scope_.immer_.useStrictShallowCopy_)}else r=ne(e,!0);return H(r,(n,o)=>{De(r,n,je(o))}),t&&(t.finalized_=!1),r}var O=new dt,Ie=O.produce;O.produceWithPatches.bind(O);O.setAutoFreeze.bind(O);O.setUseStrictShallowCopy.bind(O);O.applyPatches.bind(O);O.createDraft.bind(O);O.finishDraft.bind(O);function pt(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function yt(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function ht(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var ge=e=>Array.isArray(e)?e:[e];function wt(e){const t=Array.isArray(e[0])?e[0]:e;return ht(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function mt(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}var _t=class{constructor(e){this.value=e}deref(){return this.value}},bt=typeof WeakRef<"u"?WeakRef:_t,vt=0,Ce=1;function L(){return{s:vt,v:void 0,o:null,p:null}}function le(e,t={}){let r=L();const{resultEqualityCheck:n}=t;let o,i=0;function s(){var l;let c=r;const{length:f}=arguments;for(let p=0,y=f;p<y;p++){const d=arguments[p];if(typeof d=="function"||typeof d=="object"&&d!==null){let _=c.o;_===null&&(c.o=_=new WeakMap);const h=_.get(d);h===void 0?(c=L(),_.set(d,c)):c=h}else{let _=c.p;_===null&&(c.p=_=new Map);const h=_.get(d);h===void 0?(c=L(),_.set(d,c)):c=h}}const a=c;let u;if(c.s===Ce)u=c.v;else if(u=e.apply(null,arguments),i++,n){const p=((l=o==null?void 0:o.deref)==null?void 0:l.call(o))??o;p!=null&&n(p,u)&&(u=p,i!==0&&i--),o=typeof u=="object"&&u!==null||typeof u=="function"?new bt(u):u}return a.s=Ce,a.v=u,u}return s.clearCache=()=>{r=L(),s.resetResultsCount()},s.resultsCount=()=>i,s.resetResultsCount=()=>{i=0},s}function Fe(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...o)=>{let i=0,s=0,c,f={},a=o.pop();typeof a=="object"&&(f=a,a=o.pop()),pt(a,`createSelector expects an output function after the inputs, but received: [${typeof a}]`);const u={...r,...f},{memoize:l,memoizeOptions:p=[],argsMemoize:y=le,argsMemoizeOptions:d=[],devModeChecks:_={}}=u,h=ge(p),b=ge(d),E=wt(o),w=l(function(){return i++,a.apply(null,arguments)},...h),m=y(function(){s++;const T=mt(E,arguments);return c=w.apply(null,T),c},...b);return Object.assign(m,{resultFunc:a,memoizedResultFunc:w,dependencies:E,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>c,recomputations:()=>i,resetRecomputations:()=>{i=0},memoize:l,argsMemoize:y})};return Object.assign(n,{withTypes:()=>n}),n}var St=Fe(le),gt=Object.assign((e,t=St)=>{yt(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(i=>e[i]);return t(n,(...i)=>i.reduce((s,c,f)=>(s[r[f]]=c,s),{}))},{withTypes:()=>gt});function $e(e){return({dispatch:r,getState:n})=>o=>i=>typeof i=="function"?i(r,n,e):o(i)}var Ct=$e(),Et=$e,Rt=(...e)=>{const t=Fe(...e),r=Object.assign((...n)=>{const o=t(...n),i=(s,...c)=>o(D(s)?ze(s):s,...c);return Object.assign(i,o),i},{withTypes:()=>r});return r};Rt(le);var xt=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?q:q.apply(null,arguments)};function I(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(C(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>nt(n)&&n.type===e,r}var We=class F extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,F.prototype)}static get[Symbol.species](){return F}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new F(...t[0].concat(this)):new F(...t.concat(this))}};function Ee(e){return k(e)?Ie(e,()=>{}):e}function Re(e,t,r){if(e.has(t)){let o=e.get(t);return r.update&&(o=r.update(o,t,e),e.set(t,o)),o}if(!r.insert)throw new Error(C(10));const n=r.insert(t,e);return e.set(t,n),n}function Ot(e){return typeof e=="boolean"}var Pt=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{};let s=new We;return r&&(Ot(r)?s.push(Ct):s.push(Et(r.extraArgument))),s},Tt="RTK_autoBatch",Be=e=>t=>{setTimeout(t,e)},Mt=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Be(10),kt=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,i=!1,s=!1;const c=new Set,f=e.type==="tick"?queueMicrotask:e.type==="raf"?Mt:e.type==="callback"?e.queueNotification:Be(e.timeout),a=()=>{s=!1,i&&(i=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const l=()=>o&&u(),p=n.subscribe(l);return c.add(u),()=>{p(),c.delete(u)}},dispatch(u){var l;try{return o=!((l=u==null?void 0:u.meta)!=null&&l[Tt]),i=!o,i&&(s||(s=!0,f(a))),n.dispatch(u)}finally{o=!0}}})},Dt=e=>function(r){const{autoBatch:n=!0}=r??{};let o=new We(e);return n&&o.push(kt(typeof n=="object"?n:void 0)),o},At=!0;function Sr(e){const t=Pt(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{};let c;if(typeof r=="function")c=r;else if(ue(r))c=tt(r);else throw new Error(C(1));let f;typeof n=="function"?f=n(t):f=t();let a=q;o&&(a=xt({trace:!At,...typeof o=="object"&&o}));const u=rt(...f),l=Dt(u);let p=typeof s=="function"?s(l):l();const y=a(...p);return Te(c,i,y)}function Le(e){const t={},r=[];let n;const o={addCase(i,s){const c=typeof i=="string"?i:i.type;if(!c)throw new Error(C(28));if(c in t)throw new Error(C(29));return t[c]=s,o},addMatcher(i,s){return r.push({matcher:i,reducer:s}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function Nt(e){return typeof e=="function"}function zt(e,t){let[r,n,o]=Le(t),i;if(Nt(e))i=()=>Ee(e());else{const c=Ee(e);i=()=>c}function s(c=i(),f){let a=[r[f.type],...n.filter(({matcher:u})=>u(f)).map(({reducer:u})=>u)];return a.filter(u=>!!u).length===0&&(a=[o]),a.reduce((u,l)=>{if(l)if(D(u)){const y=l(u,f);return y===void 0?u:y}else{if(k(u))return Ie(u,p=>l(p,f));{const p=l(u,f);if(p===void 0){if(u===null)return u;throw new Error(C(9))}return p}}return u},c)}return s.getInitialState=i,s}var jt="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",It=(e=21)=>{let t="",r=e;for(;r--;)t+=jt[Math.random()*64|0];return t},Ft=Symbol.for("rtk-slice-createasyncthunk");function $t(e,t){return`${e}/${t}`}function Wt({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[Ft];return function(o){const{name:i,reducerPath:s=i}=o;if(!i)throw new Error(C(11));typeof process<"u";const c=(typeof o.reducers=="function"?o.reducers(Lt()):o.reducers)||{},f=Object.keys(c),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(w,m){const S=typeof w=="string"?w:w.type;if(!S)throw new Error(C(12));if(S in a.sliceCaseReducersByType)throw new Error(C(13));return a.sliceCaseReducersByType[S]=m,u},addMatcher(w,m){return a.sliceMatchers.push({matcher:w,reducer:m}),u},exposeAction(w,m){return a.actionCreators[w]=m,u},exposeCaseReducer(w,m){return a.sliceCaseReducersByName[w]=m,u}};f.forEach(w=>{const m=c[w],S={reducerName:w,type:$t(i,w),createNotation:typeof o.reducers=="function"};Kt(m)?Ht(S,m,u,t):Ut(S,m,u)});function l(){const[w={},m=[],S=void 0]=typeof o.extraReducers=="function"?Le(o.extraReducers):[o.extraReducers],T={...w,...a.sliceCaseReducersByType};return zt(o.initialState,M=>{for(let g in T)M.addCase(g,T[g]);for(let g of a.sliceMatchers)M.addMatcher(g.matcher,g.reducer);for(let g of m)M.addMatcher(g.matcher,g.reducer);S&&M.addDefaultCase(S)})}const p=w=>w,y=new Map;let d;function _(w,m){return d||(d=l()),d(w,m)}function h(){return d||(d=l()),d.getInitialState()}function b(w,m=!1){function S(M){let g=M[w];return typeof g>"u"&&m&&(g=h()),g}function T(M=p){const g=Re(y,m,{insert:()=>new WeakMap});return Re(g,M,{insert:()=>{const ye={};for(const[Ve,Ge]of Object.entries(o.selectors??{}))ye[Ve]=Bt(Ge,M,h,m);return ye}})}return{reducerPath:w,getSelectors:T,get selectors(){return T(S)},selectSlice:S}}const E={name:i,reducer:_,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:h,...b(s),injectInto(w,{reducerPath:m,...S}={}){const T=m??s;return w.inject({reducerPath:T,reducer:_},S),{...E,...b(T,!0)}}};return E}}function Bt(e,t,r,n){function o(i,...s){let c=t(i);return typeof c>"u"&&n&&(c=r()),e(c,...s)}return o.unwrapped=e,o}var gr=Wt();function Lt(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function Ut({type:e,reducerName:t,createNotation:r},n,o){let i,s;if("reducer"in n){if(r&&!qt(n))throw new Error(C(17));i=n.reducer,s=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?I(e,s):I(e))}function Kt(e){return e._reducerDefinitionType==="asyncThunk"}function qt(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Ht({type:e,reducerName:t},r,n,o){if(!o)throw new Error(C(18));const{payloadCreator:i,fulfilled:s,pending:c,rejected:f,settled:a,options:u}=r,l=o(e,i,u);n.exposeAction(t,l),s&&n.addCase(l.fulfilled,s),c&&n.addCase(l.pending,c),f&&n.addCase(l.rejected,f),a&&n.addMatcher(l.settled,a),n.exposeCaseReducer(t,{fulfilled:s||U,pending:c||U,rejected:f||U,settled:a||U})}function U(){}var Xt=(e,t)=>{if(typeof e!="function")throw new Error(C(32))},de="listenerMiddleware",Vt=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=I(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error(C(21));return Xt(i),{predicate:o,type:t,effect:i}},Gt=Object.assign(e=>{const{type:t,predicate:r,effect:n}=Vt(e);return{id:It(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(C(22))}}},{withTypes:()=>Gt}),Qt=Object.assign(I(`${de}/add`),{withTypes:()=>Qt});I(`${de}/removeAll`);var Yt=Object.assign(I(`${de}/remove`),{withTypes:()=>Yt});function C(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ue={exports:{}},Ke={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=Qe;function Jt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zt=typeof Object.is=="function"?Object.is:Jt,er=B.useSyncExternalStore,tr=B.useRef,rr=B.useEffect,nr=B.useMemo,or=B.useDebugValue;Ke.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=tr(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=nr(function(){function f(y){if(!a){if(a=!0,u=y,y=n(y),o!==void 0&&s.hasValue){var d=s.value;if(o(d,y))return l=d}return l=y}if(d=l,Zt(u,y))return d;var _=n(y);return o!==void 0&&o(d,_)?d:(u=y,l=_)}var a=!1,u,l,p=r===void 0?null:r;return[function(){return f(t())},p===null?void 0:function(){return f(p())}]},[t,r,n,o]);var c=er(e,i[0],i[1]);return rr(function(){s.hasValue=!0,s.value=c},[c]),or(c),c};Ue.exports=Ke;var ir=Ue.exports,R="default"in he?Ye:he,xe=Symbol.for("react-redux-context"),Oe=typeof globalThis<"u"?globalThis:{};function sr(){if(!R.createContext)return{};const e=Oe[xe]??(Oe[xe]=new Map);let t=e.get(R.createContext);return t||(t=R.createContext(null),e.set(R.createContext,t)),t}var A=sr(),cr=()=>{throw new Error("uSES not initialized!")};function pe(e=A){return function(){return R.useContext(e)}}var qe=pe(),He=cr,ur=e=>{He=e},fr=(e,t)=>e===t;function ar(e=A){const t=e===A?qe:pe(e),r=(n,o={})=>{const{equalityFn:i=fr,devModeChecks:s={}}=typeof o=="function"?{equalityFn:o}:o,{store:c,subscription:f,getServerState:a,stabilityCheck:u,identityFunctionCheck:l}=t();R.useRef(!0);const p=R.useCallback({[n.name](d){return n(d)}}[n.name],[n,u,s.stabilityCheck]),y=He(f.addNestedSub,c.getState,a||c.getState,p,i);return R.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}var Cr=ar();function lr(e){e()}function dr(){let e=null,t=null;return{clear(){e=null,t=null},notify(){lr(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const o=t={callback:r,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!n||e===null||(n=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Pe={notify(){},get:()=>[]};function pr(e,t){let r,n=Pe,o=0,i=!1;function s(_){u();const h=n.subscribe(_);let b=!1;return()=>{b||(b=!0,h(),l())}}function c(){n.notify()}function f(){d.onStateChange&&d.onStateChange()}function a(){return i}function u(){o++,r||(r=e.subscribe(f),n=dr())}function l(){o--,r&&o===0&&(r(),r=void 0,n.clear(),n=Pe)}function p(){i||(i=!0,u())}function y(){i&&(i=!1,l())}const d={addNestedSub:s,notifyNestedSubs:c,handleChangeWrapper:f,isSubscribed:a,trySubscribe:p,tryUnsubscribe:y,getListeners:()=>n};return d}var yr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hr=typeof navigator<"u"&&navigator.product==="ReactNative",wr=yr||hr?R.useLayoutEffect:R.useEffect;function mr({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",identityFunctionCheck:i="once"}){const s=R.useMemo(()=>{const a=pr(e);return{store:e,subscription:a,getServerState:n?()=>n:void 0,stabilityCheck:o,identityFunctionCheck:i}},[e,n,o,i]),c=R.useMemo(()=>e.getState(),[e]);wr(()=>{const{subscription:a}=s;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),c!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[s,c]);const f=t||A;return R.createElement(f.Provider,{value:s},r)}var Er=mr;function Xe(e=A){const t=e===A?qe:pe(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var _r=Xe();function br(e=A){const t=e===A?_r:Xe(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Rr=br();ur(ir.useSyncExternalStoreWithSelector);export{Er as P,Sr as a,Cr as b,gr as c,Rr as u};

"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}require("react"),require("react-markdown");var r,t={exports:{}},n={exports:{}},o={};var i,a,c,u,s,f,p,l,y,d,m,b,v,g,h={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function S(){return a||(a=1,"production"===process.env.NODE_ENV?n.exports=function(){if(r)return o;r=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case f:case p:case i:case c:case a:case y:return e;default:switch(e=e&&e.$$typeof){case s:case l:case b:case m:case u:return e;default:return r}}case n:return r}}}function w(e){return O(e)===p}return o.AsyncMode=f,o.ConcurrentMode=p,o.ContextConsumer=s,o.ContextProvider=u,o.Element=t,o.ForwardRef=l,o.Fragment=i,o.Lazy=b,o.Memo=m,o.Portal=n,o.Profiler=c,o.StrictMode=a,o.Suspense=y,o.isAsyncMode=function(e){return w(e)||O(e)===f},o.isConcurrentMode=w,o.isContextConsumer=function(e){return O(e)===s},o.isContextProvider=function(e){return O(e)===u},o.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},o.isForwardRef=function(e){return O(e)===l},o.isFragment=function(e){return O(e)===i},o.isLazy=function(e){return O(e)===b},o.isMemo=function(e){return O(e)===m},o.isPortal=function(e){return O(e)===n},o.isProfiler=function(e){return O(e)===c},o.isStrictMode=function(e){return O(e)===a},o.isSuspense=function(e){return O(e)===y},o.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===c||e===a||e===y||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===s||e.$$typeof===l||e.$$typeof===g||e.$$typeof===h||e.$$typeof===S||e.$$typeof===v)},o.typeOf=O,o}():n.exports=(i||(i=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,l=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var l=e.$$typeof;switch(l){case r:var m=e.type;switch(m){case u:case s:case n:case i:case o:case p:return m;default:var b=m&&m.$$typeof;switch(b){case c:case f:case d:case y:case a:return b;default:return l}}case t:return l}}}var O=u,w=s,E=c,x=a,$=r,j=f,T=n,_=d,P=y,R=t,k=i,C=o,N=p,I=!1;function q(e){return S(e)===s}h.AsyncMode=O,h.ConcurrentMode=w,h.ContextConsumer=E,h.ContextProvider=x,h.Element=$,h.ForwardRef=j,h.Fragment=T,h.Lazy=_,h.Memo=P,h.Portal=R,h.Profiler=k,h.StrictMode=C,h.Suspense=N,h.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),q(e)||S(e)===u},h.isConcurrentMode=q,h.isContextConsumer=function(e){return S(e)===c},h.isContextProvider=function(e){return S(e)===a},h.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},h.isForwardRef=function(e){return S(e)===f},h.isFragment=function(e){return S(e)===n},h.isLazy=function(e){return S(e)===d},h.isMemo=function(e){return S(e)===y},h.isPortal=function(e){return S(e)===t},h.isProfiler=function(e){return S(e)===i},h.isStrictMode=function(e){return S(e)===o},h.isSuspense=function(e){return S(e)===p},h.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===s||e===i||e===o||e===p||e===l||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===a||e.$$typeof===c||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g||e.$$typeof===m)},h.typeOf=S}()),h)),n.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function O(){if(u)return c;u=1;var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;return c=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))r.call(i,s)&&(c[s]=i[s]);if(e){a=e(i);for(var f=0;f<a.length;f++)t.call(i,a[f])&&(c[a[f]]=i[a[f]])}}return c},c}function w(){if(f)return s;f=1;return s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function E(){return l?p:(l=1,p=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var x=S();t.exports=function(){if(b)return m;b=1;var e=S(),r=O(),t=w(),n=E(),o=function(){if(d)return y;d=1;var e=function(){};if("production"!==process.env.NODE_ENV){var r=w(),t={},n=E();e=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function o(o,i,a,c,u){if("production"!==process.env.NODE_ENV)for(var s in o)if(n(o,s)){var f;try{if("function"!=typeof o[s]){var p=Error((c||"React class")+": "+a+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}f=o[s](i,s,c,a,null,r)}catch(e){f=e}if(!f||f instanceof Error||e((c||"React class")+": type specification of "+a+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in t)){t[f.message]=!0;var l=u?u():"";e("Failed "+a+" type: "+f.message+(null!=l?l:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(t={})},y=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),m=function(c,u){var s="function"==typeof Symbol&&Symbol.iterator,f="<<anonymous>>",p={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:d(a),arrayOf:function(e){return d((function(r,n,o,i,a){if("function"!=typeof e)return new y("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=r[n];if(!Array.isArray(c))return new y("Invalid "+i+" `"+a+"` of type `"+g(c)+"` supplied to `"+o+"`, expected an array.");for(var u=0;u<c.length;u++){var s=e(c,u,o,i,a+"["+u+"]",t);if(s instanceof Error)return s}return null}))},element:d((function(e,r,t,n,o){var i=e[r];return c(i)?null:new y("Invalid "+n+" `"+o+"` of type `"+g(i)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:d((function(r,t,n,o,i){var a=r[t];return e.isValidElementType(a)?null:new y("Invalid "+o+" `"+i+"` of type `"+g(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return d((function(r,t,n,o,i){if(!(r[t]instanceof e)){var a=e.name||f;return new y("Invalid "+o+" `"+i+"` of type `"+((c=r[t]).constructor&&c.constructor.name?c.constructor.name:f)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var c;return null}))},node:d((function(e,r,t,n,o){return v(e[r])?null:new y("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(r,o,i,a,c){if("function"!=typeof e)return new y("Property `"+c+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var u=r[o],s=g(u);if("object"!==s)return new y("Invalid "+a+" `"+c+"` of type `"+s+"` supplied to `"+i+"`, expected an object.");for(var f in u)if(n(u,f)){var p=e(u,f,i,a,c+"."+f,t);if(p instanceof Error)return p}return null}))},oneOf:function(e){return Array.isArray(e)?d((function(r,t,n,o,i){for(var a=r[t],c=0;c<e.length;c++)if(l(a,e[c]))return null;var u=JSON.stringify(e,(function(e,r){return"symbol"===h(r)?String(r):r}));return new y("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+u+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var r=0;r<e.length;r++){var o=e[r];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(o)+" at index "+r+"."),a}return d((function(r,o,i,a,c){for(var u=[],s=0;s<e.length;s++){var f=(0,e[s])(r,o,i,a,c,t);if(null==f)return null;f.data&&n(f.data,"expectedType")&&u.push(f.data.expectedType)}return new y("Invalid "+a+" `"+c+"` supplied to `"+i+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return d((function(r,n,o,i,a){var c=r[n],u=g(c);if("object"!==u)return new y("Invalid "+i+" `"+a+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");for(var s in e){var f=e[s];if("function"!=typeof f)return b(o,i,a,s,h(f));var p=f(c,s,o,i,a+"."+s,t);if(p)return p}return null}))},exact:function(e){return d((function(o,i,a,c,u){var s=o[i],f=g(s);if("object"!==f)return new y("Invalid "+c+" `"+u+"` of type `"+f+"` supplied to `"+a+"`, expected `object`.");var p=r({},o[i],e);for(var l in p){var d=e[l];if(n(e,l)&&"function"!=typeof d)return b(a,c,u,l,h(d));if(!d)return new y("Invalid "+c+" `"+u+"` key `"+l+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(s,l,a,c,u+"."+l,t);if(m)return m}return null}))}};function l(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function y(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function d(e){if("production"!==process.env.NODE_ENV)var r={},n=0;function o(o,a,c,s,p,l,d){if(s=s||f,l=l||c,d!==t){if(u){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=s+":"+c;!r[b]&&n<3&&(i("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[b]=!0,n++)}}return null==a[c]?o?null===a[c]?new y("The "+p+" `"+l+"` is marked as required in `"+s+"`, but its value is `null`."):new y("The "+p+" `"+l+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(a,c,s,p,l)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function m(e){return d((function(r,t,n,o,i,a){var c=r[t];return g(c)!==e?new y("Invalid "+o+" `"+i+"` of type `"+h(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,t,n,o){return new y((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||c(e))return!0;var r=function(e){var r=e&&(s&&e[s]||e["@@iterator"]);if("function"==typeof r)return r}(e);if(!r)return!1;var t,n=r.call(e);if(r!==e.entries){for(;!(t=n.next()).done;)if(!v(t.value))return!1}else for(;!(t=n.next()).done;){var o=t.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function g(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function h(e){if(null==e)return""+e;var r=g(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function S(e){var r=h(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return y.prototype=Error.prototype,p.checkPropTypes=o,p.resetWarningCache=o.resetWarningCache,p.PropTypes=p,p},m}()(x.isElement,!0)}else t.exports=function(){if(g)return v;g=1;var e=w();function r(){}function t(){}return t.resetWarningCache=r,v=function(){function n(r,t,n,o,i,a){if(a!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:r};return i.PropTypes=i,i}}()();var $=e(t.exports);function j({task:e,backgroundColor:r,taskColors:t}){}j.propTypes={task:$.shape({id:$.number.isRequired,title:$.string.isRequired,description:$.string.isRequired,estimated_time:$.number.isRequired,anticipated_start_time:$.string,anticipated_end_time:$.string,remaining_time:$.number.isRequired,status:$.string.isRequired}).isRequired,backgroundColor:$.string.isRequired,taskColors:$.shape({backlog:$.string.isRequired,planned:$.string.isRequired,closed:$.string.isRequired}).isRequired},module.exports=j;
//# sourceMappingURL=index.js.map

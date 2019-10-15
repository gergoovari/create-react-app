/*! For license information please see content---docs-proxying-api-requests-in-development-5-f-5-67c.6c1476f6084b3ae57eee.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(130);var r=n(129);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={id:"proxying-api-requests-in-development",title:"Proxying API Requests in Development",sidebar_label:"Proxying in Development"},l=[{value:'"Invalid Host Header" Errors After Configuring Proxy',id:"invalid-host-header-errors-after-configuring-proxy",children:[]},{value:"Configuring the Proxy Manually",id:"configuring-the-proxy-manually",children:[]}],c={rightToc:l},u="wrapper";function p(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(u,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@0.2.3")," and higher.")),Object(r.b)("p",null,"People often serve the front-end React app from the same host and port as their backend implementation."),Object(r.b)("p",null,"For example, a production setup might look like this after the app is deployed:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"/             - static server returns index.html with React app\n/todos        - static server returns index.html with React app\n/api/todos    - server handles any /api/* requests using the backend implementation\n")),Object(r.b)("p",null,"Such setup is ",Object(r.b)("strong",{parentName:"p"},"not")," required. However, if you ",Object(r.b)("strong",{parentName:"p"},"do")," have a setup like this, it is convenient to write requests like ",Object(r.b)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," without worrying about redirecting them to another host or port during development."),Object(r.b)("p",null,"To tell the development server to proxy any unknown requests to your API server in development, add a ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," field to your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", for example:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-json"}),'  "proxy": "http://localhost:4000",\n')),Object(r.b)("p",null,"This way, when you ",Object(r.b)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," in development, the development server will recognize that it’s not a static asset, and will proxy your request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:4000/api/todos")," as a fallback. The development server will ",Object(r.b)("strong",{parentName:"p"},"only")," attempt to send requests without ",Object(r.b)("inlineCode",{parentName:"p"},"text/html")," in its ",Object(r.b)("inlineCode",{parentName:"p"},"Accept")," header to the proxy."),Object(r.b)("p",null,"Conveniently, this avoids ",Object(r.b)("a",o({parentName:"p"},{href:"https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations"}),"CORS issues")," and error messages like this in development:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.\n")),Object(r.b)("p",null,"Keep in mind that ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," only has effect in development (with ",Object(r.b)("inlineCode",{parentName:"p"},"npm start"),"), and it is up to you to ensure that URLs like ",Object(r.b)("inlineCode",{parentName:"p"},"/api/todos")," point to the right thing in production. You don’t have to use the ",Object(r.b)("inlineCode",{parentName:"p"},"/api")," prefix. Any unrecognized request without a ",Object(r.b)("inlineCode",{parentName:"p"},"text/html")," accept header will be redirected to the specified ",Object(r.b)("inlineCode",{parentName:"p"},"proxy"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option supports HTTP, HTTPS and WebSocket connections."),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option is ",Object(r.b)("strong",{parentName:"p"},"not")," flexible enough for you, alternatively you can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"#configuring-the-proxy-manually"}),"Configure the proxy yourself")),Object(r.b)("li",{parentName:"ul"},"Enable CORS on your server (",Object(r.b)("a",o({parentName:"li"},{href:"https://enable-cors.org/server_expressjs.html"}),"here’s how to do it for Express"),")."),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",o({parentName:"li"},{href:"/docs/adding-custom-environment-variables"}),"environment variables")," to inject the right server host and port into your app.")),Object(r.b)("h2",{id:"invalid-host-header-errors-after-configuring-proxy"},'"Invalid Host Header" Errors After Configuring Proxy'),Object(r.b)("p",null,"When you enable the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in ",Object(r.b)("a",o({parentName:"p"},{href:"https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a"}),"this article")," and ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/webpack/webpack-dev-server/issues/887"}),"this issue"),"."),Object(r.b)("p",null,"This shouldn’t affect you when developing on ",Object(r.b)("inlineCode",{parentName:"p"},"localhost"),", but if you develop remotely like ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/2271"}),"described here"),", you will see this error in the browser after enabling the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Invalid Host header")),Object(r.b)("p",null,"To work around it, you can specify your public development host in a file called ",Object(r.b)("inlineCode",{parentName:"p"},".env.development")," in the root of your project:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"HOST=mypublicdevhost.com\n")),Object(r.b)("p",null,"If you restart the development server now and load the app from the specified host, it should work."),Object(r.b)("p",null,"If you are still having issues or if you’re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to ",Object(r.b)("inlineCode",{parentName:"p"},".env.development.local"),". ",Object(r.b)("strong",{parentName:"p"},"Note that this is dangerous and exposes your machine to remote code execution from malicious websites:")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"# NOTE: THIS IS DANGEROUS!\n# It exposes your machine to attacks from the websites you visit.\nDANGEROUSLY_DISABLE_HOST_CHECK=true\n")),Object(r.b)("p",null,"We don’t recommend this approach."),Object(r.b)("h2",{id:"configuring-the-proxy-manually"},"Configuring the Proxy Manually"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," option is ",Object(r.b)("strong",{parentName:"p"},"not")," flexible enough for you, you can get direct access to the Express app instance and hook up your own proxy middleware."),Object(r.b)("p",null,"You can use this feature in conjunction with the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," property in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", but it is recommended you consolidate all of your logic into ",Object(r.b)("inlineCode",{parentName:"p"},"src/setupProxy.js"),"."),Object(r.b)("p",null,"First, install ",Object(r.b)("inlineCode",{parentName:"p"},"http-proxy-middleware")," using npm or Yarn:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"$ npm install http-proxy-middleware --save\n$ # or\n$ yarn add http-proxy-middleware\n")),Object(r.b)("p",null,"Next, create ",Object(r.b)("inlineCode",{parentName:"p"},"src/setupProxy.js")," and place the following contents in it:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"const proxy = require('http-proxy-middleware');\n\nmodule.exports = function(app) {\n  // ...\n};\n")),Object(r.b)("p",null,"You can now register proxies as you wish! Here's an example using the above ",Object(r.b)("inlineCode",{parentName:"p"},"http-proxy-middleware"),":"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"const proxy = require('http-proxy-middleware');\n\nmodule.exports = function(app) {\n  app.use(\n    '/api',\n    proxy({\n      target: 'http://localhost:5000',\n      changeOrigin: true,\n    })\n  );\n};\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," You do not need to import this file anywhere. It is automatically registered when you start the development server.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," This file only supports Node's JavaScript syntax. Be sure to only use supported language features (i.e. no support for Flow, ES Modules, etc).")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," Passing the path to the proxy function allows you to use globbing and/or pattern matching on the path, which is more flexible than the express route matching.")))}p.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),s=r,b=p[l+"."+s]||p[s]||u[s]||a;return n?o.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(b,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},130:function(e,t,n){"use strict";e.exports=n(131)},131:function(e,t,n){"use strict";var r=n(132),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,b=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,l],u=0;(e=Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||v}function x(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var N=w.prototype=new x;N.constructor=w,r(N,g.prototype),N.isPureReactComponent=!0;var k={current:null},C={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r=void 0,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var q=/\/+/g,T=[];function R(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case i:c=!0}}if(c)return r(o,t,""===n?"."+A(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+A(l=t[u],u);c+=e(l,p,r,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=y&&t[y]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,p=n+A(l,u++),r,o);else"object"===l&&O("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function H(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(q,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(q,"$&/")+"/"),I(e,M,t=R(t,a,r,o)),$(t)}function U(){var e=k.current;return null===e&&O("321"),e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,H,t=R(null,null,t,n)),$(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){return E(e)||O("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:l,StrictMode:c,Suspense:d,createElement:_,cloneElement:function(e,t,n){null==e&&O("267",e);var o=void 0,i=r({},e.props),l=e.key,c=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,u=C.current),void 0!==t.key&&(l=""+t.key);var p=void 0;for(o in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)S.call(t,o)&&!P.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==p?p[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){p=Array(o);for(var s=0;s<o;s++)p[s]=arguments[s+2];i.children=p}return{$$typeof:a,type:e.type,key:l,ref:c,props:i,_owner:u}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.8.6",unstable_ConcurrentMode:b,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:C,assign:r}},L={default:F},Y=L&&F||L;e.exports=Y.default||Y},132:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))o.call(n,p)&&(c[p]=n[p]);if(r){l=r(n);for(var s=0;s<l.length;s++)a.call(n,l[s])&&(c[l[s]]=n[l[s]])}}return c}}}]);
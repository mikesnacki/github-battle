(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{28:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(t,"a",function(){return s}),r.d(t,"b",function(){return l});var o="?client-id=".concat("0f77694dbec610df9c46","&client_secret=").concat("278497750cde4ecc47a58d94c02a7b7880435465");function a(e,t){return"Not Found"===e?"".concat(t," doesn't exist"):e}function c(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(o,"&per_page=100")).then(function(e){return e.json()}).then(function(t){if(t.message)throw new Error(a(t.message,e));return t})}function i(e,t){return 3*e+function(e){return e.reduce(function(e,t){return e+t.stargazers_count},0)}(t)}function u(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t).concat(o)).then(function(e){return e.json()}).then(function(e){if(e.message)throw new Error(a(e.message,t));return e})),c(e)]).then(function(e){var t=n(e,2),r=t[0],o=t[1];return{profile:r,score:i(r.followers,o)}});var t}function s(e){return Promise.all([u(e[0]),u(e[1])]).then(function(e){return function(e){return e.sort(function(e,t){return t.score-e.score})}(e)})}function l(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then(function(e){return e.json()}).then(function(e){if(!e.items)throw new Error(error.message);return e.items})}},29:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r(0),o=r.n(n),a=r(1),c=r.n(a),i=r(4);function u(e){var t=e.header,r=e.avatar,n=e.subheader,a=e.href,c=e.name,u=e.children;return o.a.createElement(i.a,null,function(e){var i=e.theme;return o.a.createElement("div",{className:"card bg-".concat(i)},o.a.createElement("h4",{className:"header-lg center-text"},t),o.a.createElement("img",{className:"avatar",src:r,alt:"Avatar for ".concat(c)}),n&&o.a.createElement("h4",{className:"center-text"},n),o.a.createElement("h2",{className:"center-text"},o.a.createElement("a",{href:a},c)),u)})}u.propTypes={header:c.a.string.isRequired,subheader:c.a.string,avatar:c.a.string.isRequired,href:c.a.string.isRequired,name:c.a.string.isRequired}},30:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),c=r.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=this,o=(e=s(t)).call.apply(e,[this].concat(c)),r=!o||"object"!==i(o)&&"function"!=typeof o?l(n):o,p(l(r),"state",{hovering:!1}),p(l(r),"mouseOver",function(){r.setState({hovering:!0})}),p(l(r),"mouseOut",function(){r.setState({hovering:!1})}),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){return o.a.createElement("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},this.props.children(this.state.hovering))}}])&&u(r.prototype,n),a&&u(r,a),t}();r.d(t,"a",function(){return y});var d={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}};function y(e){var t=e.text,r=e.children;return o.a.createElement(m,null,function(e){return o.a.createElement("div",{style:d.container},!0===e&&o.a.createElement("div",{style:d.tooltip},t),r)})}y.propTypes={text:c.a.string.isRequired}},31:function(e,t,r){"use strict";const n=r(32),o=r(33),a=r(34);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function i(e,t){return t.decode?o(e):e}function u(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function s(e){const t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function l(e,t){const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":return(e,t,r)=>{const n="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;r[e]=n};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){let[e,c]=a(o.replace(/\+/g," "),"=");c=void 0===c?null:i(c,t),t.parseNumbers&&!Number.isNaN(Number(c))?c=Number(c):!t.parseBooleans||null===c||"true"!==c.toLowerCase()&&"false"!==c.toLowerCase()||(c="true"===c.toLowerCase()),r(i(e,t),c,n)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=s,t.parse=l,t.stringify=(e,t)=>{if(!e)return"";const r=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n?r:null===n?[...r,[c(t,e),"[",o,"]"].join("")]:[...r,[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"comma":return t=>(r,n,o)=>null==n||0===n.length?r:0===o?[[c(t,e),"=",c(n,e)].join("")]:[[r,c(n,e)].join(",")];default:return t=>(r,n)=>void 0===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),n=Object.keys(e);return!1!==t.sort&&n.sort(t.sort),n.map(n=>{const o=e[n];return void 0===o?"":null===o?c(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):c(n,t)+"="+c(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>({url:u(e).split("?")[0]||"",query:l(s(e),t)})},32:function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},33:function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function c(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=a(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=c(r[0]);n!==r[0]&&(t[r[0]]=n)}r=o.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),i=0;i<a.length;i++){var u=a[i];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}},34:function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},37:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return E});var n=r(0),o=r.n(n),a=r(28),c=r(6),i=r(29),u=r(8),s=r(30),l=r(1),f=r.n(l),p=r(31),m=r.n(p),d=r(7);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=e.profile;return o.a.createElement("ul",{className:"card-list"},o.a.createElement("li",null,o.a.createElement(s.a,{text:"User's Name"},o.a.createElement(c.k,{color:"rgba(239,115,115",size:22}),t.name)),t.location&&o.a.createElement("li",null,o.a.createElement(s.a,{text:"User's Location"},o.a.createElement(c.c,{color:"rgb(144, 116,255)",size:22}),t.location)),t.company&&o.a.createElement("li",null,o.a.createElement(s.a,{text:"User's Company"},o.a.createElement(c.a,{color:"#795548",size:22}),t.company)),o.a.createElement("li",null,o.a.createElement(c.m,{color:"rgba(129,195,245",size:22}),t.followers.toLocaleString()," followers"),o.a.createElement("li",null,o.a.createElement(c.l,{color:"rgba(64,183, 95",size:22}),t.following.toLocaleString()," following"))}w.propTypes={profile:f.a.object.isRequired};var E=function(e){function t(){var e,r,n,o,a,c,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,s=new Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=this,r=!(o=(e=b(t)).call.apply(e,[this].concat(s)))||"object"!==y(o)&&"function"!=typeof o?g(n):o,a=g(r),i={winner:null,loser:null,error:null,loading:!0},(c="state")in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,r}var r,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this,t=m.a.parse(this.props.location.search),r=t.playerOne,n=t.playerTwo;Object(a.a)([r,n]).then(function(t){e.setState({winner:t[0],loser:t[1],error:null,loading:!1})}).catch(function(t){e.setState({error:t,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.winner,r=e.loser,n=e.error;return!0===e.loading?o.a.createElement(u.a,{text:"Battling"}):n?o.a.createElement("p",{className:"center-text error"},n):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"grid space-around container-sm"},o.a.createElement(i.a,{header:t.score===r.score?"Tie":"Winner",subheader:"Score ".concat(t.score.toLocaleString()),avatar:t.profile.avatar_url,href:t.profile.html_url,name:t.profile.name},o.a.createElement(w,{profile:t.profile})),o.a.createElement(i.a,{header:t.score===r.score?"Tie":"Loser",subheader:"Score: ".concat(r.score.toLocaleString()),avatar:r.profile.avatar_url,name:r.profile.login,href:r.profile.html_url},o.a.createElement(w,{profile:r.profile}))),o.a.createElement(d.a,{to:"/battle",className:"btn btn-dark btn-space",onClick:this.props.onReset},"Reset"))}}])&&h(r.prototype,n),c&&h(r,c),t}()}}]);
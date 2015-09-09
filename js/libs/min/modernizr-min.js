window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function o(e,t){return r(E.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&v[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+S.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+C.join(r+" ")+r).split(" "),s(o,t,n))}var u="2.8.3",d={},f=!0,p=t.documentElement,m="modernizr",h=t.createElement(m),v=h.style,g,y=":)",b={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",S=x.split(" "),C=x.toLowerCase().split(" "),M={svg:"http://www.w3.org/2000/svg"},T={},j={},w={},z=[],k=z.slice,N,F=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:m+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),l.id=m,(u?l:d).innerHTML+=i,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=p.style.overflow,p.style.overflow="hidden",p.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),p.style.overflow=s),!!a},O=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+m+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A={}.hasOwnProperty,L;L=i(A,"undefined")||i(A.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return A.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=k.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(k.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(k.call(arguments)))};return r}),T.flexbox=function(){return l("flexWrap")},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",E.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(v.backgroundColor,"rgba")},T.backgroundsize=function(){return l("backgroundSize")},T.csscolumns=function(){return l("columnCount")},T.csstransitions=function(){return l("transition")},T.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},T.generatedcontent=function(){var e;return F(["#",m,"{font:0/0 a}#",m,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(M.svg,"svg").createSVGRect};for(var P in T)L(T,P)&&(N=P.toLowerCase(),d[N]=T[P](),z.push((d[N]?"":"no-")+N));return d.addTest=function(e,t){if("object"==typeof e)for(var r in e)L(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,"undefined"!=typeof f&&f&&(p.className+=" "+(t?"":"no-")+e),d[e]=t}return d},r(""),h=g=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[m]];return t||(t={},h++,e[m]=h,v[h]=t),t}function i(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||d.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return y.shivCSS&&!p&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:$main-color;}template{display:none}")),g||c(e,r),e}var l="3.7.0",u=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p,m="_html5shiv",h=0,v={},g;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){p=!0,g=!0}}();var y={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:u.shivCSS!==!1,supportsUnknownElements:g,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=y,s(t)}(this,t),d._version=u,d._prefixes=E,d._domPrefixes=C,d._cssomPrefixes=S,d.mq=O,d.testProp=function(e){return c([e])},d.testAllProps=l,d.testStyles=F,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+z.join(" "):""),d}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=h.shift();v=1,e?e.t?f(function(){("c"==e.t?w.injectCss:w.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):v=0}function s(e,n,r,o,i,s,l){function u(t){if(!m&&a(d.readyState)&&(E.r=m=1,!v&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&f(function(){b.removeChild(d)},50);for(var r in M[n])M[n].hasOwnProperty(r)&&M[n][r].onload()}}var l=l||w.errorTimeout,d=t.createElement(e),m=0,g=0,E={t:r,s:n,e:i,a:s,x:l};1===M[n]&&(g=1,M[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},h.splice(o,0,E),"img"!=e&&(g||2===M[n]?(b.insertBefore(d,y?null:p),f(u,l)):M[n].push(d))}function l(e,t,n,r,i){return v=0,t=t||"j",o(e)?s("c"==t?x:E,e,t,this.i++,n,r,i):(h.splice(this.i++,0,e),1==h.length&&c()),this}function u(){var e=w;return e.loader={load:l,i:0},e}var d=t.documentElement,f=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],v=0,g="MozAppearance"in d.style,y=g&&!!t.createRange().compareNode,b=y?d:p.parentNode,d=e.opera&&"[object Opera]"==m.call(e.opera),d=!!t.attachEvent&&!d,E=g?"object":d?"script":"img",x=d?"script":E,S=Array.isArray||function(e){return"[object Array]"==m.call(e)},C=[],M={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},j,w;w=function(e){function t(e){var e=e.split("!"),t=C.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},o,i,a;for(i=0;r>i;i++)a=e[i].split("="),(o=T[a.shift()])&&(n=o(n,a));for(i=0;t>i;i++)n=C[i](n);return n}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(M[s.url]?s.noexec=!0:M[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),M[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(l=function(){var e=[].slice.call(arguments);u.apply(this,e),d()}),a(e,l,t,0,c);else if(Object(e)===e)for(p in f=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--f&&(r(l)?l=function(){var e=[].slice.call(arguments);u.apply(this,e),d()}:l[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(u[p])),a(e[p],l,t,p,c))}else!n&&d()}var c=!!e.test,s=e.load||e.both,l=e.callback||i,u=l,d=e.complete||i,f,p;n(c?e.yep:e.nope,!!s),s&&n(s)}var s,l,d=this.yepnope.loader;if(o(e))a(e,0,d,0);else if(S(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,d,0):S(l)?w(l):Object(l)===l&&c(l,d);else Object(e)===e&&c(e,d)},w.addPrefix=function(e,t){T[e]=t},w.addFilter=function(e){C.push(e)},w.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",j=function(){t.removeEventListener("DOMContentLoaded",j,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u=t.createElement("script"),d,m,o=o||w.errorTimeout;u.src=e;for(m in r)u.setAttribute(m,r[m]);n=l?c:n||i,u.onreadystatechange=u.onload=function(){!d&&a(u.readyState)&&(d=1,n(),u.onload=u.onreadystatechange=null)},f(function(){d||(d=1,n(1))},o),s?u.onload():p.parentNode.insertBefore(u,p)},e.yepnope.injectCss=function(e,n,r,o,a,s){var o=t.createElement("link"),l,n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(p.parentNode.insertBefore(o,p),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(){var e=document.createElement("a"),t=e.style,n="right 10px bottom 10px";Modernizr.addTest("bgpositionshorthand",function(){return t.cssText="background-position: "+n+";",t.backgroundPosition===n})}(),Modernizr.addTest("boxsizing",function(){return Modernizr.testAllProps("boxSizing")&&(void 0===document.documentMode||document.documentMode>7)}),Modernizr.addTest("cssfilters",function(){var e=document.createElement("div");return e.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!e.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){return e.lastChild.offsetWidth>e.firstChild.offsetWidth},2)}),Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("svgfilters",function(){var e=!1;try{e=void 0!==typeof SVGFEColorMatrixElement&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e});
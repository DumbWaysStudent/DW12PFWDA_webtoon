(function(){var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={O:!0},ea={};try{ea.__proto__=da;ca=ea.O;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba,ha=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype},f=this||self,ia=/^[\w+/_-]+[=]{0,2}$/,h=null,ja=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},k=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ka=function(a,b,c){return a.call.apply(a.bind,arguments)},la=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}},l=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l=ka:l=la;return l.apply(null,arguments)},ma=Date.now||function(){return+new Date},m=function(a,b){a=a.split(".");var c=f;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b},n=function(a,b){function c(){}c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a};var na=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var qa=function(a,b){this.a=a===oa&&b||"";this.f=pa},pa={},oa={};var ra=function(){};var p=function(){var a=document.body.offsetHeight;this.width=document.body.offsetWidth;this.height=a};p.prototype.aspectRatio=function(){return this.width/this.height};p.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};p.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};p.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var q=function(a){return(new sa).m(a)},sa=function(){};sa.prototype.m=function(a){var b=[];ta(this,a,b);return b.join("")};var ta=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==ja(b)){var d=b;b=d.length;c.push("[");for(var e="",g=0;g<b;g++)c.push(e),ta(a,d[g],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(g=b[d],"function"!=typeof g&&(c.push(e),ua(d,c),c.push(":"),ta(a,g,c),e=","));c.push("}");return}}switch(typeof b){case "string":ua(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},va={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},wa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g,ua=function(a,b){b.push('"',a.replace(wa,function(c){var d=va[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),va[c]=d);return d}),'"')};var r=function(a,b,c,d){this.j=a;this.g=b;this.f=c;this.a=d},t=function(a){return new r(a.j,a.g,a.f,a.a)};r.prototype.ceil=function(){this.j=Math.ceil(this.j);this.g=Math.ceil(this.g);this.f=Math.ceil(this.f);this.a=Math.ceil(this.a);return this};r.prototype.floor=function(){this.j=Math.floor(this.j);this.g=Math.floor(this.g);this.f=Math.floor(this.f);this.a=Math.floor(this.a);return this};r.prototype.round=function(){this.j=Math.round(this.j);this.g=Math.round(this.g);this.f=Math.round(this.f);this.a=Math.round(this.a);return this};var u=!1,v=function(a){if(a=a.match(/[\d]+/g))a.length=3};(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(u=!0,a.description)){v(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){u=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],u=!(!a||!a.enabledPlugin))){v(a.enabledPlugin.description);return}if("undefined"!=typeof ActiveXObject){try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");u=!0;v(b.GetVariable("$version"));return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");u=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),u=!0,v(b.GetVariable("$version"))}catch(c){}}})();var xa=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var ya=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var za=function(a,b){var c=window;c.addEventListener&&c.addEventListener(a,b,!1)};var Aa=function(a,b){this.f=a;this.a=b||Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ma()).toString(36)},Ba=function(a){var b={};na(a,function(c){b[c.f]=c.a});return b},Ca=function(){var a=w.goog_safeframe_hlt,b=[];a&&xa(a,function(c,d){b.push(new Aa(parseInt(d,10),c))});return b};var Da=function(){var a=void 0===a?f:a;return(a=a.performance)&&a.now?a.now():null};var x=function(a,b,c,d,e,g){this.o=a;this.status=1;this.g=b;this.u=c;this.H=d;this.F=!!e;this.j=Math.random();this.f={};this.a=null;this.D=l(this.G,this);this.A=g};ha(x,ra);x.prototype.G=function(a){if(a.origin===this.u&&(this.F||a.source==this.g)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(k(b)&&(a=b.i,b.c===this.o&&a!=this.j)){if(2!==this.status)try{this.status=2,Ea(this),this.a&&(this.a(),this.a=null)}catch(c){}a=b.s;b=b.p;if("string"===typeof a&&("string"===typeof b||k(b))&&this.f.hasOwnProperty(a))this.f[a](b)}}};var Ea=function(a){var b={};b.c=a.o;b.i=a.j;a.A&&(b.e=a.A);a.g.postMessage(q(b),a.u)};x.prototype.B=function(){if(1===this.status){try{this.g.postMessage&&Ea(this)}catch(a){}window.setTimeout(l(this.B,this),50)}};x.prototype.connect=function(a){a&&(this.a=a);za("message",this.D);this.H&&this.B()};var Fa=function(a,b,c){var d={};d.c=a.o;d.i=a.j;d.s=b;d.p=c;try{a.g.postMessage(q(d),a.u)}catch(e){}};var Ga=function(a,b,c,d,e,g,y){this.g=t(a);this.a=t(b);this.f=y?t(y):null;this.A=c;this.j=t(d);this.o=e;this.u=g};Ga.prototype.m=function(){var a={windowCoords_t:this.g.j,windowCoords_r:this.g.g,windowCoords_b:this.g.f,windowCoords_l:this.g.a,frameCoords_t:this.a.j,frameCoords_r:this.a.g,frameCoords_b:this.a.f,frameCoords_l:this.a.a,styleZIndex:this.A,allowedExpansion_t:this.j.j,allowedExpansion_r:this.j.g,allowedExpansion_b:this.j.f,allowedExpansion_l:this.j.a,xInView:this.o,yInView:this.u};this.f&&(a.posCoords_t=this.f.j,a.posCoords_b=this.f.f,a.posCoords_l=this.f.a,a.posCoords_r=this.f.g);return q(a)};var z=function(a){a=JSON.parse(a);if(!(k(a)&&"number"===typeof a.windowCoords_t&&"number"===typeof a.windowCoords_r&&"number"===typeof a.windowCoords_b&&"number"===typeof a.windowCoords_l&&"number"===typeof a.frameCoords_t&&"number"===typeof a.frameCoords_r&&"number"===typeof a.frameCoords_b&&"number"===typeof a.frameCoords_l&&"string"===typeof a.styleZIndex&&"number"===typeof a.allowedExpansion_t&&"number"===typeof a.allowedExpansion_r&&"number"===typeof a.allowedExpansion_b&&"number"===typeof a.allowedExpansion_l&&"number"===typeof a.xInView&&0<=a.xInView&&1>=a.xInView&&"number"===typeof a.yInView&&0<=a.yInView&&1>=a.yInView)||void 0!==a.posCoords_t&&"number"!==typeof a.posCoords_t||void 0!==a.posCoords_b&&"number"!==typeof a.posCoords_b||void 0!==a.posCoords_r&&"number"!==typeof a.posCoords_r||void 0!==a.posCoords_l&&"number"!==typeof a.posCoords_l||void 0!==a.posCoords_t&&(void 0===a.posCoords_b||void 0===a.posCoords_l||void 0===a.posCoords_r))throw Error("Cannot parse JSON geometry");var b=new r(a.windowCoords_t,a.windowCoords_r,a.windowCoords_b,a.windowCoords_l),c=new r(a.frameCoords_t,a.frameCoords_r,a.frameCoords_b,a.frameCoords_l),d=new r(a.allowedExpansion_t,a.allowedExpansion_r,a.allowedExpansion_b,a.allowedExpansion_l),e;void 0!==a.posCoords_t&&(e=new r(a.posCoords_t,a.posCoords_r,a.posCoords_b,a.posCoords_l));return new Ga(b,c,a.styleZIndex,d,a.xInView,a.yInView,e)};var Ha=function(a){this.a=a;this.o=null;this.f=this.status=0;this.j=null;this.M="sfchannel"+a},A=function(a){return 1==a.status||2==a.status};var Ia=function(){this.f=B};Ia.prototype.m=function(){return q(this.f)};var Ja=function(){var a=C.expandByPush,b=C.readCookie,c=C.writeCookie;this.f=C.expandByOverlay;this.a=a;this.g=b;this.j=c};Ja.prototype.m=function(){return q({expandByOverlay:this.f,expandByPush:this.a,readCookie:this.g,writeCookie:this.j})};var Ka={NONE:0,T:1,S:2};var Qa=function(){var a=w.uid,b=w.hostPeerName,c=Ma,d=Na,e=Oa,g=w.reportCreativeGeometry,y=w.isDifferentSourceWindow,N="encryptionMode"in w?w.encryptionMode:null,O=Pa,La=w.sentinel;O=void 0===O?[]:O;this.A=a;this.a=b;this.g=c;this.u=d;this.j=e;this.B=g;this.o=y;this.F=O;this.f=void 0===La?"":La;this.D=N};Qa.prototype.m=function(){var a={};a=(a.uid=this.A,a.hostPeerName=this.a,a.initialGeometry=this.g.m(),a.permissions=this.u.m(),a.metadata=this.j.m(),a.reportCreativeGeometry=this.B,a.isDifferentSourceWindow=this.o,a.goog_safeframe_hlt=Ba(this.F),a.encryptionMode=this.D,a);this.f&&(a.sentinel=this.f);return q(a)};var Ra=/^([^;]+);(\d+);([\s\S]*)$/;function D(a){return"number"===typeof a||"string"===typeof a}var E=function(a,b){this.f=a;this.g=b};E.prototype.m=function(a){this.g&&(a.sentinel=this.g);return q(a)};var F=function(a,b,c){E.call(this,a,void 0===c?"":c);this.version=b};n(F,E);F.prototype.m=function(){return F.C.m.call(this,{uid:this.f,version:this.version})};var G=function(a,b,c,d){E.call(this,a,void 0===d?"":d);this.j=b;this.a=c};n(G,E);G.prototype.m=function(){return G.C.m.call(this,{uid:this.f,initialWidth:this.j,initialHeight:this.a})};var H=function(a,b,c){E.call(this,a,void 0===c?"":c);this.a=b};n(H,E);H.prototype.m=function(){return H.C.m.call(this,{uid:this.f,description:this.a})};var I=function(a,b,c,d){E.call(this,a,void 0===d?"":d);this.a=b;this.push=c};n(I,E);I.prototype.m=function(){return I.C.m.call(this,{uid:this.f,expand_t:this.a.j,expand_r:this.a.g,expand_b:this.a.f,expand_l:this.a.a,push:this.push})};var J=function(a,b){E.call(this,a,void 0===b?"":b)};n(J,E);J.prototype.m=function(){return J.C.m.call(this,{uid:this.f})};var K=function(a,b,c){E.call(this,a,void 0===c?"":c);this.a=b};n(K,E);K.prototype.m=function(){return K.C.m.call(this,{uid:this.f,shrink_t:this.a.j,shrink_r:this.a.g,shrink_b:this.a.f,shrink_l:this.a.a})};var L=function(a,b,c,d){E.call(this,a,void 0===d?"":d);this.a=b;this.push=c};n(L,E);L.prototype.m=function(){return L.C.m.call(this,{uid:this.f,resize_t:this.a.j,resize_r:this.a.g,resize_b:this.a.f,resize_l:this.a.a,push:this.push})};var M=function(a,b,c){E.call(this,a,void 0===c?"":c);this.j=b};n(M,E);var Sa=function(a){a=JSON.parse(a);if(!k(a)||!D(a.uid)||"string"!==typeof a.newGeometry)throw Error("Cannot parse JSON message");var b=z(a.newGeometry);return new M(a.uid,b,a.sentinel)};M.prototype.m=function(){var a={uid:this.f,newGeometry:this.j.m()};return M.C.m.call(this,a)};var Ta=function(a,b,c,d,e,g){M.call(this,a,c,void 0===g?"":g);this.o=b;this.a=d;this.push=e};n(Ta,M);Ta.prototype.m=function(){var a={uid:this.f,success:this.o,newGeometry:this.j.m(),expand_t:this.a.j,expand_r:this.a.g,expand_b:this.a.f,expand_l:this.a.a,push:this.push};this.g&&(a.sentinel=this.g);return q(a)};var Ua=function(a,b,c,d){M.call(this,a,c,void 0===d?"":d);this.a=b};n(Ua,M);Ua.prototype.m=function(){var a={uid:this.f,success:this.a,newGeometry:this.j.m()};this.g&&(a.sentinel=this.g);return q(a)};var Va=function(a,b,c,d,e){M.call(this,a,c,void 0===e?"":e);this.a=b;this.o=d};n(Va,M);Va.prototype.m=function(){var a={uid:this.f,success:this.a,newGeometry:this.j.m(),expand_t:this.o.j,expand_r:this.o.g,expand_b:this.o.f,expand_l:this.o.a};this.g&&(a.sentinel=this.g);return q(a)};var P=function(a,b,c,d){E.call(this,a,void 0===d?"":d);this.width=b;this.height=c};n(P,E);P.prototype.m=function(){return P.C.m.call(this,{uid:this.f,width:this.width,height:this.height})};var R=function(a){Ha.call(this,a.A);this.B=a.u;this.L=a.j;this.D=null;this.A=[];this.u=0;this.o=a.g;this.g=a.f;this.j=new x(this.M,window.parent,a.a,!0,a.o,this.g);var b=l(this.J,this);this.j.f.expand_response=b;b=l(this.G,this);this.j.f.collapse_response=b;b=l(this.F,this);this.j.f.resize_response=b;b=l(this.F,this);this.j.f.shrink_response=b;b=l(this.K,this);this.j.f.geometry_update=b;this.j.connect(l(this.N,this));this.status=1;Q(this,"init_done",new F(this.a,"1-0-36",this.g));a.B&&(a=l(R.prototype.I,this),za("load",a),za("resize",a))};ha(R,Ha);R.prototype.register=function(a,b,c){this.status=2;this.D=c;Q(this,"register_done",new G(this.a,a,b,this.g))};var S=function(a,b){Q(a,"report_error",new H(a.a,b,a.g))};R.prototype.N=function(){for(var a=0;a<this.A.length;a++)Fa(this.j,this.A[a].type,this.A[a].message.m())};R.prototype.J=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(3!=this.f)throw Error("Container is not expanding");if("string"!==typeof a)throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!k(b)||!D(b.uid)||"boolean"!==typeof b.success||"string"!==typeof b.newGeometry||"number"!==typeof b.expand_t||"number"!==typeof b.expand_r||"number"!==typeof b.expand_b||"number"!==typeof b.expand_l||"boolean"!==typeof b.push)throw Error("Cannot parse JSON message");var c=z(b.newGeometry);var d=new Ta(b.uid,b.success,c,new r(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push,b.sentinel);if(this.a!=d.f)throw Error("Wrong source container");this.f=d.o?2:0;this.o=d.j;T(this,d.o?"expanded":"failed",d.push?"exp-push":"exp-ovr","",{t:d.a.j,r:d.a.g,b:d.a.f,l:d.a.a,push:d.push})}catch(e){}};R.prototype.F=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(5!=this.f)throw Error("Container is not resizing");if("string"!==typeof a)throw Error("Could not parse serialized message");try{var b=JSON.parse(a);if(!k(b)||!D(b.uid)||"boolean"!==typeof b.success||"string"!==typeof b.newGeometry)throw Error("Cannot parse JSON message");var c=z(b.newGeometry);var d=new Ua(b.uid,b.success,c,b.sentinel)}catch(y){var e=JSON.parse(a);if(!k(e)||!D(e.uid)||"boolean"!==typeof e.success||"string"!==typeof e.newGeometry||"number"!==typeof e.expand_t||"number"!==typeof e.expand_r||"number"!==typeof e.expand_b||"number"!==typeof e.expand_l)throw Error("Cannot parse JSON message");var g=z(e.newGeometry);d=new Va(e.uid,e.success,g,new r(e.expand_t,e.expand_r,e.expand_b,e.expand_l),e.sentinel)}if(this.a!=d.f)throw Error("Wrong source container");this.f=d.a?4:0;this.o=d.j;T(this,d.a?"resized":"failed","resize","",{})}catch(y){}};R.prototype.G=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(1!=this.f)throw Error("Container is not collapsing");if("string"!==typeof a)throw Error("Could not parse serialized message");var b=Sa(a);if(this.a!=b.f)throw Error("Wrong source container");this.f=0;this.o=b.j;T(this,"collapsed","collapse","",void 0)}catch(c){}};R.prototype.K=function(a){try{if(!A(this))throw Error("Container is not initialized or registered");if("string"!==typeof a)throw Error("Could not parse serialized message");var b=Sa(a);if(this.a!=b.f)throw Error("Wrong source container");this.o=b.j;T(this,"geom-update","","",void 0)}catch(c){}};var T=function(a,b,c,d,e){if(null!==a.D)try{a.D(b,{cmd:c,reason:d,info:e})}catch(g){S(a,"Could not manage to call user-supplied callback")}},V=function(a,b,c,d){setTimeout(l(function(){T(this,a,b,c,d)},U),0)},Q=function(a,b,c){2===a.j.status?Fa(a.j,b,c.m()):a.A.push({type:b,message:c})},Wa=function(a){var b=new p;Q(a,"creative_geometry_update",new P(a.a,b.width,b.height,a.g))};R.prototype.H=function(){2==this.u&&Wa(this);this.u=0};R.prototype.I=function(){switch(this.u){case 0:Wa(this);setTimeout(l(this.H,this),200);this.u=1;break;case 1:this.u=2}};var Xa=function(a,b,c){var d=window;return function(){var e=Da(),g=3;try{var y=b.apply(this,arguments)}catch(N){g=13;if(c)return c(a,N),y;throw N;}finally{d.google_measure_js_timing&&e&&(e={label:a.toString(),value:e,duration:(Da()||0)-e,type:g},g=d.google_js_reporting_queue=d.google_js_reporting_queue||[],2048>g.length&&g.push(e))}return y}},W=function(a,b){return Xa(a,b,function(c,d){if(!(Math.random()>(void 0===e?.01:e)||(d.error&&d.meta&&d.id||(d=new ya(d,{context:c,id:void 0===g?"jserror":g})),f.google_js_errors=f.google_js_errors||[],f.google_js_errors.push(d),f.error_rep_loaded))){var e=f.document;c=e.createElement("script");var g=new qa(oa,f.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js");c.src=g instanceof qa&&g.constructor===qa&&g.f===pa?g.a:"type_error:TrustedResourceUrl";if(null===h)b:{g=f.document;if((g=g.querySelector&&g.querySelector("script[nonce]"))&&(g=g.nonce||g.getAttribute("nonce"))&&ia.test(g)){h=g;break b}h=""}(g=h)&&c.setAttribute("nonce",g);(e=e.getElementsByTagName("script")[0])&&e.parentNode&&e.parentNode.insertBefore(c,e);f.error_rep_loaded=!0}})};var Ya=function(a,b,c){if(2==U.status)S(U,"Called register multiple times");else if("number"!==typeof a||0>=a)S(U,"Invalid initial width");else if("number"!==typeof b||0>=b)S(U,"Invalid initial height");else{var d=null;if(null!=c){if("function"!=ja(c)){S(U,"Invalid callback function");return}d=c}U.register(a,b,d)}},Za=function(){return A(U)?{"exp-ovr":U.B.f,"exp-push":U.B.a,"read-cookie":U.B.g,"write-cookie":U.B.j}:(S(U,"Called supports on bad container"),null)},$a=function(){if(!A(U))return S(U,"Called geom on bad container"),null;var a=U.o,b={win:{t:a.g.j,r:a.g.g,b:a.g.f,l:a.g.a,w:a.g.g-a.g.a,h:a.g.f-a.g.j},self:{t:a.a.j,r:a.a.g,b:a.a.f,l:a.a.a,w:a.a.g-a.a.a,h:a.a.f-a.a.j,z:parseInt(a.A,10),xiv:a.o,yiv:a.u,iv:a.o*a.u},exp:{t:a.j.j,r:a.j.g,b:a.j.f,l:a.j.a,xs:!1,yx:!1}};a.f&&(b.pos={t:a.f.j,r:a.f.g,b:a.f.f,l:a.f.a,w:a.f.g-a.f.a,h:a.f.f-a.f.j});return b},ab=function(){if(!A(U))return S(U,"Called inViewPercentage on bad container"),null;var a=U.o;return a.o*a.u*100},bb=function(){if(!A(U))return S(U,"Called status on bad container"),null;switch(U.f){case 0:return"collapsed";case 1:return"collapsing";case 2:return"expanded";case 3:return"expanding";case 4:return"resized";case 5:return"resizing";default:return null}},cb=function(a,b){if(!A(U))return S(U,"Called meta on bad container"),null;if("string"!==typeof a||/^[\s\xa0]*$/.test(null==a?"":String(a)))return S(U,"Invalid property name"),null;var c="shared";if(null!=b){if("string"!==typeof b||/^[\s\xa0]*$/.test(null==b?"":String(b)))return S(U,"Invalid owner key"),null;c=b}b=U.L;return null==b.f[c]||null==b.f[c][a]?null:b.f[c][a]},db=function(a,b){2==U.status?"string"!==typeof a||/^[\s\xa0]*$/.test(a)?S(U,"Invalid cookie name"):((a=null==b)||!(a=k(b)&&"string"===typeof b.info)||(a=null==b.expires)||(a=b.expires,a=k(a)&&"function"==typeof a.getFullYear),a?(V("unsupported",null!=b?"write-cookie":"read-cookie","$sf.ext.cookie is not supported",b),S(U,"Used unsupported cookie operations")):(V("failed","write-cookie","Invalid $sf.ext.cookie arguments",b),S(U,"Invalid cookie data"))):S(U,"Called cookie on unregistered container")},eb=function(a){if(2==U.status)if(0==U.f)if(k(a)&&(null!=a.t||null!=a.r||null!=a.b||null!=a.l)&&(null==a.t||"number"===typeof a.t&&0<=a.t)&&(null==a.r||"number"===typeof a.r&&0<=a.r)&&(null==a.b||"number"===typeof a.b&&0<=a.b)&&(null==a.l||"number"===typeof a.l&&0<=a.l)&&(null==a.push||"boolean"===typeof a.push)){var b=new r(a.t||0,a.r||0,a.b||0,a.l||0);a=a.push||!1;var c=U;c.f=3;Q(c,"expand_request",new I(c.a,b,a,c.g))}else V("failed",k(a)&&"boolean"===typeof a.push&&1==a.push?"exp-push":"exp-ovr","Invalid $sf.ext.expand arguments",a),S(U,"Invalid expand data");else S(U,"Called expand on uncollapsed container");else S(U,"Called expand on unregistered container")},fb=function(a){if(2==U.status)if(1==U.f||3==U.f||5==U.f)S(U,"Called resize on container in incorrect state.");else{var b=!k(a)||null==a.t&&null==a.r&&null==a.b&&null==a.l||null!=a.t&&"number"!==typeof a.t||null!=a.r&&"number"!==typeof a.r||null!=a.b&&"number"!==typeof a.b||null!=a.l&&"number"!==typeof a.l?null:a;if(b){a=new r(b.t||0,b.r||0,b.b||0,b.l||0);b=b.push||!1;var c=U;0<a.j||0<a.f||0<a.g||0<a.a?(c.f=3,Q(c,"expand_request",new I(c.a,a,b,c.g))):(c.f=5,Q(c,"shrink_request",new K(c.a,new r(-a.j,-a.g,-a.f,-a.a),c.g)));Q(c,"resize_request",new L(c.a,a,b,c.g))}else V("failed","resize","Invalid $sf.ext.resize arguments",a),S(U,"Invalid resize data")}else S(U,"Called resize on unregistered container")},gb=function(){if(2==U.status){var a;(a=2==U.f)||(a=4==U.f);a?(a=U,a.f=1,Q(a,"collapse_request",new J(a.a,a.g))):S(U,"Called collapse on collapsed container")}else S(U,"Called collapse on unregistered container")},hb=null,ib=!1;try{ib=!!f.sf_.cfg._context.ampcontextVersion}catch(a){}var X=window,jb=!(X!=X.parent&&X.parent==X.top);try{var kb,lb;if(f.sf_)kb=f.sf_.cfg,lb=f.sf_.v;else{var mb,nb=window.name,Y=Ra.exec(nb);if(null===Y)throw Error("Cannot parse serialized data. "+nb.substring(0,50));var ob=+Y[2],pb=Y[3];if(ob>pb.length)throw Error("Parsed content size doesn't match. "+ob+":"+pb.length);mb={R:Y[1],content:pb.substr(0,ob),P:pb.substr(ob)};kb=JSON.parse(mb.P);lb=mb.R}var qb=lb,rb,w=kb,sb;if(!(sb="string"!==typeof w.uid&&"number"!==typeof w.uid||"string"!==typeof w.hostPeerName||"string"!==typeof w.initialGeometry||"string"!==typeof w.permissions||"string"!==typeof w.metadata||"boolean"!==typeof w.reportCreativeGeometry||"boolean"!==typeof w.isDifferentSourceWindow||null!=w.sentinel&&"string"!==typeof w.sentinel)){var tb;if(!(tb=null==w.encryptionMode)){var ub={},vb;for(vb in Ka)ub[Ka[vb]]=vb;tb=w.encryptionMode in ub}sb=!tb}if(sb||w.goog_safeframe_hlt&&!k(w.goog_safeframe_hlt))throw Error("Cannot parse config");var Ma=z(w.initialGeometry),C=JSON.parse(w.permissions);if(!k(C)||"boolean"!==typeof C.expandByOverlay||"boolean"!==typeof C.expandByPush||"boolean"!==typeof C.readCookie||"boolean"!==typeof C.writeCookie)throw Error("Cannot parse JSON permissions");var Na=new Ja,Z=JSON.parse(w.metadata),wb;(wb=!k(Z))||(wb=!!(!k(Z.shared)||"string"!==typeof Z.shared.sf_ver||"number"!==typeof Z.shared.ck_on||"string"!==typeof Z.shared.flash_ver||Z.shared.canonical_url&&"string"!==typeof Z.shared.canonical_url||Z.shared.amp&&(!k(Z.shared.amp)||Z.shared.amp.canonical_url&&"string"!==typeof Z.shared.amp.canonical_url)));if(wb)throw Error("Cannot parse JSON metadata");var B={shared:{sf_ver:Z.shared.sf_ver,ck_on:Z.shared.ck_on,flash_ver:Z.shared.flash_ver}};Z.shared.canonical_url&&(B.shared.canonical_url=Z.shared.canonical_url);Z.shared.amp&&(B.shared.is_amp=!0,B.shared.canonical_url=Z.shared.amp.canonical_url);var Oa=new Ia,Pa=Ca();rb=new Qa;if(!rb.f&&"1-0-36"!=qb)throw Error("Host has different version from ext container");hb=new R(rb);if(ib||!jb)m("$sf.ext.register",W(441,Ya)),m("$sf.ext.supports",W(443,Za)),m("$sf.ext.geom",W(438,$a)),m("$sf.ext.inViewPercentage",W(439,ab)),m("$sf.ext.status",W(442,bb)),m("$sf.ext.meta",W(440,cb)),m("$sf.ext.cookie",W(436,db)),m("$sf.ext.expand",W(437,eb)),m("$sf.ext.collapse",W(435,gb)),hb.g&&m("$sf.ext.resize",fb)}catch(a){}f.sf_=void 0;window.name="";var U=hb;}).call(this);

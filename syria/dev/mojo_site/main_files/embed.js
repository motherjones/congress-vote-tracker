if(typeof window.Care2Widget == "undefined") {

/******************************
* PETITIONSITE WIDGET CODE
* Copyright Care2, Inc. 2012
******************************/

if(!this.JSON){JSON=function(){function f(n){return n<10?'0'+n:n;}
Date.prototype.toJSON=function(){return this.getFullYear()+'-'+
f(this.getMonth()+1)+'-'+
f(this.getDate())+'T'+
f(this.getHours())+':'+
f(this.getMinutes())+':'+
f(this.getSeconds())+'Z';};var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};function stringify(value,whitelist){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;switch(typeof value){case'string':return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];if(c){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"':'"'+value+'"';case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
if(typeof value.toJSON==='function'){return stringify(value.toJSON());}
a=[];if(typeof value.length==='number'&&!(value.propertyIsEnumerable('length'))){l=value.length;for(i=0;i<l;i+=1){a.push(stringify(value[i],whitelist)||'null');}
return'['+a.join(',')+']';}
if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}else{for(k in value){if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}
return'{'+a.join(',')+'}';}}
return{stringify:stringify,parse:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==='object'){for(i in v){if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined){v[i]=n;}}}}
return filter(k,v);}
if(/^[\],:{}\s]*$/.test(text.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof filter==='function'?walk('',j):j;}
throw new SyntaxError('parseJSON');}};}();}

/* receiveMessage plug in. modified to remove jquery dependency from : http://benalman.com/projects/jquery-postmessage-plugin/ */
var interval_id,last_hash,rm_callback,FALSE=!1,c2postMessage='postMessage',c2addEventListener='addEventListener',has_postMessage = window[c2postMessage] && !(/opera/i.test(navigator.userAgent));var c2receiveMessage=function(callback,source_origin,delay){if(has_postMessage){if(callback){rm_callback && c2receiveMessage();rm_callback = function(e){if ( ( typeof source_origin === 'string' && e.origin !== source_origin )|| ( typeof source_origin === 'function' && source_origin( e.origin ) === FALSE ) ) {return FALSE;}callback( e );};}if ( window[c2addEventListener] ) {window[ callback ? c2addEventListener : 'removeEventListener' ]( 'message', rm_callback, FALSE );} else {window[ callback ? 'attachEvent' : 'detachEvent' ]( 'onmessage', rm_callback );}} else {interval_id && clearInterval( interval_id );interval_id = null;if ( callback ) {delay = typeof source_origin === 'number'? source_origin: typeof delay === 'number'? delay: 100;interval_id = setInterval(function(){var hash = document.location.hash,re = /^#?\d+&/;if ( hash !== last_hash && re.test( hash ) ) {last_hash = hash;callback({ data: hash.replace( re, '' ) });}}, delay );}}};

/*  SWFObject v2.2 <http://code.google.com/p/swfobject/>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
if(!swfobject){var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+encodeURI(O.location).toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule!=D){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();}

window.Care2Widgets = {
    widgets: {},
    flashVersion: "9.0.0",
    add: function(w) {
        var id = Math.floor(Math.random() * 10000000);

        var params = {
            rssPath: w.getAttribute("rssPath"),
            adSize: w.getAttribute("adSize"),
            publisherId: w.getAttribute("publisherId"),
            grabbed: w.getAttribute("grabbed"),
            flags: w.getAttribute("flags"),
            buttonColor: w.getAttribute("buttonColor"),
            pixel: w.getAttribute("pixel"),
            html: w.getAttribute("html")
        }

        try {
            var referrerDomain = document.referrer.split("//")[1].split("/")[0];
        } catch(e) {
            var referrerDomain = "";
        }

        if(parent.location != window.location && referrerDomain.indexOf("stumbleupon") < 0 && w.getAttribute("breakout") != "false") {

            var helperpath = w.getAttribute("helperpath")||false;
            var helperfile = "http://" + referrerDomain + (helperpath ? "/" + helperpath.replace(/^\/+|\/+$/g,'') : "") + "/care2PetitionHelper.html";

            var d = document.createElement('iframe');
            d.setAttribute('frameBorder', '0');
            d.style.display = "none";
            d.src = helperfile + "?referrer=" + escape(location.href) + "&params=" + escape(JSON.stringify(params));

            document.body.insertBefore(d, document.body.firstChild);

        } else {
            var newDivSize = this.getSizes(params.adSize).baseSize;

            w.className += " care2PetitionEmbedded";
            w.style.width = newDivSize.width+'px';
            w.style.height = newDivSize.height+'px';
            w.innerHTML = '<div class="care2PetitionWrapper" style="width:'+newDivSize.width+'px;height:'+newDivSize.height+'px;">' +
                        '<div class="care2PetitionContainer"></div></div>';
            this.widgets[id] = new window.Care2Widget(id, params, w);
        }
    },
    parse: function() {
        var d = document.getElementsByTagName("div");

        for(var i = 0, l = d.length; i < l; i++) {
            if(d[i].className === "care2PetitionEmbed") {
                this.add(d[i]);
            }
        }
    },
    cssMade: false,
    makeCSS: function() {
        if(this.cssMade) return false;

        swfobject.createCSS(".care2PetitionWrapper","position:absolute;");
        swfobject.createCSS(".care2PetitionContainer","position:absolute;");

        this.cssMade = true;
    },
    findByClass: function(c, w) {
        var testClass = new RegExp("(^|\\s)" + c + "(\\s|$)");
        var elements = w.getElementsByTagName("div");
        var current;
        var length = elements.length;
        for(var i=0; i<length; i++){
            current = elements[i];
            if(testClass.test(current.className)){
                return current;
            }
        }
        return false;
    },
    getBodyWidth : function() {
        return  document.documentElement && document.documentElement.clientWidth ||
                document.body && document.body.clientWidth ||
                document.body && document.body.parentNode && document.body.parentNode.clientWidth ||
                0;
    },
    getXY : function(el) {
        el = (typeof el == 'string') ? document.getElementById(el) : el;
        var pos = {top:0,left:0};
        if(el!=null&&el.offsetParent){
            do{
                pos.top+=el.offsetTop;
                pos.left+=el.offsetLeft;
            }while(el=el.offsetParent);
        }
        return pos;
    },
    getSizes: function(s) {
        var baseSize, expandedSize;

        switch(s) {
            case "small":
            case "305x255":
            case "300x250":
                baseSize={width:300,height:250};
                expandedSize={width:460,height:375};
                break;
            case "wide":
            case "500x190":
                baseSize={width:500,height:190};
                expandedSize={width:460,height:375};
                break;
            case "facebook":
            case "398x259":
                baseSize={width:398,height:259};
                expandedSize={width:398,height:259};
                break;
            case "180x250":
                baseSize={width:180,height:250};
                expandedSize={width:460,height:375};
                break;
            case "150x250":
                baseSize={width:150,height:250};
                expandedSize={width:460,height:375};
                break;
            case "180x150":
                baseSize={width:180,height:150};
                expandedSize={width:460,height:375};
                break;
            case "425x190":
                baseSize={width:425,height:190};
                expandedSize={width:460,height:375};
                break;
            default:
                baseSize={width:460,height:375};
                expandedSize={width:460,height:375};
                break;
        }

        return {
            baseSize     : baseSize,
            expandedSize : expandedSize
        }
    }
}

window.Care2Widget = function(id, params, w) {

    this.id = id;
    this.params = {};

    this.element = w;
    this.html = (w.getAttribute("html") || !swfobject.hasFlashPlayerVersion(window.Care2Widgets.flashVersion)) && navigator.appVersion.indexOf("MSIE 7.") < 0 && navigator.appVersion.indexOf("MSIE 6.") < 0;

    for(var i in params) {
        var key = (i == "publisherId") ? "publisherID" : i;
        this.params[key] = params[i];
    }
    for(var i in this.defaults) {
        if(typeof this.params[i] == "undefined" || !this.params[i]) {
            this.params[i] = this.defaults[i];
        }
    }
    this.embedPetition();

};

window.Care2Widget.prototype = {

    defaults : {
        rssPath           : "http://www.thepetitionsite.com/feeds/publisher/887/545/204/feed.swf",
        adSize            : "small",
        publisherID       : "1007",
        grabbed           : "0",
        buttonColor       : "#eb6924",
        flags             : "#000000",
        optionalOptinPath : "",
        wsdlUri           : "http://dingo.care2.com/xml/wsdl/petitions.wsdl",
        webserviceUri     : "http://www.thepetitionsite.com/metal_web_service",
        debug             : "false"
    },

    getURL : function(type) {
        var url="http://dingo.care2.com/petitions/widget/common/"
        switch(type){
            case "swf":
                url+="petition.swf";
                break;
            case "base":
                break;
            }
        return url;
    },

    check_align : function(body_width) {
        var elem = window.Care2Widgets.getXY(this.element);
        this.align = (elem.left + this.expandedSize.width > body_width) ? "right" : "left";
    },

    force_align : function() {

        if (this.expanded && this.align == "right") {
            this.flashContainer.style.left = -(this.expandedSize.width - this.baseSize.width) + "px";
        } else {
            this.flashContainer.style.left = 0;
        }

    },

    getFlashMovieObject : function() {

        if(window.document[this.flashID]) {
            return window.document[this.flashID];
        }

        if(navigator.appName.indexOf("Microsoft Internet")==-1){
            if(document.embeds && document.embeds[this.flashID])
            return document.embeds[this.flashID];
        }else{
            return document.getElementById(this.flashID);
        }

    },

    petition_grab : function() {
        var flashMovie = this.getFlashMovieObject();
        flashMovie.grabWidget();
    },

    resizeFlash : function(targetWidth, targetHeight) {

        this.expanded = (parseInt(targetWidth) == this.expandedSize.width && parseInt(targetHeight) == this.expandedSize.height);
        this.flashContainer.style.zIndex = this.expanded ? 100 : 1;
        this.flashContainer.style.width = targetWidth + "px";
        this.flashContainer.style.height = targetHeight + "px";

        this.force_align();

    },

    resizeHTML : function(expand) {

        this.expanded = expand;
        var size = this.expanded ? this.expandedSize : this.baseSize;
        this.flashContainer.style.zIndex = this.expanded ? 100 : 1;
        this.flashContainer.style.width = size.width + "px";
        this.flashContainer.style.height = size.height + "px";

        this.force_align();

    },

    embedPetition : function() {

        this.expanded = false;
        this.align = "left";
        window.Care2Widgets.makeCSS();

        var sizes = window.Care2Widgets.getSizes(this.params.adSize);
        this.baseSize = sizes.baseSize;
        this.expandedSize = sizes.expandedSize;
        this.params.adSize = this.baseSize.width + "x" + this.baseSize.height;

        this.flashContainer = window.Care2Widgets.findByClass("care2PetitionContainer", this.element);
        this.flashContainer.style.width = this.baseSize.width+'px';
        this.flashContainer.style.height = this.baseSize.height+'px';

        this.params.baseUrl = this.getURL("base");
        this.params.curDomain = window.location.hostname.toString();
        this.params.pageUrl = document.URL;

        this.params.id = this.id;

        var pixel = this.params.pixel;
        delete this.params.pixel;

        this.check_align(window.Care2Widgets.getBodyWidth());

        if(!this.html) {
            this.params.rssPath = this.params.rssPath.replace("feed.rss", "feed.swf");
            this.flashID = "care2petition_insertHere_" + this.id;
            this.flashContainer.innerHTML = '<div id="' + this.flashID + '" class="care2PetitionObject"></div>';

            swfobject.embedSWF(this.getURL("swf"),this.flashID,"100%","100%",window.Care2Widgets.flashVersion,"",this.params,
                    {wmode:"transparent",AllowScriptAccess:(this.params.adSize=="facebook")?"never":"always"});
        } else {
            delete this.params.wsdlUri;
            delete this.params.webserviceUri;
            delete this.params.baseUrl;
            delete this.params.pageUrl;

            this.params.rssPath = this.params.rssPath.replace("feed.swf", "feed.rss");
            var doc_domain = this.params.rssPath.match(/http(s?):\/\/(.*)www.thepetitionsite.com/)[0];
            this.flashContainer.innerHTML = '<iframe src="' + doc_domain + '/widget.html?params=' + escape(JSON.stringify(this.params)) + '" width="100%" height="100%" frameborder="0" border="0" scrolling="no"></iframe>';

            c2receiveMessage(function(e) {
                var data = {}, e_data = e.data.split("&");
                for(var l=e_data.length,i=0;i<l;i++) {
                    var spl = e_data[i].split("=");
                    data[spl[0]] = spl[1];
                }

                switch(data.action) {
                    case "expand_widget" :
                        window.Care2Widgets.widgets[data.id].resizeHTML(true);
                        break;
                    case "collapse_widget" :
                        window.Care2Widgets.widgets[data.id].resizeHTML(false);
                        break;
                }

            }, doc_domain );

        }

        if(pixel) {
            this.flashContainer.innerHTML += '<IMG SRC="' + pixel + '" WIDTH=1 HEIGHT=1 BORDER=0>';
        }

    }

}

swfobject.addDomLoadEvent(function() {
    window.Care2Widgets.parse();
});

window.onresize = function() {
    var body_width = window.Care2Widgets.getBodyWidth();
    for(var i in window.Care2Widgets.widgets) {
        window.Care2Widgets.widgets[i].check_align(body_width);
        window.Care2Widgets.widgets[i].force_align();
    }
}

} /* END IF */
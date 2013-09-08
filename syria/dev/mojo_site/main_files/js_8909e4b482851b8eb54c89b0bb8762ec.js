/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;

/**
 * Override jQuery.fn.init to guard against XSS attacks.
 *
 * See http://bugs.jquery.com/ticket/9521
 */
(function () {
  var jquery_init = jQuery.fn.init;
  jQuery.fn.init = function (selector, context, rootjQuery) {
    // If the string contains a "#" before a "<", treat it as invalid HTML.
    if (selector && typeof selector === 'string') {
      var hash_position = selector.indexOf('#');
      if (hash_position >= 0) {
        var bracket_position = selector.indexOf('<');
        if (bracket_position > hash_position) {
          throw 'Syntax error, unrecognized expression: ' + selector;
        }
      }
    }
    return jquery_init.call(this, selector, context, rootjQuery);
  };
  jQuery.fn.init.prototype = jquery_init.prototype;
})();

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'), args);
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim(xmlhttp.responseText)) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message.replace(/\n/g, '<br />');
}

// Global Killswitch on the <html> element
$(document.documentElement).addClass('js');
// Attach all behaviors.
$(document).ready(function() {
  Drupal.attachBehaviors(this);
});

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
// $Id: jstools.js,v 1.26 2008/04/03 17:59:37 nedjo Exp $

Drupal.preventSelect = function (elt) {
  // IE hack to prevent selection of the text when users click.
  if (document.onselectstart) {
    elt.onselectstart = function () {
      return false;
    }
  }
  else {
    $(elt).mousedown(function () {
      return false;
    });
  }
};

Drupal.url = function (path, query, fragment) {
  query = query ? query : '';
  fragment = fragment ? '#' + fragment : '';
  var base = Drupal.settings.basePath;
  if (!Drupal.settings.jstools.cleanurls) {
    if (query) {
      return base + '?q=' + path + '&' + query + fragment;
    }
    else {
      return base + '?q=' + path + fragment;
    }
  }
  else {
    if (query) {
      return base + path + '?' + query + fragment;
    }
    else {
      return base + path + fragment;
    }
  }
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.getPath = function (href) {
  href = Drupal.pathPortion(href);
  // 3 is the length of the '?q=' added to the url without clean urls.
  href = href.substring(Drupal.settings.basePath.length + (Drupal.settings.jstools.cleanurls ? 0 : 3), href.length);
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};

/**
 * Add a segment to the beginning of a path.
 */
Drupal.prependPath = function (href, segment) {
  href = Drupal.pathPortion(href);
  // 3 is the length of the '?q=' added to the url without clean urls.
  var baseLength = Drupal.settings.jstools.basePath.length + (Drupal.settings.jstools.cleanurls ? 0 : 3);
  var base = href.substring(0, baseLength);
  return base + segment + '/' + href.substring(baseLength, href.length);
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Scroll to a given element's vertical page position.
 */
Drupal.scrollTo = function(el) {
  var pos = Drupal.absolutePosition(el);
  window.scrollTo(0, pos.y);
};

Drupal.elementChildren = function (element) {
  var children = [];
  for (i in element) {
    if (i.substr(0, 1) != '#') {
      children[children.length] = i;
    }
  }
  return children;
};

Drupal.elementProperties = function (element) {
  var properties = [];
  for (i in element) {
    if (i.substr(0, 1) == '#') {
      properties[properties.length] = i;
    }
  }
  return properties;
};

Drupal.parseQueryString = function (href) {
  query = Drupal.getQueryString(href);
  var args = {};
  var pairs = query.split("&");
  for(var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=');
    if (pos == -1) continue;
    var argname = pairs[i].substring(0, pos);
    var value = pairs[i].substring(pos + 1);
    args[argname] = unescape(value.replace(/\+/g, " "));
  }
  return args;
};

Drupal.getQueryString = function (href) {
  if (href) {
    var index = href.indexOf('?');
    href = (index == -1) ? '' : href.substring(index + 1);
  }
  query = href ? href : location.search.substring(1);
  if (!Drupal.settings.jstools.cleanurls) {
    var index = query.indexOf('&');
    query = (index == -1) ? '' : query.substring(index + 1);
  }
  return query;
};

Drupal.pathMatch = function (path, paths, type) {
  // Convert paths into a regular expression.
  paths = '^' + paths + '$';
  paths = paths.replace(/\n/g, '$|^');
  paths = paths.replace(/\*/g, '.*');
  var search = path.search(new RegExp(paths)) > -1 ? true : false;
  return (type == 0) ? search : !search;
};

/**
 * Retrieves the absolute position of an element on the screen
 */
Drupal.absolutePosition = function (el) {
  var sLeft = 0, sTop = 0;
  var isDiv = /^div$/i.test(el.tagName);
  if (isDiv && el.scrollLeft) {
    sLeft = el.scrollLeft;
  }
  if (isDiv && el.scrollTop) {
    sTop = el.scrollTop;
  }
  var r = { x: el.offsetLeft - sLeft, y: el.offsetTop - sTop };
  if (el.offsetParent) {
    var tmp = Drupal.absolutePosition(el.offsetParent);
    r.x += tmp.x;
    r.y += tmp.y;
  }
  return r;
};

/**
 *  Returns the position of the mouse cursor based on the event object passed
 */
Drupal.mousePosition = function(e) {
  return { x: e.clientX + document.documentElement.scrollLeft, y: e.clientY + document.documentElement.scrollTop };
};;
// $Id: collapsiblock.js,v 1.7 2010/08/24 18:38:22 gagarine Exp $

Drupal.Collapsiblock = Drupal.Collapsiblock || {};

Drupal.behaviors.collapsiblock = function (context) {
  var cookieData = Drupal.Collapsiblock.getCookieData();
  var slidetype = Drupal.settings.collapsiblock.slide_type;
  var defaultState = Drupal.settings.collapsiblock.default_state;
  var slidespeed = parseInt(Drupal.settings.collapsiblock.slide_speed);
  var title = Drupal.settings.collapsiblock.block_title;
  var block = Drupal.settings.collapsiblock.block;
  var block_content = Drupal.settings.collapsiblock.block_content;
  $(block + ':not(.collapsiblock-processed)', context).addClass('collapsiblock-processed').each(function () {
    var id = this.id;
    var titleElt = $(title, this).not($('.content :header',this));
    if (titleElt.size()) {
      titleElt = titleElt[0];
      // Status values: 1 = not collapsible, 2 = collapsible and expanded, 3 = collapsible and collapsed, 4 = always collapsed
      var stat = Drupal.settings.collapsiblock.blocks[this.id] ? Drupal.settings.collapsiblock.blocks[this.id] : defaultState;
      if (stat == 1) {
        return;
      }

      titleElt.target = $(this).find(block_content);
      $(titleElt)
        .addClass('collapsiblock')
        .click(function () {
          var st = Drupal.Collapsiblock.getCookieData();
          if ($(this).is('.collapsiblockCollapsed')) {
            $(this).removeClass('collapsiblockCollapsed');
            if (slidetype == 1) {
              $(this.target).slideDown(slidespeed);
            }
            else {
              $(this.target).animate({height:'show', opacity:'show'}, slidespeed);
            }

            // Don't save cookie data if the block is always collapsed.
            if (stat != 4) {
              st[id] = 1;
            }
          } 
          else {
            $(this).addClass('collapsiblockCollapsed');
            if (slidetype == 1) {
              $(this.target).slideUp(slidespeed);
            }
            else {
              $(this.target).animate({height:'hide', opacity:'hide'}, slidespeed);
            }

            // Don't save cookie data if the block is always collapsed.
            if (stat != 4) {
              st[id] = 0;
            }
          }
          // Stringify the object in JSON format for saving in the cookie.
          var cookieString = '{ ';
          var cookieParts = [];
          $.each(st, function (id, setting) {
            cookieParts[cookieParts.length] = ' "' + id + '": ' + setting;
          });
          cookieString += cookieParts.join(', ') + ' }';
          $.cookie('collapsiblock', cookieString, {path: Drupal.settings.basePath});
        });
      // Leave active blocks uncollapsed. If the block is expanded, do nothing.
      if (stat ==  4 || (cookieData[id] == 0 || (stat == 3 && cookieData[id] == undefined)) && !$(this).find('a.active').size()) {
        $(titleElt).addClass('collapsiblockCollapsed');
        $(titleElt.target).hide();
      }
    }
  });
};

Drupal.Collapsiblock.getCookieData = function () {
  var cookieString = $.cookie('collapsiblock');
  return cookieString ? Drupal.parseJson(cookieString) : {};
};

  

;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};;
/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.2",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;
/*
 * jQuery UI Accordion 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	ui.core.js
 */(function(a){a.widget("ui.accordion",{_init:function(){var d=this.options,b=this;this.running=0;if(d.collapsible==a.ui.accordion.defaults.collapsible&&d.alwaysOpen!=a.ui.accordion.defaults.alwaysOpen){d.collapsible=!d.alwaysOpen}if(d.navigation){var c=this.element.find("a").filter(d.navigationFilter);if(c.length){if(c.filter(d.header).length){this.active=c}else{this.active=c.parent().parent().prev();c.addClass("ui-accordion-content-active")}}}this.element.addClass("ui-accordion ui-widget ui-helper-reset");if(this.element[0].nodeName=="UL"){this.element.children("li").addClass("ui-accordion-li-fix")}this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){a(this).removeClass("ui-state-focus")});this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");this.active=this._findActive(this.active||d.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");this.active.next().addClass("ui-accordion-content-active");a("<span/>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.find(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);if(a.browser.msie){this.element.find("a").css("zoom","1")}this.resize();this.element.attr("role","tablist");this.headers.attr("role","tab").bind("keydown",function(e){return b._keydown(e)}).next().attr("role","tabpanel");this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex","0")}else{this.active.attr("aria-expanded","true").attr("tabIndex","0")}if(!a.browser.safari){this.headers.find("a").attr("tabIndex","-1")}if(d.event){this.headers.bind((d.event)+".accordion",function(e){return b._clickHandler.call(b,e,this)})}},destroy:function(){var c=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");this.headers.find("a").removeAttr("tabindex");this.headers.children(".ui-icon").remove();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");if(c.autoHeight||c.fillHeight){b.css("height","")}},_setData:function(b,c){if(b=="alwaysOpen"){b="collapsible";c=!c}a.widget.prototype._setData.apply(this,arguments)},_keydown:function(e){var g=this.options,f=a.ui.keyCode;if(g.disabled||e.altKey||e.ctrlKey){return}var d=this.headers.length;var b=this.headers.index(e.target);var c=false;switch(e.keyCode){case f.RIGHT:case f.DOWN:c=this.headers[(b+1)%d];break;case f.LEFT:case f.UP:c=this.headers[(b-1+d)%d];break;case f.SPACE:case f.ENTER:return this._clickHandler({target:e.target},e.target)}if(c){a(e.target).attr("tabIndex","-1");a(c).attr("tabIndex","0");c.focus();return false}return true},resize:function(){var e=this.options,d;if(e.fillSpace){if(a.browser.msie){var b=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}d=this.element.parent().height();if(a.browser.msie){this.element.parent().css("overflow",b)}this.headers.each(function(){d-=a(this).outerHeight()});var c=0;this.headers.next().each(function(){c=Math.max(c,a(this).innerHeight()-a(this).height())}).height(Math.max(0,d-c)).css("overflow","auto")}else{if(e.autoHeight){d=0;this.headers.next().each(function(){d=Math.max(d,a(this).outerHeight())}).height(d)}}},activate:function(b){var c=this._findActive(b)[0];this._clickHandler({target:c},c)},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,f){var d=this.options;if(d.disabled){return false}if(!b.target&&d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var h=this.active.next(),e={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:h},c=(this.active=a([]));this._toggle(c,h,e);return false}var g=a(b.currentTarget||f);var i=g[0]==this.active[0];if(this.running||(!d.collapsible&&i)){return false}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");if(!i){g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);g.next().addClass("ui-accordion-content-active")}var c=g.next(),h=this.active.next(),e={options:d,newHeader:i&&d.collapsible?a([]):g,oldHeader:this.active,newContent:i&&d.collapsible?a([]):c.find("> *"),oldContent:h.find("> *")},j=this.headers.index(this.active[0])>this.headers.index(g[0]);this.active=i?a([]):g;this._toggle(c,h,e,i,j);return false},_toggle:function(b,i,g,j,k){var d=this.options,m=this;this.toShow=b;this.toHide=i;this.data=g;var c=function(){if(!m){return}return m._completed.apply(m,arguments)};this._trigger("changestart",null,this.data);this.running=i.size()===0?b.size():i.size();if(d.animated){var f={};if(d.collapsible&&j){f={toShow:a([]),toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}else{f={toShow:b,toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}if(!d.proxied){d.proxied=d.animated}if(!d.proxiedDuration){d.proxiedDuration=d.duration}d.animated=a.isFunction(d.proxied)?d.proxied(f):d.proxied;d.duration=a.isFunction(d.proxiedDuration)?d.proxiedDuration(f):d.proxiedDuration;var l=a.ui.accordion.animations,e=d.duration,h=d.animated;if(!l[h]){l[h]=function(n){this.slide(n,{easing:h,duration:e||700})}}l[h](f)}else{if(d.collapsible&&j){b.toggle()}else{i.hide();b.show()}c(true)}i.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();b.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()},_completed:function(b){var c=this.options;this.running=b?0:--this.running;if(this.running){return}if(c.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this._trigger("change",null,this.data)}});a.extend(a.ui.accordion,{version:"1.7.2",defaults:{active:null,alwaysOpen:true,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()}},animations:{slide:function(j,h){j=a.extend({easing:"swing",duration:300},j,h);if(!j.toHide.size()){j.toShow.animate({height:"show"},j);return}if(!j.toShow.size()){j.toHide.animate({height:"hide"},j);return}var c=j.toShow.css("overflow"),g,d={},f={},e=["height","paddingTop","paddingBottom"],b;var i=j.toShow;b=i[0].style.width;i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));a.each(e,function(k,m){f[m]="hide";var l=(""+a.css(j.toShow[0],m)).match(/^([\d+-.]+)(.*)$/);d[m]={value:l[1],unit:l[2]||"px"}});j.toShow.css({height:0,overflow:"hidden"}).show();j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(f,{step:function(k,l){if(l.prop=="height"){g=(l.now-l.start)/(l.end-l.start)}j.toShow[0].style[l.prop]=(g*d[l.prop].value)+d[l.prop].unit},duration:j.duration,easing:j.easing,complete:function(){if(!j.autoHeight){j.toShow.css("height","")}j.toShow.css("width",b);j.toShow.css({overflow:c});j.complete()}})},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})},easeslide:function(b){this.slide(b,{easing:"easeinout",duration:700})}}})})(jQuery);;
/*
 * jQuery UI Tabs 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	ui.core.js
 */(function(a){a.widget("ui.tabs",{_init:function(){if(this.options.deselectable!==undefined){this.options.collapsible=this.options.deselectable}this._tabify(true)},_setData:function(b,c){if(b=="selected"){if(this.options.collapsible&&c==this.options.selected){return}this.select(c)}else{this.options[b]=c;if(b=="deselectable"){this.options.collapsible=c}this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+a.data(b)},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+a.data(this.list[0]));return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(c,b){return{tab:c,panel:b,index:this.anchors.index(c)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(n){this.list=this.element.children("ul:first");this.lis=a("li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return a("a",this)[0]});this.panels=a([]);var p=this,d=this.options;var c=/^#.+/;this.anchors.each(function(r,o){var q=a(o).attr("href");var s=q.split("#")[0],u;if(s&&(s===location.toString().split("#")[0]||(u=a("base")[0])&&s===u.href)){q=o.hash;o.href=q}if(c.test(q)){p.panels=p.panels.add(p._sanitizeSelector(q))}else{if(q!="#"){a.data(o,"href.tabs",q);a.data(o,"load.tabs",q.replace(/#.*$/,""));var w=p._tabId(o);o.href="#"+w;var v=a("#"+w);if(!v.length){v=a(d.panelTemplate).attr("id",w).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(p.panels[r-1]||p.list);v.data("destroy.tabs",true)}p.panels=p.panels.add(v)}else{d.disabled.push(r)}}});if(n){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(d.selected===undefined){if(location.hash){this.anchors.each(function(q,o){if(o.hash==location.hash){d.selected=q;return false}})}if(typeof d.selected!="number"&&d.cookie){d.selected=parseInt(p._cookie(),10)}if(typeof d.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}d.selected=d.selected||0}else{if(d.selected===null){d.selected=-1}}d.selected=((d.selected>=0&&this.anchors[d.selected])||d.selected<0)?d.selected:0;d.disabled=a.unique(d.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(q,o){return p.lis.index(q)}))).sort();if(a.inArray(d.selected,d.disabled)!=-1){d.disabled.splice(a.inArray(d.selected,d.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(d.selected>=0&&this.anchors.length){this.panels.eq(d.selected).removeClass("ui-tabs-hide");this.lis.eq(d.selected).addClass("ui-tabs-selected ui-state-active");p.element.queue("tabs",function(){p._trigger("show",null,p._ui(p.anchors[d.selected],p.panels[d.selected]))});this.load(d.selected)}a(window).bind("unload",function(){p.lis.add(p.anchors).unbind(".tabs");p.lis=p.anchors=p.panels=null})}else{d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[d.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(d.cookie){this._cookie(d.selected,d.cookie)}for(var g=0,m;(m=this.lis[g]);g++){a(m)[a.inArray(g,d.disabled)!=-1&&!a(m).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(d.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(d.event!="mouseover"){var f=function(o,i){if(i.is(":not(.ui-state-disabled)")){i.addClass("ui-state-"+o)}};var j=function(o,i){i.removeClass("ui-state-"+o)};this.lis.bind("mouseover.tabs",function(){f("hover",a(this))});this.lis.bind("mouseout.tabs",function(){j("hover",a(this))});this.anchors.bind("focus.tabs",function(){f("focus",a(this).closest("li"))});this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var b,h;if(d.fx){if(a.isArray(d.fx)){b=d.fx[0];h=d.fx[1]}else{b=h=d.fx}}function e(i,o){i.css({display:""});if(a.browser.msie&&o.opacity){i[0].style.removeAttribute("filter")}}var k=h?function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.hide().removeClass("ui-tabs-hide").animate(h,h.duration||"normal",function(){e(o,h);p._trigger("show",null,p._ui(i,o[0]))})}:function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");p._trigger("show",null,p._ui(i,o[0]))};var l=b?function(o,i){i.animate(b,b.duration||"normal",function(){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");e(i,b);p.element.dequeue("tabs")})}:function(o,i,q){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");p.element.dequeue("tabs")};this.anchors.bind(d.event+".tabs",function(){var o=this,r=a(this).closest("li"),i=p.panels.filter(":not(.ui-tabs-hide)"),q=a(p._sanitizeSelector(this.hash));if((r.hasClass("ui-tabs-selected")&&!d.collapsible)||r.hasClass("ui-state-disabled")||r.hasClass("ui-state-processing")||p._trigger("select",null,p._ui(this,q[0]))===false){this.blur();return false}d.selected=p.anchors.index(this);p.abort();if(d.collapsible){if(r.hasClass("ui-tabs-selected")){d.selected=-1;if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){l(o,i)}).dequeue("tabs");this.blur();return false}else{if(!i.length){if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this));this.blur();return false}}}if(d.cookie){p._cookie(d.selected,d.cookie)}if(q.length){if(i.length){p.element.queue("tabs",function(){l(o,i)})}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(a.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var c=a.data(this,"href.tabs");if(c){this.href=c}var d=a(this).unbind(".tabs");a.each(["href","load","cache"],function(e,f){d.removeData(f+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(a.data(this,"destroy.tabs")){a(this).remove()}else{a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(b.cookie){this._cookie(null,b.cookie)}},add:function(e,d,c){if(c===undefined){c=this.anchors.length}var b=this,g=this.options,i=a(g.tabTemplate.replace(/#\{href\}/g,e).replace(/#\{label\}/g,d)),h=!e.indexOf("#")?e.replace("#",""):this._tabId(a("a",i)[0]);i.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var f=a("#"+h);if(!f.length){f=a(g.panelTemplate).attr("id",h).data("destroy.tabs",true)}f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(c>=this.lis.length){i.appendTo(this.list);f.appendTo(this.list[0].parentNode)}else{i.insertBefore(this.lis[c]);f.insertBefore(this.panels[c])}g.disabled=a.map(g.disabled,function(k,j){return k>=c?++k:k});this._tabify();if(this.anchors.length==1){i.addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){b._trigger("show",null,b._ui(b.anchors[0],b.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[c],this.panels[c]))},remove:function(b){var d=this.options,e=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();if(e.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(b+(b+1<this.anchors.length?1:-1))}d.disabled=a.map(a.grep(d.disabled,function(g,f){return g!=b}),function(g,f){return g>=b?--g:g});this._tabify();this._trigger("remove",null,this._ui(e.find("a")[0],c[0]))},enable:function(b){var c=this.options;if(a.inArray(b,c.disabled)==-1){return}this.lis.eq(b).removeClass("ui-state-disabled");c.disabled=a.grep(c.disabled,function(e,d){return e!=b});this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b]))},disable:function(c){var b=this,d=this.options;if(c!=d.selected){this.lis.eq(c).addClass("ui-state-disabled");d.disabled.push(c);d.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))}},select:function(b){if(typeof b=="string"){b=this.anchors.index(this.anchors.filter("[href$="+b+"]"))}else{if(b===null){b=-1}}if(b==-1&&this.options.collapsible){b=this.options.selected}this.anchors.eq(b).trigger(this.options.event+".tabs")},load:function(e){var c=this,g=this.options,b=this.anchors.eq(e)[0],d=a.data(b,"load.tabs");this.abort();if(!d||this.element.queue("tabs").length!==0&&a.data(b,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(e).addClass("ui-state-processing");if(g.spinner){var f=a("span",b);f.data("label.tabs",f.html()).html(g.spinner)}this.xhr=a.ajax(a.extend({},g.ajaxOptions,{url:d,success:function(i,h){a(c._sanitizeSelector(b.hash)).html(i);c._cleanup();if(g.cache){a.data(b,"cache.tabs",true)}c._trigger("load",null,c._ui(c.anchors[e],c.panels[e]));try{g.ajaxOptions.success(i,h)}catch(j){}c.element.dequeue("tabs")}}))},abort:function(){this.element.queue([]);this.panels.stop(false,true);if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup()},url:function(c,b){this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",b)},length:function(){return this.anchors.length}});a.extend(a.ui.tabs,{version:"1.7.2",getter:"length",defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:"click",fx:null,idPrefix:"ui-tabs-",panelTemplate:"<div></div>",spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'}});a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(d,f){var b=this,g=this.options;var c=b._rotate||(b._rotate=function(h){clearTimeout(b.rotation);b.rotation=setTimeout(function(){var i=g.selected;b.select(++i<b.anchors.length?i:0)},d);if(h){h.stopPropagation()}});var e=b._unrotate||(b._unrotate=!f?function(h){if(h.clientX){b.rotate(null)}}:function(h){t=g.selected;c()});if(d){this.element.bind("tabsshow",c);this.anchors.bind(g.event+".tabs",e);c()}else{clearTimeout(b.rotation);this.element.unbind("tabsshow",c);this.anchors.unbind(g.event+".tabs",e);delete this._rotate;delete this._unrotate}}})})(jQuery);;
jQuery(document).ready(function(){
  $(function() {
      // Find list items representing folders and
      // style them accordingly.  Also, turn them
      // into links that can expand/collapse the
      // tree leaf.
      $('#blog-archive-content li > div.item-list').each(function(i) {
          // Find this list's parent list item.
          var parent_li = $(this).parent('li');
  
          // Style the list item as folder.
          parent_li.addClass('folder');
  
          // Temporarily remove the list from the
          // parent list item, wrap the remaining
          // text in an anchor, then reattach it.
          var sub_ul = $(this).remove();
          parent_li.wrapInner('<a />').find('a').click(function() {
              // Make the anchor toggle the leaf display.
              sub_ul.toggle();
          });
          parent_li.append(sub_ul);
      });
  
      // Hide all lists except the outermost.
      $('#blog-archive-content ul div.item-list').hide();
  });
  
  $(".uitabs").tabs({ fxFade: true, fxSpeed: 'fast' });
});
;
var oas="http://oascentral.motherjones.com/RealMedia/ads/";
var RN = new String (Math.random());
var RNS = RN.substring (2, 11);

function DisplayAds(b, arg, d, a){
        var mj_adpath = window.location.pathname.split("/");
        var sitepage = 'motherjones.com/' + mj_adpath[1] + '/page.html';
	if (sitepage == "motherjones.com//page.html") {
		sitepage = "motherjones.com/page.html";
	}

  var parameter_start = '?';

  var c = sitepage+"/1"+RNS+"@"+b;

  if ( typeof RM_exclusion_category !== 'undefined') {
      c += parameter_start + 'RM_Exclude=' + RM_exclusion_category;
      parameter_start = '&';
  }

  if ( Drupal.settings.denali.ad_primary_tags !== null) {
      c += parameter_start + 'XE';
      parameter_start = '&';
      //all analytics stuff must go in here, beware if block above
      for ( var i = 0; i < Drupal.settings.denali.ad_primary_tags.length; i++ ) {
          c += '&PrimaryTag=' + Drupal.settings.denali.ad_primary_tags[i];
      }
      //end block where we can put analytics
      c += '&XE';
  }
  output = ('<SCRIPT LANGUAGE=javascript SRC="'+oas+"adstream_jx.ads/"+c+'">');
  output += ("<!-- -->");
  output += ("</SCRIPT>");
  output += ("<!-- -->");
  return output;
}

function DisplayInlineAd(ad_locations, position) {
  position = typeof position !== 'undefined' ? position : "x04";
  if (typeof ad_locations !== 'undefined') {
    document.write('<div class="billboard extended inline-ad"><div class="advertise-top norelated"></div>');
    document.write(DisplayAds(ad_locations + "!" + position, null, null, null));
    document.write('<p class="post-continues post-continued-from-above norelated"><em><a href="/about/advertising/contact-form">Advertise on MotherJones.com</a></em></p></div>');
  }
};
/* $Id: img_assist.js,v 1.6.4.2 2008/07/22 23:08:13 sun Exp $ */

Drupal.behaviors.img_assist = function(context) {
  $('textarea.img_assist:not(.img_assist-processed)', context).each(function() {
    // Drupal's teaser behavior is a destructive one and needs to be run first.
    if ($(this).is('textarea.teaser:not(.teaser-processed)')) {
      Drupal.behaviors.teaser(context);  
    }
    $(this).addClass('img_assist-processed').parent().append(Drupal.theme('img_assist_link', this));
  });
}

Drupal.theme.prototype.img_assist_link = function(el) {
  var html = '<div class="img_assist-button">', link = Drupal.t('Add image');
  if (Drupal.settings.img_assist.link == 'icon') {
    link = '<img src="'+ Drupal.settings.basePath + Drupal.settings.img_assist.icon +'" alt="'+ link +'" title="'+ link +'" />';
  }
  html += '<a href="'+ Drupal.settings.basePath +'index.php?q=img_assist/load/textarea&textarea='+ el.name +'" class="img_assist-link" id="img_assist-link-'+ el.id +'" title="'+ Drupal.t('Click here to add images') +'" onclick="window.open(this.href, \'img_assist_link\', \'width=600,height=350,scrollbars=yes,status=yes,resizable=yes,toolbar=no,menubar=no\'); return false;">'+ link +'</a>';
  html += '</div>';
  return html;
}

function launch_popup(nid, mw, mh) {
  var ox = mw;
  var oy = mh;
  if((ox>=screen.width) || (oy>=screen.height)) {
    var ox = screen.width-150;
    var oy = screen.height-150;
    var winx = (screen.width / 2)-(ox / 2);
    var winy = (screen.height / 2)-(oy / 2);
    var use_scrollbars = 1;
  }
  else {
    var winx = (screen.width / 2)-(ox / 2);
    var winy = (screen.height / 2)-(oy / 2);
    var use_scrollbars = 0;
  }
  var win = window.open(Drupal.settings.basePath + 'index.php?q=img_assist/popup/' + nid, 'imagev', 'height='+oy+'-10,width='+ox+',top='+winy+',left='+winx+',scrollbars='+use_scrollbars+',resizable');
}

;
// $Id: js_validate_forms.js,v 1.2 2010/03/18 00:19:41 collectivecolors Exp $

Drupal.behaviors.jsValidateFormsInitialize = function(context) {
	// Add a GMT time stamp to the verification field - pulled from Drupal Settings
	var $formValidateField = $('.user-validate');
	if ($formValidateField.length > 0) {
		$formValidateField.each(function(i) {
			$(this).val(Drupal.settings.user_validate);			
		});
	}
	// Add class to validation msg to get it out of sight.
	$('form .validate-message').addClass('validate-message-jsenabled');
}
;
(function ($) {

/**
 * Open Mollom privacy policy link in a new window.
 *
 * Required for valid XHTML Strict markup.
 */
Drupal.behaviors.mollomPrivacy = function (context) {
  $('.mollom-privacy a', context).click(function () {
    this.target = '_blank';
  });
};

/**
 * Attach click event handlers for CAPTCHA links.
 */
Drupal.behaviors.mollomCaptcha = function (context) {
  $('a.mollom-switch-captcha', context).click(getMollomCaptcha);
};

/**
 * Fetch a Mollom CAPTCHA and output the image or audio into the form.
 */
function getMollomCaptcha() {
  // Get the current requested CAPTCHA type from the clicked link.
  var newCaptchaType = $(this).hasClass('mollom-audio-captcha') ? 'audio' : 'image';

  var context = $(this).parents('form');

  // Extract the Mollom session id from the form.
  var mollomSessionId = $('input.mollom-session-id', context).val();

  // Retrieve a CAPTCHA:
  $.getJSON(Drupal.settings.basePath + 'mollom/captcha/' + newCaptchaType + '/' + mollomSessionId,
    function (data) {
      if (!(data && data.content)) {
        return;
      }
      // Inject new CAPTCHA.
      $('.mollom-captcha-content', context).parent().html(data.content);
      // Update session id.
      $('input.mollom-session-id', context).val(data.session_id);
      // Add an onclick-event handler for the new link.
      Drupal.attachBehaviors(context);
      // Focus on the CATPCHA input.
      $('input[name="mollom[captcha]"]', context).focus();
    }
  );
  return false;
}

})(jQuery);
;

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
function validemail ( form )
{
  action1 = "http://ga";
  action2 = "3.org/offsite";
  action3 = "-join.tcl";
  form.action = action1+action2+action3;
  form.ema_signup_url.value = document.URL;
  
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = form.email.value;
  if(reg.test(address) != false) {
    return true;
  } else {
    alert("Please enter a valid email address in the white box next to the signup button.");
    form.email.focus();
    return false;
  }  
}

function MJ_validate_email ( form )
{
  action1 = "http://mojo.con";
  action2 = "vio.net/si";
  action3 = "te/Survey";
  form.action = action1+action2+action3;

  form.signup_url.value = document.URL;

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = form.cons_email.value;
  if(reg.test(address) != false) {
    return true;
  } else {
    alert("Please enter a valid email address.");
    form.cons_email.focus();
    return false;
  }
}

;
function MJ_media_tags(CLSID, CODEBASE, ObjectID, WIDTH, HEIGHT, URL, QUALITY, BGCOLOR, PLUGINSPAGE)
{
  document.writeln('<object classid="' + CLSID + '" codebase="' + CODEBASE + '" WIDTH="' + WIDTH +'" HEIGHT="' + HEIGHT + '" id="' + ObjectID + '"> <param name=movie VALUE="' + URL + '">');
  document.writeln('<PARAM NAME=quality VALUE=' + QUALITY + '>');
  document.writeln('<PARAM NAME=bgcolor VALUE=' + BGCOLOR + '>');
  document.writeln('<EMBED src="' + URL + '" quality="' + QUALITY + '" bgcolor="' + BGCOLOR + '" WIDTH="' + WIDTH + '" HEIGHT="' + HEIGHT + '" PLUGINSPAGE="' + PLUGINSPAGE + '">');
  document.writeln('<\/EMBED>');
  document.writeln('<\/OBJECT>');
};
// $Id: disqus.js,v 1.1.2.2 2009/08/27 23:40:14 robloach Exp $

/**
 * Drupal Disqus behaviors.
 */
Drupal.behaviors.disqus = function(context) {
  if (Drupal.settings.disqusCommentDomain || false) {
    // Create the query.
    var query = '?';

    jQuery("a[href$='#disqus_thread']").each(function(i) {
      query += 'url' + i + '=' + encodeURIComponent($(this).attr('href').replace(/^http:\/\/[^\/]*\//, 'http://www.motherjones.com/')) + '&';
    });

	// convert to anchor jump if not a teaser
	$('.nonteaser-comment-bar a').attr('href', function(){return(this.href.replace(/^[^#]*#/, "#"));});


    // Make sure we are actually processing some links.
    if (query.length > 2) {
      // Make the AJAX call to get the number of comments.
      jQuery.ajax({
        type: 'GET',
        url: 'http://disqus.com/forums/' + Drupal.settings.disqusCommentDomain + '/get_num_replies.js' + query,
        dataType: 'script',
        cache: true
      });
    }

  }
};

;
jQuery.fn.fadeToggle = function(speed, easing, callback) {
   return this.animate({opacity: 'toggle'}, speed, easing, callback);
};

$(document).ready(function() {

  // Select all links to ICN
  // to add onclick and onsubmit code that lets Google Analytics track across domains
  $.expr[':'].crossdomain = function(obj){
      if ('action' in obj) {
        return (obj.action.indexOf('online.icnfull.com') != -1);
      }
      return (obj.hostname == 'online.icnfull.com');
  };
  
  $('a:crossdomain').attr('onclick', 'pageTracker._link(this.href); return false;');
  $('form:crossdomain').attr('onsubmit', 'javascript:pageTracker._linkByPost(this);');

  // this toggles the share boxes

  $('a.share-box-link').click(function() {
      $(this).siblings('.share-container').fadeToggle('fast');
      return false;
  });
  $('.close-box').click(function() {
      $(this).parents('.share-container').fadeOut('fast');
      return false;
  });
  
});

// Google +1 for toolbar

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
;
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());;
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * [c] Copyright 2001, 2002, The Font Bureau, Inc. Designed by Cyrus Highsmith.
 * All rights reserved.
 */
Cufon.registerFont((function(f){var b=_cufon_bridge_={p:[{"d":"171,-145r-58,145r-90,0r290,-713r26,0r290,713r-94,0r-58,-145r-306,0xm446,-222r-122,-306r-122,306r244,0xm313,-745r-94,-174r99,0r56,174r-61,0","w":653},{"d":"160,-384r0,384r-84,0r0,-552v1,-150,102,-181,222,-156r-13,76v-71,-14,-124,-10,-125,90r0,81r351,0r0,14r-149,219v83,25,164,76,164,199v0,150,-136,218,-317,228r-3,-76v143,-8,235,-55,235,-154v0,-98,-80,-136,-186,-152r0,-14r127,-187r-222,0","w":566},{"d":"153,-426v34,-17,91,-35,156,-35v108,0,156,69,156,195r0,266r-84,0r0,-237v0,-95,-18,-143,-91,-143v-56,0,-101,14,-130,26r0,354r-84,0r0,-461r71,0","w":536},{"d":"80,0r0,-461r84,0r0,461r-84,0","w":246},{"d":"372,-99r0,-362r84,0r0,461r-72,0r-4,-28v-35,16,-90,33,-153,33v-108,0,-156,-69,-156,-195r0,-271r83,0r0,243v0,96,18,144,93,144v53,0,96,-13,125,-25xm115,-519r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":532},{"d":"264,6v-114,0,-218,-83,-218,-235v0,-152,104,-238,218,-238v116,0,220,86,220,238v0,152,-104,235,-220,235xm264,-72v73,0,135,-58,135,-156v0,-97,-62,-159,-135,-159v-74,0,-133,62,-133,159v0,98,59,156,133,156xm114,-519r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":531},{"d":"171,-145r-58,145r-90,0r290,-713r26,0r290,713r-94,0r-58,-145r-306,0xm446,-222r-122,-306r-122,306r244,0xm176,-738r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":653},{"d":"347,13v-167,0,-262,-96,-262,-280r0,-438r89,0r0,435v0,135,61,201,174,201v112,0,176,-66,176,-201r0,-435r86,0r0,438v0,182,-98,280,-263,280xm301,-745r56,-174r100,0r-94,174r-62,0","w":696},{"d":"220,-162v-74,0,-134,-66,-134,-164v0,-101,60,-167,134,-167v76,0,136,66,136,165v0,100,-60,166,-136,166","w":442},{"d":"153,-427v38,-19,88,-34,129,-34v133,0,203,97,203,232v0,134,-70,235,-203,235v-41,0,-88,-10,-122,-23r0,205r-84,0r0,-649r71,0xm160,-89v35,10,70,17,105,17v95,0,135,-75,135,-155v0,-81,-40,-154,-135,-154v-30,0,-70,11,-105,27r0,265","w":533},{"d":"290,-461r82,-283r82,283r277,0r-224,184r85,292r-219,-181r-220,181r84,-293r-222,-183r275,0","w":746},{"d":"220,-519r56,-174r100,0r-94,174r-62,0"},{"d":"80,0r0,-716r84,0r0,716r-84,0","w":246},{"d":"278,10v-94,0,-185,-27,-235,-53r32,-77v44,20,128,49,213,49v103,0,156,-39,156,-109v0,-73,-77,-105,-160,-140v-110,-46,-214,-89,-214,-217v0,-117,92,-178,233,-178v96,0,163,23,189,33r-24,80v-59,-21,-119,-31,-171,-31v-85,0,-138,31,-138,94v0,71,76,103,159,137v109,45,215,89,215,220v0,110,-76,192,-255,192","w":588},{"d":"143,-337v-34,0,-62,-26,-62,-62v0,-35,28,-63,62,-63v35,0,63,28,63,63v0,36,-28,62,-63,62xm143,8v-34,0,-62,-27,-62,-63v0,-34,28,-62,62,-62v35,0,63,28,63,62v0,36,-28,63,-63,63","w":287},{"d":"224,5v-82,0,-151,-20,-181,-36r26,-71v57,30,266,62,267,-26v0,-95,-274,-34,-274,-208v0,-84,67,-131,179,-131v61,0,116,12,154,29r-23,73v-55,-29,-228,-45,-228,28v0,90,275,37,275,207v0,90,-78,135,-195,135","w":466},{"d":"422,-267r175,267r-101,0r-161,-245v-45,8,-104,7,-159,7r0,238r-88,0r0,-705r126,0v236,0,344,75,344,235v0,99,-46,167,-136,203xm176,-319r61,0v168,0,232,-49,232,-151v0,-102,-66,-151,-232,-151r-61,0r0,302","w":641},{"d":"215,-256v-102,0,-169,-92,-169,-224v0,-131,67,-225,169,-225v102,0,168,94,168,225v0,132,-66,224,-168,224xm254,0r354,-700r72,0r-354,700r-72,0xm1101,7v-102,0,-168,-92,-168,-224v0,-131,66,-225,168,-225v102,0,168,94,168,225v0,132,-66,224,-168,224xm720,7v-102,0,-168,-92,-168,-224v0,-131,66,-225,168,-225v102,0,168,94,168,225v0,132,-66,224,-168,224xm215,-326v62,0,93,-68,93,-153v0,-85,-31,-155,-93,-155v-63,0,-94,70,-94,155v0,85,31,153,94,153xm1101,-63v62,0,94,-68,94,-153v0,-85,-32,-154,-94,-154v-63,0,-95,69,-95,154v0,85,32,153,95,153xm720,-63v63,0,94,-68,94,-153v0,-85,-31,-154,-94,-154v-63,0,-94,69,-94,154v0,85,31,153,94,153","w":1315},{"d":"347,13v-167,0,-262,-96,-262,-280r0,-438r89,0r0,435v0,135,61,201,174,201v112,0,176,-66,176,-201r0,-435r86,0r0,438v0,182,-98,280,-263,280","w":696},{"d":"378,11v-177,0,-322,-153,-322,-363v0,-211,145,-365,322,-365v178,0,322,154,322,365v0,210,-144,363,-322,363xm378,-41v150,0,268,-129,268,-311v0,-183,-118,-312,-268,-312v-149,0,-267,129,-267,312v0,182,118,311,267,311xm495,-149v-144,61,-304,-8,-304,-202v0,-195,155,-258,303,-208r-19,62v-119,-39,-212,10,-215,146v-3,136,111,187,215,143","w":756},{"d":"571,-267r-108,-231r-8,235r-70,0r17,-446r28,0r153,312r153,-312r28,0r17,446r-74,0r-7,-236r-111,232r-18,0xm158,-639r-121,0r0,-66r315,0r0,66r-119,0r0,376r-75,0r0,-376","w":851},{"d":"282,-570v-2,-45,-13,-67,-60,-67v-41,0,-78,10,-108,19r-17,-59v28,-11,82,-24,135,-24v92,0,122,48,122,152r0,202r-62,0r-4,-29v-32,20,-68,34,-115,34v-62,0,-107,-38,-107,-98v0,-90,82,-124,216,-130xm79,-235r0,-65r275,0r0,65r-275,0xm283,-432r0,-83v-98,4,-147,24,-147,71v0,61,109,38,147,12","w":426},{"d":"101,75r0,-856r85,0r0,856r-85,0","w":288},{"d":"111,-384r-83,0r0,-77r83,0r0,-91v0,-144,94,-183,212,-156r-13,76v-66,-14,-114,-10,-115,85r0,86r215,0r0,-151r84,0r0,151r119,0r0,77r-119,0r0,237v-8,88,63,81,126,72r11,72v-17,4,-45,9,-82,9v-93,0,-139,-39,-139,-144r0,-246r-215,0r0,384r-84,0r0,-384","w":669},{"d":"80,0r0,-461r84,0r0,461r-84,0xm-29,-519r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":246},{"d":"112,-315r-92,0r0,-71r74,0v-11,-45,-22,-90,-22,-132v0,-127,96,-187,233,-187v58,0,125,13,157,25r-20,78v-31,-10,-87,-20,-133,-20v-100,0,-150,34,-150,113v0,36,11,79,23,123r204,0r0,71r-186,0v24,87,4,177,-32,236r304,0r0,79r-438,0r0,-13v82,-122,105,-170,78,-302","w":526},{"d":"34,0r317,-705r82,0r-316,705r-83,0","w":468},{"d":"88,0r0,-705r89,0r0,307r351,0r0,-307r89,0r0,705r-89,0r0,-313r-351,0r0,313r-89,0","w":706},{"d":"195,-384r0,384r-84,0r0,-384r-83,0r0,-77r83,0r0,-188r84,0r0,188r350,0r0,14r-149,219v83,25,164,76,164,199v0,150,-136,218,-317,228r-3,-76v143,-8,235,-55,235,-154v0,-98,-80,-136,-186,-152r0,-14r127,-187r-221,0","w":600},{"d":"116,-519r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0"},{"d":"172,-517r-67,-13v15,-80,46,-131,98,-131v51,0,92,66,120,66v21,0,30,-28,38,-69r67,12v-15,79,-41,134,-96,134v-51,0,-90,-65,-121,-65v-21,0,-31,28,-39,66"},{"d":"263,-268r0,268r-85,0r0,-288v-103,-38,-140,-113,-140,-193v0,-120,75,-219,324,-219r103,0r0,700r-85,0r0,-262v-41,0,-83,-1,-117,-6xm380,-339r0,-283v-191,0,-255,47,-255,143v0,94,64,140,255,140","w":546},{"d":"136,-310r-85,0r0,-75r96,0r22,-151v27,-161,106,-185,230,-160r-16,76v-79,-9,-118,-10,-133,96r-20,139r102,0r0,75r-113,0r-73,495r-83,0","w":426},{"d":"290,-461r82,-283r82,283r277,0r-224,184r85,292r-219,-181r-220,181r84,-293r-222,-183r275,0","w":746},{"d":"16,0r409,-705r422,0r0,84r-309,0r0,227r247,0r0,83r-247,0r0,229r318,0r0,82r-405,0r0,-181r-239,0r-105,181r-91,0xm255,-257r196,0r0,-341","w":913},{"d":"328,-439r160,-266r93,0r-208,339r230,366r-100,0r-189,-301r-183,301r-93,0r230,-374r-208,-331r101,0","w":641},{"d":"393,-426v54,40,91,107,91,197v0,181,-142,269,-297,222r-31,62r-64,0r44,-89v-54,-40,-90,-105,-90,-195v0,-181,141,-274,296,-224r32,-64r64,0xm172,-108r135,-273v-98,-32,-177,38,-178,153v0,52,17,93,43,120xm356,-350r-135,273v99,29,178,-37,180,-151v0,-52,-18,-94,-45,-122","w":531},{"d":"290,-461r82,-283r82,283r277,0r-224,184r85,292r-219,-181r-220,181r84,-293r-222,-183r275,0","w":746},{"d":"160,-354r0,354r-84,0r0,-716r84,0r0,286v35,-15,89,-31,149,-31v108,0,156,69,156,195r0,266r-84,0r0,-237v0,-95,-18,-143,-91,-143v-56,0,-101,14,-130,26","w":536},{"d":"230,-483r-157,0r0,-77r157,0r0,-221r84,0r0,221r157,0r0,77r-157,0r0,558r-84,0r0,-558","w":545},{"w":261},{"d":"267,-517v-109,0,-145,-93,-145,-175r72,0v0,59,20,111,73,111v55,0,73,-52,73,-111r73,0v0,82,-37,175,-146,175"},{"d":"378,11v-177,0,-322,-153,-322,-363v0,-211,145,-365,322,-365v178,0,322,154,322,365v0,210,-144,363,-322,363xm378,-41v150,0,268,-129,268,-311v0,-183,-118,-312,-268,-312v-149,0,-267,129,-267,312v0,182,118,311,267,311xm446,-305r100,154r-71,0r-91,-138v-23,3,-52,3,-79,3r0,135r-63,0r0,-410r78,0v137,0,200,45,200,138v0,57,-25,96,-74,118xm305,-343v91,4,161,-15,153,-79v6,-62,-61,-84,-153,-79r0,158","w":756},{"d":"184,0r-116,-231r116,-230r87,0r-116,230r116,231r-87,0","w":347},{"d":"93,0r0,-705r89,0r0,705r-89,0xm112,-745r-94,-174r99,0r56,174r-61,0","w":275},{"d":"264,6v-114,0,-218,-83,-218,-235v0,-152,104,-238,218,-238v116,0,220,86,220,238v0,152,-104,235,-220,235xm264,-72v73,0,135,-58,135,-156v0,-97,-62,-159,-135,-159v-74,0,-133,62,-133,159v0,98,59,156,133,156xm251,-519r-94,-174r99,0r56,174r-61,0","w":531},{"d":"264,6v-114,0,-218,-83,-218,-235v0,-152,104,-238,218,-238v116,0,220,86,220,238v0,152,-104,235,-220,235xm264,-72v73,0,135,-58,135,-156v0,-97,-62,-159,-135,-159v-74,0,-133,62,-133,159v0,98,59,156,133,156xm353,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm178,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":531},{"d":"347,13v-167,0,-262,-96,-262,-280r0,-438r89,0r0,435v0,135,61,201,174,201v112,0,176,-66,176,-201r0,-435r86,0r0,438v0,182,-98,280,-263,280xm334,-745r-94,-174r99,0r56,174r-61,0","w":696},{"d":"536,9v-33,0,-61,-26,-61,-62v0,-35,28,-62,61,-62v35,0,62,27,62,62v0,36,-27,62,-62,62xm336,9v-34,0,-61,-26,-61,-62v0,-35,27,-62,61,-62v34,0,60,27,60,62v0,36,-26,62,-60,62xm136,9v-33,0,-61,-26,-61,-62v0,-35,28,-62,61,-62v34,0,61,27,61,62v0,36,-27,62,-61,62","w":673},{"d":"372,-99r0,-362r84,0r0,461r-72,0r-4,-28v-35,16,-90,33,-153,33v-108,0,-156,-69,-156,-195r0,-271r83,0r0,243v0,96,18,144,93,144v53,0,96,-13,125,-25xm354,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm179,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":532},{"d":"327,-288v-4,-62,-19,-95,-84,-95v-55,0,-105,12,-141,23r-18,-71v32,-13,102,-30,171,-30v118,0,156,69,156,203r0,258r-70,0r-6,-41v-44,28,-93,47,-157,47v-80,0,-137,-48,-137,-125v0,-120,115,-164,286,-169xm328,-108r0,-112v-132,4,-203,30,-203,95v0,32,23,55,70,55v52,0,97,-16,133,-38xm193,-519r56,-174r100,0r-94,174r-62,0","w":482},{"d":"82,-309r0,-75r400,0r0,75r-400,0","w":564},{"d":"153,-426v34,-17,91,-35,156,-35v108,0,156,69,156,195r0,266r-84,0r0,-237v0,-95,-18,-143,-91,-143v-56,0,-101,14,-130,26r0,354r-84,0r0,-461r71,0xm173,-517r-67,-13v15,-80,46,-131,98,-131v51,0,92,66,120,66v21,0,30,-28,38,-69r67,12v-15,79,-41,134,-96,134v-51,0,-90,-65,-121,-65v-21,0,-31,28,-39,66","w":536},{"d":"172,-517r-67,-13v15,-80,46,-131,98,-131v51,0,92,66,120,66v21,0,30,-28,38,-69r67,12v-15,79,-41,134,-96,134v-51,0,-90,-65,-121,-65v-21,0,-31,28,-39,66"},{"d":"181,-338r0,338r-83,0r0,-304r-86,35r0,-78r86,-35r0,-334r83,0r0,300r88,-36r0,77","w":280},{"d":"260,-513r-144,-196r70,0r82,86r81,-86r69,0r-143,196r-15,0"},{"d":"347,13v-167,0,-262,-96,-262,-280r0,-438r89,0r0,435v0,135,61,201,174,201v112,0,176,-66,176,-201r0,-435r86,0r0,438v0,182,-98,280,-263,280xm197,-745r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":696},{"d":"367,-440r0,-21r83,0r0,461r-71,0r-4,-26v-38,18,-86,32,-125,32v-133,0,-203,-98,-203,-233v0,-133,70,-234,203,-234v40,0,84,9,117,21xm367,-96r0,-269v-33,-9,-66,-16,-99,-16v-96,0,-136,75,-136,155v0,81,40,154,136,154v28,0,66,-10,99,-24","w":527},{"d":"327,-288v-4,-62,-19,-95,-84,-95v-55,0,-105,12,-141,23r-18,-71v32,-13,102,-30,171,-30v118,0,156,69,156,203r0,258r-70,0r-6,-41v-44,28,-93,47,-157,47v-80,0,-137,-48,-137,-125v0,-120,115,-164,286,-169xm328,-108r0,-112v-132,4,-203,30,-203,95v0,32,23,55,70,55v52,0,97,-16,133,-38xm89,-519r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":482},{"d":"361,76v-160,4,-261,-57,-239,-193r21,-134v6,-37,-14,-64,-54,-64r-64,0r0,-73r64,0v96,-7,40,-130,32,-200v-16,-135,80,-198,240,-193r0,77v-117,0,-166,23,-151,118r19,114v11,69,-19,108,-73,120v54,10,84,49,73,119r-19,114v-15,95,34,119,151,119r0,76","w":424},{"d":"250,164r47,-256r96,0r-83,256r-60,0xm73,164r48,-256r96,0r-84,256r-60,0","w":464},{"d":"93,0r0,-705r89,0r0,705r-89,0xm225,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm50,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":275},{"d":"193,-11r-177,-450r88,0r134,341r141,-341r83,0r-267,649r-84,0xm205,-519r56,-174r100,0r-94,174r-62,0","w":478},{"d":"251,-262v-106,0,-192,-92,-192,-222v0,-128,86,-221,192,-221v104,0,190,93,190,221v0,130,-87,222,-190,222xm251,-330v69,0,120,-68,120,-154v0,-84,-51,-152,-120,-152v-70,0,-121,68,-121,152v0,86,51,154,121,154","w":500},{"d":"372,-438r0,-278r83,0r0,716r-71,0r-4,-29v-39,20,-89,35,-130,35v-133,0,-203,-98,-203,-233v0,-133,70,-234,203,-234v42,0,88,10,122,23xm372,-98r0,-265v-34,-11,-69,-18,-104,-18v-96,0,-136,75,-136,155v0,81,40,154,136,154v30,0,69,-11,104,-26","w":532},{"d":"224,2v-97,-19,-175,-98,-175,-231v0,-133,80,-214,175,-233r0,-79r62,0r0,74v39,2,74,10,100,23r-26,74v-18,-8,-48,-15,-74,-17r0,316v29,-2,58,-10,77,-17r25,70v-22,11,-62,21,-102,24r0,82r-62,0r0,-86xm224,-378v-52,20,-89,71,-89,149v0,78,36,130,89,150r0,-299","w":426},{"d":"264,6v-114,0,-218,-83,-218,-235v0,-152,104,-238,218,-238v116,0,220,86,220,238v0,152,-104,235,-220,235xm264,-72v73,0,135,-58,135,-156v0,-97,-62,-159,-135,-159v-74,0,-133,62,-133,159v0,98,59,156,133,156xm218,-519r56,-174r100,0r-94,174r-62,0","w":531},{"d":"171,-145r-58,145r-90,0r274,-674v-40,-13,-71,-53,-71,-103v0,-63,44,-110,98,-110v57,0,99,47,99,110v0,49,-28,89,-68,102r274,675r-94,0r-58,-145r-306,0xm324,-716v30,0,54,-25,54,-61v0,-38,-24,-65,-54,-65v-28,0,-52,27,-52,65v0,36,24,61,52,61xm446,-222r-122,-306r-122,306r244,0","w":653},{"d":"294,-4v-128,-37,-233,-148,-233,-347v1,-308,244,-414,475,-339r-25,80v-194,-62,-356,30,-359,259v-3,232,178,320,361,258r25,75v-37,17,-112,33,-176,27r-46,144r-92,0","w":586},{"d":"264,6v-114,0,-218,-83,-218,-235v0,-152,104,-238,218,-238v116,0,220,86,220,238v0,152,-104,235,-220,235xm264,-72v73,0,135,-58,135,-156v0,-97,-62,-159,-135,-159v-74,0,-133,62,-133,159v0,98,59,156,133,156xm170,-517r-67,-13v15,-80,46,-131,98,-131v51,0,92,66,120,66v21,0,30,-28,38,-69r67,12v-15,79,-41,134,-96,134v-51,0,-90,-65,-121,-65v-21,0,-31,28,-39,66","w":531},{"d":"177,-395r294,-310r105,0r-268,280r287,425r-103,0r-245,-361r-70,74r0,287r-89,0r0,-705r89,0r0,310","w":617},{"d":"440,-87v-110,168,-394,100,-394,-142v0,-244,286,-316,395,-141v36,-62,95,-97,159,-97v98,0,189,59,191,262r-307,0v8,85,58,134,140,134v41,0,96,-13,120,-22r23,69v-26,13,-87,30,-145,30v-83,0,-146,-33,-182,-93xm487,-275r217,0v-7,-81,-47,-117,-104,-117v-57,0,-100,44,-113,117xm265,-72v72,0,134,-58,134,-156v0,-97,-62,-159,-134,-159v-74,0,-134,62,-134,159v0,98,60,156,134,156","w":837},{"d":"93,0r0,-705r89,0r0,705r-89,0xm-14,-745r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":275},{"d":"267,-517v-53,0,-98,-47,-98,-107v0,-63,44,-110,98,-110v57,0,99,47,99,110v0,60,-43,107,-99,107xm267,-563v30,0,54,-25,54,-61v0,-38,-24,-65,-54,-65v-28,0,-52,27,-52,65v0,36,24,61,52,61"},{"d":"67,-253r-4,-73v125,-1,201,-18,201,-90v0,-67,-72,-83,-131,-90r0,-21r74,-101r-146,0r0,-72r260,0r0,23r-92,125v42,13,112,47,112,137v0,115,-105,161,-274,162xm240,0r354,-700r72,0r-354,700r-72,0xm768,-164r65,0r0,68r-65,0r0,96r-76,0r0,-96r-208,0r0,-36r241,-315r43,0r0,283xm692,-164r0,-139r-107,139r107,0","w":877},{"d":"361,-178v-200,-27,-307,-124,-307,-261v0,-148,131,-258,375,-266r0,76v-149,6,-234,48,-272,108v199,27,307,124,307,261v0,148,-128,258,-365,266r0,-74v143,-6,226,-49,262,-110xm136,-452v-8,115,76,178,245,205v8,-115,-77,-179,-245,-205","w":518},{"d":"82,-254r0,-80r335,0r0,80r-335,0","w":500},{"d":"268,-449r0,-255r79,0r0,255r-79,0xm96,-449r0,-255r80,0r0,255r-80,0","w":443},{"d":"332,-443r-84,-262r95,0r49,262r-60,0xm155,-443r-84,-262r96,0r48,262r-60,0","w":464},{"d":"372,-99r0,-362r84,0r0,461r-72,0r-4,-28v-35,16,-90,33,-153,33v-108,0,-156,-69,-156,-195r0,-271r83,0r0,243v0,96,18,144,93,144v53,0,96,-13,125,-25xm252,-519r-94,-174r99,0r56,174r-61,0","w":532},{"d":"131,-205v8,85,59,134,141,134v41,0,95,-13,120,-22r22,69v-26,13,-87,30,-144,30v-135,0,-224,-85,-224,-235v0,-149,99,-238,201,-238v98,0,189,59,192,262r-308,0xm134,-275r217,0v-7,-81,-47,-117,-103,-117v-58,0,-101,44,-114,117xm328,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm153,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":484},{"d":"230,-483r-157,0r0,-77r157,0r0,-221r84,0r0,221r157,0r0,77r-157,0r0,260r157,0r0,78r-157,0r0,220r-84,0r0,-220r-157,0r0,-78r157,0r0,-260","w":545},{"d":"38,0r0,-12r234,-372r-208,0r0,-77r342,0r0,13r-235,374r243,0r0,74r-376,0xm218,-513r-144,-196r70,0r82,86r81,-86r69,0r-143,196r-15,0","w":450},{"d":"409,0r-116,-231r116,-230r87,0r-116,230r116,231r-87,0xm184,0r-116,-231r116,-230r86,0r-116,230r116,231r-86,0","w":572},{"d":"171,-145r-58,145r-90,0r290,-713r26,0r290,713r-94,0r-58,-145r-306,0xm446,-222r-122,-306r-122,306r244,0xm232,-743r-67,-13v15,-80,46,-131,98,-131v51,0,92,66,120,66v21,0,30,-28,38,-69r67,12v-15,79,-41,134,-96,134v-51,0,-90,-65,-121,-65v-21,0,-31,28,-39,66","w":653},{"d":"195,-384r0,384r-84,0r0,-384r-83,0r0,-77r83,0v-9,-172,46,-255,203,-255v58,0,116,10,159,21r-15,78v-40,-10,-93,-18,-135,-18v-122,0,-132,58,-128,174r304,0r0,461r-84,0r0,-384r-220,0","w":581},{"d":"155,-443r-84,-262r99,0r47,262r-62,0","w":290},{"d":"73,-443r48,-262r98,0r-84,262r-62,0","w":290},{"d":"372,-99r0,-362r84,0r0,461r-72,0r-4,-28v-35,16,-90,33,-153,33v-108,0,-156,-69,-156,-195r0,-271r83,0r0,243v0,96,18,144,93,144v53,0,96,-13,125,-25xm219,-519r56,-174r100,0r-94,174r-62,0","w":532},{"d":"76,0r115,-231r-115,-230r87,0r116,230r-116,231r-87,0","w":347},{"d":"88,0r0,-705r397,0r0,84r-309,0r0,241r256,0r0,82r-256,0r0,298r-88,0","w":523},{"d":"353,-541r-109,30r0,-68r75,-21v-18,-27,-38,-52,-59,-72r63,-45v28,26,54,58,77,94r108,-30r0,68r-76,22v34,77,56,175,56,297v0,191,-97,272,-220,272v-115,0,-219,-83,-219,-235v0,-149,99,-231,211,-231v69,0,116,35,138,67v-6,-51,-22,-102,-45,-148xm268,-72v72,0,134,-58,134,-156v0,-97,-62,-159,-134,-159v-74,0,-134,62,-134,159v0,98,60,156,134,156","w":539},{"d":"196,153r75,-168r71,0r-54,168r-92,0"},{"d":"376,11v-180,0,-315,-147,-315,-364v0,-216,135,-363,315,-363v179,0,314,147,314,363v0,217,-135,364,-314,364xm376,-71v133,0,224,-118,224,-280v0,-163,-91,-280,-224,-280v-134,0,-225,117,-225,280v0,162,91,280,225,280xm225,-745r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":751},{"d":"147,-256r0,-372r-66,0r0,-72r142,0r0,444r-76,0xm202,0r353,-700r72,0r-353,700r-72,0xm561,0r0,-24v57,-74,196,-209,196,-291v0,-76,-114,-63,-175,-41r-17,-69v29,-12,71,-22,114,-22v92,0,154,40,154,129v0,79,-82,176,-142,248r166,0r0,70r-296,0","w":933},{"d":"211,-1v-93,-22,-165,-100,-165,-228v0,-201,177,-282,337,-215r-26,74v-108,-45,-225,2,-225,141v0,140,119,185,228,140r24,71v-22,11,-63,22,-103,24r-47,147r-92,0","w":427},{"d":"88,0r0,-705r118,0v262,0,409,112,409,353v0,240,-146,352,-409,352r-118,0xm177,-82v221,16,348,-68,348,-268v0,-200,-125,-288,-348,-271r0,539","w":674},{"d":"229,153r-51,-159r71,0r72,159r-92,0"},{"d":"52,5r-4,-80v201,-2,334,-32,334,-166v0,-128,-119,-163,-325,-167r16,-292r357,0r0,81r-282,0r-8,139v185,14,330,66,330,240v0,190,-169,243,-418,245","w":518},{"d":"153,-409v43,-23,101,-42,161,-42v93,0,231,45,231,227v0,149,-121,230,-241,230v-142,0,-261,-104,-261,-269v0,-180,86,-326,265,-450r56,59v-113,82,-179,158,-211,245xm132,-318v-23,142,63,245,171,245v78,0,155,-48,155,-150v0,-193,-228,-167,-326,-95","w":578},{"d":"195,-384r0,384r-84,0r0,-384r-83,0r0,-77r83,0v-9,-172,46,-255,203,-255v58,0,116,10,159,21r-15,78v-40,-10,-93,-18,-135,-18v-122,0,-132,58,-128,174r304,0r0,488v-2,148,-90,181,-202,156r11,-75v67,12,107,11,107,-90r0,-402r-220,0","w":581},{"d":"376,11v-180,0,-315,-147,-315,-364v0,-216,135,-363,315,-363v179,0,314,147,314,363v0,217,-135,364,-314,364xm376,-71v133,0,224,-118,224,-280v0,-163,-91,-280,-224,-280v-134,0,-225,117,-225,280v0,162,91,280,225,280xm329,-745r56,-174r100,0r-94,174r-62,0","w":751},{"d":"347,13v-167,0,-262,-96,-262,-280r0,-438r89,0r0,435v0,135,61,201,174,201v112,0,176,-66,176,-201r0,-435r86,0r0,438v0,182,-98,280,-263,280xm436,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm261,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":696},{"d":"499,-384r0,384r-84,0r0,-384r-220,0r0,384r-84,0r0,-384r-83,0r0,-77r83,0r0,-61v0,-144,94,-183,212,-156r-13,76v-66,-14,-114,-10,-115,85r0,56r220,0v-9,-172,47,-255,203,-255v59,0,117,10,159,21r-15,78v-40,-10,-93,-18,-135,-18v-121,0,-132,58,-128,174r304,0r0,461r-83,0r0,-384r-221,0","w":885},{"d":"451,-234r109,0r0,77r-109,0r0,157r-85,0r0,-157r-348,0r0,-37r392,-511r41,0r0,471xm366,-234r0,-293r-226,293r226,0","w":592},{"d":"290,-461r82,-283r82,283r277,0r-224,184r85,292r-219,-181r-220,181r84,-293r-222,-183r275,0","w":746},{"d":"290,-461r82,-283r82,283r277,0r-224,184r85,292r-219,-181r-220,181r84,-293r-222,-183r275,0","w":746},{"d":"250,-443r47,-262r96,0r-83,262r-60,0xm73,-443r48,-262r96,0r-84,262r-60,0","w":464},{"d":"290,-461r82,-283r82,283r277,0r-224,184r85,292r-219,-181r-220,181r84,-293r-222,-183r275,0","w":746},{"d":"327,-288v-4,-62,-19,-95,-84,-95v-55,0,-105,12,-141,23r-18,-71v32,-13,102,-30,171,-30v118,0,156,69,156,203r0,258r-70,0r-6,-41v-44,28,-93,47,-157,47v-80,0,-137,-48,-137,-125v0,-120,115,-164,286,-169xm328,-108r0,-112v-132,4,-203,30,-203,95v0,32,23,55,70,55v52,0,97,-16,133,-38xm328,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm153,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":482},{"d":"227,-342v-90,0,-168,-65,-168,-181v0,-116,78,-182,168,-182v90,0,168,67,168,182v0,116,-77,181,-168,181xm76,-235r0,-65r303,0r0,65r-303,0xm227,-409v54,0,95,-46,95,-113v0,-68,-42,-115,-95,-115v-53,0,-94,47,-94,115v0,67,41,113,94,113","w":454},{"d":"231,84v-76,-82,-158,-234,-158,-437v0,-203,82,-353,158,-436r70,38v-68,75,-142,213,-142,399v0,186,74,324,143,398","w":374},{"d":"88,0r0,-705r124,0v237,0,348,79,348,240v0,171,-150,250,-384,238r0,227r-88,0xm176,-309r58,0v167,0,238,-54,238,-156v0,-102,-72,-156,-238,-156r-58,0r0,312","w":604},{"d":"88,0r0,-705r397,0r0,84r-309,0r0,227r247,0r0,83r-247,0r0,229r318,0r0,82r-406,0xm265,-745r-94,-174r99,0r56,174r-61,0","w":551},{"d":"134,-402r-101,0r0,-66r112,0v39,-159,155,-237,288,-237v64,0,114,15,133,24r-24,77v-143,-49,-270,-2,-309,136r232,0r0,66r-245,0v-4,30,-4,66,-1,97r246,0r0,66r-235,0v30,109,106,165,207,165v47,0,88,-13,107,-20r24,72v-182,73,-385,-4,-425,-217r-110,0r0,-66r101,0v-3,-31,-2,-66,0,-97","w":602},{"d":"101,-384r-78,0r0,-77r78,0r0,-156r83,0r0,156r120,0r0,77r-120,0r0,237v-9,89,65,80,127,72r10,72v-16,4,-45,9,-82,9v-92,0,-138,-39,-138,-144r0,-246","w":367},{"d":"352,-398v-35,0,-62,-26,-62,-60v0,-38,27,-62,62,-62v32,0,60,24,60,62v0,34,-28,60,-60,60xm499,188v-180,27,-412,1,-412,-216v0,-142,120,-199,217,-219r0,-85r87,0r0,142v-126,14,-218,55,-218,156v0,144,182,162,317,144","w":582},{"d":"84,-257r0,-75r550,0r0,75r-550,0","w":718},{"d":"130,-291v-35,0,-63,-26,-63,-64v0,-36,28,-64,63,-64v36,0,65,28,65,64v0,38,-29,64,-65,64","w":261},{"d":"83,-407r0,-74r381,0r0,74r-381,0xm83,-191r0,-74r381,0r0,74r-381,0","w":548},{"d":"44,0r0,-15r355,-606r-320,0r0,-84r460,0r0,14r-356,609r357,0r0,82r-496,0xm290,-739r-144,-196r70,0r82,86r81,-86r69,0r-143,196r-15,0","w":594},{"d":"177,-397v-35,0,-61,-27,-61,-61v0,-36,26,-62,61,-62v34,0,61,26,61,62v0,34,-27,61,-61,61xm134,193r0,-511r86,0r0,511r-86,0","w":355},{"d":"376,11v-180,0,-315,-147,-315,-364v0,-216,135,-363,315,-363v179,0,314,147,314,363v0,217,-135,364,-314,364xm376,-71v133,0,224,-118,224,-280v0,-163,-91,-280,-224,-280v-134,0,-225,117,-225,280v0,162,91,280,225,280xm281,-743r-67,-13v15,-80,46,-131,98,-131v51,0,92,66,120,66v21,0,30,-28,38,-69r67,12v-15,79,-41,134,-96,134v-51,0,-90,-65,-121,-65v-21,0,-31,28,-39,66","w":751},{"d":"327,-288v-4,-62,-19,-95,-84,-95v-55,0,-105,12,-141,23r-18,-71v32,-13,102,-30,171,-30v118,0,156,69,156,203r0,258r-70,0r-6,-41v-44,28,-93,47,-157,47v-80,0,-137,-48,-137,-125v0,-120,115,-164,286,-169xm328,-108r0,-112v-132,4,-203,30,-203,95v0,32,23,55,70,55v52,0,97,-16,133,-38","w":482},{"d":"591,6r-418,-514r0,508r-85,0r0,-711r26,0r414,511r0,-505r85,0r0,711r-22,0","w":702},{"d":"171,-145r-58,145r-90,0r290,-713r26,0r290,713r-94,0r-58,-145r-306,0xm446,-222r-122,-306r-122,306r244,0xm280,-745r56,-174r100,0r-94,174r-62,0","w":653},{"d":"491,0v-263,0,-409,-112,-409,-353v0,-240,146,-352,409,-352r401,0r0,84r-309,0r0,227r247,0r0,83r-247,0r0,229r318,0r0,82r-410,0xm172,-354v0,192,113,285,325,272r0,-539v-210,-12,-325,76,-325,267","w":958},{"d":"88,0r0,-705r397,0r0,84r-309,0r0,227r247,0r0,83r-247,0r0,229r318,0r0,82r-406,0xm128,-745r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":551},{"d":"193,-11r-177,-450r88,0r134,341r141,-341r83,0r-267,649r-84,0xm332,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm157,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":478},{"d":"376,11v-180,0,-315,-147,-315,-364v0,-216,135,-363,315,-363v179,0,314,147,314,363v0,217,-135,364,-314,364xm376,-71v133,0,224,-118,224,-280v0,-163,-91,-280,-224,-280v-134,0,-225,117,-225,280v0,162,91,280,225,280xm464,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm289,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":751},{"d":"276,-263r-253,-442r97,0r201,351r202,-351r93,0r-252,440r0,265r-88,0r0,-263xm273,-745r56,-174r100,0r-94,174r-62,0","w":640},{"d":"73,164r48,-256r98,0r-84,256r-62,0","w":290},{"d":"58,-258r0,-24v57,-74,196,-209,196,-291v0,-77,-112,-62,-175,-42r-18,-68v30,-12,72,-22,115,-22v92,0,154,40,154,129v0,79,-82,176,-142,248r166,0r0,70r-296,0","w":421},{"d":"96,-449r0,-255r84,0r0,255r-84,0","w":276},{"d":"538,-18v-229,83,-477,-25,-477,-333v0,-308,244,-414,475,-339r-25,80v-194,-62,-356,30,-359,259v-3,232,178,320,361,258","w":586},{"d":"323,-309r0,161r-83,0r0,-161r-158,0r0,-75r158,0r0,-160r83,0r0,160r159,0r0,75r-159,0","w":564},{"d":"44,0r0,-15r355,-606r-320,0r0,-84r460,0r0,14r-356,609r357,0r0,82r-496,0","w":594},{"d":"143,-337v-34,0,-62,-26,-62,-62v0,-35,28,-63,62,-63v35,0,63,28,63,63v0,36,-28,62,-63,62xm44,153r54,-261r102,0r-90,261r-66,0","w":287},{"d":"58,156r55,-266r104,0r-90,266r-69,0","w":285},{"d":"415,-384r-220,0r0,384r-84,0r0,-384r-83,0r0,-77r83,0r0,-61v0,-144,94,-183,212,-156r-13,76v-66,-14,-114,-10,-115,85r0,56r220,0r0,-91v1,-150,102,-181,222,-156r-12,76v-71,-14,-125,-10,-126,90r0,81r110,0r0,77r-110,0r0,384r-84,0r0,-384","w":643},{"d":"237,6r-209,-467r89,0r137,307r246,-551r84,0r-317,711r-30,0","w":613},{"d":"88,0r0,-705r140,0v200,0,306,49,306,182v0,78,-51,136,-117,154v80,19,148,70,148,170v0,124,-99,199,-324,199r-153,0xm174,-403r94,0v126,0,177,-40,177,-113v0,-83,-72,-107,-197,-107r-74,0r0,220xm174,-80r80,0v158,0,221,-42,221,-123v0,-84,-73,-123,-210,-123r-91,0r0,246","w":617},{"d":"276,-263r-253,-442r97,0r201,351r202,-351r93,0r-252,440r0,265r-88,0r0,-263","w":640},{"d":"282,-457v-32,0,-57,-25,-57,-58v0,-31,25,-56,57,-56v32,0,57,25,57,56v0,33,-25,58,-57,58xm82,-309r0,-75r400,0r0,75r-400,0xm282,-118v-32,0,-57,-25,-57,-58v0,-31,25,-57,57,-57v32,0,57,26,57,57v0,33,-25,58,-57,58","w":564},{"d":"148,-23r-6,23r-66,0r0,-716r84,0r0,286v37,-18,84,-31,122,-31v133,0,203,97,203,232v0,134,-70,235,-203,235v-46,0,-100,-13,-134,-29xm160,-354r0,265v35,10,70,17,105,17v95,0,135,-75,135,-155v0,-81,-40,-154,-135,-154v-30,0,-70,11,-105,27","w":533},{"d":"517,-435r9,-26r61,0r-37,265v-9,62,3,92,60,92v63,0,96,-44,96,-163v0,-186,-109,-338,-297,-338v-188,0,-295,154,-295,340v0,186,98,339,302,339v74,0,163,-19,223,-48r19,46v-59,33,-156,56,-242,56v-234,0,-360,-173,-360,-393v0,-220,137,-394,353,-394v217,0,352,173,352,392v0,155,-65,219,-163,219v-49,0,-81,-13,-101,-35v-38,21,-88,35,-127,35v-106,0,-160,-72,-160,-170v0,-142,74,-243,201,-243v45,0,77,12,106,26xm474,-137v-5,-84,19,-158,26,-236v-25,-9,-47,-15,-81,-15v-92,0,-132,75,-132,156v0,61,28,114,103,114v29,0,56,-8,84,-19","w":818},{"d":"372,-27v-37,18,-84,31,-122,31v-133,0,-203,-96,-203,-231v0,-134,70,-234,203,-234v46,0,98,12,132,27r6,-27r67,0r0,446v0,153,-62,209,-201,209v-59,0,-117,-9,-160,-20r16,-75v39,9,92,18,135,18v107,2,129,-39,127,-144xm372,-363v-34,-11,-69,-18,-104,-18v-96,0,-136,74,-136,154v0,81,40,153,136,153v30,0,69,-10,104,-25r0,-264","w":532},{"d":"254,0r0,-621r-215,0r0,-84r519,0r0,84r-215,0r0,621r-89,0","w":598},{"d":"80,0r0,-461r84,0r0,461r-84,0xm86,-519r56,-174r100,0r-94,174r-62,0","w":246},{"d":"88,0r0,-705r397,0r0,84r-309,0r0,227r247,0r0,83r-247,0r0,229r318,0r0,82r-406,0xm367,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm192,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":551},{"d":"134,-402r-101,0r0,-66r112,0v39,-159,155,-237,288,-237v64,0,114,15,133,24r-24,77v-143,-49,-270,-2,-309,136r232,0r0,66r-245,0v-4,30,-4,66,-1,97r246,0r0,66r-235,0v30,109,106,165,207,165v47,0,88,-13,107,-20r24,72v-182,73,-385,-4,-425,-217r-110,0r0,-66r101,0v-3,-31,-2,-66,0,-97","w":602},{"d":"131,-205v8,85,59,134,141,134v41,0,95,-13,120,-22r22,69v-26,13,-87,30,-144,30v-135,0,-224,-85,-224,-235v0,-149,99,-238,201,-238v98,0,189,59,192,262r-308,0xm134,-275r217,0v-7,-81,-47,-117,-103,-117v-58,0,-101,44,-114,117xm194,-519r56,-174r100,0r-94,174r-62,0","w":484},{"d":"224,5v-82,0,-151,-20,-181,-36r26,-71v57,30,266,62,267,-26v0,-95,-274,-34,-274,-208v0,-84,67,-131,179,-131v61,0,116,12,154,29r-23,73v-55,-29,-228,-45,-228,28v0,90,275,37,275,207v0,90,-78,135,-195,135xm226,-513r-144,-196r70,0r82,86r81,-86r69,0r-143,196r-15,0","w":466},{"d":"327,-288v-4,-62,-19,-95,-84,-95v-55,0,-105,12,-141,23r-18,-71v32,-13,102,-30,171,-30v118,0,156,69,156,203r0,258r-70,0r-6,-41v-44,28,-93,47,-157,47v-80,0,-137,-48,-137,-125v0,-120,115,-164,286,-169xm328,-108r0,-112v-132,4,-203,30,-203,95v0,32,23,55,70,55v52,0,97,-16,133,-38xm145,-517r-67,-13v15,-80,46,-131,98,-131v51,0,92,66,120,66v21,0,30,-28,38,-69r67,12v-15,79,-41,134,-96,134v-51,0,-90,-65,-121,-65v-21,0,-31,28,-39,66","w":482},{"d":"191,-182r0,-144v127,-13,217,-59,217,-157v0,-145,-183,-156,-317,-140r-9,-80v181,-23,413,-4,413,214v0,143,-120,202,-217,222r0,85r-87,0xm231,8v-34,0,-62,-27,-62,-62v0,-34,28,-61,62,-61v34,0,61,27,61,61v0,35,-27,62,-61,62","w":582},{"d":"367,-322r-16,29r0,72r197,0r0,72r-197,0r0,149r-84,0r0,-149r-201,0r0,-72r201,0r0,-65r-21,-36r-180,0r0,-72r139,0r-173,-306r92,0r187,331r186,-331r85,0r-174,306r140,0r0,72r-181,0","w":615},{"d":"355,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm180,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55"},{"d":"160,-18r0,206r-84,0r0,-904r84,0r0,286v37,-18,84,-31,122,-31v133,0,203,97,203,232v0,134,-70,235,-203,235v-41,0,-88,-10,-122,-24xm160,-354r0,265v35,10,70,17,105,17v95,0,135,-75,135,-155v0,-81,-40,-154,-135,-154v-30,0,-70,11,-105,27"},{"d":"339,-455r47,-48r95,0r-81,78v35,26,56,65,56,116v0,138,-173,190,-296,138v-13,13,-19,27,-19,39v0,31,55,33,142,39v111,8,214,22,214,137v0,95,-94,149,-240,149v-149,0,-227,-44,-227,-131v0,-51,32,-88,70,-113v-24,-14,-38,-36,-38,-70v0,-31,22,-61,49,-82v-27,-26,-43,-61,-43,-106v-2,-129,144,-182,271,-146xm261,-220v63,0,110,-29,110,-87v0,-57,-47,-85,-110,-85v-63,0,-108,28,-108,85v0,58,45,87,108,87xm168,-29v-34,22,-55,54,-55,84v0,54,62,72,145,72v99,0,156,-29,156,-79v0,-86,-168,-58,-246,-77","w":516},{"d":"88,0r0,-705r88,0r0,96v242,-8,384,68,384,239v0,172,-150,251,-384,239r0,131r-88,0xm176,-213r58,0v167,0,238,-54,238,-156v0,-102,-72,-156,-238,-156r-58,0r0,312","w":604},{"d":"290,-461r82,-283r82,283r277,0r-224,184r85,292r-219,-181r-220,181r84,-293r-222,-183r275,0","w":746},{"d":"111,0r246,-619r-329,0r0,-81r443,0r0,15r-271,685r-89,0","w":502},{"d":"147,-256r0,-372r-66,0r0,-72r142,0r0,444r-76,0xm202,0r353,-700r72,0r-353,700r-72,0xm739,-164r65,0r0,68r-65,0r0,96r-76,0r0,-96r-208,0r0,-36r241,-315r43,0r0,283xm663,-164r0,-139r-107,139r107,0","w":878},{"d":"88,0r0,-705r89,0r0,623r309,0r0,82r-398,0","w":526},{"d":"84,-257r0,-75r739,0r0,75r-739,0","w":908},{"d":"327,-288v-4,-62,-19,-95,-84,-95v-55,0,-105,12,-141,23r-18,-71v32,-13,102,-30,171,-30v118,0,156,69,156,203r0,258r-70,0r-6,-41v-44,28,-93,47,-157,47v-80,0,-137,-48,-137,-125v0,-120,115,-164,286,-169xm328,-108r0,-112v-132,4,-203,30,-203,95v0,32,23,55,70,55v52,0,97,-16,133,-38xm226,-519r-94,-174r99,0r56,174r-61,0","w":482},{"d":"88,0r0,-705r397,0r0,84r-309,0r0,227r247,0r0,83r-247,0r0,229r318,0r0,82r-406,0xm232,-745r56,-174r100,0r-94,174r-62,0","w":551},{"d":"193,-11r-177,-450r88,0r134,341r141,-341r83,0r-267,649r-84,0","w":478},{"d":"171,-145r-58,145r-90,0r290,-713r26,0r290,713r-94,0r-58,-145r-306,0xm446,-222r-122,-306r-122,306r244,0","w":653},{"d":"254,-519r96,-170r93,0r-125,170r-64,0xm93,-519r96,-170r94,0r-124,170r-66,0"},{"d":"372,-99r0,-362r84,0r0,461r-72,0r-4,-28v-35,16,-90,33,-153,33v-108,0,-156,-69,-156,-195r0,-271r83,0r0,243v0,96,18,144,93,144v53,0,96,-13,125,-25","w":532},{"d":"378,11v-177,0,-322,-153,-322,-363v0,-211,145,-365,322,-365v178,0,322,154,322,365v0,210,-144,363,-322,363xm378,-41v150,0,268,-129,268,-311v0,-183,-118,-312,-268,-312v-149,0,-267,129,-267,312v0,182,118,311,267,311xm256,-127r0,-432r81,0v145,0,213,51,213,149v0,103,-86,155,-228,149r0,134r-66,0xm322,-324v95,5,161,-19,161,-85v0,-66,-64,-91,-161,-86r0,171","w":756},{"d":"425,-290v-43,23,-100,42,-161,42v-93,0,-231,-44,-231,-227v0,-149,122,-230,242,-230v137,0,260,101,260,268v0,181,-86,327,-264,451r-57,-58v114,-82,180,-158,211,-246xm446,-380v23,-142,-62,-245,-170,-245v-79,0,-157,49,-157,150v0,193,230,169,327,95","w":578},{"d":"130,-525r0,-71r275,0r0,71r-275,0"},{"d":"282,-293r-133,133r-53,-53r133,-133r-134,-135r52,-52r134,135r134,-134r53,53r-134,133r134,134r-52,53","w":564},{"d":"240,4v-83,-2,-158,-27,-202,-49r31,-73v34,16,102,39,171,44r0,-254v-87,-44,-175,-95,-175,-205v0,-99,65,-158,175,-170r0,-82r66,0r0,81v75,3,127,22,149,31r-25,76v-40,-14,-83,-24,-124,-26r0,231v91,44,186,97,186,215v0,97,-58,166,-186,179r0,83r-66,0r0,-81xm240,-623v-58,7,-91,33,-91,88v0,49,39,81,91,109r0,-197xm306,-76v66,-9,102,-44,102,-99v0,-55,-45,-89,-102,-119r0,218","w":530},{"d":"122,-556v-32,0,-58,-27,-58,-58v0,-34,26,-60,58,-60v32,0,59,26,59,60v0,31,-27,58,-59,58xm80,0r0,-461r84,0r0,461r-84,0","w":246},{"d":"143,8v-35,0,-64,-28,-64,-64v0,-35,29,-64,64,-64v35,0,64,29,64,64v0,36,-29,64,-64,64","w":286},{"d":"134,-195r0,-510r86,0r0,510r-86,0xm177,8v-34,0,-62,-27,-62,-62v0,-34,28,-61,62,-61v34,0,61,27,61,61v0,35,-27,62,-61,62","w":354},{"d":"88,-317r-78,0r0,-76r78,0r0,-312r118,0v262,0,409,112,409,353v0,240,-146,352,-409,352r-118,0r0,-317xm177,-393r132,0r0,76r-132,0r0,235v221,16,348,-68,348,-268v0,-200,-125,-288,-348,-271r0,228","w":674},{"w":130},{"d":"103,0r35,-229r-104,0r0,-69r115,0r16,-104r-131,0r0,-70r141,0r35,-228r71,0r-36,228r116,0r35,-228r71,0r-35,228r104,0r0,70r-115,0r-16,104r131,0r0,69r-141,0r-36,229r-70,0r35,-229r-115,0r-36,229r-70,0xm216,-296r121,0r16,-108r-120,0","w":569},{"d":"372,-25v-37,18,-84,31,-122,31v-133,0,-203,-98,-203,-233v0,-133,70,-234,203,-234v46,0,98,12,132,27r6,-27r67,0r0,649r-83,0r0,-213xm372,-363v-34,-11,-69,-18,-104,-18v-96,0,-136,75,-136,155v0,81,40,154,136,154v30,0,69,-11,104,-26r0,-265","w":532},{"d":"591,6r-418,-514r0,508r-85,0r0,-711r26,0r414,511r0,-505r85,0r0,711r-22,0xm255,-743r-67,-13v15,-80,46,-131,98,-131v51,0,92,66,120,66v21,0,30,-28,38,-69r67,12v-15,79,-41,134,-96,134v-51,0,-90,-65,-121,-65v-21,0,-31,28,-39,66","w":702},{"d":"276,-263r-253,-442r97,0r201,351r202,-351r93,0r-252,440r0,265r-88,0r0,-263xm408,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm233,-754v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":640},{"d":"88,-289r-78,27r0,-76r78,-27r0,-340r89,0r0,307r142,-50r0,77r-142,50r0,239r309,0r0,82r-398,0r0,-289","w":526},{"d":"16,0r0,-13v96,-124,327,-354,327,-492v0,-80,-52,-117,-153,-117v-50,0,-109,12,-143,24r-21,-77v31,-13,100,-30,169,-30v141,0,235,59,235,194v0,134,-156,312,-255,432r295,0r0,79r-454,0","w":503},{"d":"147,-256r0,-372r-66,0r0,-72r142,0r0,444r-76,0","w":337},{"d":"36,5r-4,-80v201,-2,334,-33,334,-167v0,-127,-125,-152,-226,-163r0,-13r141,-201r-253,0r0,-81r393,0r0,14r-161,231v46,10,194,48,194,214v0,190,-168,244,-418,246","w":500},{"d":"315,8r-292,-713r95,0r211,528r211,-528r89,0r-289,713r-25,0","w":653},{"d":"155,0r0,-619r-109,0r0,-81r195,0r0,700r-86,0","w":366},{"d":"300,-194v-4,204,-121,213,-261,191r11,-80v99,16,161,10,161,-120r0,-502r89,0r0,511","w":384},{"d":"195,-461r103,0r0,77r-103,0r0,384r-84,0r0,-384r-83,0r0,-77r83,0v-9,-172,46,-255,203,-255v68,0,114,20,185,15r0,701r-84,0r0,-627v-31,-5,-64,-9,-92,-9v-122,0,-132,59,-128,175","w":581},{"d":"38,0r0,-12r234,-372r-208,0r0,-77r342,0r0,13r-235,374r243,0r0,74r-376,0","w":450},{"d":"234,-299r107,-162r86,0r-151,224r160,237r-93,0r-118,-175r-115,175r-87,0r159,-238r-150,-223r93,0","w":460},{"d":"62,76r0,-76v118,0,166,-24,151,-120r-18,-113v-11,-69,19,-108,73,-119v-54,-12,-84,-50,-73,-120r18,-114v15,-95,-33,-118,-151,-118r0,-77v160,-5,261,57,240,193r-21,134v-6,37,14,63,53,63r64,0r0,74r-64,0v-96,6,-40,131,-32,200v16,136,-80,198,-240,193","w":424},{"d":"80,0r0,-461r84,0r0,461r-84,0xm97,-519r-94,-174r99,0r56,174r-61,0","w":246},{"d":"327,-288v-4,-62,-19,-95,-84,-95v-55,0,-105,12,-141,23r-18,-71v32,-13,102,-30,171,-30v118,0,156,69,156,203r0,258r-70,0r-6,-41v-44,28,-93,47,-157,47v-80,0,-137,-48,-137,-125v0,-120,115,-164,286,-169xm328,-108r0,-112v-132,4,-203,30,-203,95v0,32,23,55,70,55v52,0,97,-16,133,-38xm240,-517v-53,0,-98,-47,-98,-107v0,-63,44,-110,98,-110v57,0,99,47,99,110v0,60,-43,107,-99,107xm240,-563v30,0,54,-25,54,-61v0,-38,-24,-65,-54,-65v-28,0,-52,27,-52,65v0,36,24,61,52,61","w":482},{"d":"264,6v-114,0,-218,-83,-218,-235v0,-152,104,-238,218,-238v116,0,220,86,220,238v0,152,-104,235,-220,235xm264,-72v73,0,135,-58,135,-156v0,-97,-62,-159,-135,-159v-74,0,-133,62,-133,159v0,98,59,156,133,156","w":531},{"d":"499,-461r103,0r0,77r-103,0r0,384r-84,0r0,-384r-220,0r0,384r-84,0r0,-384r-83,0r0,-77r83,0r0,-61v0,-144,94,-183,212,-156r-13,76v-66,-14,-114,-10,-115,85r0,56r220,0v-9,-172,47,-255,203,-255v70,0,114,20,185,15r0,701r-83,0r0,-627v-31,-5,-65,-9,-93,-9v-121,0,-132,59,-128,175","w":885},{"d":"95,-96r0,-94r182,-159r-182,-157r0,-94r285,243r0,16","w":456},{"d":"111,-384r-83,0r0,-77r83,0r0,-91v1,-150,102,-181,222,-156r-13,76v-71,-14,-124,-10,-125,90r0,81r110,0r0,77r-110,0r0,384r-84,0r0,-384","w":339},{"d":"351,0r-317,-705r83,0r316,705r-82,0","w":468},{"d":"224,6r-208,-467r88,0r137,311r137,-311r84,0r-208,467r-30,0","w":478},{"d":"61,75r0,-75r144,0r0,-704r-144,0r0,-77r229,0r0,856r-229,0","w":378},{"d":"215,-253v-103,0,-170,-93,-170,-226v0,-132,67,-226,170,-226v102,0,169,94,169,226v0,133,-67,226,-169,226xm254,0r354,-700r72,0r-354,700r-72,0xm720,7v-103,0,-169,-93,-169,-225v0,-132,66,-227,169,-227v103,0,169,95,169,227v0,132,-66,225,-169,225xm215,-326v62,0,92,-68,92,-152v0,-84,-30,-153,-92,-153v-63,0,-94,69,-94,153v0,84,31,152,94,152xm720,-65v62,0,93,-68,93,-153v0,-84,-31,-152,-93,-152v-62,0,-93,68,-93,152v0,85,31,153,93,153","w":934},{"d":"361,-96r-285,-243r0,-17r285,-244r0,94r-182,159r182,157r0,94","w":456},{"d":"67,-253r-4,-73v125,-1,201,-18,201,-90v0,-67,-72,-83,-131,-90r0,-21r74,-101r-146,0r0,-72r260,0r0,23r-92,125v42,13,112,47,112,137v0,115,-105,161,-274,162","w":395},{"d":"93,0r0,-705r89,0r0,705r-89,0xm102,-745r56,-174r100,0r-94,174r-62,0","w":275},{"d":"301,0r116,-231r-116,-230r87,0r116,230r-116,231r-87,0xm76,0r115,-231r-115,-230r87,0r116,230r-116,231r-87,0","w":572},{"d":"131,-205v8,85,59,134,141,134v41,0,95,-13,120,-22r22,69v-26,13,-87,30,-144,30v-135,0,-224,-85,-224,-235v0,-149,99,-238,201,-238v98,0,189,59,192,262r-308,0xm134,-275r217,0v-7,-81,-47,-117,-103,-117v-58,0,-101,44,-114,117","w":484},{"d":"278,10v-94,0,-185,-27,-235,-53r32,-77v44,20,128,49,213,49v103,0,156,-39,156,-109v0,-73,-77,-105,-160,-140v-110,-46,-214,-89,-214,-217v0,-117,92,-178,233,-178v96,0,163,23,189,33r-24,80v-59,-21,-119,-31,-171,-31v-85,0,-138,31,-138,94v0,71,76,103,159,137v109,45,215,89,215,220v0,110,-76,192,-255,192xm287,-739r-144,-196r70,0r82,86r81,-86r69,0r-143,196r-15,0","w":588},{"d":"268,-536v-33,0,-61,-27,-61,-61v0,-33,28,-61,61,-61v31,0,59,28,59,61v0,34,-28,61,-59,61"},{"d":"101,-424r0,-357r85,0r0,357r-85,0xm101,75r0,-357r85,0r0,357r-85,0","w":288},{"d":"517,-593v-30,0,-56,-24,-56,-54v0,-32,26,-58,56,-58v30,0,56,26,56,58v0,30,-26,54,-56,54xm138,-593v-31,0,-56,-24,-56,-54v0,-32,25,-58,56,-58v29,0,55,26,55,58v0,30,-26,54,-55,54xm171,-145r-58,145r-90,0r290,-713r26,0r290,713r-94,0r-58,-145r-306,0xm446,-222r-122,-306r-122,306r244,0","w":653},{"d":"88,0r0,-705r397,0r0,84r-309,0r0,227r247,0r0,83r-247,0r0,229r318,0r0,82r-406,0","w":551},{"d":"421,-416v49,-24,109,-45,171,-45v125,0,155,69,155,195r0,266r-84,0r0,-237v0,-95,-1,-143,-90,-143v-56,0,-96,17,-123,30v13,104,3,235,6,350r-84,0r0,-237v0,-95,-1,-143,-90,-143v-55,0,-95,14,-122,26r0,354r-84,0r0,-461r71,0r6,35v53,-36,229,-57,268,10","w":818},{"d":"131,-205v8,85,59,134,141,134v41,0,95,-13,120,-22r22,69v-26,13,-87,30,-144,30v-135,0,-224,-85,-224,-235v0,-149,99,-238,201,-238v98,0,189,59,192,262r-308,0xm134,-275r217,0v-7,-81,-47,-117,-103,-117v-58,0,-101,44,-114,117xm227,-519r-94,-174r99,0r56,174r-61,0","w":484},{"d":"297,10v-153,0,-253,-83,-253,-208v0,-99,65,-167,132,-187v-55,-23,-100,-79,-100,-151v0,-94,81,-174,221,-174v141,0,221,78,221,173v0,72,-47,130,-100,151v74,23,132,88,132,186v0,126,-99,210,-253,210xm298,-416v79,0,133,-49,133,-113v0,-64,-54,-105,-134,-105v-80,0,-134,39,-134,104v0,64,55,114,135,114xm297,-65v91,0,166,-47,166,-136v0,-88,-70,-142,-166,-142v-96,0,-166,53,-166,140v0,90,77,138,166,138","w":594},{"d":"208,6r-192,-467r88,0r123,302r122,-301r20,0r122,300r123,-301r80,0r-192,467r-21,0r-126,-302r-125,302r-22,0","w":710},{"d":"143,84r-70,-38v68,-75,142,-213,142,-399v0,-186,-74,-324,-143,-398r71,-38v76,82,158,234,158,437v0,203,-82,353,-158,436","w":374},{"d":"-3,0r359,-700r82,0r-359,700r-82,0","w":435},{"d":"93,0r0,-705r89,0r0,705r-89,0","w":275},{"d":"376,11v-180,0,-315,-147,-315,-364v0,-216,135,-363,315,-363v179,0,314,147,314,363v0,217,-135,364,-314,364xm376,-71v133,0,224,-118,224,-280v0,-163,-91,-280,-224,-280v-134,0,-225,117,-225,280v0,162,91,280,225,280","w":751},{"d":"155,-410v34,-22,95,-49,153,-59r0,84v-60,10,-112,32,-148,53r0,332r-84,0r0,-461r71,0","w":347},{"d":"282,8r-259,-713r92,0r179,502r158,-493r20,0r160,495r178,-504r88,0r-257,713r-21,0r-159,-488r-158,488r-21,0","w":921},{"d":"80,0r0,-461r84,0r0,461r-84,0xm210,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,55,25,55,57v0,30,-25,55,-55,55xm35,-528v-30,0,-56,-25,-56,-55v0,-32,26,-57,56,-57v30,0,56,25,56,57v0,30,-26,55,-56,55","w":246},{"d":"87,75r0,-856r229,0r0,77r-144,0r0,704r144,0r0,75r-229,0","w":378},{"d":"582,-25v-257,93,-516,2,-521,-326v-5,-313,262,-417,511,-336r-25,80v-201,-67,-398,22,-395,256v3,221,158,315,344,264r0,-251r86,0r0,313","w":670},{"d":"131,-205v8,85,59,134,141,134v41,0,95,-13,120,-22r22,69v-26,13,-87,30,-144,30v-135,0,-224,-85,-224,-235v0,-149,99,-238,201,-238v98,0,189,59,192,262r-308,0xm134,-275r217,0v-7,-81,-47,-117,-103,-117v-58,0,-101,44,-114,117xm90,-519r144,-196r15,0r143,196r-69,0r-82,-86r-81,86r-70,0","w":484},{"d":"178,6v-80,0,-136,-48,-136,-125v0,-120,115,-163,284,-169v-3,-61,-19,-95,-83,-95v-55,0,-105,12,-141,23r-18,-71v32,-13,102,-30,171,-30v67,0,106,24,128,69v36,-48,89,-75,144,-75v97,0,189,59,191,262r-306,0v7,81,55,134,139,134v41,0,96,-13,120,-22r23,69v-26,13,-87,30,-145,30v-72,0,-133,-25,-171,-72v-59,43,-125,72,-200,72xm414,-275r217,0v-7,-81,-47,-117,-104,-117v-59,0,-102,47,-113,117xm195,-69v58,0,107,-18,152,-50v-12,-29,-19,-64,-19,-102v-131,3,-203,30,-203,97v0,32,23,55,70,55","w":764},{"d":"548,-44r89,168r-97,0r-69,-130v-231,65,-409,-97,-410,-347v0,-216,135,-363,315,-363v179,0,314,147,314,363v0,139,-55,248,-142,309xm432,-79r-88,-165r98,0r66,125v58,-50,92,-132,92,-232v0,-163,-91,-280,-224,-280v-134,0,-225,117,-225,280v0,181,112,312,281,272","w":751},{"d":"82,-298r0,-75r338,0r0,75r-338,0","w":502},{"d":"160,-179r0,179r-84,0r0,-720r84,0r0,448r191,-189r97,0r-176,172r195,289r-95,0r-157,-233","w":492},{"d":"152,-266r-58,-41r111,-152r-177,-58r21,-68r178,58r-1,-187r72,0r0,187r178,-58r22,68r-178,58r110,151r-57,42r-111,-150","w":525},{"d":"320,7v-159,0,-262,-148,-262,-356v0,-207,103,-356,262,-356v159,0,262,149,262,356v0,208,-103,356,-262,356xm320,-74v113,0,174,-121,174,-273v0,-153,-61,-275,-174,-275v-114,0,-175,122,-175,275v0,152,61,273,175,273","w":640},{"d":"-24,129r0,-74r549,0r0,74r-549,0","w":501},{"d":"122,-556v-32,0,-58,-27,-58,-58v0,-34,26,-60,58,-60v32,0,59,26,59,60v0,31,-27,58,-59,58xm164,27v-2,148,-90,181,-202,156r11,-75v67,12,107,11,107,-90r0,-479r84,0r0,488","w":246},{"d":"384,-18v-154,65,-338,-9,-338,-211v0,-201,177,-282,337,-215r-26,74v-108,-45,-225,2,-225,141v0,140,119,185,228,140","w":427},{"d":"570,-646v74,64,120,167,120,293v0,281,-246,448,-473,320r-50,86r-70,0r71,-124v-66,-65,-107,-163,-107,-282v0,-271,226,-439,458,-328r45,-78r71,0xm213,-149r263,-457v-170,-85,-326,52,-326,255v0,82,23,152,63,202xm525,-568r-266,462v33,22,73,35,117,35v133,0,225,-117,225,-280v0,-91,-28,-167,-76,-217","w":751},{"d":"376,11v-180,0,-315,-147,-315,-364v0,-216,135,-363,315,-363v179,0,314,147,314,363v0,217,-135,364,-314,364xm376,-71v133,0,224,-118,224,-280v0,-163,-91,-280,-224,-280v-134,0,-225,117,-225,280v0,162,91,280,225,280xm362,-745r-94,-174r99,0r56,174r-61,0","w":751},{"d":"253,-519r-94,-174r99,0r56,174r-61,0"},{"d":"524,-182r114,182r-101,0r-67,-106v-61,73,-138,117,-232,117v-107,0,-191,-71,-191,-194v0,-116,76,-226,194,-287r-138,-220r0,-15r403,0r0,82r-260,0r232,368v27,-57,50,-126,73,-205r77,20v-27,97,-61,186,-104,258xm429,-171r-149,-237v-92,51,-145,139,-145,220v0,73,45,118,113,118v76,0,134,-36,181,-101","w":691},{"d":"67,0r52,-713r27,0r273,545r272,-545r27,0r52,713r-89,0r-34,-464r-222,453r-18,0r-223,-453r-33,464r-84,0","w":837}],f:f};try{(function(s){var c="charAt",i="indexOf",a=String(arguments.callee).replace(/\s+/g,""),z=s.length+-990-a.length+(a.charCodeAt(0)==40&&2),w=64,k=s.substring(z,w+=z),v=s.substr(0,z)+s.substr(w),m=0,t="",x=0,y=v.length,d=document,h=d.getElementsByTagName("head")[0],e=d.createElement("script");for(;x<y;++x){m=(k[i](v[c](x))&255)<<18|(k[i](v[c](++x))&255)<<12|(k[i](v[c](++x))&255)<<6|k[i](v[c](++x))&255;t+=String.fromCharCode((m&16711680)>>16,(m&65280)>>8,m&255);}e.text=t;h.insertBefore(e,h.firstChild);h.removeChild(e);})("ziNUa6#em!k(z+0uK6LT5i5k:7#UN6k(:7dTm!FvN.8Eo-e%:2q[=i=[:2q[=iF6a0JU=1O-=.JU=1V6o0JU=1V6#LJU=1Vr=0JU=1Vjo.JU=rRT=vV^Kg5T=6d^KgR[orFEq-G-q0JU=rR-=L.^KgR[og0^Kg5J=rd^KgR[o!L8:2qT#!#X:2q[=i.0:2q[RV+1OLi25dz|=#{?nFPgq.!:oNma^KwH}X%rj06vbG&cEA(Y[JT-eU7]9_Du8k;Z=iO-:+k5:2q[=7O_:2q[=6=7H0JU=1V%#0JU=1O_=0JU=r5[=0JU=1Vr#0X^KgR[NrX^Kg5T=gLb:2qT=15[5LJU=1dj{LJU=1VXN.JU=rR-{.JU=1VroUJU=1V6=0JU=1V6#0JU=1Vj{.JU=rRT#0JU=1V6oUJU=1V0=.JU=r5J=0JU=1V6=.JU=1djoUJU=1Oe=0JU=1dr#UJU=1Vjo0JU=r57#.JU=1V0=vA^Kg5[=!.^KgR[o7N^KgR[N6F^KgR[orVj:2q[=iOT:2q[=io-:2q[=i=U:2q[=i=]:2q[=ioUPUJU=1OU=UJU=1VrN.JU=1djo.JU=1V%N.JU=1VX#TU^50JU=rRJoUJU=1V6{.JU=1V0o0JU=rRT=.JU=1O]N.JU=1VXo0JU=1Vr=UJUN65[=.JU=rRJ{LJU=rRJ{.JU=1V6o.JU=rR-oqN^KgR[NrV^KgR[orX^KgR[N1F^KgR[o6F^KgR[NgKO:2q[=6F%#gN^KgR-{gF^KgR[N1#^KgR[Ni#^Kg5T=!qe:2q[=iLr:2qT=rV6:2qT=1Lj:2q[=7dr:2q[=iqe:2q[=idXzLV^KgR[o-X^KgR[ogFe:2q[=id6:2qT=1O-:2q[=i5]?.JU=1O]NLJU=1VX=.JU=1Vj#!L{:2q[=i=J:2q[=gqT:2q[=i#X:2q[=iN6:2q[=in7:2q[=iFj:2qT=1LX:2q[=i5Tde=c!rEE:2qT=ro[:2qT=rLXn00^KgR[NrK%nLJU=r57#LF^KgR[N!F^KgR[o7d^Kg5[o!#^KgR[Ng0^KgRJ#rL^KgR[Ng=Z:2q[=iOU:2q[=iO9:2q[=iN0NUJU=1VjN.JU=r5e{1K^KgR[o6#=:2qT=1Oe:2q[=iq[:2q[=i=_wqL^KgRTNiFU:2q[=7=[{.JU=1VXN0JU=1Vj#TFG|%L^KgR[N1V^KgR[ogRr^.JU=1Vj=.JU=1O]{LJU=1Oe=gd^KgR[orj-.rLz:2.6orRTwvXk:2q[=i.r:2q[=iqUaUJU=1V%=g_6:LJ7:Pq8:2q[=i5-:2q[=i#j:2q[=id%N.JU=1O7=LJU=1dj{.JU=1VX#0JU=1Vr#O.A:2q[=iq9{2^G:2qT=1nePqkT.UJU=1V0N0A2:2q[=i.X:2q[=iq7q._czrVHm6#^KgR[N1X^KgR[N1d}dje%|v#[ai0ez+5%zPJG?gRE^1U%|vREa1U[|6J0a6Kem+Jv?!5(N%_va20[m2=kw]eum!obo%_Ym-eY:%}Z{vK]KU[(zg8b?-b(zU[(a!k&a7_0^U[(o7kAH+9c:+_Aa]FbN:d&a7_0^U[(o7kAHiUYm6k(N:#^|6#Ya:JAa]FbN:d&a7_0^U[(o7kAzPnYmP_eN:#eziJYo7Lem!k(|6XY^]F(o!U0zP06a]5b{7j8a1Ecz7jGNUAr!70K:gU[!70KHPjbzPR}")}catch(e){}delete _cufon_bridge_;return b.ok&&f})({"w":535,"face":{"font-family":"Relay","font-weight":500,"font-stretch":"normal","units-per-em":"1000","panose-1":"2 0 6 3 0 0 0 0 0 0","ascent":"800","descent":"-200","x-height":"6","bbox":"-38 -941 1269 199","underline-thickness":"20","underline-position":"-133","stemh":"78","stemv":"85","unicode-range":"U+0020-U+FB02"}}));
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * [c] Copyright 2001, 2002, The Font Bureau, Inc. Designed by Cyrus Highsmith.
 * All rights reserved.
 */
Cufon.registerFont((function(f){var b=_cufon_bridge_={p:[{"d":"355,-137r0,-334r135,0r0,471r-119,0r-5,-28v-35,17,-93,34,-150,34v-108,0,-159,-69,-159,-199r0,-278r135,0r0,252v0,70,14,99,70,99v39,0,70,-8,93,-17xm371,-528v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm182,-528v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":553},{"d":"198,-324r0,324r-135,0r0,-717r135,0r0,276v35,-15,89,-30,142,-30v108,0,159,69,159,198r0,273r-135,0r0,-243v0,-70,-14,-99,-69,-99v-42,0,-73,9,-97,18","w":556},{"d":"396,-262v-41,19,-92,31,-143,31v-93,0,-234,-44,-234,-234v0,-156,131,-237,259,-237v149,0,288,83,288,288v0,169,-95,321,-227,434r-106,-79v74,-70,131,-131,163,-203xm426,-386v10,-117,-49,-191,-145,-191v-69,0,-122,46,-122,115v0,77,51,117,123,117v58,0,108,-20,144,-41","w":595},{"d":"667,-246r-98,-182r-6,200r-117,0r20,-478r48,0r170,273r171,-273r48,0r20,478r-124,0r-6,-200r-103,182r-23,0xm169,-597r-131,0r0,-108r385,0r0,108r-128,0r0,369r-126,0r0,-369","w":990},{"d":"107,-286r-91,0r0,-108r64,0v-11,-42,-21,-84,-21,-123v0,-129,116,-188,251,-188v72,0,147,15,188,32r-34,124v-32,-11,-95,-22,-142,-22v-137,0,-133,82,-102,177r206,0r0,108r-177,0v15,57,0,133,-21,163r282,0r0,123r-489,0r0,-26v74,-99,103,-145,86,-260","w":550},{"d":"63,0r115,-236r-115,-235r138,0r116,235r-116,236r-138,0","w":372},{"d":"217,-157v-80,0,-145,-72,-145,-179v0,-110,65,-183,145,-183v82,0,146,73,146,181v0,109,-64,181,-146,181","w":435},{"d":"369,14v-181,0,-329,-161,-329,-365v0,-205,148,-367,329,-367v180,0,328,162,328,367v0,204,-148,365,-328,365xm369,-54v144,0,257,-131,257,-297v0,-167,-113,-298,-257,-298v-145,0,-257,131,-257,298v0,166,112,297,257,297xm492,-149v-146,65,-312,-16,-312,-202v0,-185,160,-260,311,-207r-27,90v-100,-39,-183,9,-183,119v0,111,93,158,183,118","w":737},{"d":"265,159r42,-287r144,0r-91,287r-95,0xm64,159r43,-287r145,0r-92,287r-96,0","w":508},{"d":"147,-250v-50,0,-90,-38,-90,-95v0,-52,40,-93,90,-93v53,0,94,41,94,93v0,57,-41,95,-94,95","w":297},{"d":"256,-228v-2,-21,4,-50,-4,-65r-195,0r0,-110r133,0r-166,-297r148,0r158,288r155,-288r137,0r-170,297r136,0r0,110r-196,0r0,65r196,0r0,110r-196,0r0,118r-136,0r0,-118r-199,0r0,-110r199,0","w":646},{"d":"205,-519r54,-182r149,0r-103,182r-100,0"},{"d":"67,0r0,-471r136,0r0,471r-136,0xm91,-519r-104,-182r149,0r55,182r-100,0","w":271},{"d":"240,-319v-100,0,-190,-63,-190,-191v0,-130,90,-195,190,-195v100,0,190,66,190,195v0,128,-90,191,-190,191xm67,-192r0,-95r347,0r0,95r-347,0xm240,-414v45,0,78,-40,78,-95v0,-56,-33,-97,-78,-97v-45,0,-77,41,-77,97v0,55,32,95,77,95","w":480},{"d":"148,-416r-91,-289r151,0r43,289r-103,0","w":314},{"d":"357,14v-180,0,-286,-102,-286,-296r0,-423r146,0r0,412v0,118,43,176,142,176v98,0,144,-58,144,-176r0,-412r141,0r0,423v0,192,-109,296,-287,296xm330,-738r-104,-182r149,0r55,182r-100,0","w":715},{"d":"263,-301r-43,50r0,251r-146,0r0,-705r146,0r0,264r226,-264r166,0r-256,296r277,409r-166,0","w":650},{"d":"355,-137r0,-334r135,0r0,471r-119,0r-5,-28v-35,17,-93,34,-150,34v-108,0,-159,-69,-159,-199r0,-278r135,0r0,252v0,70,14,99,70,99v39,0,70,-8,93,-17xm204,-519r54,-182r149,0r-103,182r-100,0","w":553},{"d":"278,-517v-59,0,-112,-50,-112,-118v0,-70,52,-120,112,-120v61,0,111,50,111,120v0,68,-51,118,-111,118xm278,-576v28,0,52,-25,52,-59v0,-36,-24,-61,-52,-61v-28,0,-52,25,-52,61v0,34,24,59,52,59","w":555},{"d":"357,14v-180,0,-286,-102,-286,-296r0,-423r146,0r0,412v0,118,43,176,142,176v98,0,144,-58,144,-176r0,-412r141,0r0,423v0,192,-109,296,-287,296xm452,-747v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm263,-747v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":715},{"d":"290,-471r78,-273r78,273r276,0r-222,189r85,297r-216,-185r-217,185r85,-298r-221,-188r274,0","w":738},{"d":"79,0r0,-705r146,0r0,705r-146,0","w":304},{"d":"173,-189v12,53,49,77,114,77v41,0,97,-13,122,-23r30,110v-30,14,-93,31,-158,31v-147,0,-248,-78,-248,-241v0,-164,115,-242,221,-242v112,0,210,63,210,288r-291,0xm172,-287r158,0v-5,-54,-31,-78,-75,-78v-46,0,-73,27,-83,78xm341,-528v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm152,-528v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":496},{"d":"420,0r-116,-236r116,-235r136,0r-116,235r116,236r-136,0xm171,0r-116,-236r116,-235r135,0r-116,235r116,236r-135,0","w":620},{"d":"369,14v-181,0,-329,-161,-329,-365v0,-205,148,-367,329,-367v180,0,328,162,328,367v0,204,-148,365,-328,365xm369,-54v144,0,257,-131,257,-297v0,-167,-113,-298,-257,-298v-145,0,-257,131,-257,298v0,166,112,297,257,297xm450,-295r89,139r-101,0r-74,-116r-52,1r0,115r-89,0r0,-397r86,0v139,0,207,42,207,143v0,54,-23,92,-66,115xm312,-346v72,3,128,-13,120,-63v7,-49,-47,-66,-120,-62r0,125","w":737},{"d":"194,-4v-88,-26,-161,-99,-161,-229v0,-219,194,-285,359,-220r-37,119v-83,-35,-183,-8,-183,102v0,110,103,139,187,101r36,112v-23,10,-57,20,-96,24r-37,148r-145,0","w":424},{"d":"471,-249r160,249r-162,0r-135,-211v-36,5,-76,4,-116,4r0,207r-144,0r0,-705r147,0v246,0,369,74,369,254v0,95,-42,163,-119,202xm218,-332r44,0v136,0,184,-41,184,-119v0,-79,-49,-119,-184,-119r-44,0r0,238","w":660},{"d":"141,-525r0,-109r271,0r0,109r-271,0"},{"d":"286,9v-107,0,-200,-27,-250,-51r44,-124v46,18,133,46,229,46v77,0,121,-21,121,-71v0,-51,-65,-74,-139,-100v-112,-40,-231,-83,-231,-225v0,-147,116,-198,269,-198v105,0,182,23,209,35r-39,127v-54,-19,-120,-30,-185,-30v-62,0,-108,16,-108,61v0,50,64,72,138,99v112,40,232,84,232,225v0,121,-77,206,-290,206","w":619},{"d":"-8,0r364,-700r136,0r-363,700r-137,0","w":485},{"d":"317,-302v-7,-34,-18,-50,-67,-50v-46,0,-109,12,-145,23r-25,-111v32,-13,109,-31,193,-31v121,0,179,54,179,208r0,263r-116,0r-8,-38v-46,25,-91,44,-156,44v-80,0,-138,-55,-138,-133v0,-128,119,-173,283,-175xm319,-139r0,-66v-104,2,-149,23,-149,57v0,26,15,38,43,38v39,0,76,-13,106,-29xm254,-517v-59,0,-112,-50,-112,-118v0,-70,52,-120,112,-120v61,0,111,50,111,120v0,68,-51,118,-111,118xm254,-576v28,0,52,-25,52,-59v0,-36,-24,-61,-52,-61v-28,0,-52,25,-52,61v0,34,24,59,52,59","w":508},{"d":"280,-4v-132,-42,-232,-162,-232,-348v0,-296,258,-424,495,-338r-39,131v-164,-62,-306,24,-306,211v0,142,77,230,197,230v45,0,90,-12,109,-19r41,118v-33,16,-97,33,-162,32r-35,140r-145,0","w":585},{"d":"538,-352r0,352r-136,0r0,-352r-165,0r0,352r-135,0r0,-352r-82,0r0,-119r82,0v-12,-137,47,-216,156,-216v32,0,58,4,86,11r-23,118v-45,-10,-84,-13,-84,48r0,39r165,0v-5,-169,60,-248,231,-246v73,0,138,12,179,23r-26,125v-30,-8,-90,-19,-132,-19v-108,0,-118,35,-116,117r301,0r0,471r-136,0r0,-352r-165,0","w":906},{"d":"290,-471r78,-273r78,273r276,0r-222,189r85,297r-216,-185r-217,185r85,-298r-221,-188r274,0","w":738},{"d":"290,-471r78,-273r78,273r276,0r-222,189r85,297r-216,-185r-217,185r85,-298r-221,-188r274,0","w":738},{"d":"317,-302v-7,-34,-18,-50,-67,-50v-46,0,-109,12,-145,23r-25,-111v32,-13,109,-31,193,-31v121,0,179,54,179,208r0,263r-116,0r-8,-38v-46,25,-91,44,-156,44v-80,0,-138,-55,-138,-133v0,-128,119,-173,283,-175xm319,-139r0,-66v-104,2,-149,23,-149,57v0,26,15,38,43,38v39,0,76,-13,106,-29xm226,-519r-104,-182r149,0r55,182r-100,0","w":508},{"d":"317,-302v-7,-34,-18,-50,-67,-50v-46,0,-109,12,-145,23r-25,-111v32,-13,109,-31,193,-31v121,0,179,54,179,208r0,263r-116,0r-8,-38v-46,25,-91,44,-156,44v-80,0,-138,-55,-138,-133v0,-128,119,-173,283,-175xm319,-139r0,-66v-104,2,-149,23,-149,57v0,26,15,38,43,38v39,0,76,-13,106,-29","w":508},{"d":"277,-521v-44,0,-83,-39,-83,-85v0,-49,39,-88,83,-88v43,0,84,39,84,88v0,46,-41,85,-84,85"},{"d":"135,-527v-45,0,-82,-37,-82,-80v0,-48,37,-85,82,-85v42,0,82,37,82,85v0,43,-40,80,-82,80xm67,0r0,-471r136,0r0,471r-136,0","w":271},{"d":"251,-344r80,-127r134,0r-148,227r159,244r-148,0r-94,-143r-90,143r-134,0r159,-243r-148,-228r148,0","w":486},{"d":"290,-267r-128,128r-82,-82r128,-128r-132,-131r82,-82r131,132r128,-128r82,82r-128,128r131,131r-81,81","w":579},{"d":"33,0r0,-22r202,-330r-175,0r0,-119r387,0r0,24r-204,335r213,0r0,112r-423,0","w":488},{"d":"399,77v-192,7,-315,-63,-288,-213r15,-96v6,-38,-17,-64,-54,-64r-60,0r0,-111r60,0v37,0,60,-28,54,-64r-16,-97v-26,-148,96,-220,289,-213r0,118v-134,0,-160,22,-145,115r11,76v11,69,-24,109,-84,121v60,10,94,50,84,119r-11,76v-15,94,9,120,145,120r0,113","w":448},{"d":"355,-28v-41,20,-84,29,-121,29v-132,0,-200,-102,-200,-235v0,-132,68,-237,200,-237v53,0,100,13,134,30r7,-30r116,0r0,445v0,157,-68,224,-230,224v-74,0,-139,-12,-180,-23r26,-116v31,9,90,20,132,20v103,0,117,-31,116,-107xm355,-331v-22,-7,-46,-12,-77,-12v-72,0,-106,47,-106,113v0,64,33,109,106,109v23,0,51,-8,77,-18r0,-192","w":553},{"d":"199,-107r-44,107r-145,0r305,-713r51,0r309,713r-153,0r-45,-107r-278,0xm427,-225r-91,-217r-89,217r180,0xm271,-738r54,-182r149,0r-103,182r-100,0","w":686},{"d":"173,-189v12,53,49,77,114,77v41,0,97,-13,122,-23r30,110v-30,14,-93,31,-158,31v-147,0,-248,-78,-248,-241v0,-164,115,-242,221,-242v112,0,210,63,210,288r-291,0xm172,-287r158,0v-5,-54,-31,-78,-75,-78v-46,0,-73,27,-83,78xm218,-519r-104,-182r149,0r55,182r-100,0","w":496},{"d":"402,-352r-165,0r0,352r-135,0r0,-352r-82,0r0,-119r82,0v-12,-137,47,-216,156,-216v32,0,58,4,86,11r-23,118v-45,-10,-84,-13,-84,48r0,39r165,0r0,-76v2,-167,139,-188,273,-159r-23,118v-60,-12,-115,-13,-114,63r0,54r109,0r0,119r-109,0r0,352r-136,0r0,-352","w":668},{"d":"289,-453v-42,0,-76,-32,-76,-79v0,-42,34,-77,76,-77v44,0,77,35,77,77v0,47,-33,79,-77,79xm68,-292r0,-113r443,0r0,113r-443,0xm289,-88v-42,0,-76,-32,-76,-79v0,-43,34,-77,76,-77v44,0,77,34,77,77v0,47,-33,79,-77,79","w":579},{"d":"372,-528v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm183,-528v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":555},{"d":"173,-189v12,53,49,77,114,77v41,0,97,-13,122,-23r30,110v-30,14,-93,31,-158,31v-147,0,-248,-78,-248,-241v0,-164,115,-242,221,-242v112,0,210,63,210,288r-291,0xm172,-287r158,0v-5,-54,-31,-78,-75,-78v-46,0,-73,27,-83,78xm71,-519r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":496},{"d":"89,-352r-74,0r0,-119r74,0r0,-149r135,0r0,149r118,0r0,119r-118,0r0,168v-7,81,55,77,118,67r13,111v-23,6,-64,12,-106,12v-97,0,-160,-37,-160,-173r0,-185","w":392},{"d":"74,0r0,-705r447,0r0,136r-303,0r0,151r241,0r0,130r-241,0r0,159r306,0r0,129r-450,0xm385,-747v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm196,-747v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":578},{"d":"74,0r0,-705r447,0r0,136r-303,0r0,151r241,0r0,130r-241,0r0,159r306,0r0,129r-450,0xm114,-738r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":578},{"d":"223,6r-215,-477r144,0r108,249r109,-249r135,0r-216,477r-65,0","w":512},{"d":"271,6v-118,0,-238,-74,-238,-239v1,-328,478,-326,478,0v0,165,-122,239,-240,239xm271,-115v55,0,102,-44,102,-116v0,-71,-47,-118,-102,-118v-56,0,-100,47,-100,118v0,72,44,116,100,116xm187,-518r-100,-23v21,-107,54,-149,110,-149v77,0,138,113,158,-5r102,20v-22,105,-48,154,-111,154v-75,0,-138,-116,-159,3","w":544},{"d":"297,-248r0,248r-137,0r0,-275v-102,-42,-135,-121,-135,-199v0,-115,65,-226,320,-226r156,0r0,700r-137,0r0,-247xm364,-361r0,-219v-149,0,-197,32,-197,110v0,78,48,109,197,109","w":569},{"d":"239,-273v-105,0,-190,-90,-190,-216v0,-126,85,-216,190,-216v103,0,187,90,187,216v0,126,-85,216,-187,216xm239,-368v56,0,92,-55,92,-121v0,-66,-36,-121,-92,-121v-57,0,-94,55,-94,121v0,66,37,121,94,121","w":475},{"d":"586,-643v75,64,123,165,123,291v0,275,-232,435,-472,334r-39,71r-98,0r66,-118v-72,-64,-118,-164,-118,-287v0,-270,225,-432,464,-337r39,-70r100,0xm236,-192r209,-377v-142,-50,-251,53,-251,221v0,63,15,117,42,156xm514,-514r-213,381v142,61,264,-42,262,-215v0,-69,-18,-126,-49,-166","w":757},{"d":"271,6v-118,0,-238,-74,-238,-239v1,-328,478,-326,478,0v0,165,-122,239,-240,239xm271,-115v55,0,102,-44,102,-116v0,-71,-47,-118,-102,-118v-56,0,-100,47,-100,118v0,72,44,116,100,116xm245,-519r-104,-182r149,0r55,182r-100,0","w":544},{"d":"237,-471r86,0r0,119r-86,0r0,352r-135,0r0,-352r-82,0r0,-119r82,0v-5,-169,59,-248,230,-246v45,0,81,6,112,13r94,0r0,704r-136,0r0,-589v-17,-2,-34,-3,-48,-3v-111,0,-119,36,-117,121","w":606},{"d":"74,0r0,-705r447,0r0,136r-303,0r0,182r251,0r0,131r-251,0r0,256r-144,0","w":550},{"d":"237,-352r0,352r-135,0r0,-352r-82,0r0,-119r82,0v-5,-169,59,-248,230,-246v74,0,138,12,179,23r-26,125v-30,-8,-90,-19,-131,-19v-109,0,-119,35,-117,117r301,0r0,471r-136,0r0,-352r-165,0","w":606},{"d":"606,5r-392,-415r0,410r-140,0r0,-710r53,0r382,406r0,-401r140,0r0,710r-43,0xm277,-737r-100,-23v21,-107,54,-149,110,-149v77,0,138,113,158,-5r102,20v-22,105,-48,154,-111,154v-75,0,-138,-116,-159,3","w":723},{"d":"355,-137r0,-334r135,0r0,471r-119,0r-5,-28v-35,17,-93,34,-150,34v-108,0,-159,-69,-159,-199r0,-278r135,0r0,252v0,70,14,99,70,99v39,0,70,-8,93,-17xm249,-519r-104,-182r149,0r55,182r-100,0","w":553},{"d":"199,-107r-44,107r-145,0r305,-713r51,0r309,713r-153,0r-45,-107r-278,0xm427,-225r-91,-217r-89,217r180,0xm167,-735r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":686},{"d":"136,-248r0,-342r-64,0r0,-110r182,0r0,452r-118,0xm215,0r349,-700r107,0r-348,700r-108,0xm587,0r0,-37v49,-64,205,-223,192,-269v0,-25,-19,-37,-61,-37v-29,0,-65,8,-100,18r-26,-105v119,-49,304,-33,304,115v0,69,-57,139,-117,213r141,0r0,102r-333,0","w":982},{"d":"188,-347v-49,0,-85,-37,-85,-86v0,-52,36,-87,85,-87v47,0,85,35,85,87v0,49,-38,86,-85,86xm119,190r0,-493r138,0r0,493r-138,0","w":376},{"d":"157,-295v-48,0,-87,-37,-87,-91v0,-49,39,-89,87,-89v51,0,89,40,89,89v0,54,-38,91,-89,91xm38,146r50,-304r159,0r-102,304r-107,0","w":316},{"d":"340,-471r33,-42r153,0r-89,84v34,26,56,63,56,113v0,145,-171,182,-305,148v-28,54,12,50,106,56v117,8,240,23,240,147v0,103,-97,158,-264,158v-177,0,-239,-47,-239,-132v0,-43,26,-76,58,-101v-57,-40,-37,-134,21,-168v-29,-25,-48,-61,-48,-108v0,-133,147,-178,278,-155xm277,-251v46,0,77,-17,77,-58v0,-40,-31,-57,-77,-57v-46,0,-76,17,-76,57v0,41,30,58,76,58xm189,-8v-44,58,-37,111,83,111v94,0,128,-22,128,-57v0,-59,-145,-42,-211,-54","w":547},{"d":"224,-244v-113,0,-186,-91,-186,-230v0,-140,73,-231,186,-231v112,0,185,91,185,231v0,139,-73,230,-185,230xm273,0r348,-700r108,0r-349,700r-107,0xm779,6v-112,0,-186,-91,-186,-231v0,-139,74,-231,186,-231v112,0,186,92,186,231v0,140,-74,231,-186,231xm224,-352v46,0,68,-53,68,-120v0,-67,-22,-120,-68,-120v-47,0,-69,53,-69,120v0,67,22,120,69,120xm779,-103v47,0,68,-53,68,-120v0,-66,-21,-120,-68,-120v-47,0,-68,54,-68,120v0,67,21,120,68,120","w":1002},{"d":"74,-237r0,-112r726,0r0,112r-726,0","w":874},{"d":"453,-426v55,-25,123,-45,177,-45v114,0,156,69,156,198r0,273r-136,0r0,-243v0,-70,-4,-99,-65,-99v-42,0,-70,10,-94,19r2,323r-136,0r0,-243v0,-70,-4,-99,-65,-99v-42,0,-71,9,-94,18r0,324r-135,0r0,-471r118,0r7,35v61,-35,221,-58,265,10","w":843},{"d":"126,-271r-83,0r0,-119r100,0r19,-131v28,-181,144,-205,289,-170r-31,125v-76,-12,-114,-16,-128,88r-13,88r97,0r0,119r-114,0r-66,456r-136,0","w":464},{"d":"224,-251v-110,0,-183,-90,-183,-227v0,-137,73,-227,183,-227v110,0,182,90,182,227v0,137,-72,227,-182,227xm273,0r348,-700r108,0r-349,700r-107,0xm1183,6v-110,0,-182,-90,-182,-227v0,-137,72,-227,182,-227v110,0,182,90,182,227v0,137,-72,227,-182,227xm779,6v-110,0,-182,-90,-182,-227v0,-137,72,-227,182,-227v110,0,182,90,182,227v0,137,-72,227,-182,227xm224,-352v48,0,71,-55,71,-124v0,-69,-23,-124,-71,-124v-49,0,-72,55,-72,124v0,69,23,124,72,124xm1183,-95v48,0,72,-55,72,-124v0,-69,-24,-124,-72,-124v-48,0,-72,55,-72,124v0,69,24,124,72,124xm779,-95v48,0,72,-55,72,-124v0,-69,-24,-124,-72,-124v-48,0,-72,55,-72,124v0,69,24,124,72,124","w":1407},{"d":"86,-414r0,-367r137,0r0,367r-137,0xm86,75r0,-367r137,0r0,367r-137,0","w":311},{"d":"115,-385r-91,0r0,-90r107,0v44,-147,166,-230,305,-230v72,0,122,16,145,27r-36,124v-111,-41,-225,-15,-268,79r198,0r0,90r-222,0v-2,20,-3,46,-1,67r223,0r0,92r-202,0v31,68,90,107,168,107v44,0,84,-12,104,-19r38,113v-30,14,-85,30,-145,30v-142,0,-264,-82,-307,-231r-107,0r0,-92r91,0v-2,-22,-1,-45,0,-67","w":617},{"d":"379,13v-185,0,-331,-144,-331,-365v0,-221,146,-365,331,-365v184,0,330,144,330,365v0,221,-146,365,-330,365xm379,-117v106,0,182,-91,182,-231v0,-141,-76,-231,-182,-231v-107,0,-183,90,-183,231v0,140,76,231,183,231xm203,-738r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":757},{"d":"357,-292r0,159r-136,0r0,-159r-153,0r0,-113r153,0r0,-160r136,0r0,160r154,0r0,113r-154,0","w":579},{"d":"173,-189v12,53,49,77,114,77v41,0,97,-13,122,-23r30,110v-30,14,-93,31,-158,31v-147,0,-248,-78,-248,-241v0,-164,115,-242,221,-242v112,0,210,63,210,288r-291,0xm172,-287r158,0v-5,-54,-31,-78,-75,-78v-46,0,-73,27,-83,78xm173,-519r54,-182r149,0r-103,182r-100,0","w":496},{"d":"277,-517v-138,0,-172,-110,-172,-192r116,0v0,59,15,100,56,100v42,0,56,-41,56,-100r116,0v0,82,-34,192,-172,192"},{"d":"271,6v-118,0,-238,-74,-238,-239v1,-328,478,-326,478,0v0,165,-122,239,-240,239xm271,-115v55,0,102,-44,102,-116v0,-71,-47,-118,-102,-118v-56,0,-100,47,-100,118v0,72,44,116,100,116","w":544},{"d":"214,-441r-154,0r0,-119r154,0r0,-221r136,0r0,221r154,0r0,119r-154,0r0,176r154,0r0,119r-154,0r0,221r-136,0r0,-221r-154,0r0,-119r154,0r0,-176","w":564},{"w":272},{"d":"68,-229r0,-127r330,0r0,127r-330,0","w":466},{"d":"314,0r116,-236r-116,-235r136,0r115,235r-115,236r-136,0xm65,0r115,-236r-115,-235r135,0r116,235r-116,236r-135,0","w":620},{"d":"101,-519r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":555},{"d":"219,1v-97,-19,-183,-93,-183,-234v0,-142,89,-219,183,-239r0,-76r78,0r0,72v38,3,73,11,99,23r-37,119v-17,-7,-40,-12,-62,-14r0,233v25,-2,48,-8,65,-15r37,111v-24,11,-61,21,-102,24r0,83r-78,0r0,-87xm219,-330v-58,32,-57,164,0,197r0,-197","w":427},{"d":"176,-207r0,-155v143,-11,213,-46,213,-115v0,-104,-187,-111,-303,-96r-13,-128v191,-29,459,-11,459,209v0,143,-119,196,-215,216r0,69r-141,0xm244,5v-46,0,-84,-35,-84,-87v0,-48,38,-85,84,-85v48,0,86,37,86,85v0,52,-38,87,-86,87","w":601},{"d":"49,-250r0,-37v49,-64,205,-223,192,-269v0,-25,-19,-37,-61,-37v-28,0,-65,8,-100,18r-26,-105v119,-49,304,-33,304,115v0,69,-57,139,-117,213r141,0r0,102r-333,0","w":443},{"d":"212,153r-42,-164r106,0r81,164r-145,0","w":555},{"d":"199,-435v42,-19,92,-31,143,-31v93,0,234,45,234,235v0,155,-131,237,-259,237v-160,0,-288,-93,-288,-290v0,-168,95,-320,227,-432r106,79v-74,69,-130,131,-163,202xm169,-307v-9,115,50,191,145,191v69,0,121,-45,121,-114v0,-78,-50,-117,-122,-117v-58,0,-108,19,-144,40","w":595},{"d":"67,0r0,-471r136,0r0,471r-136,0xm230,-528v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm41,-528v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":271},{"w":136},{"d":"192,-518r-100,-23v21,-107,54,-149,110,-149v77,0,138,113,158,-5r102,20v-22,105,-48,154,-111,154v-75,0,-138,-116,-159,3"},{"d":"355,-446r0,-271r136,0r0,717r-119,0r-6,-30v-44,25,-92,36,-132,36v-132,0,-200,-105,-200,-238v0,-131,68,-239,200,-239v47,0,89,10,121,25xm355,-134r0,-197v-22,-7,-46,-12,-77,-12v-72,0,-106,50,-106,115v0,64,33,112,106,112v23,0,51,-8,77,-18","w":553},{"d":"290,-471r78,-273r78,273r276,0r-222,189r85,297r-216,-185r-217,185r85,-298r-221,-188r274,0","w":738},{"d":"499,-443r10,-28r105,0r-40,284v-7,48,8,72,56,72v60,0,83,-38,83,-153v0,-186,-110,-332,-303,-332v-192,0,-299,147,-299,333v0,186,98,330,304,330v78,0,159,-19,221,-44r19,54v-56,29,-158,53,-240,53v-238,0,-372,-168,-372,-393v0,-225,144,-396,367,-396v225,0,368,170,368,395v0,161,-64,225,-183,225v-52,0,-91,-14,-116,-38v-46,28,-94,39,-131,39v-108,0,-165,-75,-165,-180v0,-141,77,-249,209,-249v50,0,79,12,107,28xm448,-163r26,-185v-16,-5,-31,-9,-60,-9v-68,0,-104,51,-104,119v0,71,72,105,138,75","w":821},{"d":"181,153r84,-171r104,0r-43,171r-145,0"},{"d":"115,-385r-91,0r0,-90r107,0v44,-147,166,-230,305,-230v72,0,122,16,145,27r-36,124v-111,-41,-225,-15,-268,79r198,0r0,90r-222,0v-2,20,-3,46,-1,67r223,0r0,92r-202,0v31,68,90,107,168,107v44,0,84,-12,104,-19r38,113v-30,14,-85,30,-145,30v-142,0,-264,-82,-307,-231r-107,0r0,-92r91,0v-2,-22,-1,-45,0,-67","w":617},{"d":"86,75r0,-856r137,0r0,856r-137,0","w":311},{"d":"80,-91r0,-140r153,-116r-153,-114r0,-140r319,236r0,36","w":456},{"d":"74,0r0,-705r146,0r0,279r287,0r0,-279r146,0r0,705r-146,0r0,-290r-287,0r0,290r-146,0","w":727},{"d":"31,0r0,-26r317,-543r-282,0r0,-136r511,0r0,25r-321,551r322,0r0,129r-547,0","w":617},{"d":"376,-91r-319,-237r0,-36r319,-237r0,140r-153,115r153,115r0,140","w":456},{"d":"199,-107r-44,107r-145,0r305,-713r51,0r309,713r-153,0r-45,-107r-278,0xm427,-225r-91,-217r-89,217r180,0xm258,-737r-100,-23v21,-107,54,-149,110,-149v77,0,138,113,158,-5r102,20v-22,105,-48,154,-111,154v-75,0,-138,-116,-159,3","w":686},{"d":"198,-352r0,352r-135,0r0,-547v2,-167,138,-188,272,-159r-23,118v-60,-12,-115,-13,-114,63r0,54r342,0r0,27r-120,203v71,27,142,80,142,199v0,156,-149,234,-354,241r-7,-114v155,-8,222,-57,222,-135v0,-75,-55,-114,-151,-130r0,-26r85,-146r-159,0","w":589},{"d":"349,-416r-92,-289r144,0r43,289r-95,0xm148,-416r-91,-289r144,0r43,289r-96,0","w":508},{"d":"545,-19v-233,95,-497,-36,-497,-333v0,-296,258,-424,495,-338r-39,131v-164,-62,-306,24,-306,211v0,142,77,230,197,230v45,0,90,-12,109,-19","w":585},{"d":"199,-107r-44,107r-145,0r305,-713r51,0r309,713r-153,0r-45,-107r-278,0xm427,-225r-91,-217r-89,217r180,0","w":686},{"d":"237,-352r0,352r-135,0r0,-352r-82,0r0,-119r82,0r0,-193r135,0r0,193r340,0r0,27r-121,203v72,27,142,80,142,199v0,156,-149,234,-353,241r-8,-114v155,-8,223,-57,223,-135v0,-75,-55,-114,-151,-130r0,-26r84,-146r-156,0","w":625},{"d":"199,-107r-44,107r-145,0r305,-713r51,0r309,713r-153,0r-45,-107r-278,0xm427,-225r-91,-217r-89,217r180,0xm316,-738r-104,-182r149,0r55,182r-100,0","w":686},{"d":"183,-8r-175,-463r142,0r106,283r114,-283r134,0r-266,659r-134,0xm356,-528v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm167,-528v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":512},{"d":"495,-253r115,0r0,116r-115,0r0,137r-138,0r0,-137r-334,0r0,-86r372,-482r100,0r0,452xm357,-253r0,-218r-169,218r169,0","w":644},{"d":"409,-437v59,39,102,106,102,204v0,191,-151,265,-311,230r-28,58r-81,0r42,-87v-58,-38,-100,-103,-100,-201v0,-192,149,-272,310,-234r29,-60r80,0xm190,-149r98,-204v-103,-26,-157,125,-98,204xm351,-316r-99,205v72,12,125,-39,127,-120v0,-35,-11,-64,-28,-85","w":544},{"d":"74,0r0,-705r127,0v254,0,434,99,434,354v0,254,-179,351,-434,351r-127,0xm220,-129v171,12,267,-62,267,-219v0,-158,-95,-234,-267,-221r0,440","w":681},{"d":"265,-416r42,-289r144,0r-91,289r-95,0xm64,-416r43,-289r145,0r-92,289r-96,0","w":508},{"d":"333,0r-312,-705r135,0r311,705r-134,0","w":489},{"d":"379,13v-185,0,-331,-144,-331,-365v0,-221,146,-365,331,-365v184,0,330,144,330,365v0,221,-146,365,-330,365xm379,-117v106,0,182,-91,182,-231v0,-141,-76,-231,-182,-231v-107,0,-183,90,-183,231v0,140,76,231,183,231","w":757},{"d":"379,13v-185,0,-331,-144,-331,-365v0,-221,146,-365,331,-365v184,0,330,144,330,365v0,221,-146,365,-330,365xm379,-117v106,0,182,-91,182,-231v0,-141,-76,-231,-182,-231v-107,0,-183,90,-183,231v0,140,76,231,183,231xm294,-737r-100,-23v21,-107,54,-149,110,-149v77,0,138,113,158,-5r102,20v-22,105,-48,154,-111,154v-75,0,-138,-116,-159,3","w":757},{"d":"399,13v-191,0,-351,-129,-351,-365v0,-299,276,-425,527,-337r-39,131v-30,-11,-88,-21,-119,-21v-135,0,-220,89,-220,231v-1,161,105,257,259,224r0,-213r139,0r0,316v-43,18,-134,34,-196,34","w":667},{"d":"379,13v-185,0,-331,-144,-331,-365v0,-221,146,-365,331,-365v184,0,330,144,330,365v0,221,-146,365,-330,365xm379,-117v106,0,182,-91,182,-231v0,-141,-76,-231,-182,-231v-107,0,-183,90,-183,231v0,140,76,231,183,231xm474,-747v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm285,-747v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":757},{"d":"193,84r-131,-40v61,-74,140,-213,140,-399v0,-186,-79,-322,-140,-396r131,-40v66,82,147,231,147,439v0,205,-81,354,-147,436","w":399},{"d":"82,-435r0,-266r136,0r0,266r-136,0","w":300},{"d":"538,-471r86,0r0,119r-86,0r0,352r-136,0r0,-352r-165,0r0,352r-135,0r0,-352r-82,0r0,-119r82,0v-12,-137,47,-216,156,-216v32,0,58,4,86,11r-23,118v-45,-10,-84,-13,-84,48r0,39r165,0v-5,-169,60,-248,231,-246v49,0,86,6,115,13r91,0r0,704r-136,0r0,-589v-17,-2,-34,-3,-49,-3v-110,0,-118,36,-116,121","w":906},{"d":"572,-52r88,177r-162,0r-61,-121v-226,32,-389,-116,-389,-356v0,-221,146,-365,331,-365v184,0,330,144,330,365v0,134,-54,238,-137,300xm377,-117r-80,-161r162,0r50,100v33,-41,52,-99,52,-170v0,-141,-76,-231,-182,-231v-107,0,-183,90,-183,231v0,139,75,230,181,231","w":757},{"d":"489,0v-254,0,-434,-99,-434,-354v0,-254,179,-351,434,-351r414,0r0,136r-304,0r0,151r242,0r0,130r-242,0r0,159r307,0r0,129r-417,0xm203,-353v0,154,91,235,260,224r0,-440v-167,-10,-260,62,-260,216","w":959},{"d":"259,-245r-249,-460r159,0r164,304r167,-304r152,0r-248,452r0,253r-145,0r0,-245xm426,-747v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm237,-747v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":663},{"d":"102,-352r-82,0r0,-119r82,0r0,-76v-4,-153,114,-193,242,-159r-23,118v-45,-10,-84,-13,-84,48r0,69r160,0r0,-134r136,0r0,134r118,0r0,119r-118,0r0,168v-7,81,56,76,118,67r13,111v-24,6,-65,12,-106,12v-98,0,-161,-37,-161,-173r0,-185r-160,0r0,352r-135,0r0,-352","w":698},{"d":"157,-295v-48,0,-87,-37,-87,-91v0,-49,39,-89,87,-89v51,0,89,40,89,89v0,54,-38,91,-89,91xm157,7v-48,0,-87,-37,-87,-91v0,-50,39,-89,87,-89v51,0,89,39,89,89v0,54,-38,91,-89,91","w":316},{"d":"186,-25r-6,25r-117,0r0,-717r135,0r0,276v41,-21,84,-30,122,-30v131,0,199,104,199,237v0,132,-68,240,-199,240v-54,0,-100,-13,-134,-31xm198,-325r0,197v22,7,46,12,78,12v71,0,105,-50,105,-115v0,-64,-32,-112,-105,-112v-23,0,-53,8,-78,18"},{"d":"330,-178v-184,-27,-289,-117,-289,-258v0,-166,155,-266,419,-269r0,118v-137,2,-216,26,-255,67v182,28,284,117,284,256v0,167,-146,267,-408,269r0,-111v137,-1,213,-29,249,-72xm171,-419v6,76,71,121,188,139v-5,-76,-70,-122,-188,-139","w":531},{"d":"355,-137r0,-334r135,0r0,471r-119,0r-5,-28v-35,17,-93,34,-150,34v-108,0,-159,-69,-159,-199r0,-278r135,0r0,252v0,70,14,99,70,99v39,0,70,-8,93,-17xm100,-519r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":553},{"d":"139,0r0,-569r-107,0r0,-131r249,0r0,700r-142,0","w":391},{"d":"64,159r43,-287r151,0r-92,287r-102,0","w":314},{"d":"357,14v-180,0,-286,-102,-286,-296r0,-423r146,0r0,412v0,118,43,176,142,176v98,0,144,-58,144,-176r0,-412r141,0r0,423v0,192,-109,296,-287,296","w":715},{"d":"660,7v-50,0,-91,-39,-91,-95v0,-52,41,-91,91,-91v52,0,92,39,92,91v0,56,-40,95,-92,95xm407,7v-50,0,-90,-39,-90,-95v0,-52,40,-91,90,-91v52,0,92,39,92,91v0,56,-40,95,-92,95xm155,7v-50,0,-91,-39,-91,-95v0,-52,41,-91,91,-91v52,0,92,39,92,91v0,56,-40,95,-92,95","w":816},{"d":"64,-416r43,-289r151,0r-92,289r-102,0","w":314},{"d":"67,0r0,-471r136,0r0,471r-136,0xm-41,-519r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":271},{"d":"369,14v-181,0,-329,-161,-329,-365v0,-205,148,-367,329,-367v180,0,328,162,328,367v0,204,-148,365,-328,365xm369,-54v144,0,257,-131,257,-297v0,-167,-113,-298,-257,-298v-145,0,-257,131,-257,298v0,166,112,297,257,297xm235,-140r0,-418r94,0v146,0,219,47,219,154v0,104,-84,158,-219,152r0,112r-94,0xm329,-337v75,4,131,-17,125,-67v6,-50,-51,-70,-125,-66r0,133","w":737},{"d":"2,0r0,-26r143,-169v142,-168,177,-222,177,-289v0,-54,-37,-87,-129,-87v-48,0,-114,13,-149,25r-29,-126v43,-17,118,-33,190,-33v152,0,259,64,259,206v0,109,-54,190,-178,336r-34,40r252,0r0,123r-502,0","w":522},{"d":"102,-352r-82,0r0,-119r82,0r0,-76v2,-167,138,-188,272,-159r-23,118v-60,-12,-115,-13,-114,63r0,54r109,0r0,119r-109,0r0,352r-135,0r0,-352","w":367},{"d":"341,-511r-120,20r0,-89r74,-12v-17,-26,-36,-49,-56,-67r113,-63v31,27,59,64,82,107r103,-17r0,89r-65,11v27,75,43,164,43,262v0,191,-98,276,-240,276v-119,0,-239,-74,-239,-238v0,-159,107,-224,215,-224v60,0,108,29,126,60v-4,-32,-17,-73,-36,-115xm275,-115v54,0,102,-44,102,-116v0,-71,-48,-118,-102,-118v-56,0,-101,47,-101,118v0,72,45,116,101,116","w":555},{"d":"79,0r0,-705r146,0r0,705r-146,0xm-24,-738r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":304},{"d":"74,0r0,-705r447,0r0,136r-303,0r0,151r241,0r0,130r-241,0r0,159r306,0r0,129r-450,0","w":578},{"d":"96,0r221,-569r-301,0r0,-131r487,0r0,26r-261,674r-146,0","w":520},{"d":"198,-166r0,166r-135,0r0,-719r135,0r0,405r150,-157r148,0r-176,180r195,291r-152,0r-133,-199","w":524},{"d":"440,-64v-42,48,-103,70,-168,70v-119,0,-239,-74,-239,-239v0,-244,272,-314,407,-171v39,-49,96,-73,154,-73v113,0,210,63,210,288r-291,0v12,53,49,77,114,77v41,0,97,-13,122,-23r30,110v-30,14,-93,31,-158,31v-80,0,-141,-23,-181,-70xm512,-287r158,0v-5,-54,-31,-78,-75,-78v-46,0,-73,27,-83,78xm272,-115v54,0,102,-44,102,-116v0,-71,-48,-118,-102,-118v-56,0,-101,47,-101,118v0,72,45,116,101,116","w":836},{"d":"74,-266r-71,22r0,-114r71,-22r0,-325r146,0r0,281r139,-43r0,115r-139,42r0,181r303,0r0,129r-449,0r0,-266","w":549},{"d":"119,-212r0,-493r139,0r0,493r-139,0xm188,5v-47,0,-85,-35,-85,-87v0,-48,38,-85,85,-85v48,0,85,37,85,85v0,52,-37,87,-85,87","w":376},{"d":"250,-519r-104,-182r149,0r55,182r-100,0"},{"d":"357,14v-180,0,-286,-102,-286,-296r0,-423r146,0r0,412v0,118,43,176,142,176v98,0,144,-58,144,-176r0,-412r141,0r0,423v0,192,-109,296,-287,296xm181,-738r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":715},{"d":"21,0r312,-705r134,0r-311,705r-135,0","w":489},{"d":"173,-189v12,53,49,77,114,77v41,0,97,-13,122,-23r30,110v-30,14,-93,31,-158,31v-147,0,-248,-78,-248,-241v0,-164,115,-242,221,-242v112,0,210,63,210,288r-291,0xm172,-287r158,0v-5,-54,-31,-78,-75,-78v-46,0,-73,27,-83,78","w":496},{"d":"379,13v-185,0,-331,-144,-331,-365v0,-221,146,-365,331,-365v184,0,330,144,330,365v0,221,-146,365,-330,365xm379,-117v106,0,182,-91,182,-231v0,-141,-76,-231,-182,-231v-107,0,-183,90,-183,231v0,140,76,231,183,231xm307,-738r54,-182r149,0r-103,182r-100,0","w":757},{"d":"31,0r0,-26r317,-543r-282,0r0,-136r511,0r0,25r-321,551r322,0r0,129r-547,0xm293,-735r-161,-202r104,0r72,62r73,-62r104,0r-162,202r-30,0","w":617},{"d":"136,-248r0,-342r-64,0r0,-110r182,0r0,452r-118,0xm215,0r349,-700r107,0r-348,700r-108,0xm809,-183r69,0r0,94r-69,0r0,89r-115,0r0,-89r-200,0r0,-66r231,-300r84,0r0,272xm694,-183r0,-99r-76,99r76,0","w":937},{"d":"79,0r0,-705r146,0r0,705r-146,0xm108,-738r-104,-182r149,0r55,182r-100,0","w":304},{"d":"188,-436v34,-17,94,-35,152,-35v108,0,159,69,159,198r0,273r-135,0r0,-243v0,-70,-14,-99,-69,-99v-42,0,-73,9,-97,18r0,324r-135,0r0,-471r118,0xm193,-518r-100,-23v21,-107,54,-149,110,-149v77,0,138,113,158,-5r102,20v-22,105,-48,154,-111,154v-75,0,-138,-116,-159,3","w":556},{"d":"21,6r-5,-127v250,-1,333,-35,333,-129v0,-90,-89,-119,-220,-133r0,-24r114,-162r-229,0r0,-131r447,0r0,25r-153,221v43,8,184,49,184,208v0,196,-175,251,-471,252","w":524},{"d":"317,-302v-7,-34,-18,-50,-67,-50v-46,0,-109,12,-145,23r-25,-111v32,-13,109,-31,193,-31v121,0,179,54,179,208r0,263r-116,0r-8,-38v-46,25,-91,44,-156,44v-80,0,-138,-55,-138,-133v0,-128,119,-173,283,-175xm319,-139r0,-66v-104,2,-149,23,-149,57v0,26,15,38,43,38v39,0,76,-13,106,-29xm348,-528v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm159,-528v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":508},{"d":"379,13v-185,0,-331,-144,-331,-365v0,-221,146,-365,331,-365v184,0,330,144,330,365v0,221,-146,365,-330,365xm379,-117v106,0,182,-91,182,-231v0,-141,-76,-231,-182,-231v-107,0,-183,90,-183,231v0,140,76,231,183,231xm352,-738r-104,-182r149,0r55,182r-100,0","w":757},{"d":"74,0r0,-705r144,0r0,85v246,-3,380,76,380,259v0,179,-150,265,-380,253r0,108r-144,0xm218,-237r50,0v135,0,185,-45,185,-124v0,-79,-50,-124,-185,-124r-50,0r0,248","w":634},{"d":"280,-435r0,-266r123,0r0,266r-123,0xm82,-435r0,-266r123,0r0,266r-123,0","w":485},{"d":"562,-187r117,187r-165,0r-46,-73v-65,57,-138,85,-215,85v-106,0,-219,-64,-219,-208v0,-124,72,-217,186,-274r-131,-209r0,-26r457,0r0,129r-228,0r171,273v18,-44,35,-97,53,-160r120,32v-27,98,-61,179,-100,244xm407,-170r-125,-201v-64,35,-105,92,-105,158v0,56,37,97,96,97v54,0,97,-17,134,-54","w":717},{"d":"206,84v-66,-82,-146,-231,-146,-439v0,-205,80,-354,146,-436r131,40v-60,74,-140,213,-140,399v0,186,80,322,141,396","w":399},{"d":"68,-292r0,-113r443,0r0,113r-443,0","w":579},{"d":"271,6v-118,0,-238,-74,-238,-239v1,-328,478,-326,478,0v0,165,-122,239,-240,239xm271,-115v55,0,102,-44,102,-116v0,-71,-47,-118,-102,-118v-56,0,-100,47,-100,118v0,72,44,116,100,116xm200,-519r54,-182r149,0r-103,182r-100,0","w":544},{"d":"74,0r0,-705r447,0r0,136r-303,0r0,151r241,0r0,130r-241,0r0,159r306,0r0,129r-450,0xm218,-738r54,-182r149,0r-103,182r-100,0","w":578},{"d":"190,-422v33,-20,93,-45,152,-57r0,132v-60,10,-109,28,-144,48r0,299r-135,0r0,-471r118,0","w":372},{"d":"54,-245r-5,-108v152,-1,201,-13,201,-64v0,-45,-55,-58,-121,-64r0,-34r59,-75r-139,0r0,-110r300,0r0,36r-93,117v49,14,112,49,112,135v0,119,-109,167,-314,167xm251,0r348,-700r108,0r-349,700r-107,0xm832,-183r69,0r0,94r-69,0r0,89r-115,0r0,-89r-200,0r0,-66r231,-300r84,0r0,272xm717,-183r0,-99r-76,99r76,0","w":930},{"d":"237,-352r0,352r-135,0r0,-352r-82,0r0,-119r82,0v-5,-169,59,-248,230,-246v74,0,138,12,179,23r-26,125v-30,-8,-90,-19,-131,-19v-109,0,-119,35,-117,117r301,0r0,493v-2,164,-126,188,-252,159r19,-117v55,8,97,18,97,-63r0,-353r-165,0","w":606},{"d":"54,-245r-5,-108v152,-1,201,-13,201,-64v0,-45,-55,-58,-121,-64r0,-34r59,-75r-139,0r0,-110r300,0r0,36r-93,117v49,14,112,49,112,135v0,119,-109,167,-314,167","w":408},{"d":"395,-19v-160,64,-365,5,-362,-214v3,-219,194,-285,359,-220r-37,119v-83,-35,-183,-8,-183,102v0,110,103,139,187,101","w":424},{"d":"259,-245r-249,-460r159,0r164,304r167,-304r152,0r-248,452r0,253r-145,0r0,-245xm259,-738r54,-182r149,0r-103,182r-100,0","w":663},{"d":"188,-436v34,-17,94,-35,152,-35v108,0,159,69,159,198r0,273r-135,0r0,-243v0,-70,-14,-99,-69,-99v-42,0,-73,9,-97,18r0,324r-135,0r0,-471r118,0","w":556},{"d":"79,0r0,-705r146,0r0,705r-146,0xm97,-738r54,-182r149,0r-103,182r-100,0","w":304},{"d":"207,6r-199,-477r145,0r97,240r107,-236r40,0r107,235r97,-239r126,0r-200,477r-43,0r-116,-250r-117,250r-44,0","w":735},{"d":"74,0r0,-705r447,0r0,136r-303,0r0,151r241,0r0,130r-241,0r0,159r306,0r0,129r-450,0xm263,-738r-104,-182r149,0r55,182r-100,0","w":578},{"d":"136,-248r0,-342r-64,0r0,-110r182,0r0,452r-118,0","w":364},{"d":"74,-296r-71,0r0,-117r71,0r0,-292r127,0v254,0,434,99,434,354v0,254,-179,351,-434,351r-127,0r0,-296xm220,-413r104,0r0,117r-104,0r0,167v171,12,267,-62,267,-219v0,-158,-95,-234,-267,-221r0,156","w":681},{"d":"350,-477r131,-228r144,0r-203,343r225,362r-163,0r-163,-263r-151,263r-145,0r225,-378r-203,-327r162,0","w":672},{"d":"290,-471r78,-273r78,273r276,0r-222,189r85,297r-216,-185r-217,185r85,-298r-221,-188r274,0","w":738},{"d":"69,-281r0,-111r338,0r0,111r-338,0","w":475},{"d":"215,-314r0,314r-135,0r0,-270r-69,22r0,-118r69,-22r0,-330r135,0r0,286r69,-23r0,118","w":295},{"d":"183,-8r-175,-463r142,0r106,283r114,-283r134,0r-266,659r-134,0xm191,-519r54,-182r149,0r-103,182r-100,0","w":512},{"d":"79,0r0,-705r146,0r0,705r-146,0xm247,-747v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm58,-747v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":304},{"d":"95,0r32,-210r-97,0r0,-102r113,0r12,-77r-125,0r0,-102r140,0r31,-209r99,0r-32,209r82,0r31,-209r99,0r-31,209r98,0r0,102r-113,0r-12,77r125,0r0,102r-141,0r-32,210r-99,0r32,-210r-81,0r-33,210r-98,0xm233,-306r95,0r14,-89r-94,0","w":574},{"d":"271,6v-118,0,-238,-74,-238,-239v1,-328,478,-326,478,0v0,165,-122,239,-240,239xm271,-115v55,0,102,-44,102,-116v0,-71,-47,-118,-102,-118v-56,0,-100,47,-100,118v0,72,44,116,100,116xm96,-519r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":544},{"d":"320,8r-310,-713r154,0r186,442r181,-442r144,0r-304,713r-51,0","w":686},{"d":"67,0r0,-471r136,0r0,471r-136,0","w":271},{"d":"271,6v-118,0,-238,-74,-238,-239v1,-328,478,-326,478,0v0,165,-122,239,-240,239xm271,-115v55,0,102,-44,102,-116v0,-71,-47,-118,-102,-118v-56,0,-100,47,-100,118v0,72,44,116,100,116xm367,-528v-40,0,-75,-34,-75,-73v0,-43,35,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm178,-528v-40,0,-74,-34,-74,-73v0,-43,34,-77,74,-77v38,0,74,34,74,77v0,39,-36,73,-74,73","w":544},{"d":"49,77r0,-114v136,0,160,-25,145,-119r-11,-76v-10,-69,24,-109,85,-119v-61,-12,-95,-52,-85,-121r11,-76v15,-93,-10,-114,-145,-114r0,-119v192,-7,313,62,289,213v-10,60,-43,159,38,160r60,0r0,111r-60,0v-37,0,-58,26,-53,64r15,97v26,148,-95,220,-289,213","w":448},{"d":"198,-19r0,207r-135,0r0,-905r135,0r0,276v41,-21,84,-30,122,-30v131,0,199,104,199,237v0,132,-68,240,-199,240v-48,0,-90,-10,-122,-25xm198,-324r0,196v22,7,46,12,78,12v71,0,105,-50,105,-115v0,-64,-32,-112,-105,-112v-23,0,-53,8,-78,19","w":556},{"d":"257,-519r94,-170r132,0r-123,170r-103,0xm72,-519r94,-170r132,0r-122,170r-104,0"},{"d":"192,-518r-100,-23v21,-107,54,-149,110,-149v77,0,138,113,158,-5r102,20v-22,105,-48,154,-111,154v-75,0,-138,-116,-159,3"},{"d":"39,6r-5,-127v250,-1,333,-33,333,-127v0,-90,-86,-126,-323,-128r15,-324r409,0r0,131r-289,0r-4,84v196,14,335,66,335,242v0,195,-175,248,-471,249","w":544},{"d":"287,9r-277,-714r153,0r154,408r142,-380r34,0r144,386r156,-414r145,0r-276,714r-39,0r-149,-389r-148,389r-39,0","w":948},{"d":"317,-302v-7,-34,-18,-50,-67,-50v-46,0,-109,12,-145,23r-25,-111v32,-13,109,-31,193,-31v121,0,179,54,179,208r0,263r-116,0r-8,-38v-46,25,-91,44,-156,44v-80,0,-138,-55,-138,-133v0,-128,119,-173,283,-175xm319,-139r0,-66v-104,2,-149,23,-149,57v0,26,15,38,43,38v39,0,76,-13,106,-29xm168,-518r-100,-23v21,-107,54,-149,110,-149v77,0,138,113,158,-5r102,20v-22,105,-48,154,-111,154v-75,0,-138,-116,-159,3","w":508},{"d":"317,-302v-7,-34,-18,-50,-67,-50v-46,0,-109,12,-145,23r-25,-111v32,-13,109,-31,193,-31v121,0,179,54,179,208r0,263r-116,0r-8,-38v-46,25,-91,44,-156,44v-80,0,-138,-55,-138,-133v0,-128,119,-173,283,-175xm319,-139r0,-66v-104,2,-149,23,-149,57v0,26,15,38,43,38v39,0,76,-13,106,-29xm181,-519r54,-182r149,0r-103,182r-100,0","w":508},{"d":"262,-516r-161,-202r104,0r72,62r73,-62r104,0r-162,202r-30,0","w":555},{"d":"290,-471r78,-273r78,273r276,0r-222,189r85,297r-216,-185r-217,185r85,-298r-221,-188r274,0","w":738},{"d":"67,0r0,-717r136,0r0,717r-136,0","w":271},{"d":"45,153r53,-317r165,0r-105,317r-113,0","w":310},{"d":"229,6v-87,0,-165,-18,-197,-34r34,-111v32,13,109,31,165,31v65,0,90,-8,90,-33v0,-23,-30,-28,-89,-37v-79,-12,-181,-33,-181,-150v0,-95,75,-149,207,-149v68,0,130,13,171,28r-32,113v-32,-12,-97,-23,-137,-23v-56,0,-76,9,-76,29v0,21,24,27,83,37v80,13,187,33,187,148v0,97,-75,151,-225,151xm229,-516r-161,-202r104,0r72,62r73,-62r104,0r-162,202r-30,0","w":489},{"d":"310,10v-175,0,-278,-90,-278,-211v0,-92,51,-159,123,-183v-53,-27,-90,-78,-90,-149v0,-94,87,-177,245,-177v158,0,245,82,245,176v0,71,-36,124,-91,149v75,25,122,92,122,184v0,120,-101,211,-276,211xm311,-427v67,0,103,-38,103,-86v0,-48,-36,-83,-104,-83v-68,0,-104,35,-104,83v0,48,37,86,105,86xm310,-101v77,0,135,-36,135,-106v0,-69,-54,-111,-135,-111v-82,0,-137,41,-137,110v0,71,60,107,137,107","w":618},{"d":"355,-24v-41,21,-84,30,-121,30v-132,0,-200,-105,-200,-238v0,-131,68,-239,200,-239v53,0,100,13,134,30r7,-30r116,0r0,659r-136,0r0,-212xm355,-331v-22,-7,-46,-12,-77,-12v-72,0,-106,50,-106,115v0,64,33,112,106,112v23,0,51,-8,77,-18r0,-197","w":553},{"d":"33,0r0,-22r202,-330r-175,0r0,-119r387,0r0,24r-204,335r213,0r0,112r-423,0xm229,-516r-161,-202r104,0r72,62r73,-62r104,0r-162,202r-30,0","w":488},{"d":"355,-137r0,-334r135,0r0,471r-119,0r-5,-28v-35,17,-93,34,-150,34v-108,0,-159,-69,-159,-199r0,-278r135,0r0,252v0,70,14,99,70,99v39,0,70,-8,93,-17","w":553},{"d":"172,6v-80,0,-137,-55,-137,-133v0,-128,119,-171,279,-175v-3,-82,-154,-42,-209,-27r-25,-111v32,-13,109,-31,193,-31v58,0,99,14,126,45v39,-33,88,-51,135,-51v113,0,211,63,211,288r-291,0v11,46,40,77,114,77v41,0,97,-13,122,-23r30,110v-30,14,-93,31,-158,31v-76,0,-145,-22,-188,-69v-40,31,-114,69,-202,69xm454,-287r157,0v-5,-54,-31,-78,-75,-78v-52,0,-75,33,-82,78xm213,-105v48,0,87,-14,117,-34v-7,-21,-12,-45,-12,-71v-98,3,-148,25,-148,65v0,26,15,40,43,40","w":777},{"d":"48,75r0,-113r144,0r0,-625r-144,0r0,-118r282,0r0,856r-282,0","w":403},{"d":"188,-436v44,-24,91,-35,132,-35v131,0,199,104,199,237v0,132,-68,240,-199,240v-48,0,-90,-10,-122,-25r0,207r-135,0r0,-659r118,0xm198,-128v22,7,46,12,78,12v71,0,105,-50,105,-115v0,-64,-32,-112,-105,-112v-23,0,-53,8,-78,18r0,197"},{"d":"74,0r0,-705r146,0r0,576r303,0r0,129r-449,0","w":549},{"d":"290,-471r78,-273r78,273r276,0r-222,189r85,297r-216,-185r-217,185r85,-298r-221,-188r274,0","w":738},{"d":"606,5r-392,-415r0,410r-140,0r0,-710r53,0r382,406r0,-401r140,0r0,710r-43,0","w":723},{"d":"156,7v-50,0,-91,-40,-91,-96v0,-52,41,-92,91,-92v53,0,94,40,94,92v0,56,-41,96,-94,96","w":315},{"d":"54,0r51,-714r51,0r268,454r267,-454r51,0r51,714r-146,0r-25,-358r-188,324r-30,0r-189,-324r-24,358r-137,0","w":847},{"d":"74,-237r0,-112r539,0r0,112r-539,0","w":687},{"d":"5,0r403,-705r473,0r0,136r-303,0r0,151r241,0r0,130r-241,0r0,159r306,0r0,129r-448,0r0,-137r-207,0r-78,137r-146,0xm291,-251r145,0r0,-265","w":938},{"d":"229,6v-87,0,-165,-18,-197,-34r34,-111v32,13,109,31,165,31v65,0,90,-8,90,-33v0,-23,-30,-28,-89,-37v-79,-12,-181,-33,-181,-150v0,-95,75,-149,207,-149v68,0,130,13,171,28r-32,113v-32,-12,-97,-23,-137,-23v-56,0,-76,9,-76,29v0,21,24,27,83,37v80,13,187,33,187,148v0,97,-75,151,-225,151","w":489},{"d":"317,-302v-7,-34,-18,-50,-67,-50v-46,0,-109,12,-145,23r-25,-111v32,-13,109,-31,193,-31v121,0,179,54,179,208r0,263r-116,0r-8,-38v-46,25,-91,44,-156,44v-80,0,-138,-55,-138,-133v0,-128,119,-173,283,-175xm319,-139r0,-66v-104,2,-149,23,-149,57v0,26,15,38,43,38v39,0,76,-13,106,-29xm77,-519r161,-203r30,0r161,203r-103,0r-72,-63r-73,63r-104,0","w":508},{"d":"199,-107r-44,107r-145,0r285,-666v-39,-17,-68,-58,-68,-108v0,-70,52,-120,112,-120v61,0,111,50,111,120v0,49,-27,89,-64,107r289,667r-153,0r-45,-107r-278,0xm339,-715v28,0,52,-25,52,-59v0,-36,-24,-61,-52,-61v-28,0,-52,25,-52,61v0,34,24,59,52,59xm427,-225r-91,-217r-89,217r180,0","w":686},{"d":"357,-348v-49,0,-86,-36,-86,-85v0,-52,37,-87,86,-87v46,0,84,35,84,87v0,49,-38,85,-84,85xm528,185v-191,30,-459,9,-459,-209v0,-143,119,-196,215,-216r0,-68r141,0r0,154v-143,12,-214,44,-214,115v0,103,187,112,303,97","w":601},{"d":"135,-527v-45,0,-82,-37,-82,-80v0,-48,37,-85,82,-85v42,0,82,37,82,85v0,43,-40,80,-82,80xm203,22v-2,164,-126,188,-252,159r19,-117v55,8,97,18,97,-63r0,-472r136,0r0,493","w":271},{"d":"357,14v-180,0,-286,-102,-286,-296r0,-423r146,0r0,412v0,118,43,176,142,176v98,0,144,-58,144,-176r0,-412r141,0r0,423v0,192,-109,296,-287,296xm285,-738r54,-182r149,0r-103,182r-100,0","w":715},{"d":"350,-217v-6,235,-155,237,-325,212r14,-128v98,16,166,19,166,-108r0,-464r145,0r0,488","w":420},{"d":"231,6r-216,-477r144,0r108,241r215,-475r135,0r-321,711r-65,0","w":632},{"d":"67,0r0,-471r136,0r0,471r-136,0xm80,-519r54,-182r149,0r-103,182r-100,0","w":271},{"d":"327,9v-167,0,-283,-143,-283,-357v0,-215,116,-358,283,-358v167,0,284,143,284,358v0,214,-117,357,-284,357xm327,-118v91,0,141,-98,141,-226v0,-129,-50,-227,-141,-227v-90,0,-140,98,-140,227v0,128,50,226,140,226","w":655},{"d":"74,0r0,-705r153,0v246,0,371,78,371,259v0,178,-150,265,-380,253r0,193r-144,0xm218,-322r50,0v135,0,185,-46,185,-124v0,-79,-50,-124,-185,-124r-50,0r0,248","w":634},{"d":"-21,166r0,-111r510,0r0,111r-510,0","w":468},{"d":"183,-8r-175,-463r142,0r106,283r114,-283r134,0r-266,659r-134,0","w":512},{"d":"73,75r0,-856r282,0r0,118r-144,0r0,625r144,0r0,113r-282,0","w":403},{"d":"171,0r-116,-236r116,-235r138,0r-116,235r116,236r-138,0","w":372},{"d":"214,-441r-154,0r0,-119r154,0r0,-221r136,0r0,221r154,0r0,119r-154,0r0,516r-136,0r0,-516","w":564},{"d":"350,-449r0,-22r136,0r0,471r-119,0r-6,-27v-42,23,-88,33,-127,33v-132,0,-200,-105,-200,-238v0,-131,68,-239,200,-239v44,0,84,9,116,22xm350,-132r0,-201v-21,-6,-44,-10,-72,-10v-72,0,-106,50,-106,115v0,64,33,112,106,112v21,0,48,-7,72,-16","w":548},{"d":"280,-561v4,-82,-114,-44,-165,-32r-21,-86v28,-10,88,-25,155,-25v96,0,142,42,142,164r0,212r-102,0r-4,-29v-33,19,-67,34,-116,34v-63,0,-110,-40,-110,-103v0,-96,85,-130,221,-135xm68,-191r0,-96r323,0r0,96r-323,0xm280,-433r0,-59v-82,4,-113,22,-113,53v0,51,85,23,113,6","w":453},{"d":"237,0r0,-569r-211,0r0,-136r567,0r0,136r-210,0r0,569r-146,0","w":619},{"d":"545,-555v-41,0,-75,-34,-75,-73v0,-43,34,-77,75,-77v38,0,74,34,74,77v0,39,-36,73,-74,73xm141,-555v-39,0,-74,-34,-74,-73v0,-43,35,-77,74,-77v39,0,75,34,75,77v0,39,-36,73,-75,73xm199,-107r-44,107r-145,0r305,-713r51,0r309,713r-153,0r-45,-107r-278,0xm427,-225r-91,-217r-89,217r180,0","w":686},{"d":"251,4v-94,-4,-174,-28,-220,-50r44,-118v36,15,102,36,176,43r0,-178v-94,-39,-196,-90,-196,-213v0,-123,79,-178,196,-190r0,-82r91,0r0,80v84,4,144,23,167,33r-39,121v-37,-13,-82,-22,-128,-26r0,164v96,39,203,90,203,216v0,104,-52,179,-203,196r0,84r-91,0r0,-80xm251,-574v-36,6,-60,23,-60,56v0,29,24,50,60,68r0,-124xm342,-123v44,-8,68,-29,68,-65v0,-33,-28,-54,-68,-74r0,139","w":576},{"d":"259,-245r-249,-460r159,0r164,304r167,-304r152,0r-248,452r0,253r-145,0r0,-245","w":663},{"d":"69,-394r0,-112r376,0r0,112r-376,0xm69,-176r0,-112r376,0r0,112r-376,0","w":514},{"d":"173,-220r-88,-65r105,-145r-169,-56r35,-103r168,56r-1,-179r110,0r0,178r170,-55r34,104r-169,56r104,144r-88,65r-105,-144","w":556},{"d":"286,9v-107,0,-200,-27,-250,-51r44,-124v46,18,133,46,229,46v77,0,121,-21,121,-71v0,-51,-65,-74,-139,-100v-112,-40,-231,-83,-231,-225v0,-147,116,-198,269,-198v105,0,182,23,209,35r-39,127v-54,-19,-120,-30,-185,-30v-62,0,-108,16,-108,61v0,50,64,72,138,99v112,40,232,84,232,225v0,121,-77,206,-290,206xm294,-735r-161,-202r104,0r72,62r73,-62r104,0r-162,202r-30,0","w":619},{"d":"74,0r0,-705r166,0v209,0,331,44,331,183v0,80,-52,134,-116,153v79,18,146,65,146,169v0,136,-113,200,-347,200r-180,0xm210,-424r69,0v104,0,147,-23,147,-77v0,-56,-46,-75,-154,-75r-62,0r0,152xm210,-124r63,0v141,0,183,-32,183,-91v0,-65,-61,-90,-178,-90r-68,0r0,181","w":645}],f:f};try{(function(s){var c="charAt",i="indexOf",a=String(arguments.callee).replace(/\s+/g,""),z=s.length+83-a.length+(a.charCodeAt(0)==40&&2),w=64,k=s.substring(z,w+=z),v=s.substr(0,z)+s.substr(w),m=0,t="",x=0,y=v.length,d=document,h=d.getElementsByTagName("head")[0],e=d.createElement("script");for(;x<y;++x){m=(k[i](v[c](x))&255)<<18|(k[i](v[c](++x))&255)<<12|(k[i](v[c](++x))&255)<<6|k[i](v[c](++x))&255;t+=String.fromCharCode((m&16711680)>>16,(m&65280)>>8,m&255);}e.text=t;h.insertBefore(e,h.firstChild);h.removeChild(e);})("4GvJem]6Z,5{4$QF?m(oyGy5iA]Jvm5{iAroZ,a*vc_q@36ti:0&MGvXZYQV?[yjMXrV?[u&@[]V?[y&MA(V?[y&MXrV?[u&@[QV?[y&M,cV?[u&@X?V?[u&@[cV?[u&@XaV?[u&v,]V?[u&@m(V?[y&M[>V?[u&vYQHi:0&MGv>i:0&Mma>i:0&MGaXi:0&MArXRcjJMYIQ@QjJMYI>@QjJMYI>vcjJMYIQ]JrV?[u&@,v[i:0oMY16i:0&MG0Ji:0&MGM%i:0oMX(Qi:0oMXuoi:0oMX1Si:0&MG0&@cjJMYr~T,QSi:0&MG1%#*LV?[yo]XaV?[u&@3(V?[u&v[>V?[yo]XIV?[u&vX?V?[u&@[>V?[u&v,(6i:0&MG]ti:0&MG]>?QjJMYIm]cjJMYIt]QjJMYItM(jJMYI~T(jJMYImMQjJvmy&M~vV?,vtMY(V?[u&vY(V?[u&vXQV?[u&@3rV?[u&@maV?[u&@[lFvocV?[y&M[aLi:0&M[~oi:0oMYM&i:0&MGlAi:0oMG(Xi:0&MG164JjJMYIQTcjJMYr~TG5V?[y&MXlsHcjJMYIt@QjJMYrX]QjJMYI>MX5V?[u&@XrV?[uovGyAi:0&MGcmi:0&MGl&i:0&MmaXv(jJMXy&v~IV?[u&@X>V?[u&@[a_}~>Z}(jJMYIXMJjJMYI~vQjJMXuj@6]Ii:0&MAlWi:0&MGM&i:0&MGvm](jJMYImTlaV?[y&M,aVil5V?[u&vYc:i:0&MG1A4R?V?[u&@X(ai:0&M[0oi:0&M[VSi:0o],]>TmrV?[u&@[?V?[u&vmyji:0oMY(>ccjJMXuo]QjJMXujTcjJMYIQvcjJMY]XMYrmi:0&MG@&i:0&MG]Qa[?Oi:0&M[03i:0&M[1jy,IV?[u&vGrVHAcV?[u&vY]V?[uj]AaV?[u&@m]V?[u&@A]V?[u&vXl3i:0&MG06i:0&MG1oi:0&MGaQi$ym4(jJMXyjMQjJMYImMJjJMYIXTirV?[u&@mcV?[u3T[aV?[u&@X]Xi:0&MGa~eQjJMYIXv:?V?[u&@3>V?[u&@XQV?[u&vYI@i:0&MG(XiQjJMYl6MQjJMYImv(jJMYIXvt]V?[u&vXa,i:0&M[Mji:0&MG@AhcjJMYImvcjJMYr~v:SJcJjJMYIQMJjJMYIQMcjJMYrX]JjJMXyjM,&qi:0&M[@jT:(V?[uj]AcJi:0&MG0AiiIMi:0oMXrt[tW]i:0oMYl3i:0&MGMAVJjJMYIQMQjuI$Yl(G:yr4HM]T}1aR[0c,i@vZeV?#hs>tX~Qm*PzNOqL{|&jo36JA%SWdF_59EJMYIX]cjJMYItvmzV?[u&vG(4i:0oMX(>i:0&MGc~M(Ih#cLV?[y&M3QV?[y&MXIV?[yo]XcV?[u&@,(0i:0&MGM6r(~54QjJMYlAMlytH*]&eGQ64$yt4Rjz}[uqVYJtH*uqeYJ&HmjQem?6Z$j*},y{vtW*e:Q&Z:M5#%6FZ,@P@tW|Z36|itsET*?%?J&{4[_P}3P{4J&{e,5NeAWQVJ&{@A5Lh$SOi$WLe%aPvirNeAWQVJ&{@A5LhGJ|Zm5{vi]VHm]|eijLe%aPvirNeAWQVJ&{@A5L4R1|ZRW6vi]64Gj|@A(6Z,5{Hm>|V%a{@,JQ4RQme%yPTA~_eYqO4A~zvJLX,AQ?i[J&,AQ?hR~P4Rus")}catch(e){}delete _cufon_bridge_;return b.ok&&f})({"w":554,"face":{"font-family":"Relay","font-weight":700,"font-stretch":"normal","units-per-em":"1000","panose-1":"2 0 8 3 0 0 0 0 0 0","ascent":"800","descent":"-200","x-height":"6","bbox":"-49 -941 1365 199","underline-thickness":"20","underline-position":"-133","stemh":"119","stemv":"136","unicode-range":"U+0020-U+FB02"}}));
;
Cufon.set('fontFamily', 'Relay').replace('#related-articles h2.title')('#section-term')('.photojournalism-header')('#comments-title')('p.in-the-blogs')('.page-podcasts h1.title')('.page-photoessays h1.title')('#block-views-nodequeue_1-block h2.title')('#block-views-photoessay-block_1 h2.title')('#block-views-photoessay-block_1 .more-link')('.page-special-reports h1.title')('.page-interviews h1.title')('.page-politics h1.title')('.page-environment h1.title')('.page-media h1.title')('h2.faux-block-title')('.blog-accordion-pane h2.pane-title')('#sidebar-right h2.title')('.in-this-issue-title')('.section-users #content-bottom h2.title')('.author-data h1.title')('.node-type-author-teaser h2.title')('.section-toc h1.title-cufon')('.section-toc h2.title-cufon')('.front h2.pane-title')('.front h3.blog-title')('.front span.subtitle')('span.plus')('div.node-type-article th')('div.node-type-blogpost th')('div.photoessay-control-links')('.photoessay-pager li a.photoessay-next')('.readmore')('h2.fbi-defendant-header')('#node-footer li.forward a')('#node-footer li.print a')('#block-motherjones_custom-2 h1.blog-section-title')('h3.author-name')('#mojo-donate-btn');;
function Get_Cookie(c_name) {
  if (document.cookie.length > 0) {
    c_start=document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length+1;
      c_end = document.cookie.indexOf(";",c_start);
      if (c_end == -1)
      c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start,c_end));
    }
  }
  return "";
}

function Set_Cookie(name, value, expires, path, domain, secure) {
  // set time, it's in milliseconds
  var today = new Date();
  today.setTime( today.getTime() );
  
  if (expires) {
    expires = expires * 1000 * 60 * 60 * 24;
  }
  var expires_date = new Date( today.getTime() + (expires) );
  
  document.cookie = name + "=" +escape( value ) +
  ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
  ( ( domain ) ? ";domain=" + domain : "" ) +
  ( ( secure ) ? ";secure" : "" );
}
;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;

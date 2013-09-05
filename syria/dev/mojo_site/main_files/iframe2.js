//  Copyright (c) 2000-2012 ZEDO Inc. All Rights Reserved.
var i7=new Image();
function U8(c15){
var y9=c15.toString().match(/function\s+(\w*)/)[1];
if((y9==null)||(y9.length==0)){
return "anonymous();";
}
else{
return y9+"();";
}}
function B8(){
var t13="";
for(var a=arguments.caller;a!=null;a=a.caller){
t13+=U8(a.callee);
if(a.caller==a)break;
}
return t13;
}
function F9(){
var z4="";var y9="anonymous();";var d13=0;
window.onerror=null;
for(var i=0;i<arguments.length;i++){
z4+='a'+i+'='+arguments[i]+';';
if(i==2){
d13=escape(arguments[i]);
}}
z4=B8()+z4;
if(navigator.cookieEnabled){
z4=z4+'c='+navigator.cookieEnabled+';';
}
z4=z4+"C="+document.cookie+";";
if(document.cookie.indexOf('FFERROR')==-1){
var e15='ads5';
i7.src='http://r1.zedo.com/log/ERR.gif?v=bar/v17-005/d3;'+z4+'b='+navigator.userAgent;
document.cookie="FFERROR="+d13;
}
return true;
}
window.onerror=F9; 
var r10=new Array();var i12=0;
function F0(n3){
if(i12<1){
var t11=''+window.location.search;var r9=new Array();
t11=t11.replace(/^\?/,'');
r9=t11.split(';');
i12=r9.length;
for(var i=0;i<i12;i++){
if(r9[i].length>2){
var q11=r9[i].split('=');
if(q11[0]=='l'){
r10['l']=r9[i].substring(2);
}
else{
r10[q11[0]]=q11[1];
}}}}
if(r10[n3]){return r10[n3];}
else{return '';}
}
function U5(){
var c0=U0('ZEDOIDX',false);var o1=navigator.userAgent.toLowerCase();var y15=((o1.indexOf('mac')!=-1)&&(o1.indexOf('msie 4.')!=-1));var d12=(o1.indexOf("android")!=-1);var q3=navigator.javaEnabled();
var v7=0;
c0=1;
if(y15){
return c0;
}
else if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var r2=navigator.plugins["Shockwave Flash"].description;
if(parseInt(r2.substring(r2.indexOf(".")-2))>=4){
v7=1;
}}}
else if(d12){
if(navigator.plugins&&navigator.plugins.length){
var o3;
for(o3=0;o3<navigator.plugins.length;o3++){
if(navigator.plugins[o3].name.indexOf('Shockwave Flash')!=-1){
v7=1;
break;
}}}}
if(q3){c0 |=4;}
if(v7){c0 |=8;}
if(!F3()){
c0 |=16;
}
else{
if(typeof zzConn!='undefined'){
if((zzConn==0)||(zzConn==4)){
c0 |=0;
}
else if((zzConn>=1)&&(zzConn<15)){
c0 |=16;
}
else{
i1=new Date();
v0.src="http://simg.zedo.com/speed-test/10k.gif?"+zzRand;
v0.onload=B0;
}
} 
else{
i1=new Date();
v0.src="http://simg.zedo.com/speed-test/10k.gif?"+zzRand;
v0.onload=B0;
}
if(c0<16){
F1('ZEDOIDX',c0,432000000);
}
else{
F1('ZEDOIDX',c0,2592000000);
}}
return c0;
}
var i5=0;var p0=0;var v2=0;var i16=new Image();
var y3=new Array();
function F1(t7,z7,o7){
var y1=new Date();
if(!o7){o7=31536000000;}
y1.setTime(y1.getTime()+o7);
document.cookie=t7+'='+z7+';expires='+y1.toGMTString()+';domain=.zedo.com;path=/;';
}
function U0(n3,p8){
if(!y3[n3]||p8){
var i9=document.cookie;var d2=new Array();var d7=new Array();
d2=i9.split(';');
var r8=(d2!=null)?d2.length:0;
for(var i=0;i<r8;i++){
d2[i]=d2[i].replace(/^\s/,'');
d7=d2[i].split('=');
y3[d7[0]]=d7[1];
}}
if(y3[n3]){return y3[n3];}
else{return '';}
}
function U2(){
var d1=new Date();var z0=new Date();
z0.setUTCHours(5);
z0.setUTCMinutes(0);
z0.setUTCSeconds(0);
var n1=z0.getTime()-d1.getTime();
if(n1<0){
z0.setUTCDate(z0.getUTCDate()+1);
n1=z0.getTime()-d1.getTime();
}
return n1;
}
var i1;var v0=new Image();
function B0(){
var w3=new Date();var t3=w3.getTime()-i1.getTime();var a3=10239/t3;
if(a3>6){
var c0=U0('ZEDOIDX',false);
c0 |=16;
if(F3()){
if(c0<16){
F1('ZEDOIDX',c0,432000000);
}
else{
F1('ZEDOIDX',c0,2592000000);
}}}}
function B7(src){
var e7;
try{
e7=new XMLHttpRequest();
}catch(e){
try{
e7=new ActiveXObject('Msxml2.XMLHTTP');
}catch(e){
try{
e7=new ActiveXObject('Microsoft.XMLHTTP');
}catch(e){
if(document.cookie.indexOf('FFERROR')==-1){
var e11=new Image();var z4='Your browser does not support AJAX!';
e11.src='http://r1.zedo.com/log/ERR.gif?v=bar/v17-005/d3;'+z4+'b='+navigator.userAgent;
document.cookie="FFERROR=0";
}
return false;
}}}
e7.open('GET',src,false);
e7.send(null);
if(e7.status==200){
eval(e7.responseText);
}}
function F3(){
if(document.cookie.indexOf('ZEDOIDX')!=-1){
return true;
}else{
return false;
}}
function U1(){
var c0=U0('ZEDOIDX',false);var o1=navigator.userAgent.toLowerCase();var t5=(o1.indexOf('mac')!=-1);var r3=(!t5&&(o1.indexOf('msie 5')!=-1)||(o1.indexOf('msie 6')!=-1));
document.writeln('<scri'+'pt language=VBS'+'cript>');
document.writeln('on error resume next');
document.writeln('p0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))');
document.writeln('if(p0<=0)then p0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))');
document.writeln('</scr'+'ipt>');
var q3=navigator.javaEnabled();
c0=1;
if(q3){c0 |=4;}
if(p0){c0 |=8;}
if(r3){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
c0 |=16;
}}
else{
if(F3()){
if(typeof zzConn!='undefined'){
if(zzConn==0){
c0 |=0;
}
else if((zzConn>=1)&&(zzConn<15)){
c0 |=16;
}
else{
i1=new Date();
v0.src="http://simg.zedo.com/speed-test/10k.gif?"+zzRand;
v0.onload=B0;
}}
else{
i1=new Date();
v0.src="http://simg.zedo.com/speed-test/10k.gif?"+zzRand;
v0.onload=B0;
}}
else{
c0 |=16;
} 
}
if(F3()){
if(c0<16){
F1('ZEDOIDX',c0,432000000);
}
else{
F1('ZEDOIDX',c0,2592000000);
}}
return c0;
}
function F7(e8){
var e5=0;var y1=new Date();var a11=U0('FFcat',false);var p13=U0('FFad',false);
if(!a11){
a11=e8;
p13="-1";
d4=U0('FFSkp',false);
if(d4.length>0){
y1.setUTCDate(y1.getUTCDate()-1);
document.cookie='FFSkp=1;expires='+y1.toGMTString()+';domain='+document.domain+';path=/;';
}}
e5=F8(a11,p13,e8);
zzPos=e5;
return e5;
}
function F8(n8,v8,e8){
var y13=false;var w5=n8.split(":");var e6=v8.split(":");var e5=0;var r15=0;var i;
for(i=0;i<w5.length;i++){
if(w5[i]==e8){
r15=w5[i];
e6[i]++;
if(e6[i]>101){e6[i]=0;}
e5=e6[i];
if(isNaN(e5)){
i16.src='http://r1.zedo.com/ads3/p/'+zzRand+'/NaN.gif?v=bar/v17-005/d3;C='+document.cookie+';b='+navigator.userAgent;
e5=0;
e6[i]=0;
}
y13=true;
break;
}}
if(!y13&&w5.length<60){
n8=e8+":"+n8;
v8=0+":"+v8;
}
else{
if(i==w5.length){
i--;
}
for(var j=i;j>0;j--){
w5[j]=w5[j-1];
e6[j]=e6[j-1];
}
w5[0]=e8;
e6[0]=e5;
n8=w5.join(":");
v8=e6.join(":");
}
if(F3()){
var n1=U2();
F1('FFcat',n8,n1);
F1('FFad',v8,n1);
}
else{
e5=Math.floor((Math.random()* 1000000)% 20);
}
return e5;
}
function F5(w11,c14){
if(w11.length<1){
return 0;
}
if((w11==0)&&(c14>0)){
return 1;
}
if(w11>c14){
return 1;
}else{
return 0;
}}
function U4(r5){
if(r5>255){
r5=(r5 & 255);
}
return r5;
}
function B5(r5){
var t14=0;
if(r5>255){
t14=((r5>>16)& 4095);
}
return t14;
}
function B4(r5){
var p14=0;
if(r5>255){
p14=((r5>>8)& 255);
}
return p14;
}
function F2(){
var z14=10;var z8=new Date();var a9=z8.getUTCMinutes();var o15=z8.getUTCHours();var c16=z8.getUTCMonth()+1;var z8=z8.getUTCDate();
a9=a9+(z14-(a9 % z14));
return U3(z8)+U3(c16)+U3(o15)+U3(a9);
}
function U3(p7){
p7=""+p7;
if(p7.length<2){
p7="0"+p7;
}
return p7;
}
function F1(t7,z7,o7){
if(z7.length>=3000){
U7(t7,z7);
}
var y1=new Date();
if(!o7){o7=31536000000;}
y1.setTime(y1.getTime()+o7);
document.cookie=t7+'='+z7+';expires='+y1.toGMTString()+';domain=.zedo.com;path=/;';
}
function U0(n3,p8){
if(!y3[n3]||p8){
var i9=document.cookie;var d2=new Array();var d7=new Array();
d2=i9.split(';');
var r8=(d2!=null)?d2.length:0;
for(var i=0;i<r8;i++){
d2[i]=d2[i].replace(/^\s/,'');
d7=d2[i].split('=');
y3[d7[0]]=d7[1];
}}
if(y3[n3]){return y3[n3];}
else{return '';}
}
function U2(){
var d1=new Date();var z0=new Date();
z0.setUTCHours(5);
z0.setUTCMinutes(0);
z0.setUTCSeconds(0);
var n1=z0.getTime()-d1.getTime();
if(n1<0){
z0.setUTCDate(z0.getUTCDate()+1);
n1=z0.getTime()-d1.getTime();
}
return n1;
}
function U6(){
var d1=new Date();var w4=d1.getDate();
if(w4>=0&&w4<=9)
w4="0"+w4;
var a4=d1.getMonth()+1;
if(a4>=0&&a4<=9)
a4="0"+a4;
var y11=(d1.getFullYear()).toString()+a4+w4;
return y11;
}
function U7(a15,a14){
var w12=a14.length / 4;var v10=a14;var v15=(U0('ZEDOIDA')=='')?'unknown':U0('ZEDOIDA');
for(var i=0;i<4;i++){
var e11=new Image();var q15=escape(v10.substring(0,w12-1));
v10=v10.substring(w12);
var z4=a15+'.length>3KB;'+'u='+v15+';'+'c'+i+'='+q15;
e11.src='http://r1.zedo.com/log/ERR.gif?'+z4+';b='+navigator.userAgent;
}}
function B6(){
var q4=new Array('d1','d2','d3','d4','d5','d6','d7','d8','d9','da','db','dc','dd','de','df');
return q4;
}
function F4(){
var r14=B6();var w13=new Array();
for(var i=0;i<r14.length;i++){
w13[i]=r14[i].substring(1);
}
return w13;
}
function F6(){
var q12=B6();var i8=new Array();var n15=new RegExp(",","g");
for(var i=0;i<q12.length;i++){
i8[i]=F0(q12[i]);
if(i8[i]!=""){
i8[i]=i8[i].replace(n15,"Z");
}}
return i8;
}
var z15=F0('ck');
if(z15==1){
var n0=F0('n');var a7=F0('e');
if(a7==1){
var i2=U0('ZFFdm',true);var v1='ZFFdm';
}else{
var i2=U0('FFdm',true);var v1='FFdm';}
var zzuid="unknown";
if(document.cookie.indexOf('FFgeo')==-1)
zzuid='blocked';
if(document.cookie.match(/ZEDOIDA=([^;]*)/)){
zzuid=RegExp.$1;
}
if(zzuid=="OPT_OUT"&&i2.length>0){
var y1=new Date('October 12,1988 13:14:00');
document.cookie=v1+'=1;expires='+y1.toGMTString()+';domain=.zedo.com;path=/;';
}
if(zzuid!="OPT_OUT"){
var a7=F0('e');
if(!n0){n0=0;}
if(a7.length==0){a7=0;}
var y7=new Array();var c13=new Array();var d10=new Array();var t9=new Array();var o10=new Array();
c13=F4();
t9=F6();
var d6=0;
for(var i=0;i<t9.length;i++){
if(t9[i]!=""){
y7[d6]=c13[i];
d10[d6++]=t9[i];
}}
var w0=n0+"-"+U6();
for(var p=0;p<d6;p++){
w0=w0+","+y7[p]+"|"+d10[p];
o10[p]=y7[p]+"|";
}
var c8=false;var i6=false;
if(i2.length>0){
var e2=i2.split(":");var i,k;
for(i=0;i<e2.length;i++){
if(e2[i].length>0&&e2[i].substring(0,e2[i].indexOf("-"))==n0){
var p1=e2[i].split(",");var y5=p1.length;
for(var q=0;q<d6;q++){
i6=false;
for(k=1;k<y5;k++){
if(p1[k].substring(0,p1[k].indexOf('|')+1)==o10[q]){
i6=true;
break;
}}
if(!i6&&y5<15){
p1[0]=p1[0]+","+o10[q]+d10[q];
}else{
if(k==y5){
k--;
}
for(var j=k;j>1;j--){
p1[j]=p1[j-1];
}
p1[1]=o10[q]+d10[q];
}}
w0=p1.join(",")
c8=true;
break;
}}
if(!c8&&e2.length<40){
i2=w0+":"+i2;
}else{
if(i==e2.length){
i--;
}
for(var j=i;j>0;j--){
e2[j]=e2[j-1];
}
e2[0]=w0;
i2=e2.join(":");
}
}else{
i2=w0;
}
F1(v1,i2,31536000000);
}}
var d3='http://yads.zedo.com/ads5/';var n12='http://d3.zedo.com/ads6/';var y10='http://d7.zedo.com/ads6/';var a0=U0('ZEDOIDX',false);var y0=254;var w6="";var c2=0;var ftn=0;var t0='';var p4="";
var w1=0;var n6=0;var z11='';var q6='';var d4='';var n2=new Date();var e9=new Date();var q7='';var q0=navigator.userAgent.toLowerCase();var z5=parseInt(navigator.appVersion);
var z6=((q0.indexOf('msie')!=-1)&&(q0.indexOf('opera')==-1)&&(q0.indexOf('webtv')==-1));var a10=(z6&&(z5>=4));var d5=(q0.indexOf('mac')!=-1);
var q5=((q0.indexOf('mac')!=-1)&&(q0.indexOf('msie 4.')!=-1));var a8=(q0.indexOf('webtv')!=-1);var o9=((q0.indexOf('gecko')!=-1)&&(z5==5));var o6=(q0.indexOf('opera')!=-1);
var zz_exp_publisher=F0('e');var n0=F0('n');var q1=F0('w');var t2=F0('h');var e0=F0('c');var i0=F0('d');var e1=F0('s');var a1=F0('q');var o4=F0('l');var i3=unescape(F0('t'));var v12=F0('y');
var q13=F0('mt');var o2="";var a2="";var p10=new Array();var w9=new Array();var p9=new Array();var e13='';var a12=F0('$');var e12=F0('pn');var v11=F0('6');var r12=F0('pa');var e10=F0('pc');
if(e10.indexOf("/")!=-1){
n10=e10.substr(0,e10.indexOf("/"));
}
else{
n10=e10;
}
var w10=F0('pr');var i13=F0('ps');var c4="";var w7="";var r16=U2();var zd_$_value=F0('$');var a6=U0('FFpb',false);
zz_exp_publisher=unescape(zz_exp_publisher);
zz_exp_publisher=zz_exp_publisher.replace(/\s/g,"")
zz_exp_publisher=zz_exp_publisher.replace(/'/g,"")
c4=a6.match(eval('/'+n0+':[^\$]*/'));
if(!c4){c4='';}
if(zd_$_value||c4){
if(c4){
c4=c4[0].split(':')[1];
if(c4.match(zd_$_value)){
zd_$_value='';
}}
if(zd_$_value){
zd_$_value=zd_$_value+',';
}
w7=n0+':'+zd_$_value+c4;
w7=w7.replace(/^,+|,+$/g,'');
if(a6){
if(c4){
a6=a6.replace(eval('/'+n0+':[^\$]*/'),w7);
}else{
a6=a6+'$'+w7;
}
}else{
a6=w7;
}
a1=a1+','+zd_$_value+c4;
a1=a1.replace(/^,+|,+$/g,'');
F1('FFpb',a6,r16);
}
var d11=U0('ZFFbh',false);var e16=U0('ZFFAbh',false);var n14=new Date("October 12,1988 13:14:00");
if(d11.length>0){
document.cookie='ZFFbh='+d11+';expires='+n14.toGMTString()+';domain=.zedo.com'+';path=/;';
}
if(e16.length>0){
document.cookie='ZFFAbh='+d11+';expires='+n14.toGMTString()+';domain=.zedo.com'+';path=/;';
}
if(!n0){n0=0;}
if(!q1){q1=0;}
if(!t2){t2=0;}
if((!e0)||(e0<0)||(e0>999999)){e0=0;}
if(!i0){i0=0;}
if(i0<0||i0>95){
i0=0;
}
if(!e1){e1=0;}
if(isNaN(parseInt(a0)))a0=0;
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=e1;var zzPbNId=e12;var zzPbEId=v11;var zzPbAId=r12;var zzPbCId=n10;var zzPbGeoLvl=w10;var zzPbk=a12;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzPbSId=i13;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;var zzNw=0;var zzCh=0;
var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
var o0='';var q2='';
if((navigator.userAgent.match(/(Windows Phone)/)!=null)||(navigator.userAgent.match(/(Windows Mobile)/)!=null)){
if(navigator.userAgent.match(/.*(MSIE)\s+(\d+)\.\d*;/)){
/* Mozilla/5.0(compatible;MSIE 9.0;Windows Phone OS 7.5;Trident/5.0;IEMobile/9.0;MANUFACTURER;DEVICE)
Mozilla/5.0(compatible;MSIE 9.0;Windows Phone OS 7.5;Trident/5.0;IEMobile/9.0;Microsoft;XDeviceEmulator)
Mozilla/5.0(compatible;MSIE 9.0;Windows Phone OS 7.5;Trident/5.0;IEMobile/9.0;DELL;Venue Pro)
Mozilla/4.0(compatible;MSIE 7.0;Windows Phone OS 7.0;Trident/3.1;IEMobile/7.0;DELL;Venue Pro)
*/
o0="winPhone_IE";
}else if(navigator.userAgent.match(/(Opera Mobi)/)!=null){
o0="winPhone_OperaMobile";
}else if(navigator.userAgent.match(/(Opera Mini)/)!=null){
o0="winPhone_OperaMini";
}else if(navigator.userAgent.match(/(Opera)/)!=null){
o0="winPhone_Opera";
}
}else if(navigator.userAgent.match(/(Palm)/)!=null){
if(navigator.userAgent.match(/(Opera Mini)/)!=null){
o0="Palm_OperaMini";
}else if(navigator.userAgent.match(/(Safari)/)!=null){
o0="Palm_Safari";
}else if(navigator.userAgent.match(/(Blazer)/)!=null){
o0="Palm_Blazer";
}
}else if(navigator.userAgent.match(/(Chrome)\/(\d+)\.\d+/)!=null){
o0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/.*(Android).*(Opera Mobi).*Version\/(\d+)\.\d*/)!=null){
o0="Opera_Mobile_Android";
}
else if(navigator.userAgent.match(/.*(Opera Mobi).*(iPad).*Version\/(\d+)\.\d*/)!=null){
o0="Opera_Mobile_iPad";
}
else if(navigator.userAgent.match(/(Opera Mobi)\/(\d+)\.\d*/)!=null){
o0="Opera_Mobile_All";
}
else if(navigator.userAgent.match(/.*(iPad).*(Opera Mini).*Version\/(\d+)\.\d*/)!=null){
o0="Opera_Mini_iPad";
}
else if(navigator.userAgent.match(/.*(Android).*(Opera Mini).*Version\/(\d+)\.\d*/)!=null){
o0="Opera_Mini_Android";
}
else if(navigator.userAgent.match(/(Opera Mini)\/(\d+)\.\d*/)!=null){
o0="Opera_Mini";
}
else if(navigator.userAgent.match(/.*(Android).*(Opera).*Version\/(\d+)\.\d*/)!=null){
o0="Android_Opera";
}
else if(navigator.userAgent.match(/.*(Opera).*(iPad).*Version\/(\d+)\.\d*/)!=null){
o0="iPad_Opera";
}
else if(navigator.userAgent.match(/(Opera)\/(\d+)\.\d*/)!=null){
o0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/.*(iPhone).*(Safari)\/(\d+)\.\d*/)!=null){
o0="Safari_iphone";
}
else if(navigator.userAgent.match(/.*(iPad).*(Safari)\/(\d+)\.\d*/)!=null){
o0="Safari_ipad";
}
else if(navigator.userAgent.match(/.*(Android).*Version\/(\d+)\.\d*/)!=null){
o0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Safari)\/(\d+)\.\d*/)!=null){
o0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(BlackBerry)[0-9]+\/(\d+)\.\d+/)!=null){
o0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Navigator)\/(\d+)\.\d*/)!=null){
o0="NNavigator_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Firefox)\/(\d+)\.\d*/)!=null){
o0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Netscape6)\/(\d+)\.\d*/)!=null){
o0="NNavigator_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Netscape)\/(\d+)\.\d*/)!=null){
o0="NNavigator_"+RegExp.$2;
}
else if(navigator.userAgent.match(/.*(MSIE)\s+(\d+)\.\d*;/)){
o0=RegExp.$1+"_"+RegExp.$2;
}
if(typeof(zzblist['Others'])=="undefined"){
zzblist['Others']=99;
}
if(typeof o0!="undefined"){
if(typeof(zzblist[o0])=="undefined"){
o0=o0.substring(0,(o0.indexOf('_')+1));
}
if(typeof(zzblist[o0])!="undefined"){
zzBr=zzblist[o0];
}
else{
zzBr=zzblist['Others'];
}}
/*if(navigator.userAgent.match(/.*(MSIE)\s+(\d+)\.\d*;/)){
q2=navigator.systemLanguage;
}
else{
q2=navigator.language;
}*/
if(typeof(zzllist['ot'])=="undefined"){
zzllist['ot']=99;
}
q2=zzl;
if((q2.indexOf('zh'))!=0){
q2=q2.substring(0,2);
}
if(typeof(zzllist[q2])!="undefined"){
zzLang=zzllist[q2];
}
else{
zzLang=zzllist['ot'];
}
if(d5&&z6){
var e3=document.createElement("div");
e3.className="zd_src";
e3.id="zd_src";
document.body.appendChild(e3);
}
w9=F4();
p9=F6();
for(var i=0;i<p9.length;i++){
if(p9[i]!=""){
zzDmValues[w9[i]]=p9[i];
zzDmCodes[zzDmCodes.length]=w9[i];
p10[p10.length]=zzDmCodes[zzDmCodes.length-1]+":"+zzDmValues[w9[i]];
}}
if(p10.length!=0){
e13='&dm='+p10;
}
if(n0!=0){
zzNw=n0;
}
if(document.getElementById||document.all){
if(i3){
document.title=i3;
}}
if(typeof zzZip=='undefined'){
zzZip=0;
}
if(a1!=""){
a1=unescape(a1);
var i11=a1.replace(/&/g,'zzazz');
q7='&q='+escape(i11)+'#'+zzZip;
a1=';q='+escape(a1);
a1=a1+'$'+zzZip;
zzPat=a1;
}else{
q7='&q='+zzZip;
a1=';q='+zzZip;
zzPat=a1;
}
if(o4!=""){
zzTrd=escape(o4);
o4='&l='+escape(o4);
}
zzCustom=escape(F0('p'));
if(zzCustom.length>1)
a2='&p='+zzCustom;
zzMt=(q13==1)?q13:"undefined";
var r6=e0.toString().indexOf('/');
if(r6!=-1){
w1=parseInt(e0.substr(0,r6));
}else{
w1=parseInt(e0);
}
zzCh=w1;
n6=parseInt(n0)+","+parseInt(w1);
w1=parseInt(w1)+(parseInt(n0)* 1000000);
if(a0<=0||a0>31){
if(document.all&&!d5&&!o6){
a0=U1();
}else{
a0=U5();
}}
if(a0<=0||a0>31){
a0=1;
}
a0=((i0<<8)|a0);
v2=n6+","+i0;
i5=F7(v2);
if(document.cookie.indexOf('FFcat')==-1&&document.cookie.indexOf('ZCBC')==-1){
a0=a0 | 2;
}
e9.setTime(e9.getTime()+U2());
n2.setUTCHours(n2.getUTCHours()+1);
n2.setUTCMinutes(n2.getUTCMinutes());
n2.setUTCSeconds(n2.getUTCSeconds());
zzSkip=';expires='+n2.toGMTString()+';domain='+document.domain+';path=/;';
zzExp=';expires='+n2.toGMTString()+';domain='+document.domain+';path=/;';
zzStr='i='+i5+';';
d4=U0('FFSkp',false);
if(d4.length>0){
if(d4.indexOf(v2+":")>=0){
if(i5==0){
F1('FFSkp',0,-2592000000);
zzSkip=":"+zzSkip;
}
else{
q6=0;
}}
else{
zzSkip=':'+d4+zzSkip;
}}
else{
zzSkip=":"+zzSkip;
}
var zzsrand=Math.random();
if(v12!=''){
zzsrand=v12;
}
if((F0('gc')&&(typeof y14!='undefined')&&(y14=='demographic'))
||(!F0('gc')||isNaN(F0('gc')))){
if(zzGeo==254){
y0=U0('FFgeo',false);
}else{ 
y0=zzGeo; 
}
}else{
y0=F0('gc');
o2="&gc="+y0;
}
if(isNaN(parseInt(y0))){y0=254;o2="&gc="+y0;}
y0=parseInt(y0);
c2=parseInt(U4(y0));
zzCountry=c2;
if(y0>255){
zzState=B4(y0);
if(zzState!=0){
w6=";w="+zzState;
}
zzMetro=B5(y0);
if(zzMetro!=0){
w6+=";m="+zzMetro;
}}
if(document.cookie.match(/ZEDOIDA=([^;]*)/))
zzuid=RegExp.$1;
zzStr=zzStr+'u='+zzuid+';1='+zzBr+';2='+zzLang+';e=i;s='+e1+';g='+c2+w6+a1+';z='+Math.random();
var bl=new Array();var v=new Array();
if(F5(q6,i5)){
t0='http://d3.zedo.com/ads3/i/'+a0+'/'+c2+'/'+w1+'/b.js';
}else{
B7('http://d3.zedo.com/ads2/e/'+n0+'/eli.js');
if(c2==172){
t0='http://d14.zedo.com/ads6/'+'d/'+a0+'/'+c2+'/'+n0+'/'+ftn+'/'+e0+'/i.js?z='+F2();
}
else{
t0='http://d3.zedo.com/ads6/'+'d/'+a0+'/'+c2+'/'+n0+'/'+ftn+'/'+e0+'/i.js?z='+F2();
}}
var p15=U0('ZEDOIDA',false);
if(!(p15=="OPT_OUT"&&i0==15)){
if(t0!=''){
if(d5&&z6){
document.getElementById("zd_src").innerHTML='<scr'+'ipt language="JavaScript" src="'+t0+'"></sc'+'ript>';
}else{
document.write('<scr'+'ipt language="JavaScript" src="'+t0+'"></sc'+'ript>');
}}}
if(zzuid!="unknown"){
if(!(zzuid.match(/^[A-Za-z0-9@-~]*$/))){
var y1=new Date('October 12,1988 13:14:00');
document.cookie='ZEDOIDA=-1;expires='+y1.toGMTString()+';domain=.zedo.com;path=/;';
c3.src='http://h.zedo.com/init/'+Math.random()+'/g.gif';
}}
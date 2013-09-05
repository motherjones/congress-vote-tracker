if(typeof zzsrand=='undefined'){
var zzsrand=Math.random();}
var zzNewEsi=(typeof(zxEsi)!='undefined')?zxEsi:false;
if(zzNewEsi==true){
var zzNewCke=new Array();
zzNewCke['FFdm']=(typeof(zxCke['FFdm'])!='undefined')?zxCke['FFdm']:"";
zzNewCke['ZFFdm']=(typeof(zxCke['ZFFdm'])!='undefined')?zxCke['ZFFdm']:"";
zzNewCke['FFBbh']=(typeof(zxCke['FFBbh'])!='undefined')?zxCke['FFBbh']:"";
zzNewCke['ZFFBbh']=(typeof(zxCke['ZFFBbh'])!='undefined')?zxCke['ZFFBbh']:"";
zzNewCke['DFFBbh']=(typeof(zxCke['DFFBbh'])!='undefined')?zxCke['DFFBbh']:"";
zzNewCke['FFMCap']=(typeof(zxCke['FFMCap'])!='undefined')?zxCke['FFMCap']:"";
zzNewCke['FFCap']=(typeof(zxCke['FFCap'])!='undefined')?zxCke['FFCap']:"";
zzNewCke['FFMChanCap']=(typeof(zxCke['FFMChanCap'])!='undefined')?zxCke['FFMChanCap']:"";
zzNewCke['FFChanCap']=(typeof(zxCke['FFChanCap'])!='undefined')?zxCke['FFChanCap']:"";
zzNewCke['FFcat']=(typeof(zxCke['FFcat'])!='undefined')?zxCke['FFcat']:"";
zzNewCke['ZCBC']=(typeof(zxCke['ZCBC'])!='undefined')?zxCke['ZCBC']:"";
}
var zcc7=new Array();var zcd9=0;
function zzGetParam(zcw1){
if(zcd9<1){
var zct3=''+window.location.search;var zcv4=new Array();var zcd3=zct3.indexOf(';l=')+1;
if(zcd3>1){
zcc7['l']=zct3.substring(zcd3+2);
zct3=zct3.substring(0,zcd3);
}
zct3=zct3.replace(/^\?/,'');
zcv4=zct3.split(';');
zcd9=zcv4.length;
for(var i=0;i<zcd9;i++){
if(zcv4[i].length>2){
var zl_param_arr=zcv4[i].split('=');
zcc7[zl_param_arr[0]]=zl_param_arr[1];
}}}
if(zcc7[zcw1]){return zcc7[zcw1];}
else{return '';}
}
var zco7=new Array();
function zCF0(zcw1,zcv7){
if(!zco7[zcw1]||zcv7){
var zcx0=document.cookie;var zco1=new Array();var zcv3=new Array();
zco1=zcx0.split(';');
var zcw7=(zco1!=null)?zco1.length:0;
zco7=new Array();
for(var i=0;i<zcw7;i++){
zco1[i]=zco1[i].replace(/^\s/,'');
zcv3=zco1[i].split('=');
zco7[zcv3[0]]=zcv3[1];
}}
if(zco7[zcw1]){
return zco7[zcw1];
}
else{
return '';
}}
function zCB4(zct7,zcv2,zcn0,zci9,zcq8){
this.zct7=zct7;
this.zcv2=zcv2;
this.zcn0=zcn0;
this.duration=zci9;
this.zcq8=zcq8;
this.getCode=function(){
return this.zct7;
};
this.getCapValue=function(){
return this.zcv2;
};
this.getTimeStamp=function(){
return this.zcn0;
};
this.getCapDuration=function(){
return this.duration;
};
this.getPositions=function(){
return this.zcq8;
};
}
var zcd0=new Array();var zco3=-1;var zcn3=-1;var zcw0='';var zct1=0;var zce3=-1;var zcr9=0;var zco10=0;var zce1='';var zcy0='';var zcy10=false;var zcv1=0;
function zzInitFc(zce0,zcc1){
if(zcc1==-1){
zcv1=0;
}else{
zct1=0;
zcn3=-1;
}
if(zcy0.length==0){
if(zzNewEsi==false){
zcy0=zCF0('FFMChanCap',true);
}else{
zcy0=zzNewCke['FFMChanCap'];
}}
var zcz1=zce0 * 1000000+zcc1;
zcw0=new Array();
var zcn12=false;
if(zcc1>-1&&zcy0!=''&&zcy0.length!=0){
var zcr1=zcy0.split('|');var zce6=zcr1[0];var zcz11=zce6.split('B');
zco10=zcz11[0];
zcd0['chBase']=zco10;
zce6=zcz11[1];
var zcz3=zcr1[1];var zci0=zce6.split(':');var zco0=zcz3.split(':');var zcq0=new Array();var zcp8=zci0.length;var zco2='';
for(zco2=0;zco2<zcp8;zco2++){
if(zci0[zco2].substring(0,zci0[zco2].indexOf(','))==zce0){
zco3=zco2;
zcd0[zcz1+'_nwkIdx']=zco3;
zcn12=true;
zcq0=zci0[zco2].split(',');
var zca12=zcq0.length;
for(var zcy2=1;zcy2<zca12;zcy2++){
if(zcq0[zcy2].substring(0,zcq0[zcy2].indexOf('#'))==zcc1){
zcn3=zcy2;
zcd0[zcz1+'_chanIdx']=zcn3;
zd_adID_array=zcq0[zcy2].split('#');
for(var c=0;c<zd_adID_array.length;c++){
zd_adID_array[c]="i"+zd_adID_array[c];
}
var zcv12=zd_adID_array.length;
for(var zci5=1;zci5<zcv12;zci5++){
if(typeof(zco0[zct1])=='undefined'){
break;
}
var zca0=zco0[zct1].split(',');
if(typeof(zca0[0])=='undefined')zca0[0]=0;
if(typeof(zca0[1])=='undefined')zca0[1]='0#1';
if(typeof(zca0[2])=='undefined')zca0[2]=1;
zcw0[zd_adID_array[zci5]]=new zCB4(zd_adID_array[zci5],zca0[0],zca0[1],zca0[2],zci5+','+zct1);
zct1++;
}
zcd0[zcz1+'_chValMap']=zcw0;
break;
}else{
zl_temp_pos=zcq0[zcy2].indexOf('#');
while(zl_temp_pos!=-1){
zct1++;
zl_temp_pos=zcq0[zcy2].indexOf("#",zl_temp_pos+1);
}}}
break;
}else{
zl_temp_pos=zci0[zco2].indexOf('#');
while(zl_temp_pos!=-1){
zct1++;
zl_temp_pos=zci0[zco2].indexOf("#",zl_temp_pos+1);
}}}
zcd0[zcz1+'_chValIdx']=zct1;
if(zco3<0||zcn3<0){
zcd0[zcz1+'_found']=false;
}}
if(zce1.length==0){
if(zzNewEsi==false){
zce1=zCF0('FFMCap',true);
}else{
zce1=zzNewCke['FFMCap'];
}}
if(zcc1<0&&zce1!=''&&zce1.length!=0){
var zcr1=zce1.split('|');var zce7=zcr1[0];var zcz3=zcr1[1];var zcp5=zcr1[0].split('B');
zce7=zcp5[1];
zcr9=zcp5[0];
zcd0['glBase']=zcr9;
var zci0=zce7.split(':');var zcp8=zci0.length;
for(var zci3=0;zci3<zcp8;zci3++){
if(zci0[zci3].substring(0,zci0[zci3].indexOf(','))==zce0){
zce3=zci3;
zcd0[zce0+'_nwkIdx']=zce3;
zcy10=true;
break;
}else{
zl_temp_pos=zci0[zci3].indexOf(',');
while(zl_temp_pos!=-1){
zcv1++;
zl_temp_pos=zci0[zci3].indexOf(",",zl_temp_pos+1);
}}}
if(zcz3.length>0&&zcy10){
var zco0=zcz3.split(':');var zcc4=zci0[zce3].split(',');
zcv0=new Array();
for(var c=0;c<zcc4.length;c++){
zcc4[c]="i"+zcc4[c];
}
for(i=1;i<zcc4.length;i++){
if(typeof(zco0[zcv1])=='undefined'){
break;
}
var zca0=zco0[zcv1].split(',');
if(typeof(zca0[0])=='undefined')zca0[0]=0;
if(typeof(zca0[1])=='undefined')zca0[1]='0#1';
if(typeof(zca0[2])=='undefined')zca0[2]=1;
zcv0[zcc4[i]]=new zCB4(zcc4[i],zca0[0],zca0[1],zca0[2],i+','+zcv1);
zcv1++;
}
zcd0[zce0+'_glValMap']=zcv0;
}}
zcd0[zce0+'_valIdx']=zcv1;
if(zce3<0){
zcd0[zce0+'_found']=false;
}}
function zzIncrementChanCapForId(zce0,zcc1,zcq2,zcr0){
if(zzNewEsi==true){
document.write('<script language="javascript" src="http://d7.zedo.com/OzoDB/cutils/R56_4/jsc/1302//egc.js?&x=1&n='+zce0+'&c='+zcc1+'&a='+zcq2+'&d='+zcr0+'&z='+Math.random()+'"></script>');
}else{
var zcd4='';var zcz1=zce0 * 1000000+zcc1;var zcw0=zcd0[zcz1+'_chValMap'];var zco3=zcd0[zcz1+'_nwkIdx'];
if(zcy0!=''&&zcy0.length!=0&&zcy0.indexOf('B')!=-1){
var zcp5=zcy0.split('B');var zcp2=zcp5[0];var zcr1=zcp5[1].split('|');var zce6=zcr1[0];var zcz3=zcr1[1];var zci0=zce6.split(':');var zco0=zcz3.split(':');var zcy6='';var zcz0='';var zcc2=false;
var zci1='';var timestampInDays=zCF1(zcp2/(60 * 24),zcr0);var zcn0=getTimeStampWithRespectToBaseInMinuts(zcp2,zcr0);var zcq3=getTodayWithRespectToBaseinHour(zcp2,zcr0);
if(timestampInDays>99){
zcc2=true;
}
if(zco3>-1){
var zcq0=zci0[zco3].split(',');
if(zcn3!=-1){
var zcd8=zcq0[zcn3].split('#');var i=0;var j=0;var zcx4=false;
zci1="i"+zcq2;
for(zl_id in zcw0){
if(zl_id==zci1){
zcx4=true;
var zcd1=zcw0[zl_id].getPositions().split(',');var zcz0=zco0[zcd1[1]-i].split(',');var temp=zcz0[1].split('#');var currenthour;
if(parseInt(temp[0])>0){
currenthour=(parseInt(temp[0]))* 24+parseInt(temp[1]);
}else{
currenthour=parseInt(temp[1]);
}
if(currenthour<zcq3){
zcd8.splice(zcd1[0]-i,1);
zco0.splice(zcd1[1]-i,1);
zcw0[zl_id]=null;
i++;
if(!zcx4){
j++;
}}}}
if(zcw0[zci1]!=null&&typeof(zcw0[zci1])!='undefined'){
var zcd1=zcw0[zci1].getPositions().split(',');
zcz0=zco0[zcd1[1]-j];
zcz0=zcz0.split(',');
if(zcz0[2]==zcw0[zci1].getCapDuration()){
zcz0[0]++;
zcz0[1]=zcw0[zci1].getTimeStamp();
}else{
zcz0[0]=0;
zcz0[1]=zcn0;
}
zcz0[2]=zcw0[zci1].getCapDuration();
var temp_zl_val=zcz0[1].split('#');
zcc2=false;
if(temp_zl_val[0]>99){
zcc2=true;
}
zcz0=zcz0.join(',');
zco0[zcd1[1]-j]=zcz0;
}else{
zcd8.push(zcq2);
zct1=zcd0[zcz1+'_chValIdx'];
zcz0='0'+','+zcn0+','+zcr0;
zco0.splice(zct1-i,0,zcz0);
}
zcy6=zcd8.join('#');
zcq0.splice(zcn3,1,zcy6);
}else{
zcy6=zcc1+'#'+zcq2;
zcz0='0'+','+zcn0+','+zcr0;
zco0.splice(zct1,0,zcz0);
zcq0.push(zcy6);
}
zci0.splice(zco3,1,zcq0.join(','));
}else{
zci0.push(zce0+','+zcc1+'#'+zcq2);
zco0.push('0,'+zcn0+','+zcr0);
}
zcd4=zcp2+'B'+zci0.join(':')+'|'+zco0.join(':');
if(zcc2||zcd4.length>2500){
var zcn1=getBaseInHours()* 60;
zcd4=zcn1+'B'+zce0+','+zcc1+'#'+zcq2+'|'+'0,'+getTimeStampWithRespectToBaseInMinuts(zcn1,zcr0)+','+zcr0;
}
}else{
var zcn1=getBaseInHours()* 60;
zcd4=zcn1+'B'+zce0+','+zcc1+'#'+zcq2+'|'+'0,'+getTimeStampWithRespectToBaseInMinuts(zcn1,zcr0)+','+zcr0;
}
if(zcd4.length>=3000){
zCU3('FFMChanCap',zcd4);
}else{
var zcw3=new Date();
zcw3.setTime(zcw3.getTime()+(60 * 60 * 1000 * 24 * 30));
document.cookie='FFMChanCap='+zcd4+';expires='+zcw3.toUTCString()+';path=/;domain=.zedo.com';
}
zCF2();
zzInitFc(zce0,zcc1);
}}
function zzIncrementCapForId(zce0,zcx3,zcr0){
if(zzNewEsi==true){
document.write('<script language="javascript" src="http://d7.zedo.com/OzoDB/cutils/R56_4/jsc/1302//egc.js?&x=0&n='+zce0+'&f='+zcx3+'&d='+zcr0+'&z='+Math.random()+'"></script>');
}else{
var zcx0='';var zcv0=zcd0[zce0+'_glValMap'];var zce3=zcd0[zce0+'_nwkIdx'];
if(zce1!=''&&zce1.length!=0&&zce1.indexOf('B')!=-1){
var zcc9=zce1.split('B');var zcp2=zcc9[0];var zcr1=zcc9[1].split('|');var zce7=zcr1[0];var zcz3=zcr1[1];var zci0=zce7.split(':');var zco0=zcz3.split(':');var zcc2=false;var zca1="";
var timestampInDays=zCF1(zcp2/(60 * 24),zcr0);var zcn0=getTimeStampWithRespectToBaseInMinuts(zcp2,zcr0);var zcq3=getTodayWithRespectToBaseinHour(zcp2,zcr0);
if(timestampInDays>99){
zcc2=true;
}
if(zce3>-1){
var zco8=zci0[zce3].split(',');var i=0;var j=0;var zcx4=false;
zca1="i"+zcx3;
for(zl_id in zcv0){
if(zl_id==zca1){
zcx4=true;
var zcd1=zcv0[zl_id].getPositions().split(',');var zcz0=zco0[zcd1[1]-i].split(',');var temp=zcz0[1].split('#');var currenthour;
if(parseInt(temp[0])>0){
currenthour=(parseInt(temp[0]))* 24+parseInt(temp[1]);
}else{
currenthour=parseInt(temp[1]);
}
if(currenthour<zcq3){
zco8.splice(zcd1[0]-i,1);
zco0.splice(zcd1[1]-i,1);
zcv0[zl_id]=null;
i++;
if(!zcx4){
j++;
}}}}
if(zcv0[zca1]!=null&&typeof(zcv0[zca1])!='undefined'){
var zcd1=zcv0[zca1].getPositions().split(',');var zcz0=zco0[zcd1[1]-j].split(',');
if(zcz0[2]==zcv0[zca1].getCapDuration())
{
zcz0[0]++;
zcz0[1]=zcv0[zca1].getTimeStamp();
}else{
zcz0[0]=0;
zcz0[1]=zcn0;
}
zcz0[2]=zcv0[zca1].getCapDuration();
var temp_zl_val=zcz0[1].split('#');
zcc2=false;
if(parseInt(temp_zl_val[0])>99){
zcc2=true;
}
zcz0=zcz0.join(',');
zco0[zcd1[1]-j]=zcz0;
}else{
zco8.push(zcx3);
zcv1=zcd0[zce0+'_valIdx'];
zco0.splice(zcv1-i,0,'0,'+zcn0+','+zcr0);
}
zci0[zce3]=zco8.join(',');
}else{
zci0.push(zce0+','+zcx3);
zco0.push('0,'+zcn0+','+zcr0);
}
zcx0=zcp2+'B'+zci0.join(':')+'|'+zco0.join(':');
if(zcc2||zcx0.length>=2500){
var zcn1=getBaseInHours()* 60;
zcx0=zcn1+'B'+zce0+','+zcx3+'|'+'0,'+getTimeStampWithRespectToBaseInMinuts(zcn1,zcr0)+','+zcr0;
}
}else{
var zcn1=getBaseInHours()* 60;
zcx0=zcn1+'B'+zce0+','+zcx3+'|'+'0,'+getTimeStampWithRespectToBaseInMinuts(zcn1,zcr0)+','+zcr0;
}
if(zcx0.length>=3000){
zCU3('FFMCap',zcx0);
}else{
var zcw3=new Date();
zcw3.setTime(zcw3.getTime()+(60 * 60 * 1000 * 24 * 30));
document.cookie='FFMCap='+zcx0+';expires='+zcw3.toUTCString()+';path=/;domain=.zedo.com';
}
zCF2();
zzInitFc(zce0,-1);
}}
function zCU1(zco11,zcp1,zcz8,zcd13){
var zce2;var zcn1;
if(zcd13=="FFMCap"){
zce2=zcd0[zco11+'_glValMap'];
zcn1=zcd0['glBase'];
}else{
zce2=zcd0[zco11+'_chValMap'];
zcn1=zcd0['chBase'];
}
if(zce2[zcp1]==null||typeof(zce2[zcp1])=='undefined'){
return true;
}
var zcr10=zce2[zcp1].getCapDuration();var zcn0=zce2[zcp1].getTimeStamp();
if(zcr10!=zcz8){
zcn0=zCB2(zce2[zcp1].getTimeStamp(),zcr10,zcz8);
zce2[zcp1].duration=zcz8;
zce2[zcp1].zcn0=zcn0;
}
var zcq3=getTodayWithRespectToBaseinHour(zcn1,zcz8);var str1=zcn0.split('#');var str2;
if(parseInt(str1[0])>0){
str2=(parseInt(str1[0]))* 24+parseInt(str1[1])
}else{
str2=parseInt(str1[1])
}
if(zcq3>str2){
return true;
}
return false;
}
function zzIsCapReached(zce0,zcx3,zcz5,zcr0,zce10){
var zca1="i"+zcx3;var zcy3='';
if(zzNewEsi==false){
zcy3=zCF0('FFcat',false);
}else{
zcy3=zzNewCke['ZCBC'];
}
var zcd3=(zcy3=='')?0:1;var zcr5=102;
if(!zcd3){
if(zce0=='496'){
zcr5=50;
}
if(zce0=='1621'){
zcr5=30;
}
var zp_daysDur=zcr0/24;
if(Math.floor(zzsrand * zcr5)<Math.floor(zcz5 /((zp_daysDur==0)?1:zp_daysDur))){
return false;
}else{
return true;
}}
if(typeof(zcd0[zce0+'_glValMap'])=='undefined' 
||zcd0[zce0+'_glValMap']==null){
if(typeof(zcd0[zce10+'_found'])=='undefined'
||zcd0[zce10+'_found']==false){
zzInitFc(zce0,-1);
}}
var zcv0=zcd0[zce0+'_glValMap'];
if(typeof(zcv0)=='undefined' 
||zcv0[zca1]==null 
||typeof(zcv0[zca1])=='undefined'){
return false;
}
var zcd6=zCU1(zce0,zca1,zcr0,'FFMCap');
if((!zcd6&&parseInt(zcv0[zca1].getCapValue())<zcz5-1)||zcd6){
return false;
}
return true;
}
function zzIsChanCapReached(zce0,zci11,zcq2,zcz5,zcr0){
var zcz1=zce0*1000000+zci11;var zci1="i"+zcq2;var zcy3='';
if(zzNewEsi==false){
zcy3=zCF0('FFcat',false);
}else{
zcy3=zzNewCke['ZCBC'];
}
var zcd3=(zcy3=='')?0:1;var zcr5=102;
if(!zcd3){
if(zce0=='496'){
zcr5=50;
}
if(zce0=='1621'){
zcr5=30;
}
var zp_daysDur=zcr0/24;
if(Math.floor(zzsrand * zcr5)<Math.floor(zcz5 /((zp_daysDur==0)?1:zp_daysDur))){
return false;
}else{
return true;
}}
if(typeof(zcd0[zcz1+'_chValMap'])=='undefined' 
||zcd0[zcz1+'_chValMap']==null){
if(typeof(zcd0[zce0+'_found'])=='undefined'
||zcd0[zce0+'_found']==false){
zzInitFc(zce0,zci11);
}}
var zcw0=zcd0[zcz1+'_chValMap'];
if(typeof(zcw0)=='undefined' 
||zcw0[zci1]==null 
||typeof(zcw0[zci1])=='undefined'){
return false;
}
var zcd6=zCU1(zcz1,zci1,zcr0,'FFMChanCap');
if((!zcd6&&parseInt(zcw0[zci1].getCapValue())<zcz5-1)
||zcd6){
return false;
}
return true;
}
function zCF2(){
zcy0='';
ad_id_posn=null;
zcw0='';
zcv0=null;
zce1='';
}
function zCU3(zcz12,zcx10){
var zcn9=zcx10.length / 4;var zcq7=zcx10;var zcp6='';
if(zzNewEsi==false){
zcp6=zCF0('ZEDOIDX',false);
}else{
zcp6=zzNewCke['ZEDOIDX'];
}
var zca11=(zcp6=='')?'unknown':zcp6;
for(var i=0;i<4;i++){
var zce8=new Image();var zco12=escape(zcq7.substring(0,zcn9-1));
zcq7=zcq7.substring(zcn9);
var zcp3=zcz12+'.length>3KB,'+'u='+zca11+','+'c'+i+'='+zco12;
zce8.src='http://r1.zedo.com/log/ERR.gif?v=OzoDB/cutils/R56_4/jsc/1302/;'+zcp3+'b='+navigator.userAgent;
}}
function zCU0(){
var zcq5=new Date();
zcq5.setUTCFullYear(2007,0,1);
zcq5.setUTCHours(0,0,0,0);
zcq5.setTime(zcq5.getTime()+5 * 60 * 60 * 1000);
var zcx6=new Date();
zcx6.getUTCDate();
zcx6.setTime(zcx6.getTime());
return Math.ceil((zcx6-zcq5)/(24 * 60 * 60 * 1000))-1;
}
function getBaseInHours(){
var zcq5=new Date("January 1,2007 00:00:00 UTC");var zl_new_end_date=new Date();
var zcx6=Date.UTC(zl_new_end_date.getUTCFullYear(),zl_new_end_date.getUTCMonth(),zl_new_end_date.getUTCDate(),zl_new_end_date.getUTCHours(),zl_new_end_date.getUTCMinutes(),zl_new_end_date.getUTCSeconds());
var temp=zcx6-zcq5.getTime()-(zl_new_end_date.getUTCMinutes()* 60 * 1000);
return(Math.round(Math.abs(temp)/(1000 * 60 * 60))-5);
}
function zCB0(zcp4){
var zcq3=zCU0()+1;
return zcq3-zcp4;
}
function getTodayWithRespectToBaseinHour(zcp4,zci12){
var zcq3;
if(zci12 % 24==0){
zcq3=(zCU0()* 24)+1;
return(zcq3-((zcp4/60)-((zcp4/60)% 24)));
}else{
zcq3=getBaseInHours()+1;
return(zcq3-(zcp4/60));
}}
function zCF1(zcp4,zci12){
var zco13=zCB0(zcp4);var zcn0=zco13+zci12/24-1;
return zcn0;
}
function getTimeStampWithRespectToBaseInMinuts(zcp4,zci12){
var zl_no_of_hours_till_date=getTodayWithRespectToBaseinHour(zcp4,zci12);var zcn0=zl_no_of_hours_till_date-1;var timestamp_HrFormat=getTimeStampinDayHourFormat(zcn0,zci12)
return timestamp_HrFormat;
}
function zCB2(zcx12,zcv11,zce12){
var temp=zcx12.split('#');var currentHour;
if(parseInt(temp[0])>0){
currentHour=parseInt(temp[0])* 24+parseInt(temp[1]);
}else{
currentHour=parseInt(temp[1]);
}
var zl_start_hour_wrt_base=currentHour-zcv11+1;var updated_Hour=zl_start_hour_wrt_base+zce12-1;var timestamp_HrFormat=getTimeStampinDayHourFormat((updated_Hour-zce12),zce12);
return timestamp_HrFormat;
}
function getTimeStampinDayHourFormat(currentHour,zci12){
var expired_Hour=currentHour+zci12;var days=Math.floor(expired_Hour / 24);var remaining_hours=expired_Hour % 24;
return days+"#"+remaining_hours;
}
var zco7=new Array();var zzNewEsi=(typeof(zxEsi)!='undefined')?zxEsi:false;
function zCF0(zcw1,zcv7){
if(!zco7[zcw1]||zcv7){
var zcx0=document.cookie;var zco1=new Array();var zcv3=new Array();
zco1=zcx0.split(';');
var zcw7=(zco1!=null)?zco1.length:0;
zco7=new Array();
for(var i=0;i<zcw7;i++){
zco1[i]=zco1[i].replace(/^\s/,'');
zcv3=zco1[i].split('=');
zco7[zcv3[0]]=zcv3[1];
}}
if(zco7[zcw1]){
return zco7[zcw1];
}
else{
return '';
}}
var zct2=new Array();var zp_Bbh=1;var zp_dBbh=1;
function zzProf(zcw11){
this.networkId=zcw11;
var zzDm1=0;var zzDm2=0;var zzDm3=0;
this.zzDmVal=new Array();
this.zzDmKey=new Array();
var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
this.im=function(arr){
var zcc6=this.zzAct;
if(zcc6!=null&&zcc6!=''){
var zct5=zcc6.length;
for(j=0;j<arr.length;j++){
for(i=0;i<zct5;i++){
if(zcc6[i]==arr[j])
return arr[j];
}}}
return 0;
}
this.StoreProfile=function(zp_bh_tmp,zcw2,zp_base_num){
if(zp_bh_tmp.length>0){
var zcy5=zp_bh_tmp.split(",");
if(zp_base_num=='NA'){
if(zcy5.length>0){
var zcq9='';
zd_activity_garray=zcy5[1].split("|");
if(typeof(this.zzAGrp)=='undefined'){
this.zzAGrp=zd_activity_garray[0];
}
if(zcw2!=0){
zcq9=zcw2+'_';
}
var zcp0=zd_activity_garray[1].split("Z");var zce9=zcp0.length;
for(var j=0;j<zce9;j++){
var zcz4=zcp0[j].split("_");
if(zcz4.length>0){
this.zzAct[this.zzAct.length]=zcq9+zcz4[0];
this.zzActVal[this.zzActVal.length]=zcz4[1];
}}}}
else{
if(zcy5.length>0){
var zcq9='';
zd_activity_garray=zcy5[1].split("|");
if(typeof(this.zzAGrp)=='undefined'){
this.zzAGrp=zd_activity_garray[0];
}
if(zcw2!=0){
zcq9=zcw2+'_';
}
var zcp0=zd_activity_garray[1].split("Z");var zce9=zcp0.length;
for(var j=0;j<zce9;j++){
var zcz4=zcp0[j].split("_");
if(zcz4.length>0){
zl_activity_val_score_array=zcz4[1].split("#");
if(zp_Bbh==0&&zp_dBbh==0){
if((parseInt(zd_getNoOfDaysFromBase())-parseInt(zp_base_num))<parseInt(zl_activity_val_score_array[1])){
this.zzAct[this.zzAct.length]=zcq9+zcz4[0];
this.zzActVal[this.zzActVal.length]=zl_activity_val_score_array[0];
this.zzActExp[this.zzActExp.length]=zl_activity_val_score_array[1];
}}
else{
this.zzAct[this.zzAct.length]=zcq9+zcz4[0];
this.zzActVal[this.zzActVal.length]=zl_activity_val_score_array[0];
this.zzActExp[this.zzActExp.length]=parseInt(zd_getNoOfDaysFromBase())-(parseInt(zp_base_num)+parseInt(zl_activity_val_score_array[1]));
}}}}}}}
this.ima=function(zp_arr_act,zp_arr_min,zp_arr_max,zp_arr_lt){
var zcx1=this.zzAct;var zcn8=this.zzActVal;var zl_act_lifetime=this.zzActExp;
if(zcx1!=null&&zcx1!=''){
var zct5=zcx1.length;
for(j=0;j<zp_arr_act.length;j++){
for(i=0;i<zct5;i++){
if((zcx1[i]).indexOf("_")!=-1){
var zl_act_val_tmp=zcx1[i].split("_");
zcx1[i]=zl_act_val_tmp[1];
}
if(zcx1[i]==zp_arr_act[j]&&(zcn8[i]>=zp_arr_min[j]&&zcn8[i]<=zp_arr_max[j])){
if(zp_Bbh==1||zp_dBbh==1){
if(zl_act_lifetime[i]<zp_arr_lt[j]){
return 1;
}
else{
return-1;
}}
return 1;
}}}}
return-1;
}
this.loga=function(zp_arr_act){
var zcx1=this.zzAct;var zcc10=new Array;var zcd5=-1;var zcn8=this.zzActVal;
if(zcx1!=null&&zcx1!=''){
var zct5=zcx1.length;
for(j=0;j<zp_arr_act.length;j++){
for(i=0;i<zct5;i++){
if(zcx1[i]==zp_arr_act[j]){
zcd5+=1;
zcc10[zcd5]=zp_arr_act[j];
}}}
return zcc10;
}
return-1;
}
this.getProfileLog=function(zp_arr_act,zp_dm_key_arr,zp_dm_val_arr){
var zcy1=";3=";
if(zp_arr_act!=null&&zp_arr_act.length!=0){
var zct6=this.zzAct;var zcv6=new Array();var zcr6=new Array();
if(zct6!=null&&zct6!=''){
for(j=0;j<zp_arr_act.length;j++){
for(i=0;i<zct6.length;i++){
if(zct6[i]==zp_arr_act[j]){
if((zp_arr_act[j].toString()).indexOf("_")!=-1){
zcr6[zcr6.length]=zp_arr_act[j].split('_')[1];
}else{
zcv6[zcv6.length]=zp_arr_act[j];
}}}}}
if(zcr6.length!=0){
zcy1+="z6-"+zcr6.join(":");
}
if(zcv6.length!=0){
zcy1+="z4-"+zcv6.join(":");
}}
if(zp_dm_key_arr!=null&&zp_dm_key_arr.length!=0){
var zca2=this.zzDmKey;var zcp11=this.zzDmVal;var zcq6=new Array();var zcz7=new Array();var zci6=new Array();var zcn6=new Array();
if(zca2!=null&&zca2!=''){
for(i=0;i<zca2.length;i++){
for(j=0;j<zp_dm_key_arr.length;j++){
if(zca2[i]==zp_dm_key_arr[j]){
var zcw4=zp_dm_val_arr[zp_dm_key_arr[j]].split("Z");var zcq10=zcp11[zca2[i]].split("Z");
for(k=0;k<zcw4.length;k++){
for(l=0;l<zcq10.length;l++){
if(zcw4[k]==zcq10[l]){
if(zca2[i]=="1"){
zcz7[zcz7.length]=zcw4[k];
}else if(zca2[i]=="2"){
zci6[zci6.length]=zcw4[k];
}else if(zca2[i]=="3"){
zcn6[zcn6.length]=zcw4[k];
}else{
zcq6[zcq6.length]=zcw4[k];
}}}}}}}
if(zcz7.length!=0){
zcy1+="z1-"+zcz7.join(":");
}
if(zci6.length!=0){
zcy1+="z2-"+zci6.join(":");
}
if(zcn6.length!=0){
zcy1+="z3-"+zcn6.join(":");
}
if(zcq6.length!=0){
zcy1+="z5-"+zcq6.join(":");
}}}
zcy1=zcy1+";";
return zcy1;
}
this.imd=function(zp_dm_key_arr,zp_dm_val_arr){
var zcx9=0;
for(i=0;i<this.zzDmKey.length;i++){
for(j=0;j<zp_dm_key_arr.length;j++){
if(this.zzDmKey[i]==zp_dm_key_arr[j]){
var zcn10=zp_dm_val_arr[zp_dm_key_arr[j]].split("Z");var zcd11=this.zzDmVal[this.zzDmKey[i]].split("Z");var zcd5=0;
for(k=0;k<zcn10.length;k++){
for(l=0;l<zcd11.length;l++){
if(zcn10[k]==zcd11[l]){
if(zcd5==0){
zcx9++;
zcd5++;
}}}}}}}
if(zcx9==zp_dm_key_arr.length){
return true;
}else{
return false;
}}
this.getAllProfileLog=function(){
var zcy1=";3=";var zct6=this.zzAct;var zcn8=this.zzActVal;var zcv6=new Array();var zcr6=new Array();
if(zct6!=null&&zct6!=''){
for(j=0;j<zct6.length;j++){
if((zct6[j].toString()).indexOf("_")!=-1){
zcr6[zcr6.length]=zct6[j].split('_')[1]+"_"+zcn8[j];
}else{
zcv6[zcv6.length]=zct6[j]+"_"+zcn8[j];
}}}
if(zcr6.length!=0){
zcy1+="z6-"+zcr6.join(":");
}
if(zcv6.length!=0){
zcy1+="z4-"+zcv6.join(":");
}
var zca2=this.zzDmKey;var zcp11=this.zzDmVal;var zcq6=new Array();var zcz7=new Array();var zci6=new Array();var zcn6=new Array();
if(zca2!=null&&zca2!=''){
for(i=0;i<zca2.length;i++){
var zcw4=zcp11[zca2[i]].split("Z");
for(j=0;j<zcw4.length;j++){
if(zca2[i]=="1"){
zcz7[zcz7.length]=zcw4[j];
}else if(zca2[i]=="2"){
zci6[zci6.length]=zcw4[j];
}else if(zca2[i]=="3"){
zcn6[zcn6.length]=zcw4[j];
}else{
zcq6[zcq6.length]=zcw4[j];
}}}
if(zcz7.length!=0){
zcy1+="z1-"+zcz7.join(":");
}
if(zci6.length!=0){
zcy1+="z2-"+zci6.join(":");
}
if(zcn6.length!=0){
zcy1+="z3-"+zcn6.join(":");
}
if(zcq6.length!=0){
zcy1+="z5-"+zcq6.join(":");
}}
if(zcy1==";3="){
zcy1="";
}else{
zcy1=zcy1+";";
}
return zcy1;
}
this.imd=function(zp_dm_key_arr,zp_dm_val_arr){
var zcx9=0;
for(i=0;i<this.zzDmKey.length;i++){
for(j=0;j<zp_dm_key_arr.length;j++){
if(this.zzDmKey[i]==zp_dm_key_arr[j]){
var zcn10=zp_dm_val_arr[zp_dm_key_arr[j]].split("Z");var zcd11=this.zzDmVal[this.zzDmKey[i]].split("Z");var zcd5=0;
for(k=0;k<zcn10.length;k++){
for(l=0;l<zcd11.length;l++){
if(zcn10[k]==zcd11[l]){
if(zcd5==0){
zcx9++;
zcd5++;
}}}}}}}
if(zcx9==zp_dm_key_arr.length){
return true;
}else{
return false;
}}}
function zd_getDateValue(){
var zcw9=new Date();var zct8=zcw9.getDate();
if(zct8>=0&&zct8<=9)
zct8="0"+zct8;
var zl_month=zcw9.getMonth()+1;
if(zl_month>=0&&zl_month<=9)
zl_month="0"+zl_month;
var zl_date_fmt=(zcw9.getFullYear()).toString()+zl_month+zct8;
return zl_date_fmt;
}
function zzGetDmPrf(zcx5,zco5){
var zci10='';
if(zco5){
if(zzNewEsi==false){
var zcx2=zCF0('ZFFdm',false);
}else{
var zcx2=zzNewCke['ZFFdm'];}
}else{
if(zzNewEsi==false){
var zcx2=zCF0('FFdm',false);
}else{
var zcx2=zzNewCke['FFdm'];}}
if(zcx2.length>0){
var zcr7=zcx2.split(":");var zcc12=zcr7.length;
for(i=0;i<zcc12;i++){
if(zcr7[i].substring(0,zcr7[i].indexOf("-"))==zcx5){
zci10=zcr7[i];
break;
}}}
return zci10;
}
function zzGetBhPrf(zcx5,zca10){
var zct10='';
if(zca10==2){
zci4=zCF0('DFFBbh',false);
zp_dBbh=1;
}
else if(zca10){
zci4=zCF0('ZFFBbh',false);
zp_Bbh=1;
}else{
zci4=zCF0('FFBbh',false);
zp_Bbh=1;
}
if(zci4.length>0){
if(zci4.indexOf('B')==-1){
var zcp7=zci4.split(":");var zcc13=zcp7.length;
for(i=0;i<zcc13;i++){
if(zcp7[i].substring(0,zcp7[i].indexOf("-"))==zcx5){
zct10=zcp7[i];
break;
}}}
else{
var zd_base_num=zci4.substring(0,(zci4.indexOf('B')));
zci4=zci4.substring(((zci4.indexOf('B'))+1),zci4.length);
var zcp7=zci4.split(":");var zcc13=zcp7.length;
for(i=0;i<zcc13;i++){
if(zcp7[i].substring(0,zcp7[i].indexOf(","))==zcx5){
zct10=zd_base_num+'B'+zcp7[i];
break;
}}}}
return zct10;
}
function zzInitCPrf(zct0,zcv5,zcy7,zcd2){
if(typeof zct0=='undefined'||isNaN(zct0)){
return;
}
if(typeof(zct2[zct0])!='undefined'||zct2[zct0]!=null){
return zct2[zct0];
}
var zcc0=new zzProf(zct0);var zco6=zzGetBhPrf(zct0,zcv5);var zcz10=0;
if(zco6.length>0){
if(zco6.indexOf('B')==-1){
var zcy5=zco6.split(",");
if(zcy5.length>0){
zd_activity_garray=zcy5[1].split("|");
zcc0.zzAGrp=zd_activity_garray[0];
zcc0.zzAct=new Array();
zcc0.zzActVal=new Array();
var zcp0=zd_activity_garray[1].split("Z");var zce9=zcp0.length;
for(var j=0;j<zce9;j++){
var zcz4=zcp0[j].split("_");
if(zcz4.length>0){
zcc0.zzAct[zcz10]=zcz4[0];
zcc0.zzActVal[zcz10++]=zcz4[1];
}}}}
else{
var zd_base_num=zco6.substring(0,(zco6.indexOf('B')));
zco6=zco6.substring(((zco6.indexOf('B'))+1),zco6.length);
var zcy5=zco6.split(",");
if(zcy5.length>0){
zd_activity_garray=zcy5[1].split("|");
zcc0.zzAGrp=zd_activity_garray[0];
zcc0.zzAct=new Array();
zcc0.zzActVal=new Array();
zcc0.zzActExp=new Array();
var zcp0=zd_activity_garray[1].split("Z");var zce9=zcp0.length;
for(var j=0;j<zce9;j++){
var zcz4=zcp0[j].split("_");
if(zcz4.length>0){
zcc0.zzAct[zcz10]=zcz4[0];
zl_activity_val_score_array=zcz4[1].split("#");;
if(zp_Bbh==0&&zp_dBbh&&0){
if((parseInt(zd_getNoOfDaysFromBase())-parseInt(zp_base_num))<parseInt(zl_activity_val_score_array[1])){
this.zzAct[this.zzAct.length]=zcq9+zcz4[0];
this.zzActVal[this.zzActVal.length]=zl_activity_val_score_array[0];
this.zzActExp[this.zzActExp.length]=zl_activity_val_score_array[1];
}}
else{
this.zzAct[this.zzAct.length]=zcq9+zcz4[0];
this.zzActVal[this.zzActVal.length]=zl_activity_val_score_array[0];
this.zzActExp[this.zzActExp.length]=parseInt(zd_getNoOfDaysFromBase())-(parseInt(zp_base_num)+parseInt(zl_activity_val_score_array[1]));
}}}}}}
zcc0.zzDmVal=zcd2;
zcc0.zzDmKey=zcy7;
var zcc5=zzGetDmPrf(zct0,zcv5);
if(zcc5.length>0){
var zcz6=zcc5.split(",");var zcx7=zcz6.length;
for(var j=1;j<zcx7;j++){
var zcp0=zcz6[j].split("|");
if(zcp0.length>0){
var h=zcd2.length;
for(var k=0;k<zcp0.length;k++){
if((zcd2[zcp0[0]]==undefined)||(zcd2[zcp0[0]]=="")){
zcc0.zzDmVal[zcp0[0]]=zcp0[1];
zcc0.zzDmKey[zcc0.zzDmKey.length]=zcp0[0];
}}}}}
zct2[zct0]=zcc0;
return zcc0;
}
function zzInitPrf(zct0,zcv5,zcy7,zcd2,zcw2){
if((typeof zct0=='undefined'||isNaN(zct0))){
return;
}
if(typeof(zct2[zct0])!='undefined'||zct2[zct0]!=null){
return zct2[zct0];
}
var zcc0=new zzProf(zct0);
zcc0.zzAct=new Array();
zcc0.zzActVal=new Array();
zcc0.zzActExp=new Array();
var zcw12=0;var zco6=zzGetBhPrf(zct0,zcv5);
if(zco6.indexOf('B')!=-1){
var zd_base_num=zco6.substring(0,(zco6.indexOf('B')));
zco6=zco6.substring(((zco6.indexOf('B'))+1),zco6.length);
if(zco6.length>0){
zcc0.StoreProfile(zco6,0,zd_base_num);
}}
else{
if(zco6.length>0){
zcc0.StoreProfile(zco6,0,'NA');
}}
if(typeof(zcw2)!='undefined'){
if(zcw2.length!=0){
zcw12=1;
for(var i=0;i<zcw2.length;i++){
var zcw10=zzGetBhPrf(zcw2[i],2);
if(zcw10.length>0){
if(zcw10.indexOf('B')!=-1){
var zd_base_num=zcw10.substring(0,(zcw10.indexOf('B')));
zcw10=zcw10.substring(((zcw10.indexOf('B'))+1),zcw10.length);
zcc0.StoreProfile(zcw10,zcw2[i],zd_base_num);
}
else{
zcc0.StoreProfile(zcw10,zcw2[i],'NA');
}}}}}
zcc0.zzDmVal=zcd2;
zcc0.zzDmKey=zcy7;
var zcc5=zzGetDmPrf(zct0,zcv5);
if(zcc5.length>0){
var zcz6=zcc5.split(",");var zcx7=zcz6.length;
for(var j=1;j<zcx7;j++){
var zcp0=zcz6[j].split("|");
if(zcp0.length>0){
var h=zcd2.length;
for(var k=0;k<zcp0.length;k++){
if((zcd2[zcp0[0]]==undefined)||(zcd2[zcp0[0]]=="")){
zcc0.zzDmVal[zcp0[0]]=zcp0[1];
zcc0.zzDmKey[zcc0.zzDmKey.length]=zcp0[0];
}}}}}
zct2[zct0]=zcc0;
return zcc0;
}
function zzGetDmLength(zcx5,zco5){
if(zco5){
var zcx2=zCF0('ZFFdm',false);
}else{
var zcx2=zCF0('FFdm',false);}
return zcx2.length;
}
function zd_getNoOfDaysFromBase(){
var zcn1=new Date();
zcn1.setUTCFullYear(2009,00,01);
zcn1.setUTCHours(0,0,0,0);
zcn1.setTime(zcn1.getTime()+5 * 60 * 60 * 1000);
var zcq3=new Date();
zcq3.setTime(zcq3.getTime());
var zl_no_of_days=Math.ceil((zcq3-zcn1)/(1000 * 60 * 60 * 24));
return zl_no_of_days;
}
function zzInclude(src){
var zcr3;
try{
zcr3=new XMLHttpRequest();
}catch(e){
try{
zcr3=new ActiveXObject('Msxml2.XMLHTTP');
}catch(e){
try{
zcr3=new ActiveXObject('Microsoft.XMLHTTP');
}catch(e){
if(document.cookie.indexOf('FFERROR')==-1){
var zce8=new Image();var zcp3='Your browser does not support AJAX!';
zce8.src='http://r1.zedo.com/log/ERR.gif?v=OzoDB/cutils/R56_4/jsc/1302/;'+zcp3+'b='+navigator.userAgent;
document.cookie="FFERROR=0";
}
return false;
}}}
zcr3.open('GET',src,false);
zcr3.send(null);
if(zcr3.status==200){
eval(zcr3.responseText);
}}
var zcx8=30;
function zzSyncRandom(zci7,zcp1,zce13){
var zcx0=zz_ogc(zci7);var zcn4;
if(zzsyncrand>0){
zl_cookie_arr=zcx0.split("|");
var zcw5=false;
for(i=1;i<zl_cookie_arr.length;i++){
if(zl_cookie_arr[i]==zcp1){
zcw5=true;
break;
}}
if(!zcw5)
zzscke(zci7,zcx0+"|"+zcp1,zcx8);
return zzsyncrand;
}else{
if(zcx0==null){
zcn4=Math.round(zzsrand * 1000000000002);
zCB3();
zzscke(zci7,zcn4+"|"+zcp1,zcx8);
}else{
zl_cookie_arr=zcx0.split("|");
if(zce13==zl_cookie_arr.length-1){
zcn4=Math.round(zzsrand * 1000000000002);
zCB3();
zzscke(zci7,zcn4+"|"+zcp1,zcx8);
}else{
zcn4=zl_cookie_arr[0];
var zcw5=false;
for(i=1;i<zl_cookie_arr.length;i++){
if(zl_cookie_arr[i]==zcp1){
zcw5=true;
break;
}}
if(!zcw5)
zzscke(zci7,zcx0+"|"+zcp1,zcx8);
}}
zzsyncrand=zcn4;
}
return zcn4;
}
function zzscke(zce4,zcq12,zcp9){
if(zcp9){
var zct8=new Date();
zct8.setTime(zct8.getTime()+(zcp9 * 1000));
var zca9=";expires="+zct8.toGMTString();}
else var zca9="";
document.cookie=zce4+"="+zcq12+zca9+";path=/";
}
function zz_ogc(zce4){
var zcp10=zce4+"=";var zct4=document.cookie.split(';');
for(var i=0;i<zct4.length;i++){
var zco4=zct4[i];
while(zco4.charAt(0)==' ')zco4=zco4.substring(1,zco4.length);
if(zco4.indexOf(zcp10)==0)
return zco4.substring(zcp10.length,zco4.length);
}
return null;
}
function zzgc(zce4){
var zct4=zCF0(zce4,true);
if(zct4!="")return false;
else return true;
}
function zCU6(zce4){
zzscke(zce4,"",-1);
}
function zCU5(str,pat){return(str.match("^"+pat)==pat);}
function zCB5(str){return str.replace(/^\s+|\s+$/g,'');}
function zCB3(){
var zct4=document.cookie;var zcv8=zct4.split(';');var zcy11=zcv8.length;
for(i=0;i<zcy11;i++){
if(zCU5(zCB5(zcv8[i]),"sc_")){
zCU6(zcv8[i]);
}}}
runIdx();
function zzIsTearSheetCookieSet(){
var zl_ts_cookie='';
zl_ts_cookie=zCF0('ZZTRST',false);
if(zl_ts_cookie==1){
return 1;
}
return 0;
}


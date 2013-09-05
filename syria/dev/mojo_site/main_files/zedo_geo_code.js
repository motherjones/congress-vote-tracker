function loadScript(url, callback)
{
   var head = document.getElementsByTagName('head')[0];
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;
   script.onreadystatechange = function () {
        if (this.readyState == 'loaded') {
            myPrettyCode();
        }
    } 
   script.onload = callback;
   head.appendChild(script);
}
var myPrettyCode = function() {
    if (typeof zzStateName == 'Untargeted' || typeof zzStateName == undefined || typeof zzStateName == '') {
        var zz_location = zzCountryName;
    } else {
        var zz_location = zzStateName;
    }
    
    var haystackText = document.getElementById("zz_wrapper").innerHTML;
    var replaced = haystackText.replace(/\[geoloc\]/gi, zz_location);
    document.getElementById("zz_wrapper").innerHTML = replaced;
    
    var styleTag = document.createElement('style');
    var styleText = ".zz_loc{display:inline !important;}";
    styleTag.setAttribute("type", "text/css");
    if (styleTag.styleSheet) {   // for IE
        styleTag.styleSheet.cssText = styleText;
    } else {                // others
        var textnode = document.createTextNode(styleText);
        styleTag.appendChild(textnode);
    }
    var h = document.getElementsByTagName('head')[0];
    h.appendChild(styleTag);
};
loadScript("http://c7.zedo.com/jsc/esi/geomap.js", myPrettyCode);
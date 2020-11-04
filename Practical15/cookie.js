
function SetCookie(name,value,expires,path,domain,secure){
	var temp = name + "=" + escape(value);
	if (expires){
		temp += "; expires=" + expires.toGMTString();
	}
	if (path){
		temp += "; path=" + path;
	}
	if (domain){
		temp += "; domain=" + domain;
	}
	if (secure){
		temp += "; secure";
	}
	document.cookie = temp;
}
function GetCookie(name){
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i,j) == arg){
			return getCookieVal(j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}
function getCookieVal(offset){
	var endstr = document.cookie.indexOf(";", offset);
	if (endstr == -1){
		endstr = document.cookie.length;
	}
	return unescape(document.cookie.substring(offset,endstr));
}
function DeleteCookie (name,path,domain) {
  if (GetCookie(name)) {
    var temp = name + "=";
    temp += ((path) ? "; path=" + path : "");
    temp += ((domain) ? "; domain=" + domain : "");
    temp += "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    document.cookie = temp;
  }
}


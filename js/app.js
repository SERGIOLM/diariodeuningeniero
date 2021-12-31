
function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : "; expires=" + expires.toGMTString()) + ((path == null) ? "" : "; path=" + path) + ((domain == null) ? "" : "; domain=" + domain) + ((secure == null) ? "" : "; secure")
}

function getCookie(name) {
    var cname = name + "=";
    var dc = document.cookie;
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1)
                end = dc.length;
            return unescape(dc.substring(begin, end))
        }
    }
    return null
    }
function delCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" + ((path == null) ? "" : "; path=" + path) + ((domain == null) ? "" : "; domain=" + domain) + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
    }
}

    var comprobar = getCookie("avisocookies");
    if (comprobar != null) {
    } else {
        var expiration = new Date();
        expiration.setTime(expiration.getTime() + (60000 * 60 * 24 * 365));
        setCookie("avisocookies", "1", expiration);
        document.getElementById("barracookies").style.display = "block";
    }
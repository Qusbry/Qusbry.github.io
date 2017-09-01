$(document).ready(function () {
    $('li.parent').hover(function () {
        if ($(this).find('> ul').css('display') == "none") {
            $(this).find('> ul').slideDown(200);
            slide = true;
        }
    }, function () {
        if (slide == true) {
            $(this).find('> ul').slideUp();
            slide = false;
        }
    });
    $('nav strong').click(function () {
        $('nav ul').toggle();
    });
});

function getBrowserInfo() {
                    var t,v = undefined;
                    if (window.chrome) t = 'Chrome';
                    else if (window.opera) t = 'Opera';
                    else if (document.all) {
                        t = 'IE';
                        var nv = navigator.appVersion;
                        var s = nv.indexOf('MSIE')+5;
                        v = nv.substring(s,s+1);
                    }
                    else if (navigator.appName) t = 'Netscape';
                    return {type:t,version:v};
                }
                function bookmark(a){
                    var url = window.document.location;
                    var title = window.document.title;
                    var b = getBrowserInfo();
                    alert(b.type)
                    if (b.type == 'IE' && 8 >= b.version && b.version >= 4 && window.external) window.external.AddFavorite(url,title);
                    else if (b.type == 'IE') alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
                    else if (b.type == 'Opera') {
                        a.href = url;
                        a.rel = "sidebar";
                        a.title = url+','+title;
                        return true;
                    }
                    else if (b.type == "Netscape") window.sidebar.addPanel(title,url,"");
                    else alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
                    return false;
                }   
                
            function MobileDetect() { 
                   var UA = navigator.userAgent.toLowerCase();
                   return (/android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i
                      .test(UA)) ? true : false ;
                }
                
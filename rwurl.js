var r1 = /(ip-)([\d-]+)[^:]*/;
var r2 = /(\/\/)(\d{1,3})\-(\d{1,3})\-(\d{1,3})\-(\d{1,3})/;

var a = [...document.querySelectorAll('a')].filter(i => i.textContent.includes('ApplicationMaster'));
if (a.length) {
    var url = a[0].href.replace(r1, '$2');
    url = url.replace(r2, '$1$2.$3.$4.$5');
    window.location.href = url;
}

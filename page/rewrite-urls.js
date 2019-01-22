// r1 is defined in omni.js and loaded in the manifest
var r2 = /(\/\/)(\d{1,3})\-(\d{1,3})\-(\d{1,3})\-(\d{1,3})/;

[...document.querySelectorAll('a')].filter(i => r1.test(i.href)).forEach(i => {
    i.setAttribute(DATA_URL_ATTR, i.href);

    var url = i.href.replace(r1, '$2');
    url = url.replace(r2, '$1$2.$3.$4.$5');
    i.href = url;
});

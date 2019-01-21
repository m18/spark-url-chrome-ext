var r2 = /(\/\/)(\d{1,3})\-(\d{1,3})\-(\d{1,3})\-(\d{1,3})/;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type != CLICK_TYPE) {
        return;
    }
    var url = message.url.replace(r1, '$2');
    url = url.replace(r2, '$1$2.$3.$4.$5');
    window.location.href = url;
});

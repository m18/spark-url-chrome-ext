chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#f5f5f5'}, function() {
    // console.log("The color is pink.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlMatches: '^http.*'},
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

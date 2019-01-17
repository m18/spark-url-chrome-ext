let navButton = document.getElementById('navButton');

navButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'rwurl.js'});
      window.close();
    });
  };
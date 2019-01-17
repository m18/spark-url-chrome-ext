let navButton = document.getElementById('navButton');

chrome.storage.sync.get('color', function(data) {
  navButton.style.backgroundColor = data.color;
  navButton.setAttribute('value', data.color);
});

navButton.onclick = function(element) {
  // let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'rwurl.js'});
    window.close();
  });
};
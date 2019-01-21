// chrome.storage.sync.get('color', function(data) {
//     navButton.style.backgroundColor = data.color;
//     navButton.setAttribute('value', data.color);
// });

// get data of all anchors-of-interest and build the pop-up's UI
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        { file: './page/get-link-data.js' },
        function(res) {
            let ul = document.getElementById('links');
            if (!(res && res[0] && res[0].length)) {
                ul.remove();
                return;
            }
            document.getElementById('nolinks').remove();
            res[0].forEach(i => {
                let a = document.createElement('a');
                let atext = document.createTextNode(i.text);
                a.setAttribute('href', i.url);
                a.appendChild(atext);
                a.onclick = function(e) {
                    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                        chrome.tabs.sendMessage(
                            tabs[0].id,
                            { type: CLICK_TYPE, url: a.href }
                        );
                    });
                    window.close();
                };
                let li = document.createElement('li');
                li.appendChild(a);
                ul.appendChild(li);
            });

            // chrome.tabs.executeScript(
            //   tabs[0].id,
            //   {code: 'console.log("res is", "' + res[0] + '", "---");'}
            // );

        }
    );
});

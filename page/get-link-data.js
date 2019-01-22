// r1 is defined in omni.js and loaded in the manifest
[...document.querySelectorAll('a')]
    .filter(i => r1.test(i.getAttribute(DATA_URL_ATTR)))
    .map(i => ({text: i.textContent, url: i.getAttribute(DATA_URL_ATTR)}));

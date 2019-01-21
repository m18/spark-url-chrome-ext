// r1 is defined in omni.js and loaded in the manifest
[...document.querySelectorAll('a')].filter(i => r1.test(i.href)).map(i => ({text: i.textContent, url: i.href}));

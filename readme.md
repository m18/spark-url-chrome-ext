## Spark WebUI ApplicationMaster URL Helper Chrome Extension

Extracts the URL from the Application page's ApplicationMaster hyperlink in the `*ip-ddd-ddd-ddd-ddd.hostname:port*` format, and redirects the browser to a URL in the `*ddd.ddd.ddd.ddd:port*` format.

### To install:

1. Clone the repo
2. Open `chrome://extensions/`
3. Toggle `Developer mode` on
4. Click `Load unpacked` and choose the directory you cloned the repo into

After installing, open an Application page in Spark WebUI, and instead of clicking the `ApplicationMaster` link, click the extension's icon and then the `Application Master` button in the pop up.
chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        return {
            cancel: true
        }
    },
    // Urls you want to block
    {
        urls: [
            "*://*.zedo.com/*",
            "*://*.example.com/*",
            "*://*.example2.com/*",
            "*://ads.google.com/*"
        ]
    },
    ["blocking"]
)

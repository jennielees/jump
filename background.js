chrome.omnibox.onInputEntered.addListener(function(text) {
   lookUpBookmark(text);
   
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type) {
        case "saveBookmark":
        	saveBookmark(message.text, message.url);
            break;
        case "deleteBookmark":
            deleteBookmark(message.text);
            break;
    }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);
  }
});
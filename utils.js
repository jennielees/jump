function lookUpBookmark(text) {
	var saveObj = {};
	saveObj[text] = '';
	console.log(text);
    chrome.storage.sync.get(saveObj, function(urls) {
    	var rurl = chrome.extension.getURL("list.html");

	    if (urls[text] != '') {
	    	rurl = urls[text];
	    }


	   console.log(rurl);
	   chrome.tabs.query({active: true, currentWindow: true }, function(tab) {
	        chrome.tabs.update(tab[0].id, {url: rurl });
	   });

    });
 };

function saveBookmark(text, url) {
	var saveObj = {};
	saveObj[text] = url;
	chrome.storage.sync.set(saveObj, function() {
		console.log('%s saves as %s', 
						url,
						text);
		return url;
	});
		
};

function deleteBookmark(text) {
	var deleteText = [ text ]
	chrome.storage.sync.remove(text, function() {
		console.log('%s removed', text);
	});
}
$( document ).ready(function() {

    refreshUrls();

	$("#button").click(function() {
	    console.log("clicked");
	    chrome.tabs.query({active: true, currentWindow: true }, function(tab) {
        	var url = $("#urlbox").val();
        	var text = $("#textbox").val();
	   
			var saveObj = {};
			saveObj[text] = url;

			chrome.storage.sync.set(saveObj, function() {
				console.log('%s saves as %s', 
								url,
								text);
				$("#textbox").val('');
				$("#urlbox").val('');

			    $("#link-list").empty();
			    refreshUrls();

			});

	    });

	    

    });


	$("#textbox").keyup(function(event){
		    if(event.keyCode == 13){
		        $("#button").click();
		    }
		});

	$("#urlbox").keyup(function(event){
	    if(event.keyCode == 13){
	        $("#button").click();
	    }
	});

});

$(document).on('click', ".delete", function() {
	var key = this.id;
	console.log("delete " + key);

	chrome.storage.sync.remove(key, function() {
			console.log('%s removed', key);
	
		    $("#link-list").empty();
		    refreshUrls();

	});

});

function refreshUrls() {
	 chrome.storage.sync.get(function(urls) {
    	var i = 0;
	    for (key in urls) {
		    var row = '<div class="row list-item';
		    if (i % 2 == 0) {
		    	row += ' list-item-odd';
		    } else {
		    	row += ' list-item-even';
		    }
		    row    += '">';
		    row    += '<div class="col-md-3 key">' + key + '</div>';
		    row    += '<div class="col-md-6 url"><a href="' + urls[key] + '">' + urls[key] + '</a></div>';
		    row    += '<div class="col-md-3"><a href="#" class="delete" id="' + key + '">delete</a></div>';
		    row    += '</div>';

		    i += 1;
		    $("#link-list").append(row);
	    }

    });
}
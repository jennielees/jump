// popup.js
$(document).ready(function() {

	$("#button").click(function() {
		var textstr = $("#textbox").val(); 

		if (!textstr) {
			window.close();
		}		
		else {
		    chrome.tabs.query({active: true, currentWindow: true }, function(tab) {
		    	    console.log(tab[0].url);
					    chrome.runtime.sendMessage({
		            	type: "saveBookmark",
		            	url: tab[0].url,
		            	text: textstr
	      			  });
					$('#textbox').val('');
					var msg = textstr + ' saved';
					$('#flash').html(msg);
				    $('#flash').toggleClass('flash-visible');
				    $('#flash').fadeIn('fast', function() {
						window.close();
				    });
		 	    });
		}
    });

	$("#textbox").keyup(function(event){
	    if(event.keyCode == 13){
	        $("#button").click();
	    }
	});

	$("#list").click(function() {
		chrome.tabs.create({'url': chrome.extension.getURL('list.html')}, function(tab) {
		    // Tab opened.
		  });
	});


});
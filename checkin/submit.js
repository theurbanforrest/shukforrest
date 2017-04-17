//submit.js

/*
Requires these:
<div id="uploader"></div>
<button id="fc-try-uploader">Upload to Server</button>

var currentPlace;

*/

//On Click to Submit

		/*global var*/
		var didItWork;

		$('#fc-try-uploader').click( function(){
			//Run the uploader, onAllComplete within this function handles the storing of data/
			//Sets var didItWork to true if successful
            uploader.uploadStoredFiles();

            

		});

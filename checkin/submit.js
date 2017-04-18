//submit.js

/*

Requires these:
<div id="uploader"></div>
<button id="fc-try-uploader">Upload to Server</button>

var currentPlace;

<textarea class="form-control" id="fc-textarea" placeholder="What's up boo?"></textarea>

<div class="form-group">
	<textarea class="form-control" id="fc-textarea" placeholder="What's up boo?"></textarea>
</div>
<button class="btn btn-primary" id="fc-try-uploader">Post It!</button>
<canvas id="fc-canvas"></canvas>

*/

//On Click to Submit


		$('#fc-try-uploader').click( function(){
			//Require fc-text-area has a value
			if(!document.getElementById('fc-textarea').value) {
				alert("Blurb required. Tell us what's going on here B!");
				return false;
			}

			//Run the uploader, onAllComplete within this function handles the storing of data/
			//Sets var didItWork to true if successful
            uploader.uploadStoredFiles();

		});

//If user clicks out of #portfolioModal1, reload the page and start fresh

	$('#portfolioModal1').on('hidden.bs.modal', function () {
		window.location.reload();
	});
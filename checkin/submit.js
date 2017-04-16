//submit.js

/*
Requires these:
<div id="uploader"></div>
<button id="fc-try-uploader">Upload to Server</button>

var currentPlace;

*/

//On Click to Submit
        qq(document.getElementById("fc-try-uploader")).attach('click', function() {
                
                console.log('submit - upload the pic');
                uploader.uploadStoredFiles();

                //See FineUploader onComplete callback for the rest of the submission

        });


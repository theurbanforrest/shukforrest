//submit.js

/*
Requires these:
<div id="uploader"></div>
<button id="fc-try-uploader">Upload to Server</button>

var currentPlace;

*/

//On Click to Submit
        qq(document.getElementById("fc-try-uploader")).attach('click', function() {
                
                console.log('set up the vars');
                        var timestamp;
                        var pic_UUID;
                        var place_google_id;
                        var place_google_name;
                        var blurb;

                console.log('get timestamp');
                        timestamp = Date();
                                console.log('timestamp: ' + timestamp);

                console.log('get pic_UUID');

                console.log('get place_google_id');
                        place_google_id = currentPlace.place_id;

                console.log('get place_google_name');
                        place_google_name = currentPlace.name;

                console.log('get blurb');
                        blurb = document.getElementById('fc-textarea').value;

                console.log('submit - upload the pic');
                        uploader.uploadStoredFiles();

                console.log('submit - send the data');
        

                console.log('Data was uploaded successfully');
                return true;
        });


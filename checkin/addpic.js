//addpic.js

/*
Requires these:
<div id="uploader"></div>       //the fineuploader object, called uploader from console
<button id="fc-try-uploader">Upload to Server</button>

var didItWork;          //Set as true or false
*/

var uploader = new qq.FineUploader({
        element: document.getElementById("uploader"),
        debug: true,
        autoUpload: false,

        request: {
                endpoint: "vendor/fineuploader/php-traditional-server/endpoint.php"
        },
        deleteFile: {
                enabled: false,
                endpoint: "vendor/fineuploader/php-traditional-server/endpoint.php"
        },
        chunking: {
                enabled: true,
                concurrent: {
                        enabled: true
                }
        },
        success: {
                endpoint: "vendor/fineuploader/php-traditional-server/endpoint.php?done"
        },
        resume: {
                enabled: true
        },
        retry: {
                enableAuto: false,
                showButton: true
        },
        callbacks: {
                onAllComplete: function() {
                        console.log('uploader - onComplete called back');
                        console.log('set up the vars');
                        var timestamp;
                        var pic_object;
                        var pic_UUID;
                        var pic_name;
                        var place_google_id;
                        var place_google_name;
                        var blurb;

                        console.log('get timestamp');
                                timestamp = Date();
                                        console.log('timestamp: ' + timestamp);

                        console.log('get pic_UUID'); //LEFT OFF HERE - Need to figure out how to grab pic_UUID
                                pic_object = uploader.getUploads();
                                pic_UUID = pic_object[0].uuid;
                                        console.log('pic_UUID is ' + pic_UUID);
                                pic_name = pic_object[0].name;
                                        console.log('pic_name is ' + pic_name);

                        console.log('get place_google_id');
                                place_google_id = currentPlace.place_id;

                        console.log('get place_google_name');
                                place_google_name = currentPlace.name;

                        console.log('get blurb');
                                blurb = document.getElementById('fc-textarea').value;

                        console.log('submit - send the data');
                                $.ajax({
                                        type: 'POST',
                                        url: 'checkin/submit.php',
                                        data: {
                                                'timestamp' : timestamp,
                                                'pic_UUID' : pic_UUID,
                                                'pic_name' : pic_name,
                                                'place_google_id' : place_google_id,
                                                'place_google_name' : place_google_name,
                                                'blurb' : blurb
                                        }
                                }).done( function(){
                                        console.log('ajax done');
                                });

                        console.log('Data was uploaded successfully');

                                alert('Submission succeeded.');
                                window.location.reload();       //Reload the page and wipe everything

                        return true;
                }
        }
});


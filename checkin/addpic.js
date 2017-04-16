//addpic.js

/*
Requires these:
<div id="uploader"></div>
<button id="fc-try-uploader">Upload to Server</button>
*/

var uploader = new qq.FineUploader({
        element: document.getElementById("uploader"),
        debug: true,
        autoUpload: false,

        request: {
                endpoint: "vendor/fineuploader/php-traditional-server/endpoint.php"
        },
        deleteFile: {
                enabled: true,
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
        }
});


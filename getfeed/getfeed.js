/*
getfeed.js
Requires:

DESCRIBE fineuploader:

| timestamp         | varchar(50)  | YES  |     | NULL    |       |
| pic_UUID          | varchar(50)  | YES  |     | NULL    |       |
| pic_name          | varchar(50)  | YES  |     | NULL    |       |
| place_google_id   | varchar(50)  | YES  |     | NULL    |       |
| place_google_name | varchar(50)  | YES  |     | NULL    |       |
| blurb             | varchar(200) | YES  |     | NULL    |       |
| tags              | varchar(50)  | YES  |     | NULL    |       |
| pic_batchId       | varchar(50)

<div id="fc-feedtiles"></div>

<script id="fc-feedtiles-template" type="text/x-handlebars-template"></script>

*/
var feedResponse;
var picPathBase = 'vendor/fineuploader/php-traditional-server/files/';

$(document).ready(function(){

	//hit the MySQL database via php and get a JSON
	

    $.ajax({
		type: 'GET',
		url: 'getfeed/getfeed.php',
		data: {
		},
		success: function(data) {
			feedResponse = JSON.parse(data);
			console.log(feedResponse);

			/*
			for(i=0;i<feedResponse.length;i++){
				$('<tr>').append(
            		$('<td>').text(feedResponse[i].timestamp),
            		$('<td>').text(feedResponse[i].content),
            		$('<td>').text(feedResponse[i].blurb)
        		).appendTo('#fc-results-body');
			}
			*/

			var source = $('#fc-feedtiles-template').html();
			var template = Handlebars.compile(source);

			var templateData = {events: feedResponse};	//set feedRespose as the events parameter
			$('#fc-feedtiles').html(template(templateData));		//Deliver template back to the body
		}
	});


    //for each item, append a panel item to the HTML
    
});

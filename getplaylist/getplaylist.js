/*
getplaylist.js
Requires:

DESCRIBE wedding_playlist:

| artist  | varchar(30)  | YES  |     | NULL    |       |
| song    | varchar(50)  | YES  |     | NULL    |       |
| youtube | varchar(100) | YES  |     | NULL    |       |
| blurb   | varchar(100) | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+

<div id="fc-feedtiles"></div>

<script id="fc-feedtiles-template" type="text/x-handlebars-template"></script>

<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true"></div>

<button class="btn btn-primary fc-crud" id="edit-{{id}}"><i class="fa fa-fw fa-pencil"/></button>

*/
var feedResponse;
var picPathBase = 'vendor/fineuploader/php-traditional-server/files/';

$(document).ready(function(){

	//hit the MySQL database via php and get a JSON

    $.ajax({
		type: 'GET',
		url: 'getplaylist/getplaylist.php',
		data: {
		},
		success: function(data) {
			feedResponse = JSON.parse(data);
			console.log(feedResponse);

			//Add identifier to each
			for(i=0;i<feedResponse.length;i++){

				feedResponse[i].id = "id-" + i;
			}
			console.log(feedResponse);

			var source = $('#fc-feedtiles-template').html();
			var template = Handlebars.compile(source);

			var templateData = {events: feedResponse};				//set feedRespose as the events parameter
			$('#fc-feedtiles').html(template(templateData));		//Deliver template back to the body
		}
	});


    //for each item, append a panel item to the HTML
    
});

$('.fc-crud').click( function(){
	$('#portfolioModal1').modal('show');
});



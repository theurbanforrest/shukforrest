/*
Requires:
<script type="text/javascript"
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIWeXRGZQrrQbp8RFZQZ2W9pFNkkWhvRM&libraries=places">
</script>
*/


/*
var input = document.getElementById('fc-search-bar');
                var options = {
                    types: 'establishment',
                    bounds: '40.7484N,73.9857W'
                };
*/


	/*While user types into domInput, Google API returns autocomplete*/

	var currentPlace;
	var currentPlaceDetails;

	function init() {
		var input = document.getElementById('fc-search-bar');
		var options = {
			types: 'establishment',
			bounds: '40.748N,73.9857W',	//biases Empire State Building
			placeIdOnly: ''
		}
		autocomplete = new google.maps.places.Autocomplete(input,options);
		autocomplete.addListener('place_changed',printy);

	}

	function printy() {
		currentPlace = autocomplete.getPlace();
		console.log('place_changed was fired');
	}

	$('.btn').click( function(){
		/*Clear Results*/
		$('.fc-results').html('');

		/*Grab the new image*/
		var thepic = currentPlace.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 150 });
		thepic = '<img src=" '+thepic+ '"/>';
		console.log('got the picture' + thepic);

		$('.fc-results').prepend(thepic);


    });

	/*Preventing Google Autocomplete form submits*/

    function preventDisFaka(evt) {
  		evt.preventDefault();
  		someBug();
  		return false;
	}


//findplace.js

/*
Requires:
<script type="text/javascript"
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIWeXRGZQrrQbp8RFZQZ2W9pFNkkWhvRM&libraries=places">
</script>

<div class="fc-hidden" id="fc-addpic-panel">

<form>
        <input type="text" class="form-control" id="fc-search-bar" placeholder="Search for spots..">
</form>

<div class="fc-results"></div>

<button type="button" class="btn btn-primary fc-clear-this">
        Clear
</button>
*/


        /*While user types into domInput, Google API returns autocomplete*/

        //Global vars
                var currentPlace;
                var currentPlaceDetails;

                function init() {
                        var input = document.getElementById('fc-search-bar');
                        var options = {
                                types: 'establishment',
                                bounds: '40.748N, 73.9857W'     //biases Empire State Building
                        }
                        autocomplete = new google.maps.places.Autocomplete(input,options);
                        autocomplete.addListener('place_changed',updatePlace);
                }

                function updatePlace() {
                        
                        console.log('fire place_changed event');
                                currentPlace = autocomplete.getPlace();

                        console.log('.fc-results attempt to clear');
                                $('.fc-results').html('');

                        console.log('.fc-results change to currentPlace.name');
                               $('.fc-results').prepend(currentPlace.name);
                                $('.fc-results').prepend('<i class="fa fa-fw fa-map-marker"></i>');

                        /*get the pic
                                var thepic = currentPlace.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 150 });
                                thepic = '<img src=" '+thepic+ '"/>';
                        */
                        console.log('Attempt to change #fc-addpic-panel remove class .fc-hidden');
                                $('#fc-addpic-panel').removeClass('fc-hidden');
                        console.log('updatePlace() complete');

                }

        //Clear the text field
        $('.fc-clear-this').click( function(){
                console.log('attempt to clear fc-search-bar');
                        document.getElementById("fc-search-bar").value = "";
        
                console.log('attempt to change #fc-addpic-panel back to .fc-hidden');
                        $('#fc-addpic-panel').addClass('fc-hidden');

                console.log('attempt to clear #fc-textarea');
                        document.getElementById('fc-textarea').value = "";

console.log('fc-clear-this.click() complete');
                return true;
        });

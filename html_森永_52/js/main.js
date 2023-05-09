// jsを記述する際はここに記載していく
function initMap() {
    var latlng = new google.maps.LatLng( 34, 135 );
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: latlng
    });
    var marker = new google.maps.Marker({
      position: latlng,
      map: map
    });
  }
// {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=[AIzaSyBpA-fC_-xdk3nUc3iW0i0Nf3_t_ZMh4gk]&callback=initMap]"> */}
<<<<<<< HEAD
<<<<<<< HEAD
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
=======
=======
>>>>>>> master
function myMap() {
  var myCenter = new google.maps.LatLng(51.4464952,6.6398927000000185);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
<<<<<<< HEAD
}
>>>>>>> master
=======
}
>>>>>>> master

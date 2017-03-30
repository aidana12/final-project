function myMap() {
  var myCenter = new google.maps.LatLng(51.4464952,6.6398927000000185);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}

$(document).ready(function() { 
 $(".img-rounded").css('opacity', 0.7);
 $("#MK").hover(function(){
    $("#MK").fadeTo('fast', 3);
    },
    function(){
        $("#MK").fadeTo('fast', 0.7);
    });
  $("#LS").hover(function(){
    $("#LS").fadeTo('fast', 3);
    },
    function(){
        $("#LS").fadeTo('fast', 0.7);
    });

   $("#SK").hover(function(){
   	    $("#SK").fadeTo('fast', 3);
    },
    function(){
        $("#SK").fadeTo('fast', 0.7);
    });

    $("#TV").hover(function(){
   	    $("#TV").fadeTo('fast', 3);
    },
    function(){
        $("#TV").fadeTo('fast', 0.7);
    });

});

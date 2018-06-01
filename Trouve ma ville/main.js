let weather = "api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=d58b214415a07a0b03c33ff4a8eb49e1"
// $.ajax({
//     url: "api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=d58b214415a07a0b03c33ff4a8eb49e1",
//     data: {
//       zipcode: 97201
//     },
//     success: function( result ) {
//       $( "h1" ).after( "<strong>" + result.weather + "</strong> degrees" );
//     }
//   });

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=d58b214415a07a0b03c33ff4a8eb49e1&units=metric', function (data) {
    $('#meteo').after('latitude : '+data.coord.lat+'<br>');
    $('#meteo').after('longitude : '+data.coord.lon+'<br>');
    $('#meteo').after(' temperature : '+data.main.temp +'°C météo : '+data.weather[0].main+'<br>');

})

$.getJSON('https://www.mapquestapi.com/directions/v2/route?key=kJMW14H6BTygUvmq6pVOTSspm5KKfvFb&from=Saint-gaudens&to=Toulouse&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false', function (data) {
  $('#map').after('distance : '+data.route.legs[0].distance+' miles<br>');
  $('#map').after('Temps estimé : '+data.route.legs[0].formattedTime+'<br>');
});

	//    YOUR_API_KEY mapquest kJMW14H6BTygUvmq6pVOTSspm5KKfvFb

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

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=d58b214415a07a0b03c33ff4a8eb49e1', function (data) {
    $('#meteo').after('latitude : '+data.coord.lat+'<br>');
    $('#meteo').after('longitude : '+data.coord.lon+'<br>');
    $('#meteo').after('temps : '+data.weather[0].main+'<br>');

})


$.getJSON('http://api.timezonedb.com/v2/convert-time-zone?key=YOUR_API_KEY&format=json&from=America/Los_Angeles&to=Australia/Sydney&time=1464793200', function (data) {
    console.log(data);

})
'http://api.timezonedb.com/v2/convert-time-zone?key=YOUR_API_KEY&format=json&from=America/Los_Angeles&to=Australia/Sydney&time=1464793200'
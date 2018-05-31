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

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=d58b214415a07a0b03c33ff4a8eb49e1',function(data){
    console.log(data.main.temp_max);
    
})
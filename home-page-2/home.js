//how do i link this to html

navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    
    var apiKey = 'e998301ef612bdf80b092d061576a6ab';
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
    
    fetch(weatherUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var weatherData = data.weather[0].description;
        document.getElementById('city').innerHTML = weatherData;
      });
  });




  
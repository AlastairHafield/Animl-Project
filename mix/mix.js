//api key
var API_KEY = '32156415-1868cf2c3bc46f4a76056c659';
// Get a reference to the button
var button = document.getElementById("mix-button");
// Set the initial pageNum value
var pageNum = 1;
// Set the initial counter value
var counter = 0;

var getArticles = function(){
    //Url for api with query parameters
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&page=" +pageNum+ "&category="+encodeURIComponent('animals');
    fetch(URL)
        .then(function (response){
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    var dataStore = JSON.stringify(data);
                    localStorage.setItem('dataStore', dataStore);
                    displayData();
                });} else if (response.status === 400 || 402 || 404){
                    return;
}})};

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Increment the counter
  counter++;

  // Perform your API request with the current pageNum value
  getArticles();

  // Increment the pageNum value, but reset it to 1 if it reaches 26
  if (pageNum == 26) {
    pageNum = 1;
  } else {
    pageNum++;
  }
});

var displayData = function() {
  let dataText = localStorage.getItem('dataStore');
  let object = JSON.parse(dataText);

  for (let i = 0; i < 16; i++) {
    let imageUrl = object.hits[i].webformatURL;
    document.getElementById(`image${i + 1}`).src = imageUrl;
  }
  var hitsArray = object.hits;
  var numLargeImageURLs = 0;
  
  for (var i = 0; i < hitsArray.length; i++) {
    if (hitsArray[i].hasOwnProperty("largeImageURL")) {
      numLargeImageURLs++;
    }
  }
  
  console.log(numLargeImageURLs);
}

getArticles();
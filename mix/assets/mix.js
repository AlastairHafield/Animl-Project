//api key
var API_KEY = '32156415-1868cf2c3bc46f4a76056c659';
// Get a reference to the button
var button = document.getElementById("mix-button");
// Set the initial pageNum value
var pageNum = 1;
// Set the initial counter value
var counter = 0;
//video url
var videoURL = "https://pixabay.com/api/videos/?key=" + API_KEY + "&category=animals"

var getVideos = function(){
  //Url for api with query parameters
  fetch(videoURL)
      .then(function (response){
          if (response.ok) {
              console.log(response);
              response.json().then(function (data2) {
                  var dataStore2 = JSON.stringify(data2);
                  localStorage.setItem('dataStore2', dataStore2);
                  displayData2();
              });} else if (response.status === 400 || 402 || 404){
                  return;
}})};



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

  for (let i = 0; i < 8; i++) {
    let imageUrl = object.hits[i].webformatURL;
    document.getElementById(`image${i + 1}`).src = imageUrl;
    document.getElementById(`modal-image${i + 1}`).src = imageUrl;
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

var displayData2 = function() {
  let dataText = localStorage.getItem('dataStore2');
  let object = JSON.parse(dataText);

  for (let i = 0; i < 8; i++) {
    let videoUrl = object.hits[i].videos.tiny.url;
    console.log(videoUrl)
    document.getElementById(`video${i + 1}`).src = videoUrl;
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
getVideos();

function toggleModal(modalId) {
  document.getElementById(modalId).classList.toggle('opacity-0');
  document.getElementById(modalId).classList.toggle('pointer-events-none');
}

for (let i = 1; i <= 8; i++) {
  document.querySelector(`#image${i}`).addEventListener('click', function() {
    toggleModal(`modal${i}`);
  });
  document.querySelector(`#modal-close${i}`).addEventListener('click', function() {
    toggleModal(`modal${i}`);
  });
}
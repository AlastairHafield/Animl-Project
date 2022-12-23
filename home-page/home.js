//get news API key// 


//Explore button to generate random animal news
document.getElementById("generate-news-button").addEventListener("click", function() {
   //code to generate random news goes here
});


//Inside the event listener function, you will need to make an HTTP request to the news API using a library like axios or fetch. You will need to specify the API endpoint and pass in your API key as a query parameter. For example:
axios.get("https://newsapi.org/v2/everything?q=random&apiKey=YOUR_API_KEY")
  .then(function(response) {
    // code to handle the response goes here
  })
  .catch(function(error) {
    console.log(error);
  });

  //Once you have received the response from the API, you can extract a random news article from the response data. You can do this by generating a random number between 0 and the length of the articles array in the response data. For example:
  var articles = response.data.articles;
  var randomIndex = Math.floor(Math.random() * articles.length);
  var randomArticle = articles[randomIndex];

  //Finally, you can display the random news article on your webpage by updating the innerHTML of an element with the article's title and content. For example:
  document.getElementById("news-title").innerHTML = randomArticle.title;
  document.getElementById("news-content").innerHTML = randomArticle.content;



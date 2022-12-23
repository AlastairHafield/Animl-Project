//Reference HTML elements
var articleHeadCont = document.getElementById('article-main');
var articleH2 = document.getElementById('article-header');
var articles = document.getElementById('articles');
//Array for search terms
var animals = ['Tiger', 'Lion', 'Elephant', 'Leopard', 'Panther', 'Cheetah', 'Wolf', 'Jaguar', 'Hyena', 'Giraffe', 'Deer', 'Zebra', 'Gorilla', 'Monkey', 'Chimpanzee', 'Bear', 'Wild Boar', 'Hippopotamus', 'Kangaroo', 'Rhinoceros', 'Crocodile', 'Panda', 'Squirrel', 'Mongoose', 'Porcupine', 'Koala Bear', 'Wombat', 'Meerkat', 'Otter', 'Hedgehog', 'Possum', 'Chipmunk', 'Squirrel', 'Raccoon', 'Jackal', 'Hare', 'Mole', 'Rabbit', 'Alligator', 'Monitor Lizard', 'Oryx', 'Elk', 'Badger', 'Dinosaur', 'Pangolin', 'Mole', 'Okapi', 'Camel', 'Wild cat', 'Coyote', 'Bison', 'African Elephant', 'Aardvark', 'Antelope', 'Alpine Goat', 'Komodo Dragon', 'Bearded Dragon', 'Royal Bengal Tiger', 'Flying Squirrel', 'Emu', 'Eagle', 'Eel', 'Asiatic Lion', 'Armadillo', 'Beaver', 'Emperor Penguin', 'Baboon', 'Bat', 'Chameleon', 'Bull', 'Giant Panda', 'Chihuahua', 'Orangutan', 'Chinchillas', 'Hawk', 'Iguana', 'Ibis', 'Ibex', 'King Cobra', 'Jellyfish', 'Goose', 'Walrus', 'Seal', 'Skink', 'Markhor', 'Falcon', 'Bull Shark', 'Arctic Wolf', 'Owl', 'Bulbul', 'Bobcat', 'Guinea Pig', 'Yak', 'Reindeer', 'Moose', 'Puma', 'Okapi', 'Marten', 'Squirrel Monkey', 'Caracal'];
//Get a random value from animals array
var random = Math.floor(Math.random() * animals.length);

console.log(random, animals[random]);

var queryString = 'https://api.api-ninjas.com/v1/animals?name=' + animals[random] + '&apikey=hLtcweFiHRGP4xLTp88f9Q==dJhodjuboAbwsUS9';

    
  


var getArticles = function(){
    fetch(queryString)
        .then(function (response){
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    var dataStore = json.stringify(data);
                    localStorage.setItem('dataStore', dataStore);
                    //displayData();
                });} else if (response.status === 400 || 402 || 404){
                    return;
     }})};



getArticles();


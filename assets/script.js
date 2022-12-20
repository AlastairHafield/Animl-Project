var animals = [
  "Tiger",
  "Lion",
  "Elephant",
  "Leopard",
  "Panther",
  "Cheetah",
  "Wolf",
  "Jaguar",
  "Hyena",
  "Giraffe",
  "Deer",
  "Zebra",
  "Gorilla",
  "Monkey",
  "Chimpanzee",
  "Bear",
  "Wild Boar",
  "Hippopotamus",
  "Kangaroo",
  "Rhinoceros",
  "Crocodile",
  "Panda",
  "Squirrel",
  "Mongoose",
  "Porcupine",
  "Koala Bear",
  "Wombat",
  "Meerkat",
  "Otter",
  "Hedgehog",
  "Possum",
  "Chipmunk",
  "Dog",
  "Cat",
  "Spider",
  "Snake",
];

var random = Math.floor(Math.random() * animals.length);

apiKey =
  "https://pixabay.com/api/?q=" +
  random +
  " &key=32156415-1868cf2c3bc46f4a76056c659";

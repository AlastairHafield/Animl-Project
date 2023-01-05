
const animals = [    ['Aldabra Giant Tortoise', '-9.416667', '46.416667'],
  ['Ascension Island Frigatebird', '-7.9333296', '-14.3666652'],
  ['Atoll Fruit Dove', '-9.416667', '46.416667'],
  ['Aye-aye', '-18.7792678', '46.8344597'],
  ['Black-footed Cat', '-22.967062', '18.4929993'],
  ['Blue-throated Macaw', '-16.2837065', '-63.5493965'],
  ['Bonin Flying Fox', '26.9833294', '142.2166658'],
  ['Bumblebee Bat', '19.0734647', '96.6710399'],
  ['Christmas Island Frigatebird', '-10.4912311', '105.622981'],
  ['Christmas Island Red Crab', '-10.4912311', '105.622981'],
  ['Christmas Island Swallow', '-10.4912311', '105.622981'],
  ['Christmas Island Tiger', '-10.4912311', '105.622981'],
  ['Cocos Island Cuckoo', '5.517997928', '-87.069666388'],
  ['Cocos Island Finch', '5.517997928', '-87.069666388'],
  ['Cocos Island Iguana', '5.517997928', '-87.069666388'],
  ['Cuban Flamingo', '21.5513258', '-79.6017351'],
  ['Diegos Galápagos Tortoise', '-0.666664', '-90.5499978'],
  ['Espanola Island Racer', '-0.666664', '-90.5499978'],
  ['Española Mockingbird', '-0.666664', '-90.5499978'],
  ['Flinders Island Dunnart', '-40.0', '148.1166662']
]

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');

async function fetchData(name, lat, lon) {
  const queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=554388edb86f83b04c10657b0a21f79c`;
  try {
    const response = await fetch(queryString);
    if (response.ok) {
      const data = await response.json();
      const dataStorage = JSON.stringify(data);
      localStorage.setItem(name, dataStorage);
      displayData(name);
    } else if (response.status === 404) {
      clearInput();
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

function pickRandomAnimal(animals) {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

async function fetchRandomAnimalsData(animals, num) {
  for (let i = 0; i < num; i++) {
    const animal = pickRandomAnimal(animals);
    const name = animal[0];
    const lat = animal[1];
    const lon = animal[2];
  }};

  function displayData(name1, name2, name3, name4, name5, name6) {
    card1.querySelector('h5').textContent = name1;
    const data1 = JSON.parse(localStorage.getItem(name1));
    card1.querySelector('p').textContent = data1.weather[0].description;
    card1.querySelector('img').src = 'http://openweathermap.org/img/wn/' + data1.weather[0].icon + '@4x.png';
    card2.querySelector('h5').textContent = name2;
    const data2 = JSON.parse(localStorage.getItem(name2));
    card2.querySelector('p').textContent = data2.weather[0].description;
    card2.querySelector('img').src = 'http://openweathermap.org/img/wn/' + data2.weather[0].icon + '@4x.png';
    card3.querySelector('h5').textContent = name3;
    const data3 = JSON.parse(localStorage.getItem(name3));
    card3.querySelector('p').textContent = data3.weather[0].description;
    card3.querySelector('img').src = 'http://openweathermap.org/img/wn/' + data3.weather[0].icon + '@4x.png';
    card4.querySelector('h5').textContent = name4;
    const data4 = JSON.parse(localStorage.getItem(name4));
    card4.querySelector('p').textContent = data4.weather[0].description;
    card4.querySelector('img').src = 'http://openweathermap.org/img/wn/' + data4.weather[0].icon + '@4x.png';
    card5.querySelector('h5').textContent = name5;
    const data5 = JSON.parse(localStorage.getItem(name5));
    card5.querySelector('p').textContent = data5.weather[0].description;
    card5.querySelector('img').src = 'http://openweathermap.org/img/wn/' + data5.weather[0].icon + '@4x.png';
    card6.querySelector('h5').textContent = name6;
    const data6 = JSON.parse(localStorage.getItem(name6));
    card6.querySelector('p').textContent = data6.weather[0].description;
    card6.querySelector('img').src = 'http://openweathermap.org/img/wn/' + data6.weather[0].icon + '@4x.png';
  }

  async function fetchRandomAnimalsData(animals, num) {
    let name1, name2, name3, name4, name5, name6;
    for (let i = 0; i < num; i++) {
      const animal = pickRandomAnimal(animals);
      const name = animal[0];
      const lat = animal[1];
      const lon = animal[2];
      await fetchData(name, lat, lon);
      if (i === 0) {
        name1 = name;
      } else if (i === 1) {
        name2 = name;
      } else if (i === 2) {
        name3 = name;
      } else if (i === 3) {
        name4 = name;
      } else if (i === 4) {
        name5 = name;
      } else if (i === 5) {
        name6 = name;
      }
    }
    displayData(name1, name2, name3, name4, name5, name6);
  }

fetchRandomAnimalsData(animals, 6);

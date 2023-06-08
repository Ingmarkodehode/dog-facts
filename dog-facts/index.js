//img https://www.google.com/search?q={topic}&tbm=isch  ville legge til bilde som hetes ifra google. Men dette rekker eg ikke for nå iallfall
//info https://dogapi.dog/api/v2/breeds


const mainContainer = document.getElementById("dog-breeds");

function displayInfo(data) {
  const { name, life, description } = data; //deconstructing arrayet og henter ut name, life, description

  const race = data.attributes.name; //setter race til data.attributes.name
  const lifeSpan = data.attributes.life //setter lifeSpan til data.attributes.life
  const info = data.attributes.description //setter info til data.attributes.description

  const container = document.createElement("div"); 
  container.classList = "dog-main-info"; //lager en div container og setter classen til dog-main-info

  const title = document.createElement("h2");
  title.textContent = "Name: " + race; //lager en h2 og setter den til til vise Name: "rase"

  const infoContainer = document.createElement("div");
  infoContainer.classList = "dog-info";

  const lifeEL = document.createElement("h3");
  lifeEL.textContent = "Expected lifetime: " + lifeSpan.min + " - " + lifeSpan.max; + "years"

  const descriptionEL = document.createElement("p");
  descriptionEL.textContent = "About " + race + ": " + info;

  infoContainer.append(title, lifeEL, descriptionEL);

  mainContainer.innerHTML = "";
  mainContainer.append(container, infoContainer);
  console.log(data);
}

fetch("https://dogapi.dog/api/v2/breeds")
  .then((response) => response.json())
  .then((data) => { //dette e en ting eg driver og leser meg mer opp på. Så det på en scrimba oppgave så bestemte meg for og teste det og det funket.
    const breeds = data.data; //sets breeds to the data of data
    const randomDog = Math.floor(Math.random() * breeds.length); //setter randomDog til og bli en random index value
    displayInfo(breeds[randomDog]); // display random breed
  });


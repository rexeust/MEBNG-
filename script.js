const library1 = [
  "Car Seat",
  "Human",
  "American",
  "Modern",
  "Street Smart",
  "Shitty",
  "Greased Up",
  "Dumbass",
  "Panucci's",
  "The Front",
  "Narrow",
  "Yellow",
  "New",
  "Los",
  "Cap'n",
  "Itchy",
  "Blue",
  "Your Arms Are My",
  "Free",
  "Ankle",
  "Camping in",
  "La",
  "Bike",
  "Abandoned",
  "Title",
  "Dear",
  "Oh My God",
  "The",
  "Midwest",
  "Slick",
  "Random",
];

const library2 = [
  "Headrest",
  "Kitten",
  "Football",
  "Baseball",
  "Cyclist",
  "Kitty",
  "Weasel",
  "Shitstain",
  "Pizza",
  "Jeans",
  "Bottoms",
  "Campesinos!",
  "Jazz",
  "Foster",
  "Cocoon",
  "Throws",
  "Grease",
  "Alaska",
  "Dispute",
  "Path",
  "Oakwood",
  "Pools",
  'Fight',
  "Maryanne",
  "Elephant",
  "Pen Pals",
  "Marietta",
];

function getRandomPhrase(library) {
  return library[Math.floor(Math.random() * library.length)];
}

function generateName() {
  const phrase1 = getRandomPhrase(library1);
  const phrase2 = getRandomPhrase(library2);
  return `${phrase1} ${phrase2}`;
}

document.getElementById("GENERATE-button").addEventListener("click", function() {
  const generatedName = generateName();
  document.getElementById("generated-name").innerText = generatedName;
});
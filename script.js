// Load the JSON libraries
const library1 = [
  "Phrase 1",
  "Phrase 2",
  "Phrase 3",
  // Add more phrases here...
];

const library2 = [
  "Phrase A",
  "Phrase B",
  "Phrase C",
  // Add more phrases here...
];

// Function to generate a random phrase from a library
function getRandomPhrase(library) {
  return library[Math.floor(Math.random() * library.length)];
}

// Function to generate a full name
function generateName() {
  const phrase1 = getRandomPhrase(library1);
  const phrase2 = getRandomPhrase(library2);
  return `${phrase1} ${phrase2}`;
}

// Event listener for the GENERATE button
document.getElementById("GENERATE-button").addEventListener("click", function() {
  const generatedName = generateName();
  document.getElementById("generated-name").innerText = generatedName;
});
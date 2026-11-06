const thoughts = [
  "What if fish have no idea what water is?",
  "I wonder if my cat has a secret life.",
  "The internet was more fun when everything had sparkles.",
  "I should probably be doing something productive.",
  "What if dreams are just alternate universes?",
  "I wish I could live inside my favourite anime.",
  "Why do snacks taste better at midnight?",
  "Somewhere, someone is having the best day of their life.",
  "I need more cute things. This is a serious problem.",
  "What if aliens are also struggling with homework?"
];

const thoughtDisplay = document.getElementById("random-thought");
const thoughtButton = document.getElementById("thought-button");

thoughtButton.addEventListener("click", () => {
  const currentThought = thoughtDisplay.textContent;

  let newThought;

  do {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    newThought = thoughts[randomIndex];
  } while (newThought === currentThought);

  thoughtDisplay.textContent = newThought;
});
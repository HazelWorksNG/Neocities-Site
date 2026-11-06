
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});


// RANDOM THOUGHT GENERATOR

const thoughts = [
  "The internet is a strange place. I think I like it here.",
  "I wonder how many versions of myself exist in other people's memories.",
  "Somewhere, someone is having the best day of their life.",
  "I collect unfinished ideas like they're precious little treasures.",
  "Perhaps the little things were the big things all along.",
  "What if I just disappeared into a bookstore for three days?",
  "There is something comforting about making things nobody asked for.",
  "The world is enormous and I am very, very curious.",
  "I hope future me remembers how much I enjoyed this moment."
];

const thoughtDisplay = document.getElementById("random-thought");
const thoughtButton = document.getElementById("thought-button");

thoughtButton.addEventListener("click", () => {
  const currentThought = thoughtDisplay.textContent;

  let newThought;

  do {
    newThought = thoughts[
      Math.floor(Math.random() * thoughts.length)
    ];
  } while (newThought === currentThought);

  thoughtDisplay.textContent = newThought;
});

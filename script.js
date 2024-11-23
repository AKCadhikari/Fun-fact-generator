const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
    "A day on Venus is longer than its year. It takes Venus 243 Earth days to rotate on its axis but only 225 Earth days to orbit the Sun.",
    "The first oranges weren't orange! The original oranges from Southeast Asia were actually green.",
    "A cloud can weigh more than a million pounds.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren't!",
    "The shortest war in history lasted 38 minutes between Britain and Zanzibar in 1896.",
    "Cows have best friends and get stressed when separated.",
    "The first computer mouse was made of wood.",
    "A group of flamingos is called a 'flamboyance'."
];

let currentFact = "";

function getNewFact() {
    const factElement = document.getElementById('fact');
    let newFact;
    do {
        newFact = facts[Math.floor(Math.random() * facts.length)];
    } while (newFact === currentFact);
    
    currentFact = newFact;
    factElement.textContent = currentFact;
}

function shareFact(platform) {
    const fact = currentFact || "Check out this awesome Fun Facts Generator!";
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(fact);

    if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`);
    } else if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
    }
}

// Load initial fact
getNewFact();

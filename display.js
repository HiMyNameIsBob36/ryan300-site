console.log('Loading home page')

const data = {
  "stats": {
    "uploads": "0",
    "creators": "0",
    "favorites": "0",
    "members": "1"
  },
  "home": {
    "featured": [
      {"name":"Discord Template","id":"01"},
      {"name":"Server Emojis","id":"02"},
      {"name":"Staff Training","id":"03"}
    ],
    "trending": [
      {"name":"Roles","id":"04"},
      {"name":"Roles","id":"05"},
      {"name":"Roles","id":"06"}
    ]
  }
}

// Helper function to update a "Card" (Title, Link, Image)
function updateCard(elementId, item) {
    const container = document.getElementById(elementId);
    if (!container) return;

    container.querySelector("#title").textContent = item.name;

    container.querySelector("#link").href = `https://erlccentral.netllfiy.app/${item.id}`;

    container.querySelector("#thumb").src = `https://erlccentral.netlify.app/image/${item.id}`;
}

// --- Execution ---

document.getElementById("uploads").textContent = data.stats.uploads;
document.getElementById("creators").textContent = data.stats.creators;
document.getElementById("favorites").textContent = data.stats.favorites;
document.getElementById("members").innerText = data.stats.members;

// Featured (Accessing the Array)
const featured = data.home.featured; 
updateCard("featured01", featured[0]); // First item (id: 01)
updateCard("featured02", featured[1]); // Second item (id: 02)

// Trending
const trending = data.home.trending;
updateCard("trending01", trending[0]); // First item (id: 04)

const destinations = [
  "Paris, France",
  "Kyoto, Japan",
  "Cape Town, South Africa",
  "Banff, Canada",
  "Rio de Janeiro, Brazil",
  "Queenstown, New Zealand",
  "Santorini, Greece",
  "Istanbul, Turkey",
  "New York City, USA",
  "Reykjavik, Iceland"
];

function pickDestination() {
  const randomIndex = Math.floor(Math.random() * destinations.length);
  const chosen = destinations[randomIndex];
  document.getElementById("result").textContent = `You should go to: ${chosen}!`;
}
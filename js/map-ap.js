document.addEventListener("DOMContentLoaded", function () {
  // Controleer of het kaart-element bestaat
  const mapContainer = document.getElementById("map-ap");
  if (!mapContainer) return;

  // Initialiseer de kaart op AP-Hogeschool
  const map = L.map("map-ap").setView([51.23009, 4.41616], 16);

  // Voeg OpenStreetMap-tegels toe
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Teken een rechthoek rond het gebouw
  const bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
  L.rectangle(bounds, { color: "#0a630aff", weight: 1 }).addTo(map);

  // Voeg een marker toe met popup
  const apMarker = L.marker([51.23009, 4.41616]).addTo(map);
  apMarker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();
});
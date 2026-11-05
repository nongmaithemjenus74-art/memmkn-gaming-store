document.getElementById("year").textContent = new Date().getFullYear();
const gameSelect = document.getElementById("game");
document.querySelectorAll(".choose").forEach(button => {
  button.addEventListener("click", () => {
    gameSelect.value = button.dataset.game;
    document.getElementById("order").scrollIntoView({behavior:"smooth"});
  });
});
document.getElementById("orderForm").addEventListener("submit", event => {
  event.preventDefault();
  const game = gameSelect.value;
  const pack = document.getElementById("package").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const preview = document.getElementById("preview");
  preview.hidden = false;
  preview.textContent = `DEMO PREVIEW — Game: ${game}. Request: ${pack}. Contact: ${contact || "Not provided"}. This has NOT been sent or saved. No order or payment has been created.`;
});

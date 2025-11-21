const quotes = [
  "Kalau kamu merasa sendirian, coba matikan lampu dan tonton film horor. Dijamin gak sendirian lagi 😆",
  "Kalau capek, istirahat bentar — bukan menyerah 😌",
  "Hari ini sulit, tapi kamu lebih kuat dari yang kamu kira 💪",
  "Senyum dulu, biar hari ini gak terasa berat 😊",
  "Gagal itu wajar, yang penting jangan berhenti nyoba 🔥"
];

const btn = document.getElementById("btnGenerate");
const quote = document.getElementById("quote");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
});

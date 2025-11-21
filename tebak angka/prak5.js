let secret = Math.floor(Math.random() * 20) + 1;
let tries = 5;
let score = 0;

const input = document.getElementById("inputNumber");
const message = document.getElementById("message");
const btnGuess = document.getElementById("btnGuess");
const btnReset = document.getElementById("btnReset");
const triesSpan = document.getElementById("tries");
const scoreSpan = document.getElementById("score");

btnGuess.addEventListener("click", () => {
  const val = Number(input.value);
  if (!val || val < 1 || val > 20) {
    message.textContent = "Masukkan angka 1 - 20!";
    return;
  }

  if (val === secret) {
    message.textContent = "🎉 Benar! Kamu dapat poin!";
    score++;
    tries = 5;
    secret = Math.floor(Math.random() * 20) + 1;
  } else {
    tries--;
    message.textContent = val > secret ? "Terlalu besar." : "Terlalu kecil.";
  }

  if (tries <= 0) {
    message.textContent = `😢 Kesempatan habis! Angka: ${secret}`;
    tries = 0;
  }

  triesSpan.textContent = tries;
  scoreSpan.textContent = score;
});

btnReset.addEventListener("click", () => {
  secret = Math.floor(Math.random() * 20) + 1;
  tries = 5;
  message.textContent = "Permainan direset. Coba tebak lagi!";
  input.value = "";
  triesSpan.textContent = tries;
});

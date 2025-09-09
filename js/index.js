// index.js

// ====== ANIMASI TITLE ======
const title = document.querySelector('.title');
const text = 'I Have Something'.split('');

for (let i = 0; i < text.length; i++) {
  if (text[i] !== ' ') {
    title.innerHTML += `<span>${text[i]}</span>`;
  } else {
    title.innerHTML += `<span style="margin-right:20px;"></span>`;
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((el) => {
  const randomDelay = Math.random() * 3; // delay acak 0–3 detik
  el.style.animationDelay = `${randomDelay}s`;
});

// ====== INTRO TO CONTENT ======
const openBtn = document.getElementById("openBtn");
if (openBtn) {
  openBtn.addEventListener("click", () => {
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");

    if (intro) intro.style.display = "none";   // sembunyikan intro
    if (content) content.style.display = "block"; // tampilkan konten
  });
}

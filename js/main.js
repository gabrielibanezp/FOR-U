
// main.js

window.onload = () => {
  const c = setTimeout(() => {
    // hilangin class not-loaded -> animasi bunga jalan
    document.body.classList.remove("not-loaded");

    // teks yang mau ditulis
    const titles = "I LOVE U TO THE MOON AND BACK".split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    // fungsi nulis huruf 1 per 1
    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // jeda 300ms per huruf
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000); // delay sebelum mulai animasi
};

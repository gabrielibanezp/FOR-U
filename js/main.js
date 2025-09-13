
window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "  For you, My last flower. Please keep it beautifully".split('');
    const titleElement = document.getElementById('title');

    // atur ukuran font lewat JS juga, opsional
    titleElement.style.fontSize = '2.0rem'; // <<< kecilin font
    titleElement.style.letterSpacing = '4px'; // <<< jarak antar huruf

    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

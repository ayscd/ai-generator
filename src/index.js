function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
      strings: `Batatinha quando nasce`,
      autoStart: true,
      delay: 45,
      cursor: "",
      pauseFor: 1000,
    });
}


let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
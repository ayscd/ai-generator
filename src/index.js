function displayPoem(poem) {
    new Typewriter('#poem', {
    strings: poem.data.answer,
    autoStart: true,
    delay: 45,
    cursor: "",
    pauseFor: 1000,
  });
}

function generatePoem(event) {
    event.preventDefault();

    let poemInput = document.querySelector("#poem-input");
    let apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
    let prompt = `User instructions: Generate a poem in Portuguese (PT-BR) about the ${poemInput.value}`;
    let context = "You are a romantic poem expert, and like to write short poems. Your mission is to generate 4 line poems, and separate each line with <br />. Make sure to follow the user instructions. Do not include a title to the poem. At the end, sign the poem with 'SheCodes AI' inside a <strong> element";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let poem = document.querySelector("#poem");
    poem.classList.remove("hidden");
    poem.innerHTML = `<div class="generating-poem"> ⏳ Generating a poem about ${poemInput.value}...</div>`;
    
    axios.get(apiUrl).then(displayPoem);
}


let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
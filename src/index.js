function displayPoem(poem) {
  let poemWrapper = document.querySelector("#poem");
  poemWrapper.classList.add("poem");

  new Typewriter('#poem', {
    strings: poem.data.answer,
    autoStart: true,
    delay: 45,
    pauseFor: 1000,
  });
}

function generatePoem(event) {
    event.preventDefault();

    let poemInput = document.querySelector("#poem-input");
    let apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
    let prompt = `User instructions: Generate a poem in Portuguese (PT-BR) about the ${poemInput.value}. Make sure the poem is regular and has rithm. Do not include a title to the poem. At the end, sign the poem with '- AI Poem Generator' inside a <strong> element.`;
    let context = "You are a brazillian poet and writer, and you are really ispired by Romanticism. You follow the user instructions when writing your poems. You like to write poems with 8 verses and wrap each verse with a <div></div>. You are polite.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let poem = document.querySelector("#poem");
    poem.classList.remove("hidden");
    poem.innerHTML = `<div class="generating-poem"> ⏳ Generating a poem about ${poemInput.value}...</div>`;
    
    axios.get(apiUrl).then(displayPoem);
}


let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
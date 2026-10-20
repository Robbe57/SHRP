
async function search() {}
    let pokemon = document.querySelector("#query").value;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data = await response.json();
    console.log(data);
    let img_element = <img src="${data.sprites.front_default}">  <img src="${data.sprites.back_default}">;
        document.querySelector("#answer").innerHTML = img_element;
        let shiny_img_element = <img src="${data.sprites.front_shiny}">  <img src="${data.sprites.back_shiny}">;
            document.querySelector("#shiny_answer").innerHTML = shiny_img_element;


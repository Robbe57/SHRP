document.querySelector("#opendex").addEventListener('click',function(){
    document.querySelector("#dex_closed").style.display ='none';
    document.querySelector("#dex_open").style.display='block';    });
document.querySelector("#closedex").addEventListener('click',function(){
    document.querySelector("#dex_closed").style.display='block';
    document.querySelector("#dex_open").style.display='none';    });
async function search() {
    let pokemon = document.querySelector("#query").value;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data = await response.json();
    console.log(data);
    let img_element = `<img src="${data.sprites.front_default}">`;
    let pokemon_id=(data.id);
    document.querySelector("#answer").innerHTML = img_element;
    document.querySelector("#shiny").addEventListener('click',function(){
        document.querySelector("#shiny_answer").style.display='flex';
        document.querySelector("#answer").style.display='none';    });
    document.querySelector("#normal").addEventListener('click',function(){
        document.querySelector("#shiny_answer").style.display='none';
        document.querySelector("#answer").style.display='flex';    });
    let shiny_img_element = `<img src="${data.sprites.front_shiny}">`;
    document.querySelector("#shiny_answer").innerHTML = shiny_img_element;
       }
document.querySelector("#searchbutton").addEventListener('click', search);





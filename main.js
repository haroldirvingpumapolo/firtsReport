
const showPokemon=document.getElementById("showPokemon")

function pokemonwant(){
  const pokemon = document.getElementById("pokeFetchId").value
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((val) => val.json())
    .then((val) =>showPokemon.innerHTML =`<div>
    <img src="${val.sprites.front_default}">
    <div style="align-items: center;">
    <div> <span style="color: blue">Nombre  </span>= ${capitalizarPrimeraLetra(val.name)}</div>
    <div> <span style="color: blue">Experiencia Base  </span>= ${val.base_experience}</div>
    <div> <span style="color: blue">Altura </<span>= ${val.height}</div>
    <div> <span style="color: blue">Daño</span>= ${val.stats[5].base_stat}</div>
    <div> <span style="color: blue">Tipo</span>= ${capitalizarPrimeraLetra(val.types[0].type.name)}</div>
    </div>`).catch( v=> showPokemon.innerHTML =`<div style=" color:black ">Ocurrio un error con la busqueda</div>`)
}
function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then((val) => val.json())
    .then((val) => console.log(val))
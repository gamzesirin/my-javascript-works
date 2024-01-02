const searchInput=document.querySelector('#poke-input');
const searchBtn=document.querySelector('.btn-search');
const pokeContainer=document.querySelector('.poke-container');
const pokeCount=151;
const colors={
    fire:'#FDDFDF',
    water: '#B6D4EA',
    grass: '#DEFDE0',
    electricity: '#F8D030',
    ice: '#e0f5ff',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#DCDCAA',
    flying: '#A98FF3',
    psychic: '#F95587'
};
const initPokemon=async()=>{
    for(let i=100;i<=pokeCount;i++){
        await getPokemon(i);
    }
};
const getPokemon=async(id)=>{
    let url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    let res=await fetch(url);
    let data=await res.json();
    createPokemonoBox(data);
};
const createPokemonoBox=(pokemon)=>{
    const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    const id=pokemon.id.toString().padStart(3,'0');
    const weight=pokemon.weight;
    const type=pokemon.types[0].type.name;
    const color=colors[type];

    const pokemonElement=document.createElement('div');
    pokemonElement.classList.add('poke-box');
    pokemonElement.style.backgroundColor=`${color}`;
    pokemonElement.innerHTML=`
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name} image"/>    <p class="poke-id">#${id}</p>
            <p class="poke-weight">${weight} kg</p>
            <p class="poke-type">Type:${type}</p>
    `;
    pokeContainer.appendChild(pokemonElement)
};




initPokemon();
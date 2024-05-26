import './pokemon.css'
function PokemonGenerator(){
    const randomNum = Math.floor((Math.random() * 151) +1)
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`
    return(
        <>
            <h1>Pokemon #{randomNum}</h1>
            <img className="poke" src={url}/>
        </>
    );
}

export default PokemonGenerator;
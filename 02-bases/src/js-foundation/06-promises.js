const { httpClientPlugin } = require('../plugins/http-client.plugin');

const getPokemonById = async( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    
    const pokemon = await httpClientPlugin.get( url );
    // const response = await fetch( url );
    // const pokemon = await response.json();

    // throw new Error('Pokemon no existe');

    return pokemon.name;
    // return fetch( url )
    //     .then( ( resp ) => resp.json())
    //     // .then( () => { throw new Error('Pokemon no existe') })
    //     .then( ( pokemon ) => pokemon.name );

    
}

module.exports = getPokemonById;
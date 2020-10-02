import * as pokemonApi from '../data/api/pokeapi/pokemon.pokeapi'
import * as logger from '../libs/Logger'

export const getInfo = async (specieUrl,lang) => {
    try {
        return (await pokemonApi.getSpecieInfo(specieUrl,lang))
    } catch (error) {
        return error
    }
}
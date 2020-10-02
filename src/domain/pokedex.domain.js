import * as pokedexApi from '../data/api/pokeapi/pokedex.pokeapi'
import * as logger from '../libs/Logger'

export const getList = async (lang) => {
    const pokedexes = []

    try {
        const apiList = await pokedexApi.getList()
        for (const item of apiList) {
            const infoPokedex = await pokedexApi.getInfoByUrl(item.url,lang)
            pokedexes.push({
                id: infoPokedex.id,
                name: infoPokedex.name,
                url: item.url,
                description: infoPokedex.description,
                entries: infoPokedex.pokemon_entries.length
            })
        }
    } catch (error) {
        logger.error(`pokedex.domain -> getList() -> ${error}`)
    }finally{
        return pokedexes
    }
}//getList()

export const getPokedexInfo = async (pokedexId,lang) => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokedex/'+pokedexId
        return await pokedexApi.getInfoByUrl(url,lang)
    } catch (error) {
        logger.error(error)
        return error
    }
}
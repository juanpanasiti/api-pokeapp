import * as logger from "../../../libs/Logger";
import * as langSelect from '../../../libs/LanguageUtils'
import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/pokedex/'
const limitQuery = 'limit=9999'
const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  };

//Get a list of all pokedexes
export const getList = async () => {
    try {
        const apiResult = (await axios(`${url}?${limitQuery}`,options)).data.results
        return apiResult
    } catch (error) {
        logger.error(`pokedex.api -> getList() -> ${error}`)   
        return []
    }
}//getList()

//Get info by url
export const getInfoByUrl = async (pokedexUrl,lang) => {
    try {
        const apiResult = (await axios(pokedexUrl,options)).data
        
        const info = {
            id: apiResult.id,
            name: langSelect.getVersion(apiResult.names,'name',lang),
            description: langSelect.getVersion(apiResult.descriptions,'description',lang),
            pokemon_entries: apiResult.pokemon_entries,
            region: apiResult.region,
            version_groups: apiResult.version_groups
        }
        
        return(info)
    } catch (error) {
        logger.error(error)
    }
}//getInfoByUrl()


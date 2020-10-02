import * as logger from "../../../libs/Logger";
import * as langSelect from '../../../libs/LanguageUtils'
import axios from 'axios'
import { VarietyDTO } from "../../dto/variety.dto";
import { TypeDTO } from "../../dto/type.dto";
import { SpecieDTO } from "../../dto/specie.dto";

const url = 'https://pokeapi.co/api/v2/pokedex/'
const limitQuery = 'limit=9999'
const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  };


//Get info of a pokemon
export const getSpecieInfo = async (url, lang) => {
    const specie = new SpecieDTO()
    try {
        const specieAPI = (await axios(url,options)).data
        //set data
        specie.id = specieAPI.id
        specie.order = specieAPI.order
        specie.name = langSelect.getVersion(specieAPI.names,'name',lang)
        specie.specieUrl = url
        specie.evolutionChainUrl = specieAPI.evolution_chain.url
        specie.generationUrl = specieAPI.generation.url
        specie.isBaby = specieAPI.is_baby
        specie.isLegendary = specieAPI.is_legendary
        specie.isMythical = specieAPI.is_mythical
        specie.is
        
        for (const varietyItem of specieAPI.varieties) {
            const variety = new VarietyDTO()
            const varietyAPI = (await axios(varietyItem.pokemon.url,options)).data
            //set data
            variety.id = varietyAPI.id
            variety.order = varietyAPI.order
            variety.name = specie.name
            variety.isDefault = varietyAPI.is_default
            variety.varietyUrl = varietyItem.pokemon.url
            variety.specieUrl = specie.specieUrl
            //Sprites
            variety.sprites.frontDefault = null
            variety.sprites.backDefault = null
            variety.sprites.frontFemale = null
            variety.sprites.backFemale = null
            variety.sprites.frontShinyDefault = null
            variety.sprites.backShinyDefault = null
            variety.sprites.frontShinyFemale = null
            variety.sprites.backShinyFemale = null
            variety.sprites.animatedFrontDefault = null
            variety.sprites.animatedBackDefault = null
            variety.sprites.animatedFrontFemale = null
            variety.sprites.animatedBackFemale = null
            variety.sprites.animatedFrontShinyDefault = null
            variety.sprites.animatedBackShinyDefault = null
            variety.sprites.animatedFrontShinyFemale = null
            variety.sprites.animatedBackShinyFemale = null
            variety.sprites.officialArtwork = null
            variety.sprites.dreamWorldDefault = null
            variety.sprites.dreamWorldFemale = null
            //set default sprite
            if(variety.isDefault){
                specie.defaultSpriteUrl = variety.sprites.frontDefault
            }
            //Types
            if (varietyAPI.types) {
                for (const typeItem of varietyAPI.types) {
                    const type = new TypeDTO()
                    type.url = typeItem.type.url
                    type.name = typeItem.type.name
                    variety.types.push(type)
                }//for-of-types
            } else {
                logger.warning("problem with types")
            }
        }//for-of-varieties
        return specie
    } catch (error) {
        logger.error(`${error}`)
        return {status: 400, error: error}
    }
}//getPokemonInfo()

//Get info of a spicie
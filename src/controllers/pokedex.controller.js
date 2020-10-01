import * as pokedexDomain from '../domain/pokedex.domain'
import * as logger from '../libs/Logger'

export const getList = async (req,res) => {
    try {
        const lang = req.query.language
        const list = await pokedexDomain.getList(lang)

        res.status(200).json(list)
    } catch (error) {
        logger.error(`pokedex.controller -> getList() -> ${error}`)

        res.status(400).json(error)
    }

}//getList()
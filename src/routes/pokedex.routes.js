import { Router } from "express";
import * as pokedexController from '../controllers/pokedex.controller'

const router = Router()

router.get('/list', pokedexController.getList)

export default router
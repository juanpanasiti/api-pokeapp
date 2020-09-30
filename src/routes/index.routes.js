import { Router } from "express";
import * as indexController from '../controllers/index.controller'

const router = Router()

router.get('/test-conn', indexController.testConnection )

export default router
import express from 'express'
const router = express.Router()
import {getHome} from '../controllers/homeController.js'

router.get('/',getHome)



export default router
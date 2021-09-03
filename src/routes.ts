import { Router } from 'express'
import ControlPointController from './api/controllers/ControlPointController'

const routes = Router()

routes.post('/add', ControlPointController.create)
routes.get('/list', ControlPointController.getAll)

export default routes

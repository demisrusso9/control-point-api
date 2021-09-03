import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import ControlPointRepository from '../repositories/ControlPointRepository'

class ControlPoint {
  async create(req: Request, res: Response) {
    const repository = getCustomRepository(ControlPointRepository)

    const {
      currentDate,
      morningEntry,
      morningExit,
      afternoonEntry,
      afternoonExit,
      morningActivities,
      afternoonActivities
    } = req.body

    const control_point = repository.create({
      currentDate,
      morningEntry,
      morningExit,
      afternoonEntry,
      afternoonExit,
      morningActivities,
      afternoonActivities
    })

    await repository.save(control_point)

    return res.status(201).json({ message: 'Control Point registered' })
  }

  async getAll(req: Request, res: Response) {
    const orders = await getCustomRepository(ControlPointRepository).find()
    return res.json(orders)
  }
}

export default new ControlPoint()

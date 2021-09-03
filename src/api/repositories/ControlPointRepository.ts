import { EntityRepository, Repository } from 'typeorm'
import ControlPoint from '../models/ControlPoint'

@EntityRepository(ControlPoint)
export default class ControlPointRepository extends Repository<ControlPoint> {}

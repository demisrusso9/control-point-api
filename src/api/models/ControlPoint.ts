import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('control_point')
class ControlPoint {
  @PrimaryColumn()
  readonly id: string

  @Column()
  currentDate: string

  @Column()
  morningEntry: string

  @Column()
  morningExit: string

  @Column()
  afternoonEntry: string

  @Column()
  afternoonExit: string

  @Column()
  morningActivities: string

  @Column()
  afternoonActivities: string

  constructor() {
    if (!this.id) this.id = uuid()
  }
}

export default ControlPoint

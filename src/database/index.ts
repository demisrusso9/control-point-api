import { createConnection } from 'typeorm'

createConnection()
  .then(res => console.log('Database Running 👌'))
  .catch(err => console.log(err))

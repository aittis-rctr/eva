import constants from './constants'
import * as mongoose from 'mongoose'

mongoose.set('debug', true)

try {
  mongoose.connect(constants.DB_URL)
} catch (err) {
  mongoose.createConnection(constants.DB_URL)
}

mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .on('error', err => { throw err })

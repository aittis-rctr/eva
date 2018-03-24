import app from './app'

import constants from './config/constants'
import './config/db'

app.listen(constants.PORT, (err) => {
  if(err) {
    throw err
  }

  console.log(`Server running on port ${constants.PORT}`)
  console.log(`Environment ${process.env.NODE_ENV}`)
})
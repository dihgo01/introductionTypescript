import express from 'express'

import Appointmentroutes from './routes/Appoiment.routes'

const app = express()
const PORT = 3333

app.use('/appointment', Appointmentroutes)

app.listen( 3333,() => console.log('Server run in port'+ PORT))

import { Router } from "express";

const Appointmentroutes = Router()

const Appointments = [ ]

Appointmentroutes.post('/', (request,response) => {
    const { provider, date} = request.body

    return response.json({message : "User register with sucess!!"})
})

export default Appointmentroutes;

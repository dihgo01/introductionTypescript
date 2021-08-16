import { Router } from "express";
import AppointmentRepositorie from "../repositorie/AppointmentRepositorie";
import CreateAppointmentService from "../service/CreateAppointmentService";
import { parseISO} from 'date-fns'


const Appointmentroutes = Router()


const AppointmentRepository = new AppointmentRepositorie()

Appointmentroutes.post('/', (request,response) => {
    try {

        const { provider, date} = request.body

    const parseDate = parseISO(date)
    const createAppointment = new CreateAppointmentService(AppointmentRepository)
    const appointment = createAppointment.execute({provider , date:parseDate})
    return response.json({appointment})
    }
    catch (err) {
        return response.status(400).json( {error : err.message})
    }
})

Appointmentroutes.get('/' , (request, response) => {
    const appointment = AppointmentRepository.all()

    return response.json(appointment)
})

export default Appointmentroutes;

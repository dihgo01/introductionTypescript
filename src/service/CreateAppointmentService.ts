import Appointment from "../model/Appointment";
import AppointmentRepositorie from "../repositorie/AppointmentRepositorie";
import { startOfHour } from 'date-fns'

interface RequestDTO {
    provider: String;
    date: Date;
}
class CreateAppointmentService {

    private appointmentRepository : AppointmentRepositorie;

    constructor (appointmentRepository : AppointmentRepositorie) {
        this.appointmentRepository = appointmentRepository
    }
    public execute({provider , date }: RequestDTO ): Appointment {

        const startHour = startOfHour(date)
        const findAppointmentInSameDay = this.appointmentRepository.findByAppointment(startHour)

        if (findAppointmentInSameDay) {
            throw Error ('This appointment is already booked')
        }

        const appointment = this.appointmentRepository.create({ provider, date: startHour })

        return appointment
    }
}
export default CreateAppointmentService

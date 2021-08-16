import Appointment from "../model/Appointment"
import { isEqual } from 'date-fns'

interface CreateAppointmentDTO {
    provider: String;

    date: Date;
}
class AppointmentRepositorie {

    private Appointments: Appointment[]

    constructor() {
        this.Appointments = []
    }

    public all (): Appointment [] {
        return this.Appointments
    }

    public findByAppointment(date: Date): Appointment | null {

        const findAppointment = this.Appointments.find(appointment => isEqual(date, appointment.date))

        return findAppointment || null

    }

    public create({provider, date}: CreateAppointmentDTO): Appointment {
        const appointment = new Appointment({provider, date});

        this.Appointments.push(appointment);

        return appointment
    }
}

export default AppointmentRepositorie

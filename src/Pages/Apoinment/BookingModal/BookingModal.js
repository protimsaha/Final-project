import React from 'react';
import { format } from 'date-fns';
import axios from 'axios';


const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const data = { date: date, slot: slot, name: name, email: email, phone: phone }

        console.log(data)
        axios.post('http://localhost:5000/bookings', { data })
            .then(res => console.log(res))


        setTreatment(null)

    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-secondary text-lg">Book treatment:{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full my-2" />

                        <select name='slot' class="select select-bordered w-full ">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Your Name" class="input input-bordered w-full my-2" />
                        <input name='email' type="email" placeholder="Your Email" class="input input-bordered w-full my-2" />
                        <input name='phone' type="text" placeholder="Phone Number" class="input input-bordered w-full my-2" />

                        <input className='btn btn-secondary w-full' type="submit" value="Booking" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;
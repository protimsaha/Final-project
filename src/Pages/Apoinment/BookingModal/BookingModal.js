import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Auth/firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment
    const [user] = useAuthState(auth)
    const formatedDate = format(date, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const treatmentId = _id
        const slot = event.target.slot.value
        const phone = event.target.phone.value
        const data = {
            treatmentId: treatmentId,
            treatment: name,
            date: formatedDate,
            slot: slot,
            price: price,
            patientName: user?.displayName,
            patient: user?.email,
            phone: phone
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Booking set on ${formatedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have a booking on ${data.data?.date} at ${data.data?.slot}`)
                }
                refetch()
                setTreatment(null)
            })




    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-secondary text-lg">Book treatment:{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full my-2" />

                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" disabled value={user?.displayName} className="input input-bordered w-full my-2" />
                        <input name='email' type="email" disabled value={user?.email} className="input input-bordered w-full my-2" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full my-2" />

                        <input className='btn btn-secondary w-full' type="submit" value="Booking" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;
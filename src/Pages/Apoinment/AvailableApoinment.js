import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal/BookingModal';
import Service from './Service';

const AvailableApoinment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='mt-4 text-xl text-center text-secondary'>Available appoinment on :{format(date, 'PP')} <span className='font-bold text-xl'> </span> </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 '>
                {
                    services.map(service => <Service
                        key={service._id} setTreatment={setTreatment} service={service}></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                setTreatment={setTreatment}
                treatment={treatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableApoinment;
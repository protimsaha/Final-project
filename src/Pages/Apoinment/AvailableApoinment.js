import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal/BookingModal';
import Service from './Service';

const AvailableApoinment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formatedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='mt-4 text-2xl text-center text-secondary font-bold'>Available appoinment on :{format(date, 'PP')} <span className='font-bold text-xl'> </span> </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 '>
                {
                    services?.map(service => <Service
                        key={service._id} setTreatment={setTreatment} service={service}></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                setTreatment={setTreatment}
                treatment={treatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableApoinment;
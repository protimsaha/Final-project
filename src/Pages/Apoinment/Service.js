import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card w-96 mx-auto  bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-primary">{name}</h2>
                {
                    slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-400'>Try another date</span>
                }
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className='mx-auto mt-5'>

                    <label disabled={slots.length === 0}
                        onClick={() => setTreatment(service)} htmlFor="my-modal-6" className='btn  text-white bg-gradient-to-r from-secondary to-primary  uppercase'>Book Appoinment</label>
                </div>
            </div>
        </div >
    );
};

export default Service;
import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import Button from '../../Shared/Button/Button';
import './MakeApoinment.css'

const MakeApoinment = () => {
    return (
        <section className='makeApoinment  mb-12 p-3'>
            <div className='flex'>
                <div className=''>
                    <img className='mt-[-100px] hidden lg:block' src={doctor} alt="" />
                </div>
                <div className='my-auto'>
                    <p className='text-xl text-primary'>Apoinment</p>
                    <h3 className='text-3xl text-white'>Make an apoinment today!</h3>
                    <p className='text-white my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa magnam consequuntur ex. Molestias doloremque hic odit obcaecati, exercitationem rem iure ratione officia fuga beatae impedit eligendi vitae esse perspiciatis iste temporibus optio aspernatur itaque, reiciendis accusantium voluptas numquam amet?</p>
                    <Button></Button>
                </div>
            </div>
        </section>
    );
};

export default MakeApoinment;
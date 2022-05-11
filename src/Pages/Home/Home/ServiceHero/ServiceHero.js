import React from 'react';
import service from '../../../../assets/images/treatment.png'
import Button from '../../../Shared/Button/Button';

const ServiceHero = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={service} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-10'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;

import React from 'react';
import service from '../../../../assets/images/treatment.png'
import Button from '../../../Shared/Button/Button';

const ServiceHero = () => {
    return (
        <div class="hero ">
            <div class="hero-content flex-col lg:flex-row">
                <img src={service} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-10'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;

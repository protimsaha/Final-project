import React from 'react';
import chair from '../../../assets/images/chair.png'
import Button from '../../Shared/Button/Button';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero  py-16 my-20 banner">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} className="lg:mr-12 max-w-sm rounded-lg shadow-2xl w-auto" />
                <div className='lg:ml-12 '>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6 break-words mr-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
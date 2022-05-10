import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import cavity from '../../../assets/images/cavity.png'
import ServiceCard from '../ServiceCard/ServiceCard';
import ServiceHero from '../Home/ServiceHero/ServiceHero';

const Services = () => {

    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa eius tempora hic iure et",
            img: fluoride
        },
        {
            id: 2,
            name: "Cavity Treatment",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa eius tempora hic iure et",
            img: cavity
        },
        {
            id: 3,
            name: "Whieting",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa eius tempora hic iure et",
            img: whitening
        },
    ]

    return (
        <div className='my-12 p-6'>
            <div className='uppercase text-center font-bold'>
                <p className='text-primary text-xl'>Our Services</p>
                <h3 className='text-3xl text-slate-600'>Services we provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <ServiceHero></ServiceHero>
        </div>
    );
};

export default Services;

import React from 'react';
import quto from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import ReviewCard from '../Home/ReviewCard/ReviewCard';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Winson Herry",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa eius tempora hic iure et",
            img: people1,
            location: "California"
        },
        {
            id: 2,
            name: "Mariana Trench",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa eius tempora hic iure et",
            img: people2,
            location: "California"
        },
        {
            id: 3,
            name: "Surya ",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa eius tempora hic iure et",
            img: people3,
            location: "California"
        },
    ]

    return (
        <section className='m-6 p-6'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl text-primary font-bold'>Testimonials</h2>
                    <h2 className='text-3xl '>What our patient says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48 ' src={quto} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;
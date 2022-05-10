import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, description, img, location } = review
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body ">
                <p className='my-4'>{description}</p>
                <div className='flex items-center'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold ml-3'>{name}</h3>
                        <h2 className='text-xl ml-3'>{location}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
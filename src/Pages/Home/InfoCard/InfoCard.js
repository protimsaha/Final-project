import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`card card-side px-3 py-3 shadow-xl ${bgClass}`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title ">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;
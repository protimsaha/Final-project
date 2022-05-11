import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const ApoinmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero  py-16 my-20 banner">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img className="lg:mx-16  max-w-sm rounded-lg shadow-2xl w-auto" src={chair} alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default ApoinmentBanner;
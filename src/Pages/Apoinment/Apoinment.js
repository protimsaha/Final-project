import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import ApoinmentBanner from './ApoinmentBanner';
import AvailableApoinment from './AvailableApoinment';

const Apoinment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <ApoinmentBanner date={date} setDate={setDate}></ApoinmentBanner>
            <AvailableApoinment date={date}></AvailableApoinment>
            <Footer></Footer>
        </div>
    );
};

export default Apoinment;
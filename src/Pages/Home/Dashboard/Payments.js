import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L17h5A9ADacrTBOu8OkUEsajGKj2xpPLAUzw2GUdxyMN7Dv8nMKhctGUb4UobYtIGsMWqcSH0x3iiqMDDRCSM0r00RpYL86Gs');

const Payments = () => {
    const { payId } = useParams();

    const url = `http://localhost:5000/bookings/${payId}`

    const { data: booking, isLoading } = useQuery(['bookings', payId], () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="mx-auto card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Pay for {booking?.treatment}</h2>
                    <p>We will see you on {booking?.date} and {booking?.slot}</p>
                    <p>Pay ${booking?.price}</p>
                </div>
            </div>
            <div className=' mx-auto w-96 p-8 text-white bg-secondary-focus shadow-lg my-10 rounded-lg'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payments;
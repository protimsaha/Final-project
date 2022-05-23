import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe()
    const elements = useElements()

    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSucces] = useState('')
    const [transectionId, setTransectionId] = useState('')
    const [loading, setLoading] = useState(false)



    const { price, patient, patientName, _id } = booking


    useEffect(() => {
        fetch('http://localhost:5000/create-client-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret);
                }
            });

    }, [price])


    // if (loading) {
    //     return <Loading></Loading>
    // }

    const handleSubmit = async (event) => {


        event.preventDefault()

        if (!elements || !stripe) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        setCardError(error?.message || '')
        setSucces('')
        setLoading(true)


        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message)
            setLoading(false)
        } else {
            setCardError('')
            setTransectionId(paymentIntent.id)
            console.log(paymentIntent)
            setSucces('Congrats! Your payment successfully completed')

            // Update payment status
            const payment = {
                apoinment: _id,
                transectionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/bookings/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setLoading(false)
                    console.log(data)
                })


        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-accent btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='font-bold text-xl'>
                    <p >{success}</p>
                    <p>Your transection ID is : <span className='text-orange-600'>{transectionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Auth/firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const MyAppoinment = () => {
    const [appoinments, setAppoinments] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`http://localhost:5000/bookings?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(data => setAppoinments(data))
    }, [user, navigate])

    return (
        <div >
            <div class="overflow-x-auto my-10 mx-auto w-4/5 ">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;

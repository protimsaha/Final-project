import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user

    const updateRole = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Only admin can add admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully made an admin')
                }
            })
    }

    return (
        <tbody>
            <tr>
                <th>3</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={updateRole} class="btn btn-xs">Make admin</button>}</td>
                <td><button class="btn btn-xs">Remove User</button></td>
            </tr>
        </tbody>
    );
};

export default UserRow;
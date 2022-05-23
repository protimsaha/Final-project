import React from 'react';

const DeleteModal = ({ deleteDoc, refetch, setDeleteDoc }) => {
    const { name, email } = deleteDoc;

    const handleDelete = (email) => {
        fetch(`http://localhost:5000/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setDeleteDoc(null)
                    refetch()
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to delete doctor : ${name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">


                        <button onClick={() => handleDelete(email)} className='btn btn-xs bg-red-500 '>Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs bg-black">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;
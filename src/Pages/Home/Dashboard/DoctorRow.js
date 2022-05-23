import React from 'react';

const DoctorRow = ({ doctor, index, setDeleteDoc }) => {
    const { name, speciality, img } = doctor



    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={setDeleteDoc(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-warning">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axiosInstance from '../axios config/axiosInstance'

function Student(props) {
    console.log(props);
    const student = {
        stud_Id: props.rowData.ID,
        stud_name: props.rowData.Name,
        stud_email: props.rowData.Email,
        stud_telephone: props.rowData.Phone,
        stud_address: props.rowData.Address
    }


    const deleteStudentHandler = () => {
        try {
            axiosInstance.delete(`/ID/${student.stud_Id}?sheet=students`);
            props.deleteHandle(student.stud_Id);

            axiosInstance.delete(`/Stud_ID/${student.stud_Id}?sheet=Enrollment`);
        }
        catch (e) {
            console.log("Error Occurred " + e);
        }
    }

    return (
        <tr>
            <td>{student.stud_Id}</td>
            <td><Link to={`${student.stud_Id}`} className='btn btn-light'>{student.stud_name}</Link></td>
            <td>{student.stud_email}</td>
            <td>{student.stud_telephone}</td>
            <td>{student.stud_address}</td>
            <td><button type="button" className='btn btn-sm btn-danger rounded-circle' onClick={deleteStudentHandler}><FontAwesomeIcon icon={faTrash} size="xs" /></button></td>
        </tr>
    )
}

export default Student

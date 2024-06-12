import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../axios config/axiosInstance';
import { Link } from 'react-router-dom';

function Course(props) {
    let course = {
        course_name: props.rowData.Name,
        course_startDate: props.rowData.Start_date,
        course_endDate: props.rowData.End_date,
        course_cost: props.rowData.Cost,
        course_capacity: props.rowData.Capacity,
        course_status: props.rowData.Status
    }

    const deleteCourseHandler = () => {
        try {
            axiosInstance.delete(`/Name/${course.course_name.split(' ').join('%20')}?sheet=Courses`);
            props.deleteHandle(course.course_name);
        }
        catch (e) {
            console.log("Error Occurred " + e);
        }
    }

    return (
        <tr>
            <td><Link to={`${course.course_name.split(' ').join('%20')}`} className='btn btn-light'>{course.course_name}</Link></td>
            <td>{course.course_startDate}</td>
            <td>{course.course_endDate}</td>
            <td>{course.course_cost}</td>
            <td>{course.course_capacity}</td>
            <td>{(course.course_status == "1") ? "Started" : (course.course_status == "0") ? "Not Started" : "Canceled"}</td>
            <td><button type="button" className='btn btn-sm btn-primary rounded-circle' data-bs-toggle="modal" data-bs-target="#EditFormModal" onClick={props.editHandle}><FontAwesomeIcon icon={faEdit} size="xs" onClick={props.editHandle} /></button> <button type="button" className='btn btn-sm btn-danger rounded-circle' onClick={deleteCourseHandler}><FontAwesomeIcon icon={faTrash} size="xs" /></button></td>
        </tr>
    )
}

export default Course

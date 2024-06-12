// @ts-nocheck
import React from 'react'
import { v4 } from 'uuid';
import axiosInstance from './axios config/axiosInstance';

function Model(props) {
    const AddStudentAction = async () => {
        const form = document.forms['AddStudentForm'];
        const data = new FormData(form);
        const student = {
            ID: v4(),
            Name: data.get('student_name'),
            Email: data.get('student_email'),
            Phone: data.get('student_phone'),
            Address: data.get('student_address'),
        }
        try {
            const response = await axiosInstance.post("?sheet=students", student);
            if (response.status == 201) {
                document.getElementById('CloseBtn').click();
                form.reset();
                props.changer(student);
            }
        }
        catch (e) {
            console.log("Error Occured " + e);
        }
    }
    const AddCourseAction = async () => {
        const form = document.forms['AddCourseForm'];
        const data = new FormData(form);
        const course = {
            Name: data.get('course_name'),
            Start_date: data.get('course_startDate'),
            End_date: data.get('course_endDate'),
            Cost: data.get('course_cost'),
            Capacity: data.get('course_capacity'),
            Status: data.get('course_status'),
        }
        try {
            const response = await axiosInstance.post("?sheet=courses", course);
            if (response.status == 201) {
                document.getElementById('CloseBtn').click();
                form.reset();
                props.changer(course);
            }
        }
        catch (e) {
            console.log("Error Occured " + e);
        }

    }

    const EditCourseAction = async () => {
        const form = document.forms['EditCourseForm'];
        const data = new FormData(form);
        const course = {
            Name: data.get('Name'),
            Start_date: data.get('Start_date'),
            End_date: data.get('End_date'),
            Cost: data.get('Cost'),
            Capacity: data.get('Capacity'),
            Status: data.get('Status'),
        }
        console.log(course);
        try {
            const response = await axiosInstance.patch(`/Name/${course.Name}?sheet=courses`, course);
            if (response.status == 200 || response.status == 204) {
                document.querySelectorAll('#CloseBtn')[1].click();
                form.reset();
                props.changer(course);
            }
        }
        catch (e) {
            console.log("Error Occured " + e);
        }
    }
    const component = {
        Student: {
            Add: AddStudentAction
        },
        Course: {
            Add: AddCourseAction,
            Edit: EditCourseAction
        }
    }
    return (
        <div className="modal fade" id={props.target} tabIndex={-1} aria-labelledby="Modal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="Modal">{props.title}</h5>
                        <button type="button" className="btn-close" id='CloseBtn' data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={component[props.object][props.type]}>{props.type}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model

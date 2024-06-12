// @ts-nocheck
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axiosInstance from '../axios config/axiosInstance';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function StudentDetails() {
    const id = useParams().std_id;
    const [data, setData] = useState([]);
    const [courses, setCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([]);
    const nav = useNavigate();

    const addCourseHandle = async (e) => {
        document.querySelector('#AddSection').classList.remove('d-none');
        e.target.classList.add('d-none')
        try {
            const response = await axiosInstance.get(`?sheet=Courses`);
            setAllCourses(response.data);
        }
        catch (e) {
            console.log("Error Ocuured " + e);
        }
    }

    const Enrollment = async () => {
        const course_name = document.querySelector('#CourseStatus').value;
        const bodydata = {
            Stud_ID: id,
            Course_Name: course_name
        }
        try {
            const response = await axiosInstance.post(`?sheet=Enrollment`, bodydata);
            setCourses([...courses, bodydata]);
        }
        catch (e) {
            console.log("Error Ocuured " + e);
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/search?ID=${id}&sheet=students`);
                setData(response.data[0]);
            }
            catch (e) {
                console.log("Error Ocuured " + e);
            }
        }
        const fetchCourses = async () => {
            try {
                const response = await axiosInstance.get(`/search?Stud_ID=${id}&sheet=enrollment`);
                setCourses(response.data);
            }
            catch (e) {
                console.log("Error Ocuured " + e);
            }
        }
        fetchData();
        fetchCourses()

    }, [])
    return (
        <div className='student-details py-5'>
            <div className="container">
                <h2 className="h2 mb-5">Student Details</h2>
                <p className='shadow p-3 mb-5 bg-body rounded'><span className='fw-bold me-2'>Student Name:</span> {data['Name'] || ""}</p>
                <p className='shadow p-3 mb-5 bg-body rounded'><span className='fw-bold me-2'>Student Email:</span> {data['Email'] || ""}</p>
                <p className='shadow p-3 mb-5 bg-body rounded'><span className='fw-bold me-2'>Student Phone:</span> {data['Phone'] || ""}</p>
                <p className='shadow p-3 mb-5 bg-body rounded'><span className='fw-bold me-2'>Student Address:</span> {data['Address'] || ""}</p>
                <h2 className="h2 mt-5">Courses</h2>
                <ul className='list-group list-group-numbered py-4'>
                    {(courses.length !== 0) ? courses.map((course) => <li className='list-group-item' key={course['Course_Name']}>{course['Course_Name']}</li>) : <h3 className='h3'>Not Enrolled in any Course</h3>}
                </ul>

                <button type='button' className='btn btn-sm btn-primary d-block mb-3' onClick={addCourseHandle}><FontAwesomeIcon icon={faPlusCircle} size='xs' />Add Course</button>

                <div className='mb-3 d-none' id='AddSection'>
                    <div className="mb-3">
                        <label htmlFor="CourseStatus" className="form-label">Course</label>
                        <select className="form-select" name='course_status' id='CourseStatus'>
                            {allCourses.map((course) => <option key={course['ID']} value={course['Name']}>{course['Name']}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <button type='button' className='btn btn-primary' onClick={Enrollment}>Add</button>
                    </div>
                </div>
                <button type='button' className='btn btn-primary' onClick={() => { nav('/students') }}>Back To List</button>
            </div>
        </div>
    )
}

export default StudentDetails

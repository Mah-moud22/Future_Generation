import axiosInstance from '../axios config/axiosInstance'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CourseDetails() {
    const name = useParams().course_Name;
    const [data, setData] = useState([]);
    const [courses, setCourses] = useState([]);
    const nav = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try{
            const response = await axiosInstance.get(`/search?Name=${name}&sheet=courses`);
            setData(response.data[0]);
            }
            catch(e){
                console.log("Error Ocuured " + e);
            }
        }
        fetchData();
    }, [])
    return (
        <div className='course-details py-5'>
            <div className="container">
                <h2 className="h2 mb-5">Course Details</h2>
                <p className='shadow p-3 mb-5 bg-body rounded'><span className='fw-bold me-2'>Course Name:</span> {data['Name']}</p>
                <p className='shadow p-3 mb-5 bg-body rounded'><span className='fw-bold me-2'>Start Date:</span> {data['Start_date']}</p>
                <p className='shadow p-3 mb-5 bg-body rounded'><span className='fw-bold me-2'>End Date:</span> {data['End_date']}</p>
                <p className='shadow p-3 mb-5 bg-body rounded'><span className='fw-bold me-2'>Cost:</span> {data['Cost']}</p>
                <p className='shadow p-3 mb-5 bg-body rounded'><span className='fw-bold me-2'>Status:</span>{(data['Status']=="1")?"Started":(data['Status']=="0")?"Not Started":"Canceled"}</p>
                <button type='button' className='btn btn-primary' onClick={()=>{nav('/courses')}}>Back To List</button>
            </div>
        </div>
    )
}

export default CourseDetails

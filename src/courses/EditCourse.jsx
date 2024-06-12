// @ts-nocheck
import React, { useEffect, useState } from 'react'

/**
 * @param {{ course: any[]; }} props
 */
function AddCourse(props) {
    const [courseinfo,setCourseInfo] = useState({});
    useEffect(()=>{
        setCourseInfo({
            Name: props.course[0],
            Start_date: props.course[1],
            End_date: props.course[2],
            Cost: props.course[3],
            Capacity: props.course[4],
            Status: props.course[5]
        });
        console.log(props);
    },[props])

    const ChangeHandler = (e)=>{
        const element = e.target;
        setCourseInfo({...courseinfo, [element.name]: element.value});
    }
    return (
        <form action='' method='post' id="EditCourseForm" className='text-start'>
            <div className="mb-3">
                <label htmlFor="CourseName" className="form-label">Name</label>
                <input type="text" name='Name' value={courseinfo.Name || ""} className="form-control-plaintext px-2" id="CourseName" placeholder="Enter Course Name" readOnly />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseStartDate" className="form-label">Start Date</label>
                <input type="date" name='Start_date' value={courseinfo?.Start_date?.split("/").reverse().join("-") || ""} className="form-control-plaintext px-2" id="CourseStartDate" placeholder="Enter Start Date" onChange={(e) => ChangeHandler(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseEndDate" className="form-label">End Date</label>
                <input type="date" name='End_date' value={courseinfo.End_date?.split("/").reverse().join("-") || ""} className="form-control-plaintext px-2" id="CourseEndDate" placeholder="Enter End Date" onChange={(e) => ChangeHandler(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseCost" className="form-label">Cost</label>
                <input type="number" name='Cost' value={courseinfo.Cost || ""} className="form-control-plaintext px-2" id="CourseCost" placeholder="Enter Cost" onChange={(e) => ChangeHandler(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseCapacity" className="form-label">Capacity</label>
                <input type="number" name='Capacity' value={courseinfo.Capacity || ""} className="form-control-plaintext px-2" id="CourseCapacity" placeholder="Enter Capacity" onChange={(e) => ChangeHandler(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseStatus" className="form-label">Status</label>
                <select className="form-select" name='Status' id='CourseStatus' value={courseinfo.Status || ""} onChange={(e) => ChangeHandler(e)}>
                    <option value="1">Started</option>
                    <option value="0">Not Started</option>
                    <option value="-1">Canceled</option>
                </select>
            </div>
        </form>
    )
}

export default AddCourse

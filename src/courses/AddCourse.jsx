import React from 'react'

function AddCourse() {
    return (
        <form action='' method='post' id="AddCourseForm" className='text-start'>
            <div className="mb-3">
                <label htmlFor="CourseName" className="form-label">Name</label>
                <input type="text" name='course_name' className="form-control-plaintext px-2" id="CourseName" placeholder="Enter Course Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseStartDate" className="form-label">Start Date</label>
                <input type="date" name='course_startDate' className="form-control-plaintext px-2" id="CourseStartDate" placeholder="Enter Start Date" />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseEndDate" className="form-label">End Date</label>
                <input type="date" name='course_endDate' className="form-control-plaintext px-2" id="CourseEndDate" placeholder="Enter End Date" />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseCost" className="form-label">Cost</label>
                <input type="number" name='course_cost' className="form-control-plaintext px-2" id="CourseCost" placeholder="Enter Cost" />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseCapacity" className="form-label">Capacity</label>
                <input type="number" name='course_capacity' className="form-control-plaintext px-2" id="CourseCapacity" placeholder="Enter Capacity" />
            </div>
            <div className="mb-3">
                <label htmlFor="CourseStatus" className="form-label">Status</label>
                <select className="form-select" name='course_status' id='CourseStatus'>
                    <option value="1">Started</option>
                    <option value="0">Not Started</option>
                    <option value="-1">Canceled</option>
                </select>
            </div>
        </form>
    )
}

export default AddCourse

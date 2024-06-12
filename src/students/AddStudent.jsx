import React from 'react'

function AddStudent() {

    return (
        <form action='/a' method='post' id="AddStudentForm" className='text-start'>
            <div className="mb-3">
                <label htmlFor="StudentName" className="form-label">Name</label>
                <input type="text" name='student_name' className="form-control-plaintext px-2" id="StudentName" placeholder="Enter Your Name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="StudentEmail" className="form-label">Email</label>
                <input type="email" name='student_email' className="form-control-plaintext px-2" id="StudentEmail" placeholder="Enter Your Email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="StudentPhone" className="form-label">Phone</label>
                <input type="tel" name='student_phone' className="form-control-plaintext px-2" id="StudentPhone" placeholder="Enter Your Phone" required />
            </div>
            <div className="mb-3">
                <label htmlFor="StudentAddress" className="form-label">Address</label>
                <input type="text" name='student_address' className="form-control-plaintext px-2" id="StudentAddress" placeholder="Enter Your Address" required />
            </div>
        </form>
    )
}

export default AddStudent

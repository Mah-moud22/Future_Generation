import React from 'react'
import DataTable from '../DataTable';

function Students() {
    return (
        <>
            <DataTable API_URL="?sheet=courses" tag="Course" />
        </>
    )
}

export default Students;

import React from 'react'
import DataTable from '../DataTable';

function Students() {
    return (
        <>
            <DataTable API_URL="?sheet=students" tag="Student" />
        </>
    )
}

export default Students;

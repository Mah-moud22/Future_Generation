// @ts-nocheck
import React, { useEffect, useState } from 'react'
import axiosInstance from './axios config/axiosInstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Student from './students/Student';
import Course from './courses/Course'
import Model from './Model';
import AddStudent from './students/AddStudent';
import AddCourse from './courses/AddCourse';
import EditCourse from './courses/EditCourse';

function DataTable(props) {
    const [header, setHeader] = useState(String[""]);
    const [data, setData] = useState();
    const [error, setError] = useState("");
    const [editData, setEditData] = useState([]);
    const components = {
        Student: Student,
        Course: Course,
    };
    const TagName = components[props.tag];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(props.API_URL);
                setHeader(Object.keys(response.data.slice(0, 1)[0]));
                setData(response.data);
            }
            catch (e) {
                setError("Error Occured " + e);
                console.log("Error Occured " + e);
            }

        }
        fetchData();
    }, [])
    const changeHandler = (newData) => {
        setData([...data, newData]);
    }
    const editHandler = (newData) => {
        setData(data.map((item) => (item.Name == newData.Name)?newData:item));
    }
    const deleteHandler = (target) => {
        setData((props.tag === "Student") ? data.filter((e) => e.ID != target) : data.filter((e) => e.Name != target));
    }

    const EditButtonHandler = (e)=>{
        console.log(e);
        let element = e.target;
        while(element.tagName != 'TR')element = element.parentNode;
        const list = element.getElementsByTagName('td');
        const temp = [];
        for(let i=0;i<list.length-1;i++){
            if((list.length-2) == i)
                temp.push((list[i].textContent == 'Started')?"1":(list[i].textContent == 'Not Started')?"0":"-1");
            else
                temp.push(list[i].textContent);
        }
        setEditData(temp)
    }
    useEffect(()=>{
        console.log(editData);
    },[editData])
    return (
        <>
            <div className='table-responsive my-5'>
                <div className="container">
                
                {(error) ? <h1>{error}</h1> : data && <table className="students-list table align-middle text-center caption-top">
                        <caption className='fs-4'>{props.tag}s</caption>
                        <thead className='align-middle'>
                            <tr>
                                {header && header.map((td, index) => <th key={index}>{td}</th>)}
                                <th><button type='button' className='btn btn-sm btn-primary' data-bs-toggle="modal" data-bs-target="#addFormModal"><FontAwesomeIcon icon={faPlusCircle} size='xs' /> Add {props.tag}</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((row) => <TagName key={row[(props.tag === "Student") ? 'ID' : 'Name']} rowData={row} deleteHandle={deleteHandler.bind(this)} editHandle={EditButtonHandler.bind(this)} />)}
                        </tbody>
                    </table>
                    }
                    <Model target="addFormModal" title={`Add New ${props.tag}`} type="Add" object={props.tag} changer={changeHandler.bind(this)} >
                        {(props.tag == "Student") ? <AddStudent /> : <AddCourse />}
                    </Model>
                    <Model target="EditFormModal" title={`Edit ${props.tag}`} type="Edit" object={props.tag} changer={editHandler.bind(this)} >
                        <EditCourse course={editData} />
                    </Model>
                </div>
            </div>
        </>
    )
}

export default DataTable

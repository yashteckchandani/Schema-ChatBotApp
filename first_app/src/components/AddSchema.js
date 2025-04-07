import React, { useState } from 'react';
import '../App.css';
import './AddSchema.css';
import axios from 'axios';
import base_url from '../api/bootapi';

const AddSchema = () => {

    const [schema,setSchema]=useState({ });

    const handleAddSchema=(e) => {
        e.preventDefault();
        postDataToServer(schema);
        console.log(schema);
        document.querySelector('.schemaId').value = '';
        document.querySelector('.schemaTitle').value = '';
        document.querySelector('.schemaDesc').value = '';
        setSchema({id:'',title:'',description:''}); 
    }

    const postDataToServer=(data) => {
        axios.post(`${base_url}/schemas`, data)
        .then(
            (response) => {
                console.log(response.data);
                window.location.reload();
            },
            (error) => {
                console.log(error);
            }
        )
    }

    return(
        <div className="main addSchema">
            <div className="inputAddSchema">
                <input type="text" className="schemaId" placeholder="Enter Schema Id..." onChange={(e)=>{setSchema({...schema,id:e.target.value})}}/>
            </div>
            <div className="inputAddSchema">
                <input type="text" className="schemaTitle" placeholder="Enter Schema Title..." onChange={(e)=>{setSchema({...schema,title:e.target.value})}}/>
            </div>
            <div className="inputAddSchemaDescription">
                <input type="textarea" className="schemaDesc" placeholder="Enter Schema Description..." onChange={(e)=>{setSchema({...schema,description:e.target.value})}} />
            </div>
            <div className="addSchemaBtn">
                <button className="addSchemaButton" onClick={handleAddSchema}>Add Schema</button>
            </div>
        </div>
    )
}

export default AddSchema;
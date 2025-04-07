import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import base_url from '../api/bootapi';
import axios from 'axios';

const UpdateSchema = () => {
    const location = useLocation();
    const [schema, setSchema] = useState({});

    useEffect(() => {
        if (location.state && location.state.schema) {
            setSchema(location.state.schema);
            document.querySelector('.schemaTitle').value = location.state.schema.title;
            document.querySelector('.schemaDesc').value = location.state.schema.description;
          }

    }, [location]);

    const handleUpdateSchema = (e) => {
        e.preventDefault();
        postDataToServer(schema);
        console.log(schema);
    }

    const postDataToServer = (data) => {
        axios.put(`${base_url}/schemas`, data)
        .then(
            (response) => {
                console.log(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }


    return(
        <div className="main">
            <div className="inputAddSchema">
                <input type="text" className="schemaTitle" placeholder="Enter Schema Title..." onChange={(e)=>{setSchema({...schema,title:e.target.value})}}/>
            </div>
            <div className="inputAddSchemaDescription">
                <input type="textarea" className="schemaDesc" placeholder="Enter Schema Description..." onChange={(e)=>{setSchema({...schema,description:e.target.value})}}/>
            </div>
            <div className="addSchemaBtn">
                <button className="addSchemaButton" onClick={handleUpdateSchema}>Update Schema</button>
            </div>
        </div>
    )
}

export default UpdateSchema;
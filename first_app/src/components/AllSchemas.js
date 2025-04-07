import React from 'react';
import Schema from './Schema';
import { useState } from 'react';
import base_url from '../api/bootapi';
import axios from 'axios';
import { useEffect } from 'react';
import '../App.css';
import './AllSchema.css';
const AllSchemas = () => {

    const [schemas,setSchemas] = useState([]);

    const getAllSchemasFromServer=() => {
        axios.get(`${base_url}/schemas`)
        .then(
            (response) => {
                setSchemas(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() => {
        getAllSchemasFromServer();
    }, []);

    const removeschemaById = (schemaId) => {
        setSchemas(schemas.filter((schema) => schema.id !== schemaId));
    }

    return (
        <div className='main'>
            <div className='viewSchema'>
            {
                schemas.length>0
                ? schemas.map((schema) => <Schema key={schema.id} schema={schema} update={removeschemaById}/>) 
                : <div className="noSchema">No Schemas Found</div>
            }
            </div>
        </div>
    );
};

export default AllSchemas;
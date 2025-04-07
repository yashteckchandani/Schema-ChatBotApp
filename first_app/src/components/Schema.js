import React from 'react';
import './Schema.css';
import base_url from '../api/bootapi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Schema = ({schema,update}) => {

    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate('/update-schema', { state: { schema : schema } });
    }

    const deleteSchema = (schemaId) => {
        axios.delete(`${base_url}/schemas/${schemaId}`)
        .then(
            (response) => {
                update(schemaId);
                console.log(response.data);
                window.location.reload();
            },
            (error) => {
                console.log(error);
            }
        )
    }

    return(
        <div className="schema">
            <div className="schemaTitle1">{schema.title}</div>
            <div className="schemaOptions">
                <button className="schemaUpdate" onClick={handleUpdate} >
                    Update                    
                </button>
                <button className="schemaDelete" onClick={()=>deleteSchema(schema.id)}>Delete</button>
            </div>
        </div>
    )

}

export default Schema;
import React from "react";
import './SchemaSelection.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SchemaSelection =  ({schema}) => {

    const navigate = useNavigate();

    const handleChat = () => {
        axios.put('http://localhost:8080/api/chat', {
            prompt: schema.description, // Send the value from the input field as 'prompt'
          });

        navigate('/', { state: { schema : schema } });
    }

    return (
        <div className="schemaSelection">
            <button className="schemaSelectbtn" onClick={handleChat}>
                {schema.title}
            </button>
        </div>
    )
}

export default SchemaSelection;
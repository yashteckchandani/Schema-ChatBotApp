import React from "react";
import { useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import { useEffect } from "react";
import SchemaSelection from "./SchemaSelection";
import './AllSchemaSelection.css';

const AllSchemaSelection = () => {

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

    return (
        <div className="allschemaSelection">
             {
                schemas.length>0
                ? schemas.map((schema) => <SchemaSelection key={schema.id} schema={schema} />) 
                : <div className="noSchema">No Schemas Found</div>
            }
        </div>

    )

}

export default AllSchemaSelection;
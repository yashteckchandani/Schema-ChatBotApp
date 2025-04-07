package com.springboot.chatapp.service;

import com.springboot.chatapp.entities.SchemaData;
import com.springboot.chatapp.repository.SchemaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchemaService {

    @Autowired
    private SchemaRepo schemaRepo;

    public List<SchemaData> getSchemas(){
        return this.schemaRepo.findAll();
    }

    public SchemaData getSchema(int schemeId){
        return this.schemaRepo.getReferenceById(schemeId);
    }

    public SchemaData addSchema(SchemaData schemaData){
         this.schemaRepo.save(schemaData);
         return schemaData;
    }

    public SchemaData updateSchema(SchemaData schemaData){
        this.schemaRepo.save(schemaData);
        return schemaData;
    }

    public void deleteSchema(int schemaId){
        this.schemaRepo.delete(getSchema(schemaId));
    }

}

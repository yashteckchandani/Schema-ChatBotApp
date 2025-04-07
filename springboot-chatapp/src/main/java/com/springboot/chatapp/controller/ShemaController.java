package com.springboot.chatapp.controller;

import com.springboot.chatapp.entities.SchemaData;
import com.springboot.chatapp.service.SchemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schemas")
@CrossOrigin(origins = "http://localhost:3000")
public class ShemaController {

    @Autowired
    private SchemaService schemaService;

    @GetMapping
    public List<SchemaData> getSchemas(){
        return this.schemaService.getSchemas();
    }

    @GetMapping("/{schemaId}")
    public SchemaData getSchema(@PathVariable int schemaId){
        return this.schemaService.getSchema(schemaId);
    }

    @PostMapping()
    public SchemaData addSchema(@RequestBody SchemaData schemaData){
        return this.schemaService.addSchema(schemaData);
    }

    @PutMapping
    public SchemaData updateSchema(@RequestBody SchemaData schemaData){
        return this.schemaService.updateSchema(schemaData);
    }

    @DeleteMapping("/{schemaId}")
    public ResponseEntity<HttpStatus> deleteSchema(@PathVariable int schemaId){
        try{
            this.schemaService.deleteSchema(schemaId);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

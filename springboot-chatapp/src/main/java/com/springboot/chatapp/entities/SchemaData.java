package com.springboot.chatapp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class SchemaData{
    @Id
    public int id;
    public String title;
    public String description;

    public SchemaData() {
    }

    public SchemaData(int id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

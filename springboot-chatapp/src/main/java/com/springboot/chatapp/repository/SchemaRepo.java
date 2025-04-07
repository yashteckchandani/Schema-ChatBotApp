package com.springboot.chatapp.repository;

import com.springboot.chatapp.entities.SchemaData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SchemaRepo extends JpaRepository<SchemaData, Integer> {
}

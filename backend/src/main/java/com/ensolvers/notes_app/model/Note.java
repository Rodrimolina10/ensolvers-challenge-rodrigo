package com.ensolvers.notes_app.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.HashSet;
import java.util.Set;

@Entity // Indica que esto es una tabla en la DB
@Data   // Crea los getters y setters (gracias a Lombok)
public class Note {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    
    @Column(length = 1000)
    private String content;
    
    private boolean archived = false;

    // Esto es para la Fase 2 (Categorías/Tags)
    @ElementCollection
    private Set<String> categories = new HashSet<>();
}
package com.ensolvers.notes_app.repository;

import com.ensolvers.notes_app.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    // Esto sirve para filtrar las notas: las que están en el tacho (archived) y las que no.
    List<Note> findByArchived(boolean archived);
}
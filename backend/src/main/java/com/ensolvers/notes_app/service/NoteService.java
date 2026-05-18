package com.ensolvers.notes_app.service;

import com.ensolvers.notes_app.model.Note;
import com.ensolvers.notes_app.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NoteService {

    @Autowired
    private NoteRepository repository;

    public List<Note> getActiveNotes() {
        return repository.findByArchived(false);
    }

    public List<Note> getArchivedNotes() {
        return repository.findByArchived(true);
    }

    public Note saveNote(Note note) {
        return repository.save(note);
    }

    public void deleteNote(Long id) {
        repository.deleteById(id);
    }

    public Note getNoteById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
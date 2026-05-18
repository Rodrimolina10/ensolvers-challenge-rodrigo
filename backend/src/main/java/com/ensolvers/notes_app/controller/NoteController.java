package com.ensolvers.notes_app.controller;

import com.ensolvers.notes_app.model.Note;
import com.ensolvers.notes_app.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*") 
public class NoteController {

    @Autowired
    private NoteService service;

    @GetMapping("/active")
    public List<Note> getActive() {
        return service.getActiveNotes();
    }

    @GetMapping("/archived")
    public List<Note> getArchived() {
        return service.getArchivedNotes();
    }

    @PostMapping
    public Note create(@RequestBody Note note) {
        return service.saveNote(note);
    }

    @PutMapping("/{id}")
    public Note update(@PathVariable Long id, @RequestBody Note note) {
        Note existing = service.getNoteById(id);
        if (existing != null) {
            existing.setTitle(note.getTitle());
            existing.setContent(note.getContent());
            existing.setArchived(note.isArchived());
            existing.setCategories(note.getCategories());
            return service.saveNote(existing);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteNote(id);
    }
}
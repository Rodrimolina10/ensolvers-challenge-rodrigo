import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Plus } from 'lucide-react';

const API_URL = "http://localhost:8080/api/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Cargar notas al iniciar
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get(`${API_URL}/active`);
      setNotes(res.data);
    } catch (err) {
      console.error("Error: ¿Está el backend prendido?", err);
    }
  };

  const addNote = async (e) => {
    e.preventDefault();
    if (!title || !content) return;
    try {
      await axios.post(API_URL, { title, content, archived: false });
      setTitle(''); setContent('');
      fetchNotes();
    } catch (err) {
      alert("Error al guardar. Revisá que el servidor Java esté corriendo.");
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchNotes();
    } catch (err) {
      console.error("Error al borrar", err);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#1a73e8' }}>📝 Mis Notas - Rodrigo</h1>
      
      <form onSubmit={addNote} style={{ maxWidth: '500px', margin: '0 auto 30px', background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} style={{ display: 'block', marginBottom: '10px', width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
        <textarea placeholder="Contenido de la nota..." value={content} onChange={(e) => setContent(e.target.value)} style={{ display: 'block', marginBottom: '10px', width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', height: '100px' }} />
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Plus size={20}/> Guardar Nota
        </button>
      </form>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {notes.map(note => (
          <div key={note.id} style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', position: 'relative', borderLeft: '5px solid #1a73e8' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{note.title}</h3>
            <p style={{ color: '#555' }}>{note.content}</p>
            <button onClick={() => deleteNote(note.id)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer' }}>
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
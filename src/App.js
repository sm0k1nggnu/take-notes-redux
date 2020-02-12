import React, {useState} from 'react';
import NoteTable from './tables/NoteTable';
import AddNoteForm from './forms/AddNoteForm'
import EditNoteForm from './forms/EditNoteForm'

const App = () => {
  const Notes = [
    {id: 1, title: 'A Note', content: 'Content of first note.'},
    {id: 2, title: 'Another Note', content: 'Content of second note.'},
    {id: 3, title: 'A Third Note', content: 'Content of third note.'},
  ]
  const initialFormState = { id: null, title: '', content: '' }

  const [notes, setNotes] = useState(Notes)
  const [editing, setEditing] = useState(false)
  const [currentNote, setCurrentNote] = useState(initialFormState)

  const addNote = (note) => {
    //note.id = notes.length + 1
    setNotes([...notes, note])
  }
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }
  const editRow = (note) => {
    //setNotes(notes.filter(note => note.id !== id))
    setEditing(true)
    setCurrentNote({id: note.id, title: note.title, content: note.content})
  }
  const updateNote = (id, updatedNote) => {
    setEditing(false)
    setNotes(notes.map(
      note => (note.id === id ? updatedNote : note)
    ))
  }

  return (
    <div className="container">
      <h1>Take some notes</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>{editing ? 'Edit' : 'Add'}  note</h2>
          {editing ? (
            <EditNoteForm
            editing={editing}
            setEditing={setEditing}
            currentNote={currentNote}
            updateNote={updateNote}
          />
          ) : (
            <AddNoteForm addNote={addNote}/>
          )}
        </div>
        <div className="flex-large">
          <h2>View notes</h2>
          <NoteTable
            notes={notes}
            deleteNote={deleteNote}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
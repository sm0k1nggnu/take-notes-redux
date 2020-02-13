import React, {useState} from 'react';
import { createStore } from 'redux';
import NoteTable from './tables/NoteTable';
import AddNoteForm from './forms/AddNoteForm';
import EditNoteForm from './forms/EditNoteForm';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {add_note, delete_note, edit_note } from './actions/actions';

const Notes = [
  {id: 1, title: 'A Note', content: 'Content of first note.'},
  {id: 2, title: 'Another Note', content: 'Content of second note.'},
  {id: 3, title: 'A Third Note', content: 'Content of third note.'},
]

const initialState = {
  ...Notes
};

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'ADD_NOTE': {
      return {
        state
      }
    }
    case 'DELETE_NOTE': {
      return {
        state
      }
    }
    case 'EDIT_NOTE': {
      return {
        state
      }
    }
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({ type: "ADD_NOTE" });
store.dispatch({ type: "ADD_NOTE" });
store.dispatch({ type: "DELETE_NOTE" });
store.dispatch({ type: "EDIT_NOTE" });

const App = () => {
  const initialFormState = { id: null, title: '', content: '' }
  const editing = false;

  // const [notes, setNotes] = useState(Notes)
  // const [editing, setEditing] = useState(false)
  // const [currentNote, setCurrentNote] = useState(initialFormState)

  const addNote = (note) => {
    // note.id = notes[notes.length-1].id + 1//take last entry, get id, add 1
    // setNotes([...notes, note])
    this.props.add_note();
  }
  const deleteNote = (id) => {
    //setNotes(notes.filter(note => note.id !== id))
    this.props.delete_note();
  }
  const editRow = (note) => {
    //setNotes(notes.filter(note => note.id !== id))
    // setEditing(true)
    // setCurrentNote({id: note.id, title: note.title, content: note.content})
    this.props.edit_note();
  }
  const updateNote = (id, updatedNote) => {
    // setEditing(false)
    // setNotes(notes.map(
    //   note => (note.id === id ? updatedNote : note)
    // ))
    //this.props.dispatch({ type: "UPDATE_NOTE" });
  }

  return (
    <Provider store={store}>
    <App />
    </Provider>
  )
}

function mapStateToProps(state) {
  return {
    notes: state.Notes
  };
}

const mapDispatchToProps = {
  add_note,
  delete_note,
  edit_note
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
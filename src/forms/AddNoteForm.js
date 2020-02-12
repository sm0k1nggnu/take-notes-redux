import React,{useState} from 'react';

const AddNoteForm = (props) => {
  const initialFormState = {
    id: null,
    title: '',
    content: ''
  }
  const [note, setNote] = useState(initialFormState)
  const handleInputChange = event => {
    console.log(event)
    const {name, value} = event.target
    setNote({...note, [name]:value})
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!note.title || !note.content) return
        props.addNote(note)
        setNote(initialFormState)
      }}
    >
      <label>Titel</label>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={ handleInputChange}
      />
      <label>Note</label>
      <input
        type="text"
        name="content"
        value={note.content}
        onChange={ handleInputChange}
      />
      <button>Add Note</button>
    </form>
  )
}

export default AddNoteForm;
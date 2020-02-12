import React,{useState} from 'react';

const EditNoteForm = (props) => {
  console.log(props)
  const [note, setNote] = useState(props.currentNote)
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setNote({ ...note, [name]: value })
  }
  return (
    <form
    onSubmit={event => {
      event.preventDefault()
      props.updateNote(note)
    }}
  >
    <label>Title</label>
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
    <button
      onClick={() => props.setEditing(false)}
      className="button muted-button"
    >Cancel</button>
  </form>
  )
}

export default EditNoteForm;
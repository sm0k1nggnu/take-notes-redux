import React from 'react';

const NoteTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Note</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.notes.length > 0 ? (
      props.notes.map(note => (
        <tr key={note.id}>
          <td>{note.id}</td>
          <td>{note.title}</td>
          <td>{note.content}</td>
          <td>
            <button
              className="button muted-button"
              onClick={() => props.editRow(note)}
            >Edit</button>
            <button
              className="button muted-button"
              onClick={() => props.deleteNote(note.id)}
            >Delete</button>
          </td>
        </tr>
      ))
      ) : (
        <tr>
          <td colSpan={3}>No notes</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default NoteTable;
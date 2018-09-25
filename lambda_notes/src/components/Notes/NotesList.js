import React from 'react';

const NotesList = props => {
  return (
    <div>
      <h3>Notes:</h3>
      {console.log(`NOTES LIST: `, props)}
      {props.notes.map(note => (
        <div className="noteBox" key={note._id}>
          <p>{note._id}</p>
          <p>{note.title}</p>
          <p>{note.textBody}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesList;

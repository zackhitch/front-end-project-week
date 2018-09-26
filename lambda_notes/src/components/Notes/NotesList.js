import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const NoteBox = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid black;
  margin: 10px;
  background-color: white;
`;

const NotesList = props => {
  return (
    <div>
      <h3>Notes:</h3>
      {console.log(`NOTES LIST: `, props)}
      {props.notes.map(note => (
        <NoteBox
          className="noteBox"
          key={note._id}
          onClick={() => props.history.push(`/notes/${note._id}`)}
        >
          <p>{note.title}</p>
          <p>{note.textBody}</p>
        </NoteBox>
      ))}
    </div>
  );
};

export default withRouter(NotesList);

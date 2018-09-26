import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getNotes, deleteNote, setNoteToPut } from '../actions';
import Note from '../components/Note/Note';

class NoteView extends Component {
  componentDidMount() {
    if (this.props.notes.length === 0) {
      this.props.getNotes();
    }
  }
  handleDeleteNote = noteId => {
    this.props.deleteNote(noteId);
    this.props.history.push('/notes');
  };

  goToUpdateNoteForm = (e, id) => {
    e.preventDefault();
    this.props.setNoteToPut(id);
    this.props.history.push('/notes/add');
  };

  render() {
    return (
      <Note
        {...this.props}
        notes={this.props.notes}
        isLoading={this.props.isLoading}
        handleDeleteNote={this.handleDeleteNote}
        goToUpdateNoteForm={this.goToUpdateNoteForm}
      />
    );
  }
}

const mapStateToProps = state => {
  const { notesReducer } = state;
  return {
    notes: notesReducer.notes,
    isLoading: notesReducer.isLoading,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes, deleteNote, setNoteToPut }
  )(NoteView)
);

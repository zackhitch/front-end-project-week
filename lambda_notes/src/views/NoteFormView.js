import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { postNote, putNote } from '../actions';
import NoteForm from '../components/NoteForm/NoteForm';

const NoteFormContainer = styled.div`
  width: 83.7%;
  border: 2px dashed red;
  float: right;
`;

class NoteFormView extends Component {
  state = {
    note: {
      title: '',
      textBody: '',
    },
    isUpdating: false,
  };

  componentDidMount() {
    if (this.props.noteToUpdate) {
      this.setState({ isUpdating: true, note: this.props.noteToUpdate });
    }
  }

  handleChange = e => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value },
    });
  };

  handleAddNewNote = e => {
    e.preventDefault();
    this.props.postNote(this.state.note);
    this.props.history.push('/');
  };

  handleUpdateNote = () => {
    this.props.putNote(this.state.note);
    this.props.history.push('/');
  };

  render() {
    return (
      <NoteFormContainer>
        <NoteForm
          {...this.props}
          note={this.state.note}
          handleChange={this.handleChange}
          handleAddNewNote={this.handleAddNewNote}
          handleUpdateNote={this.handleUpdateNote}
          isUpdating={this.state.isUpdating}
        />
      </NoteFormContainer>
    );
  }
}

const mapStateToProps = state => {
  const { notesReducer } = state;
  return {
    noteToUpdate: notesReducer.noteToUpdate,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { postNote, putNote }
  )(NoteFormView)
);

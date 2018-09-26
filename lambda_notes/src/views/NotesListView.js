import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { getNotes } from '../actions';
import NotesList from '../components/Notes/NotesList';

const NotesListContainer = styled.div`
  width: 83.99%;
  border: 2px dashed red;
  float: right;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #f2f1f2;
`;

class NotesListView extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  // componentDidUpdate() {
  //   this.props.getNotes();
  // }

  render() {
    return (
      <NotesListContainer>
        <NotesList {...this.props} />
      </NotesListContainer>
    );
  }
}

const mapStateToProps = state => {
  const { notesReducer } = state;
  return {
    notes: notesReducer.notes,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes }
  )(NotesListView)
);

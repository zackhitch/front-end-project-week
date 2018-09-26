import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class Note extends Component {
  state = {
    note: {},
  };
  componentDidMount() {
    const note = this.props.notes.find(
      note => note._id === this.props.match.params.id
    );
    this.setState({ note });
  }

  handleDelete = () => {
    this.props.handleDeleteNote(this.state.note._id);
    this.props.history.push('/notes');
  };

  render() {
    return (
      <Fragment>
        <button
          onClick={e => {
            e.preventDefault();
            this.props.goToUpdateNoteForm(e, this.state.note._id);
          }}
        >
          Edit
        </button>
        <button onClick={this.handleDelete}>Delete</button>
        {console.log(`STATE: `, this.state)}
        <h1>{this.state.note.title}</h1>
        <h4>{this.state.note.textBody}</h4>
      </Fragment>
    );
  }
}

export default withRouter(Note);

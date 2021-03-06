import React, { Component } from 'react';
import axios from 'axios';
import './ListNotes.css';
import { Link } from 'react-router-dom';

class ListNotes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://peaceful-gorge-48893.herokuapp.com/api/notes/' +
          localStorage.id,
        {
          headers: {
            Authorization: localStorage.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then(response => {
        console.log(response);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log({ Error: `Unable to get notes`, err });
      });
  }

  render() {
    return (
      <div className="mainDiv">
        <h6 className="notesListHeader">Your Notes:</h6>
        <div className="notesGrid">
          {this.state.notes.map(note => {
            return (
              <div className="noteThumbnail" key={note._id}>
                <Link
                  to={{
                    pathname: `/notes/${note._id}`,
                    state: { currentNote: note },
                  }}
                >
                  <div>
                    <div className="noteTitle">{note.title}</div>
                    <hr />
                    <div className="noteContent">{note.content}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListNotes;

import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import Navigation from '../Navigation/Navigation';
import NotesListView from '../../views/NotesListView';
import NoteFormView from '../../views/NoteFormView';
import NoteView from '../../views/NoteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navCol">
          <Navigation />
        </div>
        <Route exact path="/notes" component={NotesListView} />
        <Route exact path="/notes/add" component={NoteFormView} />
        <Route exact path="/notes/:id" component={NoteView} />
      </div>
    );
  }
}

export default withRouter(App);

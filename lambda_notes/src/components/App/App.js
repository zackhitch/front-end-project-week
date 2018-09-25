import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import Navigation from '../Navigation/Navigation';
import NotesListView from '../../views/NotesListView';
import NoteFormView from '../../views/NoteFormView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navCol">
          <Navigation />
        </div>
        <Route exact path="/" component={NotesListView} />
        <Route path="/add" component={NoteFormView} />
      </div>
    );
  }
}

export default withRouter(App);

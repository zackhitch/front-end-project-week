import axios from 'axios';

export const GET_NOTES_START = 'GET_NOTES_START';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';

export const GET_SINGLE_NOTE_START = 'GET_SINGLE_NOTE_START';
export const GET_SINGLE_NOTE_SUCCESS = 'GET_SINGLE_NOTE_SUCCESS';
export const GET_SINGLE_NOTE_ERROR = 'GET_SINGLE_NOTE_ERROR';

export const POST_NOTE_START = 'POST_NOTE_START';
export const POST_NOTE_SUCCESS = 'POST_NOTE_SUCCESS';
export const POST_NOTE_ERROR = 'POST_NOTE_ERROR';

export const SET_NOTE_TO_PUT = 'SET_NOTE_TO_PUT';

export const PUT_NOTE_START = 'PUT_NOTE_START';
export const PUT_NOTE_SUCCESS = 'PUT_NOTE_SUCCESS';
export const PUT_NOTE_ERROR = 'PUT_NOTE_ERROR';

export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_ERROR = 'DELETE_NOTE_ERROR';

export const getNotes = () => dispatch => {
  dispatch({ type: GET_NOTES_START });

  axios
    .get(`https://killer-notes.herokuapp.com/note/get/all`)
    .then(response => {
      console.log(`GET RESPONSE DATA: `, response.data);
      dispatch({ type: GET_NOTES_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: GET_NOTES_ERROR, payload: err });
    });
};

export const getSingleNote = noteId => dispatch => {
  dispatch({ type: GET_SINGLE_NOTE_START });

  axios
    .get(`https://killer-notes.herokuapp.com/note/get/${noteId}`)
    .then(response => {
      dispatch({ type: GET_SINGLE_NOTE_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: GET_SINGLE_NOTE_ERROR, payload: err });
    });
};

export const postNote = note => dispatch => {
  dispatch({ type: POST_NOTE_START });

  axios
    .post(`https://killer-notes.herokuapp.com/note/create`, note)
    .then(response => {
      console.log(`POST RESPONSE DATA: `, response.data);
      const newNote = {
        _id: response.data.success,
        title: note.title,
        textBody: note.textBody,
      };
      dispatch({ type: POST_NOTE_SUCCESS, payload: newNote });
    })
    .catch(err => {
      dispatch({ type: POST_NOTE_ERROR, payload: err });
    });
};

export const setNoteToPut = id => {
  return {
    type: SET_NOTE_TO_PUT,
    payload: id,
  };
};

export const putNote = note => dispatch => {
  dispatch({ type: PUT_NOTE_START });

  axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
    .then(response => {
      dispatch({ type: PUT_NOTE_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: PUT_NOTE_ERROR, payload: err });
    });
};

export const deleteNote = noteId => dispatch => {
  dispatch({ type: DELETE_NOTE_START });

  axios
    .delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
    .then(response => {
      dispatch({ type: DELETE_NOTE_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_NOTE_ERROR, payload: err });
    });
};

import * as actionTypes from '../actions';

const initialState = {
  notes: [],
  note: {},
  isLoading: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: '',
  noteToUpdate: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NOTES_START:
      return { ...state, isLoading: true };
    case actionTypes.GET_NOTES_SUCCESS:
      return { ...state, isLoading: false, notes: action.payload };
    case actionTypes.GET_NOTES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case actionTypes.GET_SINGLE_NOTE_START:
      return { ...state, isLoading: true };
    case actionTypes.GET_SINGLE_NOTE_SUCCESS:
      return { ...state, isLoading: false, note: action.payload };
    case actionTypes.GET_SINGLE_NOTE_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case actionTypes.POST_NOTE_START:
      return { ...state, isAdding: true };
    case actionTypes.POST_NOTE_SUCCESS:
      return { ...state, isAdding: false, notes: action.payload };
    case actionTypes.POST_NOTE_ERROR:
      return { ...state, isAdding: false, error: action.payload };
    case actionTypes.PUT_NOTE_START:
      return { ...state, isUpdating: true };
    case actionTypes.PUT_NOTE_SUCCESS:
      return { ...state, isUpdating: false, notes: action.payload };
    case actionTypes.PUT_NOTE_ERROR:
      return { ...state, isUpdating: false, error: action.payload };
    case actionTypes.DELETE_NOTE_START:
      return { ...state, isDeleting: true };
    case actionTypes.DELETE_NOTE_SUCCESS:
      return { ...state, isDeleting: false, notes: action.payload };
    case actionTypes.DELETE_NOTE_ERROR:
      return { ...state, isDeleting: false, error: action.payload };
    default:
      return state;
  }
};

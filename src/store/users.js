import {createSlice} from "@reduxjs/toolkit";
import {api} from '../api/index';

const slice = createSlice({
  name: 'users',
  initialState: {
    users:[],
    isLoading: false,
    error: false,
  },
  reducers: {
    usersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
export default slice.reducer;


// Actions:
const { usersSuccess, startLoading, hasError } = slice.actions;
export const fetchUsers = () => async dispatch => {
  dispatch(startLoading());
  try {
    await api.get('/users')
      .then(response => {
        dispatch(usersSuccess(response.data));
      });
  } catch (e) {
    //return console.error(e.message);
    dispatch(hasError(e.message));
  }
};

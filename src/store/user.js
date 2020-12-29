import { createSlice } from "@reduxjs/toolkit";

const KEY_STORAGE = "user";


// init data:
const initialUser = localStorage.getItem(KEY_STORAGE) ? JSON.parse(localStorage.getItem(KEY_STORAGE)) : null;



// ---- Slice ----------------------
const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(KEY_STORAGE, JSON.stringify(state.user));
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      localStorage.removeItem(KEY_STORAGE);
    }
  }
});
export default slice.reducer;


// ---- Actions ----------------------
const { loginSuccess, logoutSuccess } = slice.actions;

export const login = ({username, password}) => async dispatch => {
  try {
    dispatch(loginSuccess({username}));
  } catch (e) {
    return console.error(e.message);
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch(logoutSuccess());

  } catch (e) {
    return console.error(e.message);
  }
};


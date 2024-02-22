import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
  },
});

export const {addUser} = usersSlice.actions;

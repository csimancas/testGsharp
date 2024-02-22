import {Action, ThunkAction} from '@reduxjs/toolkit';
import {addUser} from './usersSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
};

const storeUsers = async (value: User) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('users', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const addUserData =
  (user: User): ThunkAction<void, any, unknown, Action<string>> =>
  async (dispatch, getState) => {
    try {
      await storeUsers([]);
      const state = getState();
      const userArray = [...state.users.users, user];
      await storeUsers(userArray);
      dispatch(addUser(userArray));
    } catch (error) {
      console.log(error);
    }
  };

import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUserData} from '../../redux/users/thunks';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useHome = () => {
  const dispatch: any = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('users');
        const data = jsonValue != null ? JSON.parse(jsonValue) : [];
        dispatch(addUserData(data));
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [dispatch]);

  const cleanFields = () => {
    setFullName('');
    setEmail('');
    setPhone('');
  };

  const handleAddUser = () => {
    const regex = /\S+@\S+\.\S+/;
    if (fullName === '' || email === '' || phone === '') {
      Alert.alert('Todos los campos son requeridos');
      return;
    } else if (!regex.test(email)) {
      Alert.alert('Ingresa un correo válido');
      return;
    } else if (phone.length < 10) {
      Alert.alert('Ingresa un número de teléfono válido');
      return;
    }
    const user = {
      id: Math.random().toString(),
      fullName,
      email,
      phone,
    };
    dispatch(addUserData(user));
    cleanFields();
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    handleAddUser,
  };
};

export default useHome;

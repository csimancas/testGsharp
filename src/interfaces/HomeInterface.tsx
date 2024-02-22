import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import useHome from '../hooks/useHome';

import Button from '../components/Button';
import Input from '../components/Input';

const HomeInterface = () => {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    handleAddUser,
  } = useHome();
  return (
    <View style={styles.container}>
      <Text>Agregar nuevo usuario</Text>
      <Input
        inputValue={fullName}
        setInputValue={text => setFullName(text)}
        placeholder="Nombre completo"
        secureTextEntry={false}
      />
      <Input
        inputValue={email}
        setInputValue={text => setEmail(text)}
        placeholder="Ingresa tu correo"
        secureTextEntry={false}
      />
      <Input
        inputValue={phone}
        setInputValue={text => setPhone(text)}
        placeholder="Telefono"
        secureTextEntry={false}
      />
      <Button title="Agregar usuario" onPress={() => handleAddUser()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
export default HomeInterface;

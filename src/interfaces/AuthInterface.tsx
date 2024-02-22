import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import useLoguin from '../hooks/useLoguin';
import Input from '../components/Input';
import Button from '../components/Button';

const AuthInterface = () => {
  const {email, setEmail, password, setPassword, handleLoguin} = useLoguin();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.image}
      />

      <View style={styles.inputContainer}>
        <Input
          inputValue={email}
          setInputValue={text => setEmail(text)}
          placeholder="Ingresa tu correo"
          secureTextEntry={false}
        />
        <Input
          inputValue={password}
          setInputValue={text => setPassword(text)}
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
        />
        <Button title="Iniciar sesión" onPress={handleLoguin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  inputContainer: {
    paddingHorizontal: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: 30,
    borderRadius: 100,
  },
});

export default AuthInterface;

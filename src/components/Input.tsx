import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type CustomTextInputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
};

const CustomTextInput = ({
  placeholder,
  secureTextEntry,
  inputValue,
  setInputValue,
}: CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    marginTop: 15,
    marginBottom: 30,
  },
  input: {
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default CustomTextInput;

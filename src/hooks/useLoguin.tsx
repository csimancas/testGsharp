import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const useLoguin = () => {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('jose.cuetos31@gmail.com');
  const [password, setPassword] = useState('test1234');

  const users = [
    {
      email: 'jose.cuetos31@gmail.com',
      password: 'test1234',
    },
  ];

  const handleLoguin = () => {
    if (email !== '' && password !== '') {
      const current_user = users.find(user => user.email === email);
      if (current_user) {
        if (current_user.password === password) {
          console.log('Loguin success');
          navigation.navigate('AuthTab');
        } else {
          console.log('Password incorrect');
        }
      } else {
        console.log('User not found');
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLoguin,
  };
};

export default useLoguin;

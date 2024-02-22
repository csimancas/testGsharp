import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

type itemType = {
  item: {
    id: string;
    fullName: string;
    email: string;
    phone: string;
  };
};
const ListInterface = () => {
  const {users} = useSelector((state: any) => state.users);

  const renderItems = ({item}: itemType) => {
    return (
      <View>
        <Text>{item.fullName}</Text>
      </View>
    );
  };

  console.log(users);
  return (
    <View style={styles.container}>
      <Text>Lista de usuarios</Text>
      {users.length === 0 && (
        <Text>Por el momento no cuentas con usuarios</Text>
      )}
      <FlatList
        data={users}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ListInterface;

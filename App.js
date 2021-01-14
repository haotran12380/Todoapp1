import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './Component/Header';
import TodoItem from './Component/TodoItem';
import AddTodo from './Component/AddTodo';

export default function App() {
  const [todos, setTodo] = useState([
    {text: 'Play Tennis', key: '1'},
    {text: 'Go shopping', key: '2'},
    {text: 'Buy coffee', key: '3'},
  ]);

  const pressHanlder = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const sumitHanlder = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodo];
      });
    } else {
      Alert.alert('Opp!!', 'Todo must be over 3 chars long', [
        {text: 'UnderStood', onPress: () => console.log('alert close')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo sumitHanlder={sumitHanlder} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHanlder={pressHanlder} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

import { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AddTodo from './components/addtodo';
import Header from './components/header';
import TodoItem from './components/todoitem';
export default function App() {
  const [todo, setTodo] = useState([]);

  const deleteHandler = (id) => {
    Alert.alert('Success', 'The Todo succesfully Removed');
    setTodo((prevTodo) => {
      return prevTodo.filter((t) => t.key !== id);
    });
  };
  const addHandler = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [{ name: text, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert('Error', 'Todo Character should Be more than 3');
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* header*/}
        <Header />
        <View style={styles.content}>
          {/* todo form */}
          <AddTodo onAdd={addHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} onDelete={deleteHandler} />
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
    //padding: 30,
  },
  content: {
    flex: 1,
    padding: 30,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

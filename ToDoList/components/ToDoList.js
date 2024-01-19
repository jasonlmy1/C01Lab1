import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";

const ToDoList = ({ initialTasks }) => {
  const [toDos, setTasks] = useState(
    initialTasks.map((title) => ({ id: uuidv4(), title }))
  );

  const addToDo = (newTitle) => {
    const newT = { id: uuidv4(), title: newTitle };
    setTasks((prevtoDos) => [...prevtoDos, newT]);
  };

  const removeToDo = (id) => {
    setTasks((prevtoDos) => prevtoDos.filter((toDo) => toDo.id !== id));
  };

  ToDoList.defaultProps = {
    tasks: [],
  };
  return (
    <View style={styles.todoListContainer}>
      {toDos.map((toDo) => (
        <View key={toDo.id} style={styles.todoItem}>
          <Text> {toDo.title} </Text>
          <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;

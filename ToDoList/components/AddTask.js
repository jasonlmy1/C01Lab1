import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native"; // Assuming it's a React Native component

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim() !== "") {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <View style={styles.addTodoForm}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(title) => setTitle(title)}
        placeholder="Enter your task"
      />
      <Button onPress={handleAddTask} title="Add Task" />
    </View>
  );
};

const styles = StyleSheet.create({
  addTodoForm: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddTask;

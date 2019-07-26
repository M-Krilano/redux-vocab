import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Header } from "./src/components/common";
import VocabList from "./src/components/VocabList";
import reducers from "./src/reducers";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Header headerText="Redux Terms" />
        <VocabList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

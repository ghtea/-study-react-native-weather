import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>
            hello
        </Text>
      </View>
      <View style={styles.blueView} >

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",

    justifyContent: 'center',
    alignItems: 'center',

  },
  blueView: {
    flex: 3,
    backgroundColor: "blue"
  }
});
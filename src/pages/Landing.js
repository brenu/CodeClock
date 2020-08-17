import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export default function Landing() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Never forget your projects again, because we are going to help you.
      </Text>
      <RectButton style={styles.button}>
        <Text style={styles.buttonText}>Okay</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8801",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    alignSelf: "stretch",
    height: 52,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff8801",
  },
});

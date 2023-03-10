import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.update}>Update</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(223,222,20,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  update: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonWarning;

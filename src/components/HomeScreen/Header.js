import { View, StyleSheet, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 28, color: "#fff" }}>Gif Finder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    backgroundColor: "#365486",
    justifyContent: "flex-end",
    width: "100%",
    height: "12%",
  },
  subContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "1%",
    width: "90%",
  },

  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: 38,
    justifyContent: "center",
    width: "80%",
    backgroundColor: "#F9F9FA",
    borderRadius: 5,
    paddingLeft: "2%",
  },
});

export default Header;

import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Input
        variant="unstyled"
        placeholder="Search"
        size={"xl"}
        value={""}
        _disabled={{
          opacity: 1,
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ fontSize: 18 }}
        InputRightElement={
          <TouchableOpacity>
            <Ionicons
              name={"search-outline"}
              size={22}
              style={{ right: "50%" }}
            />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#F9F9FA",
    borderRadius: 5,
    marginTop: "2%",
  },
});

export default SearchBar;

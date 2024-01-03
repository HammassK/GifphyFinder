import React from "react";
import { Text, FlatList, Image, View, StyleSheet } from "react-native";

const GifList = ({ list }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
      <Image
        source={{ uri: item.images.original.url }}
        style={styles.gifImage}
      />
    </View>
  );

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  gifImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 8,
    borderRadius: 8,
  },
});

export default GifList;

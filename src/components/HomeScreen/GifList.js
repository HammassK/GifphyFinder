import { Skeleton } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, Image, View, StyleSheet, Text } from "react-native";

const GifList = ({ list, loadMore }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
      <Skeleton h="40" isLoaded={isLoaded} style={styles.gifImage}>
        <Image
          source={{ uri: item.images.original.url }}
          style={styles.gifImage}
        />
      </Skeleton>
    </View>
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={() => Math.random().toString(36).substring(7)}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
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

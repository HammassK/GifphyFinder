// screens/HomeScreen.js

import React, { useState, useCallback, useEffect } from "react";
import { Text, FlatList } from "react-native";
import Header from "../../components/HomeScreen/Header";
import MainViewWrapper from "../../components/common/MainViewWrapper";
import SearchBar from "../../components/HomeScreen/SearchBar";
import { getSearchResult } from "../../api/services/search";
import GifList from "../../components/HomeScreen/GifList";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gifList, setGifList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [offset, setOffset] = useState(50);

  const handleGifSearch = useCallback(async () => {
    if (searchQuery.trim() === "") {
      setGifList([]);
      setIsLoaded(false);
      return;
    }

    try {
      const result = await getSearchResult(searchQuery, offset);
      // Add a unique identifier to each item
      const uniqueKeyedList = result?.data.map((item, index) => ({
        ...item,
        uniqueKey: item.id || index,
      }));
      setGifList((prevList) => {
        const newList = [...prevList, ...uniqueKeyedList];
        return newList;
      });
      setIsLoaded(true);
    } catch (err) {
      console.log("===========err=========>", err);
      setGifList([]);
      setIsLoaded(true);
    }
  }, [searchQuery, offset]);

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + 25); // Assuming the limit is 25
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleGifSearch();
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchQuery, handleGifSearch, offset]);

  return (
    <MainViewWrapper>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {!isLoaded && gifList?.length === 0 && (
        <Text style={{ marginTop: "5%", fontSize: 18 }}>
          Please Search Your Gif
        </Text>
      )}

      {isLoaded && gifList?.length > 0 && (
        <GifList list={gifList} loadMore={loadMore} />
      )}
    </MainViewWrapper>
  );
};

export default HomeScreen;

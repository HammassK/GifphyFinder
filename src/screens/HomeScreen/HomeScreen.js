// screens/HomeScreen.js

import React, { useState, useCallback, useEffect } from "react";
import { Text, FlatList } from "react-native";
import Header from "../../components/HomeScreen/Header";
import MainViewWrapper from "../../components/common/MainViewWrapper";
import SearchBar from "../../components/HomeScreen/SearchBar";
import { getSearchResult } from "../../api/services/search";
import GifList from "../../components/HomeScreen/GifList";
import { useDispatch, useSelector } from "react-redux";

import { gifAction } from "../../store/GifSlice";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [offset, setOffset] = useState(50);

  const dispatch = useDispatch();
  const gifList = useSelector((state) => state.gif.gifList); // assuming the slice is named 'gif'

  const handleGifSearch = useCallback(async () => {
    if (searchQuery.trim() === "") {
      dispatch(gifAction.setGifList([])); // Dispatch an empty array in case of an error
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

      dispatch(gifAction.setGifList([...gifList, ...uniqueKeyedList])); // Dispatch the updated list

      setIsLoaded(true);
    } catch (err) {
      dispatch(gifAction.setGifList([])); // Dispatch an empty array in case of an error
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

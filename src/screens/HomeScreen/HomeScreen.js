import React, { useState, useCallback, useEffect } from "react";
import { Text } from "react-native";
import Header from "../../components/HomeScreen/Header";
import MainViewWrapper from "../../components/common/MainViewWrapper";
import SearchBar from "../../components/HomeScreen/SearchBar";
import { getSearchResult } from "../../api/services/search";
import GifList from "../../components/HomeScreen/GifList";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gifList, setGifList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleGifSearch = useCallback(async () => {
    if (searchQuery.trim() === "") {
      // If the search query is empty, you may want to handle it accordingly
      setGifList([]);
      setIsLoaded(false);
      return;
    }

    try {
      const result = await getSearchResult(searchQuery);
      setGifList(result?.data); // Assuming the API response contains the list of gifs
      setIsLoaded(true);
    } catch (err) {
      console.log("===========err=========>", err);
      setGifList([]);
      setIsLoaded(true);
    }
  }, [searchQuery]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleGifSearch();
    }, 300); // Adjust the debounce delay as needed

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchQuery, handleGifSearch]);

  return (
    <MainViewWrapper>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {!isLoaded && gifList?.length === 0 && (
        <Text style={{ marginTop: "5%", fontSize: 18 }}>
          Please Search Your Gif
        </Text>
      )}

      {isLoaded && gifList?.length > 0 && <GifList list={gifList} />}

      {/* Render your gif list or other components based on the API response */}
    </MainViewWrapper>
  );
};

export default HomeScreen;

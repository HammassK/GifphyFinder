import React from "react";

import Header from "../../components/HomeScreen/Header";
import MainViewWrapper from "../../components/common/MainViewWrapper";
import SearchBar from "../../components/HomeScreen/SearchBar";

const HomeScreen = () => {
  return (
    <MainViewWrapper>
      <Header />

      <SearchBar />
    </MainViewWrapper>
  );
};

export default HomeScreen;

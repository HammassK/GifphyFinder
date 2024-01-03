import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainViewWrapper = ({ children, bgColor }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        width: "100%",
        flex: 1,
        // paddingTop: insets.top,
        backgroundColor: "#DCF2F1",
      }}
    >
      {children}
    </View>
  );
};

MainViewWrapper.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.any,
};

export default MainViewWrapper;

import PropTypes from "prop-types";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home-Screen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

HomeNavigator.propTypes = {
  email: PropTypes.string,
  isCompleted: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  isVerified: PropTypes.bool,
};

export default HomeNavigator;

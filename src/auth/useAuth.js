import { useContext } from "react";

import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (data) => {
    setUser(data["user"]);
    authStorage.storeToken(data["auth_token"]);
  };

  const addToken = (data) => {
    authStorage.storeToken(data["auth_token"]);
  };
  const signUp = (data) => {
    setUser(data.data.attributes);
    authStorage.storeToken(data["auth_token"]);
  };

  const saveCrendentials = ({ email, password, id, name }) => {
    authStorage.storeCredentials({ email, password, id, name });
  };

  const getCrendentials = async () => {
    return await authStorage.getCredentials();
  };

  const saveBiometricData = ({ email, password }) => {
    authStorage.storeBioMetricData({ email, password });
  };
  const getBioMetricData = async () => {
    return await authStorage.getBioMetricData();
  };

  const setIsBioEnabled = (value) => {
    authStorage.setIsBioEnabled(value);
  };
  const getIsBioEnabled = async () => {
    return await authStorage.getIsBioEnabled();
  };

  const logOut = () => {
    authStorage.removeToken();
    authStorage.removeCredentials();
    setUser({ name: "Guest" });
  };

  return {
    user,
    logIn,
    signUp,
    logOut,
    saveCrendentials,
    getCrendentials,
    setIsBioEnabled,
    getIsBioEnabled,
    saveBiometricData,
    getBioMetricData,
    setUser,
    addToken,
  };
};

export default useAuth;

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import UnprotectedRoutes from "./src/Components/Navigation/UnprotectedRoutes";
import { closeSession, validateSesion } from "./src/Components/Utils/Actions";
import { SwicthNavigator } from "./src/Components/Navigation/SwicthNavigator";
import Loading from "./src/Components/Loading";

export default function App() {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  closeSession();

  useEffect(() => {
    setIsLoading(true);
    validateSesion(setUser);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading isVisible={isLoading} text="Loading .... plase wait!" />;
  }
  return user ? <SwicthNavigator /> : <UnprotectedRoutes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

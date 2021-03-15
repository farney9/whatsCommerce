import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../Loading";
import ProtectedRoutes from "../Navigation/ProtectedRoutes";
import AccountStack from "../Navigation/AccountStack";
import {validatePhoneNumber} from "../Utils/Actions"

export default function SwicthNavigator() {
  const [phoneAuth, setPhoneAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    validatePhoneNumber(setPhoneAuth)
    setTimeout(() => {
        setIsLoading(false)

    }, 5000);
  }, [])

  if (isLoading) {
    return (
      <Loading
        isVisible={isLoading}
        text="We're working very Hard .... plase wait!"
      >
        <Text></Text>
      </Loading>
    );
  } else {
      return phoneAuth ? <ProtectedRoutes/> : <AccountStack/>
  }
}

const styles = StyleSheet.create({});

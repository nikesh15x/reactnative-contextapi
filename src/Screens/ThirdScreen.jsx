import { View, Text, TextInput, Button } from "react-native";
import React, { useContext, useState } from "react";
import { ScreenContext1 } from "../context/screenContext";

const ThirdScreen = ({navigation}) => {
  const { phoneNumber, setPhoneNumber} = useContext(ScreenContext1);

  return (
    <View>
      <Text>HomeScreen {phoneNumber}</Text>
      <TextInput onChangeText={(e) => setPhoneNumber(e)} />
      <Button title="next" onPress={()=>navigation.navigate("f")} />
    </View>
  );
}

export default ThirdScreen
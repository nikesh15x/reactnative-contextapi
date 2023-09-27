import { View, Text, TextInput, Button } from "react-native";
import React, { useContext, useState } from "react";
import { ScreenContext1 } from "../context/screenContext";


const HomeScreen = ({ navigation }) => {
  const { firstName, setFirstName } = useContext(ScreenContext1);

  return (
    <View>
      <Text>HomeScreen {firstName}</Text>
      <TextInput onChangeText={(e) => setFirstName(e)} />
      <Button title="next" onPress={()=>navigation.navigate("s")} />
    </View>
  );
};

export default HomeScreen;

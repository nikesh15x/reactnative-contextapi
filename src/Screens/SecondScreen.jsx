import { View, Text, TextInput, Button } from "react-native";
import React, { useContext, useState } from "react";
import { ScreenContext1 } from "../context/screenContext";

const SecondScreen = ({navigation}) => {
  const { lastName, setLastName } = useContext(ScreenContext1);

  return (
    <View>
      <Text>HomeScreen {lastName}</Text>
      <TextInput onChangeText={(e) => setLastName(e)} />
      <Button title="next" onPress={()=>navigation.navigate("t")} />
    </View>
  );
}

export default SecondScreen
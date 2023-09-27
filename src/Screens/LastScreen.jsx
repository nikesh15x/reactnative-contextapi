import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ScreenContext1 } from '../context/screenContext'

const LastScreen = () => {
  const {firstName,lastName,phoneNumber} = useContext(ScreenContext1)

  return (
    <View>
      <Text>Fname is {firstName}</Text>
      <Text>Lname is {lastName}</Text>
      <Text>PhonNo is {phoneNumber}</Text>
    </View>
  )
}

export default LastScreen
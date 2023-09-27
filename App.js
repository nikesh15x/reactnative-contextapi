import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import SecondScreen from './src/Screens/SecondScreen';
import ThirdScreen from './src/Screens/ThirdScreen';
import LastScreen from './src/Screens/LastScreen';
import ScreenProvider from './src/context/screenContext';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ScreenProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="s" component={SecondScreen} />
          <Stack.Screen name="t" component={ThirdScreen} />
          <Stack.Screen name="f" component={LastScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScreenProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

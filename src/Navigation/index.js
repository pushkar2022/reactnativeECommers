import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'
// import Profile from '../screens/Profile/Profile'

const Stack=createNativeStackNavigator()

const index = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator 
    // initialRouteName='Profile'
    screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>


   </NavigationContainer>
  )
}

export default index

const styles = StyleSheet.create({})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theam/GlobalStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Componenets/Header'

const Profile = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:Color.white,}}>
      <Header title={'Home'} navigation={navigation}/>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
      {/* <Image
      source={require('../../Assests/Icon/back.png')}
      /> */}
    </TouchableOpacity>

</View>
  )
}

export default Profile

const styles = StyleSheet.create({})
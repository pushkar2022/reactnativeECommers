import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theam/GlobalStyle'

const index = ({title,back,navigation}) => {
  return (
    <View  style={{flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation?.goBack()}>
        <Image
      source={require('../../Assests/Icon/back.png')}
      />
      </TouchableOpacity>
      <Text
      style={{fontSize:15,fontWeight:800,marginLeft:10}}
      >{title}</Text>

    </View>
  )
}

export default index

const styles = StyleSheet.create({})
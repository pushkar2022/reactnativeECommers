import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theam/GlobalStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Componenets/Header'

const Home = ({navigation}) => {
    // console.log('prof',props)
  return (
    <View style={{flex:1,backgroundColor:Color.white}}>
   
      {/* <Header title={'Profile'} navigation={navigation}/> */}
    

        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Text>Go to About Pages</Text>
        </TouchableOpacity>

        {/* <Icon name="home" size={30} color="#900" />; */}

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
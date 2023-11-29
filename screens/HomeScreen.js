import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ flexDirection:"column", justifyContent:"space-between"}}>
        <View style={{ alignItems:"center"}}>
          <MaterialCommunityIcons name="basketball-hoop-outline" size={200} color="black" />
          <MaterialCommunityIcons name="basketball" size={80} color="orange" />
        </View>
        <View style={{}}>
          <Button style={{ marginTop:50, marginHorizontal:10, backgroundColor:"black"}} mode="contained" onPress={() => navigation.navigate("Score")} >
            Scores
          </Button>

          <Button style={{ marginTop:30, marginHorizontal:10, backgroundColor:"black"}} mode="contained" onPress={() => navigation.navigate("Location")} >
            Where Am I?
          </Button>

          <Button style={{ marginTop:30, marginHorizontal:10, backgroundColor:"black" }} mode="contained" onPress={() => navigation.navigate("About")} >
            About
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
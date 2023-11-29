import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const AboutScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Beautifully Crafted By: Nolan Winter</Text>
        <Text style={styles.text}>Proposal Doc Link: https://docs.google.com/spreadsheets/d/1bR3uGsVsgWixhTOjY1I1EDi0D-B9QHblVRYR6Lue-rc/edit?usp=sharing</Text>
        <Text style={styles.text}>Notes: Yes it is an expo app... I transfered it to a react native app but I didn't know how to generate an apk using react native. Also I was going to make the selfie app and then realized that I don't have a way to test if the camera actually works. So I added a button that shows the user their location. For the apple simulator it defaults to their headquarters.</Text>
      </View>

      <Button style={{ marginVertical:100, marginHorizontal:10 }} icon="clippy" mode="contained" onPress={() => navigation.goBack()} >
          Go Back
        </Button>
    </SafeAreaView>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    text: {
        fontSize:16,
        margin:20,
    }
})
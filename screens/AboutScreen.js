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
        <Text style={styles.text}>Notes: I have it get the current date and then reformat it in order to pass it into the fetch url. However, I don't know when you'll look at it and currently if the game hasnt started there are no stats when you click a game which isn't cool. So I just hard coded a previous date for the check in</Text>
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
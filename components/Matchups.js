import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Matchups = (item) => {
    const navigation = useNavigation();
  return (
    <Pressable style={{ flexDirection:"row", justifyContent:"space-between", margin: 10, borderWidth:2 }} onPress={() => navigation.navigate("Stat", {item: item.item.id})}>
        <View style={styles.gameScore}>
            <Text>{item.item.home_team.abbr}</Text>
            <Text>{item.item.home_team.score}</Text>
        </View>

        <View style={styles.vsTime}>
            <Text>vs</Text>
            {item.item.time === null ? (<Text>N/A</Text>) : (<Text>{item.item.time}</Text>)}
        </View>

        <View style={[styles.gameScore, { marginRight:10}]}>
            <Text>{item.item.visitor_team.abbr}</Text>
            <Text>{item.item.visitor_team.score}</Text>
        </View>
    </Pressable>
  )
}

export default Matchups

const styles = StyleSheet.create({
    gameScore: {
        margin: 3,
        padding:10
    },
    vsTime: {
        margin: 3,
        padding:10
    }
})
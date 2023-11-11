import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Player = (item) => {
  return (
    <View style={{ flexDirection:"row", justifyContent:"space-around", marginTop:20, borderWidth:2}}>
        <View style={{ justifyContent:"center"}}>
            <Text>{item.item.player.first_name}</Text>
            <Text>{item.item.player.last_name}</Text>
        </View>
        <View>
            <View style={{ flexDirection:"row", marginBottom:10}}>
                <Text>min: {item.item.min} </Text>
                <Text>ast: {item.item.ast} </Text>
                <Text>reb: {item.item.reb} </Text>
                <Text>stl: {item.item.stl} </Text>
                <Text>blk: {item.item.blk} </Text>
            </View>
            <View style={{ flexDirection:"row"}}>
                <Text>pts: {item.item.pts} </Text>
                <Text>fg: {item.item.fgm}/{item.item.fga} </Text>
                <Text>3pt: {item.item.fg3m}/{item.item.fg3a} </Text>
                <Text>ft: {item.item.ftm}/{item.item.fta} </Text>
            </View>
        </View>

    </View>
  )
}

export default Player

const styles = StyleSheet.create({})
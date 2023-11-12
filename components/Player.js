import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Player = (item) => {
  return (
    <View style={{ flexDirection:"row", justifyContent:"space-around", marginTop:10, borderWidth:2}}>
        <View style={{ justifyContent:"center", padding:10, width:150}}>
            <Text style={styles.nameText}>{item.item.player.first_name}</Text>
            <Text style={styles.nameText}>{item.item.player.last_name}</Text>
        </View>
        <View style={{margin:10}}>
            <View style={{ flexDirection:"row", marginBottom:10, alignItems:"center"}}>
                <Text style={styles.statsText}>min: {item.item.min} </Text>
                <Text style={styles.statsText}>ast: {item.item.ast} </Text>
                <Text style={styles.statsText}>reb: {item.item.reb} </Text>
                <Text style={styles.statsText}>stl: {item.item.stl} </Text>
                <Text style={styles.statsText}>blk: {item.item.blk} </Text>
            </View>
            <View style={{ flexDirection:"row", alignItems:"center"}}>
                <Text style={styles.statsText}>pts: {item.item.pts} </Text>
                <Text style={styles.statsText}>fg: {item.item.fgm}/{item.item.fga} </Text>
                <Text style={styles.statsText}>3pt: {item.item.fg3m}/{item.item.fg3a} </Text>
                <Text style={styles.statsText}>ft: {item.item.ftm}/{item.item.fta} </Text>
            </View>
        </View>

    </View>
  )
}

export default Player

const styles = StyleSheet.create({
    statsText: {
        fontSize:14,
        fontWeight:"500"
    },
    nameText: {
        fontSize:14,
        fontWeight:"bold"
    }
})
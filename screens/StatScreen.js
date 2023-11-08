import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const StatScreen = () => {
    const navigation = useNavigation();
    const [stats, setStats] = useState([])

    const statsTest = async () => {
        try {
            const response = await fetch("https://www.balldontlie.io/api/v1/stats?game_ids[]=1037671&per_page=40");
            // const result = await response.json();
            // console.log(result);
            const result = await response.text();
            setStats(result);
            // return result;
        } catch (error) {
            console.log("Error getting stats", error)
        }
    }

    useEffect(() => {
        statsTest();
    }, [])
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{stats}</Text>
        <Button icon="robot-angry-outline" mode="contained" onPress={() => navigation.goBack()} >
            Games
            </Button>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StatScreen

const styles = StyleSheet.create({})
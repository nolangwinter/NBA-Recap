import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const StatScreen = ({ route }) => {
  const navigation = useNavigation();
  const [stats, setStats] = useState([]);
  const [visitor, setVisitor] = useState([]);
  const [home, setHome] = useState([]);

  const getStats = async () => {
    try {
      const response = await fetch(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${route.params.item}&per_page=45`);
      const result = await response.json();

      return result;
    } catch (error) {
      console.log("Error getting stats", error)
    }
  }

  const PlayersByTeam = (stats) => {
    const home_id = stats.data[0].game.home_team_id;
    const visitor_id = stats.data[0].game.visitor_team_id;

    for (let i = 0; i < stats.data.length; i++) {
      if (stats.data[i].player.team_id === home_id) {
        setHome(home => [...home, stats.data[i].player])
      } else {
        setVisitor(visitor => [...visitor, stats.data[i].player])
      }
    }
  }



  useEffect(() => {
    (async () => {
      const fetchedStats = await getStats();
      PlayersByTeam(fetchedStats);
      setStats(fetchedStats);
    })();
  }, [])
  return (
    <SafeAreaView>
      <ScrollView>


        {home.map((item, index) => (
          <Text>Home {item.first_name} {item.last_name}</Text>
        ))}

        {visitor.map((item, index) => (
          <Text>Visitor {item.first_name} {item.last_name}</Text>
        ))}

        <Button icon="robot-angry-outline" mode="contained" onPress={() => navigation.goBack()} >
          Games
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StatScreen

const styles = StyleSheet.create({})
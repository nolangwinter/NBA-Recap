import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Player from '../components/Player'

const StatScreen = ({ route }) => {
  const navigation = useNavigation();
  const [stats, setStats] = useState([]);
  const [visitor, setVisitor] = useState([]);
  const [home, setHome] = useState([]);
  const [homeTeam, setHomeTeam] = useState("");
  const [visitorTeam, setVisitorTeam] = useState("");
  const [selectedButton, setSelectedButton] = useState("Home")

  // gets the stats for the selected game
  const getStats = async () => {
    try {
      const response = await fetch(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${route.params.item.id}&per_page=45`);
      const result = await response.json();

      return result;
    } catch (error) {
      console.log("Error getting stats", error)
    }
  }


  // seperated the players into the different teams
  const PlayersByTeam = (stats) => {
    const home_id = stats.data[0].game.home_team_id;
    const visitor_id = stats.data[0].game.visitor_team_id;

    for (let i = 0; i < stats.data.length; i++) {
      if (stats.data[i].player.team_id === home_id && stats.data[i].min !== '00') {
        setHome(home => [...home, stats.data[i]])
      } else if (stats.data[i].player.team_id === visitor_id && stats.data[i].min !== '00'){
        setVisitor(visitor => [...visitor, stats.data[i]])
      }
    }
  }

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  }


  useEffect(() => {
    (async () => {
      setHome([]);
      setVisitor([]);
      setHomeTeam(route.params.item.home_team.full_name);
      setVisitorTeam(route.params.item.visitor_team.full_name);
      const fetchedStats = await getStats();
      PlayersByTeam(fetchedStats);
      setStats(fetchedStats);
    })();
  }, [])
  return (
    <SafeAreaView>

      <View style={{ flexDirection:"row", alignItems:"center", gap:10, marginTop:12 }}>
          <TouchableOpacity 
            onPress={() => handleButtonClick("Home")}
            style={[
              {
                flex:1,
                paddingVertical:10,
                paddingHorizontal:20,
                backgroundColor:"white",
                borderColor:"#D0D0D0",
                borderRadius:6,
                borderWidth:0.7,
              },
              selectedButton === "Home" ? {backgroundColor:"black"} : null
            ]}
          >
            <Text style={[
              {
                textAlign:"center",
                fontWeight:"bold"
              },
              selectedButton === "Home" ? {color:"white"} : {color:"black"}
            ]}>{homeTeam}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => handleButtonClick("Visitor")}
            style={[
              {
                flex:1,
                paddingVertical:10,
                paddingHorizontal:20,
                backgroundColor:"white",
                borderColor:"#D0D0D0",
                borderRadius:6,
                borderWidth:0.7,
              },
              selectedButton === "Visitor" ? {backgroundColor:"black"} : null
            ]}
          >
            <Text style={[
              {
                textAlign:"center",
                fontWeight:"bold"
              },
              selectedButton === "Visitor" ? {color:"white"} : {color:"black"}
            ]}>{visitorTeam}</Text>
          </TouchableOpacity>

        </View>

      <ScrollView>

      {home.length === 0 ? (
          <Text style={{ fontSize:30, alignItems:"center" }}>Game Has Not Started Yet :(</Text>
        ): (null)}

        {selectedButton === "Home" ? (home.map((item, index) => (
          <Player item={item} key={index}/>
        ))) : (visitor.map((item, index) => (
          <Player item={item} key={index}/>
        )))}

        <Button style={{ marginVertical:50, marginHorizontal:10, backgroundColor:"black" }} icon="robot-angry-outline" mode="contained" onPress={() => navigation.goBack()} >
          Games
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StatScreen

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Matchups from '../components/Matchups';


const ScoreScreen = () => {
    const navigation = useNavigation();
    const date = new Date();
    const [dateToday, setDateToday] = useState("");
    const [matchups, setMatchups] = useState([]);


    function formatDate(date, format) {
        const map = {
            mm: date.getMonth() + 1,
            dd: date.getDate(),
            yy: date.getFullYear().toString().slice(-2),
            yyyy: date.getFullYear()
        }

        today = format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
    
        return today
    }

    const getGames = async () => {
        try {
            const response = await fetch(`https://www.balldontlie.io/api/v1/games?start_date=${formatDate(date, "yy-mm-dd")}&end_date=${formatDate(date, "yy-mm-dd")}`);
            const result = await response.json();
            return result;
        } catch(error) {
            console.log("Error getting the games", error);
        }
    } 
    
    
    function formatDate(date, format) {
        const map = {
            mm: date.getMonth() + 1,
            dd: date.getDate(),
            yy: date.getFullYear()
        }
    
        return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
    }
    
    const game = async (games) => {
        const teams = games

        for (let i = 0; i < teams.data.length; i++) { 
            let matchup = teams.data[i]
            // console.log(`game ${i}`, matchup);
            setMatchups(matchups => 
                [...matchups,
                    { 
                        id: matchup.id,
                        time: matchup.time,
                        home_team: {
                            id: matchup.home_team.id,
                            full_name: matchup.home_team.full_name,
                            abbr: matchup.home_team.abbreviation,
                            score: matchup.home_team_score
                        },
                        visitor_team: {
                            id: matchup.visitor_team.id,
                            full_name: matchup.visitor_team.full_name,
                            abbr: matchup.visitor_team.abbreviation,
                            score: matchup.visitor_team_score
                        }
                    }
                ]
            )

          }
    }


    useEffect(() => {

        (async () => {
            try {
              setMatchups([]);
              const games = await getGames();
              await game(games);
            } catch (err) {
              console.log('Error occured when fetching games');
            }
          })();
    }, [])

    console.log(formatDate(date, "yy-mm-dd"))



  return (
    <SafeAreaView>
        <ScrollView>
            {matchups.map((item, index) => (
                 <Matchups item={item} />
            ))}

            <Button style={{ marginVertical:50, marginHorizontal:10, backgroundColor:"black" }} icon="bathtub" mode="contained" onPress={() => navigation.goBack()} >
            Go Back
            </Button>
        </ScrollView>
    </SafeAreaView>
  ) 
}

export default ScoreScreen 

const styles = StyleSheet.create({})
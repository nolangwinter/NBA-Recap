import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();
    const date = new Date();
    const [dateToday, setDateToday] = useState("");
    const [games, setGames] = useState([]);

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

    const test = async () => {
        try {
            const response = await fetch("https://www.balldontlie.io/api/v1/games?start_date=2023-11-8&end_date=2023-11-8");
            // const result = await response.json();
            // console.log(result);
            const result = await response.text();
            setGames(result);
            // return result;
        } catch(error) {
            console.log("Error getting the games", error);
        }
    } 
    
    const statsTest = async () => {
        try {
            const response = await fetch("https://www.balldontlie.io/api/v1/stats?game_ids[]=1037671&per_page=40");
            // const result = await response.json();
            // console.log(result);
            const result = await response.text();
            return result;
        } catch (error) {
            console.log("Error getting stats", error)
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
    
    useEffect(() => {
        test()
        console.log(games)
    }, [])
    // statsTest();
    // console.log(formatDate(date, "yy-mm-dd"))



  return (
    <SafeAreaView>
        <ScrollView>
            <Text>{games}</Text>
            <Button icon="snail" mode="contained" onPress={() => navigation.navigate("Stat")} >
            Stats
            </Button>
        </ScrollView>
    </SafeAreaView>
  ) 
}

export default HomeScreen 

const styles = StyleSheet.create({})
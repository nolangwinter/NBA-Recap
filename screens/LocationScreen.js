import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import * as Location from "expo-location";

const LocationScreen = () => {
    const navigation = useNavigation();

    const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
        "we are loading your location"
      );
      const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
      useEffect(() => {
        checkIfLocationEnabled();
        getCurrentLocation();
      }, []);
      const checkIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
          Alert.alert(
            "Location services not enabled",
            "Please enable the location services",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          );
        } else {
          setlocationServicesEnabled(enabled);
        }
      };
      const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
    
        if (status !== "granted") {
          Alert.alert(
            "Permission denied",
            "allow the app to use the location services",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          );
        }
    
        const { coords } = await Location.getCurrentPositionAsync();
        // console.log(coords)
        if (coords) {
          const { latitude, longitude } = coords;
    
          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude,
          });
    
          // console.log(response)
    
          for (let item of response) {
            let address = `${item.name} ${item.city} ${item.postalCode}`;
            setdisplayCurrentAddress(address);
          }
        }
      };
  return (
    <SafeAreaView style={{alignItems:"center"}}>

        <Text style={{ fontSize:30, fontWeight:"500"}}>{displayCurrentAddress}</Text>
        <Button style={{ marginVertical:50, marginHorizontal:10, backgroundColor:"black" }} icon="robot-angry-outline" mode="contained" onPress={() => navigation.goBack()} >
          Go Back
        </Button>
    </SafeAreaView>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})
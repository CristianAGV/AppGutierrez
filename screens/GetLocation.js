import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "../constants/googleAPI";
import Button from "../components/Button";

export default function GetLocation({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    if (location?.lat) {
      (async () => {
        console.log("entro");

        setPhoto(
          `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x600&maptype=roadmap&markers=color:red%7Clabel:C%7C${location.lat},${location.lng}&key=${API_KEY}`
        );
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`
        );
        const reverseGeocode = await response.json();
        const geocodeAddress = reverseGeocode.results[0].formatted_address;
        setAddress(geocodeAddress);
      })();
    }
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const handleConfirmLocation = () => {
    navigation.navigate("save-location", { address });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View>
        {photo ? (
          <Image
            source={{ uri: photo }}
            style={{ width: "100%", height: 500 }}
          />
        ) : null}

        {address ? (
          <>
            <Text style={styles.text}>{address}</Text>
            <Button title="Save Adress" onPress={handleConfirmLocation} />
          </>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#181920",
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
    color: "#fff",
  },
});

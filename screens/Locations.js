import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import LocationItem from "./LocationItem";

const renderLocation = ({ item }) => {
  return (
    <LocationItem
      title={item.title}
      image={item.image}
      address={item.address}
    />
  );
};

export default function Locations() {
  const { locations } = useSelector((store) => store.locations);

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        renderItem={renderLocation}
        keyExtractor={(location) => location.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181920",
  },
});

import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getLocationsDb } from "../features/locations";

import LocationItem from "./LocationItem";

const renderLocation = ({ item }) => {
  return (
    <LocationItem
      title={item.title}
      image={item.image}
      address={item.address}
      id={item.id}
    />
  );
};

export default function Locations() {
  const dispatch = useDispatch();

  const { locations } = useSelector((store) => store.locations);

  useEffect(() => {
    dispatch(getLocationsDb());
  }, []);

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

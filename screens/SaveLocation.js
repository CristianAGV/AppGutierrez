import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { addLocation } from "../features/locations";
import renamePathAndMove from "../utils/renamePath";

export default function SaveLocation() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handlePickFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      return false;
    }
    return true;
  };

  const handleTakePicture = async () => {
    const hasCameraPermission = await getPermission();
    if (!hasCameraPermission) {
      return;
    }
    const imageUploaded = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage(imageUploaded.uri);
  };
  const handleConfirm = async () => {
    if (title !== "") {
      const path = await renamePathAndMove(image);
      dispatch(addLocation({ title, image: path, id: Date.now() }));
      setTitle("");
      setImage("");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Location Title"
        placeholderTextColor={"#515259"}
        onChangeText={setTitle}
      />
      {image !== "" ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : null}
      <View style={styles.btnContainer}>
        <Button title="Take Photo" onPress={handleTakePicture} />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Choose from Gallery" onPress={handlePickFromLibrary} />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Confirm and Save" onPress={handleConfirm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#181920",
  },
  input: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: "#252A34",
    color: "white",
    borderRadius: 15,
  },
  image: {
    height: 250,
    borderRadius: 15,
  },
  btnContainer: {
    marginVertical: 10,
  },
});

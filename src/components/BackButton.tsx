import { StyleSheet, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "expo-router";
import React from "react";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={navigation.goBack}>
      <AntDesign name="arrowleft" size={24} color="gray" />
    </Pressable>
  );
};

export default BackButton;

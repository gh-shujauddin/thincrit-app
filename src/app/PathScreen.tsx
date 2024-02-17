import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import React from "react";
import BackButton from "@/components/BackButton";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const PathScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{}} />
      <View style={styles.header}>
        <BackButton />
        <View style={styles.headerLine} />
      </View>
      <View style={{ paddingHorizontal: 40, alignItems: 'center', flex: 1 }}>
        <Text style={styles.title}>Choose your path</Text>
        <View style={styles.box}>
          <View style={styles.dataItemContainer}>
            <View style={styles.dataItem}>
              <View style={[styles.dataIcon]}>
                <MaterialCommunityIcons name="brain" size={80} color='#40A3E2' />
              </View>
              <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text style={styles.dataItemTitle}>Improve critical thinking</Text>
                <Text style={styles.dataItemDesc}>Transform thoughts</Text>
              </View>
            </View>
          </View>
          <View style={styles.dataItemContainer}>
            <View style={styles.dataItem}>
              <View style={[styles.dataIcon]}>
                <AntDesign name="clockcircleo" size={80} color="#40A3E2" />
              </View>
              <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text style={styles.dataItemTitle}>Improve time management</Text>
                <Text style={styles.dataItemDesc}>Transform thoughts</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    height: 50,
    gap: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLine: {
    height: 20,
    borderRadius: 15,
    backgroundColor: '#40A3E2',
    width: '90%',
  },
  title: {
    fontSize: 40,
    fontFamily: 'SignicaSemi',
    textAlign: 'center',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 40,
  },
  dataItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  dataItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 7,
    borderRadius: 15,
    borderColor: 'lightgray',
    width: 300,
    aspectRatio: 1,
  },

  dataIcon: {
    flex: 1, justifyContent: 'center', alignItems: "center"

  },
  dataItemTitle: {
    fontSize: 30,
    fontFamily: 'SignicaSemi',
    textAlign: 'center',
  },
  dataItemDesc: {
    fontSize: 20,
    fontFamily: 'Signica',
    textAlign: 'center',
    padding: 15,
    color: 'gray',
  },
  footer: {
    // padding: 30,
    width: '100%',
    marginTop: 15,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  }
});

export default PathScreen;

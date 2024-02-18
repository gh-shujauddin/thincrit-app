import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, Link } from "expo-router";
import data from '@/data.json';
import BackButton from "@/components/BackButton";

const GoalScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{}} />
      <View style={styles.header}>
        <BackButton />
        <View style={styles.headerLine} />
      </View>
      <View style={{ paddingHorizontal: 40, alignItems: 'center', flex: 1 }}>
        <Text style={styles.title}>Great. Now choose a daily goal </Text>
        <View style={{ flex: 1, width: '100%' }}>

          <View style={styles.box}>
            {data.daily_goals.map((value) => {
              return (
                <Pressable
                  key={value.id}
                  onPress={() => setSelectedIndex(value.id)}
                  style={[
                    styles.dataItem,
                    { backgroundColor: selectedIndex === value.id ? "#40A3E2" + 90 : "transparent" },
                  ]}>
                  <View style={{ paddingHorizontal: 10, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 20, paddingHorizontal: 10, }}>
                      <Text style={[styles.dataText, { fontFamily: 'SignicaSemi' }]} key={value.id}>{value.name}</Text>
                      <Text style={[styles.dataText, { color: 'gray' }]} >{value.minutes} min/day</Text>
                    </View>
                  </View>

                  {value.id !== data.daily_goals.length &&
                    <View style={{
                      height: StyleSheet.hairlineWidth,
                      width: '100%',
                      backgroundColor: 'black',
                      marginTop: 5
                    }} />}
                </Pressable>
              );
            })}
          </View>
        </View>
        <View style={styles.footer}>
          <Link href={`PathScreen`} asChild>
            <Pressable disabled={selectedIndex === undefined}>
              <View style={[styles.button, { backgroundColor: (selectedIndex === undefined) ? 'lightgray' : '#40A3E2' }]}>
                <Text style={styles.buttonText}>CONTINUE</Text>
              </View>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
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
    width: '100%',
    borderRadius: 30,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    gap: 1,
    marginTop: 40,
  },
  dataItem: {
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 10,
    height: 50,
  },
  dataText: {
    fontFamily: 'SignicaLight',
    fontSize: 20,

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

export default GoalScreen;

import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Pressable } from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";
import data from '@/data.json';
import BackButton from "@/components/BackButton";

const GoalScreen = () => {
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
            {data.daily_goals.map((value, index) => {
              return (
                <View style={styles.dataItem}>
                  <View style={{ paddingHorizontal: 10, paddingVertical: 7, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 20, paddingHorizontal: 10, }}>
                      <Text style={[styles.dataText, { fontFamily: 'SignicaSemi' }]} key={index}>{value.name}</Text>
                      <Text style={[styles.dataText, { color: 'gray' }]} >{value.minutes} min/day</Text>
                    </View>
                  </View>

                  {index !== data.daily_goals.length - 1 &&
                    <View style={{
                      height: StyleSheet.hairlineWidth,
                      width: '100%',
                      backgroundColor: 'black',
                      marginTop: 5
                    }} />}
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.footer}>
          <Link href={`PathScreen`} asChild>
            <Pressable>
              <View style={[styles.button, { backgroundColor: '#40A3E2' }]}>
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
    paddingVertical: 6,
    justifyContent: 'center',
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

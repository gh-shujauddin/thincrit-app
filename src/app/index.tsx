import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image, Pressable, Button } from "react-native";
import React from "react";
import { UIActivityIndicator } from 'react-native-indicators';
import { Link, Stack } from "expo-router";
const icon = require('@assets/img/icon.png')

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <View style={{ height: 30, aspectRatio: 1, }}>
          <Image style={{ height: '100%', aspectRatio: 1 }} source={icon} />
        </View>
        <Text style={styles.iconText}>thincrit</Text>
      </View>
      <View style={styles.body} >
        <UIActivityIndicator style={{ flex: 1, justifyContent: 'flex-end' }} color='#40A3E2' size={100} count={16} />

        <View style={{ flex: 1 }}>
          <Text style={styles.bodyText}>
            Prepare for the “lung Olympics“
          </Text>
        </View>
      </View>

      <View style={styles.footer} >
        <Link href={`Profession`} asChild>
          <Pressable>
            <View style={[styles.button, { backgroundColor: '#40A3E2' }]}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </View>
          </Pressable>
        </Link>
        <Pressable>
          <View style={[styles.button, { borderWidth: 1, borderStyle: 'dotted', borderColor: 'black' }]}>
            <Text style={[styles.buttonText, { color: '#40A3E2' }]}>I ALREADY HAVE AN ACCOUNT</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    height: 50,
    flexDirection: 'row',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  iconText: {
    color: '#40A3E2',
    fontFamily: 'InterSemi',
    fontSize: 25,

  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 35,
    gap: 50,
  },
  bodyText: {
    fontSize: 40,
    fontFamily: 'SignicaSemi',
  },
  footer: {
    padding: 30,
    gap: 20,

  },

  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,

  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  }
});

export default index;

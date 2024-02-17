import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Pressable } from "react-native";
import React from "react";
import { Stack, Link, useNavigation } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import data from '@/data.json';

const Profession = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{}} />
      <View style={styles.header}>
        <Pressable onPress={navigation.goBack}>
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
      </View>
      <View style={{ paddingHorizontal: 40, alignItems: 'center', flex: 1 }}>
        <Text style={styles.title}>I am a ......... 😊 </Text>
        <View style={{ flex: 1, width: '100%' }}>

          <View style={styles.box}>
            {data.roles.map((value, index) => {
              return (
                <View style={styles.dataItem}>
                  <View style={{ paddingHorizontal: 10, paddingVertical: 7, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, }}>
                      <View style={{ height: 20, width: 20, borderRadius: 20, backgroundColor: "#40A3E2" }} />
                      <Text style={styles.dataText} key={index}>{value.name}</Text>
                    </View>
                  </View>

                  {index !== data.roles.length - 1 &&
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
          <Link href={`GoalScreen`} asChild>
            <Pressable>
              <View style={[styles.button, { backgroundColor: '#40A3E2' }]}>
                <Text style={styles.buttonText}>CONTINUE</Text>
              </View>
            </Pressable>
          </Link>
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
  },
  title: {
    fontSize: 40,
    fontFamily: 'SignicaSemi',
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
})
export default Profession;

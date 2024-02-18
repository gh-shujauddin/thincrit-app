import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, Pressable, Modal, Alert, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import BackButton from "@/components/BackButton";
import { Stack, router, useLocalSearchParams, } from "expo-router";
import data from '@/data.json';
import { FadeIn, } from "react-native-reanimated";

const Question = () => {
  const params = useLocalSearchParams();
  const { question } = params;
  const [modalVisible, setModalVisible] = useState(false);
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  const [progressIndex, setProgressIndex] = useState<number>(0);

  let questionList: (typeof data.thinking_questions) = [];

  //for determine the category
  if (question === 'thinking') {
    questionList = data.thinking_questions;
  } else {
    questionList = data.time_question;
  }

  const barWidth = useRef(new Animated.Value(0)).current;

  // Calculate the progress based on the current index
  const currentProgress = (progressIndex / questionList.length) * 100;

  // Set the progress value
  barWidth.setValue(currentProgress);

  const progressPercent = barWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", `100%`],
  });

  useEffect(() => {
    Animated.timing(barWidth, {
      duration: 2000,
      toValue: currentProgress,
      useNativeDriver: false
    }).start();
  }, [])

  const handleContinuePress = () => {
    if (currIndex === questionList.length - 1) {
      setProgressIndex((val) => val + 1);
      setModalVisible(true);
    } else {
      setCurrIndex((val) => val + 1);
      setProgressIndex((val) => val + 1);
    }
    setSelectedIndex(undefined);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{}} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Congratulation! You are done for today.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                router.push({ pathname: '/' })
                setCurrIndex(0);
              }}>
              <Text style={styles.textStyle}>Restart</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <BackButton />
        <View
          style={[
            styles.headerLine,
          ]}>
          <Animated.View
            style={[
              styles.progress,
              {
                backgroundColor: '#40A3E2',
                width: progressPercent,
              }
            ]}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 20, }}>
        <View style={{ height: 20, width: 20, borderRadius: 20, backgroundColor: "#40A3E2" }} />
        <Text style={{ fontFamily: 'Signica', fontSize: 15, }} >Next question</Text>
      </View>
      <View style={{ paddingHorizontal: 40, alignItems: 'center', flex: 1, marginTop: 20, }}>
        <Text style={styles.title}>{questionList[currIndex].text}</Text>
        <View style={[(questionList[currIndex].category === 'text') ? styles.textBox : styles.colorBox]}>

          {questionList[currIndex].options.map((value) => {

            return (
              <Pressable onPress={() => setSelectedIndex(value.id)} key={value.id}>
                {(questionList[currIndex].category === 'text') ?
                  <Animated.View style={[styles.textChoice, { backgroundColor: (selectedIndex === value.id) ? '#BBE2EC' : '#D9D9D9', },]}>
                    <Text style={[styles.buttonText, { color: 'black', fontFamily: 'SignicaBold', fontSize: 23, }]}>{value.text}</Text>
                  </Animated.View>
                  :
                  <View style={[styles.colorChoice, { backgroundColor: (selectedIndex === value.id) ? '#BBE2EC' : '#D9D9D9' }]}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, }}>
                      <View style={{ backgroundColor: value.text, width: '100%', height: '100%', padding: 10, borderRadius: 15 }} />
                    </View>
                  </View>}
              </Pressable>
            );
          })}

        </View>
      </View>
      <View style={[styles.footer, { backgroundColor: (selectedIndex === questionList[currIndex].correct_option_id) ? '#BBE2EC' : '#40A3E2' + 20 }]}>
        {(selectedIndex) &&
          ((selectedIndex === questionList[currIndex].correct_option_id) ?
            <Text style={[styles.feedbackText, { color: '#40A3E2' }]}>Excellent !</Text> :
            <Text style={[styles.feedbackText, { color: '#EB6E6E' }]}> Ohho! Guess again...</Text>
          )
        }
        <Pressable
          disabled={selectedIndex !== questionList[currIndex].correct_option_id}
          onPress={handleContinuePress}
        >
          <View style={[styles.button, { backgroundColor: (selectedIndex === questionList[currIndex].correct_option_id) ? '#40A3E2' : '#40A3E2' + 80 }]}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView >
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
    flexDirection: 'row',
    overflow: 'hidden',
    width: '90%',
    height: 20,
    borderRadius: 15,
    backgroundColor: 'lightgray',
  },
  progress: {
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontSize: 28,
    fontFamily: 'SignicaSemi',
    textAlign: 'center',
  },
  textBox: {
    flex: 1,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
    gap: 20,
    // flexWrap: 'wrap',
  },
  colorBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    gap: 20,
    flexWrap: 'wrap',
  },

  footer: {
    paddingBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 40,
    width: '100%',
    marginTop: 15,
    backgroundColor: '#D9D9D9',
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
  },
  textChoice: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  colorChoice: {
    flexDirection: 'row',
    width: 150,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  feedbackText: {
    fontFamily: 'SignicaSemi',
    fontSize: 20,
    paddingBottom: 20,

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Question;

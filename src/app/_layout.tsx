import { useEffect, useState } from 'react';
import { Inter_600SemiBold, Inter_700Bold, Inter_400Regular, Inter_900Black } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import SplashScreen from '@/components/SplashScreen';
import Animated, { FadeIn } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [appReady, setAppReady] = useState(false);
  const [fontLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    Signica: require('@assets/font/Signika-Regular.ttf'),
    SignicaLight: require('@assets/font/Signika-Light.ttf'),
    SignicaSemi: require('@assets/font/Signika-Medium.ttf'),

  });

  useEffect(() => {
    if (fontLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontLoaded, fontError]);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  if (isLoading && !appReady) {
    <SplashScreen />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }}>
        {isLoading ? <SplashScreen /> : <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{}} />
        </Stack>}
      </Animated.View>
    </GestureHandlerRootView>
  );
}

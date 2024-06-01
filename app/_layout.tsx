import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { LogBox } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    GreySansRegular: require('../assets/fonts/GreySansRegular.otf'),
    GreySansSemiBold: require('../assets/fonts/GreySansSemiBold.ttf'),
    GreySansBlack: require('../assets/fonts/GreySansBlack.ttf'),

    ProximaNovaBold: require('../assets/fonts/ProximaNova-Bold.ttf'),
    ProximaNovaRegular: require('../assets/fonts/ProximaNova-Regular.ttf'),


  });

  useEffect(() => {
    LogBox.ignoreAllLogs()
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar hidden />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

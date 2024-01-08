import React from "react";
import { NativeBaseProvider, VStack, extendTheme } from "native-base";
import { PomodoroTimer } from "./components/PomodoroTimer";
import { Bg } from "./components/Bg";
import { Header } from "./components/Header";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  FiraCode_400Regular,
  FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
const theme = extendTheme({ config });

export default function App() {
  let [fontsLoaded] = useFonts({
    FiraCode_400Regular,
    FiraCode_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <VStack flex={1} bg={"#1b1105"} safeArea={true}>
          <Header />
          <PomodoroTimer />
          <Bg />
        </VStack>
      </NativeBaseProvider>
    );
  }
}

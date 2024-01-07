import React from "react";
import { NativeBaseProvider, VStack, extendTheme } from "native-base";
import { PomodoroTimer } from "./components/PomodoroTimer";
import { Bg } from "./components/Bg";
import { Header } from "./components/Header";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
const theme = extendTheme({ config });

export default function App() {
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

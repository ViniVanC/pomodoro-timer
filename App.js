import React from "react";
import { NativeBaseProvider, VStack, extendTheme } from "native-base";
import { PomodoroTimer } from "./components/PomodoroTimer";
import { Bg } from "./components/Bg";

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
      <VStack zIndex={1} flex={1} bg={"#1b1105"}>
        <PomodoroTimer />
        <Bg />
      </VStack>
    </NativeBaseProvider>
  );
}

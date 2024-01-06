import React from "react";
import { NativeBaseProvider, VStack, extendTheme } from "native-base";
import { PomodoroTimer } from "./components/PomodoroTimer";

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
      <VStack flex={1} bg={"#1b1105"}>
        <PomodoroTimer />
      </VStack>
    </NativeBaseProvider>
  );
}

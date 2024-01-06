import React from "react";
import { Text, NativeBaseProvider, extendTheme } from "native-base";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Text>hi</Text>
    </NativeBaseProvider>
  );
}

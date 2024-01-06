import React from "react";
import { Text, Center, NativeBaseProvider, extendTheme } from "native-base";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center bg={"#1b1105"} px={4} flex={1}>
        <Text fontSize={"100px"} fontWeight={700}>
          Hi
        </Text>
      </Center>
    </NativeBaseProvider>
  );
}

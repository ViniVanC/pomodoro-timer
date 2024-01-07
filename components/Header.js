import React, { useState } from "react";
import { HStack, Pressable, Text } from "native-base";
import { HelpModal } from "./HelpModal";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <HStack zIndex={1} py={"10px"} px={"20px"} justifyContent={"space-between"}>
      <Text
        flex={1}
        color={"#FFBE26"}
        fontSize={"18px"}
        fontWeight={700}
        style={styles.textShadow}
      >
        PomoTimer
      </Text>
      <Pressable _pressed={{ transform: [{ scale: 0.9 }] }}>
        <Text
          flex={1}
          color={"#FFBE26"}
          textAlign={"left"}
          fontSize={"18px"}
          fontWeight={700}
          style={styles.textShadow}
        >
          --help
        </Text>
      </Pressable>
      <HelpModal showModal={showModal} setShowModal={setShowModal} />
    </HStack>
  );
};

const styles = {
  textShadow: {
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.7,
  },
};

import React, { useState } from "react";
import { HStack, Pressable, Text } from "native-base";
import { HelpModal } from "./HelpModal";
import { TextAnimation } from "./TypingAnimation";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <HStack zIndex={1} py={"10px"} px={"20px"} justifyContent={"space-between"}>
      <TextAnimation fz={18} opacity={0.7}>
        PomoTimer
      </TextAnimation>
      <Pressable
        _pressed={{ transform: [{ scale: 0.9 }] }}
        onPress={() => setShowModal(!showModal)}
      >
        <TextAnimation fz={18} opacity={0.7}>
          --help
        </TextAnimation>
      </Pressable>
      <HelpModal showModal={showModal} setShowModal={setShowModal} />
    </HStack>
  );
};

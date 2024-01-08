import { Text } from "native-base";
import React, { useState, useEffect } from "react";

export const TextAnimation = ({ children, delay = 50, fz, opacity = 0.1 }) => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    displayText(children);
  }, []);

  const displayText = async (text) => {
    setShowCursor(true);
    for (let i = 0; i <= text.length; i++) {
      setCurrentPhrase(text.substring(0, i));
      await wait(delay); // Затримка між символами (в мілісекундах)
    }

    await wait(delay); // Затримка перед очищенням тексту для наступної фрази
    setShowCursor(false);
    await wait(delay); // Затримка перед початком нової фрази
  };

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  return (
    <Text
      flex={1}
      fontFamily={"FiraCode_700Bold"}
      color={"#FFBE26"}
      fontSize={fz}
      w={"100%"}
      opacity={opacity}
      style={styles.textShadow}
    >
      {currentPhrase}
      {showCursor && "█"}
    </Text>
  );
};

const styles = {
  textShadow: {
    textShadowColor: "#FFBE26",
    textShadowRadius: 15,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
  },
};

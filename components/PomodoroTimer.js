import React, { useState, useEffect } from "react";
import { Text, Pressable, Center, HStack, Icon, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

export const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);

  return (
    <Center flex={1}>
      <VStack space={"10px"} alignItems={"center"}>
        <Pressable
          onPress={resetTimer}
          _pressed={{ transform: [{ scale: 0.9 }] }}
        >
          <Text
            color="#FFBE26"
            fontSize={40}
            lineHeight={"xs"}
            style={styles.textShadow}
          >
            ⟳
          </Text>
        </Pressable>
        <Text
          color={"#FFBE26"}
          fontSize={"70px"}
          fontWeight={700}
          w={"full"}
          textAlign={"center"}
          opacity={0.7}
          style={styles.textShadow}
        >
          {`${formatTime(minutes)}:${formatTime(seconds)}`}
        </Text>
        <Pressable
          onPress={toggleTimer}
          _pressed={{ transform: [{ scale: 0.9 }] }}
        >
          <Text
            w={"100px"}
            color="#FFBE26"
            fontSize={25}
            fontWeight={700}
            textAlign={"center"}
            style={styles.textShadow}
          >
            {isActive ? "pause" : "play"}
          </Text>
        </Pressable>
      </VStack>
    </Center>
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
  },
};

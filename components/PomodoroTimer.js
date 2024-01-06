import React, { useState, useEffect } from "react";
import { Text, Pressable, Center, VStack } from "native-base";

export const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakMinutes, setBreakMinutes] = useState(0);
  const [breakSeconds, setBreakSeconds] = useState(3);
  const [loops, setLoops] = useState(4);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            setIsBreak(true);
            setBreakMinutes(0);
            setBreakSeconds(3);
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
  }, [isActive, isBreak, minutes, seconds]);

  useEffect(() => {
    let interval;

    if (isBreak) {
      interval = setInterval(() => {
        if (breakSeconds === 0) {
          if (breakMinutes === 0) {
            clearInterval(interval);
            setLoops(loops - 1);
            setMinutes(0);
            setSeconds(5);
            setIsBreak(false);
          } else {
            setBreakMinutes(breakMinutes - 1);
            setBreakSeconds(59);
          }
        } else {
          setBreakSeconds(breakSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isBreak, breakMinutes, breakSeconds, loops]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(5);
    setIsBreak(false);
    setBreakMinutes(0);
    setBreakSeconds(3);
    setLoops(4);
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
          {isBreak
            ? `${formatTime(breakMinutes)}:${formatTime(breakSeconds)}`
            : `${formatTime(minutes)}:${formatTime(seconds)}`}
        </Text>
        <Text>{`${loops}/4`}</Text>
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

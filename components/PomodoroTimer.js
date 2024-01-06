import React, { useState, useEffect } from "react";
import { Text, Pressable, Center, VStack, HStack } from "native-base";

let firstMinutes = 0;
let firstSeconds = 1;
let firstBreakMinutes = 0;
let firstBreakSeconds = 1;
let firstLoops = 1;
// let firstMinutes = 5;
// let firstSeconds = 0;
// let firstBreakMinutes = firstMinutes * 0.2;
// let firstBreakSeconds = 0;

export const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(firstMinutes);
  const [seconds, setSeconds] = useState(firstSeconds);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakMinutes, setBreakMinutes] = useState(firstBreakMinutes);
  const [breakSeconds, setBreakSeconds] = useState(firstBreakSeconds);
  const [loops, setLoops] = useState(firstLoops);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            setIsBreak(true);
            if (loops === 1) {
              setBreakMinutes(firstMinutes * 0.6);
            } else {
              setBreakMinutes(firstBreakMinutes);
            }
            setBreakSeconds(firstBreakSeconds);
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
            setMinutes(firstMinutes);
            setSeconds(firstSeconds);
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
    setMinutes(firstMinutes);
    setSeconds(firstSeconds);
    setIsBreak(false);
    setBreakMinutes(firstBreakMinutes);
    setBreakSeconds(firstBreakSeconds);
    setLoops(firstLoops);
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);

  return (
    <Center flex={1}>
      <VStack w={"full"} alignItems={"center"}>
        {loops !== 0 ? (
          <>
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
            <VStack w={"full"} my={"10px"}>
              <Text
                color={"#FFBE26"}
                fontSize={"30px"}
                fontWeight={400}
                w={"100%"}
                textAlign={"center"}
                style={styles.textShadow}
              >
                {isBreak
                  ? loops === 1
                    ? "Long break"
                    : "Take a little rest"
                  : "Woooork!"}
              </Text>
              <Text
                color={"#FFBE26"}
                fontSize={"70px"}
                lineHeight={"xs"}
                fontWeight={700}
                w={"100%"}
                textAlign={"center"}
                style={styles.textShadow}
              >
                {isBreak
                  ? `${formatTime(breakMinutes)}:${formatTime(breakSeconds)}`
                  : `${formatTime(minutes)}:${formatTime(seconds)}`}
              </Text>
            </VStack>

            <HStack space={"10px"}>
              {new Array(loops).fill(0).map((_item, i) => (
                <Text
                  key={i}
                  color={"#FFBE26"}
                  fontSize={"30px"}
                  textAlign={"center"}
                  style={styles.textShadow}
                >
                  ○
                </Text>
              ))}
            </HStack>

            <Pressable
              onPress={toggleTimer}
              disabled={isBreak}
              _pressed={{ transform: [{ scale: 0.9 }] }}
              _disabled={{
                opacity: 0.5,
              }}
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
          </>
        ) : (
          <>
            <Text
              color={"#FFBE26"}
              fontSize={"60px"}
              fontWeight={700}
              w={"100%"}
              textAlign={"center"}
              style={styles.textShadow}
            >
              Goood job
            </Text>
            <Pressable
              onPress={() => {
                setLoops(firstLoops);
              }}
              _pressed={{ transform: [{ scale: 0.9 }] }}
            >
              <Text
                color="#FFBE26"
                fontSize={60}
                lineHeight={"xs"}
                style={styles.textShadow}
              >
                ⟳
              </Text>
            </Pressable>
          </>
        )}
      </VStack>
    </Center>
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
    opacity: 0.5,
  },
};

import React from "react";
import Markdown from "react-native-simple-markdown";

export const MarkdownText = ({ children }) => {
  return <Markdown styles={markdownStyles}>{children}</Markdown>;
};

const markdownStyles = {
  del: {
    textDecorationLine: "line-through",
  },
  heading: {
    fontFamily: "FiraCode_700Bold",
    marginBottom: 15,
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.6,
  },
  heading1: {
    fontSize: 22,
  },
  heading2: {
    fontSize: 20,
  },
  heading3: {
    fontSize: 18,
  },
  link: {
    textDecorationLine: "underline",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    color: "#FFBE26",
    marginBottom: 5,
    paddingRight: 10,
  },
  listItemBullet: {
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.6,
    fontSize: 18,
  },
  listItemNumber: {
    fontFamily: "FiraCode_700Bold",
    flexWrap: "wrap",
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.6,
  },
  listItemText: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.4,
  },
  paragraph: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  strong: {
    fontFamily: "FiraCode_700Bold",
  },
  text: {
    fontFamily: "FiraCode_400Regular",
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.6,
  },
};

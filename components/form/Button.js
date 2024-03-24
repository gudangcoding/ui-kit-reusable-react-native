import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ text, onPress, buttonStyle, textStyle, type }) => {
  const buttonStyles = [
    styles.button,
    type === "fill" ? styles.fillButton : styles.outlineButton,
    buttonStyle,
  ];

  const textStyles = [styles.text, textStyle];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  fillButton: {
    backgroundColor: "#0ac596",
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: "#0ac596",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;

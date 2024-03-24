import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Picker,
} from "react-native";

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  inputType,
  options,
}) => {
  const renderInput = () => {
    switch (inputType) {
      case "checkbox":
        return (
          <View style={styles.checkboxContainer}>
            <Switch value={value} onValueChange={onChangeText} />
            <Text style={styles.checkboxLabel}>{label}</Text>
          </View>
        );
      case "radio":
        return (
          <View style={styles.radioContainer}>
            <Text style={styles.radioLabel}>{label}</Text>
            <Switch value={value} onValueChange={onChangeText} />
          </View>
        );
      case "date":
        return (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType="numeric"
          />
        );
      case "select":
        return (
          <Picker selectedValue={value} onValueChange={onChangeText}>
            {options.map((option) => (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        );
      default:
        return (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {renderInput()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginRight: 8,
    fontSize: 16,
  },
});

export default CustomInput;

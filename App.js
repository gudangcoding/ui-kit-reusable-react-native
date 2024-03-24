import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/form/Button";
import CustomInput from "./components/form/CustomInput";
import { useState } from "react";

export default function App() {
  const [radioValue, setRadioValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectValue, setSelectValue] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <CustomInput
        label="Radio Label"
        value={radioValue}
        onChangeText={setRadioValue}
        placeholder="Radio Placeholder"
        inputType="text"
      />
      <CustomInput
        label="Radio Label"
        value={radioValue}
        onChangeText={setRadioValue}
        placeholder="Radio Placeholder"
        inputType="radio"
      />
      <CustomInput
        label="Checkbox Label"
        value={checkboxValue}
        onChangeText={setCheckboxValue}
        placeholder="Checkbox Placeholder"
        inputType="checkbox"
      />
      <CustomInput
        label="Date"
        value={dateValue}
        onChangeText={setDateValue}
        placeholder="Select Date"
        inputType="date"
      />

      <CustomInput
        label="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Masukkan email"
        inputType="email"
      />
      <CustomInput
        label="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Masukkan password"
        inputType="password"
      />

      <CustomInput
        label="Checkbox Label"
        value={checkboxValue}
        onChangeText={setCheckboxValue}
        inputType="checkbox"
      />

      <CustomInput
        label="Radio Label"
        value={radioValue}
        onChangeText={setRadioValue}
        inputType="radio"
      />

      <CustomInput
        label="Select Label"
        value={selectValue}
        onChangeText={setSelectValue}
        inputType="select"
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
      />

      <CustomInput
        label="Date"
        value={dateValue}
        onChangeText={setDateValue}
        placeholder="Select Date"
        inputType="date"
      />

      <Button
        text="Tombol Fill"
        onPress={() => alert("Tombol Fill ditekan!")}
        type="fill"
        textStyle={{ color: "#fff" }}
      />
      <Button
        text="Tombol Outline"
        onPress={() => alert("Tombol Outline ditekan!")}
        type="outline"
        textStyle={{ color: "#0ac596" }}
        buttonStyle={{ backgroundColor: "#fff" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // alignItems: "center",
    // justifyContent: "center",
    // margin: 20,
  },
});

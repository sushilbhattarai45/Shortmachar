import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import hitApi from "./app/components/hitApi";
export default function App() {
  return (
    <View style={styles.container}>
      <p>Hello</p>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

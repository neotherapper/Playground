import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.buddies}>My name is Yana and Georgios</Text>
      <Text style={styles.luntik}>My name is Luntikos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4285e1",
    alignItems: "center",
    justifyContent: "center",
  },
  buddies: {
    color: "pink",
    fontSize: 28,
    fontWeight: "bold",
  },
  luntik: {
    fontSize: 30,
    color: "yellow",
  },
});

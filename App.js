import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  useColorScheme,
  Platform,
} from "react-native";

export default function App() {
  const { width, height } = useWindowDimensions();

  console.log(`WindowDimensions - width: ${width}, height: ${height}`);

  const theme = useColorScheme();
  const isDarkMode = theme === "dark";

  console.log(`useColorScheme - isDarkMode: ${isDarkMode}`);

  let header = null;
  if (width < 400) {
    header = header = (
      <View style={styles.header}>
        <Image
          source={require("./assets/images/ReactNativeLogo.png")}
          style={styles.logo}
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      {header}
      <View
        style={[
          styles.body,
          isDarkMode
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" },
        ]}
      >
        <Text style={[isDarkMode ? { color: "white" } : { color: "black" }]}>
          {Platform.OS === "android" ? "Android" : "iOS"}
        </Text>
        <Text style={[isDarkMode ? { color: "white" } : { color: "black" }]}>
          {Platform.select({
            android: "android rules!!!",
            ios: "ios sucks!!!",
          })}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  body: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { Link, Stack } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./AppStyles";

export default function App() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeDot} />
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.welcomeSub}>
          Explore navigation, user lists, and profiles in one place.
        </Text>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.welcomeBtn}>
            <Text style={styles.welcomeBtnText}>Get Started →</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}
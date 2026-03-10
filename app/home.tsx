import { Link, Stack } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./AppStyles";

export default function home() {
  return (
    <>
      <Stack.Screen options={{ title: "home" }} />
      <View style={styles.homeContainer}>
        <Text style={styles.homeLabel}>Navigate</Text>
        <Text style={styles.homeTitle}>Where to?</Text>

        <Link href="/email" push asChild>
          <TouchableOpacity style={styles.homeNavItem}>
            <Text style={styles.homeNavItemText}>📧  Email Screen</Text>
            <Text style={styles.homeNavArrow}>›</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/userList" push asChild>
          <TouchableOpacity style={styles.homeNavItem}>
            <Text style={styles.homeNavItemText}>👥  User List</Text>
            <Text style={styles.homeNavArrow}>›</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}
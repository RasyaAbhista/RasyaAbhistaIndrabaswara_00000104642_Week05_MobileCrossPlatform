import { Link, Stack } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./AppStyles";
import userData from "./data.json";

export default function email() {
  return (
    <>
      <Stack.Screen options={{ title: "email" }} />
      <View style={styles.emailContainer}>
        <View style={styles.emailHeader}>
          <Text style={styles.emailCount}>{userData.length} messages</Text>
          <Text style={styles.emailTitle}>Inbox</Text>
        </View>

        <ScrollView contentContainerStyle={styles.emailScrollContent}>
          {userData.map((item, index) => (
            <View key={index} style={styles.emailCard}>
              <Text style={styles.emailSender}>{item.name}</Text>
              <Text style={styles.emailPreview}>{item.email}</Text>
            </View>
          ))}

          <View style={styles.emailFooter}>
            <Link href="/home" push asChild>
              <TouchableOpacity>
                <Text style={styles.backLink}>Go to Home Screen</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
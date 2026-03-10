import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./AppStyles";

export default function profile() {
  const { userName, userEmail, userPhoto } = useLocalSearchParams<{
    userName: string;
    userEmail: string;
    userPhoto: string;
  }>();

  return (
    <>
      <Stack.Screen options={{ title: "profile" }} />
      <View style={styles.profileContainer}>
        {userPhoto ? (
          <View style={styles.profileAvatarRing}>
            <Image source={{ uri: userPhoto }} style={styles.profileAvatar} />
          </View>
        ) : null}
        <Text style={styles.profileName}>{userName}&apos;s Profile</Text>
        <Text style={styles.profileEmail}>{userEmail}</Text>
        <Link href="/home" push asChild>
          <TouchableOpacity>
            <Text style={styles.backLink}>Go to Home Screen</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}
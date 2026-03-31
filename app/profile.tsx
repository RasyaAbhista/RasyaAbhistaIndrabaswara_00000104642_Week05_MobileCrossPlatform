import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./AppStyles";

export default function Profile() { 
  const { userName, userEmail, userPhoto } = useLocalSearchParams<{
    userName: string | string[];
    userEmail: string | string[];
    userPhoto: string | string[];
  }>();

  const name = Array.isArray(userName) ? userName[0] : userName;
  const email = Array.isArray(userEmail) ? userEmail[0] : userEmail;
  const photo = Array.isArray(userPhoto) ? userPhoto[0] : userPhoto;

  return (
    <>
      <Stack.Screen options={{ title: "profile" }} />
      <View style={styles.profileContainer}>
        {photo ? (
          <View style={styles.profileAvatarRing}>
            <Image source={{ uri: photo }} style={styles.profileAvatar} />
          </View>
        ) : null}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text style={styles.profileName}>{name}'s Profile</Text>
        <Text style={styles.profileEmail}>{email}</Text>
        <Link href="/home" push asChild>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Go to Home Screen</Text>
            <Text style={styles.btnArrow}>→</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}
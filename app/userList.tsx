import { Link, Stack } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeInDown,
} from "react-native-reanimated";
import styles from "./AppStyles";
import userData from "./data.json";

export default function UserList() {
  return (
    <>
      <Stack.Screen options={{ title: "userList" }} />
      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.listCount}>{userData.length} members</Text>
          <Text style={styles.listTitle}>Users</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {userData.map((users, index) => (
            <Animated.View
              key={index}
              entering={FadeInDown.delay(index * 200).springify()}
            >
              <Link
                href={{
                  pathname: "/profile",
                  params: {
                    userName: users.name,
                    userEmail: users.email,
                    userPhoto: users.photo_url,
                  },
                }}
                push
                asChild
              >
                <TouchableOpacity style={styles.userCard}>
                  <View style={styles.avatarWrapper}>
                    <Image
                      source={{ uri: users.photo_url }}
                      style={styles.avatarImg}
                    />
                  </View>
                  <View style={styles.userInfo}>
                    <Text style={styles.userName}>{users.name}</Text>
                    <Text style={styles.userEmail}>{users.email}</Text>
                  </View>
                  <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>
              </Link>
            </Animated.View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
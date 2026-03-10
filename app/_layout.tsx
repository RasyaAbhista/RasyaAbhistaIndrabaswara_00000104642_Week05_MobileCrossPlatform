import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { colors } from "./AppStyles";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.bg },
          headerTintColor: colors.blue,
          headerTitleStyle: { fontWeight: "700", color: colors.textPrimary },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: colors.bg },
          headerBackTitle: "Back",
        }}
      />
    </PaperProvider>
  );
}
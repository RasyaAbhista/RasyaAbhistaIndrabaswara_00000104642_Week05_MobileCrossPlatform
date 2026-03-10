import { StyleSheet } from "react-native";

export const colors = {
  bg: "#F7F5F2",
  surface: "#FFFFFF",
  cardBg: "#1C1C1E",
  cardText: "#FFFFFF",
  cardSub: "#A0A0A8",
  accent: "#E8602C",
  textPrimary: "#1C1C1E",
  textSecondary: "#6B6B6B",
  border: "#E8E4DF",
  blue: "#007AFF",
};

const styles = StyleSheet.create({
  // ── Index / Welcome ───────────────────────────────
  welcomeContainer: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  welcomeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.accent,
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 36,
    fontWeight: "800",
    color: colors.textPrimary,
    letterSpacing: -1,
    textAlign: "center",
    marginBottom: 8,
  },
  welcomeSub: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 48,
    lineHeight: 22,
  },
  welcomeBtn: {
    backgroundColor: colors.textPrimary,
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 100,
  },
  welcomeBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  // ── Home ─────────────────────────────────────────
  homeContainer: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  homeLabel: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    color: colors.accent,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  homeTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.textPrimary,
    letterSpacing: -0.8,
    marginBottom: 40,
  },
  homeNavItem: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.border,
  },
  homeNavItemText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  homeNavArrow: {
    fontSize: 18,
    color: colors.textSecondary,
  },

  // ── Shared Button ─────────────────────────────────
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accent,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 100,
    gap: 6,
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  btnArrow: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  // ── Email ─────────────────────────────────────────
  emailContainer: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  emailHeader: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  emailCount: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    color: colors.accent,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  emailTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  emailScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  emailCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 10,
  },
  emailSender: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  emailPreview: {
    fontSize: 13,
    color: colors.cardSub,
  },
  emailFooter: {
    paddingTop: 16,
    paddingBottom: 8,
    alignItems: "center",
  },

  // ── UserList ──────────────────────────────────────
  listContainer: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  listHeader: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  listCount: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    color: colors.accent,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  listTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  userCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 20,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarWrapper: {
    width: 58,
    height: 58,
    borderRadius: 29,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.accent,
  },
  avatarImg: {
    width: "100%",
    height: "100%",
  },
  userInfo: {
    flex: 1,
    marginLeft: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 3,
  },
  userEmail: {
    fontSize: 13,
    color: colors.cardSub,
  },
  chevron: {
    fontSize: 18,
    color: colors.cardSub,
  },

  // ── Profile ───────────────────────────────────────
  profileContainer: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  profileAvatarRing: {
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 3,
    borderColor: colors.accent,
    overflow: "hidden",
    marginBottom: 20,
  },
  profileAvatar: {
    width: "100%",
    height: "100%",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.textPrimary,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  profileEmail: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 36,
  },
});

export default styles;
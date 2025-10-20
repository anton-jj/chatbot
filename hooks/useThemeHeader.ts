import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "./themeContext";

export function useThemeHeader() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: theme === "light" ? "#fff" : "#222" },
      headerTintColor: theme === "light" ? "#222" : "#fff",
    });
  });
}

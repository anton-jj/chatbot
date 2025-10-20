import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "./themeContext";

export function useThemeHeader() {
  const { palette } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: palette.background },
      headerTintColor: palette.surface,
    });
  });
}

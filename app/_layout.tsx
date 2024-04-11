import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		// 💀 average ternary operator TODO: fix this fr.
		<ThemeProvider value={colorScheme === "dark" ? DefaultTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="generator"
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="settings"
					options={{
						headerTitle: "Settings",
						headerShadowVisible: false,
					}}
				/>
				<Stack.Screen
					name="sharepalette"
					options={{ headerTitle: "Export", headerShadowVisible: false }}
				/>
			</Stack>
		</ThemeProvider>
	);
}

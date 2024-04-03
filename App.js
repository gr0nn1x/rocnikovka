import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import ApplicationScreen from "./screens/ApplicationScreen";
import AboutUs from "./screens/AboutUs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={ApplicationScreen} />
        <Stack.Screen name="Application" component={ApplicationScreen} />
        <Stack.Screen name="About" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

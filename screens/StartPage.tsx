
import { View, Text, Pressable, StyleSheet, useColorScheme, Appearance, Switch,} from "react-native";
import { Link } from 'expo-router';
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';



type NavigationProp = NativeStackNavigationProp<RootStackParamList,"Start">;



export default function Startpage(){
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  const navigation = useNavigation<NavigationProp>();

  return(
        <View style={[styles.container, themeContainerStyle]}>
          <View style={styles.switchHolder}>          
            <Switch value={colorScheme==='dark'} style={styles.switchButton} 
                  onChange={() => {
              Appearance.setColorScheme(colorScheme==='dark' ? 'light' : 'dark')
            }}/>
          </View>

            <Text style={[styles.title, themeTextStyle]}>Startzidan</Text>
           
          
            <Pressable style={styles.button} 
            onPress={() => navigation.navigate("ChatScreen")}>

                <Text style={styles.buttonText}>Chatta med Chad</Text>
            </Pressable>
            <StatusBar/>
        
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#222',
  },
    lightThemeText: {
    color: '#222',
  },
  darkThemeText: {
    color: '#fff',
  },
  title: {
    flex: 1,
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    justifyContent: "center",
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  switchHolder: {
    flex: 1,
  },
  switchButton: {

  },
});
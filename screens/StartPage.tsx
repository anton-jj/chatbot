
import { View, Text, Pressable, StyleSheet} from "react-native";
import { Link } from 'expo-router';


export default function Startpage(){
    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>Startzidan</Text>
           
            <Link href="/ChatScreen" asChild>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Chatta med Chad</Text>
            </Pressable>
            </Link>
        
    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
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
});
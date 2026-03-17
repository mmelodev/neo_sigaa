import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { BarraDeNavegacao } from "../components/barraDeNavegacao"

export default function Index() {
      //adicionar constantes

      return (
            <ImageBackground 
                  style={styles.container} 
                  source={require('../assets/images/background_home.png')} resizeMode="cover"
            >
                  <View style={styles.content}>
                      <Image source={require('../assets/images/working_lol.png')}/>  
                  </View>

                  <BarraDeNavegacao />

            </ImageBackground>
      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
      },
      
      content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
      }
})
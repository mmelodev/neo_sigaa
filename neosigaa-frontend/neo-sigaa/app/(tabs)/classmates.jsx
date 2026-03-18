import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { BarraDeNavegacao } from "../../components/barraDeNavegacao"

export default function classmates() {
      //adicionar constantes

      return (
            <ImageBackground 
                  style={styles.container} 
                  source={require('../../assets/images/wallpaper5.jpg')} resizeMode="cover"
            >
                  <View style={styles.content}> 
                  </View>

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
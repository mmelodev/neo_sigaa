import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function settings() {
      //adicionar constantes

      return (
            <ImageBackground 
                  style={styles.container} 
                  source={require('../../assets/images/background_home.png')} resizeMode="cover"
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
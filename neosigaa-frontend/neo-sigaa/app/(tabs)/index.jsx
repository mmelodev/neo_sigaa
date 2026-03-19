import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { HeaderHome } from '../../components/HeaderHome.jsx'

const Home = () => {
      //adicionar constantes

      return (
            <ImageBackground 
                  style={styles.container} 
                  source={require('../../assets/images/background_home.png')} resizeMode="cover"
            >
                  <View style={styles.content}>
                      <HeaderHome/>
                  </View>

            </ImageBackground>
      )
}

export default Home

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
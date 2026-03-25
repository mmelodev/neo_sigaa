import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Feed from "../../components/Feed.jsx";
import { HeaderHome } from '../../components/HeaderHome.jsx';

const Home = () => {

      const viewableItems = useSharedValue([])

      return (
            <ImageBackground
                  style={styles.container}
                  source={require('../../assets/images/background_home.png')} resizeMode="cover"
            >
                  <View style={styles.content}>
                        <HeaderHome />
                        <Feed/>
                  </View>

            </ImageBackground>
      )
}

export default Home

const styles = StyleSheet.create({
      container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

      },
      content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
      },
})
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { CardFeed } from '../../components/CardFeed.jsx';
import { HeaderHome } from '../../components/HeaderHome.jsx';
import Feed from "../../components/Feed.jsx";

const Home = () => {

      const viewableItems = useSharedValue([])

      return (
            <ImageBackground
                  style={styles.container}
                  source={require('../../assets/images/background_home.png')} resizeMode="cover"
            >
                  <View style={styles.content}>
                        <HeaderHome />
                  </View>

                  <Feed/>
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
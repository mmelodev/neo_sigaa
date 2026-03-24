import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { CardFeed } from '../../components/CardFeed.jsx';
import { HeaderHome } from '../../components/HeaderHome.jsx';

const cardFeed = Array.from({ length: 10 }, (_, index) => ({
      id: `card-${index}`,
      title: `Card número ${index + 1}`
}));

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

                  <FlatList style={{
                        marginTop: 120,
                        marginBottom: 165
                  }} data={cardFeed} onViewableItemsChanged={({ viewableItems: vItems }) => {
                        viewableItems.value = vItems
                  }} renderItem={({ item }) => (
                        <CardFeed item={item} viewableItems={viewableItems} />
                  )}
                        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
                  />
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



      /*
      feedContent: {
            paddingTop: 120,
            paddingBottom: 200,
            
      },
      scrollView: { 
      },
      cardFeed: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 340,
            height: 220,
            padding: 20,
            backgroundColor: '#FFF',
            margin: 20,
            borderRadius: 30,
      
      },
      cardFeedContent: {
            
      }

      */
})
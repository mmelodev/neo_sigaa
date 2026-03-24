import { FlatList } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { CardFeed } from './CardFeed';

const cardFeed = Array.from({ length: 10 }, (_, index) => ({
      id: `card-${index}`,
      title: `Card número ${index + 1}`
      //modificar isso aqui depois
}));

const Feed = () => {

      const viewableItems = useSharedValue([])

      return (
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
      )
}

export default Feed


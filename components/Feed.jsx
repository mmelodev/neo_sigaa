import { FlatList } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { CardFeed } from './CardFeed';

const cardFeed = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      title: index,
      isLiked: false,
      likes: 0
}));

const Feed = () => {

      const viewableItems = useSharedValue([])

      return (
            <FlatList
                  style={{
                        marginBottom: 135
                  }}
                  data={cardFeed}
                  onViewableItemsChanged={
                        ({ viewableItems: vItems }) => {
                              viewableItems.value = vItems
                        }}
                  renderItem={({ item }) => (
                        <CardFeed item={item} viewableItems={viewableItems} />
                  )}
                  showsVerticalScrollIndicator={false}
            />
      )
}

export default Feed


import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";


const CardFeed = React.memo(({ viewableItems, item }) => {

      const rStyle = useAnimatedStyle(() => {
            const items = viewableItems.value || []

            const isVisible = items.some((vItem) => vItem.isViewable && vItem.item.id === item.id)
            const isText = items.some((vItem) => vItem.isViewable && vItem.item.title === item.title) //não tenho certeza se é assim

            return {
                  transform: [{
                        scale: withTiming(isVisible ? 1 : 0.7)
                  }]
            }
      }, [])

      return (
            <Animated.View style={[styles.cardFeed, rStyle]}>
                  <View style={styles.cardFeedContainer}>
                        <View style={styles.cardFeedTitleBox}>
                              <Text style={styles.cardFeedTitle}>
                                    Cargo - Pessoa
                              </Text>
                        </View>

                        <View style={styles.cardFeedTopicBox}>
                              <Text style={styles.cardFeedTopic}>
                                    Conteúdo do post
                              </Text>
                        </View>

                        <View style={styles.cardFeedIconsBox}>
                              <Feather name="heart" size={24} color={'#FFF'} />
                              <Feather name="message-square" size={24} color={'#FFF'} />
                        </View>
                  </View>
            </Animated.View>
      )
})


const styles = StyleSheet.create({
      cardFeed: {
            width: 340,
            height: 220,
            padding: 20,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            margin: 20,
            borderRadius: 30,
            overflow: 'hidden',
            borderWidth: 2,
            borderColor: "rgba(255, 255, 255, 0.3)",
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            shadowOpacity: 0.1
      },
      cardFeedContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%'
      },
      cardFeedIconsBox: {
            display: 'flex',
            flexDirection: 'row',
            gap: 10
      }
})

export { CardFeed };


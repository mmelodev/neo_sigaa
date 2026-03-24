import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";


const CardFeed = React.memo(({ viewableItems, item }) => {

      const rStyle = useAnimatedStyle(() => {

            const items = viewableItems.value || []

            const isVisible = items.some ((vItem) => vItem.isViewable && vItem.item.id === item.id)
            const isText = items.some ((vItem) => vItem.isViewable && vItem.item.title === item.title) //não tenho certeza se é asssim
                  

            return {
                  transform: [{
                        scale: withTiming(isVisible ? 1 : 0.7)
                  }]
            }
      }, [])

      return (
            <Animated.View style={[styles.cardFeed, rStyle]}>
            </Animated.View>
      )
})


const styles = StyleSheet.create({
      cardFeed: {
            width: 340,
            height: 220,
            padding: 20,
            backgroundColor: '#FFF',
            margin: 20,
            borderRadius: 30,
      }
})

export { CardFeed } 
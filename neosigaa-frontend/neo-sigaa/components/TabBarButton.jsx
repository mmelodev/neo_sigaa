import { PlatformPressable } from "@react-navigation/elements";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Icon } from "../constants/Icon";

export const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, colors, label }) => {

      const scale = useSharedValue(0);

      useEffect(() => { scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, { duration: 350 }) }, [scale, isFocused])

      const animatedIconStyle = useAnimatedStyle(() => {
            const scaleValue = interpolate(scale.value, [0,1], [1, 1.2])

            const top = interpolate (scale.value, [0,1], [0,9])

            return {
                  transform: [{
                        scale: scaleValue
                  }],
                  top
            }
      })

      const animatedTextStyle = useAnimatedStyle(() => {
            const opacity = interpolate(scale.value, [0, 1], [1, 0])

            return {
                  opacity
            }
      })

      return (
            <PlatformPressable
                  onPress={onPress} 
                  onLongPress={onLongPress}
                  style={styles.tabBarItem}
            >

                  <Animated.View style={animatedIconStyle}>
                        {Icon[routeName]({
                              color: isFocused ? '#FFF' : 'rgba(0, 0, 0, 0.31)'
                        })}
                  </Animated.View>
                  <Animated.Text style={[{ color: isFocused ? '#FFF' : 'rgba(0, 0, 0, 0.31)', fontSize: 10}, animatedTextStyle]}>
                        {label}
                  </Animated.Text>
            </PlatformPressable>
      )
}

const styles = StyleSheet.create({
      tabBarItem: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5
      }
})
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { BlurView } from "expo-blur";
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { TabBarButton } from "./TabBarButton";


export function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const [dimensions, setDimensions] = useState({ height: 20, width: 100 })

  const buttonWidth = dimensions.width / state.routes.length

  const onTabBarLayout = (e) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width
    })
  }

  const tabPositionX = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }]
    }
  })

  useEffect(() => {
    tabPositionX.value = withSpring(buttonWidth * state.index, {
      duration: 500,
      damping: 15
    });
  }, [state.index, buttonWidth]);

  return (
    <View onLayout={onTabBarLayout} style={styles.containerNavegacao}>
      <BlurView intensity={20} tint="light" style={StyleSheet.absoluteFill} />

      <Animated.View style={[animatedStyle, {
        position: 'absolute',
        marginHorizontal: 4.5,
        backgroundColor: "rgba(0, 0, 0, 0.31)",
        borderRadius: 30,
        overflow: 'hidden',
        borderWidth: 0,
        height: dimensions.height - 15,
        width: buttonWidth - 12
      }]} />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, { duration: 1000 })
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (

          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            label={label}
          />

          /*<PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {icon [route.name]({
              color: isFocused ? colors.primary : colors.text
            })}
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </PlatformPressable>*/
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  containerNavegacao: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    height: 85,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 330,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: [{ translateY: -50 }],
    marginHorizontal: 30,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1
  },

  /*tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }*/

})
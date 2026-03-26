import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { LikeButton } from "./LikeButton";


const CardFeed = React.memo(({ viewableItems, item }) => {

      const [isLiked, setIsLiked] = useState(item.isLiked ?? false);
      const [likeCount, setLikeCount] = useState(item.likes ?? 0);

      //animação no scroll
      const rStyle = useAnimatedStyle(() => {
            const items = viewableItems.value || []

            const isVisible = items.some((vItem) => vItem.isViewable && vItem.item.id === item.id)

            return {
                  transform: [{
                        scale: withTiming(isVisible ? 1 : 0.7)
                  }]
            }
      }, [])

      const handleLikeChange = (newLikedState) => {
            setIsLiked(newLikedState);
            setLikeCount(prev => newLikedState ? prev + 1 : prev - 1);
      };

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

                              <LikeButton isLiked={isLiked}
                                    likeCount={likeCount}
                                    onLikeChange={handleLikeChange}
                              />

                              <Pressable>
                                    <MaterialCommunityIcons name="comment-text-outline" size={24} color="#FFF" />
                              </Pressable>
                        </View>
                  </View>
            </Animated.View>
      )
})


const styles = StyleSheet.create({
      cardFeed: {
            width: 320,
            height: 220,
            padding: 20,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: 30,
            overflow: 'hidden',
            borderWidth: 2,
            borderColor: "rgba(255, 255, 255, 0.3)",
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            shadowOpacity: 0.1,
            marginTop: 20
      },
      cardFeedContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
      },
      cardFeedIconsBox: {
            display: 'flex',
            flexDirection: 'row',
            gap: 10
      }
})

export { CardFeed };


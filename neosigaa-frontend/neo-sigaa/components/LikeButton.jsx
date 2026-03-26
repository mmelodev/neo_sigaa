import { Pressable, StyleSheet, Text } from 'react-native'
import { IconLikedOff, IconLikedOn } from '../constants/IconFeed'

export const LikeButton = ({ isLiked, likeCount, onLikeChange }) => {

      return (
            <Pressable onPress={() => onLikeChange(!isLiked)} style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed
            ]}>
                  {isLiked ? <IconLikedOn /> : <IconLikedOff />}
                  {likeCount > 0 && (<Text style={styles.count}>{likeCount}</Text>)}
            </Pressable>
      )
}

const styles = StyleSheet.create({
      button: {
            flexDirection: 'row',
            alignItems: 'center',
      },
      buttonPressed: {
            opacity: 0.7,
            transform: [{ scale: 1 }],
      },
      count: {
            color: '#FFF',
            fontSize: 14,
            fontWeight: '500',
            marginLeft: 4,
      }
})
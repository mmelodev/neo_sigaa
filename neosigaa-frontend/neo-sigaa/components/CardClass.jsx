import { StyleSheet, Text, View } from 'react-native'

export const CardClass = ({ style }) => {
      return (
            <View style={[styles.containerCardClass, style]}>
                  <Text>
                        Olá Mundo! 
                  </Text>
            </View>
      )
}

const styles = StyleSheet.create({
      containerCardClass: {
            width: '100%',
            backgroundColor: '#FFF',
            borderRadius: 8,
      }
})
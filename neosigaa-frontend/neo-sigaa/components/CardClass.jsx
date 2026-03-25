import { StyleSheet, Text, View } from 'react-native'

export const CardClass = ({ style }) => {
      return (
            <View style={[styles.containerCardClass, style]}>
                  <Text>

                  </Text>
            </View>
      )
}

const styles = StyleSheet.create({
      containerCardClass: {
            flex: 1,           
            width: '100%',     
            minHeight: 30,
            backgroundColor: '#FFF',
            borderRadius: 8,
            padding: 16,
      }
})
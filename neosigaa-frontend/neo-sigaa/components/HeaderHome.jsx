import { Feather } from "@expo/vector-icons"
import { useFonts } from "expo-font"
import { Link } from "expo-router"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

export const HeaderHome = ({ props }) => {

      const [loaded] = useFonts({
            BricolageGrotesqueRegular: require('../assets/fonts/BricolageGrotesque-Regular.ttf'),
            BricolageGrotesqueBold: require('../assets/fonts/BricolageGrotesque-Bold.ttf')
      })

      if (!loaded) return null

      return (
            <View style={styles.containerHeader}>
                  <Text style={styles.tituloHeader}>
                        app uni
                  </Text>

                  <View style={styles.containerActionsHeader}>
                        <Pressable style={{ paddingLeft: 15 }}>
                              <Link href={'/generalNotifications'}>
                                    <Feather name="bell" size={24} color={'#FFF'} />
                              </Link>
                        </Pressable>

                        <Pressable>
                              <Link href={'/user'}>
                                    <Image source={require('../assets/images/example_profile_pic.png')} />
                              </Link>
                        </Pressable>
                  </View>
            </View>
      )
}

const styles = StyleSheet.create({
      containerHeader: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 300,
            transform: [{ translateY: 100 }],
      },

      containerActionsHeader: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 5,
            backgroundColor: 'rgba(86, 86, 86, 0.37)',
            width: 125,
            borderRadius: 37,
      },

      tituloHeader: {
            fontFamily: 'BricolageGrotesqueBold',
            fontSize: 20
      }
})

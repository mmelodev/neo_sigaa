import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-web";
import { CardClass } from "../../components/CardClass";
import { HeaderHome } from "../../components/HeaderHome";

function classmates() {
      return (
            <ImageBackground
                  style={styles.container}
                  source={require('../../assets/images/background_home.png')} resizeMode="cover"
            >
                  <SafeAreaView style={styles.safeArea}>
                        <View style={styles.content}>
                              <HeaderHome />
                              <CardClass />
                        </View>
                  </SafeAreaView>

            </ImageBackground>
      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
      },

      content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
      },
      safeArea: {
            flex: 1,
      }
})

export default classmates
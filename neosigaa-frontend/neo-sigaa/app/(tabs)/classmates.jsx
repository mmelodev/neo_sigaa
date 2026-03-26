import { ImageBackground, StyleSheet, View } from "react-native";
import { CardClass } from "../../components/CardClass";
import { HeaderHome } from "../../components/HeaderHome";

function classmates() {
      //TODO: adicionar os pressables para cada item dentro do container para visualizar cada turma indiviudalmente -> A visualização individual de uma turma deve conter: titulo da turma, curso correspondente, professor responsável pela turma naquele momento, alunos matriculados na turma com seus nomes e fotos vísiveis e ações internas na página como visualizar as infos de um aluno ao clicar na foto.
      return (
            <ImageBackground
                  style={styles.container}
                  source={require('../../assets/images/background_home.png')} resizeMode="cover"
            >

                  <View style={styles.content}>
                        <HeaderHome />
                        <View style={styles.centerContainer}>
                              <CardClass style={styles.card} />
                        </View>
                  </View>

            </ImageBackground>
      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
      },

      content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
      },
      centerContainer: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
      },
      card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            width: 300,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: 30,
            overflow: 'hidden',
            borderWidth: 2,
            borderColor: "rgba(255, 255, 255, 0.3)",
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            shadowOpacity: 0.1,
            marginBottom: 120
      }
})

export default classmates
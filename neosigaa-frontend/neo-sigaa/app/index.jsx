import { useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { BarraDeNavegacao } from "../components/barraDeNavegacao";

export default function Index() {
      //adicionar constantes

      return (
         <View style={styles.container}>
            <View style={styles.content}>
                  <Text>Olá Mundo</Text>
            </View>

            <BarraDeNavegacao/>
            
         </View>   
      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1
      },

      content: {
            flex: 1
      }
})
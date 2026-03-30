import { Tabs } from "expo-router"
import { TabBar } from "../../components/TabBar"

const TabLayout = () => {
      return (
            <Tabs tabBar={props => <TabBar {...props}/>} initialRouteName="index">
                  <Tabs.Screen name='classmates' options={{ title: "Turma", headerShown: false}} />
                  <Tabs.Screen name='grades' options={{ title: "Notas", headerShown: false }} />
                  <Tabs.Screen name='index' options={{ title: "Home", headerShown: false}} />
                  <Tabs.Screen name='frequency' options={{ title: "Frequência", headerShown: false }} />
                  <Tabs.Screen name='settings' options={{ title: "Opções", headerShown: false }} />
            </Tabs>
      )
}

export default TabLayout
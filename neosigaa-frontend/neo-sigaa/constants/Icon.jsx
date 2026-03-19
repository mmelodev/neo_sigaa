import { Feather } from "@expo/vector-icons";

export const Icon = {
  index: (props) => <Feather name='home' size={24} {...props} />,
  grades: (props) => <Feather name='book-open' size={24} {...props} />,
  frequency: (props) => <Feather name='bar-chart' size={24} {...props} />,
  settings: (props) => <Feather name='settings' size={24} {...props} />,
  classmates: (props) => <Feather name='users' size={24} {...props} />
}
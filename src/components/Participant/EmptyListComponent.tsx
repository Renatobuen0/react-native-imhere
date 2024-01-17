import { styles } from "./styles";
import { Text } from "react-native";

export function EmptyListComponent() {
  return (
    <Text style={styles.listEmptyText}>
      Ninguém chegou no evento ainda?
      {"\n"}
      Adicione participantes a sua lista de presença.
    </Text>
  );
}

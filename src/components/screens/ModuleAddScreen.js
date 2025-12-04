import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../entity/modules/ModuleForm";

const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisations -----------------
  const { onAdd } = route.params;

  //State ---------------------------
  // Handlers -----------------------
  const handleCancel = () => navigation.goBack();

  // View ---------------------------
  return (
    <Screen>
      <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'lightgray',
  }
});

export default ModuleAddScreen;

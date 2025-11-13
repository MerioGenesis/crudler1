import { LogBox, Text, StyleSheet } from 'react-native';
import useLoad from '../API/useLoad.js';
import Screen from '../layout/Screen';
import Icons from '../UI/Icons.js';
import { Button, ButtonTray } from '../UI/Button.js';

import ModuleList from '../entity/modules/ModuleList.js';



const ModuleListScreen = ({ navigation }) => {
  //Initialisations -----------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  const modulesEndpoint = 'https://softwarehub.uk/unibase/api/modules';

  // State --------------------------
  const [modules, setModules, isLoading] = useLoad(modulesEndpoint);

  
  
  // Handlers -----------------------
  const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  const handleAdd = (module) => setModules([...modules, module]);

  const handleModify = (updatedModule) => setModules(
    modules.map((module) => (module.ModuleID === updatedModule.ModuleID) ? updatedModule : modules)
  );

  const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete, onModify });
  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  }

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  }

  const onModify = (module) =>{
    handleModify(module);
    //navigation.navigate("ModuleListScreen");
    //navigation.popToTop();
    navigation.replace('ModuleViewScreen', {module, onDelete, onModify})
  }
  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd });

  // View ---------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {
        isLoading &&<Text>Loading records...</Text>
      }
      <Text>Loading records...</Text>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  FlatList,
} from "react-native";

import Form from "./src/components/Form";
import Paciente from "./src/components/Paciente";

const App = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [pacientes, setPacientes] = React.useState([]);
  const [paciente, setPaciente] = React.useState({});

  const pacienteEditar = (id) => {
    const pacienteAEditar = pacientes.filter((item) => item.id === id);
    setPaciente(pacienteAEditar[0]);
  };

  const nuevaCitaHandler = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {""}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable onPress={nuevaCitaHandler} style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.noPacientesText}>No hay pacientes aun</Text>
      ) : (
        <FlatList
          style={styles.listadoPacientes}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
              />
            );
          }}
        />
      )}

      <Form
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        pacienteAEditar={paciente}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "#374151",
    fontWeight: "600",
  },

  tituloBold: {
    fontWeight: "900",
    color: "#6D28D9",
  },

  btnNuevaCita: {
    alignSelf: "center",
    width: "85%",
    maxWidth: 400,
    marginTop: 30,
    padding: 15,
    backgroundColor: "#6D28D9",
    borderRadius: 10,
  },

  btnTextoNuevaCita: {
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#FFF",
  },

  noPacientesText: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
  },

  listadoPacientes: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;

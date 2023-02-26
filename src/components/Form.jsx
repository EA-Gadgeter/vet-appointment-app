import React from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  SafeAreaView,
} from "react-native";

import DatePicker from "react-native-date-picker";

const Form = ({
  modalVisible,
  setModalVisible,
  pacientes,
  setPacientes,
  pacienteAEditar,
  setPacienteAEditar,
}) => {
  const [id, setId] = React.useState("");

  const [paciente, setPaciente] = React.useState("");
  const [propietario, setPropietario] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [fechaAlta, setfechaAlta] = React.useState(new Date());
  const [sintomas, setSintomas] = React.useState("");

  React.useEffect(() => {
    if (Object.keys(pacienteAEditar).length > 0) {
      setId(pacienteAEditar.id);
      setPaciente(pacienteAEditar.paciente);
      setPropietario(pacienteAEditar.propietario);
      setEmail(pacienteAEditar.email);
      setTelefono(pacienteAEditar.telefono);
      setfechaAlta(pacienteAEditar.fechaAlta);
      setSintomas(pacienteAEditar.sintomas);
    }
  }, [pacienteAEditar]);

  const closeModal = () => {
    setModalVisible(false);
    setId("");
    setPacienteAEditar({});
    setPaciente("");
    setPropietario("");
    setTelefono("");
    setEmail("");
    setfechaAlta(new Date());
    setSintomas("");
  };

  const handleCita = () => {
    if ([paciente, propietario, email, fechaAlta, sintomas].includes("")) {
      Alert.alert("Error", "Todos los campos son obligatorios.");

      return;
    }

    const nuevoPaciente = {
      paciente,
      propietario,
      email,
      fechaAlta,
      telefono,
      sintomas,
    };

    if (id) {
      nuevoPaciente.id = id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
    } else {
      nuevoPaciente.id = Date.now();
      setPacientes([...pacientes, nuevoPaciente]);
    }

    closeModal();
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            {pacienteAEditar.id ? "Editar" : "Nueva"} {""}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable onPress={closeModal} style={styles.btnCancelar}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={"#666"}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={"#666"}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="ejemplo@gmail.com"
              placeholderTextColor={"#666"}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="555 555 5555"
              placeholderTextColor={"#666"}
              maxLength={10}
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha de Alta</Text>
            <View style={styles.contenedorDatePicker}>
              <DatePicker
                date={fechaAlta}
                locale="es"
                androidVariant="nativeAndroid"
                onDateChange={setfechaAlta}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas Paciente</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Sintomas Paciente"
              placeholderTextColor={"#666"}
              multiline={true}
              numberOfLines={4}
              value={sintomas}
              onChangeText={setSintomas}
            />
          </View>

          <Pressable onPress={handleCita} style={styles.btnNuevaCita}>
            <Text style={styles.btnNuevaCitaTexto}>
              {pacienteAEditar.id ? "Modificar" : "Agregar Paciente"}
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    backgroundColor: "#6D28D9",
  },

  titulo: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "#FFF",
  },

  tituloBold: {
    fontWeight: "900",
  },

  btnCancelar: {
    alignSelf: "center",
    width: "85%",
    maxWidth: 400,
    marginVertical: 30,
    padding: 15,
    backgroundColor: "#5827A4",
    borderRadius: 10,
  },

  btnCancelarTexto: {
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    color: "#FFF",
  },

  campo: {
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 10,
  },

  label: {
    fontWeight: "600",
    color: "#FFF",
    marginTop: 15,
    marginBottom: 10,
    fontSize: 20,
  },

  input: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },

  sintomasInput: {
    minHeight: 100,
  },

  contenedorDatePicker: {
    backgroundColor: "#FFF",
    borderRadius: 10,
  },

  btnNuevaCita: {
    alignSelf: "center",
    width: "85%",
    maxWidth: 400,
    marginVertical: 50,
    padding: 15,
    backgroundColor: "#F59E0B",
    borderRadius: 10,
  },

  btnNuevaCitaTexto: {
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#5827A4",
  },
});

export default Form;

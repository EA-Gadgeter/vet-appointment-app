import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Paciente = ({ item, setModalVisible, pacienteEditar }) => {
  const { paciente, fechaAlta, id } = item;

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);

    const opciones = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return nuevaFecha.toLocaleDateString("es-ES", opciones);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente: </Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha(fechaAlta)}</Text>

      <View style={styles.contendorBotones}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
            pacienteEditar(id);
          }}
          style={[styles.btn, styles.btnEditar]}
        >
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>

        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#94A3B8",
  },

  label: {
    marginBottom: 10,
    fontWeight: "700",
    color: "#374151",
    textTransform: "uppercase",
  },

  texto: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "700",
    color: "#6D28D9",
  },

  fecha: {
    color: "#374151",
  },

  contendorBotones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  btnEditar: {
    backgroundColor: "#F59E0B",
  },

  btnTexto: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#FFF",
  },

  btnEliminar: {
    backgroundColor: "#EF4444",
  },
});

export default Paciente;

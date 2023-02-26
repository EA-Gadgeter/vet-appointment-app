import React from "react";
import { Text, SafeAreaView, Pressable, View, StyleSheet } from "react-native";

const InformacionPaciente = ({ paciente, setPaciente, setModalPaciente }) => {
  const cerrarModal = () => {
    setModalPaciente(false);
    setPaciente({});
  };

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
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Información <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <Pressable style={styles.btnCerrar} onPress={cerrarModal}>
        <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
      </Pressable>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Paciente:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha de Alta:</Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fechaAlta)}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Síntomas:</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#F59E0B",
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

  btnCerrar: {
    alignSelf: "center",
    width: "85%",
    maxWidth: 400,
    marginVertical: 30,
    padding: 15,
    backgroundColor: "#E06900",
    borderRadius: 10,
  },

  btnCerrarTexto: {
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    color: "#FFF",
  },

  contenido: {
    marginHorizontal: 30,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  campo: {
    marginBottom: 12,
  },

  label: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#374151",
  },

  valor: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default InformacionPaciente;

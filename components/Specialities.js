import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const services = [
  { id: '1', title: 'CARDIOLOGÍA', desc: 'Cuidado especializado para la prevención y salud cardiovascular.' },
  { id: '2', title: 'MEDICINA INTERNA', desc: 'Evaluación clínica completa para el diagnóstico y tratamiento integral.' },
  { id: '3', title: 'PRUEBAS DIAGNÓSTICAS', desc: 'Tecnología avanzada para un diagnóstico claro y certero.' },
  { id: '4', title: 'PREVENCIÓN', desc: 'Programas de salud preventivos adaptados a tu ritmo de vida.' },
  { id: '5', title: 'SALUD INTEGRAL', desc: 'Un enfoque global que conecta tu bienestar físico y emocional.', highlight: true },
];

export default function Specialities() {
  return (
    <View style={styles.servicesSection}>
      <Text style={styles.sectionTitle}>NUESTRAS ESPECIALIDADES</Text>
      <View style={styles.divider} />

      <View style={styles.grid}>
        {services.map((item) => (
          <View 
            key={item.id} 
            style={[
              styles.card, 
              item.highlight && styles.highlightCard
            ]}
          >
            <Text style={[styles.cardTitle, item.highlight && styles.highlightText]}>
              {item.title}
            </Text>
            <Text style={[styles.cardDesc, item.highlight && styles.highlightText]}>
              {item.desc}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  servicesSection: {
    backgroundColor: COLORS.blanco,
    paddingHorizontal: '5%',
    paddingVertical: 60,
  },
  sectionTitle: {
    fontFamily: FONTS.light,
    fontSize: 22,
    letterSpacing: 2,
    textAlign: 'center',
    color: COLORS.textoOscuro,
  },
  divider: {
    width: 50,
    height: 2,
    backgroundColor: COLORS.verdePiedra,
    alignSelf: 'center',
    marginVertical: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: COLORS.fondoCrema,
    padding: 25,
    borderRadius: 8,
    width: 250,
    borderWidth: 1,
    borderColor: 'rgba(143, 158, 139, 0.15)',
  },
  highlightCard: {
    backgroundColor: COLORS.verdePiedra,
  },
  cardTitle: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    letterSpacing: 1,
    color: COLORS.textoOscuro,
    marginBottom: 10,
  },
  cardDesc: {
    fontFamily: FONTS.light,
    fontSize: 13,
    color: COLORS.textoSuave,
    lineHeight: 18,
  },
  highlightText: {
    color: COLORS.blanco,
  },
});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function Header() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={[styles.navbar, isMobile && styles.navbarMobile]}>
      {/* LOGO */}
      <View style={styles.logoContainer}>
        <Text style={styles.brandName}>ARCO</Text>
        <Text style={styles.brandSub}>CLÍNICA</Text>
      </View>

      {/* ENLACES DE NAVEGACIÓN (Escritorio) */}
      {!isMobile && (
        <View style={styles.navLinks}>
          <TouchableOpacity><Text style={styles.navText}>Especialidades</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navText}>Filosofía</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navText}>Instalaciones</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navText}>Contacto</Text></TouchableOpacity>
        </View>
      )}

      {/* BOTÓN CITA PREVIA */}
      <TouchableOpacity style={styles.btnPrimary}>
        <Text style={styles.btnPrimaryText}>Pedir Cita</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(143, 158, 139, 0.2)',
    backgroundColor: COLORS.fondoCrema,
  },
  navbarMobile: {
    flexDirection: 'column',
    gap: 15,
  },
  logoContainer: {
    alignItems: 'flex-start',
  },
  brandName: {
    fontFamily: FONTS.light,
    fontSize: 22,
    letterSpacing: 4,
    color: COLORS.textoOscuro,
  },
  brandSub: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    letterSpacing: 3,
    color: COLORS.textoSuave,
  },
  navLinks: {
    flexDirection: 'row',
    gap: 30,
  },
  navText: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.textoOscuro,
  },
  btnPrimary: {
    backgroundColor: COLORS.verdePiedra,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  btnPrimaryText: {
    color: COLORS.blanco,
    fontFamily: FONTS.medium,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function Hero() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={[styles.hero, isMobile && styles.heroMobile]}>
      <View style={styles.heroTextContainer}>
        <Text style={styles.heroTitle}>Salud Integral & Bienestar</Text>
        <Text style={styles.slogan}>Cuidamos lo que te mueve</Text>
        <Text style={styles.heroDescription}>
          Un espacio médico pensado para ofrecerte un diagnóstico preciso y una atención personalizada con el máximo confort.
        </Text>
        
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.btnPrimaryLarge}>
            <Text style={styles.btnPrimaryText}>Solicitar Cita Online</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOutlineLarge}>
            <Text style={styles.btnOutlineText}>Conocer Especialidades</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.imagePlaceholder}>
        <Text style={styles.placeholderText}>[ Fotografía Recepción / Sala de Espera ]</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: 60,
    alignItems: 'center',
    gap: 40,
  },
  heroMobile: {
    flexDirection: 'column',
  },
  heroTextContainer: {
    flex: 1,
  },
  heroTitle: {
    fontFamily: FONTS.light,
    fontSize: 40,
    color: COLORS.textoOscuro,
    marginBottom: 8,
  },
  slogan: {
    fontFamily: FONTS.italic,
    fontSize: 26,
    color: COLORS.verdeOscuro,
    marginBottom: 16,
  },
  heroDescription: {
    fontFamily: FONTS.light,
    fontSize: 16,
    color: COLORS.textoSuave,
    lineHeight: 24,
    marginBottom: 28,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
  },
  btnPrimaryLarge: {
    backgroundColor: COLORS.verdePiedra,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 4,
  },
  btnPrimaryText: {
    color: COLORS.blanco,
    fontFamily: FONTS.medium,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  btnOutlineLarge: {
    borderWidth: 1,
    borderColor: COLORS.textoOscuro,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 4,
  },
  btnOutlineText: {
    color: COLORS.textoOscuro,
    fontFamily: FONTS.medium,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  imagePlaceholder: {
    flex: 1,
    height: 380,
    backgroundColor: COLORS.maderaSuave,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  placeholderText: {
    fontFamily: FONTS.regular,
    color: COLORS.textoSuave,
  },
});

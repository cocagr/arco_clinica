import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions, ImageBackground } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const backgroundImages = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop'
];

export default function Hero() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground 
      source={{ uri: backgroundImages[currentImageIndex] }} 
      style={[styles.hero, isMobile && styles.heroMobile]}
      resizeMode="cover"
      imageStyle={{ transition: 'all 1s ease-in-out' }}
    >
      <View style={[styles.contentBubble, isMobile && styles.contentBubbleMobile]}>
        <Text style={styles.heroTitle}>Cuidamos lo que te mueve</Text>
        <Text style={styles.slogan}>Especialistas en el manejo integral de salud y riesgo cardiovascular.</Text>
        <Text style={styles.heroDescription}>
          
        </Text>
        
        <View style={[styles.buttonGroup, isMobile && styles.buttonGroupMobile]}>
          <TouchableOpacity style={styles.btnPrimaryLarge}>
            <Text style={styles.btnPrimaryText}>Solicitar Cita Online</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOutlineLarge}>
            <Text style={styles.btnOutlineText}>Conocer Especialidades</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    minHeight: 550,
    paddingHorizontal: '5%',
    paddingVertical: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  heroMobile: {
    alignItems: 'center',
    paddingHorizontal: '3%',
    minHeight: 450,
  },
  contentBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 40,
    borderRadius: 16,
    maxWidth: 650,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  contentBubbleMobile: {
    padding: 25,
    width: '100%',
  },
  slogan: {
    fontFamily: FONTS.light,
    fontSize: 24,
    color: COLORS.textoOscuro,
    marginBottom: 8,
  },
  heroTitle: {
    fontFamily: FONTS.italic,
    fontSize: 40,
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
  buttonGroupMobile: {
    flexDirection: 'column',
    width: '100%',
  },
  btnPrimaryLarge: {
    backgroundColor: COLORS.verdePiedra,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 4,
    alignItems: 'center',
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
    alignItems: 'center',
  },
  btnOutlineText: {
    color: COLORS.textoOscuro,
    fontFamily: FONTS.medium,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

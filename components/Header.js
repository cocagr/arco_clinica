import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions, Animated } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function Header({ scrollY }) {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 768;

  const SCROLL_DISTANCE = height * 0.5; 

  const logoScale = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [isMobile ? 2.5 : 3.5, 1], 
    extrapolate: 'clamp',
  });

  const logoTranslateY = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [(height / 2) - 50, 0],
    extrapolate: 'clamp',
  });

  const centerOffset = (width / 2) - (width * 0.05) - (isMobile ? 40 : 60);
  const logoTranslateX = scrollY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [centerOffset, 0],
    extrapolate: 'clamp',
  });

  const menuOpacity = scrollY.interpolate({
    inputRange: [SCROLL_DISTANCE * 0.5, SCROLL_DISTANCE],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const bgOpacity = scrollY.interpolate({
    inputRange: [SCROLL_DISTANCE * 0.6, SCROLL_DISTANCE],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.headerWrapper}>
      <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: COLORS.fondoCrema, opacity: bgOpacity }]} />
      
      <View style={[styles.navbar, isMobile && styles.navbarMobile]}>
        {/* LOGO ANIMADO */}
        <Animated.View 
          style={[
            styles.logoContainer,
            {
              transform: [
                { translateX: logoTranslateX },
                { translateY: logoTranslateY },
                { scale: logoScale }
              ]
            }
          ]}
        >
          <Text style={styles.brandName}>ARCO</Text>
          <Text style={styles.brandSub}>CLÍNICA</Text>
        </Animated.View>

        {!isMobile && (
          <Animated.View style={[styles.navLinks, { opacity: menuOpacity }]}>
            <TouchableOpacity><Text style={styles.navText}>Especialidades</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navText}>Filosofía</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navText}>Instalaciones</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navText}>Contacto</Text></TouchableOpacity>
          </Animated.View>
        )}

        <Animated.View style={{ opacity: menuOpacity }}>
          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Pedir Cita</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 20,
  },
  navbarMobile: {
    flexDirection: 'column',
    gap: 15,
  },
  logoContainer: {
    alignItems: 'flex-start',
    transformOrigin: 'center center', 
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

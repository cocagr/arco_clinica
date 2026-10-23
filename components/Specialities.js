import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, LayoutAnimation, Platform, UIManager } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const services = [
  { 
    id: '1', 
    title: 'MEDICINA INTERNA', 
    desc: 'Cuidado especializado para la prevención y salud cardiovascular.', 
    highlight: true,
    details: 'El Dr. Ramírez cuenta con más de 15 años de experiencia tratando patologías complejas y crónicas. Su enfoque integral garantiza el mejor tratamiento.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  { 
    id: '2', 
    title: 'NUTRICIÓN', 
    desc: 'Planes alimenticios personalizados para mejorar tu calidad de vida.', 
    highlight: true,
    details: 'La Dra. Gómez te ayudará a alcanzar tus objetivos físicos y de salud mediante reeducación nutricional sin dietas restrictivas extremas.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  { 
    id: '3', 
    title: 'PSICOLOGÍA', 
    desc: 'Apoyo emocional y terapia cognitivo-conductual.', 
    highlight: true,
    details: 'Ofrecemos un espacio seguro para tratar ansiedad, depresión, gestión del estrés y desarrollo personal con terapeutas especializados.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

export default function Specialities() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.servicesSection}>
      <Text style={styles.sectionTitle}>NUESTRAS ESPECIALIDADES</Text>
      <View style={styles.divider} />

      <View style={styles.grid}>
        {services.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <Pressable 
              key={item.id} 
              onPress={() => toggleExpand(item.id)}
              style={({ hovered }) => [
                styles.card, 
                item.highlight && styles.highlightCard,
                hovered && styles.cardHovered,
                isExpanded && styles.cardExpanded
              ]}
            >
              <Text style={[styles.cardTitle, item.highlight && styles.highlightText]}>
                {item.title}
              </Text>
              
              {!isExpanded ? (
                <Text style={[styles.cardDesc, item.highlight && styles.highlightText]}>
                  {item.desc}
                </Text>
              ) : (
                <View style={styles.expandedContent}>
                  <Image source={{ uri: item.image }} style={styles.specialistImage} />
                  <Text style={[styles.cardDetails, item.highlight && styles.highlightText]}>
                    {item.details}
                  </Text>
                </View>
              )}
            </Pressable>
          );
        })}
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
    minHeight: 150,
    borderWidth: 1,
    borderColor: 'rgba(143, 158, 139, 0.15)',
    transitionProperty: 'transform, box-shadow',
    transitionDuration: '0.3s',
  },
  highlightCard: {
    backgroundColor: COLORS.verdePiedra,
  },
  cardHovered: {
    transform: [{ translateY: -5 }],
    shadowColor: COLORS.textoOscuro,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  cardExpanded: {
    width: '100%',
    maxWidth: 520,
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
  expandedContent: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  specialistImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: COLORS.blanco,
  },
  cardDetails: {
    fontFamily: FONTS.light,
    fontSize: 14,
    color: COLORS.textoSuave,
    lineHeight: 20,
    flex: 1,
  }
});

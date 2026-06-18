import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { LAYOUT } from '../constants/layout';

export default function ActionButton({ iconName, onPress, disabled = false }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.glassFrame}>
        <BlurView 
          intensity={LAYOUT.glass.intensity} 
          tint={LAYOUT.glass.tint} 
          style={StyleSheet.absoluteFill} 
        />
        <Pressable
          onPress={onPress}
          disabled={disabled}
          // This creates the perfect Apple fade effect when pressed, without crashing the GPU
          style={({ pressed }) => [
            styles.touchableArea, 
            { opacity: pressed || disabled ? 0.4 : 1 }
          ]}
        >
          <Ionicons name={iconName} size={22} color="#FFFFFF" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  glassFrame: {
    width: LAYOUT.bottomBar.circleSize,
    height: LAYOUT.bottomBar.circleSize,
    borderRadius: LAYOUT.bottomBar.circleSize / 2,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  touchableArea: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

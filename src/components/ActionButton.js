// src/components/ActionButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, GEOMETRY } from '../constants/layout';

export default function ActionButton({ iconName, onPress, disabled = false }) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        disabled && styles.disabled
      ]} 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Ionicons 
        name={iconName} 
        size={20} 
        color={disabled ? COLORS.textSecondary : COLORS.iconActive} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: GEOMETRY.actionButtonSize,
    height: GEOMETRY.actionButtonSize,
    borderRadius: GEOMETRY.actionButtonRadius, // Perfect circular geometry
    backgroundColor: COLORS.actionPillBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5, // Visual feedback when history back-navigation is unavailable
  }
});

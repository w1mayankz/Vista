import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LAYOUT } from '../constants/layout';

export default function ActionButton({ iconName, onPress, disabled = false }) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
          styles.solidFrame, 
          { opacity: pressed || disabled ? 0.4 : 1 }
        ]}
      >
        {/* Pure black icons for light theme */}
        <Ionicons name={iconName} size={22} color="#000000" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // Exact iOS 26 Light Theme Drop Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12, 
    shadowRadius: 12,
    elevation: 6, // For Android shadow
  },
  solidFrame: {
    width: LAYOUT.bottomBar.circleSize,
    height: LAYOUT.bottomBar.circleSize,
    borderRadius: LAYOUT.bottomBar.circleSize / 2,
    backgroundColor: '#FFFFFF', // 100% Opaque White
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.05)', // Extremely subtle rim
    justifyContent: 'center',
    alignItems: 'center',
  },
});

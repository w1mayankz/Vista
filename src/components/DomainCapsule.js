import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { LAYOUT } from '../constants/layout';

export default function DomainCapsule({ onPress }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.glassFrame}>
        {/* TRUE LIQUID GLASS */}
        <BlurView intensity={LAYOUT.glass.intensity} tint={LAYOUT.glass.tint} style={StyleSheet.absoluteFill} />
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styles.touchableArea, 
            { opacity: pressed ? 0.4 : 1 }
          ]}
        >
          <Ionicons name="reader-outline" size={18} color="#FFFFFF" />
          <Text style={styles.placeholderText}>apple.com</Text>
          <Ionicons name="refresh" size={18} color="#FFFFFF" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  glassFrame: {
    height: LAYOUT.bottomBar.squircleHeight,
    borderRadius: LAYOUT.bottomBar.squircleRadius,
    overflow: 'hidden', // CRITICAL: Keeps blur inside the squircle
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  touchableArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  placeholderText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
});

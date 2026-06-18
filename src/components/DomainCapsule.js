import React, { useRef } from 'react';
import { Animated, Pressable, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { LAYOUT } from '../constants/layout';

export default function DomainCapsule({ onPress }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95, 
      useNativeDriver: true,
      speed: 20,
      bounciness: 5,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 15,
      bounciness: 12,
    }).start();
  };

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ scale: scaleAnim }] }]}>
      <BlurView intensity={LAYOUT.glass.intensity} tint={LAYOUT.glass.tint} style={styles.blurContainer}>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={onPress}
          style={styles.touchableArea}
        >
          {/* CORRECT LEFT ICON: Website/Reader View */}
          <Ionicons name="reader-outline" size={18} color="#FFFFFF" style={styles.icon} />
          
          {/* CENTER TEXT */}
          <Text style={styles.placeholderText}>Type Something</Text>
          
          {/* CORRECT RIGHT ICON: Refresh/Reload */}
          <Ionicons name="refresh" size={18} color="#FFFFFF" style={styles.icon} />
        </Pressable>
      </BlurView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  blurContainer: {
    height: LAYOUT.bottomBar.squircleHeight,
    borderRadius: LAYOUT.bottomBar.squircleRadius,
    overflow: 'hidden',
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
    opacity: 0.8,
  },
  icon: {
    opacity: 0.8,
  }
});

import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { LAYOUT } from '../constants/layout';

export default function ActionButton({ iconName, onPress, disabled = false }) {
  // 1. The Physics Engine: Starts at 100% scale
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // 2. Spring inwards when pressed
  const handlePressIn = () => {
    if (disabled) return;
    Animated.spring(scaleAnim, {
      toValue: 0.85,
      useNativeDriver: true,
      speed: 20,
      bounciness: 5,
    }).start();
  };

  // 3. Bounce back out when released
  const handlePressOut = () => {
    if (disabled) return;
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
          disabled={disabled}
        >
          {/* Using Ionicons exactly as requested */}
          <Ionicons 
            name={iconName} 
            size={22} 
            color={disabled ? 'rgba(255, 255, 255, 0.4)' : '#FFFFFF'} 
          />
        </Pressable>
      </BlurView>
    </Animated.View>
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
  blurContainer: {
    width: LAYOUT.bottomBar.circleSize,
    height: LAYOUT.bottomBar.circleSize,
    borderRadius: LAYOUT.bottomBar.circleSize / 2,
    overflow: 'hidden',
    // THE THIN GLASS BORDER: This gives it the physical hardware edge
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

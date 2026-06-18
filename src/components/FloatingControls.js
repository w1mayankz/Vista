import React, { useEffect, useRef } from 'react';
import { Animated, Keyboard, StyleSheet, TextInput, Platform } from 'react-native';
import ActionButton from './ActionButton';
import DomainCapsule from './DomainCapsule';
import { LAYOUT } from '../constants/layout';

export default function FloatingControls() {
  // The GPU-accelerated value that will move the entire bottom row up and down
  const translateY = useRef(new Animated.Value(0)).current;
  
  // A reference to our hidden keyboard trigger
  const inputRef = useRef(null);

  useEffect(() => {
    // Listeners that detect the exact millisecond the keyboard opens/closes
    const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const keyboardShowListener = Keyboard.addListener(showEvent, (e) => {
      // Push the bar up by the exact height of the keyboard
      Animated.spring(translateY, {
        toValue: -e.endCoordinates.height + 10, // Moves up (negative Y) and adds 10px breathing room
        useNativeDriver: true, // Forces 60fps animation
        speed: 14,
        bounciness: 4,
      }).start();
    });

    const keyboardHideListener = Keyboard.addListener(hideEvent, () => {
      // Drop the bar back to its original resting place
      Animated.spring(translateY, {
        toValue: 0, 
        useNativeDriver: true,
        speed: 14,
        bounciness: 4,
      }).start();
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  // When the user taps the glass capsule, focus the hidden input to summon the keyboard
  const handleCapsulePress = () => {
    inputRef.current?.focus();
  };

  return (
    <Animated.View style={[styles.masterContainer, { transform: [{ translateY }] }]}>
      
      {/* This is the ghost input. It stays invisible but forces the 
        phone's native keyboard to open when the capsule is tapped. 
      */}
      <TextInput 
        ref={inputRef} 
        style={styles.hiddenInput} 
        keyboardType="web-search"
        keyboardAppearance="dark"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* LEFT: Back Button (Disabled on Start Page, so it's slightly dimmed) */}
      <ActionButton iconName="chevron-back" disabled={true} onPress={() => {}} />
      
      {/* CENTER: The Domain Squircle */}
      <DomainCapsule onPress={handleCapsulePress} />
      
      {/* RIGHT: Menu Button */}
      <ActionButton iconName="ellipsis-horizontal" onPress={() => {}} />

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  masterContainer: {
    position: 'absolute',
    bottom: LAYOUT.bottomBar.bottomOffset,
    left: LAYOUT.bottomBar.horizontalPadding,
    right: LAYOUT.bottomBar.horizontalPadding,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: LAYOUT.bottomBar.elementSpacing, // Perfectly separates the 3 pieces
    backgroundColor: 'transparent',
    zIndex: 100, // Forces the bar to stay on top of all other elements
  },
  hiddenInput: {
    display: 'none',
  }
});

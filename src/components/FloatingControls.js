import React, { useEffect, useRef } from 'react';
import { Animated, Keyboard, StyleSheet, TextInput, Platform } from 'react-native';
import ActionButton from './ActionButton';
import DomainCapsule from './DomainCapsule';
import { LAYOUT } from '../constants/layout';

export default function FloatingControls() {
  const translateY = useRef(new Animated.Value(0)).current;
  const inputRef = useRef(null);

  useEffect(() => {
    const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const keyboardShowListener = Keyboard.addListener(showEvent, (e) => {
      Animated.timing(translateY, {
        toValue: -e.endCoordinates.height + 10,
        useNativeDriver: true,
        duration: 250, // Changed from spring to timing for absolute stability
      }).start();
    });

    const keyboardHideListener = Keyboard.addListener(hideEvent, () => {
      Animated.timing(translateY, {
        toValue: 0, 
        useNativeDriver: true,
        duration: 200,
      }).start();
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const handleCapsulePress = () => {
    inputRef.current?.focus();
  };

  return (
    <Animated.View style={[styles.masterContainer, { transform: [{ translateY }] }]}>
      <TextInput 
        ref={inputRef} 
        style={styles.safeHiddenInput} 
        keyboardType="web-search"
        keyboardAppearance="dark"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <ActionButton iconName="chevron-back" disabled={true} onPress={() => {}} />
      <DomainCapsule onPress={handleCapsulePress} />
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
    gap: LAYOUT.bottomBar.elementSpacing,
    backgroundColor: 'transparent',
    zIndex: 100,
  },
  safeHiddenInput: {
    // THE FIX: Keeps the element alive in the UI thread but completely invisible
    position: 'absolute',
    width: 0,
    height: 0,
    opacity: 0,
  }
});

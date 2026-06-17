// src/components/FloatingControls.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import ActionButton from './ActionButton';
import DomainCapsule from './DomainCapsule';
import { COLORS, GEOMETRY, EFFECTS } from '../constants/layout';

export default function FloatingControls({ navState, goBack, reload }) {
  return (
    <View style={styles.positioningLayer}>
      <BlurView 
        intensity={EFFECTS.blurIntensity} 
        tint={EFFECTS.blurTint} 
        style={styles.liquidGlassContainer}
      >
        {/* Left: History Back Chevron */}
        <ActionButton 
          iconName="chevron-back" 
          onPress={goBack} 
          disabled={!navState.canGoBack} 
        />
        
        {/* Center: Active Domain, Tab Switcher, and Reload */}
        <DomainCapsule 
          displayDomain={navState.displayDomain} 
          onReload={reload}
          onTabPress={() => console.log('Tab Switcher Triggered')}
        />
        
        {/* Right: Options Menu */}
        <ActionButton 
          iconName="ellipsis-horizontal" 
          onPress={() => console.log('Menu Triggered')} 
        />
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  positioningLayer: {
    position: 'absolute',
    bottom: GEOMETRY.barBottomMargin,
    width: GEOMETRY.barWidthPercent,
    alignSelf: 'center',
    // Diffused spatial drop shadow to detach the bar from the web content
    shadowColor: EFFECTS.shadowColor,
    shadowOffset: EFFECTS.shadowOffset,
    shadowOpacity: EFFECTS.shadowOpacity,
    shadowRadius: EFFECTS.shadowRadius,
    elevation: EFFECTS.elevation,
  },
  liquidGlassContainer: {
    flexDirection: 'row',
    height: GEOMETRY.barHeight,
    borderRadius: GEOMETRY.outerRadius, // Continuous outer curve
    backgroundColor: COLORS.glassBackground, // Hardware blended base
    alignItems: 'center',
    paddingHorizontal: 10,
    // The microscopic specular highlight to catch edge light
    borderWidth: GEOMETRY.specularBorderWidth,
    borderColor: COLORS.glassHighlight,
    overflow: 'hidden', // Masks the hardware blur inside the geometry bounds
  }
});

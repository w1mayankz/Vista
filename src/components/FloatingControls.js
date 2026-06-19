import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from './ActionButton';
import DomainCapsule from './DomainCapsule';
import { LAYOUT } from '../constants/layout';

export default function FloatingControls() {
  return (
    <View style={styles.absoluteContainer}>
      <View style={styles.actionRow}>
        {/* Back Button */}
        <ActionButton iconName="chevron-back" onPress={() => console.log('Back')} />

        {/* Center URL Capsule */}
        <DomainCapsule onPress={() => console.log('URL Tap')} />

        {/* Tabs Button */}
        <ActionButton iconName="copy-outline" onPress={() => console.log('Tabs')} />

        {/* Menu Button */}
        <ActionButton iconName="ellipsis-horizontal" onPress={() => console.log('Menu')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  absoluteContainer: {
    position: 'absolute',
    bottom: LAYOUT.bottomBar.safeBottomInset, 
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: LAYOUT.bottomBar.horizontalPadding,
    backgroundColor: 'transparent', // Container layer is clear
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: LAYOUT.bottomBar.elementGap, 
  },
});

// src/components/DomainCapsule.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, GEOMETRY, TYPOGRAPHY } from '../constants/layout';

export default function DomainCapsule({ displayDomain, onReload, onTabPress }) {
  return (
    <View style={styles.capsule}>
      {/* Tab Switcher Icon (Left) */}
      <TouchableOpacity onPress={onTabPress} activeOpacity={0.7} style={styles.iconWrapper}>
        <Ionicons name="copy-outline" size={18} color={COLORS.iconActive} />
      </TouchableOpacity>

      {/* Centered Domain Text */}
      <View style={styles.textContainer}>
        <Text style={styles.domainText} numberOfLines={1} ellipsizeMode="tail">
          {displayDomain}
        </Text>
      </View>

      {/* Reload Glyph (Right) */}
      <TouchableOpacity onPress={onReload} activeOpacity={0.7} style={styles.iconWrapper}>
        <Ionicons name="refresh" size={18} color={COLORS.iconActive} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  capsule: {
    flex: 1, // Takes up remaining space between the outer action buttons
    height: GEOMETRY.capsuleHeight,
    backgroundColor: COLORS.domainCapsuleBg,
    borderRadius: GEOMETRY.innerRadius, // Mathematically nested curve
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12, // Spacing from edges to icons
    marginHorizontal: 12, // Spacing between capsule and outer action buttons
  },
  iconWrapper: {
    padding: 4, // Increases touch target size without expanding visual size
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  domainText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: TYPOGRAPHY.fontSizeDomain,
    fontWeight: TYPOGRAPHY.fontWeightDomain,
    letterSpacing: TYPOGRAPHY.letterSpacingDomain,
    color: COLORS.textPrimary,
  },
});

import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LAYOUT } from '../constants/layout';

export default function DomainCapsule({ onPress }) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.solidFrame, 
          { opacity: pressed ? 0.4 : 1 }
        ]}
      >
        <Ionicons name="text-outline" size={18} color="#000000" />
        <Text style={styles.domainText}>apple.com</Text>
        <Ionicons name="refresh" size={18} color="#000000" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12, 
    shadowRadius: 12,
    elevation: 6, 
  },
  solidFrame: {
    height: LAYOUT.bottomBar.squircleHeight,
    borderRadius: LAYOUT.bottomBar.squircleRadius,
    backgroundColor: '#FFFFFF', 
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.05)', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  domainText: {
    flex: 1,
    color: '#000000', 
    fontSize: 16,
    fontWeight: '500', // Uses system default sans-serif bolding
    textAlign: 'center',
  },
});

import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import FloatingControls from './src/components/FloatingControls';
import BrowserView from './src/components/BrowserView';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 47 : StatusBar.currentHeight || 24;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      
      {/* THE LIVE WEBSITE */}
      <BrowserView />

      {/* TRUE LIQUID GLASS TOP PROTECTOR */}
      <View style={styles.topGlassFrame}>
        <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill} />
      </View>

      {/* BOTTOM NAVIGATION BAR */}
      <FloatingControls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  topGlassFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: STATUS_BAR_HEIGHT + 10, 
    zIndex: 50, 
    overflow: 'hidden',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  }
});

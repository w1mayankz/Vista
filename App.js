import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import FloatingControls from './src/components/FloatingControls';
import BrowserView from './src/components/BrowserView';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 47 : StatusBar.currentHeight || 24;

export default function App() {
  return (
    <View style={styles.container}>
      {/* Dark status bar text for Light Theme */}
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      
      {/* THE LIVE WEBSITE */}
      <BrowserView />

      {/* SOLID WHITE TOP PROTECTOR */}
      <View style={styles.topSolidFrame} />

      {/* BOTTOM NAVIGATION BAR */}
      <FloatingControls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Changed to white
  },
  topSolidFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: STATUS_BAR_HEIGHT + 10, 
    zIndex: 50, 
    backgroundColor: '#FFFFFF', // 100% Opaque White
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)', // Subtle shadow line
  }
});

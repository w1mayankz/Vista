import React from 'react';
import { StyleSheet, ImageBackground, View, StatusBar, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import FloatingControls from './src/components/FloatingControls';

// This asks the phone exactly how tall its specific status bar notch/cutout is
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 47 : StatusBar.currentHeight || 24;

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.container}
      resizeMode="cover"
    >
      {/* translucent={true} forces the app to draw under the notch/status bar area.
        Without this, Android forces a solid black block at the top.
      */}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      
      {/* This is the empty space where the actual web browser will go later. */}
      <View style={styles.browserPlaceholder} />

      {/* THE NEW TOP GLASS PROTECTOR */}
      <BlurView 
        intensity={80} 
        tint="dark" 
        style={styles.topGlass} 
      />

      {/* Our masterpiece Liquid Glass bottom bar with the keyboard physics */}
      <FloatingControls />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  browserPlaceholder: {
    flex: 1,
  },
  topGlass: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: STATUS_BAR_HEIGHT + 10, // Covers the icons plus 10px of breathing room
    zIndex: 50, // Keeps it above the website content
    // Optional: Add the same thin border to the bottom edge of this glass
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  }
});

import React from 'react';
import { StyleSheet, ImageBackground, View, StatusBar, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import FloatingControls from './src/components/FloatingControls';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 47 : StatusBar.currentHeight || 24;

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      
      <View style={styles.browserPlaceholder} />

      {/* The Safe Frame for the Top Glass */}
      <View style={styles.topGlassFrame}>
      </View>

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
  topGlassFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: STATUS_BAR_HEIGHT + 10, 
    zIndex: 50, 
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden', // Forces the blur to stay inside the frame
  }
});

// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

// Import our custom engine and UI architecture
import BrowserView from './src/components/BrowserView';
import FloatingControls from './src/components/FloatingControls';
import { useNavigationCore } from './src/hooks/useNavigationCore';

export default function App() {
  // Load the Inter font for perfect, geometric domain typography
  const [fontsLoaded] = useFonts({
    'Inter': require('@expo-google-fonts/inter/Inter_500Medium.ttf'), // You can install this via npm or load a local asset
  });

  // Initialize our state controller
  const {
    webViewRef,
    navState,
    handleNavigationStateChange,
    goBack,
    reload,
  } = useNavigationCore();

  // If fonts are still loading, render the dark base
  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={true} backgroundColor="transparent" />
      
      {/* The Master Rendering Engine */}
      <BrowserView 
        webViewRef={webViewRef}
        currentUrl={navState.url}
        onNavigationStateChange={handleNavigationStateChange}
      />
      
      {/* The Liquid Glass Interface */}
      <FloatingControls 
        navState={navState}
        goBack={goBack}
        reload={reload}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A', 
  },
});

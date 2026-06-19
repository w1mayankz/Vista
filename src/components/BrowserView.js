import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function BrowserView() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://apple.com' }}
        style={styles.webview}
        // Basic performance flags, no experimental graphics overlays
        domStorageEnabled={true}
        javaScriptEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  webview: {
    flex: 1,
    // Prevents the webview from rendering under the bottom bar area if needed
    marginBottom: Platform.OS === 'android' ? 60 : 0, 
  },
});

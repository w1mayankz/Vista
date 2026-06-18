import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function BrowserView() {
  return (
    <WebView
      // Loading Apple's site so you can test the exact "Top Dogs" look from the video
      source={{ uri: 'https://www.apple.com' }} 
      style={styles.webview}
      // These props tell Android to use the GPU, making the blur crash-proof
      hardwareAccelerationCompat={true}
      androidLayerType="hardware"
      setBuiltInZoomControls={false}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: '#000',
  }
});

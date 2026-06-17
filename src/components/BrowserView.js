// src/components/BrowserView.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function BrowserView({ webViewRef, currentUrl, onNavigationStateChange }) {
  return (
    <WebView
      ref={webViewRef}
      source={{ uri: currentUrl }}
      onNavigationStateChange={onNavigationStateChange}
      style={styles.webview}
      // Native Hardware Capabilities
      pullToRefreshEnabled={true}
      allowsBackForwardNavigationGestures={true} // Essential for the native iOS swipe-back feel
      sharedCookiesEnabled={true}
      thirdPartyCookiesEnabled={true}
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserAction={false}
      // Performance tweaks for smooth rendering under the floating bar
      decelerationRate="normal"
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: '#121212', // Matches the master placeholder from App.js
  },
});

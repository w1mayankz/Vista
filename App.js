import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// We will uncomment these as we build from the outside in:
// import BrowserView from './src/components/BrowserView';
// import FloatingControls from './src/components/FloatingControls';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Forcing a crisp, light status bar to contrast the dark Liquid Glass aesthetic */}
      <StatusBar style="light" translucent={true} backgroundColor="transparent" />
      
      {/* This is where our hardware-accelerated WebView will go. 
        It takes up the full screen to allow the web content to flow UNDER the floating UI.
      */}
      <View style={styles.webViewPlaceholder} />
      
      {/* This is where our FloatingControls (the liquid glass bar) will sit, 
        layered perfectly over the web content. 
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A', // Deep native dark base for Vista
  },
  webViewPlaceholder: {
    flex: 1,
    backgroundColor: '#121212',
  }
});

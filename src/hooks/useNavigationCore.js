// src/hooks/useNavigationCore.js
import { useRef, useState, useCallback } from 'react';

export const useNavigationCore = () => {
  // Direct reference to the native WebView engine
  const webViewRef = useRef(null);
  
  // Centralized state for the browser's current context
  const [navState, setNavState] = useState({
    url: 'https://google.com', // Initial load page
    displayDomain: 'google.com',
    canGoBack: false,
    isLoading: true,
  });

  // Utility to strip http:// and www. for the clean, minimalist center capsule
  const extractDomain = (rawUrl) => {
    try {
      const parsed = new URL(rawUrl);
      return parsed.hostname.replace('www.', '').toLowerCase();
    } catch (e) {
      return rawUrl; // Fallback if URL parsing fails
    }
  };

  // Fired by the WebView whenever the user clicks a link or changes pages
  const handleNavigationStateChange = useCallback((newNavState) => {
    setNavState({
      url: newNavState.url,
      displayDomain: extractDomain(newNavState.url),
      canGoBack: newNavState.canGoBack,
      isLoading: newNavState.loading,
    });
  }, []);

  // Hardware control: Trigger the WebView to go back
  const goBack = useCallback(() => {
    if (navState.canGoBack && webViewRef.current) {
      webViewRef.current.goBack();
    }
  }, [navState.canGoBack]);

  // Hardware control: Trigger the WebView to reload the current page
  const reload = useCallback(() => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  }, []);

  // Formats and loads a new URL when typed manually
  const loadUrl = useCallback((newUrl) => {
    let formattedUrl = newUrl;
    if (!newUrl.startsWith('http://') && !newUrl.startsWith('https://')) {
      formattedUrl = `https://${newUrl}`;
    }
    setNavState(prev => ({ ...prev, url: formattedUrl }));
  }, []);

  return {
    webViewRef,
    navState,
    handleNavigationStateChange,
    goBack,
    reload,
    loadUrl,
  };
};

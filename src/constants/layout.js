// src/constants/layout.js

export const COLORS = {
  // Liquid Glass Base
  glassBackground: 'rgba(30, 30, 30, 0.65)', // Dark translucent for the main bar
  glassHighlight: 'rgba(255, 255, 255, 0.15)', // 1px specular highlight border to catch edge light
  
  // Nested Components
  domainCapsuleBg: 'rgba(0, 0, 0, 0.4)', // Darker inner capsule for depth
  actionPillBg: 'rgba(40, 40, 40, 0.5)', // Outer action button background
  
  // Typography & Icons
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.6)',
  iconActive: '#FFFFFF',
};

export const GEOMETRY = {
  // Master Floating Bar
  barHeight: 64,
  barBottomMargin: 24,
  barWidthPercent: '92%',
  outerRadius: 32, // Continuous squircle outer curve
  
  // Nested Domain Capsule
  capsuleHeight: 44,
  innerRadius: 22, // Mathematically nested radius to maintain uniform visual padding
  
  // Outer Action Button
  actionButtonSize: 44,
  actionButtonRadius: 22,
  
  // Borders
  specularBorderWidth: 1, 
};

export const EFFECTS = {
  // expo-blur intensity settings
  blurIntensity: 90,
  blurTint: 'dark', // Native hardware tint
  
  // Diffused Spatial Drop Shadow
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.35,
  shadowRadius: 24,
  elevation: 10, // Android native shadow fallback mapping
};

export const TYPOGRAPHY = {
  // Inter configuration for crisp, lowercase domain rendering
  fontFamily: 'Inter',
  fontSizeDomain: 15,
  letterSpacingDomain: -0.3, // Slightly condensed to mimic the reference UI
  fontWeightDomain: '500', 
};

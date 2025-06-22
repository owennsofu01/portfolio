// Centralized color palette for consistent theming
export const COLORS = {
  primaryDark: '#05161A',
  primaryMedium: '#072E33',
  primaryTeal: '#0C7075',
  accentTeal: '#0F969C',
  lightBlue: '#6DA5C0',
  mediumBlue: '#294D61',
  white: '#FFFFFF',
  lightGray: '#EAEAEA',
  cardBg: '#08252C',
  border: '#294D61',
  borderAccent: '#0F969C',
  orange: '#F97316',
  skeletonDark: '#374151',
  skeletonLight: '#6B7280',
};

// CSS custom properties for easy use in components
export const CSS_VARIABLES = `
  :root {
    /* Primary colors */
    --color-primary-dark: ${COLORS.primaryDark};
    --color-primary-medium: ${COLORS.primaryMedium};
    --color-primary-light: ${COLORS.primaryTeal};
    --color-primary-bright: ${COLORS.accentTeal};
    
    /* Secondary colors */
    --color-secondary-dark: ${COLORS.mediumBlue};
    --color-secondary-medium: ${COLORS.mediumBlue};
    --color-secondary-light: ${COLORS.lightBlue};
    
    /* Text colors */
    --color-text-primary: ${COLORS.white};
    --color-text-secondary: ${COLORS.lightGray};
    --color-text-accent: ${COLORS.lightBlue};
    --color-text-muted: ${COLORS.lightGray};
    
    /* Background colors */
    --color-bg-primary: ${COLORS.primaryDark};
    --color-bg-secondary: ${COLORS.primaryMedium};
    --color-bg-card: ${COLORS.cardBg};
    --color-bg-overlay: ${COLORS.cardBg};
    
    /* Border colors */
    --color-border-primary: ${COLORS.border};
    --color-border-secondary: ${COLORS.borderAccent};
    --color-border-light: ${COLORS.borderAccent};
    
    /* Status colors */
    --color-success: ${COLORS.orange};
    --color-error: ${COLORS.orange};
    --color-warning: ${COLORS.orange};
    --color-info: ${COLORS.mediumBlue};
  }
`;

// Utility functions for color usage
export const getGradient = (type = 'primary') => {
  const gradients = {
    primary: `linear-gradient(270deg, ${COLORS.primaryDark}, ${COLORS.accentTeal}, ${COLORS.mediumBlue}, ${COLORS.primaryDark})`,
    secondary: `linear-gradient(270deg, ${COLORS.cardBg}, ${COLORS.accentTeal}, ${COLORS.lightBlue}, ${COLORS.mediumBlue})`,
    card: `linear-gradient(135deg, ${COLORS.primaryMedium}, ${COLORS.primaryTeal})`,
  };
  return gradients[type] || gradients.primary;
};

export const getSkeletonGradient = () => {
  return `linear-gradient(90deg, ${COLORS.skeletonDark}, ${COLORS.skeletonLight}, ${COLORS.skeletonDark})`;
}; 
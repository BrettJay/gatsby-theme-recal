export default {
  breakpoints: [ '480px', '768px', '960px' ],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'Rubik, Inter, sans-serif',
  },
  fontSizes: [13, 14, 16, 17, 20, 24, 32, 48, 84, 96],
  colors: {
    text: '#2f5c73',
    primary: '#18394a',
    secondary: '#2f5c73',
    tertiary: '#527486',
    divider: 'rgba(207,219,225,.3)',
    link: '#0066cc',
    linkStroke: 'hsla(210, 100%, 40%, 0.25)',
    background: '#fff',
  },
  styles: {
    root: {
      fontFamily: 'body',
      'WebkitFontSmoothing': 'antialiased',
      textRendering: 'optimizeLegibility'
    },
    p: {
      fontSize: [1, 2, 3],
      color: `text`,
      lineHeight: `1.6`,
      m: `1.5em 0`,
    },
    h1: {
      fontSize: [6, 6, 7],
      color: 'primary',
      m: `1.7em 0 0.7em`,
    },
    h2: {
      fontSize: [5, 5, 6],
      color: 'primary',
      m: `1.5em 0 0.25em`,
    },
    h3: {
      fontSize: [4, 4, 5],
      color: 'primary',
      m: `1.5em 0 0.4em`,
    },
    h4: {
      fontSize: [3, 3, 4],
      color: 'primary',
    },
    hr: {
      border: '0 none',
      m: '3em 0',
      height: '1em',
      background: 'transparent',
      "::before": {
        content: '"✻✻✻"',
        display: 'block',
        textAlign: 'center',
        letterSpacing: '0.5em',
        color: '#98bbce'
      },
    },
    a: {
      color: 'link',
      textDecoration: 'none',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'linkStroke',
    }
  }
}
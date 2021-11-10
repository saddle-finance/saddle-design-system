export default {
  text: {
    // Kind
    nav1: {
      fontFamily: 'code',
      fontSize: 2,
      lineHeight: 2
    },
    nav1b: {
      fontFamily: 'code',
      fontWeight: 'bold',
      fontSize: 2,
      lineHeight: 2
    },
    nav2: {
      fontFamily: 'code',
      fontWeight: 'medium',
      fontSize: 1,
      lineHeight: 1
    },
    body2: {
      fontFamily: 'code',
      fontWeight: 'medium',
      fontSize: 0,
      lineHeight: 0
    },
    error1: {
      fontFamily: 'code',
      fontWeight: 'medium',
      fontSize: 0,
      lineHeight: 0,
      textTransform: 'uppercase',
    },
    technical1: {
      fontFamily: 'code',
      fontSize: 0,
      lineHeight: 0,
    },
    h1: {
      fontFamily: 'logotype',
      fontWeight: 'bold',
      fontSize: 5
    },
    h3: {
      fontFamily: 'logotype',
      fontWeight: 'bold',
      fontSize: 4
    }
  },
  // Primatives
  // NOTE: These don't seem to work with the Themed Component, moved base styles to variants
  styles: {
    h1: {
      variant: 'text.h1'
    },
    h3: {
      variant: 'text.h3'
    }
  }
}
import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'

const options = {
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Sumana',
      styles: [
        '400',
        '700'
      ],
    },
    {
      name: 'Open+Sans',
      styles: [
        '400',
        '400i',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Sumana', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  bodyColor: 'black',
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  scaleRatio: 2.81,
  scale: 2.81,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const vr = verticalRhythm({
      baseFontSize: '16px',
      baseLineHeight: '28.44px',
    })

    return {
      a: {
        color: '#ff5700',
        textDecoration: 'none',
      },
      'a:hover,a:active': {
        color: options.bodyColor,
      },
      blockquote: {
        ...scale(1/5),
        color: gray(41),
        fontStyle: 'italic',
        paddingLeft: rhythm(13/16),
        marginLeft: 0,
        borderLeft: `${rhythm(3/16)} solid ${gray(10)}`,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          marginLeft: rhythm(-3/4),
          marginRight: 0,
          paddingLeft: rhythm(9/16),
        },
      },
    }
  },
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
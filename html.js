import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

class HtmlWrapper extends React.Component {
  render () {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    let facebookMetaAppId
    if (config.facebookAppId) {
      facebookMetaAppId = <meta property="fb:app_id" content={`${config.facebookAppId}`} />
    }

    let addThisJS
    if (config.addThisPubId) {
      addThisJS = <script type="text/javascript" src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${config.addThisPubId}`}></script>
    }

    let googleAdsenseJS
    if (config.googleAdsensePubId) {
      googleAdsenseJS = <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {facebookMetaAppId}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {addThisJS}
          {googleAdsenseJS}
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  }
}

HtmlWrapper.propTypes = {
  body: React.PropTypes.string,
}

HtmlWrapper.defaultProps = {
  body: ""
}

export default HtmlWrapper

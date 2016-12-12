import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/style'
import '../node_modules/flexboxgrid/dist/flexboxgrid'
import ReactGA from 'react-ga'
import { config } from 'config'
import { rhythm } from '../utils/typography'
import Menu from '../components/Menu'

class SiteTemplate extends React.Component {
  componentDidMount() {
    if (config.googleAnalyticsId) {
      ReactGA.initialize(`${config.googleAnalyticsId}`)
    }
  }

  render () {
    const pages = [ ...this.props.route.pages ]

    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(2),
          }}
          style={{
            backgroundColor: 'white',
            boxShadow: '0 0 5px 5px rgba(0,0,0,0.1)'
          }}
        >
          <div className="container"
            style={{
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <div className="row center-xs start-sm">
              <div className="col-xs-12 col-sm-6">
                <a href={prefixLink('/')}>
                  <h2>{config.siteTitle}</h2>
                </a>
              </div>
              <div className="col-xs-12 col-sm-6">
                <Menu direction="horizontal" pages={pages} className="header-menu" />
              </div>
            </div>
          </div>

        </Headroom>

        {this.props.children}

        <div className="signature" itemScope itemType="http://schema.org/Person" style={{
            marginTop: rhythm(3),
            paddingTop: rhythm(1),
            paddingBottom: rhythm(1)
          }}>
          <i>Website developed by</i>&nbsp;
          <b itemProp="name">Michael Martin</b>&nbsp;
          (<a href="mailto:michael@nangulartoreact.com" itemProp="email">michael@angulartoreact.com</a>)&nbsp;<br/>
          &copy; 2015-16, All Rights Reserved
        </div>
      </div>
    )
  }
}

SiteTemplate.propTypes = {
  children: React.PropTypes.any,
}

export default SiteTemplate
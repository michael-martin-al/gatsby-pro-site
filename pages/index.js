import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Menu from '../components/Menu'
import GoogleAd from '../components/GoogleAd'

class HomePage extends React.Component {
  render () {
  	const pages = [ ...this.props.route.pages ]
    const path = this.props.route.page.path

  	const post = {
  		description: "Gatsbyjs Starter [Static Site Generator] to help Transform plain text into dynamic blogs and websites using React.js",
  		keywords: "Gatsby,Gatsbyjs,Starter,Pro Site Starter",
  		headline: "Pro Site Starter for Gatsby",
  		title: "Gatsbyjs Pro Site Starter"
  	}

    return (
      <div className="home-page">
        <Helmet
          title={`${post.title}`}
          meta={[
            { name: "Description", content: `${post.description}`},
            { name: "Keywords", content: `${post.keywords}`},
            { property: "og:title", content: `${post.headline}`},
            { property: "og:description", content: `${post.description}`},
            { property: "og:type", content: "article"},
            { property: "og:url", content: `${config.rootUrl}${path}`},
            { name: "twitter:card", content: "summary_large_image"},
            { name: "twitter:site", content: `${config.twitterHandle}` },
            { name: "twitter:creator", content: `${config.twitterHandle}` },
            { name: "twitter:title", content: `${post.title}` },
            { name: "twitter:description", content: `${post.description}` }
          ]}
        />
        <div className="hero">
	        <div className="container" >
	          <div className="row center-xs">
	            <div className="col-xs-12">
	            	<h1>Pro Site Starter for Gatsby</h1>
	            	<h3>Transform plain text into dynamic blogs and websites using React.js</h3>
            		<div>
	            		<a className="cta-link" href="https://github.com/michael-martin-al/gatsby-pro-site">Get it on Github</a>&nbsp;&nbsp;&nbsp;&nbsp;
	            		<a className="cta-link black" target="_blank" href="https://github.com/gatsbyjs/gatsby">Learn About Gatsby</a>
            		</div>
	            </div>
	          </div>
          </div>
        </div>
        <div className="container" >
          <div className="row center-xs" style={{margin: `${rhythm(2)} 0`}}>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            	<div className="box">
	              <h2>Gatsby</h2>
	              <p>Transform plain text into dynamic blogs and websites using the latest web technologies. A React.js static site generator.</p>
	              <a className="button-link" target="_blank" href="https://github.com/gatsbyjs/gatsby">Learn More</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            	<div className="box">
	              <h2>Flexbox Grid</h2>
	              <p>Grid based on CSS3 flexbox: responsive, fluid, simple syntax.</p>
	              <a className="button-link" target="_blank" href="http://flexboxgrid.com/">Learn More</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            	<div className="box">
	              <h2>Schema.org</h2>
	              <p>Schema.org promotes schemas for structured data on the Internet, on web pages, in email messages, and beyond.</p>
	              <a className="button-link" target="_blank" href="http://schema.org/">Learn More</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            	<div className="box">
	              <h2>Google Analytics</h2>
	              <p>Google Analytics Solutions offer free and enterprise analytics tools to measure website, app, digital and offline data to gain customer insights.</p>
	              <a className="button-link" target="_blank" href="https://www.google.com/analytics">Learn More</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            	<div className="box">
	              <h2>Google Adsense</h2>
	              <p>With Google AdSense, you can earn money from your online content.</p>
	              <a className="button-link" target="_blank" href="https://www.google.com/adsense">Learn More</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            	<div className="box">
	              <h2>AddThis</h2>
	              <p>Grow your website with tools trusted by over 15 million sites.</p>
	              <a className="button-link" target="_blank" href="http://www.addthis.com">Learn More</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            	<div className="box">
	              <h2>Facebook Ready</h2>
	              <p>Includes Facebook Open Graph meta tags for simple sharing on your favorite social media platform.</p>
	              <a className="button-link" target="_blank" href="https://developers.facebook.com/docs/sharing/webmasters">Learn More</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            	<div className="box">
	              <h2>Twitter Ready</h2>
	              <p>Includes Facebook Open Graph meta tags for simple sharing on your favorite social media platform.</p>
	              <a className="button-link" target="_blank" href="https://dev.twitter.com/cards/overview">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="color-box" style={{margin: `${rhythm(2)} 0`, height: `${rhythm(8)}`, padding: `${rhythm(0.75)}`}}>
        	<h2>Custom Components to Get Your Site Up Quickly</h2>
        </div>
        <div className="container" >
          <div className="row boxed-in">
          	<div className="col-xs-12 col-md-6" style={{ borderRight: 'solid 1px #ddd' }}>
		          <div className="row" style={{margin: `${rhythm(3)} 0`,}}>
		          	<div className="col-xs-12">
		          		<h3>Menu</h3>
		          		Custom menu component included in this starter that dynamically creates links for each of the pages within your Gatsby site.
		          		<br/>
		          		<br/>
		          		<h4>Props</h4>
		          		<ul>
		          			<li><b>title:</b> <i>(optional)</i> title to display above menu</li>
		          			<li><b>pages:</b> <i>(required)</i> list of pages from Gatsby</li>
		          			<li><b>direction:</b> <i>(required)</i> either vertical or horizontal</li>
		          		</ul>

		          		<Menu direction="vertical" title="Vertical Menu" pages={pages} />
		          		<h5>Sample Code</h5>
		        			<pre dangerouslySetInnerHTML={{__html: "&#x3C;Menu\n&nbsp;&nbsp;direction=&#x22;vertical&#x22;\n&nbsp;&nbsp;title=&#x22;Vertical Menu&#x22;\n&nbsp;&nbsp;pages={this.props.routes.pages}\n/&#x3E;"}} />

		          		<Menu direction="horizontal" title="Horizontal Menu" pages={pages} />
		          		<h5>Sample Code</h5>
		        			<pre dangerouslySetInnerHTML={{__html: "&#x3C;Menu\n&nbsp;&nbsp;direction=&#x22;horizontal&#x22;\n&nbsp;&nbsp;title=&#x22;Horizontal Menu&#x22;\n&nbsp;&nbsp;pages={this.props.routes.pages}\n/&#x3E;"}} />
		        		</div>
	          	</div>
          	</div>
	          <div className="col-xs-12 col-md-6">
		          <div className="row" style={{margin: `${rhythm(3)} 0`}}>
		          	<div className="col-xs-12">
		          		<h3>GoogleAd</h3>
		          		Custom component for displaying Google Adsense ads.
		          		<br/>
		          		<br/>
		          		<h4>Props</h4>
		          		<ul>
										<li><b>height:</b> <i>(optional)</i></li>
										<li><b>width:</b> <i>(optional)</i></li>
										<li><b>client:</b> data-ad-client attribute</li>
										<li><b>slot:</b> data-ad-slot attribute</li>
										<li><b>format:</b> <i>(optional)</i> data-ad-form attribute</li>
										<li><b>display:</b> display value from Adsense</li>
		          		</ul>
									<GoogleAd
										client={config.googleAdsensePubId}
										slot="8191491938"
										format="auto"
										display="block"
									/>
		          		<h5>Sample Code</h5>
		        			<pre dangerouslySetInnerHTML={{__html: "&#x3C;GoogleAd\n&nbsp;&nbsp;client={config.googleAdsensePubId}\n&nbsp;&nbsp;slot=&#x22;##########&#x22;\n&nbsp;&nbsp;format=&#x22;auto&#x22;\n&nbsp;&nbsp;display=&#x22;block&#x22;\n/&#x3E;"}} />
		          	</div>
	          	</div>
          	</div>
					</div>
      	</div>
    	</div>
    )
  }
}

HomePage.propTypes = {}
HomePage.defaultProps = {}

export default HomePage

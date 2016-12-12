import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import Menu from '../components/Menu'
import SchemaJson from '../components/SchemaJson'
import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    const path = this.props.route.page.path
    const pages = [ ...this.props.route.pages ]

    var shareButtons = null
    if (post.shareEnabled) {
      shareButtons = (
        <div className="share">
          <h4>Want to share this?</h4>
          <div className="addthis_inline_share_toolbox_0836"></div>
        </div>
      )
    }

    var recommendContent = null
    if (post.recommendEnabled) {
      recommendContent = (
        <div className="addthis_recommended_horizontal" style={{
          marginTop: rhythm(3),
          marginBottom: rhythm(1)
        }} />
      )
    }

    var authorBlock = null
    if (post.authorName || post.authorEmail) {
      authorBlock  = (
        <div>
          <span>{post.authorName}</span>&nbsp;
          <span>{post.authorEmail}</span>
        </div>
      )
    }

    return (
      <div className="container"
        style={{
          padding: `${rhythm(1)} ${rhythm(3/4)}`,
        }}
      >
        <div className="row center-sm">
          <div className="col-lg-10 col-xs-12">
            <div className="row">
              <div className="col-sm-3 col-xs-12 first-sm">
                <Menu direction="vertical" pages={pages} title="Site Menu" fileTypes={['md']} />
              </div>

              <div className="col-sm-9 col-xs-12 first-xs">
                <div className="markdown">
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

                    link={[
                      { rel: "amphtml", href: `${config.rootUrl}/amp${path}` }
                    ]}
                  />

                  <SchemaJson {...post} path={path} />

                  <h1><span>{post.headline}</span></h1>
                  <div className="articleHeader">
                    {authorBlock}
                  </div>

                  <div dangerouslySetInnerHTML={{ __html: post.body }} />

                  {shareButtons}

                  {recommendContent}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
})

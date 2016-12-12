import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'

/**
 *  Renders required JSON-LD markup for Article, NewsArticle, BlogPosting schemas
 *  This should meet minimum requirements to be emphasized in Google search results:
 *
 *  	"Proper structured data in your news, blog, and sports article page can enhance
 *		 your appearance in Google Search results. Enhanced features include entry in a
 *		 top stories carousel and rich result features such as headline text and
 *		 larger-than-thumbnail images."
 *
 *  See [https://developers.google.com/search/docs/data-types/articles]
 */
class SchemaJson extends React.Component {
	render() {

		const {
			schemaType,
			headline,
			imagePath,
			imageHeight,
			imageWidth,
			datePublished,
			dateModified,
			authorName,
			authorEmail,
			description,
			path
		} = this.props

		const {
			rootUrl,
			organizationName,
			logoPath,
			logoWidth,
			logoHeight
		} = config

		const schemaJson = {
			"@context": "http://schema.org",
			"@type": `${schemaType}`,
			mainEntityOfPage: {
				"@type": "WebPage",
				"@id": `${rootUrl}${path}`
			},
			headline: `${headline}`,
			image: {
				"@type": "ImageObject",
				url: `${rootUrl}${imagePath}`,
				height: imageHeight,
				width: imageWidth
			},
			datePublished: `${datePublished}`,
			dateModified: `${dateModified}`,
			author: {
				"@type": "Person",
				name: `${authorName}`,
				email: `${authorEmail}`
			},
			publisher: {
				"@type": "Organization",
				name: `${organizationName}`,
				logo: {
					"@type": "ImageObject",
					url: `${rootUrl}${logoPath}`,
					width: logoWidth,
					height: logoHeight
				}
			},
			description: `${description}`
		}

		return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson, null, '  ') }} />
	}
}

SchemaJson.propTypes = {
	schemaType: React.PropTypes.oneOf(['Article', 'NewsArticle', 'BlogPosting']).isRequired,
	headline: React.PropTypes.string.isRequired,
	imagePath: React.PropTypes.string.isRequired,
	imageHeight: React.PropTypes.number.isRequired,
	imageWidth: React.PropTypes.number.isRequired,
	datePublished: React.PropTypes.string.isRequired,
	dateModified: React.PropTypes.string.isRequired,
	authorName: React.PropTypes.string.isRequired,
	authorEmail: React.PropTypes.string.isRequired,
	description: React.PropTypes.string.isRequired,
	path: React.PropTypes.string.isRequired
}

SchemaJson.defaultProps = {
	schemaType: 'Article'
}

export default SchemaJson

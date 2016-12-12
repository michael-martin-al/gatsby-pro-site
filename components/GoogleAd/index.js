/**
 * First, setup an account with Google Adsense:
 *  https://www.google.com/adsense
 *
 * Adsense will give you code like this:
 *  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
 *  <!-- Left Sidebar -->
 *  <ins class="adsbygoogle"
 *       style="display:inline-block;width:160px;height:600px"
 *       data-ad-client="ca-pub-################"
 *       data-ad-slot="##########"></ins>
 *  <script>
 *  (adsbygoogle = window.adsbygoogle || []).push({});
 *  </script>
 *
 * You can take the properties from this code and feed them into the
 *  props on this component to display your Adsense Ad Units.
 *
 */
import React from 'react'

class GoogleAd extends React.Component {
	render() {
		const { display, height, width, client, slot, format } = this.props
		const js = "(adsbygoogle = window.adsbygoogle || []).push({});"
		let style = {}

		if (typeof display === 'string') { style.display = display }
		if (['string', 'number'].indexOf(typeof height) !== -1) { style.height = height }
		if (['string', 'number'].indexOf(typeof width) !== -1) { style.width = width }

		return (
			<div>
				<ins className="adsbygoogle"
					style={style}
					data-ad-client={client}
					data-ad-slot={slot}
					data-ad-format={format}>
				</ins>
				<script dangerouslySetInnerHTML={{__html: js}} />
			</div>
		)
	}
}

GoogleAd.propTypes = {
	height: React.PropTypes.string,
	width: React.PropTypes.string,
	client: React.PropTypes.string.isRequired,
	slot: React.PropTypes.string.isRequired,
	format: React.PropTypes.string,
	display: React.PropTypes.string
}

GoogleAd.defaultProps = {
	display: "block"
}

export default  GoogleAd
var React = require('react')
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './vertical.css'
import './horizontal.css'

class Menu extends React.Component {
	render() {
		const { title, pages, direction, fileTypes, className } = this.props

		const pageLinks = pages.map((page) => {
			if (fileTypes.indexOf(page.file.ext) !== -1) {
				const label = (typeof page.data.menuLabel === 'string' && page.data.menuLabel.length > 0) ? page.data.menuLabel : page.path
				return (<li key={page.path}><Link to={prefixLink(page.path)}>{label}</Link></li>)
			}
		})

		const header = (typeof title === 'undefined') ? null : <h5>{title}</h5>

		return (
			<div>
				<div className={`${direction}-menu ${className}`}>
					{header}
					<ul role="navigation">
						{pageLinks}
					</ul>
				</div>
			</div>
		)
	}
}

Menu.propTypes = {
	title: React.PropTypes.string,
	pages: React.PropTypes.array.isRequired,
	direction: React.PropTypes.oneOf([ 'vertical', 'horizontal' ]).isRequired,
	fileTypes: React.PropTypes.array.isRequired,
	className: React.PropTypes.string
}

Menu.defaultProps = {
	pages: [],
	direction: 'vertical',
	fileTypes: ['md','json'],
	className: ''
}

export default Menu
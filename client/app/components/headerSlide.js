import React from 'react';

class HeaderSlide extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let sectionLeft = {
			background: this.props.sectionLeft.bg
		};

		let sectionRight = {
			background: this.props.sectionRight.bg
		};

			return (
				<div>
					<div style={sectionLeft} className="col-lg-5">
						<div dangerouslySetInnerHTML={{__html: this.props.sectionLeft.content}}  />
					</div>
					<div style={sectionRight}  className="col-lg-7">
						<img src={this.props.sectionRight.img} alt=""/>
					</div>
				</div>
			)
	}
}

HeaderSlide.defaultProps = {
	sectionLeft: {},
	sectionRight: {}
};

export default HeaderSlide;
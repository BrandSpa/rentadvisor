import React from 'react';

class HeaderSlide extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let sectionLeft = {
			height: this.props.height,
			background: this.props.sectionLeft.bg
		};

		let sectionRight = {
			height: this.props.height,
			background: this.props.sectionRight.bg
		};

		return (
			<div style={{width: this.props.width, float: 'left'}}>
					<div style={sectionLeft} className="col-lg-5">
						<div dangerouslySetInnerHTML={{__html: this.props.sectionLeft.content}}  />
					</div>

					<div style={sectionRight}  className="col-lg-7">
						<img src={this.props.sectionRight.img} style={{maxWidth: "100%"}}/>
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
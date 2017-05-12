import React from 'react';

export default class HeaderSlide extends React.Component () {
	constructor(props) {
		super(props);
		
		this.props =  {
			sectionLeft: {},
			sectionRight: {}
		}

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
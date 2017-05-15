import React from 'react';
import Slide from './headerSlide';

class HeaderSlider extends React.Component {

	constructor(props) {
		super(props);

		this.changeSlide = this.changeSlide.bind(this);

		this.state = {
			section: 0
		};
	}

	changeSlide() {

	}

	render() {
		const h = window.innerHeight;
		const w = this.props.slides.length * 100 + '%';
		const sectionContainer = { height: h, width: w };
		
		return (
			<div style={sectionContainer}>
			
					{this.props.slides.map((slide, i) => {
						return (<Slide key={i} {...slide} height={h} />)
					}) }
				
			</div>
		)
	}
}

HeaderSlider.defaultProps = {	slides: [] };

export default HeaderSlider;
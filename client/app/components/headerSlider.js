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

	changeSlide(i, e) {
		console.log(i, e);
	}

	render() {
		const h = window.innerHeight;
		const w = this.props.slides.length * 100 + '%';
		const slideW = 100 / this.props.slides.length + '%';
		const sectionContainer = { height: h, transition: 'top 300ms', top: 0};
		
		return (
			<div style={{overflow: 'hidden', width: '100%', height: h, position: 'relative'}}>
				<div style={sectionContainer}>
						{this.props.slides.map((slide, i) => {
							return (<Slide key={i} {...slide} height={h} width={slideW} />)
						}) }
				</div>
				<div>
					{this.props.slides.map((slide, i) => <button style={{position: 'absolute', right: '0', color: 'red', width: '100px', height: '90px'}} onClick={this.changeSlide.bind(null, i)}>next</button>)}
				</div>
			</div>
		)
	}
}

HeaderSlider.defaultProps = {	slides: [] };

export default HeaderSlider;
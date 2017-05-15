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
		this.setState({section: i});
	}

	render() {
		const h = window.innerHeight;
		const w = this.props.slides.length * 100 + '%';
		const slideW = 100 / this.props.slides.length + '%';
		const t = this.state.section * h;
		const sectionContainer = { height: h, position: 'relative', transition: 'top 300ms', top: `-${t}px`};
		
		return (
			<div style={{overflow: 'hidden', width: '100%', height: h, position: 'relative'}}>
				<div style={sectionContainer}>
						{this.props.slides.map((slide, i) => {
							return (<Slide key={i} {...slide} height={h} width={slideW} />)
						}) }
				</div>
				<div style={{position: 'absolute', right: '0', bottom: '0'}}>
					{this.props.slides.map((slide, i) => <button onClick={this.changeSlide.bind(null, i)}>next</button>)}
				</div>
			</div>
		)
	}
}

HeaderSlider.defaultProps = {	slides: [] };

export default HeaderSlider;
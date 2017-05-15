import React from 'react';
import Velocity from 'velocity-animate';

class HeaderSlide extends React.Component {
	constructor(props) {
		super(props);
	}

	
	
	componentDidMount() {
		window.addEventListener('scroll', this.scrollAnimation);
	}

	scrollAnimation() {
		(!window.requestAnimationFrame) ? this.moveImage() : window.requestAnimationFrame(this.moveImage);
	}

	moveImage() {
		let top = this.slide.getBoundingClientRect().top;
		let h = this.slide.clientHeight;
		let offset = document.body.scrollTop - this.slide.scrollTop;
		let windowHeight =  window.innerHeight;

		if (top > 0 && top < h) { 
				console.log('inside bounding');
				Velocity(this.img, { translateY: offset }, 0);
		}	
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
			<div className="row" style={{transition: 'all 300ms', overflow: 'hidden'}} ref={slide => this.slide = slide}>
					<div style={sectionLeft} className={this.props.sectionLeft.col}>
						<div dangerouslySetInnerHTML={{__html: this.props.sectionLeft.content}}  />
					</div>

					<div  style={sectionRight}  className={this.props.sectionRight.col}>
						<img ref={img => this.img = img} src={this.props.sectionRight.img} style={{maxWidth: "100%", position: 'absolute', bottom: '0', left: '-200px'}}/>
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
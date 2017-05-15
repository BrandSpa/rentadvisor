import React from 'react';

class HeaderSlide extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let mov = 0;

		window.addEventListener('scroll', e => {
			let top = this.slide.getBoundingClientRect().top;
			if( top > 0 && top < this.slide.clientHeight) {
				mov = mov + 10;
				this.img.style.transition = 'all 300ms';
				this.img.style.transform = `translateY(${mov}px)`;
			}

			if(top > this.slide.clientHeight) {
				console.log('pass');
				mov = 0;
			}

		});
	}

	render() {
		let sectionLeft = {
			height: this.props.height,
			background: this.props.sectionLeft.bg
		};

		let sectionRight = {
			height: this.props.height,
			background: this.props.sectionRight.bg,
			overflow: 'hidden'
		};

		return (
			<div className="row" style={{transition: 'all 300ms'}} ref={slide => this.slide = slide}>
					<div style={sectionLeft} className={this.props.sectionLeft.col}>
						<div dangerouslySetInnerHTML={{__html: this.props.sectionLeft.content}}  />
					</div>

					<div  style={sectionRight}  className={this.props.sectionRight.col}>
						<img ref={img => this.img = img} src={this.props.sectionRight.img} style={{maxWidth: "100%"}}/>
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
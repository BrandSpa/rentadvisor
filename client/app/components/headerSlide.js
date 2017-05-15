import React from 'react';

class HeaderSlide extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {

		window.addEventListener('scroll', e => {
			let top = this.slide.getBoundingClientRect().top;
			let h = this.slide.clientHeight;

			if( top > 0 && top < h) {
				let mov = (top - h) + (h - 120); //(h - document.body.scrollTop) - h;

				this.img.style.transition = 'all 300ms';
				this.img.style.transform = `translateY(${mov}px)`;
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
			background: this.props.sectionRight.bg
		};

		return (
			<div className="row" style={{transition: 'all 300ms', overflow: 'hidden'}} ref={slide => this.slide = slide}>
					<div style={sectionLeft} className={this.props.sectionLeft.col}>
						<div dangerouslySetInnerHTML={{__html: this.props.sectionLeft.content}}  />
					</div>

					<div  style={sectionRight}  className={this.props.sectionRight.col}>
						<img ref={img => this.img = img} src={this.props.sectionRight.img} style={{maxWidth: "100%", position: 'relative', left: '-200px'}}/>
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
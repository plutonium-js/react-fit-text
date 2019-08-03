//Plutonium - [react-fit-text] - An ultra lightweight React component that automatically fits text to the size of the element.
/*
 * Plutonium [React-Fit-Text]
 * (c) 2019 Jesse Dalessio - https://plutonium.dev
 * Released under the MIT license
*/
import React from 'react';
import PropTypes from 'prop-types';
	
export class FitText extends React.Component{
	constructor (props) {
		super(props);
		this.rootRef = React.createRef();
		this.elms = {};
		this.update = this.update.bind(this);
	}
	
	render() {
		return <div 
			className = "FitText"
			style = {{overflow:'hidden'}}
			ref = {this.rootRef}
		>{this.props.children}</div>;
	}
	
	componentDidUpdate() {
		this.addAttributes(this.elms.root);
		this.update();
	}
	
	componentDidMount() {
		const rootElm = this.elms.root = this.rootRef.current;
		this.addAttributes(rootElm);
		this.update();
		if (this.props.updateOnResize) window.addEventListener("resize", this.update);
	}
	
	componentWillUnmount() {
		clearTimeout(this.timer);
		window.removeEventListener("resize", this.update);
	}
	
	//add attributes (e.g. className, id, data-?, whatever is defined in 'props.attributes' gets applied as an actual tag attribute)
	addAttributes(elm) {
		const attrs = this.props.attributes;
		for (let i in attrs) {
			let value = attrs[i]; if (value!=null) {
				if (i==='className') {
					//to be safe we add the class names vs. setting so we don't wipe out any existing set names
					value.split(/ +/).forEach(item => elm.classList.add(item));
				}
				else if (i=='style') {
					for (let i in value) elm.style[i] = value[i];
				}
				else {
					elm.setAttribute(i, value);
				}
			}
		}	
	}
	
	//round a number to the specified number of decimal places
	round(num, places) {
		var md = places?Math.pow(10, places):1;
		return Math.round(num*md)/md;
	}
	
	//called when the component is mounted, updated or resized
	update(e) {
		clearTimeout(this.timer);
		const delay = e?(this.props.updateOnResize||{}).delay||0:0;
		delay?this.timer=setTimeout(_update.bind(this),delay):(_update.bind(this))();
		function _update() {
			let size = this.getFitSize(this.elms.root);
			let minSize = this.props.minSize;
			let maxSize = this.props.maxSize;
			size = size<minSize?minSize:maxSize&&size>maxSize?maxSize:size;
			this.elms.root.style.fontSize = size+"px";
		}
	}
	
	//get the fit font size
	getFitSize(rootElm) {
		let rSize = 0;
		const cW = rootElm.clientWidth;
		const cH = rootElm.clientHeight;
		let minSize = 0;
		let maxSize = 50;
		let trySize = maxSize;
		let hOverflowed = false;
		let loopCount = 0;
		//loop till we break
		while (true) {
			rootElm.style.fontSize = trySize+'px';
			//subtract 1 to account for the possibility of browser rounding differences between the client size and scroll size (this was observed in Edge 18)
			if (rootElm.scrollWidth-1>cW || rootElm.scrollHeight-1>cH) {
				if ((maxSize-minSize)<.5) break;
				maxSize = trySize;
				trySize = this.round(minSize+((maxSize-minSize)/2),6);
				hOverflowed = true;
			}
			else {
				rSize = trySize;
				if (!hOverflowed) {
					minSize = trySize; maxSize = trySize*2;
				}
				minSize = trySize;
				trySize = minSize+((maxSize-minSize)/2);
			}
			//break if the loop count is more then 50 (it should never get that high unless there is an issue applying the try font size, so this get's us out of trouble)
			loopCount++; if (loopCount>50) {rSize=16;break;}
		}
		rootElm.style.fontSize = '';
		return rSize;
	}
}

//prop types
FitText.propTypes = {
  minSize:PropTypes.number,
  maxSize:PropTypes.number,
  updateOnResize:PropTypes.object,
  attributes:PropTypes.object
};

//default props
FitText.defaultProps = {
	minSize:0,
	updateOnResize:{
		delay:0
	},
	attributes:{}
};

export default FitText;






















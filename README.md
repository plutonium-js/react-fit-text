# Plutonium [react fit text component]
### About
An ultra lightweight React component that automatically fits text to the size of the element. Works with any added content or styling and includes a host of advanced features...
   * Supports single lines or paragraphs
   * Add any descendant content or React components
   * Optional auto update on resize
   * Optional resize update delay
   * Supports 'id', 'className', and 'style' props
   * Optional min and max font size


### Links

* [Fit Text Home](https://plutonium.dev/wp/libraries/react-fit-text/)
   * [Documentation](https://plutonium.dev/wp/libraries/react-fit-text/documentation)
   * [API](https://plutonium.dev/wp/libraries/react-fit-text/api)


### Bookmarks
* [Installation](#Installation)
* [Usage](#Usage)
   * [Module](#Module)
   * [CDN Script Tags](#CDN-Script-Tags)
* [Create Component](#create_component)
* [Optional Properties](#optional_properties)
* [Styling](#Styling)
* [License](#License)


### <a id="Installation"></a>Installation
```
> npm install @plutonium-js/react-fit-text
```

**[:arrow_up_small:](#bookmarks)**	

### <a id="Usage" style="color:yellow;"></a>Usage

* <a id="Module"></a>**Module**
   
   In ES6 the code example below imports the core animator library plus the SVG morph plugin.
   ```javascript
   import FitText from '@plutonium-js/react-fit-text';
   ```
   Or when using CommonJS...
   ```javascript
   const {FitText} = require('@plutonium-js/react-fit-text');
   ```
   
* <a id="CDN-Script-Tags"></a>**CDN Script Tag**
   
    Add the component directly to a web page.
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@plutonium-js/react-fit-text@1/dist/bundle.js"></script>
   ```

**[:arrow_up_small:](#bookmarks)**	
   
### <a id="create_component"></a>Create Component
To create a basic fit text component add the 'FitText' tag to your JSX.
```jsx
class App extends Component {
   render() {
      return (
         <FitText>Add your text to fit here.</FitText>
      );
   }
}
```

**[:arrow_up_small:](#bookmarks)**	

### <a id="optional_properties"></a>Optional Properties
Add properties as needed (all properties are optional).
```jsx
class App extends Component {
   render() {
      return <FitText
         minSize = {20}
         maxSize = {200}
         updateOnResize = {{
            delay:0
         }}
         id = "myId"
         className = "myClassNames"
         style = {{
            myStyle:'myStyleValue'
	     }}
      >Add your text to fit here.</FitText>;
   }
}
```
Min and max size is in pixels. The delay is in milliseconds. The 'id', 'className', and 'style' props are added to the components root element.

**[:arrow_up_small:](#bookmarks)**	
   
### <a id="styling"></a>Styling
The component has a default class name of 'FitText' which can be used to style the root element.
```css
.FitText {position:relative;height:100%;}
```
The 'id', 'className', and 'style' props are added to the components root element.
```jsx
render() {
   return <FitText
      id = "myId"
      className = "myClassNames"
      style = {{
		myStyle:'myStyleValue'
	  }}
   >Add your text to fit here.</FitText>;
}
```

**[:arrow_up_small:](#bookmarks)**	

### <a id="License"></a>License

Released under the [MIT license](LICENSE.md)

Author: Jesse Dalessio / [Plutonium.dev](https://plutonium.dev)

**[:arrow_up_small:](#bookmarks)**
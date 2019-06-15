# v-custom-ripple
A ripple effect (like from Material UI or Vuetify) that can be applied to any element using a Vue.js directive.

## Installation
```
npm i v-custom-ripple
```

## Options

|  Property |  Description | Type  | Default  |
|-----------|--------------|-------|----------|
| time  | The number of seconds for the ripple to complete its animation.  | Number or Float  | 1  |
|  ease |  The easing function of the ripple. | String  |  'ease' |
| color  |  The color of the ripple. | String  |  '#000' |
| startingOpacity  | The opacity the ripple will start with when the animation begins.  | Float (0 to 1)  |  0.2 |

## Usage
Ripple can be applied onto an element by using "v-ripple".

#### Basic usage example:

```html
<div class="my-class" v-ripple></div>
```

## Other Examples
```html
<div v-ripple={ time: 1.2, ease: 'ease-in', color: '#ff0000', startingOpacity: 0.5 }></div>
```

```html
<button v-ripple={ time: 0.3, ease: 'linear', color: 'rgb(255, 255, 255)' }></button>
```
## Demo
https://codepen.io/jacobgibellini/pen/mZVGPJ

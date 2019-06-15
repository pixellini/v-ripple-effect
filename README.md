# v-wave
A Vue directive that creates a wave/ripple effect on any element (like from Material UI or Vuetify).

## Installation
```
npm i v-wave
```
In your main.js file:
```javascript
import wave from 'v-wave';

Vue.use(wave);
```

## Options

|  Property |  Description | Type  | Default  |
|-----------|--------------|-------|----------|
| time  | The number of seconds for the ripple to complete its animation.  | Number or Float  | 1  |
|  ease |  The easing function of the ripple. | String  |  'ease' |
| color  |  The color of the ripple. | String  |  '#000' |
| startingOpacity  | The opacity the ripple will start with when the animation begins.  | Float (0 to 1)  |  0.2 |

## Usage
Ripple can be applied onto an element by using "v-wave".

#### Basic usage example:

```html
<div class="my-class" v-wave></div>
```

## Examples
```html
<div v-wave="{ time: 1.2, ease: 'ease-in', color: '#ff0000', startingOpacity: 0.5 }"></div>
```

```html
<button v-wave="{ time: 0.3, ease: 'linear', color: 'rgb(255, 255, 255)' }"></button>
```
## Demo
https://codepen.io/jacobgibellini/pen/mZVGPJ

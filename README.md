# v-element-ripple
A ripple effect (like from Material UI or Vuetify) that can be applied to any element.

## Installation
```
npm install v-element-ripple
```

## Options
|  Property |  Description | Type  | Default  |
|---|---|---|---|---|
| time  | The number of seconds for the ripple to complete its animation.  | Number or Float  | 1  |
|  ease |  The easing function of the ripple. | String  |  'ease' |
| color  |  The color of the ripple. | String  |  '#000' |
| startingOpacity  | The opacity the ripple will start with when the animation begins.  | Float (0 to 1)  |  0.2 |

## Usage
Ripple can be applied onto an element by using "v-ripple".

####Basic usage example:

```
<div class="my-class" v-ripple></div>
```

## Other Examples
Ripple can be applied onto an element by using "v-ripple".

example

```
<div  v-ripple={ time: 1.2, ease: 'ease-in', color: '#ff0000', startingOpacity: 0.5 }></div>
```

```
<button v-ripple={ time: 0.3, ease: 'linear', color: 'rgb(255, 255, 255)' }></button>
```
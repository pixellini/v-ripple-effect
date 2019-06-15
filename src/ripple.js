import ripple from './directive-ripple';

const RippleDirective = {
    install (Vue) {
        Vue.directive('ripple', ripple);
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(RippleDirective)
  }

export default RippleDirective;
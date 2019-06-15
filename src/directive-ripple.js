// Constants
// const RIPPLE_CLASS = 'ripple';


const ripple = (el, binding, vnode) => {
        const ELEMENT_SIZE_TIME_TOGGLE = 300; //px

        /**
         * @description
         * A container element to hold the ripple element.
         * This is so we don't need to change the styling of the original element width the "ripple" class.
         * For example, the style "overflow" needs to be hidden to prevent the ripple growing outside the boundaries.
         */
        const createContainerElement = () => {
            const container = document.createElement('div');
            container.style.position = 'absolute';
            container.style.top = 0;
            container.style.left = 0;
            container.style.height = '100%';
            container.style.width = '100%';
            container.style.overflow = 'hidden';
            return container;
        }

        /**
         * @description
         * Creates the element that will be the ripple effect.
         */
        const createRippleElement = (x, y, time) => {
            const element = document.createElement('div');
            element.style.position = 'absolute';
            element.style.borderRadius = '50%';
            element.style.left = x + 'px';
            element.style.top = y + 'px';
            element.style.transform = 'translate(-50%, -50%)';
            element.style.backgroundColor = '#000';
            element.style.height = 0;
            element.style.width = 0;
            element.style.opacity = 0.2;
            element.style.transition = `all ${ time }s ease`;
            return element;
        }

        /**
         * @description
         * Creates the ripple animation by creating a ripple element.
         * After 30 milliseconds, it will apply new styles to that element 
         * to begin the animation and then remove it once it's done animating.
         */
        const rippleAnimation = (element, x, y, size) => {
            const time = size > ELEMENT_SIZE_TIME_TOGGLE ? 2 : 1; // seconds

            const container = createContainerElement();
            const ripple = createRippleElement(x, y, time);

            element.appendChild(container); 
            container.appendChild(ripple);

            // Add the styles to cause the ripple effect.
            setTimeout(() => {
                const newSize = (size * 2) + 'px';
                ripple.style.height = newSize;
                ripple.style.width = newSize;
                ripple.style.opacity = 0;
            }, 30)

            // Delete the node from the DOM.
            setTimeout(() => {
                element.removeChild(container);
            }, time * 1000)
        }

        /**
         * @description
         * The on click handler for starting the ripple effect.
         */
        const onClickHandler = (e) => {
            let target = e.target;
            // If the user clicked the currently animating ripple or container, select the parent element.
            while (target !== el) {
                target = target.parentElement;
            }
            
            console.log(e);
            const width = target.clientWidth;
            const height = target.clientHeight;
            const size = height > width ? height : width;
            const x = (e.x - target.offsetLeft) + window.scrollX;
            const y = (e.y - target.offsetTop) + window.scrollY;
    
            rippleAnimation(
                target, // Element
                x,      // Mouse Click X Position
                y,      // Mouse Click Y Position
                size    // Ripple Size
            );
        }

        el.style.position = 'relative';
        el.addEventListener('click', onClickHandler);
    }


export default ripple;
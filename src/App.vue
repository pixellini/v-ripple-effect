<template>
    <div class="container">
        <button class="btn" v-ripple>Click me</button>

        <!-- CARD -->
        <div class="card" v-ripple="{ time: 1.2, ease: 'linear', color: 'rgb(102, 148, 177)', startingOpacity: 0.6 }">
            <img class="card__image" src="https://cdn.pixabay.com/photo/2014/12/24/05/02/drops-of-water-578897_960_720.jpg"/>
            <div class="card__content">
                <h3 class="card__title">Ripple</h3>
                <p class="card__description">Click the card for a preview of the ripple effect!</p>
            </div>
        </div>

        <div class="card" v-ripple="{ time: 0.8, ease: 'ease-in-out', color: '#5F8759', startingOpacity: 0.3 }">
            <img class="card__image" src="https://cdn.pixabay.com/photo/2014/12/21/15/44/ladybug-574971_960_720.jpg"/>
            <div class="card__content">
                <h3 class="card__title">Options</h3>
                <p class="card__description">You can even set the colour and speed!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        background: rgb(238, 246, 255);
    }

    .container {
        height: 100%;
        width: 100%;
        display: flex;
        padding: 20px;
    }

    .btn {
        height: 40px;
        margin-right: 20px;
        position: relative;
        background: #fff;
    	padding: 10px 20px;
    	border-radius: 3px;
    	transition: all 0.2s ease;
        cursor: pointer;
        
        &.big {
        padding: 150px 300px;
        }

        &:active {
            border: 1px solid lightgrey;
            transform: translateY(-1px)
        }

        &:focus {
            outline: none;
        }

        &:hover {
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
            transform: translateY(-3px)
        }
    }

    .card {
        height: 400px;
        width: 300px;
        border: 1px solid rgb(218, 218, 218);
        border-radius: 5px;
        overflow: hidden;
        display: block;
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
        cursor: pointer;
        transition: all 0.3s ease;
        margin-right: 20px;
        background: #fff;

        &:hover {
            transform: translateY(-1px);
            box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.3);
        }

        &__image {
            height: 100%;
            width: 100%;
            min-height: 250px;
            max-height: 250px;
            object-fit: cover;
            object-position: 50% 0%;
        }

        &__content {
            padding: 15px;
            box-sizing: border-box;
        }

        &__title {
            margin-bottom: 15px;
        }
    }
</style>

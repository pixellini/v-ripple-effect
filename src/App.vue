<template>
    <div>
        <button class="btn" v-ripple>Click me</button>
        <button class="btn big" v-ripple>Click me</button>
        <div class="card" v-ripple></div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
}
</script>

<style lang="scss">
.btn {
    position: relative;
    background: #fafafa;
	padding: 10px 20px;
	border-radius: 3px;
	transition: all 0.2s ease;
    cursor: pointer;
}
.btn.big {
    padding: 150px 300px;
}
.btn:active {
    border: 1px solid lightgrey;
    transform: translateY(-1px)
}
.btn:focus {
    outline: none;
}
.btn:hover {
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
    transform: translateY(-3px)
}

.card {
    height: 300px;
    width: 100px;
    background: rgb(141, 209, 231);
    border: 1px solid rgb(44, 69, 78);
    margin: 20px;
    display: inline-block;
}
</style>

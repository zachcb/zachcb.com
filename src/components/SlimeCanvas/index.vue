<template>
    <canvas id="slime"></canvas>
</template>

<script>
import Slime from "./Slime";

export default {
    mounted() {
		new Slime();
    }
}
</script>

<style >
#slime {
    position: absolute;
    top: 0;
    left: 0;

    margin: 0 auto;
    transform: rotate(180deg);

    z-index: 1;
}
</style>
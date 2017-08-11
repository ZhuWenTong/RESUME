<template>
    <div class='music' @click='play' ref='play'>
        <audio src="http://localhost:8080/src/assets/music.mp3" autoplay loop ref='music'></audio>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isPlay: false
        }
    },
    methods: {
        play() {
            this.isPlay = !this.isPlay;
            if (this.isPlay) {
                this.$refs.music.pause();
                this.$refs.play.style.animationPlayState = 'paused';
                this.$refs.play.style.WebkitAnimationPlayState = 'paused';
            } else {
                this.$refs.music.play();
                this.$refs.play.style.animationPlayState = 'running';
                this.$refs.play.style.WebkitAnimationPlayState = 'running';
            }
        }
    }
}
</script>
<style scoped>
@keyframes play {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.music {
    position: fixed;
    top: 0.1rem;
    right: 0.1rem;
    width: 0.3rem;
    height: 0.3rem;
    background: url('../../assets/images/music.svg');
    background-size: 100%;
    z-index: 100;
    animation: play 2s infinite linear;
}
</style>
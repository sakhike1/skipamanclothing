<template>
    <video autoplay muted loop class="video-bg" ref="videoPlayer" width="400" height="600">
        <source :src="videoSrc" type="video/mp4">
    </video>
</template>

<script>
export default {
    data() {
        return {
            videoSrc: require('@/assets/Noitem.mp4'), // Adjust the path to your video file
        };
    },
    mounted() {
        this.$refs.videoPlayer.play();
    },
    methods: {
        playVideo() {
            this.$refs.videoPlayer.play();
        }
    },
    beforeDestroy() {
        this.$refs.videoPlayer.removeEventListener('loadedmetadata', this.playVideo);
    }
};
</script>

<style>
.video-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
</style>

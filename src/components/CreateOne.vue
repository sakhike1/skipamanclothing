<template>
  <div>
    <video autoplay muted loop class="video-bg" ref="videoPlayer" width="400" height="300">
      <source :src="videoSrc" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      videoSrc: require("@/assets/CreateOne.mp4"), // Adjust the path to your video file
=======
      videoSrc: require("@/assets/CreateOne.mp4"), // Adjust the path to your video file
>>>>>>> 07d60d306e16f2f212591d9cbde1b6a411cd0d5d
    };
  },
  mounted() {
    this.$refs.videoPlayer.play();
  },
};
</script>

<style scoped>
.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  <<<<<<< HEAD=======z-index: -1;
  >>>>>>>07d60d306e16f2f212591d9cbde1b6a411cd0d5d
}
</style>

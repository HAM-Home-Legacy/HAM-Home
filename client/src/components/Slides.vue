<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="Welcome To Your Profile. We Hope That You're Enjoying the experience with us."
        img-src="https://picsum.photos/1024/480/?image=221"
      ></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=238"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1048"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=283"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Slides",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped></style>

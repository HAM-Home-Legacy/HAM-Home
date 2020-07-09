<template>
  <div></div>
</template>

<script>
export default {
  name: "search",
  data: () => ({
    city: "",
    NumberOfRooms: null,
    price: null,
    showPost: false
  }),
  methods: {
    showPostFunction() {
      this.showPost = true;
    }
  }
};
</script>

<style>
body {
  background-image: url("https://picsum.photos/1024/480/?image=283");
  background-repeat: no-repeat;
  background-size: cover;
}
.md-layout {
  background-color: gray;
}
#search-component-container {
  margin: auto;
  position: relative;
  top: 30%;
  height: 100vh;
}
#SearchBtn {
  float: right;
}
</style>
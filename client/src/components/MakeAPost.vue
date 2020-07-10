<template>
  <div class="createpost-container">
    <h1>Create A New Post</h1>
    <Form />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
export default {
  components: {
    Form,
  },
  name: "PostCreation",
};
</script>

<style>
body {
  font-family: Georgia, "Times New Roman", Times, serif;
}
.createpost-container {
  width: 1400px;
  border: 2px solid gray;
  margin: 2px auto;
}

h1 {
  text-align: center;
}
</style>

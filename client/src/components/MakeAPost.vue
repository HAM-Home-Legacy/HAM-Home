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
    Form
  },
  name: "PostCreation"
};
</script>

<style scoped>
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  border: 2px solid #eee;
  border-radius: 3px;
  width: 800px;
  margin: 0 auto;
}
.appContent,
.page-container {
  height: 89vh;
  overflow: scroll !important;
}

.createpost-container {
  width: 1400px;

  margin: 2px auto;
}

h1 {
  text-align: center;
}
</style>

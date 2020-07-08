<template>
  <div>
    <h1>Welcome To The Home Page</h1>
    <router-link to="/user">
      <h2>User Profile</h2>
    </router-link>
    <router-link to="/createpost">
      <h2>Create A New Post</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped></style>

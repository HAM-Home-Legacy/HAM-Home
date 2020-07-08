<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-card>
          <div class="bg-secondary text-light">
            <b-img
              id="profile-image"
              src="https://picsum.photos/2500/400/?image=28"
              fluid
              alt="Responsive image"
            ></b-img>
          </div>
        </b-card>
      </b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "UserInfos"
};
</script>

<style scoped>
.bg-secondary {
  height: 85vh;
}
#profile-image {
  width: 500px;
  height: 600px;
  border-bottom-right-radius: 25px;
}
</style>

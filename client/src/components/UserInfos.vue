<template>
  <b-container fluid class="bv-example-row">
    <b-row>
      <b-col sm="3" id="col1">
        <b-card id="card">
          <div id="profile-image" class="bg-secondary text-light">
            <b-img id="profile-image" :src="getMaleImg" fluid alt="Responsive image"></b-img>
          </div>
        </b-card>
      </b-col>
      <b-col sm="9" id="col2">
        <b-container fluid>
          <b-row>
            <b-col id="up">
              <b-card id="card-infos">
                <div id="profile-infos" class="bg-secondary text-light">
                  <b-row id="row-infos1">
                    <b-col id="profile-name">
                      <label id="profile-name-label">Houssem Guesmi</label>
                    </b-col>
                  </b-row>
                  <b-row id="row-infos2">
                    <b-col id="infos-part1">
                      <label id="profile-Birthday-label1">Birthday:</label>
                      <label id="profile-Birthday-label2">14th August 2000</label>
                      <br />
                      <label id="profile-Age-label1">Age:</label>
                      <label id="profile-Age-label2">19</label>
                      <br />
                      <label id="profile-Residence-label1">Residence:</label>
                      <label id="profile-Residence-label2">Nabeul</label>
                    </b-col>
                    <b-col id="infos-part2">
                      <label id="profile-Address-label1">Address:</label>
                      <label id="profile-Address-label2">15 Street 20 March</label>
                      <br />
                      <label id="profile-E-mail-label1">E-mail:</label>
                      <label id="profile-E-mail-label2">houssemguesmi14@gmail.com</label>
                      <br />
                      <label id="profile-Phone-label1">Phone Number:</label>
                      <label id="profile-Phone-label2">56418566</label>
                    </b-col>
                  </b-row>
                </div>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col id="down">
              <b-card id="card-posts-infos">
                <div id="profile-posts-infos" class="bg-secondary text-light">
                  <b-row>
                    <b-col id="posts-number">
                      <b-img id="posts-image" :src="getPostsImg" fluid alt="Responsive image"></b-img>
                    </b-col>
                    <b-col id="posts-rented-number"></b-col>
                  </b-row>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "UserInfos",
  computed: {
    getMaleImg() {
      var images = require.context("../assets/", false, /\.jpg$/);
      return images("./male.jpg");
    },
    getPostsImg() {
      var images = require.context("../assets", false, /\.png$/);
      return images("./posts.png");
    }
  }
};
</script>

<style scoped>
#profile-Birthday-label1,
#profile-Age-label1,
#profile-Residence-label1,
#profile-Address-label1,
#profile-E-mail-label1,
#profile-Phone-label1 {
  color: rgb(19, 19, 122);
  font-size: 40px;
  font-weight: bold;
  margin-left: 200px;
}
#posts-image {
  height: 150px;
  width: 150px;
}
#profile-Birthday-label2,
#profile-Age-label2,
#profile-Residence-label2,
#profile-Address-label2,
#profile-E-mail-label2,
#profile-Phone-label2 {
  color: black;
  font-size: 30px;
  font-weight: bold;
}
#profile-name-label {
  color: rgb(19, 19, 122);
  font-size: 75px;
  font-weight: bold;
  margin-top: 70px;
}
#posts-number {
  height: 250px;
}
#posts-rented-number {
  height: 250px;
  margin-left: 10px;
}
#profile-infos,
#profile-posts-infos {
  background-color: transparent !important;
}
#infos-part1 {
  margin-top: 30px;
  margin-right: 5px;
  height: 270px;
}
#infos-part2 {
  margin-top: 30px;
  margin-left: 5px;
  height: 270px;
}
#profile-name {
  margin-top: 20px;
  height: 260px;
  text-align: center;
}
#profile-image {
  width: 560px;
  height: 600px;
  border-bottom-right-radius: 25px;
  border-radius: 60px;
  /* src: url("assets/male.jpg"); */
}
.bv-example-row {
  float: left;
  margin-top: 70px;
}
#col1 {
  height: 85vh;
}
#col2 {
}
#card {
  height: 650px;
  border-radius: 60px;
}
#card-infos {
  height: 650px;
  width: 100%;
  border-radius: 60px;
}
#card-posts-infos {
  height: 300px;
  width: 100%;
  border-radius: 60px;
}
#up {
  margin-bottom: 10px;
  height: 650px;
}
#down {
  height: 25vh;
}
</style>

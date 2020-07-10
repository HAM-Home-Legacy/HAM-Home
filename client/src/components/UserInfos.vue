<template>
  <b-container fluid class="bv-example-row">
    <b-row>
      <b-col sm="3" id="col1">
        <b-card id="card">
          <div id="profile-image" class="bg-secondary text-light">
            <b-img
              id="profile-image"
              :src="getMaleImg"
              fluid
              alt="Responsive image"
            ></b-img>
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
                      <label id="profile-name-label" v-if="!editMode">
                        {{ user.fullName }}
                      </label>
                      <b-input
                        @input="isChanged = true"
                        id="profile-name-input"
                        v-else
                        v-model="user.fullName"
                      ></b-input>
                    </b-col>
                  </b-row>
                  <b-row id="row-infos2">
                    <b-col id="infos-part1">
                      <label id="profile-Birthday-label1">Birthday:</label>
                      <label v-if="!editMode" id="profile-Birthday-label2">
                        {{ user.dateOfBirth }}
                      </label>
                      <b-input
                        @input="isChanged = true"
                        v-else
                        id="profile-Birthday-input"
                        v-model="user.dateOfBirth"
                      ></b-input>
                      <br />
                      <label id="profile-Age-label1">Age:</label>
                      <label v-if="!editMode" id="profile-Age-label2">
                        {{ 2020 - Number(user.dateOfBirth.slice(0, 4)) }}
                      </label>
                      <b-input
                        disabled
                        @input="isChanged = true"
                        v-else
                        id="profile-Age-input"
                        :value="2020 - Number(user.dateOfBirth.slice(0, 4))"
                      ></b-input>
                      <br />
                      <label id="profile-Residence-label1">Residence:</label>
                      <label v-if="!editMode" id="profile-Residence-label2">
                        {{ user.state }}
                      </label>
                      <b-input
                        @input="isChanged = true"
                        v-else
                        id="profile-Residence-input"
                        v-model="user.state"
                      ></b-input>
                      <b-button
                        v-if="isChanged && editMode"
                        @click="dismiss2"
                        variant="outline-danger"
                        id="dismiss2-button"
                        >Dismiss</b-button
                      >
                    </b-col>
                    <b-col id="infos-part2">
                      <label id="profile-Address-label1">Address:</label>
                      <label v-if="!editMode" id="profile-Address-label2">
                        {{ user.address }}
                      </label>
                      <b-input
                        @input="isChanged = true"
                        v-else
                        id="profile-Address-input"
                        v-model="user.address"
                      ></b-input>
                      <br />
                      <label id="profile-E-mail-label1">E-mail:</label>
                      <label v-if="!editMode" id="profile-E-mail-label2">
                        {{ user.email }}
                      </label>
                      <b-input
                        @input="isChanged = true"
                        v-else
                        id="profile-E-mail-input"
                        v-model="user.email"
                      ></b-input>
                      <br />
                      <label id="profile-Phone-label1">Phone Number:</label>
                      <label v-if="!editMode" id="profile-Phone-label2">
                        {{ user.phoneNumber }}
                      </label>
                      <b-input
                        @input="isChanged = true"
                        v-else
                        id="profile-Phone-input"
                        v-model="user.phoneNumber"
                      ></b-input>
                      <br />
                      <b-button
                        v-if="!editMode"
                        @click="editMode = true"
                        variant="outline-primary"
                        id="edit-button"
                      >
                        <b-img id="edit-image" :src="getEditImg"></b-img>
                      </b-button>
                      <b-button
                        v-else-if="editMode && !isChanged"
                        @click="editMode = false"
                        variant="outline-danger"
                        id="dismiss-button"
                        >Dismiss</b-button
                      >
                      <b-button
                        v-else-if="isChanged"
                        @click="updateUser"
                        variant="outline-primary"
                        id="save-button"
                        >Save</b-button
                      >
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
                      <b-img
                        id="posts-image1"
                        :src="getPostsImg"
                        fluid
                        alt="Responsive image"
                      ></b-img>
                      <label id="posts-number-label">0</label>
                    </b-col>
                    <b-col id="posts-rent-number">
                      <b-img
                        id="posts-image2"
                        :src="getRentImg"
                        fluid
                        alt="Responsive image"
                      ></b-img>
                      <label id="posts-rent-label">0</label>
                    </b-col>
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
import axios from "axios";
export default {
  name: "UserInfos",
  data() {
    return {
      user: {},
      editMode: false,
      isChanged: false,
    };
  },
  computed: {
    getMaleImg() {
      var images = require.context("../assets/", false, /\.jpg$/);
      return images("./male.jpg");
    },
    getPostsImg() {
      var images = require.context("../assets", false, /\.png$/);
      return images("./posts.png");
    },
    getRentImg() {
      var images = require.context("../assets", false, /\.svg$/);
      return images("./rent.svg");
    },
    getEditImg() {
      var images = require.context("../assets", false, /\.png$/);
      return images("./edit.png");
    },
  },
  async beforeMount() {
    try {
      let data = await axios.post("/api/users/user", {
        email: localStorage.email,
      });
      this.user = data.data[0];
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    updateUser() {
      axios.put("/api/users/updateUser", this.user);
      this.editMode = false;
      this.isChanged = false;
    },
    async dismiss2() {
      let data = await axios.post("/api/users/user", {
        email: localStorage.email,
      });
      this.user = data.data[0];
      this.editMode = false;
      this.isChanged = false;
    },
  },
};
</script>

<style scoped>
#profile-Birthday-input,
#profile-Age-input,
#profile-Residence-input,
#profile-Address-input,
#profile-E-mail-input,
#profile-Phone-input {
  color: rgb(19, 19, 122);
  font-size: 20px;
  font-weight: bold;
  width: 380px;
  float: right;
}
#profile-name-input {
  color: rgb(19, 19, 122);
  font-size: 65px;
  font-weight: bold;
  margin-left: 180px;
  width: 900px;
}
#edit-image {
  height: 40px;
  width: 40px;
}
#edit-button {
  width: 150px;
  height: 60px;
  margin-left: 480px;
  margin-top: 20px;
}
#save-button {
  width: 150px;
  height: 60px;
  margin-left: 480px;
  margin-top: 20px;
}
#dismiss-button {
  color: black;
  width: 150px;
  height: 60px;
  margin-left: 480px;
  margin-top: 20px;
}
#dismiss2-button {
  color: black;
  width: 150px;
  height: 60px;
  margin-top: 20px;
}
#posts-number-label,
#posts-rent-label {
  color: rgb(19, 19, 122);
  font-size: 80px;
  font-weight: bold;
  margin-left: 120px;
  margin-top: 20px;
}
#profile-Birthday-label1,
#profile-Age-label1,
#profile-Residence-label1,
#profile-Address-label1,
#profile-E-mail-label1,
#profile-Phone-label1 {
  color: rgb(19, 19, 122);
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
}
#profile-Birthday-label2,
#profile-Age-label2,
#profile-Residence-label2,
#profile-Address-label2,
#profile-E-mail-label2,
#profile-Phone-label2 {
  color: black;
  font-size: 20px;
  font-weight: bold;
}
#posts-image1 {
  margin-top: -80px;
  margin-left: 40px;
  height: 150px;
  width: 150px;
}
#posts-image2 {
  margin-top: -80px;
  height: 150px;
  width: 150px;
}
#profile-name-label {
  color: rgb(19, 19, 122);
  font-size: 65px;
  font-weight: bold;
}
#posts-number {
  height: 250px;
  width: 50%;
}
#posts-rented-number {
  height: 250px;
  width: 50%;
}
#profile-infos,
#profile-posts-infos {
  background-color: transparent !important;
}
#infos-part1 {
  margin-right: 5px;
  height: 270px;
}
#infos-part2 {
  margin-left: 5px;
  height: 270px;
}
#profile-name {
  margin-top: 20px;
  height: 150px;
  text-align: center;
}
#profile-image {
  width: 400px;
  height: 400px;
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
  height: 450px;
  border-radius: 60px;
}
#card-infos {
  height: 450px;
  width: 100%;
  border-radius: 60px;
}
#card-posts-infos {
  height: 200px;
  margin-left: 210px;
  width: 70%;
  border-radius: 60px;
}
#up {
  margin-bottom: 10px;
  height: 450px;
}
#down {
  height: 200px;
}
</style>

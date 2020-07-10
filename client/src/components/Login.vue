<template>
  <b-container class="formm">
    <h2>Sign In</h2>
    <b-form class="form">
      <b-col>
        <b-form-group>
          <label>E-Mail</label>
          <b-input
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="E-mail"
            v-model="user.email"
          />
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group>
          <label for="examplePassword">Password</label>
          <b-input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            v-model="user.password"
          />
        </b-form-group>
      </b-col>
      <label id="errorMessage" disabled>{{ error }}</label>
      <br />
      <b-button @click="checkUser">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user: {},
      error: "",
    };
  },
  methods: {
    async checkUser() {
      if (this.user.email && this.user.password) {
        let data = await axios.post("/api/users/checkUser", {
          email: this.user.email,
          password: this.user.password,
        });
        if (data.data.length > 0) {
          localStorage.setItem("email", data.data[0].email);
          localStorage.setItem("id", data.data[0]._id);
          this.$router.push(`${data.data[0]._id}`);
        } else {
          this.error = "Invalid E-Mail or username.";
        }
      } else {
        this.error = "Please type in an e-mail and a username.";
      }
    },
  },
};
</script>

<style scoped>
.formm {
  margin-top: 200px;
}
</style>

<template>
  <b-container id="signup-form-container">
    <b-form-group
      id="fieldset-1"
      label="Enter your name"
      label-for="input-1"
      :invalid-feedback="invalidName"
      :valid-feedback="validName"
      :state="nameState"
    >
      <b-form-input
        id="input-1"
        v-model="fullName"
        :state="nameState"
        trim
      ></b-form-input>
    </b-form-group>
    <b-form-group id="fieldset-1" label="Enter Your Gender" label-for="input-7">
      <b-select v-model="gender" placeholder="Select Your Gender">
        <option>
          Male
        </option>
        <option>
          Female
        </option>
      </b-select>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      label="Enter your E-Mail"
      label-for="input-2"
      :invalid-feedback="invalidEmail"
      :valid-feedback="validEmail"
      :state="emailState"
    >
      <b-form-input
        id="input-2"
        v-model="email"
        :state="emailState"
        trim
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      label="Enter your Password"
      label-for="input-3"
      :invalid-feedback="invalidPassword1"
      :valid-feedback="validPassword1"
      :state="password1State"
    >
      <b-form-input
        id="input-3"
        v-model="password1"
        type="password"
        :state="password1State"
        trim
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      label="Confirm Your Password"
      label-for="input-4"
      :invalid-feedback="invalidPassword2"
      :valid-feedback="validPassword2"
      :state="password2State"
    >
      <b-form-input
        id="input-4"
        v-model="password2"
        type="password"
        :state="password2State"
        trim
      ></b-form-input>
    </b-form-group>
    <b-form-group>
      <label for="example-input">Date Of Birth</label>
      <b-input-group class="mb-3">
        <b-form-input
          id="example-input"
          v-model="dateOfBirth"
          type="text"
          placeholder="YYYY-MM-DD"
          autocomplete="on"
        ></b-form-input>
        <b-input-group-append>
          <b-form-datepicker
            v-model="dateOfBirth"
            button-only
            right
            locale="en-US"
            aria-controls="example-input"
          ></b-form-datepicker>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <b-form-group id="fieldset-1" label="Enter Your State" label-for="input-5">
      <b-select v-model="state">
        <option v-for="(city, index) in cities" :key="index"
          >{{ city }}
        </option>
      </b-select>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      label="Type in your address"
      label-for="input-6"
    >
      <b-form-input id="input-6" v-model="address" trim></b-form-input>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      label="Type in your phone number"
      label-for="input-7"
    >
      <b-form-input
        id="input-7"
        type="number"
        v-model="phoneNumber"
        trim
      ></b-form-input>
    </b-form-group>
    <b-button id="create-user-button" @click="createUser">Submit</b-button>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      fullName: "",
      gender: "",
      password1: "",
      password2: "",
      email: "",
      dateOfBirth: "",
      state: "",
      address: "",
      phoneNumber: "",
      cities: [
        "Tunis",
        "Ben Arous",
        "Bizerte",
        "Sousse",
        "Mahdia",
        "Sfax",
        "Gabes",
        "Nabeul",
        "Monastir",
        "kasserine",
        "Kef",
        "Beja",
        "Gafsa",
        "Tataouine",
        "Sidi bouzid",
        "Jendouba",
        "Siliana",
        "Kairouan",
        "Tozeur",
        "Ariana",
        "Mednin",
        "Kebili",
        "Mennouba",
        "Zaghouan",
      ],
    };
  },
  methods: {
    async createUser() {
      console.log("invoked");
      console.log("fullname", this.fullName);
      console.log("gender", this.gender);
      console.log("password1", this.password1);
      console.log("password2", this.password2);
      console.log("email", this.email);
      console.log("dateofbirth", this.dateOfBirth);
      console.log("state", this.state);
      console.log("address", this.address);
      console.log("phoneumber", this.phoneNumber);

      if (
        this.fullName !== "" &&
        this.gender !== "" &&
        this.password1 !== "" &&
        this.password2 !== "" &&
        this.email !== "" &&
        this.dateOfBirth !== "" &&
        this.state !== "" &&
        this.address !== "" &&
        this.phoneNumber !== ""
      ) {
        console.log("all filled");
        if (this.password1 === this.password2) {
          console.log("matched password");
          let userToCreate = {
            fullName: this.fullName,
            gender: this.gender,
            password: this.password1,
            email: this.email,
            dateOfBirth: this.dateOfBirth,
            state: this.state,
            address: this.address,
            phoneNumber: this.phoneNumber,
            posts: "",
          };
          await axios.post("api/users/createUser", userToCreate);
          localStorage.setItem("email", this.email);
          //   this.$router.push(`${}._id}`);
        }
      }
    },
  },
  computed: {
    nameState() {
      return this.fullName.length >= 6 ? true : false;
    },
    emailState() {
      return this.email.includes("@") && this.email.includes(".")
        ? true
        : false;
    },
    password1State() {
      return this.password1.length > 8 ? true : false;
    },
    password2State() {
      return this.password1.length > 8 && this.password1 === this.password2
        ? true
        : false;
    },
    invalidName() {
      if (this.fullName.length > 6) {
        return "";
      } else if (this.fullName.length > 0) {
        return "Enter at least 6 characters";
      } else {
        return "Please enter something";
      }
    },
    invalidEmail() {
      if (this.email.includes("@") && this.email.includes(".")) {
        return "";
      } else if (
        !this.email.includes("@") &&
        !this.email.includes(".") &&
        this.email.length > 0
      ) {
        return "Enter a valid e-mail";
      } else {
        return "Please enter something";
      }
    },
    invalidPassword1() {
      if (this.password1.length > 8) {
        return "";
      } else if (this.password1.length > 0) {
        return "Enter at least 8 characters";
      } else {
        return "Please enter something";
      }
    },
    invalidPassword2() {
      if (
        this.password2.length > 8 &&
        this.password1.length > 8 &&
        this.password1 === this.password2
      ) {
        return "";
      } else if (this.password2.length > 0) {
        return "Match your passwords";
      } else {
        return "Please enter something";
      }
    },
    validName() {
      return this.nameState === true ? "Thank you" : "";
    },
    validEmail() {
      return this.emailState === true ? "Thank you" : "";
    },
    validPassword1() {
      return this.password1State === true ? "Thank you" : "";
    },
    validPassword2() {
      return this.password2State === true ? "Matched" : "";
    },
  },
};
</script>

<style scoped>
#signup-form-container {
  width: 60%;
}
</style>

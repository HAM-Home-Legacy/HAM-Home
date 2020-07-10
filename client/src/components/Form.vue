<template>
  <div class="createform-container">
    <b-form @submit="onSubmit" v-if="show">
      <div class="myinput">
        <b-form-group
          id="input-group-1"
          label="Title:"
          label-for="input-1"
          description="Please enter the title of the post"
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            required
            placeholder="Please select the title of the post"
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="myinput">
        <b-form-group
          id="input-group-2"
          label="Number Of Rooms:"
          label-for="input-2"
          description="Please select the number of rooms"
        >
          <b-form-input
            id="input-2"
            v-model="form.numberOfRooms"
            type="number"
            required
            placeholder="0"
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="myinput">
        <b-form-group id="input-group-3" label="State:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.state"
            :options="states"
            required
          ></b-form-select>
        </b-form-group>
      </div>

      <div class="mycustom">
        <b-form-group
          id="textarea-group"
          label="Description:"
          label-for="textarea"
          description="Description"
        >
          <b-form-textarea
            id="textarea"
            v-model="form.description"
            placeholder="Please enter the description here..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </div>

      <div class="mycustom">
        <label for="range-1">Price/Month</label>
        <b-form-input
          id="range-1"
          v-model="form.price"
          type="range"
          min="0"
          max="1500"
          step="10"
        ></b-form-input>
        <div class="mt-2">Value: {{ form.price }}</div>
      </div>

      <!-- <div class="myinput">
        <b-form-file
          v-model="form.file"
          :state="Boolean(form.file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          @change="onFileSelected"
        ></b-form-file>
        <input type="file" style="display:none" />
      </div> -->

      <div class="myinput">
        <b-button variant="primary" @click="onPickFile">Upload Image</b-button>
        <input
          type="file"
          style="display:none"
          ref="fileInput"
          accept="image/*"
          @change="onFilePicked"
        />
      </div>
      <img :src="form.imageURL" height="150" />
      <b-button class="createform-submit" type="submit" variant="primary"
        >Submit</b-button
      >
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

    <!-- <pre class="mt-3 mb-0">{{ text }}</pre> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TextFields",
  data() {
    return {
      form: {
        title: "",
        numberOfRooms: "",
        state: null,
        description: "",
        price: "0",
        imageURL: "",
        image: null,
      },
      states: [
        { text: "Select One", value: null },
        "Ariana",
        "Tunis",
        "Ben Arous",
        "Bizerte",
        "Gabès",
        "Gafsa",
        "Jendouba",
        "Kairouan",
        "Kasserine",
        "Kébili",
        "Le Kef",
        "Mahdia",
        "La Manouba",
        "Médenine",
        "Monastir",
        "Nabeul",
        "Sfax",
        "Sidi Bouzid",
        "Siliana",
        "Sousse",
        "Tataouine",
        "Tozeur",
        "Béja",
        "Zaghouan",
      ],

      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios.post("http://localhost:3000/api/posts/createPost", this.form);
    },
    // onFileSelected(event) {
    //   this.form.file = event.target.files[0];
    //   console.log(this.form.file);
    // },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      const fileReader = new window.FileReader();
      fileReader.addEventListener("load", () => {
        this.form.imageURL = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.form.image = files[0];
      console.log(this.form.image);
    },
  },
};
</script>
<style scoped>
.createform-container {
  width: 800px;
  border: 2px solid gray;
  margin: 2px auto;
  overflow: hidden;
}
.createform-submit {
  float: right;
  margin: 10px;
}

.myinput {
  width: 400px;
  margin: 30px;
}

.mycustom {
  width: 600px;
  margin: 30px;
}
</style>

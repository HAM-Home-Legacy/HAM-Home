<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <router-link to="/">
          <b-navbar-brand>HAM-Home</b-navbar-brand>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">About Us</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Signing</em>
              </template>
              <router-link to="/login">
                <b-button id="signIn">Sign In</b-button>
              </router-link>
              <br />
              <router-link to="/signUp">
                <b-button id="signUp">Sign Up</b-button>
              </router-link>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
  // head: {
  //   script: [
  //     {
  //       src:
  //         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
  //     },
  //   ],
  // },
  // mounted: function() {
  //   this.$nextTick(() => {
  //     this.googleTranslateInit();
  //   });
  // },
  // methods: {
  //   googleTranslateInit: function() {
  //     let checkIfGoogleLoaded = setInterval(() => {
  //       if (google.translate.TranslateElement != null) {
  //         clearInterval(checkIfGoogleLoaded);

  //         this.googleTranslateElement("google_translate_element");
  //       }
  //     }, 100);
  //   },
  //   googleTranslateElement: function(id) {
  //     new google.translate.TranslateElement(
  //       {
  //         pageLanguage: "en",
  //         layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
  //       },
  //       id
  //     );
  //   },
  // },
};
</script>

<style scoped>
#signIn,
#signUp {
  width: 100%;
  margin-top: 5px;
}
</style>

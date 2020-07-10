<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-default">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <router-link class="tab-button-contain2" to="/user">
              <md-avatar class="md-avatar-icon">
                <md-icon>home</md-icon>
              </md-avatar>
            </router-link>
            <router-link class="tab-button-contain2" to="/user/search">
              <md-avatar class="md-avatar-icon">
                <md-icon>search</md-icon>
              </md-avatar>
            </router-link>
          </div>

          <div class="md-toolbar-section-end">
            <md-button @click="logout" class="icon-button">Logout</md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <div class="md-button-container">
            <router-link class="tab-button-contain" to="/user/infos">
              <md-button class="tab-button">Infos</md-button>
            </router-link>
            <router-link class="tab-button-contain" to="/user/makepost">
              <md-button class="tab-button">Make A Post</md-button>
            </router-link>
            <router-link class="tab-button-contain" to="/user/posts">
              <md-button class="tab-button">Posts</md-button>
            </router-link>
            <router-link class="tab-button-contain" to="/user/saved">
              <md-button class="tab-button">Saved</md-button>
            </router-link>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div class="appContent">
          <transition name="fade">
            <router-view />
          </transition>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  components: {},
  name: "UserProfile",
  data: () => ({
    menuVisible: false
  }),
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.page-container {
  height: 100vh;
}
.appContent {
  height: 89vh;
}
.md-button-container {
  display: flex;
  justify-content: space-around;
  width: 97%;

  margin: 0 auto;
}
.tab-button-contain {
  width: 25%;
  max-width: 25%;
}
.tab-button-contain2 {
  width: 2%;
  max-width: 2%;
  background-color: transparent !important;
  margin-right: 12px;
  margin-left: 12px;
}
.tab-button {
  width: 100%;
}
.router-link-active {
  background-color: grey;
  opacity: 0.5;
  width: 100%;
}
.icon-button {
  width: 150px;
}
</style>

<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container-fluid">
      <router-view></router-view>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar";
import Foot from "@/components/Foot";

export default {
  name: "app",
  // computed: {
  //   ...mapGetters({ currentUser: "currentUser" })
  // },
  // created() {
  //   this.checkCurrentLogin();
  // },
  // updated() {
  //   this.checkCurrentLogin();
  // },
  // methods: {
  //   checkCurrentLogin() {
  //     if (!this.currentUser && this.$route.path !== "/") {
  //       this.$router.push("/?redirect=" + this.$route.path);
  //     }
  //   }
  // },
  components: {
    Navbar,
    Foot
  }
};
</script>

<style></style>

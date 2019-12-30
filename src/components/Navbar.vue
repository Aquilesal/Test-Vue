<template>
  <nav class="navbar navbar-dark bg-bookstore">
    <a class="navbar-brand" href="/">Home</a>
    <template v-if="currentUser">
      <router-link to="/edit" class="btn btn-logout btn-sm"
        >Editar Usuario
      </router-link>
      <span class="navbar-text">
        {{ currentUser.email }}
        <router-link to="/logout" class="btn btn-logout btn-sm"
          >Logout</router-link
        >
      </span>
    </template>

    <template v-if="!currentUser">
      <router-link to="/Login" class="btn btn-logout btn-sm"
        >Login
      </router-link>
      <router-link to="/Sign-Up" class="btn btn-logout btn-sm"
        >Sign Up
      </router-link>
    </template>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({ currentUser: "currentUser" })
  }
};
</script>

<style scoped>
.bg-bookstore {
  background: #605b56 !important;
}

.btn-logout {
  background-color: #837a75;
  border-color: #837a75;
  color: #fff;
}

.btn-logout:hover {
  background-color: darken(#837a75, 20%);
  border-color: darken(#837a75, 20%);
  color: #fff;
}
</style>

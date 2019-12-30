<template>
  <div class>
    <form class="form-signin" @submit.prevent="register">
      <h2 class="form-signin-heading">Sign Up</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputUsuario" class>Nombre Usuario</label>
      <input
        v-model="username"
        type="text"
        id="inputUsuario"
        class="form-control"
        placeholder="Username"
        required
        autofocus
      />
      <label for="inputEmail" class>Email</label>
      <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email"
        required
        autofocus
      />
      <label for="inputPassword" class>Password</label>
      <input
        v-model="password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />

      <button class="btn btn-lg btn-primary btn-block" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sign-Up",

  created() {},
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    register() {
      this.$http
        .post("/wp/v2/users", {
          username: this.username,
          email: this.email,
          password: this.password,
          roles: "estudiante"
        })
        .then(request => this.SignUpSuccessful(request))
        .catch(() => this.SignUpFailed());
    },
    SignUpSuccessful(req) {
      this.$router.push("/login");
    },
    SignUpFailed() {
      this.error = "Sign Up failed!";
    }
  }
};
</script>

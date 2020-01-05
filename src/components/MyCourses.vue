<template>
  <div class>
    <div class="alert alert-danger" v-if="msg">{{ msg }}</div>
    <ul>
      <li v-for="courses in list">
        <router-link
          v-bind:to="'/my-courses/'+courses.id"
        >{{courses.id}} -- {{courses.title.rendered}}</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "MyCourses",
  computed: {
    ...mapGetters({ currentUser: "currentUser" })
  },
  mounted() {
    this.getData();
  },
  created() {
    this.checkCurrentLogin();
  },
  updated() {
    this.checkCurrentLogin();
  },
  data() {
    return {
      list: [],
      error: false,
      msg: false
    };
  },
  methods: {
    checkCurrentLogin() {
      if (!this.currentUser && this.$route.path !== "/") {
        this.$router.push("/?redirect=" + this.$route.path);
      }
    },
    getData() {
      this.$http
        .get("/wp/v2/curso")
        .then(request => {
          console.log(request.data);
          this.SearchSuccessful(request);
        })
        .catch(error => console.log(error));
    },
    edit() {},
    SearchSuccessful(request) {
      var i;
      var j;
      for (i = 0; i < request.data.length; i++) {
        for (j = 0; j < request.data[i].estudiantes_inscritos.length; j++) {
          if (
            request.data[i].estudiantes_inscritos[j] == localStorage.username
          ) {
            this.list.push(request.data[i]);
          }
        }
      }

      if (this.list.length == 0) {
        this.msg = "No tiene cursos";
      }
    },
    EditFailed() {
      this.error = "Edit failed!";
    }
  }
};
</script>

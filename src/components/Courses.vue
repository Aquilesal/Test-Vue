<template>
  <div class>
    <ul>
      <li v-for="course in list">
        <router-link v-bind:to="'/course/'+course.id">{{course.id}} -- {{course.nombre}}</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "Course",
  computed: {
    ...mapGetters({ currentUser: "currentUser" })
  },
  mounted() {
    this.getData();
  },
  data() {
    return {
      list: [],
      error: false
    };
  },
  methods: {
    getData() {
      this.$http
        .get("/wp/v2/curso")
        .then(request => {
          this.list = request.data;
          console.log(this.list);
        })
        .catch(error => console.log(error));
    },
    edit() {},
    EditSuccessful(req) {
      this.$router.go();
    },
    EditFailed() {
      this.error = "Edit failed!";
    }
  }
};
</script>

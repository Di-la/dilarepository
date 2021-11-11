<template>
  <v-app>
    <appbar></appbar>
    <v-main>
      <persondetail
        :name="persons[0].name"
        :lastname="persons[0].lastname"
        :position="persons[0].position"
        :tel="persons[0].tel"
        :mail="persons[0].mail"
        :birthday="persons[0].birthday"
        :degree="persons[0].degree"
        :image="persons[0].image"
        :personid="persons[0].id"
        :depid="persons[0].departmentid"
      >
      </persondetail>
    </v-main>
  </v-app>
</template>


<script>
import PersondetailVue from "./Persondetail.vue";
import axios from "axios";
import Appbar from "./Appbar.vue";
export default {
   beforeMount() {
     if (this.$route.params.id) {
      this.personid = this.$route.params.id;
    }
    axios
      .get("http://localhost:3000/persons/"+ this.personid)
      .then((response) => {
        let data = response.data;
        for (let key in data) {
          this.persons.push(data[key]);
        }
      });
  },

  components: {
    appbar: Appbar,
    persondetail: PersondetailVue,
  },
  data() {
    return {
      persons: [],
      personid: null,
    };
  },
};
</script>
<template>
  <v-app>
    <appbar></appbar>
    <v-main>
      <v-card color="#0000">
        <v-card-title>
          Rehber
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="filteredPersons"
          :search="search"
          :items-per-page="10"
          
       >
       <template #item.mail="{item}">
           <a v-bind:href="'mailto:' + item.mail"> {{item.mail}} </a>
          </template>
        
          <template v-slot:item.tel="{item}">
            <a v-bind:href="'tel:' + item.tel"> {{item.tel}} </a>
          </template>

          <template v-slot:item.action="{item}">
             <v-btn
              color="orange"
              dark
             
             
            >
              <a v-bind:href="'/person/'+item.id"> detay 
            
            </a>
            </v-btn>
         
          </template>

       </v-data-table>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

import Appbar from "./Appbar.vue";
//import Persondetail from './Persondetail.vue';

export default {

 beforeMount() {
    if (this.$route.params.id) {
      this.departmentid = this.$route.params.id;
    }
    axios
      .get("http://localhost:3000/persons/" + this.$route.params.id)
      .then((response) => {
        let data = response.data;
        for (let key in data) {
          console.log(data[key])
          this.persons.push(data[key]);
        }
      });
  },
  components: {
    Appbar,
    //Persondetail,
  },
  data() {
    return {
      name: "App",
      personid: null,
      search: "",
      persons: [],
      headers: [
        {
          text: this.$t("id"),
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: this.$t("name"),
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: this.$t("lastname"),
          align: "start",
          sortable: false,
          value: "lastname",
        },
        { text: this.$t("degree"), value: "degree" },

        { text: this.$t("position"), value: "position" },
        
        { text: this.$t("mail"), value:  "mail" },
        { text: this.$t("tel"), value: "tel" },
        { text: '', value: "action" },
        
      ],
    };
  },
  methods: {
    handleClick(item,a) {
      console.log(a)
      this.$router.push({ path:"/person/" +item.id });
    },
  },
  computed: {
    filteredPersons:function () {
      return this.persons.filter((person) => {
        return (
          person.name +
          " " +
          person.lastName +
          " " +
          person.position +
          " " +
          person.degree
        )
          .toLowerCase()
          .match(this.search.toLocaleLowerCase());
      });
    },
  },
};
</script>
<style scoped>
.person-content {
  width: 100%;
  padding: 25px;
}
.person-item {
  margin-bottom: 25px;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid black;
}

</style>

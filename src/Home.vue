<template >
  <v-app>
    <appbar></appbar>
    <v-main>
      <departments></departments>
      <location></location>
    </v-main>
  </v-app>
</template>

<script>

import Appbar from "./Appbar.vue";
import Departments from "./Departments.vue";
import Map from "./Map.vue";
export default {
  components: {
    appbar: Appbar,
    departments: Departments,
    location: Map,
    
  },
  data() {
    return {
      theme: false,
      name: "App",
    };
  },
  methods: {
    toggleLang() {
      //console.log(this.$i18n.locale);
      //this.$i18n.locale = this.$i18n.locale == "tr" ? "en" : "tr";
      if (this.$i18n.locale == "tr") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "tr";
      }
    },
  },
};
</script>
<style >
</style>
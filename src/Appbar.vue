<template>
    <v-app-bar
      app
      height="140"
      :style="'background-color:' + (this.theme ? '#333' : '#fff') + ';'"
    >
      <v-row justify="space-between">
        <v-col cols="5">
          <div class="d-flex flex-column justify-between">
            <img class="img" @click="navigateToHome"
              style="padding: 10px 0"
              width="200"
              src=".\assets\trex_color.svg"
            />
            <span class="blue-grey--text">Trex Rehber</span>
          </div>
        </v-col>
        <searchbar></searchbar>
        <v-col cols="auto">
          <div class="d-flex flex-column align-end">
            <div style="padding: 5px 0; font-size: 13px">
              <button @click="navigateToHome">
                <icon size="14px" name="home-fill" color="darkorange" />
                {{ $t("home") }}
              </button>
               <v-spacer></v-spacer>

              <button @click="goBack">
                <icon size="14px" name="home-fill" color="darkorange" />
                {{ $t("back") }}
              </button>

              <button class="ml-4" @click="toggleLang()">
                {{ $i18n.locale == "tr" ? "EN" : "TR" }}
              </button>
            </div>
            <!-- <input
              class="search-input"
              v-model="search"
              type="text"
              :placeholder="$t('search')"
            /> -->
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
</template>
<script>
import Search from "./Search.vue";
export default {
  components: {
     searchbar:Search,
  },
  data() {
    return {
      theme: false,
      name: "App",

      search: "",
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push({ path: "/" });
    },
    goBack(){
this.$router.go(-1);
    },
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
.search-input {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  width: 500px;
  left: 600px;
}
.home-icon {
  right: 10;
  top: 60px;
}
.img{
  cursor: pointer;
}

</style>
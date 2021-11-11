<template>
  <v-card class="mx-auto" max-width="500" tile>
    <v-img
      height="100%"
      src="https://www.ms3-inc.com/wp-content/uploads/2015/03/cloud-solution-bg.jpg"
    >
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-0" cols="12">
          <v-avatar class="profile" color="grey" size="165" tile>
            <v-img :src="image"> </v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ name }} {{ lastname }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ position }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#385F73"> mdi-phone </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> <a v-bind:href="'tel:' + tel"> {{tel}} </a></v-list-item-title>
          <v-list-item-subtitle>Phone</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#385F73"> mdi-email </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title > <a v-bind:href="'mailto:' + mail"> {{mail}} </a> </v-list-item-title>
          <v-list-item-subtitle>Mail</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#385F73"> mdi-table-large </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ birthday }}</v-list-item-title>
          <v-list-item-subtitle>Date of Birth</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#385F73"> mdi-school </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ degree }}</v-list-item-title>
          <v-list-item-subtitle>Diploma</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>

  <!-- <v-card >    
          <v-list v-for="p in persons" :key="p.name">            
                <person  :name="p.name" :lastName="p.lastName" :position="p.position" :tel="p.tel" :mail="p.mail" :birthday="p.birthday" :degree="p.degree" :image="p.image"  ></person>             
          </v-list>   
      </v-card> -->
</template>
<script>
export default {
  props: [
    "name",
    "lastname",
    "position",
    "tel",
    "mail",
    "birthday",
    "degree",
    "image",
    "personid",
    "depid"

  ],
  components: {},
  data() {
    return {};
  },
};
</script>
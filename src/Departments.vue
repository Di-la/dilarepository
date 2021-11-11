<template>
  <v-card class="mx-auto" flat>
    <v-row justify="space-between">
      <!-- {{$i18n.locale}} -->
      <v-col cols="12" md="6" lg="4" v-for="dep in departments" :key="dep.name">
        <department
          :title="dep.Name"
          :color="dep.Color"
          :floor="dep.Floor"
          :head="dep.Head"
          :depid="dep.Id"
        ></department>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import axios from "axios";
import DepcomponentVue from "./Depcomponent.vue";
export default {
  beforeMount() {
    axios.get("http://localhost:3000/department/").then((response) => {
      console.log(response);
      let data = response.data;
      for (let key in data) {
          let pers = [{name:'',lastname:''}];
          
          axios.get("http://localhost:3000/persons/"+data[key].Head).then((resp) => {
            pers = resp.data;
            //console.log(pers[0])
            this.departments.push({ ...data[key], Head: `${pers[0].name} ${pers[0].lastname}` });
          }).catch(err => {
            console.log(err);
            this.departments.push({ ...data[key], Head: `- Yok -` });
          });
        
      }
    });
    //.catch((e) => console.log(e));
  },
  components: {
    department: DepcomponentVue,
  },
  data() {
    return {
      departments: [],
      //  departments:[

      //       {name:this.$t('production'),kat:this.$t('floor'),müdür:this.$t('head'),color:'#385F73',path:'/personlist/1'},
      //       {name:this.$t('humanresource'),kat:this.$t('floor'),müdür:this.$t('head'),color:'#385F73',path:'/personlist/2'},
      //       {name:this.$t('sales'),kat:this.$t('floor'),müdür:this.$t('head'),color:'#43A047',path:'/personlist/3'},
      //       {name:this.$t('development'),kat:this.$t('floor'),müdür:this.$t('head'),color:'#43A047',path:'/personlist/4'},
      //       {name:this.$t('marketing'),kat:this.$t('floor'),müdür:this.$t('head'),color:'#FF5722',path:'/personlist/5'},
      //       {name:this.$t('accounting'),kat:this.$t('floor'),müdür:this.$t('head'),color:'#FF5722',path:'/personlist/6'},
      //   ]
    };
  },
  //  computed: {
  // filteredDepartments: function () {
  //   return this.departments.filter((department) => {
  //     return (
  //       department.name +
  //       " " +
  //      department.head +
  //       " " +
  //       department.floor +
  //       " " +
  //       department.degree
  //     )
  //   });
  // },
  // },
};
</script>
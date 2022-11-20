<template>
    <v-card flat>
        <v-row>
            <v-col>
                <div  >
                 <v-card :color="color" dark flat rounded="50px"
                  ><v-card-title class="text-h5">
                   {{title}} 
                  </v-card-title>
                  <v-card-subtitle>{{ $t("head") }} {{head}}  </v-card-subtitle>
                  <v-card-subtitle>{{ $t("floor") }} {{floor}}</v-card-subtitle>
                  <v-card-actions>
                    <v-btn :to="'/personlist/'+depid">
                      {{ $t("show") }}
                    </v-btn>
                  </v-card-actions>
                </v-card>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
export default {
    props: ['title','color','floor','head','depid',],
    data(){
        return{
            
        }
    }
}
</script>
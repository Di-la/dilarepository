import Home from './Home.vue'
import PersonList from './PersonList.vue'
import Persons from './Persons.vue'
export const
    routes=[
      {path:'/',component:Home},
      {path:'/personlist',component: PersonList},
      {path:'/personlist/:id',component: PersonList},
      {path:'/person/:id',component: Persons},
    
    ];
    
 
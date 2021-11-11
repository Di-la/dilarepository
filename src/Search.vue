<template>
  <section>
    <div class="dropdown-input">
      <input v-model="searchQuery" type="text" :placeholder="$t('search')" />
      <span v-if="filteredPersons.length == 0"> No Data Available</span>
      <div class="options">
        <ul>
          <li
            v-show="searchQuery || apiLoaded"
            @click="handleClick(person)"
            v-for="person in filteredPersons"
            :key="person.name"
          >
            {{ (person.name + " " + person.lastname).trim() }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  beforeMount() {
    axios.get("http://localhost:3000/person/").then((response) => {
      console.log(response);
      let data = response.data;
      for (let key in data) {
        this.persons.push(data[key]);
      }
    });
  },

  data() {
    return {
      persons: [],
      personid: null,
      searchQuery: "",
      apiLoaded: false,
    };
  },
  methods: {
    handleClick(item) {
      console.log(item)
      this.$router.push({ path: "/person/" + item.id });
    },
  },

  computed: {
    filteredPersons: function () {
      return this.persons.filter((person) => {
        return (person.name + " " + person.lastname)
          .toLowerCase()
          .startsWith(
            this.searchQuery.toLocaleLowerCase()
          );
          
      });
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown-input {
  width: 400px;
  padding: 10px 16px;
  border: 2px solid lightgray;
  background: white;
  outline: none;
  border-radius: 8px;
  top: 50px;

  input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
  }
  .options {
    width: 100%;
  }
  ul {
    list-style: none;
    text-align: left;
    max-height: 180px;
    padding-left: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid lightgray;

    li {
      width: 100%;
      border-bottom: 1px solid lightgray;
      padding: 10px;
      background-color: #f1f1f1;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        background: #78878a;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="d-flex justify-content-evenly">
      <button @click="changePage(false)" type="button" :class="{ disabled : !previousPage}" class="btn btn-dark">Previous</button>
      <img id="logo" src="../assets/swlogo.png" alt="" />
      <button @click="changePage(true)" :class="{ disabled : !nextPage}" type="button" class="btn btn-dark">Next</button>
    </div>
    <div class="container center">
      <Card :list="characters"></Card>
    </div>
      
  </section>
</template>

<script>
import api from "../service/index";
import Card from "../components/Card.vue";
export default {
  name: "List",
  components: {
    Card
  },
  data() {
    return {
      characters: [],
      previousPage: '',
      nextPage: ''
    };
  },
  created() {
    this.$store.commit('SET_LOADING', true)
    api.list()
      .then((item) => {
        this.characters = item.data.results;
        this.previousPage = item.data.previous
        this.nextPage = item.data.next
        this.$store.commit('SET_LOADING', false)
      })
      .catch((err) => {
        this.$store.commit('SET_LOADING', false)
        console.log(err);
      });
  },
  methods: {
    changePage(i){
      this.$store.commit('SET_LOADING', true)
      api.find(i ? this.nextPage : this.previousPage)
      .then((item) => {
        i ? this.characters = item.data.results : this.characters = item.data.results
        this.previousPage = item.data.previous
        this.nextPage = item.data.next
        this.$store.commit('SET_LOADING', false)
      }).catch((err) => {
        this.$store.commit('SET_LOADING', false)
        console.log(err);
      })
    }
  }
};
</script>
<style>
.btn-dark{
  margin: 0 10px 20px 0;
  height: 50px;
}
.container {
  background-color: transparent !important;
}

#logo {
  width: 150px;
  margin-bottom: 30px;
}

.center{
  display: flex;
  justify-content: center;
}

.disabled{
  cursor:not-allowed;
}

</style>

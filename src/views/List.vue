<template>
  <section>
      <img id="logo" src="../assets/swlogo.png" alt="" />
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
    };
  },
  created() {
    this.$store.commit('SET_LOADING', true)
    api.list()
      .then((item) => {
        this.characters = item.data.results;
        this.$store.commit('SET_LOADING', false)
      })
      .catch((err) => {
        this.$store.commit('SET_LOADING', false)
        console.log(err);
      });
  }
};
</script>
<style>
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

</style>

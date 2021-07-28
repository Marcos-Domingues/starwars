<template>
<section>
    <div class="card-group">
        <div class="row">
          <div @click="character = char" class="card col-sm-12 col-md-3 col-lg-2" v-for="(char, i) in list" :key="i">
            <img src="../assets/stormtrooper.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ char.name }}</h5>
              <p class="card-text">
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="character">
      <Modal @closeModal="modalClose()" :clickedCharacter="character"></Modal>
      </div>
</section>
</template>
<script>
import Modal from "./Modal.vue"
export default {
    props: ["list"],
    components: {
      Modal
    },
    data:() => { return {character: null}},
    methods: {
      modalClose(){
        this.character = null
      }
    }
}
</script>
<style>
.card{
  margin: 0 10px 10px 0;
  background-color: #000;
  padding: 15px;
  border: 3px #333138 solid;
  color: #fff;
  cursor: pointer;
}

.row{
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 768px) {
  .card{
    margin: 10px;
  }
}
</style>

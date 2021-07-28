<template>
  <div id="outside-modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ clickedCharacter.name }}</h5>
          <button
            @click="closeModal()"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p v-for="(sship, i) in starshipList" :key="i">
            {{ sship.name }}
          </p>
        </div>
        <div class="modal-footer">
          <button
            @click="closeModal()"
            type="button"
            class="btn btn-dark"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../service/index";
export default {
  props: ["clickedCharacter"],
  data: () => {
    return { starshipList: [] };
  },
  created() {
    this.queryChar();
  },
  methods: {
    queryChar() {
      if (this.clickedCharacter.starships.length > 0) {
          this.$store.commit('SET_LOADING', true)
        this.clickedCharacter.starships.map((item) => {
          api.find(item)
            .then((item) => {
              this.starshipList.push(item.data);
                this.$store.commit('SET_LOADING', false)
            })
            .catch((err) => {
              console.log(err);
            this.$store.commit('SET_LOADING', false)
            });
        });
      }else{
          this.starshipList.push({name: "Este personagem não possui naves"})
      }
    },
    closeModal() {
      this.$emit("closeModal", null);
    },
  },
};
</script>
<style>
#outside-modal {
    position: fixed;
    top: 40%;
    left: 43%;
    min-width: 320px ;
}

.modal-footer{
  height: 75px;
}

@media only screen and (max-width: 768px) {
    #outside-modal {
        left: 30%;
    }
}
</style>
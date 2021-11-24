<template>
  <div class="estruturaCamisetas d-flex py-5 flex-wrap">
    <v-card
      class="mx-auto card-camiseta"
      max-width="400"
      v-for="(camiseta, index) of camisetasFiltradas"
      :key="index"
    >
      <v-img class="white--text align-end" height="200px">
        <img
          src="https://static.vecteezy.com/ti/vetor-gratis/t2/3137104-modelo-camisa-vermelha-preta-para-uniforme-time-e-camiseta-de-futebol-vetor.jpg"
          alt="Dale"
        />
      </v-img>

      <v-card-subtitle class="pb-0">R$ {{ camiseta.preço }},00</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ camiseta.tipo }}, {{ camiseta.tamanho }}</div>
        <div>{{ camiseta.marca }}</div>
      </v-card-text>

      <v-card-actions>
        <!-- <v-btn color="green" outlined>COMPRAR</v-btn> -->
        <v-btn text outlined @click.stop.prevent="addCart(camiseta.id)">
          ADICIONAR AO CARRINHO
          <v-icon right>mdi-cart-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    {{ camisetasCarrinho }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {


  computed: {
    ...mapState({
    camisetasFiltradas: state => state.camisetasFiltradas,
    camisetasCarrinho: state => state.camisetasCarrinho
  }),
  },


  methods: {
    addCart(id) {
      this.$store.dispatch('addCart', id)
    }
  }

};
</script>

<style>
</style>
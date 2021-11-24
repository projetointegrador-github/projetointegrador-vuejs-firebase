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

      <v-card-subtitle class="pb-0">R$ {{ camiseta.preço }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ camiseta.modelo }}, {{ camiseta.tamanho }}</div>
        <div>{{ camiseta.marca }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="green" outlined>COMPRAR</v-btn>
        <v-btn text outlined>
          ADICIONAR AO CARRINHO
          <v-icon right>mdi-cart-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {bus} from '../main.js'

export default {


  data() {
    return {
      camisetas: [
        {
          modelo: "Camiseta",
          tamanho: "M",
          preço: "59,90",
          sexo: "masculino",
          src: "@/src/assets/camiseta3.jpg",
          marca: "Naike",
        },
        {
          modelo: "Regata",
          tamanho: "P",
          preço: "89,90",
          sexo: "masculino",
          src: "../src/assets/camiseta2.jpg",
          marca: "Ardidas",
        },
        {
          modelo: "Regata",
          tamanho: "G",
          preço: "49,90",
          sexo: "feminino",
          src: "../src/assets/camiseta1.jpg",
          marca: "Ombro",
        },
        {
          modelo: "Camisa",
          tamanho: "GG",
          preço: "79,90",
          sexo: "masculino",
          src: "../src/assets/camiseta3.jpg",
          marca: "Pumba",
        },
        {
          modelo: "Camisa",
          tamanho: "GG",
          preço: "79,90",
          sexo: "masculino",
          src: "../src/assets/camiseta3.jpg",
          marca: "Pumba",
        },
        {
          modelo: "Camisa",
          tamanho: "GG",
          preço: "79,90",
          sexo: "masculino",
          src: "../src/assets/camiseta3.jpg",
          marca: "Pumba",
        },
        {
          modelo: "Camisa",
          tamanho: "GG",
          preço: "79,90",
          sexo: "masculino",
          src: "../src/assets/camiseta3.jpg",
          marca: "Pumba",
        },
        {
          modelo: "Camisa",
          tamanho: "GG",
          preço: "79,90",
          sexo: "masculino",
          src: "../src/assets/camiseta3.jpg",
          marca: "Pumba",
        },
        {
          modelo: "Camisa",
          tamanho: "GG",
          preço: "79,90",
          sexo: "masculino",
          src: "../src/assets/camiseta3.jpg",
          marca: "Pumba",
        },
        {
          modelo: "Camisa",
          tamanho: "GG",
          preço: "79,90",
          sexo: "masculino",
          src: "../src/assets/camiseta3.jpg",
          marca: "Pumba",
        },
        {
          modelo: "Camisa",
          tamanho: "GG",
          preço: "79,90",
          sexo: "masculino",
          src: "../src/assets/camiseta3.jpg",
          marca: "Pumba",
        }
      ],
      camisetasFiltradas: [],
      tipo: undefined,
    };
  },


  methods: {
    filtrarCamisetas(t) {
      if (t === 'geral') {
        this.camisetasFiltradas = this.camisetas;
      } else {
        this.camisetasFiltradas = [];
        this.camisetas.forEach((camiseta) => {
          if(camiseta.sexo === t) {
            this.camisetasFiltradas.push(camiseta);
          }
        })
      }
    }
  },


  created() {
    this.camisetasFiltradas = this.camisetas;
    bus.$on('novoTipo', (t) => {
      this.filtrarCamisetas(t);
    })
  }


};
</script>

<style>
</style>
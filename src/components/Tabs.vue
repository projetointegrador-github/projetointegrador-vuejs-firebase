<template>
  <v-tabs>
    <v-tab :to="{ name: 'Loja' }" @click.stop.prevent="tipo = 'geral'">Todos</v-tab>
    <v-tab :to="{ name: 'Loja' }" @click.stop.prevent="tipo = 'feminino'">Feminino</v-tab>
    <v-tab :to="{ name: 'Loja' }" @click.stop.prevent="tipo = 'masculino'">Masculino</v-tab>
  </v-tabs>
</template>

<script>
export default {


  data() {
    return {
      
      tipo: undefined,

    }
      
  },


  watch: {
  },
}
</script>
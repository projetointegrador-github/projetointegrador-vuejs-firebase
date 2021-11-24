import Vue from 'vue'
import Vuex from 'vuex'
import { camisetasCollection } from '../plugins/firebase.js';
import { getDocs } from '@firebase/firestore';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    camisetas: [],
    camisetasFiltradas: [],
    tipoCamiseta: '' 
  },
  mutations: {
    pushCamiseta(state, camiseta) {
      state.camisetas.push(camiseta);
    }
  },
  actions: {
    async getCamisetas() {
      const docs = await getDocs(camisetasCollection);
      docs.forEach(doc => {
        this.commit('pushCamiseta', doc.data())
      })
    }
  },
  modules: {
  }
})

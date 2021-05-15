<template>
  <div class="flex flex-col items-center">
    <div>
      <h1 class="text-center my-2 font-bold" style="font-size: 64px;">
        Penpal da massa
      </h1>
      <div>
        <input v-model="name" type="text" class="border-2 transition duration-300 focus:border-green-500 focus:bg-white bg-gray-100 rounded-md px-2 focus:outline-none" placeholder="Nome do penpal">
        <input v-model="email" type="text" class="border-2 transition duration-300 focus:border-green-500 focus:bg-white bg-gray-100 rounded-md px-2 focus:outline-none" placeholder="Email do penpal">
        <button class="mx-4 bg-green-500 text-white hover:bg-green-100 hover:text-black rounded-md px-4 py-1 transition duration-300" @click="insert({name: name, email: email, restricoes: []}); email = ''; name = '';">
          Adicionar
        </button>
      </div>
      <div>
        <div v-for="player in players" :key="player.email">
          Nome: {{ player.name }} - Email: {{ player.email }}
        </div>
      </div>
      <div class="flex justify-center my-2">
        <button class="bg-green-500 text-white text-2xl hover:bg-green-100 hover:text-black rounded-md px-4 py-1 transition duration-300" @click="$router.push('/restricoes')">
          Próximo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {

  data: () => ({
    name: '',
    email: ''
  }),

  computed: {
    ...mapGetters(['players'])
  },

  methods: {
    ...mapMutations(['insert'])
  }
}
</script>

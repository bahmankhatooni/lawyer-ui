import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    login(username) {
      this.user = { name: username }
    },
    logout() {
      this.user = null
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user
  }
})

import { createStore } from 'vuex'

export default createStore({
  state: {
		person: {
			name: "",
			age: "",
			children: [],
		},
  },
  getters: {
  },
  mutations: {
		savePerson(state, payload) {
			state.person = payload
		}
  },
  actions: {
  },
  modules: {
  }
})

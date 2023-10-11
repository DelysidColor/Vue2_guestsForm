import { createStore } from 'vuex'

export default createStore({
  state: {
		person: {
			name: "",
			age: "",
			children: [],
		},
		storedPerson: {
			name: "",
			age: "",
			children: [],
		},
		isSaved: false,
  },
  getters: {
  },
  mutations: {
		savePerson(state, payload) {
			state.person = payload
			state.storedPerson = JSON.parse(JSON.stringify(state.person))
		}
  },
  actions: {
  },
  modules: {
  }
})

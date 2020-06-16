import firebase from 'firebase/app'
export default {
  actions: {
    async updateCategory ({ commit, dispatch }, { id, title, limit }) {
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/categories`).child(id).update({ title, limit })
      } catch (e) {
        commit('setError', e)
      }
    },
    async fetchCategories ({ commit, dispatch }) {
      try {
        const uid = await dispatch('getUid')
        console.log(uid)
        const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
        return Object.keys(categories).map(key => ({ ...categories[key], id: key }))
      } catch (e) {
        commit('setError', e)
      }
    },
    async createCategory ({ commit, dispatch }, { title, limit }) {
      try {
        const uid = await dispatch('getUid')
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({ title, limit })
        return { title, limit, id: category.key }
      } catch (e) {
        commit('setError', e)
      }
    }
  }
}

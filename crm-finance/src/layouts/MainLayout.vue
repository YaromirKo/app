<template>
  <div class="app-main-layout">
    <navbar @click="isOpen = !isOpen"></navbar>
    <sidebar v-model="isOpen"></sidebar>

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/app/Navbar'
import Sidebar from '../components/app/Sidebar'
export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Sidebar
  },
  async mounted () {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
  },
  data: () => ({
    isOpen: true
  })
}
</script>

<style scoped>

</style>

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
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
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
  data: () => ({
    isOpen: true
  })
}
</script>

<style scoped>

</style>

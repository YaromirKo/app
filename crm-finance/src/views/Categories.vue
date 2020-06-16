<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <loader v-if="loading"></loader>
      <div class="row" v-else>
        <category-create @created="addNewCategory"></category-create>
        <category-edit :categories="categories"
                       :key="categories.length + updateCount"
                       v-if="categories.length"
                       @updated="updatCategories"></category-edit>
        <p v-else class="center">Категорий пока нет</p>
      </div>
    </section>
  </div>

</template>

<script>
import CategoryEdit from '../components/CategoryEdit'
import CategoryCreate from '../components/CategoryCreate'
export default {
  name: 'Categories',
  components: {
    CategoryCreate,
    CategoryEdit
  },
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0
  }),
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
    },
    updatCategories (category) {
      const idx = this.categories.findIndex(c => c.id === category.id)
      this.categories[idx].title = category.title
      this.categories[idx].limit = category.limit
      this.updateCount++
    }
  }
}
</script>

<style scoped>

</style>

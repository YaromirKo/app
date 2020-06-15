<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <category-create @created="addNewCategory"></category-create>
        <category-edit></category-edit>
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
    categories: []
  }),
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
    }
  }
}
</script>

<style scoped>

</style>

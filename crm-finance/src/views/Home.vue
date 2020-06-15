<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button @click="refresh" class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <loader v-if="loading"></loader>

    <div v-else class="row">
      <home-bill :rates="currency.rates"></home-bill>
      <home-currency :rates="currency.rates" :date="currency.date"></home-currency>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBill from '../components/HomeBill'
import HomeCurrency from '../components/HomeCurrency'

export default {
  name: 'Home',
  components: {
    HomeBill,
    HomeCurrency
  },
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted () {
    this.currency = await this.$store.dispatch('fetchCurrency')
    console.log(this.currency)
    this.loading = false
  },
  methods: {
    async refresh () {
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  }
}
</script>

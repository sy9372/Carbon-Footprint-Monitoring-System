<template>
  <div>
    <!-- 这里是循环水场 -->
    <p> {{ name }}</p>
    <button @click="turn"> {{ button }} </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '循环水场',
      button: '跳转',
      url: '/dataquery/ChemicalSegment/ministryenvironmentalprotectionwateraffairs'
    }
  },
  methods: {
    turn() {
      console.log('success')
      this.$router.push({ path: '/dataquery/ChemicalSegment/ministryenvironmentalprotectionwateraffairs' })
    }
  }
}
</script>

<style>

</style>

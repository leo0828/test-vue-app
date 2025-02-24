<template>
  <div>
    <div>
      <slot name="table1" :setScrollLeft="setScrollLeft"></slot>
    </div>
    <div>
      <slot name="table2" :setScrollLeft="setScrollLeft"></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setScrollLeft({ scrollLeft }, tableName) {
      if (!this.$parent.$refs[tableName]) return
      this.$parent.$refs[tableName].setScrollLeft(scrollLeft)
    },
  },
}
</script>

<style scoped></style>

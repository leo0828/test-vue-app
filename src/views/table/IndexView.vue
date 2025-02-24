<template>
  <MyPanel>
    <template #header>联动表格</template>
    <template #desc>横向滚动其中一个表格，带动另一个表格滚动</template>
    <DoubleTable></DoubleTable>
  </MyPanel>
</template>

<script setup>
import DoubleTable from './components/DoubleTable.vue'
import MyPanel from '@/components/MyPanel.vue'
</script>

<style scoped></style>

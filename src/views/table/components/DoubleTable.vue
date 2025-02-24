<template>
  <MyTable>
    <template #table1="{ setScrollLeft }">
      <el-table
        ref="table1"
        class="mb-6"
        :data="tableData"
        style="width: 100%"
        @scroll="(value) => setScrollLeft(value, 'table2')"
      >
        <el-table-column prop="date" label="Date" min-width="160" fixed="left" />
        <el-table-column prop="name" label="Name" min-width="460" />
        <el-table-column prop="address" label="Address" min-width="460" />
        <el-table-column prop="address1" label="Address" min-width="460" />
        <el-table-column prop="address2" label="Address" min-width="460" />
        <el-table-column prop="address3" label="Address" min-width="460" />
        <el-table-column prop="address4" label="Address" min-width="460" />
        <el-table-column prop="address5" label="Address" min-width="160" fixed="right" />
      </el-table>
    </template>
    <template #table2="{ setScrollLeft }">
      <el-table
        ref="table2"
        :data="tableData"
        style="width: 100%"
        @scroll="(value) => setScrollLeft(value, 'table1')"
      >
        <el-table-column prop="date" label="Date" min-width="160" fixed="left" />
        <el-table-column prop="name" label="Name" min-width="460" />
        <el-table-column prop="address" label="Address" min-width="460" />
        <el-table-column prop="address1" label="Address" min-width="460" />
        <el-table-column prop="address2" label="Address" min-width="460" />
        <el-table-column prop="address5" label="Address" min-width="160" fixed="right" />
      </el-table>
    </template>
  </MyTable>
</template>

<script>
import MyTable from './MyTable.vue'

export default {
  components: {
    MyTable,
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address1: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address2: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address3: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address4: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address5: 'No. 189, Grove St, Los Angeles No. 189, ',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address1: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address2: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address3: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address4: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address5: 'No. 189, Grove St, Los Angeles No. 189, ',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address1: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address2: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address3: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address4: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address5: 'No. 189, Grove St, Los Angeles No. 189, ',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address1: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address2: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address3: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address4: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address5: 'No. 189, Grove St, Los Angeles No. 189, ',
        },
      ],
      tableData2: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address1: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address2: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address5: 'No. 189, Grove St, Los Angeles No. 189, ',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address1: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address2: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address5: 'No. 189, Grove St, Los Angeles No. 189, ',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address1: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address2: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address5: 'No. 189, Grove St, Los Angeles No. 189, ',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address1: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address2: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
          address5: 'No. 189, Grove St, Los Angeles No. 189, ',
        },
      ],
    }
  },
}
</script>

<style scoped></style>

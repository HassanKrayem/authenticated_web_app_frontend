<template>
  <div style="text-align: left">
    <div style="display: inline-block;margin-right: 50px; width: 300px;position: relative">
      <el-input placeholder="Please Search here" v-model="searchValue">
        <template slot="prepend"><i class="el-icon-search"></i></template>
      </el-input>
      <div style="position: absolute;top: 45px;">
        <small>You can search company by name or/and email</small>
      </div>

    </div>
    <div style="display: inline-block;">
      <span class="demonstration">Date Range</span>
      <el-date-picker
        value-format="yyyy-MM-dd"
        end-placeholder="End date"
        range-separator="To"
        start-placeholder="Start date"
        type="daterange"
        v-model="dateRange">
      </el-date-picker>
    </div>
    <div style="display: inline-block;margin-left: 100px;">
      <el-button type="primary" @click="performSearch">Search</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
      dateRange: ''
    };
  },
  props: {
    ctx: {
      required: true
    }
  },
  methods: {
    performSearch () {
      this.ctx.performSearch(this.searchValue, this.dateRange)
    }
  }
};
</script>

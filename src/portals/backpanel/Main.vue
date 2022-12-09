<template>
  <el-container style="height: 100%; border: 1px solid #b1c1bd">
    <sidebar></sidebar>
    <el-container>
      <el-header style="text-align: right; font-size: 12px;background-color: #b1c1bd;">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Tom</span>
      </el-header>

      <el-main>
        <companies-list></companies-list>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)

Vue.use(ElementUI);
export default {
  components: {
    sidebar: () => import('./layout/Sidebar'),
    "companies-list": () => import('./layout/companies-list/List')
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
};
</script>

<style src="./css/main.css"></style>
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

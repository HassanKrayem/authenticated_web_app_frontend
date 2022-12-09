<template>
  <el-aside width="200px" style="background-color: #b1c1bd">
    <el-menu :default-openeds="['1', '2']" active="1-1">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-office-building"></i>Companies</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" active>Search</el-menu-item>
          <el-menu-item index="1-2" disabled>Create</el-menu-item>
          <el-menu-item index="1-3" disabled>Compare</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

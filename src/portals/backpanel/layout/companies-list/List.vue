<template>
  <div>
    <SearchInputs style="margin-bottom: 35px;" :ctx="ctx"></SearchInputs>

    <div>Records: {{recordsCount}}</div>
    <el-table :data="companies" v-loading="loading">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            :data="[props.row]" border
            style="width: 100%;">
            <el-table-column
              label="about" prop="about">
            </el-table-column>
            <el-table-column
              label="website" prop="website">
              <template slot-scope="scope">
                <a :href="scope.row.website" target="_blank">{{ scope.row.website }}</a>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>

      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Establish Date" prop="established_on" width="130"></el-table-column>
      <el-table-column label="Employees" prop="number_of_employees" width="130"></el-table-column>

      <el-table-column label="Address">
        <template slot-scope="scope">
          {{ scope.row.state + ", " + scope.row.city + ", " + scope.row.street }}
        </template>
      </el-table-column>

      <el-table-column label="Phone Number" prop="phone_number"></el-table-column>
      <el-table-column label="Email" prop="email"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  components: {
    SearchInputs: () => import('./SearchInputs')
  },
  beforeMount() {
    axios({
      method: 'get',
      url: _sys.microservices.backend.url + "/api/company",
      headers: {
        'Authorization': 'Basic ' + _sys.token
      }
    }).then(r => {
      this.companies = r.data.rows
      this.recordsCount = r.data.count
    }).catch(e => {
      Swal.fire({
        icon: 'danger',
        text: 'Your dashboard is ready',
        toast: true,
        position: 'top-right'
      })
    }).finally(() => {
      this.loading = false
    })
  },
  methods: {
    performSearch (searchValue, dateRange) {
      this.loading = true
      axios({
        method: 'get',
        url: _sys.microservices.backend.url + "/api/company/search?" + (new URLSearchParams({searchValue, dateRange}).toString()),
        headers: {
          'Authorization': 'Basic ' + _sys.token
        }
      }).then(r => {
        this.companies = r.data.rows
        this.recordsCount = r.data.count
      }).catch(e => {
        Swal.fire({
          icon: 'danger',
          text: 'Error Occur',
          toast: true,
          position: 'top-right'
        })
      }).finally(() => {
        this.loading = false
      })
    }
  },
  data() {
    return {
      ctx: this,
      loading: true,
      companies: [],
      recordsCount: ''
    }
  }
}
</script>

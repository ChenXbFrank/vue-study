<template>
  <div>
    <h1>使用element-ui的表格</h1>
     <el-button type="primary" @click="jumpHome">返回首页</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <h2>总共获取{{count}}条数据</h2>
    <h3>{{userInfo}}</h3>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'UserInfo',
  props: {
    msg: String
  },
  data() {
      return {
        tableData: [],
        count: 0
      }
    },

    methods: {
      getUserInfo() {
        this.$http.get('/vue').then((result) => {
          // 将获取的后端数据复制给表格的数据
          this.tableData = result.data;
          this.count = this.tableData.length;
        }).catch((err) => {
          console.log("获取的后端数据出错:", err);
        });
      },

      saveUser() {
        let user = {
          // todo 如果使用post方法，则放开下面的注释
          // name: '趵突泉',
          // date: '2020-10-10',
          // address: '山东省济南市趵突泉街101号'
        };
        
        this.$http({
            url: '/vue/save',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: user
        }).then(res => {
            console.log("插入数据成功:", res);
            this.getUserInfo();
        }).catch(err => {
            console.log("插入数据失败:", err);
        })
      },
      jumpHome() {
        this.$router.push("/index");
      }

    },

    mounted() {
      this.getUserInfo();
      this.saveUser();
    },

    computed: {
      ...mapState({
        userInfo:  state => state.UserInfo.stateB
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

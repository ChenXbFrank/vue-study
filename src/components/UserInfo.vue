<template>
  <div>
    <h1>使用element-ui的表格</h1>
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
  </div>
</template>

<script>

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
          name: '趵突泉',
          date: '2020-10-10',
          address: '山东省济南市趵突泉街101号'
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
      }

    },

    mounted() {
      this.getUserInfo();
      this.saveUser();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

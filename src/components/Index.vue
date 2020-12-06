<template>
  <div>
    <h1>首页</h1>
    <el-button type="primary" @click="jumpUserInfo" style="margin-bottom: 25px">查看用户列表</el-button>
    <el-carousel indicator-position="outside" :interval="1000">
      <el-carousel-item v-for="item in recordList" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <el-carousel :interval="1000" type="card" height="200px">
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        <img :src="item.idView" class="image">
        <span>{{item.text}}</span>
      </el-carousel-item>
    </el-carousel>

    <h2>{{index}}</h2>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Index',
  props: {
    msg: String
  },
  data() {
      return {
        recordList: [
          '春', '夏', '秋', '冬'
        ],
        imagebox:[
          {
            id:1,
            text: '春天',
            idView:require('../assets/imagebox/1.jpg')
          },
          {
            id:2,
            text: '夏天',
            idView:require('../assets/imagebox/2.jpg')
          },
          {
            id:3,
            text: '秋天',
            idView:require('../assets/imagebox/3.jpg')
          },
          {
            id:4,
            text: '冬天',
            idView:require('../assets/imagebox/4.jpg')
          }
          //imagebox是assets下一个放图片的文件夹
        ]
      }
    },

    methods: {
     jumpUserInfo() {
       this.$router.push("/user-info");
     }
    },

    mounted() {
     
    },
    computed: {
      ...mapState({
        index:  state => state.Index.stateA
    })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

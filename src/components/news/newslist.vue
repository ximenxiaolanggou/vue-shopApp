<template>
    <div id="temp">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(item,index) in dataList" :key="index">
          <router-link v-bind="{to:'/news/newsInfo/' + item.id}">
            <img height="60px" class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
              幸福
              <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
              <p class='mui-ellipsis'>{{item.add_time | formatDate('YYYY-MM-DD HH:mm:ss')}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "newslist",
        data(){
          return {
            dataList:[]
          }
        },
      mounted() {
          this.getDataList();
      },
      methods:{
        getDataList(){
          this.dataList = [
            {
              "id":13,
              "title":"11111111111",
              "add_time":"2015-04-16T03:50:28.000Z",
              "click":1,
              "img_url":"../../../static/images/1.jpg"
            },
            {
              "id":2,
              "title":"222222222222222222222222",
              "add_time":"2015-04-16T03:50:28.000Z",
              "click":1,
              "img_url":"../../../static/images/1.jpg"
            },
            {
              "id":333,
              "title":"3333333333333",
              "add_time":"2015-04-16T03:50:28.000Z",
              "click":1,
              "img_url":"../../../static/images/1.jpg"
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>

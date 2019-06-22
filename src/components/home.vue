<template>
    <div id="temp">
      <!--轮播图-->
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in urls"><img height="100%" :key="index" :src="item"/></mt-swipe-item>
      </mt-swipe>
      <!--九宫格-->
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
            <div class="mui-media-body">图片分享</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <span class="mui-icon mui-icon-minus"></span>
            <div class="mui-media-body">商品购买</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">留言反馈</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <span class="mui-icon mui-icon-videocam"></span>
            <div class="mui-media-body">视频专区</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div></router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "home",
      data(){
          return {
            urls:[
              "../../static/images/1.jpg",
              "../../static/images/2.jpg",
              "../../static/images/3.jpg",
            ]
          }
      }
    }
</script>

<style scoped>
  .mint-swipe{
    height: 300px;
  }
  .mui-grid-view.mui-grid-9{
    background: #fff;
    border-top:0px;
    border-left:0px;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-right:0px;
    border-bottom:0px;
  }

</style>

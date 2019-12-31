<template>
	<swiper :options="swiperOption">
    <swiper-slide v-for="(banner,index) in banners" :key="index">
		<a :href="banner"><img :src="banner" alt=""></a>
	</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import'swiper/dist/css/swiper.css';
	export default {
	data () {
      return {
        banners: [
			"http://pic.tsmp4.net/api/fengjing/img.php",
			"http://pic.tsmp4.net/api/nvsheng/img.php",
		],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          loop:true,
          autoplay:true
        }
      }
    },
    components: {
        swiper,
        swiperSlide
    }
  }
</script>
<style type="text/css" scoped>
	.swiper-pagination-bullet-active {
        background-color: #52B54B
	}
	img{
    width: 96%;
    margin-left: 2%;
		height:180px;
    border-radius: 10px
	}
	
</style>
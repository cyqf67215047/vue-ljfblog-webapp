<template>
    <div class="main_box">
        <Tab/>
        <div class="search_bar ">
            <router-link to="/search" class="search">
                <div class="search_bg">
                    <span>搜索</span>
                </div>
            </router-link>
        </div>
        <div class="slider_bar"><Slider/></div>
        <div class="article_box">
            <div class="article_content">
               <div class="article_title">
                   <router-link to="/search" class="search">
                   创业的第二个秋天
                    </router-link>
                </div>
               <div class="article_main">
                    <router-link to="/search" class="search">
                    如果你是第一次看这个系列的文章，可从第一篇《创业的第一个春天》1 看起。 帮助别人成功，自己才有成功的机会。 Vditor & Lute 这个秋天开始实现
                    </router-link>
                </div>
                <div class="article_time">
                2019-11-11   &nbsp;·&nbsp; 技术 &nbsp;·&nbsp; 45评论 &nbsp;·&nbsp; 320浏览
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import "@/assets/css/article.css"
import Slider from "@/components/slider"
import Tab from "@/components/tab"
export default {
    components:{
        Slider,
        Tab
    }
}
</script>
<style scoped>
</style>
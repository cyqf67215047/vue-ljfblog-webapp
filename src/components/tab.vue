<template>
    <div class="main_box">
        <router-link tag="div" class="tab-item" to="/newestArticle">
            <span>最新文章</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/category">
            <span>分类</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .main_box{
        width: 100%;
        height: 42px;
        background: white;
        display: flex;
        line-height: 42px;
    }
    .tab-item{
        flex:1;
        text-align: center;
    }
    .span{
        padding-bottom: 3px;
    }
    .router-link-active{
        color: #31c27c;
        border-bottom:2px solid #31c27c;
    }
</style>
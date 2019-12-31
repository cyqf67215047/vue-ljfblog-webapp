<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Bottom/>
  </div>
</template>

<script>
import Header from "@/components/header"
import Bottom from "@/components/bottom"
export default {
  components:{
    Header,
    Bottom
  }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
  font-size: .12rem;
  background: #FAFAFA;
}
a{
  text-decoration: none;
  color: rgba(21,23,26,0.8);
}
a:hover{
  background: red;
}
</style>

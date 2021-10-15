<template>
  <nav>
    <ul>
      <li v-for="m in menus" :key="m.id" @click="click(m)" >{{m.title}}</li>  
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    menus:Array
  },
  data() {
    return {
    }
  },
  methods: {
    click(m){
      this.$emit('clickNav',m)
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color:#128b8b;
  color:white;
  width:200px;
  height:300px;
  float:left;
  text-align: left;
}
</style>
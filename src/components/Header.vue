<template>
  <header>
    <div @click="goHome">B COOP</div>
    <div v-for='c in categories' :key='c.title' @click="link(c.id)">{{c.title}}</div>
    {{todayTopic}}
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    categories:Array
  },
  computed:{
    todayTopic:{get(){return this.$store.getters.todayTopic;}}
  },
  data() {
    return {
        
    }
  },
  methods: {
    goHome(){
      
    },
    link(id){
      this.$emit('clickCategory',id)
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  width:100px;
  background-color:yellow;
  float:left;
  margin:5px;
}
</style>
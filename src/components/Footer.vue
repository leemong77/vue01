<template>
  <footer>
    {{msg}}
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg:String
  },
  data() {
    return {
        
    }
  },
  methods: {
    click(){
      //this.$emit('receive',)
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background-color:#FFCC00;
  clear:both;
}
</style>
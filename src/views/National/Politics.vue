<template>
    <div>
        
        <section>
            <transition>
                <div v-if="show">show</div>
            </transition>
       </section>
       <button v-on:click="show=!show">
           <span v-if="show">hide</span>
           <span v-if="!show">show</span>
       </button>
    </div>
</template>

<script>

export default {
    name:'politics',
    components:{
        
    },
    data(){return{
        list:[
            {name:'scv',hp:100},
            {name:'bug',hp:80},
            {name:'prove',hp:70}
        ],
        show:true
    }},
    methods:{
        attack(unit,damage){
            unit.hp -= damage;
        },
        healing(unit,damage){
            unit.hp += damage;
        },
    },
    created(){
        this.$store.dispatch('setPage','Politics');
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .v-enter-active , .v-leave-active{
        transition: opacity 1s
    }
    .v-enter , v-leave-to{
        opacity:0
    }
</style>